import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   content: any;

  constructor() {
      
   }

  ngOnInit() {
      console.log(this.content);
  }

}