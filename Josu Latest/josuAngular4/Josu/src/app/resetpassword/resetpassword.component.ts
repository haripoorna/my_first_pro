import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import{AdminService} from '../dashboards/admindashboard/admin.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
password:string

testing:any={}
 code: any;
data:any
  private sub: any;
message:any
  constructor(private route:ActivatedRoute,private adminservice:AdminService,
  private router:Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    
     console.log(params)
  this.code=params.token
       //this.sub = this.route.params.subscribe(params => {
      //  this.token = +params['token']; // (+) conterts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
  }

  
onMouseOver():void{

  this.message="Must contain 8-15 characters"
    console.log("Must contain 8-15 characters");
  }
  onMouseOut():void{
this.message=""
  }
  confirm(){
    var url="/api/resetPassword";
        this.adminservice.setpassword(url,{password:this.password,token:this.code})
            .subscribe(
                data => {
                    console.log(data);
                    if( (this.password && this.password == this.testing.confirmPassword && data.type=="success")){
                  
                    this.router.navigate(['/Home/Login']);
                   }else{
                     console.log("Password Notset")

                   }
                },
                error => {
                     console.log(error);
              
                });

  
   
     
   }

  }


