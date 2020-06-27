import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-home-work',
  templateUrl: './teacher-home-work.component.html',
  styleUrls: ['./teacher-home-work.component.css']
})
export class TeacherHomeWorkComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  checkAssignment(){
    this.router.navigate(['/wrapper/teacherdashboard/teachercheckassignments']);
  }

}
