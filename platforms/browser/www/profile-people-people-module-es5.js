function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-people-people-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/people/people.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/people/people.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilePeoplePeoplePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>People</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-segment class=\"top-segment\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"followers\" checked>({{followers?.length}}) Followers</ion-segment-button>\r\n    <ion-segment-button value=\"following\">({{followings?.length}}) Followings</ion-segment-button>\r\n  </ion-segment>\r\n  <div [ngSwitch]=\"people_tabs\">\r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'followers'\" class=\"ion-no-padding\"> \r\n      <div *ngIf='followers?.length > 0'>\r\n      <ion-toolbar class=\"searchbar\">\r\n        <ion-searchbar [(ngModel)]=\"followerSearchTerm\"></ion-searchbar>\r\n      </ion-toolbar>\r\n      <ion-item *ngFor=\"let peoplelist of followerFilteredUsers\" class=\"item-card\">\r\n          <ion-avatar slot=\"start\" *ngIf=\"peoplelist.following_user.bios.profile_pic\" [routerLink]=\"peoplelist.following_user.user_type==0?['/tabs/user-profile-view/',peoplelist.following_uid] : ['/tabs/consultant-profile-view/',peoplelist.following_uid]\">\r\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{peoplelist.following_user.bios.profile_pic}}\">\r\n          </ion-avatar>\r\n          <ion-avatar slot=\"start\" *ngIf=\"!peoplelist.following_user.bios.profile_pic\" [routerLink]=\"peoplelist.following_user.user_type==0?['/tabs/user-profile-view/',peoplelist.following_uid] : ['/tabs/consultant-profile-view/',peoplelist.following_uid]\">\r\n            <img src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label [routerLink]=\"peoplelist.following_user.user_type==0?['/tabs/user-profile-view/',peoplelist.following_uid] : ['/tabs/consultant-profile-view/',peoplelist.following_uid]\">\r\n            <h3 class=\"list-person\">{{peoplelist.following_user.user_name}}</h3>\r\n            <span class=\"list-name\">following you</span>\r\n          </ion-label>\r\n          <ion-button size=\"small\" slot=\"end\" fill=\"outline\" id=\"{{peoplelist.following_uid}}\" (click)=\"followUpPeople(peoplelist.following_uid, peoplelist?.following_user?.follow ? 'true' : 'false')\" color=\"{{peoplelist?.following_user?.color}}\" [ngClass]='peoplelist?.following_user?.class'>{{peoplelist?.following_user?.follow == true? 'FOLLOWING': 'FOLLOW BACK'}}</ion-button>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"no-data\" *ngIf='followers?.length == 0'>\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No Data Found</p>\r\n    </div>\r\n    </ion-list>\r\n    \r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'following'\" class=\"ion-no-padding\">\r\n      <div *ngIf='followings?.length > 0'>\r\n      <ion-toolbar class=\"searchbar\">\r\n        <ion-searchbar [(ngModel)]=\"followingSearchTerm\"></ion-searchbar>\r\n      </ion-toolbar>\r\n      <ion-item *ngFor=\"let followinglist of followingFilteredUsers\" class=\"item-card\">\r\n        <ion-avatar slot=\"start\" *ngIf=\"followinglist.follower_user.bios.profile_pic\" [routerLink]=\"followinglist.follower_user.user_type==0?['/tabs/user-profile-view/',followinglist.followers_uid] : ['/tabs/consultant-profile-view/',followinglist.followers_uid]\">\r\n          <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{followinglist.follower_user.bios.profile_pic}}\">\r\n        </ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"!followinglist.follower_user.bios.profile_pic\" [routerLink]=\"followinglist.follower_user.user_type==0?['/tabs/user-profile-view/',followinglist.followers_uid] : ['/tabs/consultant-profile-view/',followinglist.followers_uid]\">\r\n          <img src=\"../../assets/images/user.jpg\">\r\n        </ion-avatar>        \r\n        <ion-label [routerLink]=\"followinglist.follower_user.user_type==0?['/tabs/user-profile-view/',followinglist.followers_uid] : ['/tabs/consultant-profile-view/',followinglist.followers_uid]\">\r\n          <h3 class=\"list-person\">{{followinglist.follower_user.user_name}} </h3>\r\n          <p>Following</p>\r\n        </ion-label>\r\n        <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"unFollowPeople(followinglist?.follower_user?.btnName,followinglist.followers_uid, followinglist?.follower_user?.follow ? 'true' : 'false')\"  id=\"{{followinglist.followers_uid}}\" color=\"{{followinglist?.follower_user?.color}}\" [ngClass]=\"followinglist?.follower_user?.class\">{{followinglist?.follower_user?.btnName}}</ion-button>\r\n     </ion-item>\r\n    </div>\r\n    <div class=\"no-data\" *ngIf='followings?.length == 0'>\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No Data Found</p>\r\n    </div>\r\n    </ion-list> \r\n\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/people/people-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/profile/people/people-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PeoplePageRoutingModule */

  /***/
  function srcAppProfilePeoplePeopleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePageRoutingModule", function () {
      return PeoplePageRoutingModule;
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


    var _people_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./people.page */
    "./src/app/profile/people/people.page.ts");

    var routes = [{
      path: '',
      component: _people_page__WEBPACK_IMPORTED_MODULE_3__["PeoplePage"],
      children: [{
        path: 'tabFollowers',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab-followers-tab-followers-module */
            "tab-followers-tab-followers-module").then(__webpack_require__.bind(null,
            /*! ../tab-followers/tab-followers.module */
            "./src/app/profile/tab-followers/tab-followers.module.ts")).then(function (m) {
              return m.TabFollowersPageModule;
            });
          }
        }]
      }, {
        path: 'tabFollowings',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab-followings-tab-followings-module */
            "tab-followings-tab-followings-module").then(__webpack_require__.bind(null,
            /*! ../tab-followings/tab-followings.module */
            "./src/app/profile/tab-followings/tab-followings.module.ts")).then(function (m) {
              return m.TabFollowingsPageModule;
            });
          }
        }]
      }]
    }];

    var PeoplePageRoutingModule = function PeoplePageRoutingModule() {
      _classCallCheck(this, PeoplePageRoutingModule);
    };

    PeoplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PeoplePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/people/people.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/profile/people/people.module.ts ***!
    \*************************************************/

  /*! exports provided: PeoplePageModule */

  /***/
  function srcAppProfilePeoplePeopleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePageModule", function () {
      return PeoplePageModule;
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


    var _people_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./people-routing.module */
    "./src/app/profile/people/people-routing.module.ts");
    /* harmony import */


    var _people_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./people.page */
    "./src/app/profile/people/people.page.ts");

    var PeoplePageModule = function PeoplePageModule() {
      _classCallCheck(this, PeoplePageModule);
    };

    PeoplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _people_routing_module__WEBPACK_IMPORTED_MODULE_5__["PeoplePageRoutingModule"]],
      declarations: [_people_page__WEBPACK_IMPORTED_MODULE_6__["PeoplePage"]]
    })], PeoplePageModule);
    /***/
  },

  /***/
  "./src/app/profile/people/people.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/profile/people/people.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilePeoplePeoplePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --border-radius: 4px; }\n\nion-button {\n  --border-width: 1px; }\n\n.ios.main_content {\n  --padding-top: 0px; }\n\n.no-data {\n  height: calc(100vh - 150px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wZW9wbGUvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxwcm9maWxlXFxwZW9wbGVcXHBlb3BsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFBUyxrQkFBa0I7RUFBQyxrQkFBa0I7RUFBQyxvQkFBZ0IsRUFBQTs7QUFDL0Q7RUFBVyxtQkFBZSxFQUFBOztBQUMxQjtFQUFrQixrQkFBYyxFQUFBOztBQUNoQztFQUFTLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wZW9wbGUvcGVvcGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10YWItYmFyey0tYmFja2dyb3VuZDogI2Y3ZjdmNztoZWlnaHQ6IDQ4cHg7fVxyXG4vLyBpb24tdGFiLWJ1dHRvbnt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6ICM1NTU7fVxyXG4vLyBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWR7Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyN2E2OWE7Y29sb3I6ICMyN2E2OWE7fVxyXG4vLyBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO31cclxuaW9uLWl0ZW17bWFyZ2luLWJvdHRvbTogNXB4O2JvcmRlci1yYWRpdXM6IDRweDstLWJvcmRlci1yYWRpdXM6IDRweDt9XHJcbmlvbi1idXR0b257LS1ib3JkZXItd2lkdGg6IDFweDt9XHJcbi5pb3MubWFpbl9jb250ZW50ey0tcGFkZGluZy10b3A6IDBweDt9XHJcbi5uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTt9Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/people/people.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/profile/people/people.page.ts ***!
    \***********************************************/

  /*! exports provided: PeoplePage */

  /***/
  function srcAppProfilePeoplePeoplePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeoplePage", function () {
      return PeoplePage;
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


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var PeoplePage = /*#__PURE__*/function () {
      function PeoplePage(peopleViewService, storage, navCtrl) {
        _classCallCheck(this, PeoplePage);

        this.peopleViewService = peopleViewService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.people_tabs = "followers";
      } //search followers


      _createClass(PeoplePage, [{
        key: "followerSearchTerm",
        get: function get() {
          return this._searchTerm;
        },
        set: function set(value) {
          this._searchTerm = value;
          this.followerFilteredUsers = this.followerFilterUser(value);
        } //search followings

      }, {
        key: "followingSearchTerm",
        get: function get() {
          return this._followingSearchTrem;
        },
        set: function set(value) {
          this._followingSearchTrem = value;
          this.followingFilteredUsers = this.followingFilterUser(value);
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          this.people_tabs = ev.detail.value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var dataPromise = this.storage.get('userData');
          dataPromise.then(function (data) {
            _this.storageData = JSON.parse(data);
            _this.userId = _this.storageData.id;
            console.log("this.userId:" + _this.userId);
          }); // this.tokenStorage.GetPayLoad().then(result => {
          //   console.log("apeo" + result);
          // });

          this.peopleViewService.getFollowers('').subscribe(function (data) {
            _this.followers = data.result;
            _this.followerFilteredUsers = _this.followers;

            _this.followers.forEach(function (element, i) {
              if (element.following_user.follower_rel != null) {
                element.following_user.follow = true;
                element.following_user["class"] = '';
                element.following_user.color = 'medium';
              } else {
                element.following_user.follow = '';
                element.following_user["class"] = 'green text-white';
                element.following_user.color = '';
              }
            });

            console.log(_this.followers); // this.followers.SetToken(data.token);
          });
          this.peopleViewService.getFollowings('').subscribe(function (data) {
            _this.followings = data.result;
            _this.followingFilteredUsers = _this.followings;

            _this.followings.forEach(function (element, i) {
              element.follower_user.btnName = 'UNFOLLOW';
              element.follower_user.color = 'medium';

              if (element.follower_user.following_rel != null) {
                element.follower_user.follow = true;
                element.follower_user["class"] = ''; // element.follower_user.color = 'medium';
              } else {
                element.follower_user.follow = '';
              }
            });
          });
        } // ionViewDidLoad(){
        //   this.tokenStorage.GetPayLoad().then(value => {
        //     this.token = value;
        //   }) 
        //   }

      }, {
        key: "followerFilterUser",
        value: function followerFilterUser(searchString) {
          return this.followers.filter(function (employee) {
            return employee.following_user.user_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "followingFilterUser",
        value: function followingFilterUser(searchString) {
          return this.followings.filter(function (employee) {
            return employee.follower_user.user_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "followUpPeople",
        value: function followUpPeople(folloUpId, status) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.peopleViewService.followUpPeople({
                      'followUpId': folloUpId,
                      'status': status
                    }).subscribe(function (data) {
                      if (data.followStatus == 'true') {
                        _this2.followers.forEach(function (element, i) {
                          if (element.following_user.id == folloUpId) {
                            element.following_user.follow = false;
                            element.following_user["class"] = 'green text-white';
                            element.following_user.color = '';
                          }
                        });
                      } else if (data.followStatus == 'false') {
                        _this2.followers.forEach(function (element, i) {
                          if (element.following_user.id == folloUpId) {
                            element.following_user.follow = true;
                            element.following_user["class"] = '';
                            element.following_user.color = 'medium';
                          }
                        });
                      }
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "unFollowPeople",
        value: function unFollowPeople(btnName, folloUpId, status) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (btnName == 'UNFOLLOW') {
                      status = 'true';
                    } else if (btnName == 'FOLLOWBACK' || btnName == 'FOLLOW') {
                      status = 'false';
                    }

                    this.peopleViewService.followUpPeople({
                      'followUpId': folloUpId,
                      'status': status
                    }).subscribe(function (data) {
                      if (data.followStatus == 'true') {
                        _this3.followings.forEach(function (element, i) {
                          if (element.follower_user.id == folloUpId && !element.follower_user.follower_rel) {
                            element.follower_user.btnName = 'FOLLOWBACK';
                            element.follower_user["class"] = 'green text-white';
                            element.follower_user.color = '';
                          } else if (element.follower_user.id == folloUpId && element.follower_user.follower_rel == 'null') {
                            element.follower_user.btnName = 'FOLLOW';
                            element.follower_user["class"] = 'green text-white';
                            element.follower_user.color = '';
                          }
                        });
                      } else if (data.followStatus == 'false') {
                        _this3.followings.forEach(function (element, i) {
                          if (element.follower_user.id == folloUpId) {
                            element.follower_user.btnName = 'UNFOLLOW';
                            element.follower_user.color = 'medium';
                            element.follower_user["class"] = '';
                          }
                        });
                      }
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openToggle",
        value: function openToggle() {
          document.getElementById('circularMenu').classList.toggle('active');
          document.getElementById('floting-position').classList.toggle('active');
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return PeoplePage;
    }();

    PeoplePage.ctorParameters = function () {
      return [{
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    PeoplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-people',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./people.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/people/people.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./people.page.scss */
      "./src/app/profile/people/people.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], PeoplePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-people-people-module-es5.js.map