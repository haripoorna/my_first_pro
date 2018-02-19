import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../validators/validation.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{AdminService} from '../../dashboards/admindashboard/admin.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
info={}

UserDetailsForm:any
  constructor(private formBuilder: FormBuilder , private router: Router,private adminservice:AdminService) {
        this.UserDetailsForm = this.formBuilder.group({
      'Email': ['',[Validators.required, ValidationService.emailValidator]],
     });
   }
    confirm(){
    var url="/api/forgotPassword";
        this.adminservice.setpassword(url,this.info)
            .subscribe(
                data => {
                    console.log(data);
                   if(data){
                    //  localStorage.setItem("authToken",data.message.authToken);
                    this.router.navigate(['/Home/Login']);
                   }else{
                     console.log("Password Notset")

                   }
                },
                error => {
                     console.log(error);
              
                });

  
   
     
   }
  ngOnInit() {
  }

}
