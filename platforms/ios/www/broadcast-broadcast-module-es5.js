function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["broadcast-broadcast-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/broadcast/broadcast.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/broadcast/broadcast.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBroadcastBroadcastPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header class=\"ion-no-padding\">\r\n    <ion-list class=\"top-heading three-block\">\r\n      <ion-item slot=\"start\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../assets/images/station1.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 class=\"list-person\">Intoactive</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n\r\n        <ion-fab-button class=\"publisher\" size=\"small\" *ngIf=\"publisherButton\" (click)=\"cameraSwitch()\">\r\n          <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <ion-fab-button class=\"subscriber\" size=\"small\" *ngIf=\"subscriberButton\" (click)=\"cameraSwitch()\">\r\n          <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <ion-fab-button size=\"small\" *ngIf=\"!chatTrue\">\r\n          <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\" (click)=\"chatCall()\"></ion-icon>          \r\n        </ion-fab-button>\r\n\r\n        <ion-fab-button size=\"small\" *ngIf=\"chatTrue\" class=\"closeChatScreen\">\r\n          <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\" (click)=\"chatCloseCall()\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <ion-fab-button class=\"publisher\" size=\"small\" *ngIf=\"publisherButton\" (click)=\"publishPresentAlertConfirm()\">\r\n          <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <ion-fab-button class=\"subscriber\" size=\"small\" *ngIf=\"subscriberButton\" (click)=\"subscribePresentAlertConfirm()\">\r\n          <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <!-- <ion-fab-button size=\"small\" (click)=\"miceSwitch()\">\r\n          <ion-icon ios=\"ios-mice\" md=\"md-mice\"></ion-icon>\r\n        </ion-fab-button> -->\r\n\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-header>  \r\n  <ion-content class=\"broadcast-content\">     \r\n    <div id=\"publisher\" class=\"publisherScreen\"></div> \r\n    <div id=\"subscriber\" class=\"subscriberScreen\"></div>\r\n  <div [ngClass]=\"(chatbody =='on')?'chatblock':'chatnone'\">\r\n  \r\n      \r\n      <div class=\"chatList\">\r\n        <ion-list id=\"history\"></ion-list>\r\n      </div>\r\n      \r\n  </div> \r\n  <ion-footer *ngIf=\"chatTrue\" >\r\n    <ion-item lines=\"none\" class=\"send-box\">\r\n      <!-- <ion-textarea  [(ngModel)]=\"groupMessage\" id=\"sendmessage\" placeholder=\"Type here..\"></ion-textarea> -->\r\n      <ion-input [(ngModel)]=\"groupMessage\" id=\"sendmessage\" placeholder=\"Enter Text\" ></ion-input>\r\n      <ion-fab-button size=\"small\">\r\n        <ion-icon ios=\"ios-send\" md=\"md-send\" (click)=\"chatMessage()\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-item>\r\n  </ion-footer> \r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/broadcast/broadcast-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/broadcast/broadcast-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BroadcastPageRoutingModule */

  /***/
  function srcAppBroadcastBroadcastRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastPageRoutingModule", function () {
      return BroadcastPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _broadcast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./broadcast.page */
    "./src/app/broadcast/broadcast.page.ts");

    var routes = [{
      path: '',
      component: _broadcast_page__WEBPACK_IMPORTED_MODULE_3__["BroadcastPage"]
    }];

    var BroadcastPageRoutingModule = function BroadcastPageRoutingModule() {
      _classCallCheck(this, BroadcastPageRoutingModule);
    };

    BroadcastPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BroadcastPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/broadcast/broadcast.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/broadcast/broadcast.module.ts ***!
    \***********************************************/

  /*! exports provided: BroadcastPageModule */

  /***/
  function srcAppBroadcastBroadcastModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastPageModule", function () {
      return BroadcastPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _broadcast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./broadcast-routing.module */
    "./src/app/broadcast/broadcast-routing.module.ts");
    /* harmony import */


    var _broadcast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./broadcast.page */
    "./src/app/broadcast/broadcast.page.ts");

    var BroadcastPageModule = function BroadcastPageModule() {
      _classCallCheck(this, BroadcastPageModule);
    };

    BroadcastPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _broadcast_routing_module__WEBPACK_IMPORTED_MODULE_5__["BroadcastPageRoutingModule"]],
      declarations: [_broadcast_page__WEBPACK_IMPORTED_MODULE_6__["BroadcastPage"]]
    })], BroadcastPageModule);
    /***/
  },

  /***/
  "./src/app/broadcast/broadcast.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/broadcast/broadcast.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBroadcastBroadcastPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".publisherScreen {\n  width: 100vh;\n}\n\n.chat-box {\n  margin-bottom: 0px !important;\n  height: 308px;\n}\n\n.item-background-color-chat {\n  --background: transparent !important;\n}\n\n.chatblock {\n  display: block;\n  position: fixed;\n  bottom: 55px;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.35);\n  background: linear-gradient(0deg, black 0%, rgba(255, 255, 255, 0) 100%);\n}\n\n.chatnone {\n  display: none;\n}\n\n.broadcast-content .closeChatScreen {\n  height: 40px;\n}\n\n.chatList {\n  max-height: 270px;\n  overflow-y: auto;\n}\n\n.chatList ion-list {\n  background: transparent;\n  padding: 0;\n}\n\nion-item.send-box {\n  --background: #000;\n  --padding-top: 10px;\n}\n\n.subscriberScreen {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: inline-flex;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJvYWRjYXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxicm9hZGNhc3RcXGJyb2FkY2FzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Jyb2FkY2FzdC9icm9hZGNhc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUFlLGVBQUE7RUFBZ0IsWUFBQTtFQUFhLE9BQUE7RUFBUSxXQUFBO0VBQVksK0JBQUE7RUFBb0Msd0VBQUE7QUNReEc7O0FETkE7RUFDSSxhQUFBO0FDU0o7O0FETkE7RUFBb0MsWUFBQTtBQ1VwQzs7QURUQTtFQUFjLGlCQUFBO0VBQ1YsZ0JBQUE7QUNhSjs7QURaSTtFQUFTLHVCQUFBO0VBQXdCLFVBQUE7QUNnQnJDOztBRGRBO0VBQWtCLGtCQUFBO0VBQ2QsbUJBQUE7QUNrQko7O0FEaEJBO0VBQWtCLGVBQUE7RUFBZ0IsU0FBQTtFQUFVLE9BQUE7RUFBUSxXQUFBO0VBQVksb0JBQUE7RUFBc0IsZ0JBQUE7QUN5QnRGIiwiZmlsZSI6InNyYy9hcHAvYnJvYWRjYXN0L2Jyb2FkY2FzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic2NyaWJlclNjcmVlbnt9XHJcbi5wdWJsaXNoZXJTY3JlZW57XHJcbiAgICB3aWR0aDogMTAwdmg7XHJcbn1cclxuXHJcbi5jaGF0LWJveHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMDhweDtcclxufVxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9yLWNoYXR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5jaGF0YmxvY2t7XHJcbiAgICBkaXNwbGF5OiBibG9jaztwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiA1NXB4O2xlZnQ6IDA7d2lkdGg6IDEwMCU7YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTsgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LDApIDEwMCUpO1xyXG59XHJcbi5jaGF0bm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5icm9hZGNhc3QtY29udGVudCAuY2xvc2VDaGF0U2NyZWVue2hlaWdodDogNDBweDt9XHJcbi5jaGF0TGlzdHsgICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaW9uLWxpc3R7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7cGFkZGluZzogMDt9XHJcbn1cclxuaW9uLWl0ZW0uc2VuZC1ib3h7LS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDt9XHJcblxyXG4uc3Vic2NyaWJlclNjcmVlbntwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwO2xlZnQ6IDA7d2lkdGg6IDEwMCU7ZGlzcGxheTogaW5saW5lLWZsZXg7IG92ZXJmbG93LXg6IGF1dG87fVxyXG5cclxuIiwiLnB1Ymxpc2hlclNjcmVlbiB7XG4gIHdpZHRoOiAxMDB2aDtcbn1cblxuLmNoYXQtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzA4cHg7XG59XG5cbi5pdGVtLWJhY2tncm91bmQtY29sb3ItY2hhdCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmNoYXRibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNTVweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjayAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbn1cblxuLmNoYXRub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJyb2FkY2FzdC1jb250ZW50IC5jbG9zZUNoYXRTY3JlZW4ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5jaGF0TGlzdCB7XG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmNoYXRMaXN0IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1pdGVtLnNlbmQtYm94IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3Vic2NyaWJlclNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/broadcast/broadcast.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/broadcast/broadcast.page.ts ***!
    \*********************************************/

  /*! exports provided: BroadcastPage */

  /***/
  function srcAppBroadcastBroadcastPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastPage", function () {
      return BroadcastPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var publisherOBJ;
    var subscriberOBJ;
    var sessionOBJ;
    var userName;

    var BroadcastPage = /*#__PURE__*/function () {
      function BroadcastPage(alertController, navCtrl, programService, route, router, platform, routerOutlet) {
        _classCallCheck(this, BroadcastPage);

        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.programService = programService;
        this.route = route;
        this.router = router;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.volume = true;
        this.audioVolume = 100;
        this.cameraPosition = 'front';
        this.chatbody = 'off';
        this.publisherHangup = false;
        this.publisherMice = false;
        this.publisherVolume = false;
        this.publisherTargetElement = 'publisher';
        this.publisherButton = false;
        this.subscriberHangup = false;
        this.subscriberMice = false;
        this.subscriberVolume = false;
        this.subscriberTargetElement = 'subscriber';
        this.subscriberButton = false;
        this.chatTrue = false;
        this.groupMessage = '';
        this.loginData = JSON.parse(localStorage.getItem('userData'));
        var loginId = this.loginData.id;
        userName = this.loginData.user_name;
        this.opentokApiConfig();
        this.publisherConfig();
        this.subscriberConfig();
        this.icons();
      }

      _createClass(BroadcastPage, [{
        key: "opentokApiConfig",
        value: function opentokApiConfig() {
          // this.programService.openTokSessionCreate({'time': 10}).subscribe( (data: any) => {
          //   this.sessionId = data.opentok_session_id;
          //   this.token = data.opentok_token;
          //   this.apiKey = data.opentok_api_key;
          //   console.log('sessionId:'+this.sessionId);
          //   console.log('token:'+this.token);
          //   console.log('apiKey:'+this.apiKey);
          // });
          this.sessionId = '2_MX40NzA4MDA1NH5-MTYxMTIyMjYwNjQxNH4wWG91cTJkWkRhNDF6VVQrOXdxeW82TDN-fg';
          this.token = 'T1==cGFydG5lcl9pZD00NzA4MDA1NCZzaWc9MWJhZWI3Y2FlNDBiYjNmMzQ2NzQzZjQ3N2IyMDY0Y2NhY2JlYzQ5YzpzZXNzaW9uX2lkPTJfTVg0ME56QTRNREExTkg1LU1UWXhNVEl5TWpZd05qUXhOSDR3V0c5MWNUSmtXa1JoTkRGNlZWUXJPWGR4ZVc4MlRETi1mZyZjcmVhdGVfdGltZT0xNjExMjIyNjA2JnJvbGU9cHVibGlzaGVyJm5vbmNlPTE2MTEyMjI2MDYuNDM5MjM3MjE1NTE4MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
          this.apiKey = '47080054';
        }
      }, {
        key: "publisherConfig",
        value: function publisherConfig() {
          this.publisherProperties = {
            publishAudio: true,
            publishVideo: true,
            cameraPosition: this.cameraPosition,
            audioVolume: this.audioVolume,
            resolution: '1280x720',
            insertMode: 'append',
            width: 400,
            height: 575,
            name: this.loginData.user_name,
            usePreviousDeviceSelection: true,
            style: {
              // nameDisplayMode: "on",
              buttonDisplayMode: 'on'
            }
          };
        }
      }, {
        key: "subscriberConfig",
        value: function subscriberConfig() {
          this.subscriberProperties = {
            insertMode: 'append',
            subscribeToAudio: true,
            subscribeToVideo: true,
            cameraPosition: 'front',
            testNetwork: true,
            width: 90,
            height: 90,
            audioVolume: this.audioVolume,
            name: this.loginData.user_name,
            style: {
              nameDisplayMode: "off",
              buttonDisplayMode: 'on'
            }
          };
        }
      }, {
        key: "icons",
        value: function icons() {
          if (this.loginData.id == 93) {
            this.publisherButton = true;
            this.publisherHangup = true;
            this.publisherMice = true;
            this.publisherVolume = true;
          } else {
            this.subscriberButton = true;
            this.subscriberHangup = true;
            this.subscriberMice = true;
            this.subscriberVolume = true;
          }
        }
      }, {
        key: "cameraSwitchByPublisher",
        value: function cameraSwitchByPublisher() {
          publisherOBJ.cycleVideo(); //toggle the camera    
        }
      }, {
        key: "cameraSwitchBySubscriber",
        value: function cameraSwitchBySubscriber() {
          subscriberOBJ.cycleVideo();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.session = OT.initSession(this.apiKey, this.sessionId);
          sessionOBJ = this.session; //----Initializing a Publisher view---//

          this.publisher = OT.initPublisher(this.publisherTargetElement, this.publisherProperties, function (error) {
            if (error) {
              console.log(error);
            } else {
              console.log('publisher added.');
            }
          });
          publisherOBJ = this.publisher;
          this.session.on({
            streamCreated: function streamCreated(event) {
              // this.subStream = event.stream;
              _this.subscriber = _this.session.subscribe(event.stream, _this.subscriberTargetElement, _this.subscriberProperties, function (error) {
                if (error) {
                  console.log(error);
                } else {
                  console.log('Subscriber added.');
                }
              });
              subscriberOBJ = _this.subscriber;
              OT.updateViews(); // this function is valid for mobile
            },
            streamDestroyed: function streamDestroyed(event) {
              if (event.reason === 'networkDisconnected') {
                event.preventDefault();
                console.log('You lost your internet connection.' + 'Please check your connection and try connecting again.');
                _this.subscribers = _this.session.getSubscribersForStream(event.stream);

                if (_this.subscribers.length > 0) {
                  var subscriber = document.getElementById(_this.subscribers[0].id); // Display error message inside the Subscriber

                  subscriber.innerHTML = 'Lost connection. This could be due to your internet connection ' + 'or because the other party lost their connection.';
                  event.preventDefault(); // Prevent the Subscriber from being removed
                }
              } else {
                console.log("Stream ".concat(event.stream.name, " ended because ").concat(event.reason));
                OT.updateViews(); // this function is valid for mobile
              }
            },
            sessionConnected: function sessionConnected(event) {
              _this.session.publish(_this.publisher);
            }
          });
          this.session.connect(this.token, function (error) {
            if (error) {
              console.log("There was an error connecting to the session ".concat(error));
            } else {
              _this.connectionId = _this.session.connection.connectionId;
              console.group("this.connectionId : " + _this.session.connection.connectionId);
            }
          });
          this.session.on('signal:msg', function signalCallback(event) {
            var scrollIntoViewOptions;
            var node = document.createElement('ion-item');
            node.className = event.from.connectionId == event.target.connection.connectionId ? 'mine item-background-color-chat' : 'theirs item-background-color-chat';
            node.innerHTML = event.data;
            document.querySelector('#history').appendChild(node);
            node.scrollIntoView(scrollIntoViewOptions);
          });
          this.publisher.on("streamDestroyed", function (event) {
            console.log("The publisher stopped streaming. Reason: " + event.reason); // this.session = '';

            this.session.unpublish(this.publisher);
            this.publisher.destroy();
            this.session.disconnect(); // this.session.unpublish(this.publisher);
          });
        }
      }, {
        key: "chatCall",
        value: function chatCall() {
          var _this2 = this;

          this.chatTrue = true;
          this.chatbody = 'on';
          setTimeout(function () {
            _this2.sendmessage.setFocus();
          }, 400);
        }
      }, {
        key: "chatCloseCall",
        value: function chatCloseCall() {
          this.chatTrue = false;
          this.chatbody = 'off';
        }
      }, {
        key: "chatMessage",
        value: function chatMessage() {
          if (this.groupMessage != '' && this.groupMessage != null) {
            var html = "<ion-avatar slot='start'>";
            html += " <img src='../../assets/images/station2.jpg'>";
            html += "</ion-avatar>";
            html += "<ion-label>";
            html += " <h2 class='list-person'>" + userName + "</h2>";
            html += " <p>" + this.groupMessage + "</p>";
            html += "<ion-label>";
            this.session.signal({
              type: 'msg',
              data: html
            }, function signalCallback(error) {
              if (error) {
                console.error('Error sending signal:', error.name, error.message);
              } else {// this.groupMessage = '';
              }
            });
            this.groupMessage = '';
          }

          this.sendmessage.setFocus();
        }
      }, {
        key: "publishPresentAlertConfirm",
        value: function publishPresentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'End Live Broadcast!',
                      message: 'Are you sure, you want to end this live broadcast?',
                      cssClass: 'custom-alert',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Agree',
                        handler: function handler() {
                          _this3.session.unpublish(_this3.publisher);

                          sessionOBJ.disconnect();

                          _this3.navCtrl.back();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "subscribePresentAlertConfirm",
        value: function subscribePresentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Leave Live Broadcast!',
                      message: 'Are you sure, you want to leave this live broadcast?',
                      cssClass: 'custom-alert',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Agree',
                        handler: function handler() {
                          _this4.session.unsubscribe(_this4.subscriber);

                          sessionOBJ.disconnect();

                          _this4.navCtrl.back();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('ngOnDestroy session.disconnect');
          sessionOBJ.disconnect();
        }
      }]);

      return BroadcastPage;
    }();

    BroadcastPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"])], BroadcastPage.prototype, "sendmessage", void 0);
    BroadcastPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-broadcast',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./broadcast.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/broadcast/broadcast.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./broadcast.page.scss */
      "./src/app/broadcast/broadcast.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]])], BroadcastPage);
    /***/
  }
}]);
//# sourceMappingURL=broadcast-broadcast-module-es5.js.map