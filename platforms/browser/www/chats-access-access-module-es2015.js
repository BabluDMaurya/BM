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
/* harmony default export */ __webpack_exports__["default"] = (".main_content {\n  background: url('chat-bg.png') repeat;\n  --background: transparent;\n  background-size: cover; }\n\n.icon-right-side ion-button {\n  --padding-start:0;\n  --padding-end:0;\n  --background:transparent;\n  --background-focused:transparent;\n  --background-hover:transparent;\n  --box-shadow:none; }\n\n.top-heading ion-item ion-avatar {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n.sticky-footer .send-img {\n  width: 26px; }\n\n.chats-list {\n  --background:transparent;\n  background: transparent; }\n\n.chats-list ion-item {\n  --background:transparent;\n  background: transparent;\n  margin-bottom: 5px; }\n\n.chats-list ion-item > div {\n  width: 100%; }\n\n.chat-box ion-label {\n  margin: 0;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: .75rem;\n  color: #000;\n  white-space: normal;\n  display: inline-block;\n  line-height: 1.5; }\n\n.chat-box span {\n  color: #909090;\n  font-size: 0.70rem;\n  display: flex;\n  align-items: center; }\n\n.chat-left ion-label {\n  background: #e3e6e6;\n  margin-right: 55px; }\n\n.chat-left span {\n  justify-content: flex-start; }\n\n.chat-right ion-label {\n  background: #32ab9f;\n  color: #FFF;\n  margin-left: 55px; }\n\n.chat-right span {\n  justify-content: flex-end; }\n\n.chat-duration {\n  position: relative;\n  text-align: center; }\n\n.chat-duration::after {\n  content: '';\n  width: 100%;\n  height: 1px;\n  background: #ccc;\n  display: block;\n  position: relative;\n  top: -8px; }\n\n.chat-duration span {\n  background: #f9f9f9;\n  position: relative;\n  z-index: 9;\n  padding: 2px 10px;\n  border-radius: 4px; }\n\n.ios .chats-list {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.ios .chat-box span {\n  font-size: 0.65rem; }\n\n.ios .chat-box span ion-icon {\n  font-size: 1rem; }\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap; }\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff; }\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff; }\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small; }\n\n.message-input {\n  margin-top: 0px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff; }\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em; }\n\n.top-header {\n  height: 60px !important;\n  max-height: 60px !important; }\n\n.main_content {\n  top: 60px !important; }\n\n.chat-box {\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvYWNjZXNzL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcY2hhdHNcXGFjY2Vzc1xcYWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFjLHFDQUEwRDtFQUFFLHlCQUFhO0VBQWEsc0JBQXNCLEVBQUE7O0FBQzFIO0VBQTRCLGlCQUFnQjtFQUFFLGVBQWM7RUFBRSx3QkFBYTtFQUFZLGdDQUFxQjtFQUFZLDhCQUFtQjtFQUFZLGlCQUFhLEVBQUE7O0FBQ3BLO0VBQWlDLGdCQUFnQjtFQUFDLGlCQUFpQixFQUFBOztBQUduRTtFQUF5QixXQUFXLEVBQUE7O0FBRXBDO0VBQVksd0JBQWE7RUFBWSx1QkFBdUIsRUFBQTs7QUFDNUQ7RUFBcUIsd0JBQWE7RUFBWSx1QkFBdUI7RUFBQyxrQkFBa0IsRUFBQTs7QUFDeEY7RUFBeUIsV0FBVyxFQUFBOztBQUNwQztFQUFvQixTQUFRO0VBQUMsZ0JBQWU7RUFBQyxrQkFBaUI7RUFBQyxpQkFBZ0I7RUFBQyxXQUFXO0VBQUMsbUJBQW1CO0VBQUMscUJBQXFCO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3RKO0VBQWUsY0FBYztFQUFDLGtCQUFrQjtFQUFDLGFBQWE7RUFBQyxtQkFBbUIsRUFBQTs7QUFDbEY7RUFBcUIsbUJBQWtCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzFEO0VBQWdCLDJCQUEyQixFQUFBOztBQUMzQztFQUFzQixtQkFBa0I7RUFBQyxXQUFXO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ3RFO0VBQWlCLHlCQUF5QixFQUFBOztBQUMxQztFQUFlLGtCQUFrQjtFQUFDLGtCQUFrQixFQUFBOztBQUNwRDtFQUFzQixXQUFXO0VBQUMsV0FBVztFQUFDLFdBQVc7RUFBQyxnQkFBZ0I7RUFBQyxjQUFjO0VBQUMsa0JBQWtCO0VBQUMsU0FBUyxFQUFBOztBQUN0SDtFQUFvQixtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxVQUFVO0VBQUMsaUJBQWlCO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTFHO0VBQ2dCLGdCQUFnQjtFQUFDLG1CQUFtQixFQUFBOztBQURwRDtFQUVtQixrQkFBa0IsRUFBQTs7QUFGckM7RUFHNEIsZUFBZSxFQUFBOztBQUUzQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFDQUFxQztFQUNyQyxXQUFXLEVBQUE7O0FBR2I7RUFDRSxzQ0FBc0M7RUFDdEMsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBZ0I7RUFDaEIsb0JBQWMsRUFBQTs7QUFFaEI7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRXRCO0VBQVUsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0cy9hY2Nlc3MvYWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnR7YmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hhdC1iZy5wbmcpIHJlcGVhdDsgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO31cclxuLmljb24tcmlnaHQtc2lkZSBpb24tYnV0dG9uey0tcGFkZGluZy1zdGFydDowOy0tcGFkZGluZy1lbmQ6MDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOnRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzpub25lfVxyXG4udG9wLWhlYWRpbmcgaW9uLWl0ZW0gaW9uLWF2YXRhcnttYXJnaW4tbGVmdDogOHB4O21hcmdpbi1yaWdodDogOHB4O31cclxuXHJcbi8vIGNzcyBmb3IgZm9vdGVyXHJcbi5zdGlja3ktZm9vdGVyIC5zZW5kLWltZ3t3aWR0aDogMjZweDt9XHJcblxyXG4uY2hhdHMtbGlzdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxyXG4uY2hhdHMtbGlzdCBpb24taXRlbXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuLmNoYXRzLWxpc3QgaW9uLWl0ZW0+ZGl2e3dpZHRoOiAxMDAlO31cclxuLmNoYXQtYm94IGlvbi1sYWJlbHttYXJnaW46MDtwYWRkaW5nOjVweCA4cHg7Ym9yZGVyLXJhZGl1czo0cHg7Zm9udC1zaXplOi43NXJlbTtjb2xvcjogIzAwMDt3aGl0ZS1zcGFjZTogbm9ybWFsO2Rpc3BsYXk6IGlubGluZS1ibG9jaztsaW5lLWhlaWdodDogMS41O31cclxuLmNoYXQtYm94IHNwYW57Y29sb3I6ICM5MDkwOTA7Zm9udC1zaXplOiAwLjcwcmVtO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi5jaGF0LWxlZnQgaW9uLWxhYmVse2JhY2tncm91bmQ6I2UzZTZlNjttYXJnaW4tcmlnaHQ6IDU1cHg7fVxyXG4uY2hhdC1sZWZ0IHNwYW57anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O31cclxuLmNoYXQtcmlnaHQgaW9uLWxhYmVse2JhY2tncm91bmQ6IzMyYWI5Zjtjb2xvcjogI0ZGRjttYXJnaW4tbGVmdDogNTVweDt9XHJcbi5jaGF0LXJpZ2h0IHNwYW57anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDt9XHJcbi5jaGF0LWR1cmF0aW9ue3Bvc2l0aW9uOiByZWxhdGl2ZTt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uY2hhdC1kdXJhdGlvbjo6YWZ0ZXJ7Y29udGVudDogJyc7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxcHg7YmFja2dyb3VuZDogI2NjYztkaXNwbGF5OiBibG9jaztwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtOHB4O31cclxuLmNoYXQtZHVyYXRpb24gc3BhbntiYWNrZ3JvdW5kOiAjZjlmOWY5O3Bvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiA5O3BhZGRpbmc6IDJweCAxMHB4O2JvcmRlci1yYWRpdXM6IDRweDt9XHJcblxyXG4uaW9ze1xyXG4gICAgLmNoYXRzLWxpc3R7cGFkZGluZy10b3A6IDhweDtwYWRkaW5nLWJvdHRvbTogOHB4O31cclxuICAgIC5jaGF0LWJveCBzcGFue2ZvbnQtc2l6ZTogMC42NXJlbTt9XHJcbiAgICAuY2hhdC1ib3ggc3BhbiBpb24taWNvbntmb250LXNpemU6IDFyZW07fVxyXG59XHJcbi5tZXNzYWdlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4gXHJcbi5teS1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiBcclxuLm90aGVyLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiBcclxuLnRpbWUge1xyXG4gIGNvbG9yOiAjZGZkZmRmO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbiBcclxuLm1lc3NhZ2UtaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuIFxyXG4ubXNnLWJ0biB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcclxuICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcclxufVxyXG4udG9wLWhlYWRlcnsgIFxyXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWFpbl9jb250ZW50e1xyXG4gIHRvcDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jaGF0LWJveHtoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDt9Il19 */");

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