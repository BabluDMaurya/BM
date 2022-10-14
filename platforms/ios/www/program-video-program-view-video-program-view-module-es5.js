function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-video-program-view-video-program-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramVideoProgramViewVideoProgramViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-title>Live</ion-title>  \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div id=\"rmpPlayer\"></div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: VideoProgramViewPageRoutingModule */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoProgramViewPageRoutingModule", function () {
      return VideoProgramViewPageRoutingModule;
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


    var _video_program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video-program-view.page */
    "./src/app/program/video-program-view/video-program-view.page.ts");

    var routes = [{
      path: '',
      component: _video_program_view_page__WEBPACK_IMPORTED_MODULE_3__["VideoProgramViewPage"]
    }];

    var VideoProgramViewPageRoutingModule = function VideoProgramViewPageRoutingModule() {
      _classCallCheck(this, VideoProgramViewPageRoutingModule);
    };

    VideoProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideoProgramViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view.module.ts ***!
    \*************************************************************************/

  /*! exports provided: VideoProgramViewPageModule */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoProgramViewPageModule", function () {
      return VideoProgramViewPageModule;
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


    var _video_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-program-view-routing.module */
    "./src/app/program/video-program-view/video-program-view-routing.module.ts");
    /* harmony import */


    var _video_program_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video-program-view.page */
    "./src/app/program/video-program-view/video-program-view.page.ts");

    var VideoProgramViewPageModule = function VideoProgramViewPageModule() {
      _classCallCheck(this, VideoProgramViewPageModule);
    };

    VideoProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _video_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoProgramViewPageRoutingModule"]],
      declarations: [_video_program_view_page__WEBPACK_IMPORTED_MODULE_6__["VideoProgramViewPage"]]
    })], VideoProgramViewPageModule);
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-list {\n  padding: 0;\n  margin: 10px 0; }\n\n.top-list ion-item {\n  --min-height: 85px;\n  background: #FFF;\n  box-shadow: none; }\n\n.top-list ion-item ion-label {\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem; }\n\n.users-list {\n  display: block;\n  width: 100%;\n  margin-bottom: 0; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: 100%;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background:transparent; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%; }\n\n.users-list ion-item span {\n  margin-left: -25px; }\n\n.users-list ion-item span:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -25px; }\n\n.list-info {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 6px;\n  margin-bottom: 0; }\n\n.list-info ion-item {\n  width: 48%;\n  box-shadow: 0.001em 5px 12px rgba(34, 35, 58, 0.09);\n  margin: auto;\n  margin-bottom: 8px; }\n\n.list-info ion-item img {\n  width: 24px;\n  margin-right: 8px; }\n\n.list-info ion-item ion-label {\n  font-size: 0.85rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS92aWRlby1wcm9ncmFtLXZpZXcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXHZpZGVvLXByb2dyYW0tdmlld1xcdmlkZW8tcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFVBQVU7RUFBQyxjQUFjLEVBQUE7O0FBQ25DO0VBQW1CLGtCQUFhO0VBQU0sZ0JBQWdCO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3ZFO0VBQTZCLGNBQWM7RUFBQyxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsU0FBUztFQUFDLDJCQUEyQjtFQUFDLGNBQWMsRUFBQTs7QUFDL0g7RUFBVSxXQUFXO0VBQUMsWUFBWTtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxVQUFVO0VBQUMsU0FBUztFQUFDLDJCQUEyQixFQUFBOztBQUN2TTtFQUFvQixjQUFjO0VBQUMsa0JBQWtCLEVBQUE7O0FBRXJEO0VBQVksY0FBYztFQUFDLFdBQVc7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDdkQ7RUFBcUIsa0JBQWE7RUFBTSxhQUFhO0VBQUMsV0FBVztFQUFDLGtCQUFnQjtFQUFHLHNCQUFvQjtFQUFHLHdCQUFhLEVBQUE7O0FBQ3pIO0VBQXlCLFdBQVc7RUFBQyxZQUFZO0VBQUMsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUFDLGtCQUFrQixFQUFBOztBQUN0RjtFQUEwQixrQkFBa0IsRUFBQTs7QUFDNUM7RUFBc0MsY0FBYyxFQUFBOztBQUNwRDtFQUFVLFdBQVU7RUFBQyxZQUFXO0VBQUMsZUFBZTtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQjtFQUFDLGtCQUFpQjtFQUFDLGFBQVk7RUFBQyx1QkFBc0I7RUFBQyxtQkFBa0I7RUFBQyxTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNMO0VBQVcsYUFBYTtFQUFDLGVBQWU7RUFBQyxZQUFZO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3RFO0VBQW9CLFVBQVU7RUFBQyxtREFBbUQ7RUFBQyxZQUFZO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ2xIO0VBQXdCLFdBQVc7RUFBQyxpQkFBaUIsRUFBQTs7QUFDckQ7RUFBOEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL3ZpZGVvLXByb2dyYW0tdmlldy92aWRlby1wcm9ncmFtLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1saXN0e3BhZGRpbmc6IDA7bWFyZ2luOiAxMHB4IDA7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW17LS1taW4taGVpZ2h0OiA4NXB4O2JhY2tncm91bmQ6ICNGRkY7Ym94LXNoYWRvdzogbm9uZTt9XHJcbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWx7cGFkZGluZy10b3A6IDA7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogOHB4O2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udG9wLWljb257d2lkdGg6IDQwcHg7aGVpZ2h0OiA0MHB4O2JhY2tncm91bmQ6ICNlOWY2ZjU7Ym9yZGVyLXJhZGl1czogNTAlO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtMTBweDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO31cclxuLnRvcC1pY29uIGlvbi1pY29uIHtjb2xvcjogIzI3YTY5YTtmb250LXNpemU6IDEuMjVyZW07fVxyXG5cclxuLnVzZXJzLWxpc3R7ZGlzcGxheTogYmxvY2s7d2lkdGg6IDEwMCU7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogYXV0bztkaXNwbGF5OiBmbGV4O3dpZHRoOiAxMDAlOy0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudH1cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1ne3dpZHRoOiA0MnB4O2hlaWdodDogNDJweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBzcGFue21hcmdpbi1sZWZ0OiAtMjVweDt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIHNwYW46Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udmlldy1hbGx7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDttYXgtd2lkdGg6IDQycHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZjFmMGYwO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46IDA7bWFyZ2luLWxlZnQ6IC0yNXB4O31cclxuXHJcbi5saXN0LWluZm97ZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7cGFkZGluZzogNnB4O21hcmdpbi1ib3R0b206IDA7fVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVte3dpZHRoOiA0OCU7Ym94LXNoYWRvdzogMC4wMDFlbSA1cHggMTJweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO21hcmdpbjogYXV0bzttYXJnaW4tYm90dG9tOiA4cHg7fVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGltZ3t3aWR0aDogMjRweDttYXJnaW4tcmlnaHQ6IDhweDt9XHJcbi5saXN0LWluZm8gaW9uLWl0ZW0gaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC44NXJlbTt9Il19 */";
    /***/
  },

  /***/
  "./src/app/program/video-program-view/video-program-view.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/program/video-program-view/video-program-view.page.ts ***!
    \***********************************************************************/

  /*! exports provided: VideoProgramViewPage */

  /***/
  function srcAppProgramVideoProgramViewVideoProgramViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoProgramViewPage", function () {
      return VideoProgramViewPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");

    var baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].ApiUrl;

    var VideoProgramViewPage = /*#__PURE__*/function () {
      function VideoProgramViewPage(navCtrl, actRoute, postService, commonService) {
        _classCallCheck(this, VideoProgramViewPage);

        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.postService = postService;
        this.commonService = commonService;
        this.elementID = 'rmpPlayer';
        this.rmp = null;
        this.storagePath = baseUrl + 'storage/';
      } //------------------ -- GO BACK  ------------


      _createClass(VideoProgramViewPage, [{
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        } // When home page comes into view we play our player

      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (this.rmp && this.rmp.getReady()) {
            this.rmp.play();
          }
        } // When we leave home page for another page we pause our player

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          if (this.rmp && this.rmp.getReady()) {
            this.rmp.pause();
          }
        } // When home page initially loads we configure and init our player 

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.commonService.presentLoader();
          this.postService.getVideoPostById({
            'videoId': this.videoId
          }).subscribe(function (data) {
            _this.postData = data.postData;
            _this.videoDataPath = _this.storagePath + _this.postData.video_path;
            _this.videoThumbPath = _this.storagePath + _this.postData.thumb_path;

            _this.postService.getAddByPGId({
              'pgId': _this.pgId
            }).subscribe(function (data) {
              _this.addData = data.addData;
              _this.ad_xml_path = _this.addData.ad_xml_path;

              _this.readiantMediaPlayer();
            });
          }, function (err) {
            _this.commonService.dismissLoader();

            _this.commonService.presentToast('Something went wrong.');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.actRoute.paramMap.subscribe(function (params) {
            _this2.videoId = params.get('videoId');
            _this2.pgId = params.get('pgId');
          });
        }
      }, {
        key: "readiantMediaPlayer",
        value: function readiantMediaPlayer() {
          this.src = {
            mp4: this.videoDataPath
          }; // Define ad-schedule
          // var schedule = {
          //   // Preroll
          //   preroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
          //   // Midroll
          //   midroll: [
          //     [30, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml'],
          //     [60, 'https://www.radiantmediaplayer.com/vast/tags/inline-linear-skippable.xml']
          //   ],
          //   // Postroll
          //   postroll: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml'
          // };

          this.settings = {
            licenseKey: 'c3BkbW9vanJ5YUAxNTk5MjA5',
            src: this.src,
            // width: 640,
            // height: 360,
            autoHeightMode: true,
            autoHeightModeRatio: 2.4,
            preload: 'auto',
            autoplay: true,
            pathToRmpFiles: 'assets/rmp/',
            automaticFullscreenOnLandscape: true,
            // hideControls: true,
            hideSeekBar: true,
            hideVolume: true,
            hideCentralPlayButton: true,
            crossorigin: "",
            //logo
            // logo: "../../../assets/images/logo.png",
            // logoPosition: 'topright',
            // logoWatermark: true,
            // if we need ads
            ads: true,
            // rmp-vast is generally preferred in Cordova-based apps to display ads
            // but if you are using Google ads servers (DFP, AdSense, AdX), the IMA SDK is required
            // see https://www.radiantmediaplayer.com/docs/latest/mobile-applications.html#mobile-video-ads
            adParser: 'rmp-vast',
            adTagUrl: this.ad_xml_path,
            //adTagUrl: 'https://ionicinto.wdipl.com/intoactive1714.xml',
            //adTagUrl: 'https://www.radiantmediaplayer.com/vast/tags/inline-linear.xml',
            // adSchedule: schedule,
            contentMetadata: {
              poster: [this.videoThumbPath]
            }
          };
          this.rmp = new RadiantMP(this.elementID);
          this.rmp.init(this.settings);
          this.commonService.dismissLoader(); // handle "tabs" in fullscreen mode

          var rmpContainer = document.getElementById(this.elementID);
          var FW = this.rmp.getFramework();
          var bottomTabBar;
          rmpContainer.addEventListener('ended', function () {
            //this.navCtrl.back();
            console.log('player ended');
          });
          rmpContainer.addEventListener('enterfullscreen', function () {
            if (!bottomTabBar) {
              bottomTabBar = document.querySelector('.tabbar.show-tabbar');
            }

            FW.addClass(bottomTabBar, 'rmp-no-display');
          });
          rmpContainer.addEventListener('exitfullscreen', function () {
            if (!bottomTabBar) {
              bottomTabBar = document.querySelector('.tabbar.show-tabbar');
            }

            FW.removeClass(bottomTabBar, 'rmp-no-display');
          });
        }
      }]);

      return VideoProgramViewPage;
    }();

    VideoProgramViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    VideoProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-program-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-program-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/video-program-view/video-program-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-program-view.page.scss */
      "./src/app/program/video-program-view/video-program-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])], VideoProgramViewPage);
    /***/
  }
}]);
//# sourceMappingURL=program-video-program-view-video-program-view-module-es5.js.map