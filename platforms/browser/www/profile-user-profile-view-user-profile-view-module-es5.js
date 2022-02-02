function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-user-profile-view-user-profile-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/message-popup/message-popup.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/message-popup/message-popup.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileUserProfileViewMessagePopupMessagePopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\r\n  <ion-label>Send a Message</ion-label>\r\n  <ion-textarea class=\"form-control\"></ion-textarea>\r\n  <div class=\"ion-text-end mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green\" (click)=\"eventFromPopover()()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/report-popup/report-popup.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/report-popup/report-popup.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileUserProfileViewReportPopupReportPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\r\n  <ion-label>Report This</ion-label>\r\n  <div class=\"ion-text-end mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green\" (click)=\"eventFromPopover()()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/user-profile-view.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/user-profile-view.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileUserProfileViewUserProfileViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">    \r\n    <ion-item>      \r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item> \r\n    <ion-item slot=\"center\">\r\n      <ion-label *ngIf=\"!profileData?.userData?.bios?.display_name\">{{profileData?.userData?.user_name}}</ion-label>\r\n      <ion-label *ngIf=\"profileData?.userData?.bios?.display_name\">{{profileData?.userData?.bios?.display_name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <a (click)=\"userFollowers()\" class=\"follow-people\" slot=\"end\">\r\n        <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n      </a>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header> \r\n<ion-content class=\"main_content\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div class=\"sec-banner \"> \r\n          <div class=\"top-banner\"> \r\n            <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"backgroundPicUrl+profileData?.userData?.bios?.profile_background_image\">           \r\n          </div>\r\n        </div>\r\n        <div class=\"profile-content\">\r\n          <img class=\"user-img\" [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\">           \r\n          <ion-text>\r\n            <h6 class=\"ion-no-margin\" *ngIf=\"profileData?.userData?.user_name\">{{profileData?.userData?.user_name}}</h6>            \r\n          </ion-text>\r\n          <ion-fab horizontal=\"end\" vertical=\"center\" slot=\"fixed\">\r\n            <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"openModal()\">\r\n              <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-list lines=\"none\" class=\"top-list\">\r\n          <ion-item (click)=\"followUp(followStatus)\" id=\"followStatus\">\r\n            <img [src]=\"followStatus == 'UNFOLLOW' ? '../../assets/images/unfollow.svg':'../../assets/images/follow.svg'\" />\r\n            <ion-label>{{followStatus}}</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"messagePopup()\">\r\n            <img src=\"../../assets/images/comment.svg\" />\r\n            <ion-label>Chat</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"reportPopup()\">\r\n            <img src=\"../../assets/images/alert.svg\" />\r\n            <ion-label>Report</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"blockUser(block)\">\r\n            <img src=\"../../assets/images/blocks.svg\" />\r\n            <ion-label>{{ block ?'Unblock':'Block' }}</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/user.svg\" />\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.userData?.bios?.about_me\">{{profileData?.userData?.bios?.about_me}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.userData?.bios?.about_me\">Bio Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/like.svg\" />\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.speciality?.primaryName?.name\">{{profileData?.speciality?.primaryName?.name}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.speciality?.primaryName?.name\">Primary Interest Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/global.svg\" />\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.lang?.lang\">{{profileData?.lang?.lang}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.lang?.lang\">Languages Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/placeholder.svg\" />\r\n              </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.address?.country?.name\">{{profileData?.address?.city?.name}}{{profileData?.address?.state?.name }},{{profileData?.address?.country?.name}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.address?.country?.name\">Location Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/message-popup/message-popup.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/profile/user-profile-view/message-popup/message-popup.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileUserProfileViewMessagePopupMessagePopupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea.form-control {\n  border-radius: 0;\n  height: auto;\n  border-width: 0 0 1px 0;\n  padding: 0; }\n\nion-textarea.form-control textarea {\n  padding: 0; }\n\n.btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF; }\n\n.btn-gray {\n  background: #999; }\n\n.btn-green {\n  background: #26a69a; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9tZXNzYWdlLXBvcHVwL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFx1c2VyLXByb2ZpbGUtdmlld1xcbWVzc2FnZS1wb3B1cFxcbWVzc2FnZS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUEwQixnQkFBZ0I7RUFBQyxZQUFZO0VBQUMsdUJBQXVCO0VBQUMsVUFBVSxFQUFBOztBQUMxRjtFQUFtQyxVQUFVLEVBQUE7O0FBQzdDO0VBQUssdUJBQXVCO0VBQUMsZ0JBQWdCO0VBQUMsVUFBUztFQUFDLG1DQUF1QjtFQUFhLGtCQUFhO0VBQU0seUJBQWE7RUFBYSxpQ0FBcUI7RUFBYSwrQkFBbUI7RUFBYSxnQkFBUTtFQUFTLDBCQUFrQjtFQUFTLHdCQUFnQjtFQUFTLFdBQVcsRUFBQTs7QUFDM1I7RUFBVSxnQkFBZ0IsRUFBQTs7QUFDMUI7RUFBVyxtQkFBbUIsRUFBQTs7QUFDOUI7RUFBTyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlLXZpZXcvbWVzc2FnZS1wb3B1cC9tZXNzYWdlLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbHtib3JkZXItcmFkaXVzOiAwO2hlaWdodDogYXV0bztib3JkZXItd2lkdGg6IDAgMCAxcHggMDtwYWRkaW5nOiAwO31cclxuaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB0ZXh0YXJlYXtwYWRkaW5nOiAwO31cclxuLmJ0bntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtib3gtc2hhZG93OiBub25lO3BhZGRpbmc6MDstLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDstLWJveC1zaGFkb3c6IG5vbmU7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDstLWNvbG9yOiAjZmZmZmZmOy0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmOy0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtjb2xvcjogI0ZGRjt9XHJcbi5idG4tZ3JheXtiYWNrZ3JvdW5kOiAjOTk5O31cclxuLmJ0bi1ncmVlbntiYWNrZ3JvdW5kOiAjMjZhNjlhO31cclxuLm10LTEwe21hcmdpbi10b3A6IDEwcHg7fSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/message-popup/message-popup.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/profile/user-profile-view/message-popup/message-popup.component.ts ***!
    \************************************************************************************/

  /*! exports provided: MessagePopupComponent */

  /***/
  function srcAppProfileUserProfileViewMessagePopupMessagePopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagePopupComponent", function () {
      return MessagePopupComponent;
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

    var MessagePopupComponent = /*#__PURE__*/function () {
      function MessagePopupComponent(events, navParams, popoverController) {
        _classCallCheck(this, MessagePopupComponent);

        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
      }

      _createClass(MessagePopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.page = this.navParams.get('data');
        }
      }, {
        key: "eventFromPopover",
        value: function eventFromPopover() {
          this.events.publish('fromPopoverEvent');
          this.popoverController.dismiss();
        }
      }]);

      return MessagePopupComponent;
    }();

    MessagePopupComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    MessagePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/message-popup/message-popup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-popup.component.scss */
      "./src/app/profile/user-profile-view/message-popup/message-popup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], MessagePopupComponent);
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/report-popup/report-popup.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/profile/user-profile-view/report-popup/report-popup.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileUserProfileViewReportPopupReportPopupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF; }\n\n.btn-gray {\n  background: #999; }\n\n.btn-green {\n  background: #26a69a; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2ZpbGVcXHVzZXItcHJvZmlsZS12aWV3XFxyZXBvcnQtcG9wdXBcXHJlcG9ydC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFLLHVCQUF1QjtFQUFDLGdCQUFnQjtFQUFDLFVBQVM7RUFBQyxtQ0FBdUI7RUFBYSxrQkFBYTtFQUFNLHlCQUFhO0VBQWEsaUNBQXFCO0VBQWEsK0JBQW1CO0VBQWEsZ0JBQVE7RUFBUywwQkFBa0I7RUFBUyx3QkFBZ0I7RUFBUyxXQUFXLEVBQUE7O0FBQzNSO0VBQVUsZ0JBQWdCLEVBQUE7O0FBQzFCO0VBQVcsbUJBQW1CLEVBQUE7O0FBQzlCO0VBQU8sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS12aWV3L3JlcG9ydC1wb3B1cC9yZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICNmZmZmZmY7LS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7LS1jb2xvci1mb2N1c2VkOiAjZmZmZmZmO2NvbG9yOiAjRkZGO31cclxuLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4uYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/report-popup/report-popup.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/profile/user-profile-view/report-popup/report-popup.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ReportPopupComponent */

  /***/
  function srcAppProfileUserProfileViewReportPopupReportPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportPopupComponent", function () {
      return ReportPopupComponent;
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

    var ReportPopupComponent = /*#__PURE__*/function () {
      function ReportPopupComponent(events, navParams, popoverController) {
        _classCallCheck(this, ReportPopupComponent);

        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
      }

      _createClass(ReportPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.page = this.navParams.get('data');
        }
      }, {
        key: "eventFromPopover",
        value: function eventFromPopover() {
          this.events.publish('fromPopoverEvent');
          this.popoverController.dismiss();
        }
      }]);

      return ReportPopupComponent;
    }();

    ReportPopupComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    ReportPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/report-popup/report-popup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report-popup.component.scss */
      "./src/app/profile/user-profile-view/report-popup/report-popup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], ReportPopupComponent);
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/user-profile-view-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/profile/user-profile-view/user-profile-view-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserProfileViewPageRoutingModule */

  /***/
  function srcAppProfileUserProfileViewUserProfileViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileViewPageRoutingModule", function () {
      return UserProfileViewPageRoutingModule;
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


    var _user_profile_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-profile-view.page */
    "./src/app/profile/user-profile-view/user-profile-view.page.ts");

    var routes = [{
      path: '',
      component: _user_profile_view_page__WEBPACK_IMPORTED_MODULE_3__["UserProfileViewPage"]
    }];

    var UserProfileViewPageRoutingModule = function UserProfileViewPageRoutingModule() {
      _classCallCheck(this, UserProfileViewPageRoutingModule);
    };

    UserProfileViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserProfileViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/user-profile-view.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/profile/user-profile-view/user-profile-view.module.ts ***!
    \***********************************************************************/

  /*! exports provided: UserProfileViewPageModule */

  /***/
  function srcAppProfileUserProfileViewUserProfileViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileViewPageModule", function () {
      return UserProfileViewPageModule;
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


    var _user_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-profile-view-routing.module */
    "./src/app/profile/user-profile-view/user-profile-view-routing.module.ts");
    /* harmony import */


    var _user_profile_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile-view.page */
    "./src/app/profile/user-profile-view/user-profile-view.page.ts");
    /* harmony import */


    var _message_popup_message_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./message-popup/message-popup.component */
    "./src/app/profile/user-profile-view/message-popup/message-popup.component.ts");
    /* harmony import */


    var _report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./report-popup/report-popup.component */
    "./src/app/profile/user-profile-view/report-popup/report-popup.component.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var UserProfileViewPageModule = function UserProfileViewPageModule() {
      _classCallCheck(this, UserProfileViewPageModule);
    };

    UserProfileViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfileViewPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageModule"]],
      declarations: [_user_profile_view_page__WEBPACK_IMPORTED_MODULE_6__["UserProfileViewPage"], _message_popup_message_popup_component__WEBPACK_IMPORTED_MODULE_7__["MessagePopupComponent"], _report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
      entryComponents: [_message_popup_message_popup_component__WEBPACK_IMPORTED_MODULE_7__["MessagePopupComponent"], _report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]]
    })], UserProfileViewPageModule);
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/user-profile-view.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/profile/user-profile-view/user-profile-view.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileUserProfileViewUserProfileViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-profile-bg {\n  height: 185px;\n  background: url('demo3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 15px; }\n\n.profile-content {\n  position: relative;\n  top: -50px;\n  padding-top: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center; }\n\n.profile-content a {\n  color: #777777;\n  font-size: 0.85rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.profile-content ion-text {\n  position: relative;\n  top: 35px; }\n\n.user-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: 0px 0px 15px 0px rgba(82, 82, 82, 0.55);\n  margin-bottom: 10px;\n  position: absolute;\n  top: 0; }\n\n.user-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(39, 166, 154, 0.07);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.user-icon img {\n  width: 16px;\n  height: 16px; }\n\nion-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF;\n  display: flex;\n  align-items: center; }\n\nion-card ion-card-header {\n  padding-right: 0; }\n\nion-card-header + .card-content-md {\n  padding-top: 16px; }\n\n.share-btn {\n  --background:#27a69a;\n  --background-activated:#27a69a;\n  --background-focused:#27a69a;\n  --background-hover:#27a69a;\n  --ion-color-shade:#27a69a!important;\n  --ion-color-tint:#27a69a!important;\n  --ion-color-base:rgba(0, 0, 0, 0.35)!important; }\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize; }\n\nion-card.ios ion-card-content {\n  font-weight: 300;\n  font-size: 0.85rem; }\n\nion-card-content.ios {\n  padding-top: 20px !important; }\n\nion-card.ios {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcdXNlci1wcm9maWxlLXZpZXdcXHVzZXItcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQixhQUFhO0VBQUMsc0NBQTJEO0VBQUMsc0JBQXNCO0VBQUMsMkJBQTJCO0VBQUMsZUFBZSxFQUFBOztBQUM3SjtFQUFpQixrQkFBa0I7RUFBQyxVQUFVO0VBQUMsaUJBQWdCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQjtFQUFDLHNCQUFzQjtFQUFDLGtCQUFrQixFQUFBOztBQUNuSztFQUFtQixjQUFjO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQixFQUFBOztBQUM5RztFQUEwQixrQkFBa0I7RUFBQyxTQUFTLEVBQUE7O0FBQ3REO0VBQVUsV0FBVztFQUFDLFlBQVk7RUFBQyxrQkFBa0I7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQUMsMEJBQXVCO0tBQXZCLHVCQUF1QjtFQUFzSCxtREFBbUQ7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxNQUFNLEVBQUE7O0FBQ3RUO0VBQVcsV0FBVztFQUFDLFlBQVk7RUFBQyxrQkFBa0I7RUFBQyxvQ0FBb0M7RUFBQyxhQUFhO0VBQUMsdUJBQXVCO0VBQUMsbUJBQW1CLEVBQUE7O0FBQ3JKO0VBQWUsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDdkM7RUFBUywrQ0FBK0M7RUFBQyxnQkFBZ0I7RUFBQyxhQUFhO0VBQUMsbUJBQW1CLEVBQUE7O0FBQzNHO0VBQXlCLGdCQUFnQixFQUFBOztBQUN6QztFQUFpQyxpQkFBaUIsRUFBQTs7QUFFbEQ7RUFBVyxvQkFBYTtFQUFRLDhCQUF1QjtFQUFRLDRCQUFxQjtFQUFRLDBCQUFtQjtFQUFRLG1DQUFrQjtFQUFrQixrQ0FBaUI7RUFBa0IsOENBQWlCLEVBQUE7O0FBRS9NO0VBQStCLDBCQUEwQixFQUFBOztBQUN6RDtFQUErQixnQkFBZ0I7RUFBRSxrQkFBa0IsRUFBQTs7QUFFbkU7RUFBcUIsNEJBQTRCLEVBQUE7O0FBQ2pEO0VBQWEsZ0JBQWdCO0VBQUMsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS12aWV3L3VzZXItcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLXByb2ZpbGUtYmd7aGVpZ2h0OiAxODVweDtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kZW1vMy5qcGcpIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtwYWRkaW5nOiAwIDE1cHg7fVxyXG4ucHJvZmlsZS1jb250ZW50e3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC01MHB4O3BhZGRpbmctdG9wOjYwcHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47dGV4dC1hbGlnbjogY2VudGVyO31cclxuLnByb2ZpbGUtY29udGVudCBhe2NvbG9yOiAjNzc3Nzc3O2ZvbnQtc2l6ZTogMC44NXJlbTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4ucHJvZmlsZS1jb250ZW50IGlvbi10ZXh0e3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IDM1cHg7fVxyXG4udXNlci1pbWd7d2lkdGg6IDkwcHg7aGVpZ2h0OiA5MHB4O2JvcmRlci1yYWRpdXM6IDUwJTtvYmplY3QtZml0OiBjb3ZlcjtvYmplY3QtcG9zaXRpb246IGNlbnRlcjstd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTstbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTtib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7bWFyZ2luLWJvdHRvbTogMTBweDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO31cclxuLnVzZXItaWNvbnt3aWR0aDogMzRweDtoZWlnaHQ6IDM0cHg7Ym9yZGVyLXJhZGl1czogNTAlO2JhY2tncm91bmQ6IHJnYmEoMzksIDE2NiwgMTU0LCAwLjA3KTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4udXNlci1pY29uIGltZ3t3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7fVxyXG5pb24tY2FyZHtib3gtc2hhZG93OiAwcHggOHB4IDI0cHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTtiYWNrZ3JvdW5kOiAjRkZGO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlcntwYWRkaW5nLXJpZ2h0OiAwO31cclxuaW9uLWNhcmQtaGVhZGVyKy5jYXJkLWNvbnRlbnQtbWR7cGFkZGluZy10b3A6IDE2cHg7fVxyXG5cclxuLnNoYXJlLWJ0bnstLWJhY2tncm91bmQ6IzI3YTY5YTstLWJhY2tncm91bmQtYWN0aXZhdGVkOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IzI3YTY5YTstLWJhY2tncm91bmQtaG92ZXI6IzI3YTY5YTstLWlvbi1jb2xvci1zaGFkZTojMjdhNjlhIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiMyN2E2OWEhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2U6cmdiYSgwLCAwLCAwLCAwLjM1KSFpbXBvcnRhbnR9XHJcblxyXG4ucHJvZmlsZV90YWJzIGlvbi1zZWdtZW50IHNwYW57dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7fVxyXG5pb24tY2FyZC5pb3MgaW9uLWNhcmQtY29udGVudHsgZm9udC13ZWlnaHQ6IDMwMDsgZm9udC1zaXplOiAwLjg1cmVtO31cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQuaW9ze3BhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7fVxyXG5pb24tY2FyZC5pb3N7bWFyZ2luLXRvcDogMTBweDttYXJnaW4tYm90dG9tOiAxMHB4O31cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/profile/user-profile-view/user-profile-view.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/profile/user-profile-view/user-profile-view.page.ts ***!
    \*********************************************************************/

  /*! exports provided: UserProfileViewPage */

  /***/
  function srcAppProfileUserProfileViewUserProfileViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileViewPage", function () {
      return UserProfileViewPage;
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


    var _user_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-profile-view/report-popup/report-popup.component */
    "./src/app/profile/user-profile-view/report-popup/report-popup.component.ts");
    /* harmony import */


    var _user_profile_view_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-profile-view/share-modal/share-modal.component */
    "./src/app/profile/user-profile-view/share-modal/share-modal.component.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-followers/user-followers.component */
    "./src/app/profile/user-profile-view/user-followers/user-followers.component.ts");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../chats/chat-rooms/chat-rooms.component */
    "./src/app/chats/chat-rooms/chat-rooms.component.ts");

    var UserProfileViewPage = /*#__PURE__*/function () {
      function UserProfileViewPage(popoverController, commonService, router, navCtrl, peopleView, actRoute, chatService) {
        _classCallCheck(this, UserProfileViewPage);

        this.popoverController = popoverController;
        this.commonService = commonService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.peopleView = peopleView;
        this.actRoute = actRoute;
        this.chatService = chatService;
        this.follow = true;
        this.bannerDefaultImage = './../../../assets/images/editcoverpic.png';
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].profilePic;
        this.backgroundPicUrl = _config_config__WEBPACK_IMPORTED_MODULE_10__["Config"].backgroundPic;
      }

      _createClass(UserProfileViewPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.userId = this.userData.id;

          if (this.consultID == this.userData.id) {
            this.router.navigate(["/tabs/user-profile"]);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRoute.paramMap.subscribe(function (params) {
            _this.consultID = params.get('userData');
          });
          this.peopleView.getUserData({
            'userId': this.consultID
          }).subscribe(function (data) {
            console.log(data);
            _this.profileData = data;
          });
          this.peopleView.getFolloFollowingResult({
            'profileId': this.consultID
          }).subscribe(function (data) {
            _this.followStatus = data.status;
            console.log(data.status + ' -status');
          });
          this.peopleView.getBlockStatus({
            'blockUserId': this.consultID
          }).subscribe(function (data) {
            if (data.statusDetails.block_status == 1) {
              _this.block = true;
            } else {
              _this.block = false;
            }
          });
        }
      }, {
        key: "followUp",
        value: function followUp(followStatus) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var status;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //console.log(followStatus + ' -ddd');
                    if (followStatus == 'Unfollow') {
                      status = 'true';
                    } else {
                      status = 'false';
                    }

                    this.commonService.presentLoader();
                    this.peopleView.followUpPeople({
                      'uid': this.userId,
                      'followUpId': this.consultID,
                      'status': status
                    }).subscribe(function (data) {
                      _this2.commonService.dismissLoader();

                      if (data.followStatus == 'false') {
                        _this2.followStatus = 'Unfollow';

                        _this2.commonService.presentToast('Successfully Followed !');
                      } else if (data.followStatus == 'true' && data.followResult == '1') {
                        _this2.followStatus = 'Followback';

                        _this2.commonService.presentToast('Successfully UnFollowed !');
                      } else {
                        _this2.followStatus = 'Follow';

                        _this2.commonService.presentToast('Successfully UnFollowed !');
                      }

                      console.log('ss- ' + _this2.followStatus);
                      console.log('data.followStatus - ' + data.followStatus);
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "messagePopup",
        value: function messagePopup(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.commonService.presentLoader();
                    this.chatService.checkChatUser({
                      'id': this.consultID
                    }).subscribe(function (data) {
                      if (data.length > 0) {
                        _this3.commonService.dismissLoader();

                        var chatRoom = data[0].chatroom.room;
                        var chatReceiverId = data[0].receiverID;
                        var chatSenderId = data[0].senderID;
                        var chatType = data[0].type;
                        var roomId = data[0].id;
                        var request_id = data[0].chatroom.request_id;

                        _this3.commonService.dismissLoader();

                        var fileData = {
                          chatType: parseInt(chatType),
                          room: chatRoom,
                          receiverId: parseInt(chatReceiverId),
                          requestId: parseInt(request_id)
                        };

                        _this3.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomsComponent"], 'fullModal', fileData);
                      } else {
                        _this3.commonService.dismissLoader(); // chat_type = 1:consultant,2:user,3:program


                        _this3.router.navigate(["/first-message/" + _this3.consultID + "/2"]);
                      }
                    }, function (err) {
                      _this3.commonService.presentToast("Couldnt load data, Something went wrong.");

                      _this3.commonService.dismissLoader();
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "reportPopup",
        value: function reportPopup(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _user_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_2__["ReportPopupComponent"],
                      event: ev,
                      componentProps: {
                        page: 'Login'
                      },
                      cssClass: 'popover_class'
                    });

                  case 2:
                    popover = _context3.sent;
                    _context3.next = 5;
                    return popover.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openModal",
        value: function openModal() {
          this.commonService.presentModal(_user_profile_view_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_3__["ShareModalComponent"], 'fullModal', '');
        }
      }, {
        key: "userFollowers",
        value: function userFollowers() {
          this.commonService.presentModal(_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_5__["UserFollowersComponent"], 'fullModal', {
            'userId': this.consultID
          });
        }
      }, {
        key: "blockUser",
        value: function blockUser(event) {
          var _this4 = this;

          this.commonService.presentLoader();
          this.peopleView.blockuser({
            'blockUserId': this.consultID,
            'blocked': event
          }).subscribe(function (data) {
            _this4.commonService.dismissLoader();

            if (data.statusDetails.block_status != null) {
              _this4.commonService.presentToast('Blocked User');

              _this4.block = true;
            } else {
              _this4.commonService.presentToast('UnBlocked User');

              _this4.block = false;
            }

            (function (err) {
              _this4.commonService.dismissLoader();
            });
          });
        } //------------------ -- GO BACK  ------------

      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return UserProfileViewPage;
    }();

    UserProfileViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_6__["PeopleViewService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]
      }];
    };

    UserProfileViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/user-profile-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile-view.page.scss */
      "./src/app/profile/user-profile-view/user-profile-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_6__["PeopleViewService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]])], UserProfileViewPage);
    /***/
  }
}]);
//# sourceMappingURL=profile-user-profile-view-user-profile-view-module-es5.js.map