import { Component, OnInit } from '@angular/core';
import {CommonService} from './../../services/common.service';
import{VerifyUserComponent} from "../verify-user/verify-user.component";

@Component({
  selector: 'app-verify-user-info',
  templateUrl: './verify-user-info.component.html',
  styleUrls: ['./verify-user-info.component.scss'],
})
export class VerifyUserInfoComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {}
  verifyUserModal() {  
    this.commonService.dismissModal();  
    this.commonService.presentModal(VerifyUserComponent, 'fullpage', '');
  } 
  dismiss()
  {
    this.commonService.dismissModal();
  }

}
