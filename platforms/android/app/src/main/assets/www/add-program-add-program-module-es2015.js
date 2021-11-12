(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-program-add-program-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-program/add-program.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Add Program</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"nextStep(2)\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"12\"  class=\"ion-no-padding video_col\" *ngIf=\"videoFileSelected\">\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n        <ion-slide >\r\n          \r\n          <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n          <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n        </ion-slide>\r\n        </ion-slides>  \r\n      </ion-col>   -->\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gallaryImgPath?.length>0 || videoFileSelected\">\r\n        <!-- <ion-button (click)=\"slidePrev()\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button> -->\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide *ngIf=\"isVideoSelected\">\r\n            <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n            <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <!-- <ion-button (click)=\"slideNext()\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-col>\r\n      <ion-item-sliding *ngFor=\"let f of files\">\r\n        <ion-item (click)=\"openFile(f)\">\r\n          <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\r\n          <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\r\n          <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\r\n\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ f.name }}\r\n            <p>{{ f.fullPath }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n      <!-- \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\">\r\n            <img src=\"../../assets/images/demo1.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo2.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo3.jpg\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"programForm\">\r\n          <ion-list>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input class=\"form-control\" formControlName=\"programTitle\" [ngClass]=\"{ 'is-invalid': submitted && f.programTitle.errors }\">\r\n              </ion-input>\r\n            </ion-item>\r\n            \r\n            <ng-container *ngFor=\"let validation of validation_messages.programTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || programForm.get('programTitle').touched) && programForm.get('programTitle').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"mb-10 floatingItem\">\r\n              <ion-label position=\"floating\">Description </ion-label>\r\n              <ion-textarea class=\"form-control\" formControlName=\"programDescription\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-list-header class=\"grey-header\">\r\n                    <ion-label>Program Type</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-radio-group class=\"full-width radio-list\" formControlName=\"programType\">\r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Private - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Group - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item> -->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>One to One</ion-label>\r\n                      <!-- <ion-label>Private - Twoway</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"3\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <!-- <ion-label>Group - Twoway</ion-label> -->\r\n                      <ion-label>Many to Many</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"4\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <!-- <ion-label>Public</ion-label> -->\r\n                      <ion-label>One to Many</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"5\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Video</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"6\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Nutrition</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"7\" formControlName=\"programType\" disabled=\"true\"></ion-radio>\r\n                    </ion-item> -->\r\n                  </ion-radio-group>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.programType\">\r\n                    <span class=\"error-message\"\r\n                      *ngIf=\"(submitted || programForm.get('programType').touched) && programForm.get('programType').hasError(validation.type)\">{{ validation.message }}</span>\r\n                  </ng-container>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-list-header class=\"grey-header\">\r\n                    <ion-label></ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n\r\n              <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"participantsType\">\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Select Praticipants</ion-label>\r\n                </ion-list-header>\r\n                <ion-item lines=\"none\" (click)=\"userModal()\">\r\n                  <ion-label>Exclusive</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"1\" formControlName=\"participantsType\"\r\n                    [disabled]=\"f.programType.value==5 || !f.programType.value?true:false\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\" (click)=\"clearExcl()\">\r\n                  <ion-label>Open (Let users request to join)</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"2\" checked formControlName=\"participantsType\"></ion-radio>\r\n                </ion-item>\r\n                <ng-container *ngFor=\"let validation of validation_messages.participantsType\">\r\n                  <span class=\"error-message\"\r\n                    *ngIf=\"(submitted || programForm.get('participantsType').touched) && programForm.get('participantsType').hasError(validation.type)\">{{ validation.message }}</span>\r\n                </ng-container>\r\n              </ion-radio-group>\r\n              <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label></ion-label>\r\n                </ion-list-header>\r\n                <ion-item lines=\"none\">\r\n                  <ion-text>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                    ut labore et dolore magna aliqua.\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\" *ngIf=\"modalData?.length>0\">\r\n              <ion-list lines=\"none\" class=\"users-list\">\r\n                <ion-item  *ngFor=\"let user of modalData\" >\r\n                  <img src=\"{{profileUrl}}{{user.bios.profile_pic}}\"  *ngIf=\"user.bios.profile_pic\" (click)=\"userList()\"/>\r\n                  <img src=\"../../assets/images/user.png\"  *ngIf=\"!user.bios.profile_pic\" (click)=\"userList()\"/>\r\n                   <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n            <!-- <ion-item>\r\n              <ion-row>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group class=\"full-width radio-list\">\r\n                    <ion-list-header class=\"grey-header\">\r\n                      <ion-label>Program Payment</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Free</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"0\" checked formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Daily</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Every 2 day's</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Every 3 day's</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"3\" formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Every 5 day's</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"4\" formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Every 7 day's</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"5\" formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Every 14 day's</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"6\" formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Every 30 day's</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"7\" formControlName=\"paymentType\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.paymentType\">\r\n                    <span class=\"error-message\"\r\n                      *ngIf=\"(submitted || programForm.get('paymentType').touched) && programForm.get('paymentType').hasError(validation.type)\">{{ validation.message }}</span>\r\n                  </ng-container>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-list-header class=\"grey-header\">\r\n                    <ion-label></ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.</ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item> -->\r\n          </ion-list>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==2\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"backToFirst()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Select Date & Time</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <!-- <ion-label (click)=\"toLastScreen()\" class=\"text-green\">Next</ion-label> -->\r\n          <ion-label *ngIf=\"repetatedDateCopy.length > 0\" (click)=\"toPrevScreen()\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <!-- Move back one screen of the slides -->\r\n        <ion-list lines=\"none\" class=\"calendar-header\">\r\n          <ion-item class=\"ion-text-left\">\r\n            <ion-button class=\"calend_arrow\" fill=\"clear\" (click)=\"back()\">\r\n              <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-title>{{ viewTitle }}</ion-title>\r\n          </ion-item>\r\n          <!-- Move forward one screen of the slides -->\r\n          <ion-item class=\"ion-text-right\">\r\n            <ion-button class=\"calend_arrow \" fill=\"clear\" (click)=\"next()\">\r\n              <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n        <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\r\n          scrollToHour=\"{{currentHrs}}\"  (onEventSelected)=\"onEventSelected($event)\"\r\n          (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" startHour=\"0\"\r\n          endHour=\"24\" step=\"1\" lockSwipes=\"true\" class=\"calendar-table\"></calendar>\r\n          <!-- <ion-datetime #dateTime1 displayFormat=\"mm\"></ion-datetime> -->\r\n\r\n      </ion-col>\r\n      <!-- <ion-icon ios=\"ios-construct\" md=\"md-construct\" ></ion-icon> -->\r\n      <ion-list-header  *ngIf=\"repetatedDateCopy.length <= 0\" class=\" green green-alram-icon text-white\">\r\n        <div >\r\n          <ion-icon ios=\"ios-alarm\" md=\"md-alarm\" class=\"\" (click)=\"selectTimeSlot()\"></ion-icon>\r\n          <!-- <ion-icon ios=\"ios-construct\" md=\"md-construct\" class=\"ion-margin-start\" ></ion-icon>\r\n          <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" ></ion-icon>\r\n          <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" ></ion-icon> -->\r\n      </div>\r\n      <!-- <div *ngIf=\"repetatedDateCopy.length > 0;\">\r\n        <div *ngFor=\"let date of repetatedDateCopy let i = index\"> \r\n        <div *ngIf=\"date.date == dateObj\">\r\n        <ion-icon ios=\"ios-alarm\" md=\"md-alarm\" class=\"\" (click)=\"selectTimeSlot()\"></ion-icon>\r\n        <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n        </ion-icon>\r\n        <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon>\r\n        <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" class=\"ion-margin-start\" (click)=\"preSelectedDate(i)\"></ion-icon>\r\n      </div>\r\n    </div>\r\n    </div> -->\r\n      </ion-list-header>   \r\n      <ion-list *ngFor=\"let date of repetatedDateCopy let i = index\">\r\n      <!-- <div *ngIf=\"date.date == dateObj\">  -->\r\n      <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n        {{date.date | date :'medium'}}\r\n        <div>\r\n          <ion-icon ios=\"ios-construct\" md=\"md-construct\" class=\"ion-margin-start\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n          <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n          </ion-icon>\r\n          <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon>\r\n          <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n          <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" class=\"ion-margin-start\" (click)=\"preSelectedDate(i)\"></ion-icon>\r\n        </div>\r\n      </ion-list-header>\r\n      <ion-item *ngIf=\"date?.equipments.length>0\">\r\n        <ion-label>Equipments :</ion-label>\r\n        <div class=\"users-list\" *ngIf=\"date?.equipments.length>0;else no_equipment\">\r\n          <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of date?.equipments\" />\r\n        </div>\r\n        <!-- <ng-template #no_equipment>No Equipment Selected</ng-template> -->\r\n      </ion-item>\r\n      <ion-item *ngIf=\"date.nutrition_id.length > 0\">\r\n        <ion-label>Nutritions :</ion-label>\r\n        <div class=\"users-list\" *ngIf=\"date.nutrition_id.length>0;else no_nutrition\">\r\n          <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.nutrition_id\" />\r\n        </div>\r\n        <!-- <ng-template #no_nutrition>No Nutrition Selected</ng-template> -->\r\n      </ion-item>\r\n      <ion-item *ngIf=\"date?.video\">\r\n        <ion-label>Videos :</ion-label>\r\n        <div class=\"users-list\" *ngIf=\"date?.video;else no_videos\">\r\n        \r\n          <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.video\" />\r\n        </div>\r\n        <!-- <ng-template #no_videos>No videos Selected</ng-template> -->\r\n      </ion-item>      \r\n      <!-- <ion-item class=\"descriptionItem\">\r\n        <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,item?.id)\"\r\n            value=\"{{item?.description}}\"></ion-textarea>\r\n      </ion-item> -->\r\n    <!-- </div> -->\r\n      </ion-list>\r\n      <!-- <ion-item class=\"date_items\" *ngFor=\"let dates of repetatedDateCopy; let i =index\"> \r\n        <h6 >{{dates.date | date :'medium'}} </h6>\r\n        <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemovedate(i)\"></ion-icon>\r\n      </ion-item>  -->\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==3\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=2\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" (click)=\"selectVolume()\">\r\n          <ion-label class=\"text-green\" >Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <div class=\"main_content ion-padding programPreview\">\r\n      <form [formGroup]=\"finalForm\" (ngSubmit)=\"saveProg()\">\r\n        <h6 style=\"margin: 0 0 15px 0\">Program Name: {{ programDetail.title }}</h6>\r\n        <ion-item lines=\"none\">\r\n          <ion-label style=\"display: contents;\">How much would you like to charge:</ion-label>\r\n          <ion-label style=\"    margin-left: 40px;\">$</ion-label>\r\n          <ion-input class=\"form-control\" type=\"number\" formControlName=\"programFees\" value=\"0\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"programDetail.type_id == 'video' \">\r\n        <ion-label style=\"display: block;margin-top: 15px;\">Would you like to request Sponsors:</ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-radio-group value=\"sponsors_group\" class=\"radio-group radioPreview\">\r\n          <ion-item>\r\n            <ion-label>Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"1\" (click)=\"sponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"2\" (click)=\"unsponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>      \r\n      </ion-item>\r\n      </div>\r\n     \r\n      <ion-list class=\"prog_btn_list\">\r\n      <ion-item  lines=\"none\" (click)=\"verifyUserInfoModal()\" *ngIf=\"loginUserData.trilloMatch != '1' && programDetail.type_id != 'video' \">\r\n        <ion-button class=\"green btn button-medium\">Earn with Intoative</ion-button>\r\n      </ion-item>\r\n      <!-- <ion-item lines=\"none\" (click)=\"verifyUserInfoModal() \">\r\n        <ion-button class=\"green btn button-medium\">Earn with Intoative</ion-button>\r\n      </ion-item> -->\r\n      <ion-item class=\"\" *ngIf=\"approval_btn && !request_approve_btn \">\r\n        <ion-button (click)=\"applyAdvertise()\" class=\"green btn button-medium\">Request Approval</ion-button> \r\n      </ion-item>\r\n      <!-- <ion-item class=\"\" *ngIf=\"request_approve_btn\">\r\n        <ion-button class=\"green btn button-medium\">Request Sent</ion-button> \r\n      </ion-item> -->\r\n      </ion-list>\r\n    </form>\r\n    </div>\r\n\r\n    <!-- <ion-row class=\"main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div [ngSwitch]=\"musicTypes\">\r\n          <div *ngSwitchCase=\"'music'\">\r\n            <ion-toolbar class=\"searchbar\">\r\n              <ion-searchbar type=\"text\" (ionInput)=\"searchChanged($event)\"></ion-searchbar>\r\n            </ion-toolbar>\r\n            <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"allMusic\">\r\n              <ion-segment class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\">\r\n                <ion-segment-button *ngFor=\"let item of genres; let i =index \" (click)=\"allMusic=item?.musics\" [checked]=\"i==0?'true':'false'\" >{{item?.name}}</ion-segment-button>                \r\n              </ion-segment>\r\n            </ion-toolbar>\r\n            <div [ngSwitch]=\"selectMusicList\" *ngIf=\"allMusic\">\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\"  >\r\n                \r\n                <ion-item *ngFor=\"let music of allMusic\"\r\n                  [ngClass]=\"musicId==music.id?'active':''\"  (click)=\"musicSelect([music.id,music.filename,music.title,music.duration])\">\r\n                  <ion-icon ios=\"ios-play\" md=\"md-play\"></ion-icon>\r\n                  <ion-label>{{music.title}}</ion-label>\r\n                  <ion-text>{{music?.duration ? music?.duration : '00:00' }}</ion-text>\r\n                </ion-item>\r\n\r\n              </ion-list> \r\n            </div>\r\n            <ion-toolbar no-border-top class=\"profile_tabs subprofile_tabs\" *ngIf=\"!allMusic\">\r\n              <ion-segment class=\"ion-no-padding\" scrollable=\"true\" (ionChange)=\"selectMusic($event)\">\r\n                <ion-segment-button value=\"hiphop\" checked>\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"classical\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"edm\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"folk\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"rock\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"jazz\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"indianfolk\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"blues\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"beats\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"trap\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"alternativehiphop\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n            <div [ngSwitch]=\"selectMusicList\" *ngIf=\"!allMusic\">\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'hiphop'\">\r\n                <ion-item (click)=\"musicSelect=1\" [ngClass]=\"musicSelect==1?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=2\" [ngClass]=\"musicSelect==2?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=3\" [ngClass]=\"musicSelect==3?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n                <ion-item (click)=\"musicSelect=4\" [ngClass]=\"musicSelect==4?'active':''\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'classical'\">\r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'edm'\">\r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'folk'\">\r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'rock'\">\r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list lines=\"none\" class=\"ion-no-padding musiclist\" *ngSwitchCase=\"'jazz'\">\r\n                <ion-item class=\"no-data\">\r\n                  <ion-label>No Music Data</ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- <ion-footer class=\"sticky-footer musiclist green\" *ngIf=\"showProgram==3\">   -->\r\n  <!-- <div class=\"musiclist\" *ngIf=\"showProgram==3\">\r\n    <app-audio-player-program [selectedAudio]=[audioFile,musicChanged,audioFilename,audioFileDuration]>\r\n    </app-audio-player-program>\r\n  </div> -->\r\n<!-- </ion-footer> -->");

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
    }
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
            _audio_player_program_audio_player_program_component__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerProgramComponent"], _add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"]],
        entryComponents: [_add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".note {\n  color: #000; }\n\n.users-list {\n  display: flex;\n  width: 100%; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: auto; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list ion-item img:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px; }\n\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.calendar-header ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  text-align: center; }\n\n.calendar-header ion-item:nth-child(2) {\n  display: contents; }\n\n.table > tbody > tr > td.calendar-hour-column {\n  width: 55px; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.ios.main_content {\n  padding-top: 0; }\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px; }\n\nion-segment-button {\n  position: relative; }\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%; }\n\n.video-skeleton {\n  height: 200px; }\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px; }\n\n.swiper-slide {\n  background: #fbfbfb; }\n\nion-slides {\n  height: 190px; }\n\n.top-header {\n  position: fixed; }\n\n.slides-container {\n  height: 78% !important; }\n\n.dayview-allday-label, .calendar-hour-column {\n  width: 45px !important; }\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4; }\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0; }\n\n.programPreview ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n  font-size: 0.90rem; }\n\n.programPreview ion-item ion-list-header {\n    padding-left: 0; }\n\n.programPreview ion-item ion-input {\n    min-width: 50px;\n    border-bottom: 1px solid #d1d1d1;\n    padding: 15px 3px 8px; }\n\n.programPreview ion-label {\n  color: #000; }\n\n.programPreview .radioPreview {\n  display: flex; }\n\n.programPreview .radioPreview ion-item {\n    --background: transparent;\n    --inner-border-width: 0 0 0 0;\n    --padding-start: 0;\n    --inner-padding-end: 0;\n    font-size: 0.90rem;\n    margin-right: 30px; }\n\n.programPreview .radioPreview ion-item ion-radio {\n      margin-right: 10px; }\n\n.programPreview .sticky-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex; }\n\n.programPreview .sticky-footer ion-button {\n    width: 100%;\n    margin: 0;\n    --border-radius: 0;\n    height: 100%;\n    --background: #27a69a; }\n\n.sel-parti-open-item {\n  max-width: 160px; }\n\n.sel-parti-open-item .sc-ion-label-md-h {\n  white-space: unset; }\n\n.prog_btn_list .btn {\n  --padding-start: 2.1em;\n  --padding-end: 2.1em;\n  font-size: 14px;\n  text-transform: uppercase;\n  height: 40px;\n  letter-spacing: 1px; }\n\n.calend_arrow {\n  color: #69bdad !important; }\n\n.prog_btn_list ion-item {\n  display: grid;\n  justify-content: center; }\n\n.date_items {\n  --ion-item-background: none !important;\n  color: #000; }\n\n.date_items ion-icon {\n  --ion-item-background: transparent;\n  color: #000;\n  margin-top: 5px; }\n\n.date_items h6 {\n  margin-right: 5px; }\n\n.top-heading ion-item {\n  --inner-border-width: 0; }\n\nion-item {\n  --inner-border-width: 0; }\n\n.nutriimages-list ion-label {\n  font-size: 0.75rem;\n  margin: 3px 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: block;\n  color: #444; }\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09); }\n\nion-slides {\n  background: transparent;\n  padding: 0 5px; }\n\n.nutriimages-list ion-segment-button {\n  width: 32%;\n  border: none;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f7f7f7;\n  border-radius: 4px; }\n\n.nutriimages-list ion-segment-button:first-child {\n  margin-left: 0; }\n\n.nutriimages-list ion-segment-button img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: 100%; }\n\n.nutriimages-list .segment-button-checked {\n  background: #eaeaea;\n  --color-checked: transparent; }\n\n.nutriimages-list .thumb-checkbox {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.nutriimages-list .thumb-checkbox ion-checkbox {\n  opacity: 0;\n  width: 100%;\n  height: 78px;\n  padding: 0 0; }\n\n.checkboxThumb::after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px; }\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked {\n  opacity: 1;\n  --background-checked:transparent;\n  --border-color-checked:transparent;\n  --size:0;\n  --checkmark-color:transparent; }\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #26a69a;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px; }\n\n.item-list ion-list-header ion-icon {\n  font-size: 1.15rem; }\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0; }\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list img:first-child {\n  margin-left: 0; }\n\n.users-list ion-label {\n  width: 100px; }\n\nion-list {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\nion-list ion-item {\n    font-size: 0.875rem;\n    --padding-end: 16px;\n    -webkit-padding-end: 0;\n            padding-inline-end: 0;\n    --inner-padding-end: 0;\n    --min-height: 44px;\n    --border-color: whitesmoke; }\n\nion-list .descriptionItem ion-item {\n    padding: 0; }\n\n.green-alram-icon {\n  width: 12% !important;\n  position: center !important; }\n\n.monthview-selected {\n  background-color: #3a87ad !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2dyYW0vQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGFkZC1wcm9ncmFtXFxhZGQtcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxXQUFXLEVBQUE7O0FBQ2pCO0VBQVksYUFBYTtFQUFDLFdBQVcsRUFBQTs7QUFDckM7RUFBcUIsa0JBQWE7RUFBTSxhQUFhO0VBQUMsV0FBVyxFQUFBOztBQUNqRTtFQUF5QixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDekc7RUFBcUMsY0FBYyxFQUFBOztBQUNuRDtFQUFVLFdBQVU7RUFBQyxZQUFXO0VBQUMsZUFBZTtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQjtFQUFDLGtCQUFpQjtFQUFDLGFBQVk7RUFBQyx1QkFBc0I7RUFBQyxtQkFBa0I7RUFBQyxTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNMO0VBQWlCLGFBQWE7RUFBQyw4QkFBOEI7RUFBQyxtQkFBbUIsRUFBQTs7QUFDakY7RUFBMEIsa0JBQWdCO0VBQUcsc0JBQW9CO0VBQUcsa0JBQWtCLEVBQUE7O0FBQ3RGO0VBQXVDLGlCQUFpQixFQUFBOztBQUN4RDtFQUE4QyxXQUFXLEVBQUE7O0FBRXpEO0VBQVUsa0JBQWtCO0VBQUMsV0FBVztFQUFDLFVBQVU7RUFBQyxXQUFXLEVBQUE7O0FBQy9EO0VBQVksMEJBQTBCLEVBQUE7O0FBQ3RDO0VBQXFCLHlCQUFhO0VBQWEsc0JBQXNCO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzVGO0VBQStCLFNBQVM7RUFBQyxrQkFBa0I7RUFBQyxpQkFBaUIsRUFBQTs7QUFDN0U7RUFBb0MsV0FBVztFQUFDLFlBQVk7RUFBQyx3Q0FBaUI7RUFBd0Isa0JBQWEsRUFBQTs7QUFDbkg7RUFBNkMsV0FBVyxFQUFBOztBQUd4RDtFQUFrQixjQUFjLEVBQUE7O0FBR2hDO0VBQXNDLFlBQVksRUFBQTs7QUFDbEQ7RUFBbUIsa0JBQWtCLEVBQUE7O0FBQ3JDO0VBQXFDLGtCQUFrQjtFQUFDLFlBQVk7RUFBQyxTQUFTO0VBQUMsVUFBVSxFQUFBOztBQUN6RjtFQUFnQixhQUFhLEVBQUE7O0FBQzdCO0VBQTRELFNBQVM7RUFBQyxZQUFZLEVBQUE7O0FBQ2xGO0VBQWMsbUJBQW1CLEVBQUE7O0FBQ2pDO0VBQVcsYUFBYSxFQUFBOztBQUN4QjtFQUFZLGVBQWUsRUFBQTs7QUFDM0I7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDVyxjQUFhLEVBQUE7O0FBRHhCO0VBRWMsYUFBWSxFQUFBOztBQUUxQjtFQUNhLGtCQUFnQjtFQUFHLHNCQUFvQjtFQUFJLG1CQUFtQjtFQUFLLGtCQUFrQixFQUFBOztBQURsRztJQUV3QixlQUFlLEVBQUE7O0FBRnZDO0lBR2tCLGVBQWU7SUFBQyxnQ0FBZ0M7SUFBQyxxQkFBb0IsRUFBQTs7QUFIdkY7RUFLYyxXQUFVLEVBQUE7O0FBTHhCO0VBTWtCLGFBQWEsRUFBQTs7QUFOL0I7SUFPaUIseUJBQWE7SUFDbEIsNkJBQXFCO0lBQ3JCLGtCQUFnQjtJQUNoQixzQkFBb0I7SUFBRyxrQkFBa0I7SUFBQyxrQkFBa0IsRUFBQTs7QUFWeEU7TUFXc0Isa0JBQWtCLEVBQUE7O0FBWHhDO0VBY21CLGVBQWU7RUFBQyxTQUFTO0VBQUMsT0FBTztFQUFDLGFBQVksRUFBQTs7QUFkakU7SUFlbUIsV0FBVztJQUFDLFNBQVE7SUFBQyxrQkFBZ0I7SUFBRyxZQUFZO0lBQUMscUJBQWEsRUFBQTs7QUFHckY7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxzQkFBZ0I7RUFDaEIsb0JBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksc0NBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtDQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHVCQUFxQixFQUFBOztBQUV6QjtFQUNJLHVCQUFxQixFQUFBOztBQUV6QjtFQUE0QixrQkFBa0I7RUFBQyxhQUFhO0VBQUMsMEJBQTBCO0VBQUMsaUJBQWlCO0VBQUMsZ0JBQWdCO0VBQUMsY0FBYztFQUFDLFdBQVcsRUFBQTs7QUFDcko7RUFBWSwrQ0FBK0MsRUFBQTs7QUFDM0Q7RUFBVyx1QkFBdUI7RUFBQyxjQUFjLEVBQUE7O0FBQ2pEO0VBQXFDLFVBQVU7RUFBQyxZQUFZO0VBQUMsVUFBVTtFQUFDLGtCQUFnQjtFQUFHLGdCQUFjO0VBQU8sYUFBYTtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0IsRUFBQTs7QUFDOU47RUFBaUQsY0FBYyxFQUFBOztBQUMvRDtFQUF5QyxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQUMsZUFBZSxFQUFBOztBQUM1RTtFQUEwQyxtQkFBbUI7RUFBQyw0QkFBZ0IsRUFBQTs7QUFDOUU7RUFBa0Msa0JBQWtCO0VBQUMsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDN0U7RUFBK0MsVUFBUztFQUFDLFdBQVU7RUFBQyxZQUFXO0VBQUMsWUFBVyxFQUFBOztBQUUzRjtFQUFzQixXQUFXO0VBQUMsV0FBVztFQUFDLFlBQVk7RUFBQyx5QkFBeUI7RUFBQyxjQUFjO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCO0VBQUMsUUFBUTtFQUFDLFNBQVMsRUFBQTs7QUFDNUo7RUFBZ0UsVUFBUztFQUFDLGdDQUFxQjtFQUFZLGtDQUF1QjtFQUFZLFFBQU87RUFBRSw2QkFBa0IsRUFBQTs7QUFDeks7RUFBc0UsV0FBVTtFQUFDLFdBQVU7RUFBQyxZQUFXO0VBQUMsbUJBQWtCO0VBQUMsY0FBYTtFQUFDLGtCQUFpQjtFQUFDLGtCQUFpQjtFQUFDLFFBQU87RUFBQyxTQUFRLEVBQUE7O0FBQzdMO0VBQW9DLGtCQUFrQixFQUFBOztBQUV0RDtFQUFZLGtCQUFhO0VBQU0sYUFBYTtFQUFDLG1CQUFtQjtFQUFDLGFBQWEsRUFBQTs7QUFDOUU7RUFBZ0IsV0FBVztFQUFDLFlBQVk7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ2hHO0VBQTRCLGNBQWMsRUFBQTs7QUFDMUM7RUFBc0IsWUFBWSxFQUFBOztBQUVsQztFQUFTLHlCQUF5QjtFQUFDLDRCQUE0QixFQUFBOztBQUEvRDtJQUNhLG1CQUFtQjtJQUFDLG1CQUFjO0lBQU0sc0JBQXFCO1lBQXJCLHFCQUFxQjtJQUFDLHNCQUFvQjtJQUFHLGtCQUFhO0lBQU0sMEJBQWUsRUFBQTs7QUFEcEk7SUFHaUIsVUFBVSxFQUFBOztBQUczQjtFQUFrQixxQkFBcUI7RUFBRSwyQkFBMkIsRUFBQTs7QUFDcEU7RUFBb0Isb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZ3JhbS9hZGQtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZXtjb2xvcjogIzAwMDt9XHJcbi51c2Vycy1saXN0e2Rpc3BsYXk6IGZsZXg7d2lkdGg6IDEwMCU7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDt3aWR0aDogYXV0bzt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZ3t3aWR0aDogNDJweDtoZWlnaHQ6IDQycHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZzpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi52aWV3LWFsbHt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O21heC13aWR0aDogNDJweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmMWYwZjA7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjogMDttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG5cclxuLmNhbGVuZGFyLWhlYWRlcntkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczogY2VudGVyO31cclxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbXstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uY2FsZW5kYXItaGVhZGVyIGlvbi1pdGVtOm50aC1jaGlsZCgyKXtkaXNwbGF5OiBjb250ZW50czt9XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5jYWxlbmRhci1ob3VyLWNvbHVtbnt3aWR0aDogNTVweDt9XHJcblxyXG5pb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO3RvcDogLTMwcHg7ei1pbmRleDogOTk7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNGRkYgIWltcG9ydGFudDt3aWR0aDogYXV0byAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbjogMDttYXJnaW4tcmlnaHQ6IDIwcHg7b3ZlcmZsb3c6IGluaGVyaXQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbnt3aWR0aDogMjVweDtoZWlnaHQ6IDI1cHg7LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDstLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbntjb2xvcjogI0ZGRjt9XHJcblxyXG4vLyBpb3MgY3NzXHJcbi5pb3MubWFpbl9jb250ZW50e3BhZGRpbmctdG9wOiAwO31cclxuXHJcbi8vIGlvbi1za2VsZXRvbi10ZXh0IGNzc1xyXG4ubXVzaWNsaXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e2hlaWdodDogMzBweDt9XHJcbmlvbi1zZWdtZW50LWJ1dHRvbntwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG5pb24tc2VnbWVudC1idXR0b24gaW9uLXNrZWxldG9uLXRleHR7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogMTAwJTttYXJnaW46IDA7d2lkdGg6IDk1JTt9XHJcbi52aWRlby1za2VsZXRvbntoZWlnaHQ6IDIwMHB4O31cclxucCBpb24tc2tlbGV0b24tdGV4dCwgLnJhZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7bWFyZ2luOiAwO2hlaWdodDogMjBweDt9XHJcbi5zd2lwZXItc2xpZGV7YmFja2dyb3VuZDogI2ZiZmJmYjt9XHJcbmlvbi1zbGlkZXN7aGVpZ2h0OiAxOTBweDt9XHJcbi50b3AtaGVhZGVye3Bvc2l0aW9uOiBmaXhlZDt9XHJcbi5zbGlkZXMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzglICFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4uZGF5dmlldy1hbGxkYXktbGFiZWwsIC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XHJcbiAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuaW9uLWl0ZW0uZmxvYXRpbmdJdGVte1xyXG5cdGlvbi1sYWJlbHtjb2xvcjojYTVhNGE0fVxyXG5cdGlvbi10ZXh0YXJlYXttYXJnaW4tdG9wOjB9XHJcbn1cclxuLnByb2dyYW1QcmV2aWV3e1xyXG4gICAgaW9uLWl0ZW17LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7IG1hcmdpbi1ib3R0b206IDE1cHg7ICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcclxuICAgICAgICBpb24tbGlzdC1oZWFkZXJ7cGFkZGluZy1sZWZ0OiAwO31cclxuICAgICAgICBpb24taW5wdXR7bWluLXdpZHRoOiA1MHB4O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO3BhZGRpbmc6MTVweCAzcHggOHB4fVxyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVse2NvbG9yOiMwMDB9XHJcbiAgICAucmFkaW9QcmV2aWV3e2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtmb250LXNpemU6IDAuOTByZW07bWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBpb24tcmFkaW97bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RpY2t5LWZvb3Rlcntwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwO2xlZnQ6IDA7ZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGlvbi1idXR0b257d2lkdGg6IDEwMCU7bWFyZ2luOjA7LS1ib3JkZXItcmFkaXVzOiAwO2hlaWdodDogMTAwJTstLWJhY2tncm91bmQ6ICMyN2E2OWE7fVxyXG4gICAgfVxyXG59XHJcbi5zZWwtcGFydGktb3Blbi1pdGVte1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxufVxyXG4uc2VsLXBhcnRpLW9wZW4taXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG59XHJcbi5wcm9nX2J0bl9saXN0IC5idG57XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIuMWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMi4xZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbn1cclxuLmNhbGVuZF9hcnJvd3tcclxuICAgIGNvbG9yOiAjNjliZGFkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9nX2J0bl9saXN0IGlvbi1pdGVte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kYXRlX2l0ZW1zIHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmRhdGVfaXRlbXMgaW9uLWljb24ge1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kYXRlX2l0ZW1zIGg2e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLnRvcC1oZWFkaW5nIGlvbi1pdGVte1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufVxyXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO21hcmdpbjogM3B4IDA7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7bGV0dGVyLXNwYWNpbmc6IDA7Zm9udC13ZWlnaHQ6IDQwMDtkaXNwbGF5OiBibG9jaztjb2xvcjogIzQ0NDt9XHJcbi52aWRlby1jYXJke2JveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO31cclxuaW9uLXNsaWRlc3tiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtwYWRkaW5nOiAwIDVweDt9XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbnt3aWR0aDogMzIlO2JvcmRlcjogbm9uZTtwYWRkaW5nOiAwOy0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwOyAgICBtYXJnaW46IDAgM3B4O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtiYWNrZ3JvdW5kOiAjZjdmN2Y3O2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbiBpbWd7b2JqZWN0LWZpdDogY29udGFpbjttYXgtd2lkdGg6IDEwMCU7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAuc2VnbWVudC1idXR0b24tY2hlY2tlZHtiYWNrZ3JvdW5kOiAjZWFlYWVhOy0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3h7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTt9XHJcbi5udXRyaWltYWdlcy1saXN0IC50aHVtYi1jaGVja2JveCBpb24tY2hlY2tib3h7b3BhY2l0eTowO3dpZHRoOjEwMCU7aGVpZ2h0Ojc4cHg7cGFkZGluZzowIDB9XHJcbi8vIC5jaGVja2JveFRodW1ie2Rpc3BsYXk6IGNvbnRlbnRzO31cclxuLmNoZWNrYm94VGh1bWI6OmFmdGVye2NvbnRlbnQ6ICcnO3dpZHRoOiAxNnB4O2hlaWdodDogMTZweDtib3JkZXI6IDJweCBzb2xpZCAjN2Q3ZDdkO2Rpc3BsYXk6IGJsb2NrO2JvcmRlci1yYWRpdXM6IDUwJTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA1cHg7bGVmdDogNXB4O31cclxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94IGlvbi1jaGVja2JveC5jaGVja2JveC1jaGVja2Vke29wYWNpdHk6MTstLWJhY2tncm91bmQtY2hlY2tlZDp0cmFuc3BhcmVudDstLWJvcmRlci1jb2xvci1jaGVja2VkOnRyYW5zcGFyZW50Oy0tc2l6ZTowOy0tY2hlY2ttYXJrLWNvbG9yOnRyYW5zcGFyZW50fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3ggaW9uLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQ6YWZ0ZXJ7Y29udGVudDonJzt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JhY2tncm91bmQ6IzI2YTY5YTtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7bGVmdDo1cHh9XHJcbi5pdGVtLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1pY29ue2ZvbnQtc2l6ZTogMS4xNXJlbTt9XHJcblxyXG4udXNlcnMtbGlzdHstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbjogNnB4IDA7fVxyXG4udXNlcnMtbGlzdCBpbWd7d2lkdGg6IDM2cHg7aGVpZ2h0OiAzNnB4O29iamVjdC1maXQ6IGNvdmVyO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4udXNlcnMtbGlzdCBpbWc6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udXNlcnMtbGlzdCBpb24tbGFiZWx7d2lkdGg6IDEwMHB4O31cclxuXHJcbmlvbi1saXN0e3BhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVte2ZvbnQtc2l6ZTogMC44NzVyZW07LS1wYWRkaW5nLWVuZDogMTZweDtwYWRkaW5nLWlubGluZS1lbmQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDstLW1pbi1oZWlnaHQ6IDQ0cHg7LS1ib3JkZXItY29sb3I6IHdoaXRlc21va2U7fVxyXG4gICAgLmRlc2NyaXB0aW9uSXRlbXtcclxuICAgICAgICBpb24taXRlbXtwYWRkaW5nOiAwO31cclxuICAgIH1cclxufVxyXG4uZ3JlZW4tYWxyYW0taWNvbnt3aWR0aDogMTIlICFpbXBvcnRhbnQ7IHBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDt9XHJcbi5tb250aHZpZXctc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjogIzNhODdhZCAhaW1wb3J0YW50O30iXX0= */");

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
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
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























// import { VideoEditor } from '@ionic-native/video-editor/ngx';
const baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;
let AddProgramPage = class AddProgramPage {
    constructor(commonService, alertCtrl, toastCtrl, locale, modalCtrl, datePipe, navCtrl, media, fb, actionSheetController, mediaCapture, programService, router, platform, pickerController, musicService, file, previewAnyFile, transfer, 
    // private videoEditor: VideoEditor,
    camera, modalController) {
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
        this.sliderOpts = {
            zoom: true,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 5,
        };
        this.showProgram = 1;
        this.repetatedDateCopy = [];
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
            ]
        };
        this.musicTypes = 'music';
        this.selectMusicList = 'hiphop';
        this.submitted = false;
        this.audioFile = 'into_20180418_173147_audio.mp3';
        this.baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_12__["Config"].ApiUrl;
        this.musicChanged = 0;
        let d = new Date();
        this.currentHrs = d.getHours();
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
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
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
    slidePrev(slides) {
        this.slides.slidePrev();
    }
    slideNext(slides) {
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
        // this.repetatedDate = this.repetatedDateCopy;
        console.log(this.repetatedDateCopy.length);
        if (this.programDetail) {
            this.commonService.presentToast('only one program can create at a time');
            return true;
        }
        this.newEvent = event;
        let cEvent = event.selectedTime;
        console.log(cEvent.getDate());
        console.log(new Date().getDate());
        if ((cEvent.getDate() < (new Date().getDate()) && cEvent.getMonth() <= (new Date().getMonth())) || cEvent.getMonth() < (new Date().getMonth())) {
            this.commonService.presentToast('Sorry, this is past time');
            return;
        }
        this.dateObj = new Date(event.selectedTime + 'Z');
        this.noEvent = true;
        console.log(this.selectDate);
        this.selectDate.forEach(el => {
            console.log(el.getDate());
            console.log(this.dateObj.getDate());
            if (el.getDate() == this.dateObj.getDate() && el.getMonth() == this.dateObj.getMonth()) {
                console.log('same date');
                this.noEvent = false;
                return false;
            }
        });
        if (this.timeSlot == true) {
            if (this.newEvent.events.length > 0) {
                if (this.noEvent == true) {
                    this.newEvent.events.forEach(el => {
                        console.log(this.hours);
                        console.log(el.startTime.getHours());
                        this.dateObj.setHours((this.hours), parseInt(this.minutes));
                        if (el.startTime.getHours() == this.hours || el.endTime.getHours() == this.hours) {
                            console.log(el.startTime.getTime() + 'event time');
                            this.noEvent = false;
                            console.log(el.startTime.getTime());
                            console.log(this.dateObj.getTime());
                            console.log(el.endTime);
                            // if ( (el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= nd.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {
                            // if ( (el.startTime.getTime() > this.dateObj.getTime() && el.endTime.getTime() <= this.dateObj.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) { 
                            if ((el.startTime.getTime() > this.dateObj.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {
                                this.noEvent = true;
                                console.log('newww');
                            }
                            else {
                                this.noEvent = false;
                                this.selectNewTime();
                                console.log('exist');
                                // return ;
                            }
                        }
                        // else{
                        //   this.noEvent = true;
                        // }
                    });
                }
            }
            // else {
            //     this.noEvent = true;
            //   }
            console.log(this.noEvent);
            if (this.noEvent == true) {
                console.log(this.hours);
                this.dateObj.setHours((this.hours), parseInt(this.minutes));
                if ((this.dateObj.getDate() == (new Date().getDate()) && this.dateObj.getMonth() <= (new Date().getMonth())) && this.dateObj.getHours() < (new Date().getHours())) {
                    this.commonService.presentToast('Sorry, this is past time');
                    this.noEvent = false;
                    return;
                }
                this.selectDate.push(this.dateObj);
                // this.selectDate.forEach(el => {
                this.repetatedDateCopy.push({ 'date': this.dateObj, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' });
                this.repetatedDate.push(this.dateObj);
            }
            else {
                // this.selectTimeSlot();
                // this.selectNewTime();
            }
        }
        console.log(this.timeSlot);
        console.log(this.noEvent);
        // else{
        //   this.selectTimeSlot();
        // } 
        // this.repetatedDate = this.repetatedDateCopy;
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
                                        // alert('same date');
                                        this.noEvent = false;
                                        return;
                                    }
                                });
                                this.progDuration = data.duration;
                                console.log(data);
                                this.dateObj.setHours((this.hours), parseInt(this.minutes));
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
                                // alert(this.noEvent);
                                if (this.noEvent == true) {
                                    // alert('hj');
                                    // var nd = this.dateObj;
                                    // nd.setHours((this.hours),  parseInt(this.minutes)+parseInt(this.progDuration));
                                    // this.progEndTime = nd;
                                    this.selectDate.push(this.dateObj);
                                    this.repetatedDateCopy.push({ 'date': this.dateObj, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' });
                                    this.repetatedDate.push(this.dateObj);
                                    this.timeSlot = true;
                                    // this.repetatedDate = this.repetatedDateCopy;
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
        var hrs = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
        for (let i = 1; i <= 60; i++) {
            arr.push({ text: i, value: i });
        }
        const defaultColumnOptions = [
            {
                name: 'Hours',
                options: arr
            }
        ];
        const buttons = [
            {
                text: 'Program is already assign for this time slot, Select new minute ',
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
                    var hours = value.Hours.value;
                    console.log(hours);
                    // this.dateObj.setMinutes(hours);
                    console.log(this.dateObj);
                    // var newEndTime = new Date(this.eventList.selectedTime + 'Z');
                    var newDateTime = this.dateObj;
                    // this.dateObj.setHours((this.hours),  parseInt(this.minutes));
                    var nd = newDateTime.setHours((this.hours), parseInt(hours));
                    this.progEndTime = nd;
                    console.log(this.progEndTime);
                    console.log(nd);
                    this.newEvent.events.forEach(el => {
                        if (el.startTime.getHours() == this.dateObj.getHours() || el.endTime.getHours() == this.dateObj.getHours()) {
                            console.log(el.startTime.getTime());
                            console.log(el.endTime.getTime());
                            console.log(this.dateObj.getTime());
                            if ((el.startTime.getTime() > this.dateObj.getTime() && el.startTime.getTime() >= this.progEndTime.getTime()) || (el.endTime.getTime() <= this.dateObj.getTime())) {
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
                        this.repetatedDateCopy.push({ 'date': this.dateObj, 'equipments': [], 'nutrition_id': [], 'video': '', 'description': '' });
                    }
                    hours = '';
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
                    this.showProgram = 3;
                    this.ProgramInserted = true;
                }
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
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        }, (err) => {
            alert(err);
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
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
        }, (err) => {
            alert(err);
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
            alert(err);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSlides"])
], AddProgramPage.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"])
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
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0; }\n\n.audio-list > div {\n  display: flex; }\n\n.audio-list > * {\n  display: inline-block; }\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px; }\n\nion-range ion-label {\n  margin-right: 50px; }\n\nion-fab-button {\n  min-width: 40px; }\n\nion-fab-button + div {\n  width: 100%; }\n\nion-fab-button + div > div {\n  display: flex; }\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 50px; }\n\n.music-spinner {\n  --color: #26a69a; }\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 28px; }\n\n.music-timer-fav ion-icon {\n  margin: 0 5px; }\n\n.musicbar {\n  padding-right: 50px; }\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.musicWrapper ion-toolbar .audio-listInner {\n    display: block;\n    background: #26a69a;\n    height: 56px;\n    margin-top: 10px; }\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n      position: absolute;\n      width: 90%;\n      top: 2px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n      margin-top: 20px;\n      margin-left: 10px;\n      padding-left: 50px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n        color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGF1ZGlvLXBsYXllci1wcm9ncmFtXFxhdWRpby1wbGF5ZXItcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFVBQVU7RUFBQyxnQkFBYztFQUFHLG1CQUFpQixFQUFBOztBQUN6RDtFQUFnQixhQUFhLEVBQUE7O0FBQzdCO0VBQWMscUJBQXFCLEVBQUE7O0FBQ25DO0VBQVUsaUJBQVk7RUFBTSxhQUFTLEVBQUE7O0FBQ3JDO0VBQW9CLGtCQUFrQixFQUFBOztBQUN0QztFQUFlLGVBQWUsRUFBQTs7QUFDOUI7RUFBbUIsV0FBVyxFQUFBOztBQUM5QjtFQUF1QixhQUFhLEVBQUE7O0FBQ3BDO0VBQWtDLFdBQVc7RUFBQyxpQkFBaUIsRUFBQTs7QUFDL0Q7RUFBZSxnQkFBUSxFQUFBOztBQUV2QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUViO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNnQixrQkFBZ0I7RUFBRyxnQkFBYyxFQUFBOztBQURqRDtJQUV5QixjQUFjO0lBQUMsbUJBQW1CO0lBQUMsWUFBWTtJQUFDLGdCQUFnQixFQUFBOztBQUZ6RjtNQUkwQixrQkFBa0I7TUFBQyxVQUFVO01BQUMsUUFBUSxFQUFBOztBQUpoRTtNQU13QixnQkFBZ0I7TUFBQyxpQkFBaUI7TUFBQyxrQkFBa0IsRUFBQTs7QUFON0U7UUFPMEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vYXVkaW8tcGxheWVyLXByb2dyYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW8tbGlzdHtwYWRkaW5nOiAwOy0tcGFkZGluZy10b3A6IDA7LS1wYWRkaW5nLWJvdHRvbTogMDt9XHJcbi5hdWRpby1saXN0PmRpdntkaXNwbGF5OiBmbGV4O31cclxuLmF1ZGlvLWxpc3Q+KntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG5pb24tcmFuZ2V7LS1rbm9iLXNpemU6IDE4cHg7LS1oZWlnaHQ6IDJweDt9XHJcbmlvbi1yYW5nZSBpb24tbGFiZWx7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuaW9uLWZhYi1idXR0b257bWluLXdpZHRoOiA0MHB4O31cclxuaW9uLWZhYi1idXR0b24rZGl2e3dpZHRoOiAxMDAlO31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdntkaXNwbGF5OiBmbGV4O31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdiAraW9uLWxhYmVse2NvbG9yOiAjRkZGO21hcmdpbi1sZWZ0OiA1MHB4O31cclxuLm11c2ljLXNwaW5uZXJ7LS1jb2xvcjogIzI2YTY5YTt9XHJcblxyXG4ubXVzaWMtdGltZXItZmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAyOHB4O1xyXG59XHJcbi5tdXNpYy10aW1lci1mYXYgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ubXVzaWNiYXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4ubXVzaWNXcmFwcGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLmF1ZGlvLWxpc3RJbm5lcntkaXNwbGF5OiBibG9jaztiYWNrZ3JvdW5kOiAjMjZhNjlhO2hlaWdodDogNTZweDttYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAubXVzaWNiYXJ7XHJcbiAgICAgICAgICAgICAgICBpb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA5MCU7dG9wOiAycHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tdXNpYy1uYW1le21hcmdpbi10b3A6IDIwcHg7bWFyZ2luLWxlZnQ6IDEwcHg7cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse2NvbG9yOiAjRkZGO31cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

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