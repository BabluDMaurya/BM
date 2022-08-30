(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-new-program-inner-new-program-inner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-inner/new-program-inner.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-inner/new-program-inner.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <!-- <ion-label>{{programDetail?.title}}</ion-label> -->\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <div class=\"right-div\">\r\n      <ion-item detail=\"false\" class=\"icon-right-side ion-text-end min-width-none \" slot=\"end\"\r\n        [routerLink]=\"['/edit-program',programId]\">\r\n        <ion-icon ios=\"ios-create\" md=\"md-create\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item detail=\"false\" class=\"icon-right-side ion-text-end min-width-none pl-8\" slot=\"end\"\r\n        (click)=\"shareItem()\">\r\n        <ion-icon ios=\"ios-share\" md=\"md-share\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\"\r\n          #mySlider>\r\n          <ion-slide *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\">\r\n            <div class=\"program-cover\">\r\n              <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" />\r\n            </div>\r\n          </ion-slide>\r\n          <ion-slide class=\"program-slides\">\r\n            <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"\r\n              webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n              <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n            </video>\r\n          </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\"\r\n          class=\"full-slider program-slide\" #mySlider>\r\n          <ion-slide *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\">\r\n            <div class=\"program-cover\">\r\n              <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" />\r\n            </div>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\"\r\n          class=\"full-slider program-slide\" #mySlider>\r\n          <ion-slide class=\"program-slides\">\r\n            <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"\r\n              webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n              <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n            </video>\r\n          </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img class=\"cover-img\" [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"url+programImage\">\r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list class=\"ion-no-padding\">\r\n        <ion-item-group>\r\n          <ion-item-divider class=\"ionic-divider\" lines=\"none\" sticky>\r\n            <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n              <ion-segment class=\"ion-no-padding\" [(ngModel)]=\"scheduleProgram\">\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"program\" checked>\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-clipboard\" md=\"md-clipboard\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"videos\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"chat\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"programtype\">\r\n                  <img class=\"ionic-img\" src=\"../../../assets/images/target.svg\" />\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n          </ion-item-divider>\r\n          <ion-item-sliding>\r\n            <div [ngSwitch]=\"scheduleProgram\">\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'program'\">\r\n                <ion-row class=\"ion-padding-vertical\">\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                    <div class=\"programDesc\">\r\n                      <!-- <p>{{programDetail?.description }} &nbsp;</p>         -->\r\n                      <p>{{programDetail?.description }}</p>\r\n                    </div>\r\n                    <!-- <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n                      <ion-item class=\"d-flex\">\r\n                          <span *ngFor=\"let user  of userList\">\r\n                            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n                            <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n                          </span>\r\n                          <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n                      </ion-item>\r\n                    </ion-list> -->\r\n                  </ion-col>\r\n                  <!-- <ion-col class=\"infoBox\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n                    <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request recived yet</h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to verify. </h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n                  </ion-col> -->\r\n                  <ion-col size=\"12\" style=\"position: static;\" class=\"ion-no-padding  green-text\">\r\n                    <!-- <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text> -->\r\n                    <ion-text>\r\n                      <p class=\"program-date\">{{programDateTime|date:'medium'}}</p>\r\n                    </ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 1\">\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended \">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{dd | async}}</p> Days\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{hh | async }} </p> Hours\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{mm| async}}</p> Minutes\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{ss | async}}</p> Seconds\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n                    <ion-text>This Program has been Ended </ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 0\">\r\n                  <ion-col size=\"6\" class=\"ion-padding timer-block\">\r\n                    <ion-text>Non-Live Program</ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n                  <ion-item class=\"d-flex\">\r\n                    <ion-avatar *ngFor=\"let user  of userList\">\r\n\r\n                      <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n                      <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n                    </ion-avatar>\r\n                    <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n                <ion-col class=\"infoBox\"\r\n                  *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n                  <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request\r\n                    recived yet</h6>\r\n                  <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to\r\n                    verify. </h6>\r\n                  <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n                </ion-col>\r\n\r\n                <div *ngIf=\"programDetail?.is_live_status == 1\" class=\"ion-text-center\">\r\n                  <ion-button class=\"btnVerify green\" *ngIf=\"programDetail?.live\" (click)=\"joinRoom()\">Go Live\r\n                  </ion-button>\r\n                </div>\r\n                <!-- <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 1\">\r\n                  <ion-button class=\"btnVerify\" (click)=\"verifyUser()\">Verify to Go Live</ion-button>\r\n                </div> -->\r\n                <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 0\">\r\n                  <ion-button class=\"btnVerify\">No live program available</ion-button>\r\n                </div>\r\n\r\n                <ion-item class=\"list-items\" lines=\"\">\r\n                  <div class=\"icon-text ion-margin-bottom\" style=\"width: 100%;\">\r\n                    <h5 class=\"\">Program</h5>\r\n                    <div class=\"flex-with-partition\">\r\n                      <p>{{programDetail?.video_id.split(\",\").length}} Videos </p>\r\n                      <p>{{programDetail?.nutrition_id.split(\",\").length}} Nutrition</p>\r\n                      <p *ngIf=\"programDetail?.payment_type == 'Paid' \">${{programFee}}</p>\r\n                      <p *ngIf=\"programDetail?.payment_type == 'Free' \">{{programFee}}</p>\r\n\r\n                    </div>\r\n                    <!-- <ion-chip>\r\n                    {{programDetail?.video_id.split(\",\").length}} Videos \r\n                  </ion-chip>\r\n                  <ion-chip>\r\n                    {{programFee}}\r\n                  </ion-chip> -->\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item class=\"ion-padding-top\" lines=\"\">\r\n                  <p class=\"ion-padding-bottom\" style=\"font-size: 16px;\">\r\n                    {{programDetail?.nutri_desc}}\r\n                  </p>\r\n                </ion-item>\r\n                <ion-button expand=\"full\" *ngIf=\" !adData && (hh | async)>23\" (click)=\"applyAdvertise()\"\r\n                  class=\"mb-56 btn-height green ion-text-uppercase ion-no-margin full-height\"> Apply For Advertise\r\n                  sponser</ion-button>\r\n\r\n                <ion-button expand=\"full\" *ngIf=\"adData?.id && adData?.video_approve_status== 1\"\r\n                  (click)=\"showSponsersList()\"\r\n                  class=\"mb-56 btn-height green ion-text-uppercase ion-no-margin full-height\">See Ad Sponser Options\r\n                </ion-button>\r\n                <h5 class=\"ion-padding-horizontal\">Equipments</h5>\r\n                <ion-item>\r\n                  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-vertical ion-margin-bottom\">\r\n                    <ion-slide class=\"program-slides\" *ngFor=\"let equp of equipmentsList; index as i\">\r\n                      <div class=\"container-flex\">\r\n                        <div class=\"img-cont\">\r\n                          <img src=\"{{equipmentPicPath}}{{equp.equipment_pic}}\" alt=\"\">\r\n                        </div>\r\n                        <span class=\"equipment-label\">{{equp.equipment_name}}</span>\r\n                      </div>\r\n                      <!-- <div class=\"container-flex\" #seeMore>\r\n                        See More\r\n                      </div> -->\r\n                    </ion-slide>\r\n                    <ion-slide class=\"program-slides\" *ngIf=\"equipmentsList?.length > 2\" (click)=\"equipments()\">\r\n                      <div class=\"container-flex\" style=\"height: 100%;\">\r\n                        <ion-label class=\"\">See more</ion-label>\r\n                      </div>\r\n                    </ion-slide>\r\n                  </ion-slides>\r\n\r\n\r\n                  <!-- <div class=\"container-flex\" style=\"height: 100%;\">\r\n                    <ion-label class=\"\">see more</ion-label>\r\n                  </div> -->\r\n                </ion-item>\r\n                <!-- <ion-slides [options]=\"slideOpts\" class=\"ion-padding-vertical ion-margin-bottom\">\r\n                  <ion-slide class=\"program-slides\">\r\n                    <div class=\"container-flex\">\r\n                      <div class=\"img-cont\">\r\n                        <img src=\"../../../assets/images/upwork.png\" alt=\"\">\r\n                      </div>\r\n                      <ion-label class=\"\">Upwork</ion-label>\r\n                    </div>\r\n                  </ion-slide>\r\n                  <ion-slide class=\"program-slides\">\r\n                    <div class=\"container-flex\">\r\n                      <div class=\"img-cont\">\r\n                        <img src=\"../../../assets/images/flex-ball.png\" alt=\"\">\r\n                      </div>\r\n                      <ion-label class=\"\">flex-ball</ion-label>\r\n                    </div>\r\n                  </ion-slide>\r\n                  <ion-slide class=\"program-slides\">\r\n                    <div class=\"container-flex\">\r\n                      <div class=\"img-cont\">\r\n                        <img src=\"../../../assets/images/calf-raise.png\" alt=\"\">\r\n                      </div>\r\n                      <ion-label class=\"\">calf-raise</ion-label>\r\n                    </div>\r\n                  </ion-slide>\r\n                </ion-slides> -->\r\n                <ion-item-divider></ion-item-divider>\r\n              </ion-list>\r\n\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'videos'\">\r\n                <div class=\"program-card\" *ngFor=\"let val of allProgramData; let i=index;\">\r\n                  <div class=\"programs-date\">\r\n                    <p class=\"fs-16 mb-10\">{{val.program_date |date:'medium'}}</p>\r\n                  </div>\r\n                  <div class=\"programs-flex\">\r\n                    <div class=\"program-session program-flex-child\" *ngIf=\"val.is_live_status == 1\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <div class=\"session-timer\">\r\n                        <p class=\"fs-14\">{{val.hh}}</p>\r\n                        <span>:</span>\r\n                        <p class=\"fs-14\">{{val.mm}}</p>\r\n                        <span>:</span>\r\n                        <p class=\"fs-14\">{{val.ss}}</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"program-video program-flex-child\" *ngIf=\"val.video_id != '' \"\r\n                      (click)=\"showVideoDetails(val.id,val.video_id)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Video</p>\r\n                    </div>\r\n                    <div class=\"program-nutrition program-flex-child\" *ngIf=\"val.nutrition_id != '' \"\r\n                      (click)=\"nutritionModal(val)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n                      <p class=\"fs-14\">Nutrition</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'chat'\">\r\n                <div class=\"program-chat\">\r\n                  <!-- <ion-avatar>\r\n                    <img src=\"../../assets/images/bgimage.png\" alt=\"\">\r\n                  </ion-avatar>\r\n                  <div class=\"program-chat-info\">\r\n                    <div class=\"chat-title\">\r\n                      <h6>Rock Sam</h6>\r\n                      <p>11:09 AM</p>\r\n                    </div>\r\n                    <div class=\"chat-info\">\r\n                      <span>Good morning rock</span>\r\n                    </div>\r\n                  </div> -->\r\n                  <p>No Chat available</p>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'programtype'\">\r\n                <div class=\"program-card\">\r\n                  <ion-slides [pager]=\"true\">\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide>\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide>\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n              </ion-list>\r\n            </div>\r\n          </ion-item-sliding>\r\n        </ion-item-group>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/program/new-program-inner/new-program-inner-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/program/new-program-inner/new-program-inner-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: NewProgramInnerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProgramInnerPageRoutingModule", function() { return NewProgramInnerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_program_inner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-program-inner.page */ "./src/app/program/new-program-inner/new-program-inner.page.ts");




const routes = [
    {
        path: '',
        component: _new_program_inner_page__WEBPACK_IMPORTED_MODULE_3__["NewProgramInnerPage"]
    }
];
let NewProgramInnerPageRoutingModule = class NewProgramInnerPageRoutingModule {
};
NewProgramInnerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewProgramInnerPageRoutingModule);



/***/ }),

/***/ "./src/app/program/new-program-inner/new-program-inner.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/program/new-program-inner/new-program-inner.module.ts ***!
  \***********************************************************************/
/*! exports provided: NewProgramInnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProgramInnerPageModule", function() { return NewProgramInnerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_program_inner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-program-inner-routing.module */ "./src/app/program/new-program-inner/new-program-inner-routing.module.ts");
/* harmony import */ var _new_program_inner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-program-inner.page */ "./src/app/program/new-program-inner/new-program-inner.page.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");








let NewProgramInnerPageModule = class NewProgramInnerPageModule {
};
NewProgramInnerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_program_inner_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewProgramInnerPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]
        ],
        declarations: [_new_program_inner_page__WEBPACK_IMPORTED_MODULE_6__["NewProgramInnerPage"]]
    })
], NewProgramInnerPageModule);



/***/ }),

/***/ "./src/app/program/new-program-inner/new-program-inner.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/program/new-program-inner/new-program-inner.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".right-div {\n  display: flex;\n  align-items: center; }\n  .right-div .min-width-none {\n    min-width: 0px !important; }\n  .right-div .pl-8 {\n    padding-left: 8px !important; }\n  .main_content ion-row ion-col .item-content ion-thumbnail .cover-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n  .ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n  .ionic-divider .three-tabs ion-segment ion-segment-button {\n    width: auto; }\n  .ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n  .ionic-divider .three-tabs ion-segment ion-segment-button {\n    width: auto; }\n  .ionic-divider ion-segment-button {\n    min-height: 38px;\n    color: #000;\n    text-transform: capitalize;\n    letter-spacing: 0; }\n  .ionic-divider ion-segment-button .ionic-icon {\n      font-size: 2rem !important; }\n  .ionic-divider ion-segment-button .ionic-img {\n      width: 2rem;\n      height: 2rem; }\n  .ionic-divider ion-segment-button .live-icon {\n      padding: 5px 10px;\n      background: #555;\n      color: #fff;\n      border-radius: 20px; }\n  .ionic-divider ion-segment-button .live-icon span {\n        font-size: 10px;\n        color: #fff; }\n  .programDesc p {\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px; }\n  .program-date {\n  color: #27a69a;\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px; }\n  .fs-16 {\n  font-size: 16px;\n  line-height: 1.5; }\n  .fs-14 {\n  font-size: 16px;\n  line-height: 1.5; }\n  .program-card {\n  padding: 10px 15px; }\n  .program-card ion-slides {\n    height: 200px; }\n  .program-card ion-slides ion-slide img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center;\n         object-position: center; }\n  .program-card .programs-flex {\n    display: flex; }\n  .program-card .programs-flex .program-flex-child {\n      width: 30%;\n      height: 100px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border-radius: 10px;\n      background: #27a69a;\n      color: #fff;\n      margin-left: 5%; }\n  .program-card .programs-flex .program-flex-child .ionic-icon {\n        font-size: 1.5rem !important; }\n  .program-card .programs-flex .program-flex-child:first-child {\n      margin-left: 0; }\n  .program-chat {\n  display: flex;\n  padding: 10px 15px;\n  align-items: center; }\n  .program-chat ion-avatar {\n    margin-right: 15px;\n    min-width: 50px;\n    min-height: 50px; }\n  .program-chat .program-chat-info {\n    flex: 1;\n    width: 80%; }\n  .program-chat .program-chat-info .chat-title {\n      display: flex;\n      justify-content: space-between; }\n  .program-chat .program-chat-info .chat-title h6 {\n        font-size: 16px;\n        margin-top: 0;\n        margin-bottom: 0;\n        font-weight: 400;\n        color: #121212;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        flex: 1; }\n  .program-chat .program-chat-info .chat-title p {\n        color: #cecece;\n        margin-left: 15px; }\n  .program-chat .program-chat-info .chat-info span {\n      font-size: 14px;\n      color: #555;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden; }\n  .counter-box {\n  align-items: center; }\n  .counter-box .timer-block {\n    align-items: center;\n    background: #27a69a; }\n  .counter-box .timer-block ion-text {\n      color: #fff; }\n  .counter-box .timer-block ion-text p {\n        color: #fff;\n        font-size: 14px; }\n  .primary-btn {\n  --background: #27a69a; }\n  .session-timer {\n  display: flex;\n  align-items: center; }\n  .container-flex {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.097);\n  padding: 10px;\n  height: 140px; }\n  .img-cont {\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px; }\n  .img-cont > img {\n  height: 100%; }\n  .flex-with-partition {\n  display: flex;\n  align-items: center; }\n  .flex-with-partition > p {\n  font-size: 16px;\n  position: relative;\n  padding-right: 30px; }\n  .flex-with-partition > p::after {\n  content: '';\n  width: 2px;\n  height: 20px;\n  background-color: #cecece;\n  position: absolute;\n  top: -1px;\n  right: 14px; }\n  .program-cover {\n  height: 260px;\n  width: 100%; }\n  .program-cover > img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n  .equipment-label {\n  font-size: 14px !important; }\n  ion-button.green.hydrated {\n  margin-bottom: 10px;\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS1pbm5lci9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZ3JhbVxcbmV3LXByb2dyYW0taW5uZXJcXG5ldy1wcm9ncmFtLWlubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZ2QjtJQUtRLHlCQUF5QixFQUFBO0VBTGpDO0lBU1EsNEJBQTRCLEVBQUE7RUFJcEM7RUFNd0Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwwQkFBdUI7S0FBdkIsdUJBQXVCLEVBQUE7RUFRL0M7RUFDSSxxQ0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG1DQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTtFQUZ0QztJQUtRLFdBQVcsRUFBQTtFQUluQjtFQUNJLHFDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsbUNBQWtDO1VBQWxDLGtDQUFrQyxFQUFBO0VBRnRDO0lBS1EsV0FBVyxFQUFBO0VBTG5CO0lBU1EsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsaUJBQWlCLEVBQUE7RUFaekI7TUFlWSwwQkFBMEIsRUFBQTtFQWZ0QztNQW1CWSxXQUFXO01BQ1gsWUFBWSxFQUFBO0VBcEJ4QjtNQXdCWSxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxtQkFBbUIsRUFBQTtFQTNCL0I7UUE4QmdCLGVBQWU7UUFDZixXQUFXLEVBQUE7RUFNM0I7RUFFUSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUl2QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUduQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBSVEsYUFBYSxFQUFBO0VBSnJCO01BUWdCLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQiwwQkFBdUI7U0FBdkIsdUJBQXVCLEVBQUE7RUFYdkM7SUFtQlEsYUFBYSxFQUFBO0VBbkJyQjtNQXVCWSxVQUFVO01BQ1YsYUFBYTtNQUNiLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxlQUFlLEVBQUE7RUFoQzNCO1FBbUNnQiw0QkFBNEIsRUFBQTtFQW5DNUM7TUF3Q1ksY0FBYyxFQUFBO0VBSzFCO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQUh2QjtJQU1RLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFSeEI7SUFZUSxPQUFPO0lBQ1AsVUFBVSxFQUFBO0VBYmxCO01BZ0JZLGFBQWE7TUFDYiw4QkFBOEIsRUFBQTtFQWpCMUM7UUFvQmdCLGVBQWU7UUFDZixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsT0FBTyxFQUFBO0VBNUJ2QjtRQWdDZ0IsY0FBYztRQUNkLGlCQUFpQixFQUFBO0VBakNqQztNQXVDZ0IsZUFBZTtNQUNmLFdBQVc7TUFDWCx1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGdCQUFnQixFQUFBO0VBT2hDO0VBQ0ksbUJBQW1CLEVBQUE7RUFEdkI7SUFJUSxtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUFMM0I7TUFRWSxXQUFXLEVBQUE7RUFSdkI7UUFXZ0IsV0FBVztRQUNYLGVBQWUsRUFBQTtFQU0vQjtFQUNJLHFCQUFhLEVBQUE7RUFJakI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFLdkI7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUV0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw0Q0FBMkM7RUFDM0MsYUFBYTtFQUNiLGFBQWEsRUFBQTtFQUdqQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtFQUd0QjtFQUVJLFlBQVksRUFBQTtFQUdoQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUE7RUFHZjtFQUNJLGFBQWE7RUFDYixXQUFXLEVBQUE7RUFHZjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksMEJBQTBCLEVBQUE7RUFHOUI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS1pbm5lci9uZXctcHJvZ3JhbS1pbm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5taW4td2lkdGgtbm9uZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtOCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLm1haW5fY29udGVudCB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgLml0ZW0tY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAuY292ZXItaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlvbmljLWRpdmlkZXIge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAudGhyZWUtdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW9uaWMtZGl2aWRlciB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC50aHJlZS10YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG5cclxuICAgICAgICAuaW9uaWMtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlvbmljLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGl2ZS1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyYW1EZXNjIHtcclxuICAgIHAge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyYW0tZGF0ZSB7XHJcbiAgICBjb2xvcjogIzI3YTY5YTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mcy0xNiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uZnMtMTQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLnByb2dyYW0tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblxyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3JhbXMtZGF0ZSB7fVxyXG5cclxuICAgIC5wcm9ncmFtcy1mbGV4IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLnByb2dyYW0tZmxleC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgLmlvbmljLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2dyYW0tZmxleC1jaGlsZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyYW0tY2hhdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2dyYW0tY2hhdC1pbmZvIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgIC5jaGF0LXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NlY2VjZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1pbmZvIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY291bnRlci1ib3gge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAudGltZXItYmxvY2sge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuXHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAvLyBjb2xvcjogIzI3YTY5YTtcclxufVxyXG5cclxuLnNlc3Npb24tdGltZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgLjA5Nyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG5cclxuLmltZy1jb250IHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pbWctY29udD5pbWcge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LXdpdGgtcGFydGl0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC13aXRoLXBhcnRpdGlvbj5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5mbGV4LXdpdGgtcGFydGl0aW9uPnA6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICByaWdodDogMTRweDtcclxufVxyXG5cclxuLnByb2dyYW0tY292ZXIge1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZ3JhbS1jb3Zlcj5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmVxdWlwbWVudC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5ncmVlbi5oeWRyYXRlZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/program/new-program-inner/new-program-inner.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/program/new-program-inner/new-program-inner.page.ts ***!
  \*********************************************************************/
/*! exports provided: NewProgramInnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProgramInnerPage", function() { return NewProgramInnerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schedule-modal/schedule-modal.component */ "./src/app/program/schedule-modal/schedule-modal.component.ts");
/* harmony import */ var _participants_participants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../participants/participants.component */ "./src/app/program/participants/participants.component.ts");
/* harmony import */ var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../equipments/equipments.component */ "./src/app/program/equipments/equipments.component.ts");
/* harmony import */ var _ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ad-details/ad-details.component */ "./src/app/program/ad-details/ad-details.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modalContent/verify-user-info/verify-user-info.component */ "./src/app/modalContent/verify-user-info/verify-user-info.component.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../chats/chat-rooms/chat-rooms.component */ "./src/app/chats/chat-rooms/chat-rooms.component.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/add-program/view-video-detail/view-video-detail.component */ "./src/app/add-program/view-video-detail/view-video-detail.component.ts");






















/* To try the app with Enablex hosted service you need to set the kTry = true */
var kTry = true;
/*Your webservice host URL, Keet the defined host when kTry = true */
var kBasedURL = "https://demo.enablex.io/";
/*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/
/*Use enablec portal to create your app and get these following credentials*/
var kAppId = "601a75829370a5441339e5c2";
var kAppkey = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";
let NewProgramInnerPage = class NewProgramInnerPage {
    constructor(commonService, navCtrl, actRoute, programService, androidPermissions, platform, router, httpClient, chatService, modalCtrl, socialSharing, nutritionService) {
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.programService = programService;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.router = router;
        this.httpClient = httpClient;
        this.chatService = chatService;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.nutritionService = nutritionService;
        this.userName = '';
        this.roomID = "";
        this.equipmentPicPath = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].equipmentPic;
        this.user = {
            name: 'Simon Grimm',
            website: 'www.ionicacademy.com',
            address: {
                zip: 48149,
                city: 'Muenster',
                country: 'DE'
            },
            interests: [
                'Ionic', 'Angular', 'YouTube', 'Sports'
            ]
        };
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].imgUrl;
        this.vidUrl = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].progVidUrl;
        this.progImage = false;
        this.progVideo = false;
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.ANDROID_PERMISSIONS = [
            this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.RECORD_AUDIO,
            this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS
        ];
        this.trilloverify = true;
        this.tick = 1000;
        this.scheduleProgram = 'program';
        this.slideOpts = {
            slidesPerView: 3,
            zoom: false
        };
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.programId = params.get('programId');
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userName = this.userData.user_name;
        this.programService.getProgramById({ 'parentId': this.programId }).subscribe(data => {
            console.log(data);
            console.log(data.cloneList);
            this.allProgram = data.cloneList;
            this.allProgram.filter(el => {
                el.convertedTime = new Date(el.program_date + 'Z');
                el.nutrition_array = [];
                el.videoId_array = [];
                el.videoProg_array = [];
                if (el.nutrition_id) {
                    el.nutrition_array = el.nutrition_id.split(',');
                    console.log("el.nutrition_array:" + el.nutrition_array);
                }
                if (el.video_id) {
                    el.videoId_array = el.video_id.split(',');
                    console.log("el.video_id:" + el.videoId_array);
                }
                if (el.video_program) {
                    el.videoProg_array = el.video_program.split(',');
                    console.log("el.video_id:" + el.videoProg_array);
                }
                return el;
            });
            let nutriArr = [];
            data.cloneList.forEach(el => {
                if (el.nutrition_id != null) {
                    nutriArr.push(el.nutrition_id);
                }
            });
            this.nutritionService.getNutritionById({ 'nutriId': nutriArr.toLocaleString() }).subscribe(ndata => {
                this.nutritionList = ndata.nutritionList;
                this.nutritionList.forEach(el => {
                    console.log(el.image_path);
                    console.log(el.image_path.split(','));
                    var imgArr = el.image_path.split(',');
                    //  console.log(this.nutritionList[el]);
                    el.fImage = imgArr[0];
                });
                console.log(this.nutritionList);
                this.commonService.dismissLoader();
            }, err => {
                this.commonService.dismissLoader();
                this.commonService.presentToast("Couldnt load data, Something went wrong.");
            });
        }, err => {
            this.commonService.dismissLoader();
            this.commonService.presentToast("Couldnt load data, Something went wrong.");
        });
    }
    initRoom() {
        if (this.userName.length == 0) {
            alert("Kindly Enter Your name");
            return;
        }
        var hedare = (kTry) ? { "x-app-id": kAppId, "x-app-key": kAppkey, "Accept": "application/json", "Content-Type": "application/json" } : { "Accept": "application/json", "Content-Type": "application/json" };
        let url = kBasedURL + "createRoom";
        console.log("Url Faired" + url);
        this.httpClient.post(url, {}, { headers: hedare }).subscribe(data => {
            let room = data["room"];
            let room_ID = room["room_id"];
            this.roomID = room_ID;
        }, error => {
            console.log("Enablex service failed");
            console.log(error);
        });
    }
    nutritionModal(data) {
        console.log(data);
        this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_20__["NutritionModalComponent"], 'fullModal', { 'data': data });
    }
    showVideoDetails(item, videoIDs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_21__["ViewVideoDetailComponent"], 'fullModal', { 'details': item, 'videoIds': videoIDs });
        });
    }
    joinRoom() {
        if (this.roomID.length == 0) {
            alert("Kindly Enter Room ID");
            return;
        }
        // alert(this.roomID);
        console.log(this.roomID, 'room id');
        var loginString = { "name": this.userName, "role": "moderator", "user_ref": "2236", "roomId": this.roomID };
        var hedare = (kTry) ? { "x-app-id": kAppId, "x-app-key": kAppkey, "Accept": "application/json", "Content-Type": "application/json" } : { "Accept": "application/json", "Content-Type": "application/json" };
        let url = kBasedURL + "createToken";
        console.log("Url Faired" + url);
        this.httpClient.post(url, loginString, { headers: hedare }).subscribe(data => {
            console.log("Hello service done" + data["token"]);
            let navigationExtras = {
                queryParams: {
                    token: data["token"],
                    name: this.userName,
                    role: "moderator",
                    user_ref: "user_ref",
                    roomId: this.roomID,
                    description: this.programDescription,
                    programId: this.programId,
                    programTitle: this.programTitle,
                    participants: this.participants,
                    duration: this.programDurations,
                    program_type: this.programType,
                    program_fee: this.programFee,
                    program_img: this.programImage
                }
            };
            this.enxData = {
                token: data["token"],
                name: this.userName,
                role: "moderator",
                user_ref: "user_ref",
                room_id: this.roomID,
                program_id: this.programId,
                is_active: 1,
                user_id: this.userData.id,
                description: this.programDescription,
                participants: this.participants,
                duration: this.programDurations,
            };
            this.programService.setEnxData(this.enxData).subscribe(data => {
                console.log("EnxData: " + JSON.stringify(data));
            });
            this.navCtrl.navigateForward(['confrence'], navigationExtras);
        }, error => {
            console.log("Hello service failed");
            console.log(error);
        });
        console.log("ClickEvent Join event");
    }
    ionViewWillEnter() {
        console.log('ionviewwillenter');
        this.commonService.presentLoader();
        this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
            // console.log(data,'pdata');
            // console.log(data.programData.parent_program);
            if (data.programData.parent_program == null) {
                console.log('nullll');
                this.parentProgId = data.programData.id;
            }
            else {
                this.parentProgId = data.programData.parent_program;
            }
            this.programService.getProgramById({ "parentId": this.parentProgId }).subscribe(data => {
                this.upcomingList = this.getCounter(data.cloneList);
                this.allProgramData = this.upcomingList;
                // console.log(data, 'programData');
                console.log(this.allProgramData, 'allProgramData');
            });
            this.programDetail = data.programData;
            this.equipmentsData = this.programDetail.equipments;
            console.log("PG: " + this.programDetail.video_id);
            console.log("PG: " + JSON.stringify(this.programDetail));
            console.log(data.programData.image_path[0] + 'ddddddd');
            this.firstImg = '';
            if (data.programData.image_path != '') {
                this.firstImg = data.programData.image_path[0];
                // this.progImage = data.programData.image_path;
                this.progImage = true;
            }
            else {
                this.progImage = false;
            }
            if (data.programData.video_path != null) {
                // this.progImage = data.programData.image_path;
                console.log('nooooooo');
                this.progVideo = true;
            }
            else {
                this.progVideo = false;
            }
            console.log(data.programData.video_path + 'progImage');
            console.log(this.progVideo + 'iddddd');
            //https://ionicinto.wdipl.com/storage/app/public/prog_upload_videos
            //https://ionicinto.wdipl.com/storage/app/public/prog_upload_videos/prog_upload_videosprog20210810114016_final.mp4
            console.log(this.programDetail.video_path + 'video_path');
            this.programTitle = data.programData.title;
            this.requestSent = data.programData.request_sent;
            if (this.programDetail.payment_type == 'Paid') {
                this.programFee = this.programDetail.program_fee;
            }
            else if (this.programDetail.payment_type == 'Free') {
                this.programFee = this.programDetail.payment_type;
            }
            //1 = private , 2 = closed , 3 = public
            this.programType = data.programData.type_id;
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
            // this.programDetail.live = true;
            this.initRoom();
            this.programDetail.img_array = data.programData.image_path.split(',');
            this.programImage = this.programDetail.img_array[0];
            //  ------------ C O U N T   D O W N   T I M E R ---------
            let a = new Date(this.programDetail.program_date + 'Z');
            this.programDateTime = a;
            let b = new Date();
            let c;
            if (a > b) {
                c = Math.abs(a - b) / 1000;
                this.programDetail.cd = c;
                console.log(this.programDetail.cd);
                this.days = Math.abs((c - b) / (1000 * 60 * 60 * 24));
                this.dd = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd / (60 * 60 * 24));
                }));
                console.log(this.dd);
                this.ss = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd % 3600 % 60);
                }));
                this.mm = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
                    // if (this.programDetail.cd > 0) {
                    //  // --this.programDetail.cd;
                    // }
                    return ~~(this.programDetail.cd % 3600 / 60);
                }));
                this.hh = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(() => {
                    if (this.programDetail.cd <= 5) {
                        this.programDetail.live = true;
                        this.initRoom();
                    }
                    if (this.programDetail.cd > 0) {
                        //--this.programDetail.cd;
                    }
                    else {
                        this.programDetail.cd = 0;
                        return 0;
                    }
                    return ~~(this.programDetail.cd / (60 * 60) % 24);
                }));
                console.log(this.hh);
            }
            else {
                c = 0;
                if (new Date(this.programDetail.program_end_time + 'Z') > new Date()) {
                    this.programDetail.live = true;
                    this.initRoom();
                    console.log('program Live');
                }
                else {
                    this.programDetail.ended = true;
                    console.log('program end');
                }
            }
            // console.log(this.programDetail.live + 'psss');
            console.log(this.programDetail.cd + 'ssss');
            //----------------------------------------
            this.broadcastId = 'programId_' + data.programData.id;
            let payload = '';
            if (this.programDetail.is_requested) {
                payload = this.programDetail.request_recive;
            }
            else {
                payload = this.programDetail.request_sent + ',' + this.programDetail.request_accepted;
            }
            this.commonService.getUsersById({ "userId": payload }).subscribe(data => {
                this.userList = data.userList;
                console.log(this.userList + 'this.userList');
                console.log(payload + 'payload');
            });
            //--------------------------------------
            let advtProgId;
            if (this.programDetail.parent_program) {
                advtProgId = this.programDetail.parent_program;
            }
            else {
                advtProgId = this.programDetail.id;
            }
            this.programService.getAdDetail({ 'programId': this.programId }).subscribe(data => {
                this.adData = data.data;
                console.log(this.adData);
                console.log(this.hh);
                this.commonService.dismissLoader();
            }, err => {
                this.commonService.dismissLoader();
            });
        }, err => {
            this.commonService.dismissLoader();
            this.commonService.presentToast("Couldnt load data, Something went wrong.");
        });
        this.programService.fetchSelectedEquipmentList({ 'programId': this.programId }).subscribe((data) => {
            console.log(data);
            this.equipmentsList = data.equipmentList;
        });
    }
    showSchedule(event) {
        this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleModalComponent"], 'fullModal', { 'programDetail': event, 'user_type': this.userData.user_type });
    }
    showParticipants() {
        this.commonService.presentModal(_participants_participants_component__WEBPACK_IMPORTED_MODULE_4__["ParticipantsComponent"], 'fullModal', { 'userList': this.userList, 'programDetails': this.programDetail });
    }
    disclass() {
        this.commonService.presentToast("Program is not live yet.");
    }
    getCounter(elementArr) {
        console.log(elementArr, 'elementArr');
        elementArr.filter(el => {
            el.convertedTime = new Date(el.program_date + 'Z');
            let a = new Date(el.program_date + 'Z');
            let b = new Date();
            let c;
            if (a > b) {
                c = Math.abs(a - b) / 1000;
            }
            else {
                c = 0;
                el.live = true;
            }
            el.cd = c;
            setInterval(function () {
                if (parseInt(el.cd) > 0)
                    el.cd = parseInt(el.cd) - 1;
                el.hh = ~~(el.cd / (60 * 60));
                el.mm = ~~(el.cd % 3600 / 60);
                el.ss = (el.cd % 3600 % 60);
            }, 1000);
            return el;
        });
        return elementArr;
    }
    equipments() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.commonService.presentModal(EquipmentsComponent, 'halfModal', { 'programDetail': this.programDetail  });
            const modal = yield this.modalCtrl.create({
                component: _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentsComponent"],
                cssClass: 'halfModal',
                componentProps: { "programDetail": this.programDetail }
            });
            modal.onDidDismiss().then((d) => {
                this.programDetail.equipments = d.data;
                console.log(d);
                console.log(this.programDetail.equipments);
            });
            return yield modal.present();
        });
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
                    this.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__["ChatRoomsComponent"], 'fullModal', fileData);
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
            this.verifyUser();
        }
        else {
            this.commonService.presentAlert(title, msg, btn, 'custom-alert advertiseAlert');
        }
    }
    ngOnDestroy() {
    }
    verifyUser() {
        this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_13__["VerifyUserInfoComponent"], 'fullpage', '');
    }
    sendrequest() {
        if (this.programDetail.type_id == 'video') {
            // console.log('programId:'+this.programDetail.id);
            this.programService.advertiseRequest({ 'programId': this.programDetail.id }).subscribe(data => {
                this.adData = data.status;
            });
        }
        else {
            this.commonService.presentToast('Only Video Program are eligible');
        }
    }
    showSponsersList() {
        this.commonService.presentModal(_ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_6__["AdDetailsComponent"], 'fullModal', { 'adDetails': this.adData });
    }
    broadcast() {
        let navigationExtras = {
            state: {
                user: this.user
            }
        };
        this.router.navigate(['/broadcast'], navigationExtras);
        // this.checkAndroidPermissions();
    }
    shareItem() {
        this.socialSharing.share("Program Details", "", "", "program-view/" + this.programDetail.id)
            .then(() => {
        })
            .catch(() => {
        });
    }
    goBack() {
        // this.navCtrl.back();
        this.router.navigate(['/new-schedule-program']);
    }
};
NewProgramInnerPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_15__["ChatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_19__["NutritionService"] }
];
NewProgramInnerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-program-inner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-program-inner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-inner/new-program-inner.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-program-inner.page.scss */ "./src/app/program/new-program-inner/new-program-inner.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_15__["ChatService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_19__["NutritionService"]])
], NewProgramInnerPage);



/***/ })

}]);
//# sourceMappingURL=program-new-program-inner-new-program-inner-module-es2015.js.map