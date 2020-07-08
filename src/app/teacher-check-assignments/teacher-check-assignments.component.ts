import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/service/teacher.service';

@Component({
  selector: 'app-teacher-check-assignments',
  templateUrl: './teacher-check-assignments.component.html',
  styleUrls: ['./teacher-check-assignments.component.css']
})
export class TeacherCheckAssignmentsComponent implements OnInit {

  assignmentList=[];
  constructor(
    public teacherService:TeacherService
  ) { }

  ngOnInit() {
    this.getAssignMentData();
  }
  getAssignMentData(){
    this.teacherService.getAssignmentlist().subscribe(res=>{
      console.log(res, 'hg');
      
       this.assignmentList=res;

    });
  }
}
