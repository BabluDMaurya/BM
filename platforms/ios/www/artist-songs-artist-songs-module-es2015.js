(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["artist-songs-artist-songs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/artist-songs/artist-songs.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music/artist-songs/artist-songs.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{artistData?.name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-toolbar class=\"searchbar\">\r\n    <ion-searchbar></ion-searchbar>\r\n  </ion-toolbar>\r\n  \r\n  <app-audio-player [songList]=\"songList\"></app-audio-player>\r\n  <!-- <ion-list lines=\"none\" class=\"musiclist\"> \r\n    <ion-item  *ngFor=\"let item of artistData?.musics\" (click)=\"musicSelect=item?.id\" [ngClass]=\"musicSelect==item?.id?'active':''\">\r\n      <ion-icon class=\"play\" ios=\"ios-play\" md=\"md-play\" slot=\"start\"></ion-icon>\r\n      <ion-icon class=\"pause\" ios=\"ios-pause\" md=\"md-pause\" slot=\"start\"></ion-icon>\r\n      <h3 class=\"list-head\">{{item?.title}}</h3>\r\n      <ion-text slot=\"end\">{{item?.duration}}</ion-text>\r\n    </ion-item> \r\n  </ion-list> -->\r\n \r\n</ion-content>");

/***/ }),

/***/ "./src/app/music/artist-songs/artist-songs-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/music/artist-songs/artist-songs-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ArtistSongsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSongsPageRoutingModule", function() { return ArtistSongsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _artist_songs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist-songs.page */ "./src/app/music/artist-songs/artist-songs.page.ts");




const routes = [
    {
        path: '',
        component: _artist_songs_page__WEBPACK_IMPORTED_MODULE_3__["ArtistSongsPage"]
    }
];
let ArtistSongsPageRoutingModule = class ArtistSongsPageRoutingModule {
};
ArtistSongsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArtistSongsPageRoutingModule);



/***/ }),

/***/ "./src/app/music/artist-songs/artist-songs.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/music/artist-songs/artist-songs.module.ts ***!
  \***********************************************************/
/*! exports provided: ArtistSongsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSongsPageModule", function() { return ArtistSongsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _artist_songs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist-songs-routing.module */ "./src/app/music/artist-songs/artist-songs-routing.module.ts");
/* harmony import */ var _artist_songs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artist-songs.page */ "./src/app/music/artist-songs/artist-songs.page.ts");
/* harmony import */ var _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../profile/components.modules */ "./src/app/profile/components.modules.ts");








let ArtistSongsPageModule = class ArtistSongsPageModule {
};
ArtistSongsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
            _artist_songs_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArtistSongsPageRoutingModule"]
        ],
        declarations: [_artist_songs_page__WEBPACK_IMPORTED_MODULE_6__["ArtistSongsPage"]]
    })
], ArtistSongsPageModule);



/***/ }),

/***/ "./src/app/music/artist-songs/artist-songs.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/music/artist-songs/artist-songs.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0;\n}\n\n.list-head span {\n  display: block;\n  font-size: 0.7rem;\n  color: #000;\n  margin-top: 3px;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -24px;\n  z-index: 99;\n  --knob-size: 16px;\n  --height: 26px;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: 100% !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 40px;\n}\n\n.musiclist ion-item .pause, .musiclist ion-item.active .play {\n  display: none;\n}\n\n.musiclist ion-item.active .pause {\n  display: block;\n}\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvYXJ0aXN0LXNvbmdzL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXG11c2ljXFxhcnRpc3Qtc29uZ3NcXGFydGlzdC1zb25ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL211c2ljL2FydGlzdC1zb25ncy9hcnRpc3Qtc29uZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsZ0JBQUE7RUFBaUIsbUJBQUE7RUFBb0IsU0FBQTtBQ0loRDs7QURIQTtFQUFnQixjQUFBO0VBQWUsaUJBQUE7RUFBbUIsV0FBQTtFQUFZLGVBQUE7QUNVOUQ7O0FEUkE7RUFBVSxrQkFBQTtFQUFtQixXQUFBO0VBQVksVUFBQTtFQUFXLFdBQUE7RUFBWSxpQkFBQTtFQUFrQixjQUFBO0FDaUJsRjs7QURoQkE7RUFBWSwwQkFBQTtBQ29CWjs7QURuQkE7RUFBcUIseUJBQUE7RUFBMEIsc0JBQUE7RUFBdUIsc0JBQUE7QUN5QnRFOztBRHhCQTtFQUErQixTQUFBO0VBQVUsa0JBQUE7RUFBbUIsaUJBQUE7QUM4QjVEOztBRDdCQTtFQUFvQyxXQUFBO0VBQVksWUFBQTtFQUFhLHdDQUFBO0VBQXlDLGtCQUFBO0FDb0N0Rzs7QURuQ0E7RUFBNkMsV0FBQTtBQ3VDN0M7O0FEckNBO0VBQXlCLGtCQUFBO0VBQW1CLFlBQUE7QUMwQzVDOztBRHhDQTtFQUE0RCxhQUFBO0FDNEM1RDs7QUQzQ0E7RUFBa0MsY0FBQTtBQytDbEM7O0FEN0NBO0VBQTZCLFlBQUE7QUNpRDdCIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMvYXJ0aXN0LXNvbmdzL2FydGlzdC1zb25ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1oZWFke2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjg3NXJlbTttYXJnaW46IDA7fVxyXG4ubGlzdC1oZWFkIHNwYW57ZGlzcGxheTogYmxvY2s7Zm9udC1zaXplOiAwLjcwcmVtO2NvbG9yOiAjMDAwO21hcmdpbi10b3A6IDNweDt9XHJcblxyXG5pb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO3RvcDogLTI0cHg7ei1pbmRleDogOTk7LS1rbm9iLXNpemU6IDE2cHg7LS1oZWlnaHQ6IDI2cHg7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNGRkYgIWltcG9ydGFudDt3aWR0aDogMTAwJSAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbjogMDttYXJnaW4tcmlnaHQ6IDIwcHg7b3ZlcmZsb3c6IGluaGVyaXQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbnt3aWR0aDogMjVweDtoZWlnaHQ6IDI1cHg7LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDstLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbntjb2xvcjogI0ZGRjt9XHJcblxyXG4uc3RpY2t5LWZvb3Rlci5tdXNpY2xpc3R7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogNDBweDt9XHJcblxyXG4ubXVzaWNsaXN0IGlvbi1pdGVtIC5wYXVzZSwubXVzaWNsaXN0IGlvbi1pdGVtLmFjdGl2ZSAucGxheXtkaXNwbGF5OiBub25lO31cclxuLm11c2ljbGlzdCBpb24taXRlbS5hY3RpdmUgLnBhdXNle2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbi5pb3Muc3RpY2t5LWZvb3Rlci5tdXNpY2xpc3R7Ym90dG9tOiA0OHB4O30iLCIubGlzdC1oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdC1oZWFkIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTI0cHg7XG4gIHotaW5kZXg6IDk5O1xuICAtLWtub2Itc2l6ZTogMTZweDtcbiAgLS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5hdWRpby1saXN0IHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLnN0aWNreS1mb290ZXIubXVzaWNsaXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwcHg7XG59XG5cbi5tdXNpY2xpc3QgaW9uLWl0ZW0gLnBhdXNlLCAubXVzaWNsaXN0IGlvbi1pdGVtLmFjdGl2ZSAucGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tdXNpY2xpc3QgaW9uLWl0ZW0uYWN0aXZlIC5wYXVzZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW9zLnN0aWNreS1mb290ZXIubXVzaWNsaXN0IHtcbiAgYm90dG9tOiA0OHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/music/artist-songs/artist-songs.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/music/artist-songs/artist-songs.page.ts ***!
  \*********************************************************/
/*! exports provided: ArtistSongsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSongsPage", function() { return ArtistSongsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/music.service */ "./src/app/services/music.service.ts");









let ArtistSongsPage = class ArtistSongsPage {
    constructor(platform, loadingCtrl, toastCtrl, file, transfer, media, actRoute, datePipe, musicService, navCtrl) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.transfer = transfer;
        this.media = media;
        this.actRoute = actRoute;
        this.datePipe = datePipe;
        this.musicService = musicService;
        this.navCtrl = navCtrl;
        this.filename = 'I_Have_a_Dream.mp3';
        this.is_playing = false;
        this.is_in_play = false;
        this.is_ready = false;
        this.duration = -1;
        this.position = 0;
        this.platform.ready().then(() => {
            if (this.platform.is('ios')) {
                this.storageDirectory = this.file.dataDirectory;
            }
            else if (this.platform.is('android')) {
                this.storageDirectory = this.file.externalDataDirectory;
            }
            else {
                this.storageDirectory = this.file.cacheDirectory;
            }
        });
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.artistId = params.get('artistData');
            this.musicService.getArtistById({ 'artistId': this.artistId }).subscribe((data) => {
                this.artistData = data.artists[0];
                this.songList = data.artists[0].musics;
            });
        });
        this.prepareAudioFile();
    }
    prepareAudioFile() {
        let url = 'https://ia800207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3';
        this.platform.ready().then(() => {
            this.file
                .resolveDirectoryUrl(this.storageDirectory)
                .then(resolvedDirectory => {
                // inspired by: https://github.com/ionic-team/ionic-native/issues/1711
                console.log('resolved  directory: ' + resolvedDirectory.nativeURL);
                this.file
                    .checkFile(resolvedDirectory.nativeURL, this.filename)
                    .then(data => {
                    if (data == true) {
                        // exist
                        this.getDurationAndSetToPlay();
                    }
                    else {
                        // not sure if File plugin will return false. go to download
                        console.log('not found!');
                        throw { code: 1, message: 'NOT_FOUND_ERR' };
                    }
                })
                    .catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log('Error occurred while checking local files:');
                    console.log(err);
                    if (err.code == 1) {
                        // not found! download!
                        console.log('not found! download!');
                        let loadingEl = yield this.loadingCtrl.create({
                            message: 'Downloading the song from the web...'
                        });
                        loadingEl.present();
                        const fileTransfer = this.transfer.create();
                        fileTransfer
                            .download(url, this.storageDirectory + this.filename)
                            .then(entry => {
                            console.log('download complete' + entry.toURL());
                            loadingEl.dismiss();
                            this.getDurationAndSetToPlay();
                        })
                            .catch(err_2 => {
                            console.log('Download error!');
                            loadingEl.dismiss();
                            console.log(err_2);
                        });
                    }
                }));
            });
        });
    }
    createAudioFile(pathToDirectory, filename) {
        if (this.platform.is('ios')) {
            //ios
            return this.media.create(pathToDirectory.replace(/^file:\/\//, '') + '/' + filename);
        }
        else {
            // android
            return this.media.create(pathToDirectory + filename);
        }
    }
    getDurationAndSetToPlay() {
        this.curr_playing_file = this.createAudioFile(this.storageDirectory, this.filename);
        this.curr_playing_file.play();
        this.curr_playing_file.setVolume(0.0); // you don't want users to notice that you are playing the file
        let self = this;
        this.get_duration_interval = setInterval(function () {
            if (self.duration == -1) {
                self.duration = ~~self.curr_playing_file.getDuration(); // make it an integer
            }
            else {
                self.curr_playing_file.stop();
                self.curr_playing_file.release();
                self.setRecordingToPlay();
                clearInterval(self.get_duration_interval);
            }
        }, 100);
    }
    getAndSetCurrentAudioPosition() {
        let diff = 1;
        let self = this;
        this.get_position_interval = setInterval(function () {
            let last_position = self.position;
            self.curr_playing_file.getCurrentPosition().then(position => {
                if (position >= 0 && position < self.duration) {
                    if (Math.abs(last_position - position) >= diff) {
                        // set position
                        self.curr_playing_file.seekTo(last_position * 1000);
                    }
                    else {
                        // update position for display
                        self.position = position;
                    }
                }
                else if (position >= self.duration) {
                    self.stopPlayRecording();
                    self.setRecordingToPlay();
                }
            });
        }, 100);
    }
    setRecordingToPlay() {
        this.curr_playing_file = this.createAudioFile(this.storageDirectory, this.filename);
        this.curr_playing_file.onStatusUpdate.subscribe(status => {
            // 2: playing
            // 3: pause
            // 4: stop
            this.message = status;
            switch (status) {
                case 1:
                    this.is_in_play = false;
                    break;
                case 2: // 2: playing
                    this.is_in_play = true;
                    this.is_playing = true;
                    break;
                case 3: // 3: pause
                    this.is_in_play = true;
                    this.is_playing = false;
                    break;
                case 4: // 4: stop
                default:
                    this.is_in_play = false;
                    this.is_playing = false;
                    break;
            }
        });
        console.log('audio file set');
        this.message = 'audio file set';
        this.is_ready = true;
        this.getAndSetCurrentAudioPosition();
    }
    playRecording() {
        this.curr_playing_file.play();
        this.toastCtrl
            .create({
            message: `Start playing from ${this.fmtMSS(this.position)}`,
            duration: 2000
        })
            .then(toastEl => toastEl.present());
    }
    pausePlayRecording() {
        this.curr_playing_file.pause();
        this.toastCtrl
            .create({
            message: `Paused at ${this.fmtMSS(this.position)}`,
            duration: 2000
        })
            .then(toastEl => toastEl.present());
    }
    stopPlayRecording() {
        this.curr_playing_file.stop();
        this.curr_playing_file.release();
        clearInterval(this.get_position_interval);
        this.position = 0;
    }
    controlSeconds(action) {
        let step = 15;
        let number = this.position;
        switch (action) {
            case 'back':
                this.position = number < step ? 0.001 : number - step;
                this.toastCtrl
                    .create({
                    message: `Went back ${step} seconds`,
                    duration: 2000
                })
                    .then(toastEl => toastEl.present());
                break;
            case 'forward':
                this.position =
                    number + step < this.duration ? number + step : this.duration;
                this.toastCtrl
                    .create({
                    message: `Went forward ${step} seconds`,
                    duration: 2000
                })
                    .then(toastEl => toastEl.present());
                break;
            default:
                break;
        }
    }
    fmtMSS(s) {
        return this.datePipe.transform(s * 1000, 'mm:ss');
    }
    goBack() {
        this.navCtrl.back();
    }
};
ArtistSongsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_8__["MusicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ArtistSongsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artist-songs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist-songs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music/artist-songs/artist-songs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist-songs.page.scss */ "./src/app/music/artist-songs/artist-songs.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        _services_music_service__WEBPACK_IMPORTED_MODULE_8__["MusicService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ArtistSongsPage);



/***/ })

}]);
//# sourceMappingURL=artist-songs-artist-songs-module-es2015.js.map