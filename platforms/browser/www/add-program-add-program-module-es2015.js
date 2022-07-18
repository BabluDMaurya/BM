(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-program-add-program-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Add Program</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"nextStep(2)\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"12\"  class=\"ion-no-padding video_col\" *ngIf=\"videoFileSelected\">\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n        <ion-slide >\r\n          \r\n          <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n          <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n        </ion-slide>\r\n        </ion-slides>  \r\n      </ion-col>   -->\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gallaryImgPath?.length>0 || videoFileSelected\">\r\n        <ion-button (click)=\"slidePrev()\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide *ngIf=\"isVideoSelected\">\r\n            <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\"\r\n              src=\"../../assets/images/demo3.jpg\">\r\n            <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\"\r\n              (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext()\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-item-sliding *ngFor=\"let f of files\">\r\n        <ion-item (click)=\"openFile(f)\">\r\n          <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\r\n          <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\r\n          <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\r\n\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ f.name }}\r\n            <p>{{ f.fullPath }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n      <!-- \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\">\r\n            <img src=\"../../assets/images/demo1.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo2.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo3.jpg\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"programForm\">\r\n          <ion-list>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input class=\"form-control\" formControlName=\"programTitle\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.programTitle.errors }\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ng-container *ngFor=\"let validation of validation_messages.programTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || programForm.get('programTitle').touched) && programForm.get('programTitle').hasError(validation.type)\">{{\r\n                validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"mb-10 floatingItem\">\r\n              <ion-label position=\"floating\">Description </ion-label>\r\n              <ion-textarea class=\"form-control\" formControlName=\"programDescription\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Program Type</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group class=\"full-width radio-list\" formControlName=\"programType\">\r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Private - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Group - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item> -->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Private</ion-label>\r\n                      <!-- <ion-label>One to One</ion-label> -->\r\n                      <!-- <ion-label>Private - Twoway</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"3\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Group</ion-label>\r\n                      <!-- <ion-label>Many to Many</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"4\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Broadcast</ion-label>\r\n                      <!-- <ion-label>One to Many</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"5\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Video</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"6\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Nutrition</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"7\" formControlName=\"programType\" disabled=\"true\"></ion-radio>\r\n                    </ion-item> -->\r\n                  </ion-radio-group>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.programType\">\r\n                    <span class=\"error-message\"\r\n                      *ngIf=\"(submitted || programForm.get('programType').touched) && programForm.get('programType').hasError(validation.type)\">{{\r\n                      validation.message }}</span>\r\n                  </ng-container>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Participants</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"participantsType\">\r\n                    <ion-item lines=\"none\" (click)=\"userModal()\">\r\n                      <ion-label>Exclusive</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"participantsType\"\r\n                        [disabled]=\"f.programType.value==5 || !f.programType.value?true:false\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\" (click)=\"clearExcl()\">\r\n                      <ion-label>Open</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" checked formControlName=\"participantsType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ng-container *ngFor=\"let validation of validation_messages.participantsType\">\r\n                      <span class=\"error-message\"\r\n                        *ngIf=\"(submitted || programForm.get('participantsType').touched) && programForm.get('participantsType').hasError(validation.type)\">{{\r\n                        validation.message }}</span>\r\n                    </ng-container>\r\n                  </ion-radio-group>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-item class=\"mb-10\" *ngIf=\"modalData?.length>0\">\r\n                  <ion-list lines=\"none\" class=\"users-list\">\r\n                    <ion-item *ngFor=\"let user of modalData\">\r\n                      <img src=\"{{profileUrl}}{{user.bios.profile_pic}}\" *ngIf=\"user.bios.profile_pic\"\r\n                        (click)=\"userList()\" />\r\n                      <img src=\"../../assets/images/user.png\" *ngIf=\"!user.bios.profile_pic\" (click)=\"userList()\" />\r\n                      <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-item>\r\n            <!-- <ion-item class=\"mb-10\" *ngIf=\"this.programForm.controls.participantsType.value == 2\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Share Program On Feed</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"feedStatus\">\r\n                    <ion-item lines=\"none\" >\r\n                      <ion-label>Yes</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" [checked]=\"true\" formControlName=\"feedStatus\"\r\n                        ></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\">\r\n                      <ion-label>No</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\"  formControlName=\"feedStatus\"></ion-radio>\r\n                    </ion-item>\r\n                   \r\n                  </ion-radio-group>\r\n                </ion-col>\r\n              <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              </ion-col>\r\n              </ion-row>  \r\n            </ion-item> -->\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Messages</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"chatStatus\">\r\n\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Enable</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" checked formControlName=\"chatStatus\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\">\r\n                      <ion-label>Disable</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" formControlName=\"chatStatus\"></ion-radio>\r\n                    </ion-item>\r\n                    <ng-container *ngFor=\"let validation of validation_messages.chatStatus\">\r\n                      <span class=\"error-message\"\r\n                        *ngIf=\"(submitted || programForm.get('chatStatus').touched) && programForm.get('chatStatus').hasError(validation.type)\">{{\r\n                        validation.message }}</span>\r\n                    </ng-container>\r\n                  </ion-radio-group>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==2\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"backToFirst()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Select Date & Time</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <!-- <ion-label (click)=\"toLastScreen()\" class=\"text-green\">Next</ion-label> -->\r\n          <ion-label *ngIf=\"repetatedDateCopy.length > 0\" (click)=\"toPrevScreen()\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <!-- Move back one screen of the slides -->\r\n        <ion-list lines=\"none\" class=\"calendar-header\">\r\n          <ion-item class=\"ion-text-left\">\r\n            <ion-button class=\"calend_arrow\" fill=\"clear\" (click)=\"back()\">\r\n              <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-title>{{ viewTitle }}</ion-title>\r\n          </ion-item>\r\n          <!-- Move forward one screen of the slides -->\r\n          <ion-item class=\"ion-text-right\">\r\n            <ion-button class=\"calend_arrow \" fill=\"clear\" (click)=\"next()\">\r\n              <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n        <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\r\n          scrollToHour=\"{{currentHrs}}\" (onEventSelected)=\"onEventSelected($event)\"\r\n          (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" startHour=\"0\"\r\n          endHour=\"24\" step=\"1\" class=\"calendar-table swiper-container\"></calendar>\r\n        <!-- <ion-datetime #dateTime1 displayFormat=\"mm\"></ion-datetime> -->\r\n        <ion-item *ngIf=\"scheduleProgram == 'program'\" style=\"position: relative; --min-height: 30px;\"\r\n          class=\"ion-no-padding ion-text-center\">\r\n          <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" *ngIf=\"calendar.mode == 'week'\"\r\n            (click)=\"handleCalendarView()\"></ion-icon>\r\n          <ion-icon class=\"toggle-cal\" ios=\"ios-arrow-dropup\" md=\"md-arrow-dropup\" *ngIf=\"calendar.mode == 'month'\"\r\n            (click)=\"handleCalendarView()\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <!-- <ion-list-header  *ngIf=\"repetatedDateCopy.length <= 0\" class=\" green green-alram-icon text-white\"> -->\r\n      <!-- <ion-list-header class=\"green-alram-icon\">\r\n          <ion-icon ios=\"ios-add\" md=\"md-add\" (click)=\"addLiveProgram()\" style=\"width: 1.5rem; height: 1.5rem;\"></ion-icon>\r\n        </ion-list-header> -->\r\n\r\n      <ion-list-header class=\" dateTimePopUp green green-alram-icon text-white\" style=\"display: none;\">\r\n        <div class='showDateTime'>\r\n          <ion-datetime display-format=\"h:mm A\" #picker picker-format=\"h:mm A\" id=\"dat\" [(ngModel)]=\"myDate\"\r\n            (ngModelChange)=\"showdate()\"></ion-datetime>\r\n        </div>\r\n      </ion-list-header>\r\n      <div class=\"live-event-addition\">\r\n        <h5>Select Date to add Event</h5>\r\n      </div>\r\n      <!-- <div class=\"live-event-box\">\r\n        <p class=\"live-event-head\">Live Events</p>\r\n        <div class=\"live-event-info\">\r\n          <div class=\"live-event-details\">\r\n            <p>5:35 PM-5:50 PM</p>\r\n            <div class=\"small-divider\"></div>\r\n            <p>Private</p>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"program__card\" *ngFor=\"let date of repetatedDateCopy let i = index\">\r\n        <ion-list class=\"width-full\">\r\n          <!-- <div *ngIf=\"date.date == dateObj\">  -->\r\n          <!-- <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n            {{date.date | date :'medium'}}\r\n            <div class=\"toggleDiv\"  (click)=\"toggleIcon(item)\"> -->\r\n          <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\" (click)=\"toggleIcon(item)\" checked={{date.is_live}}  slot=\"end\"></ion-toggle>\r\n              <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"toggleIcon(item)\" [ngClass]=\"{'active': item.active}\"></ion-icon> -->\r\n          <!-- <ion-label class=\"live\"  (ionChange)=\"activatePopup(i)\"   [ngClass]=\"{'active': item.active}\">LIVE</ion-label>\r\n            </div>\r\n            <div class=\"calender_green_bottom\"> -->\r\n          <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\"  checked={{date.is_live}}  slot=\"end\"></ion-toggle> -->\r\n          <!-- <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"activatePopup(i)\" [ngClass]=\"{'active': date.is_live}\"></ion-icon>\r\n              <ion-icon ios=\"ios-construct\" md=\"md-construct\" class=\"ion-margin-start\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n              <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n              </ion-icon>\r\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon> -->\r\n          <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n          <!-- <ion-icon ios=\"ios-close\" md=\"md-close-circle\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\"></ion-icon> -->\r\n          <!-- </div>\r\n            \r\n          </ion-list-header> -->\r\n          <ion-list-header class=\"ion-padding-horizontal green text-white live-ion-list-header\">\r\n            <div class=\"title\">\r\n              {{date.date | date :'mediumDate'}}\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"calender_green_bottom\">\r\n              <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\"  checked={{date.is_live}}  slot=\"end\"></ion-toggle> -->\r\n              <!-- <ion-icon class=\"live-icon\" (click)=\"picker.open()\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"activatePopup(i)\" [ngClass]=\"{'active': date.is_live}\"></ion-icon> -->\r\n              <div class=\"toggleDiv\" (click)=\"toggleIcon(item)\">\r\n                <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\" (click)=\"toggleIcon(item)\" checked={{date.is_live}}  slot=\"end\"></ion-toggle>\r\n                <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"toggleIcon(item)\" [ngClass]=\"{'active': item.active}\"></ion-icon> -->\r\n                <!-- <ion-label class=\"live\"  (ionChange)=\"activatePopup(i)\"   [ngClass]=\"{'active': item.active}\"></ion-label> -->\r\n                <ion-label class=\"live\" (click)=\"openStart(i)\" (ionChange)=\"activatePopup(i)\"\r\n                  [ngClass]=\"{'active': date.is_live}\"></ion-label>\r\n              </div>\r\n              <ion-icon ios=\"ios-fitness\" md=\"md-fitness\" class=\"ion-margin-start\"\r\n                (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n              <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\"\r\n                (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n              </ion-icon>\r\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\">\r\n              </ion-icon>\r\n              <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-close\" md=\"md-close-circle\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\"></ion-icon> -->\r\n            </div>\r\n\r\n          </ion-list-header>\r\n\r\n          <ion-item *ngIf=\"date?.equipments.length>0\">\r\n            <ion-icon class=\"live-event-icon\" ios=\"ios-fitness\" md=\"md-fitness\"></ion-icon>\r\n            <!-- <ion-label style=\"overflow: initial;\">Equipments :</ion-label> -->\r\n            <div class=\"users-list\" *ngIf=\"date?.equipments.length>0;else no_equipment\">\r\n              <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of date?.equipments\" />\r\n            </div>\r\n            <!-- <ng-template #no_equipment>No Equipment Selected</ng-template> -->\r\n          </ion-item>\r\n          <ion-item *ngIf=\"date.nutrition_id.length > 0\">\r\n            <ion-icon class=\"live-event-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n            <!-- <ion-label style=\"overflow: initial;\">Nutritions :</ion-label> -->\r\n            <div class=\"users-list\" *ngIf=\"date.nutrition_id.length>0;else no_nutrition\">\r\n              <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.nutrition_id\" />\r\n            </div>\r\n            <!-- <ng-template #no_nutrition>No Nutrition Selected</ng-template> -->\r\n          </ion-item>\r\n          <ion-item *ngIf=\"date?.video\">\r\n            <ion-icon class=\"live-event-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n            <!-- <ion-label style=\"overflow: initial;\">Videos :</ion-label> -->\r\n            <div class=\"users-list\" *ngIf=\"date?.video;else no_videos\">\r\n              <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.video\" />\r\n            </div>\r\n            <!-- <ng-template #no_videos>No videos Selected</ng-template> -->\r\n          </ion-item>\r\n          <!-- <ion-item class=\"descriptionItem\">\r\n            <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,item?.id)\"\r\n                value=\"{{item?.description}}\"></ion-textarea>\r\n          </ion-item> -->\r\n          <!-- </div> -->\r\n\r\n        </ion-list>\r\n        <div class=\"closeIcon\">\r\n          <ion-icon ios=\"ios-close\" md=\"md-close\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\">\r\n          </ion-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <ion-item class=\"date_items\" *ngFor=\"let dates of repetatedDateCopy; let i =index\"> \r\n        <h6 >{{dates.date | date :'medium'}} </h6>\r\n        <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemovedate(i)\"></ion-icon>\r\n      </ion-item>  -->\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==3\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=2\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" (click)=\"selectVolume()\">\r\n          <ion-label class=\"text-green\">Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <div class=\"main_content ion-padding programPreview\">\r\n      <form [formGroup]=\"finalForm\" (ngSubmit)=\"saveProg()\" class=\"fixed\">\r\n        <h6 style=\"margin: 0 0 15px 0\">Program Name: {{ programDetail.title }}</h6>\r\n        <ion-item lines=\"none\" class=\"fixed\">\r\n          <ion-label style=\"display: contents;\">How much would you like to charge:</ion-label>\r\n          <ion-label style=\"    margin-left: 40px;\">$</ion-label>\r\n          <ion-input class=\"form-control\" type=\"number\" formControlName=\"programFees\" value=\"0\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"programDetail.type_id == 'video'\" class=\"margin-top-md\">\r\n          <ion-label style=\"display: block;margin-top: 15px; padding-left: 15px;\">Would you like to request Sponsors:\r\n          </ion-label>\r\n          <ion-item lines=\"none\">\r\n            <ion-radio-group value=\"sponsors_group\" class=\"radio-group radioPreview\">\r\n              <ion-item>\r\n                <ion-label>Yes</ion-label>\r\n                <ion-radio slot=\"start\" value=\"1\" (click)=\"sponsar_prog()\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>No</ion-label>\r\n                <ion-radio slot=\"start\" value=\"2\" (click)=\"unsponsar_prog()\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <ion-list class=\"prog_btn_list\">\r\n          <ion-item lines=\"none\" (click)=\"verifyUserInfoModal()\"\r\n            *ngIf=\"loginUserData.trilloMatch != '1' && programDetail.type_id != 'video' \">\r\n            <ion-button class=\"green btn button-medium\">Earn with Intoactive</ion-button>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\" (click)=\"verifyUserInfoModal() \">\r\n        <ion-button class=\"green btn button-medium\">Earn with Intoative</ion-button>\r\n      </ion-item> -->\r\n          <ion-item class=\"\" *ngIf=\"approval_btn && !request_approve_btn \">\r\n            <ion-button (click)=\"applyAdvertise()\" class=\"green btn button-medium\">Request Approval</ion-button>\r\n          </ion-item>\r\n          <!-- <ion-item class=\"\" *ngIf=\"request_approve_btn\">\r\n        <ion-button class=\"green btn button-medium\">Request Sent</ion-button> \r\n      </ion-item> -->\r\n        </ion-list>\r\n      </form>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player-program/audio-player-program.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player-program/audio-player-program.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<audio #player src=\"{{selectedAudio[0]}}\"></audio>\r\n<div class=\"musicWrapper\">\r\n<ion-toolbar padding class=\"audio-list ion-no-padding\">\r\n  <div class=\"audio-listInner\">\r\n    <ion-fab-button *ngIf=\"!isPlaying\" (click)=\"play(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n      <ng-container *ngIf=\"isLoading; else loaded\">\r\n        <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n      </ng-container>\r\n      <ng-template #loaded>\r\n        <ion-icon [name]=\"'play'\">  </ion-icon>\r\n      </ng-template>\r\n    </ion-fab-button>\r\n    <ion-fab-button *ngIf=\"isPlaying\" (click)=\"pause(musicSelect)\" size=\"small\" fill=\"clear\" color=\"light\" class=\"newmusiclist-playBtn\">\r\n      <ng-container *ngIf=\"isLoading; else loaded\">\r\n        <ion-spinner name=\"crescent\" class=\"music-spinner\"></ion-spinner>\r\n      </ng-container>\r\n      <ng-template #loaded>\r\n        <ion-icon [name]=\"'pause'\">\r\n        </ion-icon>\r\n      </ng-template>\r\n    </ion-fab-button>\r\n    <div>\r\n      <div class=\"musicbar\">\r\n        <ion-range  [value]=\"currentTime\" (ionChange)=\"seek($event)\" (click)=\"onDrag()\"\r\n           class=\"newmusiclist-range\" color=\"light\"></ion-range>\r\n       </div>\r\n       <div>\r\n        <!-- <div class=\"music-name\">\r\n          <ion-label color=\"light\" slot=\"end\">{{ musicSelect?.title }}</ion-label> \r\n        </div> -->\r\n        <div class=\"music-timer-fav\">\r\n          <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>\r\n          <div></div>\r\n        </div>   \r\n        <div class=\"music-name\">\r\n          <ion-label class=\"ion-text-center\">{{selectedAudio[2]}}</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label> -->\r\n</ion-toolbar>\r\n</div>");

/***/ }),

/***/ "./src/app/add-program/add-program-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-program/add-program-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddProgramPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramPageRoutingModule", function() { return AddProgramPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_program_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-program.page */ "./src/app/add-program/add-program.page.ts");




const routes = [
    {
        path: '',
        component: _add_program_page__WEBPACK_IMPORTED_MODULE_3__["AddProgramPage"]
    },
    {
        path: 'program-details/:programId',
        loadChildren: () => __webpack_require__.e(/*! import() | program-details-program-details-module */ "program-details-program-details-module").then(__webpack_require__.bind(null, /*! ./program-details/program-details.module */ "./src/app/add-program/program-details/program-details.module.ts")).then(m => m.ProgramDetailsPageModule)
    },
];
let AddProgramPageRoutingModule = class AddProgramPageRoutingModule {
};
AddProgramPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddProgramPageRoutingModule);



/***/ }),

/***/ "./src/app/add-program/add-program.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-program/add-program.module.ts ***!
  \***************************************************/
/*! exports provided: AddProgramPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramPageModule", function() { return AddProgramPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-program-routing.module */ "./src/app/add-program/add-program-routing.module.ts");
/* harmony import */ var _audio_player_program_audio_player_program_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audio-player-program/audio-player-program.component */ "./src/app/audio-player-program/audio-player-program.component.ts");
/* harmony import */ var _add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../add-program/program-nutrition-detail-modal/program-nutrition-detail-modal.component */ "./src/app/add-program/program-nutrition-detail-modal/program-nutrition-detail-modal.component.ts");
/* harmony import */ var _add_program_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-program.page */ "./src/app/add-program/add-program.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var _profile_components_modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../profile/components.modules */ "./src/app/profile/components.modules.ts");
/* harmony import */ var _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../add-program/calender-month-week-time/calender-month-week-time.component */ "./src/app/add-program/calender-month-week-time/calender-month-week-time.component.ts");
/* harmony import */ var src_app_modalContent_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modalContent/terms-condition/terms-condition.component */ "./src/app/modalContent/terms-condition/terms-condition.component.ts");








// import { ViewVideoDetailComponent } from './../add-program/view-video-detail/view-video-detail.component';





let AddProgramPageModule = class AddProgramPageModule {
};
AddProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProgramPageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__["NgCalendarModule"],
            _profile_components_modules__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"]
        ],
        declarations: [_add_program_page__WEBPACK_IMPORTED_MODULE_8__["AddProgramPage"],
            _audio_player_program_audio_player_program_component__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerProgramComponent"], _add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"], src_app_modalContent_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_12__["TermsConditionComponent"]],
        entryComponents: [_add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"], src_app_modalContent_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_12__["TermsConditionComponent"]]
    })
], AddProgramPageModule);



/***/ }),

/***/ "./src/app/add-program/add-program.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-program/add-program.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".note {\n  color: #000;\n}\n\n.users-list {\n  display: flex;\n  width: auto;\n}\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: auto;\n}\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list ion-item img:first-child {\n  margin-left: 0;\n}\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px;\n}\n\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.calendar-header ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  text-align: center;\n}\n\n.calendar-header ion-item:nth-child(2) {\n  display: contents;\n}\n\n.table > tbody > tr > td.calendar-hour-column {\n  width: 55px;\n}\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99;\n}\n\n.audio-list {\n  padding: 0 15px !important;\n}\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important;\n}\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit;\n}\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none;\n}\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF;\n}\n\n.ios.main_content {\n  padding-top: 0;\n}\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px;\n}\n\nion-segment-button {\n  position: relative;\n}\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%;\n}\n\n.video-skeleton {\n  height: 200px;\n}\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px;\n}\n\n.swiper-slide {\n  background: #fbfbfb;\n}\n\nion-slides {\n  height: 190px;\n}\n\n.top-header {\n  position: fixed;\n}\n\n.slides-container {\n  height: 78% !important;\n}\n\n.dayview-allday-label, .calendar-hour-column {\n  width: 45px !important;\n}\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4;\n}\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0;\n}\n\n.programPreview ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n  font-size: 0.9rem;\n}\n\n.programPreview ion-item ion-list-header {\n  padding-left: 0;\n}\n\n.programPreview ion-item ion-input {\n  min-width: 50px;\n  border-bottom: 1px solid #d1d1d1;\n  padding: 15px 3px 8px;\n}\n\n.programPreview ion-label {\n  color: #000;\n}\n\n.programPreview .radioPreview {\n  display: flex;\n}\n\n.programPreview .radioPreview ion-item {\n  --background: transparent;\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  font-size: 0.9rem;\n  margin-right: 30px;\n}\n\n.programPreview .radioPreview ion-item ion-radio {\n  margin-right: 10px;\n}\n\n.programPreview .sticky-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n}\n\n.programPreview .sticky-footer ion-button {\n  width: 100%;\n  margin: 0;\n  --border-radius: 0;\n  height: 100%;\n  --background: #27a69a;\n}\n\n.sel-parti-open-item {\n  max-width: 160px;\n}\n\n.sel-parti-open-item .sc-ion-label-md-h {\n  white-space: unset;\n}\n\n.prog_btn_list .btn {\n  --padding-start: 2.1em;\n  --padding-end: 2.1em;\n  font-size: 14px;\n  text-transform: uppercase;\n  height: 40px;\n  letter-spacing: 1px;\n}\n\n.calend_arrow {\n  color: #69bdad !important;\n}\n\n.prog_btn_list ion-item {\n  display: grid;\n  justify-content: center;\n}\n\n.date_items {\n  --ion-item-background: none !important;\n  color: #000;\n}\n\n.date_items ion-icon {\n  --ion-item-background: transparent;\n  color: #000;\n  margin-top: 5px;\n}\n\n.date_items h6 {\n  margin-right: 5px;\n}\n\n.top-heading ion-item {\n  --inner-border-width: 0;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n\n.nutriimages-list ion-label {\n  font-size: 0.75rem;\n  margin: 3px 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: block;\n  color: #444;\n}\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09);\n}\n\nion-slides {\n  background: transparent;\n  padding: 0 5px;\n}\n\n.nutriimages-list ion-segment-button {\n  width: 32%;\n  border: none;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f7f7f7;\n  border-radius: 4px;\n}\n\n.nutriimages-list ion-segment-button:first-child {\n  margin-left: 0;\n}\n\n.nutriimages-list ion-segment-button img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: 100%;\n}\n\n.nutriimages-list .segment-button-checked {\n  background: #eaeaea;\n  --color-checked: transparent;\n}\n\n.nutriimages-list .thumb-checkbox {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.nutriimages-list .thumb-checkbox ion-checkbox {\n  opacity: 0;\n  width: 100%;\n  height: 78px;\n  padding: 0 0;\n}\n\n.checkboxThumb::after {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked {\n  opacity: 1;\n  --background-checked:transparent;\n  --border-color-checked:transparent;\n  --size:0;\n  --checkmark-color:transparent;\n}\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked:after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background: #26a69a;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.item-list ion-list-header ion-icon {\n  font-size: 1.15rem;\n}\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n}\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px;\n}\n\n.users-list img:first-child {\n  margin-left: 0;\n}\n\n.users-list ion-label {\n  width: 100px;\n}\n\nion-list {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\nion-list ion-item {\n  font-size: 0.875rem;\n  --padding-end: 16px;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  --inner-padding-end: 0;\n  --min-height: 44px;\n  --border-color: whitesmoke;\n}\n\nion-list .descriptionItem ion-item {\n  padding: 0;\n}\n\n.green-alram-icon {\n  width: 12% !important;\n  position: center !important;\n}\n\n.monthview-selected {\n  background-color: #3a87ad !important;\n}\n\n.calender_green_bottom .ion-margin-start {\n  margin-left: 7px;\n  position: relative;\n  top: -10px;\n}\n\n.green-alram-icon {\n  position: absolute;\n  top: 350px;\n  right: 20px;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  padding: 5px 10px;\n}\n\n.event-detail-container ion-item {\n  padding-right: 2rem;\n}\n\n.showDateTime .datetime-text {\n  display: none !important;\n}\n\n.showDateTime {\n  padding: 0 10px;\n  text-align: center;\n}\n\nion-datetime#dat {\n  padding: 0 10px;\n  position: relative;\n  left: -12px;\n}\n\n.item .sc-ion-label-md-h {\n  overflow: visible !important;\n}\n\n.counter-box[_ngcontent-pyj-c13] {\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  height: 100px;\n}\n\np.text-green.text-center {\n  position: relative;\n  top: 35px;\n  display: inline-flex;\n  width: 140px;\n  left: -15px;\n}\n\n.program__card {\n  position: relative;\n  width: 100%;\n  margin-bottom: 32px;\n}\n\nion-icon.ion-margin-start.md.hydrated {\n  top: 0px;\n  width: 1rem;\n  height: 1rem;\n}\n\nion-icon.ion-margin-start.ios.hydrated {\n  top: 0px;\n}\n\nion-icon.live-icon.ios.hydrated, ion-icon.live-icon.md.hydrated {\n  font-size: 34px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\nion-title.ios.title-ios.title-default.hydrated {\n  padding: 0 20px;\n}\n\n.list-ios {\n  margin-bottom: 0px;\n}\n\n.live-ion-list-header {\n  justify-content: initial;\n}\n\n.live-ion-list-header .divider {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.live-ion-list-header .calender_green_bottom {\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.live-ion-list-header .calender_green_bottom ion-icon {\n  font-size: 1.7rem;\n}\n\n.live-event-addition {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background: #cecece;\n  padding: 15px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\n\n.live-event-addition h5 {\n  color: #121212;\n  margin: 0;\n  font-weight: 500;\n}\n\n.live-event-box {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.live-event-box .live-event-head {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #121212;\n}\n\n.live-event-box .live-event-info {\n  padding: 12px 20px 2px 20px;\n  border: 1px solid #cecece;\n  border-radius: 12px;\n  max-height: 100px;\n  overflow-y: scroll;\n}\n\n.live-event-box .live-event-info .live-event-details {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.live-event-box .live-event-info .live-event-details p {\n  font-size: 16px;\n  color: #121212;\n}\n\n.live-event-box .live-event-info .live-event-details .small-divider {\n  width: 1.5px;\n  height: 20px;\n  background-color: #555;\n  margin-right: 14px;\n  margin-left: 14px;\n}\n\n.live-event-icon {\n  font-size: 28px;\n  min-width: 80px;\n  color: #555;\n  margin-right: 20px;\n}\n\n.users-list {\n  flex: 1;\n}\n\n.closeIcon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -50%);\n  width: 1.2rem;\n  height: 1.2rem;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.226);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.close-icon {\n  width: 1rem;\n  height: 1rem;\n  margin-left: 0;\n  color: #26a69a;\n}\n\n.fixed {\n  position: fixed !important;\n  z-index: 9 !important;\n  background-color: #fff !important;\n}\n\n.margin-top-md {\n  margin-top: 10%;\n}\n\nform.fixed.ng-untouched.ng-pristine.ng-valid {\n  position: fixed;\n  z-index: 9;\n}\n\n.live-icon {\n  color: transparent;\n}\n\n.toggleDiv {\n  margin-bottom: 2px;\n  width: 50px;\n}\n\n.live::after {\n  content: \"Go Live\";\n  color: #26a69a;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 6px 5px;\n  background: #fff;\n  border-radius: 3px;\n  margin-bottom: 2px;\n}\n\n.title {\n  font-size: 13px;\n}\n\n.title span {\n  font-size: 11px;\n  display: block;\n  color: #E7E7E7;\n  margin-bottom: 3px;\n}\n\n.live.active::after {\n  content: \"Live\";\n  padding: 6px 7px;\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: #fff;\n  text-transform: uppercase;\n  background: #FF3A3A;\n}\n\nion-icon.active {\n  display: block;\n  color: #ff1111;\n}\n\n.width-full {\n  width: 100% !important;\n}\n\n.divider {\n  width: 1.5px;\n  height: 35px;\n  background: #fff;\n}\n\n::ng-deep table {\n  border: 0 !important;\n}\n\n::ng-deep tr {\n  display: flex !important;\n  justify-content: space-around;\n}\n\n::ng-deep th {\n  flex: 1;\n}\n\n::ng-deep th, ::ng-deep td {\n  border: 0 !important;\n}\n\n::ng-deep td {\n  display: inline-block;\n  margin: 0.2rem !important;\n  padding: 0 !important;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n::ng-deep td.monthview-secondary-with-event.text-muted {\n  border-radius: 50% !important;\n}\n\n::ng-deep td.monthview-selected {\n  border-radius: 50% !important;\n}\n\n::ng-deep span.event-detail {\n  overflow: hidden !important;\n  max-width: 50vw;\n}\n\n::ng-deep span.monthview-eventdetail-timecolumn {\n  min-width: 100px !important;\n  width: 100px !important;\n}\n\n::ng-deep .item-native {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n}\n\n::ng-deep .event-detail-container ion-item {\n  --padding-end: 40px !important;\n}\n\nion-list-header.ion-padding-horizontal.green.text-white.md.hydrated {\n  padding-bottom: 12px;\n  padding-top: 12px;\n}\n\nion-list.width-full.md.list-md.hydrated {\n  border-radius: 4px;\n}\n\nion-list-header.ion-padding-horizontal.green.text-white.ios.hydrated {\n  padding-bottom: 12px;\n  padding-top: 12px;\n  text-transform: initial;\n  letter-spacing: 0px;\n}\n\nion-list.width-full.ios.list-ios.hydrated {\n  border-radius: 4px;\n}\n\n::ng-deep table {\n  border: 0 !important;\n}\n\n::ng-deep tr {\n  display: flex !important;\n  justify-content: space-around;\n}\n\n::ng-deep th {\n  flex: 1;\n}\n\n::ng-deep th, ::ng-deep td {\n  border: 0 !important;\n}\n\n::ng-deep td {\n  display: inline-block;\n  margin: 0.2rem !important;\n  padding: 0 !important;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n::ng-deep td.monthview-secondary-with-event.text-muted {\n  border-radius: 50% !important;\n}\n\n::ng-deep td.monthview-selected {\n  border-radius: 50% !important;\n}\n\n::ng-deep span.event-detail {\n  overflow: hidden !important;\n  max-width: 50vw;\n}\n\n::ng-deep span.monthview-eventdetail-timecolumn {\n  min-width: 100px !important;\n  width: 100px !important;\n}\n\n::ng-deep .item-native {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n}\n\n::ng-deep .event-detail-container ion-item {\n  --padding-end: 40px !important;\n  --min-height: 25px !important;\n}\n\n::ng-deep .monthview-container {\n  height: auto !important;\n}\n\n::ng-deep .calendar-hour-column {\n  display: none !important;\n}\n\n::ng-deep .weekview-container {\n  height: auto !important;\n}\n\n::ng-deep .weekview-allday-table {\n  display: none !important;\n}\n\n::ng-deep ion-slides.slides-container.md.slides-md.swiper-container.hydrated.swiper-container-initialized.swiper-container-horizontal {\n  background: #27A69A !important;\n}\n\n::ng-deep td, ::ng-deep th {\n  border: 0 !important;\n}\n\n::ng-deep .table-bordered {\n  border: 0 !important;\n  border-bottom: 1px solid #cecece !important;\n}\n\n::ng-deep .slides-container {\n  color: #fff !important;\n  background: #27A69A !important;\n}\n\n::ng-deep .list-ios {\n  margin-bottom: 0 !important;\n}\n\n::ng-deep .table > thead > tr > th.weekview-header {\n  font-size: 13px !important;\n  font-weight: 500;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n::ng-deep ion-title.ios.title-ios.title-default.hydrated {\n  padding-inline: 0px;\n}\n\n::ng-deep th.weekview-header.text-center {\n  background-color: #fff;\n  color: #121212;\n}\n\n::ng-deep th.weekview-header.text-center.weekview-selected {\n  background-color: #27a69a;\n  color: #fff;\n}\n\n::ng-deep table.table.table-bordered.table-fixed.weekview-header thead {\n  background-color: #fff;\n}\n\n.toggle-cal {\n  color: #121212;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2dyYW0vRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcYWRkLXByb2dyYW1cXGFkZC1wcm9ncmFtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXByb2dyYW0vYWRkLXByb2dyYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sV0FBQTtBQ0VOOztBRERBO0VBQVksYUFBQTtFQUFjLFdBQUE7QUNNMUI7O0FETEE7RUFBcUIsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLFdBQUE7QUNXdEQ7O0FEVkE7RUFBeUIsV0FBQTtFQUFZLFlBQUE7RUFBYSxvQkFBQTtLQUFBLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW1CLGtCQUFBO0FDa0J2Rjs7QURqQkE7RUFBcUMsY0FBQTtBQ3FCckM7O0FEcEJBO0VBQVUsV0FBQTtFQUFXLFlBQUE7RUFBWSxlQUFBO0VBQWdCLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLGFBQUE7RUFBYSx1QkFBQTtFQUF1QixtQkFBQTtFQUFtQixTQUFBO0VBQVUsa0JBQUE7QUNrQ3pLOztBRGhDQTtFQUFpQixhQUFBO0VBQWMsOEJBQUE7RUFBK0IsbUJBQUE7QUNzQzlEOztBRHJDQTtFQUEwQixrQkFBQTtFQUFtQixzQkFBQTtFQUF1QixrQkFBQTtBQzJDcEU7O0FEMUNBO0VBQXVDLGlCQUFBO0FDOEN2Qzs7QUQ3Q0E7RUFBOEMsV0FBQTtBQ2lEOUM7O0FEL0NBO0VBQVUsa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFVBQUE7RUFBVyxXQUFBO0FDc0RwRDs7QURyREE7RUFBWSwwQkFBQTtBQ3lEWjs7QUR4REE7RUFBcUIseUJBQUE7RUFBMEIsc0JBQUE7RUFBdUIsc0JBQUE7QUM4RHRFOztBRDdEQTtFQUErQixTQUFBO0VBQVUsa0JBQUE7RUFBbUIsaUJBQUE7QUNtRTVEOztBRGxFQTtFQUFvQyxXQUFBO0VBQVksWUFBQTtFQUFhLHdDQUFBO0VBQXlDLGtCQUFBO0FDeUV0Rzs7QUR4RUE7RUFBNkMsV0FBQTtBQzRFN0M7O0FEekVBO0VBQWtCLGNBQUE7QUM2RWxCOztBRDFFQTtFQUFzQyxZQUFBO0FDOEV0Qzs7QUQ3RUE7RUFBbUIsa0JBQUE7QUNpRm5COztBRGhGQTtFQUFxQyxrQkFBQTtFQUFtQixZQUFBO0VBQWEsU0FBQTtFQUFVLFVBQUE7QUN1Ri9FOztBRHRGQTtFQUFnQixhQUFBO0FDMEZoQjs7QUR6RkE7RUFBNEQsU0FBQTtFQUFVLFlBQUE7QUM4RnRFOztBRDdGQTtFQUFjLG1CQUFBO0FDaUdkOztBRGhHQTtFQUFXLGFBQUE7QUNvR1g7O0FEbkdBO0VBQVksZUFBQTtBQ3VHWjs7QUR0R0E7RUFDSSxzQkFBQTtBQ3lHSjs7QUR0R0E7RUFDSSxzQkFBQTtBQ3lHSjs7QURyR0M7RUFBVSxjQUFBO0FDeUdYOztBRHhHQztFQUFhLGFBQUE7QUMyR2Q7O0FEeEdJO0VBQVMsa0JBQUE7RUFBbUIsc0JBQUE7RUFBd0IsbUJBQUE7RUFBd0IsaUJBQUE7QUMrR2hGOztBRDlHUTtFQUFnQixlQUFBO0FDaUh4Qjs7QURoSFE7RUFBVSxlQUFBO0VBQWdCLGdDQUFBO0VBQWlDLHFCQUFBO0FDcUhuRTs7QURuSEk7RUFBVSxXQUFBO0FDc0hkOztBRHJISTtFQUFjLGFBQUE7QUN3SGxCOztBRHZIUTtFQUFTLHlCQUFBO0VBQ0wsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQXVCLGlCQUFBO0VBQW1CLGtCQUFBO0FDNEh0RDs7QUQzSFk7RUFBVSxrQkFBQTtBQzhIdEI7O0FEM0hJO0VBQWUsZUFBQTtFQUFnQixTQUFBO0VBQVUsT0FBQTtFQUFRLGFBQUE7QUNpSXJEOztBRGhJUTtFQUFXLFdBQUE7RUFBWSxTQUFBO0VBQVMsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLHFCQUFBO0FDdUl4RTs7QURwSUE7RUFDSSxnQkFBQTtBQ3VJSjs7QURySUE7RUFDSSxrQkFBQTtBQ3dJSjs7QUR0SUE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDeUlKOztBRHRJQTtFQUNJLHlCQUFBO0FDeUlKOztBRHRJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ3lJSjs7QUR2SUE7RUFDSSxzQ0FBQTtFQUNBLFdBQUE7QUMwSUo7O0FEeElBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzJJSjs7QUR6SUE7RUFDSSxpQkFBQTtBQzRJSjs7QUQxSUE7RUFDSSx1QkFBQTtBQzZJSjs7QUQzSUE7RUFDSSx1QkFBQTtBQzhJSjs7QUQ1SUE7RUFBNEIsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLDBCQUFBO0VBQTJCLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLGNBQUE7RUFBZSxXQUFBO0FDc0oxSTs7QURySkE7RUFBWSwrQ0FBQTtBQ3lKWjs7QUR4SkE7RUFBVyx1QkFBQTtFQUF3QixjQUFBO0FDNkpuQzs7QUQ1SkE7RUFBcUMsVUFBQTtFQUFXLFlBQUE7RUFBYSxVQUFBO0VBQVcsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBcUIsYUFBQTtFQUFjLGFBQUE7RUFBYyx1QkFBQTtFQUF3QixtQkFBQTtFQUFvQixtQkFBQTtFQUFvQixrQkFBQTtBQzBLNU07O0FEektBO0VBQWlELGNBQUE7QUM2S2pEOztBRDVLQTtFQUF5QyxzQkFBQTtLQUFBLG1CQUFBO0VBQW9CLGVBQUE7QUNpTDdEOztBRGhMQTtFQUEwQyxtQkFBQTtFQUFvQiw0QkFBQTtBQ3FMOUQ7O0FEcExBO0VBQWtDLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxZQUFBO0FDMExqRTs7QUR6TEE7RUFBK0MsVUFBQTtFQUFVLFdBQUE7RUFBVyxZQUFBO0VBQVksWUFBQTtBQ2dNaEY7O0FEOUxBO0VBQXNCLFdBQUE7RUFBWSxXQUFBO0VBQVksWUFBQTtFQUFhLHlCQUFBO0VBQTBCLGNBQUE7RUFBZSxrQkFBQTtFQUFtQixrQkFBQTtFQUFtQixRQUFBO0VBQVMsU0FBQTtBQzBNbko7O0FEek1BO0VBQWdFLFVBQUE7RUFBVSxnQ0FBQTtFQUFpQyxrQ0FBQTtFQUFtQyxRQUFBO0VBQVMsNkJBQUE7QUNpTnZKOztBRGhOQTtFQUFzRSxXQUFBO0VBQVcsV0FBQTtFQUFXLFlBQUE7RUFBWSxtQkFBQTtFQUFtQixjQUFBO0VBQWMsa0JBQUE7RUFBa0Isa0JBQUE7RUFBa0IsUUFBQTtFQUFRLFNBQUE7QUM0TnJMOztBRDNOQTtFQUFvQyxrQkFBQTtBQytOcEM7O0FEN05BO0VBQVksa0JBQUE7RUFBbUIsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLGFBQUE7QUNvT2pFOztBRGpPQTtFQUFnQixXQUFBO0VBQVksWUFBQTtFQUFhLG9CQUFBO0tBQUEsaUJBQUE7RUFBa0Isa0JBQUE7RUFBbUIsa0JBQUE7QUN5TzlFOztBRHhPQTtFQUE0QixjQUFBO0FDNE81Qjs7QUQzT0E7RUFBc0IsWUFBQTtBQytPdEI7O0FEN09BO0VBQVMseUJBQUE7RUFBMEIsNEJBQUE7QUNrUG5DOztBRGpQSTtFQUFTLG1CQUFBO0VBQW9CLG1CQUFBO0VBQW9CLHNCQUFBO1VBQUEscUJBQUE7RUFBc0Isc0JBQUE7RUFBdUIsa0JBQUE7RUFBbUIsMEJBQUE7QUN5UHJIOztBRHZQUTtFQUFTLFVBQUE7QUMwUGpCOztBRHZQQTtFQUFrQixxQkFBQTtFQUF1QiwyQkFBQTtBQzRQekM7O0FEM1BBO0VBQW9CLG9DQUFBO0FDK1BwQjs7QUQ5UEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2lRSjs7QUQvUEE7RUFJSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFBQSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsaUJBQUE7QUMrUEo7O0FEN1BBO0VBQ0ksbUJBQUE7QUNnUUo7O0FEOVBBO0VBQ0ksd0JBQUE7QUNpUUo7O0FEL1BBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDa1FKOztBRGhRQTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNrUUo7O0FEaFFBO0VBQ0ksNEJBQUE7QUNtUUo7O0FEalFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDb1FKOztBRGxRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNxUUo7O0FEblFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNzUUo7O0FEalFBO0VBQ0ksUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDb1FKOztBRC9QQTtFQUNJLFFBQUE7QUNrUUo7O0FEL1BBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNrUUo7O0FEaFFBO0VBQ0ksZUFBQTtBQ21RSjs7QURqUUE7RUFDSSxrQkFBQTtBQ29RSjs7QURsUUE7RUFDSSx3QkFBQTtBQ3FRSjs7QURwUUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDc1FSOztBRHBRSTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ3NRUjs7QURyUVE7RUFDSSxpQkFBQTtBQ3VRWjs7QURuUUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3NRSjs7QURyUUk7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDdVFSOztBRHBRQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ3VRSjs7QUR0UUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDd1FSOztBRHRRSTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN3UVI7O0FEdlFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUN5UVo7O0FEeFFZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUMwUWhCOztBRHhRWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDMFFoQjs7QURyUUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3dRSjs7QUR0UUE7RUFDSSxPQUFBO0FDeVFKOztBRHZRQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMwUUo7O0FEeFFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQzJRSjs7QUR6UUE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUM0UUo7O0FEMVFBO0VBQ0ksZUFBQTtBQzZRSjs7QUQxUUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQzZRSjs7QUQzUUE7RUFFSSxrQkFBQTtBQzZRSjs7QUQzUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUM4UUo7O0FENVFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUM4UUo7O0FENVFBO0VBQ0ksZUFBQTtBQytRSjs7QUQ3UUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2dSSjs7QUQ5UUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ2lSSjs7QUQ5UUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ2lSSjs7QUQvUUE7RUFDSSxzQkFBQTtBQ2tSSjs7QURoUkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDbVJKOztBRDVRSTtFQUNJLG9CQUFBO0FDK1FSOztBRDdRSTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUMrUVI7O0FEN1FJO0VBQ0ksT0FBQTtBQytRUjs7QUQ3UUk7RUFDSSxvQkFBQTtBQytRUjs7QUQ3UUk7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDK1FSOztBRDVRSTtFQUNJLDZCQUFBO0FDOFFSOztBRDVRSTtFQUNJLDZCQUFBO0FDOFFSOztBRDVRSTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtBQzhRUjs7QUQ1UUk7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FDOFFSOztBRDVRSTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7QUM4UVI7O0FENVFJO0VBQ0ksOEJBQUE7QUM4UVI7O0FEeFFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQzJRSjs7QUR6UUE7RUFDSSxrQkFBQTtBQzRRSjs7QUR6UUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzRRSjs7QUQxUUE7RUFDSSxrQkFBQTtBQzZRSjs7QUQxUUk7RUFDSSxvQkFBQTtBQzZRUjs7QUQzUUk7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FDNlFSOztBRDNRSTtFQUNJLE9BQUE7QUM2UVI7O0FEM1FJO0VBQ0ksb0JBQUE7QUM2UVI7O0FEM1FJO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzZRUjs7QUQxUUk7RUFDSSw2QkFBQTtBQzRRUjs7QUQxUUk7RUFDSSw2QkFBQTtBQzRRUjs7QUQxUUk7RUFDSSwyQkFBQTtFQUNBLGVBQUE7QUM0UVI7O0FEMVFJO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBQzRRUjs7QUQxUUk7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDNFFSOztBRHRRSTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QUN3UVI7O0FEclFJO0VBQ0ksdUJBQUE7QUN1UVI7O0FEclFJO0VBQ0ksd0JBQUE7QUN1UVI7O0FEclFNO0VBQ0ksdUJBQUE7QUN1UVY7O0FEclFRO0VBQ0ksd0JBQUE7QUN1UVo7O0FEclFRO0VBQ0UsOEJBQUE7QUN1UVY7O0FEclFRO0VBQ0Usb0JBQUE7QUN1UVY7O0FEclFRO0VBQ0Usb0JBQUE7RUFDQSwyQ0FBQTtBQ3VRVjs7QURyUU07RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDdVFSOztBRHJRTTtFQUNFLDJCQUFBO0FDdVFSOztBRHJRTTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDdVFSOztBRHJRTTtFQUNFLG1CQUFBO0FDdVFSOztBRHJRTTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ3VRVjs7QURyUU07RUFFRSx5QkFBQTtFQUNBLFdBQUE7QUNzUVI7O0FEcFFNO0VBQ0Usc0JBQUE7QUNzUVI7O0FEblFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUNzUUoiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZ3JhbS9hZGQtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZXtjb2xvcjogIzAwMDt9XHJcbi51c2Vycy1saXN0e2Rpc3BsYXk6IGZsZXg7d2lkdGg6IGF1dG87O31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW17LS1taW4taGVpZ2h0OiBhdXRvO2Rpc3BsYXk6IGZsZXg7d2lkdGg6IGF1dG87fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWd7d2lkdGg6IDQycHg7aGVpZ2h0OiA0MnB4O29iamVjdC1maXQ6IGNvdmVyO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWc6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udmlldy1hbGx7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDttYXgtd2lkdGg6IDQycHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZjFmMGYwO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46IDA7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuXHJcbi5jYWxlbmRhci1oZWFkZXJ7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW17LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbTpudGgtY2hpbGQoMil7ZGlzcGxheTogY29udGVudHM7fVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQuY2FsZW5kYXItaG91ci1jb2x1bW57d2lkdGg6IDU1cHg7fVxyXG5cclxuaW9uLXJhbmdle3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTt0b3A6IC0zMHB4O3otaW5kZXg6IDk5O31cclxuLmF1ZGlvLWxpc3R7cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbXstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O2NvbG9yOiAjRkZGICFpbXBvcnRhbnQ7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHttYXJnaW46IDA7bWFyZ2luLXJpZ2h0OiAyMHB4O292ZXJmbG93OiBpbmhlcml0O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b257d2lkdGg6IDI1cHg7aGVpZ2h0OiAyNXB4Oy0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3gtc2hhZG93OiBub25lO31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWZhYi1idXR0b24gaW9uLWljb257Y29sb3I6ICNGRkY7fVxyXG5cclxuLy8gaW9zIGNzc1xyXG4uaW9zLm1haW5fY29udGVudHtwYWRkaW5nLXRvcDogMDt9XHJcblxyXG4vLyBpb24tc2tlbGV0b24tdGV4dCBjc3NcclxuLm11c2ljbGlzdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dHtoZWlnaHQ6IDMwcHg7fVxyXG5pb24tc2VnbWVudC1idXR0b257cG9zaXRpb246IHJlbGF0aXZlO31cclxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1za2VsZXRvbi10ZXh0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDEwMCU7bWFyZ2luOiAwO3dpZHRoOiA5NSU7fVxyXG4udmlkZW8tc2tlbGV0b257aGVpZ2h0OiAyMDBweDt9XHJcbnAgaW9uLXNrZWxldG9uLXRleHQsIC5yYWRpby1saXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e21hcmdpbjogMDtoZWlnaHQ6IDIwcHg7fVxyXG4uc3dpcGVyLXNsaWRle2JhY2tncm91bmQ6ICNmYmZiZmI7fVxyXG5pb24tc2xpZGVze2hlaWdodDogMTkwcHg7fVxyXG4udG9wLWhlYWRlcntwb3NpdGlvbjogZml4ZWQ7fVxyXG4uc2xpZGVzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDc4JSAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuLmRheXZpZXctYWxsZGF5LWxhYmVsLCAuY2FsZW5kYXItaG91ci1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbmlvbi1pdGVtLmZsb2F0aW5nSXRlbXtcclxuXHRpb24tbGFiZWx7Y29sb3I6I2E1YTRhNH1cclxuXHRpb24tdGV4dGFyZWF7bWFyZ2luLXRvcDowfVxyXG59XHJcbi5wcm9ncmFtUHJldmlld3tcclxuICAgIGlvbi1pdGVtey0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwOyBtYXJnaW4tYm90dG9tOiAxNXB4OyAgICBmb250LXNpemU6IDAuOTByZW07XHJcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVye3BhZGRpbmctbGVmdDogMDt9XHJcbiAgICAgICAgaW9uLWlucHV0e21pbi13aWR0aDogNTBweDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDFkMTtwYWRkaW5nOjE1cHggM3B4IDhweH1cclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtjb2xvcjojMDAwfVxyXG4gICAgLnJhZGlvUHJldmlld3tkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7Zm9udC1zaXplOiAwLjkwcmVtO21hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgaW9uLXJhZGlve21hcmdpbi1yaWdodDogMTBweDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0aWNreS1mb290ZXJ7cG9zaXRpb246IGZpeGVkO2JvdHRvbTogMDtsZWZ0OiAwO2Rpc3BsYXk6ZmxleDtcclxuICAgICAgICBpb24tYnV0dG9ue3dpZHRoOiAxMDAlO21hcmdpbjowOy0tYm9yZGVyLXJhZGl1czogMDtoZWlnaHQ6IDEwMCU7LS1iYWNrZ3JvdW5kOiAjMjdhNjlhO31cclxuICAgIH1cclxufVxyXG4uc2VsLXBhcnRpLW9wZW4taXRlbXtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbn1cclxuLnNlbC1wYXJ0aS1vcGVuLWl0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxufVxyXG4ucHJvZ19idG5fbGlzdCAuYnRue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyLjFlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIuMWVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG59XHJcbi5jYWxlbmRfYXJyb3d7XHJcbiAgICBjb2xvcjogIzY5YmRhZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZ19idG5fbGlzdCBpb24taXRlbXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZGF0ZV9pdGVtcyB7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5kYXRlX2l0ZW1zIGlvbi1pY29uIHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZGF0ZV9pdGVtcyBoNntcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi50b3AtaGVhZGluZyBpb24taXRlbXtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC43NXJlbTttYXJnaW46IDNweCAwO3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2xldHRlci1zcGFjaW5nOiAwO2ZvbnQtd2VpZ2h0OiA0MDA7ZGlzcGxheTogYmxvY2s7Y29sb3I6ICM0NDQ7fVxyXG4udmlkZW8tY2FyZHtib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTt9XHJcbmlvbi1zbGlkZXN7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7cGFkZGluZzogMCA1cHg7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tc2VnbWVudC1idXR0b257d2lkdGg6IDMyJTtib3JkZXI6IG5vbmU7cGFkZGluZzogMDstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDsgICAgbWFyZ2luOiAwIDNweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7YmFja2dyb3VuZDogI2Y3ZjdmNztib3JkZXItcmFkaXVzOiA0cHg7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tc2VnbWVudC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tc2VnbWVudC1idXR0b24gaW1ne29iamVjdC1maXQ6IGNvbnRhaW47bWF4LXdpZHRoOiAxMDAlO31cclxuLm51dHJpaW1hZ2VzLWxpc3QgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7YmFja2dyb3VuZDogI2VhZWFlYTstLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O31cclxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94e3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3ggaW9uLWNoZWNrYm94e29wYWNpdHk6MDt3aWR0aDoxMDAlO2hlaWdodDo3OHB4O3BhZGRpbmc6MCAwfVxyXG4vLyAuY2hlY2tib3hUaHVtYntkaXNwbGF5OiBjb250ZW50czt9XHJcbi5jaGVja2JveFRodW1iOjphZnRlcntjb250ZW50OiAnJzt3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7Ym9yZGVyOiAycHggc29saWQgIzdkN2Q3ZDtkaXNwbGF5OiBibG9jaztib3JkZXItcmFkaXVzOiA1MCU7cG9zaXRpb246IGFic29sdXRlO3RvcDogNXB4O2xlZnQ6IDVweDt9XHJcbi5udXRyaWltYWdlcy1saXN0IC50aHVtYi1jaGVja2JveCBpb24tY2hlY2tib3guY2hlY2tib3gtY2hlY2tlZHtvcGFjaXR5OjE7LS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItY29sb3ItY2hlY2tlZDp0cmFuc3BhcmVudDstLXNpemU6MDstLWNoZWNrbWFyay1jb2xvcjp0cmFuc3BhcmVudH1cclxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94IGlvbi1jaGVja2JveC5jaGVja2JveC1jaGVja2VkOmFmdGVye2NvbnRlbnQ6Jyc7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtiYWNrZ3JvdW5kOiMyNmE2OWE7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NXB4O2xlZnQ6NXB4fVxyXG4uaXRlbS1saXN0IGlvbi1saXN0LWhlYWRlciBpb24taWNvbntmb250LXNpemU6IDEuMTVyZW07fVxyXG5cclxuLnVzZXJzLWxpc3R7LS1taW4taGVpZ2h0OiBhdXRvO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW46IDZweCAwOyBcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi51c2Vycy1saXN0IGltZ3t3aWR0aDogMzZweDtoZWlnaHQ6IDM2cHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcbi51c2Vycy1saXN0IGltZzpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi51c2Vycy1saXN0IGlvbi1sYWJlbHt3aWR0aDogMTAwcHg7fVxyXG5cclxuaW9uLWxpc3R7cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW17Zm9udC1zaXplOiAwLjg3NXJlbTstLXBhZGRpbmctZW5kOiAxNnB4O3BhZGRpbmctaW5saW5lLWVuZDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwOy0tbWluLWhlaWdodDogNDRweDstLWJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTt9XHJcbiAgICAuZGVzY3JpcHRpb25JdGVte1xyXG4gICAgICAgIGlvbi1pdGVte3BhZGRpbmc6IDA7fVxyXG4gICAgfVxyXG59XHJcbi5ncmVlbi1hbHJhbS1pY29ue3dpZHRoOiAxMiUgIWltcG9ydGFudDsgcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O31cclxuLm1vbnRodmlldy1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2E4N2FkICFpbXBvcnRhbnQ7fVxyXG4uY2FsZW5kZXJfZ3JlZW5fYm90dG9tIC5pb24tbWFyZ2luLXN0YXJ0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG59XHJcbi5ncmVlbi1hbHJhbS1pY29ue1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gdG9wOiAzMzBweDtcclxuICAgIC8vIHJpZ2h0OiAxNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5ldmVudC1kZXRhaWwtY29udGFpbmVyIGlvbi1pdGVte1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxufVxyXG4uc2hvd0RhdGVUaW1lIC5kYXRldGltZS10ZXh0e1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zaG93RGF0ZVRpbWUge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1kYXRldGltZSNkYXQge1xyXG4gICAgLy8gcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xMnB4O1xyXG59XHJcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jb3VudGVyLWJveFtfbmdjb250ZW50LXB5ai1jMTNdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbnAudGV4dC1ncmVlbi50ZXh0LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG59XHJcbi5wcm9ncmFtX19jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLy8gYW5kcm9pZCBDU1NcclxuXHJcbmlvbi1pY29uLmlvbi1tYXJnaW4tc3RhcnQubWQuaHlkcmF0ZWQge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxufVxyXG5cclxuLy8gSU9TIENTU1xyXG5cclxuaW9uLWljb24uaW9uLW1hcmdpbi1zdGFydC5pb3MuaHlkcmF0ZWQge1xyXG4gICAgdG9wOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1pY29uLmxpdmUtaWNvbi5pb3MuaHlkcmF0ZWQsIGlvbi1pY29uLmxpdmUtaWNvbi5tZC5oeWRyYXRlZCB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5pb24tdGl0bGUuaW9zLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4ubGlzdC1pb3N7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmxpdmUtaW9uLWxpc3QtaGVhZGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xyXG4gICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbGVuZGVyX2dyZWVuX2JvdHRvbXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5saXZlLWV2ZW50LWFkZGl0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgaDV7XHJcbiAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuLmxpdmUtZXZlbnQtYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLmxpdmUtZXZlbnQtaGVhZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIH1cclxuICAgIC5saXZlLWV2ZW50LWluZm97XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4IDJweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDsgXHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIC5saXZlLWV2ZW50LWRldGFpbHN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc21hbGwtZGl2aWRlcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5saXZlLWV2ZW50LWljb257XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4udXNlcnMtbGlzdHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLmNsb3NlSWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlLWljb257XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgY29sb3I6ICMyNmE2OWE7XHJcbn1cclxuLmZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW4tdG9wLW1ke1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG5mb3JtLmZpeGVkLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi5saXZlLWljb257XHJcbiAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udG9nZ2xlRGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5saXZlOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdHbyBMaXZlJztcclxuICAgIGNvbG9yOiAjMjZhNjlhO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDZweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnRpdGxlIHNwYW57XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjRTdFN0U3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5saXZlLmFjdGl2ZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnTGl2ZSc7XHJcbiAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6ICNGRjNBM0E7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlvbi1pY29uLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3LCAxNyk7XHJcbn1cclxuLndpZHRoLWZ1bGx7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXZpZGVyIHtcclxuICAgIHdpZHRoOiAxLjVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLy8gLmdyZWVuIGlvbi1pY29uLm1kLmh5ZHJhdGVkIHtcclxuLy8gICAgIHJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcbjo6bmctZGVlcCB7XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHRye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgIHRoe1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICB0aCwgdGR7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0ZHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDM3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICB0ZC5tb250aHZpZXctc2Vjb25kYXJ5LXdpdGgtZXZlbnQudGV4dC1tdXRlZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0ZC5tb250aHZpZXctc2VsZWN0ZWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5ldmVudC1kZXRhaWwge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICB9XHJcbiAgICBzcGFuLm1vbnRodmlldy1ldmVudGRldGFpbC10aW1lY29sdW1uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1uYXRpdmUge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciBpb24taXRlbXtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLy8gQU5EUk9JRCBDU1NcclxuaW9uLWxpc3QtaGVhZGVyLmlvbi1wYWRkaW5nLWhvcml6b250YWwuZ3JlZW4udGV4dC13aGl0ZS5tZC5oeWRyYXRlZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcbmlvbi1saXN0LndpZHRoLWZ1bGwubWQubGlzdC1tZC5oeWRyYXRlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLy8gSU9TIENTU1xyXG5pb24tbGlzdC1oZWFkZXIuaW9uLXBhZGRpbmctaG9yaXpvbnRhbC5ncmVlbi50ZXh0LXdoaXRlLmlvcy5oeWRyYXRlZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG59XHJcbmlvbi1saXN0LndpZHRoLWZ1bGwuaW9zLmxpc3QtaW9zLmh5ZHJhdGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgdGFibGV7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0cntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICB0aHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgdGgsIHRke1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMC4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGQubW9udGh2aWV3LXNlY29uZGFyeS13aXRoLWV2ZW50LnRleHQtbXV0ZWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGQubW9udGh2aWV3LXNlbGVjdGVkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHNwYW4uZXZlbnQtZGV0YWlsIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5tb250aHZpZXctZXZlbnRkZXRhaWwtdGltZWNvbHVtbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbmF0aXZlIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWRldGFpbC1jb250YWluZXJ7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWRldGFpbC1jb250YWluZXIgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubW9udGh2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FsZW5kYXItaG91ci1jb2x1bW57XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC53ZWVrdmlldy1jb250YWluZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAgIC53ZWVrdmlldy1hbGxkYXktdGFibGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1zbGlkZXMuc2xpZGVzLWNvbnRhaW5lci5tZC5zbGlkZXMtbWQuc3dpcGVyLWNvbnRhaW5lci5oeWRyYXRlZC5zd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjdBNjlBICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkLCB0aCB7XHJcbiAgICAgICAgICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgICAgICAgYm9yZGVyOiAwIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlcy1jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI3QTY5QSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWlvc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLndlZWt2aWV3LWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweCAgO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi10aXRsZS5pb3MudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQuaHlkcmF0ZWQge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgdGgud2Vla3ZpZXctaGVhZGVyLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIH1cclxuICAgICAgdGgud2Vla3ZpZXctaGVhZGVyLnRleHQtY2VudGVyLndlZWt2aWV3LXNlbGVjdGVkIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2E2OWE7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgdGFibGUudGFibGUudGFibGUtYm9yZGVyZWQudGFibGUtZml4ZWQud2Vla3ZpZXctaGVhZGVyIHRoZWFke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxufVxyXG4udG9nZ2xlLWNhbHtcclxuICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufSIsIi5ub3RlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi51c2Vycy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi51c2Vycy1saXN0IGlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnVzZXJzLWxpc3QgaW9uLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWc6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnZpZXctYWxsIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWF4LXdpZHRoOiA0MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uY2FsZW5kYXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FsZW5kYXItaGVhZGVyIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYWxlbmRhci1oZWFkZXIgaW9uLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XG4gIHdpZHRoOiA1NXB4O1xufVxuXG5pb24tcmFuZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IC0zMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmF1ZGlvLWxpc3Qge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5hdWRpby1saXN0IGlvbi1pdGVtIGlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaW9zLm1haW5fY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubXVzaWNsaXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi52aWRlby1za2VsZXRvbiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbnAgaW9uLXNrZWxldG9uLXRleHQsIC5yYWRpby1saXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cblxuLnRvcC1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5zbGlkZXMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3OCUgIWltcG9ydGFudDtcbn1cblxuLmRheXZpZXctYWxsZGF5LWxhYmVsLCAuY2FsZW5kYXItaG91ci1jb2x1bW4ge1xuICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbS5mbG9hdGluZ0l0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNhNWE0YTQ7XG59XG5pb24taXRlbS5mbG9hdGluZ0l0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnByb2dyYW1QcmV2aWV3IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5wcm9ncmFtUHJldmlldyBpb24taXRlbSBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucHJvZ3JhbVByZXZpZXcgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDFkMTtcbiAgcGFkZGluZzogMTVweCAzcHggOHB4O1xufVxuLnByb2dyYW1QcmV2aWV3IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnByb2dyYW1QcmV2aWV3IC5yYWRpb1ByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2dyYW1QcmV2aWV3IC5yYWRpb1ByZXZpZXcgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnByb2dyYW1QcmV2aWV3IC5yYWRpb1ByZXZpZXcgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnByb2dyYW1QcmV2aWV3IC5zdGlja3ktZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZ3JhbVByZXZpZXcgLnN0aWNreS1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XG59XG5cbi5zZWwtcGFydGktb3Blbi1pdGVtIHtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbn1cblxuLnNlbC1wYXJ0aS1vcGVuLWl0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0O1xufVxuXG4ucHJvZ19idG5fbGlzdCAuYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyLjFlbTtcbiAgLS1wYWRkaW5nLWVuZDogMi4xZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uY2FsZW5kX2Fycm93IHtcbiAgY29sb3I6ICM2OWJkYWQgIWltcG9ydGFudDtcbn1cblxuLnByb2dfYnRuX2xpc3QgaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRhdGVfaXRlbXMge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5kYXRlX2l0ZW1zIGlvbi1pY29uIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRhdGVfaXRlbXMgaDYge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRvcC1oZWFkaW5nIGlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG5cbi5udXRyaWltYWdlcy1saXN0IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luOiAzcHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi52aWRlby1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7XG59XG5cbmlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHdpZHRoOiAzMiU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBtYXJnaW46IDAgM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tc2VnbWVudC1idXR0b246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgaW9uLXNlZ21lbnQtYnV0dG9uIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5udXRyaWltYWdlcy1saXN0IC50aHVtYi1jaGVja2JveCBpb24tY2hlY2tib3gge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3OHB4O1xuICBwYWRkaW5nOiAwIDA7XG59XG5cbi5jaGVja2JveFRodW1iOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2Q7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94IGlvbi1jaGVja2JveC5jaGVja2JveC1jaGVja2VkIHtcbiAgb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6dHJhbnNwYXJlbnQ7XG4gIC0tc2l6ZTowO1xuICAtLWNoZWNrbWFyay1jb2xvcjp0cmFuc3BhcmVudDtcbn1cblxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94IGlvbi1jaGVja2JveC5jaGVja2JveC1jaGVja2VkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogIzI2YTY5YTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xufVxuXG4uaXRlbS1saXN0IGlvbi1saXN0LWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbn1cblxuLnVzZXJzLWxpc3Qge1xuICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNnB4IDA7XG59XG5cbi51c2Vycy1saXN0IGltZyB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLnVzZXJzLWxpc3QgaW1nOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi51c2Vycy1saXN0IGlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlc21va2U7XG59XG5pb24tbGlzdCAuZGVzY3JpcHRpb25JdGVtIGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmdyZWVuLWFscmFtLWljb24ge1xuICB3aWR0aDogMTIlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1vbnRodmlldy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTg3YWQgIWltcG9ydGFudDtcbn1cblxuLmNhbGVuZGVyX2dyZWVuX2JvdHRvbSAuaW9uLW1hcmdpbi1zdGFydCB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbn1cblxuLmdyZWVuLWFscmFtLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5ldmVudC1kZXRhaWwtY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuLnNob3dEYXRlVGltZSAuZGF0ZXRpbWUtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNob3dEYXRlVGltZSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUjZGF0IHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMnB4O1xufVxuXG4uaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG4uY291bnRlci1ib3hbX25nY29udGVudC1weWotYzEzXSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG5wLnRleHQtZ3JlZW4udGV4dC1jZW50ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxNDBweDtcbiAgbGVmdDogLTE1cHg7XG59XG5cbi5wcm9ncmFtX19jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuaW9uLWljb24uaW9uLW1hcmdpbi1zdGFydC5tZC5oeWRyYXRlZCB7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG5pb24taWNvbi5pb24tbWFyZ2luLXN0YXJ0Lmlvcy5oeWRyYXRlZCB7XG4gIHRvcDogMHB4O1xufVxuXG5pb24taWNvbi5saXZlLWljb24uaW9zLmh5ZHJhdGVkLCBpb24taWNvbi5saXZlLWljb24ubWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDM0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbmlvbi10aXRsZS5pb3MudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQuaHlkcmF0ZWQge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5saXN0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmxpdmUtaW9uLWxpc3QtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xufVxuLmxpdmUtaW9uLWxpc3QtaGVhZGVyIC5kaXZpZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5saXZlLWlvbi1saXN0LWhlYWRlciAuY2FsZW5kZXJfZ3JlZW5fYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGl2ZS1pb24tbGlzdC1oZWFkZXIgLmNhbGVuZGVyX2dyZWVuX2JvdHRvbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4ubGl2ZS1ldmVudC1hZGRpdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5saXZlLWV2ZW50LWFkZGl0aW9uIGg1IHtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxpdmUtZXZlbnQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGl2ZS1ldmVudC1ib3ggLmxpdmUtZXZlbnQtaGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMxMjEyMTI7XG59XG4ubGl2ZS1ldmVudC1ib3ggLmxpdmUtZXZlbnQtaW5mbyB7XG4gIHBhZGRpbmc6IDEycHggMjBweCAycHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5saXZlLWV2ZW50LWJveCAubGl2ZS1ldmVudC1pbmZvIC5saXZlLWV2ZW50LWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxpdmUtZXZlbnQtYm94IC5saXZlLWV2ZW50LWluZm8gLmxpdmUtZXZlbnQtZGV0YWlscyBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzEyMTIxMjtcbn1cbi5saXZlLWV2ZW50LWJveCAubGl2ZS1ldmVudC1pbmZvIC5saXZlLWV2ZW50LWRldGFpbHMgLnNtYWxsLWRpdmlkZXIge1xuICB3aWR0aDogMS41cHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cblxuLmxpdmUtZXZlbnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udXNlcnMtbGlzdCB7XG4gIGZsZXg6IDE7XG59XG5cbi5jbG9zZUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxLjJyZW07XG4gIGhlaWdodDogMS4ycmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIyNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBjb2xvcjogIzI2YTY5YTtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubWFyZ2luLXRvcC1tZCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuZm9ybS5maXhlZC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5saXZlLWljb24ge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50b2dnbGVEaXYge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkdvIExpdmVcIjtcbiAgY29sb3I6ICMyNmE2OWE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNnB4IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI0U3RTdFNztcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4ubGl2ZS5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJMaXZlXCI7XG4gIHBhZGRpbmc6IDZweCA3cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6ICNGRjNBM0E7XG59XG5cbmlvbi1pY29uLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmMTExMTtcbn1cblxuLndpZHRoLWZ1bGwge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uZGl2aWRlciB7XG4gIHdpZHRoOiAxLjVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG46Om5nLWRlZXAgdGFibGUge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCB0ciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG46Om5nLWRlZXAgdGgge1xuICBmbGV4OiAxO1xufVxuOjpuZy1kZWVwIHRoLCA6Om5nLWRlZXAgdGQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCB0ZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjJyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCB0ZC5tb250aHZpZXctc2Vjb25kYXJ5LXdpdGgtZXZlbnQudGV4dC1tdXRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRkLm1vbnRodmlldy1zZWxlY3RlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHNwYW4uZXZlbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDUwdnc7XG59XG46Om5nLWRlZXAgc3Bhbi5tb250aHZpZXctZXZlbnRkZXRhaWwtdGltZWNvbHVtbiB7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1lbmQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyLmlvbi1wYWRkaW5nLWhvcml6b250YWwuZ3JlZW4udGV4dC13aGl0ZS5tZC5oeWRyYXRlZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuaW9uLWxpc3Qud2lkdGgtZnVsbC5tZC5saXN0LW1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIuaW9uLXBhZGRpbmctaG9yaXpvbnRhbC5ncmVlbi50ZXh0LXdoaXRlLmlvcy5oeWRyYXRlZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5cbmlvbi1saXN0LndpZHRoLWZ1bGwuaW9zLmxpc3QtaW9zLmh5ZHJhdGVkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG46Om5nLWRlZXAgdGFibGUge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCB0ciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG46Om5nLWRlZXAgdGgge1xuICBmbGV4OiAxO1xufVxuOjpuZy1kZWVwIHRoLCA6Om5nLWRlZXAgdGQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCB0ZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjJyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCB0ZC5tb250aHZpZXctc2Vjb25kYXJ5LXdpdGgtZXZlbnQudGV4dC1tdXRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRkLm1vbnRodmlldy1zZWxlY3RlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHNwYW4uZXZlbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDUwdnc7XG59XG46Om5nLWRlZXAgc3Bhbi5tb250aHZpZXctZXZlbnRkZXRhaWwtdGltZWNvbHVtbiB7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1lbmQ6IDQwcHggIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1vbnRodmlldy1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2FsZW5kYXItaG91ci1jb2x1bW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLndlZWt2aWV3LWNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC53ZWVrdmlldy1hbGxkYXktdGFibGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgaW9uLXNsaWRlcy5zbGlkZXMtY29udGFpbmVyLm1kLnNsaWRlcy1tZC5zd2lwZXItY29udGFpbmVyLmh5ZHJhdGVkLnN3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsIHtcbiAgYmFja2dyb3VuZDogIzI3QTY5QSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRkLCA6Om5nLWRlZXAgdGgge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAudGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNlY2UgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuc2xpZGVzLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMyN0E2OUEgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubGlzdC1pb3Mge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLndlZWt2aWV3LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG46Om5nLWRlZXAgaW9uLXRpdGxlLmlvcy50aXRsZS1pb3MudGl0bGUtZGVmYXVsdC5oeWRyYXRlZCB7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG46Om5nLWRlZXAgdGgud2Vla3ZpZXctaGVhZGVyLnRleHQtY2VudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMxMjEyMTI7XG59XG46Om5nLWRlZXAgdGgud2Vla3ZpZXctaGVhZGVyLnRleHQtY2VudGVyLndlZWt2aWV3LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YTY5YTtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgdGFibGUudGFibGUudGFibGUtYm9yZGVyZWQudGFibGUtZml4ZWQud2Vla3ZpZXctaGVhZGVyIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnRvZ2dsZS1jYWwge1xuICBjb2xvcjogIzEyMTIxMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/add-program/add-program.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-program/add-program.page.ts ***!
  \*************************************************/
/*! exports provided: AddProgramPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramPage", function() { return AddProgramPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-modal/user-modal.component */ "./src/app/add-program/user-modal/user-modal.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/add-program/user-list/user-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _date_time_modal_date_time_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-time-modal/date-time-modal.component */ "./src/app/add-program/date-time-modal/date-time-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../modalContent/verify-user-info/verify-user-info.component */ "./src/app/modalContent/verify-user-info/verify-user-info.component.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "./node_modules/@ionic-native/preview-any-file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-equipments/add-equipments.component */ "./src/app/add-program/add-equipments/add-equipments.component.ts");
/* harmony import */ var _videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./videos-thumb-list/videos-thumb-list.component */ "./src/app/add-program/videos-thumb-list/videos-thumb-list.component.ts");







// import { CalendarComponent } from '../calendar/calendar.component';
















// import { VideoEditor } from '@ionic-native/video-editor/ngx';
const baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;
let AddProgramPage = class AddProgramPage {
    constructor(commonService, alertCtrl, toastCtrl, locale, modalCtrl, datePipe, navCtrl, media, fb, actionSheetController, mediaCapture, programService, router, platform, pickerController, musicService, file, previewAnyFile, transfer, 
    // private videoEditor: VideoEditor,
    camera, modalController, changeDetection, toastController) {
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
            spaceBetween: 5,
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
            endTime: '',
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
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
            programTitle: [
                { type: 'required', message: 'Title is required.' },
                { type: 'maxlength', message: '40 chars allowed' }
            ],
            programType: [
                { type: 'required', message: 'Program Type is required' },
            ],
            paymentType: [
                { type: 'required', message: 'Payment typee is required.' },
            ],
            participantsType: [
                { type: 'required', message: 'Select participant types.' },
            ],
            chatStatus: [
                { type: 'required', message: 'Select ChatRoom type.' },
            ],
        };
        this.musicTypes = 'music';
        this.selectMusicList = 'hiphop';
        this.submitted = false;
        this.audioFile = 'into_20180418_173147_audio.mp3';
        this.baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;
        this.musicChanged = 0;
        // TOGGLE LIVE ICON
        this.item = { active: false };
        let d = new Date();
        // this.currentHrs = d.getHours();
        this.currentHrs = '12:00';
        this.musicService.getGenres().subscribe((data) => {
            this.genres = data.genres;
            this.allMusic = data.genres[0].musics;
        });
        this.finalForm = this.fb.group({
            programFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    ionViewWillEnter() {
        this.programService.fetchAllProgram().subscribe((data) => {
            this.programList = data.programList;
            this.setProgramList(data.programList);
        });
    }
    ngOnInit() {
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        this.createForm();
    }
    handleCalendarView() {
        if (this.calendar.mode == 'month') {
            this.calendar.mode = 'week';
        }
        else {
            this.calendar.mode = 'month';
        }
    }
    /**
     * get available timeslots
     * @param programList
     * @returns events
     */
    setProgramList(programList) {
        let events = [];
        let startTime;
        let endTime;
        programList.forEach((element) => {
            startTime = new Date(element.program_date + 'Z');
            endTime = new Date(element.program_date + 'Z');
            endTime.setMinutes(endTime.getMinutes() + parseInt(element.program_duration));
            let participantType = element.is_requested ? "Excusive" : "Open (User will request to join)";
            events.push({
                title: element.title,
                startTime: startTime,
                endTime: endTime,
                allDay: false,
                typeID: element.type_id,
                participant: participantType
            });
        });
        this.eventSource = (events);
        return events;
    }
    sponsar_prog() {
        this.approval_btn = true;
    }
    unsponsar_prog() {
        this.approval_btn = false;
    }
    /**
     * function to create add program form with validation.
     */
    openStart(i) {
        this.indexForLive = i;
        this.dateObj = this.repetatedDateCopy[this.indexForLive].date;
        if (this.repetatedDateCopy[this.indexForLive].is_live == true) {
            this.repetatedDateCopy[this.indexForLive].is_live = false;
        }
        else {
            this.sTime.open();
        }
    }
    createForm() {
        this.programForm = this.fb.group({
            programTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                //UsernameValidator.validUsername,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(40),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            programDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            programType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            paymentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            participantsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
            chatStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
            // feedStatus: new FormControl('', Validators.compose([
            // ])),
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    openToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please fill all the details',
                color: 'dark',
                duration: 4000
            });
            toast.present();
        });
    }
    musicList(ev) {
        this.musicTypes = ev.detail.value;
    }
    selectMusic(ev) {
        this.selectMusicList = ev.detail.value;
    }
    fmtMSS(s) {
        return this.datePipe.transform(s * 1000, 'mm:ss');
    }
    slidePrev() {
        this.slides.slidePrev();
    }
    slideNext() {
        this.slides.slideNext();
    }
    userModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"],
                cssClass: 'fullModal',
                componentProps: { formData: this.programForm.value, source: '1' }
            });
            modal.onDidDismiss().then((d) => {
                this.modalData = (d.data);
                let ulist = '';
                d.data.forEach(el => {
                    if (el.id) {
                        ulist += el.id + ',';
                    }
                });
                this.programForm.controls['userList'].setValue(ulist);
            });
            return yield modal.present();
        });
    }
    userList() {
        this.commonService.presentModal(_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], 'fullModal', { "userList": this.modalData });
    }
    selectVolume() {
        var fees = this.finalForm.value;
        this.commonService.presentLoader();
        // if(this.programDetail.type_id != 'video'){
        this.programService.updateProgramFees({ "programFees": fees.programFees, "programId": this.programDetail.id }).subscribe((data) => {
            // console.log(data);
            this.commonService.dismissLoader();
            this.router.navigate(["tabs/program"]);
        });
        // }
        // if (!this.musicId) {
        //   this.commonService.presentToast('Select Music ');
        //   return false;
        // }
        // this.commonService.presentModal(MusicVolComponent, 'bottomModal', { "musicId": this.musicId, "programId": this.programDetail.id });
    }
    applyAdvertise() {
        this.loginUserData = JSON.parse(localStorage.getItem('userData'));
        let title = "Advertise Rule";
        let msg = "<p>1. Your Video will send for verification.</p>"
            + "<p class='mb-0'>2. Once approved Video Program will be locked</p>";
        let btn = [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                }
            }, {
                text: 'Okay',
                handler: () => {
                    console.log('Confirm Okay');
                    this.sendrequest();
                }
            }
        ];
        if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_16__["VerifyUserInfoComponent"], 'fullpage', '');
        }
        else {
            this.commonService.presentAlert(title, msg, btn, 'custom-alert advertiseAlert');
        }
    }
    sendrequest() {
        this.commonService.presentLoader();
        if (this.programDetail.type_id == 'video') {
            // console.log('programId:'+this.programDetail.id);
            this.programService.advertiseRequest({ 'programId': this.programDetail.id }).subscribe(data => {
                this.adData = data.status;
                this.request_approve_btn = true;
                this.commonService.dismissLoader();
                this.commonService.presentToast('Request Sent');
                console.log(data);
            });
        }
        else {
            this.commonService.dismissLoader();
            this.commonService.presentToast('Only Video Program are eligible');
        }
    }
    resetEvent() {
        this.event = {
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
        };
    }
    selectMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What would you like to add?',
                buttons: [
                    {
                        text: 'Capture Image',
                        handler: () => {
                            this.takeSnap();
                        }
                    },
                    {
                        text: 'Record Video',
                        handler: () => {
                            if (this.isVideoSelected == false) {
                                this.recordVideo();
                            }
                            else {
                                this.commonService.presentToast('only one video can be selected');
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What would you like to add?',
                buttons: [
                    {
                        text: 'Select Image',
                        handler: () => {
                            this.pickImageFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Select Video',
                        handler: () => {
                            if (this.isVideoSelected == false) {
                                this.pickVideoFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                            else {
                                this.commonService.presentToast('only one video can be selected');
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    recordVideo() {
        let options = {
            limit: 1,
            duration: 30,
            quality: 0
        };
        this.mediaCapture.captureVideo(options).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data.length > 0) {
                // this.copyFileToLocalDir(data[0].fullPath);
                // this.showLoader();
                this.uploadedVideo = null;
                var filename = data[0].name;
                var dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
                var dur = this.media.create(dirpath);
                let duration = dur.getDuration();
                console.log(dur + 'dur');
                console.log(duration + 'duration');
                dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                //   var durc = this.getvideoinfo(dirpath);
                // console.log(durc + 'ddddddddddddddd');
                this.selectedVideoFile(dirpath, filename);
                this.visibility = true;
            }
        }), (err) => console.error(err + 'yyyyerror'));
    }
    selectedVideoFile(dirpath, filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                var dirUrl = yield this.file.resolveDirectoryUrl(dirpath);
                var retrievedFile = yield this.file.getFile(dirUrl, filename, {});
            }
            catch (err) {
                console.log('vidoe error');
                this.dismissLoader();
                this.commonService.presentAlert("Error", "Something went wrong.", ['Ok'], '');
            }
            retrievedFile.file(data => {
                this.selectedVideo = '';
                console.log(data);
                console.log(data.size);
                this.dismissLoader();
                // if (data.size > 500){ return this.commonService.presentAlert("Error", "You cannot upload more than 100 mb.",['Ok'],'');}
                // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
                // if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}
                this.selectedVideo = retrievedFile.nativeURL;
                var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
                localStorage.setItem('selectedVideo', JSON.stringify(this.selectedVideo));
                console.log(filename + 'filename');
                this.programForm.value.file = filename;
                this.isVideoSelected = true;
                this.videoFileSelected = !this.videoFileSelected;
                // this.videoFileSelected = https://www.dropbox.com/s/df2d2gf1dvnr5uj/Sample_1280x720_mp4.mp4';
            });
        });
    }
    showLoader() {
        this.commonService.presentLoader();
    }
    dismissLoader() {
        this.commonService.dismissLoader();
    }
    filepreview() {
        console.log(this.selectedVideo);
        this.previewAnyFile.preview(this.selectedVideo)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    removefilepreview() {
        this.visibility = false;
        this.selectedVideo = null;
        this.videoFileSelected = false;
        this.isVideoSelected = false;
        this.commonService.presentToast('Selected video remove');
        console.log('Selected video remove');
    }
    copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
        }
    }
    next() {
        // let swiper = document.querySelector('.swiper-container')['swiper'];
        // swiper.slideNext();
        console.log('hello' + this.myCal);
        this.myCal.slideNext();
        // this.slides.slideNext();
    }
    back() {
        // let swiper = document.querySelector('.swiper-container')['swiper'];
        // swiper.slidePrev();
        this.myCal.slidePrev();
    }
    backToFirst() {
        this.showProgram = 1;
        this.selected = [];
        this.selectDate = [];
        this.repetatedDateCopy = [];
        this.repetatedDate = [];
        this.progDuration = [];
        this.noEvent = false;
        this.timeSlot = false;
        // this.programForm.value = [];
        // this.eventSource = '';
        this.minutes = '';
        // alert('hh');
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    // activatePopup(i){
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
    onEventSelected(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.startTime, 'medium', this.locale);
            let end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.endTime, 'medium', this.locale);
            const alert = yield this.alertCtrl.create({
                header: event.title,
                subHeader: event.desc,
                message: 'From: ' + start
                    + '<br>To: ' + end
                    + '<br>Program Type: ' + event.typeID
                    + '<br>Participant Type: ' + event.participant,
                buttons: ['OK'],
                cssClass: "custom-alert"
            });
            this.commonService.dismissModal();
            alert.present();
        });
    }
    // Time slot was clicked
    onTimeSelected(event) {
        this.newEvent = event;
        console.log(event);
        this.dateObj = event.selectedTime;
        this.noEvent = true;
        this.selectDate.forEach(el => {
            console.log(el.getDate());
            console.log(this.dateObj.getDate());
            if (el.getDate() == this.dateObj.getDate() && el.getMonth() == this.dateObj.getMonth()) {
                console.log('same date');
                this.noEvent = false;
                return false;
            }
        });
        if ((this.dateObj.getDate() < (new Date().getDate()) && this.dateObj.getMonth() <= (new Date().getMonth()))) {
            this.commonService.presentToast('Sorry, this is past time');
            this.noEvent = false;
            return false;
        }
        console.log(this.dateObj);
        if (this.noEvent) {
            this.selectDate.push(this.dateObj);
            this.repetatedDateCopy.push({ 'date': this.dateObj, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '', 'is_live': false });
            this.repetatedDate.push(this.dateObj);
            this.addEventData.push({ 'event': this.newEvent });
            console.log(this.repetatedDateCopy);
        }
    }
    selectTimeSlot() {
        let arr = [];
        var mins = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'];
        for (let i = 0; i <= 11; i++) {
            arr.push({ text: mins[i], value: mins[i] });
        }
        let hrsArr = [];
        var hrs = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'];
        for (let i = 1; i <= 23; i++) {
            hrsArr.push({ text: i, value: i });
        }
        this.selected = new Date(this.newEvent.selectedTime);
        var hours = this.selected.getHours();
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        const defaultColumnOptions = [
            {
                name: 'Hours',
                options: hrsArr,
            },
            {
                name: 'Minutes',
                options: arr,
            }
        ];
        const buttons = [
            {
                text: 'Select TimeSlot (HH:MM)',
                cssClass: 'timeHeading'
            },
            {
                text: 'Cancel',
                role: 'cancel'
            },
            {
                text: 'Confirm',
                handler: (value) => {
                    this.minutes = value.Minutes.value;
                    this.hours = value.Hours.value;
                    this.presentPrompt();
                    // this.getModal();
                }
            }
        ];
        this.commonService.presentItemPicker(defaultColumnOptions, buttons);
    }
    presentPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                header: 'Duration',
                message: '',
                inputs: [
                    {
                        name: 'duration',
                        placeholder: 'Duration(In Minutes)',
                        type: 'number'
                    },
                ],
                buttons: [
                    {
                        text: 'Confirm',
                        handler: data => {
                            // if (User.isValid(data.username, data.password)) {
                            //   // logged in!
                            // } else {
                            //   // invalid login
                            //   return false;
                            // }
                            console.log(this.indexForLive + 'indexForLive');
                            console.log(data.duration);
                            if (data.duration <= 0) {
                                this.showErrorToast('Enter Valid Duration');
                                return false;
                            }
                            else if (data.duration > 60) {
                                this.showErrorToast('Enter Upto 60 minutes');
                                return false;
                            }
                            else {
                                // this.dateObj = new Date(event.selectedTime + 'Z');
                                // this.noEvent = true;
                                this.selectDate.forEach(el => {
                                    // console.log(el.getDate());
                                    // console.log(this.dateObj.getDate());
                                    if (el.getDate() == this.dateObj.getDate() && el.getMonth() == this.dateObj.getMonth()) {
                                        console.log('same date');
                                        //  this.noEvent = false;
                                        //   return ;
                                    }
                                });
                                this.progDuration = data.duration;
                                console.log(data);
                                this.dateObj.setHours((this.hours), parseInt(this.minutes));
                                this.dateObj = this.dateObj;
                                if ((this.dateObj.getDate() == (new Date().getDate()) && this.dateObj.getMonth() <= (new Date().getMonth())) && this.dateObj.getHours() < (new Date().getHours())) {
                                    this.commonService.presentToast('Sorry, this is past time');
                                    this.noEvent = false;
                                    return;
                                }
                                // alert(this.newEvent.events.length);
                                if (this.newEvent.events.length > 0) {
                                    this.newEvent.events.forEach(el => {
                                        if (el.startTime.getHours() == this.hours || el.endTime.getHours() == this.hours) {
                                            console.log(el.startTime.getTime() + 'event time');
                                            var nd = new Date(this.newEvent.selectedTime + 'Z');
                                            nd.setHours((this.hours), parseInt(this.minutes) + parseInt(this.progDuration));
                                            this.progEndTime = nd;
                                            console.log(this.progEndTime + 'endTime');
                                            this.noEvent = false;
                                            console.log(el.startTime.getTime());
                                            console.log(this.dateObj.getTime());
                                            console.log(el.endTime.getTime());
                                            console.log(nd.getTime());
                                            if ((el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= nd.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {
                                                // if ( (el.startTime.getTime() > this.dateObj.getTime() ) || (el.endTime.getTime() <= this.dateObj.getTime())) {
                                                this.noEvent = true;
                                                // alert('tt');
                                            }
                                            else {
                                                this.noEvent = false;
                                                console.log('nn');
                                                this.selectNewTime();
                                            }
                                        }
                                        // else{
                                        //   this.noEvent = true;
                                        // }
                                    });
                                }
                                else {
                                    this.noEvent = true;
                                }
                                console.log(this.noEvent + ' event');
                                if (this.noEvent == true) {
                                    // this.repetatedDateCopy.splice(this.indexForLive, 1);
                                    // // this.selectDate.push(this.dateObj);
                                    // this.repetatedDateCopy.push({'date':this.dateObj ,'equipments':[], 'nutrition_id':[] , 'video': '','description':'','is_live':false});
                                    // this.repetatedDate.push(this.dateObj);
                                    var time = this.dateObj;
                                    this.selectDate[this.indexForLive] = this.dateObj;
                                    this.repetatedDateCopy[this.indexForLive].date = '';
                                    this.repetatedDateCopy[this.indexForLive].date = time;
                                    this.repetatedDate[this.indexForLive] = this.dateObj;
                                    this.repetatedDate = this.repetatedDate;
                                    if (this.repetatedDateCopy[this.indexForLive].is_live == true) {
                                        this.repetatedDateCopy[this.indexForLive].is_live = false;
                                    }
                                    else {
                                        this.repetatedDateCopy[this.indexForLive].is_live = true;
                                    }
                                    console.log(this.repetatedDateCopy);
                                    console.log(time, ' time');
                                    this.changeDetection.detectChanges();
                                    this.timeSlot = true;
                                }
                            }
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    showErrorToast(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: data,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    addLiveProgram() {
        this.noEvent = true;
        this.selectDate.forEach(el => {
            console.log(el.getDate());
            console.log(this.dateObj.getDate());
            if (el.getDate() == this.dateObj.getDate() && el.getMonth() == this.dateObj.getMonth()) {
                console.log('same date');
                this.noEvent = false;
                return false;
            }
        });
        console.log(this.dateObj);
        if (this.noEvent) {
            this.selectDate.push(this.dateObj);
            this.repetatedDateCopy.push({ 'date': this.dateObj, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '', 'is_live': false });
            this.repetatedDate.push(this.dateObj);
            this.addEventData.push({ 'event': this.newEvent });
            console.log(this.repetatedDateCopy);
        }
    }
    showdate() {
        this.selectDate.forEach(el => {
            console.log(el.getDate());
            console.log(this.dateObj.getDate());
            if (el.getDate() == this.dateObj.getDate() && el.getMonth() == this.dateObj.getMonth()) {
                console.log('same date');
                //  this.noEvent = false;
                //   return false;
            }
        });
        this.minutes = '';
        this.hours = '';
        console.log("this.myDate");
        console.log(this.myDate);
        let d = this.myDate.split('T')[1];
        let h = d.split(':')[0];
        let m = d.split(':')[1];
        this.minutes = m;
        this.hours = h;
        if (h != undefined || ' ') {
            this.presentPrompt();
        }
        console.log("test");
        console.log("test");
    }
    click(date) {
        console.log('click..', date);
        let hoursMinutes = date.split(':');
        let time = this.formatAMPM(hoursMinutes);
        console.log('time', time);
    }
    formatAMPM(date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    preRemovedate(index) {
        this.repetatedDateCopy.splice(index, 1);
        this.repetatedDate.splice(index, 1);
        this.selectDate.splice(index, 1);
    }
    preSelectedDate(index) {
        this.repetatedDateCopy.splice(index, 1);
        this.selectDate.splice(index, 1);
        this.repetatedDate.splice(index, 1);
        console.log(this.selectDate);
    }
    // selectNewTime() {
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
    addVideo(event, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_22__["VideosThumbListComponent"],
                cssClass: 'fullModal',
                componentProps: { 'programDetail': event }
            });
            modal.onDidDismiss().then((d) => {
                if (d.data) {
                    this.repetatedDateCopy[i].video = d.data;
                    // this.repetatedDate[i].video=d.data;
                }
            });
            return yield modal.present();
        });
    }
    addEquipments2(event, item, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_21__["AddEquipmentsComponent"],
                cssClass: 'fullModal',
                componentProps: { "programData": item, "modelOpen": event }
            });
            modal.onDidDismiss().then((d) => {
                if (event == 1) {
                    this.repetatedDateCopy[i].equipments = d.data.filter(Boolean);
                    // this.repetatedDate[i].equipments = d.data.filter(Boolean) ;
                }
                else {
                    this.repetatedDateCopy[i].nutrition_id = d.data.filter(Boolean);
                    // this.repetatedDate[i].nutrition_id = d.data.filter(Boolean) ;
                }
                console.log(this.repetatedDateCopy);
                // console.log(this.repetatedDate);
            });
            return yield modal.present();
        });
    }
    detailsUpdate($event, programId) {
        $event.detail.programId = programId;
        console.log($event.detail);
    }
    // async onTimeSelected(ev) {
    //   const modal = await this.modalController.create({
    //     component: UserModalComponent,
    //     cssClass: 'my-custom-class'
    //   });
    //   return modal.present();
    // }
    selectNewTime() {
        let arr = [];
        let min = [];
        var hrs = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
        for (let i = 1; i <= 24; i++) {
            arr.push({ text: i, value: i });
        }
        for (let i = 1; i <= 60; i++) {
            min.push({ text: i, value: i });
        }
        const defaultColumnOptions = [
            {
                name: 'Hours',
                options: arr
            },
            {
                name: 'Minutes',
                options: min
            }
        ];
        const buttons = [
            {
                text: 'Program is already assign for this time slot, Select new TimeSlot(HH:MM)',
                cssClass: 'timeHeading'
            },
            {
                text: 'Cancel',
                role: 'cancel'
            },
            {
                text: 'Confirm',
                handler: (value) => {
                    this.noEvent = true;
                    var minute = value.Minutes.value;
                    var hours = value.Hours.value;
                    console.log(minute);
                    console.log(hours);
                    console.log(this.hours);
                    // this.dateObj.setMinutes(minute);
                    console.log(this.dateObj);
                    // var newEndTime = new Date(this.eventList.selectedTime + 'Z');
                    var newDateTime = this.dateObj;
                    // this.dateObj.setHours((this.hours),  parseInt(this.minutes));
                    var nd = newDateTime.setHours((hours), parseInt(minute));
                    this.progEndTime = nd;
                    console.log(this.progEndTime);
                    console.log(nd);
                    this.newEvent.events.forEach(el => {
                        if (el.startTime.getHours() == this.dateObj.getHours() || el.endTime.getHours() == this.dateObj.getHours()) {
                            console.log(el.startTime.getTime());
                            console.log(el.endTime.getTime());
                            console.log(this.dateObj.getTime());
                            if ((el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= this.progEndTime) || (el.endTime.getTime() <= this.dateObj.getTime())) {
                                this.noEvent = true;
                                this.timeSlot = true;
                            }
                            else {
                                this.commonService.presentToast('this time slot already has event');
                                this.noEvent = false;
                            }
                        }
                    });
                    this.repetatedDateCopy.forEach(el => {
                        if (el.date.getDate() == this.dateObj.getDate()) {
                            this.noEvent = false;
                            return;
                        }
                        else {
                            // this.noEvent = true;
                        }
                    });
                    if (this.noEvent == true) {
                        // this.repetatedDateCopy.push(this.dateObj);
                        this.selectDate.push(this.dateObj);
                        this.repetatedDate.push(this.dateObj);
                        this.repetatedDateCopy.push({ 'date': this.dateObj, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '', 'is_live': true });
                    }
                    minute = '';
                    console.log(this.repetatedDateCopy);
                    //  alert(this.noEvent)
                }
            }
        ];
        this.commonService.presentItemPicker(defaultColumnOptions, buttons);
    }
    toPrevScreen() {
        if (!this.ProgramInserted) {
            this.getModal();
        }
        else {
            this.showProgram = 3;
        }
    }
    getModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
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
            modal.onDidDismiss().then((d) => {
                console.log(d);
                var progId = d.data;
                // console.log(progId.id + 'pppppidddd');
                if (this.isVideoSelected == true) {
                    console.log('a1');
                    var url = baseUrl + "api/auth/uploadVideoForProgram";
                    var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
                    var options = {
                        fileName: filename,
                        fileKey: "video",
                        mimeType: "video/mp4",
                        httpMethod: "POST",
                        chunkedMode: false,
                        headers: { "Authorization": "Bearer " + localStorage.getItem('userToken') },
                        params: {
                            'prog_id': progId.id
                        }
                    };
                    // const fileTransfer: FileTransferObject = this.transfer.create();
                    this.videoFileUpload = this.transfer.create();
                    this.videoFileUpload.upload(this.selectedVideo, url, options)
                        .then((data) => {
                        console.log('gg');
                        console.log(data.response);
                    }).then((data) => {
                    });
                }
                if (d.data.program_date) {
                    console.log('a2');
                    let startTime;
                    let endTime;
                    startTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                    endTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                    endTime.setMinutes(endTime.getMinutes() + parseInt(d.data.program_duration));
                    let participantType = d.data.is_requested ? "Excusive" : "Open (User will request to join)";
                    this.eventSource.push({
                        title: d.data.title,
                        startTime: startTime,
                        endTime: endTime,
                        allDay: false,
                        typeID: d.data.type_id,
                        participant: participantType
                    });
                    this.programDetail = d.data;
                    this.ionViewWillEnter();
                    // this.showProgram = 3;
                    this.ProgramInserted = true;
                    this.router.navigate(["tabs/program"]);
                }
                // this.router.navigate(["tabs/program"])
            });
            return yield modal.present();
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    // openGallery() {
    //   this.pickFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
    // }
    takeSnap() {
        this.pickImage(this.camera.PictureSourceType.CAMERA);
    }
    pickImage(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        }, (err) => {
            // alert(err);
        });
    }
    // pickFromGallery(sourceType) {
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
    pickImageFromGallery(sourceType) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        }, (err) => {
            // alert(err);
        });
    }
    pickVideoFromGallery(sourceType) {
        const options = {
            quality: 60,
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            // sourceType: sourceType,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // mediaType: this.camera.MediaType.VIDEO,
            // correctOrientation: true
        };
        this.camera.getPicture(options).then((videoUrl) => {
            var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
            var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
            // var durc = this.getvideoinfo(dirpath);
            // console.log(durc + 'ddddddddddddddd');
            var dur = this.media.create(dirpath);
            let duration = dur.getDuration();
            console.log(dur);
            console.log(JSON.stringify(dur));
            console.log(duration + 'duration');
            console.log(JSON.stringify(duration) + 'ation');
            dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
            this.selectedVideoFile(dirpath, filename);
            // this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        }, (err) => {
            // alert(err);
        });
    }
    fsubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.musicId || !this.programDetail.id) {
                this.commonService.presentToast('Select music. Or something really went wrong.');
                return;
            }
            this.commonService.presentLoader();
            this.programService.updateProgramMusic({ "musicId": this.musicId, "programId": this.programDetail.id }).subscribe((data) => {
                this.commonService.dismissLoader();
                this.router.navigate(["/tabs/program"]);
            });
        });
    }
    searchChanged(musicname) {
        const searchTerm = musicname.srcElement.value;
        if (searchTerm == '') {
            this.musicService.getGenres().subscribe((data) => {
                this.genres = data.genres;
                this.allMusic = data.genres[0].musics;
            });
        }
        else {
            this.programService.searchMusic({ "searchQuery": searchTerm }).subscribe((search) => {
                this.allMusic = (search.musicList);
            });
        }
    }
    get f() { return this.programForm.controls; }
    nextStep(event) {
        this.selected = [];
        this.repetatedDateCopy = [];
        this.repetatedDate = [];
        this.progDuration = [];
        // this.programForm.value = [];
        // this.eventSource = '';
        this.minutes = '';
        let formControl = this.programForm.controls;
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
    musicSelect(ev) {
        this.musicId = ev[0];
        this.selectedAudioFile = ev[1]; // audio file 
        this.audioFilename = ev[2]; // audio Name
        this.audioFileDuration = ev[3]; // audio duration  
        this.prepareAudioFile();
    }
    prepareAudioFile() {
        this.platform.ready().then(() => {
            this.musicChanged = 1;
            this.audioFile = this.baseUrl + "public/storage/audio/" + this.selectedAudioFile;
        });
    }
    toLastScreen() {
        console.log(this.programDetail);
        // if (this.programDetail && this.programForm.value.programType != 6) {
        if (this.programDetail) {
            this.showProgram = 3;
        }
        // else {
        //   this.router.navigate(["/tabs/program" ])
        // }
    }
    removeImg(index) {
        this.gallaryImgPath.splice(index, 1);
    }
    clearExcl() {
        this.modalData = null;
    }
    ionViewDidLeave() {
        this.programForm.reset();
        this.showProgram = 1;
        this.programDetail = null;
    }
    ngOnDestroy() {
        this.programForm.reset();
    }
    verifyUserInfoModal() {
        if (this.loginUserData.trilloMatch != 1) {
            this.commonService.presentModal(_modalContent_verify_user_info_verify_user_info_component__WEBPACK_IMPORTED_MODULE_16__["VerifyUserInfoComponent"], 'fullpage', '');
        }
        else {
        }
    }
    toggleIcon(item, i) {
        item.active = !item.active;
    }
};
AddProgramPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__["Media"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_13__["ProgramService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PickerController"] },
    { type: _services_music_service__WEBPACK_IMPORTED_MODULE_15__["MusicService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_19__["PreviewAnyFile"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddProgramPage.prototype, "sTime", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlides"])
], AddProgramPage.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"])
], AddProgramPage.prototype, "myCal", void 0);
AddProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-program.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-program.page.scss */ "./src/app/add-program/add-program.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__["Media"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
        _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_13__["ProgramService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PickerController"],
        _services_music_service__WEBPACK_IMPORTED_MODULE_15__["MusicService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"],
        _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_19__["PreviewAnyFile"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]])
], AddProgramPage);



/***/ }),

/***/ "./src/app/audio-player-program/audio-player-program.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/audio-player-program/audio-player-program.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n.audio-list > div {\n  display: flex;\n}\n\n.audio-list > * {\n  display: inline-block;\n}\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px;\n}\n\nion-range ion-label {\n  margin-right: 50px;\n}\n\nion-fab-button {\n  min-width: 40px;\n}\n\nion-fab-button + div {\n  width: 100%;\n}\n\nion-fab-button + div > div {\n  display: flex;\n}\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 50px;\n}\n\n.music-spinner {\n  --color: #26a69a;\n}\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 28px;\n}\n\n.music-timer-fav ion-icon {\n  margin: 0 5px;\n}\n\n.musicbar {\n  padding-right: 50px;\n}\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.musicWrapper ion-toolbar .audio-listInner {\n  display: block;\n  background: #26a69a;\n  height: 56px;\n  margin-top: 10px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n  position: absolute;\n  width: 90%;\n  top: 2px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n  margin-top: 20px;\n  margin-left: 10px;\n  padding-left: 50px;\n}\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcYXVkaW8tcGxheWVyLXByb2dyYW1cXGF1ZGlvLXBsYXllci1wcm9ncmFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdWRpby1wbGF5ZXItcHJvZ3JhbS9hdWRpby1wbGF5ZXItcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFVBQUE7RUFBVyxnQkFBQTtFQUFpQixtQkFBQTtBQ0l4Qzs7QURIQTtFQUFnQixhQUFBO0FDT2hCOztBRE5BO0VBQWMscUJBQUE7QUNVZDs7QURUQTtFQUFVLGlCQUFBO0VBQWtCLGFBQUE7QUNjNUI7O0FEYkE7RUFBb0Isa0JBQUE7QUNpQnBCOztBRGhCQTtFQUFlLGVBQUE7QUNvQmY7O0FEbkJBO0VBQW1CLFdBQUE7QUN1Qm5COztBRHRCQTtFQUF1QixhQUFBO0FDMEJ2Qjs7QUR6QkE7RUFBa0MsV0FBQTtFQUFZLGlCQUFBO0FDOEI5Qzs7QUQ3QkE7RUFBZSxnQkFBQTtBQ2lDZjs7QUQvQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDa0NKOztBRGhDQTtFQUNJLGFBQUE7QUNtQ0o7O0FEakNBO0VBQ0ksbUJBQUE7QUNvQ0o7O0FEakNJO0VBQVksa0JBQUE7RUFBbUIsZ0JBQUE7QUNzQ25DOztBRHJDUTtFQUFpQixjQUFBO0VBQWUsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLGdCQUFBO0FDMkN6RTs7QUR6Q2dCO0VBQVUsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLFFBQUE7QUM4Q3hEOztBRDVDWTtFQUFZLGdCQUFBO0VBQWlCLGlCQUFBO0VBQWtCLGtCQUFBO0FDaUQzRDs7QURoRGdCO0VBQVUsV0FBQTtBQ21EMUIiLCJmaWxlIjoic3JjL2FwcC9hdWRpby1wbGF5ZXItcHJvZ3JhbS9hdWRpby1wbGF5ZXItcHJvZ3JhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdWRpby1saXN0e3BhZGRpbmc6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO31cclxuLmF1ZGlvLWxpc3Q+ZGl2e2Rpc3BsYXk6IGZsZXg7fVxyXG4uYXVkaW8tbGlzdD4qe2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbmlvbi1yYW5nZXstLWtub2Itc2l6ZTogMThweDstLWhlaWdodDogMnB4O31cclxuaW9uLXJhbmdlIGlvbi1sYWJlbHttYXJnaW4tcmlnaHQ6IDUwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbnttaW4td2lkdGg6IDQwcHg7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXZ7d2lkdGg6IDEwMCU7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXY+ZGl2e2Rpc3BsYXk6IGZsZXg7fVxyXG5pb24tZmFiLWJ1dHRvbitkaXY+ZGl2ICtpb24tbGFiZWx7Y29sb3I6ICNGRkY7bWFyZ2luLWxlZnQ6IDUwcHg7fVxyXG4ubXVzaWMtc3Bpbm5lcnstLWNvbG9yOiAjMjZhNjlhO31cclxuXHJcbi5tdXNpYy10aW1lci1mYXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDI4cHg7XHJcbn1cclxuLm11c2ljLXRpbWVyLWZhdiBpb24taWNvbiB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5tdXNpY2JhciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5tdXNpY1dyYXBwZXJ7XHJcbiAgICBpb24tdG9vbGJhcnstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAuYXVkaW8tbGlzdElubmVye2Rpc3BsYXk6IGJsb2NrO2JhY2tncm91bmQ6ICMyNmE2OWE7aGVpZ2h0OiA1NnB4O21hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5tdXNpY2JhcntcclxuICAgICAgICAgICAgICAgIGlvbi1yYW5nZXtwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDkwJTt0b3A6IDJweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm11c2ljLW5hbWV7bWFyZ2luLXRvcDogMjBweDttYXJnaW4tbGVmdDogMTBweDtwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7Y29sb3I6ICNGRkY7fVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmF1ZGlvLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uYXVkaW8tbGlzdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hdWRpby1saXN0ID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLXJhbmdlIHtcbiAgLS1rbm9iLXNpemU6IDE4cHg7XG4gIC0taGVpZ2h0OiAycHg7XG59XG5cbmlvbi1yYW5nZSBpb24tbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiArIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tZmFiLWJ1dHRvbiArIGRpdiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1mYWItYnV0dG9uICsgZGl2ID4gZGl2ICsgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4ubXVzaWMtc3Bpbm5lciB7XG4gIC0tY29sb3I6ICMyNmE2OWE7XG59XG5cbi5tdXNpYy10aW1lci1mYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDI4cHg7XG59XG5cbi5tdXNpYy10aW1lci1mYXYgaW9uLWljb24ge1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ubXVzaWNiYXIge1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xufVxuLm11c2ljV3JhcHBlciBpb24tdG9vbGJhciAuYXVkaW8tbGlzdElubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMyNmE2OWE7XG4gIGhlaWdodDogNTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIgLmF1ZGlvLWxpc3RJbm5lciAubXVzaWNiYXIgaW9uLXJhbmdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICB0b3A6IDJweDtcbn1cbi5tdXNpY1dyYXBwZXIgaW9uLXRvb2xiYXIgLmF1ZGlvLWxpc3RJbm5lciAubXVzaWMtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG4ubXVzaWNXcmFwcGVyIGlvbi10b29sYmFyIC5hdWRpby1saXN0SW5uZXIgLm11c2ljLW5hbWUgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNGRkY7XG59Il19 */");

/***/ }),

/***/ "./src/app/audio-player-program/audio-player-program.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/audio-player-program/audio-player-program.component.ts ***!
  \************************************************************************/
/*! exports provided: AudioPlayerProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerProgramComponent", function() { return AudioPlayerProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AudioPlayerProgramComponent = class AudioPlayerProgramComponent {
    constructor() {
        this.isPlaying = false;
        this.isLoading = false;
        this.currentTime = 0;
        this.duration = "00:00";
        this.drag = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this._player = this.playerElementRef.nativeElement;
        this._bindPlayerEvents();
    }
    onDrag() {
        this.drag = true;
        setTimeout(() => {
            this.drag = false;
        }, 300);
    }
    play() {
        this.isPlaying = true;
        this.selectedAudio[1] = 0;
        this._player.play();
    }
    pause() {
        this.isPlaying = false;
        this._player.pause();
    }
    seek({ detail: { value } }) {
        if (this.drag) {
            this._player.currentTime = value;
        }
    }
    _bindPlayerEvents() {
        this._player.addEventListener('playing', () => {
            this.isPlaying = true;
        });
        this._player.addEventListener('pause', () => {
            this.isPlaying = false;
        });
        this._player.addEventListener('timeupdate', () => {
            this.currentTime = Math.floor(this._player.currentTime);
        });
        this._player.addEventListener('seeking', () => {
            this.isLoading = true;
        });
        this._player.addEventListener('seeked', () => {
            this.isLoading = false;
        });
        this._player.addEventListener('loadstart', () => {
            this.isLoading = true;
        });
        this._player.addEventListener('loadeddata', () => {
            this.isLoading = false;
            const minutes = Math.floor(this._player.duration / 60);
            this.duration = minutes + ':' + Math.floor((this._player.duration - minutes * 60));
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AudioPlayerProgramComponent.prototype, "selectedAudio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AudioPlayerProgramComponent.prototype, "playerElementRef", void 0);
AudioPlayerProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio-player-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio-player-program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player-program/audio-player-program.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio-player-program.component.scss */ "./src/app/audio-player-program/audio-player-program.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! .././app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AudioPlayerProgramComponent);



/***/ })

}]);
//# sourceMappingURL=add-program-add-program-module-es2015.js.map