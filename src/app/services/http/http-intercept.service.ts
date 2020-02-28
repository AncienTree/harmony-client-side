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
          Authorization: 'Bearer ' + basicAuthHeaderString,
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(request);
  }
}
