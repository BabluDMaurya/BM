(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paypal-paypal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\n  <ion-list class=\"top-heading three-block\">\n    <ion-item slot=\"start\">\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n      </ion-buttons>\n    </ion-item>\n    <ion-item slot=\"center\">\n      <ion-label>Payment</ion-label>\n    </ion-item>\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\n      <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" slot=\"end\"></ion-icon> -->\n    </ion-item>\n  </ion-list>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        Use this Pay button in your app's payment page with the attached logic.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card class=\"welcome-card\">\n    <img src=\"{{url}}{{programImage}}\" *ngIf=\"programImage\">\n    <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!programImage\">\n    <ion-card-header>\n      <ion-row>\n        <ion-col>\n          Program Name :\n        </ion-col>\n        <ion-col>\n          {{pgtitle}}\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          Total Payment\n        </ion-col>\n        <ion-col>\n          {{currencyIcon}}{{paymentAmount}}\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button expand=\"full\" color=\"success\" (click)=\"payWithPaypal()\">Pay with PayPal</ion-button>\n    </ion-card-content>\n  </ion-card>  \n</ion-content>");

/***/ }),

/***/ "./src/app/paypal/paypal-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/paypal/paypal-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PaypalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageRoutingModule", function() { return PaypalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");




const routes = [
    {
        path: '',
        component: _paypal_page__WEBPACK_IMPORTED_MODULE_3__["PaypalPage"]
    }
];
let PaypalPageRoutingModule = class PaypalPageRoutingModule {
};
PaypalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaypalPageRoutingModule);



/***/ }),

/***/ "./src/app/paypal/paypal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.module.ts ***!
  \*****************************************/
/*! exports provided: PaypalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function() { return PaypalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paypal-routing.module */ "./src/app/paypal/paypal-routing.module.ts");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");







let PaypalPageModule = class PaypalPageModule {
};
PaypalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaypalPageRoutingModule"]
        ],
        declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]]
    })
], PaypalPageModule);



/***/ }),

/***/ "./src/app/paypal/paypal.page.scss":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheXBhbC9wYXlwYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/paypal/paypal.page.ts":
/*!***************************************!*\
  !*** ./src/app/paypal/paypal.page.ts ***!
  \***************************************/
/*! exports provided: PaypalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPage", function() { return PaypalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");








let PaypalPage = class PaypalPage {
    constructor(router, commonService, navCtrl, payPal, actRoute, programService) {
        this.router = router;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.payPal = payPal;
        this.actRoute = actRoute;
        this.programService = programService;
        this.currency = 'USD';
        this.currencyIcon = '$';
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.pgid = params.get('pgid');
        });
    }
    ionViewWillEnter() {
        this.programService.getProgramById({ "programId": this.pgid }).subscribe(data => {
            console.log(data.programData);
            this.pgtitle = data.programData.title;
            this.programDetail = data.programData;
            if (this.programDetail.payment_type == 'Paid') {
                this.paymentAmount = this.programDetail.program_fee;
            }
            else if (this.programDetail.payment_type == 'Free') {
                this.paymentAmount = this.programDetail.payment_type;
            }
            if (data.programData.image_path) {
                this.programDetail.img_array = data.programData.image_path.split(',');
                this.programImage = this.programDetail.img_array[0];
            }
        });
    }
    goBack() {
        // this.navCtrl.back();
        this.router.navigateByUrl('/tabs/program');
    }
    payWithPaypal() {
        console.log("Pay ????");
        var fileData = {
            pgid: this.pgid,
            pgname: this.pgtitle,
            pgamount: this.paymentAmount,
            pgimg: this.programImage,
        };
        this.payPal.init({
            PayPalEnvironmentProduction: 'AUfbdB9-bSHraLUqX148NzQJmJdtZtSan0MTC_wUF-eCgKyhOxN1Qrgyj4w_fYnXu4q34TTMOKvTLbEc',
            PayPalEnvironmentSandbox: 'AVSNND2JZDDR4lO4D-IuX-EuO4td1zzxzzXL7hkatv0CnBQTK43E5PnzIWC0QbPD1gzlx5Cwwla20oc7'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"](this.paymentAmount, this.currency, 'Description', 'sale');
                this.payPal.renderSinglePaymentUI(payment).then(() => {
                    // Successfully paid
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                    // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
                }, () => {
                    // Error or render dialog closed without being successful
                    // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
                });
            }, () => {
                // Error in configuration
                // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
            // this.commonService.presentModal(ThankyouComponent, 'fullModal', fileData);
        });
    }
};
PaypalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"] }
];
PaypalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paypal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paypal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paypal.page.scss */ "./src/app/paypal/paypal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"]])
], PaypalPage);



/***/ })

}]);
//# sourceMappingURL=paypal-paypal-module-es2015.js.map