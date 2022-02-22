function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nutrition-nutrition-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition-preview/nutrition-preview.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition-preview/nutrition-preview.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutritionNutritionPreviewNutritionPreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-slides pager=\"true\" class=\"preview-img\" [options]=\"sliderOpts\">\r\n  <ion-slide *ngFor=\"let img of images\">\r\n    <img src=\"{{ img }}\" tappable (click)=\"openPreview(img)\">\r\n  </ion-slide>\r\n</ion-slides>\r\n<div class=\"nutrition-head\">\r\n  <h4>{{nutritionData.form.nutriTitle}}</h4>\r\n  <p>{{nutritionData.form.nutriDescription}}</p>\r\n  <div class=\"nutrition-flex\">\r\n    <div class=\"nutrition-sub\">\r\n      <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\"></ion-icon> {{nutritionData.form.nutriServeSize}}\r\n    </div>\r\n    <div class=\"nutrition-sub ion-text-right\">\r\n      <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon>\r\n      {{nutritionData.form.nutriPrepHrs}} hrs {{nutritionData.form.nutriPrepMin}} mins\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-card *ngFor=\"let item of items\">\r\n  <ion-card-header class=\"more-card-header\" (click)=\"expandItem(item)\" >\r\n    <!-- <ion-card-title>More Details</ion-card-title> -->\r\n    <ion-card-title>Nutrition Details</ion-card-title>\r\n    <ion-fab size=\"small\">\r\n      <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\"></ion-icon>\r\n    </ion-fab>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <form [formGroup]=\"mineralForm\" (ngSubmit)=\"toSave()\">\r\n      <app-expandable expandHeight=\"300px\" [expanded]=\"item.expanded\">\r\n        <ion-list class=\"details-list\" lines=\"none\">\r\n          <ion-item>\r\n            <ion-label>Total Calories</ion-label>\r\n            <ion-input type=\"number\"  class=\"ion-text-end\"  formControlName=\"totalCal\"\r\n              value=\"{{totalMinerals.cal | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Carbohydrates</ion-label>\r\n            <ion-input type=\"number\" class=\"ion-text-end\"  formControlName=\"totalCarbo\"\r\n              value=\"{{totalMinerals.carbo | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Proteins</ion-label>\r\n            <ion-input type=\"number\"  class=\"ion-text-end\"  formControlName=\"totalProt\"\r\n              value=\"{{totalMinerals.prot | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Fats</ion-label>\r\n            <ion-input type=\"number\"  class=\"ion-text-end\" formControlName=\"totalProt\"\r\n              value=\"{{totalMinerals.fat | number : '1.2-2'}}\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Sugar</ion-label>\r\n            <ion-input type=\"number\" class=\"ion-text-end\"  formControlName=\"totalSug\" value=\"{{totalMinerals.sug | number : '1.2-2'}}\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Total Cholestrol</ion-label>\r\n            <ion-input type=\"number\"  formControlName=\"totalChol\"\r\n              value=\"{{totalMinerals.chol | number : '1.2-2'}}\" class=\"ion-text-end\"></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n      </app-expandable>\r\n    </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n<ion-list lines=\"none\" class=\"ingredient-list\">\r\n  <ion-list-header>Ingredients</ion-list-header>\r\n  <div class=\"ingredientItems\" *ngIf = \"nutritionData.form.nutriIngredients[0].name != '' \">\r\n    <p *ngFor=\"let Ingredient of nutritionData.form.nutriIngredients\"><span>{{Ingredient.name}}</span></p>\r\n  </div>\r\n  <div class=\"ingredientItems\">\r\n  <p *ngFor=\"let item of nutritionData.minerals let i=index;\">\r\n    <!-- <ion-list class=\"ingredient-list full-width\" *ngIf=\"item?.length > 0\">\r\n      <ion-item *ngFor=\"let a of item\">\r\n        <p *ngIf=\"a.food_name\">{{a.food_name}}</p>\r\n      </ion-item>\r\n    </ion-list> -->\r\n    <span *ngIf=\"item.item_name\">{{item?.item_name}}</span>\r\n    <span *ngIf=\"item.food_name\">{{item?.food_name}}</span>\r\n  </p></div>\r\n</ion-list>\r\n<ion-list lines=\"none\" class=\"instructions-list\" *ngIf=\"nutritionData.form.nutriInstruction[0].name != '' \">\r\n  <ion-list-header>Instructions</ion-list-header>\r\n  <ion-item *ngFor=\"let instruction of nutritionData.form.nutriInstruction; let i=index;\">\r\n    <p>{{i+1}}. {{instruction.name}}</p>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-list lines=\"none\" class=\"instructions-list\"  *ngIf ='nutritionData.form.nutriBevrageType != \"\"  || nutritionData.form.bevragveQnty != \"\" '>\r\n  <ion-list-header>Beverages</ion-list-header>\r\n  <div class=\"ingredientItems\">\r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 1\">Cofee</p>\r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 2\">Milk</p>\r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 3\">Fruit Drink</p>    \r\n    <p *ngIf=\"nutritionData.form.nutriBevrageType == 4\">Soda</p>\r\n    :\r\n    <p *ngIf=\"nutritionData.form.bevragveQnty != '' && nutritionData.form.bevragveQnty != ''  \">{{nutritionData.form.bevragveQnty}} \r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 1\">Bottle</span>\r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 2\">Glass</span>\r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 3\">Bowl</span>    \r\n      <span *ngIf=\"nutritionData.form.bevragveQnty == 4\">Cup</span>\r\n    </p>\r\n\r\n    <p *ngIf=\"nutritionData.form.unitQnty != '' && nutritionData.form.bevragveUnit != ''  \">{{nutritionData.form.unitQnty}} \r\n      <span *ngIf=\"nutritionData.form.bevragveUnit == 1\">Liter</span>\r\n      <span *ngIf=\"nutritionData.form.bevragveUnit == 2\">Milliliter</span>\r\n    </p>\r\n  </div>\r\n  \r\n  <ion-item class=\"beveragesList\">\r\n    \r\n  </ion-item> \r\n  \r\n  <!-- <ion-item >\r\n    <p *ngIf=\"nutritionData.form.bevragveinclude\" >This beverage should consume with  this nutrition</p>\r\n     </ion-item> -->\r\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutritionNutritionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" *ngIf=\"!showPreview\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click) = \"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"ion-no-margin\" *ngIf=\"showPreview\" (click)=\"showPreview=!showPreview\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{showPreview?\"Preview\":\"Add Nutrition\"}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <!-- //*ngIf=\"nextVisible\"  -->\r\n      <div *ngIf=\"nextVisible && !(this.nutritionForm.invalid)\">\r\n      <ion-label *ngIf=\"!showPreview\" (click)=\"toPreview()\"  class=\"text-green\">Next</ion-label>\r\n      </div>\r\n      <ion-label *ngIf=\"showPreview\" class=\"text-green\" (click)=\"confirm()\">Confirm</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <div class=\"\" *ngIf=\"!showPreview\">\r\n    <form [formGroup]=\"nutritionForm\" (ngSubmit)=\"toPreview()\" class=\"nutrition-form\">\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal\">\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-card class=\"upload-box ion-noleft-margin\">\r\n            <div class=\"upload_icon\">\r\n              <ion-icon ios=\"ios-image\" md=\"md-image\" (click)=\"openGallery()\"></ion-icon>\r\n            </div>\r\n            <ion-card-title>Library</ion-card-title>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-card class=\"upload-box ion-noright-margin\">\r\n            <div class=\"upload_icon\">\r\n              <ion-icon ios=\"ios-camera\" md=\"md-camera\" (click)=\"takeSnap()\"></ion-icon>\r\n            </div>\r\n            <ion-card-title>Camera</ion-card-title>\r\n          </ion-card>\r\n        </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-no-padding\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding preview-img\"><!-- *ngIf=\"gallaryImgPath?.length>0\" -->\r\n          <!-- <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-button> -->\r\n          <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n            <ion-slide class=\"ion-padding-horizontal\" (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n              <img src=\"{{imgpath}}\" />\r\n              <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n            </ion-slide>            \r\n          </ion-slides>      \r\n          <!-- <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n            <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n          </ion-button> -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-list>\r\n            \r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input class=\"form-control\" type=\"text\" formControlName=\"nutriTitle\" [ngClass]=\"{ 'is-invalid': submitted && f.nutriTitle.errors }\"></ion-input>\r\n            </ion-item>\r\n            <div  *ngIf=\"nutritionForm.get('nutriTitle').hasError('maxlength')\">\r\n              <span class=\"error-message\">Maximum length 25 charecters</span> \r\n            </div>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriTitle').touched) && nutritionForm.get('nutriTitle').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Description <span>*</span></ion-label>\r\n              <ion-textarea  class=\"form-control\" type=\"text\" formControlName=\"nutriDescription\"\r\n                 [ngClass]=\"{ 'is-invalid': submitted && f.nutriDescription.errors }\"></ion-textarea>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriDescription\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriDescription').touched) && nutritionForm.get('nutriDescription').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item>\r\n              <ion-label>Meal Type<span class=\"\"> *</span></ion-label>\r\n              <ion-select placeholder=\"Select\" formControlName=\"nutriMealType\">\r\n                <ion-select-option value=\"1\">Breakfast</ion-select-option>\r\n                <ion-select-option value=\"2\">Brunch</ion-select-option>\r\n                <ion-select-option value=\"3\">Lunch</ion-select-option>\r\n                <ion-select-option value=\"4\">Snacks</ion-select-option>\r\n                <ion-select-option value=\"5\">Dinner</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriMealType\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriMealType').touched) && nutritionForm.get('nutriMealType').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item>\r\n              <ion-label>Serving size<span class=\"\"> *</span></ion-label>\r\n              <ion-input placeholder=\"Enter\" type=\"number\" class=\"ion-text-right\"  color=\"light\"\r\n                 formControlName=\"nutriServeSize\"  [ngClass]=\"{ 'is-invalid': submitted && f.nutriServeSize.errors }\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriServeSize\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriServeSize').touched) && nutritionForm.get('nutriServeSize').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n            <ion-item>\r\n              <ion-label>Preparation Time<span class=\"\"> *</span></ion-label>\r\n              <ion-label style=\"max-width: 25px;\">Hrs</ion-label>\r\n              <ion-select  formControlName=\"nutriPrepHrs\" style=\"padding-left:6px;margin-top: 3px;\">\r\n                <ion-select-option *ngFor=\"let hour of [00,01,02,03,04,05,06,07,08,09,10,11,12]; let i=index;\"\r\n                  value=\"{{('0'+hour).slice(-2)}}\">{{('0'+hour).slice(-2)}}</ion-select-option>\r\n              </ion-select>              \r\n              <ion-label style=\"max-width: 35px;margin-left: 12px;\">Mins</ion-label>\r\n              <ion-select  formControlName=\"nutriPrepMin\" style=\"padding-left: 8px;margin-top: 3px;\">\r\n                <ion-select-option *ngFor=\"let hour of [].constructor(60) let i=index;\" value=\"{{('0'+i).slice(-2)}}\">\r\n                  {{('0'+i).slice(-2)}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.nutriPrepMin\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || nutritionForm.get('nutriPrepMin').touched) && nutritionForm.get('nutriPrepMin').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n          </ion-list>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal ion-margin-end mt-20\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-segment class=\"top-segment mb-10\">\r\n            <ion-segment-button value=\"create-food\" (click)=\"foodTab=true\" checked>\r\n              <ion-label>Create Food</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"search-food\" (click)=\"foodTab=false\" *ngIf=\"scanData.length > 0 && scanData[0].data.length > 0 \">\r\n              <ion-label>Search Food</ion-label>\r\n            </ion-segment-button>\r\n              <ion-segment-button value=\"search-food\" (click)=\"searchFoodModal() && foodTab=false\" *ngIf=\"scanData.length == 0 || scanData[0].data.length == 0  \">\r\n                <ion-label>Search Food</ion-label>\r\n              </ion-segment-button>\r\n          </ion-segment>\r\n          <div [ngSwitch]=\"foodTab\">\r\n            <div class=\"nutrition-form ingredientsBlock mt-20\" *ngSwitchCase=true>\r\n              <ion-list-header class=\"ion-no-padding min-height-auto\">Ingredients</ion-list-header>\r\n              <ion-list class=\"ion-no-padding mb-10\" *ngFor=\"let item of tig.controls; let i = index\">\r\n                <ion-item [formGroup]=\"item\">\r\n                  <ion-input formControlName=\"name\" placeholder=\"Enter Ingredients\"></ion-input>\r\n                  <ion-button class=\"btn-square green\" (click)=\"removeIngredients(i)\" *ngIf=\"i!=0\">\r\n                    <ion-icon ios=\"ios-remove\" md=\"md-remove\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n              \r\n              <ion-button class=\"btn-square btn-add green\" (click)=\"addIngredients()\">\r\n                <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div class=\"nutrition-form\" *ngSwitchCase=\"false\">\r\n              <ion-item class=\"mb-10\">\r\n                <ion-label for=\"ingredients\">Ingredients</ion-label>\r\n                <ion-chip (click)=\"searchFoodModal()\">\r\n                  <ion-icon name=\"restaurant\"></ion-icon>\r\n                  <ion-label>Search Ingredients</ion-label>\r\n                </ion-chip>\r\n              </ion-item>\r\n              <!-- <ion-list lines=\"none\" class=\"ingredients-list\" *ngFor=\"let data of scanData let i= index\">\r\n                <ion-item *ngIf=\"data.data.item_name;else typedata\" class=\"roundedcorner\">\r\n                  {{data.data.item_name}} \r\n                  <div class=\"close-ingredients\">\r\n                    <ion-icon ios=\"ios-close\" md=\"md-close\" (click)=\"removeApiData(i,data.data.item_name)\"></ion-icon>\r\n                  </div>\r\n                </ion-item>\r\n                \r\n                <ng-template #typedata>\r\n                  <ion-item *ngFor=\" let typeData of data.data let i= index\" class=\"roundedcorner\">\r\n                    {{typeData.food_name}} <div class=\"close-ingredients\">\r\n                      <ion-icon ios=\"ios-close\" md=\"md-close\" (click)=\"removeApiData(i,typeData.food_name)\"></ion-icon>\r\n                    </div>\r\n                  </ion-item>\r\n                </ng-template>\r\n              </ion-list> -->\r\n              \r\n              <ion-list lines=\"none\" class=\"ingredients-list \" *ngFor=\"let data of scanData let i= index\">\r\n                <ion-item *ngIf=\"data.data.item_name\" class=\"roundedcorner\">\r\n                  {{data.data.item_name}} \r\n                  <div class=\"close-ingredients\">\r\n                    <ion-icon ios=\"ios-close\" md=\"md-close\" (click)=\"removeApiData(i,data.data.item_name)\"></ion-icon>\r\n                  </div>\r\n                </ion-item>\r\n                    <ion-item *ngFor=\" let typeData of data.data let f= index\" class=\"\">\r\n                      <div class=\"img-container\">\r\n                        <img src=\"{{typeData.photo.thumb}}\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"nutrition-container\" >\r\n                        <ion-label class=\"nutrition-title\">{{typeData.food_name}}</ion-label>\r\n                        <div class=\"nutrition-details\">\r\n                          <div class=\"nutrition-left\">\r\n                            <div class=\"nutrition-quantity\">\r\n                              <!-- <ion-icon class=\"closeicon\" ios=\"ios-remmove\" md=\"md-remove\" (click)=\"decrement()\"></ion-icon> -->\r\n                              <ion-input type=\"number\" class=\"nutrition-input\" aria-readonly=\"true\" value=\"{{typeData?.newQty}}\"></ion-input>\r\n                              <!-- <ion-icon class=\"closeicon\" ios=\"ios-add\" md=\"md-add\" (click)=\"increment()\"></ion-icon> -->\r\n                            </div>\r\n                            <ion-select class=\"nutrition-select\" (ionChange)=\"detailsUpdate(f,typeData.food_name,$event)\"  interface=\"popover\" placeholder=\"Select Measure\">\r\n                              <ion-select-option *ngFor=\" let measures of typeData.alt_measures let i= index\" [selected]=\"i == 0\" value=\"{{measures.measure}}\">{{measures.measure}}</ion-select-option>\r\n                            </ion-select>\r\n                            <div class=\"nutrition-quantity\">\r\n                              <ion-label>{{typeData?.newCal.toFixed(2)}} Cal</ion-label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"nutrition-right\">\r\n                            <ion-icon class=\"closeicon\" ios=\"ios-trash\" md=\"md-trash\" (click)=\"removeApiData(f,typeData.food_name)\"></ion-icon>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-no-padding ion-padding-horizontal\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding nutrition-form\">\r\n          <div class=\"nutrition-form instructionsBlock mt-20\">\r\n            <ion-list-header class=\"ion-no-padding min-height-auto\">Instructions</ion-list-header>\r\n            <ion-list class=\"ion-no-padding mb-10\" *ngFor=\"let item of t.controls; let i = index\">\r\n              <ion-item [formGroup]=\"item\">\r\n                <ion-input formControlName=\"name\" placeholder=\"Enter Instructions\"></ion-input>\r\n                <ion-button class=\"btn-square green\" (click)=\"removeInstruction(i)\" *ngIf=\"i!=0\">\r\n                  <ion-icon ios=\"ios-remove\" md=\"md-remove\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-button class=\"btn-square btn-add green\" (click)=\"addInstruction()\">\r\n              <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n          <!-- <ion-item>\r\n            <ion-label for=\"ingredients\">Instruction</ion-label>\r\n            <ion-input class=\"ion-text-right\" name=\"skillValue\" placeholder=\"Enter Instruction\"></ion-input>\r\n            <input type=\"button\" value=\"+\" (click)=\"addInstruction()\">\r\n          </ion-item> -->\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"ion-no-padding mt-20\">\r\n          <ion-segment class=\"top-segment\">\r\n            <ion-segment-button class=\"segment-button-checked\" style=\"max-width: 100%;\" checked>\r\n              <ion-label>Add Beverages</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n          <ion-item>\r\n            <ion-label>Select Beverage</ion-label>\r\n            <ion-select placeholder=\"Type\"  formControlName=\"nutriBevrageType\">\r\n              <ion-select-option value=\"1\">Coffee</ion-select-option>\r\n              <ion-select-option value=\"2\">Milk</ion-select-option>\r\n              <ion-select-option value=\"3\">Fruit drink</ion-select-option>\r\n              <ion-select-option value=\"4\">Soda</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>          \r\n          <ion-label style=\"color: #000;\">Select Type</ion-label>\r\n          <ion-list class=\"beverages-inputs\" style=\"padding-top: 0;\">\r\n            <ion-item>\r\n              <ion-label>Select Option</ion-label>\r\n              <ion-select placeholder=\"Options\" formControlName=\"bevragveOption\">\r\n                <ion-select-option value=\"1\">Bottle</ion-select-option>\r\n                <ion-select-option value=\"2\">Glass</ion-select-option>\r\n                <ion-select-option value=\"3\">Bowl</ion-select-option>\r\n                <ion-select-option value=\"3\">Cup</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Select Quantity</ion-label>\r\n              <ion-select placeholder=\"Quantity\"  formControlName=\"bevragveQnty\">\r\n                <ion-select-option>1</ion-select-option>\r\n                <ion-select-option>2</ion-select-option>\r\n                <ion-select-option>3</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>           \r\n          </ion-list>          \r\n          <ion-label style=\"color: #000;\">Select Measure/Units</ion-label>\r\n          <ion-list class=\"beverages-inputs\" style=\"padding-top: 0;\">\r\n            <ion-item>\r\n              <ion-input placeholder=\"Enter Quantity\"  formControlName=\"unitQnty\" type=\"number\"  color=\"light\" >\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Select Unit</ion-label>\r\n              <ion-select placeholder=\"Unit\" formControlName=\"bevragveUnit\">\r\n                <ion-select-option value=\"1\">Liter</ion-select-option>\r\n                <ion-select-option value=\"2\">Milliliter</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n          <!-- <ion-item lines=\"none\">\r\n            <ion-label>Included in this meal</ion-label>\r\n            <ion-toggle slot=\"start\" formControlName=\"bevragveinclude\" checked=\"false\" ></ion-toggle>\r\n          </ion-item> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showPreview\">\r\n    <app-nutrition-preview></app-nutrition-preview>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition-preview/nutrition-preview.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/nutrition/nutrition-preview/nutrition-preview.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutritionNutritionPreviewNutritionPreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".swiper-slide {\n  background: #fbfbfb; }\n\n.grey-header {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  font-size: 0.75rem;\n  color: #000;\n  text-transform: uppercase; }\n\n.ingredient-list ion-item, .instructions-list ion-item {\n  --min-height:auto; }\n\n.ingredient-list ion-item p, .instructions-list ion-item p {\n  width: 100%;\n  border-bottom: 1px solid whitesmoke;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  line-height: 1.5; }\n\n.ingredient-list ion-item:last-child p, .instructions-list ion-item:last-child p {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n\n.nutrition-head h4 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #000; }\n\n.nutrition-head p {\n  line-height: 1.5; }\n\n.nutrition-sub {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  margin-right: 20px; }\n\n.nutrition-sub:last-child {\n  margin-right: 0; }\n\n.nutrition-sub ion-icon {\n  font-size: 1rem;\n  margin-right: 3px;\n  color: #26a69a; }\n\n.nutrition-flex {\n  display: flex;\n  align-items: center; }\n\n.details-list {\n  padding: 0; }\n\n.details-list ion-item {\n    padding-top: 0;\n    --min-height: auto;\n    font-size: 0.85rem; }\n\n.details-list ion-label {\n    margin: 0; }\n\n.position-relative {\n  position: relative; }\n\n.instructions-list .beveragesList p:first-child {\n  width: 5%; }\n\n.instructions-list .beveragesList + ion-item p:first-child {\n  width: 5%; }\n\n.preview-img img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top; }\n\nion-card {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-bottom: 4px solid #f1f1f1; }\n\nion-card ion-card-header ion-fab {\n    position: absolute;\n    top: 13px;\n    right: 15px;\n    color: #26a69a; }\n\nion-list.ingredient-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px; }\n\nion-list.ingredient-list ion-list-header {\n    color: #26a69a;\n    font-size: .85rem;\n    font-weight: 500; }\n\nion-list.instructions-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px; }\n\nion-list.instructions-list ion-list-header {\n    color: #26a69a;\n    font-size: .85rem;\n    font-weight: 500; }\n\n.ingredientItems {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 15px; }\n\n.ingredientItems p {\n    background: #f1f1f1;\n    margin-right: 5px;\n    border-radius: 30px;\n    padding: 4px 13px;\n    margin-bottom: 5px; }\n\n.preview-img {\n  margin-bottom: 10px; }\n\n.preview-img ion-slide img {\n    height: 250px;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uL251dHJpdGlvbi1wcmV2aWV3L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxudXRyaXRpb25cXG51dHJpdGlvbi1wcmV2aWV3XFxudXRyaXRpb24tcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFjLG1CQUFtQixFQUFBOztBQUNqQztFQUFhLHlCQUF5QjtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyx5QkFBeUIsRUFBQTs7QUFDbkg7RUFBdUQsaUJBQWEsRUFBQTs7QUFDcEU7RUFBMkQsV0FBVztFQUFDLG1DQUFtQztFQUFDLG9CQUFvQjtFQUFDLG1CQUFtQjtFQUFDLGdCQUFnQixFQUFBOztBQUNwSztFQUFpRixtQkFBbUI7RUFBQyxpQkFBaUI7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDdkk7RUFBbUIsZUFBZTtFQUFDLGdCQUFnQjtFQUFDLFdBQVcsRUFBQTs7QUFDL0Q7RUFBa0IsZ0JBQWdCLEVBQUE7O0FBQ2xDO0VBQWUsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQixFQUFBOztBQUN0RjtFQUEwQixlQUFlLEVBQUE7O0FBQ3pDO0VBQXdCLGVBQWU7RUFBQyxpQkFBaUI7RUFBQyxjQUFjLEVBQUE7O0FBQ3hFO0VBQWdCLGFBQWE7RUFBRSxtQkFBbUIsRUFBQTs7QUFFbEQ7RUFBYyxVQUFVLEVBQUE7O0FBQXhCO0lBQ2EsY0FBYztJQUFDLGtCQUFhO0lBQU0sa0JBQWtCLEVBQUE7O0FBRGpFO0lBRWMsU0FBUyxFQUFBOztBQUV2QjtFQUFtQixrQkFBa0IsRUFBQTs7QUFDckM7RUFFc0IsU0FBUyxFQUFBOztBQUYvQjtFQUtzQixTQUFTLEVBQUE7O0FBSS9CO0VBQWlCLGFBQWE7RUFBQyxXQUFXO0VBQUMsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUFFLHVCQUFvQjtLQUFwQixvQkFBb0IsRUFBQTs7QUFDbEY7RUFBUyxZQUFZO0VBQUMsZ0JBQWdCO0VBQUMsU0FBUztFQUFDLGdDQUFnQyxFQUFBOztBQUFqRjtJQUVnQixrQkFBa0I7SUFBQyxTQUFTO0lBQUMsV0FBVztJQUFDLGNBQWMsRUFBQTs7QUFHdkU7RUFBeUIsVUFBVTtFQUFDLGdDQUFnQztFQUFDLG9CQUFvQixFQUFBOztBQUF6RjtJQUNvQixjQUFjO0lBQUMsaUJBQWlCO0lBQUMsZ0JBQWdCLEVBQUE7O0FBRXJFO0VBQTJCLFVBQVU7RUFBQyxnQ0FBZ0M7RUFBQyxvQkFBb0IsRUFBQTs7QUFBM0Y7SUFDb0IsY0FBYztJQUFDLGlCQUFpQjtJQUFDLGdCQUFnQixFQUFBOztBQUVyRTtFQUFpQixhQUFhO0VBQUMsZUFBZTtFQUFDLGVBQWUsRUFBQTs7QUFBOUQ7SUFDTyxtQkFBbUI7SUFBQyxpQkFBaUI7SUFBQyxtQkFBbUI7SUFBQyxpQkFBaUI7SUFBQyxrQkFBa0IsRUFBQTs7QUFFckc7RUFBYSxtQkFBbUIsRUFBQTs7QUFBaEM7SUFFWSxhQUFhO0lBQUMsV0FBVztJQUFDLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFBSywwQkFBdUI7T0FBdkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9udXRyaXRpb24vbnV0cml0aW9uLXByZXZpZXcvbnV0cml0aW9uLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVyLXNsaWRle2JhY2tncm91bmQ6ICNmYmZiZmI7fVxyXG4uZ3JleS1oZWFkZXJ7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTttYXJnaW4tYm90dG9tOiAxNXB4O2ZvbnQtc2l6ZTogMC43NXJlbTtjb2xvcjogIzAwMDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO31cclxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbSwgLmluc3RydWN0aW9ucy1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDphdXRvfVxyXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtIHAsIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbSBwe3dpZHRoOiAxMDAlO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO3BhZGRpbmctYm90dG9tOiAxMHB4O21hcmdpbi1ib3R0b206IDEwcHg7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCBwLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCBwe2JvcmRlci1ib3R0b206IG5vbmU7cGFkZGluZy1ib3R0b206IDA7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5udXRyaXRpb24taGVhZCBoNHtmb250LXNpemU6IDFyZW07Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjogIzAwMDt9XHJcbi5udXRyaXRpb24taGVhZCBwe2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4ubnV0cml0aW9uLXN1Yntmb250LXNpemU6IDAuODVyZW07ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbi1yaWdodDogMjBweDt9XHJcbi5udXRyaXRpb24tc3ViOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OiAwO31cclxuLm51dHJpdGlvbi1zdWIgaW9uLWljb257Zm9udC1zaXplOiAxcmVtO21hcmdpbi1yaWdodDogM3B4O2NvbG9yOiAjMjZhNjlhO31cclxuLm51dHJpdGlvbi1mbGV4e2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4vLyAuYWRkbW9yZXtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDEwcHg7dG9wOiAxMHB4O2NvbG9yOiAjRkZGO2ZvbnQtc2l6ZTogMS41cmVtO3otaW5kZXg6IDk5O3dpZHRoOiAzOHB4O2hlaWdodDogMzhweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO31cclxuLmRldGFpbHMtbGlzdHtwYWRkaW5nOiAwO1xyXG4gICAgaW9uLWl0ZW17cGFkZGluZy10b3A6IDA7LS1taW4taGVpZ2h0OiBhdXRvO2ZvbnQtc2l6ZTogMC44NXJlbTt9XHJcbiAgICBpb24tbGFiZWx7bWFyZ2luOiAwO31cclxufVxyXG4ucG9zaXRpb24tcmVsYXRpdmV7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmluc3RydWN0aW9ucy1saXN0e1xyXG4gICAgLmJldmVyYWdlc0xpc3R7XHJcbiAgICAgICAgcDpmaXJzdC1jaGlsZHt3aWR0aDogNSU7fVxyXG4gICAgfVxyXG4gICAgLmJldmVyYWdlc0xpc3QraW9uLWl0ZW17XHJcbiAgICAgICAgcDpmaXJzdC1jaGlsZHt3aWR0aDogNSU7fVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJldmlldy1pbWcgaW1ne2hlaWdodDogMjUwcHg7d2lkdGg6IDEwMCU7b2JqZWN0LWZpdDogY292ZXI7IG9iamVjdC1wb3NpdGlvbjogdG9wO31cclxuaW9uLWNhcmR7Ym9yZGVyOiBub25lO2JveC1zaGFkb3c6IG5vbmU7bWFyZ2luOiAwO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgIGlvbi1mYWJ7cG9zaXRpb246IGFic29sdXRlO3RvcDogMTNweDtyaWdodDogMTVweDtjb2xvcjogIzI2YTY5YTt9XHJcbiAgICB9XHJcbn1cclxuaW9uLWxpc3QuaW5ncmVkaWVudC1saXN0e3BhZGRpbmc6IDA7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7cGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBpb24tbGlzdC1oZWFkZXJ7Y29sb3I6ICMyNmE2OWE7Zm9udC1zaXplOiAuODVyZW07Zm9udC13ZWlnaHQ6IDUwMDt9XHJcbn1cclxuaW9uLWxpc3QuaW5zdHJ1Y3Rpb25zLWxpc3R7cGFkZGluZzogMDtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGlvbi1saXN0LWhlYWRlcntjb2xvcjogIzI2YTY5YTtmb250LXNpemU6IC44NXJlbTtmb250LXdlaWdodDogNTAwO31cclxufVxyXG4uaW5ncmVkaWVudEl0ZW1ze2Rpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO3BhZGRpbmc6IDAgMTVweDtcclxuICAgIHAge2JhY2tncm91bmQ6ICNmMWYxZjE7bWFyZ2luLXJpZ2h0OiA1cHg7Ym9yZGVyLXJhZGl1czogMzBweDtwYWRkaW5nOiA0cHggMTNweDttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG59XHJcbi5wcmV2aWV3LWltZ3ttYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaW9uLXNsaWRle1xyXG4gICAgICAgIGltZ3toZWlnaHQ6IDI1MHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvdmVyOyAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjt9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition-preview/nutrition-preview.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/nutrition/nutrition-preview/nutrition-preview.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NutritionPreviewComponent */

  /***/
  function srcAppNutritionNutritionPreviewNutritionPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionPreviewComponent", function () {
      return NutritionPreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NutritionPreviewComponent = /*#__PURE__*/function () {
      function NutritionPreviewComponent(commonService, nutritionService, navCtrl, router, fb) {
        var _this = this;

        _classCallCheck(this, NutritionPreviewComponent);

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
        this.totalMinerals = new Array();
        this.apiIngredients = '';
        this.submitted = false;
        this.items = [{
          expanded: false
        }];
        this.nutritionService.currentNutritionData.subscribe(function (data) {
          _this.nutritionData = data;
          _this.images = data['form'].file;
        });
        console.log(this.nutritionData.form.nutriBevrageType);
        console.log(this.nutritionData['minerals'], 'mmm');
        var cal = 0;
        var carbo = 0;
        var prot = 0;
        var fat = 0;
        var sug = 0;
        var chol = 0;
        this.nutritionData.minerals.filter(function (value) {
          if (value.food_name) {
            _this.apiIngredients += value['food_name'] + ',';
          }

          if (value.item_name) {
            _this.apiIngredients += value['item_name'] + ',';
          }

          cal = cal + value['newCal'];
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
        this.totalMinerals['chol'] = chol; // console.log(this.apiIngredients);
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
          totalChol: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](chol)
        });
      }

      _createClass(NutritionPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log(this.nutritionService.confirmEvent);
          this.subscription = this.nutritionService.confirmEvent.subscribe(function (data) {
            // console.log(data);
            if (data) {
              _this2.toSave();
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.mineralForm.controls;
        }
      }, {
        key: "toSave",
        value: function toSave() {
          var _this3 = this;

          console.log('save api called');
          this.submitted = true;

          if (this.mineralForm.invalid) {
            this.nutritionService.confirmEvent.next(false);
            return;
          }

          this.commonService.presentLoader();
          this.nutritionService.insertNutrition(this.mineralForm.value).subscribe(function (data) {
            _this3.commonService.dismissLoader();

            console.log(data);

            _this3.router.navigate(['/nutrition-list']);
          }, function (err) {
            _this3.commonService.dismissLoader();
          });
        }
      }, {
        key: "expandItem",
        value: function expandItem(item) {
          console.log(item);

          if (item.expanded) {
            item.expanded = false;
          } else {
            this.items.map(function (listItem) {
              if (item == listItem) {
                listItem.expanded = !listItem.expanded;
              } else {
                listItem.expanded = false;
              }

              return listItem;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('destroyed in seconds');
          this.subscription.unsubscribe();
        }
      }]);

      return NutritionPreviewComponent;
    }();

    NutritionPreviewComponent.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["NutritionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    NutritionPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nutrition-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nutrition-preview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition-preview/nutrition-preview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nutrition-preview.component.scss */
      "./src/app/nutrition/nutrition-preview/nutrition-preview.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["NutritionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], NutritionPreviewComponent);
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/nutrition/nutrition-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: NutritionPageRoutingModule */

  /***/
  function srcAppNutritionNutritionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionPageRoutingModule", function () {
      return NutritionPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nutrition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nutrition.page */
    "./src/app/nutrition/nutrition.page.ts");

    var routes = [{
      path: '',
      component: _nutrition_page__WEBPACK_IMPORTED_MODULE_3__["NutritionPage"]
    }];

    var NutritionPageRoutingModule = function NutritionPageRoutingModule() {
      _classCallCheck(this, NutritionPageRoutingModule);
    };

    NutritionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NutritionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/nutrition/nutrition.module.ts ***!
    \***********************************************/

  /*! exports provided: NutritionPageModule */

  /***/
  function srcAppNutritionNutritionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionPageModule", function () {
      return NutritionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nutrition-routing.module */
    "./src/app/nutrition/nutrition-routing.module.ts");
    /* harmony import */


    var _nutrition_preview_nutrition_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nutrition-preview/nutrition-preview.component */
    "./src/app/nutrition/nutrition-preview/nutrition-preview.component.ts");
    /* harmony import */


    var _nutrition_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nutrition.page */
    "./src/app/nutrition/nutrition.page.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../profile/components.modules */
    "./src/app/profile/components.modules.ts");

    var NutritionPageModule = function NutritionPageModule() {
      _classCallCheck(this, NutritionPageModule);
    };

    NutritionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"], _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__["NutritionPageRoutingModule"]],
      entryComponents: [_nutrition_preview_nutrition_preview_component__WEBPACK_IMPORTED_MODULE_6__["NutritionPreviewComponent"]],
      declarations: [_nutrition_page__WEBPACK_IMPORTED_MODULE_7__["NutritionPage"], _nutrition_preview_nutrition_preview_component__WEBPACK_IMPORTED_MODULE_6__["NutritionPreviewComponent"]]
    })], NutritionPageModule);
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/nutrition/nutrition.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutritionNutritionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  color: #222 !important; }\n\n.btn-add {\n  position: absolute;\n  right: 0; }\n\n.ingredientsBlock ion-list ion-button {\n  bottom: 10px; }\n\n.ingredientsBlock ion-button {\n  top: 78px; }\n\n.instructionsBlock ion-list ion-button {\n  bottom: 10px; }\n\n.instructionsBlock ion-button {\n  top: 38px; }\n\nion-segment.top-segment {\n  height: 40px; }\n\nion-segment.top-segment ion-segment-button {\n    min-height: 40px; }\n\nion-segment.top-segment ion-segment-button ion-label {\n      margin: 0;\n      color: #000;\n      font-size: 0.75rem; }\n\nion-slides ion-slide img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n\nion-slides ion-slide ion-icon {\n  position: absolute;\n  right: 15px;\n  top: 0;\n  font-size: 28px;\n  color: red; }\n\nion-slides ion-slide div {\n  height: 100%;\n  display: flex;\n  height: 275px; }\n\nion-slides ion-slide div img {\n    -o-object-fit: contain;\n       object-fit: contain; }\n\nion-slides ion-slide div ion-icon {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    width: 24px;\n    height: 24px; }\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4; }\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0; }\n\n.nutrition-box {\n  display: flex;\n  align-items: center; }\n\n.img-container {\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  margin-right: 20px; }\n\n.nutrition-title {\n  font-size: 1rem;\n  color: #121212;\n  font-weight: 500; }\n\n.nutrition-container {\n  flex: 1; }\n\n.nutrition-details {\n  display: flex;\n  align-items: center;\n  margin-top: 10px; }\n\n.nutrition-left {\n  display: flex;\n  flex: 1; }\n\n.nutrition-right span {\n  font-size: 13px;\n  color: #8b8b8b; }\n\n.nutrition-quantity {\n  display: flex;\n  align-items: center;\n  margin-right: 15px; }\n\n.nutrition-input {\n  border: 0.5px solid #bbb;\n  border-radius: 5px;\n  max-width: 50px;\n  height: 30px;\n  margin: 0 5px; }\n\n.nutrition-select {\n  border: 0.5px solid #bbb;\n  border-radius: 5px;\n  min-width: 100px;\n  height: 30px;\n  font-size: 13px;\n  position: relative; }\n\n.closeicon {\n  color: #2e2d2d !important; }\n\n.roundedcorner {\n  width: 100% !important;\n  border-radius: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxudXRyaXRpb25cXG51dHJpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxzQkFBc0IsRUFBQTs7QUFDaEM7RUFBUyxrQkFBa0I7RUFBQyxRQUFRLEVBQUE7O0FBQ3BDO0VBRW1CLFlBQVksRUFBQTs7QUFGL0I7RUFJZSxTQUFTLEVBQUE7O0FBR3hCO0VBRW1CLFlBQVksRUFBQTs7QUFGL0I7RUFJZSxTQUFTLEVBQUE7O0FBRXhCO0VBQXdCLFlBQVksRUFBQTs7QUFBcEM7SUFDdUIsZ0JBQWdCLEVBQUE7O0FBRHZDO01BRWtCLFNBQVM7TUFBQyxXQUFXO01BQUMsa0JBQWtCLEVBQUE7O0FBRzFEO0VBRVksYUFBYTtFQUFDLFdBQVc7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQUMsMEJBQXVCO0tBQXZCLHVCQUF1QixFQUFBOztBQUYvRTtFQUdpQixrQkFBa0I7RUFBQyxXQUFXO0VBQUMsTUFBTTtFQUFDLGVBQWU7RUFBQyxVQUFVLEVBQUE7O0FBSGpGO0VBSVksWUFBWTtFQUFDLGFBQVk7RUFBQyxhQUFhLEVBQUE7O0FBSm5EO0lBS2dCLHNCQUFtQjtPQUFuQixtQkFBbUIsRUFBQTs7QUFMbkM7SUFNcUIsa0JBQWtCO0lBQUMsVUFBVTtJQUFDLFFBQVE7SUFBQyxXQUFXO0lBQUMsWUFBWSxFQUFBOztBQUlwRjtFQUNXLGNBQWEsRUFBQTs7QUFEeEI7RUFFYyxhQUFZLEVBQUE7O0FBRzFCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksT0FBTyxFQUFBOztBQUVYO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxhQUFhO0VBQ2IsT0FBTyxFQUFBOztBQUVYO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUVqQjtFQUNJLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kseUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbnV0cml0aW9uL251dHJpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7Y29sb3I6ICMyMjIgIWltcG9ydGFudDt9XHJcbi5idG4tYWRke3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMDt9XHJcbi5pbmdyZWRpZW50c0Jsb2Nre1xyXG4gICAgaW9uLWxpc3R7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntib3R0b206IDEwcHg7fVxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbnt0b3A6IDc4cHg7fVxyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zQmxvY2t7XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICBpb24tYnV0dG9ue2JvdHRvbTogMTBweDt9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue3RvcDogMzhweDt9XHJcbn1cclxuaW9uLXNlZ21lbnQudG9wLXNlZ21lbnR7aGVpZ2h0OiA0MHB4O1xyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue21pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgaW9uLWxhYmVse21hcmdpbjogMDtjb2xvcjogIzAwMDtmb250LXNpemU6IDAuNzVyZW07fVxyXG4gICAgfVxyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgaW1ne2hlaWdodDogMjUwcHg7d2lkdGg6IDEwMCU7b2JqZWN0LWZpdDogY292ZXI7b2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7fVxyXG4gICAgICAgIGlvbi1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMTVweDt0b3A6IDA7Zm9udC1zaXplOiAyOHB4O2NvbG9yOiByZWQ7fVxyXG4gICAgICAgIGRpdntoZWlnaHQ6IDEwMCU7ZGlzcGxheTpmbGV4O2hlaWdodDogMjc1cHg7XHJcbiAgICAgICAgICAgIGltZ3tvYmplY3QtZml0OiBjb250YWluO31cclxuICAgICAgICAgICAgaW9uLWljb257cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiA4cHg7dG9wOiA4cHg7d2lkdGg6IDI0cHg7aGVpZ2h0OiAyNHB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWl0ZW0uZmxvYXRpbmdJdGVte1xyXG5cdGlvbi1sYWJlbHtjb2xvcjojYTVhNGE0fVxyXG5cdGlvbi10ZXh0YXJlYXttYXJnaW4tdG9wOjB9XHJcbn1cclxuLy8gLnByZVRpbWVCb3h7ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogZmxleC1lbmQ7fVxyXG4ubnV0cml0aW9uLWJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbWctY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLm51dHJpdGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubnV0cml0aW9uLWNvbnRhaW5lcntcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLm51dHJpdGlvbi1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5udXRyaXRpb24tbGVmdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi5udXRyaXRpb24tcmlnaHQgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZ2IoMTM5LCAxMzksIDEzOSk7XHJcbn1cclxuLm51dHJpdGlvbi1xdWFudGl0eXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5udXRyaXRpb24taW5wdXR7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5udXRyaXRpb24tc2VsZWN0e1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2xvc2VpY29ue1xyXG4gICAgY29sb3I6IHJnYig0NiwgNDUsIDQ1KSAhaW1wb3J0YW50O1xyXG59XHJcbi5yb3VuZGVkY29ybmVye1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/nutrition/nutrition.page.ts ***!
    \*********************************************/

  /*! exports provided: NutritionPage */

  /***/
  function srcAppNutritionNutritionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionPage", function () {
      return NutritionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/settings.service */
    "./src/app/services/settings.service.ts");
    /* harmony import */


    var _modalContent_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modalContent/search-food/search-food.component */
    "./src/app/modalContent/search-food/search-food.component.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");

    var NutritionPage = /*#__PURE__*/function () {
      function NutritionPage(settingService, commonService, modalController, camera, fb, nutritionService, navCtrl, platform) {
        _classCallCheck(this, NutritionPage);

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
        this.selectedImage = []; // nextVisible: boolean = false;

        this.nextVisible = true;
        this['validation_messages'] = {
          nutriTitle: [{
            type: 'required',
            message: 'Title is required.'
          }, {
            type: 'maxLength',
            message: 'Maximum length 40 charecters'
          }],
          nutriDescription: [{
            type: 'required',
            message: 'Description is required.'
          }],
          nutriMealType: [{
            type: 'required',
            message: 'Meal Type is required'
          }],
          nutriServeSize: [{
            type: 'required',
            message: 'Serve Size is required'
          }],
          nutriPrepMin: [{
            type: 'required',
            message: 'Preperation time required.'
          }],
          nutriIngredients: [{
            type: 'required',
            message: 'Ingredients are required.'
          }],
          nutriBevrageType: [],
          appendedValue: []
        }; // ----------------------------- Open gallery  with multiple --------------//

        this.gallaryImgPath = [];
      }

      _createClass(NutritionPage, [{
        key: "increment",
        value: function increment() {
          this.quantity++;
        }
      }, {
        key: "decrement",
        value: function decrement() {
          this.quantity--;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "ionViewWillInit",
        value: function ionViewWillInit() {} // Reactiveform create

      }, {
        key: "createForm",
        value: function createForm() {
          this.nutritionForm = this.fb.group({
            nutriTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([//UsernameValidator.validUsername,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            nutriDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            nutriMealType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            nutriServeSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            // nutriPrepHrs: new FormControl('00'),
            nutriPrepHrs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('00'),
            nutriPrepMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('00', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
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
            appendedValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.nutritionForm.controls;
        }
      }, {
        key: "t",
        get: function get() {
          return this.f.nutriInstruction;
        }
      }, {
        key: "tig",
        get: function get() {
          return this.f.nutriIngredients;
        } //called second component 

      }, {
        key: "toPreview",
        value: function toPreview() {
          console.log(this.nutritionService.confirmEvent);
          var test = [];
          this.scanData.filter(function (el) {
            if (Array.isArray(el['data'])) {
              test = [].concat(_toConsumableArray(test), _toConsumableArray(el['data']));
            } else {
              test.push(el.data);
            }
          });
          this.submitted = true;

          if (this.nutritionForm.invalid) {
            return;
          }

          this.showPreview = true;
          this.nutritionForm.value.file = this.gallaryImgPath;
          var tempData = new Array();
          tempData['form'] = this.nutritionForm.value;
          tempData['minerals'] = new Array();
          tempData['minerals'] = test;
          console.log(tempData);
          this.nutritionService.changeMessage(tempData);
        } // --------------------- S E A R C H   F O O D    P O P - U P ---------------------------//

      }, {
        key: "addInstruction",
        value: function addInstruction() {
          var numberOfTickets = 1;
          this.t.push(this.fb.group({
            name: ['']
          }));
        }
      }, {
        key: "removeInstruction",
        value: function removeInstruction(i) {
          console.log(i);
          var control = this.nutritionForm.controls['nutriInstruction'];
          control.removeAt(i);
        }
      }, {
        key: "addIngredients",
        value: function addIngredients() {
          var numberOfTickets = 1;
          this.tig.push(this.fb.group({
            name: ['']
          }));
        }
      }, {
        key: "removeIngredients",
        value: function removeIngredients(i) {
          console.log(i);
          var control = this.nutritionForm.controls['nutriIngredients'];
          control.removeAt(i);
        }
      }, {
        key: "searchFoodModal",
        value: function searchFoodModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modalContent_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_6__["SearchFoodComponent"],
                      cssClass: '',
                      componentProps: {
                        "scanData": this.scanData
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (d) {
                      // console.log(d);
                      if (d.data) {
                        _this4.scanData.push(d);

                        _this4.scanData.forEach(function (element) {
                          if (Array.isArray(element.data)) {
                            element.data.forEach(function (el) {
                              el.newQty = el.alt_measures[0].qty; //  el.newCal =  el.nf_calories;

                              el.newCal = el.alt_measures[0].serving_weight / el.serving_weight_grams * el.nf_calories;
                              el.nf_total_carbohydrate = el.alt_measures[0].serving_weight / el.serving_weight_grams * el.nf_total_carbohydrate;
                              el.nf_protein = el.alt_measures[0].serving_weight / el.serving_weight_grams * el.nf_protein;
                              el.nf_total_fat = el.alt_measures[0].serving_weight / el.serving_weight_grams * el.nf_total_fat;
                              el.nf_sugars = el.alt_measures[0].serving_weight / el.serving_weight_grams * el.nf_sugars;
                              el.nf_cholesterol = el.alt_measures[0].serving_weight / el.serving_weight_grams * el.nf_cholesterol; //   el.alt_measures.forEach(el => {
                              //   el.newQty = el.qty;
                              // });
                            });
                          }
                        });
                      }

                      console.log(_this4.scanData);
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "removeApiData",
        value: function removeApiData(i, fName) {
          var _this5 = this;

          console.log(i); // console.log(f);

          this.scanData.forEach(function (element) {
            if (Array.isArray(element.data)) {
              element.data.forEach(function (el) {
                if (el.food_name == fName) {
                  element.data.splice(i, 1);
                }
              });
            } else {
              if (element.data.item_name == fName) {
                _this5.scanData.splice(i, 1);
              }
            }
          });
          console.log(this.scanData);
        }
      }, {
        key: "detailsUpdate",
        value: function detailsUpdate(i, food, value) {
          var abc = value.target.value;
          this.scanData.forEach(function (element) {
            if (Array.isArray(element.data)) {
              element.data.forEach(function (el) {
                element.data[i].alt_measures.forEach(function (el1) {
                  if (el1.measure == abc && element.data[i].food_name == food) {
                    console.log(element.data[i]);
                    element.data[i].newQty = el1.qty;
                    element.data[i].newCal = el1.serving_weight / element.data[i].serving_weight_grams * element.data[i].nf_calories;
                    element.data[i].nf_total_carbohydrate = el1.serving_weight / element.data[i].serving_weight_grams * element.data[i].nf_total_carbohydrate;
                    element.data[i].nf_protein = el1.serving_weight / element.data[i].serving_weight_grams * element.data[i].nf_protein;
                    element.data[i].nf_total_fat = el1.serving_weight / element.data[i].serving_weight_grams * element.data[i].nf_total_fat;
                    element.data[i].nf_sugars = el1.serving_weight / element.data[i].serving_weight_grams * element.data[i].nf_sugars;
                    element.data[i].nf_cholesterol = el1.serving_weight / element.data[i].serving_weight_grams * element.data[i].nf_cholesterol;
                  }
                });
              });
            }
          });
        }
      }, {
        key: "openGallery",
        value: function openGallery() {
          this.pickFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        key: "takeSnap",
        value: function takeSnap() {
          console.log('sad');
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        key: "pickImage",
        value: function pickImage(sourceType) {
          var _this6 = this;

          var options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this6.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

            console.log('viraj', imageData);
            _this6.nextVisible = true;
          }, function (err) {// Handle error
            // alert(err); 
          });
        }
      }, {
        key: "pickFromGallery",
        value: function pickFromGallery(sourceType) {
          var _this7 = this;

          var options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this7.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

            console.log('viraj', imageData);
            _this7.nextVisible = true;
          }, function (err) {// Handle error
            // alert(err);
          });
        } // ------------------------------  I M G  -  P I C K E R  ENDS ------------------------------//

      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "confirm",
        value: function confirm() {
          this.nutritionService.confirmEvent.next(true);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
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
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('destroy');
        }
      }, {
        key: "removeImg",
        value: function removeImg(index) {
          this.gallaryImgPath.splice(index, 1);
        }
      }]);

      return NutritionPage;
    }();

    NutritionPage.ctorParameters = function () {
      return [{
        type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_8__["NutritionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], NutritionPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userNameRef', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], NutritionPage.prototype, "userNameRefElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('skillsSetRef', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], NutritionPage.prototype, "skillsSetRefElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_modalContent_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_6__["SearchFoodComponent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NutritionPage.prototype, "child", void 0);
    NutritionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nutrition',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nutrition.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nutrition.page.scss */
      "./src/app/nutrition/nutrition.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"], _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_8__["NutritionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], NutritionPage);
    /***/
  }
}]);
//# sourceMappingURL=nutrition-nutrition-module-es5.js.map