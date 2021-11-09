(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-slider-common-slider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-slider/common-slider.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-slider/common-slider.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>commonSlider</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <a class=\"item item-list-detail\">\r\n    <ion-scroll direction=\"x\">\r\n      <img ng-repeat=\"image in allImages\" ng-src=\"{{image.src}}\" ng-click=\"showImages($index)\" class=\"image-list-thumb\"/>\r\n    </ion-scroll>\r\n  </a>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/common-slider/common-slider-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/common-slider/common-slider-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CommonSliderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSliderPageRoutingModule", function() { return CommonSliderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_slider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-slider.page */ "./src/app/common-slider/common-slider.page.ts");




const routes = [
    {
        path: '',
        component: _common_slider_page__WEBPACK_IMPORTED_MODULE_3__["CommonSliderPage"]
    }
];
let CommonSliderPageRoutingModule = class CommonSliderPageRoutingModule {
};
CommonSliderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommonSliderPageRoutingModule);



/***/ }),

/***/ "./src/app/common-slider/common-slider.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/common-slider/common-slider.module.ts ***!
  \*******************************************************/
/*! exports provided: CommonSliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSliderPageModule", function() { return CommonSliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _common_slider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-slider-routing.module */ "./src/app/common-slider/common-slider-routing.module.ts");
/* harmony import */ var _common_slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-slider.page */ "./src/app/common-slider/common-slider.page.ts");







let CommonSliderPageModule = class CommonSliderPageModule {
};
CommonSliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _common_slider_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommonSliderPageRoutingModule"]
        ],
        declarations: [_common_slider_page__WEBPACK_IMPORTED_MODULE_6__["CommonSliderPage"]]
    })
], CommonSliderPageModule);



/***/ }),

/***/ "./src/app/common-slider/common-slider.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/common-slider/common-slider.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1zbGlkZXIvY29tbW9uLXNsaWRlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/common-slider/common-slider.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/common-slider/common-slider.page.ts ***!
  \*****************************************************/
/*! exports provided: CommonSliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSliderPage", function() { return CommonSliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonSliderPage = class CommonSliderPage {
    constructor() { }
    ngOnInit() {
    }
};
CommonSliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./common-slider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-slider/common-slider.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common-slider.page.scss */ "./src/app/common-slider/common-slider.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonSliderPage);



/***/ })

}]);
//# sourceMappingURL=common-slider-common-slider-module-es2015.js.map