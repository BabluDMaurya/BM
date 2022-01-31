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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"ion-no-margin upcomingCard\" *ngFor=\"let upcoming of upcomingList; let i=index;\">\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"{{url}}{{upcoming?.img_arr[0]}}\" *ngIf=\"upcomingList[i]?.image_path\">\r\n      <!-- <img src=\"{{profile_url}}{{upcoming?.program_user?.bios?.profile_pic}}\" *ngIf=\"upcoming?.program_user?.bios?.profile_pic\"> -->\r\n      <img  src=\"../../assets/images/loading.jpg\" *ngIf=\"!upcomingList[i]?.image_path\">\r\n    </ion-avatar>\r\n    <ion-label [routerLink]=\"userData?.id ==upcoming?.user_id ? ['/program-details/',upcoming.id] : ['/program-view/',upcoming.id]\">\r\n      <h3 class=\"list-person\">{{upcoming?.title}}</h3>\r\n      <span class=\"list-name d-block\">{{upcoming?.type_id}}</span>\r\n      <span class=\"list-name d-block\">By:{{upcoming?.program_user?.user_name}} {{upcoming?.convertedTime | date:'medium'}}</span>\r\n      <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\"> <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span>\r\n      <!-- <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\">Countdown: <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span> -->\r\n      <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd==0\"> <b> L I V E</b></span>\r\n      <!-- <countdown [config]=\"{leftTime: 30}\"></countdown> -->\r\n    </ion-label>\r\n    <div class=\"action-links\" slot=\"end\" *ngIf=\"upcoming?.nutrition_id\">\r\n      <ion-icon (click)=\"nutritionModal(upcoming)\" ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n</ion-card>\r\n<!--------------- S K E L E T O N ------------>\r\n<ion-list lines=\"none\" *ngIf=\"!upcomingList\">      \r\n  <ion-item *ngFor=\"let skeleton of [].constructor(20)\" class=\"item-card\">\r\n    <ion-avatar slot=\"start\">\r\n      <ion-skeleton-text></ion-skeleton-text>\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3 class=\"list-person\"><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n      <span class=\"list-name\"><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></span>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n<!---------------E n d s  S K E L E T O N ------------>\r\n<div class=\"no-data\" *ngIf=\"noData\" style=\"height: calc(100vh - 175px)\">\r\n  <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n  <p>No upcoming program for next 24 Hrs.</p>\r\n</div>");

/***/ }),

/***/ "./src/app/music/audio-player/audio-player.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/music/audio-player/audio-player.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0; }\n\n.list-head span {\n  display: block;\n  font-size: 0.70rem;\n  color: #000;\n  margin-top: 3px; }\n\n.text-white {\n  color: #FFF; }\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 50px; }\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px; }\n\n.audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0; }\n\n.audio-list > div {\n  display: flex; }\n\n.audio-list > * {\n  display: inline-block; }\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px; }\n\nion-range ion-label {\n  margin-right: 50px; }\n\nion-fab-button {\n  min-width: 40px; }\n\nion-fab-button + div {\n  width: 100%; }\n\nion-fab-button + div > div {\n  display: flex;\n  margin-top: 12px; }\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 35px; }\n\n.music-spinner {\n  --color: #26a69a; }\n\n.music-name {\n  padding-left: 50px;\n  margin-top: 0 !important; }\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 32px;\n  display: flex; }\n\n.music-timer-fav ion-icon {\n  margin: 0 5px; }\n\n.musicbar {\n  padding-right: 50px; }\n\n.musiclistFooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.musicWrapper ion-toolbar .audio-listInner {\n    display: block;\n    background: #26a69a;\n    height: 56px;\n    margin-top: 10px; }\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n      position: absolute;\n      width: 90%;\n      top: 2px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n      margin-top: 20px;\n      margin-left: 10px;\n      padding-left: 50px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n        color: #FFF; }\n\n.no-data {\n  height: calc(100vh - 250px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvYXVkaW8tcGxheWVyL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcbXVzaWNcXGF1ZGlvLXBsYXllclxcYXVkaW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVcsZ0JBQWdCO0VBQUMsbUJBQW1CO0VBQUMsU0FBUyxFQUFBOztBQUN6RDtFQUFnQixjQUFjO0VBQUMsa0JBQWtCO0VBQUMsV0FBVztFQUFDLGVBQWUsRUFBQTs7QUFDN0U7RUFBWSxXQUFXLEVBQUE7O0FBQ3ZCO0VBQXlCLGtCQUFrQjtFQUFDLFlBQVksRUFBQTs7QUFDeEQ7RUFBNkIsWUFBWSxFQUFBOztBQUN6QztFQUFZLFVBQVU7RUFBQyxnQkFBYztFQUFHLG1CQUFpQixFQUFBOztBQUN6RDtFQUFnQixhQUFhLEVBQUE7O0FBQzdCO0VBQWMscUJBQXFCLEVBQUE7O0FBQ25DO0VBQVUsaUJBQVk7RUFBTSxhQUFTLEVBQUE7O0FBQ3JDO0VBQW9CLGtCQUFrQixFQUFBOztBQUN0QztFQUFlLGVBQWUsRUFBQTs7QUFDOUI7RUFBbUIsV0FBVyxFQUFBOztBQUM5QjtFQUF1QixhQUFhO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3JEO0VBQWtDLFdBQVc7RUFBQyxpQkFBaUIsRUFBQTs7QUFDL0Q7RUFBZSxnQkFBUSxFQUFBOztBQUV2QjtFQUNJLGtCQUFrQjtFQUNsQix3QkFDSixFQUFBOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQUMsYUFBYSxFQUFBOztBQUUzQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFBaUIsZUFBZTtFQUFDLFNBQVM7RUFBQyxXQUFXLEVBQUE7O0FBQ3REO0VBQ2dCLGtCQUFnQjtFQUFHLGdCQUFjLEVBQUE7O0FBRGpEO0lBRXlCLGNBQWM7SUFBQyxtQkFBbUI7SUFBQyxZQUFZO0lBQUMsZ0JBQWdCLEVBQUE7O0FBRnpGO01BSTBCLGtCQUFrQjtNQUFDLFVBQVU7TUFBQyxRQUFRLEVBQUE7O0FBSmhFO01BTXdCLGdCQUFnQjtNQUFDLGlCQUFpQjtNQUFDLGtCQUFrQixFQUFBOztBQU43RTtRQU8wQixXQUFXLEVBQUE7O0FBS3JDO0VBQVMsc0NBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy9hdWRpby1wbGF5ZXIvYXVkaW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuLmxpc3QtaGVhZHtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMC44NzVyZW07bWFyZ2luOiAwO31cclxuLmxpc3QtaGVhZCBzcGFue2Rpc3BsYXk6IGJsb2NrO2ZvbnQtc2l6ZTogMC43MHJlbTtjb2xvcjogIzAwMDttYXJnaW4tdG9wOiAzcHg7fVxyXG4udGV4dC13aGl0ZXtjb2xvcjogI0ZGRjt9XHJcbi5zdGlja3ktZm9vdGVyLm11c2ljbGlzdHtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA1MHB4O31cclxuLmlvcy5zdGlja3ktZm9vdGVyLm11c2ljbGlzdHtib3R0b206IDQ4cHg7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwOy0tcGFkZGluZy10b3A6IDA7LS1wYWRkaW5nLWJvdHRvbTogMDt9XHJcbi5hdWRpby1saXN0PmRpdntkaXNwbGF5OiBmbGV4O31cclxuLmF1ZGlvLWxpc3Q+KntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG5pb24tcmFuZ2V7LS1rbm9iLXNpemU6IDE4cHg7LS1oZWlnaHQ6IDJweDt9XHJcbmlvbi1yYW5nZSBpb24tbGFiZWx7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuaW9uLWZhYi1idXR0b257bWluLXdpZHRoOiA0MHB4O31cclxuaW9uLWZhYi1idXR0b24rZGl2e3dpZHRoOiAxMDAlO31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdntkaXNwbGF5OiBmbGV4O21hcmdpbi10b3A6IDEycHg7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXY+ZGl2ICtpb24tbGFiZWx7Y29sb3I6ICNGRkY7bWFyZ2luLWxlZnQ6IDM1cHg7fVxyXG4ubXVzaWMtc3Bpbm5lcnstLWNvbG9yOiAjMjZhNjlhO31cclxuXHJcbi5tdXNpYy1uYW1lIHsgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50XHJcbn1cclxuLm11c2ljLXRpbWVyLWZhdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMzJweDtkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tdXNpYy10aW1lci1mYXYgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ubXVzaWNiYXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLm11c2ljbGlzdEZvb3Rlcntwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwO3dpZHRoOiAxMDAlfVxyXG4ubXVzaWNXcmFwcGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLmF1ZGlvLWxpc3RJbm5lcntkaXNwbGF5OiBibG9jaztiYWNrZ3JvdW5kOiAjMjZhNjlhO2hlaWdodDogNTZweDttYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAubXVzaWNiYXJ7XHJcbiAgICAgICAgICAgICAgICBpb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA5MCU7dG9wOiAycHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tdXNpYy1uYW1le21hcmdpbi10b3A6IDIwcHg7bWFyZ2luLWxlZnQ6IDEwcHg7cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse2NvbG9yOiAjRkZGO31cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubm8tZGF0YXtoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCkgIWltcG9ydGFudDt9Il19 */");

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
        console.log(this._player.currentTime);
        console.log(value);
        // this._player.currentTime = this._player.currentTime;
        // console.log(this.drag)
        this.dragVal = value;
        if (this.drag) {
            this._player.currentTime = this.dragVal;
        }
    }
    onDrag() {
        this.drag = true;
        if (this.drag) {
            this._player.currentTime = this.dragVal;
        }
        setTimeout(() => {
            this.drag = false;
        }, 2500);
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
            // console.log(this._player.currentTime);
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
/* harmony default export */ __webpack_exports__["default"] = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto; }\n\n.collapsed {\n  max-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uL2V4cGFuZGFibGUvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxudXRyaXRpb25cXGV4cGFuZGFibGVcXGV4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbnV0cml0aW9uL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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

/***/ "./src/app/profile/my-profile/post-tab/post-tab.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/profile/my-profile/post-tab/post-tab.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-refresher {\n  top: -110px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3Bvc3QtdGFiL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxccHJvZmlsZVxcbXktcHJvZmlsZVxccG9zdC10YWJcXHBvc3QtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXFCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbXktcHJvZmlsZS9wb3N0LXRhYi9wb3N0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtcmVmcmVzaGVye3RvcDogLTExMHB4O30iXX0= */");

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
        console.log(this.userData);
        console.log('userData');
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
            console.log(this.myPosts);
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
/* harmony default export */ __webpack_exports__["default"] = (".upcomingCard {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 5px solid #f7f7f7; }\n  .upcomingCard ion-avatar {\n    width: 65px;\n    height: 65px; }\n  .upcomingCard ion-label {\n    line-height: 1.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3VwY29taW5nLXRhYi9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZVxcQk0vc3JjXFxhcHBcXHByb2ZpbGVcXG15LXByb2ZpbGVcXHVwY29taW5nLXRhYlxcdXBjb21pbmctdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsZ0NBQWdDLEVBQUE7RUFBaEY7SUFDZSxXQUFXO0lBQUMsWUFBWSxFQUFBO0VBRHZDO0lBRWMsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL215LXByb2ZpbGUvdXBjb21pbmctdGFiL3VwY29taW5nLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGNvbWluZ0NhcmR7Ym9yZGVyLXJhZGl1czogMDtib3gtc2hhZG93OiBub25lO2JvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgaW9uLWF2YXRhcnt3aWR0aDogNjVweDtoZWlnaHQ6IDY1cHg7fVxyXG4gICAgaW9uLWxhYmVse2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG59Il19 */");

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
        console.log(this.consultID);
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
            console.log(data);
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