import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  // file: File = null;
  teacherInfoData;
  assignmentTopic = '';
  progressLoading = new Subject<any>();
  constructor(
    private router: Router, private teacher: TeacherService, private route: ActivatedRoute
  ) {
    const navigation = this.router.getCurrentNavigation();
     this.teacherInfoData = navigation.extras;
   }

  ngOnInit() {
  }

  checkAssignment() {
    this.router.navigate(['/wrapper/teacherdashboard/teachercheckassignments']);
  }

  handleFileInput(files: FileList) {
    this.fileUpload(files.item(0)).subscribe(res => {
      console.log(res);
    });
}
public fileUpload(files: any) {
  return Observable.create(observer => {
    const formData: FormData = new FormData();
    const xhr: XMLHttpRequest = new XMLHttpRequest();

    formData.append(`doc_question`, files, files.name);
    formData.append('topic', this.assignmentTopic);
    formData.append('teacher', this.teacherInfoData.state.teacherId);
    formData.append('course', this.teacherInfoData.state.courseId);


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
