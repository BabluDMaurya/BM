(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nutrition-nutrition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition-preview/nutrition-preview.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition-preview/nutrition-preview.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides pager=\"true\" class=\"preview-img\" [options]=\"sliderOpts\">\r\n  <ion-slide *ngFor=\"let img of images\">\r\n    <img src=\"{{ img }}\" tappable (click)=\"openPreview(img)\">\r\n  </ion-slide>\r\n</ion-slides>\r\n<div class=\"nutrition-head\">\r\n  <h4>{{nutritionData.form.nutriTitle}}</h4>\r\n  <p>{{nutritionData.form.nutriDescription}}</p>\r\n  <div class=\"nutrition-flex\">\r\n    <div class=\"nutrition-sub\">\r\n      <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\"></ion-icon> {{nutritionData.form.nutriServeSize}}\r\n    </div>\r\n    <div class=\"nutrition-sub ion-text-right\">\r\n      <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon>\r\n      {{nutritionData.form.nutriPrepHrs}} hrs {{nutritionData.form.nutriPrepMin}} mins\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-card *ngFor=\"let item of items\">\r\n  <ion-card-header class=\"more-card-header\" (click)=\"expandItem(item)\" >\r\n    <!-- <ion-card-title>More Details</ion-card-title> -->\r\n    <ion-card-title>Nutrition Details</ion-card-title>\r\n    <ion-fab size=\"small\">\r\n      <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\"></ion-icon>\r\n    </ion-fab>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <form [formGroup]=\"mineralForm\" (ngSubmit)=\"toSave()\">\r\n      <app-expandable expandHeight=\"300px\" [expanded]=\"item.expanded\">\r\n        <ion-list class=\"details-list\" lines=\"none\">\r\n          <ion-item>\r\n            <ion-label>Total Calories</ion-label>\r\n            <ion-input type=\"number\"  class=\"ion-text-end\"  formControlName=\"totalCal\"\r\n              value=\"{{totalMinerals.cal | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Carbohydrates</ion-label>\r\n            <ion-input type=\"number\" class=\"ion-text-end\"  formControlName=\"totalCarbo\"\r\n              value=\"{{totalMinerals.carbo | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Proteins</ion-label>\r\n            <ion-input type=\"number\"  class=\"ion-text-end\"  formControlName=\"totalProt\"\r\n              value=\"{{totalMinerals.prot | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Fats</ion-label>\r\n            <ion-input type=\"number\"  class=\"ion-text-end\" formControlName=\"totalProt\"\r\n              value=\"{{totalMinerals.fat | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Sugar</ion-label>\r\n            <ion-input type=\"number\" class=\"ion-text-end\"  formControlName=\"totalSug\" value=\"{{totalMinerals.sug | number : '1.2-2'}}\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Cholestrol</ion-label>\r\n            <ion-input type=\"number\"  formControlName=\"totalChol\"\r\n              value=\"{{totalMinerals.chol | number : '1.2-2'}}\" class=\"ion-text-end\"></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n      </app-expandable>\r\n    </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n<ion-list lines=\"none\" class=\"ingredient-list\">\r\n  <ion-list-header>Ingredients</ion-list-header>\r\n  <!-- <div class=\"ingredientItems\" *ngIf = \"nutritionData.form.nutriIngredients[0].name != '' \">\r\n    <p *ngFor=\"let Ingredient of nutritionData.form.nutriIngredients\"><span>{{Ingredient.name}}</span></p>\r\n  </div> -->\r\n  <div class=\"ingredientItems\">\r\n  <p *ngFor=\"let item of nutritionData.minerals let i=index;\">\r\n    <!-- <ion-list class=\"ingredient-list full-width\" *ngIf=\"item?.length > 0\">\r\n      <ion-item *ngFor=\"let a of item\">\r\n        <p *ngIf=\"a.food_name\">{{a.food_name}}</p>\r\n      </ion-item>\r\n    </ion-list> -->\r\n    <span *ngIf=\"item.item_name\">{{item?.item_name}}</span>\r\n    <span *ngIf=\"item.mn\">{{item?.mn}}</span>\r\n    <span *ngIf=\"item.food_name\">{{item?.food_name}}</span>\r\n  </p></div>\r\n</ion-list>\r\n<ion-list lines=\"none\" class=\"instructions-list\" *ngIf=\"nutritionData.form.nutriInstruction[0].name != '' \">\r\n  <ion-list-header>Instructions</ion-list-header>\r\n  <ion-item *ngFor=\"let instruction of nutritionData.form.nutriInstruction; let i=index;\">\r\n    <p>{{i+1}}. {{instruction.name}}</p>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-list lines=\"none\" class=\"instructions-list\"  *ngIf ='nutritionData.form.nutriBevrageType != \"\"  || nutritionData.form.bevragveQnty != \"\" '>\r\n  <ion-list-header>Beverages</ion-list-header>\r\n  <div class=\"ingredientItems\">\r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 1\">Cofee</p>\r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 2\">Milk</p>\r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 3\">Fruit Drink</p>    \r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 4\">Soda</p>\r\n    :\r\n    <p *ngIf=\"nutritionData.form.bevragveQnty != '' && nutritionData.form.bevragveQnty != ''  \">{{nutritionData.form.bevragveQnty}} \r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 1\">Bottle</span>\r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 2\">Glass</span>\r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 3\">Bowl</span>    \r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 4\">Cup</span>\r\n    </p>\r\n\r\n    <p *ngIf=\"nutritionData.form.unitQnty != '' && nutritionData.form.bevragveUnit != ''  \">{{nutritionData.form.unitQnty}} \r\n      <span *ngIf=\"nutritionData.form.bevragveUnit == 1\">Liter</span>\r\n      <span *ngIf=\"nutritionData.form.bevragveUnit == 2\">Milliliter</span>\r\n    </p>\r\n  </div>\r\n  \r\n  <ion-item class=\"beveragesList\">\r\n    \r\n  </ion-item> \r\n  \r\n  <!-- <ion-item >\r\n    <p *ngIf=\"nutritionData.form.bevragveinclude\" >This beverage should consume with  this nutrition</p>\r\n     </ion-item> -->\r\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" *ngIf=\"!showPreview\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click) = \"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"ion-no-margin\" *ngIf=\"showPreview\" (click)=\"showPreview=!showPreview\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{showPreview?\"Preview\":\"Add Nutrition\"}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <!-- //*ngIf=\"nextVisible\"  -->\r\n      <div *ngIf=\"nextVisible && !(this.nutritionForm.invalid)\">\r\n      <ion-label *ngIf=\"!showPreview\" (click)=\"toPreview()\"  class=\"text-green\">Next</ion-label>\r\n      </div>\r\n      <ion-label *ngIf=\"showPreview\" class=\"text-green\" (click)=\"confirm()\">Confirm</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <div class=\"\" *ngIf=\"!showPreview\">\r\n    <form [formGroup]=\"nutritionForm\" (ngSubmit)=\"toPreview()\" class=\"nutrition-form\">\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal\">\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-card class=\"upload-box ion-noleft-margin\">\r\n            <div class=\"upload_icon\">\r\n              <ion-icon ios=\"ios-image\" md=\"md-image\" (click)=\"openGallery()\"></ion-icon>\r\n            </div>\r\n            <ion-card-title>Library</ion-card-title>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-card class=\"upload-box ion-noright-margin\">\r\n            <div class=\"upload_icon\">\r\n              <ion-icon ios=\"ios-camera\" md=\"md-camera\" (click)=\"takeSnap()\"></ion-icon>\r\n            </div>\r\n            <ion-card-title>Camera</ion-card-title>\r\n          </ion-card>\r\n        </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-no-padding\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding preview-img\"><!-- *ngIf=\"gallaryImgPath?.length>0\" -->\r\n          <!-- <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-button> -->\r\n          <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n            <ion-slide class=\"ion-padding-horizontal\" (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n              <img src=\"{{imgpath}}\" />\r\n              <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n            </ion-slide>            \r\n          </ion-slides>      \r\n          <!-- <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n            <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n          </ion-button> -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-list>\r\n            \r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input class=\"form-control\" type=\"text\" formControlName=\"nutriTitle\" [ngClass]=\"{ 'is-invalid': submitted && f.nutriTitle.errors }\"></ion-input>\r\n            </ion-item>\r\n            <div  *ngIf=\"nutritionForm.get('nutriTitle').hasError('maxlength')\">\r\n              <span class=\"error-message\">Maximum length 25 charecters</span> \r\n            </div>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriTitle').touched) && nutritionForm.get('nutriTitle').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Description <span>*</span></ion-label>\r\n              <ion-textarea  class=\"form-control\" type=\"text\" formControlName=\"nutriDescription\"\r\n                 [ngClass]=\"{ 'is-invalid': submitted && f.nutriDescription.errors }\"></ion-textarea>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriDescription\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriDescription').touched) && nutritionForm.get('nutriDescription').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item>\r\n              <ion-label>Meal Type<span class=\"\"> *</span></ion-label>\r\n              <ion-select placeholder=\"Select\" formControlName=\"nutriMealType\">\r\n                <ion-select-option value=\"1\">Breakfast</ion-select-option>\r\n                <ion-select-option value=\"2\">Brunch</ion-select-option>\r\n                <ion-select-option value=\"3\">Lunch</ion-select-option>\r\n                <ion-select-option value=\"4\">Snacks</ion-select-option>\r\n                <ion-select-option value=\"5\">Dinner</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriMealType\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriMealType').touched) && nutritionForm.get('nutriMealType').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item>\r\n              <ion-label>Serving size<span class=\"\"> *</span></ion-label>\r\n              <ion-input placeholder=\"Enter\" type=\"number\" class=\"ion-text-right\"  color=\"light\"\r\n                 formControlName=\"nutriServeSize\"  [ngClass]=\"{ 'is-invalid': submitted && f.nutriServeSize.errors }\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriServeSize\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriServeSize').touched) && nutritionForm.get('nutriServeSize').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item>\r\n              <ion-label>Preparation Time<span class=\"\"> *</span></ion-label>\r\n              <ion-label style=\"max-width: 25px;\">Hrs</ion-label>\r\n              <ion-select  formControlName=\"nutriPrepHrs\" style=\"padding-left:6px;margin-top: 3px;\">\r\n                <ion-select-option *ngFor=\"let hour of [00,01,02,03,04,05,06,07,08,09,10,11,12]; let i=index;\"\r\n                  value=\"{{('0'+hour).slice(-2)}}\">{{('0'+hour).slice(-2)}}</ion-select-option>\r\n              </ion-select>              \r\n              <ion-label style=\"max-width: 35px;margin-left: 12px;\">Mins</ion-label>\r\n              <ion-select  formControlName=\"nutriPrepMin\" style=\"padding-left: 8px;margin-top: 3px;\">\r\n                <ion-select-option *ngFor=\"let hour of [].constructor(60) let i=index;\" value=\"{{('0'+i).slice(-2)}}\">\r\n                  {{('0'+i).slice(-2)}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriPrepMin\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriPrepMin').touched) && nutritionForm.get('nutriPrepMin').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n          </ion-list>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal ion-margin-end mt-20\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-segment class=\"top-segment mb-10\">\r\n            <ion-segment-button value=\"create-food\" (click)=\"foodTab=true\" checked>\r\n              <ion-label>Create Food</ion-label>\r\n            </ion-segment-button>\r\n            <!-- <ion-segment-button value=\"search-food\" (click)=\"foodTab=false\" *ngIf=\"scanData.length > 0 && scanData[0].data.length > 0 \">\r\n              <ion-label>Search Food</ion-label>\r\n            </ion-segment-button>\r\n              <ion-segment-button value=\"search-food\" (click)=\"searchFoodModal() && foodTab=false\" *ngIf=\"scanData.length == 0 || scanData[0].data.length == 0  \">\r\n                <ion-label>Search Food</ion-label>\r\n              </ion-segment-button> -->\r\n          </ion-segment>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"ion-no-padding nutrition-form\">\r\n          <div class=\"nutrition-form\" >\r\n            <ion-item class=\"mb-10\">\r\n              <ion-label for=\"ingredients\">Ingredients</ion-label>\r\n              <ion-chip (click)=\"searchFoodModal()\">\r\n                <ion-icon name=\"restaurant\"></ion-icon>\r\n                <ion-label>Search Ingredients</ion-label>\r\n              </ion-chip>\r\n            </ion-item>\r\n            <!-- <ion-list lines=\"none\" class=\"ingredients-list\" *ngFor=\"let data of scanData let i= index\">\r\n              <ion-item *ngIf=\"data.data.item_name;else typedata\" class=\"roundedcorner\">\r\n                {{data.data.item_name}} \r\n                <div class=\"close-ingredients\">\r\n                  <ion-icon ios=\"ios-close\" md=\"md-close\" (click)=\"removeApiData(i,data.data.item_name)\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n              \r\n              <ng-template #typedata>\r\n                <ion-item *ngFor=\" let typeData of data.data let i= index\" class=\"roundedcorner\">\r\n                  {{typeData.food_name}} <div class=\"close-ingredients\">\r\n                    <ion-icon ios=\"ios-close\" md=\"md-close\" (click)=\"removeApiData(i,typeData.food_name)\"></ion-icon>\r\n                  </div>\r\n                </ion-item>\r\n              </ng-template>\r\n            </ion-list> -->\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"ion-no-padding nutrition-form\">\r\n          <ion-list lines=\"none\" class=\"ingredients-list \">\r\n            <!-- <ion-item *ngIf=\"data.data.item_name\" class=\"roundedcorner\">\r\n              {{data.data.item_name}} \r\n              <div class=\"close-ingredients\">\r\n                <ion-icon ios=\"ios-close\" md=\"md-close\" (click)=\"removeApiData(i,data.data.item_name)\"></ion-icon>\r\n              </div>\r\n            </ion-item> -->\r\n                <!-- <ion-item *ngFor=\" let typeData of data.data let i= index\" class=\"roundedcorner\">\r\n            </ion-item> -->\r\n            <ol style=\"padding-inline-start: 20px\" >\r\n              <div  *ngFor=\"let data of scanData let i= index\">\r\n              <li *ngFor=\" let typeData of data.data let f= index\" >\r\n                <ion-item *ngIf=\"typeData?.mn\" class=\"\">\r\n                  <ion-label class=\"nutrition-title\">{{typeData.mn}}</ion-label>\r\n                  <div class=\"nutrition-right\">\r\n                    <ion-icon class=\"closeicon\" ios=\"ios-trash\" md=\"md-trash\" (click)=\"removeApiData(f,typeData.mn)\"></ion-icon>\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"typeData?.food_name\"  class=\"\">\r\n                  <div class=\"img-container\">\r\n                    <img src=\"{{typeData.photo.thumb}}\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"nutrition-container\" >\r\n                    <ion-label class=\"nutrition-title\">{{typeData.food_name}}</ion-label>\r\n                    <div class=\"nutrition-details\">\r\n                      <div class=\"nutrition-left\">\r\n                        <div class=\"nutrition-quantity\">\r\n                          <!-- <ion-icon class=\"closeicon\" ios=\"ios-remmove\" md=\"md-remove\" (click)=\"decrement()\"></ion-icon> -->\r\n                          <ion-input type=\"number\" class=\"nutrition-input\" (change)=\"onQtyChange(f,typeData.food_name,$event)\"  aria-readonly=\"true\" value=\"{{typeData?.newQty}}\"></ion-input>\r\n                          <!-- <ion-icon class=\"closeicon\" ios=\"ios-add\" md=\"md-add\" (click)=\"increment()\"></ion-icon> -->\r\n                        </div>\r\n                        <ion-select class=\"nutrition-select\" (ionChange)=\"detailsUpdate(f,typeData.food_name,$event)\"  interface=\"popover\" placeholder=\"Select Measure\">\r\n                          <ion-select-option *ngFor=\" let measures of typeData.alt_measures let i= index\" [selected]=\"i == 0\" value=\"{{measures.measure}}\">{{measures.measure}}</ion-select-option>\r\n                        </ion-select>\r\n                        <div class=\"nutrition-quantity\">\r\n                          <ion-label>{{typeData?.newCal.toFixed(2)}} Cal</ion-label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"nutrition-right\">\r\n                        <ion-icon class=\"closeicon\" ios=\"ios-trash\" md=\"md-trash\" (click)=\"removeApiData(f,typeData.food_name)\"></ion-icon>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ion-item>\r\n              </li>\r\n              <!-- <li *ngIf=\"data?.data\">\r\n                <ion-label *ngIf=\"data?.data.length > 1\" class=\"nutrition-title\">{{data.data}} df</ion-label>\r\n                </li> -->\r\n             </div> \r\n   \r\n            </ol>\r\n          </ion-list>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <div>\r\n            <div class=\"nutrition-form ingredientsBlock mt-20\">\r\n              <ion-list-header class=\"ion-no-padding min-height-auto\">Add Manual Ingredients</ion-list-header>\r\n              <ion-list class=\"ion-no-padding mb-10\" *ngFor=\"let item of tig.controls; let i = index\">\r\n                <ion-item [formGroup]=\"item\">\r\n                  <ion-input id=\"ingredients-input\" formControlName=\"name\" placeholder=\"Enter Ingredients\" [(ngModel)]=\"ingredientInput\" ></ion-input>\r\n                  <ion-button class=\"btn-square green\" (click)=\"removeIngredients(i)\" *ngIf=\"i!=0\">\r\n                    <ion-icon ios=\"ios-remove\" md=\"md-remove\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n              \r\n              <ion-button class=\"btn-square btn-add green\" (click)=\"addIngredients(ingredientInput)\">\r\n                <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding nutrition-form\">\r\n          <div class=\"nutrition-form instructionsBlock mt-20\">\r\n            <ion-list-header class=\"ion-no-padding min-height-auto\">Instructions</ion-list-header>\r\n            <ion-list class=\"ion-no-padding mb-10\" *ngFor=\"let item of t.controls; let i = index\">\r\n              <ion-item [formGroup]=\"item\">\r\n                <ion-input formControlName=\"name\" placeholder=\"Enter Instructions\"></ion-input>\r\n                <ion-button class=\"btn-square green\" (click)=\"removeInstruction(i)\" *ngIf=\"i!=0\">\r\n                  <ion-icon ios=\"ios-remove\" md=\"md-remove\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-button class=\"btn-square btn-add green\" (click)=\"addInstruction()\">\r\n              <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n          <!-- <ion-item>\r\n            <ion-label for=\"ingredients\">Instruction</ion-label>\r\n            <ion-input class=\"ion-text-right\" name=\"skillValue\" placeholder=\"Enter Instruction\"></ion-input>\r\n            <input type=\"button\" value=\"+\" (click)=\"addInstruction()\">\r\n          </ion-item> -->\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"ion-no-padding mt-20\">\r\n          <ion-segment class=\"top-segment\">\r\n            <ion-segment-button class=\"segment-button-checked\" style=\"max-width: 100%;\" checked>\r\n              <ion-label>Add Beverages</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n          <ion-item>\r\n            <ion-label>Select Beverage</ion-label>\r\n            <ion-select placeholder=\"Type\"  formControlName=\"nutriBevrageType\">\r\n              <ion-select-option value=\"1\">Coffee</ion-select-option>\r\n              <ion-select-option value=\"2\">Milk</ion-select-option>\r\n              <ion-select-option value=\"3\">Fruit drink</ion-select-option>\r\n              <ion-select-option value=\"4\">Soda</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>          \r\n          <ion-label style=\"color: #000;\">Select Type</ion-label>\r\n          <ion-list class=\"beverages-inputs\" style=\"padding-top: 0;\">\r\n            <ion-item>\r\n              <ion-label>Select Option</ion-label>\r\n              <ion-select placeholder=\"Options\" formControlName=\"bevragveOption\">\r\n                <ion-select-option value=\"1\">Bottle</ion-select-option>\r\n                <ion-select-option value=\"2\">Glass</ion-select-option>\r\n                <ion-select-option value=\"3\">Bowl</ion-select-option>\r\n                <ion-select-option value=\"3\">Cup</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Select Quantity</ion-label>\r\n              <ion-select placeholder=\"Quantity\"  formControlName=\"bevragveQnty\">\r\n                <ion-select-option>1</ion-select-option>\r\n                <ion-select-option>2</ion-select-option>\r\n                <ion-select-option>3</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>           \r\n          </ion-list>          \r\n          <ion-label style=\"color: #000;\">Select Measure/Units</ion-label>\r\n          <ion-list class=\"beverages-inputs\" style=\"padding-top: 0;\">\r\n            <ion-item>\r\n              <ion-input placeholder=\"Enter Quantity\"  formControlName=\"unitQnty\" type=\"number\"  color=\"light\" >\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Select Unit</ion-label>\r\n              <ion-select placeholder=\"Unit\" formControlName=\"bevragveUnit\">\r\n                <ion-select-option value=\"1\">Liter</ion-select-option>\r\n                <ion-select-option value=\"2\">Milliliter</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n          <!-- <ion-item lines=\"none\">\r\n            <ion-label>Included in this meal</ion-label>\r\n            <ion-toggle slot=\"start\" formControlName=\"bevragveinclude\" checked=\"false\" ></ion-toggle>\r\n          </ion-item> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showPreview\">\r\n    <app-nutrition-preview></app-nutrition-preview>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/nutrition/nutrition-preview/nutrition-preview.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/nutrition/nutrition-preview/nutrition-preview.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-slide {\n  background: #fbfbfb;\n}\n\n.grey-header {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  font-size: 0.75rem;\n  color: #000;\n  text-transform: uppercase;\n}\n\n.ingredient-list ion-item, .instructions-list ion-item {\n  --min-height:auto;\n}\n\n.ingredient-list ion-item p, .instructions-list ion-item p {\n  width: 100%;\n  border-bottom: 1px solid whitesmoke;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\n.ingredient-list ion-item:last-child p, .instructions-list ion-item:last-child p {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n.nutrition-head h4 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #000;\n}\n\n.nutrition-head p {\n  line-height: 1.5;\n}\n\n.nutrition-sub {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n\n.nutrition-sub:last-child {\n  margin-right: 0;\n}\n\n.nutrition-sub ion-icon {\n  font-size: 1rem;\n  margin-right: 3px;\n  color: #26a69a;\n}\n\n.nutrition-flex {\n  display: flex;\n  align-items: center;\n}\n\n.details-list {\n  padding: 0;\n}\n\n.details-list ion-item {\n  padding-top: 0;\n  --min-height: auto;\n  font-size: 0.85rem;\n}\n\n.details-list ion-label {\n  margin: 0;\n}\n\n.position-relative {\n  position: relative;\n}\n\n.instructions-list .beveragesList p:first-child {\n  width: 5%;\n}\n\n.instructions-list .beveragesList + ion-item p:first-child {\n  width: 5%;\n}\n\n.preview-img img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-bottom: 4px solid #f1f1f1;\n}\n\nion-card ion-card-header ion-fab {\n  position: absolute;\n  top: 13px;\n  right: 15px;\n  color: #26a69a;\n}\n\nion-list.ingredient-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px;\n}\n\nion-list.ingredient-list ion-list-header {\n  color: #26a69a;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\nion-list.instructions-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px;\n}\n\nion-list.instructions-list ion-list-header {\n  color: #26a69a;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.ingredientItems {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 15px;\n}\n\n.ingredientItems p {\n  background: #f1f1f1;\n  margin-right: 5px;\n  border-radius: 30px;\n  padding: 4px 13px;\n  margin-bottom: 5px;\n}\n\n.preview-img {\n  margin-bottom: 10px;\n}\n\n.preview-img ion-slide img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uL251dHJpdGlvbi1wcmV2aWV3L0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXG51dHJpdGlvblxcbnV0cml0aW9uLXByZXZpZXdcXG51dHJpdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9udXRyaXRpb24vbnV0cml0aW9uLXByZXZpZXcvbnV0cml0aW9uLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxtQkFBQTtBQ0VkOztBRERBO0VBQWEseUJBQUE7RUFBMEIsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsV0FBQTtFQUFZLHlCQUFBO0FDUzFGOztBRFJBO0VBQXVELGlCQUFBO0FDWXZEOztBRFhBO0VBQTJELFdBQUE7RUFBWSxtQ0FBQTtFQUFvQyxvQkFBQTtFQUFxQixtQkFBQTtFQUFvQixnQkFBQTtBQ21CcEo7O0FEbEJBO0VBQWlGLG1CQUFBO0VBQW9CLGlCQUFBO0VBQWtCLGdCQUFBO0FDd0J2SDs7QUR2QkE7RUFBbUIsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixXQUFBO0FDNkJwRDs7QUQ1QkE7RUFBa0IsZ0JBQUE7QUNnQ2xCOztBRC9CQTtFQUFlLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxtQkFBQTtFQUFvQixrQkFBQTtBQ3NDcEU7O0FEckNBO0VBQTBCLGVBQUE7QUN5QzFCOztBRHhDQTtFQUF3QixlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLGNBQUE7QUM4QzFEOztBRDdDQTtFQUFnQixhQUFBO0VBQWUsbUJBQUE7QUNrRC9COztBRGhEQTtFQUFjLFVBQUE7QUNvRGQ7O0FEbkRJO0VBQVMsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLGtCQUFBO0FDd0QvQzs7QUR2REk7RUFBVSxTQUFBO0FDMERkOztBRHhEQTtFQUFtQixrQkFBQTtBQzREbkI7O0FEekRRO0VBQWMsU0FBQTtBQzZEdEI7O0FEMURRO0VBQWMsU0FBQTtBQzZEdEI7O0FEekRBO0VBQWlCLGFBQUE7RUFBYyxXQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtFQUFtQix1QkFBQTtLQUFBLG9CQUFBO0FDZ0U5RDs7QUQvREE7RUFBUyxZQUFBO0VBQWEsZ0JBQUE7RUFBaUIsU0FBQTtFQUFVLGdDQUFBO0FDc0VqRDs7QURwRVE7RUFBUSxrQkFBQTtFQUFtQixTQUFBO0VBQVUsV0FBQTtFQUFZLGNBQUE7QUMwRXpEOztBRHZFQTtFQUF5QixVQUFBO0VBQVcsZ0NBQUE7RUFBaUMsb0JBQUE7QUM2RXJFOztBRDVFSTtFQUFnQixjQUFBO0VBQWUsa0JBQUE7RUFBa0IsZ0JBQUE7QUNpRnJEOztBRC9FQTtFQUEyQixVQUFBO0VBQVcsZ0NBQUE7RUFBaUMsb0JBQUE7QUNxRnZFOztBRHBGSTtFQUFnQixjQUFBO0VBQWUsa0JBQUE7RUFBa0IsZ0JBQUE7QUN5RnJEOztBRHZGQTtFQUFpQixhQUFBO0VBQWMsZUFBQTtFQUFnQixlQUFBO0FDNkYvQzs7QUQ1Rkk7RUFBRyxtQkFBQTtFQUFvQixpQkFBQTtFQUFrQixtQkFBQTtFQUFvQixpQkFBQTtFQUFrQixrQkFBQTtBQ21HbkY7O0FEakdBO0VBQWEsbUJBQUE7QUNxR2I7O0FEbkdRO0VBQUksYUFBQTtFQUFjLFdBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0VBQXNCLDBCQUFBO0tBQUEsdUJBQUE7QUN5RzVEIiwiZmlsZSI6InNyYy9hcHAvbnV0cml0aW9uL251dHJpdGlvbi1wcmV2aWV3L251dHJpdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZXtiYWNrZ3JvdW5kOiAjZmJmYmZiO31cclxuLmdyZXktaGVhZGVye3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTogMTVweDtmb250LXNpemU6IDAuNzVyZW07Y29sb3I6ICMwMDA7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XHJcbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW0sIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6YXV0b31cclxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbSBwLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW0gcHt3aWR0aDogMTAwJTtib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtwYWRkaW5nLWJvdHRvbTogMTBweDttYXJnaW4tYm90dG9tOiAxMHB4O2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQgcCwgLmluc3RydWN0aW9ucy1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQgcHtib3JkZXItYm90dG9tOiBub25lO3BhZGRpbmctYm90dG9tOiAwO21hcmdpbi1ib3R0b206IDA7fVxyXG4ubnV0cml0aW9uLWhlYWQgaDR7Zm9udC1zaXplOiAxcmVtO2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICMwMDA7fVxyXG4ubnV0cml0aW9uLWhlYWQgcHtsaW5lLWhlaWdodDogMS41O31cclxuLm51dHJpdGlvbi1zdWJ7Zm9udC1zaXplOiAwLjg1cmVtO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW4tcmlnaHQ6IDIwcHg7fVxyXG4ubnV0cml0aW9uLXN1YjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDogMDt9XHJcbi5udXRyaXRpb24tc3ViIGlvbi1pY29ue2ZvbnQtc2l6ZTogMXJlbTttYXJnaW4tcmlnaHQ6IDNweDtjb2xvcjogIzI2YTY5YTt9XHJcbi5udXRyaXRpb24tZmxleHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cclxuLy8gLmFkZG1vcmV7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxMHB4O3RvcDogMTBweDtjb2xvcjogI0ZGRjtmb250LXNpemU6IDEuNXJlbTt6LWluZGV4OiA5OTt3aWR0aDogMzhweDtoZWlnaHQ6IDM4cHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5kZXRhaWxzLWxpc3R7cGFkZGluZzogMDtcclxuICAgIGlvbi1pdGVte3BhZGRpbmctdG9wOiAwOy0tbWluLWhlaWdodDogYXV0bztmb250LXNpemU6IDAuODVyZW07fVxyXG4gICAgaW9uLWxhYmVse21hcmdpbjogMDt9XHJcbn1cclxuLnBvc2l0aW9uLXJlbGF0aXZle3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5pbnN0cnVjdGlvbnMtbGlzdHtcclxuICAgIC5iZXZlcmFnZXNMaXN0e1xyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGR7d2lkdGg6IDUlO31cclxuICAgIH1cclxuICAgIC5iZXZlcmFnZXNMaXN0K2lvbi1pdGVte1xyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGR7d2lkdGg6IDUlO31cclxuICAgIH1cclxufVxyXG5cclxuLnByZXZpZXctaW1nIGltZ3toZWlnaHQ6IDI1MHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvdmVyOyBvYmplY3QtcG9zaXRpb246IHRvcDt9XHJcbmlvbi1jYXJke2JvcmRlcjogbm9uZTtib3gtc2hhZG93OiBub25lO21hcmdpbjogMDtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICBpb24tZmFie3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDEzcHg7cmlnaHQ6IDE1cHg7Y29sb3I6ICMyNmE2OWE7fVxyXG4gICAgfVxyXG59XHJcbmlvbi1saXN0LmluZ3JlZGllbnQtbGlzdHtwYWRkaW5nOiAwO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO3BhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgaW9uLWxpc3QtaGVhZGVye2NvbG9yOiAjMjZhNjlhO2ZvbnQtc2l6ZTogLjg1cmVtO2ZvbnQtd2VpZ2h0OiA1MDA7fVxyXG59XHJcbmlvbi1saXN0Lmluc3RydWN0aW9ucy1saXN0e3BhZGRpbmc6IDA7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7cGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBpb24tbGlzdC1oZWFkZXJ7Y29sb3I6ICMyNmE2OWE7Zm9udC1zaXplOiAuODVyZW07Zm9udC13ZWlnaHQ6IDUwMDt9XHJcbn1cclxuLmluZ3JlZGllbnRJdGVtc3tkaXNwbGF5OiBmbGV4O2ZsZXgtd3JhcDogd3JhcDtwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBwIHtiYWNrZ3JvdW5kOiAjZjFmMWYxO21hcmdpbi1yaWdodDogNXB4O2JvcmRlci1yYWRpdXM6IDMwcHg7cGFkZGluZzogNHB4IDEzcHg7bWFyZ2luLWJvdHRvbTogNXB4O31cclxufVxyXG4ucHJldmlldy1pbWd7bWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgICBpbWd7aGVpZ2h0OiAyNTBweDt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb3ZlcjsgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7fVxyXG4gICAgfVxyXG59IiwiLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG59XG5cbi5ncmV5LWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW0sIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDphdXRvO1xufVxuXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtIHAsIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHAsIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHAge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm51dHJpdGlvbi1oZWFkIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm51dHJpdGlvbi1oZWFkIHAge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ubnV0cml0aW9uLXN1YiB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubnV0cml0aW9uLXN1YjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubnV0cml0aW9uLXN1YiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGNvbG9yOiAjMjZhNjlhO1xufVxuXG4ubnV0cml0aW9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGV0YWlscy1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cbi5kZXRhaWxzLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG4uZGV0YWlscy1saXN0IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5zdHJ1Y3Rpb25zLWxpc3QgLmJldmVyYWdlc0xpc3QgcDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA1JTtcbn1cbi5pbnN0cnVjdGlvbnMtbGlzdCAuYmV2ZXJhZ2VzTGlzdCArIGlvbi1pdGVtIHA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNSU7XG59XG5cbi5wcmV2aWV3LWltZyBpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzI2YTY5YTtcbn1cblxuaW9uLWxpc3QuaW5ncmVkaWVudC1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaW9uLWxpc3QuaW5ncmVkaWVudC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiAjMjZhNjlhO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1saXN0Lmluc3RydWN0aW9ucy1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaW9uLWxpc3QuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgY29sb3I6ICMyNmE2OWE7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmluZ3JlZGllbnRJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmluZ3JlZGllbnRJdGVtcyBwIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDRweCAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5wcmV2aWV3LWltZyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJldmlldy1pbWcgaW9uLXNsaWRlIGltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/nutrition/nutrition-preview/nutrition-preview.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/nutrition/nutrition-preview/nutrition-preview.component.ts ***!
  \****************************************************************************/
/*! exports provided: NutritionPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPreviewComponent", function() { return NutritionPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let NutritionPreviewComponent = class NutritionPreviewComponent {
    constructor(commonService, nutritionService, navCtrl, router, fb) {
        this.commonService = commonService;
        this.nutritionService = nutritionService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.fb = fb;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 1
        };
        this.images = [];
        this.items = [];
        this.totalMinerals = new Array;
        this.apiIngredients = '';
        this.submitted = false;
        this.items = [
            { expanded: false }
        ];
        this.nutritionService.currentNutritionData.subscribe(data => {
            this.nutritionData = data;
            console.log(this.nutritionData);
            this.images = data['form'].file;
        });
        console.log(this.nutritionData.form.nutriBevrageType);
        console.log(this.nutritionData.minerals, 'mmm');
        let cal = 0;
        let carbo = 0;
        let prot = 0;
        let fat = 0;
        let sug = 0;
        let chol = 0;
        this.nutritionData.minerals.filter(value => {
            if (value.food_name) {
                if (value.food_name) {
                    this.apiIngredients += value['food_name'] + ',';
                }
                if (value.item_name) {
                    this.apiIngredients += value['item_name'] + ',';
                }
                cal = cal + value['newCal'];
                carbo = carbo + value['nf_total_carbohydrate'];
                prot = prot + value['nf_protein'];
                fat = fat + value['nf_total_fat'];
                sug = sug + value['nf_sugars'];
                chol = chol + value['nf_cholesterol'];
            }
        });
        this.totalMinerals['cal'] = cal;
        this.totalMinerals['carbo'] = carbo;
        this.totalMinerals['prot'] = prot;
        this.totalMinerals['fat'] = fat;
        this.totalMinerals['sug'] = sug;
        this.totalMinerals['chol'] = chol;
        // console.log(this.apiIngredients);
        // create reactive form field
        this.mineralForm = this.fb.group({
            nutriTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriTitle),
            nutriDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriDescription),
            nutriMealType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriMealType),
            nutriServeSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriServeSize),
            nutriPrepHrs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriPrepHrs),
            nutriPrepMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriPrepMin),
            nutriInstruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriInstruction),
            nutriIngredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriIngredients),
            nutriBevrageType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.nutriBevrageType),
            bevragveQnty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.bevragveQnty),
            bevragveOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.bevragveOption),
            bevragveUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.bevragveUnit),
            unitQnty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.unitQnty),
            bevragveInclude: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.bevragveinclude),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nutritionData.form.file),
            apiData: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.apiIngredients),
            totalCal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](cal),
            totalCarbo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](carbo),
            totalProt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](prot),
            totalFat: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](fat),
            totalSug: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](sug),
            totalChol: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](chol),
        });
    }
    ngOnInit() {
        console.log(this.nutritionService.confirmEvent);
        this.subscription = this.nutritionService.confirmEvent.subscribe(data => {
            // console.log(data);
            if (data) {
                this.toSave();
            }
        });
    }
    get f() { return this.mineralForm.controls; }
    toSave() {
        console.log('save api called');
        this.submitted = true;
        if (this.mineralForm.invalid) {
            this.nutritionService.confirmEvent.next(false);
            return;
        }
        this.commonService.presentLoader();
        this.nutritionService.insertNutrition(this.mineralForm.value).subscribe((data) => {
            this.commonService.dismissLoader();
            console.log(data);
            this.router.navigate(['/nutrition-list']);
        }, err => {
            this.commonService.dismissLoader();
        });
    }
    expandItem(item) {
        console.log(item);
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    ngOnDestroy() {
        console.log('destroyed in seconds');
        this.subscription.unsubscribe();
    }
};
NutritionPreviewComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["NutritionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
NutritionPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nutrition-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nutrition-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition-preview/nutrition-preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nutrition-preview.component.scss */ "./src/app/nutrition/nutrition-preview/nutrition-preview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["NutritionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], NutritionPreviewComponent);



/***/ }),

/***/ "./src/app/nutrition/nutrition-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/nutrition/nutrition-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NutritionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPageRoutingModule", function() { return NutritionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nutrition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nutrition.page */ "./src/app/nutrition/nutrition.page.ts");




const routes = [
    {
        path: '',
        component: _nutrition_page__WEBPACK_IMPORTED_MODULE_3__["NutritionPage"]
    }
];
let NutritionPageRoutingModule = class NutritionPageRoutingModule {
};
NutritionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NutritionPageRoutingModule);



/***/ }),

/***/ "./src/app/nutrition/nutrition.module.ts":
/*!***********************************************!*\
  !*** ./src/app/nutrition/nutrition.module.ts ***!
  \***********************************************/
/*! exports provided: NutritionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPageModule", function() { return NutritionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nutrition-routing.module */ "./src/app/nutrition/nutrition-routing.module.ts");
/* harmony import */ var _nutrition_preview_nutrition_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nutrition-preview/nutrition-preview.component */ "./src/app/nutrition/nutrition-preview/nutrition-preview.component.ts");
/* harmony import */ var _nutrition_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nutrition.page */ "./src/app/nutrition/nutrition.page.ts");
/* harmony import */ var _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile/components.modules */ "./src/app/profile/components.modules.ts");









let NutritionPageModule = class NutritionPageModule {
};
NutritionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"],
            _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__["NutritionPageRoutingModule"]
        ],
        entryComponents: [_nutrition_preview_nutrition_preview_component__WEBPACK_IMPORTED_MODULE_6__["NutritionPreviewComponent"]],
        declarations: [_nutrition_page__WEBPACK_IMPORTED_MODULE_7__["NutritionPage"], _nutrition_preview_nutrition_preview_component__WEBPACK_IMPORTED_MODULE_6__["NutritionPreviewComponent"]]
    })
], NutritionPageModule);



/***/ }),

/***/ "./src/app/nutrition/nutrition.page.scss":
/*!***********************************************!*\
  !*** ./src/app/nutrition/nutrition.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  color: #222 !important;\n}\n\n.btn-add {\n  position: absolute;\n  right: 0;\n}\n\n.ingredientsBlock ion-list ion-button {\n  bottom: 10px;\n}\n\n.ingredientsBlock ion-button {\n  top: 36px;\n}\n\n.instructionsBlock ion-list ion-button {\n  bottom: 10px;\n}\n\n.instructionsBlock ion-button {\n  top: 38px;\n}\n\nion-segment.top-segment {\n  height: 40px;\n}\n\nion-segment.top-segment ion-segment-button {\n  min-height: 40px;\n}\n\nion-segment.top-segment ion-segment-button ion-label {\n  margin: 0;\n  color: #000;\n  font-size: 0.75rem;\n}\n\nion-slides ion-slide img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\nion-slides ion-slide ion-icon {\n  position: absolute;\n  right: 15px;\n  top: 0;\n  font-size: 28px;\n  color: red;\n}\n\nion-slides ion-slide div {\n  height: 100%;\n  display: flex;\n  height: 275px;\n}\n\nion-slides ion-slide div img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-slides ion-slide div ion-icon {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  width: 24px;\n  height: 24px;\n}\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4;\n}\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0;\n}\n\n.nutrition-box {\n  display: flex;\n  align-items: center;\n}\n\n.img-container {\n  width: 45px;\n  height: 45px;\n  border-radius: 5px;\n  margin-right: 12px;\n}\n\n.img-container img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.nutrition-title {\n  font-size: 1rem;\n  color: #121212;\n  font-weight: 500;\n}\n\n.nutrition-container {\n  flex: 1;\n}\n\n.nutrition-details {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.nutrition-left {\n  display: flex;\n  flex: 1;\n}\n\n.nutrition-right span {\n  font-size: 13px;\n  color: #8b8b8b;\n}\n\n.nutrition-quantity {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n\n.nutrition-input {\n  border: 0.5px solid #bbb;\n  border-radius: 5px;\n  max-width: 50px;\n  height: 30px;\n  margin: 0 5px;\n}\n\n.nutrition-select {\n  border: 0.5px solid #bbb;\n  border-radius: 5px;\n  min-width: 100px;\n  width: 100px;\n  height: 30px;\n  font-size: 13px;\n  position: relative;\n  -webkit-padding-start: 8px !important;\n          padding-inline-start: 8px !important;\n  margin-right: 8px;\n}\n\n.closeicon {\n  color: #2e2d2d !important;\n}\n\n.roundedcorner {\n  width: 100% !important;\n  border-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXG51dHJpdGlvblxcbnV0cml0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbnV0cml0aW9uL251dHJpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxzQkFBQTtBQ0VWOztBRERBO0VBQVMsa0JBQUE7RUFBbUIsUUFBQTtBQ001Qjs7QURIUTtFQUFXLFlBQUE7QUNPbkI7O0FETEk7RUFBVyxTQUFBO0FDUWY7O0FESFE7RUFBVyxZQUFBO0FDT25COztBRExJO0VBQVcsU0FBQTtBQ1FmOztBRE5BO0VBQXdCLFlBQUE7QUNVeEI7O0FEVEk7RUFBbUIsZ0JBQUE7QUNZdkI7O0FEWFE7RUFBVSxTQUFBO0VBQVUsV0FBQTtFQUFZLGtCQUFBO0FDZ0J4Qzs7QURYUTtFQUFJLGFBQUE7RUFBYyxXQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtFQUFrQiwwQkFBQTtLQUFBLHVCQUFBO0FDa0J4RDs7QURqQlE7RUFBUyxrQkFBQTtFQUFtQixXQUFBO0VBQVksTUFBQTtFQUFPLGVBQUE7RUFBZ0IsVUFBQTtBQ3dCdkU7O0FEdkJRO0VBQUksWUFBQTtFQUFhLGFBQUE7RUFBYSxhQUFBO0FDNEJ0Qzs7QUQzQlk7RUFBSSxzQkFBQTtLQUFBLG1CQUFBO0FDOEJoQjs7QUQ3Qlk7RUFBUyxrQkFBQTtFQUFtQixVQUFBO0VBQVcsUUFBQTtFQUFTLFdBQUE7RUFBWSxZQUFBO0FDb0N4RTs7QUQvQkM7RUFBVSxjQUFBO0FDbUNYOztBRGxDQztFQUFhLGFBQUE7QUNxQ2Q7O0FEbENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDcUNKOztBRG5DQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3NDSjs7QURwQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDdUNKOztBRHJDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN3Q0o7O0FEdENBO0VBQ0ksT0FBQTtBQ3lDSjs7QUR2Q0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzBDSjs7QUR4Q0E7RUFDSSxhQUFBO0VBQ0EsT0FBQTtBQzJDSjs7QUR6Q0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQzRDSjs7QUQxQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQzZDSjs7QUQzQ0E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDOENKOztBRDVDQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtFQUNBLGlCQUFBO0FDK0NKOztBRDdDQTtFQUNJLHlCQUFBO0FDZ0RKOztBRDlDQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7QUNpREoiLCJmaWxlIjoic3JjL2FwcC9udXRyaXRpb24vbnV0cml0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtjb2xvcjogIzIyMiAhaW1wb3J0YW50O31cclxuLmJ0bi1hZGR7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwO31cclxuLmluZ3JlZGllbnRzQmxvY2t7XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICBpb24tYnV0dG9ue2JvdHRvbTogMTBweDt9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue3RvcDogMzZweDt9XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnNCbG9ja3tcclxuICAgIGlvbi1saXN0e1xyXG4gICAgICAgIGlvbi1idXR0b257Ym90dG9tOiAxMHB4O31cclxuICAgIH1cclxuICAgIGlvbi1idXR0b257dG9wOiAzOHB4O31cclxufVxyXG5pb24tc2VnbWVudC50b3Atc2VnbWVudHtoZWlnaHQ6IDQwcHg7XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257bWluLWhlaWdodDogNDBweDtcclxuICAgICAgICBpb24tbGFiZWx7bWFyZ2luOiAwO2NvbG9yOiAjMDAwO2ZvbnQtc2l6ZTogMC43NXJlbTt9XHJcbiAgICB9XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgICBpbWd7aGVpZ2h0OiAyNTBweDt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb3ZlcjtvYmplY3QtcG9zaXRpb246IGNlbnRlcjt9XHJcbiAgICAgICAgaW9uLWljb257cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxNXB4O3RvcDogMDtmb250LXNpemU6IDI4cHg7Y29sb3I6IHJlZDt9XHJcbiAgICAgICAgZGl2e2hlaWdodDogMTAwJTtkaXNwbGF5OmZsZXg7aGVpZ2h0OiAyNzVweDtcclxuICAgICAgICAgICAgaW1ne29iamVjdC1maXQ6IGNvbnRhaW47fVxyXG4gICAgICAgICAgICBpb24taWNvbntwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDhweDt0b3A6IDhweDt3aWR0aDogMjRweDtoZWlnaHQ6IDI0cHg7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24taXRlbS5mbG9hdGluZ0l0ZW17XHJcblx0aW9uLWxhYmVse2NvbG9yOiNhNWE0YTR9XHJcblx0aW9uLXRleHRhcmVhe21hcmdpbi10b3A6MH1cclxufVxyXG4vLyAucHJlVGltZUJveHtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDt9XHJcbi5udXRyaXRpb24tYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltZy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4uaW1nLWNvbnRhaW5lciBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm51dHJpdGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubnV0cml0aW9uLWNvbnRhaW5lcntcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLm51dHJpdGlvbi1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5udXRyaXRpb24tbGVmdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi5udXRyaXRpb24tcmlnaHQgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZ2IoMTM5LCAxMzksIDEzOSk7XHJcbn1cclxuLm51dHJpdGlvbi1xdWFudGl0eXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLm51dHJpdGlvbi1pbnB1dHtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2JiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1heC13aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuLm51dHJpdGlvbi1zZWxlY3R7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmNsb3NlaWNvbntcclxuICAgIGNvbG9yOiByZ2IoNDYsIDQ1LCA0NSkgIWltcG9ydGFudDtcclxufVxyXG4ucm91bmRlZGNvcm5lcntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsImlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tYWRkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLmluZ3JlZGllbnRzQmxvY2sgaW9uLWxpc3QgaW9uLWJ1dHRvbiB7XG4gIGJvdHRvbTogMTBweDtcbn1cbi5pbmdyZWRpZW50c0Jsb2NrIGlvbi1idXR0b24ge1xuICB0b3A6IDM2cHg7XG59XG5cbi5pbnN0cnVjdGlvbnNCbG9jayBpb24tbGlzdCBpb24tYnV0dG9uIHtcbiAgYm90dG9tOiAxMHB4O1xufVxuLmluc3RydWN0aW9uc0Jsb2NrIGlvbi1idXR0b24ge1xuICB0b3A6IDM4cHg7XG59XG5cbmlvbi1zZWdtZW50LnRvcC1zZWdtZW50IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuaW9uLXNlZ21lbnQudG9wLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cbmlvbi1zZWdtZW50LnRvcC1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIGltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogcmVkO1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI3NXB4O1xufVxuaW9uLXNsaWRlcyBpb24tc2xpZGUgZGl2IGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5pb24tc2xpZGVzIGlvbi1zbGlkZSBkaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG5pb24taXRlbS5mbG9hdGluZ0l0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNhNWE0YTQ7XG59XG5pb24taXRlbS5mbG9hdGluZ0l0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm51dHJpdGlvbi1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5udXRyaXRpb24tdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMTIxMjEyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubnV0cml0aW9uLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG5cbi5udXRyaXRpb24tZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5udXRyaXRpb24tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG5cbi5udXRyaXRpb24tcmlnaHQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM4YjhiOGI7XG59XG5cbi5udXRyaXRpb24tcXVhbnRpdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLm51dHJpdGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLm51dHJpdGlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY2xvc2VpY29uIHtcbiAgY29sb3I6ICMyZTJkMmQgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWRjb3JuZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/nutrition/nutrition.page.ts":
/*!*********************************************!*\
  !*** ./src/app/nutrition/nutrition.page.ts ***!
  \*********************************************/
/*! exports provided: NutritionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionPage", function() { return NutritionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _modalContent_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modalContent/search-food/search-food.component */ "./src/app/modalContent/search-food/search-food.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/nutrition.service */ "./src/app/services/nutrition.service.ts");









let NutritionPage = class NutritionPage {
    constructor(settingService, commonService, modalController, camera, fb, nutritionService, navCtrl, platform) {
        this.settingService = settingService;
        this.commonService = commonService;
        this.modalController = modalController;
        this.camera = camera;
        this.fb = fb;
        this.nutritionService = nutritionService;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.quantity = 1;
        this.appendedValue = 1;
        this.isFixed = false;
        this.foodTab = true;
        this.scanData = [];
        this.showPreview = false;
        this.submitted = false;
        this.selectedImage = [];
        // nextVisible: boolean = false;
        this.nextVisible = true;
        this['validation_messages'] = {
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
        // ----------------------------- Open gallery  with multiple --------------//
        this.gallaryImgPath = [];
    }
    increment() {
        this.quantity++;
    }
    decrement() {
        this.quantity--;
    }
    ngOnInit() {
        this.createForm();
    }
    ionViewWillInit() {
    }
    // Reactiveform create
    createForm() {
        this.nutritionForm = this.fb.group({
            nutriTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                //UsernameValidator.validUsername,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(40),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            nutriDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])),
            nutriMealType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])),
            nutriServeSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])),
            // nutriPrepHrs: new FormControl('00'),
            nutriPrepHrs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('00'),
            nutriPrepMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('00', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])),
            nutriInstruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([this.fb.group({
                    name: ['']
                })]),
            nutriIngredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([this.fb.group({
                    name: ['']
                })]),
            nutriBevrageType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            bevragveQnty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            bevragveOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            unitQnty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            bevragveUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            bevragveinclude: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            appendedValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    get f() { return this.nutritionForm.controls; }
    get t() { return this.f.nutriInstruction; }
    get tig() { return this.f.nutriIngredients; }
    //called second component 
    toPreview() {
        console.log(this.nutritionService.confirmEvent);
        let test = [];
        this.scanData.filter(el => {
            if (Array.isArray(el['data'])) {
                test = [...test, ...el['data']];
            }
            else {
                test.push(el.data);
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
        console.log(tempData);
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
        const control = this.nutritionForm.controls['nutriInstruction'];
        control.removeAt(i);
    }
    addIngredients(inputNew) {
        const numberOfTickets = 1;
        // this.tig.push(this.fb.group({
        //   name: ['']
        // }));
        let data = [];
        data[0] = { mn: this.f.nutriIngredients.value[0].name };
        this.scanData.push({ data: data });
        console.log(this.scanData);
        console.log(this.tig);
        this.ingredientInput = '';
    }
    removeIngredients(i) {
        console.log(i);
        const control = this.nutritionForm.controls['nutriIngredients'];
        control.removeAt(i);
    }
    searchFoodModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.scanData);
            // console.log('fff');
            const modal = yield this.modalController.create({
                component: _modalContent_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_6__["SearchFoodComponent"],
                cssClass: '',
                componentProps: {
                    "scanData": this.scanData,
                }
            });
            modal.onDidDismiss().then((d) => {
                console.log(d);
                if (d.data) {
                    this.scanData.push(d);
                    this.scanData.forEach(element => {
                        if (Array.isArray(element.data)) {
                            element.data.forEach(el => {
                                if (el.food_name) {
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
            return yield modal.present();
        });
    }
    removeApiData(i, fName) {
        console.log(i);
        // console.log(f);
        this.scanData.forEach(element => {
            if (Array.isArray(element.data)) {
                element.data.forEach(el => {
                    if (el.food_name == fName || el.mn == fName) {
                        element.data.splice(i, 1);
                    }
                });
            }
            else {
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
                            element.data[i].newCal = ((el1.serving_weight / element.data[i].serving_weight_grams) * element.data[i].nf_calories) * el.newQty;
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
    onQtyChange(i, food, val) {
        let qty = val.target.value;
        console.log(this.scanData);
        this.scanData.forEach(element => {
            if (Array.isArray(element.data)) {
                element.data.forEach(el => {
                    // element.data[i].alt_measures.forEach(el1 => {
                    if (el.food_name == food) {
                        // console.log(element.data[i]);
                        console.log(element.data[i].food_name, food);
                        element.data[i].newQty = qty;
                        element.data[i].newCal = element.data[i].newCal * qty;
                        element.data[i].nf_total_carbohydrate = element.data[i].nf_total_carbohydrate * qty;
                        element.data[i].nf_protein = element.data[i].nf_protein * qty;
                        element.data[i].nf_total_fat = element.data[i].nf_total_fat * qty;
                        element.data[i].nf_sugars = element.data[i].nf_sugars * qty;
                        element.data[i].nf_cholesterol = element.data[i].nf_cholesterol * qty;
                    }
                    // });
                });
            }
        });
    }
    openGallery() {
        this.pickFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
    }
    takeSnap() {
        console.log('sad');
        this.pickImage(this.camera.PictureSourceType.CAMERA);
    }
    pickImage(sourceType) {
        const options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
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
        const options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
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
};
NutritionPage.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_8__["NutritionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], NutritionPage.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userNameRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NutritionPage.prototype, "userNameRefElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('skillsSetRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NutritionPage.prototype, "skillsSetRefElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_modalContent_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_6__["SearchFoodComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NutritionPage.prototype, "child", void 0);
NutritionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nutrition',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nutrition.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nutrition.page.scss */ "./src/app/nutrition/nutrition.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_8__["NutritionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], NutritionPage);



/***/ })

}]);
//# sourceMappingURL=nutrition-nutrition-module-es2015.js.map