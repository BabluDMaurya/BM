import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../../services/common.service';
import { PeopleViewService } from 'src/app/services/people-view.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['../../../app.component.scss', './notification-modal.component.scss'],
})
export class NotificationModalComponent implements OnInit {
  profileData: any;
  toggleDiscussion: boolean;
  toggleImage: boolean;
  toggleVideo: boolean;
  toggleProgram: boolean;

  constructor(public commonService: CommonService,
    private peopleService: PeopleViewService,
    private navParams: NavParams) { }

  ngOnInit() {
    this.profileData = this.navParams.get('profileData');
    this.commonService.presentLoader();
    this.peopleService.getUserNotification({ 'cid': this.profileData.userData.id }).subscribe(data => {

      this.commonService.dismissLoader();
      if (data.status) {
        this.toggleDiscussion = data.status.discussion;
        this.toggleImage = data.status.image;
        this.toggleVideo = data.status.video;
        this.toggleProgram = data.status.program;
      }
    },
      err => {
        this.commonService.dismissLoader();
      })
  }

  disableNotification(colName, value) {
    this.commonService.presentLoader();
    this.peopleService.userNotification({ 'cid': this.profileData.userData.id, 'type': colName, 'value': value }).subscribe(data => {
      console.log(data);
      this.commonService.dismissLoader();
      this.commonService.presentToast(data.toast+" "+this.profileData.userData.user_name);
    }, err => {
      this.commonService.dismissLoader();
    });
  }

  closeModal() {
    this.commonService.dismissModal();
  }
}
