(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-videos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>My Videos</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-card class=\"ion-no-margin\">\r\n    <ion-card-content class=\"ion-no-padding item-content\">\r\n  <ion-thumbnail>\r\n    <img *ngIf=\"noImgData\" width=\"100%\" height=\"210px\" src=\"../../../assets/images/loading.jpg\">\r\n    <img *ngIf=\"!noImgData\" (click)=\"playVideo()\" width=\"100%\" height=\"210px\" src=\"{{videoThumbPath}}\">\r\n  </ion-thumbnail>\r\n  <ion-icon (click)=\"playVideo()\" ios=\"ios-play\" md=\"md-play\" class=\"play-videoBtn\"></ion-icon>\r\n</ion-card-content>\r\n</ion-card>\r\n  <!-- <video width=\"100%\" height=\"210px\" controls disablePictureInPicture controlsList=\"nodownload\" preload=\"metadata\" autoplay=\"autoplay\" webkit-playsinline=\"webkit-playsinline\" class=\"mb-10 videoPlayer\">\r\n    <source src=\"{videoDataPath}\" type=\"video/mp4\" />\r\n  </video> -->\r\n    <h6 class=\"ion-padding-horizontal\">{{title}}</h6>\r\n  <ion-list class=\"top-list\">\r\n    <ion-item (click)=\"liked(postID, likePost)\" [ngClass]=\"likePost ? 'active' :''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon></div>\r\n      <ion-label>{{ postLikesCount > 0 ? postLikesCount : 0 }}</ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/comments',postID]\" *ngIf=\" !disableComment\" detail=\"false\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon></div>\r\n      <ion-label>{{ commentCount > 0 ? commentCount : 0 }}</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"shareItem()\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon></div>\r\n      <ion-label>Share</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"info=!info\" [ngClass]=\"info?'active':''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon></div>\r\n      <ion-label>Info</ion-label>\r\n    </ion-item>\r\n    <ion-item  (click)=\"addBookmark()\"  [ngClass]=\"bookmark?'active':''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon></div>\r\n      <ion-label>Bookmark</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list class=\"info-block ion-padding\" *ngIf=\"info\" [ngClass]=\"info?'active':''\">\r\n    <p>{{description}}</p>\r\n    <p>&nbsp;</p>\r\n    <p>Published on {{createdAt}}</p>\r\n    <p>Credits - {{postUserName}}</p>\r\n  </ion-list>\r\n  <ion-list *ngIf=\"type != 'exclusive'\" lines=\"none\" class=\"video-list\">\r\n    <ion-list-header>Up Next</ion-list-header>\r\n    <div *ngIf=\"videoType == 1\">      \r\n      <div *ngFor=\"let post of upNext\">         \r\n        <div *ngFor = \"let nextpost of post.open_video_post\">           \r\n        <ion-item  [routerLink]=\"['/videos',post.id,'']\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>{{nextpost.title}}</h3>\r\n            <p class=\"text-gray\">{{nextpost.description}}</p>\r\n            <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        \r\n      </div>\r\n      </div>\r\n    </div>    \r\n    <div *ngIf=\"videoType == 2\">\r\n      <div *ngFor=\"let post of upNext\"> \r\n        <div *ngFor = \"let nextpost of post.exclusive_video_post\">          \r\n        <ion-item [routerLink]=\"['/videos',post.id,'']\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>{{nextpost.title}}</h3>\r\n            <p class=\"text-gray\">{{nextpost.description}}</p>\r\n            <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div *ngIf=\"videoType == 3\">\r\n        <div *ngFor=\"let post of upNext\"> \r\n          <div *ngFor = \"let nextpost of post.save_video_post\">            \r\n          <ion-item  [routerLink]=\"['/videos',post.id,'']\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3>{{nextpost.title}}</h3>\r\n              <p class=\"text-gray\">{{nextpost.description}}</p>\r\n              <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div *ngIf=\"noData\" class=\"no-data\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Data Found</p>\r\n        </div>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/videos/videos-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/videos/videos-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VideosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageRoutingModule", function() { return VideosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos.page */ "./src/app/videos/videos.page.ts");




const routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_3__["VideosPage"]
    }
];
let VideosPageRoutingModule = class VideosPageRoutingModule {
};
VideosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideosPageRoutingModule);



/***/ }),

/***/ "./src/app/videos/videos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.module.ts ***!
  \*****************************************/
/*! exports provided: VideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageModule", function() { return VideosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _videos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videos-routing.module */ "./src/app/videos/videos-routing.module.ts");
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos.page */ "./src/app/videos/videos.page.ts");







let VideosPageModule = class VideosPageModule {
};
VideosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _videos_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideosPageRoutingModule"]
        ],
        declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]]
    })
], VideosPageModule);



/***/ }),

/***/ "./src/app/videos/videos.page.scss":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\n  font-size: 1rem;\n  line-height: 1.35; }\n\n.top-list {\n  padding: 0; }\n\n.top-list ion-item {\n  --min-height:50px;\n  background: #FFF;\n  color: #666666; }\n\n.top-list ion-item ion-label {\n  margin-left: 5px;\n  padding-top: 0; }\n\n.top-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #888888;\n  font-size: 1.25rem; }\n\n.top-list ion-item ion-label {\n  position: absolute;\n  bottom: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.info-block {\n  border-bottom: 1px solid #dedede;\n  transition: all .5s ease-in-out;\n  height: 0; }\n\n.info-block.active {\n  height: auto; }\n\n.info-block p {\n  color: #5a5a5a;\n  margin-bottom: 5px; }\n\n.info-block p:last-child {\n  margin-bottom: 0; }\n\n.video-list ion-item ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  width: 100px;\n  height: 65px; }\n\n.video-list ion-item h3 {\n  white-space: normal;\n  font-weight: 400; }\n\n.video-list ion-item p {\n  color: #5a5a5a; }\n\n.active .top-icon ion-icon {\n  color: #27a69a; }\n\n.ios.info-block {\n  margin-bottom: 0; }\n\n.ios .video-list ion-item ion-avatar {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.play-videoBtn {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3.5rem;\n  color: #FFF !important; }\n\nion-card {\n  margin: 0;\n  border-radius: 0; }\n\nion-card ion-card-content ion-thumbnail {\n    height: 270px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcdmlkZW9zXFx2aWRlb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsZUFBZTtFQUFDLGlCQUFpQixFQUFBOztBQUNwQztFQUFVLFVBQVUsRUFBQTs7QUFDcEI7RUFBbUIsaUJBQWE7RUFBSyxnQkFBZ0I7RUFBQyxjQUFjLEVBQUE7O0FBQ3BFO0VBQTZCLGdCQUFnQjtFQUFDLGNBQWMsRUFBQTs7QUFDNUQ7RUFBVSxXQUFXO0VBQUMsWUFBWTtFQUFDLGtCQUFrQjtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxVQUFVO0VBQUMsU0FBUztFQUFDLDJCQUEyQixFQUFBOztBQUNuTDtFQUFvQixjQUFjO0VBQUUsa0JBQWtCLEVBQUE7O0FBQ3REO0VBQTZCLGtCQUFrQjtFQUFDLFdBQVU7RUFBQyxTQUFTO0VBQUMsMkJBQTJCO0VBQUMsY0FBYyxFQUFBOztBQUUvRztFQUFZLGdDQUFnQztFQUFDLCtCQUErQjtFQUFDLFNBQVMsRUFBQTs7QUFDdEY7RUFBbUIsWUFBWSxFQUFBOztBQUMvQjtFQUFjLGNBQWM7RUFBQyxrQkFBa0IsRUFBQTs7QUFDL0M7RUFBeUIsZ0JBQWdCLEVBQUE7O0FBQ3pDO0VBQWdDLGdCQUFnQjtFQUFDLGtCQUFnQjtFQUFHLFlBQVk7RUFBQyxZQUFZLEVBQUE7O0FBQzdGO0VBQXdCLG1CQUFtQjtFQUFDLGdCQUFnQixFQUFBOztBQUM1RDtFQUF1QixjQUFjLEVBQUE7O0FBRXJDO0VBQTJCLGNBQWMsRUFBQTs7QUFHekM7RUFBZ0IsZ0JBQWdCLEVBQUE7O0FBQ2hDO0VBQXFDLGFBQWE7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDbkU7RUFBZSxrQkFBa0I7RUFBQyxTQUFTO0VBQUUsUUFBUTtFQUFFLGdDQUFnQztFQUFHLGlCQUFpQjtFQUFDLHNCQUFxQixFQUFBOztBQUNqSTtFQUFTLFNBQVM7RUFBQyxnQkFBZ0IsRUFBQTs7QUFBbkM7SUFFc0IsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3ZpZGVvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNntmb250LXNpemU6IDFyZW07bGluZS1oZWlnaHQ6IDEuMzU7fVxyXG4udG9wLWxpc3R7cGFkZGluZzogMDt9XHJcbi50b3AtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6NTBweDtiYWNrZ3JvdW5kOiAjRkZGO2NvbG9yOiAjNjY2NjY2O31cclxuLnRvcC1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHttYXJnaW4tbGVmdDogNXB4O3BhZGRpbmctdG9wOiAwO31cclxuLnRvcC1pY29ue3dpZHRoOiAzNHB4O2hlaWdodDogMzRweDtib3JkZXItcmFkaXVzOiA1MCU7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0xMHB4O2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7fVxyXG4udG9wLWljb24gaW9uLWljb24ge2NvbG9yOiAjODg4ODg4Oztmb250LXNpemU6IDEuMjVyZW07fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206NnB4O2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7bWFyZ2luLWxlZnQ6IDA7fVxyXG5cclxuLmluZm8tYmxvY2t7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtoZWlnaHQ6IDA7fVxyXG4uaW5mby1ibG9jay5hY3RpdmV7aGVpZ2h0OiBhdXRvO31cclxuLmluZm8tYmxvY2sgcHtjb2xvcjogIzVhNWE1YTttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4uaW5mby1ibG9jayBwOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi52aWRlby1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXJ7Ym9yZGVyLXJhZGl1czogMDstLWJvcmRlci1yYWRpdXM6IDA7d2lkdGg6IDEwMHB4O2hlaWdodDogNjVweDt9XHJcbi52aWRlby1saXN0IGlvbi1pdGVtIGgze3doaXRlLXNwYWNlOiBub3JtYWw7Zm9udC13ZWlnaHQ6IDQwMDt9XHJcbi52aWRlby1saXN0IGlvbi1pdGVtIHB7Y29sb3I6ICM1YTVhNWE7fVxyXG5cclxuLmFjdGl2ZSAudG9wLWljb24gaW9uLWljb257Y29sb3I6ICMyN2E2OWE7fVxyXG5cclxuLy8gY3NzIGZvciBpb3NcclxuLmlvcy5pbmZvLWJsb2Nre21hcmdpbi1ib3R0b206IDA7fVxyXG4uaW9zIC52aWRlby1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXJ7bWFyZ2luLXRvcDogMDttYXJnaW4tYm90dG9tOiAwO31cclxuLnBsYXktdmlkZW9CdG57cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDUwJTsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAgZm9udC1zaXplOiAzLjVyZW07Y29sb3I6I0ZGRiAhaW1wb3J0YW50fVxyXG5pb24tY2FyZHttYXJnaW46IDA7Ym9yZGVyLXJhZGl1czogMDtcclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbHtoZWlnaHQ6IDI3MHB4O31cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/videos/videos.page.ts":
/*!***************************************!*\
  !*** ./src/app/videos/videos.page.ts ***!
  \***************************************/
/*! exports provided: VideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPage", function() { return VideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-program/user-modal/user-modal.component */ "./src/app/add-program/user-modal/user-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");











const baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].ApiUrl;
let VideosPage = class VideosPage {
    constructor(commonService, actRoute, postService, peopleView, streamingMedia, navCtrl, socialSharing) {
        this.commonService = commonService;
        this.actRoute = actRoute;
        this.postService = postService;
        this.peopleView = peopleView;
        this.streamingMedia = streamingMedia;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.info = false;
        this.disableComment = true;
        this.bookmark = false;
        this.noData = false;
        this.noImgData = false;
        this.actRoute.paramMap.subscribe((params) => {
            this.postID = params.get('id');
            this.type = params.get('type');
        });
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        this.storagePath = baseUrl + 'storage/';
    }
    ngOnInit() {
        this.noImgData = true;
        console.log(this.postID);
        this.postService.getPostById({ 'postId': this.postID }).subscribe((data) => {
            this.postData = data.postData;
            this.postUserName = data.postData.post_user.user_name;
            console.log(data);
            this.postUserId = data.postData.post_user.id;
            this.disableComment = data.postData.disable_comment;
            this.title = data.postData.video_post[0].title;
            this.description = data.postData.video_post[0].description;
            this.createdAt = data.postData.created_at;
            this.commentCount = data.postData.total_comments.length;
            this.postLikesCount = data.postData.post_likes.length;
            this.likePost = (data.postData.post_likes.user_id == this.postUserId ? 'true' : 'false');
            this.videoDataPath = this.storagePath + data.postData.video_post[0].video_path;
            this.videoThumbPath = this.storagePath + data.postData.video_post[0].thumb_path;
            this.videoType = data.postData.video_post[0].video_type;
            // console.log("this.videoType: " + this.videoType);
            this.noImgData = false;
            if (this.type != 'exclusive') {
                this.commonService.presentLoader();
                this.peopleView.upNextPost('2', this.postUserId, this.videoType, this.postID).subscribe((data) => {
                    this.upNext = data.postData;
                    this.commonService.dismissLoader();
                    if (this.upNext.length < 1) {
                        this.noData = true;
                    }
                });
            }
            this.postData.post_bookmarks.filter((f) => {
                if (f.user_id == this.loginUserData.id) {
                    this.bookmark = true;
                }
            });
            console.log(this.postData);
        });
    }
    playVideo() {
        let options = {
            successCallback: () => { console.log('Video played'); },
            errorCallback: (e) => { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(this.videoDataPath, options);
    }
    liked(postId, likeStat) {
        this.likePost = !likeStat;
        if (likeStat) {
            this.postLikesCount = (this.postLikesCount - 1);
            console.log(this.postLikesCount);
        }
        else {
            this.postLikesCount = (this.postLikesCount + 1);
            console.log(this.postLikesCount);
        }
        this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    shareModal() {
        this.commonService.presentModal(_add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_3__["UserModalComponent"], 'fullModal', '');
    }
    addBookmark() {
        this.peopleView.bookmarkPost({ 'postId': this.postID, 'bookmark': this.bookmark, 'post_type': 2 }).subscribe((data) => {
            if (data.status) {
                this.bookmark = !this.bookmark;
                this.commonService.presentToast(data.status);
            }
        });
    }
    //------------------ -- GO BACK  ------------
    goBack() {
        this.navCtrl.back();
    }
    shareItem() {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share("Intoactive Video", "", "", "https://ionicinto.wdipl.com/videos/" + this.postID)
            .then(() => {
        })
            .catch(() => {
        });
    }
};
VideosPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_8__["PeopleViewService"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"])
], VideosPage.prototype, "navChild", void 0);
VideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./videos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./videos.page.scss */ "./src/app/videos/videos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_8__["PeopleViewService"],
        _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]])
], VideosPage);



/***/ })

}]);
//# sourceMappingURL=videos-videos-module-es2015.js.map