import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validators/validation.service';
import {LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {RegisterService } from '../register/register.service';
import { Observable } from 'rxjs';
import{AdminService} from '../dashboards/admindashboard/admin.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-employereditprofile',
  templateUrl: './employereditprofile.component.html',
  styleUrls: ['./employereditprofile.component.scss']
})
export class EmployereditprofileComponent implements OnInit {

info: any = {};
employerDetailsForm: any;
employerForm:any
employerregForm:any
 constructor(  private formBuilder: FormBuilder , private registerService: RegisterService,
 private router:Router, private adminService:AdminService) {
        this.employerDetailsForm = this.formBuilder.group({
      'Position': ['', Validators.required],
       'Industry': ['', Validators.required],
        'Company': ['', Validators.required],
         'Website': ['', Validators.required],
         
     
     
   


    });
     this.employerregForm = this.formBuilder.group({
      'Mobile': ['', Validators.required],
       'Fax': ['', Validators.required],
        'Address': ['', Validators.required],
         'Zipcode': ['', Validators.required],
          'State': ['', Validators.required],
           'City': ['', Validators.required],
            'Country': ['', Validators.required],
     
     
   


    });
     this.employerForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
       'lastName': ['', Validators.required],
        'userName': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
     
   


    });
 }

 
thirdcomponent:boolean;
firstcomponent:boolean=true;
secondcomponent:boolean;
  // private loginactive = true;
  // private registeractive = false;
  // private showButtons = true;

  next() {
    // this.loginactive = !this.loginactive;
    // this.registeractive = false;
    this.firstcomponent = false;
    this.thirdcomponent=false;
   this.secondcomponent=true
     
  }
  next1() {
    this.secondcomponent=false
   this.firstcomponent = false;
    this.thirdcomponent=true;
  }


  logout(): void {
    // clear token remove user from local storage to log user out
    // this.authToken = null;
    // localStorage.removeItem('authToken');
    localStorage.setItem("authToken", null);
    this.router.navigate(['Home']);
  }
student(){
        var url="routes/getdetails";
        this.adminService.editprofile(url,this.info)
            .subscribe(
                data => {
                    console.log(data);
                  this.info=  data;
                  
                },
                error => {
                     console.log(error);
                   
                    
                });

  }
  update(){
        var url="routes/editprofile";
        this.adminService.updateprofile(url,this.info)
            .subscribe(
                data => {
                    console.log(data);
                  // this.info=  data;
                  
                },
                error => {
                     console.log(error);
                   
                    
                });

  }


  ngOnInit() {
    this.student()
  }

}