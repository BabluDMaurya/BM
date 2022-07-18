function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-preview-video-preview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/video-preview/video-preview.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/video-preview/video-preview.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddVideoVideoPreviewVideoPreviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\"></ion-item>\r\n    <ion-item slot=\"center\"></ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-label class=\"text-green\" (click)=\"videoFormSubmit()\">Upload</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding\">  \r\n    <ion-row class=\"main_content no_footer\" >\r\n      <ion-col size=\"12\" class=\"ion-no-padding pt-10\">\r\n        \r\n        <video width=\"100%\" height=\"200px\" controls disablePictureInPicture controlsList=\"nodownload\" preload=\"metadata\" autoplay=\"autoplay\"  class=\"videoPlayer\">\r\n          <source src=\"{{filepath + videoDataPath}}\" type=\"video/mp4\" />\r\n        </video>\r\n        <div class=\"videoContent\">\r\n          <h4>{{videoTitle}}</h4>\r\n          <p>{{videoDescription}}</p> \r\n        </div>      \r\n        <form class=\"nutrition-form\" [formGroup]=\"VideoDetailsForm\">\r\n        <!-- <ion-form class=\"nutrition-form\" [formGroup]=\"videoFormCompelet\"> -->\r\n        <ion-list-header class=\"grey-header\">Select Thumbnail :</ion-list-header>\r\n        <ion-radio-group formControlName=\"videoThumb\">\r\n          <ion-slides [options]=\"sliderOpts\"  class=\"inner-slider thumbnail-slider ion-padding-horizontal\">\r\n            <ion-slide *ngFor=\"let thumb of videoThumbArray; let i = index;\">\r\n              <img src=\"{{filepath + thumb}}\" alt=\"Thumbnail Image\"/>\r\n              <ion-item>\r\n                <ion-radio value=\"{{thumb}}\" slot=\"start\" [checked]=\"i==0 ? true : false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-slide> \r\n            <ion-slide>\r\n              <ion-fab-button color=\"light\" size=\"small\">\r\n                <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-slide>               \r\n          </ion-slides>\r\n        </ion-radio-group>\r\n        <ion-list lines=\"none\" class=\"radio-list\">\r\n          <ion-radio-group formControlName=\"videoType\">\r\n            <ion-item>\r\n              <ion-label>Share With Everyone</ion-label>\r\n              <ion-radio slot=\"start\" value=\"1\" [checked]=\"true\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item (click)=\"userModal()\">\r\n              <ion-label>Share With Followers</ion-label>\r\n              <ion-radio  slot=\"start\" value=\"2\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Save As Draft</ion-label>\r\n              <ion-radio slot=\"start\" value=\"3\" ></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-list>\r\n      </form>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/add-video/video-preview/video-preview-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/add-video/video-preview/video-preview-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: VideoPreviewPageRoutingModule */

  /***/
  function srcAppAddVideoVideoPreviewVideoPreviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPreviewPageRoutingModule", function () {
      return VideoPreviewPageRoutingModule;
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


    var _video_preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video-preview.page */
    "./src/app/add-video/video-preview/video-preview.page.ts");

    var routes = [{
      path: '',
      component: _video_preview_page__WEBPACK_IMPORTED_MODULE_3__["VideoPreviewPage"]
    }];

    var VideoPreviewPageRoutingModule = function VideoPreviewPageRoutingModule() {
      _classCallCheck(this, VideoPreviewPageRoutingModule);
    };

    VideoPreviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideoPreviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-video/video-preview/video-preview.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/add-video/video-preview/video-preview.module.ts ***!
    \*****************************************************************/

  /*! exports provided: VideoPreviewPageModule */

  /***/
  function srcAppAddVideoVideoPreviewVideoPreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPreviewPageModule", function () {
      return VideoPreviewPageModule;
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


    var _video_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-preview-routing.module */
    "./src/app/add-video/video-preview/video-preview-routing.module.ts");
    /* harmony import */


    var _video_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video-preview.page */
    "./src/app/add-video/video-preview/video-preview.page.ts");

    var VideoPreviewPageModule = function VideoPreviewPageModule() {
      _classCallCheck(this, VideoPreviewPageModule);
    };

    VideoPreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _video_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPreviewPageRoutingModule"]],
      declarations: [_video_preview_page__WEBPACK_IMPORTED_MODULE_6__["VideoPreviewPage"]]
    })], VideoPreviewPageModule);
    /***/
  },

  /***/
  "./src/app/add-video/video-preview/video-preview.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/add-video/video-preview/video-preview.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddVideoVideoPreviewVideoPreviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".thumbnail-slider ion-slide {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.thumbnail-slider ion-slide ion-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  --min-height: 100%;\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.thumbnail-slider ion-slide ion-radio {\n  margin-top: -50px;\n  background: #FFF;\n  border-radius: 50%;\n}\n\n.top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  background: #fff;\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.17);\n}\n\n.top-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.video-preview-ion-list {\n  display: flex;\n  justify-content: space-around;\n  outline: none;\n}\n\n.video-preview-ion-list ion-item {\n  border: none;\n  outline: none;\n  --border-color: transparent;\n}\n\n.video-preview-ion-list ion-item ion-label {\n  border: none;\n  outline: none;\n  --border-color: transparent;\n}\n\n.text-green {\n  color: #2bbbad !important;\n}\n\n.videoContent {\n  padding: 10px 16px;\n  border-bottom: 4px solid #f1f1f1;\n}\n\n.videoContent h4 {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0;\n}\n\n.videoContent p {\n  font-size: 14px;\n  margin: 0;\n  margin-top: 10px;\n  margin-bottom: 0;\n  max-height: 81px;\n  overflow-y: auto;\n}\n\n.radio-list ion-radio {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL3ZpZGVvLXByZXZpZXcvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcYWRkLXZpZGVvXFx2aWRlby1wcmV2aWV3XFx2aWRlby1wcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXZpZGVvL3ZpZGVvLXByZXZpZXcvdmlkZW8tcHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNJbEU7O0FESEE7RUFBcUMsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUFtQix5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixzQkFBQTtBQ2FqSjs7QURaQTtFQUFrQixXQUFBO0VBQVksWUFBQTtFQUFhLG9CQUFBO0tBQUEsaUJBQUE7QUNrQjNDOztBRGpCQTtFQUFzQyxpQkFBQTtFQUFrQixnQkFBQTtFQUFpQixrQkFBQTtBQ3VCekU7O0FEckJBO0VBQVksYUFBQTtFQUFhLFlBQUE7RUFBWSxnQkFBQTtFQUFpQixnQkFBQTtFQUFpQiw4QkFBQTtFQUE4QixnQkFBQTtFQUEwSCwrQ0FBQTtBQ2lDL047O0FEaENBO0VBQWEsYUFBQTtFQUFjLDhCQUFBO0VBQStCLG1CQUFBO0VBQW9CLFdBQUE7RUFBWSxnQkFBQTtBQ3dDMUY7O0FEcENBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ3VDSjs7QURyQ0E7RUFDSSxZQUFBO0VBQWEsYUFBQTtFQUNoQiwyQkFBQTtBQ3lDRDs7QUR2Q0E7RUFDSSxZQUFBO0VBQWEsYUFBQTtFQUNoQiwyQkFBQTtBQzJDRDs7QUR6Q0E7RUFBWSx5QkFBQTtBQzZDWjs7QUQ1Q0E7RUFBYyxrQkFBQTtFQUFtQixnQ0FBQTtBQ2lEakM7O0FEaERJO0VBQUcsZUFBQTtFQUFlLGdCQUFBO0VBQWlCLFNBQUE7QUNxRHZDOztBRHBESTtFQUFFLGVBQUE7RUFBZ0IsU0FBQTtFQUFVLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLGdCQUFBO0FDNERuRjs7QUR6REk7RUFBVSxrQkFBQTtBQzZEZCIsImZpbGUiOiJzcmMvYXBwL2FkZC12aWRlby92aWRlby1wcmV2aWV3L3ZpZGVvLXByZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRle3Bvc2l0aW9uOiByZWxhdGl2ZTtib3JkZXItcmFkaXVzOiA4cHg7b3ZlcmZsb3c6IGhpZGRlbjt9XHJcbi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZSBpb24taXRlbXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlOy0tbWluLWhlaWdodDogMTAwJTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwO31cclxuLnN3aXBlci1zbGlkZSBpbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO29iamVjdC1maXQ6IGNvdmVyO31cclxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1yYWRpb3ttYXJnaW4tdG9wOiAtNTBweDtiYWNrZ3JvdW5kOiAjRkZGO2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcblxyXG4udG9wLWhlYWRlcntkaXNwbGF5OmZsZXg7aGVpZ2h0OjUwcHg7bWF4LWhlaWdodDogNDhweDttaW4taGVpZ2h0OiA0OHB4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTcpOy1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwwLDAsMC4xNyk7Ym94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7fVxyXG4udG9wLWhlYWRpbmd7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6IGNlbnRlcjt3aWR0aDogMTAwJTttYXJnaW4tYm90dG9tOiAwO31cclxuXHJcblxyXG4vLyBoaXRlc2ggY3NzIHN0cnRcclxuLnZpZGVvLXByZXZpZXctaW9uLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi52aWRlby1wcmV2aWV3LWlvbi1saXN0IGlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lO1xyXG5cdC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udmlkZW8tcHJldmlldy1pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWx7XHJcbiAgICBib3JkZXI6IG5vbmU7b3V0bGluZTogbm9uZTsgICAgXHJcblx0LS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi50ZXh0LWdyZWVue2NvbG9yOiMyYmJiYWQgIWltcG9ydGFudH1cclxuLnZpZGVvQ29udGVudHtwYWRkaW5nOiAxMHB4IDE2cHg7Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBoNHtmb250LXNpemU6MThweDtmb250LXdlaWdodDogNTAwO21hcmdpbjogMDt9XHJcbiAgICBwe2ZvbnQtc2l6ZTogMTRweDttYXJnaW46IDA7bWFyZ2luLXRvcDogMTBweDttYXJnaW4tYm90dG9tOiAwO21heC1oZWlnaHQ6IDgxcHg7b3ZlcmZsb3cteTogYXV0bzt9XHJcbn1cclxuLnJhZGlvLWxpc3R7XHJcbiAgICBpb24tcmFkaW97bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxufVxyXG4iLCIudGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLW1pbi1oZWlnaHQ6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b3AtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xufVxuXG4udG9wLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udmlkZW8tcHJldmlldy1pb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udmlkZW8tcHJldmlldy1pb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udmlkZW8tcHJldmlldy1pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzJiYmJhZCAhaW1wb3J0YW50O1xufVxuXG4udmlkZW9Db250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcbn1cbi52aWRlb0NvbnRlbnQgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cbi52aWRlb0NvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXgtaGVpZ2h0OiA4MXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmFkaW8tbGlzdCBpb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-video/video-preview/video-preview.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/add-video/video-preview/video-preview.page.ts ***!
    \***************************************************************/

  /*! exports provided: VideoPreviewPage */

  /***/
  function srcAppAddVideoVideoPreviewVideoPreviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPreviewPage", function () {
      return VideoPreviewPage;
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
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../add-program/user-modal/user-modal.component */
    "./src/app/add-program/user-modal/user-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].ApiUrl;

    var VideoPreviewPage = /*#__PURE__*/function () {
      function VideoPreviewPage(commonService, actRoute, postService, storage, fb, modalCtrl, router) {
        _classCallCheck(this, VideoPreviewPage);

        this.commonService = commonService;
        this.actRoute = actRoute;
        this.postService = postService;
        this.storage = storage;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.videoTitle = "Title";
        this.videoDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
        this.sliderOpts = {
          zoom: true,
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 5
        };
      }

      _createClass(VideoPreviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.filepath = baseUrl + 'storage/';
          this.actRoute.paramMap.subscribe(function (params) {
            _this.videoID = params.get('userData');
          });
          this.videoDataPath = localStorage.getItem('videoPath');
          this.videoDescription = localStorage.getItem('videoDescription');
          this.videoTitle = localStorage.getItem('videoTitle');
          this.videoThumbArray = localStorage.getItem('videoThumb').split(",");
          this.createForm();
        }
      }, {
        key: "userModal",
        value: function userModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        formData: this.VideoDetailsForm.value,
                        source: '1'
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (d) {
                      var ulist = '';
                      d.data.forEach(function (el) {
                        if (el.id) {
                          ulist += el.id + ',';

                          _this2.commonService.presentToast('User selection Successfull');
                        } else {
                          _this2.commonService.presentToast('User Not selected');

                          console.log('User Not Selected');
                        }
                      });

                      _this2.VideoDetailsForm.controls['userList'].setValue(ulist.slice(0, ulist.length - 1));
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
        key: "createForm",
        value: function createForm() {
          this.VideoDetailsForm = this.fb.group({
            videoThumb: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            videoType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            videoID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
          });
          this.VideoDetailsForm.controls['videoID'].setValue(this.videoID);
        }
      }, {
        key: "videoFormSubmit",
        value: function videoFormSubmit() {
          var _this3 = this;

          this.commonService.presentLoader();
          this.postService.updateVideoPostById(this.VideoDetailsForm.value).subscribe(function (data) {
            _this3.commonService.dismissLoader();

            if (data.status == "success") {
              localStorage.removeItem('videoPath');
              localStorage.removeItem('videoThumb');
              localStorage.removeItem('videoData');

              _this3.router.navigateByUrl('tabs/consultant-profile');
            } else {
              return _this3.commonService.presentAlert("Error", "Some thing wrong", ['Ok'], '');
            }
          });
        }
      }]);

      return VideoPreviewPage;
    }();

    VideoPreviewPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    VideoPreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-preview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/video-preview/video-preview.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-preview.page.scss */
      "./src/app/add-video/video-preview/video-preview.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], VideoPreviewPage);
    /***/
  }
}]);
//# sourceMappingURL=video-preview-video-preview-module-es5.js.map