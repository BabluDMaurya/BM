import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { DropdownComponent } from './../dropdown/dropdown.component';
import { IonContent } from '@ionic/angular';
import { Action } from '../../clientmodel/action';
import { User } from '../../clientmodel/user';
import { ChatService } from 'src/app/services/chat.service';
// import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['../../app.component.scss', './chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit, AfterViewInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  messageBox = false;
  messageButtons = true;
  toggled: boolean = false;
  user: User;
  action: Action;
  // messages: Message[] = [];
  messageContent: string;
  ioConnection: any;
  public myUserId: string;
  chats = [];
  chat_input: string;
  message = '';
  messages = [];
  currentUser = '';
  chatUserId: any;
  userData:any;
  constructor(public popoverController: PopoverController,
    public navCtrl: NavController,
    // private socket: Socket,
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private dataService: ChatService,
    public commonService:CommonService,
    ) {    }

  getStart(){
    if (this.myUserId == null) {
      this.myUserId = Date.now().toString();
    }

    // this.socket.connect();

    // let name = `user-${new Date().getTime()}`;
    // this.currentUser = name;

    // this.socket.emit('set-name', name);

    // this.socket.fromEvent('users-changed').subscribe(data => {
    //   let user = data['user'];
    //   if (data['event'] === 'left') {
    //     this.showToast('User left: ' + user);
    //   } else {
    //     this.showToast('User joined: ' + user);
    //   }
    // });

    // this.socket.fromEvent('message').subscribe(message => {
    //   this.messages.push(message);
    // });
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: DropdownComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  handleSelection(event) {
    this.messages += event.char;
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.chatUserId = params.get('chatuserId');

      // console.log("this.chatUserId:"+this.chatUserId);
    });
    
    // this.getStart();

    // this.socket.emit("addUser", this.userData.id , this.chatUserId );

    // let roomId = this.userData.id < this.chatUserId ? this.userData.id  +this.chatUserId : this.chatUserId+ this.userData.id ;
    //  this.socket.emit("newUser", [this.userData.id , this.chatUserId, roomId]);
    
  }
  ngAfterViewInit() {

  }
  // sendMessage() {
  //   this.socket.emit('send-message', { text: this.message });
  //   this.message = '';
  //   console.log(this.messages);
  // }

  // ionViewWillLeave() {
  //   this.socket.disconnect();
  // }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
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
          // this.navCtrl.
      });
    }
  }
}
