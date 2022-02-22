function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upcoming-upcoming-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming/upcoming.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming/upcoming.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpcomingUpcomingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Upcoming Program</ion-label>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-no-margin upcomingCard upcoming-card\" *ngFor=\"let upcoming of upcomingList; let i=index;\">\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{url}}{{upcoming?.img_arr[0]}}\" *ngIf=\"upcomingList[i]?.image_path\">\r\n        <!-- <img src=\"{{profile_url}}{{upcoming?.program_user?.bios?.profile_pic}}\" *ngIf=\"upcoming?.program_user?.bios?.profile_pic\"> -->\r\n        <img  src=\"../../assets/images/loading.jpg\" *ngIf=\"!upcomingList[i]?.image_path\">\r\n      </ion-avatar>\r\n      <ion-label [routerLink]=\"userData?.id ==upcoming?.user_id ? ['/program-details/',upcoming.id] : ['/program-view/',upcoming.id]\">\r\n        <h3 class=\"list-person\">{{upcoming?.title}}</h3>\r\n        <span class=\"list-name d-block\">{{upcoming?.type_id}}</span>\r\n        <span class=\"list-name d-block\">Created by:{{upcoming?.program_user?.user_name}} {{upcoming?.convertedTime | date:'medium'}}</span>\r\n        <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\"> <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span>\r\n        <!-- <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\">Countdown: <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span> -->\r\n        <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd==0\"> <b> L I V E</b></span>\r\n        <!-- <countdown [config]=\"{leftTime: 30}\"></countdown> -->\r\n      </ion-label>\r\n      <div class=\"action-links\" slot=\"end\" *ngIf=\"upcoming?.nutrition_id\">\r\n        <ion-icon (click)=\"nutritionModal(upcoming)\" ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n  </ion-card>\r\n  <!--------------- S K E L E T O N ------------>\r\n  <ion-list lines=\"none\" *ngIf=\"!upcomingList\">      \r\n    <ion-item *ngFor=\"let skeleton of [].constructor(20)\" class=\"item-card\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3 class=\"list-person\"><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n        <span class=\"list-name\"><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></span>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!---------------E n d s  S K E L E T O N ------------>\r\n  <div class=\"no-data\" *ngIf=\"noData\" style=\"height: calc(100vh - 175px)\">\r\n    <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n    <p>No upcoming program for next 24 Hrs.</p>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/upcoming/upcoming-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/upcoming/upcoming-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: UpcomingPageRoutingModule */

  /***/
  function srcAppUpcomingUpcomingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpcomingPageRoutingModule", function () {
      return UpcomingPageRoutingModule;
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


    var _upcoming_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upcoming.page */
    "./src/app/upcoming/upcoming.page.ts");

    var routes = [{
      path: '',
      component: _upcoming_page__WEBPACK_IMPORTED_MODULE_3__["UpcomingPage"]
    }];

    var UpcomingPageRoutingModule = function UpcomingPageRoutingModule() {
      _classCallCheck(this, UpcomingPageRoutingModule);
    };

    UpcomingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpcomingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/upcoming/upcoming.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/upcoming/upcoming.module.ts ***!
    \*********************************************/

  /*! exports provided: UpcomingPageModule */

  /***/
  function srcAppUpcomingUpcomingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpcomingPageModule", function () {
      return UpcomingPageModule;
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


    var _upcoming_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./upcoming-routing.module */
    "./src/app/upcoming/upcoming-routing.module.ts");
    /* harmony import */


    var _upcoming_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./upcoming.page */
    "./src/app/upcoming/upcoming.page.ts");

    var UpcomingPageModule = function UpcomingPageModule() {
      _classCallCheck(this, UpcomingPageModule);
    };

    UpcomingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _upcoming_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpcomingPageRoutingModule"]],
      declarations: [_upcoming_page__WEBPACK_IMPORTED_MODULE_6__["UpcomingPage"]]
    })], UpcomingPageModule);
    /***/
  },

  /***/
  "./src/app/upcoming/upcoming.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/upcoming/upcoming.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpcomingUpcomingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".upcoming-card {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 15px;\n  margin-top: 20px; }\n\nspan.list-name.d-block {\n  margin-bottom: 5px; }\n\n.action-links {\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBjb21pbmcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHVwY29taW5nXFx1cGNvbWluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGNvbWluZy91cGNvbWluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBjb21pbmctY2FyZHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbnNwYW4ubGlzdC1uYW1lLmQtYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5hY3Rpb24tbGlua3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/upcoming/upcoming.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/upcoming/upcoming.page.ts ***!
    \*******************************************/

  /*! exports provided: UpcomingPage */

  /***/
  function srcAppUpcomingUpcomingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpcomingPage", function () {
      return UpcomingPage;
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


    var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UpcomingPage = /*#__PURE__*/function () {
      function UpcomingPage(commonService, actRoute, programService) {
        var _this = this;

        _classCallCheck(this, UpcomingPage);

        this.commonService = commonService;
        this.actRoute = actRoute;
        this.programService = programService;
        this.profile_url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
        this.actRoute.paramMap.subscribe(function (params) {
          if (params.get('userData')) {
            _this.consultID = params.get('userData');
          }

          console.log("this.consultID" + _this.consultID);
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        console.log("this.userData :" + this.userData);
      }

      _createClass(UpcomingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.consultID);

          if (this.consultID) {
            this.getConsultProg(this.consultID);
          } else {
            this.getMyprog();
          }
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal(data) {
          this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__["NutritionModalComponent"], 'fullModal', {
            'data': data
          });
        }
      }, {
        key: "getMyprog",
        value: function getMyprog() {
          var _this2 = this;

          this.programService.getUpcomingPrograms(null).subscribe(function (data) {
            if (data.programList.length < 1) {
              _this2.noData = true;
            }

            _this2.upcomingList = _this2.getCounter(data.programList);
            _this2.upcomingList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
          });
        }
      }, {
        key: "getConsultProg",
        value: function getConsultProg(id) {
          var _this3 = this;

          this.programService.getConsultPrograms({
            'consultId': id
          }).subscribe(function (data) {
            console.log(data);

            if (data.data.length < 1) {
              _this3.noData = true;
            }

            _this3.upcomingList = _this3.getCounter(data.data);
            _this3.upcomingList = data.data.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
          });
        }
      }, {
        key: "getCounter",
        value: function getCounter(elementArr) {
          elementArr.filter(function (el) {
            el.convertedTime = new Date(el.program_date + 'Z');
            var a = new Date(el.program_date + 'Z');
            var b = new Date();
            var c;

            if (a > b) {
              c = Math.abs(a - b) / 1000;
            } else {
              c = 0;
              el.live = true;
            }

            el.cd = c;
            setInterval(function () {
              if (parseInt(el.cd) > 0) el.cd = parseInt(el.cd) - 1;
              el.hh = ~~(el.cd / (60 * 60));
              el.mm = ~~(el.cd % 3600 / 60);
              el.ss = el.cd % 3600 % 60;
            }, 1000);
            return el;
          });
          return elementArr;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return UpcomingPage;
    }();

    UpcomingPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"]
      }];
    };

    UpcomingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upcoming',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upcoming.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming/upcoming.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upcoming.page.scss */
      "./src/app/upcoming/upcoming.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../profile/my-profile/my-profile.page.scss */
      "./src/app/profile/my-profile/my-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"]])], UpcomingPage);
    /***/
  }
}]);
//# sourceMappingURL=upcoming-upcoming-module-es5.js.map