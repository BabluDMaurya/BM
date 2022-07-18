(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-access-access-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/access/access.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/access/access.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\" translucent>\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons slot=\"start\" class=\"ion-no-margin\" [routerLink]=\"['/tabs/chats']\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-avatar slot=\"start\">\r\n        <img *ngIf=\"!profile_pic\" src=\"../../assets/images/user.jpg\">\r\n        <img *ngIf=\"profile_pic\" src=\"{{profilePicUrl}}{{profile_pic}}\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3 class=\"list-person\" *ngIf=\"groupName != '' && groupName != null\">{{groupName}}</h3>\r\n        <h3 class=\"list-person\" *ngIf=\"user_name != '' && user_name != null\">{{user_name}}</h3>\r\n        <span class=\"list-name\"> {{UserOnLineStatus}}</span>\r\n      </ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-button slot=\"end\" (click)=\"presentPopover()\"><ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon></ion-button>\r\n    </ion-item> -->\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\"> \r\n  <ion-list class=\"chats-list\" lines=\"none\" *ngFor=\"let storeMessage of storeMessages\">\r\n    <!-- <ion-item>\r\n      <ion-label class=\"chat-duration\"><span>{{(storeMessage.created_at | date:'dd/MM/y') == chatDates? : }}</span></ion-label>\r\n    </ion-item> -->\r\n    <!-- <ion-item class=\"chat-box chat-right\" *ngIf=\"storeMessage.sender_id ===  userData?.id &&  storeMessage.receiver_id == receiverId\">\r\n      <div class=\"ion-text-end\">\r\n        <ion-label>{{ storeMessage.message }}{{storeMessage.read_mess}}</ion-label>\r\n        <span class=\"chat-time\">{{ storeMessage.created_at | date:'shortTime' }} <ion-icon ios=\"ios-done-all\" md=\"md-done-all\" [ngClass]=\"{ 'text-green': storeMessage.read_mess == 1 }\"></ion-icon></span>\r\n      </div>\r\n    </ion-item> -->\r\n    <ion-item class=\"chat-box chat-left\" >\r\n      <div class=\"ion-text-start\">\r\n        <ion-label>{{ storeMessage.message }}</ion-label>\r\n        <span class=\"chat-time\">{{ storeMessage.created_at | date:'shortTime' }}</span>\r\n      </div>\r\n    </ion-item>    \r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"sticky-footer chatsButtons d-flex\" *ngIf=\"messageButtons\">\r\n    <ion-button class=\"ion-no-margin full-height\" color=\"light\" (click)=\"decline()\">Decline</ion-button>\r\n    <ion-button class=\"ion-no-margin full-height green\" (click)=\"allow()\">Allow</ion-button>\r\n</ion-footer> ");

/***/ }),

/***/ "./src/app/chats/access/access-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/chats/access/access-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPageRoutingModule", function() { return AccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _access_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access.page */ "./src/app/chats/access/access.page.ts");




const routes = [
    {
        path: '',
        component: _access_page__WEBPACK_IMPORTED_MODULE_3__["AccessPage"]
    }
];
let AccessPageRoutingModule = class AccessPageRoutingModule {
};
AccessPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccessPageRoutingModule);



/***/ }),

/***/ "./src/app/chats/access/access.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chats/access/access.module.ts ***!
  \***********************************************/
/*! exports provided: AccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPageModule", function() { return AccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _access_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-routing.module */ "./src/app/chats/access/access-routing.module.ts");
/* harmony import */ var _access_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access.page */ "./src/app/chats/access/access.page.ts");







let AccessPageModule = class AccessPageModule {
};
AccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _access_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccessPageRoutingModule"]
        ],
        declarations: [_access_page__WEBPACK_IMPORTED_MODULE_6__["AccessPage"]]
    })
], AccessPageModule);



/***/ }),

/***/ "./src/app/chats/access/access.page.scss":
/*!***********************************************!*\
  !*** ./src/app/chats/access/access.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content {\n  background: url('chat-bg.png') repeat;\n  --background: transparent;\n  background-size: cover;\n}\n\n.icon-right-side ion-button {\n  --padding-start:0;\n  --padding-end:0;\n  --background:transparent;\n  --background-focused:transparent;\n  --background-hover:transparent;\n  --box-shadow:none;\n}\n\n.top-heading ion-item ion-avatar {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.sticky-footer .send-img {\n  width: 26px;\n}\n\n.chats-list {\n  --background:transparent;\n  background: transparent;\n}\n\n.chats-list ion-item {\n  --background:transparent;\n  background: transparent;\n  margin-bottom: 5px;\n}\n\n.chats-list ion-item > div {\n  width: 100%;\n}\n\n.chat-box ion-label {\n  margin: 0;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: #000;\n  white-space: normal;\n  display: inline-block;\n  line-height: 1.5;\n}\n\n.chat-box span {\n  color: #909090;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n}\n\n.chat-left ion-label {\n  background: #e3e6e6;\n  margin-right: 55px;\n}\n\n.chat-left span {\n  justify-content: flex-start;\n}\n\n.chat-right ion-label {\n  background: #32ab9f;\n  color: #FFF;\n  margin-left: 55px;\n}\n\n.chat-right span {\n  justify-content: flex-end;\n}\n\n.chat-duration {\n  position: relative;\n  text-align: center;\n}\n\n.chat-duration::after {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  background: #ccc;\n  display: block;\n  position: relative;\n  top: -8px;\n}\n\n.chat-duration span {\n  background: #f9f9f9;\n  position: relative;\n  z-index: 9;\n  padding: 2px 10px;\n  border-radius: 4px;\n}\n\n.ios .chats-list {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.ios .chat-box span {\n  font-size: 0.65rem;\n}\n\n.ios .chat-box span ion-icon {\n  font-size: 1rem;\n}\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  margin-top: 0px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.top-header {\n  height: 60px !important;\n  max-height: 60px !important;\n}\n\n.main_content {\n  top: 60px !important;\n}\n\n.chat-box {\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvYWNjZXNzL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXGNoYXRzXFxhY2Nlc3NcXGFjY2Vzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXRzL2FjY2Vzcy9hY2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMscUNBQUE7RUFBNEQseUJBQUE7RUFBMEIsc0JBQUE7QUNJcEc7O0FESEE7RUFBNEIsaUJBQUE7RUFBa0IsZUFBQTtFQUFnQix3QkFBQTtFQUF5QixnQ0FBQTtFQUFpQyw4QkFBQTtFQUErQixpQkFBQTtBQ1l2Sjs7QURYQTtFQUFpQyxnQkFBQTtFQUFpQixpQkFBQTtBQ2dCbEQ7O0FEYkE7RUFBeUIsV0FBQTtBQ2lCekI7O0FEZkE7RUFBWSx3QkFBQTtFQUF5Qix1QkFBQTtBQ29CckM7O0FEbkJBO0VBQXFCLHdCQUFBO0VBQXlCLHVCQUFBO0VBQXdCLGtCQUFBO0FDeUJ0RTs7QUR4QkE7RUFBeUIsV0FBQTtBQzRCekI7O0FEM0JBO0VBQW9CLFNBQUE7RUFBUyxnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixrQkFBQTtFQUFpQixXQUFBO0VBQVksbUJBQUE7RUFBb0IscUJBQUE7RUFBc0IsZ0JBQUE7QUNzQ3RJOztBRHJDQTtFQUFlLGNBQUE7RUFBZSxpQkFBQTtFQUFtQixhQUFBO0VBQWMsbUJBQUE7QUM0Qy9EOztBRDNDQTtFQUFxQixtQkFBQTtFQUFtQixrQkFBQTtBQ2dEeEM7O0FEL0NBO0VBQWdCLDJCQUFBO0FDbURoQjs7QURsREE7RUFBc0IsbUJBQUE7RUFBbUIsV0FBQTtFQUFZLGlCQUFBO0FDd0RyRDs7QUR2REE7RUFBaUIseUJBQUE7QUMyRGpCOztBRDFEQTtFQUFlLGtCQUFBO0VBQW1CLGtCQUFBO0FDK0RsQzs7QUQ5REE7RUFBc0IsV0FBQTtFQUFZLFdBQUE7RUFBWSxXQUFBO0VBQVksZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLFNBQUE7QUN3RTdHOztBRHZFQTtFQUFvQixtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsaUJBQUE7RUFBa0Isa0JBQUE7QUMrRXhGOztBRDVFSTtFQUFZLGdCQUFBO0VBQWlCLG1CQUFBO0FDaUZqQzs7QURoRkk7RUFBZSxrQkFBQTtBQ21GbkI7O0FEbEZJO0VBQXdCLGVBQUE7QUNxRjVCOztBRG5GQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNzRkY7O0FEbkZBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0FDc0ZGOztBRG5GQTtFQUNFLHNDQUFBO0VBQ0EsV0FBQTtBQ3NGRjs7QURuRkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDc0ZGOztBRG5GQTtFQUNFLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNzRkY7O0FEbkZBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQ3NGRjs7QURwRkE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FDdUZGOztBRHJGQTtFQUNFLG9CQUFBO0FDd0ZGOztBRHRGQTtFQUFVLHVCQUFBO0FDMEZWIiwiZmlsZSI6InNyYy9hcHAvY2hhdHMvYWNjZXNzL2FjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50e2JhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NoYXQtYmcucG5nKSByZXBlYXQ7IC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1zaXplOiBjb3Zlcjt9XHJcbi5pY29uLXJpZ2h0LXNpZGUgaW9uLWJ1dHRvbnstLXBhZGRpbmctc3RhcnQ6MDstLXBhZGRpbmctZW5kOjA7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1ob3Zlcjp0cmFuc3BhcmVudDstLWJveC1zaGFkb3c6bm9uZX1cclxuLnRvcC1oZWFkaW5nIGlvbi1pdGVtIGlvbi1hdmF0YXJ7bWFyZ2luLWxlZnQ6IDhweDttYXJnaW4tcmlnaHQ6IDhweDt9XHJcblxyXG4vLyBjc3MgZm9yIGZvb3RlclxyXG4uc3RpY2t5LWZvb3RlciAuc2VuZC1pbWd7d2lkdGg6IDI2cHg7fVxyXG5cclxuLmNoYXRzLWxpc3R7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O31cclxuLmNoYXRzLWxpc3QgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O21hcmdpbi1ib3R0b206IDVweDt9XHJcbi5jaGF0cy1saXN0IGlvbi1pdGVtPmRpdnt3aWR0aDogMTAwJTt9XHJcbi5jaGF0LWJveCBpb24tbGFiZWx7bWFyZ2luOjA7cGFkZGluZzo1cHggOHB4O2JvcmRlci1yYWRpdXM6NHB4O2ZvbnQtc2l6ZTouNzVyZW07Y29sb3I6ICMwMDA7d2hpdGUtc3BhY2U6IG5vcm1hbDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbi5jaGF0LWJveCBzcGFue2NvbG9yOiAjOTA5MDkwO2ZvbnQtc2l6ZTogMC43MHJlbTtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4uY2hhdC1sZWZ0IGlvbi1sYWJlbHtiYWNrZ3JvdW5kOiNlM2U2ZTY7bWFyZ2luLXJpZ2h0OiA1NXB4O31cclxuLmNoYXQtbGVmdCBzcGFue2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDt9XHJcbi5jaGF0LXJpZ2h0IGlvbi1sYWJlbHtiYWNrZ3JvdW5kOiMzMmFiOWY7Y29sb3I6ICNGRkY7bWFyZ2luLWxlZnQ6IDU1cHg7fVxyXG4uY2hhdC1yaWdodCBzcGFue2p1c3RpZnktY29udGVudDogZmxleC1lbmQ7fVxyXG4uY2hhdC1kdXJhdGlvbntwb3NpdGlvbjogcmVsYXRpdmU7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmNoYXQtZHVyYXRpb246OmFmdGVye2NvbnRlbnQ6ICcnO3dpZHRoOiAxMDAlO2hlaWdodDogMXB4O2JhY2tncm91bmQ6ICNjY2M7ZGlzcGxheTogYmxvY2s7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLThweDt9XHJcbi5jaGF0LWR1cmF0aW9uIHNwYW57YmFja2dyb3VuZDogI2Y5ZjlmOTtwb3NpdGlvbjogcmVsYXRpdmU7ei1pbmRleDogOTtwYWRkaW5nOiAycHggMTBweDtib3JkZXItcmFkaXVzOiA0cHg7fVxyXG5cclxuLmlvc3tcclxuICAgIC5jaGF0cy1saXN0e3BhZGRpbmctdG9wOiA4cHg7cGFkZGluZy1ib3R0b206IDhweDt9XHJcbiAgICAuY2hhdC1ib3ggc3Bhbntmb250LXNpemU6IDAuNjVyZW07fVxyXG4gICAgLmNoYXQtYm94IHNwYW4gaW9uLWljb257Zm9udC1zaXplOiAxcmVtO31cclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuIFxyXG4ubXktbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4gXHJcbi5vdGhlci1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4gXHJcbi50aW1lIHtcclxuICBjb2xvcjogI2RmZGZkZjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4gXHJcbi5tZXNzYWdlLWlucHV0IHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbiBcclxuLm1zZy1idG4ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XHJcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07XHJcbn1cclxuLnRvcC1oZWFkZXJ7ICBcclxuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1haW5fY29udGVudHtcclxuICB0b3A6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2hhdC1ib3h7aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7fSIsIi5tYWluX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGF0LWJnLnBuZykgcmVwZWF0O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaWNvbi1yaWdodC1zaWRlIGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgLS1wYWRkaW5nLWVuZDowO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOnRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6dHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4udG9wLWhlYWRpbmcgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uc3RpY2t5LWZvb3RlciAuc2VuZC1pbWcge1xuICB3aWR0aDogMjZweDtcbn1cblxuLmNoYXRzLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY2hhdHMtbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNoYXRzLWxpc3QgaW9uLWl0ZW0gPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoYXQtYm94IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjMDAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5jaGF0LWJveCBzcGFuIHtcbiAgY29sb3I6ICM5MDkwOTA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdC1sZWZ0IGlvbi1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNlM2U2ZTY7XG4gIG1hcmdpbi1yaWdodDogNTVweDtcbn1cblxuLmNoYXQtbGVmdCBzcGFuIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY2hhdC1yaWdodCBpb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMzJhYjlmO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59XG5cbi5jaGF0LXJpZ2h0IHNwYW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY2hhdC1kdXJhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hhdC1kdXJhdGlvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLThweDtcbn1cblxuLmNoYXQtZHVyYXRpb24gc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmlvcyAuY2hhdHMtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uaW9zIC5jaGF0LWJveCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xufVxuLmlvcyAuY2hhdC1ib3ggc3BhbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm90aGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aW1lIHtcbiAgY29sb3I6ICNkZmRmZGY7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubXNnLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xufVxuXG4udG9wLWhlYWRlciB7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluX2NvbnRlbnQge1xuICB0b3A6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmNoYXQtYm94IHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/chats/access/access.page.ts":
/*!*********************************************!*\
  !*** ./src/app/chats/access/access.page.ts ***!
  \*********************************************/
/*! exports provided: AccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPage", function() { return AccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../chat-rooms/chat-rooms.component */ "./src/app/chats/chat-rooms/chat-rooms.component.ts");










let AccessPage = class AccessPage {
    constructor(navCtrl, actRoute, dataService, commonService, router, socket) {
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.dataService = dataService;
        this.commonService = commonService;
        this.router = router;
        this.socket = socket;
        this.messageButtons = true;
        this.message = '';
        this.messages = [];
        this.currentUser = '';
        this.storeMessage = '';
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
        this.groupName = '';
        this.adminId = '';
        this.groupMember = '';
        this.acceptMember = '';
        this.groupImage = '';
        this.groupId = '';
        this.groupMessage = '';
        this.groupMessages = [];
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.actRoute.paramMap.subscribe((params) => {
            this.requestId = params.get('id');
            this.senderId = params.get('senderId'); //in group chat this is room
            this.chatType = params.get('type');
            if (this.chatType != 2) {
                this.dataService.getChatRoom({ 'userId': this.senderId }).subscribe((data) => {
                    this.room = data.chatroom.room;
                    console.log("data.chatroom.room:" + this.room);
                    this.privateChat();
                });
            }
            else {
                this.groupChat();
            }
        });
    }
    privateChat() {
        this.socket.fromEvent('storchatdate').subscribe(data => {
            // console.log("storchatdate : "+JSON.stringify(data));
        });
        this.socket.fromEvent('message').subscribe(message => {
            this.messages.push(message);
        });
        this.socket.fromEvent('UserOnLineStatus').subscribe(UserOnLineStatus => {
            this.UserOnLineStatus = UserOnLineStatus;
        });
        this.socket.emit("addUser", this.userData.id, this.senderId);
        console.log("privateChat room:" + this.room);
        this.socket.emit("privateUser", [this.userData.id, this.senderId, this.room]);
        this.socket.emit("storemassagerequest", this.userData.id, this.senderId);
        this.socket.fromEvent('stormessage').subscribe(storMessage => {
            this.storeMessages = storMessage;
        });
        this.socket.fromEvent('userName').subscribe(data => {
            this.user_name = data[0].user_name;
        });
        this.socket.fromEvent('userBio').subscribe(data => {
            this.display_name = data[0].display_name;
            this.profile_pic = data[0].profile_pic;
        });
    }
    groupChat() {
        console.log("groupChat");
        this.room = this.senderId;
        this.socket.emit("newGroup", this.userData.id, this.requestId, this.room);
        this.socket.emit('stormessagerequest', this.userData.id, this.requestId);
        this.socket.fromEvent('groupChatRequestData').subscribe(groupChatRequestData => {
            this.groupName = groupChatRequestData[0].group_name;
            this.adminId = groupChatRequestData[0].admin_id;
            this.groupMember = groupChatRequestData[0].group_member;
            this.acceptMember = groupChatRequestData[0].accept_member;
            this.groupImage = groupChatRequestData[0].group_image;
            this.groupId = groupChatRequestData[0].id;
        });
        this.socket.fromEvent('stormessage').subscribe(stormessage => {
            this.storeMessages = stormessage;
            console.log("storeMessages :" + JSON.stringify(stormessage));
        });
        this.socket.fromEvent('groupmessage').subscribe(message => {
            this.groupMessages.push(message);
        });
    }
    //---------allow---------
    allow() {
        this.commonService.presentLoader();
        if (this.requestId != null && this.requestId != '') {
            //------------Accept Request -------------
            this.dataService.acceptChatRequest({ 'id': this.requestId, 'senderId': this.senderId, 'type': this.chatType }).subscribe((data) => {
                console.log("acceptChatrequest:" + JSON.stringify(data));
                this.commonService.dismissLoader();
                this.messageButtons = false;
                if (data.status && this.chatType == 1) {
                    var fileData = {
                        returnUrl: 'list',
                        chatType: this.chatType,
                        room: data.room,
                        receiverId: parseInt(this.senderId),
                        requestId: parseInt(this.requestId),
                    };
                    // console.log('1/chat-room/+this.senderId++data.room+this.chatType'+this.senderId+'/'+data.room+'/'+this.chatType);
                    // this.router.navigateByUrl('/chat-room/'+this.senderId+'/'+data.room+'/'+this.chatType);
                }
                else {
                    var fileData = {
                        returnUrl: 'list',
                        chatType: this.chatType,
                        room: data.room,
                        receiverId: parseInt(this.requestId),
                        requestId: parseInt(this.requestId),
                    };
                    //   console.log('2/chat-room/+this.requestId++data.room+this.chatType'+this.requestId+'/'+data.room+'/'+this.chatType);
                    //   this.router.navigateByUrl('/chat-room/'+this.requestId+'/'+data.room+'/'+this.chatType);
                }
                this.commonService.presentModal(_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_8__["ChatRoomsComponent"], 'fullModal', fileData);
            });
        }
    }
    decline() {
        this.commonService.presentLoader();
        if (this.requestId != null && this.requestId != '') {
            //------------Reject Request -------------
            this.dataService.rejectChatRequest({ 'id': this.requestId, 'type': this.chatType }).subscribe((data) => {
                this.commonService.dismissLoader();
                this.messageButtons = false;
                this.navCtrl.back();
            });
        }
    }
};
AccessPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] }
];
AccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./access.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/access/access.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./access.page.scss */ "./src/app/chats/access/access.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"]])
], AccessPage);



/***/ })

}]);
//# sourceMappingURL=chats-access-access-module-es2015.js.map