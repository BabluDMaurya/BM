(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div id=\"circularMenu\" class=\"circular-menu\" [ngClass]=\"is_act?'active':''\" *ngIf=\"userType==1\"> \r\n  <a class=\"floating-btn\" (click)=\"is_act=!is_act\" *ngIf=\"is_act\">\r\n    <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n  </a> \r\n  <div class=\"items-wrapper\" > \r\n    <a (click)=\"is_act=!is_act\"  [routerLink]=\"['/nutrition']\" class=\"menu-item\"><ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\"></ion-icon> <p>Nutrition</p></a>\r\n    <a (click)=\"is_act=!is_act\"  class=\"menu-item\"><ion-icon ios=\"logo-youtube\" md=\"logo-youtube\"></ion-icon> <p>Live</p></a>\r\n    <a (click)=\"is_act=!is_act\"  [routerLink]=\"['/music']\" class=\"menu-item\"><ion-icon ios=\"ios-musical-notes\" md=\"md-musical-notes\"></ion-icon> <p>Music</p></a>\r\n    <a (click)=\"is_act=!is_act\"  [routerLink]=\"['/add-video']\" class=\"menu-item\"><ion-icon ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon> <p>Video</p></a>\r\n    <a (click)=\"is_act=!is_act\" [routerLink]=\"['/add-post']\" class=\"menu-item\"> <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon> <p>Post</p></a>\r\n    <a (click)=\"is_act=!is_act\"  class=\"menu-item\"><ion-icon  [routerLink]=\"['/add-program']\"  ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon> <p>Program</p></a>\r\n  </div>\r\n</div>\r\n  <ion-tabs class=\"footer\">\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <!-- <ion-tab-button tab=\"home1\">\r\n        <ion-icon ios=\"ios-home\" md=\"md-home\" tab=\"home1\"></ion-icon>\r\n      </ion-tab-button> -->\r\n      <ion-tab-button tab=\"home\"><!-- tab=\"main\" -->\r\n        <ion-icon ios=\"ios-home\" md=\"md-home\" tab=\"home\"></ion-icon>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"program\"><!-- tab=\"program\" -->\r\n        <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"  tab=\"program\" ></ion-icon>\r\n      </ion-tab-button>\r\n      <ion-tab-button (click)=\"is_act=!is_act\" *ngIf=\"userType==1\">\r\n        <a class=\"floating-btn\"><ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon></a>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"chats\">\r\n        <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n        <ion-badge *ngIf=\"totalchat > 0\" color=\"secondary\">{{totalchat}}</ion-badge>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"consultant-profile\" *ngIf=\"userType==1\">\r\n        <ion-icon ios=\"ios-person\" md=\"md-person\"></ion-icon>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"user-profile\" *ngIf=\"userType==0\">\r\n        <ion-icon ios=\"ios-person\" md=\"md-person\"></ion-icon>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authguard.service */ "./src/app/services/authguard.service.ts");





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_4__["AuthguardService"]],
        children: [
            {
                path: 'user-profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ../user-profile/user-profile.module */ "./src/app/user-profile/user-profile.module.ts")).then(m => m.UserProfilePageModule)
                    }
                ]
            },
            {
                path: 'home1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home1-home1-module */[__webpack_require__.e("common"), __webpack_require__.e("home1-home1-module")]).then(__webpack_require__.bind(null, /*! ../home1/home1.module */ "./src/app/home1/home1.module.ts")).then(m => m.Home1PageModule)
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'consultant-profile-view/:userData',
                children: [
                    {
                        path: '',
                        // redirectTo: '/tabs/profile',
                        pathMatch: 'full',
                        loadChildren: () => Promise.all(/*! import() | profile-consultant-profile-view-consultant-profile-view-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~35dc278f"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5"), __webpack_require__.e("common"), __webpack_require__.e("profile-consultant-profile-view-consultant-profile-view-module")]).then(__webpack_require__.bind(null, /*! ../profile/consultant-profile-view/consultant-profile-view.module */ "./src/app/profile/consultant-profile-view/consultant-profile-view.module.ts")).then(m => m.ConsultantProfileViewPageModule)
                    }
                ]
            },
            {
                path: 'user-profile-view/:userData',
                children: [
                    {
                        path: '',
                        // redirectTo: '/tabs/profile',
                        pathMatch: 'full',
                        loadChildren: () => Promise.all(/*! import() | profile-user-profile-view-user-profile-view-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("profile-user-profile-view-user-profile-view-module")]).then(__webpack_require__.bind(null, /*! ../profile/user-profile-view/user-profile-view.module */ "./src/app/profile/user-profile-view/user-profile-view.module.ts")).then(m => m.UserProfileViewPageModule)
                    }
                ]
            },
            {
                path: 'consultant-profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | profile-my-profile-my-profile-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~35dc278f"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5"), __webpack_require__.e("profile-my-profile-my-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/my-profile/my-profile.module */ "./src/app/profile/my-profile/my-profile.module.ts")).then(m => m.MyProfilePageModule)
                    }
                ]
            }, {
                path: 'bookmark',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | bookmark-bookmark-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("bookmark-bookmark-module")]).then(__webpack_require__.bind(null, /*! ../bookmark/bookmark.module */ "./src/app/bookmark/bookmark.module.ts")).then(m => m.BookmarkPageModule)
                    }
                ]
            }, {
                path: 'images/:userId',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | profile-images-images-module */ "profile-images-images-module").then(__webpack_require__.bind(null, /*! ../profile/images/images.module */ "./src/app/profile/images/images.module.ts")).then(m => m.ImagesPageModule)
                    }
                ]
            }, {
                path: 'all-images/:userId/:userName',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | profile-all-images-all-images-module */ "profile-all-images-all-images-module").then(__webpack_require__.bind(null, /*! ../profile/all-images/all-images.module */ "./src/app/profile/all-images/all-images.module.ts")).then(m => m.AllImagesPageModule)
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | search-search-module */[__webpack_require__.e("common"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null, /*! ../search/search.module */ "./src/app/search/search.module.ts")).then(m => m.SearchPageModule)
                    }
                ]
            },
            {
                path: 'edit-profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | settings-edit-profile-edit-profile-module */ "edit-profile-edit-profile-module").then(__webpack_require__.bind(null, /*! ../settings/edit-profile/edit-profile.module */ "./src/app/settings/edit-profile/edit-profile.module.ts")).then(m => m.EditProfilePageModule)
                    }
                ]
            },
            {
                path: 'post-preview/:postId',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | post-preview-post-preview-module */ "post-preview-post-preview-module").then(__webpack_require__.bind(null, /*! ../post-preview/post-preview.module */ "./src/app/post-preview/post-preview.module.ts")).then(m => m.PostPreviewPageModule)
                    }
                ]
            },
            {
                path: 'program',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | program-program-program-module */[__webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~35dc278f"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~program-program-program-module"), __webpack_require__.e("program-program-program-module")]).then(__webpack_require__.bind(null, /*! ../program/program/program.module */ "./src/app/program/program/program.module.ts")).then(m => m.ProgramPageModule)
                    }
                ]
            },
            {
                path: 'chat-list/:list',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | chats-chat-list-chat-list-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("common"), __webpack_require__.e("chats-chat-list-chat-list-module")]).then(__webpack_require__.bind(null, /*! ../chats/chat-list/chat-list.module */ "./src/app/chats/chat-list/chat-list.module.ts")).then(m => m.ChatListPageModule)
                    }
                ]
            },
            {
                path: 'chats',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | chats-chat-list-chat-list-module */[__webpack_require__.e("default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"), __webpack_require__.e("common"), __webpack_require__.e("chats-chat-list-chat-list-module")]).then(__webpack_require__.bind(null, /*! ../chats/chat-list/chat-list.module */ "./src/app/chats/chat-list/chat-list.module.ts")).then(m => m.ChatListPageModule)
                    }
                ]
            },
            {
                path: 'music',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | music-music-module */[__webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~35dc278f"), __webpack_require__.e("default~add-program-add-program-module~edit-program-edit-program-module~faq-faq-module~music-music-m~ec93f8e5"), __webpack_require__.e("music-music-module")]).then(__webpack_require__.bind(null, /*! ../music/music.module */ "./src/app/music/music.module.ts")).then(m => m.MusicPageModule)
                    }
                ]
            },
            {
                path: 'category-page/:id/:name',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | category-page-category-page-module */ "category-page-category-page-module").then(__webpack_require__.bind(null, /*! ../category-page/category-page.module */ "./src/app/category-page/category-page.module.ts")).then(m => m.CategoryPagePageModule)
                    }
                ]
            },
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button:hover ion-icon {\n  color: #27a69a; }\n\n.tab-selected ion-icon {\n  color: #27a69a; }\n\nion-tab-button .floating-btn {\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  background-color: #27a69a;\n  color: #fff;\n  text-align: center;\n  outline: 0;\n  margin: 0;\n  box-shadow: 0 0 16px #444;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nion-tab-button .floating-btn ion-icon {\n  color: #FFF;\n  font-size: 1.75em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBOEIsY0FBYSxFQUFBOztBQUMzQztFQUF1QixjQUFhLEVBQUE7O0FBQ3BDO0VBQTZCLFVBQVM7RUFBQyxXQUFVO0VBQUMsa0JBQWlCO0VBQUMseUJBQXdCO0VBQUMsV0FBVTtFQUFDLGtCQUFpQjtFQUFDLFVBQVM7RUFBQyxTQUFRO0VBQUMseUJBQXdCO0VBQUMsYUFBWTtFQUFDLHVCQUFzQjtFQUFDLG1CQUFrQixFQUFBOztBQUM1TjtFQUFzQyxXQUFXO0VBQUMsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b246aG92ZXIgaW9uLWljb257Y29sb3I6IzI3YTY5YX1cclxuLnRhYi1zZWxlY3RlZCBpb24taWNvbntjb2xvcjojMjdhNjlhfVxyXG5pb24tdGFiLWJ1dHRvbiAuZmxvYXRpbmctYnRue3dpZHRoOjRlbTtoZWlnaHQ6NGVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6IzI3YTY5YTtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO291dGxpbmU6MDttYXJnaW46MDtib3gtc2hhZG93OjAgMCAxNnB4ICM0NDQ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfVxyXG5pb24tdGFiLWJ1dHRvbiAuZmxvYXRpbmctYnRuIGlvbi1pY29ue2NvbG9yOiAjRkZGO2ZvbnQtc2l6ZTogMS43NWVtO30iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/common.service */ "./src/app/services/common.service.ts");



let TabsPage = class TabsPage {
    constructor(commonService) {
        this.commonService = commonService;
        this.userType = 0;
    }
    ngOnInit() {
    }
    openToggle() {
        document.getElementById('circularMenu').classList.toggle('active');
        document.getElementById('floting-position').classList.toggle('active');
    }
    ionViewWillEnter() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        setInterval(() => {
            this.totalchat = JSON.parse(localStorage.getItem('totalchat'));
        }, 5000);
        this.unreadMessage();
        this.userType = this.userData.user_type;
        this.commonService.footerTabHooks.next(true);
    }
    ionViewDidEnter() {
    }
    ionViewWillLeave() {
        this.commonService.footerTabHooks.next(false);
    }
    ionViewDidLeave() {
        this.commonService.footerTabHooks.next(false);
    }
    unreadMessage() {
        this.commonService.getUnreadCountMyProfile();
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map