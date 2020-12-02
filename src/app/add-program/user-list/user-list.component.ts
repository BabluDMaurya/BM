import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Config } from '../../config/config';
import { CommonService } from './../../services/common.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['../../app.component.scss','./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  userList:any;
  url = Config.profilePic;
  constructor(private navParam:NavParams,
    private commonService: CommonService) { }

  ngOnInit() {
    this.userList = this.navParam.data.userList;
    console.log(this.userList);
  }
  closeModal() {
    this.commonService.dismissModal();
  }
}
