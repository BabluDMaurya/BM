function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/music/audio-player/audio-player.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/audio-player/audio-player.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMusicAudioPlayerAudioPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"ion-no-padding musiclist\" lines=\"none\" *ngIf=\"songList?.length>0\">\r\n  <ion-item *ngFor=\"let song of songList\" (click)=\"playThis(song)\"  [ngClass]=\"musicSelect?.id==song?.id?'active':''\">\r\n   \r\n    <ion-icon ios=\"ios-play\" md=\"md-play\" slot=\"start\"></ion-icon>\r\n    <h3 class=\"list-head\">{{song?.title}}<span>Jazz, Electric, Soul Music</span></h3>\r\n    <ion-text slot=\"end\">{{song?.duration}}</ion-text>\r\n    \r\n    <ion-icon ios=\"ios-heart\" md=\"md-heart\" slot=\"end\" color=\"white\" (click)=\"selectPlaylist(song?.id)\"></ion-icon>\r\n  </ion-item>\r\n</ion-list>\r\n<div class=\"no-data\" *ngIf=\"songList?.length<1\">\r\n  <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n  <p>No Music Found</p>\r\n</div>\r\n\r\n<div class=\"musiclistFooter\"> \r\n  <audio #player src=\"{{baseUrl}}{{srcPath}}\"></audio>\r\n  <div class=\"musicWrapper\">\r\n    <ion-toolbar padding class=\"audio-list ion-no-padding\">\r\n      <div class=\"audio-listInner\">\r\n        <ion-fab-button *ngIf=\"!isPlaying\" (click)=\"play(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n          <ng-container *ngIf=\"isLoading; else loaded\">\r\n            <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n          </ng-container>\r\n          <ng-template #loaded>\r\n            <ion-icon [name]=\"'play'\">  </ion-icon>\r\n          </ng-template>\r\n        </ion-fab-button>\r\n        <ion-fab-button *ngIf=\"isPlaying\" (click)=\"pause(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n          <ng-container *ngIf=\"isLoading; else loaded\">\r\n            <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n          </ng-container>\r\n          <ng-template #loaded>\r\n            <ion-icon [name]=\"'pause'\">\r\n            </ion-icon>\r\n          </ng-template>\r\n        </ion-fab-button>\r\n        <div>\r\n          <div class=\"musicbar\">\r\n            <ion-range  [value]=\"currentTime\" (ionChange)=\"seek($event)\" (click)=\"onDrag()\"\r\n              class=\"newmusiclist-range\" color=\"light\"></ion-range>\r\n          </div>\r\n          <div>\r\n            <div class=\"music-timer-fav\">\r\n              <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n              <ion-icon ios=\"ios-heart\" md=\"md-heart\" slot=\"end\" color=\"white\" (click)=\"selectPlaylist(musicSelect?.id)\"></ion-icon>\r\n            </div>\r\n            <div class=\"music-name\">\r\n              <ion-label color=\"light\" slot=\"end\">{{ musicSelect?.title }}</ion-label> \r\n            </div>\r\n          </div>\r\n          <ion-label class=\"ion-text-center\">{{selectedAudio[2]}}</ion-label>        \r\n        </div>\r\n      </div>\r\n      <!-- <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label> -->\r\n    </ion-toolbar>\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/expandable/expandable.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/expandable/expandable.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutritionExpandableExpandableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\r\n    <ng-content></ng-content>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/post-tab/post-tab.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/post-tab/post-tab.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileMyProfilePostTabPostTabComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-refresher class=\"component-refresher\" slot=\"fixed\" (ionRefresh)=\"postRefresh($event)\">\r\n  <ion-refresher-content\r\n    pullingIcon=\"arrow-dropdown\"\r\n    pullingText=\"Pull to refresh\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"Refreshing...\">\r\n  </ion-refresher-content>\r\n</ion-refresher>\r\n<div  *ngIf=\"gotData\">\r\n  <div *ngIf=\"!myPosts?.length > 0\" class=\"no-data\" style=\"height: calc(100vh - 220px);\">\r\n    <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n    <p>No post added yet!!!</p>\r\n  </div>\r\n  <ion-card class=\"item-card\"  *ngFor=\"let post of myPosts\">\r\n    <span  >    \r\n    <ion-card-header class=\"item-header\" >\r\n      <ion-avatar>\r\n        <img src=\"{{profilePicUrl}}{{userData?.userData?.bios?.profile_pic}}\" *ngIf=\"userData?.userData?.bios?.profile_pic\">\r\n        <img src=\"profileDefaultImage\" *ngIf=\"!userData?.userData?.bios?.profile_pic\">\r\n      </ion-avatar>\r\n      <div class=\"header-right\">\r\n        <ion-label>\r\n          <ion-card-title>{{userData.userData.user_name}}</ion-card-title>\r\n          <ion-card-subtitle>{{userData.userData.location}}</ion-card-subtitle>\r\n        </ion-label>\r\n        <ion-text class=\"post-timedate\">\r\n          <p class=\"post-date\">{{post?.created_at}}</p>\r\n        </ion-text>\r\n      </div>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding item-content\">\r\n      <ion-thumbnail *ngIf=\"post['image_post']['0']['thumb_path']\">\r\n        <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n          <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['thumb_path']; let i =index;\">\r\n            <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-thumbnail>\r\n      <div class=\"post-content\">\r\n        <!-- -------  Description post with  post type = 8 -->\r\n        <div *ngIf=\"post?.post_type==8\">\r\n          <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n          </p>\r\n          <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n            <span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n            <span (click)=\"expanded = post.id\"\r\n              class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n          <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n            <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n        </div>\r\n        <!-- ------- ends here   post type = 8 -->\r\n        <ion-list class=\"item-post\" lines=\"none\">\r\n          <ion-item>\r\n            <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment==0\">\r\n              <span class=\"d-flex\">\r\n                <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                <span>{{post.total_comments.length}}</span>\r\n              </span>\r\n            </div>\r\n            <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n              <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> \r\n              <span>{{post?.count}}</span>\r\n            </div>\r\n          </ion-item>\r\n          <!-- --------------- bookmark for only  othepost on own -------->\r\n          <ion-item *ngIf=\"post?.post_type==1 && consultID\">         \r\n              <div (click)=\"bookmarked(post?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n              </div>           \r\n          </ion-item>\r\n\r\n          <ion-item  *ngIf=\"!consultID\">         \r\n            <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n              <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n            </div>           \r\n          </ion-item>\r\n        </ion-list>\r\n         <!-- --------------- bookmark ends here------------ -->\r\n        <!-- -------  Description for  I-M-A-G-E  post with  post type = 1-->\r\n        <div *ngIf=\"post?.post_type==1\">\r\n          <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n          </p>\r\n          <p\r\n            *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n            <span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n            <span (click)=\"expanded = post.id\"\r\n              class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n          <p *ngIf=\"expanded ==  post.id \"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n            <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n        </div>\r\n        <!-- ------- ends here   post type = 1-->\r\n      </div>\r\n    </ion-card-content>  \r\n  </span>\r\n  </ion-card>\r\n  \r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>  \r\n</div>\r\n<div *ngIf=\"!gotData\">\r\n  <ion-card class=\"video-card\">\r\n    <ion-card-header class=\"card-head upcoming-block\">\r\n      <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding item-content\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <div class=\"video-content\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"video-card\">\r\n    <ion-card-header class=\"card-head upcoming-block\">\r\n      <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <div class=\"video-content\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>  \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileMyProfileUpcomingTabUpcomingTabComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card class=\"ion-no-margin upcomingCard\" *ngFor=\"let upcoming of upcomingList; let i=index;\">\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"{{url}}{{upcoming?.img_arr[0]}}\" *ngIf=\"upcomingList[i]?.image_path\">\r\n      <!-- <img src=\"{{profile_url}}{{upcoming?.program_user?.bios?.profile_pic}}\" *ngIf=\"upcoming?.program_user?.bios?.profile_pic\"> -->\r\n      <img  src=\"../../assets/images/loading.jpg\" *ngIf=\"!upcomingList[i]?.image_path\">\r\n    </ion-avatar>\r\n    <ion-label [routerLink]=\"userData?.id ==upcoming?.user_id ? ['/program-details/',upcoming.id] : ['/program-view/',upcoming.id]\">\r\n      <h3 class=\"list-person\">{{upcoming?.title}}</h3>\r\n      <span class=\"list-name d-block\">{{upcoming?.type_id}}</span>\r\n      <span class=\"list-name d-block\">By:{{upcoming?.program_user?.user_name}} {{upcoming?.convertedTime | date:'medium'}}</span>\r\n      <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\"> <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span>\r\n      <!-- <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\">Countdown: <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span> -->\r\n      <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd==0\"> <b> L I V E</b></span>\r\n      <!-- <countdown [config]=\"{leftTime: 30}\"></countdown> -->\r\n    </ion-label>\r\n    <div class=\"action-links\" slot=\"end\" *ngIf=\"upcoming?.nutrition_id\">\r\n      <ion-icon (click)=\"nutritionModal(upcoming)\" ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n</ion-card>\r\n<!--------------- S K E L E T O N ------------>\r\n<ion-list lines=\"none\" *ngIf=\"!upcomingList\">      \r\n  <ion-item *ngFor=\"let skeleton of [].constructor(20)\" class=\"item-card\">\r\n    <ion-avatar slot=\"start\">\r\n      <ion-skeleton-text></ion-skeleton-text>\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3 class=\"list-person\"><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n      <span class=\"list-name\"><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></span>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n<!---------------E n d s  S K E L E T O N ------------>\r\n<div class=\"no-data\" *ngIf=\"noData\" style=\"height: calc(100vh - 175px)\">\r\n  <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n  <p>No upcoming program for next 24 Hrs.</p>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/music/audio-player/audio-player.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/music/audio-player/audio-player.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMusicAudioPlayerAudioPlayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0;\n}\n\n.list-head span {\n  display: block;\n  font-size: 0.7rem;\n  color: #000;\n  margin-top: 3px;\n}\n\n.text-white {\n  color: #FFF;\n}\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 50px;\n}\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px;\n}\n\n.audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n.audio-list > div {\n  display: flex;\n}\n\n.audio-list > * {\n  display: inline-block;\n}\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px;\n}\n\nion-range ion-label {\n  margin-right: 50px;\n}\n\nion-fab-button {\n  min-width: 40px;\n}\n\nion-fab-button + div {\n  width: 100%;\n}\n\nion-fab-button + div > div {\n  display: flex;\n  margin-top: 12px;\n}\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 35px;\n}\n\n.music-spinner {\n  --color: #26a69a;\n}\n\n.music-name {\n  padding-left: 50px;\n  margin-top: 0 !important;\n}\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 32px;\n  display: flex;\n}\n\n.music-timer-fav ion-icon {\n  margin: 0 5px;\n}\n\n.musicbar {\n  padding-right: 50px;\n}\n\n.musiclistFooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.musicWrapper ion-toolbar .audio-listInner {\n  display: block;\n  background: #26a69a;\n  height: 56px;\n  margin-top: 10px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n  position: absolute;\n  width: 90%;\n  top: 2px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n  margin-top: 20px;\n  margin-left: 10px;\n  padding-left: 50px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n  color: #FFF;\n}\n\n.no-data {\n  height: calc(100vh - 250px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvYXVkaW8tcGxheWVyL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXG11c2ljXFxhdWRpby1wbGF5ZXJcXGF1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXVzaWMvYXVkaW8tcGxheWVyL2F1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFXLGdCQUFBO0VBQWlCLG1CQUFBO0VBQW9CLFNBQUE7QUNHaEQ7O0FERkE7RUFBZ0IsY0FBQTtFQUFlLGlCQUFBO0VBQW1CLFdBQUE7RUFBWSxlQUFBO0FDUzlEOztBRFJBO0VBQVksV0FBQTtBQ1laOztBRFhBO0VBQXlCLGtCQUFBO0VBQW1CLFlBQUE7QUNnQjVDOztBRGZBO0VBQTZCLFlBQUE7QUNtQjdCOztBRGxCQTtFQUFZLFVBQUE7RUFBVyxnQkFBQTtFQUFpQixtQkFBQTtBQ3dCeEM7O0FEdkJBO0VBQWdCLGFBQUE7QUMyQmhCOztBRDFCQTtFQUFjLHFCQUFBO0FDOEJkOztBRDdCQTtFQUFVLGlCQUFBO0VBQWtCLGFBQUE7QUNrQzVCOztBRGpDQTtFQUFvQixrQkFBQTtBQ3FDcEI7O0FEcENBO0VBQWUsZUFBQTtBQ3dDZjs7QUR2Q0E7RUFBbUIsV0FBQTtBQzJDbkI7O0FEMUNBO0VBQXVCLGFBQUE7RUFBYyxnQkFBQTtBQytDckM7O0FEOUNBO0VBQWtDLFdBQUE7RUFBWSxpQkFBQTtBQ21EOUM7O0FEbERBO0VBQWUsZ0JBQUE7QUNzRGY7O0FEcERBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtBQ3VESjs7QURyREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQVUsYUFBQTtBQ3lEZDs7QUR2REE7RUFDSSxhQUFBO0FDMERKOztBRHhEQTtFQUNJLG1CQUFBO0FDMkRKOztBRHhEQTtFQUFpQixlQUFBO0VBQWdCLFNBQUE7RUFBVSxXQUFBO0FDOEQzQzs7QUQ1REk7RUFBWSxrQkFBQTtFQUFtQixnQkFBQTtBQ2lFbkM7O0FEaEVRO0VBQWlCLGNBQUE7RUFBZSxtQkFBQTtFQUFvQixZQUFBO0VBQWEsZ0JBQUE7QUNzRXpFOztBRHBFZ0I7RUFBVSxrQkFBQTtFQUFtQixVQUFBO0VBQVcsUUFBQTtBQ3lFeEQ7O0FEdkVZO0VBQVksZ0JBQUE7RUFBaUIsaUJBQUE7RUFBa0Isa0JBQUE7QUM0RTNEOztBRDNFZ0I7RUFBVSxXQUFBO0FDOEUxQjs7QUR6RUE7RUFBUyxzQ0FBQTtBQzZFVCIsImZpbGUiOiJzcmMvYXBwL211c2ljL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG4ubGlzdC1oZWFke2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjg3NXJlbTttYXJnaW46IDA7fVxyXG4ubGlzdC1oZWFkIHNwYW57ZGlzcGxheTogYmxvY2s7Zm9udC1zaXplOiAwLjcwcmVtO2NvbG9yOiAjMDAwO21hcmdpbi10b3A6IDNweDt9XHJcbi50ZXh0LXdoaXRle2NvbG9yOiAjRkZGO31cclxuLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDUwcHg7fVxyXG4uaW9zLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e2JvdHRvbTogNDhweDt9XHJcbi5hdWRpby1saXN0e3BhZGRpbmc6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO31cclxuLmF1ZGlvLWxpc3Q+ZGl2e2Rpc3BsYXk6IGZsZXg7fVxyXG4uYXVkaW8tbGlzdD4qe2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbmlvbi1yYW5nZXstLWtub2Itc2l6ZTogMThweDstLWhlaWdodDogMnB4O31cclxuaW9uLXJhbmdlIGlvbi1sYWJlbHttYXJnaW4tcmlnaHQ6IDUwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbnttaW4td2lkdGg6IDQwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXZ7d2lkdGg6IDEwMCU7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXY+ZGl2e2Rpc3BsYXk6IGZsZXg7bWFyZ2luLXRvcDogMTJweDt9XHJcbmlvbi1mYWItYnV0dG9uK2Rpdj5kaXYgK2lvbi1sYWJlbHtjb2xvcjogI0ZGRjttYXJnaW4tbGVmdDogMzVweDt9XHJcbi5tdXNpYy1zcGlubmVyey0tY29sb3I6ICMyNmE2OWE7fVxyXG5cclxuLm11c2ljLW5hbWUgeyAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnRcclxufVxyXG4ubXVzaWMtdGltZXItZmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAzMnB4O2Rpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm11c2ljLXRpbWVyLWZhdiBpb24taWNvbiB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5tdXNpY2JhciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubXVzaWNsaXN0Rm9vdGVye3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDA7d2lkdGg6IDEwMCV9XHJcbi5tdXNpY1dyYXBwZXJ7XHJcbiAgICBpb24tdG9vbGJhcnstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAuYXVkaW8tbGlzdElubmVye2Rpc3BsYXk6IGJsb2NrO2JhY2tncm91bmQ6ICMyNmE2OWE7aGVpZ2h0OiA1NnB4O21hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5tdXNpY2JhcntcclxuICAgICAgICAgICAgICAgIGlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDkwJTt0b3A6IDJweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm11c2ljLW5hbWV7bWFyZ2luLXRvcDogMjBweDttYXJnaW4tbGVmdDogMTBweDtwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7Y29sb3I6ICNGRkY7fVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KSAhaW1wb3J0YW50O30iLCIubGlzdC1oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdC1oZWFkIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5zdGlja3ktZm9vdGVyLm11c2ljbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG4uaW9zLnN0aWNreS1mb290ZXIubXVzaWNsaXN0IHtcbiAgYm90dG9tOiA0OHB4O1xufVxuXG4uYXVkaW8tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5hdWRpby1saXN0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmF1ZGlvLWxpc3QgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24tcmFuZ2Uge1xuICAtLWtub2Itc2l6ZTogMThweDtcbiAgLS1oZWlnaHQ6IDJweDtcbn1cblxuaW9uLXJhbmdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uICsgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mYWItYnV0dG9uICsgZGl2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuaW9uLWZhYi1idXR0b24gKyBkaXYgPiBkaXYgKyBpb24tbGFiZWwge1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5tdXNpYy1zcGlubmVyIHtcbiAgLS1jb2xvcjogIzI2YTY5YTtcbn1cblxuLm11c2ljLW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm11c2ljLXRpbWVyLWZhdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm11c2ljLXRpbWVyLWZhdiBpb24taWNvbiB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5tdXNpY2JhciB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5tdXNpY2xpc3RGb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5hdWRpby1saXN0SW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzI2YTY5YTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAuYXVkaW8tbGlzdElubmVyIC5tdXNpY2JhciBpb24tcmFuZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIHRvcDogMnB4O1xufVxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAuYXVkaW8tbGlzdElubmVyIC5tdXNpYy1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIgLmF1ZGlvLWxpc3RJbm5lciAubXVzaWMtbmFtZSBpb24tbGFiZWwge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm5vLWRhdGEge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCkgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/music/audio-player/audio-player.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/music/audio-player/audio-player.component.ts ***!
    \**************************************************************/

  /*! exports provided: AudioPlayerComponent */

  /***/
  function srcAppMusicAudioPlayerAudioPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function () {
      return AudioPlayerComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _playlist_dropdown_playlist_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../playlist-dropdown/playlist-dropdown.component */
    "./src/app/music/playlist-dropdown/playlist-dropdown.component.ts");
    /* harmony import */


    var src_app_services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/music.service */
    "./src/app/services/music.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");

    var AudioPlayerComponent = /*#__PURE__*/function () {
      function AudioPlayerComponent(musicService, popoverController) {
        _classCallCheck(this, AudioPlayerComponent);

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

      _createClass(AudioPlayerComponent, [{
        key: "selectPlaylist",
        value: function selectPlaylist(mid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _playlist_dropdown_playlist_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistDropdownComponent"],
                      translucent: false,
                      cssClass: 'dropdown-menu',
                      componentProps: {
                        'playList': this.playList,
                        'mid': mid
                      }
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

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
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.musicService.getPlaylist().subscribe(function (data) {
            _this.playList = data.status;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._player = this.playerElementRef.nativeElement;

          this._bindPlayerEvents();
        }
      }, {
        key: "playThis",
        value: function playThis(item) {
          this._player.autoplay = true;
          this.musicSelect = item;
          this.srcPath = item.filename;
          this.play(item);
        }
      }, {
        key: "play",
        value: function play(src) {
          if (src) {
            this.musicSelect = src;
          } else {
            this.musicSelect = this.songList[0];
            this.srcPath = this.songList[0].filename;
          }

          this.isPlaying = true;

          this._player.play();
        }
      }, {
        key: "pause",
        value: function pause(src) {
          this.isPlaying = false;

          this._player.pause();
        }
      }, {
        key: "seek",
        value: function seek(_ref) {
          var value = _ref.detail.value;
          console.log(this._player.currentTime);
          console.log(value); // this._player.currentTime = this._player.currentTime;
          // console.log(this.drag)

          this.dragVal = value;

          if (this.drag) {
            this._player.currentTime = this.dragVal;
          }
        }
      }, {
        key: "onDrag",
        value: function onDrag() {
          var _this2 = this;

          this.drag = true;

          if (this.drag) {
            this._player.currentTime = this.dragVal;
          }

          setTimeout(function () {
            _this2.drag = false;
          }, 2500);
        }
      }, {
        key: "_bindPlayerEvents",
        value: function _bindPlayerEvents() {
          var _this3 = this;

          this._player.addEventListener('playing', function () {
            _this3.isPlaying = true;
          });

          this._player.addEventListener('pause', function () {
            _this3.isPlaying = false;
          });

          this._player.addEventListener('timeupdate', function () {
            _this3.currentTime = Math.floor(_this3._player.currentTime);
          });

          this._player.addEventListener('seeking', function () {
            _this3.isLoading = true; // console.log(this._player.currentTime);
          });

          this._player.addEventListener('seeked', function () {
            _this3.isLoading = false;
          });

          this._player.addEventListener('loadstart', function () {
            _this3.isLoading = true;
          });

          this._player.addEventListener('loadeddata', function () {
            _this3.isLoading = false;
            var dur = Math.floor(_this3._player.duration);
            _this3.duration = Math.floor(dur / 60) + ":" + dur % 60;
            console.log("dfsa");
            console.log(_this3.duration);
          });
        }
      }]);

      return AudioPlayerComponent;
    }();

    AudioPlayerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AudioPlayerComponent.prototype, "playerElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AudioPlayerComponent.prototype, "songList", void 0);
    AudioPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audio-player',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audio-player.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/music/audio-player/audio-player.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./audio-player.component.scss */
      "./src/app/music/audio-player/audio-player.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], AudioPlayerComponent);
    /***/
  },

  /***/
  "./src/app/nutrition/expandable/expandable.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/nutrition/expandable/expandable.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutritionExpandableExpandableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnV0cml0aW9uL2V4cGFuZGFibGUvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcbnV0cml0aW9uXFxleHBhbmRhYmxlXFxleHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9udXRyaXRpb24vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9udXRyaXRpb24vZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufSIsIi5leHBhbmQtd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29sbGFwc2VkIHtcbiAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nutrition/expandable/expandable.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/nutrition/expandable/expandable.component.ts ***!
    \**************************************************************/

  /*! exports provided: ExpandableComponent */

  /***/
  function srcAppNutritionExpandableExpandableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function () {
      return ExpandableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExpandableComponent = /*#__PURE__*/function () {
      function ExpandableComponent(renderer) {
        _classCallCheck(this, ExpandableComponent);

        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
      }

      _createClass(ExpandableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('dsfs');
          this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
        }
      }]);

      return ExpandableComponent;
    }();

    ExpandableComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ExpandableComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], ExpandableComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expandable',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expandable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/expandable/expandable.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expandable.component.scss */
      "./src/app/nutrition/expandable/expandable.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], ExpandableComponent);
    /***/
  },

  /***/
  "./src/app/profile/components.modules.ts":
  /*!***********************************************!*\
    !*** ./src/app/profile/components.modules.ts ***!
    \***********************************************/

  /*! exports provided: ComponentModule */

  /***/
  function srcAppProfileComponentsModulesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentModule", function () {
      return ComponentModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _my_profile_post_tab_post_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile/post-tab/post-tab.component */
    "./src/app/profile/my-profile/post-tab/post-tab.component.ts");
    /* harmony import */


    var _my_profile_upcoming_tab_upcoming_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile/upcoming-tab/upcoming-tab.component */
    "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.ts");
    /* harmony import */


    var _nutrition_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../nutrition/expandable/expandable.component */
    "./src/app/nutrition/expandable/expandable.component.ts");
    /* harmony import */


    var _music_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../music/audio-player/audio-player.component */
    "./src/app/music/audio-player/audio-player.component.ts"); // import {AudioPlayerComponent} from '../audio-player/audio-player.component';


    var ComponentModule = function ComponentModule() {
      _classCallCheck(this, ComponentModule);
    };

    ComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      declarations: [_my_profile_post_tab_post_tab_component__WEBPACK_IMPORTED_MODULE_6__["PostTabComponent"], _my_profile_upcoming_tab_upcoming_tab_component__WEBPACK_IMPORTED_MODULE_7__["UpcomingTabComponent"], _music_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_9__["AudioPlayerComponent"], _nutrition_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__["ExpandableComponent"]],
      exports: [_my_profile_post_tab_post_tab_component__WEBPACK_IMPORTED_MODULE_6__["PostTabComponent"], _my_profile_upcoming_tab_upcoming_tab_component__WEBPACK_IMPORTED_MODULE_7__["UpcomingTabComponent"], _music_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_9__["AudioPlayerComponent"], _nutrition_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__["ExpandableComponent"]],
      entryComponents: []
    })], ComponentModule);
    /***/
  },

  /***/
  "./src/app/profile/my-profile/post-tab/post-tab.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/profile/my-profile/post-tab/post-tab.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileMyProfilePostTabPostTabComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".component-refresher {\n  top: -110px;\n}\n\n.item-card, .video-card {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.item-card .item-header, .item-card .card-head, .video-card .item-header, .video-card .card-head {\n  padding: 15px;\n}\n\n.item-card .item-header .header-right, .item-card .card-head .header-right, .video-card .item-header .header-right, .video-card .card-head .header-right {\n  align-items: center;\n}\n\n.item-card .item-content ion-thumbnail, .video-card .item-content ion-thumbnail {\n  height: calc(100vw - 30px);\n}\n\n.item-card .item-content ion-thumbnail .post-slider, .video-card .item-content ion-thumbnail .post-slider {\n  max-height: none;\n  height: 100%;\n}\n\n.item-card .item-content ion-thumbnail .post-slider ion-slide, .video-card .item-content ion-thumbnail .post-slider ion-slide {\n  height: 100%;\n}\n\n.item-card .item-content ion-thumbnail img, .video-card .item-content ion-thumbnail img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3Bvc3QtdGFiL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHByb2ZpbGVcXG15LXByb2ZpbGVcXHBvc3QtdGFiXFxwb3N0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3Bvc3QtdGFiL3Bvc3QtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXFCLFdBQUE7QUNFckI7O0FEREE7RUFDSSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQ0lKOztBREhJO0VBQ0ksYUFBQTtBQ0tSOztBREpRO0VBQ0ksbUJBQUE7QUNNWjs7QURGUTtFQUNJLDBCQUFBO0FDSVo7O0FESFk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNLaEI7O0FESmdCO0VBQ0ksWUFBQTtBQ01wQjs7QURIWTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtBQ0toQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbXktcHJvZmlsZS9wb3N0LXRhYi9wb3N0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtcmVmcmVzaGVye3RvcDogLTExMHB4O31cclxuLml0ZW0tY2FyZCwgLnZpZGVvLWNhcmQge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIC5pdGVtLWhlYWRlciwgLmNhcmQtaGVhZHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIC5oZWFkZXItcmlnaHR7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLml0ZW0tY29udGVudHtcclxuICAgICAgICBpb24tdGh1bWJuYWlse1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAzMHB4KTtcclxuICAgICAgICAgICAgLnBvc3Qtc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGlvbi1zbGlkZXtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn0iLCIuY29tcG9uZW50LXJlZnJlc2hlciB7XG4gIHRvcDogLTExMHB4O1xufVxuXG4uaXRlbS1jYXJkLCAudmlkZW8tY2FyZCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5pdGVtLWNhcmQgLml0ZW0taGVhZGVyLCAuaXRlbS1jYXJkIC5jYXJkLWhlYWQsIC52aWRlby1jYXJkIC5pdGVtLWhlYWRlciwgLnZpZGVvLWNhcmQgLmNhcmQtaGVhZCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uaXRlbS1jYXJkIC5pdGVtLWhlYWRlciAuaGVhZGVyLXJpZ2h0LCAuaXRlbS1jYXJkIC5jYXJkLWhlYWQgLmhlYWRlci1yaWdodCwgLnZpZGVvLWNhcmQgLml0ZW0taGVhZGVyIC5oZWFkZXItcmlnaHQsIC52aWRlby1jYXJkIC5jYXJkLWhlYWQgLmhlYWRlci1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS1jYXJkIC5pdGVtLWNvbnRlbnQgaW9uLXRodW1ibmFpbCwgLnZpZGVvLWNhcmQgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMzBweCk7XG59XG4uaXRlbS1jYXJkIC5pdGVtLWNvbnRlbnQgaW9uLXRodW1ibmFpbCAucG9zdC1zbGlkZXIsIC52aWRlby1jYXJkIC5pdGVtLWNvbnRlbnQgaW9uLXRodW1ibmFpbCAucG9zdC1zbGlkZXIge1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaXRlbS1jYXJkIC5pdGVtLWNvbnRlbnQgaW9uLXRodW1ibmFpbCAucG9zdC1zbGlkZXIgaW9uLXNsaWRlLCAudmlkZW8tY2FyZCAuaXRlbS1jb250ZW50IGlvbi10aHVtYm5haWwgLnBvc3Qtc2xpZGVyIGlvbi1zbGlkZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pdGVtLWNhcmQgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIGltZywgLnZpZGVvLWNhcmQgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/my-profile/post-tab/post-tab.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/profile/my-profile/post-tab/post-tab.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PostTabComponent */

  /***/
  function srcAppProfileMyProfilePostTabPostTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostTabComponent", function () {
      return PostTabComponent;
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


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../popover/popover.component */
    "./src/app/profile/popover/popover.component.ts");

    var PostTabComponent = /*#__PURE__*/function () {
      // Constructor
      function PostTabComponent(peopleService, actRoute, commonService, modalController, popoverController) {
        _classCallCheck(this, PostTabComponent);

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
        this.profileDefaultImage = './../../../assets/images/user.jpg'; //  console.log(el);
      }

      _createClass(PostTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          console.log(this.userData);
          console.log('userData');
          this.actRoute.paramMap.subscribe(function (params) {
            if (params.get('userData')) {
              _this4.consultID = params.get('userData');
            } else {
              _this4.consultID = '';
            }
          });
          this.postData();
          this.commonService.footerTabHooks.subscribe(function (data) {
            if (data) {
              _this4.myPosts = null;
              _this4.gotData = false;

              _this4.postData();
            }
          });
        }
      }, {
        key: "postRefresh",
        value: function postRefresh(event) {
          this.postData();
          event.target.complete();
        }
        /**
         * get post according userid
         */

      }, {
        key: "postData",
        value: function postData() {
          var _this5 = this;

          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          this.peopleService.getMyPost('1,8', this.userData.userData.id, 1).subscribe(function (data) {
            _this5.myPosts = data.posts.data;
            console.log(_this5.myPosts);

            _this5.myPosts.forEach(function (element, i) {
              _this5.myPosts[i].count = element.post_likes.length;
              element.post_likes.filter(function (f) {
                if (f.user_id == _this5.loginUserData.id) {
                  _this5.myPosts[i].liked = true;
                }
              });
              element.post_bookmarks.filter(function (f) {
                if (f.user_id == _this5.loginUserData.id) {
                  _this5.myPosts[i].bookmarked = true;
                }
              });
            });

            _this5.last_page = data.posts.last_page;
            _this5.currentPage = data.posts.current_page;
            _this5.gotData = true;
          });
        } // ------------ laod data event ----------

        /**
         *laod data event according userid
         */

      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this6 = this;

          setTimeout(function () {
            if (_this6.currentPage > 0) {
              _this6.peopleService.getMyPost('1,8', _this6.consultID, _this6.currentPage + 1).subscribe(function (data) {
                //  console.log(data);
                data.posts.data.forEach(function (element, i) {
                  element.count = element.post_likes.length;
                  element.post_likes.filter(function (f) {
                    // console.log(f);
                    if (f.user_id == _this6.loginUserData.id) {
                      data.posts.data[i].liked = true;
                    }
                  });
                  element.post_bookmarks.filter(function (f) {
                    if (f.user_id == _this6.loginUserData.id) {
                      _this6.myPosts[i].bookmarked = true;
                    }
                  });
                });
                _this6.myPosts = _this6.myPosts.concat(data.posts.data);
                _this6.last_page = data.posts.last_page;
                _this6.currentPage = data.posts.current_page; //  console.log(this.myPosts);
              });
            }

            event.target.complete();

            if (_this6.last_page <= _this6.currentPage + 1) {
              event.target.disabled = true;
            }
          }, 500);
        }
        /**
        * Liked unliked funcitonality
        */

      }, {
        key: "liked",
        value: function liked(postId, likeStat) {
          var _this7 = this;

          this.myPosts.forEach(function (element, i) {
            if (element.id == postId) {
              _this7.myPosts[i].liked = !likeStat;

              if (likeStat) {
                _this7.myPosts[i].count = _this7.myPosts[i].count - 1;
              } else {
                _this7.myPosts[i].count = _this7.myPosts[i].count + 1;
              }
            }
          });
          this.peopleService.likedPost({
            'postId': postId,
            'liked': likeStat
          }).subscribe(function (data) {
            if (data.status) {
              _this7.commonService.presentToast(data.status);
            }
          });
        }
        /**
        * Bookmarked funcitonality
        */

      }, {
        key: "bookmarked",
        value: function bookmarked(postId, bmStat, post_type) {
          var _this8 = this;

          //console.log(postId, bmStat);
          this.myPosts.forEach(function (element, i) {
            if (element.id == postId) {
              _this8.myPosts[i].bookmarked = !bmStat;
            }
          }); //console.log(postId, bmStat);

          this.peopleService.bookmarkPost({
            'postId': postId,
            'bookmark': bmStat,
            'post_type': post_type
          }).subscribe(function (data) {
            if (data.status) {
              _this8.commonService.presentToast(data.status);
            }
          });
        }
      }, {
        key: "openViewer",
        value: function openViewer(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
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

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showOptions",
        value: function showOptions(ev, commentStatus) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this9 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"],
                      translucent: true,
                      cssClass: 'custom-popover',
                      componentProps: {
                        'postId': ev,
                        'commentStatus': commentStatus
                      }
                    });

                  case 2:
                    popover = _context3.sent;
                    popover.onDidDismiss().then(function (data) {
                      console.log(commentStatus);

                      if (data.data.click == 1) {
                        console.log(_this9.myPosts);

                        _this9.myPosts.forEach(function (f, i) {
                          if (f.id == ev) {
                            _this9.myPosts[i].is_delete = 1;
                          }
                        });
                      } else if (data.data.click == 2) {
                        console.log(_this9.myPosts);

                        _this9.myPosts.forEach(function (f, i) {
                          if (f.id == ev) {
                            console.log('iv');

                            if (commentStatus == 0) {
                              _this9.myPosts[i].disable_comment = true;
                            } else {
                              _this9.myPosts[i].disable_comment = !commentStatus;
                            }
                          }
                        });

                        console.log(_this9.myPosts);
                      }
                    }); // console.log(ev);

                    _context3.next = 6;
                    return popover.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return PostTabComponent;
    }();

    PostTabComponent.ctorParameters = function () {
      return [{
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])], PostTabComponent.prototype, "infiniteScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PostTabComponent.prototype, "userData", void 0);
    PostTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-tab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-tab.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/post-tab/post-tab.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-tab.component.scss */
      "./src/app/profile/my-profile/post-tab/post-tab.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])], PostTabComponent);
    /***/
  },

  /***/
  "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileMyProfileUpcomingTabUpcomingTabComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".upcomingCard {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 5px solid #f7f7f7;\n}\n.upcomingCard ion-avatar {\n  width: 65px;\n  height: 65px;\n}\n.upcomingCard ion-label {\n  line-height: 1.5;\n}\n.item-card {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.item-card .item-header {\n  padding: 15px;\n}\n.item-card .item-header .header-right {\n  align-items: center;\n}\n.item-card .item-content ion-thumbnail {\n  height: calc(100vw - 30px);\n}\n.item-card .item-content ion-thumbnail .post-slider {\n  max-height: none;\n  height: 100%;\n}\n.item-card .item-content ion-thumbnail .post-slider ion-slide {\n  height: 100%;\n}\n.item-card .item-content ion-thumbnail img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3VwY29taW5nLXRhYi9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFxteS1wcm9maWxlXFx1cGNvbWluZy10YWJcXHVwY29taW5nLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3VwY29taW5nLXRhYi91cGNvbWluZy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxnQkFBQTtFQUFpQixnQkFBQTtFQUFpQixnQ0FBQTtBQ0loRDtBREhJO0VBQVcsV0FBQTtFQUFZLFlBQUE7QUNPM0I7QUROSTtFQUFVLGdCQUFBO0FDU2Q7QURQQTtFQUNJLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDVUo7QURUSTtFQUNJLGFBQUE7QUNXUjtBRFZRO0VBQ0ksbUJBQUE7QUNZWjtBRFJRO0VBQ0ksMEJBQUE7QUNVWjtBRFRZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDV2hCO0FEVmdCO0VBQ0ksWUFBQTtBQ1lwQjtBRFRZO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDV2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL3VwY29taW5nLXRhYi91cGNvbWluZy10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBjb21pbmdDYXJke2JvcmRlci1yYWRpdXM6IDA7Ym94LXNoYWRvdzogbm9uZTtib3JkZXItYm90dG9tOiA1cHggc29saWQgI2Y3ZjdmNztcclxuICAgIGlvbi1hdmF0YXJ7d2lkdGg6IDY1cHg7aGVpZ2h0OiA2NXB4O31cclxuICAgIGlvbi1sYWJlbHtsaW5lLWhlaWdodDogMS41O31cclxufVxyXG4uaXRlbS1jYXJkIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAuaXRlbS1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAuaGVhZGVyLXJpZ2h0e1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pdGVtLWNvbnRlbnR7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMzBweCk7XHJcbiAgICAgICAgICAgIC5wb3N0LXNsaWRlcntcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59IiwiLnVwY29taW5nQ2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjdmN2Y3O1xufVxuLnVwY29taW5nQ2FyZCBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbn1cbi51cGNvbWluZ0NhcmQgaW9uLWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLml0ZW0tY2FyZCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5pdGVtLWNhcmQgLml0ZW0taGVhZGVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5pdGVtLWNhcmQgLml0ZW0taGVhZGVyIC5oZWFkZXItcmlnaHQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tY2FyZCAuaXRlbS1jb250ZW50IGlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAzMHB4KTtcbn1cbi5pdGVtLWNhcmQgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIC5wb3N0LXNsaWRlciB7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pdGVtLWNhcmQgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIC5wb3N0LXNsaWRlciBpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaXRlbS1jYXJkIC5pdGVtLWNvbnRlbnQgaW9uLXRodW1ibmFpbCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UpcomingTabComponent */

  /***/
  function srcAppProfileMyProfileUpcomingTabUpcomingTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpcomingTabComponent", function () {
      return UpcomingTabComponent;
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


    var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UpcomingTabComponent = /*#__PURE__*/function () {
      function UpcomingTabComponent(commonService, actRoute, programService) {
        var _this10 = this;

        _classCallCheck(this, UpcomingTabComponent);

        this.commonService = commonService;
        this.actRoute = actRoute;
        this.programService = programService;
        this.profile_url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
        this.actRoute.paramMap.subscribe(function (params) {
          if (params.get('userData')) {
            _this10.consultID = params.get('userData');
          }

          console.log("this.consultID" + _this10.consultID);
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        console.log("this.userData :" + this.userData);
      }

      _createClass(UpcomingTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.consultID);

          if (this.consultID) {
            this.getConsultProg(this.consultID);
          } else {
            this.getMyprog();
          }
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal(data) {
          this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__["NutritionModalComponent"], 'fullModal', {
            'data': data
          });
        }
      }, {
        key: "getMyprog",
        value: function getMyprog() {
          var _this11 = this;

          this.programService.getUpcomingPrograms(null).subscribe(function (data) {
            if (data.programList.length < 1) {
              _this11.noData = true;
            }

            _this11.upcomingList = _this11.getCounter(data.programList);
            _this11.upcomingList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
          });
        }
      }, {
        key: "getConsultProg",
        value: function getConsultProg(id) {
          var _this12 = this;

          this.programService.getConsultPrograms({
            'consultId': id
          }).subscribe(function (data) {
            console.log(data);

            if (data.data.length < 1) {
              _this12.noData = true;
            }

            _this12.upcomingList = _this12.getCounter(data.data);
            _this12.upcomingList = data.data.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
          });
        }
      }, {
        key: "getCounter",
        value: function getCounter(elementArr) {
          elementArr.filter(function (el) {
            el.convertedTime = new Date(el.program_date + 'Z');
            var a = new Date(el.program_date + 'Z');
            var b = new Date();
            var c;

            if (a > b) {
              c = Math.abs(a - b) / 1000;
            } else {
              c = 0;
              el.live = true;
            }

            el.cd = c;
            setInterval(function () {
              if (parseInt(el.cd) > 0) el.cd = parseInt(el.cd) - 1;
              el.hh = ~~(el.cd / (60 * 60));
              el.mm = ~~(el.cd % 3600 / 60);
              el.ss = el.cd % 3600 % 60;
            }, 1000);
            return el;
          });
          return elementArr;
        }
      }]);

      return UpcomingTabComponent;
    }();

    UpcomingTabComponent.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"]
      }];
    };

    UpcomingTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upcoming-tab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upcoming-tab.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upcoming-tab.component.scss */
      "./src/app/profile/my-profile/upcoming-tab/upcoming-tab.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../my-profile.page.scss */
      "./src/app/profile/my-profile/my-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"]])], UpcomingTabComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5-es5.js.map