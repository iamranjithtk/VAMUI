import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TeachertimetableComponent } from './teachertimetable/teachertimetable.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { ContactusComponent } from './contactus/contactus.component';
import {HttpClientModule} from '@angular/common/http';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

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
    TeacherDashboardComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  schemas : [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
