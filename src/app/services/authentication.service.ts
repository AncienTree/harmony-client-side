import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthToken } from '../model/authToken';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  clientId = environment.jwtClientid;
  clientSecret = environment.jwtClientSecret;

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  login(username: string, password: string): Observable<AuthToken> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
      })
    };

    const body = 'grant_type=password&username={0}&password={1}'
    .replace('{0}', username)
    .replace('{1}', password);

    return this.http.post<AuthToken>('http://localhost:8080/oauth/token', body, httpOptions);
  }

  getAuthenticatedUser() {
    return this.cookie.get(('authenticaterUser'));
  }

  // Zwraca token jeżeli użytkownik jest zalogowany
  getAuthenticatedToken() {
    if (this.isUserLoggedIn()) {
      return this.cookie.get(('token'));
    }
  }
  
  isUserLoggedIn() {
    const user = this.cookie.get(('authenticaterUser'));
    return !(user === null);
  }

  logout() {
    this.cookie.removeAll();
  }

}
