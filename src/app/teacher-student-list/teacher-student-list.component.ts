import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/service/teacher.service';

@Component({
  selector: 'app-teacher-student-list',
  templateUrl: './teacher-student-list.component.html',
  styleUrls: ['./teacher-student-list.component.css']
})
export class TeacherStudentListComponent implements OnInit {
  studentInCourseList=[];
  constructor(
    public teacherService:TeacherService
  ) { }

  ngOnInit() {
    this.getStudentInCourseList();
  }
  getStudentInCourseList(){
    this.teacherService.getStudentInCourselist().subscribe(res=>{
       this.studentInCourseList=res;
    });
  }
}
