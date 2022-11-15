function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-first-message-first-message-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/first-message/first-message.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/first-message/first-message.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatsFirstMessageFirstMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\" translucent>\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons slot=\"start\" class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"user-img\" [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"imageDisplay\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3 class=\"list-person\">{{nameDisplay |titlecase}}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content  class=\"main_content\" id=\"contentArea\">\r\n  <div>\r\n    <ion-list class=\"chats-list\" lines=\"none\">\r\n      <ion-item class=\"chat-box\">\r\n        <div class=\"ion-text-center\">\r\n          <ion-label class=\"message-label\">Say hi to {{nameDisplay |titlecase}}</ion-label>\r\n        </div>\r\n      </ion-item>   \r\n      <div *ngFor=\"let mess of messages\">   \r\n        <!--Private Chat-->\r\n        <ion-item class=\"chat-box chat-right\" *ngIf=\"mess.user ==  userData?.id &&  mess.sendTo == receiver_id\">\r\n          <div class=\"ion-text-end\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}<ion-icon ios=\"ios-done-all\" md=\"md-done-all\" [ngClass]=\"text-green\"></ion-icon></span>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"chat-box chat-left\" *ngIf=\"mess.user !== userData?.id && mess.sendTo == userData?.id\">\r\n          <div class=\"ion-text-start\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}</span>\r\n          </div>\r\n        </ion-item> \r\n        <!--Group Chat-->\r\n        <ion-item class=\"chat-box chat-right\" *ngIf=\"mess.user ==  userData?.id && chat_type == 3\">\r\n          <div class=\"ion-text-end\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}<ion-icon ios=\"ios-done-all\" md=\"md-done-all\" [ngClass]=\"text-green\"></ion-icon></span>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"chat-box chat-left\" *ngIf=\"mess.user !== userData?.id && chat_type == 3\">\r\n          <div class=\"ion-text-start\">\r\n            <ion-label class=\"message-label\">{{ mess.msg }}</ion-label>\r\n            <span class=\"chat-time\">{{ mess.createdAt | date:'shortTime' }}</span>\r\n          </div>\r\n        </ion-item>\r\n      </div>    \r\n    </ion-list>    \r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"sticky-footer\">\r\n  <ion-item lines=\"none\">   \r\n    <ion-textarea [(ngModel)]=\"message\" id=\"sendmessage\" placeholder=\"Type here..\"></ion-textarea>\r\n    <img src=\"../../assets/images/send.svg\" class=\"send-img\"  (click)=\"sendMessage()\">\r\n  </ion-item>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/chats/first-message/first-message-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/chats/first-message/first-message-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: FirstMessagePageRoutingModule */

  /***/
  function srcAppChatsFirstMessageFirstMessageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstMessagePageRoutingModule", function () {
      return FirstMessagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _first_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./first-message.page */
    "./src/app/chats/first-message/first-message.page.ts");

    var routes = [{
      path: '',
      component: _first_message_page__WEBPACK_IMPORTED_MODULE_3__["FirstMessagePage"]
    }];

    var FirstMessagePageRoutingModule = function FirstMessagePageRoutingModule() {
      _classCallCheck(this, FirstMessagePageRoutingModule);
    };

    FirstMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FirstMessagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chats/first-message/first-message.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/chats/first-message/first-message.module.ts ***!
    \*************************************************************/

  /*! exports provided: FirstMessagePageModule */

  /***/
  function srcAppChatsFirstMessageFirstMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstMessagePageModule", function () {
      return FirstMessagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _first_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./first-message-routing.module */
    "./src/app/chats/first-message/first-message-routing.module.ts");
    /* harmony import */


    var _first_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./first-message.page */
    "./src/app/chats/first-message/first-message.page.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var FirstMessagePageModule = function FirstMessagePageModule() {
      _classCallCheck(this, FirstMessagePageModule);
    };

    FirstMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _first_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirstMessagePageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]],
      declarations: [_first_message_page__WEBPACK_IMPORTED_MODULE_6__["FirstMessagePage"]]
    })], FirstMessagePageModule);
    /***/
  },

  /***/
  "./src/app/chats/first-message/first-message.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/chats/first-message/first-message.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatsFirstMessageFirstMessagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content {\n  background: url('chat-bg.png') repeat;\n  --background: transparent;\n  background-size: cover;\n}\n\n.icon-right-side ion-button {\n  --padding-start:0;\n  --padding-end:0;\n  --background:transparent;\n  --background-focused:transparent;\n  --background-hover:transparent;\n  --box-shadow:none;\n}\n\n.top-heading ion-item ion-avatar {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.sticky-footer .send-img {\n  width: 26px;\n}\n\n.chats-list {\n  --background:transparent;\n  background: transparent;\n}\n\n.chats-list ion-item {\n  --background:transparent;\n  background: transparent;\n  margin-bottom: 5px;\n}\n\n.chats-list ion-item > div {\n  width: 100%;\n}\n\n.chat-box {\n  height: auto !important;\n}\n\n.chat-box ion-label {\n  margin: 0;\n  padding: 5px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  color: #000;\n  white-space: normal;\n  display: inline-block;\n  line-height: 1.5;\n}\n\n.chat-box span {\n  color: #909090;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n}\n\n.chat-left ion-label {\n  background: #e3e6e6;\n  margin-right: 55px;\n}\n\n.chat-left span {\n  justify-content: flex-start;\n}\n\n.chat-right ion-label {\n  background: #32ab9f;\n  color: #FFF;\n  margin-left: 55px;\n}\n\n.chat-right span {\n  justify-content: flex-end;\n}\n\n.chat-duration {\n  position: relative;\n  text-align: center;\n}\n\n.chat-duration::after {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  background: #ccc;\n  display: block;\n  position: relative;\n  top: -8px;\n}\n\n.chat-duration span {\n  background: #f9f9f9;\n  position: relative;\n  z-index: 9;\n  padding: 2px 10px;\n  border-radius: 4px;\n}\n\n.ios .chats-list {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.ios .chat-box span {\n  font-size: 0.65rem;\n}\n\n.ios .chat-box span ion-icon {\n  font-size: 1rem;\n}\n\n.main_content {\n  max-height: calc(100vh - 115px);\n}\n\n.message-label {\n  white-space: pre-wrap !important;\n  text-align: left;\n}\n\n.top-header {\n  top: 10px !important;\n  height: 60px !important;\n  max-height: 60px !important;\n}\n\n.main_content {\n  top: 70px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvZmlyc3QtbWVzc2FnZS9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcY2hhdHNcXGZpcnN0LW1lc3NhZ2VcXGZpcnN0LW1lc3NhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0cy9maXJzdC1tZXNzYWdlL2ZpcnN0LW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMscUNBQUE7RUFBNEQseUJBQUE7RUFBMEIsc0JBQUE7QUNJcEc7O0FESEE7RUFBNEIsaUJBQUE7RUFBa0IsZUFBQTtFQUFnQix3QkFBQTtFQUF5QixnQ0FBQTtFQUFpQyw4QkFBQTtFQUErQixpQkFBQTtBQ1l2Sjs7QURYQTtFQUFpQyxnQkFBQTtFQUFpQixpQkFBQTtBQ2dCbEQ7O0FEYkE7RUFBeUIsV0FBQTtBQ2lCekI7O0FEZkE7RUFBWSx3QkFBQTtFQUF5Qix1QkFBQTtBQ29CckM7O0FEbkJBO0VBQXFCLHdCQUFBO0VBQXlCLHVCQUFBO0VBQXdCLGtCQUFBO0FDeUJ0RTs7QUR4QkE7RUFBeUIsV0FBQTtBQzRCekI7O0FEM0JBO0VBQVUsdUJBQUE7QUMrQlY7O0FEOUJBO0VBQW9CLFNBQUE7RUFBUyxnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixrQkFBQTtFQUFpQixXQUFBO0VBQVksbUJBQUE7RUFBb0IscUJBQUE7RUFBc0IsZ0JBQUE7QUN5Q3RJOztBRHhDQTtFQUFlLGNBQUE7RUFBZSxpQkFBQTtFQUFtQixhQUFBO0VBQWMsbUJBQUE7QUMrQy9EOztBRDlDQTtFQUFxQixtQkFBQTtFQUFtQixrQkFBQTtBQ21EeEM7O0FEbERBO0VBQWdCLDJCQUFBO0FDc0RoQjs7QURyREE7RUFBc0IsbUJBQUE7RUFBbUIsV0FBQTtFQUFZLGlCQUFBO0FDMkRyRDs7QUQxREE7RUFBaUIseUJBQUE7QUM4RGpCOztBRDdEQTtFQUFlLGtCQUFBO0VBQW1CLGtCQUFBO0FDa0VsQzs7QURqRUE7RUFBc0IsV0FBQTtFQUFZLFdBQUE7RUFBWSxXQUFBO0VBQVksZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLFNBQUE7QUMyRTdHOztBRDFFQTtFQUFvQixtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsaUJBQUE7RUFBa0Isa0JBQUE7QUNrRnhGOztBRC9FSTtFQUFZLGdCQUFBO0VBQWlCLG1CQUFBO0FDb0ZqQzs7QURuRkk7RUFBZSxrQkFBQTtBQ3NGbkI7O0FEckZJO0VBQXdCLGVBQUE7QUN3RjVCOztBRHJGQTtFQUFjLCtCQUFBO0FDeUZkOztBRHhGQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUMyRko7O0FEekZBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDNEZKOztBRDFGQTtFQUNJLG9CQUFBO0FDNkZKIiwiZmlsZSI6InNyYy9hcHAvY2hhdHMvZmlyc3QtbWVzc2FnZS9maXJzdC1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnR7YmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hhdC1iZy5wbmcpIHJlcGVhdDsgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO31cclxuLmljb24tcmlnaHQtc2lkZSBpb24tYnV0dG9uey0tcGFkZGluZy1zdGFydDowOy0tcGFkZGluZy1lbmQ6MDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOnRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzpub25lfVxyXG4udG9wLWhlYWRpbmcgaW9uLWl0ZW0gaW9uLWF2YXRhcnttYXJnaW4tbGVmdDogOHB4O21hcmdpbi1yaWdodDogOHB4O31cclxuXHJcbi8vIGNzcyBmb3IgZm9vdGVyXHJcbi5zdGlja3ktZm9vdGVyIC5zZW5kLWltZ3t3aWR0aDogMjZweDt9XHJcblxyXG4uY2hhdHMtbGlzdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxyXG4uY2hhdHMtbGlzdCBpb24taXRlbXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuLmNoYXRzLWxpc3QgaW9uLWl0ZW0+ZGl2e3dpZHRoOiAxMDAlO31cclxuLmNoYXQtYm94e2hlaWdodDogYXV0byAhaW1wb3J0YW50O31cclxuLmNoYXQtYm94IGlvbi1sYWJlbHttYXJnaW46MDtwYWRkaW5nOjVweCA4cHg7Ym9yZGVyLXJhZGl1czo0cHg7Zm9udC1zaXplOi43NXJlbTtjb2xvcjogIzAwMDt3aGl0ZS1zcGFjZTogbm9ybWFsO2Rpc3BsYXk6IGlubGluZS1ibG9jaztsaW5lLWhlaWdodDogMS41O31cclxuLmNoYXQtYm94IHNwYW57Y29sb3I6ICM5MDkwOTA7Zm9udC1zaXplOiAwLjcwcmVtO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi5jaGF0LWxlZnQgaW9uLWxhYmVse2JhY2tncm91bmQ6I2UzZTZlNjttYXJnaW4tcmlnaHQ6IDU1cHg7fVxyXG4uY2hhdC1sZWZ0IHNwYW57anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O31cclxuLmNoYXQtcmlnaHQgaW9uLWxhYmVse2JhY2tncm91bmQ6IzMyYWI5Zjtjb2xvcjogI0ZGRjttYXJnaW4tbGVmdDogNTVweDt9XHJcbi5jaGF0LXJpZ2h0IHNwYW57anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDt9XHJcbi5jaGF0LWR1cmF0aW9ue3Bvc2l0aW9uOiByZWxhdGl2ZTt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uY2hhdC1kdXJhdGlvbjo6YWZ0ZXJ7Y29udGVudDogJyc7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxcHg7YmFja2dyb3VuZDogI2NjYztkaXNwbGF5OiBibG9jaztwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtOHB4O31cclxuLmNoYXQtZHVyYXRpb24gc3BhbntiYWNrZ3JvdW5kOiAjZjlmOWY5O3Bvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiA5O3BhZGRpbmc6IDJweCAxMHB4O2JvcmRlci1yYWRpdXM6IDRweDt9XHJcblxyXG4uaW9ze1xyXG4gICAgLmNoYXRzLWxpc3R7cGFkZGluZy10b3A6IDhweDtwYWRkaW5nLWJvdHRvbTogOHB4O31cclxuICAgIC5jaGF0LWJveCBzcGFue2ZvbnQtc2l6ZTogMC42NXJlbTt9XHJcbiAgICAuY2hhdC1ib3ggc3BhbiBpb24taWNvbntmb250LXNpemU6IDFyZW07fVxyXG59XHJcblxyXG4ubWFpbl9jb250ZW50e21heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTVweCk7fVxyXG4ubWVzc2FnZS1sYWJlbHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udG9wLWhlYWRlcntcclxuICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1haW5fY29udGVudHtcclxuICAgIHRvcDogNzBweCAhaW1wb3J0YW50O1xyXG59IiwiLm1haW5fY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NoYXQtYmcucG5nKSByZXBlYXQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pY29uLXJpZ2h0LXNpZGUgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDowO1xuICAtLXBhZGRpbmctZW5kOjA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjp0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi50b3AtaGVhZGluZyBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5zdGlja3ktZm9vdGVyIC5zZW5kLWltZyB7XG4gIHdpZHRoOiAyNnB4O1xufVxuXG4uY2hhdHMtbGlzdCB7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jaGF0cy1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2hhdHMtbGlzdCBpb24taXRlbSA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hhdC1ib3gge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmNoYXQtYm94IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjMDAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5jaGF0LWJveCBzcGFuIHtcbiAgY29sb3I6ICM5MDkwOTA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdC1sZWZ0IGlvbi1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICNlM2U2ZTY7XG4gIG1hcmdpbi1yaWdodDogNTVweDtcbn1cblxuLmNoYXQtbGVmdCBzcGFuIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY2hhdC1yaWdodCBpb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMzJhYjlmO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59XG5cbi5jaGF0LXJpZ2h0IHNwYW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY2hhdC1kdXJhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hhdC1kdXJhdGlvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLThweDtcbn1cblxuLmNoYXQtZHVyYXRpb24gc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmlvcyAuY2hhdHMtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uaW9zIC5jaGF0LWJveCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xufVxuLmlvcyAuY2hhdC1ib3ggc3BhbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1haW5fY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTVweCk7XG59XG5cbi5tZXNzYWdlLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3AtaGVhZGVyIHtcbiAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluX2NvbnRlbnQge1xuICB0b3A6IDcwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chats/first-message/first-message.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/chats/first-message/first-message.page.ts ***!
    \***********************************************************/

  /*! exports provided: FirstMessagePage */

  /***/
  function srcAppChatsFirstMessageFirstMessagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstMessagePage", function () {
      return FirstMessagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");

    var FirstMessagePage = /*#__PURE__*/function () {
      function FirstMessagePage(actRoute, peopleView, navCtrl, socket, chatservice, commonService, programService) {
        _classCallCheck(this, FirstMessagePage);

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

      _createClass(FirstMessagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // connect ot socket.io
          // this.socket.connect();
          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.actRoute.paramMap.subscribe(function (params) {
            _this.chat_type = parseInt(params.get('chat_type'));
            console.log("this.chat_type :" + _this.chat_type); // chat_type = 1:consultant,2:user,3:program

            if (_this.chat_type == 1) {
              _this.receiver_id = params.get('id');

              _this.peopleView.getUserData({
                'userId': _this.receiver_id
              }).subscribe(function (data) {
                _this.nameDisplay = data.userData.user_name;
                _this.imageDisplay = _this.profilePicUrl + data.userData.bios.profile_pic;
              });
            } else if (_this.chat_type == 2) {
              _this.receiver_id = params.get('id');

              _this.peopleView.getUserData({
                'userId': _this.receiver_id
              }).subscribe(function (data) {
                _this.nameDisplay = data.userData.user_name;
                _this.imageDisplay = _this.profilePicUrl + data.userData.bios.profile_pic;
              });
            } else if (_this.chat_type == 3) {
              _this.receiver_id = params.get('id');

              _this.programService.getProgramById({
                "programId": _this.receiver_id
              }).subscribe(function (data) {
                _this.programDetail = data.programData;
                _this.nameDisplay = data.programData.title;

                if (data.programData.image_path) {
                  _this.programDetail.img_array = data.programData.image_path.split(',');
                  _this.imageDisplay = _this.url + _this.programDetail.img_array[0];
                }
              });
            }

            if (_this.chat_type != 3) {
              //Private chat
              console.log("private chat type : firstMessage"); // this.socket.emit('set-name', this.userData.id,'firstMessage');
              // this.socket.emit("addUser", this.userData.id,this.receiver_id);
              // this.socket.emit("newUser", [this.userData.id,this.receiver_id, this.room]);          
            } else {
              //Group chat
              console.log("group chat type : programMessage"); // this.socket.emit('set-name', this.userData.id,'programMessage');
              // this.socket.emit("newGroup", this.userData.id,this.requestId, this.room);
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          setTimeout(function () {
            _this2.sendmessage.setFocus();
          }, 400);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          if (this.chat_type != 3) {
            console.log('private message');
            this.socket.fromEvent('message').subscribe(function (receiveMessageArr) {
              console.log("private receiveMessageArr:" + JSON.stringify(receiveMessageArr));

              _this3.messages.push(receiveMessageArr);

              _this3.contentArea.scrollToBottom();
            });
          } else {
            console.log('group message');
            this.socket.fromEvent('groupmessage').subscribe(function (receiveMessageArr) {
              console.log("GroupreceiveMessageArr:" + JSON.stringify(receiveMessageArr));

              _this3.messages.push(receiveMessageArr);

              _this3.contentArea.scrollToBottom();
            });
          }
        }
      }, {
        key: "createRoom",
        value: function createRoom(massa, blocks) {
          var _this4 = this;

          if (this.chat_type != 3) {
            var chatType = 1;
          } else {
            var chatType = this.chat_type;
          }

          this.chatservice.sendChatRequest({
            'type': chatType,
            'peopleSelect': [this.receiver_id]
          }).subscribe(function (data) {
            if (data.status == 'success') {
              _this4.room = data.room;
              _this4.requestId = data.request_id;
              _this4.createdRoom = true;
              console.log("Room:" + _this4.room);
              console.log("requestId:" + _this4.requestId);

              if (_this4.chat_type == 3) {
                _this4.socket.emit("newGroup", _this4.userData.id, _this4.requestId, _this4.room);

                _this4.socket.emit('send-group-message', {
                  text: massa
                });
              } else {
                _this4.socket.emit("addUser", _this4.userData.id, _this4.receiver_id);

                _this4.socket.emit("newUser", [_this4.userData.id, _this4.receiver_id, _this4.room]);

                _this4.socket.emit('send-message', {
                  text: massa,
                  blockstatus: blocks,
                  requestId: _this4.requestId
                });
              }
            }
          }, function (err) {
            _this4.commonService.presentToast("Couldnt load data, Something went wrong.");
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          if (this.message != '' && this.message != null) {
            if (!this.createdRoom) {
              this.createRoom(this.message, this.blockstatus);
            } else if (this.createdRoom && this.chat_type == 3) {
              //Group Chat
              console.log("Group:" + this.chat_type);
              this.socket.emit('send-group-message', {
                text: this.message
              });
            } else if (this.createdRoom && this.requestId > 0 && this.chat_type != 3) {
              //Private Chat
              console.log("Private:" + this.chat_type);
              this.socket.emit('send-message', {
                text: this.message,
                blockstatus: this.blockstatus,
                requestId: this.requestId
              });
            }

            this.message = '';
          }

          this.sendmessage.setFocus();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          // this.socket.disconnect();
          this.messages = [];
          this.chat_type = '';
          this.navCtrl.back();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          // this.socket.disconnect();
          this.messages = [];
          this.chat_type = '';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // this.socket.disconnect();
          this.messages = [];
          this.chat_type = '';
        }
      }]);

      return FirstMessagePage;
    }();

    FirstMessagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], FirstMessagePage.prototype, "contentArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])], FirstMessagePage.prototype, "sendmessage", void 0);
    FirstMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-first-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./first-message.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/first-message/first-message.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./first-message.page.scss */
      "./src/app/chats/first-message/first-message.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"], _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _services_program_service__WEBPACK_IMPORTED_MODULE_9__["ProgramService"]])], FirstMessagePage);
    /***/
  }
}]);
//# sourceMappingURL=chats-first-message-first-message-module-es5.js.map