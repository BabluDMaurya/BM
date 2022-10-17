function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starting-slide-starting-slide-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/starting-slide/starting-slide.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starting-slide/starting-slide.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartingSlideStartingSlidePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\r\n  <ion-button (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>  \r\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" [options]=\"homeOptions\" pager>\r\n    <ion-slide>\r\n      <div class=\"slide-content\">\r\n        <h2 class=\"slide-title\">Welcome to Intoactive</h2>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\r\n        <div class=\"btn-group\">\r\n          <ion-button fill=\"clear\" (click)=\"startApp()\">Login</ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"startApp2()\">Sign Up</ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"slide-content\">\r\n        <h2 class=\"slide-title\">What is Intoactive?</h2>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\r\n        <div class=\"btn-group\">\r\n          <ion-button fill=\"clear\" (click)=\"startApp()\">Login</ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"startApp2()\">Sign Up</ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"slide-content\">\r\n        <h2 class=\"slide-title\">Let's Started ?</h2>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\r\n        <div class=\"btn-group\">\r\n          <ion-button fill=\"clear\" (click)=\"startApp()\">Login</ion-button>\r\n          <ion-button fill=\"clear\" (click)=\"startApp2()\">Sign Up</ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n      <img src=\"assets/images/ica-slidebox-img-3.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">Let'started?</h2>\r\n      <ion-button fill=\"clear\" (click)=\"startApp()\"> Login <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\r\n    </ion-slide> -->\r\n  </ion-slides>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/starting-slide/starting-slide-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/starting-slide/starting-slide-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: StartingSlidePageRoutingModule */

  /***/
  function srcAppStartingSlideStartingSlideRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartingSlidePageRoutingModule", function () {
      return StartingSlidePageRoutingModule;
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


    var _starting_slide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./starting-slide.page */
    "./src/app/starting-slide/starting-slide.page.ts");

    var routes = [{
      path: '',
      component: _starting_slide_page__WEBPACK_IMPORTED_MODULE_3__["StartingSlidePage"]
    }];

    var StartingSlidePageRoutingModule = function StartingSlidePageRoutingModule() {
      _classCallCheck(this, StartingSlidePageRoutingModule);
    };

    StartingSlidePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StartingSlidePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/starting-slide/starting-slide.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/starting-slide/starting-slide.module.ts ***!
    \*********************************************************/

  /*! exports provided: StartingSlidePageModule */

  /***/
  function srcAppStartingSlideStartingSlideModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartingSlidePageModule", function () {
      return StartingSlidePageModule;
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


    var _starting_slide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./starting-slide-routing.module */
    "./src/app/starting-slide/starting-slide-routing.module.ts");
    /* harmony import */


    var _starting_slide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./starting-slide.page */
    "./src/app/starting-slide/starting-slide.page.ts");

    var StartingSlidePageModule = function StartingSlidePageModule() {
      _classCallCheck(this, StartingSlidePageModule);
    };

    StartingSlidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _starting_slide_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartingSlidePageRoutingModule"]],
      declarations: [_starting_slide_page__WEBPACK_IMPORTED_MODULE_6__["StartingSlidePage"]]
    })], StartingSlidePageModule);
    /***/
  },

  /***/
  "./src/app/starting-slide/starting-slide.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/starting-slide/starting-slide.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStartingSlideStartingSlidePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100vh;\n}\n\nion-slide.swiper-slide {\n  background: #FFF;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\nion-slide.swiper-slide:after {\n  content: \"\";\n  background: linear-gradient(0deg, black 0%, rgba(255, 255, 255, 0) 50%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\nion-slide.swiper-slide:first-child {\n  background: url('skip-1.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\nion-slide.swiper-slide:nth-child(2) {\n  background: url('skip-2.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\nion-slide.swiper-slide:nth-child(3) {\n  background: url('skip-3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.slide-title {\n  font-weight: 400;\n  font-size: 1.75rem;\n  position: relative;\n  z-index: 9;\n  color: #FFF;\n}\n\nion-slide.swiper-slide p {\n  font-size: 1rem;\n  line-height: 1.65;\n  color: #FFF;\n  margin: 0 55px 10px;\n  position: relative;\n  z-index: 9;\n}\n\nion-button {\n  position: absolute;\n  right: 0;\n  z-index: 9;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --box-shadow: none;\n  --color: #26a69a;\n}\n\np ion-button {\n  position: unset;\n  display: table;\n  margin: 8px auto 0;\n  background: #232323;\n}\n\n.slide-content {\n  position: absolute;\n  bottom: 45px;\n  z-index: 9;\n}\n\n.btn-group ion-button {\n  background: #232323;\n  border-radius: 4px;\n  position: relative;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRpbmctc2xpZGUvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcc3RhcnRpbmctc2xpZGVcXHN0YXJ0aW5nLXNsaWRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhcnRpbmctc2xpZGUvc3RhcnRpbmctc2xpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsYUFBQTtBQ0VYOztBRERBO0VBQXVCLGdCQUFBO0VBQWlCLHNCQUFBO0VBQXVCLHlCQUFBO0FDTy9EOztBRE5BO0VBQTZCLFdBQUE7RUFBZ0IsdUVBQUE7RUFBZ0YsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtBQ2N0Sjs7QURiQTtFQUFtQyx1Q0FBQTtFQUEwRCxzQkFBQTtFQUF1QiwyQkFBQTtBQ21CcEg7O0FEbEJBO0VBQW9DLHVDQUFBO0VBQTBELHNCQUFBO0VBQXVCLDJCQUFBO0FDd0JySDs7QUR2QkE7RUFBb0MsdUNBQUE7RUFBMEQsc0JBQUE7RUFBdUIsMkJBQUE7QUM2QnJIOztBRDVCQTtFQUFjLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxXQUFBO0FDb0NoRjs7QURuQ0E7RUFBeUIsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixXQUFBO0VBQVksbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsVUFBQTtBQzRDOUc7O0FEM0NBO0VBQVcsa0JBQUE7RUFBbUIsUUFBQTtFQUFTLFVBQUE7RUFBVyx5QkFBQTtFQUEwQixpQ0FBQTtFQUFrQywrQkFBQTtFQUFnQyxrQkFBQTtFQUFtQixnQkFBQTtBQ3NEaks7O0FEcERJO0VBQVcsZUFBQTtFQUFnQixjQUFBO0VBQWUsa0JBQUE7RUFBbUIsbUJBQUE7QUMyRGpFOztBRHpEQTtFQUFlLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxVQUFBO0FDK0QvQzs7QUQ5REE7RUFBc0IsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBaUIsaUJBQUE7QUNzRWxHIiwiZmlsZSI6InNyYy9hcHAvc3RhcnRpbmctc2xpZGUvc3RhcnRpbmctc2xpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlc3toZWlnaHQ6IDEwMHZoO31cclxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZXtiYWNrZ3JvdW5kOiAjRkZGO2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDt9XHJcbmlvbi1zbGlkZS5zd2lwZXItc2xpZGU6YWZ0ZXJ7Y29udGVudDogJyc7ICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSk7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbmlvbi1zbGlkZS5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7YmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2tpcC0xLmpwZykgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO31cclxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoMil7YmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2tpcC0yLmpwZykgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO31cclxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoMyl7YmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc2tpcC0zLmpwZykgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO31cclxuLnNsaWRlLXRpdGxlIHtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMS43NXJlbTtwb3NpdGlvbjogcmVsYXRpdmU7ei1pbmRleDogOTtjb2xvcjogI0ZGRjt9XHJcbmlvbi1zbGlkZS5zd2lwZXItc2xpZGUgcHtmb250LXNpemU6IDFyZW07bGluZS1oZWlnaHQ6IDEuNjU7Y29sb3I6ICNGRkY7bWFyZ2luOiAwIDU1cHggMTBweDtwb3NpdGlvbjogcmVsYXRpdmU7ei1pbmRleDogOTt9XHJcbmlvbi1idXR0b257cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwO3otaW5kZXg6IDk7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDstLWJveC1zaGFkb3c6IG5vbmU7LS1jb2xvcjogIzI2YTY5YTt9XHJcbnB7XHJcbiAgICBpb24tYnV0dG9ue3Bvc2l0aW9uOiB1bnNldDtkaXNwbGF5OiB0YWJsZTttYXJnaW46IDhweCBhdXRvIDA7YmFja2dyb3VuZDogIzIzMjMyMzt9XHJcbn1cclxuLnNsaWRlLWNvbnRlbnR7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogNDVweDt6LWluZGV4OiA5O31cclxuLmJ0bi1ncm91cCBpb24tYnV0dG9ue2JhY2tncm91bmQ6ICMyMzIzMjM7Ym9yZGVyLXJhZGl1czogNHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLWxlZnQ6IDVweDttYXJnaW4tcmlnaHQ6IDVweDt9IiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmlvbi1zbGlkZS5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIGJsYWNrIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NraXAtMS5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NraXAtMi5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3NraXAtMy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbiAgY29sb3I6ICNGRkY7XG59XG5cbmlvbi1zbGlkZS5zd2lwZXItc2xpZGUgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgNTVweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG59XG5cbmlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzI2YTY5YTtcbn1cblxucCBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHVuc2V0O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiA4cHggYXV0byAwO1xuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xufVxuXG4uc2xpZGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0NXB4O1xuICB6LWluZGV4OiA5O1xufVxuXG4uYnRuLWdyb3VwIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/starting-slide/starting-slide.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/starting-slide/starting-slide.page.ts ***!
    \*******************************************************/

  /*! exports provided: StartingSlidePage */

  /***/
  function srcAppStartingSlideStartingSlidePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartingSlidePage", function () {
      return StartingSlidePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/common.service */
    "./src/app/services/common.service.ts");

    var StartingSlidePage = /*#__PURE__*/function () {
      function StartingSlidePage(menu, router, storage, commonService) {
        _classCallCheck(this, StartingSlidePage);

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

      _createClass(StartingSlidePage, [{
        key: "startApp",
        value: function startApp() {
          var _this = this;

          this.router.navigateByUrl('/signin', {
            replaceUrl: true
          }).then(function () {
            return _this.storage.set('ion_did_tutorial', true);
          });
        }
      }, {
        key: "startApp2",
        value: function startApp2() {
          var _this2 = this;

          this.router.navigateByUrl('/signup', {
            replaceUrl: true
          }).then(function () {
            return _this2.storage.set('ion_did_tutorial', true);
          });
        }
      }, {
        key: "onSlideChangeStart",
        value: function onSlideChangeStart(event) {
          var _this3 = this;

          event.target.isEnd().then(function (isEnd) {
            _this3.showSkip = !isEnd;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this4 = this;

          this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
              _this4.router.navigateByUrl('/signin', {
                replaceUrl: true
              });
            }
          });
          this.menu.enable(false);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // enable the root left menu when leaving the tutorial page
          this.menu.enable(true);
        }
      }]);

      return StartingSlidePage;
    }();

    StartingSlidePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], StartingSlidePage.prototype, "slides", void 0);
    StartingSlidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-starting-slide',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./starting-slide.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/starting-slide/starting-slide.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./starting-slide.page.scss */
      "./src/app/starting-slide/starting-slide.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])], StartingSlidePage);
    /***/
  }
}]);
//# sourceMappingURL=starting-slide-starting-slide-module-es5.js.map