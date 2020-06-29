import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/service/storage.service';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-students-main-page',
  templateUrl: './students-main-page.component.html',
  styleUrls: ['./students-main-page.component.css']
})
export class StudentsMainPageComponent implements OnInit {

  dummyData;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.dummyData = [
      {
        "teacherName": "Angela",
        "totStudents": "32",
        "subject": "English"
      },
      {
        "teacherName": "John",
        "totStudents": "38",
        "subject": "Mathematics"
      },
      {
        "teacherName": "Steve",
        "totStudents": "32",
        "subject": "Science"
      },
      {
        "teacherName": "Woz",
        "totStudents": "35",
        "subject": "Social"
      },
      {
        "teacherName": "Ronald",
        "totStudents": "32",
        "subject": "English"
      },
    ]
  //   this.authService.fetchStudentDetails().subscribe(res => {
  //     console.log("res = "+JSON.stringify(res))
  // });
  }

  oncardClick() {
    this.router.navigate(['/wrapper/student-dashboard']);
  }
  

}

