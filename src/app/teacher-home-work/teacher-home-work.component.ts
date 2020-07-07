import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/service/teacher.service';
import { Observable, Subject } from 'rxjs';
import { AppUrl } from 'src/constant/app-url';
import { StorageService } from 'src/service/storage.service';

@Component({
  selector: 'app-teacher-home-work',
  templateUrl: './teacher-home-work.component.html',
  styleUrls: ['./teacher-home-work.component.css']
})
export class TeacherHomeWorkComponent implements OnInit {
  file: File = null;
  progressLoading = new Subject<any>();
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
    this.file = files.item(0);
    // const formData = new FormData();

      
    // const jsonse = JSON.stringify(files[0]);
    // const blob = new Blob([jsonse], { type: 'multipart/form-data' });
    // formData.append(`doc_question`, blob, files[0].name);
    // formData.append('topic', 'Introduction');
    // formData.append('teacher', '1');
    // formData.append('course', '1');

    // this.teacher.uploadStudentDocs(formData).subscribe((res) => {
    //   console.log(res, 'res');
    // });
    this.fileUpload(this.file).subscribe(res=>{
      console.log(res);
    });
}
public fileUpload(files: any) {
  return Observable.create(observer => {
    const formData: FormData = new FormData();
    const xhr: XMLHttpRequest = new XMLHttpRequest();

    // formData.append('file', files, files.name);
    //     const jsonse = JSON.stringify(files);
    // const blob = new Blob([jsonse], { type: 'multipart/form-data' });
    formData.append(`doc_question`, files, files.name);
    formData.append('topic', 'Introduction');
    formData.append('teacher', '1');
    formData.append('course', '1');


    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          observer.next(JSON.parse(xhr.response));
          observer.complete();
        } else {
          observer.error(xhr.response);
        }
      }
    };

    xhr.upload.onprogress = (event) => {
       this.progressLoading.next(Math.round(event.loaded / event.total * 100));
    };

    xhr.open('POST', AppUrl.uploadDocs(), true);
    // if (this.globalService.getAccessToken()) {
      // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
      // xhr.setRequestHeader('Env-id', this.globalService.getSelf().getCurrentEnvironment().envMappingId + '');
      xhr.setRequestHeader('Authorization', 'Token ' + StorageService.getItem('token'));
    // }
    xhr.send(formData);
  });
}



}
