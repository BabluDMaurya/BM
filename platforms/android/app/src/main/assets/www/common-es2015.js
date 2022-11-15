(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-504cdd09-js */ "ios-transition-504cdd09-js").then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-fea2bbfb-js */ "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    let trans;
    try {
        const mod = await __webpack_require__.e(/*! import() | index-69c37885-js */ "index-69c37885-js").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "./node_modules/@ionic/core/dist/esm/index-69c37885.js"));
        trans = await mod.create(animationBuilder, opts.baseEl, opts);
    }
    catch (err) {
        trans = animationBuilder(opts.baseEl, opts);
    }
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
};




/***/ }),

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.js ***!
  \*************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-search-filter.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/privacy/privacy.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/privacy/privacy.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"top-header ion-no-padding\">\r\n  <ion-list class=\"top-heading three-block\">\r\n    <ion-item slot=\"start\">\r\n      <ion-buttons class=\"ion-no-margin\" (click)=\"goBack()\">\r\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n    <ion-item slot=\"center\">\r\n      <ion-label>Privacy</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"icon-right-side ion-text-end\" slot=\"end\"></ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n<ion-content class=\"main_content no_footer\">\r\n  <ion-row>\r\n    <ion-col class=\"ion-padding\">\r\n      <ion-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ion-text>\r\n    </ion-col>\r\n  </ion-row>  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/helpers/formvalidator.ts":
/*!******************************************!*\
  !*** ./src/app/helpers/formvalidator.ts ***!
  \******************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/services/http-error-handler.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let HomeService = class HomeService {
    constructor(http, httpErrorHandler) {
        this.http = http;
        this.handleError = httpErrorHandler.createHandleError('NutritionService');
    }
    getApiHeaders(extraHeaders = {}, checkAuth = false) {
        if (checkAuth) {
            this.token = localStorage.getItem('userToken');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
        }
        return this.options = { headers: this.headers };
    }
    getHomeContent(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getHomeContent', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getHomeContent', formData)));
    }
    getUsersFollowingContent(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getUsersFollowingContent', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getUsersFollowingContent', formData)));
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandlerService"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandlerService"]])
], HomeService);



/***/ }),

/***/ "./src/app/services/payments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/payments.service.ts ***!
  \**********************************************/
/*! exports provided: PaymentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsService", function() { return PaymentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/services/http-error-handler.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let PaymentsService = class PaymentsService {
    constructor(http, httpErrorHandler, storage) {
        this.http = http;
        this.storage = storage;
        this.handleError = httpErrorHandler.createHandleError('PostService');
    }
    getApiHeaders(extraHeader = {}, checkAuth = false) {
        if (checkAuth) {
            this.token = localStorage.getItem('userToken');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
        }
        return this.options = { headers: this.headers };
    }
    getPaymentHistory() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getPaymentHistory', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPaymentHistory')));
    }
    getPaymentDetails(id) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getPaymentDetails', id, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPaymentDetails', id)));
    }
};
PaymentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
PaymentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], PaymentsService);



/***/ }),

/***/ "./src/app/settings/privacy/privacy.page.scss":
/*!****************************************************!*\
  !*** ./src/app/settings/privacy/privacy.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-text {\n  line-height: 1.5;\n}\n\n.ios.main_content {\n  --padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvcHJpdmFjeS9DOlxceGFtcHBcXGh0ZG9jc1xcaW50b2FjdGl2ZS9zcmNcXGFwcFxcc2V0dGluZ3NcXHByaXZhY3lcXHByaXZhY3kucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9wcml2YWN5L3ByaXZhY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsZ0JBQUE7QUNFVDs7QUREQTtFQUFrQixrQkFBQTtBQ0tsQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3ByaXZhY3kvcHJpdmFjeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dHtsaW5lLWhlaWdodDogMS41O31cclxuLmlvcy5tYWluX2NvbnRlbnR7LS1wYWRkaW5nLXRvcDogMHB4O30iLCJpb24tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5pb3MubWFpbl9jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/settings/privacy/privacy.page.ts":
/*!**************************************************!*\
  !*** ./src/app/settings/privacy/privacy.page.ts ***!
  \**************************************************/
/*! exports provided: PrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPage", function() { return PrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PrivacyPage = class PrivacyPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
PrivacyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PrivacyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/privacy/privacy.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy.page.scss */ "./src/app/settings/privacy/privacy.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PrivacyPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map