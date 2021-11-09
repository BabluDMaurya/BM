(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/audio-player/audio-player.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/audio-player/audio-player.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-no-padding musiclist\" lines=\"none\" *ngIf=\"songList?.length>0\">\r\n  <ion-item *ngFor=\"let song of songList\" (click)=\"playThis(song)\"  [ngClass]=\"musicSelect?.id==song?.id?'active':''\">\r\n   \r\n    <ion-icon ios=\"ios-play\" md=\"md-play\" slot=\"start\"></ion-icon>\r\n    <h3 class=\"list-head\">{{song?.title}}<span>Jazz, Electric, Soul Music</span></h3>\r\n    <ion-text slot=\"end\">{{song?.duration}}</ion-text>\r\n    \r\n    <ion-icon ios=\"ios-heart\" md=\"md-heart\" slot=\"end\" color=\"white\" (click)=\"selectPlaylist(song?.id)\"></ion-icon>\r\n  </ion-item>\r\n</ion-list>\r\n<div class=\"no-data\" *ngIf=\"songList?.length<1\">\r\n  <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n  <p>No Music Found</p>\r\n</div>\r\n\r\n<div class=\"musiclistFooter\"> \r\n  <audio #player src=\"{{baseUrl}}{{srcPath}}\"></audio>\r\n  <div class=\"musicWrapper\">\r\n    <ion-toolbar padding class=\"audio-list ion-no-padding\">\r\n      <div class=\"audio-listInner\">\r\n        <ion-fab-button *ngIf=\"!isPlaying\" (click)=\"play(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n          <ng-container *ngIf=\"isLoading; else loaded\">\r\n            <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n          </ng-container>\r\n          <ng-template #loaded>\r\n            <ion-icon [name]=\"'play'\">  </ion-icon>\r\n          </ng-template>\r\n        </ion-fab-button>\r\n        <ion-fab-button *ngIf=\"isPlaying\" (click)=\"pause(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n          <ng-container *ngIf=\"isLoading; else loaded\">\r\n            <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n          </ng-container>\r\n          <ng-template #loaded>\r\n            <ion-icon [name]=\"'pause'\">\r\n            </ion-icon>\r\n          </ng-template>\r\n        </ion-fab-button>\r\n        <div>\r\n          <div class=\"musicbar\">\r\n            <ion-range  [value]=\"currentTime\" (ionChange)=\"seek($event)\" (click)=\"onDrag()\"\r\n              class=\"newmusiclist-range\" color=\"light\"></ion-range>\r\n          </div>\r\n          <div>\r\n            <div class=\"music-timer-fav\">\r\n              <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n              <ion-icon ios=\"ios-heart\" md=\"md-heart\" slot=\"end\" color=\"white\" (click)=\"selectPlaylist(musicSelect?.id)\"></ion-icon>\r\n            </div>\r\n            <div class=\"music-name\">\r\n              <ion-label color=\"light\" slot=\"end\">{{ musicSelect?.title }}</ion-label> \r\n            </div>\r\n          </div>\r\n          <ion-label class=\"ion-text-center\">{{selectedAudio[2]}}</ion-label>        \r\n        </div>\r\n      </div>\r\n      <!-- <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label> -->\r\n    </ion-toolbar>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/expandable/expandable.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/expandable/expandable.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\r\n    <ng-content></ng-content>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/post-tab/post-tab.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/post-tab/post-tab.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-refresher class=\"component-refresher\" slot=\"fixed\" (ionRefresh)=\"postRefresh($event)\">\r\n  <ion-refresher-content\r\n    pullingIcon=\"arrow-dropdown\"\r\n    pullingText=\"Pull to refresh\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"Refreshing...\">\r\n  </ion-refresher-content>\r\n</ion-refresher>\r\n<div  *ngIf=\"gotData\">\r\n  <div *ngIf=\"!myPosts?.length > 0\" class=\"no-data\" style=\"height: calc(100vh - 220px);\">\r\n    <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n    <p>No post added yet!!!</p>\r\n  </div>\r\n  <ion-card class=\"item-card\"  *ngFor=\"let post of myPosts\">\r\n    <span  >    \r\n    <ion-card-header class=\"item-header\" >\r\n      <ion-avatar>\r\n        <img src=\"{{profilePicUrl}}{{userData?.userData?.bios?.profile_pic}}\" *ngIf=\"userData?.userData?.bios?.profile_pic\">\r\n        <img src=\"profileDefaultImage\" *ngIf=\"!userData?.userData?.bios?.profile_pic\">\r\n      </ion-avatar>\r\n      <div class=\"header-right\">\r\n        <ion-label>\r\n          <ion-card-title>{{userData.userData.user_name}}</ion-card-title>\r\n          <ion-card-subtitle>{{userData.userData.location}}</ion-card-subtitle>\r\n        </ion-label>\r\n        <ion-text class=\"post-timedate\">\r\n          <p class=\"post-date\">{{post?.created_at}}</p>\r\n        </ion-text>\r\n      </div>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding item-content\">\r\n      <ion-thumbnail *ngIf=\"post['image_post']['0']['thumb_path']\">\r\n        <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n          <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['thumb_path']; let i =index;\">\r\n            <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-thumbnail>\r\n      <div class=\"post-content\">\r\n        <!-- -------  Description post with  post type = 8 -->\r\n        <div *ngIf=\"post?.post_type==8\">\r\n          <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n          </p>\r\n          <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n            <span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n            <span (click)=\"expanded = post.id\"\r\n              class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n          <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n            <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n        </div>\r\n        <!-- ------- ends here   post type = 8 -->\r\n        <ion-list class=\"item-post\" lines=\"none\">\r\n          <ion-item>\r\n            <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment==0\">\r\n              <span class=\"d-flex\">\r\n                <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                <span>{{post.total_comments.length}}</span>\r\n              </span>\r\n            </div>\r\n            <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n              <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> \r\n              <span>{{post?.count}}</span>\r\n            </div>\r\n          </ion-item>\r\n          <!-- --------------- bookmark for only  othepost on own -------->\r\n          <ion-item *ngIf=\"post?.post_type==1 && consultID\">         \r\n              <div (click)=\"bookmarked(post?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n              </div>           \r\n          </ion-item>\r\n\r\n          <ion-item  *ngIf=\"!consultID\">         \r\n            <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n              <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n            </div>           \r\n          </ion-item>\r\n        </ion-list>\r\n         <!-- --------------- bookmark ends here------------ -->\r\n        <!-- -------  Description for  I-M-A-G-E  post with  post type = 1-->\r\n        <div *ngIf=\"post?.post_type==1\">\r\n          <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n          </p>\r\n          <p\r\n            *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n            <span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n            <span (click)=\"expanded = post.id\"\r\n              class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n          <p *ngIf=\"expanded ==  post.id \"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n            <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n        </div>\r\n        <!-- ------- ends here   post type = 1-->\r\n      </div>\r\n    </ion-card-content>  \r\n  </span>\r\n  </ion-card>\r\n  \r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>  \r\n</div>\r\n<div *ngIf=\"!gotData\">\r\n  <ion-card class=\"video-card\">\r\n    <ion-card-header class=\"card-head upcoming-block\">\r\n      <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <div class=\"video-content\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"video-card\">\r\n    <ion-card-header class=\"card-head upcoming-block\">\r\n      <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <div class=\"video-content\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>  \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"ion-no-margin upcomingCard\" *ngFor=\"let upcoming of upcomingList; let i=index;\">\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"{{url}}{{upcoming?.img_arr[0]}}\" *ngIf=\"upcomingList[i]?.image_path\">\r\n      <!-- <img src=\"{{profile_url}}{{upcoming?.program_user?.bios?.profile_pic}}\" *ngIf=\"upcoming?.program_user?.bios?.profile_pic\"> -->\r\n      <img  src=\"../../assets/images/loading.jpg\" *ngIf=\"!upcomingList[i]?.image_path\">\r\n    </ion-avatar>\r\n    <ion-label [routerLink]=\"userData?.id ==upcoming?.user_id ? ['/program-details/',upcoming.id] : ['/program-view/',upcoming.id]\">\r\n      <h3 class=\"list-person\">{{upcoming?.title}}</h3>\r\n      <span class=\"list-name d-block\">{{upcoming?.type_id}}</span>\r\n      <span class=\"list-name d-block\">By:{{upcoming?.program_user?.user_name}} {{upcoming?.convertedTime | date:'medium'}}</span>\r\n      <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\">Countdown: <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span>\r\n      <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd==0\"> <b> L I V E</b></span>\r\n      <!-- <countdown [config]=\"{leftTime: 30}\"></countdown> -->\r\n    </ion-label>\r\n    <div class=\"action-links\" slot=\"end\" *ngIf=\"upcoming?.nutrition_id\">\r\n      <ion-icon (click)=\"nutritionModal(upcoming)\" ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n</ion-card>\r\n<!--------------- S K E L E T O N ------------>\r\n<ion-list lines=\"none\" *ngIf=\"!upcomingList\">      \r\n  <ion-item *ngFor=\"let skeleton of [].constructor(20)\" class=\"item-card\">\r\n    <ion-avatar slot=\"start\">\r\n      <ion-skeleton-text></ion-skeleton-text>\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3 class=\"list-person\"><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n      <span class=\"list-name\"><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></span>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n<!---------------E n d s  S K E L E T O N ------------>\r\n<div class=\"no-data\" *ngIf=\"noData\" style=\"height: calc(100vh - 175px)\">\r\n  <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n  <p>No upcoming program for next 24 Hrs.</p>\r\n</div>");

/***/ }),

/***/ "./src/app/music/audio-player/audio-player.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/music/audio-player/audio-player.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0; }\n\n.list-head span {\n  display: block;\n  font-size: 0.70rem;\n  color: #000;\n  margin-top: 3px; }\n\n.text-white {\n  color: #FFF; }\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 50px; }\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px; }\n\n.audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0; }\n\n.audio-list > div {\n  display: flex; }\n\n.audio-list > * {\n  display: inline-block; }\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px; }\n\nion-range ion-label {\n  margin-right: 50px; }\n\nion-fab-button {\n  min-width: 40px; }\n\nion-fab-button + div {\n  width: 100%; }\n\nion-fab-button + div > div {\n  display: flex;\n  margin-top: 12px; }\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 35px; }\n\n.music-spinner {\n  --color: #26a69a; }\n\n.music-name {\n  padding-left: 50px;\n  margin-top: 0 !important; }\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 32px;\n  display: flex; }\n\n.music-timer-fav ion-icon {\n  margin: 0 5px; }\n\n.musicbar {\n  padding-right: 50px; }\n\n.musiclistFooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.musicWrapper ion-toolbar .audio-listInner {\n    display: block;\n    background: #26a69a;\n    height: 56px;\n    margin-top: 10px; }\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n      position: absolute;\n      width: 90%;\n      top: 2px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n      margin-top: 20px;\n      margin-left: 10px;\n      padding-left: 50px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n        color: #FFF; }\n\n.no-data {\n  height: calc(100vh - 250px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvYXVkaW8tcGxheWVyL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxtdXNpY1xcYXVkaW8tcGxheWVyXFxhdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBVyxnQkFBZ0I7RUFBQyxtQkFBbUI7RUFBQyxTQUFTLEVBQUE7O0FBQ3pEO0VBQWdCLGNBQWM7RUFBQyxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsZUFBZSxFQUFBOztBQUM3RTtFQUFZLFdBQVcsRUFBQTs7QUFDdkI7RUFBeUIsa0JBQWtCO0VBQUMsWUFBWSxFQUFBOztBQUN4RDtFQUE2QixZQUFZLEVBQUE7O0FBQ3pDO0VBQVksVUFBVTtFQUFDLGdCQUFjO0VBQUcsbUJBQWlCLEVBQUE7O0FBQ3pEO0VBQWdCLGFBQWEsRUFBQTs7QUFDN0I7RUFBYyxxQkFBcUIsRUFBQTs7QUFDbkM7RUFBVSxpQkFBWTtFQUFNLGFBQVMsRUFBQTs7QUFDckM7RUFBb0Isa0JBQWtCLEVBQUE7O0FBQ3RDO0VBQWUsZUFBZSxFQUFBOztBQUM5QjtFQUFtQixXQUFXLEVBQUE7O0FBQzlCO0VBQXVCLGFBQWE7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDckQ7RUFBa0MsV0FBVztFQUFDLGlCQUFpQixFQUFBOztBQUMvRDtFQUFlLGdCQUFRLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLHdCQUNKLEVBQUE7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFBQyxhQUFhLEVBQUE7O0FBRTNCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUFpQixlQUFlO0VBQUMsU0FBUztFQUFDLFdBQVcsRUFBQTs7QUFDdEQ7RUFDZ0Isa0JBQWdCO0VBQUcsZ0JBQWMsRUFBQTs7QUFEakQ7SUFFeUIsY0FBYztJQUFDLG1CQUFtQjtJQUFDLFlBQVk7SUFBQyxnQkFBZ0IsRUFBQTs7QUFGekY7TUFJMEIsa0JBQWtCO01BQUMsVUFBVTtNQUFDLFFBQVEsRUFBQTs7QUFKaEU7TUFNd0IsZ0JBQWdCO01BQUMsaUJBQWlCO01BQUMsa0JBQWtCLEVBQUE7O0FBTjdFO1FBTzBCLFdBQVcsRUFBQTs7QUFLckM7RUFBUyxzQ0FBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL211c2ljL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG4ubGlzdC1oZWFke2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjg3NXJlbTttYXJnaW46IDA7fVxyXG4ubGlzdC1oZWFkIHNwYW57ZGlzcGxheTogYmxvY2s7Zm9udC1zaXplOiAwLjcwcmVtO2NvbG9yOiAjMDAwO21hcmdpbi10b3A6IDNweDt9XHJcbi50ZXh0LXdoaXRle2NvbG9yOiAjRkZGO31cclxuLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDUwcHg7fVxyXG4uaW9zLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e2JvdHRvbTogNDhweDt9XHJcbi5hdWRpby1saXN0e3BhZGRpbmc6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO31cclxuLmF1ZGlvLWxpc3Q+ZGl2e2Rpc3BsYXk6IGZsZXg7fVxyXG4uYXVkaW8tbGlzdD4qe2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbmlvbi1yYW5nZXstLWtub2Itc2l6ZTogMThweDstLWhlaWdodDogMnB4O31cclxuaW9uLXJhbmdlIGlvbi1sYWJlbHttYXJnaW4tcmlnaHQ6IDUwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbnttaW4td2lkdGg6IDQwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXZ7d2lkdGg6IDEwMCU7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXY+ZGl2e2Rpc3BsYXk6IGZsZXg7bWFyZ2luLXRvcDogMTJweDt9XHJcbmlvbi1mYWItYnV0dG9uK2Rpdj5kaXYgK2lvbi1sYWJlbHtjb2xvcjogI0ZGRjttYXJnaW4tbGVmdDogMzVweDt9XHJcbi5tdXNpYy1zcGlubmVyey0tY29sb3I6ICMyNmE2OWE7fVxyXG5cclxuLm11c2ljLW5hbWUgeyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnRcclxufVxyXG4ubXVzaWMtdGltZXItZmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAzMnB4O2Rpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm11c2ljLXRpbWVyLWZhdiBpb24taWNvbiB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5tdXNpY2JhciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubXVzaWNsaXN0Rm9vdGVye3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDA7d2lkdGg6IDEwMCV9XHJcbi5tdXNpY1dyYXBwZXJ7XHJcbiAgICBpb24tdG9vbGJhcnstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAuYXVkaW8tbGlzdElubmVye2Rpc3BsYXk6IGJsb2NrO2JhY2tncm91bmQ6ICMyNmE2OWE7aGVpZ2h0OiA1NnB4O21hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5tdXNpY2JhcntcclxuICAgICAgICAgICAgICAgIGlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDkwJTt0b3A6IDJweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm11c2ljLW5hbWV7bWFyZ2luLXRvcDogMjBweDttYXJnaW4tbGVmdDogMTBweDtwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7Y29sb3I6ICNGRkY7fVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KSAhaW1wb3J0YW50O30iXX0= */");

/***/ }),

/***/ "./src/app/music/audio-player/audio-player.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/music/audio-player/audio-player.component.ts ***!
  \**************************************************************/
/*! exports provided: AudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return AudioPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _playlist_dropdown_playlist_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playlist-dropdown/playlist-dropdown.component */ "./src/app/music/playlist-dropdown/playlist-dropdown.component.ts");
/* harmony import */ var src_app_services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");






let AudioPlayerComponent = class AudioPlayerComponent {
    constructor(musicService, popoverController) {
        this.musicService = musicService;
        this.popoverController = popoverController;
        this.selectedAudio = [];
        this.isPlaying = false;
        this.isLoading = false;
        this.currentTime = 0;
        this.baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].musicPath;
        this.srcPath = 'into_20190423_095653_audio.mp3';
        this.drag = false;
    }
    selectPlaylist(mid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _playlist_dropdown_playlist_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistDropdownComponent"],
                translucent: false,
                cssClass: 'dropdown-menu',
                componentProps: { 'playList': this.playList, 'mid': mid }
            });
            return yield popover.present();
        });
    }
    ngOnInit() {
        this.musicService.getPlaylist().subscribe((data) => {
            this.playList = data.status;
        });
    }
    ngAfterViewInit() {
        this._player = this.playerElementRef.nativeElement;
        this._bindPlayerEvents();
    }
    playThis(item) {
        this._player.autoplay = true;
        this.musicSelect = item;
        this.srcPath = item.filename;
        this.play(item);
    }
    play(src) {
        if (src) {
            this.musicSelect = src;
        }
        else {
            this.musicSelect = this.songList[0];
            this.srcPath = this.songList[0].filename;
        }
        this.isPlaying = true;
        this._player.play();
    }
    pause(src) {
        this.isPlaying = false;
        this._player.pause();
    }
    seek({ detail: { value } }) {
        if (this.drag) {
            this._player.currentTime = value;
        }
    }
    onDrag() {
        this.drag = true;
        setTimeout(() => {
            this.drag = false;
        }, 300);
    }
    _bindPlayerEvents() {
        this._player.addEventListener('playing', () => {
            this.isPlaying = true;
        });
        this._player.addEventListener('pause', () => {
            this.isPlaying = false;
        });
        this._player.addEventListener('timeupdate', () => {
            this.currentTime = Math.floor(this._player.currentTime);
        });
        this._player.addEventListener('seeking', () => {
            this.isLoading = true;
        });
        this._player.addEventListener('seeked', () => {
            this.isLoading = false;
        });
        this._player.addEventListener('loadstart', () => {
            this.isLoading = true;
        });
        this._player.addEventListener('loadeddata', () => {
            this.isLoading = false;
            let dur = Math.floor(this._player.duration);
            this.duration = Math.floor((dur / 60)) + ":" + (dur % 60);
            console.log("dfsa");
            console.log(this.duration);
        });
    }
};
AudioPlayerComponent.ctorParameters = () => [
    { type: src_app_services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AudioPlayerComponent.prototype, "playerElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AudioPlayerComponent.prototype, "songList", void 0);
AudioPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/audio-player/audio-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio-player.component.scss */ "./src/app/music/audio-player/audio-player.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], AudioPlayerComponent);



/***/ }),

/***/ "./src/app/nutrition/expandable/expandable.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/nutrition/expandable/expandable.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto; }\n\n.collapsed {\n  max-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uL2V4cGFuZGFibGUvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG51dHJpdGlvblxcZXhwYW5kYWJsZVxcZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9udXRyaXRpb24vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/nutrition/expandable/expandable.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/nutrition/expandable/expandable.component.ts ***!
  \**************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpandableComponent = class ExpandableComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ngOnInit() {
        console.log('dsfs');
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
ExpandableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ExpandableComponent.prototype, "expandWrapper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ExpandableComponent.prototype, "expanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ExpandableComponent.prototype, "expandHeight", void 0);
ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/expandable/expandable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expandable.component.scss */ "./src/app/nutrition/expandable/expandable.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], ExpandableComponent);



/***/ }),

/***/ "./src/app/profile/components.modules.ts":
/*!***********************************************!*\
  !*** ./src/app/profile/components.modules.ts ***!
  \***********************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _my_profile_post_tab_post_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile/post-tab/post-tab.component */ "./src/app/profile/my-profile/post-tab/post-tab.component.ts");
/* harmony import */ var _my_profile_upcoming_tab_upcoming_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-profile/upcoming-tab/upcoming-tab.component */ "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.ts");
/* harmony import */ var _nutrition_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nutrition/expandable/expandable.component */ "./src/app/nutrition/expandable/expandable.component.ts");
/* harmony import */ var _music_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../music/audio-player/audio-player.component */ "./src/app/music/audio-player/audio-player.component.ts");









// import {AudioPlayerComponent} from '../audio-player/audio-player.component';

let ComponentModule = class ComponentModule {
};
ComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        declarations: [_my_profile_post_tab_post_tab_component__WEBPACK_IMPORTED_MODULE_6__["PostTabComponent"], _my_profile_upcoming_tab_upcoming_tab_component__WEBPACK_IMPORTED_MODULE_7__["UpcomingTabComponent"], _music_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_9__["AudioPlayerComponent"], _nutrition_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__["ExpandableComponent"]],
        exports: [_my_profile_post_tab_post_tab_component__WEBPACK_IMPORTED_MODULE_6__["PostTabComponent"], _my_profile_upcoming_tab_upcoming_tab_component__WEBPACK_IMPORTED_MODULE_7__["UpcomingTabComponent"], _music_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_9__["AudioPlayerComponent"], _nutrition_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__["ExpandableComponent"]],
        entryComponents: [],
    })
], ComponentModule);



/***/ }),

/***/ "./src/app/profile/my-profile/my-profile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/profile/my-profile/my-profile.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-list {\n  padding: 0.001em;\n  margin: 10px 0.001em; }\n\n.top-list ion-item {\n  --min-height: 65px;\n  background: #FFF;\n  box-shadow: 0px 0px 15px rgba(34, 35, 58, 0.09); }\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem; }\n\n.top-list ion-item ion-label {\n  margin-left: 5px;\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0;\n  font-size: 0.625rem; }\n\nion-item-divider {\n  padding-left: 0;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border: none;\n  --border: none; }\n\nion-item-divider + ion-item-divider {\n  top: 52px; }\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 0.625rem; }\n\nion-item.item-card {\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --border-radius: 4px; }\n\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 22px);\n  --padding-bottom: var(--ion-padding, 164px);\n  padding-top: var(--ion-padding, 4px);\n  padding-bottom: var(--ion-padding, 27px); }\n\n.newPostCard ion-card-content {\n  padding-top: 12px; }\n\nion-item-divider ion-segment.profile_tabs.subprofile_tabs .segment-button-checked {\n  background: #27a69a;\n  --indicator-color-checked: #27a69a;\n  color: #FFF;\n  --border-width: 0; }\n\n.photoNodata {\n  height: 70px;\n  background: #f7f7f7; }\n\n.top-header {\n  position: relative; }\n\n.main_content {\n  top: 0; }\n\n.userDisplayName {\n  margin-left: 115px; }\n\n.top-list ion-item {\n  width: 33.33% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFxteS1wcm9maWxlXFxteS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLGdCQUFnQjtFQUFDLG9CQUFvQixFQUFBOztBQUMvQztFQUFtQixrQkFBYTtFQUFNLGdCQUFnQjtFQUFDLCtDQUErQyxFQUFBOztBQUN0RztFQUFVLFdBQVc7RUFBQyxZQUFZO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLFVBQVU7RUFBQyxTQUFTO0VBQUMsMkJBQTJCLEVBQUE7O0FBQ3ZNO0VBQW9CLGNBQWM7RUFBQyxrQkFBa0IsRUFBQTs7QUFDckQ7RUFBNkIsZ0JBQWdCO0VBQUMsY0FBYztFQUFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxTQUFTO0VBQUMsMkJBQTJCO0VBQUMsY0FBYztFQUFDLG1CQUFtQixFQUFBOztBQUVwSztFQUFpQixlQUFlO0VBQUMsa0JBQWdCO0VBQUcsc0JBQW9CO0VBQUcsWUFBWTtFQUFDLGNBQVMsRUFBQTs7QUFDakc7RUFBa0MsU0FBUyxFQUFBOztBQUUzQztFQUErQiwwQkFBMEI7RUFBQyxnQkFBZ0I7RUFBQyxtQkFBbUIsRUFBQTs7QUFDOUY7RUFBbUIsa0JBQWtCO0VBQUMsa0JBQWtCO0VBQUMsb0JBQWdCLEVBQUE7O0FBQ3pFO0VBQ0ksdUNBQWM7RUFDbEIsMkNBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyx3Q0FBd0MsRUFBQTs7QUFFeEM7RUFDcUIsaUJBQWlCLEVBQUE7O0FBR3RDO0VBRStCLG1CQUFtQjtFQUFDLGtDQUEwQjtFQUFTLFdBQVc7RUFBQyxpQkFBZSxFQUFBOztBQUdqSDtFQUFhLFlBQVk7RUFBQyxtQkFBbUIsRUFBQTs7QUFFN0M7RUFBWSxrQkFBa0IsRUFBQTs7QUFDOUI7RUFBYyxNQUFNLEVBQUE7O0FBQ3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0Msd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWxpc3R7cGFkZGluZzogMC4wMDFlbTttYXJnaW46IDEwcHggMC4wMDFlbTt9XHJcbi50b3AtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IDY1cHg7YmFja2dyb3VuZDogI0ZGRjtib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTt9XHJcbi50b3AtaWNvbnt3aWR0aDogNDBweDtoZWlnaHQ6IDQwcHg7YmFja2dyb3VuZDogI2U5ZjZmNTtib3JkZXItcmFkaXVzOiA1MCU7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0xMnB4O2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7fVxyXG4udG9wLWljb24gaW9uLWljb24ge2NvbG9yOiAjMjdhNjlhO2ZvbnQtc2l6ZTogMS4yNXJlbTt9XHJcbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luLWxlZnQ6IDVweDtwYWRkaW5nLXRvcDogMDtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA4cHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTttYXJnaW4tbGVmdDogMDtmb250LXNpemU6IDAuNjI1cmVtO31cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXJ7cGFkZGluZy1sZWZ0OiAwOy0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwO2JvcmRlcjogbm9uZTstLWJvcmRlcjogbm9uZTt9XHJcbmlvbi1pdGVtLWRpdmlkZXIraW9uLWl0ZW0tZGl2aWRlcnt0b3A6IDUycHg7fVxyXG5cclxuLnByb2ZpbGVfdGFicyBpb24tc2VnbWVudCBzcGFue3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjYyNXJlbTt9XHJcbmlvbi1pdGVtLml0ZW0tY2FyZHttYXJnaW4tYm90dG9tOiA1cHg7Ym9yZGVyLXJhZGl1czogNHB4Oy0tYm9yZGVyLXJhZGl1czogNHB4O31cclxuLmlvbi1wYWRkaW5nLXZlcnRpY2Fse1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDIycHgpO1xyXG4tLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTY0cHgpO1xyXG5wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDRweCk7XHJcbnBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMjdweCk7XHJcbn1cclxuLm5ld1Bvc3RDYXJke1xyXG4gICAgaW9uLWNhcmQtY29udGVudHtwYWRkaW5nLXRvcDogMTJweDt9XHJcbn1cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXJ7XHJcbiAgICBpb24tc2VnbWVudC5wcm9maWxlX3RhYnMuc3VicHJvZmlsZV90YWJze1xyXG4gICAgICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7YmFja2dyb3VuZDogIzI3YTY5YTstLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjMjdhNjlhO2NvbG9yOiAjRkZGOy0tYm9yZGVyLXdpZHRoOiAwO31cclxuICAgIH1cclxufVxyXG4ucGhvdG9Ob2RhdGF7aGVpZ2h0OiA3MHB4O2JhY2tncm91bmQ6ICNmN2Y3Zjc7fVxyXG4vLyAuaG9tZVJlZnJlc2hlcntwb3NpdGlvbjogZml4ZWQ7ei1pbmRleDogOTk5O2hlaWdodDogMTAwJTt9XHJcbi50b3AtaGVhZGVye3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5tYWluX2NvbnRlbnR7dG9wOiAwO31cclxuLnVzZXJEaXNwbGF5TmFtZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTVweDtcclxufVxyXG4udG9wLWxpc3QgaW9uLWl0ZW17XHJcbiB3aWR0aDogMzMuMzMlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/my-profile/post-tab/post-tab.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/profile/my-profile/post-tab/post-tab.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-refresher {\n  top: -110px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3Bvc3QtdGFiL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFxteS1wcm9maWxlXFxwb3N0LXRhYlxccG9zdC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3Bvc3QtdGFiL3Bvc3QtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBvbmVudC1yZWZyZXNoZXJ7dG9wOiAtMTEwcHg7fSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/my-profile/post-tab/post-tab.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/profile/my-profile/post-tab/post-tab.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTabComponent", function() { return PostTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../popover/popover.component */ "./src/app/profile/popover/popover.component.ts");










let PostTabComponent = class PostTabComponent {
    // Constructor
    constructor(peopleService, actRoute, commonService, modalController, popoverController) {
        this.peopleService = peopleService;
        this.actRoute = actRoute;
        this.commonService = commonService;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.currentPage = 0;
        this.gotData = false;
        this.expanded = 0;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].imgUrl;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].profilePic;
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        //  console.log(el);
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            if (params.get('userData')) {
                this.consultID = params.get('userData');
            }
            else {
                this.consultID = '';
            }
        });
        this.postData();
        this.commonService.footerTabHooks.subscribe(data => {
            if (data) {
                this.myPosts = null;
                this.gotData = false;
                this.postData();
            }
        });
    }
    postRefresh(event) {
        this.postData();
        event.target.complete();
    }
    /**
     * get post according userid
     */
    postData() {
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        this.peopleService.getMyPost('1,8', this.userData.userData.id, 1).subscribe((data) => {
            this.myPosts = data.posts.data;
            this.myPosts.forEach((element, i) => {
                this.myPosts[i].count = element.post_likes.length;
                element.post_likes.filter((f) => {
                    if (f.user_id == this.loginUserData.id) {
                        this.myPosts[i].liked = true;
                    }
                });
                element.post_bookmarks.filter((f) => {
                    if (f.user_id == this.loginUserData.id) {
                        this.myPosts[i].bookmarked = true;
                    }
                });
            });
            this.last_page = data.posts.last_page;
            this.currentPage = data.posts.current_page;
            this.gotData = true;
        });
    }
    // ------------ laod data event ----------
    /**
     *laod data event according userid
     */
    loadData(event) {
        setTimeout(() => {
            if (this.currentPage > 0) {
                this.peopleService.getMyPost('1,8', this.consultID, (this.currentPage + 1)).subscribe((data) => {
                    //  console.log(data);
                    data.posts.data.forEach((element, i) => {
                        element.count = element.post_likes.length;
                        element.post_likes.filter((f) => {
                            // console.log(f);
                            if (f.user_id == this.loginUserData.id) {
                                data.posts.data[i].liked = true;
                            }
                        });
                        element.post_bookmarks.filter((f) => {
                            if (f.user_id == this.loginUserData.id) {
                                this.myPosts[i].bookmarked = true;
                            }
                        });
                    });
                    this.myPosts = this.myPosts.concat(data.posts.data);
                    this.last_page = data.posts.last_page;
                    this.currentPage = data.posts.current_page;
                    //  console.log(this.myPosts);
                });
            }
            event.target.complete();
            if (this.last_page <= (this.currentPage + 1)) {
                event.target.disabled = true;
            }
        }, 500);
    }
    /**
    * Liked unliked funcitonality
    */
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
        this.peopleService.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
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
        this.myPosts.forEach((element, i) => {
            if (element.id == postId) {
                this.myPosts[i].bookmarked = !bmStat;
            }
        });
        //console.log(postId, bmStat);
        this.peopleService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(this.url + path);
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModalComponent"],
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
    showOptions(ev, commentStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //    this.commonService.showPopover( PopoverComponent, 'custom-popover',{'postId':ev , 'commentStatus':commentStatus});
            const popover = yield this.popoverController.create({
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"],
                translucent: true,
                cssClass: 'custom-popover',
                componentProps: { 'postId': ev, 'commentStatus': commentStatus }
            });
            popover.onDidDismiss().then((data) => {
                console.log(commentStatus);
                if (data.data.click == 1) {
                    console.log(this.myPosts);
                    this.myPosts.forEach((f, i) => {
                        if (f.id == ev) {
                            this.myPosts[i].is_delete = 1;
                        }
                    });
                }
                else if (data.data.click == 2) {
                    console.log(this.myPosts);
                    this.myPosts.forEach((f, i) => {
                        if (f.id == ev) {
                            console.log('iv');
                            if (commentStatus == 0) {
                                this.myPosts[i].disable_comment = true;
                            }
                            else {
                                this.myPosts[i].disable_comment = !commentStatus;
                            }
                        }
                    });
                    console.log(this.myPosts);
                }
            });
            // console.log(ev);
            return yield popover.present();
        });
    }
};
PostTabComponent.ctorParameters = () => [
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
], PostTabComponent.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PostTabComponent.prototype, "userData", void 0);
PostTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-tab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/post-tab/post-tab.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-tab.component.scss */ "./src/app/profile/my-profile/post-tab/post-tab.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
], PostTabComponent);



/***/ }),

/***/ "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upcomingCard {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 5px solid #f7f7f7; }\n  .upcomingCard ion-avatar {\n    width: 65px;\n    height: 65px; }\n  .upcomingCard ion-label {\n    line-height: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3VwY29taW5nLXRhYi9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcbXktcHJvZmlsZVxcdXBjb21pbmctdGFiXFx1cGNvbWluZy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxnQkFBZ0I7RUFBQyxnQkFBZ0I7RUFBQyxnQ0FBZ0MsRUFBQTtFQUFoRjtJQUNlLFdBQVc7SUFBQyxZQUFZLEVBQUE7RUFEdkM7SUFFYyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbXktcHJvZmlsZS91cGNvbWluZy10YWIvdXBjb21pbmctdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwY29taW5nQ2FyZHtib3JkZXItcmFkaXVzOiAwO2JveC1zaGFkb3c6IG5vbmU7Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICBpb24tYXZhdGFye3dpZHRoOiA2NXB4O2hlaWdodDogNjVweDt9XHJcbiAgICBpb24tbGFiZWx7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpcomingTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingTabComponent", function() { return UpcomingTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let UpcomingTabComponent = class UpcomingTabComponent {
    constructor(commonService, actRoute, programService) {
        this.commonService = commonService;
        this.actRoute = actRoute;
        this.programService = programService;
        this.profile_url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
        this.actRoute.paramMap.subscribe((params) => {
            if (params.get('userData')) {
                this.consultID = params.get('userData');
            }
            console.log("this.consultID" + this.consultID);
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        console.log("this.userData :" + this.userData);
    }
    ngOnInit() {
        // console.log('ngonit');
        if (this.consultID) {
            this.getConsultProg(this.consultID);
        }
        else {
            this.getMyprog();
        }
    }
    nutritionModal(data) {
        this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__["NutritionModalComponent"], 'fullModal', { 'data': data });
    }
    getMyprog() {
        this.programService.getUpcomingPrograms(null).subscribe(data => {
            if (data.programList.length < 1) {
                this.noData = true;
            }
            this.upcomingList = this.getCounter(data.programList);
            this.upcomingList = data.programList.filter(el => {
                if (el.image_path) {
                    el.img_arr = el.image_path.split(',');
                }
                el.converted = new Date(el.program_date + 'Z');
                el.expanded = false;
                return el;
            });
        });
    }
    getConsultProg(id) {
        this.programService.getConsultPrograms({ 'consultId': id }).subscribe(data => {
            if (data.data.length < 1) {
                this.noData = true;
            }
            this.upcomingList = this.getCounter(data.data);
            this.upcomingList = data.data.filter(el => {
                if (el.image_path) {
                    el.img_arr = el.image_path.split(',');
                }
                el.converted = new Date(el.program_date + 'Z');
                el.expanded = false;
                return el;
            });
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
};
UpcomingTabComponent.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"] }
];
UpcomingTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upcoming-tab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upcoming-tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upcoming-tab.component.scss */ "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../my-profile.page.scss */ "./src/app/profile/my-profile/my-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"]])
], UpcomingTabComponent);



/***/ })

}]);
//# sourceMappingURL=default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5-es2015.js.map