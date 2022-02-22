(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-video-add-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/add-video.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/add-video.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content> \r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showMusic==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Add Video</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"submitForm()\" class=\"text-green\" *ngIf=\"visibility\">Next</ion-label>\r\n          <!-- <ion-fab-button class=\"btn-next\" size=\"small\" slot=\"end\"><ion-icon ios=\"ios-send\" md=\"md-send\"></ion-icon></ion-fab-button>           -->\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header> \r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n    \r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n    \r\n        </ion-card>\r\n      </ion-col>\r\n      </ion-row>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"videoForm\">\r\n          <ion-list>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input formControlName=\"title\" type=\"text\" class=\"form-control\"></ion-input>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.title\">\r\n              <span class=\"error-message\" *ngIf=\"(isSubmitted || videoForm.get('title').touched) && videoForm.get('title').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Description <span>*</span></ion-label>\r\n              <ion-textarea rows=\"5\" auto-grow=\"true\" formControlName=\"description\" class=\"form-control\"></ion-textarea>\r\n            </ion-item>           \r\n            <ng-container *ngFor=\"let validation of validation_messages.description\">\r\n              <span class=\"error-message\" *ngIf=\"(isSubmitted || videoForm.get('description').touched) && videoForm.get('description').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>            \r\n          </ion-list>\r\n        </form>    \r\n        <div class=\"position-relative\" style=\"text-align: center;background: #f1f0f5;\">\r\n          <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n          <img *ngIf=\"!videoFileSelected\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/loading.jpg\">\r\n        </div>        \r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-footer class=\"sticky-footer icon-footer sticky-footer-bablu\">\r\n      <ion-list class=\"ion-no-margin\">\r\n        <ion-item>\r\n          <img (click)=\"selectVideo()\" src=\"../../assets/images/photo.svg\" />\r\n        </ion-item>\r\n        <ion-item >          \r\n          <img (click)=\"captureVideo()\" src=\"../../assets/images/film.svg\" />\r\n        </ion-item>        \r\n      </ion-list>\r\n    </ion-footer>       -->\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showMusic==2\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showMusic=1\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Select Music</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"musicVolume()\" class=\"text-green\">Next</ion-label>\r\n          <!-- (click)=\"musicVolume()\" -->\r\n          <!-- <ion-fab-button class=\"btn-next\" size=\"small\" slot=\"end\"><ion-icon ios=\"ios-send\" md=\"md-send\"></ion-icon></ion-fab-button>           -->\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-segment class=\"top-segment\" (ionChange)=\"musicList($event)\" >\r\n          <ion-segment-button value=\"music\" checked>\r\n            <span>Music</span>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"playlist\">\r\n            <span>Playlist</span>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n        <div [ngSwitch]=\"musicTypes\">\r\n          <div *ngSwitchCase=\"'music'\">\r\n            <ion-toolbar class=\"searchbar\">\r\n              <ion-searchbar type=\"text\" (ionInput)=\"searchChanged($event)\"></ion-searchbar>\r\n            </ion-toolbar>\r\n            <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"datagenres\">              \r\n              <ion-segment class=\"ion-no-padding\" *ngIf=\"searchMusicData\">               \r\n                <ion-segment-button>Search Result</ion-segment-button>              \r\n              </ion-segment>\r\n              <ion-segment *ngIf=\"!searchMusicData\" class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\" >               \r\n                <ion-segment-button  value=\"{{genres.id}}\" *ngFor=\"let genres of datagenres; let i = index;\" [checked]=\"i==0 ? true : false\">{{genres.name}}</ion-segment-button>              \r\n              </ion-segment>\r\n            </ion-toolbar>\r\n            \r\n            <div [ngSwitch]=\"selectMusicList\" *ngIf=\"datagenres\">\r\n              <div *ngIf=\"!searchMusicData\">\r\n              <div *ngFor=\"let musicArray of datagenres; let m = index;\">                 \r\n                <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"musicArray.id\">                    \r\n                  <div *ngIf=\"!musicArray.musics.length == 0\">\r\n                  <ion-item (click)=\"musicSelect([j+1,musicArray.id,music.id,music.filename,music.title,music.duration])\" [ngClass]=\"(j+1)==activeMusic ? musicArray.id == activetab ? 'active' : '' : '' \" *ngFor=\"let music of musicArray.musics; let j = index;\">\r\n                        <ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon>\r\n                        <ion-label>{{music.title}}</ion-label>\r\n                        <ion-text>{{music.duration}}</ion-text>                                        \r\n                  </ion-item>                            \r\n                  </div>\r\n                  <div *ngIf=\"musicArray.musics.length == 0\">\r\n                    <ion-item class=\"no-data\">\r\n                      <ion-label>No Music Data</ion-label>\r\n                    </ion-item>                           \r\n                  </div>\r\n                </ion-list>              \r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"searchMusicData\">                 \r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\">\r\n                <div *ngIf=\"!datagenres.length == 0\">\r\n                  <ion-item [ngClass]= \"(j+1)==activeMusic ? 'active' : '' \" (click)=\"musicSelect([(j+1),1,music.id,music.filename,music.title,music.duration])\" *ngFor=\"let music of datagenres; let j = index;\">\r\n                    <ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon>\r\n                        <ion-label>{{music.title}}</ion-label>\r\n                        <ion-text>{{music.duration}}</ion-text>\r\n                  </ion-item>                               \r\n                </div>            \r\n              </ion-list>              \r\n            </div>\r\n          </div>\r\n\r\n            <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"!datagenres\">              \r\n              <ion-segment class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\" >\r\n                <ion-segment-button value=\"hiphop\" checked>\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"classical\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"edm\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"folk\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"rock\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"jazz\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"indianfolk\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"blues\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"beats\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"trap\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"alternativehiphop\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n            <div [ngSwitch]=\"selectMusicList\" *ngIf=\"!datagenres\">\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'hiphop'\"> \r\n                <ion-item (click)=\"musicSelect=1\" [ngClass]=\"musicSelect==1?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=2\" [ngClass]=\"musicSelect==2?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=3\" [ngClass]=\"musicSelect==3?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=4\" [ngClass]=\"musicSelect==4?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>          \r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'classical'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'edm'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'folk'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'rock'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'jazz'\"> \r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <div *ngSwitchCase=\"'playlist'\">\r\n            <ion-list *ngFor=\"let list of playList; let i = index; \">\r\n              <ion-item>\r\n                <ion-label (click)=\"playListeSelect(list?.id,i)\">\r\n                  <h3 class=\"list-person\">{{list?.playlist_name}}</h3>\r\n                  <span class=\"list-name\">{{list?.playlist_songs?.length}} Songs</span>\r\n                </ion-label>\r\n                <!-- <ion-icon slot=\"end\" ios=\"ios-more\" md=\"md-more\" ></ion-icon> -->\r\n                <div class=\"action-links\" slot=\"end\">\r\n                  <ion-icon *ngIf = \"customClass != i\" ios=\"ios-arrow-down\" md=\"ios-arrow-down\"></ion-icon> \r\n                  <ion-icon *ngIf = \"customClass == i\"ios=\"ios-arrow-up\" md=\"ios-arrow-up\"></ion-icon>\r\n                </div> \r\n              </ion-item>\r\n              <!-- <app-expandable expandHeight=\"300px\" class=\"timeline-block\" [expanded]=\"list.expanded\"> -->\r\n              <div [ngClass]=\"customClass == i ? 'active':'deactive'\">\r\n                <ion-item class=\"item-label item md in-list musicPlayList-item\" *ngFor=\"let song of songList;\" (click)=\"musicSelect([(j+1),2,song.id,song.filename,song.title,song.duration])\">\r\n                  <ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon>\r\n                  <ion-label class=\"list-name d-block\"> \r\n                    <h3 class=\"list-head\">{{song.title}}</h3>\r\n                    <ion-text slot=\"end\">{{song.duration}}</ion-text>  \r\n                  </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            <!-- </app-expandable> -->            \r\n            </ion-list>\r\n          </div>         \r\n        </div>        \r\n      </ion-col>           \r\n    </ion-row>    \r\n    <!-- <ion-footer class=\"musiclist green   sticky-footer sticky-footer-bablu\">\r\n      <app-audio-player [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n      </app-audio-player>    \r\n    </ion-footer> -->\r\n    <div class=\"musiclistFooter\">\r\n      <app-audio-player [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n      </app-audio-player>    \r\n    </div>\r\n  </ion-grid>   \r\n   \r\n </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/audio-player/audio-player.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/audio-player/audio-player.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<audio #player src=\"{{selectedAudio[0]}}\"></audio>\r\n<div class=\"musicWrapper\">\r\n    <ion-toolbar padding class=\"audio-list ion-no-padding\">\r\n        <div class=\"audio-listInner\">\r\n        <ion-fab-button (click)=\"play()\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n            <ng-container *ngIf=\"isLoading; else loaded\"><ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner></ng-container>\r\n            <ng-template #loaded>\r\n                <ion-icon [name]=\"isPlaying ? selectedAudio[1]!=0 ? 'play' : 'pause' : 'play'\">\r\n                </ion-icon>\r\n            </ng-template>\r\n        </ion-fab-button>\r\n        <div>\r\n            <div class=\"musicbar\">            \r\n                <ion-range min=\"0\" [max]=\"duration\" [value]=\"currentTime\" (ionChange)=\"seek($event)\" class=\"newmusiclist-range\" color=\"light\"></ion-range>                \r\n            </div>\r\n            <div>\r\n                <div class=\"music-timer-fav\">\r\n                    <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n                </div>\r\n                <div class=\"music-name\">\r\n                    <ion-label class=\"ion-text-center\">{{selectedAudio[2]}}</ion-label>\r\n                </div>   \r\n            </div>             \r\n        </div>\r\n    </div>\r\n        <!-- <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label> -->\r\n    </ion-toolbar>\r\n</div>");

/***/ }),

/***/ "./src/app/add-video/add-video-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-video/add-video-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoPageRoutingModule", function() { return AddVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-video.page */ "./src/app/add-video/add-video.page.ts");




const routes = [
    {
        path: '',
        component: _add_video_page__WEBPACK_IMPORTED_MODULE_3__["AddVideoPage"]
    }, {
        path: 'video-preview',
        loadChildren: () => __webpack_require__.e(/*! import() | video-preview-video-preview-module */ "video-preview-video-preview-module").then(__webpack_require__.bind(null, /*! ./video-preview/video-preview.module */ "./src/app/add-video/video-preview/video-preview.module.ts")).then(m => m.VideoPreviewPageModule)
    },
];
let AddVideoPageRoutingModule = class AddVideoPageRoutingModule {
};
AddVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/add-video/add-video.module.ts":
/*!***********************************************!*\
  !*** ./src/app/add-video/add-video.module.ts ***!
  \***********************************************/
/*! exports provided: AddVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoPageModule", function() { return AddVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-video-routing.module */ "./src/app/add-video/add-video-routing.module.ts");
/* harmony import */ var _add_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-video.page */ "./src/app/add-video/add-video.page.ts");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio-player/audio-player.component */ "./src/app/add-video/audio-player/audio-player.component.ts");







// import { AddVideoNextComponent } from './add-video-next/add-video-next.component';
// import { AddVideoCompleteComponent } from './add-video-complete/add-video-complete.component';

let AddVideoPageModule = class AddVideoPageModule {
};
AddVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _add_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddVideoPageRoutingModule"]
        ],
        entryComponents: [_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__["AudioPlayerComponent"]],
        declarations: [_add_video_page__WEBPACK_IMPORTED_MODULE_6__["AddVideoPage"], _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__["AudioPlayerComponent"]],
    })
], AddVideoPageModule);



/***/ }),

/***/ "./src/app/add-video/add-video.page.scss":
/*!***********************************************!*\
  !*** ./src/app/add-video/add-video.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea.form-control textarea {\n  height: 100%;\n  padding: 0; }\n\n.thumbnail-slider ion-slide {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.thumbnail-slider ion-slide ion-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  --min-height: 100%;\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail-slider ion-slide ion-radio {\n  margin-top: -50px; }\n\n.no_footer {\n  padding-top: 50px;\n  height: 100vh; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.ios.main_content {\n  padding-top: 0; }\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px; }\n\nion-segment-button {\n  position: relative; }\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%; }\n\n.video-skeleton {\n  height: 200px; }\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px; }\n\n.btn-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  font-size: 28px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\nion-radio {\n  position: absolute;\n  top: 5px; }\n\n.musiclistFooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.deactive {\n  display: none; }\n\n.active {\n  display: block; }\n\nion-footer.sticky-footer {\n  padding: 0; }\n\nion-footer.sticky-footer ion-list {\n    flex-wrap: nowrap; }\n\nion-footer.sticky-footer ion-list ion-item {\n      width: 50%;\n      margin: 0;\n      text-align: center;\n      background: #3da89e;\n      --background: #3da89e; }\n\nion-footer.sticky-footer ion-list ion-item img {\n        margin: auto; }\n\nion-footer.sticky-footer ion-list ion-item::after {\n      content: '';\n      width: 1px;\n      height: 30px;\n      background: #94e2db;\n      position: absolute;\n      top: 13px;\n      right: 0; }\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2)::after {\n      display: none; }\n\nion-footer.sticky-footer ion-list ion-item:nth-child(2) {\n      background: #3da89e;\n      --background: #3da89e; }\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4; }\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0; }\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n  color: #fff !important; }\n\n.musicPlayList-item {\n  font-size: 0.85rem;\n  --padding-start: 10px; }\n\n.musicPlayList-item ion-icon {\n  margin-right: 5px;\n  color: #222;\n  font-size: 1rem; }\n\n.musicPlayList-item .list-name {\n  margin: 0; }\n\n.musicPlayList-item .list-name .list-head {\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin: 0;\n  color: #222; }\n\n.musicPlayList-item .list-name ion-text {\n  display: block;\n  font-size: 0.70rem;\n  color: #000;\n  margin-top: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxhZGQtdmlkZW9cXGFkZC12aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBbUMsWUFBWTtFQUFDLFVBQVUsRUFBQTs7QUFDMUQ7RUFBNEIsa0JBQWtCO0VBQUMsa0JBQWtCO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ2xGO0VBQXFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWE7RUFBTSx5QkFBYTtFQUFhLGtCQUFnQjtFQUFHLHNCQUFvQixFQUFBOztBQUNySztFQUFrQixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFDNUQ7RUFBc0MsaUJBQWlCLEVBQUE7O0FBQ3ZEO0VBQVcsaUJBQWlCO0VBQUMsYUFBYSxFQUFBOztBQUUxQztFQUFVLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxVQUFVO0VBQUMsV0FBVyxFQUFBOztBQUMvRDtFQUFZLDBCQUEwQixFQUFBOztBQUN0QztFQUFxQix5QkFBYTtFQUFhLHNCQUFzQjtFQUFDLHNCQUFzQixFQUFBOztBQUM1RjtFQUErQixTQUFTO0VBQUMsa0JBQWtCO0VBQUMsaUJBQWlCLEVBQUE7O0FBQzdFO0VBQW9DLFdBQVc7RUFBQyxZQUFZO0VBQUMsd0NBQWlCO0VBQXdCLGtCQUFhLEVBQUE7O0FBQ25IO0VBQTZDLFdBQVcsRUFBQTs7QUFHeEQ7RUFBa0IsY0FBYyxFQUFBOztBQUdoQztFQUFzQyxZQUFZLEVBQUE7O0FBQ2xEO0VBQW1CLGtCQUFrQixFQUFBOztBQUNyQztFQUFxQyxrQkFBa0I7RUFBQyxZQUFZO0VBQUMsU0FBUztFQUFDLFVBQVUsRUFBQTs7QUFDekY7RUFBZ0IsYUFBYSxFQUFBOztBQUM3QjtFQUE0RCxTQUFTO0VBQUMsWUFBWSxFQUFBOztBQUVsRjtFQUFXLGtCQUFrQjtFQUFDLFFBQVE7RUFBRSxNQUFNO0VBQUMsVUFBVTtFQUFDLGVBQWUsRUFBQTs7QUFFekU7RUFBTyxpQkFBaUIsRUFBQTs7QUFDeEI7RUFBVSxrQkFBa0I7RUFBQyxRQUFPLEVBQUE7O0FBQ3BDO0VBQWlCLGVBQWU7RUFBQyxTQUFTO0VBQUMsV0FBVyxFQUFBOztBQUN0RDtFQUFVLGFBQVksRUFBQTs7QUFDdEI7RUFBUSxjQUFjLEVBQUE7O0FBQ3RCO0VBQXlCLFVBQVUsRUFBQTs7QUFBbkM7SUFDYyxpQkFBaUIsRUFBQTs7QUFEL0I7TUFFVyxVQUFVO01BQUMsU0FBUztNQUFDLGtCQUFrQjtNQUFLLG1CQUFtQjtNQUN2RSxxQkFBYSxFQUFBOztBQUhoQjtRQUlPLFlBQVksRUFBQTs7QUFKbkI7TUFNa0IsV0FBVztNQUFDLFVBQVU7TUFBQyxZQUFZO01BQ2xELG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsU0FBUztNQUFDLFFBQVEsRUFBQTs7QUFUckI7TUFVK0IsYUFBYSxFQUFBOztBQVY1QztNQVc0QixtQkFBbUI7TUFDNUMscUJBQWEsRUFBQTs7QUFJaEI7RUFDVyxjQUFhLEVBQUE7O0FBRHhCO0VBRWMsYUFBWSxFQUFBOztBQUsxQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNDLGtCQUFrQjtFQUNsQixxQkFBZ0IsRUFBQTs7QUFFakI7RUFDQyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFaEI7RUFDQyxTQUFTLEVBQUE7O0FBRVY7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBRVo7RUFDQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtdmlkZW8vYWRkLXZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10ZXh0YXJlYS5mb3JtLWNvbnRyb2x7aGVpZ2h0OiBjYWxjKDEuNWVtICsgNXJlbSArIDJweCk7fVxyXG5pb24tdGV4dGFyZWEuZm9ybS1jb250cm9sIHRleHRhcmVhe2hlaWdodDogMTAwJTtwYWRkaW5nOiAwO31cclxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRle3Bvc2l0aW9uOiByZWxhdGl2ZTtib3JkZXItcmFkaXVzOiA4cHg7b3ZlcmZsb3c6IGhpZGRlbjt9XHJcbi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZSBpb24taXRlbXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlOy0tbWluLWhlaWdodDogMTAwJTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwO31cclxuLnN3aXBlci1zbGlkZSBpbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO29iamVjdC1maXQ6IGNvdmVyO31cclxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1yYWRpb3ttYXJnaW4tdG9wOiAtNTBweDt9XHJcbi5ub19mb290ZXJ7cGFkZGluZy10b3A6IDUwcHg7aGVpZ2h0OiAxMDB2aDt9XHJcblxyXG5pb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO3RvcDogLTMwcHg7ei1pbmRleDogOTk7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNGRkYgIWltcG9ydGFudDt3aWR0aDogYXV0byAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbjogMDttYXJnaW4tcmlnaHQ6IDIwcHg7b3ZlcmZsb3c6IGluaGVyaXQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbnt3aWR0aDogMjVweDtoZWlnaHQ6IDI1cHg7LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDstLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbntjb2xvcjogI0ZGRjt9XHJcblxyXG4vLyBpb3MgY3NzXHJcbi5pb3MubWFpbl9jb250ZW50e3BhZGRpbmctdG9wOiAwO31cclxuXHJcbi8vIGlvbi1za2VsZXRvbi10ZXh0IGNzc1xyXG4ubXVzaWNsaXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e2hlaWdodDogMzBweDt9XHJcbmlvbi1zZWdtZW50LWJ1dHRvbntwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG5pb24tc2VnbWVudC1idXR0b24gaW9uLXNrZWxldG9uLXRleHR7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogMTAwJTttYXJnaW46IDA7d2lkdGg6IDk1JTt9XHJcbi52aWRlby1za2VsZXRvbntoZWlnaHQ6IDIwMHB4O31cclxucCBpb24tc2tlbGV0b24tdGV4dCwgLnJhZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7bWFyZ2luOiAwO2hlaWdodDogMjBweDt9XHJcblxyXG4uYnRuLWNsb3Nle3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMDsgdG9wOiAwO3otaW5kZXg6IDk7Zm9udC1zaXplOiAyOHB4O31cclxuXHJcbi5tbC0zMHttYXJnaW4tbGVmdDogMzBweDt9XHJcbmlvbi1yYWRpb3twb3NpdGlvbjogYWJzb2x1dGU7dG9wOjVweH1cclxuLm11c2ljbGlzdEZvb3Rlcntwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwO3dpZHRoOiAxMDAlfVxyXG4uZGVhY3RpdmV7ZGlzcGxheTpub25lO31cclxuLmFjdGl2ZXtkaXNwbGF5OiBibG9jazt9XHJcbmlvbi1mb290ZXIuc3RpY2t5LWZvb3RlcntwYWRkaW5nOiAwO1xyXG5cdGlvbi1saXN0eyAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRcdGlvbi1pdGVte3dpZHRoOiA1MCU7bWFyZ2luOiAwO3RleHQtYWxpZ246IGNlbnRlcjsgICAgYmFja2dyb3VuZDogIzNkYTg5ZTtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiAjM2RhODllO1xyXG5cdFx0XHRpbWd7bWFyZ2luOiBhdXRvO31cclxuXHRcdH1cclxuXHRcdGlvbi1pdGVtOjphZnRlcntjb250ZW50OiAnJzt3aWR0aDogMXB4O2hlaWdodDogMzBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzk0ZTJkYjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDEzcHg7cmlnaHQ6IDA7fVxyXG5cdFx0aW9uLWl0ZW06bnRoLWNoaWxkKDIpOjphZnRlcntkaXNwbGF5OiBub25lO31cclxuXHRcdGlvbi1pdGVtOm50aC1jaGlsZCgyKXsgICAgYmFja2dyb3VuZDogIzNkYTg5ZTtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiAjM2RhODllO31cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1pdGVtLmZsb2F0aW5nSXRlbXtcclxuXHRpb24tbGFiZWx7Y29sb3I6I2E1YTRhNH1cclxuXHRpb24tdGV4dGFyZWF7bWFyZ2luLXRvcDowfVxyXG59XHJcblxyXG4vLyBoaXRlc2ggY3NzIHN0cnRcclxuXHJcbi5zdWJwcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5tdXNpY1BsYXlMaXN0LWl0ZW0ge1xyXG5cdGZvbnQtc2l6ZTogMC44NXJlbTtcclxuXHQtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbn1cclxuLm11c2ljUGxheUxpc3QtaXRlbSBpb24taWNvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0Y29sb3I6ICMyMjI7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5tdXNpY1BsYXlMaXN0LWl0ZW0gLmxpc3QtbmFtZSB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcbi5tdXNpY1BsYXlMaXN0LWl0ZW0gLmxpc3QtbmFtZSAubGlzdC1oZWFkIHtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblx0bWFyZ2luOiAwO1xyXG5cdGNvbG9yOiAjMjIyO1xyXG59XHJcbi5tdXNpY1BsYXlMaXN0LWl0ZW0gLmxpc3QtbmFtZSBpb24tdGV4dCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAwLjcwcmVtO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5yYW5nZS1rbm9iLWhhbmRsZSAucmFuZ2Uta25vYntcclxuICAgIFxyXG59XHJcbi8vIGhpdGVzaCBjc3MgZW5kcyJdfQ== */");

/***/ }),

/***/ "./src/app/add-video/add-video.page.ts":
/*!*********************************************!*\
  !*** ./src/app/add-video/add-video.page.ts ***!
  \*********************************************/
/*! exports provided: AddVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoPage", function() { return AddVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _music_volume_modal_music_volume_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-volume-modal/music-volume-modal.component */ "./src/app/add-video/music-volume-modal/music-volume-modal.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./audio-player/audio-player.component */ "./src/app/add-video/audio-player/audio-player.component.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");


















const baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;
const MAX_FILE_SIZE = 500 * 1024 * 1024;
// const ALLOWED_MIME_TYPE = ["video/mp4", "video/3gpp", "video/3gp", "video/avi", "video/mov", "video/mkw"];
let AddVideoPage = class AddVideoPage {
    // public list: any = [];
    constructor(commonService, musicService, platform, loadingCtrl, toastCtrl, file, transfer, media, camera, ngZone, previewAnyFile, formBuilder, datePipe, storage, nutritionService, cd, mediaCapture) {
        this.commonService = commonService;
        this.musicService = musicService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.transfer = transfer;
        this.media = media;
        this.camera = camera;
        this.ngZone = ngZone;
        this.previewAnyFile = previewAnyFile;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.storage = storage;
        this.nutritionService = nutritionService;
        this.cd = cd;
        this.mediaCapture = mediaCapture;
        this.isSubmitted = false;
        this.audioFile = 'public/storage/audio/into_20180418_173147_audio.mp3';
        this.is_playing = false;
        this.is_in_play = false;
        this.is_ready = false;
        this.position = 0;
        this.videoFileSelected = false;
        this.isUploading = false;
        this.uploadPercent = 0;
        this.showMusic = 1;
        this.musicTypes = 'music';
        this.selectMusicList = 'hiphop';
        this.searchMusicData = false;
        this.musicChanged = 0;
        this.customClass = 0;
        this.songList = [];
        this.visibility = false;
        this['validation_messages'] = {
            title: [
                { type: 'required', message: 'Title is required.' },
                { type: 'maxlength', message: 'Title cannot be more than 250 characters long' },
            ],
            description: [
                { type: 'required', message: 'Description is required.' },
                { type: 'maxlength', message: 'Description cannot be more than 1000 characters long' },
            ],
        };
        this.sliderOpts = {
            zoom: true,
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 5
        };
        // this.list = [
        //   { expanded: false },
        // ]; 
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
        this.videoForm = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(250)
            ])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(1000)
            ]))
        });
        // // this.prepareAudioFile();
        // this.playListeSelect(8);
        this.getGenres();
    }
    submitForm() {
        this.isSubmitted = true;
        if (this.selectedVideo == null) {
            this.commonService.presentAlert("Video", "Please select video then post !", ['Close'], '');
            return false;
        }
        else {
            this.getGenres();
            this.showMusic = 2;
        }
    }
    get errorControl() {
        return this.videoForm.controls;
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.data = {};
        }, 5000);
    }
    showLoader() {
        this.commonService.presentLoader();
    }
    dismissLoader() {
        this.commonService.dismissLoader();
    }
    cancelSelection() {
        this.selectedVideo = null;
        this.uploadedVideo = null;
    }
    filepreview() {
        this.previewAnyFile.preview(this.selectedVideo)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    removefilepreview() {
        this.visibility = false;
        this.selectedVideo = null;
        this.videoFileSelected = false;
        this.commonService.presentToast('Selected video remove');
        console.log('Selected video remove');
    }
    refresh() {
        this.cd.detectChanges();
    }
    captureVideo() {
        let options = {
            limit: 1,
            duration: 600,
            quality: 0
        };
        this.mediaCapture.captureVideo(options)
            .then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log("DAta: "+data[0].type);
            this.showLoader();
            this.uploadedVideo = null;
            var filename = data[0].name;
            var dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
            dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
            this.selectedVideoFile(dirpath, filename);
            this.visibility = true;
        }), (err) => console.error(err));
    }
    selectVideo() {
        const options = {
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options)
            .then((videoUrl) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (videoUrl) {
                this.showLoader();
                this.uploadedVideo = null;
                var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
                var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                this.selectedVideoFile(dirpath, filename);
                this.visibility = true;
            }
        }), (err) => {
            console.log(err);
            this.visibility = false;
            this.commonService.presentAlert("Plugin Error", "Cordova not available", ['Close'], '');
        });
    }
    selectedVideoFile(dirpath, filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                var dirUrl = yield this.file.resolveDirectoryUrl(dirpath);
                var retrievedFile = yield this.file.getFile(dirUrl, filename, {});
            }
            catch (err) {
                this.dismissLoader();
                this.commonService.presentAlert("Error", "Something went wrong.", ['Ok'], '');
            }
            retrievedFile.file(data => {
                this.dismissLoader();
                if (data.size > MAX_FILE_SIZE) {
                    return this.commonService.presentAlert("Error", "You cannot upload more than 100 mb.", ['Ok'], '');
                }
                // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
                // if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}
                this.selectedVideo = retrievedFile.nativeURL;
                console.log(JSON.stringify(this.selectedVideo));
                console.log(this.selectedVideo);
                console.log('this.selectedVideo');
                localStorage.setItem('selectedVideo', JSON.stringify(this.selectedVideo));
                this.videoFileSelected = !this.videoFileSelected;
                this.refresh();
            });
        });
    }
    //----------------Music Code------------//
    searchChanged(musicname) {
        const searchTerm = musicname.srcElement.value;
        this.nutritionService.searchMusic({ "searchQuery": searchTerm }).subscribe((search) => {
            if (searchTerm == '') {
                this.searchMusicData = false;
                this.getGenres();
            }
            else {
                this.datagenres = (search.musicList);
                this.searchMusicData = true;
            }
        });
    }
    getGenres() {
        this.musicService.getGenres().subscribe((data) => {
            this.datagenres = data.genres;
        });
        this.selectMusicList = '1';
        this.activeMusic = 1;
        this.activetab = 1;
        this.musicService.getPlaylist().subscribe((data) => {
            this.playList = data.status;
            // console.log("this.playList: " + JSON.stringify(this.playList));
        });
    }
    playListeSelect(playListId, eltration) {
        this.songList = [];
        this.customClass = eltration;
        this.musicService.getPlaylistById({ "playlistId": playListId }).subscribe((data) => {
            this.playListData = data.status;
            data.status.playlist_songs.forEach(el => {
                this.songList.push(el.songs_details);
            });
            // console.log("this.songList:"+JSON.stringify(this.songList));
        }, err => {
            this.commonService.presentToast("Something went Wrong.");
        });
    }
    selectMusic(ev) {
        this.selectMusicList = ev.detail.value;
    }
    musicSelect(ev) {
        this.activeMusic = ev[0];
        this.activetab = ev[1];
        this.musicId = ev[2];
        this.selectedAudioFile = ev[3]; // audio file 
        this.audioFilename = ev[4]; // audio Name
        this.audioFileDuration = ev[5]; // audio duration  
        this.prepareAudioFile();
    }
    musicVolume() {
        this.AudioPlayer.pause();
        var url = baseUrl + "api/auth/videoPost";
        var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
        var fileData = {
            furl: url,
            fname: filename,
            selectedVideo: this.selectedVideo,
            fTitle: this.videoForm.value.title,
            fDescription: this.videoForm.value.description,
            fSelectedMusicId: this.musicId,
            fSelectedGeneras: this.activetab,
            returnUrl: 'video-preview',
        };
        this.commonService.presentModal(_music_volume_modal_music_volume_modal_component__WEBPACK_IMPORTED_MODULE_2__["MusicVolumeModalComponent"], 'bottomModal', fileData);
    }
    musicList(ev) {
        this.musicTypes = ev.detail.value;
    }
    prepareAudioFile() {
        this.platform.ready().then(() => {
            this.musicChanged = 1;
            this.audioFile = baseUrl + "public/storage/audio/" + this.selectedAudioFile;
        });
    }
};
AddVideoPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_13__["MusicService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__["PreviewAnyFile"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_15__["NutritionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_16__["AudioPlayerComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_16__["AudioPlayerComponent"])
], AddVideoPage.prototype, "AudioPlayer", void 0);
AddVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-video.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/add-video.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-video.page.scss */ "./src/app/add-video/add-video.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _services_music_service__WEBPACK_IMPORTED_MODULE_13__["MusicService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__["PreviewAnyFile"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_15__["NutritionService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"]])
], AddVideoPage);



/***/ }),

/***/ "./src/app/add-video/audio-player/audio-player.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/add-video/audio-player/audio-player.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0; }\n\n.audio-list > div {\n  display: flex; }\n\n.audio-list > * {\n  display: inline-block; }\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px; }\n\nion-range ion-label {\n  margin-right: 50px; }\n\nion-fab-button {\n  min-width: 40px; }\n\nion-fab-button + div {\n  width: 100%; }\n\nion-fab-button + div > div {\n  display: flex; }\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 35px; }\n\n.music-spinner {\n  --color: #26a69a; }\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 28px; }\n\n.music-timer-fav ion-icon {\n  margin: 0 5px; }\n\n.musicbar {\n  padding-right: 50px; }\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.musicWrapper ion-toolbar .audio-listInner {\n    display: block;\n    background: #26a69a;\n    height: 56px;\n    margin-top: 10px; }\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n      position: absolute;\n      width: 90%;\n      top: 2px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n      margin-top: 20px;\n      margin-left: 10px;\n      padding-left: 50px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n        color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL2F1ZGlvLXBsYXllci9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcYWRkLXZpZGVvXFxhdWRpby1wbGF5ZXJcXGF1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFVBQVU7RUFBQyxnQkFBYztFQUFHLG1CQUFpQixFQUFBOztBQUN6RDtFQUFnQixhQUFhLEVBQUE7O0FBQzdCO0VBQWMscUJBQXFCLEVBQUE7O0FBQ25DO0VBQVUsaUJBQVk7RUFBTSxhQUFTLEVBQUE7O0FBQ3JDO0VBQW9CLGtCQUFrQixFQUFBOztBQUN0QztFQUFlLGVBQWUsRUFBQTs7QUFDOUI7RUFBbUIsV0FBVyxFQUFBOztBQUM5QjtFQUF1QixhQUFhLEVBQUE7O0FBQ3BDO0VBQWtDLFdBQVc7RUFBQyxpQkFBaUIsRUFBQTs7QUFDL0Q7RUFBZSxnQkFBUSxFQUFBOztBQUV2QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUViO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNnQixrQkFBZ0I7RUFBRyxnQkFBYyxFQUFBOztBQURqRDtJQUV5QixjQUFjO0lBQUMsbUJBQW1CO0lBQUMsWUFBWTtJQUFDLGdCQUFnQixFQUFBOztBQUZ6RjtNQUkwQixrQkFBa0I7TUFBQyxVQUFVO01BQUMsUUFBUSxFQUFBOztBQUpoRTtNQU13QixnQkFBZ0I7TUFBQyxpQkFBaUI7TUFBQyxrQkFBa0IsRUFBQTs7QUFON0U7UUFPMEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLXZpZGVvL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW8tbGlzdHtwYWRkaW5nOiAwOy0tcGFkZGluZy10b3A6IDA7LS1wYWRkaW5nLWJvdHRvbTogMDt9XHJcbi5hdWRpby1saXN0PmRpdntkaXNwbGF5OiBmbGV4O31cclxuLmF1ZGlvLWxpc3Q+KntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG5pb24tcmFuZ2V7LS1rbm9iLXNpemU6IDE4cHg7LS1oZWlnaHQ6IDJweDt9XHJcbmlvbi1yYW5nZSBpb24tbGFiZWx7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuaW9uLWZhYi1idXR0b257bWluLXdpZHRoOiA0MHB4O31cclxuaW9uLWZhYi1idXR0b24rZGl2e3dpZHRoOiAxMDAlO31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdntkaXNwbGF5OiBmbGV4O31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdiAraW9uLWxhYmVse2NvbG9yOiAjRkZGO21hcmdpbi1sZWZ0OiAzNXB4O31cclxuLm11c2ljLXNwaW5uZXJ7LS1jb2xvcjogIzI2YTY5YTt9XHJcblxyXG4ubXVzaWMtdGltZXItZmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAyOHB4O1xyXG59XHJcbi5tdXNpYy10aW1lci1mYXYgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ubXVzaWNiYXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLm11c2ljV3JhcHBlcntcclxuICAgIGlvbi10b29sYmFyey0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIC5hdWRpby1saXN0SW5uZXJ7ZGlzcGxheTogYmxvY2s7YmFja2dyb3VuZDogIzI2YTY5YTtoZWlnaHQ6IDU2cHg7bWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgLm11c2ljYmFye1xyXG4gICAgICAgICAgICAgICAgaW9uLXJhbmdle3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogOTAlO3RvcDogMnB4O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubXVzaWMtbmFtZXttYXJnaW4tdG9wOiAyMHB4O21hcmdpbi1sZWZ0OiAxMHB4O3BhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtjb2xvcjogI0ZGRjt9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-video/audio-player/audio-player.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/add-video/audio-player/audio-player.component.ts ***!
  \******************************************************************/
/*! exports provided: AudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return AudioPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AudioPlayerComponent = class AudioPlayerComponent {
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
        this.selectedAudio[1] = 0;
        this._player.paused ? this._player.play() : this._player.pause();
    }
    pause() {
        this._player.pause();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AudioPlayerComponent.prototype, "selectedAudio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AudioPlayerComponent.prototype, "playerElementRef", void 0);
AudioPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/audio-player/audio-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio-player.component.scss */ "./src/app/add-video/audio-player/audio-player.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../.././app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AudioPlayerComponent);



/***/ })

}]);
//# sourceMappingURL=add-video-add-video-module-es2015.js.map