import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validators/validation.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
 loginactive:boolean= true;
 registeractive:boolean= false;
  constructor( private router: Router,  ) {
       
   }
login(){
 this.loginactive = !this.loginactive;
}
register(){
 this.registeractive = !this.registeractive;
}
  ngOnInit() {
  }

}
