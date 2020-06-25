import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TeachertimetableComponent } from './teachertimetable/teachertimetable.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MaterialModule } from './shared-modules/material.module';
import { TeacherNavbarComponent } from './teacher-navbar/teacher-navbar.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';
import { TeacherStudentListComponent } from './teacher-student-list/teacher-student-list.component';
import { TeacherHomeWorkComponent } from './teacher-home-work/teacher-home-work.component';
import { TeacherUploadVideoComponent } from './teacher-upload-video/teacher-upload-video.component';
import { TeacherLiveClassComponent } from './teacher-live-class/teacher-live-class.component';
import { TeacherCheckAssignmentsComponent } from './teacher-check-assignments/teacher-check-assignments.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TeachertimetableComponent,
    HomeComponent,
    AboutusComponent,
    HelpComponent,
    ContactusComponent,
    TeacherDashboardComponent,
    AdminComponent,
    WrapperComponent,
    TeacherNavbarComponent,
    TeacherNotesComponent,
    TeacherStudentListComponent,
    TeacherHomeWorkComponent,
    TeacherUploadVideoComponent,
    TeacherLiveClassComponent,
    TeacherCheckAssignmentsComponent,
    SideBarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  schemas : [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
