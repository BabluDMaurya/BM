import { Component, OnInit} from '@angular/core';
import { Config } from './../../config/config';
import { Socket } from 'ngx-socket-io';
import { NavController,ModalController,ToastController } from '@ionic/angular';
import { RequestsModalComponent } from '../requests-modal/requests-modal.component';
import { Router} from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ChatService } from 'src/app/services/chat.service';
import { ChatRoomsComponent } from './../chat-rooms/chat-rooms.component';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['../../app.component.scss','./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  public searchTerm: string = "";
  list : any = 0;
  userData:any;
  callApiv : any; 
  requestCount : any = 0;
  items : any = [];
  term = '';
  url : any = Config.profilePic;
  pgimgurl : any = Config.ApiUrl;
  profileDefaultImage = './../../../assets/images/user.jpg';
  constructor(
    private socket: Socket,
    private navCtrl: NavController,
    public modalController: ModalController,
    private router:Router,
    private commonService : CommonService,
    private chatService : ChatService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    var socket = this.socket.connect();
    console.log('check 1', socket.connected);
    // socket.on('connect', function() {
    //   console.log('check 2', socket.connected);
    // });
    socket.on('connect_error', function(err)
    {
        console.log("connect failed"+err);
    });
    this.userData = JSON.parse(localStorage.getItem('userData'));
    var test = this.socket.emit('user-list', 46);
    console.log(test, 'check conn')
    this.callApiv = setInterval(() => {
      this.socket.emit('user-list', 46); 
    }, 5000);
    this.myChatList(); 
    this.setFilteredItems();
  }
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  ionViewWillEnter() {    
    this.socket.emit('user-list', this.userData.id);
    this.callApiv = setInterval(() => {
      this.socket.emit('user-list', this.userData.id); 
    }, 5000);
    this.myChatList();    
  }
  myChatList(){   
    this.socket.fromEvent('my-chat-list').subscribe(receiveMessageArr => {
      this.requestCount = 0;
      this.items = receiveMessageArr;
      console.log("receiveMessageArr:" +  JSON.stringify(receiveMessageArr));
    });
    this.socket.fromEvent('singleChatRequestCount').subscribe(receiveMessageArr => {
      this.requestCount = this.requestCount + receiveMessageArr[0].single_chat_request_count;      
      console.log("singleCount :" + this.requestCount);
    });
    this.socket.fromEvent('groupChatRequestCount').subscribe(receiveMessageArr => {
      this.requestCount = this.requestCount + receiveMessageArr[0].group_chat_request_count;
      console.log("groupCount :" + this.requestCount);      
    });
  }
  setFilteredItems() {    
    this.items = this.chatService.filterItems(this.searchTerm);
  }
  async showRequests(){
    const modal = await this.modalController.create({
      component: RequestsModalComponent
    });
    return await modal.present();
  }
  chatRoom(groups:any){ 
    console.log("groups" + JSON.stringify(groups));
    var params = groups;   
    var RID = '';
    if(this.userData.id == params.senderID){
      RID = params.receiverID;
    }else{
      RID = params.senderID;
    }
    // if(parseInt(params.type) == 1){
    //   this.router.navigate(['/chat-room/'+parseInt(RID)+'/'+params.room+'/'+parseInt(params.type)]);
    // }else{
    //   // groups.id,groups.room,groups.type
    //   this.router.navigate(['/chat-room/'+parseInt(params.id)+'/'+params.room+'/'+parseInt(params.type)]);
    // }
    
    var recId = 0;
    if(parseInt(params.type) == 1){
      recId = parseInt(RID);
    }else{
      recId = parseInt(params.id);
    }
    var fileData = {
      chatType : parseInt(params.type),
      room : params.room,
      receiverId : recId,
      requestId : parseInt(params.request_id),
      }
    this.commonService.presentModal(ChatRoomsComponent,'fullModal',fileData);
  }
  goBack() {
    this.navCtrl.back();
  }  
}
