function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-playlist-select-playlist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/music/select-playlist/select-playlist.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/select-playlist/select-playlist.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMusicSelectPlaylistSelectPlaylistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{playListData?.playlist_name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\"> \r\n  \r\n  <app-audio-player [songList]=\"songList\" ></app-audio-player>\r\n  <!-- <ion-list lines=\"none\" class=\"musiclist\"> \r\n    <ion-item  *ngFor=\"let item of artistData?.musics\" (click)=\"musicSelect=item?.id\" [ngClass]=\"musicSelect==item?.id?'active':''\">\r\n      <ion-icon class=\"play\" ios=\"ios-play\" md=\"md-play\" slot=\"start\"></ion-icon>\r\n      <ion-icon class=\"pause\" ios=\"ios-pause\" md=\"md-pause\" slot=\"start\"></ion-icon>\r\n      <h3 class=\"list-head\">{{item?.title}}</h3>\r\n      <ion-text slot=\"end\">{{item?.duration}}</ion-text>\r\n    </ion-item> \r\n  </ion-list> -->\r\n \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/music/select-playlist/select-playlist-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/music/select-playlist/select-playlist-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SelectPlaylistPageRoutingModule */

  /***/
  function srcAppMusicSelectPlaylistSelectPlaylistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPlaylistPageRoutingModule", function () {
      return SelectPlaylistPageRoutingModule;
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


    var _select_playlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-playlist.page */
    "./src/app/music/select-playlist/select-playlist.page.ts");

    var routes = [{
      path: '',
      component: _select_playlist_page__WEBPACK_IMPORTED_MODULE_3__["SelectPlaylistPage"]
    }];

    var SelectPlaylistPageRoutingModule = function SelectPlaylistPageRoutingModule() {
      _classCallCheck(this, SelectPlaylistPageRoutingModule);
    };

    SelectPlaylistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectPlaylistPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/music/select-playlist/select-playlist.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/music/select-playlist/select-playlist.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SelectPlaylistPageModule */

  /***/
  function srcAppMusicSelectPlaylistSelectPlaylistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPlaylistPageModule", function () {
      return SelectPlaylistPageModule;
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


    var _select_playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-playlist-routing.module */
    "./src/app/music/select-playlist/select-playlist-routing.module.ts");
    /* harmony import */


    var _select_playlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-playlist.page */
    "./src/app/music/select-playlist/select-playlist.page.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../profile/components.modules */
    "./src/app/profile/components.modules.ts");

    var SelectPlaylistPageModule = function SelectPlaylistPageModule() {
      _classCallCheck(this, SelectPlaylistPageModule);
    };

    SelectPlaylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"], _select_playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPlaylistPageRoutingModule"]],
      declarations: [_select_playlist_page__WEBPACK_IMPORTED_MODULE_6__["SelectPlaylistPage"]]
    })], SelectPlaylistPageModule);
    /***/
  },

  /***/
  "./src/app/music/select-playlist/select-playlist.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/music/select-playlist/select-playlist.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMusicSelectPlaylistSelectPlaylistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0; }\n\n.list-head span {\n  display: block;\n  font-size: 0.70rem;\n  color: #000;\n  margin-top: 3px; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -24px;\n  z-index: 99;\n  --knob-size: 16px;\n  --height: 26px; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: 100% !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 40px; }\n\n.musiclist ion-item .pause, .musiclist ion-item.active .play {\n  display: none; }\n\n.musiclist ion-item.active .pause {\n  display: block; }\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvc2VsZWN0LXBsYXlsaXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcbXVzaWNcXHNlbGVjdC1wbGF5bGlzdFxcc2VsZWN0LXBsYXlsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGdCQUFnQjtFQUFDLG1CQUFtQjtFQUFDLFNBQVMsRUFBQTs7QUFDekQ7RUFBZ0IsY0FBYztFQUFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxlQUFlLEVBQUE7O0FBRTdFO0VBQVUsa0JBQWtCO0VBQUMsV0FBVztFQUFDLFVBQVU7RUFBQyxXQUFXO0VBQUMsaUJBQVk7RUFBTSxjQUFTLEVBQUE7O0FBQzNGO0VBQVksMEJBQTBCLEVBQUE7O0FBQ3RDO0VBQXFCLHlCQUFhO0VBQWEsc0JBQXNCO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzVGO0VBQStCLFNBQVM7RUFBQyxrQkFBa0I7RUFBQyxpQkFBaUIsRUFBQTs7QUFDN0U7RUFBb0MsV0FBVztFQUFDLFlBQVk7RUFBQyx3Q0FBaUI7RUFBd0Isa0JBQWEsRUFBQTs7QUFDbkg7RUFBNkMsV0FBVyxFQUFBOztBQUV4RDtFQUF5QixrQkFBa0I7RUFBQyxZQUFZLEVBQUE7O0FBRXhEO0VBQTRELGFBQWEsRUFBQTs7QUFDekU7RUFBa0MsY0FBYyxFQUFBOztBQUVoRDtFQUE2QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy9zZWxlY3QtcGxheWxpc3Qvc2VsZWN0LXBsYXlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWhlYWR7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDAuODc1cmVtO21hcmdpbjogMDt9XHJcbi5saXN0LWhlYWQgc3BhbntkaXNwbGF5OiBibG9jaztmb250LXNpemU6IDAuNzByZW07Y29sb3I6ICMwMDA7bWFyZ2luLXRvcDogM3B4O31cclxuXHJcbmlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7dG9wOiAtMjRweDt6LWluZGV4OiA5OTstLWtub2Itc2l6ZTogMTZweDstLWhlaWdodDogMjZweDt9XHJcbi5hdWRpby1saXN0e3BhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtjb2xvcjogI0ZGRiAhaW1wb3J0YW50O3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luOiAwO21hcmdpbi1yaWdodDogMjBweDtvdmVyZmxvdzogaW5oZXJpdDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9ue3dpZHRoOiAyNXB4O2hlaWdodDogMjVweDstLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50Oy0tYm94LXNoYWRvdzogbm9uZTt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29ue2NvbG9yOiAjRkZGO31cclxuXHJcbi5zdGlja3ktZm9vdGVyLm11c2ljbGlzdHtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA0MHB4O31cclxuXHJcbi5tdXNpY2xpc3QgaW9uLWl0ZW0gLnBhdXNlLC5tdXNpY2xpc3QgaW9uLWl0ZW0uYWN0aXZlIC5wbGF5e2Rpc3BsYXk6IG5vbmU7fVxyXG4ubXVzaWNsaXN0IGlvbi1pdGVtLmFjdGl2ZSAucGF1c2V7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuLmlvcy5zdGlja3ktZm9vdGVyLm11c2ljbGlzdHtib3R0b206IDQ4cHg7fSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/music/select-playlist/select-playlist.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/music/select-playlist/select-playlist.page.ts ***!
    \***************************************************************/

  /*! exports provided: SelectPlaylistPage */

  /***/
  function srcAppMusicSelectPlaylistSelectPlaylistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPlaylistPage", function () {
      return SelectPlaylistPage;
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


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_music_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/music.service */
    "./src/app/services/music.service.ts");

    var SelectPlaylistPage = /*#__PURE__*/function () {
      function SelectPlaylistPage(commonService, navCtrl, activatedRoute, musicService) {
        _classCallCheck(this, SelectPlaylistPage);

        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.musicService = musicService;
        this.musicSelect = 1;
        this.songList = [];
      }

      _createClass(SelectPlaylistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function (paramMap) {
            _this.playListId = paramMap.get("musicData");
          });
          console.log(this.playListId);
          this.musicService.getPlaylistById({
            "playlistId": this.playListId
          }).subscribe(function (data) {
            _this.playListData = data.status;
            data.status.playlist_songs.forEach(function (el) {
              _this.songList.push(el.songs_details);
            });
            console.log(_this.songList);
          }, function (err) {
            _this.commonService.presentToast("Something went Wrong.");
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.commonService.dismissModal();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return SelectPlaylistPage;
    }();

    SelectPlaylistPage.ctorParameters = function () {
      return [{
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"]
      }];
    };

    SelectPlaylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-playlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-playlist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/music/select-playlist/select-playlist.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-playlist.page.scss */
      "./src/app/music/select-playlist/select-playlist.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"]])], SelectPlaylistPage);
    /***/
  }
}]);
//# sourceMappingURL=select-playlist-select-playlist-module-es5.js.map