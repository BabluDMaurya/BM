import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { IonContent,IonTextarea,IonInput } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NutritionService } from './../../services/nutrition.service';
import { map } from 'rxjs/operators';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss','../../app.component.scss'],
})
export class SearchFoodComponent implements OnInit{
  @ViewChild(IonInput, { read: IonInput,  static: false }) search_food_name: IonInput;
  apiData:any;
  foodList:any=null;
  selectedFoodList=[];
  scanData=[];
  selectedFoodList2=[];
  constructor(public commonService:CommonService,
              public nutritionService: NutritionService,
              private barcodeScanner: BarcodeScanner,
              private navParams:NavParams) 
              { 
                this.scanData = this.navParams.data.scanData;
                this.scanData.forEach(element => {
                  if( Array.isArray(element.data))
                  {
                    element.data.forEach(el =>{
                        if(el.food_name!==null){
                      this.selectedFoodList2.push(el.food_name);
                        }
                     });
                  }
                  
              
                });
                console.log(this.selectedFoodList2);
                
              }

  ngOnInit() {
    this.commonService.presentLoader();
    this.checkFoodName('apple');
  }
  ngAfterViewInit() {
    setTimeout(() => {
          this.search_food_name.setFocus();
    }, 400);
  }
  closeModal()
  {
    let data= null;
    console.log(this.selectedFoodList);
    if(this.selectedFoodList.length){
       data =  this.selectedFoodList;
    }
   
    this.commonService.dismissModal(data);
  }

  checkFoodName(foodname) {
    if(foodname !== ''){
     this.nutritionService.ntnxfetchFood(foodname).subscribe(
        (data: any) => {   
         
          data.common.forEach(el=>{
            if(this.selectedFoodList2.indexOf(el['food_name'])!==-1)
            {
              el['selected']=true;
            }else{
              el['selected']=false;
            }            
          });
          this.commonService.dismissLoader();
          console.log(data.common);
          this.foodList = Array.of(data); 
          console.log();
     
        },
        err => {
        console.log(err);
    });
    }else{
      this.foodList =null;
    }
  }

  getNutriDetails(itemDetails){
    let itemVal = itemDetails.target.value
    if(!itemDetails.target.checked){
    //   this.selectedFoodList[itemVal] = ''; 
    console.log(itemVal);   
    let qstring = {'query':itemVal};  
    this.nutritionService.ntnxFoodDetail(qstring).subscribe((data:any)=>{
      // console.log(data['foods'])
    console.log(data);
      this.selectedFoodList.push(data['foods'][0]);
      console.log(this.selectedFoodList)
     });

    }else{
      console.log('viraj');
     
      console.log(itemVal);
      console.log(this.selectedFoodList);
      var removeFrom =  this.selectedFoodList.filter(function(removeItem) {
        if(removeItem["food_name"] !== itemVal)
        {
         console.log(removeItem); 
         return removeItem;
        }
      });
      this.selectedFoodList = removeFrom;

      console.log('bat');
      console.log(this.scanData);
      var removeFrom2 = this.scanData.filter(function(removeFrom2) {
        console.log(removeFrom2);
        console.log(removeFrom2["data"]["0"]["food_name"]);
        // if(removeFrom2["data"]["0"]["food_name"] !== itemVal)
        // {
        //  console.log(removeFrom2["data"]["food_name"]); 
        //  return removeFrom2;
        // }
        var removeFrom3= removeFrom2["data"].filter(function(removeFrom3) {
          console.log('mannnn');
          console.log(removeFrom3["food_name"]);
           if(removeFrom3["food_name"] !== itemVal)
            {
             console.log(removeFrom3["  "]); 
             return removeFrom3;
            }
        });
      return  removeFrom2 ["data"]=   removeFrom3;
      });
      this.scanData = removeFrom2;
      console.log('dsdsd')
      console.log(this.scanData);     
    }
  }

  scanFood(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    
      if(!barcodeData.cancelled)
      {
        
        this.nutritionService.nutrtionBarcode( barcodeData.text).subscribe((data:any)=>{
          console.log('asadsad');
          if(!data.status)
          {
            this.apiData = data;
            console.log(data);
          }else{
            this.apiData =null
            console.log('ssssssss',data.status);
            this.commonService.presentToast('Product not found in database')
          }
       
        this.commonService.dismissModal(this.apiData);
        });
      }
      
    }).catch(err => {
        console.log('Error', err);
      alert(err);
    });
  }

}
