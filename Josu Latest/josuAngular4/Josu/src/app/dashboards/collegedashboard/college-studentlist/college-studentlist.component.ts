import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../admindashboard/admin.service';

@Component({
  selector: 'app-college-studentlist',
  templateUrl: './college-studentlist.component.html',
  styleUrls: ['./college-studentlist.component.scss']
})
export class CollegeStudentlistComponent implements OnInit {
collection=[];
  studentList= new Array<any>();
  constructor(private adminService:AdminService) {
    for (let i = 1; i <= 10; i++) {
      this.collection.push(`item ${i}`);
    }
   }
  employer(){
        var url="routes/studlist";
        this.adminService.jobs(url)
            .subscribe(
                data => {
                    console.log(data);
                    this.studentList=  this.adminService.getListItems(data);
                  
                },
                error => {
                     console.log(error);
                   
                    
                });

  }


  ngOnInit() {
    this.employer()
  }

}

