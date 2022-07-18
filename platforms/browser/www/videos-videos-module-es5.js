function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-videos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideosVideosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>My Videos</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <!-- <ion-card class=\"ion-no-margin\">\r\n    <ion-card-content class=\"ion-no-padding item-content\">\r\n  <ion-thumbnail>\r\n    <img *ngIf=\"noImgData\" width=\"100%\" height=\"210px\" src=\"../../../assets/images/loading.jpg\">\r\n    <img *ngIf=\"!noImgData\" (click)=\"playVideo()\" width=\"100%\" height=\"210px\" src=\"{{videoThumbPath}}\">\r\n  </ion-thumbnail>\r\n  <ion-icon (click)=\"playVideo()\" ios=\"ios-play\" md=\"md-play\" class=\"play-videoBtn\"></ion-icon>\r\n</ion-card-content>\r\n</ion-card> -->\r\n  <video width=\"100%\" height=\"210px\" controls disablePictureInPicture controlsList=\"nodownload\" preload=\"metadata\" autoplay=\"autoplay\" webkit-playsinline=\"webkit-playsinline\"  class=\"mb-10 videoPlayer\">\r\n    <source *ngIf=\"videoDataPath != '' \" src=\"{{videoDataPath}}\" type=\"video/mp4\" />\r\n  </video>\r\n  \r\n    <h6 class=\"ion-padding-horizontal\">{{title}}</h6>\r\n  <ion-list class=\"top-list\">\r\n    <ion-item (click)=\"liked(postID, likePost)\" [ngClass]=\"likePost ? 'active' :''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon></div>\r\n      <ion-label>{{ postLikesCount > 0 ? postLikesCount : 0 }}</ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/comments',postID]\" *ngIf=\" !disableComment\" detail=\"false\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon></div>\r\n      <ion-label>{{ commentCount > 0 ? commentCount : 0 }}</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"shareItem()\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon></div>\r\n      <ion-label>Share</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"info=!info\" [ngClass]=\"info?'active':''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon></div>\r\n      <ion-label>Info</ion-label>\r\n    </ion-item>\r\n    <ion-item  (click)=\"addBookmark()\"  [ngClass]=\"bookmark?'active':''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon></div>\r\n      <ion-label>Bookmark</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list class=\"info-block ion-padding\" *ngIf=\"info\" [ngClass]=\"info?'active':''\">\r\n    <p>{{description}}</p>\r\n    <p>&nbsp;</p>\r\n    <p>Published on {{createdAt}}</p>\r\n    <p>Credits - {{postUserName}}</p>\r\n  </ion-list>\r\n  <ion-list *ngIf=\"type != 'exclusive'\" lines=\"none\" class=\"video-list\">\r\n    <ion-list-header>Up Next</ion-list-header>\r\n    <div *ngIf=\"videoType == 1\">      \r\n      <div *ngFor=\"let post of upNext\">         \r\n        <div *ngFor = \"let nextpost of post.open_video_post\">           \r\n        <ion-item  [routerLink]=\"['/videos',post.id,'']\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>{{nextpost.title}}</h3>\r\n            <p class=\"text-gray\">{{nextpost.description}}</p>\r\n            <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        \r\n      </div>\r\n      </div>\r\n    </div>    \r\n    <div *ngIf=\"videoType == 2\">\r\n      <div *ngFor=\"let post of upNext\"> \r\n        <div *ngFor = \"let nextpost of post.exclusive_video_post\">          \r\n        <ion-item [routerLink]=\"['/videos',post.id,'']\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>{{nextpost.title}}</h3>\r\n            <p class=\"text-gray\">{{nextpost.description}}</p>\r\n            <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div *ngIf=\"videoType == 3\">\r\n        <div *ngFor=\"let post of upNext\"> \r\n          <div *ngFor = \"let nextpost of post.save_video_post\">            \r\n          <ion-item  [routerLink]=\"['/videos',post.id,'']\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3>{{nextpost.title}}</h3>\r\n              <p class=\"text-gray\">{{nextpost.description}}</p>\r\n              <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div *ngIf=\"noData\" class=\"no-data\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Data Found</p>\r\n        </div>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/videos/videos-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/videos/videos-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: VideosPageRoutingModule */

  /***/
  function srcAppVideosVideosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideosPageRoutingModule", function () {
      return VideosPageRoutingModule;
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


    var _videos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./videos.page */
    "./src/app/videos/videos.page.ts");

    var routes = [{
      path: '',
      component: _videos_page__WEBPACK_IMPORTED_MODULE_3__["VideosPage"]
    }];

    var VideosPageRoutingModule = function VideosPageRoutingModule() {
      _classCallCheck(this, VideosPageRoutingModule);
    };

    VideosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/videos/videos.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/videos/videos.module.ts ***!
    \*****************************************/

  /*! exports provided: VideosPageModule */

  /***/
  function srcAppVideosVideosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideosPageModule", function () {
      return VideosPageModule;
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


    var _videos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./videos-routing.module */
    "./src/app/videos/videos-routing.module.ts");
    /* harmony import */


    var _videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./videos.page */
    "./src/app/videos/videos.page.ts");

    var VideosPageModule = function VideosPageModule() {
      _classCallCheck(this, VideosPageModule);
    };

    VideosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _videos_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideosPageRoutingModule"]],
      declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]]
    })], VideosPageModule);
    /***/
  },

  /***/
  "./src/app/videos/videos.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/videos/videos.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideosVideosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h6 {\n  font-size: 1rem;\n  line-height: 1.35;\n}\n\n.top-list {\n  padding: 0;\n}\n\n.top-list ion-item {\n  --min-height:50px;\n  background: #FFF;\n  color: #666666;\n}\n\n.top-list ion-item ion-label {\n  margin-left: 5px;\n  padding-top: 0;\n}\n\n.top-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.top-icon ion-icon {\n  color: #888888;\n  font-size: 1.25rem;\n}\n\n.top-list ion-item ion-label {\n  position: absolute;\n  bottom: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0;\n}\n\n.info-block {\n  border-bottom: 1px solid #dedede;\n  transition: all 0.5s ease-in-out;\n  height: 0;\n}\n\n.info-block.active {\n  height: auto;\n}\n\n.info-block p {\n  color: #5a5a5a;\n  margin-bottom: 5px;\n}\n\n.info-block p:last-child {\n  margin-bottom: 0;\n}\n\n.video-list ion-item ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  width: 100px;\n  height: 65px;\n}\n\n.video-list ion-item h3 {\n  white-space: normal;\n  font-weight: 400;\n}\n\n.video-list ion-item p {\n  color: #5a5a5a;\n}\n\n.active .top-icon ion-icon {\n  color: #27a69a;\n}\n\n.ios.info-block {\n  margin-bottom: 0;\n}\n\n.ios .video-list ion-item ion-avatar {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.play-videoBtn {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3.5rem;\n  color: #FFF !important;\n}\n\nion-card {\n  margin: 0;\n  border-radius: 0;\n}\n\nion-card ion-card-content ion-thumbnail {\n  height: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHZpZGVvc1xcdmlkZW9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlkZW9zL3ZpZGVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxlQUFBO0VBQWdCLGlCQUFBO0FDR25COztBREZBO0VBQVUsVUFBQTtBQ01WOztBRExBO0VBQW1CLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLGNBQUE7QUNXdEQ7O0FEVkE7RUFBNkIsZ0JBQUE7RUFBaUIsY0FBQTtBQ2U5Qzs7QURkQTtFQUFVLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLHVCQUFBO0VBQXdCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxTQUFBO0VBQVUsMkJBQUE7QUMyQnhKOztBRDFCQTtFQUFvQixjQUFBO0VBQWdCLGtCQUFBO0FDK0JwQzs7QUQ5QkE7RUFBNkIsa0JBQUE7RUFBbUIsV0FBQTtFQUFXLFNBQUE7RUFBVSwyQkFBQTtFQUE0QixjQUFBO0FDc0NqRzs7QURwQ0E7RUFBWSxnQ0FBQTtFQUFpQyxnQ0FBQTtFQUFnQyxTQUFBO0FDMEM3RTs7QUR6Q0E7RUFBbUIsWUFBQTtBQzZDbkI7O0FENUNBO0VBQWMsY0FBQTtFQUFlLGtCQUFBO0FDaUQ3Qjs7QURoREE7RUFBeUIsZ0JBQUE7QUNvRHpCOztBRG5EQTtFQUFnQyxnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsWUFBQTtBQzBEakY7O0FEekRBO0VBQXdCLG1CQUFBO0VBQW9CLGdCQUFBO0FDOEQ1Qzs7QUQ3REE7RUFBdUIsY0FBQTtBQ2lFdkI7O0FEL0RBO0VBQTJCLGNBQUE7QUNtRTNCOztBRGhFQTtFQUFnQixnQkFBQTtBQ29FaEI7O0FEbkVBO0VBQXFDLGFBQUE7RUFBYyxnQkFBQTtBQ3dFbkQ7O0FEdkVBO0VBQWUsa0JBQUE7RUFBbUIsU0FBQTtFQUFXLFFBQUE7RUFBVSxnQ0FBQTtFQUFtQyxpQkFBQTtFQUFrQixzQkFBQTtBQ2dGNUc7O0FEL0VBO0VBQVMsU0FBQTtFQUFVLGdCQUFBO0FDb0ZuQjs7QURsRlE7RUFBYyxhQUFBO0FDcUZ0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDZ7Zm9udC1zaXplOiAxcmVtO2xpbmUtaGVpZ2h0OiAxLjM1O31cclxuLnRvcC1saXN0e3BhZGRpbmc6IDA7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW17LS1taW4taGVpZ2h0OjUwcHg7YmFja2dyb3VuZDogI0ZGRjtjb2xvcjogIzY2NjY2Njt9XHJcbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luLWxlZnQ6IDVweDtwYWRkaW5nLXRvcDogMDt9XHJcbi50b3AtaWNvbnt3aWR0aDogMzRweDtoZWlnaHQ6IDM0cHg7Ym9yZGVyLXJhZGl1czogNTAlO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtMTBweDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO31cclxuLnRvcC1pY29uIGlvbi1pY29uIHtjb2xvcjogIzg4ODg4ODs7Zm9udC1zaXplOiAxLjI1cmVtO31cclxuLnRvcC1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOjZweDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO21hcmdpbi1sZWZ0OiAwO31cclxuXHJcbi5pbmZvLWJsb2Nre2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO3RyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7aGVpZ2h0OiAwO31cclxuLmluZm8tYmxvY2suYWN0aXZle2hlaWdodDogYXV0bzt9XHJcbi5pbmZvLWJsb2NrIHB7Y29sb3I6ICM1YTVhNWE7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuLmluZm8tYmxvY2sgcDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206IDA7fVxyXG4udmlkZW8tbGlzdCBpb24taXRlbSBpb24tYXZhdGFye2JvcmRlci1yYWRpdXM6IDA7LS1ib3JkZXItcmFkaXVzOiAwO3dpZHRoOiAxMDBweDtoZWlnaHQ6IDY1cHg7fVxyXG4udmlkZW8tbGlzdCBpb24taXRlbSBoM3t3aGl0ZS1zcGFjZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4udmlkZW8tbGlzdCBpb24taXRlbSBwe2NvbG9yOiAjNWE1YTVhO31cclxuXHJcbi5hY3RpdmUgLnRvcC1pY29uIGlvbi1pY29ue2NvbG9yOiAjMjdhNjlhO31cclxuXHJcbi8vIGNzcyBmb3IgaW9zXHJcbi5pb3MuaW5mby1ibG9ja3ttYXJnaW4tYm90dG9tOiAwO31cclxuLmlvcyAudmlkZW8tbGlzdCBpb24taXRlbSBpb24tYXZhdGFye21hcmdpbi10b3A6IDA7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5wbGF5LXZpZGVvQnRue3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiA1MCU7IHRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgIGZvbnQtc2l6ZTogMy41cmVtO2NvbG9yOiNGRkYgIWltcG9ydGFudH1cclxuaW9uLWNhcmR7bWFyZ2luOiAwO2JvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIGlvbi10aHVtYm5haWx7aGVpZ2h0OiAyNzBweDt9XHJcbiAgICB9XHJcbn1cclxuIiwiaDYge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xufVxuXG4udG9wLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4udG9wLWxpc3QgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6NTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnRvcC1pY29uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnRvcC1pY29uIGlvbi1pY29uIHtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRvcC1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmluZm8tYmxvY2sge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMDtcbn1cblxuLmluZm8tYmxvY2suYWN0aXZlIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW5mby1ibG9jayBwIHtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmluZm8tYmxvY2sgcDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnZpZGVvLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbi52aWRlby1saXN0IGlvbi1pdGVtIGgzIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnZpZGVvLWxpc3QgaW9uLWl0ZW0gcCB7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4uYWN0aXZlIC50b3AtaWNvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjMjdhNjlhO1xufVxuXG4uaW9zLmluZm8tYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW9zIC52aWRlby1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucGxheS12aWRlb0J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXRodW1ibmFpbCB7XG4gIGhlaWdodDogMjcwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/videos/videos.page.ts":
  /*!***************************************!*\
    !*** ./src/app/videos/videos.page.ts ***!
    \***************************************/

  /*! exports provided: VideosPage */

  /***/
  function srcAppVideosVideosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideosPage", function () {
      return VideosPage;
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


    var _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../add-program/user-modal/user-modal.component */
    "./src/app/add-program/user-modal/user-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/streaming-media/ngx */
    "./node_modules/@ionic-native/streaming-media/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");

    var baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].ApiUrl;

    var VideosPage = /*#__PURE__*/function () {
      function VideosPage(commonService, actRoute, postService, peopleView, streamingMedia, navCtrl, socialSharing) {
        var _this = this;

        _classCallCheck(this, VideosPage);

        this.commonService = commonService;
        this.actRoute = actRoute;
        this.postService = postService;
        this.peopleView = peopleView;
        this.streamingMedia = streamingMedia;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.info = false;
        this.videoDataPath = '';
        this.disableComment = true;
        this.bookmark = false;
        this.noData = false;
        this.noImgData = false;
        this.actRoute.paramMap.subscribe(function (params) {
          _this.postID = params.get('id');
          _this.type = params.get('type');
        });
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        this.storagePath = baseUrl + 'storage/';
      }

      _createClass(VideosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.noImgData = true;
          console.log(this.postID);
          this.postService.getPostById({
            'postId': this.postID
          }).subscribe(function (data) {
            console.log(data);
            _this2.postData = data.postData;
            _this2.postUserName = data.postData.post_user.user_name;
            _this2.postUserId = data.postData.post_user.id;
            _this2.disableComment = data.postData.disable_comment;
            _this2.title = data.postData.video_post[0].title;
            _this2.description = data.postData.video_post[0].description;
            _this2.createdAt = data.postData.created_at;
            _this2.commentCount = data.postData.total_comments.length;
            _this2.postLikesCount = data.postData.post_likes.length;
            _this2.likePost = data.postData.post_likes.user_id == _this2.postUserId ? 'true' : 'false';
            _this2.videoDataPath = _this2.storagePath + data.postData.video_post[0].video_path;
            _this2.videoThumbPath = _this2.storagePath + data.postData.video_post[0].thumb_path;
            _this2.videoType = data.postData.video_post[0].video_type; // console.log("this.videoType: " + this.videoType);

            _this2.noImgData = false;

            if (_this2.type != 'exclusive') {
              _this2.commonService.presentLoader();

              _this2.peopleView.upNextPost('2', _this2.postUserId, _this2.videoType, _this2.postID).subscribe(function (data) {
                _this2.upNext = data.postData;

                _this2.commonService.dismissLoader();

                if (_this2.upNext.length < 1) {
                  _this2.noData = true;
                }
              });
            }

            _this2.postData.post_bookmarks.filter(function (f) {
              if (f.user_id == _this2.loginUserData.id) {
                _this2.bookmark = true;
              }
            });

            console.log(_this2.postData);
          });
        }
      }, {
        key: "playVideo",
        value: function playVideo() {
          var options = {
            successCallback: function successCallback() {
              console.log('Video played');
            },
            errorCallback: function errorCallback(e) {
              console.log('Error streaming');
            },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
          };
          this.streamingMedia.playVideo(this.videoDataPath, options);
        }
      }, {
        key: "liked",
        value: function liked(postId, likeStat) {
          var _this3 = this;

          this.likePost = !likeStat;

          if (likeStat) {
            this.postLikesCount = this.postLikesCount - 1;
            console.log(this.postLikesCount);
          } else {
            this.postLikesCount = this.postLikesCount + 1;
            console.log(this.postLikesCount);
          }

          this.peopleView.likedPost({
            'postId': postId,
            'liked': likeStat
          }).subscribe(function (data) {
            if (data.status) {
              _this3.commonService.presentToast(data.status);
            }
          });
        }
      }, {
        key: "shareModal",
        value: function shareModal() {
          this.commonService.presentModal(_add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_3__["UserModalComponent"], 'fullModal', '');
        }
      }, {
        key: "addBookmark",
        value: function addBookmark() {
          var _this4 = this;

          this.peopleView.bookmarkPost({
            'postId': this.postID,
            'bookmark': this.bookmark,
            'post_type': 2
          }).subscribe(function (data) {
            if (data.status) {
              _this4.bookmark = !_this4.bookmark;

              _this4.commonService.presentToast(data.status);
            }
          });
        } //------------------ -- GO BACK  ------------

      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "shareItem",
        value: function shareItem() {
          //this code is to use the social sharing plugin
          // message, subject, file, url
          this.socialSharing.share("Intoactive Video", "", "", "https://ionicinto.wdipl.com/videos/" + this.postID).then(function () {})["catch"](function () {});
        }
      }]);

      return VideosPage;
    }();

    VideosPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_8__["PeopleViewService"]
      }, {
        type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"])], VideosPage.prototype, "navChild", void 0);
    VideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-videos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./videos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./videos.page.scss */
      "./src/app/videos/videos.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_8__["PeopleViewService"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]])], VideosPage);
    /***/
  }
}]);
//# sourceMappingURL=videos-videos-module-es5.js.map