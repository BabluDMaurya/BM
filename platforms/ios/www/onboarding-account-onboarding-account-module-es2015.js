(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-account-onboarding-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/onboarding-account/onboarding-account.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/onboarding-account/onboarding-account.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>onboarding-account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-button  type=\"submit\" (click) = \"createOnboardAccount()\"  expand=\"block\">Connect bank account with IntoActive.</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/settings/onboarding-account/onboarding-account-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/settings/onboarding-account/onboarding-account-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: OnboardingAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingAccountPageRoutingModule", function() { return OnboardingAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _onboarding_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-account.page */ "./src/app/settings/onboarding-account/onboarding-account.page.ts");




const routes = [
    {
        path: '',
        component: _onboarding_account_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingAccountPage"]
    }
];
let OnboardingAccountPageRoutingModule = class OnboardingAccountPageRoutingModule {
};
OnboardingAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/onboarding-account/onboarding-account.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/settings/onboarding-account/onboarding-account.module.ts ***!
  \**************************************************************************/
/*! exports provided: OnboardingAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingAccountPageModule", function() { return OnboardingAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboarding_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-account-routing.module */ "./src/app/settings/onboarding-account/onboarding-account-routing.module.ts");
/* harmony import */ var _onboarding_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding-account.page */ "./src/app/settings/onboarding-account/onboarding-account.page.ts");







let OnboardingAccountPageModule = class OnboardingAccountPageModule {
};
OnboardingAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingAccountPageRoutingModule"]
        ],
        declarations: [_onboarding_account_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingAccountPage"]]
    })
], OnboardingAccountPageModule);



/***/ }),

/***/ "./src/app/settings/onboarding-account/onboarding-account.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/settings/onboarding-account/onboarding-account.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL29uYm9hcmRpbmctYWNjb3VudC9vbmJvYXJkaW5nLWFjY291bnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/settings/onboarding-account/onboarding-account.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/onboarding-account/onboarding-account.page.ts ***!
  \************************************************************************/
/*! exports provided: OnboardingAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingAccountPage", function() { return OnboardingAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/program.service */ "./src/app/services/program.service.ts");



let OnboardingAccountPage = class OnboardingAccountPage {
    constructor(programService) {
        this.programService = programService;
    }
    ngOnInit() {
    }
    createOnboardAccount() {
        this.programService.createStripeConnectAccount('').subscribe(data => {
            window.open(data.url, '_system');
        });
    }
};
OnboardingAccountPage.ctorParameters = () => [
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"] }
];
OnboardingAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./onboarding-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/onboarding-account/onboarding-account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./onboarding-account.page.scss */ "./src/app/settings/onboarding-account/onboarding-account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]])
], OnboardingAccountPage);



/***/ })

}]);
//# sourceMappingURL=onboarding-account-onboarding-account-module-es2015.js.map