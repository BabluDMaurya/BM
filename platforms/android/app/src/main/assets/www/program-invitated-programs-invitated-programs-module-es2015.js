(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-invitated-programs-invitated-programs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-list class=\"top-heading three-block\">\n    <ion-item slot=\"start\">\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n      </ion-buttons>\n    </ion-item>\n    <ion-item slot=\"center\">\n      <ion-label >Program List</ion-label>\n    </ion-item>\n   \n  </ion-list>\n</ion-header>\n\n<ion-content>\n  <ion-item class=\"item-card\" *ngFor=\"let item of programList\">\n    <ion-avatar slot=\"start\" [routerLink]=\"['/program-view',item.id]\">\n      <img src=\"../../../assets/images/demo2.jpg\" *ngIf=\"item?.image_path\">\n      <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\n    </ion-avatar>\n    <ion-label [routerLink]=\"['/program-view',item.id]\">\n      <h3 class=\"list-person\">{{item.title}}</h3>\n      <span class=\"list-name d-block\">{{item.type_id}}</span>\n      <span class=\"list-name\">By: {{item?.program_user?.user_name}}</span>\n      <p class=\"text-green\">{{item?.converted |date:'medium'}}</p>\n    </ion-label>\n    <div class=\"action-links\" slot=\"end\">\n      <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"requestedDropdown(item.id)\"></ion-icon>\n      <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(item)\"></ion-icon>\n\n    </div>\n  </ion-item>\n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px; }\n\n.item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9pbnZpdGF0ZWQtcHJvZ3JhbXMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXGludml0YXRlZC1wcm9ncmFtc1xcaW52aXRhdGVkLXByb2dyYW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUFzQixnQkFBZ0I7RUFBQyxrQkFBZ0I7RUFBRyxZQUFZO0VBQUMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9pbnZpdGF0ZWQtcHJvZ3JhbXMvaW52aXRhdGVkLXByb2dyYW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNhcmQgaW9uLWF2YXRhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY2FyZCBpb24tYXZhdGFye2JvcmRlci1yYWRpdXM6IDA7LS1ib3JkZXItcmFkaXVzOiAwO2hlaWdodDogNzVweDt3aWR0aDogMTAwcHg7fSAiXX0= */");

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
            this.programList = data.list.filter(el => {
                el.converted = new Date(el.program_date + 'Z');
                return el;
            });
        });
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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invitated-programs.page.scss */ "./src/app/program/invitated-programs/invitated-programs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], InvitatedProgramsPage);



/***/ })

}]);
//# sourceMappingURL=program-invitated-programs-invitated-programs-module-es2015.js.map