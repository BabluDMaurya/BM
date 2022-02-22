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
/* harmony default export */ __webpack_exports__["default"] = (".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0; }\n\n.list-head span {\n  display: block;\n  font-size: 0.70rem;\n  color: #000;\n  margin-top: 3px; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -24px;\n  z-index: 99;\n  --knob-size: 16px;\n  --height: 26px; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: 100% !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 40px; }\n\n.musiclist ion-item .pause, .musiclist ion-item.active .play {\n  display: none; }\n\n.musiclist ion-item.active .pause {\n  display: block; }\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvc2VsZWN0LXBsYXlsaXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxtdXNpY1xcc2VsZWN0LXBsYXlsaXN0XFxzZWxlY3QtcGxheWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsZ0JBQWdCO0VBQUMsbUJBQW1CO0VBQUMsU0FBUyxFQUFBOztBQUN6RDtFQUFnQixjQUFjO0VBQUMsa0JBQWtCO0VBQUMsV0FBVztFQUFDLGVBQWUsRUFBQTs7QUFFN0U7RUFBVSxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsVUFBVTtFQUFDLFdBQVc7RUFBQyxpQkFBWTtFQUFNLGNBQVMsRUFBQTs7QUFDM0Y7RUFBWSwwQkFBMEIsRUFBQTs7QUFDdEM7RUFBcUIseUJBQWE7RUFBYSxzQkFBc0I7RUFBQyxzQkFBc0IsRUFBQTs7QUFDNUY7RUFBK0IsU0FBUztFQUFDLGtCQUFrQjtFQUFDLGlCQUFpQixFQUFBOztBQUM3RTtFQUFvQyxXQUFXO0VBQUMsWUFBWTtFQUFDLHdDQUFpQjtFQUF3QixrQkFBYSxFQUFBOztBQUNuSDtFQUE2QyxXQUFXLEVBQUE7O0FBRXhEO0VBQXlCLGtCQUFrQjtFQUFDLFlBQVksRUFBQTs7QUFFeEQ7RUFBNEQsYUFBYSxFQUFBOztBQUN6RTtFQUFrQyxjQUFjLEVBQUE7O0FBRWhEO0VBQTZCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL211c2ljL3NlbGVjdC1wbGF5bGlzdC9zZWxlY3QtcGxheWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaGVhZHtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMC44NzVyZW07bWFyZ2luOiAwO31cclxuLmxpc3QtaGVhZCBzcGFue2Rpc3BsYXk6IGJsb2NrO2ZvbnQtc2l6ZTogMC43MHJlbTtjb2xvcjogIzAwMDttYXJnaW4tdG9wOiAzcHg7fVxyXG5cclxuaW9uLXJhbmdle3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTt0b3A6IC0yNHB4O3otaW5kZXg6IDk5Oy0ta25vYi1zaXplOiAxNnB4Oy0taGVpZ2h0OiAyNnB4O31cclxuLmF1ZGlvLWxpc3R7cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbXstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2NvbG9yOiAjRkZGICFpbXBvcnRhbnQ7d2lkdGg6IDEwMCUgIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHttYXJnaW46IDA7bWFyZ2luLXJpZ2h0OiAyMHB4O292ZXJmbG93OiBpbmhlcml0O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b257d2lkdGg6IDI1cHg7aGVpZ2h0OiAyNXB4Oy0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3gtc2hhZG93OiBub25lO31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24gaW9uLWljb257Y29sb3I6ICNGRkY7fVxyXG5cclxuLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDQwcHg7fVxyXG5cclxuLm11c2ljbGlzdCBpb24taXRlbSAucGF1c2UsLm11c2ljbGlzdCBpb24taXRlbS5hY3RpdmUgLnBsYXl7ZGlzcGxheTogbm9uZTt9XHJcbi5tdXNpY2xpc3QgaW9uLWl0ZW0uYWN0aXZlIC5wYXVzZXtkaXNwbGF5OiBibG9jazt9XHJcblxyXG4uaW9zLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e2JvdHRvbTogNDhweDt9Il19 */");

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