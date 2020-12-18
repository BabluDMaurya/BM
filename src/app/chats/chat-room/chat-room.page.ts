import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PopoverController, NavController,AlertController} from '@ionic/angular';
import { DropdownComponent } from './../dropdown/dropdown.component';
import { IonContent } from '@ionic/angular';
import { Action } from '../../clientmodel/action';
import { User } from '../../clientmodel/user';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
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
  storeMessage = '';
  storeMessages ; any;
  currentUser = '';
  chatUserId: any;
  userData:any;
  receiverId :any;
  room : any ;
  user_name : any;
  display_name :any;
  profile_pic : any;
  profilePicUrl : any = Config.profilePic;
  UserOnLineStatus : any;
  blockstatus : any = 0;
  bSOUser : any = 'unblock';
  bidOUser : any;
  chatDates : string;
  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public navCtrl: NavController,
    private socket: Socket,
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
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
      if (data['event'] === 'left') {
        // this.showToast('User left: ' + this.room);
        this.UserOnLineStatus = 'is OffLine';
      } else {
        // this.showToast('User joined: ' + this.room);
        this.UserOnLineStatus = 'is OnLine';
      }
    });
    this.socket.fromEvent('blockStatusOfUser').subscribe(blockStatusOfUser => {
      console.log("blockStatusOfUser:"+JSON.stringify(blockStatusOfUser['status']));
      this.bSOUser = blockStatusOfUser['status'];
      this.bidOUser = blockStatusOfUser['blockID'];          
    });
    this.socket.fromEvent('blockStatusOfSelf').subscribe(blockStatusOfSelf => {
      console.log("blockStatusOfSelf:"+JSON.stringify(blockStatusOfSelf['status']));
      if(blockStatusOfSelf['status'] ==='block'){        
        this.blockstatus = 1;
      }else{
        this.blockstatus = 0;
      }     
    });
    this.socket.fromEvent('storchatdate').subscribe(data => {
      console.log("storchatdate : "+JSON.stringify(data));
      // let today = new Date();
      // console.log("Today :"+new Date());
      // this.chatDates  = '17/12/2020';      
    });
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
    });
    this.socket.fromEvent('UserOnLineStatus').subscribe(UserOnLineStatus => {
      this.UserOnLineStatus = UserOnLineStatus;
    });
  }
  async blockStatusOfUser(id : any) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: 'You have to <strong>Unblock</strong> First.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            //--------unblock User through socket-------//
            this.socket.emit("blockevent",'0',id);
          }
        }
      ]
    });
    await alert.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: DropdownComponent,
      event: ev,
      componentProps: {
        userDataid:this.userData.id,
        receiverId: this.receiverId,
        bidOUser : this.bidOUser,
        bSOUser:this.bSOUser
      },
      translucent: true
    });
    popover.onDidDismiss()
      .then((data) => {
        this.bSOUser = data['data'];
        this.socket.emit('userBlockStatus',this.userData.id,this.receiverId);
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

    this.socket.emit("addUser", this.userData.id,this.receiverId);
    
    this.socket.emit("newUser", [this.userData.id,this.receiverId, this.room]);

    this.socket.emit("storemassagerequest",this.userData.id,this.receiverId);

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
  ngAfterViewInit() {

  }

  sendMessage() {
    if(this.message != '' && this.message != null){
      if(this.bSOUser == 'unblock'){
        this.socket.emit('send-message', { text: this.message, blockstatus : this.blockstatus });
      }else{
        this.blockStatusOfUser(this.bidOUser);
      }      
    }
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
