import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Config } from './../../config/config'
import { NavParams,IonSlides,AlertController, } from '@ionic/angular';
import { NutritionService } from '../../services/nutrition.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nutrition-detail-modal',
  templateUrl: './nutrition-detail-modal.component.html',
  styleUrls: ['../../app.component.scss', './nutrition-detail-modal.component.scss'],
})
export class NutritionDetailModalComponent implements OnInit {
  @ViewChild('mySlider', { static: true }) slides: IonSlides;
 
  public items: any = [];
  // public sliderOpts: any = [];
  totalMinerals = new Array;
  nutriDetails: any;  
  url: any = Config.imgUrl;
  sliderOpts = {
    initialSlide: 1,
    speed: 400,
    zoom: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0
  };
  constructor(public commonService: CommonService,
    public navParams: NavParams,
    private nutritionService: NutritionService,
    private router:Router,
    public alertController: AlertController,
    ) {
    this.items = [
      { expanded: false, },
         ];
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  ionViewWillLeave(){
    this.slides.stopAutoplay();

    }
    //
    ionViewDidEnter() {
    // this.slides.startAutoplay();
    this.sliderOpts = {
      initialSlide: 1,
      speed: 400,
      zoom: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0
    };
    }
  ngOnInit() {
    this.nutriDetails = this.navParams.data.details
    console.log(this.nutriDetails);
    

    if (this.nutriDetails.image_path) { 
      this.nutriDetails.img_array = this.nutriDetails.image_path.split(','); 
    }
    if (this.nutriDetails.ingredients) {
      this.nutriDetails.ingredient_array = this.nutriDetails.ingredients.split(',').filter(Boolean);
    }
    if (this.nutriDetails.instruction) { 
      this.nutriDetails.instruction_array = this.nutriDetails.instruction.split(',').filter(Boolean);
     }
     if (this.nutriDetails.instruction) { 
      this.nutriDetails.preparation_time = this.nutriDetails.preparation_time.split(':').filter(Boolean);
     } 
     this.totalMinerals['cal'] = this.nutriDetails.total_calorie;
     this.totalMinerals['carbo'] = this.nutriDetails.total_carbohydrate;
     this.totalMinerals['prot'] = this.nutriDetails.total_protein;
     this.totalMinerals['fat'] = this.nutriDetails.total_fat;
     this.totalMinerals['sug'] = this.nutriDetails.total_sugar;
     this.totalMinerals['chol'] = this.nutriDetails.total_cholestrol;

    
  }
  slidePrev(slides) {
    this.slides.slidePrev();
  }
  slideNext(slides) {
    this.slides.slideNext();
  }
  closeModal() {
    this.commonService.dismissModal();
  }
  // deleteNutridtion(id){
  //   this.commonService.presentLoader();
  //   this.nutritionService.deleteNutrition({'id':id}).subscribe((data: any) => {
  //     this.commonService.dismissLoader();
  //     this.router.navigate(['/nutrition-list']);
  //   });
  // }
  async deleteNutrition(id){
    const alert = await this.alertController.create({
      header: 'Are you sure you want delete this nutrition?',
      // message: 'Once deleted, you will not be able to recover your account !!!',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {            
          this.commonService.presentLoader();
          this.nutritionService.deleteNutrition({'id':id}).subscribe((data: any) => {
            
            if(data){
              this.commonService.dismissModal();
              // this.router.navigateByUrl('/nutrition-list');
              this.router.navigate(['../nutrition-list']);
              
              this.commonService.dismissLoader();
            }
          });

          }
        }
      ]
    });

    await alert.present();
  }
  expandItem(item): void {

    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
