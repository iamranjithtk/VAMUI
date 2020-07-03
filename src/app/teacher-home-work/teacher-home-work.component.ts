import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/service/teacher.service';

@Component({
  selector: 'app-teacher-home-work',
  templateUrl: './teacher-home-work.component.html',
  styleUrls: ['./teacher-home-work.component.css']
})
export class TeacherHomeWorkComponent implements OnInit {

  constructor(
    private router: Router, private teacher: TeacherService
  ) { }

  ngOnInit() {
  }

  checkAssignment() {
    this.router.navigate(['/wrapper/teacherdashboard/teachercheckassignments']);
  }

  handleFileInput(files: FileList) {
    console.log(files.item(0));
    const formData = new FormData();

      // const blob = new Blob([jsonse], { type: '"application/json' });
    const jsonse = JSON.stringify(files[0]);
    const blob = new Blob([jsonse], { type: 'multipart/form-data' });
    formData.append(`doc_question`, blob, files[0].name);
    formData.append('topic', 'Introduction');
    formData.append('teacher', '1');
    formData.append('course', '1');

    this.teacher.uploadStudentDocs(formData).subscribe((res) => {
      console.log(res, 'res');
    });
}

}
