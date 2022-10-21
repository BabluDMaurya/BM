function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-video-program-view-video-program-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramVideoProgramViewVideoProgramViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-title>Live</ion-title>  \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div id=\"rmpPlayer\"></div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: VideoProgramViewPageRoutingModule */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoProgramViewPageRoutingModule", function () {
      return VideoProgramViewPageRoutingModule;
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


    var _video_program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video-program-view.page */
    "./src/app/program/video-program-view/video-program-view.page.ts");

    var routes = [{
      path: '',
      component: _video_program_view_page__WEBPACK_IMPORTED_MODULE_3__["VideoProgramViewPage"]
    }];

    var VideoProgramViewPageRoutingModule = function VideoProgramViewPageRoutingModule() {
      _classCallCheck(this, VideoProgramViewPageRoutingModule);
    };

    VideoProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideoProgramViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view.module.ts ***!
    \*************************************************************************/

  /*! exports provided: VideoProgramViewPageModule */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoProgramViewPageModule", function () {
      return VideoProgramViewPageModule;
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


    var _video_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-program-view-routing.module */
    "./src/app/program/video-program-view/video-program-view-routing.module.ts");
    /* harmony import */


    var _video_program_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video-program-view.page */
    "./src/app/program/video-program-view/video-program-view.page.ts");

    var VideoProgramViewPageModule = function VideoProgramViewPageModule() {
      _classCallCheck(this, VideoProgramViewPageModule);
    };

    VideoProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _video_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoProgramViewPageRoutingModule"]],
      declarations: [_video_program_view_page__WEBPACK_IMPORTED_MODULE_6__["VideoProgramViewPage"]]
    })], VideoProgramViewPageModule);
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-list {\n  padding: 0;\n  margin: 10px 0;\n}\n\n.top-list ion-item {\n  --min-height: 85px;\n  background: #FFF;\n  box-shadow: none;\n}\n\n.top-list ion-item ion-label {\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0;\n}\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem;\n}\n\n.users-list {\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: 100%;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background:transparent;\n}\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n.users-list ion-item span {\n  margin-left: -25px;\n}\n\n.users-list ion-item span:first-child {\n  margin-left: 0;\n}\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -25px;\n}\n\n.list-info {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 6px;\n  margin-bottom: 0;\n}\n\n.list-info ion-item {\n  width: 48%;\n  box-shadow: 0.001em 5px 12px rgba(34, 35, 58, 0.09);\n  margin: auto;\n  margin-bottom: 8px;\n}\n\n.list-info ion-item img {\n  width: 24px;\n  margin-right: 8px;\n}\n\n.list-info ion-item ion-label {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS92aWRlby1wcm9ncmFtLXZpZXcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXHZpZGVvLXByb2dyYW0tdmlld1xcdmlkZW8tcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZ3JhbS92aWRlby1wcm9ncmFtLXZpZXcvdmlkZW8tcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFVBQUE7RUFBVyxjQUFBO0FDR3JCOztBREZBO0VBQW1CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGdCQUFBO0FDUXZEOztBRFBBO0VBQTZCLGNBQUE7RUFBZSxrQkFBQTtFQUFtQixXQUFBO0VBQVksU0FBQTtFQUFVLDJCQUFBO0VBQTRCLGNBQUE7QUNnQmpIOztBRGZBO0VBQVUsV0FBQTtFQUFZLFlBQUE7RUFBYSxtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixhQUFBO0VBQWMsdUJBQUE7RUFBd0IsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsVUFBQTtFQUFXLFNBQUE7RUFBVSwyQkFBQTtBQzZCNUs7O0FENUJBO0VBQW9CLGNBQUE7RUFBZSxrQkFBQTtBQ2lDbkM7O0FEL0JBO0VBQVksY0FBQTtFQUFlLFdBQUE7RUFBWSxnQkFBQTtBQ3FDdkM7O0FEcENBO0VBQXFCLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxXQUFBO0VBQVksa0JBQUE7RUFBbUIsc0JBQUE7RUFBdUIsd0JBQUE7QUM2QzVHOztBRDVDQTtFQUF5QixXQUFBO0VBQVksWUFBQTtFQUFhLG9CQUFBO0tBQUEsaUJBQUE7RUFBa0Isa0JBQUE7QUNtRHBFOztBRGxEQTtFQUEwQixrQkFBQTtBQ3NEMUI7O0FEckRBO0VBQXNDLGNBQUE7QUN5RHRDOztBRHhEQTtFQUFVLFdBQUE7RUFBVyxZQUFBO0VBQVksZUFBQTtFQUFnQixrQkFBQTtFQUFrQixtQkFBQTtFQUFtQixrQkFBQTtFQUFrQixhQUFBO0VBQWEsdUJBQUE7RUFBdUIsbUJBQUE7RUFBbUIsU0FBQTtFQUFVLGtCQUFBO0FDc0V6Szs7QURwRUE7RUFBVyxhQUFBO0VBQWMsZUFBQTtFQUFnQixZQUFBO0VBQWEsZ0JBQUE7QUMyRXREOztBRDFFQTtFQUFvQixVQUFBO0VBQVcsbURBQUE7RUFBb0QsWUFBQTtFQUFhLGtCQUFBO0FDaUZoRzs7QURoRkE7RUFBd0IsV0FBQTtFQUFZLGlCQUFBO0FDcUZwQzs7QURwRkE7RUFBOEIsa0JBQUE7QUN3RjlCIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS92aWRlby1wcm9ncmFtLXZpZXcvdmlkZW8tcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbGlzdHtwYWRkaW5nOiAwO21hcmdpbjogMTBweCAwO31cclxuLnRvcC1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogODVweDtiYWNrZ3JvdW5kOiAjRkZGO2JveC1zaGFkb3c6IG5vbmU7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse3BhZGRpbmctdG9wOiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDhweDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO21hcmdpbi1sZWZ0OiAwO31cclxuLnRvcC1pY29ue3dpZHRoOiA0MHB4O2hlaWdodDogNDBweDtiYWNrZ3JvdW5kOiAjZTlmNmY1O2JvcmRlci1yYWRpdXM6IDUwJTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTEwcHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTt9XHJcbi50b3AtaWNvbiBpb24taWNvbiB7Y29sb3I6ICMyN2E2OWE7Zm9udC1zaXplOiAxLjI1cmVtO31cclxuXHJcbi51c2Vycy1saXN0e2Rpc3BsYXk6IGJsb2NrO3dpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206IDA7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDt3aWR0aDogMTAwJTstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZ3t3aWR0aDogNDJweDtoZWlnaHQ6IDQycHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gc3BhbnttYXJnaW4tbGVmdDogLTI1cHg7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBzcGFuOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnZpZXctYWxse3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWF4LXdpZHRoOiA0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2YxZjBmMDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiAtMjVweDt9XHJcblxyXG4ubGlzdC1pbmZve2Rpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO3BhZGRpbmc6IDZweDttYXJnaW4tYm90dG9tOiAwO31cclxuLmxpc3QtaW5mbyBpb24taXRlbXt3aWR0aDogNDglO2JveC1zaGFkb3c6IDAuMDAxZW0gNXB4IDEycHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTttYXJnaW46IGF1dG87bWFyZ2luLWJvdHRvbTogOHB4O31cclxuLmxpc3QtaW5mbyBpb24taXRlbSBpbWd7d2lkdGg6IDI0cHg7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGlvbi1sYWJlbHtmb250LXNpemU6IDAuODVyZW07fSIsIi50b3AtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4udG9wLWxpc3QgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDg1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4udG9wLWljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZTlmNmY1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4udG9wLWljb24gaW9uLWljb24ge1xuICBjb2xvcjogIzI3YTY5YTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udXNlcnMtbGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gc3BhbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4udmlldy1hbGwge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXgtd2lkdGg6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG59XG5cbi5saXN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxpc3QtaW5mbyBpb24taXRlbSB7XG4gIHdpZHRoOiA0OCU7XG4gIGJveC1zaGFkb3c6IDAuMDAxZW0gNXB4IDEycHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5saXN0LWluZm8gaW9uLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view.page.ts ***!
    \***********************************************************************/

  /*! exports provided: VideoProgramViewPage */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoProgramViewPage", function () {
      return VideoProgramViewPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");

    var baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].ApiUrl;

    var VideoProgramViewPage = /*#__PURE__*/function () {
      function VideoProgramViewPage(navCtrl, actRoute, postService, commonService) {
        _classCallCheck(this, VideoProgramViewPage);

        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.postService = postService;
        this.commonService = commonService;
        this.elementID = 'rmpPlayer';
        this.rmp = null;
        this.storagePath = baseUrl + 'storage/';
      } //------------------ -- GO BACK  ------------


      _createClass(VideoProgramViewPage, [{
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        } // When home page comes into view we play our player

      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (this.rmp && this.rmp.getReady()) {
            this.rmp.play();
          }
        } // When we leave home page for another page we pause our player

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          if (this.rmp && this.rmp.getReady()) {
            this.rmp.pause();
          }
        } // When home page initially loads we configure and init our player 

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.commonService.presentLoader();
          this.postService.getVideoPostById({
            'videoId': this.videoId
          }).subscribe(function (data) {
            _this.postData = data.postData;
            _this.videoDataPath = _this.storagePath + _this.postData.video_path;
            _this.videoThumbPath = _this.storagePath + _this.postData.thumb_path;

            _this.postService.getAddByPGId({
              'pgId': _this.pgId
            }).subscribe(function (data) {
              _this.addData = data.addData;
              _this.ad_xml_path = _this.addData.ad_xml_path;

              _this.readiantMediaPlayer();
            });
          }, function (err) {
            _this.commonService.dismissLoader();

            _this.commonService.presentToast('Something went wrong.');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.actRoute.paramMap.subscribe(function (params) {
            _this2.videoId = params.get('videoId');
            _this2.pgId = params.get('pgId');
          });
        }
      }, {
        key: "readiantMediaPlayer",
        value: function readiantMediaPlayer() {
          this.src = {
            mp4: this.videoDataPath
          }; // Define ad-schedule
          // var schedule = {
          //   // Preroll
          //   preroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
          //   // Midroll
          //   midroll: [
          //     [30, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml'],
          //     [60, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml']
          //   ],
          //   // Postroll
          //   postroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml'
          // };

          this.settings = {
            licenseKey: 'c3BkbW9vanJ5YUAxNTk5MjA5',
            src: this.src,
            // width: 640,
            // height: 360,
            autoHeightMode: true,
            autoHeightModeRatio: 2.4,
            preload: 'auto',
            autoplay: true,
            pathToRmpFiles: 'assets/rmp/',
            automaticFullscreenOnLandscape: true,
            // hideControls: true,
            hideSeekBar: true,
            hideVolume: true,
            hideCentralPlayButton: true,
            crossorigin: "",
            //logo
            // logo: "../../../assets/images/logo.png",
            // logoPosition: 'topright',
            // logoWatermark: true,
            // if we need ads
            ads: true,
            // rmp-vast is generally preferred in Cordova-based apps to display ads
            // but if you are using Google ads servers (DFP, AdSense, AdX), the IMA SDK is required
            // see https://www.radiantmediaplayer.com/docs/latest/mobile-applications.html#mobile-video-ads
            adParser: 'rmp-vast',
            adTagUrl: this.ad_xml_path,
            //adTagUrl: 'https://ionicinto.wdipl.com/intoactive1714.xml',
            //adTagUrl: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
            // adSchedule: schedule,
            contentMetadata: {
              poster: [this.videoThumbPath]
            }
          };
          this.rmp = new RadiantMP(this.elementID);
          this.rmp.init(this.settings);
          this.commonService.dismissLoader(); // handle "tabs" in fullscreen mode

          var rmpContainer = document.getElementById(this.elementID);
          var FW = this.rmp.getFramework();
          var bottomTabBar;
          rmpContainer.addEventListener('ended', function () {
            //this.navCtrl.back();
            console.log('player ended');
          });
          rmpContainer.addEventListener('enterfullscreen', function () {
            if (!bottomTabBar) {
              bottomTabBar = document.querySelector('.tabbar.show-tabbar');
            }

            FW.addClass(bottomTabBar, 'rmp-no-display');
          });
          rmpContainer.addEventListener('exitfullscreen', function () {
            if (!bottomTabBar) {
              bottomTabBar = document.querySelector('.tabbar.show-tabbar');
            }

            FW.removeClass(bottomTabBar, 'rmp-no-display');
          });
        }
      }]);

      return VideoProgramViewPage;
    }();

    VideoProgramViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    VideoProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-program-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-program-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-program-view.page.scss */
      "./src/app/program/video-program-view/video-program-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])], VideoProgramViewPage);
    /***/
  }
}]);
//# sourceMappingURL=program-video-program-view-video-program-view-module-es5.js.map