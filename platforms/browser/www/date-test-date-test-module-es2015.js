(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-test-date-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/date-test/date-test.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/date-test/date-test.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ionic Opentok</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <!-- Search Bar -->\r\n  <!-- <ion-searchbar placeholder=\"Filter Schedules\" [(ngModel)]=\"term\" animated=\"true\"></ion-searchbar> -->\r\n\r\n  <!-- List Items -->\r\n  <!-- <ion-list>\r\n    <ion-item *ngFor=\"let item of filterData | filter:term\">\r\n      <ion-label>{{item.firstName}} {{item.lastName}}</ion-label>\r\n    </ion-item>\r\n  </ion-list> -->\r\n  <div style=\"text-align:center\">\r\n    <button (click)=\"startCall()\">Start OpenTok Call</button>\r\n  </div>\r\n\r\n  <div id=\"subscriber\"></div>\r\n  <div id=\"publisher\"></div> \r\n  <div style=\"text-align:center\">\r\n    <button (click)=\"unPublish()\">Publish Close OpenTok</button>\r\n  </div>\r\n  <div style=\"text-align:center\">\r\n    <button (click)=\"closeSession()\">Close OpenTok</button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/date-test/date-test-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/date-test/date-test-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DateTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTestPageRoutingModule", function() { return DateTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _date_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-test.page */ "./src/app/date-test/date-test.page.ts");




const routes = [
    {
        path: '',
        component: _date_test_page__WEBPACK_IMPORTED_MODULE_3__["DateTestPage"]
    }
];
let DateTestPageRoutingModule = class DateTestPageRoutingModule {
};
DateTestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DateTestPageRoutingModule);



/***/ }),

/***/ "./src/app/date-test/date-test.module.ts":
/*!***********************************************!*\
  !*** ./src/app/date-test/date-test.module.ts ***!
  \***********************************************/
/*! exports provided: DateTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTestPageModule", function() { return DateTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _date_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-test-routing.module */ "./src/app/date-test/date-test-routing.module.ts");
/* harmony import */ var _date_test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-test.page */ "./src/app/date-test/date-test.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








let DateTestPageModule = class DateTestPageModule {
};
DateTestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _date_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["DateTestPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
        ],
        declarations: [_date_test_page__WEBPACK_IMPORTED_MODULE_6__["DateTestPage"]]
    })
], DateTestPageModule);



/***/ }),

/***/ "./src/app/date-test/date-test.page.scss":
/*!***********************************************!*\
  !*** ./src/app/date-test/date-test.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGUtdGVzdC9kYXRlLXRlc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/date-test/date-test.page.ts":
/*!*********************************************!*\
  !*** ./src/app/date-test/date-test.page.ts ***!
  \*********************************************/
/*! exports provided: DateTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTestPage", function() { return DateTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/program.service */ "./src/app/services/program.service.ts");



let DateTestPage = class DateTestPage {
    constructor(programService) {
        this.programService = programService;
        this.sessionId = '1_MX40NzA4MDA1NH5-MTYxMDU0ODQyMzczMX43T0daVCtIbkRNZHVCc01oVW5sRUdtM01-fg';
        this.token = 'T1==cGFydG5lcl9pZD00NzA4MDA1NCZzaWc9MmE3ZTM5Y2M4NjQxMjE0M2MzMzNkMjVlMmIxNDdmNWI4NGY0N2YyZDpzZXNzaW9uX2lkPTFfTVg0ME56QTRNREExTkg1LU1UWXhNRFUwT0RReU16Y3pNWDQzVDBkYVZDdElia1JOWkhWQ2MwMW9WVzVzUlVkdE0wMS1mZyZjcmVhdGVfdGltZT0xNjEwNTQ4NDIzJnJvbGU9cHVibGlzaGVyJm5vbmNlPTE2MTA1NDg0MjMuODU1MTE3MDM0MTg1MzMmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
        this.apiKey = '47080054';
        // this.programService.openTokSessionCreate({'time': 10}).subscribe( (data: any) => {
        //   this.sessionId = data.opentok_session_id;
        //   this.token = data.opentok_token;
        //   this.apiKey = data.opentok_api_key;
        //   // console.log('Data:'+JSON.stringify(data));
        //   console.log('sessionId:'+this.sessionId);
        //   console.log('token:'+this.token);
        //   console.log('apiKey:'+this.apiKey);
        // });
    }
    ngOnInit() { }
    startCall() {
        this.session = OT.initSession(this.apiKey, this.sessionId);
        this.publisher = OT.initPublisher('publisher');
        this.session.on({
            streamCreated: (event) => {
                this.session.subscribe(event.stream, 'subscriber');
                OT.updateViews();
            },
            streamDestroyed: (event) => {
                console.log(`Stream ${event.stream.name} ended because ${event.reason}`);
                OT.updateViews();
            },
            sessionConnected: (event) => {
                this.session.publish(this.publisher);
            }
        });
        this.session.connect(this.token, (error) => {
            if (error) {
                console.log(`There was an error connecting to the session ${error}`);
            }
        });
        this.publisher.on("streamDestroyed", function (event) {
            event.preventDefault();
            console.log("The publisher stopped streaming. Reason: "
                + event.reason);
        });
    }
    unPublish() {
        console.log(`publisher close`);
        this.session.unpublish(this.publisher);
    }
    closeSession() {
        console.log(`session close`);
        this.session.disconnect();
    }
};
DateTestPage.ctorParameters = () => [
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"] }
];
DateTestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./date-test.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/date-test/date-test.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./date-test.page.scss */ "./src/app/date-test/date-test.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]])
], DateTestPage);



/***/ })

}]);
//# sourceMappingURL=date-test-date-test-module-es2015.js.map