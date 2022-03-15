function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confrence-confrence-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfrenceConfrencePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../../assets/images/station1.jpg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2 class=\"list-person\">{{programTitle}}</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-fab-button *ngIf=\"this.mic == mic\" class=\"icon-block\"  size=\"small\" id=\"button1\" (click)=\"muteUnMuteAudio()\">\r\n        <ion-icon ios=\"ios-mic\" md=\"md-mic\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button *ngIf=\"this.mic == mic-off\" class=\"icon-block\" size=\"small\" id=\"button1\" (click)=\"muteUnMuteAudio()\">\r\n        <ion-icon ios=\"ios-mic-off\" md=\"md-mic-off\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button class=\"icon-block\"  size=\"small\" id=\"button5\" (click)=\"cheangAudioMedia()\">\r\n        <ion-icon ios=\"ios-{{volume}}\" md=\"md-{{volume}}\"></ion-icon> \r\n      </ion-fab-button>\r\n      <ion-fab-button class=\"icon-block\"  size=\"small\" id=\"button4\" (click)=\"switchCamera()\">\r\n        <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n      </ion-fab-button>      \r\n      <ion-fab-button class=\"icon-block\" size=\"small\">\r\n        <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\" (click)=\"chatCall()\"></ion-icon>          \r\n      </ion-fab-button>\r\n      <ion-fab-button class=\"icon-block\" size=\"small\" id=\"button3\" (click)=\"disconnect()\">\r\n        <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n      </ion-fab-button>      \r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"myClass\">\r\n    \r\n  </div>\r\n  <div [ngClass]=\"(chatbody =='on')?'chatblock':'chatnone'\">\r\n    <div class=\"chatList\">\r\n        <ion-list id=\"history\"></ion-list>\r\n    </div>\r\n</div> \r\n<ion-footer class=\"conferenceFooter\" *ngIf=\"chatTrue\" >\r\n  <ion-item lines=\"none\">\r\n    <ion-input [(ngModel)]=\"groupMessage\" id=\"sendmessage\" placeholder=\"Enter Text\" ></ion-input>\r\n    <ion-fab-button size=\"small\">\r\n      <ion-icon ios=\"ios-send\" md=\"md-send\" (click)=\"sendMessage()\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-item>\r\n</ion-footer>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/confrence/confrence-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/confrence/confrence-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ConfrencePageRoutingModule */

  /***/
  function srcAppConfrenceConfrenceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfrencePageRoutingModule", function () {
      return ConfrencePageRoutingModule;
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


    var _confrence_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./confrence.page */
    "./src/app/confrence/confrence.page.ts");

    var routes = [{
      path: '',
      component: _confrence_page__WEBPACK_IMPORTED_MODULE_3__["ConfrencePage"]
    }];

    var ConfrencePageRoutingModule = function ConfrencePageRoutingModule() {
      _classCallCheck(this, ConfrencePageRoutingModule);
    };

    ConfrencePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfrencePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/confrence/confrence.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/confrence/confrence.module.ts ***!
    \***********************************************/

  /*! exports provided: ConfrencePageModule */

  /***/
  function srcAppConfrenceConfrenceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfrencePageModule", function () {
      return ConfrencePageModule;
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


    var _confrence_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confrence-routing.module */
    "./src/app/confrence/confrence-routing.module.ts");
    /* harmony import */


    var _confrence_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confrence.page */
    "./src/app/confrence/confrence.page.ts");

    var ConfrencePageModule = function ConfrencePageModule() {
      _classCallCheck(this, ConfrencePageModule);
    };

    ConfrencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confrence_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfrencePageRoutingModule"]],
      declarations: [_confrence_page__WEBPACK_IMPORTED_MODULE_6__["ConfrencePage"]]
    })], ConfrencePageModule);
    /***/
  },

  /***/
  "./src/app/confrence/confrence.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/confrence/confrence.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfrenceConfrencePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#bottom_link {\n  position: absolute;\n  display: inline-block;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  width: 100%;\n  height: 60px; }\n\n.myClass {\n  background-color: lightgray;\n  height: 100%;\n  width: 100%; }\n\n#button1, #button2, #button3, #button4, #button5 {\n  width: 36px;\n  height: 36px;\n  margin: 0;\n  margin-left: 5px; }\n\n.bottom_link {\n  background: #ccc;\n  border-radius: 30px;\n  width: 90%;\n  margin: auto;\n  height: 40px;\n  margin-bottom: 5px; }\n\n.conferenceFooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%; }\n\n.top-heading {\n  display: flex; }\n\n.icon-right-side ion-fab-button {\n  width: 36px;\n  height: 36px;\n  margin: 0;\n  margin-left: 5px; }\n\n.icon-right-side ion-fab-button ion-icon {\n  font-size: 18px; }\n\n.chat-box {\n  margin-bottom: 0px !important;\n  height: 308px; }\n\n.item-background-color-chat {\n  --background: transparent !important; }\n\n.chatblock {\n  display: block;\n  position: fixed;\n  bottom: 55px;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.35);\n  background: linear-gradient(0deg, black 0%, rgba(255, 255, 255, 0) 100%); }\n\n.chatnone {\n  display: none; }\n\n.broadcast-content .closeChatScreen {\n  height: 40px; }\n\n.chatList {\n  max-height: 270px;\n  overflow-y: auto; }\n\n.chatList ion-list {\n    background: transparent;\n    padding: 0; }\n\nion-item.send-box {\n  --background: #000;\n  --padding-top: 10px; }\n\n.icon-block {\n  width: 50px;\n  height: 50px;\n  padding: 20px;\n  border-radius: 50%; }\n\n.icon-block ion-icon {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZnJlbmNlL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxjb25mcmVuY2VcXGNvbmZyZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFNBQVE7RUFDUixPQUFNO0VBQ04sdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWY7RUFDRywyQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQUMsU0FBUztFQUFDLGdCQUFnQixFQUFBOztBQUkzQztFQUFhLGdCQUFnQjtFQUFDLG1CQUFtQjtFQUFDLFVBQVU7RUFBQyxZQUFZO0VBQUMsWUFBWTtFQUFDLGtCQUFrQixFQUFBOztBQUN6RztFQUFrQixlQUFlO0VBQUMsT0FBTztFQUFDLFNBQVM7RUFBQyxXQUFXLEVBQUE7O0FBRS9EO0VBQWEsYUFBYSxFQUFBOztBQUMxQjtFQUFpQyxXQUFXO0VBQzFDLFlBQVk7RUFBQyxTQUFTO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3pDO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDZCQUE2QjtFQUM3QixhQUFhLEVBQUE7O0FBRWY7RUFDRSxvQ0FBYSxFQUFBOztBQUVmO0VBQ0UsY0FBYztFQUFDLGVBQWU7RUFBQyxZQUFZO0VBQUMsT0FBTztFQUFDLFdBQVc7RUFBQywrQkFBK0I7RUFBSyx3RUFBOEUsRUFBQTs7QUFFcEw7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFBb0MsWUFBWSxFQUFBOztBQUNoRDtFQUFjLGlCQUFpQjtFQUM3QixnQkFBZ0IsRUFBQTs7QUFEbEI7SUFFVyx1QkFBdUI7SUFBQyxVQUFVLEVBQUE7O0FBRTdDO0VBQWtCLGtCQUFhO0VBQzdCLG1CQUFjLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29uZnJlbmNlL2NvbmZyZW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm90dG9tX2xpbmt7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgICAgICAgICAgICBcclxuICAgIGJvdHRvbTowOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbGVmdDowOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuIH1cclxuIC5teUNsYXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjYnV0dG9uMSwgI2J1dHRvbjIsI2J1dHRvbjMsI2J1dHRvbjQsI2J1dHRvbjV7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDttYXJnaW46IDA7bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4gICBcclxuLy8gLmNoYXRMaXN0e3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDUwcHg7bGVmdDogMDt3aWR0aDogMTAwJTttYXgtaGVpZ2h0OiA0MHZoO31cclxuLmJvdHRvbV9saW5re2JhY2tncm91bmQ6ICNjY2M7Ym9yZGVyLXJhZGl1czogMzBweDt3aWR0aDogOTAlO21hcmdpbjogYXV0bztoZWlnaHQ6IDQwcHg7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuLmNvbmZlcmVuY2VGb290ZXJ7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDA7Ym90dG9tOiAwO3dpZHRoOiAxMDAlO31cclxuXHJcbi50b3AtaGVhZGluZ3tkaXNwbGF5OiBmbGV4fVxyXG4uaWNvbi1yaWdodC1zaWRlIGlvbi1mYWItYnV0dG9ueyB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiA1cHh9XHJcbi5pY29uLXJpZ2h0LXNpZGUgaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uY2hhdC1ib3h7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDhweDtcclxufVxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9yLWNoYXR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBcclxufVxyXG4uY2hhdGJsb2Nre1xyXG4gIGRpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDU1cHg7bGVmdDogMDt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpOyAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsMCkgMTAwJSk7XHJcbn1cclxuLmNoYXRub25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5icm9hZGNhc3QtY29udGVudCAuY2xvc2VDaGF0U2NyZWVue2hlaWdodDogNDBweDt9XHJcbi5jaGF0TGlzdHsgICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBpb24tbGlzdHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtwYWRkaW5nOiAwO31cclxufVxyXG5pb24taXRlbS5zZW5kLWJveHstLWJhY2tncm91bmQ6ICMwMDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTBweDt9XHJcblxyXG4gIC5pY29uLWJsb2Nre1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuaWNvbi1ibG9jayBpb24taWNvbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/confrence/confrence.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/confrence/confrence.page.ts ***!
    \*********************************************/

  /*! exports provided: ConfrencePage */

  /***/
  function srcAppConfrenceConfrencePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfrencePage", function () {
      return ConfrencePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modalContent/payment/payment.component */
    "./src/app/modalContent/payment/payment.component.ts");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var rxjs___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/ */
    "./node_modules/rxjs/_esm2015/index.js");

    var ConfrencePage = /*#__PURE__*/function () {
      //
      function ConfrencePage(commonService, route, navCtrl, router, programService) {
        _classCallCheck(this, ConfrencePage);

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
        this.groupMessage = ''; //

        this.streamAudioBoolean = false;
        this.streamVideoBoolean = false;
        this.audioMutedBoolean = false;
        this.videoMutedBoolean = false;
      }

      _createClass(ConfrencePage, [{
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('ionViewDidLoad SegmentPage');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.queryParams.subscribe(function (params) {
            _this2.programId = params["programId"];
            _this2.programTitle = params["programTitle"];
            _this2.program_fee = params["program_fee"];
            _this2.programImage = params["program_img"];
            _this2.role = params["role"];
            console.log("Role:" + params["role"]);
            console.log(params); // console.log("program_type:"+params["program_type"]);
            // console.log("description:"+params["description"]);
            // console.log("participants:"+params["participants"]);
            // console.log("duration:"+params["duration"]);
            // console.log("programId:"+params["programId"]);
            //console.log("programId:"+params["programTitle"]);

            if (params["program_type"] == 'public') {
              _this2.streamAudioBoolean = true;
              _this2.streamVideoBoolean = true;

              if (params["role"] == 'moderator') {
                _this2.mic = 'mic';
                _this2.volume = 'volume-high';
                _this2.audioMutedBoolean = false;
                _this2.videoMutedBoolean = false;
              } else {
                _this2.mic = 'mic-off';
                _this2.volume = 'volume-off';
                _this2.audioMutedBoolean = true;
                _this2.videoMutedBoolean = true;
              }
            } else if (params["program_type"] == 'private oneway') {
              console.log("program_type 1:" + params["program_type"]);
              _this2.streamAudioBoolean = true;
              _this2.streamVideoBoolean = true;

              if (params["role"] == 'moderator') {
                _this2.mic = 'mic';
                _this2.volume = 'volume-high';
                _this2.audioMutedBoolean = false;
                _this2.videoMutedBoolean = false;
              } else {
                _this2.mic = 'mic-off';
                _this2.volume = 'volume-off';
                _this2.audioMutedBoolean = true;
                _this2.videoMutedBoolean = true;
              }
            } else if (params["program_type 2"] == 'private twoway') {
              console.log("program_type :" + params["program_type"]);
              _this2.streamAudioBoolean = true;
              _this2.streamVideoBoolean = true;
              _this2.audioMutedBoolean = false;
              _this2.videoMutedBoolean = false;
              _this2.mic = 'mic';
              _this2.volume = 'volume-high';
            } else if (params["program_type"] == 'group oneway') {
              console.log("program_type 1 :" + params["program_type"]);
              _this2.streamAudioBoolean = true;
              _this2.streamVideoBoolean = true;

              if (params["role"] == 'moderator') {
                _this2.mic = 'mic';
                _this2.volume = 'volume-high';
                _this2.audioMutedBoolean = false;
                _this2.videoMutedBoolean = false;
              } else {
                _this2.mic = 'mic-off';
                _this2.volume = 'volume-off';
                _this2.audioMutedBoolean = true;
                _this2.videoMutedBoolean = true;
              }
            } else if (params["program_type"] == 'group twoway') {
              console.log("program_type 2 :" + params["program_type"]);
              _this2.streamAudioBoolean = true;
              _this2.streamVideoBoolean = true;
              _this2.audioMutedBoolean = false;
              _this2.videoMutedBoolean = false;
              _this2.mic = 'mic';
              _this2.volume = 'volume-high';
            } else {
              console.log("program_type :" + params["program_type"]);
              _this2.streamAudioBoolean = true;
              _this2.streamVideoBoolean = true;
              _this2.audioMutedBoolean = false;
              _this2.videoMutedBoolean = false;
              _this2.mic = 'mic';
              _this2.volume = 'volume-high';
            }

            var videoSize = {
              minWidth: 320,
              minHeight: 180,
              maxWidth: 1280,
              maxHeight: 720
            };
            var streamOpt = {
              audio: _this2.streamAudioBoolean,
              video: _this2.streamVideoBoolean,
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
              audiomute: _this2.audioMutedBoolean,
              videomute: _this2.videoMutedBoolean,
              bandwidth: true,
              screenshot: true,
              avatar: true,
              iconHeight: 30,
              iconWidth: 30,
              avatarHeight: 200,
              avatarWidth: 200
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
                auto_recording: false
              }
            };
            window.EnxRtc.joinRoom(params["token"], streamOpt, roomOpt);

            _this2.addEnxListner();
          });
        } //Init LocalView

      }, {
        key: "initLocalView",
        value: function initLocalView() {
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
      }, {
        key: "initRemoteView",
        value: function initRemoteView() {
          var initRemoteViewOptions = {
            margin_top: 70,
            margin_bottom: 70
          };
          window.EnxRtc.initRemoteView(initRemoteViewOptions, function (data) {
            console.log('Remore Player Excelsior succuss! ' + JSON.stringify(data.data));
          }, function (err) {
            console.log('Uh oh... error' + JSON.stringify(err));
          });
        } //Add listoner 

      }, {
        key: "addEnxListner",
        value: function addEnxListner() {
          var _this3 = this;

          // this.timer =  setTimeout(() => {
          //   var i = this.viewCounter();
          //   console.log(i + 'eeeee');
          // }, 100);
          var i = 1;
          Object(rxjs___WEBPACK_IMPORTED_MODULE_7__["interval"])(1000).subscribe(function (val) {
            _this3.sub = i++; // console.log(i);
          });

          var _this = this;

          window.EnxRtc.addEventListner("onRoomConnected", function (data) {
            console.log('Excelsior succuss! resizeViewOptions ' + JSON.stringify(data.data));

            _this.initLocalView();

            _this.initRemoteView();
          });
          window.EnxRtc.addEventListner("onRoomDisConnected", function (data) {
            // console.log('Excelsior succuss! onRoomDisConnected ' + JSON.stringify(data.data));
            _this.goBackToPriviousPage();
          });
          window.EnxRtc.addEventListner("onEventError", function (data) {// console.log('Excelsior EventError! onEventError ' + JSON.stringify(data.data));
          });
          window.EnxRtc.addEventListner("onAudioEvent", function (data) {
            // console.log('Excelsior succuss! onAudioEvent ' + JSON.stringify(data.data.result));
            var response = data.data; // console.log("audio msg" + typeof response.msg);
            // console.log("audio variable msg" + response.msg + 'hello');

            if (response.msg === 'Audio Off') {
              // console.log("function condition get");
              _this.audioMute = true;
              _this.mic = 'mic-off'; // _this.audioimgSrc = "../../assets/icon/unmute_audio.png";
            } else {
              // console.log("function condition offff get");
              _this.audioMute = false;
              _this.mic = 'mic'; // _this.audioimgSrc = "../../assets/icon/mute_audio.png";
            }
          });
          window.EnxRtc.addEventListner("onVideoEvent", function (data) {
            // console.log('Excelsior succuss! onVideoEvent ' + JSON.stringify(data.data));
            var response = data.data; // console.log("Video msg" + response.msg);

            if (response.msg === "Video Off") {
              _this.videoMute = true; // _this.videoimgSrc = "../../assets/icon/unmute_video.png";
            } else {
              _this.videoMute = false; // _this.videoimgSrc = "../../assets/icon/mute_video.png";
            }
          });
          window.EnxRtc.addEventListner("onNotifyDeviceUpdate", function (data) {
            // console.log('Excelsior EventError! onNotifyDeviceUpdate ' + JSON.stringify(data.data));
            var deviceName = data.data;

            if (deviceName === "EARPIECE") {
              _this.volume = 'volume-high'; // _this.speakerImgSrc = "../../assets/icon/unmute_speaker.png";
            } else {
              _this.volume = 'volume-off'; // _this.speakerImgSrc = "../../assets/icon/mute_speaker.png";
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
      }, {
        key: "viewCounter",
        value: function viewCounter() {
          var i = 1;
          i++;
          return i;
        }
      }, {
        key: "goBackToPriviousPage",
        value: function goBackToPriviousPage() {
          this.navCtrl.pop();
        }
      }, {
        key: "muteUnMuteAudio",
        value: function muteUnMuteAudio() {
          // console.log("Image Click");
          if (!this.audioMute) {
            // console.log("Audio Mute");
            this.mic = "mic-off";
            window.EnxRtc.muteSelfAudio(true);
          } else {
            // console.log("Audio unMute");
            this.mic = "mic";
            window.EnxRtc.muteSelfAudio(false);
          }
        }
      }, {
        key: "muteUnMuteVideo",
        value: function muteUnMuteVideo() {
          // console.log("Image Click");
          if (!this.videoMute) {
            // this.mic = "volume-high";
            window.EnxRtc.muteSelfVideo(true);
          } else {
            // this.mic = "volume-off";
            window.EnxRtc.muteSelfVideo(false);
          }
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          var viewCounter = this.sub;
          this.programService.updateWatchCounter({
            "programId": this.programId,
            "counter": viewCounter
          }).subscribe(function (data) {
            console.log(data);
            console.log('dataaaaaa');
          }); // console.log(viewCounter);

          window.EnxRtc.disconnect(false, function (data) {
            console.log('Excelsior succuss! hideSelfView ' + JSON.stringify(data.data));
          }, function (err) {// console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
          });

          if (this.role == 'participant') {
            // this.programService.insertProgPaymentDetail({ "program_id" : this.programId, "amount" : this.program_fee }).subscribe(data => {
            //   console.log(data);
            //   console.log('paymentttttt');
            // });
            this.programService.updateWatchCounter({
              "programId": this.programId,
              "counter": viewCounter
            }).subscribe(function (data) {
              console.log(data);
              console.log('dataaaaaa');
            });

            if (this.program_fee > 0) {
              this.payment();
            } // this.router.navigateByUrl('/payment/'+this.programId);

          }
        }
      }, {
        key: "switchCamera",
        value: function switchCamera() {
          window.EnxRtc.switchCamera(false, function (data) {// console.log('Excelsior succuss! Switch Camera ' + JSON.stringify(data.data));
          }, function (err) {// console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
          });
        }
      }, {
        key: "cheangAudioMedia",
        value: function cheangAudioMedia() {
          window.EnxRtc.getSelectedDevice(function (data) {
            // console.log('Excelsior succuss! getSelectedDevice ' + JSON.stringify(data.data));
            var currentDevice = data.data;
            window.EnxRtc.getDevices(function (data) {
              // console.log('Excelsior succuss! getDevices ' + JSON.stringify(data.data));
              var connectedMedia = data.data; // console.log("fileter media " + connectedMedia);

              var meida;

              var _iterator = _createForOfIteratorHelper(connectedMedia),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  meida = _step.value;

                  if (meida === currentDevice) {// console.log("Available Media" + meida);
                  } else {
                    window.EnxRtc.switchMediaDevice(meida, function (data) {// console.log('Excelsior succuss! switchMediaDevice ' + JSON.stringify(data.data));
                    }, function (err) {// console.log('Uh oh... error resizeLocalView ' + JSON.stringify(err));
                    });
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
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
      }, {
        key: "sendChatToServer",
        value: function sendChatToServer(text) {
          var message = text; // JSON

          var broadcast = true; // Incase of public messaging

          var array = []; // Incase of public messaging

          window.EnxRtc.sendMessage(message, broadcast, array, function (data) {
            console.log("Data : " + JSON.stringify(data));
          });
        }
      }, {
        key: "plotChat",
        value: function plotChat(obj) {//   const f_name = obj.username;
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
      }, {
        key: "chatCall",
        value: function chatCall() {
          var _this4 = this;

          this.chatTrue = true;
          this.chatbody = 'on';
          setTimeout(function () {
            _this4.sendmessage.setFocus();
          }, 400);
        }
      }, {
        key: "chatCloseCall",
        value: function chatCloseCall() {
          this.chatTrue = false;
          this.chatbody = 'off';
        }
      }, {
        key: "payment",
        value: function payment() {
          var fileData = {
            pgid: this.programId,
            pgname: this.programTitle,
            pgamount: this.program_fee,
            pgimg: this.programImage,
            routeLink: 'confrence'
          };
          this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"], 'bottomModal', fileData);
        }
      }]);

      return ConfrencePage;
    }();

    ConfrencePage.ctorParameters = function () {
      return [{
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])], ConfrencePage.prototype, "sendmessage", void 0);
    ConfrencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confrence',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confrence.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confrence.page.scss */
      "./src/app/confrence/confrence.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_program_service__WEBPACK_IMPORTED_MODULE_6__["ProgramService"]])], ConfrencePage);
    /***/
  }
}]);
//# sourceMappingURL=confrence-confrence-module-es5.js.map