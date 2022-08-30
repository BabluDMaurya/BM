function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-chat-list-chat-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chat-list/chat-list.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chat-list/chat-list.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatsChatListChatListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/consultant-profile']\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Chats</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-buttons class=\"ion-no-margin\" slot=\"end\" [routerLink]=\"['/add-private']\">\r\n        <ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"main_content\">\r\n  <ion-list class=\"chatlist_header\">\r\n    <ion-toolbar class=\"searchbar\">\r\n      <ion-searchbar [(ngModel)]=\"term\" animated=\"true\"></ion-searchbar>\r\n    </ion-toolbar>\r\n    <ion-list-header class=\"ion-padding-horizontal\">\r\n      <h5 class=\"ion-no-margin\">Messages</h5>\r\n      <ion-label *ngIf=\"requestCount > 0\" class=\"text-green\" (click)=\"showRequests()\">{{requestCount}} Requests</ion-label>\r\n    </ion-list-header>\r\n  </ion-list>  \r\n  <ion-list lines=\"none\" class=\"chatList_content\" detail=\"false\">\r\n    <ion-item class=\"chatList_item\"  lines=\"none\" detail=\"false\" *ngFor=\"let groups of items | filter:term\" (click)=\"chatRoom(groups)\">\r\n    <ion-avatar slot=\"start\" *ngIf=\"(groups.user_name | slice:0:3) == 'PG_'\">\r\n      <img *ngIf=\"groups?.profile_pic\" src=\"{{pgimgurl}}{{groups?.profile_pic}}\"> \r\n      <img *ngIf=\"!groups?.profile_pic\" src=\"../../assets/images/user.jpg\">       \r\n    </ion-avatar>\r\n    <ion-avatar slot=\"start\" *ngIf=\"(groups.user_name | slice:0:3) != 'PG_'\">\r\n      <img *ngIf=\"groups?.profile_pic\" src=\"{{url}}{{groups?.profile_pic}}\"> \r\n      <img *ngIf=\"!groups?.profile_pic\" src=\"../../assets/images/user.jpg\">       \r\n    </ion-avatar>\r\n\r\n    <ion-label>\r\n      <!-- <h3 class=\"list-person\" *ngIf=\"(groups.user_name | slice:0:3) == 'PG_'\">{{ groups.user_name | slice:0:3}}</h3> -->\r\n      <h3 class=\"list-person\">{{groups.user_name}}</h3>\r\n      <span class=\"list-name\">{{groups.message}}</span>\r\n      </ion-label>\r\n    <img slot=\"end\" class=\"w26\" *ngIf=\"groups.type == 1\" src=\"../../../assets/images/follower-user.svg\" />\r\n    <img slot=\"end\" class=\"w26\" *ngIf=\"groups.type == 2\" src=\"../../../assets/images/follower-group.svg\" />\r\n    <ion-badge color=\"secondary\" slot=\"end\" *ngIf=\"groups.type == 1 && groups.unreadmesage > 0\">{{groups.unreadmesage}}</ion-badge>\r\n  </ion-item>\r\n  </ion-list> \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/chats/chat-list/chat-list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/chats/chat-list/chat-list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ChatListPageRoutingModule */

  /***/
  function srcAppChatsChatListChatListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListPageRoutingModule", function () {
      return ChatListPageRoutingModule;
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


    var _chat_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-list.page */
    "./src/app/chats/chat-list/chat-list.page.ts");

    var routes = [{
      path: '',
      component: _chat_list_page__WEBPACK_IMPORTED_MODULE_3__["ChatListPage"]
    }];

    var ChatListPageRoutingModule = function ChatListPageRoutingModule() {
      _classCallCheck(this, ChatListPageRoutingModule);
    };

    ChatListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chats/chat-list/chat-list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/chats/chat-list/chat-list.module.ts ***!
    \*****************************************************/

  /*! exports provided: ChatListPageModule */

  /***/
  function srcAppChatsChatListChatListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function () {
      return ChatListPageModule;
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


    var _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-list-routing.module */
    "./src/app/chats/chat-list/chat-list-routing.module.ts");
    /* harmony import */


    var _chat_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-list.page */
    "./src/app/chats/chat-list/chat-list.page.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js"); // import {ComponentModule} from '../components.modules';


    var ChatListPageModule = function ChatListPageModule() {
      _classCallCheck(this, ChatListPageModule);
    };

    ChatListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], // ComponentModule,
      _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatListPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]],
      declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]]
    })], ChatListPageModule);
    /***/
  },

  /***/
  "./src/app/chats/chat-list/chat-list.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/chats/chat-list/chat-list.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatsChatListChatListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".followers-list {\n  height: calc(100% - 60px); }\n\n.nutrition-no-data {\n  height: calc(100% - 100px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY2hhdC1saXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxjaGF0c1xcY2hhdC1saXN0XFxjaGF0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kscUNBQXFDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0cy9jaGF0LWxpc3QvY2hhdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhpdGVzaCBjc3Mgc3RydFxyXG4uZm9sbG93ZXJzLWxpc3Qge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxufVxyXG4ubnV0cml0aW9uLW5vLWRhdGEge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCkgIWltcG9ydGFudDtcclxufVxyXG4vLyAuY2hhdGxpc3RfaGVhZGVye1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgdG9wOiA1MHB4O1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgei1pbmRleDogMTtcclxuLy8gfVxyXG4vLyAuY2hhdGxpc3RfY29udGVudHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLmNhdGxpc3RfaXRlbXtcclxuLy8gICAgIG1hcmdpbjogNXB4IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyBoaXRlc2ggY3NzIGVuZCJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chats/chat-list/chat-list.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/chats/chat-list/chat-list.page.ts ***!
    \***************************************************/

  /*! exports provided: ChatListPage */

  /***/
  function srcAppChatsChatListChatListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListPage", function () {
      return ChatListPage;
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


    var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _requests_modal_requests_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../requests-modal/requests-modal.component */
    "./src/app/chats/requests-modal/requests-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../chat-rooms/chat-rooms.component */
    "./src/app/chats/chat-rooms/chat-rooms.component.ts");

    var ChatListPage = /*#__PURE__*/function () {
      function ChatListPage(socket, navCtrl, modalController, router, commonService, chatService, toastCtrl) {
        _classCallCheck(this, ChatListPage);

        this.socket = socket;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.router = router;
        this.commonService = commonService;
        this.chatService = chatService;
        this.toastCtrl = toastCtrl;
        this.searchTerm = "";
        this.list = 0;
        this.requestCount = 0;
        this.items = [];
        this.term = '';
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].profilePic;
        this.pgimgurl = _config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].ApiUrl;
        this.profileDefaultImage = './../../../assets/images/user.jpg';
      }

      _createClass(ChatListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.setFilteredItems();
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      position: 'top',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.socket.emit('user-list', this.userData.id);
          this.callApiv = setInterval(function () {
            _this.socket.emit('user-list', _this.userData.id);
          }, 5000);
          this.myChatList();
        }
      }, {
        key: "myChatList",
        value: function myChatList() {
          var _this2 = this;

          this.socket.fromEvent('my-chat-list').subscribe(function (receiveMessageArr) {
            _this2.requestCount = 0;
            _this2.items = receiveMessageArr;
            console.log("receiveMessageArr:" + JSON.stringify(receiveMessageArr));
          });
          this.socket.fromEvent('singleChatRequestCount').subscribe(function (receiveMessageArr) {
            _this2.requestCount = _this2.requestCount + receiveMessageArr[0].single_chat_request_count; // console.log("singleCount :" + this.requestCount);
          });
          this.socket.fromEvent('groupChatRequestCount').subscribe(function (receiveMessageArr) {
            _this2.requestCount = _this2.requestCount + receiveMessageArr[0].group_chat_request_count; // console.log("groupCount :" + this.requestCount);      
          });
        }
      }, {
        key: "setFilteredItems",
        value: function setFilteredItems() {
          this.items = this.chatService.filterItems(this.searchTerm);
        }
      }, {
        key: "showRequests",
        value: function showRequests() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _requests_modal_requests_modal_component__WEBPACK_IMPORTED_MODULE_5__["RequestsModalComponent"]
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
        key: "chatRoom",
        value: function chatRoom(groups) {
          console.log("groups" + JSON.stringify(groups));
          var params = groups;
          var RID = '';

          if (this.userData.id == params.senderID) {
            RID = params.receiverID;
          } else {
            RID = params.senderID;
          } // if(parseInt(params.type) == 1){
          //   this.router.navigate(['/chat-room/'+parseInt(RID)+'/'+params.room+'/'+parseInt(params.type)]);
          // }else{
          //   // groups.id,groups.room,groups.type
          //   this.router.navigate(['/chat-room/'+parseInt(params.id)+'/'+params.room+'/'+parseInt(params.type)]);
          // }


          var recId = 0;

          if (parseInt(params.type) == 1) {
            recId = parseInt(RID);
          } else {
            recId = parseInt(params.id);
          }

          var fileData = {
            chatType: parseInt(params.type),
            room: params.room,
            receiverId: recId,
            requestId: parseInt(params.request_id)
          };
          this.commonService.presentModal(_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_9__["ChatRoomsComponent"], 'fullModal', fileData);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return ChatListPage;
    }();

    ChatListPage.ctorParameters = function () {
      return [{
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    ChatListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chat-list/chat-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-list.page.scss */
      "./src/app/chats/chat-list/chat-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], ChatListPage);
    /***/
  }
}]);
//# sourceMappingURL=chats-chat-list-chat-list-module-es5.js.map