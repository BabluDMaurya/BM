import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { NutritionDetailModalComponent } from './nutrition-detail-modal/nutrition-detail-modal.component'
import { NutritionService } from '../services/nutrition.service';
import {Config } from '../config/config';
import {ModalController , NavController} from '@ionic/angular';
@Component({
  selector: 'app-nutrition-list',
  templateUrl: './nutrition-list.page.html',
  styleUrls: ['./../app.component.scss','./nutrition-list.page.scss'],
})
export class NutritionListPage implements OnInit {

  sliderOpts = {
    zoom:true,
    slidesPerView:3,
    centeredSlides:false,
    spaceBetween:5
  }
  nutritionList:any;
  url:any = Config.imgUrl;
  constructor(public commonService : CommonService,
    private navCtrl: NavController,
              private nutritionService:  NutritionService, private modalCtrl:ModalController) { }

  ngOnInit() {
   
    this.nutritionService.getNutritionByUser('').subscribe((data)=>{
      
      this.nutritionList = data.nutritionList.filter(el=>{
        console.log(data.nutritionList);

        if(el.image_path)
        {
          el.img_array=el.image_path.split(',');
        }
        return el;
      });
    });
    
  }

  async showdetails(item){
 
    // this.commonService.presentModal(NutritionDetailModalComponent,'fullModal',{'details':item});
    // component: NutritionDetailModalComponent
      const modal = await this.modalCtrl.create({
       component: NutritionDetailModalComponent,
       cssClass: 'fullModal',
       componentProps: { 'details':item}

     });
     return await modal.present();
  }
  goBack() {
    this.navCtrl.back();
  }
}
