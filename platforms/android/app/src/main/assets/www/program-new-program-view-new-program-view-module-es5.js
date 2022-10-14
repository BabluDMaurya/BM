function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-new-program-view-new-program-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramNewProgramViewNewProgramViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <!-- <ion-label>{{programDetail?.title}}</ion-label> -->\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <div class=\"right-div\">\r\n      <ion-item *ngIf=\"programDetail?.is_requested == 1\"  detail=\"false\" class=\"icon-right-side ion-text-end min-width-none pl-8\" slot=\"end\" (click)=\"shareItem()\">\r\n        <ion-icon ios=\"ios-share\" md=\"md-share\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n    \r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        \r\n        </ion-slides>\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>            \r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img class=\"cover-img\" [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list class=\"ion-no-padding\">\r\n        <ion-item-group>\r\n          <ion-item-divider class=\"ionic-divider\" lines=\"none\" sticky>\r\n            <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n              <ion-segment class=\"ion-no-padding\" [(ngModel)]=\"scheduleProgram\">\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"program\" checked>\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-clipboard\" md=\"md-clipboard\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"videos\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"chat\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                </ion-segment-button>\r\n                <!-- <ion-segment-button class=\"ionic-segment-btn\" value=\"programtype\">\r\n                  <img class=\"ionic-img\" src=\"../../../assets/images/target.svg\" />\r\n                </ion-segment-button> -->\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n          </ion-item-divider>\r\n          <ion-item-sliding>\r\n            <div [ngSwitch]=\"scheduleProgram\">\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'program'\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                    <div class=\"programDesc\">\r\n                      <!-- <p>{{programDetail?.description }} &nbsp;</p>         -->\r\n                      <p>{{programDetail?.description }}</p>\r\n                    </div>\r\n                    <!-- <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n                      <ion-item class=\"d-flex\">\r\n                          <span *ngFor=\"let user  of userList\">\r\n                            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n                            <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n                          </span>\r\n                          <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n                      </ion-item>\r\n                    </ion-list> -->\r\n                  </ion-col>\r\n                  <!-- <ion-col class=\"infoBox\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n                    <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request recived yet</h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to verify. </h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n                  </ion-col> -->\r\n                  <ion-col size=\"12\" style=\"position: static;\" class=\"ion-no-padding  green-text\">\r\n                    <!-- <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text> -->\r\n                    <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 1\"> \r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended && dd > 0\">\r\n                      <ion-text><p class=\"count_time\">{{dd | async}}</p> Day</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text><p class=\"count_time\">{{hh | async }}  </p> Hours</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text><p class=\"count_time\">{{mm| async}}</p> Minutes</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\"> \r\n                    <ion-text><p class=\"count_time\">{{ss | async}}</p> Seconds</ion-text>\r\n                  </ion-col>                  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n                    <ion-text>This Program has been Ended </ion-text>\r\n                  </ion-col>\r\n\r\n                </ion-row> \r\n                <ion-row>\r\n                <ion-col style=\"text-align: center;\" size=\"12\" *ngIf=\"!programDetail?.ended\"> \r\n                  <ion-text >Time Left : {{140 - watchTime}} minutes</ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 0\"> \r\n                  <ion-col size=\"6\" class=\"ion-padding timer-block\" >\r\n                      <ion-text>Non-Live Program</ion-text>\r\n                  </ion-col>\r\n                </ion-row> \r\n                <div style=\"display: flex; flex-direction: column; align-items: center;\">\r\n                  <ion-button *ngIf=\"programDetail?.is_requested ==1 ||  programDetail?.is_requested ==2 && !request_join && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRequest()\" >Request To Join</ion-button> \r\n                  <ion-button *ngIf=\"request_accs_pending && !programDetail?.ended\" size=\"small\" class=\"green btnVerify\" (click)=\"acceptRequest()\" >Accept Request</ion-button> \r\n                </div>\r\n                <div class=\"users-list ion-text-center\" >\r\n                  <!-- <ion-button (click)=\"joinRoom()\">Join Room</ion-button> -->\r\n                  <ion-button *ngIf=\"request_accs && !programDetail?.live && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\">Program will start sooon</ion-button>\r\n                  <!-- <ion-button *ngIf=\"request_accs && !programDetail?.live\" size=\"small\"  class=\"green btnVerify\" (click)=\"payment()\">Payment</ion-button> -->\r\n                  <ion-button *ngIf=\"programDetail?.ready  \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button>\r\n                  <!-- <ion-button *ngIf=\"programDetail?.ready && prePayment \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button> -->\r\n                  \r\n                  <!-- <div *ngIf=\"request_accs && !programDetail?.live\" size=\"medium\"  >Program will start sooon   \r\n                  </div>\r\n                  <div *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"medium\"  (click)=\"joinRoom()\" >Requested to join Program \r\n                  </div> -->\r\n                </div>\r\n\r\n                <ion-item class=\"list-items ion-text-center\">\r\n                  <div class=\"icon-text\" style=\"width: 100%;\">\r\n                  <ion-label>Program: {{programDetail?.video_id.split(\",\").length}} Videos, ${{programFee}}</ion-label>\r\n                  </div>          \r\n                </ion-item>\r\n              </ion-list> \r\n              \r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'videos'\">\r\n                <div class=\"program-card\" *ngFor=\"let val of allProgramData; let i=index;\">\r\n                  <div class=\"programs-date\" *ngIf=\"val.is_live_status == 1 || val.nutrition_id || val.video_id\">\r\n                    <p class=\"fs-16 mb-10\">{{val.program_date |date:'medium'}}</p>\r\n                  </div>\r\n                  <div class=\"programs-flex\">\r\n                    <div style=\"background-image: url('https://www.thebalancesmb.com/thmb/WexUZNoJ-q395XfYSrPxPkuC3Io=/960x540/smart/filters:no_upscale()/escavation-921233_960_720-57a2715c3df78c327648cd18.jpg');\" class=\"program-session program-flex-child\" *ngIf=\"val.is_live_status == 1\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Session</p>\r\n                    </div>\r\n                    <div style=\"background-image: url('https://www.thebalancesmb.com/thmb/WexUZNoJ-q395XfYSrPxPkuC3Io=/960x540/smart/filters:no_upscale()/escavation-921233_960_720-57a2715c3df78c327648cd18.jpg');\" class=\"program-video program-flex-child\" *ngIf=\"val.video_id != '' \"  (click)=\"showVideoDetails(val.id,val.video_id)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Video</p>\r\n                    </div>\r\n                    <div style=\"background-image: url('https://www.thebalancesmb.com/thmb/WexUZNoJ-q395XfYSrPxPkuC3Io=/960x540/smart/filters:no_upscale()/escavation-921233_960_720-57a2715c3df78c327648cd18.jpg');\" class=\"program-nutrition program-flex-child\" *ngIf=\"val.nutrition_id != '' \" (click)=\"nutritionModal(val)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n                      <p class=\"fs-14\">Nutrition</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'chat'\">\r\n                <div class=\"program-chat\">\r\n                  <!-- <ion-avatar>\r\n                    <img src=\"../../assets/images/bgimage.png\" alt=\"\">\r\n                  </ion-avatar>\r\n                  <div class=\"program-chat-info\">\r\n                    <div class=\"chat-title\">\r\n                      <h6>Rock Sam</h6>\r\n                      <p>11:09 AM</p>\r\n                    </div>\r\n                    <div class=\"chat-info\">\r\n                      <span>Good morning rock</span>\r\n                    </div>\r\n                  </div> -->\r\n                 <p>No Chat available</p>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'programtype'\">\r\n                <div class=\"program-card\">\r\n                  <ion-slides [pager]=\"true\">\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                  </ion-slides>\r\n                </div>\r\n              </ion-list>\r\n            </div>\r\n          </ion-item-sliding>\r\n        </ion-item-group>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Observable.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Observable.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var canReportError_1 = __webpack_require__(
    /*! ./util/canReportError */
    "./node_modules/rxjs/internal/util/canReportError.js");

    var toSubscriber_1 = __webpack_require__(
    /*! ./util/toSubscriber */
    "./node_modules/rxjs/internal/util/toSubscriber.js");

    var observable_1 = __webpack_require__(
    /*! ./symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    var pipe_1 = __webpack_require__(
    /*! ./util/pipe */
    "./node_modules/rxjs/internal/util/pipe.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var Observable = function () {
      function Observable(subscribe) {
        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };

      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }

        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;

            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }

        return sink;
      };

      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }

          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };

      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);

              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };

      Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };

      Observable.prototype[observable_1.observable] = function () {
        return this;
      };

      Observable.prototype.pipe = function () {
        var operations = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }

        if (operations.length === 0) {
          return this;
        }

        return pipe_1.pipeFromArray(operations)(this);
      };

      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;

          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      return Observable;
    }();

    exports.Observable = Observable;

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Scheduler.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/Scheduler.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Scheduler = function () {
      function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler.now;
        }

        this.SchedulerAction = SchedulerAction;
        this.now = now;
      }

      Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }

        return new this.SchedulerAction(this, work).schedule(state, delay);
      };

      Scheduler.now = function () {
        return Date.now();
      };

      return Scheduler;
    }();

    exports.Scheduler = Scheduler; //# sourceMappingURL=Scheduler.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parentOrParents = _a._parentOrParents,
            _ctorUnsubscribe = _a._ctorUnsubscribe,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (_parentOrParents instanceof Subscription) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = undefined;
          }

          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        if (!teardown) {
          return Subscription.EMPTY;
        }

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        var _parentOrParents = subscription._parentOrParents;

        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription) {
          if (_parentOrParents === this) {
            return subscription;
          }

          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }

        var subscriptions = this._subscriptions;

        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/timer.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/timer.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableTimerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    var async_1 = __webpack_require__(
    /*! ../scheduler/async */
    "./node_modules/rxjs/internal/scheduler/async.js");

    var isNumeric_1 = __webpack_require__(
    /*! ../util/isNumeric */
    "./node_modules/rxjs/internal/util/isNumeric.js");

    var isScheduler_1 = __webpack_require__(
    /*! ../util/isScheduler */
    "./node_modules/rxjs/internal/util/isScheduler.js");

    function timer(dueTime, periodOrScheduler, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }

      var period = -1;

      if (isNumeric_1.isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
      } else if (isScheduler_1.isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
      }

      if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
      }

      return new Observable_1.Observable(function (subscriber) {
        var due = isNumeric_1.isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
        return scheduler.schedule(dispatch, due, {
          index: 0,
          period: period,
          subscriber: subscriber
        });
      });
    }

    exports.timer = timer;

    function dispatch(state) {
      var index = state.index,
          period = state.period,
          subscriber = state.subscriber;
      subscriber.next(index);

      if (subscriber.closed) {
        return;
      } else if (period === -1) {
        return subscriber.complete();
      }

      state.index = index + 1;
      this.schedule(state, period);
    } //# sourceMappingURL=timer.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/scheduler/Action.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerActionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscription_1 = __webpack_require__(
    /*! ../Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var Action = function (_super) {
      __extends(Action, _super);

      function Action(scheduler, work) {
        return _super.call(this) || this;
      }

      Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        return this;
      };

      return Action;
    }(Subscription_1.Subscription);

    exports.Action = Action; //# sourceMappingURL=Action.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerAsyncActionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics3(d, b);
      };

      return function (d, b) {
        _extendStatics3(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Action_1 = __webpack_require__(
    /*! ./Action */
    "./node_modules/rxjs/internal/scheduler/Action.js");

    var AsyncAction = function (_super) {
      __extends(AsyncAction, _super);

      function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;

        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }

      AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        if (this.closed) {
          return this;
        }

        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;

        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }

        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };

      AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        return setInterval(scheduler.flush.bind(scheduler, this), delay);
      };

      AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        if (delay !== null && this.delay === delay && this.pending === false) {
          return id;
        }

        clearInterval(id);
        return undefined;
      };

      AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
          return new Error('executing a cancelled action');
        }

        this.pending = false;

        var error = this._execute(state, delay);

        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };

      AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;

        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = !!e && e || new Error(e);
        }

        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };

      AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;

        if (index !== -1) {
          actions.splice(index, 1);
        }

        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }

        this.delay = null;
      };

      return AsyncAction;
    }(Action_1.Action);

    exports.AsyncAction = AsyncAction; //# sourceMappingURL=AsyncAction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerAsyncSchedulerJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics4 = function extendStatics(d, b) {
        _extendStatics4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics4(d, b);
      };

      return function (d, b) {
        _extendStatics4(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Scheduler_1 = __webpack_require__(
    /*! ../Scheduler */
    "./node_modules/rxjs/internal/Scheduler.js");

    var AsyncScheduler = function (_super) {
      __extends(AsyncScheduler, _super);

      function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler_1.Scheduler.now;
        }

        var _this = _super.call(this, SchedulerAction, function () {
          if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
            return AsyncScheduler.delegate.now();
          } else {
            return now();
          }
        }) || this;

        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
      }

      AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }

        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
          return AsyncScheduler.delegate.schedule(work, delay, state);
        } else {
          return _super.prototype.schedule.call(this, work, delay, state);
        }
      };

      AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;

        if (this.active) {
          actions.push(action);
          return;
        }

        var error;
        this.active = true;

        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());

        this.active = false;

        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }

          throw error;
        }
      };

      return AsyncScheduler;
    }(Scheduler_1.Scheduler);

    exports.AsyncScheduler = AsyncScheduler; //# sourceMappingURL=AsyncScheduler.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/async.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerAsyncJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var AsyncAction_1 = __webpack_require__(
    /*! ./AsyncAction */
    "./node_modules/rxjs/internal/scheduler/AsyncAction.js");

    var AsyncScheduler_1 = __webpack_require__(
    /*! ./AsyncScheduler */
    "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");

    exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
    exports.async = exports.asyncScheduler; //# sourceMappingURL=async.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }(); //# sourceMappingURL=observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
          return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/canReportError.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilCanReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;

        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/identity.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/identity.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIdentityJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function identity(x) {
      return x;
    }

    exports.identity = identity; //# sourceMappingURL=identity.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }(); //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isNumeric.js":
  /*!******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsNumericJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    function isNumeric(val) {
      return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
    }

    exports.isNumeric = isNumeric; //# sourceMappingURL=isNumeric.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isScheduler.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsSchedulerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isScheduler(value) {
      return value && typeof value.schedule === 'function';
    }

    exports.isScheduler = isScheduler; //# sourceMappingURL=isScheduler.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/pipe.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/pipe.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilPipeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var identity_1 = __webpack_require__(
    /*! ./identity */
    "./node_modules/rxjs/internal/util/identity.js");

    function pipe() {
      var fns = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }

      return pipeFromArray(fns);
    }

    exports.pipe = pipe;

    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/toSubscriber.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilToSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var Observer_1 = __webpack_require__(
    /*! ../Observer */
    "./node_modules/rxjs/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }

      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }

    exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: NewProgramViewPageRoutingModule */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramViewPageRoutingModule", function () {
      return NewProgramViewPageRoutingModule;
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


    var _new_program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-program-view.page */
    "./src/app/program/new-program-view/new-program-view.page.ts");

    var routes = [{
      path: '',
      component: _new_program_view_page__WEBPACK_IMPORTED_MODULE_3__["NewProgramViewPage"]
    }];

    var NewProgramViewPageRoutingModule = function NewProgramViewPageRoutingModule() {
      _classCallCheck(this, NewProgramViewPageRoutingModule);
    };

    NewProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewProgramViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NewProgramViewPageModule */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramViewPageModule", function () {
      return NewProgramViewPageModule;
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


    var _new_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-program-view-routing.module */
    "./src/app/program/new-program-view/new-program-view-routing.module.ts");
    /* harmony import */


    var _new_program_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-program-view.page */
    "./src/app/program/new-program-view/new-program-view.page.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var NewProgramViewPageModule = function NewProgramViewPageModule() {
      _classCallCheck(this, NewProgramViewPageModule);
    };

    NewProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewProgramViewPageRoutingModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]],
      declarations: [_new_program_view_page__WEBPACK_IMPORTED_MODULE_6__["NewProgramViewPage"]]
    })], NewProgramViewPageModule);
    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".right-div {\n  display: flex;\n  align-items: center;\n}\n.right-div .min-width-none {\n  min-width: 0px !important;\n}\n.right-div .pl-8 {\n  padding-left: 8px !important;\n}\n.main_content ion-row ion-col .item-content ion-thumbnail .cover-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important;\n}\n.ionic-divider .three-tabs ion-segment ion-segment-button {\n  width: auto;\n}\n.ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important;\n}\n.ionic-divider .three-tabs ion-segment ion-segment-button {\n  width: auto;\n}\n.ionic-divider ion-segment-button {\n  min-height: 38px;\n  color: #000;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.ionic-divider ion-segment-button .ionic-icon {\n  font-size: 2rem !important;\n}\n.ionic-divider ion-segment-button .ionic-img {\n  width: 2rem;\n  height: 2rem;\n}\n.ionic-divider ion-segment-button .live-icon {\n  padding: 5px 10px;\n  background: #555;\n  color: #fff;\n  border-radius: 20px;\n}\n.ionic-divider ion-segment-button .live-icon span {\n  font-size: 10px;\n  color: #fff;\n}\n.programDesc p {\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px;\n}\n.program-date {\n  color: #27a69a;\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px;\n}\n.fs-16 {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.fs-14 {\n  font-size: 16px;\n  line-height: 1.5;\n}\n.program-card {\n  padding: 10px 15px;\n}\n.program-card ion-slides {\n  height: 200px;\n}\n.program-card ion-slides ion-slide img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.program-card .programs-flex {\n  display: flex;\n}\n.program-card .programs-flex .program-flex-child {\n  width: 30%;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: #27a69a;\n  color: #fff;\n  margin-left: 5%;\n}\n.program-card .programs-flex .program-flex-child .ionic-icon {\n  font-size: 1.5rem !important;\n}\n.program-card .programs-flex .program-flex-child:first-child {\n  margin-left: 0;\n}\n.program-chat {\n  display: flex;\n  padding: 10px 15px;\n  align-items: center;\n}\n.program-chat ion-avatar {\n  margin-right: 15px;\n  min-width: 50px;\n  min-height: 50px;\n}\n.program-chat .program-chat-info {\n  flex: 1;\n  width: 80%;\n}\n.program-chat .program-chat-info .chat-title {\n  display: flex;\n  justify-content: space-between;\n}\n.program-chat .program-chat-info .chat-title h6 {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 400;\n  color: #121212;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex: 1;\n}\n.program-chat .program-chat-info .chat-title p {\n  color: #cecece;\n  margin-left: 15px;\n}\n.program-chat .program-chat-info .chat-info span {\n  font-size: 14px;\n  color: #555;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.counter-box {\n  align-items: center;\n}\n.counter-box .timer-block {\n  align-items: center;\n  background: #27a69a;\n}\n.counter-box .timer-block ion-text {\n  color: #fff;\n}\n.counter-box .timer-block ion-text p {\n  color: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS12aWV3L0Q6XFxuaWtoaWxcXEludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXG5ldy1wcm9ncmFtLXZpZXdcXG5ldy1wcm9ncmFtLXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9ncmFtL25ldy1wcm9ncmFtLXZpZXcvbmV3LXByb2dyYW0tdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRENJO0VBQ0kseUJBQUE7QUNDUjtBRENNO0VBQ0UsNEJBQUE7QUNDUjtBRFFvQjtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDTHhCO0FEWUE7RUFDSSxxQ0FBQTtVQUFBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtBQ1RKO0FEVUk7RUFDSSxXQUFBO0FDUlI7QURXQTtFQUNJLHFDQUFBO1VBQUEsb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDUko7QURTSTtFQUNJLFdBQUE7QUNQUjtBRFNJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ1BSO0FEUVE7RUFDSSwwQkFBQTtBQ05aO0FEUVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ05aO0FEUVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTlo7QURPWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDTGhCO0FEV0k7RUFBRSxnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixlQUFBO0FDTDVDO0FET0E7RUFDSSxjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLGVBQUE7QUNEMUQ7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7QUNFSjtBRERJO0VBQ0ksYUFBQTtBQ0dSO0FERFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDR2hCO0FER0k7RUFDSSxhQUFBO0FDRFI7QURHUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RaO0FERVk7RUFDSSw0QkFBQTtBQ0FoQjtBREdRO0VBQ0ksY0FBQTtBQ0RaO0FES0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FER0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER0k7RUFDSSxPQUFBO0VBQ0EsVUFBQTtBQ0RSO0FERVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNBWjtBRENZO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUNDaEI7QURDWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NoQjtBREdZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURPQTtFQUNJLG1CQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRElRO0VBQ0ksV0FBQTtBQ0ZaO0FER1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0RoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vbmV3LXByb2dyYW0tdmlldy9uZXctcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmlnaHQtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubWluLXdpZHRoLW5vbmUge1xyXG4gICAgICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnBsLTh7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbi5tYWluX2NvbnRlbnR7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIC5pdGVtLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBpb24tdGh1bWJuYWlse1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb3Zlci1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmlvbmljLWRpdmlkZXJ7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLnRocmVlLXRhYnMgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG4uaW9uaWMtZGl2aWRlcntcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAudGhyZWUtdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgLmlvbmljLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW9uaWMtaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGl2ZS1pY29ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucHJvZ3JhbURlc2N7XHJcbiAgICBwe2xpbmUtaGVpZ2h0OiAxLjU7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4O31cclxufVxyXG4ucHJvZ3JhbS1kYXRle1xyXG4gICAgY29sb3I6ICMyN2E2OWE7IGxpbmUtaGVpZ2h0OiAxLjU7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5mcy0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuLmZzLTE0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4ucHJvZ3JhbS1jYXJke1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgaW9uLXNsaWRlc3tcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGlvbi1zbGlkZXtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2dyYW1zLWRhdGV7XHJcbiAgICB9XHJcbiAgICAucHJvZ3JhbXMtZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAucHJvZ3JhbS1mbGV4LWNoaWxke1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgLmlvbmljLWljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9ncmFtLWZsZXgtY2hpbGQ6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucHJvZ3JhbS1jaGF0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpb24tYXZhdGFye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5wcm9ncmFtLWNoYXQtaW5mb3tcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgLmNoYXQtdGl0bGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NlY2VjZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGF0LWluZm97XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgXHJcbn1cclxuLmNvdW50ZXItYm94e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC50aW1lci1ibG9ja3tcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAgICAgaW9uLXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnJpZ2h0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmlnaHQtZGl2IC5taW4td2lkdGgtbm9uZSB7XG4gIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucmlnaHQtZGl2IC5wbC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLm1haW5fY29udGVudCBpb24tcm93IGlvbi1jb2wgLml0ZW0tY29udGVudCBpb24tdGh1bWJuYWlsIC5jb3Zlci1pbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pb25pYy1kaXZpZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmlvbmljLWRpdmlkZXIgLnRocmVlLXRhYnMgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5pb25pYy1kaXZpZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmlvbmljLWRpdmlkZXIgLnRocmVlLXRhYnMgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG59XG4uaW9uaWMtZGl2aWRlciBpb24tc2VnbWVudC1idXR0b24ge1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLmlvbmljLWRpdmlkZXIgaW9uLXNlZ21lbnQtYnV0dG9uIC5pb25pYy1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG59XG4uaW9uaWMtZGl2aWRlciBpb24tc2VnbWVudC1idXR0b24gLmlvbmljLWltZyB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4uaW9uaWMtZGl2aWRlciBpb24tc2VnbWVudC1idXR0b24gLmxpdmUtaWNvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5pb25pYy1kaXZpZGVyIGlvbi1zZWdtZW50LWJ1dHRvbiAubGl2ZS1pY29uIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvZ3JhbURlc2MgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZ3JhbS1kYXRlIHtcbiAgY29sb3I6ICMyN2E2OWE7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZnMtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5mcy0xNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnByb2dyYW0tY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5wcm9ncmFtLWNhcmQgaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ucHJvZ3JhbS1jYXJkIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9ncmFtLWNhcmQgLnByb2dyYW1zLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2dyYW0tY2FyZCAucHJvZ3JhbXMtZmxleCAucHJvZ3JhbS1mbGV4LWNoaWxkIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyN2E2OWE7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4ucHJvZ3JhbS1jYXJkIC5wcm9ncmFtcy1mbGV4IC5wcm9ncmFtLWZsZXgtY2hpbGQgLmlvbmljLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuLnByb2dyYW0tY2FyZCAucHJvZ3JhbXMtZmxleCAucHJvZ3JhbS1mbGV4LWNoaWxkOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5wcm9ncmFtLWNoYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZ3JhbS1jaGF0IGlvbi1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbi5wcm9ncmFtLWNoYXQgLnByb2dyYW0tY2hhdC1pbmZvIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDgwJTtcbn1cbi5wcm9ncmFtLWNoYXQgLnByb2dyYW0tY2hhdC1pbmZvIC5jaGF0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2dyYW0tY2hhdCAucHJvZ3JhbS1jaGF0LWluZm8gLmNoYXQtdGl0bGUgaDYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMTIxMjEyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleDogMTtcbn1cbi5wcm9ncmFtLWNoYXQgLnByb2dyYW0tY2hhdC1pbmZvIC5jaGF0LXRpdGxlIHAge1xuICBjb2xvcjogI2NlY2VjZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ucHJvZ3JhbS1jaGF0IC5wcm9ncmFtLWNoYXQtaW5mbyAuY2hhdC1pbmZvIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvdW50ZXItYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3VudGVyLWJveCAudGltZXItYmxvY2sge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xufVxuLmNvdW50ZXItYm94IC50aW1lci1ibG9jayBpb24tdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvdW50ZXItYm94IC50aW1lci1ibG9jayBpb24tdGV4dCBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/program/new-program-view/new-program-view.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/program/new-program-view/new-program-view.page.ts ***!
    \*******************************************************************/

  /*! exports provided: NewProgramViewPage */

  /***/
  function srcAppProgramNewProgramViewNewProgramViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewProgramViewPage", function () {
      return NewProgramViewPage;
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


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../schedule-modal/schedule-modal.component */
    "./src/app/program/schedule-modal/schedule-modal.component.ts");
    /* harmony import */


    var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../equipments/equipments.component */
    "./src/app/program/equipments/equipments.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_program_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/program.service */
    "./src/app/services/program.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/internal/observable/timer */
    "./node_modules/rxjs/internal/observable/timer.js");
    /* harmony import */


    var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../chats/chat-rooms/chat-rooms.component */
    "./src/app/chats/chat-rooms/chat-rooms.component.ts");
    /* harmony import */


    var src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/modalContent/payment/payment.component */
    "./src/app/modalContent/payment/payment.component.ts");
    /* harmony import */


    var process__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! process */
    "./node_modules/process/browser.js");
    /* harmony import */


    var process__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/user-profile/nutrition-modal/nutrition-modal.component */
    "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
    /* harmony import */


    var src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/add-program/view-video-detail/view-video-detail.component */
    "./src/app/add-program/view-video-detail/view-video-detail.component.ts");
    /* harmony import */


    var src_app_modalContent_equipment_payment_equipment_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/modalContent/equipment-payment/equipment-payment.component */
    "./src/app/modalContent/equipment-payment/equipment-payment.component.ts");
    /* To try the app with Enablex hosted service you need to set the kTry = true */


    var kTry = true;
    /*Your webservice host URL, Keet the defined host when kTry = true */

    var kBasedURL = "https://demo.enablex.io/";
    /*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/

    /*Use enablec portal to create your app and get these following credentials*/

    var kAppId = "601a75829370a5441339e5c2";
    var kAppkey = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";

    var NewProgramViewPage = /*#__PURE__*/function () {
      function NewProgramViewPage(commonService, navCtrl, actRoute, programService, localNotifications, httpClient, router, chatService, socialSharing) {
        _classCallCheck(this, NewProgramViewPage);

        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.programService = programService;
        this.localNotifications = localNotifications;
        this.httpClient = httpClient;
        this.router = router;
        this.chatService = chatService;
        this.socialSharing = socialSharing;
        this.profileUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].profilePic;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].imgUrl;
        this.vidUrl = _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].progVidUrl;
        this.displayProgData = false;
        this.tick = 1000;
        this.prePayment = true; //

        this.non_live_component_fee = 0;
        this.userName = "Bablu";
        this.roomID = "";
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.progImage = false;
        this.progVideo = false;
        this.intoProg = [];
        this.scheduleProgram = 'program';
        this.userData = JSON.parse(localStorage.getItem('userData'));
      }

      _createClass(NewProgramViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.actRoute.paramMap.subscribe(function (params) {
            _this2.programId = params.get('programId');
          });
          this.programService.checkPaymentStatus({
            'programId': this.programId,
            'userId': this.userData.id
          }).subscribe(function (data) {
            console.log(data);
            _this2.paymentStatus = data.payment_status;
          });
          this.userData = JSON.parse(localStorage.getItem('userData'));
          this.totalIntoFee = 0;
          this.min = 0;
          this.totalMin = 0;
          this.Mins = 0;
          this.programService.getIntoActivePendingPaymentStatus('').subscribe(function (data) {
            _this2.intoActivePaid = data.data;
            console.log(_this2.intoActivePaid);

            _this2.intoActivePaid.forEach(function (el) {
              _this2.watchTime = el.time / 60;

              if (el.type_id == 3) {
                _this2.minute = el.time / 60 * 0.008;
                _this2.mms = el.time / 60;
              } else if (el.type_id == 4) {
                _this2.minute = el.time / 60 * 0.0075;
                _this2.mms = el.time / 60;
              }

              _this2.totalIntoFee = parseFloat(_this2.minute) + parseFloat(_this2.min);
              _this2.totalMin = parseFloat(_this2.mms) + parseFloat(_this2.Mins);
              _this2.min = _this2.totalIntoFee;
              _this2.Mins = _this2.totalMin;

              _this2.intoProg.push(el.prog_id);

              var img = '';

              if (el.image_path != '') {
                var image = el.image_path.split(',');
                img = image[0];
              }

              if (_this2.Mins > 140) {
                console.log(_this2.intoProg);
                var fileData = {
                  pgid: _this2.intoProg,
                  pgname: el.title,
                  pgamount: _this2.totalIntoFee,
                  pgimg: img,
                  routeLink: 'progView',
                  type: '1'
                };

                _this2.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);

                Object(process__WEBPACK_IMPORTED_MODULE_16__["exit"])();
                return false;
              } // console.log(this.Mins);
              // console.log(this.totalIntoFee);

            }); // console.log(this.totalIntoFee);
            // console.log(this.Mins);


            console.log(_this2.Mins);
            console.log('getIntoActivePendingPaymentStatus');
          });
          this.programService.getPaymentStatus().subscribe(function (data) {
            _this2.paymentPending = data;

            if (_this2.paymentPending.data.length > 0) {
              console.log(_this2.paymentPending);
              var i = 0;

              _this2.paymentPending.data.forEach(function (el) {
                if (el.time == null || el.time == '') {
                  var min = 1;
                } else {
                  var min = el.time / 60;
                }

                var watch_time_fee = el.program_fee / el.program_duration * min;
                console.log(Math.ceil(watch_time_fee) - 0.01);

                _this2.programService.getPendingPaymentStatus({
                  'program_id': el.id
                }).subscribe(function (data) {
                  if (i == 0) {
                    if (data.data == 0) {
                      _this2.prePayment = false;
                      var img = '';

                      if (el.image_path != '') {
                        var image = el.image_path.split(',');
                        img = image[0];
                      }

                      var fileData = {
                        pgid: el.id,
                        pgname: el.title,
                        pgamount: Math.ceil(watch_time_fee) - 0.01,
                        pgimg: img,
                        routeLink: 'progView',
                        type: '2'
                      };

                      _this2.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData); // this.pendingPayment();


                      i++;
                    }
                  }
                });
              });
            }
          });
          this.programService.getEnxData({
            'program_id': this.programId
          }).subscribe(function (data) {
            console.log("EnxData User: " + JSON.stringify(data));
            _this2.userName = _this2.userData.user_name;
            _this2.roomID = data.room_id;
          });
        }
      }, {
        key: "joinRoom",
        value: function joinRoom() {
          var _this3 = this;

          if (this.roomID.length == 0) {
            alert("Kindly Enter Room ID");
            return;
          } // alert(this.roomID);


          this.programService.getEnxData({
            'program_id': this.programId
          }).subscribe(function (data) {
            console.log("EnxData User: " + JSON.stringify(data));
            _this3.userName = _this3.userData.user_name;
            _this3.roomID = data.room_id;
          });
          var loginString = {
            "name": this.userName,
            "role": "participant",
            "user_ref": "2236",
            "roomId": this.roomID
          };
          var hedare = kTry ? {
            "x-app-id": kAppId,
            "x-app-key": kAppkey,
            "Accept": "application/json",
            "Content-Type": "application/json"
          } : {
            "Accept": "application/json",
            "Content-Type": "application/json"
          };
          var url = kBasedURL + "createToken";
          console.log("Url Faired" + url);
          this.httpClient.post(url, loginString, {
            headers: hedare
          }).subscribe(function (data) {
            console.log("Hello service done" + data["token"]);
            var navigationExtras = {
              queryParams: {
                token: data["token"],
                name: _this3.userName,
                role: "participant",
                user_ref: "user_ref",
                roomId: _this3.roomID,
                description: _this3.programDescription,
                programId: _this3.programId,
                programTitle: _this3.pgtitle,
                participants: _this3.participants,
                duration: _this3.programDurations,
                program_type: _this3.programType,
                program_fee: _this3.programFee,
                program_img: _this3.programImage
              }
            };

            _this3.navCtrl.navigateForward(['confrence'], navigationExtras);
          }, function (error) {
            console.log("Hello service failed");
            console.log(error);
          });
          console.log("ClickEvent Join event");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this4 = this;

          this.programService.getProgramById({
            "programId": this.programId
          }).subscribe(function (data) {
            _this4.programDetail = data.programData;
            console.log('starttttttt');
            console.log(_this4.programDetail);
            console.log(_this4.programDetail.is_requested);
            console.log(_this4.request_join);
            console.log(_this4.prePayment);
            console.log('enddddddddd');

            if (data.programData.parent_program == null) {
              console.log('nullll');
              _this4.parentProgId = data.programData.id;
            } else {
              _this4.parentProgId = data.programData.parent_program;
            }

            _this4.programService.getProgramById({
              "parentId": _this4.parentProgId
            }).subscribe(function (data) {
              console.log('allProgData -', data);
              _this4.allProgramData = data.cloneList;
              _this4.non_live_component_fee = data.cloneList[0].non_live_component_fee;
              console.log(data, 'programData');
              console.log(_this4.parentProgId);
            });

            _this4.broadcastId = 'programId_' + data.programData.id;
            _this4.programType = data.programData.type_id;
            _this4.pgtitle = data.programData.title;

            if (_this4.programDetail.payment_type == 'Paid') {
              _this4.programFee = _this4.programDetail.program_fee;
            } else if (_this4.programDetail.payment_type == 'Free') {
              _this4.programFee = _this4.programDetail.payment_type;
            }

            if (_this4.programType == 'private oneway' || _this4.programType == 'private twoway') {
              _this4.participants = 2;
            } else if (_this4.programType == 'group oneway' || _this4.programType == 'group twoway') {
              _this4.participants = 50;
            } else {
              _this4.participants = 100;
            }

            _this4.programDurations = data.programData.program_duration;
            _this4.programDescription = data.programData.description;

            if (data.programData.image_path != '') {
              // this.progImage = data.programData.image_path;
              _this4.progImage = true;
            } else {
              _this4.progImage = false;
            }

            if (data.programData.video_path != null) {
              // this.progImage = data.programData.image_path;
              _this4.progVideo = true;
            } else {
              _this4.progVideo = false;
            }

            if (data.programData.image_path) {
              _this4.programDetail.img_array = data.programData.image_path.split(',');
              _this4.programImage = _this4.programDetail.img_array[0];
            } //  ------------ C O U N T   D O W N   T I M E R ---------


            var a = new Date(_this4.programDetail.program_date + 'Z');
            _this4.programDateTime = a;
            var b = new Date();
            var c;

            if (a > b) {
              c = Math.abs(a - b) / 1000;
              _this4.programDetail.cd = c;
              _this4.dd = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this4.programDetail.cd > 0) {
                  --_this4.programDetail.cd;
                }

                return ~~(_this4.programDetail.cd / (60 * 60 * 24));
              }));
              _this4.ss = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this4.programDetail.cd > 0) {
                  --_this4.programDetail.cd;
                }

                return ~~(_this4.programDetail.cd % 3600 % 60);
              }));
              _this4.mm = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this4.programDetail.cd > 0) {
                  --_this4.programDetail.cd;
                }

                return ~~(_this4.programDetail.cd % 3600 / 60);
              }));
              _this4.hh = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(_this4.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
                if (_this4.programDetail.cd <= 5) {
                  _this4.programDetail.ready = true;
                  _this4.programDetail.live = true;
                  _this4.displayProgData = true;

                  _this4.checkStreaming();

                  console.log(_this4.programDetail);
                  console.log(_this4.programDetail.live, 'liveee');
                }

                if (_this4.programDetail.cd > 0) {
                  --_this4.programDetail.cd;
                } else {
                  _this4.programDetail.cd = 0;
                  return 0;
                }

                return ~~(_this4.programDetail.cd / (60 * 60) % 24);
              }));
            } else {
              c = 0;
              _this4.displayProgData = true;

              if (new Date(_this4.programDetail.program_end_time + 'Z') > new Date()) {
                _this4.programDetail.ready = true;
                _this4.programDetail.live = true;
                console.log(_this4.programDetail.live + 'liveeeeeee');

                _this4.checkStreaming();
              } else {
                console.log(_this4.programDetail.live + 'edddddd');
                _this4.programDetail.ended = true;
              }
            } //-------------------------------------------------


            if (_this4.programDetail.request_accepted != null) {
              if (_this4.programDetail.request_accepted.split(',').includes(_this4.userData.id.toString())) {
                _this4.request_accs = true;
                _this4.request_join = true;
              }
            } else if (_this4.programDetail.request_sent != null) {
              if (_this4.programDetail.request_sent.split(',').includes(_this4.userData.id.toString())) {
                _this4.request_accs_pending = true;
              }
            }

            if (_this4.programDetail.request_recive != null) {
              if (_this4.programDetail.request_recive.split(',').includes(_this4.userData.id.toString())) {
                _this4.request_join = true;
                console.log(_this4.request_join + 'this.request_joineeeeee');
              }
            }
          });
        }
      }, {
        key: "checkStreaming",
        value: function checkStreaming() {// this.sub = interval(5000)
          //   .subscribe((val) => {
          //     this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
          //       console.log(this.programDetail);
          //       if (data.programData.is_live) {
          //         this.displayProgData = true;
          //         this.programDetail.live = true;
          //       }
          //     });
          //   });
        }
      }, {
        key: "showSchedule",
        value: function showSchedule(event) {
          this.programDetail.displayData = this.displayProgData;
          this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleModalComponent"], 'fullModal', {
            'programDetail': this.programDetail
          });
        }
      }, {
        key: "equipments",
        value: function equipments() {
          this.commonService.presentModal(_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentsComponent"], 'halfModal', {
            'programDetail': this.programDetail
          });
        }
      }, {
        key: "showChatUsers",
        value: function showChatUsers() {
          var _this5 = this;

          if (this.programType != "public") {
            this.commonService.presentLoader();
            this.chatService.checkChatProgram({
              'programId': this.programId,
              'type': 3
            }).subscribe(function (data) {
              if (data.id > 0) {
                _this5.commonService.dismissLoader();

                var chatRoom = data.room_id;
                var chatReceiverId = data.group_id;
                var chatType = 2;
                var fileData = {
                  chatType: chatType,
                  room: chatRoom,
                  receiverId: parseInt(chatReceiverId)
                };

                _this5.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__["ChatRoomsComponent"], 'fullModal', fileData);
              } else {
                _this5.commonService.dismissLoader(); // chat_type = 1:consultant,2:user,3:program


                _this5.router.navigate(["/first-message/" + _this5.programId + "/3"]);
              }
            }, function (err) {
              _this5.commonService.presentToast("Couldnt load data, Something went wrong.");

              _this5.commonService.dismissLoader();
            });
          } else {
            this.commonService.presentToast("Chat Not Allow on Public Program");
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back(); // this.router.navigate(['/schedule-program']);
        }
      }, {
        key: "acceptRequest",
        value: function acceptRequest() {
          var _this6 = this;

          this.programService.acceptProgramRequest({
            'programId': this.programDetail.id
          }).subscribe(function (data) {
            var prog_date = new Date(_this6.programDetail.program_date + 'Z');

            _this6.localNotifications.schedule({
              id: _this6.programId,
              text: _this6.programDetail.title + " program will start at \n " + prog_date,
              trigger: {
                at: new Date(prog_date.getTime() - 60 * 60 * 500)
              },
              data: {
                secret: 'secret'
              },
              lockscreen: true,
              vibrate: true,
              silent: false,
              foreground: true
            });

            _this6.router.navigateByUrl('/tabs/consultant-profile');
          });
        }
      }, {
        key: "joinRequest",
        value: function joinRequest() {
          var _this7 = this;

          var type_id = '0';
          console.log(this.programDetail);

          if (this.programType == 'Private') {
            type_id = '1';
          }

          this.programService.joinRequest({
            'programId': this.programDetail.id,
            'type_id': type_id,
            'invitation_type': this.programDetail.is_requested
          }).subscribe(function (data) {
            _this7.request_join = true;
          });
        }
      }, {
        key: "simpleNotif",
        value: function simpleNotif() {
          this.localNotifications.schedule({
            id: 1,
            text: 'Single Local Notification',
            data: {
              secret: 'secret'
            }
          });
        }
      }, {
        key: "payment",
        value: function payment() {
          var fileData = {
            pgid: this.programId,
            pgname: this.programDetail.title,
            pgamount: this.programFee,
            pgimg: this.programImage
          };
          this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
        }
      }, {
        key: "shareItem",
        value: function shareItem() {
          this.socialSharing.share("Program Details", "", "", "program-view/" + this.programId).then(function () {})["catch"](function () {});
        }
      }, {
        key: "nutritionModal",
        value: function nutritionModal(data) {
          if (this.paymentStatus > 0) {
            this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__["NutritionModalComponent"], 'fullModal', {
              'data': data
            });
          } else {
            if (this.non_live_component_fee > '0') {
              var fileData = {
                pgamount: this.non_live_component_fee,
                programId: this.programId
              };
              this.commonService.presentModal(src_app_modalContent_equipment_payment_equipment_payment_component__WEBPACK_IMPORTED_MODULE_20__["EquipmentPaymentComponent"], 'bottomModal', fileData); // this.commonService.presentToast("Program is Paid.")
            } else if (!this.displayProgData) {
              this.commonService.presentToast("Program is not live yet.");
            } else {
              this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__["NutritionModalComponent"], 'fullModal', {
                'data': data
              });
            }
          }
        }
      }, {
        key: "showVideoDetails",
        value: function showVideoDetails(item, videoIDs) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var fileData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.non_live_component_fee);

                    if (this.paymentStatus > 0) {
                      console.log('a');
                      this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__["ViewVideoDetailComponent"], 'fullModal', {
                        'details': item,
                        'videoIds': videoIDs
                      });
                    } else {
                      if (this.non_live_component_fee > '0') {
                        console.log('b');
                        fileData = {
                          pgamount: this.non_live_component_fee,
                          programId: this.programId
                        };
                        this.commonService.presentModal(src_app_modalContent_equipment_payment_equipment_payment_component__WEBPACK_IMPORTED_MODULE_20__["EquipmentPaymentComponent"], 'bottomModal', fileData); // this.commonService.presentToast("Program is Paid.")
                      } else if (!this.displayProgData) {
                        console.log('c');
                        this.commonService.presentToast("Program is not live yet.");
                      } else {
                        this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__["ViewVideoDetailComponent"], 'fullModal', {
                          'details': item,
                          'videoIds': videoIDs
                        });
                      }
                    }

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return NewProgramViewPage;
    }();

    NewProgramViewPage.ctorParameters = function () {
      return [{
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"]
      }];
    };

    NewProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-program-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-program-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-program-view.page.scss */
      "./src/app/program/new-program-view/new-program-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"]])], NewProgramViewPage);
    /***/
  }
}]);
//# sourceMappingURL=program-new-program-view-new-program-view-module-es5.js.map