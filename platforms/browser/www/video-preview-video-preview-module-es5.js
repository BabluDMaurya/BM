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


    __webpack_exports__["default"] = ".thumbnail-slider ion-slide {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.thumbnail-slider ion-slide ion-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  --min-height: 100%;\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail-slider ion-slide ion-radio {\n  margin-top: -50px;\n  background: #FFF;\n  border-radius: 50%; }\n\n.top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  background: #fff;\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.17); }\n\n.top-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0; }\n\n.video-preview-ion-list {\n  display: flex;\n  justify-content: space-around;\n  outline: none; }\n\n.video-preview-ion-list ion-item {\n  border: none;\n  outline: none;\n  --border-color: transparent; }\n\n.video-preview-ion-list ion-item ion-label {\n  border: none;\n  outline: none;\n  --border-color: transparent; }\n\n.text-green {\n  color: #2bbbad !important; }\n\n.videoContent {\n  padding: 10px 16px;\n  border-bottom: 4px solid #f1f1f1; }\n\n.videoContent h4 {\n    font-size: 18px;\n    font-weight: 500;\n    margin: 0; }\n\n.videoContent p {\n    font-size: 14px;\n    margin: 0;\n    margin-top: 10px;\n    margin-bottom: 0;\n    max-height: 81px;\n    overflow-y: auto; }\n\n.radio-list ion-radio {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL3ZpZGVvLXByZXZpZXcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxhZGQtdmlkZW9cXHZpZGVvLXByZXZpZXdcXHZpZGVvLXByZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQTRCLGtCQUFrQjtFQUFDLGtCQUFrQjtFQUFDLGdCQUFnQixFQUFBOztBQUNsRjtFQUFxQyxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsWUFBWTtFQUFDLGtCQUFhO0VBQU0seUJBQWE7RUFBYSxrQkFBZ0I7RUFBRyxzQkFBb0IsRUFBQTs7QUFDcks7RUFBa0IsV0FBVztFQUFDLFlBQVk7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBQzVEO0VBQXNDLGlCQUFpQjtFQUFDLGdCQUFnQjtFQUFDLGtCQUFrQixFQUFBOztBQUUzRjtFQUFZLGFBQVk7RUFBQyxZQUFXO0VBQUMsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsOEJBQTZCO0VBQUMsZ0JBQWU7RUFBMkcsK0NBQStDLEVBQUE7O0FBQzlRO0VBQWEsYUFBYTtFQUFDLDhCQUE4QjtFQUFDLG1CQUFtQjtFQUFDLFdBQVc7RUFBQyxnQkFBZ0IsRUFBQTs7QUFJMUc7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFZO0VBQUMsYUFBYTtFQUM3QiwyQkFBZSxFQUFBOztBQUVoQjtFQUNJLFlBQVk7RUFBQyxhQUFhO0VBQzdCLDJCQUFlLEVBQUE7O0FBRWhCO0VBQVkseUJBQXdCLEVBQUE7O0FBQ3BDO0VBQWMsa0JBQWtCO0VBQUMsZ0NBQWdDLEVBQUE7O0FBQWpFO0lBQ08sZUFBYztJQUFDLGdCQUFnQjtJQUFDLFNBQVMsRUFBQTs7QUFEaEQ7SUFFTSxlQUFlO0lBQUMsU0FBUztJQUFDLGdCQUFnQjtJQUFDLGdCQUFnQjtJQUFDLGdCQUFnQjtJQUFDLGdCQUFnQixFQUFBOztBQUVuRztFQUNjLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLXZpZGVvL3ZpZGVvLXByZXZpZXcvdmlkZW8tcHJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGV7cG9zaXRpb246IHJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDhweDtvdmVyZmxvdzogaGlkZGVuO31cclxuLnRodW1ibmFpbC1zbGlkZXIgaW9uLXNsaWRlIGlvbi1pdGVte3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7LS1taW4taGVpZ2h0OiAxMDAlOy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7fVxyXG4uc3dpcGVyLXNsaWRlIGltZ3t3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7b2JqZWN0LWZpdDogY292ZXI7fVxyXG4udGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGUgaW9uLXJhZGlve21hcmdpbi10b3A6IC01MHB4O2JhY2tncm91bmQ6ICNGRkY7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuXHJcbi50b3AtaGVhZGVye2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NTBweDttYXgtaGVpZ2h0OiA0OHB4O21pbi1oZWlnaHQ6IDQ4cHg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7LW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjE3KTtib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTt9XHJcbi50b3AtaGVhZGluZ3tkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczogY2VudGVyO3dpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206IDA7fVxyXG5cclxuXHJcbi8vIGhpdGVzaCBjc3Mgc3RydFxyXG4udmlkZW8tcHJldmlldy1pb24tbGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnZpZGVvLXByZXZpZXctaW9uLWxpc3QgaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7XHJcblx0LS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi52aWRlby1wcmV2aWV3LWlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHtcclxuICAgIGJvcmRlcjogbm9uZTtvdXRsaW5lOiBub25lOyAgICBcclxuXHQtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRleHQtZ3JlZW57Y29sb3I6IzJiYmJhZCAhaW1wb3J0YW50fVxyXG4udmlkZW9Db250ZW50e3BhZGRpbmc6IDEwcHggMTZweDtib3JkZXItYm90dG9tOiA0cHggc29saWQgI2YxZjFmMTtcclxuICAgIGg0e2ZvbnQtc2l6ZToxOHB4O2ZvbnQtd2VpZ2h0OiA1MDA7bWFyZ2luOiAwO31cclxuICAgIHB7Zm9udC1zaXplOiAxNHB4O21hcmdpbjogMDttYXJnaW4tdG9wOiAxMHB4O21hcmdpbi1ib3R0b206IDA7bWF4LWhlaWdodDogODFweDtvdmVyZmxvdy15OiBhdXRvO31cclxufVxyXG4ucmFkaW8tbGlzdHtcclxuICAgIGlvbi1yYWRpb3ttYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG59XHJcbiJdfQ== */";
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