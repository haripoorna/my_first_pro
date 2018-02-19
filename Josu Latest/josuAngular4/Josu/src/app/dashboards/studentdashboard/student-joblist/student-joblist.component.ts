import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../admindashboard/admin.service';
@Component({
  selector: 'app-student-joblist',
  templateUrl: './student-joblist.component.html',
  styleUrls: ['./student-joblist.component.scss']
})
export class StudentJoblistComponent implements OnInit {
collection=[];
  collegeList= new Array<any>();
  constructor(private adminService:AdminService) {
    for (let i = 1; i <= 10; i++) {
      this.collection.push(`item ${i}`);
    }
   }
  employer(){
        var url="routes/studjoblist";
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