function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-schedule-program-new-schedule-program-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-schedule-program/new-schedule-program.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-schedule-program/new-schedule-program.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewScheduleProgramNewScheduleProgramPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <!-- <ion-label>{{programDetail?.title}}</ion-label> -->\r\n      <ion-label>{{ viewTitle }}</ion-label>\r\n    </ion-item>\r\n    <ion-item slot=\"end\">\r\n      <!-- <ion-label>{{programDetail?.title}}</ion-label> -->\r\n      <!-- <ion-label>March 2022</ion-label> -->\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <calendar *ngIf=\"scheduleProgram == 'program'\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\" startHour=\"0\"\r\n  endHour=\"24\" step=\"1\" (onTitleChanged)=\"onViewTitleChanged($event)\"  (onTimeSelected)=\"onTimeSelected($event)\" class=\"calendar-table swiper-container\"></calendar>\r\n  <ion-item *ngIf=\"scheduleProgram == 'program'\" style=\"position: relative; --min-height: 30px;\" class=\"ion-no-padding\">\r\n    <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" *ngIf=\"calendar.mode == 'week'\" (click)=\"handleCalendarView()\"></ion-icon>\r\n    <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\" *ngIf=\"calendar.mode == 'month'\" (click)=\"handleCalendarView()\"></ion-icon>\r\n  </ion-item>\r\n  <ion-col class=\"ion-no-padding\">\r\n    <ion-list class=\"ion-no-padding\">\r\n      <ion-item-group>\r\n        <ion-item-divider class=\"ionic-divider\" lines=\"none\" sticky>\r\n          <ion-toolbar mode=\"ios\" lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n            <ion-segment mode=\"ios\" class=\"ion-no-padding\" [(ngModel)]=\"scheduleProgram\">\r\n              <ion-segment-button mode=\"ios\" class=\"ionic-segment-btn\" value=\"program\" checked>\r\n                <ion-icon class=\"ionic-icon\" ios=\"ios-clipboard\" md=\"md-clipboard\"></ion-icon>\r\n              </ion-segment-button>\r\n              <ion-segment-button mode=\"ios\" class=\"ionic-segment-btn\" value=\"invitation\">\r\n                <ion-icon class=\"ionic-icon\" ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\r\n              </ion-segment-button>\r\n              <ion-segment-button mode=\"ios\" class=\"ionic-segment-btn\" value=\"nutrition\">\r\n                <ion-icon class=\"ionic-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n              </ion-segment-button>\r\n              <ion-segment-button mode=\"ios\" class=\"ionic-segment-btn\" value=\"videos\">\r\n                <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n              </ion-segment-button>\r\n              <ion-segment-button mode=\"ios\" class=\"ionic-segment-btn\" value=\"live\">\r\n                <div class=\"live-icon\">\r\n                  <span>live</span>\r\n                </div>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n          </ion-toolbar>\r\n        </ion-item-divider>\r\n        <ion-item-sliding>\r\n          <div [ngSwitch]=\"scheduleProgram\">\r\n            <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'program'\">\r\n              <div class=\"program-card\" *ngFor=\"let program of allScheduleList; let i = index;\">\r\n                <ion-avatar slot=\"start\" [routerLink]=\"(program?.user_id == userData?.id) ? ['/program-details',program.id] : ['/program-view',program.id]\">\r\n                  <img src=\"{{url}}{{program?.img_arr[0]}}\" *ngIf=\"program?.image_path\">\r\n                  <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!program?.image_path\">\r\n                </ion-avatar>\r\n                <div class=\"program-info\" [routerLink]=\"(program?.user_id == userData?.id) ? ['/program-details',program.id] : ['/program-view',program.id]\">\r\n                  <h6>{{program?.title}}</h6>\r\n                  <span>By: {{program?.program_user?.user_name}}</span>\r\n                  <p>{{program?.converted |date:'medium'}}</p>\r\n                </div>\r\n                <span class=\"program-type\">{{program?.type_id}}</span>\r\n                <ion-icon ios=\"ios-more\" md=\"md-more\" *ngIf=\"(program?.user_id == userData?.id)\" (click)=\"hostingDropdown(program?.id)\"></ion-icon>\r\n              </div>\r\n              <div *ngIf=\"dataLength == '0' \" class=\"no-data\">\r\n                <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Program available</p>             \r\n              </div>\r\n            </ion-list>\r\n            <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'invitation'\">\r\n              <!-- <ion-item style=\"position: relative; --min-height: 30px;\" class=\"ion-no-padding\">\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" *ngIf=\"calendar.mode == 'week'\" (click)=\"handleCalendarView()\"></ion-icon>\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\" *ngIf=\"calendar.mode == 'month'\" (click)=\"handleCalendarView()\"></ion-icon>\r\n              </ion-item> -->\r\n                <ion-toolbar class=\"searchbar\" >\r\n                  <ion-searchbar [(ngModel)]=\"reqProgSearchTerm\" animated=\"true\"></ion-searchbar>\r\n                </ion-toolbar>\r\n              <div class=\"program-card\" *ngFor=\"let item of reqProgArray; let l = index;\" >\r\n                <ion-avatar>\r\n                  <img src=\"{{url}}{{item?.img_arr[0]}}\" *ngIf=\"item?.image_path\">\r\n                  <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n                </ion-avatar>\r\n                <div class=\"program-info\">\r\n                  <h6>{{item.title}}</h6>\r\n                  <span>By: {{item?.program_user?.user_name}}</span>\r\n                  <p>{{item?.converted |date:'medium'}}</p>\r\n                </div>\r\n                <ion-icon class=\"ionic-icon\" ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\r\n                <!-- M A I L  O P E N -->\r\n                <!-- <ion-icon class=\"ionic-icon\" ios=\"ios-mail-open\" md=\"md-mail-open\"></ion-icon> -->\r\n                <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"requestDropdown(item.id)\"></ion-icon>\r\n              </div>\r\n              <div *ngIf=\"noReqProgramList\" class=\"no-data\">\r\n                <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Requested Program</p>             \r\n              </div>\r\n            </ion-list>\r\n            <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'nutrition'\">\r\n              <ion-item style=\"position: relative; --min-height: 30px;\" class=\"ion-no-padding\">\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" *ngIf=\"nutriArrow == 'down' \"  (click)=\"changeDataFlow('nutrition','prev')\"></ion-icon>\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\" *ngIf=\"nutriArrow == 'up' \"  (click)=\"changeDataFlow('nutrition','upcoming')\"></ion-icon>\r\n                <!-- <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\"></ion-icon> -->\r\n              </ion-item>\r\n                <ion-toolbar class=\"searchbar\" >\r\n                  <ion-searchbar [(ngModel)]=\"nutriProgSearchTerm\" animated=\"true\"></ion-searchbar>\r\n                </ion-toolbar>\r\n              <div class=\"program-card\" *ngFor=\"let item of nutriProgArray\">\r\n                <ion-avatar (click)=\"nutritionModal(item)\">\r\n                  <img src=\"{{url}}{{item?.img_arr[0]}}\" *ngIf=\"item?.image_path\">\r\n                  <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n                </ion-avatar>\r\n                <div class=\"program-info\" (click)=\"nutritionModal(item)\">\r\n                  <h6>{{item.title}}</h6>\r\n                  <span>By: {{item?.program_user?.user_name}}</span>\r\n                  <p>{{item?.converted |date:'medium'}}</p>\r\n                </div>\r\n                <!-- <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon> -->\r\n              </div>\r\n              <div *ngIf=\"noNutriProg\" class=\"no-data\">\r\n                <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Program Available</p>\r\n              </div>\r\n            </ion-list>\r\n            <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'videos'\">\r\n              <ion-item style=\"position: relative; --min-height: 30px;\" class=\"ion-no-padding\">\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" *ngIf=\"videoArrow == 'down' \"  (click)=\"changeDataFlow('videos','prev')\">upcoming</ion-icon>\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\" *ngIf=\"videoArrow == 'up' \"  (click)=\"changeDataFlow('videos','upcoming')\">previos</ion-icon>\r\n                <!-- <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\"></ion-icon> -->\r\n              </ion-item>\r\n              <ion-toolbar class=\"searchbar\" >\r\n                <ion-searchbar [(ngModel)]=\"videoSearchTerm\" animated=\"true\"></ion-searchbar>\r\n              </ion-toolbar>\r\n              <div class=\"program-card\" *ngFor=\"let item of videoFiltered\">\r\n                <ion-avatar (click)=\"showVideoDetails(item.id,item.video_id)\">\r\n                  <img src=\"{{url}}{{item?.img_arr[0]}}\" *ngIf=\"item?.image_path\">\r\n                  <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n                </ion-avatar>\r\n                <div class=\"program-info\" (click)=\"showVideoDetails(item.id,item.video_id)\">\r\n                  <h6>{{item.title}}</h6>\r\n                  <span>By: {{item?.program_user?.user_name}}</span>\r\n                  <p>{{item?.converted |date:'medium'}}</p>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"noVideoProg\" class=\"no-data\">\r\n                <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Program Available</p>\r\n              </div>\r\n            </ion-list>\r\n            <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'live'\">\r\n              <!-- <ion-item style=\"position: relative; --min-height: 30px;\" class=\"ion-no-padding\">\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" *ngIf=\"liveArrow == 'down' \"  (click)=\"changeDataFlow('live','prev')\"></ion-icon>\r\n                <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\" *ngIf=\"liveArrow == 'up' \"  (click)=\"changeDataFlow('live','upcoming')\"></ion-icon>\r\n                \r\n              </ion-item> -->\r\n              <ion-toolbar class=\"searchbar\" >\r\n                <ion-searchbar [(ngModel)]=\"liveProgSearchTerm\" animated=\"true\"></ion-searchbar>\r\n              </ion-toolbar>\r\n              <div class=\"program-card\" *ngFor=\"let item of liveProgArray\">\r\n                <ion-avatar [routerLink]=\"(item?.user_id == userData?.id) ? ['/program-details',item.id] : ['/program-view',item.id]\">\r\n                  <img src=\"{{profileUrl}}{{item?.program_user?.bios?.profile_pic}}\" *ngIf=\"item?.program_user?.bios?.profile_pic != '' \">\r\n                  <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"item?.program_user?.bios?.profile_pic == '' \">\r\n                </ion-avatar>\r\n                <div class=\"program-info\" [routerLink]=\"(item?.user_id == userData?.id) ? ['/program-details',item.id] : ['/program-view',item.id]\">\r\n                  <h6>{{item.title}}</h6>\r\n                  <span>By: {{item?.program_user?.user_name}}</span>\r\n                  <p>{{item?.converted |date:'medium'}}</p>\r\n                </div>\r\n                <span class=\"program-type\">{{item?.type_id}}</span>\r\n                <ion-icon ios=\"ios-more\" md=\"md-more\" *ngIf=\"(item?.user_id == userData?.id)\" (click)=\"hostingDropdown(item?.id)\"></ion-icon>\r\n              </div>\r\n              <div *ngIf=\"noLiveProg\" class=\"no-data\">\r\n                <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                <p>No Program Available</p>\r\n              </div>\r\n              <div class=\"program-live-box\">\r\n                <!-- T I M E R   B L O C K -->\r\n                <!-- <div class=\"program-live-timer\">\r\n                  <p>01 : 35 : 15</p>\r\n                </div> -->\r\n\r\n                  <!-- J O I N   B U T T O N -->\r\n                <!-- <div class=\"program-live-btn\">\r\n                  <button>Join</button>\r\n                </div> -->\r\n              </div>\r\n            </ion-list>\r\n          </div>\r\n        </ion-item-sliding>\r\n      </ion-item-group>\r\n    </ion-list>\r\n  </ion-col>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/new-schedule-program/new-schedule-program-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/new-schedule-program/new-schedule-program-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: NewScheduleProgramPageRoutingModule */

  /***/
  function srcAppNewScheduleProgramNewScheduleProgramRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewScheduleProgramPageRoutingModule", function () {
      return NewScheduleProgramPageRoutingModule;
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


    var _new_schedule_program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-schedule-program.page */
    "./src/app/new-schedule-program/new-schedule-program.page.ts");

    var routes = [{
      path: '',
      component: _new_schedule_program_page__WEBPACK_IMPORTED_MODULE_3__["NewScheduleProgramPage"]
    }];

    var NewScheduleProgramPageRoutingModule = function NewScheduleProgramPageRoutingModule() {
      _classCallCheck(this, NewScheduleProgramPageRoutingModule);
    };

    NewScheduleProgramPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewScheduleProgramPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/new-schedule-program/new-schedule-program.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/new-schedule-program/new-schedule-program.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NewScheduleProgramPageModule */

  /***/
  function srcAppNewScheduleProgramNewScheduleProgramModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewScheduleProgramPageModule", function () {
      return NewScheduleProgramPageModule;
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


    var _new_schedule_program_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-schedule-program-routing.module */
    "./src/app/new-schedule-program/new-schedule-program-routing.module.ts");
    /* harmony import */


    var _new_schedule_program_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-schedule-program.page */
    "./src/app/new-schedule-program/new-schedule-program.page.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js"); // import { HostingDropdownComponent } from '../program/hosting-dropdown/hosting-dropdown.component';


    var NewScheduleProgramPageModule = function NewScheduleProgramPageModule() {
      _classCallCheck(this, NewScheduleProgramPageModule);
    };

    NewScheduleProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"], _new_schedule_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewScheduleProgramPageRoutingModule"]],
      declarations: [_new_schedule_program_page__WEBPACK_IMPORTED_MODULE_6__["NewScheduleProgramPage"]],
      entryComponents: []
    })], NewScheduleProgramPageModule);
    /***/
  },

  /***/
  "./src/app/new-schedule-program/new-schedule-program.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/new-schedule-program/new-schedule-program.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewScheduleProgramNewScheduleProgramPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".right-div {\n  display: flex;\n  align-items: center; }\n  .right-div .min-width-none {\n    min-width: 0px !important; }\n  .right-div .pl-8 {\n    padding-left: 8px !important; }\n  .ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n  .ionic-divider .three-tabs ion-segment ion-segment-button {\n    width: auto; }\n  .ionic-divider ion-segment-button {\n    min-height: 38px;\n    color: #000;\n    text-transform: capitalize;\n    letter-spacing: 0; }\n  .ionic-divider ion-segment-button .ionic-icon {\n      font-size: 2rem !important; }\n  .ionic-divider ion-segment-button .live-icon {\n      padding: 5px 10px;\n      background: #555;\n      color: #fff;\n      border-radius: 20px; }\n  .ionic-divider ion-segment-button .live-icon span {\n        font-size: 10px;\n        color: #fff; }\n  ion-segment-button.segment-button-checked {\n  background: #27a69a;\n  --indicator-color-checked: #27a69a;\n  color: #FFF; }\n  ion-segment-button.segment-button-checked .live-icon {\n    background: #27a69a; }\n  ion-segment-button.segment-button-checked .live-icon span {\n      color: #fff !important; }\n  .border-bot {\n  border-bottom: 1px solid #cecece; }\n  .program-live-box {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 10px; }\n  .program-live-box .program-live-timer p {\n    font-size: 14px;\n    color: #eb0000;\n    margin-top: 3px; }\n  .program-live-box .program-live-btn button {\n    background: #eb0000;\n    color: #fff;\n    padding: 10px 15px;\n    border-radius: 15px; }\n  .program-card {\n  display: flex;\n  align-items: center;\n  padding: 18px 12px; }\n  .program-card ion-avatar {\n    margin-right: 15px; }\n  .program-card .program-info {\n    flex: 1; }\n  .program-card .program-info h6 {\n      margin-bottom: 0px;\n      margin-top: 0px;\n      color: #121212; }\n  .program-card .program-info span {\n      color: #555; }\n  .program-card .program-info p {\n      font-size: 12px;\n      color: #27a69a;\n      margin-top: 3px; }\n  .program-card .ionic-icon {\n    color: #555;\n    margin-right: 20px;\n    margin-left: 15px;\n    font-size: 24px; }\n  .program-card .program-type {\n    margin-right: 12px;\n    margin-left: 12px; }\n  ::ng-deep table {\n  border: 0 !important; }\n  ::ng-deep tr {\n  display: flex !important;\n  justify-content: space-around; }\n  ::ng-deep th {\n  flex: 1; }\n  ::ng-deep th, ::ng-deep td {\n  border: 0 !important; }\n  ::ng-deep td {\n  display: inline-block;\n  margin: 0.2rem !important;\n  padding: 0 !important;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  ::ng-deep td.monthview-secondary-with-event.text-muted {\n  border-radius: 50% !important; }\n  ::ng-deep td.monthview-selected {\n  border-radius: 50% !important; }\n  ::ng-deep span.event-detail {\n  overflow: hidden !important;\n  max-width: 50vw; }\n  ::ng-deep span.monthview-eventdetail-timecolumn {\n  min-width: 100px !important;\n  width: 100px !important; }\n  ::ng-deep .item-native {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important; }\n  ::ng-deep .event-detail-container {\n  display: none; }\n  ::ng-deep .event-detail-container ion-item {\n  --padding-end: 40px !important;\n  display: none; }\n  ::ng-deep .monthview-container {\n  height: auto !important; }\n  ::ng-deep .calendar-hour-column {\n  display: none !important; }\n  ::ng-deep .weekview-container {\n  height: auto !important; }\n  ::ng-deep .weekview-allday-table {\n  display: none !important; }\n  ::ng-deep ion-slides.slides-container.md.slides-md.swiper-container.hydrated.swiper-container-initialized.swiper-container-horizontal {\n  background: #27A69A !important; }\n  ::ng-deep td, ::ng-deep th {\n  border: 0 !important; }\n  ::ng-deep .table-bordered {\n  border: 0 !important;\n  border-bottom: 1px solid #cecece !important; }\n  ::ng-deep .slides-container {\n  color: #fff !important;\n  background: #27A69A !important; }\n  ::ng-deep .list-ios {\n  margin-bottom: 0 !important; }\n  ::ng-deep .table > thead > tr > th.weekview-header {\n  font-size: 13px !important;\n  font-weight: 500;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n  ::ng-deep ion-title.ios.title-ios.title-default.hydrated {\n  padding-inline: 0px; }\n  ::ng-deep th.weekview-header.text-center {\n  background-color: #fff;\n  color: #121212; }\n  ::ng-deep th.weekview-header.text-center.weekview-selected {\n  background-color: #27a69a;\n  color: #fff; }\n  ::ng-deep table.table.table-bordered.table-fixed.weekview-header thead {\n  background-color: #fff; }\n  .toggle-cal {\n  color: #121212;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%); }\n  .segment-button-checked .live-icon {\n  background-color: #27a69a !important; }\n  .event-detail-container.md.list-md.hydrated {\n  display: none !important; }\n  .no-data {\n  height: 77vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXNjaGVkdWxlLXByb2dyYW0vQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG5ldy1zY2hlZHVsZS1wcm9ncmFtXFxuZXctc2NoZWR1bGUtcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFGdkI7SUFJUSx5QkFBeUIsRUFBQTtFQUpqQztJQU9RLDRCQUE0QixFQUFBO0VBR3BDO0VBQ0kscUNBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyxtQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUE7RUFGdEM7SUFJUSxXQUFXLEVBQUE7RUFKbkI7SUFPUSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixpQkFBaUIsRUFBQTtFQVZ6QjtNQVlZLDBCQUEwQixFQUFBO0VBWnRDO01BZVksaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsbUJBQW1CLEVBQUE7RUFsQi9CO1FBb0JnQixlQUFlO1FBQ2YsV0FBVyxFQUFBO0VBTzNCO0VBQ0ksbUJBQW1CO0VBQ25CLGtDQUEwQjtFQUMxQixXQUFXLEVBQUE7RUFIZjtJQUtRLG1CQUFtQixFQUFBO0VBTDNCO01BT1ksc0JBQXNCLEVBQUE7RUFJbEM7RUFDSSxnQ0FBZ0MsRUFBQTtFQUVwQztFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CLEVBQUE7RUFIeEI7SUFNWSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWUsRUFBQTtFQVIzQjtJQWFZLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtFQUh0QjtJQUtRLGtCQUFrQixFQUFBO0VBTDFCO0lBUVEsT0FBTyxFQUFBO0VBUmY7TUFVWSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGNBQWMsRUFBQTtFQVoxQjtNQWVZLFdBQVcsRUFBQTtFQWZ2QjtNQWtCWSxlQUFlO01BQ2YsY0FBYztNQUNkLGVBQWUsRUFBQTtFQXBCM0I7SUF3QlEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBM0J2QjtJQThCUSxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFHekI7RUFFUSxvQkFBb0IsRUFBQTtFQUY1QjtFQUtRLHdCQUF3QjtFQUN4Qiw2QkFBNkIsRUFBQTtFQU5yQztFQVNRLE9BQU8sRUFBQTtFQVRmO0VBWVEsb0JBQW9CLEVBQUE7RUFaNUI7RUFlUSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7RUF0QjNCO0VBMEJRLDZCQUE2QixFQUFBO0VBMUJyQztFQTZCUSw2QkFBNkIsRUFBQTtFQTdCckM7RUFnQ1EsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtFQWpDdkI7RUFvQ1EsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBO0VBckMvQjtFQXdDUSxtQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUE7RUF4QzFDO0VBNENRLGFBQWEsRUFBQTtFQTVDckI7RUErQ1EsOEJBQWM7RUFDZCxhQUFhLEVBQUE7RUFoRHJCO0VBbURRLHVCQUF1QixFQUFBO0VBbkQvQjtFQXNEUSx3QkFBd0IsRUFBQTtFQXREaEM7RUF5RFUsdUJBQXVCLEVBQUE7RUF6RGpDO0VBNERZLHdCQUF3QixFQUFBO0VBNURwQztFQStEVSw4QkFBOEIsRUFBQTtFQS9EeEM7RUFrRVUsb0JBQW1CLEVBQUE7RUFsRTdCO0VBcUVVLG9CQUFtQjtFQUNuQiwyQ0FBMkMsRUFBQTtFQXRFckQ7RUF5RVEsc0JBQXNCO0VBQ3RCLDhCQUE4QixFQUFBO0VBMUV0QztFQTZFUSwyQkFBMkIsRUFBQTtFQTdFbkM7RUFnRlEsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQXNCLEVBQUE7RUFuRjlCO0VBc0ZRLG1CQUFtQixFQUFBO0VBdEYzQjtFQXlGVSxzQkFBc0I7RUFDdEIsY0FBYyxFQUFBO0VBMUZ4QjtFQThGUSx5QkFBeUI7RUFDekIsV0FBVyxFQUFBO0VBL0ZuQjtFQWtHUSxzQkFBc0IsRUFBQTtFQUc5QjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixTQUFTO0VBQ1QsMkJBQTJCLEVBQUE7RUFFL0I7RUFFUSxvQ0FBb0MsRUFBQTtFQUc1QztFQUNJLHdCQUF3QixFQUFBO0VBRTVCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3LXNjaGVkdWxlLXByb2dyYW0vbmV3LXNjaGVkdWxlLXByb2dyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLm1pbi13aWR0aC1ub25lIHtcclxuICAgICAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5wbC04e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICB9XHJcbi5pb25pYy1kaXZpZGVye1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcclxuICAgIC50aHJlZS10YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAuaW9uaWMtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXZlLWljb257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzI3YTY5YTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgLmxpdmUtaWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ib3JkZXItYm90e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNlY2U7XHJcbn1cclxuLnByb2dyYW0tbGl2ZS1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAucHJvZ3JhbS1saXZlLXRpbWVye1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNlYjAwMDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZ3JhbS1saXZlLWJ0bntcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYjAwMDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3JhbS1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMThweCAxMnB4O1xyXG4gICAgaW9uLWF2YXRhcntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucHJvZ3JhbS1pbmZve1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyN2E2OWE7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW9uaWMtaWNvbntcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2dyYW0tdHlwZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAgIHRhYmxle1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdHJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgdGh7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIHRoLCB0ZHtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHRke1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzdweDtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRkLm1vbnRodmlldy1zZWNvbmRhcnktd2l0aC1ldmVudC50ZXh0LW11dGVkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHRkLm1vbnRodmlldy1zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzcGFuLmV2ZW50LWRldGFpbCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogNTB2dztcclxuICAgIH1cclxuICAgIHNwYW4ubW9udGh2aWV3LWV2ZW50ZGV0YWlsLXRpbWVjb2x1bW4ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ldmVudC1kZXRhaWwtY29udGFpbmVye1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIGlvbi1pdGVte1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vbnRodmlldy1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNhbGVuZGFyLWhvdXItY29sdW1ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAud2Vla3ZpZXctY29udGFpbmVye1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgICAud2Vla3ZpZXctYWxsZGF5LXRhYmxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tc2xpZGVzLnNsaWRlcy1jb250YWluZXIubWQuc2xpZGVzLW1kLnN3aXBlci1jb250YWluZXIuaHlkcmF0ZWQuc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3QTY5QSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCwgdGgge1xyXG4gICAgICAgICAgYm9yZGVyOiAwIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgICAgICAgIGJvcmRlcjogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZXMtY29udGFpbmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyN0E2OUEgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1pb3N7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC53ZWVrdmlldy1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHggIDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUuaW9zLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZTogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHRoLndlZWt2aWV3LWhlYWRlci50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICB9XHJcbiAgICAgIHRoLndlZWt2aWV3LWhlYWRlci50ZXh0LWNlbnRlci53ZWVrdmlldy1zZWxlY3RlZCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhNjlhO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnRhYmxlLWZpeGVkLndlZWt2aWV3LWhlYWRlciB0aGVhZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbn1cclxuLnRvZ2dsZS1jYWx7XHJcbiAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICAubGl2ZS1pY29ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2E2OWEgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uZXZlbnQtZGV0YWlsLWNvbnRhaW5lci5tZC5saXN0LW1kLmh5ZHJhdGVke1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5uby1kYXRhe1xyXG4gICAgaGVpZ2h0OiA3N3ZoO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-schedule-program/new-schedule-program.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/new-schedule-program/new-schedule-program.page.ts ***!
    \*******************************************************************/

  /*! exports provided: NewScheduleProgramPage */

  /***/
  function srcAppNewScheduleProgramNewScheduleProgramPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewScheduleProgramPage", function () {
      return NewScheduleProgramPage;
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


    var _services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _program_hosting_dropdown_hosting_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../program/hosting-dropdown/hosting-dropdown.component */
    "./src/app/program/hosting-dropdown/hosting-dropdown.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _program_requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../program/requested-dropdown/requested-dropdown.component */
    "./src/app/program/requested-dropdown/requested-dropdown.component.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/add-program/view-video-detail/view-video-detail.component */
    "./src/app/add-program/view-video-detail/view-video-detail.component.ts");

    var NewScheduleProgramPage = /*#__PURE__*/function () {
      function NewScheduleProgramPage(programService, commonService, popoverController, navCtrl) {
        _classCallCheck(this, NewScheduleProgramPage);

        this.programService = programService;
        this.commonService = commonService;
        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.scheduleProgram = "program";
        this.calendar = {
          mode: 'month',
          currentDate: new Date()
        };
        this.noReqProgramList = false;
        this.noNutriProg = false;
        this.noVideoProg = false;
        this.noLiveProg = false;
        this.myDate = new Date().toISOString();
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].imgUrl;
        this.vidUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].progVidUrl;
        this.nutriArrow = 'down';
        this.videoArrow = 'down';
        this.liveArrow = 'down';
        this.scheduleProgram = "program";
      }

      _createClass(NewScheduleProgramPage, [{
        key: "videoSearchTerm",
        get: function get() {
          return this._searchTerm;
        },
        set: function set(value) {
          this._searchTerm = value;
          this.videoFiltered = this.videoFilterUser(value);
        }
      }, {
        key: "nutriProgSearchTerm",
        get: function get() {
          return this._nutriProgSearchTerm;
        },
        set: function set(value) {
          this._nutriProgSearchTerm = value;
          this.nutriProgArray = this.nutriFilterProgram(value);
        }
      }, {
        key: "liveProgSearchTerm",
        get: function get() {
          return this._liveProgSearchTerm;
        },
        set: function set(value) {
          this._liveProgSearchTerm = value;
          this.liveProgArray = this.liveFilterProgram(value);
        }
      }, {
        key: "reqProgSearchTerm",
        get: function get() {
          return this._reqProgSearchTerm;
        },
        set: function set(value) {
          this._reqProgSearchTerm = value;
          this.reqProgArray = this.reqFilterProgram(value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userData = JSON.parse(localStorage.getItem('userData'));
          console.log(this.calendar.mode);
          this.commonService.presentLoader();
          this.programService.getAllNutritionPrograms({
            data: 'upcoming'
          }).subscribe(function (data) {
            _this.nutritionList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
            _this.nutriProgArray = _this.nutritionList;

            if (_this.nutritionList.length < 1) {
              _this.noNutriProg = true;
            }

            console.log(_this.nutritionList);

            _this.commonService.dismissLoader();
          }, function (err) {
            _this.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this.commonService.dismissLoader();
          });
          this.programService.getAllVideoPrograms({
            data: 'upcoming'
          }).subscribe(function (data) {
            _this.videoProgList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
            _this.videoFiltered = _this.videoProgList;

            if (_this.videoFiltered.length <= 0) {
              _this.noVideoProg = true;
            }

            console.log(_this.videoProgList);

            _this.commonService.dismissLoader();
          }, function (err) {
            _this.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this.commonService.dismissLoader();
          });
          this.programService.getAllLivePrograms(null).subscribe(function (data) {
            _this.liveProgList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
            _this.liveProgArray = _this.liveProgList;

            if (_this.liveProgList.length == 0) {
              _this.noLiveProg = true;
            }

            console.log(_this.liveProgList);

            _this.commonService.dismissLoader();
          }, function (err) {
            _this.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this.commonService.dismissLoader();
          });
          var params = null;
          var userZoneDate = new Date(this.myDate);
          userZoneDate.setHours(0, 0, 0);
          params = {
            'sortDate': userZoneDate.toUTCString()
          };
          console.log(userZoneDate.toUTCString());
          this.programService.getAllRequestedPrograms(params).subscribe(function (data) {
            console.log(data);
            _this.reqProgramList = data.list.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            }, function (err) {
              _this.commonService.presentToast("Couldnt load data, Something went wrong.");
            });
            _this.reqProgArray = _this.reqProgramList;

            _this.commonService.dismissLoader();

            if (_this.reqProgramList.length == 0) {
              _this.noReqProgramList = true;
            }
          }, function (err) {
            _this.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this.commonService.dismissLoader();

            if (_this.reqProgramList.length == 0) {
              _this.noReqProgramList = true;
            }
          });
          console.log(this.nutriArrow);
        }
      }, {
        key: "videoFilterUser",
        value: function videoFilterUser(searchString) {
          return this.nutritionList.filter(function (employee) {
            return employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "nutriFilterProgram",
        value: function nutriFilterProgram(searchString) {
          return this.videoProgList.filter(function (employee) {
            return employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "liveFilterProgram",
        value: function liveFilterProgram(searchString) {
          return this.liveProgList.filter(function (employee) {
            return employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "reqFilterProgram",
        value: function reqFilterProgram(searchString) {
          return this.reqProgramList.filter(function (employee) {
            return employee.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.programService.getSchedulePrograms(null).subscribe(function (data) {
            _this2.scheduleList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });

            _this2.commonService.dismissLoader();
          }, function (err) {
            _this2.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this2.commonService.dismissLoader();
          });
        }
      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(event) {
          var _this3 = this;

          console.log(event);
          this.programService.getAllSelectedUpcomingPrograms({
            'sortDate': event.selectedTime.toUTCString()
          }).subscribe(function (data) {
            console.log(data);
            _this3.dataLength = data.data.length;
            console.log(_this3.dataLength);
            _this3.allScheduleList = data.data.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.expanded = false;
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });

            _this3.commonService.dismissLoader();
          }, function (err) {
            _this3.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this3.commonService.dismissLoader();
          });
        }
      }, {
        key: "onViewTitleChanged",
        value: function onViewTitleChanged(title) {
          this.viewTitle = title;
        }
      }, {
        key: "handleCalendarView",
        value: function handleCalendarView() {
          if (this.calendar.mode == 'month') {
            this.calendar.mode = 'week';
          } else {
            this.calendar.mode = 'month';
          }
        }
      }, {
        key: "changeDataFlow",
        value: function changeDataFlow(catg, type) {
          if (catg == 'nutrition') {
            this.getAllNutritionProgram(type);
          }

          if (catg == 'videos') {
            this.getAllVideoProgram(type);
          }
        }
      }, {
        key: "getAllVideoProgram",
        value: function getAllVideoProgram(type) {
          var _this4 = this;

          console.log(type);

          if (type == 'prev') {
            this.videoArrow = 'up';
          } else {
            this.videoArrow = 'down';
          }

          this.commonService.presentLoader();
          this.programService.getAllVideoPrograms({
            data: type
          }).subscribe(function (data) {
            _this4.videoProgList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
            _this4.videoFiltered = _this4.videoProgList;

            if (_this4.videoFiltered.length <= 0) {
              _this4.noVideoProg = true;
            } else {
              _this4.noVideoProg = false;
            }

            console.log(_this4.videoProgList);

            _this4.commonService.dismissLoader();
          }, function (err) {
            _this4.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this4.commonService.dismissLoader();
          });
        }
      }, {
        key: "getAllNutritionProgram",
        value: function getAllNutritionProgram(type) {
          var _this5 = this;

          console.log(type);

          if (type == 'prev') {
            this.nutriArrow = 'up';
          } else {
            this.nutriArrow = 'down';
          }

          this.commonService.presentLoader();
          this.programService.getAllNutritionPrograms({
            data: type
          }).subscribe(function (data) {
            _this5.nutritionList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
            _this5.nutriProgArray = _this5.nutritionList;

            if (_this5.nutritionList.length < 1) {
              _this5.noNutriProg = true;
            } else {
              _this5.noNutriProg = false;
            }

            console.log(_this5.nutritionList);

            _this5.commonService.dismissLoader();
          }, function (err) {
            _this5.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this5.commonService.dismissLoader();
          });
        }
      }, {
        key: "hostingDropdown",
        value: function hostingDropdown(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this6 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _program_hosting_dropdown_hosting_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["HostingDropdownComponent"],
                      componentProps: {
                        "id": ev,
                        "user_type": this.userData.user_type
                      },
                      translucent: false,
                      cssClass: 'dropdown-menu'
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this6.ngOnInit();
                      }
                    });
                    _context.next = 6;
                    return popover.present();

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
        key: "requestDropdown",
        value: function requestDropdown(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.create({
                      component: _program_requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["RequestedDropdownComponent"],
                      componentProps: {
                        "id": ev,
                        "user_type": this.userData.user_type
                      },
                      translucent: false,
                      cssClass: 'dropdown-menu'
                    });

                  case 2:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (dataReturned) {
                      _this7.ngOnInit();

                      if (dataReturned !== null) {
                        _this7.ngOnInit();
                      }
                    });
                    _context2.next = 6;
                    return popover.present();

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
        key: "showVideoDetails",
        value: function showVideoDetails(item, videoIDs) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_9__["ViewVideoDetailComponent"], 'fullModal', {
                      'details': item,
                      'videoIds': videoIDs
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal(data) {
          console.log(data);
          this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_8__["NutritionModalComponent"], 'fullModal', {
            'data': data
          });
        }
      }]);

      return NewScheduleProgramPage;
    }();

    NewScheduleProgramPage.ctorParameters = function () {
      return [{
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    NewScheduleProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-schedule-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-schedule-program.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-schedule-program/new-schedule-program.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-schedule-program.page.scss */
      "./src/app/new-schedule-program/new-schedule-program.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], NewScheduleProgramPage);
    /***/
  }
}]);
//# sourceMappingURL=new-schedule-program-new-schedule-program-module-es5.js.map