import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { banner1Enter, banner2Enter, banner3Enter, banner4Enter, banner5Enter } from 'src/app/configurations/animations/anim-fn';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner-half',
  templateUrl: './banner-half.component.html',
  styleUrls: ['./banner-half.component.scss'],
  animations: [
      trigger('banner1Enter', [
         transition(':enter', [
            useAnimation(banner1Enter)
      ]) ]),
      trigger('banner2Enter', [
         transition(':enter', [
            useAnimation(banner2Enter)
      ]) ]),
      trigger('banner3Enter', [
         transition(':enter', [
            useAnimation(banner3Enter)
      ]) ]),
      trigger('banner4Enter', [
         transition(':enter', [
            useAnimation(banner4Enter)
      ]) ]),
      trigger('banner5Enter', [
         transition(':enter', [
            useAnimation(banner5Enter)
      ]) ]),
   ]
})
export class BannerHalfComponent implements OnInit {

   banner1AnimationDone: boolean = false;
   banner2AnimationDone: boolean = false;
   banner3AnimationDone: boolean = false;
   banner4AnimationDone: boolean = false;
   pageTitle: string;

  constructor(
     private route: ActivatedRoute
  ) { }

  ngOnInit() {
     this.banner1AnimationDone = true;
     this.banner2AnimationDone = true;

     this.route.url.subscribe(
        (response: any) => {
           console.log(response[0].path);
           this.pageTitle = response[0].path;
        }
     )

  }

   banner3Done(event){
      if(event.phaseName === 'done') this.banner3AnimationDone = true;
   }

   banner4Done(event){
      if(event.phaseName === 'done') this.banner4AnimationDone = true;
   }



}
