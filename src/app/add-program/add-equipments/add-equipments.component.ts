import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavParams } from '@ionic/angular'
import { NutritionService } from './../../services/nutrition.service' 
import { Config } from '../../config/config';

@Component({
  selector: 'app-add-equipments',
  templateUrl: './add-equipments.component.html',
  styleUrls: ['../../app.component.scss', './add-equipments.component.scss'],
})
export class AddEquipmentsComponent implements OnInit {

  url: any = Config.imgUrl;
  equipments = [{
    id: 1, name: 'Dumbels', selected: false,
  },
  {
    id: 2, name: 'Rope', selected: false,
  },
  {
    id: 3, name: 'Leg Exerciser', selected: false,
  },
  {
    id: 4, name: 'Treadmill', selected: false,
  },
  {
    id: 5, name: 'Ellipticals', selected: false,
  },
  {
    id: 6, name: 'Abdominal Crunchers', selected: false,
  },
  {
    id: 7, name: 'Aerobic steppers', selected: false,
  },
  {
    id: 8, name: 'Rowing Machines', selected: false,
  },
  ];
  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 5
  }
  programId: any;
  modelOpen: any;
  nutritionList: any;

  constructor(public commonService: CommonService, private navParams: NavParams,
    private nutritionService: NutritionService) {
    this.programId = this.navParams.data.programData;
    this.modelOpen = this.navParams.data.modelOpen;
    if(this.modelOpen == 2 )
    {
      this.commonService.presentLoader();
      this.nutritionService.getNutritionByUser('').subscribe((data) => {
        this.commonService.dismissLoader();
        console.log("nutritionList:"+JSON.stringify(this.nutritionList));
        this.nutritionList = data.nutritionList.filter(el => { 
          console.log('BNL:'+JSON.stringify(this.programId));
          if (this.programId) {
            if ((this.programId).includes(el.id )) {
              el.sele = true;
            } else {
              el.sele = false;
            }
          }
          if (el.image_path) {
            el.img_array = el.image_path.split(',');
          }
          return el
        });
      }, err => {
        this.commonService.dismissLoader();
        this.commonService.presentToast('something went wrong.'); 
      });
    }else{
      this.equipments.filter(el => {
        if (this.programId) {
          if ((this.programId).includes(el.id )) {
            el.selected = true;
          } else {
            el.selected = false;
          }
          return el
        }
      })
    }
    
  }

  ngOnInit() { }
  closeModal(data) {
    this.commonService.dismissModal(data);
  }

  submit() {
    this.commonService.presentLoader();
    let data = [];
    if (this.modelOpen == 1) {
      this.equipments.forEach(el => {
        if (el.selected == true) {
          data[el.id] = el.id
        }
      });

      this.commonService.dismissLoader();
      this.closeModal(data);
      // this.programService.updateEquipment({ 'equipment': data, 'programId': this.programId.id }).subscribe((d) => {
      //   this.commonService.dismissModal(this.equipments)
      //   this.commonService.dismissLoader()
      // });
    } else if (this.modelOpen == 2) {
      if (!data) {
        this.commonService.dismissModal(this.nutritionList)
        this.commonService.dismissLoader()
        return;
      }
      this.nutritionList.forEach((el, i) => {

        if (el.sele == true) {
          data.push(el.id);
        }
        return el;
      });
      this.commonService.dismissLoader();
      this.closeModal(data);
      // this.programService.updateNutrition({ 'nutrition': data, 'programId': this.programId.id }).subscribe((d) => {
      //   this.commonService.dismissModal(this.nutritionList)
      //   this.commonService.dismissLoader()
      // });
    }

  }


}
