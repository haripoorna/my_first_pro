import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../admindashboard/admin.service';

@Component({
  selector: 'app-employer-collegelist',
  templateUrl: './employer-collegelist.component.html',
  styleUrls: ['./employer-collegelist.component.scss']
})
export class EmployerCollegelistComponent implements OnInit {
collection = [];
  collegeList= new Array<any>();
  constructor(private adminService:AdminService) { 
     for (let i = 1; i <= 10; i++) {
      this.collection.push(`item ${i}`);
    }
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
    this.employer()
  }

}


