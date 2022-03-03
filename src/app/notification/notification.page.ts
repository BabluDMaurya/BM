import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../services/notification.service';
import { Config } from "./../config/config";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss', './../app.component.scss'],
})
export class NotificationPage implements OnInit {
  data: any;
  notification_tabs: string = "activity";
  mediaNotification = [];
  peopleNotification = [];
  url: any = Config.profilePic;
  programNotification:any
  constructor(private notification: NotificationService, public navCtrl: NavController) { }
  doRefresh(event) {
    this.ngOnInit();
    this.ionViewWillEnter();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {};
    }, 2000);
  }
  ngOnInit() {
    this.notification.getNotificationOfPeople().subscribe(
      (data: any) => {
        this.peopleNotification = data.status;
      });
    this.notification.getNotification().subscribe(
      (data: any) => {
        this.mediaNotification = data.status;
      });

    this.notification.setNotification({ 'is_read': 1 }).subscribe(
      (data: any) => {

      });

    this.notification.getNotificationOfProgram().subscribe(
      (data: any) => {
        this.programNotification = data.status;
      });
  }
  goBack() {
    this.navCtrl.back();
  }

}