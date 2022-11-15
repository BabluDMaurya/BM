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


    __webpack_exports__["default"] = "ion-textarea.form-control textarea {\n  height: 100%;\n  padding: 0;\n}\n\n.thumbnail-slider ion-slide {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.thumbnail-slider ion-slide ion-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  --min-height: 100%;\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.thumbnail-slider ion-slide ion-radio {\n  margin-top: -50px;\n}\n\n.no_footer {\n  padding-top: 50px;\n  height: 100vh;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.ios.main_content {\n  padding-top: 0;\n}\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px;\n}\n\nion-segment-button {\n  position: relative;\n}\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%;\n}\n\n.video-skeleton {\n  height: 200px;\n}\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px;\n}\n\n.btn-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  font-size: 28px;\n}\n\n.ml-30 {\n  margin-left: 30px;\n}\n\nion-radio {\n  position: absolute;\n  top: 5px;\n}\n\n.musiclistFooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n\n.deactive {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\nion-footer.sticky-footer {\n  padding: 0;\n}\n\nion-footer.sticky-footer ion-list {\n  flex-wrap: nowrap;\n}\n\nion-footer.sticky-footer ion-list ion-item {\n  width: 50%;\n  margin: 0;\n  text-align: center;\n  background: #3da89e;\n  --background: #3da89e;\n}\n\nion-footer.sticky-footer ion-list ion-item img {\n  margin: auto;\n}\n\nion-footer.sticky-footer ion-list ion-item::after {\n  content: \"\";\n  width: 1px;\n  height: 30px;\n  background: #94e2db;\n  position: absolute;\n  top: 13px;\n  right: 0;\n}\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2)::after {\n  display: none;\n}\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2) {\n  background: #3da89e;\n  --background: #3da89e;\n}\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4;\n}\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0;\n}\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n  color: #fff !important;\n}\n\n.musicPlayList-item {\n  font-size: 0.85rem;\n  --padding-start: 10px;\n}\n\n.musicPlayList-item ion-icon {\n  margin-right: 5px;\n  color: #222;\n  font-size: 1rem;\n}\n\n.musicPlayList-item .list-name {\n  margin: 0;\n}\n\n.musicPlayList-item .list-name .list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0;\n  color: #222;\n}\n\n.musicPlayList-item .list-name ion-text {\n  display: block;\n  font-size: 0.7rem;\n  color: #000;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxhZGQtdmlkZW9cXGFkZC12aWRlby5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC12aWRlby9hZGQtdmlkZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQW1DLFlBQUE7RUFBYSxVQUFBO0FDRWhEOztBRERBO0VBQTRCLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLGdCQUFBO0FDT2xFOztBRE5BO0VBQXFDLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsc0JBQUE7QUNnQmpKOztBRGZBO0VBQWtCLFdBQUE7RUFBWSxZQUFBO0VBQWEsb0JBQUE7S0FBQSxpQkFBQTtBQ3FCM0M7O0FEcEJBO0VBQXNDLGlCQUFBO0FDd0J0Qzs7QUR2QkE7RUFBVyxpQkFBQTtFQUFrQixhQUFBO0FDNEI3Qjs7QUQxQkE7RUFBVSxrQkFBQTtFQUFtQixXQUFBO0VBQVksVUFBQTtFQUFXLFdBQUE7QUNpQ3BEOztBRGhDQTtFQUFZLDBCQUFBO0FDb0NaOztBRG5DQTtFQUFxQix5QkFBQTtFQUEwQixzQkFBQTtFQUF1QixzQkFBQTtBQ3lDdEU7O0FEeENBO0VBQStCLFNBQUE7RUFBVSxrQkFBQTtFQUFtQixpQkFBQTtBQzhDNUQ7O0FEN0NBO0VBQW9DLFdBQUE7RUFBWSxZQUFBO0VBQWEsd0NBQUE7RUFBeUMsa0JBQUE7QUNvRHRHOztBRG5EQTtFQUE2QyxXQUFBO0FDdUQ3Qzs7QURwREE7RUFBa0IsY0FBQTtBQ3dEbEI7O0FEckRBO0VBQXNDLFlBQUE7QUN5RHRDOztBRHhEQTtFQUFtQixrQkFBQTtBQzREbkI7O0FEM0RBO0VBQXFDLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxTQUFBO0VBQVUsVUFBQTtBQ2tFL0U7O0FEakVBO0VBQWdCLGFBQUE7QUNxRWhCOztBRHBFQTtFQUE0RCxTQUFBO0VBQVUsWUFBQTtBQ3lFdEU7O0FEdkVBO0VBQVcsa0JBQUE7RUFBbUIsUUFBQTtFQUFVLE1BQUE7RUFBTyxVQUFBO0VBQVcsZUFBQTtBQytFMUQ7O0FEN0VBO0VBQU8saUJBQUE7QUNpRlA7O0FEaEZBO0VBQVUsa0JBQUE7RUFBbUIsUUFBQTtBQ3FGN0I7O0FEcEZBO0VBQWlCLGVBQUE7RUFBZ0IsU0FBQTtFQUFVLFdBQUE7QUMwRjNDOztBRHpGQTtFQUFVLGFBQUE7QUM2RlY7O0FENUZBO0VBQVEsY0FBQTtBQ2dHUjs7QUQvRkE7RUFBeUIsVUFBQTtBQ21HekI7O0FEbEdDO0VBQWEsaUJBQUE7QUNxR2Q7O0FEcEdFO0VBQVMsVUFBQTtFQUFXLFNBQUE7RUFBVSxrQkFBQTtFQUF1QixtQkFBQTtFQUNwRCxxQkFBQTtBQzBHSDs7QUR6R0c7RUFBSSxZQUFBO0FDNEdQOztBRDFHRTtFQUFnQixXQUFBO0VBQVksVUFBQTtFQUFXLFlBQUE7RUFDdEMsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFBVSxRQUFBO0FDZ0hiOztBRC9HRTtFQUE2QixhQUFBO0FDa0gvQjs7QURqSEU7RUFBMEIsbUJBQUE7RUFDekIscUJBQUE7QUNvSEg7O0FEL0dDO0VBQVUsY0FBQTtBQ21IWDs7QURsSEM7RUFBYSxhQUFBO0FDcUhkOztBRGhIQTtFQUNJLHNCQUFBO0FDbUhKOztBRGpIQTtFQUNDLGtCQUFBO0VBQ0EscUJBQUE7QUNvSEQ7O0FEbEhBO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3FIRDs7QURuSEE7RUFDQyxTQUFBO0FDc0hEOztBRHBIQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ3VIRDs7QURySEE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3dIRCIsImZpbGUiOiJzcmMvYXBwL2FkZC12aWRlby9hZGQtdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbHtoZWlnaHQ6IGNhbGMoMS41ZW0gKyA1cmVtICsgMnB4KTt9XHJcbmlvbi10ZXh0YXJlYS5mb3JtLWNvbnRyb2wgdGV4dGFyZWF7aGVpZ2h0OiAxMDAlO3BhZGRpbmc6IDA7fVxyXG4udGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGV7cG9zaXRpb246IHJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDhweDtvdmVyZmxvdzogaGlkZGVuO31cclxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1pdGVte3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7LS1taW4taGVpZ2h0OiAxMDAlOy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7fVxyXG4uc3dpcGVyLXNsaWRlIGltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7b2JqZWN0LWZpdDogY292ZXI7fVxyXG4udGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGUgaW9uLXJhZGlve21hcmdpbi10b3A6IC01MHB4O31cclxuLm5vX2Zvb3RlcntwYWRkaW5nLXRvcDogNTBweDtoZWlnaHQ6IDEwMHZoO31cclxuXHJcbmlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7dG9wOiAtMzBweDt6LWluZGV4OiA5OTt9XHJcbi5hdWRpby1saXN0e3BhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtjb2xvcjogI0ZGRiAhaW1wb3J0YW50O3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luOiAwO21hcmdpbi1yaWdodDogMjBweDtvdmVyZmxvdzogaW5oZXJpdDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9ue3dpZHRoOiAyNXB4O2hlaWdodDogMjVweDstLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50Oy0tYm94LXNoYWRvdzogbm9uZTt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29ue2NvbG9yOiAjRkZGO31cclxuXHJcbi8vIGlvcyBjc3NcclxuLmlvcy5tYWluX2NvbnRlbnR7cGFkZGluZy10b3A6IDA7fVxyXG5cclxuLy8gaW9uLXNrZWxldG9uLXRleHQgY3NzXHJcbi5tdXNpY2xpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAzMHB4O31cclxuaW9uLXNlZ21lbnQtYnV0dG9ue3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tc2tlbGV0b24tdGV4dHtwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiAxMDAlO21hcmdpbjogMDt3aWR0aDogOTUlO31cclxuLnZpZGVvLXNrZWxldG9ue2hlaWdodDogMjAwcHg7fVxyXG5wIGlvbi1za2VsZXRvbi10ZXh0LCAucmFkaW8tbGlzdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dHttYXJnaW46IDA7aGVpZ2h0OiAyMHB4O31cclxuXHJcbi5idG4tY2xvc2V7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwOyB0b3A6IDA7ei1pbmRleDogOTtmb250LXNpemU6IDI4cHg7fVxyXG5cclxuLm1sLTMwe21hcmdpbi1sZWZ0OiAzMHB4O31cclxuaW9uLXJhZGlve3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6NXB4fVxyXG4ubXVzaWNsaXN0Rm9vdGVye3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDA7d2lkdGg6IDEwMCV9XHJcbi5kZWFjdGl2ZXtkaXNwbGF5Om5vbmU7fVxyXG4uYWN0aXZle2Rpc3BsYXk6IGJsb2NrO31cclxuaW9uLWZvb3Rlci5zdGlja3ktZm9vdGVye3BhZGRpbmc6IDA7XHJcblx0aW9uLWxpc3R7ICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdFx0aW9uLWl0ZW17d2lkdGg6IDUwJTttYXJnaW46IDA7dGV4dC1hbGlnbjogY2VudGVyOyAgICBiYWNrZ3JvdW5kOiAjM2RhODllO1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6ICMzZGE4OWU7XHJcblx0XHRcdGltZ3ttYXJnaW46IGF1dG87fVxyXG5cdFx0fVxyXG5cdFx0aW9uLWl0ZW06OmFmdGVye2NvbnRlbnQ6ICcnO3dpZHRoOiAxcHg7aGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjOTRlMmRiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMTNweDtyaWdodDogMDt9XHJcblx0XHRpb24taXRlbTpudGgtY2hpbGQoMik6OmFmdGVye2Rpc3BsYXk6IG5vbmU7fVxyXG5cdFx0aW9uLWl0ZW06bnRoLWNoaWxkKDIpeyAgICBiYWNrZ3JvdW5kOiAjM2RhODllO1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6ICMzZGE4OWU7fVxyXG5cdH1cclxufVxyXG5cclxuaW9uLWl0ZW0uZmxvYXRpbmdJdGVte1xyXG5cdGlvbi1sYWJlbHtjb2xvcjojYTVhNGE0fVxyXG5cdGlvbi10ZXh0YXJlYXttYXJnaW4tdG9wOjB9XHJcbn1cclxuXHJcbi8vIGhpdGVzaCBjc3Mgc3RydFxyXG5cclxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLm11c2ljUGxheUxpc3QtaXRlbSB7XHJcblx0Zm9udC1zaXplOiAwLjg1cmVtO1xyXG5cdC0tcGFkZGluZy1zdGFydDogMTBweDtcclxufVxyXG4ubXVzaWNQbGF5TGlzdC1pdGVtIGlvbi1pY29uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRjb2xvcjogIzIyMjtcclxuXHRmb250LXNpemU6IDFyZW07XHJcbn1cclxuLm11c2ljUGxheUxpc3QtaXRlbSAubGlzdC1uYW1lIHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLm11c2ljUGxheUxpc3QtaXRlbSAubGlzdC1uYW1lIC5saXN0LWhlYWQge1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHRtYXJnaW46IDA7XHJcblx0Y29sb3I6ICMyMjI7XHJcbn1cclxuLm11c2ljUGxheUxpc3QtaXRlbSAubGlzdC1uYW1lIGlvbi10ZXh0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDAuNzByZW07XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIgLnJhbmdlLWtub2ItaGFuZGxlIC5yYW5nZS1rbm9ie1xyXG4gICAgXHJcbn1cclxuLy8gaGl0ZXNoIGNzcyBlbmRzIiwiaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZSBpb24taXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLS1taW4taGVpZ2h0OiAxMDAlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZSBpb24tcmFkaW8ge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLm5vX2Zvb3RlciB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tcmFuZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IC0zMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmF1ZGlvLWxpc3Qge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaW9zLm1haW5fY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubXVzaWNsaXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi52aWRlby1za2VsZXRvbiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbnAgaW9uLXNrZWxldG9uLXRleHQsIC5yYWRpby1saXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5idG4tY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLm1sLTMwIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG59XG5cbi5tdXNpY2xpc3RGb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZWFjdGl2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWZvb3Rlci5zdGlja3ktZm9vdGVyIHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1mb290ZXIuc3RpY2t5LWZvb3RlciBpb24tbGlzdCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuaW9uLWZvb3Rlci5zdGlja3ktZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzZGE4OWU7XG4gIC0tYmFja2dyb3VuZDogIzNkYTg5ZTtcbn1cbmlvbi1mb290ZXIuc3RpY2t5LWZvb3RlciBpb24tbGlzdCBpb24taXRlbSBpbWcge1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tZm9vdGVyLnN0aWNreS1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTRlMmRiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgcmlnaHQ6IDA7XG59XG5pb24tZm9vdGVyLnN0aWNreS1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW06bnRoLWNoaWxkKDIpOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tZm9vdGVyLnN0aWNreS1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogIzNkYTg5ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjM2RhODllO1xufVxuXG5pb24taXRlbS5mbG9hdGluZ0l0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNhNWE0YTQ7XG59XG5pb24taXRlbS5mbG9hdGluZ0l0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5tdXNpY1BsYXlMaXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuLm11c2ljUGxheUxpc3QtaXRlbSBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubXVzaWNQbGF5TGlzdC1pdGVtIC5saXN0LW5hbWUge1xuICBtYXJnaW46IDA7XG59XG5cbi5tdXNpY1BsYXlMaXN0LWl0ZW0gLmxpc3QtbmFtZSAubGlzdC1oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLm11c2ljUGxheUxpc3QtaXRlbSAubGlzdC1uYW1lIGlvbi10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufSJdfQ== */";
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


    __webpack_exports__["default"] = ".audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n.audio-list > div {\n  display: flex;\n}\n\n.audio-list > * {\n  display: inline-block;\n}\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px;\n}\n\nion-range ion-label {\n  margin-right: 50px;\n}\n\nion-fab-button {\n  min-width: 40px;\n}\n\nion-fab-button + div {\n  width: 100%;\n}\n\nion-fab-button + div > div {\n  display: flex;\n}\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 35px;\n}\n\n.music-spinner {\n  --color: #26a69a;\n}\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 28px;\n}\n\n.music-timer-fav ion-icon {\n  margin: 0 5px;\n}\n\n.musicbar {\n  padding-right: 50px;\n}\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.musicWrapper ion-toolbar .audio-listInner {\n  display: block;\n  background: #26a69a;\n  height: 56px;\n  margin-top: 10px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n  position: absolute;\n  width: 90%;\n  top: 2px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n  margin-top: 20px;\n  margin-left: 10px;\n  padding-left: 50px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL2F1ZGlvLXBsYXllci9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcYWRkLXZpZGVvXFxhdWRpby1wbGF5ZXJcXGF1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLXZpZGVvL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxVQUFBO0VBQVcsZ0JBQUE7RUFBaUIsbUJBQUE7QUNJeEM7O0FESEE7RUFBZ0IsYUFBQTtBQ09oQjs7QUROQTtFQUFjLHFCQUFBO0FDVWQ7O0FEVEE7RUFBVSxpQkFBQTtFQUFrQixhQUFBO0FDYzVCOztBRGJBO0VBQW9CLGtCQUFBO0FDaUJwQjs7QURoQkE7RUFBZSxlQUFBO0FDb0JmOztBRG5CQTtFQUFtQixXQUFBO0FDdUJuQjs7QUR0QkE7RUFBdUIsYUFBQTtBQzBCdkI7O0FEekJBO0VBQWtDLFdBQUE7RUFBWSxpQkFBQTtBQzhCOUM7O0FEN0JBO0VBQWUsZ0JBQUE7QUNpQ2Y7O0FEL0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2tDSjs7QURoQ0E7RUFDSSxhQUFBO0FDbUNKOztBRGpDQTtFQUNJLG1CQUFBO0FDb0NKOztBRGhDSTtFQUFZLGtCQUFBO0VBQW1CLGdCQUFBO0FDcUNuQzs7QURwQ1E7RUFBaUIsY0FBQTtFQUFlLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxnQkFBQTtBQzBDekU7O0FEeENnQjtFQUFVLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxRQUFBO0FDNkN4RDs7QUQzQ1k7RUFBWSxnQkFBQTtFQUFpQixpQkFBQTtFQUFrQixrQkFBQTtBQ2dEM0Q7O0FEL0NnQjtFQUFVLFdBQUE7QUNrRDFCIiwiZmlsZSI6InNyYy9hcHAvYWRkLXZpZGVvL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW8tbGlzdHtwYWRkaW5nOiAwOy0tcGFkZGluZy10b3A6IDA7LS1wYWRkaW5nLWJvdHRvbTogMDt9XHJcbi5hdWRpby1saXN0PmRpdntkaXNwbGF5OiBmbGV4O31cclxuLmF1ZGlvLWxpc3Q+KntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG5pb24tcmFuZ2V7LS1rbm9iLXNpemU6IDE4cHg7LS1oZWlnaHQ6IDJweDt9XHJcbmlvbi1yYW5nZSBpb24tbGFiZWx7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuaW9uLWZhYi1idXR0b257bWluLXdpZHRoOiA0MHB4O31cclxuaW9uLWZhYi1idXR0b24rZGl2e3dpZHRoOiAxMDAlO31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdntkaXNwbGF5OiBmbGV4O31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdiAraW9uLWxhYmVse2NvbG9yOiAjRkZGO21hcmdpbi1sZWZ0OiAzNXB4O31cclxuLm11c2ljLXNwaW5uZXJ7LS1jb2xvcjogIzI2YTY5YTt9XHJcblxyXG4ubXVzaWMtdGltZXItZmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAyOHB4O1xyXG59XHJcbi5tdXNpYy10aW1lci1mYXYgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ubXVzaWNiYXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLm11c2ljV3JhcHBlcntcclxuICAgIGlvbi10b29sYmFyey0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIC5hdWRpby1saXN0SW5uZXJ7ZGlzcGxheTogYmxvY2s7YmFja2dyb3VuZDogIzI2YTY5YTtoZWlnaHQ6IDU2cHg7bWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgLm11c2ljYmFye1xyXG4gICAgICAgICAgICAgICAgaW9uLXJhbmdle3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogOTAlO3RvcDogMnB4O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubXVzaWMtbmFtZXttYXJnaW4tdG9wOiAyMHB4O21hcmdpbi1sZWZ0OiAxMHB4O3BhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtjb2xvcjogI0ZGRjt9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYXVkaW8tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5hdWRpby1saXN0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmF1ZGlvLWxpc3QgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24tcmFuZ2Uge1xuICAtLWtub2Itc2l6ZTogMThweDtcbiAgLS1oZWlnaHQ6IDJweDtcbn1cblxuaW9uLXJhbmdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uICsgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mYWItYnV0dG9uICsgZGl2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWZhYi1idXR0b24gKyBkaXYgPiBkaXYgKyBpb24tbGFiZWwge1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5tdXNpYy1zcGlubmVyIHtcbiAgLS1jb2xvcjogIzI2YTY5YTtcbn1cblxuLm11c2ljLXRpbWVyLWZhdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjhweDtcbn1cblxuLm11c2ljLXRpbWVyLWZhdiBpb24taWNvbiB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5tdXNpY2JhciB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5hdWRpby1saXN0SW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzI2YTY5YTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAuYXVkaW8tbGlzdElubmVyIC5tdXNpY2JhciBpb24tcmFuZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIHRvcDogMnB4O1xufVxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAuYXVkaW8tbGlzdElubmVyIC5tdXNpYy1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIgLmF1ZGlvLWxpc3RJbm5lciAubXVzaWMtbmFtZSBpb24tbGFiZWwge1xuICBjb2xvcjogI0ZGRjtcbn0iXX0= */";
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