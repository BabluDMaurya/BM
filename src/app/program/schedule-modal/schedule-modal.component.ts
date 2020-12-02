import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
//import { ScheduleNutritionComponent } from '../schedule-nutrition/schedule-nutrition.component';
import {Config} from '../../config/config';
import { NavParams } from '@ionic/angular';
import { NutritionService } from './../../services/nutrition.service';
import { ProgramService } from './../../services/program.service'
import { NutritionModalComponent } from 'src/app/user-profile/nutrition-modal/nutrition-modal.component';
import {  ModalController } from '@ionic/angular';
import { AddEquipmentsComponent } from '../../add-program/add-equipments/add-equipments.component';

@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['../../app.component.scss', './schedule-modal.component.scss'],
})
export class ScheduleModalComponent implements OnInit {
  sliderOpts = {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 5
  }
  url=Config.imgUrl;
  programDetail: any;
  allProgram: any;
  scheduleTabs: string = 'nutrition';
  nutritionList: any;
  constructor(public commonService: CommonService,
    private navParams: NavParams,
    private nutritionService: NutritionService,
    private modalCtrl: ModalController,
    private programService: ProgramService) {
   
  }

  scheduleChanged(ev: any) {
    this.scheduleTabs = ev.detail.value;

  }

  ngOnInit() { 
    this.programDetail = this.navParams.data.programDetail;
    let programId
    if (this.programDetail.parent_program) {
      programId = this.programDetail.parent_program
    } else {
      programId = this.programDetail.id
    }
    this.commonService.presentLoader();
    this.programService.getProgramById({ 'parentId': programId }).subscribe(data => {
      this.allProgram = data.cloneList;
      this.allProgram.filter(el => {
        el.convertedTime = new Date(el.program_date + 'Z');
        el.nutrition_array = [];
        if (el.nutrition_id) {
          el.nutrition_array = el.nutrition_id.split(',');
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

  closeModal() {
    this.commonService.dismissModal();
  }

  nutritionModal(data) {
    console.log(data);
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }
  async addEquipments2(event, item) {
    const modal = await this.modalCtrl.create({
      component: AddEquipmentsComponent,
      cssClass: 'fullModal',
      componentProps: { "programData": item, "modelOpen": event }
    });

    modal.onDidDismiss().then((d: any) => {
      console.log(d);
      // if (event == 1) {
      //   this.addEquipments = (d.data);
      // } else {
      //   this.addNutrition = (d.data);
      // }
      if (d.data) {
        console.log('asasd');
        this.ngOnInit();
      }

    });
    return await modal.present();
  }
}
