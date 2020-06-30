import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-students-main-page',
  templateUrl: './students-main-page.component.html',
  styleUrls: ['./students-main-page.component.css']
})
export class StudentsMainPageComponent implements OnInit {

  dummyData;
  studentDataList: any;

  constructor(
    private router: Router,
    private studentService: StudentService
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
    
    this.studentService.fetchStudentDetails().subscribe(res => {
      this.studentDataList = res;
      console.log("res = "+JSON.stringify(res))
  });
  
  }

  oncardClick() {
    this.router.navigate(['/wrapper/student-dashboard']);
  }
  

}

