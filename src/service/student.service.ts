import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/service/base.service';
import { AppUrl } from 'src/constant/app-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService{

  constructor(
    public http: HttpClient
  ) { 
    super(http)
  }

  fetchStudentDetails(): Observable<any> {
    return this.getRequest(AppUrl.STUDENT_COURSE_LIST);
  }

  fetchAssignmentQuestions(): Observable<any>{
    return this.getRequest(AppUrl.FETCH_ASSIGNMENT_QUESTIONS);
}

}
