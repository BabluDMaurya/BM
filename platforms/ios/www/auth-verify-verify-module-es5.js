function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-verify-verify-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"sec-login\" ion-padding>\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding ion-text-center\">\r\n      <div class=\"login-logo ion-text-center\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" [routerLink]=\"['/signup']\" class=\"back-icon\"></ion-icon>\r\n        <img src=\"../../../assets/images/logo.png\">  \r\n      </div>      \r\n      <ion-label class=\"text-white\">Please check your given email id for OTP</ion-label>      \r\n      <form class=\"login-form mt-20\" [formGroup]=\"otpForm\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-input placeholder=\"Enter Otp\" type=\"number\" formControlName=\"otp\" ></ion-input>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.otp\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || otpForm.get('otp').touched) && otpForm.get('otp').hasError(validation.type)\">\r\n            {{ validation.message }}\r\n          </span>\r\n        </ng-container>\r\n        <!-- <ion-item class=\"ion-no-padding\">\r\n          <ion-input placeholder=\"\" type=\"hidden\" formControlName=\"uemail\" ></ion-input>  \r\n        </ion-item>            -->\r\n        <div class=\"ion-text-end ion-margin-bottom text-green\">\r\n          <p (click)=\"resend()\" class=\"text-green\">Resend OTP</p>\r\n        </div>\r\n        <ion-button expand=\"block\" class=\"green ion-text-uppercase mt-20\" (click)=\"onSubmit()\">Submit</ion-button>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/auth/verify/verify-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/verify/verify-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: VerifyPageRoutingModule */

  /***/
  function srcAppAuthVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
      return VerifyPageRoutingModule;
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


    var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/auth/verify/verify.page.ts");

    var routes = [{
      path: '',
      component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }];

    var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
      _classCallCheck(this, VerifyPageRoutingModule);
    };

    VerifyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/verify/verify.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/verify/verify.module.ts ***!
    \**********************************************/

  /*! exports provided: VerifyPageModule */

  /***/
  function srcAppAuthVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
      return VerifyPageModule;
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


    var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-routing.module */
    "./src/app/auth/verify/verify-routing.module.ts");
    /* harmony import */


    var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/auth/verify/verify.page.ts");

    var VerifyPageModule = function VerifyPageModule() {
      _classCallCheck(this, VerifyPageModule);
    };

    VerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"]],
      declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })], VerifyPageModule);
    /***/
  },

  /***/
  "./src/app/auth/verify/verify.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/auth/verify/verify.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/auth/verify/verify.page.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/verify/verify.page.ts ***!
    \********************************************/

  /*! exports provided: VerifyPage */

  /***/
  function srcAppAuthVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
      return VerifyPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts"); //import { ToastController } from '@ionic/angular';


    var VerifyPage = /*#__PURE__*/function () {
      // userData:Array;
      function VerifyPage(fb, http, authService, storage, router, commonService, activatedRoute) {
        _classCallCheck(this, VerifyPage);

        this.fb = fb;
        this.http = http;
        this.authService = authService;
        this.storage = storage;
        this.router = router;
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.validation_messages = {
          'otp': [{
            type: 'required',
            message: 'OTP required'
          }]
        };
      }

      _createClass(VerifyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function (params) {
            _this.uemail = params.get('userData');
          });
          this.otpForm = this.fb.group({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            uemail: ['']
          });
        }
      }, {
        key: "resend",
        value: function resend() {
          var _this2 = this;

          this.commonService.presentLoader();
          this.authService.resendOtp({
            'uemail': this.uemail
          }).subscribe(function (data) {
            console.log(data);

            if (data.status == true) {
              _this2.commonService.dismissLoader();

              _this2.commonService.presentToast("Check email for new Otp. ");
            } else {
              _this2.commonService.dismissLoader();

              _this2.commonService.presentToast(data.status);
            }
          }, function (err) {
            _this2.commonService.dismissLoader();

            console.log(err);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.otpForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.submitted = true;
          this.otpForm.get('uemail').setValue(this.uemail);

          if (this.otpForm.invalid) {
            return;
          }

          this.commonService.presentLoader();
          this.authService.checkOtp(this.otpForm.value).subscribe(function (data) {
            console.log(data);

            if (data.status == false) {
              console.log('otp doesnt match');
            } else if (data.status == true) {
              _this3.commonService.dismissLoader();

              _this3.storage.set('userDetails', data.status);

              _this3.router.navigateByUrl('signin');
            } else {
              _this3.commonService.dismissLoader();

              _this3.commonService.presentToast(data.message);

              console.log(data.message);
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return VerifyPage;
    }();

    VerifyPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    VerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify.page.scss */
      "./src/app/auth/verify/verify.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], VerifyPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-verify-verify-module-es5.js.map