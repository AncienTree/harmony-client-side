import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleAuthenticationService } from './role-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate, CanActivateChild {

  constructor(
    private roleAuth: RoleAuthenticationService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.roleAuth.isAuthorized(allowedRoles);

    if (!isAuthorized) {
      this.router.navigate(['/accessdenied']);
    } else if (next.data.roles === -1) {
      this.router.navigate(['/']);
      return false;
  }

    return isAuthorized;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.roleAuth.isAuthorized(allowedRoles);

    if (!isAuthorized) {
      this.router.navigate(['accessdenied']);
    }

    return isAuthorized;
  }

}
