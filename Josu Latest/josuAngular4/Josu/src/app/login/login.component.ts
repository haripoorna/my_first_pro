import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validators/validation.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status:any;
   isActive: boolean = false;
 model: any = {};
 showServerError:String;
UserDetailsForm: any;
 constructor(  private formBuilder: FormBuilder , private router: Router, private loginService: LoginService) {
        this.UserDetailsForm = this.formBuilder.group({
      'password': ['', Validators.required],
      'username': ['', Validators.required],
     });
   }
   Login(){
        var url="/api/login";
        this.loginService.login(url,this.model)
            .subscribe(
                data => {
                    console.log(data);
                   if(data.type == "success" && data.message.typeId == "UT4"){
                     localStorage.setItem("authToken",data.message.authToken);
                    this.router.navigate(['Admin']);
                   }
                   else if(data.type == "success" && data.message.typeId == "UT1"){
            this.router.navigate(['Student']);
                   }
                   else if(data.type == "success" && data.message.typeId == "UT2"){
            this.router.navigate(['College']);
                   }
                   else if(data.type == "success" && data.message.typeId == "UT3"){
            this.router.navigate(['Employer']);
                   }
                   else{
                     this.isActive = !this.isActive;
                     this.status="Invalid Credentials";
                     console.log("Invalid Credentials")
                   }
                },
                error => {
                     console.log(error);
                     this.showServerError="Something went wrong please try again later"
                    
                });

  }

    
   
  ngOnInit() {
  }
forgotpswd(){
  
this.router.navigate(['/Forgotpassword'])

}

}
