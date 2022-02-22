function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-page-category-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category-page/category-page.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category-page/category-page.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryPageCategoryPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{specialityName}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"notificationCount > 0\">{{ notificationCount }}</ion-badge>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\">\r\n  <ion-toolbar no-border-top class=\"profile_tabs\">\r\n    <ion-segment class=\"ion-no-padding\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\r\n      <ion-segment-button value=\"0\" checked>\r\n        <span>Peoples</span>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"1\">\r\n        <span>Videos</span>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2\">\r\n        <span>Posts</span>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n  <div *ngIf=\"segment==0\" > \r\n    <ion-list lines=\"none\" class=\"item-list ion-no-padding\">\r\n      <ion-item-group *ngFor=\"let item of result\">\r\n        <ion-item-divider sticky class=\"grey-header ion-padding-horizontal\">\r\n          <ion-label> {{item.key}} </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item-sliding *ngFor=\"let key of item.contacts\">\r\n          <ion-item *ngIf=\"!key.advertisment\" class=\"item-block\"\r\n            [routerLink]=\"key.user_type==0 ? ['/tabs/user-profile-view/',key.id] : ['/tabs/consultant-profile-view/',key.id]\">\r\n            <ion-avatar slot=\"start\">\r\n              <img *ngIf=\"key?.profile_pic\" src=\"{{url}}{{key?.profile_pic}}\">\r\n              <img *ngIf=\"!key?.profile_pic\" src=\"../../assets/images/user.jpg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3> {{key.user_name}}</h3>\r\n              <span *ngIf=\"key.user_type==1\">{{key?.publicVideos?.total}} Videos, {{key?.upcomingProgram?.total}}\r\n                Upcoming Programs</span>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"item-block advertise-block\" *ngIf=\"key.advertisment\">\r\n            <ion-avatar slot=\"start\" class=\"advertise-box\">\r\n              <ion-label>A</ion-label>\r\n            </ion-avatar>\r\n\r\n            <ion-label>\r\n              <h3>Advertisement Title</h3>\r\n              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-item-sliding>\r\n      </ion-item-group>\r\n    </ion-list>\r\n  </div>\r\n  <div *ngIf=\"segment==1\" > \r\n    <div *ngIf=\"videoList.length<1\"> NO Videos Found</div>\r\n    <div *ngFor=\"let post of videoList\">\r\n\r\n      <ion-card class=\"item-card\"  >  <!-- //*ngIf=\"!post.is_delete &&  !post?.length\" -->\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar [routerLink]=\"['/tabs/consultant-profile-view/',post?.user_id]\">\r\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{post?.profile_pic}}\"\r\n              *ngIf=\"post?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post?.profile_pic\">\r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label [routerLink]=\"['/tabs/consultant-profile-view/',post?.user_id]\">\r\n              <ion-card-title>{{post?.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post?.country_name?.name}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}} </p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <!-- <ion-thumbnail *ngIf=\"post?.image_post\">\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post?.image_post['0']?.thumb_path; let i =index;\">\r\n                <img (click)=\"openViewer(post?.image_post['0']?.thumb_path[i])\" src=\"{{url}}{{imgpath}}\"\r\n                  alt=\"{{imgpath}}\" />\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-thumbnail> -->\r\n          <ion-thumbnail *ngIf=\"post?.video_post\" [routerLink]=\"['/videos',post.id,'']\">\r\n            <img src=\"{{storagePath + post?.thumb_path}}\" alt=\"Thumnail Path\" />\r\n            <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n          </ion-thumbnail>\r\n          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\" *ngIf=\"post?.video_post\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div [routerLink]=\"['/comments',post?.id]\"\r\n                  *ngIf=\"!post?.disable_comment && !post?.comment_disable \">\r\n                  <span class=\"d-flex\">\r\n                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                    <span>{{post?.total_comments?.length}}</span>\r\n                  </span>\r\n                </div>\r\n                <div (click)=\"liked(post.id,post?.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                  <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <!-- --------------- bookmark for only  othepost on own -------->\r\n             \r\n            </ion-list>\r\n            <!-- --------------- bookmark ends here------------ -->\r\n  \r\n            <!-- -------  Description for posts   -->\r\n<!--   \r\n            <div *ngIf=\"post?.post_type==1\">\r\n              <p *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 100)}}\r\n              </p>\r\n              <p\r\n                *ngIf=\"post?.image_post['0'].description && post?.image_post['0'].description.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.post_user?.user_name}}</span>{{post?.image_post['0'].description}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div> -->\r\n  \r\n            <div *ngIf=\"post?.post_type==2\">\r\n              <p *ngIf=\"post?.title && post?.title.length < 30\"><span\r\n                  class=\"username-text text-green\">{{post?.user_name}}</span>{{post?.title.substr(0, 100)}}\r\n              </p>\r\n              <p *ngIf=\"post?.title && post?.title.length > 29 && expanded !=  post.id\">\r\n                <span\r\n                  class=\"username-text text-green\">{{post?.user_name}}</span>{{post?.title.substr(0, 29)}}\r\n                <span (click)=\"expanded = post.id\"\r\n                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.id \"><span\r\n                  class=\"username-text text-green\">{{post?.user_name}}</span>{{post?.title}}\r\n                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span>\r\n              </p>\r\n            </div>\r\n  \r\n            <!-- ------- ends here -->\r\n  \r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div> \r\n  </div>\r\n  <div *ngIf=\"segment==2\" > </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/category-page/category-page-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/category-page/category-page-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CategoryPagePageRoutingModule */

  /***/
  function srcAppCategoryPageCategoryPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPagePageRoutingModule", function () {
      return CategoryPagePageRoutingModule;
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


    var _category_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category-page.page */
    "./src/app/category-page/category-page.page.ts");

    var routes = [{
      path: '',
      component: _category_page_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPagePage"]
    }];

    var CategoryPagePageRoutingModule = function CategoryPagePageRoutingModule() {
      _classCallCheck(this, CategoryPagePageRoutingModule);
    };

    CategoryPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/category-page/category-page.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/category-page/category-page.module.ts ***!
    \*******************************************************/

  /*! exports provided: CategoryPagePageModule */

  /***/
  function srcAppCategoryPageCategoryPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPagePageModule", function () {
      return CategoryPagePageModule;
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


    var _category_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-page-routing.module */
    "./src/app/category-page/category-page-routing.module.ts");
    /* harmony import */


    var _category_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category-page.page */
    "./src/app/category-page/category-page.page.ts");

    var CategoryPagePageModule = function CategoryPagePageModule() {
      _classCallCheck(this, CategoryPagePageModule);
    };

    CategoryPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPagePageRoutingModule"]],
      declarations: [_category_page_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPagePage"]]
    })], CategoryPagePageModule);
    /***/
  },

  /***/
  "./src/app/category-page/category-page.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/category-page/category-page.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryPageCategoryPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXBhZ2UvY2F0ZWdvcnktcGFnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/category-page/category-page.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/category-page/category-page.page.ts ***!
    \*****************************************************/

  /*! exports provided: CategoryPagePage */

  /***/
  function srcAppCategoryPageCategoryPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPagePage", function () {
      return CategoryPagePage;
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


    var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");

    var CategoryPagePage = /*#__PURE__*/function () {
      function CategoryPagePage(router, commonService, navCtrl, actRoute, searchService) {
        _classCallCheck(this, CategoryPagePage);

        this.router = router;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.searchService = searchService;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].profilePic;
        this.segment = 0;
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].storagePath;
      }

      _createClass(CategoryPagePage, [{
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(ev);
                    this.segment = ev.detail.value;

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loginUserData = this.commonService.getUserData();
          this.actRoute.paramMap.subscribe(function (params) {
            _this.specialityId = params.get('id');
            _this.specialityName = params.get('name');
          });
          this.commonService.presentLoader();
          this.searchService.getUserByCategoryId({
            'specialityId': this.specialityId
          }).subscribe(function (peoples) {
            _this.sortedPersonList = peoples.userList.sort(function (a, b) {
              return a.user_name > b.user_name ? 1 : -1;
            });

            _this.sortedPersonList.sort(function (a, b) {
              return a.user_name.localeCompare(b.user_name);
            });

            var i = 1;
            var ad = {
              'advertisment': 'Advertisamentgdkfgklfd'
            };

            var grouped = _this.sortedPersonList.reduce(function (groups, contact) {
              var letter = contact.user_name.charAt(0).toUpperCase();
              groups[letter] = groups[letter] || [];
              groups[letter].push(contact);

              if (i % 5 == 0 && i !== 1) {
                groups[letter].push(ad);
              }

              i++;
              return groups;
            }, {});

            _this.result = Object.keys(grouped).map(function (key) {
              return {
                key: key,
                contacts: grouped[key]
              };
            });
            console.log(_this.result);
          });
          this.searchService.getCBC({
            "catId": this.specialityId
          }).subscribe(function (data) {
            _this.commonService.dismissLoader();

            _this.videoList = data.data;
          }, function (err) {
            _this.commonService.dismissLoader();
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return CategoryPagePage;
    }();

    CategoryPagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
      }];
    };

    CategoryPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category-page/category-page.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-page.page.scss */
      "./src/app/category-page/category-page.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])], CategoryPagePage);
    /***/
  }
}]);
//# sourceMappingURL=category-page-category-page-module-es5.js.map