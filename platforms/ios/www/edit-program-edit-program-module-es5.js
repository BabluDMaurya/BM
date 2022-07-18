function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-program-edit-program-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalendarCalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  calendar works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-program/edit-program.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-program/edit-program.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditProgramEditProgramPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Edit Program</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"nextStep(2)\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gallaryImgPath?.length>0 || preGallaryImgPath?.length>0 || videoFileSelected || preGallaryVidPath != null\" >\r\n        <!-- <ion-button (click)=\"slidePrev(mySlider)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button> -->\r\n        \r\n        <ion-slides pager=\"true\"  [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let preImgpath of preGallaryImgPath; let i=index;\">\r\n            <img src=\"{{url}}{{preImgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemoveImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide  *ngIf=\"preGallaryVidPath != null\">\r\n            <!-- <img  class=\"mb-10\" height=\"250px\" (click)=\"preFilepreview()\" src=\"../../assets/images/demo3.jpg\"/> -->\r\n            <img  class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\"/>\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemovevideo()\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide *ngIf=\"isVideoSelected\">\r\n            <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n            <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <!-- <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-col>\r\n      <ion-item-sliding *ngFor=\"let f of files\">\r\n        <ion-item (click)=\"openFile(f)\">\r\n          <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\r\n          <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\r\n          <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\r\n\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ f.name }}\r\n            <p>{{ f.fullPath }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n      <!-- \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\">\r\n            <img src=\"../../assets/images/demo1.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo2.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo3.jpg\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"programForm\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-input placeholder=\"Title\" class=\"form-control\" formControlName=\"programTitle\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.programTitle.errors }\"></ion-input>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.programTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || programForm.get('programTitle').touched) && programForm.get('programTitle').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-textarea placeholder=\"Description\" class=\"form-control\" formControlName=\"programDescription\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <ion-list-header class=\"grey-header\">\r\n                    <ion-label>Program Type</ion-label>\r\n                  </ion-list-header>\r\n                  <h6 class=\"programHeading\">{{programList?.type_id}}</h6>\r\n                  <ion-text>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                    ut labore et dolore magna aliqua.\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Praticipants Type</ion-label>\r\n                </ion-list-header>\r\n                <ion-item lines=\"none\" class=\"grey-header\" *ngIf = \"programList?.is_requested == '0'\">\r\n                  <ion-label >Exclusive</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"grey-header mb-10\" *ngIf = \"programList?.is_requested == '1'\">\r\n                  <ion-label>open </ion-label>\r\n                </ion-item>\r\n            </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\" *ngIf=\"modalData\">\r\n              <ion-list lines=\"none\" class=\"users-list\">\r\n                <ion-item *ngFor=\"let user of modalData\" >\r\n\r\n                  <img *ngIf=\"user?.bios?.profile_pic\" src=\"{{profileUrl}}{{user?.bios?.profile_pic}}\"  (click)=\"userList()\"/>\r\n                  <img *ngIf=\"!user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\"  (click)=\"userList()\"/>\r\n                  <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Create Chat room for program</ion-label>\r\n              <ion-toggle [disabled]='false' formControlName=\"chatStatus\"  [(ngModel)]=\"toggleValue\"  slot=\"end\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-list>\r\n         \r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==2\">\r\n  <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=1\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Preview</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"selectVolume()\" class=\"text-green\">Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\"> -->\r\n        <div *ngIf=\"repetatedDateCopy.length>0\">\r\n          <!-- <div class=\"ion-padding-horizontal\">\r\n          <ion-list>            \r\n              <ion-item class=\"ion-no-padding ion-margin-vertical\">\r\n                <ion-label>Add Bonus Video, Nutrition</ion-label>\r\n                <ion-datetime value=\"\" display-timezone=\"utc\"  (ionChange)=\"addExtraDay($event)\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-list> \r\n          </div> -->\r\n          <ion-list *ngFor=\"let date of repetatedDateCopy let i = index\">\r\n            <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n              {{date.date | date :'medium'}}\r\n              <div>\r\n                <ion-icon ios=\"ios-construct\" md=\"md-construct\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n                <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n                </ion-icon>\r\n                <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon>\r\n                <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n              </div>\r\n            </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Equipments :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date?.equipments != '';else no_equipment\">\r\n                <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of date?.equipments\" />\r\n              </div>\r\n              <ng-template #no_equipment>No Equipment Selected</ng-template>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Nutritions :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date.nutrition_id != '';else no_nutrition\">\r\n                <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.nutrition_id\" />\r\n              </div>\r\n              <ng-template #no_nutrition>No Nutrition Selected</ng-template>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Videos :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date?.video;else no_videos\">\r\n              \r\n                <img src=\"../../assets/images/demo2.jpg\" />\r\n              </div>\r\n              <ng-template #no_videos>No videos Selected</ng-template>\r\n            </ion-item>      \r\n            <ion-item class=\"descriptionItem\">\r\n              <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,i)\"\r\n                  value=\"{{programList?.nutri_desc}}\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-list>    \r\n        </div>\r\n      </ion-col>\r\n    </ion-row> \r\n  </ion-grid> \r\n  <!-- <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==3\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=2\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" (click)=\"selectVolume()\">\r\n          <ion-label class=\"text-green\" >Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <div class=\"main_content ion-padding programPreview\">\r\n      <form [formGroup]=\"finalForm\" (ngSubmit)=\"saveProg()\">\r\n        <h6 style=\"margin: 0 0 15px 0\">Program Name: {{ programList.title }} </h6>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"display: contents;\">How much would you like to charge:</ion-label>\r\n          <ion-label style=\"    margin-left: 40px;\">$</ion-label>\r\n          <ion-input class=\"form-control\" type=\"number\" formControlName=\"programFees\" value=\"{{programList.program_fee}}\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"programList.type_id == 'video' \">\r\n        <ion-label style=\"display: block;margin-top: 15px;\">Would you like to request Sponsors:</ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-radio-group value=\"sponsors_group\" class=\"radio-group radioPreview\">\r\n          <ion-item>\r\n            <ion-label>Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"1\" (click)=\"sponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"2\" (click)=\"unsponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>      \r\n      </ion-item>\r\n      </div>\r\n      <ion-item lines=\"none\" (click)=\"verifyUserInfoModal()\" *ngIf=\"loginUserData.trilloMatch != '1' && programList.type_id != 'video' \">\r\n        <ion-button class=\"green\">Earn with Intoative</ion-button>\r\n      </ion-item>\r\n    </form>\r\n      <ion-footer class=\"sticky-footer\" *ngIf=\"approval_btn && !request_approve_btn \">\r\n        <ion-button (click)=\"applyAdvertise()\" class=\"green\">Request Approval</ion-button> \r\n      </ion-footer>\r\n      <ion-footer class=\"sticky-footer\" *ngIf=\"request_approve_btn\">\r\n        <ion-button class=\"green\">Request Sent</ion-button> \r\n      </ion-footer>\r\n    </div>\r\n  </ion-grid> -->\r\n</ion-content>\r\n\r\n<!-- <ion-footer class=\"sticky-footer musiclist green\" *ngIf=\"showProgram==3\">  \r\n  <app-audio-player [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n  </app-audio-player>\r\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/calendar/calendar.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/calendar/calendar.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalendarCalendarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/calendar/calendar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/calendar/calendar.component.ts ***!
    \************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CalendarComponent = /*#__PURE__*/function () {
      function CalendarComponent() {
        _classCallCheck(this, CalendarComponent);
      }

      _createClass(CalendarComponent, [{
        key: "slideNext",
        value: function slideNext() {
          throw new Error('Method not implemented.');
        }
      }, {
        key: "slidePrev",
        value: function slidePrev() {
          throw new Error('Method not implemented.');
        }
      }, {
        key: "loadEvents",
        value: function loadEvents() {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalendarComponent;
    }();

    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calendar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calendar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calendar.component.scss */
      "./src/app/calendar/calendar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CalendarComponent);
    /***/
  },

  /***/
  "./src/app/edit-program/edit-program-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/edit-program/edit-program-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: EditProgramPageRoutingModule */

  /***/
  function srcAppEditProgramEditProgramRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProgramPageRoutingModule", function () {
      return EditProgramPageRoutingModule;
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


    var _edit_program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-program.page */
    "./src/app/edit-program/edit-program.page.ts");

    var routes = [{
      path: '',
      component: _edit_program_page__WEBPACK_IMPORTED_MODULE_3__["EditProgramPage"]
    }];

    var EditProgramPageRoutingModule = function EditProgramPageRoutingModule() {
      _classCallCheck(this, EditProgramPageRoutingModule);
    };

    EditProgramPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProgramPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/edit-program/edit-program.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/edit-program/edit-program.module.ts ***!
    \*****************************************************/

  /*! exports provided: EditProgramPageModule */

  /***/
  function srcAppEditProgramEditProgramModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProgramPageModule", function () {
      return EditProgramPageModule;
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


    var _edit_program_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-program-routing.module */
    "./src/app/edit-program/edit-program-routing.module.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");
    /* harmony import */


    var _edit_program_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-program.page */
    "./src/app/edit-program/edit-program.page.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../profile/components.modules */
    "./src/app/profile/components.modules.ts");

    var EditProgramPageModule = function EditProgramPageModule() {
      _classCallCheck(this, EditProgramPageModule);
    };

    EditProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _edit_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProgramPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["NgCalendarModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"]],
      declarations: [_edit_program_page__WEBPACK_IMPORTED_MODULE_7__["EditProgramPage"]]
    })], EditProgramPageModule);
    /***/
  },

  /***/
  "./src/app/edit-program/edit-program.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/edit-program/edit-program.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditProgramEditProgramPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".note {\n  color: #000;\n}\n\n.users-list {\n  display: flex;\n  width: 100%;\n}\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: auto;\n}\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list ion-item img:first-child {\n  margin-left: 0;\n}\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px;\n}\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n}\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list img:first-child {\n  margin-left: 0;\n}\n\n.users-list ion-label {\n  width: 100px;\n}\n\n.view-all {\n  width: 36px;\n  height: 36px;\n  max-width: 36px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px;\n}\n\n.nutriimages-list ion-label {\n  font-size: 0.75rem;\n  margin: 3px 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: block;\n  color: #444;\n}\n\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.calendar-header ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.calendar-header ion-item:nth-child(2) {\n  display: contents;\n}\n\n.table > tbody > tr > td.calendar-hour-column {\n  width: 55px;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.ios.main_content {\n  padding-top: 0;\n}\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px;\n}\n\nion-segment-button {\n  position: relative;\n}\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%;\n}\n\n.video-skeleton {\n  height: 200px;\n}\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px;\n}\n\n.swiper-slide {\n  background: #fbfbfb;\n}\n\nion-slides {\n  height: 190px;\n}\n\n.top-header {\n  position: fixed;\n}\n\n.slides-container {\n  height: 78% !important;\n}\n\n.programHeading {\n  font-size: 14px;\n  text-transform: capitalize;\n  margin-bottom: 5px;\n}\n\n.nutrition-form ion-item ion-textarea {\n  padding-bottom: 10px;\n  --padding-bottom: 15px;\n}\n\n.radioPreview {\n  display: flex;\n}\n\n.radioPreview ion-item {\n  --background: transparent;\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  font-size: 0.9rem;\n  margin-right: 30px;\n}\n\n.radioPreview ion-item ion-radio {\n  margin-right: 10px;\n}\n\n.thumb-list ion-item ion-label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  background: rgba(38, 166, 154, 0.5);\n  width: 100%;\n  color: #FFF;\n  padding: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9ncmFtL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXGVkaXQtcHJvZ3JhbVxcZWRpdC1wcm9ncmFtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdC1wcm9ncmFtL2VkaXQtcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxXQUFBO0FDRU47O0FEREE7RUFBWSxhQUFBO0VBQWMsV0FBQTtBQ00xQjs7QURMQTtFQUFxQixrQkFBQTtFQUFtQixhQUFBO0VBQWMsV0FBQTtBQ1d0RDs7QURWQTtFQUF5QixXQUFBO0VBQVksWUFBQTtFQUFhLG9CQUFBO0tBQUEsaUJBQUE7RUFBa0Isa0JBQUE7RUFBbUIsa0JBQUE7QUNrQnZGOztBRGpCQTtFQUFxQyxjQUFBO0FDcUJyQzs7QURwQkE7RUFBVSxXQUFBO0VBQVcsWUFBQTtFQUFZLGVBQUE7RUFBZ0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBbUIsa0JBQUE7RUFBa0IsYUFBQTtFQUFhLHVCQUFBO0VBQXVCLG1CQUFBO0VBQW1CLFNBQUE7RUFBVSxrQkFBQTtBQ2tDeks7O0FEaENBO0VBQVksa0JBQUE7RUFBbUIsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLGFBQUE7QUN1Q2pFOztBRHRDQTtFQUFnQixXQUFBO0VBQVksWUFBQTtFQUFhLG9CQUFBO0tBQUEsaUJBQUE7RUFBa0Isa0JBQUE7RUFBbUIsa0JBQUE7QUM4QzlFOztBRDdDQTtFQUE0QixjQUFBO0FDaUQ1Qjs7QURoREE7RUFBc0IsWUFBQTtBQ29EdEI7O0FEbkRBO0VBQVUsV0FBQTtFQUFXLFlBQUE7RUFBWSxlQUFBO0VBQWdCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLGFBQUE7RUFBYSx1QkFBQTtFQUF1QixtQkFBQTtFQUFtQixTQUFBO0VBQVUsa0JBQUE7QUNpRXpLOztBRGhFQTtFQUE0QixrQkFBQTtFQUFtQixhQUFBO0VBQWMsMEJBQUE7RUFBMkIsaUJBQUE7RUFBa0IsZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLFdBQUE7QUMwRTFJOztBRHhFQTtFQUFpQixhQUFBO0VBQWMsOEJBQUE7RUFBK0IsbUJBQUE7QUM4RTlEOztBRDdFQTtFQUEwQixrQkFBQTtFQUFtQixzQkFBQTtBQ2tGN0M7O0FEakZBO0VBQXVDLGlCQUFBO0FDcUZ2Qzs7QURwRkE7RUFBOEMsV0FBQTtBQ3dGOUM7O0FEdEZBO0VBQVUsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFVBQUE7RUFBVyxXQUFBO0FDNkZwRDs7QUQ1RkE7RUFBWSwwQkFBQTtBQ2dHWjs7QUQvRkE7RUFBcUIseUJBQUE7RUFBMEIsc0JBQUE7RUFBdUIsc0JBQUE7QUNxR3RFOztBRHBHQTtFQUErQixTQUFBO0VBQVUsa0JBQUE7RUFBbUIsaUJBQUE7QUMwRzVEOztBRHpHQTtFQUFvQyxXQUFBO0VBQVksWUFBQTtFQUFhLHdDQUFBO0VBQXlDLGtCQUFBO0FDZ0h0Rzs7QUQvR0E7RUFBNkMsV0FBQTtBQ21IN0M7O0FEaEhBO0VBQWtCLGNBQUE7QUNvSGxCOztBRGpIQTtFQUFzQyxZQUFBO0FDcUh0Qzs7QURwSEE7RUFBbUIsa0JBQUE7QUN3SG5COztBRHZIQTtFQUFxQyxrQkFBQTtFQUFtQixZQUFBO0VBQWEsU0FBQTtFQUFVLFVBQUE7QUM4SC9FOztBRDdIQTtFQUFnQixhQUFBO0FDaUloQjs7QURoSUE7RUFBNEQsU0FBQTtFQUFVLFlBQUE7QUNxSXRFOztBRHBJQTtFQUFjLG1CQUFBO0FDd0lkOztBRHZJQTtFQUFXLGFBQUE7QUMySVg7O0FEMUlBO0VBQVksZUFBQTtBQzhJWjs7QUQ3SUE7RUFDSSxzQkFBQTtBQ2dKSjs7QUQ3SUE7RUFBZ0IsZUFBQTtFQUFnQiwwQkFBQTtFQUEyQixrQkFBQTtBQ21KM0Q7O0FEaEpRO0VBQWEsb0JBQUE7RUFBcUIsc0JBQUE7QUNxSjFDOztBRGxKQTtFQUFjLGFBQUE7QUNzSmQ7O0FEckpJO0VBQVMseUJBQUE7RUFDTCw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFBdUIsaUJBQUE7RUFBbUIsa0JBQUE7QUMwSmxEOztBRHpKUTtFQUFVLGtCQUFBO0FDNEpsQjs7QUR2SlE7RUFDSixrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQzBKSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZ3JhbS9lZGl0LXByb2dyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGV7Y29sb3I6ICMwMDA7fVxyXG4udXNlcnMtbGlzdHtkaXNwbGF5OiBmbGV4O3dpZHRoOiAxMDAlO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW17LS1taW4taGVpZ2h0OiBhdXRvO2Rpc3BsYXk6IGZsZXg7d2lkdGg6IGF1dG87fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWd7d2lkdGg6IDQycHg7aGVpZ2h0OiA0MnB4O29iamVjdC1maXQ6IGNvdmVyO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWc6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udmlldy1hbGx7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDttYXgtd2lkdGg6IDQycHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZjFmMGYwO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46IDA7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuXHJcbi51c2Vycy1saXN0ey0tbWluLWhlaWdodDogYXV0bztkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7bWFyZ2luOiA2cHggMDt9XHJcbi51c2Vycy1saXN0IGltZ3t3aWR0aDogMzZweDtoZWlnaHQ6IDM2cHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcbi51c2Vycy1saXN0IGltZzpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi51c2Vycy1saXN0IGlvbi1sYWJlbHt3aWR0aDogMTAwcHg7fVxyXG4udmlldy1hbGx7d2lkdGg6MzZweDtoZWlnaHQ6MzZweDttYXgtd2lkdGg6IDM2cHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZjFmMGYwO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46IDA7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC43NXJlbTttYXJnaW46IDNweCAwO3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2xldHRlci1zcGFjaW5nOiAwO2ZvbnQtd2VpZ2h0OiA0MDA7ZGlzcGxheTogYmxvY2s7Y29sb3I6ICM0NDQ7fVxyXG5cclxuLmNhbGVuZGFyLWhlYWRlcntkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczogY2VudGVyO31cclxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbXstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDt9XHJcbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW06bnRoLWNoaWxkKDIpe2Rpc3BsYXk6IGNvbnRlbnRzO31cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLmNhbGVuZGFyLWhvdXItY29sdW1ue3dpZHRoOiA1NXB4O31cclxuXHJcbmlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7dG9wOiAtMzBweDt6LWluZGV4OiA5OTt9XHJcbi5hdWRpby1saXN0e3BhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtjb2xvcjogI0ZGRiAhaW1wb3J0YW50O3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luOiAwO21hcmdpbi1yaWdodDogMjBweDtvdmVyZmxvdzogaW5oZXJpdDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9ue3dpZHRoOiAyNXB4O2hlaWdodDogMjVweDstLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50Oy0tYm94LXNoYWRvdzogbm9uZTt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29ue2NvbG9yOiAjRkZGO31cclxuXHJcbi8vIGlvcyBjc3NcclxuLmlvcy5tYWluX2NvbnRlbnR7cGFkZGluZy10b3A6IDA7fVxyXG5cclxuLy8gaW9uLXNrZWxldG9uLXRleHQgY3NzXHJcbi5tdXNpY2xpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAzMHB4O31cclxuaW9uLXNlZ21lbnQtYnV0dG9ue3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tc2tlbGV0b24tdGV4dHtwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiAxMDAlO21hcmdpbjogMDt3aWR0aDogOTUlO31cclxuLnZpZGVvLXNrZWxldG9ue2hlaWdodDogMjAwcHg7fVxyXG5wIGlvbi1za2VsZXRvbi10ZXh0LCAucmFkaW8tbGlzdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dHttYXJnaW46IDA7aGVpZ2h0OiAyMHB4O31cclxuLnN3aXBlci1zbGlkZXtiYWNrZ3JvdW5kOiAjZmJmYmZiO31cclxuaW9uLXNsaWRlc3toZWlnaHQ6IDE5MHB4O31cclxuLnRvcC1oZWFkZXJ7cG9zaXRpb246IGZpeGVkO31cclxuLnNsaWRlcy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA3OCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2dyYW1IZWFkaW5ne2ZvbnQtc2l6ZTogMTRweDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4ubnV0cml0aW9uLWZvcm17XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBpb24tdGV4dGFyZWF7cGFkZGluZy1ib3R0b206IDEwcHg7LS1wYWRkaW5nLWJvdHRvbTogMTVweDt9XHJcbiAgICB9XHJcbn1cclxuLnJhZGlvUHJldmlld3tkaXNwbGF5OiBmbGV4O1xyXG4gICAgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtmb250LXNpemU6IDAuOTByZW07bWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGlvbi1yYWRpb3ttYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG4gICAgfVxyXG59XHJcbi50aHVtYi1saXN0IHtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDE2NiwgMTU0LCAwLjUwKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxufVxyXG59IiwiLm5vdGUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnVzZXJzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWcge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZzpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4udmlldy1hbGwge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXgtd2lkdGg6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi51c2Vycy1saXN0IHtcbiAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDZweCAwO1xufVxuXG4udXNlcnMtbGlzdCBpbWcge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi51c2Vycy1saXN0IGltZzpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4udXNlcnMtbGlzdCBpb24tbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi52aWV3LWFsbCB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1heC13aWR0aDogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMGYwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBtYXJnaW46IDNweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmNhbGVuZGFyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbTpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLmNhbGVuZGFyLWhvdXItY29sdW1uIHtcbiAgd2lkdGg6IDU1cHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTMwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uYXVkaW8tbGlzdCB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5pb3MubWFpbl9jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tdXNpY2xpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLnZpZGVvLXNrZWxldG9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxucCBpb24tc2tlbGV0b24tdGV4dCwgLnJhZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDE5MHB4O1xufVxuXG4udG9wLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnNsaWRlcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDc4JSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3JhbUhlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5udXRyaXRpb24tZm9ybSBpb24taXRlbSBpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnJhZGlvUHJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmFkaW9QcmV2aWV3IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5yYWRpb1ByZXZpZXcgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udGh1bWItbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCAxNjYsIDE1NCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/edit-program/edit-program.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/edit-program/edit-program.page.ts ***!
    \***************************************************/

  /*! exports provided: EditProgramPage */

  /***/
  function srcAppEditProgramEditProgramPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProgramPage", function () {
      return EditProgramPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../add-program/user-modal/user-modal.component */
    "./src/app/add-program/user-modal/user-modal.component.ts");
    /* harmony import */


    var _add_program_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../add-program/user-list/user-list.component */
    "./src/app/add-program/user-list/user-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../calendar/calendar.component */
    "./src/app/calendar/calendar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _add_program_date_time_modal_date_time_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../add-program/date-time-modal/date-time-modal.component */
    "./src/app/add-program/date-time-modal/date-time-modal.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/media/ngx */
    "./node_modules/@ionic-native/media/ngx/index.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_music_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../services/music.service */
    "./src/app/services/music.service.ts");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../modalContent/verify-user-info/verify-user-info.component */
    "./src/app/modalContent/verify-user-info/verify-user-info.component.ts");
    /* harmony import */


    var _add_program_add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../add-program/add-equipments/add-equipments.component */
    "./src/app/add-program/add-equipments/add-equipments.component.ts");
    /* harmony import */


    var _add_program_videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../add-program/videos-thumb-list/videos-thumb-list.component */
    "./src/app/add-program/videos-thumb-list/videos-thumb-list.component.ts");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js"); // import { AddEquipmentsComponent } from './../add-equipments/add-equipments.component';


    var baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].ApiUrl;

    var EditProgramPage = /*#__PURE__*/function () {
      function EditProgramPage(commonService, alertCtrl, locale, modalCtrl, datePipe, navCtrl, fb, actionSheetController, mediaCapture, programService, router, platform, camera, musicService, actRoute, media, file, transfer, previewAnyFile) {
        var _this = this;

        _classCallCheck(this, EditProgramPage);

        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.modalCtrl = modalCtrl;
        this.datePipe = datePipe;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.actionSheetController = actionSheetController;
        this.mediaCapture = mediaCapture;
        this.programService = programService;
        this.router = router;
        this.platform = platform;
        this.camera = camera;
        this.musicService = musicService;
        this.actRoute = actRoute;
        this.media = media;
        this.file = file;
        this.transfer = transfer;
        this.previewAnyFile = previewAnyFile;
        this.sliderOpts = {
          zoom: true,
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 5
        };
        this.showProgram = 1;
        this.event = {
          startTime: '',
          endTime: ''
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
          mode: 'day',
          currentDate: new Date()
        };
        this.duration = -1;
        this.position = 0;
        this.gallaryImgPath = [];
        this.preGallaryImgPath = [];
        this.vidUrl = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].progVidUrl;
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].profilePic;
        this.visibility = false;
        this.approval_btn = false;
        this.nextStepClick = false;
        this.request_approve_btn = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].imgUrl;
        this.repetatedDateCopy = [];
        this.isVideoSelected = false;
        this.videoFileSelected = false;
        this['validation_messages'] = {
          programTitle: [{
            type: 'required',
            message: 'title is required.'
          }, {
            type: 'maxlength',
            message: '150 chars allowed'
          }],
          // programType: [
          //   { type: 'required', message: 'Program Type is required' },
          // ],programType
          paymentType: [{
            type: 'required',
            message: 'payment typee is required.'
          }]
        };
        this.musicTypes = 'music';
        this.selectMusicList = 'hiphop';
        this.submitted = false;
        this.audioFile = 'into_20180418_173147_audio.mp3';
        this.baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].ApiUrl;
        this.musicChanged = 0;
        var d = new Date();
        this.currentHrs = d.getHours();
        this.musicService.getGenres().subscribe(function (data) {
          _this.genres = data.genres;
          _this.allMusic = data.genres[0].musics;
        });
        this.finalForm = this.fb.group({
          programFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
      }

      _createClass(EditProgramPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.programService.getProgramById({
            'programId': this.programId
          }).subscribe(function (data) {
            _this2.programList = data.programData;
            console.log(_this2.programList); // console.log(this.programList.image_path);

            var arr = _this2.programList.image_path;
            var image = arr.split(',');
            var ImgPath = [];
            var imageUrl = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].imgUrl;
            image.forEach(function (value, key) {
              console.log(value);
              console.log('value');

              if (value != '') {
                ImgPath.push(value);
              }
            });
            _this2.preGallaryImgPath = ImgPath;
            _this2.preGallaryVidPath = _this2.programList.video_path;
            console.log(_this2.preGallaryImgPath);
            console.log(_this2.gallaryImgPath);
            var startTime = new Date(data.programData.program_date + 'Z');
            var endTime = new Date(data.programData.program_end_time + 'Z');
            var events = [];
            events.push({
              title: data.programData.title,
              startTime: startTime,
              endTime: endTime,
              allDay: false
            });
            _this2.eventSource = events;

            _this2.commonService.getUsersById({
              "userId": _this2.programList.request_sent
            }).subscribe(function (users) {
              _this2.modalData = users.userList;
              console.log(_this2.modalData);
              var uList;
              users.userList.forEach(function (el) {
                if (el.id) {
                  uList += el.id + ',';
                }

                console.log(el.id);
              });

              _this2.programForm.controls['userList'].setValue(uList);
            });

            _this2.programForm.patchValue({
              programTitle: _this2.programList.title,
              programDescription: _this2.programList.description
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // console.log(this.programDetail);
          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          this.createForm();
          this.actRoute.paramMap.subscribe(function (params) {
            _this3.programId = params.get('programId');
          });
        }
        /**
         * function to create add program form with validation.
         */

      }, {
        key: "createForm",
        value: function createForm() {
          this.programForm = this.fb.group({
            programTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([//UsernameValidator.validUsername,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            programDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            // programType: new FormControl('', Validators.compose([
            //   Validators.required
            // ])),
            // participantsType: new FormControl('', Validators.compose([
            //   Validators.required,
            // ])),
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            chatStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }
      }, {
        key: "musicList",
        value: function musicList(ev) {
          this.musicTypes = ev.detail.value;
        }
      }, {
        key: "selectMusic",
        value: function selectMusic(ev) {
          this.selectMusicList = ev.detail.value;
        }
      }, {
        key: "fmtMSS",
        value: function fmtMSS(s) {
          return this.datePipe.transform(s * 1000, 'mm:ss');
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
        key: "removeImg",
        value: function removeImg(index) {
          this.gallaryImgPath.splice(index, 1);
        }
      }, {
        key: "preRemoveImg",
        value: function preRemoveImg(index) {
          this.preGallaryImgPath.splice(index, 1);
        }
      }, {
        key: "preRemovevideo",
        value: function preRemovevideo(index) {
          this.preGallaryVidPath = null;
        }
      }, {
        key: "userModal",
        value: function userModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.modalData);
                    console.log(this.programForm.value); // this.commonService.presentModal(UserModalComponent, 'fullModal', {formData:this.programForm.value , source:'1'});

                    _context.next = 4;
                    return this.modalCtrl.create({
                      component: _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        formData: this.programForm.value,
                        source: '1'
                      }
                    });

                  case 4:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (d) {
                      console.log(d);
                      _this4.modalData = d.data;
                      var ulist = '';
                      console.log(d.data);
                      d.data.forEach(function (el) {
                        if (el.id) {
                          ulist += el.id + ',';
                        }

                        console.log(el.id);
                      });
                      console.log(ulist);

                      _this4.programForm.controls['userList'].setValue(ulist);
                    });
                    _context.next = 8;
                    return modal.present();

                  case 8:
                    return _context.abrupt("return", _context.sent);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "userList",
        value: function userList() {
          this.commonService.presentModal(_add_program_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], 'fullModal', {
            "userList": this.modalData
          });
        } // selectVolume() {
        //   if (!this.musicId) {
        //     this.commonService.presentToast('Select Music ');
        //     return false;
        //   }
        //   this.commonService.presentModal(MusicVolComponent, 'bottomModal', { "musicId": this.musicId, "programId": this.programDetail.id });
        // }

      }, {
        key: "resetEvent",
        value: function resetEvent() {
          this.event = {
            //title: '',
            //desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString()
          };
        }
      }, {
        key: "selectMedia",
        value: function selectMedia() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: 'What would you like to add?',
                      buttons: [{
                        text: 'Capture Image',
                        handler: function handler() {
                          _this5.takeSnap();
                        }
                      }, {
                        text: 'Record Video',
                        handler: function handler() {
                          _this5.recordVideo();
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // recordVideo() {
        //   this.mediaCapture.captureVideo().then(
        //     (data: MediaFile[]) => {
        //       if (data.length > 0) {
        //         this.copyFileToLocalDir(data[0].fullPath);
        //       }
        //     },
        //     (err: CaptureError) => console.error(err)
        //   );
        // }

      }, {
        key: "recordVideo",
        value: function recordVideo() {
          var _this6 = this;

          var options = {
            limit: 1,
            duration: 30,
            quality: 0
          };
          this.mediaCapture.captureVideo(options).then(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var filename, dirpath, dur, duration;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (data.length > 0) {
                        // this.copyFileToLocalDir(data[0].fullPath);
                        // this.showLoader();
                        this.uploadedVideo = null;
                        filename = data[0].name;
                        dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
                        dur = this.media.create(dirpath);
                        duration = dur.getDuration();
                        console.log(dur + 'dur');
                        console.log(duration + 'duration');
                        dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath; //   var durc = this.getvideoinfo(dirpath);
                        // console.log(durc + 'ddddddddddddddd');

                        this.selectedVideoFile(dirpath, filename);
                        this.visibility = true;
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }, function (err) {
            return console.error(err + 'yyyyerror');
          });
        }
      }, {
        key: "copyFileToLocalDir",
        value: function copyFileToLocalDir(fullPath) {
          var myPath = fullPath; // Make sure we copy from the right location

          if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
          }
        } // Change current month/week/day

      }, {
        key: "next",
        value: function next() {
          var swiper = document.querySelector('.swiper-container')['swiper'];
          swiper.slideNext();
        }
      }, {
        key: "back",
        value: function back() {
          var swiper = document.querySelector('.swiper-container')['swiper'];
          swiper.slidePrev();
        } // Selected date reange and hence title changed

      }, {
        key: "onViewTitleChanged",
        value: function onViewTitleChanged(title) {
          this.viewTitle = title;
        } // Calendar event was clicked

      }, {
        key: "onEventSelected",
        value: function onEventSelected(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var start, end, alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // Use Angular date pipe for conversion
                    console.log(event);
                    start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.startTime, 'medium', this.locale);
                    end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.endTime, 'medium', this.locale);
                    _context4.next = 5;
                    return this.alertCtrl.create({
                      header: event.title,
                      subHeader: event.desc,
                      message: 'From: ' + start + '<br><br>To: ' + end,
                      buttons: ['OK']
                    });

                  case 5:
                    alert = _context4.sent;
                    this.commonService.dismissModal();
                    alert.present();

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Time slot was clicked

      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.programDetail) {
                      _context5.next = 3;
                      break;
                    }

                    this.commonService.presentToast('only one program can create at a time');
                    return _context5.abrupt("return", true);

                  case 3:
                    this.selected = new Date(ev.selectedTime);
                    this.event.startTime = this.selected.toISOString();
                    this.selected.setHours(this.selected.getHours()); // if (ev.events.length > 0) {
                    //   console.log('sad');
                    // } else {

                    console.log(this.selected.getTime());
                    console.log(new Date().getTime());

                    if (!(this.selected.getTime() > new Date().getTime())) {
                      _context5.next = 18;
                      break;
                    }

                    _context5.next = 11;
                    return this.modalCtrl.create({
                      component: _add_program_date_time_modal_date_time_modal_component__WEBPACK_IMPORTED_MODULE_9__["DateTimeModalComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        "calendarData": this.selected,
                        "programData": this.programForm.value,
                        'programList': this.eventSource
                      }
                    });

                  case 11:
                    modal = _context5.sent;
                    modal.onDidDismiss().then(function (d) {
                      console.log(d);

                      if (d.data.program_date) {
                        var startTime;
                        var endTime;
                        startTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime.setMinutes(endTime.getMinutes() + parseInt(d.data.program_duration));

                        _this7.eventSource.push({
                          title: d.data.title,
                          startTime: startTime,
                          endTime: endTime,
                          allDay: false
                        });

                        _this7.programDetail = d.data;

                        _this7.ionViewWillEnter();
                      }
                    });
                    _context5.next = 15;
                    return modal.present();

                  case 15:
                    return _context5.abrupt("return", _context5.sent);

                  case 18:
                    this.commonService.presentToast('Sorry, this is past time');

                  case 19:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "addVideo",
        value: function addVideo(event, i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this8 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalCtrl.create({
                      component: _add_program_videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_20__["VideosThumbListComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        'programDetail': event
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (d.data) {
                        _this8.repetatedDateCopy[i].video = d.data; // this.repetatedDate[i].video=d.data;
                      }
                    });
                    _context6.next = 6;
                    return modal.present();

                  case 6:
                    return _context6.abrupt("return", _context6.sent);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "addEquipments2",
        value: function addEquipments2(event, item, i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this9 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _add_program_add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_19__["AddEquipmentsComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        "programData": item,
                        "modelOpen": event
                      }
                    });

                  case 2:
                    modal = _context7.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (event == 1) {
                        _this9.repetatedDateCopy[i].equipments = d.data.filter(Boolean); // this.repetatedDate[i].equipments = d.data.filter(Boolean) ;
                      } else {
                        _this9.repetatedDateCopy[i].nutrition_id = d.data.filter(Boolean); // this.repetatedDate[i].nutrition_id = d.data.filter(Boolean) ;
                      }

                      console.log(_this9.repetatedDateCopy); // console.log(this.repetatedDate);
                    });
                    _context7.next = 6;
                    return modal.present();

                  case 6:
                    return _context7.abrupt("return", _context7.sent);

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        } // ----------------------------- Open gallery  with multiple --------------//

      }, {
        key: "openGallery",
        value: function openGallery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this10 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.actionSheetController.create({
                      header: 'What would you like to add?',
                      buttons: [{
                        text: 'Select Image',
                        handler: function handler() {
                          _this10.pickImageFromGallery(_this10.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Select Video',
                        handler: function handler() {
                          if (_this10.isVideoSelected == false) {
                            _this10.pickVideoFromGallery(_this10.camera.PictureSourceType.PHOTOLIBRARY);
                          } else {
                            _this10.commonService.presentToast('only one video can be selected');
                          }
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context8.sent;
                    _context8.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "pickImageFromGallery",
        value: function pickImageFromGallery(sourceType) {
          var _this11 = this;

          var options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this11.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
          }, function (err) {
            alert(err);
          });
        }
      }, {
        key: "pickVideoFromGallery",
        value: function pickVideoFromGallery(sourceType) {
          var _this12 = this;

          var options = {
            quality: 60,
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY // sourceType: sourceType,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // mediaType: this.camera.MediaType.VIDEO,
            // correctOrientation: true

          };
          this.camera.getPicture(options).then(function (videoUrl) {
            var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
            var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1); // var durc = this.getvideoinfo(dirpath);
            // console.log(durc + 'ddddddddddddddd');

            var dur = _this12.media.create(dirpath);

            var duration = dur.getDuration();
            console.log(dur);
            console.log(JSON.stringify(dur));
            console.log(duration + 'duration');
            console.log(JSON.stringify(duration) + 'ation');
            dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;

            _this12.selectedVideoFile(dirpath, filename); // this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

          }, function (err) {
            alert(err);
          });
        }
      }, {
        key: "selectedVideoFile",
        value: function selectedVideoFile(dirpath, filename) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this13 = this;

            var dirUrl, retrievedFile;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return this.file.resolveDirectoryUrl(dirpath);

                  case 3:
                    dirUrl = _context9.sent;
                    _context9.next = 6;
                    return this.file.getFile(dirUrl, filename, {});

                  case 6:
                    retrievedFile = _context9.sent;
                    _context9.next = 14;
                    break;

                  case 9:
                    _context9.prev = 9;
                    _context9.t0 = _context9["catch"](0);
                    console.log('vidoe error');
                    this.dismissLoader();
                    this.commonService.presentAlert("Error", "Something went wrong.", ['Ok'], '');

                  case 14:
                    retrievedFile.file(function (data) {
                      _this13.selectedVideo = '';
                      console.log(data);
                      console.log(data.size);

                      _this13.dismissLoader(); // if (data.size > 500){ return this.commonService.presentAlert("Error", "You cannot upload more than 100 mb.",['Ok'],'');}
                      // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
                      // if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}


                      _this13.selectedVideo = retrievedFile.nativeURL;

                      var filename = _this13.selectedVideo.substr(_this13.selectedVideo.lastIndexOf('/') + 1);

                      localStorage.setItem('selectedVideo', JSON.stringify(_this13.selectedVideo));
                      console.log(filename + 'filename');
                      _this13.programForm.value.file = filename;
                      _this13.isVideoSelected = true;
                      _this13.videoFileSelected = !_this13.videoFileSelected; // this.videoFileSelected = https://www.dropbox.com/s/df2d2gf1dvnr5uj/Sample_1280x720_mp4.mp4';
                    });

                  case 15:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[0, 9]]);
          }));
        }
      }, {
        key: "takeSnap",
        value: function takeSnap() {
          console.log('sad');
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          this.commonService.dismissLoader();
        }
      }, {
        key: "pickImage",
        value: function pickImage(sourceType) {
          var _this14 = this;

          var options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this14.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

            console.log('viraj', imageData);
          }, function (err) {
            // Handle error
            alert(err);
          });
        }
      }, {
        key: "pickFromGallery",
        value: function pickFromGallery(sourceType) {
          var _this15 = this;

          var options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this15.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

            console.log('viraj', imageData);
          }, function (err) {
            // Handle error
            alert(err);
          });
        }
      }, {
        key: "fsubmit",
        value: function fsubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    console.log(this.programDetail);

                    if (!(!this.musicId || !this.programDetail.id)) {
                      _context10.next = 4;
                      break;
                    }

                    this.commonService.presentToast('Select music. Or something really went wrong.');
                    return _context10.abrupt("return");

                  case 4:
                    console.log(this.programDetail);
                    this.commonService.presentLoader();
                    this.programService.updateProgramMusic({
                      "musicId": this.musicId,
                      "programId": this.programDetail.id
                    }).subscribe(function (data) {
                      console.log(_this16.programDetail.id);

                      _this16.commonService.dismissLoader(); //  this.navCtrl.navigateForward('/add-program/program-details/' ,this.programDetail.id)


                      _this16.router.navigate(["/add-program/program-details/", _this16.programDetail.id]);
                    });

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(musicname) {
          var _this17 = this;

          var searchTerm = musicname.srcElement.value;

          if (searchTerm == '') {
            this.musicService.getGenres().subscribe(function (data) {
              _this17.genres = data.genres;
              _this17.allMusic = data.genres[0].musics;
            });
          } else {
            this.programService.searchMusic({
              "searchQuery": searchTerm
            }).subscribe(function (search) {
              _this17.allMusic = search.musicList;
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.programForm.controls;
        }
      }, {
        key: "filepreview",
        value: function filepreview() {
          console.log(this.selectedVideo);
          this.previewAnyFile.preview(this.selectedVideo).then(function (res) {
            return console.log(res);
          })["catch"](function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "preFilepreview",
        value: function preFilepreview() {
          console.log(this.selectedVideo);
          this.previewAnyFile.preview(this.vidUrl + this.preGallaryVidPath).then(function (res) {
            return console.log(res);
          })["catch"](function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "removefilepreview",
        value: function removefilepreview() {
          this.visibility = false;
          this.selectedVideo = null;
          this.videoFileSelected = false;
          this.isVideoSelected = false;
          this.commonService.presentToast('Selected video remove');
          console.log('Selected video remove');
        }
      }, {
        key: "nextStep",
        value: function nextStep(event) {
          console.log(this.f);
          console.log(this.programList);
          var formControl = this.programForm.controls;
          this.submitted = true;

          if (event == 2) {
            if (this.programForm.invalid) {
              console.log(this.programForm);
              return false;
            } // if (formControl.participantsType.value == 1 && !formControl.userList.value) {
            //   this.commonService.presentToast('Selected exclusive but no user selected');
            //   return false;
            // }


            var nutriId = [];
            var equipId = [];
            var video_id = [];
            var nutri_desc = '';

            if (this.programList.nutrition_id != null) {
              nutriId = this.programList.nutrition_id.split(',');
            } else {
              nutriId = null;
            }

            if (this.programList.equipments != null) {
              equipId = this.programList.equipments.split(',');
            } else {
              equipId = null;
            }

            if (this.programList.video_id != null) {
              video_id = this.programList.video_id.split(',');
            } else {
              video_id = null;
            }

            if (this.nextStepClick == false) {
              this.repetatedDateCopy.push({
                'date': this.programList.program_date,
                'equipments': equipId,
                'nutrition_id': nutriId,
                'video': video_id,
                'description': this.programList.nutri_desc
              });
            }

            this.nextStepClick = true;
            console.log(this.repetatedDateCopy); // new Date(data.programData.program_date + 'Z');  
            // this.repetatedDateCopy[i].equipments;

            this.showProgram = 2;
          }
        }
      }, {
        key: "musicSelect",
        value: function musicSelect(ev) {
          console.log(ev);
          this.musicId = ev[0];
          this.selectedAudioFile = ev[1] + '.mp3'; // audio file 

          this.audioFilename = ev[2]; // audio Name

          this.audioFileDuration = ev[3]; // audio duration  

          this.prepareAudioFile();
        }
      }, {
        key: "prepareAudioFile",
        value: function prepareAudioFile() {
          var _this18 = this;

          this.platform.ready().then(function () {
            _this18.musicChanged = 1;
            _this18.audioFile = _this18.baseUrl + "public/audio/" + _this18.selectedAudioFile;
            console.log("MySelectedAudioFile: " + _this18.audioFile);
          });
        }
      }, {
        key: "toMusic",
        value: function toMusic() {
          if (this.programDetail) {
            this.showProgram = 3;
          }
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.programForm.reset();
          this.showProgram = 1;
          this.programDetail = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.programForm.reset();
        }
      }, {
        key: "sponsar_prog",
        value: function sponsar_prog() {
          this.approval_btn = true;
        }
      }, {
        key: "unsponsar_prog",
        value: function unsponsar_prog() {
          this.approval_btn = false;
        }
      }, {
        key: "verifyUserInfoModal",
        value: function verifyUserInfoModal() {
          if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_18__["VerifyUserInfoComponent"], 'fullpage', '');
          } else {}
        }
      }, {
        key: "detailsUpdate",
        value: function detailsUpdate($event, i) {
          // $event.detail.programId = i; 
          console.log($event.detail);
          console.log(i);
          this.repetatedDateCopy[i].description = $event.detail;
        }
      }, {
        key: "applyAdvertise",
        value: function applyAdvertise() {
          var _this19 = this;

          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          var title = "Advertise Rule";
          var msg = "<p>1. Your Video will send for verification.</p>" + "<p class='mb-0'>2. Once approved Video Program will be locked</p>";
          var btn = [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: function handler(blah) {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: function handler() {
              console.log('Confirm Okay');

              _this19.sendrequest();
            }
          }];

          if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_18__["VerifyUserInfoComponent"], 'fullpage', '');
          } else {
            this.commonService.presentAlert(title, msg, btn, 'custom-alert advertiseAlert');
          }
        }
      }, {
        key: "sendrequest",
        value: function sendrequest() {
          var _this20 = this;

          this.commonService.presentLoader();

          if (this.programDetail.type_id == 'video') {
            // console.log('programId:'+this.programDetail.id);
            this.programService.advertiseRequest({
              'programId': this.programDetail.id
            }).subscribe(function (data) {
              _this20.adData = data.status;
              _this20.request_approve_btn = true;

              _this20.commonService.dismissLoader();
            });
          } else {
            this.commonService.dismissLoader();
            this.commonService.presentToast('Only Video Program are eligible');
          }
        }
      }, {
        key: "selectVolume",
        value: function selectVolume() {
          var _this21 = this;

          console.log(this.repetatedDateCopy[0]);
          console.log(this.repetatedDateCopy); // this.finalForm.value.file = this.gallaryImgPath;

          this.programForm.value.file = this.gallaryImgPath;
          var fees = this.finalForm.value;
          var progData = this.programForm.value;
          this.programList.program_fee = fees.programFees;
          this.programList.file = this.gallaryImgPath;
          this.programList.value = this.programForm.value;
          this.programList.description = progData.programDescription;
          this.programList.title = progData.programTitle;
          this.programList.videoPath = this.preGallaryVidPath;
          this.programList.equipments = this.repetatedDateCopy[0].equipments.toString();
          this.programList.nutrition_id = this.repetatedDateCopy[0].nutrition_id.toString();
          this.programList.video_id = this.repetatedDateCopy[0].video.toString();
          this.programList.nutri_desc = this.repetatedDateCopy[0].description; // var images = this.preGallaryImgPath.toString();
          // var image = images.split(',');
          //   var ImgPath = [];
          //   image.forEach(function (value,key) {
          //     ImgPath.push(value.replace('https://ionicinto.wdipl.com/',''));
          //   });
          // this.preGallaryImgPath = ImgPath;

          this.programList.image_path = this.preGallaryImgPath.toString(); // console.log(this.preGallaryImgPath);

          this.commonService.presentLoader();
          console.log(this.programList.id + 'iddddd');

          if (this.isVideoSelected == true) {
            var url = baseUrl + "api/auth/uploadVideoForProgram";
            var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
            var options = {
              fileName: filename,
              fileKey: "video",
              mimeType: "video/mp4",
              httpMethod: "POST",
              chunkedMode: false,
              headers: {
                "Authorization": "Bearer " + localStorage.getItem('userToken')
              },
              params: {
                'prog_id': this.programList.id
              }
            }; // const fileTransfer: FileTransferObject = this.transfer.create();

            this.videoFileUpload = this.transfer.create();
            this.videoFileUpload.upload(this.selectedVideo, url, options).then(function (data) {
              console.log('gg');
              console.log(data.response);
              _this21.programList.videoPath = data.response;

              _this21.programService.editProgram(_this21.programList).subscribe(function (data) {
                _this21.commonService.dismissLoader();

                _this21.router.navigate(["tabs/program"]);
              });
            }).then(function (data) {});
          } else {
            console.log(this.programList);
            this.programService.editProgram(this.programList).subscribe(function (data) {
              _this21.commonService.dismissLoader();

              _this21.router.navigate(["tabs/program"]);
            });
          }
        }
      }]);

      return EditProgramPage;
    }();

    EditProgramPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"]
      }, {
        type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_14__["ProgramService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _services_music_service__WEBPACK_IMPORTED_MODULE_16__["MusicService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]
      }, {
        type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__["FileTransfer"]
      }, {
        type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__["PreviewAnyFile"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlides"])], EditProgramPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], {
      read: 'any',
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"])], EditProgramPage.prototype, "myCal", void 0);
    EditProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-program.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-program/edit-program.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-program.page.scss */
      "./src/app/edit-program/edit-program.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"], _services_program_service__WEBPACK_IMPORTED_MODULE_14__["ProgramService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _services_music_service__WEBPACK_IMPORTED_MODULE_16__["MusicService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__["FileTransfer"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__["PreviewAnyFile"]])], EditProgramPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-program-edit-program-module-es5.js.map