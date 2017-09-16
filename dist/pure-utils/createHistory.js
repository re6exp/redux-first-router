'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPath = exports.parsePath = exports.stripTrailingSlash = exports.stripBasename = exports.hasBasename = exports.stripLeadingSlash = exports.addLeadingSlash = exports.createHashHistory = exports.createMemoryHistory = exports.createBrowserHistory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createBrowserHistory2 = require('history/createBrowserHistory');

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createMemoryHistory2 = require('history/createMemoryHistory');

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

var _createHashHistory2 = require('history/createHashHistory');

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _history = require('history');

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