import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { SettingsService } from '../../services/settings.service';
import { NavParams, ModalController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['../../app.component.scss', './followers.component.scss'],
})
export class FollowersComponent implements OnInit {

  profileData: any;
  otherUser: any;

  constructor(
    public commonService: CommonService,
    private settingsService: SettingsService,
    public navParamas: NavParams,
    private router:Router
  ) { }

  ngOnInit() {
    this.profileData = this.navParamas.get('profileData');

    this.otherUser = this.navParamas.get('otherUser');
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
