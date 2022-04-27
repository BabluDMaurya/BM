function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-new-program-view-new-program-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramNewProgramViewNewProgramViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <!-- <ion-label>{{programDetail?.title}}</ion-label> -->\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <div class=\"right-div\">\r\n      <ion-item *ngIf=\"programDetail?.is_requested == 1\"  detail=\"false\" class=\"icon-right-side ion-text-end min-width-none pl-8\" slot=\"end\" (click)=\"shareItem()\">\r\n        <ion-icon ios=\"ios-share\" md=\"md-share\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n    \r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        \r\n        </ion-slides>\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>            \r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img class=\"cover-img\" [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list class=\"ion-no-padding\">\r\n        <ion-item-group>\r\n          <ion-item-divider class=\"ionic-divider\" lines=\"none\" sticky>\r\n            <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n              <ion-segment class=\"ion-no-padding\" [(ngModel)]=\"scheduleProgram\">\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"program\" checked>\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-clipboard\" md=\"md-clipboard\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"videos\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"chat\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"programtype\">\r\n                  <img class=\"ionic-img\" src=\"../../../assets/images/target.svg\" />\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n          </ion-item-divider>\r\n          <ion-item-sliding>\r\n            <div [ngSwitch]=\"scheduleProgram\">\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'program'\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                    <div class=\"programDesc\">\r\n                      <!-- <p>{{programDetail?.description }} &nbsp;</p>         -->\r\n                      <p>{{programDetail?.description }}</p>\r\n                    </div>\r\n                    <!-- <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n                      <ion-item class=\"d-flex\">\r\n                          <span *ngFor=\"let user  of userList\">\r\n                            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n                            <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n                          </span>\r\n                          <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n                      </ion-item>\r\n                    </ion-list> -->\r\n                  </ion-col>\r\n                  <!-- <ion-col class=\"infoBox\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n                    <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request recived yet</h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to verify. </h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n                  </ion-col> -->\r\n                  <ion-col size=\"12\" style=\"position: static;\" class=\"ion-no-padding  green-text\">\r\n                    <!-- <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text> -->\r\n                    <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 1\"> \r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended && dd > 0\">\r\n                      <ion-text><p class=\"count_time\">{{dd | async}}</p> Days</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text><p class=\"count_time\">{{hh | async }}  </p> Hours</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text><p class=\"count_time\">{{mm| async}}</p> Minutes</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\"> \r\n                    <ion-text><p class=\"count_time\">{{ss | async}}</p> Seconds</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n                    <ion-text>This Program has been Ended </ion-text>\r\n                  </ion-col>\r\n                </ion-row> \r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 0\"> \r\n                  <ion-col size=\"6\" class=\"ion-padding timer-block\" >\r\n                      <ion-text>Non-Live Program</ion-text>\r\n                  </ion-col>\r\n                </ion-row> \r\n                <ion-button *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRequest()\" >Request To Join</ion-button> \r\n                <ion-button *ngIf=\"request_accs_pending && !programDetail?.ended\" size=\"small\" class=\"green btnVerify\" (click)=\"acceptRequest()\" >Accept Request</ion-button>      \r\n                <div class=\"users-list ion-text-center\" *ngIf=\"programDetail?.is_live_status == 1\">\r\n                  <!-- <ion-button (click)=\"joinRoom()\">Join Room</ion-button> -->\r\n                  <ion-button *ngIf=\"request_accs && !programDetail?.live && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\">Program will start sooon</ion-button>\r\n                  <!-- <ion-button *ngIf=\"request_accs && !programDetail?.live\" size=\"small\"  class=\"green btnVerify\" (click)=\"payment()\">Payment</ion-button> -->\r\n                  <ion-button *ngIf=\"programDetail?.ready  \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button>\r\n                  <!-- <ion-button *ngIf=\"programDetail?.ready && prePayment \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button> -->\r\n                  \r\n                  <!-- <div *ngIf=\"request_accs && !programDetail?.live\" size=\"medium\"  >Program will start sooon   \r\n                  </div>\r\n                  <div *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"medium\"  (click)=\"joinRoom()\" >Requested to join Program \r\n                  </div> -->\r\n                </div>\r\n\r\n                <ion-item class=\"list-items ion-text-center\">\r\n                  <div class=\"icon-text\" style=\"width: 100%;\">\r\n                  <ion-label>Program: {{programDetail?.video_id.split(\",\").length}} Videos, ${{programFee}}</ion-label>\r\n                  </div>          \r\n                </ion-item>\r\n              </ion-list> \r\n              \r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'videos'\">\r\n                <div class=\"program-card\" *ngFor=\"let val of allProgramData; let i=index;\">\r\n                  <div class=\"programs-date\">\r\n                    <p class=\"fs-16 mb-10\">{{val.program_date |date:'medium'}}</p>\r\n                  </div>\r\n                  <div class=\"programs-flex\">\r\n                    <div class=\"program-session program-flex-child\" *ngIf=\"val.is_live_status == 1\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Session</p>\r\n                    </div>\r\n                    <div class=\"program-video program-flex-child\" *ngIf=\"val.video_id != '' \"  (click)=\"showVideoDetails(val.id,val.video_id)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Video</p>\r\n                    </div>\r\n                    <div class=\"program-nutrition program-flex-child\" *ngIf=\"val.nutrition_id != '' \" (click)=\"nutritionModal(val)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n                      <p class=\"fs-14\">Nutrition</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'chat'\">\r\n                <div class=\"program-chat\">\r\n                  <!-- <ion-avatar>\r\n                    <img src=\"../../assets/images/bgimage.png\" alt=\"\">\r\n                  </ion-avatar>\r\n                  <div class=\"program-chat-info\">\r\n                    <div class=\"chat-title\">\r\n                      <h6>Rock Sam</h6>\r\n                      <p>11:09 AM</p>\r\n                    </div>\r\n                    <div class=\"chat-info\">\r\n                      <span>Good morning rock</span>\r\n                    </div>\r\n                  </div> -->\r\n                 <p>No Chat available</p>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'programtype'\">\r\n                <div class=\"program-card\">\r\n                  <ion-slides [pager]=\"true\">\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                  </ion-slides>\r\n                </div>\r\n              </ion-list>\r\n            </div>\r\n          </ion-item-sliding>\r\n        </ion-item-group>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: NewProgramViewPageRoutingModule */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramViewPageRoutingModule", function () {
      return NewProgramViewPageRoutingModule;
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


    var _new_program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-program-view.page */
    "./src/app/program/new-program-view/new-program-view.page.ts");

    var routes = [{
      path: '',
      component: _new_program_view_page__WEBPACK_IMPORTED_MODULE_3__["NewProgramViewPage"]
    }];

    var NewProgramViewPageRoutingModule = function NewProgramViewPageRoutingModule() {
      _classCallCheck(this, NewProgramViewPageRoutingModule);
    };

    NewProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewProgramViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NewProgramViewPageModule */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramViewPageModule", function () {
      return NewProgramViewPageModule;
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


    var _new_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-program-view-routing.module */
    "./src/app/program/new-program-view/new-program-view-routing.module.ts");
    /* harmony import */


    var _new_program_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-program-view.page */
    "./src/app/program/new-program-view/new-program-view.page.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var NewProgramViewPageModule = function NewProgramViewPageModule() {
      _classCallCheck(this, NewProgramViewPageModule);
    };

    NewProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewProgramViewPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]],
      declarations: [_new_program_view_page__WEBPACK_IMPORTED_MODULE_6__["NewProgramViewPage"]]
    })], NewProgramViewPageModule);
    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".right-div {\n  display: flex;\n  align-items: center; }\n  .right-div .min-width-none {\n    min-width: 0px !important; }\n  .right-div .pl-8 {\n    padding-left: 8px !important; }\n  .main_content ion-row ion-col .item-content ion-thumbnail .cover-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n  .ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n  .ionic-divider .three-tabs ion-segment ion-segment-button {\n    width: auto; }\n  .ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n  .ionic-divider .three-tabs ion-segment ion-segment-button {\n    width: auto; }\n  .ionic-divider ion-segment-button {\n    min-height: 38px;\n    color: #000;\n    text-transform: capitalize;\n    letter-spacing: 0; }\n  .ionic-divider ion-segment-button .ionic-icon {\n      font-size: 2rem !important; }\n  .ionic-divider ion-segment-button .ionic-img {\n      width: 2rem;\n      height: 2rem; }\n  .ionic-divider ion-segment-button .live-icon {\n      padding: 5px 10px;\n      background: #555;\n      color: #fff;\n      border-radius: 20px; }\n  .ionic-divider ion-segment-button .live-icon span {\n        font-size: 10px;\n        color: #fff; }\n  .programDesc p {\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px; }\n  .program-date {\n  color: #27a69a;\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px; }\n  .fs-16 {\n  font-size: 16px;\n  line-height: 1.5; }\n  .fs-14 {\n  font-size: 16px;\n  line-height: 1.5; }\n  .program-card {\n  padding: 10px 15px; }\n  .program-card ion-slides {\n    height: 200px; }\n  .program-card ion-slides ion-slide img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center;\n         object-position: center; }\n  .program-card .programs-flex {\n    display: flex; }\n  .program-card .programs-flex .program-flex-child {\n      width: 30%;\n      height: 100px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border-radius: 10px;\n      background: #27a69a;\n      color: #fff;\n      margin-left: 5%; }\n  .program-card .programs-flex .program-flex-child .ionic-icon {\n        font-size: 1.5rem !important; }\n  .program-card .programs-flex .program-flex-child:first-child {\n      margin-left: 0; }\n  .program-chat {\n  display: flex;\n  padding: 10px 15px;\n  align-items: center; }\n  .program-chat ion-avatar {\n    margin-right: 15px;\n    min-width: 50px;\n    min-height: 50px; }\n  .program-chat .program-chat-info {\n    flex: 1;\n    width: 80%; }\n  .program-chat .program-chat-info .chat-title {\n      display: flex;\n      justify-content: space-between; }\n  .program-chat .program-chat-info .chat-title h6 {\n        font-size: 16px;\n        margin-top: 0;\n        margin-bottom: 0;\n        font-weight: 400;\n        color: #121212;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        flex: 1; }\n  .program-chat .program-chat-info .chat-title p {\n        color: #cecece;\n        margin-left: 15px; }\n  .program-chat .program-chat-info .chat-info span {\n      font-size: 14px;\n      color: #555;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden; }\n  .counter-box {\n  align-items: center; }\n  .counter-box .timer-block {\n    align-items: center;\n    background: #27a69a; }\n  .counter-box .timer-block ion-text {\n      color: #fff; }\n  .counter-box .timer-block ion-text p {\n        color: #fff;\n        font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS12aWV3L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9ncmFtXFxuZXctcHJvZ3JhbS12aWV3XFxuZXctcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZ2QjtJQUlRLHlCQUF5QixFQUFBO0VBSmpDO0lBT1EsNEJBQTRCLEVBQUE7RUFJcEM7RUFNd0Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwwQkFBdUI7S0FBdkIsdUJBQXVCLEVBQUE7RUFPL0M7RUFDSSxxQ0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG1DQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTtFQUZ0QztJQUlRLFdBQVcsRUFBQTtFQUduQjtFQUNJLHFDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsbUNBQWtDO1VBQWxDLGtDQUFrQyxFQUFBO0VBRnRDO0lBSVEsV0FBVyxFQUFBO0VBSm5CO0lBT1EsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsaUJBQWlCLEVBQUE7RUFWekI7TUFZWSwwQkFBMEIsRUFBQTtFQVp0QztNQWVZLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFoQnhCO01BbUJZLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLG1CQUFtQixFQUFBO0VBdEIvQjtRQXdCZ0IsZUFBZTtRQUNmLFdBQVcsRUFBQTtFQUszQjtFQUNNLGdCQUFnQjtFQUFFLGtCQUFrQjtFQUFFLGVBQWUsRUFBQTtFQUUzRDtFQUNJLGNBQWM7RUFBRSxnQkFBZ0I7RUFBRSxrQkFBa0I7RUFBRSxlQUFlLEVBQUE7RUFFekU7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLGFBQWEsRUFBQTtFQUhyQjtNQU1nQixXQUFXO01BQ1gsWUFBWTtNQUNaLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIsMEJBQXVCO1NBQXZCLHVCQUF1QixFQUFBO0VBVHZDO0lBZ0JRLGFBQWEsRUFBQTtFQWhCckI7TUFtQlksVUFBVTtNQUNWLGFBQWE7TUFDYixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsZUFBZSxFQUFBO0VBNUIzQjtRQThCZ0IsNEJBQTRCLEVBQUE7RUE5QjVDO01Ba0NZLGNBQWMsRUFBQTtFQUkxQjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFIdkI7SUFLUSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBUHhCO0lBVVEsT0FBTztJQUNQLFVBQVUsRUFBQTtFQVhsQjtNQWFZLGFBQWE7TUFDYiw4QkFBOEIsRUFBQTtFQWQxQztRQWdCZ0IsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixPQUFPLEVBQUE7RUF4QnZCO1FBMkJnQixjQUFjO1FBQ2QsaUJBQWlCLEVBQUE7RUE1QmpDO01BaUNnQixlQUFlO01BQ2YsV0FBVztNQUNYLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7RUFNaEM7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUdRLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQUozQjtNQU1ZLFdBQVcsRUFBQTtFQU52QjtRQVFnQixXQUFXO1FBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS12aWV3L25ldy1wcm9ncmFtLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yaWdodC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5taW4td2lkdGgtbm9uZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAucGwtOHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuLm1haW5fY29udGVudHtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgLml0ZW0tY29udGVudHtcclxuICAgICAgICAgICAgICAgIGlvbi10aHVtYm5haWx7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvdmVyLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaW9uaWMtZGl2aWRlcntcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAudGhyZWUtdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi5pb25pYy1kaXZpZGVye1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcclxuICAgIC50aHJlZS10YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAuaW9uaWMtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pb25pYy1pbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXZlLWljb257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wcm9ncmFtRGVzY3tcclxuICAgIHB7bGluZS1oZWlnaHQ6IDEuNTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDE0cHg7fVxyXG59XHJcbi5wcm9ncmFtLWRhdGV7XHJcbiAgICBjb2xvcjogIzI3YTY5YTsgbGluZS1oZWlnaHQ6IDEuNTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZzLTE2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uZnMtMTR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5wcm9ncmFtLWNhcmR7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBpb24tc2xpZGVze1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgaW9uLXNsaWRle1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZ3JhbXMtZGF0ZXtcclxuICAgIH1cclxuICAgIC5wcm9ncmFtcy1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5wcm9ncmFtLWZsZXgtY2hpbGR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAuaW9uaWMtaWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyYW0tZmxleC1jaGlsZDpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wcm9ncmFtLWNoYXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2dyYW0tY2hhdC1pbmZve1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAuY2hhdC10aXRsZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2VjZWNlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYXQtaW5mb3tcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG4uY291bnRlci1ib3h7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnRpbWVyLWJsb2Nre1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view.page.ts ***!
    \*******************************************************************/

  /*! exports provided: NewProgramViewPage */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramViewPage", function () {
      return NewProgramViewPage;
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


    var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../equipments/equipments.component */
    "./src/app/program/equipments/equipments.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/internal/observable/timer */
    "./node_modules/rxjs/internal/observable/timer.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../chats/chat-rooms/chat-rooms.component */
    "./src/app/chats/chat-rooms/chat-rooms.component.ts");
    /* harmony import */


    var src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/modalContent/payment/payment.component */
    "./src/app/modalContent/payment/payment.component.ts");
    /* harmony import */


    var process__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! process */
    "./node_modules/process/browser.js");
    /* harmony import */


    var process__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
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

    var NewProgramViewPage = /*#__PURE__*/function () {
      function NewProgramViewPage(commonService, navCtrl, actRoute, programService, localNotifications, httpClient, router, chatService, socialSharing) {
        _classCallCheck(this, NewProgramViewPage);

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
        this.prePayment = true; //

        this.userName = "Bablu";
        this.roomID = "";
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.progImage = false;
        this.progVideo = false;
        this.intoProg = [];
        this.scheduleProgram = 'program';
        this.userData = JSON.parse(localStorage.getItem('userData'));
      }

      _createClass(NewProgramViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRoute.paramMap.subscribe(function (params) {
            _this.programId = params.get('programId');
          });
          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.totalIntoFee = 0;
          this.min = 0;
          this.totalMin = 0;
          this.Mins = 0;
          this.programService.getIntoActivePendingPaymentStatus('').subscribe(function (data) {
            _this.intoActivePaid = data.data; // console.log(this.intoActivePaid);

            _this.intoActivePaid.forEach(function (el) {
              if (el.type_id == 3) {
                _this.minute = el.time / 60 * 0.008;
                _this.mms = el.time / 60;
              } else if (el.type_id == 4) {
                _this.minute = el.time / 60 * 0.0075;
                _this.mms = el.time / 60;
              }

              _this.totalIntoFee = parseFloat(_this.minute) + parseFloat(_this.min);
              _this.totalMin = parseFloat(_this.mms) + parseFloat(_this.Mins);
              _this.min = _this.totalIntoFee;
              _this.Mins = _this.totalMin;

              _this.intoProg.push(el.prog_id);

              var img = '';

              if (el.image_path != '') {
                var image = el.image_path.split(',');
                img = image[0];
              }

              if (_this.Mins > 140) {
                console.log(_this.intoProg);
                var fileData = {
                  pgid: _this.intoProg,
                  pgname: el.title,
                  pgamount: _this.totalIntoFee,
                  pgimg: img,
                  routeLink: 'progView',
                  type: '1'
                };

                _this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);

                Object(process__WEBPACK_IMPORTED_MODULE_16__["exit"])();
                return false;
              } // console.log(this.Mins);
              // console.log(this.totalIntoFee);

            }); // console.log(this.totalIntoFee);
            // console.log(this.Mins);


            console.log(_this.Mins);
            console.log('getIntoActivePendingPaymentStatus');
          });
          this.programService.getPaymentStatus().subscribe(function (data) {
            _this.paymentPending = data;

            if (_this.paymentPending.data.length > 0) {
              console.log(_this.paymentPending);
              var i = 0;

              _this.paymentPending.data.forEach(function (el) {
                _this.programService.getPendingPaymentStatus({
                  'program_id': el.id
                }).subscribe(function (data) {
                  if (i == 0) {
                    if (data.data == 0) {
                      _this.prePayment = false;
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

                      _this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData); // this.pendingPayment();


                      i++;
                    }
                  }
                });
              });
            }
          });
          this.programService.getEnxData({
            'program_id': this.programId
          }).subscribe(function (data) {
            console.log("EnxData User: " + JSON.stringify(data));
            _this.userName = _this.userData.user_name;
            _this.roomID = data.room_id;
          });
        }
      }, {
        key: "joinRoom",
        value: function joinRoom() {
          var _this2 = this;

          if (this.roomID.length == 0) {
            alert("Kindly Enter Room ID");
            return;
          } // alert(this.roomID);


          this.programService.getEnxData({
            'program_id': this.programId
          }).subscribe(function (data) {
            console.log("EnxData User: " + JSON.stringify(data));
            _this2.userName = _this2.userData.user_name;
            _this2.roomID = data.room_id;
          });
          var loginString = {
            "name": this.userName,
            "role": "participant",
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
                name: _this2.userName,
                role: "participant",
                user_ref: "user_ref",
                roomId: _this2.roomID,
                description: _this2.programDescription,
                programId: _this2.programId,
                programTitle: _this2.pgtitle,
                participants: _this2.participants,
                duration: _this2.programDurations,
                program_type: _this2.programType,
                program_fee: _this2.programFee,
                program_img: _this2.programImage
              }
            };

            _this2.navCtrl.navigateForward(['confrence'], navigationExtras);
          }, function (error) {
            console.log("Hello service failed");
            console.log(error);
          });
          console.log("ClickEvent Join event");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          this.programService.getProgramById({
            "programId": this.programId
          }).subscribe(function (data) {
            _this3.programDetail = data.programData;
            console.log('starttttttt');
            console.log(_this3.programDetail);
            console.log(_this3.programDetail.is_requested);
            console.log(_this3.request_join);
            console.log(_this3.prePayment);
            console.log('enddddddddd');

            if (data.programData.parent_program == null) {
              console.log('nullll');
              _this3.parentProgId = data.programData.id;
            } else {
              _this3.parentProgId = data.programData.parent_program;
            }

            _this3.programService.getProgramById({
              "parentId": _this3.parentProgId
            }).subscribe(function (data) {
              _this3.allProgramData = data.cloneList;
              console.log(data, 'programData');
              console.log(_this3.parentProgId);
            });

            _this3.broadcastId = 'programId_' + data.programData.id;
            _this3.programType = data.programData.type_id;
            _this3.pgtitle = data.programData.title;

            if (_this3.programDetail.payment_type == 'Paid') {
              _this3.programFee = _this3.programDetail.program_fee;
            } else if (_this3.programDetail.payment_type == 'Free') {
              _this3.programFee = _this3.programDetail.payment_type;
            }

            if (_this3.programType == 'private oneway' || _this3.programType == 'private twoway') {
              _this3.participants = 2;
            } else if (_this3.programType == 'group oneway' || _this3.programType == 'group twoway') {
              _this3.participants = 50;
            } else {
              _this3.participants = 100;
            }

            _this3.programDurations = data.programData.program_duration;
            _this3.programDescription = data.programData.description;

            if (data.programData.image_path != '') {
              // this.progImage = data.programData.image_path;
              _this3.progImage = true;
            } else {
              _this3.progImage = false;
            }

            if (data.programData.video_path != null) {
              // this.progImage = data.programData.image_path;
              _this3.progVideo = true;
            } else {
              _this3.progVideo = false;
            }

            if (data.programData.image_path) {
              _this3.programDetail.img_array = data.programData.image_path.split(',');
              _this3.programImage = _this3.programDetail.img_array[0];
            } //  ------------ C O U N T   D O W N   T I M E R ---------


            var a = new Date(_this3.programDetail.program_date + 'Z');
            _this3.programDateTime = a;
            var b = new Date();
            var c;

            if (a > b) {
              c = Math.abs(a - b) / 1000;
              _this3.programDetail.cd = c;
              _this3.dd = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this3.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this3.programDetail.cd > 0) {
                  --_this3.programDetail.cd;
                }

                return ~~(_this3.programDetail.cd / (60 * 60 * 24));
              }));
              _this3.ss = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this3.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this3.programDetail.cd > 0) {
                  --_this3.programDetail.cd;
                }

                return ~~(_this3.programDetail.cd % 3600 % 60);
              }));
              _this3.mm = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this3.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this3.programDetail.cd > 0) {
                  --_this3.programDetail.cd;
                }

                return ~~(_this3.programDetail.cd % 3600 / 60);
              }));
              _this3.hh = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this3.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this3.programDetail.cd <= 5) {
                  _this3.programDetail.ready = true;
                  _this3.programDetail.live = true;
                  _this3.displayProgData = true;

                  _this3.checkStreaming();

                  console.log(_this3.programDetail);
                  console.log(_this3.programDetail.live, 'liveee');
                }

                if (_this3.programDetail.cd > 0) {
                  --_this3.programDetail.cd;
                } else {
                  _this3.programDetail.cd = 0;
                  return 0;
                }

                return ~~(_this3.programDetail.cd / (60 * 60) % 24);
              }));
            } else {
              c = 0;
              _this3.displayProgData = true;

              if (new Date(_this3.programDetail.program_end_time + 'Z') > new Date()) {
                _this3.programDetail.ready = true;
                _this3.programDetail.live = true;
                console.log(_this3.programDetail.live + 'liveeeeeee');

                _this3.checkStreaming();
              } else {
                console.log(_this3.programDetail.live + 'edddddd');
                _this3.programDetail.ended = true;
              }
            } //-------------------------------------------------


            if (_this3.programDetail.request_accepted != null) {
              if (_this3.programDetail.request_accepted.split(',').includes(_this3.userData.id.toString())) {
                _this3.request_accs = true;
                _this3.request_join = true;
              }
            } else if (_this3.programDetail.request_sent != null) {
              if (_this3.programDetail.request_sent.split(',').includes(_this3.userData.id.toString())) {
                _this3.request_accs_pending = true;
              }
            }

            if (_this3.programDetail.request_recive != null) {
              if (_this3.programDetail.request_recive.split(',').includes(_this3.userData.id.toString())) {
                _this3.request_join = true;
                console.log(_this3.request_join + 'this.request_joineeeeee');
              }
            }
          });
        }
      }, {
        key: "checkStreaming",
        value: function checkStreaming() {// this.sub = interval(5000)
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
      }, {
        key: "showSchedule",
        value: function showSchedule(event) {
          this.programDetail.displayData = this.displayProgData;
          this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleModalComponent"], 'fullModal', {
            'programDetail': this.programDetail
          });
        }
      }, {
        key: "equipments",
        value: function equipments() {
          this.commonService.presentModal(_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentsComponent"], 'halfModal', {
            'programDetail': this.programDetail
          });
        }
      }, {
        key: "showChatUsers",
        value: function showChatUsers() {
          var _this4 = this;

          if (this.programType != "public") {
            this.commonService.presentLoader();
            this.chatService.checkChatProgram({
              'programId': this.programId,
              'type': 3
            }).subscribe(function (data) {
              if (data.id > 0) {
                _this4.commonService.dismissLoader();

                var chatRoom = data.room_id;
                var chatReceiverId = data.group_id;
                var chatType = 2;
                var fileData = {
                  chatType: chatType,
                  room: chatRoom,
                  receiverId: parseInt(chatReceiverId)
                };

                _this4.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__["ChatRoomsComponent"], 'fullModal', fileData);
              } else {
                _this4.commonService.dismissLoader(); // chat_type = 1:consultant,2:user,3:program


                _this4.router.navigate(["/first-message/" + _this4.programId + "/3"]);
              }
            }, function (err) {
              _this4.commonService.presentToast("Couldnt load data, Something went wrong.");

              _this4.commonService.dismissLoader();
            });
          } else {
            this.commonService.presentToast("Chat Not Allow on Public Program");
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back(); // this.router.navigate(['/schedule-program']);
        }
      }, {
        key: "acceptRequest",
        value: function acceptRequest() {
          var _this5 = this;

          this.programService.acceptProgramRequest({
            'programId': this.programDetail.id
          }).subscribe(function (data) {
            var prog_date = new Date(_this5.programDetail.program_date + 'Z');

            _this5.localNotifications.schedule({
              id: _this5.programId,
              text: _this5.programDetail.title + " program will start at \n " + prog_date,
              trigger: {
                at: new Date(prog_date.getTime() - 60 * 60 * 500)
              },
              data: {
                secret: 'secret'
              },
              lockscreen: true,
              vibrate: true,
              silent: false,
              foreground: true
            });

            _this5.router.navigateByUrl('/tabs/consultant-profile');
          });
        }
      }, {
        key: "joinRequest",
        value: function joinRequest() {
          var _this6 = this;

          this.programService.joinRequest({
            'programId': this.programDetail.id
          }).subscribe(function (data) {
            _this6.request_join = true;
          });
        }
      }, {
        key: "simpleNotif",
        value: function simpleNotif() {
          this.localNotifications.schedule({
            id: 1,
            text: 'Single Local Notification',
            data: {
              secret: 'secret'
            }
          });
        }
      }, {
        key: "payment",
        value: function payment() {
          var fileData = {
            pgid: this.programId,
            pgname: this.programDetail.title,
            pgamount: this.programFee,
            pgimg: this.programImage
          };
          this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
        }
      }, {
        key: "shareItem",
        value: function shareItem() {
          this.socialSharing.share("Program Details", "", "", "program-view/" + this.programId).then(function () {})["catch"](function () {});
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal(data) {
          console.log(data);
          this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__["NutritionModalComponent"], 'fullModal', {
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
                    this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__["ViewVideoDetailComponent"], 'fullModal', {
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
      }]);

      return NewProgramViewPage;
    }();

    NewProgramViewPage.ctorParameters = function () {
      return [{
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"]
      }];
    };

    NewProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-program-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-program-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-program-view.page.scss */
      "./src/app/program/new-program-view/new-program-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"]])], NewProgramViewPage);
    /***/
  }
}]);
//# sourceMappingURL=program-new-program-view-new-program-view-module-es5.js.map