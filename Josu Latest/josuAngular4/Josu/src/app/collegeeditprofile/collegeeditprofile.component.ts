


 import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register/register.service';
import { ValidationService } from '../validators/validation.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import{AdminService} from '../dashboards/admindashboard/admin.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-collegeeditprofile',
  templateUrl: './collegeeditprofile.component.html',
  styleUrls: ['./collegeeditprofile.component.scss']
})
export class CollegeeditprofileComponent implements OnInit {
  info: any = {};
  CollegeForm: any;
  CollegeDetailsForm:any;
  showServerError: any;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService,
   private router: Router,private adminService:AdminService) {
    this.CollegeForm = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'Lastname': ['', Validators.required],
      'Username': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],




    });
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
  thirdcomponent:boolean;
firstcomponent:boolean=true;
secondcomponent:boolean;
  next() {
  
    this.firstcomponent = false;
    this.thirdcomponent=false;
   this.secondcomponent=true
     
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