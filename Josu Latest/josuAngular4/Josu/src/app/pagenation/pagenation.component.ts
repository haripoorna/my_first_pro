import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent implements OnInit {
collection = [];
  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  ngOnInit() {
  }

}
