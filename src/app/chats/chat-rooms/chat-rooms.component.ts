import { Component, OnInit, ViewChild,AfterViewInit,Input} from '@angular/core';
import { PopoverController, NavController,AlertController, IonThumbnail} from '@ionic/angular';
import { DropdownComponent } from './../dropdown/dropdown.component';
import { IonContent,IonTextarea } from '@ionic/angular';
import { Action } from '../../clientmodel/action';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { ParamMap, ActivatedRoute,Router} from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Config } from './../../config/config';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['../../app.component.scss','./chat-rooms.component.scss'],
})
export class ChatRoomsComponent implements OnInit,AfterViewInit {
  @Input() chatType;
  @Input() room;
  @Input() receiverId;
  @Input() returnUrl;
  @Input() requestId;


  @ViewChild(IonContent, { read: IonContent,  static: false }) contentArea: IonContent;
  @ViewChild(IonTextarea, { read: IonTextarea,  static: false }) sendmessage: IonTextarea;
  messageBox = false;
  messageButtons = true;
  toggled: boolean = false;
  action: Action;
  messageContent: string; 
  ioConnection: any;
  message = '';
  messages = [];
  chatListArr : any = [];
  storeMessage = '';
  storeMessages : any;  
  currentUser = '';
  userData:any;
  // receiverId :any;
  // room : any ;
  user_name : any;
  display_name :any;
  profile_pic : any;
  profilePicUrl : any = Config.profilePic;
  UserOnLineStatus : any;
  blockstatus : any = 0;
  bSOUser : any = 'unblock';
  bidOUser : any;
  chatDates : string;
  // chatType : any = 0;
  groupName : any = '';
  adminId : any = '';
  groupMember : any = '';
  acceptMember : any = '';
  groupImage : any = '';
  groupId : any = '';
  groupMessage = '';
  groupMessages = [];
  groupstoreMessage = '';
  messageDateString : string ;
  lastChatId : any = 0;
  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public navCtrl: NavController,
    private socket: Socket,
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    public commonService:CommonService,
    public router :Router,
    ) {  
      }
  ngOnInit() {    
    this.userData = JSON.parse(localStorage.getItem('userData'));   
  }
  ionViewWillEnter(){
    if(this.chatType == 2){
      this.groupChat();
      console.log("groupChat ionViewWillEnter chatRooms 1");
    }else{
      this.privateChat();
      console.log("privateChat ionViewWillEnter chatRooms 1");
    }
    console.log("chat-room ionViewWillEnter");
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.sendmessage.setFocus();
    }, 400);
  }
  groupChat(){
    this.socket.emit("newGroup", this.userData.id,this.receiverId, this.room);

    this.socket.emit('stormessagerequest',this.userData.id,this.receiverId);

    this.socket.fromEvent('receiveDate').subscribe(receiveDate =>{
      // console.log('receiveDate:'+JSON.stringify(receiveDate));
    });
    this.socket.fromEvent('stormessage').subscribe(stormessage => {
      this.storeMessages = stormessage; 
      setTimeout(() => {
        this.contentArea.scrollToBottom();
      }, 400);        
    });

    this.socket.fromEvent('groupChatRequestData').subscribe(groupChatRequestData => {
      console.log("GROUP:" + JSON.stringify(groupChatRequestData));
      this.groupName = groupChatRequestData[0].group_name;
      this.adminId = groupChatRequestData[0].admin_id;
      this.groupMember = groupChatRequestData[0].group_member;
      this.acceptMember = groupChatRequestData[0].accept_member;
      this.groupImage = groupChatRequestData[0].group_image;
      this.groupId = groupChatRequestData[0].id;
    });
    this.socket.fromEvent('groupmessage').subscribe(message => {
      this.groupMessages.push(message);
      this.contentArea.scrollToBottom();
    });
  }
  privateChat(){    
    
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
      this.contentArea.scrollToBottom();
    });
    this.socket.fromEvent('lastChatId').subscribe(lastchatId => {
      this.lastChatId = lastchatId;    
      console.log("this.lastChatId : " + this.lastChatId);
    });
    this.socket.fromEvent('blockStatusOfUser').subscribe(blockStatusOfUser => {
      this.bSOUser = blockStatusOfUser['status'];
      this.bidOUser = blockStatusOfUser['blockID'];          
    });
    this.socket.fromEvent('blockStatusOfSelf').subscribe(blockStatusOfSelf => {
      if(blockStatusOfSelf['status'] ==='block'){        
        this.blockstatus = 1;
      }else{
        this.blockstatus = 0;
      }     
    });
    this.socket.fromEvent('storchatdate').subscribe(data => {
      // console.log("storchatdate : "+JSON.stringify(data));
    });

    this.socket.fromEvent('UserOnLineStatus').subscribe(UserOnLineStatus => {
      this.UserOnLineStatus = UserOnLineStatus;
    });
    this.socket.emit("addUser", this.userData.id,this.receiverId);
    this.socket.emit("privateUser", [this.userData.id,this.receiverId, this.room]);
    this.socket.emit("storemassagerequest",this.userData.id,this.receiverId);

    this.socket.fromEvent('stormessage').subscribe(storMessage => {      
      this.storeMessages = storMessage; 
      setTimeout(() => {
        this.contentArea.scrollToBottom();
      }, 400);       
    });

    this.socket.fromEvent('userName').subscribe(data => {
      console.log("UserName");
      this.user_name = data[0].user_name;
    });

    this.socket.fromEvent('userBio').subscribe(data => {
      console.log("UserBio");
      this.display_name = data[0].display_name;
      this.profile_pic = data[0].profile_pic;      
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
        bSOUser:this.bSOUser,
        type:this.chatType,
        lastchatid:this.lastChatId,
        room : this.room,
      },
      translucent: true
    });
    popover.onDidDismiss()
      .then((data) => {        
        if(data.data == 'refresh'){ 
          this.doRefresh();
        }else if(data.data == 'clear'){
          this.storeMessages = [];
          this.messages = [];
        }else{          
          this.bSOUser = data['data'];
          this.socket.emit('userBlockStatus',this.userData.id,this.receiverId);
        }
    });
    return await popover.present();   
  }  
  doRefresh() {
    if(this.chatType == 2){
      this.groupChat();
    }else{
      this.privateChat();
    }
  }
  sendMessage() {
    if(this.message != '' && this.message != null && this.chatType == 1){
      console.log("sendMessage:" + this.requestId);
      if(this.bSOUser == 'unblock'){
        this.socket.emit('send-message', { text: this.message, blockstatus : this.blockstatus, requestId : this.requestId });
      }else{
        this.blockStatusOfUser(this.bidOUser);
      }   
      this.message = '';   
    }else if(this.groupMessage != '' && this.groupMessage != null && this.chatType == 2){
        this.socket.emit('send-group-message', { text: this.groupMessage});
        this.groupMessage = '';
    }
    this.sendmessage.setFocus();
  }  
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  handleSelection(event) {
    this.messages += event.char;
  }
  isDifferentDay(messageIndex: number): boolean {
    if (messageIndex === 0) return true;
    const d1 = new Date(this.storeMessages[messageIndex - 1].created_at);
    const d2 = new Date(this.storeMessages[messageIndex].created_at);
    return (
      d1.getFullYear() !== d2.getFullYear() ||
      d1.getMonth() !== d2.getMonth() ||
      d1.getDate() !== d2.getDate()
    );
  }
  getMessageDate(messageIndex: number): string {
    let dateToday = new Date().toDateString();
    let longDateYesterday = new Date();
    longDateYesterday.setDate(new Date().getDate() - 1);
    let dateYesterday = longDateYesterday.toDateString();
    let today = dateToday.slice(0, dateToday.length - 5);
    let yesterday = dateYesterday.slice(0, dateToday.length - 5);
    const wholeDate = new Date(
      this.storeMessages[messageIndex].created_at
    ).toDateString();
    this.messageDateString = wholeDate.slice(0, wholeDate.length - 5);
    if (
      new Date(this.storeMessages[messageIndex].created_at).getFullYear() ===
      new Date().getFullYear()
    ) {
      if (this.messageDateString === today) {
        return "Today";
      } else if (this.messageDateString === yesterday) {
        return "Yesterday";
      } else {
        return this.messageDateString;
      }
    } else {
      return wholeDate;
    }
  }
  goBack() {        
    this.commonService.dismissModal();
    if(this.returnUrl == 'list'){
      this.router.navigate(['/tabs/chats']);
    }  
  }

}
