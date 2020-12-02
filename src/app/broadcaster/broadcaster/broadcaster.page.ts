import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SettingsService } from '../.././services/settings.service';
import { Config } from '../.././config/config';

declare var jQuery: any;
declare var apiRTC;
let conference_name: string;
declare var cordova;
declare var $: any;
const STATE_WAIT = "wait";
const STATE_INCALL = "incall";
var connectedSession = null;
var activeConversation = null;
var localStream = null;
var screensharingStream = null;
var connectedConversation = null;
const LABEL_CALL = "Call";
const LABEL_HANGOUT = "Hangout";

const COLOR_CALL = "#5cb85c";
const COLOR_HANGOUT = "#d9534f";

@Component({
    selector: 'app-broadcaster',
    templateUrl: './broadcaster.page.html',
    styleUrls: ['.././../app.component.scss', './broadcaster.page.scss'],
})
export class BroadcasterPage implements OnInit {
    mic = true;
    micOff = false;
    volumeUp = true;
    volumeOff = false;
    viewall = false;
    viewallBtn = true;
    pause= true;
    play=false;
    broadcastId: any;
    apiRTC: any;
    webRTCClient: any;
    STATE_WAIT = "wait";
    buttonLabel: any;
    buttonColor: any;
    state: any;
    cpwd: boolean = true;
    profileData: any;
    userData: any;
    profilePicUrl: any = Config.profilePic;
    showUserScreen: boolean = true;
    loginUserData: any;
    gotData: boolean = false;

    inputDisabled: boolean = false;
    isDisabled: boolean = true;
    conference_name: any;
    v: any;
    count = 0;
    private _player: HTMLAudioElement;
    isPlaying: boolean = false;
    post = { reposted: false };
    constraints: any = {};
    ANDROID_PERMISSIONS = [
        this.androidPermissions.PERMISSION.CAMERA,
        this.androidPermissions.PERMISSION.RECORD_AUDIO,
        this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS
    ];

    constructor(private router: Router,
        public platform: Platform,
        private zone: NgZone,
        private androidPermissions: AndroidPermissions,
        private alertController: AlertController,
        private navCtrl: NavController,
        private settingsService: SettingsService,
        public activatedRoute: ActivatedRoute) {
        this.incomingCallHandler = this.incomingCallHandler.bind(this);
        this.remoteStreamAddedHandler = this.remoteStreamAddedHandler.bind(this);
        this.hangupHandler = this.hangupHandler.bind(this);
        this.inputDisabled = true;
        this.count = 1;    
        this.count++;
    }
    micClick() {  // this should be change only icon
        this.mic = true;
        this.micOff = false;
    }
    micOffClick() {
        this.mic = false; // this should be change only icon
        this.micOff = true;
    }
    volumeUpClick() {
        this.volumeUp = false; //this should be change icon
        this.volumeOff = true;
    }
    volumeOffClick() {
        this.volumeUp = true;  // this should be change icon
        this.volumeOff = false;
    }
    viewMore() { // show more icon
        this.viewall = true;
        this.viewallBtn = false;
    }
    pauseClick(){ // this should be change icon
        this.pause = false;
        this.play = true;
    }
    playClick(){  //this should be change icon
        this.pause = true;
        this.play = false;
    }
    async presentAlertConfirm() {
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
                       // console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Agree',
                    handler: () => {
                       // console.log('Confirm Okay');
                        this.zone.run(async () => {
                            await this.navCtrl.navigateForward("tabs/consultant-profile");
                        });
                    }
                }
            ]
        });

        await alert.present();
  
    }


    ngOnInit() {
        this.refreshVideos();  // api rtc initialisation
        this.checkAndroidPermissions(); 
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));

    }
    toggleReposted(): void {
        this.post.reposted = !this.post.reposted;
    }

    private checkAndroidPermissions(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.platform.ready().then(() => {
                this.androidPermissions
                    .requestPermissions(this.ANDROID_PERMISSIONS)
                    .then(() => {
                        this.androidPermissions
                            .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
                            .then(camera => {
                                this.androidPermissions
                                    .checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
                                    .then(audio => {
                                        this.androidPermissions
                                            .checkPermission(this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS)
                                            .then(modifyAudio => {
                                                if (camera.hasPermission && audio.hasPermission && modifyAudio.hasPermission) {
                                                    resolve();
                                                } else {
                                                    reject(
                                                        new Error(
                                                            'Permissions denied: ' +
                                                            '\n' +
                                                            ' CAMERA = ' +
                                                            camera.hasPermission +
                                                            '\n' +
                                                            ' AUDIO = ' +
                                                            audio.hasPermission +
                                                            '\n' +
                                                            ' AUDIO_SETTINGS = ' +
                                                            modifyAudio.hasPermission,
                                                        ),
                                                    );
                                                }
                                            })
                                            .catch(err => {
                                                console.error(
                                                    'Checking permission ' +
                                                    this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS +
                                                    ' failed',
                                                );
                                                reject(err);
                                            });
                                    })
                                    .catch(err => {
                                        console.error(
                                            'Checking permission ' + this.androidPermissions.PERMISSION.RECORD_AUDIO + ' failed',
                                        );
                                        reject(err);
                                    });
                            })
                            .catch(err => {
                                console.error('Checking permission ' + this.androidPermissions.PERMISSION.CAMERA + ' failed');
                                reject(err);
                            });
                    })
                    .catch(err => console.error('Error requesting permissions: ', err));
            });
        });
    }

    pushCall() {
        console.log(this.conference_name);
        'use strict';

        apiRTC.setLogLevel(10);

        var ua = null,
            localStream = null,
            call = null,
            connectedConversation = null,
            connectedSession = null,
            selectCamera = (<HTMLInputElement>document.getElementById("select-camera")),
            // selectMic = (<HTMLInputElement>document.getElementById("select-mic")),
            selectedAudioInputId = null,
            selectedVideoInputId = null;

        selectCamera.onchange = function (e) {
            console.error("selectCamera onchange :", e);
            createStream();
            //        localStorage.setItem("videoSourceId_" + connectedSession.getId(), selectCamera.value);
        };
        // selectMic.onchange = function (e) {
        //     console.error("selectMic onchange :", e);
        //     createStream();
        //            localStorage.setItem("audioSourceId_" + connectedSession.getId(), selectMic.value);
        // };

        function showSelectDevicesArea() {
            document.getElementById('select-device').style.display = 'inline-block';
        }
        function hideSelectDevicesArea() {
            document.getElementById('select-device').style.display = 'none';
        }

        function updateDeviceList(res) {

            console.log("updateDeviceList");

            var cameras = [],
                microphones = [],
                option = null,
                selectors = [selectCamera],
                i = 0;
            let v;
            //Cleaning selectors
            selectors.forEach(function (select) {
                while (select.firstChild) {
                    select.removeChild(select.firstChild);
                }
            });

            //        selectedVideoInputId = localStorage.getItem("videoSourceId_" + connectedSession.getId());

            for (i = 0; i < Object.values(res.videoinput).length; i++) {
                v = Object.values(res.videoinput)[i];
                console.log('getCameras', v);
                option = document.createElement("option");
                option.text = v.label || 'camera ' + (cameras.length + 1);
                option.value = v.id;
                selectCamera.appendChild(option);
                cameras.push(v);

                if (v.id === selectedVideoInputId && selectedVideoInputId !== null) {
                    console.error("select caméra");
                    selectCamera.value = selectedVideoInputId;
                }
            }

            //       selectedAudioInputId = localStorage.getItem("audioSourceId_" + connectedSession.getId());
            for (i = 0; i < Object.values(res.audioinput).length; i++) {
                v = Object.values(res.audioinput)[i];
                console.log('getMicrophones', v);
                option = document.createElement("option");
                option.text = v.label || 'micro ' + (microphones.length + 1);
                option.value = v.id;
                // selectMic.appendChild(option);
                microphones.push(v);

                if (v.id === selectedAudioInputId && selectedAudioInputId !== null) {
                    console.error("select audio");
                    // selectMic.value = selectedAudioInputId;
                }
            }
            console.log('getDevices', cameras, microphones);

            //        localStorage.setItem("videoSourceId_" + connectedSession.getId(), selectCamera.value);
            //        localStorage.setItem("audioSourceId_" + connectedSession.getId(), selectMic.value);
        }

        function manageMediaDevices() {

            console.log("manageMediaDevices");
            var mediaDevices = ua.getUserMediaDevices();
            console.log("manageMediaDevices :", mediaDevices);
            updateDeviceList(mediaDevices);
        }
        //SELECT_MEDIA

        //==============================
        // CREATE LOCAL STREAM
        //==============================
        var createStream = function () {
            // Release old stream if it exists

            if (localStream !== null) {
                call = connectedConversation.getConversationCall(localStream);
                console.error('call :', call);
                localStream.release();
            }

            var createStreamOptions: any = {};
            createStreamOptions.videoInputId = selectCamera.value;
            createStreamOptions.constraints = {
                audio: true,
                cssClass: 'full-video',
                video: {
                    width: {min: 320, ideal: 1920, max: 1920},
                    height: {min: 240, ideal: 1080, max: 1080}
                    
                }
            };
                
            let callbacks: any = {};
            callbacks.getStream = () => {
                return new Promise((resolve, reject) => {
                    ua.createStream(createStreamOptions)
                        .then(function (stream) {
                            // Save local stream
                            localStream = stream;
                            stream.removeFromDiv('local-container', 'local-media');
                            stream.addInDiv('local-container', 'local-media', {}, true);
                            return resolve(stream);
                        })
                        .catch(function (err) {
                            console.error('create stream error', err);
                            document.getElementById('error-device').innerHTML = 'ERROR :' + err.error.message;
                            document.getElementById('error-device').style.display = "block";
                            reject()
                        });
                });
            };
            

            if (call !== null) {
                //Switch the camera if call is ongoing
                return call.replacePublishedStream(null, callbacks);
            } else {
                return callbacks.getStream();
            }
        };
        function showChatBox() {
            document.getElementById('chat').style.display = 'block';
            document.getElementById('conversation-selector').style.display = 'none';
        }

        //Wrapper to send a message to everyone in the conversation and display sent message in UI
        function sendMessageToActiveConversation(message) {
            if (message !== '') {
                $('#typing-area').val('');
                $('#message-list').append('<li><b>Me</b> : ' + message + '</li>');

                //Actually send message to active contact
                activeConversation.sendMessage(message);
            }

        }
        function joinConference(name) {
            var cloudUrl = 'https://cloud.apizee.com';

            //==============================
            // CREATE USER AGENT
            //==============================
            ua = new apiRTC.UserAgent({
                uri: 'apzkey:bf1b72cfab7449c7998d92180d292a94'
            });

            //SELECT_MEDIA
            ua.on("mediaDeviceChanged", function (updatedContacts) {
                console.error("mediaDeviceChanged");
                manageMediaDevices();
            });
            //SELECT_MEDIA

            manageMediaDevices();
            showSelectDevicesArea();

            //==============================
            // REGISTER
            //==============================
            ua.register({
                cloudUrl: cloudUrl
            }).then(function (session) {
                // Save session
                connectedSession = session;
                // document.getElementById('conference_name').innerHTML = connectedSession.getId();

                connectedSession
                    .on("contactListUpdate", function (updatedContacts) { //display a list of connected users
                        console.log("MAIN - contactListUpdate", updatedContacts);
                        if (connectedConversation !== null) {
                            let contactList = connectedConversation.getContacts();
                            console.info("contactList  connectedConversation.getContacts() :", contactList);
                        }
                    });

                //==============================
                // CREATE CONVERSATION
                //==============================
                connectedConversation = connectedSession.getConversation(name);

                //==========================================================
                // ADD EVENT LISTENER : WHEN NEW STREAM IS AVAILABLE IN CONVERSATION
                //==========================================================
                connectedConversation.on('streamListChanged', function (streamInfo) {

                    console.log("streamListChanged :", streamInfo);

                    if (streamInfo.listEventType === 'added') {
                        if (streamInfo.isRemote === true) {

                            connectedConversation.subscribeToMedia(streamInfo.streamId)
                                .then(function () {
                                    console.log('subscribeToMedia success');
                                }).catch(function (err) {
                                    console.error('subscribeToMedia error', err);
                                });
                        }
                    }
                });

                //=====================================================
                // BIS/ ADD EVENT LISTENER : WHEN STREAM WAS REMOVED FROM THE CONVERSATION
                //=====================================================
                connectedConversation
                    .on('streamAdded', function (stream) {
                        console.log('connectedConversation streamAdded');
                        stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false);
                    }).on('streamRemoved', function (stream) {
                        console.log('connectedConversation streamRemoved');
                        stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId);
                    });

                //==============================
                // CREATE LOCAL STREAM & JOIN CONVERSATION
                //==============================
                var createStreamOptions: any = {};
                createStreamOptions.constraints = {
                    audio: true,
                    video: true
                };

                createStream()
                    .then(function (stream) {
                        console.log('createStream return OK');
                    localStream = stream;
                    stream.removeFromDiv('local-container', 'local-media');
                    stream.addInDiv('local-container', 'local-media', {}, true);
                        connectedConversation.join()
                            .then(function (response) {

                                var options = {};
                                //options.qos.videoForbidInactive = true;
                                //options.qos.videoMinQuality = 'medium';

                                connectedConversation.publish(stream, options);
                            });

                    }).catch(function (err) {
                        console.error('create stream error', err);
                    });
            });
            if (name !== '') {
                activeConversation = connectedSession.getConversation(name);
    
    
                //Listen to incoming messages from conversation
                activeConversation.on('message', function(e) {
                    $('#message-list').append('<li><b>' + e.sender.getId() + '</b> : ' + e.content + '</li>');
                });
                //Listen for any participants entering or leaving the conversation
                activeConversation.on('contactJoined', function(contact) {
                    console.log("Contact that has joined :", contact);
                    renderUserList();
                })
                .on('contactLeft', function(contact) {
                    console.log("Contact that has left :", contact);
                    renderUserList();
                });
    
                activeConversation.join()
                    .then(function() {
                        //Conversation was successfully joined
                        document.getElementById('active-conversation-name').innerHTML = activeConversation.getName();
                        console.log("pppp"+activeConversation.getName());
                        
                        showChatBox();
                        renderUserList();
                    })
                    .catch(function(err) {
                        //Woops! User agent was not able to join conversation
                    });
            }
        }
        function renderUserList () {
            var contacts = activeConversation.getContacts();
            $('#active-users').empty();
            $('#active-users').append('<li><b>Active users</b></li>');
            var keys = Object.keys(contacts);
            for (var i = 0; i < keys.length; i++) {
                $('#active-users').append('<li>' + contacts[keys[i]].getId() + '</li>');
                console.log("apsp"+ contacts[keys[i]]);
                
            }

        }

        // Get conference name
        this.conference_name;

        // document.getElementById('create').style.display = 'none';
        // document.getElementById('conference').style.display = 'inline-block';
        // document.getElementById('title').innerHTML = 'You are in conference: ' + this.conference_name;

        // Join conference
        joinConference(this.conference_name);
        $('#muteAudio').on('click', function () {
            console.log('MAIN - Click muteAudio');
            localStream.muteAudio();
        });
        //unMuteAudio from call
        $('#unMuteAudio').on('click', function () {
            console.log('MAIN - Click unMuteAudio');
            localStream.unmuteAudio();
        });
     
        //-------------------------------------- C H A T ---------------------------------------
       

        $('#send-message').on('click', function() {
            sendMessageToActiveConversation($('#typing-area').val().toString());
        });
        $('#typing-area').keypress(function (e) {
            if (e.which == 13) {
                sendMessageToActiveConversation($('#typing-area').val().toString());
                return false;
            }
        });
   
      

        //==============================
        // CREATE USER AGENT
        //==============================

        //==============================
        // START CHAT
        //==============================

      
        $('#leaveConference').on('click', function () {
            console.log("leaveConference");
    
            document.getElementById('create').style.display = 'inline-block';
            document.getElementById('conference').style.display = 'none';
            document.getElementById('title').innerHTML = 'Conference demo - join / leave';
    
            //Leave Conversation
            if (connectedConversation !== null) {
                //Leaving actual conversation
    
                connectedConversation.destroy();
                connectedConversation.leave()
                    .then(function() {
                        console.debug('Conversation leave OK');
                    }).catch(function (err) {
                        console.error('Conversation leave error', err);
                    });
                connectedConversation = null;
                $('#remote-container').empty();
            }
    
            //Release localStream
            if (localStream !== null) {
                //Releasing LocalStream
                localStream.release();
            }
        });

    }


    private refreshVideos() {
        if (this.platform.is('ios') && this.platform.is('cordova')) {
            cordova.plugins.iosrtc.refreshVideos();
            cordova.plugins.iosrtc.registerGlobals();
        }
    }

    incomingCallHandler(e) {
       // console.log("incomingCallHandler");
        this.state = STATE_INCALL;
        this.buttonColor = COLOR_HANGOUT;
        this.buttonLabel = LABEL_HANGOUT;
        setTimeout(this.refreshVideos, 2000);
    }
    hangupHandler(e) {
        this.state = STATE_WAIT;
        this.buttonColor = COLOR_CALL;
        this.buttonLabel = LABEL_CALL;
        this.initMediaElementState(e.detail.conference_name);
    }
    remoteStreamAddedHandler(e) {
        console.log("remoteStreamAddedHandler", e);
        this.state = STATE_INCALL;
        this.buttonColor = COLOR_HANGOUT;
        this.buttonLabel = LABEL_HANGOUT;
        this.webRTCClient.addStreamInDiv(
            e.detail.stream,
            e.detail.conferenceType,
            "remote",
            'remoteElt-' + e.detail.conference_name,{},
            // {width : "640px", height : "480px"},
            false
        );
        setTimeout(this.refreshVideos, 1000);
    }
    
    initMediaElementState(conference_name) {
        this.webRTCClient.removeElementFromDiv('mini', 'miniElt-' + conference_name);
        this.webRTCClient.removeElementFromDiv('remote', 'remoteElt-' + conference_name);
    }

   async exitSession() {
        if (this.conference_name) {

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
                           // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Agree',
                        handler: () => {
                          //  console.log('Confirm Okay');
                            this.zone.run(async () => {
                                await this.navCtrl.navigateForward("tabs/consultant-profile");
                            });
                        }
                    }
                ]
            });
    
            await alert.present();
      
            this.conference_name = null;
            localStream.getVideoTracks()[0].stop();
            localStream.getTracks().forEach(track => track.stop())
           
            $('#leaveConference').on('click', function () {
               // console.log("leaveConference");
        
                document.getElementById('create').style.display = 'inline-block';
                document.getElementById('conference').style.display = 'none';
                document.getElementById('title').innerHTML = 'Conference demo - join / leave';
        
                //Leave Conversation
                if (connectedConversation !== null) {
                    //Leaving actual conversation
        
                    connectedConversation.destroy();
                    connectedConversation.leave()
                        .then(function() {
                            console.debug('Conversation leave OK');
                        }).catch(function (err) {
                            console.error('Conversation leave error', err);
                        });
                    connectedConversation = null;
                    $('#remote-container').empty();
                }
        
                //Release localStream
                if (localStream !== null) {
                    //Releasing LocalStream
                    localStream.release();
                }
            });
            // hideAcceptDeclineButtons();
            // function hideAcceptDeclineButtons() {
            //     $("#hangup").unbind( "click" );
            //     document.getElementById('hangup').style.display = 'none';
            // }
        }

    }
    async  showBroadcast() {
        if (this.isPlaying) {
            //pause here
        } else {
            //play here
        }
        this.isPlaying = !this.isPlaying;

        const alert = await this.alertController.create({
            header: 'Alert',
            message: 'Streaming is Paused',
            buttons: ['OK']
        });

        await alert.present();
    }

    ionViewWillEnter() {
        this.userData = JSON.parse(localStorage.getItem('userData'));

        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.conference_name = params.get('broadcastId');

            this.pushCall();
        });
    
        this.settingsService.getProfileData().subscribe((data: any) => {

            this.profileData = data.status;
            this.gotData = true;
      
          });
    }
    trigerrScreen(){
        this.showUserScreen = !this.showUserScreen;
    }
}