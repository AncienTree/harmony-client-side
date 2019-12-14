import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  executeBasicAuthService(login, password) {
    const basicAuth = 'Basic ' + window.btoa(login + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuth
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/api/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticaterUser', login);
            sessionStorage.setItem('token', basicAuth);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}
