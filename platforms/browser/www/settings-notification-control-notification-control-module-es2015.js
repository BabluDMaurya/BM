(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-notification-control-notification-control-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/notification-control/notification-control.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/notification-control/notification-control.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n      <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n      </ion-item>\r\n      <ion-item slot=\"center\">\r\n        <ion-label>Notifications Setting</ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-list lines=\"none\" class=\"ion-no-padding toggle-list\">\r\n    <ion-list-header class=\"green text-white\">\r\n      <ion-label>People</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Following</ion-label>\r\n      <ion-toggle checked=\"{{following}}\" slot=\"end\" name=\"following\" (click)=\"followingNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Post Responses</ion-label>\r\n      <ion-toggle checked=\"{{postResponses}}\" slot=\"end\" name=\"post-responses\" (click)=\"postResponsesNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">\r\n      <ion-label>Media</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Posts</ion-label>\r\n      <ion-toggle checked=\"{{posts}}\" slot=\"end\" name=\"posts\" (click)=\"postsNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Chat</ion-label>\r\n      <ion-toggle checked=\"{{chat}}\" slot=\"end\" name=\"chat\" (click)=\"chatNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Videos Sent to Me</ion-label>\r\n      <ion-toggle checked=\"{{videoSent}}\" slot=\"end\" name=\"video-sent\" (click)=\"videoSentNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">\r\n      <ion-label>Program</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Program Acceptances</ion-label>\r\n      <ion-toggle checked=\"{{programAcceptances}}\" slot=\"end\" name=\"program-acceptances\" (click)=\"programAcceptancesNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Program Requests from people I follow</ion-label>\r\n      <ion-toggle checked=\"{{peopleIFollow}}\" slot=\"end\" name=\"people I follow\" (click)=\"peopleIFollowNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Program Requests from anyone</ion-label>\r\n      <ion-toggle checked=\"{{requestsFromAnyone}}\" slot=\"end\" name=\"Requests from anyone\" (click)=\"requestsFromAnyoneNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Email Sent</ion-label>\r\n      <ion-toggle checked=\"{{emailSent}}\" slot=\"end\" name=\"Email Sent\" (click)=\"emailSentNotiCont()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">\r\n      <ion-label>Payments</ion-label>\r\n    </ion-list-header>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/settings/notification-control/notification-control-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/settings/notification-control/notification-control-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationControlPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationControlPageRoutingModule", function() { return NotificationControlPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_control_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-control.page */ "./src/app/settings/notification-control/notification-control.page.ts");




const routes = [
    {
        path: '',
        component: _notification_control_page__WEBPACK_IMPORTED_MODULE_3__["NotificationControlPage"]
    }
];
let NotificationControlPageRoutingModule = class NotificationControlPageRoutingModule {
};
NotificationControlPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationControlPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/notification-control/notification-control.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/settings/notification-control/notification-control.module.ts ***!
  \******************************************************************************/
/*! exports provided: NotificationControlPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationControlPageModule", function() { return NotificationControlPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_control_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-control-routing.module */ "./src/app/settings/notification-control/notification-control-routing.module.ts");
/* harmony import */ var _notification_control_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-control.page */ "./src/app/settings/notification-control/notification-control.page.ts");







let NotificationControlPageModule = class NotificationControlPageModule {
};
NotificationControlPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_control_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationControlPageRoutingModule"]
        ],
        declarations: [_notification_control_page__WEBPACK_IMPORTED_MODULE_6__["NotificationControlPage"]]
    })
], NotificationControlPageModule);



/***/ }),

/***/ "./src/app/settings/notification-control/notification-control.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/settings/notification-control/notification-control.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header ion-label {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvbm90aWZpY2F0aW9uLWNvbnRyb2wvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcc2V0dGluZ3NcXG5vdGlmaWNhdGlvbi1jb250cm9sXFxub3RpZmljYXRpb24tY29udHJvbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL25vdGlmaWNhdGlvbi1jb250cm9sL25vdGlmaWNhdGlvbi1jb250cm9sLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFVLFdBQUE7QUNDZCIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL25vdGlmaWNhdGlvbi1jb250cm9sL25vdGlmaWNhdGlvbi1jb250cm9sLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlcntcclxuICAgIGlvbi1sYWJlbHtjb2xvcjogI0ZGRjt9XHJcbn0iLCJpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNGRkY7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/notification-control/notification-control.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/settings/notification-control/notification-control.page.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationControlPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationControlPage", function() { return NotificationControlPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");




let NotificationControlPage = class NotificationControlPage {
    constructor(settingService, navCtrl) {
        this.settingService = settingService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.settingService.getNotificationControl().subscribe((data) => {
            this.following = data.following;
            this.posts = data.posts;
            this.postResponses = data.postResponses;
            this.videoSent = data.videoSent;
            this.programAcceptances = data.programAcceptances;
            this.peopleIFollow = data.peopleIFollow;
            this.requestsFromAnyone = data.requestsFromAnyone;
            this.emailSent = data.emailSent;
        }, err => {
            console.error('error msg!', err);
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    followingNotiCont() {
        this.following = this.apiResponce('following', this.following);
    }
    postsNotiCont() {
        this.posts = this.apiResponce('posts', this.posts);
    }
    chatNotiCont() {
        this.chats = this.apiResponce('chats', this.chats);
    }
    postResponsesNotiCont() {
        this.postResponses = this.apiResponce('postResponses', this.postResponses);
    }
    videoSentNotiCont() {
        this.videoSent = this.apiResponce('videoSent', this.videoSent);
    }
    programAcceptancesNotiCont() {
        this.programAcceptances = this.apiResponce('programAcceptances', this.programAcceptances);
    }
    peopleIFollowNotiCont() {
        this.peopleIFollow = this.apiResponce('peopleIFollow', this.peopleIFollow);
    }
    requestsFromAnyoneNotiCont() {
        this.requestsFromAnyone = this.apiResponce('requestsFromAnyone', this.requestsFromAnyone);
    }
    emailSentNotiCont() {
        this.emailSent = this.apiResponce('emailSent', this.emailSent);
    }
    apiResponce(Name, Value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.settingService.setNotificationControl({ 'name': Name, 'value': Value }).subscribe((data) => {
                return data.status;
            }, err => {
                console.error('error msg!', err);
            });
        });
    }
};
NotificationControlPage.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
NotificationControlPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-control',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-control.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/notification-control/notification-control.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-control.page.scss */ "./src/app/settings/notification-control/notification-control.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], NotificationControlPage);



/***/ })

}]);
//# sourceMappingURL=settings-notification-control-notification-control-module-es2015.js.map