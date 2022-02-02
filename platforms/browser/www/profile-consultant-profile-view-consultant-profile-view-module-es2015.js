(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-consultant-profile-view-consultant-profile-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-label>Send a Message</ion-label>\r\n  <ion-textarea class=\"form-control\" placeholder=\"Enter user name here...\"></ion-textarea>\r\n  <div class=\"mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green ion-float-right\" (click)=\"eventFromPopover()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item>\r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label *ngIf=\"!profileData?.userData?.bios?.display_name\">{{profileData?.userData?.user_name}}</ion-label>\r\n      <ion-label *ngIf=\"profileData?.userData?.bios?.display_name\">{{profileData?.userData?.bios?.display_name}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <a (click)=\"notificationModal()\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\r\n          <span class=\"\"></span>\r\n        </a>\r\n        <a (click)=\"userFollowers()\" class=\"follow-people\">\r\n          <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/settings']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-settings\" md=\"md-settings\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div class=\"sec-banner\">\r\n          <div class=\"top-banner\" > \r\n            <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"backgroundPicUrl+profileData?.userData?.bios?.profile_background_image\">\r\n          </div>\r\n          <div class=\"profile-heading\">\r\n            <div class=\"img-profile\">\r\n              <img [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\">              \r\n            </div>\r\n            <div class=\"tagline\">\r\n              <!-- <a>\r\n                <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon> rushabh_parekh\r\n              </a> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"user-name\">\r\n            <ion-text> \r\n              <h6>{{profileData?.userData?.user_name}}</h6>\r\n              <p>{{profileData?.userData?.additional?.tag_line}}</p>\r\n            </ion-text>\r\n          </div>\r\n          <ion-fab class=\"share-btn\">\r\n            <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n              <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding mb-10\">\r\n        <ion-list lines=\"none\" class=\"top-list\">\r\n          <ion-item (click)=\"notification1()\">\r\n            <img src=\"../../assets/images/info.svg\" />\r\n            <ion-label>Info</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"followUp(followStatus)\" id=\"followStatus\">\r\n            <img [src]=\"followStatus == 'UNFOLLOW' ? '../../assets/images/unfollow.svg':'../../assets/images/follow.svg'\" />\r\n            <!-- <ion-label>{{ follow ?'Following':'Follow' }}</ion-label> -->\r\n            <ion-label>{{followStatus}}</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"chatPopup()\">\r\n            <img src=\"../../assets/images/comment.svg\" />\r\n            <ion-label>Chat</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"reportPopup()\">\r\n            <img src=\"../../assets/images/alert.svg\" />\r\n            <ion-label>Report</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"blockUser(block)\">\r\n            <img src=\"../../assets/images/blocks.svg\" />\r\n            <ion-label>{{ block ?'Unblock':'Block' }}</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row class=\" mb-10\" *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"photo-heading ion-padding-horizontal\">\r\n        <ion-text>Photo's</ion-text>\r\n        <ion-button size=\"small\" *ngIf=\"profileData?.userData && previewImage.length>0\"   [routerLink]=\"['/tabs/all-images',profileData?.userData?.id , profileData?.userData?.user_name]\" >See More</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-slides [options]=\"sliderOpts\" class=\"profile-slider\">\r\n          <ion-slide *ngFor=\"let preview of previewImage\">\r\n            <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+preview\" [routerLink]=\"['/tabs/post-preview' , preview?.id ]\"/> \r\n          </ion-slide>  \r\n          <ion-slide *ngIf=\"previewImage.length>0\">\r\n            <ion-fab-button color=\"light\" size=\"small\"  [routerLink]=\"['/tabs/all-images',profileData?.userData?.id , profileData?.userData?.user_name]\">\r\n              <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <div *ngIf=\"previewImage.length==0\" class=\"no-data photoNodata\">\r\n          <p>No post added yet!!!</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-list class=\"ion-no-padding\">\r\n          <ion-item-group>\r\n            <ion-item-divider lines=\"none\" sticky>\r\n              <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n                <ion-segment class=\"ion-no-padding\" [(ngModel)]=\"consultantProfile\">\r\n                  <ion-segment-button value=\"aboutInfo\" (click)=\"videoTabsScroll()\">\r\n                    <ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\r\n                    <span>Videos</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"posts\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"ios-copy\" md=\"md-copy\"></ion-icon>\r\n                    <span>Posts</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"upcoming\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"md-calendar\" md=\"md-calendar\"></ion-icon>\r\n                    <span>Upcoming</span>\r\n                  </ion-segment-button>\r\n                </ion-segment>\r\n              </ion-toolbar>\r\n            </ion-item-divider>\r\n            <ion-item-sliding>\r\n              <div [ngSwitch]=\"consultantProfile\">\r\n                <ion-list class=\"ion-no-padding\" *ngSwitchCase=\"'aboutInfo'\">\r\n                  <div [ngSwitch]=\"videotabs\"> \r\n                    <div class=\"no-data\" *ngIf=\"!myPosts || myPosts.length === 0\">\r\n                      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                      <p>No post added yet.</p>\r\n                    </div>                  \r\n                    <div *ngFor=\"let post of myPosts\">\r\n                        <ion-card class=\"item-card\">                        \r\n                          <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.posts_id,'']\">\r\n                            <ion-avatar>\r\n                              <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                              <img src=\"{{url}}images/user.jpg\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                            </ion-avatar>\r\n                            <div class=\"header-right\">\r\n                              <ion-label>\r\n                                <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n                                <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n                              </ion-label>\r\n                              <ion-text class=\"post-timedate\">\r\n                                <p class=\"post-date\">{{post?.created_at}}</p>\r\n                              </ion-text>\r\n                            </div>\r\n                          </ion-card-header>\r\n                          \r\n                          <ion-card-content class=\"ion-no-padding item-content\">\r\n                            <ion-thumbnail class=\"post-image\" [routerLink]=\"['/videos',post.posts_id,'']\" *ngIf=\"post.thumb_path\">\r\n                              <img src=\"{{storagePath + post.thumb_path}}\" alt=\"Thumnail Path\" />\r\n                              </ion-thumbnail>\r\n                              <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>  \r\n                            <div class=\"post-content\">\r\n                              <ion-list class=\"item-post\" lines=\"none\">\r\n                                <ion-item>\r\n                                  <div [routerLink]=\"['/comments',post.id]\" *ngIf=\" !post?.disable_comment\">                               \r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                                    <span>{{post.total_comments.length}}</span>                              \r\n                                  </div>\r\n                                  <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                    <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>{{post?.count}}</span>\r\n                                  </div>\r\n                                </ion-item>                                                                                  \r\n                              </ion-list>\r\n                              <!-- -------  Description post with  post type = 2 -->\r\n                              <div *ngIf=\"post?.post_type==2\">\r\n                                <p class=\"mb-10\" *ngIf=\"post.description && post.description.length < 30\"><span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description.substr(0, 100)}}\r\n                                </p>\r\n                                <p class=\"mb-10\" *ngIf=\"post.description && post.description.length > 29 && expanded !=  post.id\">\r\n                                  <span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description.substr(0, 29)}}\r\n                                  <span (click)=\"expanded = post.id\"\r\n                                    class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                                <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description}}\r\n                                  <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              </div>\r\n                              <!-- ------- ends here   post type = 2 -->                              \r\n                            </div>\r\n                          </ion-card-content>                                                 \r\n                        </ion-card>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadVideoData($event)\">\r\n                      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n                      </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                  </div>\r\n                </ion-list>\r\n                <ion-list class=\"ion-no-padding\" *ngSwitchCase=\"'posts'\">\r\n                  <app-post-tab [userData]=\"profileData\"></app-post-tab>\r\n                </ion-list>\r\n                <ion-list *ngSwitchCase=\"'upcoming'\" lines=\"none\">\r\n                  <app-upcoming-tab ></app-upcoming-tab>\r\n                  <!-- <ion-item class=\"upcoming-block\" *ngFor=\"let cardupcoming of [].constructor(10)\">\r\n                    <ion-avatar slot=\"start\">\r\n                      <img\r\n                        src=\"https://intoactive.wdipl.com/user-upload/3/profile-image/app/3_Virajwdi_20190809_superman-moustache-justice-league-600x321.jpg\">\r\n                    </ion-avatar>\r\n                    <ion-label>\r\n                      <div>\r\n                        <h3>Lorem ipsum</h3>\r\n                        <p>Closed Group</p>\r\n                        <p>By: <span>Virajwdi</span></p>\r\n                        <p class=\"countdown\">Countdown <a>3h 6m 13s </a></p>\r\n                      </div>\r\n                      <div class=\"action-links\">\r\n                        <a (click)=\"nutritionModal()\">\r\n                          <ion-icon ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n                        </a>\r\n                      </div>\r\n                    </ion-label>\r\n                  </ion-item> -->\r\n                </ion-list>\r\n              </div>\r\n            </ion-item-sliding>\r\n          </ion-item-group>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- <app-fixed-footer></app-fixed-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-label>Report This</ion-label>\r\n  <div class=\"mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green ion-float-right\" (click)=\"eventFromPopover()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea.form-control {\n  border-radius: 0;\n  height: auto;\n  border-width: 0 0 1px 0;\n  padding: 0;\n  border-bottom: 1px solid #e4e4e4; }\n\nion-textarea.form-control textarea {\n  padding: 0; }\n\n.btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #26a69a;\n  --color-activated: #26a69a;\n  --color-focused: #26a69a;\n  color: #26a69a;\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9jaGF0LXBvcHVwL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFxjb25zdWx0YW50LXByb2ZpbGUtdmlld1xcY2hhdC1wb3B1cFxcY2hhdC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUEwQixnQkFBZ0I7RUFBQyxZQUFZO0VBQUMsdUJBQXVCO0VBQUMsVUFBVTtFQUFDLGdDQUFnQyxFQUFBOztBQUMzSDtFQUFtQyxVQUFVLEVBQUE7O0FBQzdDO0VBQUssdUJBQXVCO0VBQUMsZ0JBQWdCO0VBQUMsVUFBUztFQUFDLG1DQUF1QjtFQUFhLGtCQUFhO0VBQU0seUJBQWE7RUFBYSxpQ0FBcUI7RUFBYSwrQkFBbUI7RUFBYSxnQkFBUTtFQUFTLDBCQUFrQjtFQUFTLHdCQUFnQjtFQUFTLGNBQWM7RUFBQyxrQkFBZ0I7RUFBRyxnQkFBYyxFQUFBOztBQUdoVTtFQUFPLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9jaGF0LXBvcHVwL2NoYXQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEuZm9ybS1jb250cm9se2JvcmRlci1yYWRpdXM6IDA7aGVpZ2h0OiBhdXRvO2JvcmRlci13aWR0aDogMCAwIDFweCAwO3BhZGRpbmc6IDA7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7fVxyXG5pb24tdGV4dGFyZWEuZm9ybS1jb250cm9sIHRleHRhcmVhe3BhZGRpbmc6IDA7fVxyXG4uYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICMyNmE2OWE7LS1jb2xvci1hY3RpdmF0ZWQ6ICMyNmE2OWE7LS1jb2xvci1mb2N1c2VkOiAjMjZhNjlhO2NvbG9yOiAjMjZhNjlhOy0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwO31cclxuLy8gLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4vLyAuYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9Il19 */");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChatPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPopupComponent", function() { return ChatPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ChatPopupComponent = class ChatPopupComponent {
    constructor(events, navParams, popoverController) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.page = this.navParams.get('data');
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
ChatPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ChatPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-popup.component.scss */ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ChatPopupComponent);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConsultantProfileViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPageRoutingModule", function() { return ConsultantProfileViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultant-profile-view.page */ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts");




const routes = [
    {
        path: '',
        component: _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_3__["ConsultantProfileViewPage"]
    }
];
let ConsultantProfileViewPageRoutingModule = class ConsultantProfileViewPageRoutingModule {
};
ConsultantProfileViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultantProfileViewPageRoutingModule);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ConsultantProfileViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPageModule", function() { return ConsultantProfileViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultant_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultant-profile-view-routing.module */ "./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts");
/* harmony import */ var _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultant-profile-view.page */ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts");
/* harmony import */ var _consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consultant-profile-view/chat-popup/chat-popup.component */ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts");
/* harmony import */ var _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../consultant-profile-view/report-popup/report-popup.component */ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts");
/* harmony import */ var _components_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components.modules */ "./src/app/profile/components.modules.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");











// import { FixedFooterComponent } from '../fixed-footer/fixed-footer.component';
let ConsultantProfileViewPageModule = class ConsultantProfileViewPageModule {
};
ConsultantProfileViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_modules__WEBPACK_IMPORTED_MODULE_9__["ComponentModule"],
            _consultant_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultantProfileViewPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"]
        ],
        declarations: [_consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_6__["ConsultantProfileViewPage"], _consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__["ChatPopupComponent"], _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
        entryComponents: [_consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__["ChatPopupComponent"], _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
    })
], ConsultantProfileViewPageModule);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-profile-bg {\n  height: 185px;\n  background: url('demo3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 15px; }\n\n.profile-content {\n  position: relative;\n  top: -50px;\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  padding-left: 10px; }\n\n.profile-content a {\n  color: #777777;\n  font-size: 0.85rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.profile-content ion-text {\n  position: relative;\n  top: 35px;\n  left: 100px; }\n\n.user-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: 0px 0px 15px 0px rgba(82, 82, 82, 0.55);\n  margin-bottom: 10px;\n  position: absolute;\n  top: 0; }\n\n.user-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(39, 166, 154, 0.07);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.user-icon img {\n  width: 16px;\n  height: 16px; }\n\n.top-list {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 0; }\n\n.top-list ion-item {\n  text-align: center;\n  --min-height: 36px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  width: 25%; }\n\n.top-list ion-item ion-label {\n  font-size: 0.75rem;\n  margin: 0;\n  padding-top: 20px; }\n\n.top-list img {\n  width: 18px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.sec-notification {\n  margin: 10px 0; }\n\n.subprofile_tabs {\n  --border-width: 0; }\n\n.subprofile_tabs ion-segment-button {\n    border-radius: 30px;\n    margin: 0 5px;\n    background: rgba(58, 174, 163, 0.11);\n    min-height: 38px;\n    color: #000;\n    text-transform: capitalize;\n    letter-spacing: 0; }\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n    background: #27a69a;\n    --indicator-color-checked: #27a69a;\n    color: #FFF; }\n\n.subprofile_tabs ion-segment-button.segment-button-checked span {\n    color: #FFF; }\n\n.subprofile_tabs ion-label {\n    margin: 0; }\n\n.share-btn {\n  bottom: 40px;\n  position: absolute;\n  right: 0;\n  --background:#27a69a;\n  --background-activated:#27a69a;\n  --background-focused:#27a69a;\n  --background-hover:#27a69a;\n  --ion-color-shade:#27a69a!important;\n  --ion-color-tint:#27a69a!important;\n  --ion-color-base:rgba(0, 0, 0, 0.35)!important; }\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 0.625rem; }\n\n.ios.top-list {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important; }\n\n.no-data {\n  height: calc(100vh - 150px); }\n\n.photoNodata {\n  height: 70px;\n  background: #f7f7f7; }\n\n.item-header {\n  padding: 15px 15px 0px 15px; }\n\n.header-right {\n  align-items: center; }\n\n.post-image,\n.post-video {\n  height: calc(100vw - 30px) !important;\n  padding: 15px; }\n\n.post-image img {\n  border-radius: 20px; }\n\n.video-icon {\n  top: 25px;\n  left: 30px;\n  padding: 1px 4px;\n  border-radius: 5px;\n  background: #00000029; }\n\n.post-content {\n  padding: 0px 15px 15px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcY29uc3VsdGFudC1wcm9maWxlLXZpZXdcXGNvbnN1bHRhbnQtcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQixhQUFhO0VBQUMsc0NBQTJEO0VBQUMsc0JBQXNCO0VBQUMsMkJBQTJCO0VBQUMsZUFBZSxFQUFBOztBQUM3SjtFQUFpQixrQkFBa0I7RUFBQyxVQUFVO0VBQUMsaUJBQWdCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLHVCQUF1QjtFQUFDLHNCQUFzQjtFQUFDLGtCQUFrQixFQUFBOztBQUN2SztFQUFtQixjQUFjO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQixFQUFBOztBQUM5RztFQUEwQixrQkFBa0I7RUFBQyxTQUFTO0VBQUMsV0FBVyxFQUFBOztBQUNsRTtFQUFVLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWtCO0VBQUMsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUFDLDBCQUF1QjtLQUF2Qix1QkFBdUI7RUFBc0gsbURBQW1EO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsTUFBTSxFQUFBOztBQUN0VDtFQUFXLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWtCO0VBQUMsb0NBQW9DO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQixFQUFBOztBQUNySjtFQUFlLFdBQVc7RUFBQyxZQUFZLEVBQUE7O0FBQ3ZDO0VBQVUsYUFBYTtFQUFDLDZCQUE2QjtFQUFDLGdCQUFnQixFQUFBOztBQUN0RTtFQUFtQixrQkFBa0I7RUFBQyxrQkFBYTtFQUFNLGtCQUFnQjtFQUFHLHNCQUFvQjtFQUFHLFVBQVUsRUFBQTs7QUFDN0c7RUFBNkIsa0JBQWtCO0VBQUMsU0FBUztFQUFDLGlCQUFpQixFQUFBOztBQUMzRTtFQUFjLFdBQVc7RUFBQyxrQkFBa0I7RUFBQyxNQUFNO0VBQUMsU0FBUztFQUFDLDJCQUEyQixFQUFBOztBQUN6RjtFQUFrQixjQUFjLEVBQUE7O0FBQ2hDO0VBQWlCLGlCQUFlLEVBQUE7O0FBQWhDO0lBQ3VCLG1CQUFtQjtJQUFDLGFBQWE7SUFBQyxvQ0FBb0M7SUFBQyxnQkFBZ0I7SUFBQyxXQUFXO0lBQUMsMEJBQTBCO0lBQUMsaUJBQWlCLEVBQUE7O0FBRHZLO0lBRThDLG1CQUFtQjtJQUFDLGtDQUEwQjtJQUFTLFdBQVcsRUFBQTs7QUFGaEg7SUFHbUQsV0FBVSxFQUFBOztBQUg3RDtJQUljLFNBQVMsRUFBQTs7QUFJdkI7RUFBVyxZQUFXO0VBQUMsa0JBQWlCO0VBQUMsUUFBTztFQUFDLG9CQUFhO0VBQVEsOEJBQXVCO0VBQVEsNEJBQXFCO0VBQVEsMEJBQW1CO0VBQVEsbUNBQWtCO0VBQWtCLGtDQUFpQjtFQUFrQiw4Q0FBaUIsRUFBQTs7QUFDclA7RUFBK0IsMEJBQTBCO0VBQUMsZ0JBQWdCO0VBQUMsbUJBQW1CLEVBQUE7O0FBRTlGO0VBQWMsMkJBQTJCO0VBQUMsOEJBQThCLEVBQUE7O0FBQ3hFO0VBQVMsMkJBQTJCLEVBQUE7O0FBQ3BDO0VBQWEsWUFBWTtFQUFDLG1CQUFtQixFQUFBOztBQUk3QztFQUNJLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2Qjs7RUFFSSxxQ0FBcUM7RUFDckMsYUFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29uc3VsdGFudC1wcm9maWxlLXZpZXcvY29uc3VsdGFudC1wcm9maWxlLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZS1iZ3toZWlnaHQ6IDE4NXB4O2JhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RlbW8zLmpwZykgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO3BhZGRpbmc6IDAgMTVweDt9XHJcbi5wcm9maWxlLWNvbnRlbnR7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTUwcHg7cGFkZGluZy10b3A6MjBweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47cGFkZGluZy1sZWZ0OiAxMHB4O31cclxuLnByb2ZpbGUtY29udGVudCBhe2NvbG9yOiAjNzc3Nzc3O2ZvbnQtc2l6ZTogMC44NXJlbTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4ucHJvZmlsZS1jb250ZW50IGlvbi10ZXh0e3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IDM1cHg7bGVmdDogMTAwcHg7fVxyXG4udXNlci1pbWd7d2lkdGg6IDkwcHg7aGVpZ2h0OiA5MHB4O2JvcmRlci1yYWRpdXM6IDUwJTtvYmplY3QtZml0OiBjb3ZlcjtvYmplY3QtcG9zaXRpb246IGNlbnRlcjstd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTstbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTtib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7bWFyZ2luLWJvdHRvbTogMTBweDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO31cclxuLnVzZXItaWNvbnt3aWR0aDogMzRweDtoZWlnaHQ6IDM0cHg7Ym9yZGVyLXJhZGl1czogNTAlO2JhY2tncm91bmQ6IHJnYmEoMzksIDE2NiwgMTU0LCAwLjA3KTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4udXNlci1pY29uIGltZ3t3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7fVxyXG4udG9wLWxpc3R7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDttYXJnaW4tYm90dG9tOiAwO31cclxuLnRvcC1saXN0IGlvbi1pdGVte3RleHQtYWxpZ246IGNlbnRlcjstLW1pbi1oZWlnaHQ6IDM2cHg7LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7d2lkdGg6IDI1JTt9XHJcbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO21hcmdpbjogMDtwYWRkaW5nLXRvcDogMjBweDt9XHJcbi50b3AtbGlzdCBpbWd7d2lkdGg6IDE4cHg7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO31cclxuLnNlYy1ub3RpZmljYXRpb257bWFyZ2luOiAxMHB4IDA7fVxyXG4uc3VicHJvZmlsZV90YWJzey0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue2JvcmRlci1yYWRpdXM6IDMwcHg7bWFyZ2luOiAwIDVweDtiYWNrZ3JvdW5kOiByZ2JhKDU4LCAxNzQsIDE2MywgMC4xMSk7bWluLWhlaWdodDogMzhweDtjb2xvcjogIzAwMDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtsZXR0ZXItc3BhY2luZzogMDt9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtiYWNrZ3JvdW5kOiAjMjdhNjlhOy0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMyN2E2OWE7Y29sb3I6ICNGRkY7fVxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgc3Bhbntjb2xvcjojRkZGfVxyXG4gICAgaW9uLWxhYmVse21hcmdpbjogMDt9XHJcbn1cclxuXHJcblxyXG4uc2hhcmUtYnRue2JvdHRvbTo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7LS1iYWNrZ3JvdW5kOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojMjdhNjlhOy0tYmFja2dyb3VuZC1mb2N1c2VkOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWhvdmVyOiMyN2E2OWE7LS1pb24tY29sb3Itc2hhZGU6IzI3YTY5YSFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDojMjdhNjlhIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlOnJnYmEoMCwgMCwgMCwgMC4zNSkhaW1wb3J0YW50fVxyXG4ucHJvZmlsZV90YWJzIGlvbi1zZWdtZW50IHNwYW57dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDAuNjI1cmVtO31cclxuXHJcbi5pb3MudG9wLWxpc3R7cGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDt9XHJcbi5uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTt9XHJcbi5waG90b05vZGF0YXtoZWlnaHQ6IDcwcHg7YmFja2dyb3VuZDogI2Y3ZjdmNzt9XHJcblxyXG5cclxuXHJcbi5pdGVtLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcclxufVxyXG4uaGVhZGVyLXJpZ2h0e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtaW1hZ2UsIFxyXG4ucG9zdC12aWRlbyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAzMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4ucG9zdC1pbWFnZSBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi52aWRlby1pY29ue1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmc6IDFweCA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjk7XHJcbn1cclxuLnBvc3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsultantProfileViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPage", function() { return ConsultantProfileViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _consultant_profile_view_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consultant-profile-view/info-modal/info-modal.component */ "./src/app/profile/consultant-profile-view/info-modal/info-modal.component.ts");
/* harmony import */ var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var _consultant_profile_view_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../consultant-profile-view/notification-modal/notification-modal.component */ "./src/app/profile/consultant-profile-view/notification-modal/notification-modal.component.ts");
/* harmony import */ var _user_profile_view_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-profile-view/user-followers/user-followers.component */ "./src/app/profile/user-profile-view/user-followers/user-followers.component.ts");
/* harmony import */ var _modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modalContent/followers/followers.component */ "./src/app/modalContent/followers/followers.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _settings_privacy_privacy_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../settings/privacy/privacy.page */ "./src/app/settings/privacy/privacy.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../chats/chat-rooms/chat-rooms.component */ "./src/app/chats/chat-rooms/chat-rooms.component.ts");













//import { SocialSharing } from '@ionic-native/social-sharing/ngx';





let ConsultantProfileViewPage = class ConsultantProfileViewPage {
    constructor(router, popoverController, modalController, commonService, navCtrl, actRoute, peopleView, clipboard, deeplink, platform, socialSharing, chatService) {
        this.router = router;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.peopleView = peopleView;
        this.clipboard = clipboard;
        this.deeplink = deeplink;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.chatService = chatService;
        this.tabs = true;
        this.previewImage = [];
        this.sliderOpts = {
            zoom: true,
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 1.5
        };
        this.consultantProfile = "aboutInfo";
        this.follow = true;
        this.like = true;
        this.bookmark = true;
        this.expanded = 0;
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].storagePath;
        this.logText = "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.";
        this.sticky = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].imgUrl;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].profilePic;
        this.backgroundPicUrl = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].backgroundPic;
        this.bannerDefaultImage = './../../../assets/images/editcoverpic.png';
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.currentPage = 0;
        this.gotData = false;
        platform.ready().then(() => {
            // THIS BELOW CODE WILL CHECK FOR DEEPLINKS FROM OTHER APPS OR BROWSER 
            this.deeplink.routeWithNavController(this.navChild, {
                '/privacy': _settings_privacy_privacy_page__WEBPACK_IMPORTED_MODULE_14__["PrivacyPage"],
            }).subscribe((match) => {
                console.log('Successfully routed', match);
            }, (nomatch) => {
                console.warn('Unmatched Route', nomatch);
            });
        });
    }
    ionViewWillEnter() {
        if (this.consultID == this.userData.id) {
            this.router.navigate(["/tabs/consultant-profile"]);
        }
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.userData.id;
        this.actRoute.paramMap.subscribe((params) => {
            this.consultID = params.get('userData');
        });
        this.peopleView.getUserData({ 'userId': this.consultID }).subscribe((data) => {
            this.profileData = data;
        });
        this.peopleView.getBlockStatus({ 'blockUserId': this.consultID }).subscribe((data) => {
            if (data.statusDetails.block_status != null && data.statusDetails.block_status == '1') {
                this.block = true;
            }
            else {
                this.block = false;
            }
        });
        this.peopleView.getMyPost('1', this.consultID, 1).subscribe((data) => {
            console.log(data);
            data.posts.data.forEach(element => {
                this.previewImage = this.previewImage.concat(element['image_post']['0']['thumb_path']);
            });
        });
        this.peopleView.getFolloFollowingResult({ 'profileId': this.consultID }).subscribe((data) => {
            this.followStatus = data.status;
        });
        this.videoPostData();
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(path);
            // const modal = await this.modalController.create({
            //   component: ViewerModalComponent,
            //   componentProps: {
            //     src: this.storagePath + path, // required
            //     srcHighRes: this.storagePath + path,
            //     srcFallback: this.storagePath + path
            //   },
            //   cssClass: 'ion-img-viewer', // required
            //   keyboardClose: true,
            //   showBackdrop: true
            // });
            // return await modal.present();
        });
    }
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
    videoPostData() {
        //postType,userId, videoType,page    
        this.peopleView.getVedioType('2', this.consultID, 1, 1).subscribe((data) => {
            this.myPosts = data.posts.data;
            this.myPosts.forEach((element, i) => {
                this.myPosts[i].count = element.post_likes.length;
                element.post_likes.filter((f) => {
                    if (f.user_id == this.userId) {
                        this.myPosts[i].liked = true;
                    }
                });
                element.post_bookmarks.filter((f) => {
                    if (f.user_id == this.userId) {
                        this.myPosts[i].bookmarked = true;
                    }
                });
            });
            this.last_page = data.posts.last_page;
            this.currentPage = data.posts.current_page;
            this.gotData = true;
        });
    }
    loadVideoData(event) {
        setTimeout(() => {
            if (this.currentPage > 0) {
                //postType,userId, videoType,page    
                this.peopleView.getVedioType('2', this.consultID, 1, (this.currentPage + 1)).subscribe((data) => {
                    data.posts.data.forEach((element, i) => {
                        element.count = element.post_likes.length;
                        element.post_likes.filter((f) => {
                            if (f.user_id == this.userId) {
                                data.posts.data[i].liked = true;
                            }
                        });
                        element.post_bookmarks.filter((f) => {
                            if (f.user_id == this.userId) {
                                this.myPosts[i].bookmarked = true;
                            }
                        });
                    });
                    this.myPosts = this.myPosts.concat(data.posts.data);
                    this.last_page = data.posts.last_page;
                    this.currentPage = data.posts.current_page;
                });
            }
            event.target.complete();
            if (this.last_page <= (this.currentPage + 1)) {
                event.target.disabled = true;
            }
        }, 500);
    }
    followUp(followStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (followStatus == 'Unfollow') {
                var status = 'true';
            }
            else {
                var status = 'false';
            }
            this.commonService.presentLoader();
            this.peopleView.followUpPeople({ 'uid': this.userId, 'followUpId': this.consultID, 'status': status }).subscribe((data) => {
                this.commonService.dismissLoader();
                if (data.followStatus == 'false') {
                    this.followStatus = 'Unfollow';
                    this.commonService.presentToast('Successfully Followed !');
                }
                else if (data.followStatus == 'true' && data.followResult == '1') {
                    this.followStatus = 'Followback';
                    this.commonService.presentToast('Successfully UnFollowed !');
                }
                else {
                    this.followStatus = 'Follow';
                    this.commonService.presentToast('Successfully UnFollowed !');
                }
            });
        });
    }
    getContent() {
        return document.querySelector('ion-content');
    }
    videoTabsScroll() {
        this.tabs = true;
        this.getContent().scrollToTop(500);
    }
    otherTabsScroll() {
        this.tabs = false;
        this.getContent().scrollToTop(500);
    }
    chatPopup(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonService.presentLoader();
            this.chatService.checkChatUser({ 'id': this.consultID }).subscribe((data) => {
                if (data.length > 0) {
                    this.commonService.dismissLoader();
                    var chatRoom = data[0].chatroom.room;
                    var chatReceiverId = data[0].receiverID;
                    var chatSenderId = data[0].senderID;
                    var chatType = data[0].type;
                    var roomId = data[0].id;
                    var request_id = data[0].chatroom.request_id;
                    this.commonService.dismissLoader();
                    var fileData = {
                        chatType: parseInt(chatType),
                        room: chatRoom,
                        receiverId: parseInt(chatReceiverId),
                        requestId: parseInt(request_id),
                    };
                    this.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__["ChatRoomsComponent"], 'fullModal', fileData);
                }
                else {
                    this.commonService.dismissLoader();
                    // chat_type = 1:consultant,2:user,3:program
                    this.router.navigate(["/first-message/" + this.consultID + "/1"]);
                }
            }, err => {
                this.commonService.presentToast("Couldnt load data, Something went wrong.");
                this.commonService.dismissLoader();
            });
        });
    }
    reportPopup(ev) {
        let btns = [{
                text: 'Cancel',
                handler: (blah) => { }
            }, {
                text: 'Okay',
                handler: () => {
                    this.sendReport();
                }
            }];
        this.commonService.presentAlert('Report A User', 'Are you sure.?', btns, '');
    }
    blockUser(event) {
        this.commonService.presentLoader();
        this.peopleView.blockuser({ 'blockUserId': this.consultID, 'blocked': event }).subscribe(data => {
            this.commonService.dismissLoader();
            if (data.statusDetails.block_status) {
                this.commonService.presentToast('Blocked User');
                this.block = true;
            }
            else {
                this.commonService.presentToast('UnBlocked User');
                this.block = false;
            }
            err => {
                this.commonService.dismissLoader();
            };
        });
    }
    notification1() {
        this.commonService.presentModal(_modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_8__["FollowersComponent"], 'fullModal', { 'profileData': this.profileData, 'otherUser': true });
    }
    infomodal() {
        this.commonService.presentModal(_consultant_profile_view_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_4__["InfoModalComponent"], 'bottomModal', null);
    }
    nutritionModal() {
        this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_5__["NutritionModalComponent"], 'fullModal', null);
    }
    notificationModal() {
        this.commonService.presentModal(_consultant_profile_view_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_6__["NotificationModalComponent"], 'fullModal', { 'profileData': this.profileData });
    }
    userFollowers() {
        this.commonService.presentModal(_user_profile_view_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_7__["UserFollowersComponent"], 'fullModal', { 'userId': this.consultID });
    }
    //------------------ -- GO BACK  ------------
    goBack() {
        this.navCtrl.back();
    }
    sendReport() {
        this.commonService.presentLoader();
        this.peopleView.reportPeople({ 'userId': this.consultID, 'message': 'reported' }).subscribe(data => {
            this.commonService.presentToast("Reported account.");
            this.commonService.dismissLoader();
        }, err => {
            this.commonService.presentToast("Reported account.");
            this.commonService.dismissLoader();
        });
    }
    shareModal() {
        // console.log('testtest',this.socialSharing);
        // this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
        //   // Success!
        // }).catch(() => {
        //   // Error!
        // });
        this.clipboard.copy(_config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].profileLink + this.consultID);
        this.clipboard.paste().then((resolve) => {
            alert(resolve);
        }, (reject) => {
            alert('Error: ' + reject);
        });
    }
    shareItem() {
        // var options = {
        //   message: 'Profile Page', // not supported on some apps (Facebook, Instagram)
        //   // subject: 'the subject', // fi. for email
        //   // files: ['', ''], // an array of filenames either locally or remotely
        //   url: 'https://ionicinto.wdipl.com/consultant-profile-view/' + this.consultID,
        //   chooserTitle: 'Pick an intoactive app', // Android only, you can override the default share sheet title
        //   appPackageName: 'com.bm.ionicfcm', // Android only, you can provide id of the App you want to share with
        //   // iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
        // };
        // this.socialSharing.shareWithOptions(options);
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share("Profile Page", "", "", "https://ionicinto.wdipl.com/consultant-profile-view/" + this.consultID)
            .then(() => {
        })
            .catch(() => {
        });
    }
};
ConsultantProfileViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__["PeopleViewService"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"])
], ConsultantProfileViewPage.prototype, "navChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyMenu', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ConsultantProfileViewPage.prototype, "menuElement", void 0);
ConsultantProfileViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultant-profile-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consultant-profile-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../user-profile/user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consultant-profile-view.page.scss */ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__["PeopleViewService"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"],
        _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"]])
], ConsultantProfileViewPage);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #26a69a;\n  --color-activated: #26a69a;\n  --color-focused: #26a69a;\n  color: #26a69a; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2ZpbGVcXGNvbnN1bHRhbnQtcHJvZmlsZS12aWV3XFxyZXBvcnQtcG9wdXBcXHJlcG9ydC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFLLHVCQUF1QjtFQUFDLGdCQUFnQjtFQUFDLFVBQVM7RUFBQyxtQ0FBdUI7RUFBYSxrQkFBYTtFQUFNLHlCQUFhO0VBQWEsaUNBQXFCO0VBQWEsK0JBQW1CO0VBQWEsZ0JBQVE7RUFBUywwQkFBa0I7RUFBUyx3QkFBZ0I7RUFBUyxjQUFjLEVBQUE7O0FBRzlSO0VBQU8sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2NvbnN1bHRhbnQtcHJvZmlsZS12aWV3L3JlcG9ydC1wb3B1cC9yZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICMyNmE2OWE7LS1jb2xvci1hY3RpdmF0ZWQ6ICMyNmE2OWE7LS1jb2xvci1mb2N1c2VkOiAjMjZhNjlhO2NvbG9yOiAjMjZhNjlhO31cclxuLy8gLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4vLyAuYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9Il19 */");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReportPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPopupComponent", function() { return ReportPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ReportPopupComponent = class ReportPopupComponent {
    constructor(events, navParams, popoverController) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.page = this.navParams.get('data');
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
ReportPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ReportPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-popup.component.scss */ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ReportPopupComponent);



/***/ })

}]);
//# sourceMappingURL=profile-consultant-profile-view-consultant-profile-view-module-es2015.js.map