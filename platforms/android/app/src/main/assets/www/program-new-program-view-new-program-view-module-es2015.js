(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-new-program-view-new-program-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <!-- <ion-label>{{programDetail?.title}}</ion-label> -->\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <div class=\"right-div\">\r\n      <ion-item *ngIf=\"programDetail?.is_requested == 1\"  detail=\"false\" class=\"icon-right-side ion-text-end min-width-none pl-8\" slot=\"end\" (click)=\"shareItem()\">\r\n        <ion-icon ios=\"ios-share\" md=\"md-share\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n    \r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\" class=\"program-slides\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        \r\n        </ion-slides>\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider program-slide\" #mySlider>            \r\n        <ion-slide class=\"program-slides\">\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img class=\"cover-img\" [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list class=\"ion-no-padding\">\r\n        <ion-item-group>\r\n          <ion-item-divider class=\"ionic-divider\" lines=\"none\" sticky>\r\n            <ion-toolbar lines=\"none\" no-border-top class=\"profile_tabs three-tabs\">\r\n              <ion-segment class=\"ion-no-padding\" [(ngModel)]=\"scheduleProgram\">\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"program\" checked>\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-clipboard\" md=\"md-clipboard\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"videos\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n                </ion-segment-button>\r\n                <ion-segment-button class=\"ionic-segment-btn\" value=\"chat\">\r\n                  <ion-icon class=\"ionic-icon\" ios=\"ios-chatbubbles\" md=\"md-chatbubbles\"></ion-icon>\r\n                </ion-segment-button>\r\n                <!-- <ion-segment-button class=\"ionic-segment-btn\" value=\"programtype\">\r\n                  <img class=\"ionic-img\" src=\"../../../assets/images/target.svg\" />\r\n                </ion-segment-button> -->\r\n              </ion-segment>\r\n            </ion-toolbar>\r\n          </ion-item-divider>\r\n          <ion-item-sliding>\r\n            <div [ngSwitch]=\"scheduleProgram\">\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'program'\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                    <div class=\"programDesc\">\r\n                      <!-- <p>{{programDetail?.description }} &nbsp;</p>         -->\r\n                      <p>{{programDetail?.description }}</p>\r\n                    </div>\r\n                    <!-- <ion-list lines=\"none\" class=\"users-list d-block\" *ngIf=\"userList?.length>0\">\r\n                      <ion-item class=\"d-flex\">\r\n                          <span *ngFor=\"let user  of userList\">\r\n                            <img src=\"../../assets/images/user.jpg\" *ngIf=\"!user?.bios?.profile_pic\" />\r\n                            <img src=\"{{profileUrl}}{{ user?.bios?.profile_pic }}\" *ngIf=\"user?.bios?.profile_pic\" />\r\n                          </span>\r\n                          <ion-label class=\"view-all\" (click)=\"showParticipants()\">+i</ion-label>\r\n                      </ion-item>\r\n                    </ion-list> -->\r\n                  </ion-col>\r\n                  <!-- <ion-col class=\"infoBox\" *ngIf=\"programDetail?.type_id == 'video' && !programDetail?.ended && adData?.video_approve_status!= 1 && !programDetail?.live\">\r\n                    <h6 *ngIf=\"programDetail?.is_requested ==1 && !programDetail?.request_recive\"> No joining request recived yet</h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== null\"> Your request for ad sponser is yet to verify. </h6>\r\n                    <h6 *ngIf=\"adData?.id && adData?.video_approve_status== 0\"> Your Video is Not Approved </h6>\r\n                  </ion-col> -->\r\n                  <ion-col size=\"12\" style=\"position: static;\" class=\"ion-no-padding  green-text\">\r\n                    <!-- <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text> -->\r\n                    <ion-text><p class=\"program-date\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 1\"> \r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended && dd > 0\">\r\n                      <ion-text><p class=\"count_time\">{{dd | async}}</p> Day</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text><p class=\"count_time\">{{hh | async }}  </p> Hours</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\">\r\n                    <ion-text><p class=\"count_time\">{{mm| async}}</p> Minutes</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-padding timer-block\" *ngIf=\"!programDetail?.ended\"> \r\n                    <ion-text><p class=\"count_time\">{{ss | async}}</p> Seconds</ion-text>\r\n                  </ion-col>                  \r\n                  <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n                    <ion-text>This Program has been Ended </ion-text>\r\n                  </ion-col>\r\n\r\n                </ion-row> \r\n                <ion-row>\r\n                <ion-col style=\"text-align: center;\" size=\"12\" *ngIf=\"!programDetail?.ended\"> \r\n                  <ion-text >Time Left : {{140 - watchTime}} minutes</ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n                <ion-row class=\"counter-box \" *ngIf=\"programDetail?.is_live_status == 0\"> \r\n                  <ion-col size=\"6\" class=\"ion-padding timer-block\" >\r\n                      <ion-text>Non-Live Program</ion-text>\r\n                  </ion-col>\r\n                </ion-row> \r\n                <div style=\"display: flex; flex-direction: column; align-items: center;\">\r\n                  <ion-button *ngIf=\"programDetail?.is_requested ==1 ||  programDetail?.is_requested ==2 && !request_join && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRequest()\" >Request To Join</ion-button> \r\n                  <ion-button *ngIf=\"request_accs_pending && !programDetail?.ended\" size=\"small\" class=\"green btnVerify\" (click)=\"acceptRequest()\" >Accept Request</ion-button> \r\n                </div>\r\n                <div class=\"users-list ion-text-center\" >\r\n                  <!-- <ion-button (click)=\"joinRoom()\">Join Room</ion-button> -->\r\n                  <ion-button *ngIf=\"request_accs && !programDetail?.live && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\">Program will start sooon</ion-button>\r\n                  <!-- <ion-button *ngIf=\"request_accs && !programDetail?.live\" size=\"small\"  class=\"green btnVerify\" (click)=\"payment()\">Payment</ion-button> -->\r\n                  <ion-button *ngIf=\"programDetail?.ready  \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button>\r\n                  <!-- <ion-button *ngIf=\"programDetail?.ready && prePayment \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button> -->\r\n                  \r\n                  <!-- <div *ngIf=\"request_accs && !programDetail?.live\" size=\"medium\"  >Program will start sooon   \r\n                  </div>\r\n                  <div *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"medium\"  (click)=\"joinRoom()\" >Requested to join Program \r\n                  </div> -->\r\n                </div>\r\n\r\n                <ion-item class=\"list-items ion-text-center\">\r\n                  <div class=\"icon-text\" style=\"width: 100%;\">\r\n                  <ion-label>Program: {{programDetail?.video_id.split(\",\").length}} Videos, ${{programFee}}</ion-label>\r\n                  </div>          \r\n                </ion-item>\r\n              </ion-list> \r\n              \r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'videos'\">\r\n                <div class=\"program-card\" *ngFor=\"let val of allProgramData; let i=index;\">\r\n                  <div class=\"programs-date\" *ngIf=\"val.is_live_status == 1 || val.nutrition_id || val.video_id\">\r\n                    <p class=\"fs-16 mb-10\">{{val.program_date |date:'medium'}}</p>\r\n                  </div>\r\n                  <div class=\"programs-flex\">\r\n                    <div style=\"background-image: url('https://www.thebalancesmb.com/thmb/WexUZNoJ-q395XfYSrPxPkuC3Io=/960x540/smart/filters:no_upscale()/escavation-921233_960_720-57a2715c3df78c327648cd18.jpg');\" class=\"program-session program-flex-child\" *ngIf=\"val.is_live_status == 1\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Session</p>\r\n                    </div>\r\n                    <div style=\"background-image: url('https://www.thebalancesmb.com/thmb/WexUZNoJ-q395XfYSrPxPkuC3Io=/960x540/smart/filters:no_upscale()/escavation-921233_960_720-57a2715c3df78c327648cd18.jpg');\" class=\"program-video program-flex-child\" *ngIf=\"val.video_id != '' \"  (click)=\"showVideoDetails(val.id,val.video_id)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-videocam\" md=\"md-videocam\"></ion-icon>\r\n                      <p class=\"fs-14\">Video</p>\r\n                    </div>\r\n                    <div style=\"background-image: url('https://www.thebalancesmb.com/thmb/WexUZNoJ-q395XfYSrPxPkuC3Io=/960x540/smart/filters:no_upscale()/escavation-921233_960_720-57a2715c3df78c327648cd18.jpg');\" class=\"program-nutrition program-flex-child\" *ngIf=\"val.nutrition_id != '' \" (click)=\"nutritionModal(val)\">\r\n                      <ion-icon class=\"ionic-icon\" ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n                      <p class=\"fs-14\">Nutrition</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'chat'\">\r\n                <div class=\"program-chat\">\r\n                  <!-- <ion-avatar>\r\n                    <img src=\"../../assets/images/bgimage.png\" alt=\"\">\r\n                  </ion-avatar>\r\n                  <div class=\"program-chat-info\">\r\n                    <div class=\"chat-title\">\r\n                      <h6>Rock Sam</h6>\r\n                      <p>11:09 AM</p>\r\n                    </div>\r\n                    <div class=\"chat-info\">\r\n                      <span>Good morning rock</span>\r\n                    </div>\r\n                  </div> -->\r\n                 <p>No Chat available</p>\r\n                </div>\r\n              </ion-list>\r\n              <ion-list class=\"ion-no-padding border-bot\" *ngSwitchCase=\"'programtype'\">\r\n                <div class=\"program-card\">\r\n                  <ion-slides [pager]=\"true\">\r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                    <ion-slide class=\"nutrition-slide\">\r\n                      <img class=\"nutrition-image\" src=\"../../assets/images/nutrition2.png\" />\r\n                    </ion-slide> \r\n                  </ion-slides>\r\n                </div>\r\n              </ion-list>\r\n            </div>\r\n          </ion-item-sliding>\r\n        </ion-item-group>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
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
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
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
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
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
                }
                catch (err) {
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
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
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
                    }
                    else {
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
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
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
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
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
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
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
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
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
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
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
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
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
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
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
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
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
            }
            catch (e) {
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
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
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
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
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
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/timer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/timer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    var period = -1;
    if (isNumeric_1.isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler_1.isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isNumeric_1.isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
exports.timer = timer;
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
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
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
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
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
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
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
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
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isScheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
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
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
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
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/program/new-program-view/new-program-view-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/program/new-program-view/new-program-view-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NewProgramViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProgramViewPageRoutingModule", function() { return NewProgramViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-program-view.page */ "./src/app/program/new-program-view/new-program-view.page.ts");




const routes = [
    {
        path: '',
        component: _new_program_view_page__WEBPACK_IMPORTED_MODULE_3__["NewProgramViewPage"]
    }
];
let NewProgramViewPageRoutingModule = class NewProgramViewPageRoutingModule {
};
NewProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewProgramViewPageRoutingModule);



/***/ }),

/***/ "./src/app/program/new-program-view/new-program-view.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/program/new-program-view/new-program-view.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewProgramViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProgramViewPageModule", function() { return NewProgramViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-program-view-routing.module */ "./src/app/program/new-program-view/new-program-view-routing.module.ts");
/* harmony import */ var _new_program_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-program-view.page */ "./src/app/program/new-program-view/new-program-view.page.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");








let NewProgramViewPageModule = class NewProgramViewPageModule {
};
NewProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewProgramViewPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"]
        ],
        declarations: [_new_program_view_page__WEBPACK_IMPORTED_MODULE_6__["NewProgramViewPage"]]
    })
], NewProgramViewPageModule);



/***/ }),

/***/ "./src/app/program/new-program-view/new-program-view.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/program/new-program-view/new-program-view.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".right-div {\n  display: flex;\n  align-items: center; }\n  .right-div .min-width-none {\n    min-width: 0px !important; }\n  .right-div .pl-8 {\n    padding-left: 8px !important; }\n  .main_content ion-row ion-col .item-content ion-thumbnail .cover-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center; }\n  .ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n  .ionic-divider .three-tabs ion-segment ion-segment-button {\n    width: auto; }\n  .ionic-divider {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n  .ionic-divider .three-tabs ion-segment ion-segment-button {\n    width: auto; }\n  .ionic-divider ion-segment-button {\n    min-height: 38px;\n    color: #000;\n    text-transform: capitalize;\n    letter-spacing: 0; }\n  .ionic-divider ion-segment-button .ionic-icon {\n      font-size: 2rem !important; }\n  .ionic-divider ion-segment-button .ionic-img {\n      width: 2rem;\n      height: 2rem; }\n  .ionic-divider ion-segment-button .live-icon {\n      padding: 5px 10px;\n      background: #555;\n      color: #fff;\n      border-radius: 20px; }\n  .ionic-divider ion-segment-button .live-icon span {\n        font-size: 10px;\n        color: #fff; }\n  .programDesc p {\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px; }\n  .program-date {\n  color: #27a69a;\n  line-height: 1.5;\n  text-align: center;\n  font-size: 14px; }\n  .fs-16 {\n  font-size: 16px;\n  line-height: 1.5; }\n  .fs-14 {\n  font-size: 16px;\n  line-height: 1.5; }\n  .program-card {\n  padding: 10px 15px; }\n  .program-card ion-slides {\n    height: 200px; }\n  .program-card ion-slides ion-slide img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center;\n         object-position: center; }\n  .program-card .programs-flex {\n    display: flex; }\n  .program-card .programs-flex .program-flex-child {\n      width: 30%;\n      height: 100px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border-radius: 10px;\n      background: #27a69a;\n      color: #fff;\n      margin-left: 5%; }\n  .program-card .programs-flex .program-flex-child .ionic-icon {\n        font-size: 1.5rem !important; }\n  .program-card .programs-flex .program-flex-child:first-child {\n      margin-left: 0; }\n  .program-chat {\n  display: flex;\n  padding: 10px 15px;\n  align-items: center; }\n  .program-chat ion-avatar {\n    margin-right: 15px;\n    min-width: 50px;\n    min-height: 50px; }\n  .program-chat .program-chat-info {\n    flex: 1;\n    width: 80%; }\n  .program-chat .program-chat-info .chat-title {\n      display: flex;\n      justify-content: space-between; }\n  .program-chat .program-chat-info .chat-title h6 {\n        font-size: 16px;\n        margin-top: 0;\n        margin-bottom: 0;\n        font-weight: 400;\n        color: #121212;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        flex: 1; }\n  .program-chat .program-chat-info .chat-title p {\n        color: #cecece;\n        margin-left: 15px; }\n  .program-chat .program-chat-info .chat-info span {\n      font-size: 14px;\n      color: #555;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden; }\n  .counter-box {\n  align-items: center; }\n  .counter-box .timer-block {\n    align-items: center;\n    background: #27a69a; }\n  .counter-box .timer-block ion-text {\n      color: #fff; }\n  .counter-box .timer-block ion-text p {\n        color: #fff;\n        font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS12aWV3L0M6XFx4YW1wcFxcaHRkb2NzXFxpbnRvYWN0aXZlL3NyY1xcYXBwXFxwcm9ncmFtXFxuZXctcHJvZ3JhbS12aWV3XFxuZXctcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZ2QjtJQUlRLHlCQUF5QixFQUFBO0VBSmpDO0lBT1EsNEJBQTRCLEVBQUE7RUFJcEM7RUFNd0Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwwQkFBdUI7S0FBdkIsdUJBQXVCLEVBQUE7RUFPL0M7RUFDSSxxQ0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG1DQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTtFQUZ0QztJQUlRLFdBQVcsRUFBQTtFQUduQjtFQUNJLHFDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsbUNBQWtDO1VBQWxDLGtDQUFrQyxFQUFBO0VBRnRDO0lBSVEsV0FBVyxFQUFBO0VBSm5CO0lBT1EsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsaUJBQWlCLEVBQUE7RUFWekI7TUFZWSwwQkFBMEIsRUFBQTtFQVp0QztNQWVZLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFoQnhCO01BbUJZLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLG1CQUFtQixFQUFBO0VBdEIvQjtRQXdCZ0IsZUFBZTtRQUNmLFdBQVcsRUFBQTtFQUszQjtFQUNNLGdCQUFnQjtFQUFFLGtCQUFrQjtFQUFFLGVBQWUsRUFBQTtFQUUzRDtFQUNJLGNBQWM7RUFBRSxnQkFBZ0I7RUFBRSxrQkFBa0I7RUFBRSxlQUFlLEVBQUE7RUFFekU7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUdRLGFBQWEsRUFBQTtFQUhyQjtNQU1nQixXQUFXO01BQ1gsWUFBWTtNQUNaLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIsMEJBQXVCO1NBQXZCLHVCQUF1QixFQUFBO0VBVHZDO0lBZ0JRLGFBQWEsRUFBQTtFQWhCckI7TUFtQlksVUFBVTtNQUNWLGFBQWE7TUFDYixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsZUFBZSxFQUFBO0VBNUIzQjtRQThCZ0IsNEJBQTRCLEVBQUE7RUE5QjVDO01Ba0NZLGNBQWMsRUFBQTtFQUkxQjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFIdkI7SUFLUSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBUHhCO0lBVVEsT0FBTztJQUNQLFVBQVUsRUFBQTtFQVhsQjtNQWFZLGFBQWE7TUFDYiw4QkFBOEIsRUFBQTtFQWQxQztRQWdCZ0IsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixPQUFPLEVBQUE7RUF4QnZCO1FBMkJnQixjQUFjO1FBQ2QsaUJBQWlCLEVBQUE7RUE1QmpDO01BaUNnQixlQUFlO01BQ2YsV0FBVztNQUNYLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7RUFNaEM7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUdRLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQUozQjtNQU1ZLFdBQVcsRUFBQTtFQU52QjtRQVFnQixXQUFXO1FBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9uZXctcHJvZ3JhbS12aWV3L25ldy1wcm9ncmFtLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yaWdodC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5taW4td2lkdGgtbm9uZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAucGwtOHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuLm1haW5fY29udGVudHtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgLml0ZW0tY29udGVudHtcclxuICAgICAgICAgICAgICAgIGlvbi10aHVtYm5haWx7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvdmVyLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaW9uaWMtZGl2aWRlcntcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAudGhyZWUtdGFicyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi5pb25pYy1kaXZpZGVye1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcclxuICAgIC50aHJlZS10YWJzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAuaW9uaWMtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pb25pYy1pbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXZlLWljb257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wcm9ncmFtRGVzY3tcclxuICAgIHB7bGluZS1oZWlnaHQ6IDEuNTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDE0cHg7fVxyXG59XHJcbi5wcm9ncmFtLWRhdGV7XHJcbiAgICBjb2xvcjogIzI3YTY5YTsgbGluZS1oZWlnaHQ6IDEuNTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZzLTE2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uZnMtMTR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5wcm9ncmFtLWNhcmR7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBpb24tc2xpZGVze1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgaW9uLXNsaWRle1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZ3JhbXMtZGF0ZXtcclxuICAgIH1cclxuICAgIC5wcm9ncmFtcy1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5wcm9ncmFtLWZsZXgtY2hpbGR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjdhNjlhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAuaW9uaWMtaWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyYW0tZmxleC1jaGlsZDpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wcm9ncmFtLWNoYXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2dyYW0tY2hhdC1pbmZve1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAuY2hhdC10aXRsZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTIxMjEyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2VjZWNlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYXQtaW5mb3tcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG4uY291bnRlci1ib3h7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnRpbWVyLWJsb2Nre1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI3YTY5YTtcclxuICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/program/new-program-view/new-program-view.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/program/new-program-view/new-program-view.page.ts ***!
  \*******************************************************************/
/*! exports provided: NewProgramViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProgramViewPage", function() { return NewProgramViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schedule-modal/schedule-modal.component */ "./src/app/program/schedule-modal/schedule-modal.component.ts");
/* harmony import */ var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../equipments/equipments.component */ "./src/app/program/equipments/equipments.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_program_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/program.service */ "./src/app/services/program.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../chats/chat-rooms/chat-rooms.component */ "./src/app/chats/chat-rooms/chat-rooms.component.ts");
/* harmony import */ var src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modalContent/payment/payment.component */ "./src/app/modalContent/payment/payment.component.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/user-profile/nutrition-modal/nutrition-modal.component */ "./src/app/user-profile/nutrition-modal/nutrition-modal.component.ts");
/* harmony import */ var src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/add-program/view-video-detail/view-video-detail.component */ "./src/app/add-program/view-video-detail/view-video-detail.component.ts");
/* harmony import */ var src_app_modalContent_equipment_payment_equipment_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/modalContent/equipment-payment/equipment-payment.component */ "./src/app/modalContent/equipment-payment/equipment-payment.component.ts");






















/* To try the app with Enablex hosted service you need to set the kTry = true */
var kTry = true;
/*Your webservice host URL, Keet the defined host when kTry = true */
var kBasedURL = "https://demo.enablex.io/";
/*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/
/*Use enablec portal to create your app and get these following credentials*/
var kAppId = "601a75829370a5441339e5c2";
var kAppkey = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";
let NewProgramViewPage = class NewProgramViewPage {
    constructor(commonService, navCtrl, actRoute, programService, localNotifications, httpClient, router, chatService, socialSharing) {
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
        this.prePayment = true;
        //
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
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.programId = params.get('programId');
        });
        this.programService.checkPaymentStatus({ 'programId': this.programId, 'userId': this.userData.id }).subscribe((data) => {
            console.log(data);
            this.paymentStatus = data.payment_status;
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.totalIntoFee = 0;
        this.min = 0;
        this.totalMin = 0;
        this.Mins = 0;
        this.programService.getIntoActivePendingPaymentStatus('').subscribe(data => {
            this.intoActivePaid = data.data;
            console.log(this.intoActivePaid);
            this.intoActivePaid.forEach(el => {
                this.watchTime = (el.time / 60);
                if (el.type_id == 3) {
                    this.minute = ((el.time / 60) * 0.008);
                    this.mms = (el.time / 60);
                }
                else if (el.type_id == 4) {
                    this.minute = ((el.time / 60) * 0.0075);
                    this.mms = (el.time / 60);
                }
                this.totalIntoFee = parseFloat(this.minute) + parseFloat(this.min);
                this.totalMin = parseFloat(this.mms) + parseFloat(this.Mins);
                this.min = this.totalIntoFee;
                this.Mins = this.totalMin;
                this.intoProg.push(el.prog_id);
                var img = '';
                if (el.image_path != '') {
                    var image = el.image_path.split(',');
                    img = image[0];
                }
                if (this.Mins > 140) {
                    console.log(this.intoProg);
                    var fileData = {
                        pgid: this.intoProg,
                        pgname: el.title,
                        pgamount: this.totalIntoFee,
                        pgimg: img,
                        routeLink: 'progView',
                        type: '1'
                    };
                    this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
                    Object(process__WEBPACK_IMPORTED_MODULE_16__["exit"])();
                    return false;
                }
                // console.log(this.Mins);
                // console.log(this.totalIntoFee);
            });
            // console.log(this.totalIntoFee);
            // console.log(this.Mins);
            console.log(this.Mins);
            console.log('getIntoActivePendingPaymentStatus');
        });
        this.programService.getPaymentStatus().subscribe(data => {
            this.paymentPending = data;
            if (this.paymentPending.data.length > 0) {
                console.log(this.paymentPending);
                var i = 0;
                this.paymentPending.data.forEach(el => {
                    if (el.time == null || el.time == '') {
                        var min = 1;
                    }
                    else {
                        var min = (el.time / 60);
                    }
                    var watch_time_fee = el.program_fee / el.program_duration * min;
                    console.log(Math.ceil(watch_time_fee) - 0.01);
                    this.programService.getPendingPaymentStatus({ 'program_id': el.id }).subscribe(data => {
                        if (i == 0) {
                            if (data.data == 0) {
                                this.prePayment = false;
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
                                this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
                                // this.pendingPayment();
                                i++;
                            }
                        }
                    });
                });
            }
        });
        this.programService.getEnxData({ 'program_id': this.programId }).subscribe(data => {
            console.log("EnxData User: " + JSON.stringify(data));
            this.userName = this.userData.user_name;
            this.roomID = data.room_id;
        });
    }
    joinRoom() {
        if (this.roomID.length == 0) {
            alert("Kindly Enter Room ID");
            return;
        }
        // alert(this.roomID);
        this.programService.getEnxData({ 'program_id': this.programId }).subscribe(data => {
            console.log("EnxData User: " + JSON.stringify(data));
            this.userName = this.userData.user_name;
            this.roomID = data.room_id;
        });
        var loginString = { "name": this.userName, "role": "participant", "user_ref": "2236", "roomId": this.roomID };
        var hedare = (kTry) ? { "x-app-id": kAppId, "x-app-key": kAppkey, "Accept": "application/json", "Content-Type": "application/json" } : { "Accept": "application/json", "Content-Type": "application/json" };
        let url = kBasedURL + "createToken";
        console.log("Url Faired" + url);
        this.httpClient.post(url, loginString, { headers: hedare }).subscribe(data => {
            console.log("Hello service done" + data["token"]);
            let navigationExtras = {
                queryParams: {
                    token: data["token"],
                    name: this.userName,
                    role: "participant",
                    user_ref: "user_ref",
                    roomId: this.roomID,
                    description: this.programDescription,
                    programId: this.programId,
                    programTitle: this.pgtitle,
                    participants: this.participants,
                    duration: this.programDurations,
                    program_type: this.programType,
                    program_fee: this.programFee,
                    program_img: this.programImage
                }
            };
            this.navCtrl.navigateForward(['confrence'], navigationExtras);
        }, error => {
            console.log("Hello service failed");
            console.log(error);
        });
        console.log("ClickEvent Join event");
    }
    ionViewWillEnter() {
        this.programService.getProgramById({ "programId": this.programId }).subscribe(data => {
            this.programDetail = data.programData;
            console.log('starttttttt');
            console.log(this.programDetail);
            console.log(this.programDetail.is_requested);
            console.log(this.request_join);
            console.log(this.prePayment);
            console.log('enddddddddd');
            if (data.programData.parent_program == null) {
                console.log('nullll');
                this.parentProgId = data.programData.id;
            }
            else {
                this.parentProgId = data.programData.parent_program;
            }
            this.programService.getProgramById({ "parentId": this.parentProgId }).subscribe(data => {
                console.log('allProgData -', data);
                this.allProgramData = data.cloneList;
                this.non_live_component_fee = data.cloneList[0].non_live_component_fee;
                console.log(data, 'programData');
                console.log(this.parentProgId);
            });
            this.broadcastId = 'programId_' + data.programData.id;
            this.programType = data.programData.type_id;
            this.pgtitle = data.programData.title;
            if (this.programDetail.payment_type == 'Paid') {
                this.programFee = this.programDetail.program_fee;
            }
            else if (this.programDetail.payment_type == 'Free') {
                this.programFee = this.programDetail.payment_type;
            }
            if (this.programType == 'private oneway' || this.programType == 'private twoway') {
                this.participants = 2;
            }
            else if (this.programType == 'group oneway' || this.programType == 'group twoway') {
                this.participants = 50;
            }
            else {
                this.participants = 100;
            }
            this.programDurations = data.programData.program_duration;
            this.programDescription = data.programData.description;
            if (data.programData.image_path != '') {
                // this.progImage = data.programData.image_path;
                this.progImage = true;
            }
            else {
                this.progImage = false;
            }
            if (data.programData.video_path != null) {
                // this.progImage = data.programData.image_path;
                this.progVideo = true;
            }
            else {
                this.progVideo = false;
            }
            if (data.programData.image_path) {
                this.programDetail.img_array = data.programData.image_path.split(',');
                this.programImage = this.programDetail.img_array[0];
            }
            //  ------------ C O U N T   D O W N   T I M E R ---------
            let a = new Date(this.programDetail.program_date + 'Z');
            this.programDateTime = a;
            let b = new Date();
            let c;
            if (a > b) {
                c = Math.abs(a - b) / 1000;
                this.programDetail.cd = c;
                this.dd = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd / (60 * 60 * 24));
                }));
                this.ss = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd % 3600 % 60);
                }));
                this.mm = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    return ~~(this.programDetail.cd % 3600 / 60);
                }));
                this.hh = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(this.programDetail.cd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => {
                    if (this.programDetail.cd <= 5) {
                        this.programDetail.ready = true;
                        this.programDetail.live = true;
                        this.displayProgData = true;
                        this.checkStreaming();
                        console.log(this.programDetail);
                        console.log(this.programDetail.live, 'liveee');
                    }
                    if (this.programDetail.cd > 0) {
                        --this.programDetail.cd;
                    }
                    else {
                        this.programDetail.cd = 0;
                        return 0;
                    }
                    return ~~(this.programDetail.cd / (60 * 60) % 24);
                }));
            }
            else {
                c = 0;
                this.displayProgData = true;
                if (new Date(this.programDetail.program_end_time + 'Z') > new Date()) {
                    this.programDetail.ready = true;
                    this.programDetail.live = true;
                    console.log(this.programDetail.live + 'liveeeeeee');
                    this.checkStreaming();
                }
                else {
                    console.log(this.programDetail.live + 'edddddd');
                    this.programDetail.ended = true;
                }
            }
            //-------------------------------------------------
            if (this.programDetail.request_accepted != null) {
                if ((this.programDetail.request_accepted.split(',')).includes(this.userData.id.toString())) {
                    this.request_accs = true;
                    this.request_join = true;
                }
            }
            else if (this.programDetail.request_sent != null) {
                if ((this.programDetail.request_sent.split(',')).includes(this.userData.id.toString())) {
                    this.request_accs_pending = true;
                }
            }
            if (this.programDetail.request_recive != null) {
                if ((this.programDetail.request_recive.split(',')).includes(this.userData.id.toString())) {
                    this.request_join = true;
                    console.log(this.request_join + 'this.request_joineeeeee');
                }
            }
        });
    }
    checkStreaming() {
        // this.sub = interval(5000)
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
    showSchedule(event) {
        this.programDetail.displayData = this.displayProgData;
        this.commonService.presentModal(_schedule_modal_schedule_modal_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleModalComponent"], 'fullModal', { 'programDetail': this.programDetail });
    }
    equipments() {
        this.commonService.presentModal(_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentsComponent"], 'halfModal', { 'programDetail': this.programDetail });
    }
    showChatUsers() {
        if (this.programType != "public") {
            this.commonService.presentLoader();
            this.chatService.checkChatProgram({ 'programId': this.programId, 'type': 3 }).subscribe((data) => {
                if (data.id > 0) {
                    this.commonService.dismissLoader();
                    var chatRoom = data.room_id;
                    var chatReceiverId = data.group_id;
                    var chatType = 2;
                    var fileData = {
                        chatType: chatType,
                        room: chatRoom,
                        receiverId: parseInt(chatReceiverId)
                    };
                    this.commonService.presentModal(_chats_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_14__["ChatRoomsComponent"], 'fullModal', fileData);
                }
                else {
                    this.commonService.dismissLoader();
                    // chat_type = 1:consultant,2:user,3:program
                    this.router.navigate(["/first-message/" + this.programId + "/3"]);
                }
            }, err => {
                this.commonService.presentToast("Couldnt load data, Something went wrong.");
                this.commonService.dismissLoader();
            });
        }
        else {
            this.commonService.presentToast("Chat Not Allow on Public Program");
        }
    }
    goBack() {
        this.navCtrl.back();
        // this.router.navigate(['/schedule-program']);
    }
    acceptRequest() {
        this.programService.acceptProgramRequest({ 'programId': this.programDetail.id }).subscribe(data => {
            let prog_date = new Date(this.programDetail.program_date + 'Z');
            this.localNotifications.schedule({
                id: this.programId,
                text: this.programDetail.title + " program will start at \n " + prog_date,
                trigger: { at: new Date(prog_date.getTime() - 60 * 60 * 500) },
                data: { secret: 'secret' },
                lockscreen: true,
                vibrate: true,
                silent: false,
                foreground: true,
            });
            this.router.navigateByUrl('/tabs/consultant-profile');
        });
    }
    joinRequest() {
        var type_id = '0';
        console.log(this.programDetail);
        if (this.programType == 'Private') {
            type_id = '1';
        }
        this.programService.joinRequest({ 'programId': this.programDetail.id, 'type_id': type_id, 'invitation_type': this.programDetail.is_requested }).subscribe(data => {
            this.request_join = true;
        });
    }
    simpleNotif() {
        this.localNotifications.schedule({
            id: 1,
            text: 'Single Local Notification',
            data: { secret: 'secret' }
        });
    }
    payment() {
        var fileData = {
            pgid: this.programId,
            pgname: this.programDetail.title,
            pgamount: this.programFee,
            pgimg: this.programImage,
        };
        this.commonService.presentModal(src_app_modalContent_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], 'bottomModal', fileData);
    }
    shareItem() {
        this.socialSharing.share("Program Details", "", "", "program-view/" + this.programId)
            .then(() => {
        })
            .catch(() => {
        });
    }
    nutritionModal(data) {
        if (this.paymentStatus > 0) {
            this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__["NutritionModalComponent"], 'fullModal', { 'data': data });
        }
        else {
            if (this.non_live_component_fee > '0') {
                var fileData = {
                    pgamount: this.non_live_component_fee,
                    programId: this.programId
                };
                this.commonService.presentModal(src_app_modalContent_equipment_payment_equipment_payment_component__WEBPACK_IMPORTED_MODULE_20__["EquipmentPaymentComponent"], 'bottomModal', fileData);
                // this.commonService.presentToast("Program is Paid.")
            }
            else if (!this.displayProgData) {
                this.commonService.presentToast("Program is not live yet.");
            }
            else {
                this.commonService.presentModal(src_app_user_profile_nutrition_modal_nutrition_modal_component__WEBPACK_IMPORTED_MODULE_18__["NutritionModalComponent"], 'fullModal', { 'data': data });
            }
        }
    }
    showVideoDetails(item, videoIDs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.non_live_component_fee);
            if (this.paymentStatus > 0) {
                console.log('a');
                this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__["ViewVideoDetailComponent"], 'fullModal', { 'details': item, 'videoIds': videoIDs });
            }
            else {
                if (this.non_live_component_fee > '0') {
                    console.log('b');
                    var fileData = {
                        pgamount: this.non_live_component_fee,
                        programId: this.programId
                    };
                    this.commonService.presentModal(src_app_modalContent_equipment_payment_equipment_payment_component__WEBPACK_IMPORTED_MODULE_20__["EquipmentPaymentComponent"], 'bottomModal', fileData);
                    // this.commonService.presentToast("Program is Paid.")
                }
                else if (!this.displayProgData) {
                    console.log('c');
                    this.commonService.presentToast("Program is not live yet.");
                }
                else {
                    this.commonService.presentModal(src_app_add_program_view_video_detail_view_video_detail_component__WEBPACK_IMPORTED_MODULE_19__["ViewVideoDetailComponent"], 'fullModal', { 'details': item, 'videoIds': videoIDs });
                }
            }
        });
    }
};
NewProgramViewPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"] }
];
NewProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-program-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-program-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/new-program-view/new-program-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-program-view.page.scss */ "./src/app/program/new-program-view/new-program-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _services_program_service__WEBPACK_IMPORTED_MODULE_7__["ProgramService"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"]])
], NewProgramViewPage);



/***/ })

}]);
//# sourceMappingURL=program-new-program-view-new-program-view-module-es2015.js.map