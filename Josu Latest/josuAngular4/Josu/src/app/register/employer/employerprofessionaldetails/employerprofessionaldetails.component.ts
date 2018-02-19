import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../validators/validation.service';
import {LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {RegisterService } from '../../../register/register.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-employerprofessionaldetails',
  templateUrl: './employerprofessionaldetails.component.html',
  styleUrls: ['./employerprofessionaldetails.component.scss']
})
export class EmployerprofessionaldetailsComponent implements OnInit {
 info: any = {};
employerDetailsForm: any;
message:any;
 constructor(  private formBuilder: FormBuilder , private registerService: RegisterService,private router:Router) {
        this.employerDetailsForm = this.formBuilder.group({
      'Position': ['', Validators.required],
       'Industry': ['', Validators.required],
        'Company': ['', Validators.required],
         'Website': ['', Validators.required],
         
     
     
   


    });
 }

  employer(){
      
        var url="/api/register";
        this.registerService.register(url,{info:this.info,user:"Employer"})
            .subscribe(
                data => {
                    console.log(data);
                   if(data.type=="success"){
                    //  localStorage.setItem("authToken",data.message.authToken);
                    this.router.navigate(['/Home/Register/Employer/Employerdetails/Professionaldetails/Success']);
                   }else{
                     console.log("Username Already Exist")
                     this.message=data.message

                   }
                },
                error => {
                     console.log(error);
                    
                    
                });

   }

   
  ngOnInit() {
  }

}
