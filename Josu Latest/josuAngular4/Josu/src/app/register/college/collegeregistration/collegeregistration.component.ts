import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../../register/register.service';
import { ValidationService } from '../../../validators/validation.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-collegeregistration',
  templateUrl: './collegeregistration.component.html',
  styleUrls: ['./collegeregistration.component.scss']
})
export class CollegeregistrationComponent implements OnInit {
  info: any = {};
  CollegeForm: any;
  showServerError: any;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.CollegeForm = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'Lastname': ['', Validators.required],
      'Username': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],




    });
  }
  next() {
    this.registerService.saveDetails(this.info);


    this.router.navigate(['/Home/Register/College/Collegedetails'])


  }
  ngOnInit() {
  }

}
