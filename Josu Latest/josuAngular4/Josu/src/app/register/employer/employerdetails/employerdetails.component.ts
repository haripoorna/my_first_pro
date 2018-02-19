import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../validators/validation.service';
import {LoginService } from '../../../login/login.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {RegisterService } from '../../../register/register.service';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-employerdetails',
  templateUrl: './employerdetails.component.html',
  styleUrls: ['./employerdetails.component.scss']
})
export class EmployerdetailsComponent implements OnInit {
 info: any = {};
employerDetailsForm: any;
 constructor(  private formBuilder: FormBuilder , private registerService: RegisterService,
 private router: Router) {
        this.employerDetailsForm = this.formBuilder.group({
      'Mobile': ['', Validators.required],
       'Fax': ['', Validators.required],
        'Address': ['', Validators.required],
         'Zipcode': ['', Validators.required],
          'State': ['', Validators.required],
           'City': ['', Validators.required],
            'Country': ['', Validators.required],
     
     
   


    });
 }

 next() {
    this.registerService.saveDetails(this.info);
this.router.navigate(['/Home/Register/Employer/Employerdetails/Professionaldetails'])
  }
  ngOnInit() {
  }

}
