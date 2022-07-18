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


    __webpack_exports__["default"] = ".right-div {\n  display: flex;\n  align-items: center;\n}\n.right-div .min-width-none {\n  min-width: 0px !important;\n}\n.right-div .pl-8 {\n  padding-left: 8px !important;\n}\n.ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important;\n}\n.ionic-divider .three-tabs ion-segment ion-segment-button {\n  width: auto;\n}\n.ionic-divider ion-segment-button {\n  min-height: 38px;\n  color: #000;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.ionic-divider ion-segment-button .ionic-icon {\n  font-size: 2rem !important;\n}\n.ionic-divider ion-segment-button .live-icon {\n  padding: 5px 10px;\n  background: #555;\n  color: #fff;\n  border-radius: 20px;\n}\n.ionic-divider ion-segment-button .live-icon span {\n  font-size: 10px;\n  color: #fff;\n}\nion-segment-button.segment-button-checked {\n  background: #27a69a;\n  --indicator-color-checked: #27a69a;\n  color: #FFF;\n}\nion-segment-button.segment-button-checked .live-icon {\n  background: #27a69a;\n}\nion-segment-button.segment-button-checked .live-icon span {\n  color: #fff !important;\n}\n.border-bot {\n  border-bottom: 1px solid #cecece;\n}\n.program-live-box {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 10px;\n}\n.program-live-box .program-live-timer p {\n  font-size: 14px;\n  color: #eb0000;\n  margin-top: 3px;\n}\n.program-live-box .program-live-btn button {\n  background: #eb0000;\n  color: #fff;\n  padding: 10px 15px;\n  border-radius: 15px;\n}\n.program-card {\n  display: flex;\n  align-items: center;\n  padding: 18px 12px;\n}\n.program-card ion-avatar {\n  margin-right: 15px;\n}\n.program-card .program-info {\n  flex: 1;\n}\n.program-card .program-info h6 {\n  margin-bottom: 0px;\n  margin-top: 0px;\n  color: #121212;\n}\n.program-card .program-info span {\n  color: #555;\n}\n.program-card .program-info p {\n  font-size: 12px;\n  color: #27a69a;\n  margin-top: 3px;\n}\n.program-card .ionic-icon {\n  color: #555;\n  margin-right: 20px;\n  margin-left: 15px;\n  font-size: 24px;\n}\n.program-card .program-type {\n  margin-right: 12px;\n  margin-left: 12px;\n}\n::ng-deep table {\n  border: 0 !important;\n}\n::ng-deep tr {\n  display: flex !important;\n  justify-content: space-around;\n}\n::ng-deep th {\n  flex: 1;\n}\n::ng-deep th, ::ng-deep td {\n  border: 0 !important;\n}\n::ng-deep td {\n  display: inline-block;\n  margin: 0.2rem !important;\n  padding: 0 !important;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n::ng-deep td.monthview-secondary-with-event.text-muted {\n  border-radius: 50% !important;\n}\n::ng-deep td.monthview-selected {\n  border-radius: 50% !important;\n}\n::ng-deep span.event-detail {\n  overflow: hidden !important;\n  max-width: 50vw;\n}\n::ng-deep span.monthview-eventdetail-timecolumn {\n  min-width: 100px !important;\n  width: 100px !important;\n}\n::ng-deep .item-native {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n}\n::ng-deep .event-detail-container {\n  display: none;\n}\n::ng-deep .event-detail-container ion-item {\n  --padding-end: 40px !important;\n  display: none;\n}\n::ng-deep .monthview-container {\n  height: auto !important;\n}\n::ng-deep .calendar-hour-column {\n  display: none !important;\n}\n::ng-deep .weekview-container {\n  height: auto !important;\n}\n::ng-deep .weekview-allday-table {\n  display: none !important;\n}\n::ng-deep ion-slides.slides-container.md.slides-md.swiper-container.hydrated.swiper-container-initialized.swiper-container-horizontal {\n  background: #27A69A !important;\n}\n::ng-deep td, ::ng-deep th {\n  border: 0 !important;\n}\n::ng-deep .table-bordered {\n  border: 0 !important;\n  border-bottom: 1px solid #cecece !important;\n}\n::ng-deep .slides-container {\n  color: #fff !important;\n  background: #27A69A !important;\n}\n::ng-deep .list-ios {\n  margin-bottom: 0 !important;\n}\n::ng-deep .table > thead > tr > th.weekview-header {\n  font-size: 13px !important;\n  font-weight: 500;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n::ng-deep ion-title.ios.title-ios.title-default.hydrated {\n  padding-inline: 0px;\n}\n::ng-deep th.weekview-header.text-center {\n  background-color: #fff;\n  color: #121212;\n}\n::ng-deep th.weekview-header.text-center.weekview-selected {\n  background-color: #27a69a;\n  color: #fff;\n}\n::ng-deep table.table.table-bordered.table-fixed.weekview-header thead {\n  background-color: #fff;\n}\n.toggle-cal {\n  color: #121212;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.segment-button-checked .live-icon {\n  background-color: #27a69a !important;\n}\n.event-detail-container.md.list-md.hydrated {\n  display: none !important;\n}\n.no-data {\n  height: 77vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXNjaGVkdWxlLXByb2dyYW0vRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcbmV3LXNjaGVkdWxlLXByb2dyYW1cXG5ldy1zY2hlZHVsZS1wcm9ncmFtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXNjaGVkdWxlLXByb2dyYW0vbmV3LXNjaGVkdWxlLXByb2dyYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURBTTtFQUNFLDRCQUFBO0FDRVI7QURDQTtFQUNJLHFDQUFBO1VBQUEsb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDRUo7QURESTtFQUNJLFdBQUE7QUNHUjtBRERJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0dSO0FERlE7RUFDSSwwQkFBQTtBQ0laO0FERlE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSVo7QURIWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDS2hCO0FERUE7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FERFE7RUFDSSxzQkFBQTtBQ0daO0FEQ0E7RUFDSSxnQ0FBQTtBQ0VKO0FEQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0dKO0FERFE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHWjtBRENRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NaO0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FERUk7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxPQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDWjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDWjtBREVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRElJO0VBQ0ksb0JBQUE7QUNEUjtBREdJO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtBQ0RSO0FER0k7RUFDSSxPQUFBO0FDRFI7QURHSTtFQUNJLG9CQUFBO0FDRFI7QURHSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBRElJO0VBQ0ksNkJBQUE7QUNGUjtBRElJO0VBQ0ksNkJBQUE7QUNGUjtBRElJO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0FDRlI7QURJSTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7QUNGUjtBRElJO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ0ZSO0FESUk7RUFFSSxhQUFBO0FDSFI7QURLSTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtBQ0hSO0FES0k7RUFDSSx1QkFBQTtBQ0hSO0FES0k7RUFDSSx3QkFBQTtBQ0hSO0FES007RUFDSSx1QkFBQTtBQ0hWO0FES1E7RUFDSSx3QkFBQTtBQ0haO0FES1E7RUFDRSw4QkFBQTtBQ0hWO0FES1E7RUFDRSxvQkFBQTtBQ0hWO0FES1E7RUFDRSxvQkFBQTtFQUNBLDJDQUFBO0FDSFY7QURLTTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNIUjtBREtNO0VBQ0UsMkJBQUE7QUNIUjtBREtNO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNIUjtBREtNO0VBQ0UsbUJBQUE7QUNIUjtBREtNO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FDSFY7QURLTTtFQUVFLHlCQUFBO0VBQ0EsV0FBQTtBQ0pSO0FETU07RUFDRSxzQkFBQTtBQ0pSO0FET0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0pKO0FET0k7RUFDSSxvQ0FBQTtBQ0pSO0FET0E7RUFDSSx3QkFBQTtBQ0pKO0FETUE7RUFDSSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9uZXctc2NoZWR1bGUtcHJvZ3JhbS9uZXctc2NoZWR1bGUtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubWluLXdpZHRoLW5vbmUge1xyXG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnBsLTh7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIH1cclxuLmlvbmljLWRpdmlkZXJ7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLnRocmVlLXRhYnMgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIC5pb25pYy1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpdmUtaWNvbntcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuICAgIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjMjdhNjlhO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICAubGl2ZS1pY29ue1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJvcmRlci1ib3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcclxufVxyXG4ucHJvZ3JhbS1saXZlLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5wcm9ncmFtLWxpdmUtdGltZXJ7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ViMDAwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9ncmFtLWxpdmUtYnRue1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViMDAwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9ncmFtLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDEycHg7XHJcbiAgICBpb24tYXZhdGFye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5wcm9ncmFtLWluZm97XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzI3YTY5YTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pb25pYy1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucHJvZ3JhbS10eXBle1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgdGFibGV7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0cntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICB0aHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgdGgsIHRke1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMC4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGQubW9udGh2aWV3LXNlY29uZGFyeS13aXRoLWV2ZW50LnRleHQtbXV0ZWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGQubW9udGh2aWV3LXNlbGVjdGVkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHNwYW4uZXZlbnQtZGV0YWlsIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5tb250aHZpZXctZXZlbnRkZXRhaWwtdGltZWNvbHVtbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbmF0aXZlIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWRldGFpbC1jb250YWluZXJ7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWRldGFpbC1jb250YWluZXIgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubW9udGh2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FsZW5kYXItaG91ci1jb2x1bW57XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC53ZWVrdmlldy1jb250YWluZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAgIC53ZWVrdmlldy1hbGxkYXktdGFibGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1zbGlkZXMuc2xpZGVzLWNvbnRhaW5lci5tZC5zbGlkZXMtbWQuc3dpcGVyLWNvbnRhaW5lci5oeWRyYXRlZC5zd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjdBNjlBICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkLCB0aCB7XHJcbiAgICAgICAgICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgICAgICAgYm9yZGVyOiAwIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlcy1jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI3QTY5QSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWlvc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLndlZWt2aWV3LWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweCAgO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi10aXRsZS5pb3MudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQuaHlkcmF0ZWQge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgdGgud2Vla3ZpZXctaGVhZGVyLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIH1cclxuICAgICAgdGgud2Vla3ZpZXctaGVhZGVyLnRleHQtY2VudGVyLndlZWt2aWV3LXNlbGVjdGVkIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2E2OWE7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgdGFibGUudGFibGUudGFibGUtYm9yZGVyZWQudGFibGUtZml4ZWQud2Vla3ZpZXctaGVhZGVyIHRoZWFke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxufVxyXG4udG9nZ2xlLWNhbHtcclxuICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuICAgIC5saXZlLWljb257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YTY5YSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5ldmVudC1kZXRhaWwtY29udGFpbmVyLm1kLmxpc3QtbWQuaHlkcmF0ZWR7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vLWRhdGF7XHJcbiAgICBoZWlnaHQ6IDc3dmg7XHJcbn0iLCIucmlnaHQtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yaWdodC1kaXYgLm1pbi13aWR0aC1ub25lIHtcbiAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cbi5yaWdodC1kaXYgLnBsLTgge1xuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4uaW9uaWMtZGl2aWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbn1cbi5pb25pYy1kaXZpZGVyIC50aHJlZS10YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmlvbmljLWRpdmlkZXIgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5pb25pYy1kaXZpZGVyIGlvbi1zZWdtZW50LWJ1dHRvbiAuaW9uaWMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufVxuLmlvbmljLWRpdmlkZXIgaW9uLXNlZ21lbnQtYnV0dG9uIC5saXZlLWljb24ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uaW9uaWMtZGl2aWRlciBpb24tc2VnbWVudC1idXR0b24gLmxpdmUtaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjMjdhNjlhO1xuICBjb2xvcjogI0ZGRjtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5saXZlLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xufVxuaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLmxpdmUtaWNvbiBzcGFuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbn1cblxuLnByb2dyYW0tbGl2ZS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucHJvZ3JhbS1saXZlLWJveCAucHJvZ3JhbS1saXZlLXRpbWVyIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWIwMDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4ucHJvZ3JhbS1saXZlLWJveCAucHJvZ3JhbS1saXZlLWJ0biBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZWIwMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ucHJvZ3JhbS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMThweCAxMnB4O1xufVxuLnByb2dyYW0tY2FyZCBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnByb2dyYW0tY2FyZCAucHJvZ3JhbS1pbmZvIHtcbiAgZmxleDogMTtcbn1cbi5wcm9ncmFtLWNhcmQgLnByb2dyYW0taW5mbyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogIzEyMTIxMjtcbn1cbi5wcm9ncmFtLWNhcmQgLnByb2dyYW0taW5mbyBzcGFuIHtcbiAgY29sb3I6ICM1NTU7XG59XG4ucHJvZ3JhbS1jYXJkIC5wcm9ncmFtLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyN2E2OWE7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5wcm9ncmFtLWNhcmQgLmlvbmljLWljb24ge1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnByb2dyYW0tY2FyZCAucHJvZ3JhbS10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuOjpuZy1kZWVwIHRhYmxlIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgdHIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuOjpuZy1kZWVwIHRoIHtcbiAgZmxleDogMTtcbn1cbjo6bmctZGVlcCB0aCwgOjpuZy1kZWVwIHRkIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgdGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC4ycmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDM3cHg7XG4gIGhlaWdodDogMzdweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgdGQubW9udGh2aWV3LXNlY29uZGFyeS13aXRoLWV2ZW50LnRleHQtbXV0ZWQge1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCB0ZC5tb250aHZpZXctc2VsZWN0ZWQge1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBzcGFuLmV2ZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA1MHZ3O1xufVxuOjpuZy1kZWVwIHNwYW4ubW9udGh2aWV3LWV2ZW50ZGV0YWlsLXRpbWVjb2x1bW4ge1xuICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmV2ZW50LWRldGFpbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogNDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5tb250aHZpZXctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNhbGVuZGFyLWhvdXItY29sdW1uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC53ZWVrdmlldy1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAud2Vla3ZpZXctYWxsZGF5LXRhYmxlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGlvbi1zbGlkZXMuc2xpZGVzLWNvbnRhaW5lci5tZC5zbGlkZXMtbWQuc3dpcGVyLWNvbnRhaW5lci5oeWRyYXRlZC5zd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCB7XG4gIGJhY2tncm91bmQ6ICMyN0E2OUEgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCB0ZCwgOjpuZy1kZWVwIHRoIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNsaWRlcy1jb250YWluZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMjdBNjlBICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmxpc3QtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC53ZWVrdmlldy1oZWFkZXIge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuOjpuZy1kZWVwIGlvbi10aXRsZS5pb3MudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQuaHlkcmF0ZWQge1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuOjpuZy1kZWVwIHRoLndlZWt2aWV3LWhlYWRlci50ZXh0LWNlbnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMTIxMjEyO1xufVxuOjpuZy1kZWVwIHRoLndlZWt2aWV3LWhlYWRlci50ZXh0LWNlbnRlci53ZWVrdmlldy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2E2OWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIHRhYmxlLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnRhYmxlLWZpeGVkLndlZWt2aWV3LWhlYWRlciB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi50b2dnbGUtY2FsIHtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLmxpdmUtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2E2OWEgIWltcG9ydGFudDtcbn1cblxuLmV2ZW50LWRldGFpbC1jb250YWluZXIubWQubGlzdC1tZC5oeWRyYXRlZCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5vLWRhdGEge1xuICBoZWlnaHQ6IDc3dmg7XG59Il19 */";
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