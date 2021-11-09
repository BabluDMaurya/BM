(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home1-home1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home1/home1.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\n  <ion-list class=\"top-heading three-block\">\n    <ion-item slot=\"start\">\n      <!-- <ion-button class=\"ion-no-margin btnLive\">Live</ion-button> -->\n    </ion-item>\n    <ion-item slot=\"center\">\n      <ion-label>INTOACTIVE</ion-label>\n    </ion-item>\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\n      <div class=\"icon-right-side\">\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\n        </a>\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\n          <ion-badge slot=\"end\" *ngIf=\"notificationCount > 0\">{{ notificationCount }}</ion-badge>\n        </a>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-header>\n\n<ion-content class=\"main_content\">\n  <ion-refresher class=\"component-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"gotData\">\n    <ion-grid *ngIf=\"specialities?.length>0\" class=\"home-cat\">\n      <ion-row class=\"row\">\n        <!-- <ion-col size=\"3\" *ngFor=\"let special of  specialities\">\n          <ion-card class=\"category-card\"> \n              <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \n          </ion-card>\n          <h4>{{special?.name}}</h4>\n        </ion-col> -->\n\n        <ion-slides [options]=\"sliderOpts\">\n          <ion-slide class=\"white-background\" *ngFor=\"let special of  specialities\">\n            <ion-col size=\"12\">\n              <ion-card class=\"category-card\"> \n                  <img src=\"{{url}}public/{{special?.specialities_image}}\" *ngIf=\"special?.specialities_image\">              \n              </ion-card>\n              <h4>{{special?.name}}</h4>\n            </ion-col>\n          </ion-slide>\n        </ion-slides>\n      </ion-row>\n    </ion-grid>\n\n    \n    <div *ngIf=\"!postData?.length > 0\" class=\"no-data\" style=\"height: calc(100vh - 230px);\">\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\n      <p>No post added yet!!!</p>\n    </div>\n    <div *ngFor=\"let post of postData; let i= index;\"> \n      <ion-card class=\"item-card\" *ngIf=\"   !post?.length\">\n        <ion-card-header class=\"item-header\">\n          <ion-avatar >\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{post?.post_user?.bios?.profile_pic}}\"\n              *ngIf=\"post?.post_user?.bios?.profile_pic\">\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post?.post_user?.bios?.profile_pic\">\n          </ion-avatar>\n          <div class=\"header-right\">\n            <ion-label  >\n              <ion-card-title>{{post?.post_user?.user_name}}</ion-card-title>\n              <ion-card-subtitle>{{post?.post_user?.bios?.country_name?.name}}</ion-card-subtitle>\n            </ion-label>\n            <ion-text class=\"post-timedate\">\n              <p class=\"post-date\">{{post?.created_at}} </p>\n            </ion-text>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"ion-no-padding item-content\">\n          <ion-thumbnail *ngIf=\"post?.image_post\">\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\n              <ion-slide *ngFor=\"let imgpath of post?.image_post['0']?.thumb_path; let i =index;\">\n                <img (click)=\"openViewer(post?.image_post['0']?.thumb_path[i])\" src=\"{{url}}{{imgpath}}\"\n                  alt=\"{{imgpath}}\" />\n              </ion-slide>\n            </ion-slides>\n          </ion-thumbnail>\n          <ion-thumbnail *ngIf=\"post?.video_post\" [routerLink]=\"['/videos',post.id,'']\">\n            <img src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" />\n            <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\n          </ion-thumbnail>\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\" *ngIf=\"post?.video_post\"></ion-icon>\n          <div class=\"post-content\">\n            <ion-list class=\"item-post\" lines=\"none\">\n              <ion-item>\n                <div [routerLink]=\"['/comments',post.id]\"\n                  *ngIf=\"post?.disable_comment == 0\">\n                  <span class=\"d-flex\">\n                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\n                    <span>{{post.total_comments.length}}</span>\n                  </span>\n                </div>\n                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\n                  <span>{{post?.count}}</span>\n                </div>\n              </ion-item>\n              <!-- --------------- bookmark for only  othepost on own -------->\n              <ion-item *ngIf=\"post?.user_id != loginUserData.id\">\n                <div (click)=\"bookmarked(post?.id , post?.bookmarked , post?.post_type)\"\n                  class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\n                </div>\n              </ion-item>\n\n              <ion-item *ngIf=\"post?.user_id == loginUserData.id\">\n                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\n                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\n                </div>\n              </ion-item>\n            </ion-list>\n            <!-- --------------- bookmark ends here------------ -->\n\n            <!-- -------  Description for posts   -->\n\n            <div *ngIf=\"post?.post_type==1\">\n              <p *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length < 30\"><span\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 100)}}\n              </p>\n              <p\n                *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length > 29 && expanded !=  post.id\">\n                <span\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 29)}}\n                <span (click)=\"expanded = post.id\"\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\n              <p *ngIf=\"expanded ==  post.id \"><span\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description}}\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\n              </p>\n            </div>\n\n            <div *ngIf=\"post?.post_type==2\">\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length < 30\"><span\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 100)}}\n              </p>\n              <p *ngIf=\"post?.video_post['0'].title && post?.video_post['0'].title.length > 29 && expanded !=  post.id\">\n                <span\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title.substr(0, 29)}}\n                <span (click)=\"expanded = post.id\"\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\n              <p *ngIf=\"expanded ==  post.id \"><span\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.video_post['0'].title}}\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\n              </p>\n            </div>\n\n            <!-- ------- ends here -->\n\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-grid *ngIf=\"post?.length>0\" class=\"home-cat\">\n        <ion-row class=\"row\">\n          <ion-col size=\"6\" *ngFor=\"let user of  post\">\n            <ion-card class=\"cat-card\">\n              \n                <div class=\"catBG\"> <img src=\"https://ionicinto.wdipl.com/public/profile_background_image/thumb/{{user?.bios?.profile_background_image}}\"\n                  *ngIf=\"user?.bios?.profile_pic\"></div>\n                  <ion-card-content>\n                <ion-avatar [routerLink]=\"['/tabs/consultant-profile-view/',user?.id]\">\n                  <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{user?.bios?.profile_pic}}\"\n                    *ngIf=\"user?.bios?.profile_pic\">\n                  <img src=\"./../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\">\n                </ion-avatar>\n                {{user?.user_name}}\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <!-- ANIMATED LOADER -->\n  <div *ngIf=\"!gotData\">\n    <ion-card class=\"video-card\">\n      <ion-card-header class=\"card-head upcoming-block\">\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\n        <ion-label>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-label>\n      </ion-card-header>\n      <ion-card-content class=\"ion-no-padding\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <div class=\"video-content\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"video-card\">\n      <ion-card-header class=\"card-head upcoming-block\">\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\n        <ion-label>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-label>\n      </ion-card-header>\n      <ion-card-content class=\"ion-no-padding\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <div class=\"video-content\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".btnLive {\n  font-size: 10px;\n  background: #27a69a;\n  --background: #27a69a;\n  color: #fff;\n  letter-spacing: 0.5px;\n  border-radius: 30px;\n  --border-radius: 30px;\n  height: 20px;\n  padding: 0;\n  --padding-start: 15px;\n  --padding-end: 15px; }\n\n.cat-card {\n  position: relative;\n  height: 260px;\n  margin: 0;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25); }\n\n.cat-card .card-content-md {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.65) 100%);\n  position: absolute;\n  width: 100%;\n  top: 0; }\n\n.cat-card .card-content-md ion-avatar {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff; }\n\n.category-card {\n  position: relative;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n  border-radius: 50%; }\n\n.category-card img {\n    width: 35px;\n    margin: 15px auto; }\n\n.category-card + h4 {\n  font-size: 10px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  color: #737373;\n  text-align: center; }\n\n.catBG {\n  height: 100%; }\n\n.catBG img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.special-slide {\n  position: relative; }\n\n.special-slide:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 100%); }\n\n.white-background {\n  background: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZTEvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGhvbWUxXFxob21lMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQWdCO0VBQ2hCLG1CQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0VBQUMsa0RBQWtELEVBQUE7O0FBRXpFO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBR1gsc0ZBQStFO0VBQy9FLGtCQUFrQjtFQUFDLFdBQVc7RUFDOUIsTUFBTSxFQUFBOztBQUVWO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFHMUI7RUFBZ0Isa0JBQWtCO0VBQUMsWUFBWTtFQUFDLFdBQVc7RUFBQyxjQUFjO0VBQUMsa0JBQWtCO0VBQUMsa0RBQWtEO0VBQUMsa0JBQWtCLEVBQUE7O0FBQW5LO0lBQ1EsV0FBVztJQUFDLGlCQUFpQixFQUFBOztBQUVyQztFQUFrQixlQUFjO0VBQUMsZUFBYztFQUFDLHlCQUF3QjtFQUFDLGNBQWM7RUFBQyxrQkFBa0IsRUFBQTs7QUFDMUc7RUFBTyxZQUFZLEVBQUE7O0FBQW5CO0lBQ1EsWUFBWTtJQUFDLG9CQUFpQjtPQUFqQixpQkFBaUIsRUFBQTs7QUFFdEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzRkFBc0YsRUFBQTs7QUFFMUY7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUxL2hvbWUxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5MaXZlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxufVxyXG5cclxuLmNhdC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Ym94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMTY0LCAxNjQsIDE2NCwgMC4yNSk7XHJcbn1cclxuLmNhdC1jYXJkIC5jYXJkLWNvbnRlbnQtbWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLDAsMCwwKSA1MCUsIHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMCkgNTAlLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDApIDUwJSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcbi5jYXQtY2FyZCAuY2FyZC1jb250ZW50LW1kIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY2FyZCB7cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDogNjVweDt3aWR0aDogNjVweDttYXJnaW46IDAgYXV0bzt0ZXh0LWFsaWduOiBjZW50ZXI7Ym94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMTY0LCAxNjQsIDE2NCwgMC4yNSk7Ym9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaW1ne3dpZHRoOiAzNXB4O21hcmdpbjogMTVweCBhdXRvO30gICAgXHJcbn1cclxuLmNhdGVnb3J5LWNhcmQraDR7Zm9udC1zaXplOjEwcHg7bWFyZ2luOjVweCAwIDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiAjNzM3MzczO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jYXRCR3toZWlnaHQ6IDEwMCU7XHJcbiAgICBpbWd7aGVpZ2h0OiAxMDAlO29iamVjdC1maXQ6IGNvdmVyO31cclxufVxyXG4uc3BlY2lhbC1zbGlkZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc3BlY2lhbC1zbGlkZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAyMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XHJcbn1cclxuLndoaXRlLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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