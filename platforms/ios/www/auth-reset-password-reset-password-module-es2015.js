(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"sec-login\" ion-padding>\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding ion-text-center\">\r\n      <div class=\"login-logo ion-text-center\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" [routerLink]=\"['/forgot']\" class=\"back-icon\"></ion-icon>\r\n        <img src=\"../../../assets/images/logo.png\">  \r\n      </div> \r\n      <ion-label class=\"text-white\">Please enter you unique code and set your new password</ion-label> \r\n      <form class=\"login-form mt-20\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">             \r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-input type=\"number\" placeholder=\"Unique Code\" formControlName=\"ucode\"></ion-input>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.ucode\">\r\n          <span class=\"error-message\" *ngIf=\"(submitted || loginForm.get('ucode').touched) && loginForm.get('ucode').hasError(validation.type)\">{{ validation.message }}</span>\r\n        </ng-container>\r\n\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-input  placeholder=\"New Password\" formControlName=\"newPassword\" [ngClass]=\"{ 'is-invalid': submitted && f.newPassword.errors }\" [type]=\"npwd ? 'text' : 'password'\"></ion-input>\r\n          <span toggle=\"#newPassword-field\" class=\"change-toggle-password\">\r\n            <ion-icon color=\"light\" [name]=\"npwd ? 'eye' : 'eye-off'\" (click)=\"npwd=!npwd\"></ion-icon>\r\n          </span>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.newPassword\">\r\n          <span class=\"error-message\" *ngIf=\"(submitted || loginForm.get('newPassword').touched) && loginForm.get('newPassword').hasError(validation.type)\">{{ validation.message }}</span>\r\n        </ng-container>\r\n\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"cPassword\"></ion-input>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.cPassword\">\r\n          <span class=\"error-message\" *ngIf=\"(submitted || loginForm.get('cPassword').touched) && loginForm.get('cPassword').hasError(validation.type)\">{{ validation.message }}</span>\r\n          <ion-input placeholder=\"\" type=\"hidden\" formControlName=\"uemail\" ></ion-input>\r\n        </ng-container>  \r\n        <ion-button (ngSubmit)=\"onSubmit()\" (click)=\"onSubmit()\" expand=\"block\" class=\"green ion-text-uppercase mt-20\">Reset Password</ion-button>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ResetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function() { return ResetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/auth/reset-password/reset-password.page.ts");




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.module.ts ***!
  \**************************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password-routing.module */ "./src/app/auth/reset-password/reset-password-routing.module.ts");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/auth/reset-password/reset-password.page.ts");







let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.page.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.page.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/password.validator */ "./src/app/validators/password.validator.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _helpers_formvalidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/formvalidator */ "./src/app/helpers/formvalidator.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");









let ResetPasswordPage = class ResetPasswordPage {
    constructor(formBuilder, router, storage, authService, commonService, activatedRoute) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.storage = storage;
        this.authService = authService;
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.validation_messages = {
            'ucode': [
                { type: 'required', message: 'Code is required.' },
            ],
            'newPassword': [
                { type: 'required', message: 'Password is required.' },
                { type: 'pattern', message: 'Password must be at least 8 characters,  1Uppercase , 1number , 1Special char' },
                { type: 'mustMatch', message: 'Password do not match.' },
            ],
            'cPassword': [
                { type: 'required', message: 'Password is required.' },
                { type: 'mustMatch', message: 'Password do not match.' },
            ],
        };
        this.activatedRoute.paramMap.subscribe((params) => {
            this.email = params.get('emailid');
        });
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            ucode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].areEqual,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            cPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            uemail: ['']
        }, {
            validator: Object(_helpers_formvalidator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('newPassword', 'cPassword')
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.commonService.presentLoader();
        this.loginForm.get('uemail').setValue(this.email);
        this.authService.updatePassword(this.loginForm.value).subscribe((data) => {
            console.log(data);
            if (data.status == true) {
                this.commonService.dismissLoader();
                this.router.navigateByUrl('signin');
            }
            else if (data.message) {
                this.commonService.dismissLoader();
                this.commonService.presentToast(data.message);
            }
            else {
                this.commonService.dismissLoader();
                this.commonService.presentToast(data.status);
            }
        }, err => { console.log(err); });
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/auth/reset-password/reset-password.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], ResetPasswordPage);



/***/ })

}]);
//# sourceMappingURL=auth-reset-password-reset-password-module-es2015.js.map