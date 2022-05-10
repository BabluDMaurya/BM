function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-consultant-profile-view-consultant-profile-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileConsultantProfileViewChatPopupChatPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\r\n  <ion-label>Send a Message</ion-label>\r\n  <ion-textarea class=\"form-control\" placeholder=\"Enter user name here...\"></ion-textarea>\r\n  <div class=\"mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green ion-float-right\" (click)=\"eventFromPopover()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileConsultantProfileViewConsultantProfileViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item>\r\n      <ion-buttons class=\"ion-no-margin\"  (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label *ngIf=\"!profileData?.userData?.bios?.display_name\">{{profileData?.userData?.user_name}}</ion-label>\r\n      <ion-label *ngIf=\"profileData?.userData?.bios?.display_name\">{{profileData?.userData?.bios?.display_name}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div class=\"icon-right-side\">\r\n        <a (click)=\"notificationModal()\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n          <span class=\"\"></span>\r\n        </a>\r\n        <a (click)=\"userFollowers()\" class=\"follow-people\">\r\n          <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/settings']\" class=\"set-icon\">\r\n          <ion-icon class=\"menu-icon\" ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div class=\"sec-banner\">\r\n          <div class=\"top-banner\" > \r\n            <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"backgroundPicUrl+profileData?.userData?.bios?.profile_background_image\">\r\n          </div>\r\n          <div class=\"profile-heading\">\r\n            <div class=\"img-profile\">\r\n              <img [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\">              \r\n            </div>\r\n            <ion-text>\r\n              <div class=\"userNameBlock\" *ngIf=\"profileData?.userData?.bios?.display_name\">\r\n                <h6 class=\"userDisplayName\" >\r\n                  {{profileData?.userData?.user_name}}</h6>\r\n                  <ion-icon (click)=\"notification1()\" ios=\"ios-arrow-dropdown-circle\" md=\"md-arrow-dropdown-circle\" ></ion-icon>\r\n              </div>\r\n              <h6 class=\"userDisplayName\">\r\n                <a class=\"ion-no-margin clr-blk\" *ngIf=\"!profileData?.userData?.bios?.display_name\"></a>\r\n              </h6>\r\n            </ion-text>\r\n            <!-- <div class=\"tagline\">\r\n              <a>\r\n                <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon> rushabh_parekh\r\n              </a>\r\n            </div> -->\r\n          </div>\r\n          <!-- <div class=\"user-name\">\r\n            <ion-text> \r\n              <h6>{{profileData?.userData?.user_name}}</h6>\r\n              <p>{{profileData?.userData?.additional?.tag_line}}</p>\r\n            </ion-text>\r\n          </div> -->\r\n          <ion-fab class=\"share-btn\">\r\n            <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n              <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding mb-10\">\r\n        <ion-list lines=\"none\" class=\"top-list\">\r\n          <!-- <ion-item (click)=\"notification1()\">\r\n            <img src=\"../../assets/images/info.svg\" />\r\n            <ion-label>Info</ion-label>\r\n          </ion-item> -->\r\n          <ion-item (click)=\"followUp(followStatus)\" id=\"followStatus\">\r\n            <img [src]=\"followStatus == 'UNFOLLOW' ? '../../assets/images/unfollow.svg':'../../assets/images/follow.svg'\" />\r\n            <!-- <ion-label>{{ follow ?'Following':'Follow' }}</ion-label> -->\r\n            <ion-label>{{followStatus}}</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"chatPopup()\">  \r\n            <img src=\"../../assets/images/comment.svg\" />\r\n            <ion-label>Chat</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"reportPopup()\">\r\n            <img src=\"../../assets/images/alert.svg\" />\r\n            <ion-label>Report</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"blockUser(block)\">\r\n            <img src=\"../../assets/images/blocks.svg\" />\r\n            <ion-label>{{ block ?'Unblock':'Block' }}</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)=\"presentActionSheet()\">\r\n          Action sheet\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row class=\" mb-10\" *ngIf=\"tabs\">\r\n      <ion-col size=\"12\" class=\"photo-heading ion-padding-horizontal\">\r\n        <ion-text>Photo's</ion-text>\r\n        <ion-button size=\"small\" *ngIf=\"profileData?.userData && previewImage.length>0\"   [routerLink]=\"['/tabs/all-images',profileData?.userData?.id , profileData?.userData?.user_name]\" >See More</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-slides [options]=\"sliderOpts\" class=\"profile-slider\">\r\n          <ion-slide *ngFor=\"let preview of previewImage\">\r\n            <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+preview\" [routerLink]=\"['/tabs/post-preview' , preview?.id ]\"/> \r\n          </ion-slide>  \r\n          <ion-slide *ngIf=\"previewImage.length>0\">\r\n            <ion-fab-button color=\"light\" size=\"small\"  [routerLink]=\"['/tabs/all-images',profileData?.userData?.id , profileData?.userData?.user_name]\">\r\n              <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <div *ngIf=\"previewImage.length==0\" class=\"no-data photoNodata\">\r\n          <p>No post added yet!!!</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-list class=\"ion-no-padding\">\r\n          <ion-item-group>\r\n            <!-- <ion-item-divider lines=\"none\" sticky>\r\n              <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n                <ion-segment class=\"ion-no-padding\" value=\"aboutInfo\" [(ngModel)]=\"consultantProfile\">\r\n                  <ion-segment-button value=\"aboutInfo\" (click)=\"videoTabsScroll()\">\r\n                    <ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\r\n                    <span>Videos</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"posts\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"ios-copy\" md=\"md-copy\"></ion-icon>\r\n                    <span>Posts</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"upcoming\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"md-calendar\" md=\"md-calendar\"></ion-icon>\r\n                    <span>Upcoming</span>\r\n                  </ion-segment-button>\r\n                </ion-segment>\r\n              </ion-toolbar>\r\n            </ion-item-divider> -->\r\n            <ion-item-sliding>\r\n              <div [ngSwitch]=\"consultantProfile\">\r\n                <ion-list class=\"ion-no-padding\" *ngSwitchCase=\"'aboutInfo'\">\r\n                  <div [ngSwitch]=\"videotabs\"> \r\n                    <div class=\"no-data\" *ngIf=\"!myPosts || myPosts.length === 0\">\r\n                      <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                      <p>No post added yet.</p>\r\n                    </div>                  \r\n                    <div *ngFor=\"let post of myPosts\">\r\n                        <ion-card class=\"item-card\"  *ngIf=\"post?.post_type == 2\">                        \r\n                          <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.posts_id,'']\">\r\n                            <ion-avatar>\r\n                              <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                              <img src=\"{{url}}images/user.jpg\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                            </ion-avatar>\r\n                            <div class=\"header-right\">\r\n                              <ion-label>\r\n                                <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n                                <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n                              </ion-label>\r\n                              <ion-text class=\"post-timedate\">\r\n                                <p class=\"post-date\">{{post?.created_at}}</p>\r\n                              </ion-text>\r\n                            </div>\r\n                          </ion-card-header>\r\n                          \r\n                          <ion-card-content class=\"ion-no-padding item-content\">\r\n                            <ion-thumbnail class=\"post-image\" [routerLink]=\"['/videos',post.posts_id,'']\" *ngIf=\"post['video_post']['0']['thumb_path']\">\r\n                              <img src=\"{{storagePath + post['video_post']['0']['single_thumb_path']}}\" alt=\"Thumnail Path\" />\r\n                              </ion-thumbnail>\r\n                              <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>  \r\n                            <div class=\"post-content\">\r\n                              <ion-list class=\"item-post\" lines=\"none\">\r\n                                <ion-item>\r\n                                  <div [routerLink]=\"['/comments',post.id]\" *ngIf=\" post?.disable_comment == 0\">                               \r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                                    <span>{{post.total_comments.length}}</span>                              \r\n                                  </div>\r\n                                  <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                    <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> <span>{{post?.count}}</span>\r\n                                  </div>\r\n                                </ion-item>                                                                                  \r\n                              </ion-list>\r\n                              <!-- -------  Description post with  post type = 2 -->\r\n                              <div *ngIf=\"post?.post_type==2\">\r\n                                <p class=\"mb-10\" *ngIf=\"post.description && post.description.length < 30\"><span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description.substr(0, 100)}}\r\n                                </p>\r\n                                <p class=\"mb-10\" *ngIf=\"post.description && post.description.length > 29 && expanded !=  post.id\">\r\n                                  <span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description.substr(0, 29)}}\r\n                                  <span (click)=\"expanded = post.id\"\r\n                                    class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                                <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                    class=\"username-text text-green\">{{consultID.user_name}}</span>{{post.description}}\r\n                                  <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              </div>\r\n                              <!-- ------- ends here   post type = 2 -->                              \r\n                            </div>\r\n                          </ion-card-content>                                                 \r\n                        </ion-card>\r\n                        <ion-card class=\"item-card\"   *ngIf=\"post?.post_type == 1 || post?.post_type == 8 \">\r\n                        <span  >    \r\n                        <ion-card-header class=\"item-header\" >\r\n                          <ion-avatar>\r\n                            <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                            <img src=\"profileDefaultImage\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                          </ion-avatar>\r\n                          <div class=\"header-right\">\r\n                            <ion-label>\r\n                              <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n                              <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n                            </ion-label>\r\n                            <ion-text class=\"post-timedate\">\r\n                              <p class=\"post-date\">{{post?.created_at}}</p>\r\n                            </ion-text>\r\n                          </div>\r\n                        </ion-card-header>\r\n                        <ion-card-content class=\"ion-no-padding item-content\">\r\n                          <div class=\"img-container\">\r\n                            <ion-thumbnail class=\"post-image\" *ngIf=\"post['image_post']['0']['thumb_path']\">\r\n                              <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n                                <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['thumb_path']; let i =index;\">\r\n                                  <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n                                </ion-slide>\r\n                              </ion-slides>\r\n                            </ion-thumbnail>\r\n                          </div>\r\n                          <div class=\"post-content\">\r\n                            <!-- -------  Description post with  post type = 8 -->\r\n                            <div *ngIf=\"post?.post_type==8\">\r\n                              <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                            <!-- ------- ends here   post type = 8 -->\r\n                            <ion-list class=\"item-post\" lines=\"none\">\r\n                              <ion-item>\r\n                                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> \r\n                                  <span>{{post?.count}}</span>\r\n                                </div>\r\n                                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment==0\">\r\n                                  <span class=\"d-flex\">\r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                                    <span>{{post.total_comments.length}}</span>\r\n                                  </span>\r\n                                </div>\r\n                              </ion-item>\r\n                              <!-- --------------- bookmark for only  othepost on own -------->\r\n                              <ion-item *ngIf=\"post?.post_type==1 && consultID\">         \r\n                                  <div (click)=\"bookmarked(post?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                                    <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                                  </div>           \r\n                              </ion-item>\r\n                    \r\n                              <ion-item  *ngIf=\"!consultID\">         \r\n                                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                                </div>           \r\n                              </ion-item>\r\n                            </ion-list>\r\n                             <!-- --------------- bookmark ends here------------ -->\r\n                            <!-- -------  Description for  I-M-A-G-E  post with  post type = 1-->\r\n                            <div *ngIf=\"post?.post_type==1\">\r\n                              <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p\r\n                                *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                            <!-- ------- ends here   post type = 1-->\r\n                          </div>\r\n                        </ion-card-content>  \r\n                      </span>\r\n                      </ion-card>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadVideoData($event)\">\r\n                      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n                      </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                  </div>\r\n                </ion-list>\r\n                <ion-list class=\"ion-no-padding\" *ngSwitchCase=\"'posts'\">\r\n                  <app-post-tab [userData]=\"profileData\"></app-post-tab>\r\n                </ion-list>\r\n                <ion-list *ngSwitchCase=\"'upcoming'\" lines=\"none\">\r\n                  <app-upcoming-tab ></app-upcoming-tab>\r\n                  <!-- <ion-item class=\"upcoming-block\" *ngFor=\"let cardupcoming of [].constructor(10)\">\r\n                    <ion-avatar slot=\"start\">\r\n                      <img\r\n                        src=\"https://intoactive.wdipl.com/user-upload/3/profile-image/app/3_Virajwdi_20190809_superman-moustache-justice-league-600x321.jpg\">\r\n                    </ion-avatar>\r\n                    <ion-label>\r\n                      <div>\r\n                        <h3>Lorem ipsum</h3>\r\n                        <p>Closed Group</p>\r\n                        <p>By: <span>Virajwdi</span></p>\r\n                        <p class=\"countdown\">Countdown <a>3h 6m 13s </a></p>\r\n                      </div>\r\n                      <div class=\"action-links\">\r\n                        <a (click)=\"nutritionModal()\">\r\n                          <ion-icon ios=\"md-restaurant\" md=\"md-restaurant\"></ion-icon>\r\n                        </a>\r\n                      </div>\r\n                    </ion-label>\r\n                  </ion-item> -->\r\n                </ion-list>\r\n              </div>\r\n            </ion-item-sliding>\r\n          </ion-item-group>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<!-- <app-fixed-footer></app-fixed-footer> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileConsultantProfileViewReportPopupReportPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\r\n  <ion-label>Report This</ion-label>\r\n  <div class=\"mt-10\">\r\n    <ion-button class=\"btn btn-gray\" (click)=\"eventFromPopover()\" size=\"small\">Cancel</ion-button>\r\n    <ion-button class=\"btn btn-green ion-float-right\" (click)=\"eventFromPopover()\" size=\"small\">Ok</ion-button>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileConsultantProfileViewChatPopupChatPopupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea.form-control {\n  border-radius: 0;\n  height: auto;\n  border-width: 0 0 1px 0;\n  padding: 0;\n  border-bottom: 1px solid #e4e4e4; }\n\nion-textarea.form-control textarea {\n  padding: 0; }\n\n.btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #26a69a;\n  --color-activated: #26a69a;\n  --color-focused: #26a69a;\n  color: #26a69a;\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9jaGF0LXBvcHVwL0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9maWxlXFxjb25zdWx0YW50LXByb2ZpbGUtdmlld1xcY2hhdC1wb3B1cFxcY2hhdC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUEwQixnQkFBZ0I7RUFBQyxZQUFZO0VBQUMsdUJBQXVCO0VBQUMsVUFBVTtFQUFDLGdDQUFnQyxFQUFBOztBQUMzSDtFQUFtQyxVQUFVLEVBQUE7O0FBQzdDO0VBQUssdUJBQXVCO0VBQUMsZ0JBQWdCO0VBQUMsVUFBUztFQUFDLG1DQUF1QjtFQUFhLGtCQUFhO0VBQU0seUJBQWE7RUFBYSxpQ0FBcUI7RUFBYSwrQkFBbUI7RUFBYSxnQkFBUTtFQUFTLDBCQUFrQjtFQUFTLHdCQUFnQjtFQUFTLGNBQWM7RUFBQyxrQkFBZ0I7RUFBRyxnQkFBYyxFQUFBOztBQUdoVTtFQUFPLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9jaGF0LXBvcHVwL2NoYXQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEuZm9ybS1jb250cm9se2JvcmRlci1yYWRpdXM6IDA7aGVpZ2h0OiBhdXRvO2JvcmRlci13aWR0aDogMCAwIDFweCAwO3BhZGRpbmc6IDA7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7fVxyXG5pb24tdGV4dGFyZWEuZm9ybS1jb250cm9sIHRleHRhcmVhe3BhZGRpbmc6IDA7fVxyXG4uYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICMyNmE2OWE7LS1jb2xvci1hY3RpdmF0ZWQ6ICMyNmE2OWE7LS1jb2xvci1mb2N1c2VkOiAjMjZhNjlhO2NvbG9yOiAjMjZhNjlhOy0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwO31cclxuLy8gLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4vLyAuYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ChatPopupComponent */

  /***/
  function srcAppProfileConsultantProfileViewChatPopupChatPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPopupComponent", function () {
      return ChatPopupComponent;
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

    var ChatPopupComponent = /*#__PURE__*/function () {
      function ChatPopupComponent(events, navParams, popoverController) {
        _classCallCheck(this, ChatPopupComponent);

        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
      }

      _createClass(ChatPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.page = this.navParams.get('data');
        }
      }, {
        key: "eventFromPopover",
        value: function eventFromPopover() {
          this.events.publish('fromPopoverEvent');
          this.popoverController.dismiss();
        }
      }]);

      return ChatPopupComponent;
    }();

    ChatPopupComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    ChatPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-popup.component.scss */
      "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], ChatPopupComponent);
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ConsultantProfileViewPageRoutingModule */

  /***/
  function srcAppProfileConsultantProfileViewConsultantProfileViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPageRoutingModule", function () {
      return ConsultantProfileViewPageRoutingModule;
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


    var _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./consultant-profile-view.page */
    "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts");

    var routes = [{
      path: '',
      component: _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_3__["ConsultantProfileViewPage"]
    }];

    var ConsultantProfileViewPageRoutingModule = function ConsultantProfileViewPageRoutingModule() {
      _classCallCheck(this, ConsultantProfileViewPageRoutingModule);
    };

    ConsultantProfileViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConsultantProfileViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/consultant-profile-view.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ConsultantProfileViewPageModule */

  /***/
  function srcAppProfileConsultantProfileViewConsultantProfileViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPageModule", function () {
      return ConsultantProfileViewPageModule;
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


    var _consultant_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./consultant-profile-view-routing.module */
    "./src/app/profile/consultant-profile-view/consultant-profile-view-routing.module.ts");
    /* harmony import */


    var _consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./consultant-profile-view.page */
    "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts");
    /* harmony import */


    var _consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../consultant-profile-view/chat-popup/chat-popup.component */
    "./src/app/profile/consultant-profile-view/chat-popup/chat-popup.component.ts");
    /* harmony import */


    var _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../consultant-profile-view/report-popup/report-popup.component */
    "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts");
    /* harmony import */


    var _components_modules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../components.modules */
    "./src/app/profile/components.modules.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js"); // import { FixedFooterComponent } from '../fixed-footer/fixed-footer.component';


    var ConsultantProfileViewPageModule = function ConsultantProfileViewPageModule() {
      _classCallCheck(this, ConsultantProfileViewPageModule);
    };

    ConsultantProfileViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_modules__WEBPACK_IMPORTED_MODULE_9__["ComponentModule"], _consultant_profile_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultantProfileViewPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"]],
      declarations: [_consultant_profile_view_page__WEBPACK_IMPORTED_MODULE_6__["ConsultantProfileViewPage"], _consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__["ChatPopupComponent"], _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]],
      entryComponents: [_consultant_profile_view_chat_popup_chat_popup_component__WEBPACK_IMPORTED_MODULE_7__["ChatPopupComponent"], _consultant_profile_view_report_popup_report_popup_component__WEBPACK_IMPORTED_MODULE_8__["ReportPopupComponent"]]
    })], ConsultantProfileViewPageModule);
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileConsultantProfileViewConsultantProfileViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-profile-bg {\n  height: 185px;\n  background: url('demo3.jpg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 15px; }\n\n.profile-content {\n  position: relative;\n  top: -50px;\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  padding-left: 10px; }\n\n.profile-content a {\n  color: #777777;\n  font-size: 0.85rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.profile-content ion-text {\n  position: relative;\n  top: 35px;\n  left: 100px; }\n\n.user-img {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  box-shadow: 0px 0px 15px 0px rgba(82, 82, 82, 0.55);\n  margin-bottom: 10px;\n  position: absolute;\n  top: 0; }\n\n.user-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(39, 166, 154, 0.07);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.user-icon img {\n  width: 16px;\n  height: 16px; }\n\n.top-list {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 0; }\n\n.top-list ion-item {\n  text-align: center;\n  --min-height: 36px;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  width: 25%; }\n\n.top-list ion-item ion-label {\n  font-size: 0.75rem;\n  margin: 0;\n  padding-top: 20px; }\n\n.top-list img {\n  width: 18px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.sec-notification {\n  margin: 10px 0; }\n\n.subprofile_tabs {\n  --border-width: 0; }\n\n.subprofile_tabs ion-segment-button {\n    border-radius: 30px;\n    margin: 0 5px;\n    background: rgba(58, 174, 163, 0.11);\n    min-height: 38px;\n    color: #000;\n    text-transform: capitalize;\n    letter-spacing: 0; }\n\n.subprofile_tabs ion-segment-button.segment-button-checked {\n    background: #27a69a;\n    --indicator-color-checked: #27a69a;\n    color: #FFF; }\n\n.subprofile_tabs ion-segment-button.segment-button-checked span {\n    color: #FFF; }\n\n.subprofile_tabs ion-label {\n    margin: 0; }\n\n.share-btn {\n  bottom: 5px;\n  position: absolute;\n  right: 0;\n  --background:#27a69a;\n  --background-activated:#27a69a;\n  --background-focused:#27a69a;\n  --background-hover:#27a69a;\n  --ion-color-shade:#27a69a!important;\n  --ion-color-tint:#27a69a!important;\n  --ion-color-base:rgba(0, 0, 0, 0.35)!important; }\n\n.profile_tabs ion-segment span {\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 0.625rem; }\n\n.ios.top-list {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important; }\n\n.no-data {\n  height: calc(100vh - 150px); }\n\n.photoNodata {\n  height: 70px;\n  background: #f7f7f7; }\n\n.item-card {\n  -webkit-margin-end: 0px !important;\n          margin-inline-end: 0px !important;\n  -webkit-margin-start: 0px !important;\n          margin-inline-start: 0px !important; }\n\n.item-header {\n  padding: 15px 15px 15px 15px; }\n\n.header-right {\n  align-items: center; }\n\n.post-image,\n.post-video {\n  height: calc(100vw - 25px) !important;\n  padding: 0px; }\n\n.post-image img {\n  border-radius: 0px; }\n\n.post-slider {\n  height: calc(100vw - 25px);\n  max-height: none !important; }\n\n.post-slider ion-slide {\n  height: 100% !important; }\n\n.video-icon {\n  top: 15px;\n  left: 15px;\n  padding: 1px 4px;\n  border-radius: 5px;\n  background: #00000029; }\n\n.post-content {\n  padding: 15px; }\n\n.sec-banner .top-banner img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n\n.userNameBlock {\n  display: flex;\n  align-items: center; }\n\n.userNameBlock .userDisplayName {\n    margin-bottom: 0px;\n    font-size: 20px;\n    margin-top: 12px; }\n\n.userNameBlock ion-icon {\n    font-size: 18px;\n    margin-top: 12px;\n    margin-left: 5px; }\n\n.menu-icon {\n  width: 30px !important;\n  height: 30px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxccHJvZmlsZVxcY29uc3VsdGFudC1wcm9maWxlLXZpZXdcXGNvbnN1bHRhbnQtcHJvZmlsZS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQixhQUFhO0VBQUMsc0NBQTJEO0VBQUMsc0JBQXNCO0VBQUMsMkJBQTJCO0VBQUMsZUFBZSxFQUFBOztBQUM3SjtFQUFpQixrQkFBa0I7RUFBQyxVQUFVO0VBQUMsaUJBQWdCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLHVCQUF1QjtFQUFDLHNCQUFzQjtFQUFDLGtCQUFrQixFQUFBOztBQUN2SztFQUFtQixjQUFjO0VBQUMsa0JBQWtCO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQixFQUFBOztBQUM5RztFQUEwQixrQkFBa0I7RUFBQyxTQUFTO0VBQUMsV0FBVyxFQUFBOztBQUNsRTtFQUFVLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWtCO0VBQUMsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUFDLDBCQUF1QjtLQUF2Qix1QkFBdUI7RUFBc0gsbURBQW1EO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsTUFBTSxFQUFBOztBQUN0VDtFQUFXLFdBQVc7RUFBQyxZQUFZO0VBQUMsa0JBQWtCO0VBQUMsb0NBQW9DO0VBQUMsYUFBYTtFQUFDLHVCQUF1QjtFQUFDLG1CQUFtQixFQUFBOztBQUNySjtFQUFlLFdBQVc7RUFBQyxZQUFZLEVBQUE7O0FBQ3ZDO0VBQVUsYUFBYTtFQUFDLDZCQUE2QjtFQUFDLGdCQUFnQixFQUFBOztBQUN0RTtFQUFtQixrQkFBa0I7RUFBQyxrQkFBYTtFQUFNLGtCQUFnQjtFQUFHLHNCQUFvQjtFQUFHLFVBQVUsRUFBQTs7QUFDN0c7RUFBNkIsa0JBQWtCO0VBQUMsU0FBUztFQUFDLGlCQUFpQixFQUFBOztBQUMzRTtFQUFjLFdBQVc7RUFBQyxrQkFBa0I7RUFBQyxNQUFNO0VBQUMsU0FBUztFQUFDLDJCQUEyQixFQUFBOztBQUN6RjtFQUFrQixjQUFjLEVBQUE7O0FBQ2hDO0VBQWlCLGlCQUFlLEVBQUE7O0FBQWhDO0lBQ3VCLG1CQUFtQjtJQUFDLGFBQWE7SUFBQyxvQ0FBb0M7SUFBQyxnQkFBZ0I7SUFBQyxXQUFXO0lBQUMsMEJBQTBCO0lBQUMsaUJBQWlCLEVBQUE7O0FBRHZLO0lBRThDLG1CQUFtQjtJQUFDLGtDQUEwQjtJQUFTLFdBQVcsRUFBQTs7QUFGaEg7SUFHbUQsV0FBVSxFQUFBOztBQUg3RDtJQUljLFNBQVMsRUFBQTs7QUFJdkI7RUFBVyxXQUFVO0VBQUMsa0JBQWlCO0VBQUMsUUFBTztFQUFDLG9CQUFhO0VBQVEsOEJBQXVCO0VBQVEsNEJBQXFCO0VBQVEsMEJBQW1CO0VBQVEsbUNBQWtCO0VBQWtCLGtDQUFpQjtFQUFrQiw4Q0FBaUIsRUFBQTs7QUFDcFA7RUFBK0IsMEJBQTBCO0VBQUMsZ0JBQWdCO0VBQUMsbUJBQW1CLEVBQUE7O0FBRTlGO0VBQWMsMkJBQTJCO0VBQUMsOEJBQThCLEVBQUE7O0FBQ3hFO0VBQVMsMkJBQTJCLEVBQUE7O0FBQ3BDO0VBQWEsWUFBWTtFQUFDLG1CQUFtQixFQUFBOztBQUc3QztFQUNJLGtDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsb0NBQW1DO1VBQW5DLG1DQUFtQyxFQUFBOztBQUV2QztFQUNJLDRCQUE0QixFQUFBOztBQUVoQztFQUNJLG1CQUFtQixFQUFBOztBQUd2Qjs7RUFFSSxxQ0FBcUM7RUFDckMsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDBCQUEwQjtFQUMxQiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsMEJBQXVCO0tBQXZCLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFGdkI7SUFJUSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQU54QjtJQVNRLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3hCO0VBQ0ksc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9jb25zdWx0YW50LXByb2ZpbGUtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wcm9maWxlLWJne2hlaWdodDogMTg1cHg7YmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVtbzMuanBnKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7cGFkZGluZzogMCAxNXB4O31cclxuLnByb2ZpbGUtY29udGVudHtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtNTBweDtwYWRkaW5nLXRvcDoyMHB4O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtwYWRkaW5nLWxlZnQ6IDEwcHg7fVxyXG4ucHJvZmlsZS1jb250ZW50IGF7Y29sb3I6ICM3Nzc3Nzc7Zm9udC1zaXplOiAwLjg1cmVtO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi5wcm9maWxlLWNvbnRlbnQgaW9uLXRleHR7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogMzVweDtsZWZ0OiAxMDBweDt9XHJcbi51c2VyLWltZ3t3aWR0aDogOTBweDtoZWlnaHQ6IDkwcHg7Ym9yZGVyLXJhZGl1czogNTAlO29iamVjdC1maXQ6IGNvdmVyO29iamVjdC1wb3NpdGlvbjogY2VudGVyOy13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpOy1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDgyLCA4MiwgODIsIDAuNTUpO2JveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSg4MiwgODIsIDgyLCAwLjU1KTttYXJnaW4tYm90dG9tOiAxMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7fVxyXG4udXNlci1pY29ue3dpZHRoOiAzNHB4O2hlaWdodDogMzRweDtib3JkZXItcmFkaXVzOiA1MCU7YmFja2dyb3VuZDogcmdiYSgzOSwgMTY2LCAxNTQsIDAuMDcpO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi51c2VyLWljb24gaW1ne3dpZHRoOiAxNnB4O2hlaWdodDogMTZweDt9XHJcbi50b3AtbGlzdHtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO21hcmdpbi1ib3R0b206IDA7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW17dGV4dC1hbGlnbjogY2VudGVyOy0tbWluLWhlaWdodDogMzZweDstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDt3aWR0aDogMjUlO31cclxuLnRvcC1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbHtmb250LXNpemU6IDAuNzVyZW07bWFyZ2luOiAwO3BhZGRpbmctdG9wOiAyMHB4O31cclxuLnRvcC1saXN0IGltZ3t3aWR0aDogMThweDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7fVxyXG4uc2VjLW5vdGlmaWNhdGlvbnttYXJnaW46IDEwcHggMDt9XHJcbi5zdWJwcm9maWxlX3RhYnN7LS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257Ym9yZGVyLXJhZGl1czogMzBweDttYXJnaW46IDAgNXB4O2JhY2tncm91bmQ6IHJnYmEoNTgsIDE3NCwgMTYzLCAwLjExKTttaW4taGVpZ2h0OiAzOHB4O2NvbG9yOiAjMDAwO3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2xldHRlci1zcGFjaW5nOiAwO31cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke2JhY2tncm91bmQ6ICMyN2E2OWE7LS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzI3YTY5YTtjb2xvcjogI0ZGRjt9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCBzcGFue2NvbG9yOiNGRkZ9XHJcbiAgICBpb24tbGFiZWx7bWFyZ2luOiAwO31cclxufVxyXG5cclxuXHJcbi5zaGFyZS1idG57Ym90dG9tOjVweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowOy0tYmFja2dyb3VuZDojMjdhNjlhOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzI3YTY5YTstLWJhY2tncm91bmQtZm9jdXNlZDojMjdhNjlhOy0tYmFja2dyb3VuZC1ob3ZlcjojMjdhNjlhOy0taW9uLWNvbG9yLXNoYWRlOiMyN2E2OWEhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IzI3YTY5YSFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZTpyZ2JhKDAsIDAsIDAsIDAuMzUpIWltcG9ydGFudH1cclxuLnByb2ZpbGVfdGFicyBpb24tc2VnbWVudCBzcGFue3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjYyNXJlbTt9XHJcblxyXG4uaW9zLnRvcC1saXN0e3BhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7fVxyXG4ubm8tZGF0YXtoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7fVxyXG4ucGhvdG9Ob2RhdGF7aGVpZ2h0OiA3MHB4O2JhY2tncm91bmQ6ICNmN2Y3Zjc7fVxyXG5cclxuXHJcbi5pdGVtLWNhcmR7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcbi5oZWFkZXItcmlnaHR7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zdC1pbWFnZSwgXHJcbi5wb3N0LXZpZGVvIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDI1cHgpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnBvc3QtaW1hZ2UgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5wb3N0LXNsaWRlcntcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDI1cHgpO1xyXG4gICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LXNsaWRlciBpb24tc2xpZGV7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udmlkZW8taWNvbntcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDI5O1xyXG59XHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uc2VjLWJhbm5lciAudG9wLWJhbm5lciBpbWd7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi51c2VyTmFtZUJsb2Nre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudXNlckRpc3BsYXlOYW1le1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLm1lbnUtaWNvbntcclxuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/consultant-profile-view.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConsultantProfileViewPage */

  /***/
  function srcAppProfileConsultantProfileViewConsultantProfileViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultantProfileViewPage", function () {
      return ConsultantProfileViewPage;
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


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _consultant_profile_view_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../consultant-profile-view/info-modal/info-modal.component */
    "./src/app/profile/consultant-profile-view/info-modal/info-modal.component.ts");
    /* harmony import */


    var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var _consultant_profile_view_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../consultant-profile-view/notification-modal/notification-modal.component */
    "./src/app/profile/consultant-profile-view/notification-modal/notification-modal.component.ts");
    /* harmony import */


    var _user_profile_view_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../user-profile-view/user-followers/user-followers.component */
    "./src/app/profile/user-profile-view/user-followers/user-followers.component.ts");
    /* harmony import */


    var _modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../modalContent/followers/followers.component */
    "./src/app/modalContent/followers/followers.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/deeplinks/ngx */
    "./node_modules/@ionic-native/deeplinks/ngx/index.js");
    /* harmony import */


    var _settings_privacy_privacy_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../settings/privacy/privacy.page */
    "./src/app/settings/privacy/privacy.page.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../../chats/chat-rooms/chat-rooms.component */
    "./src/app/chats/chat-rooms/chat-rooms.component.ts"); //import { SocialSharing } from '@ionic-native/social-sharing/ngx';


    var ConsultantProfileViewPage = /*#__PURE__*/function () {
      function ConsultantProfileViewPage(router, popoverController, modalController, commonService, navCtrl, actRoute, peopleView, clipboard, deeplink, platform, socialSharing, chatService, actionSheetController) {
        var _this = this;

        _classCallCheck(this, ConsultantProfileViewPage);

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
        platform.ready().then(function () {
          // THIS BELOW CODE WILL CHECK FOR DEEPLINKS FROM OTHER APPS OR BROWSER 
          _this.deeplink.routeWithNavController(_this.navChild, {
            '/privacy': _settings_privacy_privacy_page__WEBPACK_IMPORTED_MODULE_14__["PrivacyPage"]
          }).subscribe(function (match) {
            console.log('Successfully routed', match);
          }, function (nomatch) {
            console.warn('Unmatched Route', nomatch);
          });
        });
      }

      _createClass(ConsultantProfileViewPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.consultID == this.userData.id) {
            this.router.navigate(["/tabs/consultant-profile"]);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.userId = this.userData.id;
          this.actRoute.paramMap.subscribe(function (params) {
            _this2.consultID = params.get('userData');
          });
          this.peopleView.getUserData({
            'userId': this.consultID
          }).subscribe(function (data) {
            _this2.profileData = data;
          });
          this.peopleView.getBlockStatus({
            'blockUserId': this.consultID
          }).subscribe(function (data) {
            if (data.statusDetails.block_status != null && data.statusDetails.block_status == '1') {
              _this2.block = true;
            } else {
              _this2.block = false;
            }
          });
          this.peopleView.getMyPost('1', this.consultID, 1).subscribe(function (data) {
            console.log(data);
            data.posts.data.forEach(function (element) {
              _this2.previewImage = _this2.previewImage.concat(element['image_post']['0']['thumb_path']);
            });
          });
          this.peopleView.getFolloFollowingResult({
            'profileId': this.consultID
          }).subscribe(function (data) {
            _this2.followStatus = data.status;
          });
          this.videoPostData();
        }
      }, {
        key: "openViewer",
        value: function openViewer(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(path); // const modal = await this.modalController.create({
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

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "liked",
        value: function liked(postId, likeStat) {
          var _this3 = this;

          this.myPosts.forEach(function (element, i) {
            if (element.id == postId) {
              _this3.myPosts[i].liked = !likeStat;

              if (likeStat) {
                _this3.myPosts[i].count = _this3.myPosts[i].count - 1;
              } else {
                _this3.myPosts[i].count = _this3.myPosts[i].count + 1;
              }
            }
          });
          this.peopleView.likedPost({
            'postId': postId,
            'liked': likeStat
          }).subscribe(function (data) {
            if (data.status) {
              _this3.commonService.presentToast(data.status);
            }
          });
        }
      }, {
        key: "videoPostData",
        value: function videoPostData() {
          var _this4 = this;

          //postType,userId, videoType,page    
          this.peopleView.getMyPost('1,2,8', this.consultID, 1).subscribe(function (data) {
            console.log('data', data);
            _this4.myPosts = data.posts.data;

            _this4.myPosts.forEach(function (element, i) {
              _this4.myPosts[i].count = element.post_likes.length;

              if (element.post_type == 2) {
                var img = element.video_post[0].thumb_path.split(',');
                element.video_post[0].single_thumb_path = img[0];
              }

              element.post_likes.filter(function (f) {
                if (f.user_id == _this4.userId) {
                  _this4.myPosts[i].liked = true;
                }
              });
              element.post_bookmarks.filter(function (f) {
                if (f.user_id == _this4.userId) {
                  _this4.myPosts[i].bookmarked = true;
                }
              });
            });

            _this4.last_page = data.posts.last_page;
            _this4.currentPage = data.posts.current_page;
            _this4.gotData = true;
          });
        }
      }, {
        key: "loadVideoData",
        value: function loadVideoData(event) {
          var _this5 = this;

          setTimeout(function () {
            if (_this5.currentPage > 0) {
              //postType,userId, videoType,page 
              //getVedioType 
              _this5.peopleView.getMyPost('1,2,8', _this5.consultID, _this5.currentPage + 1).subscribe(function (data) {
                data.posts.data.forEach(function (element, i) {
                  element.count = element.post_likes.length;

                  if (element.post_type == 2) {
                    var img = element.video_post[0].thumb_path.split(',');
                    element.video_post[0].single_thumb_path = img[0];
                  }

                  element.post_likes.filter(function (f) {
                    if (f.user_id == _this5.userId) {
                      data.posts.data[i].liked = true;
                    }
                  });
                  element.post_bookmarks.filter(function (f) {
                    if (f.user_id == _this5.userId) {
                      _this5.myPosts[i].bookmarked = true;
                    }
                  });
                });
                _this5.myPosts = _this5.myPosts.concat(data.posts.data);
                _this5.last_page = data.posts.last_page;
                _this5.currentPage = data.posts.current_page;
              });
            }

            event.target.complete();

            if (_this5.last_page <= _this5.currentPage + 1) {
              event.target.disabled = true;
            }
          }, 500);
        }
      }, {
        key: "followUp",
        value: function followUp(followStatus) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var status;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (followStatus == 'Unfollow') {
                      status = 'true';
                    } else {
                      status = 'false';
                    }

                    this.commonService.presentLoader();
                    this.peopleView.followUpPeople({
                      'uid': this.userId,
                      'followUpId': this.consultID,
                      'status': status
                    }).subscribe(function (data) {
                      _this6.commonService.dismissLoader();

                      if (data.followStatus == 'false') {
                        _this6.followStatus = 'Unfollow';

                        _this6.commonService.presentToast('Successfully Followed !');
                      } else if (data.followStatus == 'true' && data.followResult == '1') {
                        _this6.followStatus = 'Followback';

                        _this6.commonService.presentToast('Successfully UnFollowed !');
                      } else {
                        _this6.followStatus = 'Follow';

                        _this6.commonService.presentToast('Successfully UnFollowed !');
                      }
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getContent",
        value: function getContent() {
          return document.querySelector('ion-content');
        }
      }, {
        key: "videoTabsScroll",
        value: function videoTabsScroll() {
          this.tabs = true;
          this.getContent().scrollToTop(500);
        }
      }, {
        key: "otherTabsScroll",
        value: function otherTabsScroll() {
          this.tabs = false;
          this.getContent().scrollToTop(500);
        }
      }, {
        key: "chatPopup",
        value: function chatPopup(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.commonService.presentLoader();
                    this.chatService.checkChatUser({
                      'id': this.consultID
                    }).subscribe(function (data) {
                      if (data.length > 0) {
                        _this7.commonService.dismissLoader();

                        var chatRoom = data[0].chatroom.room;
                        var chatReceiverId = data[0].receiverID;
                        var chatSenderId = data[0].senderID;
                        var chatType = data[0].type;
                        var roomId = data[0].id;
                        var request_id = data[0].chatroom.request_id;

                        _this7.commonService.dismissLoader();

                        var fileData = {
                          chatType: parseInt(chatType),
                          room: chatRoom,
                          receiverId: parseInt(chatReceiverId),
                          requestId: parseInt(request_id)
                        };

                        _this7.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_17__["ChatRoomsComponent"], 'fullModal', fileData);
                      } else {
                        _this7.commonService.dismissLoader(); // chat_type = 1:consultant,2:user,3:program


                        _this7.router.navigate(["/first-message/" + _this7.consultID + "/1"]);
                      }
                    }, function (err) {
                      _this7.commonService.presentToast("Couldnt load data, Something went wrong.");

                      _this7.commonService.dismissLoader();
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "reportPopup",
        value: function reportPopup(ev) {
          var _this8 = this;

          var btns = [{
            text: 'Cancel',
            handler: function handler(blah) {}
          }, {
            text: 'Okay',
            handler: function handler() {
              _this8.sendReport();
            }
          }];
          this.commonService.presentAlert('Report A User', 'Are you sure.?', btns, '');
        }
      }, {
        key: "blockUser",
        value: function blockUser(event) {
          var _this9 = this;

          this.commonService.presentLoader();
          this.peopleView.blockuser({
            'blockUserId': this.consultID,
            'blocked': event
          }).subscribe(function (data) {
            _this9.commonService.dismissLoader();

            if (data.statusDetails.block_status) {
              _this9.commonService.presentToast('Blocked User');

              _this9.block = true;
            } else {
              _this9.commonService.presentToast('UnBlocked User');

              _this9.block = false;
            }

            (function (err) {
              _this9.commonService.dismissLoader();
            });
          });
        }
      }, {
        key: "notification1",
        value: function notification1() {
          this.commonService.presentModal(_modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_8__["FollowersComponent"], 'fullModal', {
            'profileData': this.profileData,
            'otherUser': true
          });
        }
      }, {
        key: "infomodal",
        value: function infomodal() {
          this.commonService.presentModal(_consultant_profile_view_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_4__["InfoModalComponent"], 'bottomModal', null);
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal() {
          this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_5__["NutritionModalComponent"], 'fullModal', null);
        }
      }, {
        key: "notificationModal",
        value: function notificationModal() {
          this.commonService.presentModal(_consultant_profile_view_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_6__["NotificationModalComponent"], 'fullModal', {
            'profileData': this.profileData
          });
        }
      }, {
        key: "userFollowers",
        value: function userFollowers() {
          this.commonService.presentModal(_user_profile_view_user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_7__["UserFollowersComponent"], 'fullModal', {
            'userId': this.consultID
          });
        } //------------------ -- GO BACK  ------------

      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "sendReport",
        value: function sendReport() {
          var _this10 = this;

          this.commonService.presentLoader();
          this.peopleView.reportPeople({
            'userId': this.consultID,
            'message': 'reported'
          }).subscribe(function (data) {
            _this10.commonService.presentToast("Reported account.");

            _this10.commonService.dismissLoader();
          }, function (err) {
            _this10.commonService.presentToast("Reported account.");

            _this10.commonService.dismissLoader();
          });
        }
      }, {
        key: "shareModal",
        value: function shareModal() {
          // console.log('testtest',this.socialSharing);
          // this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
          //   // Success!
          // }).catch(() => {
          //   // Error!
          // });
          this.clipboard.copy(_config_config__WEBPACK_IMPORTED_MODULE_11__["Config"].profileLink + this.consultID);
          this.clipboard.paste().then(function (resolve) {
            alert(resolve);
          }, function (reject) {
            alert('Error: ' + reject);
          });
        }
      }, {
        key: "shareItem",
        value: function shareItem() {
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
          this.socialSharing.share("Profile Page", "", "", "https://ionicinto.wdipl.com/consultant-profile-view/" + this.consultID).then(function () {})["catch"](function () {});
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var actionSheet, _yield$actionSheet$on, role, data;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionSheetController.create({
                      header: 'More Actions',
                      cssClass: 'my-custom-class',
                      buttons: [{
                        text: 'Unfollow',
                        icon: 'heart-circle',
                        handler: function handler() {
                          console.log('Delete clicked');
                        }
                      }, {
                        text: 'Chat',
                        icon: 'chatbox-ellipses',
                        handler: function handler() {
                          console.log('chat');
                        }
                      }, {
                        text: 'Report',
                        icon: 'alert-circle',
                        handler: function handler() {
                          console.log('report');
                        }
                      }, {
                        text: 'Block',
                        icon: 'ban',
                        handler: function handler() {
                          console.log('block');
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                    _context4.next = 7;
                    return actionSheet.onDidDismiss();

                  case 7:
                    _yield$actionSheet$on = _context4.sent;
                    role = _yield$actionSheet$on.role;
                    data = _yield$actionSheet$on.data;
                    console.log('onDidDismiss resolved with role and data', role, data);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ConsultantProfileViewPage;
    }();

    ConsultantProfileViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__["PeopleViewService"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"]
      }, {
        type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"])], ConsultantProfileViewPage.prototype, "navChild", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyMenu', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ConsultantProfileViewPage.prototype, "menuElement", void 0);
    ConsultantProfileViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consultant-profile-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./consultant-profile-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/consultant-profile-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../user-profile/user-profile.page.scss */
      "./src/app/user-profile/user-profile.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./consultant-profile-view.page.scss */
      "./src/app/profile/consultant-profile-view/consultant-profile-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_10__["PeopleViewService"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])], ConsultantProfileViewPage);
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileConsultantProfileViewReportPopupReportPopupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #26a69a;\n  --color-activated: #26a69a;\n  --color-focused: #26a69a;\n  color: #26a69a; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb25zdWx0YW50LXByb2ZpbGUtdmlldy9yZXBvcnQtcG9wdXAvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2ZpbGVcXGNvbnN1bHRhbnQtcHJvZmlsZS12aWV3XFxyZXBvcnQtcG9wdXBcXHJlcG9ydC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFLLHVCQUF1QjtFQUFDLGdCQUFnQjtFQUFDLFVBQVM7RUFBQyxtQ0FBdUI7RUFBYSxrQkFBYTtFQUFNLHlCQUFhO0VBQWEsaUNBQXFCO0VBQWEsK0JBQW1CO0VBQWEsZ0JBQVE7RUFBUywwQkFBa0I7RUFBUyx3QkFBZ0I7RUFBUyxjQUFjLEVBQUE7O0FBRzlSO0VBQU8sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2NvbnN1bHRhbnQtcHJvZmlsZS12aWV3L3JlcG9ydC1wb3B1cC9yZXBvcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6IG5vbmU7cGFkZGluZzowOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50Oy0tYm94LXNoYWRvdzogbm9uZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50Oy0tY29sb3I6ICMyNmE2OWE7LS1jb2xvci1hY3RpdmF0ZWQ6ICMyNmE2OWE7LS1jb2xvci1mb2N1c2VkOiAjMjZhNjlhO2NvbG9yOiAjMjZhNjlhO31cclxuLy8gLmJ0bi1ncmF5e2JhY2tncm91bmQ6ICM5OTk7fVxyXG4vLyAuYnRuLWdyZWVue2JhY2tncm91bmQ6ICMyNmE2OWE7fVxyXG4ubXQtMTB7bWFyZ2luLXRvcDogMTBweDt9Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/profile/consultant-profile-view/report-popup/report-popup.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ReportPopupComponent */

  /***/
  function srcAppProfileConsultantProfileViewReportPopupReportPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportPopupComponent", function () {
      return ReportPopupComponent;
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

    var ReportPopupComponent = /*#__PURE__*/function () {
      function ReportPopupComponent(events, navParams, popoverController) {
        _classCallCheck(this, ReportPopupComponent);

        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
      }

      _createClass(ReportPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.page = this.navParams.get('data');
        }
      }, {
        key: "eventFromPopover",
        value: function eventFromPopover() {
          this.events.publish('fromPopoverEvent');
          this.popoverController.dismiss();
        }
      }]);

      return ReportPopupComponent;
    }();

    ReportPopupComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    ReportPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/consultant-profile-view/report-popup/report-popup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report-popup.component.scss */
      "./src/app/profile/consultant-profile-view/report-popup/report-popup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], ReportPopupComponent);
    /***/
  }
}]);
//# sourceMappingURL=profile-consultant-profile-view-consultant-profile-view-module-es5.js.map