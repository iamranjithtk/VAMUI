import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  teacherInfo;
  constructor(private router: Router) {

    const navigation = this.router.getCurrentNavigation();
  this.teacherInfo = navigation.extras;
  }

  gotoHomeworkTab(){
    const navigation = this.router.getCurrentNavigation();
    this.router.navigate(['/wrapper/teacherdashboard/teacherhomework'], this.teacherInfo);
  }

  ngOnInit() {
  }

}
