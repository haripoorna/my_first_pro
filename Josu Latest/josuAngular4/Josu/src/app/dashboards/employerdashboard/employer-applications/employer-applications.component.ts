import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import{AdminService} from '../../admindashboard/admin.service';

@Component({
  selector: 'app-employer-applications',
  templateUrl: './employer-applications.component.html',
  styleUrls: ['./employer-applications.component.scss']
})
export class EmployerApplicationsComponent implements OnInit {
  @Output() OpenSideNav = new EventEmitter<any>();
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
 

  ngOnInit() {
    this.jobs();

    
  }
  openSideNavBar(){
    this.adminService.OpenSideNav();
  }
}
