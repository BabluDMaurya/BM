(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-invitated-programs-invitated-programs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click) = \"goBack()\" *ngIf=\"!showPreview\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item> \r\n    <ion-item slot=\"center\">\r\n        <ion-label>Program List</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n</ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\" *ngIf=\"programData > 0 \">\r\n  <ion-item class=\"item-card\" *ngFor=\"let item of programList\">\r\n    <ion-avatar slot=\"start\" [routerLink]=\"['/program-view',item.id]\">\r\n      <img src=\"../../../assets/images/demo2.jpg\" *ngIf=\"item?.image_path\">\r\n      <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n    </ion-avatar>\r\n    <ion-label [routerLink]=\"['/program-view',item.id]\">\r\n      <h3 class=\"list-person\">{{item.title}}</h3>\r\n      <span class=\"list-name d-block\">{{item.type_id}}</span>\r\n      <span class=\"list-name\">By: {{item?.program_user?.user_name}}</span>\r\n      <p class=\"text-green\">{{item?.converted |date:'medium'}}</p>\r\n    </ion-label>\r\n    <div class=\"action-links\" slot=\"end\">\r\n      <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"requestedDropdown(item.id)\"></ion-icon>\r\n      <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(item)\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n</ion-content>\r\n<ion-content class=\"main_content\" *ngIf=\"programData == 0\">\r\n  <div class=\"container\">\r\n    <div class=\"empty-state\">\r\n      <img src= \"../../../assets/images/emptydate.svg\" >     \r\n      <ion-label>No Program</ion-label>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/program/invitated-programs/invitated-programs-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/program/invitated-programs/invitated-programs-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InvitatedProgramsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitatedProgramsPageRoutingModule", function() { return InvitatedProgramsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _invitated_programs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invitated-programs.page */ "./src/app/program/invitated-programs/invitated-programs.page.ts");




const routes = [
    {
        path: '',
        component: _invitated_programs_page__WEBPACK_IMPORTED_MODULE_3__["InvitatedProgramsPage"]
    }
];
let InvitatedProgramsPageRoutingModule = class InvitatedProgramsPageRoutingModule {
};
InvitatedProgramsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvitatedProgramsPageRoutingModule);



/***/ }),

/***/ "./src/app/program/invitated-programs/invitated-programs.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/program/invitated-programs/invitated-programs.module.ts ***!
  \*************************************************************************/
/*! exports provided: InvitatedProgramsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitatedProgramsPageModule", function() { return InvitatedProgramsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invitated_programs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invitated-programs-routing.module */ "./src/app/program/invitated-programs/invitated-programs-routing.module.ts");
/* harmony import */ var _invitated_programs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invitated-programs.page */ "./src/app/program/invitated-programs/invitated-programs.page.ts");







let InvitatedProgramsPageModule = class InvitatedProgramsPageModule {
};
InvitatedProgramsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invitated_programs_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvitatedProgramsPageRoutingModule"]
        ],
        declarations: [_invitated_programs_page__WEBPACK_IMPORTED_MODULE_6__["InvitatedProgramsPage"]]
    })
], InvitatedProgramsPageModule);



/***/ }),

/***/ "./src/app/program/invitated-programs/invitated-programs.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/program/invitated-programs/invitated-programs.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  background: #fff;\n}\n.top-header ion-icon {\n  font-size: 1.75rem;\n  color: #222;\n  margin: 0;\n}\n.top-header .top-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0;\n}\n.top-header .three-block {\n  text-align: center;\n  padding: 5px 0;\n}\n.top-header .three-block ion-item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.top-header .three-block ion-item ion-label {\n  text-transform: capitalize;\n  font-size: 1rem;\n  color: #222;\n}\n.top-header .three-block ion-item:first-child {\n  padding-left: 8px;\n  min-width: 80px;\n}\n.top-header .three-block ion-item:last-child {\n  min-width: 80px;\n}\n.top-header .three-block .icon-right-side {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.top-header .three-block .ion-text-end {\n  text-align: end !important;\n}\n.item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px;\n}\n.container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.empty-state img {\n  width: 40%;\n}\n.empty-state ion-label {\n  font-size: 1.25rem;\n  margin-top: 2rem;\n  color: #121212;\n}\n.item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9pbnZpdGF0ZWQtcHJvZ3JhbXMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXGludml0YXRlZC1wcm9ncmFtc1xcaW52aXRhdGVkLXByb2dyYW1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZ3JhbS9pbnZpdGF0ZWQtcHJvZ3JhbXMvaW52aXRhdGVkLXByb2dyYW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0FOO0FERUU7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERUU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNBTjtBREVNO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQVY7QURDVTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDZDtBREVNO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQVY7QURFTTtFQUNJLGVBQUE7QUNBVjtBREVNO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBVjtBREVNO0VBQ0ksMEJBQUE7QUNBVjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDREo7QURHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksVUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dSO0FEREU7RUFBc0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFlBQUE7QUNRekUiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL2ludml0YXRlZC1wcm9ncmFtcy9pbnZpdGF0ZWQtcHJvZ3JhbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50b3AtaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ4cHg7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAvLyBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwICwgMTclKTtcclxuICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAudG9wLWhlYWRpbmd7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7ICAgXHJcbiAgfVxyXG4gIC50aHJlZS1ibG9ja3tcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWl0ZW06Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgIG1pbi13aWR0aDo4MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmljb24tcmlnaHQtc2lkZXtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgICAuaW9uLXRleHQtZW5ke1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuLml0ZW0tY2FyZCBpb24tYXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgLmVtcHR5LXN0YXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5lbXB0eS1zdGF0ZSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAuZW1wdHktc3RhdGUgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIH1cclxuICAuaXRlbS1jYXJkIGlvbi1hdmF0YXJ7Ym9yZGVyLXJhZGl1czogMDstLWJvcmRlci1yYWRpdXM6IDA7aGVpZ2h0OiA3NXB4O3dpZHRoOiAxMDBweDt9ICIsIi50b3AtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi50b3AtaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luOiAwO1xufVxuLnRvcC1oZWFkZXIgLnRvcC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50b3AtaGVhZGVyIC50aHJlZS1ibG9jayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4udG9wLWhlYWRlciAudGhyZWUtYmxvY2sgaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG4udG9wLWhlYWRlciAudGhyZWUtYmxvY2sgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMyMjI7XG59XG4udG9wLWhlYWRlciAudGhyZWUtYmxvY2sgaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuLnRvcC1oZWFkZXIgLnRocmVlLWJsb2NrIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG4udG9wLWhlYWRlciAudGhyZWUtYmxvY2sgLmljb24tcmlnaHQtc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4udG9wLWhlYWRlciAudGhyZWUtYmxvY2sgLmlvbi10ZXh0LWVuZCB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1jYXJkIGlvbi1hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZW1wdHktc3RhdGUgaW1nIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmVtcHR5LXN0YXRlIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgY29sb3I6ICMxMjEyMTI7XG59XG5cbi5pdGVtLWNhcmQgaW9uLWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/program/invitated-programs/invitated-programs.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/program/invitated-programs/invitated-programs.page.ts ***!
  \***********************************************************************/
/*! exports provided: InvitatedProgramsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitatedProgramsPage", function() { return InvitatedProgramsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../requested-dropdown/requested-dropdown.component */ "./src/app/program/requested-dropdown/requested-dropdown.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schedule-modal/schedule-modal.component */ "./src/app/program/schedule-modal/schedule-modal.component.ts");







let InvitatedProgramsPage = class InvitatedProgramsPage {
    constructor(popoverController, programService, commonService, navCtrl) {
        this.popoverController = popoverController;
        this.programService = programService;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.myDate = new Date().toISOString();
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        let params = null;
        let userZoneDate = new Date(this.myDate);
        userZoneDate.setHours(0, 0, 0);
        params = { 'sortDate': userZoneDate.toUTCString() };
        console.log(userZoneDate.toUTCString());
        this.programService.getAllRequestedPrograms(params).subscribe(data => {
            console.log(data);
            this.programData = data.list.length;
            console.log(this.programData);
            this.programList = data.list.filter(el => {
                el.converted = new Date(el.program_date + 'Z');
                return el;
            });
        });
        console.log(this.programList);
    }
    ionItemViewWillEnter() {
    }
    requestedDropdown(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["RequestedDropdownComponent"],
                componentProps: {
                    "id": ev,
                    "user_type": this.userData.user_type,
                },
                translucent: false,
                cssClass: 'dropdown-menu'
            });
            popover.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.ngOnInit();
                }
            });
            return yield popover.present();
        });
    }
    showSchedule(event) {
        this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleModalComponent"], 'fullModal', { 'programDetail': event, 'user_type': this.userData.user_type });
    }
    goBack() {
        this.navCtrl.back();
    }
};
InvitatedProgramsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
InvitatedProgramsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invitated-programs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invitated-programs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invitated-programs.page.scss */ "./src/app/program/invitated-programs/invitated-programs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], InvitatedProgramsPage);



/***/ })

}]);
//# sourceMappingURL=program-invitated-programs-invitated-programs-module-es2015.js.map