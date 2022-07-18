(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-playlist-select-playlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/select-playlist/select-playlist.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/select-playlist/select-playlist.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{playListData?.playlist_name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\"> \r\n  \r\n  <app-audio-player [songList]=\"songList\" ></app-audio-player>\r\n  <!-- <ion-list lines=\"none\" class=\"musiclist\"> \r\n    <ion-item  *ngFor=\"let item of artistData?.musics\" (click)=\"musicSelect=item?.id\" [ngClass]=\"musicSelect==item?.id?'active':''\">\r\n      <ion-icon class=\"play\" ios=\"ios-play\" md=\"md-play\" slot=\"start\"></ion-icon>\r\n      <ion-icon class=\"pause\" ios=\"ios-pause\" md=\"md-pause\" slot=\"start\"></ion-icon>\r\n      <h3 class=\"list-head\">{{item?.title}}</h3>\r\n      <ion-text slot=\"end\">{{item?.duration}}</ion-text>\r\n    </ion-item> \r\n  </ion-list> -->\r\n \r\n</ion-content>");

/***/ }),

/***/ "./src/app/music/select-playlist/select-playlist-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/music/select-playlist/select-playlist-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SelectPlaylistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlaylistPageRoutingModule", function() { return SelectPlaylistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _select_playlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-playlist.page */ "./src/app/music/select-playlist/select-playlist.page.ts");




const routes = [
    {
        path: '',
        component: _select_playlist_page__WEBPACK_IMPORTED_MODULE_3__["SelectPlaylistPage"]
    }
];
let SelectPlaylistPageRoutingModule = class SelectPlaylistPageRoutingModule {
};
SelectPlaylistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectPlaylistPageRoutingModule);



/***/ }),

/***/ "./src/app/music/select-playlist/select-playlist.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/music/select-playlist/select-playlist.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectPlaylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlaylistPageModule", function() { return SelectPlaylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-playlist-routing.module */ "./src/app/music/select-playlist/select-playlist-routing.module.ts");
/* harmony import */ var _select_playlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-playlist.page */ "./src/app/music/select-playlist/select-playlist.page.ts");
/* harmony import */ var _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../profile/components.modules */ "./src/app/profile/components.modules.ts");








let SelectPlaylistPageModule = class SelectPlaylistPageModule {
};
SelectPlaylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
            _select_playlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPlaylistPageRoutingModule"]
        ],
        declarations: [_select_playlist_page__WEBPACK_IMPORTED_MODULE_6__["SelectPlaylistPage"]]
    })
], SelectPlaylistPageModule);



/***/ }),

/***/ "./src/app/music/select-playlist/select-playlist.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/music/select-playlist/select-playlist.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0;\n}\n\n.list-head span {\n  display: block;\n  font-size: 0.7rem;\n  color: #000;\n  margin-top: 3px;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -24px;\n  z-index: 99;\n  --knob-size: 16px;\n  --height: 26px;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: 100% !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 40px;\n}\n\n.musiclist ion-item .pause, .musiclist ion-item.active .play {\n  display: none;\n}\n\n.musiclist ion-item.active .pause {\n  display: block;\n}\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvc2VsZWN0LXBsYXlsaXN0L0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXG11c2ljXFxzZWxlY3QtcGxheWxpc3RcXHNlbGVjdC1wbGF5bGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL211c2ljL3NlbGVjdC1wbGF5bGlzdC9zZWxlY3QtcGxheWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsZ0JBQUE7RUFBaUIsbUJBQUE7RUFBb0IsU0FBQTtBQ0loRDs7QURIQTtFQUFnQixjQUFBO0VBQWUsaUJBQUE7RUFBbUIsV0FBQTtFQUFZLGVBQUE7QUNVOUQ7O0FEUkE7RUFBVSxrQkFBQTtFQUFtQixXQUFBO0VBQVksVUFBQTtFQUFXLFdBQUE7RUFBWSxpQkFBQTtFQUFrQixjQUFBO0FDaUJsRjs7QURoQkE7RUFBWSwwQkFBQTtBQ29CWjs7QURuQkE7RUFBcUIseUJBQUE7RUFBMEIsc0JBQUE7RUFBdUIsc0JBQUE7QUN5QnRFOztBRHhCQTtFQUErQixTQUFBO0VBQVUsa0JBQUE7RUFBbUIsaUJBQUE7QUM4QjVEOztBRDdCQTtFQUFvQyxXQUFBO0VBQVksWUFBQTtFQUFhLHdDQUFBO0VBQXlDLGtCQUFBO0FDb0N0Rzs7QURuQ0E7RUFBNkMsV0FBQTtBQ3VDN0M7O0FEckNBO0VBQXlCLGtCQUFBO0VBQW1CLFlBQUE7QUMwQzVDOztBRHhDQTtFQUE0RCxhQUFBO0FDNEM1RDs7QUQzQ0E7RUFBa0MsY0FBQTtBQytDbEM7O0FEN0NBO0VBQTZCLFlBQUE7QUNpRDdCIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMvc2VsZWN0LXBsYXlsaXN0L3NlbGVjdC1wbGF5bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1oZWFke2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjg3NXJlbTttYXJnaW46IDA7fVxyXG4ubGlzdC1oZWFkIHNwYW57ZGlzcGxheTogYmxvY2s7Zm9udC1zaXplOiAwLjcwcmVtO2NvbG9yOiAjMDAwO21hcmdpbi10b3A6IDNweDt9XHJcblxyXG5pb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO3RvcDogLTI0cHg7ei1pbmRleDogOTk7LS1rbm9iLXNpemU6IDE2cHg7LS1oZWlnaHQ6IDI2cHg7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNGRkYgIWltcG9ydGFudDt3aWR0aDogMTAwJSAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbjogMDttYXJnaW4tcmlnaHQ6IDIwcHg7b3ZlcmZsb3c6IGluaGVyaXQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbnt3aWR0aDogMjVweDtoZWlnaHQ6IDI1cHg7LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDstLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbntjb2xvcjogI0ZGRjt9XHJcblxyXG4uc3RpY2t5LWZvb3Rlci5tdXNpY2xpc3R7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogNDBweDt9XHJcblxyXG4ubXVzaWNsaXN0IGlvbi1pdGVtIC5wYXVzZSwubXVzaWNsaXN0IGlvbi1pdGVtLmFjdGl2ZSAucGxheXtkaXNwbGF5OiBub25lO31cclxuLm11c2ljbGlzdCBpb24taXRlbS5hY3RpdmUgLnBhdXNle2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbi5pb3Muc3RpY2t5LWZvb3Rlci5tdXNpY2xpc3R7Ym90dG9tOiA0OHB4O30iLCIubGlzdC1oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdC1oZWFkIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTI0cHg7XG4gIHotaW5kZXg6IDk5O1xuICAtLWtub2Itc2l6ZTogMTZweDtcbiAgLS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5hdWRpby1saXN0IHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLnN0aWNreS1mb290ZXIubXVzaWNsaXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwcHg7XG59XG5cbi5tdXNpY2xpc3QgaW9uLWl0ZW0gLnBhdXNlLCAubXVzaWNsaXN0IGlvbi1pdGVtLmFjdGl2ZSAucGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tdXNpY2xpc3QgaW9uLWl0ZW0uYWN0aXZlIC5wYXVzZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW9zLnN0aWNreS1mb290ZXIubXVzaWNsaXN0IHtcbiAgYm90dG9tOiA0OHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/music/select-playlist/select-playlist.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/music/select-playlist/select-playlist.page.ts ***!
  \***************************************************************/
/*! exports provided: SelectPlaylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlaylistPage", function() { return SelectPlaylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_music_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/music.service */ "./src/app/services/music.service.ts");






let SelectPlaylistPage = class SelectPlaylistPage {
    constructor(commonService, navCtrl, activatedRoute, musicService) {
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.musicService = musicService;
        this.musicSelect = 1;
        this.songList = [];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.playListId = paramMap.get("musicData");
        });
        console.log(this.playListId);
        this.musicService.getPlaylistById({ "playlistId": this.playListId }).subscribe((data) => {
            this.playListData = data.status;
            data.status.playlist_songs.forEach(el => {
                this.songList.push(el.songs_details);
            });
            console.log(this.songList);
        }, err => {
            this.commonService.presentToast("Something went Wrong.");
        });
    }
    closeModal() {
        this.commonService.dismissModal();
    }
    goBack() {
        this.navCtrl.back();
    }
};
SelectPlaylistPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"] }
];
SelectPlaylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-playlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-playlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/select-playlist/select-playlist.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-playlist.page.scss */ "./src/app/music/select-playlist/select-playlist.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_music_service__WEBPACK_IMPORTED_MODULE_5__["MusicService"]])
], SelectPlaylistPage);



/***/ })

}]);
//# sourceMappingURL=select-playlist-select-playlist-module-es2015.js.map