(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-video-program-view-video-program-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-title>Live</ion-title>  \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div id=\"rmpPlayer\"></div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/program/video-program-view/video-program-view-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/program/video-program-view/video-program-view-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VideoProgramViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProgramViewPageRoutingModule", function() { return VideoProgramViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-program-view.page */ "./src/app/program/video-program-view/video-program-view.page.ts");




const routes = [
    {
        path: '',
        component: _video_program_view_page__WEBPACK_IMPORTED_MODULE_3__["VideoProgramViewPage"]
    }
];
let VideoProgramViewPageRoutingModule = class VideoProgramViewPageRoutingModule {
};
VideoProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoProgramViewPageRoutingModule);



/***/ }),

/***/ "./src/app/program/video-program-view/video-program-view.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/program/video-program-view/video-program-view.module.ts ***!
  \*************************************************************************/
/*! exports provided: VideoProgramViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProgramViewPageModule", function() { return VideoProgramViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-program-view-routing.module */ "./src/app/program/video-program-view/video-program-view-routing.module.ts");
/* harmony import */ var _video_program_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-program-view.page */ "./src/app/program/video-program-view/video-program-view.page.ts");







let VideoProgramViewPageModule = class VideoProgramViewPageModule {
};
VideoProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoProgramViewPageRoutingModule"]
        ],
        declarations: [_video_program_view_page__WEBPACK_IMPORTED_MODULE_6__["VideoProgramViewPage"]]
    })
], VideoProgramViewPageModule);



/***/ }),

/***/ "./src/app/program/video-program-view/video-program-view.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/program/video-program-view/video-program-view.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-list {\n  padding: 0;\n  margin: 10px 0; }\n\n.top-list ion-item {\n  --min-height: 85px;\n  background: #FFF;\n  box-shadow: none; }\n\n.top-list ion-item ion-label {\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem; }\n\n.users-list {\n  display: block;\n  width: 100%;\n  margin-bottom: 0; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: 100%;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background:transparent; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%; }\n\n.users-list ion-item span {\n  margin-left: -25px; }\n\n.users-list ion-item span:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -25px; }\n\n.list-info {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 6px;\n  margin-bottom: 0; }\n\n.list-info ion-item {\n  width: 48%;\n  box-shadow: 0.001em 5px 12px rgba(34, 35, 58, 0.09);\n  margin: auto;\n  margin-bottom: 8px; }\n\n.list-info ion-item img {\n  width: 24px;\n  margin-right: 8px; }\n\n.list-info ion-item ion-label {\n  font-size: 0.85rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS92aWRlby1wcm9ncmFtLXZpZXcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxwcm9ncmFtXFx2aWRlby1wcm9ncmFtLXZpZXdcXHZpZGVvLXByb2dyYW0tdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxVQUFVO0VBQUMsY0FBYyxFQUFBOztBQUNuQztFQUFtQixrQkFBYTtFQUFNLGdCQUFnQjtFQUFDLGdCQUFnQixFQUFBOztBQUN2RTtFQUE2QixjQUFjO0VBQUMsa0JBQWtCO0VBQUMsV0FBVztFQUFDLFNBQVM7RUFBQywyQkFBMkI7RUFBQyxjQUFjLEVBQUE7O0FBQy9IO0VBQVUsV0FBVztFQUFDLFlBQVk7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxhQUFhO0VBQUMsdUJBQXVCO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsVUFBVTtFQUFDLFNBQVM7RUFBQywyQkFBMkIsRUFBQTs7QUFDdk07RUFBb0IsY0FBYztFQUFDLGtCQUFrQixFQUFBOztBQUVyRDtFQUFZLGNBQWM7RUFBQyxXQUFXO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3ZEO0VBQXFCLGtCQUFhO0VBQU0sYUFBYTtFQUFDLFdBQVc7RUFBQyxrQkFBZ0I7RUFBRyxzQkFBb0I7RUFBRyx3QkFBYSxFQUFBOztBQUN6SDtFQUF5QixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFBQyxrQkFBa0IsRUFBQTs7QUFDdEY7RUFBMEIsa0JBQWtCLEVBQUE7O0FBQzVDO0VBQXNDLGNBQWMsRUFBQTs7QUFDcEQ7RUFBVSxXQUFVO0VBQUMsWUFBVztFQUFDLGVBQWU7RUFBQyxrQkFBaUI7RUFBQyxtQkFBa0I7RUFBQyxrQkFBaUI7RUFBQyxhQUFZO0VBQUMsdUJBQXNCO0VBQUMsbUJBQWtCO0VBQUMsU0FBUztFQUFDLGtCQUFrQixFQUFBOztBQUUzTDtFQUFXLGFBQWE7RUFBQyxlQUFlO0VBQUMsWUFBWTtFQUFDLGdCQUFnQixFQUFBOztBQUN0RTtFQUFvQixVQUFVO0VBQUMsbURBQW1EO0VBQUMsWUFBWTtFQUFDLGtCQUFrQixFQUFBOztBQUNsSDtFQUF3QixXQUFXO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ3JEO0VBQThCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS92aWRlby1wcm9ncmFtLXZpZXcvdmlkZW8tcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbGlzdHtwYWRkaW5nOiAwO21hcmdpbjogMTBweCAwO31cclxuLnRvcC1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogODVweDtiYWNrZ3JvdW5kOiAjRkZGO2JveC1zaGFkb3c6IG5vbmU7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse3BhZGRpbmctdG9wOiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDhweDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO21hcmdpbi1sZWZ0OiAwO31cclxuLnRvcC1pY29ue3dpZHRoOiA0MHB4O2hlaWdodDogNDBweDtiYWNrZ3JvdW5kOiAjZTlmNmY1O2JvcmRlci1yYWRpdXM6IDUwJTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTEwcHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTt9XHJcbi50b3AtaWNvbiBpb24taWNvbiB7Y29sb3I6ICMyN2E2OWE7Zm9udC1zaXplOiAxLjI1cmVtO31cclxuXHJcbi51c2Vycy1saXN0e2Rpc3BsYXk6IGJsb2NrO3dpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206IDA7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDt3aWR0aDogMTAwJTstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZ3t3aWR0aDogNDJweDtoZWlnaHQ6IDQycHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gc3BhbnttYXJnaW4tbGVmdDogLTI1cHg7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBzcGFuOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnZpZXctYWxse3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWF4LXdpZHRoOiA0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2YxZjBmMDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiAtMjVweDt9XHJcblxyXG4ubGlzdC1pbmZve2Rpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO3BhZGRpbmc6IDZweDttYXJnaW4tYm90dG9tOiAwO31cclxuLmxpc3QtaW5mbyBpb24taXRlbXt3aWR0aDogNDglO2JveC1zaGFkb3c6IDAuMDAxZW0gNXB4IDEycHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTttYXJnaW46IGF1dG87bWFyZ2luLWJvdHRvbTogOHB4O31cclxuLmxpc3QtaW5mbyBpb24taXRlbSBpbWd7d2lkdGg6IDI0cHg7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGlvbi1sYWJlbHtmb250LXNpemU6IDAuODVyZW07fSJdfQ== */");

/***/ }),

/***/ "./src/app/program/video-program-view/video-program-view.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/program/video-program-view/video-program-view.page.ts ***!
  \***********************************************************************/
/*! exports provided: VideoProgramViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProgramViewPage", function() { return VideoProgramViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







const baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].ApiUrl;
let VideoProgramViewPage = class VideoProgramViewPage {
    constructor(navCtrl, actRoute, postService, commonService) {
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.postService = postService;
        this.commonService = commonService;
        this.elementID = 'rmpPlayer';
        this.rmp = null;
        this.storagePath = baseUrl + 'storage/';
    }
    //------------------ -- GO BACK  ------------
    goBack() {
        this.navCtrl.back();
    }
    // When home page comes into view we play our player
    ionViewDidEnter() {
        if (this.rmp && this.rmp.getReady()) {
            this.rmp.play();
        }
    }
    // When we leave home page for another page we pause our player
    ionViewWillLeave() {
        if (this.rmp && this.rmp.getReady()) {
            this.rmp.pause();
        }
    }
    // When home page initially loads we configure and init our player 
    ionViewWillEnter() {
        this.commonService.presentLoader();
        this.postService.getVideoPostById({ 'videoId': this.videoId }).subscribe((data) => {
            this.postData = data.postData;
            this.videoDataPath = this.storagePath + this.postData.video_path;
            this.videoThumbPath = this.storagePath + this.postData.thumb_path;
            this.postService.getAddByPGId({ 'pgId': this.pgId }).subscribe((data) => {
                this.addData = data.addData;
                this.ad_xml_path = this.addData.ad_xml_path;
                this.readiantMediaPlayer();
            });
        }, err => {
            this.commonService.dismissLoader();
            this.commonService.presentToast('Something went wrong.');
        });
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.videoId = params.get('videoId');
            this.pgId = params.get('pgId');
        });
    }
    readiantMediaPlayer() {
        this.src = {
            mp4: this.videoDataPath
        };
        // Define ad-schedule
        // var schedule = {
        //   // Preroll
        //   preroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
        //   // Midroll
        //   midroll: [
        //     [30, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml'],
        //     [60, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml']
        //   ],
        //   // Postroll
        //   postroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml'
        // };
        this.settings = {
            licenseKey: 'c3BkbW9vanJ5YUAxNTk5MjA5',
            src: this.src,
            // width: 640,
            // height: 360,
            autoHeightMode: true,
            autoHeightModeRatio: 2.4,
            preload: 'auto',
            autoplay: true,
            pathToRmpFiles: 'assets/rmp/',
            automaticFullscreenOnLandscape: true,
            // hideControls: true,
            hideSeekBar: true,
            hideVolume: true,
            hideCentralPlayButton: true,
            crossorigin: "",
            //logo
            // logo: "../../../assets/images/logo.png",
            // logoPosition: 'topright',
            // logoWatermark: true,
            // if we need ads
            ads: true,
            // rmp-vast is generally preferred in Cordova-based apps to display ads
            // but if you are using Google ads servers (DFP, AdSense, AdX), the IMA SDK is required
            // see https://www.radiantmediaplayer.com/docs/latest/mobile-applications.html#mobile-video-ads
            adParser: 'rmp-vast',
            adTagUrl: this.ad_xml_path,
            //adTagUrl: 'https://ionicinto.wdipl.com/intoactive1714.xml',
            //adTagUrl: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
            // adSchedule: schedule,
            contentMetadata: {
                poster: [
                    this.videoThumbPath
                ]
            }
        };
        this.rmp = new RadiantMP(this.elementID);
        this.rmp.init(this.settings);
        this.commonService.dismissLoader();
        // handle "tabs" in fullscreen mode
        var rmpContainer = document.getElementById(this.elementID);
        var FW = this.rmp.getFramework();
        var bottomTabBar;
        rmpContainer.addEventListener('ended', function () {
            //this.navCtrl.back();
            console.log('player ended');
        });
        rmpContainer.addEventListener('enterfullscreen', function () {
            if (!bottomTabBar) {
                bottomTabBar = document.querySelector('.tabbar.show-tabbar');
            }
            FW.addClass(bottomTabBar, 'rmp-no-display');
        });
        rmpContainer.addEventListener('exitfullscreen', function () {
            if (!bottomTabBar) {
                bottomTabBar = document.querySelector('.tabbar.show-tabbar');
            }
            FW.removeClass(bottomTabBar, 'rmp-no-display');
        });
    }
};
VideoProgramViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
VideoProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-program-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-program-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-program-view.page.scss */ "./src/app/program/video-program-view/video-program-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], VideoProgramViewPage);



/***/ })

}]);
//# sourceMappingURL=program-video-program-view-video-program-view-module-es2015.js.map