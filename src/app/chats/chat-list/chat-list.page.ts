import { Component, OnInit, OnDestroy } from '@angular/core';
import { Config } from './../../config/config';
import { Socket } from 'ngx-socket-io';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RequestsModalComponent } from '../requests-modal/requests-modal.component';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['../../app.component.scss','./chat-list.page.scss'],
})
export class ChatListPage implements OnInit,OnDestroy {
  public searchTerm: string = "";
  userData:any;
  requestCount : any = 0;
  items : any;
  url : any = Config.profilePic;
  profileDefaultImage = './../../../assets/images/user.jpg';
  constructor(
    private socket: Socket,
    private navCtrl: NavController,
    public modalController: ModalController,
    private router:Router,
    private commonService : CommonService,
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    // this.setFilteredItems();
  }
  ionViewWillEnter() {
    console.log("chat-list ionViewWillEnter");
    this.socket.connect();
    this.socket.emit('set-name', this.userData.id,'chatList');
    this.socket.emit('user-list', this.userData.id,100);
    this.myChatList();    
  }
  myChatList(){
    this.socket.fromEvent('my-chat-list').subscribe(receiveMessageArr => {
      this.requestCount = 0;
      this.items = receiveMessageArr;
      console.log("private receiveMessageArr:" +  JSON.stringify(receiveMessageArr));
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
  // setFilteredItems() {
  //   this.items = this.chatservice.filterItems(this.searchTerm);
  // }
  async showRequests(){
    const modal = await this.modalController.create({
      component: RequestsModalComponent
    });
    return await modal.present();
  }
  chatRoom(groups:any){    
    this.socket.disconnect();
    var params = groups;    
    if(parseInt(params.type) == 1){
      this.router.navigate(['/chat-room/'+parseInt(params.receiverID)+'/'+params.room+'/'+parseInt(params.type)]);
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
    this.socket.disconnect();  
  }
}
