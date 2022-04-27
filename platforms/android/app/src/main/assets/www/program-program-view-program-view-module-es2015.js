(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-view-program-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-view/program-view.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-view/program-view.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" slot=\"end\"></ion-icon> -->\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <!-- <ion-card-content class=\"item-content ion-no-padding\">\r\n        \r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>\r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\"> \r\n            <img src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-card-content> -->\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <!-- <ion-thumbnail>\r\n          <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail> -->\r\n        <!-- image/program/program_46_20210806150601_0.jpeg -->\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n          <ion-slide class=\"program-slides\"> \r\n            <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n              <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n            </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>            \r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n      <ion-list lines=\"none\" class=\"list-info\">\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/target.svg\" />\r\n          <ion-label>{{programDetail?.category_id}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/doller.png\" />\r\n          <ion-label>{{programFee}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/group.svg\" />\r\n          <ion-label>{{programDetail?.type_id}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/clock.svg\" />\r\n          <ion-label>{{programDetail?.program_duration || 0}} Min</ion-label>\r\n          </div>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-padding\">\r\n      <p class=\"mb-10\">{{programDetail?.description }} &nbsp;</p>      \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"counter-box ion-padding\" *ngIf=\"programDetail?.is_live_status == 1\">        \r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{dd | async}}</p> Days</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{hh | async}}</p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{mm| async}}</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{ss | async}}</p> Seconds</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n      <ion-text>This Program has been Ended </ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15 text-green\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"counter-box ion-padding\" *ngIf=\"programDetail?.is_live_status == 0\">        \r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Seconds</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n      <ion-text>This Program has been Ended </ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-button *ngIf=\"programDetail?.live\" [routerLink]=\"['/broadcaster',broadcastId]\">Go Live</ion-button> -->\r\n  <!-- <ion-label *ngIf=\"programDetail?.ended\" >This Program has been Ended  </ion-label> -->\r\n  \r\n  <!-- <ion-button [routerLink]=\"['/broadcaster',broadcastId]\">Tmp Live</ion-button> -->\r\n\r\n         <ion-button *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRequest()\" >Request To Join</ion-button> \r\n       <ion-button *ngIf=\"request_accs_pending && !programDetail?.ended\" size=\"small\" class=\"green btnVerify\" (click)=\"acceptRequest()\" >Accept Request</ion-button>      \r\n       <div class=\"users-list\" *ngIf=\"programDetail?.is_live_status == 1\">\r\n         <!-- <ion-button (click)=\"joinRoom()\">Join Room</ion-button> -->\r\n         <ion-button *ngIf=\"request_accs && !programDetail?.live && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\">Program will start sooon</ion-button>\r\n         <!-- <ion-button *ngIf=\"request_accs && !programDetail?.live\" size=\"small\"  class=\"green btnVerify\" (click)=\"payment()\">Payment</ion-button> -->\r\n         <ion-button *ngIf=\"programDetail?.ready  \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button>\r\n         <!-- <ion-button *ngIf=\"programDetail?.ready && prePayment \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button> -->\r\n        \r\n         <!-- <div *ngIf=\"request_accs && !programDetail?.live\" size=\"medium\"  >Program will start sooon   \r\n         </div>\r\n         <div *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"medium\"  (click)=\"joinRoom()\" >Requested to join Program \r\n        </div> -->\r\n      </div>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list lines=\"none\" class=\"top-list three-block\">\r\n        <ion-item (click)=\"equipments()\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-construct\" md=\"md-construct\"></ion-icon>\r\n          </div>\r\n          <ion-label>Equipments</ion-label>\r\n        </ion-item>\r\n        <!-- <ion-item [routerLink]=\"['/nutrition-list']\" detail=\"false\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n          </div>\r\n          <ion-label>Nutrition</ion-label>\r\n        </ion-item> -->\r\n        <ion-item *ngIf=\"programDetail?.chat_status == 1\" (click)=\"1()\" detail=\"false\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-text\" md=\"md-text\"></ion-icon>\r\n          </div>\r\n          <ion-label>Chat</ion-label>\r\n        </ion-item>\r\n        <ion-item detail=\"false\" (click)=\"showSchedule(programDetail)\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n          </div>\r\n          <ion-label>View Schedule</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-fab class=\"share-btn\" *ngIf=\"programDetail?.is_requested == 1\">\r\n        <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n          <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n      </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/program/program-view/program-view-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/program/program-view/program-view-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProgramViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramViewPageRoutingModule", function() { return ProgramViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program-view.page */ "./src/app/program/program-view/program-view.page.ts");




const routes = [
    {
        path: '',
        component: _program_view_page__WEBPACK_IMPORTED_MODULE_3__["ProgramViewPage"]
    }
];
let ProgramViewPageRoutingModule = class ProgramViewPageRoutingModule {
};
ProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgramViewPageRoutingModule);



/***/ }),

/***/ "./src/app/program/program-view/program-view.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/program/program-view/program-view.module.ts ***!
  \*************************************************************/
/*! exports provided: ProgramViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramViewPageModule", function() { return ProgramViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./program-view-routing.module */ "./src/app/program/program-view/program-view-routing.module.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _program_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./program-view.page */ "./src/app/program/program-view/program-view.page.ts");








let ProgramViewPageModule = class ProgramViewPageModule {
};
ProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramViewPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__["LazyLoadImageModule"]
        ],
        declarations: [_program_view_page__WEBPACK_IMPORTED_MODULE_7__["ProgramViewPage"]]
    })
], ProgramViewPageModule);



/***/ }),

/***/ "./src/app/program/program-view/program-view.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/program/program-view/program-view.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-list {\n  padding: 0;\n  margin: 10px 0; }\n\n.top-list ion-item {\n  --min-height: 85px;\n  background: #FFF;\n  box-shadow: none; }\n\n.top-list ion-item ion-label {\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem; }\n\n.users-list {\n  display: block;\n  width: 100%; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: 100%;\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list ion-item img:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px; }\n\n.list-info {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 6px; }\n\n.list-info ion-item {\n  width: 25%;\n  box-shadow: 0.001em 5px 12px rgba(34, 35, 58, 0.09);\n  margin: auto;\n  margin-bottom: 8px; }\n\n.list-info ion-item img {\n  width: 24px; }\n\n.list-info ion-item ion-label {\n  font-size: 0.85rem; }\n\n.btnVerify {\n  width: 100%;\n  margin: 0;\n  background: #27a69a;\n  --background: #27a69a;\n  --border-radius: 0;\n  border-radius: 0;\n  height: 50px; }\n\n.counter-box {\n  margin-bottom: 0; }\n\n.count_time {\n  font-size: 16px; }\n\nion-slides {\n  height: 190px; }\n\nion-item.icon-right-side.ion-text-end.item.md.in-list.ion-focusable.hydrated {\n  padding-left: 16px;\n  min-width: none; }\n\nion-item.icon-right-side.ion-text-end.item.ios.in-list.ion-focusable.hydrated {\n  padding-left: 16px;\n  min-width: none; }\n\n.icon-text {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0; }\n\n.icon-text img {\n  margin-bottom: 5px !important; }\n\np.text-green.text-center {\n  left: 0 !important; }\n\n.program-slides {\n  width: 95% !important; }\n\n.program-slide {\n  height: 300px; }\n\n.program-slides video {\n  height: 100%; }\n\n.program-slides img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n\np.text-green.text-center {\n  width: auto; }\n\nion-slide.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active {\n  flex-direction: column;\n  height: auto;\n  width: 47%;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLXZpZXcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXHByb2dyYW0tdmlld1xccHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFVBQVU7RUFBQyxjQUFjLEVBQUE7O0FBQ25DO0VBQW1CLGtCQUFhO0VBQU0sZ0JBQWdCO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3ZFO0VBQTZCLGNBQWM7RUFBQyxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsU0FBUztFQUFDLDJCQUEyQjtFQUFDLGNBQWMsRUFBQTs7QUFDL0g7RUFBVSxXQUFXO0VBQUMsWUFBWTtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxVQUFVO0VBQUMsU0FBUztFQUFDLDJCQUEyQixFQUFBOztBQUN2TTtFQUFvQixjQUFjO0VBQUMsa0JBQWtCLEVBQUE7O0FBRXJEO0VBQVksY0FBYztFQUFDLFdBQVcsRUFBQTs7QUFDdEM7RUFBcUIsa0JBQWE7RUFBTSxhQUFhO0VBQUMsV0FBVztFQUFDLGtCQUFnQjtFQUFHLHNCQUFvQixFQUFBOztBQUN6RztFQUF5QixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDekc7RUFBcUMsY0FBYyxFQUFBOztBQUNuRDtFQUFVLFdBQVU7RUFBQyxZQUFXO0VBQUMsZUFBZTtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQjtFQUFDLGtCQUFpQjtFQUFDLGFBQVk7RUFBQyx1QkFBc0I7RUFBQyxtQkFBa0I7RUFBQyxTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNMO0VBQVcsYUFBYTtFQUFDLGVBQWU7RUFBQyxZQUFZLEVBQUE7O0FBQ3JEO0VBQW9CLFVBQVU7RUFBQyxtREFBbUQ7RUFBQyxZQUFZO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ2xIO0VBQXdCLFdBQVcsRUFBQTs7QUFHbkM7RUFBOEIsa0JBQWtCLEVBQUE7O0FBRWhEO0VBQVcsV0FBVztFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHFCQUFhO0VBQ2Isa0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBRVo7RUFBYyxnQkFBZ0IsRUFBQTs7QUFDOUI7RUFBYSxlQUFlLEVBQUE7O0FBQzVCO0VBQVcsYUFBYSxFQUFBOztBQUk1QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVyQjtFQUNJLDZCQUE2QixFQUFBOztBQUUvQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDBCQUF1QjtLQUF2Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS12aWV3L3Byb2dyYW0tdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWxpc3R7cGFkZGluZzogMDttYXJnaW46IDEwcHggMDt9XHJcbi50b3AtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IDg1cHg7YmFja2dyb3VuZDogI0ZGRjtib3gtc2hhZG93OiBub25lO31cclxuLnRvcC1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHtwYWRkaW5nLXRvcDogMDtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA4cHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTttYXJnaW4tbGVmdDogMDt9XHJcbi50b3AtaWNvbnt3aWR0aDogNDBweDtoZWlnaHQ6IDQwcHg7YmFja2dyb3VuZDogI2U5ZjZmNTtib3JkZXItcmFkaXVzOiA1MCU7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0xMHB4O2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7fVxyXG4udG9wLWljb24gaW9uLWljb24ge2NvbG9yOiAjMjdhNjlhO2ZvbnQtc2l6ZTogMS4yNXJlbTt9XHJcblxyXG4udXNlcnMtbGlzdHtkaXNwbGF5OiBibG9jazt3aWR0aDogMTAwJTt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogYXV0bztkaXNwbGF5OiBmbGV4O3dpZHRoOiAxMDAlOy0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1ne3dpZHRoOiA0MnB4O2hlaWdodDogNDJweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1nOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnZpZXctYWxse3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWF4LXdpZHRoOiA0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2YxZjBmMDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcblxyXG4ubGlzdC1pbmZve2Rpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO3BhZGRpbmc6IDZweDt9XHJcbi5saXN0LWluZm8gaW9uLWl0ZW17d2lkdGg6IDI1JTtib3gtc2hhZG93OiAwLjAwMWVtIDVweCAxMnB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7bWFyZ2luOiBhdXRvO21hcmdpbi1ib3R0b206IDhweDt9XHJcbi5saXN0LWluZm8gaW9uLWl0ZW0gaW1ne3dpZHRoOiAyNHB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmxpc3QtaW5mbyBpb24taXRlbSBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjg1cmVtO31cclxuXHJcbi5idG5WZXJpZnl7d2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGhlaWdodDogNTBweDt9XHJcbiAgXHJcbiAgICAuY291bnRlci1ib3gge21hcmdpbi1ib3R0b206IDA7fVxyXG4gICAgLmNvdW50X3RpbWUge2ZvbnQtc2l6ZTogMTZweDt9XHJcbiAgICBpb24tc2xpZGVze2hlaWdodDogMTkwcHg7fVxyXG5cclxuXHJcbi8vQW5kcm9pZFxyXG5pb24taXRlbS5pY29uLXJpZ2h0LXNpZGUuaW9uLXRleHQtZW5kLml0ZW0ubWQuaW4tbGlzdC5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIG1pbi13aWR0aDogbm9uZTtcclxufVxyXG5cclxuLy9JT1NcclxuaW9uLWl0ZW0uaWNvbi1yaWdodC1zaWRlLmlvbi10ZXh0LWVuZC5pdGVtLmlvcy5pbi1saXN0Lmlvbi1mb2N1c2FibGUuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgbWluLXdpZHRoOiBub25lO1xyXG59XHJcbi5pY29uLXRleHR7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uaWNvbi10ZXh0IGltZ3tcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBwLnRleHQtZ3JlZW4udGV4dC1jZW50ZXJ7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnByb2dyYW0tc2xpZGVze1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJvZ3JhbS1zbGlkZXtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIC5wcm9ncmFtLXNsaWRlcyB2aWRlb3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnByb2dyYW0tc2xpZGVzIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlIDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHAudGV4dC1ncmVlbi50ZXh0LWNlbnRlciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgaW9uLXNsaWRlLm1kLnN3aXBlci1zbGlkZS5zd2lwZXItem9vbS1jb250YWluZXIuaHlkcmF0ZWQuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDQ3JSA7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/program/program-view/program-view.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/program/program-view/program-view.page.ts ***!
  \***********************************************************/
/*! exports provided: ProgramViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramViewPage", function() { return ProgramViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schedule-modal/schedule-modal.component */ "./src/app/program/schedule-modal/schedule-modal.component.ts");
/* harmony import */ var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../equipments/equipments.component */ "./src/app/program/equipments/equipments.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../chats/chat-rooms/chat-rooms.component */ "./src/app/chats/chat-rooms/chat-rooms.component.ts");
/* harmony import */ var src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modalContent/payment/payment.component */ "./src/app/modalContent/payment/payment.component.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");



















/* To try the app with Enablex hosted service you need to set the kTry = true */
var kTry = true;
/*Your webservice host URL, Keet the defined host when kTry = true */
var kBasedURL = "https://demo.enablex.io/";
/*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/
/*Use enablec portal to create your app and get these following credentials*/
var kAppId = "601a75829370a5441339e5c2";
var kAppkey = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";
let ProgramViewPage = class ProgramViewPage {
    constructor(commonService, navCtrl, actRoute, programService, localNotifications, httpClient, router, chatService, socialSharing) {
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.programService = programService;
        this.localNotifications = localNotifications;
        this.httpClient = httpClient;
        this.router = router;
        this.chatService = chatService;
        this.socialSharing = socialSharing;
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].imgUrl;
        this.vidUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].progVidUrl;
        this.displayProgData = false;
        this.tick = 1000;
        this.prePayment = true;
        //
        this.userName = "Bablu";
        this.roomID = "";
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.progImage = false;
        this.progVideo = false;
        this.intoProg = [];
        this.userData = JSON.parse(localStorage.getItem('userData'));
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.programId = params.get('programId');
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.totalIntoFee = 0;
        this.min = 0;
        this.totalMin = 0;
        this.Mins = 0;
        this.programService.getIntoActivePendingPaymentStatus('').subscribe(data => {
            this.intoActivePaid = data.data;
            // console.log(this.intoActivePaid);
            this.intoActivePaid.forEach(el => {
                if (el.type_id == 3) {
                    this.minute = ((el.time / 60) * 0.008);
                    this.mms = (el.time / 60);
                }
                else if (el.type_id == 4) {
                    this.minute = ((el.time / 60) * 0.0075);
                    this.mms = (el.time / 60);
                }
                this.totalIntoFee = parseFloat(this.minute) + parseFloat(this.min);
                this.totalMin = parseFloat(this.mms) + parseFloat(this.Mins);
                this.min = this.totalIntoFee;
                this.Mins = this.totalMin;
                this.intoProg.push(el.prog_id);
                var img = '';
                if (el.image_path != '') {
                    var image = el.image_path.split(',');
                    img = image[0];
                }
                if (this.Mins > 140) {
                    console.log(this.intoProg);
                    var fileData = {
                        pgid: this.intoProg,
                        pgname: el.title,
                        pgamount: this.totalIntoFee,
                        pgimg: img,
                        routeLink: 'progView',
                        type: '1'
                    };
                    this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
                    Object(process__WEBPACK_IMPORTED_MODULE_16__["exit"])();
                    return false;
                }
                // console.log(this.Mins);
                // console.log(this.totalIntoFee);
            });
            // console.log(this.totalIntoFee);
            // console.log(this.Mins);
            console.log(this.Mins);
            console.log('getIntoActivePendingPaymentStatus');
        });
        this.programService.getPaymentStatus().subscribe(data => {
            this.paymentPending = data;
            if (this.paymentPending.data.length > 0) {
                console.log(this.paymentPending);
                var i = 0;
                this.paymentPending.data.forEach(el => {
                    this.programService.getPendingPaymentStatus({ 'program_id': el.id }).subscribe(data => {
                        if (i == 0) {
                            if (data.data == 0) {
                                this.prePayment = false;
                                var img = '';
                                if (el.image_path != '') {
                                    var image = el.image_path.split(',');
                                    img = image[0];
                                }
                                var fileData = {
                                    pgid: el.id,
                                    pgname: el.title,
                                    pgamount: el.program_fee,
                                    pgimg: img,
                                    routeLink: 'progView',
                                    type: '2'
                                };
                                this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
                                // this.pendingPayment();
                                i++;
                            }
                        }
                    });
                });
            }
        });
        this.programService.getEnxData({ 'program_id': this.programId }).subscribe(data => {
            console.log("EnxData User: " + JSON.stringify(data));
            this.userName = this.userData.user_name;
            this.roomID = data.room_id;
        });
    }
    joinRoom() {
        if (this.roomID.length == 0) {
            alert("Kindly Enter Room ID");
            return;
        }
        // alert(this.roomID);
        this.programService.getEnxData({ 'program_id': this.programId }).subscribe(data => {
            console.log("EnxData User: " + JSON.stringify(data));
            this.userName = this.userData.user_name;
            this.roomID = data.room_id;
        });
        var loginString = { "name": this.userName, "role": "participant", "user_ref": "2236", "roomId": this.roomID };
        var hedare = (kTry) ? { "x-app-id": kAppId, "x-app-key": kAppkey, "Accept": "application/json", "Content-Type": "application/json" } : { "Accept": "application/json", "Content-Type": "application/json" };
        let url = kBasedURL + "createToken";
        console.log("Url Faired" + url);
        this.httpClient.post(url, loginString, { headers: hedare }).subscribe(data => {
            console.log("Hello service done" + data["token"]);
            let navigationExtras = {
                queryParams: {
                    token: data["token"],
                    name: this.userName,
                    role: "participant",
                    user_ref: "user_ref",
                    roomId: this.roomID,
                    description: this.programDescription,
                    programId: this.programId,
                    programTitle: this.pgtitle,
                    participants: this.participants,
                    duration: this.programDurations,
                    program_type: this.programType,
                    program_fee: this.programFee,
                    program_img: this.programImage
                }
            };
            this.navCtrl.navigateForward(['confrence'], navigationExtras);
        }, error => {
            console.log("Hello service failed");
            console.log(error);
        });
        console.log("ClickEvent Join event");
    }
    ionViewWillEnter() {
        this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
            this.programDetail = data.programData;
            console.log('starttttttt');
            console.log(this.programDetail);
            console.log(this.programDetail.is_requested);
            console.log(this.request_join);
            console.log(this.prePayment);
            console.log('enddddddddd');
            this.broadcastId = 'programId_' + data.programData.id;
            this.programType = data.programData.type_id;
            this.pgtitle = data.programData.title;
            if (this.programDetail.payment_type == 'Paid') {
                this.programFee = this.programDetail.program_fee;
            }
            else if (this.programDetail.payment_type == 'Free') {
                this.programFee = this.programDetail.payment_type;
            }
            if (this.programType == 'private oneway' || this.programType == 'private twoway') {
                this.participants = 2;
            }
            else if (this.programType == 'group oneway' || this.programType == 'group twoway') {
                this.participants = 50;
            }
            else {
                this.participants = 100;
            }
            this.programDurations = data.programData.program_duration;
            this.programDescription = data.programData.description;
            if (data.programData.image_path != '') {
                // this.progImage = data.programData.image_path;
                this.progImage = true;
            }
            else {
                this.progImage = false;
            }
            if (data.programData.video_path != null) {
                // this.progImage = data.programData.image_path;
                this.progVideo = true;
            }
            else {
                this.progVideo = false;
            }
            if (data.programData.image_path) {
                this.programDetail.img_array = data.programData.image_path.split(',');
                this.programImage = this.programDetail.img_array[0];
            }
            //  ------------ C O U N T   D O W N   T I M E R ---------
            let a = new Date(this.programDetail.program_date + 'Z');
            this.programDateTime = a;
            let b = new Date();
            let c;
            if (a > b) {
                c = Math.abs(a - b) / 1000;
                this.programDetail.cd = c;
                this.dd = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd / (60 * 60 * 24));
                }));
                this.ss = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd % 3600 % 60);
                }));
                this.mm = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd % 3600 / 60);
                }));
                this.hh = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd <= 5) {
                        this.programDetail.ready = true;
                        this.programDetail.live = true;
                        this.displayProgData = true;
                        this.checkStreaming();
                        console.log(this.programDetail);
                        console.log(this.programDetail.live, 'liveee');
                    }
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    else {
                        this.programDetail.cd = 0;
                        return 0;
                    }
                    return ~~(this.programDetail.cd / (60 * 60) % 24);
                }));
            }
            else {
                c = 0;
                this.displayProgData = true;
                if (new Date(this.programDetail.program_end_time + 'Z') > new Date()) {
                    this.programDetail.ready = true;
                    this.programDetail.live = true;
                    console.log(this.programDetail.live + 'liveeeeeee');
                    this.checkStreaming();
                }
                else {
                    console.log(this.programDetail.live + 'edddddd');
                    this.programDetail.ended = true;
                }
            }
            //-------------------------------------------------
            if (this.programDetail.request_accepted != null) {
                if ((this.programDetail.request_accepted.split(',')).includes(this.userData.id.toString())) {
                    this.request_accs = true;
                    this.request_join = true;
                }
            }
            else if (this.programDetail.request_sent != null) {
                if ((this.programDetail.request_sent.split(',')).includes(this.userData.id.toString())) {
                    this.request_accs_pending = true;
                }
            }
            if (this.programDetail.request_recive != null) {
                if ((this.programDetail.request_recive.split(',')).includes(this.userData.id.toString())) {
                    this.request_join = true;
                    console.log(this.request_join + 'this.request_joineeeeee');
                }
            }
        });
    }
    checkStreaming() {
        // this.sub = interval(5000)
        //   .subscribe((val) => {
        //     this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
        //       console.log(this.programDetail);
        //       if (data.programData.is_live) {
        //         this.displayProgData = true;
        //         this.programDetail.live = true;
        //       }
        //     });
        //   });
    }
    showSchedule(event) {
        this.programDetail.displayData = this.displayProgData;
        this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleModalComponent"], 'fullModal', { 'programDetail': this.programDetail });
    }
    equipments() {
        this.commonService.presentModal(_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentsComponent"], 'halfModal', { 'programDetail': this.programDetail });
    }
    showChatUsers() {
        if (this.programType != "public") {
            this.commonService.presentLoader();
            this.chatService.checkChatProgram({ 'programId': this.programId, 'type': 3 }).subscribe((data) => {
                if (data.id > 0) {
                    this.commonService.dismissLoader();
                    var chatRoom = data.room_id;
                    var chatReceiverId = data.group_id;
                    var chatType = 2;
                    var fileData = {
                        chatType: chatType,
                        room: chatRoom,
                        receiverId: parseInt(chatReceiverId)
                    };
                    this.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__["ChatRoomsComponent"], 'fullModal', fileData);
                }
                else {
                    this.commonService.dismissLoader();
                    // chat_type = 1:consultant,2:user,3:program
                    this.router.navigate(["/first-message/" + this.programId + "/3"]);
                }
            }, err => {
                this.commonService.presentToast("Couldnt load data, Something went wrong.");
                this.commonService.dismissLoader();
            });
        }
        else {
            this.commonService.presentToast("Chat Not Allow on Public Program");
        }
    }
    goBack() {
        this.navCtrl.back();
        // this.router.navigate(['/schedule-program']);
    }
    acceptRequest() {
        this.programService.acceptProgramRequest({ 'programId': this.programDetail.id }).subscribe(data => {
            let prog_date = new Date(this.programDetail.program_date + 'Z');
            this.localNotifications.schedule({
                id: this.programId,
                text: this.programDetail.title + " program will start at \n " + prog_date,
                trigger: { at: new Date(prog_date.getTime() - 60 * 60 * 500) },
                data: { secret: 'secret' },
                lockscreen: true,
                vibrate: true,
                silent: false,
                foreground: true,
            });
            this.router.navigateByUrl('/tabs/consultant-profile');
        });
    }
    joinRequest() {
        this.programService.joinRequest({ 'programId': this.programDetail.id }).subscribe(data => {
            this.request_join = true;
        });
    }
    simpleNotif() {
        this.localNotifications.schedule({
            id: 1,
            text: 'Single Local Notification',
            data: { secret: 'secret' }
        });
    }
    payment() {
        var fileData = {
            pgid: this.programId,
            pgname: this.programDetail.title,
            pgamount: this.programFee,
            pgimg: this.programImage,
        };
        this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
    }
    shareItem() {
        this.socialSharing.share("Program Details", "", "", "program-view/" + this.programId)
            .then(() => {
        })
            .catch(() => {
        });
    }
};
ProgramViewPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"] }
];
ProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-program-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./program-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-view/program-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./program-view.page.scss */ "./src/app/program/program-view/program-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"]])
], ProgramViewPage);



/***/ })

}]);
//# sourceMappingURL=program-program-view-program-view-module-es2015.js.map