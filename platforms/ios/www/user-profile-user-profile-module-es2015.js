(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/pop-over/pop-over.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/pop-over/pop-over.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-list lines=\"none\">\r\n    <ion-item (click)=\"eventFromPopover()()\">Remove form this program</ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">    \r\n    <ion-item slot=\"center\">\r\n      <ion-label *ngIf=\"profileData?.userData?.bios?.display_name\">{{profileData?.userData?.bios?.display_name}}</ion-label>\r\n      <ion-label [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.userData?.bios?.display_name\">Add Display Name +</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a> \r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\r\n          <span class=\"\"></span>\r\n        </a>\r\n        <a [routerLink]=\"['/tabs/bookmark']\" >\r\n          <ion-icon ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/people/tabFollowers']\" class=\"foll-people\">\r\n          <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/settings']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-settings\" md=\"md-settings\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header> \r\n<ion-content class=\"main_content\">  \r\n  <ion-refresher class=\"page-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>   \r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">        \r\n        <div class=\"sec-banner\">\r\n          <div class=\"top-banner\">             \r\n            <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"bannerImage\">            \r\n          </div>\r\n      </div>\r\n      <div class=\"profile-heading\">\r\n        <div class=\"img-profile\">\r\n          <img [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profileImage\">              \r\n        </div>\r\n        <ion-text>\r\n          <h6 class=\"userDisplayName\" *ngIf=\"profileData?.userData?.user_name\">\r\n            {{profileData?.userData?.user_name}}\r\n          </h6>\r\n        </ion-text>\r\n      </div>\r\n        <!-- <div class=\"profile-content\">\r\n          <img class=\"user-img\" [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profileImage\">\r\n          <ion-text>\r\n            <h6 class=\"ion-no-margin user-name ml-0\" *ngIf=\"profileData?.userData?.user_name\">{{profileData?.userData?.user_name}}</h6> -->\r\n            <!-- <a><ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon> darshan_rajgor_</a> -->\r\n          <!-- </ion-text>\r\n        </div> -->\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-segment lines=\"none\" class=\"top-segment\" [(ngModel)]=\"userProfile\">\r\n          <ion-segment-button value=\"aboutInfo\">Information</ion-segment-button>\r\n          <ion-segment-button value=\"upcomingProgram\">Upcoming Program</ion-segment-button>\r\n        </ion-segment>\r\n        <div [ngSwitch]=\"userProfile\">\r\n          <div *ngSwitchCase=\"'aboutInfo'\" class=\"user-info\">\r\n            <ion-card>\r\n              <ion-card-header class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/user.svg\" />\r\n                </div>\r\n                <ion-text>Bio</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.userData?.bios?.about_me\">{{profileData?.userData?.bios?.about_me}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.userData?.bios?.about_me\">Click here to add something interesting about yourself</a> \r\n              </ion-card-content>\r\n            </ion-card>\r\n            <ion-card>\r\n              <ion-card-header class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/like.svg\" />\r\n                </div>\r\n                <ion-text>Interests</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content  class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.speciality?.primaryName?.name\">{{profileData?.speciality?.primaryName?.name}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.speciality?.primaryName?.name\">Select catagory in which you interested</a> \r\n              </ion-card-content>\r\n            </ion-card>\r\n            <ion-card>\r\n              <ion-card-header class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/global.svg\" />\r\n                </div>\r\n                <ion-text>Language</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content  class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.lang?.lang\">{{profileData?.lang?.lang}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.speciality?.primaryName?.name\">Add languages you know</a> \r\n              </ion-card-content>\r\n            </ion-card>\r\n            <ion-card>\r\n              <ion-card-header  class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/placeholder.svg\" />\r\n                  </div>\r\n                  <ion-text>Location</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content  class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.address?.country?.name\">{{profileData?.address?.city?.name}}{{profileData?.address?.state?.name }},{{profileData?.address?.country?.name}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.address?.country?.name\">Add Location</a> \r\n             \r\n              </ion-card-content>\r\n            </ion-card>\r\n          </div>\r\n          <ion-list *ngSwitchCase=\"'upcomingProgram'\" lines=\"none\" class=\"upcomingProgram-list\">\r\n            <div *ngIf=\"upcomingProgram.length==0\" class=\"no-data\">\r\n              <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n              <p>No Data Found</p>\r\n            </div>\r\n            <ion-item class=\"upcoming-block\" *ngFor=\"let item of upcomingProgram; let i=index;\"> \r\n                <ion-avatar slot=\"start\">\r\n                  <img [defaultImage] = \"programDefaultImage\" [lazyLoad]=\"url+item?.img_arr[0]\">\r\n                </ion-avatar>\r\n              <ion-label [routerLink]=\"profileData?.userData?.id ==item?.user_id ? ['/program-details/',item.id] : ['/program-view/',item.id]\">\r\n                <div>\r\n                  <h3>{{item?.title}}</h3>\r\n                  <p>{{item?.type_id}}</p>\r\n                  <p>By: <span>{{item?.program_user?.user_name}}</span></p>\r\n                  <!-- <span class=\"list-name d-block\" *ngIf=\"item?.cd>0\">Countdown: <b><span *ngIf=\"item?.hh > 0\">{{ item?.hh |number }} Hours</span> {{ item?.mm |number  }} Minutes  {{ item?.ss |number }} Seconds </b> </span> -->\r\n                  <span class=\"list-name d-block\" *ngIf=\"item?.cd>0\"><b><span *ngIf=\"item?.hh > 0\">{{ item?.hh |number }} Hours</span> {{ item?.mm |number  }} Minutes  {{ item?.ss |number }} Seconds </b> </span>\r\n\r\n                  <span class=\"list-name d-block\" *ngIf=\"item?.cd==0\"> <b> L I V E</b></span>\r\n                </div>\r\n                <div class=\"action-links\">\r\n                  <!-- <ion-toolbar>\r\n                    <ion-buttons slot=\"end\">\r\n                      <ion-button (click)=\"settingsPopover()\">\r\n                        <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                      </ion-button>\r\n                    </ion-buttons>\r\n                  </ion-toolbar> -->\r\n                  <a (click)=\"nutritionModal(item)\">\r\n                    <ion-icon ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n                  </a>\r\n                </div>\r\n              </ion-label>\r\n            </ion-item>\r\n           \r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/user-profile/pop-over/pop-over.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user-profile/pop-over/pop-over.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9wb3Atb3Zlci9wb3Atb3Zlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profile/pop-over/pop-over.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/pop-over/pop-over.component.ts ***!
  \*************************************************************/
/*! exports provided: PopOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverComponent", function() { return PopOverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PopOverComponent = class PopOverComponent {
    constructor(events, navParams, popoverController) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.page = this.navParams.get('data');
    }
    wifiSetting() {
        // code for setting wifi option in apps
    }
    logout() {
        // code for logout
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
PopOverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopOverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pop-over',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pop-over.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/pop-over/pop-over.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pop-over.component.scss */ "./src/app/user-profile/pop-over/pop-over.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], PopOverComponent);



/***/ }),

/***/ "./src/app/user-profile/user-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function() { return UserProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");




const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
    }
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pop-over/pop-over.component */ "./src/app/user-profile/pop-over/pop-over.component.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");









// export class LazyLoadImageHooks extends IntersectionObserverHooks {
//   setup(attributes:Attributes){
//     // attributes.offset = 1;
//     attributes.defaultImagePath = './../../../assets/images/editcoverpic.png';
//     attributes.errorImagePath = "./../../../assets/images/placeholder.svg";
//     return super.setup(attributes);
//   }
// loadImage({ imagePath }: Attributes): Promise<string> {
//   return fetch(imagePath, {
//     headers: {
//       Authorization: 'Bearer ...',
//     },
//   })
//     .then((res) => res.blob())
//     .then((blob) => URL.createObjectURL(blob));
// }
// }
let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfilePageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"]
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"], _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__["PopOverComponent"]],
        // providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
        entryComponents: [_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__["PopOverComponent"]],
    })
], UserProfilePageModule);



/***/ }),

/***/ "./src/app/user-profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.././app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var _user_profile_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/pop-over/pop-over.component */ "./src/app/user-profile/pop-over/pop-over.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");










let UserProfilePage = class UserProfilePage {
    constructor(commonService, popoverController, settingsService, platform, programService, router) {
        this.commonService = commonService;
        this.popoverController = popoverController;
        this.settingsService = settingsService;
        this.platform = platform;
        this.programService = programService;
        this.router = router;
        this.bannerDefaultImage = './../../../assets/images/editcoverpic.png';
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        this.programDefaultImage = './../../../assets/images/loading.jpg';
        this.gotData = false;
        this.userProfile = "aboutInfo";
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].imgUrl;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].profilePic;
        this.backgroundPicUrl = _config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].backgroundPic;
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.settingsService.getProfileData().subscribe((data) => {
            this.profileData = data.status;
            this.gotData = true;
            this.bannerImage = this.backgroundPicUrl + this.profileData.userData.bios.profile_background_image;
            this.profileImage = this.profilePicUrl + this.profileData.userData.bios.profile_pic;
            console.log(this.profileData);
        });
    }
    settingsPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _user_profile_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                event: ev,
                componentProps: { page: 'Login' },
                cssClass: 'popover_class',
            });
            return yield popover.present();
        });
    }
    showmodal() {
        this.commonService.presentModal(_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_4__["NutritionModalComponent"], 'fullModal', '');
    }
    ionViewWillEnter() {
        this.programService.getUpcomingPrograms(null).subscribe(data => {
            console.log(data);
            this.upcomingProgram = data.programList.filter(el => {
                if (el.image_path != '') {
                    el.img_arr = el.image_path.split(',');
                }
                else {
                    el.img_arr = this.profileDefaultImage;
                }
                el.convertedTime = new Date(el.program_date + 'Z');
                let a = new Date(el.program_date + 'Z');
                let b = new Date();
                let c;
                if (a > b) {
                    c = Math.abs(a - b) / 1000;
                }
                else {
                    c = 0;
                    el.live = true;
                }
                el.cd = c;
                setInterval(function () {
                    if (parseInt(el.cd) > 0)
                        el.cd = parseInt(el.cd) - 1;
                    el.hh = ~~(el.cd / (60 * 60));
                    el.mm = ~~(el.cd % 3600 / 60);
                    el.ss = (el.cd % 3600 % 60);
                }, 1000);
                return el;
            });
            console.log(this.upcomingProgram);
        });
    }
    ngAfterViewInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.isActive('/tabs/user-profile', true) && this.router.url === '/tabs/user-profile') {
                navigator['app'].exitApp();
            }
        }));
    }
    ngOnDestroy() {
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    nutritionModal(data) {
        this.commonService.presentModal(_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_4__["NutritionModalComponent"], 'fullModal', { 'data': data });
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], UserProfilePage);



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map