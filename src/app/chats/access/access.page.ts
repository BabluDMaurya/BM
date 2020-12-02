import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';
import { ToastController } from '@ionic/angular';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss','../../app.component.scss',],
})
export class AccessPage implements OnInit {
  chatUserId: any;
  userData:any;
  messageButtons = true;
  constructor(public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private dataService: ChatService,
    public commonService:CommonService,) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.chatUserId = params.get('chatuserId');

      // console.log("this.chatUserId:"+this.chatUserId);
    });
  }
  //---------allow---------
  allow(){
    this.commonService.presentLoader();
    if(this.chatUserId != null && this.chatUserId != ''){
      //------------Accept Request -------------
    this.dataService.acceptChatRequest({ 'id': this.chatUserId}).subscribe(
      (data: any) => {
        this.commonService.dismissLoader();
        this.messageButtons = false;
        // this.navCtrl.back();
          console.log("acceptRequest:" + JSON.stringify(data.acceptRequest));
      });
    }
  }
  decline(){
    this.commonService.presentLoader();
    if(this.chatUserId != null && this.chatUserId != ''){
      //------------Reject Request -------------
    this.dataService.rejectChatRequest({ 'id': this.chatUserId}).subscribe(
      (data: any) => {
        this.commonService.dismissLoader();
        this.messageButtons = false;
          console.log("acceptRequest:" + JSON.stringify(data.rejectRequest));
          this.navCtrl.back();
      });
    }
  }
}
