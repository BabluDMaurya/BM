(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-first-message-first-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/first-message/first-message.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/first-message/first-message.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\" translucent>\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons slot=\"start\" class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"user-img\" [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"imageDisplay\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3 class=\"list-person\">{{nameDisplay |titlecase}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content  class=\"main_content\" id=\"contentArea\">\r\n  <div>\r\n    <ion-list class=\"chats-list\" lines=\"none\">\r\n      <ion-item class=\"chat-box\">\r\n        <div class=\"ion-text-center\">\r\n          <ion-label class=\"message-label\">Say hi to {{nameDisplay |titlecase}}</ion-label>\r\n        </div>\r\n      </ion-item>   \r\n      <div *ngFor=\"let mess of messages\">   \r\n        <!--Private Chat-->\r\n        <ion-item class=\"chat-box chat-right\" *ngIf=\"mess.user ==  userData?.id &&  mess.sendTo == receiver_id\">\r\n          <div class=\"ion-text-end\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}<ion-icon ios=\"ios-done-all\" md=\"md-done-all\" [ngClass]=\"text-green\"></ion-icon></span>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"chat-box chat-left\" *ngIf=\"mess.user !== userData?.id && mess.sendTo == userData?.id\">\r\n          <div class=\"ion-text-start\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}</span>\r\n          </div>\r\n        </ion-item> \r\n        <!--Group Chat-->\r\n        <ion-item class=\"chat-box chat-right\" *ngIf=\"mess.user ==  userData?.id && chat_type == 3\">\r\n          <div class=\"ion-text-end\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}<ion-icon ios=\"ios-done-all\" md=\"md-done-all\" [ngClass]=\"text-green\"></ion-icon></span>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"chat-box chat-left\" *ngIf=\"mess.user !== userData?.id && chat_type == 3\">\r\n          <div class=\"ion-text-start\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}</span>\r\n          </div>\r\n        </ion-item>\r\n      </div>    \r\n    </ion-list>    \r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"sticky-footer\">\r\n  <ion-item lines=\"none\">   \r\n    <ion-textarea [(ngModel)]=\"message\" id=\"sendmessage\" placeholder=\"Type here..\"></ion-textarea>\r\n    <img src=\"../../assets/images/send.svg\" class=\"send-img\"  (click)=\"sendMessage()\">\r\n  </ion-item>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/chats/first-message/first-message-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/chats/first-message/first-message-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FirstMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstMessagePageRoutingModule", function() { return FirstMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _first_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first-message.page */ "./src/app/chats/first-message/first-message.page.ts");




const routes = [
    {
        path: '',
        component: _first_message_page__WEBPACK_IMPORTED_MODULE_3__["FirstMessagePage"]
    }
];
let FirstMessagePageRoutingModule = class FirstMessagePageRoutingModule {
};
FirstMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FirstMessagePageRoutingModule);



/***/ }),

/***/ "./src/app/chats/first-message/first-message.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/chats/first-message/first-message.module.ts ***!
  \*************************************************************/
/*! exports provided: FirstMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstMessagePageModule", function() { return FirstMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _first_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-message-routing.module */ "./src/app/chats/first-message/first-message-routing.module.ts");
/* harmony import */ var _first_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-message.page */ "./src/app/chats/first-message/first-message.page.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");








let FirstMessagePageModule = class FirstMessagePageModule {
};
FirstMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _first_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirstMessagePageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]
        ],
        declarations: [_first_message_page__WEBPACK_IMPORTED_MODULE_6__["FirstMessagePage"]]
    })
], FirstMessagePageModule);



/***/ }),

/***/ "./src/app/chats/first-message/first-message.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/chats/first-message/first-message.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content {\n  background: url('chat-bg.png') repeat;\n  --background: transparent;\n  background-size: cover;\n}\n\n.icon-right-side ion-button {\n  --padding-start:0;\n  --padding-end:0;\n  --background:transparent;\n  --background-focused:transparent;\n  --background-hover:transparent;\n  --box-shadow:none;\n}\n\n.top-heading ion-item ion-avatar {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.sticky-footer .send-img {\n  width: 26px;\n}\n\n.chats-list {\n  --background:transparent;\n  background: transparent;\n}\n\n.chats-list ion-item {\n  --background:transparent;\n  background: transparent;\n  margin-bottom: 5px;\n}\n\n.chats-list ion-item > div {\n  width: 100%;\n}\n\n.chat-box {\n  height: auto !important;\n}\n\n.chat-box ion-label {\n  margin: 0;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: #000;\n  white-space: normal;\n  display: inline-block;\n  line-height: 1.5;\n}\n\n.chat-box span {\n  color: #909090;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n}\n\n.chat-left ion-label {\n  background: #e3e6e6;\n  margin-right: 55px;\n}\n\n.chat-left span {\n  justify-content: flex-start;\n}\n\n.chat-right ion-label {\n  background: #32ab9f;\n  color: #FFF;\n  margin-left: 55px;\n}\n\n.chat-right span {\n  justify-content: flex-end;\n}\n\n.chat-duration {\n  position: relative;\n  text-align: center;\n}\n\n.chat-duration::after {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  background: #ccc;\n  display: block;\n  position: relative;\n  top: -8px;\n}\n\n.chat-duration span {\n  background: #f9f9f9;\n  position: relative;\n  z-index: 9;\n  padding: 2px 10px;\n  border-radius: 4px;\n}\n\n.ios .chats-list {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.ios .chat-box span {\n  font-size: 0.65rem;\n}\n\n.ios .chat-box span ion-icon {\n  font-size: 1rem;\n}\n\n.main_content {\n  max-height: calc(100vh - 115px);\n}\n\n.message-label {\n  white-space: pre-wrap !important;\n  text-align: left;\n}\n\n.top-header {\n  top: 10px !important;\n  height: 60px !important;\n  max-height: 60px !important;\n}\n\n.main_content {\n  top: 70px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvZmlyc3QtbWVzc2FnZS9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxjaGF0c1xcZmlyc3QtbWVzc2FnZVxcZmlyc3QtbWVzc2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXRzL2ZpcnN0LW1lc3NhZ2UvZmlyc3QtbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxxQ0FBQTtFQUE0RCx5QkFBQTtFQUEwQixzQkFBQTtBQ0lwRzs7QURIQTtFQUE0QixpQkFBQTtFQUFrQixlQUFBO0VBQWdCLHdCQUFBO0VBQXlCLGdDQUFBO0VBQWlDLDhCQUFBO0VBQStCLGlCQUFBO0FDWXZKOztBRFhBO0VBQWlDLGdCQUFBO0VBQWlCLGlCQUFBO0FDZ0JsRDs7QURiQTtFQUF5QixXQUFBO0FDaUJ6Qjs7QURmQTtFQUFZLHdCQUFBO0VBQXlCLHVCQUFBO0FDb0JyQzs7QURuQkE7RUFBcUIsd0JBQUE7RUFBeUIsdUJBQUE7RUFBd0Isa0JBQUE7QUN5QnRFOztBRHhCQTtFQUF5QixXQUFBO0FDNEJ6Qjs7QUQzQkE7RUFBVSx1QkFBQTtBQytCVjs7QUQ5QkE7RUFBb0IsU0FBQTtFQUFTLGdCQUFBO0VBQWdCLGtCQUFBO0VBQWtCLGtCQUFBO0VBQWlCLFdBQUE7RUFBWSxtQkFBQTtFQUFvQixxQkFBQTtFQUFzQixnQkFBQTtBQ3lDdEk7O0FEeENBO0VBQWUsY0FBQTtFQUFlLGlCQUFBO0VBQW1CLGFBQUE7RUFBYyxtQkFBQTtBQytDL0Q7O0FEOUNBO0VBQXFCLG1CQUFBO0VBQW1CLGtCQUFBO0FDbUR4Qzs7QURsREE7RUFBZ0IsMkJBQUE7QUNzRGhCOztBRHJEQTtFQUFzQixtQkFBQTtFQUFtQixXQUFBO0VBQVksaUJBQUE7QUMyRHJEOztBRDFEQTtFQUFpQix5QkFBQTtBQzhEakI7O0FEN0RBO0VBQWUsa0JBQUE7RUFBbUIsa0JBQUE7QUNrRWxDOztBRGpFQTtFQUFzQixXQUFBO0VBQVksV0FBQTtFQUFZLFdBQUE7RUFBWSxnQkFBQTtFQUFpQixjQUFBO0VBQWUsa0JBQUE7RUFBbUIsU0FBQTtBQzJFN0c7O0FEMUVBO0VBQW9CLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxpQkFBQTtFQUFrQixrQkFBQTtBQ2tGeEY7O0FEL0VJO0VBQVksZ0JBQUE7RUFBaUIsbUJBQUE7QUNvRmpDOztBRG5GSTtFQUFlLGtCQUFBO0FDc0ZuQjs7QURyRkk7RUFBd0IsZUFBQTtBQ3dGNUI7O0FEckZBO0VBQWMsK0JBQUE7QUN5RmQ7O0FEeEZBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQzJGSjs7QUR6RkE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUM0Rko7O0FEMUZBO0VBQ0ksb0JBQUE7QUM2RkoiLCJmaWxlIjoic3JjL2FwcC9jaGF0cy9maXJzdC1tZXNzYWdlL2ZpcnN0LW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudHtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGF0LWJnLnBuZykgcmVwZWF0OyAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JhY2tncm91bmQtc2l6ZTogY292ZXI7fVxyXG4uaWNvbi1yaWdodC1zaWRlIGlvbi1idXR0b257LS1wYWRkaW5nLXN0YXJ0OjA7LS1wYWRkaW5nLWVuZDowOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6dHJhbnNwYXJlbnQ7LS1ib3gtc2hhZG93Om5vbmV9XHJcbi50b3AtaGVhZGluZyBpb24taXRlbSBpb24tYXZhdGFye21hcmdpbi1sZWZ0OiA4cHg7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG5cclxuLy8gY3NzIGZvciBmb290ZXJcclxuLnN0aWNreS1mb290ZXIgLnNlbmQtaW1ne3dpZHRoOiAyNnB4O31cclxuXHJcbi5jaGF0cy1saXN0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XHJcbi5jaGF0cy1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4uY2hhdHMtbGlzdCBpb24taXRlbT5kaXZ7d2lkdGg6IDEwMCU7fVxyXG4uY2hhdC1ib3h7aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7fVxyXG4uY2hhdC1ib3ggaW9uLWxhYmVse21hcmdpbjowO3BhZGRpbmc6NXB4IDhweDtib3JkZXItcmFkaXVzOjRweDtmb250LXNpemU6Ljc1cmVtO2NvbG9yOiAjMDAwO3doaXRlLXNwYWNlOiBub3JtYWw7ZGlzcGxheTogaW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4uY2hhdC1ib3ggc3Bhbntjb2xvcjogIzkwOTA5MDtmb250LXNpemU6IDAuNzByZW07ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO31cclxuLmNoYXQtbGVmdCBpb24tbGFiZWx7YmFja2dyb3VuZDojZTNlNmU2O21hcmdpbi1yaWdodDogNTVweDt9XHJcbi5jaGF0LWxlZnQgc3BhbntqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7fVxyXG4uY2hhdC1yaWdodCBpb24tbGFiZWx7YmFja2dyb3VuZDojMzJhYjlmO2NvbG9yOiAjRkZGO21hcmdpbi1sZWZ0OiA1NXB4O31cclxuLmNoYXQtcmlnaHQgc3BhbntqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO31cclxuLmNoYXQtZHVyYXRpb257cG9zaXRpb246IHJlbGF0aXZlO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jaGF0LWR1cmF0aW9uOjphZnRlcntjb250ZW50OiAnJzt3aWR0aDogMTAwJTtoZWlnaHQ6IDFweDtiYWNrZ3JvdW5kOiAjY2NjO2Rpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC04cHg7fVxyXG4uY2hhdC1kdXJhdGlvbiBzcGFue2JhY2tncm91bmQ6ICNmOWY5Zjk7cG9zaXRpb246IHJlbGF0aXZlO3otaW5kZXg6IDk7cGFkZGluZzogMnB4IDEwcHg7Ym9yZGVyLXJhZGl1czogNHB4O31cclxuXHJcbi5pb3N7XHJcbiAgICAuY2hhdHMtbGlzdHtwYWRkaW5nLXRvcDogOHB4O3BhZGRpbmctYm90dG9tOiA4cHg7fVxyXG4gICAgLmNoYXQtYm94IHNwYW57Zm9udC1zaXplOiAwLjY1cmVtO31cclxuICAgIC5jaGF0LWJveCBzcGFuIGlvbi1pY29ue2ZvbnQtc2l6ZTogMXJlbTt9XHJcbn1cclxuXHJcbi5tYWluX2NvbnRlbnR7bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDExNXB4KTt9XHJcbi5tZXNzYWdlLWxhYmVse1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50b3AtaGVhZGVye1xyXG4gICAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWFpbl9jb250ZW50e1xyXG4gICAgdG9wOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIubWFpbl9jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hhdC1iZy5wbmcpIHJlcGVhdDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmljb24tcmlnaHQtc2lkZSBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIC0tcGFkZGluZy1lbmQ6MDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDp0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOnRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLnRvcC1oZWFkaW5nIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnN0aWNreS1mb290ZXIgLnNlbmQtaW1nIHtcbiAgd2lkdGg6IDI2cHg7XG59XG5cbi5jaGF0cy1saXN0IHtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNoYXRzLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jaGF0cy1saXN0IGlvbi1pdGVtID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0LWJveCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uY2hhdC1ib3ggaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNoYXQtYm94IHNwYW4ge1xuICBjb2xvcjogIzkwOTA5MDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGF0LWxlZnQgaW9uLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogI2UzZTZlNjtcbiAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xufVxuXG4uY2hhdC1sZWZ0IHNwYW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5jaGF0LXJpZ2h0IGlvbi1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICMzMmFiOWY7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW4tbGVmdDogNTVweDtcbn1cblxuLmNoYXQtcmlnaHQgc3BhbiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jaGF0LWR1cmF0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGF0LWR1cmF0aW9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtOHB4O1xufVxuXG4uY2hhdC1kdXJhdGlvbiBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaW9zIC5jaGF0cy1saXN0IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5pb3MgLmNoYXQtYm94IHNwYW4ge1xuICBmb250LXNpemU6IDAuNjVyZW07XG59XG4uaW9zIC5jaGF0LWJveCBzcGFuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubWFpbl9jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDExNXB4KTtcbn1cblxuLm1lc3NhZ2UtbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvcC1oZWFkZXIge1xuICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLm1haW5fY29udGVudCB7XG4gIHRvcDogNzBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/chats/first-message/first-message.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/chats/first-message/first-message.page.ts ***!
  \***********************************************************/
/*! exports provided: FirstMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstMessagePage", function() { return FirstMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/program.service */ "./src/app/services/program.service.ts");










let FirstMessagePage = class FirstMessagePage {
    constructor(actRoute, peopleView, navCtrl, socket, chatservice, commonService, programService) {
        this.actRoute = actRoute;
        this.peopleView = peopleView;
        this.navCtrl = navCtrl;
        this.socket = socket;
        this.chatservice = chatservice;
        this.commonService = commonService;
        this.programService = programService;
        this.chat_type = 0;
        this.message = '';
        this.messages = [];
        this.blockstatus = 0;
        this.room = 'firstMessage';
        this.requestId = 0;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
        this.profileDefaultImage = './../../../assets/images/user.jpg';
    }
    ngOnInit() {
        // connect ot socket.io
        // this.socket.connect();
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.actRoute.paramMap.subscribe((params) => {
            this.chat_type = parseInt(params.get('chat_type'));
            console.log("this.chat_type :" + this.chat_type);
            // chat_type = 1:consultant,2:user,3:program
            if (this.chat_type == 1) {
                this.receiver_id = params.get('id');
                this.peopleView.getUserData({ 'userId': this.receiver_id }).subscribe((data) => {
                    this.nameDisplay = data.userData.user_name;
                    this.imageDisplay = this.profilePicUrl + data.userData.bios.profile_pic;
                });
            }
            else if (this.chat_type == 2) {
                this.receiver_id = params.get('id');
                this.peopleView.getUserData({ 'userId': this.receiver_id }).subscribe((data) => {
                    this.nameDisplay = data.userData.user_name;
                    this.imageDisplay = this.profilePicUrl + data.userData.bios.profile_pic;
                });
            }
            else if (this.chat_type == 3) {
                this.receiver_id = params.get('id');
                this.programService.getProgramById({ "programId": this.receiver_id }).subscribe(data => {
                    this.programDetail = data.programData;
                    this.nameDisplay = data.programData.title;
                    if (data.programData.image_path) {
                        this.programDetail.img_array = data.programData.image_path.split(',');
                        this.imageDisplay = this.url + this.programDetail.img_array[0];
                    }
                });
            }
            if (this.chat_type != 3) {
                //Private chat
                console.log("private chat type : firstMessage");
                // this.socket.emit('set-name', this.userData.id,'firstMessage');
                // this.socket.emit("addUser", this.userData.id,this.receiver_id);
                // this.socket.emit("newUser", [this.userData.id,this.receiver_id, this.room]);          
            }
            else {
                //Group chat
                console.log("group chat type : programMessage");
                // this.socket.emit('set-name', this.userData.id,'programMessage');
                // this.socket.emit("newGroup", this.userData.id,this.requestId, this.room);
            }
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.sendmessage.setFocus();
        }, 400);
    }
    ionViewWillEnter() {
        if (this.chat_type != 3) {
            console.log('private message');
            this.socket.fromEvent('message').subscribe(receiveMessageArr => {
                console.log("private receiveMessageArr:" + JSON.stringify(receiveMessageArr));
                this.messages.push(receiveMessageArr);
                this.contentArea.scrollToBottom();
            });
        }
        else {
            console.log('group message');
            this.socket.fromEvent('groupmessage').subscribe(receiveMessageArr => {
                console.log("GroupreceiveMessageArr:" + JSON.stringify(receiveMessageArr));
                this.messages.push(receiveMessageArr);
                this.contentArea.scrollToBottom();
            });
        }
    }
    createRoom(massa, blocks) {
        if (this.chat_type != 3) {
            var chatType = 1;
        }
        else {
            var chatType = this.chat_type;
        }
        this.chatservice.sendChatRequest({ 'type': chatType, 'peopleSelect': [this.receiver_id] }).subscribe((data) => {
            if (data.status == 'success') {
                this.room = data.room;
                this.requestId = data.request_id;
                this.createdRoom = true;
                console.log("Room:" + this.room);
                console.log("requestId:" + this.requestId);
                if (this.chat_type == 3) {
                    this.socket.emit("newGroup", this.userData.id, this.requestId, this.room);
                    this.socket.emit('send-group-message', { text: massa });
                }
                else {
                    this.socket.emit("addUser", this.userData.id, this.receiver_id);
                    this.socket.emit("newUser", [this.userData.id, this.receiver_id, this.room]);
                    this.socket.emit('send-message', { text: massa, blockstatus: blocks, requestId: this.requestId });
                }
            }
        }, err => {
            this.commonService.presentToast("Couldnt load data, Something went wrong.");
        });
    }
    sendMessage() {
        if (this.message != '' && this.message != null) {
            if (!this.createdRoom) {
                this.createRoom(this.message, this.blockstatus);
            }
            else if (this.createdRoom && this.chat_type == 3) {
                //Group Chat
                console.log("Group:" + this.chat_type);
                this.socket.emit('send-group-message', { text: this.message });
            }
            else if (this.createdRoom && this.requestId > 0 && this.chat_type != 3) {
                //Private Chat
                console.log("Private:" + this.chat_type);
                this.socket.emit('send-message', { text: this.message, blockstatus: this.blockstatus, requestId: this.requestId });
            }
            this.message = '';
        }
        this.sendmessage.setFocus();
    }
    goBack() {
        // this.socket.disconnect();
        this.messages = [];
        this.chat_type = '';
        this.navCtrl.back();
    }
    ionViewWillLeave() {
        // this.socket.disconnect();
        this.messages = [];
        this.chat_type = '';
    }
    ngOnDestroy() {
        // this.socket.disconnect();
        this.messages = [];
        this.chat_type = '';
    }
};
FirstMessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], FirstMessagePage.prototype, "contentArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])
], FirstMessagePage.prototype, "sendmessage", void 0);
FirstMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/first-message/first-message.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-message.page.scss */ "./src/app/chats/first-message/first-message.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"]])
], FirstMessagePage);



/***/ })

}]);
//# sourceMappingURL=chats-first-message-first-message-module-es2015.js.map