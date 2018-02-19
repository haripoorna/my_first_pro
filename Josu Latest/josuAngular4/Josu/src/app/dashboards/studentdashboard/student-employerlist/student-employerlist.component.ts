import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../admindashboard/admin.service';
@Component({
  selector: 'app-student-employerlist',
  templateUrl: './student-employerlist.component.html',
  styleUrls: ['./student-employerlist.component.scss']
})
export class StudentEmployerlistComponent implements OnInit {
collection=[];
  employerList= new Array<any>();
  constructor(private adminService:AdminService) {
    for (let i = 1; i <= 10; i++) {
      this.collection.push(`item ${i}`);
    }
   }
  employer(){
        var url="routes/emplist";
        this.adminService.jobs(url)
            .subscribe(
                data => {
                    console.log(data);
                  this.employerList=  this.adminService.getListItems(data);
                  
                },
                error => {
                     console.log(error);
                   
                    
                });

  }


  ngOnInit() {
    this.employer()
  }

}
