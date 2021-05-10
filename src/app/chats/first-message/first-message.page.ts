import { Component, OnInit,ViewChild,AfterViewInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { IonContent,IonTextarea,NavController } from '@ionic/angular';
import { PeopleViewService } from "../../services/people-view.service";
import { Config } from './../../config/config';
import { Socket } from 'ngx-socket-io';
import { ChatService } from 'src/app/services/chat.service';
import { CommonService } from '../../services/common.service';
import { ProgramService } from './../../services/program.service'

@Component({
  selector: 'app-first-message',
  templateUrl: './first-message.page.html',
  styleUrls: ['./first-message.page.scss','./../../app.component.scss'],
})
export class FirstMessagePage implements OnInit,AfterViewInit,OnDestroy {
  @ViewChild(IonContent, { read: IonContent,  static: false }) contentArea: IonContent;
  @ViewChild(IonTextarea, { read: IonTextarea,  static: false }) sendmessage: IonTextarea;
  userData:any;
  chat_type:any = 0;
  receiver_id : any;
  nameDisplay : any;
  imageDisplay : any;
  message = '';
  messages :any = [];
  blockstatus : any = 0;
  bidOUser : any;
  bSOUser :any;
  room :any = 'firstMessage';
  createdRoom : any;
  requestId :any = 0;
  programDetail : any;
  profilePicUrl: any = Config.profilePic;
  url = Config.imgUrl;
  profileDefaultImage = './../../../assets/images/user.jpg';
  constructor(private actRoute: ActivatedRoute,
              private peopleView: PeopleViewService,
              private navCtrl: NavController,
              private socket: Socket,
              private chatservice : ChatService,
              private commonService : CommonService,
              private programService : ProgramService) { }
  ngOnInit() {
    // connect ot socket.io
    this.socket.connect();
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.chat_type = parseInt(params.get('chat_type'));
      console.log("this.chat_type :" + this.chat_type);
      // chat_type = 1:consultant,2:user,3:program
      if(this.chat_type == 1){
        this.receiver_id = params.get('id');
        this.peopleView.getUserData({ 'userId': this.receiver_id }).subscribe((data: any) => {
          this.nameDisplay = data.userData.user_name;
          this.imageDisplay = this.profilePicUrl+data.userData.bios.profile_pic;
        });        
      }else if(this.chat_type == 2){
        this.receiver_id = params.get('id');
        this.peopleView.getUserData({ 'userId': this.receiver_id }).subscribe((data: any) => {
          this.nameDisplay = data.userData.user_name;
          this.imageDisplay = this.profilePicUrl+data.userData.bios.profile_pic;
        });        
      }else if(this.chat_type == 3){
        this.receiver_id = params.get('id');
        this.programService.getProgramById({ "programId": this.receiver_id }).subscribe(data => {
          this.programDetail = data.programData;
          this.nameDisplay = data.programData.title;
          if(data.programData.image_path){
            this.programDetail.img_array =data.programData.image_path.split(','); 
            this.imageDisplay = this.url + this.programDetail.img_array[0];
          }          
        });
      }      
      if(this.chat_type != 3){  
          //Private chat
          console.log("private chat type : firstMessage");
          this.socket.emit('set-name', this.userData.id,'firstMessage');
          this.socket.emit("addUser", this.userData.id,this.receiver_id);
          this.socket.emit("newUser", [this.userData.id,this.receiver_id, this.room]);          
      }else{
        //Group chat
        console.log("group chat type : programMessage");
        this.socket.emit('set-name', this.userData.id,'programMessage');
        // this.socket.emit("newGroup", this.userData.id,this.requestId, this.room);
      }
    });    
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.sendmessage.setFocus();
    }, 400);
  }
  ionViewWillEnter(){
    if(this.chat_type != 3){
      console.log('private message');
      this.socket.fromEvent('message').subscribe(receiveMessageArr => {
        console.log("private receiveMessageArr:" + JSON.stringify(receiveMessageArr));
        this.messages.push(receiveMessageArr);
        this.contentArea.scrollToBottom();
      });  
    }else{
    console.log('group message');
    this.socket.fromEvent('groupmessage').subscribe(receiveMessageArr => {
      console.log("GroupreceiveMessageArr:" + JSON.stringify(receiveMessageArr));
      this.messages.push(receiveMessageArr);
      this.contentArea.scrollToBottom();
    });  
  }
  }
  createRoom(massa : any,blocks : any){
    if(this.chat_type != 3){
      var chatType :any = 1;
    }else{
      var chatType : any = this.chat_type;
    }
    this.chatservice.sendChatRequest({'type':chatType,'peopleSelect':[this.receiver_id]}).subscribe(
      (data: any) => {
        if(data.status == 'success'){          
            this.room = data.room;
            this.requestId = data.request_id;
            this.createdRoom = true;
            console.log("Room:" + this.room);
            console.log("requestId:" + this.requestId);
            if(this.chat_type == 3){
              this.socket.emit("newGroup", this.userData.id,this.requestId, this.room);
              this.socket.emit('send-group-message', { text: massa});
            }else{              
              this.socket.emit('send-message', { text: massa, blockstatus : blocks, requestId : this.requestId});
            }
        }
      },
      err=> {
        this.commonService.presentToast("Couldnt load data, Something went wrong.");
      });
  }  
  sendMessage() {    
    if(this.message != '' && this.message != null){         
      if(!this.createdRoom){       
        this.createRoom(this.message,this.blockstatus);
      }else if(this.createdRoom &&  this.chat_type == 3){
        //Group Chat
        console.log("Group:"+this.chat_type);
        this.socket.emit('send-group-message', { text: this.message});        
      }else if(this.createdRoom && this.requestId > 0 && this.chat_type != 3){     
        //Private Chat
        console.log("Private:"+this.chat_type);
        this.socket.emit('send-message', { text: this.message, blockstatus : this.blockstatus, requestId : this.requestId});
      }
    this.message = '';
    }
    this.sendmessage.setFocus();
  }
  goBack() {    
    this.socket.disconnect();
    this.messages = [];    
    this.chat_type = '';
    this.navCtrl.back();
  }
  ionViewWillLeave() {
    this.socket.disconnect();
    this.messages = [];
    this.chat_type = '';
  }
  ngOnDestroy(){
    this.socket.disconnect();
    this.messages = [];
    this.chat_type = '';
  }
}
