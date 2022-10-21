(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-program-edit-program-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  calendar works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-program/edit-program.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-program/edit-program.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Edit Program</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"nextStep(2)\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gallaryImgPath?.length>0 || preGallaryImgPath?.length>0 || videoFileSelected || preGallaryVidPath != null\" >\r\n        <!-- <ion-button (click)=\"slidePrev(mySlider)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button> -->\r\n        \r\n        <ion-slides pager=\"true\"  [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let preImgpath of preGallaryImgPath; let i=index;\">\r\n            <img src=\"{{url}}{{preImgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemoveImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide  *ngIf=\"preGallaryVidPath != null\">\r\n            <!-- <img  class=\"mb-10\" height=\"250px\" (click)=\"preFilepreview()\" src=\"../../assets/images/demo3.jpg\"/> -->\r\n            <img  class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\"/>\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemovevideo()\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide *ngIf=\"isVideoSelected\">\r\n            <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n            <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <!-- <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-col>\r\n      <ion-item-sliding *ngFor=\"let f of files\">\r\n        <ion-item (click)=\"openFile(f)\">\r\n          <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\r\n          <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\r\n          <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\r\n\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ f.name }}\r\n            <p>{{ f.fullPath }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n      <!-- \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\">\r\n            <img src=\"../../assets/images/demo1.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo2.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo3.jpg\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"programForm\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-input placeholder=\"Title\" class=\"form-control\" formControlName=\"programTitle\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.programTitle.errors }\"></ion-input>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.programTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || programForm.get('programTitle').touched) && programForm.get('programTitle').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-textarea placeholder=\"Description\" class=\"form-control\" formControlName=\"programDescription\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <ion-list-header class=\"grey-header\">\r\n                    <ion-label>Program Type</ion-label>\r\n                  </ion-list-header>\r\n                  <h6 class=\"programHeading\">{{programList?.type_id}}</h6>\r\n                  <ion-text>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                    ut labore et dolore magna aliqua.\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Praticipants Type</ion-label>\r\n                </ion-list-header>\r\n                <ion-item lines=\"none\" class=\"grey-header\" *ngIf = \"programList?.is_requested == '0'\">\r\n                  <ion-label >Exclusive</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"grey-header mb-10\" *ngIf = \"programList?.is_requested == '1'\">\r\n                  <ion-label>open </ion-label>\r\n                </ion-item>\r\n            </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\" *ngIf=\"modalData\">\r\n              <ion-list lines=\"none\" class=\"users-list\">\r\n                <ion-item *ngFor=\"let user of modalData\" >\r\n\r\n                  <img *ngIf=\"user?.bios?.profile_pic\" src=\"{{profileUrl}}{{user?.bios?.profile_pic}}\"  (click)=\"userList()\"/>\r\n                  <img *ngIf=\"!user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\"  (click)=\"userList()\"/>\r\n                  <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Create Chat room for program</ion-label>\r\n              <ion-toggle [disabled]='false' formControlName=\"chatStatus\"  [(ngModel)]=\"toggleValue\"  slot=\"end\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-list>\r\n         \r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==2\">\r\n  <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=1\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Preview</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"selectVolume()\" class=\"text-green\">Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\"> \r\n        <div *ngIf=\"repetatedDateCopy.length>0\">\r\n          <!-- <div class=\"ion-padding-horizontal\">\r\n          <ion-list>            \r\n              <ion-item class=\"ion-no-padding ion-margin-vertical\">\r\n                <ion-label>Add Bonus Video, Nutrition</ion-label>\r\n                <ion-datetime value=\"\" display-timezone=\"utc\"  (ionChange)=\"addExtraDay($event)\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-list> \r\n          </div> -->\r\n          <ion-list *ngFor=\"let date of repetatedDateCopy let i = index\">\r\n            <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n              {{date.date | date :'medium'}}\r\n              <div>\r\n                <ion-icon ios=\"ios-construct\" md=\"md-construct\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n                <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n                </ion-icon>\r\n                <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon>\r\n                <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n              </div>\r\n            </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Equipments :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date?.equipments != '';else no_equipment\">\r\n                <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of date?.equipments\" />\r\n              </div>\r\n              <ng-template #no_equipment>No Equipment Selected</ng-template>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Nutritions :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date.nutrition_id != '';else no_nutrition\">\r\n                <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.nutrition_id\" />\r\n              </div>\r\n              <ng-template #no_nutrition>No Nutrition Selected</ng-template>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Videos :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date?.video;else no_videos\">\r\n              \r\n                <img src=\"../../assets/images/demo2.jpg\" />\r\n              </div>\r\n              <ng-template #no_videos>No videos Selected</ng-template>\r\n            </ion-item>      \r\n            <ion-item class=\"descriptionItem\">\r\n              <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,i)\"\r\n                  value=\"{{programList?.nutri_desc}}\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-list>    \r\n        </div>\r\n      </ion-col>\r\n    </ion-row> \r\n  </ion-grid> \r\n  <!-- <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==3\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=2\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" (click)=\"selectVolume()\">\r\n          <ion-label class=\"text-green\" >Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <div class=\"main_content ion-padding programPreview\">\r\n      <form [formGroup]=\"finalForm\" (ngSubmit)=\"saveProg()\">\r\n        <h6 style=\"margin: 0 0 15px 0\">Program Name: {{ programList.title }} </h6>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"display: contents;\">How much would you like to charge:</ion-label>\r\n          <ion-label style=\"    margin-left: 40px;\">$</ion-label>\r\n          <ion-input class=\"form-control\" type=\"number\" formControlName=\"programFees\" value=\"{{programList.program_fee}}\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"programList.type_id == 'video' \">\r\n        <ion-label style=\"display: block;margin-top: 15px;\">Would you like to request Sponsors:</ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-radio-group value=\"sponsors_group\" class=\"radio-group radioPreview\">\r\n          <ion-item>\r\n            <ion-label>Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"1\" (click)=\"sponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"2\" (click)=\"unsponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>      \r\n      </ion-item>\r\n      </div>\r\n      <ion-item lines=\"none\" (click)=\"verifyUserInfoModal()\" *ngIf=\"loginUserData.trilloMatch != '1' && programList.type_id != 'video' \">\r\n        <ion-button class=\"green\">Earn with Intoative</ion-button>\r\n      </ion-item>\r\n    </form>\r\n      <ion-footer class=\"sticky-footer\" *ngIf=\"approval_btn && !request_approve_btn \">\r\n        <ion-button (click)=\"applyAdvertise()\" class=\"green\">Request Approval</ion-button> \r\n      </ion-footer>\r\n      <ion-footer class=\"sticky-footer\" *ngIf=\"request_approve_btn\">\r\n        <ion-button class=\"green\">Request Sent</ion-button> \r\n      </ion-footer>\r\n    </div>\r\n  </ion-grid> -->\r\n</ion-content>\r\n\r\n<!-- <ion-footer class=\"sticky-footer musiclist green\" *ngIf=\"showProgram==3\">  \r\n  <app-audio-player [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n  </app-audio-player>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalendarComponent = class CalendarComponent {
    constructor() { }
    slideNext() {
        throw new Error('Method not implemented.');
    }
    slidePrev() {
        throw new Error('Method not implemented.');
    }
    loadEvents() {
        throw new Error("Method not implemented.");
    }
    ngOnInit() { }
};
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.component.scss */ "./src/app/calendar/calendar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CalendarComponent);



/***/ }),

/***/ "./src/app/edit-program/edit-program-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit-program/edit-program-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditProgramPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProgramPageRoutingModule", function() { return EditProgramPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-program.page */ "./src/app/edit-program/edit-program.page.ts");




const routes = [
    {
        path: '',
        component: _edit_program_page__WEBPACK_IMPORTED_MODULE_3__["EditProgramPage"]
    }
];
let EditProgramPageRoutingModule = class EditProgramPageRoutingModule {
};
EditProgramPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProgramPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-program/edit-program.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-program/edit-program.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProgramPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProgramPageModule", function() { return EditProgramPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_program_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-program-routing.module */ "./src/app/edit-program/edit-program-routing.module.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var _edit_program_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-program.page */ "./src/app/edit-program/edit-program.page.ts");
/* harmony import */ var _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile/components.modules */ "./src/app/profile/components.modules.ts");









let EditProgramPageModule = class EditProgramPageModule {
};
EditProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _edit_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProgramPageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["NgCalendarModule"],
            _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"]
        ],
        declarations: [_edit_program_page__WEBPACK_IMPORTED_MODULE_7__["EditProgramPage"]]
    })
], EditProgramPageModule);



/***/ }),

/***/ "./src/app/edit-program/edit-program.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-program/edit-program.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".note {\n  color: #000;\n}\n\n.users-list {\n  display: flex;\n  width: 100%;\n}\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: auto;\n}\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list ion-item img:first-child {\n  margin-left: 0;\n}\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px;\n}\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n}\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list img:first-child {\n  margin-left: 0;\n}\n\n.users-list ion-label {\n  width: 100px;\n}\n\n.view-all {\n  width: 36px;\n  height: 36px;\n  max-width: 36px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px;\n}\n\n.nutriimages-list ion-label {\n  font-size: 0.75rem;\n  margin: 3px 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: block;\n  color: #444;\n}\n\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.calendar-header ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.calendar-header ion-item:nth-child(2) {\n  display: contents;\n}\n\n.table > tbody > tr > td.calendar-hour-column {\n  width: 55px;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.ios.main_content {\n  padding-top: 0;\n}\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px;\n}\n\nion-segment-button {\n  position: relative;\n}\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%;\n}\n\n.video-skeleton {\n  height: 200px;\n}\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px;\n}\n\n.swiper-slide {\n  background: #fbfbfb;\n}\n\nion-slides {\n  height: 190px;\n}\n\n.top-header {\n  position: fixed;\n}\n\n.slides-container {\n  height: 78% !important;\n}\n\n.programHeading {\n  font-size: 14px;\n  text-transform: capitalize;\n  margin-bottom: 5px;\n}\n\n.nutrition-form ion-item ion-textarea {\n  padding-bottom: 10px;\n  --padding-bottom: 15px;\n}\n\n.radioPreview {\n  display: flex;\n}\n\n.radioPreview ion-item {\n  --background: transparent;\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  font-size: 0.9rem;\n  margin-right: 30px;\n}\n\n.radioPreview ion-item ion-radio {\n  margin-right: 10px;\n}\n\n.thumb-list ion-item ion-label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  background: rgba(38, 166, 154, 0.5);\n  width: 100%;\n  color: #FFF;\n  padding: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9ncmFtL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxlZGl0LXByb2dyYW1cXGVkaXQtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXQtcHJvZ3JhbS9lZGl0LXByb2dyYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sV0FBQTtBQ0VOOztBRERBO0VBQVksYUFBQTtFQUFjLFdBQUE7QUNNMUI7O0FETEE7RUFBcUIsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLFdBQUE7QUNXdEQ7O0FEVkE7RUFBeUIsV0FBQTtFQUFZLFlBQUE7RUFBYSxvQkFBQTtLQUFBLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLGtCQUFBO0FDa0J2Rjs7QURqQkE7RUFBcUMsY0FBQTtBQ3FCckM7O0FEcEJBO0VBQVUsV0FBQTtFQUFXLFlBQUE7RUFBWSxlQUFBO0VBQWdCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLGFBQUE7RUFBYSx1QkFBQTtFQUF1QixtQkFBQTtFQUFtQixTQUFBO0VBQVUsa0JBQUE7QUNrQ3pLOztBRGhDQTtFQUFZLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxtQkFBQTtFQUFvQixhQUFBO0FDdUNqRTs7QUR0Q0E7RUFBZ0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxvQkFBQTtLQUFBLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLGtCQUFBO0FDOEM5RTs7QUQ3Q0E7RUFBNEIsY0FBQTtBQ2lENUI7O0FEaERBO0VBQXNCLFlBQUE7QUNvRHRCOztBRG5EQTtFQUFVLFdBQUE7RUFBVyxZQUFBO0VBQVksZUFBQTtFQUFnQixrQkFBQTtFQUFrQixtQkFBQTtFQUFtQixrQkFBQTtFQUFrQixhQUFBO0VBQWEsdUJBQUE7RUFBdUIsbUJBQUE7RUFBbUIsU0FBQTtFQUFVLGtCQUFBO0FDaUV6Szs7QURoRUE7RUFBNEIsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLDBCQUFBO0VBQTJCLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLGNBQUE7RUFBZSxXQUFBO0FDMEUxSTs7QUR4RUE7RUFBaUIsYUFBQTtFQUFjLDhCQUFBO0VBQStCLG1CQUFBO0FDOEU5RDs7QUQ3RUE7RUFBMEIsa0JBQUE7RUFBbUIsc0JBQUE7QUNrRjdDOztBRGpGQTtFQUF1QyxpQkFBQTtBQ3FGdkM7O0FEcEZBO0VBQThDLFdBQUE7QUN3RjlDOztBRHRGQTtFQUFVLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxVQUFBO0VBQVcsV0FBQTtBQzZGcEQ7O0FENUZBO0VBQVksMEJBQUE7QUNnR1o7O0FEL0ZBO0VBQXFCLHlCQUFBO0VBQTBCLHNCQUFBO0VBQXVCLHNCQUFBO0FDcUd0RTs7QURwR0E7RUFBK0IsU0FBQTtFQUFVLGtCQUFBO0VBQW1CLGlCQUFBO0FDMEc1RDs7QUR6R0E7RUFBb0MsV0FBQTtFQUFZLFlBQUE7RUFBYSx3Q0FBQTtFQUF5QyxrQkFBQTtBQ2dIdEc7O0FEL0dBO0VBQTZDLFdBQUE7QUNtSDdDOztBRGhIQTtFQUFrQixjQUFBO0FDb0hsQjs7QURqSEE7RUFBc0MsWUFBQTtBQ3FIdEM7O0FEcEhBO0VBQW1CLGtCQUFBO0FDd0huQjs7QUR2SEE7RUFBcUMsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFNBQUE7RUFBVSxVQUFBO0FDOEgvRTs7QUQ3SEE7RUFBZ0IsYUFBQTtBQ2lJaEI7O0FEaElBO0VBQTRELFNBQUE7RUFBVSxZQUFBO0FDcUl0RTs7QURwSUE7RUFBYyxtQkFBQTtBQ3dJZDs7QUR2SUE7RUFBVyxhQUFBO0FDMklYOztBRDFJQTtFQUFZLGVBQUE7QUM4SVo7O0FEN0lBO0VBQ0ksc0JBQUE7QUNnSko7O0FEN0lBO0VBQWdCLGVBQUE7RUFBZ0IsMEJBQUE7RUFBMkIsa0JBQUE7QUNtSjNEOztBRGhKUTtFQUFhLG9CQUFBO0VBQXFCLHNCQUFBO0FDcUoxQzs7QURsSkE7RUFBYyxhQUFBO0FDc0pkOztBRHJKSTtFQUFTLHlCQUFBO0VBQ0wsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQXVCLGlCQUFBO0VBQW1CLGtCQUFBO0FDMEpsRDs7QUR6SlE7RUFBVSxrQkFBQTtBQzRKbEI7O0FEdkpRO0VBQ0osa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUMwSkoiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2dyYW0vZWRpdC1wcm9ncmFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rle2NvbG9yOiAjMDAwO31cclxuLnVzZXJzLWxpc3R7ZGlzcGxheTogZmxleDt3aWR0aDogMTAwJTt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogYXV0bztkaXNwbGF5OiBmbGV4O3dpZHRoOiBhdXRvO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1ne3dpZHRoOiA0MnB4O2hlaWdodDogNDJweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1nOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnZpZXctYWxse3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWF4LXdpZHRoOiA0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2YxZjBmMDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcblxyXG4udXNlcnMtbGlzdHstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbjogNnB4IDA7fVxyXG4udXNlcnMtbGlzdCBpbWd7d2lkdGg6IDM2cHg7aGVpZ2h0OiAzNnB4O29iamVjdC1maXQ6IGNvdmVyO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4udXNlcnMtbGlzdCBpbWc6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udXNlcnMtbGlzdCBpb24tbGFiZWx7d2lkdGg6IDEwMHB4O31cclxuLnZpZXctYWxse3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWF4LXdpZHRoOiAzNnB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2YxZjBmMDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1sYWJlbHtmb250LXNpemU6IDAuNzVyZW07bWFyZ2luOiAzcHggMDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtsZXR0ZXItc3BhY2luZzogMDtmb250LXdlaWdodDogNDAwO2Rpc3BsYXk6IGJsb2NrO2NvbG9yOiAjNDQ0O31cclxuXHJcbi5jYWxlbmRhci1oZWFkZXJ7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW17LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7fVxyXG4uY2FsZW5kYXItaGVhZGVyIGlvbi1pdGVtOm50aC1jaGlsZCgyKXtkaXNwbGF5OiBjb250ZW50czt9XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5jYWxlbmRhci1ob3VyLWNvbHVtbnt3aWR0aDogNTVweDt9XHJcblxyXG5pb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO3RvcDogLTMwcHg7ei1pbmRleDogOTk7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNGRkYgIWltcG9ydGFudDt3aWR0aDogYXV0byAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbjogMDttYXJnaW4tcmlnaHQ6IDIwcHg7b3ZlcmZsb3c6IGluaGVyaXQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbnt3aWR0aDogMjVweDtoZWlnaHQ6IDI1cHg7LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDstLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbntjb2xvcjogI0ZGRjt9XHJcblxyXG4vLyBpb3MgY3NzXHJcbi5pb3MubWFpbl9jb250ZW50e3BhZGRpbmctdG9wOiAwO31cclxuXHJcbi8vIGlvbi1za2VsZXRvbi10ZXh0IGNzc1xyXG4ubXVzaWNsaXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e2hlaWdodDogMzBweDt9XHJcbmlvbi1zZWdtZW50LWJ1dHRvbntwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG5pb24tc2VnbWVudC1idXR0b24gaW9uLXNrZWxldG9uLXRleHR7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogMTAwJTttYXJnaW46IDA7d2lkdGg6IDk1JTt9XHJcbi52aWRlby1za2VsZXRvbntoZWlnaHQ6IDIwMHB4O31cclxucCBpb24tc2tlbGV0b24tdGV4dCwgLnJhZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7bWFyZ2luOiAwO2hlaWdodDogMjBweDt9XHJcbi5zd2lwZXItc2xpZGV7YmFja2dyb3VuZDogI2ZiZmJmYjt9XHJcbmlvbi1zbGlkZXN7aGVpZ2h0OiAxOTBweDt9XHJcbi50b3AtaGVhZGVye3Bvc2l0aW9uOiBmaXhlZDt9XHJcbi5zbGlkZXMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzglICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9ncmFtSGVhZGluZ3tmb250LXNpemU6IDE0cHg7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuLm51dHJpdGlvbi1mb3Jte1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgaW9uLXRleHRhcmVhe3BhZGRpbmctYm90dG9tOiAxMHB4Oy0tcGFkZGluZy1ib3R0b206IDE1cHg7fVxyXG4gICAgfVxyXG59XHJcbi5yYWRpb1ByZXZpZXd7ZGlzcGxheTogZmxleDtcclxuICAgIGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7Zm9udC1zaXplOiAwLjkwcmVtO21hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICBpb24tcmFkaW97bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuICAgIH1cclxufVxyXG4udGh1bWItbGlzdCB7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCAxNjYsIDE1NCwgMC41MCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbn1cclxufSIsIi5ub3RlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi51c2Vycy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2Vycy1saXN0IGlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWc6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnZpZXctYWxsIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWF4LXdpZHRoOiA0MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4udXNlcnMtbGlzdCB7XG4gIC0tbWluLWhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA2cHggMDtcbn1cblxuLnVzZXJzLWxpc3QgaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4udXNlcnMtbGlzdCBpbWc6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4udmlldy1hbGwge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXgtd2lkdGg6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5udXRyaWltYWdlcy1saXN0IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luOiAzcHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5jYWxlbmRhci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XG4gIHdpZHRoOiA1NXB4O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IC0zMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmF1ZGlvLWxpc3Qge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaW9zLm1haW5fY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubXVzaWNsaXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi52aWRlby1za2VsZXRvbiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbnAgaW9uLXNrZWxldG9uLXRleHQsIC5yYWRpby1saXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cblxuLnRvcC1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5zbGlkZXMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3OCUgIWltcG9ydGFudDtcbn1cblxuLnByb2dyYW1IZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubnV0cml0aW9uLWZvcm0gaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5yYWRpb1ByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJhZGlvUHJldmlldyBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4ucmFkaW9QcmV2aWV3IGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRodW1iLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTY2LCAxNTQsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/edit-program/edit-program.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-program/edit-program.page.ts ***!
  \***************************************************/
/*! exports provided: EditProgramPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProgramPage", function() { return EditProgramPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-program/user-modal/user-modal.component */ "./src/app/add-program/user-modal/user-modal.component.ts");
/* harmony import */ var _add_program_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-program/user-list/user-list.component */ "./src/app/add-program/user-list/user-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _add_program_date_time_modal_date_time_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-program/date-time-modal/date-time-modal.component */ "./src/app/add-program/date-time-modal/date-time-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../modalContent/verify-user-info/verify-user-info.component */ "./src/app/modalContent/verify-user-info/verify-user-info.component.ts");
/* harmony import */ var _add_program_add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../add-program/add-equipments/add-equipments.component */ "./src/app/add-program/add-equipments/add-equipments.component.ts");
/* harmony import */ var _add_program_videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../add-program/videos-thumb-list/videos-thumb-list.component */ "./src/app/add-program/videos-thumb-list/videos-thumb-list.component.ts");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");



















// import { AddEquipmentsComponent } from './../add-equipments/add-equipments.component';





const baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].ApiUrl;
let EditProgramPage = class EditProgramPage {
    constructor(commonService, alertCtrl, locale, modalCtrl, datePipe, navCtrl, fb, actionSheetController, mediaCapture, programService, router, platform, camera, musicService, actRoute, media, file, transfer, previewAnyFile) {
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
            spaceBetween: 5,
        };
        this.showProgram = 1;
        this.event = {
            startTime: '',
            endTime: '',
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'day',
            currentDate: new Date(),
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
            programTitle: [
                { type: 'required', message: 'title is required.' },
                { type: 'maxlength', message: '150 chars allowed' }
            ],
            // programType: [
            //   { type: 'required', message: 'Program Type is required' },
            // ],programType
            paymentType: [
                { type: 'required', message: 'payment typee is required.' },
            ],
        };
        this.musicTypes = 'music';
        this.selectMusicList = 'hiphop';
        this.submitted = false;
        this.audioFile = 'into_20180418_173147_audio.mp3';
        this.baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_13__["Config"].ApiUrl;
        this.musicChanged = 0;
        let d = new Date();
        this.currentHrs = d.getHours();
        this.musicService.getGenres().subscribe((data) => {
            this.genres = data.genres;
            this.allMusic = data.genres[0].musics;
        });
        this.finalForm = this.fb.group({
            programFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    ionViewWillEnter() {
        this.programService.getProgramById({ 'programId': this.programId }).subscribe((data) => {
            this.programList = data.programData;
            console.log(this.programList);
            // console.log(this.programList.image_path);
            var arr = this.programList.image_path;
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
            this.preGallaryImgPath = ImgPath;
            this.preGallaryVidPath = this.programList.video_path;
            console.log(this.preGallaryImgPath);
            console.log(this.gallaryImgPath);
            let startTime = new Date(data.programData.program_date + 'Z');
            let endTime = new Date(data.programData.program_end_time + 'Z');
            let events = [];
            events.push({
                title: data.programData.title,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
            this.eventSource = events;
            this.commonService.getUsersById({ "userId": this.programList.request_sent }).subscribe(users => {
                this.modalData = users.userList;
                console.log(this.modalData);
                let uList;
                users.userList.forEach(el => {
                    if (el.id) {
                        uList += el.id + ',';
                    }
                    console.log(el.id);
                });
                this.programForm.controls['userList'].setValue(uList);
            });
            this.programForm.patchValue({
                programTitle: this.programList.title,
                programDescription: this.programList.description,
            });
        });
    }
    ngOnInit() {
        // console.log(this.programDetail);
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        this.createForm();
        this.actRoute.paramMap.subscribe((params) => {
            this.programId = params.get('programId');
        });
    }
    /**
     * function to create add program form with validation.
     */
    createForm() {
        this.programForm = this.fb.group({
            programTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                //UsernameValidator.validUsername,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(150),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            programDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            // programType: new FormControl('', Validators.compose([
            //   Validators.required
            // ])),
            // participantsType: new FormControl('', Validators.compose([
            //   Validators.required,
            // ])),
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            chatStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    musicList(ev) {
        this.musicTypes = ev.detail.value;
    }
    selectMusic(ev) {
        this.selectMusicList = ev.detail.value;
    }
    fmtMSS(s) {
        return this.datePipe.transform(s * 1000, 'mm:ss');
    }
    slidePrev(slides) {
        this.slides.slidePrev();
    }
    slideNext(slides) {
        this.slides.slideNext();
    }
    removeImg(index) {
        this.gallaryImgPath.splice(index, 1);
    }
    preRemoveImg(index) {
        this.preGallaryImgPath.splice(index, 1);
    }
    preRemovevideo(index) {
        this.preGallaryVidPath = null;
    }
    userModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.modalData);
            console.log(this.programForm.value);
            // this.commonService.presentModal(UserModalComponent, 'fullModal', {formData:this.programForm.value , source:'1'});
            const modal = yield this.modalCtrl.create({
                component: _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"],
                cssClass: 'fullModal',
                componentProps: { formData: this.programForm.value, source: '1' }
            });
            modal.onDidDismiss().then((d) => {
                console.log(d);
                this.modalData = (d.data);
                let ulist = '';
                console.log(d.data);
                d.data.forEach(el => {
                    if (el.id) {
                        ulist += el.id + ',';
                    }
                    console.log(el.id);
                });
                console.log(ulist);
                this.programForm.controls['userList'].setValue(ulist);
            });
            return yield modal.present();
        });
    }
    userList() {
        this.commonService.presentModal(_add_program_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], 'fullModal', { "userList": this.modalData });
    }
    // selectVolume() {
    //   if (!this.musicId) {
    //     this.commonService.presentToast('Select Music ');
    //     return false;
    //   }
    //   this.commonService.presentModal(MusicVolComponent, 'bottomModal', { "musicId": this.musicId, "programId": this.programDetail.id });
    // }
    resetEvent() {
        this.event = {
            //title: '',
            //desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
        };
    }
    selectMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What would you like to add?',
                buttons: [
                    {
                        text: 'Capture Image',
                        handler: () => {
                            this.takeSnap();
                        }
                    },
                    {
                        text: 'Record Video',
                        handler: () => {
                            this.recordVideo();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    // recordVideo() {
    //   this.mediaCapture.captureVideo().then(
    //     (data: MediaFile[]) => {
    //       if (data.length > 0) {
    //         this.copyFileToLocalDir(data[0].fullPath);
    //       }
    //     },
    //     (err: CaptureError) => console.error(err)
    //   );
    // }
    recordVideo() {
        let options = {
            limit: 1,
            duration: 30,
            quality: 0
        };
        this.mediaCapture.captureVideo(options).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data.length > 0) {
                // this.copyFileToLocalDir(data[0].fullPath);
                // this.showLoader();
                this.uploadedVideo = null;
                var filename = data[0].name;
                var dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
                var dur = this.media.create(dirpath);
                let duration = dur.getDuration();
                console.log(dur + 'dur');
                console.log(duration + 'duration');
                dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                //   var durc = this.getvideoinfo(dirpath);
                // console.log(durc + 'ddddddddddddddd');
                this.selectedVideoFile(dirpath, filename);
                this.visibility = true;
            }
        }), (err) => console.error(err + 'yyyyerror'));
    }
    copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        // Make sure we copy from the right location
        if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
        }
    }
    // Change current month/week/day
    next() {
        let swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    }
    back() {
        let swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    }
    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Use Angular date pipe for conversion
            console.log(event);
            let start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.startTime, 'medium', this.locale);
            let end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.endTime, 'medium', this.locale);
            const alert = yield this.alertCtrl.create({
                header: event.title,
                subHeader: event.desc,
                message: 'From: ' + start + '<br><br>To: ' + end,
                buttons: ['OK']
            });
            this.commonService.dismissModal();
            alert.present();
        });
    }
    // Time slot was clicked
    onTimeSelected(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.programDetail) {
                this.commonService.presentToast('only one program can create at a time');
                return true;
            }
            this.selected = new Date(ev.selectedTime);
            this.event.startTime = this.selected.toISOString();
            this.selected.setHours(this.selected.getHours());
            // if (ev.events.length > 0) {
            //   console.log('sad');
            // } else {
            console.log(this.selected.getTime());
            console.log(new Date().getTime());
            if (this.selected.getTime() > (new Date().getTime())) {
                const modal = yield this.modalCtrl.create({
                    component: _add_program_date_time_modal_date_time_modal_component__WEBPACK_IMPORTED_MODULE_9__["DateTimeModalComponent"],
                    cssClass: 'fullModal',
                    componentProps: { "calendarData": this.selected, "programData": this.programForm.value, 'programList': this.eventSource }
                });
                modal.onDidDismiss().then((d) => {
                    console.log(d);
                    if (d.data.program_date) {
                        let startTime;
                        let endTime;
                        startTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime.setMinutes(endTime.getMinutes() + parseInt(d.data.program_duration));
                        this.eventSource.push({
                            title: d.data.title,
                            startTime: startTime,
                            endTime: endTime,
                            allDay: false
                        });
                        this.programDetail = d.data;
                        this.ionViewWillEnter();
                    }
                });
                return yield modal.present();
            }
            else {
                this.commonService.presentToast('Sorry, this is past time');
            }
            // }    
        });
    }
    addVideo(event, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_program_videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_20__["VideosThumbListComponent"],
                cssClass: 'fullModal',
                componentProps: { 'programDetail': event }
            });
            modal.onDidDismiss().then((d) => {
                if (d.data) {
                    this.repetatedDateCopy[i].video = d.data;
                    // this.repetatedDate[i].video=d.data;
                }
            });
            return yield modal.present();
        });
    }
    addEquipments2(event, item, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_program_add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_19__["AddEquipmentsComponent"],
                cssClass: 'fullModal',
                componentProps: { "programData": item, "modelOpen": event }
            });
            modal.onDidDismiss().then((d) => {
                if (event == 1) {
                    this.repetatedDateCopy[i].equipments = d.data.filter(Boolean);
                    // this.repetatedDate[i].equipments = d.data.filter(Boolean) ;
                }
                else {
                    this.repetatedDateCopy[i].nutrition_id = d.data.filter(Boolean);
                    // this.repetatedDate[i].nutrition_id = d.data.filter(Boolean) ;
                }
                console.log(this.repetatedDateCopy);
                // console.log(this.repetatedDate);
            });
            return yield modal.present();
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    // ----------------------------- Open gallery  with multiple --------------//
    openGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What would you like to add?',
                buttons: [
                    {
                        text: 'Select Image',
                        handler: () => {
                            this.pickImageFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Select Video',
                        handler: () => {
                            if (this.isVideoSelected == false) {
                                this.pickVideoFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                            else {
                                this.commonService.presentToast('only one video can be selected');
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImageFromGallery(sourceType) {
        const options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        }, (err) => {
            alert(err);
        });
    }
    pickVideoFromGallery(sourceType) {
        const options = {
            quality: 60,
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            // sourceType: sourceType,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // mediaType: this.camera.MediaType.VIDEO,
            // correctOrientation: true
        };
        this.camera.getPicture(options).then((videoUrl) => {
            var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
            var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
            // var durc = this.getvideoinfo(dirpath);
            // console.log(durc + 'ddddddddddddddd');
            var dur = this.media.create(dirpath);
            let duration = dur.getDuration();
            console.log(dur);
            console.log(JSON.stringify(dur));
            console.log(duration + 'duration');
            console.log(JSON.stringify(duration) + 'ation');
            dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
            this.selectedVideoFile(dirpath, filename);
            // this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        }, (err) => {
            alert(err);
        });
    }
    selectedVideoFile(dirpath, filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                var dirUrl = yield this.file.resolveDirectoryUrl(dirpath);
                var retrievedFile = yield this.file.getFile(dirUrl, filename, {});
            }
            catch (err) {
                console.log('vidoe error');
                this.dismissLoader();
                this.commonService.presentAlert("Error", "Something went wrong.", ['Ok'], '');
            }
            retrievedFile.file(data => {
                this.selectedVideo = '';
                console.log(data);
                console.log(data.size);
                this.dismissLoader();
                // if (data.size > 500){ return this.commonService.presentAlert("Error", "You cannot upload more than 100 mb.",['Ok'],'');}
                // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
                // if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}
                this.selectedVideo = retrievedFile.nativeURL;
                var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
                localStorage.setItem('selectedVideo', JSON.stringify(this.selectedVideo));
                console.log(filename + 'filename');
                this.programForm.value.file = filename;
                this.isVideoSelected = true;
                this.videoFileSelected = !this.videoFileSelected;
                // this.videoFileSelected = https://www.dropbox.com/s/df2d2gf1dvnr5uj/Sample_1280x720_mp4.mp4';
            });
        });
    }
    takeSnap() {
        console.log('sad');
        this.pickImage(this.camera.PictureSourceType.CAMERA);
    }
    dismissLoader() {
        this.commonService.dismissLoader();
    }
    pickImage(sourceType) {
        const options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
            console.log('viraj', imageData);
        }, (err) => {
            // Handle error
            alert(err);
        });
    }
    pickFromGallery(sourceType) {
        const options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
            console.log('viraj', imageData);
        }, (err) => {
            // Handle error
            alert(err);
        });
    }
    fsubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.programDetail);
            if (!this.musicId || !this.programDetail.id) {
                this.commonService.presentToast('Select music. Or something really went wrong.');
                return;
            }
            console.log(this.programDetail);
            this.commonService.presentLoader();
            this.programService.updateProgramMusic({ "musicId": this.musicId, "programId": this.programDetail.id }).subscribe((data) => {
                console.log(this.programDetail.id);
                this.commonService.dismissLoader();
                //  this.navCtrl.navigateForward('/add-program/program-details/' ,this.programDetail.id)
                this.router.navigate(["/add-program/program-details/", this.programDetail.id]);
            });
        });
    }
    searchChanged(musicname) {
        const searchTerm = musicname.srcElement.value;
        if (searchTerm == '') {
            this.musicService.getGenres().subscribe((data) => {
                this.genres = data.genres;
                this.allMusic = data.genres[0].musics;
            });
        }
        else {
            this.programService.searchMusic({ "searchQuery": searchTerm }).subscribe((search) => {
                this.allMusic = (search.musicList);
            });
        }
    }
    get f() { return this.programForm.controls; }
    filepreview() {
        console.log(this.selectedVideo);
        this.previewAnyFile.preview(this.selectedVideo)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    preFilepreview() {
        console.log(this.selectedVideo);
        this.previewAnyFile.preview(this.vidUrl + this.preGallaryVidPath)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    removefilepreview() {
        this.visibility = false;
        this.selectedVideo = null;
        this.videoFileSelected = false;
        this.isVideoSelected = false;
        this.commonService.presentToast('Selected video remove');
        console.log('Selected video remove');
    }
    nextStep(event) {
        console.log(this.f);
        console.log(this.programList);
        let formControl = this.programForm.controls;
        this.submitted = true;
        if (event == 2) {
            if (this.programForm.invalid) {
                console.log(this.programForm);
                return false;
            }
            // if (formControl.participantsType.value == 1 && !formControl.userList.value) {
            //   this.commonService.presentToast('Selected exclusive but no user selected');
            //   return false;
            // }
            var nutriId = [];
            var equipId = [];
            var video_id = [];
            var nutri_desc = '';
            if (this.programList.nutrition_id != null) {
                nutriId = this.programList.nutrition_id.split(',');
            }
            else {
                nutriId = null;
            }
            if (this.programList.equipments != null) {
                equipId = this.programList.equipments.split(',');
            }
            else {
                equipId = null;
            }
            if (this.programList.video_id != null) {
                video_id = this.programList.video_id.split(',');
            }
            else {
                video_id = null;
            }
            if (this.nextStepClick == false) {
                this.repetatedDateCopy.push({ 'date': this.programList.program_date, 'equipments': equipId, 'nutrition_id': nutriId, 'video': video_id, 'description': this.programList.nutri_desc });
            }
            this.nextStepClick = true;
            console.log(this.repetatedDateCopy);
            // new Date(data.programData.program_date + 'Z');  
            // this.repetatedDateCopy[i].equipments;
            this.showProgram = 2;
        }
    }
    musicSelect(ev) {
        console.log(ev);
        this.musicId = ev[0];
        this.selectedAudioFile = ev[1] + '.mp3'; // audio file 
        this.audioFilename = ev[2]; // audio Name
        this.audioFileDuration = ev[3]; // audio duration  
        this.prepareAudioFile();
    }
    prepareAudioFile() {
        this.platform.ready().then(() => {
            this.musicChanged = 1;
            this.audioFile = this.baseUrl + "public/audio/" + this.selectedAudioFile;
            console.log("MySelectedAudioFile: " + this.audioFile);
        });
    }
    toMusic() {
        if (this.programDetail) {
            this.showProgram = 3;
        }
    }
    ionViewDidLeave() {
        this.programForm.reset();
        this.showProgram = 1;
        this.programDetail = null;
    }
    ngOnDestroy() {
        this.programForm.reset();
    }
    sponsar_prog() {
        this.approval_btn = true;
    }
    unsponsar_prog() {
        this.approval_btn = false;
    }
    verifyUserInfoModal() {
        if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_18__["VerifyUserInfoComponent"], 'fullpage', '');
        }
        else {
        }
    }
    detailsUpdate($event, i) {
        // $event.detail.programId = i; 
        console.log($event.detail);
        console.log(i);
        this.repetatedDateCopy[i].description = $event.detail;
    }
    applyAdvertise() {
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        let title = "Advertise Rule";
        let msg = "<p>1. Your Video will send for verification.</p>"
            + "<p class='mb-0'>2. Once approved Video Program will be locked</p>";
        let btn = [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                }
            }, {
                text: 'Okay',
                handler: () => {
                    console.log('Confirm Okay');
                    this.sendrequest();
                }
            }
        ];
        if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_18__["VerifyUserInfoComponent"], 'fullpage', '');
        }
        else {
            this.commonService.presentAlert(title, msg, btn, 'custom-alert advertiseAlert');
        }
    }
    sendrequest() {
        this.commonService.presentLoader();
        if (this.programDetail.type_id == 'video') {
            // console.log('programId:'+this.programDetail.id);
            this.programService.advertiseRequest({ 'programId': this.programDetail.id }).subscribe(data => {
                this.adData = data.status;
                this.request_approve_btn = true;
                this.commonService.dismissLoader();
            });
        }
        else {
            this.commonService.dismissLoader();
            this.commonService.presentToast('Only Video Program are eligible');
        }
    }
    selectVolume() {
        console.log(this.repetatedDateCopy[0]);
        console.log(this.repetatedDateCopy);
        // this.finalForm.value.file = this.gallaryImgPath;
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
        this.programList.nutri_desc = this.repetatedDateCopy[0].description;
        // var images = this.preGallaryImgPath.toString();
        // var image = images.split(',');
        //   var ImgPath = [];
        //   image.forEach(function (value,key) {
        //     ImgPath.push(value.replace('https://ionicinto.wdipl.com/',''));
        //   });
        // this.preGallaryImgPath = ImgPath;
        this.programList.image_path = this.preGallaryImgPath.toString();
        // console.log(this.preGallaryImgPath);
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
                headers: { "Authorization": "Bearer " + localStorage.getItem('userToken') },
                params: {
                    'prog_id': this.programList.id
                }
            };
            // const fileTransfer: FileTransferObject = this.transfer.create();
            this.videoFileUpload = this.transfer.create();
            this.videoFileUpload.upload(this.selectedVideo, url, options)
                .then((data) => {
                console.log('gg');
                console.log(data.response);
                this.programList.videoPath = data.response;
                this.programService.editProgram(this.programList).subscribe((data) => {
                    this.commonService.dismissLoader();
                    this.router.navigate(["tabs/program"]);
                });
            }).then((data) => {
            });
        }
        else {
            console.log(this.programList);
            this.programService.editProgram(this.programList).subscribe((data) => {
                this.commonService.dismissLoader();
                this.router.navigate(["tabs/program"]);
            });
        }
    }
};
EditProgramPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_14__["ProgramService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_16__["MusicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__["FileTransfer"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__["PreviewAnyFile"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlides"])
], EditProgramPage.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], { read: 'any', static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"])
], EditProgramPage.prototype, "myCal", void 0);
EditProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-program.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-program/edit-program.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-program.page.scss */ "./src/app/edit-program/edit-program.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
        _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_14__["ProgramService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _services_music_service__WEBPACK_IMPORTED_MODULE_16__["MusicService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__["FileTransfer"],
        _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_21__["PreviewAnyFile"]])
], EditProgramPage);



/***/ })

}]);
//# sourceMappingURL=edit-program-edit-program-module-es2015.js.map