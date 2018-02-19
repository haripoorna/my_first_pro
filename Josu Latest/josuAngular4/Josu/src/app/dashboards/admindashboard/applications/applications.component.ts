import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import{AdminService} from '../admin.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  @Output() OpenSideNav = new EventEmitter<any>();
  
  collegeList= new Array<any>();
jobList= new Array<any>();
selectedJob:any
  constructor(private adminService:AdminService) { 
   this.selectedJob={
     jobTitle:"",
     jobDesc:"",
     skills:[]

   }  }
 jobs(){
        var url="/routes/pipelinejobs";
        this.adminService.jobs(url)
            .subscribe(
                data => {
                    console.log(data);
                    this.jobList= data;
                    
                  
                },
                error => {
                     console.log(error);
                   
                    
                });

  }
  jobselected(){
    
  }
 employer(){
        var url="routes/collist";
        this.adminService.jobs(url)
            .subscribe(
                data => {
                    console.log(data);
                  this.collegeList=  this.adminService.getListItems(data);
                  
                },
                error => {
                     console.log(error);
                   
                    
                });

  }

  ngOnInit() {
    this.jobs();
this.employer();
    
  }
  openSideNavBar(){
    this.adminService.OpenSideNav();
  }
}