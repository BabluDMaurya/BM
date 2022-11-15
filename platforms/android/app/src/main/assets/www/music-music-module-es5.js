function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMusicMusicPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Music</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <!-- <ion-label class=\"text-green\" (click)=\"s\">Next</ion-label> -->\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-toolbar *ngIf=\"tabMusic\" class=\"searchbar\">\r\n    <ion-searchbar (ionInput)=\"searchChanged($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"tabArtist\" class=\"searchbar\">\r\n    <ion-searchbar (ionInput)=\"searchArtist($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"tabPlaylist\" class=\"searchbar\">\r\n    <ion-searchbar (ionInput)=\"searchPlaylist($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <div  *ngIf=\"!allMusic\">\r\n    <ion-segment class=\"ion-no-padding top-segment\" (ionChange)=\"musicList($event)\">\r\n      <ion-segment-button value=\"genre\" checked>\r\n        <span>Genre</span>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"artists\">\r\n        <span>Artists</span>\r\n      </ion-segment-button>\r\n      <!-- <ion-segment-button value=\"stations\">\r\n      <span>Stations</span>\r\n    </ion-segment-button> -->\r\n      <ion-segment-button value=\"playlist\">\r\n        <span>Playlist</span>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"musicTypes\">\r\n      <div *ngSwitchCase=\"'genre'\">\r\n        <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"genreList\">\r\n          <ion-segment class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\">\r\n            <ion-segment-button *ngFor=\"let genre of genreList\" value=\"{{genre?.id}}\" (click)=\"getGenreMusic(genre?.musics)\" [checked]=\"genreSelect == genre?.id ? true :false\">{{genre?.name}}</ion-segment-button>\r\n          </ion-segment>\r\n        </ion-toolbar>\r\n\r\n        <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"!genreList\">\r\n          <ion-segment class=\"ion-no-padding\">\r\n            <ion-segment-button>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-segment-button>\r\n\r\n          </ion-segment>\r\n        </ion-toolbar>\r\n        <div *ngIf=\"!genreList\">\r\n          <ion-list lines=\"none\" class=\"ion-no-padding musiclist\">\r\n            <ion-item *ngFor=\"let item of  [].constructor(10)\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-item>\r\n\r\n          </ion-list>\r\n        </div>\r\n        <app-audio-player [songList]=\"songList\"></app-audio-player>\r\n      </div>\r\n      <div *ngSwitchCase=\"'artists'\">\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let artist of artistList\" [routerLink]=\"['/music/artist-songs', artist?.id]\" detail=\"false\">\r\n            <ion-label>\r\n              <h3 class=\"list-person\">{{artist?.name}}</h3>\r\n              <span class=\"list-name\">{{artist?.musics.length}} Song</span>\r\n            </ion-label>\r\n            <ion-icon slot=\"end\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n      <!-- <div *ngSwitchCase=\"'stations'\">\r\n      <ion-list lines=\"none\">\r\n        <ion-radio-group>\r\n          <ion-item class=\"stations-list\" [routerLink]=\"['/tabs/add-music']\" detail=\"false\">\r\n            <ion-label>\r\n              <ion-thumbnail>\r\n                <img src=\"../../assets/images/station1.jpg\">\r\n                <h5>featuring music by artist A, B, and C!</h5>\r\n              </ion-thumbnail>\r\n              <span> \r\n                <div>\r\n                  <ion-button slot=\"start\"><ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon></ion-button>\r\n                  <strong> Click play</strong> to listen to this station\r\n                </div>                      \r\n                <ion-button slot=\"end\"><ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\"></ion-icon></ion-button>\r\n              </span>\r\n            </ion-label>\r\n            <ion-radio slot=\"start\"></ion-radio>\r\n          </ion-item>      \r\n          <ion-item class=\"stations-list\" [routerLink]=\"['/tabs/add-music']\" detail=\"false\">\r\n            <ion-label>\r\n              <ion-thumbnail>\r\n                <img src=\"../../assets/images/station2.jpg\">\r\n                <h5>featuring music by artist A, B, and C!</h5>\r\n              </ion-thumbnail>\r\n              <span> \r\n                <div>\r\n                  <ion-button slot=\"start\"><ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon></ion-button>\r\n                  <strong> Click play</strong> to listen to this station\r\n                </div>                      \r\n                <ion-button slot=\"end\"><ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\"></ion-icon></ion-button>\r\n              </span>\r\n            </ion-label>\r\n            <ion-radio slot=\"start\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </div> -->\r\n      <div *ngSwitchCase=\"'playlist'\">\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let list of playList\">\r\n            <ion-label [routerLink]=\"['/music/select-playlist/',list?.id]\">\r\n              <h3 class=\"list-person\">{{list?.playlist_name}}</h3>\r\n              <span class=\"list-name\">{{list?.playlist_songs?.length}} Songs</span>\r\n            </ion-label>\r\n            <ion-icon slot=\"end\" ios=\"ios-more\" md=\"md-more\" (click)=\"presentPopover(list)\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/music/music-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/music/music-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: MusicPageRoutingModule */

  /***/
  function srcAppMusicMusicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicPageRoutingModule", function () {
      return MusicPageRoutingModule;
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


    var _music_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./music.page */
    "./src/app/music/music.page.ts");

    var routes = [{
      path: '',
      component: _music_page__WEBPACK_IMPORTED_MODULE_3__["MusicPage"]
    }, {
      path: 'select-playlist/:musicData',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | select-playlist-select-playlist-module */
        "select-playlist-select-playlist-module").then(__webpack_require__.bind(null,
        /*! ./select-playlist/select-playlist.module */
        "./src/app/music/select-playlist/select-playlist.module.ts")).then(function (m) {
          return m.SelectPlaylistPageModule;
        });
      }
    }, {
      path: 'artist-songs/:artistData',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | artist-songs-artist-songs-module */
        "artist-songs-artist-songs-module").then(__webpack_require__.bind(null,
        /*! ./artist-songs/artist-songs.module */
        "./src/app/music/artist-songs/artist-songs.module.ts")).then(function (m) {
          return m.ArtistSongsPageModule;
        });
      }
    }];

    var MusicPageRoutingModule = function MusicPageRoutingModule() {
      _classCallCheck(this, MusicPageRoutingModule);
    };

    MusicPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MusicPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/music/music.module.ts":
  /*!***************************************!*\
    !*** ./src/app/music/music.module.ts ***!
    \***************************************/

  /*! exports provided: MusicPageModule */

  /***/
  function srcAppMusicMusicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicPageModule", function () {
      return MusicPageModule;
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


    var _music_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./music-routing.module */
    "./src/app/music/music-routing.module.ts");
    /* harmony import */


    var _music_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./music.page */
    "./src/app/music/music.page.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../profile/components.modules */
    "./src/app/profile/components.modules.ts");

    var MusicPageModule = function MusicPageModule() {
      _classCallCheck(this, MusicPageModule);
    };

    MusicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _music_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicPageRoutingModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]],
      entryComponents: [],
      declarations: [_music_page__WEBPACK_IMPORTED_MODULE_6__["MusicPage"]]
    })], MusicPageModule);
    /***/
  },

  /***/
  "./src/app/music/music.page.scss":
  /*!***************************************!*\
    !*** ./src/app/music/music.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppMusicMusicPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0;\n}\n\n.list-head span {\n  display: block;\n  font-size: 0.7rem;\n  color: #000;\n  margin-top: 3px;\n}\n\n.text-white {\n  color: #FFF;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -24px;\n  z-index: 99;\n  --knob-size: 16px;\n  --height: 26px;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: 100% !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 40px;\n}\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px;\n}\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG11c2ljXFxtdXNpYy5wYWdlLnNjc3MiLCJzcmMvYXBwL211c2ljL211c2ljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFXLGdCQUFBO0VBQWlCLG1CQUFBO0VBQW9CLFNBQUE7QUNHaEQ7O0FERkE7RUFBZ0IsY0FBQTtFQUFlLGlCQUFBO0VBQW1CLFdBQUE7RUFBWSxlQUFBO0FDUzlEOztBRFBBO0VBQVksV0FBQTtBQ1daOztBRFRBO0VBQVUsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFVBQUE7RUFBVyxXQUFBO0VBQVksaUJBQUE7RUFBa0IsY0FBQTtBQ2tCbEY7O0FEakJBO0VBQVksMEJBQUE7QUNxQlo7O0FEcEJBO0VBQXFCLHlCQUFBO0VBQTBCLHNCQUFBO0VBQXVCLHNCQUFBO0FDMEJ0RTs7QUR6QkE7RUFBK0IsU0FBQTtFQUFVLGtCQUFBO0VBQW1CLGlCQUFBO0FDK0I1RDs7QUQ5QkE7RUFBb0MsV0FBQTtFQUFZLFlBQUE7RUFBYSx3Q0FBQTtFQUF5QyxrQkFBQTtBQ3FDdEc7O0FEcENBO0VBQTZDLFdBQUE7QUN3QzdDOztBRHRDQTtFQUF5QixrQkFBQTtFQUFtQixZQUFBO0FDMkM1Qzs7QUR6Q0E7RUFBNkIsWUFBQTtBQzZDN0I7O0FEMUNBO0VBQ0ksc0JBQUE7QUM2Q0oiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy9tdXNpYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG4ubGlzdC1oZWFke2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjg3NXJlbTttYXJnaW46IDA7fVxyXG4ubGlzdC1oZWFkIHNwYW57ZGlzcGxheTogYmxvY2s7Zm9udC1zaXplOiAwLjcwcmVtO2NvbG9yOiAjMDAwO21hcmdpbi10b3A6IDNweDt9XHJcblxyXG4udGV4dC13aGl0ZXtjb2xvcjogI0ZGRjt9XHJcblxyXG5pb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO3RvcDogLTI0cHg7ei1pbmRleDogOTk7LS1rbm9iLXNpemU6IDE2cHg7LS1oZWlnaHQ6IDI2cHg7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNGRkYgIWltcG9ydGFudDt3aWR0aDogMTAwJSAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbjogMDttYXJnaW4tcmlnaHQ6IDIwcHg7b3ZlcmZsb3c6IGluaGVyaXQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbnt3aWR0aDogMjVweDtoZWlnaHQ6IDI1cHg7LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDstLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbntjb2xvcjogI0ZGRjt9XHJcblxyXG4uc3RpY2t5LWZvb3Rlci5tdXNpY2xpc3R7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogNDBweDt9XHJcblxyXG4uaW9zLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e2JvdHRvbTogNDhweDt9XHJcblxyXG4vLyBoaXRlc2ggY3NzIHN0cnRcclxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGhpdGVzaCBjc3MgZW5kcyIsIi5saXN0LWhlYWQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWhlYWQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAtMjRweDtcbiAgei1pbmRleDogOTk7XG4gIC0ta25vYi1zaXplOiAxNnB4O1xuICAtLWhlaWdodDogMjZweDtcbn1cblxuLmF1ZGlvLWxpc3Qge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uc3RpY2t5LWZvb3Rlci5tdXNpY2xpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDBweDtcbn1cblxuLmlvcy5zdGlja3ktZm9vdGVyLm11c2ljbGlzdCB7XG4gIGJvdHRvbTogNDhweDtcbn1cblxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/music/music.page.ts":
  /*!*************************************!*\
    !*** ./src/app/music/music.page.ts ***!
    \*************************************/

  /*! exports provided: MusicPage */

  /***/
  function srcAppMusicMusicPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicPage", function () {
      return MusicPage;
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


    var _services_music_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/music.service */
    "./src/app/services/music.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _music_dropdown_music_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./music-dropdown/music-dropdown.component */
    "./src/app/music/music-dropdown/music-dropdown.component.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/program.service */
    "./src/app/services/program.service.ts");

    var MusicPage = /*#__PURE__*/function () {
      function MusicPage(popoverController, modalController, commonService, programService, musicService, navCtrl) {
        _classCallCheck(this, MusicPage);

        this.popoverController = popoverController;
        this.modalController = modalController;
        this.commonService = commonService;
        this.programService = programService;
        this.musicService = musicService;
        this.navCtrl = navCtrl;
        this.allMusic = false;
        this.tabArtist = false;
        this.tabPlaylist = false;
        this.tabMusic = true;
        this.musicTypes = 'genre';
        this.selectMusicList = 'hiphop';
      }

      _createClass(MusicPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("asdsa");
          this.musicService.getGenres().subscribe(function (data) {
            _this.genreList = data.genres;
            _this.songList = _this.genreList[0].musics;
            _this.genreSelect = _this.genreList[0].id;
          });
          this.musicService.getArtists().subscribe(function (data) {
            _this.artistList = data.artists;
          });
          this.musicService.getPlaylist().subscribe(function (data) {
            _this.playList = data.status;
            console.log(_this.playList);
          });
        }
      }, {
        key: "getGenreMusic",
        value: function getGenreMusic(musics) {
          this.songList = musics;
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(list) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _music_dropdown_music_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["MusicDropdownComponent"],
                      componentProps: {
                        'playlistData': list
                      },
                      translucent: false,
                      cssClass: 'dropdown-menu'
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (d) {
                      console.log("tessd");

                      _this2.ngOnInit();
                    });
                    _context.next = 6;
                    return popover.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "musicList",
        value: function musicList(ev) {
          this.musicTypes = ev.detail.value;

          if (this.musicTypes == 'genre') {
            this.tabArtist = false;
            this.tabPlaylist = false;
            this.tabMusic = true;
            this.ngOnInit();
          }

          if (this.musicTypes == 'artists') {
            this.tabArtist = true;
            this.tabPlaylist = false;
            this.tabMusic = false;
          }

          if (this.musicTypes == 'playlist') {
            this.tabArtist = false;
            this.tabPlaylist = true;
            this.tabMusic = false;
          }

          console.log(this.musicTypes);
        }
      }, {
        key: "selectMusic",
        value: function selectMusic(ev) {
          console.log(ev);
          this.selectMusicList = ev.detail.value;
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(musicname) {
          var _this3 = this;

          var searchTerm = musicname.srcElement.value;
          console.log(searchTerm);

          if (!searchTerm) {
            this.ngOnInit();
          } else {
            this.programService.searchMusic({
              "searchQuery": searchTerm
            }).subscribe(function (search) {
              _this3.songList = search.musicList;
            });
          }
        }
      }, {
        key: "searchArtist",
        value: function searchArtist(artistname) {
          var searchTerm = artistname.srcElement.value;

          if (!searchTerm) {
            this.ngOnInit();
          } else {
            var abc = this.artistList.filter(function (artist) {
              return artist.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
            this.artistList = abc;
          }
        }
      }, {
        key: "searchPlaylist",
        value: function searchPlaylist(playlistname) {
          console.log(this.playList);
          var searchTerm = playlistname.srcElement.value;

          if (!searchTerm) {
            this.ngOnInit();
          } else {
            var abc = this.playList.filter(function (playlist) {
              return playlist.playlist_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
            this.playList = abc;
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return MusicPage;
    }();

    MusicPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"]
      }, {
        type: _services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    MusicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-music',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./music.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./music.page.scss */
      "./src/app/music/music.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"], _services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], MusicPage);
    /***/
  }
}]);
//# sourceMappingURL=music-music-module-es5.js.map