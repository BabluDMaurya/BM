import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';
import { ToastController } from '@ionic/angular';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Config } from './../../config/config';

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
  message = '';
  messages = [];
  UserOnLineStatus : any;
  currentUser = '';
  room : any ;
  storeMessage = '';
  storeMessages ; any;
  public myUserId: string;
  user_name : any;
  display_name :any;
  profile_pic : any;
  profilePicUrl : any = Config.profilePic;
  constructor(public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private dataService: ChatService,
    public commonService:CommonService,
    private router: Router,
    private socket: Socket,
    ) { }
    getStart(){
      if (this.myUserId == null) {
        this.myUserId = Date.now().toString();
      }
      this.socket.connect();
      this.currentUser = this.room;
      this.socket.emit('set-name', this.room);
      this.socket.fromEvent('users-changed').subscribe(data => {
        if (data['event'] === 'left') {
          // this.showToast('User left: ' + this.room);
          this.UserOnLineStatus = 'is OffLine';
        } else {
          // this.showToast('User joined: ' + this.room);
          this.UserOnLineStatus = 'is OnLine';
        }
      });
    
      this.socket.fromEvent('storchatdate').subscribe(data => {
        console.log("storchatdate : "+JSON.stringify(data));
      });
      this.socket.fromEvent('message').subscribe(message => {
        this.messages.push(message);
      });
      this.socket.fromEvent('UserOnLineStatus').subscribe(UserOnLineStatus => {
        this.UserOnLineStatus = UserOnLineStatus;
      });
    }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.requestId = params.get('id');
      this.senderId = params.get('senderId');
    });

    this.getStart();

    this.socket.emit("addUser", this.userData.id,this.senderId);
    
    this.socket.emit("newUser", [this.userData.id,this.senderId, this.room]);

    this.socket.emit("storemassagerequest",this.userData.id,this.senderId);

    this.socket.fromEvent('stormessage').subscribe(storMessage => {      
      this.storeMessages = storMessage;
    });

    this.socket.fromEvent('userName').subscribe(data => {
      this.user_name = data[0].user_name;
    });

    this.socket.fromEvent('userBio').subscribe(data => {
      this.display_name = data[0].display_name;
      this.profile_pic = data[0].profile_pic;      
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
          if(data.status){
            this.router.navigateByUrl('/chat-room/'+this.senderId+'/'+data.room);
           
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
