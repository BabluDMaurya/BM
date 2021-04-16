import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavController, ModalController } from '@ionic/angular';
import { AddEquipmentsComponent } from '../add-equipments/add-equipments.component';
import { UserListComponent } from '../user-list/user-list.component';
import { VideosThumbListComponent } from '../videos-thumb-list/videos-thumb-list.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProgramService } from './../../services/program.service'
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.page.html',
  styleUrls: ['../../app.component.scss', './program-details.page.scss'],
})
export class ProgramDetailsPage implements OnInit {

  programId: any;
  programData: any;
  equipments: any;
  addEquipments: any;
  addNutrition: any;
  constructor(
    public navCtrl: NavController,
    public commonService: CommonService,
    private actRoute: ActivatedRoute,
    private localNotifications: LocalNotifications,
    private modalCtrl: ModalController,
    private programService: ProgramService
  ) {

  }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.programId = params.get('programId');
      console.log(this.programId);
    });
  }
  ionViewWillEnter() {
    this.commonService.presentLoader();
    this.programService.getProgramById({ 'parentId': this.programId }).subscribe((data) => {
      console.log(data);
      this.commonService.dismissLoader();
      this.programData = data.cloneList;
      this.programData.filter(el => {

        let prog_date = new Date(el.program_date + 'Z');
        this.localNotifications.schedule({
          id: el.id,
          text:  "You have an upcoming scheduled program '"+el.title+"' at \n "+prog_date ,
          trigger: { at: new Date( prog_date.getTime() - 60*60*500)},
          data: { secret: 'secret' },
          lockscreen:true,
          vibrate:true,
          silent:false,
          foreground:true,
        });

        el.convertedTime = new Date(el.program_date + 'Z');
        if (el.nutrition_id) {
          el.nutriArray = el.nutrition_id.split(',');
        }
        if (el.equipments) {
          el.equipArray = el.equipments.split(',');
        }
        if (el.video_program) {
          el.videoArray = el.video_program.split(',');
        }
        return el;
      })
    
    },
    err=>{
      this.commonService.dismissLoader();
    })
  }

  goBack() {
    this.navCtrl.back();
  }
  async addEquipments2(event, item) {
    const modal = await this.modalCtrl.create({
      component: AddEquipmentsComponent,
      cssClass: 'fullModal',
      componentProps: { "programData": item, "modelOpen": event }
    });

    modal.onDidDismiss().then((d: any) => { 
      if (d.data) { 
        this.ionViewWillEnter();
      } 
    }); 
    return await modal.present();
  }
  userList() {
    this.commonService.presentModal(UserListComponent, 'halfModal', null);
  }
  async addVideo(event) {

    const modal = await this.modalCtrl.create({
      component: VideosThumbListComponent,
      cssClass: 'fullModal',
      componentProps: { 'programDetail': event }
    });

    modal.onDidDismiss().then((d: any) => { 
      if (d.data) {
        console.log('asasd');
        this.ionViewWillEnter();
      }
    }); 
    return await modal.present();
  }

  detailsUpdate($event, programId) {
    console.log(programId);
    $event.detail.programId = programId;
    this.programService.updateDescription($event.detail).subscribe(data => {  });

  }
}
