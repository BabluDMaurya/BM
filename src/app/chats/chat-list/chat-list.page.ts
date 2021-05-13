import { Component, OnInit, OnDestroy } from '@angular/core';
import { Config } from './../../config/config';
import { Socket } from 'ngx-socket-io';
import { NavController,ModalController } from '@ionic/angular';
import { RequestsModalComponent } from '../requests-modal/requests-modal.component';
import { ParamMap, ActivatedRoute,Router} from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ChatService } from 'src/app/services/chat.service';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['../../app.component.scss','./chat-list.page.scss'],
})
export class ChatListPage implements OnInit,OnDestroy {
  public searchTerm: string = "";
  list : any = 0;
  userData:any;
  callApiv : any; 
  requestCount : any = 0;
  items : any = [];
  term = '';
  url : any = Config.profilePic;
  profileDefaultImage = './../../../assets/images/user.jpg';
  constructor(
    private socket: Socket,
    private navCtrl: NavController,
    public modalController: ModalController,
    private router:Router,
    private commonService : CommonService,
    private chatService : ChatService,
    private actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.setFilteredItems();
  }
  ionViewWillEnter() {
    console.log("chat-list ionViewWillEnter");
    this.socket.connect();
    this.socket.emit('set-name', this.userData.id,'chatList');
    this.socket.emit('user-list', this.userData.id);
    this.callApiv = setInterval(() => {
      this.socket.emit('user-list', this.userData.id); 
    }, 5000);    
    // this.actRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.list = params.get('list');
    // });
    this.myChatList();    
  }
  myChatList(){
    // if(this.list > 0){
    //   console.log("list found");
    // }
    this.socket.fromEvent('my-chat-list').subscribe(receiveMessageArr => {
      this.requestCount = 0;
      this.items = receiveMessageArr;
      // console.log("private receiveMessageArr:" +  JSON.stringify(receiveMessageArr));
    });
    this.socket.fromEvent('singleChatRequestCount').subscribe(receiveMessageArr => {
      this.requestCount = this.requestCount + receiveMessageArr[0].single_chat_request_count;      
      // console.log("singleCount :" + this.requestCount);
    });
    this.socket.fromEvent('groupChatRequestCount').subscribe(receiveMessageArr => {
      this.requestCount = this.requestCount + receiveMessageArr[0].group_chat_request_count;
      // console.log("groupCount :" + this.requestCount);      
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
    this.socket.disconnect();
    var params = groups; 
    // console.log("params :" + JSON.stringify(params));   
    // console.log("params.receiverID :" + JSON.stringify(params.receiverID));   
    // console.log("params.room :" + JSON.stringify(params.room));   
    // console.log("params.room :" + JSON.stringify(params.type));   
    // console.log("params.id :" + JSON.stringify(params.id));   
    var RID = '';
    if(this.userData.id == params.senderID){
      RID = params.receiverID;
    }else{
      RID = params.senderID;
    }

    if(parseInt(params.type) == 1){
      this.router.navigate(['/chat-room/'+parseInt(RID)+'/'+params.room+'/'+parseInt(params.type)]);
    }else{
      // groups.id,groups.room,groups.type
      this.router.navigate(['/chat-room/'+parseInt(params.id)+'/'+params.room+'/'+parseInt(params.type)]);
    }
    
  }
  goBack() {
    this.socket.disconnect();
    this.navCtrl.back();
  }
  ionViewWillLeave() {    
    console.log("chat-list ionViewWillLeave");
    this.socket.disconnect();
  }
  ngOnDestroy(){
    if (this.callApiv) {
      clearInterval(this.callApiv);
    }
    this.socket.disconnect();  
  }
}
