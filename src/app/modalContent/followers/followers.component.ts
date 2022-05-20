import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { SettingsService } from '../../services/settings.service';
import { NavParams, ModalController } from '@ionic/angular';
import { PeopleViewService } from '../../services/people-view.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['../../app.component.scss', './followers.component.scss'],
})
export class FollowersComponent implements OnInit {

  profileData: any;
  otherUser: any;
  followers: any;
  followings: any;
  constructor(
    public commonService: CommonService,
    private settingsService: SettingsService,
    public navParamas: NavParams,
    private router:Router,
    public peopleViewService: PeopleViewService,
  ) { }

  ngOnInit() {
    this.profileData = this.navParamas.get('profileData');
    console.log(this.profileData);
    this.otherUser = this.navParamas.get('otherUser');

    this.peopleViewService.getFollowers('').subscribe(
      (data: any) => {
        this.followers = data.result.length;
      });
      

      this.peopleViewService.getFollowings('').subscribe(
        (data: any) => {
         this.followings = data.result.length;
        });

  }

  dismiss() {
    let dataArray = [{ 'dismissed': true }];
    this.commonService.dismissModal(dataArray);
  }

  goToEdit(){
    console.log('sssss');
    this.commonService.dismissModal();
    this.router.navigateByUrl('/tabs/edit-profile',{ skipLocationChange: true });
  }

}
