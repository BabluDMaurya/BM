function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-history-payment-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/payment-history/payment-history.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/payment-history/payment-history.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsPaymentHistoryPaymentHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Payment History</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <!-- <ion-card *ngFor=\"let peoplelist of [].constructor(15)\" class=\"ion-no-margin\"> -->\r\n    <ion-card *ngFor=\"let peoplelist of paymentData\" class=\"ion-no-margin\">\r\n    <ion-item lines=\"none\" [routerLink]=\"['/payment-review/',peoplelist.id]\" detail=\"false\">\r\n      <ion-label>\r\n        <h3 class=\"list-person\">{{peoplelist.user_name}}</h3>\r\n        <span class=\"list-name d-block\">{{peoplelist.title}}</span>\r\n        <span class=\"list-name\">{{peoplelist.created_at | date :'medium'}}</span>\r\n      </ion-label>\r\n      <span class=\"list-name text-green\" slot=\"end\">$ {{peoplelist.amount}}</span>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/settings/payment-history/payment-history-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/settings/payment-history/payment-history-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: PaymentHistoryPageRoutingModule */

  /***/
  function srcAppSettingsPaymentHistoryPaymentHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentHistoryPageRoutingModule", function () {
      return PaymentHistoryPageRoutingModule;
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


    var _payment_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment-history.page */
    "./src/app/settings/payment-history/payment-history.page.ts");

    var routes = [{
      path: '',
      component: _payment_history_page__WEBPACK_IMPORTED_MODULE_3__["PaymentHistoryPage"]
    }];

    var PaymentHistoryPageRoutingModule = function PaymentHistoryPageRoutingModule() {
      _classCallCheck(this, PaymentHistoryPageRoutingModule);
    };

    PaymentHistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentHistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/settings/payment-history/payment-history.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/settings/payment-history/payment-history.module.ts ***!
    \********************************************************************/

  /*! exports provided: PaymentHistoryPageModule */

  /***/
  function srcAppSettingsPaymentHistoryPaymentHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentHistoryPageModule", function () {
      return PaymentHistoryPageModule;
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


    var _payment_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-history-routing.module */
    "./src/app/settings/payment-history/payment-history-routing.module.ts");
    /* harmony import */


    var _payment_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment-history.page */
    "./src/app/settings/payment-history/payment-history.page.ts");

    var PaymentHistoryPageModule = function PaymentHistoryPageModule() {
      _classCallCheck(this, PaymentHistoryPageModule);
    };

    PaymentHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentHistoryPageRoutingModule"]],
      declarations: [_payment_history_page__WEBPACK_IMPORTED_MODULE_6__["PaymentHistoryPage"]]
    })], PaymentHistoryPageModule);
    /***/
  },

  /***/
  "./src/app/settings/payment-history/payment-history.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/settings/payment-history/payment-history.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsPaymentHistoryPaymentHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 5px solid #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvcGF5bWVudC1oaXN0b3J5L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxzZXR0aW5nc1xccGF5bWVudC1oaXN0b3J5XFxwYXltZW50LWhpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9wYXltZW50LWhpc3RvcnkvcGF5bWVudC1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLGdDQUFBO0FDSTNDIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvcGF5bWVudC1oaXN0b3J5L3BheW1lbnQtaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtib3JkZXItcmFkaXVzOiAwO2JveC1zaGFkb3c6IG5vbmU7Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmN2Y3Zjc7fSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmN2Y3Zjc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/settings/payment-history/payment-history.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/settings/payment-history/payment-history.page.ts ***!
    \******************************************************************/

  /*! exports provided: PaymentHistoryPage */

  /***/
  function srcAppSettingsPaymentHistoryPaymentHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentHistoryPage", function () {
      return PaymentHistoryPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/payments.service */
    "./src/app/services/payments.service.ts");

    var PaymentHistoryPage = /*#__PURE__*/function () {
      function PaymentHistoryPage(navCtrl, paymentService) {
        _classCallCheck(this, PaymentHistoryPage);

        this.navCtrl = navCtrl;
        this.paymentService = paymentService;
      }

      _createClass(PaymentHistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.paymentService.getPaymentHistory().subscribe(function (data) {
            console.log(data);
            console.log(data.data);
            _this.paymentData = data.data;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return PaymentHistoryPage;
    }();

    PaymentHistoryPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_payments_service__WEBPACK_IMPORTED_MODULE_3__["PaymentsService"]
      }];
    };

    PaymentHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/payment-history/payment-history.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment-history.page.scss */
      "./src/app/settings/payment-history/payment-history.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_payments_service__WEBPACK_IMPORTED_MODULE_3__["PaymentsService"]])], PaymentHistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=payment-history-payment-history-module-es5.js.map