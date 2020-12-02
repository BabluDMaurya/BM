import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-notification-control',
  templateUrl: './notification-control.page.html',
  styleUrls: ['./../../app.component.scss','./notification-control.page.scss'],
})
export class NotificationControlPage implements OnInit {
  emailSent : any;
  requestsFromAnyone: any;
  peopleIFollow: any;
  programAcceptances: any;
  videoSent: any;
  posts: any;
  postResponses: any;
  following: any;
  
  data : any;
  constructor(
    public settingService: SettingsService,    
  ) { }

  ngOnInit() {
    this.settingService.getNotificationControl().subscribe(
      (data: any) => {       
        this.following = data.following;
        this.posts = data.posts;
        this.postResponses = data.postResponses;
        this.videoSent = data.videoSent;
        this.programAcceptances = data.programAcceptances;
        this.peopleIFollow = data.peopleIFollow;
        this.requestsFromAnyone = data.requestsFromAnyone;
        this.emailSent = data.emailSent;
      },
      err => {
        console.error('error msg!',err);
      });
  }

  followingNotiCont(){
    this.following = this.apiResponce('following',this.following);
  }
  postsNotiCont(){  
    this.posts = this.apiResponce('posts',this.posts);
  }
  postResponsesNotiCont(){
    this.postResponses = this.apiResponce('postResponses',this.postResponses);
  }
  videoSentNotiCont(){
    this.videoSent = this.apiResponce('videoSent',this.videoSent);
  }
  programAcceptancesNotiCont(){
    this.programAcceptances = this.apiResponce('programAcceptances',this.programAcceptances);
  }
  peopleIFollowNotiCont(){
    this.peopleIFollow = this.apiResponce('peopleIFollow',this.peopleIFollow);
  }
  requestsFromAnyoneNotiCont(){
    this.requestsFromAnyone = this.apiResponce('requestsFromAnyone',this.requestsFromAnyone);  
  }
  emailSentNotiCont(){
    this.emailSent = this.apiResponce('emailSent',this.emailSent);
  }
  async apiResponce(Name,Value){
    this.settingService.setNotificationControl({'name':Name, 'value' : Value}).subscribe(
      (data: any) => {
        return data.status;
      },
      err => {
        console.error('error msg!',err);
      }); 
  }
}
