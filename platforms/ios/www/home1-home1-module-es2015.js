(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home1-home1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <!-- <ion-button class=\"ion-no-margin btnLive\">Live</ion-button> -->\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>INTOACTIVE</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"notificationCount > 0\">{{ notificationCount }}</ion-badge>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\">\r\n  <ion-refresher class=\"component-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div *ngIf=\"gotData\">\r\n    <ion-grid *ngIf=\"specialities?.length>0\" class=\"home-cat\">\r\n      <ion-row class=\"row\">\r\n        <!-- <ion-col size=\"3\" *ngFor=\"let special of  specialities\">\r\n          <ion-card class=\"category-card\"> \r\n              <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \r\n          </ion-card>\r\n          <h4>{{special?.name}}</h4>\r\n        </ion-col> -->\r\n\r\n        <ion-slides [options]=\"sliderOpts\">\r\n          <ion-slide class=\"white-background\" *ngFor=\"let special of  specialities\">\r\n            <ion-col size=\"12\">\r\n              <ion-card class=\"category-card\"> \r\n                  <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \r\n              </ion-card>\r\n              <h4>{{special?.name}}</h4>\r\n            </ion-col>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    \r\n    <div *ngIf=\"!postData?.length > 0\" class=\"no-data\" style=\"height: calc(100vh - 230px);\">\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No post added yet!!!</p>\r\n    </div>\r\n    <div *ngFor=\"let post of postData; let i= index;\"> \r\n      <ion-card class=\"item-card\" *ngIf=\"   !post?.length\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar >\r\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{post?.post_user?.bios?.profile_pic}}\"\r\n              *ngIf=\"post?.post_user?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post?.post_user?.bios?.profile_pic\">\r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label  >\r\n              <ion-card-title>{{post?.post_user?.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post?.post_user?.bios?.country_name?.name}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}} </p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail *ngIf=\"post?.image_post\">\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post?.image_post['0']?.thumb_path; let i =index;\">\r\n                <img (click)=\"openViewer(post?.image_post['0']?.thumb_path[i])\" src=\"{{url}}{{imgpath}}\"\r\n                  alt=\"{{imgpath}}\" />\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-thumbnail>\r\n          <ion-thumbnail *ngIf=\"post?.video_post\" [routerLink]=\"['/videos',post.id,'']\">\r\n            <img src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" />\r\n            <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\" *ngIf=\"post?.video_post\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div [routerLink]=\"['/comments',post.id]\"\r\n                  *ngIf=\"post?.disable_comment == 0\">\r\n                  <span class=\"d-flex\">\r\n                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                    <span>{{post.total_comments.length}}</span>\r\n                  </span>\r\n                </div>\r\n                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                  <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- --------------- bookmark for only  othepost on own -------->\r\n              <ion-item *ngIf=\"post?.user_id != loginUserData.id\">\r\n                <div (click)=\"bookmarked(post?.id , post?.bookmarked , post?.post_type)\"\r\n                  class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"post?.user_id == loginUserData.id\">\r\n                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <!-- --------------- bookmark ends here------------ -->\r\n\r\n            <!-- -------  Description for posts   -->\r\n\r\n            <div *ngIf=\"post?.post_type==1\">\r\n              <p *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 100)}}\r\n              </p>\r\n              <p\r\n                *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <div *ngIf=\"post?.post_type==2\">\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 100)}}\r\n              </p>\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <!-- ------- ends here -->\r\n\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid *ngIf=\"post?.length>0\" class=\"home-cat\">\r\n        <ion-row class=\"row\">\r\n          <ion-col size=\"6\" *ngFor=\"let user of  post\">\r\n            <ion-card class=\"cat-card\">\r\n              \r\n                <div class=\"catBG\"> <img src=\"https://ionicinto.wdipl.com/public/profile_background_image/thumb/{{user?.bios?.profile_background_image}}\"\r\n                  *ngIf=\"user?.bios?.profile_pic\"></div>\r\n                  <ion-card-content>\r\n                <ion-avatar [routerLink]=\"['/tabs/consultant-profile-view/',user?.id]\">\r\n                  <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{user?.bios?.profile_pic}}\"\r\n                    *ngIf=\"user?.bios?.profile_pic\">\r\n                  <img src=\"./../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\">\r\n                </ion-avatar>\r\n                {{user?.user_name}}\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n  <!-- ANIMATED LOADER -->\r\n  <div *ngIf=\"!gotData\">\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home1/home1-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home1/home1-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Home1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1PageRoutingModule", function() { return Home1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home1.page */ "./src/app/home1/home1.page.ts");




const routes = [
    {
        path: '',
        component: _home1_page__WEBPACK_IMPORTED_MODULE_3__["Home1Page"]
    }
];
let Home1PageRoutingModule = class Home1PageRoutingModule {
};
Home1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Home1PageRoutingModule);



/***/ }),

/***/ "./src/app/home1/home1.module.ts":
/*!***************************************!*\
  !*** ./src/app/home1/home1.module.ts ***!
  \***************************************/
/*! exports provided: Home1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1PageModule", function() { return Home1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home1-routing.module */ "./src/app/home1/home1-routing.module.ts");
/* harmony import */ var _home1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home1.page */ "./src/app/home1/home1.page.ts");







let Home1PageModule = class Home1PageModule {
};
Home1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Home1PageRoutingModule"]
        ],
        declarations: [_home1_page__WEBPACK_IMPORTED_MODULE_6__["Home1Page"]]
    })
], Home1PageModule);



/***/ }),

/***/ "./src/app/home1/home1.page.scss":
/*!***************************************!*\
  !*** ./src/app/home1/home1.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnLive {\n  font-size: 10px;\n  background: #27a69a;\n  --background: #27a69a;\n  color: #fff;\n  letter-spacing: 0.5px;\n  border-radius: 30px;\n  --border-radius: 30px;\n  height: 20px;\n  padding: 0;\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n\n.cat-card {\n  position: relative;\n  height: 260px;\n  margin: 0;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n}\n\n.cat-card .card-content-md {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.65) 100%);\n  position: absolute;\n  width: 100%;\n  top: 0;\n}\n\n.cat-card .card-content-md ion-avatar {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff;\n}\n\n.category-card {\n  position: relative;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n  border-radius: 50%;\n}\n\n.category-card img {\n  width: 35px;\n  margin: 15px auto;\n}\n\n.category-card + h4 {\n  font-size: 10px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  color: #737373;\n  text-align: center;\n}\n\n.catBG {\n  height: 100%;\n}\n\n.catBG img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.special-slide {\n  position: relative;\n}\n\n.special-slide:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 100%);\n}\n\n.white-background {\n  background: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZTEvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGhvbWUxXFxob21lMS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUxL2hvbWUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQW1CLGtEQUFBO0FDRXZCOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBR0Esc0ZBQUE7RUFDQSxrQkFBQTtFQUFtQixXQUFBO0VBQ25CLE1BQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURGQTtFQUFnQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLGNBQUE7RUFBZSxrQkFBQTtFQUFtQixrREFBQTtFQUFtRCxrQkFBQTtBQ1lqSjs7QURYSTtFQUFJLFdBQUE7RUFBWSxpQkFBQTtBQ2VwQjs7QURiQTtFQUFrQixlQUFBO0VBQWUsZUFBQTtFQUFlLHlCQUFBO0VBQXlCLGNBQUE7RUFBZSxrQkFBQTtBQ3FCeEY7O0FEcEJBO0VBQU8sWUFBQTtBQ3dCUDs7QUR2Qkk7RUFBSSxZQUFBO0VBQWEsb0JBQUE7S0FBQSxpQkFBQTtBQzJCckI7O0FEekJBO0VBQ0ksa0JBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNGQUFBO0FDNkJKOztBRDNCQTtFQUNJLDJCQUFBO0FDOEJKIiwiZmlsZSI6InNyYy9hcHAvaG9tZTEvaG9tZTEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkxpdmUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgIC0tYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG59XHJcblxyXG4uY2F0LWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtcclxufVxyXG4uY2F0LWNhcmQgLmNhcmQtY29udGVudC1tZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDUwJSwgcmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSA1MCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMCkgNTAlLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLmNhdC1jYXJkIC5jYXJkLWNvbnRlbnQtbWQgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jYXJkIHtwb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0OiA2NXB4O3dpZHRoOiA2NXB4O21hcmdpbjogMCBhdXRvO3RleHQtYWxpZ246IGNlbnRlcjtib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBpbWd7d2lkdGg6IDM1cHg7bWFyZ2luOiAxNXB4IGF1dG87fSAgICBcclxufVxyXG4uY2F0ZWdvcnktY2FyZCtoNHtmb250LXNpemU6MTBweDttYXJnaW46NXB4IDAgMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6ICM3MzczNzM7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmNhdEJHe2hlaWdodDogMTAwJTtcclxuICAgIGltZ3toZWlnaHQ6IDEwMCU7b2JqZWN0LWZpdDogY292ZXI7fVxyXG59XHJcbi5zcGVjaWFsLXNsaWRle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zcGVjaWFsLXNsaWRlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDIwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcclxufVxyXG4ud2hpdGUtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufSIsIi5idG5MaXZlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xuICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG59XG5cbi5jYXQtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDE2NCwgMTY0LCAxNjQsIDAuMjUpO1xufVxuXG4uY2F0LWNhcmQgLmNhcmQtY29udGVudC1tZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSA1MCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSA1MCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgNTAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDEwMCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbi5jYXQtY2FyZCAuY2FyZC1jb250ZW50LW1kIGlvbi1hdmF0YXIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufVxuXG4uY2F0ZWdvcnktY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMTY0LCAxNjQsIDE2NCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jYXRlZ29yeS1jYXJkIGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuLmNhdGVnb3J5LWNhcmQgKyBoNCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiA1cHggMCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzczNzM3MztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2F0Qkcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2F0QkcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNwZWNpYWwtc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcGVjaWFsLXNsaWRlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMjAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDEwMCUpO1xufVxuXG4ud2hpdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home1/home1.page.ts":
/*!*************************************!*\
  !*** ./src/app/home1/home1.page.ts ***!
  \*************************************/
/*! exports provided: Home1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Page", function() { return Home1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _profile_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/popover/popover.component */ "./src/app/profile/popover/popover.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");









let Home1Page = class Home1Page {
    constructor(homeService, commonService, modalController, searchService, popoverController) {
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
    ngOnInit() {
        this.loginUserData = this.commonService.getUserData();
        this.currentPage = 0;
        this.searchService.getSpecialities(null).subscribe(data => {
            this.specialities = data.list;
        });
        this.homeService.getHomeContent({ 'page': (this.currentPage) }).subscribe(data => {
            let postData = this.like_bookmark(data.postData.data);
            this.last_page = data.postData.last_page;
            this.currentPage = data.postData.current_page;
            this.searchService.getTopConsultant().subscribe((data) => {
                this.postData = [];
                let topPeople = data.topuser;
                this.gotData = true;
                postData.filter((el, i) => {
                    if (i % 5 == 0) {
                        this.postData.push(topPeople.splice(0, 2));
                    }
                    this.postData.push(el);
                });
                this.remainingTopConsultent = topPeople;
            });
        });
    }
    // ------------ laod data event ----------
    /**
     *laod data event according userid
     */
    loadData(event) {
        setTimeout(() => {
            if (this.currentPage > 0) {
                this.homeService.getHomeContent({ 'page': (this.currentPage + 1) }).subscribe((data) => {
                    event.target.complete();
                    if (this.remainingTopConsultent.length > 1) {
                        this.loadPostData = [];
                        let postData = this.like_bookmark(data.postData.data);
                        postData.filter((el, i) => {
                            if (i % 5 == 0) {
                                this.loadPostData.push(this.remainingTopConsultent.splice(0, 2));
                            }
                            this.loadPostData.push(el);
                        });
                        this.postData = this.postData.concat(this.loadPostData);
                    }
                    else {
                        this.postData = this.postData.concat(this.like_bookmark(data.postData.data));
                    }
                    this.remainingTopConsultent = this.remainingTopConsultent;
                    this.last_page = data.postData.last_page;
                    this.currentPage = data.postData.current_page;
                });
            }
            if (this.last_page <= (this.currentPage + 1)) {
                event.target.disabled = true;
            }
        }, 500);
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(this.url + path);
            const modal = yield this.modalController.create({
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
            return yield modal.present();
        });
    }
    /**
    * Liked unliked funcitonality
    */
    liked(postId, likeStat) {
        this.postData.forEach((element, i) => {
            if (element.id == postId) {
                this.postData[i].liked = !likeStat;
                if (likeStat) {
                    this.postData[i].count = (this.postData[i].count - 1);
                }
                else {
                    this.postData[i].count = (this.postData[i].count + 1);
                }
            }
        });
        this.commonService.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    /**
    * Bookmarked funcitonality
    */
    bookmarked(postId, bmStat, post_type) {
        //console.log(postId, bmStat);
        this.postData.forEach((element, i) => {
            if (element.id == postId) {
                this.postData[i].bookmarked = !bmStat;
            }
        });
        //console.log(postId, bmStat);
        this.commonService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    showOptions(ev, commentStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //    this.commonService.showPopover( PopoverComponent, 'custom-popover',{'postId':ev , 'commentStatus':commentStatus});
            console.log("commentStatus : " + commentStatus);
            const popover = yield this.popoverController.create({
                component: _profile_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
                translucent: true,
                cssClass: 'custom-popover',
                componentProps: { 'postId': ev, 'commentStatus': commentStatus }
            });
            popover.onDidDismiss().then((data) => {
                if (data.data.click == 1) {
                    this.postData.forEach((f, i) => {
                        if (f.id == ev) {
                            this.postData[i].is_delete = 1;
                        }
                    });
                }
                else if (data.data.click == 2) {
                    this.postData.forEach((f, i) => {
                        if (f.id == ev) {
                            this.postData[i].disable_comment = !commentStatus;
                        }
                    });
                }
            });
            // console.log(ev);
            return yield popover.present();
        });
    }
    like_bookmark(arr) {
        arr.filter((element, i) => {
            element.count = element.post_likes.length;
            element.post_likes.filter((f) => {
                if (f.user_id == this.loginUserData.id) {
                    element.liked = true;
                }
            });
            element.post_bookmarks.filter((f) => {
                if (f.user_id == this.loginUserData.id) {
                    element.bookmarked = true;
                }
            });
        });
        return arr;
    }
};
Home1Page.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
Home1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home1.page.scss */ "./src/app/home1/home1.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
], Home1Page);



/***/ })

}]);
//# sourceMappingURL=home1-home1-module-es2015.js.map