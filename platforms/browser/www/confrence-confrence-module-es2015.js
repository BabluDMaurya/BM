(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confrence-confrence-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../../assets/images/station1.jpg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2 class=\"list-person\">{{programTitle}}</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-fab-button  size=\"small\" id=\"button1\" (click)=\"muteUnMuteAudio()\">\r\n        <ion-icon ios=\"ios-{{mic}}\" md=\"md-{{mic}}\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button  size=\"small\" id=\"button5\" (click)=\"cheangAudioMedia()\">\r\n        <ion-icon ios=\"ios-{{volume}}\" md=\"md-{{volume}}\"></ion-icon> \r\n      </ion-fab-button>\r\n      <ion-fab-button  size=\"small\" id=\"button4\" (click)=\"switchCamera()\">\r\n        <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n      </ion-fab-button>      \r\n      <ion-fab-button size=\"small\">\r\n        <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\" (click)=\"chatCall()\"></ion-icon>          \r\n      </ion-fab-button>\r\n      <ion-fab-button size=\"small\" id=\"button3\" (click)=\"disconnect()\">\r\n        <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n      </ion-fab-button>      \r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"myClass\">\r\n    \r\n  </div>\r\n  <div [ngClass]=\"(chatbody =='on')?'chatblock':'chatnone'\">\r\n    <div class=\"chatList\">\r\n        <ion-list id=\"history\"></ion-list>\r\n    </div>\r\n</div> \r\n<ion-footer class=\"conferenceFooter\" *ngIf=\"chatTrue\" >\r\n  <ion-item lines=\"none\">\r\n    <ion-input [(ngModel)]=\"groupMessage\" id=\"sendmessage\" placeholder=\"Enter Text\" ></ion-input>\r\n    <ion-fab-button size=\"small\">\r\n      <ion-icon ios=\"ios-send\" md=\"md-send\" (click)=\"sendMessage()\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-item>\r\n</ion-footer>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/confrence/confrence-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/confrence/confrence-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfrencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfrencePageRoutingModule", function() { return ConfrencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confrence_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confrence.page */ "./src/app/confrence/confrence.page.ts");




const routes = [
    {
        path: '',
        component: _confrence_page__WEBPACK_IMPORTED_MODULE_3__["ConfrencePage"]
    }
];
let ConfrencePageRoutingModule = class ConfrencePageRoutingModule {
};
ConfrencePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfrencePageRoutingModule);



/***/ }),

/***/ "./src/app/confrence/confrence.module.ts":
/*!***********************************************!*\
  !*** ./src/app/confrence/confrence.module.ts ***!
  \***********************************************/
/*! exports provided: ConfrencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfrencePageModule", function() { return ConfrencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confrence_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confrence-routing.module */ "./src/app/confrence/confrence-routing.module.ts");
/* harmony import */ var _confrence_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confrence.page */ "./src/app/confrence/confrence.page.ts");







let ConfrencePageModule = class ConfrencePageModule {
};
ConfrencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confrence_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfrencePageRoutingModule"]
        ],
        declarations: [_confrence_page__WEBPACK_IMPORTED_MODULE_6__["ConfrencePage"]]
    })
], ConfrencePageModule);



/***/ }),

/***/ "./src/app/confrence/confrence.page.scss":
/*!***********************************************!*\
  !*** ./src/app/confrence/confrence.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#bottom_link {\n  position: absolute;\n  display: inline-block;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  width: 100%;\n  height: 60px; }\n\n.myClass {\n  background-color: lightgray;\n  height: 100%;\n  width: 100%; }\n\n#button1, #button2, #button3, #button4, #button5 {\n  width: 36px;\n  height: 36px;\n  margin: 0;\n  margin-left: 5px; }\n\n.bottom_link {\n  background: #ccc;\n  border-radius: 30px;\n  width: 90%;\n  margin: auto;\n  height: 40px;\n  margin-bottom: 5px; }\n\n.conferenceFooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%; }\n\n.top-heading {\n  display: flex; }\n\n.icon-right-side ion-fab-button {\n  width: 36px;\n  height: 36px;\n  margin: 0;\n  margin-left: 5px; }\n\n.icon-right-side ion-fab-button ion-icon {\n  font-size: 18px; }\n\n.chat-box {\n  margin-bottom: 0px !important;\n  height: 308px; }\n\n.item-background-color-chat {\n  --background: transparent !important; }\n\n.chatblock {\n  display: block;\n  position: fixed;\n  bottom: 55px;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.35);\n  background: linear-gradient(0deg, black 0%, rgba(255, 255, 255, 0) 100%); }\n\n.chatnone {\n  display: none; }\n\n.broadcast-content .closeChatScreen {\n  height: 40px; }\n\n.chatList {\n  max-height: 270px;\n  overflow-y: auto; }\n\n.chatList ion-list {\n    background: transparent;\n    padding: 0; }\n\nion-item.send-box {\n  --background: #000;\n  --padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZnJlbmNlL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcY29uZnJlbmNlXFxjb25mcmVuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixTQUFRO0VBQ1IsT0FBTTtFQUNOLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVmO0VBQ0csMkJBQTBCO0VBQzFCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUFDLFNBQVM7RUFBQyxnQkFBZ0IsRUFBQTs7QUFJM0M7RUFBYSxnQkFBZ0I7RUFBQyxtQkFBbUI7RUFBQyxVQUFVO0VBQUMsWUFBWTtFQUFDLFlBQVk7RUFBQyxrQkFBa0IsRUFBQTs7QUFDekc7RUFBa0IsZUFBZTtFQUFDLE9BQU87RUFBQyxTQUFTO0VBQUMsV0FBVyxFQUFBOztBQUUvRDtFQUFhLGFBQWEsRUFBQTs7QUFDMUI7RUFBaUMsV0FBVztFQUMxQyxZQUFZO0VBQUMsU0FBUztFQUFDLGdCQUFnQixFQUFBOztBQUN6QztFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYSxFQUFBOztBQUVmO0VBQ0Usb0NBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWM7RUFBQyxlQUFlO0VBQUMsWUFBWTtFQUFDLE9BQU87RUFBQyxXQUFXO0VBQUMsK0JBQStCO0VBQUssd0VBQThFLEVBQUE7O0FBRXBMO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQW9DLFlBQVksRUFBQTs7QUFDaEQ7RUFBYyxpQkFBaUI7RUFDN0IsZ0JBQWdCLEVBQUE7O0FBRGxCO0lBRVcsdUJBQXVCO0lBQUMsVUFBVSxFQUFBOztBQUU3QztFQUFrQixrQkFBYTtFQUM3QixtQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29uZnJlbmNlL2NvbmZyZW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm90dG9tX2xpbmt7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgICAgICAgICAgICBcclxuICAgIGJvdHRvbTowOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbGVmdDowOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuIH1cclxuIC5teUNsYXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjYnV0dG9uMSwgI2J1dHRvbjIsI2J1dHRvbjMsI2J1dHRvbjQsI2J1dHRvbjV7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDttYXJnaW46IDA7bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4gICBcclxuLy8gLmNoYXRMaXN0e3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDUwcHg7bGVmdDogMDt3aWR0aDogMTAwJTttYXgtaGVpZ2h0OiA0MHZoO31cclxuLmJvdHRvbV9saW5re2JhY2tncm91bmQ6ICNjY2M7Ym9yZGVyLXJhZGl1czogMzBweDt3aWR0aDogOTAlO21hcmdpbjogYXV0bztoZWlnaHQ6IDQwcHg7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuLmNvbmZlcmVuY2VGb290ZXJ7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDA7Ym90dG9tOiAwO3dpZHRoOiAxMDAlO31cclxuXHJcbi50b3AtaGVhZGluZ3tkaXNwbGF5OiBmbGV4fVxyXG4uaWNvbi1yaWdodC1zaWRlIGlvbi1mYWItYnV0dG9ueyB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiA1cHh9XHJcbi5pY29uLXJpZ2h0LXNpZGUgaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uY2hhdC1ib3h7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDhweDtcclxufVxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9yLWNoYXR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBcclxufVxyXG4uY2hhdGJsb2Nre1xyXG4gIGRpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDU1cHg7bGVmdDogMDt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpOyAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsMCkgMTAwJSk7XHJcbn1cclxuLmNoYXRub25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5icm9hZGNhc3QtY29udGVudCAuY2xvc2VDaGF0U2NyZWVue2hlaWdodDogNDBweDt9XHJcbi5jaGF0TGlzdHsgICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBpb24tbGlzdHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtwYWRkaW5nOiAwO31cclxufVxyXG5pb24taXRlbS5zZW5kLWJveHstLWJhY2tncm91bmQ6ICMwMDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTBweDt9Il19 */");

/***/ }),

/***/ "./src/app/confrence/confrence.page.ts":
/*!*********************************************!*\
  !*** ./src/app/confrence/confrence.page.ts ***!
  \*********************************************/
/*! exports provided: ConfrencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfrencePage", function() { return ConfrencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modalContent/payment/payment.component */ "./src/app/modalContent/payment/payment.component.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var rxjs___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/ */ "./node_modules/rxjs/_esm2015/index.js");









let ConfrencePage = class ConfrencePage {
    //
    constructor(commonService, route, navCtrl, router, programService) {
        this.commonService = commonService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.programService = programService;
        this.mic = "mic";
        this.volume = "volume-high";
        this.audioMute = false;
        this.videoMute = false;
        this.chatTrue = false;
        this.chatbody = 'off';
        this.currentModal = null;
        this.groupMessage = '';
        //
        this.streamAudioBoolean = false;
        this.streamVideoBoolean = false;
        this.audioMutedBoolean = false;
        this.videoMutedBoolean = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SegmentPage');
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.programId = params["programId"];
            this.programTitle = params["programTitle"];
            this.program_fee = params["program_fee"];
            this.programImage = params["program_img"];
            this.role = params["role"];
            console.log("Role:" + params["role"]);
            console.log(params);
            // console.log("program_type:"+params["program_type"]);
            // console.log("description:"+params["description"]);
            // console.log("participants:"+params["participants"]);
            // console.log("duration:"+params["duration"]);
            // console.log("programId:"+params["programId"]);
            //console.log("programId:"+params["programTitle"]);
            if (params["program_type"] == 'public') {
                this.streamAudioBoolean = true;
                this.streamVideoBoolean = true;
                if (params["role"] == 'moderator') {
                    this.mic = 'mic';
                    this.volume = 'volume-high';
                    this.audioMutedBoolean = false;
                    this.videoMutedBoolean = false;
                }
                else {
                    this.mic = 'mic-off';
                    this.volume = 'volume-off';
                    this.audioMutedBoolean = true;
                    this.videoMutedBoolean = true;
                }
            }
            else if (params["program_type"] == 'private oneway') {
                console.log("program_type 1:" + params["program_type"]);
                this.streamAudioBoolean = true;
                this.streamVideoBoolean = true;
                if (params["role"] == 'moderator') {
                    this.mic = 'mic';
                    this.volume = 'volume-high';
                    this.audioMutedBoolean = false;
                    this.videoMutedBoolean = false;
                }
                else {
                    this.mic = 'mic-off';
                    this.volume = 'volume-off';
                    this.audioMutedBoolean = true;
                    this.videoMutedBoolean = true;
                }
            }
            else if (params["program_type 2"] == 'private twoway') {
                console.log("program_type :" + params["program_type"]);
                this.streamAudioBoolean = true;
                this.streamVideoBoolean = true;
                this.audioMutedBoolean = false;
                this.videoMutedBoolean = false;
                this.mic = 'mic';
                this.volume = 'volume-high';
            }
            else if (params["program_type"] == 'group oneway') {
                console.log("program_type 1 :" + params["program_type"]);
                this.streamAudioBoolean = true;
                this.streamVideoBoolean = true;
                if (params["role"] == 'moderator') {
                    this.mic = 'mic';
                    this.volume = 'volume-high';
                    this.audioMutedBoolean = false;
                    this.videoMutedBoolean = false;
                }
                else {
                    this.mic = 'mic-off';
                    this.volume = 'volume-off';
                    this.audioMutedBoolean = true;
                    this.videoMutedBoolean = true;
                }
            }
            else if (params["program_type"] == 'group twoway') {
                console.log("program_type 2 :" + params["program_type"]);
                this.streamAudioBoolean = true;
                this.streamVideoBoolean = true;
                this.audioMutedBoolean = false;
                this.videoMutedBoolean = false;
                this.mic = 'mic';
                this.volume = 'volume-high';
            }
            else {
                console.log("program_type :" + params["program_type"]);
                this.streamAudioBoolean = true;
                this.streamVideoBoolean = true;
                this.audioMutedBoolean = false;
                this.videoMutedBoolean = false;
                this.mic = 'mic';
                this.volume = 'volume-high';
            }
            var videoSize = {
                minWidth: 320,
                minHeight: 180,
                maxWidth: 1280,
                maxHeight: 720,
            };
            var streamOpt = {
                audio: this.streamAudioBoolean,
                video: this.streamVideoBoolean,
                data: true,
                audioOnlyMode: false,
                framerate: 30,
                maxVideoBW: 1500,
                minVideoBW: 150,
                videoSize: videoSize,
                audioMuted: false,
                videoMuted: false,
                maxVideoLayers: 1,
                name: params["name"]
            };
            var playerConfiguration = {
                audiomute: this.audioMutedBoolean,
                videomute: this.videoMutedBoolean,
                bandwidth: true,
                screenshot: true,
                avatar: true,
                iconHeight: 30,
                iconWidth: 30,
                avatarHeight: 200,
                avatarWidth: 200,
            };
            var roomOpt = {
                activeviews: "list",
                allow_reconnect: true,
                number_of_attempts: 3,
                timeout_interval: 10000,
                playerConfiguration: playerConfiguration,
                chat_only: false,
                settings: {
                    description: params['description'],
                    scheduled: false,
                    adhoc: true,
                    participants: params["participants"],
                    duration: params["duration"],
                    quality: 'SD',
                    auto_recording: false,
                },
            };
            window.EnxRtc.joinRoom(params["token"], streamOpt, roomOpt);
            this.addEnxListner();
        });
    }
    //Init LocalView
    initLocalView() {
        var initLocalViewOptions = {
            height: 130,
            width: 100,
            margin_top: 80,
            margin_left: 0,
            margin_right: 15,
            margin_bottom: 10,
            position: "top"
        };
        window.EnxRtc.initLocalView(initLocalViewOptions, function (data) {
            console.log('Local player Excelsior succuss! ' + JSON.stringify(data.data));
        }, function (err) {
            console.log('Uh oh... error' + JSON.stringify(err));
        });
    }
    initRemoteView() {
        var initRemoteViewOptions = {
            margin_top: 70,
            margin_bottom: 70
        };
        window.EnxRtc.initRemoteView(initRemoteViewOptions, function (data) {
            console.log('Remore Player Excelsior succuss! ' + JSON.stringify(data.data));
        }, function (err) {
            console.log('Uh oh... error' + JSON.stringify(err));
        });
    }
    //Add listoner 
    addEnxListner() {
        // this.timer =  setTimeout(() => {
        //   var i = this.viewCounter();
        //   console.log(i + 'eeeee');
        // }, 100);
        var i = 1;
        Object(rxjs___WEBPACK_IMPORTED_MODULE_7__["interval"])(1000)
            .subscribe((val) => {
            this.sub = i++;
            // console.log(i);
        });
        let _this = this;
        window.EnxRtc.addEventListner("onRoomConnected", function (data) {
            console.log('Excelsior succuss! resizeViewOptions ' + JSON.stringify(data.data));
            _this.initLocalView();
            _this.initRemoteView();
        });
        window.EnxRtc.addEventListner("onRoomDisConnected", function (data) {
            // console.log('Excelsior succuss! onRoomDisConnected ' + JSON.stringify(data.data));
            _this.goBackToPriviousPage();
        });
        window.EnxRtc.addEventListner("onEventError", function (data) {
            // console.log('Excelsior EventError! onEventError ' + JSON.stringify(data.data));
        });
        window.EnxRtc.addEventListner("onAudioEvent", function (data) {
            // console.log('Excelsior succuss! onAudioEvent ' + JSON.stringify(data.data.result));
            var response = data.data;
            // console.log("audio msg" + typeof response.msg);
            // console.log("audio variable msg" + response.msg + 'hello');
            if (response.msg === 'Audio Off') {
                // console.log("function condition get");
                _this.audioMute = true;
                _this.mic = 'mic-off';
                // _this.audioimgSrc = "../../assets/icon/unmute_audio.png";
            }
            else {
                // console.log("function condition offff get");
                _this.audioMute = false;
                _this.mic = 'mic';
                // _this.audioimgSrc = "../../assets/icon/mute_audio.png";
            }
        });
        window.EnxRtc.addEventListner("onVideoEvent", function (data) {
            // console.log('Excelsior succuss! onVideoEvent ' + JSON.stringify(data.data));
            var response = data.data;
            // console.log("Video msg" + response.msg);
            if (response.msg === "Video Off") {
                _this.videoMute = true;
                // _this.videoimgSrc = "../../assets/icon/unmute_video.png";
            }
            else {
                _this.videoMute = false;
                // _this.videoimgSrc = "../../assets/icon/mute_video.png";
            }
        });
        window.EnxRtc.addEventListner("onNotifyDeviceUpdate", function (data) {
            // console.log('Excelsior EventError! onNotifyDeviceUpdate ' + JSON.stringify(data.data));
            var deviceName = data.data;
            if (deviceName === "EARPIECE") {
                _this.volume = 'volume-high';
                // _this.speakerImgSrc = "../../assets/icon/unmute_speaker.png";
            }
            else {
                _this.volume = 'volume-off';
                // _this.speakerImgSrc = "../../assets/icon/mute_speaker.png";
            }
        });
        window.EnxRtc.addEventListner("onAcknowledgedSendData", function (data) {
            console.log('onAcknowledgedSendData : result' + JSON.stringify(data.data));
        });
        window.EnxRtc.addEventListner("onMessageReceived", function (data) {
            var reciveData = data.data;
            var scrollIntoViewOptions;
            var node = document.createElement('ion-item');
            node.className = 'theirs item-background-color-chat';
            var html = "<ion-label>";
            html += " <h2 class='list-person'>" + reciveData.sender + "</h2>";
            html += " <p>" + reciveData.message + "</p>";
            html += "<ion-label>";
            node.innerHTML = html;
            document.querySelector('#history').appendChild(node);
            node.scrollIntoView(scrollIntoViewOptions);
        });
    }
    viewCounter() {
        var i = 1;
        i++;
        return i;
    }
    goBackToPriviousPage() {
        this.navCtrl.pop();
    }
    muteUnMuteAudio() {
        // console.log("Image Click");
        if (!this.audioMute) {
            // console.log("Audio Mute");
            this.mic = "mic-off";
            window.EnxRtc.muteSelfAudio(true);
        }
        else {
            // console.log("Audio unMute");
            this.mic = "mic";
            window.EnxRtc.muteSelfAudio(false);
        }
    }
    muteUnMuteVideo() {
        // console.log("Image Click");
        if (!this.videoMute) {
            // this.mic = "volume-high";
            window.EnxRtc.muteSelfVideo(true);
        }
        else {
            // this.mic = "volume-off";
            window.EnxRtc.muteSelfVideo(false);
        }
    }
    disconnect() {
        var viewCounter = this.sub;
        this.programService.updateWatchCounter({ "programId": this.programId, "counter": viewCounter }).subscribe(data => {
            console.log(data);
            console.log('dataaaaaa');
        });
        // console.log(viewCounter);
        window.EnxRtc.disconnect(false, function (data) {
            console.log('Excelsior succuss! hideSelfView ' + JSON.stringify(data.data));
        }, function (err) {
            // console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
        });
        if (this.role == 'participant') {
            // this.programService.insertProgPaymentDetail({ "program_id" : this.programId, "amount" : this.program_fee }).subscribe(data => {
            //   console.log(data);
            //   console.log('paymentttttt');
            // });
            this.programService.updateWatchCounter({ "programId": this.programId, "counter": viewCounter }).subscribe(data => {
                console.log(data);
                console.log('dataaaaaa');
            });
            if (this.program_fee > 0) {
                this.payment();
            }
            // this.router.navigateByUrl('/payment/'+this.programId);
        }
    }
    switchCamera() {
        window.EnxRtc.switchCamera(false, function (data) {
            // console.log('Excelsior succuss! Switch Camera ' + JSON.stringify(data.data));
        }, function (err) {
            // console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
        });
    }
    cheangAudioMedia() {
        window.EnxRtc.getSelectedDevice(function (data) {
            // console.log('Excelsior succuss! getSelectedDevice ' + JSON.stringify(data.data));
            var currentDevice = data.data;
            window.EnxRtc.getDevices(function (data) {
                // console.log('Excelsior succuss! getDevices ' + JSON.stringify(data.data));
                var connectedMedia = data.data;
                // console.log("fileter media " + connectedMedia);
                var meida;
                for (meida of connectedMedia) {
                    if (meida === currentDevice) {
                        // console.log("Available Media" + meida);
                    }
                    else {
                        window.EnxRtc.switchMediaDevice(meida, function (data) {
                            // console.log('Excelsior succuss! switchMediaDevice ' + JSON.stringify(data.data));
                        }, function (err) {
                            // console.log('Uh oh... error resizeLocalView ' + JSON.stringify(err));
                        });
                        break;
                    }
                }
            });
        });
    }
    sendMessage() {
        if (this.groupMessage != '' && this.groupMessage != null) {
            var scrollIntoViewOptions;
            var node = document.createElement('ion-item');
            node.className = 'mine item-background-color-chat';
            var html = "<ion-label>";
            html += " <h2 class='list-person'>BABLU</h2>";
            html += " <p>" + this.groupMessage + "</p>";
            html += "<ion-label>";
            node.innerHTML = html;
            document.querySelector('#history').appendChild(node);
            node.scrollIntoView(scrollIntoViewOptions);
            this.sendChatToServer(this.groupMessage);
            this.groupMessage = '';
        }
    }
    sendChatToServer(text) {
        var message = text; // JSON
        var broadcast = true; // Incase of public messaging
        var array = []; // Incase of public messaging
        window.EnxRtc.sendMessage(message, broadcast, array, function (data) {
            console.log("Data : " + JSON.stringify(data));
        });
    }
    plotChat(obj) {
        //   const f_name = obj.username;
        //   const name = obj.username.slice(0, 1);
        // var scrollIntoViewOptions :{block: "end", inline: "nearest"}
        //   var node = document.createElement('ion-item');
        //     // node.className = event.from.connectionId == event.target.connection.connectionId ? 'mine item-background-color-chat' : 'theirs item-background-color-chat';
        //     var html = "<ion-avatar slot='start'>";
        //     html += " <img src='../../assets/images/station2.jpg'>";
        //     html += "</ion-avatar>";
        //     html += "<ion-label>";
        //     html += " <h2 class='list-person'>BABLU</h2>";
        //     html += " <p>"+obj.message+"</p>";
        //     html += "<ion-label>";
        //     node.innerHTML = html;
        //     document.querySelector('#history').appendChild(node);
        //     node.scrollIntoView(scrollIntoViewOptions);
    }
    chatCall() {
        this.chatTrue = true;
        this.chatbody = 'on';
        setTimeout(() => {
            this.sendmessage.setFocus();
        }, 400);
    }
    chatCloseCall() {
        this.chatTrue = false;
        this.chatbody = 'off';
    }
    payment() {
        var fileData = {
            pgid: this.programId,
            pgname: this.programTitle,
            pgamount: this.program_fee,
            pgimg: this.programImage,
            routeLink: 'confrence'
        };
        this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"], 'bottomModal', fileData);
    }
};
ConfrencePage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], ConfrencePage.prototype, "sendmessage", void 0);
ConfrencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confrence',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confrence.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confrence.page.scss */ "./src/app/confrence/confrence.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"]])
], ConfrencePage);



/***/ })

}]);
//# sourceMappingURL=confrence-confrence-module-es2015.js.map