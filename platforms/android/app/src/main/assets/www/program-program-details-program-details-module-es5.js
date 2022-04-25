function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-details-program-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-details/program-details.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-details/program-details.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramProgramDetailsProgramDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <div class=\"right-div\">\r\n      <ion-item  detail=\"false\" class=\"icon-right-side ion-text-end min-width-none \" slot=\"end\" [routerLink]=\"['/edit-program',programId]\">\r\n        <ion-icon ios=\"ios-create\" md=\"md-create\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item  detail=\"false\" class=\"icon-right-side ion-text-end min-width-none pl-8\" slot=\"end\" (click)=\"shareItem()\">\r\n        <ion-icon ios=\"ios-share\" md=\"md-share\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <!-- <ion-fab class=\"share-btn\" *ngIf=\"programDetail?.is_requested == 1\">\r\n        <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n          <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab> -->\r\n    </div>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <!-- <ion-thumbnail>\r\n          <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail> -->\r\n        <!-- image/program/program_46_20210806150601_0.jpeg -->\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        \r\n        </ion-slides>\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>            \r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img class=\"cover-img\" [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n      <ion-list lines=\"none\" class=\"list-info\">\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/target.svg\" />\r\n            <ion-label>{{programDetail?.category_id}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/doller.png\" />\r\n          <ion-label>{{programFee}}</ion-label>\r\n          </div>          \r\n        </ion-item>\r\n        <ion-item>\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/group.svg\" />\r\n            <ion-label>{{programDetail?.type_id}}</ion-label>\r\n          </div>         \r\n        </ion-item>\r\n        <ion-item>\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/clock.svg\" />\r\n          <ion-label>{{programDetail?.program_duration || 0}} Min</ion-label>\r\n          </div>          \r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-padding\">\r\n      <div class=\"programDesc\">\r\n        <p>{{programDetail?.description }} &nbsp;</p>        \r\n      </div>\r\n      <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n        <ion-item class=\"d-flex\">\r\n            <span *ngFor=\"let user  of userList\">\r\n              <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n              <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n            </span>\r\n            <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col class=\"infoBox\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n      <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request recived yet</h6>\r\n      <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to verify. </h6>\r\n      <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row class=\"counter-box ion-padding\" *ngIf=\"!programDetail?.live && !programDetail?.ended \">  -->\r\n    <ion-row class=\"counter-box ion-padding\" *ngIf=\"programDetail?.is_live_status == 1\"> \r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n        <ion-text><p class=\"count_time\">{{dd | async}}</p> Days</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{hh | async }} </p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{mm| async}}</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{ss | async}}</p> Seconds</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n      <ion-text>This Program has been Ended </ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15 green-text\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row> \r\n  <ion-row class=\"counter-box ion-padding\" style=\"position: relative;\" *ngIf=\"programDetail?.is_live_status == 0\"> \r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Days</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Seconds</ion-text>\r\n    </ion-col>\r\n    \r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15 program-time\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row>  \r\n  <!-- <ion-card class=\"video-card\"  *ngIf=\"progItem?.nutrition_id || progItem?.video_program\">\r\n    <ion-card-content class=\"ion-no-padding\" *ngIf=\"programDetail.displayData\">\r\n      <ion-slides [options]=\"sliderOpts\" class=\"inner-slider mb-10\">\r\n          <ion-slide *ngFor=\"let item of progItem?.videoProg_array \" (click)=\"showVideoDetails(item)\" >\r\n           <img src=\"../../../assets/images/video.png\" style=\"width:auto !important\" />\r\n          <ion-label>Video</ion-label>\r\n        </ion-slide>  \r\n        <ion-slide *ngFor=\"let item of progItem?.videoId_array\" (click)=\"showVideoDetails(item)\" >\r\n          <img src=\"../../../assets/images/video.png\" style=\"width:auto !important\" />\r\n         <ion-label>Video</ion-label>\r\n       </ion-slide> \r\n        <ion-slide *ngFor=\"let item of nutritionList | inArray:'id':progItem?.nutrition_array \"  (click)=\"nutritionModal(progItem)\" >\r\n          <img style=\"flex: 1\" src=\"{{url}}{{item?.fImage}}\" *ngIf=\"item?.fImage\" />\r\n          <img style=\"flex: 1\" src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.fImage\" style=\"width:70% !important; height: auto;\"/>\r\n          <ion-label>{{item?.title}}</ion-label>\r\n        </ion-slide>  \r\n      </ion-slides>\r\n    </ion-card-content>\r\n  </ion-card>   -->\r\n    <!-- programDescription -->\r\n  <!-- <ion-button *ngIf=\"programDetail?.type_id == 'video'\" [routerLink]=\"['/video-program-view',programDetail?.video_program,programDetail?.id]\">Go Live Video</ion-button> -->\r\n  <!-- <ion-button *ngIf=\"programDetail?.live\" [routerLink]=\"['/broadcaster',broadcastId]\">Go Live</ion-button> -->\r\n  <!-- <ion-label *ngIf=\"programDetail?.ended\" >This Program has been Ended </ion-label> -->\r\n  <div *ngIf=\"programDetail?.is_live_status == 1\">\r\n    <ion-button class=\"btnVerify\" *ngIf=\"programDetail?.live\" (click)=\"joinRoom()\">Go Live</ion-button>\r\n  </div>\r\n  <!-- <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 1\">\r\n    <ion-button class=\"btnVerify\" (click)=\"verifyUser()\">Verify to Go Live</ion-button>\r\n  </div> -->\r\n  <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 0\">\r\n    <ion-button class=\"btnVerify\" >No live program available</ion-button>\r\n  </div>\r\n  <ion-list lines=\"none\" class=\"item-list ion-no-padding\" >     \r\n    <div *ngFor=\"let progItem of allProgram; let i = index\">   \r\n      <ion-card class=\"video-card\"  *ngIf=\"i == 0 && (progItem?.nutrition_id || progItem?.video_program)\">\r\n        <ion-card-content class=\"ion-no-padding\" *ngIf=\"programDetail.displayData\">\r\n          <ion-slides [options]=\"sliderOpts\" class=\"inner-slider mb-10\">\r\n            <!-- <ion-slide *ngIf=\"progItem?.video_program\" (click)=\"showVideoDetails(item.posts_id)\" > -->\r\n              <ion-slide *ngFor=\"let item of progItem?.videoProg_arra\"  (click)=\"showVideoDetails(item)\" >\r\n               <img src=\"../../../assets/images/video.png\" style=\"width:45% !important\" />\r\n              <ion-label>Video</ion-label>\r\n            </ion-slide>  \r\n            <ion-slide *ngFor=\"let item of progItem?.videoId_arr\"  (click)=\"showVideoDetails(item)\" >\r\n              <img src=\"../../../assets/images/video.png\" style=\"width:45% !important\" />\r\n             <ion-label>Video</ion-label>\r\n           </ion-slide> \r\n            <ion-slide *ngFor=\"let item of nutritionList\"   (click)=\"nutritionModal(progItem)\" >\r\n              <img src=\"{{url}}{{item?.fImage}}\" *ngIf=\"item?.fImage\" />\r\n              <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.fImage\" style=\"width:45% !important; height: auto;\"/>\r\n              <ion-label>{{item?.title}}</ion-label>\r\n            </ion-slide>  \r\n          </ion-slides>\r\n        </ion-card-content>\r\n      </ion-card>  \r\n      <ion-card class=\"video-card\"  *ngIf=\"i == 0 && (progItem?.nutrition_id || progItem?.video_program)\">\r\n        <ion-card-content class=\"ion-no-padding\" *ngIf=\"!programDetail.displayData\">\r\n          <ion-slides [options]=\"sliderOpts\" class=\"inner-slider bg-grey py-md mb-10 nutri-slides\">\r\n            <!-- <ion-slide *ngIf=\"progItem?.video_program\" (click)=\"showVideoDetails(item.posts_id)\" > -->\r\n              <ion-slide *ngFor=\"let item of progItem?.videoProg_array \" class=\"nutri-slide\" (click)=\"showVideoDetails(item)\" >\r\n                <div class=\"program__image\">\r\n                  <img src=\"../../../assets/images/video.png\" style=\"width:100% !important\" />\r\n                </div>\r\n                <div class=\"program__title\">\r\n                  <ion-label>Video</ion-label>\r\n                </div>\r\n            </ion-slide>  \r\n            <ion-slide *ngFor=\"let item of progItem?.videoId_array\" class=\"nutri-slide\" (click)=\"showVideoDetails(item)\">\r\n              <div class=\"program__image\">\r\n                <img src=\"../../../assets/images/video.png\" style=\"width:100% !important\" />\r\n              </div>\r\n              <div class=\"program__title\">\r\n                <ion-label>Video</ion-label>\r\n              </div>\r\n           </ion-slide> \r\n            <ion-slide *ngFor=\"let item of nutritionList \" class=\"nutri-slide\"  >\r\n              <div class=\"program__image\"  (click)=\"nutritionModal(progItem)\">\r\n                <img src=\"{{url}}{{item?.fImage}}\" *ngIf=\"item?.fImage\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.fImage\" style=\"width:100% !important; height: auto;\"/>\r\n              </div>\r\n              <div class=\"program__title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n            </ion-slide>  \r\n          </ion-slides>\r\n        </ion-card-content>\r\n      </ion-card>\r\n     \r\n    </div>\r\n    \r\n  </ion-list>\r\n\r\n\r\n  <ion-button expand=\"full\" *ngIf=\" !adData && (hh | async)>23\" (click)=\"applyAdvertise()\" class=\"mb-56 btn-height green ion-text-uppercase ion-no-margin full-height\"> Apply For Advertise sponser</ion-button>\r\n  \r\n  <ion-button expand=\"full\" *ngIf=\"adData?.id && adData?.video_approve_status== 1\" (click)=\"showSponsersList()\"   class=\"mb-56 btn-height green ion-text-uppercase ion-no-margin full-height\" >See Ad Sponser Options  </ion-button> \r\n  <div class=\"bottom-space\">\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"\" >\r\n  <!-- <ion-button expand=\"full\" *ngIf=\" !adData && (hh | async)>23\" (click)=\"applyAdvertise()\" class=\"green ion-text-uppercase ion-no-margin full-height\"> Apply For Advertise sponser</ion-button>\r\n  <ion-button expand=\"full\" *ngIf=\"adData?.id && adData?.video_approve_status== 1\" (click)=\"showSponsersList()\"   class=\"green ion-text-uppercase ion-no-margin full-height\" >See Ad Sponser Options  </ion-button> -->\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list lines=\"none\" class=\"top-list three-block\">\r\n        <ion-item (click)=\"equipments()\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-construct\" md=\"md-construct\"></ion-icon>\r\n          </div>\r\n          <ion-label>Equipments</ion-label>\r\n        </ion-item>\r\n        <ion-item  (click)=\"showParticipants()\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-people\" md=\"md-people\"></ion-icon>\r\n          </div>\r\n          <ion-label>Participants</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"programDetail?.chat_status == 1\" (click)=\"showChatUsers()\" detail=\"false\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-text\" md=\"md-text\"></ion-icon>\r\n          </div>\r\n          <ion-label>Chat</ion-label>\r\n        </ion-item>\r\n        <ion-item detail=\"false\" (click)=\"showSchedule(programDetail)\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n          </div>\r\n          <ion-label>View Schedule</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <!-- <ion-col>\r\n      <ion-fab class=\"share-btn\" *ngIf=\"programDetail?.is_requested == 1\">\r\n        <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n          <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n      </ion-col> -->\r\n  </ion-row> \r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/program/program-details/program-details-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/program/program-details/program-details-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProgramDetailsPageRoutingModule */

  /***/
  function srcAppProgramProgramDetailsProgramDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramDetailsPageRoutingModule", function () {
      return ProgramDetailsPageRoutingModule;
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


    var _program_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./program-details.page */
    "./src/app/program/program-details/program-details.page.ts");

    var routes = [{
      path: '',
      component: _program_details_page__WEBPACK_IMPORTED_MODULE_3__["ProgramDetailsPage"]
    }];

    var ProgramDetailsPageRoutingModule = function ProgramDetailsPageRoutingModule() {
      _classCallCheck(this, ProgramDetailsPageRoutingModule);
    };

    ProgramDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProgramDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/program-details/program-details.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/program/program-details/program-details.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProgramDetailsPageModule */

  /***/
  function srcAppProgramProgramDetailsProgramDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramDetailsPageModule", function () {
      return ProgramDetailsPageModule;
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


    var _program_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./program-details-routing.module */
    "./src/app/program/program-details/program-details-routing.module.ts");
    /* harmony import */


    var _program_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./program-details.page */
    "./src/app/program/program-details/program-details.page.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var ProgramDetailsPageModule = function ProgramDetailsPageModule() {
      _classCallCheck(this, ProgramDetailsPageModule);
    };

    ProgramDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _program_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramDetailsPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]],
      declarations: [_program_details_page__WEBPACK_IMPORTED_MODULE_6__["ProgramDetailsPage"]]
    })], ProgramDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/program/program-details/program-details.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/program/program-details/program-details.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramProgramDetailsProgramDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-list {\n  padding: 0;\n  margin: 10px 0;\n  padding: 0;\n  margin: 10px 0;\n  position: fixed;\n  width: 100%;\n  bottom: 10px; }\n\n.top-list ion-item {\n  --min-height: 85px;\n  background: #FFF;\n  box-shadow: none; }\n\n.top-list ion-item ion-label {\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem; }\n\n.users-list {\n  display: block;\n  width: 100%;\n  margin-bottom: 0; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: 100%;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background:transparent; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%; }\n\n.users-list ion-item span {\n  margin-left: -25px; }\n\n.users-list ion-item span:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -25px; }\n\n.list-info {\n  display: flex;\n  padding: 6px;\n  margin-bottom: 0; }\n\n.list-info ion-item {\n  width: 48%;\n  box-shadow: 0.001em 5px 12px rgba(34, 35, 58, 0.09);\n  margin: auto;\n  margin-bottom: 8px; }\n\n.list-info ion-item img {\n  width: 24px;\n  margin-right: 8px; }\n\n.list-info ion-item ion-label {\n  font-size: 0.85rem; }\n\n.infoBox {\n  background: #e9f6f5;\n  padding: 15px;\n  text-align: center; }\n\n.infoBox h6 {\n    margin: 0;\n    font-size: 14px; }\n\n.icon-text {\n  text-align: center; }\n\n.programDesc p {\n  line-height: 1.5; }\n\n.right-div {\n  display: flex;\n  align-items: center; }\n\n.btnVerify {\n  width: 100%;\n  margin: 0;\n  background: #27a69a;\n  --background: #27a69a;\n  --border-radius: 0;\n  border-radius: 0;\n  height: 50px; }\n\n.counter-box {\n  margin-bottom: 0; }\n\n.count_time {\n  font-size: 16px; }\n\nion-slides {\n  height: auto; }\n\n.list-info ion-item img {\n  margin: 0; }\n\n.list-info ion-item.item-label.item.md.in-list.ion-focusable.hydrated {\n  width: 25% !important;\n  margin: 0 auto;\n  text-align: center; }\n\n.counter-box ion-col.ion-no-padding.md.hydrated {\n  flex: 0 0 calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.counter-box ion-col.ion-no-padding.mt-15.green-text.md.hydrated, ion-col.ion-no-padding.mt-15.program-time.md.hydrated {\n  flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.counter-box ion-col.ion-no-padding.ios.hydrated {\n  flex: 0 0 calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.counter-box ion-col.ion-no-padding.mt-15.green-text.ios.hydrated, ion-col.ion-no-padding.mt-15.program-time.ios.hydrated {\n  flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.min-width-none {\n  min-width: 0px !important; }\n\n.pl-8 {\n  padding-left: 8px !important; }\n\n@media only screen and (max-width: 360px) {\n  p.text-green.text-center[_ngcontent-fca-c8] {\n    top: 0 !important; } }\n\n@media only screen and (max-width: 375px) {\n  p.text-green.text-center[_ngcontent-fca-c8] {\n    top: 35px !important; } }\n\n.program__image {\n  height: 180px;\n  width: 100% !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.199);\n  border-radius: 10px; }\n\n.bg-grey {\n  background: #f7f7f7; }\n\nion-text.md.hydrated p.text-green.text-center {\n  top: 35px;\n  left: 0px; }\n\nion-slide.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active {\n  flex-direction: column;\n  height: auto;\n  width: 47%;\n  margin-left: 10px; }\n\nion-list.item-list.ion-no-padding.md.list-md.list-lines-none.list-md-lines-none.hydrated {\n  margin-bottom: 0; }\n\nion-list.top-list.three-block.md.list-md.list-lines-none.list-md-lines-none.hydrated {\n  margin-bottom: -10px; }\n\nion-slide.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-next {\n  flex-direction: column;\n  height: auto;\n  width: 47%;\n  margin-left: 10px; }\n\nion-text.ios.hydrated p.text-green.text-center {\n  top: 0px;\n  left: 0px; }\n\np.text-green.text-center {\n  width: auto; }\n\nion-list.top-list.three-block.ios.list-ios.list-lines-none.list-ios-lines-none.hydrated {\n  margin-bottom: -10px !important; }\n\nion-slide.ios.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-next {\n  flex-direction: column;\n  height: auto;\n  width: 47% !important;\n  margin-left: 10px; }\n\nion-slide.ios.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active {\n  flex-direction: column;\n  height: auto;\n  width: 47% !important;\n  margin-left: 10px; }\n\n.bottom-space {\n  height: 50px;\n  width: 100%;\n  background: transparents; }\n\n.mb-lg {\n  margin-bottom: 50px; }\n\n.py-md {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 10px; }\n\n::ng-deep .sc-ion-card-ios-h {\n  -webkit-margin-start: 0 !important;\n  margin-inline-start: 0 !important;\n  -webkit-margin-end: 0 !important;\n  margin-inline-end: 0 !important; }\n\n::ng-deep .sc-ion-card-md-h {\n  -webkit-margin-start: 0 !important;\n  margin-inline-start: 0 !important;\n  -webkit-margin-end: 0 !important;\n  margin-inline-end: 0 !important; }\n\n.program-slides {\n  width: 95% !important; }\n\n.program-slide {\n  height: 300px; }\n\n.program-slides video {\n  height: 100%; }\n\n.program-slides img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n\n.nutri-slide {\n  width: 47% !important; }\n\nion-slide.program-slides.ios.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active {\n  width: 95% !important; }\n\nion-slide.program-slides.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-next {\n  width: 95% !important; }\n\n.btn-height {\n  height: 56px !important; }\n\n.mb-56 {\n  margin-bottom: 56px; }\n\n.icon-text {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0; }\n\n.icon-text img {\n  margin-bottom: 5px !important; }\n\n.item-native {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important; }\n\nion-slide.nutri-slide.md.swiper-slide.swiper-zoom-container.hydrated, ion-slide.nutri-slide.ios.swiper-slide.swiper-zoom-container.hydrated {\n  flex-direction: column;\n  height: auto;\n  margin-left: 10px; }\n\n.cover-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLWRldGFpbHMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXHByb2dyYW0tZGV0YWlsc1xccHJvZ3JhbS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFVBQVU7RUFBQyxjQUFjO0VBQUMsVUFBVTtFQUFDLGNBQWM7RUFBQyxlQUFlO0VBQUMsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDdEc7RUFBbUIsa0JBQWE7RUFBTSxnQkFBZ0I7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDdkU7RUFBNkIsY0FBYztFQUFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxTQUFTO0VBQUMsMkJBQTJCO0VBQUMsY0FBYyxFQUFBOztBQUMvSDtFQUFVLFdBQVc7RUFBQyxZQUFZO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLFVBQVU7RUFBQyxTQUFTO0VBQUMsMkJBQTJCLEVBQUE7O0FBQ3ZNO0VBQW9CLGNBQWM7RUFBQyxrQkFBa0IsRUFBQTs7QUFFckQ7RUFBWSxjQUFjO0VBQUMsV0FBVztFQUFDLGdCQUFnQixFQUFBOztBQUN2RDtFQUFxQixrQkFBYTtFQUFNLGFBQWE7RUFBQyxXQUFXO0VBQUMsa0JBQWdCO0VBQUcsc0JBQW9CO0VBQUcsd0JBQWEsRUFBQTs7QUFDekg7RUFBeUIsV0FBVztFQUFDLFlBQVk7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3RGO0VBQTBCLGtCQUFrQixFQUFBOztBQUM1QztFQUFzQyxjQUFjLEVBQUE7O0FBQ3BEO0VBQVUsV0FBVTtFQUFDLFlBQVc7RUFBQyxlQUFlO0VBQUMsa0JBQWlCO0VBQUMsbUJBQWtCO0VBQUMsa0JBQWlCO0VBQUMsYUFBWTtFQUFDLHVCQUFzQjtFQUFDLG1CQUFrQjtFQUFDLFNBQVM7RUFBQyxrQkFBa0IsRUFBQTs7QUFFM0w7RUFBVyxhQUFhO0VBQUMsWUFBWTtFQUFDLGdCQUFnQixFQUFBOztBQUN0RDtFQUFvQixVQUFVO0VBQUMsbURBQW1EO0VBQUMsWUFBWTtFQUFDLGtCQUFrQixFQUFBOztBQUNsSDtFQUF3QixXQUFXO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ3JEO0VBQThCLGtCQUFrQixFQUFBOztBQUVoRDtFQUFTLG1CQUFtQjtFQUFDLGFBQWE7RUFBQyxrQkFBa0IsRUFBQTs7QUFBN0Q7SUFDSyxTQUFTO0lBQUMsZUFBZSxFQUFBOztBQUU5QjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNNLGdCQUFnQixFQUFBOztBQUV0QjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFBVyxXQUFXO0VBQ3BCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIscUJBQWE7RUFDYixrQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFWjtFQUFjLGdCQUFnQixFQUFBOztBQUNoQztFQUFhLGVBQWUsRUFBQTs7QUFDNUI7RUFBVyxZQUFZLEVBQUE7O0FBR3ZCO0VBQ0UsU0FBUyxFQUFBOztBQUVYO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSx1RUFBdUU7RUFDdkUsb0VBQW9FO0VBQ3BFLHdFQUF3RSxFQUFBOztBQUUxRTtFQUNFLHdFQUF3RTtFQUN4RSxxRUFBcUU7RUFDckUseUVBQXlFLEVBQUE7O0FBSTNFO0VBQ0UsdUVBQXVFO0VBQ3ZFLG9FQUFvRTtFQUNwRSx3RUFBd0UsRUFBQTs7QUFFMUU7RUFDRSx3RUFBd0U7RUFDeEUscUVBQXFFO0VBQ3JFLHlFQUF5RSxFQUFBOztBQUczRTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFO0lBQ0UsaUJBQWlCLEVBQUEsRUFDbEI7O0FBRUg7RUFDRTtJQUNFLG9CQUFvQixFQUFBLEVBQ3JCOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLFNBQVM7RUFDVCxTQUFTLEVBQUE7O0FBR1g7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFLbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFRbkI7RUFDRSxRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUVYO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBOztBQUVyQjtFQUVJLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLCtCQUNGLEVBQUE7O0FBTkY7RUFRSSxrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQywrQkFDRixFQUFBOztBQUVGO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsMEJBQXVCO0tBQXZCLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UscUNBQW9DO1VBQXBDLG9DQUFvQyxFQUFBOztBQUV0QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwwQkFBdUI7S0FBdkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0tZGV0YWlscy9wcm9ncmFtLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1saXN0e3BhZGRpbmc6IDA7bWFyZ2luOiAxMHB4IDA7cGFkZGluZzogMDttYXJnaW46IDEwcHggMDtwb3NpdGlvbjogZml4ZWQ7d2lkdGg6IDEwMCU7Ym90dG9tOiAxMHB4O31cclxuLnRvcC1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogODVweDtiYWNrZ3JvdW5kOiAjRkZGO2JveC1zaGFkb3c6IG5vbmU7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse3BhZGRpbmctdG9wOiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDhweDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO21hcmdpbi1sZWZ0OiAwO31cclxuLnRvcC1pY29ue3dpZHRoOiA0MHB4O2hlaWdodDogNDBweDtiYWNrZ3JvdW5kOiAjZTlmNmY1O2JvcmRlci1yYWRpdXM6IDUwJTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTEwcHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTt9XHJcbi50b3AtaWNvbiBpb24taWNvbiB7Y29sb3I6ICMyN2E2OWE7Zm9udC1zaXplOiAxLjI1cmVtO31cclxuXHJcbi51c2Vycy1saXN0e2Rpc3BsYXk6IGJsb2NrO3dpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206IDA7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDt3aWR0aDogMTAwJTstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZ3t3aWR0aDogNDJweDtoZWlnaHQ6IDQycHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gc3BhbnttYXJnaW4tbGVmdDogLTI1cHg7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBzcGFuOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnZpZXctYWxse3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWF4LXdpZHRoOiA0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2YxZjBmMDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiAtMjVweDt9XHJcblxyXG4ubGlzdC1pbmZve2Rpc3BsYXk6IGZsZXg7cGFkZGluZzogNnB4O21hcmdpbi1ib3R0b206IDA7fVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVte3dpZHRoOiA0OCU7Ym94LXNoYWRvdzogMC4wMDFlbSA1cHggMTJweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO21hcmdpbjogYXV0bzttYXJnaW4tYm90dG9tOiA4cHg7fVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGltZ3t3aWR0aDogMjRweDttYXJnaW4tcmlnaHQ6IDhweDt9XHJcbi5saXN0LWluZm8gaW9uLWl0ZW0gaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC44NXJlbTt9XHJcblxyXG4uaW5mb0JveHtiYWNrZ3JvdW5kOiAjZTlmNmY1O3BhZGRpbmc6IDE1cHg7dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGg2e21hcmdpbjogMDtmb250LXNpemU6IDE0cHg7fSAgXHJcbn1cclxuLmljb24tdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9ncmFtRGVzY3tcclxuICAgIHB7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbn1cclxuLnJpZ2h0LWRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ0blZlcmlmeXt3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O31cclxuXHJcbiAgLmNvdW50ZXItYm94IHttYXJnaW4tYm90dG9tOiAwO31cclxuLmNvdW50X3RpbWUge2ZvbnQtc2l6ZTogMTZweDt9XHJcbmlvbi1zbGlkZXN7aGVpZ2h0OiBhdXRvO31cclxuXHJcblxyXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGltZ3tcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmxpc3QtaW5mbyBpb24taXRlbS5pdGVtLWxhYmVsLml0ZW0ubWQuaW4tbGlzdC5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcclxuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8vIC5saXN0LWluZm8gaW9uLWl0ZW0uaW5wdXQtd3JhcHBlcntcclxuLy8gICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vL0FuZHJvaWQgVGltZXJcclxuLmNvdW50ZXItYm94IGlvbi1jb2wuaW9uLW5vLXBhZGRpbmcubWQuaHlkcmF0ZWQge1xyXG4gIGZsZXg6IDAgMCBjYWxjKGNhbGMoMyAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKGNhbGMoMyAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxufVxyXG4uY291bnRlci1ib3ggaW9uLWNvbC5pb24tbm8tcGFkZGluZy5tdC0xNS5ncmVlbi10ZXh0Lm1kLmh5ZHJhdGVkLCBpb24tY29sLmlvbi1uby1wYWRkaW5nLm10LTE1LnByb2dyYW0tdGltZS5tZC5oeWRyYXRlZCB7XHJcbiAgZmxleDogMCAwIGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vL0lPUyBUaW1lclxyXG4uY291bnRlci1ib3ggaW9uLWNvbC5pb24tbm8tcGFkZGluZy5pb3MuaHlkcmF0ZWQge1xyXG4gIGZsZXg6IDAgMCBjYWxjKGNhbGMoMyAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKGNhbGMoMyAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxufVxyXG4uY291bnRlci1ib3ggaW9uLWNvbC5pb24tbm8tcGFkZGluZy5tdC0xNS5ncmVlbi10ZXh0Lmlvcy5oeWRyYXRlZCwgaW9uLWNvbC5pb24tbm8tcGFkZGluZy5tdC0xNS5wcm9ncmFtLXRpbWUuaW9zLmh5ZHJhdGVkIHtcclxuICBmbGV4OiAwIDAgY2FsYyhjYWxjKDEyIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogY2FsYyhjYWxjKDEyIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtbm9uZSB7XHJcbiAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ucGwtOHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpe1xyXG4gIHAudGV4dC1ncmVlbi50ZXh0LWNlbnRlcltfbmdjb250ZW50LWZjYS1jOF0ge1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gIHAudGV4dC1ncmVlbi50ZXh0LWNlbnRlcltfbmdjb250ZW50LWZjYS1jOF0ge1xyXG4gICAgdG9wOiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5wcm9ncmFtX19pbWFnZXtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE5OSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYmctZ3JleXtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG59XHJcbi8vIEFuZHJvaWQgQ1NTXHJcblxyXG5pb24tdGV4dC5tZC5oeWRyYXRlZCBwLnRleHQtZ3JlZW4udGV4dC1jZW50ZXIge1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZS5tZC5zd2lwZXItc2xpZGUuc3dpcGVyLXpvb20tY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA0NyUgOyBcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4vLyBpb24tY2FyZC52aWRlby1jYXJkLnNjLWlvbi1jYXJkLW1kLWguc2MtaW9uLWNhcmQtbWQtcy5tZC5oeWRyYXRlZCB7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4vLyB9XHJcbmlvbi1saXN0Lml0ZW0tbGlzdC5pb24tbm8tcGFkZGluZy5tZC5saXN0LW1kLmxpc3QtbGluZXMtbm9uZS5saXN0LW1kLWxpbmVzLW5vbmUuaHlkcmF0ZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuaW9uLWxpc3QudG9wLWxpc3QudGhyZWUtYmxvY2subWQubGlzdC1tZC5saXN0LWxpbmVzLW5vbmUubGlzdC1tZC1saW5lcy1ub25lLmh5ZHJhdGVkIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlLm1kLnN3aXBlci1zbGlkZS5zd2lwZXItem9vbS1jb250YWluZXIuaHlkcmF0ZWQuc3dpcGVyLXNsaWRlLW5leHQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA0NyUgO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi8vIGlvbi1jYXJkLnZpZGVvLWNhcmQuc2MtaW9uLWNhcmQtbWQtaC5zYy1pb24tY2FyZC1tZC1zLm1kLmh5ZHJhdGVkIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBJT1MgQ1NTXHJcblxyXG5pb24tdGV4dC5pb3MuaHlkcmF0ZWQgcC50ZXh0LWdyZWVuLnRleHQtY2VudGVyIHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxucC50ZXh0LWdyZWVuLnRleHQtY2VudGVyIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5pb24tbGlzdC50b3AtbGlzdC50aHJlZS1ibG9jay5pb3MubGlzdC1pb3MubGlzdC1saW5lcy1ub25lLmxpc3QtaW9zLWxpbmVzLW5vbmUuaHlkcmF0ZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNsaWRlLmlvcy5zd2lwZXItc2xpZGUuc3dpcGVyLXpvb20tY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1zbGlkZS1uZXh0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuaW9uLXNsaWRlLmlvcy5zd2lwZXItc2xpZGUuc3dpcGVyLXpvb20tY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA0NyUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uYm90dG9tLXNwYWNle1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudHM7XHJcbn1cclxuLm1iLWxne1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnB5LW1ke1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwe1xyXG4gIC5zYy1pb24tY2FyZC1pb3MtaCB7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDsgXHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDAgIWltcG9ydGFudDsgXHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIC5zYy1pb24tY2FyZC1tZC1oIHtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwICFpbXBvcnRhbnQ7IFxyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwICFpbXBvcnRhbnRcclxuICB9XHJcbn1cclxuLnByb2dyYW0tc2xpZGVze1xyXG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZ3JhbS1zbGlkZXtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5wcm9ncmFtLXNsaWRlcyB2aWRlb3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnByb2dyYW0tc2xpZGVzIGltZ3tcclxuICB3aWR0aDogMTAwJSA7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm51dHJpLXNsaWRle1xyXG4gIHdpZHRoOiA0NyUgIWltcG9ydGFudDtcclxufVxyXG5pb24tc2xpZGUucHJvZ3JhbS1zbGlkZXMuaW9zLnN3aXBlci1zbGlkZS5zd2lwZXItem9vbS1jb250YWluZXIuaHlkcmF0ZWQuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zbGlkZS5wcm9ncmFtLXNsaWRlcy5tZC5zd2lwZXItc2xpZGUuc3dpcGVyLXpvb20tY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1zbGlkZS1uZXh0e1xyXG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxufVxyXG4uYnRuLWhlaWdodHtcclxuICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcclxufVxyXG4ubWItNTZ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxufVxyXG4uaWNvbi10ZXh0e1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uaWNvbi10ZXh0IGltZ3tcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1uYXRpdmV7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zbGlkZS5udXRyaS1zbGlkZS5tZC5zd2lwZXItc2xpZGUuc3dpcGVyLXpvb20tY29udGFpbmVyLmh5ZHJhdGVkLCBpb24tc2xpZGUubnV0cmktc2xpZGUuaW9zLnN3aXBlci1zbGlkZS5zd2lwZXItem9vbS1jb250YWluZXIuaHlkcmF0ZWQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jb3Zlci1pbWd7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/program/program-details/program-details.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/program/program-details/program-details.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ProgramDetailsPage */

  /***/
  function srcAppProgramProgramDetailsProgramDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramDetailsPage", function () {
      return ProgramDetailsPage;
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

    var ProgramDetailsPage = /*#__PURE__*/function () {
      function ProgramDetailsPage(commonService, navCtrl, actRoute, programService, androidPermissions, platform, router, httpClient, chatService, modalCtrl, socialSharing, nutritionService) {
        _classCallCheck(this, ProgramDetailsPage);

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
      }

      _createClass(ProgramDetailsPage, [{
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
        value: function showVideoDetails(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_21__["ViewVideoDetailComponent"], 'fullModal', {
                      'details': item
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
            console.log(data);
            _this4.programDetail = data.programData;
            console.log("PG: " + _this4.programDetail);
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
        key: "goBack",
        value: function goBack() {
          // this.navCtrl.back();
          this.router.navigate(['/schedule-program']);
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
      }]);

      return ProgramDetailsPage;
    }();

    ProgramDetailsPage.ctorParameters = function () {
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

    ProgramDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-program-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./program-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-details/program-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./program-details.page.scss */
      "./src/app/program/program-details/program-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_15__["ChatService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_19__["NutritionService"]])], ProgramDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=program-program-details-program-details-module-es5.js.map