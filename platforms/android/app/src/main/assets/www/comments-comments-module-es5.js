function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommentsCommentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Comments ({{count}})</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-list *ngIf=\"data\">\r\n    <ion-list lines=\"none\" class=\"comment-list\" *ngFor=\"let data of comment\" >\r\n      <ion-item class=\"comment-item\">\r\n        <ion-avatar slot=\"start\" *ngIf=\"data.user.bios.profile_pic\">\r\n          <img src='{{profilePicPath}}{{data.user.bios.profile_pic}}'>\r\n        </ion-avatar>\r\n        <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"!data.user.bios.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\">\r\n        </ion-avatar>\r\n        <ion-label class=\"not-ellipsis\">\r\n          <h2>{{data.user.user_name}}</h2>\r\n          <p>{{data.comment}}</p>\r\n          <ion-label class=\"comment-links\">\r\n            <ion-text id=\"{{data.id}}\" (click)=\"replyComment($event)\">Reply</ion-text>\r\n            \r\n            <ion-text *ngIf=\"userId == data.user_id\" id=\"{{data.id}}\" (click)=\"deleteComment($event)\">Delete</ion-text>\r\n             \r\n          </ion-label>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-list lines=\"none\" class=\"comment-list\" *ngFor=\"let replyData of data.comment_reply\">\r\n        <ion-item class=\"comment-item\">\r\n          <ion-avatar slot=\"start\" *ngIf=\"replyData.user.bios.profile_pic\">\r\n            <img src=\"{{profilePicPath}}{{replyData.user.bios.profile_pic}}\">\r\n          </ion-avatar>\r\n          <ion-avatar slot=\"start\" *ngIf=\"!replyData.user.bios.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label class=\"not-ellipsis\">\r\n            <h2>{{replyData.user.user_name}}</h2>\r\n            <p>{{replyData.comment}}</p>\r\n            <ion-label class=\"comment-links\">\r\n              <ion-text *ngIf=\"userId == replyData.user_id\" id=\"{{replyData.id}}\" (click)=\"deleteComment($event)\" >Delete</ion-text>\r\n            </ion-label>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-list>\r\n  </ion-list> \r\n  <ion-list lines=\"none\" class=\"comment-list\" *ngIf=\"!data\">\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>  \r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>  \r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>      \r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"sticky-footer\">\r\n  <form class=\"commentForm\" [formGroup]=\"commentForm\" (ngSubmit)=\"onClickSubmit()\">\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"profileImage\">\r\n      <img src=\"{{profilePicPath}}{{profileImage}}\">\r\n    </ion-avatar>\r\n    <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"!profileImage\">\r\n      <img src=\"../../assets/images/user.jpg\">\r\n    </ion-avatar>\r\n    <textarea placeholder=\"Enter Comments\" #commentfield formControlName=\"comment\" name=\"comment\"   auto-grow=\"true\" class=\"comment\"></textarea>\r\n    <img (click)=\"onClickSubmit()\" src=\"../assets/images/send.svg\" class=\"send-img\">\r\n  </ion-item>\r\n</form>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/comments/comments-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/comments/comments-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CommentsPageRoutingModule */

  /***/
  function srcAppCommentsCommentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function () {
      return CommentsPageRoutingModule;
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


    var _comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/comments/comments.page.ts");

    var routes = [{
      path: '',
      component: _comments_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPage"]
    }];

    var CommentsPageRoutingModule = function CommentsPageRoutingModule() {
      _classCallCheck(this, CommentsPageRoutingModule);
    };

    CommentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/comments/comments.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/comments/comments.module.ts ***!
    \*********************************************/

  /*! exports provided: CommentsPageModule */

  /***/
  function srcAppCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function () {
      return CommentsPageModule;
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


    var _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comments-routing.module */
    "./src/app/comments/comments-routing.module.ts");
    /* harmony import */


    var _comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/comments/comments.page.ts");

    var CommentsPageModule = function CommentsPageModule() {
      _classCallCheck(this, CommentsPageModule);
    };

    CommentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentsPageRoutingModule"]],
      declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]]
    })], CommentsPageModule);
    /***/
  },

  /***/
  "./src/app/comments/comments.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/comments/comments.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommentsCommentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comment-list {\n  padding: 0; }\n\n.comment-list ion-item {\n  padding: 0; }\n\nion-avatar {\n  margin-right: 10px; }\n\nh2 {\n  font-weight: 500;\n  color: #000;\n  font-size: 0.90rem; }\n\n.comment-item ion-label ion-skeleton-text {\n  height: 28px;\n  margin-top: 0; }\n\n.sticky-footer .send-img {\n  width: 26px; }\n\n.comment {\n  width: 100%;\n  border: none; }\n\n.comment::-webkit-input-placeholder {\n  font-size: 16px; }\n\n.comment::-moz-placeholder {\n  font-size: 16px; }\n\n.comment::-ms-input-placeholder {\n  font-size: 16px; }\n\n.comment::placeholder {\n  font-size: 16px; }\n\nion-list {\n  margin-bottom: 56px; }\n\nion-list > ion-list {\n  margin-bottom: 0; }\n\n.sticky-footer {\n  max-height: 100px;\n  min-height: 56px;\n  height: auto; }\n\n.sticky-footer form {\n    height: 100%; }\n\n.sticky-footer form ion-item {\n      height: 100%;\n      display: flex; }\n\n.sticky-footer form ion-item ion-textarea {\n        position: relative;\n        height: 100%;\n        margin: 0;\n        --padding-top: 14px; }\n\n.sticky-footer form ion-item .send-img {\n        width: 26px;\n        margin-left: 10px; }\n\n.comment-item h2 {\n  display: inline; }\n\n.comment-item .comment-links {\n  margin-top: 5px; }\n\n.not-ellipsis {\n  text-overflow: initial;\n  white-space: normal; }\n\n.not-ellipsis p {\n    line-height: 1.2;\n    color: #3d3d3d;\n    display: inline;\n    margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGNvbW1lbnRzXFxjb21tZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxVQUFVLEVBQUE7O0FBQ3hCO0VBQXVCLFVBQVUsRUFBQTs7QUFDakM7RUFBVyxrQkFBa0IsRUFBQTs7QUFDN0I7RUFBRyxnQkFBZ0I7RUFBQyxXQUFXO0VBQUMsa0JBQWtCLEVBQUE7O0FBR2xEO0VBQTBDLFlBQVk7RUFBQyxhQUFhLEVBQUE7O0FBR3BFO0VBQXlCLFdBQVcsRUFBQTs7QUFDcEM7RUFBVSxXQUFXO0VBQUUsWUFBWSxFQUFBOztBQUNuQztFQUNJLGVBQWUsRUFBQTs7QUFEbkI7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFBUyxtQkFBbUIsRUFBQTs7QUFDNUI7RUFBa0IsZ0JBQWdCLEVBQUE7O0FBQ2xDO0VBQWUsaUJBQWlCO0VBQUMsZ0JBQWdCO0VBQUMsWUFBWSxFQUFBOztBQUE5RDtJQUNTLFlBQVksRUFBQTs7QUFEckI7TUFFaUIsWUFBWTtNQUFDLGFBQWEsRUFBQTs7QUFGM0M7UUFHeUIsa0JBQWtCO1FBQUMsWUFBWTtRQUFDLFNBQVM7UUFBQyxtQkFBYyxFQUFBOztBQUhqRjtRQUlzQixXQUFXO1FBQUMsaUJBQWlCLEVBQUE7O0FBSW5EO0VBRVEsZUFBZSxFQUFBOztBQUZ2QjtFQUtRLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1saXN0e3BhZGRpbmc6IDA7fVxyXG4uY29tbWVudC1saXN0IGlvbi1pdGVte3BhZGRpbmc6IDA7fVxyXG5pb24tYXZhdGFye21hcmdpbi1yaWdodDogMTBweDt9XHJcbmgye2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICMwMDA7Zm9udC1zaXplOiAwLjkwcmVtO31cclxuXHJcbi8vIGNzcyBmb3Igc2tlbGV0b25cclxuLmNvbW1lbnQtaXRlbSBpb24tbGFiZWwgaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAyOHB4O21hcmdpbi10b3A6IDA7fVxyXG5cclxuLy8gY3NzIGZvciBmb290ZXJcclxuLnN0aWNreS1mb290ZXIgLnNlbmQtaW1ne3dpZHRoOiAyNnB4O31cclxuLmNvbW1lbnQge3dpZHRoOiAxMDAlOyBib3JkZXI6IG5vbmU7fVxyXG4uY29tbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbmlvbi1saXN0e21hcmdpbi1ib3R0b206IDU2cHg7fVxyXG5pb24tbGlzdD5pb24tbGlzdHttYXJnaW4tYm90dG9tOiAwO31cclxuLnN0aWNreS1mb290ZXJ7bWF4LWhlaWdodDogMTAwcHg7bWluLWhlaWdodDogNTZweDtoZWlnaHQ6IGF1dG87XHJcbiAgICBmb3Jte2hlaWdodDogMTAwJTtcclxuICAgICAgICBpb24taXRlbXtoZWlnaHQ6IDEwMCU7ZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaW9uLXRleHRhcmVhe3Bvc2l0aW9uOiByZWxhdGl2ZTtoZWlnaHQ6IDEwMCU7bWFyZ2luOiAwOy0tcGFkZGluZy10b3A6IDE0cHg7fVxyXG4gICAgICAgICAgICAuc2VuZC1pbWd7d2lkdGg6IDI2cHg7bWFyZ2luLWxlZnQ6IDEwcHg7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY29tbWVudC1pdGVte1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgLmNvbW1lbnQtbGlua3N7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcbi5ub3QtZWxsaXBzaXN7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBjb2xvcjogIzNkM2QzZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/comments/comments.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/comments/comments.page.ts ***!
    \*******************************************/

  /*! exports provided: CommentsPage */

  /***/
  function srcAppCommentsCommentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPage", function () {
      return CommentsPage;
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


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var CommentsPage = /*#__PURE__*/function () {
      function CommentsPage(activatedRoute, fb, commonService, postService, storage, navCtrl, urlrouter) {
        var _this = this;

        _classCallCheck(this, CommentsPage);

        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.commonService = commonService;
        this.postService = postService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.urlrouter = urlrouter;
        this.submitted = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
        this['validation_messages'] = {
          comment: [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'maxlength',
            message: 'Comment cannot be more than 25 characters long'
          }]
        };
        this.createForm();
        this.activatedRoute.paramMap.subscribe(function (params) {
          _this.postId = params.get('postId');
        });
      }

      _createClass(CommentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.routeUrl = this.urlrouter.url;
          console.log(this.urlrouter.url + 'hhhhh');
          this.scrollToBottomOnInit();
          this.profilePicPath = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
          var dataPromise = this.storage.get('userData');
          dataPromise.then(function (data) {
            _this2.storageData = JSON.parse(data);
            _this2.userId = _this2.storageData.id;
          });
          this.commentForm.patchValue({
            postId: this.postId
          });
          this.postService.getComment({
            'postId': this.postId
          }).subscribe(function (data) {
            _this2.data = true;
            _this2.comment = data.status;
            _this2.count = data.count;
            console.log('this.postId' + _this2.postId);
          });
          this.postService.getProfileImage().subscribe(function (data) {
            _this2.profileImage = data.status.profile_pic;
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.commentForm = this.fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)])),
            postId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            replyToComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
          });
        } // @ViewChild("comment",{"static" : true}) input: ElementRef;

      }, {
        key: "replyComment",
        value: function replyComment(event) {
          this.content.nativeElement.focus();

          if (event.srcElement.id != '') {
            console.log('ghfghf');
            this.replyToComment = event.srcElement.id;
          } else {
            this.replyToComment = '';
          }

          this.commentForm.get('replyToComment').setValue(this.replyToComment);
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.commentId = event.srcElement.id;
                    this.postService.deleteComment({
                      'commentId': this.commentId
                    }).subscribe(function (data) {
                      if (data.status == true) {
                        _this3.commonService.presentToast('Comment Deleted !');

                        _this3.ngOnInit();
                      }
                    }, function (err) {
                      console.log(err + 'errr');
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "main",
        value: function main() {
          this.router.navigate(["/main"]);
        }
      }, {
        key: "getContent",
        value: function getContent() {
          return document.querySelector('ion-content');
        }
      }, {
        key: "scrollToBottomOnInit",
        value: function scrollToBottomOnInit() {
          this.getContent().scrollToBottom(300);
        }
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit() {
          var _this4 = this;

          this.submitted = true;
          console.log(this.commentForm.value);

          if (this.commentForm.value != '') {
            this.commonService.presentLoader();
            this.postService.addComment(this.commentForm.value).subscribe(function (data) {
              if (data.status == true) {
                _this4.commentForm.reset();

                _this4.commentForm.get('replyToComment').setValue('');

                _this4.getContent().scrollToBottom(1000);

                _this4.ngOnInit();
              }

              _this4.commonService.dismissLoader();
            }, function (err) {
              _this4.commonService.dismissLoader();

              console.log(err + 'errr');
            });
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("comment ngOnDestroy");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log('comment ionViewWillEnter');
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log('comment ionViewDidLeave');
        }
      }]);

      return CommentsPage;
    }();

    CommentsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentfield', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CommentsPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], CommentsPage.prototype, "ngOnInit", null);
    CommentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comments.page.scss */
      "./src/app/comments/comments.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CommentsPage);
    /***/
  }
}]);
//# sourceMappingURL=comments-comments-module-es5.js.map