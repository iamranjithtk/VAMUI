import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-homework',
  templateUrl: './student-homework.component.html',
  styleUrls: ['./student-homework.component.css']
})
export class StudentHomeworkComponent implements OnInit {

  assignmentQuestions = [];
  isLoading = false;

  constructor(
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.fetchAssignmentQuestions();
  }

  fetchAssignmentQuestions() {
    this.isLoading = true;
    this.studentService.fetchAssignmentQuestions().subscribe(res => {
      this.isLoading = false;
      this.assignmentQuestions = res;
    })
  }

  viewQuestions(url){
    window.open("https://vam-school.herokuapp.com"+url, "_new");
  }

  downloadQuestions(){}

  uploadAnswers(){}

}
