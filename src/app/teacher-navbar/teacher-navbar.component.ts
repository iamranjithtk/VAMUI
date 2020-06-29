import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { StorageService } from 'src/service/storage.service';

@Component({
  selector: 'app-teacher-navbar',
  templateUrl: './teacher-navbar.component.html',
  styleUrls: ['./teacher-navbar.component.css']
})
export class TeacherNavbarComponent implements OnInit {

  constructor(
    private router: Router,public authService:AuthService
  ) { }

  ngOnInit() {
  }

  gotoClassroom(){
    this.router.navigate(['/wrapper/teacherdashboard']);
  }

}
