function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["term-term-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/term/term.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/term/term.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsTermTermPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Term and Condition</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding\">\r\n      <ion-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ion-text>\r\n    </ion-col>\r\n  </ion-row>  \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/settings/term/term-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/settings/term/term-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: TermPageRoutingModule */

  /***/
  function srcAppSettingsTermTermRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermPageRoutingModule", function () {
      return TermPageRoutingModule;
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


    var _term_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./term.page */
    "./src/app/settings/term/term.page.ts");

    var routes = [{
      path: '',
      component: _term_page__WEBPACK_IMPORTED_MODULE_3__["TermPage"]
    }];

    var TermPageRoutingModule = function TermPageRoutingModule() {
      _classCallCheck(this, TermPageRoutingModule);
    };

    TermPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TermPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/settings/term/term.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/settings/term/term.module.ts ***!
    \**********************************************/

  /*! exports provided: TermPageModule */

  /***/
  function srcAppSettingsTermTermModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermPageModule", function () {
      return TermPageModule;
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


    var _term_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./term-routing.module */
    "./src/app/settings/term/term-routing.module.ts");
    /* harmony import */


    var _term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./term.page */
    "./src/app/settings/term/term.page.ts");

    var TermPageModule = function TermPageModule() {
      _classCallCheck(this, TermPageModule);
    };

    TermPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _term_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermPageRoutingModule"]],
      declarations: [_term_page__WEBPACK_IMPORTED_MODULE_6__["TermPage"]]
    })], TermPageModule);
    /***/
  },

  /***/
  "./src/app/settings/term/term.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/settings/term/term.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsTermTermPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-text {\n  line-height: 1.5; }\n\n.ios.main_content {\n  --padding-top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvdGVybS9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZVxcQk0vc3JjXFxhcHBcXHNldHRpbmdzXFx0ZXJtXFx0ZXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGdCQUFnQixFQUFBOztBQUN6QjtFQUFrQixrQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvdGVybS90ZXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0e2xpbmUtaGVpZ2h0OiAxLjU7fVxyXG4uaW9zLm1haW5fY29udGVudHstLXBhZGRpbmctdG9wOiAwcHg7fSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/settings/term/term.page.ts":
  /*!********************************************!*\
    !*** ./src/app/settings/term/term.page.ts ***!
    \********************************************/

  /*! exports provided: TermPage */

  /***/
  function srcAppSettingsTermTermPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermPage", function () {
      return TermPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var TermPage = /*#__PURE__*/function () {
      function TermPage(navCtrl) {
        _classCallCheck(this, TermPage);

        this.navCtrl = navCtrl;
      }

      _createClass(TermPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return TermPage;
    }();

    TermPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-term',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./term.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/term/term.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./term.page.scss */
      "./src/app/settings/term/term.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], TermPage);
    /***/
  }
}]);
//# sourceMappingURL=term-term-module-es5.js.map