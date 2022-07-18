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


    __webpack_exports__["default"] = ".swiper-slide {\n  background: #fbfbfb;\n}\n\n.grey-header {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  font-size: 0.75rem;\n  color: #000;\n  text-transform: uppercase;\n}\n\n.ingredient-list ion-item, .instructions-list ion-item {\n  --min-height:auto;\n}\n\n.ingredient-list ion-item p, .instructions-list ion-item p {\n  width: 100%;\n  border-bottom: 1px solid whitesmoke;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\n.ingredient-list ion-item:last-child p, .instructions-list ion-item:last-child p {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n.nutrition-head h4 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #000;\n}\n\n.nutrition-head p {\n  line-height: 1.5;\n}\n\n.nutrition-sub {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n\n.nutrition-sub:last-child {\n  margin-right: 0;\n}\n\n.nutrition-sub ion-icon {\n  font-size: 1rem;\n  margin-right: 3px;\n  color: #26a69a;\n}\n\n.nutrition-flex {\n  display: flex;\n  align-items: center;\n}\n\n.details-list {\n  padding: 0;\n}\n\n.details-list ion-item {\n  padding-top: 0;\n  --min-height: auto;\n  font-size: 0.85rem;\n}\n\n.details-list ion-label {\n  margin: 0;\n}\n\n.position-relative {\n  position: relative;\n}\n\n.instructions-list .beveragesList p:first-child {\n  width: 5%;\n}\n\n.instructions-list .beveragesList + ion-item p:first-child {\n  width: 5%;\n}\n\n.preview-img img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: top;\n     object-position: top;\n}\n\nion-card {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-bottom: 4px solid #f1f1f1;\n}\n\nion-card ion-card-header ion-fab {\n  position: absolute;\n  top: 13px;\n  right: 15px;\n  color: #26a69a;\n}\n\nion-list.ingredient-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px;\n}\n\nion-list.ingredient-list ion-list-header {\n  color: #26a69a;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\nion-list.instructions-list {\n  padding: 0;\n  border-bottom: 4px solid #f1f1f1;\n  padding-bottom: 15px;\n}\n\nion-list.instructions-list ion-list-header {\n  color: #26a69a;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.ingredientItems {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 15px;\n}\n\n.ingredientItems p {\n  background: #f1f1f1;\n  margin-right: 5px;\n  border-radius: 30px;\n  padding: 4px 13px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWRldGFpbC1tb2RhbC9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxudXRyaXRpb24tbGlzdFxcbnV0cml0aW9uLWRldGFpbC1tb2RhbFxcbnV0cml0aW9uLWRldGFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWRldGFpbC1tb2RhbC9udXRyaXRpb24tZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsbUJBQUE7QUNFZDs7QUREQTtFQUFhLHlCQUFBO0VBQTBCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSx5QkFBQTtBQ1MxRjs7QURSQTtFQUF1RCxpQkFBQTtBQ1l2RDs7QURYQTtFQUEyRCxXQUFBO0VBQVksbUNBQUE7RUFBb0Msb0JBQUE7RUFBcUIsbUJBQUE7RUFBb0IsZ0JBQUE7QUNtQnBKOztBRGxCQTtFQUFpRixtQkFBQTtFQUFvQixpQkFBQTtFQUFrQixnQkFBQTtBQ3dCdkg7O0FEdkJBO0VBQW1CLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsV0FBQTtBQzZCcEQ7O0FENUJBO0VBQWtCLGdCQUFBO0FDZ0NsQjs7QUQvQkE7RUFBZSxrQkFBQTtFQUFtQixhQUFBO0VBQWMsbUJBQUE7RUFBb0Isa0JBQUE7QUNzQ3BFOztBRHJDQTtFQUEwQixlQUFBO0FDeUMxQjs7QUR4Q0E7RUFBd0IsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixjQUFBO0FDOEMxRDs7QUQ3Q0E7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0FDa0QvQjs7QURoREE7RUFBYyxVQUFBO0FDb0RkOztBRG5ESTtFQUFTLGNBQUE7RUFBZSxrQkFBQTtFQUFtQixrQkFBQTtBQ3dEL0M7O0FEdkRJO0VBQVUsU0FBQTtBQzBEZDs7QUR4REE7RUFBbUIsa0JBQUE7QUM0RG5COztBRHpEUTtFQUFjLFNBQUE7QUM2RHRCOztBRDFEUTtFQUFjLFNBQUE7QUM2RHRCOztBRHpEQTtFQUFpQixhQUFBO0VBQWMsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7RUFBcUIsdUJBQUE7S0FBQSxvQkFBQTtBQ2dFaEU7O0FEL0RBO0VBQVMsWUFBQTtFQUFhLGdCQUFBO0VBQWlCLFNBQUE7RUFBVSxnQ0FBQTtBQ3NFakQ7O0FEcEVRO0VBQVEsa0JBQUE7RUFBbUIsU0FBQTtFQUFVLFdBQUE7RUFBWSxjQUFBO0FDMEV6RDs7QUR2RUE7RUFBeUIsVUFBQTtFQUFXLGdDQUFBO0VBQWlDLG9CQUFBO0FDNkVyRTs7QUQ1RUk7RUFBZ0IsY0FBQTtFQUFlLGtCQUFBO0VBQWtCLGdCQUFBO0FDaUZyRDs7QUQvRUE7RUFBMkIsVUFBQTtFQUFXLGdDQUFBO0VBQWlDLG9CQUFBO0FDcUZ2RTs7QURwRkk7RUFBZ0IsY0FBQTtFQUFlLGtCQUFBO0VBQWtCLGdCQUFBO0FDeUZyRDs7QUR2RkE7RUFBaUIsYUFBQTtFQUFjLGVBQUE7RUFBZ0IsZUFBQTtBQzZGL0M7O0FENUZJO0VBQUcsbUJBQUE7RUFBb0IsaUJBQUE7RUFBa0IsbUJBQUE7RUFBb0IsaUJBQUE7RUFBa0Isa0JBQUE7QUNtR25GIiwiZmlsZSI6InNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWRldGFpbC1tb2RhbC9udXRyaXRpb24tZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZXtiYWNrZ3JvdW5kOiAjZmJmYmZiO31cclxuLmdyZXktaGVhZGVye3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTogMTVweDtmb250LXNpemU6IDAuNzVyZW07Y29sb3I6ICMwMDA7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XHJcbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW0sIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6YXV0b31cclxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbSBwLCAuaW5zdHJ1Y3Rpb25zLWxpc3QgaW9uLWl0ZW0gcHt3aWR0aDogMTAwJTtib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtwYWRkaW5nLWJvdHRvbTogMTBweDttYXJnaW4tYm90dG9tOiAxMHB4O2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQgcCwgLmluc3RydWN0aW9ucy1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQgcHtib3JkZXItYm90dG9tOiBub25lO3BhZGRpbmctYm90dG9tOiAwO21hcmdpbi1ib3R0b206IDA7fVxyXG4ubnV0cml0aW9uLWhlYWQgaDR7Zm9udC1zaXplOiAxcmVtO2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICMwMDA7fVxyXG4ubnV0cml0aW9uLWhlYWQgcHtsaW5lLWhlaWdodDogMS41O31cclxuLm51dHJpdGlvbi1zdWJ7Zm9udC1zaXplOiAwLjg1cmVtO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW4tcmlnaHQ6IDIwcHg7fVxyXG4ubnV0cml0aW9uLXN1YjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDogMDt9XHJcbi5udXRyaXRpb24tc3ViIGlvbi1pY29ue2ZvbnQtc2l6ZTogMXJlbTttYXJnaW4tcmlnaHQ6IDNweDtjb2xvcjogIzI2YTY5YTt9XHJcbi5udXRyaXRpb24tZmxleHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cclxuLy8gLmFkZG1vcmV7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxMHB4O3RvcDogMTBweDtjb2xvcjogI0ZGRjtmb250LXNpemU6IDEuNXJlbTt6LWluZGV4OiA5OTt3aWR0aDogMzhweDtoZWlnaHQ6IDM4cHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5kZXRhaWxzLWxpc3R7cGFkZGluZzogMDtcclxuICAgIGlvbi1pdGVte3BhZGRpbmctdG9wOiAwOy0tbWluLWhlaWdodDogYXV0bztmb250LXNpemU6IDAuODVyZW07fVxyXG4gICAgaW9uLWxhYmVse21hcmdpbjogMDt9XHJcbn1cclxuLnBvc2l0aW9uLXJlbGF0aXZle3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5pbnN0cnVjdGlvbnMtbGlzdHtcclxuICAgIC5iZXZlcmFnZXNMaXN0e1xyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGR7d2lkdGg6IDUlO31cclxuICAgIH1cclxuICAgIC5iZXZlcmFnZXNMaXN0K2lvbi1pdGVte1xyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGR7d2lkdGg6IDUlO31cclxuICAgIH1cclxufVxyXG5cclxuLnByZXZpZXctaW1nIGltZ3toZWlnaHQ6IDI1MHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47IG9iamVjdC1wb3NpdGlvbjogdG9wO31cclxuaW9uLWNhcmR7Ym9yZGVyOiBub25lO2JveC1zaGFkb3c6IG5vbmU7bWFyZ2luOiAwO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgIGlvbi1mYWJ7cG9zaXRpb246IGFic29sdXRlO3RvcDogMTNweDtyaWdodDogMTVweDtjb2xvcjogIzI2YTY5YTt9XHJcbiAgICB9XHJcbn1cclxuaW9uLWxpc3QuaW5ncmVkaWVudC1saXN0e3BhZGRpbmc6IDA7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7cGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBpb24tbGlzdC1oZWFkZXJ7Y29sb3I6ICMyNmE2OWE7Zm9udC1zaXplOiAuODVyZW07Zm9udC13ZWlnaHQ6IDUwMDt9XHJcbn1cclxuaW9uLWxpc3QuaW5zdHJ1Y3Rpb25zLWxpc3R7cGFkZGluZzogMDtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGlvbi1saXN0LWhlYWRlcntjb2xvcjogIzI2YTY5YTtmb250LXNpemU6IC44NXJlbTtmb250LXdlaWdodDogNTAwO31cclxufVxyXG4uaW5ncmVkaWVudEl0ZW1ze2Rpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO3BhZGRpbmc6IDAgMTVweDtcclxuICAgIHAge2JhY2tncm91bmQ6ICNmMWYxZjE7bWFyZ2luLXJpZ2h0OiA1cHg7Ym9yZGVyLXJhZGl1czogMzBweDtwYWRkaW5nOiA0cHggMTNweDttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG59IiwiLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG59XG5cbi5ncmV5LWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbmdyZWRpZW50LWxpc3QgaW9uLWl0ZW0sIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDphdXRvO1xufVxuXG4uaW5ncmVkaWVudC1saXN0IGlvbi1pdGVtIHAsIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmluZ3JlZGllbnQtbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHAsIC5pbnN0cnVjdGlvbnMtbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHAge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm51dHJpdGlvbi1oZWFkIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm51dHJpdGlvbi1oZWFkIHAge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ubnV0cml0aW9uLXN1YiB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubnV0cml0aW9uLXN1YjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubnV0cml0aW9uLXN1YiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGNvbG9yOiAjMjZhNjlhO1xufVxuXG4ubnV0cml0aW9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGV0YWlscy1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cbi5kZXRhaWxzLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG4uZGV0YWlscy1saXN0IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5zdHJ1Y3Rpb25zLWxpc3QgLmJldmVyYWdlc0xpc3QgcDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA1JTtcbn1cbi5pbnN0cnVjdGlvbnMtbGlzdCAuYmV2ZXJhZ2VzTGlzdCArIGlvbi1pdGVtIHA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNSU7XG59XG5cbi5wcmV2aWV3LWltZyBpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjMjZhNjlhO1xufVxuXG5pb24tbGlzdC5pbmdyZWRpZW50LWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5pb24tbGlzdC5pbmdyZWRpZW50LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgY29sb3I6ICMyNmE2OWE7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWxpc3QuaW5zdHJ1Y3Rpb25zLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5pb24tbGlzdC5pbnN0cnVjdGlvbnMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBjb2xvcjogIzI2YTY5YTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5ncmVkaWVudEl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uaW5ncmVkaWVudEl0ZW1zIHAge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNHB4IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */";
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


    __webpack_exports__["default"] = "ion-card {\n  margin-left: 0;\n  margin-right: 0;\n}\n\nion-card:first-child {\n  margin-top: 0;\n}\n\n.grey-header {\n  padding: 10px;\n}\n\n.inner-slider ion-slide {\n  height: auto;\n  flex-direction: column;\n  background: transparent;\n}\n\n.inner-slider ion-slide div {\n  width: 128px;\n  height: 128px;\n}\n\n.inner-slider ion-slide ion-label {\n  font-size: 0.85rem;\n}\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09);\n}\n\nion-slides {\n  background: transparent;\n  padding: 0 5px;\n}\n\n.swiper-slide img {\n  border-radius: 6px;\n  height: 85px;\n  margin-bottom: 5px;\n}\n\n.nutritionCard {\n  border-radius: 0;\n  box-shadow: none;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.nutritionCard ion-card-header {\n  color: #FFF;\n  background: #26a69a;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 16px;\n}\n\nion-card {\n  border-radius: 0;\n}\n\nion-card ion-card-header {\n  margin-bottom: 0;\n}\n\nion-card ion-card-content ion-segment {\n  margin: 10px 0;\n}\n\nion-card ion-card-content ion-segment ion-segment-button {\n  width: 32%;\n  max-width: 130px;\n  background: #f3f3f3;\n  padding: 0;\n  margin: 0 5px;\n  --padding-start: 0;\n  --padding-end: 0;\n  border-radius: 4px;\n  overflow: hidden;\n  height: auto;\n  --color-checked: transparent;\n}\n\nion-card ion-card-content ion-segment ion-segment-button img {\n  height: 100%;\n  margin-bottom: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-card ion-card-content ion-segment ion-segment-button ion-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  --background: #26a69a;\n  --box-shadow: none;\n  color: #FFF;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: auto;\n  font-size: 16px;\n  margin: 3px;\n  z-index: 9;\n  --border-radius:50%;\n}\n\nion-card ion-card-content ion-segment ion-segment-button ion-label {\n  font-size: 0.75rem;\n  margin: 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  color: #444;\n}\n\nion-card ion-card-content ion-segment ion-segment-button:first-child {\n  margin-left: 15px;\n}\n\nion-skeleton-text.grey-header {\n  border-radius: 0;\n}\n\n.nutrition-no-data {\n  height: calc(100vh - 320px);\n}\n\nion-segment {\n  margin-right: 10px;\n}\n\nion-segment-button {\n  height: 200px;\n}\n\n.checkboxThumb {\n  width: 100%;\n  height: 170px;\n}\n\n.item-image {\n  width: 100%;\n  height: 80%;\n}\n\n.item-no-image {\n  height: 80%;\n}\n\n.item-label-title {\n  width: 100%;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.item-label-title ion-label {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.search-bar {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcbnV0cml0aW9uLWxpc3RcXG51dHJpdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsY0FBQTtFQUFlLGVBQUE7QUNHeEI7O0FERkE7RUFBcUIsYUFBQTtBQ01yQjs7QURMQTtFQUFhLGFBQUE7QUNTYjs7QURQSTtFQUFVLFlBQUE7RUFBYSxzQkFBQTtFQUF1Qix1QkFBQTtBQ2FsRDs7QURaUTtFQUFJLFlBQUE7RUFBYSxhQUFBO0FDZ0J6Qjs7QURYQTtFQUFrQyxrQkFBQTtBQ2NsQzs7QURiQTtFQUFZLCtDQUFBO0FDaUJaOztBRGhCQTtFQUFXLHVCQUFBO0VBQXdCLGNBQUE7QUNxQm5DOztBRHBCQTtFQUFrQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsa0JBQUE7QUMwQmxEOztBRHpCQTtFQUFlLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLGFBQUE7QUNnQ2xFOztBRC9CSTtFQUFnQixXQUFBO0VBQVksbUJBQUE7RUFBb0IsWUFBQTtFQUFhLGlCQUFBO0VBQWtCLGVBQUE7QUNzQ25GOztBRG5DQTtFQUFTLGdCQUFBO0FDdUNUOztBRHRDSTtFQUFnQixnQkFBQTtBQ3lDcEI7O0FEdkNRO0VBQVksY0FBQTtBQzBDcEI7O0FEekNZO0VBQW1CLFVBQUE7RUFBVyxnQkFBQTtFQUFpQixtQkFBQTtFQUFvQixVQUFBO0VBQVcsYUFBQTtFQUFjLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLFlBQUE7RUFBYSw0QkFBQTtBQ3NEOUw7O0FEckRnQjtFQUFJLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixvQkFBQTtLQUFBLGlCQUFBO0FDMERwRDs7QUR6RGdCO0VBQVcsa0JBQUE7RUFBbUIsTUFBQTtFQUFPLFFBQUE7RUFBUyxxQkFBQTtFQUFzQixrQkFBQTtFQUFtQixXQUFBO0VBQVksa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsWUFBQTtFQUFhLGVBQUE7RUFBZ0IsV0FBQTtFQUFZLFVBQUE7RUFBVyxtQkFBQTtBQ3dFM007O0FEdkVnQjtFQUFVLGtCQUFBO0VBQW1CLFNBQUE7RUFBVSwwQkFBQTtFQUEyQixpQkFBQTtFQUFrQixXQUFBO0FDOEVwRzs7QUQ1RVk7RUFBK0IsaUJBQUE7QUMrRTNDOztBRDNFQTtFQUNJLGdCQUFBO0FDOEVKOztBRDNFQTtFQUFtQiwyQkFBQTtBQytFbkI7O0FEN0VBO0VBQ0ksa0JBQUE7QUNnRko7O0FEOUVBO0VBQ0ksYUFBQTtBQ2lGSjs7QUQvRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ2tGSjs7QURoRkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ21GSjs7QURqRkE7RUFDSSxXQUFBO0FDb0ZKOztBRGxGQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNxRko7O0FEbkZBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDc0ZKOztBRHBGQTtFQUNJLGtCQUFBO0FDdUZKIiwiZmlsZSI6InNyYy9hcHAvbnV0cml0aW9uLWxpc3QvbnV0cml0aW9uLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7bWFyZ2luLWxlZnQ6IDA7bWFyZ2luLXJpZ2h0OiAwO31cclxuaW9uLWNhcmQ6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDogMDt9XHJcbi5ncmV5LWhlYWRlcntwYWRkaW5nOiAxMHB4O31cclxuLmlubmVyLXNsaWRlcntcclxuICAgIGlvbi1zbGlkZXtoZWlnaHQ6IGF1dG87ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBkaXZ7d2lkdGg6IDEyOHB4O2hlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICAgIGltZ3t9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pbm5lci1zbGlkZXIgaW9uLXNsaWRlIGlvbi1sYWJlbHtmb250LXNpemU6IDAuODVyZW07fVxyXG4udmlkZW8tY2FyZHtib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTt9XHJcbmlvbi1zbGlkZXN7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7cGFkZGluZzogMCA1cHg7fVxyXG4uc3dpcGVyLXNsaWRlIGltZ3tib3JkZXItcmFkaXVzOiA2cHg7aGVpZ2h0OiA4NXB4O21hcmdpbi1ib3R0b206IDVweDt9XHJcbi5udXRyaXRpb25DYXJke2JvcmRlci1yYWRpdXM6IDA7Ym94LXNoYWRvdzogbm9uZTttYXJnaW4tYm90dG9tOiAwO21hcmdpbi10b3A6MDtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntjb2xvcjogI0ZGRjtiYWNrZ3JvdW5kOiAjMjZhNjlhO2hlaWdodDogNDVweDtsaW5lLWhlaWdodDogNDVweDtwYWRkaW5nOiAwIDE2cHg7fVxyXG59XHJcblxyXG5pb24tY2FyZHtib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaW9uLWNhcmQtaGVhZGVye21hcmdpbi1ib3R0b206IDA7fVxyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBpb24tc2VnbWVudHttYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9ue3dpZHRoOiAzMiU7bWF4LXdpZHRoOiAxMzBweDtiYWNrZ3JvdW5kOiAjZjNmM2YzO3BhZGRpbmc6IDA7bWFyZ2luOiAwIDVweDstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDtib3JkZXItcmFkaXVzOiA0cHg7b3ZlcmZsb3c6IGhpZGRlbjsgaGVpZ2h0OiBhdXRvOy0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBpbWd7aGVpZ2h0OiAxMDAlO21hcmdpbi1ib3R0b206IDVweDtvYmplY3QtZml0OiBjb3Zlcjt9XHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9ue3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7cmlnaHQ6IDA7LS1iYWNrZ3JvdW5kOiAjMjZhNjlhOy0tYm94LXNoYWRvdzogbm9uZTtjb2xvcjogI0ZGRjstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDtoZWlnaHQ6IGF1dG87Zm9udC1zaXplOiAxNnB4O21hcmdpbjogM3B4O3otaW5kZXg6IDk7LS1ib3JkZXItcmFkaXVzOjUwJX1cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtmb250LXNpemU6IDAuNzVyZW07bWFyZ2luOiAwO3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2xldHRlci1zcGFjaW5nOiAwO2NvbG9yOiAjNDQ0O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tc2VnbWVudC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDE1cHg7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24tc2tlbGV0b24tdGV4dC5ncmV5LWhlYWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi8vIGhpdGVzaCBjc3Mgc3RydFxyXG4ubnV0cml0aW9uLW5vLWRhdGF7aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzIwcHgpO31cclxuLy8gaGl0ZXNoIGNzcyBlbmRzXHJcbmlvbi1zZWdtZW50e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmNoZWNrYm94VGh1bWJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbn1cclxuLml0ZW0taW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcbi5pdGVtLW5vLWltYWdle1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLml0ZW0tbGFiZWwtdGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLml0ZW0tbGFiZWwtdGl0bGUgaW9uLWxhYmVse1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2VhcmNoLWJhcntcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuaW9uLWNhcmQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uZ3JleS1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW5uZXItc2xpZGVyIGlvbi1zbGlkZSB7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaW5uZXItc2xpZGVyIGlvbi1zbGlkZSBkaXYge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG59XG4uaW5uZXItc2xpZGVyIGlvbi1zbGlkZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi52aWRlby1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7XG59XG5cbmlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm51dHJpdGlvbkNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm51dHJpdGlvbkNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6ICMyNmE2OWE7XG4gIGhlaWdodDogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXNlZ21lbnQge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDMyJTtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogIzI2YTY5YTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI0ZGRjtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAzcHg7XG4gIHotaW5kZXg6IDk7XG4gIC0tYm9yZGVyLXJhZGl1czo1MCU7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ0NDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi1za2VsZXRvbi10ZXh0LmdyZXktaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm51dHJpdGlvbi1uby1kYXRhIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzIwcHgpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNoZWNrYm94VGh1bWIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLml0ZW0taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5pdGVtLW5vLWltYWdlIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5pdGVtLWxhYmVsLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pdGVtLWxhYmVsLXRpdGxlIGlvbi1sYWJlbCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */";
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