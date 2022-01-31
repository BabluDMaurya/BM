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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(to top, #060606, #00695c); }\n\nion-toolbar {\n  --background: #00685b; }\n\nion-footer {\n  background: black; }\n\nion-footer a {\n    color: white !important;\n    text-decoration: none !important; }\n\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite; }\n\nion-title {\n  font-size: 11px; }\n\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold; }\n\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n/* Make it move */\n\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em; }\n  100% {\n    text-indent: -105em; } }\n\n@keyframes marquee {\n  0% {\n    text-indent: 30em; }\n  100% {\n    text-indent: -105em; } }\n\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 24px; }\n\n.fixedContent ion-text {\n    font-size: 22px;\n    font-weight: bold; }\n\n.fixedContent .pUser {\n    color: var(--ion-color-light-shade);\n    font-size: 10px; }\n\n.fixedContent ion-thumbnail {\n    width: 40vh;\n    height: 25vh;\n    background-size: cover !important;\n    background-position: center !important;\n    margin-bottom: 16px;\n    box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear; }\n\n.header-md:after {\n  bottom: 0px; }\n\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear; }\n\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px; }\n\nion-range {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.rangePlaytime {\n  display: flex;\n  justify-content: space-between; }\n\n.rangePlaytime .startTime {\n    padding-left: 9px; }\n\n.rangePlaytime .endTime {\n    padding-right: 15px; }\n\n.Iconsize_For_Rev {\n  font-size: 23px; }\n\n.flexRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; }\n\n.transparent_Item {\n  --background: transparent; }\n\n.padding_Top {\n  padding-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWNwbGF5ZXIvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxtdXNpY3BsYXllclxcbXVzaWNwbGF5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdURBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUIsRUFBQTs7QUFEbkI7SUFHSSx1QkFBdUI7SUFDdkIsZ0NBQWdDLEVBQUE7O0FBSXBDO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw4Q0FBc0M7VUFBdEMsc0NBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCLGlCQUFBOztBQUNBO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7O0FBTnZCO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLG1CQUFtQixFQUFBLEVBQUE7O0FBSXZCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBOztBQUxuQjtJQU9JLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUFSckI7SUFZSSxtQ0FBbUM7SUFDbkMsZUFBZSxFQUFBOztBQWJuQjtJQWtCSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLCtHQUErRztJQUMvRywwR0FBMEcsRUFBQTs7QUFJOUc7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBRXZCLG9CQUFnQjtFQUNoQixpSEFBYTtFQUNiLDRHQUFhLEVBQUE7O0FBR2Y7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUZoQztJQUtJLGlCQUFpQixFQUFBOztBQUxyQjtJQVNJLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx5QkFBYSxFQUFBOztBQUdmO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tdXNpY3BsYXllci9tdXNpY3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICMwMDY5NWMpO1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDY4NWI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWFycXVlZSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGFuaW1hdGlvbjogbWFycXVlZSA1MHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUudGV4dFN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAubWFycXVlZTpob3ZlciB7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gIH1cclxuICBcclxuICAvKiBNYWtlIGl0IG1vdmUgKi9cclxuICBAa2V5ZnJhbWVzIG1hcnF1ZWUge1xyXG4gICAgMCUge1xyXG4gICAgICB0ZXh0LWluZGVudDogMzBlbTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICB0ZXh0LWluZGVudDogLTEwNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZml4ZWRDb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucFVzZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAvLyBtYXJnaW46IDEycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgd2lkdGg6IDQwdmg7XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNjYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLW1kOmFmdGVyIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uLnBsYXlfcGF1c2VfYnRuIHtcclxuICAgIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMi4zZW0gIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAtLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXJrQ29sb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICBcclxuICBpb24tcmFuZ2Uge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnJhbmdlUGxheXRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBcclxuICAgIC5zdGFydFRpbWUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgIH1cclxuICBcclxuICAgIC5lbmRUaW1lIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLkljb25zaXplX0Zvcl9SZXYge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH1cclxuICBcclxuICAuZmxleFJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC50cmFuc3BhcmVudF9JdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWRkaW5nX1RvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICB9Il19 */");

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