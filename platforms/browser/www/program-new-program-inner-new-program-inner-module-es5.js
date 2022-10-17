function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-new-program-inner-new-program-inner-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-inner/new-program-inner.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-inner/new-program-inner.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramNewProgramInnerNewProgramInnerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <!-- <ion-label>{{programDetail?.title}}</ion-label> -->\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <div class=\"right-div\">\r\n      <ion-item detail=\"false\" class=\"icon-right-side ion-text-end min-width-none \" slot=\"end\"\r\n        [routerLink]=\"['/edit-program',programId]\">\r\n        <ion-icon ios=\"ios-create\" md=\"md-create\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item detail=\"false\" class=\"icon-right-side ion-text-end min-width-none pl-8\" slot=\"end\"\r\n        (click)=\"shareItem()\">\r\n        <ion-icon ios=\"ios-share\" md=\"md-share\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\"\r\n          #mySlider>\r\n          <ion-slide *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\">\r\n            <div class=\"program-cover\">\r\n              <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" />\r\n            </div>\r\n          </ion-slide>\r\n          <ion-slide class=\"program-slides\">\r\n            <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"\r\n              webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n              <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n            </video>\r\n          </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\"\r\n          class=\"full-slider program-slide\" #mySlider>\r\n          <ion-slide *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\">\r\n            <div class=\"program-cover\">\r\n              <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" />\r\n            </div>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\"\r\n          class=\"full-slider program-slide\" #mySlider>\r\n          <ion-slide class=\"program-slides\">\r\n            <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"\r\n              webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n              <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n            </video>\r\n          </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img class=\"cover-img\" [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"url+programImage\">\r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list class=\"ion-no-padding\">\r\n        <ion-item-group>\r\n          <ion-item-divider class=\"ionic-divider\" lines=\"none\" sticky>\r\n            <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n              <ion-segment class=\"ion-no-padding\" [(ngModel)]=\"scheduleProgram\">\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"program\" checked>\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-clipboard\" md=\"md-clipboard\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"videos\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"chat\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"programtype\">\r\n                  <img class=\"ionic-img\" src=\"../../../assets/images/target.svg\" />\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n          </ion-item-divider>\r\n          <ion-item-sliding>\r\n            <div [ngSwitch]=\"scheduleProgram\">\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'program'\">\r\n                <ion-row class=\"ion-padding-vertical\">\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                    <div class=\"programDesc\">\r\n                      <!-- <p>{{programDetail?.description }} &nbsp;</p>         -->\r\n                      <p>{{programDetail?.description }}</p>\r\n                    </div>\r\n                    <!-- <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n                      <ion-item class=\"d-flex\">\r\n                          <span *ngFor=\"let user  of userList\">\r\n                            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n                            <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n                          </span>\r\n                          <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n                      </ion-item>\r\n                    </ion-list> -->\r\n                  </ion-col>\r\n                  <!-- <ion-col class=\"infoBox\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n                    <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request recived yet</h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to verify. </h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n                  </ion-col> -->\r\n                  <ion-col size=\"12\" style=\"position: static;\" class=\"ion-no-padding  green-text\">\r\n                    <!-- <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text> -->\r\n                    <ion-text>\r\n                      <p class=\"program-date\">{{programDateTime|date:'medium'}}</p>\r\n                    </ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 1\">\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended \">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{dd | async}}</p> Days\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{hh | async }} </p> Hours\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{mm| async}}</p> Minutes\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text>\r\n                      <p class=\"count_time\">{{ss | async}}</p> Seconds\r\n                    </ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n                    <ion-text>This Program has been Ended </ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 0\">\r\n                  <ion-col size=\"6\" class=\"ion-padding timer-block\">\r\n                    <ion-text>Non-Live Program</ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n                  <ion-item class=\"d-flex\">\r\n                    <ion-avatar *ngFor=\"let user  of userList\">\r\n\r\n                      <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n                      <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n                    </ion-avatar>\r\n                    <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n                <ion-col class=\"infoBox\"\r\n                  *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n                  <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request\r\n                    recived yet</h6>\r\n                  <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to\r\n                    verify. </h6>\r\n                  <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n                </ion-col>\r\n\r\n                <div *ngIf=\"programDetail?.is_live_status == 1\" class=\"ion-text-center\">\r\n                  <ion-button class=\"btnVerify green\" *ngIf=\"programDetail?.live\" (click)=\"joinRoom()\">Go Live\r\n                  </ion-button>\r\n                </div>\r\n                <!-- <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 1\">\r\n                  <ion-button class=\"btnVerify\" (click)=\"verifyUser()\">Verify to Go Live</ion-button>\r\n                </div> -->\r\n                <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 0\">\r\n                  <ion-button class=\"btnVerify\">No live program available</ion-button>\r\n                </div>\r\n\r\n                <ion-item class=\"list-items\" lines=\"\">\r\n                  <div class=\"icon-text ion-margin-bottom\" style=\"width: 100%;\">\r\n                    <h5 class=\"\">Program</h5>\r\n                    <div class=\"flex-with-partition\">\r\n                      <p>{{programDetail?.video_id.split(\",\").length}} Videos </p>\r\n                      <p>{{programDetail?.nutrition_id.split(\",\").length}} Nutrition</p>\r\n                      <p *ngIf=\"programDetail?.payment_type == 'Paid' \">${{programFee}}</p>\r\n                      <p *ngIf=\"programDetail?.payment_type == 'Free' \">{{programFee}}</p>\r\n\r\n                    </div>\r\n                    <!-- <ion-chip>\r\n                    {{programDetail?.video_id.split(\",\").length}} Videos \r\n                  </ion-chip>\r\n                  <ion-chip>\r\n                    {{programFee}}\r\n                  </ion-chip> -->\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item class=\"ion-padding-top\" lines=\"\">\r\n                  <p class=\"ion-padding-bottom\" style=\"font-size: 16px;\">\r\n                    {{programDetail?.nutri_desc}}\r\n                  </p>\r\n                </ion-item>\r\n                <ion-button expand=\"full\" *ngIf=\" !adData && (hh | async)>23\" (click)=\"applyAdvertise()\"\r\n                  class=\"mb-56 btn-height green ion-text-uppercase ion-no-margin full-height\"> Apply For Advertise\r\n                  sponser</ion-button>\r\n\r\n                <ion-button expand=\"full\" *ngIf=\"adData?.id && adData?.video_approve_status== 1\"\r\n                  (click)=\"showSponsersList()\"\r\n                  class=\"mb-56 btn-height green ion-text-uppercase ion-no-margin full-height\">See Ad Sponser Options\r\n                </ion-button>\r\n                <h5 class=\"ion-padding-horizontal\">Equipments</h5>\r\n                <ion-item>\r\n                  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-vertical ion-margin-bottom\">\r\n                    <ion-slide class=\"program-slides\" *ngFor=\"let equp of equipmentsList; index as i\">\r\n                      <div class=\"container-flex\">\r\n                        <div class=\"img-cont\">\r\n                          <img src=\"{{equipmentPicPath}}{{equp.equipment_pic}}\" alt=\"\">\r\n                        </div>\r\n                        <span class=\"equipment-label\">{{equp.equipment_name}}</span>\r\n                      </div>\r\n                      <!-- <div class=\"container-flex\" #seeMore>\r\n                        See More\r\n                      </div> -->\r\n                    </ion-slide>\r\n                    <ion-slide class=\"program-slides\" *ngIf=\"equipmentsList?.length > 2\" (click)=\"equipments()\">\r\n                      <div class=\"container-flex\" style=\"height: 100%;\">\r\n                        <ion-label class=\"\">See more</ion-label>\r\n                      </div>\r\n                    </ion-slide>\r\n                  </ion-slides>\r\n\r\n\r\n                  <!-- <div class=\"container-flex\" style=\"height: 100%;\">\r\n                    <ion-label class=\"\">see more</ion-label>\r\n                  </div> -->\r\n                </ion-item>\r\n                <!-- <ion-slides [options]=\"slideOpts\" class=\"ion-padding-vertical ion-margin-bottom\">\r\n                  <ion-slide class=\"program-slides\">\r\n                    <div class=\"container-flex\">\r\n                      <div class=\"img-cont\">\r\n                        <img src=\"../../../assets/images/upwork.png\" alt=\"\">\r\n                      </div>\r\n                      <ion-label class=\"\">Upwork</ion-label>\r\n                    </div>\r\n                  </ion-slide>\r\n                  <ion-slide class=\"program-slides\">\r\n                    <div class=\"container-flex\">\r\n                      <div class=\"img-cont\">\r\n                        <img src=\"../../../assets/images/flex-ball.png\" alt=\"\">\r\n                      </div>\r\n                      <ion-label class=\"\">flex-ball</ion-label>\r\n                    </div>\r\n                  </ion-slide>\r\n                  <ion-slide class=\"program-slides\">\r\n                    <div class=\"container-flex\">\r\n                      <div class=\"img-cont\">\r\n                        <img src=\"../../../assets/images/calf-raise.png\" alt=\"\">\r\n                      </div>\r\n                      <ion-label class=\"\">calf-raise</ion-label>\r\n                    </div>\r\n                  </ion-slide>\r\n                </ion-slides> -->\r\n                <ion-item-divider></ion-item-divider>\r\n              </ion-list>\r\n\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'videos'\">\r\n                <div class=\"program-card\" *ngFor=\"let val of allProgramData; let i=index;\">\r\n                  <div class=\"programs-date\">\r\n                    <p class=\"fs-16 mb-10\">{{val.program_date |date:'medium'}}</p>\r\n                  </div>\r\n                  <div class=\"programs-flex\">\r\n                    <div class=\"program-session program-flex-child\" *ngIf=\"val.is_live_status == 1\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <div class=\"session-timer\">\r\n                        <p class=\"fs-14\">{{val.hh}}</p>\r\n                        <span>:</span>\r\n                        <p class=\"fs-14\">{{val.mm}}</p>\r\n                        <span>:</span>\r\n                        <p class=\"fs-14\">{{val.ss}}</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"program-video program-flex-child\" *ngIf=\"val.video_id != '' \"\r\n                      (click)=\"showVideoDetails(val.id,val.video_id)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Video</p>\r\n                    </div>\r\n                    <div class=\"program-nutrition program-flex-child\" *ngIf=\"val.nutrition_id != '' \"\r\n                      (click)=\"nutritionModal(val)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n                      <p class=\"fs-14\">Nutrition</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'chat'\">\r\n                <div class=\"program-chat\">\r\n                  <!-- <ion-avatar>\r\n                    <img src=\"../../assets/images/bgimage.png\" alt=\"\">\r\n                  </ion-avatar>\r\n                  <div class=\"program-chat-info\">\r\n                    <div class=\"chat-title\">\r\n                      <h6>Rock Sam</h6>\r\n                      <p>11:09 AM</p>\r\n                    </div>\r\n                    <div class=\"chat-info\">\r\n                      <span>Good morning rock</span>\r\n                    </div>\r\n                  </div> -->\r\n                  <p>No Chat available</p>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'programtype'\">\r\n                <div class=\"program-card\">\r\n                  <ion-slides [pager]=\"true\">\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide>\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide>\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n              </ion-list>\r\n            </div>\r\n          </ion-item-sliding>\r\n        </ion-item-group>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/program/new-program-inner/new-program-inner-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/program/new-program-inner/new-program-inner-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: NewProgramInnerPageRoutingModule */

  /***/
  function srcAppProgramNewProgramInnerNewProgramInnerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramInnerPageRoutingModule", function () {
      return NewProgramInnerPageRoutingModule;
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


    var _new_program_inner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-program-inner.page */
    "./src/app/program/new-program-inner/new-program-inner.page.ts");

    var routes = [{
      path: '',
      component: _new_program_inner_page__WEBPACK_IMPORTED_MODULE_3__["NewProgramInnerPage"]
    }];

    var NewProgramInnerPageRoutingModule = function NewProgramInnerPageRoutingModule() {
      _classCallCheck(this, NewProgramInnerPageRoutingModule);
    };

    NewProgramInnerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewProgramInnerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/new-program-inner/new-program-inner.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/program/new-program-inner/new-program-inner.module.ts ***!
    \***********************************************************************/

  /*! exports provided: NewProgramInnerPageModule */

  /***/
  function srcAppProgramNewProgramInnerNewProgramInnerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramInnerPageModule", function () {
      return NewProgramInnerPageModule;
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


    var _new_program_inner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-program-inner-routing.module */
    "./src/app/program/new-program-inner/new-program-inner-routing.module.ts");
    /* harmony import */


    var _new_program_inner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-program-inner.page */
    "./src/app/program/new-program-inner/new-program-inner.page.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var NewProgramInnerPageModule = function NewProgramInnerPageModule() {
      _classCallCheck(this, NewProgramInnerPageModule);
    };

    NewProgramInnerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_program_inner_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewProgramInnerPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]],
      declarations: [_new_program_inner_page__WEBPACK_IMPORTED_MODULE_6__["NewProgramInnerPage"]]
    })], NewProgramInnerPageModule);
    /***/
  },

  /***/
  "./src/app/program/new-program-inner/new-program-inner.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/program/new-program-inner/new-program-inner.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramNewProgramInnerNewProgramInnerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".right-div {\n  display: flex;\n  align-items: center;\n}\n.right-div .min-width-none {\n  min-width: 0px !important;\n}\n.right-div .pl-8 {\n  padding-left: 8px !important;\n}\n.main_content ion-row ion-col .item-content ion-thumbnail .cover-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important;\n}\n.ionic-divider .three-tabs ion-segment ion-segment-button {\n  width: auto;\n}\n.ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important;\n}\n.ionic-divider .three-tabs ion-segment ion-segment-button {\n  width: auto;\n}\n.ionic-divider ion-segment-button {\n  min-height: 38px;\n  color: #000;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.ionic-divider ion-segment-button .ionic-icon {\n  font-size: 2rem !important;\n}\n.ionic-divider ion-segment-button .ionic-img {\n  width: 2rem;\n  height: 2rem;\n}\n.ionic-divider ion-segment-button .live-icon {\n  padding: 5px 10px;\n  background: #555;\n  color: #fff;\n  border-radius: 20px;\n}\n.ionic-divider ion-segment-button .live-icon span {\n  font-size: 10px;\n  color: #fff;\n}\n.programDesc p {\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px;\n}\n.program-date {\n  color: #27a69a;\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px;\n}\n.fs-16 {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.fs-14 {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.program-card {\n  padding: 10px 15px;\n}\n.program-card ion-slides {\n  height: 200px;\n}\n.program-card ion-slides ion-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.program-card .programs-flex {\n  display: flex;\n}\n.program-card .programs-flex .program-flex-child {\n  width: 30%;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: #27a69a;\n  color: #fff;\n  margin-left: 5%;\n}\n.program-card .programs-flex .program-flex-child .ionic-icon {\n  font-size: 1.5rem !important;\n}\n.program-card .programs-flex .program-flex-child:first-child {\n  margin-left: 0;\n}\n.program-chat {\n  display: flex;\n  padding: 10px 15px;\n  align-items: center;\n}\n.program-chat ion-avatar {\n  margin-right: 15px;\n  min-width: 50px;\n  min-height: 50px;\n}\n.program-chat .program-chat-info {\n  flex: 1;\n  width: 80%;\n}\n.program-chat .program-chat-info .chat-title {\n  display: flex;\n  justify-content: space-between;\n}\n.program-chat .program-chat-info .chat-title h6 {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 400;\n  color: #121212;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex: 1;\n}\n.program-chat .program-chat-info .chat-title p {\n  color: #cecece;\n  margin-left: 15px;\n}\n.program-chat .program-chat-info .chat-info span {\n  font-size: 14px;\n  color: #555;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.counter-box {\n  align-items: center;\n}\n.counter-box .timer-block {\n  align-items: center;\n  background: #27a69a;\n}\n.counter-box .timer-block ion-text {\n  color: #fff;\n}\n.counter-box .timer-block ion-text p {\n  color: #fff;\n  font-size: 14px;\n}\n.primary-btn {\n  --background: #27a69a;\n}\n.session-timer {\n  display: flex;\n  align-items: center;\n}\n.container-flex {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.097);\n  padding: 10px;\n  height: 140px;\n}\n.img-cont {\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.img-cont > img {\n  height: 100%;\n}\n.flex-with-partition {\n  display: flex;\n  align-items: center;\n}\n.flex-with-partition > p {\n  font-size: 16px;\n  position: relative;\n  padding-right: 30px;\n}\n.flex-with-partition > p::after {\n  content: \"\";\n  width: 2px;\n  height: 20px;\n  background-color: #cecece;\n  position: absolute;\n  top: -1px;\n  right: 14px;\n}\n.program-cover {\n  height: 260px;\n  width: 100%;\n}\n.program-cover > img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.equipment-label {\n  font-size: 14px !important;\n}\nion-button.green.hydrated {\n  margin-bottom: 10px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS1pbm5lci9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9ncmFtXFxuZXctcHJvZ3JhbS1pbm5lclxcbmV3LXByb2dyYW0taW5uZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9ncmFtL25ldy1wcm9ncmFtLWlubmVyL25ldy1wcm9ncmFtLWlubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSx5QkFBQTtBQ0NSO0FERUk7RUFDSSw0QkFBQTtBQ0FSO0FEU29CO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUNOeEI7QURjQTtFQUNJLHFDQUFBO1VBQUEsb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDWEo7QURhSTtFQUNJLFdBQUE7QUNYUjtBRGVBO0VBQ0kscUNBQUE7VUFBQSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7QUNaSjtBRGNJO0VBQ0ksV0FBQTtBQ1pSO0FEZUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDYlI7QURlUTtFQUNJLDBCQUFBO0FDYlo7QURnQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2RaO0FEaUJRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2ZaO0FEaUJZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNmaEI7QURzQkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25CUjtBRHVCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCSjtBRHVCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ3BCSjtBRHVCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ3BCSjtBRHVCQTtFQUNJLGtCQUFBO0FDcEJKO0FEc0JJO0VBQ0ksYUFBQTtBQ3BCUjtBRHVCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUNyQmhCO0FENEJJO0VBQ0ksYUFBQTtBQzFCUjtBRDZCUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzNCWjtBRDZCWTtFQUNJLDRCQUFBO0FDM0JoQjtBRCtCUTtFQUNJLGNBQUE7QUM3Qlo7QURrQ0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQy9CSjtBRGlDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDL0JSO0FEa0NJO0VBQ0ksT0FBQTtFQUNBLFVBQUE7QUNoQ1I7QURrQ1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNoQ1o7QURrQ1k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQ2hDaEI7QURtQ1k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNqQ2hCO0FEc0NZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNwQ2hCO0FEMkNBO0VBQ0ksbUJBQUE7QUN4Q0o7QUQwQ0k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDeENSO0FEMENRO0VBQ0ksV0FBQTtBQ3hDWjtBRDBDWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDeENoQjtBRDhDQTtFQUNJLHFCQUFBO0FDM0NKO0FEK0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDNUNKO0FEaURBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUMvQ0o7QURrREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQy9DSjtBRGtEQTtFQUVJLFlBQUE7QUNoREo7QURtREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNoREo7QURtREE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2hESjtBRG1EQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2hESjtBRG1EQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDaERKO0FEbURBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDaERKO0FEbURBO0VBQ0ksMEJBQUE7QUNoREo7QURtREE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNoREoiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL25ldy1wcm9ncmFtLWlubmVyL25ldy1wcm9ncmFtLWlubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLm1pbi13aWR0aC1ub25lIHtcclxuICAgICAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC04IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFpbl9jb250ZW50IHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAuaXRlbS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb3Zlci1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaW9uaWMtZGl2aWRlciB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC50aHJlZS10YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pb25pYy1kaXZpZGVyIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnRocmVlLXRhYnMgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcblxyXG4gICAgICAgIC5pb25pYy1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW9uaWMtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saXZlLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3JhbURlc2Mge1xyXG4gICAgcCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3JhbS1kYXRlIHtcclxuICAgIGNvbG9yOiAjMjdhNjlhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZzLTE2IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5mcy0xNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4ucHJvZ3JhbS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHJcbiAgICBpb24tc2xpZGVzIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICBpb24tc2xpZGUge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmFtcy1kYXRlIHt9XHJcblxyXG4gICAgLnByb2dyYW1zLWZsZXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAucHJvZ3JhbS1mbGV4LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gICAgICAgICAgICAuaW9uaWMtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZ3JhbS1mbGV4LWNoaWxkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZ3JhbS1jaGF0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3JhbS1jaGF0LWluZm8ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgICAgLmNoYXQtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2VjZWNlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGF0LWluZm8ge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5jb3VudGVyLWJveCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC50aW1lci1ibG9jayB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG5cclxuICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByaW1hcnktYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgIC8vIGNvbG9yOiAjMjdhNjlhO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10aW1lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIGJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAuMDk3KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcblxyXG4uaW1nLWNvbnQge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmltZy1jb250PmltZyB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtd2l0aC1wYXJ0aXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LXdpdGgtcGFydGl0aW9uPnAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtd2l0aC1wYXJ0aXRpb24+cDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4ucHJvZ3JhbS1jb3ZlciB7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9ncmFtLWNvdmVyPmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmdyZWVuLmh5ZHJhdGVkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn0iLCIucmlnaHQtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yaWdodC1kaXYgLm1pbi13aWR0aC1ub25lIHtcbiAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cbi5yaWdodC1kaXYgLnBsLTgge1xuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAuaXRlbS1jb250ZW50IGlvbi10aHVtYm5haWwgLmNvdmVyLWltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmlvbmljLWRpdmlkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9uaWMtZGl2aWRlciAudGhyZWUtdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICB3aWR0aDogYXV0bztcbn1cblxuLmlvbmljLWRpdmlkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW9uaWMtZGl2aWRlciAudGhyZWUtdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICB3aWR0aDogYXV0bztcbn1cbi5pb25pYy1kaXZpZGVyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4uaW9uaWMtZGl2aWRlciBpb24tc2VnbWVudC1idXR0b24gLmlvbmljLWljb24ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbn1cbi5pb25pYy1kaXZpZGVyIGlvbi1zZWdtZW50LWJ1dHRvbiAuaW9uaWMtaW1nIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cbi5pb25pYy1kaXZpZGVyIGlvbi1zZWdtZW50LWJ1dHRvbiAubGl2ZS1pY29uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmlvbmljLWRpdmlkZXIgaW9uLXNlZ21lbnQtYnV0dG9uIC5saXZlLWljb24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wcm9ncmFtRGVzYyBwIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9ncmFtLWRhdGUge1xuICBjb2xvcjogIzI3YTY5YTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mcy0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmZzLTE0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ucHJvZ3JhbS1jYXJkIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLnByb2dyYW0tY2FyZCBpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5wcm9ncmFtLWNhcmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2dyYW0tY2FyZCAucHJvZ3JhbXMtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZ3JhbS1jYXJkIC5wcm9ncmFtcy1mbGV4IC5wcm9ncmFtLWZsZXgtY2hpbGQge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI3YTY5YTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5wcm9ncmFtLWNhcmQgLnByb2dyYW1zLWZsZXggLnByb2dyYW0tZmxleC1jaGlsZCAuaW9uaWMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG4ucHJvZ3JhbS1jYXJkIC5wcm9ncmFtcy1mbGV4IC5wcm9ncmFtLWZsZXgtY2hpbGQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnByb2dyYW0tY2hhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9ncmFtLWNoYXQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuLnByb2dyYW0tY2hhdCAucHJvZ3JhbS1jaGF0LWluZm8ge1xuICBmbGV4OiAxO1xuICB3aWR0aDogODAlO1xufVxuLnByb2dyYW0tY2hhdCAucHJvZ3JhbS1jaGF0LWluZm8gLmNoYXQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZ3JhbS1jaGF0IC5wcm9ncmFtLWNoYXQtaW5mbyAuY2hhdC10aXRsZSBoNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbGV4OiAxO1xufVxuLnByb2dyYW0tY2hhdCAucHJvZ3JhbS1jaGF0LWluZm8gLmNoYXQtdGl0bGUgcCB7XG4gIGNvbG9yOiAjY2VjZWNlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5wcm9ncmFtLWNoYXQgLnByb2dyYW0tY2hhdC1pbmZvIC5jaGF0LWluZm8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY291bnRlci1ib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvdW50ZXItYm94IC50aW1lci1ibG9jayB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyN2E2OWE7XG59XG4uY291bnRlci1ib3ggLnRpbWVyLWJsb2NrIGlvbi10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY291bnRlci1ib3ggLnRpbWVyLWJsb2NrIGlvbi10ZXh0IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJpbWFyeS1idG4ge1xuICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XG59XG5cbi5zZXNzaW9uLXRpbWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA5Nyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTQwcHg7XG59XG5cbi5pbWctY29udCB7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmltZy1jb250ID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmxleC13aXRoLXBhcnRpdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LXdpdGgtcGFydGl0aW9uID4gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uZmxleC13aXRoLXBhcnRpdGlvbiA+IHA6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgcmlnaHQ6IDE0cHg7XG59XG5cbi5wcm9ncmFtLWNvdmVyIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9ncmFtLWNvdmVyID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5lcXVpcG1lbnQtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbi5ncmVlbi5oeWRyYXRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGhlaWdodDogNDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/program/new-program-inner/new-program-inner.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/program/new-program-inner/new-program-inner.page.ts ***!
    \*********************************************************************/

  /*! exports provided: NewProgramInnerPage */

  /***/
  function srcAppProgramNewProgramInnerNewProgramInnerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramInnerPage", function () {
      return NewProgramInnerPage;
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


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../schedule-modal/schedule-modal.component */
    "./src/app/program/schedule-modal/schedule-modal.component.ts");
    /* harmony import */


    var _participants_participants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../participants/participants.component */
    "./src/app/program/participants/participants.component.ts");
    /* harmony import */


    var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../equipments/equipments.component */
    "./src/app/program/equipments/equipments.component.ts");
    /* harmony import */


    var _ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ad-details/ad-details.component */
    "./src/app/program/ad-details/ad-details.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../modalContent/verify-user-info/verify-user-info.component */
    "./src/app/modalContent/verify-user-info/verify-user-info.component.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../../chats/chat-rooms/chat-rooms.component */
    "./src/app/chats/chat-rooms/chat-rooms.component.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./../../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/add-program/view-video-detail/view-video-detail.component */
    "./src/app/add-program/view-video-detail/view-video-detail.component.ts");
    /* To try the app with Enablex hosted service you need to set the kTry = true */


    var kTry = true;
    /*Your webservice host URL, Keet the defined host when kTry = true */

    var kBasedURL = "https://demo.enablex.io/";
    /*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/

    /*Use enablec portal to create your app and get these following credentials*/

    var kAppId = "601a75829370a5441339e5c2";
    var kAppkey = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";

    var NewProgramInnerPage = /*#__PURE__*/function () {
      function NewProgramInnerPage(commonService, navCtrl, actRoute, programService, androidPermissions, platform, router, httpClient, chatService, modalCtrl, socialSharing, nutritionService) {
        _classCallCheck(this, NewProgramInnerPage);

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
          interests: ['Ionic', 'Angular', 'YouTube', 'Sports']
        };
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].imgUrl;
        this.vidUrl = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].progVidUrl;
        this.progImage = false;
        this.progVideo = false;
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.ANDROID_PERMISSIONS = [this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.RECORD_AUDIO, this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS];
        this.trilloverify = true;
        this.tick = 1000;
        this.scheduleProgram = 'program';
        this.slideOpts = {
          slidesPerView: 3,
          zoom: false
        };
      }

      _createClass(NewProgramInnerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRoute.paramMap.subscribe(function (params) {
            _this.programId = params.get('programId');
          });
          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.userName = this.userData.user_name;
          this.programService.getProgramById({
            'parentId': this.programId
          }).subscribe(function (data) {
            console.log(data);
            console.log(data.cloneList);
            _this.allProgram = data.cloneList;

            _this.allProgram.filter(function (el) {
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

            var nutriArr = [];
            data.cloneList.forEach(function (el) {
              if (el.nutrition_id != null) {
                nutriArr.push(el.nutrition_id);
              }
            });

            _this.nutritionService.getNutritionById({
              'nutriId': nutriArr.toLocaleString()
            }).subscribe(function (ndata) {
              _this.nutritionList = ndata.nutritionList;

              _this.nutritionList.forEach(function (el) {
                console.log(el.image_path);
                console.log(el.image_path.split(','));
                var imgArr = el.image_path.split(','); //  console.log(this.nutritionList[el]);

                el.fImage = imgArr[0];
              });

              console.log(_this.nutritionList);

              _this.commonService.dismissLoader();
            }, function (err) {
              _this.commonService.dismissLoader();

              _this.commonService.presentToast("Couldnt load data, Something went wrong.");
            });
          }, function (err) {
            _this.commonService.dismissLoader();

            _this.commonService.presentToast("Couldnt load data, Something went wrong.");
          });
        }
      }, {
        key: "initRoom",
        value: function initRoom() {
          var _this2 = this;

          if (this.userName.length == 0) {
            alert("Kindly Enter Your name");
            return;
          }

          var hedare = kTry ? {
            "x-app-id": kAppId,
            "x-app-key": kAppkey,
            "Accept": "application/json",
            "Content-Type": "application/json"
          } : {
            "Accept": "application/json",
            "Content-Type": "application/json"
          };
          var url = kBasedURL + "createRoom";
          console.log("Url Faired" + url);
          this.httpClient.post(url, {}, {
            headers: hedare
          }).subscribe(function (data) {
            var room = data["room"];
            var room_ID = room["room_id"];
            _this2.roomID = room_ID;
          }, function (error) {
            console.log("Enablex service failed");
            console.log(error);
          });
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal(data) {
          console.log(data);
          this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_20__["NutritionModalComponent"], 'fullModal', {
            'data': data
          });
        }
      }, {
        key: "showVideoDetails",
        value: function showVideoDetails(item, videoIDs) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_21__["ViewVideoDetailComponent"], 'fullModal', {
                      'details': item,
                      'videoIds': videoIDs
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "joinRoom",
        value: function joinRoom() {
          var _this3 = this;

          if (this.roomID.length == 0) {
            alert("Kindly Enter Room ID");
            return;
          } // alert(this.roomID);


          console.log(this.roomID, 'room id');
          var loginString = {
            "name": this.userName,
            "role": "moderator",
            "user_ref": "2236",
            "roomId": this.roomID
          };
          var hedare = kTry ? {
            "x-app-id": kAppId,
            "x-app-key": kAppkey,
            "Accept": "application/json",
            "Content-Type": "application/json"
          } : {
            "Accept": "application/json",
            "Content-Type": "application/json"
          };
          var url = kBasedURL + "createToken";
          console.log("Url Faired" + url);
          this.httpClient.post(url, loginString, {
            headers: hedare
          }).subscribe(function (data) {
            console.log("Hello service done" + data["token"]);
            var navigationExtras = {
              queryParams: {
                token: data["token"],
                name: _this3.userName,
                role: "moderator",
                user_ref: "user_ref",
                roomId: _this3.roomID,
                description: _this3.programDescription,
                programId: _this3.programId,
                programTitle: _this3.programTitle,
                participants: _this3.participants,
                duration: _this3.programDurations,
                program_type: _this3.programType,
                program_fee: _this3.programFee,
                program_img: _this3.programImage
              }
            };
            _this3.enxData = {
              token: data["token"],
              name: _this3.userName,
              role: "moderator",
              user_ref: "user_ref",
              room_id: _this3.roomID,
              program_id: _this3.programId,
              is_active: 1,
              user_id: _this3.userData.id,
              description: _this3.programDescription,
              participants: _this3.participants,
              duration: _this3.programDurations
            };

            _this3.programService.setEnxData(_this3.enxData).subscribe(function (data) {
              console.log("EnxData: " + JSON.stringify(data));
            });

            _this3.navCtrl.navigateForward(['confrence'], navigationExtras);
          }, function (error) {
            console.log("Hello service failed");
            console.log(error);
          });
          console.log("ClickEvent Join event");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this4 = this;

          console.log('ionviewwillenter');
          this.commonService.presentLoader();
          this.programService.getProgramById({
            "programId": this.programId
          }).subscribe(function (data) {
            // console.log(data,'pdata');
            // console.log(data.programData.parent_program);
            if (data.programData.parent_program == null) {
              console.log('nullll');
              _this4.parentProgId = data.programData.id;
            } else {
              _this4.parentProgId = data.programData.parent_program;
            }

            _this4.programService.getProgramById({
              "parentId": _this4.parentProgId
            }).subscribe(function (data) {
              _this4.upcomingList = _this4.getCounter(data.cloneList);
              _this4.allProgramData = _this4.upcomingList; // console.log(data, 'programData');

              console.log(_this4.allProgramData, 'allProgramData');
            });

            _this4.programDetail = data.programData;
            _this4.equipmentsData = _this4.programDetail.equipments;
            console.log("PG: " + _this4.programDetail.video_id);
            console.log("PG: " + JSON.stringify(_this4.programDetail));
            console.log(data.programData.image_path[0] + 'ddddddd');
            _this4.firstImg = '';

            if (data.programData.image_path != '') {
              _this4.firstImg = data.programData.image_path[0]; // this.progImage = data.programData.image_path;

              _this4.progImage = true;
            } else {
              _this4.progImage = false;
            }

            if (data.programData.video_path != null) {
              // this.progImage = data.programData.image_path;
              console.log('nooooooo');
              _this4.progVideo = true;
            } else {
              _this4.progVideo = false;
            }

            console.log(data.programData.video_path + 'progImage');
            console.log(_this4.progVideo + 'iddddd'); //https://ionicinto.wdipl.com/storage/app/public/prog_upload_videos
            //https://ionicinto.wdipl.com/storage/app/public/prog_upload_videos/prog_upload_videosprog20210810114016_final.mp4

            console.log(_this4.programDetail.video_path + 'video_path');
            _this4.programTitle = data.programData.title;
            _this4.requestSent = data.programData.request_sent;

            if (_this4.programDetail.payment_type == 'Paid') {
              _this4.programFee = _this4.programDetail.program_fee;
            } else if (_this4.programDetail.payment_type == 'Free') {
              _this4.programFee = _this4.programDetail.payment_type;
            } //1 = private , 2 = closed , 3 = public


            _this4.programType = data.programData.type_id;

            if (_this4.programType == 'private oneway' || _this4.programType == 'private twoway') {
              _this4.participants = 2;
            } else if (_this4.programType == 'group oneway' || _this4.programType == 'group twoway') {
              _this4.participants = 50;
            } else {
              _this4.participants = 100;
            }

            _this4.programDurations = data.programData.program_duration;
            _this4.programDescription = data.programData.description; // this.programDetail.live = true;

            _this4.initRoom();

            _this4.programDetail.img_array = data.programData.image_path.split(',');
            _this4.programImage = _this4.programDetail.img_array[0]; //  ------------ C O U N T   D O W N   T I M E R ---------

            var a = new Date(_this4.programDetail.program_date + 'Z');
            _this4.programDateTime = a;
            var b = new Date();
            var c;

            if (a > b) {
              c = Math.abs(a - b) / 1000;
              _this4.programDetail.cd = c;
              console.log(_this4.programDetail.cd);
              _this4.days = Math.abs((c - b) / (1000 * 60 * 60 * 24));
              _this4.dd = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
                if (_this4.programDetail.cd > 0) {
                  --_this4.programDetail.cd;
                }

                return ~~(_this4.programDetail.cd / (60 * 60 * 24));
              }));
              console.log(_this4.dd);
              _this4.ss = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
                if (_this4.programDetail.cd > 0) {
                  --_this4.programDetail.cd;
                }

                return ~~(_this4.programDetail.cd % 3600 % 60);
              }));
              _this4.mm = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
                // if (this.programDetail.cd > 0) {
                //  // --this.programDetail.cd;
                // }
                return ~~(_this4.programDetail.cd % 3600 / 60);
              }));
              _this4.hh = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
                if (_this4.programDetail.cd <= 5) {
                  _this4.programDetail.live = true;

                  _this4.initRoom();
                }

                if (_this4.programDetail.cd > 0) {//--this.programDetail.cd;
                } else {
                  _this4.programDetail.cd = 0;
                  return 0;
                }

                return ~~(_this4.programDetail.cd / (60 * 60) % 24);
              }));
              console.log(_this4.hh);
            } else {
              c = 0;

              if (new Date(_this4.programDetail.program_end_time + 'Z') > new Date()) {
                _this4.programDetail.live = true;

                _this4.initRoom();

                console.log('program Live');
              } else {
                _this4.programDetail.ended = true;
                console.log('program end');
              }
            } // console.log(this.programDetail.live + 'psss');


            console.log(_this4.programDetail.cd + 'ssss'); //----------------------------------------

            _this4.broadcastId = 'programId_' + data.programData.id;
            var payload = '';

            if (_this4.programDetail.is_requested) {
              payload = _this4.programDetail.request_recive;
            } else {
              payload = _this4.programDetail.request_sent + ',' + _this4.programDetail.request_accepted;
            }

            _this4.commonService.getUsersById({
              "userId": payload
            }).subscribe(function (data) {
              _this4.userList = data.userList;
              console.log(_this4.userList + 'this.userList');
              console.log(payload + 'payload');
            }); //--------------------------------------


            var advtProgId;

            if (_this4.programDetail.parent_program) {
              advtProgId = _this4.programDetail.parent_program;
            } else {
              advtProgId = _this4.programDetail.id;
            }

            _this4.programService.getAdDetail({
              'programId': _this4.programId
            }).subscribe(function (data) {
              _this4.adData = data.data;
              console.log(_this4.adData);
              console.log(_this4.hh);

              _this4.commonService.dismissLoader();
            }, function (err) {
              _this4.commonService.dismissLoader();
            });
          }, function (err) {
            _this4.commonService.dismissLoader();

            _this4.commonService.presentToast("Couldnt load data, Something went wrong.");
          });
          this.programService.fetchSelectedEquipmentList({
            'programId': this.programId
          }).subscribe(function (data) {
            console.log(data);
            _this4.equipmentsList = data.equipmentList;
          });
        }
      }, {
        key: "showSchedule",
        value: function showSchedule(event) {
          this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleModalComponent"], 'fullModal', {
            'programDetail': event,
            'user_type': this.userData.user_type
          });
        }
      }, {
        key: "showParticipants",
        value: function showParticipants() {
          this.commonService.presentModal(_participants_participants_component__WEBPACK_IMPORTED_MODULE_4__["ParticipantsComponent"], 'fullModal', {
            'userList': this.userList,
            'programDetails': this.programDetail
          });
        }
      }, {
        key: "disclass",
        value: function disclass() {
          this.commonService.presentToast("Program is not live yet.");
        }
      }, {
        key: "getCounter",
        value: function getCounter(elementArr) {
          console.log(elementArr, 'elementArr');
          elementArr.filter(function (el) {
            el.convertedTime = new Date(el.program_date + 'Z');
            var a = new Date(el.program_date + 'Z');
            var b = new Date();
            var c;

            if (a > b) {
              c = Math.abs(a - b) / 1000;
            } else {
              c = 0;
              el.live = true;
            }

            el.cd = c;
            setInterval(function () {
              if (parseInt(el.cd) > 0) el.cd = parseInt(el.cd) - 1;
              el.hh = ~~(el.cd / (60 * 60));
              el.mm = ~~(el.cd % 3600 / 60);
              el.ss = el.cd % 3600 % 60;
            }, 1000);
            return el;
          });
          return elementArr;
        }
      }, {
        key: "equipments",
        value: function equipments() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentsComponent"],
                      cssClass: 'halfModal',
                      componentProps: {
                        "programDetail": this.programDetail
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (d) {
                      _this5.programDetail.equipments = d.data;
                      console.log(d);
                      console.log(_this5.programDetail.equipments);
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
        key: "showChatUsers",
        value: function showChatUsers() {
          var _this6 = this;

          if (this.programType != "public") {
            this.commonService.presentLoader();
            this.chatService.checkChatProgram({
              'programId': this.programId,
              'type': 3
            }).subscribe(function (data) {
              if (data.id > 0) {
                _this6.commonService.dismissLoader();

                var chatRoom = data.room_id;
                var chatReceiverId = data.group_id;
                var chatType = 2;
                var fileData = {
                  chatType: chatType,
                  room: chatRoom,
                  receiverId: parseInt(chatReceiverId)
                };

                _this6.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__["ChatRoomsComponent"], 'fullModal', fileData);
              } else {
                _this6.commonService.dismissLoader(); // chat_type = 1:consultant,2:user,3:program


                _this6.router.navigate(["/first-message/" + _this6.programId + "/3"]);
              }
            }, function (err) {
              _this6.commonService.presentToast("Couldnt load data, Something went wrong.");

              _this6.commonService.dismissLoader();
            });
          } else {
            this.commonService.presentToast("Chat Not Allow on Public Program");
          }
        }
      }, {
        key: "applyAdvertise",
        value: function applyAdvertise() {
          var _this7 = this;

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

              _this7.sendrequest();
            }
          }];

          if (this.loginUserData.trilloMatch != 1) {
            this.verifyUser();
          } else {
            this.commonService.presentAlert(title, msg, btn, 'custom-alert advertiseAlert');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "verifyUser",
        value: function verifyUser() {
          this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_13__["VerifyUserInfoComponent"], 'fullpage', '');
        }
      }, {
        key: "sendrequest",
        value: function sendrequest() {
          var _this8 = this;

          if (this.programDetail.type_id == 'video') {
            // console.log('programId:'+this.programDetail.id);
            this.programService.advertiseRequest({
              'programId': this.programDetail.id
            }).subscribe(function (data) {
              _this8.adData = data.status;
            });
          } else {
            this.commonService.presentToast('Only Video Program are eligible');
          }
        }
      }, {
        key: "showSponsersList",
        value: function showSponsersList() {
          this.commonService.presentModal(_ad_details_ad_details_component__WEBPACK_IMPORTED_MODULE_6__["AdDetailsComponent"], 'fullModal', {
            'adDetails': this.adData
          });
        }
      }, {
        key: "broadcast",
        value: function broadcast() {
          var navigationExtras = {
            state: {
              user: this.user
            }
          };
          this.router.navigate(['/broadcast'], navigationExtras); // this.checkAndroidPermissions();
        }
      }, {
        key: "shareItem",
        value: function shareItem() {
          this.socialSharing.share("Program Details", "", "", "program-view/" + this.programDetail.id).then(function () {})["catch"](function () {});
        }
      }, {
        key: "goBack",
        value: function goBack() {
          // this.navCtrl.back();
          this.router.navigate(['/new-schedule-program']);
        }
      }]);

      return NewProgramInnerPage;
    }();

    NewProgramInnerPage.ctorParameters = function () {
      return [{
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_15__["ChatService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"]
      }, {
        type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_19__["NutritionService"]
      }];
    };

    NewProgramInnerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-program-inner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-program-inner.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-inner/new-program-inner.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-program-inner.page.scss */
      "./src/app/program/new-program-inner/new-program-inner.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_15__["ChatService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_19__["NutritionService"]])], NewProgramInnerPage);
    /***/
  }
}]);
//# sourceMappingURL=program-new-program-inner-new-program-inner-module-es5.js.map