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


    __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(to top, #060606, #00695c); }\n\nion-toolbar {\n  --background: #00685b; }\n\nion-footer {\n  background: black; }\n\nion-footer a {\n    color: white !important;\n    text-decoration: none !important; }\n\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite; }\n\nion-title {\n  font-size: 11px; }\n\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold; }\n\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n/* Make it move */\n\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em; }\n  100% {\n    text-indent: -105em; } }\n\n@keyframes marquee {\n  0% {\n    text-indent: 30em; }\n  100% {\n    text-indent: -105em; } }\n\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 24px; }\n\n.fixedContent ion-text {\n    font-size: 22px;\n    font-weight: bold; }\n\n.fixedContent .pUser {\n    color: var(--ion-color-light-shade);\n    font-size: 10px; }\n\n.fixedContent ion-thumbnail {\n    width: 40vh;\n    height: 25vh;\n    background-size: cover !important;\n    background-position: center !important;\n    margin-bottom: 16px;\n    box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear; }\n\n.header-md:after {\n  bottom: 0px; }\n\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear; }\n\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px; }\n\nion-range {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.rangePlaytime {\n  display: flex;\n  justify-content: space-between; }\n\n.rangePlaytime .startTime {\n    padding-left: 9px; }\n\n.rangePlaytime .endTime {\n    padding-right: 15px; }\n\n.Iconsize_For_Rev {\n  font-size: 23px; }\n\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; }\n\n.transparent_Item {\n  --background: transparent; }\n\n.padding_Top {\n  padding-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWNwbGF5ZXIvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG11c2ljcGxheWVyXFxtdXNpY3BsYXllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBYSxFQUFBOztBQUdmO0VBQ0UscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGlCQUFpQixFQUFBOztBQURuQjtJQUdJLHVCQUF1QjtJQUN2QixnQ0FBZ0MsRUFBQTs7QUFJcEM7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDhDQUFzQztVQUF0QyxzQ0FBc0MsRUFBQTs7QUFHeEM7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUIsaUJBQUE7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsbUJBQW1CLEVBQUEsRUFBQTs7QUFOdkI7RUFDRTtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsbUJBQW1CLEVBQUEsRUFBQTs7QUFJdkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBTG5CO0lBT0ksZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQVJyQjtJQVlJLG1DQUFtQztJQUNuQyxlQUFlLEVBQUE7O0FBYm5CO0lBa0JJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsK0dBQStHO0lBQy9HLDBHQUEwRyxFQUFBOztBQUk5RztFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFFdkIsb0JBQWdCO0VBQ2hCLGlIQUFhO0VBQ2IsNEdBQWEsRUFBQTs7QUFHZjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBRmhDO0lBS0ksaUJBQWlCLEVBQUE7O0FBTHJCO0lBU0ksbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHlCQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL211c2ljcGxheWVyL211c2ljcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzAwNjk1Yyk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNjg1YjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1ha2UgaXQgbW92ZSAqL1xyXG4gIEBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAzMGVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAtMTA1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maXhlZENvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICBcclxuICAgIC5wVXNlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIC8vIG1hcmdpbjogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICB3aWR0aDogNDB2aDtcclxuICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC42NiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b24ucGxheV9wYXVzZV9idG4ge1xyXG4gICAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gZm9udC1zaXplOiAyLjNlbSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIC0tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgLmRhcmtDb2xvciB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yYW5nZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAucmFuZ2VQbGF5dGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIFxyXG4gICAgLnN0YXJ0VGltZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmVuZFRpbWUge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuSWNvbnNpemVfRm9yX1JldiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4Um93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zcGFyZW50X0l0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdfVG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH0iXX0= */";
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