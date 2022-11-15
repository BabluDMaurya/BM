(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-user-profile-view-user-profile-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/message-popup/message-popup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/message-popup/message-popup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-label>Send a Message</ion-label>\r\n  <ion-textarea class=\"form-control\"></ion-textarea>\r\n  <div class=\"ion-text-end mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green\" (click)=\"eventFromPopover()()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/report-popup/report-popup.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/report-popup/report-popup.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-label>Report This</ion-label>\r\n  <div class=\"ion-text-end mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green\" (click)=\"eventFromPopover()()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/user-profile-view.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/user-profile-view.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">    \r\n    <ion-item>      \r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item> \r\n    <ion-item slot=\"center\">\r\n      <ion-label *ngIf=\"!profileData?.userData?.bios?.display_name\">{{profileData?.userData?.user_name}}</ion-label>\r\n      <ion-label *ngIf=\"profileData?.userData?.bios?.display_name\">{{profileData?.userData?.bios?.display_name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <a (click)=\"userFollowers()\" class=\"follow-people\" slot=\"end\">\r\n        <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n      </a>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header> \r\n<ion-content class=\"main_content\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div class=\"sec-banner \"> \r\n          <div class=\"top-banner\"> \r\n            <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"backgroundPicUrl+profileData?.userData?.bios?.profile_background_image\">           \r\n          </div>\r\n        </div>\r\n        <div class=\"profile-content\">\r\n          <img class=\"user-img\" [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\">           \r\n          <ion-text>\r\n            <h6 class=\"ion-no-margin\" *ngIf=\"profileData?.userData?.user_name\">{{profileData?.userData?.user_name}}</h6>            \r\n          </ion-text>\r\n          <ion-fab horizontal=\"end\" vertical=\"center\" slot=\"fixed\">\r\n            <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"openModal()\">\r\n              <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-list lines=\"none\" class=\"top-list\">\r\n          <ion-item (click)=\"followUp(followStatus)\" id=\"followStatus\">\r\n            <img [src]=\"followStatus == 'UNFOLLOW' ? '../../assets/images/unfollow.svg':'../../assets/images/follow.svg'\" />\r\n            <ion-label>{{followStatus}}</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"messagePopup()\">\r\n            <img src=\"../../assets/images/comment.svg\" />\r\n            <ion-label>Chat</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"reportPopup()\">\r\n            <img src=\"../../assets/images/alert.svg\" />\r\n            <ion-label>Report</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"blockUser(block)\">\r\n            <img src=\"../../assets/images/blocks.svg\" />\r\n            <ion-label>{{ block ?'Unblock':'Block' }}</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/user.svg\" />\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.userData?.bios?.about_me\">{{profileData?.userData?.bios?.about_me}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.userData?.bios?.about_me\">Bio Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/like.svg\" />\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.speciality?.primaryName?.name\">{{profileData?.speciality?.primaryName?.name}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.speciality?.primaryName?.name\">Primary Interest Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/global.svg\" />\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.lang?.lang\">{{profileData?.lang?.lang}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.lang?.lang\">Languages Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <div class=\"user-icon\">\r\n              <img src=\"../../assets/images/placeholder.svg\" />\r\n              </div>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text *ngIf=\"profileData?.address?.country?.name\">{{profileData?.address?.city?.name}}{{profileData?.address?.state?.name }},{{profileData?.address?.country?.name}}</ion-text>\r\n            <ion-text *ngIf=\"!profileData?.address?.country?.name\">Location Not Mentioned</ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/profile/user-profile-view/message-popup/message-popup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/user-profile-view/message-popup/message-popup.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea.form-control {\n  border-radius: 0;\n  height: auto;\n  border-width: 0 0 1px 0;\n  padding: 0;\n}\n\nion-textarea.form-control textarea {\n  padding: 0;\n}\n\n.btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF;\n}\n\n.btn-gray {\n  background: #999;\n}\n\n.btn-green {\n  background: #26a69a;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9tZXNzYWdlLXBvcHVwL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFx1c2VyLXByb2ZpbGUtdmlld1xcbWVzc2FnZS1wb3B1cFxcbWVzc2FnZS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9tZXNzYWdlLXBvcHVwL21lc3NhZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBMEIsZ0JBQUE7RUFBaUIsWUFBQTtFQUFhLHVCQUFBO0VBQXdCLFVBQUE7QUNLaEY7O0FESkE7RUFBbUMsVUFBQTtBQ1FuQzs7QURQQTtFQUFLLHVCQUFBO0VBQXdCLGdCQUFBO0VBQWlCLFVBQUE7RUFBVSxtQ0FBQTtFQUFvQyxrQkFBQTtFQUFtQix5QkFBQTtFQUEwQixpQ0FBQTtFQUFrQywrQkFBQTtFQUFnQyxnQkFBQTtFQUFpQiwwQkFBQTtFQUEyQix3QkFBQTtFQUF5QixXQUFBO0FDc0JoUjs7QURyQkE7RUFBVSxnQkFBQTtBQ3lCVjs7QUR4QkE7RUFBVyxtQkFBQTtBQzRCWDs7QUQzQkE7RUFBTyxnQkFBQTtBQytCUCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlLXZpZXcvbWVzc2FnZS1wb3B1cC9tZXNzYWdlLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbHtib3JkZXItcmFkaXVzOiAwO2hlaWdodDogYXV0bztib3JkZXItd2lkdGg6IDAgMCAxcHggMDtwYWRkaW5nOiAwO31cclxuaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB0ZXh0YXJlYXtwYWRkaW5nOiAwO31cclxuLmJ0bntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtib3gtc2hhZG93OiBub25lO3BhZGRpbmc6MDstLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDstLWJveC1zaGFkb3c6IG5vbmU7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDstLWNvbG9yOiAjZmZmZmZmOy0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmOy0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtjb2xvcjogI0ZGRjt9XHJcbi5idG4tZ3JheXtiYWNrZ3JvdW5kOiAjOTk5O31cclxuLmJ0bi1ncmVlbntiYWNrZ3JvdW5kOiAjMjZhNjlhO31cclxuLm10LTEwe21hcmdpbi10b3A6IDEwcHg7fSIsImlvbi10ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tdGV4dGFyZWEuZm9ybS1jb250cm9sIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYnRuLWdyYXkge1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xufVxuXG4uYnRuLWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzI2YTY5YTtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/user-profile-view/message-popup/message-popup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/user-profile-view/message-popup/message-popup.component.ts ***!
  \************************************************************************************/
/*! exports provided: MessagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePopupComponent", function() { return MessagePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let MessagePopupComponent = class MessagePopupComponent {
    constructor(events, navParams, popoverController) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.page = this.navParams.get('data');
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
MessagePopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
MessagePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/message-popup/message-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-popup.component.scss */ "./src/app/profile/user-profile-view/message-popup/message-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], MessagePopupComponent);



/***/ }),

/***/ "./src/app/profile/user-profile-view/report-popup/report-popup.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/profile/user-profile-view/report-popup/report-popup.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF;\n}\n\n.btn-gray {\n  background: #999;\n}\n\n.btn-green {\n  background: #26a69a;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2ZpbGVcXHVzZXItcHJvZmlsZS12aWV3XFxyZXBvcnQtcG9wdXBcXHJlcG9ydC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvcmVwb3J0LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUssdUJBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsVUFBQTtFQUFVLG1DQUFBO0VBQW9DLGtCQUFBO0VBQW1CLHlCQUFBO0VBQTBCLGlDQUFBO0VBQWtDLCtCQUFBO0VBQWdDLGdCQUFBO0VBQWlCLDBCQUFBO0VBQTJCLHdCQUFBO0VBQXlCLFdBQUE7QUNhaFI7O0FEWkE7RUFBVSxnQkFBQTtBQ2dCVjs7QURmQTtFQUFXLG1CQUFBO0FDbUJYOztBRGxCQTtFQUFPLGdCQUFBO0FDc0JQIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvcmVwb3J0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtib3gtc2hhZG93OiBub25lO3BhZGRpbmc6MDstLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDstLWJveC1zaGFkb3c6IG5vbmU7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDstLWNvbG9yOiAjZmZmZmZmOy0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmOy0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtjb2xvcjogI0ZGRjt9XHJcbi5idG4tZ3JheXtiYWNrZ3JvdW5kOiAjOTk5O31cclxuLmJ0bi1ncmVlbntiYWNrZ3JvdW5kOiAjMjZhNjlhO31cclxuLm10LTEwe21hcmdpbi10b3A6IDEwcHg7fSIsIi5idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmZmZmO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmJ0bi1ncmF5IHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbn1cblxuLmJ0bi1ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMyNmE2OWE7XG59XG5cbi5tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/user-profile-view/report-popup/report-popup.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/user-profile-view/report-popup/report-popup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReportPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPopupComponent", function() { return ReportPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ReportPopupComponent = class ReportPopupComponent {
    constructor(events, navParams, popoverController) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.page = this.navParams.get('data');
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
ReportPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ReportPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/report-popup/report-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-popup.component.scss */ "./src/app/profile/user-profile-view/report-popup/report-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ReportPopupComponent);



/***/ }),

/***/ "./src/app/profile/user-profile-view/user-profile-view-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/profile/user-profile-view/user-profile-view-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UserProfileViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileViewPageRoutingModule", function() { return UserProfileViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_profile_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile-view.page */ "./src/app/profile/user-profile-view/user-profile-view.page.ts");




const routes = [
    {
        path: '',
        component: _user_profile_view_page__WEBPACK_IMPORTED_MODULE_3__["UserProfileViewPage"]
    }
];
let UserProfileViewPageRoutingModule = class UserProfileViewPageRoutingModule {
};
UserProfileViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserProfileViewPageRoutingModule);



/***/ }),

/***/ "./src/app/profile/user-profile-view/user-profile-view.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/profile/user-profile-view/user-profile-view.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserProfileViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileViewPageModule", function() { return UserProfileViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile-view-routing.module */ "./src/app/profile/user-profile-view/user-profile-view-routing.module.ts");
/* harmony import */ var _user_profile_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile-view.page */ "./src/app/profile/user-profile-view/user-profile-view.page.ts");
/* harmony import */ var _message_popup_message_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message-popup/message-popup.component */ "./src/app/profile/user-profile-view/message-popup/message-popup.component.ts");
/* harmony import */ var _report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./report-popup/report-popup.component */ "./src/app/profile/user-profile-view/report-popup/report-popup.component.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");










let UserProfileViewPageModule = class UserProfileViewPageModule {
};
UserProfileViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfileViewPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageModule"]
        ],
        declarations: [_user_profile_view_page__WEBPACK_IMPORTED_MODULE_6__["UserProfileViewPage"], _message_popup_message_popup_component__WEBPACK_IMPORTED_MODULE_7__["MessagePopupComponent"], _report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
        entryComponents: [_message_popup_message_popup_component__WEBPACK_IMPORTED_MODULE_7__["MessagePopupComponent"], _report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
    })
], UserProfileViewPageModule);



/***/ }),

/***/ "./src/app/profile/user-profile-view/user-profile-view.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/profile/user-profile-view/user-profile-view.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-profile-bg {\n  height: 185px;\n  background: url('demo3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 15px;\n}\n\n.profile-content {\n  position: relative;\n  top: -50px;\n  padding-top: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.profile-content a {\n  color: #777777;\n  font-size: 0.85rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.profile-content ion-text {\n  position: relative;\n  top: 35px;\n}\n\n.user-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: 0px 0px 15px 0px rgba(82, 82, 82, 0.55);\n  margin-bottom: 10px;\n  position: absolute;\n  top: 0;\n}\n\n.user-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(39, 166, 154, 0.07);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-icon img {\n  width: 16px;\n  height: 16px;\n}\n\nion-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF;\n  display: flex;\n  align-items: center;\n}\n\nion-card ion-card-header {\n  padding-right: 0;\n}\n\nion-card-header + .card-content-md {\n  padding-top: 16px;\n}\n\n.share-btn {\n  --background:#27a69a;\n  --background-activated:#27a69a;\n  --background-focused:#27a69a;\n  --background-hover:#27a69a;\n  --ion-color-shade:#27a69a!important;\n  --ion-color-tint:#27a69a!important;\n  --ion-color-base:rgba(0, 0, 0, 0.35)!important;\n}\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize;\n}\n\nion-card.ios ion-card-content {\n  font-weight: 300;\n  font-size: 0.85rem;\n}\n\nion-card-content.ios {\n  padding-top: 20px !important;\n}\n\nion-card.ios {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcdXNlci1wcm9maWxlLXZpZXdcXHVzZXItcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy91c2VyLXByb2ZpbGUtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsYUFBQTtFQUFjLHNDQUFBO0VBQTRELHNCQUFBO0VBQXVCLDJCQUFBO0VBQTRCLGVBQUE7QUNNOUk7O0FETEE7RUFBaUIsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLGlCQUFBO0VBQWlCLGFBQUE7RUFBYyx1QkFBQTtFQUF3QixtQkFBQTtFQUFvQixzQkFBQTtFQUF1QixrQkFBQTtBQ2dCako7O0FEZkE7RUFBbUIsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyx1QkFBQTtFQUF3QixtQkFBQTtBQ3VCM0Y7O0FEdEJBO0VBQTBCLGtCQUFBO0VBQW1CLFNBQUE7QUMyQjdDOztBRDFCQTtFQUFVLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsb0JBQUE7S0FBQSxpQkFBQTtFQUFrQiwwQkFBQTtLQUFBLHVCQUFBO0VBQTZJLG1EQUFBO0VBQW9ELG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLE1BQUE7QUN3Q2hUOztBRHZDQTtFQUFXLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsb0NBQUE7RUFBcUMsYUFBQTtFQUFjLHVCQUFBO0VBQXdCLG1CQUFBO0FDaURsSTs7QURoREE7RUFBZSxXQUFBO0VBQVksWUFBQTtBQ3FEM0I7O0FEcERBO0VBQVMsK0NBQUE7RUFBZ0QsZ0JBQUE7RUFBaUIsYUFBQTtFQUFjLG1CQUFBO0FDMkR4Rjs7QUQxREE7RUFBeUIsZ0JBQUE7QUM4RHpCOztBRDdEQTtFQUFpQyxpQkFBQTtBQ2lFakM7O0FEL0RBO0VBQVcsb0JBQUE7RUFBcUIsOEJBQUE7RUFBK0IsNEJBQUE7RUFBNkIsMEJBQUE7RUFBMkIsbUNBQUE7RUFBb0Msa0NBQUE7RUFBbUMsOENBQUE7QUN5RTlMOztBRHZFQTtFQUErQiwwQkFBQTtBQzJFL0I7O0FEMUVBO0VBQStCLGdCQUFBO0VBQWtCLGtCQUFBO0FDK0VqRDs7QUQ3RUE7RUFBcUIsNEJBQUE7QUNpRnJCOztBRGhGQTtFQUFhLGdCQUFBO0VBQWlCLG1CQUFBO0FDcUY5QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlLXZpZXcvdXNlci1wcm9maWxlLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZS1iZ3toZWlnaHQ6IDE4NXB4O2JhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RlbW8zLmpwZykgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO3BhZGRpbmc6IDAgMTVweDt9XHJcbi5wcm9maWxlLWNvbnRlbnR7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTUwcHg7cGFkZGluZy10b3A6NjBweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4ucHJvZmlsZS1jb250ZW50IGF7Y29sb3I6ICM3Nzc3Nzc7Zm9udC1zaXplOiAwLjg1cmVtO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi5wcm9maWxlLWNvbnRlbnQgaW9uLXRleHR7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogMzVweDt9XHJcbi51c2VyLWltZ3t3aWR0aDogOTBweDtoZWlnaHQ6IDkwcHg7Ym9yZGVyLXJhZGl1czogNTAlO29iamVjdC1maXQ6IGNvdmVyO29iamVjdC1wb3NpdGlvbjogY2VudGVyOy13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpOy1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO2JveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTttYXJnaW4tYm90dG9tOiAxMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7fVxyXG4udXNlci1pY29ue3dpZHRoOiAzNHB4O2hlaWdodDogMzRweDtib3JkZXItcmFkaXVzOiA1MCU7YmFja2dyb3VuZDogcmdiYSgzOSwgMTY2LCAxNTQsIDAuMDcpO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi51c2VyLWljb24gaW1ne3dpZHRoOiAxNnB4O2hlaWdodDogMTZweDt9XHJcbmlvbi1jYXJke2JveC1zaGFkb3c6IDBweCA4cHggMjRweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO2JhY2tncm91bmQ6ICNGRkY7ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO31cclxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVye3BhZGRpbmctcmlnaHQ6IDA7fVxyXG5pb24tY2FyZC1oZWFkZXIrLmNhcmQtY29udGVudC1tZHtwYWRkaW5nLXRvcDogMTZweDt9XHJcblxyXG4uc2hhcmUtYnRuey0tYmFja2dyb3VuZDojMjdhNjlhOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzI3YTY5YTstLWJhY2tncm91bmQtZm9jdXNlZDojMjdhNjlhOy0tYmFja2dyb3VuZC1ob3ZlcjojMjdhNjlhOy0taW9uLWNvbG9yLXNoYWRlOiMyN2E2OWEhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IzI3YTY5YSFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZTpyZ2JhKDAsIDAsIDAsIDAuMzUpIWltcG9ydGFudH1cclxuXHJcbi5wcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQgc3Bhbnt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTt9XHJcbmlvbi1jYXJkLmlvcyBpb24tY2FyZC1jb250ZW50eyBmb250LXdlaWdodDogMzAwOyBmb250LXNpemU6IDAuODVyZW07fVxyXG5cclxuaW9uLWNhcmQtY29udGVudC5pb3N7cGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDt9XHJcbmlvbi1jYXJkLmlvc3ttYXJnaW4tdG9wOiAxMHB4O21hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4iLCIudXNlci1wcm9maWxlLWJnIHtcbiAgaGVpZ2h0OiAxODVweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVtbzMuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ucHJvZmlsZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtY29udGVudCBhIHtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWNvbnRlbnQgaW9uLXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzVweDtcbn1cblxuLnVzZXItaW1nIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLnVzZXItaWNvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTY2LCAxNTQsIDAuMDcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXItaWNvbiBpbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjRweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5pb24tY2FyZC1oZWFkZXIgKyAuY2FyZC1jb250ZW50LW1kIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5zaGFyZS1idG4ge1xuICAtLWJhY2tncm91bmQ6IzI3YTY5YTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojMjdhNjlhO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDojMjdhNjlhO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IzI3YTY5YTtcbiAgLS1pb24tY29sb3Itc2hhZGU6IzI3YTY5YSFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IzI3YTY5YSFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6cmdiYSgwLCAwLCAwLCAwLjM1KSFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tY2FyZC5pb3MgaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuaW9uLWNhcmQtY29udGVudC5pb3Mge1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC5pb3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/user-profile-view/user-profile-view.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/profile/user-profile-view/user-profile-view.page.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfileViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileViewPage", function() { return UserProfileViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile-view/report-popup/report-popup.component */ "./src/app/profile/user-profile-view/report-popup/report-popup.component.ts");
/* harmony import */ var _user_profile_view_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile-view/share-modal/share-modal.component */ "./src/app/profile/user-profile-view/share-modal/share-modal.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-followers/user-followers.component */ "./src/app/profile/user-profile-view/user-followers/user-followers.component.ts");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../chats/chat-rooms/chat-rooms.component */ "./src/app/chats/chat-rooms/chat-rooms.component.ts");












let UserProfileViewPage = class UserProfileViewPage {
    constructor(popoverController, commonService, router, navCtrl, peopleView, actRoute, chatService) {
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
    ionViewWillEnter() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.userData.id;
        if (this.consultID == this.userData.id) {
            this.router.navigate(["/tabs/user-profile"]);
        }
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.consultID = params.get('userData');
        });
        this.peopleView.getUserData({ 'userId': this.consultID }).subscribe((data) => {
            console.log(data);
            this.profileData = data;
        });
        this.peopleView.getFolloFollowingResult({ 'profileId': this.consultID }).subscribe((data) => {
            this.followStatus = data.status;
            console.log(data.status + ' -status');
        });
        this.peopleView.getBlockStatus({ 'blockUserId': this.consultID }).subscribe((data) => {
            if (data.statusDetails.block_status == 1) {
                this.block = true;
            }
            else {
                this.block = false;
            }
        });
    }
    followUp(followStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(followStatus + ' -ddd');
            if (followStatus == 'Unfollow') {
                var status = 'true';
            }
            else {
                var status = 'false';
            }
            this.commonService.presentLoader();
            this.peopleView.followUpPeople({ 'uid': this.userId, 'followUpId': this.consultID, 'status': status }).subscribe((data) => {
                this.commonService.dismissLoader();
                if (data.followStatus == 'false') {
                    this.followStatus = 'Unfollow';
                    this.commonService.presentToast('Successfully Followed !');
                }
                else if (data.followStatus == 'true' && data.followResult == '1') {
                    this.followStatus = 'Followback';
                    this.commonService.presentToast('Successfully UnFollowed !');
                }
                else {
                    this.followStatus = 'Follow';
                    this.commonService.presentToast('Successfully UnFollowed !');
                }
                console.log('ss- ' + this.followStatus);
                console.log('data.followStatus - ' + data.followStatus);
            });
        });
    }
    messagePopup(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonService.presentLoader();
            this.chatService.checkChatUser({ 'id': this.consultID }).subscribe((data) => {
                if (data.length > 0) {
                    this.commonService.dismissLoader();
                    var chatRoom = data[0].chatroom.room;
                    var chatReceiverId = data[0].receiverID;
                    var chatSenderId = data[0].senderID;
                    var chatType = data[0].type;
                    var roomId = data[0].id;
                    var request_id = data[0].chatroom.request_id;
                    this.commonService.dismissLoader();
                    var fileData = {
                        chatType: parseInt(chatType),
                        room: chatRoom,
                        receiverId: parseInt(chatReceiverId),
                        requestId: parseInt(request_id),
                    };
                    this.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomsComponent"], 'fullModal', fileData);
                }
                else {
                    this.commonService.dismissLoader();
                    // chat_type = 1:consultant,2:user,3:program
                    this.router.navigate(["/first-message/" + this.consultID + "/2"]);
                }
            }, err => {
                this.commonService.presentToast("Couldnt load data, Something went wrong.");
                this.commonService.dismissLoader();
            });
        });
    }
    reportPopup(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _user_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_2__["ReportPopupComponent"],
                event: ev,
                componentProps: { page: 'Login' },
                cssClass: 'popover_class',
            });
            return yield popover.present();
        });
    }
    openModal() {
        this.commonService.presentModal(_user_profile_view_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_3__["ShareModalComponent"], 'fullModal', '');
    }
    userFollowers() {
        this.commonService.presentModal(_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_5__["UserFollowersComponent"], 'fullModal', { 'userId': this.consultID });
    }
    blockUser(event) {
        this.commonService.presentLoader();
        this.peopleView.blockuser({ 'blockUserId': this.consultID, 'blocked': event }).subscribe(data => {
            this.commonService.dismissLoader();
            if (data.statusDetails.block_status != null) {
                this.commonService.presentToast('Blocked User');
                this.block = true;
            }
            else {
                this.commonService.presentToast('UnBlocked User');
                this.block = false;
            }
            err => {
                this.commonService.dismissLoader();
            };
        });
    }
    //------------------ -- GO BACK  ------------
    goBack() {
        this.navCtrl.back();
    }
};
UserProfileViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_6__["PeopleViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"] }
];
UserProfileViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/user-profile-view/user-profile-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile-view.page.scss */ "./src/app/profile/user-profile-view/user-profile-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_6__["PeopleViewService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]])
], UserProfileViewPage);



/***/ })

}]);
//# sourceMappingURL=profile-user-profile-view-user-profile-view-module-es2015.js.map