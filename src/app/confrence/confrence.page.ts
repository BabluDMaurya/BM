import { Component, OnInit,ViewChild} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController,IonInput} from '@ionic/angular';

declare var window: any;
@Component({
  selector: 'app-confrence',
  templateUrl: './confrence.page.html',
  styleUrls: ['./confrence.page.scss'],
})
export class ConfrencePage implements OnInit {
  @ViewChild(IonInput, { read: IonInput,  static: false }) sendmessage: IonInput;
  
  mic: string = "mic";
  volume: string = "volume-high";
  audioMute: boolean = false;
  videoMute: boolean = false;
  chatTrue = false;
  chatbody = 'off';
  currentModal = null;
  groupMessage = '';

  //
  streamAudioBoolean : boolean = false;
  streamVideoBoolean : boolean = false;
  audioMutedBoolean : boolean = false;
  videoMutedBoolean : boolean = false;
  //
  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      // console.log("Role:"+params["role"]);
      // console.log("program_type:"+params["program_type"]);
      // console.log("description:"+params["description"]);
      // console.log("participants:"+params["participants"]);
      // console.log("duration:"+params["duration"]);

        if(params["program_type"] == 'public'){
          
          this.streamAudioBoolean = true;
          this.streamVideoBoolean = true;
          if(params["role"] == 'moderator'){
            this.mic = 'mic';
            this.volume = 'volume-high';
            this.audioMutedBoolean = false;
            this.videoMutedBoolean = false;
          }else{
            this.mic = 'mic-off';
            this.volume = 'volume-off';
            this.audioMutedBoolean = true;
            this.videoMutedBoolean = true;
          }          

        }else if(params["program_type"] == 'private oneway'){
          console.log("program_type 1:" + params["program_type"]);
          
          this.streamAudioBoolean = true;
          this.streamVideoBoolean = true;
          if(params["role"] == 'moderator'){
            this.mic = 'mic';
            this.volume = 'volume-high';
            this.audioMutedBoolean = false;
            this.videoMutedBoolean = false;
          }else{
            this.mic = 'mic-off';
            this.volume = 'volume-off';
            this.audioMutedBoolean = true;
            this.videoMutedBoolean = true;
          }

        }else if(params["program_type 2"] == 'private twoway'){
          console.log("program_type :" + params["program_type"]);
          
          this.streamAudioBoolean = true;
          this.streamVideoBoolean = true;
          this.audioMutedBoolean = false;
          this.videoMutedBoolean = false;
          this.mic = 'mic';
          this.volume = 'volume-high';

        }else if(params["program_type"] == 'group oneway'){
          console.log("program_type 1 :" + params["program_type"]);

          this.streamAudioBoolean = true;
          this.streamVideoBoolean = true;          
          if(params["role"] == 'moderator'){
            this.mic = 'mic';
            this.volume = 'volume-high';
            this.audioMutedBoolean = false;
            this.videoMutedBoolean = false;
          }else{
            this.mic = 'mic-off';
            this.volume = 'volume-off';
            this.audioMutedBoolean = true;
            this.videoMutedBoolean = true;
          }

        }else if(params["program_type"] == 'group twoway'){
          console.log("program_type 2 :" + params["program_type"]);
          
          this.streamAudioBoolean = true;
          this.streamVideoBoolean = true;
          this.audioMutedBoolean = false;
          this.videoMutedBoolean = false;
          this.mic = 'mic';
          this.volume = 'volume-high';

        }else{
          console.log("program_type :" + params["program_type"]);

          this.streamAudioBoolean = true;
          this.streamVideoBoolean = true;
          this.audioMutedBoolean = false;
          this.videoMutedBoolean = false;
          this.mic = 'mic';
          this.volume = 'volume-high';

        }

      var videoSize = {
        minWidth: 320,
        minHeight: 180,
        maxWidth: 1280,
        maxHeight: 720,
      };
      var streamOpt = {
        audio: this.streamAudioBoolean,  // Whether to add Audio to stream
        video: this.streamVideoBoolean, // Whether to add Video to stream
        data: true,  // Whether to add Data to stream
        audioOnlyMode: false,
        framerate: 30,
        maxVideoBW: 1500,
        minVideoBW: 150,
        videoSize: videoSize,
        audioMuted: false, // Audio muted on entry to room 
        videoMuted: false, // Video muted on entry to room 
        maxVideoLayers: 1,
        name: params["name"]
      };
      var playerConfiguration = {
        audiomute: this.audioMutedBoolean,
        videomute: this.videoMutedBoolean,
        bandwidth: true,
        screenshot: true,
        avatar: true,
        iconHeight: 30,
        iconWidth: 30,
        avatarHeight: 200,
        avatarWidth: 200,
      };
      var roomOpt = {
        activeviews: "list",
        allow_reconnect: true,
        number_of_attempts: 3,
        timeout_interval: 10000,
        playerConfiguration: playerConfiguration,
        chat_only: false,
        settings: {
          description: params['description'],
          scheduled: false,
          adhoc: true,
          participants: params["participants"],
          duration: params["duration"],
          quality: 'SD',
          auto_recording: false,
        },
      };
        window.EnxRtc.joinRoom(params["token"], streamOpt, roomOpt)
        this.addEnxListner();
    });

  }
  //Init LocalView
  initLocalView() {
    var initLocalViewOptions = {
      height: 130,
      width: 100,
      margin_top: 80,
      margin_left: 0,
      margin_right: 15,
      margin_bottom: 10,
      position: "top"
    };
    window.EnxRtc.initLocalView(initLocalViewOptions, function (data) {
      console.log('Local player Excelsior succuss! ' + JSON.stringify(data.data));
    }, function (err) {
      console.log('Uh oh... error' + JSON.stringify(err));
    });
  }
  initRemoteView() {
    var initRemoteViewOptions = {
      margin_top: 70,
      margin_bottom: 70
    };
    window.EnxRtc.initRemoteView(initRemoteViewOptions, function (data) {
      console.log('Remore Player Excelsior succuss! ' + JSON.stringify(data.data));
    }, function (err) {
      console.log('Uh oh... error' + JSON.stringify(err));
    });
  }
  //Add listoner 
  addEnxListner() {
    let _this = this;
    window.EnxRtc.addEventListner("onRoomConnected", function (data) {
      console.log('Excelsior succuss! resizeViewOptions ' + JSON.stringify(data.data));
      _this.initLocalView();
      _this.initRemoteView();
    });
    window.EnxRtc.addEventListner("onRoomDisConnected", function (data) {
      // console.log('Excelsior succuss! onRoomDisConnected ' + JSON.stringify(data.data));
      _this.goBackToPriviousPage();
    });
    window.EnxRtc.addEventListner("onEventError", function (data) {
      // console.log('Excelsior EventError! onEventError ' + JSON.stringify(data.data));
    });
    window.EnxRtc.addEventListner("onAudioEvent", function (data) {
      // console.log('Excelsior succuss! onAudioEvent ' + JSON.stringify(data.data.result));
      var response = data.data;
      // console.log("audio msg" + typeof response.msg);
      // console.log("audio variable msg" + response.msg + 'hello');
      if (response.msg === 'Audio Off') {
        // console.log("function condition get");
        _this.audioMute = true;
        _this.mic = 'mic-off';
        // _this.audioimgSrc = "../../assets/icon/unmute_audio.png";
      }
      else {
        // console.log("function condition offff get");
        _this.audioMute = false;
        _this.mic = 'mic';
        // _this.audioimgSrc = "../../assets/icon/mute_audio.png";
      }
    });
    window.EnxRtc.addEventListner("onVideoEvent", function (data) {
      // console.log('Excelsior succuss! onVideoEvent ' + JSON.stringify(data.data));
      var response = data.data;
      // console.log("Video msg" + response.msg);
      if (response.msg === "Video Off") {
        _this.videoMute = true;
        // _this.videoimgSrc = "../../assets/icon/unmute_video.png";
      }
      else {
        _this.videoMute = false;
        // _this.videoimgSrc = "../../assets/icon/mute_video.png";
      }

    });    
    window.EnxRtc.addEventListner("onNotifyDeviceUpdate", function (data) {
      // console.log('Excelsior EventError! onNotifyDeviceUpdate ' + JSON.stringify(data.data));
      var deviceName = data.data;
      if (deviceName === "EARPIECE") {
        _this.volume = 'volume-high';
        // _this.speakerImgSrc = "../../assets/icon/unmute_speaker.png";
      }
      else {
        _this.volume = 'volume-off';
        // _this.speakerImgSrc = "../../assets/icon/mute_speaker.png";
      }
    });       
    window.EnxRtc.addEventListner("onAcknowledgedSendData", function(data)    {
      console.log('onAcknowledgedSendData : result'+JSON.stringify(data.data));
    });
    window.EnxRtc.addEventListner("onMessageReceived",function(data){
      var reciveData = data.data;
      
      var scrollIntoViewOptions :{block: "end", inline: "nearest"}
      var node = document.createElement('ion-item');
        node.className = 'theirs item-background-color-chat';
        var html = "<ion-label>";
        html += " <h2 class='list-person'>"+reciveData.sender+"</h2>";
        html += " <p>"+reciveData.message+"</p>";
        html += "<ion-label>";
        node.innerHTML = html;
        document.querySelector('#history').appendChild(node);
        node.scrollIntoView(scrollIntoViewOptions);
    });    
  }
  
  goBackToPriviousPage() {
    this.navCtrl.pop();
  }
  muteUnMuteAudio() {
    // console.log("Image Click");
    if (!this.audioMute) {
      // console.log("Audio Mute");
      this.mic = "mic-off";
      window.EnxRtc.muteSelfAudio(true);
    }
    else {
      // console.log("Audio unMute");
      this.mic = "mic";
      window.EnxRtc.muteSelfAudio(false);
    }
  }
  muteUnMuteVideo() {
    // console.log("Image Click");
    if (!this.videoMute) {
      // this.mic = "volume-high";
      window.EnxRtc.muteSelfVideo(true);
    }
    else {
      // this.mic = "volume-off";
      window.EnxRtc.muteSelfVideo(false);
    }
  }
  disconnect() {
    window.EnxRtc.disconnect(false, function (data) {
      // console.log('Excelsior succuss! hideSelfView ' + JSON.stringify(data.data));
    }, function (err) {
      // console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
    });
  }
  switchCamera() {
    window.EnxRtc.switchCamera(false, function (data) {
      // console.log('Excelsior succuss! Switch Camera ' + JSON.stringify(data.data));
    }, function (err) {
      // console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
    });
  }
  cheangAudioMedia() {
    window.EnxRtc.getSelectedDevice(function (data) {
      // console.log('Excelsior succuss! getSelectedDevice ' + JSON.stringify(data.data));
      var currentDevice = data.data;
      window.EnxRtc.getDevices(function (data) {
        // console.log('Excelsior succuss! getDevices ' + JSON.stringify(data.data));
        var connectedMedia = data.data;
        // console.log("fileter media " + connectedMedia);
        var meida;
        for (meida of connectedMedia) {
          if (meida === currentDevice) {
            // console.log("Available Media" + meida);
          }
          else {
            window.EnxRtc.switchMediaDevice(meida, function (data) {
              // console.log('Excelsior succuss! switchMediaDevice ' + JSON.stringify(data.data));
            }, function (err) {
              // console.log('Uh oh... error resizeLocalView ' + JSON.stringify(err));
            });
            break;
          }
        }
      })
    })
  }
  sendMessage() {
    if(this.groupMessage != '' && this.groupMessage != null){
      var scrollIntoViewOptions :{block: "end", inline: "nearest"}
      var node = document.createElement('ion-item');
        node.className = 'mine item-background-color-chat';
        var html = "<ion-label>";
        html += " <h2 class='list-person'>BABLU</h2>";
        html += " <p>"+this.groupMessage+"</p>";
        html += "<ion-label>";
        node.innerHTML = html;
        document.querySelector('#history').appendChild(node);
        node.scrollIntoView(scrollIntoViewOptions);
        this.sendChatToServer(this.groupMessage);
    this.groupMessage = '';
    }
  }
  sendChatToServer(text) {
    var message = text // JSON
      var broadcast = true; // Incase of public messaging
      var array = []; // Incase of public messaging
      window.EnxRtc.sendMessage(message,broadcast,array,function(data){
        console.log("Data : " + JSON.stringify(data));
      });
  }
  plotChat(obj) {
  //   const f_name = obj.username;
  //   const name = obj.username.slice(0, 1);
    // var scrollIntoViewOptions :{block: "end", inline: "nearest"}
    //   var node = document.createElement('ion-item');
    //     // node.className = event.from.connectionId == event.target.connection.connectionId ? 'mine item-background-color-chat' : 'theirs item-background-color-chat';
    //     var html = "<ion-avatar slot='start'>";
    //     html += " <img src='../../assets/images/station2.jpg'>";
    //     html += "</ion-avatar>";
    //     html += "<ion-label>";
    //     html += " <h2 class='list-person'>BABLU</h2>";
    //     html += " <p>"+obj.message+"</p>";
    //     html += "<ion-label>";
    //     node.innerHTML = html;
    //     document.querySelector('#history').appendChild(node);
    //     node.scrollIntoView(scrollIntoViewOptions);
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
}



