(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-images-images-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/images/images.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/images/images.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Images</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n   <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gotData\">\r\n      <ion-list-header class=\"grey-header\" >{{userName}} have uploaded {{total}} posts <ion-button [routerLink]=\"['/tabs/all-images' , consultID , userName]\" size=\"small\" class=\"green\" *ngIf=\"total>0\">View All</ion-button></ion-list-header>\r\n      <ion-card class=\"item-card\"  *ngFor=\"let post of myPosts\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{userData?.userData?.bios?.profile_pic}}\" *ngIf=\"userData?.userData?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!userData?.userData?.bios?.profile_pic\">  \r\n          </ion-avatar>\r\n          <div class=\"header-right\">\r\n            <ion-label>\r\n              <ion-card-title>{{userName}}</ion-card-title>\r\n              <ion-card-subtitle>{{userData?.userData?.location}}</ion-card-subtitle>\r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\">\r\n              <p class=\"post-date\">{{post?.created_at}}</p>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['thumb_path']; let i=index;\">\r\n                <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-thumbnail>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div [routerLink]=\"['/comments',post?.id]\" *ngIf=\"userData?.userData?.comment_disable == 0\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>{{post?.total_comments.length}}</span>\r\n                </div>\r\n                <div  (click)=\"liked(post?.id,post?.liked)\"  class=\"{{ post?.liked ?'active':'inactive' }}\"  >\r\n                  <ion-icon  class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\" ></ion-icon> <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"userData?.userData?.id != loginUserData.id\">\r\n                <div (click)=\"bookmarked(post?.id , post?.bookmarked, 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{userData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n          </p>\r\n            <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\"><span\r\n                class=\"username-text text-green\">{{userData?.userData?.user_name}}</span>{{post['image_post']['0']?.description.substr(0, 29)}} <span (click)=\"expanded = post.id\"\r\n                class=\"text-green\">{{expanded==  post?.id ?'View less':'View more'}}</span></p>\r\n            <p *ngIf=\"expanded ==  post.id \"><span class=\"username-text text-green\">{{userData?.userData?.user_name}}</span>{{post['image_post']['0']?.description}} <span\r\n                (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post?.id ?'View less':'View more'}}</span></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n        </ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"!gotData\">\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/images/images-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/images/images-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ImagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageRoutingModule", function() { return ImagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.page */ "./src/app/profile/images/images.page.ts");




const routes = [
    {
        path: '',
        component: _images_page__WEBPACK_IMPORTED_MODULE_3__["ImagesPage"]
    }
];
let ImagesPageRoutingModule = class ImagesPageRoutingModule {
};
ImagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImagesPageRoutingModule);



/***/ }),

/***/ "./src/app/profile/images/images.module.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/images/images.module.ts ***!
  \*************************************************/
/*! exports provided: ImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function() { return ImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images-routing.module */ "./src/app/profile/images/images-routing.module.ts");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images.page */ "./src/app/profile/images/images.page.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");








let ImagesPageModule = class ImagesPageModule {
};
ImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _images_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagesPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"]
        ],
        declarations: [_images_page__WEBPACK_IMPORTED_MODULE_6__["ImagesPage"]]
    })
], ImagesPageModule);



/***/ }),

/***/ "./src/app/profile/images/images.page.scss":
/*!*************************************************!*\
  !*** ./src/app/profile/images/images.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header.grey-header {\n  text-transform: capitalize;\n  color: #222;\n  font-weight: 400;\n  font-size: 0.757rem;\n  padding-right: 16px; }\n\nion-list-header ion-button {\n  margin: 0;\n  border-radius: 4px; }\n\n.item-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF; }\n\n.item-header {\n  display: flex;\n  padding: 10px; }\n\n.item-header ion-avatar {\n  width: 34px;\n  min-width: 34px;\n  height: 34px;\n  margin-right: 8px; }\n\n.item-header ion-card-title {\n  font-size: 0.90rem;\n  color: #262626; }\n\n.item-header ion-card-subtitle, .post-timedate p {\n  font-size: 0.757rem;\n  text-transform: capitalize;\n  margin-bottom: 0;\n  color: #676767;\n  font-weight: 400; }\n\n.header-right {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n\n.post-content {\n  padding: 10px; }\n\n.item-post {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0; }\n\n.item-post ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: auto; }\n\n.item-post ion-item > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-right: 15px;\n  font-size: 1.45rem; }\n\n.item-post ion-item ion-icon {\n  color: #999;\n  font-size: 1.45rem; }\n\n.item-post ion-item span {\n  font-size: 1.15rem;\n  margin-left: 3px; }\n\n.username-text {\n  margin-right: 3px; }\n\n.item-post ion-item ion-skeleton-text {\n  width: 32px;\n  height: 18px; }\n\n.item-post ion-item ion-skeleton-text:last-child {\n  margin-left: 5px; }\n\n.post-content p ion-skeleton-text {\n  height: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9pbWFnZXMvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFxwcm9maWxlXFxpbWFnZXNcXGltYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsMEJBQTBCO0VBQUMsV0FBVztFQUFDLGdCQUFnQjtFQUFDLG1CQUFtQjtFQUFDLG1CQUFtQixFQUFBOztBQUMzSDtFQUEyQixTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3ZEO0VBQVcsK0NBQStDO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQzNFO0VBQWEsYUFBYTtFQUFDLGFBQWEsRUFBQTs7QUFDeEM7RUFBd0IsV0FBVztFQUFDLGVBQWM7RUFBQyxZQUFZO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ2pGO0VBQTRCLGtCQUFrQjtFQUFDLGNBQWMsRUFBQTs7QUFDN0Q7RUFBaUQsbUJBQW1CO0VBQUMsMEJBQTBCO0VBQUMsZ0JBQWdCO0VBQUMsY0FBYztFQUFDLGdCQUFnQixFQUFBOztBQUNoSjtFQUFjLGFBQWE7RUFBQyw4QkFBOEI7RUFBQyxXQUFXLEVBQUE7O0FBQ3RFO0VBQWMsYUFBYSxFQUFBOztBQUMzQjtFQUFXLGFBQWE7RUFBQyw4QkFBOEI7RUFBQyxtQkFBbUI7RUFBQyxVQUFVLEVBQUE7O0FBQ3RGO0VBQW9CLGtCQUFnQjtFQUFHLHNCQUFvQjtFQUFHLGtCQUFhLEVBQUE7O0FBQzNFO0VBQXdCLGFBQWE7RUFBQywyQkFBMkI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDM0g7RUFBNkIsV0FBVztFQUFDLGtCQUFrQixFQUFBOztBQUMzRDtFQUF5QixrQkFBa0I7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDNUQ7RUFBZSxpQkFBaUIsRUFBQTs7QUFHaEM7RUFBc0MsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDOUQ7RUFBaUQsZ0JBQWdCLEVBQUE7O0FBQ2pFO0VBQWtDLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW1hZ2VzL2ltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIuZ3JleS1oZWFkZXJ7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7Y29sb3I6ICMyMjI7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDAuNzU3cmVtO3BhZGRpbmctcmlnaHQ6IDE2cHg7fVxyXG5pb24tbGlzdC1oZWFkZXIgaW9uLWJ1dHRvbnttYXJnaW46IDA7Ym9yZGVyLXJhZGl1czogNHB4O31cclxuLml0ZW0tY2FyZHtib3gtc2hhZG93OiAwcHggOHB4IDI0cHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTtiYWNrZ3JvdW5kOiAjRkZGO31cclxuLml0ZW0taGVhZGVye2Rpc3BsYXk6IGZsZXg7cGFkZGluZzogMTBweDt9XHJcbi5pdGVtLWhlYWRlciBpb24tYXZhdGFye3dpZHRoOiAzNHB4O21pbi13aWR0aDozNHB4O2hlaWdodDogMzRweDttYXJnaW4tcmlnaHQ6IDhweDt9XHJcbi5pdGVtLWhlYWRlciBpb24tY2FyZC10aXRsZXtmb250LXNpemU6IDAuOTByZW07Y29sb3I6ICMyNjI2MjY7fVxyXG4uaXRlbS1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUsIC5wb3N0LXRpbWVkYXRlIHB7Zm9udC1zaXplOiAwLjc1N3JlbTt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTttYXJnaW4tYm90dG9tOiAwO2NvbG9yOiAjNjc2NzY3O2ZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4uaGVhZGVyLXJpZ2h0e2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3dpZHRoOiAxMDAlO31cclxuLnBvc3QtY29udGVudHtwYWRkaW5nOiAxMHB4O31cclxuLml0ZW0tcG9zdHtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczogY2VudGVyO3BhZGRpbmc6IDA7fVxyXG4uaXRlbS1wb3N0IGlvbi1pdGVtey0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwOy0tbWluLWhlaWdodDogYXV0bzt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0+ZGl2e2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOiBjZW50ZXI7bWFyZ2luLXJpZ2h0OiAxNXB4O2ZvbnQtc2l6ZTogMS40NXJlbTt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0gaW9uLWljb257Y29sb3I6ICM5OTk7Zm9udC1zaXplOiAxLjQ1cmVtO31cclxuLml0ZW0tcG9zdCBpb24taXRlbSBzcGFue2ZvbnQtc2l6ZTogMS4xNXJlbTttYXJnaW4tbGVmdDogM3B4O31cclxuLnVzZXJuYW1lLXRleHR7bWFyZ2luLXJpZ2h0OiAzcHg7fVxyXG5cclxuLy8gc2tlbGV0b24gY3NzXHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7d2lkdGg6IDMycHg7aGVpZ2h0OiAxOHB4O31cclxuLml0ZW0tcG9zdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxke21hcmdpbi1sZWZ0OiA1cHg7fVxyXG4ucG9zdC1jb250ZW50IHAgaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAyNnB4O30iXX0= */");

/***/ }),

/***/ "./src/app/profile/images/images.page.ts":
/*!***********************************************!*\
  !*** ./src/app/profile/images/images.page.ts ***!
  \***********************************************/
/*! exports provided: ImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPage", function() { return ImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");










let ImagesPage = class ImagesPage {
    constructor(peopleView, actRoute, settingsService, modalController, commonService, navCtrl) {
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
    ngOnInit() {
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        this.actRoute.paramMap.subscribe((params) => {
            this.consultID = params.get('userId');
        });
        this.peopleView.getUserData({ 'userId': this.consultID }).subscribe((data) => {
            this.userData = data;
            this.userName = data.userData.user_name;
            this.gotData = true;
        });
        this.peopleView.getMyPost('1', this.consultID, 1).subscribe((data) => {
            this.myPosts = data.posts.data;
            this.myPosts.forEach((element, i) => {
                this.myPosts[i].count = element.post_likes.length;
                element.post_likes.filter((f) => {
                    if (f.user_id == this.loginUserData.id) {
                        this.myPosts[i].liked = true;
                    }
                });
                element.post_bookmarks.filter((f) => {
                    if (f.user_id == this.loginUserData.id) {
                        this.myPosts[i].bookmarked = true;
                    }
                });
            });
            console.log(this.myPosts);
            this.last_page = data.posts.last_page;
            this.currentPage = data.posts.current_page;
            this.total = data.posts.total;
            this.gotData = true;
        });
    }
    ionViewWillEnter() {
    }
    // ------------ laod data event ----------
    loadData(event) {
        setTimeout(() => {
            if (this.currentPage != 0) {
                this.peopleView.getMyPost('1,2', this.consultID, (this.currentPage + 1)).subscribe((data) => {
                    data.posts.data.forEach((element, i) => {
                        element.count = element.post_likes.length;
                        element.post_likes.filter((f) => {
                            console.log(f);
                            if (f.user_id == this.loginUserData.id) {
                                data.posts.data[i].liked = true;
                            }
                        });
                    });
                    this.myPosts = this.myPosts.concat(data.posts.data);
                    this.last_page = data.posts.last_page;
                    this.currentPage = data.posts.current_page;
                    console.log(this.myPosts);
                });
            }
            event.target.complete();
            if (this.last_page == (this.currentPage + 1)) {
                event.target.disabled = true;
            }
        }, 10);
    }
    //-------------------- LIke event
    liked(postId, likeStat) {
        this.myPosts.forEach((element, i) => {
            if (element.id == postId) {
                this.myPosts[i].liked = !likeStat;
                if (likeStat) {
                    this.myPosts[i].count = (this.myPosts[i].count - 1);
                }
                else {
                    this.myPosts[i].count = (this.myPosts[i].count + 1);
                }
            }
        });
        this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    //-------------------- BOOkmarked event
    bookmarked(postId, bmStat, post_type) {
        this.myPosts.forEach((element, i) => {
            if (element.id == postId) {
                this.myPosts[i].bookmarked = !bmStat;
            }
        });
        this.peopleView.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.url + path);
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
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
    //------------------ -- GO BACK  ------------
    goBack() {
        this.navCtrl.back();
    }
};
ImagesPage.ctorParameters = () => [
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"])
], ImagesPage.prototype, "infiniteScroll", void 0);
ImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./images.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/images/images.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./images.page.scss */ "./src/app/profile/images/images.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], ImagesPage);



/***/ })

}]);
//# sourceMappingURL=profile-images-images-module-es2015.js.map