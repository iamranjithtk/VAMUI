import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
@Injectable()
export class AppUrl {

  constructor() {
  }
  static get APP_URL(): string {
    return environment.appUrl;
  }
  static get AUTH(): string {
    return AppUrl.APP_URL + 'users/login_with_password/';
  }
}