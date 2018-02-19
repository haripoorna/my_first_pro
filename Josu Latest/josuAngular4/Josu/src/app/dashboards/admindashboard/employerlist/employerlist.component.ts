import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-employerlist',
  templateUrl: './employerlist.component.html',
  styleUrls: ['./employerlist.component.scss']
})
export class EmployerlistComponent implements OnInit {
  employerList = new Array<any>();
  ObjectKey = new Array<any>();
  collection=[];
  constructor(private adminService: AdminService) {
    for (let i = 1; i <= 10; i++) {
      this.collection.push(`item ${i}`);
    }
   }
  employer() {
    var url = "routes/emplist";

    this.adminService.jobs(url)
      .subscribe(
      data => {

        // data.forEach(item => {
        //   var employer = {};
        //   item.forEach(element => {
        //     if (element.isPrimary) {
        //       let props = Object.getOwnPropertyNames(element);
        //       props.forEach(x => {
        //         if (x != "isPrimary") {
        //           if (this.ObjectKey.indexOf(x) == -1) {
        //             this.ObjectKey.push(x);
        //           }
        //           employer[x] = element[x];
        //         }
        //       })
        //     }
        //   });
        //   this.employerList.push(employer);
        // });
        this.employerList =this.adminService.getListItems(data);

      }
      )
  }
  ngOnInit() {
    this.employer()
  }

}
