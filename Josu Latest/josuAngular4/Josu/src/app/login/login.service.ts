
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CommonService } from '../service/common.service';

@Injectable()
export class LoginService extends CommonService {
  baseUrl: string;
  userDetails: any;
  token: string;
  constructor(private http: Http) {
    super();

  }
  login(url, data): Observable<any> {

    return this.http.post(url, data)
      .map(response => {
        let data = response.json();
        console.log(data);
        this.userDetails = data.message;
        this.setToken(data.message.authToken, data.message.userName);
        return response.json()
      }


      )
  }
  getUserDetails() {
    return this.userDetails;
  }

  logout(): void {

    this.token = null;
    localStorage.removeItem('currentUser');
  }

}