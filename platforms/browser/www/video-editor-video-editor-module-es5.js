function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-editor-video-editor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/video-editor/video-editor.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-editor/video-editor.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoEditorVideoEditorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      VideoEditor SDK\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">VideoEditor SDK</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n  \n    <div>\n        <ion-button (click)=\"onButtonClick($event)\">Edit a sample video</ion-button>\n  \t</div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/video-editor/video-editor-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/video-editor/video-editor-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VideoEditorPageRoutingModule */

  /***/
  function srcAppVideoEditorVideoEditorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoEditorPageRoutingModule", function () {
      return VideoEditorPageRoutingModule;
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


    var _video_editor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video-editor.page */
    "./src/app/video-editor/video-editor.page.ts");

    var routes = [{
      path: '',
      component: _video_editor_page__WEBPACK_IMPORTED_MODULE_3__["VideoEditorPage"]
    }];

    var VideoEditorPageRoutingModule = function VideoEditorPageRoutingModule() {
      _classCallCheck(this, VideoEditorPageRoutingModule);
    };

    VideoEditorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideoEditorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/video-editor/video-editor.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/video-editor/video-editor.module.ts ***!
    \*****************************************************/

  /*! exports provided: VideoEditorPageModule */

  /***/
  function srcAppVideoEditorVideoEditorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoEditorPageModule", function () {
      return VideoEditorPageModule;
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


    var _video_editor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-editor-routing.module */
    "./src/app/video-editor/video-editor-routing.module.ts");
    /* harmony import */


    var _video_editor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video-editor.page */
    "./src/app/video-editor/video-editor.page.ts");

    var VideoEditorPageModule = function VideoEditorPageModule() {
      _classCallCheck(this, VideoEditorPageModule);
    };

    VideoEditorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _video_editor_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoEditorPageRoutingModule"]],
      declarations: [_video_editor_page__WEBPACK_IMPORTED_MODULE_6__["VideoEditorPage"]]
    })], VideoEditorPageModule);
    /***/
  },

  /***/
  "./src/app/video-editor/video-editor.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/video-editor/video-editor.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoEditorVideoEditorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%); }\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px; }\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0; }\n\n#container a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tZWRpdG9yL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFx2aWRlby1lZGl0b3JcXHZpZGVvLWVkaXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBRWpCLGNBQWM7RUFFZCxTQUFTLEVBQUE7O0FBR1g7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWVkaXRvci92aWRlby1lZGl0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/video-editor/video-editor.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/video-editor/video-editor.page.ts ***!
    \***************************************************/

  /*! exports provided: VideoEditorPage */

  /***/
  function srcAppVideoEditorVideoEditorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoEditorPage", function () {
      return VideoEditorPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VideoEditorPage = /*#__PURE__*/function () {
      function VideoEditorPage() {
        _classCallCheck(this, VideoEditorPage);
      }

      _createClass(VideoEditorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "vesdk_success",
        value: function vesdk_success(result) {
          if (result != null) {
            alert('VESDK result: ' + result.video);
          } else console.log('vesdk_success: result is null, the editor was canceled');
        }
      }, {
        key: "vesdk_failure",
        value: function vesdk_failure(error) {
          console.log('vesdk_failure: ' + JSON.stringify(error));
        }
      }, {
        key: "onButtonClick",
        value: function onButtonClick(event) {
          /* The license should have an extension like this:
             for iOS: "xxx.ios", example: vesdk_license.ios
             for Android: "xxx.android", example: vesdk_license.android
             then pass just the name without the extension to the
             `unlockWithLicense` function */
          // VESDK.unlockWithLicense('www/assets/pesdk_license');
          var config = {
            // Configure sticker tool
            sticker: {
              // Enable personal stickers
              personalStickers: true,
              // Configure stickers
              categories: [// Create sticker category with stickers
              {
                identifier: 'example_sticker_category_logos',
                name: 'Logos',
                thumbnailURI: VESDK.loadResource("www/assets/imgly-Logo.png"),
                items: [{
                  identifier: 'example_sticker_logos_ionic',
                  name: 'Ionic',
                  stickerURI: VESDK.loadResource('www/assets/icon/favicon.png')
                }, {
                  identifier: 'example_sticker_logos_imgly',
                  name: 'img.ly',
                  tintMode: "colorized",
                  stickerURI: VESDK.loadResource('www/assets/imgly-Logo.png')
                }]
              }, // Reorder and use existing sticker categories
              {
                identifier: 'imgly_sticker_category_animated'
              }, {
                identifier: 'imgly_sticker_category_emoticons'
              }, // Modify existing sticker category
              {
                identifier: 'imgly_sticker_category_shapes',
                items: [{
                  identifier: 'imgly_sticker_shapes_badge_01'
                }, {
                  identifier: 'imgly_sticker_shapes_arrow_02'
                }, {
                  identifier: 'imgly_sticker_shapes_spray_03'
                }]
              }]
            }
          };
          VESDK.openEditor(this.vesdk_success, this.vesdk_failure, VESDK.loadResource('www/assets/Skater.mp4'), config);
        }
      }]);

      return VideoEditorPage;
    }();

    VideoEditorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-editor.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/video-editor/video-editor.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-editor.page.scss */
      "./src/app/video-editor/video-editor.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VideoEditorPage);
    /***/
  }
}]);
//# sourceMappingURL=video-editor-video-editor-module-es5.js.map