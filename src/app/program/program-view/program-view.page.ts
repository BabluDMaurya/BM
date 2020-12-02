import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';
import { EquipmentsComponent } from '../equipments/equipments.component';
import { ChatUserComponent } from '../chat-user/chat-user.component';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ProgramService } from './../../services/program.service'
import { Config } from './../../config/config';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs/';
import { timer } from 'rxjs/internal/observable/timer';
import { take, map } from 'rxjs/operators';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
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
  tmp: any;
  adData: any;
  countDown: Observable<number>;
  hh: Observable<number>;
  mm: Observable<number>;
  ss: Observable<number>;
  tick = 1000;
  sub: any;
  constructor(public commonService: CommonService,
    public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private programService: ProgramService,
    private localNotifications:LocalNotifications,
    private router: Router) {

    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit() {

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.programId = params.get('programId');
    });
 
  }
  ionViewWillEnter() {
    this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
      this.programDetail = data.programData;
      this.broadcastId = 'programId_' + data.programData.id;
      if(data.programData.image_path)
      {
        this.programDetail.img_array =data.programData.image_path.split(','); 
      }  
      //  ------------ C O U N T   D O W N   T I M E R ---------
      let a: any = new Date(this.programDetail.program_date + 'Z');
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
              console.log('sdf');
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
          console.log('sdfsd');
          this.request_accs = true;
        }
      } else if (this.programDetail.request_sent != null) {
        if ((this.programDetail.request_sent.split(',')).includes(this.userData.id.toString())) {
          console.log('sdfsd');
          this.request_accs_pending = true;
        }
      }
      if (this.programDetail.request_recive != null) {

        if ((this.programDetail.request_recive.split(',')).includes(this.userData.id.toString())) {
          console.log('sdfsd');
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
    console.log(this.request_accs);
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': event });
  }

  equipments() {
    this.commonService.presentModal(EquipmentsComponent, 'halfModal', { 'programDetail': this.programDetail });
  }
  showChatUsers() {
    this.commonService.presentModal(ChatUserComponent, 'fullModal', '');
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
