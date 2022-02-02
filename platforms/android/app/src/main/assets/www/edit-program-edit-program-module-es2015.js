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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Edit Program</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"nextStep(2)\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gallaryImgPath?.length>0 || preGallaryImgPath?.length>0 || videoFileSelected || preGallaryVidPath != null\" >\r\n        <!-- <ion-button (click)=\"slidePrev(mySlider)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button> -->\r\n        \r\n        <ion-slides pager=\"true\"  [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let preImgpath of preGallaryImgPath; let i=index;\">\r\n            <img src=\"{{url}}{{preImgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemoveImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide  *ngIf=\"preGallaryVidPath != null\">\r\n            <!-- <img  class=\"mb-10\" height=\"250px\" (click)=\"preFilepreview()\" src=\"../../assets/images/demo3.jpg\"/> -->\r\n            <img  class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\"/>\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemovevideo()\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide *ngIf=\"isVideoSelected\">\r\n            <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n            <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <!-- <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-col>\r\n      <ion-item-sliding *ngFor=\"let f of files\">\r\n        <ion-item (click)=\"openFile(f)\">\r\n          <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\r\n          <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\r\n          <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\r\n\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ f.name }}\r\n            <p>{{ f.fullPath }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n      <!-- \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\">\r\n            <img src=\"../../assets/images/demo1.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo2.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo3.jpg\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"programForm\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-input placeholder=\"Title\" class=\"form-control\" formControlName=\"programTitle\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.programTitle.errors }\"></ion-input>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.programTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || programForm.get('programTitle').touched) && programForm.get('programTitle').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-textarea placeholder=\"Description\" class=\"form-control\" formControlName=\"programDescription\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <ion-list-header class=\"grey-header\">\r\n                    <ion-label>Program Type</ion-label>\r\n                  </ion-list-header>\r\n                  <h6 class=\"programHeading\">{{programList?.type_id}}</h6>\r\n                  <ion-text>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                    ut labore et dolore magna aliqua.\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Praticipants Type</ion-label>\r\n                </ion-list-header>\r\n                <ion-item lines=\"none\" class=\"grey-header\" *ngIf = \"programList?.is_requested == '0'\">\r\n                  <ion-label >Exclusive</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"grey-header mb-10\" *ngIf = \"programList?.is_requested == '1'\">\r\n                  <ion-label>open </ion-label>\r\n                </ion-item>\r\n            </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\" *ngIf=\"modalData\">\r\n              <ion-list lines=\"none\" class=\"users-list\">\r\n                <ion-item *ngFor=\"let user of modalData\" >\r\n\r\n                  <img *ngIf=\"user?.bios?.profile_pic\" src=\"{{profileUrl}}{{user?.bios?.profile_pic}}\"  (click)=\"userList()\"/>\r\n                  <img *ngIf=\"!user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\"  (click)=\"userList()\"/>\r\n                  <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Create Chat room for program</ion-label>\r\n              <ion-toggle [disabled]='false' formControlName=\"chatStatus\"  [(ngModel)]=\"toggleValue\"  slot=\"end\"></ion-toggle>\r\n            </ion-item>\r\n          </ion-list>\r\n         \r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==2\">\r\n  <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=1\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Preview</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"selectVolume()\" class=\"text-green\">Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\"> -->\r\n        <div *ngIf=\"repetatedDateCopy.length>0\">\r\n          <!-- <div class=\"ion-padding-horizontal\">\r\n          <ion-list>            \r\n              <ion-item class=\"ion-no-padding ion-margin-vertical\">\r\n                <ion-label>Add Bonus Video, Nutrition</ion-label>\r\n                <ion-datetime value=\"\" display-timezone=\"utc\"  (ionChange)=\"addExtraDay($event)\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-list> \r\n          </div> -->\r\n          <ion-list *ngFor=\"let date of repetatedDateCopy let i = index\">\r\n            <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n              {{date.date | date :'medium'}}\r\n              <div>\r\n                <ion-icon ios=\"ios-construct\" md=\"md-construct\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n                <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n                </ion-icon>\r\n                <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon>\r\n                <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n              </div>\r\n            </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Equipments :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date?.equipments != '';else no_equipment\">\r\n                <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of date?.equipments\" />\r\n              </div>\r\n              <ng-template #no_equipment>No Equipment Selected</ng-template>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Nutritions :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date.nutrition_id != '';else no_nutrition\">\r\n                <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.nutrition_id\" />\r\n              </div>\r\n              <ng-template #no_nutrition>No Nutrition Selected</ng-template>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Videos :</ion-label>\r\n              <div class=\"users-list\" *ngIf=\"date?.video;else no_videos\">\r\n              \r\n                <img src=\"../../assets/images/demo2.jpg\" />\r\n              </div>\r\n              <ng-template #no_videos>No videos Selected</ng-template>\r\n            </ion-item>      \r\n            <ion-item class=\"descriptionItem\">\r\n              <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,i)\"\r\n                  value=\"{{programList?.nutri_desc}}\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-list>    \r\n        </div>\r\n      </ion-col>\r\n    </ion-row> \r\n  </ion-grid> \r\n  <!-- <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==3\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=2\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" (click)=\"selectVolume()\">\r\n          <ion-label class=\"text-green\" >Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <div class=\"main_content ion-padding programPreview\">\r\n      <form [formGroup]=\"finalForm\" (ngSubmit)=\"saveProg()\">\r\n        <h6 style=\"margin: 0 0 15px 0\">Program Name: {{ programList.title }} </h6>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"display: contents;\">How much would you like to charge:</ion-label>\r\n          <ion-label style=\"    margin-left: 40px;\">$</ion-label>\r\n          <ion-input class=\"form-control\" type=\"number\" formControlName=\"programFees\" value=\"{{programList.program_fee}}\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"programList.type_id == 'video' \">\r\n        <ion-label style=\"display: block;margin-top: 15px;\">Would you like to request Sponsors:</ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-radio-group value=\"sponsors_group\" class=\"radio-group radioPreview\">\r\n          <ion-item>\r\n            <ion-label>Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"1\" (click)=\"sponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"2\" (click)=\"unsponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>      \r\n      </ion-item>\r\n      </div>\r\n      <ion-item lines=\"none\" (click)=\"verifyUserInfoModal()\" *ngIf=\"loginUserData.trilloMatch != '1' && programList.type_id != 'video' \">\r\n        <ion-button class=\"green\">Earn with Intoative</ion-button>\r\n      </ion-item>\r\n    </form>\r\n      <ion-footer class=\"sticky-footer\" *ngIf=\"approval_btn && !request_approve_btn \">\r\n        <ion-button (click)=\"applyAdvertise()\" class=\"green\">Request Approval</ion-button> \r\n      </ion-footer>\r\n      <ion-footer class=\"sticky-footer\" *ngIf=\"request_approve_btn\">\r\n        <ion-button class=\"green\">Request Sent</ion-button> \r\n      </ion-footer>\r\n    </div>\r\n  </ion-grid> -->\r\n</ion-content>\r\n\r\n<!-- <ion-footer class=\"sticky-footer musiclist green\" *ngIf=\"showProgram==3\">  \r\n  <app-audio-player [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n  </app-audio-player>\r\n</ion-footer> -->");

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
/* harmony default export */ __webpack_exports__["default"] = (".note {\n  color: #000; }\n\n.users-list {\n  display: flex;\n  width: 100%; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: auto; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list ion-item img:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px; }\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0; }\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list img:first-child {\n  margin-left: 0; }\n\n.users-list ion-label {\n  width: 100px; }\n\n.view-all {\n  width: 36px;\n  height: 36px;\n  max-width: 36px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px; }\n\n.nutriimages-list ion-label {\n  font-size: 0.75rem;\n  margin: 3px 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: block;\n  color: #444; }\n\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.calendar-header ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\n.calendar-header ion-item:nth-child(2) {\n  display: contents; }\n\n.table > tbody > tr > td.calendar-hour-column {\n  width: 55px; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.ios.main_content {\n  padding-top: 0; }\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px; }\n\nion-segment-button {\n  position: relative; }\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%; }\n\n.video-skeleton {\n  height: 200px; }\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px; }\n\n.swiper-slide {\n  background: #fbfbfb; }\n\nion-slides {\n  height: 190px; }\n\n.top-header {\n  position: fixed; }\n\n.slides-container {\n  height: 78% !important; }\n\n.programHeading {\n  font-size: 14px;\n  text-transform: capitalize;\n  margin-bottom: 5px; }\n\n.nutrition-form ion-item ion-textarea {\n  padding-bottom: 10px;\n  --padding-bottom: 15px; }\n\n.radioPreview {\n  display: flex; }\n\n.radioPreview ion-item {\n    --background: transparent;\n    --inner-border-width: 0 0 0 0;\n    --padding-start: 0;\n    --inner-padding-end: 0;\n    font-size: 0.90rem;\n    margin-right: 30px; }\n\n.radioPreview ion-item ion-radio {\n      margin-right: 10px; }\n\n.thumb-list ion-item ion-label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  background: rgba(38, 166, 154, 0.5);\n  width: 100%;\n  color: #FFF;\n  padding: 5px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9ncmFtL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxlZGl0LXByb2dyYW1cXGVkaXQtcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxXQUFXLEVBQUE7O0FBQ2pCO0VBQVksYUFBYTtFQUFDLFdBQVcsRUFBQTs7QUFDckM7RUFBcUIsa0JBQWE7RUFBTSxhQUFhO0VBQUMsV0FBVyxFQUFBOztBQUNqRTtFQUF5QixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDekc7RUFBcUMsY0FBYyxFQUFBOztBQUNuRDtFQUFVLFdBQVU7RUFBQyxZQUFXO0VBQUMsZUFBZTtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQjtFQUFDLGtCQUFpQjtFQUFDLGFBQVk7RUFBQyx1QkFBc0I7RUFBQyxtQkFBa0I7RUFBQyxTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNMO0VBQVksa0JBQWE7RUFBTSxhQUFhO0VBQUMsbUJBQW1CO0VBQUMsYUFBYSxFQUFBOztBQUM5RTtFQUFnQixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDaEc7RUFBNEIsY0FBYyxFQUFBOztBQUMxQztFQUFzQixZQUFZLEVBQUE7O0FBQ2xDO0VBQVUsV0FBVTtFQUFDLFlBQVc7RUFBQyxlQUFlO0VBQUMsa0JBQWlCO0VBQUMsbUJBQWtCO0VBQUMsa0JBQWlCO0VBQUMsYUFBWTtFQUFDLHVCQUFzQjtFQUFDLG1CQUFrQjtFQUFDLFNBQVM7RUFBQyxrQkFBa0IsRUFBQTs7QUFDM0w7RUFBNEIsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLDBCQUEwQjtFQUFDLGlCQUFpQjtFQUFDLGdCQUFnQjtFQUFDLGNBQWM7RUFBQyxXQUFXLEVBQUE7O0FBRXJKO0VBQWlCLGFBQWE7RUFBQyw4QkFBOEI7RUFBQyxtQkFBbUIsRUFBQTs7QUFDakY7RUFBMEIsa0JBQWdCO0VBQUcsc0JBQW9CLEVBQUE7O0FBQ2pFO0VBQXVDLGlCQUFpQixFQUFBOztBQUN4RDtFQUE4QyxXQUFXLEVBQUE7O0FBRXpEO0VBQVUsa0JBQWtCO0VBQUMsV0FBVztFQUFDLFVBQVU7RUFBQyxXQUFXLEVBQUE7O0FBQy9EO0VBQVksMEJBQTBCLEVBQUE7O0FBQ3RDO0VBQXFCLHlCQUFhO0VBQWEsc0JBQXNCO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzVGO0VBQStCLFNBQVM7RUFBQyxrQkFBa0I7RUFBQyxpQkFBaUIsRUFBQTs7QUFDN0U7RUFBb0MsV0FBVztFQUFDLFlBQVk7RUFBQyx3Q0FBaUI7RUFBd0Isa0JBQWEsRUFBQTs7QUFDbkg7RUFBNkMsV0FBVyxFQUFBOztBQUd4RDtFQUFrQixjQUFjLEVBQUE7O0FBR2hDO0VBQXNDLFlBQVksRUFBQTs7QUFDbEQ7RUFBbUIsa0JBQWtCLEVBQUE7O0FBQ3JDO0VBQXFDLGtCQUFrQjtFQUFDLFlBQVk7RUFBQyxTQUFTO0VBQUMsVUFBVSxFQUFBOztBQUN6RjtFQUFnQixhQUFhLEVBQUE7O0FBQzdCO0VBQTRELFNBQVM7RUFBQyxZQUFZLEVBQUE7O0FBQ2xGO0VBQWMsbUJBQW1CLEVBQUE7O0FBQ2pDO0VBQVcsYUFBYSxFQUFBOztBQUN4QjtFQUFZLGVBQWUsRUFBQTs7QUFDM0I7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFBZ0IsZUFBZTtFQUFDLDBCQUEwQjtFQUFDLGtCQUFrQixFQUFBOztBQUM3RTtFQUVxQixvQkFBb0I7RUFBQyxzQkFBaUIsRUFBQTs7QUFHM0Q7RUFBYyxhQUFhLEVBQUE7O0FBQTNCO0lBQ2EseUJBQWE7SUFDbEIsNkJBQXFCO0lBQ3JCLGtCQUFnQjtJQUNoQixzQkFBb0I7SUFBRyxrQkFBa0I7SUFBQyxrQkFBa0IsRUFBQTs7QUFKcEU7TUFLa0Isa0JBQWtCLEVBQUE7O0FBR3BDO0VBR0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsbUNBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9ncmFtL2VkaXQtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZXtjb2xvcjogIzAwMDt9XHJcbi51c2Vycy1saXN0e2Rpc3BsYXk6IGZsZXg7d2lkdGg6IDEwMCU7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDt3aWR0aDogYXV0bzt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZ3t3aWR0aDogNDJweDtoZWlnaHQ6IDQycHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZzpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi52aWV3LWFsbHt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O21heC13aWR0aDogNDJweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmMWYwZjA7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjogMDttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG5cclxuLnVzZXJzLWxpc3R7LS1taW4taGVpZ2h0OiBhdXRvO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW46IDZweCAwO31cclxuLnVzZXJzLWxpc3QgaW1ne3dpZHRoOiAzNnB4O2hlaWdodDogMzZweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLnVzZXJzLWxpc3QgaW1nOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnVzZXJzLWxpc3QgaW9uLWxhYmVse3dpZHRoOiAxMDBweDt9XHJcbi52aWV3LWFsbHt3aWR0aDozNnB4O2hlaWdodDozNnB4O21heC13aWR0aDogMzZweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmMWYwZjA7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjogMDttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO21hcmdpbjogM3B4IDA7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7bGV0dGVyLXNwYWNpbmc6IDA7Zm9udC13ZWlnaHQ6IDQwMDtkaXNwbGF5OiBibG9jaztjb2xvcjogIzQ0NDt9XHJcblxyXG4uY2FsZW5kYXItaGVhZGVye2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4uY2FsZW5kYXItaGVhZGVyIGlvbi1pdGVtey0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwO31cclxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbTpudGgtY2hpbGQoMil7ZGlzcGxheTogY29udGVudHM7fVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQuY2FsZW5kYXItaG91ci1jb2x1bW57d2lkdGg6IDU1cHg7fVxyXG5cclxuaW9uLXJhbmdle3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTt0b3A6IC0zMHB4O3otaW5kZXg6IDk5O31cclxuLmF1ZGlvLWxpc3R7cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbXstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2NvbG9yOiAjRkZGICFpbXBvcnRhbnQ7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHttYXJnaW46IDA7bWFyZ2luLXJpZ2h0OiAyMHB4O292ZXJmbG93OiBpbmhlcml0O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b257d2lkdGg6IDI1cHg7aGVpZ2h0OiAyNXB4Oy0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3gtc2hhZG93OiBub25lO31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24gaW9uLWljb257Y29sb3I6ICNGRkY7fVxyXG5cclxuLy8gaW9zIGNzc1xyXG4uaW9zLm1haW5fY29udGVudHtwYWRkaW5nLXRvcDogMDt9XHJcblxyXG4vLyBpb24tc2tlbGV0b24tdGV4dCBjc3NcclxuLm11c2ljbGlzdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dHtoZWlnaHQ6IDMwcHg7fVxyXG5pb24tc2VnbWVudC1idXR0b257cG9zaXRpb246IHJlbGF0aXZlO31cclxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1za2VsZXRvbi10ZXh0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDEwMCU7bWFyZ2luOiAwO3dpZHRoOiA5NSU7fVxyXG4udmlkZW8tc2tlbGV0b257aGVpZ2h0OiAyMDBweDt9XHJcbnAgaW9uLXNrZWxldG9uLXRleHQsIC5yYWRpby1saXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e21hcmdpbjogMDtoZWlnaHQ6IDIwcHg7fVxyXG4uc3dpcGVyLXNsaWRle2JhY2tncm91bmQ6ICNmYmZiZmI7fVxyXG5pb24tc2xpZGVze2hlaWdodDogMTkwcHg7fVxyXG4udG9wLWhlYWRlcntwb3NpdGlvbjogZml4ZWQ7fVxyXG4uc2xpZGVzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDc4JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZ3JhbUhlYWRpbmd7Zm9udC1zaXplOiAxNHB4O3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO21hcmdpbi1ib3R0b206IDVweDt9XHJcbi5udXRyaXRpb24tZm9ybXtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGlvbi10ZXh0YXJlYXtwYWRkaW5nLWJvdHRvbTogMTBweDstLXBhZGRpbmctYm90dG9tOiAxNXB4O31cclxuICAgIH1cclxufVxyXG4ucmFkaW9QcmV2aWV3e2Rpc3BsYXk6IGZsZXg7XHJcbiAgICBpb24taXRlbXstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO2ZvbnQtc2l6ZTogMC45MHJlbTttYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgaW9uLXJhZGlve21hcmdpbi1yaWdodDogMTBweDt9XHJcbiAgICB9XHJcbn1cclxuLnRodW1iLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOCwgMTY2LCAxNTQsIDAuNTApO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG59XHJcbn0iXX0= */");

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