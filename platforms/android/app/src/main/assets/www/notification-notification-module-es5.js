function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationNotificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Notification</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\"> \r\n  <ion-segment class=\"top-segment\"  [(ngModel)]=\"notification_tabs\">\r\n    \r\n    <ion-segment-button value=\"activity\" checked>Activity</ion-segment-button>\r\n    <!-- <ion-segment-button value=\"people\" >People</ion-segment-button>\r\n    <ion-segment-button value=\"media\">Media</ion-segment-button>\r\n    <ion-segment-button value=\"program\">Program</ion-segment-button> -->\r\n    <ion-segment-button value=\"payments\">Payments</ion-segment-button>\r\n  </ion-segment> \r\n  <ion-refresher class=\"page-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>  \r\n  <div [ngSwitch]=\"notification_tabs\">   \r\n    \r\n    <div lines=\"none\" *ngSwitchCase=\"'activity'\">\r\n      <div class=\"no-data\" *ngIf=\"!mediaNotification.length > 0  && data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Data Found</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let medianoti of mediaNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"medianoti?.user?.bios?.profile_pic\" src=\"{{url}}{{medianoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!medianoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n              <h3 class=\"list-person\">{{medianoti?.user?.user_name}} <span class=\"list-name\">{{medianoti?.type}}</span></h3>\r\n              <span class=\"list-name\">{{medianoti?.description}} </span>\r\n          </ion-label>\r\n          <span class=\"notifi-right\">{{medianoti?.created_at}}</span>\r\n        </ion-item>\r\n      </ion-card>        \r\n    </div>\r\n    \r\n\r\n    <div lines=\"none\" *ngSwitchCase=\"'people'\">\r\n      <div class=\"no-data\" *ngIf=\"!peopleNotification.length > 0 && data\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Data Data</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let peoplenoti of peopleNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"peoplenoti?.user?.bios?.profile_pic\" src=\"{{url}}{{peoplenoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!peoplenoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3 class=\"list-person\">{{peoplenoti?.user?.user_name}}</h3>\r\n            <span class=\"list-name\">{{peoplenoti?.description}} </span>\r\n          </ion-label>\r\n          <span class=\"notifi-right\">{{peoplenoti?.created_at}}</span>\r\n        </ion-item> \r\n      </ion-card>       \r\n    </div> \r\n    <div lines=\"none\" *ngSwitchCase=\"'media'\">\r\n      <div class=\"no-data\" *ngIf=\"!mediaNotification.length > 0\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Data Found</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let medianoti of mediaNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"medianoti?.user?.bios?.profile_pic\" src=\"{{url}}{{medianoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!medianoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n              <h3 class=\"list-person\">{{medianoti?.user?.user_name}} <span class=\"list-name\">{{medianoti?.type}}</span></h3>\r\n              <span class=\"list-name\">{{medianoti?.description}} </span>\r\n          </ion-label>\r\n          <span class=\"notifi-right\">{{medianoti?.created_at}}</span>\r\n        </ion-item>\r\n      </ion-card>        \r\n    </div>\r\n    <div lines=\"none\" *ngSwitchCase=\"'program'\">      \r\n      <div class=\"no-data\" *ngIf=\"!programNotification.length > 0\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Data Found</p>\r\n      </div>\r\n      <ion-card *ngFor=\"let programnoti of programNotification\" class=\"ion-no-margin\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">              \r\n            <img  *ngIf = \"programnoti?.user?.bios?.profile_pic\" src=\"{{url}}{{programnoti?.user?.bios?.profile_pic}}\">\r\n            <img  *ngIf = \"!programnoti?.user?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3 class=\"list-person\">{{programnoti?.user?.user_name}} <span class=\"list-name\">{{programnoti?.type}}</span></h3>\r\n            <span class=\"list-name\">{{programnoti?.description}} </span>\r\n        </ion-label>\r\n          <ion-label class=\"ion-text-end\" slot=\"end\">\r\n            <span class=\"list-name text-green d-block\" slot=\"end\">Ended</span>\r\n            <span class=\"notifi-right\">{{programnoti?.created_at}}</span>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div> \r\n    <div *ngSwitchCase=\"'payments'\" class=\"no-data\">\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>You don't have any notifications right now.</p>\r\n    </div>\r\n  </div>\r\n  <ion-list lines=\"none\" *ngIf=\"!data\">  \r\n    <ion-card *ngFor=\"let skeleton of [].constructor(20)\" class=\"ion-no-margin\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3 class=\"list-person\"><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n          <span class=\"list-name\"><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></span>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card>    \r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/notification/notification-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/notification/notification-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationPageRoutingModule */

  /***/
  function srcAppNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
      return NotificationPageRoutingModule;
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


    var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/notification/notification.page.ts");

    var routes = [{
      path: '',
      component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }];

    var NotificationPageRoutingModule = function NotificationPageRoutingModule() {
      _classCallCheck(this, NotificationPageRoutingModule);
    };

    NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/notification/notification.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notification/notification.module.ts ***!
    \*****************************************************/

  /*! exports provided: NotificationPageModule */

  /***/
  function srcAppNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
      return NotificationPageModule;
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


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/notification/notification-routing.module.ts");
    /* harmony import */


    var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/notification/notification.page.ts");

    var NotificationPageModule = function NotificationPageModule() {
      _classCallCheck(this, NotificationPageModule);
    };

    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]],
      declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })], NotificationPageModule);
    /***/
  },

  /***/
  "./src/app/notification/notification.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/notification/notification.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationNotificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ios.item-card ion-avatar {\n  top: 8px; }\n\n.ios.item-card span.notifi-right {\n  top: 8px; }\n\nion-card {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 4px solid #f7f7f7; }\n\nion-card ion-item {\n    border-bottom: 1px solid #f7f7f7; }\n\nion-card ion-item ion-avatar {\n      position: absolute;\n      top: 0px;\n      left: 16px; }\n\nion-card ion-item ion-label {\n      white-space: normal;\n      margin-left: 55px; }\n\nion-card ion-item ion-label h3 {\n        margin-bottom: 0; }\n\nion-card ion-item span.notifi-right {\n      position: absolute;\n      top: 8px;\n      right: 8px; }\n\nion-content .no-data {\n  height: calc(100vh - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxub3RpZmljYXRpb25cXG5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBMEIsUUFBTyxFQUFBOztBQUNqQztFQUFpQyxRQUFRLEVBQUE7O0FBRXpDO0VBQVMsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsZ0NBQWdDLEVBQUE7O0FBQTNFO0lBQ2EsZ0NBQWdDLEVBQUE7O0FBRDdDO01BRW1CLGtCQUFrQjtNQUFDLFFBQVE7TUFBQyxVQUFVLEVBQUE7O0FBRnpEO01BR2tCLG1CQUFtQjtNQUFDLGlCQUFpQixFQUFBOztBQUh2RDtRQUllLGdCQUFnQixFQUFBOztBQUovQjtNQU0wQixrQkFBa0I7TUFBQyxRQUFRO01BQUMsVUFBVSxFQUFBOztBQUdoRTtFQUNhLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zLml0ZW0tY2FyZCBpb24tYXZhdGFye3RvcDo4cHh9XHJcbi5pb3MuaXRlbS1jYXJkIHNwYW4ubm90aWZpLXJpZ2h0e3RvcDogOHB4fVxyXG5cclxuaW9uLWNhcmR7Ym9yZGVyLXJhZGl1czogMDtib3gtc2hhZG93OiBub25lO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgaW9uLWl0ZW17Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICAgICAgaW9uLWF2YXRhcntwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwcHg7bGVmdDogMTZweDt9XHJcbiAgICAgICAgaW9uLWxhYmVse3doaXRlLXNwYWNlOiBub3JtYWw7bWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICAgIGgze21hcmdpbi1ib3R0b206IDA7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLm5vdGlmaS1yaWdodHtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA4cHg7cmlnaHQ6IDhweDt9XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAubm8tZGF0YXtoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7fVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/notification/notification.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/notification/notification.page.ts ***!
    \***************************************************/

  /*! exports provided: NotificationPage */

  /***/
  function srcAppNotificationNotificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
      return NotificationPage;
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


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var NotificationPage = /*#__PURE__*/function () {
      function NotificationPage(notification, navCtrl) {
        _classCallCheck(this, NotificationPage);

        this.notification = notification;
        this.navCtrl = navCtrl;
        this.notification_tabs = "activity";
        this.mediaNotification = [];
        this.peopleNotification = [];
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].profilePic;
      }

      _createClass(NotificationPage, [{
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ngOnInit();
          this.ionViewWillEnter();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          setTimeout(function () {
            _this.data = {};
          }, 2000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.notification.getNotificationOfPeople().subscribe(function (data) {
            _this2.peopleNotification = data.status;
          });
          this.notification.getNotification().subscribe(function (data) {
            _this2.mediaNotification = data.status;
          });
          this.notification.setNotification({
            'is_read': 1
          }).subscribe(function (data) {});
          this.notification.getNotificationOfProgram().subscribe(function (data) {
            _this2.programNotification = data.status;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return NotificationPage;
    }();

    NotificationPage.ctorParameters = function () {
      return [{
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.page.scss */
      "./src/app/notification/notification.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], NotificationPage);
    /***/
  }
}]);
//# sourceMappingURL=notification-notification-module-es5.js.map