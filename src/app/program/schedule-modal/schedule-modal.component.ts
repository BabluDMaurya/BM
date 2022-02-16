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
import { ViewVideoDetailComponent } from 'src/app/add-program/view-video-detail/view-video-detail.component';
@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['../../app.component.scss', './schedule-modal.component.scss'],
})
export class ScheduleModalComponent implements OnInit {
  sliderOpts = {
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 0
  }
  url=Config.imgUrl;
  non_live_component_fee: any = 0;
  programDetail: any;
  allProgram: any;
  scheduleTabs: string = 'programs';
  nutritionList: any;
  user_type:any;
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
    console.log(this.programDetail);
    this.user_type = this.navParams.data.user_type;
    console.log(this.user_type + 'fdf');
    console.log('fdf');
    if(this.user_type == 1){
      this.programDetail.displayData = true;
    }
    let programId
    if (this.programDetail.parent_program) {
      programId = this.programDetail.parent_program
    } else {
      programId = this.programDetail.id
    }
    this.commonService.presentLoader();
    this.programService.getProgramById({ 'parentId': programId }).subscribe(data => {
      console.log(data);
      console.log(data.cloneList[0].non_live_component_fee);
      this.non_live_component_fee = data.cloneList[0].non_live_component_fee;
      this.allProgram = data.cloneList;
      this.allProgram.filter(el => {
        el.convertedTime = new Date(el.program_date + 'Z');
        console.log(el.convertedTime);
        console.log(new Date());
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

  closeModal() {
    this.commonService.dismissModal();
  }
  disclass(){
    console.log(this.non_live_component_fee);
    if(this.non_live_component_fee > '0'){
      this.commonService.presentToast("Program is Paid.")
    }
    this.commonService.presentToast("Program is not live yet.")
  }
  async showVideoDetails(item){

  //   const modal = await this.modalCtrl.create({
  //    component: ViewVideoDetailComponent,
  //    cssClass: 'fullModal',
  //    componentProps: { 'details':item}

  //  });
  //  return await modal.present();
  this.commonService.presentModal(ViewVideoDetailComponent, 'fullModal', { 'details': item });
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
