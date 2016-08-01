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

  editTitleText = this.title;

  num = 1;

  constructor() { }

  ngOnInit() {
  }

  addNumber() {
    this.num = this.num + 1;
  }

  editTitle($event: KeyboardEvent) {
    if ($event.keyCode == 13) {
      this.title = this.editTitleText;
    }
  }

}
