function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-add-private-add-private-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/add-private/add-private.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/add-private/add-private.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatsAddPrivateAddPrivatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" [routerLink]=\"['/tabs/chats']\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>   \r\n     </ion-item>\r\n     <ion-item slot=\"center\">\r\n      <ion-label>New Chat Request</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <ion-label (click)=\"chatRequest()\" class=\"text-green\">Request</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <form [formGroup]=\"peopleForm\">\r\n    <div *ngIf=\"peopleList && !newSearchPersonList\">\r\n      <ion-list class=\"user-list ion-no-padding\" *ngFor=\"let people of peopleList\">\r\n        <ion-list-header class=\"grey-header\">{{people.key}}</ion-list-header>\r\n        <ion-item *ngFor=\"let peeps of people.contacts\">\r\n          <ion-avatar>\r\n            <img *ngIf=\"peeps.following_user.bios.profile_pic\"\r\n              src=\"{{profileUrl}}/{{peeps.following_user.bios.profile_pic}}\">\r\n            <img *ngIf=\"!peeps.following_user.bios.profile_pic\" src=\"../../../assets/images/user.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>{{peeps.following_user.user_name}}</ion-label>\r\n          <ion-checkbox slot=\"end\" [value]=\"peeps.following_user.id\" (click)=\"onCheckboxChange($event)\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </form>\r\n  <ion-list class=\"user-list ion-no-padding\" *ngIf=\"!peopleList\">\r\n    <ion-list-header class=\"grey-header\">A</ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/chats/add-private/add-private-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/chats/add-private/add-private-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddPrivatePageRoutingModule */

  /***/
  function srcAppChatsAddPrivateAddPrivateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPrivatePageRoutingModule", function () {
      return AddPrivatePageRoutingModule;
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


    var _add_private_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-private.page */
    "./src/app/chats/add-private/add-private.page.ts");

    var routes = [{
      path: '',
      component: _add_private_page__WEBPACK_IMPORTED_MODULE_3__["AddPrivatePage"]
    }];

    var AddPrivatePageRoutingModule = function AddPrivatePageRoutingModule() {
      _classCallCheck(this, AddPrivatePageRoutingModule);
    };

    AddPrivatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddPrivatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chats/add-private/add-private.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/chats/add-private/add-private.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddPrivatePageModule */

  /***/
  function srcAppChatsAddPrivateAddPrivateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPrivatePageModule", function () {
      return AddPrivatePageModule;
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


    var _add_private_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-private-routing.module */
    "./src/app/chats/add-private/add-private-routing.module.ts");
    /* harmony import */


    var _add_private_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-private.page */
    "./src/app/chats/add-private/add-private.page.ts");

    var AddPrivatePageModule = function AddPrivatePageModule() {
      _classCallCheck(this, AddPrivatePageModule);
    };

    AddPrivatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_private_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPrivatePageRoutingModule"]],
      declarations: [_add_private_page__WEBPACK_IMPORTED_MODULE_6__["AddPrivatePage"]]
    })], AddPrivatePageModule);
    /***/
  },

  /***/
  "./src/app/chats/add-private/add-private.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/chats/add-private/add-private.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatsAddPrivateAddPrivatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item-divider ion-list-header {\n  margin-bottom: 0; }\n\n.user-list ion-item ion-label ion-skeleton-text {\n  margin: 0;\n  height: 26px; }\n\nion-item-divider {\n  padding-left: 0; }\n\n.ios.main_content {\n  --padding-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvYWRkLXByaXZhdGUvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXGNoYXRzXFxhZGQtcHJpdmF0ZVxcYWRkLXByaXZhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlDLGdCQUFnQixFQUFBOztBQUNqRDtFQUFnRCxTQUFTO0VBQUMsWUFBWSxFQUFBOztBQUN0RTtFQUFpQixlQUFlLEVBQUE7O0FBRWhDO0VBQWtCLG1CQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0cy9hZGQtcHJpdmF0ZS9hZGQtcHJpdmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1kaXZpZGVyIGlvbi1saXN0LWhlYWRlcnttYXJnaW4tYm90dG9tOiAwO31cclxuLnVzZXItbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaW9uLXNrZWxldG9uLXRleHR7bWFyZ2luOiAwO2hlaWdodDogMjZweDt9XHJcbmlvbi1pdGVtLWRpdmlkZXJ7cGFkZGluZy1sZWZ0OiAwO31cclxuLy8gaW9zIGNzc1xyXG4uaW9zLm1haW5fY29udGVudHstLXBhZGRpbmctdG9wOiA1MHB4O30iXX0= */";
    /***/
  },

  /***/
  "./src/app/chats/add-private/add-private.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/chats/add-private/add-private.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddPrivatePage */

  /***/
  function srcAppChatsAddPrivateAddPrivatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPrivatePage", function () {
      return AddPrivatePage;
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
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/people-view.service */
    "./src/app/services/people-view.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../chat-rooms/chat-rooms.component */
    "./src/app/chats/chat-rooms/chat-rooms.component.ts");
    /* harmony import */


    var _create_group_chat_create_group_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../create-group-chat/create-group-chat.component */
    "./src/app/chats/create-group-chat/create-group-chat.component.ts");

    var AddPrivatePage = /*#__PURE__*/function () {
      function AddPrivatePage(commonService, // private navParams: NavParams,
      navCtrl, peopleService, fb, searchService, chatService, router) {
        var _this = this;

        _classCallCheck(this, AddPrivatePage);

        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.peopleService = peopleService;
        this.fb = fb;
        this.searchService = searchService;
        this.chatService = chatService;
        this.router = router;
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].profilePic;
        this.userData = JSON.parse(localStorage.getItem('userData')); // this.formData = this.navParams.data.formData;
        // this.source = this.navParams.data.source;
        // console.log(this.formData);

        this.peopleService.getFollowers('').subscribe(function (peoples) {
          // console.log(peoples);
          var data;
          data = peoples.result.sort(function (a, b) {
            return a.following_user.user_name > b.following_user.user_name ? 1 : -1;
          });
          data.sort(function (a, b) {
            return a.following_user.user_name.localeCompare(b.following_user.user_name);
          });
          var i = 1;
          var ad = {
            'advertisment': 'Advertisamentgdkfgklfd'
          };
          var grouped = data.reduce(function (groups, contact) {
            var letter = contact.following_user.user_name.charAt(0).toUpperCase();
            groups[letter] = groups[letter] || [];
            groups[letter].push(contact); // if ((i % 5 == 0) && (i !== 1)) {
            //   groups[letter].push(ad);
            // }
            // i++;

            return groups;
          }, {});
          _this.peopleList = Object.keys(grouped).map(function (key) {
            return {
              key: key,
              contacts: grouped[key]
            };
          }); // console.log(this.peopleList);
        });
        this.createForm();
      }

      _createClass(AddPrivatePage, [{
        key: "createForm",
        value: function createForm() {
          this.peopleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            peopleSelect: this.fb.array([])
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {}
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(e) {
          var checkArray = this.peopleForm.get('peopleSelect');

          if (!e.target.checked) {
            // console.log('sss');
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](e.target.value));
          } else {
            var i = 0;
            checkArray.controls.forEach(function (item) {
              if (item.value == e.target.value) {
                checkArray.removeAt(i);
                return;
              }

              i++;
            });
          } // console.log("this.peopleForm:"+JSON.stringify(this.peopleForm));

        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeChip",
        value: function removeChip(index) {
          console.log(this.peopleForm.value.peopleSelect);
          this.peopleForm.value.peopleSelect.removeAt(0);
        }
      }, {
        key: "chatRequest",
        value: function chatRequest() {
          var _this2 = this;

          this.formData = this.peopleForm.value;

          if (this.formData.peopleSelect.length > 1) {
            this.formData.groupName = '';
            this.formData.type = 2;
            var title = 'Group Chat';
            var msg = 'Enter your Group Name Bellow';
            var fileData = {
              title: title,
              msg: msg,
              returnUrl: 'list',
              formData: this.formData
            }; // this.commonService.presentPromptRedirect(title,msg,this.formData);      

            this.commonService.presentModal(_create_group_chat_create_group_chat_component__WEBPACK_IMPORTED_MODULE_11__["CreateGroupChatComponent"], 'bottomModal', fileData);
          } else {
            this.commonService.presentLoader();
            this.formData.type = 1;
            this.chatService.sendChatRequest(this.formData).subscribe(function (data) {
              if (data.status == 'success') {
                var fileData = {
                  returnUrl: 'list',
                  chatType: 1,
                  room: data.room,
                  receiverId: parseInt(data.reciverID),
                  requestId: parseInt(data.request_id)
                };

                _this2.commonService.presentModal(_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_10__["ChatRoomsComponent"], 'fullModal', fileData); // console.log("returndata :" + JSON.stringify(returndata));
                // this.router.navigate(['/chat-room/'+data.reciverID+'/'+data.room+'/1']);

              } else {
                console.log('Somthing wrong');
              }

              _this2.commonService.dismissLoader();
            });
          }
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(peopleName) {
          var _this3 = this;

          var searchTerm = peopleName.srcElement.value;

          if (!searchTerm) {
            setTimeout(function () {
              this.newSearchPersonList = false;
            }, 2000);
            this.newSearchPersonList = false; // console.log('ddddd');   

            return false;
          }

          this.searchService.searchQuery({
            "searchQuery": searchTerm
          }).subscribe(function (search) {
            _this3.newSearchPersonList = search.searchList;
            console.log(_this3.newSearchPersonList);
          });
        }
      }]);

      return AddPrivatePage;
    }();

    AddPrivatePage.ctorParameters = function () {
      return [{
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    AddPrivatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-private',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-private.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/add-private/add-private.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-private.page.scss */
      "./src/app/chats/add-private/add-private.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_people_view_service__WEBPACK_IMPORTED_MODULE_4__["PeopleViewService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], AddPrivatePage);
    /***/
  }
}]);
//# sourceMappingURL=chats-add-private-add-private-module-es5.js.map