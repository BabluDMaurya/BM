import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';
import { EquipmentsComponent } from '../equipments/equipments.component';
import { ChatUserComponent } from '../chat-user/chat-user.component';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, ParamMap,NavigationExtras } from '@angular/router'
import { ProgramService } from './../../services/program.service'
import { Config } from './../../config/config';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs/';
import { timer } from 'rxjs/internal/observable/timer';
import { take, map } from 'rxjs/operators';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ChatService } from 'src/app/services/chat.service';
import { HttpClient} from '@angular/common/http';
import { ChatRoomsComponent } from './../../chats/chat-rooms/chat-rooms.component';
import { PaymentComponent } from 'src/app/modalContent/payment/payment.component';
import { exit } from 'process';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

/* To try the app with Enablex hosted service you need to set the kTry = true */
var kTry      = true;
/*Your webservice host URL, Keet the defined host when kTry = true */
var kBasedURL = "https://demo.enablex.io/";
/*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/

/*Use enablec portal to create your app and get these following credentials*/
var kAppId    = "601a75829370a5441339e5c2";
var kAppkey   = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.page.html',
  styleUrls: ['../../app.component.scss', './program-view.page.scss'],
})
export class ProgramViewPage implements OnInit {
  userData: any;
  paymentPending: any;
  programId: any;
  programDetail: any;
  broadcastId: any;
  request_accs_pending: any;
  request_accs: any;
  request_join: any;
  profileUrl = Config.profilePic;
  url = Config.imgUrl;
  vidUrl = Config.progVidUrl;
  programDateTime : any;
  programFee:any;
  intoActivePaid: any;
  totalMin: any;
  min: any;
  tmp: any;
  adData: any;
  displayProgData: boolean = false;
  countDown: Observable<number>;
  hh: Observable<number>;
  mm: Observable<number>;
  ss: Observable<number>;
  dd: Observable<number>;
  tick = 1000;
  sub: any;
  prePayment : boolean = true;
  //
  programType : any;
  programDurations : any;
  programDescription : any;
  participants : any;
  pgtitle: any;
  //

  userName: string = "Bablu";
  roomID : string = "";
  enxData : any;
  defaultPostImage : any = './../../../assets/images/loading.jpg';
  programImage : any;
  progImage: any = false;
  progVideo: any = false;
  minute: any;
  totalIntoFee: any;
  Mins: any;
  mms: any;
  intoProg:any = [];
  constructor(public commonService: CommonService,
    public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private programService: ProgramService,
    private localNotifications:LocalNotifications,
    public httpClient : HttpClient,
    private router: Router,
    private chatService : ChatService,
    public socialSharing: SocialSharing) {

    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit() {

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.programId = params.get('programId');
    });

    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.totalIntoFee = 0;
    this.min = 0;
    this.totalMin = 0;
    this.Mins = 0;
    this.programService.getIntoActivePendingPaymentStatus('').subscribe(data =>{ 
      this.intoActivePaid = data.data;
      // console.log(this.intoActivePaid);
      this.intoActivePaid.forEach(el => {
        
        
          if(el.type_id == 3){
            this.minute = ((el.time / 60) * 0.008);
            this.mms    = (el.time / 60);
          }else if(el.type_id == 4){
            this.minute = ((el.time / 60) * 0.0075);
            this.mms    = (el.time / 60);
          }
          this.totalIntoFee = parseFloat( this.minute)+parseFloat(this.min);
          this.totalMin     = parseFloat(this.mms)+parseFloat(this.Mins);
          this.min          = this.totalIntoFee;
          this.Mins         = this.totalMin;
          this.intoProg.push(el.prog_id);
          var img = '';
                if(el.image_path != ''){
                   var image = el.image_path.split(',');
                   img = image[0];
                }
          if(this.Mins > 140){
            console.log(this.intoProg);
            var fileData = {
              pgid : this.intoProg,
              pgname : el.title,
              pgamount : this.totalIntoFee,
              pgimg : img,
              routeLink: 'progView',
              type: '1'
              
              } 
            this.commonService.presentModal(PaymentComponent, 'bottomModal', fileData);
            exit();
            return false;
          }
          // console.log(this.Mins);
          // console.log(this.totalIntoFee);
       
      });
      // console.log(this.totalIntoFee);
      // console.log(this.Mins);
      
      console.log(this.Mins);
      console.log('getIntoActivePendingPaymentStatus');
    })
    
    this.programService.getPaymentStatus().subscribe(data =>{ 
      this.paymentPending = data;
      if(this.paymentPending.data.length > 0){
        console.log(this.paymentPending);
        var i = 0;
        this.paymentPending.data.forEach(el => {
            this.programService.getPendingPaymentStatus({'program_id':el.id}).subscribe(data =>{ 
             if(i == 0){
              if(data.data == 0){
                this.prePayment = false;
                var img = '';
                if(el.image_path != ''){
                   var image = el.image_path.split(',');
                   img = image[0];
                } 
                var fileData = {
                  pgid : el.id,
                  pgname : el.title,
                  pgamount : el.program_fee,
                  pgimg : img,
                  routeLink: 'progView',
                  type: '2'
                  } 
                this.commonService.presentModal(PaymentComponent, 'bottomModal', fileData);
                // this.pendingPayment();
                i++;
              }
            }
            });
         
        });
     
      }
    });
    
    this.programService.getEnxData({'program_id':this.programId}).subscribe(data =>{ 
      console.log("EnxData User: "+JSON.stringify(data));
      this.userName = this.userData.user_name;
      this.roomID = data.room_id;
    });
  }

  joinRoom(){
    if(this.roomID.length == 0){
      alert ("Kindly Enter Room ID");
      return;
    }
    // alert(this.roomID);
    this.programService.getEnxData({'program_id':this.programId}).subscribe(data =>{ 
      console.log("EnxData User: "+JSON.stringify(data));
      this.userName = this.userData.user_name;
      this.roomID = data.room_id;
    });
    var loginString = {"name": this.userName, "role": "participant", "user_ref": "2236", "roomId": this.roomID };
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
          role : "participant",
          user_ref : "user_ref",
          roomId : this.roomID,
          description : this.programDescription,
          programId : this.programId,
          programTitle : this.pgtitle,
          participants : this.participants,
          duration : this.programDurations,
          program_type : this.programType,
          program_fee: this.programFee,
          program_img: this.programImage
        }
    };
    this.navCtrl.navigateForward(['confrence'],navigationExtras);
     }, error => {
       console.log("Hello service failed");
       console.log(error);
     });
    console.log("ClickEvent Join event");
  }
  ionViewWillEnter() {
    this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
      this.programDetail = data.programData;
      console.log('starttttttt');
      console.log(this.programDetail);
      console.log(this.programDetail.is_requested);
      console.log(this.request_join);  
      console.log(this.prePayment); 
      console.log('enddddddddd');   
      this.broadcastId = 'programId_' + data.programData.id;
      this.programType = data.programData.type_id;
      this.pgtitle = data.programData.title;
      if(this.programDetail.payment_type == 'Paid'){
        this.programFee = this.programDetail.program_fee;
      }else if(this.programDetail.payment_type == 'Free'){
        this.programFee = this.programDetail.payment_type;
      }
      if(this.programType == 'private oneway' || this.programType == 'private twoway'){
        this.participants = 2;
      }else if(this.programType == 'group oneway' || this.programType == 'group twoway'){
        this.participants = 50;
      }else{
        this.participants = 100;
      }
      this.programDurations = data.programData.program_duration;
      this.programDescription = data.programData.description;
      if(data.programData.image_path != ''){
        // this.progImage = data.programData.image_path;
        this.progImage = true;
      }else{
        this.progImage = false;
      }
      if(data.programData.video_path != null){
        // this.progImage = data.programData.image_path;
        this.progVideo = true;
      }else{
        this.progVideo = false;
      }
      if(data.programData.image_path)
      {
        this.programDetail.img_array =data.programData.image_path.split(','); 
        this.programImage = this.programDetail.img_array[0];
      }  

      //  ------------ C O U N T   D O W N   T I M E R ---------
      let a: any = new Date(this.programDetail.program_date + 'Z');
      this.programDateTime = a;
      let b: any = new Date();
      let c: any;
      if (a > b) {
        c = Math.abs(a - b) / 1000;
        this.programDetail.cd = c;
        this.dd = timer(0, 1000).pipe(take(this.programDetail.cd), map(() => {
          if (this.programDetail.cd > 0) {
            --this.programDetail.cd ;
          }
         
          return ~~(this.programDetail.cd / (60 * 60 * 24));
          
        })
        );
        this.ss = timer(0, 1000).pipe(take(this.programDetail.cd), map(() => {
          if (this.programDetail.cd > 0) {
            --this.programDetail.cd;
          }
          return ~~(this.programDetail.cd % 3600 % 60);
        })
        );
        this.mm = timer(0, 1000).pipe(take(this.programDetail.cd),
          map(() => {
            if (this.programDetail.cd > 0) {
              --this.programDetail.cd;
            }
            return ~~(this.programDetail.cd % 3600 / 60);
          })
        );
        this.hh = timer(0, 1000).pipe(
          take(this.programDetail.cd),
          map(() => {

            if (this.programDetail.cd <= 5) {
              this.programDetail.ready = true;
              this.programDetail.live = true;
              this.displayProgData = true;
              this.checkStreaming();
              console.log(this.programDetail);
              console.log(this.programDetail.live , 'liveee');
            }
            if (this.programDetail.cd > 0) {
              --this.programDetail.cd;
            } else {
              this.programDetail.cd = 0
              return 0;
            }
            
            return ~~(this.programDetail.cd / (60 * 60) % 24);
          })
        );
      } else {
        c = 0;
        this.displayProgData = true;
        if (new Date(this.programDetail.program_end_time + 'Z') > new Date()) {
          this.programDetail.ready = true;
          this.programDetail.live = true;
          
          console.log(this.programDetail.live + 'liveeeeeee');
          this.checkStreaming();

        } else {
          console.log(this.programDetail.live + 'edddddd');
          this.programDetail.ended = true;
        }

      }
      //-------------------------------------------------

      if (this.programDetail.request_accepted != null) {

        if ((this.programDetail.request_accepted.split(',')).includes(this.userData.id.toString())) {
          this.request_accs = true;
          this.request_join = true;
        }
      } else if (this.programDetail.request_sent != null) {
        if ((this.programDetail.request_sent.split(',')).includes(this.userData.id.toString())) {
          this.request_accs_pending = true;
        }
      }
      if (this.programDetail.request_recive != null) {

        if ((this.programDetail.request_recive.split(',')).includes(this.userData.id.toString())) {
          this.request_join = true;
          console.log(this.request_join + 'this.request_joineeeeee');
        }
      }
    });
  }


  checkStreaming() {
    // this.sub = interval(5000)
    //   .subscribe((val) => {
    //     this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
    //       console.log(this.programDetail);
    //       if (data.programData.is_live) {
    //         this.displayProgData = true;
    //         this.programDetail.live = true;
    //       }
    //     });
    //   });
  }
  showSchedule(event) {    
    this.programDetail.displayData = this.displayProgData;
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': this.programDetail });
  }

  equipments() {
    
    this.commonService.presentModal(EquipmentsComponent, 'halfModal', { 'programDetail': this.programDetail });
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
  acceptRequest() {
    this.programService.acceptProgramRequest({ 'programId': this.programDetail.id }).subscribe(data => {
      
      let prog_date= new Date(this.programDetail.program_date + 'Z') ; 
      this.localNotifications.schedule({
        id: this.programId,
        text:  this.programDetail.title+" program will start at \n "+prog_date ,
        trigger: { at: new Date( prog_date.getTime() - 60*60*500)},
        data: { secret: 'secret' },
        lockscreen:true,
        vibrate:true,
        silent:false,
        foreground:true,
      });
      this.router.navigateByUrl('/tabs/consultant-profile');
    });
  }
  joinRequest() {
    this.programService.joinRequest({ 'programId': this.programDetail.id }).subscribe(data => {
      this.request_join = true;
    });
  }

  simpleNotif() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single Local Notification',
      data: { secret: 'secret' }
    });
  }

  payment(){
    var fileData = {
      pgid : this.programId,
      pgname : this.programDetail.title,
      pgamount : this.programFee,
      pgimg : this.programImage,
      } 
    this.commonService.presentModal(PaymentComponent, 'bottomModal', fileData);
  }
  shareItem() {
    
    this.socialSharing.share("Program Details","","","program-view/" + this.programId)
    .then(() => {

    })
    .catch(() => {

    });
  }

}
