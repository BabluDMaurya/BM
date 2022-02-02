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
/* harmony default export */ __webpack_exports__["default"] = (".main_content {\n  background: url('chat-bg.png') repeat;\n  --background: transparent;\n  background-size: cover; }\n\n.icon-right-side ion-button {\n  --padding-start:0;\n  --padding-end:0;\n  --background:transparent;\n  --background-focused:transparent;\n  --background-hover:transparent;\n  --box-shadow:none; }\n\n.top-heading ion-item ion-avatar {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n.sticky-footer .send-img {\n  width: 26px; }\n\n.chats-list {\n  --background:transparent;\n  background: transparent; }\n\n.chats-list ion-item {\n  --background:transparent;\n  background: transparent;\n  margin-bottom: 5px; }\n\n.chats-list ion-item > div {\n  width: 100%; }\n\n.chat-box ion-label {\n  margin: 0;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: .75rem;\n  color: #000;\n  white-space: normal;\n  display: inline-block;\n  line-height: 1.5; }\n\n.chat-box span {\n  color: #909090;\n  font-size: 0.70rem;\n  display: flex;\n  align-items: center; }\n\n.chat-left ion-label {\n  background: #e3e6e6;\n  margin-right: 55px; }\n\n.chat-left span {\n  justify-content: flex-start; }\n\n.chat-right ion-label {\n  background: #32ab9f;\n  color: #FFF;\n  margin-left: 55px; }\n\n.chat-right span {\n  justify-content: flex-end; }\n\n.chat-duration {\n  position: relative;\n  text-align: center; }\n\n.chat-duration::after {\n  content: '';\n  width: 100%;\n  height: 1px;\n  background: #ccc;\n  display: block;\n  position: relative;\n  top: -8px; }\n\n.chat-duration span {\n  background: #f9f9f9;\n  position: relative;\n  z-index: 9;\n  padding: 2px 10px;\n  border-radius: 4px; }\n\n.ios .chats-list {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.ios .chat-box span {\n  font-size: 0.65rem; }\n\n.ios .chat-box span ion-icon {\n  font-size: 1rem; }\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap; }\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff; }\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff; }\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small; }\n\n.message-input {\n  margin-top: 0px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff; }\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em; }\n\n.top-header {\n  height: 60px !important;\n  max-height: 60px !important; }\n\n.main_content {\n  top: 60px !important; }\n\n.chat-box {\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvYWNjZXNzL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxjaGF0c1xcYWNjZXNzXFxhY2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMscUNBQTBEO0VBQUUseUJBQWE7RUFBYSxzQkFBc0IsRUFBQTs7QUFDMUg7RUFBNEIsaUJBQWdCO0VBQUUsZUFBYztFQUFFLHdCQUFhO0VBQVksZ0NBQXFCO0VBQVksOEJBQW1CO0VBQVksaUJBQWEsRUFBQTs7QUFDcEs7RUFBaUMsZ0JBQWdCO0VBQUMsaUJBQWlCLEVBQUE7O0FBR25FO0VBQXlCLFdBQVcsRUFBQTs7QUFFcEM7RUFBWSx3QkFBYTtFQUFZLHVCQUF1QixFQUFBOztBQUM1RDtFQUFxQix3QkFBYTtFQUFZLHVCQUF1QjtFQUFDLGtCQUFrQixFQUFBOztBQUN4RjtFQUF5QixXQUFXLEVBQUE7O0FBQ3BDO0VBQW9CLFNBQVE7RUFBQyxnQkFBZTtFQUFDLGtCQUFpQjtFQUFDLGlCQUFnQjtFQUFDLFdBQVc7RUFBQyxtQkFBbUI7RUFBQyxxQkFBcUI7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDdEo7RUFBZSxjQUFjO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLG1CQUFtQixFQUFBOztBQUNsRjtFQUFxQixtQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDMUQ7RUFBZ0IsMkJBQTJCLEVBQUE7O0FBQzNDO0VBQXNCLG1CQUFrQjtFQUFDLFdBQVc7RUFBQyxpQkFBaUIsRUFBQTs7QUFDdEU7RUFBaUIseUJBQXlCLEVBQUE7O0FBQzFDO0VBQWUsa0JBQWtCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3BEO0VBQXNCLFdBQVc7RUFBQyxXQUFXO0VBQUMsV0FBVztFQUFDLGdCQUFnQjtFQUFDLGNBQWM7RUFBQyxrQkFBa0I7RUFBQyxTQUFTLEVBQUE7O0FBQ3RIO0VBQW9CLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLFVBQVU7RUFBQyxpQkFBaUI7RUFBQyxrQkFBa0IsRUFBQTs7QUFFMUc7RUFDZ0IsZ0JBQWdCO0VBQUMsbUJBQW1CLEVBQUE7O0FBRHBEO0VBRW1CLGtCQUFrQixFQUFBOztBQUZyQztFQUc0QixlQUFlLEVBQUE7O0FBRTNDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUNBQXFDO0VBQ3JDLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHNDQUFzQztFQUN0QyxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFnQjtFQUNoQixvQkFBYyxFQUFBOztBQUVoQjtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFBVSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2FjY2Vzcy9hY2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudHtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGF0LWJnLnBuZykgcmVwZWF0OyAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JhY2tncm91bmQtc2l6ZTogY292ZXI7fVxyXG4uaWNvbi1yaWdodC1zaWRlIGlvbi1idXR0b257LS1wYWRkaW5nLXN0YXJ0OjA7LS1wYWRkaW5nLWVuZDowOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6dHJhbnNwYXJlbnQ7LS1ib3gtc2hhZG93Om5vbmV9XHJcbi50b3AtaGVhZGluZyBpb24taXRlbSBpb24tYXZhdGFye21hcmdpbi1sZWZ0OiA4cHg7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG5cclxuLy8gY3NzIGZvciBmb290ZXJcclxuLnN0aWNreS1mb290ZXIgLnNlbmQtaW1ne3dpZHRoOiAyNnB4O31cclxuXHJcbi5jaGF0cy1saXN0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XHJcbi5jaGF0cy1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4uY2hhdHMtbGlzdCBpb24taXRlbT5kaXZ7d2lkdGg6IDEwMCU7fVxyXG4uY2hhdC1ib3ggaW9uLWxhYmVse21hcmdpbjowO3BhZGRpbmc6NXB4IDhweDtib3JkZXItcmFkaXVzOjRweDtmb250LXNpemU6Ljc1cmVtO2NvbG9yOiAjMDAwO3doaXRlLXNwYWNlOiBub3JtYWw7ZGlzcGxheTogaW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4uY2hhdC1ib3ggc3Bhbntjb2xvcjogIzkwOTA5MDtmb250LXNpemU6IDAuNzByZW07ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO31cclxuLmNoYXQtbGVmdCBpb24tbGFiZWx7YmFja2dyb3VuZDojZTNlNmU2O21hcmdpbi1yaWdodDogNTVweDt9XHJcbi5jaGF0LWxlZnQgc3BhbntqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7fVxyXG4uY2hhdC1yaWdodCBpb24tbGFiZWx7YmFja2dyb3VuZDojMzJhYjlmO2NvbG9yOiAjRkZGO21hcmdpbi1sZWZ0OiA1NXB4O31cclxuLmNoYXQtcmlnaHQgc3BhbntqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO31cclxuLmNoYXQtZHVyYXRpb257cG9zaXRpb246IHJlbGF0aXZlO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jaGF0LWR1cmF0aW9uOjphZnRlcntjb250ZW50OiAnJzt3aWR0aDogMTAwJTtoZWlnaHQ6IDFweDtiYWNrZ3JvdW5kOiAjY2NjO2Rpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC04cHg7fVxyXG4uY2hhdC1kdXJhdGlvbiBzcGFue2JhY2tncm91bmQ6ICNmOWY5Zjk7cG9zaXRpb246IHJlbGF0aXZlO3otaW5kZXg6IDk7cGFkZGluZzogMnB4IDEwcHg7Ym9yZGVyLXJhZGl1czogNHB4O31cclxuXHJcbi5pb3N7XHJcbiAgICAuY2hhdHMtbGlzdHtwYWRkaW5nLXRvcDogOHB4O3BhZGRpbmctYm90dG9tOiA4cHg7fVxyXG4gICAgLmNoYXQtYm94IHNwYW57Zm9udC1zaXplOiAwLjY1cmVtO31cclxuICAgIC5jaGF0LWJveCBzcGFuIGlvbi1pY29ue2ZvbnQtc2l6ZTogMXJlbTt9XHJcbn1cclxuLm1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbiBcclxuLm15LW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4ub3RoZXItbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4udGltZSB7XHJcbiAgY29sb3I6ICNkZmRmZGY7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuIFxyXG4ubWVzc2FnZS1pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4gXHJcbi5tc2ctYnRuIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xyXG59XHJcbi50b3AtaGVhZGVyeyAgXHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluX2NvbnRlbnR7XHJcbiAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXQtYm94e2hlaWdodDogYXV0byAhaW1wb3J0YW50O30iXX0= */");

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