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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header three-block ion-no-padding\">\r\n  <ion-list class=\"top-heading\">\r\n    <ion-item>\r\n      <ion-buttons class=\"ion-no-margin\" *ngIf=\"!showPreview\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <ion-icon ios=\"ios-arrow-back\"  md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Nutrition List</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <!-- <a>\r\n          <ion-icon ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\r\n        </a> -->\r\n        <a [routerLink]=\"['/nutrition']\">\r\n          <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-list lines=\"none\" class=\"item-list search-bar ion-no-padding\">\r\n    <ion-toolbar class=\"searchbar\">\r\n      <ion-searchbar [(ngModel)]=\"term\" animated=\"true\"></ion-searchbar>\r\n    </ion-toolbar>\r\n  </ion-list>\r\n  <div *ngIf=\"nutritionList\">\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Breakfast</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'BreakFast':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty \" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No BreakFast</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Brunch</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Brunch':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Brunch</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Lunch</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Lunch':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Lunch</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Snacks</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Snacks':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Snacks</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Dinner</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Dinner':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Dinner</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div *ngIf=\"!nutritionList\">\r\n    <ion-card class=\"item-card\" *ngFor=\"let skeleton of [].constructor(5)\">\r\n      <ion-skeleton-text class=\"grey-header green\" animated></ion-skeleton-text>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-slide {\n  background: #fbfbfb;\n}\n\n.grey-header {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  font-size: 0.75rem;\n  color: #000;\n  text-transform: uppercase;\n}\n\n.ingredient-list ion-item, .instructions-list ion-item {\n  --min-height:auto;\n}\n\n.ingredient-list ion-item p, .instructions-list ion-item p {\n  width: 100%;\n  border-bottom: 1px solid whitesmoke;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\n.ingredient-list ion-item:last-child p, .instructions-list ion-item:last-child p {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n.nutrition-head h4 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #000;\n}\n\n.nutrition-head p {\n  line-height: 1.5;\n}\n\n.nutrition-sub {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n\n.nutrition-sub:last-child {\n  margin-right: 0;\n}\n\n.nutrition-sub ion-icon {\n  font-size: 1rem;\n  margin-right: 3px;\n  color: #26a69a;\n}\n\n.nutrition-flex {\n  display: flex;\n  align-items: center;\n}\n\n.details-list {\n  padding: 0;\n}\n\n.details-list ion-item {\n  padding-top: 0;\n  --min-height: auto;\n  font-size: 0.85rem;\n}\n\n.details-list ion-label {\n  margin: 0;\n}\n\n.position-relative {\n  position: relative;\n}\n\n.instructions-list .beveragesList p:first-child {\n  width: 5%;\n}\n\n.instructions-list .beveragesList + ion-item p:first-child {\n  width: 5%;\n}\n\n.preview-img img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: top;\n     object-position: top;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-bottom: 4px solid #f1f1f1;\n}\n\nion-card ion-card-header ion-fab {\n  position: absolute;\n  top: 13px;\n  right: 15px;\n  color: #26a69a;\n}\n\nion-list.ingredient-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px;\n}\n\nion-list.ingredient-list ion-list-header {\n  color: #26a69a;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\nion-list.instructions-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px;\n}\n\nion-list.instructions-list ion-list-header {\n  color: #26a69a;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.ingredientItems {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 15px;\n}\n\n.ingredientItems p {\n  background: #f1f1f1;\n  margin-right: 5px;\n  border-radius: 30px;\n  padding: 4px 13px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWRldGFpbC1tb2RhbC9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcbnV0cml0aW9uLWxpc3RcXG51dHJpdGlvbi1kZXRhaWwtbW9kYWxcXG51dHJpdGlvbi1kZXRhaWwtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL251dHJpdGlvbi1saXN0L251dHJpdGlvbi1kZXRhaWwtbW9kYWwvbnV0cml0aW9uLWRldGFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFjLG1CQUFBO0FDRWQ7O0FEREE7RUFBYSx5QkFBQTtFQUEwQixtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixXQUFBO0VBQVkseUJBQUE7QUNTMUY7O0FEUkE7RUFBdUQsaUJBQUE7QUNZdkQ7O0FEWEE7RUFBMkQsV0FBQTtFQUFZLG1DQUFBO0VBQW9DLG9CQUFBO0VBQXFCLG1CQUFBO0VBQW9CLGdCQUFBO0FDbUJwSjs7QURsQkE7RUFBaUYsbUJBQUE7RUFBb0IsaUJBQUE7RUFBa0IsZ0JBQUE7QUN3QnZIOztBRHZCQTtFQUFtQixlQUFBO0VBQWdCLGdCQUFBO0VBQWlCLFdBQUE7QUM2QnBEOztBRDVCQTtFQUFrQixnQkFBQTtBQ2dDbEI7O0FEL0JBO0VBQWUsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLGtCQUFBO0FDc0NwRTs7QURyQ0E7RUFBMEIsZUFBQTtBQ3lDMUI7O0FEeENBO0VBQXdCLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsY0FBQTtBQzhDMUQ7O0FEN0NBO0VBQWdCLGFBQUE7RUFBZSxtQkFBQTtBQ2tEL0I7O0FEaERBO0VBQWMsVUFBQTtBQ29EZDs7QURuREk7RUFBUyxjQUFBO0VBQWUsa0JBQUE7RUFBbUIsa0JBQUE7QUN3RC9DOztBRHZESTtFQUFVLFNBQUE7QUMwRGQ7O0FEeERBO0VBQW1CLGtCQUFBO0FDNERuQjs7QUR6RFE7RUFBYyxTQUFBO0FDNkR0Qjs7QUQxRFE7RUFBYyxTQUFBO0FDNkR0Qjs7QUR6REE7RUFBaUIsYUFBQTtFQUFjLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0VBQXFCLHVCQUFBO0tBQUEsb0JBQUE7QUNnRWhFOztBRC9EQTtFQUFTLFlBQUE7RUFBYSxnQkFBQTtFQUFpQixTQUFBO0VBQVUsZ0NBQUE7QUNzRWpEOztBRHBFUTtFQUFRLGtCQUFBO0VBQW1CLFNBQUE7RUFBVSxXQUFBO0VBQVksY0FBQTtBQzBFekQ7O0FEdkVBO0VBQXlCLFVBQUE7RUFBVyxnQ0FBQTtFQUFpQyxvQkFBQTtBQzZFckU7O0FENUVJO0VBQWdCLGNBQUE7RUFBZSxrQkFBQTtFQUFrQixnQkFBQTtBQ2lGckQ7O0FEL0VBO0VBQTJCLFVBQUE7RUFBVyxnQ0FBQTtFQUFpQyxvQkFBQTtBQ3FGdkU7O0FEcEZJO0VBQWdCLGNBQUE7RUFBZSxrQkFBQTtFQUFrQixnQkFBQTtBQ3lGckQ7O0FEdkZBO0VBQWlCLGFBQUE7RUFBYyxlQUFBO0VBQWdCLGVBQUE7QUM2Ri9DOztBRDVGSTtFQUFHLG1CQUFBO0VBQW9CLGlCQUFBO0VBQWtCLG1CQUFBO0VBQW9CLGlCQUFBO0VBQWtCLGtCQUFBO0FDbUduRiIsImZpbGUiOiJzcmMvYXBwL251dHJpdGlvbi1saXN0L251dHJpdGlvbi1kZXRhaWwtbW9kYWwvbnV0cml0aW9uLWRldGFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItc2xpZGV7YmFja2dyb3VuZDogI2ZiZmJmYjt9XHJcbi5ncmV5LWhlYWRlcnt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO21hcmdpbi1ib3R0b206IDE1cHg7Zm9udC1zaXplOiAwLjc1cmVtO2NvbG9yOiAjMDAwO3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxyXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW17LS1taW4taGVpZ2h0OmF1dG99XHJcbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW0gcCwgLmluc3RydWN0aW9ucy1saXN0IGlvbi1pdGVtIHB7d2lkdGg6IDEwMCU7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7cGFkZGluZy1ib3R0b206IDEwcHg7bWFyZ2luLWJvdHRvbTogMTBweDtsaW5lLWhlaWdodDogMS41O31cclxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHAsIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHB7Ym9yZGVyLWJvdHRvbTogbm9uZTtwYWRkaW5nLWJvdHRvbTogMDttYXJnaW4tYm90dG9tOiAwO31cclxuLm51dHJpdGlvbi1oZWFkIGg0e2ZvbnQtc2l6ZTogMXJlbTtmb250LXdlaWdodDogNTAwO2NvbG9yOiAjMDAwO31cclxuLm51dHJpdGlvbi1oZWFkIHB7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbi5udXRyaXRpb24tc3Vie2ZvbnQtc2l6ZTogMC44NXJlbTtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7bWFyZ2luLXJpZ2h0OiAyMHB4O31cclxuLm51dHJpdGlvbi1zdWI6bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6IDA7fVxyXG4ubnV0cml0aW9uLXN1YiBpb24taWNvbntmb250LXNpemU6IDFyZW07bWFyZ2luLXJpZ2h0OiAzcHg7Y29sb3I6ICMyNmE2OWE7fVxyXG4ubnV0cml0aW9uLWZsZXh7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi8vIC5hZGRtb3Jle3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMTBweDt0b3A6IDEwcHg7Y29sb3I6ICNGRkY7Zm9udC1zaXplOiAxLjVyZW07ei1pbmRleDogOTk7d2lkdGg6IDM4cHg7aGVpZ2h0OiAzOHB4O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtjdXJzb3I6IHBvaW50ZXI7fVxyXG4uZGV0YWlscy1saXN0e3BhZGRpbmc6IDA7XHJcbiAgICBpb24taXRlbXtwYWRkaW5nLXRvcDogMDstLW1pbi1oZWlnaHQ6IGF1dG87Zm9udC1zaXplOiAwLjg1cmVtO31cclxuICAgIGlvbi1sYWJlbHttYXJnaW46IDA7fVxyXG59XHJcbi5wb3NpdGlvbi1yZWxhdGl2ZXtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uaW5zdHJ1Y3Rpb25zLWxpc3R7XHJcbiAgICAuYmV2ZXJhZ2VzTGlzdHtcclxuICAgICAgICBwOmZpcnN0LWNoaWxke3dpZHRoOiA1JTt9XHJcbiAgICB9XHJcbiAgICAuYmV2ZXJhZ2VzTGlzdCtpb24taXRlbXtcclxuICAgICAgICBwOmZpcnN0LWNoaWxke3dpZHRoOiA1JTt9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcmV2aWV3LWltZyBpbWd7aGVpZ2h0OiAyNTBweDt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb250YWluOyBvYmplY3QtcG9zaXRpb246IHRvcDt9XHJcbmlvbi1jYXJke2JvcmRlcjogbm9uZTtib3gtc2hhZG93OiBub25lO21hcmdpbjogMDtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICBpb24tZmFie3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDEzcHg7cmlnaHQ6IDE1cHg7Y29sb3I6ICMyNmE2OWE7fVxyXG4gICAgfVxyXG59XHJcbmlvbi1saXN0LmluZ3JlZGllbnQtbGlzdHtwYWRkaW5nOiAwO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO3BhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgaW9uLWxpc3QtaGVhZGVye2NvbG9yOiAjMjZhNjlhO2ZvbnQtc2l6ZTogLjg1cmVtO2ZvbnQtd2VpZ2h0OiA1MDA7fVxyXG59XHJcbmlvbi1saXN0Lmluc3RydWN0aW9ucy1saXN0e3BhZGRpbmc6IDA7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7cGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBpb24tbGlzdC1oZWFkZXJ7Y29sb3I6ICMyNmE2OWE7Zm9udC1zaXplOiAuODVyZW07Zm9udC13ZWlnaHQ6IDUwMDt9XHJcbn1cclxuLmluZ3JlZGllbnRJdGVtc3tkaXNwbGF5OiBmbGV4O2ZsZXgtd3JhcDogd3JhcDtwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBwIHtiYWNrZ3JvdW5kOiAjZjFmMWYxO21hcmdpbi1yaWdodDogNXB4O2JvcmRlci1yYWRpdXM6IDMwcHg7cGFkZGluZzogNHB4IDEzcHg7bWFyZ2luLWJvdHRvbTogNXB4O31cclxufSIsIi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xufVxuXG4uZ3JleS1oZWFkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6YXV0bztcbn1cblxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbSBwLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW0gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCBwLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCBwIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5udXRyaXRpb24taGVhZCBoNCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5udXRyaXRpb24taGVhZCBwIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLm51dHJpdGlvbi1zdWIge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm51dHJpdGlvbi1zdWI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLm51dHJpdGlvbi1zdWIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBjb2xvcjogIzI2YTY5YTtcbn1cblxuLm51dHJpdGlvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRldGFpbHMtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uZGV0YWlscy1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIC0tbWluLWhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuLmRldGFpbHMtbGlzdCBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG59XG5cbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmluc3RydWN0aW9ucy1saXN0IC5iZXZlcmFnZXNMaXN0IHA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNSU7XG59XG4uaW5zdHJ1Y3Rpb25zLWxpc3QgLmJldmVyYWdlc0xpc3QgKyBpb24taXRlbSBwOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDUlO1xufVxuXG4ucHJldmlldy1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzI2YTY5YTtcbn1cblxuaW9uLWxpc3QuaW5ncmVkaWVudC1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaW9uLWxpc3QuaW5ncmVkaWVudC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiAjMjZhNjlhO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1saXN0Lmluc3RydWN0aW9ucy1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaW9uLWxpc3QuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgY29sb3I6ICMyNmE2OWE7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmluZ3JlZGllbnRJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmluZ3JlZGllbnRJdGVtcyBwIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDRweCAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-left: 0;\n  margin-right: 0;\n}\n\nion-card:first-child {\n  margin-top: 0;\n}\n\n.grey-header {\n  padding: 10px;\n}\n\n.inner-slider ion-slide {\n  height: auto;\n  flex-direction: column;\n  background: transparent;\n}\n\n.inner-slider ion-slide div {\n  width: 128px;\n  height: 128px;\n}\n\n.inner-slider ion-slide ion-label {\n  font-size: 0.85rem;\n}\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09);\n}\n\nion-slides {\n  background: transparent;\n  padding: 0 5px;\n}\n\n.swiper-slide img {\n  border-radius: 6px;\n  height: 85px;\n  margin-bottom: 5px;\n}\n\n.nutritionCard {\n  border-radius: 0;\n  box-shadow: none;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.nutritionCard ion-card-header {\n  color: #FFF;\n  background: #26a69a;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 16px;\n}\n\nion-card {\n  border-radius: 0;\n}\n\nion-card ion-card-header {\n  margin-bottom: 0;\n}\n\nion-card ion-card-content ion-segment {\n  margin: 10px 0;\n}\n\nion-card ion-card-content ion-segment ion-segment-button {\n  width: 32%;\n  max-width: 130px;\n  background: #f3f3f3;\n  padding: 0;\n  margin: 0 5px;\n  --padding-start: 0;\n  --padding-end: 0;\n  border-radius: 4px;\n  overflow: hidden;\n  height: auto;\n  --color-checked: transparent;\n}\n\nion-card ion-card-content ion-segment ion-segment-button img {\n  height: 100%;\n  margin-bottom: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-card ion-card-content ion-segment ion-segment-button ion-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  --background: #26a69a;\n  --box-shadow: none;\n  color: #FFF;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: auto;\n  font-size: 16px;\n  margin: 3px;\n  z-index: 9;\n  --border-radius:50%;\n}\n\nion-card ion-card-content ion-segment ion-segment-button ion-label {\n  font-size: 0.75rem;\n  margin: 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  color: #444;\n}\n\nion-card ion-card-content ion-segment ion-segment-button:first-child {\n  margin-left: 15px;\n}\n\nion-skeleton-text.grey-header {\n  border-radius: 0;\n}\n\n.nutrition-no-data {\n  height: calc(100vh - 320px);\n}\n\nion-segment {\n  margin-right: 10px;\n}\n\nion-segment-button {\n  height: 200px;\n}\n\n.checkboxThumb {\n  width: 100%;\n  height: 170px;\n}\n\n.item-image {\n  width: 100%;\n  height: 80%;\n}\n\n.item-no-image {\n  height: 80%;\n}\n\n.item-label-title {\n  width: 100%;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.item-label-title ion-label {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.search-bar {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG51dHJpdGlvbi1saXN0XFxudXRyaXRpb24tbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL251dHJpdGlvbi1saXN0L251dHJpdGlvbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGNBQUE7RUFBZSxlQUFBO0FDR3hCOztBREZBO0VBQXFCLGFBQUE7QUNNckI7O0FETEE7RUFBYSxhQUFBO0FDU2I7O0FEUEk7RUFBVSxZQUFBO0VBQWEsc0JBQUE7RUFBdUIsdUJBQUE7QUNhbEQ7O0FEWlE7RUFBSSxZQUFBO0VBQWEsYUFBQTtBQ2dCekI7O0FEWEE7RUFBa0Msa0JBQUE7QUNjbEM7O0FEYkE7RUFBWSwrQ0FBQTtBQ2lCWjs7QURoQkE7RUFBVyx1QkFBQTtFQUF3QixjQUFBO0FDcUJuQzs7QURwQkE7RUFBa0Isa0JBQUE7RUFBbUIsWUFBQTtFQUFhLGtCQUFBO0FDMEJsRDs7QUR6QkE7RUFBZSxnQkFBQTtFQUFpQixnQkFBQTtFQUFpQixnQkFBQTtFQUFpQixhQUFBO0FDZ0NsRTs7QUQvQkk7RUFBZ0IsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxpQkFBQTtFQUFrQixlQUFBO0FDc0NuRjs7QURuQ0E7RUFBUyxnQkFBQTtBQ3VDVDs7QUR0Q0k7RUFBZ0IsZ0JBQUE7QUN5Q3BCOztBRHZDUTtFQUFZLGNBQUE7QUMwQ3BCOztBRHpDWTtFQUFtQixVQUFBO0VBQVcsZ0JBQUE7RUFBaUIsbUJBQUE7RUFBb0IsVUFBQTtFQUFXLGFBQUE7RUFBYyxrQkFBQTtFQUFtQixnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixnQkFBQTtFQUFrQixZQUFBO0VBQWEsNEJBQUE7QUNzRDlMOztBRHJEZ0I7RUFBSSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsb0JBQUE7S0FBQSxpQkFBQTtBQzBEcEQ7O0FEekRnQjtFQUFXLGtCQUFBO0VBQW1CLE1BQUE7RUFBTyxRQUFBO0VBQVMscUJBQUE7RUFBc0Isa0JBQUE7RUFBbUIsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLFlBQUE7RUFBYSxlQUFBO0VBQWdCLFdBQUE7RUFBWSxVQUFBO0VBQVcsbUJBQUE7QUN3RTNNOztBRHZFZ0I7RUFBVSxrQkFBQTtFQUFtQixTQUFBO0VBQVUsMEJBQUE7RUFBMkIsaUJBQUE7RUFBa0IsV0FBQTtBQzhFcEc7O0FENUVZO0VBQStCLGlCQUFBO0FDK0UzQzs7QUQzRUE7RUFDSSxnQkFBQTtBQzhFSjs7QUQzRUE7RUFBbUIsMkJBQUE7QUMrRW5COztBRDdFQTtFQUNJLGtCQUFBO0FDZ0ZKOztBRDlFQTtFQUNJLGFBQUE7QUNpRko7O0FEL0VBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNrRko7O0FEaEZBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNtRko7O0FEakZBO0VBQ0ksV0FBQTtBQ29GSjs7QURsRkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDcUZKOztBRG5GQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3NGSjs7QURwRkE7RUFDSSxrQkFBQTtBQ3VGSiIsImZpbGUiOiJzcmMvYXBwL251dHJpdGlvbi1saXN0L251dHJpdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke21hcmdpbi1sZWZ0OiAwO21hcmdpbi1yaWdodDogMDt9XHJcbmlvbi1jYXJkOmZpcnN0LWNoaWxke21hcmdpbi10b3A6IDA7fVxyXG4uZ3JleS1oZWFkZXJ7cGFkZGluZzogMTBweDt9XHJcbi5pbm5lci1zbGlkZXJ7XHJcbiAgICBpb24tc2xpZGV7aGVpZ2h0OiBhdXRvO2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZGl2e3dpZHRoOiAxMjhweDtoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgICBpbWd7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaW5uZXItc2xpZGVyIGlvbi1zbGlkZSBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjg1cmVtO31cclxuLnZpZGVvLWNhcmR7Ym94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7fVxyXG5pb24tc2xpZGVze2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O3BhZGRpbmc6IDAgNXB4O31cclxuLnN3aXBlci1zbGlkZSBpbWd7Ym9yZGVyLXJhZGl1czogNnB4O2hlaWdodDogODVweDttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4ubnV0cml0aW9uQ2FyZHtib3JkZXItcmFkaXVzOiAwO2JveC1zaGFkb3c6IG5vbmU7bWFyZ2luLWJvdHRvbTogMDttYXJnaW4tdG9wOjA7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7Y29sb3I6ICNGRkY7YmFja2dyb3VuZDogIzI2YTY5YTtoZWlnaHQ6IDQ1cHg7bGluZS1oZWlnaHQ6IDQ1cHg7cGFkZGluZzogMCAxNnB4O31cclxufVxyXG5cclxuaW9uLWNhcmR7Ym9yZGVyLXJhZGl1czogMDtcclxuICAgIGlvbi1jYXJkLWhlYWRlcnttYXJnaW4tYm90dG9tOiAwO31cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaW9uLXNlZ21lbnR7bWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbnt3aWR0aDogMzIlO21heC13aWR0aDogMTMwcHg7YmFja2dyb3VuZDogI2YzZjNmMztwYWRkaW5nOiAwO21hcmdpbjogMCA1cHg7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7Ym9yZGVyLXJhZGl1czogNHB4O292ZXJmbG93OiBoaWRkZW47IGhlaWdodDogYXV0bzstLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgaW1ne2hlaWdodDogMTAwJTttYXJnaW4tYm90dG9tOiA1cHg7b2JqZWN0LWZpdDogY292ZXI7fVxyXG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO3JpZ2h0OiAwOy0tYmFja2dyb3VuZDogIzI2YTY5YTstLWJveC1zaGFkb3c6IG5vbmU7Y29sb3I6ICNGRkY7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7aGVpZ2h0OiBhdXRvO2ZvbnQtc2l6ZTogMTZweDttYXJnaW46IDNweDt6LWluZGV4OiA5Oy0tYm9yZGVyLXJhZGl1czo1MCV9XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO21hcmdpbjogMDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtsZXR0ZXItc3BhY2luZzogMDtjb2xvcjogIzQ0NDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAxNXB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLXNrZWxldG9uLXRleHQuZ3JleS1oZWFkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4vLyBoaXRlc2ggY3NzIHN0cnRcclxuLm51dHJpdGlvbi1uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDMyMHB4KTt9XHJcbi8vIGhpdGVzaCBjc3MgZW5kc1xyXG5pb24tc2VnbWVudHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5jaGVja2JveFRodW1ie1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG59XHJcbi5pdGVtLWltYWdle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG4uaXRlbS1uby1pbWFnZXtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcbi5pdGVtLWxhYmVsLXRpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5pdGVtLWxhYmVsLXRpdGxlIGlvbi1sYWJlbHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNlYXJjaC1iYXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmlvbi1jYXJkOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmdyZXktaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlubmVyLXNsaWRlciBpb24tc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmlubmVyLXNsaWRlciBpb24tc2xpZGUgZGl2IHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xufVxuLmlubmVyLXNsaWRlciBpb24tc2xpZGUgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4udmlkZW8tY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA4NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5udXRyaXRpb25DYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5udXRyaXRpb25DYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiAjMjZhNjlhO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1zZWdtZW50IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHdpZHRoOiAzMiU7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6ICMyNmE2OWE7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICNGRkY7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogM3B4O1xuICB6LWluZGV4OiA5O1xuICAtLWJvcmRlci1yYWRpdXM6NTAlO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NDQ7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5pb24tc2tlbGV0b24tdGV4dC5ncmV5LWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5udXRyaXRpb24tbm8tZGF0YSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDMyMHB4KTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jaGVja2JveFRodW1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi5pdGVtLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xufVxuXG4uaXRlbS1uby1pbWFnZSB7XG4gIGhlaWdodDogODAlO1xufVxuXG4uaXRlbS1sYWJlbC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaXRlbS1sYWJlbC10aXRsZSBpb24tbGFiZWwge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */");

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