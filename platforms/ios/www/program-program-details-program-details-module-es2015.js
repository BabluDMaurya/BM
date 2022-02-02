(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-details-program-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-details/program-details.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-details/program-details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <div class=\"right-div\">\r\n      <ion-item  detail=\"false\" class=\"icon-right-side ion-text-end min-width-none \" slot=\"end\" [routerLink]=\"['/edit-program',programId]\">\r\n        <ion-icon ios=\"ios-create\" md=\"md-create\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item  detail=\"false\" class=\"icon-right-side ion-text-end min-width-none pl-8\" slot=\"end\" [routerLink]=\"['/edit-program',programId]\">\r\n        <ion-icon ios=\"ios-share\" md=\"md-share\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <!-- <ion-fab class=\"share-btn\" *ngIf=\"programDetail?.is_requested == 1\">\r\n        <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n          <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab> -->\r\n    </div>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <!-- <ion-thumbnail>\r\n          <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail> -->\r\n        <!-- image/program/program_46_20210806150601_0.jpeg -->\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        <ion-slide>\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        \r\n        </ion-slides>\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>            \r\n        <ion-slide>\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n      <ion-list lines=\"none\" class=\"list-info\">\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/target.svg\" />\r\n            <ion-label>{{programDetail?.category_id}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/doller.png\" />\r\n          <ion-label>{{programFee}}</ion-label>\r\n          </div>          \r\n        </ion-item>\r\n        <ion-item>\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/group.svg\" />\r\n            <ion-label>{{programDetail?.type_id}}</ion-label>\r\n          </div>         \r\n        </ion-item>\r\n        <ion-item>\r\n          <div class=\"icon-text\">\r\n            <img src=\"../../../assets/images/clock.svg\" />\r\n          <ion-label>{{programDetail?.program_duration || 0}} Min</ion-label>\r\n          </div>          \r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-padding\">\r\n      <div class=\"programDesc\">\r\n        <p>{{programDetail?.description }} &nbsp;</p>        \r\n      </div>\r\n      <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n        <ion-item class=\"d-flex\">\r\n            <span *ngFor=\"let user  of userList\">\r\n              <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n              <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n            </span>\r\n            <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col class=\"infoBox\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n      <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request recived yet</h6>\r\n      <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to verify. </h6>\r\n      <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row class=\"counter-box ion-padding\" *ngIf=\"!programDetail?.live && !programDetail?.ended \">  -->\r\n    <ion-row class=\"counter-box ion-padding\" *ngIf=\"programDetail?.is_live_status == 1\"> \r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n        <ion-text><p class=\"count_time\">{{dd | async}}</p> Days</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{hh | async }} </p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{mm| async}}</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{ss | async}}</p> Seconds</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n      <ion-text>This Program has been Ended </ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15 green-text\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row> \r\n  <ion-row class=\"counter-box ion-padding\" style=\"position: relative;\" *ngIf=\"programDetail?.is_live_status == 0\"> \r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Days</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Seconds</ion-text>\r\n    </ion-col>\r\n    \r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15 program-time\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row>  \r\n  <!-- <ion-card class=\"video-card\"  *ngIf=\"progItem?.nutrition_id || progItem?.video_program\">\r\n    <ion-card-content class=\"ion-no-padding\" *ngIf=\"programDetail.displayData\">\r\n      <ion-slides [options]=\"sliderOpts\" class=\"inner-slider mb-10\">\r\n          <ion-slide *ngFor=\"let item of progItem?.videoProg_array \" (click)=\"showVideoDetails(item)\" >\r\n           <img src=\"../../../assets/images/video.png\" style=\"width:auto !important\" />\r\n          <ion-label>Video</ion-label>\r\n        </ion-slide>  \r\n        <ion-slide *ngFor=\"let item of progItem?.videoId_array\" (click)=\"showVideoDetails(item)\" >\r\n          <img src=\"../../../assets/images/video.png\" style=\"width:auto !important\" />\r\n         <ion-label>Video</ion-label>\r\n       </ion-slide> \r\n        <ion-slide *ngFor=\"let item of nutritionList | inArray:'id':progItem?.nutrition_array \"  (click)=\"nutritionModal(progItem)\" >\r\n          <img style=\"flex: 1\" src=\"{{url}}{{item?.fImage}}\" *ngIf=\"item?.fImage\" />\r\n          <img style=\"flex: 1\" src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.fImage\" style=\"width:70% !important; height: auto;\"/>\r\n          <ion-label>{{item?.title}}</ion-label>\r\n        </ion-slide>  \r\n      </ion-slides>\r\n    </ion-card-content>\r\n  </ion-card>   -->\r\n    <!-- programDescription -->\r\n  <!-- <ion-button *ngIf=\"programDetail?.type_id == 'video'\" [routerLink]=\"['/video-program-view',programDetail?.video_program,programDetail?.id]\">Go Live Video</ion-button> -->\r\n  <!-- <ion-button *ngIf=\"programDetail?.live\" [routerLink]=\"['/broadcaster',broadcastId]\">Go Live</ion-button> -->\r\n  <!-- <ion-label *ngIf=\"programDetail?.ended\" >This Program has been Ended </ion-label> -->\r\n  <div *ngIf=\"userData.trilloMatch == '1' && programDetail?.is_live_status == 1\">\r\n    <ion-button class=\"btnVerify\" *ngIf=\"programDetail?.live\" (click)=\"joinRoom()\">Go Live</ion-button>\r\n  </div>\r\n  <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 1\">\r\n    <ion-button class=\"btnVerify\" (click)=\"verifyUser()\">Verify to Go Live</ion-button>\r\n  </div>\r\n  <div *ngIf=\"userData.trilloMatch != '1' && programDetail?.is_live_status == 0\">\r\n    <ion-button class=\"btnVerify\" >No live program available</ion-button>\r\n  </div>\r\n  <ion-list lines=\"none\" class=\"item-list ion-no-padding\" >     \r\n    <div *ngFor=\"let progItem of allProgram; let i = index\">   \r\n      <ion-card class=\"video-card\"  *ngIf=\"i == 0 && (progItem?.nutrition_id || progItem?.video_program)\">\r\n        <ion-card-content class=\"ion-no-padding\" *ngIf=\"programDetail.displayData\">\r\n          <ion-slides [options]=\"sliderOpts\" class=\"inner-slider mb-10\">\r\n            <!-- <ion-slide *ngIf=\"progItem?.video_program\" (click)=\"showVideoDetails(item.posts_id)\" > -->\r\n              <ion-slide *ngFor=\"let item of progItem?.videoProg_array \" (click)=\"showVideoDetails(item)\" >\r\n               <img src=\"../../../assets/images/video.png\" style=\"width:45% !important\" />\r\n              <ion-label>Video</ion-label>\r\n            </ion-slide>  \r\n            <ion-slide *ngFor=\"let item of progItem?.videoId_array\" (click)=\"showVideoDetails(item)\" >\r\n              <img src=\"../../../assets/images/video.png\" style=\"width:45% !important\" />\r\n             <ion-label>Video</ion-label>\r\n           </ion-slide> \r\n            <ion-slide *ngFor=\"let item of nutritionList  \"  (click)=\"nutritionModal(progItem)\" >\r\n              <img src=\"{{url}}{{item?.fImage}}\" *ngIf=\"item?.fImage\" />\r\n              <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.fImage\" style=\"width:45% !important; height: auto;\"/>\r\n              <ion-label>{{item?.title}}</ion-label>\r\n            </ion-slide>  \r\n          </ion-slides>\r\n        </ion-card-content>\r\n      </ion-card>  \r\n      <ion-card class=\"video-card mb-lg\"  *ngIf=\"i == 0 && (progItem?.nutrition_id || progItem?.video_program)\">\r\n        <ion-card-content class=\"ion-no-padding\" *ngIf=\"!programDetail.displayData\">\r\n          <ion-slides [options]=\"sliderOpts\" class=\"inner-slider bg-grey py-md mb-10\">\r\n            <!-- <ion-slide *ngIf=\"progItem?.video_program\" (click)=\"showVideoDetails(item.posts_id)\" > -->\r\n              <ion-slide *ngFor=\"let item of progItem?.videoProg_array \" (click)=\"showVideoDetails(item)\" >\r\n                <div class=\"program__image\">\r\n                  <img src=\"../../../assets/images/video.png\" style=\"width:100% !important\" />\r\n                </div>\r\n                <div class=\"program__title\">\r\n                  <ion-label>Video</ion-label>\r\n                </div>\r\n            </ion-slide>  \r\n            <ion-slide *ngFor=\"let item of progItem?.videoId_array\" (click)=\"showVideoDetails(item)\">\r\n              <div class=\"program__image\">\r\n                <img src=\"../../../assets/images/video.png\" style=\"width:100% !important\" />\r\n              </div>\r\n              <div class=\"program__title\">\r\n                <ion-label>Video</ion-label>\r\n              </div>\r\n           </ion-slide> \r\n            <ion-slide *ngFor=\"let item of nutritionList \"   >\r\n              <div class=\"program__image\"  (click)=\"nutritionModal(progItem)\">\r\n                <img src=\"{{url}}{{item?.fImage}}\" *ngIf=\"item?.fImage\" />\r\n                <img src=\"../../assets/images/nutrition2.png\" *ngIf=\"!item?.fImage\" style=\"width:100% !important; height: auto;\"/>\r\n              </div>\r\n              <div class=\"program__title\">\r\n                <ion-label>{{item?.title}}</ion-label>\r\n              </div>\r\n            </ion-slide>  \r\n          </ion-slides>\r\n        </ion-card-content>\r\n      </ion-card>\r\n     \r\n    </div>\r\n    \r\n  </ion-list>\r\n  <div class=\"bottom-space\">\r\n  </div>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list lines=\"none\" class=\"top-list three-block\">\r\n        <ion-item (click)=\"equipments()\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-construct\" md=\"md-construct\"></ion-icon>\r\n          </div>\r\n          <ion-label>Equipments</ion-label>\r\n        </ion-item>\r\n        <ion-item  (click)=\"showParticipants()\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-people\" md=\"md-people\"></ion-icon>\r\n          </div>\r\n          <ion-label>Participants</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"programDetail?.chat_status == 1\" (click)=\"showChatUsers()\" detail=\"false\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-text\" md=\"md-text\"></ion-icon>\r\n          </div>\r\n          <ion-label>Chat</ion-label>\r\n        </ion-item>\r\n        <ion-item detail=\"false\" (click)=\"showSchedule(programDetail)\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n          </div>\r\n          <ion-label>View Schedule</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <!-- <ion-col>\r\n      <ion-fab class=\"share-btn\" *ngIf=\"programDetail?.is_requested == 1\">\r\n        <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n          <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n      </ion-col> -->\r\n  </ion-row>  \r\n</ion-content>\r\n<!-- <ion-footer class=\"sticky-footer\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && !programDetail?.live \">\r\n  <ion-button expand=\"full\" *ngIf=\" !adData && (hh | async)>23\" (click)=\"applyAdvertise()\" class=\"green ion-text-uppercase ion-no-margin full-height\"> Apply For Advertise sponser</ion-button>\r\n  <ion-button expand=\"full\" *ngIf=\"adData?.id && adData?.video_approve_status== 1\" (click)=\"showSponsersList()\"   class=\"green ion-text-uppercase ion-no-margin full-height\" >See Ad Sponser Options  </ion-button>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/program/program-details/program-details-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/program/program-details/program-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProgramDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDetailsPageRoutingModule", function() { return ProgramDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _program_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program-details.page */ "./src/app/program/program-details/program-details.page.ts");




const routes = [
    {
        path: '',
        component: _program_details_page__WEBPACK_IMPORTED_MODULE_3__["ProgramDetailsPage"]
    }
];
let ProgramDetailsPageRoutingModule = class ProgramDetailsPageRoutingModule {
};
ProgramDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgramDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/program/program-details/program-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/program/program-details/program-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProgramDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDetailsPageModule", function() { return ProgramDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _program_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./program-details-routing.module */ "./src/app/program/program-details/program-details-routing.module.ts");
/* harmony import */ var _program_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program-details.page */ "./src/app/program/program-details/program-details.page.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");








let ProgramDetailsPageModule = class ProgramDetailsPageModule {
};
ProgramDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _program_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramDetailsPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]
        ],
        declarations: [_program_details_page__WEBPACK_IMPORTED_MODULE_6__["ProgramDetailsPage"]]
    })
], ProgramDetailsPageModule);



/***/ }),

/***/ "./src/app/program/program-details/program-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/program/program-details/program-details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-list {\n  padding: 0;\n  margin: 10px 0;\n  padding: 0;\n  margin: 10px 0;\n  position: fixed;\n  width: 100%;\n  bottom: 10px; }\n\n.top-list ion-item {\n  --min-height: 85px;\n  background: #FFF;\n  box-shadow: none; }\n\n.top-list ion-item ion-label {\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem; }\n\n.users-list {\n  display: block;\n  width: 100%;\n  margin-bottom: 0; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: 100%;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background:transparent; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%; }\n\n.users-list ion-item span {\n  margin-left: -25px; }\n\n.users-list ion-item span:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -25px; }\n\n.list-info {\n  display: flex;\n  padding: 6px;\n  margin-bottom: 0; }\n\n.list-info ion-item {\n  width: 48%;\n  box-shadow: 0.001em 5px 12px rgba(34, 35, 58, 0.09);\n  margin: auto;\n  margin-bottom: 8px; }\n\n.list-info ion-item img {\n  width: 24px;\n  margin-right: 8px; }\n\n.list-info ion-item ion-label {\n  font-size: 0.85rem; }\n\n.infoBox {\n  background: #e9f6f5;\n  padding: 15px;\n  text-align: center; }\n\n.infoBox h6 {\n    margin: 0;\n    font-size: 14px; }\n\n.icon-text {\n  text-align: center; }\n\n.programDesc p {\n  line-height: 1.5; }\n\n.right-div {\n  display: flex;\n  align-items: center; }\n\n.btnVerify {\n  width: 100%;\n  margin: 0;\n  background: #27a69a;\n  --background: #27a69a;\n  --border-radius: 0;\n  border-radius: 0;\n  height: 50px; }\n\n.counter-box {\n  margin-bottom: 0; }\n\n.count_time {\n  font-size: 16px; }\n\nion-slides {\n  height: auto; }\n\n.list-info ion-item img {\n  margin: 0; }\n\n.list-info ion-item.item-label.item.md.in-list.ion-focusable.hydrated {\n  width: 25% !important;\n  margin: 0 auto;\n  text-align: center; }\n\n.counter-box ion-col.ion-no-padding.md.hydrated {\n  flex: 0 0 calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.counter-box ion-col.ion-no-padding.mt-15.green-text.md.hydrated, ion-col.ion-no-padding.mt-15.program-time.md.hydrated {\n  flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.counter-box ion-col.ion-no-padding.ios.hydrated {\n  flex: 0 0 calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.counter-box ion-col.ion-no-padding.mt-15.green-text.ios.hydrated, ion-col.ion-no-padding.mt-15.program-time.ios.hydrated {\n  flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important;\n  max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%) !important; }\n\n.min-width-none {\n  min-width: 0px !important; }\n\n.pl-8 {\n  padding-left: 8px !important; }\n\n@media only screen and (max-width: 360px) {\n  p.text-green.text-center[_ngcontent-fca-c8] {\n    top: 0 !important; } }\n\n@media only screen and (max-width: 375px) {\n  p.text-green.text-center[_ngcontent-fca-c8] {\n    top: 35px !important; } }\n\n.program__image {\n  height: 180px;\n  width: 100% !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.199);\n  border-radius: 10px; }\n\n.bg-grey {\n  background: #f7f7f7; }\n\nion-text.md.hydrated p.text-green.text-center {\n  top: 35px;\n  left: 0px; }\n\nion-slide.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active {\n  flex-direction: column;\n  height: auto;\n  width: 47% !important;\n  margin-left: 10px; }\n\nion-list.item-list.ion-no-padding.md.list-md.list-lines-none.list-md-lines-none.hydrated {\n  margin-bottom: 0; }\n\nion-list.top-list.three-block.md.list-md.list-lines-none.list-md-lines-none.hydrated {\n  margin-bottom: -10px; }\n\nion-slide.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-next {\n  flex-direction: column;\n  height: auto;\n  width: 47% !important;\n  margin-left: 10px; }\n\nion-text.ios.hydrated p.text-green.text-center {\n  top: 0px;\n  left: 0px; }\n\np.text-green.text-center {\n  width: auto; }\n\nion-list.top-list.three-block.ios.list-ios.list-lines-none.list-ios-lines-none.hydrated {\n  margin-bottom: -10px !important; }\n\nion-slide.ios.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-next {\n  flex-direction: column;\n  height: auto;\n  width: 47% !important;\n  margin-left: 10px; }\n\nion-slide.ios.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active {\n  flex-direction: column;\n  height: auto;\n  width: 47% !important;\n  margin-left: 10px; }\n\n.bottom-space {\n  height: 30px;\n  width: 100%;\n  background: transparents; }\n\n.mb-lg {\n  margin-bottom: 50px; }\n\n.py-md {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 10px; }\n\n::ng-deep .sc-ion-card-ios-h {\n  -webkit-margin-start: 0 !important;\n  margin-inline-start: 0 !important;\n  -webkit-margin-end: 0 !important;\n  margin-inline-end: 0 !important; }\n\n::ng-deep .sc-ion-card-md-h {\n  -webkit-margin-start: 0 !important;\n  margin-inline-start: 0 !important;\n  -webkit-margin-end: 0 !important;\n  margin-inline-end: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLWRldGFpbHMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXHByb2dyYW0tZGV0YWlsc1xccHJvZ3JhbS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFVBQVU7RUFBQyxjQUFjO0VBQUMsVUFBVTtFQUFDLGNBQWM7RUFBQyxlQUFlO0VBQUMsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDdEc7RUFBbUIsa0JBQWE7RUFBTSxnQkFBZ0I7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDdkU7RUFBNkIsY0FBYztFQUFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxTQUFTO0VBQUMsMkJBQTJCO0VBQUMsY0FBYyxFQUFBOztBQUMvSDtFQUFVLFdBQVc7RUFBQyxZQUFZO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLFVBQVU7RUFBQyxTQUFTO0VBQUMsMkJBQTJCLEVBQUE7O0FBQ3ZNO0VBQW9CLGNBQWM7RUFBQyxrQkFBa0IsRUFBQTs7QUFFckQ7RUFBWSxjQUFjO0VBQUMsV0FBVztFQUFDLGdCQUFnQixFQUFBOztBQUN2RDtFQUFxQixrQkFBYTtFQUFNLGFBQWE7RUFBQyxXQUFXO0VBQUMsa0JBQWdCO0VBQUcsc0JBQW9CO0VBQUcsd0JBQWEsRUFBQTs7QUFDekg7RUFBeUIsV0FBVztFQUFDLFlBQVk7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3RGO0VBQTBCLGtCQUFrQixFQUFBOztBQUM1QztFQUFzQyxjQUFjLEVBQUE7O0FBQ3BEO0VBQVUsV0FBVTtFQUFDLFlBQVc7RUFBQyxlQUFlO0VBQUMsa0JBQWlCO0VBQUMsbUJBQWtCO0VBQUMsa0JBQWlCO0VBQUMsYUFBWTtFQUFDLHVCQUFzQjtFQUFDLG1CQUFrQjtFQUFDLFNBQVM7RUFBQyxrQkFBa0IsRUFBQTs7QUFFM0w7RUFBVyxhQUFhO0VBQUMsWUFBWTtFQUFDLGdCQUFnQixFQUFBOztBQUN0RDtFQUFvQixVQUFVO0VBQUMsbURBQW1EO0VBQUMsWUFBWTtFQUFDLGtCQUFrQixFQUFBOztBQUNsSDtFQUF3QixXQUFXO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ3JEO0VBQThCLGtCQUFrQixFQUFBOztBQUVoRDtFQUFTLG1CQUFtQjtFQUFDLGFBQWE7RUFBQyxrQkFBa0IsRUFBQTs7QUFBN0Q7SUFDSyxTQUFTO0lBQUMsZUFBZSxFQUFBOztBQUU5QjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNNLGdCQUFnQixFQUFBOztBQUV0QjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFBVyxXQUFXO0VBQ3BCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIscUJBQWE7RUFDYixrQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFWjtFQUFjLGdCQUFnQixFQUFBOztBQUNoQztFQUFhLGVBQWUsRUFBQTs7QUFDNUI7RUFBVyxZQUFZLEVBQUE7O0FBR3ZCO0VBQ0UsU0FBUyxFQUFBOztBQUVYO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFPcEI7RUFDRSx1RUFBdUU7RUFDdkUsb0VBQW9FO0VBQ3BFLHdFQUF3RSxFQUFBOztBQUUxRTtFQUNFLHdFQUF3RTtFQUN4RSxxRUFBcUU7RUFDckUseUVBQXlFLEVBQUE7O0FBSTNFO0VBQ0UsdUVBQXVFO0VBQ3ZFLG9FQUFvRTtFQUNwRSx3RUFBd0UsRUFBQTs7QUFFMUU7RUFDRSx3RUFBd0U7RUFDeEUscUVBQXFFO0VBQ3JFLHlFQUF5RSxFQUFBOztBQUczRTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFO0lBQ0UsaUJBQWlCLEVBQUEsRUFDbEI7O0FBRUg7RUFDRTtJQUNFLG9CQUFvQixFQUFBLEVBQ3JCOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLFNBQVM7RUFDVCxTQUFTLEVBQUE7O0FBR1g7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFLbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFRbkI7RUFDRSxRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUVYO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBOztBQUVyQjtFQUVJLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLCtCQUNGLEVBQUE7O0FBTkY7RUFRSSxrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQywrQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLWRldGFpbHMvcHJvZ3JhbS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbGlzdHtwYWRkaW5nOiAwO21hcmdpbjogMTBweCAwO3BhZGRpbmc6IDA7bWFyZ2luOiAxMHB4IDA7cG9zaXRpb246IGZpeGVkO3dpZHRoOiAxMDAlO2JvdHRvbTogMTBweDt9XHJcbi50b3AtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IDg1cHg7YmFja2dyb3VuZDogI0ZGRjtib3gtc2hhZG93OiBub25lO31cclxuLnRvcC1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHtwYWRkaW5nLXRvcDogMDtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA4cHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTttYXJnaW4tbGVmdDogMDt9XHJcbi50b3AtaWNvbnt3aWR0aDogNDBweDtoZWlnaHQ6IDQwcHg7YmFja2dyb3VuZDogI2U5ZjZmNTtib3JkZXItcmFkaXVzOiA1MCU7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0xMHB4O2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7fVxyXG4udG9wLWljb24gaW9uLWljb24ge2NvbG9yOiAjMjdhNjlhO2ZvbnQtc2l6ZTogMS4yNXJlbTt9XHJcblxyXG4udXNlcnMtbGlzdHtkaXNwbGF5OiBibG9jazt3aWR0aDogMTAwJTttYXJnaW4tYm90dG9tOiAwO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW17LS1taW4taGVpZ2h0OiBhdXRvO2Rpc3BsYXk6IGZsZXg7d2lkdGg6IDEwMCU7LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWd7d2lkdGg6IDQycHg7aGVpZ2h0OiA0MnB4O29iamVjdC1maXQ6IGNvdmVyO2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIHNwYW57bWFyZ2luLWxlZnQ6IC0yNXB4O31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gc3BhbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi52aWV3LWFsbHt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O21heC13aWR0aDogNDJweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmMWYwZjA7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjogMDttYXJnaW4tbGVmdDogLTI1cHg7fVxyXG5cclxuLmxpc3QtaW5mb3tkaXNwbGF5OiBmbGV4O3BhZGRpbmc6IDZweDttYXJnaW4tYm90dG9tOiAwO31cclxuLmxpc3QtaW5mbyBpb24taXRlbXt3aWR0aDogNDglO2JveC1zaGFkb3c6IDAuMDAxZW0gNXB4IDEycHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTttYXJnaW46IGF1dG87bWFyZ2luLWJvdHRvbTogOHB4O31cclxuLmxpc3QtaW5mbyBpb24taXRlbSBpbWd7d2lkdGg6IDI0cHg7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGlvbi1sYWJlbHtmb250LXNpemU6IDAuODVyZW07fVxyXG5cclxuLmluZm9Cb3h7YmFja2dyb3VuZDogI2U5ZjZmNTtwYWRkaW5nOiAxNXB4O3RleHQtYWxpZ246IGNlbnRlcjtcclxuICBoNnttYXJnaW46IDA7Zm9udC1zaXplOiAxNHB4O30gIFxyXG59XHJcbi5pY29uLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZ3JhbURlc2N7XHJcbiAgICBwe2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG59XHJcbi5yaWdodC1kaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idG5WZXJpZnl7d2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGhlaWdodDogNTBweDt9XHJcblxyXG4gIC5jb3VudGVyLWJveCB7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5jb3VudF90aW1lIHtmb250LXNpemU6IDE2cHg7fVxyXG5pb24tc2xpZGVze2hlaWdodDogYXV0bzt9XHJcblxyXG5cclxuLmxpc3QtaW5mbyBpb24taXRlbSBpbWd7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5saXN0LWluZm8gaW9uLWl0ZW0uaXRlbS1sYWJlbC5pdGVtLm1kLmluLWxpc3QuaW9uLWZvY3VzYWJsZS5oeWRyYXRlZCB7XHJcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vLyAubGlzdC1pbmZvIGlvbi1pdGVtLmlucHV0LXdyYXBwZXJ7XHJcbi8vICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy9BbmRyb2lkIFRpbWVyXHJcbi5jb3VudGVyLWJveCBpb24tY29sLmlvbi1uby1wYWRkaW5nLm1kLmh5ZHJhdGVkIHtcclxuICBmbGV4OiAwIDAgY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICB3aWR0aDogY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IGNhbGMoY2FsYygzIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvdW50ZXItYm94IGlvbi1jb2wuaW9uLW5vLXBhZGRpbmcubXQtMTUuZ3JlZW4tdGV4dC5tZC5oeWRyYXRlZCwgaW9uLWNvbC5pb24tbm8tcGFkZGluZy5tdC0xNS5wcm9ncmFtLXRpbWUubWQuaHlkcmF0ZWQge1xyXG4gIGZsZXg6IDAgMCBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICB3aWR0aDogY2FsYyhjYWxjKDEyIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9JT1MgVGltZXJcclxuLmNvdW50ZXItYm94IGlvbi1jb2wuaW9uLW5vLXBhZGRpbmcuaW9zLmh5ZHJhdGVkIHtcclxuICBmbGV4OiAwIDAgY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICB3aWR0aDogY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IGNhbGMoY2FsYygzIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvdW50ZXItYm94IGlvbi1jb2wuaW9uLW5vLXBhZGRpbmcubXQtMTUuZ3JlZW4tdGV4dC5pb3MuaHlkcmF0ZWQsIGlvbi1jb2wuaW9uLW5vLXBhZGRpbmcubXQtMTUucHJvZ3JhbS10aW1lLmlvcy5oeWRyYXRlZCB7XHJcbiAgZmxleDogMCAwIGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKGNhbGMoMTIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IGNhbGMoY2FsYygxMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWluLXdpZHRoLW5vbmUge1xyXG4gIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsLTh7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcclxuICBwLnRleHQtZ3JlZW4udGV4dC1jZW50ZXJbX25nY29udGVudC1mY2EtYzhdIHtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICBwLnRleHQtZ3JlZW4udGV4dC1jZW50ZXJbX25nY29udGVudC1mY2EtYzhdIHtcclxuICAgIHRvcDogMzVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4ucHJvZ3JhbV9faW1hZ2V7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xOTkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmJnLWdyZXl7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxufVxyXG4vLyBBbmRyb2lkIENTU1xyXG5cclxuaW9uLXRleHQubWQuaHlkcmF0ZWQgcC50ZXh0LWdyZWVuLnRleHQtY2VudGVyIHtcclxuICB0b3A6IDM1cHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGUubWQuc3dpcGVyLXNsaWRlLnN3aXBlci16b29tLWNvbnRhaW5lci5oeWRyYXRlZC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNDclICFpbXBvcnRhbnQ7IFxyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi8vIGlvbi1jYXJkLnZpZGVvLWNhcmQuc2MtaW9uLWNhcmQtbWQtaC5zYy1pb24tY2FyZC1tZC1zLm1kLmh5ZHJhdGVkIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbi8vIH1cclxuaW9uLWxpc3QuaXRlbS1saXN0Lmlvbi1uby1wYWRkaW5nLm1kLmxpc3QtbWQubGlzdC1saW5lcy1ub25lLmxpc3QtbWQtbGluZXMtbm9uZS5oeWRyYXRlZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5pb24tbGlzdC50b3AtbGlzdC50aHJlZS1ibG9jay5tZC5saXN0LW1kLmxpc3QtbGluZXMtbm9uZS5saXN0LW1kLWxpbmVzLW5vbmUuaHlkcmF0ZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGUubWQuc3dpcGVyLXNsaWRlLnN3aXBlci16b29tLWNvbnRhaW5lci5oeWRyYXRlZC5zd2lwZXItc2xpZGUtbmV4dCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDQ3JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi8vIGlvbi1jYXJkLnZpZGVvLWNhcmQuc2MtaW9uLWNhcmQtbWQtaC5zYy1pb24tY2FyZC1tZC1zLm1kLmh5ZHJhdGVkIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBJT1MgQ1NTXHJcblxyXG5pb24tdGV4dC5pb3MuaHlkcmF0ZWQgcC50ZXh0LWdyZWVuLnRleHQtY2VudGVyIHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxucC50ZXh0LWdyZWVuLnRleHQtY2VudGVyIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5pb24tbGlzdC50b3AtbGlzdC50aHJlZS1ibG9jay5pb3MubGlzdC1pb3MubGlzdC1saW5lcy1ub25lLmxpc3QtaW9zLWxpbmVzLW5vbmUuaHlkcmF0ZWQge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNsaWRlLmlvcy5zd2lwZXItc2xpZGUuc3dpcGVyLXpvb20tY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1zbGlkZS1uZXh0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuaW9uLXNsaWRlLmlvcy5zd2lwZXItc2xpZGUuc3dpcGVyLXpvb20tY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA0NyUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uYm90dG9tLXNwYWNle1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudHM7XHJcbn1cclxuLm1iLWxne1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnB5LW1ke1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwe1xyXG4gIC5zYy1pb24tY2FyZC1pb3MtaCB7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDsgXHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDAgIWltcG9ydGFudDsgXHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIC5zYy1pb24tY2FyZC1tZC1oIHtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwICFpbXBvcnRhbnQ7IFxyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwICFpbXBvcnRhbnRcclxuICB9XHJcbn1cclxuXHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/program/program-details/program-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/program/program-details/program-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProgramDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDetailsPage", function() { return ProgramDetailsPage; });
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
let ProgramDetailsPage = class ProgramDetailsPage {
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
    showVideoDetails(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_21__["ViewVideoDetailComponent"], 'fullModal', { 'details': item });
        });
    }
    joinRoom() {
        if (this.roomID.length == 0) {
            alert("Kindly Enter Room ID");
            return;
        }
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
            console.log(data);
            this.programDetail = data.programData;
            console.log("PG: " + this.programDetail);
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
            this.programService.getAdDetail({ 'programId': advtProgId }).subscribe(data => {
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
    goBack() {
        this.navCtrl.back();
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
};
ProgramDetailsPage.ctorParameters = () => [
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
ProgramDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-program-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./program-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-details/program-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./program-details.page.scss */ "./src/app/program/program-details/program-details.page.scss")).default]
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
], ProgramDetailsPage);



/***/ })

}]);
//# sourceMappingURL=program-program-details-program-details-module-es2015.js.map