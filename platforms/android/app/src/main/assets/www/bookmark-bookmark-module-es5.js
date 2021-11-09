function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmark-bookmark-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookmarkBookmarkPostCommentBookmarkPostCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Comments ({{count}})</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-list *ngIf=\"data\">\r\n    <ion-list lines=\"none\" class=\"comment-list\" *ngFor=\"let data of comment\" >\r\n      <ion-item class=\"comment-item\">\r\n        <ion-avatar slot=\"start\" *ngIf=\"data.user.bios.profile_pic\">\r\n          <img src='{{profilePicPath}}{{data.user.bios.profile_pic}}'>\r\n        </ion-avatar>\r\n        <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"!data.user.bios.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{data.user.user_name}}</h2>\r\n          <p>{{data.comment}}</p>\r\n          <ion-label class=\"comment-links\">\r\n            <ion-text id=\"{{data.id}}\" (click)=\"replyComment($event)\">Reply</ion-text>\r\n            \r\n            <ion-text *ngIf=\"userId == data.user_id\" id=\"{{data.id}}\" (click)=\"deleteComment($event)\">Delete</ion-text>\r\n             \r\n          </ion-label>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-list lines=\"none\" class=\"comment-list\" *ngFor=\"let replyData of data.comment_reply\">\r\n        <ion-item class=\"comment-item\">\r\n          <ion-avatar slot=\"start\" *ngIf=\"replyData.user.bios.profile_pic\">\r\n            <img src=\"{{profilePicPath}}{{replyData.user.bios.profile_pic}}\">\r\n          </ion-avatar>\r\n          <ion-avatar slot=\"start\" *ngIf=\"!replyData.user.bios.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{replyData.user.user_name}}</h2>\r\n            <p>{{replyData.comment}}</p>\r\n            <ion-label class=\"comment-links\">\r\n              <ion-text *ngIf=\"userId == replyData.user_id\" id=\"{{replyData.id}}\" (click)=\"deleteComment($event)\" >Delete</ion-text>\r\n            </ion-label>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-list>\r\n  </ion-list> \r\n  <ion-list lines=\"none\" class=\"comment-list\" *ngIf=\"!data\">\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>  \r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>  \r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>      \r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"sticky-footer\">\r\n  <form class=\"commentForm\" [formGroup]=\"commentForm\" (ngSubmit)=\"onClickSubmit()\">\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"profileImage\">\r\n      <img src=\"{{profilePicPath}}{{profileImage}}\">\r\n    </ion-avatar>\r\n    <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"!profileImage\">\r\n      <img src=\"../../assets/images/user.jpg\">\r\n    </ion-avatar>\r\n    <textarea placeholder=\"Enter Input\" #commentfield formControlName=\"comment\" name=\"comment\"   auto-grow=\"true\" class=\"comment\"></textarea>\r\n    <img (click)=\"onClickSubmit()\" src=\"../assets/images/send.svg\" class=\"send-img\">\r\n  </ion-item>\r\n</form>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookmarkBookmarkPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click)=\"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>My Bookmark</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-segment class=\"top-segment\" (ionChange)=\"tabs($event)\" >\r\n    <ion-segment-button value=\"images\" checked>Images</ion-segment-button>\r\n    <ion-segment-button value=\"video\">Videos</ion-segment-button>\r\n    <ion-segment-button value=\"program\">Program</ion-segment-button>\r\n  </ion-segment>\r\n  <div [ngSwitch]=\"bookmarkBlock\" *ngIf=\"!data\">\r\n    <div *ngSwitchCase=\"'images'\"> \r\n      <div *ngIf=\"bimg\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No post added yet!!!</p>\r\n      </div>\r\n      <ion-card class=\"item-card\" *ngFor=\"let post of bookmarkImg\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+post?.post_user?.bios?.profile_pic\"/>\r\n            <!-- <img src=\"{{profile_url}}{{post.posts.post_user?.bios?.profile_pic}}\" *ngIf=\"post.posts.post_user?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post.posts.post_user?.bios?.profile_pic\">   -->\r\n          </ion-avatar> \r\n            <div class=\"header-right\">  \r\n            <ion-label>\r\n              <ion-card-title>{{post.posts.post_user.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post.posts.post_user.location}}</ion-card-subtitle>       \r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">{{post.posts.created_at}}</p></ion-text> \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post.posts['image_post']['0']['thumb_path']; let i = index;\">\r\n                <img (click)=\"openViewer(post.posts['image_post']['0']['image_path'][i])\" [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"url+ imgpath\" alt=\"{{imgpath}}\"/>\r\n              </ion-slide>              \r\n            </ion-slides>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div (click)=\"postComment(post?.post_id)\" *ngIf=\"post?.posts?.post_user?.comment_disable == 0\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>{{post?.Tcount}}</span>\r\n                </div>\r\n                <div  (click)=\"liked(post.posts.id,post?.liked)\"  class=\"{{ post.liked ?'active':'inactive' }}\"  >\r\n                  <ion-icon  class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\" ></ion-icon> <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <ion-item>\r\n                <div (click)=\"bookmarked(post.posts?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p *ngIf=\"post.posts['image_post']['0'].description && post.posts['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts['image_post']['0'].description.substr(0, 29)}}\r\n            </p>\r\n              <p *ngIf=\"post.posts['image_post']['0'].description && post.posts['image_post']['0'].description.length > 29 && expanded !=  post.posts.id\"><span\r\n                class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts['image_post']['0'].description.substr(0, 29)}} <span (click)=\"expanded = post.posts.id\"\r\n                class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.posts.id \"><span class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts['image_post']['0'].description}} <span\r\n                (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n            </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngSwitchCase=\"'video'\">\r\n      <div *ngIf=\"bvid\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No video added yet!!!</p>\r\n      </div>\r\n      <ion-card class=\"item-card\" *ngFor=\"let post of bookmarkVideo\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+post?.posts?.post_user?.bios?.profile_pic\"/>\r\n            <!-- <img src=\"{{profile_url}}{{post?.posts?.post_user?.bios?.profile_pic}}\" *ngIf=\"post?.posts?.post_user?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post?.posts?.post_user?.bios?.profile_pic\">   -->\r\n          </ion-avatar> \r\n            <div class=\"header-right\">  \r\n            <ion-label>\r\n              <ion-card-title>{{post.posts.post_user.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post.posts.post_user.location}}</ion-card-subtitle>       \r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">{{post.posts.created_at}}</p></ion-text> \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail [routerLink]=\"['/videos',post.post_id]\"\r\n          *ngIf=\"post?.posts?.video_post[0].thumb_path\">\r\n          <img [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"storagePath+ post?.posts?.video_post[0].thumb_path\" alt=\"Video Thumnail Path\"/>\r\n          <!-- <img src=\"{{storagePath + post?.posts?.video_post[0].thumb_path}}\" alt=\"Thumnail Path\" /> -->\r\n          <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n        </ion-thumbnail>\r\n        <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div (click)=\"postComment(post?.post_id)\" *ngIf=\"post?.posts?.post_user?.comment_disable == 0\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>{{post?.Tcount}}</span>\r\n                </div>\r\n                <div  (click)=\"liked(post.posts.id,post?.liked)\"  class=\"{{ post.liked ?'active':'inactive' }}\"  >\r\n                  <ion-icon  class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\" ></ion-icon> <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <ion-item>\r\n                <div (click)=\"bookmarked(post.posts?.id , post?.bookmarked , 2)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p *ngIf=\"post.posts?.video_post[0].title && post.posts?.video_post[0].title.length < 30\"><span\r\n              class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts?.video_post[0].title.substr(0, 29)}}\r\n            </p>\r\n              <p *ngIf=\"post.posts?.video_post[0].title && post.posts?.video_post[0].title > 29 && expanded !=  post.post_id\"><span\r\n                class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts?.video_post[0].title.substr(0, 29)}} <span (click)=\"expanded = post.posts.id\"\r\n                class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.posts.id \"><span class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts?.video_post[0].title}} <span\r\n                (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n            </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngSwitchCase=\"'program'\">\r\n      <div *ngIf=\"!bookmarkProg?.length > 0\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No program added yet!!!</p>\r\n      </div>\r\n      <ion-item class=\"item-card\" *ngFor=\"let prog of bookmarkProg\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"profile_url+prog?.programs?.program_user?.bios?.profile_pic\"/>\r\n          <!-- <img src=\"{{profile_url}}{{prog?.programs?.program_user?.bios?.profile_pic}}\" *ngIf=\"prog?.programs?.program_user?.bios?.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\" *ngIf=\"!prog?.programs?.program_user?.bios?.profile_pic\">   -->\r\n\r\n        </ion-avatar>\r\n        <ion-label     [routerLink]=\"loginUserData?.id ==prog?.programs?.program_user?.user_id ? ['/program-details/',prog?.programs?.id] : ['/program-view/',prog?.programs?.id]\">\r\n          <h3 class=\"list-person\">{{prog?.programs?.title}}</h3>\r\n          <span class=\"list-name d-block\">{{prog?.programs?.type_id}} Group</span>\r\n          <span class=\"list-name d-block\">By: {{prog?.programs?.program_user?.user_name}}  </span> \r\n          <span class=\"list-name d-block\">On: {{prog?.programs?.convertedTime | date:'medium'}}  </span> \r\n        </ion-label>\r\n        <div class=\"action-links\" slot=\"end\">\r\n          <div (click)=\"bookmarked(prog.programs?.id , prog?.bookmarked , 5)\" class=\"{{ prog?.bookmarked ?'active':'inactive' }}\">\r\n            <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n          </div>\r\n          <ion-icon (click)=\"nutritionModal(prog?.programs)\" ios=\"md-restaurant\" md=\"md-restaurant\" *ngIf=\"prog?.programs?.nutrition_id\"></ion-icon>\r\n        </div>\r\n      </ion-item>      \r\n    </div>\r\n  </div>\r\n  <!-- <div [ngSwitch]=\"bookmarkBlock\"  *ngIf=\"data\">\r\n    <div *ngSwitchCase=\"'images'\"> \r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngSwitchCase=\"'video'\" lines=\"none\">   \r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>  \r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card> \r\n    </div>\r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'program'\">\r\n      <ion-item class=\"item-card\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"item-card\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"item-card\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookmarkBookmarkPostCommentBookmarkPostCommentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comment-list {\n  padding: 0; }\n\n.comment-list ion-item {\n  padding: 0; }\n\nion-avatar {\n  margin-right: 10px; }\n\nh2 {\n  font-weight: 500;\n  color: #000;\n  font-size: 0.90rem; }\n\n.comment-item ion-label ion-skeleton-text {\n  height: 28px;\n  margin-top: 0; }\n\n.sticky-footer .send-img {\n  width: 26px; }\n\n.comment {\n  width: 100%;\n  border: none; }\n\nion-list {\n  margin-bottom: 56px; }\n\nion-list > ion-list {\n  margin-bottom: 0; }\n\n.sticky-footer {\n  max-height: 100px;\n  min-height: 56px;\n  height: auto; }\n\n.sticky-footer form {\n    height: 100%; }\n\n.sticky-footer form ion-item {\n      height: 100%;\n      display: flex; }\n\n.sticky-footer form ion-item ion-textarea {\n        position: relative;\n        height: 100%;\n        margin: 0;\n        --padding-top: 14px; }\n\n.sticky-footer form ion-item .send-img {\n        width: 26px;\n        margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmsvYm9va21hcmstcG9zdC1jb21tZW50L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxib29rbWFya1xcYm9va21hcmstcG9zdC1jb21tZW50XFxib29rbWFyay1wb3N0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxVQUFVLEVBQUE7O0FBQ3hCO0VBQXVCLFVBQVUsRUFBQTs7QUFDakM7RUFBVyxrQkFBa0IsRUFBQTs7QUFDN0I7RUFBRyxnQkFBZ0I7RUFBQyxXQUFXO0VBQUMsa0JBQWtCLEVBQUE7O0FBR2xEO0VBQTBDLFlBQVk7RUFBQyxhQUFhLEVBQUE7O0FBR3BFO0VBQXlCLFdBQVcsRUFBQTs7QUFDcEM7RUFBVSxXQUFXO0VBQUUsWUFBWSxFQUFBOztBQUNuQztFQUFTLG1CQUFtQixFQUFBOztBQUM1QjtFQUFrQixnQkFBZ0IsRUFBQTs7QUFDbEM7RUFBZSxpQkFBaUI7RUFBQyxnQkFBZ0I7RUFBQyxZQUFZLEVBQUE7O0FBQTlEO0lBQ1MsWUFBWSxFQUFBOztBQURyQjtNQUVpQixZQUFZO01BQUMsYUFBYSxFQUFBOztBQUYzQztRQUd5QixrQkFBa0I7UUFBQyxZQUFZO1FBQUMsU0FBUztRQUFDLG1CQUFjLEVBQUE7O0FBSGpGO1FBSXNCLFdBQVc7UUFBQyxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrL2Jvb2ttYXJrLXBvc3QtY29tbWVudC9ib29rbWFyay1wb3N0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1saXN0e3BhZGRpbmc6IDA7fVxyXG4uY29tbWVudC1saXN0IGlvbi1pdGVte3BhZGRpbmc6IDA7fVxyXG5pb24tYXZhdGFye21hcmdpbi1yaWdodDogMTBweDt9XHJcbmgye2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICMwMDA7Zm9udC1zaXplOiAwLjkwcmVtO31cclxuXHJcbi8vIGNzcyBmb3Igc2tlbGV0b25cclxuLmNvbW1lbnQtaXRlbSBpb24tbGFiZWwgaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAyOHB4O21hcmdpbi10b3A6IDA7fVxyXG5cclxuLy8gY3NzIGZvciBmb290ZXJcclxuLnN0aWNreS1mb290ZXIgLnNlbmQtaW1ne3dpZHRoOiAyNnB4O31cclxuLmNvbW1lbnQge3dpZHRoOiAxMDAlOyBib3JkZXI6IG5vbmU7fVxyXG5pb24tbGlzdHttYXJnaW4tYm90dG9tOiA1NnB4O31cclxuaW9uLWxpc3Q+aW9uLWxpc3R7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5zdGlja3ktZm9vdGVye21heC1oZWlnaHQ6IDEwMHB4O21pbi1oZWlnaHQ6IDU2cHg7aGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9ybXtoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgaW9uLWl0ZW17aGVpZ2h0OiAxMDAlO2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0YXJlYXtwb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0OiAxMDAlO21hcmdpbjogMDstLXBhZGRpbmctdG9wOiAxNHB4O31cclxuICAgICAgICAgICAgLnNlbmQtaW1ne3dpZHRoOiAyNnB4O21hcmdpbi1sZWZ0OiAxMHB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: BookmarkPostCommentComponent */

  /***/
  function srcAppBookmarkBookmarkPostCommentBookmarkPostCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkPostCommentComponent", function () {
      return BookmarkPostCommentComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var BookmarkPostCommentComponent = /*#__PURE__*/function () {
      function BookmarkPostCommentComponent(activatedRoute, fb, commonService, postService, storage, navCtrl, urlrouter, navParams) {
        _classCallCheck(this, BookmarkPostCommentComponent);

        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.commonService = commonService;
        this.postService = postService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.urlrouter = urlrouter;
        this.navParams = navParams;
        this.submitted = false;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
        this['validation_messages'] = {
          comment: [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'maxlength',
            message: 'Comment cannot be more than 25 characters long'
          }]
        };
        this.createForm();
        this.activatedRoute.paramMap.subscribe(function (params) {// this.postId = params.get('postId');
        });
      }

      _createClass(BookmarkPostCommentComponent, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getpostId = this.navParams.data.details;
          console.log(this.getpostId + ' this.getpostId');
          this.scrollToBottomOnInit();
          this.profilePicPath = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
          var dataPromise = this.storage.get('userData');
          dataPromise.then(function (data) {
            _this.storageData = JSON.parse(data);
            _this.userId = _this.storageData.id;
          });
          this.commentForm.patchValue({
            postId: this.getpostId
          });
          this.postService.getComment({
            'postId': this.getpostId
          }).subscribe(function (data) {
            _this.data = true;
            _this.comment = data.status;
            _this.count = data.count;
            console.log('this.postId' + _this.getpostId);
          });
          this.postService.getProfileImage().subscribe(function (data) {
            _this.profileImage = data.status.profile_pic;
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.commentForm = this.fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)])),
            postId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            replyToComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
          });
        } // @ViewChild("comment",{"static" : true}) input: ElementRef;

      }, {
        key: "replyComment",
        value: function replyComment(event) {
          this.content.nativeElement.focus();

          if (event.srcElement.id != '') {
            console.log('ghfghf');
            this.replyToComment = event.srcElement.id;
          } else {
            this.replyToComment = '';
          }

          this.commentForm.get('replyToComment').setValue(this.replyToComment);
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.commentId = event.srcElement.id;
                    this.postService.deleteComment({
                      'commentId': this.commentId
                    }).subscribe(function (data) {
                      if (data.status == true) {
                        _this2.commonService.presentToast('Comment Deleted !');

                        _this2.ngOnInit();
                      }
                    }, function (err) {
                      console.log(err + 'errr');
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
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
        key: "scrollToBottomOnInit",
        value: function scrollToBottomOnInit() {
          this.getContent().scrollToBottom(300);
        }
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit() {
          var _this3 = this;

          this.submitted = true;
          console.log(this.commentForm.value);

          if (this.commentForm.value != '') {
            this.commonService.presentLoader();
            this.postService.addComment(this.commentForm.value).subscribe(function (data) {
              if (data.status == true) {
                _this3.commentForm.reset();

                _this3.commentForm.get('replyToComment').setValue('');

                _this3.getContent().scrollToBottom(1000);

                _this3.ngOnInit();
              }

              _this3.commonService.dismissLoader();
            }, function (err) {
              _this3.commonService.dismissLoader();

              console.log(err + 'errr');
            });
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          var dataArray = [{
            'getpostId': this.getpostId,
            'count': this.count
          }];
          this.commonService.dismissModal(dataArray);
        }
      }]);

      return BookmarkPostCommentComponent;
    }();

    BookmarkPostCommentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentfield', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], BookmarkPostCommentComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], BookmarkPostCommentComponent.prototype, "ngOnInit", null);
    BookmarkPostCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookmark-post-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookmark-post-comment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookmark-post-comment.component.scss */
      "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"]])], BookmarkPostCommentComponent);
    /***/
  },

  /***/
  "./src/app/bookmark/bookmark-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/bookmark/bookmark-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: BookmarkPageRoutingModule */

  /***/
  function srcAppBookmarkBookmarkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkPageRoutingModule", function () {
      return BookmarkPageRoutingModule;
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


    var _bookmark_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookmark.page */
    "./src/app/bookmark/bookmark.page.ts");

    var routes = [{
      path: '',
      component: _bookmark_page__WEBPACK_IMPORTED_MODULE_3__["BookmarkPage"]
    }];

    var BookmarkPageRoutingModule = function BookmarkPageRoutingModule() {
      _classCallCheck(this, BookmarkPageRoutingModule);
    };

    BookmarkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookmarkPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bookmark/bookmark.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/bookmark/bookmark.module.ts ***!
    \*********************************************/

  /*! exports provided: BookmarkPageModule */

  /***/
  function srcAppBookmarkBookmarkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkPageModule", function () {
      return BookmarkPageModule;
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


    var _bookmark_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookmark-routing.module */
    "./src/app/bookmark/bookmark-routing.module.ts");
    /* harmony import */


    var _bookmark_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookmark.page */
    "./src/app/bookmark/bookmark.page.ts");
    /* harmony import */


    var _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../bookmark/bookmark-post-comment/bookmark-post-comment.component */
    "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var BookmarkPageModule = function BookmarkPageModule() {
      _classCallCheck(this, BookmarkPageModule);
    };

    BookmarkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookmark_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookmarkPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"]],
      declarations: [_bookmark_page__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"], _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["BookmarkPostCommentComponent"]],
      entryComponents: [_bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["BookmarkPostCommentComponent"]]
    })], BookmarkPageModule);
    /***/
  },

  /***/
  "./src/app/bookmark/bookmark.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/bookmark/bookmark.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookmarkBookmarkPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list-header.grey-header {\n  text-transform: capitalize;\n  color: #222;\n  font-weight: 400;\n  font-size: 0.757rem;\n  padding-right: 16px; }\n\nion-list-header ion-button {\n  margin: 0;\n  border-radius: 4px; }\n\n.item-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF; }\n\n.item-header {\n  display: flex;\n  padding: 10px; }\n\n.item-header ion-avatar {\n  width: 34px;\n  min-width: 34px;\n  height: 34px;\n  margin-right: 8px; }\n\n.post-timedate p {\n  font-size: 0.757rem;\n  text-transform: capitalize;\n  margin-bottom: 0;\n  color: #676767;\n  font-weight: 400; }\n\n.header-right {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n\n.post-content {\n  padding: 10px; }\n\n.item-post {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0; }\n\n.item-post ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: auto; }\n\n.item-post ion-item > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-right: 15px;\n  font-size: 1.45rem; }\n\n.item-post ion-item:last-child > div {\n  margin-right: 0; }\n\n.username-text {\n  margin-right: 3px; }\n\n.item-post ion-item ion-skeleton-text {\n  width: 32px;\n  height: 18px; }\n\n.item-post ion-item ion-skeleton-text:last-child {\n  margin-left: 5px; }\n\n.post-content p ion-skeleton-text {\n  height: 26px; }\n\nion-item {\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --border-radius: 4px; }\n\n.no-data {\n  height: calc(100vh - 160px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmsvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGJvb2ttYXJrXFxib29rbWFyay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsMEJBQTBCO0VBQUMsV0FBVztFQUFDLGdCQUFnQjtFQUFDLG1CQUFtQjtFQUFDLG1CQUFtQixFQUFBOztBQUMzSDtFQUEyQixTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3ZEO0VBQVcsK0NBQStDO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQzNFO0VBQWEsYUFBYTtFQUFDLGFBQWEsRUFBQTs7QUFDeEM7RUFBd0IsV0FBVztFQUFDLGVBQWM7RUFBQyxZQUFZO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ2pGO0VBQWlCLG1CQUFtQjtFQUFDLDBCQUEwQjtFQUFDLGdCQUFnQjtFQUFDLGNBQWM7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDaEg7RUFBYyxhQUFhO0VBQUMsOEJBQThCO0VBQUMsV0FBVyxFQUFBOztBQUN0RTtFQUFjLGFBQWEsRUFBQTs7QUFDM0I7RUFBVyxhQUFhO0VBQUMsOEJBQThCO0VBQUMsbUJBQW1CO0VBQUMsVUFBVSxFQUFBOztBQUN0RjtFQUFvQixrQkFBZ0I7RUFBRyxzQkFBb0I7RUFBRyxrQkFBYSxFQUFBOztBQUMzRTtFQUF3QixhQUFhO0VBQUMsMkJBQTJCO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzNIO0VBQW1DLGVBQWUsRUFBQTs7QUFDbEQ7RUFBZSxpQkFBaUIsRUFBQTs7QUFHaEM7RUFBc0MsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDOUQ7RUFBaUQsZ0JBQWdCLEVBQUE7O0FBQ2pFO0VBQWtDLFlBQVksRUFBQTs7QUFFOUM7RUFBUyxrQkFBa0I7RUFBQyxrQkFBa0I7RUFBQyxvQkFBZ0IsRUFBQTs7QUFDL0Q7RUFBUywyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrL2Jvb2ttYXJrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlci5ncmV5LWhlYWRlcnt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtjb2xvcjogIzIyMjtmb250LXdlaWdodDogNDAwO2ZvbnQtc2l6ZTogMC43NTdyZW07cGFkZGluZy1yaWdodDogMTZweDt9XHJcbmlvbi1saXN0LWhlYWRlciBpb24tYnV0dG9ue21hcmdpbjogMDtib3JkZXItcmFkaXVzOiA0cHg7fVxyXG4uaXRlbS1jYXJke2JveC1zaGFkb3c6IDBweCA4cHggMjRweCByZ2JhKDM0LCAzNSwgNTgsIDAuMDkpO2JhY2tncm91bmQ6ICNGRkY7fVxyXG4uaXRlbS1oZWFkZXJ7ZGlzcGxheTogZmxleDtwYWRkaW5nOiAxMHB4O31cclxuLml0ZW0taGVhZGVyIGlvbi1hdmF0YXJ7d2lkdGg6IDM0cHg7bWluLXdpZHRoOjM0cHg7aGVpZ2h0OiAzNHB4O21hcmdpbi1yaWdodDogOHB4O31cclxuLnBvc3QtdGltZWRhdGUgcHtmb250LXNpemU6IDAuNzU3cmVtO3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO21hcmdpbi1ib3R0b206IDA7Y29sb3I6ICM2NzY3Njc7Zm9udC13ZWlnaHQ6IDQwMDt9XHJcbi5oZWFkZXItcmlnaHR7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47d2lkdGg6IDEwMCU7fVxyXG4ucG9zdC1jb250ZW50e3BhZGRpbmc6IDEwcHg7fVxyXG4uaXRlbS1wb3N0e2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOiBjZW50ZXI7cGFkZGluZzogMDt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW17LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7LS1taW4taGVpZ2h0OiBhdXRvO31cclxuLml0ZW0tcG9zdCBpb24taXRlbT5kaXZ7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW4tcmlnaHQ6IDE1cHg7Zm9udC1zaXplOiAxLjQ1cmVtO31cclxuLml0ZW0tcG9zdCBpb24taXRlbTpsYXN0LWNoaWxkPmRpdnttYXJnaW4tcmlnaHQ6IDB9XHJcbi51c2VybmFtZS10ZXh0e21hcmdpbi1yaWdodDogM3B4O31cclxuXHJcbi8vIHNrZWxldG9uIGNzc1xyXG4uaXRlbS1wb3N0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0e3dpZHRoOiAzMnB4O2hlaWdodDogMThweDt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZHttYXJnaW4tbGVmdDogNXB4O31cclxuLnBvc3QtY29udGVudCBwIGlvbi1za2VsZXRvbi10ZXh0e2hlaWdodDogMjZweDt9XHJcblxyXG5pb24taXRlbXttYXJnaW4tYm90dG9tOiA1cHg7Ym9yZGVyLXJhZGl1czogNHB4Oy0tYm9yZGVyLXJhZGl1czogNHB4O31cclxuLm5vLWRhdGF7aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO30iXX0= */";
    /***/
  },

  /***/
  "./src/app/bookmark/bookmark.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/bookmark/bookmark.page.ts ***!
    \*******************************************/

  /*! exports provided: BookmarkPage */

  /***/
  function srcAppBookmarkBookmarkPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkPage", function () {
      return BookmarkPage;
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


    var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/settings.service */
    "./src/app/services/settings.service.ts");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../bookmark/bookmark-post-comment/bookmark-post-comment.component */
    "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts");

    var BookmarkPage = /*#__PURE__*/function () {
      function BookmarkPage(commonService, settingService, peopleService, modalController, postService, navCtrl, location, router) {
        _classCallCheck(this, BookmarkPage);

        this.commonService = commonService;
        this.settingService = settingService;
        this.peopleService = peopleService;
        this.modalController = modalController;
        this.postService = postService;
        this.navCtrl = navCtrl;
        this.location = location;
        this.router = router;
        this.bookmarkImg = [];
        this.bookmarkVideo = [];
        this.bookmarkProg = [];
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].imgUrl;
        this.profile_url = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
        this.storagePath = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].storagePath;
        this.bookmarkBlock = 'images';
        this.defaultUserImage = './../../assets/images/user.jpg';
        this.userPPicurl = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
        this.defaultPostImage = './../../assets/images/loading.jpg';
        this.bimg = false;
        this.bvid = false;
        router.events.subscribe(); // console.log(this.router.url);
      }

      _createClass(BookmarkPage, [{
        key: "tabs",
        value: function tabs(ev) {
          this.bookmarkBlock = ev.detail.value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.commonService.presentLoader();
          this.loginUserData = JSON.parse(localStorage.getItem("userData"));
          this.settingService.getBookmarkPost().subscribe(function (data) {
            _this4.bookmarkPost = data.posts;

            _this4.bookmarkPost.forEach(function (element, i) {
              console.log(element);

              if (element.post_type == 5) {
                element.programs.convertedTime = new Date(element.programs.program_date + 'Z');

                _this4.bookmarkProg.push(element);

                console.log(_this4.bookmarkProg);
                _this4.bookmarkProg[i].bookmarked = true;
              } else {
                _this4.bookmarkPost[i].count = element.posts.post_likes.length;
                element.posts.post_likes.filter(function (f) {
                  if (f.user_id == _this4.loginUserData.id) {
                    _this4.bookmarkPost[i].liked = true;
                  }
                });
                element.posts.post_bookmarks.filter(function (f) {
                  if (f.user_id == _this4.loginUserData.id) {
                    _this4.bookmarkPost[i].bookmarked = true;
                  }
                });

                if (element.post_type == 1) {
                  _this4.bookmarkImg.push(element);

                  _this4.bookmarkImg.forEach(function (element, i) {
                    // console.log(element.posts.total_comments.length);
                    _this4.bookmarkImg[i].Tcount = element.posts.total_comments.length; // this.postService.getComment({'postId' : element.id }).subscribe(
                    //   (data: any) => {
                    //     var iCount = data.count;
                    //     this.bookmarkImg[i].Tcount = iCount;
                    //     // this.data = true;
                    //   //  this.comment = data.status;
                    //   //  var count = data.count;
                    //   //  console.log(count);
                    //   //  console.log('hh' + element.id);
                    //   });
                    // console.log(this.bookmarkImg[i]);
                  });

                  if (_this4.bookmarkImg.length < 1) {
                    _this4.bimg = true;
                  }

                  _this4.commonService.dismissLoader();
                } else if (element.post_type == 2) {
                  _this4.bookmarkVideo.push(element);

                  _this4.bookmarkVideo.forEach(function (element, i) {
                    // this.postService.getComment({'postId' : element.id }).subscribe(
                    //   (data: any) => {
                    //     var cCount = data.count;
                    _this4.bookmarkVideo[i].Tcount = element.posts.total_comments.length; //     // this.data = true;
                    //   //  this.comment = data.status;
                    //   //  var count = data.count;
                    //   //  console.log(count);
                    //   //  console.log('hh' + element.id);
                    //   });
                    // console.log(this.bookmarkImg[i]);
                  });

                  if (_this4.bookmarkVideo.length < 1) {
                    _this4.bvid = true;
                  }

                  _this4.commonService.dismissLoader(); // console.log(this.bookmarkVideo);

                }
              }
            });
          });
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal(data) {
          this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_3__["NutritionModalComponent"], 'fullModal', {
            'data': data
          });
        }
      }, {
        key: "liked",
        value: function liked(postId, likeStat) {
          var _this5 = this;

          // console.log(this.bookmarkPost);
          this.bookmarkPost.forEach(function (element, i) {
            // console.log(element.post_id + 'eid');
            // console.log(postId + 'pid');
            if (element.post_id == postId) {
              _this5.bookmarkPost[i].liked = !likeStat;

              if (likeStat) {
                _this5.bookmarkPost[i].count = _this5.bookmarkPost[i].count - 1;
              } else {
                _this5.bookmarkPost[i].count = _this5.bookmarkPost[i].count + 1;
              }
            }
          }); // console.log(postId);
          // console.log(likeStat);

          this.peopleService.likedPost({
            'postId': postId,
            'liked': likeStat
          }).subscribe(function (data) {
            if (data.status) {
              _this5.commonService.presentToast(data.status);
            }
          });
        } // ----------- Bookmarked start here -----------

      }, {
        key: "bookmarked",
        value: function bookmarked(postId, bmStat, post_type) {
          var _this6 = this;

          console.log(postId, bmStat);
          this.bookmarkPost.forEach(function (element, i) {
            console.log(element.post_id);

            if (element.post_id == postId) {
              _this6.bookmarkPost[i].bookmarked = !bmStat;
            }
          }); // console.log(postId, bmStat);

          this.peopleService.bookmarkPost({
            'postId': postId,
            'bookmark': bmStat,
            'post_type': post_type
          }).subscribe(function (data) {
            if (data.status) {
              console.log(data);

              _this6.commonService.presentToast(data.status);
            }
          });
        }
      }, {
        key: "openViewer",
        value: function openViewer(path) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                      componentProps: {
                        src: this.url + path
                      },
                      cssClass: 'ion-img-viewer',
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "postComment",
        value: function postComment(postId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_12__["BookmarkPostCommentComponent"],
                      cssClass: 'fullModal',
                      componentProps: {
                        'details': postId
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (d) {
                      console.log(d.data[0].getpostId); // this.ngOnInit();

                      _this7.bookmarkVideo.forEach(function (element, i) {
                        if (_this7.bookmarkVideo[i].post_id == d.data[0].getpostId) {
                          _this7.bookmarkVideo[i].Tcount = d.data[0].count;
                        }
                      });

                      _this7.bookmarkImg.forEach(function (element, i) {
                        if (_this7.bookmarkImg[i].post_id == d.data[0].getpostId) {
                          _this7.bookmarkImg[i].Tcount = d.data[0].count;
                        } // console.log(element);
                        // console.log(this.bookmarkImg[i]);

                      });
                    });
                    _context3.next = 6;
                    return modal.present();

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
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return BookmarkPage;
    }();

    BookmarkPage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_5__["PeopleViewService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    BookmarkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookmark',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookmark.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookmark.page.scss */
      "./src/app/bookmark/bookmark.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_5__["PeopleViewService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])], BookmarkPage);
    /***/
  }
}]);
//# sourceMappingURL=bookmark-bookmark-module-es5.js.map