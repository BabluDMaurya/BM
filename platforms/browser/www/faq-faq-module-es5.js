function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/faq/faq.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/faq/faq.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsFaqFaqPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>FAQ's</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-card class=\"faq-card ion-no-margin\" *ngFor=\"let item of items; let i = index;\" (click)=\"changeClass(i)\" [ngClass]=\"classVariable == i ? 'active':'deactive'\">          \r\n    <ion-card-header class=\"faq-header\" (click)=\"expandItem(item)\">\r\n      <ion-card-title>{{ item.title}}</ion-card-title>          \r\n      <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\"></ion-icon>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <app-expandable [expanded]=\"item.expanded\">\r\n        <div class=\"ion-padding-bottom\">\r\n          <p>{{ item.description}}</p>\r\n        </div>\r\n      </app-expandable>\r\n    </ion-card-content>\r\n  </ion-card> \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/settings/faq/faq-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/settings/faq/faq-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: FaqPageRoutingModule */

  /***/
  function srcAppSettingsFaqFaqRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function () {
      return FaqPageRoutingModule;
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


    var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/settings/faq/faq.page.ts");

    var routes = [{
      path: '',
      component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }];

    var FaqPageRoutingModule = function FaqPageRoutingModule() {
      _classCallCheck(this, FaqPageRoutingModule);
    };

    FaqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FaqPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/settings/faq/faq.module.ts":
  /*!********************************************!*\
    !*** ./src/app/settings/faq/faq.module.ts ***!
    \********************************************/

  /*! exports provided: FaqPageModule */

  /***/
  function srcAppSettingsFaqFaqModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageModule", function () {
      return FaqPageModule;
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


    var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./faq-routing.module */
    "./src/app/settings/faq/faq-routing.module.ts");
    /* harmony import */


    var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/settings/faq/faq.page.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../profile/components.modules */
    "./src/app/profile/components.modules.ts");

    var FaqPageModule = function FaqPageModule() {
      _classCallCheck(this, FaqPageModule);
    };

    FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]],
      declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })], FaqPageModule);
    /***/
  },

  /***/
  "./src/app/settings/faq/faq.page.scss":
  /*!********************************************!*\
    !*** ./src/app/settings/faq/faq.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsFaqFaqPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 4px solid #f7f7f7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvZmFxL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxzZXR0aW5nc1xcZmFxXFxmYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9mYXEvZmFxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke2JvcmRlci1yYWRpdXM6IDA7Ym94LXNoYWRvdzogbm9uZTtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2Y3ZjdmNzt9Il19 */";
    /***/
  },

  /***/
  "./src/app/settings/faq/faq.page.ts":
  /*!******************************************!*\
    !*** ./src/app/settings/faq/faq.page.ts ***!
    \******************************************/

  /*! exports provided: FaqPage */

  /***/
  function srcAppSettingsFaqFaqPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPage", function () {
      return FaqPage;
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
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");

    var FaqPage = /*#__PURE__*/function () {
      function FaqPage(navCtrl, commonService) {
        _classCallCheck(this, FaqPage);

        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.items = [];
        this.status = false;
        this.classVariable = 0;
        this.items = [{
          expanded: true,
          title: 'Lorem Ipsum is simply dummy text ? ',
          description: 'This is content, without any paragraph or header tags, within an ion-card-content element.'
        }, {
          expanded: false,
          title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ? ',
          description: 'This is content, without any paragraph or header tags, within an ion-card-content element.'
        }, {
          expanded: false,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }, {
          expanded: false,
          title: 'Why do we use it? ',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
        }, {
          expanded: false,
          title: 'Where does it come from?',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        }, {
          expanded: false,
          title: 'Where can I get some?',
          description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
        }];
      }

      _createClass(FaqPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "changeClass",
        value: function changeClass(index) {
          this.classVariable = index;
        }
      }, {
        key: "expandItem",
        value: function expandItem(item) {
          var _this = this;

          if (item.expanded) {
            item.expanded = false;
          } else {
            this.items.map(function (listItem) {
              if (item == listItem) {
                listItem.expanded = !listItem.expanded;
                _this.status = !_this.status;
              } else {
                listItem.expanded = false;
              }

              return listItem;
            });
          }
        }
      }]);

      return FaqPage;
    }();

    FaqPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/faq/faq.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.page.scss */
      "./src/app/settings/faq/faq.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])], FaqPage);
    /***/
  }
}]);
//# sourceMappingURL=faq-faq-module-es5.js.map