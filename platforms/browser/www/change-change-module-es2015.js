(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-change-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/change/change.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/change/change.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Change Password</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-padding\">\r\n      <form class=\"login-form sec-login\" [formGroup]=\"changeForm\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label position=\"stacked\">Current Password</ion-label>\r\n          <ion-input [type]=\"pwd ? 'password' : 'text'\" formControlName=\"cur_pass\"> </ion-input>\r\n          <span toggle=\"#password-field\" class=\"change-toggle-password\"><ion-icon [name]=\"pwd ? 'eye-off' : 'eye'\"  (click)=\"pwd=!pwd\"></ion-icon></span>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.cur_pass\">\r\n            <span class=\"error-message\" *ngIf=\"(submitted ||changeForm.get('cur_pass').touched) && changeForm.get('cur_pass').hasError(validation.type)\">{{ validation.message }}</span>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label position=\"stacked\">New Password</ion-label>\r\n          <ion-input [type]=\"npwd ? 'password' : 'text'\" formControlName=\"new_pass\" ></ion-input>\r\n          <span toggle=\"#password-field\" class=\"change-toggle-password\"><ion-icon [name]=\"npwd ? 'eye-off' : 'eye'\"  (click)=\"npwd=!npwd\"></ion-icon></span>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.new_pass\">\r\n            <span class=\"error-message\" *ngIf=\"(submitted ||changeForm.get('new_pass').touched) && changeForm.get('new_pass').hasError(validation.type)\">{{ validation.message }}</span>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label position=\"stacked\">Confirm Password</ion-label>\r\n          <ion-input [type]=\"cpwd ? 'password' : 'text'\"  formControlName=\"cnf_pass\"  ></ion-input>\r\n          <span toggle=\"#password-field\" class=\"change-toggle-password\"><ion-icon [name]=\"cpwd ? 'eye-off' : 'eye'\"  (click)=\"cpwd=!cpwd\"></ion-icon></span>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.cnf_pass\">\r\n            <span class=\"error-message\" *ngIf=\"(submitted ||changeForm.get('cnf_pass').touched) && changeForm.get('cnf_pass').hasError(validation.type)\">{{ validation.message }}</span>\r\n          </ng-container>\r\n        </div>\r\n        <br>\r\n        <ion-button expand=\"block\" class=\"green ion-text-uppercase\" [disabled]=\"loading\" (click)=\"onSubmit()\">Change Password</ion-button>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/settings/change/change-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings/change/change-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ChangePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePageRoutingModule", function() { return ChangePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change.page */ "./src/app/settings/change/change.page.ts");




const routes = [
    {
        path: '',
        component: _change_page__WEBPACK_IMPORTED_MODULE_3__["ChangePage"]
    }
];
let ChangePageRoutingModule = class ChangePageRoutingModule {
};
ChangePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePageRoutingModule);



/***/ }),

/***/ "./src/app/settings/change/change.module.ts":
/*!**************************************************!*\
  !*** ./src/app/settings/change/change.module.ts ***!
  \**************************************************/
/*! exports provided: ChangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePageModule", function() { return ChangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-routing.module */ "./src/app/settings/change/change-routing.module.ts");
/* harmony import */ var _change_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change.page */ "./src/app/settings/change/change.page.ts");







let ChangePageModule = class ChangePageModule {
};
ChangePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _change_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePageRoutingModule"]
        ],
        declarations: [_change_page__WEBPACK_IMPORTED_MODULE_6__["ChangePage"]]
    })
], ChangePageModule);



/***/ }),

/***/ "./src/app/settings/change/change.page.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/change/change.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form ion-item {\n  --border-color: rgb(222, 222, 222); }\n\n.login-form ion-input {\n  color: #222; }\n\n.validation-errors {\n  position: relative;\n  top: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY2hhbmdlL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcc2V0dGluZ3NcXGNoYW5nZVxcY2hhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFxQixrQ0FBZSxFQUFBOztBQUNwQztFQUFzQixXQUFXLEVBQUE7O0FBQ2pDO0VBQW9CLGtCQUFrQjtFQUFDLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NoYW5nZS9jaGFuZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0gaW9uLWl0ZW17LS1ib3JkZXItY29sb3I6IHJnYigyMjIsIDIyMiwgMjIyKTt9XHJcbi5sb2dpbi1mb3JtIGlvbi1pbnB1dHtjb2xvcjogIzIyMjt9XHJcbi52YWxpZGF0aW9uLWVycm9ycyB7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTEwcHg7fSJdfQ== */");

/***/ }),

/***/ "./src/app/settings/change/change.page.ts":
/*!************************************************!*\
  !*** ./src/app/settings/change/change.page.ts ***!
  \************************************************/
/*! exports provided: ChangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePage", function() { return ChangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _helpers_formvalidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../helpers/formvalidator */ "./src/app/helpers/formvalidator.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









let ChangePage = class ChangePage {
    constructor(router, commonService, formBuilder, settingService, storage, navCtrl) {
        this.router = router;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.settingService = settingService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.cpwd = true;
        this.pwd = true;
        this.npwd = true;
        this.submitted = false;
        this.validation_messages = {
            'cur_pass': [
                { type: 'required', message: 'This field is required ' },
            ],
            'new_pass': [
                { type: 'required', message: 'Please provide a new password' },
            ],
            'cnf_pass': [
                { type: 'required', message: 'Please confirm the password' },
                { type: 'mustMatch', message: 'Password do not match.' },
            ],
        };
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.changeForm = this.formBuilder.group({
            cur_pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            new_pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
            ])),
            cnf_pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
        }, {
            validator: Object(_helpers_formvalidator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('new_pass', 'cnf_pass')
        });
    }
    get f() { return this.changeForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.changeForm.invalid) {
            return;
        }
        this.settingService.resetPassword(this.changeForm.value).subscribe((data) => {
            console.log(data);
            if (data.status == true) {
                this.storage.remove('userData');
                this.storage.remove('userToken');
                this.commonService.presentToast('Password updated.');
                this.router.navigateByUrl('signin');
            }
            else {
                this.commonService.presentToast(data.status);
            }
        }, err => { console.log(err); });
    }
    goBack() {
        this.navCtrl.back();
    }
};
ChangePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
];
ChangePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/change/change.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change.page.scss */ "./src/app/settings/change/change.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])
], ChangePage);



/***/ })

}]);
//# sourceMappingURL=change-change-module-es2015.js.map