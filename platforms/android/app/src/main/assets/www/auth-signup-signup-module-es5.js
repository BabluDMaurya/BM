function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"sec-login\">\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding ion-text-center\">\r\n      <div class=\"login-logo ion-text-center\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" [routerLink]=\"['/signin']\" class=\"back-icon fs-2\"></ion-icon>\r\n        <img src=\"../../../assets/images/logo.png\">\r\n      </div>\r\n      <form class=\"login-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onClickSubmit()\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-input type=\"text\" color=\"light\" placeholder=\"Username\"  formControlName=\"username\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"  (ngModelChange)=\" checkUserName($event)\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.username\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || registerForm.get('username').touched) && registerForm.get('username').hasError(validation.type)\">{{ validation.message }}</span>\r\n          <span class=\"error-message\">{{unameAvail}}</span>\r\n        </ng-container>\r\n        <ion-list class=\"suggestion-list\">\r\n          <ion-item *ngIf=\"unameAvaibilityErr\"><span class=\"error-message\">{{unameAvail}}</span></ion-item>\r\n          <ion-item *ngFor=\"let username of usernames\" (click)=\"setUsername($event.target.innerText)\">{{username}}\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Email Address\" (change)=\"checkMail($event)\"\r\n             [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"  >\r\n          </ion-input>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || registerForm.get('email').touched ) && registerForm.get('email').hasError(validation.type)\">\r\n            {{ validation.message }}\r\n          </span>\r\n        </ng-container> \r\n        <span class=\"error-message\">{{emailAvail}}</span>\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-input formControlName=\"password\" placeholder=\"Set Password\"[ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"  [type]=\"npwd ? 'password' : 'text'\"></ion-input>\r\n          <span toggle=\"#password-field\" class=\"change-toggle-password\">\r\n            <ion-icon color=\"light\" [name]=\"npwd ? 'eye-off' : 'eye'\" (click)=\"npwd=!npwd\"></ion-icon>\r\n          </span>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || registerForm.get('password').touched) && registerForm.get('password').hasError(validation.type)\">\r\n            {{ validation.message }}\r\n          </span>\r\n        </ng-container>\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label class=\"text-white\">Age between</ion-label>\r\n          <ion-select class=\"selection\" formControlName=\"age\">\r\n            <ion-select-option value=\"1\">less than 15</ion-select-option>\r\n            <ion-select-option value=\"2\">15-25</ion-select-option>\r\n            <ion-select-option value=\"3\">25-35</ion-select-option>\r\n            <ion-select-option value=\"4\">35-45</ion-select-option>\r\n            <ion-select-option value=\"5\">45-55</ion-select-option>\r\n            <ion-select-option value=\"6\">more than 55</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.age\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || registerForm.get('age').touched) && registerForm.get('age').hasError(validation.type)\">\r\n            {{ validation.message }}\r\n          </span>\r\n        </ng-container>\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-radio-group formControlName=\"sex\">\r\n            <ion-label>Sex</ion-label>\r\n            <ion-item lines=\"none\" class=\"ion-no-margin\">\r\n              <ion-label>Male</ion-label>\r\n              <ion-radio slot=\"start\" value=\"1\"  formControlName=\"sex\" ></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"ion-no-margin\">\r\n              <ion-label>Female</ion-label>\r\n              <ion-radio slot=\"start\" value=\"2\"  formControlName=\"sex\"> </ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"ion-no-margin\">\r\n              <ion-label>Other</ion-label>\r\n              <ion-radio slot=\"start\" value=\"3\"  formControlName=\"sex\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.sex\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || registerForm.get('sex').touched) && registerForm.get('sex').hasError(validation.type)\">\r\n            {{ validation.message }}\r\n          </span>\r\n        </ng-container>\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label class=\"text-white\" for=\"test6\">{{captchaDiv}} = </ion-label> \r\n           <ion-input type=\"number\" name=\"captcha\" id=\"captcha\" (change)=\" checkCaptcha($event)\"\r\n            placeholder=\"Enter captcha\" formControlName=\"captcha\" autocomplete=\"off\"></ion-input>\r\n          <span (click)=\"refreshCaptcha()\" class=\"icon-refresh\">\r\n            <ion-icon ios=\"ios-refresh\" md=\"md-refresh\"></ion-icon>\r\n          </span>\r\n        </ion-item>\r\n        <ng-container *ngFor=\"let validation of validation_messages.captcha\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || registerForm.get('captcha').touched) && registerForm.get('captcha').hasError(validation.type)\">\r\n            {{ validation.message }}\r\n          </span>\r\n         <span class=\"error-message\"> {{ captchaErr }}</span>\r\n        </ng-container>\r\n        <div class=\"termsBox\">\r\n          <ion-checkbox formControlName='policy' checked=\"false\"></ion-checkbox> \r\n          <ion-text class=\"text-white\" for=\"test6\">By signing up, you agree to our <a class=\"text-green\" (click)=\"termsModal()\">Terms &amp; Conditions</a> and <a class=\"text-green\" (click)=\"privacyModal()\">Privacy Policy</a></ion-text>\r\n        </div>\r\n        <!-- <ion-item class=\"ion-no-padding terms mt-20 terms-list\" lines=\"none\">          \r\n          \r\n        </ion-item>  -->\r\n        <ng-container *ngFor=\"let validation of validation_messages.policy\">\r\n          <span class=\"error-message\"\r\n            *ngIf=\"(submitted || registerForm.get('policy').touched) && registerForm.get('policy').hasError(validation.type)\">\r\n            {{ validation.message }}\r\n          </span>\r\n        </ng-container>\r\n        <ion-button expand=\"block\" (click)=\"onClickSubmit()\" class=\"green ion-text-uppercase mt-20\">SignUp</ion-button>\r\n        <div class=\"or-text\">\r\n          <ion-text>OR</ion-text>\r\n        </div>\r\n        <!-- <ion-button fill=\"outline\" [routerLink]=\"['/home']\" class=\"ion-text-uppercase btn-border btn-insta\">\r\n          <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon> Log In With instagram\r\n        </ion-button> -->\r\n        <p class=\"bottom-text\">Already account here <a routerLink=\"/signin\">Sign In</a></p>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/signup/signup-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppAuthSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/auth/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/signup/signup.module.ts ***!
    \**********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppAuthSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/auth/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/auth/signup/signup.page.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/auth/signup/signup.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-form ion-radio-group ion-item {\n  margin-bottom: 0;\n}\n.login-form ion-item ion-label {\n  font-size: 0.875rem;\n}\n.login-form .termsBox {\n  display: flex;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.login-form .termsBox ion-checkbox {\n  margin-right: 10px;\n}\n.login-form .termsBox ion-text {\n  text-align: left;\n  line-height: 1.5;\n}\n.fs-2 {\n  font-size: 2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGF1dGhcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUFTLGdCQUFBO0FDQWpCO0FER1E7RUFBVSxtQkFBQTtBQ0FsQjtBREVJO0VBQVUsYUFBQTtFQUFjLG1CQUFBO0VBQW1CLGdCQUFBO0FDRy9DO0FERlE7RUFBYSxrQkFBQTtBQ0tyQjtBREpRO0VBQVMsZ0JBQUE7RUFBaUIsZ0JBQUE7QUNRbEM7QURMQTtFQUNJLDBCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm17XHJcbiAgICBpb24tcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgaW9uLWl0ZW17bWFyZ2luLWJvdHRvbTogMDt9XHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjg3NXJlbTt9XHJcbiAgICB9XHJcbiAgICAudGVybXNCb3h7ZGlzcGxheTogZmxleDttYXJnaW4tYm90dG9tOjEwcHg7bWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgIGlvbi1jaGVja2JveHttYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG4gICAgICAgIGlvbi10ZXh0e3RleHQtYWxpZ246IGxlZnQ7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbiAgICB9XHJcbn1cclxuLmZzLTJ7XHJcbiAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxufSIsIi5sb2dpbi1mb3JtIGlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubG9naW4tZm9ybSBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLmxvZ2luLWZvcm0gLnRlcm1zQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5sb2dpbi1mb3JtIC50ZXJtc0JveCBpb24tY2hlY2tib3gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubG9naW4tZm9ybSAudGVybXNCb3ggaW9uLXRleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uZnMtMiB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.page.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/signup/signup.page.ts ***!
    \********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppAuthSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
    /* harmony import */


    var _modalContent_terms_terms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../modalContent/terms/terms.component */
    "./src/app/modalContent/terms/terms.component.ts");
    /* harmony import */


    var _modalContent_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../modalContent/privacy/privacy.component */
    "./src/app/modalContent/privacy/privacy.component.ts");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(commonService, router, fb, authService, storage, androidPermissions, geolocation, locationAccuracy) {
        _classCallCheck(this, SignupPage);

        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.storage = storage;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.npwd = true;
        this.password = '';
        this.emailAvaibilityErr = false;
        this.unameAvaibilityErr = false;
        this.captchaMatcherr = false;
        this.submitted = false;
        this['validation_messages'] = {
          email: [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Enter a valid email Like: "example@domain.com" and allowed domains are  wdipl.com, gmail.com, yopmail.com, hotmail.com, outlook.com, live.com'
          }],
          password: [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must be at least 8 characters long.'
          }, {
            type: 'pattern',
            message: 'Length should be 8(least one uppercase, one lowercase, one special character and one number)'
          }],
          username: [{
            type: 'required',
            message: 'Username is required'
          }, {
            type: 'minlength',
            message: 'Username must be at least 5 characters long'
          }, {
            type: 'maxlength',
            message: 'Username cannot be more than 25 characters long'
          }, {
            type: 'pattern',
            message: 'Please enter atleast 5 characters and first letter should be alphabet. You can use number and _ . / & + - '
          }, {
            type: 'validUsername',
            message: 'Your username has already been taken'
          }],
          age: [{
            type: 'required',
            message: 'Select age.'
          }],
          sex: [{
            type: 'required',
            message: 'Gender required.'
          }],
          captcha: [{
            type: 'required',
            message: 'This field is required.'
          }],
          policy: [{
            type: 'required',
            message: 'This field is required.'
          }, {
            type: 'requiredTrue',
            message: 'This field needs to be checked.'
          }]
        };
        this.createForm();
        this.locationCoords = {
          latitude: "",
          longitude: "",
          accuracy: "",
          timestamp: ""
        };
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //this.authService.autoLogin();
          //get the captch api
          this.authService.getCaptchaHtml().subscribe(function (data) {
            _this.captchaDiv = data.value1;
            _this.capVal = data.result;
          }, function (err) {// console.log(err);
          });
          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
              //If having permission show 'Turn On GPS' dialogue
              _this.askToTurnOnGPS();
            } else {
              //If not having permission ask for permission
              _this.requestGPSPermission();
            }
          }, function (err) {});
        } // Reactiveform create

      }, {
        key: "createForm",
        value: function createForm() {
          this.registerForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([//UsernameValidator.validUsername,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Za-z][A-Za-z0-9_./&+-]{4,25}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}')])),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            captcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            policy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([// PasswordValidator.areEqual,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])),
            lat: [''],
            lon: ['']
          });
        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          this.hide = !this.hide;
        } // Form submit event listner

      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }, {
        key: "checkCaptcha",
        value: function checkCaptcha(captchaval) {
          // && this.registerForm.value.captcha !== ''
          if (captchaval.target.value != this.capVal && captchaval.target.value !== '') {
            this.captchaMatcherr = true;
            this.captchaErr = 'Invalid Captcha.';
          } else {
            this.captchaMatcherr = false;
            this.captchaErr = '';
          }
        }
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit() {
          var _this2 = this;

          this.submitted = true;
          this.registerForm.get('lat').setValue(this.locationCoords.latitude);
          this.registerForm.get('lon').setValue(this.locationCoords.longitude);

          if (this.registerForm.invalid || this.registerForm.value.captcha != this.capVal || this.emailAvaibilityErr || this.unameAvaibilityErr) {
            return;
          }

          this.commonService.presentLoader();
          this.authService.addUser(this.registerForm.value).subscribe(function (data) {
            if (data.message == true) {
              _this2.storage.set('userData', _this2.registerForm.value.email);

              _this2.storage.set('userToken', data.userToken);

              _this2.commonService.dismissLoader();

              _this2.router.navigate(["verify", _this2.registerForm.value.email]).then(function (nav) {// console.log(nav); 
              }, function (err) {// console.log(err)
              });

              _this2.registerForm.reset();
            } else {
              _this2.commonService.dismissLoader();

              _this2.commonService.presentToast(JSON.stringify(data));
            }
          }, function (err) {
            _this2.commonService.dismissLoader();
          });
        } // change event listener

      }, {
        key: "checkMail",
        value: function checkMail(emailval) {
          var _this3 = this;

          if (this.registerForm.value.email !== '') {
            this.authService.checkMailAvailability(emailval.target.value).subscribe(function (data) {
              if (data.status == false) {
                _this3.emailAvaibilityErr = true;
                _this3.emailAvail = 'Email id already exist!!';
              } else if (data.status == true) {
                _this3.emailAvaibilityErr = false;
                _this3.emailAvail = '';
              }
            }, function (err) {// console.log(err);
            });
          } else {
            this.emailAvail = ''; // console.log('hhhgfgf');
          }
        } // change event listener

      }, {
        key: "checkUserName",
        value: function checkUserName(unameval) {
          var _this4 = this;

          if (this.registerForm.value.username !== '') {
            this.authService.checkUnameAvailability(unameval).subscribe(function (data) {
              if (data.status == false) {
                _this4.unameAvaibilityErr = true;
                _this4.unameAvail = 'Username already exist';
                _this4.usernames = data.usernameSuggetions;
              } else if (data.status == true) {
                _this4.unameAvaibilityErr = false;
                _this4.unameAvail = '';
                _this4.usernames = null;
              }
            }, function (err) {// console.log(err);
            });
          } else {
            this.unameAvail = '';
          }
        }
      }, {
        key: "setUsername",
        value: function setUsername(username) {
          // console.log(username);
          this.registerForm.get('username').setValue(username);
        } // -----------------------  G P S   P E R M I S S I O N  ----------------------

      }, {
        key: "checkGPSPermission",
        value: function checkGPSPermission() {
          var _this5 = this;

          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
              //If having permission show 'Turn On GPS' dialogue
              _this5.askToTurnOnGPS();
            } else {
              //If not having permission ask for permission
              _this5.requestGPSPermission();
            }
          }, function (err) {
            alert(err);
          });
        }
      }, {
        key: "requestGPSPermission",
        value: function requestGPSPermission() {
          var _this6 = this;

          this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {//console.log("4");
            } else {
              //Show 'GPS Permission Request' dialogue
              _this6.androidPermissions.requestPermission(_this6.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function () {
                // call method to turn on GPS
                _this6.askToTurnOnGPS();
              }, function (error) {//Show alert if user click on 'No Thanks'
                // alert('requestPermission Error requesting location permissions ' + error)
              });
            }
          });
        }
      }, {
        key: "askToTurnOnGPS",
        value: function askToTurnOnGPS() {
          var _this7 = this;

          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this7.getLocationCoordinates();
          });
        } // Methos to get device accurate coordinates using device GPS

      }, {
        key: "getLocationCoordinates",
        value: function getLocationCoordinates() {
          var _this8 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            _this8.locationCoords.latitude = resp.coords.latitude;
            _this8.locationCoords.longitude = resp.coords.longitude;
            _this8.locationCoords.accuracy = resp.coords.accuracy;
            _this8.locationCoords.timestamp = resp.timestamp;
          })["catch"](function (error) {// alert('Error getting location' + error);
          });
        } // Refresh Captcha 

      }, {
        key: "refreshCaptcha",
        value: function refreshCaptcha() {
          var _this9 = this;

          //get the captch api
          this.authService.getCaptchaHtml().subscribe(function (data) {
            _this9.registerForm.controls['captcha'].setValue('');

            _this9.captchaDiv = data.value1;
            _this9.capVal = data.result;
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "termsModal",
        value: function termsModal() {
          this.commonService.presentModal(_modalContent_terms_terms_component__WEBPACK_IMPORTED_MODULE_10__["TermsComponent"], 'fullModal', '');
        }
      }, {
        key: "privacyModal",
        value: function privacyModal() {
          this.commonService.presentModal(_modalContent_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyComponent"], 'fullModal', '');
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]
      }, {
        type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__["LocationAccuracy"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/auth/signup/signup.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__["LocationAccuracy"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-signup-signup-module-es5.js.map