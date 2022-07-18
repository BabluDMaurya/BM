(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-people-people-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/people/people.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/people/people.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>People</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-segment class=\"top-segment\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"followers\" checked>({{followers?.length}}) Followers</ion-segment-button>\r\n    <ion-segment-button value=\"following\">({{followings?.length}}) Followings</ion-segment-button>\r\n  </ion-segment>\r\n  <div [ngSwitch]=\"people_tabs\">\r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'followers'\" class=\"ion-no-padding\"> \r\n      <div *ngIf='followers?.length > 0'>\r\n      <ion-toolbar class=\"searchbar\">\r\n        <ion-searchbar [(ngModel)]=\"followerSearchTerm\"></ion-searchbar>\r\n      </ion-toolbar>\r\n      <ion-item *ngFor=\"let peoplelist of followerFilteredUsers\" class=\"item-card\">\r\n          <ion-avatar slot=\"start\" *ngIf=\"peoplelist.following_user.bios.profile_pic\" [routerLink]=\"peoplelist.following_user.user_type==0?['/tabs/user-profile-view/',peoplelist.following_uid] : ['/tabs/consultant-profile-view/',peoplelist.following_uid]\">\r\n            <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{peoplelist.following_user.bios.profile_pic}}\">\r\n          </ion-avatar>\r\n          <ion-avatar slot=\"start\" *ngIf=\"!peoplelist.following_user.bios.profile_pic\" [routerLink]=\"peoplelist.following_user.user_type==0?['/tabs/user-profile-view/',peoplelist.following_uid] : ['/tabs/consultant-profile-view/',peoplelist.following_uid]\">\r\n            <img src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label [routerLink]=\"peoplelist.following_user.user_type==0?['/tabs/user-profile-view/',peoplelist.following_uid] : ['/tabs/consultant-profile-view/',peoplelist.following_uid]\">\r\n            <h3 class=\"list-person\">{{peoplelist.following_user.user_name}}</h3>\r\n            <span class=\"list-name\">following you</span>\r\n          </ion-label>\r\n          <ion-button size=\"small\" slot=\"end\" fill=\"outline\" id=\"{{peoplelist.following_uid}}\" (click)=\"followUpPeople(peoplelist.following_uid, peoplelist?.following_user?.follow ? 'true' : 'false')\" color=\"{{peoplelist?.following_user?.color}}\" [ngClass]='peoplelist?.following_user?.class'>{{peoplelist?.following_user?.follow == true? 'FOLLOWING': 'FOLLOW BACK'}}</ion-button>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"no-data\" *ngIf='followers?.length == 0'>\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No Data Found</p>\r\n    </div>\r\n    </ion-list>\r\n    \r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'following'\" class=\"ion-no-padding\">\r\n      <div *ngIf='followings?.length > 0'>\r\n      <ion-toolbar class=\"searchbar\">\r\n        <ion-searchbar [(ngModel)]=\"followingSearchTerm\"></ion-searchbar>\r\n      </ion-toolbar>\r\n      <ion-item *ngFor=\"let followinglist of followingFilteredUsers\" class=\"item-card\">\r\n        <ion-avatar slot=\"start\" *ngIf=\"followinglist.follower_user.bios.profile_pic\" [routerLink]=\"followinglist.follower_user.user_type==0?['/tabs/user-profile-view/',followinglist.followers_uid] : ['/tabs/consultant-profile-view/',followinglist.followers_uid]\">\r\n          <img src=\"https://ionicinto.wdipl.com/public/profile_pic/thumb/{{followinglist.follower_user.bios.profile_pic}}\">\r\n        </ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"!followinglist.follower_user.bios.profile_pic\" [routerLink]=\"followinglist.follower_user.user_type==0?['/tabs/user-profile-view/',followinglist.followers_uid] : ['/tabs/consultant-profile-view/',followinglist.followers_uid]\">\r\n          <img src=\"../../assets/images/user.jpg\">\r\n        </ion-avatar>        \r\n        <ion-label [routerLink]=\"followinglist.follower_user.user_type==0?['/tabs/user-profile-view/',followinglist.followers_uid] : ['/tabs/consultant-profile-view/',followinglist.followers_uid]\">\r\n          <h3 class=\"list-person\">{{followinglist.follower_user.user_name}} </h3>\r\n          <p>Following</p>\r\n        </ion-label>\r\n        <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"unFollowPeople(followinglist?.follower_user?.btnName,followinglist.followers_uid, followinglist?.follower_user?.follow ? 'true' : 'false')\"  id=\"{{followinglist.followers_uid}}\" color=\"{{followinglist?.follower_user?.color}}\" [ngClass]=\"followinglist?.follower_user?.class\">{{followinglist?.follower_user?.btnName}}</ion-button>\r\n     </ion-item>\r\n    </div>\r\n    <div class=\"no-data\" *ngIf='followings?.length == 0'>\r\n      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n      <p>No Data Found</p>\r\n    </div>\r\n    </ion-list> \r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/people/people-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/people/people-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PeoplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePageRoutingModule", function() { return PeoplePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _people_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people.page */ "./src/app/profile/people/people.page.ts");




const routes = [
    {
        path: '',
        component: _people_page__WEBPACK_IMPORTED_MODULE_3__["PeoplePage"],
        children: [
            {
                path: 'tabFollowers',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | tab-followers-tab-followers-module */ "tab-followers-tab-followers-module").then(__webpack_require__.bind(null, /*! ../tab-followers/tab-followers.module */ "./src/app/profile/tab-followers/tab-followers.module.ts")).then(m => m.TabFollowersPageModule)
                    }
                ]
            },
            {
                path: 'tabFollowings',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | tab-followings-tab-followings-module */ "tab-followings-tab-followings-module").then(__webpack_require__.bind(null, /*! ../tab-followings/tab-followings.module */ "./src/app/profile/tab-followings/tab-followings.module.ts")).then(m => m.TabFollowingsPageModule)
                    }
                ]
            }
        ]
    }
];
let PeoplePageRoutingModule = class PeoplePageRoutingModule {
};
PeoplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PeoplePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/people/people.module.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/people/people.module.ts ***!
  \*************************************************/
/*! exports provided: PeoplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePageModule", function() { return PeoplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people-routing.module */ "./src/app/profile/people/people-routing.module.ts");
/* harmony import */ var _people_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./people.page */ "./src/app/profile/people/people.page.ts");







let PeoplePageModule = class PeoplePageModule {
};
PeoplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _people_routing_module__WEBPACK_IMPORTED_MODULE_5__["PeoplePageRoutingModule"]
        ],
        declarations: [_people_page__WEBPACK_IMPORTED_MODULE_6__["PeoplePage"]]
    })
], PeoplePageModule);



/***/ }),

/***/ "./src/app/profile/people/people.page.scss":
/*!*************************************************!*\
  !*** ./src/app/profile/people/people.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --border-radius: 4px;\n}\n\nion-button {\n  --border-width: 1px;\n}\n\n.ios.main_content {\n  --padding-top: 0px;\n}\n\n.no-data {\n  height: calc(100vh - 150px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wZW9wbGUvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxccGVvcGxlXFxwZW9wbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Blb3BsZS9wZW9wbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQVMsa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsb0JBQUE7QUNBL0M7O0FEQ0E7RUFBVyxtQkFBQTtBQ0dYOztBREZBO0VBQWtCLGtCQUFBO0FDTWxCOztBRExBO0VBQVMsMkJBQUE7QUNTVCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcGVvcGxlL3Blb3BsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdGFiLWJhcnstLWJhY2tncm91bmQ6ICNmN2Y3Zjc7aGVpZ2h0OiA0OHB4O31cclxuLy8gaW9uLXRhYi1idXR0b257dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiAjNTU1O31cclxuLy8gaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVke2JvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjdhNjlhO2NvbG9yOiAjMjdhNjlhO31cclxuLy8gaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC43NXJlbTt9XHJcbmlvbi1pdGVte21hcmdpbi1ib3R0b206IDVweDtib3JkZXItcmFkaXVzOiA0cHg7LS1ib3JkZXItcmFkaXVzOiA0cHg7fVxyXG5pb24tYnV0dG9uey0tYm9yZGVyLXdpZHRoOiAxcHg7fVxyXG4uaW9zLm1haW5fY29udGVudHstLXBhZGRpbmctdG9wOiAwcHg7fVxyXG4ubm8tZGF0YXtoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7fSIsImlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbn1cblxuLmlvcy5tYWluX2NvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5uby1kYXRhIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/people/people.page.ts":
/*!***********************************************!*\
  !*** ./src/app/profile/people/people.page.ts ***!
  \***********************************************/
/*! exports provided: PeoplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePage", function() { return PeoplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let PeoplePage = class PeoplePage {
    constructor(peopleViewService, storage, navCtrl) {
        this.peopleViewService = peopleViewService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.people_tabs = "followers";
    }
    //search followers
    get followerSearchTerm() {
        return this._searchTerm;
    }
    set followerSearchTerm(value) {
        this._searchTerm = value;
        this.followerFilteredUsers = this.followerFilterUser(value);
    }
    //search followings
    get followingSearchTerm() {
        return this._followingSearchTrem;
    }
    set followingSearchTerm(value) {
        this._followingSearchTrem = value;
        this.followingFilteredUsers = this.followingFilterUser(value);
    }
    segmentChanged(ev) {
        this.people_tabs = ev.detail.value;
    }
    ngOnInit() {
        const dataPromise = this.storage.get('userData');
        dataPromise.then(data => {
            this.storageData = JSON.parse(data);
            this.userId = this.storageData.id;
            console.log("this.userId:" + this.userId);
        });
        // this.tokenStorage.GetPayLoad().then(result => {
        //   console.log("apeo" + result);
        // });
        this.peopleViewService.getFollowers('').subscribe((data) => {
            this.followers = data.result;
            this.followerFilteredUsers = this.followers;
            this.followers.forEach((element, i) => {
                if (element.following_user.follower_rel != null) {
                    element.following_user.follow = true;
                    element.following_user.class = '';
                    element.following_user.color = 'medium';
                }
                else {
                    element.following_user.follow = '';
                    element.following_user.class = 'green text-white';
                    element.following_user.color = '';
                }
            });
            console.log(this.followers);
            // this.followers.SetToken(data.token);
        });
        this.peopleViewService.getFollowings('').subscribe((data) => {
            this.followings = data.result;
            this.followingFilteredUsers = this.followings;
            this.followings.forEach((element, i) => {
                element.follower_user.btnName = 'UNFOLLOW';
                element.follower_user.color = 'medium';
                if (element.follower_user.following_rel != null) {
                    element.follower_user.follow = true;
                    element.follower_user.class = '';
                    // element.follower_user.color = 'medium';
                }
                else {
                    element.follower_user.follow = '';
                }
            });
        });
    }
    // ionViewDidLoad(){
    //   this.tokenStorage.GetPayLoad().then(value => {
    //     this.token = value;
    //   }) 
    //   }
    followerFilterUser(searchString) {
        return this.followers.filter(employee => employee.following_user.user_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
    followingFilterUser(searchString) {
        return this.followings.filter(employee => employee.follower_user.user_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
    followUpPeople(folloUpId, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.peopleViewService.followUpPeople({ 'followUpId': folloUpId, 'status': status }).subscribe((data) => {
                if (data.followStatus == 'true') {
                    this.followers.forEach((element, i) => {
                        if (element.following_user.id == folloUpId) {
                            element.following_user.follow = false;
                            element.following_user.class = 'green text-white';
                            element.following_user.color = '';
                        }
                    });
                }
                else if (data.followStatus == 'false') {
                    this.followers.forEach((element, i) => {
                        if (element.following_user.id == folloUpId) {
                            element.following_user.follow = true;
                            element.following_user.class = '';
                            element.following_user.color = 'medium';
                        }
                    });
                }
            });
        });
    }
    unFollowPeople(btnName, folloUpId, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (btnName == 'UNFOLLOW') {
                status = 'true';
            }
            else if (btnName == 'FOLLOWBACK' || btnName == 'FOLLOW') {
                status = 'false';
            }
            this.peopleViewService.followUpPeople({ 'followUpId': folloUpId, 'status': status }).subscribe((data) => {
                if (data.followStatus == 'true') {
                    this.followings.forEach((element, i) => {
                        if (element.follower_user.id == folloUpId && !element.follower_user.follower_rel) {
                            element.follower_user.btnName = 'FOLLOWBACK';
                            element.follower_user.class = 'green text-white';
                            element.follower_user.color = '';
                        }
                        else if (element.follower_user.id == folloUpId && element.follower_user.follower_rel == 'null') {
                            element.follower_user.btnName = 'FOLLOW';
                            element.follower_user.class = 'green text-white';
                            element.follower_user.color = '';
                        }
                    });
                }
                else if (data.followStatus == 'false') {
                    this.followings.forEach((element, i) => {
                        if (element.follower_user.id == folloUpId) {
                            element.follower_user.btnName = 'UNFOLLOW';
                            element.follower_user.color = 'medium';
                            element.follower_user.class = '';
                        }
                    });
                }
            });
        });
    }
    openToggle() {
        document.getElementById('circularMenu').classList.toggle('active');
        document.getElementById('floting-position').classList.toggle('active');
    }
    goBack() {
        this.navCtrl.back();
    }
};
PeoplePage.ctorParameters = () => [
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PeoplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/people/people.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.page.scss */ "./src/app/profile/people/people.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_people_view_service__WEBPACK_IMPORTED_MODULE_2__["PeopleViewService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], PeoplePage);



/***/ })

}]);
//# sourceMappingURL=profile-people-people-module-es2015.js.map