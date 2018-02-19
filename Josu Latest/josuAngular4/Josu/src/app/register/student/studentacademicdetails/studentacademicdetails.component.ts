import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../validators/validation.service';
import {LoginService } from '../../../login/login.service';
import {RegisterService } from '../../../register/register.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentacademicdetails',
  templateUrl: './studentacademicdetails.component.html',
  styleUrls: ['./studentacademicdetails.component.scss']
})
export class StudentacademicdetailsComponent implements OnInit {
 Branchs = [
    {value: 'ECE-0', viewValue: 'ECE'},
    {value: 'CSE-1', viewValue: 'CSE'},
    {value: 'EEE-2', viewValue: 'EEE'},
    {value: 'MECH-3', viewValue: 'MECH'},
    {value: 'IT-4', viewValue: 'IT'}
  ];
  Years = [
    {value: '2011-0', viewValue: '2011'},
    {value: '2012-1', viewValue: '2012'},
    {value: '2013-2', viewValue: '2013'},
    {value: '2014-3', viewValue: '2014'},
    {value: '2015-4', viewValue: '2015'},
    {value: '2016-5', viewValue: '2016'},
    {value: '2017-6', viewValue: '2017'}
  ];
   Colleges = [
    {value: 'Amrita-0', viewValue: 'Amrita'},
    {value: 'JNTU-1', viewValue: 'JNTU'},
    {value: 'SV-2', viewValue: 'SV'},
    {value: 'HYD-3', viewValue: 'HYD'},
    {value: 'KAK-4', viewValue: 'KAK'},
   
  ];
  info: any = {};
  StudentregistrationForm: any;
  message:any;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService,
  private router : Router) {
    this.StudentregistrationForm = this.formBuilder.group({
      'college': ['', Validators.required],
      'year': ['', Validators.required],
      'branch': ['', Validators.required],

      
    });
  }

  student(){
      
        var url="/api/register";
        this.registerService.register(url,{info:this.info,user:"Student"})
            .subscribe(
                data => {
                    console.log(data);
                   if(data.type="success"){
                    //  localStorage.setItem("authToken",data.message.authToken);
                    this.router.navigate(['/Home/Register/Employer/Employerdetails/Professionaldetails/Success']);
                   }else{
                     console.log("Usename Already Exist")
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
