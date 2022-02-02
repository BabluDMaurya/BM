function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-preview-post-preview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-preview/post-preview.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-preview/post-preview.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPreviewPostPreviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click)=\"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Image Post</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\" >\r\n  <ion-list-header class=\"grey-header\" *ngIf=\"postData?.post_user?.id\">See more from {{postData?.post_user?.user_name}}\r\n    <!-- <a [routerLink]=\"['/tabs/images' , postData?.post_user?.id ]\" size=\"small\">View All</a> -->\r\n    <ion-button [routerLink]=\"['/tabs/images' , postData?.post_user?.id]\" size=\"small\" class=\"green\">View All</ion-button>\r\n  </ion-list-header>\r\n  <ion-card class=\"item-card\" *ngIf=\"!skeleton\">\r\n    <ion-card-header class=\"item-header\">\r\n      <ion-avatar>\r\n        <img src=\"{{profile_url}}{{postData?.post_user?.bios?.profile_pic}}\" *ngIf=\"postData?.post_user?.bios?.profile_pic\">\r\n        <img src=\"../../assets/images/user.jpg\" *ngIf=\"!postData?.post_user?.bios?.profile_pic\"> \r\n      </ion-avatar> \r\n        <div class=\"header-right\">  \r\n        <ion-label>\r\n          <ion-card-title>{{postData?.post_user?.user_name}}</ion-card-title>\r\n          <ion-card-subtitle>{{postData?.post_user?.location}}</ion-card-subtitle>       \r\n        </ion-label>\r\n        <ion-text class=\"post-timedate\"><p class=\"post-date\">{{postData?.created_at}}</p></ion-text> \r\n      </div>   \r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding item-content\">\r\n      <ion-thumbnail *ngIf=\"postData?.image_post['0']['thumb_path']\">\r\n        <ion-slides [options]=\"postSlider\" class=\"post-slider\" [pager]=\"postData?.image_post['0']['thumb_path'].length >1 ? true : false\">\r\n          <ion-slide *ngFor=\"let imgpath of postData?.image_post['0']['thumb_path']; let i =index;\">\r\n            <img (click)=\"openViewer(postData?.image_post['0']['thumb_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-thumbnail>   \r\n      <div class=\"post-content\">\r\n        <ion-list class=\"item-post\" lines=\"none\">\r\n          <ion-item>\r\n            <div [routerLink]=\"['/comments',consultID]\" *ngIf = \"postData?.post_user?.comment_disable == 0\">\r\n              <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>{{postData?.total_comments.length}}</span>\r\n            </div>\r\n            <div (click)=\"liked(postData?.id,postData.liked)\" class=\"{{ postData?.liked ?'active':'inactive' }}\">\r\n              <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>{{postData?.count}}</span>\r\n            </div>\r\n          </ion-item>\r\n          <!-- --------------- bookmark for only  othepost on own -------->\r\n          <ion-item *ngIf=\"postData?.post_type==1 && postData?.allowBookmark\">\r\n         \r\n              <div (click)=\"bookmarked(postData?.id , postData?.bookmarked , 1)\" class=\"{{ postData?.bookmarked ?'active':'inactive' }}\">\r\n                <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n              </div>\r\n           \r\n          </ion-item>\r\n        </ion-list>\r\n         <!-- --------------- bookmark ends here------------ -->\r\n       <!-- -------  Description for  I-M-A-G-E  post with  post type = 1-->\r\n       <div *ngIf=\"postData?.post_type==1\">\r\n        <p *ngIf=\"postData?.image_post['0']['description'] && postData?.image_post['0']['description'].length < 30\"><span\r\n            class=\"username-text text-green\">{{postData.post_user.user_name}}</span>{{postData?.image_post['0']['description'].substr(0, 100)}}\r\n        </p>\r\n        <p\r\n          *ngIf=\"postData?.image_post['0']['description'] && postData?.image_post['0']['description'].length > 29 && expanded !=  postData.id\">\r\n          <span\r\n            class=\"username-text text-green\">{{postData.post_user.user_name}}</span>{{postData?.image_post['0']['description'].substr(0, 29)}}\r\n          <span (click)=\"expanded = postData?.id\"\r\n            class=\"text-green\">{{expanded==  postData?.id ?'View less':'View more'}}</span></p>\r\n        <p *ngIf=\"expanded ==  postData?.id \"><span\r\n            class=\"username-text text-green\">{{postData.post_user.user_name}}</span>{{postData?.image_post['0']['description']}}\r\n          <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  postData?.id ?'View less':'View more'}}</span></p>\r\n      </div>\r\n      <!-- ------- ends here   post type = 1-->\r\n    </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div *ngIf=\"skeleton\">\r\n    <ion-card class=\"video-card\">\r\n      <ion-card-header class=\"card-head upcoming-block\">\r\n        <ion-skeleton-text animated class=\"card-thumb\"></ion-skeleton-text>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <div class=\"video-content\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/post-preview/post-preview-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/post-preview/post-preview-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PostPreviewPageRoutingModule */

  /***/
  function srcAppPostPreviewPostPreviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPreviewPageRoutingModule", function () {
      return PostPreviewPageRoutingModule;
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


    var _post_preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post-preview.page */
    "./src/app/post-preview/post-preview.page.ts");

    var routes = [{
      path: '',
      component: _post_preview_page__WEBPACK_IMPORTED_MODULE_3__["PostPreviewPage"]
    }];

    var PostPreviewPageRoutingModule = function PostPreviewPageRoutingModule() {
      _classCallCheck(this, PostPreviewPageRoutingModule);
    };

    PostPreviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostPreviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/post-preview/post-preview.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/post-preview/post-preview.module.ts ***!
    \*****************************************************/

  /*! exports provided: PostPreviewPageModule */

  /***/
  function srcAppPostPreviewPostPreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPreviewPageModule", function () {
      return PostPreviewPageModule;
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


    var _post_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post-preview-routing.module */
    "./src/app/post-preview/post-preview-routing.module.ts");
    /* harmony import */


    var _post_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post-preview.page */
    "./src/app/post-preview/post-preview.page.ts");

    var PostPreviewPageModule = function PostPreviewPageModule() {
      _classCallCheck(this, PostPreviewPageModule);
    };

    PostPreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _post_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPreviewPageRoutingModule"]],
      declarations: [_post_preview_page__WEBPACK_IMPORTED_MODULE_6__["PostPreviewPage"]]
    })], PostPreviewPageModule);
    /***/
  },

  /***/
  "./src/app/post-preview/post-preview.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/post-preview/post-preview.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPreviewPostPreviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list-header.grey-header {\n  text-transform: capitalize;\n  color: #222;\n  font-weight: 400;\n  font-size: 0.757rem;\n  padding-right: 16px; }\n\nion-list-header ion-button {\n  margin: 0;\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1wcmV2aWV3L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwb3N0LXByZXZpZXdcXHBvc3QtcHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsMEJBQTBCO0VBQUMsV0FBVztFQUFDLGdCQUFnQjtFQUFDLG1CQUFtQjtFQUFDLG1CQUFtQixFQUFBOztBQUMzSDtFQUEyQixTQUFTO0VBQUMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0LXByZXZpZXcvcG9zdC1wcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlci5ncmV5LWhlYWRlcnt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtjb2xvcjogIzIyMjtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMC43NTdyZW07cGFkZGluZy1yaWdodDogMTZweDt9XHJcbmlvbi1saXN0LWhlYWRlciBpb24tYnV0dG9ue21hcmdpbjogMDtib3JkZXItcmFkaXVzOiA0cHg7fSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post-preview/post-preview.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/post-preview/post-preview.page.ts ***!
    \***************************************************/

  /*! exports provided: PostPreviewPage */

  /***/
  function srcAppPostPreviewPostPreviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPreviewPage", function () {
      return PostPreviewPage;
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


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");

    var PostPreviewPage = /*#__PURE__*/function () {
      function PostPreviewPage(navCtrl, actRoute, postService, modalController) {
        _classCallCheck(this, PostPreviewPage);

        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.postService = postService;
        this.modalController = modalController;
        this.like = 1;
        this.bookmark1 = 1;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
        this.profile_url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.skeleton = true;
        this.gotData = false;
      }

      _createClass(PostPreviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          this.actRoute.paramMap.subscribe(function (params) {
            _this.consultID = params.get('postId');
          });

          if (this.consultID != this.loginUserData.id) {
            this.allowBookmark = true;
          }

          this.postService.getPostById({
            'postId': this.consultID
          }).subscribe(function (data) {
            _this.postData = data.postData;
            _this.skeleton = false;
            _this.postData.count = _this.postData.post_likes.length;

            _this.postData.post_likes.filter(function (f) {
              if (_this.postData.user_id == _this.loginUserData.id) {
                _this.postData.liked = true;
              }
            });

            _this.postData.post_bookmarks.filter(function (f) {
              if (_this.postData.user_id == _this.loginUserData.id) {
                _this.postData.bookmarked = true;
              }
            });
          }, function (err) {
            _this.skeleton = false;
          });
          this.gotData = true;
          console.log(this.postData);
          console.log('this.postData');
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "openViewer",
        value: function openViewer(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.url + path);
                    _context.next = 3;
                    return this.modalController.create({
                      component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["ViewerModalComponent"],
                      componentProps: {
                        src: this.url + path,
                        srcHighRes: this.url + path,
                        srcFallback: this.url + path
                      },
                      cssClass: 'ion-img-viewer',
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 3:
                    modal = _context.sent;
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
      }]);

      return PostPreviewPage;
    }();

    PostPreviewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    PostPreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-preview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-preview/post-preview.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-preview.page.scss */
      "./src/app/post-preview/post-preview.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], PostPreviewPage);
    /***/
  }
}]);
//# sourceMappingURL=post-preview-post-preview-module-es5.js.map