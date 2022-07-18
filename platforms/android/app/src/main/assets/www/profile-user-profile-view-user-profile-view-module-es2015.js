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
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea.form-control {\n  border-radius: 0;\n  height: auto;\n  border-width: 0 0 1px 0;\n  padding: 0;\n}\n\nion-textarea.form-control textarea {\n  padding: 0;\n}\n\n.btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF;\n}\n\n.btn-gray {\n  background: #999;\n}\n\n.btn-green {\n  background: #26a69a;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9tZXNzYWdlLXBvcHVwL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHByb2ZpbGVcXHVzZXItcHJvZmlsZS12aWV3XFxtZXNzYWdlLXBvcHVwXFxtZXNzYWdlLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS12aWV3L21lc3NhZ2UtcG9wdXAvbWVzc2FnZS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUEwQixnQkFBQTtFQUFpQixZQUFBO0VBQWEsdUJBQUE7RUFBd0IsVUFBQTtBQ0toRjs7QURKQTtFQUFtQyxVQUFBO0FDUW5DOztBRFBBO0VBQUssdUJBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsVUFBQTtFQUFVLG1DQUFBO0VBQW9DLGtCQUFBO0VBQW1CLHlCQUFBO0VBQTBCLGlDQUFBO0VBQWtDLCtCQUFBO0VBQWdDLGdCQUFBO0VBQWlCLDBCQUFBO0VBQTJCLHdCQUFBO0VBQXlCLFdBQUE7QUNzQmhSOztBRHJCQTtFQUFVLGdCQUFBO0FDeUJWOztBRHhCQTtFQUFXLG1CQUFBO0FDNEJYOztBRDNCQTtFQUFPLGdCQUFBO0FDK0JQIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9tZXNzYWdlLXBvcHVwL21lc3NhZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEuZm9ybS1jb250cm9se2JvcmRlci1yYWRpdXM6IDA7aGVpZ2h0OiBhdXRvO2JvcmRlci13aWR0aDogMCAwIDFweCAwO3BhZGRpbmc6IDA7fVxyXG5pb24tdGV4dGFyZWEuZm9ybS1jb250cm9sIHRleHRhcmVhe3BhZGRpbmc6IDA7fVxyXG4uYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICNmZmZmZmY7LS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7LS1jb2xvci1mb2N1c2VkOiAjZmZmZmZmO2NvbG9yOiAjRkZGO31cclxuLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4uYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9IiwiaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi10ZXh0YXJlYS5mb3JtLWNvbnRyb2wgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5idG4tZ3JheSB7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG59XG5cbi5idG4tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMjZhNjlhO1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF;\n}\n\n.btn-gray {\n  background: #999;\n}\n\n.btn-green {\n  background: #26a69a;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcdXNlci1wcm9maWxlLXZpZXdcXHJlcG9ydC1wb3B1cFxccmVwb3J0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS12aWV3L3JlcG9ydC1wb3B1cC9yZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyx1QkFBQTtFQUF3QixnQkFBQTtFQUFpQixVQUFBO0VBQVUsbUNBQUE7RUFBb0Msa0JBQUE7RUFBbUIseUJBQUE7RUFBMEIsaUNBQUE7RUFBa0MsK0JBQUE7RUFBZ0MsZ0JBQUE7RUFBaUIsMEJBQUE7RUFBMkIsd0JBQUE7RUFBeUIsV0FBQTtBQ2FoUjs7QURaQTtFQUFVLGdCQUFBO0FDZ0JWOztBRGZBO0VBQVcsbUJBQUE7QUNtQlg7O0FEbEJBO0VBQU8sZ0JBQUE7QUNzQlAiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS12aWV3L3JlcG9ydC1wb3B1cC9yZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICNmZmZmZmY7LS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7LS1jb2xvci1mb2N1c2VkOiAjZmZmZmZmO2NvbG9yOiAjRkZGO31cclxuLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4uYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9IiwiLmJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYnRuLWdyYXkge1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xufVxuXG4uYnRuLWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzI2YTY5YTtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".user-profile-bg {\n  height: 185px;\n  background: url('demo3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 15px;\n}\n\n.profile-content {\n  position: relative;\n  top: -50px;\n  padding-top: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.profile-content a {\n  color: #777777;\n  font-size: 0.85rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.profile-content ion-text {\n  position: relative;\n  top: 35px;\n}\n\n.user-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: 0px 0px 15px 0px rgba(82, 82, 82, 0.55);\n  margin-bottom: 10px;\n  position: absolute;\n  top: 0;\n}\n\n.user-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(39, 166, 154, 0.07);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-icon img {\n  width: 16px;\n  height: 16px;\n}\n\nion-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF;\n  display: flex;\n  align-items: center;\n}\n\nion-card ion-card-header {\n  padding-right: 0;\n}\n\nion-card-header + .card-content-md {\n  padding-top: 16px;\n}\n\n.share-btn {\n  --background:#27a69a;\n  --background-activated:#27a69a;\n  --background-focused:#27a69a;\n  --background-hover:#27a69a;\n  --ion-color-shade:#27a69a!important;\n  --ion-color-tint:#27a69a!important;\n  --ion-color-base:rgba(0, 0, 0, 0.35)!important;\n}\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize;\n}\n\nion-card.ios ion-card-content {\n  font-weight: 300;\n  font-size: 0.85rem;\n}\n\nion-card-content.ios {\n  padding-top: 20px !important;\n}\n\nion-card.ios {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFx1c2VyLXByb2ZpbGUtdmlld1xcdXNlci1wcm9maWxlLXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS12aWV3L3VzZXItcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQixhQUFBO0VBQWMsc0NBQUE7RUFBNEQsc0JBQUE7RUFBdUIsMkJBQUE7RUFBNEIsZUFBQTtBQ005STs7QURMQTtFQUFpQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsaUJBQUE7RUFBaUIsYUFBQTtFQUFjLHVCQUFBO0VBQXdCLG1CQUFBO0VBQW9CLHNCQUFBO0VBQXVCLGtCQUFBO0FDZ0JqSjs7QURmQTtFQUFtQixjQUFBO0VBQWUsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLHVCQUFBO0VBQXdCLG1CQUFBO0FDdUIzRjs7QUR0QkE7RUFBMEIsa0JBQUE7RUFBbUIsU0FBQTtBQzJCN0M7O0FEMUJBO0VBQVUsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixvQkFBQTtLQUFBLGlCQUFBO0VBQWtCLDBCQUFBO0tBQUEsdUJBQUE7RUFBNkksbURBQUE7RUFBb0QsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsTUFBQTtBQ3dDaFQ7O0FEdkNBO0VBQVcsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixvQ0FBQTtFQUFxQyxhQUFBO0VBQWMsdUJBQUE7RUFBd0IsbUJBQUE7QUNpRGxJOztBRGhEQTtFQUFlLFdBQUE7RUFBWSxZQUFBO0FDcUQzQjs7QURwREE7RUFBUywrQ0FBQTtFQUFnRCxnQkFBQTtFQUFpQixhQUFBO0VBQWMsbUJBQUE7QUMyRHhGOztBRDFEQTtFQUF5QixnQkFBQTtBQzhEekI7O0FEN0RBO0VBQWlDLGlCQUFBO0FDaUVqQzs7QUQvREE7RUFBVyxvQkFBQTtFQUFxQiw4QkFBQTtFQUErQiw0QkFBQTtFQUE2QiwwQkFBQTtFQUEyQixtQ0FBQTtFQUFvQyxrQ0FBQTtFQUFtQyw4Q0FBQTtBQ3lFOUw7O0FEdkVBO0VBQStCLDBCQUFBO0FDMkUvQjs7QUQxRUE7RUFBK0IsZ0JBQUE7RUFBa0Isa0JBQUE7QUMrRWpEOztBRDdFQTtFQUFxQiw0QkFBQTtBQ2lGckI7O0FEaEZBO0VBQWEsZ0JBQUE7RUFBaUIsbUJBQUE7QUNxRjlCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy91c2VyLXByb2ZpbGUtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wcm9maWxlLWJne2hlaWdodDogMTg1cHg7YmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVtbzMuanBnKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7cGFkZGluZzogMCAxNXB4O31cclxuLnByb2ZpbGUtY29udGVudHtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtNTBweDtwYWRkaW5nLXRvcDo2MHB4O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmbGV4LWRpcmVjdGlvbjogY29sdW1uO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5wcm9maWxlLWNvbnRlbnQgYXtjb2xvcjogIzc3Nzc3Nztmb250LXNpemU6IDAuODVyZW07ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO31cclxuLnByb2ZpbGUtY29udGVudCBpb24tdGV4dHtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAzNXB4O31cclxuLnVzZXItaW1ne3dpZHRoOiA5MHB4O2hlaWdodDogOTBweDtib3JkZXItcmFkaXVzOiA1MCU7b2JqZWN0LWZpdDogY292ZXI7b2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7Ym94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO21hcmdpbi1ib3R0b206IDEwcHg7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDt9XHJcbi51c2VyLWljb257d2lkdGg6IDM0cHg7aGVpZ2h0OiAzNHB4O2JvcmRlci1yYWRpdXM6IDUwJTtiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNjYsIDE1NCwgMC4wNyk7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO31cclxuLnVzZXItaWNvbiBpbWd7d2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O31cclxuaW9uLWNhcmR7Ym94LXNoYWRvdzogMHB4IDhweCAyNHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7YmFja2dyb3VuZDogI0ZGRjtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXJ7cGFkZGluZy1yaWdodDogMDt9XHJcbmlvbi1jYXJkLWhlYWRlcisuY2FyZC1jb250ZW50LW1ke3BhZGRpbmctdG9wOiAxNnB4O31cclxuXHJcbi5zaGFyZS1idG57LS1iYWNrZ3JvdW5kOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojMjdhNjlhOy0tYmFja2dyb3VuZC1mb2N1c2VkOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWhvdmVyOiMyN2E2OWE7LS1pb24tY29sb3Itc2hhZGU6IzI3YTY5YSFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDojMjdhNjlhIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlOnJnYmEoMCwgMCwgMCwgMC4zNSkhaW1wb3J0YW50fVxyXG5cclxuLnByb2ZpbGVfdGFicyBpb24tc2VnbWVudCBzcGFue3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO31cclxuaW9uLWNhcmQuaW9zIGlvbi1jYXJkLWNvbnRlbnR7IGZvbnQtd2VpZ2h0OiAzMDA7IGZvbnQtc2l6ZTogMC44NXJlbTt9XHJcblxyXG5pb24tY2FyZC1jb250ZW50Lmlvc3twYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O31cclxuaW9uLWNhcmQuaW9ze21hcmdpbi10b3A6IDEwcHg7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbiIsIi51c2VyLXByb2ZpbGUtYmcge1xuICBoZWlnaHQ6IDE4NXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kZW1vMy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5wcm9maWxlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1jb250ZW50IGEge1xuICBjb2xvcjogIzc3Nzc3NztcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtY29udGVudCBpb24tdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzNXB4O1xufVxuXG4udXNlci1pbWcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4udXNlci1pY29uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNjYsIDE1NCwgMC4wNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXNlci1pY29uIGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyNHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbmlvbi1jYXJkLWhlYWRlciArIC5jYXJkLWNvbnRlbnQtbWQge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLnNoYXJlLWJ0biB7XG4gIC0tYmFja2dyb3VuZDojMjdhNjlhO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiMyN2E2OWE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiMyN2E2OWE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjojMjdhNjlhO1xuICAtLWlvbi1jb2xvci1zaGFkZTojMjdhNjlhIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDojMjdhNjlhIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTpyZ2JhKDAsIDAsIDAsIDAuMzUpIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGVfdGFicyBpb24tc2VnbWVudCBzcGFuIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1jYXJkLmlvcyBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG5pb24tY2FyZC1jb250ZW50LmlvcyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLmlvcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

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