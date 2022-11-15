(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starting-slide-starting-slide-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/starting-slide/starting-slide.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starting-slide/starting-slide.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n  <ion-button (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>  \r\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" [options]=\"homeOptions\" pager>\r\n    <ion-slide>\r\n      <div class=\"slide-content\">\r\n        <h2 class=\"slide-title\">Welcome to Intoactive</h2>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\r\n        <div class=\"btn-group\">\r\n          <ion-button fill=\"clear\" (click)=\"startApp()\">Login</ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"startApp2()\">Sign Up</ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"slide-content\">\r\n        <h2 class=\"slide-title\">What is Intoactive?</h2>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\r\n        <div class=\"btn-group\">\r\n          <ion-button fill=\"clear\" (click)=\"startApp()\">Login</ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"startApp2()\">Sign Up</ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"slide-content\">\r\n        <h2 class=\"slide-title\">Let's Started ?</h2>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\r\n        <div class=\"btn-group\">\r\n          <ion-button fill=\"clear\" (click)=\"startApp()\">Login</ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"startApp2()\">Sign Up</ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n      <img src=\"assets/images/ica-slidebox-img-3.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">Let'started?</h2>\r\n      <ion-button fill=\"clear\" (click)=\"startApp()\"> Login <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\r\n    </ion-slide> -->\r\n  </ion-slides>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/starting-slide/starting-slide-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/starting-slide/starting-slide-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: StartingSlidePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingSlidePageRoutingModule", function() { return StartingSlidePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _starting_slide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starting-slide.page */ "./src/app/starting-slide/starting-slide.page.ts");




const routes = [
    {
        path: '',
        component: _starting_slide_page__WEBPACK_IMPORTED_MODULE_3__["StartingSlidePage"]
    }
];
let StartingSlidePageRoutingModule = class StartingSlidePageRoutingModule {
};
StartingSlidePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartingSlidePageRoutingModule);



/***/ }),

/***/ "./src/app/starting-slide/starting-slide.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/starting-slide/starting-slide.module.ts ***!
  \*********************************************************/
/*! exports provided: StartingSlidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingSlidePageModule", function() { return StartingSlidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _starting_slide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starting-slide-routing.module */ "./src/app/starting-slide/starting-slide-routing.module.ts");
/* harmony import */ var _starting_slide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starting-slide.page */ "./src/app/starting-slide/starting-slide.page.ts");







let StartingSlidePageModule = class StartingSlidePageModule {
};
StartingSlidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _starting_slide_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartingSlidePageRoutingModule"]
        ],
        declarations: [_starting_slide_page__WEBPACK_IMPORTED_MODULE_6__["StartingSlidePage"]]
    })
], StartingSlidePageModule);



/***/ }),

/***/ "./src/app/starting-slide/starting-slide.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/starting-slide/starting-slide.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100vh;\n}\n\nion-slide.swiper-slide {\n  background: #FFF;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\nion-slide.swiper-slide:after {\n  content: \"\";\n  background: linear-gradient(0deg, black 0%, rgba(255, 255, 255, 0) 50%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\nion-slide.swiper-slide:first-child {\n  background: url('skip-1.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\nion-slide.swiper-slide:nth-child(2) {\n  background: url('skip-2.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\nion-slide.swiper-slide:nth-child(3) {\n  background: url('skip-3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.slide-title {\n  font-weight: 400;\n  font-size: 1.75rem;\n  position: relative;\n  z-index: 9;\n  color: #FFF;\n}\n\nion-slide.swiper-slide p {\n  font-size: 1rem;\n  line-height: 1.65;\n  color: #FFF;\n  margin: 0 55px 10px;\n  position: relative;\n  z-index: 9;\n}\n\nion-button {\n  position: absolute;\n  right: 0;\n  z-index: 9;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --box-shadow: none;\n  --color: #26a69a;\n}\n\np ion-button {\n  position: unset;\n  display: table;\n  margin: 8px auto 0;\n  background: #232323;\n}\n\n.slide-content {\n  position: absolute;\n  bottom: 45px;\n  z-index: 9;\n}\n\n.btn-group ion-button {\n  background: #232323;\n  border-radius: 4px;\n  position: relative;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRpbmctc2xpZGUvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHN0YXJ0aW5nLXNsaWRlXFxzdGFydGluZy1zbGlkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXJ0aW5nLXNsaWRlL3N0YXJ0aW5nLXNsaWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGFBQUE7QUNFWDs7QUREQTtFQUF1QixnQkFBQTtFQUFpQixzQkFBQTtFQUF1Qix5QkFBQTtBQ08vRDs7QUROQTtFQUE2QixXQUFBO0VBQWdCLHVFQUFBO0VBQWdGLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7QUNjdEo7O0FEYkE7RUFBbUMsdUNBQUE7RUFBMEQsc0JBQUE7RUFBdUIsMkJBQUE7QUNtQnBIOztBRGxCQTtFQUFvQyx1Q0FBQTtFQUEwRCxzQkFBQTtFQUF1QiwyQkFBQTtBQ3dCckg7O0FEdkJBO0VBQW9DLHVDQUFBO0VBQTBELHNCQUFBO0VBQXVCLDJCQUFBO0FDNkJySDs7QUQ1QkE7RUFBYyxnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsV0FBQTtBQ29DaEY7O0FEbkNBO0VBQXlCLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLFVBQUE7QUM0QzlHOztBRDNDQTtFQUFXLGtCQUFBO0VBQW1CLFFBQUE7RUFBUyxVQUFBO0VBQVcseUJBQUE7RUFBMEIsaUNBQUE7RUFBa0MsK0JBQUE7RUFBZ0Msa0JBQUE7RUFBbUIsZ0JBQUE7QUNzRGpLOztBRHBESTtFQUFXLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLG1CQUFBO0FDMkRqRTs7QUR6REE7RUFBZSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsVUFBQTtBQytEL0M7O0FEOURBO0VBQXNCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWlCLGlCQUFBO0FDc0VsRyIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0aW5nLXNsaWRlL3N0YXJ0aW5nLXNsaWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXN7aGVpZ2h0OiAxMDB2aDt9XHJcbmlvbi1zbGlkZS5zd2lwZXItc2xpZGV7YmFja2dyb3VuZDogI0ZGRjtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2p1c3RpZnktY29udGVudDogZmxleC1lbmQ7fVxyXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlOmFmdGVye2NvbnRlbnQ6ICcnOyAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA1MCUpO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogYWJzb2x1dGU7fVxyXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxke2JhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NraXAtMS5qcGcpIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XHJcbmlvbi1zbGlkZS5zd2lwZXItc2xpZGU6bnRoLWNoaWxkKDIpe2JhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NraXAtMi5qcGcpIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XHJcbmlvbi1zbGlkZS5zd2lwZXItc2xpZGU6bnRoLWNoaWxkKDMpe2JhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NraXAtMy5qcGcpIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XHJcbi5zbGlkZS10aXRsZSB7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDEuNzVyZW07cG9zaXRpb246IHJlbGF0aXZlO3otaW5kZXg6IDk7Y29sb3I6ICNGRkY7fVxyXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHB7Zm9udC1zaXplOiAxcmVtO2xpbmUtaGVpZ2h0OiAxLjY1O2NvbG9yOiAjRkZGO21hcmdpbjogMCA1NXB4IDEwcHg7cG9zaXRpb246IHJlbGF0aXZlO3otaW5kZXg6IDk7fVxyXG5pb24tYnV0dG9ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogMDt6LWluZGV4OiA5Oy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7LS1ib3gtc2hhZG93OiBub25lOy0tY29sb3I6ICMyNmE2OWE7fVxyXG5we1xyXG4gICAgaW9uLWJ1dHRvbntwb3NpdGlvbjogdW5zZXQ7ZGlzcGxheTogdGFibGU7bWFyZ2luOiA4cHggYXV0byAwO2JhY2tncm91bmQ6ICMyMzIzMjM7fVxyXG59XHJcbi5zbGlkZS1jb250ZW50e3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDQ1cHg7ei1pbmRleDogOTt9XHJcbi5idG4tZ3JvdXAgaW9uLWJ1dHRvbntiYWNrZ3JvdW5kOiAjMjMyMzIzO2JvcmRlci1yYWRpdXM6IDRweDtwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1sZWZ0OiA1cHg7bWFyZ2luLXJpZ2h0OiA1cHg7fSIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjayAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA1MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1zbGlkZS5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9za2lwLTEuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9za2lwLTIuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9za2lwLTMuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luOiAwIDU1cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICMyNmE2OWE7XG59XG5cbnAgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiB1bnNldDtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogOHB4IGF1dG8gMDtcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcbn1cblxuLnNsaWRlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDVweDtcbiAgei1pbmRleDogOTtcbn1cblxuLmJ0bi1ncm91cCBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/starting-slide/starting-slide.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/starting-slide/starting-slide.page.ts ***!
  \*******************************************************/
/*! exports provided: StartingSlidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingSlidePage", function() { return StartingSlidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");






let StartingSlidePage = class StartingSlidePage {
    constructor(menu, router, storage, commonService) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.commonService = commonService;
        this.showSkip = true;
        this.homeOptions = {
            initialSlide: 0,
            loop: false,
            autoplay: true,
            autoplayDisableOnInteraction: false
        };
    }
    startApp() {
        this.router
            .navigateByUrl('/signin', { replaceUrl: true })
            .then(() => this.storage.set('ion_did_tutorial', true));
    }
    startApp2() {
        this.router
            .navigateByUrl('/signup', { replaceUrl: true })
            .then(() => this.storage.set('ion_did_tutorial', true));
    }
    onSlideChangeStart(event) {
        event.target.isEnd().then(isEnd => {
            this.showSkip = !isEnd;
        });
    }
    ionViewWillEnter() {
        this.storage.get('ion_did_tutorial').then(res => {
            if (res === true) {
                this.router.navigateByUrl('/signin', { replaceUrl: true });
            }
        });
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }
};
StartingSlidePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], StartingSlidePage.prototype, "slides", void 0);
StartingSlidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-starting-slide',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starting-slide.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/starting-slide/starting-slide.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starting-slide.page.scss */ "./src/app/starting-slide/starting-slide.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], StartingSlidePage);



/***/ })

}]);
//# sourceMappingURL=starting-slide-starting-slide-module-es2015.js.map