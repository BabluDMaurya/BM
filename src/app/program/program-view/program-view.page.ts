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

import { HttpClient} from '@angular/common/http';

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
  programId: any;
  programDetail: any;
  broadcastId: any;
  request_accs_pending: any;
  request_accs: any;
  request_join: any;
  profileUrl = Config.profilePic;
  url = Config.imgUrl;
  programDateTime : any;
  tmp: any;
  adData: any;
  countDown: Observable<number>;
  hh: Observable<number>;
  mm: Observable<number>;
  ss: Observable<number>;
  tick = 1000;
  sub: any;

  //
  programType : any;
  programDurations : any;
  programDescription : any;
  participants : any;
  //

  userName: string = "Bablu";
  roomID : string = "";
  enxData : any;


  constructor(public commonService: CommonService,
    public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private programService: ProgramService,
    private localNotifications:LocalNotifications,
    public httpClient : HttpClient,
    private router: Router) {

    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit() {

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.programId = params.get('programId');
    });
    this.userData = JSON.parse(localStorage.getItem('userData'));

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
          participants : this.participants,
          duration : this.programDurations,
          program_type : this.programType,
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
      this.broadcastId = 'programId_' + data.programData.id;
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
      
      if(data.programData.image_path)
      {
        this.programDetail.img_array =data.programData.image_path.split(','); 
      }  
      //  ------------ C O U N T   D O W N   T I M E R ---------
      let a: any = new Date(this.programDetail.program_date + 'Z');
      this.programDateTime = a;
      let b: any = new Date();
      let c: any;
      if (a > b) {
        c = Math.abs(a - b) / 1000;
        this.programDetail.cd = c;

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
              this.checkStreaming();
            }
            if (this.programDetail.cd > 0) {
              --this.programDetail.cd;
            } else {
              this.programDetail.cd = 0
              return 0;
            }
            return ~~(this.programDetail.cd / (60 * 60));
          })
        );
      } else {
        c = 0;
        if (new Date(this.programDetail.program_end_time + 'Z') > new Date()) {
          this.programDetail.ready = true;
          this.checkStreaming();
        } else {
          this.programDetail.ended = true;
        }

      }
      //-------------------------------------------------

      if (this.programDetail.request_accepted != null) {

        if ((this.programDetail.request_accepted.split(',')).includes(this.userData.id.toString())) {
          this.request_accs = true;
        }
      } else if (this.programDetail.request_sent != null) {
        if ((this.programDetail.request_sent.split(',')).includes(this.userData.id.toString())) {
          this.request_accs_pending = true;
        }
      }
      if (this.programDetail.request_recive != null) {

        if ((this.programDetail.request_recive.split(',')).includes(this.userData.id.toString())) {
          this.request_join = true;
        }
      }
    });
  }


  checkStreaming() {
    this.sub = interval(5000)
      .subscribe((val) => {
        this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
          if (data.programData.is_live) {
            this.programDetail.live = true;
          }
        });
      });
  }
  showSchedule(event) {    
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': event });
  }

  equipments() {
    this.commonService.presentModal(EquipmentsComponent, 'halfModal', { 'programDetail': this.programDetail });
  }
  showChatUsers() {
    if(this.programType != "public"){
      this.router.navigate(["/chat-consultant/"+this.programId+"/3"]); 
    }else{
      this.commonService.presentToast("Chat Not Allow on Public Program");
    }
  }
  goBack() {
    this.navCtrl.back();
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

}
