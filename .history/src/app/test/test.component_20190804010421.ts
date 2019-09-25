import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   content;

  constructor() {
      this.content = document.getElementById('content').nodeValue;
   }

  ngOnInit() {
      console.log(this.content);
  }

}