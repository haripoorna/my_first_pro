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
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
info: any = {};
  StudentdetailsForm: any;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService,private router:Router ) {
    this.StudentdetailsForm = this.formBuilder.group({
      'dob': ['', Validators.required],
      'address': ['', Validators.required],
      'zipcode': ['', Validators.required],
      'city': ['', Validators.required],
      'state': ['', Validators.required],
      'country': ['', Validators.required],
      'contactnumber': ['', Validators.required],
     
    });
  }
  next() {
    this.registerService.saveDetails(this.info);
this.router.navigate(['/Home/Register/Student/Studentdetails/Academicdetails'])
  }
  ngOnInit() {
  }

}
