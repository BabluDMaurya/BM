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


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==1\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Add Program</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <ion-label (click)=\"nextStep(2)\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noleft-margin\" (click)=\"openGallery()\">\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-image\" md=\"md-image\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Library</ion-card-title>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card class=\"upload-box ion-noright-margin\" (click)=\"selectMedia()\">\r\n\r\n          <div class=\"upload_icon\">\r\n            <ion-icon ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\r\n          </div>\r\n          <ion-card-title>Camera</ion-card-title>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"12\"  class=\"ion-no-padding video_col\" *ngIf=\"videoFileSelected\">\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n        <ion-slide >\r\n          \r\n          <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n          <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n        </ion-slide>\r\n        </ion-slides>  \r\n      </ion-col>   -->\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"gallaryImgPath?.length>0 || videoFileSelected\">\r\n        <ion-button (click)=\"slidePrev()\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        \r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\" *ngFor=\"let imgpath of gallaryImgPath; let i=index;\">\r\n            <img src=\"{{imgpath}}\" />\r\n            <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removeImg(i)\"></ion-icon>\r\n          </ion-slide>\r\n          <ion-slide *ngIf=\"isVideoSelected\">\r\n            <img *ngIf=\"videoFileSelected\" (click)=\"filepreview()\" class=\"mb-10\" height=\"250px\" src=\"../../assets/images/demo3.jpg\">\r\n            <ion-icon *ngIf=\"videoFileSelected\" ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"removefilepreview()\" color=\"danger\" class=\"btn-close\"></ion-icon>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext()\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-item-sliding *ngFor=\"let f of files\">\r\n        <ion-item (click)=\"openFile(f)\">\r\n          <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\r\n          <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\r\n          <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\r\n\r\n          <ion-label class=\"ion-text-wrap\">\r\n            {{ f.name }}\r\n            <p>{{ f.fullPath }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n      <!-- \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-button (click)=\"slidePrev(slides)\" class=\"slidebtns slideBack\">\r\n          <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n        </ion-button>\r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider mb-10\" #mySlider>\r\n          <ion-slide (click)=\"showdetails()\">\r\n            <img src=\"../../assets/images/demo1.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo2.jpg\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"../../assets/images/demo3.jpg\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-button (click)=\"slideNext(slides)\" class=\"slidebtns slideNext\">\r\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <form class=\"nutrition-form\" [formGroup]=\"programForm\">\r\n          <ion-list>\r\n            <ion-item class=\"floatingItem\">\r\n              <ion-label position=\"floating\">Title <span>*</span></ion-label>\r\n              <ion-input class=\"form-control\" formControlName=\"programTitle\" [ngClass]=\"{ 'is-invalid': submitted && f.programTitle.errors }\">\r\n              </ion-input>\r\n            </ion-item>\r\n            \r\n            <ng-container *ngFor=\"let validation of validation_messages.programTitle\">\r\n              <span class=\"error-message\"\r\n                *ngIf=\"(submitted || programForm.get('programTitle').touched) && programForm.get('programTitle').hasError(validation.type)\">{{ validation.message }}</span>\r\n            </ng-container>\r\n            <ion-item class=\"mb-10 floatingItem\">\r\n              <ion-label position=\"floating\">Description </ion-label>\r\n              <ion-textarea class=\"form-control\" formControlName=\"programDescription\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Program Type</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group class=\"full-width radio-list\" formControlName=\"programType\">\r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Private - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Group - Oneway</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item> -->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Private</ion-label>\r\n                      <!-- <ion-label>One to One</ion-label> -->\r\n                      <!-- <ion-label>Private - Twoway</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"3\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Group</ion-label>\r\n                      <!-- <ion-label>Many to Many</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"4\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Broadcast</ion-label>\r\n                      <!-- <ion-label>One to Many</ion-label> -->\r\n                      <ion-radio slot=\"start\" value=\"5\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label>Video</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"6\" formControlName=\"programType\"></ion-radio>\r\n                    </ion-item>\r\n                    <!-- <ion-item lines=\"none\">\r\n                      <ion-label>Nutrition</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"7\" formControlName=\"programType\" disabled=\"true\"></ion-radio>\r\n                    </ion-item> -->\r\n                  </ion-radio-group>\r\n                  <ng-container *ngFor=\"let validation of validation_messages.programType\">\r\n                    <span class=\"error-message\"\r\n                      *ngIf=\"(submitted || programForm.get('programType').touched) && programForm.get('programType').hasError(validation.type)\">{{ validation.message }}</span>\r\n                  </ng-container>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                      ut labore et dolore magna aliqua.\r\n                    </ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Select Praticipants</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"participantsType\">\r\n                    <ion-item lines=\"none\" (click)=\"userModal()\">\r\n                      <ion-label>Exclusive</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" formControlName=\"participantsType\"\r\n                        [disabled]=\"f.programType.value==5 || !f.programType.value?true:false\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\" (click)=\"clearExcl()\">\r\n                      <ion-label>Open</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\" checked formControlName=\"participantsType\"></ion-radio>\r\n                    </ion-item>\r\n                    <ng-container *ngFor=\"let validation of validation_messages.participantsType\">\r\n                      <span class=\"error-message\"\r\n                        *ngIf=\"(submitted || programForm.get('participantsType').touched) && programForm.get('participantsType').hasError(validation.type)\">{{ validation.message }}</span>\r\n                    </ng-container>\r\n                  </ion-radio-group>\r\n                </ion-col>\r\n              <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-text>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                    ut labore et dolore magna aliqua.\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item class=\"mb-10\" *ngIf=\"this.programForm.controls.participantsType.value == 2\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Share Program On Feed</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"feedStatus\">\r\n                    <ion-item lines=\"none\" >\r\n                      <ion-label>Yes</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" [checked]=\"true\" formControlName=\"feedStatus\"\r\n                        ></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\">\r\n                      <ion-label>No</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\"  formControlName=\"feedStatus\"></ion-radio>\r\n                    </ion-item>\r\n                   \r\n                  </ion-radio-group>\r\n                </ion-col>\r\n              <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              </ion-col>\r\n              </ion-row>  \r\n            </ion-item>\r\n            <ion-item class=\"mb-10\">\r\n              <ion-row>\r\n                <ion-list-header class=\"grey-header\">\r\n                  <ion-label>Chat room for program</ion-label>\r\n                </ion-list-header>\r\n                <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                  <ion-radio-group lines=\"none\" class=\"full-width radio-list\" formControlName=\"chatStatus\">\r\n\r\n                    <ion-item lines=\"none\" >\r\n                      <ion-label>Enable</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"1\" checked formControlName=\"chatStatus\"\r\n                        ></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item lines=\"none\" class=\"mb-10 sel-parti-open-item\">\r\n                      <ion-label>Disable</ion-label>\r\n                      <ion-radio slot=\"start\" value=\"2\"  formControlName=\"chatStatus\"></ion-radio>\r\n                    </ion-item>\r\n                    <ng-container *ngFor=\"let validation of validation_messages.chatStatus\">\r\n                      <span class=\"error-message\"\r\n                        *ngIf=\"(submitted || programForm.get('chatStatus').touched) && programForm.get('chatStatus').hasError(validation.type)\">{{ validation.message }}</span>\r\n                    </ng-container>\r\n                  </ion-radio-group>\r\n                </ion-col>\r\n              <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-text>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                    ut labore et dolore magna aliqua.\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-col>\r\n              </ion-row>  \r\n            </ion-item>\r\n            <!-- <ion-item>\r\n              <ion-label>Create Chat room for program</ion-label>\r\n              <ion-toggle [disabled]='false' formControlName=\"chatStatus\"  [(ngModel)]=\"toggleValue\"  slot=\"end\"></ion-toggle>\r\n            </ion-item> -->\r\n            \r\n            <ion-item class=\"mb-10\" *ngIf=\"modalData?.length>0\">\r\n              <ion-list lines=\"none\" class=\"users-list\">\r\n                <ion-item  *ngFor=\"let user of modalData\" >\r\n                  <img src=\"{{profileUrl}}{{user.bios.profile_pic}}\"  *ngIf=\"user.bios.profile_pic\" (click)=\"userList()\"/>\r\n                  <img src=\"../../assets/images/user.png\"  *ngIf=\"!user.bios.profile_pic\" (click)=\"userList()\"/>\r\n                   <!-- <ion-label class=\"view-all\" (click)=\"userList()\">+2</ion-label> -->\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==2\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"backToFirst()\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Select Date & Time</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n          <!-- <ion-label (click)=\"toLastScreen()\" class=\"text-green\">Next</ion-label> -->\r\n          <ion-label *ngIf=\"repetatedDateCopy.length > 0\" (click)=\"toPrevScreen()\" class=\"text-green\">Next</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <ion-row class=\"ion-padding-horizontal main_content\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <!-- Move back one screen of the slides -->\r\n        <ion-list lines=\"none\" class=\"calendar-header\">\r\n          <ion-item class=\"ion-text-left\">\r\n            <ion-button class=\"calend_arrow\" fill=\"clear\" (click)=\"back()\">\r\n              <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-title>{{ viewTitle }}</ion-title>\r\n          </ion-item>\r\n          <!-- Move forward one screen of the slides -->\r\n          <ion-item class=\"ion-text-right\">\r\n            <ion-button class=\"calend_arrow \" fill=\"clear\" (click)=\"next()\">\r\n              <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n        <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\r\n          scrollToHour=\"{{currentHrs}}\"  (onEventSelected)=\"onEventSelected($event)\"\r\n          (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" startHour=\"0\"\r\n          endHour=\"24\" step=\"1\"  class=\"calendar-table swiper-container\"></calendar>\r\n          <!-- <ion-datetime #dateTime1 displayFormat=\"mm\"></ion-datetime> -->\r\n\r\n      </ion-col>\r\n\r\n      <!-- <ion-list-header  *ngIf=\"repetatedDateCopy.length <= 0\" class=\" green green-alram-icon text-white\"> -->\r\n        <ion-list-header class=\"green-alram-icon\">\r\n          <ion-icon ios=\"ios-add\" md=\"md-add\" (click)=\"addLiveProgram()\" style=\"width: 1.5rem; height: 1.5rem;\"></ion-icon>\r\n        </ion-list-header>\r\n\r\n      <ion-list-header class=\" dateTimePopUp green green-alram-icon text-white\" style=\"display: none;\">\r\n        <div class='showDateTime'>\r\n          <ion-datetime display-format=\"h:mm A\" #picker  picker-format=\"h:mm A\"   id=\"dat\" [(ngModel)]=\"myDate\" (ngModelChange)=\"showdate()\" ></ion-datetime>\r\n        </div>\r\n      </ion-list-header>   \r\n      <div class=\"program__card\" *ngFor=\"let date of repetatedDateCopy let i = index\">\r\n        <ion-list class=\"width-full\"  >\r\n          <!-- <div *ngIf=\"date.date == dateObj\">  -->\r\n          <!-- <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n            {{date.date | date :'medium'}}\r\n            <div class=\"toggleDiv\"  (click)=\"toggleIcon(item)\"> -->\r\n              <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\" (click)=\"toggleIcon(item)\" checked={{date.is_live}}  slot=\"end\"></ion-toggle>\r\n              <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"toggleIcon(item)\" [ngClass]=\"{'active': item.active}\"></ion-icon> -->\r\n                <!-- <ion-label class=\"live\"  (ionChange)=\"activatePopup(i)\"   [ngClass]=\"{'active': item.active}\">LIVE</ion-label>\r\n            </div>\r\n            <div class=\"calender_green_bottom\"> -->\r\n              <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\"  checked={{date.is_live}}  slot=\"end\"></ion-toggle> -->\r\n              <!-- <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"activatePopup(i)\" [ngClass]=\"{'active': date.is_live}\"></ion-icon>\r\n              <ion-icon ios=\"ios-construct\" md=\"md-construct\" class=\"ion-margin-start\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n              <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n              </ion-icon>\r\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-close\" md=\"md-close-circle\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\"></ion-icon> -->\r\n            <!-- </div>\r\n            \r\n          </ion-list-header> -->\r\n          <ion-list-header class=\"ion-padding-horizontal green text-white\">\r\n            <div class=\"toggleDiv\"  (click)=\"toggleIcon(item)\">\r\n              <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\" (click)=\"toggleIcon(item)\" checked={{date.is_live}}  slot=\"end\"></ion-toggle>\r\n              <ion-icon class=\"live-icon\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"toggleIcon(item)\" [ngClass]=\"{'active': item.active}\"></ion-icon> -->\r\n                <!-- <ion-label class=\"live\"  (ionChange)=\"activatePopup(i)\"   [ngClass]=\"{'active': item.active}\"></ion-label> -->\r\n                <ion-label class=\"live\" (click)=\"openStart(i)\" (ionChange)=\"activatePopup(i)\"   [ngClass]=\"{'active': date.is_live}\"></ion-label>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"title\">\r\n              {{date.date | date :'mediumDate'}} \r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"calender_green_bottom\">\r\n              <!-- <ion-toggle [disabled] = '' (ionChange)=\"activatePopup(i)\"  checked={{date.is_live}}  slot=\"end\"></ion-toggle> -->\r\n              <!-- <ion-icon class=\"live-icon\" (click)=\"picker.open()\" src=\"../../assets/images/live-video.svg\" (ionChange)=\"activatePopup(i)\"   (click)=\"activatePopup(i)\" [ngClass]=\"{'active': date.is_live}\"></ion-icon> -->\r\n              \r\n              <ion-icon ios=\"ios-fitness\" md=\"md-fitness\" class=\"ion-margin-start\" (click)=\"addEquipments2(1,date.equipments,i)\"></ion-icon>\r\n              <ion-icon ios=\"ios-restaurant\" md=\"md-restaurant\" class=\"ion-margin-start\" (click)=\"addEquipments2(2,date.nutrition_id,i)\">\r\n              </ion-icon>\r\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\" class=\"ion-margin-start\" (click)=\"addVideo(item,i)\"></ion-icon>\r\n              <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" class=\"ion-margin-start\" [routerLink]=\"['/add-program']\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-close\" md=\"md-close-circle\" class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\"></ion-icon> -->\r\n            </div>\r\n            \r\n          </ion-list-header>\r\n    \r\n          <ion-item *ngIf=\"date?.equipments.length>0\">\r\n            <ion-label style=\"overflow: initial;\">Equipments :</ion-label>\r\n            <div class=\"users-list\" *ngIf=\"date?.equipments.length>0;else no_equipment\">  \r\n              <img src=\"../../assets/images/demo1.jpg\" *ngFor=\"let item of date?.equipments\" />\r\n            </div>\r\n            <!-- <ng-template #no_equipment>No Equipment Selected</ng-template> -->\r\n          </ion-item>\r\n          <ion-item *ngIf=\"date.nutrition_id.length > 0\">\r\n            <ion-label style=\"overflow: initial;\">Nutritions :</ion-label>\r\n            <div class=\"users-list\" *ngIf=\"date.nutrition_id.length>0;else no_nutrition\">\r\n              <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.nutrition_id\" />\r\n            </div>\r\n            <!-- <ng-template #no_nutrition>No Nutrition Selected</ng-template> -->\r\n          </ion-item>\r\n          <ion-item *ngIf=\"date?.video\">\r\n            <ion-label style=\"overflow: initial;\">Videos :</ion-label>\r\n            <div class=\"users-list\" *ngIf=\"date?.video;else no_videos\">\r\n            \r\n              <img src=\"../../assets/images/demo2.jpg\" *ngFor=\"let item of date.video\" />\r\n            </div>\r\n            <!-- <ng-template #no_videos>No videos Selected</ng-template> -->\r\n          </ion-item>      \r\n          <!-- <ion-item class=\"descriptionItem\">\r\n            <ion-textarea placeholder=\"Enter Description\" (ionChange)=\"detailsUpdate($event ,item?.id)\"\r\n                value=\"{{item?.description}}\"></ion-textarea>\r\n          </ion-item> -->\r\n        <!-- </div> -->\r\n        \r\n          </ion-list>\r\n          <div class=\"closeIcon\">\r\n            <ion-icon ios=\"ios-close\" md=\"md-close\"  class=\"ion-margin-start close-icon\" (click)=\"preSelectedDate(i)\"></ion-icon>\r\n          </div>\r\n      </div>\r\n     \r\n      <!-- <ion-item class=\"date_items\" *ngFor=\"let dates of repetatedDateCopy; let i =index\"> \r\n        <h6 >{{dates.date | date :'medium'}} </h6>\r\n        <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" (click)=\"preRemovedate(i)\"></ion-icon>\r\n      </ion-item>  -->\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"showProgram==3\">\r\n    <ion-header class=\"top-header ion-no-padding\">\r\n      <ion-list class=\"top-heading three-block\">\r\n        <ion-item slot=\"start\">\r\n          <ion-buttons class=\"ion-no-margin\" (click)=\"showProgram=2\">\r\n            <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <ion-item slot=\"center\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\" (click)=\"selectVolume()\">\r\n          <ion-label class=\"text-green\" >Save</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-header>\r\n    <div class=\"main_content ion-padding programPreview\">\r\n      <form [formGroup]=\"finalForm\" (ngSubmit)=\"saveProg()\" class=\"fixed\">\r\n        <h6 style=\"margin: 0 0 15px 0\">Program Name: {{ programDetail.title }}</h6>\r\n        <ion-item lines=\"none\" class=\"fixed\">\r\n          <ion-label style=\"display: contents;\">How much would you like to charge:</ion-label>\r\n          <ion-label style=\"    margin-left: 40px;\">$</ion-label>\r\n          <ion-input class=\"form-control\" type=\"number\" formControlName=\"programFees\" value=\"0\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"programDetail.type_id == 'video'\" class=\"margin-top-md\">\r\n        <ion-label style=\"display: block;margin-top: 15px; padding-left: 15px;\">Would you like to request Sponsors:</ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-radio-group value=\"sponsors_group\" class=\"radio-group radioPreview\">\r\n          <ion-item>\r\n            <ion-label>Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"1\" (click)=\"sponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"2\" (click)=\"unsponsar_prog()\" ></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>      \r\n      </ion-item>\r\n      </div>\r\n     \r\n      <ion-list class=\"prog_btn_list\">\r\n      <ion-item  lines=\"none\" (click)=\"verifyUserInfoModal()\" *ngIf=\"loginUserData.trilloMatch != '1' && programDetail.type_id != 'video' \">\r\n        <ion-button class=\"green btn button-medium\">Earn with Intoactive</ion-button>\r\n      </ion-item>\r\n      <!-- <ion-item lines=\"none\" (click)=\"verifyUserInfoModal() \">\r\n        <ion-button class=\"green btn button-medium\">Earn with Intoative</ion-button>\r\n      </ion-item> -->\r\n      <ion-item class=\"\" *ngIf=\"approval_btn && !request_approve_btn \">\r\n        <ion-button (click)=\"applyAdvertise()\" class=\"green btn button-medium\">Request Approval</ion-button> \r\n      </ion-item>\r\n      <!-- <ion-item class=\"\" *ngIf=\"request_approve_btn\">\r\n        <ion-button class=\"green btn button-medium\">Request Sent</ion-button> \r\n      </ion-item> -->\r\n      </ion-list>\r\n    </form>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>";
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
    "./src/app/add-program/calender-month-week-time/calender-month-week-time.component.ts"); // import { ViewVideoDetailComponent } from './../add-program/view-video-detail/view-video-detail.component';


    var AddProgramPageModule = function AddProgramPageModule() {
      _classCallCheck(this, AddProgramPageModule);
    };

    AddProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_program_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProgramPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__["NgCalendarModule"], _profile_components_modules__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"]],
      declarations: [_add_program_page__WEBPACK_IMPORTED_MODULE_8__["AddProgramPage"], _audio_player_program_audio_player_program_component__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerProgramComponent"], _add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"]],
      entryComponents: [_add_program_program_nutrition_detail_modal_program_nutrition_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProgramNutritionDetailModalComponent"], _add_program_calender_month_week_time_calender_month_week_time_component__WEBPACK_IMPORTED_MODULE_11__["CalenderMonthWeekTimeComponent"]]
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


    __webpack_exports__["default"] = ".note {\n  color: #000; }\n\n.users-list {\n  display: flex;\n  width: auto; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: auto; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list ion-item img:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px; }\n\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.calendar-header ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  text-align: center; }\n\n.calendar-header ion-item:nth-child(2) {\n  display: contents; }\n\n.table > tbody > tr > td.calendar-hour-column {\n  width: 55px; }\n\nion-range {\n  position: absolute;\n  width: 100%;\n  top: -30px;\n  z-index: 99; }\n\n.audio-list {\n  padding: 0 15px !important; }\n\n.audio-list ion-item {\n  --background: transparent;\n  color: #FFF !important;\n  width: auto !important; }\n\n.audio-list ion-item ion-label {\n  margin: 0;\n  margin-right: 20px;\n  overflow: inherit; }\n\n.audio-list ion-item ion-fab-button {\n  width: 25px;\n  height: 25px;\n  --ion-color-base: transparent !important;\n  --box-shadow: none; }\n\n.audio-list ion-item ion-fab-button ion-icon {\n  color: #FFF; }\n\n.ios.main_content {\n  padding-top: 0; }\n\n.musiclist ion-item ion-skeleton-text {\n  height: 30px; }\n\nion-segment-button {\n  position: relative; }\n\nion-segment-button ion-skeleton-text {\n  position: absolute;\n  height: 100%;\n  margin: 0;\n  width: 95%; }\n\n.video-skeleton {\n  height: 200px; }\n\np ion-skeleton-text, .radio-list ion-item ion-skeleton-text {\n  margin: 0;\n  height: 20px; }\n\n.swiper-slide {\n  background: #fbfbfb; }\n\nion-slides {\n  height: 190px; }\n\n.top-header {\n  position: fixed; }\n\n.slides-container {\n  height: 78% !important; }\n\n.dayview-allday-label, .calendar-hour-column {\n  width: 45px !important; }\n\nion-item.floatingItem ion-label {\n  color: #a5a4a4; }\n\nion-item.floatingItem ion-textarea {\n  margin-top: 0; }\n\n.programPreview ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n  font-size: 0.90rem; }\n\n.programPreview ion-item ion-list-header {\n    padding-left: 0; }\n\n.programPreview ion-item ion-input {\n    min-width: 50px;\n    border-bottom: 1px solid #d1d1d1;\n    padding: 15px 3px 8px; }\n\n.programPreview ion-label {\n  color: #000; }\n\n.programPreview .radioPreview {\n  display: flex; }\n\n.programPreview .radioPreview ion-item {\n    --background: transparent;\n    --inner-border-width: 0 0 0 0;\n    --padding-start: 0;\n    --inner-padding-end: 0;\n    font-size: 0.90rem;\n    margin-right: 30px; }\n\n.programPreview .radioPreview ion-item ion-radio {\n      margin-right: 10px; }\n\n.programPreview .sticky-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex; }\n\n.programPreview .sticky-footer ion-button {\n    width: 100%;\n    margin: 0;\n    --border-radius: 0;\n    height: 100%;\n    --background: #27a69a; }\n\n.sel-parti-open-item {\n  max-width: 160px; }\n\n.sel-parti-open-item .sc-ion-label-md-h {\n  white-space: unset; }\n\n.prog_btn_list .btn {\n  --padding-start: 2.1em;\n  --padding-end: 2.1em;\n  font-size: 14px;\n  text-transform: uppercase;\n  height: 40px;\n  letter-spacing: 1px; }\n\n.calend_arrow {\n  color: #69bdad !important; }\n\n.prog_btn_list ion-item {\n  display: grid;\n  justify-content: center; }\n\n.date_items {\n  --ion-item-background: none !important;\n  color: #000; }\n\n.date_items ion-icon {\n  --ion-item-background: transparent;\n  color: #000;\n  margin-top: 5px; }\n\n.date_items h6 {\n  margin-right: 5px; }\n\n.top-heading ion-item {\n  --inner-border-width: 0; }\n\nion-item {\n  --inner-border-width: 0; }\n\n.nutriimages-list ion-label {\n  font-size: 0.75rem;\n  margin: 3px 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: block;\n  color: #444; }\n\n.video-card {\n  box-shadow: 0px 4px 10px rgba(34, 35, 58, 0.09); }\n\nion-slides {\n  background: transparent;\n  padding: 0 5px; }\n\n.nutriimages-list ion-segment-button {\n  width: 32%;\n  border: none;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f7f7f7;\n  border-radius: 4px; }\n\n.nutriimages-list ion-segment-button:first-child {\n  margin-left: 0; }\n\n.nutriimages-list ion-segment-button img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: 100%; }\n\n.nutriimages-list .segment-button-checked {\n  background: #eaeaea;\n  --color-checked: transparent; }\n\n.nutriimages-list .thumb-checkbox {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.nutriimages-list .thumb-checkbox ion-checkbox {\n  opacity: 0;\n  width: 100%;\n  height: 78px;\n  padding: 0 0; }\n\n.checkboxThumb::after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px; }\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked {\n  opacity: 1;\n  --background-checked:transparent;\n  --border-color-checked:transparent;\n  --size:0;\n  --checkmark-color:transparent; }\n\n.nutriimages-list .thumb-checkbox ion-checkbox.checkbox-checked:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #26a69a;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 5px;\n  left: 5px; }\n\n.item-list ion-list-header ion-icon {\n  font-size: 1.15rem; }\n\n.users-list {\n  --min-height: auto;\n  display: flex;\n  align-items: center;\n  margin: 6px 0; }\n\n.users-list img {\n  width: 36px;\n  height: 36px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list img:first-child {\n  margin-left: 0; }\n\n.users-list ion-label {\n  width: 100px; }\n\nion-list {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\nion-list ion-item {\n    font-size: 0.875rem;\n    --padding-end: 16px;\n    -webkit-padding-end: 0;\n            padding-inline-end: 0;\n    --inner-padding-end: 0;\n    --min-height: 44px;\n    --border-color: whitesmoke; }\n\nion-list .descriptionItem ion-item {\n    padding: 0; }\n\n.green-alram-icon {\n  width: 12% !important;\n  position: center !important; }\n\n.monthview-selected {\n  background-color: #3a87ad !important; }\n\n.calender_green_bottom .ion-margin-start {\n  margin-left: 7px;\n  position: relative;\n  top: -10px; }\n\n.green-alram-icon {\n  position: absolute;\n  top: 350px;\n  right: 20px;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  padding: 5px 10px; }\n\n.event-detail-container ion-item {\n  padding-right: 2rem; }\n\n.showDateTime .datetime-text {\n  display: none !important; }\n\n.showDateTime {\n  padding: 0 10px;\n  text-align: center; }\n\nion-datetime#dat {\n  padding: 0 10px;\n  position: relative;\n  left: -12px; }\n\n.item .sc-ion-label-md-h {\n  overflow: visible !important; }\n\n.counter-box[_ngcontent-pyj-c13] {\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  height: 100px; }\n\np.text-green.text-center {\n  position: relative;\n  top: 35px;\n  display: inline-flex;\n  width: 140px;\n  left: -15px; }\n\n.program__card {\n  position: relative;\n  width: 100%;\n  margin-bottom: 32px; }\n\nion-icon.ion-margin-start.md.hydrated {\n  top: 0px;\n  width: 1rem;\n  height: 1rem; }\n\nion-icon.ion-margin-start.ios.hydrated {\n  top: 0px; }\n\nion-icon.live-icon.ios.hydrated, ion-icon.live-icon.md.hydrated {\n  font-size: 34px;\n  margin-left: 12px;\n  margin-right: 12px; }\n\nion-title.ios.title-ios.title-default.hydrated {\n  padding: 0 20px; }\n\n.list-ios {\n  margin-bottom: 0px; }\n\n.closeIcon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -50%);\n  width: 1.2rem;\n  height: 1.2rem;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.226);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.close-icon {\n  width: 1rem;\n  height: 1rem;\n  margin-left: 0;\n  color: #26a69a; }\n\n.fixed {\n  position: fixed !important;\n  z-index: 9 !important;\n  background-color: #fff !important; }\n\n.margin-top-md {\n  margin-top: 10%; }\n\nform.fixed.ng-untouched.ng-pristine.ng-valid {\n  position: fixed;\n  z-index: 9; }\n\n.live-icon {\n  color: transparent; }\n\n.toggleDiv {\n  margin-bottom: 2px;\n  width: 50px; }\n\n.live::after {\n  content: 'Go Live';\n  color: #26a69a;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 6px 5px;\n  background: #fff;\n  border-radius: 3px;\n  margin-bottom: 2px; }\n\n.title {\n  font-size: 13px; }\n\n.title span {\n  font-size: 11px;\n  display: block;\n  color: #E7E7E7;\n  margin-bottom: 3px; }\n\n.live.active::after {\n  content: 'Live';\n  padding: 6px 7px;\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: #fff;\n  text-transform: uppercase;\n  background: #FF3A3A; }\n\nion-icon.active {\n  display: block;\n  color: #ff1111; }\n\n.width-full {\n  width: 100% !important; }\n\n.divider {\n  width: 1.5px;\n  height: 35px;\n  background: #fff; }\n\n::ng-deep table {\n  border: 0 !important; }\n\n::ng-deep tr {\n  display: flex !important;\n  justify-content: space-around; }\n\n::ng-deep th {\n  flex: 1; }\n\n::ng-deep th, ::ng-deep td {\n  border: 0 !important; }\n\n::ng-deep td {\n  display: inline-block;\n  margin: 0.2rem !important;\n  padding: 0 !important;\n  width: 37px;\n  height: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n::ng-deep td.monthview-secondary-with-event.text-muted {\n  border-radius: 50% !important; }\n\n::ng-deep td.monthview-selected {\n  border-radius: 50% !important; }\n\n::ng-deep span.event-detail {\n  overflow: hidden !important;\n  max-width: 50vw; }\n\n::ng-deep span.monthview-eventdetail-timecolumn {\n  min-width: 100px !important;\n  width: 100px !important; }\n\n::ng-deep .item-native {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important; }\n\nion-list-header.ion-padding-horizontal.green.text-white.md.hydrated {\n  padding-bottom: 12px;\n  padding-top: 12px; }\n\nion-list.width-full.md.list-md.hydrated {\n  border-radius: 4px; }\n\nion-list-header.ion-padding-horizontal.green.text-white.ios.hydrated {\n  padding-bottom: 12px;\n  padding-top: 12px;\n  text-transform: initial;\n  letter-spacing: 0px; }\n\nion-list.width-full.ios.list-ios.hydrated {\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2dyYW0vQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGFkZC1wcm9ncmFtXFxhZGQtcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxXQUFXLEVBQUE7O0FBQ2pCO0VBQVksYUFBYTtFQUFDLFdBQVcsRUFBQTs7QUFDckM7RUFBcUIsa0JBQWE7RUFBTSxhQUFhO0VBQUMsV0FBVyxFQUFBOztBQUNqRTtFQUF5QixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDekc7RUFBcUMsY0FBYyxFQUFBOztBQUNuRDtFQUFVLFdBQVU7RUFBQyxZQUFXO0VBQUMsZUFBZTtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQjtFQUFDLGtCQUFpQjtFQUFDLGFBQVk7RUFBQyx1QkFBc0I7RUFBQyxtQkFBa0I7RUFBQyxTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNMO0VBQWlCLGFBQWE7RUFBQyw4QkFBOEI7RUFBQyxtQkFBbUIsRUFBQTs7QUFDakY7RUFBMEIsa0JBQWdCO0VBQUcsc0JBQW9CO0VBQUcsa0JBQWtCLEVBQUE7O0FBQ3RGO0VBQXVDLGlCQUFpQixFQUFBOztBQUN4RDtFQUE4QyxXQUFXLEVBQUE7O0FBRXpEO0VBQVUsa0JBQWtCO0VBQUMsV0FBVztFQUFDLFVBQVU7RUFBQyxXQUFXLEVBQUE7O0FBQy9EO0VBQVksMEJBQTBCLEVBQUE7O0FBQ3RDO0VBQXFCLHlCQUFhO0VBQWEsc0JBQXNCO0VBQUMsc0JBQXNCLEVBQUE7O0FBQzVGO0VBQStCLFNBQVM7RUFBQyxrQkFBa0I7RUFBQyxpQkFBaUIsRUFBQTs7QUFDN0U7RUFBb0MsV0FBVztFQUFDLFlBQVk7RUFBQyx3Q0FBaUI7RUFBd0Isa0JBQWEsRUFBQTs7QUFDbkg7RUFBNkMsV0FBVyxFQUFBOztBQUd4RDtFQUFrQixjQUFjLEVBQUE7O0FBR2hDO0VBQXNDLFlBQVksRUFBQTs7QUFDbEQ7RUFBbUIsa0JBQWtCLEVBQUE7O0FBQ3JDO0VBQXFDLGtCQUFrQjtFQUFDLFlBQVk7RUFBQyxTQUFTO0VBQUMsVUFBVSxFQUFBOztBQUN6RjtFQUFnQixhQUFhLEVBQUE7O0FBQzdCO0VBQTRELFNBQVM7RUFBQyxZQUFZLEVBQUE7O0FBQ2xGO0VBQWMsbUJBQW1CLEVBQUE7O0FBQ2pDO0VBQVcsYUFBYSxFQUFBOztBQUN4QjtFQUFZLGVBQWUsRUFBQTs7QUFDM0I7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDVyxjQUFhLEVBQUE7O0FBRHhCO0VBRWMsYUFBWSxFQUFBOztBQUUxQjtFQUNhLGtCQUFnQjtFQUFHLHNCQUFvQjtFQUFJLG1CQUFtQjtFQUFLLGtCQUFrQixFQUFBOztBQURsRztJQUV3QixlQUFlLEVBQUE7O0FBRnZDO0lBR2tCLGVBQWU7SUFBQyxnQ0FBZ0M7SUFBQyxxQkFBb0IsRUFBQTs7QUFIdkY7RUFLYyxXQUFVLEVBQUE7O0FBTHhCO0VBTWtCLGFBQWEsRUFBQTs7QUFOL0I7SUFPaUIseUJBQWE7SUFDbEIsNkJBQXFCO0lBQ3JCLGtCQUFnQjtJQUNoQixzQkFBb0I7SUFBRyxrQkFBa0I7SUFBQyxrQkFBa0IsRUFBQTs7QUFWeEU7TUFXc0Isa0JBQWtCLEVBQUE7O0FBWHhDO0VBY21CLGVBQWU7RUFBQyxTQUFTO0VBQUMsT0FBTztFQUFDLGFBQVksRUFBQTs7QUFkakU7SUFlbUIsV0FBVztJQUFDLFNBQVE7SUFBQyxrQkFBZ0I7SUFBRyxZQUFZO0lBQUMscUJBQWEsRUFBQTs7QUFHckY7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxzQkFBZ0I7RUFDaEIsb0JBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksc0NBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtDQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHVCQUFxQixFQUFBOztBQUV6QjtFQUNJLHVCQUFxQixFQUFBOztBQUV6QjtFQUE0QixrQkFBa0I7RUFBQyxhQUFhO0VBQUMsMEJBQTBCO0VBQUMsaUJBQWlCO0VBQUMsZ0JBQWdCO0VBQUMsY0FBYztFQUFDLFdBQVcsRUFBQTs7QUFDcko7RUFBWSwrQ0FBK0MsRUFBQTs7QUFDM0Q7RUFBVyx1QkFBdUI7RUFBQyxjQUFjLEVBQUE7O0FBQ2pEO0VBQXFDLFVBQVU7RUFBQyxZQUFZO0VBQUMsVUFBVTtFQUFDLGtCQUFnQjtFQUFHLGdCQUFjO0VBQU8sYUFBYTtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0IsRUFBQTs7QUFDOU47RUFBaUQsY0FBYyxFQUFBOztBQUMvRDtFQUF5QyxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQUMsZUFBZSxFQUFBOztBQUM1RTtFQUEwQyxtQkFBbUI7RUFBQyw0QkFBZ0IsRUFBQTs7QUFDOUU7RUFBa0Msa0JBQWtCO0VBQUMsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDN0U7RUFBK0MsVUFBUztFQUFDLFdBQVU7RUFBQyxZQUFXO0VBQUMsWUFBVyxFQUFBOztBQUUzRjtFQUFzQixXQUFXO0VBQUMsV0FBVztFQUFDLFlBQVk7RUFBQyx5QkFBeUI7RUFBQyxjQUFjO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCO0VBQUMsUUFBUTtFQUFDLFNBQVMsRUFBQTs7QUFDNUo7RUFBZ0UsVUFBUztFQUFDLGdDQUFxQjtFQUFZLGtDQUF1QjtFQUFZLFFBQU87RUFBRSw2QkFBa0IsRUFBQTs7QUFDeks7RUFBc0UsV0FBVTtFQUFDLFdBQVU7RUFBQyxZQUFXO0VBQUMsbUJBQWtCO0VBQUMsY0FBYTtFQUFDLGtCQUFpQjtFQUFDLGtCQUFpQjtFQUFDLFFBQU87RUFBQyxTQUFRLEVBQUE7O0FBQzdMO0VBQW9DLGtCQUFrQixFQUFBOztBQUV0RDtFQUFZLGtCQUFhO0VBQU0sYUFBYTtFQUFDLG1CQUFtQjtFQUFDLGFBQWEsRUFBQTs7QUFHOUU7RUFBZ0IsV0FBVztFQUFDLFlBQVk7RUFBQyxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ2hHO0VBQTRCLGNBQWMsRUFBQTs7QUFDMUM7RUFBc0IsWUFBWSxFQUFBOztBQUVsQztFQUFTLHlCQUF5QjtFQUFDLDRCQUE0QixFQUFBOztBQUEvRDtJQUNhLG1CQUFtQjtJQUFDLG1CQUFjO0lBQU0sc0JBQXFCO1lBQXJCLHFCQUFxQjtJQUFDLHNCQUFvQjtJQUFHLGtCQUFhO0lBQU0sMEJBQWUsRUFBQTs7QUFEcEk7SUFHaUIsVUFBVSxFQUFBOztBQUczQjtFQUFrQixxQkFBcUI7RUFBRSwyQkFBMkIsRUFBQTs7QUFDcEU7RUFBb0Isb0NBQW9DLEVBQUE7O0FBQ3hEO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRWQ7RUFJSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQ0FBNEI7RUFBNUIsa0NBQTRCO0VBQTVCLDZCQUE0QjtFQUM1QixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx3QkFBd0IsRUFBQTs7QUFFNUI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBS3ZCO0VBQ0ksUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBS2hCO0VBQ0ksUUFBUSxFQUFBOztBQUdaO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sK0JBQStCO0VBQy9CLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixpQ0FBaUMsRUFBQTs7QUFFckM7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFFZDtFQUVJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUVoQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxjQUF1QixFQUFBOztBQUUzQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBTXBCO0VBRVEsb0JBQW9CLEVBQUE7O0FBRjVCO0VBS1Esd0JBQXdCO0VBQ3hCLDZCQUE2QixFQUFBOztBQU5yQztFQVNRLE9BQU8sRUFBQTs7QUFUZjtFQVlRLG9CQUFvQixFQUFBOztBQVo1QjtFQWVRLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUF0QjNCO0VBMEJRLDZCQUE2QixFQUFBOztBQTFCckM7RUE2QlEsNkJBQTZCLEVBQUE7O0FBN0JyQztFQWdDUSwyQkFBMkI7RUFDM0IsZUFBZSxFQUFBOztBQWpDdkI7RUFvQ1EsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBOztBQXJDL0I7RUF3Q1EsbUNBQWtDO1VBQWxDLGtDQUFrQyxFQUFBOztBQU0xQztFQUNJLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9ncmFtL2FkZC1wcm9ncmFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rle2NvbG9yOiAjMDAwO31cclxuLnVzZXJzLWxpc3R7ZGlzcGxheTogZmxleDt3aWR0aDogYXV0bzs7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDt3aWR0aDogYXV0bzt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZ3t3aWR0aDogNDJweDtoZWlnaHQ6IDQycHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO21hcmdpbi1sZWZ0OiAtMTBweDt9XHJcbi51c2Vycy1saXN0IGlvbi1pdGVtIGltZzpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi52aWV3LWFsbHt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O21heC13aWR0aDogNDJweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmMWYwZjA7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjogMDttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG5cclxuLmNhbGVuZGFyLWhlYWRlcntkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczogY2VudGVyO31cclxuLmNhbGVuZGFyLWhlYWRlciBpb24taXRlbXstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uY2FsZW5kYXItaGVhZGVyIGlvbi1pdGVtOm50aC1jaGlsZCgyKXtkaXNwbGF5OiBjb250ZW50czt9XHJcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5jYWxlbmRhci1ob3VyLWNvbHVtbnt3aWR0aDogNTVweDt9XHJcblxyXG5pb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO3RvcDogLTMwcHg7ei1pbmRleDogOTk7fVxyXG4uYXVkaW8tbGlzdHtwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDt9XHJcbi5hdWRpby1saXN0IGlvbi1pdGVtey0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNGRkYgIWltcG9ydGFudDt3aWR0aDogYXV0byAhaW1wb3J0YW50O31cclxuLmF1ZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse21hcmdpbjogMDttYXJnaW4tcmlnaHQ6IDIwcHg7b3ZlcmZsb3c6IGluaGVyaXQ7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbnt3aWR0aDogMjVweDtoZWlnaHQ6IDI1cHg7LS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDstLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4uYXVkaW8tbGlzdCBpb24taXRlbSBpb24tZmFiLWJ1dHRvbiBpb24taWNvbntjb2xvcjogI0ZGRjt9XHJcblxyXG4vLyBpb3MgY3NzXHJcbi5pb3MubWFpbl9jb250ZW50e3BhZGRpbmctdG9wOiAwO31cclxuXHJcbi8vIGlvbi1za2VsZXRvbi10ZXh0IGNzc1xyXG4ubXVzaWNsaXN0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e2hlaWdodDogMzBweDt9XHJcbmlvbi1zZWdtZW50LWJ1dHRvbntwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG5pb24tc2VnbWVudC1idXR0b24gaW9uLXNrZWxldG9uLXRleHR7cG9zaXRpb246IGFic29sdXRlO2hlaWdodDogMTAwJTttYXJnaW46IDA7d2lkdGg6IDk1JTt9XHJcbi52aWRlby1za2VsZXRvbntoZWlnaHQ6IDIwMHB4O31cclxucCBpb24tc2tlbGV0b24tdGV4dCwgLnJhZGlvLWxpc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7bWFyZ2luOiAwO2hlaWdodDogMjBweDt9XHJcbi5zd2lwZXItc2xpZGV7YmFja2dyb3VuZDogI2ZiZmJmYjt9XHJcbmlvbi1zbGlkZXN7aGVpZ2h0OiAxOTBweDt9XHJcbi50b3AtaGVhZGVye3Bvc2l0aW9uOiBmaXhlZDt9XHJcbi5zbGlkZXMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzglICFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4uZGF5dmlldy1hbGxkYXktbGFiZWwsIC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XHJcbiAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuaW9uLWl0ZW0uZmxvYXRpbmdJdGVte1xyXG5cdGlvbi1sYWJlbHtjb2xvcjojYTVhNGE0fVxyXG5cdGlvbi10ZXh0YXJlYXttYXJnaW4tdG9wOjB9XHJcbn1cclxuLnByb2dyYW1QcmV2aWV3e1xyXG4gICAgaW9uLWl0ZW17LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7IG1hcmdpbi1ib3R0b206IDE1cHg7ICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcclxuICAgICAgICBpb24tbGlzdC1oZWFkZXJ7cGFkZGluZy1sZWZ0OiAwO31cclxuICAgICAgICBpb24taW5wdXR7bWluLXdpZHRoOiA1MHB4O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO3BhZGRpbmc6MTVweCAzcHggOHB4fVxyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVse2NvbG9yOiMwMDB9XHJcbiAgICAucmFkaW9QcmV2aWV3e2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW9uLWl0ZW17LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtmb250LXNpemU6IDAuOTByZW07bWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBpb24tcmFkaW97bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RpY2t5LWZvb3Rlcntwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwO2xlZnQ6IDA7ZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGlvbi1idXR0b257d2lkdGg6IDEwMCU7bWFyZ2luOjA7LS1ib3JkZXItcmFkaXVzOiAwO2hlaWdodDogMTAwJTstLWJhY2tncm91bmQ6ICMyN2E2OWE7fVxyXG4gICAgfVxyXG59XHJcbi5zZWwtcGFydGktb3Blbi1pdGVte1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxufVxyXG4uc2VsLXBhcnRpLW9wZW4taXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG59XHJcbi5wcm9nX2J0bl9saXN0IC5idG57XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIuMWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMi4xZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbn1cclxuLmNhbGVuZF9hcnJvd3tcclxuICAgIGNvbG9yOiAjNjliZGFkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9nX2J0bl9saXN0IGlvbi1pdGVte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kYXRlX2l0ZW1zIHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmRhdGVfaXRlbXMgaW9uLWljb24ge1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kYXRlX2l0ZW1zIGg2e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLnRvcC1oZWFkaW5nIGlvbi1pdGVte1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufVxyXG4ubnV0cmlpbWFnZXMtbGlzdCBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO21hcmdpbjogM3B4IDA7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7bGV0dGVyLXNwYWNpbmc6IDA7Zm9udC13ZWlnaHQ6IDQwMDtkaXNwbGF5OiBibG9jaztjb2xvcjogIzQ0NDt9XHJcbi52aWRlby1jYXJke2JveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO31cclxuaW9uLXNsaWRlc3tiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtwYWRkaW5nOiAwIDVweDt9XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbnt3aWR0aDogMzIlO2JvcmRlcjogbm9uZTtwYWRkaW5nOiAwOy0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwOyAgICBtYXJnaW46IDAgM3B4O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtiYWNrZ3JvdW5kOiAjZjdmN2Y3O2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDogMDt9XHJcbi5udXRyaWltYWdlcy1saXN0IGlvbi1zZWdtZW50LWJ1dHRvbiBpbWd7b2JqZWN0LWZpdDogY29udGFpbjttYXgtd2lkdGg6IDEwMCU7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAuc2VnbWVudC1idXR0b24tY2hlY2tlZHtiYWNrZ3JvdW5kOiAjZWFlYWVhOy0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3h7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTt9XHJcbi5udXRyaWltYWdlcy1saXN0IC50aHVtYi1jaGVja2JveCBpb24tY2hlY2tib3h7b3BhY2l0eTowO3dpZHRoOjEwMCU7aGVpZ2h0Ojc4cHg7cGFkZGluZzowIDB9XHJcbi8vIC5jaGVja2JveFRodW1ie2Rpc3BsYXk6IGNvbnRlbnRzO31cclxuLmNoZWNrYm94VGh1bWI6OmFmdGVye2NvbnRlbnQ6ICcnO3dpZHRoOiAxNnB4O2hlaWdodDogMTZweDtib3JkZXI6IDJweCBzb2xpZCAjN2Q3ZDdkO2Rpc3BsYXk6IGJsb2NrO2JvcmRlci1yYWRpdXM6IDUwJTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA1cHg7bGVmdDogNXB4O31cclxuLm51dHJpaW1hZ2VzLWxpc3QgLnRodW1iLWNoZWNrYm94IGlvbi1jaGVja2JveC5jaGVja2JveC1jaGVja2Vke29wYWNpdHk6MTstLWJhY2tncm91bmQtY2hlY2tlZDp0cmFuc3BhcmVudDstLWJvcmRlci1jb2xvci1jaGVja2VkOnRyYW5zcGFyZW50Oy0tc2l6ZTowOy0tY2hlY2ttYXJrLWNvbG9yOnRyYW5zcGFyZW50fVxyXG4ubnV0cmlpbWFnZXMtbGlzdCAudGh1bWItY2hlY2tib3ggaW9uLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQ6YWZ0ZXJ7Y29udGVudDonJzt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JhY2tncm91bmQ6IzI2YTY5YTtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7bGVmdDo1cHh9XHJcbi5pdGVtLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1pY29ue2ZvbnQtc2l6ZTogMS4xNXJlbTt9XHJcblxyXG4udXNlcnMtbGlzdHstLW1pbi1oZWlnaHQ6IGF1dG87ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbjogNnB4IDA7IFxyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuLnVzZXJzLWxpc3QgaW1ne3dpZHRoOiAzNnB4O2hlaWdodDogMzZweDtvYmplY3QtZml0OiBjb3Zlcjtib3JkZXItcmFkaXVzOiA1MCU7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuLnVzZXJzLWxpc3QgaW1nOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OiAwO31cclxuLnVzZXJzLWxpc3QgaW9uLWxhYmVse3dpZHRoOiAxMDBweDt9XHJcblxyXG5pb24tbGlzdHtwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBpb24taXRlbXtmb250LXNpemU6IDAuODc1cmVtOy0tcGFkZGluZy1lbmQ6IDE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7LS1taW4taGVpZ2h0OiA0NHB4Oy0tYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO31cclxuICAgIC5kZXNjcmlwdGlvbkl0ZW17XHJcbiAgICAgICAgaW9uLWl0ZW17cGFkZGluZzogMDt9XHJcbiAgICB9XHJcbn1cclxuLmdyZWVuLWFscmFtLWljb257d2lkdGg6IDEyJSAhaW1wb3J0YW50OyBwb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7fVxyXG4ubW9udGh2aWV3LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6ICMzYTg3YWQgIWltcG9ydGFudDt9XHJcbi5jYWxlbmRlcl9ncmVlbl9ib3R0b20gLmlvbi1tYXJnaW4tc3RhcnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwcHg7XHJcbn1cclxuLmdyZWVuLWFscmFtLWljb257XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDMzMHB4O1xyXG4gICAgLy8gcmlnaHQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1MHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDpmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuLmV2ZW50LWRldGFpbC1jb250YWluZXIgaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG59XHJcbi5zaG93RGF0ZVRpbWUgLmRhdGV0aW1lLXRleHR7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNob3dEYXRlVGltZSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWRhdGV0aW1lI2RhdCB7XHJcbiAgICAvLyBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEycHg7XHJcbn1cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvdW50ZXItYm94W19uZ2NvbnRlbnQtcHlqLWMxM10ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxucC50ZXh0LWdyZWVuLnRleHQtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbn1cclxuLnByb2dyYW1fX2NhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4vLyBhbmRyb2lkIENTU1xyXG5cclxuaW9uLWljb24uaW9uLW1hcmdpbi1zdGFydC5tZC5oeWRyYXRlZCB7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4vLyBJT1MgQ1NTXHJcblxyXG5pb24taWNvbi5pb24tbWFyZ2luLXN0YXJ0Lmlvcy5oeWRyYXRlZCB7XHJcbiAgICB0b3A6IDBweDtcclxufVxyXG5cclxuaW9uLWljb24ubGl2ZS1pY29uLmlvcy5oeWRyYXRlZCwgaW9uLWljb24ubGl2ZS1pY29uLm1kLmh5ZHJhdGVkIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbmlvbi10aXRsZS5pb3MudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcbi5saXN0LWlvc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmNsb3NlSWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMjI2KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlLWljb257XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgY29sb3I6ICMyNmE2OWE7XHJcbn1cclxuLmZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW4tdG9wLW1ke1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG5mb3JtLmZpeGVkLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi5saXZlLWljb257XHJcbiAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udG9nZ2xlRGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5saXZlOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdHbyBMaXZlJztcclxuICAgIGNvbG9yOiAjMjZhNjlhO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDZweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnRpdGxlIHNwYW57XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjRTdFN0U3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5saXZlLmFjdGl2ZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnTGl2ZSc7XHJcbiAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6ICNGRjNBM0E7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlvbi1pY29uLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3LCAxNyk7XHJcbn1cclxuLndpZHRoLWZ1bGx7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXZpZGVyIHtcclxuICAgIHdpZHRoOiAxLjVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLy8gLmdyZWVuIGlvbi1pY29uLm1kLmh5ZHJhdGVkIHtcclxuLy8gICAgIHJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcbjo6bmctZGVlcCB7XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHRye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgIHRoe1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICB0aCwgdGR7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0ZHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDM3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICB0ZC5tb250aHZpZXctc2Vjb25kYXJ5LXdpdGgtZXZlbnQudGV4dC1tdXRlZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB0ZC5tb250aHZpZXctc2VsZWN0ZWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5ldmVudC1kZXRhaWwge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICB9XHJcbiAgICBzcGFuLm1vbnRodmlldy1ldmVudGRldGFpbC10aW1lY29sdW1uIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1uYXRpdmUge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4vLyBBTkRST0lEIENTU1xyXG5pb24tbGlzdC1oZWFkZXIuaW9uLXBhZGRpbmctaG9yaXpvbnRhbC5ncmVlbi50ZXh0LXdoaXRlLm1kLmh5ZHJhdGVkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuaW9uLWxpc3Qud2lkdGgtZnVsbC5tZC5saXN0LW1kLmh5ZHJhdGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4vLyBJT1MgQ1NTXHJcbmlvbi1saXN0LWhlYWRlci5pb24tcGFkZGluZy1ob3Jpem9udGFsLmdyZWVuLnRleHQtd2hpdGUuaW9zLmh5ZHJhdGVkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbn1cclxuaW9uLWxpc3Qud2lkdGgtZnVsbC5pb3MubGlzdC1pb3MuaHlkcmF0ZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */";
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
      camera, modalController, changeDetection) {
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
          this.indexForLive = i;
          this.dateObj = this.repetatedDateCopy[this.indexForLive].date;

          if (this.repetatedDateCopy[this.indexForLive].is_live == true) {
            this.repetatedDateCopy[this.indexForLive].is_live = false;
          } else {
            this.sTime.open();
          }
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
            feedStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([])),
            userList: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        formData: this.programForm.value,
                        source: '1'
                      }
                    });

                  case 2:
                    modal = _context.sent;
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
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
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
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openGallery",
        value: function openGallery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
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
        key: "recordVideo",
        value: function recordVideo() {
          var _this9 = this;

          var options = {
            limit: 1,
            duration: 30,
            quality: 0
          };
          this.mediaCapture.captureVideo(options).then(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var filename, dirpath, dur, duration;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
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
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (err) {
            return console.error(err + 'yyyyerror');
          });
        }
      }, {
        key: "selectedVideoFile",
        value: function selectedVideoFile(dirpath, filename) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this10 = this;

            var dirUrl, retrievedFile;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return this.file.resolveDirectoryUrl(dirpath);

                  case 3:
                    dirUrl = _context5.sent;
                    _context5.next = 6;
                    return this.file.getFile(dirUrl, filename, {});

                  case 6:
                    retrievedFile = _context5.sent;
                    _context5.next = 14;
                    break;

                  case 9:
                    _context5.prev = 9;
                    _context5.t0 = _context5["catch"](0);
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
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 9]]);
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var start, end, alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.startTime, 'medium', this.locale);
                    end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(event.endTime, 'medium', this.locale);
                    _context6.next = 4;
                    return this.alertCtrl.create({
                      header: event.title,
                      subHeader: event.desc,
                      message: 'From: ' + start + '<br>To: ' + end + '<br>Program Type: ' + event.typeID + '<br>Participant Type: ' + event.participant,
                      buttons: ['OK'],
                      cssClass: "custom-alert"
                    });

                  case 4:
                    alert = _context6.sent;
                    this.commonService.dismissModal();
                    alert.present();

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // Time slot was clicked

      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(event) {
          this.newEvent = event;
          console.log(event);
          this.dateObj = event.selectedTime;
        }
      }, {
        key: "selectTimeSlot",
        value: function selectTimeSlot() {
          var _this11 = this;

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
              _this11.minutes = value.Minutes.value;
              _this11.hours = value.Hours.value;

              _this11.presentPrompt(); // this.getModal();

            }
          }];
          this.commonService.presentItemPicker(defaultColumnOptions, buttons);
        }
      }, {
        key: "presentPrompt",
        value: function presentPrompt() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this12 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
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
                          console.log(_this12.indexForLive + 'indexForLive');
                          console.log(data.duration);

                          if (data.duration <= 0) {
                            _this12.showErrorToast('Enter Valid Duration');

                            return false;
                          } else if (data.duration > 60) {
                            _this12.showErrorToast('Enter Upto 60 minutes');

                            return false;
                          } else {
                            // this.dateObj = new Date(event.selectedTime + 'Z');
                            // this.noEvent = true;
                            _this12.selectDate.forEach(function (el) {
                              // console.log(el.getDate());
                              // console.log(this.dateObj.getDate());
                              if (el.getDate() == _this12.dateObj.getDate() && el.getMonth() == _this12.dateObj.getMonth()) {
                                console.log('same date'); //  this.noEvent = false;
                                //   return ;
                              }
                            });

                            _this12.progDuration = data.duration;
                            console.log(data);

                            _this12.dateObj.setHours(_this12.hours, parseInt(_this12.minutes));

                            _this12.dateObj = _this12.dateObj;

                            if (_this12.dateObj.getDate() == new Date().getDate() && _this12.dateObj.getMonth() <= new Date().getMonth() && _this12.dateObj.getHours() < new Date().getHours()) {
                              _this12.commonService.presentToast('Sorry, this is past time');

                              _this12.noEvent = false;
                              return;
                            } // alert(this.newEvent.events.length);


                            if (_this12.newEvent.events.length > 0) {
                              _this12.newEvent.events.forEach(function (el) {
                                if (el.startTime.getHours() == _this12.hours || el.endTime.getHours() == _this12.hours) {
                                  console.log(el.startTime.getTime() + 'event time');
                                  var nd = new Date(_this12.newEvent.selectedTime + 'Z');
                                  nd.setHours(_this12.hours, parseInt(_this12.minutes) + parseInt(_this12.progDuration));
                                  _this12.progEndTime = nd;
                                  console.log(_this12.progEndTime + 'endTime');
                                  _this12.noEvent = false;
                                  console.log(el.startTime.getTime());
                                  console.log(_this12.dateObj.getTime());
                                  console.log(el.endTime.getTime());
                                  console.log(nd.getTime());

                                  if (el.startTime.getTime() > _this12.dateObj.getTime() && el.startTime.getTime() >= nd.getTime() || el.endTime.getTime() <= _this12.dateObj.getTime()) {
                                    // if ( (el.startTime.getTime() > this.dateObj.getTime() ) || (el.endTime.getTime() <= this.dateObj.getTime())) {
                                    _this12.noEvent = true; // alert('tt');
                                  } else {
                                    _this12.noEvent = false;
                                    console.log('nn');

                                    _this12.selectNewTime();
                                  }
                                } // else{
                                //   this.noEvent = true;
                                // }

                              });
                            } else {
                              _this12.noEvent = true;
                            }

                            console.log(_this12.noEvent + ' event');

                            if (_this12.noEvent == true) {
                              // this.repetatedDateCopy.splice(this.indexForLive, 1);
                              // // this.selectDate.push(this.dateObj);
                              // this.repetatedDateCopy.push({'date':this.dateObj ,'equipments':[], 'nutrition_id':[] , 'video': '','description':'','is_live':false});
                              // this.repetatedDate.push(this.dateObj);
                              var time = _this12.dateObj;
                              _this12.selectDate[_this12.indexForLive] = _this12.dateObj;
                              _this12.repetatedDateCopy[_this12.indexForLive].date = '';
                              _this12.repetatedDateCopy[_this12.indexForLive].date = time;
                              _this12.repetatedDate[_this12.indexForLive] = _this12.dateObj;
                              _this12.repetatedDate = _this12.repetatedDate;

                              if (_this12.repetatedDateCopy[_this12.indexForLive].is_live == true) {
                                _this12.repetatedDateCopy[_this12.indexForLive].is_live = false;
                              } else {
                                _this12.repetatedDateCopy[_this12.indexForLive].is_live = true;
                              }

                              console.log(_this12.repetatedDateCopy);
                              console.log(time, ' time');

                              _this12.changeDetection.detectChanges();

                              _this12.timeSlot = true;
                            }
                          }
                        }
                      }]
                    });
                    _context7.next = 3;
                    return alert;

                  case 3:
                    _context7.sent.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "showErrorToast",
        value: function showErrorToast(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toastCtrl.create({
                      message: data,
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context8.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "addLiveProgram",
        value: function addLiveProgram() {
          var _this13 = this;

          this.noEvent = true;
          this.selectDate.forEach(function (el) {
            console.log(el.getDate());
            console.log(_this13.dateObj.getDate());

            if (el.getDate() == _this13.dateObj.getDate() && el.getMonth() == _this13.dateObj.getMonth()) {
              console.log('same date');
              _this13.noEvent = false;
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
          var _this14 = this;

          this.selectDate.forEach(function (el) {
            console.log(el.getDate());
            console.log(_this14.dateObj.getDate());

            if (el.getDate() == _this14.dateObj.getDate() && el.getMonth() == _this14.dateObj.getMonth()) {
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this15 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalCtrl.create({
                      component: _videos_thumb_list_videos_thumb_list_component__WEBPACK_IMPORTED_MODULE_22__["VideosThumbListComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        'programDetail': event
                      }
                    });

                  case 2:
                    modal = _context9.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (d.data) {
                        _this15.repetatedDateCopy[i].video = d.data; // this.repetatedDate[i].video=d.data;
                      }
                    });
                    _context9.next = 6;
                    return modal.present();

                  case 6:
                    return _context9.abrupt("return", _context9.sent);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "addEquipments2",
        value: function addEquipments2(event, item, i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this16 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalCtrl.create({
                      component: _add_equipments_add_equipments_component__WEBPACK_IMPORTED_MODULE_21__["AddEquipmentsComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        "programData": item,
                        "modelOpen": event
                      }
                    });

                  case 2:
                    modal = _context10.sent;
                    modal.onDidDismiss().then(function (d) {
                      if (event == 1) {
                        _this16.repetatedDateCopy[i].equipments = d.data.filter(Boolean); // this.repetatedDate[i].equipments = d.data.filter(Boolean) ;
                      } else {
                        _this16.repetatedDateCopy[i].nutrition_id = d.data.filter(Boolean); // this.repetatedDate[i].nutrition_id = d.data.filter(Boolean) ;
                      }

                      console.log(_this16.repetatedDateCopy); // console.log(this.repetatedDate);
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
        key: "selectNewTime",
        value: function selectNewTime() {
          var _this17 = this;

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
              _this17.noEvent = true;
              var minute = value.Minutes.value;
              var hours = value.Hours.value;
              console.log(minute);
              console.log(hours);
              console.log(_this17.hours); // this.dateObj.setMinutes(minute);

              console.log(_this17.dateObj); // var newEndTime = new Date(this.eventList.selectedTime + 'Z');

              var newDateTime = _this17.dateObj; // this.dateObj.setHours((this.hours),  parseInt(this.minutes));

              var nd = newDateTime.setHours(hours, parseInt(minute));
              _this17.progEndTime = nd;
              console.log(_this17.progEndTime);
              console.log(nd);

              _this17.newEvent.events.forEach(function (el) {
                if (el.startTime.getHours() == _this17.dateObj.getHours() || el.endTime.getHours() == _this17.dateObj.getHours()) {
                  console.log(el.startTime.getTime());
                  console.log(el.endTime.getTime());
                  console.log(_this17.dateObj.getTime());

                  if (el.startTime.getTime() > _this17.dateObj.getTime() && el.startTime.getTime() >= _this17.progEndTime || el.endTime.getTime() <= _this17.dateObj.getTime()) {
                    _this17.noEvent = true;
                    _this17.timeSlot = true;
                  } else {
                    _this17.commonService.presentToast('this time slot already has event');

                    _this17.noEvent = false;
                  }
                }
              });

              _this17.repetatedDateCopy.forEach(function (el) {
                if (el.date.getDate() == _this17.dateObj.getDate()) {
                  _this17.noEvent = false;
                  return;
                } else {// this.noEvent = true;
                }
              });

              if (_this17.noEvent == true) {
                // this.repetatedDateCopy.push(this.dateObj);
                _this17.selectDate.push(_this17.dateObj);

                _this17.repetatedDate.push(_this17.dateObj);

                _this17.repetatedDateCopy.push({
                  'date': _this17.dateObj,
                  'equipments': [],
                  'nutrition_id': [],
                  'video': '',
                  'description': '',
                  'is_live': false
                });
              }

              minute = '';
              console.log(_this17.repetatedDateCopy); //  alert(this.noEvent)
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this18 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
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
                    modal = _context11.sent;
                    modal.onDidDismiss().then(function (d) {
                      console.log(d);
                      var progId = d.data; // console.log(progId.id + 'pppppidddd');

                      if (_this18.isVideoSelected == true) {
                        var url = baseUrl + "api/auth/uploadVideoForProgram";

                        var filename = _this18.selectedVideo.substr(_this18.selectedVideo.lastIndexOf('/') + 1);

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

                        _this18.videoFileUpload = _this18.transfer.create();

                        _this18.videoFileUpload.upload(_this18.selectedVideo, url, options).then(function (data) {
                          console.log('gg');
                          console.log(data.response);
                        }).then(function (data) {});
                      }

                      if (d.data.program_date) {
                        var startTime;
                        var endTime;
                        startTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
                        endTime.setMinutes(endTime.getMinutes() + parseInt(d.data.program_duration));
                        var participantType = d.data.is_requested ? "Excusive" : "Open (User will request to join)";

                        _this18.eventSource.push({
                          title: d.data.title,
                          startTime: startTime,
                          endTime: endTime,
                          allDay: false,
                          typeID: d.data.type_id,
                          participant: participantType
                        });

                        _this18.programDetail = d.data;

                        _this18.ionViewWillEnter(); // this.showProgram = 3;


                        _this18.ProgramInserted = true;

                        _this18.router.navigate(["tabs/program"]);
                      }

                      _this18.router.navigate(["tabs/program"]);
                    });
                    _context11.next = 6;
                    return modal.present();

                  case 6:
                    return _context11.abrupt("return", _context11.sent);

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
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
          var _this19 = this;

          var options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.ALLMEDIA,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this19.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
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
          var _this20 = this;

          var options = {
            quality: 60,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this20.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
          }, function (err) {// alert(err);
          });
        }
      }, {
        key: "pickVideoFromGallery",
        value: function pickVideoFromGallery(sourceType) {
          var _this21 = this;

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

            var dur = _this21.media.create(dirpath);

            var duration = dur.getDuration();
            console.log(dur);
            console.log(JSON.stringify(dur));
            console.log(duration + 'duration');
            console.log(JSON.stringify(duration) + 'ation');
            dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;

            _this21.selectedVideoFile(dirpath, filename); // this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);

          }, function (err) {// alert(err);
          });
        }
      }, {
        key: "fsubmit",
        value: function fsubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (!(!this.musicId || !this.programDetail.id)) {
                      _context12.next = 3;
                      break;
                    }

                    this.commonService.presentToast('Select music. Or something really went wrong.');
                    return _context12.abrupt("return");

                  case 3:
                    this.commonService.presentLoader();
                    this.programService.updateProgramMusic({
                      "musicId": this.musicId,
                      "programId": this.programDetail.id
                    }).subscribe(function (data) {
                      _this22.commonService.dismissLoader();

                      _this22.router.navigate(["/tabs/program"]);
                    });

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(musicname) {
          var _this23 = this;

          var searchTerm = musicname.srcElement.value;

          if (searchTerm == '') {
            this.musicService.getGenres().subscribe(function (data) {
              _this23.genres = data.genres;
              _this23.allMusic = data.genres[0].musics;
            });
          } else {
            this.programService.searchMusic({
              "searchQuery": searchTerm
            }).subscribe(function (search) {
              _this23.allMusic = search.musicList;
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
          var _this24 = this;

          this.platform.ready().then(function () {
            _this24.musicChanged = 1;
            _this24.audioFile = _this24.baseUrl + "public/storage/audio/" + _this24.selectedAudioFile;
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__["Media"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"], _services_program_service__WEBPACK_IMPORTED_MODULE_13__["ProgramService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PickerController"], _services_music_service__WEBPACK_IMPORTED_MODULE_15__["MusicService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_19__["PreviewAnyFile"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], AddProgramPage);
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


    __webpack_exports__["default"] = ".audio-list {\n  padding: 0;\n  --padding-top: 0;\n  --padding-bottom: 0; }\n\n.audio-list > div {\n  display: flex; }\n\n.audio-list > * {\n  display: inline-block; }\n\nion-range {\n  --knob-size: 18px;\n  --height: 2px; }\n\nion-range ion-label {\n  margin-right: 50px; }\n\nion-fab-button {\n  min-width: 40px; }\n\nion-fab-button + div {\n  width: 100%; }\n\nion-fab-button + div > div {\n  display: flex; }\n\nion-fab-button + div > div + ion-label {\n  color: #FFF;\n  margin-left: 50px; }\n\n.music-spinner {\n  --color: #26a69a; }\n\n.music-timer-fav {\n  position: absolute;\n  right: 10px;\n  top: 28px; }\n\n.music-timer-fav ion-icon {\n  margin: 0 5px; }\n\n.musicbar {\n  padding-right: 50px; }\n\n.musicWrapper ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.musicWrapper ion-toolbar .audio-listInner {\n    display: block;\n    background: #26a69a;\n    height: 56px;\n    margin-top: 10px; }\n\n.musicWrapper ion-toolbar .audio-listInner .musicbar ion-range {\n      position: absolute;\n      width: 90%;\n      top: 2px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name {\n      margin-top: 20px;\n      margin-left: 10px;\n      padding-left: 50px; }\n\n.musicWrapper ion-toolbar .audio-listInner .music-name ion-label {\n        color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGF1ZGlvLXBsYXllci1wcm9ncmFtXFxhdWRpby1wbGF5ZXItcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFVBQVU7RUFBQyxnQkFBYztFQUFHLG1CQUFpQixFQUFBOztBQUN6RDtFQUFnQixhQUFhLEVBQUE7O0FBQzdCO0VBQWMscUJBQXFCLEVBQUE7O0FBQ25DO0VBQVUsaUJBQVk7RUFBTSxhQUFTLEVBQUE7O0FBQ3JDO0VBQW9CLGtCQUFrQixFQUFBOztBQUN0QztFQUFlLGVBQWUsRUFBQTs7QUFDOUI7RUFBbUIsV0FBVyxFQUFBOztBQUM5QjtFQUF1QixhQUFhLEVBQUE7O0FBQ3BDO0VBQWtDLFdBQVc7RUFBQyxpQkFBaUIsRUFBQTs7QUFDL0Q7RUFBZSxnQkFBUSxFQUFBOztBQUV2QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUViO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNnQixrQkFBZ0I7RUFBRyxnQkFBYyxFQUFBOztBQURqRDtJQUV5QixjQUFjO0lBQUMsbUJBQW1CO0lBQUMsWUFBWTtJQUFDLGdCQUFnQixFQUFBOztBQUZ6RjtNQUkwQixrQkFBa0I7TUFBQyxVQUFVO01BQUMsUUFBUSxFQUFBOztBQUpoRTtNQU13QixnQkFBZ0I7TUFBQyxpQkFBaUI7TUFBQyxrQkFBa0IsRUFBQTs7QUFON0U7UUFPMEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXVkaW8tcGxheWVyLXByb2dyYW0vYXVkaW8tcGxheWVyLXByb2dyYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW8tbGlzdHtwYWRkaW5nOiAwOy0tcGFkZGluZy10b3A6IDA7LS1wYWRkaW5nLWJvdHRvbTogMDt9XHJcbi5hdWRpby1saXN0PmRpdntkaXNwbGF5OiBmbGV4O31cclxuLmF1ZGlvLWxpc3Q+KntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG5pb24tcmFuZ2V7LS1rbm9iLXNpemU6IDE4cHg7LS1oZWlnaHQ6IDJweDt9XHJcbmlvbi1yYW5nZSBpb24tbGFiZWx7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuaW9uLWZhYi1idXR0b257bWluLXdpZHRoOiA0MHB4O31cclxuaW9uLWZhYi1idXR0b24rZGl2e3dpZHRoOiAxMDAlO31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdntkaXNwbGF5OiBmbGV4O31cclxuaW9uLWZhYi1idXR0b24rZGl2PmRpdiAraW9uLWxhYmVse2NvbG9yOiAjRkZGO21hcmdpbi1sZWZ0OiA1MHB4O31cclxuLm11c2ljLXNwaW5uZXJ7LS1jb2xvcjogIzI2YTY5YTt9XHJcblxyXG4ubXVzaWMtdGltZXItZmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAyOHB4O1xyXG59XHJcbi5tdXNpYy10aW1lci1mYXYgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ubXVzaWNiYXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4ubXVzaWNXcmFwcGVye1xyXG4gICAgaW9uLXRvb2xiYXJ7LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLmF1ZGlvLWxpc3RJbm5lcntkaXNwbGF5OiBibG9jaztiYWNrZ3JvdW5kOiAjMjZhNjlhO2hlaWdodDogNTZweDttYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAubXVzaWNiYXJ7XHJcbiAgICAgICAgICAgICAgICBpb24tcmFuZ2V7cG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA5MCU7dG9wOiAycHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tdXNpYy1uYW1le21hcmdpbi10b3A6IDIwcHg7bWFyZ2luLWxlZnQ6IDEwcHg7cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse2NvbG9yOiAjRkZGO31cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
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
          var _this25 = this;

          this.drag = true;
          setTimeout(function () {
            _this25.drag = false;
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
          var _this26 = this;

          this._player.addEventListener('playing', function () {
            _this26.isPlaying = true;
          });

          this._player.addEventListener('pause', function () {
            _this26.isPlaying = false;
          });

          this._player.addEventListener('timeupdate', function () {
            _this26.currentTime = Math.floor(_this26._player.currentTime);
          });

          this._player.addEventListener('seeking', function () {
            _this26.isLoading = true;
          });

          this._player.addEventListener('seeked', function () {
            _this26.isLoading = false;
          });

          this._player.addEventListener('loadstart', function () {
            _this26.isLoading = true;
          });

          this._player.addEventListener('loadeddata', function () {
            _this26.isLoading = false;
            var minutes = Math.floor(_this26._player.duration / 60);
            _this26.duration = minutes + ':' + Math.floor(_this26._player.duration - minutes * 60);
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