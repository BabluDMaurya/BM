import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';
import { ToastController } from '@ionic/angular';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss','../../app.component.scss',],
})
export class AccessPage implements OnInit {
  requestId: any;
  userData:any;
  messageButtons = true;
  senderId : any;
  constructor(public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private dataService: ChatService,
    public commonService:CommonService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.requestId = params.get('id');
      this.senderId = params.get('senderId');



      console.log("this.this.senderId:"+this.senderId);
    });
  }
  //---------allow---------
  allow(){
    this.commonService.presentLoader();
    if(this.requestId != null && this.requestId != ''){
      //------------Accept Request -------------
    this.dataService.acceptChatRequest({ 'id': this.requestId,'senderId' : this.senderId}).subscribe(
      (data: any) => {
          this.commonService.dismissLoader();
          this.messageButtons = false;
          // this.navCtrl.back();
          // console.log("acceptRequest:" + JSON.stringify(data.acceptRequest));
          // console.log("Room:" + JSON.stringify(data.room));
          // console.log("status:" + JSON.stringify(data.status));
          if(data.status){
            this.router.navigateByUrl('/chat-room/'+this.requestId+'/'+this.senderId);
           
          }
      });
    }
  }
  decline(){
    this.commonService.presentLoader();
    if(this.requestId != null && this.requestId != ''){
      //------------Reject Request -------------
    this.dataService.rejectChatRequest({ 'id': this.requestId}).subscribe(
      (data: any) => {
        this.commonService.dismissLoader();
        this.messageButtons = false;
          console.log("acceptRequest:" + JSON.stringify(data.rejectRequest));
          this.navCtrl.back();
      });
    }
  }
}
