(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sponcer-chat-sponcer-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponcer-chat/sponcer-chat.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponcer-chat/sponcer-chat.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\" (click)=\"goBack()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>sponcer-chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Recent Conversations\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let sponcer of sponcers\" (click)=\"unread(sponcer)\">\r\n      <!-- <ion-item  (click)=\"unread(1)\"> -->\r\n      <!-- <ion-avatar slot=\"start\">\r\n        <img src=\"./../../../assets/images/user.jpg\">\r\n      </ion-avatar> -->\r\n      <ion-label>\r\n        <h2>{{sponcer.company_name}}</h2>        \r\n        <p>{{sponcer.ad_description}}</p>\r\n      </ion-label>\r\n      <ion-badge color=\"secondary\" slot=\"end\">{{sponcer.chat_count}}</ion-badge>\r\n    </ion-item>\r\n\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/sponcer-chat/sponcer-chat-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/sponcer-chat/sponcer-chat-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SponcerChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponcerChatPageRoutingModule", function() { return SponcerChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sponcer_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponcer-chat.page */ "./src/app/sponcer-chat/sponcer-chat.page.ts");




const routes = [
    {
        path: '',
        component: _sponcer_chat_page__WEBPACK_IMPORTED_MODULE_3__["SponcerChatPage"]
    }
];
let SponcerChatPageRoutingModule = class SponcerChatPageRoutingModule {
};
SponcerChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SponcerChatPageRoutingModule);



/***/ }),

/***/ "./src/app/sponcer-chat/sponcer-chat.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sponcer-chat/sponcer-chat.module.ts ***!
  \*****************************************************/
/*! exports provided: SponcerChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponcerChatPageModule", function() { return SponcerChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sponcer_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sponcer-chat-routing.module */ "./src/app/sponcer-chat/sponcer-chat-routing.module.ts");
/* harmony import */ var _sponcer_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponcer-chat.page */ "./src/app/sponcer-chat/sponcer-chat.page.ts");







let SponcerChatPageModule = class SponcerChatPageModule {
};
SponcerChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sponcer_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["SponcerChatPageRoutingModule"]
        ],
        declarations: [_sponcer_chat_page__WEBPACK_IMPORTED_MODULE_6__["SponcerChatPage"]]
    })
], SponcerChatPageModule);



/***/ }),

/***/ "./src/app/sponcer-chat/sponcer-chat.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/sponcer-chat/sponcer-chat.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25jZXItY2hhdC9zcG9uY2VyLWNoYXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/sponcer-chat/sponcer-chat.page.ts":
/*!***************************************************!*\
  !*** ./src/app/sponcer-chat/sponcer-chat.page.ts ***!
  \***************************************************/
/*! exports provided: SponcerChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponcerChatPage", function() { return SponcerChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _program_ad_details_sponser_comment_sponser_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../program/ad-details/sponser-comment/sponser-comment.component */ "./src/app/program/ad-details/sponser-comment/sponser-comment.component.ts");








let SponcerChatPage = class SponcerChatPage {
    constructor(navCtrl, notification, commonService, programService, router) {
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.commonService = commonService;
        this.programService = programService;
        this.router = router;
    }
    ngOnInit() {
        this.commonService.presentLoader();
        this.notification.getSponcerChatDetails().subscribe((data) => {
            this.sponcers = data.slist;
            this.commonService.dismissLoader();
        });
    }
    unread(event) {
        console.log("event:" + JSON.stringify(event));
        this.commonService.presentModal(_program_ad_details_sponser_comment_sponser_comment_component__WEBPACK_IMPORTED_MODULE_7__["SponserCommentComponent"], 'fullModal', { 'adDetails': event });
    }
    goBack() {
        this.navCtrl.back();
    }
};
SponcerChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SponcerChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sponcer-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sponcer-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponcer-chat/sponcer-chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sponcer-chat.page.scss */ "./src/app/sponcer-chat/sponcer-chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], SponcerChatPage);



/***/ })

}]);
//# sourceMappingURL=sponcer-chat-sponcer-chat-module-es2015.js.map