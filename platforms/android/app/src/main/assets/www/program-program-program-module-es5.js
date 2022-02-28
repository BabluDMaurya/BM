function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-program-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/hosting-dropdown/hosting-dropdown.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/hosting-dropdown/hosting-dropdown.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramHostingDropdownHostingDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"ion-padding\" lines=\"none\">\r\n  <ion-item *ngIf=\"user_type == 1\">\r\n    <ion-text  [routerLink]=\"['/edit-program',programId]\" (click)=\"closeModal()\">Edit Program</ion-text>\r\n  </ion-item>\r\n  <ion-item (click)=\"delete()\">\r\n    <ion-text>Delete Program</ion-text>\r\n  </ion-item>\r\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/invite-request/invite-request.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/invite-request/invite-request.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramInviteRequestInviteRequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item class=\"item-card\" *ngFor=\"let item of programList\">\r\n  <ion-avatar slot=\"start\" [routerLink]=\"['/program-view',item.id]\">\r\n    <img src=\"../../../assets/images/demo2.jpg\" *ngIf=\"item?.image_path\">\r\n    <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n  </ion-avatar>\r\n  <ion-label [routerLink]=\"['/program-view',item.id]\">\r\n    <h3 class=\"list-person\">{{item.title}}</h3>\r\n    <span class=\"list-name d-block\">{{item.type_id}}</span>\r\n    <span class=\"list-name\">By: {{item?.program_user?.user_name}}</span>\r\n    <p class=\"text-green\">{{item?.converted |date:'medium'}}</p>\r\n  </ion-label>\r\n  <div class=\"action-links\" slot=\"end\">\r\n    <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"requestedDropdown(item.id)\"></ion-icon>\r\n    <ion-icon ios=\"ios-repeat\" md=\"md-repeat\" [routerLink]=\"['/program-view']\"></ion-icon>\r\n  </div>\r\n</ion-item>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program/program.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/program/program.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramProgramProgramPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <!-- <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\"></ion-buttons> -->\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label >Program List</ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item slot=\"center\">\r\n      <ion-datetime displayFormat=\"MMM DD, YYYY\" [(ngModel)]=\"myDate\" value=\"{{myDate}}\" (ionChange)=\"sortDate(event)\">\r\n      </ion-datetime>\r\n    </ion-item> -->\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-toggle slot=\"end\" [(ngModel)]=\"showAll\" (ionChange)=\"onChange($event)\" *ngIf=\"programTabs == 'schedule'\">\r\n      </ion-toggle>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n<!------------- S K E L E T O N -------------- -->\r\n<div [ngSwitch]=\"programTabs\" *ngIf=\"!programList\">\r\n  <ion-list lines=\"none\" *ngSwitchCase=\"'hosting'\" class=\"ion-no-padding\">\r\n    <ion-card *ngFor=\"let itemSkeleton of [].constructor(10)\" class=\"ion-no-margin\">\r\n      <ion-item class=\"item-card\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\r\n          <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\r\n          <ion-skeleton-text animated style=\"width: 30%;\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n  </ion-list>\r\n</div>\r\n<!------------- E N D   S K E L E T O N ----------------->\r\n<div *ngIf=\"notShowAll\" class=\"programCalendar\">\r\n  <!-- <h4>{{myDate | date}}</h4> -->\r\n<ion-item lines=\"none\">  \r\n  <!-- <ion-label *ngFor=\"let week of dayDate; let i = index \" class=\"{{week.activeClass}}\" (click)=\"week.disableClass == 0 ? mySortDate(week.myDate,i) : tostmess()\">{{week.day}}<p>{{week.date}}</p></ion-label> -->\r\n  <ion-label *ngFor=\"let week of dayDate; let i = index \" class=\"{{week.activeClass}}\" (click)=\"mySortDate(week.myDate,i)\">{{week.day}}<p>{{week.date}}</p></ion-label>\r\n</ion-item>\r\n</div>\r\n  <ion-segment class=\"top-segment\" (ionChange)=\"tabs($event)\">\r\n    <ion-segment-button value=\"schedule\" *ngIf=\"userData?.user_type\" checked>\r\n      <div class=\"chatBadge\">\r\n        <span>Schedule</span> \r\n        <ion-badge class=\"ml-1\">{{pgCount || 0}}</ion-badge>\r\n      </div> \r\n    </ion-segment-button>\r\n    <!-- <ion-segment-button value=\"hosting\" *ngIf=\"userData?.user_type\" checked>\r\n      <div class=\"chatBadge\">\r\n        <span>Hosting</span> \r\n        <ion-badge class=\"ml-1\">{{programList?.length || 0}}</ion-badge>\r\n      </div> \r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"attending\">\r\n      <div class=\"chatBadge\">\r\n        <span>Attending</span> \r\n        <ion-badge class=\"ml-1\">{{accProgramList?.length || 0}}</ion-badge>\r\n      </div>       \r\n    </ion-segment-button> -->\r\n    <ion-segment-button value=\"requested\">\r\n      <div class=\"chatBadge\">\r\n        <span>Invitation</span> \r\n        <ion-badge class=\"ml-1\">{{reqProgramList?.length || 0}}</ion-badge>\r\n      </div>     \r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <div [ngSwitch]=\"programTabs\">\r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'schedule'\">\r\n      <div *ngIf=\"scheduleList &&  !showAll\">\r\n        <ion-card *ngFor=\"let program of scheduleList; let i = index;\" class=\"ion-no-margin upcomingCard\">\r\n          <ion-item lines=\"none\">\r\n            <ion-avatar slot=\"start\" [routerLink]=\"(program?.user_id == userData?.id) ? ['/program-details',program.id] : ['/program-view',program.id]\">\r\n              <img src=\"{{url}}{{program?.img_arr[0]}}\" *ngIf=\"program?.image_path\">\r\n              <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!program?.image_path\">\r\n            </ion-avatar>\r\n            <ion-label [routerLink]=\"(program?.user_id == userData?.id) ? ['/program-details',program.id] : ['/program-view',program.id]\">\r\n              <h3 class=\"list-person\">{{program?.title}}</h3>\r\n              <span class=\"list-name d-block\">{{program?.type_id}}</span>\r\n              <span class=\"list-name\">By: {{program?.program_user?.user_name}}</span>\r\n              <p class=\"text-green\">{{program?.converted |date:'medium'}}</p>\r\n            </ion-label>\r\n            <div class=\"action-links\" slot=\"end\">\r\n              <ion-icon ios=\"ios-more\" md=\"md-more\" *ngIf=\"(program?.user_id == userData?.id)\" (click)=\"hostingDropdown(program?.id)\"></ion-icon>\r\n              <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(program)\"></ion-icon>\r\n             </div>\r\n          </ion-item>          \r\n        </ion-card>\r\n      </div>\r\n      <div *ngIf=\"showAll\">\r\n        <!-- <ion-card *ngFor=\"let program of allProgramList | programFilter; let j = index;\" class=\"ion-no-margin\"> -->\r\n          <ion-list style=\"display: flex;\" lines=\"none\" class=\"calendar-header\">\r\n            <ion-item class=\"ion-text-left\">\r\n              <ion-button class=\"calend_arrow\" fill=\"clear\" (click)=\"back()\">\r\n                <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n            <ion-item style=\"flex: 1;\">\r\n              <ion-title>{{ viewTitle }}</ion-title>\r\n            </ion-item>\r\n            <!-- Move forward one screen of the slides -->\r\n            <ion-item class=\"ion-text-right\">\r\n              <ion-button class=\"calend_arrow \" fill=\"clear\" (click)=\"next()\">\r\n                <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-list>\r\n          <calendar  [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\r\n              scrollToHour=\"{{currentHrs}}\" (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" startHour=\"6\"\r\n              endHour=\"20\"\r\n              step=\"30\"\r\n              startingDayWeek=\"1\"  class=\"calendar-table swiper-container\">\r\n          </calendar>\r\n        <!-- <ion-card *ngFor=\"let program of allProgramList ; let j = index;\" class=\"ion-no-margin\">\r\n          <ion-item class=\"item-card\">\r\n            <ion-avatar slot=\"start\" [routerLink]=\"(program?.user_id == userData?.id) ? ['/program-details',program.id] : ['/program-view',program.id]\">\r\n              <img src=\"{{url}}{{program?.img_arr[0]}}\" *ngIf=\"program?.image_path\">\r\n              <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!program?.image_path\">\r\n            </ion-avatar>\r\n            <ion-label [routerLink]=\"(program?.user_id == userData?.id) ? ['/program-details',program.id] : ['/program-view',program.id]\">\r\n              <h3 class=\"list-person\">{{program?.title}}</h3>\r\n              <span class=\"list-name d-block\">{{program?.type_id}}</span>\r\n              <span class=\"list-name\">By: {{program?.program_user?.user_name}}</span>\r\n              <p class=\"text-green\">{{program?.converted |date:'medium'}}</p>\r\n            </ion-label>\r\n            <div class=\"action-links\" slot=\"end\">\r\n              <ion-icon ios=\"ios-more\" md=\"md-more\" *ngIf=\"(program?.user_id == userData?.id)\" (click)=\"hostingDropdown(program?.id)\"></ion-icon>\r\n              <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(program)\"></ion-icon>\r\n             </div>\r\n          </ion-item>          \r\n        </ion-card> -->\r\n        <ion-card *ngFor=\"let program of allScheduleList ; let j = index;\" [routerLink]=\"(program?.user_id == userData?.id) ? ['/program-details',program.id] : ['/program-view',program.id]\" class=\"ion-no-margin\">\r\n          <ion-item class=\"item-card\">\r\n            <ion-label class=\"flex-card\">\r\n              <div class=\"title__div\">\r\n                <span class=\"list-name d-block\">{{program?.type_id}}</span>\r\n              </div>\r\n              <div class=\"divider-line\"></div>\r\n              <div class=\"date__div\">\r\n                <h3 class=\"list-person\">{{program?.title}}</h3>\r\n                <p class=\"text-green\">{{program?.converted |date:'medium'}}</p>\r\n                <span class=\"list-name\">By: {{program?.program_user?.user_name}}</span>\r\n              </div>\r\n            </ion-label>\r\n             <ion-icon class=\"primary-color\" ios=\"ios-information-circle\" md=\"md-information-circle\" ></ion-icon>\r\n          </ion-item>          \r\n        </ion-card>\r\n      </div>\r\n      <div *ngIf=\"noAllScheduleList || noScheduleList\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Schedule Program</p>\r\n      </div>\r\n    </ion-list>\r\n    <!-- <ion-list lines=\"none\" *ngSwitchCase=\"'hosting'\">\r\n      <div *ngIf=\"programList &&  !showAll\">\r\n        <ion-card *ngFor=\"let program of programList; let i = index;\" class=\"ion-no-margin\">\r\n          <ion-item>\r\n            <ion-avatar slot=\"start\" [routerLink]=\"['/program-details',program.id]\">\r\n              <img src=\"{{url}}{{program?.img_arr[0]}}\" *ngIf=\"program?.image_path\">\r\n              <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!program?.image_path\">\r\n            </ion-avatar> -->\r\n            <!-- <ion-label [routerLink]=\"['/program-details', program.id]\">\r\n              <h3 class=\"list-person\">{{program?.title}}</h3>\r\n              <span class=\"list-name d-block\">{{program?.type_id}}</span>\r\n              <span class=\"list-name\">By: {{program?.program_user?.user_name}}</span>\r\n              <p class=\"text-green\">{{program?.converted |date:'medium'}}</p>\r\n            </ion-label>\r\n            <div class=\"action-links\" slot=\"end\">\r\n              <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"hostingDropdown(program?.id)\"></ion-icon>\r\n              <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(program)\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\" (click)=\"expandItem(program,1,i)\"\r\n                *ngIf=\"program?.repeate_status!=2\" [ngClass]=\"classVariable == i ? 'active':'deactive'\">\r\n              </ion-icon> -->\r\n            <!-- </div>\r\n          </ion-item> -->\r\n          <!-- <app-expandable expandHeight=\"300px\" class=\"timeline-block\" [expanded]=\"program.expanded\">\r\n            <div class=\"lds-dual-ring\" *ngIf=\"!cloneProg\"></div>\r\n            <ion-list class=\"timeline-list\" lines=\"none\">\r\n              <ion-item *ngFor=\"let item of cloneProg\">\r\n                <ion-label>\r\n                  <h3 class=\"list-person\">{{item?.converted | date:'medium'}} <span class=\"ion-float-right d-flex\">\r\n                      <ion-icon class=\"text-green mr-1\" ios=\"ios-time\" md=\"md-time\"></ion-icon> {{item?.program_duration}}\r\n                      Min.\r\n                    </span> </h3>\r\n                  <p>{{item?.title}} - {{item?.description}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </app-expandable> -->\r\n        <!-- </ion-card>\r\n      </div> -->\r\n      <!-- <div *ngIf=\"showAll\">\r\n        <ion-card *ngFor=\"let program of allProgramList | programFilter; let j = index;\" class=\"ion-no-margin\">\r\n          <ion-item class=\"item-card\">\r\n            <ion-avatar slot=\"start\" [routerLink]=\"['/program-details',program.id]\">\r\n              <img src=\"{{url}}{{program?.img_arr[0]}}\" *ngIf=\"program?.image_path\">\r\n              <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!program?.image_path\">\r\n            </ion-avatar>\r\n            <ion-label [routerLink]=\"['/program-details', program.id]\">\r\n              <h3 class=\"list-person\">{{program?.title}}</h3>\r\n              <span class=\"list-name d-block\">{{program?.type_id}}</span>\r\n              <span class=\"list-name\">By: {{program?.program_user?.user_name}}</span>\r\n              <p class=\"text-green\">{{program?.converted |date:'medium'}}</p>\r\n            </ion-label>\r\n            <div class=\"action-links\" slot=\"end\">\r\n              <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"hostingDropdown(program?.id)\"></ion-icon>\r\n              <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(program)\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\" (click)=\"expandItem(program,4,j)\"\r\n                *ngIf=\"program?.repeate_status!=2\" [ngClass]=\"classVariable == j ? 'active':'deactive'\">\r\n              </ion-icon> -->\r\n            <!-- </div>\r\n\r\n          </ion-item> -->\r\n          <!-- <app-expandable expandHeight=\"300px\" class=\"timeline-block\" [expanded]=\"program.expanded\">\r\n            <div class=\"lds-dual-ring\" *ngIf=\"!cloneProg\"></div>\r\n            <ion-list class=\"timeline-list\" lines=\"none\">\r\n              <ion-item *ngFor=\"let item of cloneProg\">\r\n                <ion-label>\r\n                  <h3 class=\"list-person\">{{item?.converted | date:'medium'}} <span class=\"ion-float-right d-flex\">\r\n                      <ion-icon class=\"text-green\" ios=\"ios-time\" md=\"md-time\"></ion-icon> {{item?.program_duration}}\r\n                      Min.\r\n                    </span> </h3>\r\n                  <p>{{item?.title}} - {{item?.description}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </app-expandable> -->\r\n        <!-- </ion-card>\r\n      </div>\r\n      <div *ngIf=\"programList?.length < 1 && allProgramList?.length<1\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Hosting Program</p>\r\n      </div>\r\n    </ion-list> -->\r\n    <!------------ A T T E N D I N G   P R O G R A M  -->\r\n    <!-- <ion-list lines=\"none\" *ngSwitchCase=\"'attending'\"> -->\r\n      <!-- <app-invite-request  [tabData]=\"accTabData\"></app-invite-request> -->\r\n      <!-- <ion-item class=\"item-card\" *ngFor=\"let item of accProgramList; let k = index;\">\r\n        <ion-avatar slot=\"start\" [routerLink]=\"['/program-view',item.id]\">\r\n          <img src=\"{{url}}{{item?.img_arr[0]}}\" *ngIf=\"item?.image_path\">\r\n          <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n        </ion-avatar>\r\n        <ion-label [routerLink]=\"['/program-view',item.id]\">\r\n          <h3 class=\"list-person\">{{item.title}}</h3>\r\n          <span class=\"list-name d-block\">{{item.type_id}}</span>\r\n          <span class=\"list-name\">By: {{item?.program_user?.user_name}}</span>\r\n          <p class=\"text-green\">{{item?.converted |date:'medium'}}</p>\r\n        </ion-label>\r\n        <div class=\"action-links\" slot=\"end\">\r\n          <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(item)\"></ion-icon> -->\r\n          <!-- <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\" (click)=\"expandItem(item,2,k)\" [ngClass]=\"classVariable == k ? 'active':'deactive'\"></ion-icon> -->\r\n        <!-- </div>\r\n      </ion-item> -->\r\n      <!-- <div *ngIf=\"accProgramList?.length < 1\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Attending Program</p>\r\n      </div> -->\r\n    <!-- </ion-list> -->\r\n    <!-- <app-expandable expandHeight=\"300px\" class=\"timeline-block\" [expanded]=\"item?.expanded\">\r\n      <div class=\"lds-dual-ring\" *ngIf=\"!cloneProg\"></div>\r\n      <ion-list class=\"timeline-list\" lines=\"none\">\r\n        <ion-item *ngFor=\"let item of cloneProg\">\r\n          <ion-label>\r\n            <h3 class=\"list-person\">{{item?.converted | date:'medium'}} <span class=\"ion-float-right d-flex\">\r\n                <ion-icon class=\"text-green\" ios=\"ios-time\" md=\"md-time\"></ion-icon> {{item?.program_duration}}\r\n                Min.\r\n              </span> </h3>\r\n            <p>{{item?.title}} - {{item?.description}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n    </app-expandable> -->\r\n\r\n    <!----------- R E Q U E S T E D   P R O G R A M  -->\r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'requested'\">\r\n     \r\n\r\n      <ion-card *ngFor=\"let item of reqProgramList; let l = index;\" class=\"ion-no-margin upcomingCard\">\r\n      <ion-item lines=\"none\">\r\n        <ion-avatar slot=\"start\" [routerLink]=\"['/program-view',item.id]\">\r\n          <img src=\"{{url}}{{item?.img_arr[0]}}\" *ngIf=\"item?.image_path\">\r\n          <img src=\"../../../assets/images/loading.jpg\" *ngIf=\"!item?.image_path\">\r\n        </ion-avatar>\r\n        <ion-label [routerLink]=\"['/program-view',item.id]\">\r\n          <h3 class=\"list-person\">{{item.title}}</h3>\r\n          <span class=\"list-name d-block\">{{item.type_id}}</span>\r\n          <span class=\"list-name\">By: {{item?.program_user?.user_name}}</span>\r\n          <p class=\"text-green\">{{item?.converted |date:'medium'}}</p>\r\n        </ion-label>\r\n        <div class=\"action-links\" slot=\"end\">\r\n          <ion-icon ios=\"ios-more\" md=\"md-more\" (click)=\"requestDropdown(item.id)\"></ion-icon>\r\n          <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" (click)=\"showSchedule(item)\"></ion-icon>\r\n          <!-- <ion-icon ios=\"ios-arrow-down\" md=\"ios-arrow-down\" (click)=\"expandItem(item,3,l)\" *ngIf=\"item?.repeate_status!=2\" [ngClass]=\"classVariable == l ? 'active':'deactive'\">\r\n          </ion-icon> -->\r\n        </div>\r\n      </ion-item>\r\n      </ion-card>\r\n      <div *ngIf=\"noReqProgramList\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No Requested Program</p>\r\n      </div>\r\n    </ion-list>\r\n    <!-- <app-expandable expandHeight=\"300px\" class=\"timeline-block\" [expanded]=\"item?.expanded\">\r\n      <div class=\"lds-dual-ring\" *ngIf=\"!cloneProg\"></div>\r\n      <ion-list class=\"timeline-list\" lines=\"none\">\r\n        <ion-item *ngFor=\"let item of cloneProg\">\r\n          <ion-label>\r\n            <h3 class=\"list-person\">{{item?.converted | date:'medium'}} <span class=\"ion-float-right d-flex\">\r\n                <ion-icon class=\"text-green\" ios=\"ios-time\" md=\"md-time\"></ion-icon> {{item?.program_duration}}\r\n                Min.\r\n              </span> </h3>\r\n            <p>{{item?.title}} - {{item?.description}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </app-expandable> -->\r\n  </div>\r\n  \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/program/hosting-dropdown/hosting-dropdown.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/program/hosting-dropdown/hosting-dropdown.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramHostingDropdownHostingDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-ios {\n  margin-bottom: 0; }\n\n.list-ios-lines-none .item {\n  --padding-start: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9ob3N0aW5nLWRyb3Bkb3duL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9ncmFtXFxob3N0aW5nLWRyb3Bkb3duXFxob3N0aW5nLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsZ0JBQWdCLEVBQUE7O0FBQzFCO0VBQTJCLGtCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9ob3N0aW5nLWRyb3Bkb3duL2hvc3RpbmctZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pb3N7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5saXN0LWlvcy1saW5lcy1ub25lIC5pdGVtey0tcGFkZGluZy1zdGFydDogMDt9Il19 */";
    /***/
  },

  /***/
  "./src/app/program/hosting-dropdown/hosting-dropdown.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/program/hosting-dropdown/hosting-dropdown.component.ts ***!
    \************************************************************************/

  /*! exports provided: HostingDropdownComponent */

  /***/
  function srcAppProgramHostingDropdownHostingDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HostingDropdownComponent", function () {
      return HostingDropdownComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/program.service */
    "./src/app/services/program.service.ts");

    var HostingDropdownComponent = /*#__PURE__*/function () {
      function HostingDropdownComponent(modalController, navParams, programService, popOver) {
        _classCallCheck(this, HostingDropdownComponent);

        this.modalController = modalController;
        this.navParams = navParams;
        this.programService = programService;
        this.popOver = popOver;
      }

      _createClass(HostingDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.programId = this.navParams.data.id;
          this.user_type = this.navParams.data.user_type;
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this = this;

          this.programService.deleteProgram({
            'programId': this.programId
          }).subscribe(function (data) {
            _this.popOver.dismiss();
          }, function (error) {
            _this.popOver.dismiss();
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.popOver.dismiss();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return HostingDropdownComponent;
    }();

    HostingDropdownComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    HostingDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hosting-dropdown',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hosting-dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/hosting-dropdown/hosting-dropdown.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hosting-dropdown.component.scss */
      "./src/app/program/hosting-dropdown/hosting-dropdown.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _services_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], HostingDropdownComponent);
    /***/
  },

  /***/
  "./src/app/program/invite-request/invite-request.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/program/invite-request/invite-request.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramInviteRequestInviteRequestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9pbnZpdGUtcmVxdWVzdC9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZ3JhbVxcaW52aXRlLXJlcXVlc3RcXGludml0ZS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXNCLGdCQUFnQjtFQUFDLGtCQUFnQjtFQUFHLFlBQVk7RUFBQyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL2ludml0ZS1yZXF1ZXN0L2ludml0ZS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tY2FyZCBpb24tYXZhdGFye2JvcmRlci1yYWRpdXM6IDA7LS1ib3JkZXItcmFkaXVzOiAwO2hlaWdodDogNzVweDt3aWR0aDogMTAwcHg7fSAiXX0= */";
    /***/
  },

  /***/
  "./src/app/program/invite-request/invite-request.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/program/invite-request/invite-request.component.ts ***!
    \********************************************************************/

  /*! exports provided: InviteRequestComponent */

  /***/
  function srcAppProgramInviteRequestInviteRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InviteRequestComponent", function () {
      return InviteRequestComponent;
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


    var _services_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../requested-dropdown/requested-dropdown.component */
    "./src/app/program/requested-dropdown/requested-dropdown.component.ts");

    var InviteRequestComponent = /*#__PURE__*/function () {
      function InviteRequestComponent(programService, commonService) {
        _classCallCheck(this, InviteRequestComponent);

        this.programService = programService;
        this.commonService = commonService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('sdfsdfsd');
      }

      _createClass(InviteRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log(this.tabData);
          var params = null;

          if (this.tabData.tab == 2) {
            var userZoneDate = new Date(this.tabData.date);
            userZoneDate.setHours(0, 0, 0);
            params = {
              'sortDate': userZoneDate.toUTCString()
            };
            console.log(userZoneDate);
            this.programService.getRequestedPrograms(params).subscribe(function (data) {
              _this2.programList = data.list.filter(function (el) {
                el.converted = new Date(el.program_date + 'Z');
                return el;
              });
            });
          } else {
            var _userZoneDate = new Date(this.tabData.date);

            _userZoneDate.setHours(0, 0, 0);

            params = {
              'sortDate': _userZoneDate.toUTCString()
            };
            console.log(_userZoneDate);
            this.programService.getAcceptedPrograms(null).subscribe(function (data) {
              _this2.programList = data.list.filter(function (el) {
                el.converted = new Date(el.program_date + 'Z');
                return el;
              });
            });
          }
        }
      }, {
        key: "ionItemViewWillEnter",
        value: function ionItemViewWillEnter() {}
      }, {
        key: "requestedDropdown",
        value: function requestedDropdown(ev) {
          this.commonService.showPopover(_requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["RequestedDropdownComponent"], 'dropdown-menu', {
            'programId': ev
          });
        }
      }]);

      return InviteRequestComponent;
    }();

    InviteRequestComponent.ctorParameters = function () {
      return [{
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InviteRequestComponent.prototype, "tabData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InviteRequestComponent.prototype, "valueChange", void 0);
    InviteRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invite-request',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invite-request.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/invite-request/invite-request.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invite-request.component.scss */
      "./src/app/program/invite-request/invite-request.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])], InviteRequestComponent);
    /***/
  },

  /***/
  "./src/app/program/program/program-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/program/program/program-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProgramPageRoutingModule */

  /***/
  function srcAppProgramProgramProgramRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramPageRoutingModule", function () {
      return ProgramPageRoutingModule;
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


    var _program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./program.page */
    "./src/app/program/program/program.page.ts");

    var routes = [{
      path: '',
      component: _program_page__WEBPACK_IMPORTED_MODULE_3__["ProgramPage"]
    }];

    var ProgramPageRoutingModule = function ProgramPageRoutingModule() {
      _classCallCheck(this, ProgramPageRoutingModule);
    };

    ProgramPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProgramPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/program/program.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/program/program/program.module.ts ***!
    \***************************************************/

  /*! exports provided: ProgramPageModule */

  /***/
  function srcAppProgramProgramProgramModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramPageModule", function () {
      return ProgramPageModule;
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


    var _program_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./program-routing.module */
    "./src/app/program/program/program-routing.module.ts");
    /* harmony import */


    var _program_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./program.page */
    "./src/app/program/program/program.page.ts");
    /* harmony import */


    var _hosting_dropdown_hosting_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../hosting-dropdown/hosting-dropdown.component */
    "./src/app/program/hosting-dropdown/hosting-dropdown.component.ts");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../profile/components.modules */
    "./src/app/profile/components.modules.ts");
    /* harmony import */


    var _invite_request_invite_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../invite-request/invite-request.component */
    "./src/app/program/invite-request/invite-request.component.ts");
    /* harmony import */


    var _nutrition_list_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../nutrition-list/pipe.module */
    "./src/app/nutrition-list/pipe.module.ts");
    /* harmony import */


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ion2-calendar */
    "./node_modules/ion2-calendar/dist/index.js");
    /* harmony import */


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");

    var ProgramPageModule = function ProgramPageModule() {
      _classCallCheck(this, ProgramPageModule);
    };

    ProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _program_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramPageRoutingModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"], _nutrition_list_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"], // ProgramPageModule.forChild(ProgramPage),
      ionic2_calendar__WEBPACK_IMPORTED_MODULE_12__["NgCalendarModule"]],
      declarations: [_program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"], _hosting_dropdown_hosting_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["HostingDropdownComponent"], _invite_request_invite_request_component__WEBPACK_IMPORTED_MODULE_9__["InviteRequestComponent"]],
      entryComponents: [_hosting_dropdown_hosting_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["HostingDropdownComponent"], _invite_request_invite_request_component__WEBPACK_IMPORTED_MODULE_9__["InviteRequestComponent"]]
    })], ProgramPageModule);
    /***/
  },

  /***/
  "./src/app/program/program/program.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/program/program/program.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramProgramProgramPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-card ion-avatar {\n  border-radius: 0;\n  --border-radius: 0;\n  height: 75px;\n  width: 100px; }\n\nion-item {\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --border-radius: 4px; }\n\n.calendar-days ion-segment-button {\n  min-width: 48px;\n  border: none;\n  color: rgba(0, 0, 0, 0.6); }\n\n.calendar-date ion-segment-button {\n  min-width: 58px;\n  border: none;\n  color: rgba(0, 0, 0, 0.6); }\n\n.calendar-slider .swiper-slide {\n  background: transparent; }\n\n.slideBack {\n  left: 10px; }\n\n.slideNext {\n  right: 10px; }\n\nion-avatar ion-skeleton-text {\n  border-radius: 4px; }\n\nion-label ion-skeleton-text {\n  height: 15px; }\n\n.lds-dual-ring {\n  display: inline-block;\n  width: 100%; }\n\n.lds-dual-ring:after {\n  content: \" \";\n  display: block;\n  width: 30px;\n  height: 30px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 3px solid #27a69a;\n  border-color: #27a69a #f7f7f7 #27a69a #f7f7f7;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite;\n  margin: 10px auto; }\n\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.no-data {\n  height: calc(100vh - 171px); }\n\nion-card {\n  border-bottom: 4px solid #f7f7f7;\n  box-shadow: none;\n  border-radius: 0;\n  --border-radious: 0; }\n\nion-card ion-item {\n    border-bottom: 1px solid #f7f7f7;\n    margin-bottom: 0;\n    box-shadow: 0px 2px 10px 0px rgba(34, 35, 58, 0.14);\n    box-shadow: 0px 2px 10px 0px rgba(0, 33, 30, 0.1);\n    --border-radius: 0;\n    --background: #FFF;\n    border-radius: 0; }\n\nion-card ion-item ion-label h3.list-person {\n      white-space: break-spaces;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical; }\n\nion-card ion-list {\n    background: #f7f7f7; }\n\nion-card .timeline-list ion-item {\n    border-bottom: none;\n    --background: transparent;\n    box-shadow: none; }\n\nion-header ion-item.item-datetime {\n  margin: 0; }\n\nion-header ion-item.item-datetime ion-datetime {\n    padding: 0; }\n\nion-label.active p {\n  width: 18px;\n  height: 18px;\n  background: #FFF;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #2bbbad; }\n\n.programCalendar {\n  text-align: center; }\n\n.programCalendar ion-item {\n    background: #2bbbad;\n    --background: #2bbbad; }\n\n.programCalendar ion-item ion-label {\n      text-align: center;\n      text-transform: uppercase;\n      font-size: 13px;\n      font-weight: 500;\n      color: #FFFf; }\n\n.programCalendar ion-item ion-label p {\n        padding: 0;\n        width: 24px;\n        height: 24px;\n        margin: 10px auto 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #FFF; }\n\n.programCalendar ion-item ion-label.active p {\n      color: #2bbbad; }\n\n.programCalendar + .top-segment + div .no-data {\n  height: calc(100vh - 298px); }\n\n.upcomingCard {\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 5px solid #f7f7f7; }\n\n.upcomingCard ion-avatar {\n    width: 65px;\n    height: 65px; }\n\n.upcomingCard ion-label {\n    line-height: 1.5; }\n\n.swiper-wrapper .slide-container .weekview-allday-table {\n  display: none !important; }\n\nion-slides.slides-container.md.slides-md.swiper-container.hydrated.swiper-container-initialized.swiper-container-horizontal {\n  background: #27A69A !important; }\n\n.table-bordered {\n  border: none !important; }\n\n.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: none !important; }\n\ntd, th {\n  border: 0 !important; }\n\n.calendar {\n  background: #27A69A !important; }\n\n::ng-deep .weekview-allday-table {\n  display: none !important; }\n\n::ng-deep ion-slides.slides-container.md.slides-md.swiper-container.hydrated.swiper-container-initialized.swiper-container-horizontal {\n  background: #27A69A !important; }\n\n::ng-deep td, ::ng-deep th {\n  border: 0 !important; }\n\n::ng-deep .table-bordered {\n  border: 0 !important; }\n\n::ng-deep .slides-container {\n  color: #fff !important;\n  background: #27A69A !important; }\n\n::ng-deep .list-ios {\n  margin-bottom: 0 !important; }\n\n::ng-deep .table > thead > tr > th.weekview-header {\n  font-size: 13px !important;\n  font-weight: 500;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n::ng-deep ion-title.ios.title-ios.title-default.hydrated {\n  padding-inline: 0px; }\n\n.list-person {\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.flex-card {\n  display: flex;\n  align-items: center; }\n\np.text-green {\n  font-size: 14px; }\n\n.divider-line {\n  width: 2px;\n  height: 50px;\n  margin: 0 20px;\n  background-color: #000; }\n\n.title__div {\n  width: 10%; }\n\n.primary-color {\n  color: #27a69a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9ncmFtXFxwcm9ncmFtXFxwcm9ncmFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFzQixnQkFBZ0I7RUFBQyxrQkFBZ0I7RUFBRyxZQUFZO0VBQUMsWUFBWSxFQUFBOztBQUNuRjtFQUFTLGtCQUFrQjtFQUFDLGtCQUFrQjtFQUFDLG9CQUFnQixFQUFBOztBQUMvRDtFQUFrQyxlQUFlO0VBQUMsWUFBWTtFQUFDLHlCQUF3QixFQUFBOztBQUN2RjtFQUFtQyxlQUFlO0VBQUMsWUFBWTtFQUFDLHlCQUF3QixFQUFBOztBQUN4RjtFQUErQix1QkFBdUIsRUFBQTs7QUFDdEQ7RUFBVyxVQUFVLEVBQUE7O0FBQ3JCO0VBQVcsV0FBVyxFQUFBOztBQUN0QjtFQUNzQixrQkFBa0IsRUFBQTs7QUFFeEM7RUFDc0IsWUFBWSxFQUFBOztBQUdsQztFQUNJLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkNBQTRDO0VBQzVDLHFEQUE2QztVQUE3Qyw2Q0FBNkM7RUFDN0MsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0U7SUFDRSx1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLHlCQUF5QixFQUFBLEVBQUE7O0FBTDdCO0VBQ0U7SUFDRSx1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLHlCQUF5QixFQUFBLEVBQUE7O0FBSzdCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQVMsZ0NBQWdDO0VBQUMsZ0JBQWdCO0VBQUMsZ0JBQWdCO0VBQUMsbUJBQWlCLEVBQUE7O0FBQTdGO0lBQ1csZ0NBQWdDO0lBQUMsZ0JBQWdCO0lBQUMsbURBQW1EO0lBQUMsaURBQWtEO0lBQUMsa0JBQWdCO0lBQUcsa0JBQWE7SUFBTSxnQkFBZ0IsRUFBQTs7QUFEMU47TUFHcUIseUJBQXlCO01BQUMsZ0JBQWdCO01BQUMsdUJBQXVCO01BQUMsb0JBQW9CO01BQUMscUJBQXFCO01BQUMsNEJBQTRCLEVBQUE7O0FBSC9KO0lBTVcsbUJBQW1CLEVBQUE7O0FBTjlCO0lBU00sbUJBQW1CO0lBQUMseUJBQWE7SUFBYSxnQkFBZ0IsRUFBQTs7QUFLcEU7RUFDeUIsU0FBUyxFQUFBOztBQURsQztJQUVpQixVQUFVLEVBQUE7O0FBRzNCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBZSxFQUFBOztBQUVqQjtFQUFpQixrQkFBa0IsRUFBQTs7QUFBbkM7SUFFSSxtQkFBbUI7SUFDbkIscUJBQWEsRUFBQTs7QUFIakI7TUFJYyxrQkFBa0I7TUFDMUIseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBOztBQVJsQjtRQVNRLFVBQVU7UUFBQyxXQUFXO1FBQ3RCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFBQyxXQUFXLEVBQUE7O0FBZDNDO01BaUJRLGNBQWMsRUFBQTs7QUFLeEI7RUFDSSwyQkFBMkIsRUFBQTs7QUFFL0I7RUFBYyxnQkFBZ0I7RUFBQyxnQkFBZ0I7RUFBQyxnQ0FBZ0MsRUFBQTs7QUFBaEY7SUFDYSxXQUFXO0lBQUMsWUFBWSxFQUFBOztBQURyQztJQUVZLGdCQUFnQixFQUFBOztBQUk1QjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLG9CQUFtQixFQUFBOztBQUVyQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUVNLHdCQUF3QixFQUFBOztBQUY5QjtFQUtJLDhCQUE4QixFQUFBOztBQUxsQztFQVFJLG9CQUFtQixFQUFBOztBQVJ2QjtFQVdJLG9CQUFtQixFQUFBOztBQVh2QjtFQWNFLHNCQUFzQjtFQUN0Qiw4QkFBOEIsRUFBQTs7QUFmaEM7RUFrQkUsMkJBQTJCLEVBQUE7O0FBbEI3QjtFQXFCRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBc0IsRUFBQTs7QUF4QnhCO0VBMkJFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS9wcm9ncmFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNhcmQgaW9uLWF2YXRhcntib3JkZXItcmFkaXVzOiAwOy0tYm9yZGVyLXJhZGl1czogMDtoZWlnaHQ6IDc1cHg7d2lkdGg6IDEwMHB4O31cclxuaW9uLWl0ZW17bWFyZ2luLWJvdHRvbTogNXB4O2JvcmRlci1yYWRpdXM6IDRweDstLWJvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5jYWxlbmRhci1kYXlzIGlvbi1zZWdtZW50LWJ1dHRvbnttaW4td2lkdGg6IDQ4cHg7Ym9yZGVyOiBub25lO2NvbG9yOiByZ2JhKCAwLDAsMCAsMC42KTt9XHJcbi5jYWxlbmRhci1kYXRlIGlvbi1zZWdtZW50LWJ1dHRvbiB7bWluLXdpZHRoOiA1OHB4O2JvcmRlcjogbm9uZTtjb2xvcjogcmdiYSggMCwwLDAgLDAuNik7fVxyXG4uY2FsZW5kYXItc2xpZGVyIC5zd2lwZXItc2xpZGV7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxyXG4uc2xpZGVCYWNre2xlZnQ6IDEwcHg7fVxyXG4uc2xpZGVOZXh0e3JpZ2h0OiAxMHB4O31cclxuaW9uLWF2YXRhcntcclxuICAgIGlvbi1za2VsZXRvbi10ZXh0e2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAxNXB4O31cclxufVxyXG4vLyAtLS0tLS0tLS0tIGNzcyBsb2FkZXIgLS0tLS0tLS0tLS0tXHJcbi5sZHMtZHVhbC1yaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubGRzLWR1YWwtcmluZzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyN2E2OWE7XHJcbiAgICBib3JkZXItY29sb3I6IzI3YTY5YSAjZjdmN2Y3ICMyN2E2OWEgI2Y3ZjdmNztcclxuICAgIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgLm5vLWRhdGF7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzFweCk7XHJcbiAgfVxyXG4gIGlvbi1jYXJke2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjdmN2Y3O2JveC1zaGFkb3c6IG5vbmU7Ym9yZGVyLXJhZGl1czogMDstLWJvcmRlci1yYWRpb3VzOiAwO1xyXG4gICAgaW9uLWl0ZW17Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7bWFyZ2luLWJvdHRvbTogMDtib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4xNCk7Ym94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDMzLCAzMCwgMC4xMCk7LS1ib3JkZXItcmFkaXVzOiAwOy0tYmFja2dyb3VuZDogI0ZGRjtib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgaDMubGlzdC1wZXJzb257d2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztvdmVyZmxvdzogaGlkZGVuO3RleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO2Rpc3BsYXk6IC13ZWJraXQtYm94Oy13ZWJraXQtbGluZS1jbGFtcDogMjstd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO31cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWxpc3R7YmFja2dyb3VuZDogI2Y3ZjdmNzt9XHJcbiAgICAudGltZWxpbmUtbGlzdHtcclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1oZWFkZXJ7XHJcbiAgICBpb24taXRlbS5pdGVtLWRhdGV0aW1le21hcmdpbjogMDtcclxuICAgICAgaW9uLWRhdGV0aW1le3BhZGRpbmc6IDA7fVxyXG4gICAgfSAgICBcclxuICB9XHJcbiAgaW9uLWxhYmVsLmFjdGl2ZSBweyAgICBcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3IgOiAjMmJiYmFkO1xyXG4gIH0gXHJcbiAgLnByb2dyYW1DYWxlbmRhcnt0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgYmFja2dyb3VuZDogIzJiYmJhZDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMmJiYmFkO1xyXG4gICAgICBpb24tbGFiZWx7dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICNGRkZmO1xyXG4gICAgICAgIHB7cGFkZGluZzogMDt3aWR0aDogMjRweDtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO2NvbG9yOiAjRkZGO31cclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwuYWN0aXZle1xyXG4gICAgICAgIHB7Y29sb3I6ICMyYmJiYWQ7fVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLnByb2dyYW1DYWxlbmRhcisudG9wLXNlZ21lbnQrZGl2IC5uby1kYXRhe1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjk4cHgpO1xyXG59XHJcbi51cGNvbWluZ0NhcmR7Ym9yZGVyLXJhZGl1czogMDtib3gtc2hhZG93OiBub25lO2JvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjdmN2Y3O1xyXG4gIGlvbi1hdmF0YXJ7d2lkdGg6IDY1cHg7aGVpZ2h0OiA2NXB4O31cclxuICBpb24tbGFiZWx7bGluZS1oZWlnaHQ6IDEuNTt9XHJcbn1cclxuXHJcblxyXG4uc3dpcGVyLXdyYXBwZXIgLnNsaWRlLWNvbnRhaW5lciAud2Vla3ZpZXctYWxsZGF5LXRhYmxlIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMuc2xpZGVzLWNvbnRhaW5lci5tZC5zbGlkZXMtbWQuc3dpcGVyLWNvbnRhaW5lci5oeWRyYXRlZC5zd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCB7XHJcbiAgYmFja2dyb3VuZDogIzI3QTY5QSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoLCAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGgsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0aCwgLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkLCAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxudGQsIHRoIHtcclxuICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG59XHJcbi5jYWxlbmRhcntcclxuICBiYWNrZ3JvdW5kOiAjMjdBNjlBICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLndlZWt2aWV3LWFsbGRheS10YWJsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLXNsaWRlcy5zbGlkZXMtY29udGFpbmVyLm1kLnNsaWRlcy1tZC5zd2lwZXItY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsIHtcclxuICAgIGJhY2tncm91bmQ6ICMyN0E2OUEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogMCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG59XHJcbi5zbGlkZXMtY29udGFpbmVyIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICMyN0E2OUEgIWltcG9ydGFudDtcclxufVxyXG4ubGlzdC1pb3N7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC53ZWVrdmlldy1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIDtcclxufVxyXG5pb24tdGl0bGUuaW9zLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcclxuICBwYWRkaW5nLWlubGluZTogMHB4O1xyXG59XHJcbn1cclxuLmxpc3QtcGVyc29ue1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmZsZXgtY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxucC50ZXh0LWdyZWVuIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmRpdmlkZXItbGluZXtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi50aXRsZV9fZGl2e1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuLnByaW1hcnktY29sb3J7XHJcbiAgY29sb3I6ICMyN2E2OWE7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/program/program/program.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/program/program/program.page.ts ***!
    \*************************************************/

  /*! exports provided: ProgramPage */

  /***/
  function srcAppProgramProgramProgramPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramPage", function () {
      return ProgramPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _hosting_dropdown_hosting_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../hosting-dropdown/hosting-dropdown.component */
    "./src/app/program/hosting-dropdown/hosting-dropdown.component.ts");
    /* harmony import */


    var _requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../requested-dropdown/requested-dropdown.component */
    "./src/app/program/requested-dropdown/requested-dropdown.component.ts");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schedule-modal/schedule-modal.component */
    "./src/app/program/schedule-modal/schedule-modal.component.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ionic2-calendar/calendar */
    "./node_modules/ionic2-calendar/calendar.js");

    var ProgramPage = /*#__PURE__*/function () {
      function ProgramPage(popoverController, navCtrl, commonService, programService) {
        _classCallCheck(this, ProgramPage);

        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.programService = programService;
        this.eventSource = [];
        this.calendar = {
          mode: 'week',
          currentDate: new Date()
        };
        this.classVariable = 0;
        this.myDate = new Date().toISOString();
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].ApiUrl;
        this.pgCount = 0;
        this.notShowAll = true;
        this.weekLayout = "";
        this.dayDate = [];
        this.clickActiveClass = '';
        this.noScheduleList = false;
        this.noAllScheduleList = false;
        this.noReqProgramList = false;
        this.items = [];
        this.sliderOpts = {
          zoom: false,
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 5
        };
        var d = new Date();
        this.currentHrs = d.getHours();
        this.items = [{
          expanded: false
        }];
      }

      _createClass(ProgramPage, [{
        key: "tabs",
        value: function tabs(ev) {
          this.programTabs = ev.detail.value;
        }
      }, {
        key: "slidePrev",
        value: function slidePrev(slides) {
          this.slides.slidePrev();
        }
      }, {
        key: "slideNext",
        value: function slideNext(slides) {
          this.slides.slideNext();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userData = JSON.parse(localStorage.getItem('userData'));

          if (this.userData.user_type) {
            this.programTabs = 'schedule';
          } else {
            this.programTabs = 'attending';
          }

          this.myCalender();
        } // My calender

      }, {
        key: "getWeek",
        value: function getWeek(fromDate) {
          var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay())),
              result = [new Date(sunday)];

          while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
            result.push(new Date(sunday));
          }

          return result;
        } // getDaysInMonth(month :any , year:any) {
        //   var date : any = new Date(year, month, 1);
        //   var days : any = [];
        //   while (date.getMonth() === month) {
        //     days.push(new Date(date));
        //     date.setDate(date.getDate() + 1);
        //   }
        //   return months = days;
        // }
        // getYear() {
        //   var mthLayout = ""
        //   for (var i = 0; months.length > i; i++) {
        //     var data = months[i];
        //     mthLayout = mthLayout + "<li>" + data + "</li>";
        //   }
        // if($('.calendar').length > 0){
        //  $('.calendar ul').remove(); $('.calendar').append("<ul>" + mthLayout + "</ul>");
        // } else {
        //   $('.calendar').append("<ul>" + mthLayout + "</ul>");
        // }
        // }

      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(event) {
          var _this3 = this;

          console.log(event);
          this.programService.getAllSelectedUpcomingPrograms({
            'sortDate': event.selectedTime.toUTCString()
          }).subscribe(function (data) {
            console.log(data);
            _this3.allScheduleList = data.data.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.expanded = false;
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });
            _this3.pgCount = _this3.allScheduleList.length;

            _this3.commonService.dismissLoader();

            if (_this3.allScheduleList.length < 1) {
              _this3.noAllScheduleList = true;
            }
          }, function (err) {
            _this3.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this3.commonService.dismissLoader();

            if (_this3.allScheduleList.length < 1) {
              _this3.noAllScheduleList = true;
            }
          });
        }
      }, {
        key: "onViewTitleChanged",
        value: function onViewTitleChanged(title) {
          this.viewTitle = title;
        }
      }, {
        key: "next",
        value: function next() {
          // let swiper = document.querySelector('.swiper-container')['swiper'];
          // swiper.slideNext();
          console.log('hello' + this.myCal);
          this.myCal.slideNext(); // this.slides.slideNext();
        }
      }, {
        key: "back",
        value: function back() {
          // let swiper = document.querySelector('.swiper-container')['swiper'];
          // swiper.slidePrev();
          this.myCal.slidePrev();
        }
      }, {
        key: "myCalender",
        value: function myCalender() {
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth() + 1; //January is 0!

          var yyyy = today.getFullYear();

          if (dd < 10) {
            dd = '0' + dd;
          }

          if (mm < 10) {
            mm = '0' + mm;
          }

          today = mm + '/' + dd + '/' + yyyy;
          var week = this.getWeek(new Date(today));
          this.currentDate = new Date(today).getDate();
          var weekday = new Array(7);
          weekday[0] = "Sun";
          weekday[1] = "Mon";
          weekday[2] = "Tue";
          weekday[3] = "Wed";
          weekday[4] = "Thu";
          weekday[5] = "Fri";
          weekday[6] = "Sat";

          for (var i = 0; week.length > i; i++) {
            var date = new Date(week[i]).getDate();

            if (this.currentDate == date) {
              var addClass = 'active';
              var addDisableClass = 0;
            } else if (this.currentDate > date) {
              var addClass = '';
              var addDisableClass = 1;
            } else {
              var addDisableClass = 0;
              var addClass = '';
            }

            this.dayDate.push({
              "day": weekday[week[i].getDay()],
              "date": date,
              'activeClass': addClass,
              'myDate': week[i],
              'disableClass': addDisableClass
            });
          }

          var months = "";
          var cal = false; // $('a#mth').click(function(e) {
          //  if(cal == false){
          //   cal = true;
          //   this.getDaysInMonth(4, 2017);
          //   console.log(months);
          //   getYear();
          //   } else {
          //   cal = false;
          // $('.calendar ul').remove(); $('.calendar').append("<ul>" + weekLayout + "</ul>");
          //   }
          //   e.preventDefault();
          // });
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          var _this4 = this;

          this.noScheduleList = false;

          if (this.showAll) {
            this.commonService.presentLoader();
            this.notShowAll = false;
            this.programService.getAllUpcomingPrograms(null).subscribe(function (data) {
              _this4.allProgramList = data.data.filter(function (el) {
                if (el.image_path) {
                  el.img_arr = el.image_path.split(',');
                }

                el.converted = new Date(el.program_date + 'Z');
                el.expanded = false;
                return el;
              });
              var resultArray = [];
              var progIdList = [];

              _this4.allProgramList.forEach(function (item, i) {
                if (item.repeate_status == 2) {
                  resultArray.push(item);
                } else {
                  if (item.repeate_status == 1) {
                    resultArray.push(item);
                    progIdList.push(item.id);
                  } else {
                    if (!progIdList.includes(item.parent_program)) {
                      resultArray.push(item);
                      progIdList.push(item.parent_program);
                    }
                  }
                }
              });

              console.log(_this4.allProgramList);

              _this4.commonService.dismissLoader();

              _this4.pgCount = resultArray.length;

              _this4.commonService.presentToast("All upcoming programs listed");

              if (_this4.pgCount < 1) {
                _this4.noScheduleList = true;
              }
            }, function (err) {
              _this4.commonService.dismissLoader();

              _this4.commonService.presentToast("Couldnt load data, Something went wrong.");

              if (_this4.pgCount < 1) {
                _this4.noScheduleList = true;
              }
            });
          } else {
            this.commonService.dismissLoader();
            this.notShowAll = true;
            this.allProgramList = null;
            this.pgCount = this.scheduleList.length;

            if (this.pgCount < 1) {
              this.noScheduleList = true;
            }
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          this.accTabData = {
            'tab': 1,
            'date': this.myDate
          };
          this.reqTabData = {
            'tab': 2,
            'date': this.myDate
          };
          var events = [];
          events.push({
            allDay: false
          });
          this.eventSource = events; // this.programService.getHostedPrograms(null).subscribe(data => {
          //   this.programList = data.programList.filter(el => {
          //     if (el.image_path) {
          //       el.img_arr = el.image_path.split(',');
          //     }
          //     el.converted = new Date(el.program_date + 'Z');
          //     el.expanded = false;
          //     return el;
          //   });      
          // },
          // err=> {
          //   this.commonService.presentToast("Couldnt load data, Something went wrong.")
          // }
          // );

          this.commonService.presentLoader();
          this.programService.getRequestedPrograms(null).subscribe(function (data) {
            _this5.reqProgramList = data.list.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            }, function (err) {
              _this5.commonService.presentToast("Couldnt load data, Something went wrong.");
            });

            _this5.commonService.dismissLoader();

            if (_this5.reqProgramList.length < 1) {
              _this5.noReqProgramList = true;
            }
          }, function (err) {
            _this5.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this5.commonService.dismissLoader();

            if (_this5.reqProgramList.length < 1) {
              _this5.noReqProgramList = true;
            }
          });
          this.programService.getSchedulePrograms(null).subscribe(function (data) {
            _this5.scheduleList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
            _this5.pgCount = _this5.scheduleList.length;

            _this5.commonService.dismissLoader();

            if (_this5.pgCount < 1) {
              _this5.noScheduleList = true;
            }
          }, function (err) {
            _this5.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this5.commonService.dismissLoader();

            if (_this5.pgCount < 1) {
              _this5.noScheduleList = true;
            }
          }); // this.programService.getAcceptedPrograms(null).subscribe(data => {
          //   if(data.list != null){
          //   this.accProgramList = data.list.filter(el => {
          //     if (el.image_path) {
          //       el.img_arr = el.image_path.split(',');
          //     }
          //     el.converted = new Date(el.program_date + 'Z');
          //     el.expanded = false;
          //     return el;
          //   });
          // }
          // },
          // err=> {
          //   this.commonService.presentToast("Couldnt load data, Something went wrong.")
          // }
          // );
        }
      }, {
        key: "hostingDropdown",
        value: function hostingDropdown(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.create({
                      component: _hosting_dropdown_hosting_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["HostingDropdownComponent"],
                      componentProps: {
                        "id": ev,
                        "user_type": this.userData.user_type
                      },
                      translucent: false,
                      cssClass: 'dropdown-menu'
                    });

                  case 2:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this6.ionViewWillEnter();
                      }
                    });
                    _context2.next = 6;
                    return popover.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.commonService.dismissLoader();
          this.navCtrl.back();
        }
      }, {
        key: "showSchedule",
        value: function showSchedule(event) {
          this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleModalComponent"], 'fullModal', {
            'programDetail': event,
            'user_type': this.userData.user_type
          });
        }
      }, {
        key: "expandItem",
        value: function expandItem(item, type, index) {
          var _this7 = this;

          var id;

          if (item.parent_program) {
            id = item.parent_program;
          } else {
            id = item.id;
          }

          if (item.expanded) {
            item.expanded = false;
            this.classVariable = -index;
          } else {
            this.programService.getProgramById({
              'parentId': id
            }).subscribe(function (data) {
              _this7.cloneProg = data.cloneList.filter(function (el) {
                el.converted = new Date(el.program_date + 'Z');
                return el;
              });
            });

            if (type == 1) {
              this.programList.map(function (listItem) {
                if (item == listItem) {
                  listItem.expanded = !listItem.expanded;
                  _this7.classVariable = index;
                } else {
                  listItem.expanded = false;
                  _this7.classVariable = -index;
                }

                return listItem;
              });
            } else if (type == 2) {
              this.accProgramList.map(function (listItem) {
                if (item == listItem) {
                  listItem.expanded = !listItem.expanded;
                  _this7.classVariable = index;
                } else {
                  listItem.expanded = false;
                  _this7.classVariable = -index;
                }

                return listItem;
              });
            } else if (type == 3) {
              this.reqProgramList.map(function (listItem) {
                if (item == listItem) {
                  listItem.expanded = !listItem.expanded;
                  _this7.classVariable = index;
                } else {
                  listItem.expanded = false;
                  _this7.classVariable = -index;
                }

                return listItem;
              });
            } else if (type == 4) {
              this.allProgramList.map(function (listItem) {
                if (item == listItem) {
                  listItem.expanded = !listItem.expanded;
                  _this7.classVariable = index;
                } else {
                  listItem.expanded = false;
                  _this7.classVariable = -index;
                }

                return listItem;
              });
            }
          }
        }
      }, {
        key: "mySortDate",
        value: function mySortDate(selectedDate, index) {
          var _this8 = this;

          console.log(index + 'index val');
          this.dayDate.forEach(function (item, i) {
            console.log(i + 'i');

            if (i == index) {
              item.activeClass = 'active sc-ion-label-md-h sc-ion-label-md-s md hydrated';
            } else {
              item.activeClass = 'sc-ion-label-md-h sc-ion-label-md-s md hydrated';
            }
          });
          this.commonService.presentLoader();
          this.noScheduleList = false;
          this.noReqProgramList = false;
          var today = new Date();
          var userZoneDate = new Date(selectedDate);
          userZoneDate.setHours(today.getHours(), today.getMinutes(), today.getSeconds());
          console.log(userZoneDate);
          console.log(userZoneDate.toUTCString());
          this.programService.getSchedulePrograms({
            'sortDate': userZoneDate.toUTCString()
          }).subscribe(function (data) {
            _this8.scheduleList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.expanded = false;
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });
            _this8.pgCount = _this8.scheduleList.length;

            _this8.commonService.dismissLoader();

            console.log(_this8.pgCount, 'count');

            if (_this8.scheduleList.length < 1) {
              _this8.noScheduleList = true; // this.noAllScheduleList = true;
            }
          }, function (err) {
            _this8.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this8.commonService.dismissLoader();

            if (_this8.scheduleList.length < 1) {
              _this8.noScheduleList = true;
            }
          });
          this.programService.getRequestedPrograms({
            'sortDate': userZoneDate.toUTCString()
          }).subscribe(function (data) {
            _this8.reqProgramList = data.list.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.expanded = false;
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });

            _this8.commonService.dismissLoader();

            if (_this8.reqProgramList.length < 1) {
              _this8.noReqProgramList = true;
            }
          }, function (err) {
            _this8.commonService.presentToast("Couldnt load data, Something went wrong.");

            _this8.commonService.dismissLoader();

            if (_this8.reqProgramList.length < 1) {
              _this8.noReqProgramList = true;
            }
          });
        }
      }, {
        key: "sortDate",
        value: function sortDate(ev) {
          var _this9 = this;

          var userZoneDate = new Date(this.myDate);
          var temp = userZoneDate.setHours(0, 0, 0);
          this.programService.getHostedPrograms({
            'sortDate': userZoneDate.toUTCString()
          }).subscribe(function (data) {
            _this9.programList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.expanded = false;
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });
          });
          this.programService.getRequestedPrograms({
            'sortDate': userZoneDate.toUTCString()
          }).subscribe(function (data) {
            _this9.reqProgramList = data.list.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.expanded = false;
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });
          });
          this.programService.getAcceptedPrograms({
            'sortDate': userZoneDate.toUTCString()
          }).subscribe(function (data) {
            _this9.accProgramList = data.list.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.expanded = false;
              el.converted = new Date(el.program_date + 'Z');
              return el;
            });
          });
        }
      }, {
        key: "requestDropdown",
        value: function requestDropdown(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this10 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _requested_dropdown_requested_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["RequestedDropdownComponent"],
                      componentProps: {
                        "id": ev,
                        "user_type": this.userData.user_type
                      },
                      translucent: false,
                      cssClass: 'dropdown-menu'
                    });

                  case 2:
                    popover = _context3.sent;
                    popover.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this10.ionViewWillEnter();
                      }
                    });
                    _context3.next = 6;
                    return popover.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "tostmess",
        value: function tostmess() {
          this.commonService.presentToast('Past date program not allowed');
        }
      }]);

      return ProgramPage;
    }();

    ProgramPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"])], ProgramPage.prototype, "myCal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], ProgramPage.prototype, "slides", void 0);
    ProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./program.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program/program.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./program.page.scss */
      "./src/app/program/program/program.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _services_program_service__WEBPACK_IMPORTED_MODULE_8__["ProgramService"]])], ProgramPage);
    /***/
  }
}]);
//# sourceMappingURL=program-program-program-module-es5.js.map