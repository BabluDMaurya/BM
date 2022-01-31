function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-my-profile-my-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/my-profile.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/my-profile.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <h6 class=\"ion-no-margin\">{{profileData?.userData?.user_name}}</h6>\r\n    </ion-item>\r\n    <ion-item class=\"ion-text-end\" slot=\"end\">\r\n      <div class=\"icon-right-side\">\r\n        <a [routerLink]=\"['/all-list']\" class=\"set-icon\"> \r\n          <!-- <ion-icon ios=\"ios-cash\" md=\"md-cash\"></ion-icon> -->  \r\n          <ion-icon src=\"../../../assets/images/sponsor.svg\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"sponcerCount > 0\">{{ sponcerCount }}</ion-badge> \r\n        </a>\r\n        <!-- <a [routerLink]=\"['/sponcer-chat']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"sponcerCount > 0\">{{ sponcerCount }}</ion-badge>          \r\n        </a> -->\r\n        <a [routerLink]=\"['/tabs/search']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/notification']\" id=\"notificationcount\" class=\"noti-bell\">\r\n          <ion-icon ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\r\n          <ion-badge slot=\"end\" *ngIf=\"notificationCount > 0\">{{ notificationCount }}</ion-badge>\r\n        </a>\r\n\r\n        <a [routerLink]=\"['/tabs/bookmark']\">\r\n          <!-- <a (click)=\"showbookmark()\"> -->\r\n          <ion-icon ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/people']\" class=\"foll-people\">\r\n          <ion-icon ios=\"md-people\" md=\"md-people\"></ion-icon>\r\n        </a>\r\n        <a [routerLink]=\"['/settings']\" class=\"set-icon\">\r\n          <ion-icon ios=\"ios-settings\" md=\"md-settings\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">  \r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"gotData\">\r\n    <ion-row *ngIf=\"tabs\">\r\n      <ion-col class=\"ion-no-padding\">\r\n        <div class=\"sec-banner\">\r\n          <div class=\"top-banner\"> <img [defaultImage] = \"bannerDefaultImage\" [lazyLoad]=\"bannerImage\">\r\n          </div>\r\n          <div class=\"profile-heading\">\r\n            <div class=\"img-profile\">\r\n              <img [defaultImage] = \"profileDefaultImage\" [lazyLoad]=\"profileImage\">              \r\n            </div>\r\n            <ion-text>\r\n              <h6 class=\"userDisplayName\" *ngIf=\"profileData?.userData?.bios?.display_name\">\r\n                {{profileData?.userData?.bios?.display_name}}</h6>\r\n              <a class=\"ion-no-margin\" *ngIf=\"!profileData?.userData?.bios?.display_name\"\r\n               [routerLink]=\"['/tabs/edit-profile']\">Add display name +</a>\r\n            </ion-text>\r\n            <!-- <div class=\"tagline\">\r\n              <a>\r\n                (click)=\"infomodal()\"\r\n                <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon> rushabh_parekh\r\n              </a>              \r\n            </div> -->\r\n          </div>\r\n          <div class=\"user-name\">\r\n            <ion-text>\r\n              <p>{{profileData?.userData?.additional?.tag_line}}</p>\r\n            </ion-text>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- N O N  S T I C K Y  T A B -->\r\n\r\n    <!-- <ion-row *ngIf=\"tabs\" >\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-list lines=\"none\" class=\"top-list\">\r\n          <ion-item (click)=\"notification1()\" class=\"box-shadow-none\">\r\n            <div class=\"top-icon\">\r\n              <ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\r\n            </div>\r\n            <ion-label>Info</ion-label>\r\n          </ion-item> -->\r\n          <!--  -->\r\n          <!-- <ion-item detail=\"false\" [routerLink]=\"['/nutrition-list']\" class=\"box-shadow-none\">\r\n            <div class=\"top-icon\">\r\n              <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n            </div>\r\n            <ion-label>Nutrition</ion-label>\r\n          </ion-item> -->\r\n          <!-- [routerLink]=\"['/consultant-videos']\" -->\r\n          <!-- <ion-item detail=\"false\" [routerLink]=\"['/consultant-videos']\" class=\"box-shadow-none\">\r\n            <div class=\"top-icon\">\r\n              <ion-icon ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n            </div>\r\n            <ion-label>Videos</ion-label>\r\n          </ion-item> -->\r\n          <!-- <ion-item detail=\"false\" [routerLink]=\"['/consultant-videos']\" class=\"box-shadow-none\">\r\n            <div class=\"top-icon\"> -->\r\n          <!-- </ion-item>\r\n          <ion-item detail=\"false\" [routerLink]=\"['/upcoming']\" class=\"box-shadow-none\">\r\n            <div class=\"top-icon\"> -->\r\n              <!-- <ion-icon ios=\"ios-flame\" md=\"md-flame\" (click)=\"presentToast()\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon> -->\r\n              <!-- <ion-icon ios=\"md-calendar\" md=\"md-calendar\"></ion-icon> -->\r\n            <!-- </div>\r\n            <ion-label>Upcoming</ion-label>\r\n            </div>\r\n            <ion-label >Upcoming</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n        <!-- N O N  S T I C K Y  T A B  E N D -->\r\n\r\n\r\n <!-- S T I C K Y  T A B -->\r\n\r\n  <ion-item-divider lines=\"none\" sticky>\r\n    <ion-col style=\"height: auto; padding: 0;\" lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n      <ion-list lines=\"none\" style=\"padding: 5px 0; margin: 0;\" class=\"top-list\" [(ngModel)]=\"consultantProfile\">\r\n        <ion-item style=\" padding: 10px 0;\" class=\"box-shadow-none\" value=\"aboutInfo\" (click)=\"notification1()\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\r\n          </div>\r\n          <ion-label>Info</ion-label>\r\n        </ion-item>\r\n        <ion-item detail=\"false\" style=\" padding: 10px 0;\" class=\"box-shadow-none icon-div\" value=\"post\" [routerLink]=\"['/nutrition-list']\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-nutrition\" md=\"ios-nutrition\"></ion-icon>\r\n          </div>\r\n          <ion-label>Nutrition</ion-label>\r\n        </ion-item>\r\n        <ion-item detail=\"false\" style=\" padding: 10px 0;\" class=\"box-shadow-none\" value=\"upcoming\" [routerLink]=\"['/consultant-videos']\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          </div>\r\n          <ion-label>Videos</ion-label>\r\n        </ion-item>\r\n        <ion-item  detail=\"false\" style=\" padding: 10px 0;\" class=\"box-shadow-none\" value=\"upcoming\" [routerLink]=\"['/upcoming']\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n          </div>\r\n          <ion-label>Upcoming</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-item-divider>\r\n\r\n   <!-- S T I C K Y  T A B  E N D-->\r\n\r\n    <!-- <ion-row *ngIf=\"tabs\" class=\"mb-10\">\r\n      <ion-col size=\"12\" class=\"photo-heading ion-padding-horizontal\">\r\n        <ion-text>Photo's</ion-text>\r\n         </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-slides [options]=\"sliderOpts\" class=\"profile-slider\">\r\n          <ion-slide *ngFor=\"let preview of previewImage\">\r\n            <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+preview\" (click)=\"openViewer(preview)\">\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <div class=\"no-data photoNodata\" *ngIf=\"previewImage.length==0\">\r\n          <p>No post added yet.</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row class=\"user_details\" [routerLink]=\"(upcomingList[0]?.user_id == loginUserData?.id) ? ['/program-details',upcomingList[0]?.id] : ['/program-view',upcomingList[0]?.id]\"> \r\n      <h3 class=\"list-person\">{{upcomingList[0]?.title}}</h3>\r\n      <span class=\"list-name d-block\">{{upcomingList[0]?.type_id}}</span>\r\n      <!-- <span class=\"list-name d-block\">By:{{upcoming?.program_user?.user_name}} {{upcoming?.convertedTime | date:'medium'}}</span> -->\r\n      <!-- <ion-col size=\"4\" class=\"ion-no-padding\">\r\n          <ion-text><p class=\"count_time\">{{dd | async}}</p> Days</ion-text>\r\n      </ion-col> -->\r\n      <div class=\"user_time\" *ngIf=\"!noData\">\r\n      <ion-col size=\"4\" class=\"ion-no-padding ho\" *ngIf=\"!programDetail?.ended\">\r\n        <ion-text style=\"text-align: center;\"><p class=\"count_time\">{{ upcomingList[0]?.dd |number }} </p> Days</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-no-padding ho\" *ngIf=\"!programDetail?.ended\">\r\n        <ion-text style=\"text-align: center;\"><p class=\"count_time\">{{ upcomingList[0]?.hh |number }} </p> Hours</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n        <ion-text style=\"text-align: center;\"><p class=\"count_time\">{{ upcomingList[0]?.mm |number }} </p> Minutes</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n        <ion-text style=\"text-align: center;\"><p class=\"count_time\">{{ upcomingList[0]?.ss |number }} </p> Seconds</ion-text>\r\n      </ion-col>\r\n      </div>\r\n    </ion-row> \r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-list class=\"ion-no-padding\">\r\n          <ion-item-group>\r\n\r\n            <!-- T H R E E  I C O N S  -->\r\n            \r\n            <!-- <ion-item-divider lines=\"none\" sticky>\r\n              <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n                <ion-segment class=\"ion-no-padding\" [(ngModel)]=\"consultantProfile\">\r\n                  <ion-segment-button value=\"aboutInfo\" (click)=\"videoTabsScroll()\">\r\n                    <ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\r\n                    <span>Videos</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"post\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"ios-copy\" md=\"md-copy\"></ion-icon>\r\n                    <span>Post</span>\r\n                  </ion-segment-button>\r\n                  <ion-segment-button value=\"upcoming\" (click)=\"otherTabsScroll()\">\r\n                    <ion-icon ios=\"md-calendar\" md=\"md-calendar\"></ion-icon>\r\n                    <span>Upcoming</span>\r\n                  </ion-segment-button>\r\n                </ion-segment>\r\n              </ion-toolbar>\r\n            </ion-item-divider> -->\r\n\r\n         <!-- T H R E E  I C O N S  E N D -->\r\n\r\n            <!-- <ion-item-divider lines=\"none\" sticky *ngIf=\"tabs\">\r\n              <ion-segment [(ngModel)]=\"videotabs\" class=\"profile_tabs subprofile_tabs\"> -->\r\n                <!-- <ion-segment-button value=\"videotabs1\">\r\n                  <ion-label>Open</ion-label>\r\n                </ion-segment-button> -->\r\n                <!-- <ion-segment-button value=\"videotabs2\">\r\n                  <ion-label>Exclusive</ion-label>\r\n                </ion-segment-button> -->\r\n                <!-- <ion-segment-button value=\"videotabs3\">\r\n                  <ion-label>Saved</ion-label>\r\n                </ion-segment-button> -->\r\n              <!-- </ion-segment>\r\n            </ion-item-divider> -->\r\n            <ion-item-sliding>\r\n              <div [ngSwitch]=\"consultantProfile\">\r\n                <!-- -------------- V I D E O    V I E W  ------------------>\r\n                <ion-list class=\"ion-no-padding\" lines=\"none\" *ngSwitchCase=\"'aboutInfo'\">\r\n                  \r\n                  <div [ngSwitch]=\"videotabs\" *ngFor=\"let post of myPosts\" >\r\n                    <!-- {{post.is_delete}} -->\r\n                    <div>\r\n                      <!-- <div *ngSwitchCase=\"'videotabs1'\"> -->\r\n                      <!-- <ion-card class=\"item-card\" *ngIf=\"!post.is_delete && post['video_post']['0']['video_type'] == 1\"> -->\r\n\r\n                      <!-- <ion-card class=\"item-card\" *ngIf=\"post['video_post']['0']['video_type'] == 1 || post['video_post']['0']['video_type'] == 2\"> -->\r\n                      <ion-card class=\"item-card\" *ngIf=\"post?.post_type == 2\">\r\n\r\n                        <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.id,'']\">\r\n                          <ion-avatar>\r\n                            <!-- <img [defaultImage]=\"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\"/> -->\r\n                            <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\"\r\n                              *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                          </ion-avatar>\r\n                          <div class=\"header-right\">\r\n                            <ion-label>\r\n                              <ion-card-title>{{loginUserData.user_name}}</ion-card-title>\r\n                              <ion-card-subtitle>{{loginUserData.location}}</ion-card-subtitle>\r\n                              <!-- <ion-card-subtitle *ngIf=\"post['video_post']['0']['video_type'] == 2\">Exclusive</ion-card-subtitle> -->\r\n                            </ion-label>\r\n                            <ion-text class=\"post-timedate\">\r\n                              <p class=\"post-date\">{{post?.created_at}}</p>\r\n                            </ion-text>\r\n                          </div>\r\n                        </ion-card-header>\r\n                        <ion-card-content class=\"ion-no-padding item-content\">\r\n                          <div class=\"img-container\">\r\n                            <ion-thumbnail class=\"post-video\" [routerLink]=\"['/videos',post.id,'']\"\r\n                            *ngIf=\"post['video_post']['0']['thumb_path']\">\r\n                            <ion-card-subtitle class=\"exclusive-text\" *ngIf=\"post['video_post']['0']['video_type'] == 2\">Exclusive</ion-card-subtitle>\r\n                            <img class=\"post-thumbnail\" [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"storagePath+post['video_post']['0']['thumb_path']\" alt=\"Video Thumnail\">\r\n                            <!-- <img src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n                            <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n                          </ion-thumbnail>\r\n                          </div>\r\n                          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n\r\n                          <div class=\"post-content\">\r\n                            <ion-list class=\"item-post\" lines=\"none\">\r\n                              <ion-item>\r\n                                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                                  <span>{{post?.count}}</span>\r\n                                </div>\r\n                                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment == 0\">\r\n                                  <!-- <span *ngIf=\"loginUserData?.comment_disable == 0\"> -->\r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                                    <span>{{post.total_comments.length}}</span>\r\n                                  <!-- </span> -->\r\n                                </div>\r\n                              </ion-item>\r\n                              <ion-item>\r\n                                <div (click)=\"showOptions(post?.id ,post?.disable_comment)\">\r\n                                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                                </div>\r\n                              </ion-item>\r\n                            </ion-list>\r\n                            <!-- -------  Description post with  post type = 2 -->\r\n                            <div *ngIf=\"post?.post_type==2\">\r\n                              <p class=\"mb-10\"\r\n                                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length < 30\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p class=\"mb-10\"\r\n                                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                            <!-- ------- ends here   post type = 2 -->\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                      <!-- Image & posts -->\r\n\r\n                      <ion-card class=\"item-card\"   *ngIf=\"post?.post_type == 1 || post?.post_type == 8 \">\r\n                        <span  >    \r\n                        <ion-card-header class=\"item-header\" >\r\n                          <ion-avatar>\r\n                            <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                            <img src=\"profileDefaultImage\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                          </ion-avatar>\r\n                          <div class=\"header-right\">\r\n                            <ion-label>\r\n                              <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n                              <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n                            </ion-label>\r\n                            <ion-text class=\"post-timedate\">\r\n                              <p class=\"post-date\">{{post?.created_at}}</p>\r\n                            </ion-text>\r\n                          </div>\r\n                        </ion-card-header>\r\n                        <ion-card-content class=\"ion-no-padding item-content\">\r\n                          <div class=\"img-container\">\r\n                            <ion-thumbnail class=\"post-image\" *ngIf=\"post['image_post']['0']['thumb_path']\">\r\n                              <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n                                <ion-slide *ngFor=\"let imgpath of post['image_post']['0']['thumb_path']; let i =index;\">\r\n                                  <img (click)=\"openViewer(post['image_post']['0']['image_path'][i])\" src=\"{{url}}{{imgpath}}\" alt=\"{{imgpath}}\" />\r\n                                </ion-slide>\r\n                              </ion-slides>\r\n                            </ion-thumbnail>\r\n                          </div>\r\n                          <div class=\"post-content\">\r\n                            <!-- -------  Description post with  post type = 8 -->\r\n                            <div *ngIf=\"post?.post_type==8\">\r\n                              <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p class=\"mb-10\" *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                            <!-- ------- ends here   post type = 8 -->\r\n                            <ion-list class=\"item-post\" lines=\"none\">\r\n                              <ion-item>\r\n                                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> \r\n                                  <span>{{post?.count}}</span>\r\n                                </div>\r\n                                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment==0\">\r\n                                  <span class=\"d-flex\">\r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                                    <span>{{post.total_comments.length}}</span>\r\n                                  </span>\r\n                                </div>\r\n                              </ion-item>\r\n                              <!-- --------------- bookmark for only  othepost on own -------->\r\n                              <ion-item *ngIf=\"post?.post_type==1 && consultID\">         \r\n                                  <div (click)=\"bookmarked(post?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                                    <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                                  </div>           \r\n                              </ion-item>\r\n                    \r\n                              <ion-item  *ngIf=\"!consultID\">         \r\n                                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                                </div>           \r\n                              </ion-item>\r\n                            </ion-list>\r\n                             <!-- --------------- bookmark ends here------------ -->\r\n                            <!-- -------  Description for  I-M-A-G-E  post with  post type = 1-->\r\n                            <div *ngIf=\"post?.post_type==1\">\r\n                              <p *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length < 30\"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p\r\n                                *ngIf=\"post['image_post']['0'].description && post['image_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{profileData.userData.user_name}}</span>{{post['image_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                            <!-- ------- ends here   post type = 1-->\r\n                          </div>\r\n                        </ion-card-content>  \r\n                      </span>\r\n                      </ion-card>\r\n                      <!-- Program Cards -->\r\n                      <ion-card class=\"item-card\"   *ngIf=\"post?.post_type == 9 && post['program_post'].length > 0\">\r\n                        <ion-card-header class=\"item-header\">\r\n                          <ion-avatar>\r\n                            <img src=\"{{profilePicUrl}}{{profileData?.userData?.bios?.profile_pic}}\" *ngIf=\"profileData?.userData?.bios?.profile_pic\">\r\n                            <img src=\"profileDefaultImage\" *ngIf=\"!profileData?.userData?.bios?.profile_pic\">\r\n                          </ion-avatar>\r\n                          <div class=\"header-right\">\r\n                            <ion-label>\r\n                              <ion-card-title>{{profileData.userData.user_name}}</ion-card-title>\r\n                              <ion-card-subtitle>{{profileData.userData.location}}</ion-card-subtitle>\r\n                            </ion-label>\r\n                            <!-- <div (click)=\"addBookmark(program?.id, program?.bookmarked , 5)\" class=\"{{ program?.bookmarked ?'active':'inactive' }}\">\r\n                              <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                            </div> -->\r\n                          </div>\r\n                        </ion-card-header>\r\n                        <ion-card-content class=\"ion-no-padding item-content\" >\r\n                          <div class=\"img-container\">\r\n                            <ion-thumbnail class=\"post-image\" [routerLink]=\" post['program_post']['0']?.user_id==profileData.userData?.id ? ['/program-details/', post['program_post']['0']?.id] : ['/program-view/', post['program_post']['0']?.id]\" >\r\n                              <img class=\"post-thumbnail\" src=\"../../assets/images/demo3.jpg\">\r\n                            </ion-thumbnail>\r\n                          </div>\r\n                          <div class=\"post-content\">\r\n                            <ion-list class=\"item-post\" lines=\"none\">\r\n                              <ion-item>\r\n                                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon> \r\n                                  <span>{{post?.count}}</span>\r\n                                </div>\r\n                                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment==0\">\r\n                                  <span class=\"d-flex\">\r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> \r\n                                    <span>{{post.total_comments.length}}</span>\r\n                                  </span>\r\n                                </div>\r\n                              </ion-item>\r\n                              <!-- --------------- bookmark for only  othepost on own -------->\r\n                              <ion-item *ngIf=\"post?.post_type==1 && consultID\">         \r\n                                  <div (click)=\"bookmarked(post?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                                    <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                                  </div>           \r\n                              </ion-item>\r\n                    \r\n                              <ion-item  *ngIf=\"!consultID\">         \r\n                                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                                </div>           \r\n                              </ion-item>\r\n                            </ion-list>\r\n                            <span class=\"username-text text-green\">{{ post['program_post']['0']?.title}}</span>\r\n                            <p class=\"mb-10\" *ngIf=\"post['program_post']['0']?.description && post['program_post']['0']?.description.length < 30\">\r\n                              {{ post['program_post']['0']?.description.substr(0, 100)}} </p>\r\n                            <p class=\"mb-10\" *ngIf=\"post['program_post']['0']?.description && post['program_post']['0']?.description.length > 29 && expanded !=  post['program_post']['0'].id\">\r\n                              {{ post['program_post']['0']?.description.substr(0, 29)}}\r\n                              <span (click)=\"expanded =post['program_post']['0'].id\"\r\n                                class=\"text-green\">{{expanded==   post['program_post']['0'].id?'View less':'View more'}}</span></p>\r\n                            <p class=\"mb-10\" *ngIf=\"expanded ==  post['program_post']['0'].id \">{{ post['program_post']['0']?.description}}\r\n                              <span (click)=\"expanded = 0\" class=\"text-green\">{{expanded==   post['program_post']['0'].id ?'View less':'View more'}}</span>\r\n                            </p>\r\n                  \r\n                          </div>\r\n                         \r\n                        </ion-card-content>\r\n                  \r\n                      </ion-card>\r\n                      <!-- <div class=\"no-data\" *ngIf=\"post['video_post']['0']['video_type'] != 1 && post?.length < 1\" style=\"height: calc(100vh - 175px)\"> -->\r\n\r\n                        <div class=\"no-data\" *ngIf=\" post?.length < 1\" style=\"height: calc(100vh - 175px)\">\r\n                          <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                          <p>Media Not Found.</p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div *ngSwitchCase=\"'videotabs2'\">\r\n                      <ion-card class=\"item-card\" *ngIf=\"post['video_post']['0']['video_type'] == 2\">\r\n                        <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.id,'']\">\r\n                          <ion-avatar>\r\n                            <img [defaultImage]=\"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\"/>\r\n                           </ion-avatar>\r\n                          <div class=\"header-right\">\r\n                            <ion-label>\r\n                              <ion-card-title>{{loginUserData.user_name}}</ion-card-title>\r\n                              <ion-card-subtitle>{{loginUserData.location}}</ion-card-subtitle>\r\n                            </ion-label>\r\n                            <ion-text class=\"post-timedate\">\r\n                              <p class=\"post-date\">{{post?.created_at}}</p>\r\n                            </ion-text>\r\n                          </div>\r\n                        </ion-card-header>\r\n                        <ion-card-content class=\"ion-no-padding item-content\">\r\n                          <ion-thumbnail [routerLink]=\"['/videos',post.id,'']\"\r\n                            *ngIf=\"post['video_post']['0']['thumb_path']\">\r\n                            <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"storagePath+post['video_post']['0']['thumb_path']\" alt=\"Video Thumnail\">\r\n                         </ion-thumbnail>\r\n                          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n\r\n                          <div class=\"post-content\">\r\n                            <ion-list class=\"item-post\" lines=\"none\">\r\n                              <ion-item>\r\n                                <div [routerLink]=\"['/comments',post.id]\"\r\n                                *ngIf=\"post?.disable_comment == 0\">\r\n                                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                                  <span>{{post?.total_comments.length}}</span>\r\n                                </div>\r\n                                <div (click)=\"liked(post?.id,post.liked)\"\r\n                                  class=\"{{ post?.liked ?'active':'inactive' }}\">\r\n                                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                                  <span>{{post?.count}}</span>\r\n                                </div>\r\n                              </ion-item>\r\n                              <ion-item>\r\n                                <div (click)=\"showOptions(post?.id ,post?.disable_comment)\">\r\n                                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                                </div>\r\n                              </ion-item>\r\n                            </ion-list>\r\n                            <div *ngIf=\"post?.post_type==2\">\r\n                              <p class=\"mb-10\"\r\n                                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length < 30\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p class=\"mb-10\"\r\n                                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                          \r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                      <div class=\"no-data\" *ngIf=\"post['video_post']['0']['video_type'] != 2 && post?.length < 1\" style=\"height: calc(100vh - 175px)\">\r\n                        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                        <p>Exclusive Video Not Found.</p>\r\n                      </div>\r\n                    </div> -->\r\n                    <!-- <div *ngSwitchCase=\"'videotabs3'\">\r\n                      <ion-card class=\"item-card\" *ngIf=\"post['video_post']['0']['video_type'] == 3\">\r\n                   \r\n                        <ion-card-header class=\"item-header\" [routerLink]=\"['/videos',post.id,'']\">\r\n                          <ion-avatar>\r\n                            <img [defaultImage]=\"profileDefaultImage\" [lazyLoad]=\"profilePicUrl+profileData?.userData?.bios?.profile_pic\"/>\r\n                            </ion-avatar>\r\n                          <div class=\"header-right\">\r\n                            <ion-label>\r\n                              <ion-card-title>{{loginUserData.user_name}}</ion-card-title>\r\n                              <ion-card-subtitle>{{loginUserData.location}}</ion-card-subtitle>\r\n                            </ion-label>\r\n                            <ion-text class=\"post-timedate\">\r\n                              <p class=\"post-date\">{{post?.created_at}}</p>\r\n                            </ion-text>\r\n                          </div>\r\n                        </ion-card-header>\r\n                        <ion-card-content class=\"ion-no-padding item-content\">\r\n                          <ion-thumbnail [routerLink]=\"['/videos',post.id,'']\"\r\n                            *ngIf=\"post['video_post']['0']['thumb_path']\">\r\n                            <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"storagePath+post['video_post']['0']['thumb_path']\" alt=\"Video Thumnail\">\r\n                             </ion-thumbnail>\r\n                          <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                          <div class=\"post-content\">\r\n                            <ion-list class=\"item-post\" lines=\"none\">\r\n                              <ion-item>\r\n                                <div [routerLink]=\"['/comments',post.id]\" *ngIf=\"post?.disable_comment == 0\">\r\n                               \r\n                                    <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                                    <span>{{post.total_comments.length}}</span>\r\n                                \r\n                                </div>\r\n                                <div (click)=\"liked(post.id,post.liked)\" class=\"{{ post.liked ?'active':'inactive' }}\">\r\n                                  <ion-icon class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\r\n                                  <span>{{post?.count}}</span>\r\n                                </div>\r\n                              </ion-item>\r\n                              <ion-item>\r\n                                <div (click)=\"showOptions(post?.id ,post?.disable_comment )\">\r\n                                  <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\r\n                                </div>\r\n                              </ion-item>\r\n                            </ion-list>\r\n                            \r\n                            <div *ngIf=\"post?.post_type==2\">\r\n                              <p class=\"mb-10\"\r\n                                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length < 30\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 100)}}\r\n                              </p>\r\n                              <p class=\"mb-10\"\r\n                                *ngIf=\"post['video_post']['0'].description && post['video_post']['0'].description.length > 29 && expanded !=  post.id\">\r\n                                <span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description.substr(0, 29)}}\r\n                                <span (click)=\"expanded = post.id\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                              <p class=\"mb-10\" *ngIf=\"expanded ==  post.id \"><span\r\n                                  class=\"username-text text-green\">{{loginUserData.user_name}}</span>{{post['video_post']['0'].description}}\r\n                                <span (click)=\"expanded = 0\"\r\n                                  class=\"text-green\">{{expanded==  post.id ?'View less':'View more'}}</span></p>\r\n                            </div>\r\n                   \r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                      <div class=\"no-data\" *ngIf=\"post['video_post']['0']['video_type'] != 3 && post?.length < 1\" style=\"height: calc(100vh - 175px)\">\r\n                        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n                        <p>Save Video  Not Found.</p>\r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadVideoData($event)\">\r\n                    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n                    </ion-infinite-scroll-content>\r\n                  </ion-infinite-scroll>\r\n                </ion-list>\r\n                <!-- --------------  P O S T    V I E W  ------------------>\r\n                <ion-list *ngSwitchCase=\"'post'\" class=\"ion-no-padding\">\r\n                  <ion-card class=\"ion-no-margin item-card newPostCard\">\r\n                    <ion-card-content class=\"ion-padding-vertical\">\r\n                      <span [routerLink]=\"['/add-post']\" class=\"ion-padding-vertical\">Add New Post</span>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <app-post-tab [userData]=\"profileData\"></app-post-tab>\r\n                </ion-list>\r\n\r\n                <!-- --------------  U P C O M I N G    P R O G R A M  ------------------>\r\n                <ion-list *ngSwitchCase=\"'upcoming'\" lines=\"none\" class=\"ion-no-padding\">\r\n                  <app-upcoming-tab></app-upcoming-tab>\r\n                </ion-list>\r\n              </div>\r\n            </ion-item-sliding>\r\n          </ion-item-group>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-------------- S K E L E T O N ----------------->\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!gotData\">\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <div class=\"sec-banner\">\r\n          <div class=\"top-banner\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </div>\r\n          <div class=\"user-name\">\r\n            <ion-text>\r\n              <h6>\r\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n              </h6>\r\n              <p>\r\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n              </p>\r\n            </ion-text>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding mb-10\">\r\n        <ion-list lines=\"none\" class=\"top-list\">\r\n          <ion-item>\r\n            <div class=\"top-icon\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </div>\r\n            <ion-label>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <div class=\"top-icon\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </div>\r\n            <ion-label>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <div class=\"top-icon\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </div>\r\n            <ion-label>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <div class=\"top-icon\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </div>\r\n            <ion-label>\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding mb-10\">\r\n        <ion-slides [options]=\"sliderOpts\" class=\"profile-slider\">\r\n          <ion-slide>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-list class=\"ion-no-padding\">\r\n          <ion-item-group>\r\n            <ion-item-divider lines=\"none\">\r\n              <ion-segment [(ngModel)]=\"videotabs\" class=\"profile_tabs subprofile_tabs\">\r\n                <ion-segment-button value=\"videotabs1\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"videotabs2\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"videotabs3\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </ion-item-divider>\r\n            <ion-item-sliding>\r\n              <ion-list class=\"ion-no-padding\" lines=\"none\">\r\n                <ion-card class=\"item-card\" *ngFor=\"let skeleton of [].constructor(5)\">\r\n                  <ion-card-header class=\"item-header\">\r\n                    <ion-avatar>\r\n                      <ion-skeleton-text animated></ion-skeleton-text>\r\n                    </ion-avatar>\r\n                    <div class=\"header-right\">\r\n                      <ion-label>\r\n                        <ion-skeleton-text animated></ion-skeleton-text>\r\n                        <ion-skeleton-text animated></ion-skeleton-text>\r\n                      </ion-label>\r\n                    </div>\r\n                  </ion-card-header>\r\n                  <ion-card-content class=\"ion-no-padding item-content\">\r\n                    <ion-thumbnail>\r\n                      <ion-skeleton-text animated></ion-skeleton-text>\r\n                    </ion-thumbnail>\r\n                    <div class=\"post-content\">\r\n                      <ion-list class=\"item-post\" lines=\"none\">\r\n                        <ion-item>\r\n                          <div>\r\n                            <ion-skeleton-text animated></ion-skeleton-text>\r\n                          </div>\r\n                          <div>\r\n                            <ion-skeleton-text animated></ion-skeleton-text>\r\n                          </div>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                      <ion-skeleton-text animated></ion-skeleton-text>\r\n                    </div>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-list>\r\n            </ion-item-sliding>\r\n          </ion-item-group>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-refresher class=\"page-refresher homeRefresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content refreshingSpinner=\"crescent\"></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/my-profile/my-profile-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/profile/my-profile/my-profile-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MyProfilePageRoutingModule */

  /***/
  function srcAppProfileMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
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


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/profile/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/my-profile/my-profile.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/profile/my-profile/my-profile.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyProfilePageModule */

  /***/
  function srcAppProfileMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/profile/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _components_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../components.modules */
    "./src/app/profile/components.modules.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/profile/my-profile/my-profile.page.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfilePageRoutingModule"], _components_modules__WEBPACK_IMPORTED_MODULE_6__["ComponentModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxIonicImageViewerModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageModule"]],
      entryComponents: [],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/my-profile/my-profile.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/profile/my-profile/my-profile.page.ts ***!
    \*******************************************************/

  /*! exports provided: MyProfilePage */

  /***/
  function srcAppProfileMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
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


    var _modalContent_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../modalContent/user-details/user-details.component */
    "./src/app/modalContent/user-details/user-details.component.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../modalContent/followers/followers.component */
    "./src/app/modalContent/followers/followers.component.ts");
    /* harmony import */


    var _modalContent_following_following_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../modalContent/following/following.component */
    "./src/app/modalContent/following/following.component.ts");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/settings.service */
    "./src/app/services/settings.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../popover/popover.component */
    "./src/app/profile/popover/popover.component.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var src_app_services_program_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/services/program.service */
    "./src/app/services/program.service.ts");

    var MyProfilePage = /*#__PURE__*/function () {
      function MyProfilePage(router, route, platform, alertCtrl, commonService, settingsService, peopleView, notification, modalController, popoverController, navController, toastController, programService) {
        var _this = this;

        _classCallCheck(this, MyProfilePage);

        this.router = router;
        this.route = route;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.settingsService = settingsService;
        this.peopleView = peopleView;
        this.notification = notification;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.navController = navController;
        this.toastController = toastController;
        this.programService = programService;
        this.bannerDefaultImage = './../../../assets/images/editcoverpic.png';
        this.profileDefaultImage = './../../../assets/images/user.jpg';
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.block = true;
        this.bookmark = true;
        this.isLoading = false;
        this.tabs = true;
        this.previewImage = [];
        this.expanded = 0;
        this.consultantProfile = "aboutInfo";
        this.videotabs = "videotabs1";
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].storagePath;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].imgUrl;
        this.profilePicUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].profilePic;
        this.backgroundPicUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].backgroundPic;
        this.currentPage = 0;
        this.sliderOpts = {
          zoom: false,
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 1.5
        };
        this.imageSlider = {
          zoom: false,
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 1
        }; // viraj code starts here

        this.gotData = false;
        this.slideOptsThree = {
          initialSlide: 0,
          slidesPerView: 4,
          zoom: false
        };
        route.params.subscribe(function (val) {
          _this.ionViewWillEnter(); // console.log('ngOnInit');
          // this.previewImage = [];
          // this.loginUserData = '';
          // this.commonService.footerTabHooks.subscribe(data => {
          //   if (data) {
          //   this.notificationCount = null;
          //     this.postData();
          //   }
          // });
          // this.commonService.footerTabHooks.subscribe(data => {
          //   if (data) {
          //   this.myPosts = null;
          //     this.videoPostData();
          //   }
          // });
          // this.peopleView.getMyPost('1', '', 1).subscribe((data: any) => {
          //   if (data.status == 401) {
          //     this.commonService.loggingout();
          //   }
          //   if (data.status == 500) {
          //     // this.commonService.presentToast(data.error.message);
          //     return null;
          //   }
          //   data.posts.data.forEach(element => {
          //     if (this.previewImage.length < 10) {
          //       this.previewImage = this.previewImage.concat(element['image_post']['0']['thumb_path']);
          //     }
          //   }); 
          // }, (err) => { 
          // });
          // this.loginUserData = JSON.parse(localStorage.getItem('userData')); 
          // console.log(this.loginUserData);   
          // this.videoPostData();

        });
        this.sliderThree = {
          isBeginningSlide: true,
          isEndSlide: false
        };
      }

      _createClass(MyProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log('ngOnInit');
          this.previewImage = [];
          this.loginUserData = '';
          this.commonService.footerTabHooks.subscribe(function (data) {
            if (data) {
              _this2.notificationCount = null;

              _this2.postData();
            }
          });
          this.commonService.footerTabHooks.subscribe(function (data) {
            if (data) {
              _this2.myPosts = null;

              _this2.videoPostData();
            }
          });
          this.peopleView.getMyPost('1,2,8', '', 1).subscribe(function (data) {
            if (data.status == 401) {
              _this2.commonService.loggingout();
            }

            if (data.status == 500) {
              // this.commonService.presentToast(data.error.message);
              return null;
            }

            data.posts.data.forEach(function (element) {
              if (_this2.previewImage.length < 10) {
                _this2.previewImage = _this2.previewImage.concat(element['image_post']['0']['thumb_path']);
              }
            });
          }, function (err) {});
          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          console.log(this.loginUserData);
          this.videoPostData(); // if (this.consultID) {      
          //   this.getConsultProg(this.consultID);
          // } else {

          this.getMyprog(); // }

          this.settingsService.getProfileData().subscribe(function (data) {
            _this2.profileData = data.status;
            _this2.gotData = true;
            _this2.bannerImage = _this2.backgroundPicUrl + _this2.profileData.userData.bios.profile_background_image;

            _this2.validateFile(_this2.profileData.userData.bios.profile_pic);

            _this2.profileImage = _this2.profilePicUrl + _this2.profileData.userData.bios.profile_pic;
            localStorage.setItem('userData', JSON.stringify(data.status.userData));
            console.log(_this2.profileData.userData.bios.profile_pic);
            console.log('profileData');
          });
        }
      }, {
        key: "postData",
        value: function postData() {
          var _this3 = this;

          this.loginUserData = JSON.parse(localStorage.getItem('userData'));
          this.notification.getUnreadCountMyProfile().subscribe(function (data) {
            _this3.notificationCount = data.status;

            if (data.status.length > 0) {
              _this3.notificationCount.forEach(function (element, i) {// this.notificationCount[i].count = element.post_likes.length;
                // element.post_likes.filter((f) => {
                //   if (f.user_id == this.loginUserData.id) {
                //     this.notificationCount[i].liked = true;
                //   }
                // });
                // element.post_bookmarks.filter((f) => {
                //   if (f.user_id == this.loginUserData.id) {
                //     this.myPosts[i].bookmarked = true;
                //   }
                // });
              });
            }

            if (data.posts != '' && data.posts != null) {
              _this3.last_page = data.posts.last_page;
              _this3.currentPage = data.posts.current_page;
            }

            _this3.gotData = true;
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ngOnInit();
          this.ionViewWillEnter();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "videoPostData",
        value: function videoPostData() {
          var _this4 = this;

          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.peopleView.getMyPost('1,2,8,9', this.loginUserData.id, 1).subscribe(function (data) {
            // exit;
            _this4.myPosts = data.posts.data;
            console.log(_this4.myPosts);
            console.log('myPost');

            _this4.myPosts.forEach(function (element, i) {
              _this4.myPosts[i].count = element.post_likes.length;
              element.post_likes.filter(function (f) {
                if (f.user_id == _this4.userData.id) {
                  _this4.myPosts[i].liked = true;
                }
              });
              element.post_bookmarks.filter(function (f) {
                if (f.user_id == _this4.userData.id) {
                  _this4.myPosts[i].bookmarked = true;
                }
              });
            });

            _this4.last_page = data.posts.last_page;
            _this4.currentPage = data.posts.current_page;
            _this4.gotData = true;
          }); // this.peopleView.getMyPost('2', this.loginUserData.id, 1).subscribe((data: any) => {
          //   this.myPosts = data.posts.data;
          //   this.myPosts.forEach((element, i) => {
          //     this.myPosts[i].count = element.post_likes.length;
          //     element.post_likes.filter((f) => {
          //       if (f.user_id == this.loginUserData.id) {
          //         this.myPosts[i].liked = true;
          //       }
          //     });
          //     element.post_bookmarks.filter((f) => {
          //       if (f.user_id == this.loginUserData.id) {
          //         this.myPosts[i].bookmarked = true;
          //       }
          //     });
          //   });      
          //   this.last_page = data.posts.last_page;
          //   this.currentPage = data.posts.current_page;
          //   this.gotData = true;
          // });
        }
      }, {
        key: "loadVideoData",
        value: function loadVideoData(event) {
          var _this5 = this;

          setTimeout(function () {
            if (_this5.currentPage > 0) {
              // this.peopleView.getMyPost('2', this.loginUserData.id, (this.currentPage + 1)).subscribe((data: any) => {
              _this5.peopleView.getMyPost('1,2,8', _this5.loginUserData.id, _this5.currentPage + 1).subscribe(function (data) {
                data.posts.data.forEach(function (element, i) {
                  element.count = element.post_likes.length;
                  element.post_likes.filter(function (f) {
                    if (f.user_id == _this5.loginUserData.id) {
                      data.posts.data[i].liked = true;
                    }
                  });
                  element.post_bookmarks.filter(function (f) {
                    if (f.user_id == _this5.loginUserData.id) {
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
        key: "openViewer",
        value: function openViewer(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_13__["ViewerModalComponent"],
                      componentProps: {
                        src: this.url + path,
                        srcHighRes: this.url + path,
                        srcFallback: this.url + path
                      },
                      cssClass: 'ion-img-viewer',
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "liked",
        value: function liked(postId, likeStat) {
          var _this6 = this;

          this.myPosts.forEach(function (element, i) {
            if (element.id == postId) {
              _this6.myPosts[i].liked = !likeStat;

              if (likeStat) {
                _this6.myPosts[i].count = _this6.myPosts[i].count - 1;
              } else {
                _this6.myPosts[i].count = _this6.myPosts[i].count + 1;
              }
            }
          });
          this.peopleView.likedPost({
            'postId': postId,
            'liked': likeStat
          }).subscribe(function (data) {
            if (data.status) {
              _this6.commonService.presentToast(data.status);
            }
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this7 = this;

          this.commonService.presentLoader();
          console.log('ionViewWillEnter');
          this.subscribe = this.platform.backButton.subscribeWithPriority(10, function () {
            if (_this7.router.isActive('/tabs/consultant-profile', true) && _this7.router.url === '/tabs/consultant-profile' && !_this7.commonService.modal) {
              var buttons = [{
                text: 'Cancel',
                role: 'cancel'
              }, {
                text: 'Exit',
                handler: function handler() {
                  navigator['app'].exitApp();
                }
              }];

              _this7.commonService.presentAlert('Are you sure to Exit the  App?', '', buttons, '');
            } else {
              if (_this7.commonService.modal) {
                _this7.commonService.dismissModal();
              }
            }
          });
          this.userData = JSON.parse(localStorage.getItem('userData'));

          if (this.userData.user_type == 0) {
            this.router.navigate(["/tabs/user-profile"]);
          }

          this.settingsService.getProfileData().subscribe(function (data) {
            _this7.profileData = data.status;
            _this7.gotData = true;
            _this7.bannerImage = _this7.backgroundPicUrl + _this7.profileData.userData.bios.profile_background_image;

            _this7.validateFile(_this7.profileData.userData.bios.profile_pic);

            _this7.profileImage = _this7.profilePicUrl + _this7.profileData.userData.bios.profile_pic;
            localStorage.setItem('userData', JSON.stringify(data.status.userData));
            console.log(_this7.profileData);
            console.log('profileData');
          });
          this.commonService.dismissLoader();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "SlideDidChange",
        value: function SlideDidChange(object, slideView) {
          this.checkIfNavDisabled(object, slideView);
        }
      }, {
        key: "checkIfNavDisabled",
        value: function checkIfNavDisabled(object, slideView) {
          this.checkisBeginning(object, slideView);
          this.checkisEnd(object, slideView);
        }
      }, {
        key: "checkisBeginning",
        value: function checkisBeginning(object, slideView) {
          slideView.isBeginning().then(function (istrue) {
            object.isBeginningSlide = istrue;
          });
        }
      }, {
        key: "checkisEnd",
        value: function checkisEnd(object, slideView) {
          slideView.isEnd().then(function (istrue) {
            object.isEndSlide = istrue;
          });
        }
      }, {
        key: "notifications",
        value: function notifications() {//this.router.navigateByUrl('/notifications');
          // this.router.navigate(["/notifications"]);
        }
      }, {
        key: "showmodal",
        value: function showmodal() {
          this.commonService.presentModal(_modalContent_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"], 'bottomModal', '');
        }
      }, {
        key: "notification1",
        value: function notification1() {
          this.commonService.presentModal(_modalContent_followers_followers_component__WEBPACK_IMPORTED_MODULE_5__["FollowersComponent"], 'fullModal', {
            'profileData': this.profileData,
            'otherUser': false
          });
        }
      }, {
        key: "notification2",
        value: function notification2() {
          this.commonService.presentModal(_modalContent_following_following_component__WEBPACK_IMPORTED_MODULE_6__["FollowingComponent"], 'bottomModal', '');
        }
      }, {
        key: "main",
        value: function main() {
          this.router.navigate(["/main"]);
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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.consultantProfile = "aboutInfo";
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscribe.unsubscribe();
          this.consultantProfile = "aboutInfo";
          this.tabs = true;
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.subscribe.unsubscribe();
          this.consultantProfile = "aboutInfo";
          this.tabs = true;
        }
      }, {
        key: "getMyprog",
        value: function getMyprog() {
          var _this8 = this;

          this.programService.getUpcomingPrograms(null).subscribe(function (data) {
            if (data.programList.length < 1) {
              _this8.noData = true;
            }

            console.log(data);
            console.log(_this8.noData + 'this.noData');
            _this8.upcomingList = _this8.getCounter(data.programList);
            _this8.upcomingList = data.programList.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              console.log(_this8.upcomingList, 'fff');
              return el;
            });
          });
        }
      }, {
        key: "getConsultProg",
        value: function getConsultProg(id) {
          var _this9 = this;

          this.programService.getConsultPrograms({
            'consultId': id
          }).subscribe(function (data) {
            if (data.data.length < 1) {
              _this9.noData = true;
            }

            _this9.upcomingList = _this9.getCounter(data.data);
            _this9.upcomingList = data.data.filter(function (el) {
              if (el.image_path) {
                el.img_arr = el.image_path.split(',');
              }

              el.converted = new Date(el.program_date + 'Z');
              el.expanded = false;
              return el;
            });
          });
        }
      }, {
        key: "getCounter",
        value: function getCounter(elementArr) {
          elementArr.filter(function (el) {
            el.convertedTime = new Date(el.program_date + 'Z');
            var a = new Date(el.program_date + 'Z');
            var b = new Date();
            var c;

            if (a > b) {
              c = Math.abs(a - b) / 1000;
            } else {
              c = 0;
              el.live = true;
            }

            el.cd = c;
            setInterval(function () {
              if (parseInt(el.cd) > 0) el.cd = parseInt(el.cd) - 1;
              el.dd = ~~(el.cd / (60 * 60 * 24));
              el.hh = ~~(el.cd / (60 * 60) % 24);
              el.mm = ~~(el.cd % 3600 / 60);
              el.ss = el.cd % 3600 % 60;
            }, 1000);
            return el;
          });
          return elementArr;
        }
      }, {
        key: "showOptions",
        value: function showOptions(ev, commentStatus) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this10 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("commentStatus : " + commentStatus);
                    _context2.next = 3;
                    return this.popoverController.create({
                      component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_12__["PopoverComponent"],
                      translucent: true,
                      cssClass: 'custom-popover',
                      componentProps: {
                        'postId': ev,
                        'commentStatus': commentStatus
                      }
                    });

                  case 3:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (data) {
                      if (data.data.click == 1) {
                        _this10.myPosts.forEach(function (f, i) {
                          if (f.id == ev) {
                            _this10.myPosts[i].is_delete = 1;
                          }
                        });
                      } else if (data.data.click == 2) {
                        _this10.myPosts.forEach(function (f, i) {
                          if (f.id == ev) {
                            _this10.myPosts[i].disable_comment = !commentStatus;
                          }
                        });
                      }
                    });
                    _context2.next = 7;
                    return popover.present();

                  case 7:
                    return _context2.abrupt("return", _context2.sent);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: 'Coming Soon.',
                      duration: 2000
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "validateFile",
        value: function validateFile(name) {
          var ext = name.substring(name.lastIndexOf('.') + 1);

          if (ext.toLowerCase() == 'png') {
            console.log(name + " it's a image");
            return true;
          } else if (ext.toLowerCase() == 'jpeg') {
            console.log(name + " it's a image");
            return true;
          } else if (ext.toLowerCase() == 'jpg') {
            console.log(name + " it's a image");
            return true;
          } else {
            console.log(name + " it's Not a image");
            return false;
          }
        }
      }]);

      return MyProfilePage;
    }();

    MyProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _services_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_7__["PeopleViewService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]
      }, {
        type: src_app_services_program_service__WEBPACK_IMPORTED_MODULE_14__["ProgramService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], MyProfilePage.prototype, "gotData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav3', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSlides"])], MyProfilePage.prototype, "slideWithNav3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], MyProfilePage.prototype, "SlideDidChange", null);
    MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/my-profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/profile/my-profile/my-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_7__["PeopleViewService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"], src_app_services_program_service__WEBPACK_IMPORTED_MODULE_14__["ProgramService"]])], MyProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-my-profile-my-profile-module-es5.js.map