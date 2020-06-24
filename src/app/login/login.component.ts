import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,public authService:AuthService) {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
   }
  


  ngOnInit() {
  }
  loginUser() {
      this.loginForm.get('password').markAsTouched();
      this.loginForm.get('username').markAsTouched();
      this.authService.authenticate(this.loginForm.value).subscribe(data => {
          // this.globalService.setAccessToken(data.token);
          // this.authService.self({all: true}).subscribe((userDetails) => {
          //   this.isBusy = false;
          //   this.globalService.setSelf(userDetails);
          //   this.metaService.refreshMeta();
          //   this.alertService.showSuccess({title: 'login Success', message: 'Successfully login'});
          //   this.router.navigateByUrl('home/recent-feeds');
          // }, e => {
          //   this.isBusy = false;
          //   this.alertService.showError({title: 'Self Request Error', message: e});
          // });
        },
        error => {
          // this.isBusy = false;
          // this.alertService.showError({title: 'Login Failure', message: 'User not found'});
        });
    
  }

}
