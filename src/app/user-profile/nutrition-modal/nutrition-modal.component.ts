import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NutritionService } from './../../services/nutrition.service'
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-nutrition-modal',
  templateUrl: './nutrition-modal.component.html',
  styleUrls: ['../../app.component.scss', '../user-profile.page.scss', './nutrition-modal.component.scss'],
})
export class NutritionModalComponent implements OnInit {

  nutritionItem:any;
  constructor(public commonService: CommonService,
    public navParams: NavParams,
    private nutritionService:NutritionService ) { }
  nutritionInfo:string='breakFast';
  segmentChanged(ev: any) {
    this.nutritionInfo=ev.detail.value;   
  }
  nutritionType:string='ingredients';
  nutritionChanged(ev: any) {
    this.nutritionType=ev.detail.value;   
  }
  nutritionType2:string='ingredients';
  nutritionChanged2(ev: any) {
    this.nutritionType2=ev.detail.value;   
  }
  

  ngOnInit() {
    console.log('viurja');
    let data =this.navParams.get('data');
    console.log(data);
   this.nutritionService.getNutritionById({'nutriId': data.nutrition_id}).subscribe(data =>{
     this.nutritionItem = data.nutritionList.filter(el=>{
       if(el.ingredients)
       {
        el.ingredientsArr = el.ingredients.split(',');
       }
       if(el.instruction)
       {
        el.instructionArr = el.instruction.split(',');
       }
      
       return el ;
     });
     console.log(this.nutritionItem );
   });
  }
  closeModal(){
    this.commonService.dismissModal();
  }
}
