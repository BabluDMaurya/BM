function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-images-images-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/images/images.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/images/images.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileImagesImagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Images</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n   <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gotData\">\r\n      <ion-list-header class=\"grey-header\" >{{userName}} have uploaded {{total}} posts <ion-button [routerLink]=\"['/tabs/all-images' , consultID , userName]\" size=\"small\" class=\"green\" *ngIf=\"total>0\">View All</ion-button></ion-list-header>\r\n      <ion-card class=\"item-card\"  *ngFor=\"let post of myPosts\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{userData?.userData?.bios?.profile_pic}}\" *ngIf=\"userData?.userData?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!userData?.userData?.bios?.profile_pic\">  \r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label>\r\n              <ion-card-title>{{userName}}</ion-card-title>\r\n              <ion-card-subtitle>{{userData?.userData?.location}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}}</p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['thumb_path']; let i=index;\">\r\n                <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-thumbnail>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div [routerLink]=\"['/comments',post?.id]\" *ngIf=\"userData?.userData?.comment_disable == 0\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>{{post?.total_comments.length}}</span>\r\n                </div>\r\n                <div  (click)=\"liked(post?.id,post?.liked)\"  class=\"{{ post?.liked ?'active':'inactive' }}\"  >\r\n                  <ion-icon  class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\" ></ion-icon> <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"userData?.userData?.id != loginUserData.id\">\r\n                <div (click)=\"bookmarked(post?.id , post?.bookmarked, 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n          </p>\r\n            <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\"><span\r\n                class=\"username-text text-green\">{{userData?.userData?.user_name}}</span>{{post['image_post']['0']?.description.substr(0, 29)}} <span (click)=\"expanded = post.id\"\r\n                class=\"text-green\">{{expanded==  post?.id ?'View less':'View more'}}</span></p>\r\n            <p *ngIf=\"expanded ==  post.id \"><span class=\"username-text text-green\">{{userData?.userData?.user_name}}</span>{{post['image_post']['0']?.description}} <span\r\n                (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post?.id ?'View less':'View more'}}</span></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n        </ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"!gotData\">\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/images/images-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/profile/images/images-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ImagesPageRoutingModule */

  /***/
  function srcAppProfileImagesImagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesPageRoutingModule", function () {
      return ImagesPageRoutingModule;
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


    var _images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./images.page */
    "./src/app/profile/images/images.page.ts");

    var routes = [{
      path: '',
      component: _images_page__WEBPACK_IMPORTED_MODULE_3__["ImagesPage"]
    }];

    var ImagesPageRoutingModule = function ImagesPageRoutingModule() {
      _classCallCheck(this, ImagesPageRoutingModule);
    };

    ImagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/images/images.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/profile/images/images.module.ts ***!
    \*************************************************/

  /*! exports provided: ImagesPageModule */

  /***/
  function srcAppProfileImagesImagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function () {
      return ImagesPageModule;
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


    var _images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./images-routing.module */
    "./src/app/profile/images/images-routing.module.ts");
    /* harmony import */


    var _images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./images.page */
    "./src/app/profile/images/images.page.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");

    var ImagesPageModule = function ImagesPageModule() {
      _classCallCheck(this, ImagesPageModule);
    };

    ImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _images_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagesPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"]],
      declarations: [_images_page__WEBPACK_IMPORTED_MODULE_6__["ImagesPage"]]
    })], ImagesPageModule);
    /***/
  },

  /***/
  "./src/app/profile/images/images.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/profile/images/images.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileImagesImagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list-header.grey-header {\n  text-transform: capitalize;\n  color: #222;\n  font-weight: 400;\n  font-size: 0.757rem;\n  padding-right: 16px;\n}\n\nion-list-header ion-button {\n  margin: 0;\n  border-radius: 4px;\n}\n\n.item-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF;\n}\n\n.item-header {\n  display: flex;\n  padding: 10px;\n}\n\n.item-header ion-avatar {\n  width: 34px;\n  min-width: 34px;\n  height: 34px;\n  margin-right: 8px;\n}\n\n.item-header ion-card-title {\n  font-size: 0.9rem;\n  color: #262626;\n}\n\n.item-header ion-card-subtitle, .post-timedate p {\n  font-size: 0.757rem;\n  text-transform: capitalize;\n  margin-bottom: 0;\n  color: #676767;\n  font-weight: 400;\n}\n\n.header-right {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.post-content {\n  padding: 10px;\n}\n\n.item-post {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n}\n\n.item-post ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: auto;\n}\n\n.item-post ion-item > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-right: 15px;\n  font-size: 1.45rem;\n}\n\n.item-post ion-item ion-icon {\n  color: #999;\n  font-size: 1.45rem;\n}\n\n.item-post ion-item span {\n  font-size: 1.15rem;\n  margin-left: 3px;\n}\n\n.username-text {\n  margin-right: 3px;\n}\n\n.item-post ion-item ion-skeleton-text {\n  width: 32px;\n  height: 18px;\n}\n\n.item-post ion-item ion-skeleton-text:last-child {\n  margin-left: 5px;\n}\n\n.post-content p ion-skeleton-text {\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9pbWFnZXMvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcaW1hZ2VzXFxpbWFnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2ltYWdlcy9pbWFnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQTRCLDBCQUFBO0VBQTJCLFdBQUE7RUFBWSxnQkFBQTtFQUFpQixtQkFBQTtFQUFvQixtQkFBQTtBQ014Rzs7QURMQTtFQUEyQixTQUFBO0VBQVUsa0JBQUE7QUNVckM7O0FEVEE7RUFBVywrQ0FBQTtFQUFnRCxnQkFBQTtBQ2MzRDs7QURiQTtFQUFhLGFBQUE7RUFBYyxhQUFBO0FDa0IzQjs7QURqQkE7RUFBd0IsV0FBQTtFQUFZLGVBQUE7RUFBZSxZQUFBO0VBQWEsaUJBQUE7QUN3QmhFOztBRHZCQTtFQUE0QixpQkFBQTtFQUFtQixjQUFBO0FDNEIvQzs7QUQzQkE7RUFBaUQsbUJBQUE7RUFBb0IsMEJBQUE7RUFBMkIsZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLGdCQUFBO0FDbUNoSTs7QURsQ0E7RUFBYyxhQUFBO0VBQWMsOEJBQUE7RUFBK0IsV0FBQTtBQ3dDM0Q7O0FEdkNBO0VBQWMsYUFBQTtBQzJDZDs7QUQxQ0E7RUFBVyxhQUFBO0VBQWMsOEJBQUE7RUFBK0IsbUJBQUE7RUFBb0IsVUFBQTtBQ2lENUU7O0FEaERBO0VBQW9CLGtCQUFBO0VBQW1CLHNCQUFBO0VBQXVCLGtCQUFBO0FDc0Q5RDs7QURyREE7RUFBd0IsYUFBQTtFQUFjLDJCQUFBO0VBQTRCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGtCQUFBO0FDNkR6Rzs7QUQ1REE7RUFBNkIsV0FBQTtFQUFZLGtCQUFBO0FDaUV6Qzs7QURoRUE7RUFBeUIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNxRTVDOztBRHBFQTtFQUFlLGlCQUFBO0FDd0VmOztBRHJFQTtFQUFzQyxXQUFBO0VBQVksWUFBQTtBQzBFbEQ7O0FEekVBO0VBQWlELGdCQUFBO0FDNkVqRDs7QUQ1RUE7RUFBa0MsWUFBQTtBQ2dGbEMiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2ltYWdlcy9pbWFnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QtaGVhZGVyLmdyZXktaGVhZGVye3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2NvbG9yOiAjMjIyO2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjc1N3JlbTtwYWRkaW5nLXJpZ2h0OiAxNnB4O31cclxuaW9uLWxpc3QtaGVhZGVyIGlvbi1idXR0b257bWFyZ2luOiAwO2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5pdGVtLWNhcmR7Ym94LXNoYWRvdzogMHB4IDhweCAyNHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7YmFja2dyb3VuZDogI0ZGRjt9XHJcbi5pdGVtLWhlYWRlcntkaXNwbGF5OiBmbGV4O3BhZGRpbmc6IDEwcHg7fVxyXG4uaXRlbS1oZWFkZXIgaW9uLWF2YXRhcnt3aWR0aDogMzRweDttaW4td2lkdGg6MzRweDtoZWlnaHQ6IDM0cHg7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG4uaXRlbS1oZWFkZXIgaW9uLWNhcmQtdGl0bGV7Zm9udC1zaXplOiAwLjkwcmVtO2NvbG9yOiAjMjYyNjI2O31cclxuLml0ZW0taGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlLCAucG9zdC10aW1lZGF0ZSBwe2ZvbnQtc2l6ZTogMC43NTdyZW07dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7bWFyZ2luLWJvdHRvbTogMDtjb2xvcjogIzY3Njc2Nztmb250LXdlaWdodDogNDAwO31cclxuLmhlYWRlci1yaWdodHtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjt3aWR0aDogMTAwJTt9XHJcbi5wb3N0LWNvbnRlbnR7cGFkZGluZzogMTBweDt9XHJcbi5pdGVtLXBvc3R7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6IGNlbnRlcjtwYWRkaW5nOiAwO31cclxuLml0ZW0tcG9zdCBpb24taXRlbXstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDstLW1pbi1oZWlnaHQ6IGF1dG87fVxyXG4uaXRlbS1wb3N0IGlvbi1pdGVtPmRpdntkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbi1yaWdodDogMTVweDtmb250LXNpemU6IDEuNDVyZW07fVxyXG4uaXRlbS1wb3N0IGlvbi1pdGVtIGlvbi1pY29ue2NvbG9yOiAjOTk5O2ZvbnQtc2l6ZTogMS40NXJlbTt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0gc3Bhbntmb250LXNpemU6IDEuMTVyZW07bWFyZ2luLWxlZnQ6IDNweDt9XHJcbi51c2VybmFtZS10ZXh0e21hcmdpbi1yaWdodDogM3B4O31cclxuXHJcbi8vIHNrZWxldG9uIGNzc1xyXG4uaXRlbS1wb3N0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e3dpZHRoOiAzMnB4O2hlaWdodDogMThweDt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZHttYXJnaW4tbGVmdDogNXB4O31cclxuLnBvc3QtY29udGVudCBwIGlvbi1za2VsZXRvbi10ZXh0e2hlaWdodDogMjZweDt9IiwiaW9uLWxpc3QtaGVhZGVyLmdyZXktaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuNzU3cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaXRlbS1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyNHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG5cbi5pdGVtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pdGVtLWhlYWRlciBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDM0cHg7XG4gIG1pbi13aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLml0ZW0taGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjMjYyNjI2O1xufVxuXG4uaXRlbS1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUsIC5wb3N0LXRpbWVkYXRlIHAge1xuICBmb250LXNpemU6IDAuNzU3cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLml0ZW0tcG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLml0ZW0tcG9zdCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvO1xufVxuXG4uaXRlbS1wb3N0IGlvbi1pdGVtID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbn1cblxuLml0ZW0tcG9zdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEuNDVyZW07XG59XG5cbi5pdGVtLXBvc3QgaW9uLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnVzZXJuYW1lLXRleHQge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLml0ZW0tcG9zdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5pdGVtLXBvc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wb3N0LWNvbnRlbnQgcCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGhlaWdodDogMjZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/images/images.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/profile/images/images.page.ts ***!
    \***********************************************/

  /*! exports provided: ImagesPage */

  /***/
  function srcAppProfileImagesImagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesPage", function () {
      return ImagesPage;
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
    /*! ./../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/settings.service */
    "./src/app/services/settings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");

    var ImagesPage = /*#__PURE__*/function () {
      function ImagesPage(peopleView, actRoute, settingsService, modalController, commonService, navCtrl) {
        _classCallCheck(this, ImagesPage);

        this.peopleView = peopleView;
        this.actRoute = actRoute;
        this.settingsService = settingsService;
        this.modalController = modalController;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.bookmark = true;
        this.currentPage = 0;
        this.gotData = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].imgUrl;
      }

      _createClass(ImagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          this.actRoute.paramMap.subscribe(function (params) {
            _this.consultID = params.get('userId');
          });
          this.peopleView.getUserData({
            'userId': this.consultID
          }).subscribe(function (data) {
            _this.userData = data;
            _this.userName = data.userData.user_name;
            _this.gotData = true;
          });
          this.peopleView.getMyPost('1', this.consultID, 1).subscribe(function (data) {
            _this.myPosts = data.posts.data;

            _this.myPosts.forEach(function (element, i) {
              _this.myPosts[i].count = element.post_likes.length;
              element.post_likes.filter(function (f) {
                if (f.user_id == _this.loginUserData.id) {
                  _this.myPosts[i].liked = true;
                }
              });
              element.post_bookmarks.filter(function (f) {
                if (f.user_id == _this.loginUserData.id) {
                  _this.myPosts[i].bookmarked = true;
                }
              });
            });

            console.log(_this.myPosts);
            _this.last_page = data.posts.last_page;
            _this.currentPage = data.posts.current_page;
            _this.total = data.posts.total;
            _this.gotData = true;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {} // ------------ laod data event ----------

      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this2 = this;

          setTimeout(function () {
            if (_this2.currentPage != 0) {
              _this2.peopleView.getMyPost('1,2', _this2.consultID, _this2.currentPage + 1).subscribe(function (data) {
                data.posts.data.forEach(function (element, i) {
                  element.count = element.post_likes.length;
                  element.post_likes.filter(function (f) {
                    console.log(f);

                    if (f.user_id == _this2.loginUserData.id) {
                      data.posts.data[i].liked = true;
                    }
                  });
                });
                _this2.myPosts = _this2.myPosts.concat(data.posts.data);
                _this2.last_page = data.posts.last_page;
                _this2.currentPage = data.posts.current_page;
                console.log(_this2.myPosts);
              });
            }

            event.target.complete();

            if (_this2.last_page == _this2.currentPage + 1) {
              event.target.disabled = true;
            }
          }, 10);
        } //-------------------- LIke event

      }, {
        key: "liked",
        value: function liked(postId, likeStat) {
          var _this3 = this;

          this.myPosts.forEach(function (element, i) {
            if (element.id == postId) {
              _this3.myPosts[i].liked = !likeStat;

              if (likeStat) {
                _this3.myPosts[i].count = _this3.myPosts[i].count - 1;
              } else {
                _this3.myPosts[i].count = _this3.myPosts[i].count + 1;
              }
            }
          });
          this.peopleView.likedPost({
            'postId': postId,
            'liked': likeStat
          }).subscribe(function (data) {
            if (data.status) {
              _this3.commonService.presentToast(data.status);
            }
          });
        } //-------------------- BOOkmarked event

      }, {
        key: "bookmarked",
        value: function bookmarked(postId, bmStat, post_type) {
          var _this4 = this;

          this.myPosts.forEach(function (element, i) {
            if (element.id == postId) {
              _this4.myPosts[i].bookmarked = !bmStat;
            }
          });
          this.peopleView.bookmarkPost({
            'postId': postId,
            'bookmark': bmStat,
            'post_type': post_type
          }).subscribe(function (data) {
            if (data.status) {
              _this4.commonService.presentToast(data.status);
            }
          });
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
                      component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                      componentProps: {
                        src: this.url + path
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
        } //------------------ -- GO BACK  ------------

      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return ImagesPage;
    }();

    ImagesPage.ctorParameters = function () {
      return [{
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"])], ImagesPage.prototype, "infiniteScroll", void 0);
    ImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./images.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/images/images.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./images.page.scss */
      "./src/app/profile/images/images.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], ImagesPage);
    /***/
  }
}]);
//# sourceMappingURL=profile-images-images-module-es5.js.map