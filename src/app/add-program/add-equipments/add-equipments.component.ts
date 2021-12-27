import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavParams,ModalController } from '@ionic/angular'
import { NutritionService } from './../../services/nutrition.service' ;
import { ProgramService } from './../../services/program.service';
import { Config } from '../../config/config';
import { ProgramNutritionDetailModalComponent } from '../../add-program/program-nutrition-detail-modal/program-nutrition-detail-modal.component';
@Component({
  selector: 'app-add-equipments',
  templateUrl: './add-equipments.component.html',
  styleUrls: ['../../app.component.scss', './add-equipments.component.scss'],
})
export class AddEquipmentsComponent implements OnInit {
  equipmentFiltered: [];
  nutritionFiltered: [];
  private _searchTerm: string;
  private _followingSearchTrem: string;

  //search followers
  get equipmentSearchTerm(): string  {
    return this._searchTerm;
  }
  set equipmentSearchTerm(value: string) {
    this._searchTerm = value;
    this.equipmentFiltered = this.equipmentFilter(value);
  }

  //search followings
  get nutritionSearchTerm(): string  {
    return this._followingSearchTrem;
  }
  set nutritionSearchTerm(value: string) {
    this._followingSearchTrem = value;
    this.nutritionFiltered = this.nutritionFilterUser(value);
    console.log(this.nutritionFiltered);
  }
  url: any = Config.imgUrl;
  equipments: any;
  
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
    private nutritionService: NutritionService,private modalCtrl:ModalController,private programService: ProgramService,) {
    this.programId = this.navParams.data.programData;
    this.modelOpen = this.navParams.data.modelOpen;
    this.programService.fetchEquipmentList().subscribe((data) => {
      console.log(data)
      this.equipments = data.equipmentList;
      this.equipmentFiltered = this.equipments;
    });
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
        this.nutritionFiltered = this.nutritionList;
      }, err => {
        this.commonService.dismissLoader();
        this.commonService.presentToast('something went wrong.'); 
      });
    }else{
      this.programService.fetchEquipmentList().subscribe((data) => {
        console.log(data)
        this.equipments = data.equipmentList;
        console.log(this.programId);
        console.log(this.equipments);

        data.equipmentList.filter(el => {
        if (this.programId) {
          if ((this.programId).includes(el.id )) {
            el.selected = true;
          } else {
            el.selected = false;
          }
          return el
        }
      })
    });
    }
    
  }

  ngOnInit() { }

  equipmentFilter(searchString: string) {
    return this.equipments.filter(employee =>
      employee.equipment_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  nutritionFilterUser(searchString: string) {
    console.log(this.nutritionFiltered);
    return this.nutritionList.filter(employee =>
      employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

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
  async showdetails(item){

    const modal = await this.modalCtrl.create({
     component: ProgramNutritionDetailModalComponent,
     cssClass: 'fullModal',
     componentProps: { 'details':item}

   });
   return await modal.present();
}

}
