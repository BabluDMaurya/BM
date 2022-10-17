(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-editor-video-editor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-editor/video-editor.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-editor/video-editor.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      VideoEditor SDK\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">VideoEditor SDK</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div id=\"container\">\r\n  \r\n    <div>\r\n        <ion-button (click)=\"onButtonClick($event)\">Edit a sample video</ion-button>\r\n  \t</div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/video-editor/video-editor-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/video-editor/video-editor-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VideoEditorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEditorPageRoutingModule", function() { return VideoEditorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_editor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-editor.page */ "./src/app/video-editor/video-editor.page.ts");




const routes = [
    {
        path: '',
        component: _video_editor_page__WEBPACK_IMPORTED_MODULE_3__["VideoEditorPage"]
    }
];
let VideoEditorPageRoutingModule = class VideoEditorPageRoutingModule {
};
VideoEditorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoEditorPageRoutingModule);



/***/ }),

/***/ "./src/app/video-editor/video-editor.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/video-editor/video-editor.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoEditorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEditorPageModule", function() { return VideoEditorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_editor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-editor-routing.module */ "./src/app/video-editor/video-editor-routing.module.ts");
/* harmony import */ var _video_editor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-editor.page */ "./src/app/video-editor/video-editor.page.ts");







let VideoEditorPageModule = class VideoEditorPageModule {
};
VideoEditorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_editor_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoEditorPageRoutingModule"]
        ],
        declarations: [_video_editor_page__WEBPACK_IMPORTED_MODULE_6__["VideoEditorPage"]]
    })
], VideoEditorPageModule);



/***/ }),

/***/ "./src/app/video-editor/video-editor.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/video-editor/video-editor.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tZWRpdG9yL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHZpZGVvLWVkaXRvclxcdmlkZW8tZWRpdG9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlkZW8tZWRpdG9yL3ZpZGVvLWVkaXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGSjs7QURLRTtFQUNFLHFCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC92aWRlby1lZGl0b3IvdmlkZW8tZWRpdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/video-editor/video-editor.page.ts":
/*!***************************************************!*\
  !*** ./src/app/video-editor/video-editor.page.ts ***!
  \***************************************************/
/*! exports provided: VideoEditorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEditorPage", function() { return VideoEditorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoEditorPage = class VideoEditorPage {
    constructor() { }
    ngOnInit() {
    }
    vesdk_success(result) {
        if (result != null) {
            alert('VESDK result: ' + result.video);
        }
        else
            console.log('vesdk_success: result is null, the editor was canceled');
    }
    ;
    vesdk_failure(error) {
        console.log('setup error');
        console.log('vesdk_failure: ' + JSON.stringify(error));
    }
    ;
    onButtonClick(event) {
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
                categories: [
                    // Create sticker category with stickers
                    {
                        identifier: 'example_sticker_category_logos',
                        name: 'Logos',
                        thumbnailURI: VESDK.loadResource("www/assets/imgly-Logo.png"),
                        items: [
                            {
                                identifier: 'example_sticker_logos_ionic',
                                name: 'Ionic',
                                stickerURI: VESDK.loadResource('www/assets/icon/favicon.png'),
                            },
                            {
                                identifier: 'example_sticker_logos_imgly',
                                name: 'img.ly',
                                tintMode: "colorized",
                                stickerURI: VESDK.loadResource('www/assets/imgly-Logo.png'),
                            },
                        ]
                    },
                    // Reorder and use existing sticker categories
                    { identifier: 'imgly_sticker_category_animated' },
                    { identifier: 'imgly_sticker_category_emoticons' },
                    // Modify existing sticker category
                    {
                        identifier: 'imgly_sticker_category_shapes',
                        items: [
                            { identifier: 'imgly_sticker_shapes_badge_01' },
                            { identifier: 'imgly_sticker_shapes_arrow_02' },
                            { identifier: 'imgly_sticker_shapes_spray_03' },
                        ]
                    },
                ]
            }
        };
        VESDK.openEditor(this.vesdk_success, this.vesdk_failure, VESDK.loadResource('www/assets/videos/SampleVideo.mp4'), config);
    }
};
VideoEditorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-editor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-editor/video-editor.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-editor.page.scss */ "./src/app/video-editor/video-editor.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VideoEditorPage);



/***/ })

}]);
//# sourceMappingURL=video-editor-video-editor-module-es2015.js.map