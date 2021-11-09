(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simplebroadcaster-simplebroadcaster-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/simplebroadcaster/simplebroadcaster.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/simplebroadcaster/simplebroadcaster.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>simplebroadcaster</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n      <h2 id=\"title\">Record Stream demo - local recording</h2>\r\n\r\n      <form id=\"start-call\">\r\n          <legend id=\"my-number\"></legend>\r\n      </form>\r\n      <form id=\"select-device\">\r\n          <div class=\"col-2\">\r\n              <div class=\"center\">\r\n                  <select id='select-camera' name=\"camera\" class=\"custom-select\" placeholder=\"No camera\"></select>\r\n                  <legend id=\"my-camera\">Camera</legend>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-2\">\r\n              <div class=\"center\">\r\n                  <select id='select-mic' name=\"camera\" class=\"custom-select\" placeholder=\"No microphone\" ></select>\r\n                  <legend id=\"my-mic\">Microphone</legend>\r\n              </div>\r\n          </div>\r\n      </form>\r\n      <div id=\"call\" >\r\n          <p id=\"error-device\"></p>\r\n          <button type=\"button\" id=\"hangup\">Hangup</button>\r\n          <div id=\"remote-container\"></div>\r\n          <div id=\"local-container\"></div>\r\n          <div id=\"local-container\">\r\n              <video id=\"recordedVideo\" loop controls></video>\r\n          </div>\r\n          <div id =\"record-fct\">\r\n              <button type=\"button\" id=\"startRecording\">Start Recording</button>\r\n              <button type=\"button\" id=\"startRecordingVP9\">Start Recording VP9</button>\r\n              <button type=\"button\" id=\"stopRecording\">Stop Recording</button>\r\n              <button type=\"button\" id=\"pauseRecording\">Pause Recording</button>\r\n              <button type=\"button\" id=\"resumeRecording\">Resume Recording</button>\r\n              <button type=\"button\" id=\"play\">Play</button>\r\n              <button type=\"button\" id=\"download\">Download</button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/simplebroadcaster/simplebroadcaster-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/simplebroadcaster/simplebroadcaster-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SimplebroadcasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplebroadcasterPageRoutingModule", function() { return SimplebroadcasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _simplebroadcaster_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simplebroadcaster.page */ "./src/app/simplebroadcaster/simplebroadcaster.page.ts");




const routes = [
    {
        path: '',
        component: _simplebroadcaster_page__WEBPACK_IMPORTED_MODULE_3__["SimplebroadcasterPage"]
    }
];
let SimplebroadcasterPageRoutingModule = class SimplebroadcasterPageRoutingModule {
};
SimplebroadcasterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SimplebroadcasterPageRoutingModule);



/***/ }),

/***/ "./src/app/simplebroadcaster/simplebroadcaster.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/simplebroadcaster/simplebroadcaster.module.ts ***!
  \***************************************************************/
/*! exports provided: SimplebroadcasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplebroadcasterPageModule", function() { return SimplebroadcasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _simplebroadcaster_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simplebroadcaster-routing.module */ "./src/app/simplebroadcaster/simplebroadcaster-routing.module.ts");
/* harmony import */ var _simplebroadcaster_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simplebroadcaster.page */ "./src/app/simplebroadcaster/simplebroadcaster.page.ts");







let SimplebroadcasterPageModule = class SimplebroadcasterPageModule {
};
SimplebroadcasterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _simplebroadcaster_routing_module__WEBPACK_IMPORTED_MODULE_5__["SimplebroadcasterPageRoutingModule"]
        ],
        declarations: [_simplebroadcaster_page__WEBPACK_IMPORTED_MODULE_6__["SimplebroadcasterPage"]]
    })
], SimplebroadcasterPageModule);



/***/ }),

/***/ "./src/app/simplebroadcaster/simplebroadcaster.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/simplebroadcaster/simplebroadcaster.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXBsZWJyb2FkY2FzdGVyL3NpbXBsZWJyb2FkY2FzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/simplebroadcaster/simplebroadcaster.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/simplebroadcaster/simplebroadcaster.page.ts ***!
  \*************************************************************/
/*! exports provided: SimplebroadcasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplebroadcasterPage", function() { return SimplebroadcasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SimplebroadcasterPage = class SimplebroadcasterPage {
    constructor() { }
    ngOnInit() {
    }
};
SimplebroadcasterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-simplebroadcaster',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simplebroadcaster.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/simplebroadcaster/simplebroadcaster.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simplebroadcaster.page.scss */ "./src/app/simplebroadcaster/simplebroadcaster.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SimplebroadcasterPage);



/***/ })

}]);
//# sourceMappingURL=simplebroadcaster-simplebroadcaster-module-es2015.js.map