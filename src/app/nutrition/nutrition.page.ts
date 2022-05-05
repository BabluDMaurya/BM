import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy, } from '@angular/core';
import { ModalController, Platform, IonSlides, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SettingsService } from './../services/settings.service';
import { SearchFoodComponent } from '../modalContent/search-food/search-food.component';
import { CommonService } from './../services/common.service';
import { NutritionService } from './../services/nutrition.service';
@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss', './../app.component.scss'],
})
export class NutritionPage implements OnInit, OnDestroy {

  quantity = 1;
  appendedValue = 1;
  newQty: any;
  newCal: any;
  increment() {
    this.quantity++;
  }
  decrement() {
    this.quantity--;
  }

  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  @ViewChild('userNameRef', { static: false }) userNameRefElement: ElementRef;
  @ViewChild('skillsSetRef', { static: false }) skillsSetRefElement: ElementRef
  @ViewChild(SearchFoodComponent, { static: false }) child;
  isFixed: boolean = false;
  foodTab: boolean = true;
  scanData = [];
  manData : any;
  currentImage: any;
  showPreview: boolean = false;
  nutritionForm: FormGroup;
  submitted: boolean = false;
  selectedImage = [];
  images: any;
  // nextVisible: boolean = false;
  nextVisible: boolean = true;
  constructor(
    public settingService: SettingsService,
    public commonService: CommonService,
    public modalController: ModalController,
    private camera: Camera,
    private fb: FormBuilder,
    private nutritionService: NutritionService,
    private navCtrl: NavController,
    public platform: Platform,
  ) {


  }


  ngOnInit() {
    this.createForm();
  }

  ionViewWillInit() {

  }
  // Reactiveform create
  createForm() {
    this.nutritionForm = this.fb.group({
      nutriTitle: new FormControl('', Validators.compose([
        //UsernameValidator.validUsername,
        Validators.maxLength(40),
        Validators.required
      ])),
      nutriDescription: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      nutriMealType: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      nutriServeSize: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      // nutriPrepHrs: new FormControl('00'),
      nutriPrepHrs: new FormControl('00'),
      nutriPrepMin: new FormControl('00', Validators.compose([
        Validators.required,
      ])),
      nutriInstruction: new FormArray([this.fb.group({
        name: ['']
      })]),
      nutriIngredients: new FormArray([this.fb.group({
        name: ['']
      })]),
      nutriBevrageType: new FormControl(''),
      bevragveQnty: new FormControl(''),
      bevragveOption: new FormControl(''),
      unitQnty: new FormControl(''),
      bevragveUnit: new FormControl(''),
      bevragveinclude: new FormControl(''),
      appendedValue: new FormControl(''),
    });
  }

  'validation_messages' = {
    nutriTitle: [
      { type: 'required', message: 'Title is required.' },
      { type: 'maxLength', message: 'Maximum length 40 charecters' }
    ],
    nutriDescription: [
      { type: 'required', message: 'Description is required.' }
    ],
    nutriMealType: [
      { type: 'required', message: 'Meal Type is required' }
    ],
    nutriServeSize: [
      { type: 'required', message: 'Serve Size is required' },
    ],
    nutriPrepMin: [
      { type: 'required', message: 'Preperation time required.' },
    ],
    nutriIngredients: [
      { type: 'required', message: 'Ingredients are required.' },
    ],
    nutriBevrageType: [],
    appendedValue: []
  };

  get f() { return this.nutritionForm.controls; }
  get t() { return this.f.nutriInstruction as FormArray; }
  get tig() { return this.f.nutriIngredients as FormArray; }

  //called second component 
  toPreview() {
    console.log(this.nutritionService.confirmEvent)

    let test = [];
    this.scanData.filter(el => {
      if (Array.isArray(el['data'])) {
        test = [...test, ...el['data']];
      } else {
        test.push(el.data)
      }

    });
    this.submitted = true;
    if (this.nutritionForm.invalid) {
      return;
    }

    this.showPreview = true;
    this.nutritionForm.value.file = this.gallaryImgPath;
    let tempData = new Array();

    tempData['form'] = this.nutritionForm.value;
    tempData['minerals'] = new Array();

    tempData['minerals'] = test;
    console.log(tempData)
    this.nutritionService.changeMessage(tempData);
  }
  // --------------------- S E A R C H   F O O D    P O P - U P ---------------------------//
  addInstruction() {
    const numberOfTickets = 1;
    this.t.push(this.fb.group({
      name: ['']
    }));
  }

  removeInstruction(i) {
    console.log(i);
    const control = <FormArray>this.nutritionForm.controls['nutriInstruction'];
    control.removeAt(i);
  }
  addIngredients() {
    const numberOfTickets = 1;
    // this.tig.push(this.fb.group({
    //   name: ['']
    // }));
    let data= [];
    data[0] = {mn: this.f.nutriIngredients.value[0].name};
    this.scanData.push({data: data});
    console.log(this.scanData);
    console.log(this.tig);
  }

  removeIngredients(i) {
    console.log(i);
    const control = <FormArray>this.nutritionForm.controls['nutriIngredients'];
    control.removeAt(i);
  }

  async searchFoodModal() {
    // console.log(this.scanData);
    // console.log('fff');
    const modal = await this.modalController.create({
      component: SearchFoodComponent,
      cssClass: '',
      componentProps: {
        "scanData": this.scanData,
      }
    });

    modal.onDidDismiss().then((d: any) => {
      console.log(d);
      if (d.data) {
        this.scanData.push(d);
        this.scanData.forEach(element => {
          if (Array.isArray(element.data)) {
            element.data.forEach(el => {
              if(el.food_name){
              el.newQty = el.alt_measures[0].qty;
              //  el.newCal =  el.nf_calories;
              el.newCal = (el.alt_measures[0].serving_weight / el.serving_weight_grams) * el.nf_calories;
              el.nf_total_carbohydrate = (el.alt_measures[0].serving_weight / el.serving_weight_grams) * el.nf_total_carbohydrate;
              el.nf_protein = (el.alt_measures[0].serving_weight / el.serving_weight_grams) * el.nf_protein;
              el.nf_total_fat = (el.alt_measures[0].serving_weight / el.serving_weight_grams) * el.nf_total_fat;
              el.nf_sugars = (el.alt_measures[0].serving_weight / el.serving_weight_grams) * el.nf_sugars;
              el.nf_cholesterol = (el.alt_measures[0].serving_weight / el.serving_weight_grams) * el.nf_cholesterol;
              //   el.alt_measures.forEach(el => {
              //   el.newQty = el.qty;
              // });
              }
            });
          }
        });
      }
      console.log(this.scanData);
    });
    return await modal.present();
  }

  removeApiData(i, fName) {
    console.log(i);
    // console.log(f);
    this.scanData.forEach(element => {
      if (Array.isArray(element.data)) {
        element.data.forEach(el => {
          if (el.food_name == fName) {
            element.data.splice(i, 1);
          }
        });
      } else {

        if (element.data.item_name == fName) {
          this.scanData.splice(i, 1);
        }
      }
    });
    console.log(this.scanData);
  }
  detailsUpdate(i, food, value) {
    let abc = value.target.value;
    this.scanData.forEach(element => {
      if (Array.isArray(element.data)) {
        element.data.forEach(el => {

          element.data[i].alt_measures.forEach(el1 => {
            if (el1.measure == abc && element.data[i].food_name == food) {
              console.log(element.data[i]);
              element.data[i].newQty = el1.qty;
              element.data[i].newCal = (el1.serving_weight / element.data[i].serving_weight_grams) * element.data[i].nf_calories;
              element.data[i].nf_total_carbohydrate = (el1.serving_weight / element.data[i].serving_weight_grams) * element.data[i].nf_total_carbohydrate;
              element.data[i].nf_protein = (el1.serving_weight / element.data[i].serving_weight_grams) * element.data[i].nf_protein;
              element.data[i].nf_total_fat = (el1.serving_weight / element.data[i].serving_weight_grams) * element.data[i].nf_total_fat;
              element.data[i].nf_sugars = (el1.serving_weight / element.data[i].serving_weight_grams) * element.data[i].nf_sugars;
              element.data[i].nf_cholesterol = (el1.serving_weight / element.data[i].serving_weight_grams) * element.data[i].nf_cholesterol;
            }
          });
        });
      }
    });

  }
  // ----------------------------- Open gallery  with multiple --------------//
  gallaryImgPath: any = [];
  openGallery() {
    this.pickFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  takeSnap() {
    console.log('sad');
    this.pickImage(this.camera.PictureSourceType.CAMERA);

  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 60,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
      console.log('viraj', imageData);
      this.nextVisible = true;
    }, (err) => {
      // Handle error
      // alert(err); 
    });
  }

  pickFromGallery(sourceType) {
    const options: CameraOptions = {
      quality: 60,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
      console.log('viraj', imageData);
      this.nextVisible = true;
    }, (err) => {
      // Handle error
      // alert(err);
    });
  }
  // ------------------------------  I M G  -  P I C K E R  ENDS ------------------------------//
  goBack() {
    this.navCtrl.back();
  }

  confirm() {

    this.nutritionService.confirmEvent.next(true);
  }

  ionViewDidLeave() {
    console.log('ddd');
    this.nutritionForm.reset();
    this.scanData = [];
    this.currentImage = '';
    this.showPreview = false;
    this.submitted = false;
    this.selectedImage = [];
    this.images = '';
    this.gallaryImgPath = [];
  }
  ngOnDestroy() {
    console.log('destroy');

  }
  removeImg(index) {
    this.gallaryImgPath.splice(index, 1);
  }
}
