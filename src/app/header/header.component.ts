import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '<i>Angular2 練習</i>';
  titlelink = 'http://blog.miniasp.com/';

  num = 1;

  constructor() { }

  ngOnInit() {
  }

  addNumber() {
    this.num = this.num + 1;
  }

}
