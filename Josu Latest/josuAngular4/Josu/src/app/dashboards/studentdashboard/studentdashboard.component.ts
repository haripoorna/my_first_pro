import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {LoginService } from '../../login/login.service';
import {RegisterService } from '../../register/register.service';
import { ValidationService } from '../../validators/validation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss']
})
export class StudentdashboardComponent implements OnInit {
user:any
data:any
info={}
StudentregistrationForm:any
  constructor(private formBuilder: FormBuilder,private router:Router, private loginService:LoginService,
  private registerService:RegisterService) {
     this.user = this.loginService.getUserDetails();
      // this.user = this.registerService.getUserDetails();

      this.StudentregistrationForm = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'username': ['', Validators.required],

      'email': ['', [Validators.required, ValidationService.emailValidator]],
    });
   }
logout(): void {
        // clear token remove user from local storage to log user out
        // this.authToken = null;
        // localStorage.removeItem('authToken');
          localStorage.setItem("authToken",null);
            this.router.navigate(['Home']);
    }

  ngOnInit() {

  }

}
