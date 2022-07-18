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


    __webpack_exports__["default"] = ".comment-list {\n  padding: 0;\n}\n\n.comment-list ion-item {\n  padding: 0;\n}\n\nion-avatar {\n  margin-right: 10px;\n}\n\nh2 {\n  font-weight: 500;\n  color: #000;\n  font-size: 0.9rem;\n}\n\n.comment-item ion-label ion-skeleton-text {\n  height: 28px;\n  margin-top: 0;\n}\n\n.sticky-footer .send-img {\n  width: 26px;\n}\n\n.comment {\n  width: 100%;\n  border: none;\n}\n\nion-list {\n  margin-bottom: 56px;\n}\n\nion-list > ion-list {\n  margin-bottom: 0;\n}\n\n.sticky-footer {\n  max-height: 100px;\n  min-height: 56px;\n  height: auto;\n}\n\n.sticky-footer form {\n  height: 100%;\n}\n\n.sticky-footer form ion-item {\n  height: 100%;\n  display: flex;\n}\n\n.sticky-footer form ion-item ion-textarea {\n  position: relative;\n  height: 100%;\n  margin: 0;\n  --padding-top: 14px;\n}\n\n.sticky-footer form ion-item .send-img {\n  width: 26px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmsvYm9va21hcmstcG9zdC1jb21tZW50L0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXGJvb2ttYXJrXFxib29rbWFyay1wb3N0LWNvbW1lbnRcXGJvb2ttYXJrLXBvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm9va21hcmsvYm9va21hcmstcG9zdC1jb21tZW50L2Jvb2ttYXJrLXBvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFjLFVBQUE7QUNFZDs7QUREQTtFQUF1QixVQUFBO0FDS3ZCOztBREpBO0VBQVcsa0JBQUE7QUNRWDs7QURQQTtFQUFHLGdCQUFBO0VBQWlCLFdBQUE7RUFBWSxpQkFBQTtBQ2FoQzs7QURWQTtFQUEwQyxZQUFBO0VBQWEsYUFBQTtBQ2V2RDs7QURaQTtFQUF5QixXQUFBO0FDZ0J6Qjs7QURmQTtFQUFVLFdBQUE7RUFBYSxZQUFBO0FDb0J2Qjs7QURuQkE7RUFBUyxtQkFBQTtBQ3VCVDs7QUR0QkE7RUFBa0IsZ0JBQUE7QUMwQmxCOztBRHpCQTtFQUFlLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLFlBQUE7QUMrQmxEOztBRDlCSTtFQUFLLFlBQUE7QUNpQ1Q7O0FEaENRO0VBQVMsWUFBQTtFQUFhLGFBQUE7QUNvQzlCOztBRG5DWTtFQUFhLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxTQUFBO0VBQVUsbUJBQUE7QUN5Q25FOztBRHhDWTtFQUFVLFdBQUE7RUFBWSxpQkFBQTtBQzRDbEMiLCJmaWxlIjoic3JjL2FwcC9ib29rbWFyay9ib29rbWFyay1wb3N0LWNvbW1lbnQvYm9va21hcmstcG9zdC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtbGlzdHtwYWRkaW5nOiAwO31cclxuLmNvbW1lbnQtbGlzdCBpb24taXRlbXtwYWRkaW5nOiAwO31cclxuaW9uLWF2YXRhcnttYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG5oMntmb250LXdlaWdodDogNTAwO2NvbG9yOiAjMDAwO2ZvbnQtc2l6ZTogMC45MHJlbTt9XHJcblxyXG4vLyBjc3MgZm9yIHNrZWxldG9uXHJcbi5jb21tZW50LWl0ZW0gaW9uLWxhYmVsIGlvbi1za2VsZXRvbi10ZXh0e2hlaWdodDogMjhweDttYXJnaW4tdG9wOiAwO31cclxuXHJcbi8vIGNzcyBmb3IgZm9vdGVyXHJcbi5zdGlja3ktZm9vdGVyIC5zZW5kLWltZ3t3aWR0aDogMjZweDt9XHJcbi5jb21tZW50IHt3aWR0aDogMTAwJTsgYm9yZGVyOiBub25lO31cclxuaW9uLWxpc3R7bWFyZ2luLWJvdHRvbTogNTZweDt9XHJcbmlvbi1saXN0Pmlvbi1saXN0e21hcmdpbi1ib3R0b206IDA7fVxyXG4uc3RpY2t5LWZvb3RlcnttYXgtaGVpZ2h0OiAxMDBweDttaW4taGVpZ2h0OiA1NnB4O2hlaWdodDogYXV0bztcclxuICAgIGZvcm17aGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGlvbi1pdGVte2hlaWdodDogMTAwJTtkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBpb24tdGV4dGFyZWF7cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDogMTAwJTttYXJnaW46IDA7LS1wYWRkaW5nLXRvcDogMTRweDt9XHJcbiAgICAgICAgICAgIC5zZW5kLWltZ3t3aWR0aDogMjZweDttYXJnaW4tbGVmdDogMTBweDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5jb21tZW50LWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29tbWVudC1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5jb21tZW50LWl0ZW0gaW9uLWxhYmVsIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc3RpY2t5LWZvb3RlciAuc2VuZC1pbWcge1xuICB3aWR0aDogMjZweDtcbn1cblxuLmNvbW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG59XG5cbmlvbi1saXN0ID4gaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3RpY2t5LWZvb3RlciB7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc3RpY2t5LWZvb3RlciBmb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnN0aWNreS1mb290ZXIgZm9ybSBpb24taXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zdGlja3ktZm9vdGVyIGZvcm0gaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgLS1wYWRkaW5nLXRvcDogMTRweDtcbn1cbi5zdGlja3ktZm9vdGVyIGZvcm0gaW9uLWl0ZW0gLnNlbmQtaW1nIHtcbiAgd2lkdGg6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */";
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


    __webpack_exports__["default"] = "ion-list-header.grey-header {\n  text-transform: capitalize;\n  color: #222;\n  font-weight: 400;\n  font-size: 0.757rem;\n  padding-right: 16px;\n}\n\nion-list-header ion-button {\n  margin: 0;\n  border-radius: 4px;\n}\n\n.item-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF;\n}\n\n.item-header {\n  display: flex;\n  padding: 10px;\n}\n\n.item-header ion-avatar {\n  width: 34px;\n  min-width: 34px;\n  height: 34px;\n  margin-right: 8px;\n}\n\n.post-timedate p {\n  font-size: 0.757rem;\n  text-transform: capitalize;\n  margin-bottom: 0;\n  color: #676767;\n  font-weight: 400;\n}\n\n.header-right {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.post-content {\n  padding: 10px;\n}\n\n.item-post {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n}\n\n.item-post ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: auto;\n}\n\n.item-post ion-item > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-right: 15px;\n  font-size: 1.45rem;\n}\n\n.item-post ion-item:last-child > div {\n  margin-right: 0;\n}\n\n.username-text {\n  margin-right: 3px;\n}\n\n.item-post ion-item ion-skeleton-text {\n  width: 32px;\n  height: 18px;\n}\n\n.item-post ion-item ion-skeleton-text:last-child {\n  margin-left: 5px;\n}\n\n.post-content p ion-skeleton-text {\n  height: 26px;\n}\n\nion-item {\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --border-radius: 4px;\n}\n\n.no-data {\n  height: calc(100vh - 160px);\n}\n\n.item-card {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.item-card .item-header {\n  padding: 15px;\n}\n\n.item-card .item-header .header-right {\n  align-items: center;\n}\n\n.item-card .item-content ion-thumbnail {\n  height: calc(100vw - 30px);\n}\n\n.item-card .item-content ion-thumbnail .post-slider {\n  max-height: none;\n  height: 100%;\n}\n\n.item-card .item-content ion-thumbnail .post-slider ion-slide {\n  height: 100%;\n}\n\n.item-card .item-content ion-thumbnail img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmsvRDpcXG5pa2hpbFxcSW50b2FjdGl2ZS9zcmNcXGFwcFxcYm9va21hcmtcXGJvb2ttYXJrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYm9va21hcmsvYm9va21hcmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQTRCLDBCQUFBO0VBQTJCLFdBQUE7RUFBWSxnQkFBQTtFQUFpQixtQkFBQTtFQUFvQixtQkFBQTtBQ014Rzs7QURMQTtFQUEyQixTQUFBO0VBQVUsa0JBQUE7QUNVckM7O0FEVEE7RUFBVywrQ0FBQTtFQUFnRCxnQkFBQTtBQ2MzRDs7QURiQTtFQUFhLGFBQUE7RUFBYyxhQUFBO0FDa0IzQjs7QURqQkE7RUFBd0IsV0FBQTtFQUFZLGVBQUE7RUFBZSxZQUFBO0VBQWEsaUJBQUE7QUN3QmhFOztBRHZCQTtFQUFpQixtQkFBQTtFQUFvQiwwQkFBQTtFQUEyQixnQkFBQTtFQUFpQixjQUFBO0VBQWUsZ0JBQUE7QUMrQmhHOztBRDlCQTtFQUFjLGFBQUE7RUFBYyw4QkFBQTtFQUErQixXQUFBO0FDb0MzRDs7QURuQ0E7RUFBYyxhQUFBO0FDdUNkOztBRHRDQTtFQUFXLGFBQUE7RUFBYyw4QkFBQTtFQUErQixtQkFBQTtFQUFvQixVQUFBO0FDNkM1RTs7QUQ1Q0E7RUFBb0Isa0JBQUE7RUFBbUIsc0JBQUE7RUFBdUIsa0JBQUE7QUNrRDlEOztBRGpEQTtFQUF3QixhQUFBO0VBQWMsMkJBQUE7RUFBNEIsbUJBQUE7RUFBb0Isa0JBQUE7RUFBbUIsa0JBQUE7QUN5RHpHOztBRHhEQTtFQUFtQyxlQUFBO0FDNERuQzs7QUQzREE7RUFBZSxpQkFBQTtBQytEZjs7QUQ1REE7RUFBc0MsV0FBQTtFQUFZLFlBQUE7QUNpRWxEOztBRGhFQTtFQUFpRCxnQkFBQTtBQ29FakQ7O0FEbkVBO0VBQWtDLFlBQUE7QUN1RWxDOztBRHJFQTtFQUFTLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW1CLG9CQUFBO0FDMkUvQzs7QUQxRUE7RUFBUywyQkFBQTtBQzhFVDs7QUQ1RUE7RUFDSSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQytFSjs7QUQ5RUk7RUFDSSxhQUFBO0FDZ0ZSOztBRC9FUTtFQUNJLG1CQUFBO0FDaUZaOztBRDdFUTtFQUNJLDBCQUFBO0FDK0VaOztBRDlFWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ2dGaEI7O0FEL0VnQjtFQUNJLFlBQUE7QUNpRnBCOztBRDlFWTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtBQ2dGaEIiLCJmaWxlIjoic3JjL2FwcC9ib29rbWFyay9ib29rbWFyay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIuZ3JleS1oZWFkZXJ7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7Y29sb3I6ICMyMjI7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDAuNzU3cmVtO3BhZGRpbmctcmlnaHQ6IDE2cHg7fVxyXG5pb24tbGlzdC1oZWFkZXIgaW9uLWJ1dHRvbnttYXJnaW46IDA7Ym9yZGVyLXJhZGl1czogNHB4O31cclxuLml0ZW0tY2FyZHtib3gtc2hhZG93OiAwcHggOHB4IDI0cHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTtiYWNrZ3JvdW5kOiAjRkZGO31cclxuLml0ZW0taGVhZGVye2Rpc3BsYXk6IGZsZXg7cGFkZGluZzogMTBweDt9XHJcbi5pdGVtLWhlYWRlciBpb24tYXZhdGFye3dpZHRoOiAzNHB4O21pbi13aWR0aDozNHB4O2hlaWdodDogMzRweDttYXJnaW4tcmlnaHQ6IDhweDt9XHJcbi5wb3N0LXRpbWVkYXRlIHB7Zm9udC1zaXplOiAwLjc1N3JlbTt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTttYXJnaW4tYm90dG9tOiAwO2NvbG9yOiAjNjc2NzY3O2ZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4uaGVhZGVyLXJpZ2h0e2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3dpZHRoOiAxMDAlO31cclxuLnBvc3QtY29udGVudHtwYWRkaW5nOiAxMHB4O31cclxuLml0ZW0tcG9zdHtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczogY2VudGVyO3BhZGRpbmc6IDA7fVxyXG4uaXRlbS1wb3N0IGlvbi1pdGVtey0tcGFkZGluZy1zdGFydDogMDstLWlubmVyLXBhZGRpbmctZW5kOiAwOy0tbWluLWhlaWdodDogYXV0bzt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0+ZGl2e2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOiBjZW50ZXI7bWFyZ2luLXJpZ2h0OiAxNXB4O2ZvbnQtc2l6ZTogMS40NXJlbTt9XHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW06bGFzdC1jaGlsZD5kaXZ7bWFyZ2luLXJpZ2h0OiAwfVxyXG4udXNlcm5hbWUtdGV4dHttYXJnaW4tcmlnaHQ6IDNweDt9XHJcblxyXG4vLyBza2VsZXRvbiBjc3NcclxuLml0ZW0tcG9zdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dHt3aWR0aDogMzJweDtoZWlnaHQ6IDE4cHg7fVxyXG4uaXRlbS1wb3N0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbi5wb3N0LWNvbnRlbnQgcCBpb24tc2tlbGV0b24tdGV4dHtoZWlnaHQ6IDI2cHg7fVxyXG5cclxuaW9uLWl0ZW17bWFyZ2luLWJvdHRvbTogNXB4O2JvcmRlci1yYWRpdXM6IDRweDstLWJvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5uby1kYXRhe2hlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTt9XHJcblxyXG4uaXRlbS1jYXJkIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAuaXRlbS1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAuaGVhZGVyLXJpZ2h0e1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pdGVtLWNvbnRlbnR7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gMzBweCk7XHJcbiAgICAgICAgICAgIC5wb3N0LXNsaWRlcntcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59IiwiaW9uLWxpc3QtaGVhZGVyLmdyZXktaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuNzU3cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaXRlbS1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyNHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG5cbi5pdGVtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pdGVtLWhlYWRlciBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDM0cHg7XG4gIG1pbi13aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnBvc3QtdGltZWRhdGUgcCB7XG4gIGZvbnQtc2l6ZTogMC43NTdyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaXRlbS1wb3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXRlbS1wb3N0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLW1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbi5pdGVtLXBvc3QgaW9uLWl0ZW0gPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xufVxuXG4uaXRlbS1wb3N0IGlvbi1pdGVtOmxhc3QtY2hpbGQgPiBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi51c2VybmFtZS10ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5pdGVtLXBvc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uaXRlbS1wb3N0IGlvbi1pdGVtIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucG9zdC1jb250ZW50IHAgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubm8tZGF0YSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbn1cblxuLml0ZW0tY2FyZCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5pdGVtLWNhcmQgLml0ZW0taGVhZGVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5pdGVtLWNhcmQgLml0ZW0taGVhZGVyIC5oZWFkZXItcmlnaHQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tY2FyZCAuaXRlbS1jb250ZW50IGlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAzMHB4KTtcbn1cbi5pdGVtLWNhcmQgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIC5wb3N0LXNsaWRlciB7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pdGVtLWNhcmQgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIC5wb3N0LXNsaWRlciBpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaXRlbS1jYXJkIC5pdGVtLWNvbnRlbnQgaW9uLXRodW1ibmFpbCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */";
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
        this.bimg = true;
        this.bvid = true;
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
            console.log(data);
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
                  _this4.bimg = false;

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
                  _this4.bvid = false;

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

                  _this4.commonService.dismissLoader();

                  console.log(_this4.bookmarkVideo);
                }
              }
            });
          });
          this.commonService.dismissLoader();
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