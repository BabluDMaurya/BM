function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home1-home1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHome1Home1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <!-- <ion-button class=\"ion-no-margin btnLive\">Live</ion-button> -->\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>INTOACTIVE</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"notificationCount > 0\">{{ notificationCount }}</ion-badge>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\">\r\n  <ion-refresher class=\"component-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div *ngIf=\"gotData\">\r\n    <ion-grid *ngIf=\"specialities?.length>0\" class=\"home-cat\">\r\n      <ion-row class=\"row\">\r\n        <!-- <ion-col size=\"3\" *ngFor=\"let special of  specialities\">\r\n          <ion-card class=\"category-card\"> \r\n              <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \r\n          </ion-card>\r\n          <h4>{{special?.name}}</h4>\r\n        </ion-col> -->\r\n\r\n        <ion-slides [options]=\"sliderOpts\">\r\n          <ion-slide class=\"white-background\" *ngFor=\"let special of  specialities\">\r\n            <ion-col size=\"12\">\r\n              <ion-card class=\"category-card\"> \r\n                  <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \r\n              </ion-card>\r\n              <h4>{{special?.name}}</h4>\r\n            </ion-col>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    \r\n    <div *ngIf=\"!postData?.length > 0\" class=\"no-data\" style=\"height: calc(100vh - 230px);\">\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No post added yet!!!</p>\r\n    </div>\r\n    <div *ngFor=\"let post of postData; let i= index;\"> \r\n      <ion-card class=\"item-card\" *ngIf=\"   !post?.length\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar >\r\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{post?.post_user?.bios?.profile_pic}}\"\r\n              *ngIf=\"post?.post_user?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post?.post_user?.bios?.profile_pic\">\r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label  >\r\n              <ion-card-title>{{post?.post_user?.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post?.post_user?.bios?.country_name?.name}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}} </p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail *ngIf=\"post?.image_post\">\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post?.image_post['0']?.thumb_path; let i =index;\">\r\n                <img (click)=\"openViewer(post?.image_post['0']?.thumb_path[i])\" src=\"{{url}}{{imgpath}}\"\r\n                  alt=\"{{imgpath}}\" />\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-thumbnail>\r\n          <ion-thumbnail *ngIf=\"post?.video_post\" [routerLink]=\"['/videos',post.id,'']\">\r\n            <img src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" />\r\n            <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\" *ngIf=\"post?.video_post\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div [routerLink]=\"['/comments',post.id]\"\r\n                  *ngIf=\"post?.disable_comment == 0\">\r\n                  <span class=\"d-flex\">\r\n                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                    <span>{{post.total_comments.length}}</span>\r\n                  </span>\r\n                </div>\r\n                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                  <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- --------------- bookmark for only  othepost on own -------->\r\n              <ion-item *ngIf=\"post?.user_id != loginUserData.id\">\r\n                <div (click)=\"bookmarked(post?.id , post?.bookmarked , post?.post_type)\"\r\n                  class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"post?.user_id == loginUserData.id\">\r\n                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <!-- --------------- bookmark ends here------------ -->\r\n\r\n            <!-- -------  Description for posts   -->\r\n\r\n            <div *ngIf=\"post?.post_type==1\">\r\n              <p *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 100)}}\r\n              </p>\r\n              <p\r\n                *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <div *ngIf=\"post?.post_type==2\">\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 100)}}\r\n              </p>\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <!-- ------- ends here -->\r\n\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid *ngIf=\"post?.length>0\" class=\"home-cat\">\r\n        <ion-row class=\"row\">\r\n          <ion-col size=\"6\" *ngFor=\"let user of  post\">\r\n            <ion-card class=\"cat-card\">\r\n              \r\n                <div class=\"catBG\"> <img src=\"https://ionicinto.wdipl.com/public/profile_background_image/thumb/{{user?.bios?.profile_background_image}}\"\r\n                  *ngIf=\"user?.bios?.profile_pic\"></div>\r\n                  <ion-card-content>\r\n                <ion-avatar [routerLink]=\"['/tabs/consultant-profile-view/',user?.id]\">\r\n                  <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{user?.bios?.profile_pic}}\"\r\n                    *ngIf=\"user?.bios?.profile_pic\">\r\n                  <img src=\"./../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\">\r\n                </ion-avatar>\r\n                {{user?.user_name}}\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n  <!-- ANIMATED LOADER -->\r\n  <div *ngIf=\"!gotData\">\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home1/home1-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/home1/home1-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: Home1PageRoutingModule */

  /***/
  function srcAppHome1Home1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home1PageRoutingModule", function () {
      return Home1PageRoutingModule;
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


    var _home1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home1.page */
    "./src/app/home1/home1.page.ts");

    var routes = [{
      path: '',
      component: _home1_page__WEBPACK_IMPORTED_MODULE_3__["Home1Page"]
    }];

    var Home1PageRoutingModule = function Home1PageRoutingModule() {
      _classCallCheck(this, Home1PageRoutingModule);
    };

    Home1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Home1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home1/home1.module.ts":
  /*!***************************************!*\
    !*** ./src/app/home1/home1.module.ts ***!
    \***************************************/

  /*! exports provided: Home1PageModule */

  /***/
  function srcAppHome1Home1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home1PageModule", function () {
      return Home1PageModule;
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


    var _home1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home1-routing.module */
    "./src/app/home1/home1-routing.module.ts");
    /* harmony import */


    var _home1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home1.page */
    "./src/app/home1/home1.page.ts");

    var Home1PageModule = function Home1PageModule() {
      _classCallCheck(this, Home1PageModule);
    };

    Home1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Home1PageRoutingModule"]],
      declarations: [_home1_page__WEBPACK_IMPORTED_MODULE_6__["Home1Page"]]
    })], Home1PageModule);
    /***/
  },

  /***/
  "./src/app/home1/home1.page.scss":
  /*!***************************************!*\
    !*** ./src/app/home1/home1.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppHome1Home1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnLive {\n  font-size: 10px;\n  background: #27a69a;\n  --background: #27a69a;\n  color: #fff;\n  letter-spacing: 0.5px;\n  border-radius: 30px;\n  --border-radius: 30px;\n  height: 20px;\n  padding: 0;\n  --padding-start: 15px;\n  --padding-end: 15px; }\n\n.cat-card {\n  position: relative;\n  height: 260px;\n  margin: 0;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25); }\n\n.cat-card .card-content-md {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.65) 100%);\n  position: absolute;\n  width: 100%;\n  top: 0; }\n\n.cat-card .card-content-md ion-avatar {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff; }\n\n.category-card {\n  position: relative;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n  border-radius: 50%; }\n\n.category-card img {\n    width: 35px;\n    margin: 15px auto; }\n\n.category-card + h4 {\n  font-size: 10px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  color: #737373;\n  text-align: center; }\n\n.catBG {\n  height: 100%; }\n\n.catBG img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.special-slide {\n  position: relative; }\n\n.special-slide:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 100%); }\n\n.white-background {\n  background: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZTEvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxob21lMVxcaG9tZTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHFCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFnQjtFQUNoQixtQkFBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtFQUFDLGtEQUFrRCxFQUFBOztBQUV6RTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUdYLHNGQUErRTtFQUMvRSxrQkFBa0I7RUFBQyxXQUFXO0VBQzlCLE1BQU0sRUFBQTs7QUFFVjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBRzFCO0VBQWdCLGtCQUFrQjtFQUFDLFlBQVk7RUFBQyxXQUFXO0VBQUMsY0FBYztFQUFDLGtCQUFrQjtFQUFDLGtEQUFrRDtFQUFDLGtCQUFrQixFQUFBOztBQUFuSztJQUNRLFdBQVc7SUFBQyxpQkFBaUIsRUFBQTs7QUFFckM7RUFBa0IsZUFBYztFQUFDLGVBQWM7RUFBQyx5QkFBd0I7RUFBQyxjQUFjO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzFHO0VBQU8sWUFBWSxFQUFBOztBQUFuQjtJQUNRLFlBQVk7SUFBQyxvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7O0FBRXRDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0ZBQXNGLEVBQUE7O0FBRTFGO0VBQ0ksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lMS9ob21lMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuTGl2ZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO2JveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDE2NCwgMTY0LCAxNjQsIDAuMjUpO1xyXG59XHJcbi5jYXQtY2FyZCAuY2FyZC1jb250ZW50LW1kIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMCkgNTAlLCByZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDUwJSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwKSA1MCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufVxyXG4uY2F0LWNhcmQgLmNhcmQtY29udGVudC1tZCBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmNhdGVnb3J5LWNhcmQge3Bvc2l0aW9uOiByZWxhdGl2ZTtoZWlnaHQ6IDY1cHg7d2lkdGg6IDY1cHg7bWFyZ2luOiAwIGF1dG87dGV4dC1hbGlnbjogY2VudGVyO2JveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDE2NCwgMTY0LCAxNjQsIDAuMjUpO2JvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGltZ3t3aWR0aDogMzVweDttYXJnaW46IDE1cHggYXV0bzt9ICAgIFxyXG59XHJcbi5jYXRlZ29yeS1jYXJkK2g0e2ZvbnQtc2l6ZToxMHB4O21hcmdpbjo1cHggMCAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjogIzczNzM3Mzt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uY2F0Qkd7aGVpZ2h0OiAxMDAlO1xyXG4gICAgaW1ne2hlaWdodDogMTAwJTtvYmplY3QtZml0OiBjb3Zlcjt9XHJcbn1cclxuLnNwZWNpYWwtc2xpZGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNwZWNpYWwtc2xpZGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMjAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDEwMCUpO1xyXG59XHJcbi53aGl0ZS1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home1/home1.page.ts":
  /*!*************************************!*\
    !*** ./src/app/home1/home1.page.ts ***!
    \*************************************/

  /*! exports provided: Home1Page */

  /***/
  function srcAppHome1Home1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home1Page", function () {
      return Home1Page;
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


    var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/home.service */
    "./src/app/services/home.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _profile_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../profile/popover/popover.component */
    "./src/app/profile/popover/popover.component.ts");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/search.service */
    "./src/app/services/search.service.ts");

    var Home1Page = /*#__PURE__*/function () {
      function Home1Page(homeService, commonService, modalController, searchService, popoverController) {
        _classCallCheck(this, Home1Page);

        this.homeService = homeService;
        this.commonService = commonService;
        this.modalController = modalController;
        this.searchService = searchService;
        this.popoverController = popoverController;
        this.postData = [];
        this.loadPostData = [];
        this.gotData = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].imgUrl;
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].storagePath;
        this.currentPage = 0;
        this.sliderOpts = {
          zoom: true,
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 2
        };
      }

      _createClass(Home1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loginUserData = this.commonService.getUserData();
          this.currentPage = 0;
          this.searchService.getSpecialities(null).subscribe(function (data) {
            _this.specialities = data.list;
          });
          this.homeService.getHomeContent({
            'page': this.currentPage
          }).subscribe(function (data) {
            var postData = _this.like_bookmark(data.postData.data);

            _this.last_page = data.postData.last_page;
            _this.currentPage = data.postData.current_page;

            _this.searchService.getTopConsultant().subscribe(function (data) {
              _this.postData = [];
              var topPeople = data.topuser;
              _this.gotData = true;
              postData.filter(function (el, i) {
                if (i % 5 == 0) {
                  _this.postData.push(topPeople.splice(0, 2));
                }

                _this.postData.push(el);
              });
              _this.remainingTopConsultent = topPeople;
            });
          });
        } // ------------ laod data event ----------

        /**
         *laod data event according userid
         */

      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this2 = this;

          setTimeout(function () {
            if (_this2.currentPage > 0) {
              _this2.homeService.getHomeContent({
                'page': _this2.currentPage + 1
              }).subscribe(function (data) {
                event.target.complete();

                if (_this2.remainingTopConsultent.length > 1) {
                  _this2.loadPostData = [];

                  var postData = _this2.like_bookmark(data.postData.data);

                  postData.filter(function (el, i) {
                    if (i % 5 == 0) {
                      _this2.loadPostData.push(_this2.remainingTopConsultent.splice(0, 2));
                    }

                    _this2.loadPostData.push(el);
                  });
                  _this2.postData = _this2.postData.concat(_this2.loadPostData);
                } else {
                  _this2.postData = _this2.postData.concat(_this2.like_bookmark(data.postData.data));
                }

                _this2.remainingTopConsultent = _this2.remainingTopConsultent;
                _this2.last_page = data.postData.last_page;
                _this2.currentPage = data.postData.current_page;
              });
            }

            if (_this2.last_page <= _this2.currentPage + 1) {
              event.target.disabled = true;
            }
          }, 500);
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ngOnInit();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "openViewer",
        value: function openViewer(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__["ViewerModalComponent"],
                      componentProps: {
                        src: this.url + path,
                        srcHighRes: this.url + path,
                        srcFallback: this.url + path
                      },
                      cssClass: 'ion-img-viewer',
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
        * Liked unliked funcitonality
        */

      }, {
        key: "liked",
        value: function liked(postId, likeStat) {
          var _this3 = this;

          this.postData.forEach(function (element, i) {
            if (element.id == postId) {
              _this3.postData[i].liked = !likeStat;

              if (likeStat) {
                _this3.postData[i].count = _this3.postData[i].count - 1;
              } else {
                _this3.postData[i].count = _this3.postData[i].count + 1;
              }
            }
          });
          this.commonService.likedPost({
            'postId': postId,
            'liked': likeStat
          }).subscribe(function (data) {
            if (data.status) {
              _this3.commonService.presentToast(data.status);
            }
          });
        }
        /**
        * Bookmarked funcitonality
        */

      }, {
        key: "bookmarked",
        value: function bookmarked(postId, bmStat, post_type) {
          var _this4 = this;

          //console.log(postId, bmStat);
          this.postData.forEach(function (element, i) {
            if (element.id == postId) {
              _this4.postData[i].bookmarked = !bmStat;
            }
          }); //console.log(postId, bmStat);

          this.commonService.bookmarkPost({
            'postId': postId,
            'bookmark': bmStat,
            'post_type': post_type
          }).subscribe(function (data) {
            if (data.status) {
              _this4.commonService.presentToast(data.status);
            }
          });
        }
      }, {
        key: "showOptions",
        value: function showOptions(ev, commentStatus) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //    this.commonService.showPopover( PopoverComponent, 'custom-popover',{'postId':ev , 'commentStatus':commentStatus});
                    console.log("commentStatus : " + commentStatus);
                    _context2.next = 3;
                    return this.popoverController.create({
                      component: _profile_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
                      translucent: true,
                      cssClass: 'custom-popover',
                      componentProps: {
                        'postId': ev,
                        'commentStatus': commentStatus
                      }
                    });

                  case 3:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (data) {
                      if (data.data.click == 1) {
                        _this5.postData.forEach(function (f, i) {
                          if (f.id == ev) {
                            _this5.postData[i].is_delete = 1;
                          }
                        });
                      } else if (data.data.click == 2) {
                        _this5.postData.forEach(function (f, i) {
                          if (f.id == ev) {
                            _this5.postData[i].disable_comment = !commentStatus;
                          }
                        });
                      }
                    }); // console.log(ev);

                    _context2.next = 7;
                    return popover.present();

                  case 7:
                    return _context2.abrupt("return", _context2.sent);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "like_bookmark",
        value: function like_bookmark(arr) {
          var _this6 = this;

          arr.filter(function (element, i) {
            element.count = element.post_likes.length;
            element.post_likes.filter(function (f) {
              if (f.user_id == _this6.loginUserData.id) {
                element.liked = true;
              }
            });
            element.post_bookmarks.filter(function (f) {
              if (f.user_id == _this6.loginUserData.id) {
                element.bookmarked = true;
              }
            });
          });
          return arr;
        }
      }]);

      return Home1Page;
    }();

    Home1Page.ctorParameters = function () {
      return [{
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }];
    };

    Home1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home1.page.scss */
      "./src/app/home1/home1.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], Home1Page);
    /***/
  }
}]);
//# sourceMappingURL=home1-home1-module-es5.js.map