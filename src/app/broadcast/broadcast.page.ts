import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController,IonInput,IonTextarea, Platform, IonRouterOutlet} from '@ionic/angular';
import { ProgramService } from '../services/program.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var OT:any;
var publisherOBJ:any;
var subscriberOBJ:any;
var sessionOBJ : any;
var userName :any; 
@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.page.html',
  styleUrls: ['./../app.component.scss','./broadcast.page.scss'],
})
export class BroadcastPage implements OnInit {
  @ViewChild(IonInput, { read: IonInput,  static: false }) sendmessage: IonInput;
  loginData : any;

  session: any;
  publisher: any;
  apiKey: string;
  sessionId: string;
  token: string;
  volume : boolean = true;
  audioVolume = 100;
  cameraPosition = 'front';
  chatbody = 'off';

  publisherProperties : any;
  publisherHangup : boolean = false;
  publisherMice : boolean = false;
  publisherVolume : boolean = false;
  publisherTargetElement : string = 'publisher';
  publisherButton = false;

  subscriber: any;
  subscribers : any;
  subscriberProperties : any;
  subscriberHangup : boolean = false;
  subscriberMice : boolean = false;
  subscriberVolume : boolean = false;
  subscriberTargetElement : string = 'subscriber';
  subscriberButton = false;

  subStream : any;
  connectionId : any;
  chatTrue : boolean = false;
  groupMessage = '';
  data : any ;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    public programService : ProgramService,
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    ) {
      this.loginData = JSON.parse(localStorage.getItem('userData'));
      var loginId = this.loginData.id;
      userName = this.loginData.user_name;
        this.opentokApiConfig();
        this.publisherConfig();
        this.subscriberConfig();
        this.icons();
     }
  opentokApiConfig(){
        // this.programService.openTokSessionCreate({'time': 10}).subscribe( (data: any) => {
        //   this.sessionId = data.opentok_session_id;
        //   this.token = data.opentok_token;
        //   this.apiKey = data.opentok_api_key;
          
        //   console.log('sessionId:'+this.sessionId);
        //   console.log('token:'+this.token);
        //   console.log('apiKey:'+this.apiKey);
        // });
    
  this.sessionId = '2_MX40NzA4MDA1NH5-MTYxMTIyMjYwNjQxNH4wWG91cTJkWkRhNDF6VVQrOXdxeW82TDN-fg';
  this.token = 'T1==cGFydG5lcl9pZD00NzA4MDA1NCZzaWc9MWJhZWI3Y2FlNDBiYjNmMzQ2NzQzZjQ3N2IyMDY0Y2NhY2JlYzQ5YzpzZXNzaW9uX2lkPTJfTVg0ME56QTRNREExTkg1LU1UWXhNVEl5TWpZd05qUXhOSDR3V0c5MWNUSmtXa1JoTkRGNlZWUXJPWGR4ZVc4MlRETi1mZyZjcmVhdGVfdGltZT0xNjExMjIyNjA2JnJvbGU9cHVibGlzaGVyJm5vbmNlPTE2MTEyMjI2MDYuNDM5MjM3MjE1NTE4MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
  this.apiKey = '47080054';
  }  
  publisherConfig(){
    this.publisherProperties = {
      publishAudio : true,// mice mute / unmute
      publishVideo : true,// video show/hide
      cameraPosition: this.cameraPosition,
      audioVolume : this.audioVolume,// audio volume set 0 to 100
      resolution: '1280x720',
      insertMode: 'append',
      width: 400,//screen width
      height: 575,//screen height
      name : this.loginData.user_name,
      usePreviousDeviceSelection : true,
      style: { 
        // nameDisplayMode: "on",
        buttonDisplayMode: 'on'
      }
    };
  }
  subscriberConfig(){
  this.subscriberProperties = {
    insertMode: 'append',
    subscribeToAudio : true,// mice mute / unmute
    subscribeToVideo : true,// video show/hide
    cameraPosition: 'front',//camera front/back
    testNetwork: true,//network strength
    width: 90,//screen width
    height: 90,//screen height
    audioVolume : this.audioVolume,// audio volume set 0 to 100
    name : this.loginData.user_name,
    style: { 
      nameDisplayMode: "off",
      buttonDisplayMode: 'on'
    }
  };
  }
  icons(){
    if(this.loginData.id == 93){
      this.publisherButton = true;
      this.publisherHangup = true;
      this.publisherMice = true;
      this.publisherVolume = true;
    }else{
      this.subscriberButton = true;
      this.subscriberHangup = true;
      this.subscriberMice = true;
      this.subscriberVolume = true;
    }   
  } 
  cameraSwitchByPublisher(){
    publisherOBJ.cycleVideo(); //toggle the camera    
  }
  cameraSwitchBySubscriber(){
    subscriberOBJ.cycleVideo();
  }

  ngOnInit() {  
    this.session = OT.initSession(this.apiKey, this.sessionId);
    sessionOBJ = this.session;
    //----Initializing a Publisher view---//
    this.publisher = OT.initPublisher(this.publisherTargetElement,this.publisherProperties,function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('publisher added.');
      }
    }); 
    publisherOBJ = this.publisher;     
   
    this.session.on({
      streamCreated: (event: any) => {
        // this.subStream = event.stream;
        this.subscriber = this.session.subscribe(event.stream, this.subscriberTargetElement,this.subscriberProperties,function (error) {
          if (error) {
            console.log(error);
          } else {
            
            console.log('Subscriber added.');
          }
      });
      subscriberOBJ = this.subscriber;
        OT.updateViews();  // this function is valid for mobile
      },
      streamDestroyed: (event: any) => { 
        if (event.reason === 'networkDisconnected') {
          event.preventDefault();
          console.log('You lost your internet connection.'
            + 'Please check your connection and try connecting again.');
            
            this.subscribers = this.session.getSubscribersForStream(event.stream);
            if (this.subscribers.length > 0) {
              var subscriber = document.getElementById(this.subscribers[0].id);
              // Display error message inside the Subscriber
              subscriber.innerHTML = 'Lost connection. This could be due to your internet connection '
                + 'or because the other party lost their connection.';
              event.preventDefault();   // Prevent the Subscriber from being removed
            }
        }else{
          console.log(`Stream ${event.stream.name} ended because ${event.reason}`);
          OT.updateViews();   // this function is valid for mobile
        } 
      },
      sessionConnected: (event: any) => {
        this.session.publish(this.publisher);
      },      
    });
    this.session.connect(this.token, (error: any) => {
      if (error) {
        console.log(`There was an error connecting to the session ${error}`);
      }else{
        this.connectionId = this.session.connection.connectionId; 
        console.group("this.connectionId : "+ this.session.connection.connectionId);
      }
    });    
    this.session.on('signal:msg', function signalCallback(event) {
      var scrollIntoViewOptions :{block: "end", inline: "nearest"}
      var node = document.createElement('ion-item');
        node.className = event.from.connectionId == event.target.connection.connectionId ? 'mine item-background-color-chat' : 'theirs item-background-color-chat';
        node.innerHTML = event.data;
        document.querySelector('#history').appendChild(node);
        node.scrollIntoView(scrollIntoViewOptions);
    });

    this.publisher.on("streamDestroyed", function (event) {
      console.log("The publisher stopped streaming. Reason: "
        + event.reason); 
        // this.session = '';
        this.session.unpublish(this.publisher);
        this.publisher.destroy();
        this.session.disconnect();
        // this.session.unpublish(this.publisher);
    });
  }
  chatCall(){
    this.chatTrue = true;
    this.chatbody = 'on';
    setTimeout(() => {
      this.sendmessage.setFocus();
    }, 400);
  }
  chatCloseCall(){
    this.chatTrue = false;
    this.chatbody = 'off';
  }
  chatMessage(){   
    if(this.groupMessage != '' && this.groupMessage != null){
      var html = "<ion-avatar slot='start'>";
        html += " <img src='../../assets/images/station2.jpg'>";
        html += "</ion-avatar>";
        html += "<ion-label>";
        html += " <h2 class='list-person'>"+userName+"</h2>";
        html += " <p>"+this.groupMessage+"</p>";
        html += "<ion-label>";

      this.session.signal({
        type: 'msg',
        data: html,
      }, function signalCallback(error) {
        if (error) {
          console.error('Error sending signal:', error.name, error.message);
        } else {
          // this.groupMessage = '';
        }
      });
      this.groupMessage = '';
    }
    this.sendmessage.setFocus();  
}
  async publishPresentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'End Live Broadcast!',
      message: 'Are you sure, you want to end this live broadcast?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Agree',
          handler: () => {
            this.session.unpublish(this.publisher);            
            sessionOBJ.disconnect();
            this.navCtrl.back();
          }
        }
      ]
    });

    await alert.present();
  }
  async subscribePresentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Leave Live Broadcast!',
      message: 'Are you sure, you want to leave this live broadcast?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Agree',
          handler: () => {
            this.session.unsubscribe(this.subscriber);            
            sessionOBJ.disconnect();
            this.navCtrl.back();
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnDestroy(){
    console.log('ngOnDestroy session.disconnect');
    sessionOBJ.disconnect();
  }
}
