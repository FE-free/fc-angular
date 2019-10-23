(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcdemo-fcdemo-module"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcantd/fcantd.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcantd/fcantd.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @Date: 2019-10-11 17:55:22\n * @LastEditors: honghong\n * @LastEditTime: 2019-10-14 16:24:54\n * @Description: \n * @email: 3300536651@qq.com\n -->\n<div class=\"fc-row\">\n  <div nz-row>\n    <p nz-col nzSpan=\"24\">\n      更多组件使用 请跳转到: <a href=\"https://ng.ant.design/docs/introduce/zh\"\n        target=\"_blank\">https://ng.ant.design/docs/introduce/zh</a>\n    </p>\n    <div nz-col nzSpan=\"24\">\n      <nz-alert nzType=\"info\" nzMessage=\"Ant Design 组件\"></nz-alert>\n    </div>\n    <div nz-col nzSpan=\"24\">\n      <div class=\"carousel-wrap\">\n        <nz-carousel nzAutoPlay>\n          <div nz-carousel-content *ngFor=\"let item of carsousels\">\n            <div class=\"carsousel-box\">\n              <img [src]=\"item.src\" width=\"100%\" height=\"300\" />\n            </div>\n          </div>\n        </nz-carousel>\n      </div>\n\n    </div>\n    <div nz-col nzSpan=\"24\">\n      <nz-card nzTitle=\"按钮\" class=\"fc-card\">\n        <button nz-button nzType=\"primary\">Primary</button>\n        <button nz-button nzType=\"default\">Default</button>\n        <button nz-button nzType=\"dashed\">Dashed</button>\n        <button nz-button nzType=\"danger\">Danger</button>\n        <button nz-button nzType=\"link\">Link</button>\n      </nz-card>\n    </div>\n    <div nz-col nzSpan=\"24\">\n      <nz-card nzTitle=\"标签\" class=\"fc-card\">\n        <div>\n          <nz-tag [nzColor]=\"'magenta'\">magenta</nz-tag>\n          <nz-tag [nzColor]=\"'red'\">red</nz-tag>\n          <nz-tag [nzColor]=\"'volcano'\">volcano</nz-tag>\n          <nz-tag [nzColor]=\"'orange'\">orange</nz-tag>\n          <nz-tag [nzColor]=\"'gold'\">gold</nz-tag>\n          <nz-tag [nzColor]=\"'lime'\">lime</nz-tag>\n          <nz-tag [nzColor]=\"'green'\">green</nz-tag>\n          <nz-tag [nzColor]=\"'cyan'\">cyan</nz-tag>\n          <nz-tag [nzColor]=\"'blue'\">blue</nz-tag>\n          <nz-tag [nzColor]=\"'geekblue'\">geekblue</nz-tag>\n          <nz-tag [nzColor]=\"'purple'\">purple</nz-tag>\n        </div>\n        <div>\n          <nz-tag [nzColor]=\"'#f50'\">#f50</nz-tag>\n          <nz-tag [nzColor]=\"'#2db7f5'\">#2db7f5</nz-tag>\n          <nz-tag [nzColor]=\"'#87d068'\">#87d068</nz-tag>\n          <nz-tag [nzColor]=\"'#108ee9'\">#108ee9</nz-tag>\n        </div>\n      </nz-card>\n    </div>\n    <div nz-col nzSpan=\"24\">\n      <nz-card nzTitle=\"警告提示\" class=\"fc-card\">\n        <div>\n          <nz-alert nzType=\"success\" nzMessage=\"Success Text\"></nz-alert>\n          <nz-alert nzType=\"info\" nzMessage=\"Info Text\"></nz-alert>\n          <nz-alert nzType=\"warning\" nzMessage=\"Warning Text\"></nz-alert>\n          <nz-alert nzType=\"error\" nzMessage=\"Error Text\"></nz-alert>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n  <div nz-row nzGutter=\"16\">\n    <div nz-col nzSpan=\"8\">\n      <nz-card nzTitle=\"标题\" class=\"fc-card\">\n        <div>\n          <h1 nz-title>h1. Ant Design</h1>\n          <h2 nz-title>h2. Ant Design</h2>\n          <h3 nz-title>h3. Ant Design</h3>\n          <h4 nz-title>h4. Ant Design</h4>\n        </div>\n      </nz-card>\n    </div>\n    <div nz-col nzSpan=\"8\">\n      <nz-card nzTitle=\"文本组件\" class=\"fc-card\">\n        <div>\n          <span nz-text>Ant Design</span>\n          <br>\n          <span nz-text nzType=\"secondary\">Ant Design</span>\n          <br>\n          <span nz-text nzType=\"warning\">Ant Design</span>\n          <br>\n          <span nz-text nzType=\"danger\">Ant Design</span>\n          <br>\n          <span nz-text nzDisabled>Ant Design</span>\n          <br>\n          <span nz-text><mark>Ant Design</mark></span>\n          <br>\n          <span nz-text><code>Ant Design</code></span>\n          <br>\n          <span nz-text><u>Ant Design</u></span>\n          <br>\n          <span nz-text><del>Ant Design</del></span>\n          <br>\n          <span nz-text><strong>Ant Design</strong></span>\n        </div>\n      </nz-card>\n    </div>\n    <div nz-col nzSpan=\"8\">\n      <nz-card nzTitle=\"文档样例\" class=\"fc-card\">\n        <div>\n          <h2 nz-title>\n            设计资源\n          </h2>\n          <p nz-paragraph>\n            我们提供完善的设计原则、最佳实践和设计资源文件 （<span nz-text><code>Sketch</code></span> 和\n            <span nz-text><code>Axure</code></span>），来帮助业务快速设计出高质 量的产品原型。\n          </p>\n          <article nz-typography>\n            <ul>\n              <li>\n                <a href=\"/docs/spec/proximity\">设计原则</a>\n              </li>\n              <li>\n                <a href=\"/docs/pattern/navigation\">设计模式</a>\n              </li>\n              <li>\n                <a href=\"/docs/resource/download\">设计资源</a>\n              </li>\n            </ul>\n          </article>\n        </div>\n      </nz-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 首页\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-10-14 15:22:15\n -->\n<div nz-row [nzGutter]=\"20\" class=\"fc-row\">\n  <!-- 饼图 -->\n  <div nz-col [nzSpan]=\"12\">\n    <nz-card class=\"fc-chart-card\" nzTitle=\"饼状图\" [nzBordered]=\"false\">\n      <div class=\"fc-chart-box\">\n        <fc-g2pie></fc-g2pie>\n      </div>\n    </nz-card>\n  </div>\n\n\n  <!-- 雷达图 -->\n  <div nz-col [nzSpan]=\"12\">\n    <nz-card class=\"fc-chart-card\" nzTitle=\"雷达图\" [nzBordered]=\"false\">\n      <div class=\"fc-chart-box\">\n        <fc-g2radar fcId=\"chartRadar\" [fcData]=\"chartRadarData\"></fc-g2radar>\n      </div>\n    </nz-card>\n  </div>\n  <!-- 柱状图 -->\n  <div nz-col [nzSpan]=\"24\">\n    <nz-card class=\"fc-chart-card\" nzTitle=\"柱状图\" [nzBordered]=\"false\">\n      <div class=\"fc-chart-box\">\n        <fc-g2bar fcId=\"chartBar2\" [fcData]=\"chartBarData\"></fc-g2bar>\n      </div>\n    </nz-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcicon/fcicon.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcicon/fcicon.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @Date: 2019-10-11 17:55:22\n * @LastEditors: honghong\n * @LastEditTime: 2019-10-12 17:15:20\n * @Description: \n * @email: 3300536651@qq.com\n -->\n<div nz-row class=\"fc-row\">\n  <div nz-col nzSpan=\"24\">\n    <nz-tabset>\n      <nz-tab nzTitle=\"AntDesign\">\n        <ul class=\"fc-icon-show\">\n          <li class=\"fc-icon-item\" *ngFor=\"let icon of icons\" (click)=\"copyed(getIconCode(icon), $event)\">\n            <i class=\"copyIcon\" nz-icon [nzType]=\"icon.name\" [nzTheme]=\"icon.theme\"></i>\n            <span class=\"fc-icon-text\">\n              {{icon.name}}\n            </span>\n          </li>\n        </ul>\n      </nz-tab>\n      <nz-tab nzTitle=\"阿里巴巴矢量图标\">\n        <a href=\"https://www.iconfont.cn\" target=\"_blank\">阿里巴巴矢量图标库官网 </a>\n        <ul class=\"fc-icon-show\">\n          <li class=\"fc-icon-item\" *ngFor=\"let icon of aliIcons\" (click)=\"copyed(getIconCode(icon), $event)\">\n            <i class=\"icon iconfont copyIcon\" [ngClass]=\"icon.name\"></i>\n            <span class=\"fc-icon-text\">\n              {{icon.name}}\n            </span>\n          </li>\n        </ul>\n      </nz-tab>\n    </nz-tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fciframe/fciframe.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fciframe/fciframe.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: iframe\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 12:26:37\n -->\n<iframe style=\"width:100%;height:800px;\" [src]=\"iframeUrl\">\n</iframe>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcspread/fcspread.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcspread/fcspread.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: spread\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 14:42:08\n -->\n<div class=\"page\">\n  <div class=\"fc-toolbar\">\n    <button nz-button nzType=\"primary\">新增</button>\n    <button nz-button nzType=\"primary\">修改</button>\n    <button nz-button nzType=\"primary\">删除</button>\n  </div>\n  <div class=\"fc-spread-content\">\n    <gc-spread-sheets  (workbookInitialized)=\"workbookInit($event)\" [hostStyle]=\"spreadStyle\">\n    </gc-spread-sheets>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctable/fctable.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fctable/fctable.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 表格\n * @email: 3300536651@qq.com\n * @Date: 2019-04-16 15:57:43\n * @LastEditTime: 2019-04-17 12:29:13\n -->\n表格\n"

/***/ }),

/***/ "./src/assets/plugin/spread/gc.spread.sheets.angular.ts":
/*!**************************************************************!*\
  !*** ./src/assets/plugin/spread/gc.spread.sheets.angular.ts ***!
  \**************************************************************/
/*! exports provided: ColumnComponent, WorksheetComponent, SpreadSheetsComponent, SpreadSheetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnComponent", function() { return ColumnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetComponent", function() { return WorksheetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadSheetsComponent", function() { return SpreadSheetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadSheetsModule", function() { return SpreadSheetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/@grapecity/spread-sheets/index.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let ColumnComponent = class ColumnComponent {
    constructor() {
        this.changes = {};
    }
    onAttached(sheet, index) {
        this.sheet = sheet;
        this.index = index;
        this.onColumnChanged();
    }
    onColumnChanged() {
        if (this.sheet) {
            let sheet = this.sheet;
            sheet.suspendPaint();
            sheet.suspendEvent();
            let changes = this.changes;
            for (let changeName in changes) {
                let newValue = changes[changeName].currentValue;
                if (newValue === null || newValue === void 0) {
                    continue;
                }
                switch (changeName) {
                    case 'width':
                        sheet.setColumnWidth(this.index, newValue);
                        break;
                    case 'visible':
                        sheet.setColumnVisible(this.index, newValue);
                        break;
                    case 'resizable':
                        sheet.setColumnResizable(this.index, newValue);
                        break;
                    case 'autoFit':
                        if (newValue) {
                            sheet.autoFitColumn(this.index);
                        }
                        break;
                    case 'style':
                        sheet.setStyle(-1, this.index, newValue);
                        break;
                    case 'headerStyle':
                        sheet.setStyle(-1, this.index, newValue, _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.SheetArea.colHeader);
                        break;
                    case 'cellType':
                        sheet.setCellType(-1, this.index, newValue);
                        break;
                    case 'formatter':
                        sheet.setFormatter(-1, this.index, newValue, _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.SheetArea.viewport);
                        break;
                }
            }
            sheet.resumeEvent();
            sheet.resumePaint();
        }
    }
    ngOnChanges(changes) {
        this.changes = {};
        let changesCache = this.changes;
        for (let changeName in changes) {
            changesCache[changeName] = changes[changeName];
        }
        this.onColumnChanged();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ColumnComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ColumnComponent.prototype, "dataField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ColumnComponent.prototype, "headerText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ColumnComponent.prototype, "visible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ColumnComponent.prototype, "resizable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ColumnComponent.prototype, "autoFit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
], ColumnComponent.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.CellTypes.Base)
], ColumnComponent.prototype, "cellType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
], ColumnComponent.prototype, "headerStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ColumnComponent.prototype, "formatter", void 0);
ColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gc-column',
        template: `
        <ng-content></ng-content>
    `
    })
], ColumnComponent);

let WorksheetComponent = class WorksheetComponent {
    constructor() {
        this.sheet = new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Worksheet("");
    }
    onAttached() {
        let sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        if (this.dataSource) {
            sheet.setDataSource(this.dataSource);
            this.columns.forEach((columnComponent, index) => {
                if (columnComponent.dataField) {
                    sheet.bindColumn(index, {
                        name: columnComponent.dataField,
                        displayName: columnComponent.headerText
                    });
                }
            });
        }
        if (this.columns.length > 0) {
            sheet.setColumnCount(this.columns.length);
            this.columns.forEach((columnComponent, index) => {
                columnComponent.onAttached(this.sheet, index);
            });
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    }
    getSheet() {
        return this.sheet;
    }
    ngOnChanges(changes) {
        let sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        for (let changeName in changes) {
            let newValue = changes[changeName].currentValue;
            if (newValue === null || newValue === void 0) {
                continue;
            }
            switch (changeName) {
                case "rowCount":
                    sheet.setRowCount(newValue);
                    break;
                case "colCount":
                    sheet.setColumnCount(newValue);
                    break;
                case "name":
                    sheet.name(newValue);
                    break;
                case "frozenColumnCount":
                    sheet.frozenColumnCount(newValue);
                    break;
                case "frozenRowCount":
                    sheet.frozenRowCount(newValue);
                    break;
                case "frozenTrailingRowCount":
                    sheet.frozenTrailingRowCount(newValue);
                    break;
                case "frozenTrailingColumnCount":
                    sheet.frozenTrailingColumnCount(newValue);
                    break;
                case "selectionPolicy":
                    sheet.selectionPolicy(newValue);
                    break;
                case "selectionUnit":
                    sheet.selectionUnit(newValue);
                    break;
                case "zoom":
                    sheet.zoom(newValue);
                    break;
                case "currentTheme":
                    sheet.currentTheme(newValue);
                    break;
                case "defaultStyle":
                    sheet.setDefaultStyle(newValue);
                    break;
                case "rowOutlineInfo":
                    newValue.forEach((item) => {
                        sheet.rowOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "columnOutlineInfo":
                    newValue.forEach((item) => {
                        sheet.columnOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "showRowOutline":
                    sheet.showRowOutline(newValue);
                    break;
                case "showColumnOutline":
                    sheet.showColumnOutline(newValue);
                    break;
                case "dataSource":
                    sheet.setDataSource(newValue);
                    break;
                case "autoGenerateColumns":
                    sheet[changeName] = newValue;
                default:
                    sheet.options[changeName] = newValue;
            }
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    }
    ngAfterViewInit() {
        this.columns.changes.subscribe(() => { this.onAttached(); });
    }
    ngOnDestroy() {
        let sheet = this.sheet;
        let spread = sheet ? sheet.getParent() : null;
        if (spread) {
            let sheetIndex = spread.getSheetIndex(sheet.name());
            if (sheetIndex !== void 0) {
                spread.removeSheet(sheetIndex);
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(ColumnComponent),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], WorksheetComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "rowCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "colCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WorksheetComponent.prototype, "dataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenColumnCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenRowCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingRowCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingColumnCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "allowCellOverflow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "frozenlineColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "sheetTabColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "selectionPolicy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "selectionUnit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "zoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "currentTheme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "clipBoardOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "rowHeaderVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "colHeaderVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoTextIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoTextIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "isProtected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "showRowOutline", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "showColumnOutline", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "selectionBackColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "selectionBorderColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
], WorksheetComponent.prototype, "defaultStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WorksheetComponent.prototype, "rowOutlineInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WorksheetComponent.prototype, "columnOutlineInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "autoGenerateColumns", void 0);
WorksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gc-worksheet',
        template: `
        <ng-content></ng-content>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorksheetComponent);

let SpreadSheetsComponent = class SpreadSheetsComponent {
    constructor(elRef) {
        this.style = {
            width: '800px',
            height: '600px'
        };
        // outputs events
        this.workbookInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.validationError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.enterCell = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.leaveCell = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.topRowChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.leftColumnChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.invalidOperation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeFiltering = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeFiltered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tableFiltering = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tableFiltered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeSorted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardPasting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardPasted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnWidthChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnWidthChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowHeightChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowHeightChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragDropBlock = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragDropBlockCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragFillBlock = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragFillBlockCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editStarting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnding = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeGroupStateChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeGroupStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectionChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetTabDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetNameChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetNameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.userZooming = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.userFormulaEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeSheetChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeSheetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sparklineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editorStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pictureChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectRemoving = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pictureSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.touchToolStripOpening = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentRemoving = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.slicerChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.elRef = elRef;
    }
    ngAfterViewInit() {
        let elRef = this.elRef;
        let dom = elRef.nativeElement;
        let hostElement = dom.querySelector('div');
        this.spread = new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Workbook(hostElement, { sheetCount: 0 });
        this.setSpreadOptions();
        this.initSheets();
        this.sheets.changes.subscribe((changes) => { this.onSheetsChanged(changes); }); // may change sheets using bingidng.
        this.bindCustomEvent(this.spread);
        this.workbookInitialized.emit({ spread: this.spread });
    }
    onSheetsChanged(sheetComponents) {
        let spread = this.spread;
        spread.suspendPaint();
        if (sheetComponents) {
            sheetComponents.forEach((sheetComponent, index) => {
                let sheet = sheetComponent.getSheet();
                if (sheet && !sheet.getParent()) {
                    spread.addSheet(index, sheetComponent.getSheet());
                    sheetComponent.onAttached();
                }
            });
        }
        spread.resumePaint();
    }
    initSheets() {
        let sheets = this.sheets;
        let spread = this.spread;
        spread.clearSheets();
        sheets.forEach((sheetComponent, index) => {
            spread.addSheet(index, sheetComponent.getSheet());
            sheetComponent.onAttached();
        });
        // when there is no sheet, add default sheet to spread
        if (sheets.length === 0) {
            this.spread.addSheet(0, new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Worksheet(""));
        }
    }
    bindCustomEvent(spread) {
        let customEventNameSpace = '.ng';
        let events = ['ValidationError', 'CellClick', 'CellDoubleClick', 'EnterCell',
            'LeaveCell', 'ValueChanged', 'TopRowChanged', 'LeftColumnChanged',
            'InvalidOperation', 'RangeFiltering', 'RangeFiltered', 'TableFiltering',
            'TableFiltered', 'RangeSorting', 'RangeSorted', 'ClipboardChanging',
            'ClipboardChanged', 'ClipboardPasting', 'ClipboardPasted', 'ColumnWidthChanging',
            'ColumnWidthChanged', 'RowHeightChanging', 'RowHeightChanged', 'DragDropBlock',
            'DragDropBlockCompleted', 'DragFillBlock', 'DragFillBlockCompleted', 'EditStarting',
            'EditChange', 'EditEnding', 'EditEnd', 'EditEnded', 'RangeGroupStateChanging',
            'RangeGroupStateChanged', 'SelectionChanging', 'SelectionChanged', 'SheetTabClick',
            'SheetTabDoubleClick', 'SheetNameChanging', 'SheetNameChanged',
            'UserZooming', 'UserFormulaEntered', 'CellChanged', 'ColumnChanged',
            'RowChanged', 'ActiveSheetChanging', 'ActiveSheetChanged',
            'SparklineChanged',
            'RangeChanged', 'ButtonClicked', 'EditorStatusChanged',
            'FloatingObjectChanged', 'FloatingObjectSelectionChanged', 'PictureChanged', 'FloatingObjectRemoving',
            'FloatingObjectRemoved', 'PictureSelectionChanged',
            'FloatingObjectLoaded', 'TouchToolStripOpening', 'CommentChanged', 'CommentRemoving', 'CommentRemoved', 'SlicerChanged'];
        events.forEach((event) => {
            spread.bind(event + customEventNameSpace, (event, data) => {
                let eventType = event.type;
                let camelCaseEvent = eventType[0].toLowerCase() + eventType.substr(1);
                this[camelCaseEvent].emit(data);
            });
        });
    }
    setSpreadOptions() {
        let spread = this.spread;
        if (!this.spread) {
            return;
        }
        spread.suspendEvent();
        spread.suspendPaint();
        let options = this.spreadOptions;
        options && options.forEach((option) => {
            if (option.name === 'name') {
                spread.name = option.value;
            }
            else {
                spread.options[option.name] = option.value;
            }
        });
        spread.resumePaint();
        spread.resumeEvent();
    }
    ngOnChanges(changes) {
        let options = [];
        for (let changeName in changes) {
            let newValue = changes[changeName].currentValue;
            if (newValue !== null && newValue !== void 0) {
                switch (changeName) {
                    case 'hostStyle':
                        this.style = newValue;
                        break;
                    case 'hostClass':
                        break;
                    default:
                        options.push({ name: changeName, value: newValue });
                }
            }
        }
        this.spreadOptions = options;
        this.setSpreadOptions();
    }
    ngOnDestroy() {
        this.spread.destroy();
    }
};
SpreadSheetsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserResize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserZoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserEditFormula", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragFill", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragDrop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "highlightInvalidData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "newTabVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabStripVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabEditable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "autoFitType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "referenceStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "backColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "grayAreaBackColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showVerticalScrollbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showHorizontalScrollbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "hostStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "hostClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "backgroundImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "backgroundImageLayout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "showScrollTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "showResizeTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragDropTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragFillTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "workbookInitialized", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "validationError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "cellClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "cellDoubleClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "enterCell", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "leaveCell", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "valueChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "topRowChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "leftColumnChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "invalidOperation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltering", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltering", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorting", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasting", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlock", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlockCompleted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlock", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlockCompleted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editStarting", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabDoubleClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "userZooming", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "userFormulaEntered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "cellChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "columnChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rowChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sparklineChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "buttonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editorStatusChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectSelectionChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoving", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureSelectionChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectLoaded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "touchToolStripOpening", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "commentChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoving", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "slicerChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(WorksheetComponent),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], SpreadSheetsComponent.prototype, "sheets", void 0);
SpreadSheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gc-spread-sheets',
        template: `
        <div [ngStyle]="style" [ngClass]="hostClass">
            <ng-content></ng-content>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], SpreadSheetsComponent);

let SpreadSheetsModule = class SpreadSheetsModule {
};
SpreadSheetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        declarations: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent],
        exports: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent]
    })
], SpreadSheetsModule);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcantd/fcantd.component.ts":
/*!**********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcantd/fcantd.component.ts ***!
  \**********************************************************/
/*! exports provided: FcantdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcantdComponent", function() { return FcantdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @Date: 2019-10-11 17:55:30
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 16:15:13
 * @Description:
 * @email: 3300536651@qq.com
 */


let FcantdComponent = class FcantdComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.carsousels = [
            {
                id: 1,
                src: 'assets/image/1.jpeg'
            },
            {
                id: 2,
                src: 'assets/image/2.jpg'
            },
            {
                id: 3,
                src: 'assets/image/3.jpg'
            },
            {
                id: 4,
                src: 'assets/image/4.jpg'
            },
            {
                id: 5,
                src: 'assets/image/5.jpg'
            }
        ];
    }
};
FcantdComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FcantdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-antd',
        template: __webpack_require__(/*! raw-loader!./fcantd.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcantd/fcantd.component.html"),
        styles: ["\n      [nz-button] {\n        margin-right: 8px;\n        margin-bottom: 12px;\n      }\n      .carousel-wrap {\n        width: 100%;\n        height: 300px;\n      }\n      [nz-carousel-content]{\n        height:300px;\n        text-align: center;\n        background: #364d79;\n        color: #fff;\n        overflow: hidden;\n      }\n      .carsousel-box {\n        width: 100%;\n        height:300px;\n      }\n      [nz-carousel-content] img {\n        object-fit: cover;\n      }\n      .ant-tag {\n        margin-bottom: 8px;\n      }\n      nz-alert {\n        margin-bottom: 16px;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FcantdComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts":
/*!**************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts ***!
  \**************************************************************/
/*! exports provided: Fcg2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcg2Component", function() { return Fcg2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 新增
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 15:56:20
 */


let Fcg2Component = class Fcg2Component {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // 雷达图数据
        this.chartRadarData = [
            {
                item: 'Design',
                a: 70,
                b: 30
            }, {
                item: 'Development',
                a: 60,
                b: 70
            }, {
                item: 'Marketing',
                a: 50,
                b: 60
            }, {
                item: 'Users',
                a: 40,
                b: 50
            }, {
                item: 'Test',
                a: 60,
                b: 70
            }, {
                item: 'Language',
                a: 70,
                b: 50
            }, {
                item: 'Technology',
                a: 50,
                b: 40
            }, {
                item: 'Support',
                a: 30,
                b: 40
            }, {
                item: 'Sales',
                a: 60,
                b: 40
            }, {
                item: 'UX',
                a: 50,
                b: 60
            }
        ];
        // 柱状图的数据
        this.chartBarData = [
            {
                year: '1 月',
                sales: 58
            },
            {
                year: '2 月',
                sales: 52
            },
            {
                year: '3 月',
                sales: 61
            },
            {
                year: '4 月',
                sales: 145
            },
            {
                year: '5 月',
                sales: 148
            },
            {
                year: '6 月',
                sales: 138
            },
            {
                year: '7 月',
                sales: 178
            },
            {
                year: '8 月',
                sales: 38
            },
            {
                year: '9 月',
                sales: 58
            },
            {
                year: '10 月',
                sales: 38
            },
            {
                year: '11 月',
                sales: 88
            },
            {
                year: '12 月',
                sales: 38
            }
        ];
    }
};
Fcg2Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Fcg2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-g2',
        template: __webpack_require__(/*! raw-loader!./fcg2.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.html"),
        styles: ["\n  .fc-chart-card {\n    margin-bottom : 20px;\n  }\n  .fc-chart-box {\n    width: 80%;\n  }\n  .g2-guide-html {\n    width: 100px;\n    height: 80px;\n    vertical-align: middle;\n    text-align: center;\n    line-height: 0.2;\n  }\n  .g2-guide-html .title {\n      font-size: 12px;\n      color: #8c8c8c;\n      font-weight: 300;\n  }\n  .g2-guide-html .value {\n      font-size: 32px;\n      color: #000;\n      font-weight: bold;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], Fcg2Component);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcdemo.module.ts":
/*!************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcdemo.module.ts ***!
  \************************************************/
/*! exports provided: FcdemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcdemoModule", function() { return FcdemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_assets_plugin_spread_gc_spread_sheets_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/plugin/spread/gc.spread.sheets.angular */ "./src/assets/plugin/spread/gc.spread.sheets.angular.ts");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fcantd_fcantd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcantd/fcantd.component */ "./src/feature/fc/fcdemo/fcantd/fcantd.component.ts");
/* harmony import */ var _fcchart_fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fcchart/fcg2/fcg2.component */ "./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts");
/* harmony import */ var _fcdemo_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fcdemo.route */ "./src/feature/fc/fcdemo/fcdemo.route.ts");
/* harmony import */ var _fcicon_fcicon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fcicon/fcicon.component */ "./src/feature/fc/fcdemo/fcicon/fcicon.component.ts");
/* harmony import */ var _fciframe_fciframe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fciframe/fciframe.component */ "./src/feature/fc/fcdemo/fciframe/fciframe.component.ts");
/* harmony import */ var _fcspread_fcspread_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fcspread/fcspread.component */ "./src/feature/fc/fcdemo/fcspread/fcspread.component.ts");
/* harmony import */ var _fctable_fctable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fctable/fctable.component */ "./src/feature/fc/fcdemo/fctable/fctable.component.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */












let FcdemoModule = class FcdemoModule {
};
FcdemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcdemo_route__WEBPACK_IMPORTED_MODULE_8__["Routers"]),
            src_assets_plugin_spread_gc_spread_sheets_angular__WEBPACK_IMPORTED_MODULE_3__["SpreadSheetsModule"],
            src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_4__["FccomponentModule"]
        ],
        declarations: [
            _fcspread_fcspread_component__WEBPACK_IMPORTED_MODULE_11__["FcspreadComponent"],
            _fctable_fctable_component__WEBPACK_IMPORTED_MODULE_12__["FctableComponent"],
            _fciframe_fciframe_component__WEBPACK_IMPORTED_MODULE_10__["FciframeComponent"],
            _fcchart_fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_7__["Fcg2Component"],
            _fcantd_fcantd_component__WEBPACK_IMPORTED_MODULE_6__["FcantdComponent"],
            _fcicon_fcicon_component__WEBPACK_IMPORTED_MODULE_9__["FciconComponent"]
        ],
        providers: []
    })
], FcdemoModule);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcdemo.route.ts":
/*!***********************************************!*\
  !*** ./src/feature/fc/fcdemo/fcdemo.route.ts ***!
  \***********************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fcantd_fcantd_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcantd/fcantd.component */ "./src/feature/fc/fcdemo/fcantd/fcantd.component.ts");
/* harmony import */ var _fcchart_fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcchart/fcg2/fcg2.component */ "./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts");
/* harmony import */ var _fcicon_fcicon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fcicon/fcicon.component */ "./src/feature/fc/fcdemo/fcicon/fcicon.component.ts");
/* harmony import */ var _fciframe_fciframe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fciframe/fciframe.component */ "./src/feature/fc/fcdemo/fciframe/fciframe.component.ts");
/* harmony import */ var _fcspread_fcspread_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fcspread/fcspread.component */ "./src/feature/fc/fcdemo/fcspread/fcspread.component.ts");
/* harmony import */ var _fctable_fctable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fctable/fctable.component */ "./src/feature/fc/fcdemo/fctable/fctable.component.ts");






const Routers = [
    {
        path: 'fctable',
        component: _fctable_fctable_component__WEBPACK_IMPORTED_MODULE_5__["FctableComponent"]
    },
    {
        path: 'fciframe',
        component: _fciframe_fciframe_component__WEBPACK_IMPORTED_MODULE_3__["FciframeComponent"]
    },
    {
        path: 'fcg2',
        component: _fcchart_fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_1__["Fcg2Component"]
    },
    {
        path: 'fcantd',
        component: _fcantd_fcantd_component__WEBPACK_IMPORTED_MODULE_0__["FcantdComponent"]
    },
    {
        path: 'fcicon',
        component: _fcicon_fcicon_component__WEBPACK_IMPORTED_MODULE_2__["FciconComponent"]
    },
    {
        path: 'fcspread',
        component: _fcspread_fcspread_component__WEBPACK_IMPORTED_MODULE_4__["FcspreadComponent"]
    },
    {
        path: '',
        loadChildren: './fctemplate/fctemplate.module#FctemplateModule'
    }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/*
 * @Author: honghong
 * @Date: 2019-10-12 09:28:32
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-12 14:27:29
 * @Description:
 * @email: 3300536651@qq.com
 */






const antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__;
let FciconComponent = class FciconComponent {
    constructor(router, activedRoute, message) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.message = message;
    }
    ngOnInit() {
        this.icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
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
    }
    getIconCode(icon) {
        return `<i  nz-icon nzType='${icon.name}' nzTheme='${icon.theme}'></i>`;
    }
    /**
     * 复制图标
     * @param icon
     */
    copyed(text, event) {
        let arg = event.target;
        const clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_4___default.a(arg, {
            text: () => text
        });
        clipboard.on('success', () => {
            // clipboardSuccess()
            this.message.create('success', `复制成功！`);
            clipboard.destroy();
        });
        clipboard.on('error', () => {
            this.message.create('error', `复制失败！`);
            clipboard.destroy();
        });
        clipboard.onClick(event);
    }
};
FciconComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }
];
FciconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-icon',
        template: __webpack_require__(/*! raw-loader!./fcicon.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcicon/fcicon.component.html"),
        styles: ["\n    .fc-icon-show  {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n    .fc-icon-item {\n      width: 150px;\n      height: 100px;\n      transition: all .3s ease-in-out;\n      border-radius: 3px;\n      margin: 3px 0; \n      list-style: none;\n      cursor: pointer;\n      align-items: center;\n      justify-content: center;\n      display: flex;\n      flex-direction: column;\n    }\n    .fc-icon-item:hover {\n      background-color: #40a9ff;\n      color: #fff;\n    }\n    .fc-icon-item:hover .anticon {\n      transform: scale(1.2);\n    }\n    .fc-icon-item .anticon {\n\n    }\n    .fc-icon-item .fc-icon-text {\n      display: block;\n      font-size: 12px;\n      transform: scale(0.8);\n      margin-top: 15px;\n    }\n    \n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
], FciconComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fciframe/fciframe.component.ts":
/*!**************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fciframe/fciframe.component.ts ***!
  \**************************************************************/
/*! exports provided: FciframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FciframeComponent", function() { return FciframeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: iframe
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-15 14:03:06
 */



let FciframeComponent = class FciframeComponent {
    constructor(router, activedRoute, sanitizer) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.sanitizer = sanitizer;
        let url = 'https://ng.ant.design/components/form/zh';
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
FciframeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
FciframeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fciframe',
        template: __webpack_require__(/*! raw-loader!./fciframe.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fciframe/fciframe.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], FciframeComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcspread/fcspread.component.ts":
/*!**************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcspread/fcspread.component.ts ***!
  \**************************************************************/
/*! exports provided: FcspreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcspreadComponent", function() { return FcspreadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: spread
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-16 10:43:11
 */


let FcspreadComponent = class FcspreadComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // spread 样式
        this.spreadStyle = {
            width: '100%',
            height: '100%'
        };
    }
    /**
     * @description spreadJs 初始化
     * @param args
     */
    workbookInit(args) {
        this.spread = args.spread;
    }
};
FcspreadComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FcspreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fcspread',
        template: __webpack_require__(/*! raw-loader!./fcspread.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcspread/fcspread.component.html"),
        styles: ["\n      .fc-spread-content {\n        width: 100%;\n        height: 700px;\n        padding: 10px;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FcspreadComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctable/fctable.component.ts":
/*!************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctable/fctable.component.ts ***!
  \************************************************************/
/*! exports provided: FctableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctableComponent", function() { return FctableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description:表格
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:29:17
 */


let FctableComponent = class FctableComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
FctableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FctableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fctable',
        template: __webpack_require__(/*! raw-loader!./fctable.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctable/fctable.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FctableComponent);



/***/ })

}]);
//# sourceMappingURL=fcdemo-fcdemo-module-es2015.js.map