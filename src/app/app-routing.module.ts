import { TeacherUploadVideoComponent } from './teacher-upload-video/teacher-upload-video.component';
import { TeacherStudentListComponent } from './teacher-student-list/teacher-student-list.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';
import { TeacherNavbarComponent } from './teacher-navbar/teacher-navbar.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HelpComponent } from './help/help.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { TeachertimetableComponent } from './teachertimetable/teachertimetable.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TeacherLiveClassComponent } from './teacher-live-class/teacher-live-class.component';
import { TeacherHomeWorkComponent } from './teacher-home-work/teacher-home-work.component';

const routes: Routes = [
  {
    path: 'wrapper', component: WrapperComponent, children: [
      { path: 'teachertimetable', component: TeachertimetableComponent },
      { path: 'teacherdashboard', component: TeacherDashboardComponent },
      { path: 'teachernavbar', component: TeacherNavbarComponent },
      { path: 'teachernotes', component: TeacherNotesComponent },
      { path: 'teacherstudentlist', component: TeacherStudentListComponent },
      { path: 'teacheruploadvideo', component: TeacherUploadVideoComponent },
      { path: 'teacherliveclass', component: TeacherLiveClassComponent },
      { path: 'teacherhomework', component: TeacherHomeWorkComponent },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'help', component: HelpComponent },
  { path: 'contact', component: ContactusComponent },

  // Wildcard Route
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
