import { Component, OnInit } from '@angular/core';
import{AdminService} from '../admin.service';
@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.scss']
})
export class CollegelistComponent implements OnInit {
collection=[];
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
