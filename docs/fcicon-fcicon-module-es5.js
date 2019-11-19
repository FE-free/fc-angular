(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcicon-fcicon-module"],{

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clipboardAction = __webpack_require__(1);

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _tinyEmitter = __webpack_require__(3);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _goodListener = __webpack_require__(4);

var _goodListener2 = _interopRequireDefault(_goodListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */
var Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        _classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    _createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(_tinyEmitter2.default);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

module.exports = Clipboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */
var ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

module.exports = ClipboardAction;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(5);
var delegate = __webpack_require__(6);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(7);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcicon/fcicon.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcicon/fcicon.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @Date: 2019-10-11 17:55:22\r\n * @LastEditors: honghong\r\n * @LastEditTime: 2019-10-12 17:15:20\r\n * @Description: \r\n * @email: 3300536651@qq.com\r\n -->\r\n<div nz-row class=\"fc-row\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-tabset>\r\n      <nz-tab nzTitle=\"AntDesign\">\r\n        <ul class=\"fc-icon-show\">\r\n          <li class=\"fc-icon-item\" *ngFor=\"let icon of icons\" (click)=\"copyed(getIconCode(icon), $event)\">\r\n            <i class=\"copyIcon\" nz-icon [nzType]=\"icon.name\" [nzTheme]=\"icon.theme\"></i>\r\n            <span class=\"fc-icon-text\">\r\n              {{icon.name}}\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </nz-tab>\r\n      <nz-tab nzTitle=\"阿里巴巴矢量图标\">\r\n        <a href=\"https://www.iconfont.cn\" target=\"_blank\">阿里巴巴矢量图标库官网 </a>\r\n        <ul class=\"fc-icon-show\">\r\n          <li class=\"fc-icon-item\" *ngFor=\"let icon of aliIcons\" (click)=\"copyed(getIconCode(icon), $event)\">\r\n            <i class=\"icon iconfont copyIcon\" [ngClass]=\"icon.name\"></i>\r\n            <span class=\"fc-icon-text\">\r\n              {{icon.name}}\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </nz-tab>\r\n    </nz-tabset>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/fcicon/fcicon.component.ts":
/*!**********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcicon/fcicon.component.ts ***!
  \**********************************************************/
/*! exports provided: FciconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FciconComponent", function() { return FciconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/*
 * @Author: honghong
 * @Date: 2019-10-12 09:28:32
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-12 14:27:29
 * @Description:
 * @email: 3300536651@qq.com
 */






var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__;
var FciconComponent = /** @class */ (function () {
    function FciconComponent(router, activedRoute, message) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.message = message;
    }
    FciconComponent.prototype.ngOnInit = function () {
        this.icons = Object.keys(antDesignIcons).map(function (key) { return antDesignIcons[key]; });
        console.log(this.icons);
        this.aliIcons = [{
                name: 'fc-icon-bianxie',
                icon: 'fc-icon-bianxie'
            }, {
                name: 'fc-icon-tuichu',
                icon: 'fc-icon-tuichu'
            }, {
                name: 'fc-icon-password',
                icon: 'fc-icon-password'
            }, {
                name: 'fc-icon-remove',
                icon: 'fc-icon-remove'
            }, {
                name: 'fc-icon-information',
                icon: 'fc-icon-information'
            }, {
                name: 'fc-icon-jinggao',
                icon: 'fc-icon-jinggao'
            }, {
                name: 'fc-icon-dui',
                icon: 'fc-icon-dui'
            }, {
                name: 'fc-icon-iframe',
                icon: 'fc-icon-iframe'
            }, {
                name: 'fc-icon-more',
                icon: 'fc-icon-more'
            }, {
                name: 'fc-icon-search',
                icon: 'fc-icon-search'
            }, {
                name: 'fc-icon-jichushezhi',
                icon: 'fc-icon-jichushezhi'
            }, {
                name: 'fc-icon-xiazai',
                icon: 'fc-icon-xiazai'
            }, {
                name: 'fc-icon-jia',
                icon: 'fc-icon-jia'
            }, {
                name: 'fc-icon-jian',
                icon: 'fc-icon-jian'
            }, {
                name: 'fc-icon-wode',
                icon: 'fc-icon-wode'
            }, {
                name: 'fc-icon-gaotie',
                icon: 'fc-icon-gaotie'
            }, {
                name: 'fc-icon-forms',
                icon: 'fc-icon-forms'
            }, {
                name: 'fc-icon-face',
                icon: 'fc-icon-face'
            }, {
                name: 'fc-icon-ecommerce',
                icon: 'fc-icon-ecommerce'
            }, {
                name: 'fc-icon-fullscreen',
                icon: 'fc-icon-fullscreen'
            }, {
                name: 'fc-icon-bardata',
                icon: 'fc-icon-bardata'
            }, {
                name: 'fc-icon-shouye',
                icon: 'fc-icon-shouye'
            }, {
                name: 'fc-icon-zuo',
                icon: 'fc-icon-zuo'
            }, {
                name: 'fc-icon-wenjianjia',
                icon: 'fc-icon-wenjianjia'
            }, {
                name: 'fc-icon-xia',
                icon: 'fc-icon-xia'
            }, {
                name: 'fc-icon-you',
                icon: 'fc-icon-you'
            }, {
                name: 'fc-icon-Workorder',
                icon: 'fc-icon-Workorder'
            }, {
                name: 'fc-icon-tuozhuai',
                icon: 'fc-icon-tuozhuai'
            }, {
                name: 'fc-icon-personnel',
                icon: 'fc-icon-personnel'
            }, {
                name: 'fc-icon-peizhi',
                icon: 'fc-icon-peizhi'
            }, {
                name: 'fc-icon-beijian',
                icon: 'fc-icon-beijian'
            }, {
                name: 'fc-icon-moban',
                icon: 'fc-icon-moban'
            }, {
                name: 'fc-icon-uploadview',
                icon: 'fc-icon-uploadview'
            }, {
                name: 'fc-icon-tuozhuai1',
                icon: 'fc-icon-tuozhuai1'
            }, {
                name: 'fc-icon-UI',
                icon: 'fc-icon-UI'
            }, {
                name: 'fc-icon-phone',
                icon: 'fc-icon-phone'
            }, {
                name: 'fc-icon-xiangzuo',
                icon: 'fc-icon-xiangzuo'
            }, {
                name: 'fc-icon-navigation',
                icon: 'fc-icon-navigation'
            }, {
                name: 'fc-icon-dingwei',
                icon: 'fc-icon-dingwei'
            }, {
                name: 'fc-icon-riqi',
                icon: 'fc-icon-riqi'
            }, {
                name: 'fc-icon-A',
                icon: 'fc-icon-A'
            }, {
                name: 'fc-icon-yewu',
                icon: 'fc-icon-yewu'
            }, {
                name: 'fc-icon-angular',
                icon: 'fc-icon-angular'
            }, {
                name: 'fc-icon-code',
                icon: 'fc-icon-code'
            }, {
                name: 'fc-icon-angular1',
                icon: 'fc-icon-angular1'
            }, {
                name: 'fc-icon-tianqi',
                icon: 'fc-icon-tianqi'
            }, {
                name: 'fc-icon-fangke',
                icon: 'fc-icon-fangke'
            }, {
                name: 'fc-icon-yanse',
                icon: 'fc-icon-yanse'
            }, {
                name: 'fc-icon-qiapian',
                icon: 'fc-icon-qiapian'
            }, {
                name: 'fc-icon-bookmark',
                icon: 'fc-icon-bookmark'
            }, {
                name: 'fc-icon-shouqi',
                icon: 'fc-icon-shouqi'
            }, {
                name: 'fc-icon-tielu',
                icon: 'fc-icon-tielu'
            }, {
                name: 'fc-icon-fasong',
                icon: 'fc-icon-fasong'
            }, {
                name: 'fc-icon-up',
                icon: 'fc-icon-up'
            }, {
                name: 'fc-icon-xiugaimima',
                icon: 'fc-icon-xiugaimima'
            }, {
                name: 'fc-icon-lajixiang',
                icon: 'fc-icon-lajixiang'
            }, {
                name: 'fc-icon-xinzeng',
                icon: 'fc-icon-xinzeng'
            }, {
                name: 'fc-icon-datatable',
                icon: 'fc-icon-datatable'
            }, {
                name: 'fc-icon-lianggeren',
                icon: 'fc-icon-lianggeren'
            }, {
                name: 'fc-icon-dengdai',
                icon: 'fc-icon-dengdai'
            }, {
                name: 'fc-icon-daochu',
                icon: 'fc-icon-daochu'
            }, {
                name: 'fc-icon-antdesign',
                icon: 'fc-icon-antdesign'
            }, {
                name: 'fc-icon-gengduo',
                icon: 'fc-icon-gengduo'
            }, {
                name: 'fc-icon-rili',
                icon: 'fc-icon-rili'
            }, {
                name: 'fc-icon-gengduo1',
                icon: 'fc-icon-gengduo1'
            }, {
                name: 'fc-icon-xinzeng1',
                icon: 'fc-icon-xinzeng1'
            }, {
                name: 'fc-icon-zan2',
                icon: 'fc-icon-zan2'
            }, {
                name: 'fc-icon-arrowleft',
                icon: 'fc-icon-arrowleft'
            }, {
                name: 'fc-icon-excel',
                icon: 'fc-icon-excel'
            }, {
                name: 'fc-icon-template',
                icon: 'fc-icon-template'
            }, {
                name: 'fc-icon-fenxiang',
                icon: 'fc-icon-fenxiang'
            }, {
                name: 'fc-icon-tupian',
                icon: 'fc-icon-tupian'
            }, {
                name: 'fc-icon-jiancircle',
                icon: 'fc-icon-jiancircle'
            }, {
                name: 'fc-icon-wechart',
                icon: 'fc-icon-wechart'
            }, {
                name: 'fc-icon-callphone',
                icon: 'fc-icon-callphone'
            }, {
                name: 'fc-icon-github',
                icon: 'fc-icon-github'
            }, {
                name: 'fc-icon-tubiao',
                icon: 'fc-icon-tubiao'
            }, {
                name: 'fc-icon-yibiaopan',
                icon: 'fc-icon-yibiaopan'
            }, {
                name: 'fc-icon-zuo1',
                icon: 'fc-icon-zuo1'
            }, {
                name: 'fc-icon-you1',
                icon: 'fc-icon-you1'
            }, {
                name: 'fc-icon-shujubiaoge',
                icon: 'fc-icon-shujubiaoge'
            }, {
                name: 'fc-icon-shangchuan',
                icon: 'fc-icon-shangchuan'
            }, {
                name: 'fc-icon-guanbi',
                icon: 'fc-icon-guanbi'
            }, {
                name: 'fc-icon-daoru',
                icon: 'fc-icon-daoru'
            }, {
                name: 'fc-icon-guanbicircle',
                icon: 'fc-icon-guanbicircle'
            }, {
                name: 'fc-icon-shoucang-active',
                icon: 'fc-icon-shoucang-active'
            }, {
                name: 'fc-icon-warning',
                icon: 'fc-icon-warning'
            }, {
                name: 'fc-icon-localoffer',
                icon: 'fc-icon-localoffer'
            }, {
                name: 'fc-icon-jiacircle',
                icon: 'fc-icon-jiacircle'
            }, {
                name: 'fc-icon-fujian',
                icon: 'fc-icon-fujian'
            }, {
                name: 'fc-icon-bangzhu',
                icon: 'fc-icon-bangzhu'
            }, {
                name: 'fc-icon-email',
                icon: 'fc-icon-email'
            }, {
                name: 'fc-icon-pages',
                icon: 'fc-icon-pages'
            }, {
                name: 'fc-icon-menufold-left',
                icon: 'fc-icon-menufold-left'
            }, {
                name: 'fc-icon-menufold-right',
                icon: 'fc-icon-menufold-right'
            }, {
                name: 'fc-icon-clear',
                icon: 'fc-icon-clear'
            }, {
                name: 'fc-icon-tianqi1',
                icon: 'fc-icon-tianqi1'
            }, {
                name: 'fc-icon-icon',
                icon: 'fc-icon-icon'
            }, {
                name: 'fc-icon-threejs',
                icon: 'fc-icon-threejs'
            }, {
                name: 'fc-icon-xiaoxi',
                icon: 'fc-icon-xiaoxi'
            }];
    };
    FciconComponent.prototype.getIconCode = function (icon) {
        return "<i  nz-icon nzType='" + icon.name + "' nzTheme='" + icon.theme + "'></i>";
    };
    /**
     * 复制图标
     * @param icon
     */
    FciconComponent.prototype.copyed = function (text, event) {
        var _this = this;
        var arg = event.target;
        var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_4___default.a(arg, {
            text: function () { return text; }
        });
        clipboard.on('success', function () {
            // clipboardSuccess()
            _this.message.create('success', "\u590D\u5236\u6210\u529F\uFF01");
            clipboard.destroy();
        });
        clipboard.on('error', function () {
            _this.message.create('error', "\u590D\u5236\u5931\u8D25\uFF01");
            clipboard.destroy();
        });
        clipboard.onClick(event);
    };
    FciconComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }
    ]; };
    FciconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fc-icon',
            template: __webpack_require__(/*! raw-loader!./fcicon.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcicon/fcicon.component.html"),
            styles: ["\n    .fc-icon-show  {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n    .fc-icon-item {\n      width: 150px;\n      height: 100px;\n      transition: all .3s ease-in-out;\n      border-radius: 3px;\n      margin: 3px 0; \n      list-style: none;\n      cursor: pointer;\n      align-items: center;\n      justify-content: center;\n      display: flex;\n      flex-direction: column;\n    }\n    .fc-icon-item:hover {\n      background-color: #40a9ff;\n      color: #fff;\n    }\n    .fc-icon-item:hover .anticon {\n      transform: scale(1.2);\n    }\n    .fc-icon-item .anticon {\n\n    }\n    .fc-icon-item .fc-icon-text {\n      display: block;\n      font-size: 12px;\n      transform: scale(0.8);\n      margin-top: 15px;\n    }\n    \n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
    ], FciconComponent);
    return FciconComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcicon/fcicon.module.ts":
/*!*******************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcicon/fcicon.module.ts ***!
  \*******************************************************/
/*! exports provided: FciconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FciconModule", function() { return FciconModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fcicon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcicon.component */ "./src/feature/fc/fcdemo/fcicon/fcicon.component.ts");
/* harmony import */ var _fcicon_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcicon.route */ "./src/feature/fc/fcdemo/fcicon/fcicon.route.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */






var FciconModule = /** @class */ (function () {
    function FciconModule() {
    }
    FciconModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcicon_route__WEBPACK_IMPORTED_MODULE_6__["Routers"]),
                src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
            ],
            declarations: [
                _fcicon_component__WEBPACK_IMPORTED_MODULE_5__["FciconComponent"]
            ],
            providers: []
        })
    ], FciconModule);
    return FciconModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcicon/fcicon.route.ts":
/*!******************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcicon/fcicon.route.ts ***!
  \******************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fcicon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcicon.component */ "./src/feature/fc/fcdemo/fcicon/fcicon.component.ts");

var Routers = [
    {
        path: 'fcicon',
        component: _fcicon_component__WEBPACK_IMPORTED_MODULE_0__["FciconComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=fcicon-fcicon-module-es5.js.map