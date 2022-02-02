(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["music-music-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Music</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <!-- <ion-label class=\"text-green\" (click)=\"s\">Next</ion-label> -->\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-toolbar *ngIf=\"tabMusic\" class=\"searchbar\">\r\n    <ion-searchbar (ionInput)=\"searchChanged($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"tabArtist\" class=\"searchbar\">\r\n    <ion-searchbar (ionInput)=\"searchArtist($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"tabPlaylist\" class=\"searchbar\">\r\n    <ion-searchbar (ionInput)=\"searchPlaylist($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <div  *ngIf=\"!allMusic\">\r\n    <ion-segment class=\"ion-no-padding top-segment\" (ionChange)=\"musicList($event)\">\r\n      <ion-segment-button value=\"genre\" checked>\r\n        <span>Genre</span>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"artists\">\r\n        <span>Artists</span>\r\n      </ion-segment-button>\r\n      <!-- <ion-segment-button value=\"stations\">\r\n      <span>Stations</span>\r\n    </ion-segment-button> -->\r\n      <ion-segment-button value=\"playlist\">\r\n        <span>Playlist</span>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <div [ngSwitch]=\"musicTypes\">\r\n      <div *ngSwitchCase=\"'genre'\">\r\n        <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"genreList\">\r\n          <ion-segment class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\">\r\n            <ion-segment-button *ngFor=\"let genre of genreList\" value=\"{{genre?.id}}\" (click)=\"getGenreMusic(genre?.musics)\" [checked]=\"genreSelect == genre?.id ? true :false\">{{genre?.name}}</ion-segment-button>\r\n          </ion-segment>\r\n        </ion-toolbar>\r\n\r\n        <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"!genreList\">\r\n          <ion-segment class=\"ion-no-padding\">\r\n            <ion-segment-button>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-segment-button>\r\n\r\n          </ion-segment>\r\n        </ion-toolbar>\r\n        <div *ngIf=\"!genreList\">\r\n          <ion-list lines=\"none\" class=\"ion-no-padding musiclist\">\r\n            <ion-item *ngFor=\"let item of  [].constructor(10)\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-item>\r\n\r\n          </ion-list>\r\n        </div>\r\n        <app-audio-player [songList]=\"songList\"></app-audio-player>\r\n      </div>\r\n      <div *ngSwitchCase=\"'artists'\">\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let artist of artistList\" [routerLink]=\"['/music/artist-songs', artist?.id]\" detail=\"false\">\r\n            <ion-label>\r\n              <h3 class=\"list-person\">{{artist?.name}}</h3>\r\n              <span class=\"list-name\">{{artist?.musics.length}} Song</span>\r\n            </ion-label>\r\n            <ion-icon slot=\"end\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n      <!-- <div *ngSwitchCase=\"'stations'\">\r\n      <ion-list lines=\"none\">\r\n        <ion-radio-group>\r\n          <ion-item class=\"stations-list\" [routerLink]=\"['/tabs/add-music']\" detail=\"false\">\r\n            <ion-label>\r\n              <ion-thumbnail>\r\n                <img src=\"../../assets/images/station1.jpg\">\r\n                <h5>featuring music by artist A, B, and C!</h5>\r\n              </ion-thumbnail>\r\n              <span> \r\n                <div>\r\n                  <ion-button slot=\"start\"><ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon></ion-button>\r\n                  <strong> Click play</strong> to listen to this station\r\n                </div>                      \r\n                <ion-button slot=\"end\"><ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\"></ion-icon></ion-button>\r\n              </span>\r\n            </ion-label>\r\n            <ion-radio slot=\"start\"></ion-radio>\r\n          </ion-item>      \r\n          <ion-item class=\"stations-list\" [routerLink]=\"['/tabs/add-music']\" detail=\"false\">\r\n            <ion-label>\r\n              <ion-thumbnail>\r\n                <img src=\"../../assets/images/station2.jpg\">\r\n                <h5>featuring music by artist A, B, and C!</h5>\r\n              </ion-thumbnail>\r\n              <span> \r\n                <div>\r\n                  <ion-button slot=\"start\"><ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon></ion-button>\r\n                  <strong> Click play</strong> to listen to this station\r\n                </div>                      \r\n                <ion-button slot=\"end\"><ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\"></ion-icon></ion-button>\r\n              </span>\r\n            </ion-label>\r\n            <ion-radio slot=\"start\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </div> -->\r\n      <div *ngSwitchCase=\"'playlist'\">\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let list of playList\">\r\n            <ion-label [routerLink]=\"['/music/select-playlist/',list?.id]\">\r\n              <h3 class=\"list-person\">{{list?.playlist_name}}</h3>\r\n              <span class=\"list-name\">{{list?.playlist_songs?.length}} Songs</span>\r\n            </ion-label>\r\n            <ion-icon slot=\"end\" ios=\"ios-more\" md=\"md-more\" (click)=\"presentPopover(list)\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/music/music-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/music/music-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MusicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPageRoutingModule", function() { return MusicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _music_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music.page */ "./src/app/music/music.page.ts");




const routes = [
    {
        path: '',
        component: _music_page__WEBPACK_IMPORTED_MODULE_3__["MusicPage"]
    },
    {
        path: 'select-playlist/:musicData',
        loadChildren: () => __webpack_require__.e(/*! import() | select-playlist-select-playlist-module */ "select-playlist-select-playlist-module").then(__webpack_require__.bind(null, /*! ./select-playlist/select-playlist.module */ "./src/app/music/select-playlist/select-playlist.module.ts")).then(m => m.SelectPlaylistPageModule)
    },
    {
        path: 'artist-songs/:artistData',
        loadChildren: () => __webpack_require__.e(/*! import() | artist-songs-artist-songs-module */ "artist-songs-artist-songs-module").then(__webpack_require__.bind(null, /*! ./artist-songs/artist-songs.module */ "./src/app/music/artist-songs/artist-songs.module.ts")).then(m => m.ArtistSongsPageModule)
    }
];
let MusicPageRoutingModule = class MusicPageRoutingModule {
};
MusicPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MusicPageRoutingModule);



/***/ }),

/***/ "./src/app/music/music.module.ts":
/*!***************************************!*\
  !*** ./src/app/music/music.module.ts ***!
  \***************************************/
/*! exports provided: MusicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPageModule", function() { return MusicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _music_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-routing.module */ "./src/app/music/music-routing.module.ts");
/* harmony import */ var _music_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music.page */ "./src/app/music/music.page.ts");
/* harmony import */ var _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/components.modules */ "./src/app/profile/components.modules.ts");








let MusicPageModule = class MusicPageModule {
};
MusicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _music_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusicPageRoutingModule"],
            _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
        ],
        entryComponents: [],
        declarations: [_music_page__WEBPACK_IMPORTED_MODULE_6__["MusicPage"]]
    })
], MusicPageModule);



/***/ }),

/***/ "./src/app/music/music.page.scss":
/*!***************************************!*\
  !*** ./src/app/music/music.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0; }\n\n.list-head span {\n  display: block;\n  font-size: 0.70rem;\n  color: #000;\n  margin-top: 3px; }\n\n.text-white {\n  color: #FFF; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -24px;\n  z-index: 99;\n  --knob-size: 16px;\n  --height: 26px; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: 100% !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 40px; }\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px; }\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXG11c2ljXFxtdXNpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBVyxnQkFBZ0I7RUFBQyxtQkFBbUI7RUFBQyxTQUFTLEVBQUE7O0FBQ3pEO0VBQWdCLGNBQWM7RUFBQyxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsZUFBZSxFQUFBOztBQUU3RTtFQUFZLFdBQVcsRUFBQTs7QUFFdkI7RUFBVSxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsVUFBVTtFQUFDLFdBQVc7RUFBQyxpQkFBWTtFQUFNLGNBQVMsRUFBQTs7QUFDM0Y7RUFBWSwwQkFBMEIsRUFBQTs7QUFDdEM7RUFBcUIseUJBQWE7RUFBYSxzQkFBc0I7RUFBQyxzQkFBc0IsRUFBQTs7QUFDNUY7RUFBK0IsU0FBUztFQUFDLGtCQUFrQjtFQUFDLGlCQUFpQixFQUFBOztBQUM3RTtFQUFvQyxXQUFXO0VBQUMsWUFBWTtFQUFDLHdDQUFpQjtFQUF3QixrQkFBYSxFQUFBOztBQUNuSDtFQUE2QyxXQUFXLEVBQUE7O0FBRXhEO0VBQXlCLGtCQUFrQjtFQUFDLFlBQVksRUFBQTs7QUFFeEQ7RUFBNkIsWUFBWSxFQUFBOztBQUd6QztFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMvbXVzaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuLmxpc3QtaGVhZHtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMC44NzVyZW07bWFyZ2luOiAwO31cclxuLmxpc3QtaGVhZCBzcGFue2Rpc3BsYXk6IGJsb2NrO2ZvbnQtc2l6ZTogMC43MHJlbTtjb2xvcjogIzAwMDttYXJnaW4tdG9wOiAzcHg7fVxyXG5cclxuLnRleHQtd2hpdGV7Y29sb3I6ICNGRkY7fVxyXG5cclxuaW9uLXJhbmdle3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTt0b3A6IC0yNHB4O3otaW5kZXg6IDk5Oy0ta25vYi1zaXplOiAxNnB4Oy0taGVpZ2h0OiAyNnB4O31cclxuLmF1ZGlvLWxpc3R7cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbXstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2NvbG9yOiAjRkZGICFpbXBvcnRhbnQ7d2lkdGg6IDEwMCUgIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHttYXJnaW46IDA7bWFyZ2luLXJpZ2h0OiAyMHB4O292ZXJmbG93OiBpbmhlcml0O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b257d2lkdGg6IDI1cHg7aGVpZ2h0OiAyNXB4Oy0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3gtc2hhZG93OiBub25lO31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24gaW9uLWljb257Y29sb3I6ICNGRkY7fVxyXG5cclxuLnN0aWNreS1mb290ZXIubXVzaWNsaXN0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDQwcHg7fVxyXG5cclxuLmlvcy5zdGlja3ktZm9vdGVyLm11c2ljbGlzdHtib3R0b206IDQ4cHg7fVxyXG5cclxuLy8gaGl0ZXNoIGNzcyBzdHJ0XHJcbi5zdWJwcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBoaXRlc2ggY3NzIGVuZHMiXX0= */");

/***/ }),

/***/ "./src/app/music/music.page.ts":
/*!*************************************!*\
  !*** ./src/app/music/music.page.ts ***!
  \*************************************/
/*! exports provided: MusicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPage", function() { return MusicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _music_dropdown_music_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music-dropdown/music-dropdown.component */ "./src/app/music/music-dropdown/music-dropdown.component.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/program.service */ "./src/app/services/program.service.ts");







let MusicPage = class MusicPage {
    constructor(popoverController, modalController, commonService, programService, musicService, navCtrl) {
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
    ngOnInit() {
        console.log("asdsa");
        this.musicService.getGenres().subscribe((data) => {
            this.genreList = data.genres;
            this.songList = this.genreList[0].musics;
            this.genreSelect = this.genreList[0].id;
        });
        this.musicService.getArtists().subscribe((data) => {
            this.artistList = data.artists;
        });
        this.musicService.getPlaylist().subscribe((data) => {
            this.playList = data.status;
            console.log(this.playList);
        });
    }
    getGenreMusic(musics) {
        this.songList = musics;
    }
    presentPopover(list) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _music_dropdown_music_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["MusicDropdownComponent"],
                componentProps: { 'playlistData': list },
                translucent: false,
                cssClass: 'dropdown-menu'
            });
            popover.onDidDismiss().then((d) => {
                console.log("tessd");
                this.ngOnInit();
            });
            return yield popover.present();
        });
    }
    musicList(ev) {
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
    selectMusic(ev) {
        console.log(ev);
        this.selectMusicList = ev.detail.value;
    }
    searchChanged(musicname) {
        const searchTerm = musicname.srcElement.value;
        console.log(searchTerm);
        if (!searchTerm) {
            this.ngOnInit();
        }
        else {
            this.programService.searchMusic({ "searchQuery": searchTerm }).subscribe((search) => {
                this.songList = (search.musicList);
            });
        }
    }
    searchArtist(artistname) {
        const searchTerm = artistname.srcElement.value;
        if (!searchTerm) {
            this.ngOnInit();
        }
        else {
            var abc = this.artistList.filter(artist => artist.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            this.artistList = abc;
        }
    }
    searchPlaylist(playlistname) {
        console.log(this.playList);
        const searchTerm = playlistname.srcElement.value;
        if (!searchTerm) {
            this.ngOnInit();
        }
        else {
            var abc = this.playList.filter(playlist => playlist.playlist_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            this.playList = abc;
        }
    }
    goBack() {
        this.navCtrl.back();
    }
};
MusicPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MusicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-music',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/music.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music.page.scss */ "./src/app/music/music.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"],
        _services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], MusicPage);



/***/ })

}]);
//# sourceMappingURL=music-music-module-es2015.js.map