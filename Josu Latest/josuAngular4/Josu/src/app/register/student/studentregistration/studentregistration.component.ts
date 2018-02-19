import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../validators/validation.service';
import {LoginService } from '../../../login/login.service';
import {RegisterService } from '../../../register/register.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.scss']
})
export class StudentregistrationComponent implements OnInit {
  info: any = {};
  StudentregistrationForm: any;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router:Router ) {
    this.StudentregistrationForm = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'username': ['', Validators.required],

      'email': ['', [Validators.required, ValidationService.emailValidator]],
    });
  }
  next() {
    this.registerService.saveDetails1(this.info);
    this.router.navigate(['/Home/Register/Student/Studentdetails'])

  }
  ngOnInit() {
  }

}
