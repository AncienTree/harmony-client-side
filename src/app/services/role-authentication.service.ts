import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticationService {

  constructor(
    private auth: AuthenticationService
    ) { }

  isAuthorized(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const token = this.auth.getAuthenticatedToken();
    const decodeToken = jwt_decode(token);

    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    return allowedRoles.includes(decodeToken['authorities']);
  }
}
