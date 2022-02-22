function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-forgot-forgot-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthForgotForgotPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"sec-login\" ion-padding>\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding ion-text-center\">\r\n      <div class=\"login-logo ion-text-center\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" [routerLink]=\"['/signin']\" class=\"back-icon\"></ion-icon>\r\n        <img src=\"../../../assets/images/logo.png\">\r\n      </div>\r\n      <ion-label class=\"text-white\">We will send you an unique code to reset your password</ion-label>\r\n      <form class=\"login-form mt-20\" [formGroup]=\"registerForm2\" (ngSubmit)=\"onSubmitted()\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <!-- <ion-label position=\"floating\">Email Address</ion-label> -->\r\n          <ion-input placeholder=\"Email Address\"  formControlName=\"uemail\"></ion-input>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.uemail\">\r\n          <span class=\"error-message\" *ngIf=\"(submitted || registerForm2.get('uemail').touched ) && registerForm2.get('uemail').hasError(validation.type)\">{{ validation.message }}</span>\r\n        </ng-container>\r\n        <br>\r\n        <ion-button [disabled]=\"isLoading\" (click)=\"onSubmitted()\" expand=\"block\" class=\"green ion-text-uppercase mt-20\">Reset Password</ion-button>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/auth/forgot/forgot-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/forgot/forgot-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: ForgotPageRoutingModule */

  /***/
  function srcAppAuthForgotForgotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function () {
      return ForgotPageRoutingModule;
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


    var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/auth/forgot/forgot.page.ts");

    var routes = [{
      path: '',
      component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }];

    var ForgotPageRoutingModule = function ForgotPageRoutingModule() {
      _classCallCheck(this, ForgotPageRoutingModule);
    };

    ForgotPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/forgot/forgot.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/forgot/forgot.module.ts ***!
    \**********************************************/

  /*! exports provided: ForgotPageModule */

  /***/
  function srcAppAuthForgotForgotModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
      return ForgotPageModule;
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


    var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-routing.module */
    "./src/app/auth/forgot/forgot-routing.module.ts");
    /* harmony import */


    var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/auth/forgot/forgot.page.ts");

    var ForgotPageModule = function ForgotPageModule() {
      _classCallCheck(this, ForgotPageModule);
    };

    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })], ForgotPageModule);
    /***/
  },

  /***/
  "./src/app/auth/forgot/forgot.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/auth/forgot/forgot.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthForgotForgotPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/auth/forgot/forgot.page.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/forgot/forgot.page.ts ***!
    \********************************************/

  /*! exports provided: ForgotPage */

  /***/
  function srcAppAuthForgotForgotPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
      return ForgotPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts"); // import { ToastController } from '@ionic/angular';
    // import {LoadingController} from '@ionic/angular';


    var ForgotPage = /*#__PURE__*/function () {
      function ForgotPage(router, formBuilder, storage, commonService, authService) {
        _classCallCheck(this, ForgotPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.commonService = commonService;
        this.authService = authService;
        this.submitted = false;
        this.isLoading = false;
        this.validation_messages = {
          'uemail': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Enter a valid email Like: "example@domain.com" and allowed domains are  wdipl.com, gmail.com, yopmail.com, outlook.com, hotmail.com,live.com'
          }]
        };
      }

      _createClass(ForgotPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm2 = this.formBuilder.group({
            uemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}')]))
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm2.controls;
        }
      }, {
        key: "onSubmitted",
        value: function onSubmitted() {
          var _this = this;

          this.submitted = true;

          if (this.registerForm2.invalid) {
            return;
          }

          this.commonService.presentLoader();
          this.authService.forgotPassword(this.registerForm2.value).subscribe(function (data) {
            console.log(data);

            if (data.status == true) {
              _this.storage.set('forgotemail', _this.registerForm2.value.uemail);

              _this.commonService.dismissLoader();

              _this.router.navigate(["reset-password", _this.registerForm2.value.uemail]).then(function (nav) {
                console.log(nav); // true if navigation is successful
              }, function (err) {
                console.log(err); // when there's an error
              });

              _this.registerForm2.reset();
            } else {
              _this.commonService.dismissLoader();

              _this.commonService.presentToast(data.status);
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ForgotPage;
    }();

    ForgotPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot.page.scss */
      "./src/app/auth/forgot/forgot.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], ForgotPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-forgot-forgot-module-es5.js.map