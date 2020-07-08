import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-marks-assignment',
  templateUrl: './teacher-marks-assignment.component.html',
  styleUrls: ['./teacher-marks-assignment.component.css']
})
export class TeacherMarksAssignmentComponent implements OnInit {
  username: string;


  constructor(private route: ActivatedRoute) {
  
  }
 ngOnInit() {
    // observable way
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      console.log(this.username, 'gadf');
      
    });
  }


}
