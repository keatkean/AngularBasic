import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import {AuthService} from './adal.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Call canActivate method ');
    this.authService.completeAuthentication();
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.startAuthentication();
    return false;
  }

}
