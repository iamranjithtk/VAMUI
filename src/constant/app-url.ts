import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
@Injectable()
export class AppUrl {

  constructor() {
  }
  static get APP_URL(): string {
    return environment.appUrl + 'api/';
  }
  static get AUTH(): string {
    return AppUrl.APP_URL + 'auth/login';
  }
}