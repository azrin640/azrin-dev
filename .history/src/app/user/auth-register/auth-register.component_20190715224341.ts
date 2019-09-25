import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { iconButtonEnter } from 'src/app/animations/anim-fn';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
  animations: [
   trigger('y-mouse-enter', [
      transition(':enter', [
         useAnimation(iconButtonEnter)
   ]) ]) ]
})
export class AuthRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}