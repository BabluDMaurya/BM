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
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100vh; }\n\nion-slide.swiper-slide {\n  background: #FFF;\n  flex-direction: column;\n  justify-content: flex-end; }\n\nion-slide.swiper-slide:after {\n  content: '';\n  background: linear-gradient(0deg, black 0%, rgba(255, 255, 255, 0) 50%);\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\nion-slide.swiper-slide:first-child {\n  background: url('skip-1.jpg') no-repeat;\n  background-size: cover;\n  background-position: center; }\n\nion-slide.swiper-slide:nth-child(2) {\n  background: url('skip-2.jpg') no-repeat;\n  background-size: cover;\n  background-position: center; }\n\nion-slide.swiper-slide:nth-child(3) {\n  background: url('skip-3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.slide-title {\n  font-weight: 400;\n  font-size: 1.75rem;\n  position: relative;\n  z-index: 9;\n  color: #FFF; }\n\nion-slide.swiper-slide p {\n  font-size: 1rem;\n  line-height: 1.65;\n  color: #FFF;\n  margin: 0 55px 10px;\n  position: relative;\n  z-index: 9; }\n\nion-button {\n  position: absolute;\n  right: 0;\n  z-index: 9;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --box-shadow: none;\n  --color: #26a69a; }\n\np ion-button {\n  position: unset;\n  display: table;\n  margin: 8px auto 0;\n  background: #232323; }\n\n.slide-content {\n  position: absolute;\n  bottom: 45px;\n  z-index: 9; }\n\n.btn-group ion-button {\n  background: #232323;\n  border-radius: 4px;\n  position: relative;\n  margin-left: 5px;\n  margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRpbmctc2xpZGUvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHN0YXJ0aW5nLXNsaWRlXFxzdGFydGluZy1zbGlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxhQUFhLEVBQUE7O0FBQ3hCO0VBQXVCLGdCQUFnQjtFQUFDLHNCQUFzQjtFQUFDLHlCQUF5QixFQUFBOztBQUN4RjtFQUE2QixXQUFXO0VBQUssdUVBQStFO0VBQUMsV0FBVztFQUFDLFlBQVk7RUFBQyxrQkFBa0IsRUFBQTs7QUFDeEs7RUFBbUMsdUNBQXlEO0VBQUMsc0JBQXNCO0VBQUMsMkJBQTJCLEVBQUE7O0FBQy9JO0VBQW9DLHVDQUF5RDtFQUFDLHNCQUFzQjtFQUFDLDJCQUEyQixFQUFBOztBQUNoSjtFQUFvQyx1Q0FBeUQ7RUFBQyxzQkFBc0I7RUFBQywyQkFBMkIsRUFBQTs7QUFDaEo7RUFBYyxnQkFBZ0I7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0I7RUFBQyxVQUFVO0VBQUMsV0FBVyxFQUFBOztBQUMzRjtFQUF5QixlQUFlO0VBQUMsaUJBQWlCO0VBQUMsV0FBVztFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLFVBQVUsRUFBQTs7QUFDeEg7RUFBVyxrQkFBa0I7RUFBQyxRQUFRO0VBQUMsVUFBVTtFQUFDLHlCQUFhO0VBQWEsaUNBQXFCO0VBQWEsK0JBQW1CO0VBQWEsa0JBQWE7RUFBTSxnQkFBUSxFQUFBOztBQUN6SztFQUNlLGVBQWU7RUFBQyxjQUFjO0VBQUMsa0JBQWtCO0VBQUMsbUJBQW1CLEVBQUE7O0FBRXBGO0VBQWUsa0JBQWtCO0VBQUMsWUFBWTtFQUFDLFVBQVUsRUFBQTs7QUFDekQ7RUFBc0IsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCO0VBQUUsZ0JBQWdCO0VBQUMsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFydGluZy1zbGlkZS9zdGFydGluZy1zbGlkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVze2hlaWdodDogMTAwdmg7fVxyXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRle2JhY2tncm91bmQ6ICNGRkY7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO31cclxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTphZnRlcntjb250ZW50OiAnJzsgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTAlKTt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246IGFic29sdXRlO31cclxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZHtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9za2lwLTEuanBnKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxyXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlOm50aC1jaGlsZCgyKXtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9za2lwLTIuanBnKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxyXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlOm50aC1jaGlsZCgzKXtiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9za2lwLTMuanBnKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxyXG4uc2xpZGUtdGl0bGUge2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAxLjc1cmVtO3Bvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiA5O2NvbG9yOiAjRkZGO31cclxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZSBwe2ZvbnQtc2l6ZTogMXJlbTtsaW5lLWhlaWdodDogMS42NTtjb2xvcjogI0ZGRjttYXJnaW46IDAgNTVweCAxMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiA5O31cclxuaW9uLWJ1dHRvbntwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDA7ei1pbmRleDogOTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWNvbG9yOiAjMjZhNjlhO31cclxucHtcclxuICAgIGlvbi1idXR0b257cG9zaXRpb246IHVuc2V0O2Rpc3BsYXk6IHRhYmxlO21hcmdpbjogOHB4IGF1dG8gMDtiYWNrZ3JvdW5kOiAjMjMyMzIzO31cclxufVxyXG4uc2xpZGUtY29udGVudHtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA0NXB4O3otaW5kZXg6IDk7fVxyXG4uYnRuLWdyb3VwIGlvbi1idXR0b257YmFja2dyb3VuZDogIzIzMjMyMztib3JkZXItcmFkaXVzOiA0cHg7cG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW4tbGVmdDogNXB4O21hcmdpbi1yaWdodDogNXB4O30iXX0= */");

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