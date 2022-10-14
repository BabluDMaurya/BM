(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-all-images-all-images-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/all-images/all-images.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/all-images/all-images.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons  class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{consultName}} Photos</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header> \r\n<ion-content class=\"main_content\">\r\n  <!-- <ion-list lines=\"none\" *ngFor=\"let post of myPosts; let i=index;\" class=\"photo-list\"> \r\n    <ion-item *ngFor = \"let imgPath of post\">\r\n      <img src=\"{{url}}{{imgPath}}\"  [routerLink]=\"['/tabs/post-preview' , i ]\">\r\n    </ion-item>     \r\n  </ion-list> -->\r\n    <span *ngFor=\"let post of myPosts; let i=index;\" class=\"photos-gallery\">\r\n      <span *ngFor = \"let imgPath of post?.image_post['0']['thumb_path']\">\r\n        <img src=\"{{url}}{{imgPath}}\"  [routerLink]=\"['/tabs/post-preview' , post?.id ]\">\r\n      </span>\r\n    </span>\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/profile/all-images/all-images-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/profile/all-images/all-images-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AllImagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllImagesPageRoutingModule", function() { return AllImagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-images.page */ "./src/app/profile/all-images/all-images.page.ts");




const routes = [
    {
        path: '',
        component: _all_images_page__WEBPACK_IMPORTED_MODULE_3__["AllImagesPage"]
    }
];
let AllImagesPageRoutingModule = class AllImagesPageRoutingModule {
};
AllImagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllImagesPageRoutingModule);



/***/ }),

/***/ "./src/app/profile/all-images/all-images.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/all-images/all-images.module.ts ***!
  \*********************************************************/
/*! exports provided: AllImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllImagesPageModule", function() { return AllImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-images-routing.module */ "./src/app/profile/all-images/all-images-routing.module.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _all_images_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-images.page */ "./src/app/profile/all-images/all-images.page.ts");








let AllImagesPageModule = class AllImagesPageModule {
};
AllImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxIonicImageViewerModule"],
            _all_images_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllImagesPageRoutingModule"]
        ],
        declarations: [_all_images_page__WEBPACK_IMPORTED_MODULE_7__["AllImagesPage"]]
    })
], AllImagesPageModule);



/***/ }),

/***/ "./src/app/profile/all-images/all-images.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/profile/all-images/all-images.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".photos-gallery {\n  display: block; }\n\n.photos-gallery > span {\n  display: block;\n  width: 33.3%;\n  float: left;\n  padding: 0 2px; }\n\n.photos-gallery img {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hbGwtaW1hZ2VzL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFxhbGwtaW1hZ2VzXFxhbGwtaW1hZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFnQixjQUFjLEVBQUE7O0FBQzlCO0VBQXFCLGNBQWM7RUFBQyxZQUFZO0VBQUMsV0FBVztFQUFDLGNBQWMsRUFBQTs7QUFDM0U7RUFBcUIsYUFBYTtFQUFDLFdBQVc7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2FsbC1pbWFnZXMvYWxsLWltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9zLWdhbGxlcnl7ZGlzcGxheTogYmxvY2s7fVxyXG4ucGhvdG9zLWdhbGxlcnk+c3BhbntkaXNwbGF5OiBibG9jazt3aWR0aDogMzMuMyU7ZmxvYXQ6IGxlZnQ7cGFkZGluZzogMCAycHg7fVxyXG4ucGhvdG9zLWdhbGxlcnkgaW1nIHtoZWlnaHQ6IDEwMHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvdmVyO30iXX0= */");

/***/ }),

/***/ "./src/app/profile/all-images/all-images.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/profile/all-images/all-images.page.ts ***!
  \*******************************************************/
/*! exports provided: AllImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllImagesPage", function() { return AllImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");









let AllImagesPage = class AllImagesPage {
    constructor(photoViewer, platform, navCtrl, actRoute, modalController, peopleView) {
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.modalController = modalController;
        this.peopleView = peopleView;
        this.myPosts = [];
        this.currentPage = 0;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].imgUrl;
    }
    ngOnInit() {
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        console.log(this.loginUserData);
        this.actRoute.paramMap.subscribe((params) => {
            this.consultID = params.get('userId');
            this.consultName = params.get('userName');
        });
        this.peopleView.getMyPost('1', this.loginUserData.id, 1).subscribe((data) => {
            data.posts.data.forEach(element => {
                this.myPosts.push(element);
            });
            this.last_page = data.posts.last_page;
            this.currentPage = data.posts.current_page;
            // this.gotData = true;
            console.log(this.myPosts);
        });
    }
    viewImg() {
        this.photoViewer.show('http://dev.betadelivery.com/helpyfolks/site/img/blog_img.jpg');
    }
    goBack() {
        this.navCtrl.back();
    }
    // ------------ laod data event ----------
    loadData(event) {
        if (this.currentPage != 0) {
            this.peopleView.getMyPost('1', this.consultID, (this.currentPage + 1)).subscribe((data) => {
                data.posts.data.forEach(element => {
                    this.myPosts.push(element);
                });
                this.last_page = data.posts.last_page;
                this.currentPage = data.posts.current_page;
            });
        }
        event.target.complete();
        if (this.last_page == (this.currentPage + 1)) {
            event.target.disabled = true;
        }
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.url + path);
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModalComponent"],
                componentProps: {
                    src: this.url + path,
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
};
AllImagesPage.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
], AllImagesPage.prototype, "infiniteScroll", void 0);
AllImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-images.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/all-images/all-images.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-images.page.scss */ "./src/app/profile/all-images/all-images.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"]])
], AllImagesPage);



/***/ })

}]);
//# sourceMappingURL=profile-all-images-all-images-module-es2015.js.map