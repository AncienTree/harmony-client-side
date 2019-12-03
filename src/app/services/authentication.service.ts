import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public authenticate(login, password): boolean {
    if (login === 'test' && password === 'abc123') {
      sessionStorage.setItem('authenticaterUser', login);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
