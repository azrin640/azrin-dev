import { Component, OnInit, AfterContentInit } from '@angular/core';
import { VisitorService } from 'src/app/configurations/services/visitor-service/visitor-service.service';
import { User } from 'src/app/configurations/model/user';
import { FormGroup, FormControl } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { imageEnterDrop } from 'src/app/configurations/animations/anim-fn';

@Component({
  selector: 'app-visitor-avatar',
  templateUrl: './visitor-avatar.component.html',
  styleUrls: ['./visitor-avatar.component.scss'],
  animations: [
   trigger('imageEnterDrop', [
      transition(':enter', [            
         useAnimation(imageEnterDrop)
   ]) ]) ]
})
export class VisitorAvatarComponent implements OnInit, AfterContentInit {

   avatars = {
      boys: [ 'avatars/boy', 'avatars/boy-1', 'avatars/boy-2', 'avatars/boy-3', 'avatars/boy-4', 'avatars/boy-5' ],
      girls: [ 'avatars/girl', 'avatars/girl-1', 'avatars/girl-2', 'avatars/girl-3', 'avatars/girl-4', 'avatars/girl-5' ]
   };
   formAvatarGroup;
   visitor: User;
   loading: boolean = false;
   avatarName: string = '';

  constructor(
     private visitorService: VisitorService
  ) {
         this.formAvatarGroup = new FormGroup({
            image: new FormControl('')
         });
         
         this.visitorService.visitorProfile.subscribe(
            (response: User) => {
               if(response) this.visitor = response;
               else this.visitor = null;
            } 
         );
   }

  ngOnInit() {

      this.loading = true;
      
  }

  get imageCtrl() { return this.formAvatarGroup.get('image')};

  ngAfterContentInit(){
     this.loading = false;
  }

  updateVisitor()
  {   let data = { name: this.visitor.name, image: this.imageCtrl.value };
      this.visitorService.visitorSource.next(data);
  }

  mouseEnterImage(avatarName)
  {
     console.log(avatarName);
     this.avatarName = avatarName;
  }

}
