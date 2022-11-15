(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <!-- <ion-button class=\"ion-no-margin btnLive\">Live</ion-button> -->\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>INTOACTIVE</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"notificationCount > 0\">{{ notificationCount }}</ion-badge>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\">\r\n  <ion-refresher class=\"component-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>  \r\n  <ion-grid class=\"home-cat\">\r\n    <ion-row class=\"row\">\r\n      <!--<ion-col size=\"3\" *ngFor=\"let special of  specialities\">\r\n        <ion-card class=\"category-card\"> \r\n            <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \r\n        </ion-card>\r\n        <h4>{{special?.name}}</h4>\r\n      </ion-col>-->\r\n      <ion-slides [options]=\"sliderOpts\">\r\n        <ion-slide class=\"white-background\" *ngFor=\"let special of  specialities\">\r\n          <!-- <ion-col size=\"12\"> -->\r\n            <!-- <ion-card class=\"category-card\"> \r\n                <img [defaultImage]=\"defaultCatImage\" [lazyLoad]=\"caturl+special?.specialities_image\" />\r\n            </ion-card> -->\r\n            <!-- <ion-segment> -->\r\n              <ion-chip style=\"font-size: 11px;\">{{special?.name}}</ion-chip>\r\n            <!-- </ion-segment> -->\r\n            <!-- <h4>{{special?.name}}</h4> -->\r\n          <!-- </ion-col> -->\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <div *ngIf=\"gotData\"> -->\r\n    \r\n    <div *ngIf=\"gotData\" class=\"no-data\" style=\"height: calc(100vh - 230px);\">\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No post added yet!!!</p>\r\n    </div>    \r\n    <div *ngFor=\"let post of postData; let i= index;\"> \r\n      <ion-card class=\"item-card\" *ngIf=\"!post?.length\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar >  \r\n            <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+post?.post_user?.bios?.profile_pic\"/>\r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label  >\r\n              <ion-card-title>{{post?.post_user?.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post?.post_user?.bios?.country_name?.name}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}} </p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail class=\"post-image\" *ngIf=\"post?.image_post\">\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post?.image_post['0']?.thumb_path; let i =index;\">\r\n                <img (click)=\"openViewer(post?.image_post['0']?.thumb_path[i])\" [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"url+ imgpath\" alt=\"{{imgpath}}\"/>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-thumbnail>\r\n          <ion-thumbnail class=\"post-video\" *ngIf=\"post?.video_post\" [routerLink]=\"['/videos',post.id,'']\">\r\n            <img [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"storagePath+ post['video_post']['0']['thumb_path']\" alt=\"Video Thumnail Path\"/>\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\" *ngIf=\"post?.video_post\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                  <span>{{post?.count}}</span>\r\n                </div>\r\n                <div [routerLink]=\"['/comments',post.id]\"\r\n                  *ngIf=\"post?.disable_comment == 0\">\r\n                  <span class=\"d-flex\">\r\n                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                    <span>{{post.total_comments.length}}</span>\r\n                  </span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- --------------- bookmark for only  othepost on own -------->\r\n              <ion-item *ngIf=\"post?.user_id != loginUserData.id\">\r\n                <div (click)=\"bookmarked(post?.id , post?.bookmarked , post?.post_type)\"\r\n                  class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"post?.user_id == loginUserData.id\">\r\n                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <!-- --------------- bookmark ends here------------ -->\r\n\r\n            <!-- -------  Description for posts   -->\r\n\r\n            <div *ngIf=\"post?.post_type==1\">\r\n              <p *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 100)}}\r\n              </p>\r\n              <p\r\n                *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <div *ngIf=\"post?.post_type==2\">\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 100)}}\r\n              </p>\r\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <!-- ------- ends here -->\r\n\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-grid *ngIf=\"post?.length>0\" class=\"home-cat\">\r\n        <ion-row class=\"row\">\r\n          <ion-col size=\"3\" style=\"justify-content: center;\" *ngFor=\"let user of  post\">\r\n            <!-- <ion-card class=\"cat-card\" style=\"background-color: #27a69a;\">               -->\r\n                <!-- <div class=\"catBG\"> \r\n                  <img [defaultImage]=\"defaultConsultantBackgroundImage\" [lazyLoad]=\"consultantBackgroundImag+user?.bios?.profile_background_image\"/>\r\n                  <img src=\"https://ionicinto.wdipl.com/public/profile_background_image/thumb/{{user?.bios?.profile_background_image}}\" *ngIf=\"user?.bios?.profile_pic\">\r\n                </div> -->\r\n                  <!-- <ion-card-content class=\"home-card\"> -->\r\n                    <div>\r\n                      <ion-avatar [routerLink]=\"['/tabs/consultant-profile-view/',user?.id]\">\r\n                        <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+user?.bios?.profile_pic\"/>\r\n                      </ion-avatar>\r\n                      {{user?.user_name}}\r\n                    </div>\r\n        \r\n              <!-- </ion-card-content> -->\r\n            <!-- </ion-card> -->\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  <!-- </div> -->\r\n  <!-- ANIMATED LOADER -->\r\n  <!-- <div *ngIf=\"!gotData\">\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div> -->\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnLive {\n  font-size: 10px;\n  background: #27a69a;\n  --background: #27a69a;\n  color: #fff;\n  letter-spacing: 0.5px;\n  border-radius: 30px;\n  --border-radius: 30px;\n  height: 20px;\n  padding: 0;\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n\n.cat-card {\n  position: relative;\n  height: 260px;\n  margin: 0;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n}\n\n.home-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n  position: absolute;\n  width: 100%;\n  top: 0;\n}\n\n.home-card ion-avatar {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff;\n}\n\n.category-card {\n  position: relative;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n  border-radius: 50%;\n}\n\n.category-card img {\n  width: 35px;\n  margin: 15px auto;\n}\n\n.category-card + h4 {\n  font-size: 10px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  color: #737373;\n  text-align: center;\n}\n\n.catBG {\n  height: 100%;\n}\n\n.catBG img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.special-slide {\n  position: relative;\n}\n\n.special-slide:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 100%);\n}\n\n.white-background {\n  background: #fff !important;\n}\n\n.item-card {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.item-header {\n  padding: 15px !important;\n}\n\n.header-right {\n  align-items: center;\n}\n\n.post-slider {\n  height: calc(100vw - 25px);\n  max-height: none !important;\n}\n\n.post-slider ion-slide {\n  height: 100% !important;\n}\n\n.post-image,\n.post-video {\n  height: calc(100vw - 25px) !important;\n  padding: 0px;\n}\n\n.post-image img, .post-video img {\n  border-radius: 0px;\n}\n\n.video-icon {\n  top: 15px !important;\n  left: 15px !important;\n  padding: 1px 4px;\n  border-radius: 5px;\n  background: #00000029;\n}\n\n.post-content {\n  padding: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUFtQixrREFBQTtBQ0V2Qjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUlBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUFnQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLGNBQUE7RUFBZSxrQkFBQTtFQUFtQixrREFBQTtFQUFtRCxrQkFBQTtBQ1FqSjs7QURQSTtFQUFJLFdBQUE7RUFBWSxpQkFBQTtBQ1dwQjs7QURUQTtFQUFrQixlQUFBO0VBQWUsZUFBQTtFQUFlLHlCQUFBO0VBQXlCLGNBQUE7RUFBZSxrQkFBQTtBQ2lCeEY7O0FEaEJBO0VBQU8sWUFBQTtBQ29CUDs7QURuQkk7RUFBSSxZQUFBO0VBQWEsb0JBQUE7S0FBQSxpQkFBQTtBQ3VCckI7O0FEckJBO0VBQ0ksa0JBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNGQUFBO0FDeUJKOztBRHZCQTtFQUNJLDJCQUFBO0FDMEJKOztBRHhCQTtFQUNJLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0FDMkJKOztBRHpCQTtFQUNJLHdCQUFBO0FDNEJKOztBRDFCQTtFQUNJLG1CQUFBO0FDNkJKOztBRDNCQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7QUM4Qko7O0FENUJBO0VBQ0ksdUJBQUE7QUMrQko7O0FEN0JBOztFQUVJLHFDQUFBO0VBQ0EsWUFBQTtBQ2dDSjs7QUQ5QkE7RUFDSSxrQkFBQTtBQ2lDSjs7QUQvQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDa0NKOztBRGhDQTtFQUNJLHdCQUFBO0FDbUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5MaXZlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxufVxyXG5cclxuLmNhdC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Ym94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMTY0LCAxNjQsIDE2NCwgMC4yNSk7XHJcbn1cclxuLmhvbWUtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDUwJSwgcmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSA1MCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMCkgNTAlLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufVxyXG4uaG9tZS1jYXJkIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY2FyZCB7cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDogNjVweDt3aWR0aDogNjVweDttYXJnaW46IDAgYXV0bzt0ZXh0LWFsaWduOiBjZW50ZXI7Ym94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMTY0LCAxNjQsIDE2NCwgMC4yNSk7Ym9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaW1ne3dpZHRoOiAzNXB4O21hcmdpbjogMTVweCBhdXRvO30gICAgXHJcbn1cclxuLmNhdGVnb3J5LWNhcmQraDR7Zm9udC1zaXplOjEwcHg7bWFyZ2luOjVweCAwIDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiAjNzM3MzczO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jYXRCR3toZWlnaHQ6IDEwMCU7XHJcbiAgICBpbWd7aGVpZ2h0OiAxMDAlO29iamVjdC1maXQ6IGNvdmVyO31cclxufVxyXG4uc3BlY2lhbC1zbGlkZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc3BlY2lhbC1zbGlkZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAyMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XHJcbn1cclxuLndoaXRlLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0tY2FyZHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbn1cclxuLml0ZW0taGVhZGVye1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXItcmlnaHR7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wb3N0LXNsaWRlcntcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDI1cHgpO1xyXG4gICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LXNsaWRlciBpb24tc2xpZGV7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ucG9zdC1pbWFnZSwgXHJcbi5wb3N0LXZpZGVvIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDI1cHgpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnBvc3QtaW1hZ2UgaW1nLCAucG9zdC12aWRlbyBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuLnZpZGVvLWljb257XHJcbiAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDFweCA0cHggO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDI5O1xyXG59XHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG59IiwiLmJ0bkxpdmUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyN2E2OWE7XG4gIC0tYmFja2dyb3VuZDogIzI3YTY5YTtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbn1cblxuLmNhdC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMTY0LCAxNjQsIDE2NCwgMC4yNSk7XG59XG5cbi5ob21lLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbi5ob21lLWNhcmQgaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG5cbi5jYXRlZ29yeS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiA2NXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhdGVnb3J5LWNhcmQgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuXG4uY2F0ZWdvcnktY2FyZCArIGg0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDVweCAwIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNzM3MzczO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXRCRyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXRCRyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc3BlY2lhbC1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNwZWNpYWwtc2xpZGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAyMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XG59XG5cbi53aGl0ZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1jYXJkIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xufVxuXG4uaXRlbS1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zdC1zbGlkZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyNXB4KTtcbiAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1zbGlkZXIgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0LWltYWdlLFxuLnBvc3QtdmlkZW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyNXB4KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wb3N0LWltYWdlIGltZywgLnBvc3QtdmlkZW8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4udmlkZW8taWNvbiB7XG4gIHRvcDogMTVweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDFweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDI5O1xufVxuXG4ucG9zdC1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _profile_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/popover/popover.component */ "./src/app/profile/popover/popover.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");









let HomePage = class HomePage {
    constructor(homeService, commonService, modalController, searchService, popoverController) {
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
            spaceBetween: 2,
        };
    }
    ngOnInit() {
        this.commonService.presentLoader();
        this.loginUserData = this.commonService.getUserData();
        this.currentPage = 0;
        this.searchService.getSpecialities(null).subscribe(data => {
            this.specialities = data.list;
        });
        this.homeService.getHomeContent({ 'page': (this.currentPage) }).subscribe(data => {
            let postData = this.like_bookmark(data.postData.data);
            console.log(postData);
            this.last_page = data.postData.last_page;
            this.currentPage = data.postData.current_page;
            this.searchService.getTopConsultant().subscribe((data) => {
                this.postData = [];
                let topPeople = data.topuser;
                postData.filter((el, i) => {
                    if (i % 5 == 0) {
                        this.postData.push(topPeople.splice(0, 2));
                    }
                    this.postData.push(el);
                });
                this.remainingTopConsultent = topPeople;
            });
            if (postData.length < 1) {
                this.gotData = true;
            }
            this.commonService.dismissLoader();
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
                    console.log(this.postData);
                    console.log('postData');
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
HomePage.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map