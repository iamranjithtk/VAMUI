import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
import { AdminComponent } from '../admin/admin.component';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { TeacherNotesComponent } from '../teacher-notes/teacher-notes.component';
import { TeacherStudentListComponent } from '../teacher-student-list/teacher-student-list.component';
import { TeacherHomeWorkComponent } from '../teacher-home-work/teacher-home-work.component';
import { TeacherUploadVideoComponent } from '../teacher-upload-video/teacher-upload-video.component';
import { TeacherLiveClassComponent } from '../teacher-live-class/teacher-live-class.component';
import { TeacherCheckAssignmentsComponent } from '../teacher-check-assignments/teacher-check-assignments.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';
import { StudentLiveClassComponent } from '../student-live-class/student-live-class.component';
import { StudentVideosComponent } from '../student-videos/student-videos.component';
import { StudentNotesComponent } from '../student-notes/student-notes.component';
import { TeachertimetableComponent } from '../teachertimetable/teachertimetable.component';
import { StudentHomeworkComponent } from '../student-homework/student-homework.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { StudentsMainPageComponent } from '../students-main-page/students-main-page.component';
import { TeacherNavbarComponent } from '../teacher-navbar/teacher-navbar.component';
import { HeaderComponent } from '../header/header.component';
import { HtpInterceptor } from 'src/service/interceptor.service';

@NgModule({
  declarations: [
    TeachertimetableComponent,
    TeacherDashboardComponent,
    AdminComponent,
    WrapperComponent,
    TeacherNotesComponent,
    TeacherStudentListComponent,
    TeacherHomeWorkComponent,
    TeacherUploadVideoComponent,
    TeacherLiveClassComponent,
    TeacherCheckAssignmentsComponent,
    SideBarComponent,
    StudentDashboardComponent,
    StudentLiveClassComponent,
    StudentVideosComponent,
    StudentNotesComponent,
    StudentHomeworkComponent,
    SideBarComponent,
    StudentsMainPageComponent,
    TeacherNavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    TeachertimetableComponent,
    TeacherDashboardComponent,
    AdminComponent,
    WrapperComponent,
    TeacherNotesComponent,
    TeacherStudentListComponent,
    TeacherHomeWorkComponent,
    TeacherUploadVideoComponent,
    TeacherLiveClassComponent,
    TeacherCheckAssignmentsComponent,
    SideBarComponent,
    StudentDashboardComponent,
    StudentLiveClassComponent,
    StudentVideosComponent,
    StudentNotesComponent,
    StudentsMainPageComponent,
    TeacherNavbarComponent,
    HeaderComponent
  ],
  providers: [HtpInterceptor]
})
export class SharedModule { }
