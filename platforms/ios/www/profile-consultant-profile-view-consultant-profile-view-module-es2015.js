(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-consultant-profile-view-consultant-profile-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-label>Send a Message</ion-label>\r\n  <ion-textarea class=\"form-control\" placeholder=\"Enter user name here...\"></ion-textarea>\r\n  <div class=\"mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green ion-float-right\" (click)=\"eventFromPopover()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item>\r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label *ngIf=\"!profileData?.userData?.bios?.display_name\">{{profileData?.userData?.user_name}}</ion-label>\r\n      <ion-label *ngIf=\"profileData?.userData?.bios?.display_name\">{{profileData?.userData?.bios?.display_name}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <a (click)=\"notificationModal()\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n          <span class=\"\"></span>\r\n        </a>\r\n        <a (click)=\"userFollowers()\" class=\"follow-people\">\r\n          <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n        </a>\r\n        <a (click)=\"presentActionSheet()\" class=\"set-icon\">\r\n          <ion-icon class=\"menu-icon\" ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div class=\"sec-banner\">\r\n          <div class=\"top-banner\" > \r\n            <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"backgroundPicUrl+profileData?.userData?.bios?.profile_background_image\">\r\n          </div>\r\n          <div class=\"profile-heading\">\r\n            <div class=\"img-profile\">\r\n              <img [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\">              \r\n            </div>\r\n            <ion-text>\r\n              <div class=\"userNameBlock\" *ngIf=\"profileData?.userData?.bios?.display_name\">\r\n                  <h6 class=\"userDisplayName\" (click)=\"notification1()\" >\r\n                    <ion-chip>\r\n                      <h4 class=\"no-mar\"> \r\n                        {{profileData?.userData?.user_name}}\r\n                      </h4>\r\n                      <ion-icon class=\"mt-0\"  ios=\"ios-information-circle\" md=\"md-information-circle\" ></ion-icon>\r\n                    </ion-chip>\r\n                    </h6>\r\n                \r\n                  \r\n              </div>\r\n              <h6 class=\"userDisplayName\">\r\n                <a class=\"ion-no-margin clr-blk\" *ngIf=\"!profileData?.userData?.bios?.display_name\"></a>\r\n              </h6>\r\n            </ion-text>\r\n            <!-- <div class=\"tagline\">\r\n              <a>\r\n                <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon> rushabh_parekh\r\n              </a>\r\n            </div> -->\r\n          </div>\r\n          <!-- <div class=\"user-name\">\r\n            <ion-text> \r\n              <h6>{{profileData?.userData?.user_name}}</h6>\r\n              <p>{{profileData?.userData?.additional?.tag_line}}</p>\r\n            </ion-text>\r\n          </div> -->\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"tabs\">\r\n      <!-- <ion-col size=\"12\" class=\"ion-no-padding mb-10\">\r\n        <ion-list lines=\"none\" class=\"top-list\">\r\n          <ion-item (click)=\"notification1()\">\r\n            <img src=\"../../assets/images/info.svg\" />\r\n            <ion-label>Info</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"followUp(followStatus)\" id=\"followStatus\">\r\n            <img [src]=\"followStatus == 'UNFOLLOW' ? '../../assets/images/unfollow.svg':'../../assets/images/follow.svg'\" />\r\n            <ion-label>{{ follow ?'Following':'Follow' }}</ion-label>\r\n            <ion-label>{{followStatus}}</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"chatPopup()\">  \r\n            <img src=\"../../assets/images/comment.svg\" />\r\n            <ion-label>Chat</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"reportPopup()\">\r\n            <img src=\"../../assets/images/alert.svg\" />\r\n            <ion-label>Report</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"blockUser(block)\">\r\n            <img src=\"../../assets/images/blocks.svg\" />\r\n            <ion-label>{{ block ?'Unblock':'Block' }}</ion-label>\r\n          </ion-item>\r\n          \r\n        </ion-list>\r\n      </ion-col> -->\r\n      <!-- <ion-col>\r\n        <button class=\"post-btn\">\r\n          Upcoming Programs\r\n        </button>\r\n        <button class=\"post-btn ml-2\" (click)=\"presentActionSheet()\">\r\n          More actions\r\n        </button>\r\n      </ion-col> -->\r\n      <ion-col style=\"height: auto; padding: 0;\" lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n        <ion-list lines=\"none\" style=\"padding: 5px 0; margin: 0;\" class=\"top-list\">\r\n          <ion-item (click)=\"chatPopup()\" style=\" padding: 10px 0;\" class=\"box-shadow-none icon-div\"> \r\n            <div class=\"top-icon\">\r\n              <ion-icon ios=\"ios-chatbubbles\" md=\"ios-chatbubbles\"></ion-icon>\r\n            </div> \r\n            <ion-label>Chat</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"followUp(followStatus)\" style=\" padding: 10px 0;\" class=\"box-shadow-none icon-div\" id=\"followStatus\">\r\n            <div class=\"top-icon\">\r\n              <ion-icon *ngIf=\"followStatus == 'Unfollow' \" ios=\"ios-person\" md=\"md-person\"></ion-icon>\r\n              <ion-icon *ngIf=\"followStatus == 'Follow' \" ios=\"ios-person-add\" md=\"md-person-add\"></ion-icon>\r\n\r\n              <!-- <img [src]=\"followStatus == 'UNFOLLOW' ? '../../assets/images/unfollow.svg':'../../assets/images/follow.svg'\" /> -->\r\n            </div>\r\n            <!-- <ion-label>{{ follow ?'Following':'Follow' }}</ion-label> -->\r\n            <ion-label>{{followStatus}}</ion-label>\r\n          </ion-item>\r\n          <ion-item detail=\"false\" style=\" padding: 10px 0;\" class=\"box-shadow-none icon-div\" value=\"post\" [routerLink]=\"['/upcoming']\">\r\n            <div class=\"top-icon\">\r\n              <ion-icon ios=\"ios-nutrition\" md=\"ios-nutrition\"></ion-icon>\r\n            </div>\r\n            <ion-label>upcoming</ion-label>\r\n          </ion-item>\r\n          <!-- <ion-item detail=\"false\" style=\" padding: 10px 0;\" class=\"box-shadow-none\" value=\"upcoming\" (click)=\"presentActionSheet()\">\r\n            <div class=\"top-icon\">\r\n              <ion-icon class=\"menu-icon\" ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\r\n            </div>\r\n            <ion-label>More actions</ion-label>\r\n          </ion-item> -->\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row class=\" mb-10\" *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"photo-heading ion-padding-horizontal\">\r\n        <ion-text>Photo's</ion-text>\r\n        <ion-button size=\"small\" *ngIf=\"profileData?.userData && previewImage.length>0\"   [routerLink]=\"['/tabs/all-images',profileData?.userData?.id , profileData?.userData?.user_name]\" >See More</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-slides [options]=\"sliderOpts\" class=\"profile-slider\">\r\n          <ion-slide *ngFor=\"let preview of previewImage\">\r\n            <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+preview\" [routerLink]=\"['/tabs/post-preview' , preview?.id ]\"/> \r\n          </ion-slide>  \r\n          <ion-slide *ngIf=\"previewImage.length>0\">\r\n            <ion-fab-button color=\"light\" size=\"small\"  [routerLink]=\"['/tabs/all-images',profileData?.userData?.id , profileData?.userData?.user_name]\">\r\n              <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <div *ngIf=\"previewImage.length==0\" class=\"no-data photoNodata\">\r\n          <p>No post added yet!!!</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-list class=\"ion-no-padding\">\r\n          <ion-item-group>\r\n            <!-- <ion-item-divider lines=\"none\" sticky>\r\n              <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n                <ion-segment class=\"ion-no-padding\" value=\"aboutInfo\" [(ngModel)]=\"consultantProfile\">\r\n                  <ion-segment-button value=\"aboutInfo\" (click)=\"videoTabsScroll()\">\r\n                    <ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\r\n                    <span>Videos</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"posts\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"ios-copy\" md=\"md-copy\"></ion-icon>\r\n                    <span>Posts</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"upcoming\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"md-calendar\" md=\"md-calendar\"></ion-icon>\r\n                    <span>Upcoming</span>\r\n                  </ion-segment-button>\r\n                </ion-segment>\r\n              </ion-toolbar>\r\n            </ion-item-divider> -->\r\n            <ion-item-sliding>\r\n              <div [ngSwitch]=\"consultantProfile\">\r\n                <ion-list class=\"ion-no-padding\" *ngSwitchCase=\"'aboutInfo'\">\r\n                  <div [ngSwitch]=\"videotabs\"> \r\n                    <div class=\"no-data\" *ngIf=\"!myPosts || myPosts.length === 0\">\r\n                      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                      <p>No post added yet.</p>\r\n                    </div>                  \r\n                    <div *ngFor=\"let post of myPosts\">\r\n                        <ion-card class=\"item-card\"  *ngIf=\"post?.post_type == 2\">                        \r\n                          <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.posts_id,'']\">\r\n                            <ion-avatar>\r\n                              <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                              <img src=\"{{url}}images/user.jpg\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                            </ion-avatar>\r\n                            <div class=\"header-right\">\r\n                              <ion-label>\r\n                                <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n                                <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n                              </ion-label>\r\n                              <ion-text class=\"post-timedate\">\r\n                                <p class=\"post-date\">{{post?.created_at}}</p>\r\n                              </ion-text>\r\n                            </div>\r\n                          </ion-card-header>\r\n                          \r\n                          <ion-card-content class=\"ion-no-padding item-content\">\r\n                            <ion-thumbnail class=\"post-image\" [routerLink]=\"['/videos',post.posts_id,'']\" *ngIf=\"post['video_post']['0']['thumb_path']\">\r\n                              <img src=\"{{storagePath + post['video_post']['0']['single_thumb_path']}}\" alt=\"Thumnail Path\" />\r\n                              </ion-thumbnail>\r\n                              <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>  \r\n                            <div class=\"post-content\">\r\n                              <ion-list class=\"item-post\" lines=\"none\">\r\n                                <ion-item>\r\n                                  <div [routerLink]=\"['/comments',post.id]\" *ngIf=\" post?.disable_comment == 0\">                               \r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                                    <span>{{post.total_comments.length}}</span>                              \r\n                                  </div>\r\n                                  <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                    <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>{{post?.count}}</span>\r\n                                  </div>\r\n                                </ion-item>                                                                                  \r\n                              </ion-list>\r\n                              <!-- -------  Description post with  post type = 2 -->\r\n                              <div *ngIf=\"post?.post_type==2\">\r\n                                <p class=\"mb-10\" *ngIf=\"post.description && post.description.length < 30\"><span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description.substr(0, 100)}}\r\n                                </p>\r\n                                <p class=\"mb-10\" *ngIf=\"post.description && post.description.length > 29 && expanded !=  post.id\">\r\n                                  <span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description.substr(0, 29)}}\r\n                                  <span (click)=\"expanded = post.id\"\r\n                                    class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                                <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description}}\r\n                                  <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              </div>\r\n                              <!-- ------- ends here   post type = 2 -->                              \r\n                            </div>\r\n                          </ion-card-content>                                                 \r\n                        </ion-card>\r\n                        <ion-card class=\"item-card\"   *ngIf=\"post?.post_type == 1 || post?.post_type == 8 \">\r\n                        <span  >    \r\n                        <ion-card-header class=\"item-header\" >\r\n                          <ion-avatar>\r\n                            <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                            <img src=\"profileDefaultImage\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                          </ion-avatar>\r\n                          <div class=\"header-right\">\r\n                            <ion-label>\r\n                              <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n                              <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n                            </ion-label>\r\n                            <ion-text class=\"post-timedate\">\r\n                              <p class=\"post-date\">{{post?.created_at}}</p>\r\n                            </ion-text>\r\n                          </div>\r\n                        </ion-card-header>\r\n                        <ion-card-content class=\"ion-no-padding item-content\">\r\n                          <div class=\"img-container\">\r\n                            <ion-thumbnail class=\"post-image\" *ngIf=\"post['image_post']['0']['thumb_path']\">\r\n                              <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n                                <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['thumb_path']; let i =index;\">\r\n                                  <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n                                </ion-slide>\r\n                              </ion-slides>\r\n                            </ion-thumbnail>\r\n                          </div>\r\n                          <div class=\"post-content\">\r\n                            <!-- -------  Description post with  post type = 8 -->\r\n                            <div *ngIf=\"post?.post_type==8\">\r\n                              <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                            <!-- ------- ends here   post type = 8 -->\r\n                            <ion-list class=\"item-post\" lines=\"none\">\r\n                              <ion-item>\r\n                                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> \r\n                                  <span>{{post?.count}}</span>\r\n                                </div>\r\n                                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment==0\">\r\n                                  <span class=\"d-flex\">\r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                                    <span>{{post.total_comments.length}}</span>\r\n                                  </span>\r\n                                </div>\r\n                              </ion-item>\r\n                              <!-- --------------- bookmark for only  othepost on own -------->\r\n                              <ion-item *ngIf=\"post?.post_type==1 && consultID\">         \r\n                                  <div (click)=\"bookmarked(post?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                                    <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                                  </div>           \r\n                              </ion-item>\r\n                    \r\n                              <ion-item  *ngIf=\"!consultID\">         \r\n                                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                                </div>           \r\n                              </ion-item>\r\n                            </ion-list>\r\n                             <!-- --------------- bookmark ends here------------ -->\r\n                            <!-- -------  Description for  I-M-A-G-E  post with  post type = 1-->\r\n                            <div *ngIf=\"post?.post_type==1\">\r\n                              <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p\r\n                                *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                            <!-- ------- ends here   post type = 1-->\r\n                          </div>\r\n                        </ion-card-content>  \r\n                      </span>\r\n                      </ion-card>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadVideoData($event)\">\r\n                      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n                      </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                  </div>\r\n                </ion-list>\r\n                <ion-list class=\"ion-no-padding\" *ngSwitchCase=\"'posts'\">\r\n                  <app-post-tab [userData]=\"profileData\"></app-post-tab>\r\n                </ion-list>\r\n                <ion-list *ngSwitchCase=\"'upcoming'\" lines=\"none\">\r\n                  <app-upcoming-tab ></app-upcoming-tab>\r\n                  <!-- <ion-item class=\"upcoming-block\" *ngFor=\"let cardupcoming of [].constructor(10)\">\r\n                    <ion-avatar slot=\"start\">\r\n                      <img\r\n                        src=\"https://intoactive.wdipl.com/user-upload/3/profile-image/app/3_Virajwdi_20190809_superman-moustache-justice-league-600x321.jpg\">\r\n                    </ion-avatar>\r\n                    <ion-label>\r\n                      <div>\r\n                        <h3>Lorem ipsum</h3>\r\n                        <p>Closed Group</p>\r\n                        <p>By: <span>Virajwdi</span></p>\r\n                        <p class=\"countdown\">Countdown <a>3h 6m 13s </a></p>\r\n                      </div>\r\n                      <div class=\"action-links\">\r\n                        <a (click)=\"nutritionModal()\">\r\n                          <ion-icon ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n                        </a>\r\n                      </div>\r\n                    </ion-label>\r\n                  </ion-item> -->\r\n                </ion-list>\r\n              </div>\r\n            </ion-item-sliding>\r\n          </ion-item-group>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- <app-fixed-footer></app-fixed-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-label>Report This</ion-label>\r\n  <div class=\"mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green ion-float-right\" (click)=\"eventFromPopover()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea.form-control {\n  border-radius: 0;\n  height: auto;\n  border-width: 0 0 1px 0;\n  padding: 0;\n  border-bottom: 1px solid #e4e4e4;\n}\n\nion-textarea.form-control textarea {\n  padding: 0;\n}\n\n.btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #26a69a;\n  --color-activated: #26a69a;\n  --color-focused: #26a69a;\n  color: #26a69a;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9jaGF0LXBvcHVwL0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHByb2ZpbGVcXGNvbnN1bHRhbnQtcHJvZmlsZS12aWV3XFxjaGF0LXBvcHVwXFxjaGF0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2NvbnN1bHRhbnQtcHJvZmlsZS12aWV3L2NoYXQtcG9wdXAvY2hhdC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUEwQixnQkFBQTtFQUFpQixZQUFBO0VBQWEsdUJBQUE7RUFBd0IsVUFBQTtFQUFXLGdDQUFBO0FDTTNGOztBRExBO0VBQW1DLFVBQUE7QUNTbkM7O0FEUkE7RUFBSyx1QkFBQTtFQUF3QixnQkFBQTtFQUFpQixVQUFBO0VBQVUsbUNBQUE7RUFBb0Msa0JBQUE7RUFBbUIseUJBQUE7RUFBMEIsaUNBQUE7RUFBa0MsK0JBQUE7RUFBZ0MsZ0JBQUE7RUFBaUIsMEJBQUE7RUFBMkIsd0JBQUE7RUFBeUIsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLGdCQUFBO0FDeUJsVDs7QUR0QkE7RUFBTyxnQkFBQTtBQzBCUCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29uc3VsdGFudC1wcm9maWxlLXZpZXcvY2hhdC1wb3B1cC9jaGF0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbHtib3JkZXItcmFkaXVzOiAwO2hlaWdodDogYXV0bztib3JkZXItd2lkdGg6IDAgMCAxcHggMDtwYWRkaW5nOiAwO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O31cclxuaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB0ZXh0YXJlYXtwYWRkaW5nOiAwO31cclxuLmJ0bntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtib3gtc2hhZG93OiBub25lO3BhZGRpbmc6MDstLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDstLWJveC1zaGFkb3c6IG5vbmU7LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDstLWNvbG9yOiAjMjZhNjlhOy0tY29sb3ItYWN0aXZhdGVkOiAjMjZhNjlhOy0tY29sb3ItZm9jdXNlZDogIzI2YTY5YTtjb2xvcjogIzI2YTY5YTstLXBhZGRpbmctc3RhcnQ6IDA7LS1wYWRkaW5nLWVuZDogMDt9XHJcbi8vIC5idG4tZ3JheXtiYWNrZ3JvdW5kOiAjOTk5O31cclxuLy8gLmJ0bi1ncmVlbntiYWNrZ3JvdW5kOiAjMjZhNjlhO31cclxuLm10LTEwe21hcmdpbi10b3A6IDEwcHg7fSIsImlvbi10ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cblxuaW9uLXRleHRhcmVhLmZvcm0tY29udHJvbCB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjMjZhNjlhO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzI2YTY5YTtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMjZhNjlhO1xuICBjb2xvcjogIzI2YTY5YTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChatPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPopupComponent", function() { return ChatPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ChatPopupComponent = class ChatPopupComponent {
    constructor(events, navParams, popoverController) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.page = this.navParams.get('data');
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
ChatPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ChatPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-popup.component.scss */ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ChatPopupComponent);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConsultantProfileViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPageRoutingModule", function() { return ConsultantProfileViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultant-profile-view.page */ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts");




const routes = [
    {
        path: '',
        component: _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_3__["ConsultantProfileViewPage"]
    }
];
let ConsultantProfileViewPageRoutingModule = class ConsultantProfileViewPageRoutingModule {
};
ConsultantProfileViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultantProfileViewPageRoutingModule);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ConsultantProfileViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPageModule", function() { return ConsultantProfileViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultant_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultant-profile-view-routing.module */ "./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts");
/* harmony import */ var _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultant-profile-view.page */ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts");
/* harmony import */ var _consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consultant-profile-view/chat-popup/chat-popup.component */ "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts");
/* harmony import */ var _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../consultant-profile-view/report-popup/report-popup.component */ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts");
/* harmony import */ var _components_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components.modules */ "./src/app/profile/components.modules.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");











// import { FixedFooterComponent } from '../fixed-footer/fixed-footer.component';
let ConsultantProfileViewPageModule = class ConsultantProfileViewPageModule {
};
ConsultantProfileViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_modules__WEBPACK_IMPORTED_MODULE_9__["ComponentModule"],
            _consultant_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultantProfileViewPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"]
        ],
        declarations: [_consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_6__["ConsultantProfileViewPage"], _consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__["ChatPopupComponent"], _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
        entryComponents: [_consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__["ChatPopupComponent"], _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
    })
], ConsultantProfileViewPageModule);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-profile-bg {\n  height: 185px;\n  background: url('demo3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 15px;\n}\n\n.profile-content {\n  position: relative;\n  top: -50px;\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  padding-left: 10px;\n}\n\n.profile-content a {\n  color: #777777;\n  font-size: 0.85rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.profile-content ion-text {\n  position: relative;\n  top: 35px;\n  left: 100px;\n}\n\n.user-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: 0px 0px 15px 0px rgba(82, 82, 82, 0.55);\n  margin-bottom: 10px;\n  position: absolute;\n  top: 0;\n}\n\n.user-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(39, 166, 154, 0.07);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-icon img {\n  width: 16px;\n  height: 16px;\n}\n\n.top-list {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 0;\n}\n\n.top-list ion-item {\n  text-align: center;\n  --min-height: 36px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  width: 25%;\n}\n\n.top-list ion-item ion-label {\n  font-size: 0.75rem;\n  margin: 0;\n  padding-top: 20px;\n}\n\n.top-list img {\n  width: 18px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.sec-notification {\n  margin: 10px 0;\n}\n\n.subprofile_tabs {\n  --border-width: 0;\n}\n\n.subprofile_tabs ion-segment-button {\n  border-radius: 30px;\n  margin: 0 5px;\n  background: rgba(58, 174, 163, 0.11);\n  min-height: 38px;\n  color: #000;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n  background: #27a69a;\n  --indicator-color-checked: #27a69a;\n  color: #FFF;\n}\n\n.subprofile_tabs ion-segment-button.segment-button-checked span {\n  color: #FFF;\n}\n\n.subprofile_tabs ion-label {\n  margin: 0;\n}\n\n.share-btn {\n  bottom: 5px;\n  position: absolute;\n  right: 0;\n  --background:#27a69a;\n  --background-activated:#27a69a;\n  --background-focused:#27a69a;\n  --background-hover:#27a69a;\n  --ion-color-shade:#27a69a!important;\n  --ion-color-tint:#27a69a!important;\n  --ion-color-base:rgba(0, 0, 0, 0.35)!important;\n}\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 0.625rem;\n}\n\n.ios.top-list {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.no-data {\n  height: calc(100vh - 150px);\n}\n\n.photoNodata {\n  height: 70px;\n  background: #f7f7f7;\n}\n\n.item-card {\n  -webkit-margin-end: 0px !important;\n          margin-inline-end: 0px !important;\n  -webkit-margin-start: 0px !important;\n          margin-inline-start: 0px !important;\n}\n\n.item-header {\n  padding: 15px 15px 15px 15px;\n}\n\n.header-right {\n  align-items: center;\n}\n\n.post-image,\n.post-video {\n  height: calc(100vw - 25px) !important;\n  padding: 0px;\n}\n\n.post-image img {\n  border-radius: 0px;\n}\n\n.post-slider {\n  height: calc(100vw - 25px);\n  max-height: none !important;\n}\n\n.post-slider ion-slide {\n  height: 100% !important;\n}\n\n.video-icon {\n  top: 15px;\n  left: 15px;\n  padding: 1px 4px;\n  border-radius: 5px;\n  background: #00000029;\n}\n\n.post-content {\n  padding: 15px;\n}\n\n.sec-banner .top-banner img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.userNameBlock {\n  display: flex;\n  align-items: center;\n}\n\n.userNameBlock .userDisplayName {\n  margin-bottom: 0px;\n  font-size: 20px;\n  margin-top: 12px;\n}\n\n.userNameBlock ion-icon {\n  font-size: 18px;\n  margin-top: 12px;\n  margin-left: 5px;\n}\n\n.menu-icon {\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.no-mar {\n  margin: 0 !important;\n  margin-left: 5px !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.post-btn {\n  background-color: #fff;\n  border: 1px solid #cecece;\n  border-radius: 4px;\n  color: #121212;\n  padding: 10px 14px;\n}\n\n.ml-2 {\n  margin-left: 10px;\n}\n\n.top-list {\n  padding: 0.001em;\n  margin: 10px 0.001em;\n}\n\n.top-list ion-item {\n  --min-height: 65px;\n  background: #FFF;\n  box-shadow: 0px 0px 15px rgba(34, 35, 58, 0.09);\n}\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem;\n}\n\n.top-list ion-item ion-label {\n  margin-left: 5px;\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0;\n  font-size: 0.625rem;\n}\n\n.top-list .box-shadow-none {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9EOlxcbmlraGlsXFxJbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFxjb25zdWx0YW50LXByb2ZpbGUtdmlld1xcY29uc3VsdGFudC1wcm9maWxlLXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2NvbnN1bHRhbnQtcHJvZmlsZS12aWV3L2NvbnN1bHRhbnQtcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQixhQUFBO0VBQWMsc0NBQUE7RUFBNEQsc0JBQUE7RUFBdUIsMkJBQUE7RUFBNEIsZUFBQTtBQ005STs7QURMQTtFQUFpQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsaUJBQUE7RUFBaUIsYUFBQTtFQUFjLHVCQUFBO0VBQXdCLHVCQUFBO0VBQXdCLHNCQUFBO0VBQXVCLGtCQUFBO0FDZ0JySjs7QURmQTtFQUFtQixjQUFBO0VBQWUsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLHVCQUFBO0VBQXdCLG1CQUFBO0FDdUIzRjs7QUR0QkE7RUFBMEIsa0JBQUE7RUFBbUIsU0FBQTtFQUFVLFdBQUE7QUM0QnZEOztBRDNCQTtFQUFVLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsb0JBQUE7S0FBQSxpQkFBQTtFQUFrQiwwQkFBQTtLQUFBLHVCQUFBO0VBQTZJLG1EQUFBO0VBQW9ELG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLE1BQUE7QUN5Q2hUOztBRHhDQTtFQUFXLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsb0NBQUE7RUFBcUMsYUFBQTtFQUFjLHVCQUFBO0VBQXdCLG1CQUFBO0FDa0RsSTs7QURqREE7RUFBZSxXQUFBO0VBQVksWUFBQTtBQ3NEM0I7O0FEckRBO0VBQVUsYUFBQTtFQUFjLDZCQUFBO0VBQThCLGdCQUFBO0FDMkR0RDs7QUQxREE7RUFBbUIsa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsc0JBQUE7RUFBdUIsVUFBQTtBQ2tFbkc7O0FEakVBO0VBQTZCLGtCQUFBO0VBQW1CLFNBQUE7RUFBVSxpQkFBQTtBQ3VFMUQ7O0FEdEVBO0VBQWMsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLE1BQUE7RUFBTyxTQUFBO0VBQVUsMkJBQUE7QUM4RTlEOztBRDdFQTtFQUFrQixjQUFBO0FDaUZsQjs7QURoRkE7RUFBaUIsaUJBQUE7QUNvRmpCOztBRG5GSTtFQUFtQixtQkFBQTtFQUFvQixhQUFBO0VBQWMsb0NBQUE7RUFBcUMsZ0JBQUE7RUFBaUIsV0FBQTtFQUFZLDBCQUFBO0VBQTJCLGlCQUFBO0FDNEZ0Sjs7QUQzRkk7RUFBMEMsbUJBQUE7RUFBb0Isa0NBQUE7RUFBbUMsV0FBQTtBQ2dHckc7O0FEL0ZJO0VBQStDLFdBQUE7QUNrR25EOztBRGpHSTtFQUFVLFNBQUE7QUNvR2Q7O0FEaEdBO0VBQVcsV0FBQTtFQUFXLGtCQUFBO0VBQWtCLFFBQUE7RUFBUSxvQkFBQTtFQUFxQiw4QkFBQTtFQUErQiw0QkFBQTtFQUE2QiwwQkFBQTtFQUEyQixtQ0FBQTtFQUFvQyxrQ0FBQTtFQUFtQyw4Q0FBQTtBQzZHbk87O0FENUdBO0VBQStCLDBCQUFBO0VBQTJCLGdCQUFBO0VBQWlCLG1CQUFBO0FDa0gzRTs7QURoSEE7RUFBYywyQkFBQTtFQUE0Qiw4QkFBQTtBQ3FIMUM7O0FEcEhBO0VBQVMsMkJBQUE7QUN3SFQ7O0FEdkhBO0VBQWEsWUFBQTtFQUFhLG1CQUFBO0FDNEgxQjs7QUR6SEE7RUFDSSxrQ0FBQTtVQUFBLGlDQUFBO0VBQ0Esb0NBQUE7VUFBQSxtQ0FBQTtBQzRISjs7QUQxSEE7RUFDSSw0QkFBQTtBQzZISjs7QUQzSEE7RUFDSSxtQkFBQTtBQzhISjs7QUQzSEE7O0VBRUkscUNBQUE7RUFDQSxZQUFBO0FDOEhKOztBRDVIQTtFQUNJLGtCQUFBO0FDK0hKOztBRDdIQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7QUNnSUo7O0FEOUhBO0VBQ0ksdUJBQUE7QUNpSUo7O0FEL0hBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNrSUo7O0FEaElBO0VBQ0ksYUFBQTtBQ21JSjs7QURqSUE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtBQ29JSjs7QURsSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNxSUo7O0FEcElJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNzSVI7O0FEcElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNzSVI7O0FEbklBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQ3NJSjs7QURwSUE7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0FDdUlKOztBRHJJQTtFQUNJLHdCQUFBO0FDd0lKOztBRHRJQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3lJSjs7QUR2SUE7RUFDSSxpQkFBQTtBQzBJSjs7QUR4SUE7RUFBVSxnQkFBQTtFQUFpQixvQkFBQTtBQzZJM0I7O0FENUlBO0VBQW1CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLCtDQUFBO0FDa0p2RDs7QURqSkE7RUFBVSxXQUFBO0VBQVksWUFBQTtFQUFhLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyx1QkFBQTtFQUF3QixtQkFBQTtFQUFvQixrQkFBQTtFQUFtQixVQUFBO0VBQVcsU0FBQTtFQUFVLDJCQUFBO0FDK0o1Szs7QUQ5SkE7RUFBb0IsY0FBQTtFQUFlLGtCQUFBO0FDbUtuQzs7QURsS0E7RUFBNkIsZ0JBQUE7RUFBaUIsY0FBQTtFQUFlLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxTQUFBO0VBQVUsMkJBQUE7RUFBNEIsY0FBQTtFQUFlLG1CQUFBO0FDNktqSjs7QUQ1S0E7RUFFSSwyQkFBQTtBQytLSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29uc3VsdGFudC1wcm9maWxlLXZpZXcvY29uc3VsdGFudC1wcm9maWxlLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZS1iZ3toZWlnaHQ6IDE4NXB4O2JhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RlbW8zLmpwZykgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTogY292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO3BhZGRpbmc6IDAgMTVweDt9XHJcbi5wcm9maWxlLWNvbnRlbnR7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTUwcHg7cGFkZGluZy10b3A6MjBweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47cGFkZGluZy1sZWZ0OiAxMHB4O31cclxuLnByb2ZpbGUtY29udGVudCBhe2NvbG9yOiAjNzc3Nzc3O2ZvbnQtc2l6ZTogMC44NXJlbTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4ucHJvZmlsZS1jb250ZW50IGlvbi10ZXh0e3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IDM1cHg7bGVmdDogMTAwcHg7fVxyXG4udXNlci1pbWd7d2lkdGg6IDkwcHg7aGVpZ2h0OiA5MHB4O2JvcmRlci1yYWRpdXM6IDUwJTtvYmplY3QtZml0OiBjb3ZlcjtvYmplY3QtcG9zaXRpb246IGNlbnRlcjstd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTstbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTtib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoODIsIDgyLCA4MiwgMC41NSk7bWFyZ2luLWJvdHRvbTogMTBweDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO31cclxuLnVzZXItaWNvbnt3aWR0aDogMzRweDtoZWlnaHQ6IDM0cHg7Ym9yZGVyLXJhZGl1czogNTAlO2JhY2tncm91bmQ6IHJnYmEoMzksIDE2NiwgMTU0LCAwLjA3KTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG4udXNlci1pY29uIGltZ3t3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7fVxyXG4udG9wLWxpc3R7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDttYXJnaW4tYm90dG9tOiAwO31cclxuLnRvcC1saXN0IGlvbi1pdGVte3RleHQtYWxpZ246IGNlbnRlcjstLW1pbi1oZWlnaHQ6IDM2cHg7LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7d2lkdGg6IDI1JTt9XHJcbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjc1cmVtO21hcmdpbjogMDtwYWRkaW5nLXRvcDogMjBweDt9XHJcbi50b3AtbGlzdCBpbWd7d2lkdGg6IDE4cHg7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO31cclxuLnNlYy1ub3RpZmljYXRpb257bWFyZ2luOiAxMHB4IDA7fVxyXG4uc3VicHJvZmlsZV90YWJzey0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue2JvcmRlci1yYWRpdXM6IDMwcHg7bWFyZ2luOiAwIDVweDtiYWNrZ3JvdW5kOiByZ2JhKDU4LCAxNzQsIDE2MywgMC4xMSk7bWluLWhlaWdodDogMzhweDtjb2xvcjogIzAwMDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtsZXR0ZXItc3BhY2luZzogMDt9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtiYWNrZ3JvdW5kOiAjMjdhNjlhOy0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMyN2E2OWE7Y29sb3I6ICNGRkY7fVxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgc3Bhbntjb2xvcjojRkZGfVxyXG4gICAgaW9uLWxhYmVse21hcmdpbjogMDt9XHJcbn1cclxuXHJcblxyXG4uc2hhcmUtYnRue2JvdHRvbTo1cHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDstLWJhY2tncm91bmQ6IzI3YTY5YTstLWJhY2tncm91bmQtYWN0aXZhdGVkOiMyN2E2OWE7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IzI3YTY5YTstLWJhY2tncm91bmQtaG92ZXI6IzI3YTY5YTstLWlvbi1jb2xvci1zaGFkZTojMjdhNjlhIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiMyN2E2OWEhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2U6cmdiYSgwLCAwLCAwLCAwLjM1KSFpbXBvcnRhbnR9XHJcbi5wcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQgc3Bhbnt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMC42MjVyZW07fVxyXG5cclxuLmlvcy50b3AtbGlzdHtwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O31cclxuLm5vLWRhdGF7aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO31cclxuLnBob3RvTm9kYXRhe2hlaWdodDogNzBweDtiYWNrZ3JvdW5kOiAjZjdmN2Y3O31cclxuXHJcblxyXG4uaXRlbS1jYXJke1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0taGVhZGVye1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG4uaGVhZGVyLXJpZ2h0e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtaW1hZ2UsIFxyXG4ucG9zdC12aWRlbyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyNXB4KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5wb3N0LWltYWdlIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4ucG9zdC1zbGlkZXJ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyNXB4KTtcclxuICAgIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ucG9zdC1zbGlkZXIgaW9uLXNsaWRle1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnZpZGVvLWljb257XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZzogMXB4IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAyOTtcclxufVxyXG4ucG9zdC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnNlYy1iYW5uZXIgLnRvcC1iYW5uZXIgaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4udXNlck5hbWVCbG9ja3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnVzZXJEaXNwbGF5TmFtZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcbi5tZW51LWljb257XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vLW1hcntcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tdC0we1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbn1cclxuLm1sLTJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4udG9wLWxpc3R7cGFkZGluZzogMC4wMDFlbTttYXJnaW46IDEwcHggMC4wMDFlbTt9XHJcbi50b3AtbGlzdCBpb24taXRlbXstLW1pbi1oZWlnaHQ6IDY1cHg7YmFja2dyb3VuZDogI0ZGRjtib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTt9XHJcbi50b3AtaWNvbnt3aWR0aDogNDBweDtoZWlnaHQ6IDQwcHg7YmFja2dyb3VuZDogI2U5ZjZmNTtib3JkZXItcmFkaXVzOiA1MCU7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0xMnB4O2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7fVxyXG4udG9wLWljb24gaW9uLWljb24ge2NvbG9yOiAjMjdhNjlhO2ZvbnQtc2l6ZTogMS4yNXJlbTt9XHJcbi50b3AtbGlzdCBpb24taXRlbSBpb24tbGFiZWx7bWFyZ2luLWxlZnQ6IDVweDtwYWRkaW5nLXRvcDogMDtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiA4cHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTttYXJnaW4tbGVmdDogMDtmb250LXNpemU6IDAuNjI1cmVtO31cclxuLnRvcC1saXN0IC5ib3gtc2hhZG93LW5vbmV7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9IiwiLnVzZXItcHJvZmlsZS1iZyB7XG4gIGhlaWdodDogMTg1cHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RlbW8zLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnByb2ZpbGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucHJvZmlsZS1jb250ZW50IGEge1xuICBjb2xvcjogIzc3Nzc3NztcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtY29udGVudCBpb24tdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzNXB4O1xuICBsZWZ0OiAxMDBweDtcbn1cblxuLnVzZXItaW1nIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLnVzZXItaWNvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTY2LCAxNTQsIDAuMDcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXItaWNvbiBpbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4udG9wLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRvcC1saXN0IGlvbi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLW1pbi1oZWlnaHQ6IDM2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnRvcC1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRvcC1saXN0IGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5zZWMtbm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5zdWJwcm9maWxlX3RhYnMge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbi5zdWJwcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1OCwgMTc0LCAxNjMsIDAuMTEpO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICMyN2E2OWE7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMyN2E2OWE7XG4gIGNvbG9yOiAjRkZGO1xufVxuLnN1YnByb2ZpbGVfdGFicyBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCBzcGFuIHtcbiAgY29sb3I6ICNGRkY7XG59XG4uc3VicHJvZmlsZV90YWJzIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNoYXJlLWJ0biB7XG4gIGJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IzI3YTY5YTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojMjdhNjlhO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDojMjdhNjlhO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IzI3YTY5YTtcbiAgLS1pb24tY29sb3Itc2hhZGU6IzI3YTY5YSFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IzI3YTY5YSFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6cmdiYSgwLCAwLCAwLCAwLjM1KSFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlX3RhYnMgaW9uLXNlZ21lbnQgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuNjI1cmVtO1xufVxuXG4uaW9zLnRvcC1saXN0IHtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1kYXRhIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xufVxuXG4ucGhvdG9Ob2RhdGEge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG5cbi5pdGVtLWNhcmQge1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvc3QtaW1hZ2UsXG4ucG9zdC12aWRlbyB7XG4gIGhlaWdodDogY2FsYygxMDB2dyAtIDI1cHgpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnBvc3QtaW1hZ2UgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4ucG9zdC1zbGlkZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAyNXB4KTtcbiAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1zbGlkZXIgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi52aWRlby1pY29uIHtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiAxcHggNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAyOTtcbn1cblxuLnBvc3QtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5zZWMtYmFubmVyIC50b3AtYmFubmVyIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnVzZXJOYW1lQmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXJOYW1lQmxvY2sgLnVzZXJEaXNwbGF5TmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLnVzZXJOYW1lQmxvY2sgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tZW51LWljb24ge1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLm5vLW1hciB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMTIxMjEyO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG59XG5cbi5tbC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50b3AtbGlzdCB7XG4gIHBhZGRpbmc6IDAuMDAxZW07XG4gIG1hcmdpbjogMTBweCAwLjAwMWVtO1xufVxuXG4udG9wLWxpc3QgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO1xufVxuXG4udG9wLWljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZTlmNmY1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEycHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4udG9wLWljb24gaW9uLWljb24ge1xuICBjb2xvcjogIzI3YTY5YTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udG9wLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcbn1cblxuLnRvcC1saXN0IC5ib3gtc2hhZG93LW5vbmUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsultantProfileViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPage", function() { return ConsultantProfileViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _consultant_profile_view_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consultant-profile-view/info-modal/info-modal.component */ "./src/app/profile/consultant-profile-view/info-modal/info-modal.component.ts");
/* harmony import */ var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var _consultant_profile_view_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../consultant-profile-view/notification-modal/notification-modal.component */ "./src/app/profile/consultant-profile-view/notification-modal/notification-modal.component.ts");
/* harmony import */ var _user_profile_view_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-profile-view/user-followers/user-followers.component */ "./src/app/profile/user-profile-view/user-followers/user-followers.component.ts");
/* harmony import */ var _modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modalContent/followers/followers.component */ "./src/app/modalContent/followers/followers.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _settings_privacy_privacy_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../settings/privacy/privacy.page */ "./src/app/settings/privacy/privacy.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../chats/chat-rooms/chat-rooms.component */ "./src/app/chats/chat-rooms/chat-rooms.component.ts");













//import { SocialSharing } from '@ionic-native/social-sharing/ngx';





let ConsultantProfileViewPage = class ConsultantProfileViewPage {
    constructor(router, popoverController, modalController, commonService, navCtrl, actRoute, peopleView, clipboard, deeplink, platform, socialSharing, chatService, actionSheetController) {
        this.router = router;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.peopleView = peopleView;
        this.clipboard = clipboard;
        this.deeplink = deeplink;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.chatService = chatService;
        this.actionSheetController = actionSheetController;
        this.tabs = true;
        this.previewImage = [];
        this.sliderOpts = {
            zoom: true,
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 1.5
        };
        this.consultantProfile = "aboutInfo";
        this.follow = true;
        this.like = true;
        this.bookmark = true;
        this.expanded = 0;
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].storagePath;
        this.logText = "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.";
        this.sticky = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].imgUrl;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].profilePic;
        this.backgroundPicUrl = _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].backgroundPic;
        this.bannerDefaultImage = './../../../assets/images/editcoverpic.png';
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.currentPage = 0;
        this.gotData = false;
        platform.ready().then(() => {
            // THIS BELOW CODE WILL CHECK FOR DEEPLINKS FROM OTHER APPS OR BROWSER 
            this.deeplink.routeWithNavController(this.navChild, {
                '/privacy': _settings_privacy_privacy_page__WEBPACK_IMPORTED_MODULE_14__["PrivacyPage"],
            }).subscribe((match) => {
                console.log('Successfully routed', match);
            }, (nomatch) => {
                console.warn('Unmatched Route', nomatch);
            });
        });
    }
    ionViewWillEnter() {
        if (this.consultID == this.userData.id) {
            this.router.navigate(["/tabs/consultant-profile"]);
        }
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.userData.id;
        this.actRoute.paramMap.subscribe((params) => {
            this.consultID = params.get('userData');
        });
        this.peopleView.getUserData({ 'userId': this.consultID }).subscribe((data) => {
            this.profileData = data;
        });
        this.peopleView.getBlockStatus({ 'blockUserId': this.consultID }).subscribe((data) => {
            if (data.statusDetails.block_status != null && data.statusDetails.block_status == '1') {
                this.block = true;
            }
            else {
                this.block = false;
            }
        });
        this.peopleView.getMyPost('1', this.consultID, 1).subscribe((data) => {
            console.log(data);
            data.posts.data.forEach(element => {
                this.previewImage = this.previewImage.concat(element['image_post']['0']['thumb_path']);
            });
        });
        this.peopleView.getFolloFollowingResult({ 'profileId': this.consultID }).subscribe((data) => {
            this.followStatus = data.status;
        });
        this.videoPostData();
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(path);
            // const modal = await this.modalController.create({
            //   component: ViewerModalComponent,
            //   componentProps: {
            //     src: this.storagePath + path, // required
            //     srcHighRes: this.storagePath + path,
            //     srcFallback: this.storagePath + path
            //   },
            //   cssClass: 'ion-img-viewer', // required
            //   keyboardClose: true,
            //   showBackdrop: true
            // });
            // return await modal.present();
        });
    }
    liked(postId, likeStat) {
        this.myPosts.forEach((element, i) => {
            if (element.id == postId) {
                this.myPosts[i].liked = !likeStat;
                if (likeStat) {
                    this.myPosts[i].count = (this.myPosts[i].count - 1);
                }
                else {
                    this.myPosts[i].count = (this.myPosts[i].count + 1);
                }
            }
        });
        this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    videoPostData() {
        //postType,userId, videoType,page    
        this.peopleView.getMyPost('1,2,8', this.consultID, 1).subscribe((data) => {
            console.log('data', data);
            this.myPosts = data.posts.data;
            this.myPosts.forEach((element, i) => {
                this.myPosts[i].count = element.post_likes.length;
                if (element.post_type == 2) {
                    var img = element.video_post[0].thumb_path.split(',');
                    element.video_post[0].single_thumb_path = img[0];
                }
                element.post_likes.filter((f) => {
                    if (f.user_id == this.userId) {
                        this.myPosts[i].liked = true;
                    }
                });
                element.post_bookmarks.filter((f) => {
                    if (f.user_id == this.userId) {
                        this.myPosts[i].bookmarked = true;
                    }
                });
            });
            this.last_page = data.posts.last_page;
            this.currentPage = data.posts.current_page;
            this.gotData = true;
        });
    }
    loadVideoData(event) {
        setTimeout(() => {
            if (this.currentPage > 0) {
                //postType,userId, videoType,page 
                //getVedioType 
                this.peopleView.getMyPost('1,2,8', this.consultID, (this.currentPage + 1)).subscribe((data) => {
                    data.posts.data.forEach((element, i) => {
                        element.count = element.post_likes.length;
                        if (element.post_type == 2) {
                            var img = element.video_post[0].thumb_path.split(',');
                            element.video_post[0].single_thumb_path = img[0];
                        }
                        element.post_likes.filter((f) => {
                            if (f.user_id == this.userId) {
                                data.posts.data[i].liked = true;
                            }
                        });
                        element.post_bookmarks.filter((f) => {
                            if (f.user_id == this.userId) {
                                this.myPosts[i].bookmarked = true;
                            }
                        });
                    });
                    this.myPosts = this.myPosts.concat(data.posts.data);
                    this.last_page = data.posts.last_page;
                    this.currentPage = data.posts.current_page;
                });
            }
            event.target.complete();
            if (this.last_page <= (this.currentPage + 1)) {
                event.target.disabled = true;
            }
        }, 500);
    }
    followUp(followStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (followStatus == 'Unfollow') {
                var status = 'true';
            }
            else {
                var status = 'false';
            }
            this.commonService.presentLoader();
            this.peopleView.followUpPeople({ 'uid': this.userId, 'followUpId': this.consultID, 'status': status }).subscribe((data) => {
                this.commonService.dismissLoader();
                if (data.followStatus == 'false') {
                    this.followStatus = 'Unfollow';
                    this.commonService.presentToast('Successfully Followed !');
                }
                else if (data.followStatus == 'true' && data.followResult == '1') {
                    this.followStatus = 'Followback';
                    this.commonService.presentToast('Successfully UnFollowed !');
                }
                else {
                    this.followStatus = 'Follow';
                    this.commonService.presentToast('Successfully UnFollowed !');
                }
            });
        });
    }
    getContent() {
        return document.querySelector('ion-content');
    }
    videoTabsScroll() {
        this.tabs = true;
        this.getContent().scrollToTop(500);
    }
    otherTabsScroll() {
        this.tabs = false;
        this.getContent().scrollToTop(500);
    }
    chatPopup(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonService.presentLoader();
            this.chatService.checkChatUser({ 'id': this.consultID }).subscribe((data) => {
                if (data.length > 0) {
                    this.commonService.dismissLoader();
                    var chatRoom = data[0].chatroom.room;
                    var chatReceiverId = data[0].receiverID;
                    var chatSenderId = data[0].senderID;
                    var chatType = data[0].type;
                    var roomId = data[0].id;
                    var request_id = data[0].chatroom.request_id;
                    this.commonService.dismissLoader();
                    var fileData = {
                        chatType: parseInt(chatType),
                        room: chatRoom,
                        receiverId: parseInt(chatReceiverId),
                        requestId: parseInt(request_id),
                    };
                    this.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__["ChatRoomsComponent"], 'fullModal', fileData);
                }
                else {
                    this.commonService.dismissLoader();
                    // chat_type = 1:consultant,2:user,3:program
                    this.router.navigate(["/first-message/" + this.consultID + "/1"]);
                }
            }, err => {
                this.commonService.presentToast("Couldnt load data, Something went wrong.");
                this.commonService.dismissLoader();
            });
        });
    }
    reportPopup(ev) {
        let btns = [{
                text: 'Cancel',
                handler: (blah) => { }
            }, {
                text: 'Okay',
                handler: () => {
                    this.sendReport();
                }
            }];
        this.commonService.presentAlert('Report A User', 'Are you sure.?', btns, '');
    }
    blockUser(event) {
        this.commonService.presentLoader();
        this.peopleView.blockuser({ 'blockUserId': this.consultID, 'blocked': event }).subscribe(data => {
            this.commonService.dismissLoader();
            if (data.statusDetails.block_status) {
                this.commonService.presentToast('Blocked User');
                this.block = true;
            }
            else {
                this.commonService.presentToast('UnBlocked User');
                this.block = false;
            }
            err => {
                this.commonService.dismissLoader();
            };
        });
    }
    notification1() {
        this.commonService.presentModal(_modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_8__["FollowersComponent"], 'fullModal', { 'profileData': this.profileData, 'otherUser': true });
    }
    infomodal() {
        this.commonService.presentModal(_consultant_profile_view_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_4__["InfoModalComponent"], 'bottomModal', null);
    }
    nutritionModal() {
        this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_5__["NutritionModalComponent"], 'fullModal', null);
    }
    notificationModal() {
        this.commonService.presentModal(_consultant_profile_view_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_6__["NotificationModalComponent"], 'fullModal', { 'profileData': this.profileData });
    }
    userFollowers() {
        this.commonService.presentModal(_user_profile_view_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_7__["UserFollowersComponent"], 'fullModal', { 'userId': this.consultID });
    }
    //------------------ -- GO BACK  ------------
    goBack() {
        this.navCtrl.back();
    }
    sendReport() {
        this.commonService.presentLoader();
        this.peopleView.reportPeople({ 'userId': this.consultID, 'message': 'reported' }).subscribe(data => {
            this.commonService.presentToast("Reported account.");
            this.commonService.dismissLoader();
        }, err => {
            this.commonService.presentToast("Reported account.");
            this.commonService.dismissLoader();
        });
    }
    shareModal() {
        // console.log('testtest',this.socialSharing);
        // this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
        //   // Success!
        // }).catch(() => {
        //   // Error!
        // });
        this.clipboard.copy(_config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].profileLink + this.consultID);
        this.clipboard.paste().then((resolve) => {
            alert(resolve);
        }, (reject) => {
            alert('Error: ' + reject);
        });
    }
    shareItem() {
        // var options = {
        //   message: 'Profile Page', // not supported on some apps (Facebook, Instagram)
        //   // subject: 'the subject', // fi. for email
        //   // files: ['', ''], // an array of filenames either locally or remotely
        //   url: 'https://ionicinto.wdipl.com/consultant-profile-view/' + this.consultID,
        //   chooserTitle: 'Pick an intoactive app', // Android only, you can override the default share sheet title
        //   appPackageName: 'com.bm.ionicfcm', // Android only, you can provide id of the App you want to share with
        //   // iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
        // };
        // this.socialSharing.shareWithOptions(options);
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share("Profile Page", "", "", "https://ionicinto.wdipl.com/consultant-profile-view/" + this.consultID)
            .then(() => {
        })
            .catch(() => {
        });
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'Share this profile',
                        // icon: 'share',
                        handler: () => {
                            this.shareItem();
                        }
                    },
                    {
                        text: 'Report',
                        // icon: 'alert',
                        handler: () => {
                            this.reportPopup('');
                            console.log('report');
                        }
                    }, {
                        text: this.block ? 'Unblock' : 'Block',
                        // icon: 'warning',
                        handler: () => {
                            this.blockUser(this.block);
                            console.log('block');
                        }
                    }, {
                        text: 'Cancel',
                        // icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
};
ConsultantProfileViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__["PeopleViewService"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"])
], ConsultantProfileViewPage.prototype, "navChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyMenu', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ConsultantProfileViewPage.prototype, "menuElement", void 0);
ConsultantProfileViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultant-profile-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consultant-profile-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../user-profile/user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consultant-profile-view.page.scss */ "./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__["PeopleViewService"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"],
        _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
], ConsultantProfileViewPage);



/***/ }),

/***/ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #26a69a;\n  --color-activated: #26a69a;\n  --color-focused: #26a69a;\n  color: #26a69a;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcY29uc3VsdGFudC1wcm9maWxlLXZpZXdcXHJlcG9ydC1wb3B1cFxccmVwb3J0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2NvbnN1bHRhbnQtcHJvZmlsZS12aWV3L3JlcG9ydC1wb3B1cC9yZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyx1QkFBQTtFQUF3QixnQkFBQTtFQUFpQixVQUFBO0VBQVUsbUNBQUE7RUFBb0Msa0JBQUE7RUFBbUIseUJBQUE7RUFBMEIsaUNBQUE7RUFBa0MsK0JBQUE7RUFBZ0MsZ0JBQUE7RUFBaUIsMEJBQUE7RUFBMkIsd0JBQUE7RUFBeUIsY0FBQTtBQ2FoUjs7QURWQTtFQUFPLGdCQUFBO0FDY1AiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2NvbnN1bHRhbnQtcHJvZmlsZS12aWV3L3JlcG9ydC1wb3B1cC9yZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICMyNmE2OWE7LS1jb2xvci1hY3RpdmF0ZWQ6ICMyNmE2OWE7LS1jb2xvci1mb2N1c2VkOiAjMjZhNjlhO2NvbG9yOiAjMjZhNjlhO31cclxuLy8gLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4vLyAuYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9IiwiLmJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICMyNmE2OWE7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMjZhNjlhO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICMyNmE2OWE7XG4gIGNvbG9yOiAjMjZhNjlhO1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReportPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPopupComponent", function() { return ReportPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ReportPopupComponent = class ReportPopupComponent {
    constructor(events, navParams, popoverController) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.page = this.navParams.get('data');
    }
    eventFromPopover() {
        this.events.publish('fromPopoverEvent');
        this.popoverController.dismiss();
    }
};
ReportPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ReportPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-popup.component.scss */ "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ReportPopupComponent);



/***/ })

}]);
//# sourceMappingURL=profile-consultant-profile-view-consultant-profile-view-module-es2015.js.map