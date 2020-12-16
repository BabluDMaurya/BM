import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { DropdownComponent } from './../dropdown/dropdown.component';
import { IonContent } from '@ionic/angular';
import { Action } from '../../clientmodel/action';
import { User } from '../../clientmodel/user';
import { ChatService } from 'src/app/services/chat.service';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { query } from 'express';
import { Config } from './../../config/config';

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
  
  receiverId :any;
  room : any ;
 
  user_name : any;
  display_name :any;
  profile_pic : any;
  profilePicUrl : any = Config.profilePic;
  constructor(public popoverController: PopoverController,
    public navCtrl: NavController,
    private socket: Socket,
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private dataService: ChatService,
    public commonService:CommonService,
    ) {    }

  getStart(){
    if (this.myUserId == null) {
      this.myUserId = Date.now().toString();
    }
    this.socket.connect();
    this.currentUser = this.room;
    this.socket.emit('set-name', this.room);
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user.room);
      } else {
        this.showToast('User joined: ' + user.room);
      }
    });
    this.socket.fromEvent('message').subscribe(message => {
      // console.log("message:"+JSON.stringify(message));
      this.messages.push(message);
    });
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
      this.room = params.get('room');
      this.receiverId = params.get('receiver');
    });
    
    this.getStart();

    this.socket.emit("addUser", this.receiverId, this.userData.id);
    
    this.socket.emit("newUser", [this.receiverId,this.userData.id, this.room]);

    this.socket.fromEvent('userName').subscribe(data => {
      this.user_name = data[0].user_name;
    });

    this.socket.fromEvent('userBio').subscribe(data => {
      this.display_name = data[0].display_name;
      this.profile_pic = data[0].profile_pic;      
    });
  }
  ngAfterViewInit() {

  }
  sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    this.message = '';
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  
}
