import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor {
  constructor(
    private auth: AuthenticationService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const basicAuthHeaderString = this.auth.getAuthenticatedToken();
    const username = this.auth.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization : basicAuthHeaderString,
          'Content-Type' : 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
