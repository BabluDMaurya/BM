import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { Config } from '../../../config/config';

@Component({
  selector: 'app-adv-info',
  templateUrl: './adv-info.component.html',
  styleUrls: ['../../../app.component.scss','./adv-info.component.scss'],
})
export class AdvInfoComponent implements OnInit {

  adDetail:any;
  adManagerLink=Config.admanager;
  constructor(private navParams:NavParams,
    private commonService:CommonService) { }
  ngOnInit() { 
    this.adDetail = this.navParams.data.adDetails;
    console.log(this.adDetail);
  }
  closeModal() {
    this.commonService.dismissModal();
  }
}
