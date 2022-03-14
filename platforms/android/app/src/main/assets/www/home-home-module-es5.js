function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <!-- <ion-button class=\"ion-no-margin btnLive\">Live</ion-button> -->\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>INTOACTIVE</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"notificationCount > 0\">{{ notificationCount }}</ion-badge>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\">\r\n  <ion-refresher class=\"component-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>  \r\n  <ion-grid class=\"home-cat\">\r\n    <ion-row class=\"row\">\r\n      <!--<ion-col size=\"3\" *ngFor=\"let special of  specialities\">\r\n        <ion-card class=\"category-card\"> \r\n            <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \r\n        </ion-card>\r\n        <h4>{{special?.name}}</h4>\r\n      </ion-col>-->\r\n      <ion-slides [options]=\"sliderOpts\">\r\n        <ion-slide class=\"white-background\" *ngFor=\"let special of  specialities\">\r\n          <ion-col size=\"12\">\r\n            <ion-card class=\"category-card\"> \r\n                <img [defaultImage]=\"defaultCatImage\" [lazyLoad]=\"caturl+special?.specialities_image\" />\r\n            </ion-card>\r\n            <h4>{{special?.name}}</h4>\r\n          </ion-col>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <div *ngIf=\"gotData\"> -->\r\n    \r\n    <div *ngIf=\"gotData\" class=\"no-data\" style=\"height: calc(100vh - 230px);\">\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No post added yet!!!</p>\r\n    </div>    \r\n    <div *ngFor=\"let post of postData; let i= index;\"> \r\n      <ion-card class=\"item-card\" *ngIf=\"!post?.length\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar >  \r\n            <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+post?.post_user?.bios?.profile_pic\"/>\r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label  >\r\n              <ion-card-title>{{post?.post_user?.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post?.post_user?.bios?.country_name?.name}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}} </p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail class=\"post-image\" *ngIf=\"post?.image_post\">\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post?.image_post['0']?.thumb_path; let i =index;\">\r\n                <img (click)=\"openViewer(post?.image_post['0']?.thumb_path[i])\" [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"url+ imgpath\" alt=\"{{imgpath}}\"/>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-thumbnail>\r\n          <ion-thumbnail class=\"post-video\" *ngIf=\"post?.video_post\" [routerLink]=\"['/videos',post.id,'']\">\r\n            <img [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"storagePath+ post['video_post']['0']['thumb_path']\" alt=\"Video Thumnail Path\"/>\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\" *ngIf=\"post?.video_post\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div [routerLink]=\"['/comments',post.id]\"\r\n                  *ngIf=\"post?.disable_comment == 0\">\r\n                  <span class=\"d-flex\">\r\n                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                    <span>{{post.total_comments.length}}</span>\r\n                  </span>\r\n                </div>\r\n                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                  <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- --------------- bookmark for only  othepost on own -------->\r\n              <ion-item *ngIf=\"post?.user_id != loginUserData.id\">\r\n                <div (click)=\"bookmarked(post?.id , post?.bookmarked , post?.post_type)\"\r\n                  class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"post?.user_id == loginUserData.id\">\r\n                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <!-- --------------- bookmark ends here------------ -->\r\n\r\n            <!-- -------  Description for posts   -->\r\n\r\n            <div *ngIf=\"post?.post_type==1\">\r\n              <p *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 100)}}\r\n              </p>\r\n              <p\r\n                *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <div *ngIf=\"post?.post_type==2\">\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 100)}}\r\n              </p>\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <!-- ------- ends here -->\r\n\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid *ngIf=\"post?.length>0\" class=\"home-cat\">\r\n        <ion-row class=\"row\">\r\n          <ion-col size=\"6\" *ngFor=\"let user of  post\">\r\n            <ion-card class=\"cat-card\">              \r\n                <div class=\"catBG\"> \r\n                  <img [defaultImage]=\"defaultConsultantBackgroundImage\" [lazyLoad]=\"consultantBackgroundImag+user?.bios?.profile_background_image\"/>\r\n                  <!-- <img src=\"https://ionicinto.wdipl.com/public/profile_background_image/thumb/{{user?.bios?.profile_background_image}}\" *ngIf=\"user?.bios?.profile_pic\"> -->\r\n                </div>\r\n                  <ion-card-content>\r\n                <ion-avatar [routerLink]=\"['/tabs/consultant-profile-view/',user?.id]\">\r\n                  <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+user?.bios?.profile_pic\"/>\r\n                </ion-avatar>\r\n                {{user?.user_name}}\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  <!-- </div> -->\r\n  <!-- ANIMATED LOADER -->\r\n  <!-- <div *ngIf=\"!gotData\">\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div> -->\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnLive {\n  font-size: 10px;\n  background: #27a69a;\n  --background: #27a69a;\n  color: #fff;\n  letter-spacing: 0.5px;\n  border-radius: 30px;\n  --border-radius: 30px;\n  height: 20px;\n  padding: 0;\n  --padding-start: 15px;\n  --padding-end: 15px; }\n\n.cat-card {\n  position: relative;\n  height: 260px;\n  margin: 0;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25); }\n\n.cat-card .card-content-md {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.65) 100%);\n  position: absolute;\n  width: 100%;\n  top: 0; }\n\n.cat-card .card-content-md ion-avatar {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff; }\n\n.category-card {\n  position: relative;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n  border-radius: 50%; }\n\n.category-card img {\n    width: 35px;\n    margin: 15px auto; }\n\n.category-card + h4 {\n  font-size: 10px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  color: #737373;\n  text-align: center; }\n\n.catBG {\n  height: 100%; }\n\n.catBG img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.special-slide {\n  position: relative; }\n\n.special-slide:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 100%); }\n\n.white-background {\n  background: #fff !important; }\n\n.item-header {\n  padding: 15px 15px 0px 15px !important; }\n\n.header-right {\n  align-items: center; }\n\n.post-image,\n.post-video {\n  height: calc(100vw - 30px) !important;\n  padding: 15px; }\n\n.post-image img, .post-video img {\n  border-radius: 20px; }\n\n.video-icon {\n  top: 25px !important;\n  left: 30px !important;\n  padding: 1px 4px;\n  border-radius: 5px;\n  background: #00000029; }\n\n.post-content {\n  padding: 0px 15px 15px 15px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQWdCO0VBQ2hCLG1CQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0VBQUMsa0RBQWtELEVBQUE7O0FBRXpFO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBR1gsc0ZBQStFO0VBQy9FLGtCQUFrQjtFQUFDLFdBQVc7RUFDOUIsTUFBTSxFQUFBOztBQUVWO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFHMUI7RUFBZ0Isa0JBQWtCO0VBQUMsWUFBWTtFQUFDLFdBQVc7RUFBQyxjQUFjO0VBQUMsa0JBQWtCO0VBQUMsa0RBQWtEO0VBQUMsa0JBQWtCLEVBQUE7O0FBQW5LO0lBQ1EsV0FBVztJQUFDLGlCQUFpQixFQUFBOztBQUVyQztFQUFrQixlQUFjO0VBQUMsZUFBYztFQUFDLHlCQUF3QjtFQUFDLGNBQWM7RUFBQyxrQkFBa0IsRUFBQTs7QUFDMUc7RUFBTyxZQUFZLEVBQUE7O0FBQW5CO0lBQ1EsWUFBWTtJQUFDLG9CQUFpQjtPQUFqQixpQkFBaUIsRUFBQTs7QUFFdEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzRkFBc0YsRUFBQTs7QUFFMUY7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxzQ0FBc0MsRUFBQTs7QUFFMUM7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7O0VBRUkscUNBQXFDO0VBQ3JDLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksc0NBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkxpdmUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgIC0tYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG59XHJcblxyXG4uY2F0LWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtcclxufVxyXG4uY2F0LWNhcmQgLmNhcmQtY29udGVudC1tZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDUwJSwgcmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSA1MCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMCkgNTAlLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLmNhdC1jYXJkIC5jYXJkLWNvbnRlbnQtbWQgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jYXJkIHtwb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0OiA2NXB4O3dpZHRoOiA2NXB4O21hcmdpbjogMCBhdXRvO3RleHQtYWxpZ246IGNlbnRlcjtib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBpbWd7d2lkdGg6IDM1cHg7bWFyZ2luOiAxNXB4IGF1dG87fSAgICBcclxufVxyXG4uY2F0ZWdvcnktY2FyZCtoNHtmb250LXNpemU6MTBweDttYXJnaW46NXB4IDAgMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6ICM3MzczNzM7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmNhdEJHe2hlaWdodDogMTAwJTtcclxuICAgIGltZ3toZWlnaHQ6IDEwMCU7b2JqZWN0LWZpdDogY292ZXI7fVxyXG59XHJcbi5zcGVjaWFsLXNsaWRle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zcGVjaWFsLXNsaWRlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDIwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcclxufVxyXG4ud2hpdGUtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0taGVhZGVye1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlci1yaWdodHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3N0LWltYWdlLCBcclxuLnBvc3QtdmlkZW8ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMzBweCkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnBvc3QtaW1hZ2UgaW1nLCAucG9zdC12aWRlbyBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi52aWRlby1pY29ue1xyXG4gICAgdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxcHggNHB4IDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAyOTtcclxufVxyXG4ucG9zdC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4IDE1cHggMTVweCAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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

    var HomePage = /*#__PURE__*/function () {
      function HomePage(homeService, commonService, modalController, searchService, popoverController) {
        _classCallCheck(this, HomePage);

        this.homeService = homeService;
        this.commonService = commonService;
        this.modalController = modalController;
        this.searchService = searchService;
        this.popoverController = popoverController;
        this.defaultPostImage = './../../assets/images/loading.jpg';
        this.defaultCatImage = './../../assets/images/activity.png';
        this.defaultConsultantBackgroundImage = './../../assets/images/bgimage.png';
        this.defaultUserImage = './../../assets/images/user.jpg';
        this.postData = [];
        this.loadPostData = [];
        this.gotData = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].imgUrl;
        this.consultantBackgroundImag = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].backgroundPic;
        this.userPPicurl = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].profilePic;
        this.caturl = this.url + 'public/';
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].storagePath;
        this.currentPage = 0;
        this.sliderOpts = {
          zoom: true,
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 2
        };
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.commonService.presentLoader();
          this.loginUserData = this.commonService.getUserData();
          this.currentPage = 0;
          this.searchService.getSpecialities(null).subscribe(function (data) {
            _this.specialities = data.list;
          });
          this.homeService.getHomeContent({
            'page': this.currentPage
          }).subscribe(function (data) {
            var postData = _this.like_bookmark(data.postData.data);

            console.log(postData);
            _this.last_page = data.postData.last_page;
            _this.currentPage = data.postData.current_page;

            _this.searchService.getTopConsultant().subscribe(function (data) {
              _this.postData = [];
              var topPeople = data.topuser;
              postData.filter(function (el, i) {
                if (i % 5 == 0) {
                  _this.postData.push(topPeople.splice(0, 2));
                }

                _this.postData.push(el);
              });
              _this.remainingTopConsultent = topPeople;
            });

            if (postData.length < 1) {
              _this.gotData = true;
            }

            _this.commonService.dismissLoader();
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

                console.log(_this2.postData);
                console.log('postData');
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

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
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

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map