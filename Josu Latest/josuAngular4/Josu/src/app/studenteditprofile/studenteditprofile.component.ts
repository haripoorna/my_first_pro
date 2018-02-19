import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ValidationService } from '../validators/validation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{AdminService} from '../dashboards/admindashboard/admin.service';
@Component({
  selector: 'app-studenteditprofile',
  templateUrl: './studenteditprofile.component.html',
  styleUrls: ['./studenteditprofile.component.scss']
})
export class StudenteditprofileComponent implements OnInit {
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
  
  user: any
  data: any
  info = {}
  StudentForm1: any
  StudentForm3: any
  StudentForm2: any
  constructor(private formBuilder: FormBuilder, private router: Router, 
  private loginService: LoginService,private adminService:AdminService) {
    this.user = this.loginService.getUserDetails();

    this.StudentForm1 = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
    
    });

      this.StudentForm2 = this.formBuilder.group({
     
      'dob': ['', Validators.required],
      'address': ['', Validators.required],
      'zipcode': ['', Validators.required],
      'city': ['', Validators.required],
      'state': ['', Validators.required],
      'country': ['', Validators.required],
      'contactnumber': ['', Validators.required],
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