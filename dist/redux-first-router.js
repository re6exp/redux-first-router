(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReduxFirstRouter"] = factory();
	else
		root["ReduxFirstRouter"] = factory();
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectRoutes = __webpack_require__(7);

Object.defineProperty(exports, 'connectRoutes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_connectRoutes).default;
  }
});
Object.defineProperty(exports, 'push', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.push;
  }
});
Object.defineProperty(exports, 'replace', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.replace;
  }
});
Object.defineProperty(exports, 'back', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.back;
  }
});
Object.defineProperty(exports, 'next', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.next;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.go;
  }
});
Object.defineProperty(exports, 'canGo', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.canGo;
  }
});
Object.defineProperty(exports, 'canGoBack', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.canGoBack;
  }
});
Object.defineProperty(exports, 'canGoForward', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.canGoForward;
  }
});
Object.defineProperty(exports, 'prevPath', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.prevPath;
  }
});
Object.defineProperty(exports, 'nextPath', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.nextPath;
  }
});
Object.defineProperty(exports, 'history', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.history;
  }
});
Object.defineProperty(exports, 'createHref', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.createHref;
  }
});
Object.defineProperty(exports, 'scrollBehavior', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.scrollBehavior;
  }
});
Object.defineProperty(exports, 'updateScroll', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.updateScroll;
  }
});
Object.defineProperty(exports, 'selectLocationState', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.selectLocationState;
  }
});
Object.defineProperty(exports, 'getOptions', {
  enumerable: true,
  get: function get() {
    return _connectRoutes.getOptions;
  }
});

var _redirect = __webpack_require__(19);

Object.defineProperty(exports, 'redirect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_redirect).default;
  }
});

var _actionToPath = __webpack_require__(8);

Object.defineProperty(exports, 'actionToPath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionToPath).default;
  }
});

var _pathToAction = __webpack_require__(5);

Object.defineProperty(exports, 'pathToAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pathToAction).default;
  }
});

var _isLocationAction = __webpack_require__(9);

Object.defineProperty(exports, 'isLocationAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isLocationAction).default;
  }
});

var _setKind = __webpack_require__(10);

Object.defineProperty(exports, 'setKind', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_setKind).default;
  }
});

var _createHistory = __webpack_require__(20);

Object.defineProperty(exports, 'createBrowserHistory', {
  enumerable: true,
  get: function get() {
    return _createHistory.createBrowserHistory;
  }
});
Object.defineProperty(exports, 'createMemoryHistory', {
  enumerable: true,
  get: function get() {
    return _createHistory.createMemoryHistory;
  }
});
Object.defineProperty(exports, 'createHashHistory', {
  enumerable: true,
  get: function get() {
    return _createHistory.createHashHistory;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOT_FOUND = exports.NOT_FOUND = '@@redux-first-router/NOT_FOUND';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (pathname, action, prev, history, kind) {
  var type = action.type,
      _action$payload = action.payload,
      payload = _action$payload === undefined ? {} : _action$payload,
      _action$meta = action.meta,
      meta = _action$meta === undefined ? {} : _action$meta;

  var query = action.query || meta.query || payload.query;
  var parts = pathname.split('?');
  var search = parts[1];

  return _extends({}, action, action.query && { query: query }, {
    type: type,
    payload: payload,
    meta: _extends({}, meta, meta.query && { query: query }, {
      location: {
        current: _extends({
          pathname: parts[0],
          type: type,
          payload: payload
        }, query && { query: query, search: search }),
        prev: prev,
        kind: kind,
        history: history
      }
    })
  });
};

var nestHistory = exports.nestHistory = function nestHistory(history) {
  return history.entries ? {
    basename: history.basename,
    index: history.index,
    length: history.entries.length,
    entries: history.entries.slice(0) // history.entries.map(entry => entry.pathname)
  } : undefined;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
  return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(33);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(34);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _pathToRegexp = __webpack_require__(18);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _index = __webpack_require__(0);

var _objectValues = __webpack_require__(28);

var _objectValues2 = _interopRequireDefault(_objectValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (pathname, routesMap, serializer) {
  var parts = pathname.split('?');
  var search = parts[1];
  var query = search && serializer && serializer.parse(search);
  var routes = (0, _objectValues2.default)(routesMap);
  var routeTypes = Object.keys(routesMap);

  pathname = parts[0];

  var i = 0;
  var match = void 0;
  var keys = [];

  while (!match && i < routes.length) {
    keys.length = 0; // empty the array and start over
    var routePath = routes[i].path || routes[i]; // route may be an object containing a route or a route string itself
    var reg = (0, _pathToRegexp2.default)(routePath, keys);
    match = reg.exec(pathname);
    i++;
  }

  if (match) {
    i--;

    var capitalizedWords = _typeof(routes[i]) === 'object' && routes[i].capitalizedWords;
    var fromPath = routes[i] && typeof routes[i].fromPath === 'function' && routes[i].fromPath;
    var type = routeTypes[i];

    var payload = keys.reduce(function (payload, key, index) {
      var value = match && match[index + 1]; // item at index 0 is the overall match, whereas those after correspond to the key's index

      value = typeof value === 'string' && !value.match(/^\s*$/) && !isNaN(value) // check that value is not a blank string, and is numeric
      ? parseFloat(value) // make sure pure numbers aren't passed to reducers as strings
      : value;

      value = capitalizedWords && typeof value === 'string' ? value.replace(/-/g, ' ').replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      }) // 'my-category' -> 'My Category'
      : value;

      value = fromPath && typeof value === 'string' ? fromPath(value, key.name) : value;

      payload[key.name] = value;

      return payload;
    }, {});

    return { type: type, payload: payload, meta: query ? { query: query } : {} };
  }

  // This will basically will only end up being called if the developer is manually calling history.push().
  // Or, if visitors visit an invalid URL, the developer can use the NOT_FOUND type to show a not-found page to
  var meta = _extends({ notFoundPath: pathname }, query ? { query: query } : {});
  return { type: _index.NOT_FOUND, payload: {}, meta: meta };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
     true ? (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time') : void 0;

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = exports.selectLocationState = exports.updateScroll = exports.scrollBehavior = exports.history = exports.nextPath = exports.prevPath = exports.canGoForward = exports.canGoBack = exports.canGo = exports.go = exports.next = exports.back = exports.replace = exports.push = exports.createHref = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _pathToAction2 = __webpack_require__(5);

var _pathToAction3 = _interopRequireDefault(_pathToAction2);

var _nestAction = __webpack_require__(1);

var _isLocationAction = __webpack_require__(9);

var _isLocationAction2 = _interopRequireDefault(_isLocationAction);

var _isServer = __webpack_require__(11);

var _isServer2 = _interopRequireDefault(_isServer);

var _isReactNative = __webpack_require__(27);

var _isReactNative2 = _interopRequireDefault(_isReactNative);

var _changePageTitle = __webpack_require__(25);

var _changePageTitle2 = _interopRequireDefault(_changePageTitle);

var _attemptCallRouteThunk = __webpack_require__(24);

var _attemptCallRouteThunk2 = _interopRequireDefault(_attemptCallRouteThunk);

var _createThunk = __webpack_require__(26);

var _createThunk2 = _interopRequireDefault(_createThunk);

var _pathnamePlusSearch = __webpack_require__(29);

var _pathnamePlusSearch2 = _interopRequireDefault(_pathnamePlusSearch);

var _historyCreateAction = __webpack_require__(21);

var _historyCreateAction2 = _interopRequireDefault(_historyCreateAction);

var _middlewareCreateAction = __webpack_require__(22);

var _middlewareCreateAction2 = _interopRequireDefault(_middlewareCreateAction);

var _middlewareCreateNotFoundAction = __webpack_require__(23);

var _middlewareCreateNotFoundAction2 = _interopRequireDefault(_middlewareCreateNotFoundAction);

var _createLocationReducer = __webpack_require__(30);

var _createLocationReducer2 = _interopRequireDefault(_createLocationReducer);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __DEV__ = "development" !== 'production';

/** PRIMARY EXPORT - `connectRoutes(history, routeMap, options)`:
 *
 *  PURPOSE: to provide set-it-forget-it syncing of actions to the address bar and vice
 *  versa, using the pairing of action types to express-style routePaths bi-directionally.
 *
 *  EXAMPLE:
 *  with routeMap `{ FOO: '/foo/:paramName' }`,
 *
 *  pathname '/foo/bar' would become:
 *  `{ type: 'FOO', payload: { paramName: 'bar' } }`
 *
 *  AND
 *
 *  action `{ type: 'FOO', payload: { paramName: 'bar' } }`
 *  becomes: pathname '/foo/bar'
 *
 *
 *  HOW: Firstly, the middleware listens to received actions and then converts them to the
 *  pathnames it applies to the address bar (via `history.push({ pathname })`. It also formats
 *  the action to be location-aware, primarily by including a matching pathname, which the
 *  location reducer listens to, and which user reducers can also make use of.
 *
 *  However, user reducers typically only need to  be concerned with the type
 *  and payload like they are accustomed to. That's the whole purpose of this package.
 *  The idea is by matching action types to routePaths, it's set it and forget it!
 *
 *  Secondly, a history listener listens to URL changes and dispatches actions with
 *  types and payloads that match the pathname. Hurray! Browse back/next buttons now work!
 *
 *  Both the history listener and middleware are made to not get into each other's way, i.e.
 *  avoiding double dispatching and double address bar changes.
 *
 *
 *  VERY IMPORTANT NOTE ON SSR: if you're wondering, `connectRoutes()` when called returns
 *  functions in a closure that provide access to variables in a private
 *  "per instance" fashion in order to be used in SSR without leaking
 *  state between SSR requests :).
 *
 *  As much as possible has been refactored out of this file into pure or
 *  near-pure utility functions.
*/

exports.default = function (history) {
  var routesMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (__DEV__) {
    if (!history) {
      throw new Error('[redux-first-router] invalid `history` agument. Using the \'history\' package on NPM,\n        please provide a `history` object as a second parameter. The object will be the\n        return of createBrowserHistory() (or in React Native or Node: createMemoryHistory()).\n        See: https://github.com/mjackson/history');
    }

    if (options.restoreScroll && typeof options.restoreScroll !== 'function') {
      throw new Error('[redux-first-router] invalid `restoreScroll` option. Using\n        https://github.com/faceyspacey/redux-first-router-restore-scroll\n        please call `restoreScroll` and assign it the option key\n        of the same name.');
    }
  }

  /** INTERNAL ENCLOSED STATE (PER INSTANCE FOR SSR!) */

  // very important: used for comparison to determine address bar changes
  var currentPath = (0, _pathnamePlusSearch2.default)(history.location);

  var prevLocation = {
    // maintains previous location state in location reducer
    pathname: '',
    type: '',
    payload: {}
  };

  var _options$notFoundPath = options.notFoundPath,
      notFoundPath = _options$notFoundPath === undefined ? '/not-found' : _options$notFoundPath,
      _options$scrollTop = options.scrollTop,
      scrollTop = _options$scrollTop === undefined ? false : _options$scrollTop,
      location = options.location,
      title = options.title,
      onBeforeChange = options.onBeforeChange,
      onAfterChange = options.onAfterChange,
      onBackNext = options.onBackNext,
      restoreScroll = options.restoreScroll,
      _options$initialDispa = options.initialDispatch,
      shouldPerformInitialDispatch = _options$initialDispa === undefined ? true : _options$initialDispa,
      querySerializer = options.querySerializer;


  var selectLocationState = typeof location === 'function' ? location : location ? function (state) {
    return state[location];
  } : function (state) {
    return state.location;
  };

  var selectTitleState = typeof title === 'function' ? title : title ? function (state) {
    return state[title];
  } : function (state) {
    return state.title;
  };

  var scrollBehavior = restoreScroll && restoreScroll(history);

  var _pathToAction = (0, _pathToAction3.default)(currentPath, routesMap),
      type = _pathToAction.type,
      payload = _pathToAction.payload,
      meta = _pathToAction.meta;

  var INITIAL_LOCATION_STATE = (0, _createLocationReducer.getInitialState)(currentPath, meta, type, payload, routesMap, history);

  var prevState = INITIAL_LOCATION_STATE; // used only to pass  as 1st arg to `scrollBehavior.updateScroll` if used
  var nextState = {}; // used as 2nd arg to `scrollBehavior.updateScroll` and to change `document.title`
  var prevLength = 1; // used by `historyCreateAction` to calculate if moving along history.entries track

  var reducer = (0, _createLocationReducer2.default)(INITIAL_LOCATION_STATE, routesMap);
  var thunk = (0, _createThunk2.default)(routesMap, selectLocationState);
  var initialDispatch = function initialDispatch() {
    return _initialDispatch && _initialDispatch();
  };

  var windowDocument = (0, _changePageTitle.getDocument)(); // get plain object for window.document if server side

  var navigators = void 0;
  var patchNavigators = void 0;
  var actionToNavigation = void 0;
  var navigationToAction = void 0;

  if (options.navigators) {
    // redux-first-router-navigation reformats the `navigators` option
    // to have the navigators nested one depth deeper, so as to include
    // the various helper functions from its package
    if (__DEV__ && !options.navigators.navigators) {
      throw new Error('[redux-first-router] invalid `navigators` option. Pass your map\n        of navigators to the default import from \'redux-first-router-navigation\'.\n        Don\'t forget: the keys are your redux state keys.');
    }

    navigators = options.navigators.navigators;
    patchNavigators = options.navigators.patchNavigators;
    actionToNavigation = options.navigators.actionToNavigation;
    navigationToAction = options.navigators.navigationToAction;

    patchNavigators(navigators);
  }

  /** MIDDLEWARE
   *  1)  dispatches actions with location info in the `meta` key by matching the received action
   *      type + payload to express style routePaths (which also results in location reducer state updating)
   *  2)  changes the address bar url and page title if the currentPathName changes, while
   *      avoiding collisions with simultaneous browser history changes
  */

  var middleware = function middleware(store) {
    return function (next) {
      return function (action) {
        var navigationAction = void 0;

        if (navigators && action.type.indexOf('Navigation/') === 0) {
          var _navigationToAction = navigationToAction(navigators, store, routesMap, action);

          navigationAction = _navigationToAction.navigationAction;
          action = _navigationToAction.action;
        }

        var route = routesMap[action.type];

        if (action.error && (0, _isLocationAction2.default)(action)) {
          if (__DEV__) {
            console.warn('redux-first-router: location update did not dispatch as your action has an error.');
          }
        } else if (action.type === _index.NOT_FOUND && !(0, _isLocationAction2.default)(action)) {
          // user decided to dispatch `NOT_FOUND`, so we fill in the missing location info
          action = (0, _middlewareCreateNotFoundAction2.default)(action, store.getState().location, prevLocation, history, notFoundPath);
        } else if (route && !(0, _isLocationAction2.default)(action)) {
          // THE MAGIC: dispatched action matches a connected type, so we generate a
          // location-aware action and also as a result update location reducer state.
          action = (0, _middlewareCreateAction2.default)(action, routesMap, prevLocation, history, notFoundPath, querySerializer);
        }

        if (navigators) {
          action = actionToNavigation(navigators, action, navigationAction, route);
        }

        // DISPATCH LIFECYLE:
        var skip = void 0;
        if ((route || action.type === _index.NOT_FOUND) && action.meta) {
          // satisify flow with `action.meta` check
          skip = _beforeRouteChange(_store, history, action);
        }

        if (skip) return;
        var nextAction = next(action); // DISPATCH

        if (route || action.type === _index.NOT_FOUND) {
          _afterRouteChange(_store, route);
        }

        return nextAction;
      };
    };
  };

  var _beforeRouteChange = function _beforeRouteChange(store, history, action) {
    var location = action.meta.location;

    if (onBeforeChange) {
      var skip = void 0;

      var dispatch = function dispatch(action) {
        if (action && action.meta && action.meta.location && action.meta.location.kind === 'redirect') {
          skip = true;
          prevLocation = location.current;
          var _nextPath = (0, _pathnamePlusSearch2.default)(location.current);
          var isHistoryChange = _nextPath === currentPath;

          // In this unique scenario, the action won't in fact be treated as a
          // redirect since the initial action is never dispatched. If it is
          // an action resulting from pressing the browser buttons, it will
          // do a replace just like a redirect is meant to, since the location
          // change is unavoidable and happens before the middleware. On the
          // server, a redirect is always dispatched since its needed to detect
          // whether to call `res.redirect`. In that case history is irrelevant.
          if (!isHistoryChange && !(0, _isServer2.default)()) {
            history.push(_nextPath); // this will be replaced since it's a redirect
          }
        }

        store.dispatch(action);
      };

      onBeforeChange(dispatch, store.getState, action);
      if (skip) return true;
    }

    prevState = selectLocationState(store.getState());
    prevLocation = location.current;
    prevLength = history.length;

    // addressbar updated before action dispatched like in history.listener
    _middlewareAttemptChangeUrl(location, history);

    // now we can finally set the history on the action since we get its
    // value from the `history` whose value only changes after `push()`
    if ((0, _isReactNative2.default)()) {
      location.history = (0, _nestAction.nestHistory)(history);
    }
  };

  var _afterRouteChange = function _afterRouteChange(store, route) {
    var dispatch = store.dispatch;
    var state = store.getState();
    var kind = selectLocationState(state).kind;
    var title = selectTitleState(state);
    nextState = selectLocationState(state);

    if ((typeof route === 'undefined' ? 'undefined' : _typeof(route)) === 'object') {
      (0, _attemptCallRouteThunk2.default)(dispatch, store.getState, route, selectLocationState);
    }

    if (onAfterChange) {
      onAfterChange(dispatch, store.getState);
    }

    if (typeof window !== 'undefined' && kind) {
      if (typeof onBackNext === 'function' && /back|next|pop/.test(kind)) {
        onBackNext(dispatch, store.getState);
      }

      setTimeout(function () {
        (0, _changePageTitle2.default)(windowDocument, title);

        if (scrollTop) {
          return window.scrollTo(0, 0);
        }

        _updateScroll(false);
      });
    }
  };

  var _middlewareAttemptChangeUrl = function _middlewareAttemptChangeUrl(location, history) {
    // IMPORTANT: insure history hasn't already handled location change
    var nextPath = (0, _pathnamePlusSearch2.default)(location.current);
    if (nextPath !== currentPath) {
      // keep currentPath up to date for comparison to prevent double dispatches
      // between BROWSER back/forward button usage vs middleware-generated actions
      currentPath = nextPath; // IMPORTANT: must happen before history.push() (to prevent double handling)

      // for React Native, in the case `back` or `next` is
      // not called directly, `middlewareCreateAction` may emulate
      // `history` backNext actions to support features such
      // as scroll restoration. In those cases, we need to prevent
      // pushing new routes on to the entries array. `stealth` is
      // a React Navigation feature for changing StackNavigators
      // without triggering other navigators (such as a TabNavigator)
      // to change as well. It allows you to reset hidden StackNavigators.
      var kind = location.kind;
      var manuallyInvoked = kind && /back|next|pop|stealth/.test(kind);

      if (!manuallyInvoked) {
        var method = kind === 'redirect' ? 'replace' : 'push';
        history[method](currentPath); // change address bar corresponding to matched actions from middleware
      }
    }
  };

  /** ENHANCER
   *  1)  dispatches actions with types and payload extracted from the URL pattern
   *      when the browser history changes
   *  2)  on load of the app dispatches an action corresponding to the initial url
   */

  var enhancer = function enhancer(createStore) {
    return function (reducer, preloadedState, enhancer) {
      // routesMap stored in location reducer will be stringified as it goes from the server to client
      // and as a result functions in route objects will be removed--here's how we insure we bring them back
      if (typeof window !== 'undefined' && preloadedState && selectLocationState(preloadedState)) {
        selectLocationState(preloadedState).routesMap = routesMap;
      }

      var store = createStore(reducer, preloadedState, enhancer);
      var state = store.getState();
      var location = state && selectLocationState(state);

      // assign to outer closure so middleware can access full middleware
      // pipeline when dispatching additional actions in onBefore/AfterChange
      _store = store;

      if (!location || !location.pathname) {
        throw new Error('[redux-first-router] you must provide the key of the location\n        reducer state and properly assigned the location reducer to that key.');
      }

      history.listen(_historyAttemptDispatchAction.bind(null, store));

      // dispatch the first location-aware action so initial app state is based on the url on load
      if (!location.hasSSR || (0, _isServer2.default)()) {
        // only dispatch on client before SSR is setup, which passes state on to the client
        _initialDispatch = function _initialDispatch() {
          var action = (0, _historyCreateAction2.default)(currentPath, routesMap, prevLocation, history, 'load', querySerializer);

          store.dispatch(action);
        };

        if (shouldPerformInitialDispatch !== false) {
          _initialDispatch();
        }
      } else {
        // set correct prevLocation on client that has SSR so that it will be
        // assigned to `action.meta.location.prev` and the corresponding state
        prevLocation = location;
      }

      // update the scroll position after initial rendering of page
      if (typeof window !== 'undefined') setTimeout(function () {
        return _updateScroll(false);
      });

      return store;
    };
  };

  var _historyAttemptDispatchAction = function _historyAttemptDispatchAction(store, location, historyAction) {
    // IMPORTANT: insure middleware hasn't already handled location change:
    var nextPath = (0, _pathnamePlusSearch2.default)(location);

    if (nextPath !== currentPath) {
      // THE MAGIC: parse the address bar path into a matched action
      var kind = historyAction === 'REPLACE' ? 'redirect' : historyAction;

      var action = (0, _historyCreateAction2.default)(nextPath, routesMap, prevLocation, history, kind.toLowerCase(), querySerializer, currentPath, prevLength);

      currentPath = nextPath; // IMPORTANT: must happen before dispatch (to prevent double handling)

      store.dispatch(action); // dispatch route type + payload corresponding to browser back/forward usage
    }
  };

  /* SIDE_EFFECTS - client-only state that must escape closure */

  _history = history;
  _scrollBehavior = scrollBehavior;
  _selectLocationState = selectLocationState;
  _options = options;
  var _initialDispatch = void 0;

  _updateScroll = function _updateScroll() {
    var performedByUser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (scrollBehavior) {
      if (!scrollBehavior.manual) {
        scrollBehavior.updateScroll(prevState, nextState);
      }
    } else if (__DEV__ && performedByUser) {
      throw new Error('[redux-first-router] you must set the `restoreScroll` option before\n        you can call `updateScroll`');
    }
  };

  /* RETURN  */

  return {
    reducer: reducer,
    middleware: middleware,
    enhancer: enhancer,
    thunk: thunk,
    initialDispatch: initialDispatch,

    // returned only for tests (not for use in application code)
    _middlewareAttemptChangeUrl: _middlewareAttemptChangeUrl,
    _afterRouteChange: _afterRouteChange,
    _historyAttemptDispatchAction: _historyAttemptDispatchAction,
    windowDocument: windowDocument,
    history: history
  };
};

/** SIDE EFFECTS:
 *  Client code needs a simple `push`,`back` + `next` functions because it's convenient for
 *  prototyping. It will not harm SSR, so long as you don't use it server side. So if you use it, that means DO NOT
 *  simulate clicking links server side--and dont do that, dispatch actions to setup state instead.
 *
 *  THE IDIOMATIC WAY: instead use https://github.com/faceyspacey/redux-first-router-link 's `<Link />`
 *  component to generate SEO friendly urls. As its `href` prop, you pass it a path, array of path
 *  segments or action, and internally it will use `connectRoutes` to change the address bar and
 *  dispatch the correct final action from middleware.
 *
 *  NOTE ON BACK FUNCTIONALITY: The better way to accomplish a back button is to use your redux state to determine
 *  the previous URL. The location reducer will also contain relevant info. But if you must,
 *  this is here for convenience and it basically simulates the user pressing the browser
 *  back button, which of course the system picks up and parses into an action.
 */

var _history = void 0;
var _scrollBehavior = void 0;
var _updateScroll = void 0;
var _selectLocationState = void 0;
var _options = void 0;
var _store = void 0;

var createHref = exports.createHref = function createHref(location) {
  return _history.createHref(location);
};

var push = exports.push = function push(pathname) {
  return _history.push(pathname);
};

var replace = exports.replace = function replace(pathname) {
  return _history.replace(pathname);
};

var back = exports.back = function back() {
  return _history.goBack();
};

var next = exports.next = function next() {
  return _history.goForward();
};

var go = exports.go = function go(n) {
  return _history.go(n);
};

var canGo = exports.canGo = function canGo(n) {
  return _history.canGo(n);
};

var canGoBack = exports.canGoBack = function canGoBack() {
  return !!_history.entries[_history.index - 1];
};

var canGoForward = exports.canGoForward = function canGoForward() {
  return !!_history.entries[_history.index + 1];
};

var prevPath = exports.prevPath = function prevPath() {
  var entry = _history.entries[_history.index - 1];
  return entry && entry.pathname;
};

var nextPath = exports.nextPath = function nextPath() {
  var entry = _history.entries[_history.index + 1];
  return entry && entry.pathname;
};

var history = exports.history = function history() {
  return _history;
};

var scrollBehavior = exports.scrollBehavior = function scrollBehavior() {
  return _scrollBehavior;
};

var updateScroll = exports.updateScroll = function updateScroll() {
  return _updateScroll && _updateScroll();
};

var selectLocationState = exports.selectLocationState = function selectLocationState(state) {
  return _selectLocationState(state);
};

var getOptions = exports.getOptions = function getOptions() {
  return _options;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _pathToRegexp = __webpack_require__(18);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (action, routesMap, serializer) {
  var route = routesMap[action.type];
  var routePath = (typeof route === 'undefined' ? 'undefined' : _typeof(route)) === 'object' ? route.path : route;
  var params = (typeof route === 'undefined' ? 'undefined' : _typeof(route)) === 'object' ? _payloadToParams(route, action.payload) : action.payload;

  var path = _pathToRegexp2.default.compile(routePath)(params || {}) || '/';

  var query = action.query || action.meta && action.meta.query || action.payload && action.payload.query;

  var search = query && serializer && serializer.stringify(query);

  return search ? path + '?' + search : path;
};

var _payloadToParams = function _payloadToParams(route) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(params).reduce(function (sluggifedParams, key) {
    if (typeof params[key] !== 'undefined') {
      if (typeof params[key] === 'number') {
        sluggifedParams[key] = params[key];
      } else if (route.capitalizedWords === true) {
        sluggifedParams[key] = params[key].replace(/ /g, '-').toLowerCase();
      } else if (typeof route.toPath === 'function') {
        sluggifedParams[key] = route.toPath(params[key], key);
      } else if (typeof params[key] === 'string') {
        sluggifedParams[key] = params[key];
      }
    }

    return sluggifedParams;
  }, {});
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (action) {
  return !!(action.meta && action.meta.location && action.meta.location.current);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (action, kind) {
  action.meta = action.meta || {};
  action.meta.location = action.meta.location || {};
  action.meta.location.kind = kind;

  return action;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return typeof window === 'undefined' || !!window.SSRtest;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(17);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(3);

var _PathUtils = __webpack_require__(2);

var _createTransitionManager = __webpack_require__(6);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _ExecutionEnvironment = __webpack_require__(13);

var _DOMUtils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/mjackson/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  !_ExecutionEnvironment.canUseDOM ?  true ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$basename = props.basename,
      basename = _props$basename === undefined ? '' : _props$basename,
      _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return _extends({}, (0, _PathUtils.parsePath)(path), {
      state: state,
      key: key
    });
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      (function () {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      })();
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
     true ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
         true ? (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
     true ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
         true ? (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      return unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(17);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(3);

var _PathUtils = __webpack_require__(2);

var _createTransitionManager = __webpack_require__(6);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _ExecutionEnvironment = __webpack_require__(13);

var _DOMUtils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  !_ExecutionEnvironment.canUseDOM ?  true ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$basename = props.basename,
      basename = _props$basename === undefined ? '' : _props$basename,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return (0, _PathUtils.parsePath)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      (function () {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      })();
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
     true ? (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
         true ? (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
     true ? (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
     true ? (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      return unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(2);

var _LocationUtils = __webpack_require__(3);

var _createTransitionManager = __webpack_require__(6);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry, index) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, index ? createKey() : undefined) : (0, _LocationUtils.createLocation)(entry, undefined, index ? entry.key || createKey() : undefined);
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
     true ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
     true ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(32)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setKind = __webpack_require__(10);

var _setKind2 = _interopRequireDefault(_setKind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (action, type, payload) {
  action = (0, _setKind2.default)(action, 'redirect');

  if (type) {
    action.type = type;
  }

  if (payload) {
    action.payload = payload;
  }

  return action;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPath = exports.parsePath = exports.stripTrailingSlash = exports.stripBasename = exports.hasBasename = exports.stripLeadingSlash = exports.addLeadingSlash = exports.createHashHistory = exports.createMemoryHistory = exports.createBrowserHistory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createBrowserHistory2 = __webpack_require__(14);

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createMemoryHistory2 = __webpack_require__(16);

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

var _createHashHistory2 = __webpack_require__(15);

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _history = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createBrowserHistory = exports.createBrowserHistory = function createBrowserHistory(options) {
  var history = (0, _createBrowserHistory3.default)(_extends({}, options));
  return _extends({}, history);
};

var createMemoryHistory = exports.createMemoryHistory = function createMemoryHistory(options) {
  var getUserConfirmation = options.getUserConfirmation,
      _options$initialEntri = options.initialEntries,
      initialEntries = _options$initialEntri === undefined ? ['/'] : _options$initialEntri,
      _options$initialIndex = options.initialIndex,
      initialIndex = _options$initialIndex === undefined ? 0 : _options$initialIndex,
      _options$keyLength = options.keyLength,
      keyLength = _options$keyLength === undefined ? 6 : _options$keyLength;


  var basename = options.basename ? stripTrailingSlash(addLeadingSlash(options.basename)) : '';
  console.warn('+++ basename:' + JSON.stringify(basename));

  var clamp = function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);

  var history = (0, _createMemoryHistory3.default)(_extends({}, options));
  console.warn('+++ history:' + JSON.stringify(history));

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var getStrippedPath = function getStrippedPath(path) {
    if (!basename || hasBasename(path, basename)) {
      throw new Error('You are attempting to use a basename on a page whose URL path does not begin \n         with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    }
    if (basename) {
      return stripBasename(path, basename);
    }
    return path;
  };

  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _history.createLocation)(getStrippedPath(entry), undefined, createKey()) : (0, _history.createLocation)(getStrippedPath(entry), undefined, entry.key || createKey());
  });

  var createHref = function createHref(location) {
    return basename + createPath(location);
  };

  var action = history.action,
      push = history.push,
      replace = history.replace,
      go = history.go,
      goBack = history.goBack,
      goForward = history.goForward,
      canGo = history.canGo,
      block = history.block,
      listen = history.listen;


  var Push = function Push(path, state) {
    return push(getStrippedPath(path), state);
  };
  var Replace = function Replace(path, state) {
    return replace(getStrippedPath(path), state);
  };

  return {
    length: entries.length,
    action: action,
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: Push,
    replace: Replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
};

var createHashHistory = exports.createHashHistory = function createHashHistory(options) {
  var history = (0, _createHashHistory3.default)(_extends({}, options));
  return history;
};

// Copy/Pasted from history utils (unvisible from history package):

var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') {
    path += search.charAt(0) === '?' ? search : '?' + search;
  }
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
  return path;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pathToAction = __webpack_require__(5);

var _pathToAction2 = _interopRequireDefault(_pathToAction);

var _nestAction = __webpack_require__(1);

var _nestAction2 = _interopRequireDefault(_nestAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (pathname, routesMap, prevLocation, history, kind, serializer, prevPath, prevLength) {
  var action = (0, _pathToAction2.default)(pathname, routesMap, serializer);
  kind = getKind(!!history.entries, history, kind, prevPath, prevLength);
  return (0, _nestAction2.default)(pathname, action, prevLocation, history, kind);
};

var getKind = function getKind(isMemoryHistory, history, kind, prevPath, prevLength) {
  if (!isMemoryHistory || !prevPath || kind !== 'pop') {
    return kind;
  }

  if (isBack(history, prevPath)) {
    return 'back';
  } else if (isNext(history, prevPath, prevLength)) {
    return 'next';
  }

  return kind;
};

var isBack = function isBack(hist, path) {
  var next = hist.entries[hist.index + 1];
  return next && next.pathname === path;
};

var isNext = function isNext(hist, path, length) {
  var prev = hist.entries[hist.index - 1];
  var notPushed = length === hist.length;

  return prev && prev.pathname === path && notPushed;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionToPath = __webpack_require__(8);

var _actionToPath2 = _interopRequireDefault(_actionToPath);

var _nestAction = __webpack_require__(1);

var _nestAction2 = _interopRequireDefault(_nestAction);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (action, routesMap, prevLocation, history, notFoundPath, serializer) {
  try {
    var pathname = (0, _actionToPath2.default)(action, routesMap, serializer);
    var kind = getKind(!!history.entries, pathname, history, action);
    return (0, _nestAction2.default)(pathname, action, prevLocation, history, kind);
  } catch (e) {
    var payload = _extends({}, action.payload);

    return (0, _nestAction2.default)(notFoundPath || prevLocation.pathname || '/', _extends({}, action, { type: _index.NOT_FOUND, payload: payload }), prevLocation, history);
  }
};

// REACT NATIVE FEATURE:
// emulate npm `history` package and `historyCreateAction`  so that actions
// and state indicate the user went back or forward. The idea is if you are
// going back or forward to a route you were just at, apps can determine
// from `state.location.kind === 'back|next'` and `action.kind` that things like
// scroll position should be restored.
// NOTE: for testability, history is also returned to make this a pure function


var getKind = function getKind(isMemoryHistory, pathname, history, action) {
  var kind = action.meta && action.meta.location && action.meta.location.kind;

  if (kind) {
    return kind;
  } else if (!isMemoryHistory) {
    return 'push';
  }

  if (goingBack(history, pathname)) {
    history.index--;
    return 'back';
  } else if (goingForward(history, pathname)) {
    history.index++;
    return 'next';
  }

  return 'push';
};

var goingBack = function goingBack(hist, path) {
  var prev = hist.entries[hist.index - 1];
  return prev && prev.pathname === path;
};

var goingForward = function goingForward(hist, path) {
  var next = hist.entries[hist.index + 1];
  return next && next.pathname === path;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nestAction = __webpack_require__(1);

var _nestAction2 = _interopRequireDefault(_nestAction);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (action, location, prevLocation, history, notFoundPath) {
  var payload = action.payload;


  var meta = action.meta;
  var prevPath = location.pathname;

  var kind = meta && meta.location && meta.location.kind || // use case: kind === 'redirect'
  location.kind === 'load' && 'load' || 'push';

  var pathname = meta && meta.notFoundPath || kind === 'redirect' && notFoundPath || prevPath || '/';

  return (0, _nestAction2.default)(pathname, { type: _index.NOT_FOUND, payload: payload }, prevLocation, history, kind);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectRoutes = __webpack_require__(7);

exports.default = function (dispatch, getState, route, selectLocationState) {
  if (typeof window !== 'undefined') {
    var thunk = route.thunk;

    if (typeof thunk === 'function') {
      var _selectLocationState = selectLocationState(getState()),
          kind = _selectLocationState.kind,
          hasSSR = _selectLocationState.hasSSR;

      // call thunks always if it's not initial load of the app or only if it's load
      // without SSR setup yet, so app state is setup on client when prototyping,
      // such as with with webpack-dev-server before server infrastructure is built


      if (kind !== 'load' || kind === 'load' && !hasSSR) {
        var prom = thunk(dispatch, getState);

        if (prom && typeof prom.next === 'function') {
          prom.next(_connectRoutes.updateScroll);
        }
      }
    }
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (doc, title) {
  if (typeof title === 'string' && doc.title !== title) {
    return doc.title = title;
  }

  return null;
};

var getDocument = exports.getDocument = function getDocument() {
  var isSSRTest = "development" === 'test' && window.isSSR;

  return typeof document !== 'undefined' && !isSSRTest ? document : {};
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (routesMap, selectLocationState) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;

    var _selectLocationState = selectLocationState(getState()),
        type = _selectLocationState.type;

    var route = routesMap[type];

    if (route && typeof route.thunk === 'function') {
      return Promise.resolve(route.thunk(dispatch, getState));
    }

    return Promise.resolve();
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return typeof window !== 'undefined' && typeof window.navigator !== 'undefined' && window.navigator.product === 'ReactNative';
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (routes) {
  return Object.keys(routes).map(function (key) {
    return routes[key];
  });
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var pathname = _ref.pathname,
      search = _ref.search;

  if (search) {
    if (search.indexOf('?') !== 0) {
      search = '?' + search;
    }

    return '' + pathname + search;
  }

  return pathname;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(0);

var _isServer = __webpack_require__(11);

var _isServer2 = _interopRequireDefault(_isServer);

var _nestAction = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState, routesMap) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === _index.NOT_FOUND || routesMap[action.type] && (action.meta.location.current.pathname !== state.pathname || action.meta.location.current.search !== state.search || action.meta.location.kind === 'load')) {
      var _query = action.meta.location.current.query;
      var _search = action.meta.location.current.search;

      return _extends({
        pathname: action.meta.location.current.pathname,
        type: action.type,
        payload: _extends({}, action.payload)
      }, _query && { query: _query, search: _search }, {
        prev: action.meta.location.prev,
        kind: action.meta.location.kind,
        history: action.meta.location.history,
        hasSSR: state.hasSSR,
        routesMap: routesMap,
        basename: action.meta.location.history.createHref(action.meta.location.current)
      });
    }

    return state;
  };
};

var getInitialState = exports.getInitialState = function getInitialState(currentPathname, meta, type, payload, routesMap, history) {
  return _extends({
    pathname: currentPathname.split('?')[0],
    type: type,
    payload: payload
  }, meta, {
    prev: {
      pathname: '',
      type: '',
      payload: {}
    },
    kind: undefined,
    history: (0, _nestAction.nestHistory)(history),
    hasSSR: (0, _isServer2.default)() ? true : undefined, // client uses initial server `hasSSR` state setup here
    routesMap: routesMap,
    basename: ''
  });
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__(3);

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(2);

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__(14);

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__(15);

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__(16);

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

module.exports = resolvePathname;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var valueEqual = function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;

    return a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
};

exports.default = valueEqual;

/***/ })
/******/ ]);
});