import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-schedule-nutrition',
  templateUrl: './schedule-nutrition.component.html',
  styleUrls: ['../../app.component.scss','./schedule-nutrition.component.scss'],
})
export class ScheduleNutritionComponent implements OnInit {

  constructor(public commonService: CommonService) { }
  sliderOpts = {
    zoom:true,
    slidesPerView:1,
    centeredSlides:false,
    spaceBetween:0
  }
  nutritionType:string='ingredients';
  nutritionChanged(ev: any) {
    this.nutritionType=ev.detail.value;   
  }
  nutritionType2:string='ingredients';
  nutritionChanged2(ev: any) {
    this.nutritionType2=ev.detail.value;   
  }
  

  ngOnInit() {}
  closeModal(){
    this.commonService.dismissModal();
  }
}
