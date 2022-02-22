function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5"], {
  /***/
  "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js ***!
    \**********************************************************************/

  /*! exports provided: Hooks, IntersectionObserverHooks, LAZYLOAD_IMAGE_HOOKS, LazyLoadImageDirective, LazyLoadImageModule, ScrollHooks, SharedHooks */

  /***/
  function node_modulesNgLazyloadImageFesm2015NgLazyloadImageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Hooks", function () {
      return Hooks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntersectionObserverHooks", function () {
      return IntersectionObserverHooks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAZYLOAD_IMAGE_HOOKS", function () {
      return LAZYLOAD_IMAGE_HOOKS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyLoadImageDirective", function () {
      return LazyLoadImageDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyLoadImageModule", function () {
      return LazyLoadImageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollHooks", function () {
      return ScrollHooks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedHooks", function () {
      return SharedHooks;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    function getNavigator() {
      return typeof window !== 'undefined' ? window.navigator : undefined;
    }

    function isChildOfPicture(element) {
      return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
    }

    function isImageElement(element) {
      return element.nodeName.toLowerCase() === 'img';
    }

    function setImage(element, imagePath, useSrcset) {
      if (isImageElement(element)) {
        if (useSrcset && 'srcset' in element) {
          element.srcset = imagePath;
        } else {
          element.src = imagePath;
        }
      } else {
        element.style.backgroundImage = "url('".concat(imagePath, "')");
      }

      return element;
    }

    function setSources(attrName) {
      return function (image) {
        var sources = image.parentElement.getElementsByTagName('source');

        for (var i = 0; i < sources.length; i++) {
          var attrValue = sources[i].getAttribute(attrName);

          if (attrValue) {
            // Check if `srcset` is supported by the current browser
            if ('srcset' in sources[i]) {
              sources[i].srcset = attrValue;
            } else {
              sources[i].src = attrValue;
            }
          }
        }
      };
    }

    var setSourcesToDefault = setSources('defaultImage');
    var setSourcesToLazy = setSources('lazyLoad');
    var setSourcesToError = setSources('errorImage');

    function setImageAndSources(setSourcesFn) {
      return function (element, imagePath, useSrcset) {
        if (isImageElement(element) && isChildOfPicture(element)) {
          setSourcesFn(element);
        }

        if (imagePath) {
          setImage(element, imagePath, useSrcset);
        }
      };
    }

    var setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
    var setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
    var setImageAndSourcesToError = setImageAndSources(setSourcesToError);

    var Hooks = /*#__PURE__*/function () {
      function Hooks() {
        _classCallCheck(this, Hooks);

        this.navigator = getNavigator();
      }

      _createClass(Hooks, [{
        key: "setPlatformId",
        value: function setPlatformId(platformId) {
          this.platformId = platformId;
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(attributes) {}
      }, {
        key: "onAttributeChange",
        value: function onAttributeChange(newAttributes) {}
      }]);

      return Hooks;
    }();

    var cssClassNames = {
      loaded: 'ng-lazyloaded',
      loading: 'ng-lazyloading',
      failed: 'ng-failed-lazyloaded'
    };

    function removeCssClassName(element, cssClassName) {
      element.className = element.className.replace(cssClassName, '');
    }

    function addCssClassName(element, cssClassName) {
      if (!element.className.includes(cssClassName)) {
        element.className += " ".concat(cssClassName);
      }
    }

    function hasCssClassName(element, cssClassName) {
      return element.className && element.className.includes(cssClassName);
    }

    var SharedHooks = /*#__PURE__*/function (_Hooks) {
      _inherits(SharedHooks, _Hooks);

      var _super = _createSuper(SharedHooks);

      function SharedHooks() {
        _classCallCheck(this, SharedHooks);

        return _super.apply(this, arguments);
      }

      _createClass(SharedHooks, [{
        key: "setup",
        value: function setup(attributes) {
          setImageAndSourcesToDefault(attributes.element, attributes.defaultImagePath, attributes.useSrcset);
          addCssClassName(attributes.element, cssClassNames.loading);

          if (hasCssClassName(attributes.element, cssClassNames.loaded)) {
            removeCssClassName(attributes.element, cssClassNames.loaded);
          }
        }
      }, {
        key: "finally",
        value: function _finally(attributes) {
          addCssClassName(attributes.element, cssClassNames.loaded);
          removeCssClassName(attributes.element, cssClassNames.loading);
        }
      }, {
        key: "loadImage",
        value: function loadImage(attributes) {
          if (this.skipLazyLoading(attributes)) {
            // Set the image right away for bots for better SEO
            return [attributes.imagePath];
          }

          var element = attributes.element,
              useSrcset = attributes.useSrcset,
              imagePath = attributes.imagePath,
              decode = attributes.decode;
          var img;

          if (isImageElement(element) && isChildOfPicture(element)) {
            var parentClone = element.parentNode.cloneNode(true);
            img = parentClone.getElementsByTagName('img')[0];
            setSourcesToLazy(img);
            setImage(img, imagePath, useSrcset);
          } else {
            img = new Image();

            if (isImageElement(element) && element.referrerPolicy) {
              img.referrerPolicy = element.referrerPolicy;
            }

            if (isImageElement(element) && element.sizes) {
              img.sizes = element.sizes;
            }

            if (useSrcset && 'srcset' in img) {
              img.srcset = imagePath;
            } else {
              img.src = imagePath;
            }
          }

          if (decode && img.decode) {
            return img.decode().then(function () {
              return imagePath;
            });
          }

          return new Promise(function (resolve, reject) {
            img.onload = function () {
              return resolve(imagePath);
            };

            img.onerror = function () {
              return reject(null);
            };
          });
        }
      }, {
        key: "setErrorImage",
        value: function setErrorImage(error, attributes) {
          var element = attributes.element,
              useSrcset = attributes.useSrcset,
              errorImagePath = attributes.errorImagePath;
          setImageAndSourcesToError(element, errorImagePath, useSrcset);
          addCssClassName(element, cssClassNames.failed);
        }
      }, {
        key: "setLoadedImage",
        value: function setLoadedImage(imagePath, attributes) {
          var element = attributes.element,
              useSrcset = attributes.useSrcset;
          setImageAndSourcesToLazy(element, imagePath, useSrcset);
        }
      }, {
        key: "isDisabled",
        value: function isDisabled() {
          // Disable if SSR and the user isn't a bot
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && !this.isBot();
        }
      }, {
        key: "skipLazyLoading",
        value: function skipLazyLoading(attributes) {
          return this.isBot(attributes);
        }
      }, {
        key: "isBot",
        value: function isBot(attributes) {
          var _a;

          if ((_a = this.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) {
            return /googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot/i.test(this.navigator.userAgent);
          }

          return false;
        }
      }]);

      return SharedHooks;
    }(Hooks);

    var IntersectionObserverHooks = /*#__PURE__*/function (_SharedHooks) {
      _inherits(IntersectionObserverHooks, _SharedHooks);

      var _super2 = _createSuper(IntersectionObserverHooks);

      function IntersectionObserverHooks() {
        var _this;

        _classCallCheck(this, IntersectionObserverHooks);

        _this = _super2.apply(this, arguments);
        _this.observers = new WeakMap();
        _this.intersectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        _this.uniqKey = {};
        return _this;
      }

      _createClass(IntersectionObserverHooks, [{
        key: "getObservable",
        value: function getObservable(attributes) {
          var _this2 = this;

          if (this.skipLazyLoading(attributes)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              isIntersecting: true
            });
          }

          if (attributes.customObservable) {
            return attributes.customObservable;
          }

          var scrollContainerKey = attributes.scrollContainer || this.uniqKey;
          var options = {
            root: attributes.scrollContainer || null
          };

          if (attributes.offset) {
            options.rootMargin = "".concat(attributes.offset, "px");
          }

          var observer = this.observers.get(scrollContainerKey);

          if (!observer) {
            observer = new IntersectionObserver(function (entrys) {
              return _this2.loadingCallback(entrys);
            }, options);
            this.observers.set(scrollContainerKey, observer);
          }

          observer.observe(attributes.element);
          return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (obs) {
            var subscription = _this2.intersectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (entry) {
              return entry.target === attributes.element;
            })).subscribe(obs);

            return function () {
              subscription.unsubscribe();
              observer.unobserve(attributes.element);
            };
          });
        }
      }, {
        key: "isVisible",
        value: function isVisible(event) {
          return event.isIntersecting;
        }
      }, {
        key: "loadingCallback",
        value: function loadingCallback(entrys) {
          var _this3 = this;

          entrys.forEach(function (entry) {
            return _this3.intersectionSubject.next(entry);
          });
        }
      }]);

      return IntersectionObserverHooks;
    }(SharedHooks);

    function lazyLoadImage(hooks, attributes) {
      return function (evntObservable) {
        return evntObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
          return attributes.onStateChange.emit({
            reason: 'observer-emit',
            data: data
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
          return hooks.isVisible(event, attributes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
          return attributes.onStateChange.emit({
            reason: 'start-loading'
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function () {
          return hooks.loadImage(attributes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
          return attributes.onStateChange.emit({
            reason: 'mount-image'
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (imagePath) {
          return hooks.setLoadedImage(imagePath, attributes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
          return attributes.onStateChange.emit({
            reason: 'loading-succeeded'
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
          return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
          attributes.onStateChange.emit({
            reason: 'loading-failed',
            data: error
          });
          hooks.setErrorImage(error, attributes);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
          attributes.onStateChange.emit({
            reason: 'finally'
          });
          hooks["finally"](attributes);
        }));
      };
    }

    var LAZYLOAD_IMAGE_HOOKS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('LazyLoadImageHooks');

    var LazyLoadImageDirective = /*#__PURE__*/function () {
      function LazyLoadImageDirective(el, ngZone, platformId, hooks) {
        _classCallCheck(this, LazyLoadImageDirective);

        this.onStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emits an event on every state change

        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.hooks = hooks;
        this.hooks.setPlatformId(platformId);
        this.uid = Math.random().toString(36).substr(2, 9);
      }

      _createClass(LazyLoadImageDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.debug === true && !this.debugSubscription) {
            this.debugSubscription = this.onStateChange.subscribe(function (e) {
              return console.log(e);
            });
          }

          this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset ? this.offset | 0 : 0,
            scrollContainer: this.scrollTarget,
            customObservable: this.customObservable,
            decode: this.decode,
            onStateChange: this.onStateChange,
            id: this.uid
          });
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          if (this.hooks.isDisabled()) {
            return null;
          }

          this.ngZone.runOutsideAngular(function () {
            _this4.loadSubscription = _this4.propertyChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (attributes) {
              return _this4.hooks.onAttributeChange(attributes);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (attributes) {
              return attributes.onStateChange.emit({
                reason: 'setup'
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (attributes) {
              return _this4.hooks.setup(attributes);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (attributes) {
              if (!attributes.imagePath) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["never"])();
              }

              return _this4.hooks.getObservable(attributes).pipe(lazyLoadImage(_this4.hooks, attributes));
            })).subscribe({
              next: function next() {
                return null;
              }
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this5 = this;

          var _a, _b;

          this.propertyChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe({
            next: function next(attributes) {
              return _this5.hooks.onDestroy(attributes);
            }
          }).unsubscribe();
          (_a = this.loadSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.debugSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        }
      }]);

      return LazyLoadImageDirective;
    }();

    LazyLoadImageDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[lazyLoad]'
      }]
    }];

    LazyLoadImageDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
        }]
      }, {
        type: Hooks,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [LAZYLOAD_IMAGE_HOOKS]
        }]
      }];
    };

    LazyLoadImageDirective.propDecorators = {
      lazyImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['lazyLoad']
      }],
      defaultImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      errorImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      scrollTarget: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      customObservable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      offset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      useSrcset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      decode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      debug: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      onStateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };

    var LazyLoadImageModule = function LazyLoadImageModule() {
      _classCallCheck(this, LazyLoadImageModule);
    };

    LazyLoadImageModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        declarations: [LazyLoadImageDirective],
        exports: [LazyLoadImageDirective],
        providers: [{
          provide: LAZYLOAD_IMAGE_HOOKS,
          useClass: IntersectionObserverHooks
        }]
      }]
    }];

    var Rect = /*#__PURE__*/function () {
      function Rect(left, top, right, bottom) {
        _classCallCheck(this, Rect);

        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
      }

      _createClass(Rect, [{
        key: "inflate",
        value: function inflate(inflateBy) {
          this.left -= inflateBy;
          this.top -= inflateBy;
          this.right += inflateBy;
          this.bottom += inflateBy;
        }
      }, {
        key: "intersectsWith",
        value: function intersectsWith(rect) {
          return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
        }
      }, {
        key: "getIntersectionWith",
        value: function getIntersectionWith(rect) {
          var left = Math.max(this.left, rect.left);
          var top = Math.max(this.top, rect.top);
          var right = Math.min(this.right, rect.right);
          var bottom = Math.min(this.bottom, rect.bottom);

          if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
          } else {
            return Rect.empty;
          }
        }
      }], [{
        key: "fromElement",
        value: function fromElement(element) {
          var _element$getBoundingC = element.getBoundingClientRect(),
              left = _element$getBoundingC.left,
              top = _element$getBoundingC.top,
              right = _element$getBoundingC.right,
              bottom = _element$getBoundingC.bottom;

          if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
          } else {
            return new Rect(left, top, right, bottom);
          }
        }
      }, {
        key: "fromWindow",
        value: function fromWindow(_window) {
          return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
        }
      }]);

      return Rect;
    }();

    Rect.empty = new Rect(0, 0, 0, 0);

    var ScrollHooks = /*#__PURE__*/function (_SharedHooks2) {
      _inherits(ScrollHooks, _SharedHooks2);

      var _super3 = _createSuper(ScrollHooks);

      function ScrollHooks() {
        var _this6;

        _classCallCheck(this, ScrollHooks);

        _this6 = _super3.apply(this, arguments);

        _this6.getWindow = function () {
          return window;
        };

        _this6.scrollListeners = new WeakMap(); // Only create one scroll listener per target and share the observable.
        // Typical, there will only be one observable per application

        _this6.getScrollListener = function (scrollTarget) {
          if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
            console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
          }

          var scrollListener = _this6.scrollListeners.get(scrollTarget);

          if (scrollListener) {
            return scrollListener;
          }

          var srollEvent = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            var eventName = 'scroll';

            var handler = function handler(event) {
              return observer.next(event);
            };

            var options = {
              passive: true,
              capture: false
            };
            scrollTarget.addEventListener(eventName, handler, options);
            return function () {
              return scrollTarget.removeEventListener(eventName, handler, options);
            };
          });

          var listener = _this6.sampleObservable(srollEvent);

          _this6.scrollListeners.set(scrollTarget, listener);

          return listener;
        };

        return _this6;
      }

      _createClass(ScrollHooks, [{
        key: "getObservable",
        value: function getObservable(attributes) {
          if (this.skipLazyLoading(attributes)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])('load');
          } else if (attributes.customObservable) {
            return attributes.customObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''));
          } else if (attributes.scrollContainer) {
            return this.getScrollListener(attributes.scrollContainer);
          }

          return this.getScrollListener(this.getWindow());
        }
      }, {
        key: "isVisible",
        value: function isVisible(event, attributes) {
          var elementBounds = Rect.fromElement(attributes.element);

          if (elementBounds === Rect.empty) {
            return false;
          }

          var windowBounds = Rect.fromWindow(this.getWindow());
          elementBounds.inflate(attributes.offset);

          if (attributes.scrollContainer) {
            var scrollContainerBounds = Rect.fromElement(attributes.scrollContainer);
            var intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
            return elementBounds.intersectsWith(intersection);
          } else {
            return elementBounds.intersectsWith(windowBounds);
          }
        }
      }, {
        key: "sampleObservable",
        value: function sampleObservable(obs, scheduler) {
          return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["sampleTime"])(100, scheduler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''));
        }
      }]);

      return ScrollHooks;
    }(SharedHooks);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-lazyload-image.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~bookmark-bookmark-module~chats-chat-list-chat-list-module~chats-first-message-first-message-~1df314e5-es5.js.map