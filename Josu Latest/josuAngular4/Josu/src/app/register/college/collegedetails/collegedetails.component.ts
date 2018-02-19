import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../../validators/validation.service';
import {RegisterService } from '../../../register/register.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-collegedetails',
  templateUrl: './collegedetails.component.html',
  styleUrls: ['./collegedetails.component.scss']
})
export class CollegedetailsComponent implements OnInit {
info: any = {

};

CollegeDetailsForm: any;
showServerError: any;
message:any;
  constructor(private formBuilder: FormBuilder , private registerService: RegisterService, private router:Router) { 
      this.CollegeDetailsForm = this.formBuilder.group({
         'College': ['', Validators.required],
          'Mobile': ['', Validators.required],
           'Landline': ['', Validators.required],
        'Address': ['', Validators.required],
         'Zipcode': ['', Validators.required],
          'State': ['', Validators.required],
           'City': ['', Validators.required],
            'Country': ['', Validators.required],
             
     


    });
   }
   college(){
      
        var url="/api/register";
        this.registerService.register(url,{info:this.info,user:"College"})
            .subscribe(
                data => {
                    console.log(data);

                   if(data.type=="success"){
                    //  localStorage.setItem("authToken",data.message.authToken);
                    this.router.navigate(['/Home/Register/College/Collegedetails/Success']);
                   }else{
                     console.log("Username already exist")
                     this.message=data.message

                   }
                },
                error => {
                     console.log(error);
                     this.showServerError="Something went wrong please try again later"
                    
                });

  
   
     
   }
  ngOnInit() {
  }

}
