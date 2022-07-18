(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["musicplayer-musicplayer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<audio\r\n    #player\r\n    src=\"https://www.youtube.com/watch?v=OLUWpt64GMc\">\r\n</audio>\r\n\r\n<ion-toolbar color=\"primary\" padding>\r\n    <div class=\"ion-text-center\">\r\n        <ion-button (click)=\"play()\" size=\"large\" fill=\"clear\" color=\"light\">\r\n            <ng-container *ngIf=\"isLoading; else loaded\">Loading</ng-container>\r\n\r\n            <ng-template #loaded>\r\n                <!-- <ion-icon [name]=\"isPlaying ? 'pause' : 'play'\">\r\n                </ion-icon> -->\r\n                {{ isPlaying ? 'pause' : 'play' }}\r\n            </ng-template>\r\n        </ion-button>\r\n    </div>\r\n\r\n    <ion-range\r\n        min=\"0\"\r\n        [max]=\"duration\"\r\n        [value]=\"currentTime\"\r\n        (ionChange)=\"seek($event)\"\r\n        color=\"light\">\r\n        <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label>\r\n        <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n    </ion-range>\r\n</ion-toolbar>");

/***/ }),

/***/ "./src/app/musicplayer/musicplayer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/musicplayer/musicplayer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MusicplayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicplayerPageRoutingModule", function() { return MusicplayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _musicplayer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./musicplayer.page */ "./src/app/musicplayer/musicplayer.page.ts");




const routes = [
    {
        path: '',
        component: _musicplayer_page__WEBPACK_IMPORTED_MODULE_3__["MusicplayerPage"]
    }
];
let MusicplayerPageRoutingModule = class MusicplayerPageRoutingModule {
};
MusicplayerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicplayerPageRoutingModule);



/***/ }),

/***/ "./src/app/musicplayer/musicplayer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/musicplayer/musicplayer.module.ts ***!
  \***************************************************/
/*! exports provided: MusicplayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicplayerPageModule", function() { return MusicplayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _musicplayer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./musicplayer-routing.module */ "./src/app/musicplayer/musicplayer-routing.module.ts");
/* harmony import */ var _musicplayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./musicplayer.page */ "./src/app/musicplayer/musicplayer.page.ts");







let MusicplayerPageModule = class MusicplayerPageModule {
};
MusicplayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _musicplayer_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicplayerPageRoutingModule"]
        ],
        declarations: [_musicplayer_page__WEBPACK_IMPORTED_MODULE_6__["MusicplayerPage"]]
    })
], MusicplayerPageModule);



/***/ }),

/***/ "./src/app/musicplayer/musicplayer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/musicplayer/musicplayer.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(to top, #060606, #00695c);\n}\n\nion-toolbar {\n  --background: #00685b;\n}\n\nion-footer {\n  background: black;\n}\n\nion-footer a {\n  color: white !important;\n  text-decoration: none !important;\n}\n\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\n\nion-title {\n  font-size: 11px;\n}\n\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n/* Make it move */\n\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 24px;\n}\n\n.fixedContent ion-text {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 10px;\n}\n\n.fixedContent ion-thumbnail {\n  width: 40vh;\n  height: 25vh;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.header-md:after {\n  bottom: 0px;\n}\n\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\n\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.rangePlaytime {\n  display: flex;\n  justify-content: space-between;\n}\n\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.transparent_Item {\n  --background: transparent;\n}\n\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWNwbGF5ZXIvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcbXVzaWNwbGF5ZXJcXG11c2ljcGxheWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXVzaWNwbGF5ZXIvbXVzaWNwbGF5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdURBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBREFJO0VBQ0UsdUJBQUE7RUFDQSxnQ0FBQTtBQ0VOOztBREVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNDSjs7QURFRSxpQkFBQTs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUNDSjtFREVFO0lBQ0UsbUJBQUE7RUNBSjtBQUNGOztBRFBFO0VBQ0U7SUFDRSxpQkFBQTtFQ0NKO0VERUU7SUFDRSxtQkFBQTtFQ0FKO0FBQ0Y7O0FER0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FOOztBREdJO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FDRE47O0FES0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0EsMEdBQUE7QUNITjs7QURPRTtFQUNFLFdBQUE7QUNKSjs7QURPRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQkFBQTtFQUNBLGlIQUFBO0VBQ0EsNEdBQUE7QUNMSjs7QURRRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURRRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0xKOztBRE9JO0VBQ0UsaUJBQUE7QUNMTjs7QURRSTtFQUNFLG1CQUFBO0FDTk47O0FEVUU7RUFDRSxlQUFBO0FDUEo7O0FEVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDUEo7O0FEVUU7RUFDRSx5QkFBQTtBQ1BKOztBRFVFO0VBQ0UsaUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL211c2ljcGxheWVyL211c2ljcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzAwNjk1Yyk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNjg1YjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZS50ZXh0U3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1ha2UgaXQgbW92ZSAqL1xyXG4gIEBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAzMGVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRleHQtaW5kZW50OiAtMTA1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maXhlZENvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICBcclxuICAgIC5wVXNlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIC8vIG1hcmdpbjogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICB3aWR0aDogNDB2aDtcclxuICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC42NiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b24ucGxheV9wYXVzZV9idG4ge1xyXG4gICAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gZm9udC1zaXplOiAyLjNlbSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIC0tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcclxuICB9XHJcbiAgXHJcbiAgLmRhcmtDb2xvciB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yYW5nZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAucmFuZ2VQbGF5dGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIFxyXG4gICAgLnN0YXJ0VGltZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmVuZFRpbWUge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuSWNvbnNpemVfRm9yX1JldiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4Um93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zcGFyZW50X0l0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdfVG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzAwNjk1Yyk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA2ODViO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5pb24tZm9vdGVyIGEge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJxdWVlIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuaW9uLXRpdGxlLnRleHRTdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXJxdWVlOmhvdmVyIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuLyogTWFrZSBpdCBtb3ZlICovXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xuICAwJSB7XG4gICAgdGV4dC1pbmRlbnQ6IDMwZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdGV4dC1pbmRlbnQ6IC0xMDVlbTtcbiAgfVxufVxuLmZpeGVkQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbi5maXhlZENvbnRlbnQgaW9uLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZpeGVkQ29udGVudCAucFVzZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZpeGVkQ29udGVudCBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDQwdmg7XG4gIGhlaWdodDogMjV2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNjYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmlvbi1idXR0b24ucGxheV9wYXVzZV9idG4ge1xuICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG59XG5cbi5kYXJrQ29sb3Ige1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5yYW5nZVBsYXl0aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnJhbmdlUGxheXRpbWUgLnN0YXJ0VGltZSB7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xufVxuLnJhbmdlUGxheXRpbWUgLmVuZFRpbWUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uSWNvbnNpemVfRm9yX1JldiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmZsZXhSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50cmFuc3BhcmVudF9JdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhZGRpbmdfVG9wIHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/musicplayer/musicplayer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/musicplayer/musicplayer.page.ts ***!
  \*************************************************/
/*! exports provided: MusicplayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicplayerPage", function() { return MusicplayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MusicplayerPage = class MusicplayerPage {
    constructor() {
        this.isPlaying = false;
        this.isLoading = false;
        this.currentTime = 0;
        this.duration = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this._player = this.playerElementRef.nativeElement;
        this._bindPlayerEvents();
    }
    play() {
        this._player.paused ? this._player.play() : this._player.pause();
    }
    seek({ detail: { value } }) {
        this._player.currentTime = value;
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
            this.duration = Math.floor(this._player.duration);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MusicplayerPage.prototype, "src", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MusicplayerPage.prototype, "playerElementRef", void 0);
MusicplayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-musicplayer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./musicplayer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./musicplayer.page.scss */ "./src/app/musicplayer/musicplayer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MusicplayerPage);



/***/ })

}]);
//# sourceMappingURL=musicplayer-musicplayer-module-es2015.js.map