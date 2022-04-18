(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmark-bookmark-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Comments ({{count}})</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-list *ngIf=\"data\">\r\n    <ion-list lines=\"none\" class=\"comment-list\" *ngFor=\"let data of comment\" >\r\n      <ion-item class=\"comment-item\">\r\n        <ion-avatar slot=\"start\" *ngIf=\"data.user.bios.profile_pic\">\r\n          <img src='{{profilePicPath}}{{data.user.bios.profile_pic}}'>\r\n        </ion-avatar>\r\n        <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"!data.user.bios.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{data.user.user_name}}</h2>\r\n          <p>{{data.comment}}</p>\r\n          <ion-label class=\"comment-links\">\r\n            <ion-text id=\"{{data.id}}\" (click)=\"replyComment($event)\">Reply</ion-text>\r\n            \r\n            <ion-text *ngIf=\"userId == data.user_id\" id=\"{{data.id}}\" (click)=\"deleteComment($event)\">Delete</ion-text>\r\n             \r\n          </ion-label>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-list lines=\"none\" class=\"comment-list\" *ngFor=\"let replyData of data.comment_reply\">\r\n        <ion-item class=\"comment-item\">\r\n          <ion-avatar slot=\"start\" *ngIf=\"replyData.user.bios.profile_pic\">\r\n            <img src=\"{{profilePicPath}}{{replyData.user.bios.profile_pic}}\">\r\n          </ion-avatar>\r\n          <ion-avatar slot=\"start\" *ngIf=\"!replyData.user.bios.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{replyData.user.user_name}}</h2>\r\n            <p>{{replyData.comment}}</p>\r\n            <ion-label class=\"comment-links\">\r\n              <ion-text *ngIf=\"userId == replyData.user_id\" id=\"{{replyData.id}}\" (click)=\"deleteComment($event)\" >Delete</ion-text>\r\n            </ion-label>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-list>\r\n  </ion-list> \r\n  <ion-list lines=\"none\" class=\"comment-list\" *ngIf=\"!data\">\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>  \r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>  \r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"comment-item\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>      \r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"sticky-footer\">\r\n  <form class=\"commentForm\" [formGroup]=\"commentForm\" (ngSubmit)=\"onClickSubmit()\">\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"profileImage\">\r\n      <img src=\"{{profilePicPath}}{{profileImage}}\">\r\n    </ion-avatar>\r\n    <ion-avatar slot=\"start\" class=\"ion-no-margin\" *ngIf=\"!profileImage\">\r\n      <img src=\"../../assets/images/user.jpg\">\r\n    </ion-avatar>\r\n    <textarea placeholder=\"Enter Input\" #commentfield formControlName=\"comment\" name=\"comment\"   auto-grow=\"true\" class=\"comment\"></textarea>\r\n    <img (click)=\"onClickSubmit()\" src=\"../assets/images/send.svg\" class=\"send-img\">\r\n  </ion-item>\r\n</form>\r\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click)=\"goBack()\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>My Bookmark</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-segment class=\"top-segment\" (ionChange)=\"tabs($event)\" >\r\n    <ion-segment-button value=\"images\" checked>Images</ion-segment-button>\r\n    <ion-segment-button value=\"video\">Videos</ion-segment-button>\r\n    <ion-segment-button value=\"program\">Program</ion-segment-button>\r\n  </ion-segment>\r\n  <div [ngSwitch]=\"bookmarkBlock\" *ngIf=\"!data\">\r\n    <div *ngSwitchCase=\"'images'\"> \r\n      <div *ngIf=\"bimg\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No post added yet!!!</p>\r\n      </div>\r\n      <ion-card class=\"item-card\" *ngFor=\"let post of bookmarkImg\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+post?.post_user?.bios?.profile_pic\"/>\r\n            <!-- <img src=\"{{profile_url}}{{post.posts.post_user?.bios?.profile_pic}}\" *ngIf=\"post.posts.post_user?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post.posts.post_user?.bios?.profile_pic\">   -->\r\n          </ion-avatar> \r\n            <div class=\"header-right\">  \r\n            <ion-label>\r\n              <ion-card-title>{{post.posts.post_user.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post.posts.post_user.location}}</ion-card-subtitle>       \r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">{{post.posts.created_at}}</p></ion-text> \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-slides [options]=\"imageSlider\" class=\"post-slider\" [pager]=\"true\">\r\n              <ion-slide *ngFor=\"let imgpath of post.posts['image_post']['0']['thumb_path']; let i = index;\">\r\n                <img (click)=\"openViewer(post.posts['image_post']['0']['image_path'][i])\" [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"url+ imgpath\" alt=\"{{imgpath}}\"/>\r\n              </ion-slide>              \r\n            </ion-slides>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div (click)=\"postComment(post?.post_id)\" *ngIf=\"post?.posts?.post_user?.comment_disable == 0\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>{{post?.Tcount}}</span>\r\n                </div>\r\n                <div  (click)=\"liked(post.posts.id,post?.liked)\"  class=\"{{ post.liked ?'active':'inactive' }}\"  >\r\n                  <ion-icon  class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\" ></ion-icon> <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <ion-item>\r\n                <div (click)=\"bookmarked(post.posts?.id , post?.bookmarked , 1)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p *ngIf=\"post.posts['image_post']['0'].description && post.posts['image_post']['0'].description.length < 30\"><span\r\n              class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts['image_post']['0'].description.substr(0, 29)}}\r\n            </p>\r\n              <p *ngIf=\"post.posts['image_post']['0'].description && post.posts['image_post']['0'].description.length > 29 && expanded !=  post.posts.id\"><span\r\n                class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts['image_post']['0'].description.substr(0, 29)}} <span (click)=\"expanded = post.posts.id\"\r\n                class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.posts.id \"><span class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts['image_post']['0'].description}} <span\r\n                (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n            </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngSwitchCase=\"'video'\">\r\n      <div *ngIf=\"bvid\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No video added yet!!!</p>\r\n      </div>\r\n      <ion-card class=\"item-card\" *ngFor=\"let post of bookmarkVideo\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"userPPicurl+post?.posts?.post_user?.bios?.profile_pic\"/>\r\n            <!-- <img src=\"{{profile_url}}{{post?.posts?.post_user?.bios?.profile_pic}}\" *ngIf=\"post?.posts?.post_user?.bios?.profile_pic\">\r\n            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!post?.posts?.post_user?.bios?.profile_pic\">   -->\r\n          </ion-avatar> \r\n            <div class=\"header-right\">  \r\n            <ion-label>\r\n              <ion-card-title>{{post.posts.post_user.user_name}}</ion-card-title>\r\n              <ion-card-subtitle>{{post.posts.post_user.location}}</ion-card-subtitle>       \r\n            </ion-label>\r\n            <ion-text class=\"post-timedate\"><p class=\"post-date\">{{post.posts.created_at}}</p></ion-text> \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail [routerLink]=\"['/videos',post.post_id]\"\r\n          *ngIf=\"post?.posts?.video_post[0].thumb_path\">\r\n          <img [defaultImage]=\"defaultPostImage\" [lazyLoad]=\"storagePath+ post?.posts?.video_post[0].thumb_path\" alt=\"Video Thumnail Path\"/>\r\n          <!-- <img src=\"{{storagePath + post?.posts?.video_post[0].thumb_path}}\" alt=\"Thumnail Path\" /> -->\r\n          <!-- <img (click)=\"openViewer(post['video_post']['0']['thumb_path'])\" src=\"{{storagePath + post['video_post']['0']['thumb_path']}}\" alt=\"Thumnail Path\" /> -->\r\n        </ion-thumbnail>\r\n        <ion-icon class=\"video-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <div (click)=\"postComment(post?.post_id)\" *ngIf=\"post?.posts?.post_user?.comment_disable == 0\">\r\n                  <ion-icon ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon> <span>{{post?.Tcount}}</span>\r\n                </div>\r\n                <div  (click)=\"liked(post.posts.id,post?.liked)\"  class=\"{{ post.liked ?'active':'inactive' }}\"  >\r\n                  <ion-icon  class=\"like-icon\" ios=\"ios-heart\" md=\"md-heart\" ></ion-icon> <span>{{post?.count}}</span>\r\n                </div>\r\n              </ion-item>\r\n              <ion-item>\r\n                <div (click)=\"bookmarked(post.posts?.id , post?.bookmarked , 2)\" class=\"{{ post?.bookmarked ?'active':'inactive' }}\">\r\n                  <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p *ngIf=\"post.posts?.video_post[0].title && post.posts?.video_post[0].title.length < 30\"><span\r\n              class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts?.video_post[0].title.substr(0, 29)}}\r\n            </p>\r\n              <p *ngIf=\"post.posts?.video_post[0].title && post.posts?.video_post[0].title > 29 && expanded !=  post.post_id\"><span\r\n                class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts?.video_post[0].title.substr(0, 29)}} <span (click)=\"expanded = post.posts.id\"\r\n                class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n              <p *ngIf=\"expanded ==  post.posts.id \"><span class=\"username-text text-green\">{{post.posts.post_user.user_name}}</span>{{post.posts?.video_post[0].title}} <span\r\n                (click)=\"expanded = 0\" class=\"text-green\">{{expanded==  post.posts.id ?'View less':'View more'}}</span></p>\r\n            </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngSwitchCase=\"'program'\">\r\n      <div *ngIf=\"!bookmarkProg?.length > 0\" class=\"no-data\">\r\n        <img src=\"../../../assets/images/error.svg\" class=\"mb-10\" width=\"40px\" />\r\n        <p>No program added yet!!!</p>\r\n      </div>\r\n      <ion-item class=\"item-card\" *ngFor=\"let prog of bookmarkProg\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [defaultImage]=\"defaultUserImage\" [lazyLoad]=\"profile_url+prog?.programs?.program_user?.bios?.profile_pic\"/>\r\n          <!-- <img src=\"{{profile_url}}{{prog?.programs?.program_user?.bios?.profile_pic}}\" *ngIf=\"prog?.programs?.program_user?.bios?.profile_pic\">\r\n          <img src=\"../../assets/images/user.jpg\" *ngIf=\"!prog?.programs?.program_user?.bios?.profile_pic\">   -->\r\n\r\n        </ion-avatar>\r\n        <ion-label     [routerLink]=\"loginUserData?.id ==prog?.programs?.program_user?.user_id ? ['/program-details/',prog?.programs?.id] : ['/program-view/',prog?.programs?.id]\">\r\n          <h3 class=\"list-person\">{{prog?.programs?.title}}</h3>\r\n          <span class=\"list-name d-block\">{{prog?.programs?.type_id}} Group</span>\r\n          <span class=\"list-name d-block\">By: {{prog?.programs?.program_user?.user_name}}  </span> \r\n          <span class=\"list-name d-block\">On: {{prog?.programs?.convertedTime | date:'medium'}}  </span> \r\n        </ion-label>\r\n        <div class=\"action-links\" slot=\"end\">\r\n          <div (click)=\"bookmarked(prog.programs?.id , prog?.bookmarked , 5)\" class=\"{{ prog?.bookmarked ?'active':'inactive' }}\">\r\n            <ion-icon class=\"active-icon\" ios=\"ios-bookmark\" md=\"md-bookmark\"></ion-icon>\r\n          </div>\r\n          <ion-icon (click)=\"nutritionModal(prog?.programs)\" ios=\"md-restaurant\" md=\"md-restaurant\" *ngIf=\"prog?.programs?.nutrition_id\"></ion-icon>\r\n        </div>\r\n      </ion-item>      \r\n    </div>\r\n  </div>\r\n  <!-- <div [ngSwitch]=\"bookmarkBlock\"  *ngIf=\"data\">\r\n    <div *ngSwitchCase=\"'images'\"> \r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngSwitchCase=\"'video'\" lines=\"none\">   \r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>  \r\n      <ion-card class=\"item-card\">\r\n        <ion-card-header class=\"item-header\">\r\n          <ion-avatar>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-avatar> \r\n          <div class=\"header-right\"> \r\n              <ion-skeleton-text animated></ion-skeleton-text>  \r\n          </div>   \r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding item-content\">\r\n          <ion-thumbnail>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>      \r\n          <div class=\"post-content\">\r\n            <ion-list class=\"item-post\" lines=\"none\">\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card> \r\n    </div>\r\n    <ion-list lines=\"none\" *ngSwitchCase=\"'program'\">\r\n      <ion-item class=\"item-card\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"item-card\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"item-card\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-list {\n  padding: 0; }\n\n.comment-list ion-item {\n  padding: 0; }\n\nion-avatar {\n  margin-right: 10px; }\n\nh2 {\n  font-weight: 500;\n  color: #000;\n  font-size: 0.90rem; }\n\n.comment-item ion-label ion-skeleton-text {\n  height: 28px;\n  margin-top: 0; }\n\n.sticky-footer .send-img {\n  width: 26px; }\n\n.comment {\n  width: 100%;\n  border: none; }\n\nion-list {\n  margin-bottom: 56px; }\n\nion-list > ion-list {\n  margin-bottom: 0; }\n\n.sticky-footer {\n  max-height: 100px;\n  min-height: 56px;\n  height: auto; }\n\n.sticky-footer form {\n    height: 100%; }\n\n.sticky-footer form ion-item {\n      height: 100%;\n      display: flex; }\n\n.sticky-footer form ion-item ion-textarea {\n        position: relative;\n        height: 100%;\n        margin: 0;\n        --padding-top: 14px; }\n\n.sticky-footer form ion-item .send-img {\n        width: 26px;\n        margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmsvYm9va21hcmstcG9zdC1jb21tZW50L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxib29rbWFya1xcYm9va21hcmstcG9zdC1jb21tZW50XFxib29rbWFyay1wb3N0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxVQUFVLEVBQUE7O0FBQ3hCO0VBQXVCLFVBQVUsRUFBQTs7QUFDakM7RUFBVyxrQkFBa0IsRUFBQTs7QUFDN0I7RUFBRyxnQkFBZ0I7RUFBQyxXQUFXO0VBQUMsa0JBQWtCLEVBQUE7O0FBR2xEO0VBQTBDLFlBQVk7RUFBQyxhQUFhLEVBQUE7O0FBR3BFO0VBQXlCLFdBQVcsRUFBQTs7QUFDcEM7RUFBVSxXQUFXO0VBQUUsWUFBWSxFQUFBOztBQUNuQztFQUFTLG1CQUFtQixFQUFBOztBQUM1QjtFQUFrQixnQkFBZ0IsRUFBQTs7QUFDbEM7RUFBZSxpQkFBaUI7RUFBQyxnQkFBZ0I7RUFBQyxZQUFZLEVBQUE7O0FBQTlEO0lBQ1MsWUFBWSxFQUFBOztBQURyQjtNQUVpQixZQUFZO01BQUMsYUFBYSxFQUFBOztBQUYzQztRQUd5QixrQkFBa0I7UUFBQyxZQUFZO1FBQUMsU0FBUztRQUFDLG1CQUFjLEVBQUE7O0FBSGpGO1FBSXNCLFdBQVc7UUFBQyxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrL2Jvb2ttYXJrLXBvc3QtY29tbWVudC9ib29rbWFyay1wb3N0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1saXN0e3BhZGRpbmc6IDA7fVxyXG4uY29tbWVudC1saXN0IGlvbi1pdGVte3BhZGRpbmc6IDA7fVxyXG5pb24tYXZhdGFye21hcmdpbi1yaWdodDogMTBweDt9XHJcbmgye2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICMwMDA7Zm9udC1zaXplOiAwLjkwcmVtO31cclxuXHJcbi8vIGNzcyBmb3Igc2tlbGV0b25cclxuLmNvbW1lbnQtaXRlbSBpb24tbGFiZWwgaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAyOHB4O21hcmdpbi10b3A6IDA7fVxyXG5cclxuLy8gY3NzIGZvciBmb290ZXJcclxuLnN0aWNreS1mb290ZXIgLnNlbmQtaW1ne3dpZHRoOiAyNnB4O31cclxuLmNvbW1lbnQge3dpZHRoOiAxMDAlOyBib3JkZXI6IG5vbmU7fVxyXG5pb24tbGlzdHttYXJnaW4tYm90dG9tOiA1NnB4O31cclxuaW9uLWxpc3Q+aW9uLWxpc3R7bWFyZ2luLWJvdHRvbTogMDt9XHJcbi5zdGlja3ktZm9vdGVye21heC1oZWlnaHQ6IDEwMHB4O21pbi1oZWlnaHQ6IDU2cHg7aGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9ybXtoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgaW9uLWl0ZW17aGVpZ2h0OiAxMDAlO2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0YXJlYXtwb3NpdGlvbjogcmVsYXRpdmU7aGVpZ2h0OiAxMDAlO21hcmdpbjogMDstLXBhZGRpbmctdG9wOiAxNHB4O31cclxuICAgICAgICAgICAgLnNlbmQtaW1ne3dpZHRoOiAyNnB4O21hcmdpbi1sZWZ0OiAxMHB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BookmarkPostCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPostCommentComponent", function() { return BookmarkPostCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









let BookmarkPostCommentComponent = class BookmarkPostCommentComponent {
    constructor(activatedRoute, fb, commonService, postService, storage, navCtrl, urlrouter, navParams) {
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
            comment: [
                { type: 'required', message: 'Email is required.' },
                { type: 'maxlength', message: 'Comment cannot be more than 25 characters long' }
            ],
        };
        this.createForm();
        this.activatedRoute.paramMap.subscribe((params) => {
            // this.postId = params.get('postId');
        });
    }
    ionViewWillEnter() {
    }
    ngOnInit() {
        this.getpostId = this.navParams.data.details;
        console.log(this.getpostId + ' this.getpostId');
        this.scrollToBottomOnInit();
        this.profilePicPath = _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"].profilePic;
        const dataPromise = this.storage.get('userData');
        dataPromise.then(data => {
            this.storageData = JSON.parse(data);
            this.userId = this.storageData.id;
        });
        this.commentForm.patchValue({
            postId: this.getpostId
        });
        this.postService.getComment({ 'postId': this.getpostId }).subscribe((data) => {
            this.data = true;
            this.comment = data.status;
            this.count = data.count;
            console.log('this.postId' + this.getpostId);
        });
        this.postService.getProfileImage().subscribe((data) => {
            this.profileImage = data.status.profile_pic;
        });
    }
    createForm() {
        this.commentForm = this.fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
            ])),
            postId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            replyToComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    // @ViewChild("comment",{"static" : true}) input: ElementRef;
    replyComment(event) {
        this.content.nativeElement.focus();
        if (event.srcElement.id != '') {
            console.log('ghfghf');
            this.replyToComment = event.srcElement.id;
        }
        else {
            this.replyToComment = '';
        }
        this.commentForm.get('replyToComment').setValue(this.replyToComment);
    }
    deleteComment(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commentId = event.srcElement.id;
            this.postService.deleteComment({ 'commentId': this.commentId }).subscribe((data) => {
                if (data.status == true) {
                    this.commonService.presentToast('Comment Deleted !');
                    this.ngOnInit();
                }
            }, err => {
                console.log(err + 'errr');
            });
        });
    }
    main() {
        this.router.navigate(["/main"]);
    }
    getContent() {
        return document.querySelector('ion-content');
    }
    scrollToBottomOnInit() {
        this.getContent().scrollToBottom(300);
    }
    onClickSubmit() {
        this.submitted = true;
        console.log(this.commentForm.value);
        if (this.commentForm.value != '') {
            this.commonService.presentLoader();
            this.postService.addComment(this.commentForm.value).subscribe((data) => {
                if (data.status == true) {
                    this.commentForm.reset();
                    this.commentForm.get('replyToComment').setValue('');
                    this.getContent().scrollToBottom(1000);
                    this.ngOnInit();
                }
                this.commonService.dismissLoader();
            }, err => {
                this.commonService.dismissLoader();
                console.log(err + 'errr');
            });
        }
    }
    goBack() {
        let dataArray = [{ 'getpostId': this.getpostId, 'count': this.count }];
        this.commonService.dismissModal(dataArray);
    }
};
BookmarkPostCommentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentfield', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BookmarkPostCommentComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], BookmarkPostCommentComponent.prototype, "ngOnInit", null);
BookmarkPostCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookmark-post-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookmark-post-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookmark-post-comment.component.scss */ "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavParams"]])
], BookmarkPostCommentComponent);



/***/ }),

/***/ "./src/app/bookmark/bookmark-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bookmark/bookmark-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BookmarkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPageRoutingModule", function() { return BookmarkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookmark_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmark.page */ "./src/app/bookmark/bookmark.page.ts");




const routes = [
    {
        path: '',
        component: _bookmark_page__WEBPACK_IMPORTED_MODULE_3__["BookmarkPage"]
    }
];
let BookmarkPageRoutingModule = class BookmarkPageRoutingModule {
};
BookmarkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookmarkPageRoutingModule);



/***/ }),

/***/ "./src/app/bookmark/bookmark.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookmark/bookmark.module.ts ***!
  \*********************************************/
/*! exports provided: BookmarkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPageModule", function() { return BookmarkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookmark_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmark-routing.module */ "./src/app/bookmark/bookmark-routing.module.ts");
/* harmony import */ var _bookmark_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmark.page */ "./src/app/bookmark/bookmark.page.ts");
/* harmony import */ var _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bookmark/bookmark-post-comment/bookmark-post-comment.component */ "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");









let BookmarkPageModule = class BookmarkPageModule {
};
BookmarkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookmark_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookmarkPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"]
        ],
        declarations: [_bookmark_page__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"], _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["BookmarkPostCommentComponent"]],
        entryComponents: [_bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["BookmarkPostCommentComponent"]]
    })
], BookmarkPageModule);



/***/ }),

/***/ "./src/app/bookmark/bookmark.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookmark/bookmark.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header.grey-header {\n  text-transform: capitalize;\n  color: #222;\n  font-weight: 400;\n  font-size: 0.757rem;\n  padding-right: 16px; }\n\nion-list-header ion-button {\n  margin: 0;\n  border-radius: 4px; }\n\n.item-card {\n  box-shadow: 0px 8px 24px rgba(34, 35, 58, 0.09);\n  background: #FFF; }\n\n.item-header {\n  display: flex;\n  padding: 10px; }\n\n.item-header ion-avatar {\n  width: 34px;\n  min-width: 34px;\n  height: 34px;\n  margin-right: 8px; }\n\n.post-timedate p {\n  font-size: 0.757rem;\n  text-transform: capitalize;\n  margin-bottom: 0;\n  color: #676767;\n  font-weight: 400; }\n\n.header-right {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n\n.post-content {\n  padding: 10px; }\n\n.item-post {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0; }\n\n.item-post ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: auto; }\n\n.item-post ion-item > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-right: 15px;\n  font-size: 1.45rem; }\n\n.item-post ion-item:last-child > div {\n  margin-right: 0; }\n\n.username-text {\n  margin-right: 3px; }\n\n.item-post ion-item ion-skeleton-text {\n  width: 32px;\n  height: 18px; }\n\n.item-post ion-item ion-skeleton-text:last-child {\n  margin-left: 5px; }\n\n.post-content p ion-skeleton-text {\n  height: 26px; }\n\nion-item {\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --border-radius: 4px; }\n\n.no-data {\n  height: calc(100vh - 160px); }\n\n.item-card {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\n\n.item-card .item-header {\n    padding: 15px; }\n\n.item-card .item-header .header-right {\n      align-items: center; }\n\n.item-card .item-content ion-thumbnail {\n    height: calc(100vw - 30px); }\n\n.item-card .item-content ion-thumbnail .post-slider {\n      max-height: none;\n      height: 100%; }\n\n.item-card .item-content ion-thumbnail .post-slider ion-slide {\n        height: 100%; }\n\n.item-card .item-content ion-thumbnail img {\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center;\n         object-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmsvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGJvb2ttYXJrXFxib29rbWFyay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBNEIsMEJBQTBCO0VBQUMsV0FBVztFQUFDLGdCQUFnQjtFQUFDLG1CQUFtQjtFQUFDLG1CQUFtQixFQUFBOztBQUMzSDtFQUEyQixTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ3ZEO0VBQVcsK0NBQStDO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQzNFO0VBQWEsYUFBYTtFQUFDLGFBQWEsRUFBQTs7QUFDeEM7RUFBd0IsV0FBVztFQUFDLGVBQWM7RUFBQyxZQUFZO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ2pGO0VBQWlCLG1CQUFtQjtFQUFDLDBCQUEwQjtFQUFDLGdCQUFnQjtFQUFDLGNBQWM7RUFBQyxnQkFBZ0IsRUFBQTs7QUFDaEg7RUFBYyxhQUFhO0VBQUMsOEJBQThCO0VBQUMsV0FBVyxFQUFBOztBQUN0RTtFQUFjLGFBQWEsRUFBQTs7QUFDM0I7RUFBVyxhQUFhO0VBQUMsOEJBQThCO0VBQUMsbUJBQW1CO0VBQUMsVUFBVSxFQUFBOztBQUN0RjtFQUFvQixrQkFBZ0I7RUFBRyxzQkFBb0I7RUFBRyxrQkFBYSxFQUFBOztBQUMzRTtFQUF3QixhQUFhO0VBQUMsMkJBQTJCO0VBQUMsbUJBQW1CO0VBQUMsa0JBQWtCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzNIO0VBQW1DLGVBQWUsRUFBQTs7QUFDbEQ7RUFBZSxpQkFBaUIsRUFBQTs7QUFHaEM7RUFBc0MsV0FBVztFQUFDLFlBQVksRUFBQTs7QUFDOUQ7RUFBaUQsZ0JBQWdCLEVBQUE7O0FBQ2pFO0VBQWtDLFlBQVksRUFBQTs7QUFFOUM7RUFBUyxrQkFBa0I7RUFBQyxrQkFBa0I7RUFBQyxvQkFBZ0IsRUFBQTs7QUFDL0Q7RUFBUywyQkFBMkIsRUFBQTs7QUFFcEM7RUFDSSx5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFGMUI7SUFJUSxhQUFhLEVBQUE7O0FBSnJCO01BTVksbUJBQW1CLEVBQUE7O0FBTi9CO0lBV1ksMEJBQTBCLEVBQUE7O0FBWHRDO01BYWdCLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7O0FBZDVCO1FBZ0JvQixZQUFZLEVBQUE7O0FBaEJoQztNQW9CZ0IsWUFBWTtNQUNaLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIsMEJBQXVCO1NBQXZCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYm9va21hcmsvYm9va21hcmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QtaGVhZGVyLmdyZXktaGVhZGVye3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO2NvbG9yOiAjMjIyO2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAwLjc1N3JlbTtwYWRkaW5nLXJpZ2h0OiAxNnB4O31cclxuaW9uLWxpc3QtaGVhZGVyIGlvbi1idXR0b257bWFyZ2luOiAwO2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbi5pdGVtLWNhcmR7Ym94LXNoYWRvdzogMHB4IDhweCAyNHB4IHJnYmEoMzQsIDM1LCA1OCwgMC4wOSk7YmFja2dyb3VuZDogI0ZGRjt9XHJcbi5pdGVtLWhlYWRlcntkaXNwbGF5OiBmbGV4O3BhZGRpbmc6IDEwcHg7fVxyXG4uaXRlbS1oZWFkZXIgaW9uLWF2YXRhcnt3aWR0aDogMzRweDttaW4td2lkdGg6MzRweDtoZWlnaHQ6IDM0cHg7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG4ucG9zdC10aW1lZGF0ZSBwe2ZvbnQtc2l6ZTogMC43NTdyZW07dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7bWFyZ2luLWJvdHRvbTogMDtjb2xvcjogIzY3Njc2Nztmb250LXdlaWdodDogNDAwO31cclxuLmhlYWRlci1yaWdodHtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjt3aWR0aDogMTAwJTt9XHJcbi5wb3N0LWNvbnRlbnR7cGFkZGluZzogMTBweDt9XHJcbi5pdGVtLXBvc3R7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6IGNlbnRlcjtwYWRkaW5nOiAwO31cclxuLml0ZW0tcG9zdCBpb24taXRlbXstLXBhZGRpbmctc3RhcnQ6IDA7LS1pbm5lci1wYWRkaW5nLWVuZDogMDstLW1pbi1oZWlnaHQ6IGF1dG87fVxyXG4uaXRlbS1wb3N0IGlvbi1pdGVtPmRpdntkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbi1yaWdodDogMTVweDtmb250LXNpemU6IDEuNDVyZW07fVxyXG4uaXRlbS1wb3N0IGlvbi1pdGVtOmxhc3QtY2hpbGQ+ZGl2e21hcmdpbi1yaWdodDogMH1cclxuLnVzZXJuYW1lLXRleHR7bWFyZ2luLXJpZ2h0OiAzcHg7fVxyXG5cclxuLy8gc2tlbGV0b24gY3NzXHJcbi5pdGVtLXBvc3QgaW9uLWl0ZW0gaW9uLXNrZWxldG9uLXRleHR7d2lkdGg6IDMycHg7aGVpZ2h0OiAxOHB4O31cclxuLml0ZW0tcG9zdCBpb24taXRlbSBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxke21hcmdpbi1sZWZ0OiA1cHg7fVxyXG4ucG9zdC1jb250ZW50IHAgaW9uLXNrZWxldG9uLXRleHR7aGVpZ2h0OiAyNnB4O31cclxuXHJcbmlvbi1pdGVte21hcmdpbi1ib3R0b206IDVweDtib3JkZXItcmFkaXVzOiA0cHg7LS1ib3JkZXItcmFkaXVzOiA0cHg7fVxyXG4ubm8tZGF0YXtoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7fVxyXG5cclxuLml0ZW0tY2FyZCB7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgLml0ZW0taGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgLmhlYWRlci1yaWdodHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jb250ZW50e1xyXG4gICAgICAgIGlvbi10aHVtYm5haWx7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDMwcHgpO1xyXG4gICAgICAgICAgICAucG9zdC1zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaW9uLXNsaWRle1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/bookmark/bookmark.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookmark/bookmark.page.ts ***!
  \*******************************************/
/*! exports provided: BookmarkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPage", function() { return BookmarkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_people_view_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/people-view.service */ "./src/app/services/people-view.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../config/config */ "./src/app/config/config.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bookmark/bookmark-post-comment/bookmark-post-comment.component */ "./src/app/bookmark/bookmark-post-comment/bookmark-post-comment.component.ts");














let BookmarkPage = class BookmarkPage {
    constructor(commonService, settingService, peopleService, modalController, postService, navCtrl, location, router) {
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
        router.events.subscribe();
        // console.log(this.router.url);
    }
    tabs(ev) {
        this.bookmarkBlock = ev.detail.value;
    }
    ngOnInit() {
        this.commonService.presentLoader();
        this.loginUserData = JSON.parse(localStorage.getItem("userData"));
        this.settingService.getBookmarkPost().subscribe((data) => {
            console.log(data);
            this.bookmarkPost = data.posts;
            this.bookmarkPost.forEach((element, i) => {
                console.log(element);
                if (element.post_type == 5) {
                    element.programs.convertedTime = new Date(element.programs.program_date + 'Z');
                    this.bookmarkProg.push(element);
                    console.log(this.bookmarkProg);
                    this.bookmarkProg[i].bookmarked = true;
                }
                else {
                    this.bookmarkPost[i].count = element.posts.post_likes.length;
                    element.posts.post_likes.filter((f) => {
                        if (f.user_id == this.loginUserData.id) {
                            this.bookmarkPost[i].liked = true;
                        }
                    });
                    element.posts.post_bookmarks.filter((f) => {
                        if (f.user_id == this.loginUserData.id) {
                            this.bookmarkPost[i].bookmarked = true;
                        }
                    });
                    if (element.post_type == 1) {
                        this.bimg = false;
                        this.bookmarkImg.push(element);
                        this.bookmarkImg.forEach((element, i) => {
                            // console.log(element.posts.total_comments.length);
                            this.bookmarkImg[i].Tcount = element.posts.total_comments.length;
                            // this.postService.getComment({'postId' : element.id }).subscribe(
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
                        if (this.bookmarkImg.length < 1) {
                            this.bimg = true;
                        }
                        this.commonService.dismissLoader();
                    }
                    else if (element.post_type == 2) {
                        this.bvid = false;
                        this.bookmarkVideo.push(element);
                        this.bookmarkVideo.forEach((element, i) => {
                            // this.postService.getComment({'postId' : element.id }).subscribe(
                            //   (data: any) => {
                            //     var cCount = data.count;
                            this.bookmarkVideo[i].Tcount = element.posts.total_comments.length;
                            //     // this.data = true;
                            //   //  this.comment = data.status;
                            //   //  var count = data.count;
                            //   //  console.log(count);
                            //   //  console.log('hh' + element.id);
                            //   });
                            // console.log(this.bookmarkImg[i]);
                        });
                        if (this.bookmarkVideo.length < 1) {
                            this.bvid = true;
                        }
                        this.commonService.dismissLoader();
                        console.log(this.bookmarkVideo);
                    }
                }
            });
        });
        this.commonService.dismissLoader();
    }
    nutritionModal(data) {
        this.commonService.presentModal(_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_3__["NutritionModalComponent"], 'fullModal', { 'data': data });
    }
    liked(postId, likeStat) {
        // console.log(this.bookmarkPost);
        this.bookmarkPost.forEach((element, i) => {
            // console.log(element.post_id + 'eid');
            // console.log(postId + 'pid');
            if (element.post_id == postId) {
                this.bookmarkPost[i].liked = !likeStat;
                if (likeStat) {
                    this.bookmarkPost[i].count = (this.bookmarkPost[i].count - 1);
                }
                else {
                    this.bookmarkPost[i].count = (this.bookmarkPost[i].count + 1);
                }
            }
        });
        // console.log(postId);
        // console.log(likeStat);
        this.peopleService.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data) => {
            if (data.status) {
                this.commonService.presentToast(data.status);
            }
        });
    }
    // ----------- Bookmarked start here -----------
    bookmarked(postId, bmStat, post_type) {
        console.log(postId, bmStat);
        this.bookmarkPost.forEach((element, i) => {
            console.log(element.post_id);
            if (element.post_id == postId) {
                this.bookmarkPost[i].bookmarked = !bmStat;
            }
        });
        // console.log(postId, bmStat);
        this.peopleService.bookmarkPost({ 'postId': postId, 'bookmark': bmStat, 'post_type': post_type }).subscribe((data) => {
            if (data.status) {
                console.log(data);
                this.commonService.presentToast(data.status);
            }
        });
    }
    openViewer(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.url + path);
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                componentProps: {
                    src: this.url + path,
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    postComment(postId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _bookmark_bookmark_post_comment_bookmark_post_comment_component__WEBPACK_IMPORTED_MODULE_12__["BookmarkPostCommentComponent"],
                cssClass: 'fullModal',
                componentProps: { 'details': postId }
            });
            modal.onDidDismiss().then((d) => {
                console.log(d.data[0].getpostId);
                // this.ngOnInit();
                this.bookmarkVideo.forEach((element, i) => {
                    if (this.bookmarkVideo[i].post_id == d.data[0].getpostId) {
                        this.bookmarkVideo[i].Tcount = d.data[0].count;
                    }
                });
                this.bookmarkImg.forEach((element, i) => {
                    if (this.bookmarkImg[i].post_id == d.data[0].getpostId) {
                        this.bookmarkImg[i].Tcount = d.data[0].count;
                    }
                    // console.log(element);
                    // console.log(this.bookmarkImg[i]);
                });
            });
            return yield modal.present();
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
BookmarkPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_5__["PeopleViewService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
BookmarkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookmark',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookmark.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookmark/bookmark.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookmark.page.scss */ "./src/app/bookmark/bookmark.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
        _services_people_view_service__WEBPACK_IMPORTED_MODULE_5__["PeopleViewService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], BookmarkPage);



/***/ })

}]);
//# sourceMappingURL=bookmark-bookmark-module-es2015.js.map