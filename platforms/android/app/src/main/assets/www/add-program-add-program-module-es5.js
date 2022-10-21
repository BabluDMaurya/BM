function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-program-add-program-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddProgramAddProgramPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Add Program</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"nextStep(2)\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"12\"  class=\"ion-no-padding video_col\" *ngIf=\"videoFileSelected\">\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n        <ion-slide >\r\n          \r\n          <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n          <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n        </ion-slide>\r\n        </ion-slides>  \r\n      </ion-col>   -->\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gallaryImgPath?.length>0 || videoFileSelected\">\r\n        <ion-button (click)=\"slidePrev()\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide *ngIf=\"isVideoSelected\">\r\n            <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\"\r\n              src=\"../../assets/images/demo3.jpg\">\r\n            <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\"\r\n              (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext()\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-item-sliding *ngFor=\"let f of files\">\r\n        <ion-item (click)=\"openFile(f)\">\r\n          <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\r\n          <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\r\n          <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\r\n\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ f.name }}\r\n            <p>{{ f.fullPath }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n      <!-- \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\">\r\n            <img src=\"../../assets/images/demo1.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo2.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo3.jpg\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"programForm\">\r\n          <ion-list>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input class=\"form-control\" formControlName=\"programTitle\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.programTitle.errors }\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ng-container *ngFor=\"let validation of validation_messages.programTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || programForm.get('programTitle').touched) && programForm.get('programTitle').hasError(validation.type)\">{{\r\n                validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"mb-10 floatingItem\">\r\n              <ion-label position=\"floating\">Description </ion-label>\r\n              <ion-textarea class=\"form-control\" formControlName=\"programDescription\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Program Type</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group class=\"full-width radio-list\" formControlName=\"programType\">\r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Private - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Group - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item> -->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Video</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"6\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Private</ion-label>\r\n                      <!-- <ion-label>One to One</ion-label> -->\r\n                      <!-- <ion-label>Private - Twoway</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"3\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Group</ion-label>\r\n                      <!-- <ion-label>Many to Many</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"4\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Broadcast</ion-label>\r\n                      <!-- <ion-label>One to Many</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"5\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>                    \r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Nutrition</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"7\" formControlName=\"programType\" disabled=\"true\"></ion-radio>\r\n                    </ion-item> -->\r\n                  </ion-radio-group>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.programType\">\r\n                    <span class=\"error-message\"\r\n                      *ngIf=\"(submitted || programForm.get('programType').touched) && programForm.get('programType').hasError(validation.type)\">{{\r\n                      validation.message }}</span>\r\n                  </ng-container>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Invitation Type</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"participantsType\">\r\n                    <ion-item lines=\"none\" (click)=\"userModal()\">\r\n                      <ion-label>Exclusive</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"participantsType\"\r\n                        [disabled]=\"f.programType.value==5 || !f.programType.value?true:false\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\" (click)=\"clearExcl()\">\r\n                      <ion-label>Open</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" checked formControlName=\"participantsType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\" (click)=\"clearExcl()\">\r\n                      <ion-label>Approval</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"3\" checked formControlName=\"participantsType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ng-container *ngFor=\"let validation of validation_messages.participantsType\">\r\n                      <span class=\"error-message\"\r\n                        *ngIf=\"(submitted || programForm.get('participantsType').touched) && programForm.get('participantsType').hasError(validation.type)\">{{\r\n                        validation.message }}</span>\r\n                    </ng-container>\r\n                  </ion-radio-group>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-item class=\"mb-10\" *ngIf=\"modalData?.length>0\">\r\n                  <ion-list lines=\"none\" class=\"users-list\">\r\n                    <ion-item *ngFor=\"let user of modalData\">\r\n                      <img src=\"{{profileUrl}}{{user.bios.profile_pic}}\" *ngIf=\"user.bios.profile_pic\"\r\n                        (click)=\"userList()\" />\r\n                      <img src=\"../../assets/images/user.png\" *ngIf=\"!user.bios.profile_pic\" (click)=\"userList()\" />\r\n                      <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-item>\r\n            <!-- <ion-item class=\"mb-10\" *ngIf=\"this.programForm.controls.participantsType.value == 2\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Share Program On Feed</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"feedStatus\">\r\n                    <ion-item lines=\"none\" >\r\n                      <ion-label>Yes</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" [checked]=\"true\" formControlName=\"feedStatus\"\r\n                        ></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\">\r\n                      <ion-label>No</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\"  formControlName=\"feedStatus\"></ion-radio>\r\n                    </ion-item>\r\n                   \r\n                  </ion-radio-group>\r\n                </ion-col>\r\n              <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              </ion-col>\r\n              </ion-row>  \r\n            </ion-item> -->\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Messages</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"chatStatus\">\r\n\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Enable</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" checked formControlName=\"chatStatus\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\">\r\n                      <ion-label>Disable</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" formControlName=\"chatStatus\"></ion-radio>\r\n                    </ion-item>\r\n                    <ng-container *ngFor=\"let validation of validation_messages.chatStatus\">\r\n                      <span class=\"error-message\"\r\n                        *ngIf=\"(submitted || programForm.get('chatStatus').touched) && programForm.get('chatStatus').hasError(validation.type)\">{{\r\n                        validation.message }}</span>\r\n                    </ng-container>\r\n                  </ion-radio-group>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==2\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"backToFirst()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Select Date & Time</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <!-- <ion-label (click)=\"toLastScreen()\" class=\"text-green\">Next</ion-label> -->\r\n          <ion-label *ngIf=\"repetatedDateCopy.length > 0\" (click)=\"toPrevScreen()\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <!-- Move back one screen of the slides -->\r\n        <ion-list lines=\"none\" class=\"calendar-header\">\r\n          <ion-item class=\"ion-text-left\">\r\n            <ion-button class=\"calend_arrow\" fill=\"clear\" (click)=\"back()\">\r\n              <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-title>{{ viewTitle }}</ion-title>\r\n          </ion-item>\r\n          <!-- Move forward one screen of the slides -->\r\n          <ion-item class=\"ion-text-right\">\r\n            <ion-button class=\"calend_arrow \" fill=\"clear\" (click)=\"next()\">\r\n              <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n        <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\r\n          scrollToHour=\"{{currentHrs}}\" (onEventSelected)=\"onEventSelected($event)\"\r\n          (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" startHour=\"0\"\r\n          endHour=\"24\" step=\"1\" class=\"calendar-table swiper-container\"></calendar>\r\n        <!-- <ion-datetime #dateTime1 displayFormat=\"mm\"></ion-datetime> -->\r\n        <ion-item *ngIf=\"scheduleProgram == 'program'\" style=\"position: relative; --min-height: 30px;\"\r\n          class=\"ion-no-padding ion-text-center\">\r\n          <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" *ngIf=\"calendar.mode == 'week'\"\r\n            (click)=\"handleCalendarView()\"></ion-icon>\r\n          <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\" *ngIf=\"calendar.mode == 'month'\"\r\n            (click)=\"handleCalendarView()\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <!-- <ion-list-header  *ngIf=\"repetatedDateCopy.length <= 0\" class=\" green green-alram-icon text-white\"> -->\r\n      <!-- <ion-list-header class=\"green-alram-icon\">\r\n          <ion-icon ios=\"ios-add\" md=\"md-add\" (click)=\"addLiveProgram()\" style=\"width: 1.5rem; height: 1.5rem;\"></ion-icon>\r\n        </ion-list-header> -->\r\n\r\n      <ion-list-header class=\" dateTimePopUp green green-alram-icon text-white\" style=\"display: none;\">\r\n        <div class='showDateTime'>\r\n          <ion-datetime display-format=\"h:mm A\" #picker picker-format=\"h:mm A\" id=\"dat\" [(ngModel)]=\"myDate\"\r\n            (ngModelChange)=\"showdate()\"></ion-datetime>\r\n        </div>\r\n      </ion-list-header>\r\n      <div class=\"live-event-addition\">\r\n        <h5>Select Date to add Event</h5>\r\n      </div>\r\n      <!-- <div class=\"live-event-box\">\r\n        <p class=\"live-event-head\">Live Events</p>\r\n        <div class=\"live-event-info\">\r\n          <div class=\"live-event-details\">\r\n            <p>5:35 PM-5:50 PM</p>\r\n            <div class=\"small-divider\"></div>\r\n            <p>Private</p>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"program__card\" *ngFor=\"let date of repetatedDateCopy let i = index\">\r\n        <ion-list class=\"width-full\">\r\n          <!-- <div *ngIf=\"date.date == dateObj\">  -->\r\n          <!-- <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n            {{date.date | date :'medium'}}\r\n            <div class=\"toggleDiv\"  (click)=\"toggleIcon(item)\"> -->\r\n          <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\" (click)=\"toggleIcon(item)\" checked={{date.is_live}}  slot=\"end\"></ion-toggle>\r\n              <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"toggleIcon(item)\" [ngClass]=\"{'active': item.active}\"></ion-icon> -->\r\n          <!-- <ion-label class=\"live\"  (ionChange)=\"activatePopup(i)\"   [ngClass]=\"{'active': item.active}\">LIVE</ion-label>\r\n            </div>\r\n            <div class=\"calender_green_bottom\"> -->\r\n          <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\"  checked={{date.is_live}}  slot=\"end\"></ion-toggle> -->\r\n          <!-- <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"activatePopup(i)\" [ngClass]=\"{'active': date.is_live}\"></ion-icon>\r\n              <ion-icon ios=\"ios-construct\" md=\"md-construct\" class=\"ion-margin-start\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n              <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n              </ion-icon>\r\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon> -->\r\n          <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n          <!-- <ion-icon ios=\"ios-close\" md=\"md-close-circle\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\"></ion-icon> -->\r\n          <!-- </div>\r\n            \r\n          </ion-list-header> -->\r\n          <ion-list-header class=\"ion-padding-horizontal green text-white live-ion-list-header\">\r\n            <div class=\"title\">\r\n              {{date.date | date :'mediumDate'}}\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"calender_green_bottom\">\r\n              <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\"  checked={{date.is_live}}  slot=\"end\"></ion-toggle> -->\r\n              <!-- <ion-icon class=\"live-icon\" (click)=\"picker.open()\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"activatePopup(i)\" [ngClass]=\"{'active': date.is_live}\"></ion-icon> -->\r\n              <div class=\"toggleDiv\" *ngIf=\"programForm.value.programType != 6\" (click)=\"toggleIcon(item)\">\r\n                <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\" (click)=\"toggleIcon(item)\" checked={{date.is_live}}  slot=\"end\"></ion-toggle>\r\n                <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"toggleIcon(item)\" [ngClass]=\"{'active': item.active}\"></ion-icon> -->\r\n                <!-- <ion-label class=\"live\"  (ionChange)=\"activatePopup(i)\"   [ngClass]=\"{'active': item.active}\"></ion-label> -->\r\n                <ion-label class=\"live\" (click)=\"openStart(i)\" (ionChange)=\"activatePopup(i)\"\r\n                  [ngClass]=\"{'active': date.is_live}\"></ion-label>\r\n              </div>\r\n              <!-- <ion-icon *ngIf=\"date.is_live && programForm.value.programType != 6\" ios=\"ios-clock\" (click)=\"editProgramTime(i)\" md=\"md-clock\" class=\"ion-margin-start\"\r\n              ></ion-icon> -->\r\n              <ion-icon ios=\"ios-fitness\" md=\"md-fitness\" class=\"ion-margin-start\"\r\n                (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n              <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\"\r\n                (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n              </ion-icon>\r\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\">\r\n              </ion-icon>\r\n              <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-close\" md=\"md-close-circle\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\"></ion-icon> -->\r\n            </div>\r\n\r\n          </ion-list-header>\r\n\r\n          <ion-item *ngIf=\"date?.equipments.length>0\">\r\n            <ion-icon class=\"live-event-icon\" ios=\"ios-fitness\" md=\"md-fitness\"></ion-icon>\r\n            <!-- <ion-label style=\"overflow: initial;\">Equipments :</ion-label> -->\r\n            <div class=\"users-list\" *ngIf=\"date?.equipments.length>0;else no_equipment\">\r\n              <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of date?.equipments\" />\r\n            </div>\r\n            <!-- <ng-template #no_equipment>No Equipment Selected</ng-template> -->\r\n          </ion-item>\r\n          <ion-item *ngIf=\"date.nutrition_id.length > 0\">\r\n            <ion-icon class=\"live-event-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n            <!-- <ion-label style=\"overflow: initial;\">Nutritions :</ion-label> -->\r\n            <div class=\"users-list\" *ngIf=\"date.nutrition_id.length>0;else no_nutrition\">\r\n              <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.nutrition_id\" />\r\n            </div>\r\n            <!-- <ng-template #no_nutrition>No Nutrition Selected</ng-template> -->\r\n          </ion-item>\r\n          <ion-item *ngIf=\"date?.video\">\r\n            <ion-icon class=\"live-event-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n            <!-- <ion-label style=\"overflow: initial;\">Videos :</ion-label> -->\r\n            <div class=\"users-list\" *ngIf=\"date?.video;else no_videos\">\r\n              <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.video\" />\r\n            </div>\r\n            <!-- <ng-template #no_videos>No videos Selected</ng-template> -->\r\n          </ion-item>\r\n          <!-- <ion-item class=\"descriptionItem\">\r\n            <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,item?.id)\"\r\n                value=\"{{item?.description}}\"></ion-textarea>\r\n          </ion-item> -->\r\n          <!-- </div> -->\r\n\r\n        </ion-list>\r\n        <div class=\"closeIcon\">\r\n          <ion-icon ios=\"ios-close\" md=\"md-close\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\">\r\n          </ion-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <ion-item class=\"date_items\" *ngFor=\"let dates of repetatedDateCopy; let i =index\"> \r\n        <h6 >{{dates.date | date :'medium'}} </h6>\r\n        <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemovedate(i)\"></ion-icon>\r\n      </ion-item>  -->\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==3\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=2\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" (click)=\"selectVolume()\">\r\n          <ion-label class=\"text-green\">Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <div class=\"main_content ion-padding programPreview\">\r\n      <form [formGroup]=\"finalForm\" (ngSubmit)=\"saveProg()\" class=\"fixed\">\r\n        <h6 style=\"margin: 0 0 15px 0\">Program Name: {{ programDetail.title }}</h6>\r\n        <ion-item lines=\"none\" class=\"fixed\">\r\n          <ion-label style=\"display: contents;\">How much would you like to charge:</ion-label>\r\n          <ion-label style=\"    margin-left: 40px;\">$</ion-label>\r\n          <ion-input class=\"form-control\" type=\"number\" formControlName=\"programFees\" value=\"0\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"programDetail.type_id == 'video'\" class=\"margin-top-md\">\r\n          <ion-label style=\"display: block;margin-top: 15px; padding-left: 15px;\">Would you like to request Sponsors:\r\n          </ion-label>\r\n          <ion-item lines=\"none\">\r\n            <ion-radio-group value=\"sponsors_group\" class=\"radio-group radioPreview\">\r\n              <ion-item>\r\n                <ion-label>Yes</ion-label>\r\n                <ion-radio slot=\"start\" value=\"1\" (click)=\"sponsar_prog()\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>No</ion-label>\r\n                <ion-radio slot=\"start\" value=\"2\" (click)=\"unsponsar_prog()\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <ion-list class=\"prog_btn_list\">\r\n          <ion-item lines=\"none\" (click)=\"verifyUserInfoModal()\"\r\n            *ngIf=\"loginUserData.trilloMatch != '1' && programDetail.type_id != 'video' \">\r\n            <ion-button class=\"green btn button-medium\">Earn with Intoactive</ion-button>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\" (click)=\"verifyUserInfoModal() \">\r\n        <ion-button class=\"green btn button-medium\">Earn with Intoative</ion-button>\r\n      </ion-item> -->\r\n          <ion-item class=\"\" *ngIf=\"approval_btn && !request_approve_btn \">\r\n            <ion-button (click)=\"applyAdvertise()\" class=\"green btn button-medium\">Request Approval</ion-button>\r\n          </ion-item>\r\n          <!-- <ion-item class=\"\" *ngIf=\"request_approve_btn\">\r\n        <ion-button class=\"green btn button-medium\">Request Sent</ion-button> \r\n      </ion-item> -->\r\n        </ion-list>\r\n      </form>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player-program/audio-player-program.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player-program/audio-player-program.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAudioPlayerProgramAudioPlayerProgramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<audio #player src=\"{{selectedAudio[0]}}\"></audio>\r\n<div class=\"musicWrapper\">\r\n<ion-toolbar padding class=\"audio-list ion-no-padding\">\r\n  <div class=\"audio-listInner\">\r\n    <ion-fab-button *ngIf=\"!isPlaying\" (click)=\"play(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n      <ng-container *ngIf=\"isLoading; else loaded\">\r\n        <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n      </ng-container>\r\n      <ng-template #loaded>\r\n        <ion-icon [name]=\"'play'\">  </ion-icon>\r\n      </ng-template>\r\n    </ion-fab-button>\r\n    <ion-fab-button *ngIf=\"isPlaying\" (click)=\"pause(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n      <ng-container *ngIf=\"isLoading; else loaded\">\r\n        <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n      </ng-container>\r\n      <ng-template #loaded>\r\n        <ion-icon [name]=\"'pause'\">\r\n        </ion-icon>\r\n      </ng-template>\r\n    </ion-fab-button>\r\n    <div>\r\n      <div class=\"musicbar\">\r\n        <ion-range  [value]=\"currentTime\" (ionChange)=\"seek($event)\" (click)=\"onDrag()\"\r\n           class=\"newmusiclist-range\" color=\"light\"></ion-range>\r\n       </div>\r\n       <div>\r\n        <!-- <div class=\"music-name\">\r\n          <ion-label color=\"light\" slot=\"end\">{{ musicSelect?.title }}</ion-label> \r\n        </div> -->\r\n        <div class=\"music-timer-fav\">\r\n          <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n          <div></div>\r\n        </div>   \r\n        <div class=\"music-name\">\r\n          <ion-label class=\"ion-text-center\">{{selectedAudio[2]}}</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label> -->\r\n</ion-toolbar>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/add-program/add-program-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-program/add-program-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddProgramPageRoutingModule */

  /***/
  function srcAppAddProgramAddProgramRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProgramPageRoutingModule", function () {
      return AddProgramPageRoutingModule;
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


    var _add_program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-program.page */
    "./src/app/add-program/add-program.page.ts");

    var routes = [{
      path: '',
      component: _add_program_page__WEBPACK_IMPORTED_MODULE_3__["AddProgramPage"]
    }, {
      path: 'program-details/:programId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | program-details-program-details-module */
        "program-details-program-details-module").then(__webpack_require__.bind(null,
        /*! ./program-details/program-details.module */
        "./src/app/add-program/program-details/program-details.module.ts")).then(function (m) {
          return m.ProgramDetailsPageModule;
        });
      }
    }];

    var AddProgramPageRoutingModule = function AddProgramPageRoutingModule() {
      _classCallCheck(this, AddProgramPageRoutingModule);
    };

    AddProgramPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddProgramPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-program/add-program.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-program/add-program.module.ts ***!
    \***************************************************/

  /*! exports provided: AddProgramPageModule */

  /***/
  function srcAppAddProgramAddProgramModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProgramPageModule", function () {
      return AddProgramPageModule;
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


    var _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-program-routing.module */
    "./src/app/add-program/add-program-routing.module.ts");
    /* harmony import */


    var _audio_player_program_audio_player_program_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../audio-player-program/audio-player-program.component */
    "./src/app/audio-player-program/audio-player-program.component.ts");
    /* harmony import */


    var _add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../add-program/program-nutrition-detail-modal/program-nutrition-detail-modal.component */
    "./src/app/add-program/program-nutrition-detail-modal/program-nutrition-detail-modal.component.ts");
    /* harmony import */


    var _add_program_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-program.page */
    "./src/app/add-program/add-program.page.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");
    /* harmony import */


    var _profile_components_modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../profile/components.modules */
    "./src/app/profile/components.modules.ts");
    /* harmony import */


    var _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../add-program/calender-month-week-time/calender-month-week-time.component */
    "./src/app/add-program/calender-month-week-time/calender-month-week-time.component.ts");
    /* harmony import */


    var src_app_modalContent_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/modalContent/terms-condition/terms-condition.component */
    "./src/app/modalContent/terms-condition/terms-condition.component.ts"); // import { ViewVideoDetailComponent } from './../add-program/view-video-detail/view-video-detail.component';


    var AddProgramPageModule = function AddProgramPageModule() {
      _classCallCheck(this, AddProgramPageModule);
    };

    AddProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProgramPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__["NgCalendarModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"]],
      declarations: [_add_program_page__WEBPACK_IMPORTED_MODULE_8__["AddProgramPage"], _audio_player_program_audio_player_program_component__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerProgramComponent"], _add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"], src_app_modalContent_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_12__["TermsConditionComponent"]],
      entryComponents: [_add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"], src_app_modalContent_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_12__["TermsConditionComponent"]]
    })], AddProgramPageModule);
    /***/
  },

  /***/
  "./src/app/add-program/add-program.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/add-program/add-program.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddProgramAddProgramPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".note {\n  color: #000;\n}\n\n.users-list {\n  display: flex;\n  width: auto;\n}\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: auto;\n}\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list ion-item img:first-child {\n  margin-left: 0;\n}\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px;\n}\n\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.calendar-header ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  text-align: center;\n}\n\n.calendar-header ion-item:nth-child(2) {\n  display: contents;\n}\n\n.table > tbody > tr > td.calendar-hour-column {\n  width: 55px;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.ios.main_content {\n  padding-top: 0;\n}\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px;\n}\n\nion-segment-button {\n  position: relative;\n}\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%;\n}\n\n.video-skeleton {\n  height: 200px;\n}\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px;\n}\n\n.swiper-slide {\n  background: #fbfbfb;\n}\n\nion-slides {\n  height: 190px;\n}\n\n.top-header {\n  position: fixed;\n}\n\n.slides-container {\n  height: 78% !important;\n}\n\n.dayview-allday-label, .calendar-hour-column {\n  width: 45px !important;\n}\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4;\n}\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0;\n}\n\n.programPreview ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n  font-size: 0.9rem;\n}\n\n.programPreview ion-item ion-list-header {\n  padding-left: 0;\n}\n\n.programPreview ion-item ion-input {\n  min-width: 50px;\n  border-bottom: 1px solid #d1d1d1;\n  padding: 15px 3px 8px;\n}\n\n.programPreview ion-label {\n  color: #000;\n}\n\n.programPreview .radioPreview {\n  display: flex;\n}\n\n.programPreview .radioPreview ion-item {\n  --background: transparent;\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  font-size: 0.9rem;\n  margin-right: 30px;\n}\n\n.programPreview .radioPreview ion-item ion-radio {\n  margin-right: 10px;\n}\n\n.programPreview .sticky-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n}\n\n.programPreview .sticky-footer ion-button {\n  width: 100%;\n  margin: 0;\n  --border-radius: 0;\n  height: 100%;\n  --background: #27a69a;\n}\n\n.sel-parti-open-item {\n  max-width: 160px;\n}\n\n.sel-parti-open-item .sc-ion-label-md-h {\n  white-space: unset;\n}\n\n.prog_btn_list .btn {\n  --padding-start: 2.1em;\n  --padding-end: 2.1em;\n  font-size: 14px;\n  text-transform: uppercase;\n  height: 40px;\n  letter-spacing: 1px;\n}\n\n.calend_arrow {\n  color: #69bdad !important;\n}\n\n.prog_btn_list ion-item {\n  display: grid;\n  justify-content: center;\n}\n\n.date_items {\n  --ion-item-background: none !important;\n  color: #000;\n}\n\n.date_items ion-icon {\n  --ion-item-background: transparent;\n  color: #000;\n  margin-top: 5px;\n}\n\n.date_items h6 {\n  margin-right: 5px;\n}\n\n.top-heading ion-item {\n  --inner-border-width: 0;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n\n.nutriimages-list ion-label {\n  font-size: 0.75rem;\n  margin: 3px 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: block;\n  color: #444;\n}\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09);\n}\n\nion-slides {\n  background: transparent;\n  padding: 0 5px;\n}\n\n.nutriimages-list ion-segment-button {\n  width: 32%;\n  border: none;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f7f7f7;\n  border-radius: 4px;\n}\n\n.nutriimages-list ion-segment-button:first-child {\n  margin-left: 0;\n}\n\n.nutriimages-list ion-segment-button img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: 100%;\n}\n\n.nutriimages-list .segment-button-checked {\n  background: #eaeaea;\n  --color-checked: transparent;\n}\n\n.nutriimages-list .thumb-checkbox {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.nutriimages-list .thumb-checkbox ion-checkbox {\n  opacity: 0;\n  width: 100%;\n  height: 78px;\n  padding: 0 0;\n}\n\n.checkboxThumb::after {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked {\n  opacity: 1;\n  --background-checked:transparent;\n  --border-color-checked:transparent;\n  --size:0;\n  --checkmark-color:transparent;\n}\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked:after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background: #26a69a;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.item-list ion-list-header ion-icon {\n  font-size: 1.15rem;\n}\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n}\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list img:first-child {\n  margin-left: 0;\n}\n\n.users-list ion-label {\n  width: 100px;\n}\n\nion-list {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\nion-list ion-item {\n  font-size: 0.875rem;\n  --padding-end: 16px;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  --inner-padding-end: 0;\n  --min-height: 44px;\n  --border-color: whitesmoke;\n}\n\nion-list .descriptionItem ion-item {\n  padding: 0;\n}\n\n.green-alram-icon {\n  width: 12% !important;\n  position: center !important;\n}\n\n.monthview-selected {\n  background-color: #3a87ad !important;\n}\n\n.calender_green_bottom .ion-margin-start {\n  margin-left: 7px;\n  position: relative;\n  top: -10px;\n}\n\n.green-alram-icon {\n  position: absolute;\n  top: 350px;\n  right: 20px;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  padding: 5px 10px;\n}\n\n.event-detail-container ion-item {\n  padding-right: 2rem;\n}\n\n.showDateTime .datetime-text {\n  display: none !important;\n}\n\n.showDateTime {\n  padding: 0 10px;\n  text-align: center;\n}\n\nion-datetime#dat {\n  padding: 0 10px;\n  position: relative;\n  left: -12px;\n}\n\n.item .sc-ion-label-md-h {\n  overflow: visible !important;\n}\n\n.counter-box[_ngcontent-pyj-c13] {\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  height: 100px;\n}\n\np.text-green.text-center {\n  position: relative;\n  top: 35px;\n  display: inline-flex;\n  width: 140px;\n  left: -15px;\n}\n\n.program__card {\n  position: relative;\n  width: 100%;\n  margin-bottom: 32px;\n}\n\nion-icon.ion-margin-start.md.hydrated {\n  top: 0px;\n  width: 1rem;\n  height: 1rem;\n}\n\nion-icon.ion-margin-start.ios.hydrated {\n  top: 0px;\n}\n\nion-icon.live-icon.ios.hydrated, ion-icon.live-icon.md.hydrated {\n  font-size: 34px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\nion-title.ios.title-ios.title-default.hydrated {\n  padding: 0 20px;\n}\n\n.list-ios {\n  margin-bottom: 0px;\n}\n\n.live-ion-list-header {\n  justify-content: initial;\n}\n\n.live-ion-list-header .divider {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.live-ion-list-header .calender_green_bottom {\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.live-ion-list-header .calender_green_bottom ion-icon {\n  font-size: 1.7rem;\n}\n\n.live-event-addition {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background: #cecece;\n  padding: 15px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\n\n.live-event-addition h5 {\n  color: #121212;\n  margin: 0;\n  font-weight: 500;\n}\n\n.live-event-box {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.live-event-box .live-event-head {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #121212;\n}\n\n.live-event-box .live-event-info {\n  padding: 12px 20px 2px 20px;\n  border: 1px solid #cecece;\n  border-radius: 12px;\n  max-height: 100px;\n  overflow-y: scroll;\n}\n\n.live-event-box .live-event-info .live-event-details {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.live-event-box .live-event-info .live-event-details p {\n  font-size: 16px;\n  color: #121212;\n}\n\n.live-event-box .live-event-info .live-event-details .small-divider {\n  width: 1.5px;\n  height: 20px;\n  background-color: #555;\n  margin-right: 14px;\n  margin-left: 14px;\n}\n\n.live-event-icon {\n  font-size: 28px;\n  min-width: 80px;\n  color: #555;\n  margin-right: 20px;\n}\n\n.users-list {\n  flex: 1;\n}\n\n.closeIcon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -50%);\n  width: 1.2rem;\n  height: 1.2rem;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.226);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.close-icon {\n  width: 1rem;\n  height: 1rem;\n  margin-left: 0;\n  color: #26a69a;\n}\n\n.fixed {\n  position: fixed !important;\n  z-index: 9 !important;\n  background-color: #fff !important;\n}\n\n.margin-top-md {\n  margin-top: 10%;\n}\n\nform.fixed.ng-untouched.ng-pristine.ng-valid {\n  position: fixed;\n  z-index: 9;\n}\n\n.live-icon {\n  color: transparent;\n}\n\n.toggleDiv {\n  margin-bottom: 2px;\n  width: 50px;\n}\n\n.live::after {\n  content: \"Go Live\";\n  color: #26a69a;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 6px 5px;\n  background: #fff;\n  border-radius: 3px;\n  margin-bottom: 2px;\n}\n\n.title {\n  font-size: 13px;\n}\n\n.title span {\n  font-size: 11px;\n  display: block;\n  color: #E7E7E7;\n  margin-bottom: 3px;\n}\n\n.live.active::after {\n  content: \"Live\";\n  padding: 6px 7px;\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: #fff;\n  text-transform: uppercase;\n  background: #FF3A3A;\n}\n\nion-icon.active {\n  display: block;\n  color: #ff1111;\n}\n\n.width-full {\n  width: 100% !important;\n}\n\n.divider {\n  width: 1.5px;\n  height: 35px;\n  background: #fff;\n}\n\n::ng-deep table {\n  border: 0 !important;\n}\n\n::ng-deep tr {\n  display: flex !important;\n  justify-content: space-around;\n}\n\n::ng-deep th {\n  flex: 1;\n}\n\n::ng-deep th, ::ng-deep td {\n  border: 0 !important;\n}\n\n::ng-deep td {\n  display: inline-block;\n  margin: 0.2rem !important;\n  padding: 0 !important;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n::ng-deep td.monthview-secondary-with-event.text-muted {\n  border-radius: 50% !important;\n}\n\n::ng-deep td.monthview-selected {\n  border-radius: 50% !important;\n}\n\n::ng-deep span.event-detail {\n  overflow: hidden !important;\n  max-width: 50vw;\n}\n\n::ng-deep span.monthview-eventdetail-timecolumn {\n  min-width: 100px !important;\n  width: 100px !important;\n}\n\n::ng-deep .item-native {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n}\n\n::ng-deep .event-detail-container ion-item {\n  --padding-end: 40px !important;\n}\n\nion-list-header.ion-padding-horizontal.green.text-white.md.hydrated {\n  padding-bottom: 12px;\n  padding-top: 12px;\n}\n\nion-list.width-full.md.list-md.hydrated {\n  border-radius: 4px;\n}\n\nion-list-header.ion-padding-horizontal.green.text-white.ios.hydrated {\n  padding-bottom: 12px;\n  padding-top: 12px;\n  text-transform: initial;\n  letter-spacing: 0px;\n}\n\nion-list.width-full.ios.list-ios.hydrated {\n  border-radius: 4px;\n}\n\n::ng-deep table {\n  border: 0 !important;\n}\n\n::ng-deep tr {\n  display: flex !important;\n  justify-content: space-around;\n}\n\n::ng-deep th {\n  flex: 1;\n}\n\n::ng-deep th, ::ng-deep td {\n  border: 0 !important;\n}\n\n::ng-deep td {\n  display: inline-block;\n  margin: 0.2rem !important;\n  padding: 0 !important;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n::ng-deep td.monthview-secondary-with-event.text-muted {\n  border-radius: 50% !important;\n}\n\n::ng-deep td.monthview-selected {\n  border-radius: 50% !important;\n}\n\n::ng-deep span.event-detail {\n  overflow: hidden !important;\n  max-width: 50vw;\n}\n\n::ng-deep span.monthview-eventdetail-timecolumn {\n  min-width: 100px !important;\n  width: 100px !important;\n}\n\n::ng-deep .item-native {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n}\n\n::ng-deep .event-detail-container ion-item {\n  --padding-end: 40px !important;\n  --min-height: 25px !important;\n}\n\n::ng-deep .monthview-container {\n  height: auto !important;\n}\n\n::ng-deep .calendar-hour-column {\n  display: none !important;\n}\n\n::ng-deep .weekview-container {\n  height: auto !important;\n}\n\n::ng-deep .weekview-allday-table {\n  display: none !important;\n}\n\n::ng-deep ion-slides.slides-container.md.slides-md.swiper-container.hydrated.swiper-container-initialized.swiper-container-horizontal {\n  background: #27A69A !important;\n}\n\n::ng-deep td, ::ng-deep th {\n  border: 0 !important;\n}\n\n::ng-deep .table-bordered {\n  border: 0 !important;\n  border-bottom: 1px solid #cecece !important;\n}\n\n::ng-deep .slides-container {\n  color: #fff !important;\n  background: #27A69A !important;\n}\n\n::ng-deep .list-ios {\n  margin-bottom: 0 !important;\n}\n\n::ng-deep .table > thead > tr > th.weekview-header {\n  font-size: 13px !important;\n  font-weight: 500;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n::ng-deep ion-title.ios.title-ios.title-default.hydrated {\n  padding-inline: 0px;\n}\n\n::ng-deep th.weekview-header.text-center {\n  background-color: #fff;\n  color: #121212;\n}\n\n::ng-deep th.weekview-header.text-center.weekview-selected {\n  background-color: #27a69a;\n  color: #fff;\n}\n\n::ng-deep table.table.table-bordered.table-fixed.weekview-header thead {\n  background-color: #fff;\n}\n\n.toggle-cal {\n  color: #121212;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2dyYW0vQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGFkZC1wcm9ncmFtXFxhZGQtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1wcm9ncmFtL2FkZC1wcm9ncmFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLFdBQUE7QUNFTjs7QUREQTtFQUFZLGFBQUE7RUFBYyxXQUFBO0FDTTFCOztBRExBO0VBQXFCLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxXQUFBO0FDV3REOztBRFZBO0VBQXlCLFdBQUE7RUFBWSxZQUFBO0VBQWEsb0JBQUE7S0FBQSxpQkFBQTtFQUFrQixrQkFBQTtFQUFtQixrQkFBQTtBQ2tCdkY7O0FEakJBO0VBQXFDLGNBQUE7QUNxQnJDOztBRHBCQTtFQUFVLFdBQUE7RUFBVyxZQUFBO0VBQVksZUFBQTtFQUFnQixrQkFBQTtFQUFrQixtQkFBQTtFQUFtQixrQkFBQTtFQUFrQixhQUFBO0VBQWEsdUJBQUE7RUFBdUIsbUJBQUE7RUFBbUIsU0FBQTtFQUFVLGtCQUFBO0FDa0N6Szs7QURoQ0E7RUFBaUIsYUFBQTtFQUFjLDhCQUFBO0VBQStCLG1CQUFBO0FDc0M5RDs7QURyQ0E7RUFBMEIsa0JBQUE7RUFBbUIsc0JBQUE7RUFBdUIsa0JBQUE7QUMyQ3BFOztBRDFDQTtFQUF1QyxpQkFBQTtBQzhDdkM7O0FEN0NBO0VBQThDLFdBQUE7QUNpRDlDOztBRC9DQTtFQUFVLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxVQUFBO0VBQVcsV0FBQTtBQ3NEcEQ7O0FEckRBO0VBQVksMEJBQUE7QUN5RFo7O0FEeERBO0VBQXFCLHlCQUFBO0VBQTBCLHNCQUFBO0VBQXVCLHNCQUFBO0FDOER0RTs7QUQ3REE7RUFBK0IsU0FBQTtFQUFVLGtCQUFBO0VBQW1CLGlCQUFBO0FDbUU1RDs7QURsRUE7RUFBb0MsV0FBQTtFQUFZLFlBQUE7RUFBYSx3Q0FBQTtFQUF5QyxrQkFBQTtBQ3lFdEc7O0FEeEVBO0VBQTZDLFdBQUE7QUM0RTdDOztBRHpFQTtFQUFrQixjQUFBO0FDNkVsQjs7QUQxRUE7RUFBc0MsWUFBQTtBQzhFdEM7O0FEN0VBO0VBQW1CLGtCQUFBO0FDaUZuQjs7QURoRkE7RUFBcUMsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFNBQUE7RUFBVSxVQUFBO0FDdUYvRTs7QUR0RkE7RUFBZ0IsYUFBQTtBQzBGaEI7O0FEekZBO0VBQTRELFNBQUE7RUFBVSxZQUFBO0FDOEZ0RTs7QUQ3RkE7RUFBYyxtQkFBQTtBQ2lHZDs7QURoR0E7RUFBVyxhQUFBO0FDb0dYOztBRG5HQTtFQUFZLGVBQUE7QUN1R1o7O0FEdEdBO0VBQ0ksc0JBQUE7QUN5R0o7O0FEdEdBO0VBQ0ksc0JBQUE7QUN5R0o7O0FEckdDO0VBQVUsY0FBQTtBQ3lHWDs7QUR4R0M7RUFBYSxhQUFBO0FDMkdkOztBRHhHSTtFQUFTLGtCQUFBO0VBQW1CLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXdCLGlCQUFBO0FDK0doRjs7QUQ5R1E7RUFBZ0IsZUFBQTtBQ2lIeEI7O0FEaEhRO0VBQVUsZUFBQTtFQUFnQixnQ0FBQTtFQUFpQyxxQkFBQTtBQ3FIbkU7O0FEbkhJO0VBQVUsV0FBQTtBQ3NIZDs7QURySEk7RUFBYyxhQUFBO0FDd0hsQjs7QUR2SFE7RUFBUyx5QkFBQTtFQUNMLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUF1QixpQkFBQTtFQUFtQixrQkFBQTtBQzRIdEQ7O0FEM0hZO0VBQVUsa0JBQUE7QUM4SHRCOztBRDNISTtFQUFlLGVBQUE7RUFBZ0IsU0FBQTtFQUFVLE9BQUE7RUFBUSxhQUFBO0FDaUlyRDs7QURoSVE7RUFBVyxXQUFBO0VBQVksU0FBQTtFQUFTLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxxQkFBQTtBQ3VJeEU7O0FEcElBO0VBQ0ksZ0JBQUE7QUN1SUo7O0FEcklBO0VBQ0ksa0JBQUE7QUN3SUo7O0FEdElBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3lJSjs7QUR0SUE7RUFDSSx5QkFBQTtBQ3lJSjs7QUR0SUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUN5SUo7O0FEdklBO0VBQ0ksc0NBQUE7RUFDQSxXQUFBO0FDMElKOztBRHhJQTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMySUo7O0FEeklBO0VBQ0ksaUJBQUE7QUM0SUo7O0FEMUlBO0VBQ0ksdUJBQUE7QUM2SUo7O0FEM0lBO0VBQ0ksdUJBQUE7QUM4SUo7O0FENUlBO0VBQTRCLGtCQUFBO0VBQW1CLGFBQUE7RUFBYywwQkFBQTtFQUEyQixpQkFBQTtFQUFrQixnQkFBQTtFQUFpQixjQUFBO0VBQWUsV0FBQTtBQ3NKMUk7O0FEckpBO0VBQVksK0NBQUE7QUN5Slo7O0FEeEpBO0VBQVcsdUJBQUE7RUFBd0IsY0FBQTtBQzZKbkM7O0FENUpBO0VBQXFDLFVBQUE7RUFBVyxZQUFBO0VBQWEsVUFBQTtFQUFXLGtCQUFBO0VBQW1CLGdCQUFBO0VBQXFCLGFBQUE7RUFBYyxhQUFBO0VBQWMsdUJBQUE7RUFBd0IsbUJBQUE7RUFBb0IsbUJBQUE7RUFBb0Isa0JBQUE7QUMwSzVNOztBRHpLQTtFQUFpRCxjQUFBO0FDNktqRDs7QUQ1S0E7RUFBeUMsc0JBQUE7S0FBQSxtQkFBQTtFQUFvQixlQUFBO0FDaUw3RDs7QURoTEE7RUFBMEMsbUJBQUE7RUFBb0IsNEJBQUE7QUNxTDlEOztBRHBMQTtFQUFrQyxrQkFBQTtFQUFtQixXQUFBO0VBQVksWUFBQTtBQzBMakU7O0FEekxBO0VBQStDLFVBQUE7RUFBVSxXQUFBO0VBQVcsWUFBQTtFQUFZLFlBQUE7QUNnTWhGOztBRDlMQTtFQUFzQixXQUFBO0VBQVksV0FBQTtFQUFZLFlBQUE7RUFBYSx5QkFBQTtFQUEwQixjQUFBO0VBQWUsa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsUUFBQTtFQUFTLFNBQUE7QUMwTW5KOztBRHpNQTtFQUFnRSxVQUFBO0VBQVUsZ0NBQUE7RUFBaUMsa0NBQUE7RUFBbUMsUUFBQTtFQUFTLDZCQUFBO0FDaU52Sjs7QURoTkE7RUFBc0UsV0FBQTtFQUFXLFdBQUE7RUFBVyxZQUFBO0VBQVksbUJBQUE7RUFBbUIsY0FBQTtFQUFjLGtCQUFBO0VBQWtCLGtCQUFBO0VBQWtCLFFBQUE7RUFBUSxTQUFBO0FDNE5yTDs7QUQzTkE7RUFBb0Msa0JBQUE7QUMrTnBDOztBRDdOQTtFQUFZLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxtQkFBQTtFQUFvQixhQUFBO0FDb09qRTs7QURqT0E7RUFBZ0IsV0FBQTtFQUFZLFlBQUE7RUFBYSxvQkFBQTtLQUFBLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLGtCQUFBO0FDeU85RTs7QUR4T0E7RUFBNEIsY0FBQTtBQzRPNUI7O0FEM09BO0VBQXNCLFlBQUE7QUMrT3RCOztBRDdPQTtFQUFTLHlCQUFBO0VBQTBCLDRCQUFBO0FDa1BuQzs7QURqUEk7RUFBUyxtQkFBQTtFQUFvQixtQkFBQTtFQUFvQixzQkFBQTtVQUFBLHFCQUFBO0VBQXNCLHNCQUFBO0VBQXVCLGtCQUFBO0VBQW1CLDBCQUFBO0FDeVBySDs7QUR2UFE7RUFBUyxVQUFBO0FDMFBqQjs7QUR2UEE7RUFBa0IscUJBQUE7RUFBdUIsMkJBQUE7QUM0UHpDOztBRDNQQTtFQUFvQixvQ0FBQTtBQytQcEI7O0FEOVBBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNpUUo7O0FEL1BBO0VBSUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQUEsa0NBQUE7RUFBQSw2QkFBQTtFQUNBLGlCQUFBO0FDK1BKOztBRDdQQTtFQUNJLG1CQUFBO0FDZ1FKOztBRDlQQTtFQUNJLHdCQUFBO0FDaVFKOztBRC9QQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ2tRSjs7QURoUUE7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDa1FKOztBRGhRQTtFQUNJLDRCQUFBO0FDbVFKOztBRGpRQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ29RSjs7QURsUUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDcVFKOztBRG5RQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDc1FKOztBRGpRQTtFQUNJLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ29RSjs7QUQvUEE7RUFDSSxRQUFBO0FDa1FKOztBRC9QQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDa1FKOztBRGhRQTtFQUNJLGVBQUE7QUNtUUo7O0FEalFBO0VBQ0ksa0JBQUE7QUNvUUo7O0FEbFFBO0VBQ0ksd0JBQUE7QUNxUUo7O0FEcFFJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ3NRUjs7QURwUUk7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNzUVI7O0FEclFRO0VBQ0ksaUJBQUE7QUN1UVo7O0FEblFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNzUUo7O0FEclFJO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ3VRUjs7QURwUUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUN1UUo7O0FEdFFJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3dRUjs7QUR0UUk7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDd1FSOztBRHZRUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDeVFaOztBRHhRWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDMFFoQjs7QUR4UVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQzBRaEI7O0FEclFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUN3UUo7O0FEdFFBO0VBQ0ksT0FBQTtBQ3lRSjs7QUR2UUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDMFFKOztBRHhRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUMyUUo7O0FEelFBO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDNFFKOztBRDFRQTtFQUNJLGVBQUE7QUM2UUo7O0FEMVFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUM2UUo7O0FEM1FBO0VBRUksa0JBQUE7QUM2UUo7O0FEM1FBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDOFFKOztBRDVRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDOFFKOztBRDVRQTtFQUNJLGVBQUE7QUMrUUo7O0FEN1FBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNnUko7O0FEOVFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNpUko7O0FEOVFBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNpUko7O0FEL1FBO0VBQ0ksc0JBQUE7QUNrUko7O0FEaFJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ21SSjs7QUQ1UUk7RUFDSSxvQkFBQTtBQytRUjs7QUQ3UUk7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDK1FSOztBRDdRSTtFQUNJLE9BQUE7QUMrUVI7O0FEN1FJO0VBQ0ksb0JBQUE7QUMrUVI7O0FEN1FJO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQytRUjs7QUQ1UUk7RUFDSSw2QkFBQTtBQzhRUjs7QUQ1UUk7RUFDSSw2QkFBQTtBQzhRUjs7QUQ1UUk7RUFDSSwyQkFBQTtFQUNBLGVBQUE7QUM4UVI7O0FENVFJO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBQzhRUjs7QUQ1UUk7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDOFFSOztBRDVRSTtFQUNJLDhCQUFBO0FDOFFSOztBRHhRQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUMyUUo7O0FEelFBO0VBQ0ksa0JBQUE7QUM0UUo7O0FEelFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUM0UUo7O0FEMVFBO0VBQ0ksa0JBQUE7QUM2UUo7O0FEMVFJO0VBQ0ksb0JBQUE7QUM2UVI7O0FEM1FJO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtBQzZRUjs7QUQzUUk7RUFDSSxPQUFBO0FDNlFSOztBRDNRSTtFQUNJLG9CQUFBO0FDNlFSOztBRDNRSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUM2UVI7O0FEMVFJO0VBQ0ksNkJBQUE7QUM0UVI7O0FEMVFJO0VBQ0ksNkJBQUE7QUM0UVI7O0FEMVFJO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0FDNFFSOztBRDFRSTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7QUM0UVI7O0FEMVFJO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQzRRUjs7QUR0UUk7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FDd1FSOztBRHJRSTtFQUNJLHVCQUFBO0FDdVFSOztBRHJRSTtFQUNJLHdCQUFBO0FDdVFSOztBRHJRTTtFQUNJLHVCQUFBO0FDdVFWOztBRHJRUTtFQUNJLHdCQUFBO0FDdVFaOztBRHJRUTtFQUNFLDhCQUFBO0FDdVFWOztBRHJRUTtFQUNFLG9CQUFBO0FDdVFWOztBRHJRUTtFQUNFLG9CQUFBO0VBQ0EsMkNBQUE7QUN1UVY7O0FEclFNO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ3VRUjs7QURyUU07RUFDRSwyQkFBQTtBQ3VRUjs7QURyUU07RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3VRUjs7QURyUU07RUFDRSxtQkFBQTtBQ3VRUjs7QURyUU07RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUN1UVY7O0FEclFNO0VBRUUseUJBQUE7RUFDQSxXQUFBO0FDc1FSOztBRHBRTTtFQUNFLHNCQUFBO0FDc1FSOztBRG5RQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDc1FKIiwiZmlsZSI6InNyYy9hcHAvYWRkLXByb2dyYW0vYWRkLXByb2dyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGV7Y29sb3I6ICMwMDA7fVxyXG4udXNlcnMtbGlzdHtkaXNwbGF5OiBmbGV4O3dpZHRoOiBhdXRvOzt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogYXV0bztkaXNwbGF5OiBmbGV4O3dpZHRoOiBhdXRvO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1ne3dpZHRoOiA0MnB4O2hlaWdodDogNDJweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1nOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnZpZXctYWxse3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7bWF4LXdpZHRoOiA0MnB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2YxZjBmMDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOiAwO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcblxyXG4uY2FsZW5kYXItaGVhZGVye2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4uY2FsZW5kYXItaGVhZGVyIGlvbi1pdGVtey0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW06bnRoLWNoaWxkKDIpe2Rpc3BsYXk6IGNvbnRlbnRzO31cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLmNhbGVuZGFyLWhvdXItY29sdW1ue3dpZHRoOiA1NXB4O31cclxuXHJcbmlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7dG9wOiAtMzBweDt6LWluZGV4OiA5OTt9XHJcbi5hdWRpby1saXN0e3BhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtjb2xvcjogI0ZGRiAhaW1wb3J0YW50O3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luOiAwO21hcmdpbi1yaWdodDogMjBweDtvdmVyZmxvdzogaW5oZXJpdDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9ue3dpZHRoOiAyNXB4O2hlaWdodDogMjVweDstLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50Oy0tYm94LXNoYWRvdzogbm9uZTt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29ue2NvbG9yOiAjRkZGO31cclxuXHJcbi8vIGlvcyBjc3NcclxuLmlvcy5tYWluX2NvbnRlbnR7cGFkZGluZy10b3A6IDA7fVxyXG5cclxuLy8gaW9uLXNrZWxldG9uLXRleHQgY3NzXHJcbi5tdXNpY2xpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAzMHB4O31cclxuaW9uLXNlZ21lbnQtYnV0dG9ue3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tc2tlbGV0b24tdGV4dHtwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiAxMDAlO21hcmdpbjogMDt3aWR0aDogOTUlO31cclxuLnZpZGVvLXNrZWxldG9ue2hlaWdodDogMjAwcHg7fVxyXG5wIGlvbi1za2VsZXRvbi10ZXh0LCAucmFkaW8tbGlzdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dHttYXJnaW46IDA7aGVpZ2h0OiAyMHB4O31cclxuLnN3aXBlci1zbGlkZXtiYWNrZ3JvdW5kOiAjZmJmYmZiO31cclxuaW9uLXNsaWRlc3toZWlnaHQ6IDE5MHB4O31cclxuLnRvcC1oZWFkZXJ7cG9zaXRpb246IGZpeGVkO31cclxuLnNsaWRlcy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA3OCUgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbi5kYXl2aWV3LWFsbGRheS1sYWJlbCwgLmNhbGVuZGFyLWhvdXItY29sdW1uIHtcclxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5pb24taXRlbS5mbG9hdGluZ0l0ZW17XHJcblx0aW9uLWxhYmVse2NvbG9yOiNhNWE0YTR9XHJcblx0aW9uLXRleHRhcmVhe21hcmdpbi10b3A6MH1cclxufVxyXG4ucHJvZ3JhbVByZXZpZXd7XHJcbiAgICBpb24taXRlbXstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDsgbWFyZ2luLWJvdHRvbTogMTVweDsgICAgZm9udC1zaXplOiAwLjkwcmVtO1xyXG4gICAgICAgIGlvbi1saXN0LWhlYWRlcntwYWRkaW5nLWxlZnQ6IDA7fVxyXG4gICAgICAgIGlvbi1pbnB1dHttaW4td2lkdGg6IDUwcHg7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQxZDE7cGFkZGluZzoxNXB4IDNweCA4cHh9XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7Y29sb3I6IzAwMH1cclxuICAgIC5yYWRpb1ByZXZpZXd7ZGlzcGxheTogZmxleDtcclxuICAgICAgICBpb24taXRlbXstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO2ZvbnQtc2l6ZTogMC45MHJlbTttYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGlvbi1yYWRpb3ttYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdGlja3ktZm9vdGVye3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDA7bGVmdDogMDtkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgaW9uLWJ1dHRvbnt3aWR0aDogMTAwJTttYXJnaW46MDstLWJvcmRlci1yYWRpdXM6IDA7aGVpZ2h0OiAxMDAlOy0tYmFja2dyb3VuZDogIzI3YTY5YTt9XHJcbiAgICB9XHJcbn1cclxuLnNlbC1wYXJ0aS1vcGVuLWl0ZW17XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG59XHJcbi5zZWwtcGFydGktb3Blbi1pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbn1cclxuLnByb2dfYnRuX2xpc3QgLmJ0bntcclxuICAgIC0tcGFkZGluZy1zdGFydDogMi4xZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyLjFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxufVxyXG4uY2FsZW5kX2Fycm93e1xyXG4gICAgY29sb3I6ICM2OWJkYWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2dfYnRuX2xpc3QgaW9uLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRhdGVfaXRlbXMge1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uZGF0ZV9pdGVtcyBpb24taWNvbiB7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmRhdGVfaXRlbXMgaDZ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4udG9wLWhlYWRpbmcgaW9uLWl0ZW17XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1sYWJlbHtmb250LXNpemU6IDAuNzVyZW07bWFyZ2luOiAzcHggMDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtsZXR0ZXItc3BhY2luZzogMDtmb250LXdlaWdodDogNDAwO2Rpc3BsYXk6IGJsb2NrO2NvbG9yOiAjNDQ0O31cclxuLnZpZGVvLWNhcmR7Ym94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7fVxyXG5pb24tc2xpZGVze2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O3BhZGRpbmc6IDAgNXB4O31cclxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLXNlZ21lbnQtYnV0dG9ue3dpZHRoOiAzMiU7Ym9yZGVyOiBub25lO3BhZGRpbmc6IDA7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7ICAgIG1hcmdpbjogMCAzcHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2JhY2tncm91bmQ6ICNmN2Y3Zjc7Ym9yZGVyLXJhZGl1czogNHB4O31cclxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLXNlZ21lbnQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLXNlZ21lbnQtYnV0dG9uIGltZ3tvYmplY3QtZml0OiBjb250YWluO21heC13aWR0aDogMTAwJTt9XHJcbi5udXRyaWltYWdlcy1saXN0IC5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke2JhY2tncm91bmQ6ICNlYWVhZWE7LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDt9XHJcbi5udXRyaWltYWdlcy1saXN0IC50aHVtYi1jaGVja2JveHtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cclxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94IGlvbi1jaGVja2JveHtvcGFjaXR5OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NzhweDtwYWRkaW5nOjAgMH1cclxuLy8gLmNoZWNrYm94VGh1bWJ7ZGlzcGxheTogY29udGVudHM7fVxyXG4uY2hlY2tib3hUaHVtYjo6YWZ0ZXJ7Y29udGVudDogJyc7d2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O2JvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2Q7ZGlzcGxheTogYmxvY2s7Ym9yZGVyLXJhZGl1czogNTAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDVweDtsZWZ0OiA1cHg7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3ggaW9uLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWR7b3BhY2l0eToxOy0tYmFja2dyb3VuZC1jaGVja2VkOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6dHJhbnNwYXJlbnQ7LS1zaXplOjA7LS1jaGVja21hcmstY29sb3I6dHJhbnNwYXJlbnR9XHJcbi5udXRyaWltYWdlcy1saXN0IC50aHVtYi1jaGVja2JveCBpb24tY2hlY2tib3guY2hlY2tib3gtY2hlY2tlZDphZnRlcntjb250ZW50OicnO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7YmFja2dyb3VuZDojMjZhNjlhO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjVweDtsZWZ0OjVweH1cclxuLml0ZW0tbGlzdCBpb24tbGlzdC1oZWFkZXIgaW9uLWljb257Zm9udC1zaXplOiAxLjE1cmVtO31cclxuXHJcbi51c2Vycy1saXN0ey0tbWluLWhlaWdodDogYXV0bztkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7bWFyZ2luOiA2cHggMDsgXHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG4udXNlcnMtbGlzdCBpbWd7d2lkdGg6IDM2cHg7aGVpZ2h0OiAzNnB4O29iamVjdC1maXQ6IGNvdmVyO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4udXNlcnMtbGlzdCBpbWc6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udXNlcnMtbGlzdCBpb24tbGFiZWx7d2lkdGg6IDEwMHB4O31cclxuXHJcbmlvbi1saXN0e3BhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVte2ZvbnQtc2l6ZTogMC44NzVyZW07LS1wYWRkaW5nLWVuZDogMTZweDtwYWRkaW5nLWlubGluZS1lbmQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDstLW1pbi1oZWlnaHQ6IDQ0cHg7LS1ib3JkZXItY29sb3I6IHdoaXRlc21va2U7fVxyXG4gICAgLmRlc2NyaXB0aW9uSXRlbXtcclxuICAgICAgICBpb24taXRlbXtwYWRkaW5nOiAwO31cclxuICAgIH1cclxufVxyXG4uZ3JlZW4tYWxyYW0taWNvbnt3aWR0aDogMTIlICFpbXBvcnRhbnQ7IHBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDt9XHJcbi5tb250aHZpZXctc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjogIzNhODdhZCAhaW1wb3J0YW50O31cclxuLmNhbGVuZGVyX2dyZWVuX2JvdHRvbSAuaW9uLW1hcmdpbi1zdGFydCB7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTBweDtcclxufVxyXG4uZ3JlZW4tYWxyYW0taWNvbntcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMzMwcHg7XHJcbiAgICAvLyByaWdodDogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzUwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHdpZHRoOmZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4uZXZlbnQtZGV0YWlsLWNvbnRhaW5lciBpb24taXRlbXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbn1cclxuLnNob3dEYXRlVGltZSAuZGF0ZXRpbWUtdGV4dHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uc2hvd0RhdGVUaW1lIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tZGF0ZXRpbWUjZGF0IHtcclxuICAgIC8vIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTJweDtcclxufVxyXG4uaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4uY291bnRlci1ib3hbX25nY29udGVudC1weWotYzEzXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5wLnRleHQtZ3JlZW4udGV4dC1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBsZWZ0OiAtMTVweDtcclxufVxyXG4ucHJvZ3JhbV9fY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi8vIGFuZHJvaWQgQ1NTXHJcblxyXG5pb24taWNvbi5pb24tbWFyZ2luLXN0YXJ0Lm1kLmh5ZHJhdGVkIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi8vIElPUyBDU1NcclxuXHJcbmlvbi1pY29uLmlvbi1tYXJnaW4tc3RhcnQuaW9zLmh5ZHJhdGVkIHtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG5pb24taWNvbi5saXZlLWljb24uaW9zLmh5ZHJhdGVkLCBpb24taWNvbi5saXZlLWljb24ubWQuaHlkcmF0ZWQge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuaW9uLXRpdGxlLmlvcy50aXRsZS1pb3MudGl0bGUtZGVmYXVsdC5oeWRyYXRlZCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLmxpc3QtaW9ze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5saXZlLWlvbi1saXN0LWhlYWRlcntcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICAgIC5kaXZpZGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5jYWxlbmRlcl9ncmVlbl9ib3R0b217XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubGl2ZS1ldmVudC1hZGRpdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2NlY2VjZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGg1e1xyXG4gICAgICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbi5saXZlLWV2ZW50LWJveHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC5saXZlLWV2ZW50LWhlYWR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICB9XHJcbiAgICAubGl2ZS1ldmVudC1pbmZve1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweCAycHggMjBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IFxyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAubGl2ZS1ldmVudC1kZXRhaWxze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsLWRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMS41cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubGl2ZS1ldmVudC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLnVzZXJzLWxpc3R7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi5jbG9zZUljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDEuMnJlbTtcclxuICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIyNik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbG9zZS1pY29ue1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGNvbG9yOiAjMjZhNjlhO1xyXG59XHJcbi5maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4ubWFyZ2luLXRvcC1tZHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuZm9ybS5maXhlZC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG4ubGl2ZS1pY29ue1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRvZ2dsZURpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG4ubGl2ZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnR28gTGl2ZSc7XHJcbiAgICBjb2xvcjogIzI2YTY5YTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiA2cHggNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8vIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi50aXRsZSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI0U3RTdFNztcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4ubGl2ZS5hY3RpdmU6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0xpdmUnO1xyXG4gICAgcGFkZGluZzogNnB4IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkYzQTNBO1xyXG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5pb24taWNvbi5hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNywgMTcpO1xyXG59XHJcbi53aWR0aC1mdWxse1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uZGl2aWRlciB7XHJcbiAgICB3aWR0aDogMS41cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi8vIC5ncmVlbiBpb24taWNvbi5tZC5oeWRyYXRlZCB7XHJcbi8vICAgICByaWdodDogMTBweDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gfVxyXG46Om5nLWRlZXAge1xyXG4gICAgdGFibGV7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0cntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICB0aHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgdGgsIHRke1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMC4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGQubW9udGh2aWV3LXNlY29uZGFyeS13aXRoLWV2ZW50LnRleHQtbXV0ZWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGQubW9udGh2aWV3LXNlbGVjdGVkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHNwYW4uZXZlbnQtZGV0YWlsIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5tb250aHZpZXctZXZlbnRkZXRhaWwtdGltZWNvbHVtbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbmF0aXZlIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWRldGFpbC1jb250YWluZXIgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8vIEFORFJPSUQgQ1NTXHJcbmlvbi1saXN0LWhlYWRlci5pb24tcGFkZGluZy1ob3Jpem9udGFsLmdyZWVuLnRleHQtd2hpdGUubWQuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5pb24tbGlzdC53aWR0aC1mdWxsLm1kLmxpc3QtbWQuaHlkcmF0ZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi8vIElPUyBDU1NcclxuaW9uLWxpc3QtaGVhZGVyLmlvbi1wYWRkaW5nLWhvcml6b250YWwuZ3JlZW4udGV4dC13aGl0ZS5pb3MuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxufVxyXG5pb24tbGlzdC53aWR0aC1mdWxsLmlvcy5saXN0LWlvcy5oeWRyYXRlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAgIHRhYmxle1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdHJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgdGh7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIHRoLCB0ZHtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHRke1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzdweDtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRkLm1vbnRodmlldy1zZWNvbmRhcnktd2l0aC1ldmVudC50ZXh0LW11dGVkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHRkLm1vbnRodmlldy1zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzcGFuLmV2ZW50LWRldGFpbCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogNTB2dztcclxuICAgIH1cclxuICAgIHNwYW4ubW9udGh2aWV3LWV2ZW50ZGV0YWlsLXRpbWVjb2x1bW4ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ldmVudC1kZXRhaWwtY29udGFpbmVye1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIGlvbi1pdGVte1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vbnRodmlldy1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNhbGVuZGFyLWhvdXItY29sdW1ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAud2Vla3ZpZXctY29udGFpbmVye1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgICAud2Vla3ZpZXctYWxsZGF5LXRhYmxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tc2xpZGVzLnNsaWRlcy1jb250YWluZXIubWQuc2xpZGVzLW1kLnN3aXBlci1jb250YWluZXIuaHlkcmF0ZWQuc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3QTY5QSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCwgdGgge1xyXG4gICAgICAgICAgYm9yZGVyOiAwIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgICAgICAgIGJvcmRlcjogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZXMtY29udGFpbmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyN0E2OUEgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubGlzdC1pb3N7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC53ZWVrdmlldy1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHggIDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUuaW9zLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZTogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHRoLndlZWt2aWV3LWhlYWRlci50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICB9XHJcbiAgICAgIHRoLndlZWt2aWV3LWhlYWRlci50ZXh0LWNlbnRlci53ZWVrdmlldy1zZWxlY3RlZCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhNjlhO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnRhYmxlLWZpeGVkLndlZWt2aWV3LWhlYWRlciB0aGVhZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbn1cclxuLnRvZ2dsZS1jYWx7XHJcbiAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuIiwiLm5vdGUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnVzZXJzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWcge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZzpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4udmlldy1hbGwge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBtYXgtd2lkdGg6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5jYWxlbmRhci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbTpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLmNhbGVuZGFyLWhvdXItY29sdW1uIHtcbiAgd2lkdGg6IDU1cHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTMwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uYXVkaW8tbGlzdCB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5pb3MubWFpbl9jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tdXNpY2xpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLnZpZGVvLXNrZWxldG9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxucCBpb24tc2tlbGV0b24tdGV4dCwgLnJhZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDE5MHB4O1xufVxuXG4udG9wLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnNsaWRlcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDc4JSAhaW1wb3J0YW50O1xufVxuXG4uZGF5dmlldy1hbGxkYXktbGFiZWwsIC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XG4gIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtLmZsb2F0aW5nSXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogI2E1YTRhNDtcbn1cbmlvbi1pdGVtLmZsb2F0aW5nSXRlbSBpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucHJvZ3JhbVByZXZpZXcgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnByb2dyYW1QcmV2aWV3IGlvbi1pdGVtIGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5wcm9ncmFtUHJldmlldyBpb24taXRlbSBpb24taW5wdXQge1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xuICBwYWRkaW5nOiAxNXB4IDNweCA4cHg7XG59XG4ucHJvZ3JhbVByZXZpZXcgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ucHJvZ3JhbVByZXZpZXcgLnJhZGlvUHJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZ3JhbVByZXZpZXcgLnJhZGlvUHJldmlldyBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4ucHJvZ3JhbVByZXZpZXcgLnJhZGlvUHJldmlldyBpb24taXRlbSBpb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucHJvZ3JhbVByZXZpZXcgLnN0aWNreS1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9ncmFtUHJldmlldyAuc3RpY2t5LWZvb3RlciBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogIzI3YTY5YTtcbn1cblxuLnNlbC1wYXJ0aS1vcGVuLWl0ZW0ge1xuICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuXG4uc2VsLXBhcnRpLW9wZW4taXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG59XG5cbi5wcm9nX2J0bl9saXN0IC5idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDIuMWVtO1xuICAtLXBhZGRpbmctZW5kOiAyLjFlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jYWxlbmRfYXJyb3cge1xuICBjb2xvcjogIzY5YmRhZCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ19idG5fbGlzdCBpb24taXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGF0ZV9pdGVtcyB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmRhdGVfaXRlbXMgaW9uLWljb24ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZGF0ZV9pdGVtcyBoNiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udG9wLWhlYWRpbmcgaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBtYXJnaW46IDNweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLnZpZGVvLWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDMyJTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tc2VnbWVudC1idXR0b24gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubnV0cmlpbWFnZXMtbGlzdCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5udXRyaWltYWdlcy1saXN0IC50aHVtYi1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94IGlvbi1jaGVja2JveCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc4cHg7XG4gIHBhZGRpbmc6IDAgMDtcbn1cblxuLmNoZWNrYm94VGh1bWI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzdkN2Q3ZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xufVxuXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3ggaW9uLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQge1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDp0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDp0cmFuc3BhcmVudDtcbiAgLS1zaXplOjA7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOnRyYW5zcGFyZW50O1xufVxuXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3ggaW9uLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjZhNjlhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5pdGVtLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuXG4udXNlcnMtbGlzdCB7XG4gIC0tbWluLWhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA2cHggMDtcbn1cblxuLnVzZXJzLWxpc3QgaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4udXNlcnMtbGlzdCBpbWc6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbmlvbi1saXN0IC5kZXNjcmlwdGlvbkl0ZW0gaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZ3JlZW4tYWxyYW0taWNvbiB7XG4gIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubW9udGh2aWV3LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhODdhZCAhaW1wb3J0YW50O1xufVxuXG4uY2FsZW5kZXJfZ3JlZW5fYm90dG9tIC5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xufVxuXG4uZ3JlZW4tYWxyYW0taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNTBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmV2ZW50LWRldGFpbC1jb250YWluZXIgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4uc2hvd0RhdGVUaW1lIC5kYXRldGltZS10ZXh0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2hvd0RhdGVUaW1lIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1kYXRldGltZSNkYXQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTEycHg7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudGVyLWJveFtfbmdjb250ZW50LXB5ai1jMTNdIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbnAudGV4dC1ncmVlbi50ZXh0LWNlbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDE0MHB4O1xuICBsZWZ0OiAtMTVweDtcbn1cblxuLnByb2dyYW1fX2NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG5pb24taWNvbi5pb24tbWFyZ2luLXN0YXJ0Lm1kLmh5ZHJhdGVkIHtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG59XG5cbmlvbi1pY29uLmlvbi1tYXJnaW4tc3RhcnQuaW9zLmh5ZHJhdGVkIHtcbiAgdG9wOiAwcHg7XG59XG5cbmlvbi1pY29uLmxpdmUtaWNvbi5pb3MuaHlkcmF0ZWQsIGlvbi1pY29uLmxpdmUtaWNvbi5tZC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuaW9uLXRpdGxlLmlvcy50aXRsZS1pb3MudGl0bGUtZGVmYXVsdC5oeWRyYXRlZCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubGl2ZS1pb24tbGlzdC1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG59XG4ubGl2ZS1pb24tbGlzdC1oZWFkZXIgLmRpdmlkZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxpdmUtaW9uLWxpc3QtaGVhZGVyIC5jYWxlbmRlcl9ncmVlbl9ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXZlLWlvbi1saXN0LWhlYWRlciAuY2FsZW5kZXJfZ3JlZW5fYm90dG9tIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5saXZlLWV2ZW50LWFkZGl0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmxpdmUtZXZlbnQtYWRkaXRpb24gaDUge1xuICBjb2xvcjogIzEyMTIxMjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGl2ZS1ldmVudC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5saXZlLWV2ZW50LWJveCAubGl2ZS1ldmVudC1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzEyMTIxMjtcbn1cbi5saXZlLWV2ZW50LWJveCAubGl2ZS1ldmVudC1pbmZvIHtcbiAgcGFkZGluZzogMTJweCAyMHB4IDJweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmxpdmUtZXZlbnQtYm94IC5saXZlLWV2ZW50LWluZm8gLmxpdmUtZXZlbnQtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGl2ZS1ldmVudC1ib3ggLmxpdmUtZXZlbnQtaW5mbyAubGl2ZS1ldmVudC1kZXRhaWxzIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTIxMjEyO1xufVxuLmxpdmUtZXZlbnQtYm94IC5saXZlLWV2ZW50LWluZm8gLmxpdmUtZXZlbnQtZGV0YWlscyAuc21hbGwtZGl2aWRlciB7XG4gIHdpZHRoOiAxLjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4ubGl2ZS1ldmVudC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51c2Vycy1saXN0IHtcbiAgZmxleDogMTtcbn1cblxuLmNsb3NlSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEuMnJlbTtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGNvbG9yOiAjMjZhNjlhO1xufVxuXG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tdG9wLW1kIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5mb3JtLmZpeGVkLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbn1cblxuLmxpdmUtaWNvbiB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRvZ2dsZURpdiB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5saXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiR28gTGl2ZVwiO1xuICBjb2xvcjogIzI2YTY5YTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA2cHggNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjRTdFN0U3O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5saXZlLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkxpdmVcIjtcbiAgcGFkZGluZzogNnB4IDdweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogI0ZGM0EzQTtcbn1cblxuaW9uLWljb24uYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmYxMTExO1xufVxuXG4ud2lkdGgtZnVsbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZpZGVyIHtcbiAgd2lkdGg6IDEuNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbjo6bmctZGVlcCB0YWJsZSB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbjo6bmctZGVlcCB0aCB7XG4gIGZsZXg6IDE7XG59XG46Om5nLWRlZXAgdGgsIDo6bmctZGVlcCB0ZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAuMnJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOjpuZy1kZWVwIHRkLm1vbnRodmlldy1zZWNvbmRhcnktd2l0aC1ldmVudC50ZXh0LW11dGVkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgdGQubW9udGh2aWV3LXNlbGVjdGVkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgc3Bhbi5ldmVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNTB2dztcbn1cbjo6bmctZGVlcCBzcGFuLm1vbnRodmlldy1ldmVudGRldGFpbC10aW1lY29sdW1uIHtcbiAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIuaW9uLXBhZGRpbmctaG9yaXpvbnRhbC5ncmVlbi50ZXh0LXdoaXRlLm1kLmh5ZHJhdGVkIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG5pb24tbGlzdC53aWR0aC1mdWxsLm1kLmxpc3QtbWQuaHlkcmF0ZWQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlci5pb24tcGFkZGluZy1ob3Jpem9udGFsLmdyZWVuLnRleHQtd2hpdGUuaW9zLmh5ZHJhdGVkIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuaW9uLWxpc3Qud2lkdGgtZnVsbC5pb3MubGlzdC1pb3MuaHlkcmF0ZWQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbjo6bmctZGVlcCB0YWJsZSB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbjo6bmctZGVlcCB0aCB7XG4gIGZsZXg6IDE7XG59XG46Om5nLWRlZXAgdGgsIDo6bmctZGVlcCB0ZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAuMnJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOjpuZy1kZWVwIHRkLm1vbnRodmlldy1zZWNvbmRhcnktd2l0aC1ldmVudC50ZXh0LW11dGVkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgdGQubW9udGh2aWV3LXNlbGVjdGVkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgc3Bhbi5ldmVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNTB2dztcbn1cbjo6bmctZGVlcCBzcGFuLm1vbnRodmlldy1ldmVudGRldGFpbC10aW1lY29sdW1uIHtcbiAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogNDBweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubW9udGh2aWV3LWNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAud2Vla3ZpZXctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLndlZWt2aWV3LWFsbGRheS10YWJsZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBpb24tc2xpZGVzLnNsaWRlcy1jb250YWluZXIubWQuc2xpZGVzLW1kLnN3aXBlci1jb250YWluZXIuaHlkcmF0ZWQuc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwge1xuICBiYWNrZ3JvdW5kOiAjMjdBNjlBICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgdGQsIDo6bmctZGVlcCB0aCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zbGlkZXMtY29udGFpbmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzI3QTY5QSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5saXN0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgud2Vla3ZpZXctaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbjo6bmctZGVlcCBpb24tdGl0bGUuaW9zLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cbjo6bmctZGVlcCB0aC53ZWVrdmlldy1oZWFkZXIudGV4dC1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzEyMTIxMjtcbn1cbjo6bmctZGVlcCB0aC53ZWVrdmlldy1oZWFkZXIudGV4dC1jZW50ZXIud2Vla3ZpZXctc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhNjlhO1xuICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCB0YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC50YWJsZS1maXhlZC53ZWVrdmlldy1oZWFkZXIgdGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4udG9nZ2xlLWNhbCB7XG4gIGNvbG9yOiAjMTIxMjEyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-program/add-program.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-program/add-program.page.ts ***!
    \*************************************************/

  /*! exports provided: AddProgramPage */

  /***/
  function srcAppAddProgramAddProgramPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProgramPage", function () {
      return AddProgramPage;
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


    var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-modal/user-modal.component */
    "./src/app/add-program/user-modal/user-modal.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/add-program/user-list/user-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic2-calendar/calendar */
    "./node_modules/ionic2-calendar/calendar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _date_time_modal_date_time_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./date-time-modal/date-time-modal.component */
    "./src/app/add-program/date-time-modal/date-time-modal.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/ngx/index.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_music_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../services/music.service */
    "./src/app/services/music.service.ts");
    /* harmony import */


    var _modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../modalContent/verify-user-info/verify-user-info.component */
    "./src/app/modalContent/verify-user-info/verify-user-info.component.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/preview-any-file/ngx */
    "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/media/ngx */
    "./node_modules/@ionic-native/media/ngx/index.js");
    /* harmony import */


    var _add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./add-equipments/add-equipments.component */
    "./src/app/add-program/add-equipments/add-equipments.component.ts");
    /* harmony import */


    var _videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./videos-thumb-list/videos-thumb-list.component */
    "./src/app/add-program/videos-thumb-list/videos-thumb-list.component.ts"); // import { CalendarComponent } from '../calendar/calendar.component';
    // import { VideoEditor } from '@ionic-native/video-editor/ngx';


    var baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;

    var AddProgramPage = /*#__PURE__*/function () {
      function AddProgramPage(commonService, alertCtrl, toastCtrl, locale, modalCtrl, datePipe, navCtrl, media, fb, actionSheetController, mediaCapture, programService, router, platform, pickerController, musicService, file, previewAnyFile, transfer, // private videoEditor: VideoEditor,
      camera, modalController, changeDetection, toastController) {
        var _this = this;

        _classCallCheck(this, AddProgramPage);

        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.locale = locale;
        this.modalCtrl = modalCtrl;
        this.datePipe = datePipe;
        this.navCtrl = navCtrl;
        this.media = media;
        this.fb = fb;
        this.actionSheetController = actionSheetController;
        this.mediaCapture = mediaCapture;
        this.programService = programService;
        this.router = router;
        this.platform = platform;
        this.pickerController = pickerController;
        this.musicService = musicService;
        this.file = file;
        this.previewAnyFile = previewAnyFile;
        this.transfer = transfer;
        this.camera = camera;
        this.modalController = modalController;
        this.changeDetection = changeDetection;
        this.toastController = toastController;
        this.scheduleProgram = "program";
        this.sliderOpts = {
          zoom: true,
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 5
        };
        this.showProgram = 1;
        this.repetatedDateCopy = [];
        this.addEventData = [];
        this.repetatedDate = [];
        this.selectDate = [];
        this.noEvent = true;
        this.timeSlot = false;
        this.ProgramInserted = false;
        this.event = {
          startTime: '',
          endTime: ''
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
          mode: 'month',
          currentDate: new Date()
        };
        this.duration = -1;
        this.position = 0;
        this.gallaryImgPath = [];
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].profilePic;
        this.approval_btn = false;
        this.request_approve_btn = false;
        this.videoFileSelected = false;
        this.visibility = false;
        this.isVideoSelected = false;
        this.liveToggleValue = true;
        this['validation_messages'] = {
          programTitle: [{
            type: 'required',
            message: 'Title is required.'
          }, {
            type: 'maxlength',
            message: '40 chars allowed'
          }],
          programType: [{
            type: 'required',
            message: 'Program Type is required'
          }],
          paymentType: [{
            type: 'required',
            message: 'Payment typee is required.'
          }],
          participantsType: [{
            type: 'required',
            message: 'Select participant types.'
          }],
          chatStatus: [{
            type: 'required',
            message: 'Select ChatRoom type.'
          }]
        };
        this.musicTypes = 'music';
        this.selectMusicList = 'hiphop';
        this.submitted = false;
        this.audioFile = 'into_20180418_173147_audio.mp3';
        this.baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;
        this.musicChanged = 0; // TOGGLE LIVE ICON

        this.item = {
          active: false
        };
        var d = new Date(); // this.currentHrs = d.getHours();

        this.currentHrs = '12:00';
        this.musicService.getGenres().subscribe(function (data) {
          _this.genres = data.genres;
          _this.allMusic = data.genres[0].musics;
        });
        this.finalForm = this.fb.group({
          programFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
      }

      _createClass(AddProgramPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.programService.fetchAllProgram().subscribe(function (data) {
            _this2.programList = data.programList;

            _this2.setProgramList(data.programList);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          this.createForm();
        }
      }, {
        key: "handleCalendarView",
        value: function handleCalendarView() {
          if (this.calendar.mode == 'month') {
            this.calendar.mode = 'week';
          } else {
            this.calendar.mode = 'month';
          }
        }
        /**
         * get available timeslots
         * @param programList
         * @returns events
         */

      }, {
        key: "setProgramList",
        value: function setProgramList(programList) {
          var events = [];
          var startTime;
          var endTime;
          programList.forEach(function (element) {
            startTime = new Date(element.program_date + 'Z');
            endTime = new Date(element.program_date + 'Z');
            endTime.setMinutes(endTime.getMinutes() + parseInt(element.program_duration));
            var participantType = element.is_requested ? "Excusive" : "Open (User will request to join)";
            events.push({
              title: element.title,
              startTime: startTime,
              endTime: endTime,
              allDay: false,
              typeID: element.type_id,
              participant: participantType
            });
          });
          console.log(events);
          this.eventSource = events;
          return events;
        }
      }, {
        key: "sponsar_prog",
        value: function sponsar_prog() {
          this.approval_btn = true;
        }
      }, {
        key: "unsponsar_prog",
        value: function unsponsar_prog() {
          this.approval_btn = false;
        }
        /**
         * function to create add program form with validation.
         */

      }, {
        key: "openStart",
        value: function openStart(i) {
          // console.log(i);
          // console.log(this.oldTimeDuration);
          // if(this.oldTimeDuration == undefined){
          //   console.log('Undefined');
          // } else {
          //   console.log('Not undefined');
          // }
          // if(this.oldTimeDuration == undefined){
          // this.indexForLive = i;
          // if(this.myDate != '' && this.progDuration.length > 0){
          //   if (this.repetatedDateCopy[this.indexForLive].is_live == true) {
          //     this.dateObj.setHours((''), parseInt(''));
          //     this.progDuration = '';
          //     this.repetatedDateCopy[this.indexForLive].is_live = false
          //   } else {
          //     console.log(this.dateObj);
          //     this.repetatedDate[this.indexForLive] = this.dateObj;
          //     // this.minutes = '';
          //     // this.hours = '';
          //     // let d = this.myDate.split('T')[1];
          //     // let h = d.split(':')[0];
          //     // let m = d.split(':')[1];
          //     // this.minutes = m;
          //     // this.hours = h;
          //     // this.dateObj.setHours((this.hours), parseInt(this.minutes));
          //     // this.progDuration = this.progDuration;
          //     this.repetatedDateCopy[this.indexForLive].is_live = true
          //     console.log(this.repetatedDate);
          //   }        
          // } else {
          this.indexForLive = i;
          this.dateObj = this.repetatedDateCopy[this.indexForLive].date;
          console.log(this.dateObj);

          if (this.repetatedDateCopy[this.indexForLive].is_live == true) {
            this.repetatedDateCopy[this.indexForLive].is_live = false;
          } else {
            this.sTime.open();
          } // }
          // } else {
          //   this.indexForLive = i;
          //   // this.dateObj = this.repetatedDateCopy[this.indexForLive].date;
          //   if (this.repetatedDateCopy[this.indexForLive].is_live == true) {
          //     this.repetatedDateCopy[this.indexForLive].is_live = false;
          //   } else {
          //     this.repetatedDateCopy[this.indexForLive].is_live = true;
          //   }
          // }

        }
      }, {
        key: "editProgramTime",
        value: function editProgramTime(i) {
          // this.sTime.setValue(null);
          this.indexForLive = i;
          this.sTime.open();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.programForm = this.fb.group({
            programTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([//UsernameValidator.validUsername,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            programDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            programType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            paymentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            participantsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            chatStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            // feedStatus: new FormControl('', Validators.compose([
            // ])),
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }
      }, {
        key: "openToast",
        value: function openToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: 'Please fill all the details',
                      color: 'dark',
                      duration: 4000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "musicList",
        value: function musicList(ev) {
          this.musicTypes = ev.detail.value;
        }
      }, {
        key: "selectMusic",
        value: function selectMusic(ev) {
          this.selectMusicList = ev.detail.value;
        }
      }, {
        key: "fmtMSS",
        value: function fmtMSS(s) {
          return this.datePipe.transform(s * 1000, 'mm:ss');
        }
      }, {
        key: "slidePrev",
        value: function slidePrev() {
          this.slides.slidePrev();
        }
      }, {
        key: "slideNext",
        value: function slideNext() {
          this.slides.slideNext();
        }
      }, {
        key: "userModal",
        value: function userModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        formData: this.programForm.value,
                        source: '1'
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (d) {
                      _this3.modalData = d.data;
                      var ulist = '';
                      d.data.forEach(function (el) {
                        if (el.id) {
                          ulist += el.id + ',';
                        }
                      });

                      _this3.programForm.controls['userList'].setValue(ulist);
                    });
                    _context2.next = 6;
                    return modal.present();

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
        key: "userList",
        value: function userList() {
          this.commonService.presentModal(_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], 'fullModal', {
            "userList": this.modalData
          });
        }
      }, {
        key: "selectVolume",
        value: function selectVolume() {
          var _this4 = this;

          var fees = this.finalForm.value;
          this.commonService.presentLoader(); // if(this.programDetail.type_id != 'video'){

          this.programService.updateProgramFees({
            "programFees": fees.programFees,
            "programId": this.programDetail.id
          }).subscribe(function (data) {
            // console.log(data);
            _this4.commonService.dismissLoader();

            _this4.router.navigate(["tabs/program"]);
          }); // }
          // if (!this.musicId) {
          //   this.commonService.presentToast('Select Music ');
          //   return false;
          // }
          // this.commonService.presentModal(MusicVolComponent, 'bottomModal', { "musicId": this.musicId, "programId": this.programDetail.id });
        }
      }, {
        key: "applyAdvertise",
        value: function applyAdvertise() {
          var _this5 = this;

          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          var title = "Advertise Rule";
          var msg = "<p>1. Your Video will send for verification.</p>" + "<p class='mb-0'>2. Once approved Video Program will be locked</p>";
          var btn = [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: function handler(blah) {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: function handler() {
              console.log('Confirm Okay');

              _this5.sendrequest();
            }
          }];

          if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_16__["VerifyUserInfoComponent"], 'fullpage', '');
          } else {
            this.commonService.presentAlert(title, msg, btn, 'custom-alert advertiseAlert');
          }
        }
      }, {
        key: "sendrequest",
        value: function sendrequest() {
          var _this6 = this;

          this.commonService.presentLoader();

          if (this.programDetail.type_id == 'video') {
            // console.log('programId:'+this.programDetail.id);
            this.programService.advertiseRequest({
              'programId': this.programDetail.id
            }).subscribe(function (data) {
              _this6.adData = data.status;
              _this6.request_approve_btn = true;

              _this6.commonService.dismissLoader();

              _this6.commonService.presentToast('Request Sent');

              console.log(data);
            });
          } else {
            this.commonService.dismissLoader();
            this.commonService.presentToast('Only Video Program are eligible');
          }
        }
      }, {
        key: "resetEvent",
        value: function resetEvent() {
          this.event = {
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString()
          };
        }
      }, {
        key: "selectMedia",
        value: function selectMedia() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.actionSheetController.create({
                      header: 'What would you like to add?',
                      buttons: [{
                        text: 'Capture Image',
                        handler: function handler() {
                          _this7.takeSnap();
                        }
                      }, {
                        text: 'Record Video',
                        handler: function handler() {
                          if (_this7.isVideoSelected == false) {
                            _this7.recordVideo();
                          } else {
                            _this7.commonService.presentToast('only one video can be selected');
                          }
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context3.sent;
                    _context3.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openGallery",
        value: function openGallery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this8 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionSheetController.create({
                      header: 'What would you like to add?',
                      buttons: [{
                        text: 'Select Image',
                        handler: function handler() {
                          _this8.pickImageFromGallery(_this8.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Select Video',
                        handler: function handler() {
                          if (_this8.isVideoSelected == false) {
                            _this8.pickVideoFromGallery(_this8.camera.PictureSourceType.PHOTOLIBRARY);
                          } else {
                            _this8.commonService.presentToast('only one video can be selected');
                          }
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "recordVideo",
        value: function recordVideo() {
          var _this9 = this;

          var options = {
            limit: 1,
            duration: 30,
            quality: 0
          };
          this.mediaCapture.captureVideo(options).then(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var filename, dirpath, dur, duration;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (data.length > 0) {
                        // this.copyFileToLocalDir(data[0].fullPath);
                        // this.showLoader();
                        this.uploadedVideo = null;
                        filename = data[0].name;
                        dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
                        dur = this.media.create(dirpath);
                        duration = dur.getDuration();
                        console.log(dur + 'dur');
                        console.log(duration + 'duration');
                        dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath; //   var durc = this.getvideoinfo(dirpath);
                        // console.log(durc + 'ddddddddddddddd');

                        this.selectedVideoFile(dirpath, filename);
                        this.visibility = true;
                      }

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }, function (err) {
            return console.error(err + 'yyyyerror');
          });
        }
      }, {
        key: "selectedVideoFile",
        value: function selectedVideoFile(dirpath, filename) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this10 = this;

            var dirUrl, retrievedFile;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return this.file.resolveDirectoryUrl(dirpath);

                  case 3:
                    dirUrl = _context6.sent;
                    _context6.next = 6;
                    return this.file.getFile(dirUrl, filename, {});

                  case 6:
                    retrievedFile = _context6.sent;
                    _context6.next = 14;
                    break;

                  case 9:
                    _context6.prev = 9;
                    _context6.t0 = _context6["catch"](0);
                    console.log('vidoe error');
                    this.dismissLoader();
                    this.commonService.presentAlert("Error", "Something went wrong.", ['Ok'], '');

                  case 14:
                    retrievedFile.file(function (data) {
                      _this10.selectedVideo = '';
                      console.log(data);
                      console.log(data.size);

                      _this10.dismissLoader(); // if (data.size > 500){ return this.commonService.presentAlert("Error", "You cannot upload more than 100 mb.",['Ok'],'');}
                      // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
                      // if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}


                      _this10.selectedVideo = retrievedFile.nativeURL;

                      var filename = _this10.selectedVideo.substr(_this10.selectedVideo.lastIndexOf('/') + 1);

                      localStorage.setItem('selectedVideo', JSON.stringify(_this10.selectedVideo));
                      console.log(filename + 'filename');
                      _this10.programForm.value.file = filename;
                      _this10.isVideoSelected = true;
                      _this10.videoFileSelected = !_this10.videoFileSelected; // this.videoFileSelected = https://www.dropbox.com/s/df2d2gf1dvnr5uj/Sample_1280x720_mp4.mp4';
                    });

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[0, 9]]);
          }));
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          this.commonService.presentLoader();
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          this.commonService.dismissLoader();
        }
      }, {
        key: "filepreview",
        value: function filepreview() {
          console.log(this.selectedVideo);
          this.previewAnyFile.preview(this.selectedVideo).then(function (res) {
            return console.log(res);
          })["catch"](function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "removefilepreview",
        value: function removefilepreview() {
          this.visibility = false;
          this.selectedVideo = null;
          this.videoFileSelected = false;
          this.isVideoSelected = false;
          this.commonService.presentToast('Selected video remove');
          console.log('Selected video remove');
        }
      }, {
        key: "copyFileToLocalDir",
        value: function copyFileToLocalDir(fullPath) {
          var myPath = fullPath;

          if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
          }
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
        key: "backToFirst",
        value: function backToFirst() {
          this.showProgram = 1;
          this.selected = [];
          this.selectDate = [];
          this.repetatedDateCopy = [];
          this.repetatedDate = [];
          this.progDuration = [];
          this.noEvent = false;
          this.timeSlot = false; // this.programForm.value = [];
          // this.eventSource = '';

          this.minutes = ''; // alert('hh');
        }
      }, {
        key: "onViewTitleChanged",
        value: function onViewTitleChanged(title) {
          this.viewTitle = title;
        } // activatePopup(i){
        //   this.indexForLive = i;
        //   if(this.repetatedDateCopy[i].is_live == true){
        //     this.repetatedDateCopy[i].is_live = false;
        //   }else{
        //     this.repetatedDateCopy[i].is_live = true;
        //   }
        //   console.log(this.repetatedDateCopy.length);
        //   if (this.programDetail) {
        //     this.commonService.presentToast('only one program can create at a time');
        //     return true;
        //   }
        //   this.newEvent = this.addEventData[i].event;
        //   let cEvent = this.newEvent.selectedTime;
        //   console.log(cEvent.getDate());
        //   console.log(new Date().getDate());
        //   if ((cEvent.getDate() < (new Date().getDate()) && cEvent.getMonth() <= (new Date().getMonth())) || cEvent.getMonth() < (new Date().getMonth())){
        //     this.commonService.presentToast('Sorry, this is past time');
        //     return;
        //   }
        //   this.dateObj = new Date(this.newEvent.selectedTime + 'Z');
        //   this.noEvent = true;
        //   console.log(this.selectDate);
        //   this.selectDate.forEach(el => {
        //     console.log(el.getDate());
        //     console.log(this.dateObj.getDate());
        //     if(el.getDate() == this.dateObj.getDate() && el.getMonth() == this.dateObj.getMonth()){
        //     console.log('same date');
        //      this.noEvent = false;
        //       return false;
        //     }
        //   });
        //   if(this.timeSlot == true ){
        //     if(this.newEvent.events.length > 0){
        //       if( this.noEvent == true){
        //       this.newEvent.events.forEach(el => {
        //         console.log(this.hours);
        //         console.log(el.startTime.getHours());
        //         this.dateObj.setHours((this.hours),  parseInt(this.minutes));
        //         if (el.startTime.getHours() == this.hours || el.endTime.getHours() == this.hours) {
        //           console.log(el.startTime.getTime() + 'event time');
        //           this.noEvent = false;
        //           console.log(el.startTime.getTime());
        //           console.log(this.dateObj.getTime());
        //           console.log(el.endTime);
        //           // if ( (el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= nd.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {
        //             // if ( (el.startTime.getTime() > this.dateObj.getTime() && el.endTime.getTime() <= this.dateObj.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) { 
        //           if ( (el.startTime.getTime() > this.dateObj.getTime() ) || (el.endTime.getTime() <= this.dateObj.getTime())) {
        //             this.noEvent = true;
        //             console.log('newww');
        //           }else{
        //             this.noEvent = false;
        //             this.selectNewTime();
        //             console.log('exist');
        //             // return ;
        //           }
        //       }
        //       // else{
        //       //   this.noEvent = true;
        //       // }
        //       });
        //     }
        //   }
        //   // else {
        //   //     this.noEvent = true;
        //   //   }
        //   console.log(this.noEvent);
        //   if(this.noEvent == true){
        //     console.log(this.hours);
        //     this.dateObj.setHours((this.hours),  parseInt(this.minutes));
        //     if ((this.dateObj.getDate() == (new Date().getDate()) && this.dateObj.getMonth() <= (new Date().getMonth())) && this.dateObj.getHours() < (new Date().getHours())){
        //       this.commonService.presentToast('Sorry, this is past time');
        //       this.noEvent = false;
        //       return ;
        //     }
        //     this.selectDate.push(this.dateObj);
        //     // this.selectDate.forEach(el => {
        //     this.repetatedDateCopy.push({'date':this.dateObj ,'equipments':[], 'nutrition_id':[] , 'video': '','description':'','is_live':false});
        //     this.repetatedDate.push(this.dateObj);
        //   }else{
        //     // this.selectTimeSlot();
        //     // this.selectNewTime();
        //   }
        //   }
        //   console.log(this.timeSlot);
        //   console.log(this.noEvent);
        //   console.log(this.repetatedDateCopy[i]);
        // }

      }, {
        key: "onEventSelected",
        value: function onEventSelected(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var start, end, alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.startTime, 'medium', this.locale);
                    end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.endTime, 'medium', this.locale);
                    _context7.next = 4;
                    return this.alertCtrl.create({
                      header: event.title,
                      subHeader: event.desc,
                      message: 'From: ' + start + '<br>To: ' + end + '<br>Program Type: ' + event.typeID + '<br>Participant Type: ' + event.participant,
                      buttons: ['OK'],
                      cssClass: "custom-alert"
                    });

                  case 4:
                    alert = _context7.sent;
                    this.commonService.dismissModal();
                    alert.present();

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // Time slot was clicked

      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(event) {
          var _this11 = this;

          this.newEvent = event;
          console.log(event);
          this.dateObj = event.selectedTime;
          this.noEvent = true;
          this.selectDate.forEach(function (el) {
            console.log(el.getDate());
            console.log(_this11.dateObj.getDate());

            if (el.getDate() == _this11.dateObj.getDate() && el.getMonth() == _this11.dateObj.getMonth()) {
              console.log('same date');
              _this11.noEvent = false;
              return false;
            }
          });

          if (this.dateObj.getDate() < new Date().getDate() && this.dateObj.getMonth() <= new Date().getMonth()) {
            this.commonService.presentToast('Sorry, this is past time');
            this.noEvent = false;
            return false;
          }

          console.log(this.dateObj);

          if (this.noEvent) {
            this.selectDate.push(this.dateObj);
            this.repetatedDateCopy.push({
              'date': this.dateObj,
              'equipments': [],
              'nutrition_id': [],
              'video': '',
              'description': '',
              'is_live': false
            });
            this.repetatedDate.push(this.dateObj);
            this.addEventData.push({
              'event': this.newEvent
            });
            console.log(this.repetatedDateCopy);
          }
        }
      }, {
        key: "selectTimeSlot",
        value: function selectTimeSlot() {
          var _this12 = this;

          var arr = [];
          var mins = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'];

          for (var i = 0; i <= 11; i++) {
            arr.push({
              text: mins[i],
              value: mins[i]
            });
          }

          var hrsArr = [];
          var hrs = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'];

          for (var _i = 1; _i <= 23; _i++) {
            hrsArr.push({
              text: _i,
              value: _i
            });
          }

          this.selected = new Date(this.newEvent.selectedTime);
          var hours = this.selected.getHours();
          var AmOrPm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12 || 12;
          var defaultColumnOptions = [{
            name: 'Hours',
            options: hrsArr
          }, {
            name: 'Minutes',
            options: arr
          }];
          var buttons = [{
            text: 'Select TimeSlot (HH:MM)',
            cssClass: 'timeHeading'
          }, {
            text: 'Cancel',
            role: 'cancel'
          }, {
            text: 'Confirm',
            handler: function handler(value) {
              _this12.minutes = value.Minutes.value;
              _this12.hours = value.Hours.value;

              _this12.presentPrompt(); // this.getModal();

            }
          }];
          this.commonService.presentItemPicker(defaultColumnOptions, buttons);
        }
      }, {
        key: "presentPrompt",
        value: function presentPrompt() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this13 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    alert = this.alertCtrl.create({
                      header: 'Duration',
                      message: '',
                      inputs: [{
                        name: 'duration',
                        placeholder: 'Duration(In Minutes)',
                        type: 'number'
                      }],
                      buttons: [{
                        text: 'Confirm',
                        handler: function handler(data) {
                          // if (User.isValid(data.username, data.password)) {
                          //   // logged in!
                          // } else {
                          //   // invalid login
                          //   return false;
                          // }
                          // console.log(this.indexForLive + 'indexForLive');
                          // console.log(this.myDate);
                          // console.log(this.progDuration);
                          // if(this.progDuration.length > 0){
                          //   let d = this.myDate.split('T')[1];
                          //   let h = d.split(':')[0];
                          //   let m = d.split(':')[1];
                          //   this.minutes = m;
                          //   this.hours = h;
                          //   this.dateObj.setHours((this.hours), parseInt(this.minutes));
                          //   this.repetatedDateCopy[this.indexForLive].date = this.dateObj;              
                          //   this.repetatedDate[this.indexForLive] = this.dateObj;              
                          //   this.progDuration = data.duration;      
                          //   console.log(this.repetatedDate);
                          // } else {
                          if (data.duration <= 0) {
                            _this13.showErrorToast('Enter Valid Duration');

                            return false;
                          } else if (data.duration > 60) {
                            _this13.showErrorToast('Enter Upto 60 minutes');

                            return false;
                          } else {
                            // this.dateObj = new Date(event.selectedTime + 'Z');
                            // this.noEvent = true;
                            _this13.selectDate.forEach(function (el) {
                              // console.log(el.getDate());
                              // console.log(this.dateObj.getDate());
                              if (el.getDate() == _this13.dateObj.getDate() && el.getMonth() == _this13.dateObj.getMonth()) {
                                console.log('same date'); //  this.noEvent = false;
                                //   return ;
                              }
                            });

                            _this13.progDuration = data.duration;
                            console.log(data);

                            _this13.dateObj.setHours(_this13.hours, parseInt(_this13.minutes));

                            _this13.dateObj = _this13.dateObj;

                            if (_this13.dateObj.getDate() == new Date().getDate() && _this13.dateObj.getMonth() <= new Date().getMonth() && _this13.dateObj.getHours() < new Date().getHours()) {
                              _this13.commonService.presentToast('Sorry, this is past time');

                              _this13.noEvent = false;
                              return;
                            } // alert(this.newEvent.events.length);


                            if (_this13.newEvent.events.length > 0) {
                              _this13.newEvent.events.forEach(function (el) {
                                if (el.startTime.getHours() == _this13.hours || el.endTime.getHours() == _this13.hours) {
                                  console.log(el.startTime.getTime() + 'event time');
                                  var nd = new Date(_this13.newEvent.selectedTime + 'Z');
                                  nd.setHours(_this13.hours, parseInt(_this13.minutes) + parseInt(_this13.progDuration));
                                  _this13.progEndTime = nd;
                                  console.log(_this13.progEndTime + 'endTime');
                                  _this13.noEvent = false;
                                  console.log(el.startTime.getTime());
                                  console.log(_this13.dateObj.getTime());
                                  console.log(el.endTime.getTime());
                                  console.log(nd.getTime());

                                  if (el.startTime.getTime() > _this13.dateObj.getTime() && el.startTime.getTime() >= nd.getTime() || el.endTime.getTime() <= _this13.dateObj.getTime()) {
                                    // if ( (el.startTime.getTime() > this.dateObj.getTime() ) || (el.endTime.getTime() <= this.dateObj.getTime())) {
                                    _this13.noEvent = true; // alert('tt');
                                  } else {
                                    _this13.noEvent = false;
                                    console.log('nn');

                                    _this13.sameTime();

                                    _this13.sTime.open();
                                  }
                                } // else{
                                //   this.noEvent = true;
                                // }

                              });
                            } else {
                              _this13.noEvent = true;
                            }

                            console.log(_this13.noEvent + ' event');

                            if (_this13.noEvent == true) {
                              // this.repetatedDateCopy.splice(this.indexForLive, 1);
                              // // this.selectDate.push(this.dateObj);
                              // this.repetatedDateCopy.push({'date':this.dateObj ,'equipments':[], 'nutrition_id':[] , 'video': '','description':'','is_live':false});
                              // this.repetatedDate.push(this.dateObj);
                              var time = _this13.dateObj;
                              _this13.selectDate[_this13.indexForLive] = _this13.dateObj;
                              _this13.repetatedDateCopy[_this13.indexForLive].date = '';
                              _this13.repetatedDateCopy[_this13.indexForLive].date = time;
                              _this13.repetatedDate[_this13.indexForLive] = _this13.dateObj;
                              _this13.repetatedDate = _this13.repetatedDate;

                              if (_this13.repetatedDateCopy[_this13.indexForLive].is_live == true) {
                                _this13.repetatedDateCopy[_this13.indexForLive].is_live = false;
                              } else {
                                _this13.repetatedDateCopy[_this13.indexForLive].is_live = true;
                              }

                              console.log(_this13.repetatedDateCopy);
                              console.log(time, ' time');

                              _this13.changeDetection.detectChanges();

                              _this13.timeSlot = true;
                            }
                          } // }

                        }
                      }]
                    });
                    _context8.next = 3;
                    return alert;

                  case 3:
                    _context8.sent.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "showErrorToast",
        value: function showErrorToast(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toastCtrl.create({
                      message: data,
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "addLiveProgram",
        value: function addLiveProgram() {
          var _this14 = this;

          this.noEvent = true;
          this.selectDate.forEach(function (el) {
            console.log(el.getDate());
            console.log(_this14.dateObj.getDate());

            if (el.getDate() == _this14.dateObj.getDate() && el.getMonth() == _this14.dateObj.getMonth()) {
              console.log('same date');
              _this14.noEvent = false;
              return false;
            }
          });
          console.log(this.dateObj);

          if (this.noEvent) {
            this.selectDate.push(this.dateObj);
            this.repetatedDateCopy.push({
              'date': this.dateObj,
              'equipments': [],
              'nutrition_id': [],
              'video': '',
              'description': '',
              'is_live': false
            });
            this.repetatedDate.push(this.dateObj);
            this.addEventData.push({
              'event': this.newEvent
            });
            console.log(this.repetatedDateCopy);
          }
        }
      }, {
        key: "showdate",
        value: function showdate() {
          var _this15 = this;

          this.selectDate.forEach(function (el) {
            console.log(el.getDate());
            console.log(_this15.dateObj.getDate());

            if (el.getDate() == _this15.dateObj.getDate() && el.getMonth() == _this15.dateObj.getMonth()) {
              console.log('same date'); //  this.noEvent = false;
              //   return false;
            }
          });
          this.minutes = '';
          this.hours = '';
          console.log("this.myDate");
          console.log(this.myDate);
          var d = this.myDate.split('T')[1];
          var h = d.split(':')[0];
          var m = d.split(':')[1];
          this.minutes = m;
          this.hours = h;

          if (h != undefined || ' ') {
            this.presentPrompt();
          }

          console.log("test");
          console.log("test");
        }
      }, {
        key: "click",
        value: function click(date) {
          console.log('click..', date);
          var hoursMinutes = date.split(':');
          var time = this.formatAMPM(hoursMinutes);
          console.log('time', time);
        }
      }, {
        key: "formatAMPM",
        value: function formatAMPM(date) {
          var hours = date[0];
          var minutes = date[1];
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12;
          minutes = minutes < 10 ? '0' + minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }
      }, {
        key: "preRemovedate",
        value: function preRemovedate(index) {
          this.repetatedDateCopy.splice(index, 1);
          this.repetatedDate.splice(index, 1);
          this.selectDate.splice(index, 1);
        }
      }, {
        key: "preSelectedDate",
        value: function preSelectedDate(index) {
          this.repetatedDateCopy.splice(index, 1);
          this.selectDate.splice(index, 1);
          this.repetatedDate.splice(index, 1);
          console.log(this.selectDate);
        } // selectNewTime() {
        //   let arr = [];
        //   var hrs = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14'];
        //   for (let i = 1; i <= 60; i++) {
        //     arr.push({ text: i, value: i });
        //   } 
        //   const defaultColumnOptions = [
        //     {
        //       name: 'Hours',
        //       options:arr
        //     }
        //   ];
        //   const buttons = [
        //     {
        //       text: 'Program is already assign for this time slot, Select new minute ' ,
        //       cssClass: 'timeHeading'
        //     },
        //     {
        //       text: 'Cancel',
        //       role: 'cancel'
        //     },
        //     {
        //       text: 'Confirm',
        //       handler: (value) => { 
        //         this.noEvent = true;
        //         var hours = value.Hours.value;
        //         console.log(hours);
        //         this.dateObj.setMinutes(hours);
        //         console.log(this.dateObj);
        //         console.log(this.durTime);
        //         // var newEndTime = new Date(this.eventList.selectedTime + 'Z');
        //         this.progEndTime.setHours((this.mainHours.getHours()),  parseInt(hours)+parseInt(this.progDuration));
        //         console.log(this.progEndTime);
        //         console.log('fffffffffffffffffff');
        //         this.eventList.events.forEach(el => {
        //           if (el.startTime.getHours() == this.dateObj.getHours() || el.endTime.getHours() == this.dateObj.getHours()) {
        //             console.log(el.startTime.getTime());
        //             console.log(el.endTime.getTime());
        //             console.log(this.dateObj.getTime());          
        //           if ((el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= this.progEndTime.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {  
        //             this.noEvent == true;
        //           }
        //           else{
        //             this.commonService.presentToast('this time slot already has event');
        //             this.noEvent = false;
        //           }
        //         }
        //         });
        //         this.repetatedDateCopy.forEach(el => {
        //           if(el.getDate() == this.dateObj.getDate()){
        //             this.noEvent = false;
        //             return ;
        //           }else{
        //             // this.noEvent = true;
        //           }
        //         });
        //         if(this.noEvent == true){
        //           this.repetatedDateCopy.push(this.dateObj);
        //         }
        //         hours  = '';
        //       }
        //     }
        //   ]
        //     this.commonService.presentItemPicker(defaultColumnOptions, buttons);
        // }

      }, {
        key: "addVideo",
        value: function addVideo(event, i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this16 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalCtrl.create({
                      component: _videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_22__["VideosThumbListComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        'programDetail': event
                      }
                    });

                  case 2:
                    modal = _context10.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (d.data) {
                        _this16.repetatedDateCopy[i].video = d.data; // this.repetatedDate[i].video=d.data;
                      }
                    });
                    _context10.next = 6;
                    return modal.present();

                  case 6:
                    return _context10.abrupt("return", _context10.sent);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "addEquipments2",
        value: function addEquipments2(event, item, i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this17 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    console.log(item);
                    _context11.next = 3;
                    return this.modalCtrl.create({
                      component: _add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_21__["AddEquipmentsComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        "programData": item,
                        "modelOpen": event
                      }
                    });

                  case 3:
                    modal = _context11.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (event == 1) {
                        _this17.repetatedDateCopy[i].equipments = d.data.filter(Boolean); // this.repetatedDate[i].equipments = d.data.filter(Boolean) ;
                      } else {
                        _this17.repetatedDateCopy[i].nutrition_id = d.data.filter(Boolean); // this.repetatedDate[i].nutrition_id = d.data.filter(Boolean) ;
                      }

                      console.log(_this17.repetatedDateCopy); // console.log(this.repetatedDate);
                    });
                    _context11.next = 7;
                    return modal.present();

                  case 7:
                    return _context11.abrupt("return", _context11.sent);

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "detailsUpdate",
        value: function detailsUpdate($event, programId) {
          $event.detail.programId = programId;
          console.log($event.detail);
        } // async onTimeSelected(ev) {
        //   const modal = await this.modalController.create({
        //     component: UserModalComponent,
        //     cssClass: 'my-custom-class'
        //   });
        //   return modal.present();
        // }

      }, {
        key: "sameTime",
        value: function sameTime() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var toast;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toastCtrl.create({
                      message: 'Program is already assigned for this time slot',
                      duration: 5000,
                      position: 'top'
                    });

                  case 2:
                    toast = _context12.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "selectNewTime",
        value: function selectNewTime() {
          var _this18 = this;

          var arr = [];
          var min = [];
          var hrs = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];

          for (var i = 1; i <= 24; i++) {
            arr.push({
              text: i,
              value: i
            });
          }

          for (var _i2 = 1; _i2 <= 60; _i2++) {
            min.push({
              text: _i2,
              value: _i2
            });
          }

          var defaultColumnOptions = [{
            name: 'Hours',
            options: arr
          }, {
            name: 'Minutes',
            options: min
          }];
          var buttons = [{
            text: 'Program is already assign for this time slot, Select new TimeSlot(HH:MM)',
            cssClass: 'timeHeading'
          }, {
            text: 'Cancel',
            role: 'cancel'
          }, {
            text: 'Confirm',
            handler: function handler(value) {
              _this18.noEvent = true;
              var minute = value.Minutes.value;
              var hours = value.Hours.value;
              console.log(minute);
              console.log(hours);
              console.log(_this18.hours); // this.dateObj.setMinutes(minute);

              console.log(_this18.dateObj); // var newEndTime = new Date(this.eventList.selectedTime + 'Z');

              var newDateTime = _this18.dateObj; // this.dateObj.setHours((this.hours),  parseInt(this.minutes));

              var nd = newDateTime.setHours(hours, parseInt(minute));
              _this18.progEndTime = nd;
              console.log(_this18.progEndTime);
              console.log(nd);

              _this18.newEvent.events.forEach(function (el) {
                if (el.startTime.getHours() == _this18.dateObj.getHours() || el.endTime.getHours() == _this18.dateObj.getHours()) {
                  console.log(el.startTime.getTime());
                  console.log(el.endTime.getTime());
                  console.log(_this18.dateObj.getTime());

                  if (el.startTime.getTime() > _this18.dateObj.getTime() && el.startTime.getTime() >= _this18.progEndTime || el.endTime.getTime() <= _this18.dateObj.getTime()) {
                    _this18.noEvent = true;
                    _this18.timeSlot = true;
                  } else {
                    _this18.commonService.presentToast('this time slot already has event');

                    _this18.noEvent = false;
                  }
                }
              });

              _this18.repetatedDateCopy.forEach(function (el) {
                if (el.date.getDate() == _this18.dateObj.getDate()) {
                  _this18.noEvent = false;
                  return;
                } else {// this.noEvent = true;
                }
              });

              if (_this18.noEvent == true) {
                // this.repetatedDateCopy.push(this.dateObj);
                _this18.selectDate.push(_this18.dateObj);

                _this18.repetatedDate.push(_this18.dateObj);

                _this18.repetatedDateCopy.push({
                  'date': _this18.dateObj,
                  'equipments': [],
                  'nutrition_id': [],
                  'video': '',
                  'description': '',
                  'is_live': true
                });
              }

              minute = '';
              console.log(_this18.repetatedDateCopy); //  alert(this.noEvent)
            }
          }];
          this.commonService.presentItemPicker(defaultColumnOptions, buttons);
        }
      }, {
        key: "toPrevScreen",
        value: function toPrevScreen() {
          if (!this.ProgramInserted) {
            this.getModal();
          } else {
            this.showProgram = 3;
          }
        }
      }, {
        key: "getModal",
        value: function getModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this19 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.modalCtrl.create({
                      component: _date_time_modal_date_time_modal_component__WEBPACK_IMPORTED_MODULE_9__["DateTimeModalComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        "calendarData": this.selected,
                        "repetatedDateCopy": this.repetatedDateCopy,
                        "repetatedDate": this.repetatedDate,
                        "duration": this.progDuration,
                        "programData": this.programForm.value,
                        'programList': this.eventSource,
                        'minutes': this.minutes
                      }
                    });

                  case 2:
                    modal = _context13.sent;
                    modal.onDidDismiss().then(function (d) {
                      console.log(d);
                      var progId = d.data; // console.log(progId.id + 'pppppidddd');

                      if (_this19.isVideoSelected == true) {
                        console.log('a1');
                        var url = baseUrl + "api/auth/uploadVideoForProgram";

                        var filename = _this19.selectedVideo.substr(_this19.selectedVideo.lastIndexOf('/') + 1);

                        var options = {
                          fileName: filename,
                          fileKey: "video",
                          mimeType: "video/mp4",
                          httpMethod: "POST",
                          chunkedMode: false,
                          headers: {
                            "Authorization": "Bearer " + localStorage.getItem('userToken')
                          },
                          params: {
                            'prog_id': progId.id
                          }
                        }; // const fileTransfer: FileTransferObject = this.transfer.create();

                        _this19.videoFileUpload = _this19.transfer.create();

                        _this19.videoFileUpload.upload(_this19.selectedVideo, url, options).then(function (data) {
                          console.log('gg');
                          console.log(data.response);
                        }).then(function (data) {});
                      }

                      if (d.data.program_date) {
                        console.log('a2');
                        var startTime;
                        var endTime;
                        startTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime.setMinutes(endTime.getMinutes() + parseInt(d.data.program_duration));
                        var participantType = d.data.is_requested ? "Excusive" : "Open (User will request to join)";

                        _this19.eventSource.push({
                          title: d.data.title,
                          startTime: startTime,
                          endTime: endTime,
                          allDay: false,
                          typeID: d.data.type_id,
                          participant: participantType
                        });

                        _this19.programDetail = d.data;

                        _this19.ionViewWillEnter(); // this.showProgram = 3;


                        _this19.ProgramInserted = true;

                        _this19.router.navigate(["tabs/program"]);
                      } // this.router.navigate(["tabs/program"])

                    });
                    _context13.next = 6;
                    return modal.present();

                  case 6:
                    return _context13.abrupt("return", _context13.sent);

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        } // openGallery() {
        //   this.pickFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
        // }

      }, {
        key: "takeSnap",
        value: function takeSnap() {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        key: "pickImage",
        value: function pickImage(sourceType) {
          var _this20 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this20.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
          }, function (err) {// alert(err);
          });
        } // pickFromGallery(sourceType) {
        //   const options: CameraOptions = {
        //     quality: 60,
        //     sourceType: sourceType,
        //     destinationType: this.camera.DestinationType.DATA_URL,
        //     mediaType: this.camera.MediaType.ALLMEDIA,
        //     correctOrientation: true
        //   }
        //   this.camera.getPicture(options).then((imageData) => {
        //     this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        //   }, (err) => {
        //     alert(err);
        //   });
        // }

      }, {
        key: "pickImageFromGallery",
        value: function pickImageFromGallery(sourceType) {
          var _this21 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this21.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
          }, function (err) {// alert(err);
          });
        }
      }, {
        key: "pickVideoFromGallery",
        value: function pickVideoFromGallery(sourceType) {
          var _this22 = this;

          var options = {
            quality: 60,
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY // sourceType: sourceType,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // mediaType: this.camera.MediaType.VIDEO,
            // correctOrientation: true

          };
          this.camera.getPicture(options).then(function (videoUrl) {
            var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
            var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1); // var durc = this.getvideoinfo(dirpath);
            // console.log(durc + 'ddddddddddddddd');

            var dur = _this22.media.create(dirpath);

            var duration = dur.getDuration();
            console.log(dur);
            console.log(JSON.stringify(dur));
            console.log(duration + 'duration');
            console.log(JSON.stringify(duration) + 'ation');
            dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;

            _this22.selectedVideoFile(dirpath, filename); // this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

          }, function (err) {// alert(err);
          });
        }
      }, {
        key: "fsubmit",
        value: function fsubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    if (!(!this.musicId || !this.programDetail.id)) {
                      _context14.next = 3;
                      break;
                    }

                    this.commonService.presentToast('Select music. Or something really went wrong.');
                    return _context14.abrupt("return");

                  case 3:
                    this.commonService.presentLoader();
                    this.programService.updateProgramMusic({
                      "musicId": this.musicId,
                      "programId": this.programDetail.id
                    }).subscribe(function (data) {
                      _this23.commonService.dismissLoader();

                      _this23.router.navigate(["/tabs/program"]);
                    });

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(musicname) {
          var _this24 = this;

          var searchTerm = musicname.srcElement.value;

          if (searchTerm == '') {
            this.musicService.getGenres().subscribe(function (data) {
              _this24.genres = data.genres;
              _this24.allMusic = data.genres[0].musics;
            });
          } else {
            this.programService.searchMusic({
              "searchQuery": searchTerm
            }).subscribe(function (search) {
              _this24.allMusic = search.musicList;
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.programForm.controls;
        }
      }, {
        key: "nextStep",
        value: function nextStep(event) {
          console.log(event);
          this.selected = [];
          this.repetatedDateCopy = [];
          this.repetatedDate = [];
          this.progDuration = []; // this.programForm.value = [];
          // this.eventSource = '';

          this.minutes = '';
          var formControl = this.programForm.controls;
          this.submitted = true;
          console.log(formControl.chatStatus.value);

          if (this.ProgramInserted) {
            this.showProgram = 3;
          }

          if (event == 2) {
            console.log(this.ProgramInserted);

            if (this.ProgramInserted == true) {
              this.showProgram = 3;
              return true;
            }

            if (this.programForm.invalid) {
              this.openToast();
              return false;
            }

            if (formControl.participantsType.value == 1 && !formControl.userList.value) {
              this.commonService.presentToast('Selected exclusive but no user selected');
              return false;
            }

            this.programForm.value.file = this.gallaryImgPath;
            this.showProgram = 2;
          }
        }
      }, {
        key: "musicSelect",
        value: function musicSelect(ev) {
          this.musicId = ev[0];
          this.selectedAudioFile = ev[1]; // audio file 

          this.audioFilename = ev[2]; // audio Name

          this.audioFileDuration = ev[3]; // audio duration  

          this.prepareAudioFile();
        }
      }, {
        key: "prepareAudioFile",
        value: function prepareAudioFile() {
          var _this25 = this;

          this.platform.ready().then(function () {
            _this25.musicChanged = 1;
            _this25.audioFile = _this25.baseUrl + "public/storage/audio/" + _this25.selectedAudioFile;
          });
        }
      }, {
        key: "toLastScreen",
        value: function toLastScreen() {
          console.log(this.programDetail); // if (this.programDetail && this.programForm.value.programType != 6) {

          if (this.programDetail) {
            this.showProgram = 3;
          } // else {
          //   this.router.navigate(["/tabs/program" ])
          // }

        }
      }, {
        key: "removeImg",
        value: function removeImg(index) {
          this.gallaryImgPath.splice(index, 1);
        }
      }, {
        key: "clearExcl",
        value: function clearExcl() {
          this.modalData = null;
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.programForm.reset();
          this.showProgram = 1;
          this.programDetail = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.programForm.reset();
        }
      }, {
        key: "verifyUserInfoModal",
        value: function verifyUserInfoModal() {
          if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_16__["VerifyUserInfoComponent"], 'fullpage', '');
          } else {}
        }
      }, {
        key: "toggleIcon",
        value: function toggleIcon(item, i) {
          item.active = !item.active;
        }
      }]);

      return AddProgramPage;
    }();

    AddProgramPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]
      }, {
        type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__["Media"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"]
      }, {
        type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_13__["ProgramService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PickerController"]
      }, {
        type: _services_music_service__WEBPACK_IMPORTED_MODULE_15__["MusicService"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"]
      }, {
        type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_19__["PreviewAnyFile"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddProgramPage.prototype, "sTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlides"])], AddProgramPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"])], AddProgramPage.prototype, "myCal", void 0);
    AddProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-program.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-program.page.scss */
      "./src/app/add-program/add-program.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__["Media"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"], _services_program_service__WEBPACK_IMPORTED_MODULE_13__["ProgramService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PickerController"], _services_music_service__WEBPACK_IMPORTED_MODULE_15__["MusicService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_19__["PreviewAnyFile"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]])], AddProgramPage);
    /***/
  },

  /***/
  "./src/app/audio-player-program/audio-player-program.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/audio-player-program/audio-player-program.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAudioPlayerProgramAudioPlayerProgramComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n.audio-list > div {\n  display: flex;\n}\n\n.audio-list > * {\n  display: inline-block;\n}\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px;\n}\n\nion-range ion-label {\n  margin-right: 50px;\n}\n\nion-fab-button {\n  min-width: 40px;\n}\n\nion-fab-button + div {\n  width: 100%;\n}\n\nion-fab-button + div > div {\n  display: flex;\n}\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 50px;\n}\n\n.music-spinner {\n  --color: #26a69a;\n}\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 28px;\n}\n\n.music-timer-fav ion-icon {\n  margin: 0 5px;\n}\n\n.musicbar {\n  padding-right: 50px;\n}\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.musicWrapper ion-toolbar .audio-listInner {\n  display: block;\n  background: #26a69a;\n  height: 56px;\n  margin-top: 10px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n  position: absolute;\n  width: 90%;\n  top: 2px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n  margin-top: 20px;\n  margin-left: 10px;\n  padding-left: 50px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGF1ZGlvLXBsYXllci1wcm9ncmFtXFxhdWRpby1wbGF5ZXItcHJvZ3JhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vYXVkaW8tcGxheWVyLXByb2dyYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxVQUFBO0VBQVcsZ0JBQUE7RUFBaUIsbUJBQUE7QUNJeEM7O0FESEE7RUFBZ0IsYUFBQTtBQ09oQjs7QUROQTtFQUFjLHFCQUFBO0FDVWQ7O0FEVEE7RUFBVSxpQkFBQTtFQUFrQixhQUFBO0FDYzVCOztBRGJBO0VBQW9CLGtCQUFBO0FDaUJwQjs7QURoQkE7RUFBZSxlQUFBO0FDb0JmOztBRG5CQTtFQUFtQixXQUFBO0FDdUJuQjs7QUR0QkE7RUFBdUIsYUFBQTtBQzBCdkI7O0FEekJBO0VBQWtDLFdBQUE7RUFBWSxpQkFBQTtBQzhCOUM7O0FEN0JBO0VBQWUsZ0JBQUE7QUNpQ2Y7O0FEL0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2tDSjs7QURoQ0E7RUFDSSxhQUFBO0FDbUNKOztBRGpDQTtFQUNJLG1CQUFBO0FDb0NKOztBRGpDSTtFQUFZLGtCQUFBO0VBQW1CLGdCQUFBO0FDc0NuQzs7QURyQ1E7RUFBaUIsY0FBQTtFQUFlLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxnQkFBQTtBQzJDekU7O0FEekNnQjtFQUFVLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxRQUFBO0FDOEN4RDs7QUQ1Q1k7RUFBWSxnQkFBQTtFQUFpQixpQkFBQTtFQUFrQixrQkFBQTtBQ2lEM0Q7O0FEaERnQjtFQUFVLFdBQUE7QUNtRDFCIiwiZmlsZSI6InNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vYXVkaW8tcGxheWVyLXByb2dyYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW8tbGlzdHtwYWRkaW5nOiAwOy0tcGFkZGluZy10b3A6IDA7LS1wYWRkaW5nLWJvdHRvbTogMDt9XHJcbi5hdWRpby1saXN0PmRpdntkaXNwbGF5OiBmbGV4O31cclxuLmF1ZGlvLWxpc3Q+KntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG5pb24tcmFuZ2V7LS1rbm9iLXNpemU6IDE4cHg7LS1oZWlnaHQ6IDJweDt9XHJcbmlvbi1yYW5nZSBpb24tbGFiZWx7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuaW9uLWZhYi1idXR0b257bWluLXdpZHRoOiA0MHB4O31cclxuaW9uLWZhYi1idXR0b24rZGl2e3dpZHRoOiAxMDAlO31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdntkaXNwbGF5OiBmbGV4O31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdiAraW9uLWxhYmVse2NvbG9yOiAjRkZGO21hcmdpbi1sZWZ0OiA1MHB4O31cclxuLm11c2ljLXNwaW5uZXJ7LS1jb2xvcjogIzI2YTY5YTt9XHJcblxyXG4ubXVzaWMtdGltZXItZmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAyOHB4O1xyXG59XHJcbi5tdXNpYy10aW1lci1mYXYgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ubXVzaWNiYXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4ubXVzaWNXcmFwcGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLmF1ZGlvLWxpc3RJbm5lcntkaXNwbGF5OiBibG9jaztiYWNrZ3JvdW5kOiAjMjZhNjlhO2hlaWdodDogNTZweDttYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAubXVzaWNiYXJ7XHJcbiAgICAgICAgICAgICAgICBpb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA5MCU7dG9wOiAycHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tdXNpYy1uYW1le21hcmdpbi10b3A6IDIwcHg7bWFyZ2luLWxlZnQ6IDEwcHg7cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse2NvbG9yOiAjRkZGO31cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hdWRpby1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmF1ZGlvLWxpc3QgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXVkaW8tbGlzdCA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1yYW5nZSB7XG4gIC0ta25vYi1zaXplOiAxOHB4O1xuICAtLWhlaWdodDogMnB4O1xufVxuXG5pb24tcmFuZ2UgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24gKyBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWZhYi1idXR0b24gKyBkaXYgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiArIGRpdiA+IGRpdiArIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLm11c2ljLXNwaW5uZXIge1xuICAtLWNvbG9yOiAjMjZhNjlhO1xufVxuXG4ubXVzaWMtdGltZXItZmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyOHB4O1xufVxuXG4ubXVzaWMtdGltZXItZmF2IGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLm11c2ljYmFyIHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIgLmF1ZGlvLWxpc3RJbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMjZhNjlhO1xuICBoZWlnaHQ6IDU2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5hdWRpby1saXN0SW5uZXIgLm11c2ljYmFyIGlvbi1yYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgdG9wOiAycHg7XG59XG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5hdWRpby1saXN0SW5uZXIgLm11c2ljLW5hbWUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAuYXVkaW8tbGlzdElubmVyIC5tdXNpYy1uYW1lIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjRkZGO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/audio-player-program/audio-player-program.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/audio-player-program/audio-player-program.component.ts ***!
    \************************************************************************/

  /*! exports provided: AudioPlayerProgramComponent */

  /***/
  function srcAppAudioPlayerProgramAudioPlayerProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioPlayerProgramComponent", function () {
      return AudioPlayerProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AudioPlayerProgramComponent = /*#__PURE__*/function () {
      function AudioPlayerProgramComponent() {
        _classCallCheck(this, AudioPlayerProgramComponent);

        this.isPlaying = false;
        this.isLoading = false;
        this.currentTime = 0;
        this.duration = "00:00";
        this.drag = false;
      }

      _createClass(AudioPlayerProgramComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._player = this.playerElementRef.nativeElement;

          this._bindPlayerEvents();
        }
      }, {
        key: "onDrag",
        value: function onDrag() {
          var _this26 = this;

          this.drag = true;
          setTimeout(function () {
            _this26.drag = false;
          }, 300);
        }
      }, {
        key: "play",
        value: function play() {
          this.isPlaying = true;
          this.selectedAudio[1] = 0;

          this._player.play();
        }
      }, {
        key: "pause",
        value: function pause() {
          this.isPlaying = false;

          this._player.pause();
        }
      }, {
        key: "seek",
        value: function seek(_ref) {
          var value = _ref.detail.value;

          if (this.drag) {
            this._player.currentTime = value;
          }
        }
      }, {
        key: "_bindPlayerEvents",
        value: function _bindPlayerEvents() {
          var _this27 = this;

          this._player.addEventListener('playing', function () {
            _this27.isPlaying = true;
          });

          this._player.addEventListener('pause', function () {
            _this27.isPlaying = false;
          });

          this._player.addEventListener('timeupdate', function () {
            _this27.currentTime = Math.floor(_this27._player.currentTime);
          });

          this._player.addEventListener('seeking', function () {
            _this27.isLoading = true;
          });

          this._player.addEventListener('seeked', function () {
            _this27.isLoading = false;
          });

          this._player.addEventListener('loadstart', function () {
            _this27.isLoading = true;
          });

          this._player.addEventListener('loadeddata', function () {
            _this27.isLoading = false;
            var minutes = Math.floor(_this27._player.duration / 60);
            _this27.duration = minutes + ':' + Math.floor(_this27._player.duration - minutes * 60);
          });
        }
      }]);

      return AudioPlayerProgramComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AudioPlayerProgramComponent.prototype, "selectedAudio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AudioPlayerProgramComponent.prototype, "playerElementRef", void 0);
    AudioPlayerProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audio-player-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audio-player-program.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player-program/audio-player-program.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./audio-player-program.component.scss */
      "./src/app/audio-player-program/audio-player-program.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! .././app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AudioPlayerProgramComponent);
    /***/
  }
}]);
//# sourceMappingURL=add-program-add-program-module-es5.js.map