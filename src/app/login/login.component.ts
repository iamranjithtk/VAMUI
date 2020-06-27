import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,public authService:AuthService,public router: Router) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
   }
  


  ngOnInit() {
  }
  loginUser() {
      this.loginForm.get('password').markAsTouched();
      this.loginForm.get('email').markAsTouched();
      this.authService.authenticate(this.loginForm.value).subscribe(data => {
        if(data.role[0]==='TEACHER')
        {
        
          this.router.navigate(['/register']);
        }
        
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
