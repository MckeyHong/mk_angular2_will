import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Angular2 練習';

  num = 1;

  constructor() { }

  ngOnInit() {
  }

  addNumber() {
    this.num = this.num + 1;
  }

}
