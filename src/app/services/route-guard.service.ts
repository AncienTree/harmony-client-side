import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate, CanActivateChild {

  constructor(
      private auth: AuthenticationService,
      private router: Router
      ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isUserLoggedIn()) {
      const allowedRoles = route.data.allowedRoles;
      const isAuthorized = this.auth.isAuthorized(allowedRoles);   
      
      if (!isAuthorized) {
        this.router.navigate(['/accessdenied']);
      } else if (route.data.roles === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return isAuthorized;
    }
    this.router.navigate(['login']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if (this.auth.isUserLoggedIn()) {
      const allowedRoles = childRoute.data.allowedRoles;
      const isAuthorized = this.auth.isAuthorized(allowedRoles);   
      
      if (!isAuthorized) {
        this.router.navigate(['/accessdenied']);
      } else if (childRoute.data.roles === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return isAuthorized;
    }
    this.router.navigate(['login']);
    return false;
  }


}
