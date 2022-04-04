function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-invitated-programs-invitated-programs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramInvitatedProgramsInvitatedProgramsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click) = \"goBack()\" *ngIf=\"!showPreview\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item> \r\n    <ion-item slot=\"center\">\r\n        <ion-label>Program List</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n</ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\" *ngIf=\"programData > 0 \">\r\n  <ion-item class=\"item-card\" *ngFor=\"let item of programList\">\r\n    <ion-avatar slot=\"start\" [routerLink]=\"['/program-view',item.id]\">\r\n      <img src=\"../../../assets/images/demo2.jpg\" *ngIf=\"item?.image_path\">\r\n      <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n    </ion-avatar>\r\n    <ion-label [routerLink]=\"['/program-view',item.id]\">\r\n      <h3 class=\"list-person\">{{item.title}}</h3>\r\n      <span class=\"list-name d-block\">{{item.type_id}}</span>\r\n      <span class=\"list-name\">By: {{item?.program_user?.user_name}}</span>\r\n      <p class=\"text-green\">{{item?.converted |date:'medium'}}</p>\r\n    </ion-label>\r\n    <div class=\"action-links\" slot=\"end\">\r\n      <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"requestedDropdown(item.id)\"></ion-icon>\r\n      <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(item)\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n</ion-content>\r\n<ion-content class=\"main_content\" *ngIf=\"programData == 0\">\r\n  <div class=\"container\">\r\n    <div class=\"empty-state\">\r\n      <img src= \"../../../assets/images/emptydate.svg\" >     \r\n      <ion-label>No Program</ion-label>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/program/invitated-programs/invitated-programs-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/program/invitated-programs/invitated-programs-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: InvitatedProgramsPageRoutingModule */

  /***/
  function srcAppProgramInvitatedProgramsInvitatedProgramsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitatedProgramsPageRoutingModule", function () {
      return InvitatedProgramsPageRoutingModule;
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


    var _invitated_programs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./invitated-programs.page */
    "./src/app/program/invitated-programs/invitated-programs.page.ts");

    var routes = [{
      path: '',
      component: _invitated_programs_page__WEBPACK_IMPORTED_MODULE_3__["InvitatedProgramsPage"]
    }];

    var InvitatedProgramsPageRoutingModule = function InvitatedProgramsPageRoutingModule() {
      _classCallCheck(this, InvitatedProgramsPageRoutingModule);
    };

    InvitatedProgramsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InvitatedProgramsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/invitated-programs/invitated-programs.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/program/invitated-programs/invitated-programs.module.ts ***!
    \*************************************************************************/

  /*! exports provided: InvitatedProgramsPageModule */

  /***/
  function srcAppProgramInvitatedProgramsInvitatedProgramsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitatedProgramsPageModule", function () {
      return InvitatedProgramsPageModule;
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


    var _invitated_programs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./invitated-programs-routing.module */
    "./src/app/program/invitated-programs/invitated-programs-routing.module.ts");
    /* harmony import */


    var _invitated_programs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./invitated-programs.page */
    "./src/app/program/invitated-programs/invitated-programs.page.ts");

    var InvitatedProgramsPageModule = function InvitatedProgramsPageModule() {
      _classCallCheck(this, InvitatedProgramsPageModule);
    };

    InvitatedProgramsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invitated_programs_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvitatedProgramsPageRoutingModule"]],
      declarations: [_invitated_programs_page__WEBPACK_IMPORTED_MODULE_6__["InvitatedProgramsPage"]]
    })], InvitatedProgramsPageModule);
    /***/
  },

  /***/
  "./src/app/program/invitated-programs/invitated-programs.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/program/invitated-programs/invitated-programs.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramInvitatedProgramsInvitatedProgramsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  background: #fff; }\n  .top-header ion-icon {\n    font-size: 1.75rem;\n    color: #222;\n    margin: 0; }\n  .top-header .top-heading {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 0; }\n  .top-header .three-block {\n    text-align: center;\n    padding: 5px 0; }\n  .top-header .three-block ion-item {\n      --inner-border-width: 0px 0px 0px 0px;\n      --padding-start: 0;\n      --inner-padding-end: 0; }\n  .top-header .three-block ion-item ion-label {\n        text-transform: capitalize;\n        font-size: 1rem;\n        color: #222; }\n  .top-header .three-block ion-item:first-child {\n      padding-left: 8px;\n      min-width: 80px; }\n  .top-header .three-block ion-item:last-child {\n      min-width: 80px; }\n  .top-header .three-block .icon-right-side {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end; }\n  .top-header .three-block .ion-text-end {\n      text-align: end !important; }\n  .item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px; }\n  .container {\n  height: 100%;\n  display: flex;\n  align-items: center; }\n  .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .empty-state img {\n  width: 40%; }\n  .empty-state ion-label {\n  font-size: 1.25rem;\n  margin-top: 2rem;\n  color: #121212; }\n  .item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9pbnZpdGF0ZWQtcHJvZ3JhbXMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXGludml0YXRlZC1wcm9ncmFtc1xcaW52aXRhdGVkLXByb2dyYW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtFQVhsQjtJQWNNLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUyxFQUFBO0VBaEJmO0lBbUJNLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQXZCdEI7SUEwQk0sa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQTNCcEI7TUE4QlUscUNBQXFCO01BQ3JCLGtCQUFnQjtNQUNoQixzQkFBb0IsRUFBQTtFQWhDOUI7UUFrQ2MsMEJBQTBCO1FBQzFCLGVBQWU7UUFDZixXQUFXLEVBQUE7RUFwQ3pCO01Bd0NVLGlCQUFpQjtNQUNqQixlQUFjLEVBQUE7RUF6Q3hCO01BNENVLGVBQWUsRUFBQTtFQTVDekI7TUErQ1UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix5QkFBeUIsRUFBQTtFQWpEbkM7TUFvRFUsMEJBQTBCLEVBQUE7RUFJcEM7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFFZDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFFckI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBRW5CO0VBQ0ksVUFBVSxFQUFBO0VBRWQ7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtFQUVwQjtFQUFzQixnQkFBZ0I7RUFBQyxrQkFBZ0I7RUFBRyxZQUFZO0VBQUMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9pbnZpdGF0ZWQtcHJvZ3JhbXMvaW52aXRhdGVkLXByb2dyYW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9wLWhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYigwIDAgMCAsIDE3JSk7XHJcbiAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLnRvcC1oZWFkaW5ne1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyAgIFxyXG4gIH1cclxuICAudGhyZWUtYmxvY2t7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pdGVtOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6ODBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbTpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pY29uLXJpZ2h0LXNpZGV7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIH1cclxuICAgICAgLmlvbi10ZXh0LWVuZHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbi5pdGVtLWNhcmQgaW9uLWF2YXRhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIC5lbXB0eS1zdGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZW1wdHktc3RhdGUgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgLmVtcHR5LXN0YXRlIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICB9XHJcbiAgLml0ZW0tY2FyZCBpb24tYXZhdGFye2JvcmRlci1yYWRpdXM6IDA7LS1ib3JkZXItcmFkaXVzOiAwO2hlaWdodDogNzVweDt3aWR0aDogMTAwcHg7fSAiXX0= */";
    /***/
  },

  /***/
  "./src/app/program/invitated-programs/invitated-programs.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/program/invitated-programs/invitated-programs.page.ts ***!
    \***********************************************************************/

  /*! exports provided: InvitatedProgramsPage */

  /***/
  function srcAppProgramInvitatedProgramsInvitatedProgramsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitatedProgramsPage", function () {
      return InvitatedProgramsPage;
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


    var _services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../requested-dropdown/requested-dropdown.component */
    "./src/app/program/requested-dropdown/requested-dropdown.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schedule-modal/schedule-modal.component */
    "./src/app/program/schedule-modal/schedule-modal.component.ts");

    var InvitatedProgramsPage = /*#__PURE__*/function () {
      function InvitatedProgramsPage(popoverController, programService, commonService, navCtrl) {
        _classCallCheck(this, InvitatedProgramsPage);

        this.popoverController = popoverController;
        this.programService = programService;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.myDate = new Date().toISOString();
      }

      _createClass(InvitatedProgramsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userData = JSON.parse(localStorage.getItem('userData'));
          var params = null;
          var userZoneDate = new Date(this.myDate);
          userZoneDate.setHours(0, 0, 0);
          params = {
            'sortDate': userZoneDate.toUTCString()
          };
          console.log(userZoneDate.toUTCString());
          this.programService.getAllRequestedPrograms(params).subscribe(function (data) {
            console.log(data);
            _this.programData = data.list.length;
            console.log(_this.programData);
            _this.programList = data.list.filter(function (el) {
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });
          });
          console.log(this.programList);
        }
      }, {
        key: "ionItemViewWillEnter",
        value: function ionItemViewWillEnter() {}
      }, {
        key: "requestedDropdown",
        value: function requestedDropdown(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["RequestedDropdownComponent"],
                      componentProps: {
                        "id": ev,
                        "user_type": this.userData.user_type
                      },
                      translucent: false,
                      cssClass: 'dropdown-menu'
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this2.ngOnInit();
                      }
                    });
                    _context.next = 6;
                    return popover.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showSchedule",
        value: function showSchedule(event) {
          this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleModalComponent"], 'fullModal', {
            'programDetail': event,
            'user_type': this.userData.user_type
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return InvitatedProgramsPage;
    }();

    InvitatedProgramsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    InvitatedProgramsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invitated-programs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invitated-programs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/invitated-programs/invitated-programs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invitated-programs.page.scss */
      "./src/app/program/invitated-programs/invitated-programs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], InvitatedProgramsPage);
    /***/
  }
}]);
//# sourceMappingURL=program-invitated-programs-invitated-programs-module-es5.js.map