import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import{LoginService} from '../../login/login.service'

@Component({
  selector: 'app-collegedashboard',
  templateUrl: './collegedashboard.component.html',
  styleUrls: ['./collegedashboard.component.scss']
})
export class CollegedashboardComponent implements OnInit {
user:any;
data:any
  constructor(private router:Router,private loginService:LoginService) {
 
  
  }
logout(): void {
        // clear token remove user from local storage to log user out
        // this.authToken = null;
        // localStorage.removeItem('authToken');
          localStorage.setItem("authToken",null);
            this.router.navigate(['Home']);
    }
  ngOnInit() {
     this.user = this.loginService.getUserDetails();

  }


}
