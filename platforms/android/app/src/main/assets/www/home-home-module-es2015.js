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
/* harmony default export */ __webpack_exports__["default"] = (".btnLive {\n  font-size: 10px;\n  background: #27a69a;\n  --background: #27a69a;\n  color: #fff;\n  letter-spacing: 0.5px;\n  border-radius: 30px;\n  --border-radius: 30px;\n  height: 20px;\n  padding: 0;\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n\n.cat-card {\n  position: relative;\n  height: 260px;\n  margin: 0;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n}\n\n.home-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n  position: absolute;\n  width: 100%;\n  top: 0;\n}\n\n.home-card ion-avatar {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff;\n}\n\n.category-card {\n  position: relative;\n  height: 65px;\n  width: 65px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0px 5px 10px rgba(164, 164, 164, 0.25);\n  border-radius: 50%;\n}\n\n.category-card img {\n  width: 35px;\n  margin: 15px auto;\n}\n\n.category-card + h4 {\n  font-size: 10px;\n  margin: 5px 0 0;\n  text-transform: uppercase;\n  color: #737373;\n  text-align: center;\n}\n\n.catBG {\n  height: 100%;\n}\n\n.catBG img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.special-slide {\n  position: relative;\n}\n\n.special-slide:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 100%);\n}\n\n.white-background {\n  background: #fff !important;\n}\n\n.item-card {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.item-header {\n  padding: 15px !important;\n}\n\n.header-right {\n  align-items: center;\n}\n\n.post-slider {\n  height: calc(100vw - 25px);\n  max-height: none !important;\n}\n\n.post-slider ion-slide {\n  height: 100% !important;\n}\n\n.post-image,\n.post-video {\n  height: calc(100vw - 25px) !important;\n  padding: 0px;\n}\n\n.post-image img, .post-video img {\n  border-radius: 0px;\n}\n\n.video-icon {\n  top: 15px !important;\n  left: 15px !important;\n  padding: 1px 4px;\n  border-radius: 5px;\n  background: #00000029;\n}\n\n.post-content {\n  padding: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQW1CLGtEQUFBO0FDRXZCOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBSUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQWdCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksY0FBQTtFQUFlLGtCQUFBO0VBQW1CLGtEQUFBO0VBQW1ELGtCQUFBO0FDUWpKOztBRFBJO0VBQUksV0FBQTtFQUFZLGlCQUFBO0FDV3BCOztBRFRBO0VBQWtCLGVBQUE7RUFBZSxlQUFBO0VBQWUseUJBQUE7RUFBeUIsY0FBQTtFQUFlLGtCQUFBO0FDaUJ4Rjs7QURoQkE7RUFBTyxZQUFBO0FDb0JQOztBRG5CSTtFQUFJLFlBQUE7RUFBYSxvQkFBQTtLQUFBLGlCQUFBO0FDdUJyQjs7QURyQkE7RUFDSSxrQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0ZBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksMkJBQUE7QUMwQko7O0FEeEJBO0VBQ0ksdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7QUMyQko7O0FEekJBO0VBQ0ksd0JBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksbUJBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtBQzhCSjs7QUQ1QkE7RUFDSSx1QkFBQTtBQytCSjs7QUQ3QkE7O0VBRUkscUNBQUE7RUFDQSxZQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGtCQUFBO0FDaUNKOztBRC9CQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksd0JBQUE7QUNtQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkxpdmUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgIC0tYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG59XHJcblxyXG4uY2F0LWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtcclxufVxyXG4uaG9tZS1jYXJkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMCkgNTAlLCByZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsMCwwLDApIDUwJSxyZ2JhKDAsMCwwLDAuNjUpIDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwKSA1MCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcbi5ob21lLWNhcmQgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1jYXJkIHtwb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0OiA2NXB4O3dpZHRoOiA2NXB4O21hcmdpbjogMCBhdXRvO3RleHQtYWxpZ246IGNlbnRlcjtib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBpbWd7d2lkdGg6IDM1cHg7bWFyZ2luOiAxNXB4IGF1dG87fSAgICBcclxufVxyXG4uY2F0ZWdvcnktY2FyZCtoNHtmb250LXNpemU6MTBweDttYXJnaW46NXB4IDAgMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6ICM3MzczNzM7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmNhdEJHe2hlaWdodDogMTAwJTtcclxuICAgIGltZ3toZWlnaHQ6IDEwMCU7b2JqZWN0LWZpdDogY292ZXI7fVxyXG59XHJcbi5zcGVjaWFsLXNsaWRle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zcGVjaWFsLXNsaWRlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDIwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcclxufVxyXG4ud2hpdGUtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1jYXJke1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxufVxyXG4uaXRlbS1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlci1yaWdodHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBvc3Qtc2xpZGVye1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMjVweCk7XHJcbiAgICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvc3Qtc2xpZGVyIGlvbi1zbGlkZXtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LWltYWdlLCBcclxuLnBvc3QtdmlkZW8ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMjVweCkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ucG9zdC1pbWFnZSBpbWcsIC5wb3N0LXZpZGVvIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4udmlkZW8taWNvbntcclxuICAgIHRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXB4IDRweCA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjk7XHJcbn1cclxuLnBvc3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIuYnRuTGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZDogIzI3YTY5YTtcbiAgLS1iYWNrZ3JvdW5kOiAjMjdhNjlhO1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xufVxuXG4uY2F0LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjYwcHg7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgxNjQsIDE2NCwgMTY0LCAwLjI1KTtcbn1cblxuLmhvbWUtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbn1cblxuLmhvbWUtY2FyZCBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cblxuLmNhdGVnb3J5LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDE2NCwgMTY0LCAxNjQsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2F0ZWdvcnktY2FyZCBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG5cbi5jYXRlZ29yeS1jYXJkICsgaDQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogNXB4IDAgMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhdEJHIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhdEJHIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5zcGVjaWFsLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3BlY2lhbC1zbGlkZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDIwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcbn1cblxuLndoaXRlLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWNhcmQge1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG59XG5cbi5pdGVtLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3N0LXNsaWRlciB7XG4gIGhlaWdodDogY2FsYygxMDB2dyAtIDI1cHgpO1xuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0LXNsaWRlciBpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBvc3QtaW1hZ2UsXG4ucG9zdC12aWRlbyB7XG4gIGhlaWdodDogY2FsYygxMDB2dyAtIDI1cHgpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnBvc3QtaW1hZ2UgaW1nLCAucG9zdC12aWRlbyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi52aWRlby1pY29uIHtcbiAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMXB4IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjk7XG59XG5cbi5wb3N0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59Il19 */");

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