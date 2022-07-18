(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-details-card-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/card-details/card-details.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/card-details/card-details.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click) = \"goBack()\" *ngIf=\"!showPreview\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" ></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item> \r\n    <ion-item slot=\"center\">\r\n        <ion-label>card-details</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n</ion-list>\r\n  <!-- <ion-item slot=\"start\">\r\n    <ion-buttons class=\"ion-no-margin\" *ngIf=\"!showPreview\">\r\n      <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click) = \"goBack()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-item> \r\n  <ion-toolbar>\r\n    <ion-title>card-details</ion-title>\r\n  </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content  color=\"primary\" *ngIf=\"this.storageData?.stripe_customer_id == null \">\r\n  <form  #form=\"ngForm\" (ngSubmit)=\"register(form)\" >\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div text-center>\r\n            <h3>Enter Card Details!</h3>\r\n          </div>\r\n          <div padding>\r\n              <div class=\"input-block\">\r\n                <ion-label>Card Holder Name</ion-label>\r\n                <ion-item class=\"input-box\">\r\n                  <ion-input  name=\"holder_name\" type=\"text\" placeholder=\"Card Holder Name\" ngModel required></ion-input>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"input-block\">\r\n                <ion-label>Card Number</ion-label>\r\n                <ion-item class=\"input-box\">\r\n                  <ion-input name=\"card_number\" type=\"text\" placeholder=\"Card Number\" ngModel required></ion-input>\r\n                </ion-item>\r\n              </div>\r\n            <div class=\"input-container\">\r\n              <div class=\"input-block w-half\">\r\n               <ion-label>Expiry Month</ion-label>\r\n               <ion-item class=\"input-box\">\r\n                 <ion-input name=\"exp_month\" type=\"number\" placeholder=\"Expriy Month\" ngModel required></ion-input>\r\n               </ion-item>\r\n              </div>\r\n              <div class=\"input-block w-half\">\r\n               <ion-label>Expiry Year</ion-label>\r\n               <ion-item class=\"input-box\">\r\n                 <ion-input name=\"exp_year\" type=\"number\" placeholder=\"Expriy Year\" ngModel required></ion-input>\r\n               </ion-item>\r\n              </div>\r\n            </div>\r\n             <div class=\"input-block\">\r\n              <ion-label>CVV</ion-label>\r\n              <ion-item class=\"input-box\">\r\n                <ion-input name=\"cvv\" type=\"text\" placeholder=\"CVV\" ngModel required></ion-input>\r\n              </ion-item>\r\n             </div>\r\n          </div>\r\n          <div padding>\r\n            <ion-button class=\"save-btn\"  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Save Details</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  \r\n</ion-content>\r\n<ion-content *ngIf=\"this.storageData?.stripe_customer_id != null \">\r\n  <ion-col  class=\"flex-center\" align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n    <div text-center>\r\n      <h3>Card Details Updated!</h3>\r\n    </div>\r\n  </ion-col> \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/settings/card-details/card-details-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/settings/card-details/card-details-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CardDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsPageRoutingModule", function() { return CardDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _card_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-details.page */ "./src/app/settings/card-details/card-details.page.ts");




const routes = [
    {
        path: '',
        component: _card_details_page__WEBPACK_IMPORTED_MODULE_3__["CardDetailsPage"]
    }
];
let CardDetailsPageRoutingModule = class CardDetailsPageRoutingModule {
};
CardDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/card-details/card-details.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/card-details/card-details.module.ts ***!
  \**************************************************************/
/*! exports provided: CardDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsPageModule", function() { return CardDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-details-routing.module */ "./src/app/settings/card-details/card-details-routing.module.ts");
/* harmony import */ var _card_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-details.page */ "./src/app/settings/card-details/card-details.page.ts");







let CardDetailsPageModule = class CardDetailsPageModule {
};
CardDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _card_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardDetailsPageRoutingModule"]
        ],
        declarations: [_card_details_page__WEBPACK_IMPORTED_MODULE_6__["CardDetailsPage"]]
    })
], CardDetailsPageModule);



/***/ }),

/***/ "./src/app/settings/card-details/card-details.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/settings/card-details/card-details.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner-scroll {\n  background-color: #fff;\n}\n\nion-label {\n  color: #222;\n}\n\n.top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  background: #fff;\n}\n\n.top-header ion-icon {\n  font-size: 1.75rem;\n  color: #222;\n  margin: 0;\n}\n\n.top-header .top-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.top-header .three-block {\n  text-align: center;\n  padding: 5px 0;\n}\n\n.top-header .three-block ion-item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.top-header .three-block ion-item ion-label {\n  text-transform: capitalize;\n  font-size: 1rem;\n  color: #222;\n}\n\n.top-header .three-block ion-item:first-child {\n  padding-left: 8px;\n  min-width: 80px;\n}\n\n.top-header .three-block ion-item:last-child {\n  min-width: 80px;\n}\n\n.top-header .three-block .icon-right-side {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.top-header .three-block .ion-text-end {\n  text-align: end !important;\n}\n\n.input-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.input-block {\n  margin-bottom: 15px;\n}\n\n.input-block ion-label {\n  color: #222;\n  line-height: 1.5;\n  font-size: 15px;\n}\n\n.input-block .input-box {\n  --padding-start: 0px;\n}\n\n.ion-color-primary {\n  --ion-color-base: #fff !important;\n}\n\n.w-half {\n  width: 48%;\n}\n\n.save-btn {\n  font-size: 20px;\n  font-weight: 400;\n  --background: #27A69A;\n  --background-focused: #27A69A;\n  --background-hover: #27A69A;\n}\n\n.flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY2FyZC1kZXRhaWxzL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHNldHRpbmdzXFxjYXJkLWRldGFpbHNcXGNhcmQtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL2NhcmQtZGV0YWlscy9jYXJkLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNHUjs7QURESTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNHUjs7QUREUTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0daOztBREZZO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0loQjs7QUREUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0daOztBRERRO0VBQ0ksZUFBQTtBQ0daOztBRERRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNHWjs7QUREUTtFQUNJLDBCQUFBO0FDR1o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBRENJO0VBQ0ksbUJBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHWjs7QUREUTtFQUNJLG9CQUFBO0FDR1o7O0FEQ0k7RUFDSSxpQ0FBQTtBQ0VSOztBREFJO0VBQ0ksVUFBQTtBQ0dSOztBREVJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDQVI7O0FERUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NhcmQtZGV0YWlscy9jYXJkLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyLXNjcm9sbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuLnRvcC1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDhweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2IoMCAwIDAgLCAxNyUpO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC50b3AtaGVhZGluZ3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7ICAgXHJcbiAgICB9XHJcbiAgICAudGhyZWUtYmxvY2t7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDo4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbTpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uLXJpZ2h0LXNpZGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pb24tdGV4dC1lbmR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiAgICAuaW5wdXQtYmxvY2t7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1ib3h7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pb24tY29sb3ItcHJpbWFyeSB7XHJcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnctaGFsZntcclxuICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgfVxyXG4gICAgLy8gaW9uLWJ1dHRvbi5pb3MuYnV0dG9uLmJ1dHRvbi1ibG9jay5idXR0b24tbGFyZ2UuYnV0dG9uLXNvbGlkLmlvbi1hY3RpdmF0YWJsZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkLmJ1dHRvbi1kaXNhYmxlZHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTlkOGNiO1xyXG4gICAgLy8gfVxyXG4gICAgLnNhdmUtYnRue1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyN0E2OUE7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjdBNjlBO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMjdBNjlBO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI3QTY5QTtcclxuICAgIH1cclxuICAgIC5mbGV4LWNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuLy8gaW9uLWl0ZW17XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbi8vICAgICAtLWNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tYnV0dG9ue1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xyXG4vLyB9IiwiLmlubmVyLXNjcm9sbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4udG9wLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LWhlaWdodDogNDhweDtcbiAgbWluLWhlaWdodDogNDhweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4udG9wLWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgY29sb3I6ICMyMjI7XG4gIG1hcmdpbjogMDtcbn1cbi50b3AtaGVhZGVyIC50b3AtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udG9wLWhlYWRlciAudGhyZWUtYmxvY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLnRvcC1oZWFkZXIgLnRocmVlLWJsb2NrIGlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuLnRvcC1oZWFkZXIgLnRocmVlLWJsb2NrIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMjIyO1xufVxuLnRvcC1oZWFkZXIgLnRocmVlLWJsb2NrIGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG1pbi13aWR0aDogODBweDtcbn1cbi50b3AtaGVhZGVyIC50aHJlZS1ibG9jayBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuLnRvcC1oZWFkZXIgLnRocmVlLWJsb2NrIC5pY29uLXJpZ2h0LXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnRvcC1oZWFkZXIgLnRocmVlLWJsb2NrIC5pb24tdGV4dC1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmlucHV0LWJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5pbnB1dC1ibG9jayBpb24tbGFiZWwge1xuICBjb2xvcjogIzIyMjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmlucHV0LWJsb2NrIC5pbnB1dC1ib3gge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udy1oYWxmIHtcbiAgd2lkdGg6IDQ4JTtcbn1cblxuLnNhdmUtYnRuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtLWJhY2tncm91bmQ6ICMyN0E2OUE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMjdBNjlBO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMyN0E2OUE7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/card-details/card-details.page.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/card-details/card-details.page.ts ***!
  \************************************************************/
/*! exports provided: CardDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsPage", function() { return CardDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let CardDetailsPage = class CardDetailsPage {
    constructor(stripe, programService, navCtrl, storage) {
        this.stripe = stripe;
        this.programService = programService;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.stripeKey = _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].stripePublishKey;
    }
    ngOnInit() {
        const dataPromise = this.storage.get('userData');
        dataPromise.then(data => {
            this.storageData = JSON.parse(data);
            console.log(this.storageData.stripe_customer_id);
        });
    }
    register(form) {
        console.log(form.form.value);
        this.stripe.setPublishableKey(this.stripeKey);
        var card = form.form.value;
        this.cardDetails = {
            number: card.card_number,
            expMonth: card.exp_month,
            expYear: card.exp_year,
            cvc: card.cvv
        };
        this.stripe.createCardToken(this.cardDetails)
            .then(token => {
            console.log(token);
            this.token = token;
            console.log('payment with stripeeee');
            this.programService.createStripeCustomerId({ "token_id": this.token }).subscribe(data => {
                this.ngOnInit();
            });
        })
            .catch(error => console.error(error));
    }
    goBack() {
        this.navCtrl.back();
    }
};
CardDetailsPage.ctorParameters = () => [
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
CardDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/card-details/card-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-details.page.scss */ "./src/app/settings/card-details/card-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"], _services_program_service__WEBPACK_IMPORTED_MODULE_5__["ProgramService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], CardDetailsPage);



/***/ })

}]);
//# sourceMappingURL=card-details-card-details-module-es2015.js.map