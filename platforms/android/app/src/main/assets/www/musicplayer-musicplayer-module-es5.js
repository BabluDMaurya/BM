function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["musicplayer-musicplayer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMusicplayerMusicplayerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<audio\r\n    #player\r\n    src=\"https://www.youtube.com/watch?v=OLUWpt64GMc\">\r\n</audio>\r\n\r\n<ion-toolbar color=\"primary\" padding>\r\n    <div class=\"ion-text-center\">\r\n        <ion-button (click)=\"play()\" size=\"large\" fill=\"clear\" color=\"light\">\r\n            <ng-container *ngIf=\"isLoading; else loaded\">Loading</ng-container>\r\n\r\n            <ng-template #loaded>\r\n                <!-- <ion-icon [name]=\"isPlaying ? 'pause' : 'play'\">\r\n                </ion-icon> -->\r\n                {{ isPlaying ? 'pause' : 'play' }}\r\n            </ng-template>\r\n        </ion-button>\r\n    </div>\r\n\r\n    <ion-range\r\n        min=\"0\"\r\n        [max]=\"duration\"\r\n        [value]=\"currentTime\"\r\n        (ionChange)=\"seek($event)\"\r\n        color=\"light\">\r\n        <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label>\r\n        <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n    </ion-range>\r\n</ion-toolbar>";
    /***/
  },

  /***/
  "./src/app/musicplayer/musicplayer-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/musicplayer/musicplayer-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: MusicplayerPageRoutingModule */

  /***/
  function srcAppMusicplayerMusicplayerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicplayerPageRoutingModule", function () {
      return MusicplayerPageRoutingModule;
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


    var _musicplayer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./musicplayer.page */
    "./src/app/musicplayer/musicplayer.page.ts");

    var routes = [{
      path: '',
      component: _musicplayer_page__WEBPACK_IMPORTED_MODULE_3__["MusicplayerPage"]
    }];

    var MusicplayerPageRoutingModule = function MusicplayerPageRoutingModule() {
      _classCallCheck(this, MusicplayerPageRoutingModule);
    };

    MusicplayerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MusicplayerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/musicplayer/musicplayer.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/musicplayer/musicplayer.module.ts ***!
    \***************************************************/

  /*! exports provided: MusicplayerPageModule */

  /***/
  function srcAppMusicplayerMusicplayerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicplayerPageModule", function () {
      return MusicplayerPageModule;
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


    var _musicplayer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./musicplayer-routing.module */
    "./src/app/musicplayer/musicplayer-routing.module.ts");
    /* harmony import */


    var _musicplayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./musicplayer.page */
    "./src/app/musicplayer/musicplayer.page.ts");

    var MusicplayerPageModule = function MusicplayerPageModule() {
      _classCallCheck(this, MusicplayerPageModule);
    };

    MusicplayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _musicplayer_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicplayerPageRoutingModule"]],
      declarations: [_musicplayer_page__WEBPACK_IMPORTED_MODULE_6__["MusicplayerPage"]]
    })], MusicplayerPageModule);
    /***/
  },

  /***/
  "./src/app/musicplayer/musicplayer.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/musicplayer/musicplayer.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMusicplayerMusicplayerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(to top, #060606, #00695c);\n}\n\nion-toolbar {\n  --background: #00685b;\n}\n\nion-footer {\n  background: black;\n}\n\nion-footer a {\n  color: white !important;\n  text-decoration: none !important;\n}\n\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\n\nion-title {\n  font-size: 11px;\n}\n\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n/* Make it move */\n\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 24px;\n}\n\n.fixedContent ion-text {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 10px;\n}\n\n.fixedContent ion-thumbnail {\n  width: 40vh;\n  height: 25vh;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.header-md:after {\n  bottom: 0px;\n}\n\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\n\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.rangePlaytime {\n  display: flex;\n  justify-content: space-between;\n}\n\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.transparent_Item {\n  --background: transparent;\n}\n\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWNwbGF5ZXIvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG11c2ljcGxheWVyXFxtdXNpY3BsYXllci5wYWdlLnNjc3MiLCJzcmMvYXBwL211c2ljcGxheWVyL211c2ljcGxheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURBSTtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7QUNFTjs7QURFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FDQ0o7O0FERUUsaUJBQUE7O0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VDQ0o7RURFRTtJQUNFLG1CQUFBO0VDQUo7QUFDRjs7QURQRTtFQUNFO0lBQ0UsaUJBQUE7RUNDSjtFREVFO0lBQ0UsbUJBQUE7RUNBSjtBQUNGOztBREdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FERUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjs7QURHSTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ0ROOztBREtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSwrR0FBQTtFQUNBLDBHQUFBO0FDSE47O0FET0U7RUFDRSxXQUFBO0FDSko7O0FET0U7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsb0JBQUE7RUFDQSxpSEFBQTtFQUNBLDRHQUFBO0FDTEo7O0FEUUU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFFFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDTEo7O0FEUUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNMSjs7QURPSTtFQUNFLGlCQUFBO0FDTE47O0FEUUk7RUFDRSxtQkFBQTtBQ05OOztBRFVFO0VBQ0UsZUFBQTtBQ1BKOztBRFVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1BKOztBRFVFO0VBQ0UseUJBQUE7QUNQSjs7QURVRTtFQUNFLGlCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9tdXNpY3BsYXllci9tdXNpY3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICMwMDY5NWMpO1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDY4NWI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWFycXVlZSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGFuaW1hdGlvbjogbWFycXVlZSA1MHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUudGV4dFN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAubWFycXVlZTpob3ZlciB7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gIH1cclxuICBcclxuICAvKiBNYWtlIGl0IG1vdmUgKi9cclxuICBAa2V5ZnJhbWVzIG1hcnF1ZWUge1xyXG4gICAgMCUge1xyXG4gICAgICB0ZXh0LWluZGVudDogMzBlbTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICB0ZXh0LWluZGVudDogLTEwNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZml4ZWRDb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucFVzZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAvLyBtYXJnaW46IDEycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgd2lkdGg6IDQwdmg7XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNjYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLW1kOmFmdGVyIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uLnBsYXlfcGF1c2VfYnRuIHtcclxuICAgIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMi4zZW0gIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAtLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXJrQ29sb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICBcclxuICBpb24tcmFuZ2Uge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnJhbmdlUGxheXRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBcclxuICAgIC5zdGFydFRpbWUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgIH1cclxuICBcclxuICAgIC5lbmRUaW1lIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLkljb25zaXplX0Zvcl9SZXYge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH1cclxuICBcclxuICAuZmxleFJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC50cmFuc3BhcmVudF9JdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWRkaW5nX1RvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICMwMDY5NWMpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwNjg1Yjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuaW9uLWZvb3RlciBhIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFycXVlZSB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFuaW1hdGlvbjogbWFycXVlZSA1MHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFycXVlZTpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbi8qIE1ha2UgaXQgbW92ZSAqL1xuQGtleWZyYW1lcyBtYXJxdWVlIHtcbiAgMCUge1xuICAgIHRleHQtaW5kZW50OiAzMGVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRleHQtaW5kZW50OiAtMTA1ZW07XG4gIH1cbn1cbi5maXhlZENvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG4uZml4ZWRDb250ZW50IGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5maXhlZENvbnRlbnQgLnBVc2VyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5maXhlZENvbnRlbnQgaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiA0MHZoO1xuICBoZWlnaHQ6IDI1dmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tYnV0dG9uLnBsYXlfcGF1c2VfYnRuIHtcbiAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLS10cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4uZGFya0NvbG9yIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuaW9uLXJhbmdlIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucmFuZ2VQbGF5dGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yYW5nZVBsYXl0aW1lIC5zdGFydFRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbn1cbi5yYW5nZVBsYXl0aW1lIC5lbmRUaW1lIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLkljb25zaXplX0Zvcl9SZXYge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5mbGV4Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udHJhbnNwYXJlbnRfSXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWRkaW5nX1RvcCB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/musicplayer/musicplayer.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/musicplayer/musicplayer.page.ts ***!
    \*************************************************/

  /*! exports provided: MusicplayerPage */

  /***/
  function srcAppMusicplayerMusicplayerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicplayerPage", function () {
      return MusicplayerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MusicplayerPage = /*#__PURE__*/function () {
      function MusicplayerPage() {
        _classCallCheck(this, MusicplayerPage);

        this.isPlaying = false;
        this.isLoading = false;
        this.currentTime = 0;
        this.duration = 0;
      }

      _createClass(MusicplayerPage, [{
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
          this._player.paused ? this._player.play() : this._player.pause();
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
          var _this = this;

          this._player.addEventListener('playing', function () {
            _this.isPlaying = true;
          });

          this._player.addEventListener('pause', function () {
            _this.isPlaying = false;
          });

          this._player.addEventListener('timeupdate', function () {
            _this.currentTime = Math.floor(_this._player.currentTime);
          });

          this._player.addEventListener('seeking', function () {
            _this.isLoading = true;
          });

          this._player.addEventListener('seeked', function () {
            _this.isLoading = false;
          });

          this._player.addEventListener('loadstart', function () {
            _this.isLoading = true;
          });

          this._player.addEventListener('loadeddata', function () {
            _this.isLoading = false;
            _this.duration = Math.floor(_this._player.duration);
          });
        }
      }]);

      return MusicplayerPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MusicplayerPage.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MusicplayerPage.prototype, "playerElementRef", void 0);
    MusicplayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-musicplayer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./musicplayer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./musicplayer.page.scss */
      "./src/app/musicplayer/musicplayer.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MusicplayerPage);
    /***/
  }
}]);
//# sourceMappingURL=musicplayer-musicplayer-module-es5.js.map