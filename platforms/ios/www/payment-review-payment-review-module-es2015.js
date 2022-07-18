(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-review-payment-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/payment-review/payment-review.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/payment-review/payment-review.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Payment History</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\"> \r\n  <ion-card class=\"ion-no-margin\">\r\n  <ion-item slot=\"center\">\r\n    <ion-label>Program Name</ion-label>\r\n    <ion-text>{{programName}}</ion-text>\r\n  </ion-item>\r\n  <ion-item slot=\"center\">\r\n    <ion-label>Amount Paid</ion-label>\r\n    <ion-text>$ {{amount}}</ion-text>\r\n  </ion-item>\r\n  <ion-item slot=\"center\">\r\n    <ion-label>Transaction Id</ion-label>\r\n    <ion-text>{{transactionId}}</ion-text>\r\n  </ion-item>\r\n\r\n  <ion-item slot=\"center\">\r\n    <ion-label>Payment Date</ion-label>\r\n    <ion-text>{{paymentDate | date :'medium'}}</ion-text>\r\n  </ion-item>\r\n</ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/settings/payment-review/payment-review-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/settings/payment-review/payment-review-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: PaymentReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReviewPageRoutingModule", function() { return PaymentReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-review.page */ "./src/app/settings/payment-review/payment-review.page.ts");




const routes = [
    {
        path: '',
        component: _payment_review_page__WEBPACK_IMPORTED_MODULE_3__["PaymentReviewPage"]
    }
];
let PaymentReviewPageRoutingModule = class PaymentReviewPageRoutingModule {
};
PaymentReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentReviewPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/payment-review/payment-review.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/payment-review/payment-review.module.ts ***!
  \******************************************************************/
/*! exports provided: PaymentReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReviewPageModule", function() { return PaymentReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-review-routing.module */ "./src/app/settings/payment-review/payment-review-routing.module.ts");
/* harmony import */ var _payment_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-review.page */ "./src/app/settings/payment-review/payment-review.page.ts");







let PaymentReviewPageModule = class PaymentReviewPageModule {
};
PaymentReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentReviewPageRoutingModule"]
        ],
        declarations: [_payment_review_page__WEBPACK_IMPORTED_MODULE_6__["PaymentReviewPage"]]
    })
], PaymentReviewPageModule);



/***/ }),

/***/ "./src/app/settings/payment-review/payment-review.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/settings/payment-review/payment-review.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 5px solid #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvcGF5bWVudC1yZXZpZXcvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcc2V0dGluZ3NcXHBheW1lbnQtcmV2aWV3XFxwYXltZW50LXJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3BheW1lbnQtcmV2aWV3L3BheW1lbnQtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLGdDQUFBO0FDSTNDIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvcGF5bWVudC1yZXZpZXcvcGF5bWVudC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7Ym9yZGVyLXJhZGl1czogMDtib3gtc2hhZG93OiBub25lO2JvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjdmN2Y3O30iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjdmN2Y3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/settings/payment-review/payment-review.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/settings/payment-review/payment-review.page.ts ***!
  \****************************************************************/
/*! exports provided: PaymentReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReviewPage", function() { return PaymentReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/payments.service */ "./src/app/services/payments.service.ts");





let PaymentReviewPage = class PaymentReviewPage {
    constructor(navCtrl, paymentService, actRoute) {
        this.navCtrl = navCtrl;
        this.paymentService = paymentService;
        this.actRoute = actRoute;
        this.actRoute.paramMap.subscribe((params) => {
            console.log(params);
            this.paymentID = params.get('id');
        });
    }
    ngOnInit() {
        this.paymentService.getPaymentDetails({ 'id': this.paymentID }).subscribe(data => {
            console.log(data.data[0].programs);
            this.paymentData = data.data[0];
            this.programName = data.data[0].programs[0].title;
            this.amount = data.data[0].amount;
            this.transactionId = data.data[0].transaction_id;
            this.paymentDate = data.data[0].created_at;
            console.log(this.paymentData);
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
PaymentReviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_payments_service__WEBPACK_IMPORTED_MODULE_4__["PaymentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PaymentReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/payment-review/payment-review.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-review.page.scss */ "./src/app/settings/payment-review/payment-review.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_payments_service__WEBPACK_IMPORTED_MODULE_4__["PaymentsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PaymentReviewPage);



/***/ })

}]);
//# sourceMappingURL=payment-review-payment-review-module-es2015.js.map