function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nutrition-list-nutrition-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutritionListNutritionDetailModalNutritionDetailModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header three-block ion-no-padding\">\r\n  <ion-list class=\"top-heading\">\r\n    <ion-item>\r\n      <ion-buttons slot=\"start\" (click)=\"closeModal()\">\r\n        <ion-icon ios=\"ios-arrow-back\"  md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>{{nutriDetails?.title}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <a>\r\n          <ion-icon ios=\"ios-trash\" md=\"md-trash\" (click)=\"deleteNutrition(nutriDetails.id)\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-card-content class=\"ion-no-padding item-content\">\r\n    <div class=\"preview-img\" *ngIf=\"nutriDetails.img_array\">\r\n      <!-- <ion-button (click)=\"slidePrev()\" class=\"slidebtns slideBack\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-button> -->\r\n      <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider pager=\"true\" (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\r\n        <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of nutriDetails.img_array; let i =index;\">\r\n          <img src=\"{{url}}{{imgpath}}\" /> \r\n        </ion-slide>\r\n      </ion-slides>\r\n      <!-- <ion-button (click)=\"slideNext()\" class=\"slidebtns slideNext\">\r\n        <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n      </ion-button> -->\r\n    </div> \r\n</ion-card-content>\r\n  <div class=\"nutrition-head\">\r\n    <p>{{nutriDetails?.description}}</p>\r\n    <div class=\"nutrition-flex\">\r\n      <div class=\"nutrition-sub\">\r\n        <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\"></ion-icon> {{nutriDetails?.serving_size}}\r\n      </div>\r\n      <div class=\"nutrition-sub ion-text-right\">\r\n        <!-- <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon> {{nutriDetails?.preparation_time }} (hh:mm) -->\r\n        <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon> {{nutriDetails?.preparation_time[0]}} hrs {{nutriDetails?.preparation_time[1]}} min\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-card  *ngFor=\"let item of items\">\r\n\r\n    <ion-card-header class=\"more-card-header\" (click)=\"expandItem(item)\" >\r\n      <!-- <ion-card-title>More Details</ion-card-title> -->\r\n      <ion-card-title>Nutrition Details</ion-card-title>\r\n      <ion-fab size=\"small\">\r\n        <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\"></ion-icon>\r\n      </ion-fab>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n   \r\n      <app-expandable expandHeight=\"300px\" [expanded]=\"item.expanded\">\r\n        <ion-list class=\"details-list\" lines=\"none\">\r\n          <ion-item>\r\n            <ion-label>Calories</ion-label>\r\n            <ion-text>{{totalMinerals.cal | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Carbohydrates</ion-label>\r\n            <ion-text>{{totalMinerals.carbo | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Proteins</ion-label>\r\n            <ion-text>{{totalMinerals.prot | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Fats</ion-label>\r\n            <ion-text>{{totalMinerals.fat | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Sugar</ion-label>\r\n            <ion-text>{{totalMinerals.sug | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Cholestrol</ion-label>\r\n            <ion-text>{{totalMinerals.chol | number : '1.2-2'}}</ion-text>\r\n          </ion-item>\r\n        </ion-list>\r\n      </app-expandable> \r\n      \r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-list lines=\"none\" class=\"ingredient-list\">\r\n    <ion-list-header>Ingredients</ion-list-header>\r\n    <!-- <ion-item *ngFor=\"let item of nutriDetails?.ingredient_array; let i=index;\">\r\n      <p>{{i+1}}. {{item}}</p>\r\n    </ion-item> -->\r\n    <div class=\"ingredientItems\">\r\n      <p *ngFor=\"let item of nutriDetails?.ingredient_array; let i=index;\">{{item}}</p>\r\n    </div>\r\n\r\n  </ion-list>\r\n  <ion-list lines=\"none\" class=\"instructions-list\">\r\n    <ion-list-header>Instructions</ion-list-header>\r\n    <ion-item *ngFor=\"let item  of nutriDetails?.instruction_array; let i=index;\">\r\n      <p>{{i+1}}. {{item}}</p>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" class=\"instructions-list\">\r\n    <ion-list-header>Beverages </ion-list-header>\r\n    <div class=\"ingredientItems\">\r\n      <p *ngIf=\"nutriDetails.bevrage_type == 1\">Cofee</p>\r\n      <p *ngIf=\"nutriDetails.bevrage_type == 2\">Milk</p>\r\n      <p *ngIf=\"nutriDetails.bevrage_type == 3\">Fruit Drink</p>    \r\n      <p *ngIf=\"nutriDetails.bevrage_type == 4\">Soda</p>\r\n      <p>{{nutriDetails.bevrage_quantity}} <span *ngIf=\"nutriDetails.bevrage_quantity == 1\">Bottle</span>\r\n      <span *ngIf=\"nutriDetails.bevrage_quantity == 2\">Glass</span>\r\n      <span *ngIf=\"nutriDetails.bevrage_quantity == 3\">Bowl</span>    \r\n      <span *ngIf=\"nutriDetails.bevrage_quantity == 4\">Cup</span></p>\r\n      <p>{{nutriDetails.unit_quantity}} <span *ngIf=\"nutriDetails.bevrage_unit == 1\">Liter</span> <span *ngIf=\"nutriDetails.bevrage_unit == 2\">Milliliter</span></p>\r\n    </div>\r\n    \r\n    <ion-item class=\"beveragesList\">\r\n      \r\n    </ion-item> \r\n    \r\n    <ion-item >\r\n      \r\n    </ion-item>\r\n    <!-- <ion-item >\r\n      <p *ngIf=\"nutritionData.form.bevragveinclude\" >This beverage should consume with  this nutrition</p>\r\n       </ion-item> -->\r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-list.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-list.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutritionListNutritionListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header three-block ion-no-padding\">\r\n  <ion-list class=\"top-heading\">\r\n    <ion-item>\r\n      <ion-buttons class=\"ion-no-margin\" *ngIf=\"!showPreview\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <ion-icon ios=\"ios-arrow-back\"  md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Nutrition List</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <!-- <a>\r\n          <ion-icon ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\r\n        </a> -->\r\n        <a [routerLink]=\"['/nutrition']\">\r\n          <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-list lines=\"none\" class=\"item-list search-bar ion-no-padding\">\r\n    <ion-toolbar class=\"searchbar\">\r\n      <ion-searchbar [(ngModel)]=\"term\" animated=\"true\"></ion-searchbar>\r\n    </ion-toolbar>\r\n  </ion-list>\r\n  <div *ngIf=\"nutritionList\">\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Breakfast</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'BreakFast':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty \" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No BreakFast</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Brunch</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Brunch':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Brunch</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Lunch</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Lunch':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Lunch</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Snacks</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Snacks':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Snacks</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"nutritionCard\">\r\n      <ion-card-header class=\"grey-header green text-white\">Dinner</ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button *ngFor=\"let item of nutritionList  | filter:'Dinner':'type'\" (click)=\"showdetails(item)\">\r\n            <div class=\"checkboxThumb\">\r\n              <div *ngIf=\"!item.empty\" class=\"item-image\">\r\n                <img src=\"{{url}}{{item?.img_array[0]}}\" *ngIf=\"item?.image_path\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.image_path\" style=\"width:auto\" />\r\n              </div>\r\n              <div class=\"item-label-title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n              <div *ngIf=\"item.empty\" class=\"no-data nutrition-no-data item-no-image\">\r\n                <img src=\"../../../assets/images/dish.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Dinner</p>\r\n              </div>\r\n            </div>\r\n            <!-- <ion-button ><ion-icon name=\"information-circle\"></ion-icon></ion-button> -->\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div *ngIf=\"!nutritionList\">\r\n    <ion-card class=\"item-card\" *ngFor=\"let skeleton of [].constructor(5)\">\r\n      <ion-skeleton-text class=\"grey-header green\" animated></ion-skeleton-text>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-segment scrollable=\"true\" class=\"ion-no-padding nutriimages-list\">\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n          <ion-segment-button>\r\n            <ion-skeleton-text animated style=\"width: 130px;height: 85px;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutritionListNutritionDetailModalNutritionDetailModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".swiper-slide {\n  background: #fbfbfb; }\n\n.grey-header {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  font-size: 0.75rem;\n  color: #000;\n  text-transform: uppercase; }\n\n.ingredient-list ion-item, .instructions-list ion-item {\n  --min-height:auto; }\n\n.ingredient-list ion-item p, .instructions-list ion-item p {\n  width: 100%;\n  border-bottom: 1px solid whitesmoke;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  line-height: 1.5; }\n\n.ingredient-list ion-item:last-child p, .instructions-list ion-item:last-child p {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0; }\n\n.nutrition-head h4 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #000; }\n\n.nutrition-head p {\n  line-height: 1.5; }\n\n.nutrition-sub {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  margin-right: 20px; }\n\n.nutrition-sub:last-child {\n  margin-right: 0; }\n\n.nutrition-sub ion-icon {\n  font-size: 1rem;\n  margin-right: 3px;\n  color: #26a69a; }\n\n.nutrition-flex {\n  display: flex;\n  align-items: center; }\n\n.details-list {\n  padding: 0; }\n\n.details-list ion-item {\n    padding-top: 0;\n    --min-height: auto;\n    font-size: 0.85rem; }\n\n.details-list ion-label {\n    margin: 0; }\n\n.position-relative {\n  position: relative; }\n\n.instructions-list .beveragesList p:first-child {\n  width: 5%; }\n\n.instructions-list .beveragesList + ion-item p:first-child {\n  width: 5%; }\n\n.preview-img img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: top;\n     object-position: top; }\n\nion-card {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-bottom: 4px solid #f1f1f1; }\n\nion-card ion-card-header ion-fab {\n    position: absolute;\n    top: 13px;\n    right: 15px;\n    color: #26a69a; }\n\nion-list.ingredient-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px; }\n\nion-list.ingredient-list ion-list-header {\n    color: #26a69a;\n    font-size: .85rem;\n    font-weight: 500; }\n\nion-list.instructions-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px; }\n\nion-list.instructions-list ion-list-header {\n    color: #26a69a;\n    font-size: .85rem;\n    font-weight: 500; }\n\n.ingredientItems {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 15px; }\n\n.ingredientItems p {\n    background: #f1f1f1;\n    margin-right: 5px;\n    border-radius: 30px;\n    padding: 4px 13px;\n    margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWRldGFpbC1tb2RhbC9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcbnV0cml0aW9uLWxpc3RcXG51dHJpdGlvbi1kZXRhaWwtbW9kYWxcXG51dHJpdGlvbi1kZXRhaWwtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxtQkFBbUIsRUFBQTs7QUFDakM7RUFBYSx5QkFBeUI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxXQUFXO0VBQUMseUJBQXlCLEVBQUE7O0FBQ25IO0VBQXVELGlCQUFhLEVBQUE7O0FBQ3BFO0VBQTJELFdBQVc7RUFBQyxtQ0FBbUM7RUFBQyxvQkFBb0I7RUFBQyxtQkFBbUI7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDcEs7RUFBaUYsbUJBQW1CO0VBQUMsaUJBQWlCO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3ZJO0VBQW1CLGVBQWU7RUFBQyxnQkFBZ0I7RUFBQyxXQUFXLEVBQUE7O0FBQy9EO0VBQWtCLGdCQUFnQixFQUFBOztBQUNsQztFQUFlLGtCQUFrQjtFQUFDLGFBQWE7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0IsRUFBQTs7QUFDdEY7RUFBMEIsZUFBZSxFQUFBOztBQUN6QztFQUF3QixlQUFlO0VBQUMsaUJBQWlCO0VBQUMsY0FBYyxFQUFBOztBQUN4RTtFQUFnQixhQUFhO0VBQUUsbUJBQW1CLEVBQUE7O0FBRWxEO0VBQWMsVUFBVSxFQUFBOztBQUF4QjtJQUNhLGNBQWM7SUFBQyxrQkFBYTtJQUFNLGtCQUFrQixFQUFBOztBQURqRTtJQUVjLFNBQVMsRUFBQTs7QUFFdkI7RUFBbUIsa0JBQWtCLEVBQUE7O0FBQ3JDO0VBRXNCLFNBQVMsRUFBQTs7QUFGL0I7RUFLc0IsU0FBUyxFQUFBOztBQUkvQjtFQUFpQixhQUFhO0VBQUMsV0FBVztFQUFDLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFBRSx1QkFBb0I7S0FBcEIsb0JBQW9CLEVBQUE7O0FBQ3BGO0VBQVMsWUFBWTtFQUFDLGdCQUFnQjtFQUFDLFNBQVM7RUFBQyxnQ0FBZ0MsRUFBQTs7QUFBakY7SUFFZ0Isa0JBQWtCO0lBQUMsU0FBUztJQUFDLFdBQVc7SUFBQyxjQUFjLEVBQUE7O0FBR3ZFO0VBQXlCLFVBQVU7RUFBQyxnQ0FBZ0M7RUFBQyxvQkFBb0IsRUFBQTs7QUFBekY7SUFDb0IsY0FBYztJQUFDLGlCQUFpQjtJQUFDLGdCQUFnQixFQUFBOztBQUVyRTtFQUEyQixVQUFVO0VBQUMsZ0NBQWdDO0VBQUMsb0JBQW9CLEVBQUE7O0FBQTNGO0lBQ29CLGNBQWM7SUFBQyxpQkFBaUI7SUFBQyxnQkFBZ0IsRUFBQTs7QUFFckU7RUFBaUIsYUFBYTtFQUFDLGVBQWU7RUFBQyxlQUFlLEVBQUE7O0FBQTlEO0lBQ08sbUJBQW1CO0lBQUMsaUJBQWlCO0lBQUMsbUJBQW1CO0lBQUMsaUJBQWlCO0lBQUMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9udXRyaXRpb24tbGlzdC9udXRyaXRpb24tZGV0YWlsLW1vZGFsL251dHJpdGlvbi1kZXRhaWwtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVyLXNsaWRle2JhY2tncm91bmQ6ICNmYmZiZmI7fVxyXG4uZ3JleS1oZWFkZXJ7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTttYXJnaW4tYm90dG9tOiAxNXB4O2ZvbnQtc2l6ZTogMC43NXJlbTtjb2xvcjogIzAwMDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO31cclxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbSwgLmluc3RydWN0aW9ucy1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDphdXRvfVxyXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtIHAsIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbSBwe3dpZHRoOiAxMDAlO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO3BhZGRpbmctYm90dG9tOiAxMHB4O21hcmdpbi1ib3R0b206IDEwcHg7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCBwLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCBwe2JvcmRlci1ib3R0b206IG5vbmU7cGFkZGluZy1ib3R0b206IDA7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5udXRyaXRpb24taGVhZCBoNHtmb250LXNpemU6IDFyZW07Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjogIzAwMDt9XHJcbi5udXRyaXRpb24taGVhZCBwe2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4ubnV0cml0aW9uLXN1Yntmb250LXNpemU6IDAuODVyZW07ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbi1yaWdodDogMjBweDt9XHJcbi5udXRyaXRpb24tc3ViOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OiAwO31cclxuLm51dHJpdGlvbi1zdWIgaW9uLWljb257Zm9udC1zaXplOiAxcmVtO21hcmdpbi1yaWdodDogM3B4O2NvbG9yOiAjMjZhNjlhO31cclxuLm51dHJpdGlvbi1mbGV4e2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4vLyAuYWRkbW9yZXtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDEwcHg7dG9wOiAxMHB4O2NvbG9yOiAjRkZGO2ZvbnQtc2l6ZTogMS41cmVtO3otaW5kZXg6IDk5O3dpZHRoOiAzOHB4O2hlaWdodDogMzhweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO31cclxuLmRldGFpbHMtbGlzdHtwYWRkaW5nOiAwO1xyXG4gICAgaW9uLWl0ZW17cGFkZGluZy10b3A6IDA7LS1taW4taGVpZ2h0OiBhdXRvO2ZvbnQtc2l6ZTogMC44NXJlbTt9XHJcbiAgICBpb24tbGFiZWx7bWFyZ2luOiAwO31cclxufVxyXG4ucG9zaXRpb24tcmVsYXRpdmV7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmluc3RydWN0aW9ucy1saXN0e1xyXG4gICAgLmJldmVyYWdlc0xpc3R7XHJcbiAgICAgICAgcDpmaXJzdC1jaGlsZHt3aWR0aDogNSU7fVxyXG4gICAgfVxyXG4gICAgLmJldmVyYWdlc0xpc3QraW9uLWl0ZW17XHJcbiAgICAgICAgcDpmaXJzdC1jaGlsZHt3aWR0aDogNSU7fVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJldmlldy1pbWcgaW1ne2hlaWdodDogMjUwcHg7d2lkdGg6IDEwMCU7b2JqZWN0LWZpdDogY29udGFpbjsgb2JqZWN0LXBvc2l0aW9uOiB0b3A7fVxyXG5pb24tY2FyZHtib3JkZXI6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTttYXJnaW46IDA7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgaW9uLWZhYntwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAxM3B4O3JpZ2h0OiAxNXB4O2NvbG9yOiAjMjZhNjlhO31cclxuICAgIH1cclxufVxyXG5pb24tbGlzdC5pbmdyZWRpZW50LWxpc3R7cGFkZGluZzogMDtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGlvbi1saXN0LWhlYWRlcntjb2xvcjogIzI2YTY5YTtmb250LXNpemU6IC44NXJlbTtmb250LXdlaWdodDogNTAwO31cclxufVxyXG5pb24tbGlzdC5pbnN0cnVjdGlvbnMtbGlzdHtwYWRkaW5nOiAwO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO3BhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgaW9uLWxpc3QtaGVhZGVye2NvbG9yOiAjMjZhNjlhO2ZvbnQtc2l6ZTogLjg1cmVtO2ZvbnQtd2VpZ2h0OiA1MDA7fVxyXG59XHJcbi5pbmdyZWRpZW50SXRlbXN7ZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7cGFkZGluZzogMCAxNXB4O1xyXG4gICAgcCB7YmFja2dyb3VuZDogI2YxZjFmMTttYXJnaW4tcmlnaHQ6IDVweDtib3JkZXItcmFkaXVzOiAzMHB4O3BhZGRpbmc6IDRweCAxM3B4O21hcmdpbi1ib3R0b206IDVweDt9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: NutritionDetailModalComponent */

  /***/
  function srcAppNutritionListNutritionDetailModalNutritionDetailModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionDetailModalComponent", function () {
      return NutritionDetailModalComponent;
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
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NutritionDetailModalComponent = /*#__PURE__*/function () {
      function NutritionDetailModalComponent(commonService, navParams, nutritionService, router, alertController) {
        _classCallCheck(this, NutritionDetailModalComponent);

        this.commonService = commonService;
        this.navParams = navParams;
        this.nutritionService = nutritionService;
        this.router = router;
        this.alertController = alertController;
        this.items = []; // public sliderOpts: any = [];

        this.totalMinerals = new Array();
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].imgUrl;
        this.sliderOpts = {
          initialSlide: 0,
          speed: 400,
          zoom: true,
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 0
        };
        this.items = [{
          expanded: false
        }];
      }

      _createClass(NutritionDetailModalComponent, [{
        key: "slidesDidLoad",
        value: function slidesDidLoad(slides) {
          slides.startAutoplay();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.slides.stopAutoplay();
        } //

      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
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
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }, {
        key: "slidePrev",
        value: function slidePrev(slides) {
          this.slides.slidePrev();
        }
      }, {
        key: "slideNext",
        value: function slideNext(slides) {
          this.slides.slideNext();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.commonService.dismissModal();
        } // deleteNutridtion(id){
        //   this.commonService.presentLoader();
        //   this.nutritionService.deleteNutrition({'id':id}).subscribe((data: any) => {
        //     this.commonService.dismissLoader();
        //     this.router.navigate(['/nutrition-list']);
        //   });
        // }

      }, {
        key: "deleteNutrition",
        value: function deleteNutrition(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Are you sure you want delete this nutrition?',
                      // message: 'Once deleted, you will not be able to recover your account !!!',
                      cssClass: 'custom-alert',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          _this.commonService.presentLoader();

                          _this.nutritionService.deleteNutrition({
                            'id': id
                          }).subscribe(function (data) {
                            if (data) {
                              _this.commonService.dismissModal(); // this.router.navigateByUrl('/nutrition-list');


                              // this.router.navigateByUrl('/nutrition-list');
                              _this.router.navigate(['../nutrition-list']);

                              _this.commonService.dismissLoader();
                            }
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "expandItem",
        value: function expandItem(item) {
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
      }]);

      return NutritionDetailModalComponent;
    }();

    NutritionDetailModalComponent.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__["NutritionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])], NutritionDetailModalComponent.prototype, "slides", void 0);
    NutritionDetailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nutrition-detail-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nutrition-detail-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nutrition-detail-modal.component.scss */
      "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_5__["NutritionService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], NutritionDetailModalComponent);
    /***/
  },

  /***/
  "./src/app/nutrition-list/nutrition-list-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/nutrition-list/nutrition-list-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: NutritionListPageRoutingModule */

  /***/
  function srcAppNutritionListNutritionListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionListPageRoutingModule", function () {
      return NutritionListPageRoutingModule;
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


    var _nutrition_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nutrition-list.page */
    "./src/app/nutrition-list/nutrition-list.page.ts");

    var routes = [{
      path: '',
      component: _nutrition_list_page__WEBPACK_IMPORTED_MODULE_3__["NutritionListPage"]
    }];

    var NutritionListPageRoutingModule = function NutritionListPageRoutingModule() {
      _classCallCheck(this, NutritionListPageRoutingModule);
    };

    NutritionListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NutritionListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/nutrition-list/nutrition-list.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/nutrition-list/nutrition-list.module.ts ***!
    \*********************************************************/

  /*! exports provided: NutritionListPageModule */

  /***/
  function srcAppNutritionListNutritionListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionListPageModule", function () {
      return NutritionListPageModule;
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


    var _nutrition_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nutrition-list-routing.module */
    "./src/app/nutrition-list/nutrition-list-routing.module.ts");
    /* harmony import */


    var _nutrition_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nutrition-list.page */
    "./src/app/nutrition-list/nutrition-list.page.ts");
    /* harmony import */


    var _nutrition_list_nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component */
    "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../profile/components.modules */
    "./src/app/profile/components.modules.ts");
    /* harmony import */


    var _pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pipe.module */
    "./src/app/nutrition-list/pipe.module.ts");

    var NutritionListPageModule = function NutritionListPageModule() {
      _classCallCheck(this, NutritionListPageModule);
    };

    NutritionListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"], _nutrition_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["NutritionListPageRoutingModule"], _pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"]],
      declarations: [_nutrition_list_page__WEBPACK_IMPORTED_MODULE_6__["NutritionListPage"], _nutrition_list_nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["NutritionDetailModalComponent"]],
      entryComponents: [_nutrition_list_nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["NutritionDetailModalComponent"]]
    })], NutritionListPageModule);
    /***/
  },

  /***/
  "./src/app/nutrition-list/nutrition-list.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/nutrition-list/nutrition-list.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutritionListNutritionListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin-left: 0;\n  margin-right: 0; }\n\nion-card:first-child {\n  margin-top: 0; }\n\n.grey-header {\n  padding: 10px; }\n\n.inner-slider ion-slide {\n  height: auto;\n  flex-direction: column;\n  background: transparent; }\n\n.inner-slider ion-slide div {\n    width: 128px;\n    height: 128px; }\n\n.inner-slider ion-slide ion-label {\n  font-size: 0.85rem; }\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09); }\n\nion-slides {\n  background: transparent;\n  padding: 0 5px; }\n\n.swiper-slide img {\n  border-radius: 6px;\n  height: 85px;\n  margin-bottom: 5px; }\n\n.nutritionCard {\n  border-radius: 0;\n  box-shadow: none;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.nutritionCard ion-card-header {\n    color: #FFF;\n    background: #26a69a;\n    height: 45px;\n    line-height: 45px;\n    padding: 0 16px; }\n\nion-card {\n  border-radius: 0; }\n\nion-card ion-card-header {\n    margin-bottom: 0; }\n\nion-card ion-card-content ion-segment {\n    margin: 10px 0; }\n\nion-card ion-card-content ion-segment ion-segment-button {\n      width: 32%;\n      max-width: 130px;\n      background: #f3f3f3;\n      padding: 0;\n      margin: 0 5px;\n      --padding-start: 0;\n      --padding-end: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      height: auto;\n      --color-checked: transparent; }\n\nion-card ion-card-content ion-segment ion-segment-button img {\n        height: 100%;\n        margin-bottom: 5px;\n        -o-object-fit: cover;\n           object-fit: cover; }\n\nion-card ion-card-content ion-segment ion-segment-button ion-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        --background: #26a69a;\n        --box-shadow: none;\n        color: #FFF;\n        --padding-start: 0;\n        --padding-end: 0;\n        height: auto;\n        font-size: 16px;\n        margin: 3px;\n        z-index: 9;\n        --border-radius:50%; }\n\nion-card ion-card-content ion-segment ion-segment-button ion-label {\n        font-size: 0.75rem;\n        margin: 0;\n        text-transform: capitalize;\n        letter-spacing: 0;\n        color: #444; }\n\nion-card ion-card-content ion-segment ion-segment-button:first-child {\n      margin-left: 15px; }\n\nion-skeleton-text.grey-header {\n  border-radius: 0; }\n\n.nutrition-no-data {\n  height: calc(100vh - 320px); }\n\nion-segment {\n  margin-right: 10px; }\n\nion-segment-button {\n  height: 200px; }\n\n.checkboxThumb {\n  width: 100%;\n  height: 170px; }\n\n.item-image {\n  width: 100%;\n  height: 80%; }\n\n.item-no-image {\n  height: 80%; }\n\n.item-label-title {\n  width: 100%;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  padding: 10px; }\n\n.item-label-title ion-label {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.search-bar {\n  margin-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG51dHJpdGlvbi1saXN0XFxudXRyaXRpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUyxjQUFjO0VBQUMsZUFBZSxFQUFBOztBQUN2QztFQUFxQixhQUFhLEVBQUE7O0FBQ2xDO0VBQWEsYUFBYSxFQUFBOztBQUMxQjtFQUNjLFlBQVk7RUFBQyxzQkFBc0I7RUFBQyx1QkFBdUIsRUFBQTs7QUFEekU7SUFFWSxZQUFZO0lBQUMsYUFBYSxFQUFBOztBQUt0QztFQUFrQyxrQkFBa0IsRUFBQTs7QUFDcEQ7RUFBWSwrQ0FBK0MsRUFBQTs7QUFDM0Q7RUFBVyx1QkFBdUI7RUFBQyxjQUFjLEVBQUE7O0FBQ2pEO0VBQWtCLGtCQUFrQjtFQUFDLFlBQVk7RUFBQyxrQkFBa0IsRUFBQTs7QUFDcEU7RUFBZSxnQkFBZ0I7RUFBQyxnQkFBZ0I7RUFBQyxnQkFBZ0I7RUFBQyxhQUFZLEVBQUE7O0FBQTlFO0lBQ29CLFdBQVc7SUFBQyxtQkFBbUI7SUFBQyxZQUFZO0lBQUMsaUJBQWlCO0lBQUMsZUFBZSxFQUFBOztBQUdsRztFQUFTLGdCQUFnQixFQUFBOztBQUF6QjtJQUNvQixnQkFBZ0IsRUFBQTs7QUFEcEM7SUFHb0IsY0FBYyxFQUFBOztBQUhsQztNQUkrQixVQUFVO01BQUMsZ0JBQWdCO01BQUMsbUJBQW1CO01BQUMsVUFBVTtNQUFDLGFBQWE7TUFBQyxrQkFBZ0I7TUFBRyxnQkFBYztNQUFHLGtCQUFrQjtNQUFDLGdCQUFnQjtNQUFFLFlBQVk7TUFBQyw0QkFBZ0IsRUFBQTs7QUFKOU07UUFLb0IsWUFBWTtRQUFDLGtCQUFrQjtRQUFDLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTs7QUFMckU7UUFNMkIsa0JBQWtCO1FBQUMsTUFBTTtRQUFDLFFBQVE7UUFBQyxxQkFBYTtRQUFTLGtCQUFhO1FBQU0sV0FBVztRQUFDLGtCQUFnQjtRQUFHLGdCQUFjO1FBQUcsWUFBWTtRQUFDLGVBQWU7UUFBQyxXQUFXO1FBQUMsVUFBVTtRQUFDLG1CQUFnQixFQUFBOztBQU4zTjtRQU8wQixrQkFBa0I7UUFBQyxTQUFTO1FBQUMsMEJBQTBCO1FBQUMsaUJBQWlCO1FBQUMsV0FBVyxFQUFBOztBQVAvRztNQVMyQyxpQkFBaUIsRUFBQTs7QUFJNUQ7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFBbUIsMkJBQTJCLEVBQUE7O0FBRTlDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL251dHJpdGlvbi1saXN0L251dHJpdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke21hcmdpbi1sZWZ0OiAwO21hcmdpbi1yaWdodDogMDt9XHJcbmlvbi1jYXJkOmZpcnN0LWNoaWxke21hcmdpbi10b3A6IDA7fVxyXG4uZ3JleS1oZWFkZXJ7cGFkZGluZzogMTBweDt9XHJcbi5pbm5lci1zbGlkZXJ7XHJcbiAgICBpb24tc2xpZGV7aGVpZ2h0OiBhdXRvO2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZGl2e3dpZHRoOiAxMjhweDtoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgICBpbWd7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaW5uZXItc2xpZGVyIGlvbi1zbGlkZSBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjg1cmVtO31cclxuLnZpZGVvLWNhcmR7Ym94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7fVxyXG5pb24tc2xpZGVze2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O3BhZGRpbmc6IDAgNXB4O31cclxuLnN3aXBlci1zbGlkZSBpbWd7Ym9yZGVyLXJhZGl1czogNnB4O2hlaWdodDogODVweDttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4ubnV0cml0aW9uQ2FyZHtib3JkZXItcmFkaXVzOiAwO2JveC1zaGFkb3c6IG5vbmU7bWFyZ2luLWJvdHRvbTogMDttYXJnaW4tdG9wOjA7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7Y29sb3I6ICNGRkY7YmFja2dyb3VuZDogIzI2YTY5YTtoZWlnaHQ6IDQ1cHg7bGluZS1oZWlnaHQ6IDQ1cHg7cGFkZGluZzogMCAxNnB4O31cclxufVxyXG5cclxuaW9uLWNhcmR7Ym9yZGVyLXJhZGl1czogMDtcclxuICAgIGlvbi1jYXJkLWhlYWRlcnttYXJnaW4tYm90dG9tOiAwO31cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaW9uLXNlZ21lbnR7bWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbnt3aWR0aDogMzIlO21heC13aWR0aDogMTMwcHg7YmFja2dyb3VuZDogI2YzZjNmMztwYWRkaW5nOiAwO21hcmdpbjogMCA1cHg7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7Ym9yZGVyLXJhZGl1czogNHB4O292ZXJmbG93OiBoaWRkZW47IGhlaWdodDogYXV0bzstLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgaW1ne2hlaWdodDogMTAwJTttYXJnaW4tYm90dG9tOiA1cHg7b2JqZWN0LWZpdDogY292ZXI7fVxyXG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO3JpZ2h0OiAwOy0tYmFja2dyb3VuZDogIzI2YTY5YTstLWJveC1zaGFkb3c6IG5vbmU7Y29sb3I6ICNGRkY7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7aGVpZ2h0OiBhdXRvO2ZvbnQtc2l6ZTogMTZweDttYXJnaW46IDNweDt6LWluZGV4OiA5Oy0tYm9yZGVyLXJhZGl1czo1MCV9XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO21hcmdpbjogMDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtsZXR0ZXItc3BhY2luZzogMDtjb2xvcjogIzQ0NDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAxNXB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLXNrZWxldG9uLXRleHQuZ3JleS1oZWFkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4vLyBoaXRlc2ggY3NzIHN0cnRcclxuLm51dHJpdGlvbi1uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDMyMHB4KTt9XHJcbi8vIGhpdGVzaCBjc3MgZW5kc1xyXG5pb24tc2VnbWVudHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5jaGVja2JveFRodW1ie1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG59XHJcbi5pdGVtLWltYWdle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG4uaXRlbS1uby1pbWFnZXtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcbi5pdGVtLWxhYmVsLXRpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5pdGVtLWxhYmVsLXRpdGxlIGlvbi1sYWJlbHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNlYXJjaC1iYXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/nutrition-list/nutrition-list.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/nutrition-list/nutrition-list.page.ts ***!
    \*******************************************************/

  /*! exports provided: NutritionListPage */

  /***/
  function srcAppNutritionListNutritionListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionListPage", function () {
      return NutritionListPage;
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
    /*! ../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nutrition-detail-modal/nutrition-detail-modal.component */
    "./src/app/nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component.ts");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var NutritionListPage = /*#__PURE__*/function () {
      function NutritionListPage(commonService, navCtrl, nutritionService, modalCtrl) {
        _classCallCheck(this, NutritionListPage);

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

      _createClass(NutritionListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.nutritionService.getNutritionByUser('').subscribe(function (data) {
            _this2.nutritionList = data.nutritionList.filter(function (el) {
              console.log(data.nutritionList);

              if (el.image_path) {
                el.img_array = el.image_path.split(',');
              }

              return el;
            });
          });
        }
      }, {
        key: "showdetails",
        value: function showdetails(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _nutrition_detail_modal_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__["NutritionDetailModalComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        'details': item
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (d) {
                      _this3.ngOnInit();
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return NutritionListPage;
    }();

    NutritionListPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    NutritionListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nutrition-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nutrition-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition-list/nutrition-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nutrition-list.page.scss */
      "./src/app/nutrition-list/nutrition-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], NutritionListPage);
    /***/
  }
}]);
//# sourceMappingURL=nutrition-list-nutrition-list-module-es5.js.map