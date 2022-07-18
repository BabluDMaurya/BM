(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n    <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n            <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n            </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n            <ion-label>Settings</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n    </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n    <ion-list lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-list-header class=\"green text-white\">Options</ion-list-header>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/tabs/edit-profile']\">Edit Profile</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label (click)=\"myInfo()\">My Info</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/tabs/bookmark']\">My Bookmark</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/invitated-programs']\">Invitations</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/change']\">Change Password</ion-label>\r\n        </ion-item>\r\n        <ion-list-header *ngIf=\"loginUserData.user_type != 0\" class=\"green text-white\" (click)=\"verifyUserInfoModal()\">{{uv}}</ion-list-header>\r\n        <!-- <ion-item>\r\n            <ion-label class=\"text-green\" (click)=\"verifyUserModal()\" >{{uv}}</ion-label>\r\n        </ion-item> -->\r\n        <!-- <ion-list-header class=\"green text-white\">Verify User</ion-list-header>\r\n    <div class=\"text-green\"  (click)=\"verifyUserModal()\" id=\"trulioo-embedid\">User not Verify.click here to verify</div> -->\r\n        <ion-item>\r\n            <ion-label (click)=\"copy()\">Copy Link to Profile</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Comment Disable</ion-label>\r\n            <ion-toggle [disabled]='' [(ngModel)]=\"toggleValue\" (ionChange)=\"activatePopup()\" slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-list-header class=\"green text-white\">Support</ion-list-header>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/contact-admin']\">Contact Admin</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/faq']\">FAQ'S</ion-label>\r\n        </ion-item>\r\n        <ion-list-header class=\"green text-white\">History</ion-list-header>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/payment-history']\">Payment History</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/program-history']\">Program History</ion-label>\r\n        </ion-item>\r\n        <ion-list-header class=\"green text-white\">Notification</ion-list-header>\r\n        <ion-item>\r\n            <ion-text [routerLink]=\"['/settings/notification-control']\">Notification Control</ion-text>\r\n        </ion-item>\r\n        <ion-list-header class=\"green text-white\">Account</ion-list-header>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/payoneer']\">Payoneer</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/paypal']\">Paypal</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/card-details']\">Card Details</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"loginUserData.user_type != 0\">\r\n            <ion-label  [routerLink]=\"['/onboarding-account']\">Onboarding Account</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/date-test']\">DateTest</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/broadcast']\">Broadcast</ion-label>\r\n        </ion-item>\r\n        <ion-list-header class=\"green text-white\">Setting</ion-list-header>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/term']\">Terms</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label  >Login with Instagram</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label [routerLink]=\"['/privacy']\">Privacy Policy</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label (click)=\"loginpopup()\">Logout</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"mb-10 bt-1\">\r\n            <ion-label (click)=\"delete()\">Delete Account</ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    },
    {
        path: 'faq',
        loadChildren: () => Promise.all(/*! import() | faq-faq-module */[__webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~35dc278f"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5"), __webpack_require__.e("faq-faq-module")]).then(__webpack_require__.bind(null, /*! ./faq/faq.module */ "./src/app/settings/faq/faq.module.ts")).then(m => m.FaqPageModule)
    },
    {
        path: 'contact-admin',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-admin-contact-admin-module */ "contact-admin-contact-admin-module").then(__webpack_require__.bind(null, /*! ./contact-admin/contact-admin.module */ "./src/app/settings/contact-admin/contact-admin.module.ts")).then(m => m.ContactAdminPageModule)
    },
    {
        path: 'payment-history',
        loadChildren: () => Promise.all(/*! import() | payment-history-payment-history-module */[__webpack_require__.e("common"), __webpack_require__.e("payment-history-payment-history-module")]).then(__webpack_require__.bind(null, /*! ./payment-history/payment-history.module */ "./src/app/settings/payment-history/payment-history.module.ts")).then(m => m.PaymentHistoryPageModule)
    },
    {
        path: 'payment-review',
        loadChildren: () => Promise.all(/*! import() | payment-review-payment-review-module */[__webpack_require__.e("common"), __webpack_require__.e("payment-review-payment-review-module")]).then(__webpack_require__.bind(null, /*! ./payment-review/payment-review.module */ "./src/app/settings/payment-review/payment-review.module.ts")).then(m => m.PaymentReviewPageModule)
    },
    {
        path: 'change',
        loadChildren: () => Promise.all(/*! import() | change-change-module */[__webpack_require__.e("common"), __webpack_require__.e("change-change-module")]).then(__webpack_require__.bind(null, /*! ./change/change.module */ "./src/app/settings/change/change.module.ts")).then(m => m.ChangePageModule)
    },
    {
        path: 'privacy',
        loadChildren: () => Promise.all(/*! import() | privacy-privacy-module */[__webpack_require__.e("common"), __webpack_require__.e("privacy-privacy-module")]).then(__webpack_require__.bind(null, /*! ./privacy/privacy.module */ "./src/app/settings/privacy/privacy.module.ts")).then(m => m.PrivacyPageModule)
    },
    {
        path: 'term',
        loadChildren: () => __webpack_require__.e(/*! import() | term-term-module */ "term-term-module").then(__webpack_require__.bind(null, /*! ./term/term.module */ "./src/app/settings/term/term.module.ts")).then(m => m.TermPageModule)
    },
    {
        path: 'program-history',
        loadChildren: () => __webpack_require__.e(/*! import() | program-history-program-history-module */ "program-history-program-history-module").then(__webpack_require__.bind(null, /*! ./program-history/program-history.module */ "./src/app/settings/program-history/program-history.module.ts")).then(m => m.ProgramHistoryPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-profile-edit-profile-module */ "edit-profile-edit-profile-module").then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "./src/app/settings/edit-profile/edit-profile.module.ts")).then(m => m.EditProfilePageModule)
    },
    {
        path: 'card-details',
        loadChildren: () => __webpack_require__.e(/*! import() | card-details-card-details-module */ "card-details-card-details-module").then(__webpack_require__.bind(null, /*! ./card-details/card-details.module */ "./src/app/settings/card-details/card-details.module.ts")).then(m => m.CardDetailsPageModule)
    },
    {
        path: 'onboarding-account',
        loadChildren: () => __webpack_require__.e(/*! import() | onboarding-account-onboarding-account-module */ "onboarding-account-onboarding-account-module").then(__webpack_require__.bind(null, /*! ./onboarding-account/onboarding-account.module */ "./src/app/settings/onboarding-account/onboarding-account.module.ts")).then(m => m.OnboardingAccountPageModule)
    },
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-label {\n  font-size: 0.8125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXNCLG9CQUFBO0FDRXRCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLWxhYmVse2ZvbnQtc2l6ZTowLjgxMjVyZW19XHJcbiIsImlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../modalContent/verify-user-info/verify-user-info.component */ "./src/app/modalContent/verify-user-info/verify-user-info.component.ts");
/* harmony import */ var _modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modalContent/followers/followers.component */ "./src/app/modalContent/followers/followers.component.ts");













let SettingsPage = class SettingsPage {
    constructor(router, loadingController, alertController, clipboard, toastController, storage, settingService, commonService, navCtrl, config, socket) {
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.clipboard = clipboard;
        this.toastController = toastController;
        this.storage = storage;
        this.settingService = settingService;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.config = config;
        this.socket = socket;
        this.isLoading = false;
        this.uv = 'Earn with IntoActive';
    }
    ngOnInit() {
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        this.settingService.getProfileData().subscribe((data) => {
            this.profileData = data.status;
            if (data.status.userData.comment_disable == 0 || data.status.userData.comment_disable == null) {
                this.toggleValue = false;
            }
            else {
                this.toggleValue = true;
            }
        }, err => {
        });
    }
    editProfile() {
        this.isLoading = true;
        this.router.navigate(["/edit-profile"]);
        this.loadingController
            .create({ keyboardClose: true, message: '' })
            .then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                this.isLoading = false;
                loadingEl.dismiss();
                this.router.navigateByUrl('/edit-profile');
            }, 300);
        });
    }
    change() {
        this.isLoading = true;
        this.router.navigate(["/change"]);
        this.loadingController
            .create({ keyboardClose: true, message: '' })
            .then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                this.isLoading = false;
                loadingEl.dismiss();
                this.router.navigateByUrl('/change');
            }, 300);
        });
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure you want delete your account?',
                message: 'Once deleted, you will not be able to recover your account !!!',
                cssClass: 'custom-alert',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.id = this.storage.get('userData').then((value) => this.settingService.deleteUser({ 'uid': value.id }).subscribe((data) => {
                                if (data.message === true) {
                                    console.log('success');
                                    this.router.navigateByUrl('/signin');
                                }
                                else {
                                    console.log('error');
                                }
                            }, err => {
                                console.log('error msg!');
                            }));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    copy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Your profile have been copied.',
                duration: 2000
            });
            toast.present();
            this.clipboard.copy(_config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].profileLink);
            this.clipboard.paste().then((resolve) => {
                alert(resolve);
            }, (reject) => {
                alert('Error: ' + reject);
            });
            //this.clipboard.clear();
        });
    }
    loginpopup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Logout!',
                message: 'Confirm Logout!',
                cssClass: 'custom-alert',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.commonService.presentLoader();
                            this.socket.disconnect();
                            this.commonService.loggingout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    activatePopup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let prompt = this.alertController.create({
                header: 'Status',
                message: "Comment Status Updated Successfully",
                cssClass: 'custom-alert signal-btn',
                buttons: [
                    {
                        text: 'OK',
                        handler: data => {
                            // console.log('Saved clicked');
                        }
                    }
                ]
            });
            console.log(this.toggleValue + 'togglevalue');
            if (this.toggleValue == true) {
                //(await prompt).present();
                this.settingService.commentDisableUpdate({ 'status': this.toggleValue }).subscribe((data) => {
                }, err => {
                    console.log('error msg!');
                });
            }
            else if (this.toggleValue == false) {
                this.settingService.commentDisableUpdate({ 'status': this.toggleValue }).subscribe((data) => {
                    console.log(data.status);
                }, err => {
                    console.log('error msg!');
                });
            }
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    verifyUserInfoModal() {
        if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_10__["VerifyUserInfoComponent"], 'fullpage', '');
        }
        else {
        }
    }
    myInfo() {
        this.commonService.presentModal(_modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_11__["FollowersComponent"], 'fullModal', { 'profileData': this.profileData, 'otherUser': false });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _config_config__WEBPACK_IMPORTED_MODULE_9__["Config"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _config_config__WEBPACK_IMPORTED_MODULE_9__["Config"],
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map