(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nutrition-list-nutrition-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header three-block ion-no-padding\">\r\n  <ion-list class=\"top-heading\">\r\n    <ion-item>\r\n      <ion-buttons slot=\"start\" (click)=\"closeModal()\">\r\n        <ion-icon ios=\"ios-arrow-back\"  md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>{{nutriDetails?.title}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <a>\r\n          <ion-icon ios=\"ios-trash\" md=\"md-trash\" (click)=\"deleteNutrition(nutriDetails.id)\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-card-content class=\"ion-no-padding item-content\">\r\n    <div class=\"preview-img\" *ngIf=\"nutriDetails.img_array\">\r\n      <!-- <ion-button (click)=\"slidePrev()\" class=\"slidebtns slideBack\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-button> -->\r\n      <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider pager=\"true\" (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\r\n        <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of nutriDetails.img_array; let i =index;\">\r\n          <img src=\"{{url}}{{imgpath}}\" /> \r\n        </ion-slide>\r\n      </ion-slides>\r\n      <!-- <ion-button (click)=\"slideNext()\" class=\"slidebtns slideNext\">\r\n        <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n      </ion-button> -->\r\n    </div> \r\n</ion-card-content>\r\n  <div class=\"nutrition-head\">\r\n    <p>{{nutriDetails?.description}}</p>\r\n    <div class=\"nutrition-flex\">\r\n      <div class=\"nutrition-sub\">\r\n        <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\"></ion-icon> {{nutriDetails?.serving_size}}\r\n      </div>\r\n      <div class=\"nutrition-sub ion-text-right\">\r\n        <!-- <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon> {{nutriDetails?.preparation_time }} (hh:mm) -->\r\n        <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon> {{nutriDetails?.preparation_time[0]}} hrs {{nutriDetails?.preparation_time[1]}} min\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-card  *ngFor=\"let item of items\">\r\n\r\n    <ion-card-header class=\"more-card-header\" (click)=\"expandItem(item)\" >\r\n      <!-- <ion-card-title>More Details</ion-card-title> -->\r\n      <ion-card-title>Nutrition Details</ion-card-title>\r\n      <ion-fab size=\"small\">\r\n        <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\"></ion-icon>\r\n      </ion-fab>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n   \r\n      <app-expandable expandHeight=\"300px\" [expanded]=\"item.expanded\">\r\n        <ion-list class=\"details-list\" lines=\"none\">\r\n          <ion-item>\r\n            <ion-label>Calories</ion-label>\r\n            <ion-text>{{totalMinerals.cal | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Carbohydrates</ion-label>\r\n            <ion-text>{{totalMinerals.carbo | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Proteins</ion-label>\r\n            <ion-text>{{totalMinerals.prot | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Fats</ion-label>\r\n            <ion-text>{{totalMinerals.fat | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Sugar</ion-label>\r\n            <ion-text>{{totalMinerals.sug | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Cholestrol</ion-label>\r\n            <ion-text>{{totalMinerals.chol | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n        </ion-list>\r\n      </app-expandable> \r\n      \r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-list lines=\"none\" class=\"ingredient-list\">\r\n    <ion-list-header>Ingredients</ion-list-header>\r\n    <!-- <ion-item *ngFor=\"let item of nutriDetails?.ingredient_array; let i=index;\">\r\n      <p>{{i+1}}. {{item}}</p>\r\n    </ion-item> -->\r\n    <div class=\"ingredientItems\">\r\n      <p *ngFor=\"let item of nutriDetails?.ingredient_array; let i=index;\">{{item}}</p>\r\n    </div>\r\n\r\n  </ion-list>\r\n  <ion-list lines=\"none\" class=\"instructions-list\">\r\n    <ion-list-header>Instructions</ion-list-header>\r\n    <ion-item *ngFor=\"let item  of nutriDetails?.instruction_array; let i=index;\">\r\n      <p>{{i+1}}. {{item}}</p>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" class=\"instructions-list\">\r\n    <ion-list-header>Beverages </ion-list-header>\r\n    <div class=\"ingredientItems\">\r\n      <p *ngIf=\"nutriDetails.bevrage_type == 1\">Cofee</p>\r\n      <p *ngIf=\"nutriDetails.bevrage_type == 2\">Milk</p>\r\n      <p *ngIf=\"nutriDetails.bevrage_type == 3\">Fruit Drink</p>    \r\n      <p *ngIf=\"nutriDetails.bevrage_type == 4\">Soda</p>\r\n      <p>{{nutriDetails.bevrage_quantity}} <span *ngIf=\"nutriDetails.bevrage_quantity == 1\">Bottle</span>\r\n      <span *ngIf=\"nutriDetails.bevrage_quantity == 2\">Glass</span>\r\n      <span *ngIf=\"nutriDetails.bevrage_quantity == 3\">Bowl</span>    \r\n      <span *ngIf=\"nutriDetails.bevrage_quantity == 4\">Cup</span></p>\r\n      <p>{{nutriDetails.unit_quantity}} <span *ngIf=\"nutriDetails.bevrage_unit == 1\">Liter</span> <span *ngIf=\"nutriDetails.bevrage_unit == 2\">Milliliter</span></p>\r\n    </div>\r\n    \r\n    <ion-item class=\"beveragesList\">\r\n      \r\n    </ion-item> \r\n    \r\n    <ion-item >\r\n      \r\n    </ion-item>\r\n    <!-- <ion-item >\r\n      <p *ngIf=\"nutritionData.form.bevragveinclude\" >This beverage should consume with  this nutrition</p>\r\n       </ion-item> -->\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-list.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-list.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header three-block ion-no-padding\">\r\n  <ion-list class=\"top-heading\">\r\n    <ion-item>\r\n      <ion-buttons class=\"ion-no-margin\" *ngIf=\"!showPreview\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <ion-icon ios=\"ios-arrow-back\"  md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Nutrition List</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <!-- <a>\r\n          <ion-icon ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\r\n        </a> -->\r\n        <a [routerLink]=\"['/nutrition']\">\r\n          <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <div *ngIf=\"nutritionList\">\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Breakfast</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'BreakFast':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty \" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No BreakFast</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Brunch</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Brunch':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Brunch</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Lunch</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Lunch':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Lunch</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Snacks</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Snacks':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Snacks</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Dinner</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Dinner':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Dinner</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div *ngIf=\"!nutritionList\">\r\n    <ion-card class=\"item-card\" *ngFor=\"let skeleton of [].constructor(5)\">\r\n      <ion-skeleton-text class=\"grey-header green\" animated></ion-skeleton-text>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-slide {\n  background: #fbfbfb; }\n\n.grey-header {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  font-size: 0.75rem;\n  color: #000;\n  text-transform: uppercase; }\n\n.ingredient-list ion-item, .instructions-list ion-item {\n  --min-height:auto; }\n\n.ingredient-list ion-item p, .instructions-list ion-item p {\n  width: 100%;\n  border-bottom: 1px solid whitesmoke;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  line-height: 1.5; }\n\n.ingredient-list ion-item:last-child p, .instructions-list ion-item:last-child p {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n\n.nutrition-head h4 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #000; }\n\n.nutrition-head p {\n  line-height: 1.5; }\n\n.nutrition-sub {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  margin-right: 20px; }\n\n.nutrition-sub:last-child {\n  margin-right: 0; }\n\n.nutrition-sub ion-icon {\n  font-size: 1rem;\n  margin-right: 3px;\n  color: #26a69a; }\n\n.nutrition-flex {\n  display: flex;\n  align-items: center; }\n\n.details-list {\n  padding: 0; }\n\n.details-list ion-item {\n    padding-top: 0;\n    --min-height: auto;\n    font-size: 0.85rem; }\n\n.details-list ion-label {\n    margin: 0; }\n\n.position-relative {\n  position: relative; }\n\n.instructions-list .beveragesList p:first-child {\n  width: 5%; }\n\n.instructions-list .beveragesList + ion-item p:first-child {\n  width: 5%; }\n\n.preview-img img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: top;\n     object-position: top; }\n\nion-card {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-bottom: 4px solid #f1f1f1; }\n\nion-card ion-card-header ion-fab {\n    position: absolute;\n    top: 13px;\n    right: 15px;\n    color: #26a69a; }\n\nion-list.ingredient-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px; }\n\nion-list.ingredient-list ion-list-header {\n    color: #26a69a;\n    font-size: .85rem;\n    font-weight: 500; }\n\nion-list.instructions-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px; }\n\nion-list.instructions-list ion-list-header {\n    color: #26a69a;\n    font-size: .85rem;\n    font-weight: 500; }\n\n.ingredientItems {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 15px; }\n\n.ingredientItems p {\n    background: #f1f1f1;\n    margin-right: 5px;\n    border-radius: 30px;\n    padding: 4px 13px;\n    margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWRldGFpbC1tb2RhbC9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZVxcQk0vc3JjXFxhcHBcXG51dHJpdGlvbi1saXN0XFxudXRyaXRpb24tZGV0YWlsLW1vZGFsXFxudXRyaXRpb24tZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsbUJBQW1CLEVBQUE7O0FBQ2pDO0VBQWEseUJBQXlCO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsV0FBVztFQUFDLHlCQUF5QixFQUFBOztBQUNuSDtFQUF1RCxpQkFBYSxFQUFBOztBQUNwRTtFQUEyRCxXQUFXO0VBQUMsbUNBQW1DO0VBQUMsb0JBQW9CO0VBQUMsbUJBQW1CO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3BLO0VBQWlGLG1CQUFtQjtFQUFDLGlCQUFpQjtFQUFDLGdCQUFnQixFQUFBOztBQUN2STtFQUFtQixlQUFlO0VBQUMsZ0JBQWdCO0VBQUMsV0FBVyxFQUFBOztBQUMvRDtFQUFrQixnQkFBZ0IsRUFBQTs7QUFDbEM7RUFBZSxrQkFBa0I7RUFBQyxhQUFhO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3RGO0VBQTBCLGVBQWUsRUFBQTs7QUFDekM7RUFBd0IsZUFBZTtFQUFDLGlCQUFpQjtFQUFDLGNBQWMsRUFBQTs7QUFDeEU7RUFBZ0IsYUFBYTtFQUFFLG1CQUFtQixFQUFBOztBQUVsRDtFQUFjLFVBQVUsRUFBQTs7QUFBeEI7SUFDYSxjQUFjO0lBQUMsa0JBQWE7SUFBTSxrQkFBa0IsRUFBQTs7QUFEakU7SUFFYyxTQUFTLEVBQUE7O0FBRXZCO0VBQW1CLGtCQUFrQixFQUFBOztBQUNyQztFQUVzQixTQUFTLEVBQUE7O0FBRi9CO0VBS3NCLFNBQVMsRUFBQTs7QUFJL0I7RUFBaUIsYUFBYTtFQUFDLFdBQVc7RUFBQyxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQUUsdUJBQW9CO0tBQXBCLG9CQUFvQixFQUFBOztBQUNwRjtFQUFTLFlBQVk7RUFBQyxnQkFBZ0I7RUFBQyxTQUFTO0VBQUMsZ0NBQWdDLEVBQUE7O0FBQWpGO0lBRWdCLGtCQUFrQjtJQUFDLFNBQVM7SUFBQyxXQUFXO0lBQUMsY0FBYyxFQUFBOztBQUd2RTtFQUF5QixVQUFVO0VBQUMsZ0NBQWdDO0VBQUMsb0JBQW9CLEVBQUE7O0FBQXpGO0lBQ29CLGNBQWM7SUFBQyxpQkFBaUI7SUFBQyxnQkFBZ0IsRUFBQTs7QUFFckU7RUFBMkIsVUFBVTtFQUFDLGdDQUFnQztFQUFDLG9CQUFvQixFQUFBOztBQUEzRjtJQUNvQixjQUFjO0lBQUMsaUJBQWlCO0lBQUMsZ0JBQWdCLEVBQUE7O0FBRXJFO0VBQWlCLGFBQWE7RUFBQyxlQUFlO0VBQUMsZUFBZSxFQUFBOztBQUE5RDtJQUNPLG1CQUFtQjtJQUFDLGlCQUFpQjtJQUFDLG1CQUFtQjtJQUFDLGlCQUFpQjtJQUFDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWRldGFpbC1tb2RhbC9udXRyaXRpb24tZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZXtiYWNrZ3JvdW5kOiAjZmJmYmZiO31cclxuLmdyZXktaGVhZGVye3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTogMTVweDtmb250LXNpemU6IDAuNzVyZW07Y29sb3I6ICMwMDA7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XHJcbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW0sIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6YXV0b31cclxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbSBwLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW0gcHt3aWR0aDogMTAwJTtib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtwYWRkaW5nLWJvdHRvbTogMTBweDttYXJnaW4tYm90dG9tOiAxMHB4O2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQgcCwgLmluc3RydWN0aW9ucy1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQgcHtib3JkZXItYm90dG9tOiBub25lO3BhZGRpbmctYm90dG9tOiAwO21hcmdpbi1ib3R0b206IDA7fVxyXG4ubnV0cml0aW9uLWhlYWQgaDR7Zm9udC1zaXplOiAxcmVtO2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICMwMDA7fVxyXG4ubnV0cml0aW9uLWhlYWQgcHtsaW5lLWhlaWdodDogMS41O31cclxuLm51dHJpdGlvbi1zdWJ7Zm9udC1zaXplOiAwLjg1cmVtO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW4tcmlnaHQ6IDIwcHg7fVxyXG4ubnV0cml0aW9uLXN1YjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDogMDt9XHJcbi5udXRyaXRpb24tc3ViIGlvbi1pY29ue2ZvbnQtc2l6ZTogMXJlbTttYXJnaW4tcmlnaHQ6IDNweDtjb2xvcjogIzI2YTY5YTt9XHJcbi5udXRyaXRpb24tZmxleHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cclxuLy8gLmFkZG1vcmV7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxMHB4O3RvcDogMTBweDtjb2xvcjogI0ZGRjtmb250LXNpemU6IDEuNXJlbTt6LWluZGV4OiA5OTt3aWR0aDogMzhweDtoZWlnaHQ6IDM4cHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5kZXRhaWxzLWxpc3R7cGFkZGluZzogMDtcclxuICAgIGlvbi1pdGVte3BhZGRpbmctdG9wOiAwOy0tbWluLWhlaWdodDogYXV0bztmb250LXNpemU6IDAuODVyZW07fVxyXG4gICAgaW9uLWxhYmVse21hcmdpbjogMDt9XHJcbn1cclxuLnBvc2l0aW9uLXJlbGF0aXZle3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5pbnN0cnVjdGlvbnMtbGlzdHtcclxuICAgIC5iZXZlcmFnZXNMaXN0e1xyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGR7d2lkdGg6IDUlO31cclxuICAgIH1cclxuICAgIC5iZXZlcmFnZXNMaXN0K2lvbi1pdGVte1xyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGR7d2lkdGg6IDUlO31cclxuICAgIH1cclxufVxyXG5cclxuLnByZXZpZXctaW1nIGltZ3toZWlnaHQ6IDI1MHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47IG9iamVjdC1wb3NpdGlvbjogdG9wO31cclxuaW9uLWNhcmR7Ym9yZGVyOiBub25lO2JveC1zaGFkb3c6IG5vbmU7bWFyZ2luOiAwO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgIGlvbi1mYWJ7cG9zaXRpb246IGFic29sdXRlO3RvcDogMTNweDtyaWdodDogMTVweDtjb2xvcjogIzI2YTY5YTt9XHJcbiAgICB9XHJcbn1cclxuaW9uLWxpc3QuaW5ncmVkaWVudC1saXN0e3BhZGRpbmc6IDA7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7cGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBpb24tbGlzdC1oZWFkZXJ7Y29sb3I6ICMyNmE2OWE7Zm9udC1zaXplOiAuODVyZW07Zm9udC13ZWlnaHQ6IDUwMDt9XHJcbn1cclxuaW9uLWxpc3QuaW5zdHJ1Y3Rpb25zLWxpc3R7cGFkZGluZzogMDtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGlvbi1saXN0LWhlYWRlcntjb2xvcjogIzI2YTY5YTtmb250LXNpemU6IC44NXJlbTtmb250LXdlaWdodDogNTAwO31cclxufVxyXG4uaW5ncmVkaWVudEl0ZW1ze2Rpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO3BhZGRpbmc6IDAgMTVweDtcclxuICAgIHAge2JhY2tncm91bmQ6ICNmMWYxZjE7bWFyZ2luLXJpZ2h0OiA1cHg7Ym9yZGVyLXJhZGl1czogMzBweDtwYWRkaW5nOiA0cHggMTNweDttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NutritionDetailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionDetailModalComponent", function() { return NutritionDetailModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let NutritionDetailModalComponent = class NutritionDetailModalComponent {
    constructor(commonService, navParams, nutritionService, router, alertController) {
        this.commonService = commonService;
        this.navParams = navParams;
        this.nutritionService = nutritionService;
        this.router = router;
        this.alertController = alertController;
        this.items = [];
        // public sliderOpts: any = [];
        this.totalMinerals = new Array;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].imgUrl;
        this.sliderOpts = {
            initialSlide: 0,
            speed: 400,
            zoom: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0
        };
        this.items = [
            { expanded: false, },
        ];
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ionViewWillLeave() {
        this.slides.stopAutoplay();
    }
    //
    ionViewDidEnter() {
        // this.slides.startAutoplay();
        this.sliderOpts = {
            initialSlide: 0,
            speed: 400,
            zoom: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0
        };
    }
    ngOnInit() {
        this.nutriDetails = this.navParams.data.details;
        console.log(this.nutriDetails);
        if (this.nutriDetails.image_path) {
            this.nutriDetails.img_array = this.nutriDetails.image_path.split(',');
        }
        if (this.nutriDetails.ingredients) {
            this.nutriDetails.ingredient_array = this.nutriDetails.ingredients.split(',').filter(Boolean);
        }
        if (this.nutriDetails.instruction) {
            this.nutriDetails.instruction_array = this.nutriDetails.instruction.split(',').filter(Boolean);
        }
        if (this.nutriDetails.instruction) {
            this.nutriDetails.preparation_time = this.nutriDetails.preparation_time.split(':').filter(Boolean);
        }
        this.totalMinerals['cal'] = this.nutriDetails.total_calorie;
        this.totalMinerals['carbo'] = this.nutriDetails.total_carbohydrate;
        this.totalMinerals['prot'] = this.nutriDetails.total_protein;
        this.totalMinerals['fat'] = this.nutriDetails.total_fat;
        this.totalMinerals['sug'] = this.nutriDetails.total_sugar;
        this.totalMinerals['chol'] = this.nutriDetails.total_cholestrol;
    }
    slidePrev(slides) {
        this.slides.slidePrev();
    }
    slideNext(slides) {
        this.slides.slideNext();
    }
    closeModal() {
        this.commonService.dismissModal();
    }
    // deleteNutridtion(id){
    //   this.commonService.presentLoader();
    //   this.nutritionService.deleteNutrition({'id':id}).subscribe((data: any) => {
    //     this.commonService.dismissLoader();
    //     this.router.navigate(['/nutrition-list']);
    //   });
    // }
    deleteNutrition(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure you want delete this nutrition?',
                // message: 'Once deleted, you will not be able to recover your account !!!',
                cssClass: 'custom-alert',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.commonService.presentLoader();
                            this.nutritionService.deleteNutrition({ 'id': id }).subscribe((data) => {
                                if (data) {
                                    this.commonService.dismissModal();
                                    // this.router.navigateByUrl('/nutrition-list');
                                    this.router.navigate(['../nutrition-list']);
                                    this.commonService.dismissLoader();
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    expandItem(item) {
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
};
NutritionDetailModalComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__["NutritionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], NutritionDetailModalComponent.prototype, "slides", void 0);
NutritionDetailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nutrition-detail-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nutrition-detail-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nutrition-detail-modal.component.scss */ "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__["NutritionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], NutritionDetailModalComponent);



/***/ }),

/***/ "./src/app/nutrition-list/nutrition-list-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nutrition-list/nutrition-list-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NutritionListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionListPageRoutingModule", function() { return NutritionListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nutrition_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nutrition-list.page */ "./src/app/nutrition-list/nutrition-list.page.ts");




const routes = [
    {
        path: '',
        component: _nutrition_list_page__WEBPACK_IMPORTED_MODULE_3__["NutritionListPage"]
    }
];
let NutritionListPageRoutingModule = class NutritionListPageRoutingModule {
};
NutritionListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NutritionListPageRoutingModule);



/***/ }),

/***/ "./src/app/nutrition-list/nutrition-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nutrition-list/nutrition-list.module.ts ***!
  \*********************************************************/
/*! exports provided: NutritionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionListPageModule", function() { return NutritionListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nutrition_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nutrition-list-routing.module */ "./src/app/nutrition-list/nutrition-list-routing.module.ts");
/* harmony import */ var _nutrition_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nutrition-list.page */ "./src/app/nutrition-list/nutrition-list.page.ts");
/* harmony import */ var _nutrition_list_nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component */ "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts");
/* harmony import */ var _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile/components.modules */ "./src/app/profile/components.modules.ts");
/* harmony import */ var _pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe.module */ "./src/app/nutrition-list/pipe.module.ts");










let NutritionListPageModule = class NutritionListPageModule {
};
NutritionListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"],
            _nutrition_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["NutritionListPageRoutingModule"],
            _pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"],
        ],
        declarations: [_nutrition_list_page__WEBPACK_IMPORTED_MODULE_6__["NutritionListPage"], _nutrition_list_nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["NutritionDetailModalComponent"]],
        entryComponents: [_nutrition_list_nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["NutritionDetailModalComponent"]]
    })
], NutritionListPageModule);



/***/ }),

/***/ "./src/app/nutrition-list/nutrition-list.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/nutrition-list/nutrition-list.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-left: 0;\n  margin-right: 0; }\n\nion-card:first-child {\n  margin-top: 0; }\n\n.grey-header {\n  padding: 10px; }\n\n.inner-slider ion-slide {\n  height: auto;\n  flex-direction: column;\n  background: transparent; }\n\n.inner-slider ion-slide div {\n    width: 128px;\n    height: 128px; }\n\n.inner-slider ion-slide ion-label {\n  font-size: 0.85rem; }\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09); }\n\nion-slides {\n  background: transparent;\n  padding: 0 5px; }\n\n.swiper-slide img {\n  border-radius: 6px;\n  height: 85px;\n  margin-bottom: 5px; }\n\n.nutritionCard {\n  border-radius: 0;\n  box-shadow: none;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.nutritionCard ion-card-header {\n    color: #FFF;\n    background: #26a69a;\n    height: 45px;\n    line-height: 45px;\n    padding: 0 16px; }\n\nion-card {\n  border-radius: 0; }\n\nion-card ion-card-header {\n    margin-bottom: 0; }\n\nion-card ion-card-content ion-segment {\n    margin: 10px 0; }\n\nion-card ion-card-content ion-segment ion-segment-button {\n      width: 32%;\n      max-width: 130px;\n      background: #f3f3f3;\n      padding: 0;\n      margin: 0 5px;\n      --padding-start: 0;\n      --padding-end: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      height: auto;\n      --color-checked: transparent; }\n\nion-card ion-card-content ion-segment ion-segment-button img {\n        height: 100%;\n        margin-bottom: 5px;\n        -o-object-fit: cover;\n           object-fit: cover; }\n\nion-card ion-card-content ion-segment ion-segment-button ion-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        --background: #26a69a;\n        --box-shadow: none;\n        color: #FFF;\n        --padding-start: 0;\n        --padding-end: 0;\n        height: auto;\n        font-size: 16px;\n        margin: 3px;\n        z-index: 9;\n        --border-radius:50%; }\n\nion-card ion-card-content ion-segment ion-segment-button ion-label {\n        font-size: 0.75rem;\n        margin: 0;\n        text-transform: capitalize;\n        letter-spacing: 0;\n        color: #444; }\n\nion-card ion-card-content ion-segment ion-segment-button:first-child {\n      margin-left: 15px; }\n\nion-skeleton-text.grey-header {\n  border-radius: 0; }\n\n.nutrition-no-data {\n  height: calc(100vh - 320px); }\n\nion-segment {\n  margin-right: 10px; }\n\nion-segment-button {\n  height: 200px; }\n\n.checkboxThumb {\n  width: 100%;\n  height: 170px; }\n\n.item-image {\n  width: 100%;\n  height: 80%; }\n\n.item-no-image {\n  height: 80%; }\n\n.item-label {\n  width: 100%;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  padding: 10px; }\n\n.item-label ion-label {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxudXRyaXRpb24tbGlzdFxcbnV0cml0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsY0FBYztFQUFDLGVBQWUsRUFBQTs7QUFDdkM7RUFBcUIsYUFBYSxFQUFBOztBQUNsQztFQUFhLGFBQWEsRUFBQTs7QUFDMUI7RUFDYyxZQUFZO0VBQUMsc0JBQXNCO0VBQUMsdUJBQXVCLEVBQUE7O0FBRHpFO0lBRVksWUFBWTtJQUFDLGFBQWEsRUFBQTs7QUFLdEM7RUFBa0Msa0JBQWtCLEVBQUE7O0FBQ3BEO0VBQVksK0NBQStDLEVBQUE7O0FBQzNEO0VBQVcsdUJBQXVCO0VBQUMsY0FBYyxFQUFBOztBQUNqRDtFQUFrQixrQkFBa0I7RUFBQyxZQUFZO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3BFO0VBQWUsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsYUFBWSxFQUFBOztBQUE5RTtJQUNvQixXQUFXO0lBQUMsbUJBQW1CO0lBQUMsWUFBWTtJQUFDLGlCQUFpQjtJQUFDLGVBQWUsRUFBQTs7QUFHbEc7RUFBUyxnQkFBZ0IsRUFBQTs7QUFBekI7SUFDb0IsZ0JBQWdCLEVBQUE7O0FBRHBDO0lBR29CLGNBQWMsRUFBQTs7QUFIbEM7TUFJK0IsVUFBVTtNQUFDLGdCQUFnQjtNQUFDLG1CQUFtQjtNQUFDLFVBQVU7TUFBQyxhQUFhO01BQUMsa0JBQWdCO01BQUcsZ0JBQWM7TUFBRyxrQkFBa0I7TUFBQyxnQkFBZ0I7TUFBRSxZQUFZO01BQUMsNEJBQWdCLEVBQUE7O0FBSjlNO1FBS29CLFlBQVk7UUFBQyxrQkFBa0I7UUFBQyxvQkFBaUI7V0FBakIsaUJBQWlCLEVBQUE7O0FBTHJFO1FBTTJCLGtCQUFrQjtRQUFDLE1BQU07UUFBQyxRQUFRO1FBQUMscUJBQWE7UUFBUyxrQkFBYTtRQUFNLFdBQVc7UUFBQyxrQkFBZ0I7UUFBRyxnQkFBYztRQUFHLFlBQVk7UUFBQyxlQUFlO1FBQUMsV0FBVztRQUFDLFVBQVU7UUFBQyxtQkFBZ0IsRUFBQTs7QUFOM047UUFPMEIsa0JBQWtCO1FBQUMsU0FBUztRQUFDLDBCQUEwQjtRQUFDLGlCQUFpQjtRQUFDLFdBQVcsRUFBQTs7QUFQL0c7TUFTMkMsaUJBQWlCLEVBQUE7O0FBSTVEO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQW1CLDJCQUEyQixFQUFBOztBQUU5QztFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVqQjtFQUNJLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUVqQjtFQUNJLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9udXRyaXRpb24tbGlzdC9udXRyaXRpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHttYXJnaW4tbGVmdDogMDttYXJnaW4tcmlnaHQ6IDA7fVxyXG5pb24tY2FyZDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOiAwO31cclxuLmdyZXktaGVhZGVye3BhZGRpbmc6IDEwcHg7fVxyXG4uaW5uZXItc2xpZGVye1xyXG4gICAgaW9uLXNsaWRle2hlaWdodDogYXV0bztmbGV4LWRpcmVjdGlvbjogY29sdW1uO2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGRpdnt3aWR0aDogMTI4cHg7aGVpZ2h0OiAxMjhweDtcclxuICAgICAgICAgICAgaW1ne31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmlubmVyLXNsaWRlciBpb24tc2xpZGUgaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC44NXJlbTt9XHJcbi52aWRlby1jYXJke2JveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO31cclxuaW9uLXNsaWRlc3tiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtwYWRkaW5nOiAwIDVweDt9XHJcbi5zd2lwZXItc2xpZGUgaW1ne2JvcmRlci1yYWRpdXM6IDZweDtoZWlnaHQ6IDg1cHg7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuLm51dHJpdGlvbkNhcmR7Ym9yZGVyLXJhZGl1czogMDtib3gtc2hhZG93OiBub25lO21hcmdpbi1ib3R0b206IDA7bWFyZ2luLXRvcDowO1xyXG4gICAgaW9uLWNhcmQtaGVhZGVye2NvbG9yOiAjRkZGO2JhY2tncm91bmQ6ICMyNmE2OWE7aGVpZ2h0OiA0NXB4O2xpbmUtaGVpZ2h0OiA0NXB4O3BhZGRpbmc6IDAgMTZweDt9XHJcbn1cclxuXHJcbmlvbi1jYXJke2JvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7bWFyZ2luLWJvdHRvbTogMDt9XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIGlvbi1zZWdtZW50e21hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBpb24tc2VnbWVudC1idXR0b257d2lkdGg6IDMyJTttYXgtd2lkdGg6IDEzMHB4O2JhY2tncm91bmQ6ICNmM2YzZjM7cGFkZGluZzogMDttYXJnaW46IDAgNXB4Oy0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwO2JvcmRlci1yYWRpdXM6IDRweDtvdmVyZmxvdzogaGlkZGVuOyBoZWlnaHQ6IGF1dG87LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGltZ3toZWlnaHQ6IDEwMCU7bWFyZ2luLWJvdHRvbTogNXB4O29iamVjdC1maXQ6IGNvdmVyO31cclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b257cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtyaWdodDogMDstLWJhY2tncm91bmQ6ICMyNmE2OWE7LS1ib3gtc2hhZG93OiBub25lO2NvbG9yOiAjRkZGOy0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwO2hlaWdodDogYXV0bztmb250LXNpemU6IDE2cHg7bWFyZ2luOiAzcHg7ei1pbmRleDogOTstLWJvcmRlci1yYWRpdXM6NTAlfVxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC43NXJlbTttYXJnaW46IDA7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7bGV0dGVyLXNwYWNpbmc6IDA7Y29sb3I6ICM0NDQ7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMTVweDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1za2VsZXRvbi10ZXh0LmdyZXktaGVhZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLy8gaGl0ZXNoIGNzcyBzdHJ0XHJcbi5udXRyaXRpb24tbm8tZGF0YXtoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMjBweCk7fVxyXG4vLyBoaXRlc2ggY3NzIGVuZHNcclxuaW9uLXNlZ21lbnR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uY2hlY2tib3hUaHVtYntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxufVxyXG4uaXRlbS1pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLml0ZW0tbm8taW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG4uaXRlbS1sYWJlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaXRlbS1sYWJlbCBpb24tbGFiZWx7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/nutrition-list/nutrition-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/nutrition-list/nutrition-list.page.ts ***!
  \*******************************************************/
/*! exports provided: NutritionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionListPage", function() { return NutritionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nutrition-detail-modal/nutrition-detail-modal.component */ "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let NutritionListPage = class NutritionListPage {
    constructor(commonService, navCtrl, nutritionService, modalCtrl) {
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.nutritionService = nutritionService;
        this.modalCtrl = modalCtrl;
        this.sliderOpts = {
            zoom: true,
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 5
        };
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
    }
    ngOnInit() {
        this.nutritionService.getNutritionByUser('').subscribe((data) => {
            this.nutritionList = data.nutritionList.filter(el => {
                console.log(data.nutritionList);
                if (el.image_path) {
                    el.img_array = el.image_path.split(',');
                }
                return el;
            });
        });
    }
    showdetails(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.commonService.presentModal(NutritionDetailModalComponent,'fullModal',{'details':item});
            // component: NutritionDetailModalComponent
            const modal = yield this.modalCtrl.create({
                component: _nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__["NutritionDetailModalComponent"],
                cssClass: 'fullModal',
                componentProps: { 'details': item }
            });
            modal.onDidDismiss().then((d) => {
                this.ngOnInit();
            });
            return yield modal.present();
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
NutritionListPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
NutritionListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nutrition-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nutrition-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nutrition-list.page.scss */ "./src/app/nutrition-list/nutrition-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], NutritionListPage);



/***/ })

}]);
//# sourceMappingURL=nutrition-list-nutrition-list-module-es2015.js.map