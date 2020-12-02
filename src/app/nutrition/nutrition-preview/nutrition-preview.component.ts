import { Component, OnInit ,OnDestroy } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { NutritionService } from './../../services/nutrition.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nutrition-preview',
  templateUrl: './nutrition-preview.component.html',
  styleUrls: ['./../../app.component.scss', './nutrition-preview.component.scss'],
})
export class NutritionPreviewComponent implements OnInit, OnDestroy {
  private todo: FormGroup;
  nutritionData: any;
  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 1
  }
  images: any = [];
  public items: any = [];
  totalMinerals = new Array;
  apiIngredients: String = '';
  mineralForm: FormGroup;
  subscription:any;
  constructor(
    public commonService: CommonService,
    public nutritionService: NutritionService,
    private navCtrl: NavController,
    private router:Router,
    private fb: FormBuilder, ) {
    this.items = [
      { expanded: false }
    ];
    this.nutritionService.currentNutritionData.subscribe(data => {
      this.nutritionData = data;
      this.images = data['form'].file;
    });
    console.log(this.nutritionData);
    console.log(this.nutritionData['minerals']);
    let cal = 0;
    let carbo = 0;
    let prot = 0;
    let fat = 0;
    let sug = 0;
    let chol = 0;
    this.nutritionData.minerals.filter(value => {
      
      if(value.food_name)
      {
        this.apiIngredients += value['food_name'] + ',';
      } 
      if(value.item_name)
      { this.apiIngredients += value['item_name'] + ',';}
      
        cal = cal + value['nf_calories'];
        carbo = carbo + value['nf_total_carbohydrate'];
        prot = prot + value['nf_protein'];
        fat = fat + value['nf_total_fat'];
        sug = sug + value['nf_sugars'];
        chol = chol + value['nf_cholesterol'];
      

    });

    this.totalMinerals['cal'] = cal;
    this.totalMinerals['carbo'] = carbo;
    this.totalMinerals['prot'] = prot;
    this.totalMinerals['fat'] = fat;
    this.totalMinerals['sug'] = sug;
    this.totalMinerals['chol'] = chol;

    console.log(this.apiIngredients);

    // create reactive form field
    this.mineralForm = this.fb.group({
      nutriTitle: new FormControl(this.nutritionData.form.nutriTitle),
      nutriDescription: new FormControl(this.nutritionData.form.nutriDescription),
      nutriMealType: new FormControl(this.nutritionData.form.nutriMealType),
      nutriServeSize: new FormControl(this.nutritionData.form.nutriServeSize),
      nutriPrepHrs: new FormControl(this.nutritionData.form.nutriPrepHrs),
      nutriPrepMin: new FormControl(this.nutritionData.form.nutriPrepMin),
      nutriInstruction: new FormControl(this.nutritionData.form.nutriInstruction),
      nutriIngredients: new FormControl(this.nutritionData.form.nutriIngredients),
      nutriBevrageType: new FormControl(this.nutritionData.form.nutriBevrageType),
      bevragveQnty: new FormControl(this.nutritionData.form.bevragveQnty),
      bevragveOption: new FormControl(this.nutritionData.form.bevragveOption),
      bevragveUnit: new FormControl(this.nutritionData.form.bevragveUnit),
      unitQnty:new FormControl(this.nutritionData.form.unitQnty),
      bevragveInclude: new FormControl(this.nutritionData.form.bevragveinclude),
      file:new FormControl(this.nutritionData.form.file),
      apiData: new FormControl(this.apiIngredients),

      totalCal: new FormControl(cal),
      totalCarbo: new FormControl(carbo),
      totalProt: new FormControl(prot),
      totalFat: new FormControl(fat),
      totalSug: new FormControl(sug),
      totalChol: new FormControl(chol),
    });

  }

  ngOnInit() {
    console.log(this.nutritionService.confirmEvent)
    this.subscription = this.nutritionService.confirmEvent.subscribe(data => {
      console.log(data);
      if (data) {
        this.toSave();
      }
    })
  }

  get f() { return this.mineralForm.controls; }
  submitted = false;

  toSave() {
    
    console.log('save api called');
    this.submitted = true;
    if (this.mineralForm.invalid) {
      this.nutritionService.confirmEvent.next(false);
      return;
    }
    this.commonService.presentLoader();
    this.nutritionService.insertNutrition(this.mineralForm.value).subscribe((data: any) => {
      this.commonService.dismissLoader();
      console.log(data);
      this.router.navigate(['/nutrition-list']);
    },
    err=>{
      this.commonService.dismissLoader();
    });
  }

  expandItem(item): void {
    console.log(item)
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

  ngOnDestroy(){
    console.log('destroyed in seconds')
    this.subscription.unsubscribe();
  }
}
