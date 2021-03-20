import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

import { Config } from './../../config/config'
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-nutrition-detail-modal',
  templateUrl: './nutrition-detail-modal.component.html',
  styleUrls: ['../../app.component.scss', './nutrition-detail-modal.component.scss'],
})
export class NutritionDetailModalComponent implements OnInit {
  sliderOpts = {
    zoom: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0
  };
  public items: any = [];
  nutriDetails: any;  
  url: any = Config.imgUrl;
  constructor(public commonService: CommonService,
    public navParams: NavParams) {
    this.items = [
      { expanded: false, },
         ];
  }

  ngOnInit() {
    this.nutriDetails = this.navParams.data.details
   
    if (this.nutriDetails.image_path) { 
      this.nutriDetails.img_array = this.nutriDetails.image_path.split(','); 
    }
    if (this.nutriDetails.ingredients) {
      this.nutriDetails.ingredient_array = this.nutriDetails.ingredients.split(',').filter(Boolean);
    }
    if (this.nutriDetails.instruction) { 
      this.nutriDetails.instruction_array = this.nutriDetails.instruction.split(',').filter(Boolean);
     }
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
