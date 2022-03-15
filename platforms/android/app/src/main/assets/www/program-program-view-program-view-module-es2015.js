(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-view-program-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-view/program-view.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-view/program-view.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>{{programDetail?.title}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\">\r\n      <!-- <ion-icon ios=\"ios-create\" md=\"md-create\" slot=\"end\"></ion-icon> -->\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <!-- <ion-card-content class=\"item-content ion-no-padding\">\r\n        \r\n        <ion-slides pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>\r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\"> \r\n            <img src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-card-content> -->\r\n      <ion-card-content class=\"item-content ion-no-padding\">\r\n        <!-- <ion-thumbnail>\r\n          <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail> -->\r\n        <!-- image/program/program_46_20210806150601_0.jpeg -->\r\n        <ion-slides *ngIf=\"progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n          <ion-slide>\r\n            <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n              <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n            </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"progImage && !progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>          \r\n          <ion-slide  *ngFor=\"let imgpath of programDetail?.image_path.split(','); let i=index;\"> \r\n            <img *ngIf=\"progImage\" src=\"{{url+imgpath}}\" /> \r\n          </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-slides *ngIf=\"!progImage && progVideo\" pager=\"true\" [options]=\"sliderOpts\" class=\"full-slider\" #mySlider>            \r\n        <ion-slide>\r\n          <video *ngIf=\"progVideo\" width=\"100%\" height=\"200px\" controls=\"controls\" preload=\"metadata\"  webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\">\r\n            <source src=\"{{vidUrl+programDetail?.video_path}}\" type=\"video/mp4\" />\r\n          </video>\r\n        </ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-thumbnail *ngIf=\"!progImage && !progVideo \">\r\n          <img [defaultImage] = \"defaultPostImage\" [lazyLoad]=\"url+programImage\">         \r\n        </ion-thumbnail>\r\n      </ion-card-content>\r\n      <ion-list lines=\"none\" class=\"list-info\">\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/target.svg\" />\r\n          <ion-label>{{programDetail?.category_id}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/doller.png\" />\r\n          <ion-label>{{programFee}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/group.svg\" />\r\n          <ion-label>{{programDetail?.type_id}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item class=\"list-items\">\r\n          <div class=\"icon-text\">\r\n          <img src=\"../../../assets/images/clock.svg\" />\r\n          <ion-label>{{programDetail?.program_duration || 0}} Min</ion-label>\r\n          </div>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-padding\">\r\n      <p class=\"mb-10\">{{programDetail?.description }} &nbsp;</p>      \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"counter-box ion-padding\" *ngIf=\"programDetail?.is_live_status == 1\">        \r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{dd | async}}</p> Days</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{hh | async}}</p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{mm| async}}</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">{{ss | async}}</p> Seconds</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n      <ion-text>This Program has been Ended </ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15 text-green\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"counter-box ion-padding\" *ngIf=\"programDetail?.is_live_status == 0\">        \r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Hours</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Minutes</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"ion-no-padding\" *ngIf=\"!programDetail?.ended\">\r\n      <ion-text><p class=\"count_time\">00</p> Seconds</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"programDetail?.ended\">\r\n      <ion-text>This Program has been Ended </ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"ion-no-padding mt-15\">\r\n      <ion-text><p class=\"text-green text-center\">{{programDateTime|date:'medium'}}</p></ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-button *ngIf=\"programDetail?.live\" [routerLink]=\"['/broadcaster',broadcastId]\">Go Live</ion-button> -->\r\n  <!-- <ion-label *ngIf=\"programDetail?.ended\" >This Program has been Ended  </ion-label> -->\r\n  \r\n  <!-- <ion-button [routerLink]=\"['/broadcaster',broadcastId]\">Tmp Live</ion-button> -->\r\n\r\n         <ion-button *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRequest()\" >Request To Join</ion-button> \r\n       <ion-button *ngIf=\"request_accs_pending && !programDetail?.ended\" size=\"small\" class=\"green btnVerify\" (click)=\"acceptRequest()\" >Accept Request</ion-button>      \r\n       <div class=\"users-list\" *ngIf=\"programDetail?.is_live_status == 1\">\r\n         <!-- <ion-button (click)=\"joinRoom()\">Join Room</ion-button> -->\r\n         <ion-button *ngIf=\"request_accs && !programDetail?.live && !programDetail?.ended\" size=\"small\"  class=\"green btnVerify\">Program will start sooon</ion-button>\r\n         <!-- <ion-button *ngIf=\"request_accs && !programDetail?.live\" size=\"small\"  class=\"green btnVerify\" (click)=\"payment()\">Payment</ion-button> -->\r\n         <ion-button *ngIf=\"programDetail?.ready && prePayment \" size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button>\r\n         <!-- <ion-button  size=\"small\"  class=\"green btnVerify\" (click)=\"joinRoom()\">Requested to join Program</ion-button> -->\r\n         <!-- <div *ngIf=\"request_accs && !programDetail?.live\" size=\"medium\"  >Program will start sooon   \r\n         </div>\r\n         <div *ngIf=\"programDetail?.is_requested ==1 && !request_join && !programDetail?.ended\" size=\"medium\"  (click)=\"joinRoom()\" >Requested to join Program \r\n        </div> -->\r\n      </div>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-list lines=\"none\" class=\"top-list three-block\">\r\n        <ion-item (click)=\"equipments()\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-construct\" md=\"md-construct\"></ion-icon>\r\n          </div>\r\n          <ion-label>Equipments</ion-label>\r\n        </ion-item>\r\n        <!-- <ion-item [routerLink]=\"['/nutrition-list']\" detail=\"false\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-nutrition\" md=\"md-nutrition\"></ion-icon>\r\n          </div>\r\n          <ion-label>Nutrition</ion-label>\r\n        </ion-item> -->\r\n        <ion-item *ngIf=\"programDetail?.chat_status == 1\" (click)=\"showChatUsers()\" detail=\"false\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-text\" md=\"md-text\"></ion-icon>\r\n          </div>\r\n          <ion-label>Chat</ion-label>\r\n        </ion-item>\r\n        <ion-item detail=\"false\" (click)=\"showSchedule(programDetail)\">\r\n          <div class=\"top-icon\">\r\n            <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\r\n          </div>\r\n          <ion-label>View Schedule</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-fab class=\"share-btn\" *ngIf=\"programDetail?.is_requested == 1\">\r\n        <ion-fab-button class=\"share-btn\" color=\"primary\" size=\"small\" (click)=\"shareItem()\">\r\n          <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n      </ion-col>\r\n  </ion-row>\r\n</ion-content>");

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

/***/ "./src/app/program/program-view/program-view-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/program/program-view/program-view-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProgramViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramViewPageRoutingModule", function() { return ProgramViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _program_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program-view.page */ "./src/app/program/program-view/program-view.page.ts");




const routes = [
    {
        path: '',
        component: _program_view_page__WEBPACK_IMPORTED_MODULE_3__["ProgramViewPage"]
    }
];
let ProgramViewPageRoutingModule = class ProgramViewPageRoutingModule {
};
ProgramViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgramViewPageRoutingModule);



/***/ }),

/***/ "./src/app/program/program-view/program-view.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/program/program-view/program-view.module.ts ***!
  \*************************************************************/
/*! exports provided: ProgramViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramViewPageModule", function() { return ProgramViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./program-view-routing.module */ "./src/app/program/program-view/program-view-routing.module.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _program_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./program-view.page */ "./src/app/program/program-view/program-view.page.ts");








let ProgramViewPageModule = class ProgramViewPageModule {
};
ProgramViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _program_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramViewPageRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__["LazyLoadImageModule"]
        ],
        declarations: [_program_view_page__WEBPACK_IMPORTED_MODULE_7__["ProgramViewPage"]]
    })
], ProgramViewPageModule);



/***/ }),

/***/ "./src/app/program/program-view/program-view.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/program/program-view/program-view.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-list {\n  padding: 0;\n  margin: 10px 0; }\n\n.top-list ion-item {\n  --min-height: 85px;\n  background: #FFF;\n  box-shadow: none; }\n\n.top-list ion-item ion-label {\n  padding-top: 0;\n  position: absolute;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0; }\n\n.top-icon {\n  width: 40px;\n  height: 40px;\n  background: #e9f6f5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.top-icon ion-icon {\n  color: #27a69a;\n  font-size: 1.25rem; }\n\n.users-list {\n  display: block;\n  width: 100%; }\n\n.users-list ion-item {\n  --min-height: auto;\n  display: flex;\n  width: 100%;\n  --padding-start: 0;\n  --inner-padding-end: 0; }\n\n.users-list ion-item img {\n  width: 42px;\n  height: 42px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin-left: -10px; }\n\n.users-list ion-item img:first-child {\n  margin-left: 0; }\n\n.view-all {\n  width: 42px;\n  height: 42px;\n  max-width: 42px;\n  text-align: center;\n  background: #f1f0f0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-left: -10px; }\n\n.list-info {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 6px; }\n\n.list-info ion-item {\n  width: 25%;\n  box-shadow: 0.001em 5px 12px rgba(34, 35, 58, 0.09);\n  margin: auto;\n  margin-bottom: 8px; }\n\n.list-info ion-item img {\n  width: 24px; }\n\n.list-info ion-item ion-label {\n  font-size: 0.85rem; }\n\n.btnVerify {\n  width: 100%;\n  margin: 0;\n  background: #27a69a;\n  --background: #27a69a;\n  --border-radius: 0;\n  border-radius: 0;\n  height: 50px; }\n\n.counter-box {\n  margin-bottom: 0; }\n\n.count_time {\n  font-size: 16px; }\n\nion-slides {\n  height: 190px; }\n\nion-item.icon-right-side.ion-text-end.item.md.in-list.ion-focusable.hydrated {\n  padding-left: 16px;\n  min-width: none; }\n\nion-item.icon-right-side.ion-text-end.item.ios.in-list.ion-focusable.hydrated {\n  padding-left: 16px;\n  min-width: none; }\n\n.icon-text {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0; }\n\n.icon-text img {\n  margin-bottom: 5px !important; }\n\np.text-green.text-center {\n  left: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLXZpZXcvQzpcXHhhbXBwXFxodGRvY3NcXGludG9hY3RpdmUvc3JjXFxhcHBcXHByb2dyYW1cXHByb2dyYW0tdmlld1xccHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFVBQVU7RUFBQyxjQUFjLEVBQUE7O0FBQ25DO0VBQW1CLGtCQUFhO0VBQU0sZ0JBQWdCO0VBQUMsZ0JBQWdCLEVBQUE7O0FBQ3ZFO0VBQTZCLGNBQWM7RUFBQyxrQkFBa0I7RUFBQyxXQUFXO0VBQUMsU0FBUztFQUFDLDJCQUEyQjtFQUFDLGNBQWMsRUFBQTs7QUFDL0g7RUFBVSxXQUFXO0VBQUMsWUFBWTtFQUFDLG1CQUFtQjtFQUFDLGtCQUFrQjtFQUFDLGFBQWE7RUFBQyx1QkFBdUI7RUFBQyxtQkFBbUI7RUFBQyxrQkFBa0I7RUFBQyxVQUFVO0VBQUMsU0FBUztFQUFDLDJCQUEyQixFQUFBOztBQUN2TTtFQUFvQixjQUFjO0VBQUMsa0JBQWtCLEVBQUE7O0FBRXJEO0VBQVksY0FBYztFQUFDLFdBQVcsRUFBQTs7QUFDdEM7RUFBcUIsa0JBQWE7RUFBTSxhQUFhO0VBQUMsV0FBVztFQUFDLGtCQUFnQjtFQUFHLHNCQUFvQixFQUFBOztBQUN6RztFQUF5QixXQUFXO0VBQUMsWUFBWTtFQUFDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFBQyxrQkFBa0I7RUFBQyxrQkFBa0IsRUFBQTs7QUFDekc7RUFBcUMsY0FBYyxFQUFBOztBQUNuRDtFQUFVLFdBQVU7RUFBQyxZQUFXO0VBQUMsZUFBZTtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQjtFQUFDLGtCQUFpQjtFQUFDLGFBQVk7RUFBQyx1QkFBc0I7RUFBQyxtQkFBa0I7RUFBQyxTQUFTO0VBQUMsa0JBQWtCLEVBQUE7O0FBRTNMO0VBQVcsYUFBYTtFQUFDLGVBQWU7RUFBQyxZQUFZLEVBQUE7O0FBQ3JEO0VBQW9CLFVBQVU7RUFBQyxtREFBbUQ7RUFBQyxZQUFZO0VBQUMsa0JBQWtCLEVBQUE7O0FBQ2xIO0VBQXdCLFdBQVcsRUFBQTs7QUFHbkM7RUFBOEIsa0JBQWtCLEVBQUE7O0FBRWhEO0VBQVcsV0FBVztFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHFCQUFhO0VBQ2Isa0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBRVo7RUFBYyxnQkFBZ0IsRUFBQTs7QUFDOUI7RUFBYSxlQUFlLEVBQUE7O0FBQzVCO0VBQVcsYUFBYSxFQUFBOztBQUk1QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVyQjtFQUNJLDZCQUE2QixFQUFBOztBQUUvQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLXZpZXcvcHJvZ3JhbS12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbGlzdHtwYWRkaW5nOiAwO21hcmdpbjogMTBweCAwO31cclxuLnRvcC1saXN0IGlvbi1pdGVtey0tbWluLWhlaWdodDogODVweDtiYWNrZ3JvdW5kOiAjRkZGO2JveC1zaGFkb3c6IG5vbmU7fVxyXG4udG9wLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVse3BhZGRpbmctdG9wOiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDhweDtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO21hcmdpbi1sZWZ0OiAwO31cclxuLnRvcC1pY29ue3dpZHRoOiA0MHB4O2hlaWdodDogNDBweDtiYWNrZ3JvdW5kOiAjZTlmNmY1O2JvcmRlci1yYWRpdXM6IDUwJTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTEwcHg7bGVmdDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTt9XHJcbi50b3AtaWNvbiBpb24taWNvbiB7Y29sb3I6ICMyN2E2OWE7Zm9udC1zaXplOiAxLjI1cmVtO31cclxuXHJcbi51c2Vycy1saXN0e2Rpc3BsYXk6IGJsb2NrO3dpZHRoOiAxMDAlO31cclxuLnVzZXJzLWxpc3QgaW9uLWl0ZW17LS1taW4taGVpZ2h0OiBhdXRvO2Rpc3BsYXk6IGZsZXg7d2lkdGg6IDEwMCU7LS1wYWRkaW5nLXN0YXJ0OiAwOy0taW5uZXItcGFkZGluZy1lbmQ6IDA7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWd7d2lkdGg6IDQycHg7aGVpZ2h0OiA0MnB4O29iamVjdC1maXQ6IGNvdmVyO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tbGVmdDogLTEwcHg7fVxyXG4udXNlcnMtbGlzdCBpb24taXRlbSBpbWc6Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6IDA7fVxyXG4udmlldy1hbGx7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDttYXgtd2lkdGg6IDQycHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZjFmMGYwO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46IDA7bWFyZ2luLWxlZnQ6IC0xMHB4O31cclxuXHJcbi5saXN0LWluZm97ZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7cGFkZGluZzogNnB4O31cclxuLmxpc3QtaW5mbyBpb24taXRlbXt3aWR0aDogMjUlO2JveC1zaGFkb3c6IDAuMDAxZW0gNXB4IDEycHggcmdiYSgzNCwgMzUsIDU4LCAwLjA5KTttYXJnaW46IGF1dG87bWFyZ2luLWJvdHRvbTogOHB4O31cclxuLmxpc3QtaW5mbyBpb24taXRlbSBpbWd7d2lkdGg6IDI0cHg7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4ubGlzdC1pbmZvIGlvbi1pdGVtIGlvbi1sYWJlbHtmb250LXNpemU6IDAuODVyZW07fVxyXG5cclxuLmJ0blZlcmlmeXt3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyN2E2OWE7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O31cclxuICBcclxuICAgIC5jb3VudGVyLWJveCB7bWFyZ2luLWJvdHRvbTogMDt9XHJcbiAgICAuY291bnRfdGltZSB7Zm9udC1zaXplOiAxNnB4O31cclxuICAgIGlvbi1zbGlkZXN7aGVpZ2h0OiAxOTBweDt9XHJcblxyXG5cclxuLy9BbmRyb2lkXHJcbmlvbi1pdGVtLmljb24tcmlnaHQtc2lkZS5pb24tdGV4dC1lbmQuaXRlbS5tZC5pbi1saXN0Lmlvbi1mb2N1c2FibGUuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgbWluLXdpZHRoOiBub25lO1xyXG59XHJcblxyXG4vL0lPU1xyXG5pb24taXRlbS5pY29uLXJpZ2h0LXNpZGUuaW9uLXRleHQtZW5kLml0ZW0uaW9zLmluLWxpc3QuaW9uLWZvY3VzYWJsZS5oeWRyYXRlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBtaW4td2lkdGg6IG5vbmU7XHJcbn1cclxuLmljb24tdGV4dHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5pY29uLXRleHQgaW1ne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHAudGV4dC1ncmVlbi50ZXh0LWNlbnRlcntcclxuICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/program/program-view/program-view.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/program/program-view/program-view.page.ts ***!
  \***********************************************************/
/*! exports provided: ProgramViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramViewPage", function() { return ProgramViewPage; });
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



















/* To try the app with Enablex hosted service you need to set the kTry = true */
var kTry = true;
/*Your webservice host URL, Keet the defined host when kTry = true */
var kBasedURL = "https://demo.enablex.io/";
/*The following information required, Only when kTry = true, When you hosted your own webservice remove these fileds*/
/*Use enablec portal to create your app and get these following credentials*/
var kAppId = "601a75829370a5441339e5c2";
var kAppkey = "utaJyBepyYagyjeQeuaUe5aUaEavu9aPeWy6";
let ProgramViewPage = class ProgramViewPage {
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
        this.userName = "Bablu";
        this.roomID = "";
        this.defaultPostImage = './../../../assets/images/loading.jpg';
        this.progImage = false;
        this.progVideo = false;
        this.intoProg = [];
        this.userData = JSON.parse(localStorage.getItem('userData'));
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe((params) => {
            this.programId = params.get('programId');
        });
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.totalIntoFee = 0;
        this.min = 0;
        this.totalMin = 0;
        this.Mins = 0;
        this.programService.getIntoActivePendingPaymentStatus('').subscribe(data => {
            this.intoActivePaid = data.data;
            // console.log(this.intoActivePaid);
            this.intoActivePaid.forEach(el => {
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
                                    pgamount: el.program_fee,
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
        alert(this.roomID);
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
        this.programService.joinRequest({ 'programId': this.programDetail.id }).subscribe(data => {
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
};
ProgramViewPage.ctorParameters = () => [
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
ProgramViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-program-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./program-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program-view/program-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./program-view.page.scss */ "./src/app/program/program-view/program-view.page.scss")).default]
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
], ProgramViewPage);



/***/ })

}]);
//# sourceMappingURL=program-program-view-program-view-module-es2015.js.map