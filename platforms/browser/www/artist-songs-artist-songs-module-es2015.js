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
/* harmony default export */ __webpack_exports__["default"] = (".list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0; }\n\n.list-head span {\n  display: block;\n  font-size: 0.70rem;\n  color: #000;\n  margin-top: 3px; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -24px;\n  z-index: 99;\n  --knob-size: 16px;\n  --height: 26px; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: 100% !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.sticky-footer.musiclist {\n  position: absolute;\n  bottom: 40px; }\n\n.musiclist ion-item .pause, .musiclist ion-item.active .play {\n  display: none; }\n\n.musiclist ion-item.active .pause {\n  display: block; }\n\n.ios.sticky-footer.musiclist {\n  bottom: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMvYXJ0aXN0LXNvbmdzL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcbXVzaWNcXGFydGlzdC1zb25nc1xcYXJ0aXN0LXNvbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGdCQUFnQjtFQUFDLG1CQUFtQjtFQUFDLFNBQVMsRUFBQTs7QUFDekQ7RUFBZ0IsY0FBYztFQUFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxlQUFlLEVBQUE7O0FBRTdFO0VBQVUsa0JBQWtCO0VBQUMsV0FBVztFQUFDLFVBQVU7RUFBQyxXQUFXO0VBQUMsaUJBQVk7RUFBTSxjQUFTLEVBQUE7O0FBQzNGO0VBQVksMEJBQTBCLEVBQUE7O0FBQ3RDO0VBQXFCLHlCQUFhO0VBQWEsc0JBQXNCO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzVGO0VBQStCLFNBQVM7RUFBQyxrQkFBa0I7RUFBQyxpQkFBaUIsRUFBQTs7QUFDN0U7RUFBb0MsV0FBVztFQUFDLFlBQVk7RUFBQyx3Q0FBaUI7RUFBd0Isa0JBQWEsRUFBQTs7QUFDbkg7RUFBNkMsV0FBVyxFQUFBOztBQUV4RDtFQUF5QixrQkFBa0I7RUFBQyxZQUFZLEVBQUE7O0FBRXhEO0VBQTRELGFBQWEsRUFBQTs7QUFDekU7RUFBa0MsY0FBYyxFQUFBOztBQUVoRDtFQUE2QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy9hcnRpc3Qtc29uZ3MvYXJ0aXN0LXNvbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWhlYWR7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDAuODc1cmVtO21hcmdpbjogMDt9XHJcbi5saXN0LWhlYWQgc3BhbntkaXNwbGF5OiBibG9jaztmb250LXNpemU6IDAuNzByZW07Y29sb3I6ICMwMDA7bWFyZ2luLXRvcDogM3B4O31cclxuXHJcbmlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7dG9wOiAtMjRweDt6LWluZGV4OiA5OTstLWtub2Itc2l6ZTogMTZweDstLWhlaWdodDogMjZweDt9XHJcbi5hdWRpby1saXN0e3BhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtjb2xvcjogI0ZGRiAhaW1wb3J0YW50O3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luOiAwO21hcmdpbi1yaWdodDogMjBweDtvdmVyZmxvdzogaW5oZXJpdDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9ue3dpZHRoOiAyNXB4O2hlaWdodDogMjVweDstLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50Oy0tYm94LXNoYWRvdzogbm9uZTt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29ue2NvbG9yOiAjRkZGO31cclxuXHJcbi5zdGlja3ktZm9vdGVyLm11c2ljbGlzdHtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA0MHB4O31cclxuXHJcbi5tdXNpY2xpc3QgaW9uLWl0ZW0gLnBhdXNlLC5tdXNpY2xpc3QgaW9uLWl0ZW0uYWN0aXZlIC5wbGF5e2Rpc3BsYXk6IG5vbmU7fVxyXG4ubXVzaWNsaXN0IGlvbi1pdGVtLmFjdGl2ZSAucGF1c2V7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuLmlvcy5zdGlja3ktZm9vdGVyLm11c2ljbGlzdHtib3R0b206IDQ4cHg7fSJdfQ== */");

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