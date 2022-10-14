function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sponsors-all-list-all-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/all-list/all-list.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/all-list/all-list.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSponsorsAllListAllListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click)=\"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Sponsor</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-segment class=\"top-segment\" (ionChange)=\"tabChange($event)\">\r\n    <ion-segment-button value=\"list\" checked>List</ion-segment-button>\r\n    <ion-segment-button value=\"chat\"><div class=\"chatBadge\"><span>Chat </span> <ion-badge style=\"margin-left: 5px;\" color=\"secondary\" slot=\"end\" *ngIf=\"chatCount > 0\"> {{chatCount}}</ion-badge></div></ion-segment-button>\r\n  </ion-segment>\r\n    <div *ngIf=\"showList\">\r\n        <ion-card *ngFor=\"let program of programList; let i = index;\" class=\"ion-no-margin\" [ngClass]=\"customClass == i ? 'active':'deactive'\">\r\n          <ion-item lines=\"none\">\r\n            <!-- <ion-avatar slot=\"start\" (click)=\"showSponsersContent(program)\">\r\n              <img src=\"{{url}}{{program?.img_arr[0]}}\" *ngIf=\"program?.image_path\">\r\n              <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!program?.image_path\">\r\n            </ion-avatar> -->\r\n            <ion-label  (click)=\"showSponsersContent(program)\">\r\n              <h3 class=\"list-person\">Ad Compony Name: {{program?.company_name}}</h3>\r\n              <span class=\"list-name d-block\">Ad Compony Link : {{program?.ad_link}}</span>\r\n              <span class=\"list-name\">$ {{program?.amount}}</span> \r\n            </ion-label>\r\n            <div class=\"action-links\" slot=\"end\">\r\n              <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\" (click)=\"expand(i)\" >\r\n              </ion-icon> \r\n            </div> \r\n          </ion-item>\r\n            <app-expandable expandHeight=\"300px\" class=\"timeline-block\" [expanded]=\"program.expanded\">\r\n              <div class=\"contentList\">\r\n                <ion-label class=\"list-name d-block\" *ngFor=\"let progdata of programData; let j = index;\">                  \r\n                    <p class=\"mb-10\" [routerLink]=\"['/program-details',progdata.id]\" *ngIf=\"progdata.id == program.program_id\"><span>Program Name : </span>{{progdata?.title}}</p>\r\n                </ion-label>\r\n                <p class=\"list-name d-block\"><span>Ad Content : </span>{{program?.ad_text}}</p>\r\n                <p class=\"list-name d-block\"><span>Note : </span>{{program?.ad_description}}</p>\r\n                <p class=\"list-name d-block\"><span>Ad type : </span>{{program?.media_type}}</p>\r\n                <p class=\"list-name d-block\"><span>Offered at : </span>{{program?.created_at | date:'medium'}}</p>\r\n              </div>\r\n          </app-expandable>  \r\n        </ion-card>\r\n        <div class=\"no-data\" *ngIf = \"programList.length < 1\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Recode Found</p>\r\n        </div>\r\n    </div>\r\n   \r\n    <div *ngIf=\"showChat\">\r\n      <ion-list lines=\"none\" class=\"item-list ion-no-padding\" >\r\n        <div class=\"no-data\" *ngIf = \"sponcersChatEmpty\">\r\n          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n          <p>No Recode Found</p>\r\n        </div>       \r\n        <ion-list-header *ngIf =\"sponcersChat\">\r\n          Recent Conversations\r\n        </ion-list-header>  \r\n        <ion-card *ngFor=\"let sponcer of sponcers\" (click)=\"unread(sponcer)\" class=\"ion-no-margin\">      \r\n          <ion-item class=\"item-card\">    \r\n            <!-- <ion-item  (click)=\"unread(1)\"> -->\r\n            <!-- <ion-avatar slot=\"start\">\r\n              <img src=\"./../../../assets/images/user.jpg\">\r\n            </ion-avatar> -->\r\n            <ion-label>\r\n              <h3 class=\"list-person\">{{sponcer.company_name}}</h3>        \r\n              <span class=\"list-name\">{{sponcer.ad_description}}</span>\r\n            </ion-label>\r\n            <ion-badge color=\"secondary\" slot=\"end\" *ngIf=\"sponcer.chat_count > 0\">{{sponcer.chat_count}}</ion-badge>\r\n          </ion-item>\r\n          </ion-card>\r\n          </ion-list>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/sponsors/all-list/all-list-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/sponsors/all-list/all-list-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: AllListPageRoutingModule */

  /***/
  function srcAppSponsorsAllListAllListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllListPageRoutingModule", function () {
      return AllListPageRoutingModule;
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


    var _all_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-list.page */
    "./src/app/sponsors/all-list/all-list.page.ts");

    var routes = [{
      path: '',
      component: _all_list_page__WEBPACK_IMPORTED_MODULE_3__["AllListPage"]
    }];

    var AllListPageRoutingModule = function AllListPageRoutingModule() {
      _classCallCheck(this, AllListPageRoutingModule);
    };

    AllListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AllListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sponsors/all-list/all-list.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/sponsors/all-list/all-list.module.ts ***!
    \******************************************************/

  /*! exports provided: AllListPageModule */

  /***/
  function srcAppSponsorsAllListAllListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllListPageModule", function () {
      return AllListPageModule;
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


    var _all_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./all-list-routing.module */
    "./src/app/sponsors/all-list/all-list-routing.module.ts");
    /* harmony import */


    var _all_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-list.page */
    "./src/app/sponsors/all-list/all-list.page.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../profile/components.modules */
    "./src/app/profile/components.modules.ts");

    var AllListPageModule = function AllListPageModule() {
      _classCallCheck(this, AllListPageModule);
    };

    AllListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"], _all_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllListPageRoutingModule"]],
      declarations: [_all_list_page__WEBPACK_IMPORTED_MODULE_6__["AllListPage"]]
    })], AllListPageModule);
    /***/
  },

  /***/
  "./src/app/sponsors/all-list/all-list.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/sponsors/all-list/all-list.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSponsorsAllListAllListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 4px solid #f7f7f7; }\n  ion-card ion-item {\n    border-bottom: 1px solid #f7f7f7; }\n  ion-card ion-item .action-links ion-icon {\n      color: #27a69a;\n      transition: all 0.2s; }\n  ion-card ion-item .action-links ion-icon.active {\n      transform: rotate(180deg); }\n  ion-card.active ion-item .action-links ion-icon {\n  transform: rotate(180deg); }\n  .contentList p {\n  color: #999; }\n  .contentList {\n  background: #f7f7f7; }\n  .contentList ion-label p {\n    color: #27a69a; }\n  .no-data {\n  height: calc(100vh - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNvcnMvYWxsLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHNwb25zb3JzXFxhbGwtbGlzdFxcYWxsLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsZ0NBQWdDLEVBQUE7RUFBM0U7SUFDYSxnQ0FBZ0MsRUFBQTtFQUQ3QztNQUdxQixjQUFjO01BQUMsb0JBQW9CLEVBQUE7RUFIeEQ7TUFJNEIseUJBQXlCLEVBQUE7RUFJckQ7RUFHcUIseUJBQXlCLEVBQUE7RUFLOUM7RUFBZSxXQUFXLEVBQUE7RUFDMUI7RUFBYSxtQkFBbUIsRUFBQTtFQUFoQztJQUVVLGNBQWMsRUFBQTtFQUd4QjtFQUNJLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3BvbnNvcnMvYWxsLWxpc3QvYWxsLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7Ym9yZGVyLXJhZGl1czogMDtib3gtc2hhZG93OiBub25lO2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgaW9uLWl0ZW17Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICAgICAgLmFjdGlvbi1saW5rc3tcclxuICAgICAgICAgICAgaW9uLWljb257Y29sb3I6ICMyN2E2OWE7dHJhbnNpdGlvbjogYWxsIDAuMnM7fVxyXG4gICAgICAgICAgICBpb24taWNvbi5hY3RpdmV7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1jYXJkLmFjdGl2ZXtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC5hY3Rpb24tbGlua3N7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnRMaXN0IHB7Y29sb3I6ICM5OTk7fVxyXG4uY29udGVudExpc3R7YmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBwe2NvbG9yOiAjMjdhNjlhO31cclxuICAgIH1cclxufVxyXG4ubm8tZGF0YXtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sponsors/all-list/all-list.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/sponsors/all-list/all-list.page.ts ***!
    \****************************************************/

  /*! exports provided: AllListPage */

  /***/
  function srcAppSponsorsAllListAllListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllListPage", function () {
      return AllListPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _program_ad_details_adv_info_adv_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../program/ad-details/adv-info/adv-info.component */
    "./src/app/program/ad-details/adv-info/adv-info.component.ts");
    /* harmony import */


    var _program_ad_details_sponser_comment_sponser_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../program/ad-details/sponser-comment/sponser-comment.component */
    "./src/app/program/ad-details/sponser-comment/sponser-comment.component.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/notification.service */
    "./src/app/services/notification.service.ts");

    var AllListPage = /*#__PURE__*/function () {
      function AllListPage(notification, programService, navCtrl, commonService) {
        _classCallCheck(this, AllListPage);

        this.notification = notification;
        this.programService = programService;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.programList = [];
        this.programData = [];
        this.showList = true;
        this.showChat = false;
        this.sponcersChatEmpty = false;
        this.sponcersChat = false;
        this.customClass = 0;
        this.chatCount = 0;
      }

      _createClass(AllListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.commonService.presentLoader();
          this.commonService.presentToast('Fetching Sponsors'); //------ sponcer list ----------//  

          this.programService.getSponserList(null).subscribe(function (data) {
            console.log(data.data);
            _this.programList = data.data; // data.data.forEach(element => { 
            //   this.commonService.dismissLoader();
            //   if(element.get_adv.length > 0)
            //   {
            //     element.get_adv.forEach(el => {
            //       el.expanded = false;
            //       this.programList.push(el);
            //     });
            //   }
            //   if(element.get_prog.length > 0)
            //   {
            //     element.get_prog.forEach(al => {
            //       al.expanded = false;
            //       this.programData.push(al);
            //     });
            //   }
            // },
            // error =>{
            //   this.commonService.dismissLoader();
            //   this.commonService.presentToast('Failed to fetch.'+error);
            // }); 
          }); //------chat list---------//
          // this.notification.geUnreadSponcerChat().subscribe(
          //   (data: any) => {
          //     this.sponcerCount = data.count.sponcer_chat_count;
          //   });

          this.notification.getSponcerChatDetails().subscribe(function (data) {
            _this.commonService.dismissLoader();

            if (data.slist.length > 0) {
              _this.sponcersChat = true;
              _this.sponcers = data.slist;

              _this.sponcers.forEach(function (element) {
                _this.chatCount = parseInt(_this.chatCount) + parseInt(element.chat_count);
              });
            } else {
              _this.sponcers;
              _this.sponcersChatEmpty = true;
            }
          });
        }
      }, {
        key: "unread",
        value: function unread(event) {
          this.commonService.presentModal(_program_ad_details_sponser_comment_sponser_comment_component__WEBPACK_IMPORTED_MODULE_6__["SponserCommentComponent"], 'fullModal', {
            'adDetails': event
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "expand",
        value: function expand(index) {
          this.customClass = index;
          this.programList.forEach(function (el, i) {
            if (index == i) {
              el.expanded = true;
            } else {
              el.expanded = false;
            }
          });
        }
      }, {
        key: "showSponsersContent",
        value: function showSponsersContent(event) {
          this.commonService.presentModal(_program_ad_details_adv_info_adv_info_component__WEBPACK_IMPORTED_MODULE_5__["AdvInfoComponent"], 'fullModal', {
            'adDetails': event
          });
        }
      }, {
        key: "tabChange",
        value: function tabChange(ev) {
          if (ev.detail.value == 'chat') {
            this.showList = false;
            this.showChat = true;
          } else {
            this.showList = true;
            this.showChat = false;
          }
        }
      }]);

      return AllListPage;
    }();

    AllListPage.ctorParameters = function () {
      return [{
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    AllListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/all-list/all-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-list.page.scss */
      "./src/app/sponsors/all-list/all-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"], _services_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])], AllListPage);
    /***/
  }
}]);
//# sourceMappingURL=sponsors-all-list-all-list-module-es5.js.map