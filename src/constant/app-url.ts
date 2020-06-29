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
  static get Logout(): string {
    return AppUrl.APP_URL + 'users/logout/';
  }
  static get TEACHER_COURSE_LIST(): string {
    return AppUrl.APP_URL + 'teacher/course/';
  }
  
}