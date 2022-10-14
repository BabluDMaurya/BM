(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-preview-video-preview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/video-preview/video-preview.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/video-preview/video-preview.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\"></ion-item>\r\n    <ion-item slot=\"center\"></ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-label class=\"text-green\" (click)=\"videoFormSubmit()\">Upload</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding\">  \r\n    <ion-row class=\"main_content no_footer\" >\r\n      <ion-col size=\"12\" class=\"ion-no-padding pt-10\">\r\n        \r\n        <video width=\"100%\" height=\"200px\" controls disablePictureInPicture controlsList=\"nodownload\" preload=\"metadata\" autoplay=\"autoplay\"  class=\"videoPlayer\">\r\n          <source src=\"{{filepath + videoDataPath}}\" type=\"video/mp4\" />\r\n        </video>\r\n        <div class=\"videoContent\">\r\n          <h4>{{videoTitle}}</h4>\r\n          <p>{{videoDescription}}</p> \r\n        </div>      \r\n        <form class=\"nutrition-form\" [formGroup]=\"VideoDetailsForm\">\r\n        <!-- <ion-form class=\"nutrition-form\" [formGroup]=\"videoFormCompelet\"> -->\r\n        <ion-list-header class=\"grey-header\">Select Thumbnail :</ion-list-header>\r\n        <ion-radio-group formControlName=\"videoThumb\">\r\n          <ion-slides [options]=\"sliderOpts\"  class=\"inner-slider thumbnail-slider ion-padding-horizontal\">\r\n            <ion-slide *ngFor=\"let thumb of videoThumbArray; let i = index;\">\r\n              <img src=\"{{filepath + thumb}}\" alt=\"Thumbnail Image\"/>\r\n              <ion-item>\r\n                <ion-radio value=\"{{thumb}}\" slot=\"start\" [checked]=\"i==0 ? true : false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-slide> \r\n            <ion-slide>\r\n              <ion-fab-button color=\"light\" size=\"small\">\r\n                <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-slide>               \r\n          </ion-slides>\r\n        </ion-radio-group>\r\n        <ion-list lines=\"none\" class=\"radio-list\">\r\n          <ion-radio-group formControlName=\"videoType\">\r\n            <ion-item>\r\n              <ion-label>Share With Everyone</ion-label>\r\n              <ion-radio slot=\"start\" value=\"1\" [checked]=\"true\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item (click)=\"userModal()\">\r\n              <ion-label>Share With Followers</ion-label>\r\n              <ion-radio  slot=\"start\" value=\"2\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Save As Draft</ion-label>\r\n              <ion-radio slot=\"start\" value=\"3\" ></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-list>\r\n      </form>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/add-video/video-preview/video-preview-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/add-video/video-preview/video-preview-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: VideoPreviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreviewPageRoutingModule", function() { return VideoPreviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-preview.page */ "./src/app/add-video/video-preview/video-preview.page.ts");




const routes = [
    {
        path: '',
        component: _video_preview_page__WEBPACK_IMPORTED_MODULE_3__["VideoPreviewPage"]
    }
];
let VideoPreviewPageRoutingModule = class VideoPreviewPageRoutingModule {
};
VideoPreviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoPreviewPageRoutingModule);



/***/ }),

/***/ "./src/app/add-video/video-preview/video-preview.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/add-video/video-preview/video-preview.module.ts ***!
  \*****************************************************************/
/*! exports provided: VideoPreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreviewPageModule", function() { return VideoPreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-preview-routing.module */ "./src/app/add-video/video-preview/video-preview-routing.module.ts");
/* harmony import */ var _video_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-preview.page */ "./src/app/add-video/video-preview/video-preview.page.ts");







let VideoPreviewPageModule = class VideoPreviewPageModule {
};
VideoPreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPreviewPageRoutingModule"]
        ],
        declarations: [_video_preview_page__WEBPACK_IMPORTED_MODULE_6__["VideoPreviewPage"]]
    })
], VideoPreviewPageModule);



/***/ }),

/***/ "./src/app/add-video/video-preview/video-preview.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/add-video/video-preview/video-preview.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thumbnail-slider ion-slide {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.thumbnail-slider ion-slide ion-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  --min-height: 100%;\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.thumbnail-slider ion-slide ion-radio {\n  margin-top: -50px;\n  background: #FFF;\n  border-radius: 50%; }\n\n.top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  background: #fff;\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.17); }\n\n.top-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0; }\n\n.video-preview-ion-list {\n  display: flex;\n  justify-content: space-around;\n  outline: none; }\n\n.video-preview-ion-list ion-item {\n  border: none;\n  outline: none;\n  --border-color: transparent; }\n\n.video-preview-ion-list ion-item ion-label {\n  border: none;\n  outline: none;\n  --border-color: transparent; }\n\n.text-green {\n  color: #2bbbad !important; }\n\n.videoContent {\n  padding: 10px 16px;\n  border-bottom: 4px solid #f1f1f1; }\n\n.videoContent h4 {\n    font-size: 18px;\n    font-weight: 500;\n    margin: 0; }\n\n.videoContent p {\n    font-size: 14px;\n    margin: 0;\n    margin-top: 10px;\n    margin-bottom: 0;\n    max-height: 81px;\n    overflow-y: auto; }\n\n.radio-list ion-radio {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvL3ZpZGVvLXByZXZpZXcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGFkZC12aWRlb1xcdmlkZW8tcHJldmlld1xcdmlkZW8tcHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsa0JBQWtCO0VBQUMsa0JBQWtCO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ2xGO0VBQXFDLGtCQUFrQjtFQUFDLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWE7RUFBTSx5QkFBYTtFQUFhLGtCQUFnQjtFQUFHLHNCQUFvQixFQUFBOztBQUNySztFQUFrQixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFDNUQ7RUFBc0MsaUJBQWlCO0VBQUMsZ0JBQWdCO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNGO0VBQVksYUFBWTtFQUFDLFlBQVc7RUFBQyxnQkFBZ0I7RUFBQyxnQkFBZ0I7RUFBQyw4QkFBNkI7RUFBQyxnQkFBZTtFQUEyRywrQ0FBK0MsRUFBQTs7QUFDOVE7RUFBYSxhQUFhO0VBQUMsOEJBQThCO0VBQUMsbUJBQW1CO0VBQUMsV0FBVztFQUFDLGdCQUFnQixFQUFBOztBQUkxRztFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVk7RUFBQyxhQUFhO0VBQzdCLDJCQUFlLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUFDLGFBQWE7RUFDN0IsMkJBQWUsRUFBQTs7QUFFaEI7RUFBWSx5QkFBd0IsRUFBQTs7QUFDcEM7RUFBYyxrQkFBa0I7RUFBQyxnQ0FBZ0MsRUFBQTs7QUFBakU7SUFDTyxlQUFjO0lBQUMsZ0JBQWdCO0lBQUMsU0FBUyxFQUFBOztBQURoRDtJQUVNLGVBQWU7SUFBQyxTQUFTO0lBQUMsZ0JBQWdCO0lBQUMsZ0JBQWdCO0lBQUMsZ0JBQWdCO0lBQUMsZ0JBQWdCLEVBQUE7O0FBRW5HO0VBQ2Msa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtdmlkZW8vdmlkZW8tcHJldmlldy92aWRlby1wcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZXtwb3NpdGlvbjogcmVsYXRpdmU7Ym9yZGVyLXJhZGl1czogOHB4O292ZXJmbG93OiBoaWRkZW47fVxyXG4udGh1bWJuYWlsLXNsaWRlciBpb24tc2xpZGUgaW9uLWl0ZW17cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTstLW1pbi1oZWlnaHQ6IDEwMCU7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDt9XHJcbi5zd2lwZXItc2xpZGUgaW1ne3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtvYmplY3QtZml0OiBjb3Zlcjt9XHJcbi50aHVtYm5haWwtc2xpZGVyIGlvbi1zbGlkZSBpb24tcmFkaW97bWFyZ2luLXRvcDogLTUwcHg7YmFja2dyb3VuZDogI0ZGRjtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG5cclxuLnRvcC1oZWFkZXJ7ZGlzcGxheTpmbGV4O2hlaWdodDo1MHB4O21heC1oZWlnaHQ6IDQ4cHg7bWluLWhlaWdodDogNDhweDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTstbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMTcpO2JveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTcpO31cclxuLnRvcC1oZWFkaW5ne2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOiBjZW50ZXI7d2lkdGg6IDEwMCU7bWFyZ2luLWJvdHRvbTogMDt9XHJcblxyXG5cclxuLy8gaGl0ZXNoIGNzcyBzdHJ0XHJcbi52aWRlby1wcmV2aWV3LWlvbi1saXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4udmlkZW8tcHJldmlldy1pb24tbGlzdCBpb24taXRlbSB7XHJcbiAgICBib3JkZXI6IG5vbmU7b3V0bGluZTogbm9uZTtcclxuXHQtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnZpZGVvLXByZXZpZXctaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse1xyXG4gICAgYm9yZGVyOiBub25lO291dGxpbmU6IG5vbmU7ICAgIFxyXG5cdC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udGV4dC1ncmVlbntjb2xvcjojMmJiYmFkICFpbXBvcnRhbnR9XHJcbi52aWRlb0NvbnRlbnR7cGFkZGluZzogMTBweCAxNnB4O2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgaDR7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6IDUwMDttYXJnaW46IDA7fVxyXG4gICAgcHtmb250LXNpemU6IDE0cHg7bWFyZ2luOiAwO21hcmdpbi10b3A6IDEwcHg7bWFyZ2luLWJvdHRvbTogMDttYXgtaGVpZ2h0OiA4MXB4O292ZXJmbG93LXk6IGF1dG87fVxyXG59XHJcbi5yYWRpby1saXN0e1xyXG4gICAgaW9uLXJhZGlve21hcmdpbi1yaWdodDogMTBweDt9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/add-video/video-preview/video-preview.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/add-video/video-preview/video-preview.page.ts ***!
  \***************************************************************/
/*! exports provided: VideoPreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPreviewPage", function() { return VideoPreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../add-program/user-modal/user-modal.component */ "./src/app/add-program/user-modal/user-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");










const baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].ApiUrl;
let VideoPreviewPage = class VideoPreviewPage {
    constructor(commonService, actRoute, postService, storage, fb, modalCtrl, router) {
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
    ngOnInit() {
        this.filepath = baseUrl + 'storage/';
        this.actRoute.paramMap.subscribe((params) => {
            this.videoID = params.get('userData');
        });
        this.videoDataPath = localStorage.getItem('videoPath');
        this.videoDescription = localStorage.getItem('videoDescription');
        this.videoTitle = localStorage.getItem('videoTitle');
        this.videoThumbArray = localStorage.getItem('videoThumb').split(",");
        this.createForm();
    }
    userModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_program_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"],
                cssClass: 'fullModal',
                componentProps: { formData: this.VideoDetailsForm.value, source: '1' }
            });
            modal.onDidDismiss().then((d) => {
                let ulist = '';
                d.data.forEach(el => {
                    if (el.id) {
                        ulist += el.id + ',';
                        this.commonService.presentToast('User selection Successfull');
                    }
                    else {
                        this.commonService.presentToast('User Not selected');
                        console.log('User Not Selected');
                    }
                });
                this.VideoDetailsForm.controls['userList'].setValue(ulist.slice(0, ulist.length - 1));
            });
            return yield modal.present();
        });
    }
    createForm() {
        this.VideoDetailsForm = this.fb.group({
            videoThumb: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            videoType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            videoID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
        this.VideoDetailsForm.controls['videoID'].setValue(this.videoID);
    }
    videoFormSubmit() {
        this.commonService.presentLoader();
        this.postService.updateVideoPostById(this.VideoDetailsForm.value).subscribe((data) => {
            this.commonService.dismissLoader();
            if (data.status == "success") {
                localStorage.removeItem('videoPath');
                localStorage.removeItem('videoThumb');
                localStorage.removeItem('videoData');
                this.router.navigateByUrl('tabs/consultant-profile');
            }
            else {
                return this.commonService.presentAlert("Error", "Some thing wrong", ['Ok'], '');
            }
        });
    }
};
VideoPreviewPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
VideoPreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-preview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-video/video-preview/video-preview.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-preview.page.scss */ "./src/app/add-video/video-preview/video-preview.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], VideoPreviewPage);



/***/ })

}]);
//# sourceMappingURL=video-preview-video-preview-module-es2015.js.map