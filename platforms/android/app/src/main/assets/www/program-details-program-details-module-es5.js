function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-details-program-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/program-details/program-details.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/program-details/program-details.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddProgramProgramDetailsProgramDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Edit</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" [routerLink]=\"['/tabs/program']\">\r\n      <ion-label class=\"text-green\">Done</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-list lines=\"none\" class=\"item-list ion-no-padding\" *ngFor=\"let item of programData\">\r\n    <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n        {{item?.convertedTime | date :'medium'}}\r\n      <div>\r\n        <ion-icon ios=\"ios-construct\" md=\"md-construct\" (click)=\"addEquipments2(1,item)\"></ion-icon>\r\n        <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,item)\"></ion-icon>\r\n        <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item)\"></ion-icon>\r\n        <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon>\r\n      </div>\r\n    </ion-list-header>\r\n    <ion-item class=\"ion-no-padding\">\r\n      <ion-list class=\"ion-no-padding\">\r\n        <ion-list-header><h6>  {{item?.title}}</h6></ion-list-header>\r\n        <ion-item>\r\n          <ion-label>Equipments :</ion-label>\r\n          <div class=\"users-list\" *ngIf=\"item?.equipArray;else no_equipment\">         \r\n            <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of item?.equipArray\"/>\r\n           \r\n            <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n          </div>\r\n          <ng-template #no_equipment>No Equipment Selected</ng-template>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Nutritions :</ion-label>\r\n          <div class=\"users-list\" *ngIf=\"item?.nutriArray;else no_nutrition\">         \r\n            <img src=\"../../assets/images/demo2.jpg\"  *ngFor=\"let item of item?.nutriArray\" />\r\n          </div>\r\n          <ng-template #no_nutrition>No Nutrition Selected</ng-template>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Videos :</ion-label>\r\n          <div class=\"users-list\" *ngIf=\"item?.video_program;else no_videos\">         \r\n            <img src=\"../../assets/images/demo3.jpg\" *ngFor=\"let item of videoArray\" />\r\n            <img src=\"../../assets/images/demo2.jpg\"   />\r\n          </div>\r\n          <ng-template #no_videos>No videos Selected</ng-template>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,item?.id)\" value=\"{{item?.description}}\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-list>    \r\n    </ion-item>\r\n \r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-program/program-details/program-details-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/add-program/program-details/program-details-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ProgramDetailsPageRoutingModule */

  /***/
  function srcAppAddProgramProgramDetailsProgramDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramDetailsPageRoutingModule", function () {
      return ProgramDetailsPageRoutingModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _program_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./program-details.page */
    "./src/app/add-program/program-details/program-details.page.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../profile/components.modules */
    "./src/app/profile/components.modules.ts");

    var routes = [{
      path: '',
      component: _program_details_page__WEBPACK_IMPORTED_MODULE_5__["ProgramDetailsPage"]
    }];

    var ProgramDetailsPageRoutingModule = function ProgramDetailsPageRoutingModule() {
      _classCallCheck(this, ProgramDetailsPageRoutingModule);
    };

    ProgramDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_6__["ComponentModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProgramDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-program/program-details/program-details.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/add-program/program-details/program-details.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ProgramDetailsPageModule */

  /***/
  function srcAppAddProgramProgramDetailsProgramDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramDetailsPageModule", function () {
      return ProgramDetailsPageModule;
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


    var _program_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./program-details-routing.module */
    "./src/app/add-program/program-details/program-details-routing.module.ts");
    /* harmony import */


    var _program_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./program-details.page */
    "./src/app/add-program/program-details/program-details.page.ts");

    var ProgramDetailsPageModule = function ProgramDetailsPageModule() {
      _classCallCheck(this, ProgramDetailsPageModule);
    };

    ProgramDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _program_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramDetailsPageRoutingModule"]],
      declarations: [_program_details_page__WEBPACK_IMPORTED_MODULE_6__["ProgramDetailsPage"]]
    })], ProgramDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/add-program/program-details/program-details.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/add-program/program-details/program-details.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddProgramProgramDetailsProgramDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-list ion-list-header ion-icon {\n  font-size: 1.15rem; }\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0; }\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list img:first-child {\n  margin-left: 0; }\n\n.users-list ion-label {\n  width: 100px; }\n\n.view-all {\n  width: 36px;\n  height: 36px;\n  max-width: 36px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px; }\n\n.program-card {\n  width: 100%; }\n\nion-item ion-list {\n  width: 100%; }\n\n.item-list > ion-item {\n  --inner-padding-end: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2dyYW0vcHJvZ3JhbS1kZXRhaWxzL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxhZGQtcHJvZ3JhbVxccHJvZ3JhbS1kZXRhaWxzXFxwcm9ncmFtLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW9DLGtCQUFrQixFQUFBOztBQUV0RDtFQUFZLGtCQUFhO0VBQU0sYUFBYTtFQUFDLG1CQUFtQjtFQUFDLGFBQWEsRUFBQTs7QUFDOUU7RUFBZ0IsV0FBVztFQUFDLFlBQVk7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ2hHO0VBQTRCLGNBQWMsRUFBQTs7QUFDMUM7RUFBc0IsWUFBWSxFQUFBOztBQUNsQztFQUFVLFdBQVU7RUFBQyxZQUFXO0VBQUMsZUFBZTtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQjtFQUFDLGtCQUFpQjtFQUFDLGFBQVk7RUFBQyx1QkFBc0I7RUFBQyxtQkFBa0I7RUFBQyxTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNMO0VBQWMsV0FBVyxFQUFBOztBQUN6QjtFQUFrQixXQUFXLEVBQUE7O0FBQzdCO0VBQXNCLHNCQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLXByb2dyYW0vcHJvZ3JhbS1kZXRhaWxzL3Byb2dyYW0tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1saXN0IGlvbi1saXN0LWhlYWRlciBpb24taWNvbntmb250LXNpemU6IDEuMTVyZW07fVxyXG5cclxuLnVzZXJzLWxpc3R7LS1taW4taGVpZ2h0OiBhdXRvO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW46IDZweCAwO31cclxuLnVzZXJzLWxpc3QgaW1ne3dpZHRoOiAzNnB4O2hlaWdodDogMzZweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLnVzZXJzLWxpc3QgaW1nOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnVzZXJzLWxpc3QgaW9uLWxhYmVse3dpZHRoOiAxMDBweDt9XHJcbi52aWV3LWFsbHt3aWR0aDozNnB4O2hlaWdodDozNnB4O21heC13aWR0aDogMzZweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmMWYwZjA7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjogMDttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG5cclxuLnByb2dyYW0tY2FyZHt3aWR0aDogMTAwJTt9XHJcbmlvbi1pdGVtIGlvbi1saXN0e3dpZHRoOiAxMDAlO31cclxuLml0ZW0tbGlzdCA+IGlvbi1pdGVtey0taW5uZXItcGFkZGluZy1lbmQ6IDA7fSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-program/program-details/program-details.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/add-program/program-details/program-details.page.ts ***!
    \*********************************************************************/

  /*! exports provided: ProgramDetailsPage */

  /***/
  function srcAppAddProgramProgramDetailsProgramDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramDetailsPage", function () {
      return ProgramDetailsPage;
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


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../add-equipments/add-equipments.component */
    "./src/app/add-program/add-equipments/add-equipments.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user-list/user-list.component */
    "./src/app/add-program/user-list/user-list.component.ts");
    /* harmony import */


    var _videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../videos-thumb-list/videos-thumb-list.component */
    "./src/app/add-program/videos-thumb-list/videos-thumb-list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");

    var ProgramDetailsPage = /*#__PURE__*/function () {
      function ProgramDetailsPage(navCtrl, commonService, actRoute, localNotifications, modalCtrl, programService) {
        _classCallCheck(this, ProgramDetailsPage);

        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.actRoute = actRoute;
        this.localNotifications = localNotifications;
        this.modalCtrl = modalCtrl;
        this.programService = programService;
      }

      _createClass(ProgramDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRoute.paramMap.subscribe(function (params) {
            _this.programId = params.get('programId');
            console.log(_this.programId);
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.commonService.presentLoader();
          this.programService.getProgramById({
            'parentId': this.programId
          }).subscribe(function (data) {
            console.log(data);

            _this2.commonService.dismissLoader();

            _this2.programData = data.cloneList;

            _this2.programData.filter(function (el) {
              var prog_date = new Date(el.program_date + 'Z');

              _this2.localNotifications.schedule({
                id: el.id,
                text: "You have an upcoming scheduled program '" + el.title + "' at \n " + prog_date,
                trigger: {
                  at: new Date(prog_date.getTime() - 60 * 60 * 500)
                },
                data: {
                  secret: 'secret'
                },
                lockscreen: true,
                vibrate: true,
                silent: false,
                foreground: true
              });

              el.convertedTime = new Date(el.program_date + 'Z');

              if (el.nutrition_id) {
                el.nutriArray = el.nutrition_id.split(',');
              }

              if (el.equipments) {
                el.equipArray = el.equipments.split(',');
              }

              if (el.video_program) {
                el.videoArray = el.video_program.split(',');
              }

              return el;
            });
          }, function (err) {
            _this2.commonService.dismissLoader();
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "addEquipments2",
        value: function addEquipments2(event, item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_4__["AddEquipmentsComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        "programData": item,
                        "modelOpen": event
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (d.data) {
                        _this3.ionViewWillEnter();
                      }
                    });
                    _context.next = 6;
                    return modal.present();

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
        key: "userList",
        value: function userList() {
          this.commonService.presentModal(_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], 'halfModal', null);
        }
      }, {
        key: "addVideo",
        value: function addVideo(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_6__["VideosThumbListComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        'programDetail': event
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (d.data) {
                        console.log('asasd');

                        _this4.ionViewWillEnter();
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "detailsUpdate",
        value: function detailsUpdate($event, programId) {
          console.log(programId);
          $event.detail.programId = programId;
          this.programService.updateDescription($event.detail).subscribe(function (data) {});
        }
      }]);

      return ProgramDetailsPage;
    }();

    ProgramDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"]
      }];
    };

    ProgramDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-program-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./program-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/program-details/program-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./program-details.page.scss */
      "./src/app/add-program/program-details/program-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"]])], ProgramDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=program-details-program-details-module-es5.js.map