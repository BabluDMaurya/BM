(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-admin-contact-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/contact-admin/contact-admin.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/contact-admin/contact-admin.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Contact Admin</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-padding\">\r\n        <form class=\"login-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\r\n          <ion-item class=\"ion-no-padding\">\r\n            <ion-label position=\"stacked\">Select Ouery Type</ion-label>\r\n            <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" formControlName=\"query\" required>\r\n              <ion-select-option value=\"Feedback\">Feedback</ion-select-option>\r\n              <ion-select-option value=\"Suggestion\">Suggestion</ion-select-option>\r\n              <ion-select-option value=\"Complain\">Complain</ion-select-option>\r\n            </ion-select>\r\n          </ion-item> \r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.query\">\r\n              <span class=\"error-message\" *ngIf=\"(submitted ||contactForm.get('query').touched) && contactForm.get('query').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"ion-no-padding\">\r\n            <ion-label position=\"stacked\">Enter Subject</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"subject\"></ion-input>            \r\n          </ion-item>   \r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.subject\">\r\n              <span class=\"error-message\" *ngIf=\"(submitted ||contactForm.get('subject').touched) && contactForm.get('subject').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </div>      \r\n          <ion-item class=\"ion-no-padding\">\r\n            <ion-label position=\"stacked\">Enter Message</ion-label>\r\n            <ion-textarea clearOnEdit=\"true\" formControlName=\"message\"></ion-textarea>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.message\">\r\n              <span class=\"error-message\" *ngIf=\"(submitted ||contactForm.get('message').touched) && contactForm.get('message').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </div>\r\n          <br>\r\n          <ion-button expand=\"block\" class=\"green ion-text-uppercase\" [disabled]=\"loading\" (click)=\"onSubmit()\">Contact Admin</ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/settings/contact-admin/contact-admin-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/contact-admin/contact-admin-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ContactAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAdminPageRoutingModule", function() { return ContactAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-admin.page */ "./src/app/settings/contact-admin/contact-admin.page.ts");




const routes = [
    {
        path: '',
        component: _contact_admin_page__WEBPACK_IMPORTED_MODULE_3__["ContactAdminPage"]
    }
];
let ContactAdminPageRoutingModule = class ContactAdminPageRoutingModule {
};
ContactAdminPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactAdminPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/contact-admin/contact-admin.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/settings/contact-admin/contact-admin.module.ts ***!
  \****************************************************************/
/*! exports provided: ContactAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAdminPageModule", function() { return ContactAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-admin-routing.module */ "./src/app/settings/contact-admin/contact-admin-routing.module.ts");
/* harmony import */ var _contact_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-admin.page */ "./src/app/settings/contact-admin/contact-admin.page.ts");







let ContactAdminPageModule = class ContactAdminPageModule {
};
ContactAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactAdminPageRoutingModule"]
        ],
        declarations: [_contact_admin_page__WEBPACK_IMPORTED_MODULE_6__["ContactAdminPage"]]
    })
], ContactAdminPageModule);



/***/ }),

/***/ "./src/app/settings/contact-admin/contact-admin.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/settings/contact-admin/contact-admin.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form ion-item {\n  --border-color: rgb(222, 222, 222); }\n\n.login-form ion-input {\n  color: #222; }\n\n.login-form ion-select {\n  color: #222; }\n\nion-textarea {\n  height: auto;\n  --placeholder-color: #d1d1d1;\n  font-size: 0.875rem; }\n\nion-select {\n  font-size: 0.875rem;\n  --padding-start:0; }\n\n.validation-errors {\n  position: relative;\n  top: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29udGFjdC1hZG1pbi9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcc2V0dGluZ3NcXGNvbnRhY3QtYWRtaW5cXGNvbnRhY3QtYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXFCLGtDQUFlLEVBQUE7O0FBQ3BDO0VBQXNCLFdBQVcsRUFBQTs7QUFDakM7RUFBdUIsV0FBVyxFQUFBOztBQUNsQztFQUFhLFlBQVk7RUFBRSw0QkFBb0I7RUFBUyxtQkFBbUIsRUFBQTs7QUFDM0U7RUFBVyxtQkFBbUI7RUFBQyxpQkFBZ0IsRUFBQTs7QUFDL0M7RUFBb0Isa0JBQWtCO0VBQUMsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvY29udGFjdC1hZG1pbi9jb250YWN0LWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIGlvbi1pdGVtey0tYm9yZGVyLWNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMik7fVxyXG4ubG9naW4tZm9ybSBpb24taW5wdXR7Y29sb3I6ICMyMjI7fVxyXG4ubG9naW4tZm9ybSBpb24tc2VsZWN0e2NvbG9yOiAjMjIyO31cclxuaW9uLXRleHRhcmVhe2hlaWdodDogYXV0bzsgLS1wbGFjZWhvbGRlci1jb2xvcjogI2QxZDFkMTtmb250LXNpemU6IDAuODc1cmVtO31cclxuaW9uLXNlbGVjdHtmb250LXNpemU6IDAuODc1cmVtOy0tcGFkZGluZy1zdGFydDowfVxyXG4udmFsaWRhdGlvbi1lcnJvcnMge3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0xMHB4O30iXX0= */");

/***/ }),

/***/ "./src/app/settings/contact-admin/contact-admin.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/contact-admin/contact-admin.page.ts ***!
  \**************************************************************/
/*! exports provided: ContactAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAdminPage", function() { return ContactAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








let ContactAdminPage = class ContactAdminPage {
    constructor(formBuilder, settingService, storage, router, commonService, navCtrl) {
        this.formBuilder = formBuilder;
        this.settingService = settingService;
        this.storage = storage;
        this.router = router;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.submitted = false;
        this.isLoading = false;
        this.validation_messages = {
            'query': [
                { type: 'required', message: 'Please  Select Query ' },
            ],
            'subject': [
                { type: 'required', message: 'Please enter Subject' },
            ],
            'message': [
                { type: 'required', message: 'Please enter Message' },
            ],
        };
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.contactForm = this.formBuilder.group({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
        });
    }
    get f() { return this.contactForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        this.commonService.presentLoader();
        this.settingService.contactAdmin(this.contactForm.value).subscribe((data) => {
            console.log(data);
            if (data.status == true) {
                this.commonService.dismissLoader();
                this.commonService.presentAlert('Success', 'Message delivered successfully.', null, 'custom-alert no-alert-button');
            }
            else {
                this.commonService.dismissLoader();
                this.commonService.presentAlert('Failed', data.status, null, '');
            }
        }, err => {
            console.log(err);
            this.commonService.dismissLoader();
            this.commonService.presentAlert('Failed', err.message, null, '');
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
ContactAdminPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
ContactAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-admin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/contact-admin/contact-admin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-admin.page.scss */ "./src/app/settings/contact-admin/contact-admin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
], ContactAdminPage);



/***/ })

}]);
//# sourceMappingURL=contact-admin-contact-admin-module-es2015.js.map