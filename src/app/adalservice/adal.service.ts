import { AdalService } from 'adal-angular4';
import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private config = {
    isAngular: true,
    instance: '',
    tenant: '',
    clientId: '',
    redirectUri: this.getRedirectUri(),
    postLogoutRedirectUri: 'http://localhost:4200/'
  };

  public getRedirectUri(): any {
    console.log('log >> auth.service.ts >> window.location.hostname :: ' + window.location.hostname);
    if ((window.location.hostname).includes('localhost')) {
      console.log('log >> auth.service.ts >> redirectUri : http://localhost:4200/');
      return 'http://localhost:4200/';
    } else {
      console.log('log >> auth.service.ts >> redirectUri : ' + 'http://' + (window.location.hostname).toLowerCase() + ':5001/');
      return 'http://' + (window.location.hostname).toLowerCase() + ':5001/';
    }
  }

  constructor(private adal: AdalService) {
    console.log(this.config);
    this.adal.init(this.config);
  }

  public handleCallback(): any {
    if (!this.isLoggedIn()) {
      this.adal.handleWindowCallback();
    }

  }

  public isLoggedIn(): boolean {
    console.log('log >> auth.service.ts >> adal.userInfo.authenticated : ' + this.adal.userInfo.authenticated);
    return this.adal.userInfo.authenticated;
  }

  public signout(): void {
    this.adal.logOut();
  }

  public startAuthentication(): any {
    this.adal.login();
  }

  public getName(): string {
    if (this.isLoggedIn() && this.adal.userInfo.profile != null) {
      return this.adal.userInfo.profile.unique_name;
    }
    return 'undefined';
  }
  public getUserName(): string {
    console.log(this.adal.userInfo.profile);
    if (typeof this.adal.userInfo.profile === 'undefined') {
      console.log('log >> auth.service.ts >> adal.userInfo.profile.unique_name :: undefined');
      return 'undefined';
    } else {
      console.log('log >> auth.service.ts >> adal.userInfo.profile.unique_name :: ' + this.adal.userInfo.profile.unique_name);
      const userName = this.adal.userInfo.profile.unique_name.match(/\((.*?)\)/);
      if (userName) {
        // let name = userName[1];
      }

      return name;
    }
  }
  public completeAuthentication(): void {
    this.adal.handleWindowCallback();

  }
}
