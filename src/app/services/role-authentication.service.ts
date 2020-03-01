import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticationService {

  constructor(
    private jwtHelperService: JwtHelperService,
    private auth: AuthenticationService
    ) { }

  isAuthorized(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const token = this.auth.getAuthenticatedToken();
    const decodeToken = this.jwtHelperService.decodeToken(token);

    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    return allowedRoles.includes(decodeToken['authorities']);
  }
}
