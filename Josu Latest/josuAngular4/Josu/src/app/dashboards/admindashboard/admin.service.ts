
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { CommonService } from '../../service/common.service';

@Injectable()
export class AdminService extends CommonService {
  baseUrl: string;
  jobsTobeShared: any
  private subject = new Subject<any>();
  token: string;
  constructor(private http: Http) {
    super();

  }

  jobs(url): Observable<any> {
    return this.http.get(url,{headers:this.getAuthorizationHeader()})
      .map(res => res.json())

  }
  editprofile(url,data): Observable<any> {
    return this.http.get(url,{headers:this.getAuthorizationHeader()})
      .map(res => res.json())

  }
  updateprofile(url,data): Observable<any> {
    return this.http.post(url,{info:data},{headers:this.getAuthorizationHeader()})
      .map(res => res.json())

  }
  setpassword(url,data): Observable<any> {
    return this.http.post(url,data,{headers:this.getAuthorizationHeader()})
      .map(res => res.json())

  }
  addJobToShare(data) {
    this.jobsTobeShared.push(data);
  }

  getSharedJobs() {
    return this.jobsTobeShared;
  }

  OpenSideNav() {
    this.subject.next();
  }
  ToggleSideNav(): Observable<any> {
    return this.subject.asObservable();
  }

  getListItems(data) {
    let ObjectKey = [];
    let dataList = [];
    data.forEach(item => {
      var obj = {};
      item.forEach(element => {
        if (element.isPrimary) {
          let props = Object.getOwnPropertyNames(element);
          props.forEach(x => {
            if (x != "isPrimary") {
              if (ObjectKey.indexOf(x) == -1) {
                ObjectKey.push(x);
              }
              obj[x] = element[x];
            }
          })
        }
      });
      dataList.push(obj);
    });
    return dataList;
  }

}