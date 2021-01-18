import { Component, OnInit,  NgZone,ViewChild } from '@angular/core';
import { AlertController, NavController,IonInput } from '@ionic/angular';
import { ProgramService } from '../services/program.service';

declare var OT:any;

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
  // videoDeviceId : any;
  // audioDeviceId : any;

  publisherProperties : any;
  publisherHangup : boolean = false;
  publisherMice : boolean = false;
  publisherCamera : boolean= false;
  publisherVolume : boolean = false;
  publisherTargetElement : string = 'publisher';
  // publisherChat : boolean = false;

  subscriber: any;
  subscribers : any;
  subscriberProperties : any;
  subscriberHangup : boolean = false;
  subscriberMice : boolean = false;
  subscriberCamera : boolean = false;
  subscriberVolume : boolean = false;
  subscriberTargetElement : string = 'subscriber';
  subStream : any;
  // subscriberChat : boolean = false;

  connectionId : any;
  chatTrue : boolean = false;
  groupMessage = '';

  constructor(
    public alertController: AlertController,
    private zone: NgZone,
    public navCtrl: NavController,
    public programService : ProgramService
    ) {
      this.loginData = JSON.parse(localStorage.getItem('userData'));
        this.opentokApiConfig();
        this.publisherConfig();
        this.subscriberConfig();
        this.icons();
     }
  opentokApiConfig(){
  //       this.programService.openTokSessionCreate({'time': 10}).subscribe( (data: any) => {
  //   this.sessionId = data.opentok_session_id;
  //   this.token = data.opentok_token;
  //   this.apiKey = data.opentok_api_key;
    
  //   // console.log('Data:'+JSON.stringify(data));
  //   console.log('sessionId:'+this.sessionId);
  //   console.log('token:'+this.token);
  //   console.log('apiKey:'+this.apiKey);
  // });
    
  this.sessionId = '1_MX40NzA4MDA1NH5-MTYxMDk1NzYxMTkxNX54cVpNZVdIc0N0ak5GZzVEYkZhQWx5VHF-fg';
  this.token = 'T1==cGFydG5lcl9pZD00NzA4MDA1NCZzaWc9YzEzMjQ3M2MyZmIxNTFmNDUzMmZiZjdiYWExMjczMWFiYjI0YjJiMzpzZXNzaW9uX2lkPTFfTVg0ME56QTRNREExTkg1LU1UWXhNRGsxTnpZeE1Ua3hOWDU0Y1ZwTlpWZEljME4wYWs1R1p6VkVZa1poUVd4NVZIRi1mZyZjcmVhdGVfdGltZT0xNjEwOTU3NjExJnJvbGU9cHVibGlzaGVyJm5vbmNlPTE2MTA5NTc2MTEuOTQ2ODMyMjQ4MjE3OCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
  this.apiKey = '47080054';
  }
  videoDevice(){
    //---Setting the camera used by the publisher---//
    var videoInputDevices;
    var videoDeviceId;
    OT.getDevices(function(error, devices) {
      videoInputDevices = devices.filter(function(element) {
        return element.kind == "videoInput";
      });
      for (let i = 0; i < videoInputDevices.length; i++) {
        videoDeviceId = videoInputDevices[i].deviceId;
      }
      // console.log("audio input device: ", videoDeviceId);
      return videoDeviceId;
    });
  }
  audioDevice(){      
    //---Setting the microphone used by the publisher---//
      var audioInputDevices;
      var audioDeviceId;
      OT.getDevices(function(error, devices) {
      audioInputDevices = devices.filter(function(element) {
        return element.kind == "audioInput";
      });      
      for (let i = 0; i < audioInputDevices.length; i++) {
        audioDeviceId = audioInputDevices[i].deviceId;      
      }
      console.log("audio input device: ", audioDeviceId);
      return audioDeviceId;      
    });
  }
  publisherConfig(){
    this.publisherProperties = {
      // audioSource: this.audioDevice(),
      // videoSource: this.videoDevice(),
      audioVolume : this.audioVolume,
      resolution: '1280x720',
      insertMode: 'append',
      cameraPosition: this.cameraPosition,
      width: 400,
      height: 300,
      name : this.loginData.user_name,
      usePreviousDeviceSelection : true,
      style: { 
        nameDisplayMode: "off",
        buttonDisplayMode: 'on'
      }
    };
  }
  subscriberConfig(){
  this.subscriberProperties = {
    insertMode: 'append',
    cameraPosition: this.cameraPosition,
    testNetwork: true,
    width: 90,
    height: 90,
    audioVolume : this.audioVolume,
    name : this.loginData.user_name,
    style: { 
      nameDisplayMode: "off",
      buttonDisplayMode: 'on'
    }
  };
  }
  icons(){
    if(this.loginData.id == 93){
      this.publisherHangup = true;
      this.publisherMice = true;
      this.publisherCamera = true;
      this.publisherVolume = true;
    }else{
      this.subscriberHangup = true;
      this.subscriberMice = true;
      this.subscriberCamera = true;
      this.subscriberVolume = true;
    }   
  } 
  cameraSwitch(){
    if(this.cameraPosition == 'front'){
      this.cameraPosition = 'back';
    }else{
      this.cameraPosition = 'front';
    }
    this.session.unpublish(this.publisher);
    this.publisher = OT.initPublisher(this.publisherTargetElement,this.publisherProperties,function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('publisher added.');
      }
    });
    this.session.publish(this.publisher, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Publishing a stream.');
      }
    });
    console.log(this.cameraPosition + ' camera.');
    // this.publisher.setVideoSource(this.videoDevice())
    // .then(() => console.log('video source set'))
    // .catch((error) => console.error(error.name));
  }
  subMute(){
    this.volume = false;
    // Set a value between 0 (silent) and 100 (full volume):
    this.audioVolume = 0;
    // Replace stream and replacementElementId with your own values:
    this.subscriber = this.session.subscribe(this.subStream,this.subscriberTargetElement,this.subscriberConfig());
  }
  subUnMute(){
    this.volume = true;
    // Set a value between 0 (silent) and 100 (full volume):
    this.audioVolume = 100;
    // Replace stream and replacementElementId with your own values:
    this.subscriber = this.session.subscribe(this.subStream,this.subscriberTargetElement,this.subscriberConfig());
  }
  ngOnInit() {
    this.session = OT.initSession(this.apiKey, this.sessionId);
    //----Initializing a Publisher view---//
    this.publisher = OT.initPublisher(this.publisherTargetElement,this.publisherProperties,function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('publisher added.');
      }
    });  
    //---Detecting when a client has granted access to the camera and microphone--//
    this.publisher.on({
      accessAllowed: function (event) {
        // The user has granted access to the camera and mic.
      },
      accessDenied: function accessDeniedHandler(event) {
        // The user has denied access to the camera and mic.
      },
      accessDialogOpened: function (event) {
        // The Allow/Deny dialog box is opened.
      },
      accessDialogClosed: function (event) {
        // The Allow/Deny dialog box is closed.
      }
    });
    this.session.on({
      streamCreated: (event: any) => {
        this.subscriber = this.session.subscribe(event.stream, this.subscriberTargetElement,this.subscriberProperties,function (error) {
          if (error) {
            console.log(error);
          } else {
            this.subStream = event.stream;
            console.log('Subscriber added.');
          }
      });
        OT.updateViews();
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
          OT.updateViews();   
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
    
    this.publisher.on("streamDestroyed", function (event) {
      console.log("The publisher stopped streaming. Reason: "
        + event.reason);
        this.publisher.destroy();
    });
  }
  chatCall(){
    this.chatTrue = true;
  }
  chatCloseCall(){
    this.chatTrue = false;
  }
  chatMessage(){
    //---------reciving chat message----------------//
    if(this.groupMessage != '' && this.groupMessage != null){
      this.session.signal({
        type: 'msg',
        data: this.groupMessage,
      }, function signalCallback(error) {
        if (error) {
          console.error('Error sending signal:', error.name, error.message);
        } else {
          // sendmessage.value = '';
        }
      });
      
      this.session.on('signal:msg', function signalCallback(event) { 
        var node = document.createElement('ion-item');
        node.className = event.from.connectionId === this.connectionId ? 'mine' : 'theirs';
        var html = "<ion-avatar slot='start'>";
        html += " <img src='../../assets/images/station2.jpg'>";
        html += "</ion-avatar>";
        html += "<ion-label>";
        html += " <h2 class='list-person'>Pooja</h2>";
        html += " <p>";
        html += event.data;
        html += "</p>";
        html += "<ion-label>";
        node.innerHTML = html;
        document.querySelector('#history').appendChild(node);
        node.scrollIntoView();
      });
    }
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
            this.navCtrl.back();
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnDestroy(){
    console.log('ngOnDestroy session.disconnect');
    this.session.disconnect();
  }
}
