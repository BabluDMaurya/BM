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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">    \r\n    <ion-item slot=\"center\">\r\n      <ion-label *ngIf=\"profileData?.userData?.bios?.display_name\">{{profileData?.userData?.bios?.display_name}}</ion-label>\r\n      <ion-label [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.userData?.bios?.display_name\">Add Display Name +</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <!-- <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a> \r\n        <a class=\"set-icon\" [routerLink]=\"['/invitated-programs']\">\r\n          <ion-icon name=\"calendar\"></ion-icon>\r\n        </a> -->\r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n          <span class=\"\"></span>\r\n        </a>\r\n        <!-- <a [routerLink]=\"['/tabs/bookmark']\" >\r\n          <ion-icon ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n        </a> -->\r\n        <a [routerLink]=\"['/people/tabFollowers']\" class=\"foll-people\">\r\n          <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/settings']\" class=\"set-icon\">\r\n          <ion-icon  class=\"menu-icon\" ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header> \r\n<ion-content class=\"main_content\">  \r\n  <ion-refresher class=\"page-refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>   \r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding pb-10\">        \r\n        <div class=\"sec-banner\">\r\n          <div class=\"top-banner\">             \r\n            <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"bannerImage\">            \r\n          </div>\r\n      </div>\r\n      <div class=\"profile-heading\">\r\n        <div class=\"img-profile\">\r\n          <img [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profileImage\">              \r\n        </div>\r\n        <ion-text>\r\n          <div class=\"userNameBlock\" *ngIf=\"profileData?.userData?.user_name\">\r\n              <h6 class=\"userDisplayName\" >\r\n                {{profileData?.userData?.user_name}}\r\n              </h6>\r\n              <ion-icon (click)=\"notification1()\" ios=\"ios-arrow-dropdown-circle\" md=\"md-arrow-dropdown-circle\" ></ion-icon>\r\n            </div>\r\n        </ion-text>\r\n      </div>\r\n      <!-- <ion-icon class=\"primary-color ABS-info\" ios=\"ios-information-circle\" md=\"md-information-circle\" (click)=\"notification1()\"></ion-icon> -->\r\n    \r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row class=\"user_details\" [routerLink]=\"(upcomingList[0]?.user_id == loginUserData?.id) ? ['/new-program-inner',upcomingList[0]?.id] : ['/program-view',upcomingList[0]?.id]\" *ngIf=\"!noData\">  -->\r\n    <!-- <ion-row class=\"user_details\" *ngIf=\"!noData\"> \r\n     \r\n      <h3 class=\"list-person\">{{upcomingList[0]?.title}}</h3>\r\n      <span class=\"list-name d-block\">{{upcomingList[0]?.type_id}}</span>\r\n    \r\n      <div class=\"user_time\" >\r\n        <ion-text *ngIf=\"!programDetail?.ended &&  upcomingList[0]?.dd > 0 \">\r\n          <p>{{ upcomingList[0]?.dd |number }}</p>\r\n          <span>Day</span>\r\n        </ion-text>\r\n        <ion-text *ngIf=\"!programDetail?.ended &&  upcomingList[0]?.dd > 0 \">:</ion-text>\r\n        <ion-text *ngIf=\"!programDetail?.ended\">\r\n          <p>{{ upcomingList[0]?.hh |number }}</p>\r\n          <span>Hours</span>\r\n        </ion-text>\r\n        <ion-text>:</ion-text>\r\n        <ion-text *ngIf=\"!programDetail?.ended\">\r\n          <p>{{ upcomingList[0]?.mm |number }}</p>\r\n          <span>Minutes</span>\r\n        </ion-text>\r\n        <ion-text>:</ion-text>\r\n        <ion-text *ngIf=\"!programDetail?.ended\">\r\n          <p>{{ upcomingList[0]?.ss |number }}</p>\r\n          <span>Seconds</span>\r\n        </ion-text>\r\n      </div>\r\n  \r\n    </ion-row>  -->\r\n    <ion-row *ngIf=\"postData.length == 0\">\r\n      <ion-col class=\"flex-center\">\r\n        <div class=\"empty-block\">\r\n          <h4 class=\"text-center pb-10\">Start following people</h4>\r\n          <button [routerLink]=\"['/tabs/search']\" class=\"btn-primary\">\r\n            Start Following\r\n          </button>\r\n        </div>\r\n      </ion-col>\r\n      </ion-row>\r\n\r\n    <ion-row *ngIf=\"postData.length > 0\">\r\n      <ion-col class=\"ion-no-padding\">\r\n        <!-- <ion-segment lines=\"none\" class=\"top-segment\" [(ngModel)]=\"userProfile\">\r\n          <ion-segment-button value=\"aboutInfo\">Feed</ion-segment-button>\r\n          <ion-segment-button value=\"upcomingProgram\">Upcoming Program</ion-segment-button>\r\n        </ion-segment> -->\r\n        <div [ngSwitch]=\"userProfile\">\r\n          <div *ngSwitchCase=\"'aboutInfo'\" class=\"user-info\">\r\n\r\n            <div *ngFor=\"let post of postData\" >\r\n              <div>\r\n               <ion-card class=\"item-card\" *ngIf=\"post?.post_type == 2\">\r\n\r\n                  <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.id,'']\">\r\n                    <ion-avatar>\r\n                      <!-- <img [defaultImage]=\"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\"/> -->\r\n                      <img src=\"{{profilePicUrl}}{{post?.post_user?.bios?.profile_pic}}\"\r\n                        *ngIf=\"post?.post_user?.bios?.profile_pic != 'null' \">\r\n                      <img src=\"../../assets/images/user.jpg\" *ngIf=\"post?.post_user?.bios?.profile_pic == 'null' \">\r\n                    </ion-avatar>\r\n                    <div class=\"header-right\">\r\n                      <ion-label>\r\n                        <ion-card-title>{{post.post_user.user_name}}</ion-card-title>\r\n                        <ion-card-subtitle>{{post.post_user.location}}</ion-card-subtitle>\r\n                        <!-- <ion-card-subtitle *ngIf=\"post['video_post']['0']['video_type'] == 2\">Exclusive</ion-card-subtitle> -->\r\n                      </ion-label>\r\n                      <ion-text class=\"post-timedate\">\r\n                        <p class=\"post-date\">{{post?.created_at}}</p>\r\n                      </ion-text>\r\n                    </div>\r\n                  </ion-card-header>\r\n                  <ion-card-content class=\"ion-no-padding item-content\">\r\n                    <div class=\"img-container\">\r\n                      <ion-thumbnail class=\"post-video\" [routerLink]=\"['/videos',post.id,'']\"\r\n                      *ngIf=\"post['video_post']['0']['thumb_path']\">\r\n                      <ion-card-subtitle class=\"exclusive-text\" *ngIf=\"post['video_post']['0']['video_type'] == 2\">Exclusive</ion-card-subtitle>\r\n                      <img class=\"post-thumbnail\" [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"storagePath+post['video_post']['0']['thumb_path']\" alt=\"Video Thumnail\">\r\n                      <!-- <img src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n                      <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n                    </ion-thumbnail>\r\n                    </div>\r\n                    <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n\r\n                    <div class=\"post-content\">\r\n                      <ion-list class=\"item-post\" lines=\"none\">\r\n                        <ion-item>\r\n                          <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                            <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                            <span>{{post?.count}}</span>\r\n                          </div>\r\n                          <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment == 0\">\r\n                            <!-- <span *ngIf=\"loginUserData?.comment_disable == 0\"> -->\r\n                              <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                              <span>{{post.total_comments.length}}</span>\r\n                            <!-- </span> -->\r\n                          </div>\r\n                        </ion-item>\r\n                        <!-- <ion-item>\r\n                          <div (click)=\"showOptions(post?.id ,post?.disable_comment)\">\r\n                            <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                          </div>\r\n                        </ion-item> -->\r\n                      </ion-list>\r\n                      <!-- -------  Description post with  post type = 2 -->\r\n                      <div *ngIf=\"post?.post_type==2\">\r\n                        <p class=\"mb-10\"\r\n                          *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length < 30\">\r\n                          <span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['video_post']['0'].description.substr(0, 100)}}\r\n                        </p>\r\n                        <p class=\"mb-10\"\r\n                          *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                          <span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['video_post']['0'].description.substr(0, 29)}}\r\n                          <span (click)=\"expanded = post.id\"\r\n                            class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                        <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['video_post']['0'].description}}\r\n                          <span (click)=\"expanded = 0\"\r\n                            class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                      </div>\r\n                      <!-- ------- ends here   post type = 2 -->\r\n                    </div>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              \r\n                <!-- Image & posts -->\r\n\r\n                <ion-card class=\"item-card\"   *ngIf=\"post?.post_type == 1 || post?.post_type == 8 \">\r\n                  <span  >    \r\n                  <ion-card-header class=\"item-header\" >\r\n                    <ion-avatar>\r\n                      <img src=\"{{profilePicUrl}}{{post?.post_user?.bios?.profile_pic}}\" *ngIf=\"post?.post_user?.bios?.profile_pic != 'null' \">\r\n                      <img src=\"profileDefaultImage\" *ngIf=\"post?.post_user?.bios?.profile_pic == 'null' \">\r\n                    </ion-avatar>\r\n                    <div class=\"header-right\">\r\n                      <ion-label>\r\n                        <ion-card-title>{{post.post_user.user_name}}</ion-card-title>\r\n                        <ion-card-subtitle>{{post.post_user.user_name}}</ion-card-subtitle>\r\n                      </ion-label>\r\n                      <ion-text class=\"post-timedate\">\r\n                        <p class=\"post-date\">{{post?.created_at}}</p>\r\n                      </ion-text>\r\n                    </div>\r\n                  </ion-card-header>\r\n                  <ion-card-content class=\"ion-no-padding item-content\">\r\n                    <div class=\"img-container\">\r\n                      <ion-thumbnail class=\"post-image\" *ngIf=\"post['image_post']['0']['image_path']\">\r\n                        <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n                          <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['image_path']; let i =index;\">\r\n                            <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n                          </ion-slide>\r\n                        </ion-slides>\r\n                      </ion-thumbnail>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                      <!-- -------  Description post with  post type = 8 -->\r\n                      <div *ngIf=\"post?.post_type==8\">\r\n                        <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                        </p>\r\n                        <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                          <span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                          <span (click)=\"expanded = post.id\"\r\n                            class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                        <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['image_post']['0'].description}}\r\n                          <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                      </div>\r\n                      <!-- ------- ends here   post type = 8 -->\r\n                      <ion-list class=\"item-post\" lines=\"none\">\r\n                        <ion-item>\r\n                          <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                            <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> \r\n                            <span>{{post?.count}}</span>\r\n                          </div>\r\n                          <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment==0\">\r\n                            <span class=\"d-flex\">\r\n                              <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                              <span>{{post.total_comments.length}}</span>\r\n                            </span>\r\n                          </div>\r\n                        </ion-item>\r\n                        <!-- --------------- bookmark for only  othepost on own -------->\r\n                        <ion-item *ngIf=\"post?.post_type==1 && consultID\">         \r\n                            <div (click)=\"bookmarked(post?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                              <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                            </div>           \r\n                        </ion-item>\r\n              \r\n                        <!-- <ion-item  *ngIf=\"!consultID\">         \r\n                          <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                            <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                          </div>           \r\n                        </ion-item> -->\r\n                      </ion-list>\r\n                       <!-- --------------- bookmark ends here------------ -->\r\n                      <!-- -------  Description for  I-M-A-G-E  post with  post type = 1-->\r\n                      <div *ngIf=\"post?.post_type==1\">\r\n                        <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                        </p>\r\n                        <p\r\n                          *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                          <span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                          <span (click)=\"expanded = post.id\"\r\n                            class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                        <p *ngIf=\"expanded ==  post.id \"><span\r\n                            class=\"username-text text-green\">{{post.post_user.user_name}}</span>{{post['image_post']['0'].description}}\r\n                          <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                      </div>\r\n                      <!-- ------- ends here   post type = 1-->\r\n                    </div>\r\n                  </ion-card-content>  \r\n                </span>\r\n                </ion-card>\r\n              </div>\r\n            </div> \r\n            <!-- <ion-card>\r\n              <ion-card-header class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/user.svg\" />\r\n                </div>\r\n                <ion-text>Bio</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.userData?.bios?.about_me\">{{profileData?.userData?.bios?.about_me}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.userData?.bios?.about_me\">Click here to add something interesting about yourself</a> \r\n              </ion-card-content>\r\n            </ion-card>\r\n            <ion-card>\r\n              <ion-card-header class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/like.svg\" />\r\n                </div>\r\n                <ion-text>Interests</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content  class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.speciality?.primaryName?.name\">{{profileData?.speciality?.primaryName?.name}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.speciality?.primaryName?.name\">Select catagory in which you interested</a> \r\n              </ion-card-content>\r\n            </ion-card>\r\n            <ion-card>\r\n              <ion-card-header class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/global.svg\" />\r\n                </div>\r\n                <ion-text>Language</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content  class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.lang?.lang\">{{profileData?.lang?.lang}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.speciality?.primaryName?.name\">Add languages you know</a> \r\n              </ion-card-content>\r\n            </ion-card>\r\n            <ion-card>\r\n              <ion-card-header  class=\"user-profile-header\">\r\n                <div class=\"user-icon\">\r\n                  <img src=\"../../assets/images/placeholder.svg\" />\r\n                  </div>\r\n                  <ion-text>Location</ion-text>\r\n              </ion-card-header>\r\n              <ion-card-content  class=\"user-profile-details\">\r\n                <ion-text class=\"user-details\" *ngIf=\"profileData?.address?.country?.name\">{{profileData?.address?.city?.name}}{{profileData?.address?.state?.name }},{{profileData?.address?.country?.name}}</ion-text>\r\n                <a [routerLink]=\"['/tabs/edit-profile']\" *ngIf=\"!profileData?.address?.country?.name\">Add Location</a> \r\n             \r\n              </ion-card-content>\r\n            </ion-card> -->\r\n            <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n              <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n              </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n          </div>\r\n          <ion-list *ngSwitchCase=\"'upcomingProgram'\" lines=\"none\" class=\"upcomingProgram-list\">\r\n            <div *ngIf=\"upcomingProgram.length==0\" class=\"no-data\">\r\n              <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n              <p>No Upcoming Program !!</p>\r\n            </div>\r\n            <ion-item class=\"upcoming-block\" *ngFor=\"let item of upcomingProgram; let i=index;\"> \r\n                <ion-avatar slot=\"start\">\r\n                  <img [defaultImage] = \"programDefaultImage\" [lazyLoad]=\"url+item?.img_arr[0]\">\r\n                </ion-avatar>\r\n              <ion-label [routerLink]=\"profileData?.userData?.id ==item?.user_id ? ['/program-details/',item.id] : ['/program-view/',item.id]\">\r\n                <div>\r\n                  <h3>{{item?.title}}</h3>\r\n                  <p>{{item?.type_id}}</p>\r\n                  <p>By: <span>{{item?.program_user?.user_name}}</span></p>\r\n                  <span class=\"list-name d-block\" *ngIf=\"item?.cd>0\"><b><span *ngIf=\"item?.hh > 0\">{{ item?.hh |number }} Hours</span> {{ item?.mm |number  }} Minutes  {{ item?.ss |number }} Seconds </b> </span>\r\n\r\n                  <span class=\"list-name d-block\" *ngIf=\"item?.cd==0\"> <b> L I V E</b></span>\r\n                </div>\r\n                <div class=\"action-links\">\r\n                 \r\n                  <a (click)=\"nutritionModal(item)\">\r\n                    <ion-icon ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n                  </a>\r\n                </div>\r\n              </ion-label>\r\n            </ion-item>\r\n           \r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

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
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modalContent/followers/followers.component */ "./src/app/modalContent/followers/followers.component.ts");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













// import { RouterOutlet, Router, ActivationStart } from '@angular/router';

let UserProfilePage = class UserProfilePage {
    constructor(commonService, homeService, popoverController, settingsService, platform, programService, modalController, peopleView, router) {
        this.commonService = commonService;
        this.homeService = homeService;
        this.popoverController = popoverController;
        this.settingsService = settingsService;
        this.platform = platform;
        this.programService = programService;
        this.modalController = modalController;
        this.peopleView = peopleView;
        this.router = router;
        // @ViewChild(RouterOutlet,{ static: false }) outlet: RouterOutlet;
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.bannerDefaultImage = './../../../assets/images/editcoverpic.png';
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        this.programDefaultImage = './../../../assets/images/loading.jpg';
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].storagePath;
        this.gotData = false;
        this.userProfile = "aboutInfo";
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].imgUrl;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].profilePic;
        this.backgroundPicUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].backgroundPic;
        this.currentPage = 0;
        this.postData = [];
    }
    ngOnInit() {
        // this.router.events.subscribe(e => {
        //   if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        //     this.outlet.deactivate();
        // });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        console.log(this.userData);
        this.settingsService.getProfileData().subscribe((data) => {
            this.profileData = data.status;
            this.gotData = true;
            this.bannerImage = this.backgroundPicUrl + this.profileData.userData.bios.profile_background_image;
            this.profileImage = this.profilePicUrl + this.profileData.userData.bios.profile_pic;
            console.log(this.profileData);
        });
        this.currentPage = 0;
        this.homeService.getUsersFollowingContent({ 'page': (this.currentPage) }).subscribe(data => {
            this.postData = this.like_bookmark(data.postData.data);
            this.last_page = data.postData.last_page;
            this.currentPage = data.postData.current_page;
            console.log(this.postData);
            if (this.postData.length < 1) {
                this.gotData = true;
            }
            this.commonService.dismissLoader();
        });
        this.getMyprog();
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
    getMyprog() {
        this.programService.getUpcomingPrograms(null).subscribe(data => {
            if (data.programList.length < 1) {
                this.noData = true;
            }
            console.log(data);
            console.log(this.noData + 'this.noData');
            this.upcomingList = this.getCounter(data.programList);
            this.upcomingList = data.programList.filter(el => {
                if (el.image_path) {
                    el.img_arr = el.image_path.split(',');
                }
                el.converted = new Date(el.program_date + 'Z');
                el.expanded = false;
                console.log(this.upcomingList, 'fff');
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
                el.dd = ~~(el.cd / (60 * 60 * 24));
                el.hh = ~~(el.cd / (60 * 60) % 24);
                el.mm = ~~(el.cd % 3600 / 60);
                el.ss = (el.cd % 3600 % 60);
            }, 1000);
            return el;
        });
        return elementArr;
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
    like_bookmark(arr) {
        arr.filter((element, i) => {
            element.count = element.post_likes.length;
            element.post_likes.filter((f) => {
                if (f.user_id == this.userData.id) {
                    element.liked = true;
                }
            });
            element.post_bookmarks.filter((f) => {
                if (f.user_id == this.userData.id) {
                    element.bookmarked = true;
                }
            });
        });
        return arr;
    }
    notification1() {
        this.commonService.presentModal(_modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_10__["FollowersComponent"], 'fullModal', { 'profileData': this.profileData, 'otherUser': false });
    }
    bookmarked(postId, bmStat, post_type) {
        //console.log(postId, bmStat);
        this.postData.forEach((element, i) => {
            if (element.id == postId) {
                this.postData[i].bookmarked = !bmStat;
            }
        });
        //console.log(postId, bmStat);
        this.commonService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    liked(postId, likeStat) {
        this.postData.forEach((element, i) => {
            if (element.id == postId) {
                this.postData[i].liked = !likeStat;
                if (likeStat) {
                    this.postData[i].count = (this.postData[i].count - 1);
                }
                else {
                    this.postData[i].count = (this.postData[i].count + 1);
                }
            }
        });
        this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    loadData(event) {
        setTimeout(() => {
            if (this.currentPage > 0) {
                this.homeService.getUsersFollowingContent({ 'page': (this.currentPage + 1) }).subscribe((data) => {
                    event.target.complete();
                    this.postData = this.postData.concat(this.like_bookmark(data.postData.data));
                    console.log(this.postData);
                    console.log('postData');
                    // this.remainingTopConsultent = this.remainingTopConsultent;
                    this.last_page = data.postData.last_page;
                    this.currentPage = data.postData.current_page;
                });
            }
            if (this.last_page <= (this.currentPage + 1)) {
                event.target.disabled = true;
            }
        }, 500);
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_12__["ViewerModalComponent"],
                componentProps: {
                    src: this.url + path,
                    srcHighRes: this.url + path,
                    srcFallback: this.url + path
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_11__["PeopleViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }
];
UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _services_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_11__["PeopleViewService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
], UserProfilePage);



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map