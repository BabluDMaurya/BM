import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';

import { Config } from './../../config/config'
import { NavParams,IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-program-nutrition-detail-modal',
  templateUrl: './program-nutrition-detail-modal.component.html',
  styleUrls: ['../../app.component.scss','./program-nutrition-detail-modal.component.scss'],
})
export class ProgramNutritionDetailModalComponent implements OnInit {
  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  sliderOpts = {
    initialSlide: 1,
    speed: 400,
    zoom: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0
  };
  public items: any = [];
  totalMinerals = new Array;
  nutriDetails: any;  
  url: any = Config.imgUrl;
  constructor(public commonService: CommonService,
    public navParams: NavParams) {
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
    console.log('hh');
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
