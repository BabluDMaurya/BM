import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificationService } from './../services/notification.service';
import { CommonService } from 'src/app/services/common.service';
import {AdDetailsComponent} from '../program/ad-details/ad-details.component';
import { ProgramService } from '../services/program.service';
import { Router } from '@angular/router';
import {SponserCommentComponent} from '../program/ad-details/sponser-comment/sponser-comment.component';

@Component({
  selector: 'app-sponcer-chat',
  templateUrl: './sponcer-chat.page.html',
  styleUrls: ['./sponcer-chat.page.scss'],
})
export class SponcerChatPage implements OnInit {
 sponcers:any;
 adData:any; 
  constructor(
    public navCtrl: NavController,
    private notification: NotificationService,
    public commonService: CommonService,
    private programService: ProgramService,
    public router: Router,
    ) { }

  ngOnInit() {
    this.commonService.presentLoader();
    this.notification.getSponcerChatDetails().subscribe(
      (data: any) => {
        this.sponcers = data.slist;
        this.commonService.dismissLoader();
      });
  }  
  unread(event){
    console.log("event:"+JSON.stringify(event));
    this.commonService.presentModal(SponserCommentComponent,'fullModal',{'adDetails':event});
  }
goBack() {
    this.navCtrl.back();
  }
}
