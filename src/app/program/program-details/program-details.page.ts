import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';
import { ParticipantsComponent } from '../participants/participants.component';
import { EquipmentsComponent } from '../equipments/equipments.component';
import { ChatUserComponent } from '../chat-user/chat-user.component';
import { AdDetailsComponent} from '../ad-details/ad-details.component';
import { NavController, Platform,ModalController} from '@ionic/angular';
import { ActivatedRoute, ParamMap, Router,NavigationExtras} from '@angular/router'
import { ProgramService } from './../../services/program.service'
import { Config } from './../../config/config'
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import{VerifyUserInfoComponent} from "../../modalContent/verify-user-info/verify-user-info.component";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ChatService } from 'src/app/services/chat.service';
import { HttpClient} from '@angular/common/http';
import { ChatRoomsComponent } from './../../chats/chat-rooms/chat-rooms.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NutritionService } from './../../services/nutrition.service';
import { NutritionModalComponent } from 'src/app/user-profile/nutrition-modal/nutrition-modal.component';
import { ViewVideoDetailComponent } from 'src/app/add-program/view-video-detail/view-video-detail.component';
/* To try the app with Enablex hosted service you need to set the kTry = true */
var kTry      = true;
/*Your webservice host URL, Keet the defined host when kTry = true */
var kBasedURL = "https://demo.enablex.io/";
/*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/

/*Use enablec portal to create your app and get these following credentials*/
var kAppId    = "601a75829370a5441339e5c2";
var kAppkey   = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.page.html',
  styleUrls: ['../../app.component.scss', './program-details.page.scss'],
})
export class ProgramDetailsPage implements OnInit {
  userName: string = '';
  roomID : string = "";
  enxData : any;
  userData : any;
  programType : any;
  programDurations : any;
  programDescription : any;
  participants : any;
  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
  };
  broadcastId: any;
  programId: any;
  programDetail: any;
  programImage :any;
  programTitle:any;
  requestSent: any;
  userList: any;
  profileUrl = Config.profilePic;
  url = Config.imgUrl;
  vidUrl = Config.progVidUrl;
  program_fee:any;
  programDateTime : any;
  programFee:any;
  progImage: any = false;
  firstImg: any;
  progVideo: any = false;
  defaultPostImage : any = './../../../assets/images/loading.jpg';
    ANDROID_PERMISSIONS = [
    this.androidPermissions.PERMISSION.CAMERA,
    this.androidPermissions.PERMISSION.RECORD_AUDIO,
    this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS
];
  constructor(public commonService: CommonService,
    public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private programService: ProgramService,
    private androidPermissions: AndroidPermissions,
    public platform: Platform,
    public router : Router,
    public httpClient : HttpClient,
    private chatService : ChatService,
    private modalCtrl: ModalController,
    public socialSharing: SocialSharing,
    private nutritionService: NutritionService,
    ) {

  }
  tmp: any;
  adData:any;
  loginUserData:any;
  trilloverify : any = true;
  countDown: Observable<number>;
  hh: any;
  mm:any;
  ss: any;
  dd:any;
  days: any;
  tick = 1000;
  allProgram: any;
  nutritionList: any;
  ngOnInit() {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.programId = params.get('programId');
    });
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.userName = this.userData.user_name;
    

    this.programService.getProgramById({ 'parentId': this.programId }).subscribe(data => {
      console.log(data);
      console.log(data.cloneList);
      this.allProgram = data.cloneList;
      this.allProgram.filter(el => {
        el.convertedTime = new Date(el.program_date + 'Z');
        el.nutrition_array = [];
        el.videoId_array = [];
        el.videoProg_array = [];
        if (el.nutrition_id) {
          el.nutrition_array = el.nutrition_id.split(',');
          console.log("el.nutrition_array:"+el.nutrition_array);
        }
        if (el.video_id) {
          el.videoId_array = el.video_id.split(',');
          console.log("el.video_id:"+el.videoId_array);
        }
        if (el.video_program) {
          el.videoProg_array = el.video_program.split(',');
          console.log("el.video_id:"+el.videoProg_array);
        }
        return el;
      })

      let nutriArr = []
      data.cloneList.forEach(el => {
        if (el.nutrition_id != null) {
          nutriArr.push(el.nutrition_id);
        }

      });
      this.nutritionService.getNutritionById({ 'nutriId': nutriArr.toLocaleString() }).subscribe(ndata => {
       
        this.nutritionList = ndata.nutritionList;
        
        this.nutritionList.forEach(el => {
         console.log(el.image_path);
         console.log(el.image_path.split(','));
         var imgArr = el.image_path.split(',');
        //  console.log(this.nutritionList[el]);
         el.fImage = imgArr[0];
        });
        console.log(this.nutritionList);
        this.commonService.dismissLoader();
      },
      err=>{
        this.commonService.dismissLoader();
      this.commonService.presentToast("Couldnt load data, Something went wrong.")
      });
    },err=>{
      this.commonService.dismissLoader();
      this.commonService.presentToast("Couldnt load data, Something went wrong.")
    }
    );
  }
  initRoom(){
    if(this.userName.length == 0){
      alert ("Kindly Enter Your name");
      return;
    }
    var hedare = (kTry) ? { "x-app-id" : kAppId , "x-app-key" : kAppkey, "Accept" : "application/json","Content-Type" :"application/json"} : {"Accept" : "application/json","Content-Type" :"application/json"};
     let url = kBasedURL+"createRoom";
     console.log("Url Faired" + url);
     this.httpClient.post(url,{}, {headers: hedare}
    ).subscribe(data =>{
       let room = data["room"];
        let room_ID = room["room_id"];
        this.roomID = room_ID;
     }, error => {
       console.log("Enablex service failed");
       console.log(error);
     });
  }
  nutritionModal(data) {
    console.log(data);
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }
  async showVideoDetails(item){
    this.commonService.presentModal(ViewVideoDetailComponent, 'fullModal', { 'details': item });
  }
  joinRoom(){
    if(this.roomID.length == 0){
      alert ("Kindly Enter Room ID");
      return;
    }
    alert(this.roomID);
    console.log(this.roomID, 'room id');
    var loginString = {"name": this.userName, "role": "moderator", "user_ref": "2236", "roomId": this.roomID };
    var hedare = (kTry) ? { "x-app-id" : kAppId , "x-app-key" : kAppkey, "Accept" : "application/json","Content-Type" :"application/json"} : {"Accept" : "application/json","Content-Type" :"application/json"};
     let url = kBasedURL+"createToken";
     console.log("Url Faired" + url);
     this.httpClient.post(url,loginString, {headers: hedare}
    ).subscribe(data =>{
      console.log("Hello service done" + data["token"]);
       let navigationExtras: NavigationExtras = {
        queryParams: {
          token: data["token"],
          name : this.userName,
          role : "moderator",
          user_ref : "user_ref",
          roomId : this.roomID,
          description : this.programDescription,
          programId : this.programId,
          programTitle : this.programTitle,
          participants : this.participants,
          duration : this.programDurations,
          program_type : this.programType,
          program_fee: this.programFee,
          program_img: this.programImage
        }
    };
    this.enxData = {
      token: data["token"],
      name : this.userName,
      role : "moderator",
      user_ref : "user_ref",
      room_id : this.roomID,
      program_id : this.programId,
      is_active : 1,
      user_id : this.userData.id,
      description : this.programDescription,
      participants : this.participants,
      duration : this.programDurations,
    };
      this.programService.setEnxData(this.enxData).subscribe(data =>{ 
        console.log("EnxData: "+JSON.stringify(data));
    });    
    
    this.navCtrl.navigateForward(['confrence'],navigationExtras);
     }, error => {
       console.log("Hello service failed");
       console.log(error);
     });
    console.log("ClickEvent Join event");
  }
  ionViewWillEnter() {
    console.log('ionviewwillenter');
    
    this.commonService.presentLoader();
    this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
      console.log(data);
      this.programDetail = data.programData;
      console.log("PG: "+this.programDetail);
      console.log("PG: "+JSON.stringify(this.programDetail));
      console.log(data.programData.image_path[0] + 'ddddddd') ;
      this.firstImg = '';
      if(data.programData.image_path != ''){
        this.firstImg = data.programData.image_path[0]; 
        // this.progImage = data.programData.image_path;
        this.progImage = true;
      }else{
        this.progImage = false;
      }
      if(data.programData.video_path != null ){
        // this.progImage = data.programData.image_path;
        console.log('nooooooo');
        this.progVideo = true;
      }else{
        this.progVideo = false;
      }
      console.log(data.programData.video_path + 'progImage')
      console.log(this.progVideo + 'iddddd');
      //https://ionicinto.wdipl.com/storage/app/public/prog_upload_videos
      //https://ionicinto.wdipl.com/storage/app/public/prog_upload_videos/prog_upload_videosprog20210810114016_final.mp4
      console.log(this.programDetail.video_path + 'video_path');
      this.programTitle = data.programData.title;
      this.requestSent = data.programData.request_sent; 
      if(this.programDetail.payment_type == 'Paid'){
        this.programFee = this.programDetail.program_fee;
      }else if(this.programDetail.payment_type == 'Free'){
        this.programFee = this.programDetail.payment_type;
      }
      //1 = private , 2 = closed , 3 = public
      this.programType = data.programData.type_id;
      if(this.programType == 'private oneway' || this.programType == 'private twoway'){
        this.participants = 2;
      }else if(this.programType == 'group oneway' || this.programType == 'group twoway'){
        this.participants = 50;
      }else{
        this.participants = 100;
      }
      this.programDurations = data.programData.program_duration;
      this.programDescription = data.programData.description;
      
      // this.programDetail.live = true;
      this.initRoom();
      
      this.programDetail.img_array =data.programData.image_path.split(','); 
      this.programImage = this.programDetail.img_array[0];
      //  ------------ C O U N T   D O W N   T I M E R ---------
      let a: any = new Date(this.programDetail.program_date + 'Z');
      this.programDateTime = a;
      let b: any = new Date();
      let c: any;
      if (a > b) {
          c = Math.abs(a - b) / 1000;
          this.programDetail.cd = c;
          console.log(this.programDetail.cd);
          this.days = Math.abs((c - b) / (1000 * 60 * 60 * 24));
          this.dd = timer(0, 1000).pipe(take(this.programDetail.cd), map(() => {
            if (this.programDetail.cd > 0) {
              --this.programDetail.cd ;
            }
           
            return ~~(this.programDetail.cd / (60 * 60 * 24));
            
          })
          );
          console.log(this.dd);
          this.ss = timer(0, 1000).pipe(take(this.programDetail.cd), map(() => {
            if (this.programDetail.cd > 0) {
              --this.programDetail.cd;
            }
            return ~~(this.programDetail.cd % 3600 % 60);
          })
        );
        this.mm = timer(0, 1000).pipe( take(this.programDetail.cd),
          map(() => {
            // if (this.programDetail.cd > 0) {
            //  // --this.programDetail.cd;
            // }
            return ~~(this.programDetail.cd % 3600 / 60);
          })
        );
        this.hh = timer(0, 1000).pipe(
          take(this.programDetail.cd),
          map(() => {

            if(this.programDetail.cd <=5)
            {
              this.programDetail.live =true;
              this.initRoom();
            }
            if (this.programDetail.cd > 0) {
            
              //--this.programDetail.cd;
            } else {
              this.programDetail.cd = 0
              return 0;
            }
            return ~~(this.programDetail.cd / (60 * 60) % 24);
          })
        );
        console.log(this.hh);
      } else {
        c = 0;
        if(new Date(this.programDetail.program_end_time + 'Z') > new Date() )
        {
          this.programDetail.live = true;
          this.initRoom();
          console.log('program Live');
        }else{
          this.programDetail.ended = true;
          console.log('program end');
        }
        
      }
      // console.log(this.programDetail.live + 'psss');
    console.log(this.programDetail.cd + 'ssss');
      //----------------------------------------
      this.broadcastId = 'programId_' + data.programData.id;
      let payload ='';
      if(this.programDetail.is_requested)
      {
        payload =this.programDetail.request_recive
      }else{
        payload =this.programDetail.request_sent+',' + this.programDetail.request_accepted
      }
      this.commonService.getUsersById({ "userId": payload  }).subscribe(data => {
        this.userList = data.userList;
        console.log(this.userList + 'this.userList');
        console.log(payload + 'payload');
      });

      //--------------------------------------
      let advtProgId
      if(this.programDetail.parent_program)
      {
        advtProgId = this.programDetail.parent_program;
      }else{
        advtProgId = this.programDetail.id;
      }
      this.programService.getAdDetail({'programId':this.programId}).subscribe(data=>{
        this.adData =data.data;
        console.log(this.adData);
        console.log(this.hh);
        this.commonService.dismissLoader();
      },
      err=>{
          this.commonService.dismissLoader();
      });
    }, 
    err=>{
      this.commonService.dismissLoader();
      this.commonService.presentToast("Couldnt load data, Something went wrong.");
    });


  }
  showSchedule(event) {
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': event,'user_type': this.userData.user_type});
  }
  showParticipants() {
    this.commonService.presentModal(ParticipantsComponent, 'fullModal', { 'userList': this.userList, 'programDetails': this.programDetail });
  }
  disclass(){
    this.commonService.presentToast("Program is not live yet.")
  }
  async equipments() {
    // this.commonService.presentModal(EquipmentsComponent, 'halfModal', { 'programDetail': this.programDetail  });
    const modal = await this.modalCtrl.create({
      component: EquipmentsComponent,
      cssClass: 'halfModal',
      componentProps: { "programDetail": this.programDetail }
    });
    modal.onDidDismiss().then((d: any) => {
      this.programDetail.equipments = d.data;
      console.log(d);
      console.log(this.programDetail.equipments);
    });
    return await modal.present();
  }

  
  showChatUsers() {
    if(this.programType != "public"){         
      this.commonService.presentLoader();      
      this.chatService.checkChatProgram({'programId':this.programId,'type':3}).subscribe((data: any) => {       
        if(data.id > 0){       
          this.commonService.dismissLoader(); 
          var chatRoom = data.room_id;    
          var chatReceiverId = data.group_id; 
          var chatType = 2;    
          var fileData = {
            chatType : chatType,
            room : chatRoom,
            receiverId : parseInt(chatReceiverId)
            }
          this.commonService.presentModal(ChatRoomsComponent,'fullModal',fileData);
        }else{
          this.commonService.dismissLoader();
          // chat_type = 1:consultant,2:user,3:program
          this.router.navigate(["/first-message/"+ this.programId + "/3"]);
        }      
      },
      err=> {
        this.commonService.presentToast("Couldnt load data, Something went wrong.");
        this.commonService.dismissLoader();      
      });
    }else{
      this.commonService.presentToast("Chat Not Allow on Public Program");
    }
  }
  goBack() {
    // this.navCtrl.back();
    this.router.navigate(['/schedule-program']);
  }

  applyAdvertise()
  {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
    
    let title ="Advertise Rule";
    let msg ="<p>1. Your Video will send for verification.</p>"
            +"<p class='mb-0'>2. Once approved Video Program will be locked</p>";
    let btn=  [
      {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.sendrequest();
        }
      }
    ];
    
      if(this.loginUserData.trilloMatch != 1){
        this.verifyUser();
      }else{
        this.commonService.presentAlert(title,msg,btn,'custom-alert advertiseAlert'); 
      }
  }
  
  ngOnDestroy() {

  }
  verifyUser(){
    this.commonService.presentModal(VerifyUserInfoComponent, 'fullpage', '');
  }
  sendrequest()
  {
    if(this.programDetail.type_id == 'video')
    {
      // console.log('programId:'+this.programDetail.id);
      this.programService.advertiseRequest({'programId':this.programDetail.id}).subscribe(data=>{
        this.adData = data.status;
      } );
    }else{
      this.commonService.presentToast('Only Video Program are eligible');
    }
    
  }
  showSponsersList(){
    this.commonService.presentModal(AdDetailsComponent,'fullModal',{'adDetails':this.adData});
  }
  broadcast(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/broadcast'], navigationExtras);
      // this.checkAndroidPermissions();
  }  
  shareItem() {
    
    this.socialSharing.share("Program Details","","","program-view/" + this.programDetail.id)
    .then(() => {

    })
    .catch(() => {

    });
  }
}
