import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
    ) { }

  executeJWTAuthService(login, password) {
    return this.http.post<any>(
      `http://localhost:8080/authenticate`, {
      login,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser', login);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser');
  }

  // Zwraca token jeżeli użytkownik jest zalogowany
  getAuthenticatedToken() {
  //  if (this.getAuthenticatedUser()) {
      if (this.isUserLoggedIn()) {
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
