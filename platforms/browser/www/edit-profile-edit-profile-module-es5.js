function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/edit-profile/edit-profile.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/edit-profile/edit-profile.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <form class=\"detail-form edit-pro-form\" [formGroup]=\"validations_form\" *ngIf=\"dataa2\">\r\n    <ion-header class=\"top-header\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"start\">\r\n          <ion-label id=\"display_name\" *ngIf=\"defaultInputText\">{{ displayName }}</ion-label>\r\n          <ion-label class=\"add-disp-name\" id=\"display_name\" *ngIf=\"!defaultInputText\">Add Display Name: </ion-label>\r\n          <div *ngIf=\"defaultInputBox\">\r\n            <ion-input type=\"text\" placeholder=\"Enter Name\" (change)=\"detailsUpdate($event)\" name=\"display_name\"  value=\"{{displayName}}\"></ion-input>\r\n            <ng-container *ngFor=\"let validation of validation_messages.display_name\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(validations_form.get('display_name').touched) && validations_form.get('display_name').hasError(validation.type)\">\r\n                {{ validation.message }}\r\n              </span>\r\n            </ng-container>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"defaultInputBox\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"HideInputBox();\" slot=\"end\">\r\n            <ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\" class=\"text-green\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"defaultInputText\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showInputBox();\" slot=\"end\">\r\n            <ion-icon ios=\"md-create\" md=\"md-create\" class=\"text-green\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-grid class=\"main_content ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <div class=\"sec-banner\">\r\n            <div class=\"top-banner\">\r\n              <img  src=\"{{backgroundPicture}}\" />\r\n              <ion-fab-button size=\"small\" class=\"green\"><ion-icon (click)=\"backImage($event)\"  name='profile_background_image' ios=\"ios-create\" md=\"md-create\"></ion-icon></ion-fab-button>\r\n            </div>\r\n            <div class=\"profile-heading\">\r\n              <div class=\"img-profile\">\r\n                <img class=\"user-img\" src=\"{{profilePicture}}\" />    \r\n                <ion-fab-button size=\"small\" class=\"green\"><ion-icon (click)=\"selectImage($event)\" name='profile_pic' ios=\"md-create\" md=\"md-create\"></ion-icon></ion-fab-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"user-name\">\r\n              <ion-text>\r\n                <h6>{{userName}}</h6>\r\n              </ion-text>\r\n            </div>\r\n          </div>\r\n        </ion-col> \r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-list lines=\"none\" class=\"ion-no-padding\">\r\n            <ion-list-header class=\"green text-white\">Info </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Sex</ion-label>\r\n              <ion-select placeholder=\"gender\" name='gender' (ionChange)=\"detailsUpdate($event)\">\r\n                  <ion-select-option value=\"1\" [selected]=\"sex == '1' ? true : false \">Male</ion-select-option>\r\n                  <ion-select-option value=\"2\" [selected]='sex == 2 ? true : false '>Female</ion-select-option>\r\n              </ion-select>\r\n              <ng-container *ngFor=\"let validation of validation_messages.gender\">\r\n                <span class=\"error-message\" *ngIf=\"(validations_form.get('gender').touched) && validations_form.get('gender').hasError(validation.type)\">{{ validation.message }}</span>\r\n              </ng-container>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Birth Range</ion-label>\r\n              <ion-select name='birth_year' (ionChange)=\"detailsUpdate($event)\" placeholder=\"Birth Year\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                <ion-select-option value=\"1\" [selected]=\"birthYear == '1' ? true:false \">less than 15</ion-select-option>\r\n                <ion-select-option value=\"2\" [selected]=\"birthYear == '2' ? true:false \">15-25</ion-select-option>\r\n                <ion-select-option value=\"3\" [selected]=\"birthYear == '3' ? true:false \">25-35</ion-select-option>\r\n                <ion-select-option value=\"4\" [selected]=\"birthYear == '4' ? true:false \">35-45</ion-select-option>\r\n                <ion-select-option value=\"5\" [selected]=\"birthYear == '5' ? true:false \">45-55</ion-select-option>\r\n                <ion-select-option value=\"6\" [selected]=\"birthYear == '6' ? true:false \">more than 55</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\">Bio</ion-list-header>\r\n            <ion-item class=\"mb-0\">\r\n              <ion-textarea name=\"about_me\" (change)=\"detailsUpdate($event)\" value={{aboutMe}} class=\"mt-0 bioTextarea\"></ion-textarea>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.about_me\">\r\n              <span class=\"error-message\" *ngIf=\"(validations_form.get('about_me').touched) && validations_form.get('about_me').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </ion-list>\r\n          <ion-list lines=\"none\" class=\"ion-no-padding\" *ngIf='consultant'>\r\n            <ion-list-header class=\"green text-white\">More about me</ion-list-header>\r\n            <ion-item>\r\n              <ion-textarea name=\"more_about_me\"  (change)=\"additionaldetailUpdate($event)\" value=\"{{moreAboutMe}}\" class=\"bioTextarea\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\">Tagline</ion-list-header>\r\n            <ion-item class=\"mb-0\">\r\n              <ion-textarea class=\"taglineTextarea\" name=\"tag_line\" formControlName=\"tag_line\" (change)=\"additionaldetailUpdate($event)\" value=\"{{tagline}}\"></ion-textarea>              \r\n            </ion-item>\r\n            <ng-container *ngFor=\"let validation of validation_messages.tag_line\">\r\n              <span class=\"error-message\" style=\"margin: 0 15px;\" *ngIf=\"(validations_form.get('tag_line').touched) && validations_form.get('tag_line').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </ion-list>\r\n          <ion-list lines=\"none\" class=\"ion-no-padding\">\r\n            <ion-list-header class=\"green text-white\"> Interests </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Main</ion-label>\r\n              <ion-select name='specialities_id' (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let main of interest' [value]=\"main.id\" [selected]=\"interesrDB == main.id ? true: false\">{{main.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Secondary</ion-label>\r\n              <ion-select name=\"secondary_specialities_ids\" (ionChange)=\"detailsUpdate($event)\" multiple=\"true\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                <ion-select-option *ngFor='let value of interest' [disabled]='value.id == this.interestDisable ? true: false' [value]=\"value.id\" [selected]=\"secondary == value.id ? true: false\">{{value.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\"> Additional</ion-list-header>\r\n            <ion-item *ngIf='consultant'>\r\n              <ion-label> Class Type</ion-label>\r\n              <ion-select multiple='true' name=\"class_names_id\" (ionChange)=\"additionaldetailUpdate($event)\" placeholder=\"Class Type\">\r\n                <ion-select-option *ngFor='let value of classTypeDB'\r\n                  [selected]=\"setClassCheked(value.id) ? true : false\" [value]=\"value.id\">{{value.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Spoken Languages</ion-label>\r\n              <ion-select multiple='true' placeholder=\"Language\"\r\n                (ionChange)=\"detailsUpdate($event)\" name=\"languages_id\">\r\n                <ion-select-option *ngFor='let langIds of langData' [value]=\"langIds.id\"\r\n                  [selected]=\"setLangCheked(langIds.id) ? true: false\">{{langIds.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-list-header class=\"green text-white\">Location </ion-list-header>\r\n            <ion-item>\r\n              <ion-label>Country</ion-label>\r\n              <ion-select placeholder=\"Country\" name=\"country_id\" (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let countries of countryData' value=\"{{countries.id}}\" [selected]=\"countries.id == countryId ? true : false\">{{countries.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>State</ion-label>\r\n              <ion-select name=\"state_id\" placeholder=\"State\" (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let states of stateData' value=\"{{states.id}}\" [selected]=\"setStateCheked(states.id)? true : false\">{{states.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>City</ion-label>\r\n              <ion-select name=\"city_id\" placeholder=\"City\" (ionChange)=\"detailsUpdate($event)\">\r\n                <ion-select-option *ngFor='let citys of cityData' value=\"{{citys.id}}\" [selected]=\"citys.id == cityId ? true : false\">{{citys.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item style=\"--min-height: 34px;\">\r\n              <ion-label>Hometown</ion-label>              \r\n            </ion-item>\r\n            <ion-textarea name=\"hometown\" (change)=\"detailsUpdate($event)\"  value=\"{{hometown}}\"  class=\"ion-margin-horizontal ion-no-padding mb-10 hometownTextarea\"></ion-textarea>\r\n            <ng-container *ngFor=\"let validation of validation_messages.hometown\">\r\n              <span class=\"error-message\" *ngIf=\"(validations_form.get('hometown').touched) && validations_form.get('hometown').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n          </ion-list>\r\n        </ion-col>  \r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  <form class=\"detail-form edit-pro-form\" *ngIf=\"!dataa2\">\r\n    <ion-header class=\"top-header\">\r\n    <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n    <ion-buttons class=\"ion-no-margin\">\r\n    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"start\">\r\n    <ion-label>Display Name + </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-buttons class=\"ion-no-margin\" slot=\"end\">\r\n    <ion-icon ios=\"md-create\" md=\"md-create\" class=\"text-green\"></ion-icon>\r\n    </ion-buttons>\r\n    </ion-item>\r\n    </ion-list>\r\n    </ion-header>\r\n    <ion-grid class=\"main_content ion-no-padding\">\r\n    <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n    <div class=\"sec-banner\">\r\n    <div class=\"top-banner\">\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    <div class=\"profile-heading\">\r\n    <div class=\"img-profile\">\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n    <ion-list lines=\"none\" class=\"pb-0\">\r\n    <ion-list-header class=\"green text-white\">Info </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\"> Bio </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">More about me</ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">Tagline</ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\"> Interests </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\"> Additional</ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-list-header class=\"green text-white\">Location </ion-list-header>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-item>\r\n    </ion-list>\r\n    </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n    </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/settings/edit-profile/edit-profile-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/settings/edit-profile/edit-profile-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: EditProfilePageRoutingModule */

  /***/
  function srcAppSettingsEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
      return EditProfilePageRoutingModule;
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


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/settings/edit-profile/edit-profile.page.ts");

    var routes = [{
      path: '',
      component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }];

    var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
      _classCallCheck(this, EditProfilePageRoutingModule);
    };

    EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/settings/edit-profile/edit-profile.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/settings/edit-profile/edit-profile.module.ts ***!
    \**************************************************************/

  /*! exports provided: EditProfilePageModule */

  /***/
  function srcAppSettingsEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
      return EditProfilePageModule;
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


    var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-profile-routing.module */
    "./src/app/settings/edit-profile/edit-profile-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/settings/edit-profile/edit-profile.page.ts");

    var EditProfilePageModule = function EditProfilePageModule() {
      _classCallCheck(this, EditProfilePageModule);
    };

    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]]
    })], EditProfilePageModule);
    /***/
  },

  /***/
  "./src/app/settings/edit-profile/edit-profile.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/settings/edit-profile/edit-profile.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-name {\n  margin-top: 50px; }\n\nion-label {\n  color: #9e9e9e; }\n\nion-fab-button.green {\n  background: transparent; }\n\nion-grid ion-item {\n  font-size: 0.8125rem;\n  margin: 0 15px;\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\nion-grid ion-item:last-child {\n    margin-bottom: 15px; }\n\nion-grid ion-item ion-label {\n    color: #000;\n    font-size: 0.8125rem; }\n\nion-grid ion-item ion-input {\n    font-size: 0.8125rem; }\n\n.hometown-item ion-label {\n  position: absolute;\n  top: 0; }\n\n.hometown-item ion-label + ion-textarea {\n  margin-top: 25px;\n  --padding-start: 0; }\n\n.error-message {\n  display: inline-block; }\n\n.bioTextarea {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  --padding-bottom: 0px;\n  --padding-top: 0; }\n\n.taglineTextarea {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  --padding-bottom: 0px;\n  --padding-top: 0; }\n\n.hometownTextarea {\n  width: calc(100% - 30px);\n  font-size: 0.8125rem;\n  margin-top: 0; }\n\n.three-block ion-item:first-child, .three-block ion-item:last-child {\n  min-width: unset; }\n\n.add-disp-name {\n  padding-right: 5px;\n  font-size: 14px !important; }\n\n.top-header .item-has-focus {\n  --highlight-background: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvZWRpdC1wcm9maWxlL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlXFxCTS9zcmNcXGFwcFxcc2V0dGluZ3NcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGdCQUFnQixFQUFBOztBQUMzQjtFQUFVLGNBQWMsRUFBQTs7QUFDeEI7RUFBcUIsdUJBQXVCLEVBQUE7O0FBQzVDO0VBQ2Esb0JBQW9CO0VBQUMsY0FBYztFQUFDLGtCQUFnQjtFQUFHLHNCQUFvQixFQUFBOztBQUR4RjtJQUVxQixtQkFBbUIsRUFBQTs7QUFGeEM7SUFHa0IsV0FBVztJQUFDLG9CQUFtQixFQUFBOztBQUhqRDtJQUlrQixvQkFBb0IsRUFBQTs7QUFHdEM7RUFBeUIsa0JBQWtCO0VBQUMsTUFBTSxFQUFBOztBQUNsRDtFQUFzQyxnQkFBZ0I7RUFBQyxrQkFBZ0IsRUFBQTs7QUFDdkU7RUFBZSxxQkFBcUIsRUFBQTs7QUFDcEM7RUFBYSxtQkFBbUI7RUFBQyxnQkFBZ0I7RUFBQyxxQkFBaUI7RUFBSyxnQkFBYyxFQUFBOztBQUN0RjtFQUFpQixtQkFBbUI7RUFBQyxnQkFBZ0I7RUFBQyxxQkFBaUI7RUFBSyxnQkFBYyxFQUFBOztBQUMxRjtFQUFrQix3QkFBd0I7RUFBQyxvQkFBb0I7RUFBQyxhQUFhLEVBQUE7O0FBRTdFO0VBQXFFLGdCQUFnQixFQUFBOztBQUNyRjtFQUFpQixrQkFBa0I7RUFBQywwQkFBMEIsRUFBQTs7QUFDOUQ7RUFBNEIsdUNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW5hbWV7bWFyZ2luLXRvcDogNTBweDt9XHJcbmlvbi1sYWJlbHtjb2xvcjogIzllOWU5ZTt9XHJcbmlvbi1mYWItYnV0dG9uLmdyZWVue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O31cclxuaW9uLWdyaWR7XHJcbiAgICBpb24taXRlbXtmb250LXNpemU6IDAuODEyNXJlbTttYXJnaW46IDAgMTVweDstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAmOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTogMTVweDt9XHJcbiAgICAgICAgaW9uLWxhYmVse2NvbG9yOiAjMDAwO2ZvbnQtc2l6ZTowLjgxMjVyZW07fVxyXG4gICAgICAgIGlvbi1pbnB1dHtmb250LXNpemU6IDAuODEyNXJlbTt9XHJcbiAgICB9XHJcbn1cclxuLmhvbWV0b3duLWl0ZW0gaW9uLWxhYmVse3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7fVxyXG4uaG9tZXRvd24taXRlbSBpb24tbGFiZWwraW9uLXRleHRhcmVhe21hcmdpbi10b3A6IDI1cHg7LS1wYWRkaW5nLXN0YXJ0OiAwO31cclxuLmVycm9yLW1lc3NhZ2V7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLmJpb1RleHRhcmVhe21hcmdpbi1ib3R0b206IDEwcHg7bWFyZ2luLXRvcDogMTBweDstLXBhZGRpbmctYm90dG9tOiAwcHg7LS1wYWRkaW5nLXRvcDogMDt9XHJcbi50YWdsaW5lVGV4dGFyZWF7bWFyZ2luLWJvdHRvbTogMTBweDttYXJnaW4tdG9wOiAxMHB4Oy0tcGFkZGluZy1ib3R0b206IDBweDstLXBhZGRpbmctdG9wOiAwO31cclxuLmhvbWV0b3duVGV4dGFyZWF7d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO2ZvbnQtc2l6ZTogMC44MTI1cmVtO21hcmdpbi10b3A6IDA7fVxyXG4vLyBoaXRlc2ggY3NzIHN0cnRcclxuLnRocmVlLWJsb2NrIGlvbi1pdGVtOmZpcnN0LWNoaWxkLCAudGhyZWUtYmxvY2sgaW9uLWl0ZW06bGFzdC1jaGlsZCB7bWluLXdpZHRoOiB1bnNldDt9XHJcbi5hZGQtZGlzcC1uYW1lIHsgcGFkZGluZy1yaWdodDogNXB4O2ZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O31cclxuLnRvcC1oZWFkZXIgLml0ZW0taGFzLWZvY3Vzey0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDt9XHJcbi8vIGhpdGVzaCBjc3MgZW5kIl19 */";
    /***/
  },

  /***/
  "./src/app/settings/edit-profile/edit-profile.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/settings/edit-profile/edit-profile.page.ts ***!
    \************************************************************/

  /*! exports provided: EditProfilePage */

  /***/
  function srcAppSettingsEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
      return EditProfilePage;
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


    var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/settings.service */
    "./src/app/services/settings.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! .././../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");

    var EditProfilePage = /*#__PURE__*/function () {
      function EditProfilePage(settingsService, formBuilder, camera, crop, actionSheetController, transfer, storage, nutritionService, commonService, navCtrl) {
        _classCallCheck(this, EditProfilePage);

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
          about_me: [{
            type: 'required',
            message: 'Bio is required.'
          }, {
            type: 'maxlength',
            message: 'Bio cannot be more than 10 characters long'
          }],
          tag_line: [{
            type: 'required',
            message: 'Tag line is required.'
          }, {
            type: 'maxlength',
            message: 'Tag line cannot be more than 10 characters long'
          }],
          display_name: [{
            type: 'maxlength',
            message: 'Display name cannot be more than 12 characters long'
          }],
          hometown: [{
            type: 'maxlength',
            message: 'hometown  cannot be more than 200 characters long'
          }],
          gender: [{
            type: 'required',
            message: 'Please Select any one option'
          }]
        }; // fileTransfer: FileTransferObject = this.transfer.create();

        this.token1 = localStorage.getItem('userToken');
        this.uploadOpts = {
          fileKey: 'file',
          fileName: 'somerandom.jpg',
          httpMethod: 'POST',
          headers: {
            'Authorization': 'Bearer ' + this.token1
          },
          params: {}
        };
        this.createForm();
      }

      _createClass(EditProfilePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          setTimeout(function () {
            return 1000;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var dataPromise = this.storage.get('userData');
          dataPromise.then(function (data) {
            _this.storageData = JSON.parse(data);
            _this.userType = _this.storageData.user_type;
            _this.userName = _this.storageData.user_name;

            if (_this.userType == '1') {
              _this.consultant = true;
            }
          });
          this.settingsService.getCommonData().subscribe(function (data) {
            _this.classTypeDB = data.classData;
            _this.classTypeDBArr = JSON.stringify(_this.classTypeDB);
            _this.interest = data.specialityData;
            _this.langData = data.langData;
            _this.countryData = data.countryData;
          });
          this.settingsService.getProfileData().subscribe(function (data) {
            _this.dataa2 = true;
            var dataa = data.status.dataa;
            _this.profileData = data.status;
            _this.dataa = data.status;

            if (_this.profileData && _this.profileData != '') {
              _this.mainData = true;
            }

            _this.displayName = data.status.userData.bios.display_name;

            if (data.status.userData.bios.profile_pic != null) {
              _this.profilePicture = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].profilePic + data.status.userData.bios.profile_pic;
            } else {
              _this.profilePicture = './../../assets/images/user.jpg';
            }

            if (data.status.userData.bios.profile_background_image != null) {
              _this.backgroundPicture = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].backgroundPic + data.status.userData.bios.profile_background_image;
            } else {
              _this.backgroundPicture = './../../assets/images/editcoverpic.png';
            }

            _this.sex = data.status.userData.gender;
            _this.birthYear = data.status.userData.birth_year;
            _this.aboutMe = data.status.userData.bios.about_me;

            if (_this.userType == '1') {
              _this.moreAboutMe = data.status.userData.additional.more_about_me;
              _this.tagline = data.status.userData.additional.tag_line;
              _this.classTypeArr = data.status.userData.additional.class_names_id.split(',');
            }

            _this.interesrDB = data.status.userData.bios.specialities_id;
            _this.interestDisable = data.status.userData.bios.specialities_id;

            if (data.status.userData.bios.secondary_specialities_ids !== null) {
              _this.secondary = data.status.userData.bios.secondary_specialities_ids.split(',');
            }

            if (data.status.userData.bios.languages_id) {
              _this.spokenLanguagesArr = data.status.userData.bios.languages_id.split(',');
            } else {
              _this.spokenLanguagesArr = [];
            }

            _this.countryId = data.status.userData.bios.country_id;
            console.log(_this.countryId);
            _this.stateId = data.status.userData.bios.state_id;
            _this.cityId = data.status.userData.bios.city_id;
            _this.hometown = data.status.userData.bios.hometown;

            if (_this.countryId !== '') {
              _this.stateData = data.status.address.allStates;
              _this.cityData = data.status.address.allCities;
            }
          }, function (err) {
            _this.dataa2 = true;
            _this.dataa = true;
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.validations_form = this.formBuilder.group({
            about_me: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            tag_line: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            display_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)])),
            hometown: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)])),
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lang_ids: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            more_about_me: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            class_names_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            state_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            secondary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            city_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "fileProgress",
        value: function fileProgress(fileInput) {
          this.fileData = fileInput.target.files[0];
        }
      }, {
        key: "pickImage",
        value: function pickImage(sourceType) {
          var _this2 = this;

          var options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;

            _this2.cropImage(imageData, 'profile_pic');

            console.log(base64Image + ' --base64Image');
          }, function (err) {});
        }
      }, {
        key: "selectionImage",
        value: function selectionImage(sourceType) {
          var _this3 = this;

          var options = {
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
          this.camera.getPicture(options).then(function (imageData) {
            // let baseImage = 'data:image/jpeg;base64,' + imageData; 
            _this3.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

            _this3.cropImage(imageData, 'profile_background_image'); // this.designImage(imageData);
            // console.log(baseImage + ' --baseImage');

          }, function (err) {});
        }
      }, {
        key: "backImage",
        value: function backImage(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.img = event.srcElement.name;
                    _context.next = 3;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: 'Load from Library',
                        handler: function handler() {
                          _this4.selectionImage(_this4.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Use Camera',
                        handler: function handler() {
                          _this4.selectionImage(_this4.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    actionSheet = _context.sent;
                    _context.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectImage",
        value: function selectImage(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.img = event.srcElement.name;
                    _context2.next = 3;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: 'Load from Library',
                        handler: function handler() {
                          _this5.pickImage(_this5.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Use Camera',
                        handler: function handler() {
                          _this5.pickImage(_this5.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    actionSheet = _context2.sent;
                    _context2.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "cropImage",
        value: function cropImage(fileUrl, fieldname) {
          var _this6 = this;

          this.crop.crop(fileUrl, {
            quality: 50,
            targetWidth: 411,
            targetHeight: 185
          }).then(function (newPath) {
            _this6.commonService.presentLoader();

            _this6.showCroppedImage(newPath.split('?')[0], fieldname);

            var fileTransfer = _this6.transfer.create();

            var parameters = {
              channel: _this6.img
            };
            var uploadOpts = {
              fileKey: 'file',
              fileName: newPath.substr(newPath.lastIndexOf('/') + 1),
              httpMethod: 'POST',
              chunkedMode: false
            };
            _this6.token = localStorage.getItem('userToken');
            var headers = {
              'Authorization': 'Bearer ' + _this6.token
            };
            uploadOpts.headers = headers;
            uploadOpts.params = parameters;
            fileTransfer.upload(newPath, _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].ApiUrl + 'api/auth/uploadPic', uploadOpts).then(function (data) {
              _this6.commonService.dismissLoader();

              _this6.commonService.presentToast('Updated !');

              _this6.ngOnInit();
            }, function (err) {
              alert(JSON.stringify(err) + 'err');
            });
          }, function (error) {
            _this6.commonService.presentToast('Error !');
          });
        }
      }, {
        key: "designImage",
        value: function designImage(fileUrl) {
          var _this7 = this;

          if (this.gallaryImgPath.length == 0) {
            return false;
          }

          this.commonService.presentLoader();
          this.postSubscrib = this.settingsService.uploadPic({
            'file[]': this.gallaryImgPath
          }).subscribe(function (data) {
            console.log("pppppa" + data);

            _this7.commonService.dismissLoader();
          }, function (err) {
            _this7.commonService.dismissLoader();
          });
        }
      }, {
        key: "showCroppedImage",
        value: function showCroppedImage(ImagePath, fieldname) {
          this.isLoading = true;
          var copyPath = ImagePath;
          var splitPath = copyPath.split('/');
          var imageName = splitPath[splitPath.length - 1];
          var img = 'abc';
          var filePath = ImagePath.split(img)[0];
          var test_obj = {
            field_name: fieldname,
            field_data: imageName
          };
          this.saveDetail = test_obj;
        } // update profile values

      }, {
        key: "detailsUpdate",
        value: function detailsUpdate(editvalue) {
          var _this8 = this;

          console.log(editvalue);
          var abc = editvalue.target.value;

          if (Array.isArray(editvalue.target.value)) {
            this.data_val = editvalue.target.value.toString();
          } else {
            this.data_val = editvalue.target.value;
          }

          if (editvalue.target.name == 'specialities_id') {
            this.interestDisable = this.data_val;
          }

          var test_obj = {
            field_name: editvalue.target.name,
            field_data: this.data_val
          };

          if (this.data_val !== '') {
            this.saveDetail = test_obj;
          }

          if (this.saveDetail.field_name === 'country_id') {
            this.settingsService.getState(this.saveDetail).subscribe(function (data) {
              _this8.stateData = data.stateData;
            }, function (err) {});
          }

          if (this.saveDetail.field_name === 'state_id') {
            this.settingsService.getCity(this.saveDetail).subscribe(function (data) {
              _this8.cityData = data.cityData;
            }, function (err) {});
          }

          this.settingsService.editProfile(this.saveDetail).subscribe(function (data) {
            if (data.status === 'success') {
              _this8.commonService.presentToast('Saved !');

              if (editvalue.target.name == 'display_name') {
                _this8.ngOnInit();
              }
            } else {
              _this8.commonService.presentToast('Error !');
            }
          }, function (err) {
            _this8.commonService.presentToast('Error !');
          });
        } // update additional profile value for consultant

      }, {
        key: "additionaldetailUpdate",
        value: function additionaldetailUpdate(editvalue) {
          var _this9 = this;

          if (editvalue.target.name == 'tag_line') {
            if (this.validations_form.controls.tag_line.status == 'INVALID') {
              return;
            }
          }

          if (Array.isArray(editvalue.target.value)) {
            this.data_val = editvalue.target.value.toString();
          } else {
            this.data_val = editvalue.target.value;
          }

          var test_obj = {
            field_name: editvalue.target.name,
            field_data: this.data_val
          };

          if (this.data_val !== '') {
            this.saveDetail = test_obj;
          }

          this.settingsService.additionalInfo(this.saveDetail).subscribe(function (data) {
            if (data.status === 'success') {
              _this9.commonService.presentToast('Saved !');
            } else {
              _this9.commonService.presentToast('Error !');
            }
          }, function (err) {
            _this9.commonService.presentToast('Error !');
          });
        }
      }, {
        key: "showInputBox",
        value: function showInputBox() {
          this.defaultInputText = false;
          this.defaultInputBox = true;
        }
      }, {
        key: "HideInputBox",
        value: function HideInputBox() {
          this.defaultInputText = true;
          this.defaultInputBox = false;
        }
      }, {
        key: "setLangCheked",
        value: function setLangCheked(id) {
          var idd = id.toString();

          if (this.spokenLanguagesArr) {
            if (this.spokenLanguagesArr.indexOf(idd) !== -1) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "setClassCheked",
        value: function setClassCheked(id) {
          var idd = id.toString();

          if (this.classTypeArr) {
            if (this.classTypeArr.indexOf(idd) !== -1) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "setInterestCheked",
        value: function setInterestCheked(id) {
          var idd = '';
          idd = id.toString();

          if (this.interesrDB) {
            if (this.interesrDB.indexOf(idd) !== -1) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "setSecondaryInterestCheked",
        value: function setSecondaryInterestCheked(id) {
          var idd = id.toString();

          if (this.secondary) {
            if (this.secondary.indexOf(idd) !== -1 && this.interestDisable !== id) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "setStateCheked",
        value: function setStateCheked(id) {
          var idd = '';
          idd = id.toString();

          if (this.stateId) {
            if (this.stateId.indexOf(idd) !== -1) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return EditProfilePage;
    }();

    EditProfilePage.ctorParameters = function () {
      return [{
        type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_7__["NutritionService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/edit-profile/edit-profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.page.scss */
      "./src/app/settings/edit-profile/edit-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"], _services_nutrition_service__WEBPACK_IMPORTED_MODULE_7__["NutritionService"], _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es5.js.map