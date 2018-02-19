
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CommonService } from '../service/common.service';
import {Register} from "./info";

@Injectable()
export class RegisterService extends CommonService {
  baseUrl: string;
  userDetails:any
  private _registerInfo:Register;
   private _registerInfo1:Register;

  token: string;
  constructor(private http: Http) {
    super();
    this._registerInfo=new Register();
     this._registerInfo1=new Register();

  }
  saveDetails(data){
    this._registerInfo= data;
  }
   saveDetails1(data){
    this._registerInfo1= data;
  }
  register(url, data): Observable<any> {
    Object.assign(data.info, this._registerInfo,this._registerInfo1);
  
    return this.http.post(url, data )
      .map(response =>{
           response.json();
            this.userDetails = data.info;
        // this.setToken(data.message.authToken, data.info.userName);
         return response.json()
      }
       
       
      )
       
  }
  
logout(): void {
  
  this.token = null;
  localStorage.removeItem('currentUser');
}

}