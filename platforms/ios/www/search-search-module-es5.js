function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fixed-footer/fixed-footer.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fixed-footer/fixed-footer.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFixedFooterFixedFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-footer class=\"sticky-footer\">\r\n  <ion-list class=\"ion-no-margin\">\r\n    <ion-item>\r\n      <a [routerLink]=\"['/main']\" class=\"div_block waves-effect visible-over\">\r\n        <ion-icon ios=\"ios-home\" md=\"md-home\"></ion-icon>\r\n      </a>\r\n    </ion-item>\r\n    <ion-item>\r\n      <a [routerLink]=\"['/consultant-profile-view']\" class=\"div_block waves-effect visible-over\">\r\n        <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n      </a>\r\n    </ion-item>\r\n    <ion-item>\r\n      \r\n    </ion-item>\r\n    <ion-item>\r\n      <a [routerLink]=\"['/chat']\" class=\"div_block waves-effect visible-over\">\r\n        <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n      </a>\r\n    </ion-item>\r\n    <ion-item>\r\n      <a [routerLink]=\"['/user-profile-view']\" class=\"div_block waves-effect visible-over\">\r\n        <ion-icon ios=\"ios-person\" md=\"md-person\"></ion-icon>\r\n      </a>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/programs/programs.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/programs/programs.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchProgramsProgramsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row>\r\n  <ion-col size=\"12\">\r\n    <ion-toolbar class=\"searchbar\">\r\n      <!-- <ion-searchbar type=\"text\" (ionInput)=\"searchChanged($event)\"></ion-searchbar> -->\r\n      <ion-searchbar [(ngModel)]=\"term\" animated=\"true\"></ion-searchbar>\r\n    </ion-toolbar>\r\n  </ion-col>\r\n</ion-row>\r\n<div class=\"categoryHeading\">\r\n  <h6>Categories</h6>\r\n</div>\r\n<ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"!searchProgram\">\r\n  <ion-segment scrollable=\"true\" class=\"ion-no-padding\" (ionChange)=\"categoryChanged($event)\">\r\n    <ion-segment-button *ngFor=\"let item of speciality | filter:term\" value=\"{{item?.id}}\"\r\n      [checked]=\"categories.id==item?.id ? true :false\">\r\n      <span>{{item?.name}}</span>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n<div *ngIf=\"!searchProgram\">\r\n  <ion-list lines=\"none\" class=\"item-list ion-no-padding\" *ngIf=\"programList?.length > 0; else noData\">\r\n    <ion-card *ngFor=\"let program of programList\" [class]=\"!program?.ad ? 'item-card ': 'video-card advertise-block'\">\r\n      <ion-card-header class=\"item-header\" *ngIf=\"!program?.ad\">\r\n        <ion-avatar>\r\n          <img src=\"{{url}}{{program?.program_user?.bios?.profile_pic}}\"\r\n            *ngIf=\"program?.program_user?.bios?.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\" *ngIf=\"!program?.program_user?.bios?.profile_pic\">\r\n        </ion-avatar>\r\n        <div class=\"header-right\">\r\n          <ion-label\r\n            [routerLink]=\"program?.program_user?.user_type==0 ? ['/tabs/user-profile-view/',program?.program_user?.id] : ['/tabs/consultant-profile-view/',program?.program_user?.id]\">\r\n            <ion-card-title>{{program?.program_user?.user_name}}</ion-card-title>\r\n            <ion-card-subtitle>{{program?.program_user?.location}}</ion-card-subtitle>\r\n          </ion-label>\r\n          <div (click)=\"addBookmark(program?.id, program?.bookmarked , 5)\" class=\"{{ program?.bookmarked ?'active':'inactive' }}\">\r\n            <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding item-content\" *ngIf=\"!program?.ad\">\r\n        <ion-thumbnail  [routerLink]=\"program?.program_user?.id==userData?.id ? ['/program-details/',program?.id] : ['/program-view/',program?.id]\" >\r\n          <img src=\"../../assets/images/demo3.jpg\">\r\n        </ion-thumbnail>\r\n        <div class=\"post-content\">\r\n          <span class=\"username-text text-green\">{{program?.title}}</span>\r\n          <p class=\"mb-10\" *ngIf=\"program?.description && program?.description.length < 30\">\r\n            {{program?.description.substr(0, 100)}} </p>\r\n          <p class=\"mb-10\" *ngIf=\"program?.description && program?.description.length > 29 && expanded !=  program.id\">\r\n            {{program?.description.substr(0, 29)}}\r\n            <span (click)=\"expanded =program.id\"\r\n              class=\"text-green\">{{expanded==  program.id?'View less':'View more'}}</span></p>\r\n          <p class=\"mb-10\" *ngIf=\"expanded ==  program.id \">{{program?.description}}\r\n            <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  program.id ?'View less':'View more'}}</span>\r\n          </p>\r\n\r\n        </div>\r\n      </ion-card-content>\r\n\r\n      <!-- ADVERTISE HTML start -->\r\n      <ion-card-header class=\"card-head upcoming-block\" *ngIf=\"program?.ad\">\r\n        <img src=\"../../assets/images/demo3.jpg\">\r\n        <ion-label class=\"full-width\">\r\n          <a href=\"\">\r\n            <ion-card-title>Advertisement Title</ion-card-title>\r\n            <ion-card-subtitle>Advertisement Location</ion-card-subtitle>\r\n          </a>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\" *ngIf=\"program?.ad\">\r\n        <img src=\"../../assets/images/demo3.jpg\">\r\n      </ion-card-content>\r\n      <!-- ADVERTISE HTML ends -->\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n  <!-- S K E L E T O N -->\r\n  <ion-list lines=\"none\" class=\"item-list ion-no-padding\" *ngIf=\"!programList\">\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  </ion-list>\r\n  \r\n  <!-- S K E L E T O N   E N D S-->\r\n</div>\r\n<!-- S K E L E T O N -->\r\n<ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"!speciality \">\r\n  <ion-segment scrollable=\"true\" class=\"ion-no-padding\">\r\n    <ion-segment-button checked>\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n<!-- S K E L E T O N   E N D S-->\r\n\r\n<!-- search  Div -->\r\n<div *ngIf=\"searchProgram\">\r\n  <ion-list lines=\"none\" class=\"item-list ion-no-padding\">\r\n    <ion-card *ngFor=\"let program of searchProgram\" [class]=\"!program?.ad ? 'item-card ': 'video-card advertise-block'\">\r\n      <ion-card-header class=\"item-header\" *ngIf=\"!program?.ad\">\r\n        <ion-avatar>\r\n          <img src=\"{{url}}{{program?.program_user?.bios?.profile_pic}}\"\r\n            *ngIf=\"program?.program_user?.bios?.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\" *ngIf=\"!program?.program_user?.bios?.profile_pic\">\r\n        </ion-avatar>\r\n        <div class=\"header-right\">\r\n          <ion-label\r\n            [routerLink]=\"program?.program_user?.user_type==0 ? ['/tabs/user-profile-view/',program?.program_user?.id] : ['/tabs/consultant-profile-view/',program?.program_user?.id]\">\r\n            <ion-card-title>{{program?.program_user?.user_name}}</ion-card-title>\r\n            <ion-card-subtitle>{{program?.program_user?.location}}</ion-card-subtitle>\r\n          </ion-label>\r\n          <div (click)=\"bookmark1=!bookmark1\" class=\"{{ bookmark1 ?'inactive':'active' }}\">\r\n            <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding item-content\" *ngIf=\"!program?.ad\">\r\n        <ion-thumbnail>\r\n          <img src=\"../../assets/images/demo3.jpg\">\r\n        </ion-thumbnail>\r\n        <div class=\"post-content\">\r\n          <span class=\"username-text text-green\">{{program?.title}}</span>\r\n          <p class=\"mb-10\" *ngIf=\"program?.description && program?.description.length < 30\">\r\n            {{program?.description.substr(0, 100)}} </p>\r\n          <p class=\"mb-10\" *ngIf=\"program?.description && program?.description.length > 29 && expanded !=  program.id\">\r\n            {{program?.description.substr(0, 29)}}\r\n            <span (click)=\"expanded =program.id\"\r\n              class=\"text-green\">{{expanded==  program.id?'View less':'View more'}}</span></p>\r\n          <p class=\"mb-10\" *ngIf=\"expanded ==  program.id \">{{program?.description}}\r\n            <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  program.id ?'View less':'View more'}}</span>\r\n          </p>\r\n\r\n        </div>\r\n      </ion-card-content>\r\n\r\n      <!-- ADVERTISE HTML start -->\r\n      <ion-card-header class=\"card-head upcoming-block\" *ngIf=\"program?.ad\">\r\n        <img src=\"../../assets/images/demo3.jpg\">\r\n        <ion-label class=\"full-width\">\r\n          <a href=\"\">\r\n            <ion-card-title>Advertisement Title</ion-card-title>\r\n            <ion-card-subtitle>Advertisement Location</ion-card-subtitle>\r\n          </a>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\" *ngIf=\"program?.ad\">\r\n        <img src=\"../../assets/images/demo3.jpg\">\r\n      </ion-card-content>\r\n      <!-- ADVERTISE HTML ends -->\r\n    </ion-card>\r\n  </ion-list>  \r\n  <!-- S K E L E T O N -->\r\n  \r\n\r\n  <ion-list lines=\"none\" class=\"item-list ion-no-padding\" *ngIf=\"searchSkeleton\">\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  </ion-list>\r\n  <!-- S K E L E T O N   E N D S-->\r\n</div>\r\n<div class=\"no-data\" *ngIf=\"!searchProgram && programList.length < 1\">\r\n  <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n  <p>No Program Found</p>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click)=\"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Search</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-segment class=\"top-segment\" (ionChange)=\"tabChange($event)\">\r\n    <ion-segment-button value=\"people\" checked>People</ion-segment-button>\r\n    <ion-segment-button value=\"programs\">Programs</ion-segment-button>\r\n  </ion-segment>\r\n  <div [ngSwitch]=\"search\">\r\n    <ion-list lines=\"none\" class=\"item-list ion-no-padding\" *ngSwitchCase=\"'people'\">\r\n      <ion-toolbar class=\"searchbar\">\r\n        <ion-searchbar [(ngModel)]=\"term\" animated=\"true\"></ion-searchbar>\r\n      </ion-toolbar>\r\n      <!--top 10 people-->\r\n      <div *ngIf=\"!newSearchPersonList\">\r\n        <ion-item *ngFor=\"let item of searchPersonList | filter:term\" class=\"item-block\"\r\n          [routerLink]=\"item.user_type==0 ? ['/tabs/user-profile-view/',item.id] : ['/tabs/consultant-profile-view/',item.id]\">\r\n          <ion-avatar slot=\"start\">\r\n            <img *ngIf=\"item?.bios?.profile_pic\" src=\"{{url}}{{item?.bios?.profile_pic}}\">\r\n            <img *ngIf=\"!item?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3> {{item.user_name}}</h3>\r\n            <span *ngIf=\"item.user_type==1\">{{item?.publicVideos?.total}} Videos, {{item?.upcomingProgram?.total}}\r\n              Upcoming Programs</span>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-group *ngFor=\"let item of result | filter:term\">\r\n          <ion-item-divider sticky class=\"grey-header ion-padding-horizontal\">\r\n            <ion-label> {{item.key}} </ion-label>\r\n          </ion-item-divider>\r\n          <ion-item-sliding *ngFor=\"let key of item.contacts | filter:term\">\r\n            <ion-item *ngIf=\"!key.advertisment\" class=\"item-block\"\r\n              [routerLink]=\"key.user_type==0 ? ['/tabs/user-profile-view/',key.id] : ['/tabs/consultant-profile-view/',key.id]\">\r\n              <ion-avatar slot=\"start\">\r\n                <img *ngIf=\"key?.bios?.profile_pic\" src=\"{{url}}{{key?.bios?.profile_pic}}\">\r\n                <img *ngIf=\"!key?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h3> {{key.user_name}}</h3>\r\n                <span *ngIf=\"key.user_type==1\">{{key?.publicVideos?.total}} Videos, {{key?.upcomingProgram?.total}}\r\n                  Upcoming Programs</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"item-block advertise-block\" *ngIf=\"key.advertisment\">\r\n              <ion-avatar slot=\"start\" class=\"advertise-box\">\r\n                <ion-label>A</ion-label>\r\n              </ion-avatar>\r\n\r\n              <ion-label>\r\n                <h3>Advertisement Title</h3>\r\n                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-item-sliding>\r\n        </ion-item-group>\r\n      </div>\r\n      <!--Other all people list-->\r\n      <div *ngIf=\"newSearchPersonList\">\r\n        <ion-item *ngFor=\"let key of newSearchPersonList\" class=\"item-block\"\r\n          [routerLink]=\"key.user_type==0 ? ['/tabs/user-profile-view/',key.id] : ['/tabs/consultant-profile-view/',key.id]\">\r\n          <ion-avatar slot=\"start\">\r\n            <img *ngIf=\"key?.bios?.profile_pic\" src=\"{{url}}{{key?.bios?.profile_pic}}\">\r\n            <img *ngIf=\"!key?.bios?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>{{key.user_name}}</h3>\r\n            <span *ngIf=\"key.user_type==1\">{{key?.publicVideos?.total}} Videos, {{key?.upcomingProgram?.total}} Upcoming\r\n              Programs</span>\r\n          </ion-label>\r\n        </ion-item>\r\n        <div *ngIf=\"newSearchPersonList < 1\" class=\"no-data\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Data Found</p>\r\n        </div>\r\n      </div>\r\n    </ion-list>\r\n    <!--Search  people list-->\r\n    <div *ngIf=\"!searchPersonList\">\r\n      <ion-list lines=\"none\" class=\"item-list ion-no-padding\" *ngSwitchCase=\"'people'\">\r\n        <ion-item class=\"item-block\" *ngFor=\"let card of [].constructor(15)\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </h3>\r\n            <span>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </span>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <!--Progam tab-->\r\n    <div *ngSwitchCase=\"'programs'\">\r\n      <app-programs></app-programs>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/fixed-footer/fixed-footer.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/fixed-footer/fixed-footer.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFixedFooterFixedFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpeGVkLWZvb3Rlci9maXhlZC1mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/fixed-footer/fixed-footer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/fixed-footer/fixed-footer.component.ts ***!
    \********************************************************/

  /*! exports provided: FixedFooterComponent */

  /***/
  function srcAppFixedFooterFixedFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedFooterComponent", function () {
      return FixedFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FixedFooterComponent = /*#__PURE__*/function () {
      function FixedFooterComponent() {
        _classCallCheck(this, FixedFooterComponent);

        this.is_act = false;
      }

      _createClass(FixedFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FixedFooterComponent;
    }();

    FixedFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fixed-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fixed-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fixed-footer/fixed-footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fixed-footer.component.scss */
      "./src/app/fixed-footer/fixed-footer.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FixedFooterComponent);
    /***/
  },

  /***/
  "./src/app/search/programs/programs.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/search/programs/programs.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchProgramsProgramsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subprofile_tabs {\n  --background: transparent;\n  padding: 0 6px; }\n\n.subprofile_tabs ion-segment ion-segment-button {\n  margin: 0 5px;\n  border-radius: 30px;\n  background: rgba(39, 166, 154, 0.14);\n  position: relative;\n  height: 32px;\n  min-height: 32px;\n  font-size: 0.75rem; }\n\n.subprofile_tabs ion-segment ion-segment-button span {\n  font-size: 0.6875rem;\n  font-weight: 500; }\n\n.subprofile_tabs ion-segment ion-segment-button.segment-button-checked {\n  background: #27a69a; }\n\n.subprofile_tabs ion-segment ion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 40px;\n  margin: 0; }\n\n.no-data {\n  height: calc(100vh - 300px); }\n\nion-item-divide {\n  border: none; }\n\n.categoryHeading h6 {\n  margin-top: 0;\n  padding-left: 10px;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3Byb2dyYW1zL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxzZWFyY2hcXHByb2dyYW1zXFxwcm9ncmFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQix5QkFBYTtFQUFhLGNBQWMsRUFBQTs7QUFDekQ7RUFBZ0QsYUFBYTtFQUFDLG1CQUFtQjtFQUFDLG9DQUFvQztFQUFDLGtCQUFrQjtFQUFDLFlBQVk7RUFBQyxnQkFBZ0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDMUw7RUFDUyxvQkFBb0I7RUFBQyxnQkFBZ0IsRUFBQTs7QUFFOUM7RUFBdUUsbUJBQW1CLEVBQUE7O0FBQzFGO0VBQWtFLGtCQUFrQjtFQUFDLFlBQVk7RUFBQyxTQUFTLEVBQUE7O0FBQzNHO0VBQVMsMkJBQTJCLEVBQUE7O0FBQ3BDO0VBQWdCLFlBQVksRUFBQTs7QUFDNUI7RUFDTyxhQUFhO0VBQUMsa0JBQWtCO0VBQUMsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvcHJvZ3JhbXMvcHJvZ3JhbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VicHJvZmlsZV90YWJzey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7cGFkZGluZzogMCA2cHg7fVxyXG4uc3VicHJvZmlsZV90YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbnttYXJnaW46IDAgNXB4O2JvcmRlci1yYWRpdXM6IDMwcHg7YmFja2dyb3VuZDogcmdiYSgzOSwgMTY2LCAxNTQsIDAuMTQpO3Bvc2l0aW9uOiByZWxhdGl2ZTtoZWlnaHQ6IDMycHg7bWluLWhlaWdodDogMzJweDtmb250LXNpemU6IDAuNzVyZW07fVxyXG4uc3VicHJvZmlsZV90YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIHNwYW57Zm9udC1zaXplOiAwLjY4NzVyZW07Zm9udC13ZWlnaHQ6IDUwMDt9XHJcbn1cclxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtiYWNrZ3JvdW5kOiAjMjdhNjlhO31cclxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLXNrZWxldG9uLXRleHR7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDBweDttYXJnaW46IDA7fVxyXG4ubm8tZGF0YXtoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7fVxyXG5pb24taXRlbS1kaXZpZGV7Ym9yZGVyOiBub25lO31cclxuLmNhdGVnb3J5SGVhZGluZ3tcclxuICAgIGg2e21hcmdpbi10b3A6IDA7cGFkZGluZy1sZWZ0OiAxMHB4O21hcmdpbi1ib3R0b206IDE1cHg7fVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/search/programs/programs.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/search/programs/programs.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProgramsComponent */

  /***/
  function srcAppSearchProgramsProgramsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function () {
      return ProgramsComponent;
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


    var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts");

    var ProgramsComponent = /*#__PURE__*/function () {
      function ProgramsComponent(searchService, commonService, peopleService) {
        _classCallCheck(this, ProgramsComponent);

        this.searchService = searchService;
        this.commonService = commonService;
        this.peopleService = peopleService;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].profilePic;
        this.expanded = false;
        this.programList = true;
        this.bookmark = true;
        this.searchSkeleton = false;
      }

      _createClass(ProgramsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userData = JSON.parse(localStorage.getItem('userData'));
          console.log(this.userData);
          this.searchService.getSpecialities({}).subscribe(function (data) {
            _this.speciality = data.list;
            _this.categories = data.list[0];
            console.log(_this.categories);

            _this.searchService.getProgramByCategory({
              'categoryId': _this.categories.id
            }).subscribe(function (data) {
              console.log(data);
              var i = 1;
              _this.programList = [];
              data.programList.filter(function (el) {
                if (i % 5 == 0) {
                  _this.programList.push({
                    'ad': true,
                    'adTitle': 'Advertisement Title'
                  });
                }

                i++;
                el.bookmarks.filter(function (f) {
                  if (f.user_id == _this.userData.id) {
                    el.bookmarked = true;
                  }
                });

                _this.programList.push(el);
              });
              console.log(_this.programList);
            });
          });
        }
      }, {
        key: "categoryChanged",
        value: function categoryChanged(ev) {
          var _this2 = this;

          this.programList = null;
          this.searchService.getProgramByCategory({
            'categoryId': ev.detail.value
          }).subscribe(function (data) {
            _this2.programList = [];
            console.log(data);
            var i = 1;
            data.programList.filter(function (el) {
              if (i % 5 == 0) {
                _this2.programList.push({
                  'ad': true,
                  'adTitle': 'Advertisement Title'
                });
              }

              i++;

              _this2.programList.push(el);
            });
            console.log(_this2.programList);
          });
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(ev) {
          var _this3 = this;

          var searchTerm = ev.srcElement.value;
          this.searchSkeleton = true;
          this.searchProgram = [];

          if (!searchTerm) {
            setTimeout(function () {
              _this3.searchProgram = null;
              _this3.searchSkeleton = false;
            }, 1500);
            return;
          }

          console.log(searchTerm);
          this.searchService.searchProgramRequest({
            "searchQuery": searchTerm
          }).subscribe(function (search) {
            _this3.searchSkeleton = false;
            console.log(searchTerm);
            _this3.searchProgram = search.searchList;
          }, function (err) {});
        }
      }, {
        key: "addBookmark",
        value: function addBookmark(postId, bmStat, post_type) {
          var _this4 = this;

          this.programList.forEach(function (element, i) {
            if (element.id == postId) {
              _this4.programList[i].bookmarked = !bmStat;
            }
          });
          this.peopleService.bookmarkPost({
            'postId': postId,
            'bookmark': bmStat,
            'post_type': post_type
          }).subscribe(function (data) {
            if (data.status) {
              console.log(data);

              _this4.commonService.presentToast(data.status);
            }
          });
        }
      }]);

      return ProgramsComponent;
    }();

    ProgramsComponent.ctorParameters = function () {
      return [{
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_3__["PeopleViewService"]
      }];
    };

    ProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-programs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./programs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/programs/programs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./programs.component.scss */
      "./src/app/search/programs/programs.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_3__["PeopleViewService"]])], ProgramsComponent);
    /***/
  },

  /***/
  "./src/app/search/search-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/search/search-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SearchPageRoutingModule */

  /***/
  function srcAppSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
      return SearchPageRoutingModule;
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


    var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/search/search.page.ts");

    var routes = [{
      path: '',
      component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }];

    var SearchPageRoutingModule = function SearchPageRoutingModule() {
      _classCallCheck(this, SearchPageRoutingModule);
    };

    SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/search/search.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/search/search.module.ts ***!
    \*****************************************/

  /*! exports provided: SearchPageModule */

  /***/
  function srcAppSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
      return SearchPageModule;
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


    var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-routing.module */
    "./src/app/search/search-routing.module.ts");
    /* harmony import */


    var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/search/search.page.ts");
    /* harmony import */


    var _fixed_footer_fixed_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../fixed-footer/fixed-footer.component */
    "./src/app/fixed-footer/fixed-footer.component.ts");
    /* harmony import */


    var _programs_programs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./programs/programs.component */
    "./src/app/search/programs/programs.component.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");

    var SearchPageModule = function SearchPageModule() {
      _classCallCheck(this, SearchPageModule);
    };

    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]],
      entryComponents: [_programs_programs_component__WEBPACK_IMPORTED_MODULE_8__["ProgramsComponent"]],
      declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"], _fixed_footer_fixed_footer_component__WEBPACK_IMPORTED_MODULE_7__["FixedFooterComponent"], _programs_programs_component__WEBPACK_IMPORTED_MODULE_8__["ProgramsComponent"]]
    })], SearchPageModule);
    /***/
  },

  /***/
  "./src/app/search/search.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/search/search.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subprofile_tabs {\n  --background: transparent; }\n\n.subprofile_tabs ion-segment ion-segment-button {\n  margin: 0 5px;\n  border-radius: 30px;\n  background: rgba(39, 166, 154, 0.14);\n  position: relative; }\n\n.subprofile_tabs ion-segment ion-segment-button.segment-button-checked {\n  background: #27a69a; }\n\n.subprofile_tabs ion-segment ion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 40px;\n  margin: 0; }\n\nion-item-divide {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIseUJBQWEsRUFBQTs7QUFDOUI7RUFBZ0QsYUFBYTtFQUFDLG1CQUFtQjtFQUFDLG9DQUFvQztFQUFDLGtCQUFrQixFQUFBOztBQUN6STtFQUF1RSxtQkFBbUIsRUFBQTs7QUFDMUY7RUFBa0Usa0JBQWtCO0VBQUMsWUFBWTtFQUFDLFNBQVMsRUFBQTs7QUFDM0c7RUFBZ0IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VicHJvZmlsZV90YWJzey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxyXG4uc3VicHJvZmlsZV90YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbnttYXJnaW46IDAgNXB4O2JvcmRlci1yYWRpdXM6IDMwcHg7YmFja2dyb3VuZDogcmdiYSgzOSwgMTY2LCAxNTQsIDAuMTQpO3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5zdWJwcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7YmFja2dyb3VuZDogIzI3YTY5YTt9XHJcbi5zdWJwcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1za2VsZXRvbi10ZXh0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQwcHg7bWFyZ2luOiAwO31cclxuaW9uLWl0ZW0tZGl2aWRle2JvcmRlcjogbm9uZTt9Il19 */";
    /***/
  },

  /***/
  "./src/app/search/search.page.ts":
  /*!***************************************!*\
    !*** ./src/app/search/search.page.ts ***!
    \***************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
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


    var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! .././services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/common.service */
    "./src/app/services/common.service.ts");

    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(alertCtrl, router, navCtrl, searchservice, commonService) {
        _classCallCheck(this, SearchPage);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.searchservice = searchservice;
        this.commonService = commonService;
        this.logText = "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.";
        this.bookmark = true;
        this.searchTerm = '';
        this.personList = null;
        this.selectedPersonList = [];
        this.newSearchPersonList = null;
        this.list_to_show = this.selectedPersonList;
        this.show_list = true;
        this.advertisment = [];
        this.people_new_list = [];
        this.expanded = false;
        this.search = 'people';
        this.categories = 'yoga';
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.i = 0;
        this.term = '';
      } //   doRefresh(event) {    
      //     this.ngOnInit();  
      //     setTimeout(() => {
      //       event.target.complete();
      //     }, 2000);
      //   }


      _createClass(SearchPage, [{
        key: "categoryChanged",
        value: function categoryChanged(ev) {
          this.categories = ev.detail.value;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          setTimeout(function () {
            _this5.data = {};
          }, 1000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchData();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "searchData",
        value: function searchData() {
          var _this6 = this;

          this.commonService.presentLoader();
          this.searchservice.listCountry().subscribe(function (data) {
            console.log(data);
            _this6.selectedPersonList = data.topTenUserList;
            _this6.searchPersonList = data.topTenUserList;

            _this6.searchservice.searchPeople({
              userListedId: data.topTenID
            }).subscribe(function (peoples) {
              _this6.commonService.dismissLoader();

              _this6.sortedPersonList = peoples.userList.sort(function (a, b) {
                return a.user_name > b.user_name ? 1 : -1;
              });

              _this6.sortedPersonList.sort(function (a, b) {
                return a.user_name.localeCompare(b.user_name);
              });

              var i = 1;
              var ad = {
                'advertisment': 'Advertisamentgdkfgklfd'
              };

              var grouped = _this6.sortedPersonList.reduce(function (groups, contact) {
                var letter = contact.user_name.charAt(0).toUpperCase();
                groups[letter] = groups[letter] || [];
                groups[letter].push(contact); //   if ((i % 5 == 0) && (i !== 1)) {
                //       groups[letter].push(ad);
                //   }

                i++;
                return groups;
              }, function (err) {
                _this6.commonService.dismissLoader();
              });

              _this6.result = Object.keys(grouped).map(function (key) {
                return {
                  key: key,
                  contacts: grouped[key]
                };
              });
            });
          }, function (err) {
            _this6.commonService.dismissLoader();

            console.log(err);
          });
        }
      }, {
        key: "tabChange",
        value: function tabChange(ev) {
          this.search = ev.detail.value;
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(peopleName) {
          var _this7 = this;

          var searchTerm = peopleName.srcElement.value;
          this.personList = [];

          if (!searchTerm) {
            this.searchPersonList = this.selectedPersonList;
            this.newSearchPersonList = false;
            this.searchData();
            return;
          }

          this.searchservice.searchQuery({
            "searchQuery": searchTerm
          }).subscribe(function (search) {
            _this7.newSearchPersonList = search.searchList;
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this8 = this;

          this.searchservice.listCountry().subscribe(function (data) {
            _this8.selectedPersonList = data.topTenUserList;
            _this8.searchPersonList = data.topTenUserList;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.page.scss */
      "./src/app/search/search.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"], _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])], SearchPage);
    /***/
  }
}]);
//# sourceMappingURL=search-search-module-es5.js.map