(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultant-videos-consultant-videos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/consultant-videos/consultant-videos.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consultant-videos/consultant-videos.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">      \r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>My Videos</ion-label>\r\n    </ion-item>  \r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>  \r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-segment scrollable='true' class=\"top-segment\" (ionChange)=\"segmentChanged($event)\" >\r\n    <ion-segment-button class=\"fs-small\" value=\"intoactive\" checked>IntoActiv Videos</ion-segment-button>\r\n    <ion-segment-button class=\"fs-small\" value=\"video\">Received Videos</ion-segment-button>\r\n    <ion-segment-button class=\"fs-small\" value=\"program\">Upcoming Videos</ion-segment-button>\r\n    <ion-segment-button class=\"fs-small\" value=\"saved\">Saved Videos</ion-segment-button>\r\n  </ion-segment>\r\n  <div [ngSwitch]=\"consultantVideos\">\r\n    <div *ngSwitchCase=\"'intoactive'\"> \r\n      <ion-card class=\"video-card\">\r\n        <ion-card-header class=\"card-head upcoming-block\">\r\n          <img src=\"../../assets/images/demo1.jpg\">\r\n          <ion-label class=\"full-width\">\r\n            <a href=\"\">\r\n              <ion-card-title>Pooja96</ion-card-title>\r\n              <ion-card-subtitle>India</ion-card-subtitle>\r\n            </a>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">2019-04-23</p><p class=\"post-time\">12:30:43</p></ion-text> \r\n          </ion-label>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding\">\r\n          <ion-thumbnail class=\"post-video\">\r\n           <img src=\"../../assets/images/demo1.jpg\">\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          <div class=\"video-content\">\r\n            <ion-list class=\"video-post\">\r\n              <ion-item>\r\n                <div (click)=\"like=!like\" class=\"{{ like ?'inactive':'active' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>2</span>\r\n                </div>\r\n                <div (click)=\"chatModal()\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>0</span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- <ion-item>\r\n                <div (click)=\"bookmark=!bookmark\" class=\"{{ bookmark ?'inactive':'active' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item> -->\r\n            </ion-list>\r\n            <p><span class=\"username-text\">username</span> Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend\r\n              a week in the woods. Wash your spirit clean.</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"video-card\">\r\n        <ion-card-header class=\"card-head upcoming-block\">\r\n          <img src=\"../../assets/images/demo1.jpg\">\r\n          <ion-label class=\"full-width\">\r\n            <a href=\"\">\r\n              <ion-card-title>Pooja96</ion-card-title>\r\n              <ion-card-subtitle>India</ion-card-subtitle>\r\n            </a>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">2019-04-23</p><p class=\"post-time\">12:30:43</p></ion-text> \r\n          </ion-label>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding\">\r\n          <ion-thumbnail class=\"post-video\">\r\n            <img src=\"../../assets/images/demo1.jpg\">\r\n          </ion-thumbnail>\r\n\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          <div class=\"video-content\">\r\n            <ion-list class=\"video-post\">\r\n              <ion-item>\r\n                <div (click)=\"like=!like\" class=\"{{ like ?'inactive':'active' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>2</span>\r\n                </div>\r\n                <div (click)=\"chatModal()\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>0</span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- <ion-item>\r\n                <div (click)=\"bookmark=!bookmark\" class=\"{{ bookmark ?'inactive':'active' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item> -->\r\n            </ion-list>\r\n            <p><span class=\"username-text\">username</span> Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend\r\n              a week in the woods. Wash your spirit clean.</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"video-card\">\r\n        <ion-card-header class=\"card-head upcoming-block\">\r\n          <img src=\"../../assets/images/demo1.jpg\">\r\n          <ion-label class=\"full-width\">\r\n            <a href=\"\">\r\n              <ion-card-title>Pooja96</ion-card-title>\r\n              <ion-card-subtitle>India</ion-card-subtitle>\r\n            </a>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">2019-04-23</p><p class=\"post-time\">12:30:43</p></ion-text> \r\n          </ion-label>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding\">\r\n          <ion-thumbnail class=\"post-video\">\r\n            <img src=\"../../assets/images/demo1.jpg\">\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          <div class=\"video-content\">\r\n            <ion-list class=\"video-post\">\r\n              <ion-item>\r\n                <div (click)=\"like=!like\" class=\"{{ like ?'inactive':'active' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>2</span>\r\n                </div>\r\n                <div (click)=\"chatModal()\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>0</span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- <ion-item>\r\n                <div (click)=\"bookmark=!bookmark\" class=\"{{ bookmark ?'inactive':'active' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item> -->\r\n            </ion-list>\r\n            <p><span class=\"username-text\">username</span> Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend\r\n              a week in the woods. Wash your spirit clean.</p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngSwitchCase=\"'video'\" lines=\"none\"> \r\n      <div class=\"no-data\" *ngIf=\"!myPosts || myPosts.length === 0\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No post added yet.</p>\r\n      </div>          \r\n      <ion-card class=\"video-card\" *ngFor=\"let post of myPosts\">\r\n        <ion-card-header class=\"card-head upcoming-block\" [routerLink]=\"['/videos',post.posts_id,'exclusive']\">\r\n          <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n          <ion-label class=\"full-width\">\r\n            <a>\r\n              <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n            </a>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">{{post?.created_at}}</p></ion-text> \r\n          </ion-label>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding\">\r\n          <ion-thumbnail class=\"post-video\">\r\n            <img [routerLink]=\"['/videos',post.posts_id,'exclusive']\" src=\"{{storagePath + post.thumb_path}}\" alt=\"Thumnail Path\" />\r\n          </ion-thumbnail>  \r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          <div class=\"video-content\">\r\n            <ion-list class=\"video-post\">\r\n              <ion-item>\r\n                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>{{post?.count}}</span>\r\n                </div>\r\n                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\" !post?.disable_comment\">                               \r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                  <span>{{post.total_comments.length}}</span>                              \r\n                </div>\r\n              </ion-item>\r\n              <!-- <ion-item>\r\n                <div (click)=\"bookmark=!bookmark\" class=\"{{ bookmark ?'inactive':'active' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item> -->\r\n            </ion-list>\r\n            <div>\r\n            <p class=\"mb-10\" *ngIf=\"post.description && post.description.length < 30\"><span\r\n              class=\"username-text text-green\"></span>{{post.description.substr(0, 100)}}\r\n          </p>\r\n          <p class=\"mb-10\" *ngIf=\"post.description && post.description.length > 29 && expanded !=  post.id\">\r\n            <span\r\n              class=\"username-text text-green\"></span>{{post.description.substr(0, 29)}}\r\n            <span (click)=\"expanded = post.id\"\r\n              class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n          <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n              class=\"username-text text-green\"></span>{{post.description}}\r\n            <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n          </p>\r\n        </div>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadVideoData($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n        </ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>      \r\n    </div>\r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'program'\">\r\n      <div class=\"no-data\" *ngIf=\"!upcomingList || upcomingList.length === 0\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No upcoming program added yet.</p>\r\n      </div> \r\n      <ion-item class=\"upcoming-block\"  *ngFor=\"let upcoming of upcomingList\">\r\n        <ion-avatar slot=\"start\">\r\n          <img\r\n          src=\"{{profile_url}}{{upcoming?.program_user?.bios?.profile_pic}}\" *ngIf=\"upcoming?.program_user?.bios?.profile_pic\">\r\n          <img  src=\"../../assets/images/user.jpg\" *ngIf=\"!upcoming?.program_user?.bios?.profile_pic\"  >\r\n    \r\n            </ion-avatar>\r\n        <ion-label     [routerLink]=\"userData?.id ==upcoming?.user_id ? ['/program-details/',upcoming.id] : ['/program-view/',upcoming.id]\">\r\n          <div>\r\n            <h3>{{upcoming?.title}}</h3>\r\n            <p>{{upcoming?.type_id}}</p>\r\n            <p>By: <span>{{upcoming?.program_user?.user_name}}</span></p>\r\n            <p class=\"countdown\"  *ngIf=\"upcoming?.cd>0\">Countdown <a>{{upcoming?.hh | number}}h {{upcoming?.mm | number}}m {{upcoming?.ss | number}}s </a></p>\r\n            <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd==0\"> <b> L I V E</b></span>\r\n          </div>\r\n          <!-- <div class=\"action-links\"  *ngIf=\"upcoming?.nutrition_id\">\r\n            <a (click)=\"nutritionModal(upcoming)\">\r\n              <ion-icon ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n            </a>\r\n          </div> -->\r\n        </ion-label>\r\n      </ion-item>\r\n   \r\n    </ion-list>\r\n    <div *ngSwitchCase=\"'saved'\">\r\n      <div  *ngFor=\"let post of mySavedVideoPosts\" >\r\n      <ion-card class=\"item-card\" *ngIf=\"post?.video_post['0']?.video_type == 3\">\r\n        <!-- <ion-col *ngIf=\"post['video_post']['0']['video_type'] != 3\" size=\"12\" class=\"ion-no-padding\">\r\n          <ion-slide class=\"no_imagedata\">No post added yet 3!!!</ion-slide>\r\n        </ion-col> -->\r\n        <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.id,'']\">\r\n          <ion-avatar>\r\n            <img [defaultImage]=\"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\"/>\r\n            <!-- <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\"\r\n              *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\"> -->\r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label>\r\n              <ion-card-title>{{loginUserData.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{loginUserData.location}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}}</p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail [routerLink]=\"['/videos',post.id,'']\"\r\n            *ngIf=\"post['video_post']['0']['thumb_path']\">\r\n            <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"storagePath+post['video_post']['0']['thumb_path']\" alt=\"Video Thumnail\">\r\n            <!-- <img src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n            <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment == 0\">\r\n                  <!-- <span *ngIf=\"loginUserData?.comment_disable == 0\"> -->\r\n                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                    <span>{{post.total_comments.length}}</span>\r\n                  <!-- </span> -->\r\n                </div>\r\n                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                  <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <ion-item>\r\n                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <!-- -------  Description post with  post type = 2 -->\r\n            <div *ngIf=\"post?.post_type==2\">\r\n              <p class=\"mb-10\"\r\n                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length < 30\">\r\n                <span\r\n                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 100)}}\r\n              </p>\r\n              <p class=\"mb-10\"\r\n                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description}}\r\n                <span (click)=\"expanded = 0\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n            </div>\r\n            <!-- ------- ends here   post type = 2 -->\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      </div>\r\n      <div class=\"no-data\" *ngIf=\"post?.video_post['0']?.video_type != 3 && post?.length < 1\" style=\"height: calc(100vh - 175px)\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>Save Video  Not Found.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<!-- <app-fixed-footer></app-fixed-footer> -->");

/***/ }),

/***/ "./src/app/consultant-videos/consultant-videos-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/consultant-videos/consultant-videos-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultantVideosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantVideosPageRoutingModule", function() { return ConsultantVideosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _consultant_videos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultant-videos.page */ "./src/app/consultant-videos/consultant-videos.page.ts");




const routes = [
    {
        path: '',
        component: _consultant_videos_page__WEBPACK_IMPORTED_MODULE_3__["ConsultantVideosPage"]
    }
];
let ConsultantVideosPageRoutingModule = class ConsultantVideosPageRoutingModule {
};
ConsultantVideosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultantVideosPageRoutingModule);



/***/ }),

/***/ "./src/app/consultant-videos/consultant-videos.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/consultant-videos/consultant-videos.module.ts ***!
  \***************************************************************/
/*! exports provided: ConsultantVideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantVideosPageModule", function() { return ConsultantVideosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultant_videos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultant-videos-routing.module */ "./src/app/consultant-videos/consultant-videos-routing.module.ts");
/* harmony import */ var _consultant_videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultant-videos.page */ "./src/app/consultant-videos/consultant-videos.page.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");









let ConsultantVideosPageModule = class ConsultantVideosPageModule {
};
ConsultantVideosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consultant_videos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultantVideosPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"]
        ],
        declarations: [_consultant_videos_page__WEBPACK_IMPORTED_MODULE_6__["ConsultantVideosPage"]]
    })
], ConsultantVideosPageModule);



/***/ }),

/***/ "./src/app/consultant-videos/consultant-videos.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/consultant-videos/consultant-videos.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-data {\n  height: calc(100vh - 150px); }\n\n::ng-deep button.button-native {\n  padding-inline: 0px !important;\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n  -webkit-padding-end: 0 !important;\n          padding-inline-end: 0 !important;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n::ng-deep .fs-small {\n  font-size: 0.65rem; }\n\nion-segment-button.fs-small.ios.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.card-head {\n  padding: 15px 15px 0px 15px !important; }\n\n.upcoming-block {\n  border-bottom: none; }\n\n.post-image,\n.post-video {\n  height: calc(100vw - 30px) !important;\n  padding: 15px; }\n\n.post-image img, .post-video img {\n  border-radius: 20px; }\n\n.video-icon {\n  top: 25px !important;\n  left: 30px !important;\n  padding: 1px 4px;\n  border-radius: 5px;\n  background: #00000029; }\n\n.post-content, .video-content {\n  padding: 0px 15px 15px 15px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdGFudC12aWRlb3MvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGNvbnN1bHRhbnQtdmlkZW9zXFxjb25zdWx0YW50LXZpZGVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUywyQkFBMkIsRUFBQTs7QUFDcEM7RUFFUSw4QkFBOEI7RUFDOUIsbUNBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxpQ0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFOMUI7RUFTUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksc0NBQXNDLEVBQUE7O0FBRTFDO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCOztFQUVJLHFDQUFxQztFQUNyQyxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHNDQUFzQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29uc3VsdGFudC12aWRlb3MvY29uc3VsdGFudC12aWRlb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWRhdGF7aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO31cclxuOjpuZy1kZWVwe1xyXG4gICAgYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50OyBcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuZnMtc21hbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtOyBcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uLmZzLXNtYWxsLmlvcy5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50Lmh5ZHJhdGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5jYXJkLWhlYWR7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4udXBjb21pbmctYmxvY2t7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ucG9zdC1pbWFnZSwgXHJcbi5wb3N0LXZpZGVvIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDMwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5wb3N0LWltYWdlIGltZywgLnBvc3QtdmlkZW8gaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4udmlkZW8taWNvbntcclxuICAgIHRvcDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXB4IDRweCA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjk7XHJcbn1cclxuLnBvc3QtY29udGVudCwgLnZpZGVvLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHggMTVweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/consultant-videos/consultant-videos.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/consultant-videos/consultant-videos.page.ts ***!
  \*************************************************************/
/*! exports provided: ConsultantVideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantVideosPage", function() { return ConsultantVideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/program.service */ "./src/app/services/program.service.ts");









let ConsultantVideosPage = class ConsultantVideosPage {
    constructor(commonService, modalController, peopleView, navCtrl, programService) {
        this.commonService = commonService;
        this.modalController = modalController;
        this.peopleView = peopleView;
        this.navCtrl = navCtrl;
        this.programService = programService;
        this.bookmark = true;
        this.like = true;
        this.currentPage = 0;
        this.gotData = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
        this.profile_url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].storagePath;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.bannerDefaultImage = './../../../assets/images/editcoverpic.png';
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.consultantVideos = 'intoactive';
    }
    segmentChanged(ev) {
        this.consultantVideos = ev.detail.value;
    }
    goBack() {
        this.navCtrl.back();
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.userData.id;
        this.peopleView.getUserData({ 'userId': this.userId }).subscribe((data) => {
            this.profileData = data;
        });
        this.videoLoadData();
        this.videoPostData();
    }
    ionViewWillEnter() {
        this.programService.getUpcomingPrograms(null).subscribe(data => {
            if (data.programList.length < 1) {
                this.noData = true;
            }
            let filter = data.programList.filter(el => {
                if (el.type_id == 'video') {
                    return el;
                }
            });
            this.upcomingList = this.getCounter(filter);
            console.log(filter);
        });
    }
    getCounter(elementArr) {
        elementArr.filter(el => {
            el.convertedTime = new Date(el.program_date + 'Z');
            let a = new Date(el.program_date + 'Z');
            let b = new Date();
            let c;
            if (a > b) {
                c = Math.abs(a - b) / 1000;
            }
            else {
                c = 0;
                el.live = true;
            }
            el.cd = c;
            setInterval(function () {
                if (parseInt(el.cd) > 0)
                    el.cd = parseInt(el.cd) - 1;
                el.hh = ~~(el.cd / (60 * 60));
                el.mm = ~~(el.cd % 3600 / 60);
                el.ss = (el.cd % 3600 % 60);
            }, 1000);
            return el;
        });
        return elementArr;
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["ViewerModalComponent"],
                componentProps: {
                    src: this.storagePath + path,
                    srcHighRes: this.storagePath + path,
                    srcFallback: this.storagePath + path
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    videoPostData() {
        this.peopleView.getExclusiveVedioType('2', this.userId, 2, 1).subscribe((data) => {
            this.myPosts = data.posts.data;
            console.log(this.myPosts);
            this.myPosts.forEach((element, i) => {
                this.myPosts[i].count = element.post_likes.length;
                element.post_likes.filter((f) => {
                    if (f.user_id == this.userId) {
                        this.myPosts[i].liked = true;
                    }
                });
                element.post_bookmarks.filter((f) => {
                    if (f.user_id == this.userId) {
                        this.myPosts[i].bookmarked = true;
                    }
                });
            });
            this.last_page = data.posts.last_page;
            this.currentPage = data.posts.current_page;
            this.gotData = true;
        });
    }
    videoLoadData() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.peopleView.getMyPost('2', this.userId, 1).subscribe((data) => {
            this.mySavedVideoPosts = data.posts.data;
            console.log(this.mySavedVideoPosts);
            this.mySavedVideoPosts.forEach((element, i) => {
                this.mySavedVideoPosts[i].count = element.post_likes.length;
                element.post_likes.filter((f) => {
                    if (f.user_id == this.userData.id) {
                        this.mySavedVideoPosts[i].liked = true;
                    }
                });
                element.post_bookmarks.filter((f) => {
                    if (f.user_id == this.userData.id) {
                        this.mySavedVideoPosts[i].bookmarked = true;
                    }
                });
            });
            this.last_page = data.posts.last_page;
            this.currentPage = data.posts.current_page;
            this.gotData = true;
        });
    }
    loadVideoData(event) {
        setTimeout(() => {
            if (this.currentPage > 0) {
                this.peopleView.getExclusiveVedioType('2', this.userId, 2, (this.currentPage + 1)).subscribe((data) => {
                    data.posts.data.forEach((element, i) => {
                        element.count = element.post_likes.length;
                        element.post_likes.filter((f) => {
                            if (f.user_id == this.userId) {
                                data.posts.data[i].liked = true;
                            }
                        });
                        element.post_bookmarks.filter((f) => {
                            if (f.user_id == this.userId) {
                                this.myPosts[i].bookmarked = true;
                            }
                        });
                    });
                    this.myPosts = this.myPosts.concat(data.posts.data);
                    this.last_page = data.posts.last_page;
                    this.currentPage = data.posts.current_page;
                });
            }
            event.target.complete();
            if (this.last_page <= (this.currentPage + 1)) {
                event.target.disabled = true;
            }
        }, 500);
    }
    liked(postId, likeStat) {
        this.myPosts.forEach((element, i) => {
            if (element.id == postId) {
                this.myPosts[i].liked = !likeStat;
                if (likeStat) {
                    this.myPosts[i].count = (this.myPosts[i].count - 1);
                }
                else {
                    this.myPosts[i].count = (this.myPosts[i].count + 1);
                }
            }
        });
        this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    nutritionModal(data) {
        this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_4__["NutritionModalComponent"], 'fullModal', { 'data': data });
    }
};
ConsultantVideosPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_7__["PeopleViewService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"] }
];
ConsultantVideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultant-videos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consultant-videos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/consultant-videos/consultant-videos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consultant-videos.page.scss */ "./src/app/consultant-videos/consultant-videos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_7__["PeopleViewService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"]])
], ConsultantVideosPage);



/***/ })

}]);
//# sourceMappingURL=consultant-videos-consultant-videos-module-es2015.js.map