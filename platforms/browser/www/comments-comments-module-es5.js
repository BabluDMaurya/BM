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


    __webpack_exports__["default"] = ".comment-list {\n  padding: 0;\n}\n\n.comment-list ion-item {\n  padding: 0;\n}\n\nion-avatar {\n  margin-right: 10px;\n}\n\nh2 {\n  font-weight: 500;\n  color: #000;\n  font-size: 0.9rem;\n}\n\n.comment-item ion-label ion-skeleton-text {\n  height: 28px;\n  margin-top: 0;\n}\n\n.sticky-footer .send-img {\n  width: 26px;\n}\n\n.comment {\n  width: 100%;\n  border: none;\n}\n\n.comment::-webkit-input-placeholder {\n  font-size: 16px;\n}\n\n.comment::-moz-placeholder {\n  font-size: 16px;\n}\n\n.comment::-ms-input-placeholder {\n  font-size: 16px;\n}\n\n.comment::placeholder {\n  font-size: 16px;\n}\n\nion-list {\n  margin-bottom: 56px;\n}\n\nion-list > ion-list {\n  margin-bottom: 0;\n}\n\n.sticky-footer {\n  max-height: 100px;\n  min-height: 56px;\n  height: auto;\n}\n\n.sticky-footer form {\n  height: 100%;\n}\n\n.sticky-footer form ion-item {\n  height: 100%;\n  display: flex;\n}\n\n.sticky-footer form ion-item ion-textarea {\n  position: relative;\n  height: 100%;\n  margin: 0;\n  --padding-top: 14px;\n}\n\n.sticky-footer form ion-item .send-img {\n  width: 26px;\n  margin-left: 10px;\n}\n\n.comment-item h2 {\n  display: inline;\n}\n\n.comment-item .comment-links {\n  margin-top: 5px;\n}\n\n.not-ellipsis {\n  text-overflow: initial;\n  white-space: normal;\n}\n\n.not-ellipsis p {\n  line-height: 1.2;\n  color: #3d3d3d;\n  display: inline;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcY29tbWVudHNcXGNvbW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsVUFBQTtBQ0VkOztBRERBO0VBQXVCLFVBQUE7QUNLdkI7O0FESkE7RUFBVyxrQkFBQTtBQ1FYOztBRFBBO0VBQUcsZ0JBQUE7RUFBaUIsV0FBQTtFQUFZLGlCQUFBO0FDYWhDOztBRFZBO0VBQTBDLFlBQUE7RUFBYSxhQUFBO0FDZXZEOztBRFpBO0VBQXlCLFdBQUE7QUNnQnpCOztBRGZBO0VBQVUsV0FBQTtFQUFhLFlBQUE7QUNvQnZCOztBRG5CQTtFQUNJLGVBQUE7QUNzQko7O0FEdkJBO0VBQ0ksZUFBQTtBQ3NCSjs7QUR2QkE7RUFDSSxlQUFBO0FDc0JKOztBRHZCQTtFQUNJLGVBQUE7QUNzQko7O0FEcEJBO0VBQVMsbUJBQUE7QUN3QlQ7O0FEdkJBO0VBQWtCLGdCQUFBO0FDMkJsQjs7QUQxQkE7RUFBZSxpQkFBQTtFQUFrQixnQkFBQTtFQUFpQixZQUFBO0FDZ0NsRDs7QUQvQkk7RUFBSyxZQUFBO0FDa0NUOztBRGpDUTtFQUFTLFlBQUE7RUFBYSxhQUFBO0FDcUM5Qjs7QURwQ1k7RUFBYSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsU0FBQTtFQUFVLG1CQUFBO0FDMENuRTs7QUR6Q1k7RUFBVSxXQUFBO0VBQVksaUJBQUE7QUM2Q2xDOztBRHhDSTtFQUNJLGVBQUE7QUMyQ1I7O0FEekNJO0VBQ0ksZUFBQTtBQzJDUjs7QUR4Q0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FDMkNKOztBRDFDSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzRDUiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWxpc3R7cGFkZGluZzogMDt9XHJcbi5jb21tZW50LWxpc3QgaW9uLWl0ZW17cGFkZGluZzogMDt9XHJcbmlvbi1hdmF0YXJ7bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuaDJ7Zm9udC13ZWlnaHQ6IDUwMDtjb2xvcjogIzAwMDtmb250LXNpemU6IDAuOTByZW07fVxyXG5cclxuLy8gY3NzIGZvciBza2VsZXRvblxyXG4uY29tbWVudC1pdGVtIGlvbi1sYWJlbCBpb24tc2tlbGV0b24tdGV4dHtoZWlnaHQ6IDI4cHg7bWFyZ2luLXRvcDogMDt9XHJcblxyXG4vLyBjc3MgZm9yIGZvb3RlclxyXG4uc3RpY2t5LWZvb3RlciAuc2VuZC1pbWd7d2lkdGg6IDI2cHg7fVxyXG4uY29tbWVudCB7d2lkdGg6IDEwMCU7IGJvcmRlcjogbm9uZTt9XHJcbi5jb21tZW50OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuaW9uLWxpc3R7bWFyZ2luLWJvdHRvbTogNTZweDt9XHJcbmlvbi1saXN0Pmlvbi1saXN0e21hcmdpbi1ib3R0b206IDA7fVxyXG4uc3RpY2t5LWZvb3RlcnttYXgtaGVpZ2h0OiAxMDBweDttaW4taGVpZ2h0OiA1NnB4O2hlaWdodDogYXV0bztcclxuICAgIGZvcm17aGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGlvbi1pdGVte2hlaWdodDogMTAwJTtkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBpb24tdGV4dGFyZWF7cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDogMTAwJTttYXJnaW46IDA7LS1wYWRkaW5nLXRvcDogMTRweDt9XHJcbiAgICAgICAgICAgIC5zZW5kLWltZ3t3aWR0aDogMjZweDttYXJnaW4tbGVmdDogMTBweDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jb21tZW50LWl0ZW17XHJcbiAgICBoMntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICAuY29tbWVudC1saW5rc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLm5vdC1lbGxpcHNpc3tcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgcHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5jb21tZW50LWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29tbWVudC1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5jb21tZW50LWl0ZW0gaW9uLWxhYmVsIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc3RpY2t5LWZvb3RlciAuc2VuZC1pbWcge1xuICB3aWR0aDogMjZweDtcbn1cblxuLmNvbW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY29tbWVudDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcbn1cblxuaW9uLWxpc3QgPiBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zdGlja3ktZm9vdGVyIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zdGlja3ktZm9vdGVyIGZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc3RpY2t5LWZvb3RlciBmb3JtIGlvbi1pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnN0aWNreS1mb290ZXIgZm9ybSBpb24taXRlbSBpb24tdGV4dGFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICAtLXBhZGRpbmctdG9wOiAxNHB4O1xufVxuLnN0aWNreS1mb290ZXIgZm9ybSBpb24taXRlbSAuc2VuZC1pbWcge1xuICB3aWR0aDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jb21tZW50LWl0ZW0gaDIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uY29tbWVudC1pdGVtIC5jb21tZW50LWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubm90LWVsbGlwc2lzIHtcbiAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5ub3QtZWxsaXBzaXMgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjM2QzZDNkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */";
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