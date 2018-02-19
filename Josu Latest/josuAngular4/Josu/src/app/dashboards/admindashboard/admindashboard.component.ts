import { Component, OnInit, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import{AdminService} from './admin.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {LoginService } from '../../login/login.service';
declare var $: any;
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
 sidenavright:any
 modalEl:any
 rootNode:any
 user:any
data:any
  constructor(private adminService:AdminService,private router: Router,
  private _rootNode: ElementRef,private loginService:LoginService) { 
    this.rootNode=_rootNode;
  }
  logout(): void {
        // clear token remove user from local storage to log user out
        // this.authToken = null;
        // localStorage.removeItem('authToken');
          localStorage.setItem("authToken",null);
            this.router.navigate(['/Home']);
    }

  ngOnInit() {
    
       this.user = this.loginService.getUserDetails();
           

   
  }

  //  ngAfterViewInit() {
  //       this.modalEl = $(this.rootNode.nativeElement).find('');
  //       console.log(this.modalEl);
    
}
