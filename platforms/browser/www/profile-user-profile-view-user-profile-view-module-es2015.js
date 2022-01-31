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
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea.form-control {\n  border-radius: 0;\n  height: auto;\n  border-width: 0 0 1px 0;\n  padding: 0; }\n\nion-textarea.form-control textarea {\n  padding: 0; }\n\n.btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF; }\n\n.btn-gray {\n  background: #999; }\n\n.btn-green {\n  background: #26a69a; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9tZXNzYWdlLXBvcHVwL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxccHJvZmlsZVxcdXNlci1wcm9maWxlLXZpZXdcXG1lc3NhZ2UtcG9wdXBcXG1lc3NhZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBMEIsZ0JBQWdCO0VBQUMsWUFBWTtFQUFDLHVCQUF1QjtFQUFDLFVBQVUsRUFBQTs7QUFDMUY7RUFBbUMsVUFBVSxFQUFBOztBQUM3QztFQUFLLHVCQUF1QjtFQUFDLGdCQUFnQjtFQUFDLFVBQVM7RUFBQyxtQ0FBdUI7RUFBYSxrQkFBYTtFQUFNLHlCQUFhO0VBQWEsaUNBQXFCO0VBQWEsK0JBQW1CO0VBQWEsZ0JBQVE7RUFBUywwQkFBa0I7RUFBUyx3QkFBZ0I7RUFBUyxXQUFXLEVBQUE7O0FBQzNSO0VBQVUsZ0JBQWdCLEVBQUE7O0FBQzFCO0VBQVcsbUJBQW1CLEVBQUE7O0FBQzlCO0VBQU8sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS12aWV3L21lc3NhZ2UtcG9wdXAvbWVzc2FnZS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0YXJlYS5mb3JtLWNvbnRyb2x7Ym9yZGVyLXJhZGl1czogMDtoZWlnaHQ6IGF1dG87Ym9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7cGFkZGluZzogMDt9XHJcbmlvbi10ZXh0YXJlYS5mb3JtLWNvbnRyb2wgdGV4dGFyZWF7cGFkZGluZzogMDt9XHJcbi5idG57YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzogbm9uZTtwYWRkaW5nOjA7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7LS1ib3gtc2hhZG93OiBub25lOy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7LS1jb2xvcjogI2ZmZmZmZjstLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjstLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7Y29sb3I6ICNGRkY7fVxyXG4uYnRuLWdyYXl7YmFja2dyb3VuZDogIzk5OTt9XHJcbi5idG4tZ3JlZW57YmFja2dyb3VuZDogIzI2YTY5YTt9XHJcbi5tdC0xMHttYXJnaW4tdG9wOiAxMHB4O30iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-focused: #ffffff;\n  color: #FFF; }\n\n.btn-gray {\n  background: #999; }\n\n.btn-green {\n  background: #26a69a; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxwcm9maWxlXFx1c2VyLXByb2ZpbGUtdmlld1xccmVwb3J0LXBvcHVwXFxyZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyx1QkFBdUI7RUFBQyxnQkFBZ0I7RUFBQyxVQUFTO0VBQUMsbUNBQXVCO0VBQWEsa0JBQWE7RUFBTSx5QkFBYTtFQUFhLGlDQUFxQjtFQUFhLCtCQUFtQjtFQUFhLGdCQUFRO0VBQVMsMEJBQWtCO0VBQVMsd0JBQWdCO0VBQVMsV0FBVyxFQUFBOztBQUMzUjtFQUFVLGdCQUFnQixFQUFBOztBQUMxQjtFQUFXLG1CQUFtQixFQUFBOztBQUM5QjtFQUFPLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvcmVwb3J0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtib3gtc2hhZG93OiBub25lO3BhZGRpbmc6MDstLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDstLWJveC1zaGFkb3c6IG5vbmU7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDstLWNvbG9yOiAjZmZmZmZmOy0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmOy0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtjb2xvcjogI0ZGRjt9XHJcbi5idG4tZ3JheXtiYWNrZ3JvdW5kOiAjOTk5O31cclxuLmJ0bi1ncmVlbntiYWNrZ3JvdW5kOiAjMjZhNjlhO31cclxuLm10LTEwe21hcmdpbi10b3A6IDEwcHg7fSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".user-profile-bg {\n  height: 185px;\n  background: url('demo3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 15px; }\n\n.profile-content {\n  position: relative;\n  top: -50px;\n  padding-top: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center; }\n\n.profile-content a {\n  color: #777777;\n  font-size: 0.85rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.profile-content ion-text {\n  position: relative;\n  top: 35px; }\n\n.user-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: 0px 0px 15px 0px rgba(82, 82, 82, 0.55);\n  margin-bottom: 10px;\n  position: absolute;\n  top: 0; }\n\n.user-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(39, 166, 154, 0.07);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.user-icon img {\n  width: 16px;\n  height: 16px; }\n\nion-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF;\n  display: flex;\n  align-items: center; }\n\nion-card ion-card-header {\n  padding-right: 0; }\n\nion-card-header + .card-content-md {\n  padding-top: 16px; }\n\n.share-btn {\n  --background:#27a69a;\n  --background-activated:#27a69a;\n  --background-focused:#27a69a;\n  --background-hover:#27a69a;\n  --ion-color-shade:#27a69a!important;\n  --ion-color-tint:#27a69a!important;\n  --ion-color-base:rgba(0, 0, 0, 0.35)!important; }\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize; }\n\nion-card.ios ion-card-content {\n  font-weight: 300;\n  font-size: 0.85rem; }\n\nion-card-content.ios {\n  padding-top: 20px !important; }\n\nion-card.ios {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZVxcQk0vc3JjXFxhcHBcXHByb2ZpbGVcXHVzZXItcHJvZmlsZS12aWV3XFx1c2VyLXByb2ZpbGUtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsYUFBYTtFQUFDLHNDQUEyRDtFQUFDLHNCQUFzQjtFQUFDLDJCQUEyQjtFQUFDLGVBQWUsRUFBQTs7QUFDN0o7RUFBaUIsa0JBQWtCO0VBQUMsVUFBVTtFQUFDLGlCQUFnQjtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUI7RUFBQyxzQkFBc0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDbks7RUFBbUIsY0FBYztFQUFDLGtCQUFrQjtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUIsRUFBQTs7QUFDOUc7RUFBMEIsa0JBQWtCO0VBQUMsU0FBUyxFQUFBOztBQUN0RDtFQUFVLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWtCO0VBQUMsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUFDLDBCQUF1QjtLQUF2Qix1QkFBdUI7RUFBc0gsbURBQW1EO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsTUFBTSxFQUFBOztBQUN0VDtFQUFXLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWtCO0VBQUMsb0NBQW9DO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQixFQUFBOztBQUNySjtFQUFlLFdBQVc7RUFBQyxZQUFZLEVBQUE7O0FBQ3ZDO0VBQVMsK0NBQStDO0VBQUMsZ0JBQWdCO0VBQUMsYUFBYTtFQUFDLG1CQUFtQixFQUFBOztBQUMzRztFQUF5QixnQkFBZ0IsRUFBQTs7QUFDekM7RUFBaUMsaUJBQWlCLEVBQUE7O0FBRWxEO0VBQVcsb0JBQWE7RUFBUSw4QkFBdUI7RUFBUSw0QkFBcUI7RUFBUSwwQkFBbUI7RUFBUSxtQ0FBa0I7RUFBa0Isa0NBQWlCO0VBQWtCLDhDQUFpQixFQUFBOztBQUUvTTtFQUErQiwwQkFBMEIsRUFBQTs7QUFDekQ7RUFBK0IsZ0JBQWdCO0VBQUUsa0JBQWtCLEVBQUE7O0FBRW5FO0VBQXFCLDRCQUE0QixFQUFBOztBQUNqRDtFQUFhLGdCQUFnQjtFQUFDLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUtdmlldy91c2VyLXByb2ZpbGUtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wcm9maWxlLWJne2hlaWdodDogMTg1cHg7YmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVtbzMuanBnKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7cGFkZGluZzogMCAxNXB4O31cclxuLnByb2ZpbGUtY29udGVudHtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtNTBweDtwYWRkaW5nLXRvcDo2MHB4O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtmbGV4LWRpcmVjdGlvbjogY29sdW1uO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5wcm9maWxlLWNvbnRlbnQgYXtjb2xvcjogIzc3Nzc3Nztmb250LXNpemU6IDAuODVyZW07ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO31cclxuLnByb2ZpbGUtY29udGVudCBpb24tdGV4dHtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAzNXB4O31cclxuLnVzZXItaW1ne3dpZHRoOiA5MHB4O2hlaWdodDogOTBweDtib3JkZXItcmFkaXVzOiA1MCU7b2JqZWN0LWZpdDogY292ZXI7b2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7Ym94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO21hcmdpbi1ib3R0b206IDEwcHg7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDt9XHJcbi51c2VyLWljb257d2lkdGg6IDM0cHg7aGVpZ2h0OiAzNHB4O2JvcmRlci1yYWRpdXM6IDUwJTtiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNjYsIDE1NCwgMC4wNyk7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO31cclxuLnVzZXItaWNvbiBpbWd7d2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O31cclxuaW9uLWNhcmR7Ym94LXNoYWRvdzogMHB4IDhweCAyNHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7YmFja2dyb3VuZDogI0ZGRjtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXJ7cGFkZGluZy1yaWdodDogMDt9XHJcbmlvbi1jYXJkLWhlYWRlcisuY2FyZC1jb250ZW50LW1ke3BhZGRpbmctdG9wOiAxNnB4O31cclxuXHJcbi5zaGFyZS1idG57LS1iYWNrZ3JvdW5kOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojMjdhNjlhOy0tYmFja2dyb3VuZC1mb2N1c2VkOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWhvdmVyOiMyN2E2OWE7LS1pb24tY29sb3Itc2hhZGU6IzI3YTY5YSFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDojMjdhNjlhIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlOnJnYmEoMCwgMCwgMCwgMC4zNSkhaW1wb3J0YW50fVxyXG5cclxuLnByb2ZpbGVfdGFicyBpb24tc2VnbWVudCBzcGFue3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO31cclxuaW9uLWNhcmQuaW9zIGlvbi1jYXJkLWNvbnRlbnR7IGZvbnQtd2VpZ2h0OiAzMDA7IGZvbnQtc2l6ZTogMC44NXJlbTt9XHJcblxyXG5pb24tY2FyZC1jb250ZW50Lmlvc3twYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O31cclxuaW9uLWNhcmQuaW9ze21hcmdpbi10b3A6IDEwcHg7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbiJdfQ== */");

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