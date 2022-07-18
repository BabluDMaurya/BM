function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-video-add-video-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/add-video.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/add-video.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddVideoAddVideoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content> \r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showMusic==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Add Video</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"submitForm()\" class=\"text-green\" *ngIf=\"visibility\">Next</ion-label>\r\n          <!-- <ion-fab-button class=\"btn-next\" size=\"small\" slot=\"end\"><ion-icon ios=\"ios-send\" md=\"md-send\"></ion-icon></ion-fab-button>           -->\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header> \r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"selectVideo()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"captureVideo()\">\r\n    \r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n    \r\n        </ion-card>\r\n      </ion-col>\r\n      </ion-row>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"videoForm\">\r\n          <ion-list>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input formControlName=\"title\" type=\"text\" class=\"form-control\"></ion-input>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.title\">\r\n              <span class=\"error-message\" *ngIf=\"(isSubmitted || videoForm.get('title').touched) && videoForm.get('title').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Description <span>*</span></ion-label>\r\n              <ion-textarea rows=\"5\" auto-grow=\"true\" formControlName=\"description\" class=\"form-control\"></ion-textarea>\r\n            </ion-item>           \r\n            <ng-container *ngFor=\"let validation of validation_messages.description\">\r\n              <span class=\"error-message\" *ngIf=\"(isSubmitted || videoForm.get('description').touched) && videoForm.get('description').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>            \r\n          </ion-list>\r\n        </form>    \r\n        <div class=\"position-relative\" style=\"text-align: center;background: #f1f0f5;\">\r\n          <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n          <img *ngIf=\"!videoFileSelected\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/loading.jpg\">\r\n        </div>        \r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-footer class=\"sticky-footer icon-footer sticky-footer-bablu\">\r\n      <ion-list class=\"ion-no-margin\">\r\n        <ion-item>\r\n          <img (click)=\"selectVideo()\" src=\"../../assets/images/photo.svg\" />\r\n        </ion-item>\r\n        <ion-item >          \r\n          <img (click)=\"captureVideo()\" src=\"../../assets/images/film.svg\" />\r\n        </ion-item>        \r\n      </ion-list>\r\n    </ion-footer>       -->\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showMusic==2\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showMusic=1\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Select Music</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"musicVolume()\" class=\"text-green\">Next</ion-label>\r\n          <!-- (click)=\"musicVolume()\" -->\r\n          <!-- <ion-fab-button class=\"btn-next\" size=\"small\" slot=\"end\"><ion-icon ios=\"ios-send\" md=\"md-send\"></ion-icon></ion-fab-button>           -->\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-segment class=\"top-segment\" (ionChange)=\"musicList($event)\" >\r\n          <ion-segment-button value=\"music\" checked>\r\n            <span>Music</span>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"playlist\">\r\n            <span>Playlist</span>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n        <div [ngSwitch]=\"musicTypes\">\r\n          <div *ngSwitchCase=\"'music'\">\r\n            <ion-toolbar class=\"searchbar\">\r\n              <ion-searchbar type=\"text\" (ionInput)=\"searchChanged($event)\"></ion-searchbar>\r\n            </ion-toolbar>\r\n            <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"datagenres\">              \r\n              <ion-segment class=\"ion-no-padding\" *ngIf=\"searchMusicData\">               \r\n                <ion-segment-button>Search Result</ion-segment-button>              \r\n              </ion-segment>\r\n              <ion-segment *ngIf=\"!searchMusicData\" class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\" >               \r\n                <ion-segment-button  value=\"{{genres.id}}\" *ngFor=\"let genres of datagenres; let i = index;\" [checked]=\"i==0 ? true : false\">{{genres.name}}</ion-segment-button>              \r\n              </ion-segment>\r\n            </ion-toolbar>\r\n            \r\n            <div [ngSwitch]=\"selectMusicList\" *ngIf=\"datagenres\">\r\n              <div *ngIf=\"!searchMusicData\">\r\n              <div *ngFor=\"let musicArray of datagenres; let m = index;\">                 \r\n                <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"musicArray.id\">                    \r\n                  <div *ngIf=\"!musicArray.musics.length == 0\">\r\n                  <ion-item (click)=\"musicSelect([j+1,musicArray.id,music.id,music.filename,music.title,music.duration])\" [ngClass]=\"(j+1)==activeMusic ? musicArray.id == activetab ? 'active' : '' : '' \" *ngFor=\"let music of musicArray.musics; let j = index;\">\r\n                        <ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon>\r\n                        <ion-label>{{music.title}}</ion-label>\r\n                        <ion-text>{{music.duration}}</ion-text>                                        \r\n                  </ion-item>                            \r\n                  </div>\r\n                  <div *ngIf=\"musicArray.musics.length == 0\">\r\n                    <ion-item class=\"no-data\">\r\n                      <ion-label>No Music Data</ion-label>\r\n                    </ion-item>                           \r\n                  </div>\r\n                </ion-list>              \r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"searchMusicData\">                 \r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\">\r\n                <div *ngIf=\"!datagenres.length == 0\">\r\n                  <ion-item [ngClass]= \"(j+1)==activeMusic ? 'active' : '' \" (click)=\"musicSelect([(j+1),1,music.id,music.filename,music.title,music.duration])\" *ngFor=\"let music of datagenres; let j = index;\">\r\n                    <ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon>\r\n                        <ion-label>{{music.title}}</ion-label>\r\n                        <ion-text>{{music.duration}}</ion-text>\r\n                  </ion-item>                               \r\n                </div>            \r\n              </ion-list>              \r\n            </div>\r\n          </div>\r\n\r\n            <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"!datagenres\">              \r\n              <ion-segment class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\" >\r\n                <ion-segment-button value=\"hiphop\" checked>\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"classical\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"edm\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"folk\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"rock\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"jazz\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"indianfolk\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"blues\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"beats\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"trap\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"alternativehiphop\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n            <div [ngSwitch]=\"selectMusicList\" *ngIf=\"!datagenres\">\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'hiphop'\"> \r\n                <ion-item (click)=\"musicSelect=1\" [ngClass]=\"musicSelect==1?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=2\" [ngClass]=\"musicSelect==2?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=3\" [ngClass]=\"musicSelect==3?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=4\" [ngClass]=\"musicSelect==4?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>          \r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'classical'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'edm'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'folk'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'rock'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'jazz'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <div *ngSwitchCase=\"'playlist'\">\r\n            <ion-list *ngFor=\"let list of playList; let i = index; \">\r\n              <ion-item>\r\n                <ion-label (click)=\"playListeSelect(list?.id,i)\">\r\n                  <h3 class=\"list-person\">{{list?.playlist_name}}</h3>\r\n                  <span class=\"list-name\">{{list?.playlist_songs?.length}} Songs</span>\r\n                </ion-label>\r\n                <!-- <ion-icon slot=\"end\" ios=\"ios-more\" md=\"md-more\" ></ion-icon> -->\r\n                <div class=\"action-links\" slot=\"end\">\r\n                  <ion-icon *ngIf = \"customClass != i\" ios=\"ios-arrow-down\" md=\"ios-arrow-down\"></ion-icon> \r\n                  <ion-icon *ngIf = \"customClass == i\"ios=\"ios-arrow-up\" md=\"ios-arrow-up\"></ion-icon>\r\n                </div> \r\n              </ion-item>\r\n              <!-- <app-expandable expandHeight=\"300px\" class=\"timeline-block\" [expanded]=\"list.expanded\"> -->\r\n              <div [ngClass]=\"customClass == i ? 'active':'deactive'\">\r\n                <ion-item class=\"item-label item md in-list musicPlayList-item\" *ngFor=\"let song of songList;\" (click)=\"musicSelect([(j+1),2,song.id,song.filename,song.title,song.duration])\">\r\n                  <ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon>\r\n                  <ion-label class=\"list-name d-block\"> \r\n                    <h3 class=\"list-head\">{{song.title}}</h3>\r\n                    <ion-text slot=\"end\">{{song.duration}}</ion-text>  \r\n                  </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            <!-- </app-expandable> -->            \r\n            </ion-list>\r\n          </div>         \r\n        </div>        \r\n      </ion-col>           \r\n    </ion-row>    \r\n    <!-- <ion-footer class=\"musiclist green   sticky-footer sticky-footer-bablu\">\r\n      <app-audio-player [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n      </app-audio-player>    \r\n    </ion-footer> -->\r\n    <div class=\"musiclistFooter\">\r\n      <app-audio-player [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n      </app-audio-player>    \r\n    </div>\r\n  </ion-grid>   \r\n   \r\n </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/audio-player/audio-player.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/audio-player/audio-player.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddVideoAudioPlayerAudioPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<audio #player src=\"{{selectedAudio[0]}}\"></audio>\r\n<div class=\"musicWrapper\">\r\n    <ion-toolbar padding class=\"audio-list ion-no-padding\">\r\n        <div class=\"audio-listInner\">\r\n        <ion-fab-button (click)=\"play()\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n            <ng-container *ngIf=\"isLoading; else loaded\"><ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner></ng-container>\r\n            <ng-template #loaded>\r\n                <ion-icon [name]=\"isPlaying ? selectedAudio[1]!=0 ? 'play' : 'pause' : 'play'\">\r\n                </ion-icon>\r\n            </ng-template>\r\n        </ion-fab-button>\r\n        <div>\r\n            <div class=\"musicbar\">            \r\n                <ion-range min=\"0\" [max]=\"duration\" [value]=\"currentTime\" (ionChange)=\"seek($event)\" class=\"newmusiclist-range\" color=\"light\"></ion-range>                \r\n            </div>\r\n            <div>\r\n                <div class=\"music-timer-fav\">\r\n                    <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n                </div>\r\n                <div class=\"music-name\">\r\n                    <ion-label class=\"ion-text-center\">{{selectedAudio[2]}}</ion-label>\r\n                </div>   \r\n            </div>             \r\n        </div>\r\n    </div>\r\n        <!-- <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label> -->\r\n    </ion-toolbar>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/add-video/add-video-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/add-video/add-video-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AddVideoPageRoutingModule */

  /***/
  function srcAppAddVideoAddVideoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVideoPageRoutingModule", function () {
      return AddVideoPageRoutingModule;
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


    var _add_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-video.page */
    "./src/app/add-video/add-video.page.ts");

    var routes = [{
      path: '',
      component: _add_video_page__WEBPACK_IMPORTED_MODULE_3__["AddVideoPage"]
    }, {
      path: 'video-preview',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | video-preview-video-preview-module */
        "video-preview-video-preview-module").then(__webpack_require__.bind(null,
        /*! ./video-preview/video-preview.module */
        "./src/app/add-video/video-preview/video-preview.module.ts")).then(function (m) {
          return m.VideoPreviewPageModule;
        });
      }
    }];

    var AddVideoPageRoutingModule = function AddVideoPageRoutingModule() {
      _classCallCheck(this, AddVideoPageRoutingModule);
    };

    AddVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddVideoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-video/add-video.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/add-video/add-video.module.ts ***!
    \***********************************************/

  /*! exports provided: AddVideoPageModule */

  /***/
  function srcAppAddVideoAddVideoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVideoPageModule", function () {
      return AddVideoPageModule;
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


    var _add_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-video-routing.module */
    "./src/app/add-video/add-video-routing.module.ts");
    /* harmony import */


    var _add_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-video.page */
    "./src/app/add-video/add-video.page.ts");
    /* harmony import */


    var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./audio-player/audio-player.component */
    "./src/app/add-video/audio-player/audio-player.component.ts"); // import { AddVideoNextComponent } from './add-video-next/add-video-next.component';
    // import { AddVideoCompleteComponent } from './add-video-complete/add-video-complete.component';


    var AddVideoPageModule = function AddVideoPageModule() {
      _classCallCheck(this, AddVideoPageModule);
    };

    AddVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddVideoPageRoutingModule"]],
      entryComponents: [_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__["AudioPlayerComponent"]],
      declarations: [_add_video_page__WEBPACK_IMPORTED_MODULE_6__["AddVideoPage"], _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__["AudioPlayerComponent"]]
    })], AddVideoPageModule);
    /***/
  },

  /***/
  "./src/app/add-video/add-video.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/add-video/add-video.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddVideoAddVideoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea.form-control textarea {\n  height: 100%;\n  padding: 0;\n}\n\n.thumbnail-slider ion-slide {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.thumbnail-slider ion-slide ion-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  --min-height: 100%;\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.thumbnail-slider ion-slide ion-radio {\n  margin-top: -50px;\n}\n\n.no_footer {\n  padding-top: 50px;\n  height: 100vh;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.ios.main_content {\n  padding-top: 0;\n}\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px;\n}\n\nion-segment-button {\n  position: relative;\n}\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%;\n}\n\n.video-skeleton {\n  height: 200px;\n}\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px;\n}\n\n.btn-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  font-size: 28px;\n}\n\n.ml-30 {\n  margin-left: 30px;\n}\n\nion-radio {\n  position: absolute;\n  top: 5px;\n}\n\n.musiclistFooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.deactive {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\nion-footer.sticky-footer {\n  padding: 0;\n}\n\nion-footer.sticky-footer ion-list {\n  flex-wrap: nowrap;\n}\n\nion-footer.sticky-footer ion-list ion-item {\n  width: 50%;\n  margin: 0;\n  text-align: center;\n  background: #3da89e;\n  --background: #3da89e;\n}\n\nion-footer.sticky-footer ion-list ion-item img {\n  margin: auto;\n}\n\nion-footer.sticky-footer ion-list ion-item::after {\n  content: \"\";\n  width: 1px;\n  height: 30px;\n  background: #94e2db;\n  position: absolute;\n  top: 13px;\n  right: 0;\n}\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2)::after {\n  display: none;\n}\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2) {\n  background: #3da89e;\n  --background: #3da89e;\n}\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4;\n}\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0;\n}\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n  color: #fff !important;\n}\n\n.musicPlayList-item {\n  font-size: 0.85rem;\n  --padding-start: 10px;\n}\n\n.musicPlayList-item ion-icon {\n  margin-right: 5px;\n  color: #222;\n  font-size: 1rem;\n}\n\n.musicPlayList-item .list-name {\n  margin: 0;\n}\n\n.musicPlayList-item .list-name .list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0;\n  color: #222;\n}\n\n.musicPlayList-item .list-name ion-text {\n  display: block;\n  font-size: 0.7rem;\n  color: #000;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXGFkZC12aWRlb1xcYWRkLXZpZGVvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXZpZGVvL2FkZC12aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBbUMsWUFBQTtFQUFhLFVBQUE7QUNFaEQ7O0FEREE7RUFBNEIsa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNPbEU7O0FETkE7RUFBcUMsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUFtQix5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixzQkFBQTtBQ2dCako7O0FEZkE7RUFBa0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxvQkFBQTtLQUFBLGlCQUFBO0FDcUIzQzs7QURwQkE7RUFBc0MsaUJBQUE7QUN3QnRDOztBRHZCQTtFQUFXLGlCQUFBO0VBQWtCLGFBQUE7QUM0QjdCOztBRDFCQTtFQUFVLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxVQUFBO0VBQVcsV0FBQTtBQ2lDcEQ7O0FEaENBO0VBQVksMEJBQUE7QUNvQ1o7O0FEbkNBO0VBQXFCLHlCQUFBO0VBQTBCLHNCQUFBO0VBQXVCLHNCQUFBO0FDeUN0RTs7QUR4Q0E7RUFBK0IsU0FBQTtFQUFVLGtCQUFBO0VBQW1CLGlCQUFBO0FDOEM1RDs7QUQ3Q0E7RUFBb0MsV0FBQTtFQUFZLFlBQUE7RUFBYSx3Q0FBQTtFQUF5QyxrQkFBQTtBQ29EdEc7O0FEbkRBO0VBQTZDLFdBQUE7QUN1RDdDOztBRHBEQTtFQUFrQixjQUFBO0FDd0RsQjs7QURyREE7RUFBc0MsWUFBQTtBQ3lEdEM7O0FEeERBO0VBQW1CLGtCQUFBO0FDNERuQjs7QUQzREE7RUFBcUMsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFNBQUE7RUFBVSxVQUFBO0FDa0UvRTs7QURqRUE7RUFBZ0IsYUFBQTtBQ3FFaEI7O0FEcEVBO0VBQTRELFNBQUE7RUFBVSxZQUFBO0FDeUV0RTs7QUR2RUE7RUFBVyxrQkFBQTtFQUFtQixRQUFBO0VBQVUsTUFBQTtFQUFPLFVBQUE7RUFBVyxlQUFBO0FDK0UxRDs7QUQ3RUE7RUFBTyxpQkFBQTtBQ2lGUDs7QURoRkE7RUFBVSxrQkFBQTtFQUFtQixRQUFBO0FDcUY3Qjs7QURwRkE7RUFBaUIsZUFBQTtFQUFnQixTQUFBO0VBQVUsV0FBQTtBQzBGM0M7O0FEekZBO0VBQVUsYUFBQTtBQzZGVjs7QUQ1RkE7RUFBUSxjQUFBO0FDZ0dSOztBRC9GQTtFQUF5QixVQUFBO0FDbUd6Qjs7QURsR0M7RUFBYSxpQkFBQTtBQ3FHZDs7QURwR0U7RUFBUyxVQUFBO0VBQVcsU0FBQTtFQUFVLGtCQUFBO0VBQXVCLG1CQUFBO0VBQ3BELHFCQUFBO0FDMEdIOztBRHpHRztFQUFJLFlBQUE7QUM0R1A7O0FEMUdFO0VBQWdCLFdBQUE7RUFBWSxVQUFBO0VBQVcsWUFBQTtFQUN0QyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUFVLFFBQUE7QUNnSGI7O0FEL0dFO0VBQTZCLGFBQUE7QUNrSC9COztBRGpIRTtFQUEwQixtQkFBQTtFQUN6QixxQkFBQTtBQ29ISDs7QUQvR0M7RUFBVSxjQUFBO0FDbUhYOztBRGxIQztFQUFhLGFBQUE7QUNxSGQ7O0FEaEhBO0VBQ0ksc0JBQUE7QUNtSEo7O0FEakhBO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtBQ29IRDs7QURsSEE7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDcUhEOztBRG5IQTtFQUNDLFNBQUE7QUNzSEQ7O0FEcEhBO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDdUhEOztBRHJIQTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDd0hEIiwiZmlsZSI6InNyYy9hcHAvYWRkLXZpZGVvL2FkZC12aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdGV4dGFyZWEuZm9ybS1jb250cm9se2hlaWdodDogY2FsYygxLjVlbSArIDVyZW0gKyAycHgpO31cclxuaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB0ZXh0YXJlYXtoZWlnaHQ6IDEwMCU7cGFkZGluZzogMDt9XHJcbi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZXtwb3NpdGlvbjogcmVsYXRpdmU7Ym9yZGVyLXJhZGl1czogOHB4O292ZXJmbG93OiBoaWRkZW47fVxyXG4udGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGUgaW9uLWl0ZW17cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTstLW1pbi1oZWlnaHQ6IDEwMCU7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDt9XHJcbi5zd2lwZXItc2xpZGUgaW1ne3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtvYmplY3QtZml0OiBjb3Zlcjt9XHJcbi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZSBpb24tcmFkaW97bWFyZ2luLXRvcDogLTUwcHg7fVxyXG4ubm9fZm9vdGVye3BhZGRpbmctdG9wOiA1MHB4O2hlaWdodDogMTAwdmg7fVxyXG5cclxuaW9uLXJhbmdle3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTt0b3A6IC0zMHB4O3otaW5kZXg6IDk5O31cclxuLmF1ZGlvLWxpc3R7cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbXstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2NvbG9yOiAjRkZGICFpbXBvcnRhbnQ7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHttYXJnaW46IDA7bWFyZ2luLXJpZ2h0OiAyMHB4O292ZXJmbG93OiBpbmhlcml0O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b257d2lkdGg6IDI1cHg7aGVpZ2h0OiAyNXB4Oy0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3gtc2hhZG93OiBub25lO31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24gaW9uLWljb257Y29sb3I6ICNGRkY7fVxyXG5cclxuLy8gaW9zIGNzc1xyXG4uaW9zLm1haW5fY29udGVudHtwYWRkaW5nLXRvcDogMDt9XHJcblxyXG4vLyBpb24tc2tlbGV0b24tdGV4dCBjc3NcclxuLm11c2ljbGlzdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dHtoZWlnaHQ6IDMwcHg7fVxyXG5pb24tc2VnbWVudC1idXR0b257cG9zaXRpb246IHJlbGF0aXZlO31cclxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1za2VsZXRvbi10ZXh0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDEwMCU7bWFyZ2luOiAwO3dpZHRoOiA5NSU7fVxyXG4udmlkZW8tc2tlbGV0b257aGVpZ2h0OiAyMDBweDt9XHJcbnAgaW9uLXNrZWxldG9uLXRleHQsIC5yYWRpby1saXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e21hcmdpbjogMDtoZWlnaHQ6IDIwcHg7fVxyXG5cclxuLmJ0bi1jbG9zZXtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDA7IHRvcDogMDt6LWluZGV4OiA5O2ZvbnQtc2l6ZTogMjhweDt9XHJcblxyXG4ubWwtMzB7bWFyZ2luLWxlZnQ6IDMwcHg7fVxyXG5pb24tcmFkaW97cG9zaXRpb246IGFic29sdXRlO3RvcDo1cHh9XHJcbi5tdXNpY2xpc3RGb290ZXJ7cG9zaXRpb246IGZpeGVkO2JvdHRvbTogMDt3aWR0aDogMTAwJX1cclxuLmRlYWN0aXZle2Rpc3BsYXk6bm9uZTt9XHJcbi5hY3RpdmV7ZGlzcGxheTogYmxvY2s7fVxyXG5pb24tZm9vdGVyLnN0aWNreS1mb290ZXJ7cGFkZGluZzogMDtcclxuXHRpb24tbGlzdHsgICAgZmxleC13cmFwOiBub3dyYXA7XHJcblx0XHRpb24taXRlbXt3aWR0aDogNTAlO21hcmdpbjogMDt0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIGJhY2tncm91bmQ6ICMzZGE4OWU7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogIzNkYTg5ZTtcclxuXHRcdFx0aW1ne21hcmdpbjogYXV0bzt9XHJcblx0XHR9XHJcblx0XHRpb24taXRlbTo6YWZ0ZXJ7Y29udGVudDogJyc7d2lkdGg6IDFweDtoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICM5NGUyZGI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAxM3B4O3JpZ2h0OiAwO31cclxuXHRcdGlvbi1pdGVtOm50aC1jaGlsZCgyKTo6YWZ0ZXJ7ZGlzcGxheTogbm9uZTt9XHJcblx0XHRpb24taXRlbTpudGgtY2hpbGQoMil7ICAgIGJhY2tncm91bmQ6ICMzZGE4OWU7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogIzNkYTg5ZTt9XHJcblx0fVxyXG59XHJcblxyXG5pb24taXRlbS5mbG9hdGluZ0l0ZW17XHJcblx0aW9uLWxhYmVse2NvbG9yOiNhNWE0YTR9XHJcblx0aW9uLXRleHRhcmVhe21hcmdpbi10b3A6MH1cclxufVxyXG5cclxuLy8gaGl0ZXNoIGNzcyBzdHJ0XHJcblxyXG4uc3VicHJvZmlsZV90YWJzIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4ubXVzaWNQbGF5TGlzdC1pdGVtIHtcclxuXHRmb250LXNpemU6IDAuODVyZW07XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG59XHJcbi5tdXNpY1BsYXlMaXN0LWl0ZW0gaW9uLWljb24ge1xyXG5cdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdGNvbG9yOiAjMjIyO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4ubXVzaWNQbGF5TGlzdC1pdGVtIC5saXN0LW5hbWUge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4ubXVzaWNQbGF5TGlzdC1pdGVtIC5saXN0LW5hbWUgLmxpc3QtaGVhZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXNpemU6IDAuODc1cmVtO1xyXG5cdG1hcmdpbjogMDtcclxuXHRjb2xvcjogIzIyMjtcclxufVxyXG4ubXVzaWNQbGF5TGlzdC1pdGVtIC5saXN0LW5hbWUgaW9uLXRleHQge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMC43MHJlbTtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAucmFuZ2Uta25vYi1oYW5kbGUgLnJhbmdlLWtub2J7XHJcbiAgICBcclxufVxyXG4vLyBoaXRlc2ggY3NzIGVuZHMiLCJpb24tdGV4dGFyZWEuZm9ybS1jb250cm9sIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLW1pbi1oZWlnaHQ6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4ubm9fZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTMwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uYXVkaW8tbGlzdCB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5pb3MubWFpbl9jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tdXNpY2xpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLnZpZGVvLXNrZWxldG9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxucCBpb24tc2tlbGV0b24tdGV4dCwgLnJhZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ0bi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ubWwtMzAge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbn1cblxuLm11c2ljbGlzdEZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tZm9vdGVyLnN0aWNreS1mb290ZXIge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWZvb3Rlci5zdGlja3ktZm9vdGVyIGlvbi1saXN0IHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5pb24tZm9vdGVyLnN0aWNreS1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzNkYTg5ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjM2RhODllO1xufVxuaW9uLWZvb3Rlci5zdGlja3ktZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbmlvbi1mb290ZXIuc3RpY2t5LWZvb3RlciBpb24tbGlzdCBpb24taXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM5NGUyZGI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxM3B4O1xuICByaWdodDogMDtcbn1cbmlvbi1mb290ZXIuc3RpY2t5LWZvb3RlciBpb24tbGlzdCBpb24taXRlbTpudGgtY2hpbGQoMik6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1mb290ZXIuc3RpY2t5LWZvb3RlciBpb24tbGlzdCBpb24taXRlbTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiAjM2RhODllO1xuICAtLWJhY2tncm91bmQ6ICMzZGE4OWU7XG59XG5cbmlvbi1pdGVtLmZsb2F0aW5nSXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogI2E1YTRhNDtcbn1cbmlvbi1pdGVtLmZsb2F0aW5nSXRlbSBpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc3VicHJvZmlsZV90YWJzIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm11c2ljUGxheUxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG4ubXVzaWNQbGF5TGlzdC1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5tdXNpY1BsYXlMaXN0LWl0ZW0gLmxpc3QtbmFtZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm11c2ljUGxheUxpc3QtaXRlbSAubGlzdC1uYW1lIC5saXN0LWhlYWQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4ubXVzaWNQbGF5TGlzdC1pdGVtIC5saXN0LW5hbWUgaW9uLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-video/add-video.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-video/add-video.page.ts ***!
    \*********************************************/

  /*! exports provided: AddVideoPage */

  /***/
  function srcAppAddVideoAddVideoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVideoPage", function () {
      return AddVideoPage;
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


    var _music_volume_modal_music_volume_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./music-volume-modal/music-volume-modal.component */
    "./src/app/add-video/music-volume-modal/music-volume-modal.component.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/media/ngx */
    "./node_modules/@ionic-native/media/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_music_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../services/music.service */
    "./src/app/services/music.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./audio-player/audio-player.component */
    "./src/app/add-video/audio-player/audio-player.component.ts");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/ngx/index.js");

    var baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;
    var MAX_FILE_SIZE = 500 * 1024 * 1024; // const ALLOWED_MIME_TYPE = ["video/mp4", "video/3gpp", "video/3gp", "video/avi", "video/mov", "video/mkw"];

    var AddVideoPage = /*#__PURE__*/function () {
      // public list: any = [];
      function AddVideoPage(commonService, musicService, platform, loadingCtrl, toastCtrl, file, transfer, media, camera, ngZone, previewAnyFile, formBuilder, datePipe, storage, nutritionService, cd, mediaCapture) {
        var _this = this;

        _classCallCheck(this, AddVideoPage);

        this.commonService = commonService;
        this.musicService = musicService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.transfer = transfer;
        this.media = media;
        this.camera = camera;
        this.ngZone = ngZone;
        this.previewAnyFile = previewAnyFile;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.storage = storage;
        this.nutritionService = nutritionService;
        this.cd = cd;
        this.mediaCapture = mediaCapture;
        this.isSubmitted = false;
        this.audioFile = 'public/storage/audio/into_20180418_173147_audio.mp3';
        this.is_playing = false;
        this.is_in_play = false;
        this.is_ready = false;
        this.position = 0;
        this.videoFileSelected = false;
        this.isUploading = false;
        this.uploadPercent = 0;
        this.showMusic = 1;
        this.musicTypes = 'music';
        this.selectMusicList = 'hiphop';
        this.searchMusicData = false;
        this.musicChanged = 0;
        this.customClass = 0;
        this.songList = [];
        this.visibility = false;
        this['validation_messages'] = {
          title: [{
            type: 'required',
            message: 'Title is required.'
          }, {
            type: 'maxlength',
            message: 'Title cannot be more than 250 characters long'
          }],
          description: [{
            type: 'required',
            message: 'Description is required.'
          }, {
            type: 'maxlength',
            message: 'Description cannot be more than 1000 characters long'
          }]
        };
        this.sliderOpts = {
          zoom: true,
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 5
        }; // this.list = [
        //   { expanded: false },
        // ]; 

        this.platform.ready().then(function () {
          if (_this.platform.is('ios')) {
            _this.storageDirectory = _this.file.dataDirectory;
          } else if (_this.platform.is('android')) {
            _this.storageDirectory = _this.file.externalDataDirectory;
          } else {
            _this.storageDirectory = _this.file.cacheDirectory;
          }
        });
      }

      _createClass(AddVideoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.videoForm = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(250)])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(1000)]))
          }); // // this.prepareAudioFile();
          // this.playListeSelect(8);

          this.getGenres();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.isSubmitted = true;

          if (this.selectedVideo == null) {
            this.commonService.presentAlert("Video", "Please select video then post !", ['Close'], '');
            return false;
          } else {
            this.getGenres();
            this.showMusic = 2;
          }
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.videoForm.controls;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          setTimeout(function () {
            _this2.data = {};
          }, 5000);
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          this.commonService.presentLoader();
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          this.commonService.dismissLoader();
        }
      }, {
        key: "cancelSelection",
        value: function cancelSelection() {
          this.selectedVideo = null;
          this.uploadedVideo = null;
        }
      }, {
        key: "filepreview",
        value: function filepreview() {
          this.previewAnyFile.preview(this.selectedVideo).then(function (res) {
            return console.log(res);
          })["catch"](function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "removefilepreview",
        value: function removefilepreview() {
          this.visibility = false;
          this.selectedVideo = null;
          this.videoFileSelected = false;
          this.commonService.presentToast('Selected video remove');
          console.log('Selected video remove');
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.cd.detectChanges();
        }
      }, {
        key: "captureVideo",
        value: function captureVideo() {
          var _this3 = this;

          var options = {
            limit: 1,
            duration: 600,
            quality: 100
          };
          this.mediaCapture.captureVideo(options).then(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var filename, dirpath;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log("DAta: "+data[0].type);
                      this.showLoader();
                      this.uploadedVideo = null;
                      filename = data[0].name;
                      dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
                      dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                      this.selectedVideoFile(dirpath, filename);
                      this.visibility = true;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "selectVideo",
        value: function selectVideo() {
          var _this4 = this;

          var options = {
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          };
          this.camera.getPicture(options).then(function (videoUrl) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var filename, dirpath;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (videoUrl) {
                        this.showLoader();
                        this.uploadedVideo = null;
                        filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
                        dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                        dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                        this.selectedVideoFile(dirpath, filename);
                        this.visibility = true;
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            console.log(err);
            _this4.visibility = false;

            _this4.commonService.presentAlert("Plugin Error", "Cordova not available", ['Close'], '');
          });
        }
      }, {
        key: "selectedVideoFile",
        value: function selectedVideoFile(dirpath, filename) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var dirUrl, retrievedFile;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.file.resolveDirectoryUrl(dirpath);

                  case 3:
                    dirUrl = _context3.sent;
                    _context3.next = 6;
                    return this.file.getFile(dirUrl, filename, {});

                  case 6:
                    retrievedFile = _context3.sent;
                    _context3.next = 13;
                    break;

                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](0);
                    this.dismissLoader();
                    this.commonService.presentAlert("Error", "Something went wrong.", ['Ok'], '');

                  case 13:
                    retrievedFile.file(function (data) {
                      _this5.dismissLoader();

                      if (data.size > MAX_FILE_SIZE) {
                        return _this5.commonService.presentAlert("Error", "You cannot upload more than 100 mb.", ['Ok'], '');
                      } // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
                      // if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}


                      _this5.selectedVideo = retrievedFile.nativeURL;
                      console.log(JSON.stringify(_this5.selectedVideo));
                      console.log(_this5.selectedVideo);
                      console.log('this.selectedVideo');
                      localStorage.setItem('selectedVideo', JSON.stringify(_this5.selectedVideo));
                      _this5.videoFileSelected = !_this5.videoFileSelected;

                      _this5.refresh();
                    });

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 9]]);
          }));
        } //----------------Music Code------------//

      }, {
        key: "searchChanged",
        value: function searchChanged(musicname) {
          var _this6 = this;

          var searchTerm = musicname.srcElement.value;
          this.nutritionService.searchMusic({
            "searchQuery": searchTerm
          }).subscribe(function (search) {
            if (searchTerm == '') {
              _this6.searchMusicData = false;

              _this6.getGenres();
            } else {
              _this6.datagenres = search.musicList;
              _this6.searchMusicData = true;
            }
          });
        }
      }, {
        key: "getGenres",
        value: function getGenres() {
          var _this7 = this;

          this.musicService.getGenres().subscribe(function (data) {
            _this7.datagenres = data.genres;
          });
          this.selectMusicList = '1';
          this.activeMusic = 1;
          this.activetab = 1;
          this.musicService.getPlaylist().subscribe(function (data) {
            _this7.playList = data.status; // console.log("this.playList: " + JSON.stringify(this.playList));
          });
        }
      }, {
        key: "playListeSelect",
        value: function playListeSelect(playListId, eltration) {
          var _this8 = this;

          this.songList = [];
          this.customClass = eltration;
          this.musicService.getPlaylistById({
            "playlistId": playListId
          }).subscribe(function (data) {
            _this8.playListData = data.status;
            data.status.playlist_songs.forEach(function (el) {
              _this8.songList.push(el.songs_details);
            }); // console.log("this.songList:"+JSON.stringify(this.songList));
          }, function (err) {
            _this8.commonService.presentToast("Something went Wrong.");
          });
        }
      }, {
        key: "selectMusic",
        value: function selectMusic(ev) {
          this.selectMusicList = ev.detail.value;
        }
      }, {
        key: "musicSelect",
        value: function musicSelect(ev) {
          this.activeMusic = ev[0];
          this.activetab = ev[1];
          this.musicId = ev[2];
          this.selectedAudioFile = ev[3]; // audio file 

          this.audioFilename = ev[4]; // audio Name

          this.audioFileDuration = ev[5]; // audio duration  

          this.prepareAudioFile();
        }
      }, {
        key: "musicVolume",
        value: function musicVolume() {
          this.AudioPlayer.pause();
          var url = baseUrl + "api/auth/videoPost";
          var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
          var fileData = {
            furl: url,
            fname: filename,
            selectedVideo: this.selectedVideo,
            fTitle: this.videoForm.value.title,
            fDescription: this.videoForm.value.description,
            fSelectedMusicId: this.musicId,
            fSelectedGeneras: this.activetab,
            returnUrl: 'video-preview'
          };
          this.commonService.presentModal(_music_volume_modal_music_volume_modal_component__WEBPACK_IMPORTED_MODULE_2__["MusicVolumeModalComponent"], 'bottomModal', fileData);
        }
      }, {
        key: "musicList",
        value: function musicList(ev) {
          this.musicTypes = ev.detail.value;
        }
      }, {
        key: "prepareAudioFile",
        value: function prepareAudioFile() {
          var _this9 = this;

          this.platform.ready().then(function () {
            _this9.musicChanged = 1;
            _this9.audioFile = baseUrl + "public/storage/audio/" + _this9.selectedAudioFile;
          });
        }
      }]);

      return AddVideoPage;
    }();

    AddVideoPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _services_music_service__WEBPACK_IMPORTED_MODULE_13__["MusicService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]
      }, {
        type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__["PreviewAnyFile"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"]
      }, {
        type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_15__["NutritionService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_16__["AudioPlayerComponent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_16__["AudioPlayerComponent"])], AddVideoPage.prototype, "AudioPlayer", void 0);
    AddVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-video',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-video.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/add-video.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-video.page.scss */
      "./src/app/add-video/add-video.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _services_music_service__WEBPACK_IMPORTED_MODULE_13__["MusicService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__["PreviewAnyFile"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_15__["NutritionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"]])], AddVideoPage);
    /***/
  },

  /***/
  "./src/app/add-video/audio-player/audio-player.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/add-video/audio-player/audio-player.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddVideoAudioPlayerAudioPlayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n.audio-list > div {\n  display: flex;\n}\n\n.audio-list > * {\n  display: inline-block;\n}\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px;\n}\n\nion-range ion-label {\n  margin-right: 50px;\n}\n\nion-fab-button {\n  min-width: 40px;\n}\n\nion-fab-button + div {\n  width: 100%;\n}\n\nion-fab-button + div > div {\n  display: flex;\n}\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 35px;\n}\n\n.music-spinner {\n  --color: #26a69a;\n}\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 28px;\n}\n\n.music-timer-fav ion-icon {\n  margin: 0 5px;\n}\n\n.musicbar {\n  padding-right: 50px;\n}\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.musicWrapper ion-toolbar .audio-listInner {\n  display: block;\n  background: #26a69a;\n  height: 56px;\n  margin-top: 10px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n  position: absolute;\n  width: 90%;\n  top: 2px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n  margin-top: 20px;\n  margin-left: 10px;\n  padding-left: 50px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL2F1ZGlvLXBsYXllci9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxhZGQtdmlkZW9cXGF1ZGlvLXBsYXllclxcYXVkaW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtdmlkZW8vYXVkaW8tcGxheWVyL2F1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFVBQUE7RUFBVyxnQkFBQTtFQUFpQixtQkFBQTtBQ0l4Qzs7QURIQTtFQUFnQixhQUFBO0FDT2hCOztBRE5BO0VBQWMscUJBQUE7QUNVZDs7QURUQTtFQUFVLGlCQUFBO0VBQWtCLGFBQUE7QUNjNUI7O0FEYkE7RUFBb0Isa0JBQUE7QUNpQnBCOztBRGhCQTtFQUFlLGVBQUE7QUNvQmY7O0FEbkJBO0VBQW1CLFdBQUE7QUN1Qm5COztBRHRCQTtFQUF1QixhQUFBO0FDMEJ2Qjs7QUR6QkE7RUFBa0MsV0FBQTtFQUFZLGlCQUFBO0FDOEI5Qzs7QUQ3QkE7RUFBZSxnQkFBQTtBQ2lDZjs7QUQvQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDa0NKOztBRGhDQTtFQUNJLGFBQUE7QUNtQ0o7O0FEakNBO0VBQ0ksbUJBQUE7QUNvQ0o7O0FEaENJO0VBQVksa0JBQUE7RUFBbUIsZ0JBQUE7QUNxQ25DOztBRHBDUTtFQUFpQixjQUFBO0VBQWUsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLGdCQUFBO0FDMEN6RTs7QUR4Q2dCO0VBQVUsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLFFBQUE7QUM2Q3hEOztBRDNDWTtFQUFZLGdCQUFBO0VBQWlCLGlCQUFBO0VBQWtCLGtCQUFBO0FDZ0QzRDs7QUQvQ2dCO0VBQVUsV0FBQTtBQ2tEMUIiLCJmaWxlIjoic3JjL2FwcC9hZGQtdmlkZW8vYXVkaW8tcGxheWVyL2F1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdWRpby1saXN0e3BhZGRpbmc6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO31cclxuLmF1ZGlvLWxpc3Q+ZGl2e2Rpc3BsYXk6IGZsZXg7fVxyXG4uYXVkaW8tbGlzdD4qe2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbmlvbi1yYW5nZXstLWtub2Itc2l6ZTogMThweDstLWhlaWdodDogMnB4O31cclxuaW9uLXJhbmdlIGlvbi1sYWJlbHttYXJnaW4tcmlnaHQ6IDUwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbnttaW4td2lkdGg6IDQwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXZ7d2lkdGg6IDEwMCU7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXY+ZGl2e2Rpc3BsYXk6IGZsZXg7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXY+ZGl2ICtpb24tbGFiZWx7Y29sb3I6ICNGRkY7bWFyZ2luLWxlZnQ6IDM1cHg7fVxyXG4ubXVzaWMtc3Bpbm5lcnstLWNvbG9yOiAjMjZhNjlhO31cclxuXHJcbi5tdXNpYy10aW1lci1mYXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDI4cHg7XHJcbn1cclxuLm11c2ljLXRpbWVyLWZhdiBpb24taWNvbiB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5tdXNpY2JhciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubXVzaWNXcmFwcGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLmF1ZGlvLWxpc3RJbm5lcntkaXNwbGF5OiBibG9jaztiYWNrZ3JvdW5kOiAjMjZhNjlhO2hlaWdodDogNTZweDttYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAubXVzaWNiYXJ7XHJcbiAgICAgICAgICAgICAgICBpb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA5MCU7dG9wOiAycHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tdXNpYy1uYW1le21hcmdpbi10b3A6IDIwcHg7bWFyZ2luLWxlZnQ6IDEwcHg7cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse2NvbG9yOiAjRkZGO31cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hdWRpby1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmF1ZGlvLWxpc3QgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXVkaW8tbGlzdCA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1yYW5nZSB7XG4gIC0ta25vYi1zaXplOiAxOHB4O1xuICAtLWhlaWdodDogMnB4O1xufVxuXG5pb24tcmFuZ2UgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24gKyBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWZhYi1idXR0b24gKyBkaXYgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiArIGRpdiA+IGRpdiArIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLm11c2ljLXNwaW5uZXIge1xuICAtLWNvbG9yOiAjMjZhNjlhO1xufVxuXG4ubXVzaWMtdGltZXItZmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyOHB4O1xufVxuXG4ubXVzaWMtdGltZXItZmF2IGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLm11c2ljYmFyIHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIgLmF1ZGlvLWxpc3RJbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMjZhNjlhO1xuICBoZWlnaHQ6IDU2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5hdWRpby1saXN0SW5uZXIgLm11c2ljYmFyIGlvbi1yYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgdG9wOiAycHg7XG59XG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5hdWRpby1saXN0SW5uZXIgLm11c2ljLW5hbWUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAuYXVkaW8tbGlzdElubmVyIC5tdXNpYy1uYW1lIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjRkZGO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-video/audio-player/audio-player.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/add-video/audio-player/audio-player.component.ts ***!
    \******************************************************************/

  /*! exports provided: AudioPlayerComponent */

  /***/
  function srcAppAddVideoAudioPlayerAudioPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var AudioPlayerComponent = /*#__PURE__*/function () {
      function AudioPlayerComponent() {
        _classCallCheck(this, AudioPlayerComponent);

        this.isPlaying = false;
        this.isLoading = false;
        this.currentTime = 0;
        this.duration = 0;
      }

      _createClass(AudioPlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._player = this.playerElementRef.nativeElement;

          this._bindPlayerEvents();
        }
      }, {
        key: "play",
        value: function play() {
          this.selectedAudio[1] = 0;
          this._player.paused ? this._player.play() : this._player.pause();
        }
      }, {
        key: "pause",
        value: function pause() {
          this._player.pause();
        }
      }, {
        key: "seek",
        value: function seek(_ref) {
          var value = _ref.detail.value;
          this._player.currentTime = value;
        }
      }, {
        key: "_bindPlayerEvents",
        value: function _bindPlayerEvents() {
          var _this10 = this;

          this._player.addEventListener('playing', function () {
            _this10.isPlaying = true;
          });

          this._player.addEventListener('pause', function () {
            _this10.isPlaying = false;
          });

          this._player.addEventListener('timeupdate', function () {
            _this10.currentTime = Math.floor(_this10._player.currentTime);
          });

          this._player.addEventListener('seeking', function () {
            _this10.isLoading = true;
          });

          this._player.addEventListener('seeked', function () {
            _this10.isLoading = false;
          });

          this._player.addEventListener('loadstart', function () {
            _this10.isLoading = true;
          });

          this._player.addEventListener('loadeddata', function () {
            _this10.isLoading = false;
            _this10.duration = Math.floor(_this10._player.duration);
          });
        }
      }]);

      return AudioPlayerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AudioPlayerComponent.prototype, "selectedAudio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AudioPlayerComponent.prototype, "playerElementRef", void 0);
    AudioPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audio-player',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audio-player.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/audio-player/audio-player.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./audio-player.component.scss */
      "./src/app/add-video/audio-player/audio-player.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../.././app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AudioPlayerComponent);
    /***/
  }
}]);
//# sourceMappingURL=add-video-add-video-module-es5.js.map