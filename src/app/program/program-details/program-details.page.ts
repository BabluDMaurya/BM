import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';
import { ParticipantsComponent } from '../participants/participants.component';
import { EquipmentsComponent } from '../equipments/equipments.component';
import { ChatUserComponent } from '../chat-user/chat-user.component';
import {AdDetailsComponent} from '../ad-details/ad-details.component';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ProgramService } from './../../services/program.service'
import { Config } from './../../config/config'
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.page.html',
  styleUrls: ['../../app.component.scss', './program-details.page.scss'],
})
export class ProgramDetailsPage implements OnInit {

  broadcastId: any;
  programId: any;
  programDetail: any;
  userList: any;
  profileUrl = Config.profilePic;
  url = Config.imgUrl;
  constructor(public commonService: CommonService,
    public navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private programService: ProgramService) {

  }
  tmp: any;
  adData:any;
  countDown: Observable<number>;
  hh: Observable<number>;
  mm: Observable<number>;
  ss: Observable<number>;
  tick = 1000;
  ngOnInit() {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.programId = params.get('programId');
    });

  }
  ionViewWillEnter() {
    console.log('ionviewwillenter');
    this.commonService.presentLoader();
    this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
      this.programDetail = data.programData;
      this.programDetail.img_array =data.programData.image_path.split(','); 
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
            }
            if (this.programDetail.cd > 0) {
            
              //--this.programDetail.cd;
            } else {
              this.programDetail.cd = 0
              return 0;
            }
            return ~~(this.programDetail.cd / (60 * 60));
          })
        );
      } else {
        c = 0;
        if(new Date(this.programDetail.program_end_time + 'Z') > new Date() )
        {
          this.programDetail.live = true;
        }else{
          this.programDetail.ended = true;
        }
        
      }
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
      });

      //--------------------------------------
      let advtProgId
      if(this.programDetail.parent_program)
      {
        advtProgId = this.programDetail.parent_program;
      }else{
        advtProgId = this.programDetail.id;
      }
      this.programService.getAdDetail({'programId':advtProgId}).subscribe(data=>{
        this.adData =data.data;
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
    this.commonService.presentModal(ScheduleModalComponent, 'fullModal', { 'programDetail': event });
  }
  showParticipants() {
    this.commonService.presentModal(ParticipantsComponent, 'fullModal', { 'userList': this.userList, 'programDetails': this.programDetail });
  }
  equipments() {
    this.commonService.presentModal(EquipmentsComponent, 'halfModal', { 'programDetail': this.programDetail  });
  }
  showChatUsers() {
    this.commonService.presentModal(ChatUserComponent, 'fullModal', '');
  }
  goBack() {
    this.navCtrl.back();
  }

  applyAdvertise()
  {
    let title ="Advertise Rule";
    let msg ="1.Your Video will send for verification. </br> "
            +"2.Once approved Video Program will be locked";
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
    
    this.commonService.presentAlert(title,msg,btn)
  }
  ngOnDestroy() {

  }
  sendrequest()
  {
    if(this.programDetail.type_id == 'video')
    {
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
}
