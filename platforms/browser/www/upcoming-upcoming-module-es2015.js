(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upcoming-upcoming-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming/upcoming.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming/upcoming.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Upcoming Program</ion-label>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-no-margin upcomingCard upcoming-card\" *ngFor=\"let upcoming of upcomingList; let i=index;\">\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{url}}{{upcoming?.img_arr[0]}}\" *ngIf=\"upcomingList[i]?.image_path\">\r\n        <!-- <img src=\"{{profile_url}}{{upcoming?.program_user?.bios?.profile_pic}}\" *ngIf=\"upcoming?.program_user?.bios?.profile_pic\"> -->\r\n        <img  src=\"../../assets/images/loading.jpg\" *ngIf=\"!upcomingList[i]?.image_path\">\r\n      </ion-avatar>\r\n      <ion-label [routerLink]=\"userData?.id ==upcoming?.user_id ? ['/program-details/',upcoming.id] : ['/program-view/',upcoming.id]\">\r\n        <h3 class=\"list-person\">{{upcoming?.title}}</h3>\r\n        <span class=\"list-name d-block\">{{upcoming?.type_id}}</span>\r\n        <span class=\"list-name d-block\">Created by:{{upcoming?.program_user?.user_name}} {{upcoming?.convertedTime | date:'medium'}}</span>\r\n        <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\"> <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span>\r\n        <!-- <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd>0\">Countdown: <b><span *ngIf=\"upcoming?.hh > 0\">{{ upcoming?.hh |number }} Hours</span> {{ upcoming?.mm |number  }} Minutes  {{ upcoming?.ss |number }} Seconds </b> </span> -->\r\n        <span class=\"list-name d-block\" *ngIf=\"upcoming?.cd==0\"> <b> L I V E</b></span>\r\n        <!-- <countdown [config]=\"{leftTime: 30}\"></countdown> -->\r\n      </ion-label>\r\n      <div class=\"action-links\" slot=\"end\" *ngIf=\"upcoming?.nutrition_id\">\r\n        <ion-icon (click)=\"nutritionModal(upcoming)\" ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n  </ion-card>\r\n  <!--------------- S K E L E T O N ------------>\r\n  <ion-list lines=\"none\" *ngIf=\"!upcomingList\">      \r\n    <ion-item *ngFor=\"let skeleton of [].constructor(20)\" class=\"item-card\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3 class=\"list-person\"><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\r\n        <span class=\"list-name\"><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></span>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!---------------E n d s  S K E L E T O N ------------>\r\n  <div class=\"no-data\" *ngIf=\"noData\" style=\"height: calc(100vh - 175px)\">\r\n    <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n    <p>No upcoming program for next 24 Hrs.</p>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/upcoming/upcoming-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/upcoming/upcoming-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UpcomingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingPageRoutingModule", function() { return UpcomingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upcoming_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcoming.page */ "./src/app/upcoming/upcoming.page.ts");




const routes = [
    {
        path: '',
        component: _upcoming_page__WEBPACK_IMPORTED_MODULE_3__["UpcomingPage"]
    }
];
let UpcomingPageRoutingModule = class UpcomingPageRoutingModule {
};
UpcomingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpcomingPageRoutingModule);



/***/ }),

/***/ "./src/app/upcoming/upcoming.module.ts":
/*!*********************************************!*\
  !*** ./src/app/upcoming/upcoming.module.ts ***!
  \*********************************************/
/*! exports provided: UpcomingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingPageModule", function() { return UpcomingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upcoming_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upcoming-routing.module */ "./src/app/upcoming/upcoming-routing.module.ts");
/* harmony import */ var _upcoming_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upcoming.page */ "./src/app/upcoming/upcoming.page.ts");







let UpcomingPageModule = class UpcomingPageModule {
};
UpcomingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _upcoming_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpcomingPageRoutingModule"]
        ],
        declarations: [_upcoming_page__WEBPACK_IMPORTED_MODULE_6__["UpcomingPage"]]
    })
], UpcomingPageModule);



/***/ }),

/***/ "./src/app/upcoming/upcoming.page.scss":
/*!*********************************************!*\
  !*** ./src/app/upcoming/upcoming.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upcoming-card {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 15px;\n  margin-top: 20px; }\n\nspan.list-name.d-block {\n  margin-bottom: 5px; }\n\n.action-links {\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBjb21pbmcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmVcXEJNL3NyY1xcYXBwXFx1cGNvbWluZ1xcdXBjb21pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXBjb21pbmcvdXBjb21pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwY29taW5nLWNhcmR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5zcGFuLmxpc3QtbmFtZS5kLWJsb2NrIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uYWN0aW9uLWxpbmtzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/upcoming/upcoming.page.ts":
/*!*******************************************!*\
  !*** ./src/app/upcoming/upcoming.page.ts ***!
  \*******************************************/
/*! exports provided: UpcomingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingPage", function() { return UpcomingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let UpcomingPage = class UpcomingPage {
    constructor(commonService, actRoute, programService) {
        this.commonService = commonService;
        this.actRoute = actRoute;
        this.programService = programService;
        this.profile_url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].imgUrl;
        this.actRoute.paramMap.subscribe((params) => {
            if (params.get('userData')) {
                this.consultID = params.get('userData');
            }
            console.log("this.consultID" + this.consultID);
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        console.log("this.userData :" + this.userData);
    }
    ngOnInit() {
        console.log(this.consultID);
        if (this.consultID) {
            this.getConsultProg(this.consultID);
        }
        else {
            this.getMyprog();
        }
    }
    nutritionModal(data) {
        this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_2__["NutritionModalComponent"], 'fullModal', { 'data': data });
    }
    getMyprog() {
        this.programService.getUpcomingPrograms(null).subscribe(data => {
            if (data.programList.length < 1) {
                this.noData = true;
            }
            this.upcomingList = this.getCounter(data.programList);
            this.upcomingList = data.programList.filter(el => {
                if (el.image_path) {
                    el.img_arr = el.image_path.split(',');
                }
                el.converted = new Date(el.program_date + 'Z');
                el.expanded = false;
                return el;
            });
        });
    }
    getConsultProg(id) {
        this.programService.getConsultPrograms({ 'consultId': id }).subscribe(data => {
            console.log(data);
            if (data.data.length < 1) {
                this.noData = true;
            }
            this.upcomingList = this.getCounter(data.data);
            this.upcomingList = data.data.filter(el => {
                if (el.image_path) {
                    el.img_arr = el.image_path.split(',');
                }
                el.converted = new Date(el.program_date + 'Z');
                el.expanded = false;
                return el;
            });
        });
    }
    getCounter(elementArr) {
        elementArr.filter(el => {
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
        return elementArr;
    }
    goBack() {
        this.navCtrl.back();
    }
};
UpcomingPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"] }
];
UpcomingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upcoming',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upcoming.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upcoming/upcoming.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upcoming.page.scss */ "./src/app/upcoming/upcoming.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../profile/my-profile/my-profile.page.scss */ "./src/app/profile/my-profile/my-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"]])
], UpcomingPage);



/***/ })

}]);
//# sourceMappingURL=upcoming-upcoming-module-es2015.js.map