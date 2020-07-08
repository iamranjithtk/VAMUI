import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUrl } from 'src/constant/app-url';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);

   }

 
  getTeacherCourselist(): Observable<any> {
    return this.getRequest(AppUrl.TEACHER_COURSE_LIST);
  }

  getStudentInCourselist(): Observable<any> {
    return this.getRequest(AppUrl.STUDENT_IN_COURSE);
  }

  getAssignmentlist(courseId): Observable<any> {
    return this.getRequest(AppUrl.ASSIGNMENT_LIST+courseId);
  }

}
