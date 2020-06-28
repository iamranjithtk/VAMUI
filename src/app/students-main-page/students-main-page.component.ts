import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/service/storage.service';

@Component({
  selector: 'app-students-main-page',
  templateUrl: './students-main-page.component.html',
  styleUrls: ['./students-main-page.component.css']
})
export class StudentsMainPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  oncardClick() {
    this.router.navigate(['/wrapper/student-dashboard']);
  }
  logout() {
    StorageService.clearAll();
    location.reload();

  }

}
