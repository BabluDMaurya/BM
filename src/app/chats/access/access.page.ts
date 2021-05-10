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
  chatType : any;
  groupName : any = '';
  adminId : any = '';
  groupMember : any = '';
  acceptMember : any = '';
  groupImage : any = '';
  groupId : any = '';
  groupMessage = '';
  groupMessages = [];
  constructor(public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private dataService: ChatService,
    public commonService:CommonService,
    private router: Router,
    private socket: Socket,
    ) { }    
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.requestId = params.get('id');
      this.senderId = params.get('senderId');//in group chat this is room
      this.chatType = params.get('type');
      if(this.chatType != 2){
        this.dataService.getChatRoom({'userId':this.senderId}).subscribe((data:any)=>{
          this.room = data.chatroom.room;
          console.log("data.chatroom.room:" + this.room);
          this.getStart();
          this.privateChat();
        });
      }else{
        this.getStart();
        this.groupChat();
      }
    });    
  }
  getStart(){
    this.socket.connect();
    this.currentUser = this.room;
    console.log("room:" + this.room);
    this.socket.emit('set-name', this.room,this.chatType);         
    }
  privateChat(){
    this.socket.fromEvent('storchatdate').subscribe(data => {
      // console.log("storchatdate : "+JSON.stringify(data));
    });
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
    });
    this.socket.fromEvent('UserOnLineStatus').subscribe(UserOnLineStatus => {
      this.UserOnLineStatus = UserOnLineStatus;
    });

    this.socket.emit("addUser", this.userData.id,this.senderId);
    console.log("privateChat room:" + this.room);
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
  groupChat(){
    console.log("groupChat");
    this.room = this.senderId;    
    this.socket.emit("newGroup", this.userData.id,this.requestId, this.room);
    this.socket.emit('stormessagerequest',this.userData.id,this.requestId);
    this.socket.fromEvent('groupChatRequestData').subscribe(groupChatRequestData => {
      this.groupName = groupChatRequestData[0].group_name;
      this.adminId = groupChatRequestData[0].admin_id;
      this.groupMember = groupChatRequestData[0].group_member;
      this.acceptMember = groupChatRequestData[0].accept_member;
      this.groupImage = groupChatRequestData[0].group_image;
      this.groupId = groupChatRequestData[0].id;
    });
    this.socket.fromEvent('stormessage').subscribe(stormessage => {
      this.storeMessages = stormessage;      
      console.log("storeMessages :" + JSON.stringify(stormessage));
    });
    this.socket.fromEvent('groupmessage').subscribe(message => {
      this.groupMessages.push(message);
    });
  }
  //---------allow---------
  allow(){
    this.commonService.presentLoader();
    if(this.requestId != null && this.requestId != ''){
      //------------Accept Request -------------
    this.dataService.acceptChatRequest({ 'id': this.requestId,'senderId' : this.senderId,'type':this.chatType}).subscribe(
      (data: any) => {
          this.commonService.dismissLoader();
          this.messageButtons = false;
          if(data.status && this.chatType == 1){
            this.socket.disconnect();
            console.log('1/chat-room/+this.senderId++data.room+this.chatType'+this.senderId+'/'+data.room+'/'+this.chatType);
            this.router.navigateByUrl('/chat-room/'+this.senderId+'/'+data.room+'/'+this.chatType);
          }else{
            this.socket.disconnect();
            console.log('2/chat-room/+this.requestId++data.room+this.chatType'+this.requestId+'/'+data.room+'/'+this.chatType);
            this.router.navigateByUrl('/chat-room/'+this.requestId+'/'+data.room+'/'+this.chatType);
          }
      });
    }
  }
  decline(){
    this.commonService.presentLoader();
    if(this.requestId != null && this.requestId != ''){
      //------------Reject Request -------------
    this.dataService.rejectChatRequest({ 'id': this.requestId,'type':this.chatType}).subscribe(
      (data: any) => {
        this.commonService.dismissLoader();
        this.socket.disconnect();
        this.messageButtons = false;          
          this.navCtrl.back();
      });
    }
  }
}
