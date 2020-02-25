import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { map, catchError, filter, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private auth: AuthenticationService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const basicAuthHeaderString = this.auth.getAuthenticatedToken();
    const username = this.auth.getAuthenticatedUser();

    // Dodanie do każdego requesta Token oraz typ zapytania
    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization : 'Bearer ' + basicAuthHeaderString,
         'Content-Type' : 'application/json'
        }
      });
    }

    return next.handle(request)
      .pipe(catchError(error => {
        if(error.status === 401) {
          console.log("Token wygasł");          
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
  
      return this.auth.refreshToken().pipe(
        switchMap((token: any) => {
          console.log("Odnawianie tokenu");          
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.refresh_token);
          return next.handle(request);
        }));
  
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(request);
        }));
    }
  }
}
