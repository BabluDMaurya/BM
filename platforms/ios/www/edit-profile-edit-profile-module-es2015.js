(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/edit-profile/edit-profile.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/edit-profile/edit-profile.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <form class=\"detail-form edit-pro-form\" [formGroup]=\"validations_form\" *ngIf=\"dataa2\">\r\n    <ion-header class=\"top-header\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"start\">\r\n          <ion-label id=\"display_name\" *ngIf=\"defaultInputText\">{{ displayName }}</ion-label>\r\n          <ion-label class=\"add-disp-name\" id=\"display_name\" *ngIf=\"!defaultInputText\">Add Display Name: </ion-label>\r\n          <div *ngIf=\"defaultInputBox\">\r\n            <ion-input type=\"text\" placeholder=\"Enter Name\" (change)=\"detailsUpdate($event)\" name=\"display_name\"  value=\"{{displayName}}\"></ion-input>\r\n            <ng-container *ngFor=\"let validation of validation_messages.display_name\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(validations_form.get('display_name').touched) && validations_form.get('display_name').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"defaultInputBox\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"HideInputBox();\" slot=\"end\">\r\n            <ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\" class=\"text-green\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"defaultInputText\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showInputBox();\" slot=\"end\">\r\n            <ion-icon ios=\"md-create\" md=\"md-create\" class=\"text-green\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-grid class=\"main_content ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <div class=\"sec-banner\">\r\n            <div class=\"top-banner\">\r\n              <img  src=\"{{backgroundPicture}}\" />\r\n              <ion-fab-button size=\"small\" class=\"green\"><ion-icon (click)=\"backImage($event)\"  name='profile_background_image' ios=\"ios-create\" md=\"md-create\"></ion-icon></ion-fab-button>\r\n            </div>\r\n            <div class=\"profile-heading\">\r\n              <div class=\"img-profile\">\r\n                <img class=\"user-img\" src=\"{{profilePicture}}\" />    \r\n                <ion-fab-button size=\"small\" class=\"green\"><ion-icon (click)=\"selectImage($event)\" name='profile_pic' ios=\"md-create\" md=\"md-create\"></ion-icon></ion-fab-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"user-name\">\r\n              <ion-text>\r\n                <h6>{{userName}}</h6>\r\n              </ion-text>\r\n            </div>\r\n          </div>\r\n        </ion-col> \r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-list lines=\"none\" class=\"ion-no-padding\">\r\n            <ion-list-header class=\"green text-white\">Info </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Sex</ion-label>\r\n              <ion-select placeholder=\"gender\" name='gender' (ionChange)=\"detailsUpdate($event)\">\r\n                  <ion-select-option value=\"1\" [selected]=\"sex == '1' ? true : false \">Male</ion-select-option>\r\n                  <ion-select-option value=\"2\" [selected]='sex == 2 ? true : false '>Female</ion-select-option>\r\n              </ion-select>\r\n              <ng-container *ngFor=\"let validation of validation_messages.gender\">\r\n                <span class=\"error-message\" *ngIf=\"(validations_form.get('gender').touched) && validations_form.get('gender').hasError(validation.type)\">{{ validation.message }}</span>\r\n              </ng-container>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Birth Range</ion-label>\r\n              <ion-select name='birth_year' (ionChange)=\"detailsUpdate($event)\" placeholder=\"Birth Year\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                <ion-select-option value=\"1\" [selected]=\"birthYear == '1' ? true:false \">less than 15</ion-select-option>\r\n                <ion-select-option value=\"2\" [selected]=\"birthYear == '2' ? true:false \">15-25</ion-select-option>\r\n                <ion-select-option value=\"3\" [selected]=\"birthYear == '3' ? true:false \">25-35</ion-select-option>\r\n                <ion-select-option value=\"4\" [selected]=\"birthYear == '4' ? true:false \">35-45</ion-select-option>\r\n                <ion-select-option value=\"5\" [selected]=\"birthYear == '5' ? true:false \">45-55</ion-select-option>\r\n                <ion-select-option value=\"6\" [selected]=\"birthYear == '6' ? true:false \">more than 55</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\">Bio</ion-list-header>\r\n            <ion-item class=\"mb-0\">\r\n              <ion-textarea name=\"about_me\" (change)=\"detailsUpdate($event)\" value={{aboutMe}} class=\"mt-0 bioTextarea\"></ion-textarea>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.about_me\">\r\n              <span class=\"error-message\" *ngIf=\"(validations_form.get('about_me').touched) && validations_form.get('about_me').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </ion-list>\r\n          <ion-list lines=\"none\" class=\"ion-no-padding\" *ngIf='consultant'>\r\n            <ion-list-header class=\"green text-white\">More about me</ion-list-header>\r\n            <ion-item>\r\n              <ion-textarea name=\"more_about_me\"  (change)=\"additionaldetailUpdate($event)\" value=\"{{moreAboutMe}}\" class=\"bioTextarea\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\">Tagline</ion-list-header>\r\n            <ion-item class=\"mb-0\">\r\n              <ion-textarea class=\"taglineTextarea\" name=\"tag_line\" formControlName=\"tag_line\" (change)=\"additionaldetailUpdate($event)\" value=\"{{tagline}}\"></ion-textarea>              \r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.tag_line\">\r\n              <span class=\"error-message\" style=\"margin: 0 15px;\" *ngIf=\"(validations_form.get('tag_line').touched) && validations_form.get('tag_line').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </ion-list>\r\n          <ion-list lines=\"none\" class=\"ion-no-padding\">\r\n            <ion-list-header class=\"green text-white\"> Interests </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Main</ion-label>\r\n              <ion-select name='specialities_id' (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let main of interest' [value]=\"main.id\" [selected]=\"interesrDB == main.id ? true: false\">{{main.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Secondary</ion-label>\r\n              <ion-select name=\"secondary_specialities_ids\" (ionChange)=\"detailsUpdate($event)\" multiple=\"true\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                <ion-select-option *ngFor='let value of interest' [disabled]='value.id == this.interestDisable ? true: false' [value]=\"value.id\" [selected]=\"secondary == value.id ? true: false\">{{value.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\"> Additional</ion-list-header>\r\n            <ion-item *ngIf='consultant'>\r\n              <ion-label> Class Type</ion-label>\r\n              <ion-select multiple='true' name=\"class_names_id\" (ionChange)=\"additionaldetailUpdate($event)\" placeholder=\"Class Type\">\r\n                <ion-select-option *ngFor='let value of classTypeDB'\r\n                  [selected]=\"setClassCheked(value.id) ? true : false\" [value]=\"value.id\">{{value.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Spoken Languages</ion-label>\r\n              <ion-select multiple='true' placeholder=\"Language\"\r\n                (ionChange)=\"detailsUpdate($event)\" name=\"languages_id\">\r\n                <ion-select-option *ngFor='let langIds of langData' [value]=\"langIds.id\"\r\n                  [selected]=\"setLangCheked(langIds.id) ? true: false\">{{langIds.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\">Location </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Country</ion-label>\r\n              <ion-select placeholder=\"Country\" name=\"country_id\" (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let countries of countryData' value=\"{{countries.id}}\" [selected]=\"countries.id == countryId ? true : false\">{{countries.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>State</ion-label>\r\n              <ion-select name=\"state_id\" placeholder=\"State\" (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let states of stateData' value=\"{{states.id}}\" [selected]=\"setStateCheked(states.id)? true : false\">{{states.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>City</ion-label>\r\n              <ion-select name=\"city_id\" placeholder=\"City\" (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let citys of cityData' value=\"{{citys.id}}\" [selected]=\"citys.id == cityId ? true : false\">{{citys.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item style=\"--min-height: 34px;\">\r\n              <ion-label>Hometown</ion-label>              \r\n            </ion-item>\r\n            <ion-textarea name=\"hometown\" (change)=\"detailsUpdate($event)\"  value=\"{{hometown}}\"  class=\"ion-margin-horizontal ion-no-padding mb-10 hometownTextarea\"></ion-textarea>\r\n            <ng-container *ngFor=\"let validation of validation_messages.hometown\">\r\n              <span class=\"error-message\" *ngIf=\"(validations_form.get('hometown').touched) && validations_form.get('hometown').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </ion-list>\r\n        </ion-col>  \r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  <form class=\"detail-form edit-pro-form\" *ngIf=\"!dataa2\">\r\n    <ion-header class=\"top-header\">\r\n    <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n    <ion-buttons class=\"ion-no-margin\">\r\n    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"start\">\r\n    <ion-label>Display Name + </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-buttons class=\"ion-no-margin\" slot=\"end\">\r\n    <ion-icon ios=\"md-create\" md=\"md-create\" class=\"text-green\"></ion-icon>\r\n    </ion-buttons>\r\n    </ion-item>\r\n    </ion-list>\r\n    </ion-header>\r\n    <ion-grid class=\"main_content ion-no-padding\">\r\n    <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n    <div class=\"sec-banner\">\r\n    <div class=\"top-banner\">\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    <div class=\"profile-heading\">\r\n    <div class=\"img-profile\">\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n    <ion-list lines=\"none\" class=\"pb-0\">\r\n    <ion-list-header class=\"green text-white\">Info </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\"> Bio </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">More about me</ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">Tagline</ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\"> Interests </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\"> Additional</ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">Location </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    </ion-list>\r\n    </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n    </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/settings/edit-profile/edit-profile-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/settings/edit-profile/edit-profile-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/settings/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/settings/edit-profile/edit-profile.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/edit-profile/edit-profile.module.ts ***!
  \**************************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/settings/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/settings/edit-profile/edit-profile.page.ts");








let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/settings/edit-profile/edit-profile.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/settings/edit-profile/edit-profile.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-name {\n  margin-top: 50px;\n}\n\nion-label {\n  color: #9e9e9e;\n}\n\nion-fab-button.green {\n  background: transparent;\n}\n\nion-grid ion-item {\n  font-size: 0.8125rem;\n  margin: 0 15px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-grid ion-item:last-child {\n  margin-bottom: 15px;\n}\n\nion-grid ion-item ion-label {\n  color: #000;\n  font-size: 0.8125rem;\n}\n\nion-grid ion-item ion-input {\n  font-size: 0.8125rem;\n}\n\n.hometown-item ion-label {\n  position: absolute;\n  top: 0;\n}\n\n.hometown-item ion-label + ion-textarea {\n  margin-top: 25px;\n  --padding-start: 0;\n}\n\n.error-message {\n  display: inline-block;\n}\n\n.bioTextarea {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  --padding-bottom: 0px;\n  --padding-top: 0;\n}\n\n.taglineTextarea {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  --padding-bottom: 0px;\n  --padding-top: 0;\n}\n\n.hometownTextarea {\n  width: calc(100% - 30px);\n  font-size: 0.8125rem;\n  margin-top: 0;\n}\n\n.three-block ion-item:first-child, .three-block ion-item:last-child {\n  min-width: unset;\n}\n\n.add-disp-name {\n  padding-right: 5px;\n  font-size: 14px !important;\n}\n\n.top-header .item-has-focus {\n  --highlight-background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvZWRpdC1wcm9maWxlL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHNldHRpbmdzXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsZ0JBQUE7QUNFWDs7QUREQTtFQUFVLGNBQUE7QUNLVjs7QURKQTtFQUFxQix1QkFBQTtBQ1FyQjs7QUROSTtFQUFTLG9CQUFBO0VBQXFCLGNBQUE7RUFBZSxrQkFBQTtFQUFtQixzQkFBQTtBQ2FwRTs7QURaUTtFQUFhLG1CQUFBO0FDZXJCOztBRGRRO0VBQVUsV0FBQTtFQUFZLG9CQUFBO0FDa0I5Qjs7QURqQlE7RUFBVSxvQkFBQTtBQ29CbEI7O0FEakJBO0VBQXlCLGtCQUFBO0VBQW1CLE1BQUE7QUNzQjVDOztBRHJCQTtFQUFzQyxnQkFBQTtFQUFpQixrQkFBQTtBQzBCdkQ7O0FEekJBO0VBQWUscUJBQUE7QUM2QmY7O0FENUJBO0VBQWEsbUJBQUE7RUFBb0IsZ0JBQUE7RUFBaUIscUJBQUE7RUFBc0IsZ0JBQUE7QUNtQ3hFOztBRGxDQTtFQUFpQixtQkFBQTtFQUFvQixnQkFBQTtFQUFpQixxQkFBQTtFQUFzQixnQkFBQTtBQ3lDNUU7O0FEeENBO0VBQWtCLHdCQUFBO0VBQXlCLG9CQUFBO0VBQXFCLGFBQUE7QUM4Q2hFOztBRDVDQTtFQUFxRSxnQkFBQTtBQ2dEckU7O0FEL0NBO0VBQWlCLGtCQUFBO0VBQW1CLDBCQUFBO0FDb0RwQzs7QURuREE7RUFBNEIsdUNBQUE7QUN1RDVCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1uYW1le21hcmdpbi10b3A6IDUwcHg7fVxyXG5pb24tbGFiZWx7Y29sb3I6ICM5ZTllOWU7fVxyXG5pb24tZmFiLWJ1dHRvbi5ncmVlbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XHJcbmlvbi1ncmlke1xyXG4gICAgaW9uLWl0ZW17Zm9udC1zaXplOiAwLjgxMjVyZW07bWFyZ2luOiAwIDE1cHg7LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206IDE1cHg7fVxyXG4gICAgICAgIGlvbi1sYWJlbHtjb2xvcjogIzAwMDtmb250LXNpemU6MC44MTI1cmVtO31cclxuICAgICAgICBpb24taW5wdXR7Zm9udC1zaXplOiAwLjgxMjVyZW07fVxyXG4gICAgfVxyXG59XHJcbi5ob21ldG93bi1pdGVtIGlvbi1sYWJlbHtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO31cclxuLmhvbWV0b3duLWl0ZW0gaW9uLWxhYmVsK2lvbi10ZXh0YXJlYXttYXJnaW4tdG9wOiAyNXB4Oy0tcGFkZGluZy1zdGFydDogMDt9XHJcbi5lcnJvci1tZXNzYWdle2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbi5iaW9UZXh0YXJlYXttYXJnaW4tYm90dG9tOiAxMHB4O21hcmdpbi10b3A6IDEwcHg7LS1wYWRkaW5nLWJvdHRvbTogMHB4Oy0tcGFkZGluZy10b3A6IDA7fVxyXG4udGFnbGluZVRleHRhcmVhe21hcmdpbi1ib3R0b206IDEwcHg7bWFyZ2luLXRvcDogMTBweDstLXBhZGRpbmctYm90dG9tOiAwcHg7LS1wYWRkaW5nLXRvcDogMDt9XHJcbi5ob21ldG93blRleHRhcmVhe3dpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtmb250LXNpemU6IDAuODEyNXJlbTttYXJnaW4tdG9wOiAwO31cclxuLy8gaGl0ZXNoIGNzcyBzdHJ0XHJcbi50aHJlZS1ibG9jayBpb24taXRlbTpmaXJzdC1jaGlsZCwgLnRocmVlLWJsb2NrIGlvbi1pdGVtOmxhc3QtY2hpbGQge21pbi13aWR0aDogdW5zZXQ7fVxyXG4uYWRkLWRpc3AtbmFtZSB7IHBhZGRpbmctcmlnaHQ6IDVweDtmb250LXNpemU6IDE0cHggIWltcG9ydGFudDt9XHJcbi50b3AtaGVhZGVyIC5pdGVtLWhhcy1mb2N1c3stLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7fVxyXG4vLyBoaXRlc2ggY3NzIGVuZCIsIi51c2VyLW5hbWUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuaW9uLWZhYi1idXR0b24uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWdyaWQgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1ncmlkIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaW9uLWdyaWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufVxuaW9uLWdyaWQgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG59XG5cbi5ob21ldG93bi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uaG9tZXRvd24taXRlbSBpb24tbGFiZWwgKyBpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmlvVGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWdsaW5lVGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5cbi5ob21ldG93blRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRocmVlLWJsb2NrIGlvbi1pdGVtOmZpcnN0LWNoaWxkLCAudGhyZWUtYmxvY2sgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1pbi13aWR0aDogdW5zZXQ7XG59XG5cbi5hZGQtZGlzcC1uYW1lIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnRvcC1oZWFkZXIgLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/settings/edit-profile/edit-profile.page.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/edit-profile/edit-profile.page.ts ***!
  \************************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .././../services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");













let EditProfilePage = class EditProfilePage {
    constructor(settingsService, formBuilder, camera, crop, actionSheetController, transfer, storage, nutritionService, commonService, navCtrl) {
        this.settingsService = settingsService;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.crop = crop;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.storage = storage;
        this.nutritionService = nutritionService;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.mainData = false;
        this.fileUrl = null;
        this.displayName = '';
        this.fileData = null;
        this.secondary = null;
        this.gallaryImgPath = [];
        this.consultant = false;
        this.defaultInputText = true;
        this.defaultInputBox = false;
        this.imagePath = '';
        this['validation_messages'] = {
            about_me: [
                { type: 'required', message: 'Bio is required.' },
                { type: 'maxlength', message: 'Bio cannot be more than 10 characters long' },
            ],
            tag_line: [
                { type: 'required', message: 'Tag line is required.' },
                { type: 'maxlength', message: 'Tag line cannot be more than 10 characters long' },
            ],
            display_name: [
                { type: 'maxlength', message: 'Display name cannot be more than 12 characters long' },
            ],
            hometown: [
                { type: 'maxlength', message: 'hometown  cannot be more than 200 characters long' },
            ],
            gender: [
                { type: 'required', message: 'Please Select any one option' },
            ],
        };
        // fileTransfer: FileTransferObject = this.transfer.create();
        this.token1 = localStorage.getItem('userToken');
        this.uploadOpts = {
            fileKey: 'file',
            fileName: 'somerandom.jpg',
            httpMethod: 'POST',
            headers: { 'Authorization': 'Bearer ' + this.token1 },
            params: {}
        };
        this.createForm();
    }
    ionViewWillEnter() {
        setTimeout(() => 1000);
    }
    ngOnInit() {
        const dataPromise = this.storage.get('userData');
        dataPromise.then(data => {
            this.storageData = JSON.parse(data);
            this.userType = this.storageData.user_type;
            this.userName = this.storageData.user_name;
            if (this.userType == '1') {
                this.consultant = true;
            }
        });
        this.settingsService.getCommonData().subscribe((data) => {
            this.classTypeDB = data.classData;
            this.classTypeDBArr = JSON.stringify(this.classTypeDB);
            this.interest = data.specialityData;
            this.langData = data.langData;
            this.countryData = data.countryData;
        });
        this.settingsService.getProfileData().subscribe((data) => {
            this.dataa2 = true;
            const { dataa } = data.status;
            this.profileData = data.status;
            this.dataa = data.status;
            if (this.profileData && this.profileData != '') {
                this.mainData = true;
            }
            this.displayName = data.status.userData.bios.display_name;
            if (data.status.userData.bios.profile_pic != null) {
                this.profilePicture = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].profilePic + data.status.userData.bios.profile_pic;
            }
            else {
                this.profilePicture = './../../assets/images/user.jpg';
            }
            if (data.status.userData.bios.profile_background_image != null) {
                this.backgroundPicture = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].backgroundPic + data.status.userData.bios.profile_background_image;
            }
            else {
                this.backgroundPicture = './../../assets/images/editcoverpic.png';
            }
            this.sex = data.status.userData.gender;
            this.birthYear = data.status.userData.birth_year;
            this.aboutMe = data.status.userData.bios.about_me;
            if (this.userType == '1') {
                this.moreAboutMe = data.status.userData.additional.more_about_me;
                this.tagline = data.status.userData.additional.tag_line;
                this.classTypeArr = data.status.userData.additional.class_names_id.split(',');
            }
            this.interesrDB = data.status.userData.bios.specialities_id;
            this.interestDisable = data.status.userData.bios.specialities_id;
            if (data.status.userData.bios.secondary_specialities_ids !== null) {
                this.secondary = data.status.userData.bios.secondary_specialities_ids.split(',');
            }
            if (data.status.userData.bios.languages_id) {
                this.spokenLanguagesArr = data.status.userData.bios.languages_id.split(',');
            }
            else {
                this.spokenLanguagesArr = [];
            }
            this.countryId = data.status.userData.bios.country_id;
            console.log(this.countryId);
            this.stateId = data.status.userData.bios.state_id;
            this.cityId = data.status.userData.bios.city_id;
            this.hometown = data.status.userData.bios.hometown;
            if (this.countryId !== '') {
                this.stateData = data.status.address.allStates;
                this.cityData = data.status.address.allCities;
            }
        }, err => {
            this.dataa2 = true;
            this.dataa = true;
        });
    }
    createForm() {
        this.validations_form = this.formBuilder.group({
            about_me: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            tag_line: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            display_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12),
            ])),
            hometown: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200),
            ])),
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lang_ids: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            more_about_me: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            class_names_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            state_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            secondary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            city_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
    }
    pickImage(sourceType) {
        const options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.cropImage(imageData, 'profile_pic');
            console.log(base64Image + ' --base64Image');
        }, (err) => {
        });
    }
    selectionImage(sourceType) {
        const options = {
            // quality: 100,
            // sourceType: sourceType,
            // destinationType: this.camera.DestinationType.FILE_URI,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // let baseImage = 'data:image/jpeg;base64,' + imageData; 
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
            this.cropImage(imageData, 'profile_background_image');
            // this.designImage(imageData);
            // console.log(baseImage + ' --baseImage');
        }, (err) => {
        });
    }
    backImage(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.img = event.srcElement.name;
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.selectionImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.selectionImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    selectImage(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.img = event.srcElement.name;
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    cropImage(fileUrl, fieldname) {
        this.crop.crop(fileUrl, {
            quality: 50,
            targetWidth: 411,
            targetHeight: 185
        })
            .then(newPath => {
            this.commonService.presentLoader();
            this.showCroppedImage(newPath.split('?')[0], fieldname);
            const fileTransfer = this.transfer.create();
            const parameters = { channel: this.img };
            const uploadOpts = {
                fileKey: 'file',
                fileName: newPath.substr(newPath.lastIndexOf('/') + 1),
                httpMethod: 'POST',
                chunkedMode: false
            };
            this.token = localStorage.getItem('userToken');
            const headers = { 'Authorization': 'Bearer ' + this.token };
            uploadOpts.headers = headers;
            uploadOpts.params = parameters;
            fileTransfer.upload(newPath, _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].ApiUrl + 'api/auth/uploadPic', uploadOpts)
                .then((data) => {
                this.commonService.dismissLoader();
                this.commonService.presentToast('Updated !');
                this.ngOnInit();
            }, (err) => {
                alert(JSON.stringify(err) + 'err');
            });
        }, error => {
            this.commonService.presentToast('Error !');
        });
    }
    designImage(fileUrl) {
        if (this.gallaryImgPath.length == 0) {
            return false;
        }
        this.commonService.presentLoader();
        this.postSubscrib = this.settingsService.uploadPic({ 'file[]': this.gallaryImgPath }).subscribe((data) => {
            console.log("pppppa" + data);
            this.commonService.dismissLoader();
        }, (err) => {
            this.commonService.dismissLoader();
        });
    }
    showCroppedImage(ImagePath, fieldname) {
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var img = 'abc';
        var filePath = ImagePath.split(img)[0];
        let test_obj = {
            field_name: fieldname,
            field_data: imageName,
        };
        this.saveDetail = test_obj;
    }
    // update profile values
    detailsUpdate(editvalue) {
        console.log(editvalue);
        let abc = editvalue.target.value;
        if (Array.isArray(editvalue.target.value)) {
            this.data_val = editvalue.target.value.toString();
        }
        else {
            this.data_val = editvalue.target.value;
        }
        if (editvalue.target.name == 'specialities_id') {
            this.interestDisable = this.data_val;
        }
        let test_obj = {
            field_name: editvalue.target.name,
            field_data: this.data_val,
        };
        if (this.data_val !== '') {
            this.saveDetail = test_obj;
        }
        if (this.saveDetail.field_name === 'country_id') {
            this.settingsService.getState(this.saveDetail).subscribe((data) => {
                this.stateData = data.stateData;
            }, err => { });
        }
        if (this.saveDetail.field_name === 'state_id') {
            this.settingsService.getCity(this.saveDetail).subscribe((data) => {
                this.cityData = data.cityData;
            }, err => { });
        }
        this.settingsService.editProfile(this.saveDetail).subscribe((data) => {
            if (data.status === 'success') {
                this.commonService.presentToast('Saved !');
                if (editvalue.target.name == 'display_name') {
                    this.ngOnInit();
                }
            }
            else {
                this.commonService.presentToast('Error !');
            }
        }, err => {
            this.commonService.presentToast('Error !');
        });
    }
    // update additional profile value for consultant
    additionaldetailUpdate(editvalue) {
        if (editvalue.target.name == 'tag_line') {
            if (this.validations_form.controls.tag_line.status == 'INVALID') {
                return;
            }
        }
        if (Array.isArray(editvalue.target.value)) {
            this.data_val = editvalue.target.value.toString();
        }
        else {
            this.data_val = editvalue.target.value;
        }
        let test_obj = {
            field_name: editvalue.target.name,
            field_data: this.data_val,
        };
        if (this.data_val !== '') {
            this.saveDetail = test_obj;
        }
        this.settingsService.additionalInfo(this.saveDetail).subscribe((data) => {
            if (data.status === 'success') {
                this.commonService.presentToast('Saved !');
            }
            else {
                this.commonService.presentToast('Error !');
            }
        }, err => {
            this.commonService.presentToast('Error !');
        });
    }
    showInputBox() {
        this.defaultInputText = false;
        this.defaultInputBox = true;
    }
    HideInputBox() {
        this.defaultInputText = true;
        this.defaultInputBox = false;
    }
    setLangCheked(id) {
        var idd = id.toString();
        if (this.spokenLanguagesArr) {
            if (this.spokenLanguagesArr.indexOf(idd) !== -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    setClassCheked(id) {
        var idd = id.toString();
        if (this.classTypeArr) {
            if (this.classTypeArr.indexOf(idd) !== -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    setInterestCheked(id) {
        var idd = '';
        idd = id.toString();
        if (this.interesrDB) {
            if (this.interesrDB.indexOf(idd) !== -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    setSecondaryInterestCheked(id) {
        const idd = id.toString();
        if (this.secondary) {
            if (this.secondary.indexOf(idd) !== -1 && this.interestDisable !== id) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    setStateCheked(id) {
        var idd = '';
        idd = id.toString();
        if (this.stateId) {
            if (this.stateId.indexOf(idd) !== -1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    goBack() {
        this.navCtrl.back();
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_7__["NutritionService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/edit-profile/edit-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/settings/edit-profile/edit-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _services_nutrition_service__WEBPACK_IMPORTED_MODULE_7__["NutritionService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es2015.js.map