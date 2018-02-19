import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../validators/validation.service';
import {LoginService } from '../../../login/login.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {RegisterService } from '../../../register/register.service';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-employerregistration',
  templateUrl: './employerregistration.component.html',
  styleUrls: ['./employerregistration.component.scss']
})
export class EmployerregistrationComponent implements OnInit {
info: any = {};
employerForm: any;
  constructor(private formBuilder: FormBuilder , private registerService: RegisterService, private router: Router,) { 
      this.employerForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'userName': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
     
   


    });
   }
next() {
    console.log(this.info)
    this.registerService.saveDetails1(this.info);
    this.router.navigate(['/Home/Register/Employer/Employerdetails'])

  }
  ngOnInit() {
  }
  

}
