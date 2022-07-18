(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Notifications</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\"> \r\n  <ion-segment class=\"top-segment\"  [(ngModel)]=\"notification_tabs\">\r\n    \r\n    <ion-segment-button value=\"activity\" checked>Activity</ion-segment-button>\r\n    <!-- <ion-segment-button value=\"people\" >People</ion-segment-button>\r\n    <ion-segment-button value=\"media\">Media</ion-segment-button>\r\n    <ion-segment-button value=\"program\">Program</ion-segment-button> -->\r\n    <ion-segment-button value=\"payments\">Payments</ion-segment-button>\r\n  </ion-segment> \r\n  <ion-refresher class=\"page-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>  \r\n  <div [ngSwitch]=\"notification_tabs\">   \r\n    \r\n    <div lines=\"none\" *ngSwitchCase=\"'activity'\">\r\n      <div class=\"no-data\" *ngIf=\"!mediaNotification.length > 0  && data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Data Found</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let medianoti of mediaNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"medianoti?.user?.bios?.profile_pic\" src=\"{{url}}{{medianoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!medianoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n              <h3 class=\"list-person\">{{medianoti?.user?.user_name}} <span class=\"list-name mt-1\">{{medianoti?.type}}</span></h3>\r\n              <span class=\"list-name\">{{medianoti?.description}} </span>\r\n          </ion-label>\r\n          <span class=\"notifi-right\">{{medianoti?.created_at}}</span>\r\n        </ion-item>\r\n      </ion-card>        \r\n    </div>\r\n    \r\n\r\n    <div lines=\"none\" *ngSwitchCase=\"'people'\">\r\n      <div class=\"no-data\" *ngIf=\"!peopleNotification.length > 0 && data\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Data Data</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let peoplenoti of peopleNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"peoplenoti?.user?.bios?.profile_pic\" src=\"{{url}}{{peoplenoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!peoplenoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3 class=\"list-person\">{{peoplenoti?.user?.user_name}}</h3>\r\n            <span class=\"list-name\">{{peoplenoti?.description}} </span>\r\n          </ion-label>\r\n          <span class=\"notifi-right\">{{peoplenoti?.created_at}}</span>\r\n        </ion-item> \r\n      </ion-card>       \r\n    </div> \r\n    <div lines=\"none\" *ngSwitchCase=\"'media'\">\r\n      <div class=\"no-data\" *ngIf=\"!mediaNotification.length > 0\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Data Found</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let medianoti of mediaNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"medianoti?.user?.bios?.profile_pic\" src=\"{{url}}{{medianoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!medianoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n              <h3 class=\"list-person\">{{medianoti?.user?.user_name}} <span class=\"list-name\">{{medianoti?.type}}</span></h3>\r\n              <span class=\"list-name\">{{medianoti?.description}} </span>\r\n          </ion-label>\r\n          <span class=\"notifi-right\">{{medianoti?.created_at}}</span>\r\n        </ion-item>\r\n      </ion-card>        \r\n    </div>\r\n    <div lines=\"none\" *ngSwitchCase=\"'program'\">      \r\n      <div class=\"no-data\" *ngIf=\"!programNotification.length > 0\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Data Found</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let programnoti of programNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"programnoti?.user?.bios?.profile_pic\" src=\"{{url}}{{programnoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!programnoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3 class=\"list-person\">{{programnoti?.user?.user_name}} <span class=\"list-name\">{{programnoti?.type}}</span></h3>\r\n            <span class=\"list-name\">{{programnoti?.description}} </span>\r\n        </ion-label>\r\n          <ion-label class=\"ion-text-end\" slot=\"end\">\r\n            <span class=\"list-name text-green d-block\" slot=\"end\">Ended</span>\r\n            <span class=\"notifi-right\">{{programnoti?.created_at}}</span>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div> \r\n    <div *ngSwitchCase=\"'payments'\" class=\"no-data\">\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>You don't have any notifications right now.</p>\r\n    </div>\r\n  </div>\r\n  <ion-list lines=\"none\" *ngIf=\"!data\">  \r\n    <ion-card *ngFor=\"let skeleton of [].constructor(20)\" class=\"ion-no-margin\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3 class=\"list-person\"><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n          <span class=\"list-name\"><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></span>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card>    \r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/notification/notification-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/notification/notification-routing.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ios.item-card ion-avatar {\n  top: 8px;\n}\n\n.ios.item-card span.notifi-right {\n  top: 8px;\n}\n\nion-card {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 4px solid #f7f7f7;\n}\n\nion-card ion-item {\n  border-bottom: 1px solid #f7f7f7;\n}\n\nion-card ion-item ion-avatar {\n  position: absolute;\n  top: 0px;\n  left: 16px;\n}\n\nion-card ion-item ion-label {\n  white-space: normal;\n  margin-left: 55px;\n}\n\nion-card ion-item ion-label h3 {\n  margin-bottom: 0;\n}\n\nion-card ion-item span.notifi-right {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n\nion-content .no-data {\n  height: calc(100vh - 100px);\n}\n\n.list-person span {\n  display: block;\n}\n\n.mt-1 {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBMEIsUUFBQTtBQ0UxQjs7QUREQTtFQUFpQyxRQUFBO0FDS2pDOztBREhBO0VBQVMsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBaUIsZ0NBQUE7QUNTM0M7O0FEUkk7RUFBUyxnQ0FBQTtBQ1diOztBRFZRO0VBQVcsa0JBQUE7RUFBbUIsUUFBQTtFQUFTLFVBQUE7QUNlL0M7O0FEZFE7RUFBVSxtQkFBQTtFQUFvQixpQkFBQTtBQ2tCdEM7O0FEakJZO0VBQUcsZ0JBQUE7QUNvQmY7O0FEbEJRO0VBQWtCLGtCQUFBO0VBQW1CLFFBQUE7RUFBUyxVQUFBO0FDdUJ0RDs7QURuQkk7RUFBUywyQkFBQTtBQ3VCYjs7QURyQkE7RUFDSSxjQUFBO0FDd0JKOztBRHRCQTtFQUNJLGVBQUE7QUN5QkoiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb3MuaXRlbS1jYXJkIGlvbi1hdmF0YXJ7dG9wOjhweH1cclxuLmlvcy5pdGVtLWNhcmQgc3Bhbi5ub3RpZmktcmlnaHR7dG9wOiA4cHh9XHJcblxyXG5pb24tY2FyZHtib3JkZXItcmFkaXVzOiAwO2JveC1zaGFkb3c6IG5vbmU7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICBpb24taXRlbXtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y3ZjdmNztcclxuICAgICAgICBpb24tYXZhdGFye3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDBweDtsZWZ0OiAxNnB4O31cclxuICAgICAgICBpb24tbGFiZWx7d2hpdGUtc3BhY2U6IG5vcm1hbDttYXJnaW4tbGVmdDogNTVweDtcclxuICAgICAgICAgICAgaDN7bWFyZ2luLWJvdHRvbTogMDt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ubm90aWZpLXJpZ2h0e3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDhweDtyaWdodDogOHB4O31cclxuICAgIH1cclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC5uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTt9XHJcbn1cclxuLmxpc3QtcGVyc29uIHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubXQtMXtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufSIsIi5pb3MuaXRlbS1jYXJkIGlvbi1hdmF0YXIge1xuICB0b3A6IDhweDtcbn1cblxuLmlvcy5pdGVtLWNhcmQgc3Bhbi5ub3RpZmktcmlnaHQge1xuICB0b3A6IDhweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2Y3ZjdmNztcbn1cbmlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7XG59XG5pb24tY2FyZCBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMTZweDtcbn1cbmlvbi1jYXJkIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xufVxuaW9uLWNhcmQgaW9uLWl0ZW0gaW9uLWxhYmVsIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1jYXJkIGlvbi1pdGVtIHNwYW4ubm90aWZpLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbn1cblxuaW9uLWNvbnRlbnQgLm5vLWRhdGEge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG59XG5cbi5saXN0LXBlcnNvbiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tdC0xIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/notification/notification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let NotificationPage = class NotificationPage {
    constructor(notification, navCtrl) {
        this.notification = notification;
        this.navCtrl = navCtrl;
        this.notification_tabs = "activity";
        this.mediaNotification = [];
        this.peopleNotification = [];
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].profilePic;
    }
    doRefresh(event) {
        this.ngOnInit();
        this.ionViewWillEnter();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.data = {};
        }, 2000);
    }
    ngOnInit() {
        this.notification.getNotificationOfPeople().subscribe((data) => {
            this.peopleNotification = data.status;
        });
        this.notification.getNotification().subscribe((data) => {
            this.mediaNotification = data.status;
        });
        this.notification.setNotification({ 'is_read': 1 }).subscribe((data) => {
        });
        this.notification.getNotificationOfProgram().subscribe((data) => {
            this.programNotification = data.status;
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
NotificationPage.ctorParameters = () => [
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.page.scss */ "./src/app/notification/notification.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], NotificationPage);



/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es2015.js.map