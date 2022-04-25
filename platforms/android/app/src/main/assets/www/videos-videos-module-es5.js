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


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>My Videos</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-card class=\"ion-no-margin\">\r\n    <ion-card-content class=\"ion-no-padding item-content\">\r\n  <ion-thumbnail>\r\n    <img *ngIf=\"noImgData\" width=\"100%\" height=\"210px\" src=\"../../../assets/images/loading.jpg\">\r\n    <img *ngIf=\"!noImgData\" (click)=\"playVideo()\" width=\"100%\" height=\"210px\" src=\"{{videoThumbPath}}\">\r\n  </ion-thumbnail>\r\n  <ion-icon (click)=\"playVideo()\" ios=\"ios-play\" md=\"md-play\" class=\"play-videoBtn\"></ion-icon>\r\n</ion-card-content>\r\n</ion-card>\r\n  <!-- <video width=\"100%\" height=\"210px\" controls disablePictureInPicture controlsList=\"nodownload\" preload=\"metadata\" autoplay=\"autoplay\" webkit-playsinline=\"webkit-playsinline\" class=\"mb-10 videoPlayer\">\r\n    <source src=\"{videoDataPath}\" type=\"video/mp4\" />\r\n  </video> -->\r\n    <h6 class=\"ion-padding-horizontal\">{{title}}</h6>\r\n  <ion-list class=\"top-list\">\r\n    <ion-item (click)=\"liked(postID, likePost)\" [ngClass]=\"likePost ? 'active' :''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon></div>\r\n      <ion-label>{{ postLikesCount > 0 ? postLikesCount : 0 }}</ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/comments',postID]\" *ngIf=\" !disableComment\" detail=\"false\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon></div>\r\n      <ion-label>{{ commentCount > 0 ? commentCount : 0 }}</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"shareItem()\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon></div>\r\n      <ion-label>Share</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"info=!info\" [ngClass]=\"info?'active':''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon></div>\r\n      <ion-label>Info</ion-label>\r\n    </ion-item>\r\n    <ion-item  (click)=\"addBookmark()\"  [ngClass]=\"bookmark?'active':''\">\r\n      <div class=\"top-icon\"><ion-icon ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon></div>\r\n      <ion-label>Bookmark</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list class=\"info-block ion-padding\" *ngIf=\"info\" [ngClass]=\"info?'active':''\">\r\n    <p>{{description}}</p>\r\n    <p>&nbsp;</p>\r\n    <p>Published on {{createdAt}}</p>\r\n    <p>Credits - {{postUserName}}</p>\r\n  </ion-list>\r\n  <ion-list *ngIf=\"type != 'exclusive'\" lines=\"none\" class=\"video-list\">\r\n    <ion-list-header>Up Next</ion-list-header>\r\n    <div *ngIf=\"videoType == 1\">      \r\n      <div *ngFor=\"let post of upNext\">         \r\n        <div *ngFor = \"let nextpost of post.open_video_post\">           \r\n        <ion-item  [routerLink]=\"['/videos',post.id,'']\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>{{nextpost.title}}</h3>\r\n            <p class=\"text-gray\">{{nextpost.description}}</p>\r\n            <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        \r\n      </div>\r\n      </div>\r\n    </div>    \r\n    <div *ngIf=\"videoType == 2\">\r\n      <div *ngFor=\"let post of upNext\"> \r\n        <div *ngFor = \"let nextpost of post.exclusive_video_post\">          \r\n        <ion-item [routerLink]=\"['/videos',post.id,'']\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>{{nextpost.title}}</h3>\r\n            <p class=\"text-gray\">{{nextpost.description}}</p>\r\n            <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div *ngIf=\"videoType == 3\">\r\n        <div *ngFor=\"let post of upNext\"> \r\n          <div *ngFor = \"let nextpost of post.save_video_post\">            \r\n          <ion-item  [routerLink]=\"['/videos',post.id,'']\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"{{storagePath + nextpost.thumb_path}}\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3>{{nextpost.title}}</h3>\r\n              <p class=\"text-gray\">{{nextpost.description}}</p>\r\n              <p class=\"text-gray\">{{nextpost.created_at}} . {{nextpost.views > 0 ? nextpost.views : 0}} views</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div *ngIf=\"noData\" class=\"no-data\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Data Found</p>\r\n        </div>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n";
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


    __webpack_exports__["default"] = "h6 {\n  font-size: 1rem;\n  line-height: 1.35; }\n\n.top-list {\n  padding: 0; }\n\n.top-list ion-item {\n  --min-height:50px;\n  background: #FFF;\n  color: #666666; }\n\n.top-list ion-item ion-label {\n  margin-left: 5px;\n  padding-top: 0; }\n\n.top-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #888888;\n  font-size: 1.25rem; }\n\n.top-list ion-item ion-label {\n  position: absolute;\n  bottom: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.info-block {\n  border-bottom: 1px solid #dedede;\n  transition: all .5s ease-in-out;\n  height: 0; }\n\n.info-block.active {\n  height: auto; }\n\n.info-block p {\n  color: #5a5a5a;\n  margin-bottom: 5px; }\n\n.info-block p:last-child {\n  margin-bottom: 0; }\n\n.video-list ion-item ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  width: 100px;\n  height: 65px; }\n\n.video-list ion-item h3 {\n  white-space: normal;\n  font-weight: 400; }\n\n.video-list ion-item p {\n  color: #5a5a5a; }\n\n.active .top-icon ion-icon {\n  color: #27a69a; }\n\n.ios.info-block {\n  margin-bottom: 0; }\n\n.ios .video-list ion-item ion-avatar {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.play-videoBtn {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 3.5rem;\n  color: #FFF !important; }\n\nion-card {\n  margin: 0;\n  border-radius: 0; }\n\nion-card ion-card-content ion-thumbnail {\n    height: 270px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFx2aWRlb3NcXHZpZGVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxlQUFlO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ3BDO0VBQVUsVUFBVSxFQUFBOztBQUNwQjtFQUFtQixpQkFBYTtFQUFLLGdCQUFnQjtFQUFDLGNBQWMsRUFBQTs7QUFDcEU7RUFBNkIsZ0JBQWdCO0VBQUMsY0FBYyxFQUFBOztBQUM1RDtFQUFVLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLFVBQVU7RUFBQyxTQUFTO0VBQUMsMkJBQTJCLEVBQUE7O0FBQ25MO0VBQW9CLGNBQWM7RUFBRSxrQkFBa0IsRUFBQTs7QUFDdEQ7RUFBNkIsa0JBQWtCO0VBQUMsV0FBVTtFQUFDLFNBQVM7RUFBQywyQkFBMkI7RUFBQyxjQUFjLEVBQUE7O0FBRS9HO0VBQVksZ0NBQWdDO0VBQUMsK0JBQStCO0VBQUMsU0FBUyxFQUFBOztBQUN0RjtFQUFtQixZQUFZLEVBQUE7O0FBQy9CO0VBQWMsY0FBYztFQUFDLGtCQUFrQixFQUFBOztBQUMvQztFQUF5QixnQkFBZ0IsRUFBQTs7QUFDekM7RUFBZ0MsZ0JBQWdCO0VBQUMsa0JBQWdCO0VBQUcsWUFBWTtFQUFDLFlBQVksRUFBQTs7QUFDN0Y7RUFBd0IsbUJBQW1CO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQzVEO0VBQXVCLGNBQWMsRUFBQTs7QUFFckM7RUFBMkIsY0FBYyxFQUFBOztBQUd6QztFQUFnQixnQkFBZ0IsRUFBQTs7QUFDaEM7RUFBcUMsYUFBYTtFQUFDLGdCQUFnQixFQUFBOztBQUNuRTtFQUFlLGtCQUFrQjtFQUFDLFNBQVM7RUFBRSxRQUFRO0VBQUUsZ0NBQWdDO0VBQUcsaUJBQWlCO0VBQUMsc0JBQXFCLEVBQUE7O0FBQ2pJO0VBQVMsU0FBUztFQUFDLGdCQUFnQixFQUFBOztBQUFuQztJQUVzQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWRlb3MvdmlkZW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2e2ZvbnQtc2l6ZTogMXJlbTtsaW5lLWhlaWdodDogMS4zNTt9XHJcbi50b3AtbGlzdHtwYWRkaW5nOiAwO31cclxuLnRvcC1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDo1MHB4O2JhY2tncm91bmQ6ICNGRkY7Y29sb3I6ICM2NjY2NjY7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbi1sZWZ0OiA1cHg7cGFkZGluZy10b3A6IDA7fVxyXG4udG9wLWljb257d2lkdGg6IDM0cHg7aGVpZ2h0OiAzNHB4O2JvcmRlci1yYWRpdXM6IDUwJTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTEwcHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTt9XHJcbi50b3AtaWNvbiBpb24taWNvbiB7Y29sb3I6ICM4ODg4ODg7O2ZvbnQtc2l6ZTogMS4yNXJlbTt9XHJcbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWx7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTo2cHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTttYXJnaW4tbGVmdDogMDt9XHJcblxyXG4uaW5mby1ibG9ja3tib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTt0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O2hlaWdodDogMDt9XHJcbi5pbmZvLWJsb2NrLmFjdGl2ZXtoZWlnaHQ6IGF1dG87fVxyXG4uaW5mby1ibG9jayBwe2NvbG9yOiAjNWE1YTVhO21hcmdpbi1ib3R0b206IDVweDt9XHJcbi5pbmZvLWJsb2NrIHA6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOiAwO31cclxuLnZpZGVvLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhcntib3JkZXItcmFkaXVzOiAwOy0tYm9yZGVyLXJhZGl1czogMDt3aWR0aDogMTAwcHg7aGVpZ2h0OiA2NXB4O31cclxuLnZpZGVvLWxpc3QgaW9uLWl0ZW0gaDN7d2hpdGUtc3BhY2U6IG5vcm1hbDtmb250LXdlaWdodDogNDAwO31cclxuLnZpZGVvLWxpc3QgaW9uLWl0ZW0gcHtjb2xvcjogIzVhNWE1YTt9XHJcblxyXG4uYWN0aXZlIC50b3AtaWNvbiBpb24taWNvbntjb2xvcjogIzI3YTY5YTt9XHJcblxyXG4vLyBjc3MgZm9yIGlvc1xyXG4uaW9zLmluZm8tYmxvY2t7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5pb3MgLnZpZGVvLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhcnttYXJnaW4tdG9wOiAwO21hcmdpbi1ib3R0b206IDA7fVxyXG4ucGxheS12aWRlb0J0bntwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogNTAlOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICBmb250LXNpemU6IDMuNXJlbTtjb2xvcjojRkZGICFpbXBvcnRhbnR9XHJcbmlvbi1jYXJke21hcmdpbjogMDtib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBpb24tdGh1bWJuYWlse2hlaWdodDogMjcwcHg7fVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
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