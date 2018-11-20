/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = "" + ({"0":"butterchurn","1":"jsmediatags","2":"milkdrop-preset-converter","3":"jszip","4":"butterchurn-presets"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 146);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(199);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(205);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dragSelected = exports.scrollDownFourTracks = exports.scrollUpFourTracks = exports.scrollPlaylistByDelta = exports.scrollNTracks = exports.setPlaylistScrollPosition = exports.sortListByTitle = exports.randomizeList = exports.reverseList = exports.removeAllTracks = exports.removeSelectedTracks = exports.cropPlaylist = exports.downloadHtmlPlaylist = exports.downloadPreset = exports.setEqFromFileReference = exports.fetchMediaTags = exports.loadMediaFile = exports.loadMediaFiles = exports.fetchMediaDuration = exports.openSkinFileDialog = exports.openMediaFileDialog = exports.openEqfFileDialog = exports.setSkinFromUrl = exports.setSkinFromFileReference = exports.setSkinFromArrayBuffer = exports.loadFilesFromReferences = exports.addTracksFromReferences = exports.toggleEq = exports.setPreamp = exports.setEqToMin = exports.setEqToMid = exports.setEqToMax = exports.setEqBand = exports.toggleShuffle = exports.toggleRepeat = exports.setBalance = exports.scrollVolume = exports.adjustVolume = exports.setVolume = exports.seekBackward = exports.seekForward = exports.previous = exports.next = exports.nextN = exports.stop = exports.pause = exports.play = exports.toggleMainWindowShadeMode = exports.updateWindowPositions = exports.toggleWindow = exports.setWindowSize = exports.showWindow = exports.hideWindow = exports.closeWindow = exports.togglePlaylistShadeMode = exports.toggleEqualizerShadeMode = exports.toggleDoubleSizeMode = undefined;

var _windows = __webpack_require__(238);

Object.defineProperty(exports, "toggleDoubleSizeMode", {
  enumerable: true,
  get: function get() {
    return _windows.toggleDoubleSizeMode;
  }
});
Object.defineProperty(exports, "toggleEqualizerShadeMode", {
  enumerable: true,
  get: function get() {
    return _windows.toggleEqualizerShadeMode;
  }
});
Object.defineProperty(exports, "togglePlaylistShadeMode", {
  enumerable: true,
  get: function get() {
    return _windows.togglePlaylistShadeMode;
  }
});
Object.defineProperty(exports, "closeWindow", {
  enumerable: true,
  get: function get() {
    return _windows.closeWindow;
  }
});
Object.defineProperty(exports, "hideWindow", {
  enumerable: true,
  get: function get() {
    return _windows.hideWindow;
  }
});
Object.defineProperty(exports, "showWindow", {
  enumerable: true,
  get: function get() {
    return _windows.showWindow;
  }
});
Object.defineProperty(exports, "setWindowSize", {
  enumerable: true,
  get: function get() {
    return _windows.setWindowSize;
  }
});
Object.defineProperty(exports, "toggleWindow", {
  enumerable: true,
  get: function get() {
    return _windows.toggleWindow;
  }
});
Object.defineProperty(exports, "updateWindowPositions", {
  enumerable: true,
  get: function get() {
    return _windows.updateWindowPositions;
  }
});
Object.defineProperty(exports, "toggleMainWindowShadeMode", {
  enumerable: true,
  get: function get() {
    return _windows.toggleMainWindowShadeMode;
  }
});

var _media = __webpack_require__(241);

Object.defineProperty(exports, "play", {
  enumerable: true,
  get: function get() {
    return _media.play;
  }
});
Object.defineProperty(exports, "pause", {
  enumerable: true,
  get: function get() {
    return _media.pause;
  }
});
Object.defineProperty(exports, "stop", {
  enumerable: true,
  get: function get() {
    return _media.stop;
  }
});
Object.defineProperty(exports, "nextN", {
  enumerable: true,
  get: function get() {
    return _media.nextN;
  }
});
Object.defineProperty(exports, "next", {
  enumerable: true,
  get: function get() {
    return _media.next;
  }
});
Object.defineProperty(exports, "previous", {
  enumerable: true,
  get: function get() {
    return _media.previous;
  }
});
Object.defineProperty(exports, "seekForward", {
  enumerable: true,
  get: function get() {
    return _media.seekForward;
  }
});
Object.defineProperty(exports, "seekBackward", {
  enumerable: true,
  get: function get() {
    return _media.seekBackward;
  }
});
Object.defineProperty(exports, "setVolume", {
  enumerable: true,
  get: function get() {
    return _media.setVolume;
  }
});
Object.defineProperty(exports, "adjustVolume", {
  enumerable: true,
  get: function get() {
    return _media.adjustVolume;
  }
});
Object.defineProperty(exports, "scrollVolume", {
  enumerable: true,
  get: function get() {
    return _media.scrollVolume;
  }
});
Object.defineProperty(exports, "setBalance", {
  enumerable: true,
  get: function get() {
    return _media.setBalance;
  }
});
Object.defineProperty(exports, "toggleRepeat", {
  enumerable: true,
  get: function get() {
    return _media.toggleRepeat;
  }
});
Object.defineProperty(exports, "toggleShuffle", {
  enumerable: true,
  get: function get() {
    return _media.toggleShuffle;
  }
});

var _equalizer = __webpack_require__(112);

Object.defineProperty(exports, "setEqBand", {
  enumerable: true,
  get: function get() {
    return _equalizer.setEqBand;
  }
});
Object.defineProperty(exports, "setEqToMax", {
  enumerable: true,
  get: function get() {
    return _equalizer.setEqToMax;
  }
});
Object.defineProperty(exports, "setEqToMid", {
  enumerable: true,
  get: function get() {
    return _equalizer.setEqToMid;
  }
});
Object.defineProperty(exports, "setEqToMin", {
  enumerable: true,
  get: function get() {
    return _equalizer.setEqToMin;
  }
});
Object.defineProperty(exports, "setPreamp", {
  enumerable: true,
  get: function get() {
    return _equalizer.setPreamp;
  }
});
Object.defineProperty(exports, "toggleEq", {
  enumerable: true,
  get: function get() {
    return _equalizer.toggleEq;
  }
});

var _files = __webpack_require__(242);

Object.defineProperty(exports, "addTracksFromReferences", {
  enumerable: true,
  get: function get() {
    return _files.addTracksFromReferences;
  }
});
Object.defineProperty(exports, "loadFilesFromReferences", {
  enumerable: true,
  get: function get() {
    return _files.loadFilesFromReferences;
  }
});
Object.defineProperty(exports, "setSkinFromArrayBuffer", {
  enumerable: true,
  get: function get() {
    return _files.setSkinFromArrayBuffer;
  }
});
Object.defineProperty(exports, "setSkinFromFileReference", {
  enumerable: true,
  get: function get() {
    return _files.setSkinFromFileReference;
  }
});
Object.defineProperty(exports, "setSkinFromUrl", {
  enumerable: true,
  get: function get() {
    return _files.setSkinFromUrl;
  }
});
Object.defineProperty(exports, "openEqfFileDialog", {
  enumerable: true,
  get: function get() {
    return _files.openEqfFileDialog;
  }
});
Object.defineProperty(exports, "openMediaFileDialog", {
  enumerable: true,
  get: function get() {
    return _files.openMediaFileDialog;
  }
});
Object.defineProperty(exports, "openSkinFileDialog", {
  enumerable: true,
  get: function get() {
    return _files.openSkinFileDialog;
  }
});
Object.defineProperty(exports, "fetchMediaDuration", {
  enumerable: true,
  get: function get() {
    return _files.fetchMediaDuration;
  }
});
Object.defineProperty(exports, "loadMediaFiles", {
  enumerable: true,
  get: function get() {
    return _files.loadMediaFiles;
  }
});
Object.defineProperty(exports, "loadMediaFile", {
  enumerable: true,
  get: function get() {
    return _files.loadMediaFile;
  }
});
Object.defineProperty(exports, "fetchMediaTags", {
  enumerable: true,
  get: function get() {
    return _files.fetchMediaTags;
  }
});
Object.defineProperty(exports, "setEqFromFileReference", {
  enumerable: true,
  get: function get() {
    return _files.setEqFromFileReference;
  }
});
Object.defineProperty(exports, "downloadPreset", {
  enumerable: true,
  get: function get() {
    return _files.downloadPreset;
  }
});
Object.defineProperty(exports, "downloadHtmlPlaylist", {
  enumerable: true,
  get: function get() {
    return _files.downloadHtmlPlaylist;
  }
});

var _playlist = __webpack_require__(115);

Object.defineProperty(exports, "cropPlaylist", {
  enumerable: true,
  get: function get() {
    return _playlist.cropPlaylist;
  }
});
Object.defineProperty(exports, "removeSelectedTracks", {
  enumerable: true,
  get: function get() {
    return _playlist.removeSelectedTracks;
  }
});
Object.defineProperty(exports, "removeAllTracks", {
  enumerable: true,
  get: function get() {
    return _playlist.removeAllTracks;
  }
});
Object.defineProperty(exports, "reverseList", {
  enumerable: true,
  get: function get() {
    return _playlist.reverseList;
  }
});
Object.defineProperty(exports, "randomizeList", {
  enumerable: true,
  get: function get() {
    return _playlist.randomizeList;
  }
});
Object.defineProperty(exports, "sortListByTitle", {
  enumerable: true,
  get: function get() {
    return _playlist.sortListByTitle;
  }
});
Object.defineProperty(exports, "setPlaylistScrollPosition", {
  enumerable: true,
  get: function get() {
    return _playlist.setPlaylistScrollPosition;
  }
});
Object.defineProperty(exports, "scrollNTracks", {
  enumerable: true,
  get: function get() {
    return _playlist.scrollNTracks;
  }
});
Object.defineProperty(exports, "scrollPlaylistByDelta", {
  enumerable: true,
  get: function get() {
    return _playlist.scrollPlaylistByDelta;
  }
});
Object.defineProperty(exports, "scrollUpFourTracks", {
  enumerable: true,
  get: function get() {
    return _playlist.scrollUpFourTracks;
  }
});
Object.defineProperty(exports, "scrollDownFourTracks", {
  enumerable: true,
  get: function get() {
    return _playlist.scrollDownFourTracks;
  }
});
Object.defineProperty(exports, "dragSelected", {
  enumerable: true,
  get: function get() {
    return _playlist.dragSelected;
  }
});
exports.close = close;
exports.toggleVisualizerStyle = toggleVisualizerStyle;

var _actionTypes = __webpack_require__(3);

function close() {
  return dispatch => {
    dispatch({ type: _actionTypes.STOP });
    dispatch({ type: _actionTypes.CLOSE_WINAMP });
  };
}

function toggleVisualizerStyle() {
  return { type: _actionTypes.TOGGLE_VISUALIZER_STYLE };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const ADD_TRACK_FROM_URL = exports.ADD_TRACK_FROM_URL = "ADD_TRACK_FROM_URL";
const CLOSE_WINAMP = exports.CLOSE_WINAMP = "CLOSE_WINAMP";
const MINIMIZE_WINAMP = exports.MINIMIZE_WINAMP = "MINIMIZE_WINAMP";
const IS_PLAYING = exports.IS_PLAYING = "IS_PLAYING";
const IS_STOPPED = exports.IS_STOPPED = "IS_STOPPED";
const PAUSE = exports.PAUSE = "PAUSE";
const PLAY = exports.PLAY = "PLAY";
const SEEK_TO_PERCENT_COMPLETE = exports.SEEK_TO_PERCENT_COMPLETE = "SEEK_TO_PERCENT_COMPLETE";
const SET_BALANCE = exports.SET_BALANCE = "SET_BALANCE";
const SET_BAND_VALUE = exports.SET_BAND_VALUE = "SET_BAND_VALUE";
const SET_FOCUS = exports.SET_FOCUS = "SET_FOCUS";
const SET_BAND_FOCUS = exports.SET_BAND_FOCUS = "SET_BAND_FOCUS";
const SET_FOCUSED_WINDOW = exports.SET_FOCUSED_WINDOW = "SET_FOCUSED_WINDOW";
const SET_MEDIA = exports.SET_MEDIA = "SET_MEDIA";
const SET_SCRUB_POSITION = exports.SET_SCRUB_POSITION = "SET_SCRUB_POSITION";
const SET_SKIN_DATA = exports.SET_SKIN_DATA = "SET_SKIN_DATA";
const SET_VOLUME = exports.SET_VOLUME = "SET_VOLUME";
const START_WORKING = exports.START_WORKING = "START_WORKING";
const STEP_MARQUEE = exports.STEP_MARQUEE = "STEP_MARQUEE";
const STOP = exports.STOP = "STOP";
const STOP_WORKING = exports.STOP_WORKING = "STOP_WORKING";
const TOGGLE_DOUBLESIZE_MODE = exports.TOGGLE_DOUBLESIZE_MODE = "TOGGLE_DOUBLESIZE_MODE";
const SET_EQ_AUTO = exports.SET_EQ_AUTO = "SET_EQ_AUTO";
const SET_EQ_ON = exports.SET_EQ_ON = "SET_EQ_ON";
const SET_EQ_OFF = exports.SET_EQ_OFF = "SET_EQ_OFF";
const TOGGLE_LLAMA_MODE = exports.TOGGLE_LLAMA_MODE = "TOGGLE_LLAMA_MODE";
const TOGGLE_REPEAT = exports.TOGGLE_REPEAT = "TOGGLE_REPEAT";
const TOGGLE_SHUFFLE = exports.TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
const TOGGLE_TIME_MODE = exports.TOGGLE_TIME_MODE = "TOGGLE_TIME_MODE";
const TOGGLE_VISUALIZER_STYLE = exports.TOGGLE_VISUALIZER_STYLE = "TOGGLE_VISUALIZER_STYLE";
const UNSET_FOCUS = exports.UNSET_FOCUS = "UNSET_FOCUS";
const UPDATE_TIME_ELAPSED = exports.UPDATE_TIME_ELAPSED = "UPDATE_TIME_ELAPSED";
const SET_USER_MESSAGE = exports.SET_USER_MESSAGE = "SET_USER_MESSAGE";
const UNSET_USER_MESSAGE = exports.UNSET_USER_MESSAGE = "UNSET_USER_MESSAGE";
const SET_PLAYLIST_SCROLL_POSITION = exports.SET_PLAYLIST_SCROLL_POSITION = "SET_PLAYLIST_SCROLL_POSITION";
const CLICKED_TRACK = exports.CLICKED_TRACK = "CLICKED_TRACK";
const CTRL_CLICKED_TRACK = exports.CTRL_CLICKED_TRACK = "CTRL_CLICKED_TRACK";
const SHIFT_CLICKED_TRACK = exports.SHIFT_CLICKED_TRACK = "SHIFT_CLICKED_TRACK";
const SELECT_ALL = exports.SELECT_ALL = "SELECT_ALL";
const SELECT_ZERO = exports.SELECT_ZERO = "SELECT_ZERO";
const INVERT_SELECTION = exports.INVERT_SELECTION = "INVERT_SELECTION";
const REMOVE_ALL_TRACKS = exports.REMOVE_ALL_TRACKS = "REMOVE_ALL_TRACKS";
const CROP_TRACKS = exports.CROP_TRACKS = "CROP_TRACKS";
const FILE_INFO = exports.FILE_INFO = "FILE_INFO";
const REMOVE_TRACKS = exports.REMOVE_TRACKS = "REMOVE_TRACKS";
const SET_AVAILABLE_SKINS = exports.SET_AVAILABLE_SKINS = "SET_AVAILABLE_SKINS";
const REVERSE_LIST = exports.REVERSE_LIST = "REVERSE_LIST";
const RANDOMIZE_LIST = exports.RANDOMIZE_LIST = "RANDOMIZE_LIST";
const SET_TRACK_ORDER = exports.SET_TRACK_ORDER = "SET_TRACK_ORDER";
const PLAY_TRACK = exports.PLAY_TRACK = "PLAY_TRACK";
const BUFFER_TRACK = exports.BUFFER_TRACK = "BUFFER_TRACK";
const DRAG_SELECTED = exports.DRAG_SELECTED = "DRAG_SELECTED";
const SET_MEDIA_TAGS = exports.SET_MEDIA_TAGS = "SET_MEDIA_TAGS";
const SET_MEDIA_DURATION = exports.SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
const TOGGLE_WINDOW = exports.TOGGLE_WINDOW = "TOGGLE_WINDOW";
const ADD_GEN_WINDOW = exports.ADD_GEN_WINDOW = "ADD_GEN_WINDOW";
const CLOSE_WINDOW = exports.CLOSE_WINDOW = "CLOSE_WINDOW";
const MEDIA_TAG_REQUEST_INITIALIZED = exports.MEDIA_TAG_REQUEST_INITIALIZED = "MEDIA_TAG_REQUEST_INITIALIZED";
const MEDIA_TAG_REQUEST_FAILED = exports.MEDIA_TAG_REQUEST_FAILED = "MEDIA_TAG_REQUEST_FAILED";
const NETWORK_CONNECTED = exports.NETWORK_CONNECTED = "NETWORK_CONNECTED";
const NETWORK_DISCONNECTED = exports.NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED";
const UPDATE_WINDOW_POSITIONS = exports.UPDATE_WINDOW_POSITIONS = "UPDATE_WINDOW_POSITIONS";
const CHANNEL_COUNT_CHANGED = exports.CHANNEL_COUNT_CHANGED = "CHANNEL_COUNT_CHANGED";
const WINDOW_SIZE_CHANGED = exports.WINDOW_SIZE_CHANGED = "WINDOW_SIZE_CHANGED";
const TOGGLE_WINDOW_SHADE_MODE = exports.TOGGLE_WINDOW_SHADE_MODE = "TOGGLE_WINDOW_SHADE_MODE";
const LOADED = exports.LOADED = "LOADED";
const REGISTER_VISUALIZER = exports.REGISTER_VISUALIZER = "REGISTER_VISUALIZER";
const SET_Z_INDEX = exports.SET_Z_INDEX = "SET_Z_INDEX";
const DISABLE_MARQUEE = exports.DISABLE_MARQUEE = "DISABLE_MARQUEE";
const SET_DUMMY_VIZ_DATA = exports.SET_DUMMY_VIZ_DATA = "SET_DUMMY_VIZ_DATA";
const SET_WINDOW_VISIBILITY = exports.SET_WINDOW_VISIBILITY = "SET_WINDOW_VISIBILITY";
const LOADING = exports.LOADING = "LOADING";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEDIA_STATUS = exports.TIME_MODE = exports.VISUALIZER_ORDER = exports.VISUALIZERS = exports.DEFAULT_SKIN = exports.LETTERS = exports.TRACK_HEIGHT = exports.WINDOW_WIDTH = exports.WINDOW_HEIGHT = exports.WINDOW_RESIZE_SEGMENT_HEIGHT = exports.WINDOW_RESIZE_SEGMENT_WIDTH = exports.CHARACTER_WIDTH = exports.UTF8_ELLIPSIS = exports.MEDIA_TAG_REQUEST_STATUS = exports.LOAD_STYLE = exports.WINDOWS = exports.BANDS = undefined;

var _baseSkin = __webpack_require__(239);

var baseSkin = _interopRequireWildcard(_baseSkin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const BANDS = exports.BANDS = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];

const WINDOWS = exports.WINDOWS = {
  MAIN: "main",
  PLAYLIST: "playlist",
  EQUALIZER: "equalizer"
};

const LOAD_STYLE = exports.LOAD_STYLE = {
  BUFFER: "BUFFER",
  PLAY: "PLAY"
};

const MEDIA_TAG_REQUEST_STATUS = exports.MEDIA_TAG_REQUEST_STATUS = {
  INITIALIZED: "INITIALIZED",
  FAILED: "FAILED",
  COMPLETE: "COMPLETE",
  NOT_REQUESTED: "NOT_REQUESTED"
};

const UTF8_ELLIPSIS = exports.UTF8_ELLIPSIS = "\u2026";
const CHARACTER_WIDTH = exports.CHARACTER_WIDTH = 5;
const WINDOW_RESIZE_SEGMENT_WIDTH = exports.WINDOW_RESIZE_SEGMENT_WIDTH = 25;
const WINDOW_RESIZE_SEGMENT_HEIGHT = exports.WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
const WINDOW_HEIGHT = exports.WINDOW_HEIGHT = 116;
const WINDOW_WIDTH = exports.WINDOW_WIDTH = 275;
const TRACK_HEIGHT = exports.TRACK_HEIGHT = 13;
const LETTERS = exports.LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const DEFAULT_SKIN = exports.DEFAULT_SKIN = baseSkin;

const VISUALIZERS = exports.VISUALIZERS = {
  OSCILLOSCOPE: "OSCILLOSCOPE",
  BAR: "BAR",
  NONE: "NONE"
};

const VISUALIZER_ORDER = exports.VISUALIZER_ORDER = [VISUALIZERS.BAR, VISUALIZERS.OSCILLOSCOPE, // TODO: Verify the order
VISUALIZERS.NONE];

const TIME_MODE = exports.TIME_MODE = {
  ELAPSED: "ELAPSED",
  REMAINING: "REMAINING"
};

const MEDIA_STATUS = exports.MEDIA_STATUS = {
  PLAYING: "PLAYING",
  STOPPED: "STOPPED",
  PAUSED: "PAUSED"
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisualizerStyle = exports.getSkinPlaylistStyle = exports.getWindowGraph = exports.getWindowsInfo = exports.getWindowSizes = exports.getGenWindows = exports.getPlaylistURL = exports.getNumberOfTracks = exports.getMediaText = exports.getMinimalMediaText = exports.getCurrentTrackDisplayName = exports.getTrackDisplayName = exports.getDuration = exports.getPlaylist = exports.getVisibleTracks = exports.getTrackIsVisibleFunction = exports.getVisibleTrackIds = exports.getScrollOffset = exports.getPlaylistScrollPosition = exports.getOverflowTrackCount = exports.getNumberOfVisibleTracks = exports.nextTrack = exports.getCurrentTrackId = exports.getCurrentTrackNumber = exports.getCurrentTrackIndex = exports.getRunningTimeMessage = exports.getSelectedTrackObjects = exports.getOrderedTracks = exports.getTrackCount = exports.getTracks = exports.getEqfData = exports.getSliders = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getWindowPositions = getWindowPositions;
exports.getWindowSize = getWindowSize;
exports.getWindowOpen = getWindowOpen;
exports.getWindowShade = getWindowShade;
exports.getWindowHidden = getWindowHidden;
exports.getDoubled = getDoubled;
exports.getWindowPixelSize = getWindowPixelSize;

var _reselect = __webpack_require__(107);

var _utils = __webpack_require__(6);

var _constants = __webpack_require__(4);

var _playlistHtml = __webpack_require__(240);

var _playlist = __webpack_require__(108);

var fromPlaylist = _interopRequireWildcard(_playlist);

var _display = __webpack_require__(109);

var fromDisplay = _interopRequireWildcard(_display);

var _resizeUtils = __webpack_require__(110);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const getSliders = exports.getSliders = state => state.equalizer.sliders;

const getEqfData = exports.getEqfData = (0, _reselect.createSelector)(getSliders, sliders => {
  const preset = {
    name: "Entry1",
    preamp: (0, _utils.denormalize)(sliders.preamp)
  };
  _constants.BANDS.forEach(band => {
    preset[`hz${band}`] = (0, _utils.denormalize)(sliders[band]);
  });
  const eqfData = {
    presets: [preset],
    type: "Winamp EQ library file v1.1"
  };
  return eqfData;
});

const getTracks = exports.getTracks = state => state.playlist.tracks;
const getTrackOrder = state => state.playlist.trackOrder;

const getTrackCount = exports.getTrackCount = (0, _reselect.createSelector)(getTrackOrder, trackOrder => trackOrder.length);

const getOrderedTracks = exports.getOrderedTracks = (0, _reselect.createSelector)(getTracks, getTrackOrder, (tracks, trackOrder) => trackOrder.filter(id => tracks[id]));

const getOrderedTrackObjects = (0, _reselect.createSelector)(getTracks, getOrderedTracks, (tracks, trackOrder) => trackOrder.map(id => tracks[id]));

const getSelectedTrackObjects = exports.getSelectedTrackObjects = (0, _reselect.createSelector)(getOrderedTrackObjects, tracks => tracks.filter(track => track.selected));

// If a duration is `null`, it counts as zero, which seems fine enough.
const runningTimeFromTracks = tracks => tracks.reduce((time, track) => time + Number(track.duration), 0);

const getTotalRunningTime = (0, _reselect.createSelector)(getOrderedTrackObjects, runningTimeFromTracks);

const getSelectedRunningTime = (0, _reselect.createSelector)(getSelectedTrackObjects, runningTimeFromTracks);

// Note: We should append "+" to these values if some of the tracks are of unknown time.
const getRunningTimeMessage = exports.getRunningTimeMessage = (0, _reselect.createSelector)(getTotalRunningTime, getSelectedRunningTime, (totalRunningTime, selectedRunningTime) => `${(0, _utils.getTimeStr)(selectedRunningTime)}/${(0, _utils.getTimeStr)(totalRunningTime)}`);

// TODO: use slectors to get memoization
const getCurrentTrackIndex = exports.getCurrentTrackIndex = state => state.playlist.trackOrder.indexOf(state.playlist.currentTrack);

const getCurrentTrackNumber = exports.getCurrentTrackNumber = (0, _reselect.createSelector)(getCurrentTrackIndex, currentTrackIndex => currentTrackIndex + 1);

const getCurrentTrackId = exports.getCurrentTrackId = state => state.playlist.currentTrack;

const nextTrack = exports.nextTrack = (state, n = 1) => {
  const trackOrder = state.playlist.trackOrder,
        repeat = state.media.repeat;

  const trackCount = getTrackCount(state);
  if (trackCount === 0) {
    return null;
  }

  const currentIndex = getCurrentTrackIndex(state);

  let nextIndex = currentIndex + n;
  if (repeat) {
    nextIndex = nextIndex % trackCount;
    if (nextIndex < 0) {
      // Handle wrapping around backwards
      nextIndex += trackCount;
    }
    return trackOrder[nextIndex];
  }

  if (currentIndex === trackCount - 1 && n > 0) {
    return null;
  } else if (currentIndex === 0 && n < 0) {
    return null;
  }

  nextIndex = (0, _utils.clamp)(nextIndex, 0, trackCount - 1);
  return trackOrder[nextIndex];
};

const BASE_WINDOW_HEIGHT = 58;
const getNumberOfVisibleTracks = exports.getNumberOfVisibleTracks = state => {
  const playlistSize = getWindowSize(state, "playlist");
  return Math.floor((BASE_WINDOW_HEIGHT + _constants.WINDOW_RESIZE_SEGMENT_HEIGHT * playlistSize[1]) / _constants.TRACK_HEIGHT);
};

const getOverflowTrackCount = exports.getOverflowTrackCount = (0, _reselect.createSelector)(getTrackCount, getNumberOfVisibleTracks, (trackCount, numberOfVisibleTracks) => Math.max(0, trackCount - numberOfVisibleTracks));

const _getPlaylistScrollPosition = state => state.display.playlistScrollPosition;

const getPlaylistScrollPosition = exports.getPlaylistScrollPosition = (0, _reselect.createSelector)(getOverflowTrackCount, _getPlaylistScrollPosition, (overflowTrackCount, playlistScrollPosition) => {
  if (overflowTrackCount === 0) {
    return 0;
  }
  return Math.round(Math.round(overflowTrackCount * playlistScrollPosition / 100) / overflowTrackCount * 100);
});

const getScrollOffset = exports.getScrollOffset = (0, _reselect.createSelector)(_getPlaylistScrollPosition, getTrackCount, getNumberOfVisibleTracks, (playlistScrollPosition, trackCount, numberOfVisibleTracks) => {
  const overflow = Math.max(0, trackCount - numberOfVisibleTracks);
  return (0, _utils.percentToIndex)(playlistScrollPosition / 100, overflow + 1);
});

const getVisibleTrackIds = exports.getVisibleTrackIds = (0, _reselect.createSelector)(getScrollOffset, getTrackOrder, getNumberOfVisibleTracks, (offset, trackOrder, numberOfVisibleTracks) => trackOrder.slice(offset, offset + numberOfVisibleTracks));

const getTrackIsVisibleFunction = exports.getTrackIsVisibleFunction = (0, _reselect.createSelector)(getVisibleTrackIds, visibleTrackIds => {
  return id => visibleTrackIds.includes(id);
});

const getVisibleTracks = exports.getVisibleTracks = (0, _reselect.createSelector)(getVisibleTrackIds, getTracks, (visibleTrackIds, tracks) => visibleTrackIds.map(id => tracks[id]));

const getPlaylist = exports.getPlaylist = state => state.playlist;

const getDuration = exports.getDuration = state => {
  const currentTrack = state.playlist.tracks[state.playlist.currentTrack];
  return currentTrack && currentTrack.duration;
};

const getTrackDisplayName = exports.getTrackDisplayName = (state, trackId) => fromPlaylist.getTrackDisplayName(getPlaylist(state), trackId);

const getCurrentTrackDisplayName = exports.getCurrentTrackDisplayName = state => {
  const id = getCurrentTrackId(state);
  return getTrackDisplayName(state, id);
};

const getMinimalMediaText = exports.getMinimalMediaText = (0, _reselect.createSelector)(getCurrentTrackNumber, getCurrentTrackDisplayName, (trackNumber, name) => name == null ? null : `${trackNumber}. ${name}`);

const getMediaText = exports.getMediaText = (0, _reselect.createSelector)(getMinimalMediaText, getDuration, (minimalMediaText, duration) => minimalMediaText == null ? null : // TODO: Maybe the `  ***  ` should actually be added by the marquee
`${minimalMediaText} (${(0, _utils.getTimeStr)(duration)})  ***  `);

const getNumberOfTracks = exports.getNumberOfTracks = state => getTrackOrder(state).length;
const getPlaylistDuration = (0, _reselect.createSelector)(getTracks, tracks => Object.values(tracks).reduce((total, track) => total + track.duration, 0));

const getPlaylistURL = exports.getPlaylistURL = (0, _reselect.createSelector)(state => state, getNumberOfTracks, getPlaylistDuration, getTrackOrder, getTracks, (state, numberOfTracks, playlistDuration, trackOrder, tracks) => (0, _playlistHtml.createPlaylistURL)({
  numberOfTracks,
  averageTrackLength: (0, _utils.getTimeStr)(playlistDuration / numberOfTracks),
  // TODO: Handle hours
  playlistLengthMinutes: Math.floor(playlistDuration / 60),
  playlistLengthSeconds: Math.floor(playlistDuration % 60),
  tracks: trackOrder.map((id, i) => `${i + 1}. ${getTrackDisplayName(state, id)} (${(0, _utils.getTimeStr)(tracks[id].duration)})`)
}));

function getWindowPositions(state) {
  return state.windows.positions;
}

const WINDOW_HEIGHT = 116;
const SHADE_WINDOW_HEIGHT = 14;

function getWPixelSize(w, doubled) {
  var _w$size = _slicedToArray(w.size, 2);

  const width = _w$size[0],
        height = _w$size[1];

  const doubledMultiplier = doubled && w.canDouble ? 2 : 1;
  const pix = {
    height: WINDOW_HEIGHT + height * _constants.WINDOW_RESIZE_SEGMENT_HEIGHT,
    width: _constants.WINDOW_WIDTH + width * _constants.WINDOW_RESIZE_SEGMENT_WIDTH
  };
  return {
    height: (w.shade ? SHADE_WINDOW_HEIGHT : pix.height) * doubledMultiplier,
    width: pix.width * doubledMultiplier
  };
}

function getWindowSize(state, windowId) {
  return state.windows.genWindows[windowId].size;
}

function getWindowOpen(state) {
  return windowId => state.windows.genWindows[windowId].open;
}

function getWindowShade(state, windowId) {
  return state.windows.genWindows[windowId].shade;
}

function getWindowHidden(state) {
  return windowId => state.windows.genWindows[windowId].hidden;
}

const getGenWindows = exports.getGenWindows = state => {
  return state.windows.genWindows;
};

function getDoubled(state) {
  return state.display.doubled;
}

const getWindowSizes = exports.getWindowSizes = (0, _reselect.createSelector)(getGenWindows, getDoubled, (windows, doubled) => {
  return (0, _utils.objectMap)(windows, w => getWPixelSize(w, doubled));
});

function getWindowPixelSize(state, windowId) {
  // Rather than compute it directly, we go via `getWindowSizes`
  // to take advantage of caching.
  return getWindowSizes(state)[windowId];
}

const getWindowsInfo = exports.getWindowsInfo = (0, _reselect.createSelector)(getWindowSizes, getWindowPositions, (sizes, positions) => Object.keys(sizes).map(key => _extends({ key }, sizes[key], positions[key])));

const getWindowGraph = exports.getWindowGraph = (0, _reselect.createSelector)(getWindowsInfo, _resizeUtils.generateGraph);

const getSkinPlaylistStyle = exports.getSkinPlaylistStyle = state => {
  return state.display.skinPlaylistStyle || {
    normal: "#00FF00",
    current: "#FFFFFF",
    normalbg: "#000000",
    selectedbg: "#0000C6",
    font: "Arial"
  };
};

const getVisualizerStyle = exports.getVisualizerStyle = state => fromDisplay.getVisualizerStyle(state.display);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateBoundingBox = exports.objectFilter = exports.spliceIn = exports.moveSelected = exports.sort = exports.shuffle = exports.arraysAreEqual = exports.segment = exports.merge = exports.denormalize = exports.normalize = exports.percentToIndex = exports.percentToRange = exports.toPercent = exports.base64FromArrayBuffer = exports.clamp = exports.parseIni = exports.parseViscolors = exports.getFileExtension = exports.getTimeStr = exports.getTimeObj = undefined;
exports.downloadURI = downloadURI;
exports.debounce = debounce;
exports.uniqueId = uniqueId;
exports.objectForEach = objectForEach;
exports.objectMap = objectMap;

var _constants = __webpack_require__(4);

const getTimeObj = exports.getTimeObj = time => {
  if (time == null) {
    // If we clean up `<MiniTime />` we don't need to do this any more.
    return {
      minutesFirstDigit: " ",
      minutesSecondDigit: " ",
      secondsFirstDigit: " ",
      secondsSecondDigit: " "
    };
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const digits = time == null ? [" ", " ", " ", " "] : [Math.floor(minutes / 10), Math.floor(minutes % 10), Math.floor(seconds / 10), Math.floor(seconds % 10)];

  const minutesFirstDigit = digits[0],
        minutesSecondDigit = digits[1],
        secondsFirstDigit = digits[2],
        secondsSecondDigit = digits[3];


  return {
    minutesFirstDigit,
    minutesSecondDigit,
    secondsFirstDigit,
    secondsSecondDigit
  };
};

const getTimeStr = exports.getTimeStr = (time, truncate = true) => {
  if (time == null) {
    return "";
  }

  var _getTimeObj = getTimeObj(time);

  const minutesFirstDigit = _getTimeObj.minutesFirstDigit,
        minutesSecondDigit = _getTimeObj.minutesSecondDigit,
        secondsFirstDigit = _getTimeObj.secondsFirstDigit,
        secondsSecondDigit = _getTimeObj.secondsSecondDigit;


  return [truncate ? minutesFirstDigit || "" : minutesFirstDigit, minutesSecondDigit, ":", secondsFirstDigit, secondsSecondDigit].join("");
};

const getFileExtension = exports.getFileExtension = fileName => {
  const matches = /\.([a-z]{3,4})$/i.exec(fileName);
  return matches ? matches[1].toLowerCase() : null;
};

const parseViscolors = exports.parseViscolors = text => {
  const entries = text.split("\n");
  const regex = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/;
  const colors = [];
  // changed to a hard number to deal with empty lines at the end...
  // plus it's only meant to be an exact quantity of numbers anyway.
  // - @PAEz
  for (let i = 0; i < 24; i++) {
    const matches = regex.exec(entries[i]);
    colors[i] = matches ? `rgb(${matches.slice(1, 4).join(",")})` : _constants.DEFAULT_SKIN.colors[i];
  }
  return colors;
};

const SECTION_REGEX = /^\s*\[(.+?)\]\s*$/;
const PROPERTY_REGEX = /^\s*([^;].*)\s*=\s*(.*)\s*$/;

const parseIni = exports.parseIni = text => {
  let section, match;
  return text.split(/[\r\n]+/g).reduce((data, line) => {
    if ((match = line.match(PROPERTY_REGEX)) && section != null) {
      const value = match[2].replace(/(^")|("$)|(^')|('$)/gi, "");
      data[section][match[1].trim().toLowerCase()] = value;
    } else if (match = line.match(SECTION_REGEX)) {
      section = match[1].trim().toLowerCase();
      data[section] = {};
    }
    return data;
  }, {});
};

const clamp = exports.clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const base64FromArrayBuffer = exports.base64FromArrayBuffer = arrayBuffer => {
  const dataView = new Uint8Array(arrayBuffer);
  return window.btoa(String.fromCharCode(...dataView));
};

// https://stackoverflow.com/a/15832662/1263117
function downloadURI(uri, name) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
}

const toPercent = exports.toPercent = (min, max, value) => (value - min) / (max - min);

const percentToRange = exports.percentToRange = (percent, min, max) => min + Math.round(percent * (max - min));

const percentToIndex = exports.percentToIndex = (percent, length) => percentToRange(percent, 0, length - 1);

const rebound = (oldMin, oldMax, newMin, newMax) => oldValue => percentToRange(toPercent(oldMin, oldMax, oldValue), newMin, newMax);

// Convert a .eqf value to a 1-100
const normalize = exports.normalize = rebound(1, 64, 1, 100);

// Convert a 0-100 to an .eqf value
const denormalize = exports.denormalize = rebound(1, 100, 1, 64);

// Merge a `source` object to a `target` recursively
const merge = exports.merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]));
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source);
  return target;
};

// Maps a value in a range (defined my min/max) to a value in an array (options).
const segment = exports.segment = (min, max, value, newValues) => {
  const ratio = toPercent(min, max, value);
  /*
  | 0 | 1 | 2 |
  0   1   2   3
  */
  return newValues[percentToIndex(ratio, newValues.length)];
};

const arraysAreEqual = exports.arraysAreEqual = (a, b) => a.length === b.length && a.every((value, i) => value === b[i]);

// https://bost.ocks.org/mike/shuffle/
// Shuffle an array in O(n)
const shuffle = exports.shuffle = array => {
  const sorted = [...array];
  let m = sorted.length;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    const val = sorted[m];
    sorted[m] = sorted[i];
    sorted[i] = val;
  }

  return sorted;
};

const sort = exports.sort = (array, iteratee) => [...array].sort((a, b) => {
  const aKey = iteratee(a);
  const bKey = iteratee(b);
  if (aKey < bKey) {
    return -1;
  } else if (aKey > bKey) {
    return 1;
  }
  return 0;
});

const moveSelected = exports.moveSelected = (arr, isSelected, offset) => {
  const newArr = new Array(arr.length);
  let next = 0;
  for (let i = 0; i < newArr.length; i++) {
    const from = i - offset;
    // Is a value supposed to move here?
    if (from >= 0 && from < arr.length && isSelected(from)) {
      newArr[i] = arr[from];
    } else {
      while (next < arr.length && isSelected(next)) {
        next++;
      }
      newArr[i] = arr[next];
      next++;
    }
  }
  return newArr;
};

const spliceIn = exports.spliceIn = (original, start, newValues) => {
  const newArr = [...original];
  newArr.splice(start, 0, ...newValues);
  return newArr;
};

function debounce(func, delay) {
  let token;
  return function (...args) {
    if (token != null) {
      clearTimeout(token);
    }
    token = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let counter = 0;
function uniqueId() {
  return counter++;
}

function objectForEach(obj, cb) {
  Object.keys(obj).forEach(key => cb(obj[key], key));
}

function objectMap(obj, cb) {
  const modified = {};
  Object.keys(obj).forEach(key => modified[key] = cb(obj[key], key));
  return modified;
}

const objectFilter = exports.objectFilter = (obj, predicate) =>
// TODO: Could return the original reference if no values change
Object.keys(obj).reduce((newObj, key) => {
  if (predicate(obj[key], key)) {
    newObj[key] = obj[key];
  }
  return newObj;
}, {});

const calculateBoundingBox = exports.calculateBoundingBox = windows => windows.reduce((b, w) => ({
  left: Math.min(b.left, w.x),
  top: Math.min(b.top, w.y),
  bottom: Math.max(b.bottom, w.y + w.height),
  right: Math.max(b.right, w.x + w.width)
}), { top: 0, bottom: 0, left: 0, right: 0 });

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(201)();
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = exports.LinkNode = exports.Parent = exports.Hr = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(1);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(232);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

class Portal extends _react2.default.Component {
  componentWillMount() {
    this._node = document.createElement("div");
    this._node.id = "webamp-context-menu";
    this._node.style.position = "absolute";
    this._node.style.top = 0;
    this._node.style.left = 0;
    this._node.style.zIndex = this.props.zIndex + 1;
    document.body.appendChild(this._node);
  }

  componentWillUnmount() {
    document.body.removeChild(this._node);
  }

  render() {
    const style = {
      position: "absolute",
      top: this.props.top,
      left: this.props.left
    };
    return (0, _reactDom.createPortal)(_react2.default.createElement(
      "div",
      { style: style },
      this.props.children
    ), this._node);
  }
}

const Hr = exports.Hr = () => _react2.default.createElement(
  "li",
  { className: "hr" },
  _react2.default.createElement("hr", null)
);

const Parent = exports.Parent = ({ children, label }) => _react2.default.createElement(
  "li",
  { className: "parent" },
  _react2.default.createElement(
    "ul",
    null,
    children
  ),
  label
);

const LinkNode = exports.LinkNode = props => _react2.default.createElement(
  "li",
  null,
  _react2.default.createElement(
    "a",
    props,
    props.label
  )
);

LinkNode.propTypes = {
  label: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string.isRequired
};

const Node = props => {
  const label = props.label,
        checked = props.checked;
  var _props$className = props.className;

  const className = _props$className === undefined ? "" : _props$className,
        passThroughProps = _objectWithoutProperties(props, ["label", "checked", "className"]);

  return _react2.default.createElement(
    "li",
    _extends({ className: (0, _classnames2.default)(className, { checked }) }, passThroughProps),
    label
  );
};

exports.Node = Node;
Node.propTypes = {
  label: _propTypes2.default.string.isRequired,
  hotkey: _propTypes2.default.string
};

class ContextMenu extends _react2.default.Component {
  render() {
    var _props = this.props;
    const children = _props.children,
          offsetTop = _props.offsetTop,
          offsetLeft = _props.offsetLeft,
          top = _props.top,
          bottom = _props.bottom,
          selected = _props.selected,
          zIndex = _props.zIndex;

    return selected && _react2.default.createElement(
      Portal,
      { top: offsetTop, left: offsetLeft, zIndex: zIndex },
      _react2.default.createElement(
        "ul",
        { className: (0, _classnames2.default)("context-menu", { top, bottom }) },
        children
      )
    );
  }
}

const mapStateToProps = state => ({
  zIndex: state.display.zIndex
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ContextMenu);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(59)('wks');
var uid = __webpack_require__(35);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(234);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(32)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var createDesc = __webpack_require__(43);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(33);
var IE8_DOM_DEFINE = __webpack_require__(89);
var toPrimitive = __webpack_require__(58);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(225);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(154);
var defined = __webpack_require__(61);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(311);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27);
var createDesc = __webpack_require__(52);
module.exports = __webpack_require__(29) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);
var IE8_DOM_DEFINE = __webpack_require__(126);
var toPrimitive = __webpack_require__(73);
var dP = Object.defineProperty;

exports.f = __webpack_require__(29) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(40)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(129);
var defined = __webpack_require__(74);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(77)('wks');
var uid = __webpack_require__(55);
var Symbol = __webpack_require__(18).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var hide = __webpack_require__(15);
var has = __webpack_require__(19);
var SRC = __webpack_require__(35)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(42).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Character = __webpack_require__(119);

var _Character2 = _interopRequireDefault(_Character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CharacterString extends _react2.default.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children;
  }

  render() {
    const text = `${this.props.children}` || "";
    const chars = text.split("");
    return chars.map((character, index) => _react2.default.createElement(
      _Character2.default,
      { key: index + character },
      character
    ));
  }
}

CharacterString.propsTypes = {
  children: _propTypes2.default.string
};

exports.default = CharacterString;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let cursorX;
let cursorY;
window.document.addEventListener("mousemove", e => {
  cursorX = e.pageX;
  cursorY = e.pageY;
});

// We implement hover ourselves, because we hate ourselves and https://stackoverflow.com/a/13259049/1263117
class Entry extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  componentDidMount() {
    const domRect = this.node.getBoundingClientRect();
    this.setState({
      hover: cursorX >= domRect.left && cursorX <= domRect.right && cursorY >= domRect.top && cursorY <= domRect.bottom
    });
  }

  render() {
    return _react2.default.createElement(
      "li",
      {
        ref: node => this.node = node,
        onMouseEnter: () => this.setState({ hover: true }),
        onMouseLeave: () => this.setState({ hover: false }),
        className: (0, _classnames2.default)({ hover: this.state.hover })
      },
      this.props.children
    );
  }
}

class PlaylistMenu extends _react2.default.Component {
  constructor(props) {
    super(props);

    this._handleClick = e => {
      const target = e.target;
      const selected = this.state.selected;

      if (selected) {
        this.setState({ selected: false });
        return;
      }

      const handleClickOut = ee => {
        // If the click is _not_ inside the menu.
        if (!target.contains(ee.target)) {
          // If we've clicked on a Context Menu spawed inside this menu, it will
          // register as an external click. However, hiding the menu will remove
          // the Context Menu from the DOM. Therefore, we wait until the next
          // event loop to actually hide ourselves.
          setTimeout(() => {
            // Close the menu
            this.setState({ selected: false });
          }, 0);
          window.document.removeEventListener("click", handleClickOut, {
            capture: true
          });
        }
      };
      window.document.addEventListener("click", handleClickOut, {
        capture: true
      });

      this.setState({ selected: true });
    };

    this.state = { selected: false };
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        id: this.props.id,
        className: (0, _classnames2.default)("playlist-menu", {
          selected: this.state.selected
        }),
        onClick: this._handleClick
      },
      _react2.default.createElement("div", { className: "bar" }),
      this.state.selected && _react2.default.createElement(
        "ul",
        null,
        _react2.default.Children.map(this.props.children, (child, i) => _react2.default.createElement(
          Entry,
          { key: i },
          child
        ))
      )
    );
  }
}
exports.default = PlaylistMenu;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var core = __webpack_require__(20);
var ctx = __webpack_require__(125);
var hide = __webpack_require__(26);
var has = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(42);
var hide = __webpack_require__(15);
var redefine = __webpack_require__(34);
var ctx = __webpack_require__(90);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(92);
var enumBugKeys = __webpack_require__(63);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(15);
var redefine = __webpack_require__(34);
var fails = __webpack_require__(32);
var defined = __webpack_require__(61);
var wks = __webpack_require__(11);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(208);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextMenu = __webpack_require__(10);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

class ContextMenuWraper extends _react2.default.Component {
  constructor(props) {
    super(props);

    this._handleGlobalRightClick = () => {
      this._closeMenu();
    };

    this._handleGlobalClick = e => {
      if (e.button === 2) {
        return;
      }
      this._closeMenu();
    };

    this._handleRightClick = e => {
      const pageX = e.pageX,
            pageY = e.pageY;

      this.setState({
        selected: true,
        // TODO: We could do an initial render to see if the menu fits here
        // and do a second render if it does not.
        offsetTop: pageY,
        offsetLeft: pageX
      });
      // Even if you right click multiple times before closeing,
      // we should only end up with one global listener.
      document.addEventListener("click", this._handleGlobalClick);
      document.body.addEventListener("contextmenu", this._handleGlobalRightClick);
      e.preventDefault();
      e.stopPropagation();
    };

    this.state = {
      selected: false,
      offsetTop: null,
      offsetLeft: null
    };
  }

  componentWillUnmount() {
    this._closeMenu();
  }

  _closeMenu() {
    this.setState({ selected: false, offsetTop: null, offsetLeft: null });
    document.removeEventListener("click", this._handleGlobalClick);
    document.body.removeEventListener("contextmenu", this._handleGlobalRightClick);
  }

  render() {
    var _props = this.props;

    const children = _props.children,
          renderContents = _props.renderContents,
          passThroughProps = _objectWithoutProperties(_props, ["children", "renderContents"]);

    return _react2.default.createElement(
      "div",
      _extends({
        onContextMenu: this._handleRightClick,
        style: { width: "100%", height: "100%" }
      }, passThroughProps),
      _react2.default.createElement(
        _ContextMenu2.default,
        {
          selected: this.state.selected,
          offsetTop: this.state.offsetTop,
          offsetLeft: this.state.offsetLeft
        },
        renderContents()
      ),
      children
    );
  }
}

exports.default = ContextMenuWraper;
ContextMenuWraper.propTypes = {
  children: _propTypes2.default.any.isRequired,
  renderContents: _propTypes2.default.func.isRequired
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Emitter {
  on(event, callback) {
    const eventListeners = this._listeners[event] || [];
    eventListeners.push(callback);
    this._listeners[event] = eventListeners;
    const unsubscribe = () => {
      this._listeners[event] = eventListeners.filter(cb => cb !== callback);
    };
    return unsubscribe;
  }

  trigger(event, ...args) {
    const callbacks = this._listeners[event];
    if (callbacks) {
      callbacks.forEach(cb => cb(...args));
    }
  }

  constructor() {
    this._listeners = {};
  }
}
exports.default = Emitter;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Winamp has a strange behavior for the buttons at the top of the main window.
// It shows through to the main background sprite until the first time that it's
// clicked, and then it shows the dedicated undepressed sprite thereafter.
// This component is an abstraction that tracks if a div has ever been clicked.
// Look in `skinSelectors` for CSS selectors that look like `#some-id.clicked`
// for examples of this functionality in use.
class ClickedDiv extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return _react2.default.createElement("div", _extends({}, this.props, {
      className: (0, _classnames2.default)(this.props.className, this.state),
      onMouseDown: e => {
        if (!this.state.clicked) {
          this.setState({ clicked: true });
        }
        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }
      }
    }));
  }
}
exports.default = ClickedDiv;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(128);
var enumBugKeys = __webpack_require__(78);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(22);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(42);
var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(44) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys');
var uid = __webpack_require__(35);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 64 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var stringify = __webpack_require__(98);

var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
        ? self
        : {};

function isObject(what) {
  return typeof what === 'object' && what !== null;
}

// Yanked from https://git.io/vS8DV re-used under CC0
// with some tiny modifications
function isError(value) {
  switch (Object.prototype.toString.call(value)) {
    case '[object Error]':
      return true;
    case '[object Exception]':
      return true;
    case '[object DOMException]':
      return true;
    default:
      return value instanceof Error;
  }
}

function isErrorEvent(value) {
  return Object.prototype.toString.call(value) === '[object ErrorEvent]';
}

function isDOMError(value) {
  return Object.prototype.toString.call(value) === '[object DOMError]';
}

function isDOMException(value) {
  return Object.prototype.toString.call(value) === '[object DOMException]';
}

function isUndefined(what) {
  return what === void 0;
}

function isFunction(what) {
  return typeof what === 'function';
}

function isPlainObject(what) {
  return Object.prototype.toString.call(what) === '[object Object]';
}

function isString(what) {
  return Object.prototype.toString.call(what) === '[object String]';
}

function isArray(what) {
  return Object.prototype.toString.call(what) === '[object Array]';
}

function isEmptyObject(what) {
  if (!isPlainObject(what)) return false;

  for (var _ in what) {
    if (what.hasOwnProperty(_)) {
      return false;
    }
  }
  return true;
}

function supportsErrorEvent() {
  try {
    new ErrorEvent(''); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

function supportsDOMError() {
  try {
    new DOMError(''); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

function supportsDOMException() {
  try {
    new DOMException(''); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

function supportsFetch() {
  if (!('fetch' in _window)) return false;

  try {
    new Headers(); // eslint-disable-line no-new
    new Request(''); // eslint-disable-line no-new
    new Response(); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

// Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
// https://caniuse.com/#feat=referrer-policy
// It doesn't. And it throw exception instead of ignoring this parameter...
// REF: https://github.com/getsentry/raven-js/issues/1233
function supportsReferrerPolicy() {
  if (!supportsFetch()) return false;

  try {
    // eslint-disable-next-line no-new
    new Request('pickleRick', {
      referrerPolicy: 'origin'
    });
    return true;
  } catch (e) {
    return false;
  }
}

function supportsPromiseRejectionEvent() {
  return typeof PromiseRejectionEvent === 'function';
}

function wrappedCallback(callback) {
  function dataCallback(data, original) {
    var normalizedData = callback(data) || data;
    if (original) {
      return original(normalizedData) || normalizedData;
    }
    return normalizedData;
  }

  return dataCallback;
}

function each(obj, callback) {
  var i, j;

  if (isUndefined(obj.length)) {
    for (i in obj) {
      if (hasKey(obj, i)) {
        callback.call(null, i, obj[i]);
      }
    }
  } else {
    j = obj.length;
    if (j) {
      for (i = 0; i < j; i++) {
        callback.call(null, i, obj[i]);
      }
    }
  }
}

function objectMerge(obj1, obj2) {
  if (!obj2) {
    return obj1;
  }
  each(obj2, function(key, value) {
    obj1[key] = value;
  });
  return obj1;
}

/**
 * This function is only used for react-native.
 * react-native freezes object that have already been sent over the
 * js bridge. We need this function in order to check if the object is frozen.
 * So it's ok that objectFrozen returns false if Object.isFrozen is not
 * supported because it's not relevant for other "platforms". See related issue:
 * https://github.com/getsentry/react-native-sentry/issues/57
 */
function objectFrozen(obj) {
  if (!Object.isFrozen) {
    return false;
  }
  return Object.isFrozen(obj);
}

function truncate(str, max) {
  if (typeof max !== 'number') {
    throw new Error('2nd argument to `truncate` function should be a number');
  }
  if (typeof str !== 'string' || max === 0) {
    return str;
  }
  return str.length <= max ? str : str.substr(0, max) + '\u2026';
}

/**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */
function hasKey(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function joinRegExp(patterns) {
  // Combine an array of regular expressions and strings into one large regexp
  // Be mad.
  var sources = [],
    i = 0,
    len = patterns.length,
    pattern;

  for (; i < len; i++) {
    pattern = patterns[i];
    if (isString(pattern)) {
      // If it's a string, we need to escape it
      // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      sources.push(pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
    } else if (pattern && pattern.source) {
      // If it's a regexp already, we want to extract the source
      sources.push(pattern.source);
    }
    // Intentionally skip other cases
  }
  return new RegExp(sources.join('|'), 'i');
}

function urlencode(o) {
  var pairs = [];
  each(o, function(key, value) {
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  });
  return pairs.join('&');
}

// borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
// intentionally using regex and not <a/> href parsing trick because React Native and other
// environments where DOM might not be available
function parseUrl(url) {
  if (typeof url !== 'string') return {};
  var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

  // coerce to undefined values to empty string so we don't get 'undefined'
  var query = match[6] || '';
  var fragment = match[8] || '';
  return {
    protocol: match[2],
    host: match[4],
    path: match[5],
    relative: match[5] + query + fragment // everything minus origin
  };
}
function uuid4() {
  var crypto = _window.crypto || _window.msCrypto;

  if (!isUndefined(crypto) && crypto.getRandomValues) {
    // Use window.crypto API if available
    // eslint-disable-next-line no-undef
    var arr = new Uint16Array(8);
    crypto.getRandomValues(arr);

    // set 4 in byte 7
    arr[3] = (arr[3] & 0xfff) | 0x4000;
    // set 2 most significant bits of byte 9 to '10'
    arr[4] = (arr[4] & 0x3fff) | 0x8000;

    var pad = function(num) {
      var v = num.toString(16);
      while (v.length < 4) {
        v = '0' + v;
      }
      return v;
    };

    return (
      pad(arr[0]) +
      pad(arr[1]) +
      pad(arr[2]) +
      pad(arr[3]) +
      pad(arr[4]) +
      pad(arr[5]) +
      pad(arr[6]) +
      pad(arr[7])
    );
  } else {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @param elem
 * @returns {string}
 */
function htmlTreeAsString(elem) {
  /* eslint no-extra-parens:0*/
  var MAX_TRAVERSE_HEIGHT = 5,
    MAX_OUTPUT_LEN = 80,
    out = [],
    height = 0,
    len = 0,
    separator = ' > ',
    sepLength = separator.length,
    nextStr;

  while (elem && height++ < MAX_TRAVERSE_HEIGHT) {
    nextStr = htmlElementAsString(elem);
    // bail out if
    // - nextStr is the 'html' element
    // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
    //   (ignore this limit if we are on the first iteration)
    if (
      nextStr === 'html' ||
      (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)
    ) {
      break;
    }

    out.push(nextStr);

    len += nextStr.length;
    elem = elem.parentNode;
  }

  return out.reverse().join(separator);
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @param HTMLElement
 * @returns {string}
 */
function htmlElementAsString(elem) {
  var out = [],
    className,
    classes,
    key,
    attr,
    i;

  if (!elem || !elem.tagName) {
    return '';
  }

  out.push(elem.tagName.toLowerCase());
  if (elem.id) {
    out.push('#' + elem.id);
  }

  className = elem.className;
  if (className && isString(className)) {
    classes = className.split(/\s+/);
    for (i = 0; i < classes.length; i++) {
      out.push('.' + classes[i]);
    }
  }
  var attrWhitelist = ['type', 'name', 'title', 'alt'];
  for (i = 0; i < attrWhitelist.length; i++) {
    key = attrWhitelist[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push('[' + key + '="' + attr + '"]');
    }
  }
  return out.join('');
}

/**
 * Returns true if either a OR b is truthy, but not both
 */
function isOnlyOneTruthy(a, b) {
  return !!(!!a ^ !!b);
}

/**
 * Returns true if both parameters are undefined
 */
function isBothUndefined(a, b) {
  return isUndefined(a) && isUndefined(b);
}

/**
 * Returns true if the two input exception interfaces have the same content
 */
function isSameException(ex1, ex2) {
  if (isOnlyOneTruthy(ex1, ex2)) return false;

  ex1 = ex1.values[0];
  ex2 = ex2.values[0];

  if (ex1.type !== ex2.type || ex1.value !== ex2.value) return false;

  // in case both stacktraces are undefined, we can't decide so default to false
  if (isBothUndefined(ex1.stacktrace, ex2.stacktrace)) return false;

  return isSameStacktrace(ex1.stacktrace, ex2.stacktrace);
}

/**
 * Returns true if the two input stack trace interfaces have the same content
 */
function isSameStacktrace(stack1, stack2) {
  if (isOnlyOneTruthy(stack1, stack2)) return false;

  var frames1 = stack1.frames;
  var frames2 = stack2.frames;

  // Exit early if stacktrace is malformed
  if (frames1 === undefined || frames2 === undefined) return false;

  // Exit early if frame count differs
  if (frames1.length !== frames2.length) return false;

  // Iterate through every frame; bail out if anything differs
  var a, b;
  for (var i = 0; i < frames1.length; i++) {
    a = frames1[i];
    b = frames2[i];
    if (
      a.filename !== b.filename ||
      a.lineno !== b.lineno ||
      a.colno !== b.colno ||
      a['function'] !== b['function']
    )
      return false;
  }
  return true;
}

/**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */
function fill(obj, name, replacement, track) {
  if (obj == null) return;
  var orig = obj[name];
  obj[name] = replacement(orig);
  obj[name].__raven__ = true;
  obj[name].__orig__ = orig;
  if (track) {
    track.push([obj, name, orig]);
  }
}

/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns {string}
 */
function safeJoin(input, delimiter) {
  if (!isArray(input)) return '';

  var output = [];

  for (var i = 0; i < input.length; i++) {
    try {
      output.push(String(input[i]));
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
}

// Default Node.js REPL depth
var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
// 50kB, as 100kB is max payload size, so half sounds reasonable
var MAX_SERIALIZE_EXCEPTION_SIZE = 50 * 1024;
var MAX_SERIALIZE_KEYS_LENGTH = 40;

function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}

function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

function serializeValue(value) {
  if (typeof value === 'string') {
    var maxLength = 40;
    return truncate(value, maxLength);
  } else if (
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined'
  ) {
    return value;
  }

  var type = Object.prototype.toString.call(value);

  // Node.js REPL notation
  if (type === '[object Object]') return '[Object]';
  if (type === '[object Array]') return '[Array]';
  if (type === '[object Function]')
    return value.name ? '[Function: ' + value.name + ']' : '[Function]';

  return value;
}

function serializeObject(value, depth) {
  if (depth === 0) return serializeValue(value);

  if (isPlainObject(value)) {
    return Object.keys(value).reduce(function(acc, key) {
      acc[key] = serializeObject(value[key], depth - 1);
      return acc;
    }, {});
  } else if (Array.isArray(value)) {
    return value.map(function(val) {
      return serializeObject(val, depth - 1);
    });
  }

  return serializeValue(value);
}

function serializeException(ex, depth, maxSize) {
  if (!isPlainObject(ex)) return ex;

  depth = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_DEPTH : depth;
  maxSize = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_SIZE : maxSize;

  var serialized = serializeObject(ex, depth);

  if (jsonSize(stringify(serialized)) > maxSize) {
    return serializeException(ex, depth - 1);
  }

  return serialized;
}

function serializeKeysForMessage(keys, maxLength) {
  if (typeof keys === 'number' || typeof keys === 'string') return keys.toString();
  if (!Array.isArray(keys)) return '';

  keys = keys.filter(function(key) {
    return typeof key === 'string';
  });
  if (keys.length === 0) return '[object has no keys]';

  maxLength = typeof maxLength !== 'number' ? MAX_SERIALIZE_KEYS_LENGTH : maxLength;
  if (keys[0].length >= maxLength) return keys[0];

  for (var usedKeys = keys.length; usedKeys > 0; usedKeys--) {
    var serialized = keys.slice(0, usedKeys).join(', ');
    if (serialized.length > maxLength) continue;
    if (usedKeys === keys.length) return serialized;
    return serialized + '\u2026';
  }

  return '';
}

function sanitize(input, sanitizeKeys) {
  if (!isArray(sanitizeKeys) || (isArray(sanitizeKeys) && sanitizeKeys.length === 0))
    return input;

  var sanitizeRegExp = joinRegExp(sanitizeKeys);
  var sanitizeMask = '********';
  var safeInput;

  try {
    safeInput = JSON.parse(stringify(input));
  } catch (o_O) {
    return input;
  }

  function sanitizeWorker(workerInput) {
    if (isArray(workerInput)) {
      return workerInput.map(function(val) {
        return sanitizeWorker(val);
      });
    }

    if (isPlainObject(workerInput)) {
      return Object.keys(workerInput).reduce(function(acc, k) {
        if (sanitizeRegExp.test(k)) {
          acc[k] = sanitizeMask;
        } else {
          acc[k] = sanitizeWorker(workerInput[k]);
        }
        return acc;
      }, {});
    }

    return workerInput;
  }

  return sanitizeWorker(safeInput);
}

module.exports = {
  isObject: isObject,
  isError: isError,
  isErrorEvent: isErrorEvent,
  isDOMError: isDOMError,
  isDOMException: isDOMException,
  isUndefined: isUndefined,
  isFunction: isFunction,
  isPlainObject: isPlainObject,
  isString: isString,
  isArray: isArray,
  isEmptyObject: isEmptyObject,
  supportsErrorEvent: supportsErrorEvent,
  supportsDOMError: supportsDOMError,
  supportsDOMException: supportsDOMException,
  supportsFetch: supportsFetch,
  supportsReferrerPolicy: supportsReferrerPolicy,
  supportsPromiseRejectionEvent: supportsPromiseRejectionEvent,
  wrappedCallback: wrappedCallback,
  each: each,
  objectMerge: objectMerge,
  truncate: truncate,
  objectFrozen: objectFrozen,
  hasKey: hasKey,
  joinRegExp: joinRegExp,
  urlencode: urlencode,
  uuid4: uuid4,
  htmlTreeAsString: htmlTreeAsString,
  htmlElementAsString: htmlElementAsString,
  isSameException: isSameException,
  isSameStacktrace: isSameStacktrace,
  parseUrl: parseUrl,
  fill: fill,
  safeJoin: safeJoin,
  serializeException: serializeException,
  serializeKeysForMessage: serializeKeysForMessage,
  sanitize: sanitize
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
  if (false) {
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genMediaTags = genMediaTags;
exports.genMediaDuration = genMediaDuration;
exports.genArrayBufferFromFileReference = genArrayBufferFromFileReference;
exports.promptForFileReferences = promptForFileReferences;
exports.filenameFromUrl = filenameFromUrl;

var _invariant = __webpack_require__(69);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function genMediaTags(file) {
  (0, _invariant2.default)(file != null, "Attempted to get the tags of media file without passing a file");
  // Workaround https://github.com/aadsm/jsmediatags/issues/83
  if (typeof file === "string" && !/^[a-z]+:\/\//i.test(file)) {
    file = `${location.protocol}//${location.host}${location.pathname}${file}`;
  }
  return new Promise((resolve, reject) => {
    __webpack_require__.e/* require.ensure */(1).then((require => {
      const jsmediatags = __webpack_require__(139);
      try {
        jsmediatags.read(file, { onSuccess: resolve, onError: reject });
      } catch (e) {
        // Possibly jsmediatags could not find a parser for this file?
        // Nothing to do.
        // Consider removing this after https://github.com/aadsm/jsmediatags/issues/83 is resolved.
        reject(e);
      }
    }).bind(null, __webpack_require__)).catch(() => {
      // The dependency failed to load
    });
  });
}

function genMediaDuration(url) {
  (0, _invariant2.default)(typeof url === "string", "Attempted to get the duration of media file without passing a url");
  return new Promise((resolve, reject) => {
    // TODO: Does this actually stop downloading the file once it's
    // got the duration?
    const audio = document.createElement("audio");
    audio.crossOrigin = "anonymous";
    const durationChange = () => {
      resolve(audio.duration);
      audio.removeEventListener("durationchange", durationChange);
      audio.url = null;
      // TODO: Not sure if this really gets cleaned up.
    };
    audio.addEventListener("durationchange", durationChange);
    audio.addEventListener("error", e => {
      reject(e);
    });
    audio.src = url;
  });
}

async function genArrayBufferFromFileReference(fileReference) {
  (0, _invariant2.default)(fileReference != null, "Attempted to get an ArrayBuffer without assing a fileReference");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      resolve(e.target.result);
    };
    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsArrayBuffer(fileReference);
  });
}

async function promptForFileReferences({
  accept = null,
  directory = false
} = {}) {
  return new Promise(resolve => {
    // Does this represent a memory leak somehow?
    // Can this fail? Do we ever reject?
    const fileInput = document.createElement("input");
    if (accept) fileInput.setAttribute("accept", accept);
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.webkitdirectory = directory;
    fileInput.directory = directory;
    fileInput.mozdirectory = directory;
    // Not entirely sure why this is needed, since the input
    // was just created, but somehow this helps prevent change
    // events from getting swallowed.
    // https://stackoverflow.com/a/12102992/1263117
    fileInput.value = null;
    fileInput.addEventListener("change", e => {
      resolve(e.target.files);
    });
    fileInput.click();
  });
}

function urlIsBlobUrl(url) {
  return (/^blob:/.test(url)
  );
}

// This is not perfect, but... meh: https://stackoverflow.com/a/36756650/1263117
function filenameFromUrl(url) {
  if (urlIsBlobUrl(url)) {
    return null;
  }
  return url.split("/").pop().split("#")[0].split("?")[0];
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

class DropTarget extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleDrop = e => {
      this.supress(e);
      if (!this._node) {
        return;
      }

      var _node$getBoundingClie = this._node.getBoundingClientRect();

      const x = _node$getBoundingClie.x,
            y = _node$getBoundingClie.y;

      this.props.handleDrop(e, { x, y });
    }, this._ref = node => {
      this._node = node;
    }, _temp;
  }

  supress(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
    e.dataTransfer.effectAllowed = "link";
  }

  render() {
    var _props = this.props;

    const loadFilesFromReferences = _props.loadFilesFromReferences,
          handleDrop = _props.handleDrop,
          passThroughProps = _objectWithoutProperties(_props, ["loadFilesFromReferences", "handleDrop"]);

    return _react2.default.createElement("div", _extends({}, passThroughProps, {
      onDragStart: this.supress,
      onDragEnter: this.supress,
      onDragOver: this.supress,
      onDrop: this.handleDrop,
      ref: this._ref
    }));
  }
}
exports.default = DropTarget;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextMenu = __webpack_require__(10);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

class ContextMenuTarget extends _react2.default.Component {
  constructor(props) {
    super(props);

    this._handleHandleClick = () => {
      this.setState({ selected: !this.state.selected });
    };

    this._handleGlobalClick = e => {
      if (this.state.selected &&
      // Not sure how, but it's possible for this to get called when handleNode is null/undefined.
      // https://sentry.io/share/issue/2066cd79f21e4f279791319f4d2ea35d/
      this.handleNode && !this.handleNode.contains(e.target)) {
        this.setState({ selected: false });
      }
    };

    this.state = { selected: false };
  }

  componentDidMount() {
    document.addEventListener("click", this._handleGlobalClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._handleGlobalClick);
  }

  _offset() {
    if (!this.handleNode) {
      return { top: 0, left: 0 };
    }

    const rect = this.handleNode.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  render() {
    var _props = this.props;

    const handle = _props.handle,
          children = _props.children,
          top = _props.top,
          bottom = _props.bottom,
          passThroughProps = _objectWithoutProperties(_props, ["handle", "children", "top", "bottom"]);

    const offset = this._offset();
    return _react2.default.createElement(
      "div",
      passThroughProps,
      _react2.default.createElement(
        "div",
        {
          className: "handle",
          style: { width: "100%", height: "100%" },
          ref: node => this.handleNode = node,
          onClick: this._handleHandleClick
        },
        handle
      ),
      _react2.default.createElement(
        _ContextMenu2.default,
        {
          selected: this.state.selected,
          offsetTop: offset.top,
          offsetLeft: offset.left,
          top: top,
          bottom: bottom
        },
        children
      )
    );
  }
}

exports.default = ContextMenuTarget;
ContextMenuTarget.propTypes = {
  children: _propTypes2.default.any.isRequired,
  handle: _propTypes2.default.any.isRequired,
  top: _propTypes2.default.bool,
  bottom: _propTypes2.default.bool
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(28);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(77)('keys');
var uid = __webpack_require__(55);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(20);
var global = __webpack_require__(18);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(54) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 79 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(132);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(39);
var dPs = __webpack_require__(324);
var enumBugKeys = __webpack_require__(78);
var IE_PROTO = __webpack_require__(76)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(127)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(325).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(27).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(31)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(31);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var core = __webpack_require__(20);
var LIBRARY = __webpack_require__(54);
var wksExt = __webpack_require__(85);
var defineProperty = __webpack_require__(27).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(341);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(345);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(132);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 88 */
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

if (false) {
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(32)(function () {
  return Object.defineProperty(__webpack_require__(57)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(150);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(155)(false);
var IE_PROTO = __webpack_require__(62)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 94 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(33);
var dPs = __webpack_require__(159);
var enumBugKeys = __webpack_require__(63);
var IE_PROTO = __webpack_require__(62)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(57)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(96).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(92);
var hiddenKeys = __webpack_require__(63).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/*
 json-stringify-safe
 Like JSON.stringify, but doesn't throw on circular references.

 Originally forked from https://github.com/isaacs/json-stringify-safe
 version 5.0.1 on 3/8/2017 and modified to handle Errors serialization
 and IE8 compatibility. Tests for this are in test/vendor.

 ISC license: https://github.com/isaacs/json-stringify-safe/blob/master/LICENSE
*/

exports = module.exports = stringify;
exports.getSerialize = serializer;

function indexOf(haystack, needle) {
  for (var i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) return i;
  }
  return -1;
}

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}

// https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
function stringifyError(value) {
  var err = {
    // These properties are implemented as magical getters and don't show up in for in
    stack: value.stack,
    message: value.message,
    name: value.name
  };

  for (var i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      err[i] = value[i];
    }
  }

  return err;
}

function serializer(replacer, cycleReplacer) {
  var stack = [];
  var keys = [];

  if (cycleReplacer == null) {
    cycleReplacer = function(key, value) {
      if (stack[0] === value) {
        return '[Circular ~]';
      }
      return '[Circular ~.' + keys.slice(0, indexOf(stack, value)).join('.') + ']';
    };
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = indexOf(stack, this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

      if (~indexOf(stack, value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    return replacer == null
      ? value instanceof Error ? stringifyError(value) : value
      : replacer.call(this, key, value);
  };
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
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

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(102);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(105);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(68);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(213);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrackDisplayName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(4);

var _fileUtils = __webpack_require__(70);

var _utils = __webpack_require__(6);

const defaultPlaylistState = {
  trackOrder: [],
  currentTrack: null,
  tracks: {},
  lastSelectedIndex: null
};

const playlist = (state = defaultPlaylistState, action) => {
  switch (action.type) {
    case _actionTypes.CLICKED_TRACK:
      const clickedId = String(state.trackOrder[action.index]);
      return _extends({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, (track, id) => _extends({}, track, {
          selected: id === clickedId
        })),
        lastSelectedIndex: action.index
      });
    case _actionTypes.CTRL_CLICKED_TRACK:
      const id = state.trackOrder[action.index];
      const t = state.tracks[id];
      return _extends({}, state, {
        tracks: _extends({}, state.tracks, {
          [id]: _extends({}, t, { selected: !t.selected })
        }),
        // Using this as the lastClickedIndex is kinda funny, since you
        // may have just _un_selected the track. However, this is what
        // Winamp 2 does, so we'll copy it.
        lastSelectedIndex: action.index
      });
    case _actionTypes.SHIFT_CLICKED_TRACK:
      if (state.lastSelectedIndex == null) {
        return state;
      }
      const clickedIndex = action.index;
      const start = Math.min(clickedIndex, state.lastSelectedIndex);
      const end = Math.max(clickedIndex, state.lastSelectedIndex);
      const selected = new Set(state.trackOrder.slice(start, end + 1));
      return _extends({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, (track, trackId) => _extends({}, track, {
          selected: selected.has(Number(trackId))
        }))
      });
    case _actionTypes.SELECT_ALL:
      return _extends({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, track => _extends({}, track, { selected: true }))
      });
    case _actionTypes.SELECT_ZERO:
      return _extends({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, track => _extends({}, track, {
          selected: false
        }))
      });
    case _actionTypes.INVERT_SELECTION:
      return _extends({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, track => _extends({}, track, {
          selected: !track.selected
        }))
      });
    case _actionTypes.REMOVE_ALL_TRACKS:
      // TODO: Consider disposing of ObjectUrls
      return _extends({}, state, {
        trackOrder: [],
        currentTrack: null,
        tracks: {},
        lastSelectedIndex: null
      });
    case _actionTypes.REMOVE_TRACKS:
      // TODO: Consider disposing of ObjectUrls
      const actionIds = action.ids.map(Number);
      const currentTrack = state.currentTrack;

      return _extends({}, state, {
        trackOrder: state.trackOrder.filter(trackId => !actionIds.includes(trackId)),
        currentTrack: actionIds.includes(currentTrack) ? null : currentTrack,
        tracks: (0, _utils.objectFilter)(state.tracks, (track, trackId) => !action.ids.includes(trackId)),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    case _actionTypes.REVERSE_LIST:
      return _extends({}, state, {
        trackOrder: [...state.trackOrder].reverse(),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    case _actionTypes.RANDOMIZE_LIST:
      return _extends({}, state, {
        trackOrder: (0, _utils.shuffle)(state.trackOrder)
      });
    case _actionTypes.SET_TRACK_ORDER:
      const trackOrder = action.trackOrder;

      return _extends({}, state, { trackOrder });
    case _actionTypes.ADD_TRACK_FROM_URL:
      const atIndex = action.atIndex == null ? state.trackOrder.length : action.atIndex;
      return _extends({}, state, {
        trackOrder: [...state.trackOrder.slice(0, atIndex), Number(action.id), ...state.trackOrder.slice(atIndex)],
        tracks: _extends({}, state.tracks, {
          [action.id]: {
            id: action.id,
            selected: false,
            defaultName: action.defaultName,
            duration: action.duration == null ? null : action.duration,
            url: action.url,
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.NOT_REQUESTED
          }
        }),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    case _actionTypes.SET_MEDIA:
      return _extends({}, state, {
        tracks: _extends({}, state.tracks, {
          [action.id]: _extends({}, state.tracks[action.id], {
            duration: action.length
          })
        })
      });
    case _actionTypes.SET_MEDIA_TAGS:
      return _extends({}, state, {
        tracks: _extends({}, state.tracks, {
          [action.id]: _extends({}, state.tracks[action.id], {
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.COMPLETE,
            title: action.title,
            artist: action.artist,
            albumArtUrl: action.albumArtUrl
          })
        })
      });
    case _actionTypes.MEDIA_TAG_REQUEST_INITIALIZED:
      return _extends({}, state, {
        tracks: _extends({}, state.tracks, {
          [action.id]: _extends({}, state.tracks[action.id], {
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.INITIALIZED
          })
        })
      });
    case _actionTypes.MEDIA_TAG_REQUEST_FAILED:
      return _extends({}, state, {
        tracks: _extends({}, state.tracks, {
          [action.id]: _extends({}, state.tracks[action.id], {
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.FAILED
          })
        })
      });
    case _actionTypes.SET_MEDIA_DURATION:
      return _extends({}, state, {
        tracks: _extends({}, state.tracks, {
          [action.id]: _extends({}, state.tracks[action.id], {
            duration: action.duration
          })
        })
      });
    case _actionTypes.PLAY_TRACK:
    case _actionTypes.BUFFER_TRACK:
      return _extends({}, state, {
        currentTrack: action.id
      });
    case _actionTypes.DRAG_SELECTED:
      return _extends({}, state, {
        trackOrder: (0, _utils.moveSelected)(state.trackOrder, i => state.tracks[state.trackOrder[i]].selected, action.offset),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    default:
      return state;
  }
};

exports.default = playlist;
const getTrackDisplayName = exports.getTrackDisplayName = (state, id) => {
  const track = state.tracks[id];
  if (track == null) {
    return null;
  }
  const artist = track.artist,
        title = track.title,
        defaultName = track.defaultName,
        url = track.url;

  if (artist && title) {
    return `${artist} - ${title}`;
  } else if (title) {
    return title;
  } else if (defaultName) {
    return defaultName;
  } else if (url) {
    const filename = (0, _fileUtils.filenameFromUrl)(url);
    if (filename) {
      return filename;
    }
  }
  return "???";
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisualizerStyle = exports.getVisualizationOrder = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = __webpack_require__(107);

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(4);

const getVisualizationOrder = exports.getVisualizationOrder = state => {
  return [...state.additionalVisualizers, ..._constants.VISUALIZER_ORDER];
};

const getVisualizerStyle = exports.getVisualizerStyle = (0, _reselect.createSelector)(getVisualizationOrder, state => state.visualizerStyle, (visualizationOrder, visualizationStyle) => {
  return visualizationOrder[visualizationStyle];
});

const defaultDisplayState = {
  doubled: false,
  marqueeStep: 0,
  disableMarquee: false,
  loading: true,
  llama: false,
  closed: false,
  working: false,
  skinImages: _constants.DEFAULT_SKIN.images,
  skinColors: _constants.DEFAULT_SKIN.colors,
  skinCursors: null,
  skinPlaylistStyle: null,
  skinRegion: {},
  visualizerStyle: 0, // Index into VISUALIZER_ORDER
  dummyVizData: null,
  playlistScrollPosition: 0,
  skinGenLetterWidths: null, // TODO: Get the default value for this?
  additionalVisualizers: [],
  zIndex: 0
};

const display = (state = defaultDisplayState, action) => {
  switch (action.type) {
    case _actionTypes.TOGGLE_DOUBLESIZE_MODE:
      return _extends({}, state, { doubled: !state.doubled });
    case _actionTypes.TOGGLE_LLAMA_MODE:
      return _extends({}, state, { llama: !state.llama });
    case _actionTypes.STEP_MARQUEE:
      return state.disableMarquee ? state : _extends({}, state, { marqueeStep: state.marqueeStep + 1 });
    case _actionTypes.DISABLE_MARQUEE:
      return _extends({}, state, { disableMarquee: true });
    case _actionTypes.STOP_WORKING:
      return _extends({}, state, { working: false });
    case _actionTypes.START_WORKING:
      return _extends({}, state, { working: true });
    case _actionTypes.CLOSE_WINAMP:
      return _extends({}, state, { closed: true });
    case _actionTypes.LOADING:
      return _extends({}, state, { loading: true });
    case _actionTypes.LOADED:
      return _extends({}, state, { loading: false });
    case _actionTypes.SET_SKIN_DATA:
      return _extends({}, state, {
        loading: false,
        skinImages: action.skinImages,
        skinColors: action.skinColors,
        skinPlaylistStyle: action.skinPlaylistStyle,
        skinCursors: action.skinCursors,
        skinRegion: action.skinRegion,
        skinGenLetterWidths: action.skinGenLetterWidths
      });
    case _actionTypes.TOGGLE_VISUALIZER_STYLE:
      return _extends({}, state, {
        visualizerStyle: (state.visualizerStyle + 1) % getVisualizationOrder(state).length
      });
    case _actionTypes.REGISTER_VISUALIZER:
      return _extends({}, state, {
        additionalVisualizers: [action.id, ...state.additionalVisualizers]
      });
    case _actionTypes.SET_PLAYLIST_SCROLL_POSITION:
      return _extends({}, state, { playlistScrollPosition: action.position });
    case _actionTypes.SET_Z_INDEX:
      return _extends({}, state, { zIndex: action.zIndex });
    case _actionTypes.SET_DUMMY_VIZ_DATA:
      return _extends({}, state, { dummyVizData: action.data });
    default:
      return state;
  }
};
exports.default = display;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getPositionDiff = getPositionDiff;
exports.generateGraph = generateGraph;
function getPositionDiff(graph, sizeDiff) {
  const newGraph = {};
  const positionDiff = {};
  for (const key of Object.keys(graph)) {
    newGraph[key] = { above: [], left: [] };
    positionDiff[key] = { x: 0, y: 0 };
  }

  // Construct an inverted graph
  for (const _ref of Object.entries(graph)) {
    var _ref2 = _slicedToArray(_ref, 2);

    const key = _ref2[0];
    const neighbors = _ref2[1];
    const below = neighbors.below,
          right = neighbors.right;

    if (right != null) {
      newGraph[right].left.push(key);
    }
    if (below != null) {
      newGraph[below].above.push(key);
    }
  }

  function walkRight(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.left.forEach(left => {
      positionDiff[left].x += nodeSizeDiff.width + positionDiff[key].x;
      walkRight(left);
    });
  }

  function walkDown(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.above.forEach(above => {
      positionDiff[above].y += nodeSizeDiff.height + positionDiff[key].y;
      walkDown(above);
    });
  }

  // Find disconnected nodes, and walk
  for (const _ref3 of Object.entries(graph)) {
    var _ref4 = _slicedToArray(_ref3, 2);

    const key = _ref4[0];
    const neighbors = _ref4[1];

    if (neighbors.below == null) {
      walkDown(key);
    }
    if (neighbors.right == null) {
      walkRight(key);
    }
  }

  return positionDiff;
}

function generateGraph(windows) {
  const bottoms = {};
  const rights = {};
  for (const w of windows) {
    const bottom = w.y + w.height;
    if (bottoms[bottom]) {
      bottoms[bottom].push(w);
    } else {
      bottoms[bottom] = [w];
    }

    const right = w.x + w.width;
    if (rights[right]) {
      rights[right].push(w);
    } else {
      rights[right] = [w];
    }
  }

  const graph = {};
  for (const w of windows) {
    const edges = {};
    const top = w.y;
    const left = w.x;

    const tops = bottoms[top];
    const lefts = rights[left];
    if (tops) {
      for (const below of tops) {
        const isToTheLeft = below.x + below.width < w.x;
        const isToTheRight = below.x > w.x + w.width;

        const overlapsInX = !(isToTheLeft || isToTheRight);
        if (overlapsInX) {
          edges.below = below.key;
          break;
        }
      }
    }
    if (lefts) {
      for (const right of lefts) {
        const isAbove = right.y + right.height < w.y;
        const isBelow = right.y > w.y + w.height;
        const overlapsInY = !(isAbove || isBelow);
        if (overlapsInY) {
          edges.right = right.key;
          break;
        }
      }
    }

    graph[w.key] = edges;
  }
  return graph;
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// box = {x, y, width, height}

const SNAP_DISTANCE = exports.SNAP_DISTANCE = 15;

const top = exports.top = box => box.y;
const bottom = exports.bottom = box => box.y + box.height;
const left = exports.left = box => box.x;
const right = exports.right = box => box.x + box.width;

const near = exports.near = (a, b) => Math.abs(a - b) < SNAP_DISTANCE;

// http://stackoverflow.com/a/3269471/1263117
const overlapX = exports.overlapX = (a, b) => left(a) <= right(b) + SNAP_DISTANCE && left(b) <= right(a) + SNAP_DISTANCE;
const overlapY = exports.overlapY = (a, b) => top(a) <= bottom(b) + SNAP_DISTANCE && top(b) <= bottom(a) + SNAP_DISTANCE;

// Give a new position for `boxA` that snaps it to `boxB` if neede.
const snap = exports.snap = (boxA, boxB) => {
  let x, y;

  // TODO: Refactor/simplify this code
  if (overlapY(boxA, boxB)) {
    if (near(left(boxA), right(boxB))) {
      x = right(boxB);
    } else if (near(right(boxA), left(boxB))) {
      x = left(boxB) - boxA.width;
    } else if (near(left(boxA), left(boxB))) {
      x = left(boxB);
    } else if (near(right(boxA), right(boxB))) {
      x = right(boxB) - boxA.width;
    }
  }

  if (overlapX(boxA, boxB)) {
    if (near(top(boxA), bottom(boxB))) {
      y = bottom(boxB);
    } else if (near(bottom(boxA), top(boxB))) {
      y = top(boxB) - boxA.height;
    } else if (near(top(boxA), top(boxB))) {
      y = top(boxB);
    } else if (near(bottom(boxA), bottom(boxB))) {
      y = bottom(boxB) - boxA.height;
    }
  }
  return { x, y };
};

const snapDiff = exports.snapDiff = (a, b) => {
  const newPos = snap(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};

// TODO: Use the first x and y combo
const snapDiffManyToMany = exports.snapDiffManyToMany = (as, bs) => {
  let x = 0;
  let y = 0;
  for (const a of as) {
    for (const b of bs) {
      const diff = snapDiff(a, b);
      x = x || diff.x;
      y = y || diff.y;
      if (x > 0 && y > 0) {
        break;
      }
    }
  }
  return { x, y };
};

const snapToMany = exports.snapToMany = (boxA, otherBoxes) => {
  let x, y;

  otherBoxes.forEach(boxB => {
    const newPos = snap(boxA, boxB);
    x = newPos.x || x;
    y = newPos.y || y;
  });

  return { x, y };
};

const snapWithin = exports.snapWithin = (boxA, boundingBox) => {
  let x, y;

  if (boxA.x - SNAP_DISTANCE < 0) {
    x = 0;
  } else if (boxA.x + boxA.width + SNAP_DISTANCE > boundingBox.width) {
    x = boundingBox.width - boxA.width;
  }

  if (boxA.y - SNAP_DISTANCE < 0) {
    y = 0;
  } else if (boxA.y + boxA.height + SNAP_DISTANCE > boundingBox.height) {
    y = boundingBox.height - boxA.height;
  }

  return { x, y };
};

const snapWithinDiff = exports.snapWithinDiff = (a, b) => {
  const newPos = snapWithin(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};

const applySnap = exports.applySnap = (original, ...snaps) => snaps.reduce((previous, snapped) => _extends({}, previous, {
  x: typeof snapped.x !== "undefined" ? snapped.x : previous.x,
  y: typeof snapped.y !== "undefined" ? snapped.y : previous.y
}), original);

const boundingBox = exports.boundingBox = nodes => {
  const boxes = nodes.slice();
  const firstNode = boxes.pop();
  const bounding = {
    top: top(firstNode),
    right: right(firstNode),
    bottom: bottom(firstNode),
    left: left(firstNode)
  };

  boxes.forEach(node => {
    bounding.top = Math.min(bounding.top, top(node));
    bounding.right = Math.max(bounding.right, right(node));
    bounding.bottom = Math.max(bounding.bottom, bottom(node));
    bounding.left = Math.min(bounding.left, left(node));
  });

  return {
    x: bounding.left,
    y: bounding.top,
    width: bounding.right - bounding.left,
    height: bounding.bottom - bounding.top
  };
};

const traceConnection = exports.traceConnection = areConnected => (candidates, node) => {
  const connected = new Set();
  const checkNode = n => {
    for (const candidate of candidates) {
      if (!connected.has(candidate) && areConnected(candidate, n)) {
        connected.add(candidate);
        checkNode(candidate);
      }
    }
  };
  checkNode(node);
  return connected;
};

const applyDiff = exports.applyDiff = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y
});

// TODO: This should not
const applyMultipleDiffs = exports.applyMultipleDiffs = (initial, ...diffs) => {
  const metaDiff = diffs.reduce((m, diff) => ({
    // Use the smallest non-zero diff for each axis.
    // TODO: Min should be the absolute value
    x: m.x === 0 || diff.x === 0 ? m.x + diff.x : Math.min(m.x, diff.x),
    y: m.y === 0 || diff.y === 0 ? m.y + diff.y : Math.min(m.y, diff.y)
  }));
  return applyDiff(initial, metaDiff);
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEqBand = setEqBand;
exports.setEqToMax = setEqToMax;
exports.setEqToMid = setEqToMid;
exports.setEqToMin = setEqToMin;
exports.setPreamp = setPreamp;
exports.toggleEq = toggleEq;

var _constants = __webpack_require__(4);

var _actionTypes = __webpack_require__(3);

const BAND_SNAP_DISTANCE = 10;
const BAND_MID_POINT_VALUE = 50;
function setEqBand(band, value) {
  if (value < BAND_MID_POINT_VALUE + BAND_SNAP_DISTANCE && value > BAND_MID_POINT_VALUE - BAND_SNAP_DISTANCE) {
    return { type: _actionTypes.SET_BAND_VALUE, band, value: BAND_MID_POINT_VALUE };
  }
  return { type: _actionTypes.SET_BAND_VALUE, band, value };
}

function _setEqTo(value) {
  return dispatch => {
    Object.keys(_constants.BANDS).forEach(key => {
      dispatch({
        type: _actionTypes.SET_BAND_VALUE,
        value,
        band: _constants.BANDS[key]
      });
    });
  };
}

function setEqToMax() {
  return _setEqTo(100);
}

function setEqToMid() {
  return _setEqTo(50);
}

function setEqToMin() {
  return _setEqTo(0);
}

function setPreamp(value) {
  return { type: _actionTypes.SET_BAND_VALUE, band: "preamp", value };
}

function toggleEq() {
  return (dispatch, getState) => {
    const type = getState().equalizer.on ? _actionTypes.SET_EQ_OFF : _actionTypes.SET_EQ_ON;
    dispatch({ type });
  };
}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

var PRESET_VALUES = [
  "hz60",
  "hz170",
  "hz310",
  "hz600",
  "hz1000",
  "hz3000",
  "hz6000",
  "hz12000",
  "hz14000",
  "hz16000",
  "preamp"
];

var HEADER = "Winamp EQ library file v1.1";

module.exports = {
  PRESET_VALUES: PRESET_VALUES,
  HEADER: HEADER
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageConstFromChar = exports.FONT_LOOKUP = undefined;

var _constants = __webpack_require__(4);

/* TODO: There are too many " " and "_" characters */
const FONT_LOOKUP = exports.FONT_LOOKUP = {
  a: [0, 0],
  b: [0, 1],
  c: [0, 2],
  d: [0, 3],
  e: [0, 4],
  f: [0, 5],
  g: [0, 6],
  h: [0, 7],
  i: [0, 8],
  j: [0, 9],
  k: [0, 10],
  l: [0, 11],
  m: [0, 12],
  n: [0, 13],
  o: [0, 14],
  p: [0, 15],
  q: [0, 16],
  r: [0, 17],
  s: [0, 18],
  t: [0, 19],
  u: [0, 20],
  v: [0, 21],
  w: [0, 22],
  x: [0, 23],
  y: [0, 24],
  z: [0, 25],
  '"': [0, 26],
  "@": [0, 27],
  " ": [0, 30],
  "0": [1, 0],
  "1": [1, 1],
  "2": [1, 2],
  "3": [1, 3],
  "4": [1, 4],
  "5": [1, 5],
  "6": [1, 6],
  "7": [1, 7],
  "8": [1, 8],
  "9": [1, 9],
  [_constants.UTF8_ELLIPSIS]: [1, 10],
  _: [1, 11],
  ":": [1, 12],
  "(": [1, 13],
  ")": [1, 14],
  "-": [1, 15],
  "'": [1, 16],
  "!": [1, 17],
  "+": [1, 19],
  "\\": [1, 20],
  "/": [1, 21],
  "[": [1, 22],
  "]": [1, 23],
  "^": [1, 24],
  "&": [1, 25],
  "%": [1, 26],
  ".": [1, 27],
  "=": [1, 28],
  $: [1, 29],
  "#": [1, 30],
  Å: [2, 0],
  Ö: [2, 1],
  Ä: [2, 2],
  "?": [2, 3],
  "*": [2, 4],
  "<": [1, 22],
  ">": [1, 23],
  "{": [1, 22],
  "}": [1, 23]
};

const imageConstFromChar = exports.imageConstFromChar = char => `CHARACTER_${char.charCodeAt(0)}`;

const CHAR_X = 5;
const CHAR_Y = 6;

const characterSprites = [];
for (const key in FONT_LOOKUP) {
  if (FONT_LOOKUP.hasOwnProperty(key)) {
    const position = FONT_LOOKUP[key];
    characterSprites.push({
      name: imageConstFromChar(key),
      y: position[0] * CHAR_Y,
      x: position[1] * CHAR_X,
      width: CHAR_X,
      height: CHAR_Y
    });
  }
}

exports.default = {
  BALANCE: [{ name: "MAIN_BALANCE_BACKGROUND", x: 9, y: 0, width: 38, height: 420 }, { name: "MAIN_BALANCE_THUMB", x: 15, y: 422, width: 14, height: 11 }, { name: "MAIN_BALANCE_THUMB_ACTIVE", x: 0, y: 422, width: 14, height: 11 }],
  CBUTTONS: [{ name: "MAIN_PREVIOUS_BUTTON", x: 0, y: 0, width: 23, height: 18 }, {
    name: "MAIN_PREVIOUS_BUTTON_ACTIVE",
    x: 0,
    y: 18,
    width: 23,
    height: 18
  }, { name: "MAIN_PLAY_BUTTON", x: 23, y: 0, width: 23, height: 18 }, { name: "MAIN_PLAY_BUTTON_ACTIVE", x: 23, y: 18, width: 23, height: 18 }, { name: "MAIN_PAUSE_BUTTON", x: 46, y: 0, width: 23, height: 18 }, { name: "MAIN_PAUSE_BUTTON_ACTIVE", x: 46, y: 18, width: 23, height: 18 }, { name: "MAIN_STOP_BUTTON", x: 69, y: 0, width: 23, height: 18 }, { name: "MAIN_STOP_BUTTON_ACTIVE", x: 69, y: 18, width: 23, height: 18 }, { name: "MAIN_NEXT_BUTTON", x: 92, y: 0, width: 23, height: 18 }, { name: "MAIN_NEXT_BUTTON_ACTIVE", x: 92, y: 18, width: 22, height: 18 }, { name: "MAIN_EJECT_BUTTON", x: 114, y: 0, width: 22, height: 16 }, { name: "MAIN_EJECT_BUTTON_ACTIVE", x: 114, y: 16, width: 22, height: 16 }],
  MAIN: [{ name: "MAIN_WINDOW_BACKGROUND", x: 0, y: 0, width: 275, height: 116 }],
  MONOSTER: [{ name: "MAIN_STEREO", x: 0, y: 12, width: 29, height: 12 }, { name: "MAIN_STEREO_SELECTED", x: 0, y: 0, width: 29, height: 12 }, { name: "MAIN_MONO", x: 29, y: 12, width: 27, height: 12 }, { name: "MAIN_MONO_SELECTED", x: 29, y: 0, width: 27, height: 12 }],
  NUMBERS: [{ name: "NO_MINUS_SIGN", x: 9, y: 6, width: 5, height: 1 }, { name: "MINUS_SIGN", x: 20, y: 6, width: 5, height: 1 }, { name: "DIGIT_0", x: 0, y: 0, width: 9, height: 13 }, { name: "DIGIT_1", x: 9, y: 0, width: 9, height: 13 }, { name: "DIGIT_2", x: 18, y: 0, width: 9, height: 13 }, { name: "DIGIT_3", x: 27, y: 0, width: 9, height: 13 }, { name: "DIGIT_4", x: 36, y: 0, width: 9, height: 13 }, { name: "DIGIT_5", x: 45, y: 0, width: 9, height: 13 }, { name: "DIGIT_6", x: 54, y: 0, width: 9, height: 13 }, { name: "DIGIT_7", x: 63, y: 0, width: 9, height: 13 }, { name: "DIGIT_8", x: 72, y: 0, width: 9, height: 13 }, { name: "DIGIT_9", x: 81, y: 0, width: 9, height: 13 }],
  NUMS_EX: [{ name: "NO_MINUS_SIGN_EX", x: 90, y: 0, width: 9, height: 13 }, { name: "MINUS_SIGN_EX", x: 99, y: 0, width: 9, height: 13 }, { name: "DIGIT_0_EX", x: 0, y: 0, width: 9, height: 13 }, { name: "DIGIT_1_EX", x: 9, y: 0, width: 9, height: 13 }, { name: "DIGIT_2_EX", x: 18, y: 0, width: 9, height: 13 }, { name: "DIGIT_3_EX", x: 27, y: 0, width: 9, height: 13 }, { name: "DIGIT_4_EX", x: 36, y: 0, width: 9, height: 13 }, { name: "DIGIT_5_EX", x: 45, y: 0, width: 9, height: 13 }, { name: "DIGIT_6_EX", x: 54, y: 0, width: 9, height: 13 }, { name: "DIGIT_7_EX", x: 63, y: 0, width: 9, height: 13 }, { name: "DIGIT_8_EX", x: 72, y: 0, width: 9, height: 13 }, { name: "DIGIT_9_EX", x: 81, y: 0, width: 9, height: 13 }],
  PLAYPAUS: [{ name: "MAIN_PLAYING_INDICATOR", x: 0, y: 0, width: 9, height: 9 }, { name: "MAIN_PAUSED_INDICATOR", x: 9, y: 0, width: 9, height: 9 }, { name: "MAIN_STOPPED_INDICATOR", x: 18, y: 0, width: 9, height: 9 }, { name: "MAIN_NOT_WORKING_INDICATOR", x: 36, y: 0, width: 9, height: 9 }, { name: "MAIN_WORKING_INDICATOR", x: 39, y: 0, width: 9, height: 9 }],
  PLEDIT: [{ name: "PLAYLIST_TOP_TILE", x: 127, y: 21, width: 25, height: 20 }, { name: "PLAYLIST_TOP_LEFT_CORNER", x: 0, y: 21, width: 25, height: 20 }, { name: "PLAYLIST_TITLE_BAR", x: 26, y: 21, width: 100, height: 20 }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER",
    x: 153,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_TILE_SELECTED",
    x: 127,
    y: 0,
    width: 25,
    height: 20
  }, { name: "PLAYLIST_TOP_LEFT_SELECTED", x: 0, y: 0, width: 25, height: 20 }, {
    name: "PLAYLIST_TITLE_BAR_SELECTED",
    x: 26,
    y: 0,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER_SELECTED",
    x: 153,
    y: 0,
    width: 25,
    height: 20
  }, { name: "PLAYLIST_LEFT_TILE", x: 0, y: 42, width: 12, height: 29 }, { name: "PLAYLIST_RIGHT_TILE", x: 31, y: 42, width: 20, height: 29 }, { name: "PLAYLIST_BOTTOM_TILE", x: 179, y: 0, width: 25, height: 38 }, {
    name: "PLAYLIST_BOTTOM_LEFT_CORNER",
    x: 0,
    y: 72,
    width: 125,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_RIGHT_CORNER",
    x: 126,
    y: 72,
    width: 150,
    height: 38
  }, {
    name: "PLAYLIST_VISUALIZER_BACKGROUND",
    x: 205,
    y: 0,
    width: 75,
    height: 38
  }, { name: "PLAYLIST_SHADE_BACKGROUND", x: 72, y: 57, width: 25, height: 14 }, {
    name: "PLAYLIST_SHADE_BACKGROUND_LEFT",
    x: 72,
    y: 42,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT",
    x: 99,
    y: 57,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED",
    x: 99,
    y: 42,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SCROLL_HANDLE_SELECTED",
    x: 61,
    y: 53,
    width: 8,
    height: 18
  }, { name: "PLAYLIST_SCROLL_HANDLE", x: 52, y: 53, width: 8, height: 18 }, { name: "PLAYLIST_ADD_URL", x: 0, y: 111, width: 22, height: 18 }, { name: "PLAYLIST_ADD_URL_SELECTED", x: 23, y: 111, width: 22, height: 18 }, { name: "PLAYLIST_ADD_DIR", x: 0, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_ADD_DIR_SELECTED", x: 23, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_ADD_FILE", x: 0, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_ADD_FILE_SELECTED",
    x: 23,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_REMOVE_ALL", x: 54, y: 111, width: 22, height: 18 }, {
    name: "PLAYLIST_REMOVE_ALL_SELECTED",
    x: 77,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_CROP", x: 54, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_CROP_SELECTED", x: 77, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_REMOVE_SELECTED", x: 54, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_REMOVE_SELECTED_SELECTED",
    x: 77,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_REMOVE_MISC", x: 54, y: 168, width: 22, height: 18 }, {
    name: "PLAYLIST_REMOVE_MISC_SELECTED",
    x: 77,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION",
    x: 104,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION_SELECTED",
    x: 127,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SELECT_ZERO", x: 104, y: 130, width: 22, height: 18 }, {
    name: "PLAYLIST_SELECT_ZERO_SELECTED",
    x: 127,
    y: 130,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SELECT_ALL", x: 104, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_SELECT_ALL_SELECTED",
    x: 127,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SORT_LIST", x: 154, y: 111, width: 22, height: 18 }, {
    name: "PLAYLIST_SORT_LIST_SELECTED",
    x: 177,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_FILE_INFO", x: 154, y: 130, width: 22, height: 18 }, {
    name: "PLAYLIST_FILE_INFO_SELECTED",
    x: 177,
    y: 130,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_MISC_OPTIONS", x: 154, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_MISC_OPTIONS_SELECTED",
    x: 177,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_NEW_LIST", x: 204, y: 111, width: 22, height: 18 }, {
    name: "PLAYLIST_NEW_LIST_SELECTED",
    x: 227,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SAVE_LIST", x: 204, y: 130, width: 22, height: 18 }, {
    name: "PLAYLIST_SAVE_LIST_SELECTED",
    x: 227,
    y: 130,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_LOAD_LIST", x: 204, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_LOAD_LIST_SELECTED",
    x: 227,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_ADD_MENU_BAR", x: 48, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_REMOVE_MENU_BAR", x: 100, y: 111, width: 3, height: 72 }, { name: "PLAYLIST_SELECT_MENU_BAR", x: 150, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_MISC_MENU_BAR", x: 200, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_LIST_BAR", x: 250, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_CLOSE_SELECTED", x: 52, y: 42, width: 9, height: 9 }, { name: "PLAYLIST_COLLAPSE_SELECTED", x: 62, y: 42, width: 9, height: 9 }, { name: "PLAYLIST_EXPAND_SELECTED", x: 150, y: 42, width: 9, height: 9 }],
  EQ_EX: [{
    name: "EQ_SHADE_BACKGROUND_SELECTED",
    x: 0,
    y: 0,
    width: 275,
    height: 14
  }, { name: "EQ_SHADE_BACKGROUND", x: 0, y: 15, width: 275, height: 14 }, { name: "EQ_SHADE_VOLUME_SLIDER_LEFT", x: 1, y: 30, width: 3, height: 7 }, { name: "EQ_SHADE_VOLUME_SLIDER_CENTER", x: 4, y: 30, width: 3, height: 7 }, { name: "EQ_SHADE_VOLUME_SLIDER_RIGHT", x: 7, y: 30, width: 3, height: 7 }, { name: "EQ_SHADE_BALANCE_SLIDER_LEFT", x: 11, y: 30, width: 3, height: 7 }, {
    name: "EQ_SHADE_BALANCE_SLIDER_CENTER",
    x: 14,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_RIGHT",
    x: 17,
    y: 30,
    width: 3,
    height: 7
  }, { name: "EQ_MAXIMIZE_BUTTON_ACTIVE", x: 1, y: 38, width: 9, height: 9 }, { name: "EQ_MINIMIZE_BUTTON_ACTIVE", x: 1, y: 47, width: 9, height: 9 }, { name: "EQ_CLOSE_BUTTON", x: 11, y: 38, width: 9, height: 9 }, { name: "EQ_CLOSE_BUTTON_ACTIVE", x: 11, y: 47, width: 9, height: 9 }],
  EQMAIN: [{ name: "EQ_WINDOW_BACKGROUND", x: 0, y: 0, width: 275, height: 116 }, { name: "EQ_TITLE_BAR", x: 0, y: 149, width: 275, height: 14 }, { name: "EQ_TITLE_BAR_SELECTED", x: 0, y: 134, width: 275, height: 14 }, { name: "EQ_SLIDER_BACKGROUND", x: 13, y: 164, width: 209, height: 129 }, { name: "EQ_SLIDER_THUMB", x: 0, y: 164, width: 11, height: 11 }, { name: "EQ_SLIDER_THUMB_SELECTED", x: 0, y: 176, width: 11, height: 11 }, { name: "EQ_ON_BUTTON", x: 10, y: 119, width: 26, height: 12 }, { name: "EQ_ON_BUTTON_DEPRESSED", x: 128, y: 119, width: 26, height: 12 }, { name: "EQ_ON_BUTTON_SELECTED", x: 69, y: 119, width: 26, height: 12 }, {
    name: "EQ_ON_BUTTON_SELECTED_DEPRESSED",
    x: 187,
    y: 119,
    width: 26,
    height: 12
  }, { name: "EQ_AUTO_BUTTON", x: 36, y: 119, width: 32, height: 12 }, {
    name: "EQ_AUTO_BUTTON_DEPRESSED",
    x: 154,
    y: 119,
    width: 32,
    height: 12
  }, { name: "EQ_AUTO_BUTTON_SELECTED", x: 95, y: 119, width: 32, height: 12 }, {
    name: "EQ_AUTO_BUTTON_SELECTED_DEPRESSED",
    x: 213,
    y: 119,
    width: 32,
    height: 12
  }, { name: "EQ_GRAPH_BACKGROUND", x: 0, y: 294, width: 113, height: 19 }, { name: "EQ_GRAPH_LINE_COLORS", x: 115, y: 294, width: 1, height: 19 }, { name: "EQ_PRESETS_BUTTON", x: 224, y: 164, width: 44, height: 12 }, {
    name: "EQ_PRESETS_BUTTON_SELECTED",
    x: 224,
    y: 176,
    width: 44,
    height: 12
  }, { name: "EQ_PREAMP_LINE", x: 0, y: 314, width: 113, height: 1 }],
  POSBAR: [{
    name: "MAIN_POSITION_SLIDER_BACKGROUND",
    x: 0,
    y: 0,
    width: 248,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB",
    x: 248,
    y: 0,
    width: 29,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB_SELECTED",
    x: 278,
    y: 0,
    width: 29,
    height: 10
  }],
  SHUFREP: [{ name: "MAIN_SHUFFLE_BUTTON", x: 28, y: 0, width: 47, height: 15 }, {
    name: "MAIN_SHUFFLE_BUTTON_DEPRESSED",
    x: 28,
    y: 15,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED",
    x: 28,
    y: 30,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED",
    x: 28,
    y: 45,
    width: 47,
    height: 15
  }, { name: "MAIN_REPEAT_BUTTON", x: 0, y: 0, width: 28, height: 15 }, {
    name: "MAIN_REPEAT_BUTTON_DEPRESSED",
    x: 0,
    y: 15,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED",
    x: 0,
    y: 30,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED",
    x: 0,
    y: 45,
    width: 28,
    height: 15
  }, { name: "MAIN_EQ_BUTTON", x: 0, y: 61, width: 23, height: 12 }, { name: "MAIN_EQ_BUTTON_SELECTED", x: 0, y: 73, width: 23, height: 12 }, { name: "MAIN_EQ_BUTTON_DEPRESSED", x: 46, y: 61, width: 23, height: 12 }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED_SELECTED",
    x: 46,
    y: 73,
    width: 23,
    height: 12
  }, { name: "MAIN_PLAYLIST_BUTTON", x: 23, y: 61, width: 23, height: 12 }, {
    name: "MAIN_PLAYLIST_BUTTON_SELECTED",
    x: 23,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED",
    x: 69,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED",
    x: 69,
    y: 73,
    width: 23,
    height: 12
  }],
  TEXT: characterSprites,
  TITLEBAR: [{ name: "MAIN_TITLE_BAR", x: 27, y: 15, width: 275, height: 14 }, { name: "MAIN_TITLE_BAR_SELECTED", x: 27, y: 0, width: 275, height: 14 }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR",
    x: 27,
    y: 72,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR_SELECTED",
    x: 27,
    y: 57,
    width: 275,
    height: 14
  }, { name: "MAIN_OPTIONS_BUTTON", x: 0, y: 0, width: 9, height: 9 }, {
    name: "MAIN_OPTIONS_BUTTON_DEPRESSED",
    x: 0,
    y: 9,
    width: 9,
    height: 9
  }, { name: "MAIN_MINIMIZE_BUTTON", x: 9, y: 0, width: 9, height: 9 }, {
    name: "MAIN_MINIMIZE_BUTTON_DEPRESSED",
    x: 9,
    y: 9,
    width: 9,
    height: 9
  }, { name: "MAIN_SHADE_BUTTON", x: 0, y: 18, width: 9, height: 9 }, { name: "MAIN_SHADE_BUTTON_DEPRESSED", x: 9, y: 18, width: 9, height: 9 }, { name: "MAIN_CLOSE_BUTTON", x: 18, y: 0, width: 9, height: 9 }, { name: "MAIN_CLOSE_BUTTON_DEPRESSED", x: 18, y: 9, width: 9, height: 9 }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND",
    x: 304,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND_DISABLED",
    x: 312,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_O_SELECTED",
    x: 304,
    y: 47,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_A_SELECTED",
    x: 312,
    y: 55,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_I_SELECTED",
    x: 320,
    y: 62,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_D_SELECTED",
    x: 328,
    y: 69,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_V_SELECTED",
    x: 336,
    y: 77,
    width: 8,
    height: 7
  }, { name: "MAIN_SHADE_BACKGROUND", x: 27, y: 42, width: 275, height: 14 }, {
    name: "MAIN_SHADE_BACKGROUND_SELECTED",
    x: 27,
    y: 29,
    width: 275,
    height: 14
  }, { name: "MAIN_SHADE_BUTTON_SELECTED", x: 0, y: 27, width: 9, height: 9 }, {
    name: "MAIN_SHADE_BUTTON_SELECTED_DEPRESSED",
    x: 9,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_POSITION_BACKGROUND",
    x: 0,
    y: 36,
    width: 17,
    height: 7
  }, { name: "MAIN_SHADE_POSITION_THUMB", x: 20, y: 36, width: 3, height: 7 }, {
    name: "MAIN_SHADE_POSITION_THUMB_LEFT",
    x: 17,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_RIGHT",
    x: 23,
    y: 36,
    width: 3,
    height: 7
  }],
  VOLUME: [{ name: "MAIN_VOLUME_BACKGROUND", x: 0, y: 0, width: 68, height: 420 }, { name: "MAIN_VOLUME_THUMB", x: 15, y: 422, width: 14, height: 11 }, {
    name: "MAIN_VOLUME_THUMB_SELECTED",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  GEN: [{ name: "GEN_TOP_LEFT_SELECTED", x: 0, y: 0, width: 25, height: 20 }, { name: "GEN_TOP_LEFT_END_SELECTED", x: 26, y: 0, width: 25, height: 20 }, {
    name: "GEN_TOP_CENTER_FILL_SELECTED",
    x: 52,
    y: 0,
    width: 25,
    height: 20
  }, { name: "GEN_TOP_RIGHT_END_SELECTED", x: 78, y: 0, width: 25, height: 20 }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL_SELECTED",
    x: 104,
    y: 0,
    width: 25,
    height: 20
  }, { name: "GEN_TOP_RIGHT_SELECTED", x: 130, y: 0, width: 25, height: 20 }, { name: "GEN_TOP_LEFT", x: 0, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_LEFT_END", x: 26, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_CENTER_FILL", x: 52, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_RIGHT_END", x: 78, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_LEFT_RIGHT_FILL", x: 104, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_RIGHT", x: 130, y: 21, width: 25, height: 20 }, { name: "GEN_BOTTOM_LEFT", x: 0, y: 42, width: 125, height: 14 }, { name: "GEN_BOTTOM_RIGHT", x: 0, y: 57, width: 125, height: 14 }, { name: "GEN_BOTTOM_FILL", x: 127, y: 72, width: 25, height: 14 }, { name: "GEN_MIDDLE_LEFT", x: 127, y: 42, width: 11, height: 29 }, { name: "GEN_MIDDLE_LEFT_BOTTOM", x: 158, y: 42, width: 11, height: 24 }, { name: "GEN_MIDDLE_RIGHT", x: 139, y: 42, width: 8, height: 29 }, { name: "GEN_MIDDLE_RIGHT_BOTTOM", x: 170, y: 42, width: 8, height: 24 }, { name: "GEN_CLOSE_SELECTED", x: 148, y: 42, width: 9, height: 9 }]
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cropPlaylist = cropPlaylist;
exports.removeSelectedTracks = removeSelectedTracks;
exports.removeAllTracks = removeAllTracks;
exports.reverseList = reverseList;
exports.randomizeList = randomizeList;
exports.sortListByTitle = sortListByTitle;
exports.setPlaylistScrollPosition = setPlaylistScrollPosition;
exports.scrollNTracks = scrollNTracks;
exports.scrollPlaylistByDelta = scrollPlaylistByDelta;
exports.scrollUpFourTracks = scrollUpFourTracks;
exports.scrollDownFourTracks = scrollDownFourTracks;
exports.dragSelected = dragSelected;

var _constants = __webpack_require__(4);

var _selectors = __webpack_require__(5);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

function cropPlaylist() {
  return (dispatch, getState) => {
    const state = getState();
    if ((0, _selectors.getSelectedTrackObjects)(state).length === 0) {
      return;
    }

    var _getState = getState();

    const tracks = _getState.playlist.tracks;

    dispatch({
      type: _actionTypes.REMOVE_TRACKS,
      ids: Object.keys(tracks).filter(id => !tracks[id].selected)
    });
  };
}

function removeSelectedTracks() {
  return (dispatch, getState) => {
    var _getState2 = getState();

    const tracks = _getState2.playlist.tracks;

    dispatch({
      type: _actionTypes.REMOVE_TRACKS,
      ids: Object.keys(tracks).filter(id => tracks[id].selected)
    });
  };
}

function removeAllTracks() {
  return { type: _actionTypes.REMOVE_ALL_TRACKS };
}

function reverseList() {
  return { type: _actionTypes.REVERSE_LIST };
}

function randomizeList() {
  return { type: _actionTypes.RANDOMIZE_LIST };
}

function sortListByTitle() {
  return (dispatch, getState) => {
    const state = getState();
    const trackOrder = (0, _utils.sort)(state.playlist.trackOrder, i => `${state.playlist.tracks[i].title}`.toLowerCase());
    return dispatch({ type: _actionTypes.SET_TRACK_ORDER, trackOrder });
  };
}

function setPlaylistScrollPosition(position) {
  return { type: _actionTypes.SET_PLAYLIST_SCROLL_POSITION, position };
}

function scrollNTracks(n) {
  return (dispatch, getState) => {
    const state = getState();
    const overflow = (0, _selectors.getOverflowTrackCount)(state);
    const currentOffset = (0, _selectors.getScrollOffset)(state);
    const position = overflow ? (0, _utils.clamp)((currentOffset + n) / overflow, 0, 1) : 0;
    return dispatch({
      type: _actionTypes.SET_PLAYLIST_SCROLL_POSITION,
      position: position * 100
    });
  };
}

function scrollPlaylistByDelta(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState();
    if ((0, _selectors.getOverflowTrackCount)(state)) {
      e.stopPropagation();
    }
    const totalPixelHeight = state.playlist.trackOrder.length * _constants.TRACK_HEIGHT;
    const percentDelta = e.deltaY / totalPixelHeight * 100;
    dispatch({
      type: _actionTypes.SET_PLAYLIST_SCROLL_POSITION,
      position: (0, _utils.clamp)(state.display.playlistScrollPosition + percentDelta, 0, 100)
    });
  };
}

function scrollUpFourTracks() {
  return scrollNTracks(-4);
}

function scrollDownFourTracks() {
  return scrollNTracks(4);
}

function findLastIndex(arr, cb) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
}

function dragSelected(offset) {
  return (dispatch, getState) => {
    var _getState3 = getState(),
        _getState3$playlist = _getState3.playlist;

    const trackOrder = _getState3$playlist.trackOrder,
          tracks = _getState3$playlist.tracks;

    const firstSelected = trackOrder.findIndex(trackId => tracks[trackId] && tracks[trackId].selected);
    if (firstSelected === -1) {
      return;
    }
    const lastSelected = findLastIndex(trackOrder, trackId => tracks[trackId] && tracks[trackId].selected);
    if (lastSelected === -1) {
      throw new Error("We found a first selected, but not a last selected.");
    }
    // Ensure we don't try to drag off either end.
    const min = -firstSelected;
    const max = trackOrder.length - 1 - lastSelected;
    const normalizedOffset = (0, _utils.clamp)(offset, min, max);
    if (normalizedOffset !== 0) {
      dispatch({ type: _actionTypes.DRAG_SELECTED, offset: normalizedOffset });
    }
  };
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

class ResizeTarget extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleMouseDown = e => {
      // Prevent dragging from highlighting text.
      e.preventDefault();

      var _props$currentSize = _slicedToArray(this.props.currentSize, 2);

      const width = _props$currentSize[0],
            height = _props$currentSize[1];

      const mouseStart = {
        x: e.clientX,
        y: e.clientY
      };

      const handleMove = ee => {
        const x = ee.clientX - mouseStart.x;
        const y = ee.clientY - mouseStart.y;

        const newWidth = Math.max(0, width + Math.round(x / _constants.WINDOW_RESIZE_SEGMENT_WIDTH));

        const newHeight = this.props.widthOnly ? width : Math.max(0, height + Math.round(y / _constants.WINDOW_RESIZE_SEGMENT_HEIGHT));

        const newSize = [newWidth, newHeight];

        this.props.setWindowSize(newSize);
      };

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMove);
      });
    }, _temp;
  }

  render() {
    /* eslint-disable no-unused-vars */
    var _props = this.props;

    const currentSize = _props.currentSize,
          setWindowSize = _props.setWindowSize,
          widthOnly = _props.widthOnly,
          passThroughProps = _objectWithoutProperties(_props, ["currentSize", "setWindowSize", "widthOnly"]);
    /* eslint-enable no-unused-vars */


    return _react2.default.createElement("div", _extends({
      ref: node => this.node = node,
      onMouseDown: this.handleMouseDown
    }, passThroughProps));
  }
}

exports.default = ResizeTarget;
ResizeTarget.propTypes = {
  currentSize: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  setWindowSize: _propTypes2.default.func.isRequired,
  widthOnly: _propTypes2.default.bool
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

var _constants = __webpack_require__(4);

var _ContextMenu = __webpack_require__(10);

var _PlaybackContextMenu = __webpack_require__(272);

var _PlaybackContextMenu2 = _interopRequireDefault(_PlaybackContextMenu);

var _SkinsContextMenu = __webpack_require__(273);

var _SkinsContextMenu2 = _interopRequireDefault(_SkinsContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainContextMenu = props => _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement(_ContextMenu.LinkNode, {
    href: "https://github.com/captbaritone/webamp",
    target: "_blank",
    label: "Webamp..."
  }),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(
    _ContextMenu.Parent,
    { label: "Play" },
    _react2.default.createElement(_ContextMenu.Node, { onClick: props.openMediaFileDialog, label: "File...", hotkey: "L" }),
    props.filePickers && props.filePickers.map((picker, i) => (props.networkConnected || !picker.requiresNetwork) && _react2.default.createElement(_ContextMenu.Node, {
      key: i,
      onClick: async () => {
        let files;
        try {
          files = await picker.filePicker();
        } catch (e) {
          console.error("Error loading from file picker", e);
        }
        props.loadMediaFiles(files, _constants.LOAD_STYLE.PLAY);
      },
      label: picker.contextMenuName
    }))
  ),
  _react2.default.createElement(_ContextMenu.Hr, null),
  Object.keys(props.genWindows).map(i => _react2.default.createElement(_ContextMenu.Node, {
    key: i,
    label: props.genWindows[i].title,
    checked: props.genWindows[i].open,
    onClick: () => props.toggleGenWindow(i),
    hotkey: props.genWindows[i].hotkey
  })),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_SkinsContextMenu2.default, null),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(
    _ContextMenu.Parent,
    { label: "Playback" },
    _react2.default.createElement(_PlaybackContextMenu2.default, null)
  ),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.close, label: "Exit" })
);

const mapStateToProps = state => ({
  networkConnected: state.network.connected,
  genWindows: (0, _selectors.getGenWindows)(state)
});

const mapDispatchToProps = {
  close: _actionCreators.close,
  openMediaFileDialog: _actionCreators.openMediaFileDialog,
  loadMediaFiles: _actionCreators.loadMediaFiles,
  toggleGenWindow: _actionCreators.toggleWindow
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainContextMenu);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(4);

var _Character = __webpack_require__(119);

var _Character2 = _interopRequireDefault(_Character);

__webpack_require__(276);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sigh. When he display is blinking (say when it's paused) we need to
// alternate between the actual caracter and the space character. Not
// Possible to that in purce CSS with the background being dynamically generated.
// All "space" characters is also how Winamp renders no content.
const Background = () => [1, 7, 12, 20, 25].map((left, i) => _react2.default.createElement(_Character2.default, {
  style: { left },
  key: i,
  className: "background-character",
  children: " "
}));

const MiniTime = props => {
  let seconds = null;
  // TODO: Clean this up: If stopped, just render the background, rather than
  // rendering spaces twice.
  if (props.status !== _constants.MEDIA_STATUS.STOPPED) {
    seconds = props.timeMode === _constants.TIME_MODE.ELAPSED ? props.timeElapsed : props.length - props.timeElapsed;
  }

  const timeObj = (0, _utils.getTimeObj)(seconds);
  const showMinus = props.timeMode === _constants.TIME_MODE.REMAINING && props.status !== _constants.MEDIA_STATUS.STOPPED;
  return _react2.default.createElement(
    "div",
    {
      onClick: props.toggle,
      className: (0, _classnames2.default)("mini-time", "countdown", {
        blinking: props.status === _constants.MEDIA_STATUS.PAUSED
      })
    },
    _react2.default.createElement(Background, null),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 1 } },
      showMinus ? "-" : " "
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 7 } },
      timeObj.minutesFirstDigit
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 12 } },
      timeObj.minutesSecondDigit
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 20 } },
      timeObj.secondsFirstDigit
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 25 } },
      timeObj.secondsSecondDigit
    )
  );
};

const mapDispatchToProps = {
  // TODO: move to actionCreators
  toggle: () => ({ type: _actionTypes.TOGGLE_TIME_MODE })
};

exports.default = (0, _reactRedux.connect)(state => state.media, mapDispatchToProps)(MiniTime);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.characterClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const characterClassName = exports.characterClassName = char => `character-${char.toString().toLowerCase().charCodeAt(0)}`;

const Character = (_ref) => {
  let char = _ref.children,
      className = _ref.className,
      passThrough = _objectWithoutProperties(_ref, ["children", "className"]);

  return _react2.default.createElement(
    "span",
    _extends({}, passThrough, {
      className: `${className || ""} character ${characterClassName(char)}`
    }),
    char
  );
};

Character.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

exports.default = Character;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PIXEL_DENSITY = 2;
const NUM_BARS = 20;
const BAR_PEAK_DROP_RATE = 0.01;
const GRADIENT_COLOR_COUNT = 16;
const PEAK_COLOR_INDEX = 23;

// Return the average value in a slice of dataArray
function sliceAverage(dataArray, sliceWidth, sliceNumber) {
  const start = sliceWidth * sliceNumber;
  const end = start + sliceWidth;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += dataArray[i];
  }
  return sum / sliceWidth;
}

class Visualizer extends _react2.default.Component {
  componentDidMount() {
    this.barPeaks = new Array(NUM_BARS).fill(0);
    this.barPeakFrames = new Array(NUM_BARS).fill(0);
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;

    this.setStyle();

    // Kick off the animation loop
    const loop = () => {
      if (this.props.status === _constants.MEDIA_STATUS.PLAYING) {
        if (this.props.dummyVizData) {
          Object.keys(this.props.dummyVizData).forEach(i => {
            this._printBar(i, this.props.dummyVizData[i]);
          });
        } else {
          this.paintFrame();
        }
      }
      this._animationRequest = window.requestAnimationFrame(loop);
    };
    loop();
  }

  componentWillUnmount() {
    if (this._animationRequest) {
      window.cancelAnimationFrame(this._animationRequest);
    }
  }

  componentDidUpdate() {
    this.setStyle();
    // Redraw the current frame, since the skin may have changed.
    this.paintFrame();
  }

  _renderWidth() {
    return this.props.width;
  }

  _renderHeight() {
    return this.props.height;
  }

  _height() {
    return this.props.height * PIXEL_DENSITY;
  }

  _width() {
    return this.props.width * PIXEL_DENSITY;
  }

  _barWidth() {
    const barWidth = Math.floor(this._width() / NUM_BARS);
    if (barWidth % 2 === 0) {
      return barWidth;
    }

    return barWidth - 1;
  }

  _generateOctaveBuckets() {
    const octaveBuckets = new Array(NUM_BARS).fill(0);
    const minHz = 200;
    const maxHz = 22050;
    const octaveStep = Math.pow(maxHz / minHz, 1 / NUM_BARS);

    octaveBuckets[0] = 0;
    octaveBuckets[1] = minHz;
    for (let i = 2; i < NUM_BARS - 1; i++) {
      octaveBuckets[i] = octaveBuckets[i - 1] * octaveStep;
    }
    octaveBuckets[NUM_BARS - 1] = maxHz;

    for (let i = 0; i < NUM_BARS; i++) {
      const octaveIdx = Math.floor(octaveBuckets[i] / maxHz * this.bufferLength);
      octaveBuckets[i] = octaveIdx;
    }

    return octaveBuckets;
  }

  setStyle() {
    if (!this.props.colors) {
      return;
    }
    // TODO: Split this into to methods. One for skin update, one for style
    // update.
    this.preRenderBg();
    this.preRenderBar();
    this.props.analyser.fftSize = 2048;
    if (this.props.style === _constants.VISUALIZERS.OSCILLOSCOPE) {
      this.bufferLength = this.props.analyser.fftSize;
      this.dataArray = new Uint8Array(this.bufferLength);
    } else if (this.props.style === _constants.VISUALIZERS.BAR) {
      this.bufferLength = this.props.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);

      if (!this.octaveBuckets) {
        this.octaveBuckets = this._generateOctaveBuckets();
      }
    }
  }

  clear() {
    this.canvasCtx.drawImage(this.bgCanvas, 0, 0);
  }

  // Pre-render the background grid
  preRenderBg() {
    // Off-screen canvas for pre-rendering the background
    this.bgCanvas = document.createElement("canvas");
    this.bgCanvas.width = this._width();
    this.bgCanvas.height = this._height();

    const bgCanvasCtx = this.bgCanvas.getContext("2d");
    bgCanvasCtx.fillStyle = this.props.colors[0];
    bgCanvasCtx.fillRect(0, 0, this._width(), this._height());
    if (!this.props.windowShade) {
      bgCanvasCtx.fillStyle = this.props.colors[1];
      for (let x = 0; x < this._width(); x += 4) {
        for (let y = PIXEL_DENSITY; y < this._height(); y += 4) {
          bgCanvasCtx.fillRect(x, y, PIXEL_DENSITY, PIXEL_DENSITY);
        }
      }
    }
  }

  // Pre-render the bar gradient
  preRenderBar() {
    /**
     * The order of the colours is commented in the file: the fist two colours
     * define the background and dots (check it to see what are the dots), the
     * next 16 colours are the analyzer's colours from top to bottom, the next
     * 5 colours are the oscilloscope's ones, from center to top/bottom, the
     * last colour is for the analyzer's peak markers.
     */

    // Off-screen canvas for pre-rendering a single bar gradient
    const barWidth = this._barWidth();
    this.barCanvas = document.createElement("canvas");
    this.barCanvas.width = barWidth;
    this.barCanvas.height = this._height();

    const offset = 2; // The first two colors are for the background;
    const gradientColors = this.props.colors.slice(offset, offset + GRADIENT_COLOR_COUNT);

    const barCanvasCtx = this.barCanvas.getContext("2d");
    const height = this._renderHeight();
    const multiplier = GRADIENT_COLOR_COUNT / height;
    // In shade mode, the five colors are, from top to bottom:
    // 214, 102, 0 -- 3
    // 222, 165, 24 -- 6
    // 148, 222, 33 -- 9
    // 57, 181, 16 -- 12
    // 24, 132, 8 -- 15
    // TODO: This could probably be improved by iterating backwards
    for (let i = 0; i < height; i++) {
      const colorIndex = GRADIENT_COLOR_COUNT - 1 - Math.floor(i * multiplier);
      barCanvasCtx.fillStyle = gradientColors[colorIndex];
      const y = this._height() - i * PIXEL_DENSITY;
      barCanvasCtx.fillRect(0, y, barWidth, PIXEL_DENSITY);
    }
  }

  paintFrame() {
    this.clear();
    if (this.props.style === _constants.VISUALIZERS.OSCILLOSCOPE) {
      this._paintOscilloscopeFrame();
    } else if (this.props.style === _constants.VISUALIZERS.BAR) {
      this._paintBarFrame();
    }
  }

  _paintOscilloscopeFrame() {
    this.props.analyser.getByteTimeDomainData(this.dataArray);

    this.canvasCtx.lineWidth = PIXEL_DENSITY;

    // Just use one of the viscolors for now
    this.canvasCtx.strokeStyle = this.props.colors[18];

    // Since dataArray has more values than we have pixels to display, we
    // have to average several dataArray values per pixel. We call these
    // groups slices.
    //
    // We use the  2x scale here since we only want to plot values for
    // "real" pixels.
    const sliceWidth = Math.floor(this.bufferLength / this._width()) * PIXEL_DENSITY;

    const h = this._height();

    this.canvasCtx.beginPath();

    // Iterate over the width of the canvas in "real" pixels.
    for (let j = 0; j <= this._renderWidth(); j++) {
      const amplitude = sliceAverage(this.dataArray, sliceWidth, j);
      const percentAmplitude = amplitude / 255; // dataArray gives us bytes
      const y = (1 - percentAmplitude) * h; // flip y
      const x = j * PIXEL_DENSITY;

      // Canvas coordinates are in the middle of the pixel by default.
      // When we want to draw pixel perfect lines, we will need to
      // account for that here
      if (x === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }
    }
    this.canvasCtx.stroke();
  }

  _printBar(x, height, peakHeight) {
    height = Math.ceil(height) * PIXEL_DENSITY;
    peakHeight = Math.ceil(peakHeight) * PIXEL_DENSITY;
    if (height > 0 || peakHeight > 0) {
      const y = this._height() - height;
      const ctx = this.canvasCtx;
      // Draw the gradient
      const b = this._barWidth();
      if (height > 0) {
        ctx.drawImage(this.barCanvas, 0, y, b, height, x, y, b, height);
      }

      // Draw the gray peak line
      if (!this.props.windowShade) {
        const peakY = this._height() - peakHeight;
        ctx.fillStyle = this.props.colors[PEAK_COLOR_INDEX];
        ctx.fillRect(x, peakY, b, PIXEL_DENSITY);
      }
    }
  }

  _paintBarFrame() {
    this.props.analyser.getByteFrequencyData(this.dataArray);
    const heightMultiplier = this._renderHeight() / 256;
    const barWidth = this._barWidth();
    const xOffset = barWidth + PIXEL_DENSITY; // Bar width, plus a pixel of spacing to the right.
    for (let j = 0; j < NUM_BARS - 1; j++) {
      const start = this.octaveBuckets[j];
      const end = this.octaveBuckets[j + 1];
      let amplitude = 0;
      for (let k = start; k < end; k++) {
        amplitude += this.dataArray[k];
      }
      amplitude /= end - start;

      // The drop rate should probably be normalized to the rendering FPS, for now assume 60 FPS
      let barPeak = this.barPeaks[j] - BAR_PEAK_DROP_RATE * Math.pow(this.barPeakFrames[j], 2);
      if (barPeak < amplitude) {
        barPeak = amplitude;
        this.barPeakFrames[j] = 0;
      } else {
        this.barPeakFrames[j] += 1;
      }
      this.barPeaks[j] = barPeak;

      this._printBar(j * xOffset, amplitude * heightMultiplier, barPeak * heightMultiplier);
    }
  }

  render() {
    var _props = this.props;
    const width = _props.width,
          height = _props.height;

    return _react2.default.createElement("canvas", {
      id: "visualizer",
      ref: node => this.canvas = node,
      style: { width, height },
      width: width * PIXEL_DENSITY,
      height: height * PIXEL_DENSITY,
      onClick: this.props.toggleVisualizerStyle
    });
  }
}

const mapStateToProps = state => ({
  colors: state.display.skinColors,
  style: (0, _selectors.getVisualizerStyle)(state),
  width: (0, _selectors.getWindowShade)(state, "main") ? 38 : 76,
  height: (0, _selectors.getWindowShade)(state, "main") ? 5 : 16,
  status: state.media.status,
  windowShade: (0, _selectors.getWindowShade)(state, "main"),
  dummyVizData: state.display.dummyVizData
});

const mapDispatchToProps = {
  toggleVisualizerStyle: _actionCreators.toggleVisualizerStyle
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Visualizer);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Balance = props => _react2.default.createElement("input", {
  id: props.id,
  className: props.className,
  type: "range",
  min: "-100",
  max: "100",
  step: "1",
  value: props.balance,
  style: props.style,
  onChange: props.handleChange,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Balance"
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch((0, _actionCreators.setBalance)(e.target.value)),
  showMarquee: () => dispatch({ type: _actionTypes.SET_FOCUS, input: "balance" }),
  hideMarquee: () => dispatch({ type: _actionTypes.UNSET_FOCUS })
});

exports.default = (0, _reactRedux.connect)(state => ({ balance: state.media.balance }), mapDispatchToProps)(Balance);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Volume = props => _react2.default.createElement("input", {
  id: props.id,
  type: "range",
  min: "0",
  max: "100",
  step: "1",
  value: props.volume,
  style: props.style,
  className: props.className,
  onChange: props.setVolume,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Volume Bar"
});

const mapStateToProps = state => ({
  volume: state.media.volume
});

const mapDispatchToProps = dispatch => ({
  showMarquee: () => dispatch({ type: _actionTypes.SET_FOCUS, input: "volume" }),
  hideMarquee: () => dispatch({ type: _actionTypes.UNSET_FOCUS }),
  setVolume: e => dispatch((0, _actionCreators.setVolume)(e.target.value))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Volume);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _ResizeTarget = __webpack_require__(116);

var _ResizeTarget2 = _interopRequireDefault(_ResizeTarget);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => ({
  currentSize: (0, _selectors.getWindowSize)(state, "playlist"),
  id: "playlist-resize-target"
});

const mapDispatchToProps = {
  setWindowSize: size => (0, _actionCreators.setWindowSize)("playlist", size)
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ResizeTarget2.default);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(81);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(87);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(88);

var _warning2 = _interopRequireDefault(_warning);

var _Track = __webpack_require__(348);

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(349);

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(138);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var Slider = function (_React$Component) {
  (0, _inherits3['default'])(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3['default'])(this, Slider);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (false) {
      (0, _warning2['default'])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      (0, _warning2['default'])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  Slider.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        disabled = _props.disabled;

    if (autoFocus && !disabled) {
      this.focus();
    }
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    var prevValue = this.state.value;
    var value = nextProps.value !== undefined ? nextProps.value : prevValue;
    var nextValue = this.trimAlignValue(value, nextProps);
    if (nextValue === prevValue) return;

    this.setState({ value: nextValue });
    if (utils.isValueOutOfRange(value, nextProps)) {
      this.props.onChange(nextValue);
    }
  };

  Slider.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    }

    var changedValue = state.value;
    props.onChange(changedValue);
  };

  Slider.prototype.onStart = function onStart(position) {
    this.setState({ dragging: true });
    var props = this.props;
    var prevValue = this.getValue();
    props.onBeforeChange(prevValue);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    if (value === prevValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onMove = function onMove(e, position) {
    utils.pauseEvent(e);
    var oldValue = this.state.value;

    var value = this.calcValueByPos(position);
    if (value === oldValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onKeyboard = function onKeyboard(e) {
    var valueMutator = utils.getKeyboardValueMutator(e);

    if (valueMutator) {
      utils.pauseEvent(e);
      var state = this.state;
      var oldValue = state.value;
      var mutatedValue = valueMutator(oldValue, this.props);
      var value = this.trimAlignValue(mutatedValue);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  };

  Slider.prototype.getValue = function getValue() {
    return this.state.value;
  };

  Slider.prototype.getLowerBound = function getLowerBound() {
    return this.props.min;
  };

  Slider.prototype.getUpperBound = function getUpperBound() {
    return this.state.value;
  };

  Slider.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
    var val = utils.ensureValueInRange(v, mergedProps);
    return utils.ensureValuePrecision(val, mergedProps);
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        minimumTrackStyle = _props2.minimumTrackStyle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle,
        tabIndex = _props2.tabIndex,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle;
    var _state = this.state,
        value = _state.value,
        dragging = _state.dragging;

    var offset = this.calcOffset(value);
    var handle = handleGenerator({
      className: prefixCls + '-handle',
      vertical: vertical,
      offset: offset,
      value: value,
      dragging: dragging,
      disabled: disabled,
      min: min,
      max: max,
      index: 0,
      tabIndex: tabIndex,
      style: handleStyle[0] || handleStyle,
      ref: function ref(h) {
        return _this2.saveHandle(0, h);
      }
    });

    var _trackStyle = trackStyle[0] || trackStyle;
    var track = _react2['default'].createElement(_Track2['default'], {
      className: prefixCls + '-track',
      vertical: vertical,
      included: included,
      offset: 0,
      length: offset,
      style: (0, _extends3['default'])({}, minimumTrackStyle, _trackStyle)
    });

    return { tracks: track, handles: handle };
  };

  return Slider;
}(_react2['default'].Component);

Slider.propTypes = {
  defaultValue: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  disabled: _propTypes2['default'].bool,
  autoFocus: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].number
};
exports['default'] = (0, _createSlider2['default'])(Slider);
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(314);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(29) && !__webpack_require__(40)(function () {
  return Object.defineProperty(__webpack_require__(127)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28);
var document = __webpack_require__(18).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(30);
var arrayIndexOf = __webpack_require__(316)(false);
var IE_PROTO = __webpack_require__(76)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(130);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(74);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(319);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(331);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(54);
var $export = __webpack_require__(38);
var redefine = __webpack_require__(134);
var hide = __webpack_require__(26);
var Iterators = __webpack_require__(82);
var $iterCreate = __webpack_require__(323);
var setToStringTag = __webpack_require__(84);
var getPrototypeOf = __webpack_require__(326);
var ITERATOR = __webpack_require__(31)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(128);
var hiddenKeys = __webpack_require__(78).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(56);
var createDesc = __webpack_require__(52);
var toIObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(73);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(126);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(29) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;
exports.getKeyboardValueMutator = getKeyboardValueMutator;

var _reactDom = __webpack_require__(17);

var _KeyCode = __webpack_require__(357);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === (0, _reactDom.findDOMNode)(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, diffs))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function getKeyboardValueMutator(e) {
  switch (e.keyCode) {
    case _KeyCode2['default'].UP:
    case _KeyCode2['default'].RIGHT:
      return function (value, props) {
        return value + props.step;
      };

    case _KeyCode2['default'].DOWN:
    case _KeyCode2['default'].LEFT:
      return function (value, props) {
        return value - props.step;
      };

    case _KeyCode2['default'].END:
      return function (value, props) {
        return props.max;
      };
    case _KeyCode2['default'].HOME:
      return function (value, props) {
        return props.min;
      };
    case _KeyCode2['default'].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case _KeyCode2['default'].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
}

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(148);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-96948-19', 'auto');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global SENTRY_DSN */

__webpack_require__(149);

__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(165);

__webpack_require__(166);

__webpack_require__(167);

__webpack_require__(169);

__webpack_require__(170);

__webpack_require__(172);

__webpack_require__(175);

var _ravenJs = __webpack_require__(183);

var _ravenJs2 = _interopRequireDefault(_ravenJs);

var _ravenForRedux = __webpack_require__(189);

var _ravenForRedux2 = _interopRequireDefault(_ravenForRedux);

var _isSupported = __webpack_require__(190);

var _isSupported2 = _interopRequireDefault(_isSupported);

var _base291Png = __webpack_require__(191);

var _base291Png2 = _interopRequireDefault(_base291Png);

var _MacOSXAqua = __webpack_require__(192);

var _MacOSXAqua2 = _interopRequireDefault(_MacOSXAqua);

var _TopazAmp = __webpack_require__(193);

var _TopazAmp2 = _interopRequireDefault(_TopazAmp);

var _Vizor = __webpack_require__(194);

var _Vizor2 = _interopRequireDefault(_Vizor);

var _XMMSTurquoise = __webpack_require__(195);

var _XMMSTurquoise2 = _interopRequireDefault(_XMMSTurquoise);

var _ZaxonRemake = __webpack_require__(196);

var _ZaxonRemake2 = _interopRequireDefault(_ZaxonRemake);

var _GreenDimensionV = __webpack_require__(197);

var _GreenDimensionV2 = _interopRequireDefault(_GreenDimensionV);

var _MilkdropWindow = __webpack_require__(198);

var _MilkdropWindow2 = _interopRequireDefault(_MilkdropWindow);

var _screenshotInitialState = __webpack_require__(258);

var _screenshotInitialState2 = _interopRequireDefault(_screenshotInitialState);

var _webamp = __webpack_require__(259);

var _webamp2 = _interopRequireDefault(_webamp);

var _actionTypes = __webpack_require__(3);

var _config = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NOISY_ACTION_TYPES = new Set([_actionTypes.STEP_MARQUEE, _actionTypes.UPDATE_TIME_ELAPSED, _actionTypes.UPDATE_WINDOW_POSITIONS, _actionTypes.SET_VOLUME, _actionTypes.SET_BALANCE, _actionTypes.SET_BAND_VALUE]);

const MIN_MILKDROP_WIDTH = 725;

let screenshot = false;
let skinUrl = _config.skinUrl;
if ("URLSearchParams" in window) {
  const params = new URLSearchParams(location.search);
  screenshot = params.get("screenshot");
  skinUrl = params.get("skinUrl") || skinUrl;
}

function supressDragAndDrop(e) {
  e.preventDefault();
  e.dataTransfer.effectAllowed = "none";
  e.dataTransfer.dropEffect = "none";
}

window.addEventListener("dragenter", supressDragAndDrop);
window.addEventListener("dragover", supressDragAndDrop);
window.addEventListener("drop", supressDragAndDrop);

let lastActionType = null;

// Filter out consecutive common actions
function filterBreadcrumbActions(action) {
  const noisy = NOISY_ACTION_TYPES.has(action.type) && NOISY_ACTION_TYPES.has(lastActionType);
  lastActionType = action.type;
  return !noisy;
}

_ravenJs2.default.config("https://12b6be8ef7c44f28ac37ab5ed98fd294@sentry.io/146021", {
  /* global COMMITHASH */
  release:  true ? "3b9eb810cb395b2a8fae092791e89935afe402db" : "DEV"
}).install();

const ravenMiddleware = (0, _ravenForRedux2.default)(_ravenJs2.default, {
  filterBreadcrumbActions,
  stateTransformer: state => _extends({}, state, {
    display: _extends({}, state.display, {
      skinGenLetterWidths: "[[REDACTED]]",
      skinImages: "[[REDACTED]]",
      skinCursors: "[[REDACTED]]",
      skinRegion: "[[REDACTED]]"
    })
  })
});

// Don't prompt user to install Webamp. It's probably not
// what they want.
window.addEventListener("beforeinstallprompt", e => {
  // TODO: we could add this as a context menu item, or something.
  e.preventDefault();
});

// Requires Dropbox's Chooser to be loaded on the page
function genAudioFileUrlsFromDropbox() {
  return new Promise((resolve, reject) => {
    if (window.Dropbox == null) {
      reject();
    }
    window.Dropbox.choose({
      success: resolve,
      error: reject,
      linkType: "direct",
      folderselect: false,
      multiselect: true,
      extensions: ["video", "audio"]
    });
  });
}

_ravenJs2.default.context(() => {
  window.Raven = _ravenJs2.default;
  if (screenshot) {
    document.getElementsByClassName("about")[0].style.visibility = "hidden";
  }
  if (!_webamp2.default.browserIsSupported()) {
    document.getElementById("browser-compatibility").style.display = "block";
    document.getElementById("app").style.visibility = "hidden";
    return;
  }
  const __extraWindows = [];
  let __initialWindowLayout = {};

  if ((0, _isSupported2.default)()) {
    const startWithMilkdropHidden = document.body.clientWidth < MIN_MILKDROP_WIDTH || skinUrl != null || screenshot;

    __extraWindows.push({
      id: "milkdrop",
      title: "Milkdrop",
      isVisualizer: true,
      Component: _MilkdropWindow2.default,
      open: !startWithMilkdropHidden
    });

    if (startWithMilkdropHidden) {
      __initialWindowLayout = {
        main: { position: { x: 0, y: 0 } },
        equalizer: { position: { x: 0, y: 116 } },
        playlist: { position: { x: 0, y: 232 }, size: [0, 0] },
        milkdrop: { position: { x: 0, y: 348 }, size: [0, 0] }
      };
    } else {
      __initialWindowLayout = {
        main: { position: { x: 0, y: 0 } },
        equalizer: { position: { x: 0, y: 116 } },
        playlist: { position: { x: 0, y: 232 }, size: [0, 4] },
        milkdrop: { position: { x: 275, y: 0 }, size: [7, 12] }
      };
    }

    document.getElementById("butterchurn-share").style.display = "flex";
  }

  const initialSkin = !skinUrl ? null : { url: skinUrl };

  const webamp = new _webamp2.default({
    initialSkin,
    initialTracks: screenshot ? null : _config.initialTracks,
    availableSkins: [{ url: _base291Png2.default, name: "<Base Skin>" }, { url: _GreenDimensionV2.default, name: "Green Dimension V2" }, { url: _MacOSXAqua2.default, name: "Mac OSX v1.5 (Aqua)" }, { url: _TopazAmp2.default, name: "TopazAmp" }, { url: _Vizor2.default, name: "Vizor" }, { url: _XMMSTurquoise2.default, name: "XMMS Turquoise " }, { url: _ZaxonRemake2.default, name: "Zaxon Remake" }],
    filePickers: [{
      contextMenuName: "Dropbox...",
      filePicker: async () => {
        const files = await genAudioFileUrlsFromDropbox();
        return files.map(file => ({
          url: file.link,
          defaultName: file.name
        }));
      },
      requiresNetwork: true
    }],
    enableHotkeys: true,
    __extraWindows,
    __initialWindowLayout,
    __initialState: screenshot ? _screenshotInitialState2.default : _config.initialState,
    __customMiddlewares: [ravenMiddleware]
  });

  if (_config.disableMarquee || screenshot) {
    webamp.store.dispatch({ type: _actionTypes.DISABLE_MARQUEE });
  }
  if (screenshot) {
    window.document.body.style.backgroundColor = "#000";
    webamp.store.dispatch({ type: _actionTypes.TOGGLE_REPEAT });
    webamp.store.dispatch({ type: _actionTypes.TOGGLE_SHUFFLE });
    webamp.store.dispatch({ type: _actionTypes.SET_EQ_AUTO, value: true });
    webamp.store.dispatch({
      type: _actionTypes.SET_DUMMY_VIZ_DATA,
      data: {
        0: 11.75,
        8: 11.0625,
        16: 8.5,
        24: 7.3125,
        32: 6.75,
        40: 6.4375,
        48: 6.25,
        56: 5.875,
        64: 5.625,
        72: 5.25,
        80: 5.125,
        88: 4.875,
        96: 4.8125,
        104: 4.375,
        112: 3.625,
        120: 1.5625
      }
    });
  }

  webamp.renderWhenReady(document.getElementById("app"));

  // Expose webamp instance for debugging and integration tests.
  window.__webamp = webamp;
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(41);
var redefine = __webpack_require__(34);
var META = __webpack_require__(151).KEY;
var $fails = __webpack_require__(32);
var shared = __webpack_require__(59);
var setToStringTag = __webpack_require__(60);
var uid = __webpack_require__(35);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(91);
var wksDefine = __webpack_require__(152);
var enumKeys = __webpack_require__(153);
var isArray = __webpack_require__(158);
var anObject = __webpack_require__(33);
var isObject = __webpack_require__(22);
var toIObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(58);
var createDesc = __webpack_require__(43);
var _create = __webpack_require__(95);
var gOPNExt = __webpack_require__(160);
var $GOPD = __webpack_require__(161);
var $DP = __webpack_require__(16);
var $keys = __webpack_require__(45);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(97).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(64).f = $propertyIsEnumerable;
  __webpack_require__(94).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(44)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(35)('meta');
var isObject = __webpack_require__(22);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(16).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(32)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(42);
var LIBRARY = __webpack_require__(44);
var wksExt = __webpack_require__(91);
var defineProperty = __webpack_require__(16).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(45);
var gOPS = __webpack_require__(94);
var pIE = __webpack_require__(64);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(156);
var toAbsoluteIndex = __webpack_require__(157);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(93);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(93);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(46);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var anObject = __webpack_require__(33);
var getKeys = __webpack_require__(45);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(23);
var gOPN = __webpack_require__(97).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(64);
var createDesc = __webpack_require__(43);
var toIObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(58);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(89);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(14) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(14) && /./g.flags != 'g') __webpack_require__(16).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(164)
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(33);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(47)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(47)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(47)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(168);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(22);
var cof = __webpack_require__(46);
var MATCH = __webpack_require__(11)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(47)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(9);
var $export = __webpack_require__(41);
var userAgent = __webpack_require__(171);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(41);
var $task = __webpack_require__(173);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(90);
var invoke = __webpack_require__(174);
var html = __webpack_require__(96);
var cel = __webpack_require__(57);
var global = __webpack_require__(9);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(46)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 174 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(176);
var getKeys = __webpack_require__(45);
var redefine = __webpack_require__(34);
var global = __webpack_require__(9);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(65);
var wks = __webpack_require__(11);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(177);
var step = __webpack_require__(178);
var Iterators = __webpack_require__(65);
var toIObject = __webpack_require__(23);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(179)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(11)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(15)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(44);
var $export = __webpack_require__(41);
var redefine = __webpack_require__(34);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(65);
var $iterCreate = __webpack_require__(180);
var setToStringTag = __webpack_require__(60);
var getPrototypeOf = __webpack_require__(181);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(95);
var descriptor = __webpack_require__(43);
var setToStringTag = __webpack_require__(60);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(182);
var IE_PROTO = __webpack_require__(62)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(61);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Enforces a single instance of the Raven client, and the
 * main entry point for Raven. If you are a consumer of the
 * Raven library, you SHOULD load this file (vs raven.js).
 **/

var RavenConstructor = __webpack_require__(184);

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var _Raven = _window.Raven;

var Raven = new RavenConstructor();

/*
 * Allow multiple versions of Raven to be installed.
 * Strip Raven from the global context and returns the instance.
 *
 * @return {Raven}
 */
Raven.noConflict = function() {
  _window.Raven = _Raven;
  return Raven;
};

Raven.afterLoad();

module.exports = Raven;

/**
 * DISCLAIMER:
 *
 * Expose `Client` constructor for cases where user want to track multiple "sub-applications" in one larger app.
 * It's not meant to be used by a wide audience, so pleaaase make sure that you know what you're doing before using it.
 * Accidentally calling `install` multiple times, may result in an unexpected behavior that's very hard to debug.
 *
 * It's called `Client' to be in-line with Raven Node implementation.
 *
 * HOWTO:
 *
 * import Raven from 'raven-js';
 *
 * const someAppReporter = new Raven.Client();
 * const someOtherAppReporter = new Raven.Client();
 *
 * someAppReporter.config('__DSN__', {
 *   ...config goes here
 * });
 *
 * someOtherAppReporter.config('__OTHER_DSN__', {
 *   ...config goes here
 * });
 *
 * someAppReporter.captureMessage(...);
 * someAppReporter.captureException(...);
 * someAppReporter.captureBreadcrumb(...);
 *
 * someOtherAppReporter.captureMessage(...);
 * someOtherAppReporter.captureException(...);
 * someOtherAppReporter.captureBreadcrumb(...);
 *
 * It should "just work".
 */
module.exports.Client = RavenConstructor;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global XDomainRequest:false */

var TraceKit = __webpack_require__(185);
var stringify = __webpack_require__(98);
var md5 = __webpack_require__(186);
var RavenConfigError = __webpack_require__(187);

var utils = __webpack_require__(66);
var isErrorEvent = utils.isErrorEvent;
var isDOMError = utils.isDOMError;
var isDOMException = utils.isDOMException;
var isError = utils.isError;
var isObject = utils.isObject;
var isPlainObject = utils.isPlainObject;
var isUndefined = utils.isUndefined;
var isFunction = utils.isFunction;
var isString = utils.isString;
var isArray = utils.isArray;
var isEmptyObject = utils.isEmptyObject;
var each = utils.each;
var objectMerge = utils.objectMerge;
var truncate = utils.truncate;
var objectFrozen = utils.objectFrozen;
var hasKey = utils.hasKey;
var joinRegExp = utils.joinRegExp;
var urlencode = utils.urlencode;
var uuid4 = utils.uuid4;
var htmlTreeAsString = utils.htmlTreeAsString;
var isSameException = utils.isSameException;
var isSameStacktrace = utils.isSameStacktrace;
var parseUrl = utils.parseUrl;
var fill = utils.fill;
var supportsFetch = utils.supportsFetch;
var supportsReferrerPolicy = utils.supportsReferrerPolicy;
var serializeKeysForMessage = utils.serializeKeysForMessage;
var serializeException = utils.serializeException;
var sanitize = utils.sanitize;

var wrapConsoleMethod = __webpack_require__(188).wrapMethod;

var dsnKeys = 'source protocol user pass host port path'.split(' '),
  dsnPattern = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

function now() {
  return +new Date();
}

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var _document = _window.document;
var _navigator = _window.navigator;

function keepOriginalCallback(original, callback) {
  return isFunction(callback)
    ? function(data) {
        return callback(data, original);
      }
    : callback;
}

// First, check for JSON support
// If there is no JSON, we no-op the core features of Raven
// since JSON is required to encode the payload
function Raven() {
  this._hasJSON = !!(typeof JSON === 'object' && JSON.stringify);
  // Raven can run in contexts where there's no document (react-native)
  this._hasDocument = !isUndefined(_document);
  this._hasNavigator = !isUndefined(_navigator);
  this._lastCapturedException = null;
  this._lastData = null;
  this._lastEventId = null;
  this._globalServer = null;
  this._globalKey = null;
  this._globalProject = null;
  this._globalContext = {};
  this._globalOptions = {
    // SENTRY_RELEASE can be injected by https://github.com/getsentry/sentry-webpack-plugin
    release: _window.SENTRY_RELEASE && _window.SENTRY_RELEASE.id,
    logger: 'javascript',
    ignoreErrors: [],
    ignoreUrls: [],
    whitelistUrls: [],
    includePaths: [],
    headers: null,
    collectWindowErrors: true,
    captureUnhandledRejections: true,
    maxMessageLength: 0,
    // By default, truncates URL values to 250 chars
    maxUrlLength: 250,
    stackTraceLimit: 50,
    autoBreadcrumbs: true,
    instrument: true,
    sampleRate: 1,
    sanitizeKeys: []
  };
  this._fetchDefaults = {
    method: 'POST',
    keepalive: true,
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    referrerPolicy: supportsReferrerPolicy() ? 'origin' : ''
  };
  this._ignoreOnError = 0;
  this._isRavenInstalled = false;
  this._originalErrorStackTraceLimit = Error.stackTraceLimit;
  // capture references to window.console *and* all its methods first
  // before the console plugin has a chance to monkey patch
  this._originalConsole = _window.console || {};
  this._originalConsoleMethods = {};
  this._plugins = [];
  this._startTime = now();
  this._wrappedBuiltIns = [];
  this._breadcrumbs = [];
  this._lastCapturedEvent = null;
  this._keypressTimeout;
  this._location = _window.location;
  this._lastHref = this._location && this._location.href;
  this._resetBackoff();

  // eslint-disable-next-line guard-for-in
  for (var method in this._originalConsole) {
    this._originalConsoleMethods[method] = this._originalConsole[method];
  }
}

/*
 * The core Raven singleton
 *
 * @this {Raven}
 */

Raven.prototype = {
  // Hardcode version string so that raven source can be loaded directly via
  // webpack (using a build step causes webpack #1617). Grunt verifies that
  // this value matches package.json during build.
  //   See: https://github.com/getsentry/raven-js/issues/465
  VERSION: '3.26.4',

  debug: false,

  TraceKit: TraceKit, // alias to TraceKit

  /*
     * Configure Raven with a DSN and extra options
     *
     * @param {string} dsn The public Sentry DSN
     * @param {object} options Set of global options [optional]
     * @return {Raven}
     */
  config: function(dsn, options) {
    var self = this;

    if (self._globalServer) {
      this._logDebug('error', 'Error: Raven has already been configured');
      return self;
    }
    if (!dsn) return self;

    var globalOptions = self._globalOptions;

    // merge in options
    if (options) {
      each(options, function(key, value) {
        // tags and extra are special and need to be put into context
        if (key === 'tags' || key === 'extra' || key === 'user') {
          self._globalContext[key] = value;
        } else {
          globalOptions[key] = value;
        }
      });
    }

    self.setDSN(dsn);

    // "Script error." is hard coded into browsers for errors that it can't read.
    // this is the result of a script being pulled in from an external domain and CORS.
    globalOptions.ignoreErrors.push(/^Script error\.?$/);
    globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);

    // join regexp rules into one big rule
    globalOptions.ignoreErrors = joinRegExp(globalOptions.ignoreErrors);
    globalOptions.ignoreUrls = globalOptions.ignoreUrls.length
      ? joinRegExp(globalOptions.ignoreUrls)
      : false;
    globalOptions.whitelistUrls = globalOptions.whitelistUrls.length
      ? joinRegExp(globalOptions.whitelistUrls)
      : false;
    globalOptions.includePaths = joinRegExp(globalOptions.includePaths);
    globalOptions.maxBreadcrumbs = Math.max(
      0,
      Math.min(globalOptions.maxBreadcrumbs || 100, 100)
    ); // default and hard limit is 100

    var autoBreadcrumbDefaults = {
      xhr: true,
      console: true,
      dom: true,
      location: true,
      sentry: true
    };

    var autoBreadcrumbs = globalOptions.autoBreadcrumbs;
    if ({}.toString.call(autoBreadcrumbs) === '[object Object]') {
      autoBreadcrumbs = objectMerge(autoBreadcrumbDefaults, autoBreadcrumbs);
    } else if (autoBreadcrumbs !== false) {
      autoBreadcrumbs = autoBreadcrumbDefaults;
    }
    globalOptions.autoBreadcrumbs = autoBreadcrumbs;

    var instrumentDefaults = {
      tryCatch: true
    };

    var instrument = globalOptions.instrument;
    if ({}.toString.call(instrument) === '[object Object]') {
      instrument = objectMerge(instrumentDefaults, instrument);
    } else if (instrument !== false) {
      instrument = instrumentDefaults;
    }
    globalOptions.instrument = instrument;

    TraceKit.collectWindowErrors = !!globalOptions.collectWindowErrors;

    // return for chaining
    return self;
  },

  /*
     * Installs a global window.onerror error handler
     * to capture and report uncaught exceptions.
     * At this point, install() is required to be called due
     * to the way TraceKit is set up.
     *
     * @return {Raven}
     */
  install: function() {
    var self = this;
    if (self.isSetup() && !self._isRavenInstalled) {
      TraceKit.report.subscribe(function() {
        self._handleOnErrorStackInfo.apply(self, arguments);
      });

      if (self._globalOptions.captureUnhandledRejections) {
        self._attachPromiseRejectionHandler();
      }

      self._patchFunctionToString();

      if (self._globalOptions.instrument && self._globalOptions.instrument.tryCatch) {
        self._instrumentTryCatch();
      }

      if (self._globalOptions.autoBreadcrumbs) self._instrumentBreadcrumbs();

      // Install all of the plugins
      self._drainPlugins();

      self._isRavenInstalled = true;
    }

    Error.stackTraceLimit = self._globalOptions.stackTraceLimit;
    return this;
  },

  /*
     * Set the DSN (can be called multiple time unlike config)
     *
     * @param {string} dsn The public Sentry DSN
     */
  setDSN: function(dsn) {
    var self = this,
      uri = self._parseDSN(dsn),
      lastSlash = uri.path.lastIndexOf('/'),
      path = uri.path.substr(1, lastSlash);

    self._dsn = dsn;
    self._globalKey = uri.user;
    self._globalSecret = uri.pass && uri.pass.substr(1);
    self._globalProject = uri.path.substr(lastSlash + 1);

    self._globalServer = self._getGlobalServer(uri);

    self._globalEndpoint =
      self._globalServer + '/' + path + 'api/' + self._globalProject + '/store/';

    // Reset backoff state since we may be pointing at a
    // new project/server
    this._resetBackoff();
  },

  /*
     * Wrap code within a context so Raven can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */
  context: function(options, func, args) {
    if (isFunction(options)) {
      args = func || [];
      func = options;
      options = {};
    }

    return this.wrap(options, func).apply(this, args);
  },

  /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} _before A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
  wrap: function(options, func, _before) {
    var self = this;
    // 1 argument has been passed, and it's not a function
    // so just return it
    if (isUndefined(func) && !isFunction(options)) {
      return options;
    }

    // options is optional
    if (isFunction(options)) {
      func = options;
      options = undefined;
    }

    // At this point, we've passed along 2 arguments, and the second one
    // is not a function either, so we'll just return the second argument.
    if (!isFunction(func)) {
      return func;
    }

    // We don't wanna wrap it twice!
    try {
      if (func.__raven__) {
        return func;
      }

      // If this has already been wrapped in the past, return that
      if (func.__raven_wrapper__) {
        return func.__raven_wrapper__;
      }
    } catch (e) {
      // Just accessing custom props in some Selenium environments
      // can cause a "Permission denied" exception (see raven-js#495).
      // Bail on wrapping and return the function as-is (defers to window.onerror).
      return func;
    }

    function wrapped() {
      var args = [],
        i = arguments.length,
        deep = !options || (options && options.deep !== false);

      if (_before && isFunction(_before)) {
        _before.apply(this, arguments);
      }

      // Recursively wrap all of a function's arguments that are
      // functions themselves.
      while (i--) args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];

      try {
        // Attempt to invoke user-land function
        // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
        //       means Raven caught an error invoking your application code. This is
        //       expected behavior and NOT indicative of a bug with Raven.js.
        return func.apply(this, args);
      } catch (e) {
        self._ignoreNextOnError();
        self.captureException(e, options);
        throw e;
      }
    }

    // copy over properties of the old function
    for (var property in func) {
      if (hasKey(func, property)) {
        wrapped[property] = func[property];
      }
    }
    wrapped.prototype = func.prototype;

    func.__raven_wrapper__ = wrapped;
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    wrapped.__raven__ = true;
    wrapped.__orig__ = func;

    return wrapped;
  },

  /**
   * Uninstalls the global error handler.
   *
   * @return {Raven}
   */
  uninstall: function() {
    TraceKit.report.uninstall();

    this._detachPromiseRejectionHandler();
    this._unpatchFunctionToString();
    this._restoreBuiltIns();
    this._restoreConsole();

    Error.stackTraceLimit = this._originalErrorStackTraceLimit;
    this._isRavenInstalled = false;

    return this;
  },

  /**
   * Callback used for `unhandledrejection` event
   *
   * @param {PromiseRejectionEvent} event An object containing
   *   promise: the Promise that was rejected
   *   reason: the value with which the Promise was rejected
   * @return void
   */
  _promiseRejectionHandler: function(event) {
    this._logDebug('debug', 'Raven caught unhandled promise rejection:', event);
    this.captureException(event.reason, {
      mechanism: {
        type: 'onunhandledrejection',
        handled: false
      }
    });
  },

  /**
   * Installs the global promise rejection handler.
   *
   * @return {raven}
   */
  _attachPromiseRejectionHandler: function() {
    this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this);
    _window.addEventListener &&
      _window.addEventListener('unhandledrejection', this._promiseRejectionHandler);
    return this;
  },

  /**
   * Uninstalls the global promise rejection handler.
   *
   * @return {raven}
   */
  _detachPromiseRejectionHandler: function() {
    _window.removeEventListener &&
      _window.removeEventListener('unhandledrejection', this._promiseRejectionHandler);
    return this;
  },

  /**
   * Manually capture an exception and send it over to Sentry
   *
   * @param {error} ex An exception to be logged
   * @param {object} options A specific set of options for this error [optional]
   * @return {Raven}
   */
  captureException: function(ex, options) {
    options = objectMerge({trimHeadFrames: 0}, options ? options : {});

    if (isErrorEvent(ex) && ex.error) {
      // If it is an ErrorEvent with `error` property, extract it to get actual Error
      ex = ex.error;
    } else if (isDOMError(ex) || isDOMException(ex)) {
      // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
      // then we just extract the name and message, as they don't provide anything else
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
      var name = ex.name || (isDOMError(ex) ? 'DOMError' : 'DOMException');
      var message = ex.message ? name + ': ' + ex.message : name;

      return this.captureMessage(
        message,
        objectMerge(options, {
          // neither DOMError or DOMException provide stack trace and we most likely wont get it this way as well
          // but it's barely any overhead so we may at least try
          stacktrace: true,
          trimHeadFrames: options.trimHeadFrames + 1
        })
      );
    } else if (isError(ex)) {
      // we have a real Error object
      ex = ex;
    } else if (isPlainObject(ex)) {
      // If it is plain Object, serialize it manually and extract options
      // This will allow us to group events based on top-level keys
      // which is much better than creating new group when any key/value change
      options = this._getCaptureExceptionOptionsFromPlainObject(options, ex);
      ex = new Error(options.message);
    } else {
      // If none of previous checks were valid, then it means that
      // it's not a DOMError/DOMException
      // it's not a plain Object
      // it's not a valid ErrorEvent (one with an error property)
      // it's not an Error
      // So bail out and capture it as a simple message:
      return this.captureMessage(
        ex,
        objectMerge(options, {
          stacktrace: true, // if we fall back to captureMessage, default to attempting a new trace
          trimHeadFrames: options.trimHeadFrames + 1
        })
      );
    }

    // Store the raw exception object for potential debugging and introspection
    this._lastCapturedException = ex;

    // TraceKit.report will re-raise any exception passed to it,
    // which means you have to wrap it in try/catch. Instead, we
    // can wrap it here and only re-raise if TraceKit.report
    // raises an exception different from the one we asked to
    // report on.
    try {
      var stack = TraceKit.computeStackTrace(ex);
      this._handleStackInfo(stack, options);
    } catch (ex1) {
      if (ex !== ex1) {
        throw ex1;
      }
    }

    return this;
  },

  _getCaptureExceptionOptionsFromPlainObject: function(currentOptions, ex) {
    var exKeys = Object.keys(ex).sort();
    var options = objectMerge(currentOptions, {
      message:
        'Non-Error exception captured with keys: ' + serializeKeysForMessage(exKeys),
      fingerprint: [md5(exKeys)],
      extra: currentOptions.extra || {}
    });
    options.extra.__serialized__ = serializeException(ex);

    return options;
  },

  /*
     * Manually send a message to Sentry
     *
     * @param {string} msg A plain message to be captured in Sentry
     * @param {object} options A specific set of options for this message [optional]
     * @return {Raven}
     */
  captureMessage: function(msg, options) {
    // config() automagically converts ignoreErrors from a list to a RegExp so we need to test for an
    // early call; we'll error on the side of logging anything called before configuration since it's
    // probably something you should see:
    if (
      !!this._globalOptions.ignoreErrors.test &&
      this._globalOptions.ignoreErrors.test(msg)
    ) {
      return;
    }

    options = options || {};
    msg = msg + ''; // Make sure it's actually a string

    var data = objectMerge(
      {
        message: msg
      },
      options
    );

    var ex;
    // Generate a "synthetic" stack trace from this point.
    // NOTE: If you are a Sentry user, and you are seeing this stack frame, it is NOT indicative
    //       of a bug with Raven.js. Sentry generates synthetic traces either by configuration,
    //       or if it catches a thrown object without a "stack" property.
    try {
      throw new Error(msg);
    } catch (ex1) {
      ex = ex1;
    }

    // null exception name so `Error` isn't prefixed to msg
    ex.name = null;
    var stack = TraceKit.computeStackTrace(ex);

    // stack[0] is `throw new Error(msg)` call itself, we are interested in the frame that was just before that, stack[1]
    var initialCall = isArray(stack.stack) && stack.stack[1];

    // if stack[1] is `Raven.captureException`, it means that someone passed a string to it and we redirected that call
    // to be handled by `captureMessage`, thus `initialCall` is the 3rd one, not 2nd
    // initialCall => captureException(string) => captureMessage(string)
    if (initialCall && initialCall.func === 'Raven.captureException') {
      initialCall = stack.stack[2];
    }

    var fileurl = (initialCall && initialCall.url) || '';

    if (
      !!this._globalOptions.ignoreUrls.test &&
      this._globalOptions.ignoreUrls.test(fileurl)
    ) {
      return;
    }

    if (
      !!this._globalOptions.whitelistUrls.test &&
      !this._globalOptions.whitelistUrls.test(fileurl)
    ) {
      return;
    }

    // Always attempt to get stacktrace if message is empty.
    // It's the only way to provide any helpful information to the user.
    if (this._globalOptions.stacktrace || options.stacktrace || data.message === '') {
      // fingerprint on msg, not stack trace (legacy behavior, could be revisited)
      data.fingerprint = data.fingerprint == null ? msg : data.fingerprint;

      options = objectMerge(
        {
          trimHeadFrames: 0
        },
        options
      );
      // Since we know this is a synthetic trace, the top frame (this function call)
      // MUST be from Raven.js, so mark it for trimming
      // We add to the trim counter so that callers can choose to trim extra frames, such
      // as utility functions.
      options.trimHeadFrames += 1;

      var frames = this._prepareFrames(stack, options);
      data.stacktrace = {
        // Sentry expects frames oldest to newest
        frames: frames.reverse()
      };
    }

    // Make sure that fingerprint is always wrapped in an array
    if (data.fingerprint) {
      data.fingerprint = isArray(data.fingerprint)
        ? data.fingerprint
        : [data.fingerprint];
    }

    // Fire away!
    this._send(data);

    return this;
  },

  captureBreadcrumb: function(obj) {
    var crumb = objectMerge(
      {
        timestamp: now() / 1000
      },
      obj
    );

    if (isFunction(this._globalOptions.breadcrumbCallback)) {
      var result = this._globalOptions.breadcrumbCallback(crumb);

      if (isObject(result) && !isEmptyObject(result)) {
        crumb = result;
      } else if (result === false) {
        return this;
      }
    }

    this._breadcrumbs.push(crumb);
    if (this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs) {
      this._breadcrumbs.shift();
    }
    return this;
  },

  addPlugin: function(plugin /*arg1, arg2, ... argN*/) {
    var pluginArgs = [].slice.call(arguments, 1);

    this._plugins.push([plugin, pluginArgs]);
    if (this._isRavenInstalled) {
      this._drainPlugins();
    }

    return this;
  },

  /*
     * Set/clear a user to be sent along with the payload.
     *
     * @param {object} user An object representing user data [optional]
     * @return {Raven}
     */
  setUserContext: function(user) {
    // Intentionally do not merge here since that's an unexpected behavior.
    this._globalContext.user = user;

    return this;
  },

  /*
     * Merge extra attributes to be sent along with the payload.
     *
     * @param {object} extra An object representing extra data [optional]
     * @return {Raven}
     */
  setExtraContext: function(extra) {
    this._mergeContext('extra', extra);

    return this;
  },

  /*
     * Merge tags to be sent along with the payload.
     *
     * @param {object} tags An object representing tags [optional]
     * @return {Raven}
     */
  setTagsContext: function(tags) {
    this._mergeContext('tags', tags);

    return this;
  },

  /*
     * Clear all of the context.
     *
     * @return {Raven}
     */
  clearContext: function() {
    this._globalContext = {};

    return this;
  },

  /*
     * Get a copy of the current context. This cannot be mutated.
     *
     * @return {object} copy of context
     */
  getContext: function() {
    // lol javascript
    return JSON.parse(stringify(this._globalContext));
  },

  /*
     * Set environment of application
     *
     * @param {string} environment Typically something like 'production'.
     * @return {Raven}
     */
  setEnvironment: function(environment) {
    this._globalOptions.environment = environment;

    return this;
  },

  /*
     * Set release version of application
     *
     * @param {string} release Typically something like a git SHA to identify version
     * @return {Raven}
     */
  setRelease: function(release) {
    this._globalOptions.release = release;

    return this;
  },

  /*
     * Set the dataCallback option
     *
     * @param {function} callback The callback to run which allows the
     *                            data blob to be mutated before sending
     * @return {Raven}
     */
  setDataCallback: function(callback) {
    var original = this._globalOptions.dataCallback;
    this._globalOptions.dataCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the breadcrumbCallback option
     *
     * @param {function} callback The callback to run which allows filtering
     *                            or mutating breadcrumbs
     * @return {Raven}
     */
  setBreadcrumbCallback: function(callback) {
    var original = this._globalOptions.breadcrumbCallback;
    this._globalOptions.breadcrumbCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the shouldSendCallback option
     *
     * @param {function} callback The callback to run which allows
     *                            introspecting the blob before sending
     * @return {Raven}
     */
  setShouldSendCallback: function(callback) {
    var original = this._globalOptions.shouldSendCallback;
    this._globalOptions.shouldSendCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /**
   * Override the default HTTP transport mechanism that transmits data
   * to the Sentry server.
   *
   * @param {function} transport Function invoked instead of the default
   *                             `makeRequest` handler.
   *
   * @return {Raven}
   */
  setTransport: function(transport) {
    this._globalOptions.transport = transport;

    return this;
  },

  /*
     * Get the latest raw exception that was captured by Raven.
     *
     * @return {error}
     */
  lastException: function() {
    return this._lastCapturedException;
  },

  /*
     * Get the last event id
     *
     * @return {string}
     */
  lastEventId: function() {
    return this._lastEventId;
  },

  /*
     * Determine if Raven is setup and ready to go.
     *
     * @return {boolean}
     */
  isSetup: function() {
    if (!this._hasJSON) return false; // needs JSON support
    if (!this._globalServer) {
      if (!this.ravenNotConfiguredError) {
        this.ravenNotConfiguredError = true;
        this._logDebug('error', 'Error: Raven has not been configured.');
      }
      return false;
    }
    return true;
  },

  afterLoad: function() {
    // TODO: remove window dependence?

    // Attempt to initialize Raven on load
    var RavenConfig = _window.RavenConfig;
    if (RavenConfig) {
      this.config(RavenConfig.dsn, RavenConfig.config).install();
    }
  },

  showReportDialog: function(options) {
    if (
      !_document // doesn't work without a document (React native)
    )
      return;

    options = Object.assign(
      {
        eventId: this.lastEventId(),
        dsn: this._dsn,
        user: this._globalContext.user || {}
      },
      options
    );

    if (!options.eventId) {
      throw new RavenConfigError('Missing eventId');
    }

    if (!options.dsn) {
      throw new RavenConfigError('Missing DSN');
    }

    var encode = encodeURIComponent;
    var encodedOptions = [];

    for (var key in options) {
      if (key === 'user') {
        var user = options.user;
        if (user.name) encodedOptions.push('name=' + encode(user.name));
        if (user.email) encodedOptions.push('email=' + encode(user.email));
      } else {
        encodedOptions.push(encode(key) + '=' + encode(options[key]));
      }
    }
    var globalServer = this._getGlobalServer(this._parseDSN(options.dsn));

    var script = _document.createElement('script');
    script.async = true;
    script.src = globalServer + '/api/embed/error-page/?' + encodedOptions.join('&');
    (_document.head || _document.body).appendChild(script);
  },

  /**** Private functions ****/
  _ignoreNextOnError: function() {
    var self = this;
    this._ignoreOnError += 1;
    setTimeout(function() {
      // onerror should trigger before setTimeout
      self._ignoreOnError -= 1;
    });
  },

  _triggerEvent: function(eventType, options) {
    // NOTE: `event` is a native browser thing, so let's avoid conflicting wiht it
    var evt, key;

    if (!this._hasDocument) return;

    options = options || {};

    eventType = 'raven' + eventType.substr(0, 1).toUpperCase() + eventType.substr(1);

    if (_document.createEvent) {
      evt = _document.createEvent('HTMLEvents');
      evt.initEvent(eventType, true, true);
    } else {
      evt = _document.createEventObject();
      evt.eventType = eventType;
    }

    for (key in options)
      if (hasKey(options, key)) {
        evt[key] = options[key];
      }

    if (_document.createEvent) {
      // IE9 if standards
      _document.dispatchEvent(evt);
    } else {
      // IE8 regardless of Quirks or Standards
      // IE9 if quirks
      try {
        _document.fireEvent('on' + evt.eventType.toLowerCase(), evt);
      } catch (e) {
        // Do nothing
      }
    }
  },

  /**
   * Wraps addEventListener to capture UI breadcrumbs
   * @param evtName the event name (e.g. "click")
   * @returns {Function}
   * @private
   */
  _breadcrumbEventHandler: function(evtName) {
    var self = this;
    return function(evt) {
      // reset keypress timeout; e.g. triggering a 'click' after
      // a 'keypress' will reset the keypress debounce so that a new
      // set of keypresses can be recorded
      self._keypressTimeout = null;

      // It's possible this handler might trigger multiple times for the same
      // event (e.g. event propagation through node ancestors). Ignore if we've
      // already captured the event.
      if (self._lastCapturedEvent === evt) return;

      self._lastCapturedEvent = evt;

      // try/catch both:
      // - accessing evt.target (see getsentry/raven-js#838, #768)
      // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
      //   can throw an exception in some circumstances.
      var target;
      try {
        target = htmlTreeAsString(evt.target);
      } catch (e) {
        target = '<unknown>';
      }

      self.captureBreadcrumb({
        category: 'ui.' + evtName, // e.g. ui.click, ui.input
        message: target
      });
    };
  },

  /**
   * Wraps addEventListener to capture keypress UI events
   * @returns {Function}
   * @private
   */
  _keypressEventHandler: function() {
    var self = this,
      debounceDuration = 1000; // milliseconds

    // TODO: if somehow user switches keypress target before
    //       debounce timeout is triggered, we will only capture
    //       a single breadcrumb from the FIRST target (acceptable?)
    return function(evt) {
      var target;
      try {
        target = evt.target;
      } catch (e) {
        // just accessing event properties can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/raven-js/issues/838
        return;
      }
      var tagName = target && target.tagName;

      // only consider keypress events on actual input elements
      // this will disregard keypresses targeting body (e.g. tabbing
      // through elements, hotkeys, etc)
      if (
        !tagName ||
        (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)
      )
        return;

      // record first keypress in a series, but ignore subsequent
      // keypresses until debounce clears
      var timeout = self._keypressTimeout;
      if (!timeout) {
        self._breadcrumbEventHandler('input')(evt);
      }
      clearTimeout(timeout);
      self._keypressTimeout = setTimeout(function() {
        self._keypressTimeout = null;
      }, debounceDuration);
    };
  },

  /**
   * Captures a breadcrumb of type "navigation", normalizing input URLs
   * @param to the originating URL
   * @param from the target URL
   * @private
   */
  _captureUrlChange: function(from, to) {
    var parsedLoc = parseUrl(this._location.href);
    var parsedTo = parseUrl(to);
    var parsedFrom = parseUrl(from);

    // because onpopstate only tells you the "new" (to) value of location.href, and
    // not the previous (from) value, we need to track the value of the current URL
    // state ourselves
    this._lastHref = to;

    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host)
      to = parsedTo.relative;
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host)
      from = parsedFrom.relative;

    this.captureBreadcrumb({
      category: 'navigation',
      data: {
        to: to,
        from: from
      }
    });
  },

  _patchFunctionToString: function() {
    var self = this;
    self._originalFunctionToString = Function.prototype.toString;
    // eslint-disable-next-line no-extend-native
    Function.prototype.toString = function() {
      if (typeof this === 'function' && this.__raven__) {
        return self._originalFunctionToString.apply(this.__orig__, arguments);
      }
      return self._originalFunctionToString.apply(this, arguments);
    };
  },

  _unpatchFunctionToString: function() {
    if (this._originalFunctionToString) {
      // eslint-disable-next-line no-extend-native
      Function.prototype.toString = this._originalFunctionToString;
    }
  },

  /**
   * Wrap timer functions and event targets to catch errors and provide
   * better metadata.
   */
  _instrumentTryCatch: function() {
    var self = this;

    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapTimeFn(orig) {
      return function(fn, t) {
        // preserve arity
        // Make a copy of the arguments to prevent deoptimization
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }
        var originalCallback = args[0];
        if (isFunction(originalCallback)) {
          args[0] = self.wrap(
            {
              mechanism: {
                type: 'instrument',
                data: {function: orig.name || '<anonymous>'}
              }
            },
            originalCallback
          );
        }

        // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
        // also supports only two arguments and doesn't care what this is, so we
        // can just call the original function directly.
        if (orig.apply) {
          return orig.apply(this, args);
        } else {
          return orig(args[0], args[1]);
        }
      };
    }

    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

    function wrapEventTarget(global) {
      var proto = _window[global] && _window[global].prototype;
      if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
        fill(
          proto,
          'addEventListener',
          function(orig) {
            return function(evtName, fn, capture, secure) {
              // preserve arity
              try {
                if (fn && fn.handleEvent) {
                  fn.handleEvent = self.wrap(
                    {
                      mechanism: {
                        type: 'instrument',
                        data: {
                          target: global,
                          function: 'handleEvent',
                          handler: (fn && fn.name) || '<anonymous>'
                        }
                      }
                    },
                    fn.handleEvent
                  );
                }
              } catch (err) {
                // can sometimes get 'Permission denied to access property "handle Event'
              }

              // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
              // so that we don't have more than one wrapper function
              var before, clickHandler, keypressHandler;

              if (
                autoBreadcrumbs &&
                autoBreadcrumbs.dom &&
                (global === 'EventTarget' || global === 'Node')
              ) {
                // NOTE: generating multiple handlers per addEventListener invocation, should
                //       revisit and verify we can just use one (almost certainly)
                clickHandler = self._breadcrumbEventHandler('click');
                keypressHandler = self._keypressEventHandler();
                before = function(evt) {
                  // need to intercept every DOM event in `before` argument, in case that
                  // same wrapped method is re-used for different events (e.g. mousemove THEN click)
                  // see #724
                  if (!evt) return;

                  var eventType;
                  try {
                    eventType = evt.type;
                  } catch (e) {
                    // just accessing event properties can throw an exception in some rare circumstances
                    // see: https://github.com/getsentry/raven-js/issues/838
                    return;
                  }
                  if (eventType === 'click') return clickHandler(evt);
                  else if (eventType === 'keypress') return keypressHandler(evt);
                };
              }
              return orig.call(
                this,
                evtName,
                self.wrap(
                  {
                    mechanism: {
                      type: 'instrument',
                      data: {
                        target: global,
                        function: 'addEventListener',
                        handler: (fn && fn.name) || '<anonymous>'
                      }
                    }
                  },
                  fn,
                  before
                ),
                capture,
                secure
              );
            };
          },
          wrappedBuiltIns
        );
        fill(
          proto,
          'removeEventListener',
          function(orig) {
            return function(evt, fn, capture, secure) {
              try {
                fn = fn && (fn.__raven_wrapper__ ? fn.__raven_wrapper__ : fn);
              } catch (e) {
                // ignore, accessing __raven_wrapper__ will throw in some Selenium environments
              }
              return orig.call(this, evt, fn, capture, secure);
            };
          },
          wrappedBuiltIns
        );
      }
    }

    fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
    fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);
    if (_window.requestAnimationFrame) {
      fill(
        _window,
        'requestAnimationFrame',
        function(orig) {
          return function(cb) {
            return orig(
              self.wrap(
                {
                  mechanism: {
                    type: 'instrument',
                    data: {
                      function: 'requestAnimationFrame',
                      handler: (orig && orig.name) || '<anonymous>'
                    }
                  }
                },
                cb
              )
            );
          };
        },
        wrappedBuiltIns
      );
    }

    // event targets borrowed from bugsnag-js:
    // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
    var eventTargets = [
      'EventTarget',
      'Window',
      'Node',
      'ApplicationCache',
      'AudioTrackList',
      'ChannelMergerNode',
      'CryptoOperation',
      'EventSource',
      'FileReader',
      'HTMLUnknownElement',
      'IDBDatabase',
      'IDBRequest',
      'IDBTransaction',
      'KeyOperation',
      'MediaController',
      'MessagePort',
      'ModalWindow',
      'Notification',
      'SVGElementInstance',
      'Screen',
      'TextTrack',
      'TextTrackCue',
      'TextTrackList',
      'WebSocket',
      'WebSocketWorker',
      'Worker',
      'XMLHttpRequest',
      'XMLHttpRequestEventTarget',
      'XMLHttpRequestUpload'
    ];
    for (var i = 0; i < eventTargets.length; i++) {
      wrapEventTarget(eventTargets[i]);
    }
  },

  /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - XMLHttpRequests
   *  - DOM interactions (click/typing)
   *  - window.location changes
   *  - console
   *
   * Can be disabled or individually configured via the `autoBreadcrumbs` config option
   */
  _instrumentBreadcrumbs: function() {
    var self = this;
    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapProp(prop, xhr) {
      if (prop in xhr && isFunction(xhr[prop])) {
        fill(xhr, prop, function(orig) {
          return self.wrap(
            {
              mechanism: {
                type: 'instrument',
                data: {function: prop, handler: (orig && orig.name) || '<anonymous>'}
              }
            },
            orig
          );
        }); // intentionally don't track filled methods on XHR instances
      }
    }

    if (autoBreadcrumbs.xhr && 'XMLHttpRequest' in _window) {
      var xhrproto = _window.XMLHttpRequest && _window.XMLHttpRequest.prototype;
      fill(
        xhrproto,
        'open',
        function(origOpen) {
          return function(method, url) {
            // preserve arity

            // if Sentry key appears in URL, don't capture
            if (isString(url) && url.indexOf(self._globalKey) === -1) {
              this.__raven_xhr = {
                method: method,
                url: url,
                status_code: null
              };
            }

            return origOpen.apply(this, arguments);
          };
        },
        wrappedBuiltIns
      );

      fill(
        xhrproto,
        'send',
        function(origSend) {
          return function() {
            // preserve arity
            var xhr = this;

            function onreadystatechangeHandler() {
              if (xhr.__raven_xhr && xhr.readyState === 4) {
                try {
                  // touching statusCode in some platforms throws
                  // an exception
                  xhr.__raven_xhr.status_code = xhr.status;
                } catch (e) {
                  /* do nothing */
                }

                self.captureBreadcrumb({
                  type: 'http',
                  category: 'xhr',
                  data: xhr.__raven_xhr
                });
              }
            }

            var props = ['onload', 'onerror', 'onprogress'];
            for (var j = 0; j < props.length; j++) {
              wrapProp(props[j], xhr);
            }

            if ('onreadystatechange' in xhr && isFunction(xhr.onreadystatechange)) {
              fill(
                xhr,
                'onreadystatechange',
                function(orig) {
                  return self.wrap(
                    {
                      mechanism: {
                        type: 'instrument',
                        data: {
                          function: 'onreadystatechange',
                          handler: (orig && orig.name) || '<anonymous>'
                        }
                      }
                    },
                    orig,
                    onreadystatechangeHandler
                  );
                } /* intentionally don't track this instrumentation */
              );
            } else {
              // if onreadystatechange wasn't actually set by the page on this xhr, we
              // are free to set our own and capture the breadcrumb
              xhr.onreadystatechange = onreadystatechangeHandler;
            }

            return origSend.apply(this, arguments);
          };
        },
        wrappedBuiltIns
      );
    }

    if (autoBreadcrumbs.xhr && supportsFetch()) {
      fill(
        _window,
        'fetch',
        function(origFetch) {
          return function() {
            // preserve arity
            // Make a copy of the arguments to prevent deoptimization
            // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; ++i) {
              args[i] = arguments[i];
            }

            var fetchInput = args[0];
            var method = 'GET';
            var url;

            if (typeof fetchInput === 'string') {
              url = fetchInput;
            } else if ('Request' in _window && fetchInput instanceof _window.Request) {
              url = fetchInput.url;
              if (fetchInput.method) {
                method = fetchInput.method;
              }
            } else {
              url = '' + fetchInput;
            }

            // if Sentry key appears in URL, don't capture, as it's our own request
            if (url.indexOf(self._globalKey) !== -1) {
              return origFetch.apply(this, args);
            }

            if (args[1] && args[1].method) {
              method = args[1].method;
            }

            var fetchData = {
              method: method,
              url: url,
              status_code: null
            };

            return origFetch
              .apply(this, args)
              .then(function(response) {
                fetchData.status_code = response.status;

                self.captureBreadcrumb({
                  type: 'http',
                  category: 'fetch',
                  data: fetchData
                });

                return response;
              })
              ['catch'](function(err) {
                // if there is an error performing the request
                self.captureBreadcrumb({
                  type: 'http',
                  category: 'fetch',
                  data: fetchData,
                  level: 'error'
                });

                throw err;
              });
          };
        },
        wrappedBuiltIns
      );
    }

    // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
    // to the document. Do this before we instrument addEventListener.
    if (autoBreadcrumbs.dom && this._hasDocument) {
      if (_document.addEventListener) {
        _document.addEventListener('click', self._breadcrumbEventHandler('click'), false);
        _document.addEventListener('keypress', self._keypressEventHandler(), false);
      } else if (_document.attachEvent) {
        // IE8 Compatibility
        _document.attachEvent('onclick', self._breadcrumbEventHandler('click'));
        _document.attachEvent('onkeypress', self._keypressEventHandler());
      }
    }

    // record navigation (URL) changes
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var chrome = _window.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasPushAndReplaceState =
      !isChromePackagedApp &&
      _window.history &&
      _window.history.pushState &&
      _window.history.replaceState;
    if (autoBreadcrumbs.location && hasPushAndReplaceState) {
      // TODO: remove onpopstate handler on uninstall()
      var oldOnPopState = _window.onpopstate;
      _window.onpopstate = function() {
        var currentHref = self._location.href;
        self._captureUrlChange(self._lastHref, currentHref);

        if (oldOnPopState) {
          return oldOnPopState.apply(this, arguments);
        }
      };

      var historyReplacementFunction = function(origHistFunction) {
        // note history.pushState.length is 0; intentionally not declaring
        // params to preserve 0 arity
        return function(/* state, title, url */) {
          var url = arguments.length > 2 ? arguments[2] : undefined;

          // url argument is optional
          if (url) {
            // coerce to string (this is what pushState does)
            self._captureUrlChange(self._lastHref, url + '');
          }

          return origHistFunction.apply(this, arguments);
        };
      };

      fill(_window.history, 'pushState', historyReplacementFunction, wrappedBuiltIns);
      fill(_window.history, 'replaceState', historyReplacementFunction, wrappedBuiltIns);
    }

    if (autoBreadcrumbs.console && 'console' in _window && console.log) {
      // console
      var consoleMethodCallback = function(msg, data) {
        self.captureBreadcrumb({
          message: msg,
          level: data.level,
          category: 'console'
        });
      };

      each(['debug', 'info', 'warn', 'error', 'log'], function(_, level) {
        wrapConsoleMethod(console, level, consoleMethodCallback);
      });
    }
  },

  _restoreBuiltIns: function() {
    // restore any wrapped builtins
    var builtin;
    while (this._wrappedBuiltIns.length) {
      builtin = this._wrappedBuiltIns.shift();

      var obj = builtin[0],
        name = builtin[1],
        orig = builtin[2];

      obj[name] = orig;
    }
  },

  _restoreConsole: function() {
    // eslint-disable-next-line guard-for-in
    for (var method in this._originalConsoleMethods) {
      this._originalConsole[method] = this._originalConsoleMethods[method];
    }
  },

  _drainPlugins: function() {
    var self = this;

    // FIX ME TODO
    each(this._plugins, function(_, plugin) {
      var installer = plugin[0];
      var args = plugin[1];
      installer.apply(self, [self].concat(args));
    });
  },

  _parseDSN: function(str) {
    var m = dsnPattern.exec(str),
      dsn = {},
      i = 7;

    try {
      while (i--) dsn[dsnKeys[i]] = m[i] || '';
    } catch (e) {
      throw new RavenConfigError('Invalid DSN: ' + str);
    }

    if (dsn.pass && !this._globalOptions.allowSecretKey) {
      throw new RavenConfigError(
        'Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key'
      );
    }

    return dsn;
  },

  _getGlobalServer: function(uri) {
    // assemble the endpoint from the uri pieces
    var globalServer = '//' + uri.host + (uri.port ? ':' + uri.port : '');

    if (uri.protocol) {
      globalServer = uri.protocol + ':' + globalServer;
    }
    return globalServer;
  },

  _handleOnErrorStackInfo: function(stackInfo, options) {
    options = options || {};
    options.mechanism = options.mechanism || {
      type: 'onerror',
      handled: false
    };

    // if we are intentionally ignoring errors via onerror, bail out
    if (!this._ignoreOnError) {
      this._handleStackInfo(stackInfo, options);
    }
  },

  _handleStackInfo: function(stackInfo, options) {
    var frames = this._prepareFrames(stackInfo, options);

    this._triggerEvent('handle', {
      stackInfo: stackInfo,
      options: options
    });

    this._processException(
      stackInfo.name,
      stackInfo.message,
      stackInfo.url,
      stackInfo.lineno,
      frames,
      options
    );
  },

  _prepareFrames: function(stackInfo, options) {
    var self = this;
    var frames = [];
    if (stackInfo.stack && stackInfo.stack.length) {
      each(stackInfo.stack, function(i, stack) {
        var frame = self._normalizeFrame(stack, stackInfo.url);
        if (frame) {
          frames.push(frame);
        }
      });

      // e.g. frames captured via captureMessage throw
      if (options && options.trimHeadFrames) {
        for (var j = 0; j < options.trimHeadFrames && j < frames.length; j++) {
          frames[j].in_app = false;
        }
      }
    }
    frames = frames.slice(0, this._globalOptions.stackTraceLimit);
    return frames;
  },

  _normalizeFrame: function(frame, stackInfoUrl) {
    // normalize the frames data
    var normalized = {
      filename: frame.url,
      lineno: frame.line,
      colno: frame.column,
      function: frame.func || '?'
    };

    // Case when we don't have any information about the error
    // E.g. throwing a string or raw object, instead of an `Error` in Firefox
    // Generating synthetic error doesn't add any value here
    //
    // We should probably somehow let a user know that they should fix their code
    if (!frame.url) {
      normalized.filename = stackInfoUrl; // fallback to whole stacks url from onerror handler
    }

    normalized.in_app = !// determine if an exception came from outside of our app
    // first we check the global includePaths list.
    (
      (!!this._globalOptions.includePaths.test &&
        !this._globalOptions.includePaths.test(normalized.filename)) ||
      // Now we check for fun, if the function name is Raven or TraceKit
      /(Raven|TraceKit)\./.test(normalized['function']) ||
      // finally, we do a last ditch effort and check for raven.min.js
      /raven\.(min\.)?js$/.test(normalized.filename)
    );

    return normalized;
  },

  _processException: function(type, message, fileurl, lineno, frames, options) {
    var prefixedMessage = (type ? type + ': ' : '') + (message || '');
    if (
      !!this._globalOptions.ignoreErrors.test &&
      (this._globalOptions.ignoreErrors.test(message) ||
        this._globalOptions.ignoreErrors.test(prefixedMessage))
    ) {
      return;
    }

    var stacktrace;

    if (frames && frames.length) {
      fileurl = frames[0].filename || fileurl;
      // Sentry expects frames oldest to newest
      // and JS sends them as newest to oldest
      frames.reverse();
      stacktrace = {frames: frames};
    } else if (fileurl) {
      stacktrace = {
        frames: [
          {
            filename: fileurl,
            lineno: lineno,
            in_app: true
          }
        ]
      };
    }

    if (
      !!this._globalOptions.ignoreUrls.test &&
      this._globalOptions.ignoreUrls.test(fileurl)
    ) {
      return;
    }

    if (
      !!this._globalOptions.whitelistUrls.test &&
      !this._globalOptions.whitelistUrls.test(fileurl)
    ) {
      return;
    }

    var data = objectMerge(
      {
        // sentry.interfaces.Exception
        exception: {
          values: [
            {
              type: type,
              value: message,
              stacktrace: stacktrace
            }
          ]
        },
        transaction: fileurl
      },
      options
    );

    var ex = data.exception.values[0];
    if (ex.type == null && ex.value === '') {
      ex.value = 'Unrecoverable error caught';
    }

    // Move mechanism from options to exception interface
    // We do this, as requiring user to pass `{exception:{mechanism:{ ... }}}` would be
    // too much
    if (!data.exception.mechanism && data.mechanism) {
      data.exception.mechanism = data.mechanism;
      delete data.mechanism;
    }

    data.exception.mechanism = objectMerge(
      {
        type: 'generic',
        handled: true
      },
      data.exception.mechanism || {}
    );

    // Fire away!
    this._send(data);
  },

  _trimPacket: function(data) {
    // For now, we only want to truncate the two different messages
    // but this could/should be expanded to just trim everything
    var max = this._globalOptions.maxMessageLength;
    if (data.message) {
      data.message = truncate(data.message, max);
    }
    if (data.exception) {
      var exception = data.exception.values[0];
      exception.value = truncate(exception.value, max);
    }

    var request = data.request;
    if (request) {
      if (request.url) {
        request.url = truncate(request.url, this._globalOptions.maxUrlLength);
      }
      if (request.Referer) {
        request.Referer = truncate(request.Referer, this._globalOptions.maxUrlLength);
      }
    }

    if (data.breadcrumbs && data.breadcrumbs.values)
      this._trimBreadcrumbs(data.breadcrumbs);

    return data;
  },

  /**
   * Truncate breadcrumb values (right now just URLs)
   */
  _trimBreadcrumbs: function(breadcrumbs) {
    // known breadcrumb properties with urls
    // TODO: also consider arbitrary prop values that start with (https?)?://
    var urlProps = ['to', 'from', 'url'],
      urlProp,
      crumb,
      data;

    for (var i = 0; i < breadcrumbs.values.length; ++i) {
      crumb = breadcrumbs.values[i];
      if (
        !crumb.hasOwnProperty('data') ||
        !isObject(crumb.data) ||
        objectFrozen(crumb.data)
      )
        continue;

      data = objectMerge({}, crumb.data);
      for (var j = 0; j < urlProps.length; ++j) {
        urlProp = urlProps[j];
        if (data.hasOwnProperty(urlProp) && data[urlProp]) {
          data[urlProp] = truncate(data[urlProp], this._globalOptions.maxUrlLength);
        }
      }
      breadcrumbs.values[i].data = data;
    }
  },

  _getHttpData: function() {
    if (!this._hasNavigator && !this._hasDocument) return;
    var httpData = {};

    if (this._hasNavigator && _navigator.userAgent) {
      httpData.headers = {
        'User-Agent': _navigator.userAgent
      };
    }

    // Check in `window` instead of `document`, as we may be in ServiceWorker environment
    if (_window.location && _window.location.href) {
      httpData.url = _window.location.href;
    }

    if (this._hasDocument && _document.referrer) {
      if (!httpData.headers) httpData.headers = {};
      httpData.headers.Referer = _document.referrer;
    }

    return httpData;
  },

  _resetBackoff: function() {
    this._backoffDuration = 0;
    this._backoffStart = null;
  },

  _shouldBackoff: function() {
    return this._backoffDuration && now() - this._backoffStart < this._backoffDuration;
  },

  /**
   * Returns true if the in-process data payload matches the signature
   * of the previously-sent data
   *
   * NOTE: This has to be done at this level because TraceKit can generate
   *       data from window.onerror WITHOUT an exception object (IE8, IE9,
   *       other old browsers). This can take the form of an "exception"
   *       data object with a single frame (derived from the onerror args).
   */
  _isRepeatData: function(current) {
    var last = this._lastData;

    if (
      !last ||
      current.message !== last.message || // defined for captureMessage
      current.transaction !== last.transaction // defined for captureException/onerror
    )
      return false;

    // Stacktrace interface (i.e. from captureMessage)
    if (current.stacktrace || last.stacktrace) {
      return isSameStacktrace(current.stacktrace, last.stacktrace);
    } else if (current.exception || last.exception) {
      // Exception interface (i.e. from captureException/onerror)
      return isSameException(current.exception, last.exception);
    }

    return true;
  },

  _setBackoffState: function(request) {
    // If we are already in a backoff state, don't change anything
    if (this._shouldBackoff()) {
      return;
    }

    var status = request.status;

    // 400 - project_id doesn't exist or some other fatal
    // 401 - invalid/revoked dsn
    // 429 - too many requests
    if (!(status === 400 || status === 401 || status === 429)) return;

    var retry;
    try {
      // If Retry-After is not in Access-Control-Expose-Headers, most
      // browsers will throw an exception trying to access it
      if (supportsFetch()) {
        retry = request.headers.get('Retry-After');
      } else {
        retry = request.getResponseHeader('Retry-After');
      }

      // Retry-After is returned in seconds
      retry = parseInt(retry, 10) * 1000;
    } catch (e) {
      /* eslint no-empty:0 */
    }

    this._backoffDuration = retry
      ? // If Sentry server returned a Retry-After value, use it
        retry
      : // Otherwise, double the last backoff duration (starts at 1 sec)
        this._backoffDuration * 2 || 1000;

    this._backoffStart = now();
  },

  _send: function(data) {
    var globalOptions = this._globalOptions;

    var baseData = {
        project: this._globalProject,
        logger: globalOptions.logger,
        platform: 'javascript'
      },
      httpData = this._getHttpData();

    if (httpData) {
      baseData.request = httpData;
    }

    // HACK: delete `trimHeadFrames` to prevent from appearing in outbound payload
    if (data.trimHeadFrames) delete data.trimHeadFrames;

    data = objectMerge(baseData, data);

    // Merge in the tags and extra separately since objectMerge doesn't handle a deep merge
    data.tags = objectMerge(objectMerge({}, this._globalContext.tags), data.tags);
    data.extra = objectMerge(objectMerge({}, this._globalContext.extra), data.extra);

    // Send along our own collected metadata with extra
    data.extra['session:duration'] = now() - this._startTime;

    if (this._breadcrumbs && this._breadcrumbs.length > 0) {
      // intentionally make shallow copy so that additions
      // to breadcrumbs aren't accidentally sent in this request
      data.breadcrumbs = {
        values: [].slice.call(this._breadcrumbs, 0)
      };
    }

    if (this._globalContext.user) {
      // sentry.interfaces.User
      data.user = this._globalContext.user;
    }

    // Include the environment if it's defined in globalOptions
    if (globalOptions.environment) data.environment = globalOptions.environment;

    // Include the release if it's defined in globalOptions
    if (globalOptions.release) data.release = globalOptions.release;

    // Include server_name if it's defined in globalOptions
    if (globalOptions.serverName) data.server_name = globalOptions.serverName;

    data = this._sanitizeData(data);

    // Cleanup empty properties before sending them to the server
    Object.keys(data).forEach(function(key) {
      if (data[key] == null || data[key] === '' || isEmptyObject(data[key])) {
        delete data[key];
      }
    });

    if (isFunction(globalOptions.dataCallback)) {
      data = globalOptions.dataCallback(data) || data;
    }

    // Why??????????
    if (!data || isEmptyObject(data)) {
      return;
    }

    // Check if the request should be filtered or not
    if (
      isFunction(globalOptions.shouldSendCallback) &&
      !globalOptions.shouldSendCallback(data)
    ) {
      return;
    }

    // Backoff state: Sentry server previously responded w/ an error (e.g. 429 - too many requests),
    // so drop requests until "cool-off" period has elapsed.
    if (this._shouldBackoff()) {
      this._logDebug('warn', 'Raven dropped error due to backoff: ', data);
      return;
    }

    if (typeof globalOptions.sampleRate === 'number') {
      if (Math.random() < globalOptions.sampleRate) {
        this._sendProcessedPayload(data);
      }
    } else {
      this._sendProcessedPayload(data);
    }
  },

  _sanitizeData: function(data) {
    return sanitize(data, this._globalOptions.sanitizeKeys);
  },

  _getUuid: function() {
    return uuid4();
  },

  _sendProcessedPayload: function(data, callback) {
    var self = this;
    var globalOptions = this._globalOptions;

    if (!this.isSetup()) return;

    // Try and clean up the packet before sending by truncating long values
    data = this._trimPacket(data);

    // ideally duplicate error testing should occur *before* dataCallback/shouldSendCallback,
    // but this would require copying an un-truncated copy of the data packet, which can be
    // arbitrarily deep (extra_data) -- could be worthwhile? will revisit
    if (!this._globalOptions.allowDuplicates && this._isRepeatData(data)) {
      this._logDebug('warn', 'Raven dropped repeat event: ', data);
      return;
    }

    // Send along an event_id if not explicitly passed.
    // This event_id can be used to reference the error within Sentry itself.
    // Set lastEventId after we know the error should actually be sent
    this._lastEventId = data.event_id || (data.event_id = this._getUuid());

    // Store outbound payload after trim
    this._lastData = data;

    this._logDebug('debug', 'Raven about to send:', data);

    var auth = {
      sentry_version: '7',
      sentry_client: 'raven-js/' + this.VERSION,
      sentry_key: this._globalKey
    };

    if (this._globalSecret) {
      auth.sentry_secret = this._globalSecret;
    }

    var exception = data.exception && data.exception.values[0];

    // only capture 'sentry' breadcrumb is autoBreadcrumbs is truthy
    if (
      this._globalOptions.autoBreadcrumbs &&
      this._globalOptions.autoBreadcrumbs.sentry
    ) {
      this.captureBreadcrumb({
        category: 'sentry',
        message: exception
          ? (exception.type ? exception.type + ': ' : '') + exception.value
          : data.message,
        event_id: data.event_id,
        level: data.level || 'error' // presume error unless specified
      });
    }

    var url = this._globalEndpoint;
    (globalOptions.transport || this._makeRequest).call(this, {
      url: url,
      auth: auth,
      data: data,
      options: globalOptions,
      onSuccess: function success() {
        self._resetBackoff();

        self._triggerEvent('success', {
          data: data,
          src: url
        });
        callback && callback();
      },
      onError: function failure(error) {
        self._logDebug('error', 'Raven transport failed to send: ', error);

        if (error.request) {
          self._setBackoffState(error.request);
        }

        self._triggerEvent('failure', {
          data: data,
          src: url
        });
        error = error || new Error('Raven send failed (no additional details provided)');
        callback && callback(error);
      }
    });
  },

  _makeRequest: function(opts) {
    // Auth is intentionally sent as part of query string (NOT as custom HTTP header) to avoid preflight CORS requests
    var url = opts.url + '?' + urlencode(opts.auth);

    var evaluatedHeaders = null;
    var evaluatedFetchParameters = {};

    if (opts.options.headers) {
      evaluatedHeaders = this._evaluateHash(opts.options.headers);
    }

    if (opts.options.fetchParameters) {
      evaluatedFetchParameters = this._evaluateHash(opts.options.fetchParameters);
    }

    if (supportsFetch()) {
      evaluatedFetchParameters.body = stringify(opts.data);

      var defaultFetchOptions = objectMerge({}, this._fetchDefaults);
      var fetchOptions = objectMerge(defaultFetchOptions, evaluatedFetchParameters);

      if (evaluatedHeaders) {
        fetchOptions.headers = evaluatedHeaders;
      }

      return _window
        .fetch(url, fetchOptions)
        .then(function(response) {
          if (response.ok) {
            opts.onSuccess && opts.onSuccess();
          } else {
            var error = new Error('Sentry error code: ' + response.status);
            // It's called request only to keep compatibility with XHR interface
            // and not add more redundant checks in setBackoffState method
            error.request = response;
            opts.onError && opts.onError(error);
          }
        })
        ['catch'](function() {
          opts.onError &&
            opts.onError(new Error('Sentry error code: network unavailable'));
        });
    }

    var request = _window.XMLHttpRequest && new _window.XMLHttpRequest();
    if (!request) return;

    // if browser doesn't support CORS (e.g. IE7), we are out of luck
    var hasCORS = 'withCredentials' in request || typeof XDomainRequest !== 'undefined';

    if (!hasCORS) return;

    if ('withCredentials' in request) {
      request.onreadystatechange = function() {
        if (request.readyState !== 4) {
          return;
        } else if (request.status === 200) {
          opts.onSuccess && opts.onSuccess();
        } else if (opts.onError) {
          var err = new Error('Sentry error code: ' + request.status);
          err.request = request;
          opts.onError(err);
        }
      };
    } else {
      request = new XDomainRequest();
      // xdomainrequest cannot go http -> https (or vice versa),
      // so always use protocol relative
      url = url.replace(/^https?:/, '');

      // onreadystatechange not supported by XDomainRequest
      if (opts.onSuccess) {
        request.onload = opts.onSuccess;
      }
      if (opts.onError) {
        request.onerror = function() {
          var err = new Error('Sentry error code: XDomainRequest');
          err.request = request;
          opts.onError(err);
        };
      }
    }

    request.open('POST', url);

    if (evaluatedHeaders) {
      each(evaluatedHeaders, function(key, value) {
        request.setRequestHeader(key, value);
      });
    }

    request.send(stringify(opts.data));
  },

  _evaluateHash: function(hash) {
    var evaluated = {};

    for (var key in hash) {
      if (hash.hasOwnProperty(key)) {
        var value = hash[key];
        evaluated[key] = typeof value === 'function' ? value() : value;
      }
    }

    return evaluated;
  },

  _logDebug: function(level) {
    // We allow `Raven.debug` and `Raven.config(DSN, { debug: true })` to not make backward incompatible API change
    if (
      this._originalConsoleMethods[level] &&
      (this.debug || this._globalOptions.debug)
    ) {
      // In IE<10 console methods do not have their own 'apply' method
      Function.prototype.apply.call(
        this._originalConsoleMethods[level],
        this._originalConsole,
        [].slice.call(arguments, 1)
      );
    }
  },

  _mergeContext: function(key, context) {
    if (isUndefined(context)) {
      delete this._globalContext[key];
    } else {
      this._globalContext[key] = objectMerge(this._globalContext[key] || {}, context);
    }
  }
};

// Deprecations
Raven.prototype.setUser = Raven.prototype.setUserContext;
Raven.prototype.setReleaseContext = Raven.prototype.setRelease;

module.exports = Raven;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(66);

/*
 TraceKit - Cross brower stack traces

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/

var TraceKit = {
  collectWindowErrors: true,
  debug: false
};

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

function getLocationHref() {
  if (typeof document === 'undefined' || document.location == null) return '';
  return document.location.href;
}

function getLocationOrigin() {
  if (typeof document === 'undefined' || document.location == null) return '';

  // Oh dear IE10...
  if (!document.location.origin) {
    return (
      document.location.protocol +
      '//' +
      document.location.hostname +
      (document.location.port ? ':' + document.location.port : '')
    );
  }

  return document.location.origin;
}

/**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */
TraceKit.report = (function reportModuleWrapper() {
  var handlers = [],
    lastArgs = null,
    lastException = null,
    lastExceptionStack = null;

  /**
   * Add a crash handler.
   * @param {Function} handler
   */
  function subscribe(handler) {
    installGlobalHandler();
    handlers.push(handler);
  }

  /**
   * Remove a crash handler.
   * @param {Function} handler
   */
  function unsubscribe(handler) {
    for (var i = handlers.length - 1; i >= 0; --i) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
      }
    }
  }

  /**
   * Remove all crash handlers.
   */
  function unsubscribeAll() {
    uninstallGlobalHandler();
    handlers = [];
  }

  /**
   * Dispatch stack information to all handlers.
   * @param {Object.<string, *>} stack
   */
  function notifyHandlers(stack, isWindowError) {
    var exception = null;
    if (isWindowError && !TraceKit.collectWindowErrors) {
      return;
    }
    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        try {
          handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
        } catch (inner) {
          exception = inner;
        }
      }
    }

    if (exception) {
      throw exception;
    }
  }

  var _oldOnerrorHandler, _onErrorHandlerInstalled;

  /**
   * Ensures all global unhandled exceptions are recorded.
   * Supported by Gecko and IE.
   * @param {string} msg Error message.
   * @param {string} url URL of script that generated the exception.
   * @param {(number|string)} lineNo The line number at which the error
   * occurred.
   * @param {?(number|string)} colNo The column number at which the error
   * occurred.
   * @param {?Error} ex The actual Error object.
   */
  function traceKitWindowOnError(msg, url, lineNo, colNo, ex) {
    var stack = null;
    // If 'ex' is ErrorEvent, get real Error from inside
    var exception = utils.isErrorEvent(ex) ? ex.error : ex;
    // If 'msg' is ErrorEvent, get real message from inside
    var message = utils.isErrorEvent(msg) ? msg.message : msg;

    if (lastExceptionStack) {
      TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(
        lastExceptionStack,
        url,
        lineNo,
        message
      );
      processLastException();
    } else if (exception && utils.isError(exception)) {
      // non-string `exception` arg; attempt to extract stack trace

      // New chrome and blink send along a real error object
      // Let's just report that like a normal error.
      // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
      stack = TraceKit.computeStackTrace(exception);
      notifyHandlers(stack, true);
    } else {
      var location = {
        url: url,
        line: lineNo,
        column: colNo
      };

      var name = undefined;
      var groups;

      if ({}.toString.call(message) === '[object String]') {
        var groups = message.match(ERROR_TYPES_RE);
        if (groups) {
          name = groups[1];
          message = groups[2];
        }
      }

      location.func = UNKNOWN_FUNCTION;

      stack = {
        name: name,
        message: message,
        url: getLocationHref(),
        stack: [location]
      };
      notifyHandlers(stack, true);
    }

    if (_oldOnerrorHandler) {
      return _oldOnerrorHandler.apply(this, arguments);
    }

    return false;
  }

  function installGlobalHandler() {
    if (_onErrorHandlerInstalled) {
      return;
    }
    _oldOnerrorHandler = _window.onerror;
    _window.onerror = traceKitWindowOnError;
    _onErrorHandlerInstalled = true;
  }

  function uninstallGlobalHandler() {
    if (!_onErrorHandlerInstalled) {
      return;
    }
    _window.onerror = _oldOnerrorHandler;
    _onErrorHandlerInstalled = false;
    _oldOnerrorHandler = undefined;
  }

  function processLastException() {
    var _lastExceptionStack = lastExceptionStack,
      _lastArgs = lastArgs;
    lastArgs = null;
    lastExceptionStack = null;
    lastException = null;
    notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
  }

  /**
   * Reports an unhandled Error to TraceKit.
   * @param {Error} ex
   * @param {?boolean} rethrow If false, do not re-throw the exception.
   * Only used for window.onerror to not cause an infinite loop of
   * rethrowing.
   */
  function report(ex, rethrow) {
    var args = _slice.call(arguments, 1);
    if (lastExceptionStack) {
      if (lastException === ex) {
        return; // already caught by an inner catch block, ignore
      } else {
        processLastException();
      }
    }

    var stack = TraceKit.computeStackTrace(ex);
    lastExceptionStack = stack;
    lastException = ex;
    lastArgs = args;

    // If the stack trace is incomplete, wait for 2 seconds for
    // slow slow IE to see if onerror occurs or not before reporting
    // this exception; otherwise, we will end up with an incomplete
    // stack trace
    setTimeout(function() {
      if (lastException === ex) {
        processLastException();
      }
    }, stack.incomplete ? 2000 : 0);

    if (rethrow !== false) {
      throw ex; // re-throw to propagate to the top level (and cause window.onerror)
    }
  }

  report.subscribe = subscribe;
  report.unsubscribe = unsubscribe;
  report.uninstall = unsubscribeAll;
  return report;
})();

/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */
TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
  // Contents of Exception in various browsers.
  //
  // SAFARI:
  // ex.message = Can't find variable: qq
  // ex.line = 59
  // ex.sourceId = 580238192
  // ex.sourceURL = http://...
  // ex.expressionBeginOffset = 96
  // ex.expressionCaretOffset = 98
  // ex.expressionEndOffset = 98
  // ex.name = ReferenceError
  //
  // FIREFOX:
  // ex.message = qq is not defined
  // ex.fileName = http://...
  // ex.lineNumber = 59
  // ex.columnNumber = 69
  // ex.stack = ...stack trace... (see the example below)
  // ex.name = ReferenceError
  //
  // CHROME:
  // ex.message = qq is not defined
  // ex.name = ReferenceError
  // ex.type = not_defined
  // ex.arguments = ['aa']
  // ex.stack = ...stack trace...
  //
  // INTERNET EXPLORER:
  // ex.message = ...
  // ex.name = ReferenceError
  //
  // OPERA:
  // ex.message = ...message... (see the example below)
  // ex.name = ReferenceError
  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

  /**
   * Computes stack trace information from the stack property.
   * Chrome and Gecko use this property.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */
  function computeStackTraceFromStackProp(ex) {
    if (typeof ex.stack === 'undefined' || !ex.stack) return;

    var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    // NOTE: blob urls are now supposed to always have an origin, therefore it's format
    // which is `blob:http://url/path/with-some-uuid`, is matched by `blob.*?:\/` as well
    var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    // Used to additionally parse URL/line/column from eval frames
    var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    var lines = ex.stack.split('\n');
    var stack = [];
    var submatch;
    var parts;
    var element;
    var reference = /^(.*) is undefined$/.exec(ex.message);

    for (var i = 0, j = lines.length; i < j; ++i) {
      if ((parts = chrome.exec(lines[i]))) {
        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
        var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = submatch[1]; // url
          parts[3] = submatch[2]; // line
          parts[4] = submatch[3]; // column
        }
        element = {
          url: !isNative ? parts[2] : null,
          func: parts[1] || UNKNOWN_FUNCTION,
          args: isNative ? [parts[2]] : [],
          line: parts[3] ? +parts[3] : null,
          column: parts[4] ? +parts[4] : null
        };
      } else if ((parts = winjs.exec(lines[i]))) {
        element = {
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: [],
          line: +parts[3],
          column: parts[4] ? +parts[4] : null
        };
      } else if ((parts = gecko.exec(lines[i]))) {
        var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
          // throw out eval line/column and use top-most line number
          parts[3] = submatch[1];
          parts[4] = submatch[2];
          parts[5] = null; // no column when eval
        } else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
          // FireFox uses this awesome columnNumber property for its top frame
          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
          // so adding 1
          // NOTE: this hack doesn't work if top-most frame is eval
          stack[0].column = ex.columnNumber + 1;
        }
        element = {
          url: parts[3],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: parts[2] ? parts[2].split(',') : [],
          line: parts[4] ? +parts[4] : null,
          column: parts[5] ? +parts[5] : null
        };
      } else {
        continue;
      }

      if (!element.func && element.line) {
        element.func = UNKNOWN_FUNCTION;
      }

      if (element.url && element.url.substr(0, 5) === 'blob:') {
        // Special case for handling JavaScript loaded into a blob.
        // We use a synchronous AJAX request here as a blob is already in
        // memory - it's not making a network request.  This will generate a warning
        // in the browser console, but there has already been an error so that's not
        // that much of an issue.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', element.url, false);
        xhr.send(null);

        // If we failed to download the source, skip this patch
        if (xhr.status === 200) {
          var source = xhr.responseText || '';

          // We trim the source down to the last 300 characters as sourceMappingURL is always at the end of the file.
          // Why 300? To be in line with: https://github.com/getsentry/sentry/blob/4af29e8f2350e20c28a6933354e4f42437b4ba42/src/sentry/lang/javascript/processor.py#L164-L175
          source = source.slice(-300);

          // Now we dig out the source map URL
          var sourceMaps = source.match(/\/\/# sourceMappingURL=(.*)$/);

          // If we don't find a source map comment or we find more than one, continue on to the next element.
          if (sourceMaps) {
            var sourceMapAddress = sourceMaps[1];

            // Now we check to see if it's a relative URL.
            // If it is, convert it to an absolute one.
            if (sourceMapAddress.charAt(0) === '~') {
              sourceMapAddress = getLocationOrigin() + sourceMapAddress.slice(1);
            }

            // Now we strip the '.map' off of the end of the URL and update the
            // element so that Sentry can match the map to the blob.
            element.url = sourceMapAddress.slice(0, -4);
          }
        }
      }

      stack.push(element);
    }

    if (!stack.length) {
      return null;
    }

    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
  }

  /**
   * Adds information about the first frame to incomplete stack traces.
   * Safari and IE require this to get complete data on the first frame.
   * @param {Object.<string, *>} stackInfo Stack trace information from
   * one of the compute* methods.
   * @param {string} url The URL of the script that caused an error.
   * @param {(number|string)} lineNo The line number of the script that
   * caused an error.
   * @param {string=} message The error generated by the browser, which
   * hopefully contains the name of the object that caused the error.
   * @return {boolean} Whether or not the stack information was
   * augmented.
   */
  function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
    var initial = {
      url: url,
      line: lineNo
    };

    if (initial.url && initial.line) {
      stackInfo.incomplete = false;

      if (!initial.func) {
        initial.func = UNKNOWN_FUNCTION;
      }

      if (stackInfo.stack.length > 0) {
        if (stackInfo.stack[0].url === initial.url) {
          if (stackInfo.stack[0].line === initial.line) {
            return false; // already in stack trace
          } else if (
            !stackInfo.stack[0].line &&
            stackInfo.stack[0].func === initial.func
          ) {
            stackInfo.stack[0].line = initial.line;
            return false;
          }
        }
      }

      stackInfo.stack.unshift(initial);
      stackInfo.partial = true;
      return true;
    } else {
      stackInfo.incomplete = true;
    }

    return false;
  }

  /**
   * Computes stack trace information by walking the arguments.caller
   * chain at the time the exception occurred. This will cause earlier
   * frames to be missed but is the only way to get any stack trace in
   * Safari and IE. The top frame is restored by
   * {@link augmentStackTraceWithInitialElement}.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */
  function computeStackTraceByWalkingCallerChain(ex, depth) {
    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
      stack = [],
      funcs = {},
      recursion = false,
      parts,
      item,
      source;

    for (
      var curr = computeStackTraceByWalkingCallerChain.caller;
      curr && !recursion;
      curr = curr.caller
    ) {
      if (curr === computeStackTrace || curr === TraceKit.report) {
        // console.log('skipping internal function');
        continue;
      }

      item = {
        url: null,
        func: UNKNOWN_FUNCTION,
        line: null,
        column: null
      };

      if (curr.name) {
        item.func = curr.name;
      } else if ((parts = functionName.exec(curr.toString()))) {
        item.func = parts[1];
      }

      if (typeof item.func === 'undefined') {
        try {
          item.func = parts.input.substring(0, parts.input.indexOf('{'));
        } catch (e) {}
      }

      if (funcs['' + curr]) {
        recursion = true;
      } else {
        funcs['' + curr] = true;
      }

      stack.push(item);
    }

    if (depth) {
      // console.log('depth is ' + depth);
      // console.log('stack is ' + stack.length);
      stack.splice(0, depth);
    }

    var result = {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
    augmentStackTraceWithInitialElement(
      result,
      ex.sourceURL || ex.fileName,
      ex.line || ex.lineNumber,
      ex.message || ex.description
    );
    return result;
  }

  /**
   * Computes a stack trace for an exception.
   * @param {Error} ex
   * @param {(string|number)=} depth
   */
  function computeStackTrace(ex, depth) {
    var stack = null;
    depth = depth == null ? 0 : +depth;

    try {
      stack = computeStackTraceFromStackProp(ex);
      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }

    try {
      stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }
    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref()
    };
  }

  computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
  computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;

  return computeStackTrace;
})();

module.exports = TraceKit;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 186 */
/***/ (function(module, exports) {

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
* Add integers, wrapping at 2^32. This uses 16-bit operations internally
* to work around bugs in some JS interpreters.
*/
function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}

/*
* Bitwise rotate a 32-bit number to the left.
*/
function bitRotateLeft(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
* These functions implement the four basic operations the algorithm uses.
*/
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
* Calculate the MD5 of an array of little-endian words, and a bit length.
*/
function binlMD5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << (len % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;

    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}

/*
* Convert an array of little-endian words to a string
*/
function binl2rstr(input) {
  var i;
  var output = '';
  var length32 = input.length * 32;
  for (i = 0; i < length32; i += 8) {
    output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff);
  }
  return output;
}

/*
* Convert a raw string to an array of little-endian words
* Characters >255 have their high-byte silently ignored.
*/
function rstr2binl(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;
  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }
  var length8 = input.length * 8;
  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);
  }
  return output;
}

/*
* Calculate the MD5 of a raw string
*/
function rstrMD5(s) {
  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
}

/*
* Calculate the HMAC-MD5, of a key and some data (raw strings)
*/
function rstrHMACMD5(key, data) {
  var i;
  var bkey = rstr2binl(key);
  var ipad = [];
  var opad = [];
  var hash;
  ipad[15] = opad[15] = undefined;
  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8);
  }
  for (i = 0; i < 16; i += 1) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5c5c5c5c;
  }
  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}

/*
* Convert a raw string to a hex string
*/
function rstr2hex(input) {
  var hexTab = '0123456789abcdef';
  var output = '';
  var x;
  var i;
  for (i = 0; i < input.length; i += 1) {
    x = input.charCodeAt(i);
    output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
  }
  return output;
}

/*
* Encode a string as utf-8
*/
function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}

/*
* Take string arguments and return either raw or hex encoded strings
*/
function rawMD5(s) {
  return rstrMD5(str2rstrUTF8(s));
}
function hexMD5(s) {
  return rstr2hex(rawMD5(s));
}
function rawHMACMD5(k, d) {
  return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
}
function hexHMACMD5(k, d) {
  return rstr2hex(rawHMACMD5(k, d));
}

function md5(string, key, raw) {
  if (!key) {
    if (!raw) {
      return hexMD5(string);
    }
    return rawMD5(string);
  }
  if (!raw) {
    return hexHMACMD5(key, string);
  }
  return rawHMACMD5(key, string);
}

module.exports = md5;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

function RavenConfigError(message) {
  this.name = 'RavenConfigError';
  this.message = message;
}
RavenConfigError.prototype = new Error();
RavenConfigError.prototype.constructor = RavenConfigError;

module.exports = RavenConfigError;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(66);

var wrapMethod = function(console, level, callback) {
  var originalConsoleLevel = console[level];
  var originalConsole = console;

  if (!(level in console)) {
    return;
  }

  var sentryLevel = level === 'warn' ? 'warning' : level;

  console[level] = function() {
    var args = [].slice.call(arguments);

    var msg = utils.safeJoin(args, ' ');
    var data = {level: sentryLevel, logger: 'console', extra: {arguments: args}};

    if (level === 'assert') {
      if (args[0] === false) {
        // Default browsers message
        msg =
          'Assertion failed: ' + (utils.safeJoin(args.slice(1), ' ') || 'console.assert');
        data.extra.arguments = args.slice(1);
        callback && callback(msg, data);
      }
    } else {
      callback && callback(msg, data);
    }

    // this fails for some browsers. :(
    if (originalConsoleLevel) {
      // IE9 doesn't allow calling apply on console functions directly
      // See: https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function#answer-5473193
      Function.prototype.apply.call(originalConsoleLevel, originalConsole, args);
    }
  };
};

module.exports = {
  wrapMethod: wrapMethod
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var identity = function identity(x) {
  return x;
};
var getUndefined = function getUndefined() {};
var filter = function filter() {
  return true;
};
function createRavenMiddleware(Raven) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // TODO: Validate options.
  var _options$breadcrumbDa = options.breadcrumbDataFromAction,
      breadcrumbDataFromAction = _options$breadcrumbDa === undefined ? getUndefined : _options$breadcrumbDa,
      _options$actionTransf = options.actionTransformer,
      actionTransformer = _options$actionTransf === undefined ? identity : _options$actionTransf,
      _options$stateTransfo = options.stateTransformer,
      stateTransformer = _options$stateTransfo === undefined ? identity : _options$stateTransfo,
      _options$breadcrumbCa = options.breadcrumbCategory,
      breadcrumbCategory = _options$breadcrumbCa === undefined ? "redux-action" : _options$breadcrumbCa,
      _options$filterBreadc = options.filterBreadcrumbActions,
      filterBreadcrumbActions = _options$filterBreadc === undefined ? filter : _options$filterBreadc,
      getUserContext = options.getUserContext,
      getTags = options.getTags;


  return function (store) {
    var lastAction = void 0;

    Raven.setDataCallback(function (data, original) {
      var state = store.getState();
      var reduxExtra = {
        lastAction: actionTransformer(lastAction),
        state: stateTransformer(state)
      };
      data.extra = Object.assign(reduxExtra, data.extra);
      if (getUserContext) {
        data.user = getUserContext(state);
      }
      if (getTags) {
        data.tags = getTags(state);
      }
      return original ? original(data) : data;
    });

    return function (next) {
      return function (action) {
        // Log the action taken to Raven so that we have narrative context in our
        // error report.
        if (filterBreadcrumbActions(action)) {
          Raven.captureBreadcrumb({
            category: breadcrumbCategory,
            message: action.type,
            data: breadcrumbDataFromAction(action)
          });
        }

        lastAction = action;
        return next(action);
      };
    };
  };
}

module.exports = createRavenMiddleware;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("isSupported",[],t):"object"==typeof exports?exports.isSupported=t():e.isSupported=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=105)}({105:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=document.createElement("canvas"),t=void 0;try{t=e.getContext("webgl2")}catch(e){t=null}var o=!!t,n=!(!window.AudioContext&&!window.webkitAudioContext);return o&&n};t.default=n,e.exports=n,e.exports=t.default}})});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skins/base-2.91-png.wsz";

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skins/MacOSXAqua1-5.wsz";

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skins/TopazAmp1-2.wsz";

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skins/Vizor1-01.wsz";

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skins/XMMS-Turquoise.wsz";

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skins/ZaxonRemake1-0.wsz";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skins/Green-Dimension-V2.wsz";

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _screenfull = __webpack_require__(224);

var _screenfull2 = _interopRequireDefault(_screenfull);

var _ContextMenuWrapper = __webpack_require__(49);

var _ContextMenuWrapper2 = _interopRequireDefault(_ContextMenuWrapper);

var _GenWindow = __webpack_require__(235);

var _GenWindow2 = _interopRequireDefault(_GenWindow);

var _actionCreators = __webpack_require__(2);

var _MilkdropContextMenu = __webpack_require__(250);

var _MilkdropContextMenu2 = _interopRequireDefault(_MilkdropContextMenu);

var _Desktop = __webpack_require__(251);

var _Desktop2 = _interopRequireDefault(_Desktop);

var _Presets = __webpack_require__(252);

var _Presets2 = _interopRequireDefault(_Presets);

var _Milkdrop = __webpack_require__(253);

var _Milkdrop2 = _interopRequireDefault(_Milkdrop);

var _Background = __webpack_require__(255);

var _Background2 = _interopRequireDefault(_Background);

__webpack_require__(256);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This component is just responsible for loading dependencies.
// This simplifies the inner <Milkdrop /> component, by allowing
// it to alwasy assume that it has its dependencies.
class PresetsLoader extends _react2.default.Component {
  constructor() {
    super();

    this._handleFullscreenChange = () => {
      this.setState({ isFullscreen: _screenfull2.default.isFullscreen });
    };

    this._toggleDesktop = () => {
      if (this.state.desktop) {
        this.props.showWindow(this.props.windowId);
        this.setState({ desktop: false });
      } else {
        this.props.hideWindow(this.props.windowId);
        this.setState({ desktop: true });
      }
    };

    this._handleRequestFullsceen = () => {
      if (_screenfull2.default.enabled) {
        if (!_screenfull2.default.isFullscreen) {
          _screenfull2.default.request(this._wrapperNode);
        } else {
          _screenfull2.default.exit();
        }
      }
    };

    this.state = {
      presets: null,
      initialPreset: null,
      butterchurn: null,
      isFullscreen: false,
      desktop: false
    };
  }

  isHidden() {
    return this.state.desktop;
  }

  async componentDidMount() {
    var _ref = await Promise.all([loadInitialDependencies(), loadInitialPreset()]),
        _ref2 = _slicedToArray(_ref, 2),
        _ref2$ = _ref2[0];

    const butterchurn = _ref2$.butterchurn,
          presetKeys = _ref2$.presetKeys,
          minimalPresets = _ref2$.minimalPresets,
          initialPreset = _ref2[1];


    this.setState({
      butterchurn,
      initialPreset,
      presets: new _Presets2.default({
        keys: presetKeys,
        initialPresets: minimalPresets,
        getRest: loadNonMinimalPresets
      })
    });
    _screenfull2.default.onchange(this._handleFullscreenChange);
  }

  componentWillUnmount() {
    _screenfull2.default.off("change", this._handleFullscreenChange);
  }

  _renderMilkdrop(size) {
    var _state = this.state;
    const butterchurn = _state.butterchurn,
          presets = _state.presets,
          initialPreset = _state.initialPreset;

    const loaded = butterchurn != null && presets != null;

    var _ref3 = this.state.isFullscreen ? { width: screen.width, height: screen.height } : size;

    const width = _ref3.width,
          height = _ref3.height;
    // Note: This _wrapperNode must not be removed from the DOM while
    // in/entering full screen mode. Ensure `this.setState({isFullscreen})`
    // does not cause this node to change identity.

    return _react2.default.createElement(
      _Background2.default,
      { innerRef: node => this._wrapperNode = node },
      loaded && _react2.default.createElement(_Milkdrop2.default, _extends({}, this.props, {
        width: width,
        height: height,
        isFullscreen: this.state.isFullscreen,
        presets: presets,
        initialPreset: initialPreset,
        butterchurn: butterchurn
      }))
    );
  }

  render() {
    if (this.state.desktop) {
      const size = { width: window.innerWidth, height: window.innerHeight };
      return _react2.default.createElement(
        _ContextMenuWrapper2.default,
        {
          onDoubleClick: this._handleRequestFullsceen,
          renderContents: () => _react2.default.createElement(_MilkdropContextMenu2.default, {
            close: this.props.close,
            toggleFullscreen: this._handleRequestFullsceen,
            desktopMode: this.state.desktop,
            toggleDesktop: this._toggleDesktop
          })
        },
        _react2.default.createElement(
          _Desktop2.default,
          null,
          this._renderMilkdrop(size)
        )
      );
    }

    return _react2.default.createElement(
      _GenWindow2.default,
      {
        ref: this.props.chromeRef,
        title: this.props.title,
        windowId: this.props.windowId
      },
      ({ height, width }) => _react2.default.createElement(
        _ContextMenuWrapper2.default,
        {
          onDoubleClick: this._handleRequestFullsceen,
          renderContents: () => _react2.default.createElement(_MilkdropContextMenu2.default, {
            close: this.props.close,
            toggleFullscreen: this._handleRequestFullsceen,
            desktopMode: this.state.desktop,
            toggleDesktop: this._toggleDesktop
          })
        },
        this._renderMilkdrop({ width, height })
      )
    );
  }
}

async function loadInitialPreset() {
  let presetUrl = null;
  if ("URLSearchParams" in window) {
    const params = new URLSearchParams(location.search);
    presetUrl = params.get("butterchurnPresetUrl");
  }

  if (presetUrl) {
    try {
      const response = await fetch(presetUrl);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const responseBody = await response.json();
      return responseBody;
    } catch (e) {
      console.error(e);
      alert(`Failed to load MilkDrop preset from ${presetUrl}`);
      return null;
    }
  }

  return null;
}

async function loadInitialDependencies() {
  return new Promise((resolve, reject) => {
    __webpack_require__.e/* require.ensure */(0).then((require => {
      const butterchurn = __webpack_require__(142);
      const butterchurnMinimalPresets = __webpack_require__(143);
      const presetPackMeta = __webpack_require__(144);
      resolve({
        butterchurn,
        minimalPresets: butterchurnMinimalPresets.getPresets(),
        presetKeys: presetPackMeta.getMainPresetMeta().presets
      });
    }).bind(null, __webpack_require__)).catch(reject);
  });
}

async function loadNonMinimalPresets() {
  return new Promise((resolve, reject) => {
    __webpack_require__.e/* require.ensure */(4).then((require => {
      resolve(__webpack_require__(145).getPresets());
    }).bind(null, __webpack_require__)).catch(reject);
  });
}

const mapStateToProps = () => ({});
const mapDispatchProps = { hideWindow: _actionCreators.hideWindow, showWindow: _actionCreators.showWindow };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchProps)(PresetsLoader);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(67),n=__webpack_require__(99),p=__webpack_require__(100),q=__webpack_require__(101),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(68);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(202);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(222);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps

  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(104);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(210);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(24), __webpack_require__(209)(module)))

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(219);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(216);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(214);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(24)))

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(106);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(218);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(104);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(105);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(223);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(68);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 224 */
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.2 - 2017-10-27
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.2
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(99),ba=__webpack_require__(0),m=__webpack_require__(226),p=__webpack_require__(67),v=__webpack_require__(101),da=__webpack_require__(227),ea=__webpack_require__(228),fa=__webpack_require__(229),ha=__webpack_require__(100);
function A(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}ba?void 0:A("227");
function ia(a,b,c,d,e,f,g,h,k){this._hasCaughtError=!1;this._caughtError=null;var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n)}catch(r){this._caughtError=r,this._hasCaughtError=!0}}
var B={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){ia.apply(B,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){B.invokeGuardedCallback.apply(this,arguments);if(B.hasCaughtError()){var n=B.clearCaughtError();B._hasRethrowError||(B._hasRethrowError=!0,B._rethrowError=n)}},rethrowCaughtError:function(){return ka.apply(B,arguments)},hasCaughtError:function(){return B._hasCaughtError},clearCaughtError:function(){if(B._hasCaughtError){var a=
B._caughtError;B._caughtError=null;B._hasCaughtError=!1;return a}A("198")}};function ka(){if(B._hasRethrowError){var a=B._rethrowError;B._rethrowError=null;B._hasRethrowError=!1;throw a;}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:A("96",a);if(!oa[c]){b.extractEvents?void 0:A("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?A("99",h):void 0;pa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&qa(k[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:A("98",d,a)}}}}
function qa(a,b,c){ra[a]?A("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={};function ta(a){la?A("101"):void 0;la=Array.prototype.slice.call(a);na()}function ua(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?A("102",c):void 0,ma[c]=d,b=!0)}b&&na()}
var va={plugins:oa,eventNameDispatchConfigs:pa,registrationNameModules:ra,registrationNameDependencies:sa,possibleRegistrationNames:null,injectEventPluginOrder:ta,injectEventPluginsByName:ua},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);B.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
function Aa(a,b){null==b?A("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;
function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}var Ga={injectEventPluginOrder:ta,injectEventPluginsByName:ua};
function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?A("231",b,typeof c):void 0;
return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?A("95"):void 0,B.rethrowCaughtError())}function Ja(a,b,c,d){for(var e=null,f=0;f<oa.length;f++){var g=oa[f];g&&(g=g.extractEvents(a,b,c,d))&&(e=Aa(e,g))}Ia(e,!1)}var Ka={injection:Ga,getListener:Ha,runEventsInBatch:Ia,runExtractedEventsInBatch:Ja},La=Math.random().toString(36).slice(2),C="__reactInternalInstance$"+La,Ma="__reactEventHandlers$"+La;
function Na(a){if(a[C])return a[C];for(;!a[C];)if(a.parentNode)a=a.parentNode;else return null;a=a[C];return 5===a.tag||6===a.tag?a:null}function Oa(a){if(5===a.tag||6===a.tag)return a.stateNode;A("33")}function Pa(a){return a[Ma]||null}var Qa={precacheFiberNode:function(a,b){b[C]=a},getClosestInstanceFromNode:Na,getInstanceFromNode:function(a){a=a[C];return!a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:Oa,getFiberCurrentPropsFromNode:Pa,updateFiberProps:function(a,b){a[Ma]=b}};
function F(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ra(a,b,c){for(var d=[];a;)d.push(a),a=F(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}function Ta(a){a&&a.dispatchConfig.phasedRegistrationNames&&Ra(a._targetInst,Sa,a)}
function Ua(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?F(b):null;Ra(b,Sa,a)}}function Va(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Xa(a){a&&a.dispatchConfig.registrationName&&Va(a._targetInst,null,a)}function Ya(a){Ba(a,Ta)}
function Za(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,g=0,h=e;h;h=F(h))g++;h=0;for(var k=f;k;k=F(k))h++;for(;0<g-h;)e=F(e),g--;for(;0<h-g;)f=F(f),h--;for(;g--;){if(e===f||e===f.alternate)break a;e=F(e);f=F(f)}e=null}else e=null;f=e;for(e=[];c&&c!==f;){g=c.alternate;if(null!==g&&g===f)break;e.push(c);c=F(c)}for(c=[];d&&d!==f;){g=d.alternate;if(null!==g&&g===f)break;c.push(d);d=F(d)}for(d=0;d<e.length;d++)Va(e[d],"bubbled",a);for(a=c.length;0<a--;)Va(c[a],"captured",b)}
var $a={accumulateTwoPhaseDispatches:Ya,accumulateTwoPhaseDispatchesSkipTarget:function(a){Ba(a,Ua)},accumulateEnterLeaveDispatches:Za,accumulateDirectDispatches:function(a){Ba(a,Xa)}};function ab(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
var bb={animationend:ab("Animation","AnimationEnd"),animationiteration:ab("Animation","AnimationIteration"),animationstart:ab("Animation","AnimationStart"),transitionend:ab("Transition","TransitionEnd")},cb={},db={};m.canUseDOM&&(db=document.createElement("div").style,"AnimationEvent"in window||(delete bb.animationend.animation,delete bb.animationiteration.animation,delete bb.animationstart.animation),"TransitionEvent"in window||delete bb.transitionend.transition);
function eb(a){if(cb[a])return cb[a];if(!bb[a])return a;var b=bb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in db)return cb[a]=b[c];return a}var fb=eb("animationend"),gb=eb("animationiteration"),hb=eb("animationstart"),ib=eb("transitionend"),jb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kb=null;
function lb(){!kb&&m.canUseDOM&&(kb="textContent"in document.documentElement?"textContent":"innerText");return kb}var G={_root:null,_startText:null,_fallbackText:null};function mb(){if(G._fallbackText)return G._fallbackText;var a,b=G._startText,c=b.length,d,e=nb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);G._fallbackText=e.slice(a,1<d?1-d:void 0);return G._fallbackText}function nb(){return"value"in G._root?G._root.value:G._root[lb()]}
var ob="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),pb={type:null,target:null,currentTarget:v.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
function H(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?v.thatReturnsTrue:v.thatReturnsFalse;this.isPropagationStopped=v.thatReturnsFalse;return this}
p(H.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=v.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=v.thatReturnsTrue)},persist:function(){this.isPersistent=v.thatReturnsTrue},isPersistent:v.thatReturnsFalse,
destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<ob.length;a++)this[ob[a]]=null}});H.Interface=pb;H.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;p(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=p({},d.Interface,a);c.extend=d.extend;qb(c);return c};qb(H);
function rb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function sb(a){a instanceof this?void 0:A("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function qb(a){a.eventPool=[];a.getPooled=rb;a.release=sb}var tb=H.extend({data:null}),ub=H.extend({data:null}),vb=[9,13,27,32],wb=m.canUseDOM&&"CompositionEvent"in window,xb=null;m.canUseDOM&&"documentMode"in document&&(xb=document.documentMode);
var yb=m.canUseDOM&&"TextEvent"in window&&!xb,zb=m.canUseDOM&&(!wb||xb&&8<xb&&11>=xb),Ab=String.fromCharCode(32),Bb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Cb=!1;
function Db(a,b){switch(a){case "keyup":return-1!==vb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Eb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Fb=!1;function Gb(a,b){switch(a){case "compositionend":return Eb(b);case "keypress":if(32!==b.which)return null;Cb=!0;return Ab;case "textInput":return a=b.data,a===Ab&&Cb?null:a;default:return null}}
function Hb(a,b){if(Fb)return"compositionend"===a||!wb&&Db(a,b)?(a=mb(),G._root=null,G._startText=null,G._fallbackText=null,Fb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return zb?null:b.data;default:return null}}
var Ib={eventTypes:Bb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(wb)b:{switch(a){case "compositionstart":e=Bb.compositionStart;break b;case "compositionend":e=Bb.compositionEnd;break b;case "compositionupdate":e=Bb.compositionUpdate;break b}e=void 0}else Fb?Db(a,c)&&(e=Bb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Bb.compositionStart);e?(zb&&(Fb||e!==Bb.compositionStart?e===Bb.compositionEnd&&Fb&&(f=mb()):(G._root=d,G._startText=nb(),Fb=!0)),e=tb.getPooled(e,b,c,d),f?e.data=
f:(f=Eb(c),null!==f&&(e.data=f)),Ya(e),f=e):f=null;(a=yb?Gb(a,c):Hb(a,c))?(b=ub.getPooled(Bb.beforeInput,b,c,d),b.data=a,Ya(b)):b=null;return null===f?b:null===b?f:[f,b]}},Jb=null,Kb={injectFiberControlledHostComponent:function(a){Jb=a}},Lb=null,Mb=null;function Nb(a){if(a=xa(a)){Jb&&"function"===typeof Jb.restoreControlledState?void 0:A("194");var b=wa(a.stateNode);Jb.restoreControlledState(a.stateNode,a.type,b)}}function Ob(a){Lb?Mb?Mb.push(a):Mb=[a]:Lb=a}
function Pb(){return null!==Lb||null!==Mb}function Qb(){if(Lb){var a=Lb,b=Mb;Mb=Lb=null;Nb(a);if(b)for(a=0;a<b.length;a++)Nb(b[a])}}var Rb={injection:Kb,enqueueStateRestore:Ob,needsStateRestore:Pb,restoreStateIfNeeded:Qb};function Sb(a,b){return a(b)}function Tb(a,b,c){return a(b,c)}function Ub(){}var Vb=!1;function Wb(a,b){if(Vb)return a(b);Vb=!0;try{return Sb(a,b)}finally{Vb=!1,Pb()&&(Ub(),Qb())}}
var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Xb[a.type]:"textarea"===b?!0:!1}function Zb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}
function $b(a,b){if(!m.canUseDOM||b&&!("addEventListener"in document))return!1;a="on"+a;b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function ac(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function bc(a){var b=ac(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function cc(a){a._valueTracker||(a._valueTracker=bc(a))}function dc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ac(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var ec=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fc="function"===typeof Symbol&&Symbol.for,gc=fc?Symbol.for("react.element"):60103,hc=fc?Symbol.for("react.portal"):60106,ic=fc?Symbol.for("react.fragment"):60107,jc=fc?Symbol.for("react.strict_mode"):60108,kc=fc?Symbol.for("react.profiler"):60114,lc=fc?Symbol.for("react.provider"):60109,mc=fc?Symbol.for("react.context"):60110,pc=fc?Symbol.for("react.async_mode"):60111,qc=fc?Symbol.for("react.forward_ref"):60112,rc=fc?Symbol.for("react.timeout"):
60113,sc="function"===typeof Symbol&&Symbol.iterator;function tc(a){if(null===a||"undefined"===typeof a)return null;a=sc&&a[sc]||a["@@iterator"];return"function"===typeof a?a:null}
function uc(a){var b=a.type;if("function"===typeof b)return b.displayName||b.name;if("string"===typeof b)return b;switch(b){case pc:return"AsyncMode";case mc:return"Context.Consumer";case ic:return"ReactFragment";case hc:return"ReactPortal";case kc:return"Profiler("+a.pendingProps.id+")";case lc:return"Context.Provider";case jc:return"StrictMode";case rc:return"Timeout"}if("object"===typeof b&&null!==b)switch(b.$$typeof){case qc:return a=b.render.displayName||b.render.name||"",""!==a?"ForwardRef("+
a+")":"ForwardRef"}return null}function vc(a){var b="";do{a:switch(a.tag){case 0:case 1:case 2:case 5:var c=a._debugOwner,d=a._debugSource;var e=uc(a);var f=null;c&&(f=uc(c));c=d;e="\n    in "+(e||"Unknown")+(c?" (at "+c.fileName.replace(/^.*[\\\/]/,"")+":"+c.lineNumber+")":f?" (created by "+f+")":"");break a;default:e=""}b+=e;a=a.return}while(a);return b}
var wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc=Object.prototype.hasOwnProperty,zc={},Ac={};
function Bc(a){if(xc.call(Ac,a))return!0;if(xc.call(zc,a))return!1;if(wc.test(a))return Ac[a]=!0;zc[a]=!0;return!1}function Cc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Dc(a,b,c,d){if(null===b||"undefined"===typeof b||Cc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function I(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var J={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){J[a]=new I(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];J[b]=new I(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){J[a]=new I(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(a){J[a]=new I(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){J[a]=new I(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){J[a]=new I(a,3,!0,a.toLowerCase(),null)});
["capture","download"].forEach(function(a){J[a]=new I(a,4,!1,a.toLowerCase(),null)});["cols","rows","size","span"].forEach(function(a){J[a]=new I(a,6,!1,a.toLowerCase(),null)});["rowSpan","start"].forEach(function(a){J[a]=new I(a,5,!1,a.toLowerCase(),null)});var Ec=/[\-:]([a-z])/g;function Fc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ec,
Fc);J[b]=new I(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ec,Fc);J[b]=new I(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ec,Fc);J[b]=new I(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});J.tabIndex=new I("tabIndex",1,!1,"tabindex",null);
function Gc(a,b,c,d){var e=J.hasOwnProperty(b)?J[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Dc(b,c,e,d)&&(c=null),d||null===e?Bc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Hc(a,b){var c=b.checked;return p({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Ic(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Jc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Kc(a,b){b=b.checked;null!=b&&Gc(a,"checked",b,!1)}
function Lc(a,b){Kc(a,b);var c=Jc(b.value);if(null!=c)if("number"===b.type){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);b.hasOwnProperty("value")?Mc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Mc(a,b.type,Jc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Nc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){b=""+a._wrapperState.initialValue;var d=a.value;c||b===d||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==c&&(a.name=c)}function Mc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}
function Jc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}var Oc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Pc(a,b,c){a=H.getPooled(Oc.change,a,b,c);a.type="change";Ob(c);Ya(a);return a}var Qc=null,Rc=null;function Sc(a){Ia(a,!1)}function Tc(a){var b=Oa(a);if(dc(b))return a}
function Uc(a,b){if("change"===a)return b}var Vc=!1;m.canUseDOM&&(Vc=$b("input")&&(!document.documentMode||9<document.documentMode));function Wc(){Qc&&(Qc.detachEvent("onpropertychange",Xc),Rc=Qc=null)}function Xc(a){"value"===a.propertyName&&Tc(Rc)&&(a=Pc(Rc,a,Zb(a)),Wb(Sc,a))}function Yc(a,b,c){"focus"===a?(Wc(),Qc=b,Rc=c,Qc.attachEvent("onpropertychange",Xc)):"blur"===a&&Wc()}function Zc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Tc(Rc)}
function $c(a,b){if("click"===a)return Tc(b)}function ad(a,b){if("input"===a||"change"===a)return Tc(b)}
var bd={eventTypes:Oc,_isInputEventSupported:Vc,extractEvents:function(a,b,c,d){var e=b?Oa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Uc:Yb(e)?Vc?f=ad:(f=Zc,g=Yc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=$c);if(f&&(f=f(a,b)))return Pc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Mc(e,"number",e.value)}},cd=H.extend({view:null,detail:null}),dd={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ed(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=dd[a])?!!b[a]:!1}function fd(){return ed}
var gd=cd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:fd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}}),hd=gd.extend({pointerId:null,width:null,height:null,pressure:null,tiltX:null,tiltY:null,pointerType:null,isPrimary:null}),id={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},
mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},jd={eventTypes:id,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||
e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,n=void 0;if("mouseout"===a||"mouseover"===a)g=gd,h=id.mouseLeave,k=id.mouseEnter,n="mouse";else if("pointerout"===a||"pointerover"===a)g=hd,h=id.pointerLeave,k=id.pointerEnter,n="pointer";a=null==f?e:Oa(f);e=null==b?e:Oa(b);h=g.getPooled(h,f,c,d);h.type=n+"leave";h.target=a;h.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=n+"enter";c.target=e;c.relatedTarget=a;Za(h,
c,f,b);return[h,c]}};function kd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){2!==kd(a)?A("188"):void 0}
function md(a){var b=a.alternate;if(!b)return b=kd(a),3===b?A("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ld(e),a;if(g===d)return ld(e),b;g=g.sibling}A("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:A("189")}}c.alternate!==d?A("190"):void 0}3!==c.tag?A("188"):void 0;return c.stateNode.current===c?a:b}function nd(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function od(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}var pd=H.extend({animationName:null,elapsedTime:null,pseudoElement:null}),qd=H.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),rd=cd.extend({relatedTarget:null});
function sd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd=cd.extend({key:function(a){if(a.key){var b=td[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=sd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?ud[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:fd,charCode:function(a){return"keypress"===
a.type?sd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?sd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),wd=gd.extend({dataTransfer:null}),xd=cd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:fd}),yd=H.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),zd=gd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Ad=[["abort","abort"],[fb,"animationEnd"],[gb,"animationIteration"],[hb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ib,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Bd={},Cd={};function Dd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Bd[a]=b;Cd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],
["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Dd(a,!0)});Ad.forEach(function(a){Dd(a,!1)});
var Ed={eventTypes:Bd,isInteractiveTopLevelEventType:function(a){a=Cd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Cd[a];if(!e)return null;switch(a){case "keypress":if(0===sd(c))return null;case "keydown":case "keyup":a=vd;break;case "blur":case "focus":a=rd;break;case "click":if(2===c.button)return null;case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=gd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
wd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=xd;break;case fb:case gb:case hb:a=pd;break;case ib:a=yd;break;case "scroll":a=cd;break;case "wheel":a=zd;break;case "copy":case "cut":case "paste":a=qd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=hd;break;default:a=H}b=a.getPooled(e,b,c,d);Ya(b);return b}},Fd=Ed.isInteractiveTopLevelEventType,
Gd=[];function Hd(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c.return;)c=c.return;c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=Na(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],Ja(a.topLevelType,b,a.nativeEvent,Zb(a.nativeEvent))}var Id=!0;function Kd(a){Id=!!a}function K(a,b){if(!b)return null;var c=(Fd(a)?Ld:Md).bind(null,a);b.addEventListener(a,c,!1)}
function Nd(a,b){if(!b)return null;var c=(Fd(a)?Ld:Md).bind(null,a);b.addEventListener(a,c,!0)}function Ld(a,b){Tb(Md,a,b)}function Md(a,b){if(Id){var c=Zb(b);c=Na(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(Gd.length){var d=Gd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Wb(Hd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Gd.length&&Gd.push(a)}}}
var Od={get _enabled(){return Id},setEnabled:Kd,isEnabled:function(){return Id},trapBubbledEvent:K,trapCapturedEvent:Nd,dispatchEvent:Md},Pd={},Qd=0,Rd="_reactListenersID"+(""+Math.random()).slice(2);function Sd(a){Object.prototype.hasOwnProperty.call(a,Rd)||(a[Rd]=Qd++,Pd[a[Rd]]={});return Pd[a[Rd]]}function Td(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ud(a,b){var c=Td(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Td(c)}}function Vd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Wd=m.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Xd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Yd=null,Zd=null,$d=null,ae=!1;
function be(a,b){if(ae||null==Yd||Yd!==da())return null;var c=Yd;"selectionStart"in c&&Vd(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return $d&&ea($d,c)?null:($d=c,a=H.getPooled(Xd.select,Zd,a,b),a.type="select",a.target=Yd,Ya(a),a)}
var ce={eventTypes:Xd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Sd(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Oa(b):window;switch(a){case "focus":if(Yb(e)||"true"===e.contentEditable)Yd=e,Zd=b,$d=null;break;case "blur":$d=Zd=Yd=null;break;case "mousedown":ae=!0;break;case "contextmenu":case "mouseup":return ae=!1,be(c,d);case "selectionchange":if(Wd)break;
case "keydown":case "keyup":return be(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa.getFiberCurrentPropsFromNode;xa=Qa.getInstanceFromNode;ya=Qa.getNodeFromInstance;Ga.injectEventPluginsByName({SimpleEventPlugin:Ed,EnterLeaveEventPlugin:jd,ChangeEventPlugin:bd,SelectEventPlugin:ce,BeforeInputEventPlugin:Ib});
var de="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,ee=Date,fe=setTimeout,ge=clearTimeout,he=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var ie=performance;he=function(){return ie.now()}}else he=function(){return ee.now()};var je=void 0,ke=void 0;
if(m.canUseDOM){var le="function"===typeof de?de:function(){A("276")},L=null,me=null,ne=-1,oe=!1,pe=!1,qe=0,re=33,se=33,te={didTimeout:!1,timeRemaining:function(){var a=qe-he();return 0<a?a:0}},ve=function(a,b){var c=a.scheduledCallback,d=!1;try{c(b),d=!0}finally{ke(a),d||(oe=!0,window.postMessage(ue,"*"))}},ue="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===ue&&(oe=!1,null!==L)){if(null!==L){var b=he();if(!(-1===
ne||ne>b)){a=-1;for(var c=[],d=L;null!==d;){var e=d.timeoutTime;-1!==e&&e<=b?c.push(d):-1!==e&&(-1===a||e<a)&&(a=e);d=d.next}if(0<c.length)for(te.didTimeout=!0,b=0,d=c.length;b<d;b++)ve(c[b],te);ne=a}}for(a=he();0<qe-a&&null!==L;)a=L,te.didTimeout=!1,ve(a,te),a=he();null===L||pe||(pe=!0,le(we))}},!1);var we=function(a){pe=!1;var b=a-qe+se;b<se&&re<se?(8>b&&(b=8),se=b<re?re:b):re=b;qe=a+se;oe||(oe=!0,window.postMessage(ue,"*"))};je=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=he()+
b.timeout);if(-1===ne||-1!==c&&c<ne)ne=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===L?L=a:(b=a.prev=me,null!==b&&(b.next=a));me=a;pe||(pe=!0,le(we));return a};ke=function(a){if(null!==a.prev||L===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,L=b):null!==c?(c.next=null,me=c):me=L=null}}}else{var xe=new Map;je=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=fe(function(){a({timeRemaining:function(){return Infinity},
didTimeout:!1})});xe.set(a,c);return b};ke=function(a){var b=xe.get(a.scheduledCallback);xe.delete(a);ge(b)}}function ye(a){var b="";ba.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function ze(a,b){a=p({children:void 0},b);if(b=ye(b.children))a.children=b;return a}
function Ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Be(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}}function Ce(a,b){null!=b.dangerouslySetInnerHTML?A("91"):void 0;return p({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function De(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?A("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:A("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c}}
function Ee(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)}function Fe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Ge={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function He(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?He(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Je=void 0,Ke=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ge.svg||"innerHTML"in a)a.innerHTML=b;else{Je=Je||document.createElement("div");Je.innerHTML="<svg>"+b+"</svg>";for(b=Je.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Le(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Me={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(a){Ne.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Me[b]=Me[a]})});
function Oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Me.hasOwnProperty(e)&&Me[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Pe=p({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Qe(a,b,c){b&&(Pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?A("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?A("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:A("61")),null!=b.style&&"object"!==typeof b.style?A("62",c()):void 0)}
function Re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var Se=v.thatReturns("");
function Te(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Sd(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Nd("scroll",a);break;case "focus":case "blur":Nd("focus",a);Nd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":$b(e,!0)&&Nd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===jb.indexOf(e)&&K(e,a)}c[e]=!0}}}
function Ue(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===Ge.html&&(d=He(a));d===Ge.html?"script"===a?(a=c.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function Ve(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
function We(a,b,c,d){var e=Re(b,c);switch(b){case "iframe":case "object":K("load",a);var f=c;break;case "video":case "audio":for(f=0;f<jb.length;f++)K(jb[f],a);f=c;break;case "source":K("error",a);f=c;break;case "img":case "image":case "link":K("error",a);K("load",a);f=c;break;case "form":K("reset",a);K("submit",a);f=c;break;case "details":K("toggle",a);f=c;break;case "input":Ic(a,c);f=Hc(a,c);K("invalid",a);Te(d,"onChange");break;case "option":f=ze(a,c);break;case "select":Be(a,c);f=p({},c,{value:void 0});
K("invalid",a);Te(d,"onChange");break;case "textarea":De(a,c);f=Ce(a,c);K("invalid",a);Te(d,"onChange");break;default:f=c}Qe(b,f,Se);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?Oe(a,k,Se):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&Ke(a,k)):"children"===h?"string"===typeof k?("textarea"!==b||""!==k)&&Le(a,k):"number"===typeof k&&Le(a,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ra.hasOwnProperty(h)?null!=k&&Te(d,
h):null!=k&&Gc(a,h,k,e))}switch(b){case "input":cc(a);Nc(a,c,!1);break;case "textarea":cc(a);Fe(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?Ae(a,!!c.multiple,b,!1):null!=c.defaultValue&&Ae(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=v)}}
function Xe(a,b,c,d,e){var f=null;switch(b){case "input":c=Hc(a,c);d=Hc(a,d);f=[];break;case "option":c=ze(a,c);d=ze(a,d);f=[];break;case "select":c=p({},c,{value:void 0});d=p({},d,{value:void 0});f=[];break;case "textarea":c=Ce(a,c);d=Ce(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=v)}Qe(b,d,Se);b=a=void 0;var g=null;for(a in c)if(!d.hasOwnProperty(a)&&c.hasOwnProperty(a)&&null!=c[a])if("style"===a){var h=c[a];for(b in h)h.hasOwnProperty(b)&&(g||
(g={}),g[b]="")}else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(ra.hasOwnProperty(a)?f||(f=[]):(f=f||[]).push(a,null));for(a in d){var k=d[a];h=null!=c?c[a]:void 0;if(d.hasOwnProperty(a)&&k!==h&&(null!=k||null!=h))if("style"===a)if(h){for(b in h)!h.hasOwnProperty(b)||k&&k.hasOwnProperty(b)||(g||(g={}),g[b]="");for(b in k)k.hasOwnProperty(b)&&h[b]!==k[b]&&(g||(g={}),g[b]=k[b])}else g||(f||(f=[]),f.push(a,g)),
g=k;else"dangerouslySetInnerHTML"===a?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(a,""+k)):"children"===a?h===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(a,""+k):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(ra.hasOwnProperty(a)?(null!=k&&Te(e,a),f||h===k||(f=[])):(f=f||[]).push(a,k))}g&&(f=f||[]).push("style",g);return f}
function Ye(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Kc(a,e);Re(c,d);d=Re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?Oe(a,h,Se):"dangerouslySetInnerHTML"===g?Ke(a,h):"children"===g?Le(a,h):Gc(a,g,h,d)}switch(c){case "input":Lc(a,e);break;case "textarea":Ee(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?Ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?
Ae(a,!!e.multiple,e.defaultValue,!0):Ae(a,!!e.multiple,e.multiple?[]:"",!1))}}
function Ze(a,b,c,d,e){switch(b){case "iframe":case "object":K("load",a);break;case "video":case "audio":for(d=0;d<jb.length;d++)K(jb[d],a);break;case "source":K("error",a);break;case "img":case "image":case "link":K("error",a);K("load",a);break;case "form":K("reset",a);K("submit",a);break;case "details":K("toggle",a);break;case "input":Ic(a,c);K("invalid",a);Te(e,"onChange");break;case "select":Be(a,c);K("invalid",a);Te(e,"onChange");break;case "textarea":De(a,c),K("invalid",a),Te(e,"onChange")}Qe(b,
c,Se);d=null;for(var f in c)if(c.hasOwnProperty(f)){var g=c[f];"children"===f?"string"===typeof g?a.textContent!==g&&(d=["children",g]):"number"===typeof g&&a.textContent!==""+g&&(d=["children",""+g]):ra.hasOwnProperty(f)&&null!=g&&Te(e,f)}switch(b){case "input":cc(a);Nc(a,c,!0);break;case "textarea":cc(a);Fe(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&(a.onclick=v)}return d}function $e(a,b){return a.nodeValue!==b}
var af={createElement:Ue,createTextNode:Ve,setInitialProperties:We,diffProperties:Xe,updateProperties:Ye,diffHydratedProperties:Ze,diffHydratedText:$e,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Lc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;
c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Pa(d);e?void 0:A("90");dc(d);Lc(d,e)}}}break;case "textarea":Ee(a,c);break;case "select":b=c.value,null!=b&&Ae(a,!!c.multiple,b,!1)}}},bf=null,cf=null;function df(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function ef(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html}var ff=he,gf=je,hf=ke;function jf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function kf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var lf=[],mf=-1;function nf(a){return{current:a}}
function M(a){0>mf||(a.current=lf[mf],lf[mf]=null,mf--)}function N(a,b){mf++;lf[mf]=a.current;a.current=b}var of=nf(ha),O=nf(!1),pf=ha;function qf(a){return rf(a)?pf:of.current}
function sf(a,b){var c=a.type.contextTypes;if(!c)return ha;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function rf(a){return 2===a.tag&&null!=a.type.childContextTypes}function tf(a){rf(a)&&(M(O,a),M(of,a))}function uf(a){M(O,a);M(of,a)}
function vf(a,b,c){of.current!==ha?A("168"):void 0;N(of,b,a);N(O,c,a)}function wf(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:A("108",uc(a)||"Unknown",e);return p({},b,c)}function xf(a){if(!rf(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||ha;pf=of.current;N(of,b,a);N(O,O.current,a);return!0}
function yf(a,b){var c=a.stateNode;c?void 0:A("169");if(b){var d=wf(a,pf);c.__reactInternalMemoizedMergedChildContext=d;M(O,a);M(of,a);N(of,d,a)}else M(O,a);N(O,b,a)}
function zf(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
function Af(a,b,c){var d=a.alternate;null===d?(d=new zf(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
function Bf(a,b,c){var d=a.type,e=a.key;a=a.props;if("function"===typeof d)var f=d.prototype&&d.prototype.isReactComponent?2:0;else if("string"===typeof d)f=5;else switch(d){case ic:return Cf(a.children,b,c,e);case pc:f=11;b|=3;break;case jc:f=11;b|=2;break;case kc:return d=new zf(15,a,e,b|4),d.type=kc,d.expirationTime=c,d;case rc:f=16;b|=2;break;default:a:{switch("object"===typeof d&&null!==d?d.$$typeof:null){case lc:f=13;break a;case mc:f=12;break a;case qc:f=14;break a;default:A("130",null==d?
d:typeof d,"")}f=void 0}}b=new zf(f,a,e,b);b.type=d;b.expirationTime=c;return b}function Cf(a,b,c,d){a=new zf(10,a,d,b);a.expirationTime=c;return a}function Df(a,b,c){a=new zf(6,a,null,b);a.expirationTime=c;return a}function Ef(a,b,c){b=new zf(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ff(a,b,c){b=new zf(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:c,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null};return b.stateNode=a}var Gf=null,Hf=null;function If(a){return function(b){try{return a(b)}catch(c){}}}
function Jf(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Gf=If(function(a){return b.onCommitFiberRoot(c,a)});Hf=If(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function Kf(a){"function"===typeof Gf&&Gf(a)}function Lf(a){"function"===typeof Hf&&Hf(a)}var Mf=!1;
function Nf(a){return{expirationTime:0,baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Of(a){return{expirationTime:a.expirationTime,baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Pf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Qf(a,b,c){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);if(0===a.expirationTime||a.expirationTime>c)a.expirationTime=c}
function Rf(a,b,c){var d=a.alternate;if(null===d){var e=a.updateQueue;var f=null;null===e&&(e=a.updateQueue=Nf(a.memoizedState))}else e=a.updateQueue,f=d.updateQueue,null===e?null===f?(e=a.updateQueue=Nf(a.memoizedState),f=d.updateQueue=Nf(d.memoizedState)):e=a.updateQueue=Of(f):null===f&&(f=d.updateQueue=Of(e));null===f||e===f?Qf(e,b,c):null===e.lastUpdate||null===f.lastUpdate?(Qf(e,b,c),Qf(f,b,c)):(Qf(e,b,c),f.lastUpdate=b)}
function Sf(a,b,c){var d=a.updateQueue;d=null===d?a.updateQueue=Nf(a.memoizedState):Tf(a,d);null===d.lastCapturedUpdate?d.firstCapturedUpdate=d.lastCapturedUpdate=b:(d.lastCapturedUpdate.next=b,d.lastCapturedUpdate=b);if(0===d.expirationTime||d.expirationTime>c)d.expirationTime=c}function Tf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Of(b));return b}
function Uf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return p({},d,e);case 2:Mf=!0}return d}
function Vf(a,b,c,d,e){Mf=!1;if(!(0===b.expirationTime||b.expirationTime>e)){b=Tf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,n=f;null!==k;){var r=k.expirationTime;if(r>e){if(null===g&&(g=k,f=n),0===h||h>r)h=r}else n=Uf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}r=null;for(k=b.firstCapturedUpdate;null!==k;){var w=k.expirationTime;if(w>e){if(null===r&&(r=k,null===
g&&(f=n)),0===h||h>w)h=w}else n=Uf(a,b,k,n,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===r?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===r&&(f=n);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=r;b.expirationTime=h;a.memoizedState=n}}
function Wf(a,b){"function"!==typeof a?A("191",a):void 0;a.call(b)}
function Xf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);a=b.firstEffect;for(b.firstEffect=b.lastEffect=null;null!==a;){var d=a.callback;null!==d&&(a.callback=null,Wf(d,c));a=a.nextEffect}a=b.firstCapturedEffect;for(b.firstCapturedEffect=b.lastCapturedEffect=null;null!==a;)b=a.callback,null!==b&&(a.callback=null,Wf(b,c)),a=a.nextEffect}
function Yf(a,b){return{value:a,source:b,stack:vc(b)}}var Zf=nf(null),$f=nf(null),ag=nf(0);function bg(a){var b=a.type._context;N(ag,b._changedBits,a);N($f,b._currentValue,a);N(Zf,a,a);b._currentValue=a.pendingProps.value;b._changedBits=a.stateNode}function cg(a){var b=ag.current,c=$f.current;M(Zf,a);M($f,a);M(ag,a);a=a.type._context;a._currentValue=c;a._changedBits=b}var dg={},eg=nf(dg),fg=nf(dg),gg=nf(dg);function hg(a){a===dg?A("174"):void 0;return a}
function jg(a,b){N(gg,b,a);N(fg,a,a);N(eg,dg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ie(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Ie(b,c)}M(eg,a);N(eg,b,a)}function kg(a){M(eg,a);M(fg,a);M(gg,a)}function lg(a){fg.current===a&&(M(eg,a),M(fg,a))}function mg(a,b,c){var d=a.memoizedState;b=b(c,d);d=null===b||void 0===b?d:p({},d,b);a.memoizedState=d;a=a.updateQueue;null!==a&&0===a.expirationTime&&(a.baseState=d)}
var qg={isMounted:function(a){return(a=a._reactInternalFiber)?2===kd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ng();d=og(d,a);var e=Pf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Rf(a,e,d);pg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ng();d=og(d,a);var e=Pf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Rf(a,e,d);pg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ng();c=og(c,a);var d=Pf(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);Rf(a,d,c);pg(a,c)}};function rg(a,b,c,d,e,f){var g=a.stateNode;a=a.type;return"function"===typeof g.shouldComponentUpdate?g.shouldComponentUpdate(c,e,f):a.prototype&&a.prototype.isPureReactComponent?!ea(b,c)||!ea(d,e):!0}
function sg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&qg.enqueueReplaceState(b,b.state,null)}
function tg(a,b){var c=a.type,d=a.stateNode,e=a.pendingProps,f=qf(a);d.props=e;d.state=a.memoizedState;d.refs=ha;d.context=sf(a,f);f=a.updateQueue;null!==f&&(Vf(a,f,e,d,b),d.state=a.memoizedState);f=a.type.getDerivedStateFromProps;"function"===typeof f&&(mg(a,f,e),d.state=a.memoizedState);"function"===typeof c.getDerivedStateFromProps||"function"===typeof d.getSnapshotBeforeUpdate||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||(c=d.state,"function"===typeof d.componentWillMount&&
d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount(),c!==d.state&&qg.enqueueReplaceState(d,d.state,null),f=a.updateQueue,null!==f&&(Vf(a,f,e,d,b),d.state=a.memoizedState));"function"===typeof d.componentDidMount&&(a.effectTag|=4)}var ug=Array.isArray;
function vg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag?A("110"):void 0,d=c.stateNode);d?void 0:A("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs===ha?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?A("148"):void 0;c._owner?void 0:A("254",a)}return a}
function wg(a,b){"textarea"!==a.type&&A("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function xg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Af(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Df(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=vg(a,b,c),d.return=a,d;d=Bf(c,a.mode,d);d.ref=vg(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ef(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function r(a,b,c,d,f){if(null===b||10!==b.tag)return b=Cf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function w(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Df(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case gc:return c=Bf(b,a.mode,c),c.ref=vg(a,null,b),c.return=a,c;case hc:return b=Ef(b,a.mode,c),b.return=a,b}if(ug(b)||tc(b))return b=Cf(b,a.mode,c,null),b.return=
a,b;wg(a,b)}return null}function P(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case gc:return c.key===e?c.type===ic?r(a,b,c.props.children,d,e):k(a,b,c,d):null;case hc:return c.key===e?n(a,b,c,d):null}if(ug(c)||tc(c))return null!==e?null:r(a,b,c,d,null);wg(a,c)}return null}function nc(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case gc:return a=a.get(null===d.key?c:d.key)||null,d.type===ic?r(b,a,d.props.children,e,d.key):k(b,a,d,e);case hc:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(ug(d)||tc(d))return a=a.get(c)||null,r(b,a,d,e,null);wg(b,d)}return null}function Jd(e,g,h,k){for(var u=null,x=null,t=g,q=g=0,n=null;null!==t&&q<h.length;q++){t.index>q?(n=t,t=null):n=t.sibling;var l=P(e,t,h[q],k);if(null===l){null===t&&(t=n);break}a&&t&&null===l.alternate&&b(e,
t);g=f(l,g,q);null===x?u=l:x.sibling=l;x=l;t=n}if(q===h.length)return c(e,t),u;if(null===t){for(;q<h.length;q++)if(t=w(e,h[q],k))g=f(t,g,q),null===x?u=t:x.sibling=t,x=t;return u}for(t=d(e,t);q<h.length;q++)if(n=nc(t,e,q,h[q],k))a&&null!==n.alternate&&t.delete(null===n.key?q:n.key),g=f(n,g,q),null===x?u=n:x.sibling=n,x=n;a&&t.forEach(function(a){return b(e,a)});return u}function E(e,g,h,k){var u=tc(h);"function"!==typeof u?A("150"):void 0;h=u.call(h);null==h?A("151"):void 0;for(var t=u=null,n=g,x=
g=0,y=null,l=h.next();null!==n&&!l.done;x++,l=h.next()){n.index>x?(y=n,n=null):y=n.sibling;var r=P(e,n,l.value,k);if(null===r){n||(n=y);break}a&&n&&null===r.alternate&&b(e,n);g=f(r,g,x);null===t?u=r:t.sibling=r;t=r;n=y}if(l.done)return c(e,n),u;if(null===n){for(;!l.done;x++,l=h.next())l=w(e,l.value,k),null!==l&&(g=f(l,g,x),null===t?u=l:t.sibling=l,t=l);return u}for(n=d(e,n);!l.done;x++,l=h.next())l=nc(n,e,x,l.value,k),null!==l&&(a&&null!==l.alternate&&n.delete(null===l.key?x:l.key),g=f(l,g,x),null===
t?u=l:t.sibling=l,t=l);a&&n.forEach(function(a){return b(e,a)});return u}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ic&&null===f.key;k&&(f=f.props.children);var n="object"===typeof f&&null!==f;if(n)switch(f.$$typeof){case gc:a:{n=f.key;for(k=d;null!==k;){if(k.key===n)if(10===k.tag?f.type===ic:k.type===f.type){c(a,k.sibling);d=e(k,f.type===ic?f.props.children:f.props,h);d.ref=vg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===ic?(d=Cf(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Bf(f,a.mode,h),h.ref=vg(a,d,f),h.return=a,a=h)}return g(a);case hc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ef(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Df(f,a.mode,h),d.return=a,a=d),g(a);if(ug(f))return Jd(a,d,f,h);if(tc(f))return E(a,d,f,h);n&&wg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 1:h=a.type,A("152",h.displayName||h.name||"Component")}return c(a,d)}}var yg=xg(!0),zg=xg(!1),Ag=null,Bg=null,Cg=!1;function Dg(a,b){var c=new zf(5,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Eg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Fg(a){if(Cg){var b=Bg;if(b){var c=b;if(!Eg(a,b)){b=jf(c);if(!b||!Eg(a,b)){a.effectTag|=2;Cg=!1;Ag=a;return}Dg(Ag,c)}Ag=a;Bg=kf(b)}else a.effectTag|=2,Cg=!1,Ag=a}}
function Gg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;Ag=a}function Hg(a){if(a!==Ag)return!1;if(!Cg)return Gg(a),Cg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!ef(b,a.memoizedProps))for(b=Bg;b;)Dg(a,b),b=jf(b);Gg(a);Bg=Ag?jf(a.stateNode):null;return!0}function Ig(){Bg=Ag=null;Cg=!1}function Q(a,b,c){Jg(a,b,c,b.expirationTime)}function Jg(a,b,c,d){b.child=null===a?zg(b,null,c,d):yg(b,a.child,c,d)}
function Kg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Lg(a,b,c,d,e){Kg(a,b);var f=0!==(b.effectTag&64);if(!c&&!f)return d&&yf(b,!1),R(a,b);c=b.stateNode;ec.current=b;var g=f?null:c.render();b.effectTag|=1;f&&(Jg(a,b,null,e),b.child=null);Jg(a,b,g,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&yf(b,!0);return b.child}
function Mg(a){var b=a.stateNode;b.pendingContext?vf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&vf(a,b.context,!1);jg(a,b.containerInfo)}
function Ng(a,b,c,d){var e=a.child;null!==e&&(e.return=a);for(;null!==e;){switch(e.tag){case 12:var f=e.stateNode|0;if(e.type===b&&0!==(f&c)){for(f=e;null!==f;){var g=f.alternate;if(0===f.expirationTime||f.expirationTime>d)f.expirationTime=d,null!==g&&(0===g.expirationTime||g.expirationTime>d)&&(g.expirationTime=d);else if(null!==g&&(0===g.expirationTime||g.expirationTime>d))g.expirationTime=d;else break;f=f.return}f=null}else f=e.child;break;case 13:f=e.type===a.type?null:e.child;break;default:f=
e.child}if(null!==f)f.return=e;else for(f=e;null!==f;){if(f===a){f=null;break}e=f.sibling;if(null!==e){e.return=f.return;f=e;break}f=f.return}e=f}}
function Rg(a,b,c){var d=b.type._context,e=b.pendingProps,f=b.memoizedProps,g=!0;if(O.current)g=!1;else if(f===e)return b.stateNode=0,bg(b),R(a,b);var h=e.value;b.memoizedProps=e;if(null===f)h=1073741823;else if(f.value===e.value){if(f.children===e.children&&g)return b.stateNode=0,bg(b),R(a,b);h=0}else{var k=f.value;if(k===h&&(0!==k||1/k===1/h)||k!==k&&h!==h){if(f.children===e.children&&g)return b.stateNode=0,bg(b),R(a,b);h=0}else if(h="function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,
h):1073741823,h|=0,0===h){if(f.children===e.children&&g)return b.stateNode=0,bg(b),R(a,b)}else Ng(b,d,h,c)}b.stateNode=h;bg(b);Q(a,b,e.children);return b.child}function R(a,b){null!==a&&b.child!==a.child?A("153"):void 0;if(null!==b.child){a=b.child;var c=Af(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Af(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Sg(a,b,c){if(0===b.expirationTime||b.expirationTime>c){switch(b.tag){case 3:Mg(b);break;case 2:xf(b);break;case 4:jg(b,b.stateNode.containerInfo);break;case 13:bg(b)}return null}switch(b.tag){case 0:null!==a?A("155"):void 0;var d=b.type,e=b.pendingProps,f=qf(b);f=sf(b,f);d=d(e,f);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof?(f=b.type,b.tag=2,b.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,f=f.getDerivedStateFromProps,"function"===
typeof f&&mg(b,f,e),e=xf(b),d.updater=qg,b.stateNode=d,d._reactInternalFiber=b,tg(b,c),a=Lg(a,b,!0,e,c)):(b.tag=1,Q(a,b,d),b.memoizedProps=e,a=b.child);return a;case 1:return e=b.type,c=b.pendingProps,O.current||b.memoizedProps!==c?(d=qf(b),d=sf(b,d),e=e(c,d),b.effectTag|=1,Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 2:e=xf(b);if(null===a)if(null===b.stateNode){var g=b.pendingProps,h=b.type;d=qf(b);var k=2===b.tag&&null!=b.type.contextTypes;f=k?sf(b,d):ha;g=new h(g,f);b.memoizedState=null!==
g.state&&void 0!==g.state?g.state:null;g.updater=qg;b.stateNode=g;g._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=d,k.__reactInternalMemoizedMaskedChildContext=f);tg(b,c);d=!0}else{h=b.type;d=b.stateNode;k=b.memoizedProps;f=b.pendingProps;d.props=k;var n=d.context;g=qf(b);g=sf(b,g);var r=h.getDerivedStateFromProps;(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(k!==f||n!==g)&&sg(b,d,f,g);Mf=!1;var w=b.memoizedState;n=d.state=w;var P=b.updateQueue;null!==P&&(Vf(b,P,f,d,c),n=b.memoizedState);k!==f||w!==n||O.current||Mf?("function"===typeof r&&(mg(b,r,f),n=b.memoizedState),(k=Mf||rg(b,k,f,w,n,g))?(h||"function"!==typeof d.UNSAFE_componentWillMount&&"function"!==typeof d.componentWillMount||("function"===typeof d.componentWillMount&&d.componentWillMount(),"function"===typeof d.UNSAFE_componentWillMount&&d.UNSAFE_componentWillMount()),"function"===typeof d.componentDidMount&&
(b.effectTag|=4)):("function"===typeof d.componentDidMount&&(b.effectTag|=4),b.memoizedProps=f,b.memoizedState=n),d.props=f,d.state=n,d.context=g,d=k):("function"===typeof d.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.type,d=b.stateNode,f=b.memoizedProps,k=b.pendingProps,d.props=f,n=d.context,g=qf(b),g=sf(b,g),r=h.getDerivedStateFromProps,(h="function"===typeof r||"function"===typeof d.getSnapshotBeforeUpdate)||"function"!==typeof d.UNSAFE_componentWillReceiveProps&&"function"!==typeof d.componentWillReceiveProps||
(f!==k||n!==g)&&sg(b,d,k,g),Mf=!1,n=b.memoizedState,w=d.state=n,P=b.updateQueue,null!==P&&(Vf(b,P,k,d,c),w=b.memoizedState),f!==k||n!==w||O.current||Mf?("function"===typeof r&&(mg(b,r,k),w=b.memoizedState),(r=Mf||rg(b,f,k,n,w,g))?(h||"function"!==typeof d.UNSAFE_componentWillUpdate&&"function"!==typeof d.componentWillUpdate||("function"===typeof d.componentWillUpdate&&d.componentWillUpdate(k,w,g),"function"===typeof d.UNSAFE_componentWillUpdate&&d.UNSAFE_componentWillUpdate(k,w,g)),"function"===typeof d.componentDidUpdate&&
(b.effectTag|=4),"function"===typeof d.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),b.memoizedProps=k,b.memoizedState=w),d.props=k,d.state=w,d.context=g,d=r):("function"!==typeof d.componentDidUpdate||f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=4),"function"!==typeof d.getSnapshotBeforeUpdate||
f===a.memoizedProps&&n===a.memoizedState||(b.effectTag|=256),d=!1);return Lg(a,b,d,e,c);case 3:Mg(b);e=b.updateQueue;if(null!==e)if(d=b.memoizedState,d=null!==d?d.element:null,Vf(b,e,b.pendingProps,null,c),e=b.memoizedState.element,e===d)Ig(),a=R(a,b);else{d=b.stateNode;if(d=(null===a||null===a.child)&&d.hydrate)Bg=kf(b.stateNode.containerInfo),Ag=b,d=Cg=!0;d?(b.effectTag|=2,b.child=zg(b,null,e,c)):(Ig(),Q(a,b,e));a=b.child}else Ig(),a=R(a,b);return a;case 5:a:{hg(gg.current);e=hg(eg.current);d=Ie(e,
b.type);e!==d&&(N(fg,b,b),N(eg,d,b));null===a&&Fg(b);e=b.type;k=b.memoizedProps;d=b.pendingProps;f=null!==a?a.memoizedProps:null;if(!O.current&&k===d){if(k=b.mode&1&&!!d.hidden)b.expirationTime=1073741823;if(!k||1073741823!==c){a=R(a,b);break a}}k=d.children;ef(e,d)?k=null:f&&ef(e,f)&&(b.effectTag|=16);Kg(a,b);1073741823!==c&&b.mode&1&&d.hidden?(b.expirationTime=1073741823,b.memoizedProps=d,a=null):(Q(a,b,k),b.memoizedProps=d,a=b.child)}return a;case 6:return null===a&&Fg(b),b.memoizedProps=b.pendingProps,
null;case 16:return null;case 4:return jg(b,b.stateNode.containerInfo),e=b.pendingProps,O.current||b.memoizedProps!==e?(null===a?b.child=yg(b,null,e,c):Q(a,b,e),b.memoizedProps=e,a=b.child):a=R(a,b),a;case 14:return e=b.type.render,c=b.pendingProps,d=b.ref,O.current||b.memoizedProps!==c||d!==(null!==a?a.ref:null)?(e=e(c,d),Q(a,b,e),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 10:return c=b.pendingProps,O.current||b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 11:return c=
b.pendingProps.children,O.current||null!==c&&b.memoizedProps!==c?(Q(a,b,c),b.memoizedProps=c,a=b.child):a=R(a,b),a;case 15:return c=b.pendingProps,b.memoizedProps===c?a=R(a,b):(Q(a,b,c.children),b.memoizedProps=c,a=b.child),a;case 13:return Rg(a,b,c);case 12:a:if(d=b.type,f=b.pendingProps,k=b.memoizedProps,e=d._currentValue,g=d._changedBits,O.current||0!==g||k!==f){b.memoizedProps=f;h=f.unstable_observedBits;if(void 0===h||null===h)h=1073741823;b.stateNode=h;if(0!==(g&h))Ng(b,d,g,c);else if(k===f){a=
R(a,b);break a}c=f.children;c=c(e);b.effectTag|=1;Q(a,b,c);a=b.child}else a=R(a,b);return a;default:A("156")}}function Tg(a){a.effectTag|=4}var Ug=void 0,Vg=void 0,Wg=void 0;Ug=function(){};Vg=function(a,b,c){(b.updateQueue=c)&&Tg(b)};Wg=function(a,b,c,d){c!==d&&Tg(b)};
function Xg(a,b){var c=b.pendingProps;switch(b.tag){case 1:return null;case 2:return tf(b),null;case 3:kg(b);uf(b);var d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Hg(b),b.effectTag&=-3;Ug(b);return null;case 5:lg(b);d=hg(gg.current);var e=b.type;if(null!==a&&null!=b.stateNode){var f=a.memoizedProps,g=b.stateNode,h=hg(eg.current);g=Xe(g,e,f,c,d);Vg(a,b,g,e,f,c,d,h);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!c)return null===b.stateNode?
A("166"):void 0,null;a=hg(eg.current);if(Hg(b))c=b.stateNode,e=b.type,f=b.memoizedProps,c[C]=b,c[Ma]=f,d=Ze(c,e,f,a,d),b.updateQueue=d,null!==d&&Tg(b);else{a=Ue(e,c,d,a);a[C]=b;a[Ma]=c;a:for(f=b.child;null!==f;){if(5===f.tag||6===f.tag)a.appendChild(f.stateNode);else if(4!==f.tag&&null!==f.child){f.child.return=f;f=f.child;continue}if(f===b)break;for(;null===f.sibling;){if(null===f.return||f.return===b)break a;f=f.return}f.sibling.return=f.return;f=f.sibling}We(a,e,c,d);df(e,c)&&Tg(b);b.stateNode=
a}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)Wg(a,b,a.memoizedProps,c);else{if("string"!==typeof c)return null===b.stateNode?A("166"):void 0,null;d=hg(gg.current);hg(eg.current);Hg(b)?(d=b.stateNode,c=b.memoizedProps,d[C]=b,$e(d,c)&&Tg(b)):(d=Ve(c,d),d[C]=b,b.stateNode=d)}return null;case 14:return null;case 16:return null;case 10:return null;case 11:return null;case 15:return null;case 4:return kg(b),Ug(b),null;case 13:return cg(b),null;case 12:return null;case 0:A("167");
default:A("156")}}function Yg(a,b){var c=b.source;null===b.stack&&null!==c&&vc(c);null!==c&&uc(c);b=b.value;null!==a&&2===a.tag&&uc(a);try{b&&b.suppressReactErrorLogging||console.error(b)}catch(d){d&&d.suppressReactErrorLogging||console.error(d)}}function Zg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){$g(a,c)}else b.current=null}
function ah(a){"function"===typeof Lf&&Lf(a);switch(a.tag){case 2:Zg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){$g(a,c)}break;case 5:Zg(a);break;case 4:bh(a)}}function ch(a){return 5===a.tag||3===a.tag||4===a.tag}
function dh(a){a:{for(var b=a.return;null!==b;){if(ch(b)){var c=b;break a}b=b.return}A("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:A("161")}c.effectTag&16&&(Le(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ch(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?f.parentNode.insertBefore(g,f):f.appendChild(g)):b.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===
e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function bh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?A("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(ah(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?d=b.stateNode.containerInfo:ah(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function eh(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&(c[Ma]=d,Ye(c,f,e,a,d))}break;case 6:null===b.stateNode?A("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 15:break;case 16:break;default:A("163")}}function fh(a,b,c){c=Pf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){gh(d);Yg(a,b)};return c}
function hh(a,b,c){c=Pf(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===ih?ih=new Set([this]):ih.add(this);var c=b.value,d=b.stack;Yg(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function jh(a,b,c,d,e,f){c.effectTag|=512;c.firstEffect=c.lastEffect=null;d=Yf(d,c);a=b;do{switch(a.tag){case 3:a.effectTag|=1024;d=fh(a,d,f);Sf(a,d,f);return;case 2:if(b=d,c=a.stateNode,0===(a.effectTag&64)&&null!==c&&"function"===typeof c.componentDidCatch&&(null===ih||!ih.has(c))){a.effectTag|=1024;d=hh(a,b,f);Sf(a,d,f);return}}a=a.return}while(null!==a)}
function kh(a){switch(a.tag){case 2:tf(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return kg(a),uf(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return lg(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 4:return kg(a),null;case 13:return cg(a),null;default:return null}}var lh=ff(),mh=2,nh=lh,oh=0,ph=0,qh=!1,S=null,rh=null,T=0,sh=-1,th=!1,U=null,uh=!1,vh=!1,ih=null;
function wh(){if(null!==S)for(var a=S.return;null!==a;){var b=a;switch(b.tag){case 2:tf(b);break;case 3:kg(b);uf(b);break;case 5:lg(b);break;case 4:kg(b);break;case 13:cg(b)}a=a.return}rh=null;T=0;sh=-1;th=!1;S=null;vh=!1}
function xh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){b=Xg(b,a,T);var e=a;if(1073741823===T||1073741823!==e.expirationTime){var f=0;switch(e.tag){case 3:case 2:var g=e.updateQueue;null!==g&&(f=g.expirationTime)}for(g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{vh=!0;break}}else{a=kh(a,th,T);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512);if(null!==d)return d;if(null!==c)a=c;else break}}return null}
function yh(a){var b=Sg(a.alternate,a,T);null===b&&(b=xh(a));ec.current=null;return b}
function zh(a,b,c){qh?A("243"):void 0;qh=!0;if(b!==T||a!==rh||null===S)wh(),rh=a,T=b,sh=-1,S=Af(rh.current,null,T),a.pendingCommitExpirationTime=0;var d=!1;th=!c||T<=mh;do{try{if(c)for(;null!==S&&!Ah();)S=yh(S);else for(;null!==S;)S=yh(S)}catch(f){if(null===S)d=!0,gh(f);else{null===S?A("271"):void 0;c=S;var e=c.return;if(null===e){d=!0;gh(f);break}jh(a,e,c,f,th,T,nh);S=xh(c)}}break}while(1);qh=!1;if(d)return null;if(null===S){if(vh)return a.pendingCommitExpirationTime=b,a.current.alternate;th?A("262"):
void 0;0<=sh&&setTimeout(function(){var b=a.current.expirationTime;0!==b&&(0===a.remainingExpirationTime||a.remainingExpirationTime<b)&&Bh(a,b)},sh);Ch(a.current.expirationTime)}return null}
function $g(a,b){var c;a:{qh&&!uh?A("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===ih||!ih.has(d))){a=Yf(b,a);a=hh(c,a,1);Rf(c,a,1);pg(c,1);c=void 0;break a}break;case 3:a=Yf(b,a);a=fh(c,a,1);Rf(c,a,1);pg(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=Yf(b,a),c=fh(a,c,1),Rf(a,c,1),pg(a,1));c=void 0}return c}
function Dh(){var a=2+25*(((ng()-2+500)/25|0)+1);a<=oh&&(a=oh+1);return oh=a}function og(a,b){a=0!==ph?ph:qh?uh?1:T:b.mode&1?Eh?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1):1;Eh&&(0===Fh||a>Fh)&&(Fh=a);return a}
function pg(a,b){for(;null!==a;){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a.return)if(3===a.tag){var c=a.stateNode;!qh&&0!==T&&b<T&&wh();var d=c.current.expirationTime;qh&&!uh&&rh===c||Bh(c,d);Gh>Hh&&A("185")}else break;a=a.return}}function ng(){nh=ff()-lh;return mh=(nh/10|0)+2}
function Ih(a){var b=ph;ph=2+25*(((ng()-2+500)/25|0)+1);try{return a()}finally{ph=b}}function Jh(a,b,c,d,e){var f=ph;ph=1;try{return a(b,c,d,e)}finally{ph=f}}var Kh=null,V=null,Lh=0,Mh=void 0,W=!1,X=null,Y=0,Fh=0,Nh=!1,Oh=!1,Ph=null,Qh=null,Z=!1,Rh=!1,Eh=!1,Sh=null,Hh=1E3,Gh=0,Th=1;function Uh(a){if(0!==Lh){if(a>Lh)return;null!==Mh&&hf(Mh)}var b=ff()-lh;Lh=a;Mh=gf(Vh,{timeout:10*(a-2)-b})}
function Bh(a,b){if(null===a.nextScheduledRoot)a.remainingExpirationTime=b,null===V?(Kh=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=Kh);else{var c=a.remainingExpirationTime;if(0===c||b<c)a.remainingExpirationTime=b}W||(Z?Rh&&(X=a,Y=1,Wh(a,1,!1)):1===b?Xh():Uh(b))}
function Yh(){var a=0,b=null;if(null!==V)for(var c=V,d=Kh;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===V?A("244"):void 0;if(d===d.nextScheduledRoot){Kh=V=d.nextScheduledRoot=null;break}else if(d===Kh)Kh=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=Kh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===V)break;
c=d;d=d.nextScheduledRoot}}c=X;null!==c&&c===b&&1===a?Gh++:Gh=0;X=b;Y=a}function Vh(a){Zh(0,!0,a)}function Xh(){Zh(1,!1,null)}function Zh(a,b,c){Qh=c;Yh();if(b)for(;null!==X&&0!==Y&&(0===a||a>=Y)&&(!Nh||ng()>=Y);)ng(),Wh(X,Y,!Nh),Yh();else for(;null!==X&&0!==Y&&(0===a||a>=Y);)Wh(X,Y,!1),Yh();null!==Qh&&(Lh=0,Mh=null);0!==Y&&Uh(Y);Qh=null;Nh=!1;$h()}function ai(a,b){W?A("253"):void 0;X=a;Y=b;Wh(a,b,!1);Xh();$h()}
function $h(){Gh=0;if(null!==Sh){var a=Sh;Sh=null;for(var b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Oh||(Oh=!0,Ph=d)}}}if(Oh)throw a=Ph,Ph=null,Oh=!1,a;}function Wh(a,b,c){W?A("245"):void 0;W=!0;c?(c=a.finishedWork,null!==c?bi(a,c,b):(c=zh(a,b,!0),null!==c&&(Ah()?a.finishedWork=c:bi(a,c,b)))):(c=a.finishedWork,null!==c?bi(a,c,b):(c=zh(a,b,!1),null!==c&&bi(a,c,b)));W=!1}
function bi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===Sh?Sh=[d]:Sh.push(d),d._defer)){a.finishedWork=b;a.remainingExpirationTime=0;return}a.finishedWork=null;uh=qh=!0;c=b.stateNode;c.current===b?A("177"):void 0;d=c.pendingCommitExpirationTime;0===d?A("261"):void 0;c.pendingCommitExpirationTime=0;ng();ec.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var e=b.firstEffect}else e=b;else e=b.firstEffect;bf=Id;var f=da();if(Vd(f)){if("selectionStart"in
f)var g={start:f.selectionStart,end:f.selectionEnd};else a:{var h=window.getSelection&&window.getSelection();if(h&&0!==h.rangeCount){g=h.anchorNode;var k=h.anchorOffset,n=h.focusNode;h=h.focusOffset;try{g.nodeType,n.nodeType}catch(Wa){g=null;break a}var r=0,w=-1,P=-1,nc=0,Jd=0,E=f,t=null;b:for(;;){for(var x;;){E!==g||0!==k&&3!==E.nodeType||(w=r+k);E!==n||0!==h&&3!==E.nodeType||(P=r+h);3===E.nodeType&&(r+=E.nodeValue.length);if(null===(x=E.firstChild))break;t=E;E=x}for(;;){if(E===f)break b;t===g&&
++nc===k&&(w=r);t===n&&++Jd===h&&(P=r);if(null!==(x=E.nextSibling))break;E=t;t=E.parentNode}E=x}g=-1===w||-1===P?null:{start:w,end:P}}else g=null}g=g||{start:0,end:0}}else g=null;cf={focusedElem:f,selectionRange:g};Kd(!1);for(U=e;null!==U;){f=!1;g=void 0;try{for(;null!==U;){if(U.effectTag&256){var u=U.alternate;k=U;switch(k.tag){case 2:if(k.effectTag&256&&null!==u){var y=u.memoizedProps,D=u.memoizedState,ja=k.stateNode;ja.props=k.memoizedProps;ja.state=k.memoizedState;var ni=ja.getSnapshotBeforeUpdate(y,
D);ja.__reactInternalSnapshotBeforeUpdate=ni}break;case 3:case 5:case 6:case 4:break;default:A("163")}}U=U.nextEffect}}catch(Wa){f=!0,g=Wa}f&&(null===U?A("178"):void 0,$g(U,g),null!==U&&(U=U.nextEffect))}for(U=e;null!==U;){u=!1;y=void 0;try{for(;null!==U;){var q=U.effectTag;q&16&&Le(U.stateNode,"");if(q&128){var z=U.alternate;if(null!==z){var l=z.ref;null!==l&&("function"===typeof l?l(null):l.current=null)}}switch(q&14){case 2:dh(U);U.effectTag&=-3;break;case 6:dh(U);U.effectTag&=-3;eh(U.alternate,
U);break;case 4:eh(U.alternate,U);break;case 8:D=U,bh(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null)}U=U.nextEffect}}catch(Wa){u=!0,y=Wa}u&&(null===U?A("178"):void 0,$g(U,y),null!==U&&(U=U.nextEffect))}l=cf;z=da();q=l.focusedElem;u=l.selectionRange;if(z!==q&&fa(document.documentElement,q)){null!==u&&Vd(q)&&(z=u.start,l=u.end,void 0===l&&(l=z),"selectionStart"in q?(q.selectionStart=z,q.selectionEnd=Math.min(l,q.value.length)):window.getSelection&&(z=window.getSelection(),
y=q[lb()].length,l=Math.min(u.start,y),u=void 0===u.end?l:Math.min(u.end,y),!z.extend&&l>u&&(y=u,u=l,l=y),y=Ud(q,l),D=Ud(q,u),y&&D&&(1!==z.rangeCount||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==D.node||z.focusOffset!==D.offset)&&(ja=document.createRange(),ja.setStart(y.node,y.offset),z.removeAllRanges(),l>u?(z.addRange(ja),z.extend(D.node,D.offset)):(ja.setEnd(D.node,D.offset),z.addRange(ja)))));z=[];for(l=q;l=l.parentNode;)1===l.nodeType&&z.push({element:l,left:l.scrollLeft,
top:l.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<z.length;q++)l=z[q],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}cf=null;Kd(bf);bf=null;c.current=b;for(U=e;null!==U;){e=!1;q=void 0;try{for(z=d;null!==U;){var ig=U.effectTag;if(ig&36){var oc=U.alternate;l=U;u=z;switch(l.tag){case 2:var ca=l.stateNode;if(l.effectTag&4)if(null===oc)ca.props=l.memoizedProps,ca.state=l.memoizedState,ca.componentDidMount();else{var xi=oc.memoizedProps,yi=oc.memoizedState;ca.props=l.memoizedProps;
ca.state=l.memoizedState;ca.componentDidUpdate(xi,yi,ca.__reactInternalSnapshotBeforeUpdate)}var Og=l.updateQueue;null!==Og&&(ca.props=l.memoizedProps,ca.state=l.memoizedState,Xf(l,Og,ca,u));break;case 3:var Pg=l.updateQueue;if(null!==Pg){y=null;if(null!==l.child)switch(l.child.tag){case 5:y=l.child.stateNode;break;case 2:y=l.child.stateNode}Xf(l,Pg,y,u)}break;case 5:var zi=l.stateNode;null===oc&&l.effectTag&4&&df(l.type,l.memoizedProps)&&zi.focus();break;case 6:break;case 4:break;case 15:break;case 16:break;
default:A("163")}}if(ig&128){l=void 0;var yc=U.ref;if(null!==yc){var Qg=U.stateNode;switch(U.tag){case 5:l=Qg;break;default:l=Qg}"function"===typeof yc?yc(l):yc.current=l}}var Ai=U.nextEffect;U.nextEffect=null;U=Ai}}catch(Wa){e=!0,q=Wa}e&&(null===U?A("178"):void 0,$g(U,q),null!==U&&(U=U.nextEffect))}qh=uh=!1;"function"===typeof Kf&&Kf(b.stateNode);b=c.current.expirationTime;0===b&&(ih=null);a.remainingExpirationTime=b}function Ah(){return null===Qh||Qh.timeRemaining()>Th?!1:Nh=!0}
function gh(a){null===X?A("246"):void 0;X.remainingExpirationTime=0;Oh||(Oh=!0,Ph=a)}function Ch(a){null===X?A("246"):void 0;X.remainingExpirationTime=a}function ci(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Xh()}}function di(a,b){if(Z&&!Rh){Rh=!0;try{return a(b)}finally{Rh=!1}}return a(b)}function ei(a,b){W?A("187"):void 0;var c=Z;Z=!0;try{return Jh(a,b)}finally{Z=c,Xh()}}
function fi(a,b,c){if(Eh)return a(b,c);Z||W||0===Fh||(Zh(Fh,!1,null),Fh=0);var d=Eh,e=Z;Z=Eh=!0;try{return a(b,c)}finally{Eh=d,(Z=e)||W||Xh()}}function gi(a){var b=Z;Z=!0;try{Jh(a)}finally{(Z=b)||W||Zh(1,!1,null)}}
function hi(a,b,c,d,e){var f=b.current;if(c){c=c._reactInternalFiber;var g;b:{2===kd(c)&&2===c.tag?void 0:A("170");for(g=c;3!==g.tag;){if(rf(g)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}(g=g.return)?void 0:A("171")}g=g.stateNode.context}c=rf(c)?wf(c,g):g}else c=ha;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Pf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Rf(f,e,d);pg(f,d);return d}
function ii(a){var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?A("188"):A("268",Object.keys(a)));a=nd(b);return null===a?null:a.stateNode}function ji(a,b,c,d){var e=b.current,f=ng();e=og(f,e);return hi(a,b,c,e,d)}function ki(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}
function li(a){var b=a.findFiberByHostInstance;return Jf(p({},a,{findHostInstanceByFiber:function(a){a=nd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))}
var mi={updateContainerAtExpirationTime:hi,createContainer:function(a,b,c){return Ff(a,b,c)},updateContainer:ji,flushRoot:ai,requestWork:Bh,computeUniqueAsyncExpiration:Dh,batchedUpdates:ci,unbatchedUpdates:di,deferredUpdates:Ih,syncUpdates:Jh,interactiveUpdates:fi,flushInteractiveUpdates:function(){W||0===Fh||(Zh(Fh,!1,null),Fh=0)},flushControlled:gi,flushSync:ei,getPublicRootInstance:ki,findHostInstance:ii,findHostInstanceWithNoPortals:function(a){a=od(a);return null===a?null:a.stateNode},injectIntoDevTools:li};
function oi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:hc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}Kb.injectFiberControlledHostComponent(af);function pi(a){this._expirationTime=Dh();this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}
pi.prototype.render=function(a){this._defer?void 0:A("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new qi;hi(a,b,null,c,d._onCommit);return d};pi.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
pi.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:A("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?A("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;ai(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};pi.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function qi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}qi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
qi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?A("191",c):void 0;c()}}};function ri(a,b,c){this._internalRoot=Ff(a,b,c)}ri.prototype.render=function(a,b){var c=this._internalRoot,d=new qi;b=void 0===b?null:b;null!==b&&d.then(b);ji(a,c,null,d._onCommit);return d};
ri.prototype.unmount=function(a){var b=this._internalRoot,c=new qi;a=void 0===a?null:a;null!==a&&c.then(a);ji(null,b,null,c._onCommit);return c};ri.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new qi;c=void 0===c?null:c;null!==c&&e.then(c);ji(b,d,a,e._onCommit);return e};
ri.prototype.createBatch=function(){var a=new pi(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function si(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Sb=mi.batchedUpdates;Tb=mi.interactiveUpdates;Ub=mi.flushInteractiveUpdates;
function ti(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new ri(a,!1,b)}
function ui(a,b,c,d,e){si(c)?void 0:A("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=ki(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=ti(c,d);if("function"===typeof e){var h=e;e=function(){var a=ki(f._internalRoot);h.call(a)}}di(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return ki(f._internalRoot)}
function vi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;si(b)?void 0:A("200");return oi(a,b,null,c)}
var wi={createPortal:vi,findDOMNode:function(a){return null==a?null:1===a.nodeType?a:ii(a)},hydrate:function(a,b,c){return ui(null,a,b,!0,c)},render:function(a,b,c){return ui(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?A("38"):void 0;return ui(a,b,c,!1,d)},unmountComponentAtNode:function(a){si(a)?void 0:A("40");return a._reactRootContainer?(di(function(){ui(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return vi.apply(void 0,
arguments)},unstable_batchedUpdates:ci,unstable_deferredUpdates:Ih,unstable_interactiveUpdates:fi,flushSync:ei,unstable_flushControlled:gi,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Ka,EventPluginRegistry:va,EventPropagators:$a,ReactControlledComponent:Rb,ReactDOMComponentTree:Qa,ReactDOMEventListener:Od},unstable_createRoot:function(a,b){return new ri(a,!0,null!=b&&!0===b.hydrate)}};li({findFiberByHostInstance:Na,bundleType:0,version:"16.4.2",rendererPackageName:"react-dom"});
var Bi={default:wi},Ci=Bi&&wi||Bi;module.exports=Ci.default?Ci.default:Ci;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 *
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

var isTextNode = __webpack_require__(230);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(231);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./context-menu.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./context-menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "#webamp-context-menu .context-menu {\n    left: 0px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n#webamp-context-menu .context-menu.bottom {\n    top: 12px;\n}\n\n#webamp-context-menu .context-menu.top {\n    top: 0px;\n}\n\n#webamp-context-menu .context-menu,\n#webamp-context-menu .context-menu ul {\n    z-index: 50; /* Gross */\n    background-color: #ffffff;\n    position: absolute;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    border: 1px solid #a7a394;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n#webamp-context-menu .context-menu li {\n    position: relative;\n    font-family: \"Tahoma\";\n    font-size: 11px;\n    color: black;\n    white-space: nowrap;\n    margin: 2px;\n    padding: 1px 18px 3px 18px;\n    display: block;\n}\n\n#webamp-context-menu .context-menu li.checked:before {\n    float: left;\n    /* TODO: Use an image */\n    content: \"\\2713\";\n    margin-left: -12px;\n}\n\n#webamp-context-menu .context-menu li.parent:after {\n    float: right;\n    content: \"\\25B8\";\n    margin-right: -12px;\n}\n#webamp-context-menu .context-menu li a {\n    text-decoration: none;\n    color: black;\n    cursor: default;\n}\n\n#webamp-context-menu .context-menu li:hover,\n#webamp-context-menu .context-menu li:hover a {\n    background-color: #224eb7;\n    color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr {\n    padding: 2px 0;\n}\n\n#webamp-context-menu .context-menu li.hr:hover {\n    background-color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr hr {\n    border: none;\n    height: 1px;\n    background-color: #a7a394;\n    margin: 0;\n    padding: 0;\n}\n\n#webamp-context-menu .context-menu ul {\n    display: none;\n    left: 100%;\n    margin-left: -3px;\n}\n\n#webamp-context-menu .context-menu li:hover ul {\n    display: block;\n}\n", ""]);

// exports


/***/ }),
/* 234 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenWindow = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(236);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

var _ResizeTarget = __webpack_require__(116);

var _ResizeTarget2 = _interopRequireDefault(_ResizeTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Text = ({ children }) => {
  const letters = children.split("");
  return letters.map((letter, i) => _react2.default.createElement("div", {
    key: i,
    className: `draggable gen-text-letter gen-text-${letter === " " ? "space" : letter.toLowerCase()}`
  }));
};

const CHROME_WIDTH = 19;
const CHROME_HEIGHT = 34;

// Named export for testing
const GenWindow = exports.GenWindow = ({
  selected,
  children,
  close,
  title,
  setFocus,
  windowId,
  windowSize,
  setGenWindowSize,
  scrollVolume: handleWheel,
  width,
  height
}) => {
  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames2.default)("gen-window", "window", { selected }),
      onMouseDown: () => setFocus(windowId),
      onWheel: handleWheel,
      style: { width, height }
    },
    _react2.default.createElement(
      "div",
      { className: "gen-top draggable" },
      _react2.default.createElement("div", { className: "gen-top-left draggable" }),
      _react2.default.createElement("div", { className: "gen-top-left-fill draggable" }),
      _react2.default.createElement("div", { className: "gen-top-left-end draggable" }),
      _react2.default.createElement(
        "div",
        { className: "gen-top-title draggable" },
        _react2.default.createElement(
          Text,
          null,
          title
        )
      ),
      _react2.default.createElement("div", { className: "gen-top-right-end draggable" }),
      _react2.default.createElement("div", { className: "gen-top-right-fill draggable" }),
      _react2.default.createElement(
        "div",
        { className: "gen-top-right draggable" },
        _react2.default.createElement("div", { className: "gen-close selected", onClick: () => close(windowId) })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "gen-middle" },
      _react2.default.createElement(
        "div",
        { className: "gen-middle-left draggable" },
        _react2.default.createElement("div", { className: "gen-middle-left-bottom draggable" })
      ),
      _react2.default.createElement(
        "div",
        { className: "gen-middle-center" },
        children({
          width: width - CHROME_WIDTH,
          height: height - CHROME_HEIGHT
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "gen-middle-right draggable" },
        _react2.default.createElement("div", { className: "gen-middle-right-bottom draggable" })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "gen-bottom draggable" },
      _react2.default.createElement("div", { className: "gen-bottom-left draggable" }),
      _react2.default.createElement(
        "div",
        { className: "gen-bottom-right draggable" },
        _react2.default.createElement(_ResizeTarget2.default, {
          currentSize: windowSize,
          setWindowSize: size => setGenWindowSize(windowId, size),
          id: "gen-resize-target"
        })
      )
    )
  );
};

GenWindow.propTypes = {
  title: _propTypes2.default.string.isRequired,
  windowId: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.func.isRequired,
  close: _propTypes2.default.func.isRequired,
  selected: _propTypes2.default.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  var _getWindowPixelSize = (0, _selectors.getWindowPixelSize)(state, ownProps.windowId);

  const width = _getWindowPixelSize.width,
        height = _getWindowPixelSize.height;

  return {
    width,
    height,
    selected: state.windows.focused === ownProps.windowId,
    windowSize: state.windows.genWindows[ownProps.windowId].size
  };
};

const mapDispatchToProps = {
  setFocus: windowId => ({ type: _actionTypes.SET_FOCUSED_WINDOW, window: windowId }),
  close: windowId => (0, _actionCreators.closeWindow)(windowId),
  setGenWindowSize: _actionCreators.setWindowSize,
  scrollVolume: _actionCreators.scrollVolume
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GenWindow);

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./gen-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./gen-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "#webamp .gen-text-space {\n    width: 5px;\n}\n\n#webamp .gen-text-letter {\n    height: 7px;\n    display: inline-block;\n}\n\n#webamp .gen-window {\n    /* Default size */\n    width: 275px;\n    height: 116px;\n    display: flex;\n    flex-direction: column;\n}\n\n#webamp .gen-top {\n    height: 20px;\n    display: flex;\n    flex-direction: row;\n}\n\n#webamp .gen-top-left {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-top-title {\n    line-height: 7px;\n    margin-top: 2px;\n    /* TODO: This should be a conciquence of the repeating tiles, not hard coded */\n    padding: 0 3px 0 4px;\n}\n\n#webamp .gen-top-left-fill {\n    flex-grow: 1;\n    height: 20px;\n    background-position: left;\n}\n\n#webamp .gen-top-right-fill {\n    flex-grow: 1;\n    height: 20px;\n    background-position: right;\n}\n\n#webamp .gen-top-left-end {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-top-right {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-top-right-end {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-close {\n    width: 9px;\n    height: 9px;\n    position: absolute;\n    right: 2px;\n    top: 3px;\n}\n\n#webamp .gen-middle {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n\n#webamp .gen-middle-left {\n    width: 11px;\n}\n\n#webamp .gen-middle-left-bottom {\n    width: 11px;\n    height: 24px;\n    bottom: 0;\n    position: absolute;\n}\n\n#webamp .gen-middle-center {\n    flex-grow: 1;\n    position: relative;\n}\n\n#webamp .gen-middle-right {\n    width: 8px;\n}\n\n#webamp .gen-middle-right-bottom {\n    width: 8px;\n    height: 24px;\n    bottom: 0;\n    position: absolute;\n}\n\n#webamp .gen-bottom {\n    height: 14px;\n    background-repeat: repeat-x;\n}\n\n#webamp .gen-bottom-left {\n    position: absolute;\n    left: 0;\n    width: 125px;\n    height: 14px;\n}\n\n#webamp .gen-bottom-right {\n    position: absolute;\n    right: 0;\n    width: 125px;\n    height: 14px;\n}\n\n#webamp .gen-bottom-right #gen-resize-target {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    height: 20px;\n    width: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDoubleSizeMode = toggleDoubleSizeMode;
exports.toggleEqualizerShadeMode = toggleEqualizerShadeMode;
exports.toggleMainWindowShadeMode = toggleMainWindowShadeMode;
exports.togglePlaylistShadeMode = togglePlaylistShadeMode;
exports.closeWindow = closeWindow;
exports.hideWindow = hideWindow;
exports.showWindow = showWindow;
exports.setWindowSize = setWindowSize;
exports.toggleWindow = toggleWindow;
exports.updateWindowPositions = updateWindowPositions;

var _selectors = __webpack_require__(5);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

var _resizeUtils = __webpack_require__(110);

var _snapUtils = __webpack_require__(111);

// Dispatch an action and, if needed rearrange the windows to preserve
// the existing edge relationship.
//
// Works by checking the edges before the action is dispatched. Then,
// after disatching, calculating what position change would be required
// to restore those relationships.
function withWindowGraphIntegrity(action) {
  return (dispatch, getState) => {
    const state = getState();
    const graph = (0, _selectors.getWindowGraph)(state);
    const originalSizes = (0, _selectors.getWindowSizes)(state);

    dispatch(action);

    const newSizes = (0, _selectors.getWindowSizes)(getState());
    const sizeDiff = {};
    for (const window of Object.keys(newSizes)) {
      const original = originalSizes[window];
      const current = newSizes[window];
      sizeDiff[window] = {
        height: current.height - original.height,
        width: current.width - original.width
      };
    }

    const positionDiff = (0, _resizeUtils.getPositionDiff)(graph, sizeDiff);
    const windowPositions = (0, _selectors.getWindowPositions)(state);

    const newPositions = (0, _utils.objectMap)(windowPositions, (position, key) => (0, _snapUtils.applyDiff)(position, positionDiff[key]));

    dispatch(updateWindowPositions(newPositions));
  };
}

function toggleDoubleSizeMode() {
  return withWindowGraphIntegrity({ type: _actionTypes.TOGGLE_DOUBLESIZE_MODE });
}

function toggleEqualizerShadeMode() {
  return withWindowGraphIntegrity({
    type: _actionTypes.TOGGLE_WINDOW_SHADE_MODE,
    windowId: "equalizer"
  });
}

function toggleMainWindowShadeMode() {
  return withWindowGraphIntegrity({
    type: _actionTypes.TOGGLE_WINDOW_SHADE_MODE,
    windowId: "main"
  });
}

function togglePlaylistShadeMode() {
  return withWindowGraphIntegrity({
    type: _actionTypes.TOGGLE_WINDOW_SHADE_MODE,
    windowId: "playlist"
  });
}

function closeWindow(windowId) {
  return { type: _actionTypes.CLOSE_WINDOW, windowId };
}

function hideWindow(windowId) {
  return { type: _actionTypes.SET_WINDOW_VISIBILITY, windowId, hidden: true };
}

function showWindow(windowId) {
  return { type: _actionTypes.SET_WINDOW_VISIBILITY, windowId, hidden: false };
}

function setWindowSize(windowId, size) {
  return { type: _actionTypes.WINDOW_SIZE_CHANGED, windowId, size };
}

function toggleWindow(windowId) {
  return { type: _actionTypes.TOGGLE_WINDOW, windowId };
}

function updateWindowPositions(positions) {
  return { type: _actionTypes.UPDATE_WINDOW_POSITIONS, positions };
}

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = {"images":{"EQ_PREAMP_LINE":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAE0lEQVQoU2Pcdfruf4ZRMKRDAAD1lwNjTqcaUQAAAABJRU5ErkJggg==","EQ_GRAPH_LINE_COLORS":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAATCAYAAABRC2cZAAAAR0lEQVQYV2O4rCT9n+F9kOJ/hvfViv8ZHkzSQCE2afxneH/HEJm49Nr0PwOYWPLIAkp0PjL4z1B41uQ/Q9QGnf8MWrPEIAQANWYwvnlToNIAAAAASUVORK5CYII="},"colors":["rgb(0,0,0)","rgb(24,33,41)","rgb(239,49,16)","rgb(206,41,16)","rgb(214,90,0)","rgb(214,102,0)","rgb(214,115,0)","rgb(198,123,8)","rgb(222,165,24)","rgb(214,181,33)","rgb(189,222,41)","rgb(148,222,33)","rgb(41,206,16)","rgb(50,190,16)","rgb(57,181,16)","rgb(49,156,8)","rgb(41,148,0)","rgb(24,132,8)","rgb(255,255,255)","rgb(214,214,222)","rgb(181,189,189)","rgb(160,170,175)","rgb(148,156,165)","rgb(150,150,150)"],"playlistStyle":{"normal":"#00FF00","current":"#FFFFFF","normalbg":"#000000","selectedbg":"#0000FF","font":"Arial"}}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlaylistURL = exports.getAsDataURI = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAsDataURI = exports.getAsDataURI = text => `data:text/html;base64,${window.btoa(text)}`;

// Replaces deprecated "noshade" attribute
const noshadeStyle = {
  height: "2px",
  borderWidth: 0,
  color: "gray",
  backgroundColor: "gray"
};

// TODO: Move <html> tag out to the string creation step in order
// to avoid the warning.
const Playlist = props => _react2.default.createElement(
  "html",
  null,
  _react2.default.createElement(
    "head",
    null,
    _react2.default.createElement("link", { rel: "stylesheet", href: "null" }),
    _react2.default.createElement(
      "style",
      { type: "text/css" },
      `
        body { background: #000040; }
        .para1 { margin-top: -42px; margin-left: 145px; margin-right: 10px; font-family: "font2, Arial"; font-size: 30px; line-height: 35px; text-align: left; color: #E1E1E1; }
        .para2 { margin-top: 15px; margin-left: 15px; margin-right: 50px; font-family: "font1, Arial Black"; font-size: 50px; line-height: 40px; text-align: left; color: #004080; }
        `
    ),
    _react2.default.createElement(
      "title",
      null,
      "Winamp Generated PlayList"
    )
  ),
  _react2.default.createElement(
    "body",
    { bgcolor: "#000080", topmargin: "0", leftmargin: "0", text: "#FFFFFF" },
    _react2.default.createElement(
      "div",
      { align: "center" },
      _react2.default.createElement(
        "div",
        { className: "para2", align: "center" },
        _react2.default.createElement(
          "p",
          null,
          "WINAMP"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "para1", align: "center" },
        _react2.default.createElement(
          "p",
          null,
          "playlist"
        )
      )
    ),
    _react2.default.createElement("hr", {
      align: "left",
      width: "90%",
      size: "1",
      color: "#FFBF00",
      style: noshadeStyle
    }),
    _react2.default.createElement(
      "div",
      { align: "right" },
      _react2.default.createElement(
        "table",
        { border: "0", cellSpacing: "0", cellPadding: "0", width: "98%" },
        _react2.default.createElement(
          "tbody",
          null,
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "small",
                null,
                _react2.default.createElement(
                  "small",
                  null,
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.numberOfTracks
                  ),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    " track in playlist, average track length: "
                  ),
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.averageTrackLength
                  )
                )
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "small",
                null,
                _react2.default.createElement(
                  "small",
                  null,
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    "Playlist length: "
                  ),
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.playlistLengthMinutes
                  ),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    " minutes "
                  ),
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.playlistLengthSeconds
                  ),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    " second "
                  ),
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    "Right-click ",
                    _react2.default.createElement(
                      "a",
                      { href: "./" },
                      "here"
                    ),
                    " to save this HTML file."
                  )
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "blockquote",
      null,
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "font",
          { color: "#FFBF00", face: "Arial" },
          _react2.default.createElement(
            "big",
            null,
            "Playlist files:"
          )
        )
      ),
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "font",
          { face: "Arial", color: "#FFFFFF" },
          _react2.default.createElement(
            "small",
            null,
            props.tracks.map(track => _react2.default.createElement(
              "span",
              { key: track },
              track,
              _react2.default.createElement("br", null)
            ))
          )
        )
      )
    ),
    _react2.default.createElement("hr", {
      align: "left",
      width: "90%",
      size: "1",
      color: "#FFBF00",
      style: noshadeStyle
    })
  )
);

const createPlaylistHTML = props => {
  const node = document.createElement("div");
  (0, _reactDom.render)(_react2.default.createElement(Playlist, props), node);
  return node.innerHTML;
};

const createPlaylistURL = exports.createPlaylistURL = props => getAsDataURI(createPlaylistHTML(props));

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.play = play;
exports.pause = pause;
exports.stop = stop;
exports.nextN = nextN;
exports.next = next;
exports.previous = previous;
exports.seekForward = seekForward;
exports.seekBackward = seekBackward;
exports.setVolume = setVolume;
exports.adjustVolume = adjustVolume;
exports.scrollVolume = scrollVolume;
exports.setBalance = setBalance;
exports.toggleRepeat = toggleRepeat;
exports.toggleShuffle = toggleShuffle;

var _selectors = __webpack_require__(5);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(4);

var _ = __webpack_require__(2);

function playRandomTrack() {
  return (dispatch, getState) => {
    var _getState = getState(),
        _getState$playlist = _getState.playlist;

    const trackOrder = _getState$playlist.trackOrder,
          currentTrack = _getState$playlist.currentTrack;

    if (trackOrder.length === 0) {
      return;
    }
    let nextId;
    do {
      nextId = trackOrder[Math.floor(trackOrder.length * Math.random())];
    } while (nextId === currentTrack && trackOrder.length > 1);
    // TODO: Sigh... Technically, we should detect if we are looping only repeat if we are.
    // I think this would require pre-computing the "random" order of a playlist.
    dispatch({ type: _actionTypes.PLAY_TRACK, id: nextId });
  };
}

function play() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.media.status === _constants.MEDIA_STATUS.STOPPED && state.playlist.curentTrack == null && state.playlist.trackOrder.length === 0) {
      dispatch((0, _.openMediaFileDialog)());
    } else {
      dispatch({ type: _actionTypes.PLAY });
    }
  };
}

function pause() {
  return (dispatch, getState) => {
    const status = getState().media.status;

    dispatch({ type: status === _constants.MEDIA_STATUS.PLAYING ? _actionTypes.PAUSE : _actionTypes.PLAY });
  };
}

function stop() {
  return { type: _actionTypes.STOP };
}

function nextN(n) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.media.shuffle) {
      dispatch(playRandomTrack());
      return;
    }
    const nextTrackId = (0, _selectors.nextTrack)(state, n);
    if (nextTrackId == null) {
      return;
    }
    dispatch({ type: _actionTypes.PLAY_TRACK, id: nextTrackId });
  };
}

function next() {
  return nextN(1);
}

function previous() {
  return nextN(-1);
}

function seekForward(seconds) {
  return function (dispatch, getState) {
    var _getState$media = getState().media;
    const timeElapsed = _getState$media.timeElapsed,
          length = _getState$media.length;

    const newTimeElapsed = timeElapsed + seconds;
    dispatch({
      type: _actionTypes.SEEK_TO_PERCENT_COMPLETE,
      percent: newTimeElapsed / length * 100
    });
  };
}

function seekBackward(seconds) {
  return seekForward(-seconds);
}

function setVolume(volume) {
  return {
    type: _actionTypes.SET_VOLUME,
    volume: (0, _utils.clamp)(volume, 0, 100)
  };
}

function adjustVolume(volumeDiff) {
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume;
    return dispatch(setVolume(currentVolume + volumeDiff));
  };
}

function scrollVolume(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume;
    // Using pixels as percentage difference here is a bit arbirary, but... oh well.
    return dispatch(setVolume(currentVolume + e.deltaY));
  };
}

function setBalance(balance) {
  balance = (0, _utils.clamp)(balance, -100, 100);
  // The balance clips to the center
  if (Math.abs(balance) < 25) {
    balance = 0;
  }
  return {
    type: _actionTypes.SET_BALANCE,
    balance
  };
}

function toggleRepeat() {
  return { type: _actionTypes.TOGGLE_REPEAT };
}

function toggleShuffle() {
  return { type: _actionTypes.TOGGLE_SHUFFLE };
}

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTracksFromReferences = addTracksFromReferences;
exports.loadFilesFromReferences = loadFilesFromReferences;
exports.setSkinFromArrayBuffer = setSkinFromArrayBuffer;
exports.setSkinFromFileReference = setSkinFromFileReference;
exports.setSkinFromUrl = setSkinFromUrl;
exports.openEqfFileDialog = openEqfFileDialog;
exports.openMediaFileDialog = openMediaFileDialog;
exports.openSkinFileDialog = openSkinFileDialog;
exports.fetchMediaDuration = fetchMediaDuration;
exports.loadMediaFiles = loadMediaFiles;
exports.loadMediaFile = loadMediaFile;
exports.fetchMediaTags = fetchMediaTags;
exports.setEqFromFileReference = setEqFromFileReference;
exports.downloadPreset = downloadPreset;
exports.downloadHtmlPlaylist = downloadHtmlPlaylist;

var _winampEqf = __webpack_require__(243);

var _constants = __webpack_require__(4);

var _utils = __webpack_require__(6);

var _fileUtils = __webpack_require__(70);

var _skinParser = __webpack_require__(246);

var _skinParser2 = _interopRequireDefault(_skinParser);

var _selectors = __webpack_require__(5);

var _actionTypes = __webpack_require__(3);

var _loadQueue = __webpack_require__(248);

var _loadQueue2 = _interopRequireDefault(_loadQueue);

var _playlist = __webpack_require__(115);

var _equalizer = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lower is better
const DURATION_VISIBLE_PRIORITY = 5;
const META_DATA_VISIBLE_PRIORITY = 10;
const DURATION_PRIORITY = 15;
const META_DATA_PRIORITY = 20;

const loadQueue = new _loadQueue2.default({ threads: 4 });

function addTracksFromReferences(fileReferences, loadStyle, atIndex) {
  const tracks = Array.from(fileReferences).map(file => ({
    blob: file,
    defaultName: file.name
  }));
  return loadMediaFiles(tracks, loadStyle, atIndex);
}

const SKIN_FILENAME_MATCHER = new RegExp("(wsz|zip)$", "i");
const EQF_FILENAME_MATCHER = new RegExp("eqf$", "i");
function loadFilesFromReferences(fileReferences, loadStyle = _constants.LOAD_STYLE.PLAY, atIndex = null) {
  return dispatch => {
    if (fileReferences.length < 1) {
      return;
    } else if (fileReferences.length === 1) {
      const fileReference = fileReferences[0];
      if (SKIN_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setSkinFromFileReference(fileReference));
        return;
      } else if (EQF_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setEqFromFileReference(fileReference));
        return;
      }
    }
    dispatch(addTracksFromReferences(fileReferences, loadStyle, atIndex));
  };
}

function setSkinFromArrayBuffer(arrayBuffer) {
  return async dispatch => {
    dispatch({ type: _actionTypes.LOADING });
    try {
      const skinData = await (0, _skinParser2.default)(arrayBuffer);
      dispatch({
        type: _actionTypes.SET_SKIN_DATA,
        skinImages: skinData.images,
        skinColors: skinData.colors,
        skinPlaylistStyle: skinData.playlistStyle,
        skinCursors: skinData.cursors,
        skinRegion: skinData.region,
        skinGenLetterWidths: skinData.genLetterWidths
      });
    } catch (e) {
      console.error(e);
      dispatch({ type: _actionTypes.LOADED });
      alert(`Failed to parse skin`);
    }
  };
}

function setSkinFromFileReference(skinFileReference) {
  return async dispatch => {
    dispatch({ type: _actionTypes.LOADING });
    const arrayBuffer = await (0, _fileUtils.genArrayBufferFromFileReference)(skinFileReference);
    dispatch(setSkinFromArrayBuffer(arrayBuffer));
  };
}

function setSkinFromUrl(url) {
  return async dispatch => {
    dispatch({ type: _actionTypes.LOADING });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(setSkinFromArrayBuffer(response.arrayBuffer()));
    } catch (e) {
      console.error(e);
      dispatch({ type: _actionTypes.LOADED });
      alert(`Failed to download skin from ${url}`);
    }
  };
}

// This function is private, since Winamp consumers can provide means for
// opening files via other methods. Only use the file type specific
// versions below, since they can defer to the user-defined behavior.
function _openFileDialog(accept) {
  return async dispatch => {
    const fileReferences = await (0, _fileUtils.promptForFileReferences)({ accept });
    dispatch(loadFilesFromReferences(fileReferences));
  };
}

function openEqfFileDialog() {
  return _openFileDialog(".eqf");
}

function openMediaFileDialog() {
  return _openFileDialog();
}

function openSkinFileDialog() {
  return _openFileDialog(".zip, .wsz");
}

function fetchMediaDuration(url, id) {
  return (dispatch, getState) => {
    loadQueue.push(async () => {
      try {
        const duration = await (0, _fileUtils.genMediaDuration)(url);
        dispatch({ type: _actionTypes.SET_MEDIA_DURATION, duration, id });
      } catch (e) {
        // TODO: Should we update the state to indicate that we don't know the length?
      }
    }, () => {
      const trackIsVisible = (0, _selectors.getTrackIsVisibleFunction)(getState());
      return trackIsVisible(id) ? DURATION_VISIBLE_PRIORITY : DURATION_PRIORITY;
    });
  };
}

function loadMediaFiles(tracks, loadStyle = null, atIndex = 0) {
  return dispatch => {
    if (loadStyle === _constants.LOAD_STYLE.PLAY) {
      // I'm the worst. It just so happens that in every case that we autoPlay,
      // we should also clear all tracks.
      dispatch((0, _playlist.removeAllTracks)());
    }
    tracks.forEach((track, i) => {
      const priority = i === 0 && loadStyle != null ? loadStyle : null;
      dispatch(loadMediaFile(track, priority, atIndex + i));
    });
  };
}

function loadMediaFile(track, priority = null, atIndex = 0) {
  return dispatch => {
    const id = (0, _utils.uniqueId)();
    const url = track.url,
          blob = track.blob,
          defaultName = track.defaultName,
          metaData = track.metaData,
          duration = track.duration;

    let canonicalUrl = url;
    if (canonicalUrl == null) {
      if (blob == null) {
        throw new Error("Expected track to have either a blob or a url");
      }
      canonicalUrl = URL.createObjectURL(track.blob);
    }
    dispatch({
      type: _actionTypes.ADD_TRACK_FROM_URL,
      url: canonicalUrl,
      duration: track.duration,
      defaultName,
      id,
      atIndex
    });
    switch (priority) {
      case _constants.LOAD_STYLE.BUFFER:
        dispatch({ type: _actionTypes.BUFFER_TRACK, id });
        break;
      case _constants.LOAD_STYLE.PLAY:
        dispatch({ type: _actionTypes.PLAY_TRACK, id });
        break;
      default:
        // If we're not going to load this right away,
        // we should set duration on our own
        if (duration != null) {
          dispatch({ type: _actionTypes.SET_MEDIA_DURATION, duration, id });
        } else {
          dispatch(fetchMediaDuration(canonicalUrl, id));
        }
    }

    if (metaData != null) {
      const artist = metaData.artist,
            title = metaData.title;

      dispatch({ type: _actionTypes.SET_MEDIA_TAGS, artist, title, id });
    } else if (blob != null) {
      // Blobs can be loaded quickly
      dispatch(fetchMediaTags(blob, id));
    } else {
      dispatch(queueFetchingMediaTags(id));
    }
  };
}

function queueFetchingMediaTags(id) {
  return (dispatch, getState) => {
    const track = (0, _selectors.getTracks)(getState())[id];
    return loadQueue.push(() => dispatch(fetchMediaTags(track.url, id)), () => {
      const trackIsVisible = (0, _selectors.getTrackIsVisibleFunction)(getState());
      return trackIsVisible(track.id) ? META_DATA_VISIBLE_PRIORITY : META_DATA_PRIORITY;
    });
  };
}

function fetchMediaTags(file, id) {
  return async dispatch => {
    dispatch({ type: _actionTypes.MEDIA_TAG_REQUEST_INITIALIZED, id });
    try {
      const data = await (0, _fileUtils.genMediaTags)(file);
      // There's more data here, but we don't have a use for it yet:
      // https://github.com/aadsm/jsmediatags#shortcuts
      var _data$tags = data.tags;
      const artist = _data$tags.artist,
            title = _data$tags.title,
            picture = _data$tags.picture;

      let albumArtUrl = null;
      if (picture) {
        const byteArray = new Uint8Array(picture.data);
        const blob = new Blob([byteArray], { type: picture.type });
        albumArtUrl = URL.createObjectURL(blob);
      }
      dispatch({ type: _actionTypes.SET_MEDIA_TAGS, artist, title, albumArtUrl, id });
    } catch (e) {
      dispatch({ type: _actionTypes.MEDIA_TAG_REQUEST_FAILED, id });
    }
  };
}

function setEqFromFileReference(fileReference) {
  return async dispatch => {
    const arrayBuffer = await (0, _fileUtils.genArrayBufferFromFileReference)(fileReference);
    const eqf = (0, _winampEqf.parser)(arrayBuffer);
    const preset = eqf.presets[0];

    dispatch((0, _equalizer.setPreamp)((0, _utils.normalize)(preset.preamp)));
    _constants.BANDS.forEach(band => {
      dispatch((0, _equalizer.setEqBand)(band, (0, _utils.normalize)(preset[`hz${band}`])));
    });
  };
}

function downloadPreset() {
  return (dispatch, getState) => {
    const state = getState();
    const data = (0, _selectors.getEqfData)(state);
    const arrayBuffer = (0, _winampEqf.creator)(data);
    const base64 = (0, _utils.base64FromArrayBuffer)(arrayBuffer);
    const dataURI = `data:application/zip;base64,${base64}`;
    (0, _utils.downloadURI)(dataURI, "entry.eqf");
  };
}

function downloadHtmlPlaylist() {
  return (dispatch, getState) => {
    const uri = (0, _selectors.getPlaylistURL)(getState());
    (0, _utils.downloadURI)(uri, "Winamp Playlist.html");
  };
}

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(244);
var creator = __webpack_require__(245);

module.exports = {
  parser: parser,
  creator: creator
};


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(113);

function parser(arrayBuffer) {
  var data = {};
  var i = 0;
  var arr = new Int8Array(arrayBuffer);
  // Parse header
  data.type = String.fromCharCode.apply(
    null,
    arr.slice(i, CONSTANTS.HEADER.length)
  );
  if (data.type !== CONSTANTS.HEADER) {
    throw new Error("Invalid .eqf file.");
  }
  i += CONSTANTS.HEADER.length;
  // Skip "<ctrl-z>!--"
  i += 4;
  // Get the presets
  data.presets = [];
  while (i < arr.length) {
    var preset = {};
    // Get the name
    var nameStart = i;
    var nameEnd = nameStart + 257; // Str is fixed length
    // Str is null terminated
    while (arr[i] !== 0 && i <= nameEnd) {
      i++;
    }
    preset.name = String.fromCharCode.apply(null, arr.slice(nameStart, i));
    i = nameEnd; // Skip over any unused bytes

    // Get the levels
    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      preset[valueName] = 64 - arr[i++]; // Adjust for inverse values
    });
    data.presets.push(preset);
  }
  return data;
}

module.exports = parser;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(113);

var FILL_SIZE = 4;
var PRESET_LENGTH = 257;

function creator(data) {
  var buffer = [];
  for (var i = 0; i < CONSTANTS.HEADER.length; i++) {
    buffer.push(CONSTANTS.HEADER.charCodeAt(i));
  }
  buffer.push(26); // <ctrl-z>
  var ending = "!--";
  for (var i = 0; i < ending.length; i++) {
    buffer.push(ending.charCodeAt(i));
  }
  if (!data.presets) {
    throw new Error("Eqf data is missing presets");
  }
  data.presets.forEach(function(preset) {
    var k = 0;
    for (; k < preset.name.length; k++) {
      buffer.push(preset.name.charCodeAt(k));
    }
    for (; k < PRESET_LENGTH; k++) {
      buffer.push(0);
    }

    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      buffer.push(64 - preset[valueName]); // Adjust for inverse values
    });
  });
  return new Uint8Array(buffer).buffer;
}

module.exports = creator;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _skinSprites = __webpack_require__(114);

var _skinSprites2 = _interopRequireDefault(_skinSprites);

var _regionParser = __webpack_require__(247);

var _regionParser2 = _interopRequireDefault(_regionParser);

var _constants = __webpack_require__(4);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getJSZip = () => {
  return new Promise(resolve => {
    __webpack_require__.e/* require.ensure */(3).then((require => {
      resolve(__webpack_require__(140));
    }).bind(null, __webpack_require__)).catch(e => {
      console.error("Error loading JSZip", e);
    });
  });
};

const shallowMerge = objs => objs.reduce((prev, img) => Object.assign(prev, img), {});

const CURSORS = ["CLOSE", "EQCLOSE", "EQNORMAL", "EQSLID", "EQTITLE", "MAINMENU", "MMENU", "MIN", "NORMAL", "PCLOSE", "PNORMAL", "POSBAR", "PSIZE", "PTBAR", "PVSCROLL", "PWINBUT", "PWSNORM", "PWSSIZE", "SONGNAME", "TITLEBAR", "VOLBAL", "WINBUT", "WSNORMAL", "WSPOSBAR"
/*
 * > There are usually 4 more cursors in the skins: volbar.cur, wsclose.cur,
 * > wswinbut.cur, wsmin.cur, but they are never used, at least in the last
 * > versions of winamp, so there's no need of including them. The cursors
 * > shown when the mouse is over the app-buttons are the same in normal and
 * > winshade mode, except for the main menu button. You can make animated
 * > cursors, but you have to name them with the extension .cur (animated
 * > cursors are usually .ani files).
 *
 * -- Skinners Atlas
 *
 * "VOLBAR",
 * "WSCLOSE",
 * "WSWINBUT",
 * "WSMIN",
 *
 */
];

const _genImgFromBlob = async blob => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    // Schedule cleanup of object url?
    // Maybe on next tick, or with requestidlecallback
    resolve(img);
  };
  img.onerror = () => reject("Failed to decode image");
  img.src = URL.createObjectURL(blob);
});

const genImgFromBlob = async blob => {
  if (window.createImageBitmap) {
    try {
      // Use this faster native browser API if available.
      return await window.createImageBitmap(blob);
    } catch (e) {
      console.warn("Encountered an error with createImageBitmap. Falling back to Image approach.");
      // There are some bugs in the new API. In case something goes wrong, we call fall back.
      return _genImgFromBlob(blob);
    }
  }
  return _genImgFromBlob(blob);
};

async function genFileFromZip(zip, fileName, ext, mode) {
  const regex = new RegExp(`^(.*/)?${fileName}(\.${ext})?$`, "i");
  const files = zip.file(regex);
  if (!files.length) {
    return null;
  }
  // Return a promise (awaitable).
  return {
    contents: await files[0].async(mode),
    name: files[0].name
  };
}

function getSpriteUrisFromImg(img, sprites) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  return sprites.reduce((images, sprite) => {
    canvas.height = sprite.height;
    canvas.width = sprite.width;

    context.drawImage(img, -sprite.x, -sprite.y);
    const image = canvas.toDataURL();
    images[sprite.name] = image;
    return images;
  }, {});
}

async function genImgFromFilename(zip, fileName) {
  // Winamp only supports .bmp images, but WACUP set a precidence of supporting
  // .png as well to reduce size. Since we care about size as well, we follow
  // suit. Our default skin uses .png to save 14kb.
  const file = await genFileFromZip(zip, fileName, "(png|bmp)", "blob");
  if (!file) {
    return null;
  }

  const mimeType = `image/${(0, _utils.getFileExtension)(file.name) || "*"}`;
  // The spec for createImageBitmap() says the browser should try to sniff the
  // mime type, but it looks like Firefox does not. So we specify it here
  // explicitly.
  const typedBlob = new Blob([file.contents], { type: mimeType });
  return genImgFromBlob(typedBlob);
}

async function genSpriteUrisFromFilename(zip, fileName) {
  const img = await genImgFromFilename(zip, fileName);
  if (img == null) {
    return {};
  }
  return getSpriteUrisFromImg(img, _skinSprites2.default[fileName]);
}

async function getCursorFromFilename(zip, fileName) {
  const file = await genFileFromZip(zip, fileName, "CUR", "base64");
  return file && `data:image/x-win-bitmap;base64,${file.contents}`;
}

async function genPlaylistStyle(zip) {
  const pledit = await genFileFromZip(zip, "PLEDIT", "txt", "text");
  const data = pledit && (0, _utils.parseIni)(pledit.contents).text;
  if (!data) {
    // Corrupt or missing PLEDIT.txt file.
    return _constants.DEFAULT_SKIN.playlistStyle;
  }

  // Winamp seems to permit colors that contain too many characters.
  // For compatibility with existing skins, we normalize them here.
  ["normal", "current", "normalbg", "selectedbg"].forEach(colorKey => {
    let color = data[colorKey];
    if (!color) {
      return;
    }
    if (color[0] !== "#") {
      color = `#${color}`;
    }
    data[colorKey] = color.slice(0, 7);
  });

  return _extends({}, _constants.DEFAULT_SKIN.playlistStyle, data);
}

async function genVizColors(zip) {
  const viscolor = await genFileFromZip(zip, "VISCOLOR", "txt", "text");
  return viscolor ? (0, _utils.parseViscolors)(viscolor.contents) : _constants.DEFAULT_SKIN.colors;
}

async function genImages(zip) {
  const imageObjs = await Promise.all(Object.keys(_skinSprites2.default).map(async fileName => genSpriteUrisFromFilename(zip, fileName)));
  // Merge all the objects into a single object. Tests assert that sprite keys are unique.
  return shallowMerge(imageObjs);
}
async function genCursors(zip) {
  const cursorObjs = await Promise.all(CURSORS.map(async cursorName => ({
    [cursorName]: await getCursorFromFilename(zip, cursorName)
  })));
  return shallowMerge(cursorObjs);
}

async function genRegion(zip) {
  const region = await genFileFromZip(zip, "REGION", "txt", "text");
  return region ? (0, _regionParser2.default)(region.contents) : {};
}

async function genGenTextSprites(zip) {
  const img = await genImgFromFilename(zip, "GEN");
  if (img == null) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const getLetters = (y, prefix) => {
    const getColorAt = x => context.getImageData(x, y, 1, 1).data.join(",");

    let x = 1;
    const backgroundColor = getColorAt(0);

    const height = 7;
    return _constants.LETTERS.map(letter => {
      let nextBackground = x;
      while (getColorAt(nextBackground) !== backgroundColor && nextBackground < canvas.width) {
        nextBackground++;
      }
      const width = nextBackground - x;
      const name = `${prefix}_${letter}`;
      const sprite = { x, y, height, width, name };
      x = nextBackground + 1;
      return sprite;
    });
  };

  const letterWidths = {};
  const sprites = [...getLetters(88, "GEN_TEXT_SELECTED"), ...getLetters(96, "GEN_TEXT")];
  sprites.forEach(sprite => {
    letterWidths[sprite.name] = sprite.width;
  });
  return [letterWidths, getSpriteUrisFromImg(img, sprites)];
}

// A promise that, given an array buffer  returns a skin style object
async function skinParser(zipFileBuffer) {
  const JSZip = await getJSZip();
  const zip = await JSZip.loadAsync(zipFileBuffer);

  var _ref = await Promise.all([genVizColors(zip), genPlaylistStyle(zip), genImages(zip), genCursors(zip), genRegion(zip), genGenTextSprites(zip)]),
      _ref2 = _slicedToArray(_ref, 6);

  const colors = _ref2[0],
        playlistStyle = _ref2[1],
        images = _ref2[2],
        cursors = _ref2[3],
        region = _ref2[4],
        genTextSprites = _ref2[5];

  var _ref3 = genTextSprites || [null, {}],
      _ref4 = _slicedToArray(_ref3, 2);

  const genLetterWidths = _ref4[0],
        genTextImages = _ref4[1];


  return {
    colors,
    playlistStyle,
    images: _extends({}, images, genTextImages),
    genLetterWidths,
    cursors,
    region
  };
}

exports.default = skinParser;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointPairs = pointPairs;
exports.default = regionParser;

var _utils = __webpack_require__(6);

function pointPairs(arr) {
  const pairedValues = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairedValues.push(`${arr[i]},${arr[i + 1]}`);
  }
  return pairedValues;
}

function regionParser(regionStr) {
  const iniData = (0, _utils.parseIni)(regionStr);
  const data = {};
  Object.keys(iniData).forEach(section => {
    var _iniData$section = iniData[section];
    const numpoints = _iniData$section.numpoints,
          pointlist = _iniData$section.pointlist;

    if (!numpoints || !pointlist) {
      return;
    }
    const pointCounts = numpoints.split(/\s*,\s*/).filter(val => val !== "");
    const points = pointPairs(
    // points can be separated by spaces, or by commas
    pointlist.split(/\s*[, ]\s*/).filter(val => val !== ""));
    let pointIndex = 0;
    const polygons = pointCounts.map(numStr => {
      const num = Number(numStr);
      const polygon = points.slice(pointIndex, pointIndex + num).join(" ");
      if (!polygon.length) {
        // It's possible that the skin author specified more polygons than provided points.
        return null;
      }
      pointIndex += num;
      return polygon;
    });
    const validPolygons = polygons.filter(polygon => polygon != null);
    if (validPolygons.length) {
      data[section] = validPolygons;
    }
  });

  return data;
}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invariant = __webpack_require__(69);

var _invariant2 = _interopRequireDefault(_invariant);

var _tinyqueue = __webpack_require__(249);

var _tinyqueue2 = _interopRequireDefault(_tinyqueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Push promises onto a queue with a priority.
// Run a given number of jobs in parallel
// Useful for prioritizing network requests
class LoadQueue {
  constructor({ threads }) {
    // TODO: Consider not running items with zero priority
    // Priority is a function so that items can change their priority between
    // when their priority is evaluated.
    // For example, we might add a track to the playlist and then scroll to/away
    // from it before it gets processed.
    this._queue = new _tinyqueue2.default([], (a, b) => a.priority() - b.priority());
    this._availableThreads = threads;
  }

  push(task, priority) {
    const t = { task, priority };
    this._queue.push(t);
    // Wait until the next event loop to pick a task to run. This way, we can
    // enqueue multiple items in an event loop, and be sure they will be run in
    // priority order.
    setTimeout(() => {
      this._run();
    }, 0);
    return () => {
      // TODO: Could return a boolean representing if the task has already been
      // kicked off.
      this._queue = this._queue.filter(t1 => t1 !== t);
    };
  }

  _run() {
    while (this._availableThreads > 0) {
      if (this._queue.length === 0) {
        return;
      }
      this._availableThreads--;
      const t = this._queue.pop();
      const promise = t.task();
      (0, _invariant2.default)(typeof promise.then === "function", `LoadQueue only supports loading Promises. Got ${promise}`);
      promise.then(() => {
        this._availableThreads++;
        this._run();
      });
    }
  }
}
exports.default = LoadQueue;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TinyQueue;
module.exports.default = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContextMenu = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MilkdropContextMenu = props => _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement(_ContextMenu.Node, {
    onClick: props.toggleFullscreen,
    label: "Fullscreen",
    hotkey: "Alt+Enter"
  }),
  _react2.default.createElement(_ContextMenu.Node, {
    onClick: props.toggleDesktop,
    checked: props.desktopMode,
    label: "Desktop Mode",
    hotkey: "Alt+D"
  }),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.close, label: "Quit" })
);

exports.default = MilkdropContextMenu;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Desktop extends _react2.default.Component {
  componentWillUnmount() {
    document.body.removeChild(this._desktopNode);
    this._desktopNode = null;
  }

  _getNode() {
    if (this._desktopNode == null) {
      this._desktopNode = document.createElement("div");
      this._desktopNode.classList.add("webamp-desktop");
      document.body.appendChild(this._desktopNode);
    }
    return this._desktopNode;
  }

  render() {
    return _reactDom2.default.createPortal(this.props.children, this._getNode());
  }
}
exports.default = Desktop;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
function getRandomValue(arr) {
  return arr[getRandomIndex(arr)];
}

function getLast(arr) {
  return arr[arr.length - 1];
}

async function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      resolve(e.target.result);
    };
    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsText(file);
  });
}

/**
 * Track a collection of async loaded presets
 *
 * Presets can be changed via `next`, `previous` or `selectIndex`. In each case,
 * a promise is returned. If the promise resolves to `null` it means the
 * selection was canceled by a subsequent request before it could be fulfilled.
 * If the request is successful, the promise resolves to the selected preset.
 *
 * We assume a model where some portion of the preset are supplied at initialization
 * and the remainder can be loaded async via the function `getRest`.
 */
class Presets {
  constructor({ keys, initialPresets, getRest, randomize = true }) {
    this._keys = keys; // Alphabetical list of preset names
    this._presets = initialPresets; // Presets indexed by name
    this._getRest = getRest; // An async function to get the rest of the presets
    this._history = []; // Indexes into _keys

    this._randomize = randomize;

    // Initialize with a key that we already have.
    const avaliableKeys = Object.keys(initialPresets);
    const currentKey = randomize ? getRandomValue(avaliableKeys) : avaliableKeys[0];
    this._currentIndex = this._keys.indexOf(currentKey);
    this._history.push(this._currentIndex);
  }

  toggleRandomize() {
    this._randomize = !this._randomize;
  }

  setRandomize(val) {
    this._randomize = val;
  }

  addPresets(presets) {
    const startIdx = this._keys.length;
    this._keys = this._keys.concat(Object.keys(presets));
    const endIndx = this._keys.length;

    this._presets = Object.assign(this._presets, presets);

    return [startIdx, endIndx];
  }

  async next() {
    let idx;
    if (this._randomize || this._history.length === 0) {
      idx = getRandomIndex(this._keys);
    } else {
      idx = (getLast(this._history) + 1) % this._keys.length;
    }
    this._history.push(idx);
    return this._selectIndex(idx);
  }

  async previous() {
    if (this._history.length > 1) {
      this._history.pop();
      return this._selectIndex(getLast(this._history));
    }
    // We are at the very beginning. There is no "previous" preset.
    return Promise.resolve();
  }

  async selectIndex(idx) {
    // The public version of this method must add to the history
    this._history.push(idx);
    return this._selectIndex(idx);
  }

  async _convertPreset(file) {
    return new Promise((resolve, reject) => {
      __webpack_require__.e/* require.ensure */(2).then((async require => {
        var _require = __webpack_require__(141);

        const convertPreset = _require.convertPreset;

        try {
          resolve(convertPreset(file, "https://p2tpeb5v8b.execute-api.us-east-2.amazonaws.com/default/milkdropShaderConverter"));
        } catch (e) {
          reject(e);
        }
      }).bind(null, __webpack_require__)).catch(reject);
    });
  }

  async _selectIndex(idx) {
    const preset = this._presets[this._keys[idx]];
    if (!preset) {
      const rest = await this._getRest();
      this._presets = Object.assign(this._presets, rest);
      if (getLast(this._history) !== idx) {
        // This selection must be obsolete. Return null so that
        // the caller knows this request got canceled.
        return null;
      }
    }
    if (preset && preset.file) {
      try {
        const fileContents = await readFileAsText(preset.file);
        const convertedPreset = await this._convertPreset(fileContents);
        this._presets[this._keys[idx]] = convertedPreset;
      } catch (e) {
        console.error(e);
        alert(`Unable to convert MilkDrop preset ${this._keys[idx]}`);
      }
    }
    this._currentIndex = idx;
    return this.getCurrent();
  }

  getKeys() {
    return this._keys;
  }

  getCurrentIndex() {
    return this._currentIndex;
  }

  getCurrent() {
    // #matryoshka
    return this._presets[this._keys[this._currentIndex]];
  }
}
exports.default = Presets;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropTarget = __webpack_require__(71);

var _DropTarget2 = _interopRequireDefault(_DropTarget);

var _PresetOverlay = __webpack_require__(254);

var _PresetOverlay2 = _interopRequireDefault(_PresetOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const USER_PRESET_TRANSITION_SECONDS = 5.7;
const PRESET_TRANSITION_SECONDS = 2.7;
const MILLISECONDS_BETWEEN_PRESET_TRANSITIONS = 15000;

class Milkdrop extends _react2.default.Component {
  constructor(props) {
    super(props);

    this._handleFocusedKeyboardInput = e => {
      switch (e.keyCode) {
        case 32:
          // spacebar
          this._nextPreset(USER_PRESET_TRANSITION_SECONDS);
          break;
        case 8:
          // backspace
          this._prevPreset(0);
          break;
        case 72:
          // H
          this._nextPreset(0);
          break;
        case 82:
          // R
          this.props.presets.toggleRandomize();
          break;
        case 76:
          // L
          this.setState({ presetOverlay: !this.state.presetOverlay });
          e.stopPropagation();
          break;
        case 145: // scroll lock
        case 125:
          // F14 (scroll lock for OS X)
          this.presetCycle = !this.presetCycle;
          this._restartCycling();
          break;
      }
    };

    this.state = {
      isFullscreen: false,
      presetOverlay: false
    };
  }

  async componentDidMount() {
    this.visualizer = this.props.butterchurn.createVisualizer(this.props.analyser.context, this._canvasNode, {
      width: this.props.width,
      height: this.props.height,
      meshWidth: 32,
      meshHeight: 24,
      pixelRatio: window.devicePixelRatio || 1
    });
    this.visualizer.connectAudio(this.props.analyser);
    this.presetCycle = true;
    if (this.props.initialPreset) {
      this.visualizer.loadPreset(this.props.initialPreset, 0);
    } else {
      this.selectPreset(this.props.presets.getCurrent(), 0);
    }

    // Kick off the animation loop
    const loop = () => {
      if (this.props.playing && this.props.isEnabledVisualizer) {
        this.visualizer.render();
      }
      this._animationFrameRequest = window.requestAnimationFrame(loop);
    };
    loop();

    this._unsubscribeFocusedKeyDown = this.props.onFocusedKeyDown(this._handleFocusedKeyboardInput);
  }

  componentWillUnmount() {
    this._pauseViz();
    this._stopCycling();
    if (this._unsubscribeFocusedKeyDown) {
      this._unsubscribeFocusedKeyDown();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
      this.visualizer.setRendererSize(this.props.width, this.props.height);
    }
  }

  _pauseViz() {
    if (this._animationFrameRequest) {
      window.cancelAnimationFrame(this._animationFrameRequest);
      this._animationFrameRequest = null;
    }
  }

  _stopCycling() {
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
      this.cycleInterval = null;
    }
  }

  _restartCycling() {
    this._stopCycling();

    if (this.presetCycle) {
      this.cycleInterval = setInterval(() => {
        this._nextPreset(PRESET_TRANSITION_SECONDS);
      }, MILLISECONDS_BETWEEN_PRESET_TRANSITIONS);
    }
  }

  _addNewPresets(files) {
    const presetKeys = this.props.presets.getKeys();
    const presets = {};
    const presetIndices = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name;
      const presetName = fileName.substring(fileName, fileName.length - 5); // remove .milk
      const presetIdx = presetKeys.indexOf(presetName);
      if (presetIdx >= 0) {
        presetIndices.push(presetIdx);
      } else {
        presets[presetName] = { file };
      }
    }

    if (Object.keys(presets).length > 0) {
      const filePresetIndices = this.props.presets.addPresets(presets);
      for (let j = filePresetIndices[0]; j < filePresetIndices[1]; j++) {
        presetIndices.push(j);
      }
    }

    return presetIndices;
  }

  async _handleDrop(e) {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const milkFiles = Array.from(files).filter(file => file.name.endsWith(".milk"));
      if (milkFiles.length === 0) {
        alert("Visualizer only supports .milk files");
        return;
      }

      const presetIndices = this._addNewPresets(milkFiles);
      this.selectPreset((await this.props.presets.selectIndex(presetIndices[0])), PRESET_TRANSITION_SECONDS);
    }
  }

  async _nextPreset(blendTime) {
    this.selectPreset((await this.props.presets.next()), blendTime);
  }

  async _prevPreset(blendTime) {
    this.selectPreset((await this.props.presets.previous()), blendTime);
  }

  selectPreset(preset, blendTime = 0) {
    if (preset != null) {
      this.visualizer.loadPreset(preset, blendTime);
      this._restartCycling();
      // TODO: Kinda weird that we use the passed preset for the visualizer,
      // but set state to the current. Maybe we should just always use the curent..
      this.setState({ currentPreset: this.props.presets.getCurrentIndex() });
    }
  }

  closePresetOverlay() {
    this.setState({ presetOverlay: false });
  }

  render() {
    return _react2.default.createElement(
      _DropTarget2.default,
      { id: "milkdrop-window", handleDrop: e => this._handleDrop(e) },
      this.state.presetOverlay && _react2.default.createElement(_PresetOverlay2.default, {
        width: this.props.width,
        height: this.props.height,
        presetKeys: this.props.presets.getKeys(),
        currentPreset: this.state.currentPreset,
        onFocusedKeyDown: listener => this.props.onFocusedKeyDown(listener),
        selectPreset: async idx => {
          this.selectPreset((await this.props.presets.selectIndex(idx)), 0);
        },
        closeOverlay: () => this.closePresetOverlay()
      }),
      _react2.default.createElement("canvas", {
        height: this.props.height,
        width: this.props.width,
        style: {
          height: "100%",
          width: "100%",
          display: this.props.isEnabledVisualizer ? "block" : "none"
        },
        ref: node => this._canvasNode = node
      })
    );
  }
}
exports.default = Milkdrop;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PresetOverlay extends _react2.default.Component {
  constructor(props) {
    super(props);

    this._handleFocusedKeyboardInput = e => {
      switch (e.keyCode) {
        case 38:
          // up arrow
          this.setState({ presetIdx: Math.max(this.state.presetIdx - 1, 0) });
          e.stopPropagation();
          break;
        case 40:
          // down arrow
          this.setState({
            presetIdx: Math.min(this.state.presetIdx + 1, this.props.presetKeys.length - 1)
          });
          e.stopPropagation();
          break;
        case 13:
          // enter
          this.props.selectPreset(this.state.presetIdx);
          e.stopPropagation();
          break;
        case 27:
          // escape
          this.props.closeOverlay();
          e.stopPropagation();
          break;
      }
    };

    this.state = { presetIdx: Math.max(props.currentPreset, 0) };
  }

  componentDidMount() {
    this._unsubscribeFocusedKeyDown = this.props.onFocusedKeyDown(this._handleFocusedKeyboardInput);
  }

  componentWillUnmount() {
    if (this._unsubscribeFocusedKeyDown) {
      this._unsubscribeFocusedKeyDown();
    }
  }

  render() {
    if (!this.props.presetKeys) {
      return _react2.default.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            color: "white",
            background: "rgba(0.33, 0.33, 0.33, 0.33)"
          }
        },
        _react2.default.createElement(
          "span",
          null,
          "Loading presets"
        )
      );
    }

    // display highlighted preset in the middle if possible
    const numPresets = this.props.presetKeys.length;
    let presetListLen = Math.floor(this.props.height / 20);
    presetListLen = Math.min(Math.max(presetListLen, 3), numPresets);
    presetListLen = presetListLen % 2 ? presetListLen : presetListLen - 1;
    const halfPresetListLen = Math.floor(presetListLen / 2);
    let startIdx = Math.max(this.state.presetIdx - halfPresetListLen, 0);
    let endIdx = Math.min(startIdx + presetListLen, numPresets);
    if (endIdx >= numPresets) {
      startIdx = Math.max(endIdx - presetListLen, 0);
      endIdx = Math.min(startIdx + presetListLen, numPresets);
    }
    const presets = this.props.presetKeys.slice(startIdx, endIdx);
    const presetElms = presets.map((presetName, i) => {
      let color;
      if (i + startIdx === this.props.currentPreset) {
        if (i + startIdx === this.state.presetIdx) {
          color = "#FFCC22";
        } else {
          color = "#CCFF03";
        }
      } else if (i + startIdx === this.state.presetIdx) {
        color = "#FF5050";
      } else {
        color = "#CCCCCC";
      }
      return _react2.default.createElement(
        "li",
        { key: i, style: { color } },
        presetName
      );
    });

    return _react2.default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          padding: "15px 10px 0 10px"
        }
      },
      _react2.default.createElement(
        "div",
        {
          style: {
            display: "inline-block",
            width: `${this.props.width - 20}px`,
            maxHeight: `${this.props.height - 15}px`,
            whiteSpace: "nowrap",
            overflow: "hidden",
            background: "rgba(0, 0, 0, 0.815)",
            fontSize: "12px"
          }
        },
        _react2.default.createElement(
          "ul",
          { style: { listStyleType: "none", padding: 0, margin: 0 } },
          presetElms
        )
      )
    );
  }
}

exports.default = PresetOverlay;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const Background = props => {
  const innerRef = props.innerRef,
        restProps = _objectWithoutProperties(props, ["innerRef"]);

  return _react2.default.createElement("div", _extends({
    ref: innerRef,
    className: "draggable",
    style: {
      // This color will be used until Butterchurn is loaded
      backgroundColor: "#000",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%"
    },
    tabIndex: "0"
  }, restProps));
};

exports.default = Background;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./milkdrop-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./milkdrop-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".webamp-desktop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n}\n", ""]);

// exports


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const defaultTracksState = {
  "0": {
    selected: false,
    title: "Llama Whipping Intro",
    artist: "DJ Mike Llama",
    duration: "5",
    url: ""
  },
  "1": {
    selected: false,
    title: "Rock Is Dead",
    artist: "Marilyn Manson",
    duration: "191", // 3:11
    url: ""
  },
  "2": {
    selected: true,
    title: "Spybreak! (Short One)",
    artist: "Propellerheads",
    duration: "240", // 4:00
    url: ""
  },
  "3": {
    selected: false,
    title: "Bad Blood",
    artist: "Ministry",
    duration: "300", // 5:00
    url: ""
  }
};

const initialState = {
  equalizer: {
    sliders: {
      "60": 52,
      "170": 74,
      "310": 83,
      "600": 91,
      "1000": 80,
      "3000": 54,
      "6000": 23,
      "12000": 19,
      "14000": 34,
      "16000": 75,
      preamp: 56
    }
  },
  media: {
    status: "PLAYING",
    kbps: 128,
    khz: 44,
    length: 5,
    timeElapsed: 1, // This does not seem to work
    channels: 2,
    name: "1. DJ Mike Llama - Llama Whippin' Intro"
  },
  playlist: {
    tracks: defaultTracksState,
    trackOrder: [0, 1, 2, 3],
    currentTrack: 0
  },
  display: {
    working: false
  }
};

exports.default = initialState;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(1);

var _store = __webpack_require__(260);

var _store2 = _interopRequireDefault(_store);

var _App = __webpack_require__(271);

var _App2 = _interopRequireDefault(_App);

var _hotkeys = __webpack_require__(374);

var _hotkeys2 = _interopRequireDefault(_hotkeys);

var _media = __webpack_require__(375);

var _media2 = _interopRequireDefault(_media);

var _selectors = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

var _emitter = __webpack_require__(50);

var _emitter2 = _interopRequireDefault(_emitter);

__webpack_require__(377);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return a promise that resolves when the store matches a predicate.
const storeHas = (store, predicate) => new Promise(resolve => {
  if (predicate(store.getState())) {
    resolve();
    return;
  }
  const unsubscribe = store.subscribe(() => {
    if (predicate(store.getState())) {
      resolve();
      unsubscribe();
    }
  });
});

class Winamp {
  static browserIsSupported() {
    const supportsAudioApi = !!(window.AudioContext || window.webkitAudioContext);
    const supportsCanvas = !!window.document.createElement("canvas").getContext;
    const supportsPromises = typeof Promise !== "undefined";
    return supportsAudioApi && supportsCanvas && supportsPromises;
  }

  constructor(options) {
    this._actionEmitter = new _emitter2.default();
    this.options = options;
    var _options = this.options;
    const initialTracks = _options.initialTracks,
          initialSkin = _options.initialSkin,
          avaliableSkins = _options.avaliableSkins,
          availableSkins = _options.availableSkins;
    var _options$enableHotkey = _options.enableHotkeys;
    const enableHotkeys = _options$enableHotkey === undefined ? false : _options$enableHotkey,
          zIndex = _options.zIndex,
          __extraWindows = _options.__extraWindows;


    this.media = new _media2.default();
    this.store = (0, _store2.default)(this.media, this._actionEmitter, this.options.__customMiddlewares, this.options.__initialState);
    this.store.dispatch({
      type: navigator.onLine ? _actionTypes.NETWORK_CONNECTED : _actionTypes.NETWORK_DISCONNECTED
    });

    if (true) {
      const fileInput = document.createElement("input");
      fileInput.id = "webamp-file-input";
      fileInput.style.display = "none";
      fileInput.type = "file";
      fileInput.value = null;
      fileInput.addEventListener("change", e => {
        this.store.dispatch((0, _actionCreators.loadFilesFromReferences)(e.target.files));
      });
      document.body.appendChild(fileInput);
    }

    if (zIndex != null) {
      this.store.dispatch({ type: _actionTypes.SET_Z_INDEX, zIndex });
    }

    this.genWindows = [];
    if (__extraWindows) {
      this.genWindows = __extraWindows.map(genWindow => _extends({
        id: genWindow.id || `${genWindow.title}-${(0, _utils.uniqueId)()}`
      }, genWindow));

      __extraWindows.forEach(genWindow => {
        if (genWindow.isVisualizer) {
          this.store.dispatch({ type: _actionTypes.REGISTER_VISUALIZER, id: genWindow.id });
        }
      });
    }

    this.genWindows.forEach(genWindow => {
      this.store.dispatch({
        type: _actionTypes.ADD_GEN_WINDOW,
        windowId: genWindow.id,
        title: genWindow.title,
        open: genWindow.open
      });
    });

    window.addEventListener("online", () => this.store.dispatch({ type: _actionTypes.NETWORK_CONNECTED }));
    window.addEventListener("offline", () => this.store.dispatch({ type: _actionTypes.NETWORK_DISCONNECTED }));

    if (initialSkin) {
      this.store.dispatch((0, _actionCreators.setSkinFromUrl)(initialSkin.url));
    } else {
      // We are using the default skin.
      this.store.dispatch({ type: _actionTypes.LOADED });
    }

    if (initialTracks) {
      this.appendTracks(initialTracks);
    }

    if (avaliableSkins != null) {
      console.warn("The misspelled option `avaliableSkins` is deprecated. Please use `availableSkins` instead.");
      this.store.dispatch({ type: _actionTypes.SET_AVAILABLE_SKINS, skins: avaliableSkins });
    } else if (availableSkins != null) {
      this.store.dispatch({ type: _actionTypes.SET_AVAILABLE_SKINS, skins: availableSkins });
    }

    const layout = options.__initialWindowLayout;
    if (layout != null) {
      (0, _utils.objectForEach)(layout, (w, windowId) => {
        if (w.size != null) {
          this.store.dispatch((0, _actionCreators.setWindowSize)(windowId, w.size));
        }
      });
      this.store.dispatch({
        type: _actionTypes.UPDATE_WINDOW_POSITIONS,
        positions: (0, _utils.objectMap)(layout, w => w.position)
      });
    }

    if (enableHotkeys) {
      new _hotkeys2.default(this.store.dispatch);
    }
  }

  // Append this array of tracks to the end of the current playlist.
  appendTracks(tracks) {
    const nextIndex = (0, _selectors.getTrackCount)(this.store.getState());
    this.store.dispatch((0, _actionCreators.loadMediaFiles)(tracks, _constants.LOAD_STYLE.BUFFER, nextIndex));
  }

  // Replace any existing tracks with this array of tracks, and begin playing.
  setTracksToPlay(tracks) {
    this.store.dispatch((0, _actionCreators.loadMediaFiles)(tracks, _constants.LOAD_STYLE.PLAY));
  }

  onClose(cb) {
    return this._actionEmitter.on(_actionTypes.CLOSE_WINAMP, cb);
  }

  onTrackDidChange(cb) {
    return this._actionEmitter.on(_actionTypes.SET_MEDIA, action => {
      const tracks = (0, _selectors.getTracks)(this.store.getState());
      const track = tracks[action.id];
      if (track == null) {
        return;
      }
      cb({ url: track.url });
    });
  }

  onMinimize(cb) {
    return this._actionEmitter.on(_actionTypes.MINIMIZE_WINAMP, cb);
  }

  async skinIsLoaded() {
    // Wait for the skin to load.
    return storeHas(this.store, state => !state.display.loading);
  }

  async renderWhenReady(node) {
    await this.skinIsLoaded();
    const genWindowComponents = {};
    this.genWindows.forEach(w => {
      genWindowComponents[w.id] = w.Component;
    });

    (0, _reactDom.render)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: this.store },
      _react2.default.createElement(_App2.default, {
        media: this.media,
        container: node,
        filePickers: this.options.filePickers,
        genWindowComponents: genWindowComponents
      })
    ), node);
  }
}

exports.default = Winamp;

module.exports = Winamp;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(48);

var _reduxThunk = __webpack_require__(261);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(262);

var _reducers = __webpack_require__(263);

var _reducers2 = _interopRequireDefault(_reducers);

var _mediaMiddleware = __webpack_require__(270);

var _mediaMiddleware2 = _interopRequireDefault(_mediaMiddleware);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const compose = (0, _reduxDevtoolsExtension.composeWithDevTools)({
  actionsBlacklist: [_actionTypes.UPDATE_TIME_ELAPSED, _actionTypes.STEP_MARQUEE]
});

const getStore = (media, actionEmitter, customMiddlewares = [], stateOverrides) => {
  let initialState;
  if (stateOverrides) {
    initialState = (0, _utils.merge)((0, _reducers2.default)(undefined, { type: "@@init" }), stateOverrides);
  }

  // eslint-disable-next-line no-unused-vars
  const emitterMiddleware = store => next => action => {
    actionEmitter.trigger(action.type, action);
    return next(action);
  };

  return (0, _redux.createStore)(_reducers2.default, initialState, compose((0, _redux.applyMiddleware)(...[_reduxThunk2.default, (0, _mediaMiddleware2.default)(media), emitterMiddleware, ...customMiddlewares].filter(Boolean))));
};

exports.default = getStore;

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(48).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(48);

var _playlist = __webpack_require__(108);

var _playlist2 = _interopRequireDefault(_playlist);

var _windows = __webpack_require__(264);

var _windows2 = _interopRequireDefault(_windows);

var _media = __webpack_require__(265);

var _media2 = _interopRequireDefault(_media);

var _display = __webpack_require__(109);

var _display2 = _interopRequireDefault(_display);

var _userInput = __webpack_require__(266);

var _userInput2 = _interopRequireDefault(_userInput);

var _equalizer = __webpack_require__(267);

var _equalizer2 = _interopRequireDefault(_equalizer);

var _network = __webpack_require__(268);

var _network2 = _interopRequireDefault(_network);

var _settings = __webpack_require__(269);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reducer = (0, _redux.combineReducers)({
  userInput: _userInput2.default,
  windows: _windows2.default,
  display: _display2.default,
  settings: _settings2.default,
  equalizer: _equalizer2.default,
  playlist: _playlist2.default,
  media: _media2.default,
  network: _network2.default
});

exports.default = reducer;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _actionTypes = __webpack_require__(3);

const defaultWindowsState = {
  focused: _constants.WINDOWS.MAIN,
  genWindows: {
    // TODO: Remove static capabilites and derive them from ids/generic
    main: {
      title: "Main Window",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+W"
    },
    equalizer: {
      title: "Equalizer",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+G"
    },
    playlist: {
      title: "Playlist Editor",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: true,
      canShade: true,
      canDouble: false,
      generic: false,
      hotkey: "Alt+E"
    }
  },
  positions: {}
};

const windows = (state = defaultWindowsState, action) => {
  switch (action.type) {
    case _actionTypes.SET_FOCUSED_WINDOW:
      return _extends({}, state, { focused: action.window });
    case _actionTypes.TOGGLE_WINDOW_SHADE_MODE:
      const canShade = state.genWindows[action.windowId].canShade;

      if (!canShade) {
        throw new Error("Tried to shade/unshade a window that cannot be shaded:", action.windowId);
      }
      return _extends({}, state, {
        genWindows: _extends({}, state.genWindows, {
          [action.windowId]: _extends({}, state.genWindows[action.windowId], {
            shade: !state.genWindows[action.windowId].shade
          })
        })
      });
    case _actionTypes.TOGGLE_WINDOW:
      const windowState = state.genWindows[action.windowId];
      return _extends({}, state, {
        genWindows: _extends({}, state.genWindows, {
          [action.windowId]: _extends({}, windowState, {
            open: !windowState.open,
            // Reset hidden state when opening window
            hidden: windowState.open ? windowState.hidden : false
          })
        })
      });
    case _actionTypes.CLOSE_WINDOW:
      return _extends({}, state, {
        genWindows: _extends({}, state.genWindows, {
          [action.windowId]: _extends({}, state.genWindows[action.windowId], {
            open: false
          })
        })
      });
    case _actionTypes.SET_WINDOW_VISIBILITY:
      return _extends({}, state, {
        genWindows: _extends({}, state.genWindows, {
          [action.windowId]: _extends({}, state.genWindows[action.windowId], {
            hidden: action.hidden
          })
        })
      });
    case _actionTypes.ADD_GEN_WINDOW:
      return _extends({}, state, {
        genWindows: _extends({}, state.genWindows, {
          [action.windowId]: {
            title: action.title,
            open: action.open,
            hidden: false,
            size: [0, 0],
            canShade: false,
            canResize: true,
            canDouble: false,
            generic: true
          }
        })
      });
    case _actionTypes.WINDOW_SIZE_CHANGED:
      const canResize = state.genWindows[action.windowId].canResize;

      if (!canResize) {
        throw new Error("Tried to resize a window that cannot be resized:", action.windowId);
      }
      return _extends({}, state, {
        genWindows: _extends({}, state.genWindows, {
          [action.windowId]: _extends({}, state.genWindows[action.windowId], {
            size: action.size
          })
        })
      });
    case _actionTypes.UPDATE_WINDOW_POSITIONS:
      return _extends({}, state, {
        positions: _extends({}, state.positions, action.positions)
      });
    default:
      return state;
  }
};

exports.default = windows;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(4);

const media = (state, action) => {
  if (!state) {
    return {
      timeMode: _constants.TIME_MODE.ELAPSED,
      timeElapsed: 0,
      length: null, // Consider renaming to "duration"
      kbps: null,
      khz: null,
      // The winamp ini file declares the default volume as "200".
      // The UI seems to show a default volume near 78, which would
      // math with the default value being 200 out of 255.
      volume: Math.round(200 / 255 * 100),
      balance: 0,
      channels: null,
      shuffle: false,
      repeat: false,
      // TODO: Enforce possible values
      status: _constants.MEDIA_STATUS.STOPPED
    };
  }
  switch (action.type) {
    // TODO: Make these constants
    case _actionTypes.PLAY:
    case _actionTypes.IS_PLAYING:
      return _extends({}, state, { status: _constants.MEDIA_STATUS.PLAYING });
    case _actionTypes.PAUSE:
      return _extends({}, state, { status: _constants.MEDIA_STATUS.PAUSED });
    case _actionTypes.STOP:
    case _actionTypes.IS_STOPPED:
      return _extends({}, state, { status: _constants.MEDIA_STATUS.STOPPED });
    case _actionTypes.CHANNEL_COUNT_CHANGED:
      return _extends({}, state, { channels: action.channels });
    case _actionTypes.TOGGLE_TIME_MODE:
      const newMode = state.timeMode === _constants.TIME_MODE.REMAINING ? _constants.TIME_MODE.ELAPSED : _constants.TIME_MODE.TIME_REMAINING;
      return _extends({}, state, { timeMode: newMode });
    case _actionTypes.UPDATE_TIME_ELAPSED:
      return _extends({}, state, { timeElapsed: action.elapsed });
    case _actionTypes.ADD_TRACK_FROM_URL:
      return _extends({}, state, {
        timeElapsed: 0,
        length: null,
        kbps: null,
        khz: null,
        channels: null
      });
    case _actionTypes.SET_MEDIA:
      return _extends({}, state, {
        length: action.length,
        kbps: action.kbps,
        khz: action.khz,
        channels: action.channels
      });
    case _actionTypes.SET_VOLUME:
      return _extends({}, state, { volume: action.volume });
    case _actionTypes.SET_BALANCE:
      return _extends({}, state, { balance: action.balance });
    case _actionTypes.TOGGLE_REPEAT:
      return _extends({}, state, { repeat: !state.repeat });
    case _actionTypes.TOGGLE_SHUFFLE:
      return _extends({}, state, { shuffle: !state.shuffle });
    default:
      return state;
  }
};

exports.default = media;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(3);

const defaultUserInput = {
  focus: null,
  bandFocused: null,
  scrubPosition: 0,
  userMessage: null
};

const userInput = exports.userInput = (state = defaultUserInput, action) => {
  switch (action.type) {
    case _actionTypes.SET_FOCUS:
      return _extends({}, state, { focus: action.input, bandFocused: null });
    case _actionTypes.SET_BAND_FOCUS:
      return _extends({}, state, { focus: action.input, bandFocused: action.bandFocused });
    case _actionTypes.UNSET_FOCUS:
      return _extends({}, state, { focus: null, bandFocused: null });
    case _actionTypes.SET_SCRUB_POSITION:
      return _extends({}, state, { scrubPosition: action.position });
    case _actionTypes.SET_USER_MESSAGE:
      return _extends({}, state, { userMessage: action.message });
    case _actionTypes.UNSET_USER_MESSAGE:
      return _extends({}, state, { userMessage: null });
    default:
      return state;
  }
};

exports.default = userInput;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _actionTypes = __webpack_require__(3);

const equalizer = (state, action) => {
  if (!state) {
    state = {
      on: true,
      auto: false,
      sliders: {
        preamp: 50
      }
    };
    _constants.BANDS.forEach(band => {
      state.sliders[band] = 50;
    });
    return state;
  }
  switch (action.type) {
    case _actionTypes.SET_BAND_VALUE:
      const newSliders = _extends({}, state.sliders, { [action.band]: action.value });
      return _extends({}, state, { sliders: newSliders });
    case _actionTypes.SET_EQ_ON:
      return _extends({}, state, { on: true });
    case _actionTypes.SET_EQ_OFF:
      return _extends({}, state, { on: false });
    case _actionTypes.SET_EQ_AUTO:
      return _extends({}, state, { auto: action.value });
    default:
      return state;
  }
};

exports.default = equalizer;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(3);

const network = (state = { connected: true }, action) => {
  switch (action.type) {
    case _actionTypes.NETWORK_CONNECTED:
      return _extends({}, state, { connected: true });
    case _actionTypes.NETWORK_DISCONNECTED:
      return _extends({}, state, { connected: false });
    default:
      return state;
  }
};

exports.default = network;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(3);

const defaultSettingsState = {
  availableSkins: []
};

const settings = (state = defaultSettingsState, action) => {
  switch (action.type) {
    case _actionTypes.SET_AVAILABLE_SKINS:
      return _extends({}, state, { availableSkins: action.skins });
    default:
      return state;
  }
};

exports.default = settings;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

exports.default = media => store => {
  var _store$getState = store.getState(),
      _store$getState$media = _store$getState.media;

  const volume = _store$getState$media.volume,
        balance = _store$getState$media.balance;

  // Ensure the default state is the canonical value.

  media.setVolume(volume);
  media.setBalance(balance);
  // TODO: Ensure other values like bands and preamp are in sync

  media.on("timeupdate", () => {
    store.dispatch({
      type: _actionTypes.UPDATE_TIME_ELAPSED,
      elapsed: media.timeElapsed()
    });
  });

  media.on("ended", () => {
    store.dispatch({ type: _actionTypes.IS_STOPPED });
    store.dispatch((0, _actionCreators.next)());
  });

  media.on("playing", () => {
    store.dispatch({ type: _actionTypes.IS_PLAYING });
  });

  media.on("waiting", () => {
    store.dispatch({ type: _actionTypes.START_WORKING });
  });

  media.on("stopWaiting", () => {
    store.dispatch({ type: _actionTypes.STOP_WORKING });
  });

  media.on("fileLoaded", () => {
    store.dispatch({
      type: _actionTypes.SET_MEDIA,
      kbps: "128",
      khz: Math.round(media.sampleRate() / 1000).toString(),
      channels: media.channels(),
      length: media.duration(),
      id: (0, _selectors.getCurrentTrackId)(store.getState())
    });
  });

  media.on("channelupdate", () => {
    store.dispatch({
      type: _actionTypes.CHANNEL_COUNT_CHANGED,
      channels: media.channels()
    });
  });

  return next => action => {
    // TODO: Consider doing this after the action, and using the state as the source of truth.
    switch (action.type) {
      case _actionTypes.PLAY:
        media.play();
        break;
      case _actionTypes.PAUSE:
        media.pause();
        break;
      case _actionTypes.STOP:
        media.stop();
        break;
      case _actionTypes.SET_VOLUME:
        media.setVolume(action.volume);
        break;
      case _actionTypes.SET_BALANCE:
        media.setBalance(action.balance);
        break;
      case _actionTypes.SEEK_TO_PERCENT_COMPLETE:
        media.seekToPercentComplete(action.percent);
        break;
      case _actionTypes.PLAY_TRACK:
        {
          const track = store.getState().playlist.tracks[action.id];
          if (track != null) {
            media.loadFromUrl(track.url, true);
          }
          break;
        }
      case _actionTypes.BUFFER_TRACK:
        {
          const track = store.getState().playlist.tracks[action.id];
          if (track != null) {
            media.loadFromUrl(track.url, false);
          }
          break;
        }
      case _actionTypes.SET_BAND_VALUE:
        if (action.band === "preamp") {
          media.setPreamp(action.value);
        } else {
          media.setEqBand(action.band, action.value);
        }
        break;
      case _actionTypes.SET_EQ_OFF:
        media.disableEq();
        break;
      case _actionTypes.SET_EQ_ON:
        media.enableEq();
        break;
    }
    return next(action);
  };
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(6);

var _emitter = __webpack_require__(50);

var _emitter2 = _interopRequireDefault(_emitter);

var _constants = __webpack_require__(4);

var _selectors = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

var _ContextMenuWrapper = __webpack_require__(49);

var _ContextMenuWrapper2 = _interopRequireDefault(_ContextMenuWrapper);

var _MainContextMenu = __webpack_require__(117);

var _MainContextMenu2 = _interopRequireDefault(_MainContextMenu);

var _WindowManager = __webpack_require__(274);

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _MainWindow = __webpack_require__(275);

var _MainWindow2 = _interopRequireDefault(_MainWindow);

var _PlaylistWindow = __webpack_require__(298);

var _PlaylistWindow2 = _interopRequireDefault(_PlaylistWindow);

var _EqualizerWindow = __webpack_require__(360);

var _EqualizerWindow2 = _interopRequireDefault(_EqualizerWindow);

var _Skin = __webpack_require__(370);

var _Skin2 = _interopRequireDefault(_Skin);

__webpack_require__(372);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs the windows to render, and tracks focus.
 */
class App extends _react2.default.Component {
  constructor() {
    super();
    this._emitter = new _emitter2.default();
    this._windowNodes = {};
    this._bindings = {};
  }

  componentWillMount() {
    this._webampNode = document.createElement("div");
    this._webampNode.id = "webamp";
    this._webampNode.role = "application";
    this._webampNode.style.zIndex = this.props.zIndex;
    document.body.appendChild(this._webampNode);
  }

  componentWillUnmount() {
    document.body.removeChild(this._webampNode);
  }

  componentDidMount() {
    this._setFocus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.focused !== this.props.focused) {
      this._setFocus();
    }
  }

  _setFocus() {
    const binding = this._bindings[this.props.focused];
    if (binding.node) {
      binding.node.focus();
    }
  }

  _gotRef(windowId, comp) {
    if (comp == null) {
      const binding = this._bindings[windowId];
      if (binding.remove) {
        binding.remove();
      }
      this._bindings[windowId] = null;
      return;
    }

    const node = _reactDom2.default.findDOMNode(comp);
    const binding = this._bindings[windowId];
    if (binding && binding.node === node) {
      return;
    }

    node.tabIndex = -1;
    const listener = e => this._emitter.trigger(windowId, e);
    node.addEventListener("keydown", listener);

    this._bindings[windowId] = {
      node,
      remove: () => {
        node.removeEventListener("keydown", listener);
      }
    };
  }

  _renderWindows() {
    var _props = this.props;
    const media = _props.media,
          genWindowsInfo = _props.genWindowsInfo,
          filePickers = _props.filePickers,
          genWindowComponents = _props.genWindowComponents;

    return (0, _utils.objectMap)(genWindowsInfo, (w, id) => {
      if (!w.open) {
        return null;
      }
      switch (id) {
        case _constants.WINDOWS.MAIN:
          return _react2.default.createElement(_MainWindow2.default, {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser(),
            filePickers: filePickers
          });
        case _constants.WINDOWS.EQUALIZER:
          return _react2.default.createElement(_EqualizerWindow2.default, { ref: component => this._gotRef(id, component) });
        case _constants.WINDOWS.PLAYLIST:
          return _react2.default.createElement(_PlaylistWindow2.default, {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser()
          });
        default:
          if (!w.generic) {
            throw new Error("Tried to render an unknown window:", id);
          }
          const Component = genWindowComponents[id];
          return _react2.default.createElement(Component, {
            chromeRef: component => this._gotRef(id, component),
            title: w.title,
            windowId: id,
            onFocusedKeyDown: listener => this._emitter.on(id, listener),
            analyser: media.getAnalyser(),
            isEnabledVisualizer: this.props.visualizerStyle === id,
            playing: this.props.status === _constants.MEDIA_STATUS.PLAYING,
            close: () => this.props.closeWindow(id)
          });
      }
    });
  }

  render() {
    var _props2 = this.props;
    const closed = _props2.closed,
          container = _props2.container,
          filePickers = _props2.filePickers;

    if (closed) {
      return null;
    }
    return _reactDom2.default.createPortal(_react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_Skin2.default, null),
      _react2.default.createElement(
        _ContextMenuWrapper2.default,
        {
          renderContents: () => _react2.default.createElement(_MainContextMenu2.default, { filePickers: filePickers })
        },
        _react2.default.createElement(_WindowManager2.default, {
          windows: this._renderWindows(),
          container: container
        })
      )
    ), this._webampNode);
  }
}

App.propTypes = {
  container: _propTypes2.default.instanceOf(Element)
};

const mapStateToProps = state => ({
  visualizerStyle: (0, _selectors.getVisualizerStyle)(state),
  status: state.media.status,
  focused: state.windows.focused,
  closed: state.display.closed,
  genWindowsInfo: state.windows.genWindows,
  zIndex: state.display.zIndex
});

const mapDispatchToProps = dispatch => ({
  closeWindow: id => dispatch((0, _actionCreators.closeWindow)(id))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlaybackContextMenu = props => _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement(_ContextMenu.Node, { label: "Previous", hotkey: "Z", onClick: props.previous }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Play", hotkey: "X", onClick: props.play }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Pause", hotkey: "C", onClick: props.pause }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Stop", hotkey: "V", onClick: props.stop }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Next", hotkey: "B", onClick: props.next }),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_ContextMenu.Node, {
    label: "Back 5 seconds",
    hotkey: "Left",
    onClick: () => props.seekBackward(5)
  }),
  _react2.default.createElement(_ContextMenu.Node, {
    label: "Fwd 5 seconds",
    hotkey: "Right",
    onClick: () => props.seekForward(5)
  }),
  _react2.default.createElement(_ContextMenu.Node, { label: "10 tracks back", hotkey: "Num. 1", onClick: () => (0, _actionCreators.nextN)(-10) }),
  _react2.default.createElement(_ContextMenu.Node, { label: "10 tracks fwd", hotkey: "Num. 3", onClick: () => (0, _actionCreators.nextN)(10) })
);

const mapDispatchToProps = {
  previous: _actionCreators.previous,
  play: _actionCreators.play,
  pause: _actionCreators.pause,
  stop: _actionCreators.stop,
  next: _actionCreators.next,
  seekForward: _actionCreators.seekForward,
  seekBackward: _actionCreators.seekBackward
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PlaybackContextMenu);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SkinContextMenu = props => _react2.default.createElement(
  _ContextMenu.Parent,
  { label: "Skins" },
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.openSkinFileDialog, label: "Load Skin..." }),
  !!props.availableSkins.length && _react2.default.createElement(_ContextMenu.Hr, null),
  props.availableSkins.map(skin => _react2.default.createElement(_ContextMenu.Node, {
    key: skin.url,
    onClick: () => props.setSkin(skin.url),
    label: skin.name
  }))
);

const mapStateToProps = state => ({
  availableSkins: state.settings.availableSkins
});

const mapDispatchToProps = {
  openSkinFileDialog: _actionCreators.openSkinFileDialog,
  setSkin: _actionCreators.setSkinFromUrl
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SkinContextMenu);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _snapUtils = __webpack_require__(111);

var _selectors = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const abuts = (a, b) => {
  // TODO: This is kinda a hack. They should really be touching, not just within snapping distance.
  // Also, overlapping should not count.
  const wouldMoveTo = (0, _snapUtils.snap)(a, b);
  return wouldMoveTo.x !== undefined || wouldMoveTo.y !== undefined;
};

class WindowManager extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.centerWindows = () => {
      const container = this.props.container;


      const rect = container.getBoundingClientRect();
      const offsetLeft = rect.left + window.scrollX;
      const offsetTop = rect.top + window.scrollY;
      const width = container.scrollWidth;
      const height = container.scrollHeight;

      if (this.props.windowsInfo.some(w => w.x == null || w.y == null)) {
        // Some windows do not have an initial position, so we'll come up
        // with your own layout.
        const windowPositions = {};
        const keys = this.windowKeys();
        const totalHeight = keys.length * _constants.WINDOW_HEIGHT;
        const globalOffsetLeft = Math.max(0, width / 2 - _constants.WINDOW_WIDTH / 2);
        const globalOffsetTop = Math.max(0, height / 2 - totalHeight / 2);
        keys.forEach((key, i) => {
          const offset = _constants.WINDOW_HEIGHT * i;
          windowPositions[key] = {
            x: Math.ceil(offsetLeft + globalOffsetLeft),
            y: Math.ceil(offsetTop + (globalOffsetTop + offset))
          };
        });
        this.props.updateWindowPositions(windowPositions);
      } else {
        // A layout has been suplied. We will compute the bounding box and
        // center the given layout.
        const bounding = (0, _utils.calculateBoundingBox)(this.props.windowsInfo.filter(w => this.props.getWindowOpen(w.key)));

        const boxHeight = bounding.bottom - bounding.top;
        const boxWidth = bounding.right - bounding.left;

        const move = {
          x: Math.ceil(offsetLeft + (width - boxWidth) / 2),
          y: Math.ceil(offsetTop + (height - boxHeight) / 2)
        };

        const newPositions = this.props.windowsInfo.reduce((pos, w) => _extends({}, pos, { [w.key]: { x: move.x + w.x, y: move.y + w.y } }), {});

        this.props.updateWindowPositions(newPositions);
      }
    }, this.handleMouseDown = (key, e) => {
      if (!e.target.classList.contains("draggable")) {
        return;
      }
      // Prevent dragging from highlighting text.
      e.preventDefault();

      var _movingAndStationaryN = this.movingAndStationaryNodes(key),
          _movingAndStationaryN2 = _slicedToArray(_movingAndStationaryN, 2);

      const moving = _movingAndStationaryN2[0],
            stationary = _movingAndStationaryN2[1];


      const mouseStart = { x: e.clientX, y: e.clientY };
      // Aparently this is crazy across browsers.
      const browserSize = {
        width: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth),
        height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
      };

      const box = (0, _snapUtils.boundingBox)(moving);

      const handleMouseMove = ee => {
        const proposedDiff = {
          x: ee.clientX - mouseStart.x,
          y: ee.clientY - mouseStart.y
        };

        const proposedWindows = moving.map(node => _extends({}, node, (0, _snapUtils.applyDiff)(node, proposedDiff)));

        const proposedBox = _extends({}, box, (0, _snapUtils.applyDiff)(box, proposedDiff));

        const snapDiff = (0, _snapUtils.snapDiffManyToMany)(proposedWindows, stationary);

        const withinDiff = (0, _snapUtils.snapWithinDiff)(proposedBox, browserSize);

        const finalDiff = (0, _snapUtils.applyMultipleDiffs)(proposedDiff, snapDiff, withinDiff);

        const windowPositionDiff = moving.reduce((diff, window) => {
          diff[window.key] = (0, _snapUtils.applyDiff)(window, finalDiff);
          return diff;
        }, {});

        this.props.updateWindowPositions(windowPositionDiff);
      };

      const removeListeners = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", removeListeners);
      };

      window.addEventListener("mouseup", removeListeners);
      window.addEventListener("mousemove", handleMouseMove);
    }, _temp;
  }

  componentDidMount() {
    this.centerWindows();
  }

  movingAndStationaryNodes(key) {
    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key] != null && !this.props.getWindowHidden(w.key));
    const targetNode = windows.find(node => node.key === key);

    let movingSet = new Set([targetNode]);
    // Only the main window brings other windows along.
    if (key === "main") {
      const findAllConnected = (0, _snapUtils.traceConnection)(abuts);
      movingSet = findAllConnected(windows, targetNode);
    }

    const stationary = windows.filter(w => !movingSet.has(w));
    const moving = Array.from(movingSet);

    return [moving, stationary];
  }

  // Keys for the visible windows
  windowKeys() {
    // TODO: Iterables can probably do this better.
    return Object.keys(this.props.windows).filter(key => !!this.props.windows[key]);
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      left: 0
    };

    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key]);

    return windows.map(w => _react2.default.createElement(
      "div",
      {
        key: w.key,
        onMouseDown: e => this.handleMouseDown(w.key, e),
        style: _extends({}, style, { transform: `translate(${w.x}px, ${w.y}px)` })
      },
      this.props.windows[w.key]
    ));
  }
}

WindowManager.propTypes = {
  windows: _propTypes2.default.object.isRequired,
  container: _propTypes2.default.instanceOf(Element).isRequired
};

const mapStateToProps = state => ({
  windowsInfo: (0, _selectors.getWindowsInfo)(state),
  getWindowHidden: (0, _selectors.getWindowHidden)(state),
  getWindowOpen: (0, _selectors.getWindowOpen)(state)
});

const mapDispatchToProps = {
  updateWindowPositions: _actionCreators.updateWindowPositions
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WindowManager);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainWindow = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(4);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

var _DropTarget = __webpack_require__(71);

var _DropTarget2 = _interopRequireDefault(_DropTarget);

var _MiniTime = __webpack_require__(118);

var _MiniTime2 = _interopRequireDefault(_MiniTime);

var _actionTypes = __webpack_require__(3);

var _ClickedDiv = __webpack_require__(51);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _ContextMenuTarget = __webpack_require__(72);

var _ContextMenuTarget2 = _interopRequireDefault(_ContextMenuTarget);

var _Visualizer = __webpack_require__(120);

var _Visualizer2 = _interopRequireDefault(_Visualizer);

var _ActionButtons = __webpack_require__(278);

var _ActionButtons2 = _interopRequireDefault(_ActionButtons);

var _MainBalance = __webpack_require__(279);

var _MainBalance2 = _interopRequireDefault(_MainBalance);

var _Close = __webpack_require__(280);

var _Close2 = _interopRequireDefault(_Close);

var _ClutterBar = __webpack_require__(281);

var _ClutterBar2 = _interopRequireDefault(_ClutterBar);

var _MainContextMenu = __webpack_require__(117);

var _MainContextMenu2 = _interopRequireDefault(_MainContextMenu);

var _Eject = __webpack_require__(282);

var _Eject2 = _interopRequireDefault(_Eject);

var _EqToggleButton = __webpack_require__(283);

var _EqToggleButton2 = _interopRequireDefault(_EqToggleButton);

var _PlaylistToggleButton = __webpack_require__(284);

var _PlaylistToggleButton2 = _interopRequireDefault(_PlaylistToggleButton);

var _Kbps = __webpack_require__(285);

var _Kbps2 = _interopRequireDefault(_Kbps);

var _Khz = __webpack_require__(286);

var _Khz2 = _interopRequireDefault(_Khz);

var _Marquee = __webpack_require__(287);

var _Marquee2 = _interopRequireDefault(_Marquee);

var _MonoStereo = __webpack_require__(288);

var _MonoStereo2 = _interopRequireDefault(_MonoStereo);

var _Position = __webpack_require__(289);

var _Position2 = _interopRequireDefault(_Position);

var _Repeat = __webpack_require__(290);

var _Repeat2 = _interopRequireDefault(_Repeat);

var _Shade = __webpack_require__(291);

var _Shade2 = _interopRequireDefault(_Shade);

var _Minimize = __webpack_require__(292);

var _Minimize2 = _interopRequireDefault(_Minimize);

var _Shuffle = __webpack_require__(293);

var _Shuffle2 = _interopRequireDefault(_Shuffle);

var _Time = __webpack_require__(294);

var _Time2 = _interopRequireDefault(_Time);

var _MainVolume = __webpack_require__(295);

var _MainVolume2 = _interopRequireDefault(_MainVolume);

__webpack_require__(296);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainWindow extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._handleClick = () => {
      this.props.setFocus();
    }, this._handleDrop = e => {
      this.props.loadFilesFromReferences(e);
    }, _temp;
  }

  render() {
    var _props = this.props;
    const focused = _props.focused,
          loading = _props.loading,
          doubled = _props.doubled,
          mainShade = _props.mainShade,
          llama = _props.llama,
          status = _props.status,
          working = _props.working,
          filePickers = _props.filePickers;


    const className = (0, _classnames2.default)({
      window: true,
      play: status === _constants.MEDIA_STATUS.PLAYING,
      stop: status === _constants.MEDIA_STATUS.STOPPED,
      pause: status === _constants.MEDIA_STATUS.PAUSED,
      selected: focused === _constants.WINDOWS.MAIN,
      shade: mainShade,
      draggable: true,
      loading,
      doubled,
      llama
    });

    return _react2.default.createElement(
      _DropTarget2.default,
      {
        id: "main-window",
        className: className,
        onMouseDown: this._handleClick,
        handleDrop: this._handleDrop,
        onWheel: this.props.scrollVolume
      },
      _react2.default.createElement(
        "div",
        {
          id: "title-bar",
          className: "selected draggable",
          onDoubleClick: this.props.toggleMainWindowShadeMode
        },
        _react2.default.createElement(
          _ContextMenuTarget2.default,
          {
            id: "option-context",
            bottom: true,
            handle: _react2.default.createElement(_ClickedDiv2.default, { id: "option", title: "Winamp Menu" })
          },
          _react2.default.createElement(_MainContextMenu2.default, { filePickers: filePickers })
        ),
        mainShade && _react2.default.createElement(_MiniTime2.default, null),
        _react2.default.createElement(_Minimize2.default, null),
        _react2.default.createElement(_Shade2.default, null),
        _react2.default.createElement(_Close2.default, null)
      ),
      _react2.default.createElement(
        "div",
        { className: "status" },
        _react2.default.createElement(_ClutterBar2.default, null),
        !working && _react2.default.createElement("div", { id: "play-pause" }),
        _react2.default.createElement("div", {
          id: "work-indicator",
          className: (0, _classnames2.default)({ selected: working })
        }),
        _react2.default.createElement(_Time2.default, null)
      ),
      _react2.default.createElement(_Visualizer2.default, { analyser: this.props.analyser }),
      _react2.default.createElement(
        "div",
        { className: "media-info" },
        _react2.default.createElement(_Marquee2.default, null),
        _react2.default.createElement(_Kbps2.default, null),
        _react2.default.createElement(_Khz2.default, null),
        _react2.default.createElement(_MonoStereo2.default, null)
      ),
      _react2.default.createElement(_MainVolume2.default, null),
      _react2.default.createElement(_MainBalance2.default, null),
      _react2.default.createElement(
        "div",
        { className: "windows" },
        _react2.default.createElement(_EqToggleButton2.default, null),
        _react2.default.createElement(_PlaylistToggleButton2.default, null)
      ),
      _react2.default.createElement(_Position2.default, null),
      _react2.default.createElement(_ActionButtons2.default, null),
      _react2.default.createElement(_Eject2.default, null),
      _react2.default.createElement(
        "div",
        { className: "shuffle-repeat" },
        _react2.default.createElement(_Shuffle2.default, null),
        _react2.default.createElement(_Repeat2.default, null)
      ),
      _react2.default.createElement("a", {
        id: "about",
        target: "blank",
        href: "https://github.com/captbaritone/webamp",
        title: "About"
      })
    );
  }
}

exports.MainWindow = MainWindow;
const mapStateToProps = state => {
  const status = state.media.status;
  var _state$display = state.display;
  const loading = _state$display.loading,
        doubled = _state$display.doubled,
        llama = _state$display.llama,
        working = _state$display.working,
        focused = state.windows.focused;

  return {
    mainShade: (0, _selectors.getWindowShade)(state, "main"),
    status,
    loading,
    doubled,
    llama,
    working,
    focused
  };
};

const mapDispatchToProps = {
  setFocus: () => ({ type: _actionTypes.SET_FOCUSED_WINDOW, window: _constants.WINDOWS.MAIN }),
  loadFilesFromReferences: e => (0, _actionCreators.loadFilesFromReferences)(e.dataTransfer.files),
  removeAllTracks: _actionCreators.removeAllTracks,
  toggleMainWindowShadeMode: _actionCreators.toggleMainWindowShadeMode,
  scrollVolume: _actionCreators.scrollVolume
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainWindow);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./mini-time.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./mini-time.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "#webamp .mini-time {\n    display: block;\n    height: 6px;\n    width: 25px;\n}\n\n#webamp .mini-time.blinking .character:not(.background-character) {\n    animation: blink 2s step-start 1s infinite;\n    -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .mini-time .background-character {\n    z-index: 1;\n}\n\n#webamp .mini-time .character {\n    position: absolute;\n    top: 0;\n    z-index: 2;\n}\n", ""]);

// exports


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionButtons = props => _react2.default.createElement(
  "div",
  { className: "actions" },
  _react2.default.createElement("div", { id: "previous", onClick: props.previous, title: "Previous Track" }),
  _react2.default.createElement("div", { id: "play", onClick: props.play, title: "Play" }),
  _react2.default.createElement("div", { id: "pause", onClick: props.pause, title: "Pause" }),
  _react2.default.createElement("div", { id: "stop", onClick: props.stop, title: "Stop" }),
  _react2.default.createElement("div", { id: "next", onClick: props.next, title: "Next Track" })
);

const mapDispatchToProps = { previous: _actionCreators.previous, play: _actionCreators.play, pause: _actionCreators.pause, stop: _actionCreators.stop, next: _actionCreators.next };

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ActionButtons);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offsetFromBalance = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Balance = __webpack_require__(121);

var _Balance2 = _interopRequireDefault(_Balance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const offsetFromBalance = exports.offsetFromBalance = balance => {
  const percent = Math.abs(balance) / 100;
  const sprite = Math.floor(percent * 27);
  const offset = sprite * 15;
  return offset;
};

const MainBalance = props => _react2.default.createElement(_Balance2.default, {
  id: "balance",
  style: { backgroundPosition: `0 -${offsetFromBalance(props.balance)}px` }
});

const mapStateToProps = state => ({ balance: state.media.balance });

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainBalance);

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ClickedDiv = __webpack_require__(51);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Close = ({ onClick }) => _react2.default.createElement(_ClickedDiv2.default, { id: "close", onClick: onClick, title: "Close" });

exports.default = (0, _reactRedux.connect)(null, { onClick: _actionCreators.close })(Close);

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ClutterBar = props => _react2.default.createElement(
  "div",
  { id: "clutter-bar" },
  _react2.default.createElement("div", { id: "button-o" }),
  _react2.default.createElement("div", { id: "button-a" }),
  _react2.default.createElement("div", { id: "button-i" }),
  _react2.default.createElement("div", {
    title: "Toggle Doublesize Mode",
    id: "button-d",
    className: (0, _classnames2.default)({ selected: props.doubled }),
    onMouseUp: props.handleMouseUp,
    onMouseDown: props.handleMouseDown
  }),
  _react2.default.createElement("div", { id: "button-v" })
);

const mapStateToProps = state => ({
  doubled: state.display.doubled
});

const mapDispatchToProps = dispatch => ({
  handleMouseDown: () => dispatch({ type: _actionTypes.SET_FOCUS, input: "double" }),
  handleMouseUp: () => {
    dispatch((0, _actionCreators.toggleDoubleSizeMode)());
    dispatch({ type: _actionTypes.UNSET_FOCUS });
  }
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ClutterBar);

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Eject = props => _react2.default.createElement("div", { id: "eject", onClick: props.openMediaFileDialog, title: "Open File(s)" });

const mapDispatchToProps = { openMediaFileDialog: _actionCreators.openMediaFileDialog };

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Eject);

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqToggleButton = props => _react2.default.createElement("div", {
  id: "equalizer-button",
  className: (0, _classnames2.default)({ selected: props.getWindowOpen("equalizer") }),
  onClick: props.handleClick,
  title: "Toggle Graphical Equalizer"
});

const mapStateToProps = state => ({
  getWindowOpen: (0, _selectors.getWindowOpen)(state)
});

const mapDispatchToProps = {
  handleClick: () => (0, _actionCreators.toggleWindow)("equalizer")
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EqToggleButton);

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlaylistToggleButton = props => _react2.default.createElement("div", {
  id: "playlist-button",
  className: (0, _classnames2.default)({ selected: props.getWindowOpen("playlist") }),
  onClick: props.handleClick,
  title: "Toggle Playlist Editor"
});

const mapStateToProps = state => ({
  getWindowOpen: (0, _selectors.getWindowOpen)(state)
});

const mapDispatchToProps = {
  handleClick: () => (0, _actionCreators.toggleWindow)("playlist")
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlaylistToggleButton);

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _CharacterString = __webpack_require__(36);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Kbps = props => _react2.default.createElement(
  "div",
  { id: "kbps" },
  _react2.default.createElement(
    _CharacterString2.default,
    null,
    props.kbps
  )
);

exports.default = (0, _reactRedux.connect)(state => ({ kbps: state.media.kbps }))(Kbps);

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _CharacterString = __webpack_require__(36);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Khz = props => _react2.default.createElement(
  "div",
  { id: "khz" },
  _react2.default.createElement(
    _CharacterString2.default,
    null,
    props.khz
  )
);

exports.default = (0, _reactRedux.connect)(state => state.media)(Khz);

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loopText = exports.pixelUnits = exports.stepOffset = exports.getEqText = exports.getDoubleSizeModeText = exports.getPositionText = exports.getVolumeText = exports.getBalanceText = exports.mod = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

var _CharacterString = __webpack_require__(36);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

var _selectors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Single line text display that can animate and hold multiple registers
// Knows how to display various modes like tracking, volume, balance, etc.
const CHAR_WIDTH = 5;
const MARQUEE_MAX_LENGTH = 31;

// Always positive modulus
const mod = exports.mod = (n, m) => (n % m + m) % m;

const getBalanceText = exports.getBalanceText = balance => {
  if (balance === 0) {
    return "Balance: Center";
  }
  const direction = balance > 0 ? "Right" : "Left";
  return `Balance: ${Math.abs(balance)}% ${direction}`;
};

const getVolumeText = exports.getVolumeText = volume => `Volume: ${volume}%`;

const getPositionText = exports.getPositionText = (duration, seekToPercent) => {
  const newElapsedStr = (0, _utils.getTimeStr)(duration * seekToPercent / 100, false);
  const durationStr = (0, _utils.getTimeStr)(duration, false);
  return `Seek to: ${newElapsedStr}/${durationStr} (${seekToPercent}%)`;
};

const getDoubleSizeModeText = exports.getDoubleSizeModeText = enabled => `${enabled ? "Disable" : "Enable"} doublesize mode`;

const formatHz = hz => hz < 1000 ? `${hz}HZ` : `${hz / 1000}KHZ`;

// Format a number as a string, ensuring it has a + or - sign
const ensureSign = num => num > 0 ? `+${num}` : num.toString();

// Round to 1 and exactly 1 decimal point
const roundToTenths = num => (Math.round(num * 10) / 10).toFixed(1);

const getEqText = exports.getEqText = (band, level) => {
  const db = roundToTenths((level - 50) / 50 * 12);
  const label = band === "preamp" ? "Preamp" : formatHz(band);
  return `EQ: ${label} ${ensureSign(db)} DB`;
};

const isLong = text => text.length >= MARQUEE_MAX_LENGTH;

// Given text and step, how many pixels should it be shifted?
const stepOffset = exports.stepOffset = (text, step, pixels) => {
  if (!isLong(text)) {
    return 0;
  }

  const stepOffsetWidth = step * CHAR_WIDTH; // Steps move one char at a time
  const offset = stepOffsetWidth + pixels;
  const stringLength = text.length * CHAR_WIDTH;

  return mod(offset, stringLength);
};

// Format an int as pixels
const pixelUnits = exports.pixelUnits = pixels => `${pixels}px`;

// If text is wider than the marquee, it needs to loop
const loopText = exports.loopText = text => isLong(text) ? text + text : text.padEnd(MARQUEE_MAX_LENGTH, " ");

class Marquee extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = e => {
      const xStart = e.clientX;
      this.setState({ stepping: false });
      const handleMouseMove = ee => {
        const diff = ee.clientX - xStart;
        this.setState({ dragOffset: -diff });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        // TODO: Remove this listener
        setTimeout(() => {
          this.setState({ stepping: true });
        }, 1000);
        document.removeEventListener("mouseUp", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    this.state = { stepping: true, dragOffset: 0 };
    this.stepHandle = null;
  }

  componentDidMount() {
    this.stepHandle = setInterval(() => {
      if (this.state.stepping) {
        this.props.dispatch({ type: _actionTypes.STEP_MARQUEE });
      }
    }, 220);
  }

  componentWillUnmount() {
    if (this.stepHandle) {
      clearTimeout(this.stepHandle);
    }
  }

  render() {
    var _props = this.props;
    const text = _props.text,
          marqueeStep = _props.marqueeStep;

    const offset = stepOffset(text, marqueeStep, this.state.dragOffset);
    const offsetPixels = pixelUnits(-offset);
    const style = {
      whiteSpace: "nowrap",
      willChange: "transform",
      transform: `translateX(${offsetPixels})`
    };
    return _react2.default.createElement(
      "div",
      {
        id: "marquee",
        className: "text",
        onMouseDown: this.handleMouseDown,
        title: "Song Title"
      },
      _react2.default.createElement(
        "div",
        { style: style },
        _react2.default.createElement(
          _CharacterString2.default,
          null,
          loopText(text)
        )
      )
    );
  }
}

const getMarqueeText = state => {
  if (state.userInput.userMessage != null) {
    return state.userInput.userMessage;
  }
  switch (state.userInput.focus) {
    case "balance":
      return getBalanceText(state.media.balance);
    case "volume":
      return getVolumeText(state.media.volume);
    case "position":
      return getPositionText(state.media.length, state.userInput.scrubPosition);
    case "double":
      return getDoubleSizeModeText(state.display.doubled);
    case "eq":
      const band = state.userInput.bandFocused;
      return getEqText(band, state.equalizer.sliders[band]);
    default:
      break;
  }
  if (state.playlist.currentTrack != null) {
    return (0, _selectors.getMediaText)(state);
  }
  return "Winamp 2.91";
};

const mapStateToProps = state => ({
  marqueeStep: state.display.marqueeStep,
  text: getMarqueeText(state)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Marquee);

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MonoStereo = props => _react2.default.createElement(
  "div",
  { className: "mono-stereo" },
  _react2.default.createElement("div", {
    id: "stereo",
    className: (0, _classnames2.default)({ selected: props.channels === 2 })
  }),
  _react2.default.createElement("div", { id: "mono", className: (0, _classnames2.default)({ selected: props.channels === 1 }) })
);

exports.default = (0, _reactRedux.connect)(state => ({ channels: state.media.channels }))(MonoStereo);

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Position = ({
  position,
  seekToPercentComplete,
  displayedPosition,
  setPosition
}) => {
  // In shade mode, the position slider shows up differently depending on if
  // it's near the start, middle or end of its progress
  let className = "";
  if (position <= 33) {
    className = "left";
  } else if (position >= 66) {
    className = "right";
  }

  return _react2.default.createElement("input", {
    id: "position",
    className: className,
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: displayedPosition,
    onInput: setPosition,
    onChange: () => {} /* React complains without this, can probably rename onInput to onChange */
    ,
    onMouseUp: seekToPercentComplete,
    onMouseDown: setPosition,
    title: "Seeking Bar"
  });
};

const mapStateToProps = ({ media, userInput }) => {
  let position;
  if (media.length) {
    position = Math.floor(media.timeElapsed) / media.length * 100;
  } else {
    position = 0;
  }

  const displayedPosition = userInput.focus === "position" ? userInput.scrubPosition : position;

  return {
    displayedPosition,
    position
  };
};

const mapDispatchToProps = dispatch => ({
  seekToPercentComplete: e => {
    dispatch({ type: _actionTypes.SEEK_TO_PERCENT_COMPLETE, percent: e.target.value });
    dispatch({ type: _actionTypes.UNSET_FOCUS });
  },
  setPosition: e => {
    dispatch({ type: _actionTypes.SET_FOCUS, input: "position" });
    dispatch({ type: _actionTypes.SET_SCRUB_POSITION, position: e.target.value });
  }
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Position);

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionCreators = __webpack_require__(2);

var _ContextMenuWrapper = __webpack_require__(49);

var _ContextMenuWrapper2 = _interopRequireDefault(_ContextMenuWrapper);

var _ContextMenu = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Repeat = ({ repeat, handleClick }) => _react2.default.createElement(
  _ContextMenuWrapper2.default,
  {
    renderContents: () => _react2.default.createElement(_ContextMenu.Node, {
      checked: repeat,
      label: "Repeat",
      onClick: handleClick,
      hotkey: "(R)"
    })
  },
  _react2.default.createElement("div", {
    id: "repeat",
    className: (0, _classnames2.default)({ selected: repeat }),
    onClick: handleClick,
    title: "Toggle Repeat"
  })
);

const mapStateToProps = state => ({
  repeat: state.media.repeat
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch((0, _actionCreators.toggleRepeat)())
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Repeat);

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ClickedDiv = __webpack_require__(51);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Shade = props => _react2.default.createElement(_ClickedDiv2.default, {
  id: "shade",
  onMouseDown: props.handleClick,
  onDoubleClick: e => e.stopPropagation(),
  title: "Toggle Windowshade Mode"
});

const mapDispatchToProps = {
  handleClick: _actionCreators.toggleMainWindowShadeMode
};

exports.default = (0, _reactRedux.connect)(() => ({}), mapDispatchToProps)(Shade);

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ClickedDiv = __webpack_require__(51);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Minimize = ({ minimize }) => _react2.default.createElement(_ClickedDiv2.default, { id: "minimize", title: "Minimize", onClick: minimize });

const mapDispatchToProps = {
  minimize: () => ({ type: _actionTypes.MINIMIZE_WINAMP })
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Minimize);

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionCreators = __webpack_require__(2);

var _ContextMenuWrapper = __webpack_require__(49);

var _ContextMenuWrapper2 = _interopRequireDefault(_ContextMenuWrapper);

var _ContextMenu = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Shuffle = ({ shuffle, handleClick }) => _react2.default.createElement(
  _ContextMenuWrapper2.default,
  {
    renderContents: () => _react2.default.createElement(_ContextMenu.Node, {
      checked: shuffle,
      label: "Shuffle",
      onClick: handleClick,
      hotkey: "(S)"
    })
  },
  _react2.default.createElement("div", {
    id: "shuffle",
    className: (0, _classnames2.default)({ selected: shuffle }),
    onClick: handleClick,
    title: "Toggle Shuffle"
  })
);
const mapStateToProps = state => ({
  shuffle: state.media.shuffle
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch((0, _actionCreators.toggleShuffle)())
});
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Shuffle);

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Time = ({ timeElapsed, length, timeMode, toggleTimeMode }) => {
  const seconds = timeMode === _constants.TIME_MODE.ELAPSED ? timeElapsed : length - timeElapsed;

  const timeObj = (0, _utils.getTimeObj)(seconds);
  return _react2.default.createElement(
    "div",
    { id: "time", onClick: toggleTimeMode, className: "countdown" },
    timeMode === _constants.TIME_MODE.REMAINING && _react2.default.createElement("div", { id: "minus-sign" }),
    _react2.default.createElement("div", {
      id: "minute-first-digit",
      className: `digit digit-${timeObj.minutesFirstDigit}`
    }),
    _react2.default.createElement("div", {
      id: "minute-second-digit",
      className: `digit digit-${timeObj.minutesSecondDigit}`
    }),
    _react2.default.createElement("div", {
      id: "second-first-digit",
      className: `digit digit-${timeObj.secondsFirstDigit}`
    }),
    _react2.default.createElement("div", {
      id: "second-second-digit",
      className: `digit digit-${timeObj.secondsSecondDigit}`
    })
  );
};

const mapStateToProps = state => state.media;
const mapDispatchToProps = dispatch => ({
  toggleTimeMode: () => dispatch({ type: _actionTypes.TOGGLE_TIME_MODE })
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Time);

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Volume = __webpack_require__(122);

var _Volume2 = _interopRequireDefault(_Volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainVolume = props => {
  const volume = props.volume;

  const percent = volume / 100;
  const sprite = Math.round(percent * 28);
  const offset = (sprite - 1) * 15;

  const style = {
    backgroundPosition: `0 -${offset}px`
  };
  return _react2.default.createElement(
    "div",
    { id: "volume", style: style },
    _react2.default.createElement(_Volume2.default, null)
  );
};

const mapStateToProps = state => ({
  volume: state.media.volume
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainVolume);

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./main-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./main-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #main-window {\n    position: absolute;\n    height: 116px;\n    width: 275px;\n    /* Ask the browser to scale showing large pixels if possible */\n    image-rendering: -moz-crisp-edges; /* Firefox */\n    image-rendering: -o-crisp-edges; /* Opera */\n    image-rendering: -webkit-optimize-contrast; /* Safari */\n    image-rendering: pixelated; /* Only in Chrome > 40 */\n    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp #title-bar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 14px;\n    width: 275px;\n}\n\n#webamp #option-context,\n#webamp #minimize,\n#webamp #shade,\n#webamp #close {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #title-bar #option {\n    width: 100%;\n    height: 100%;\n}\n\n#webamp #title-bar #option-context {\n    left: 6px;\n}\n#webamp #title-bar #minimize {\n    left: 244px;\n}\n#webamp #title-bar #shade {\n    left: 254px;\n}\n#webamp #title-bar #close {\n    left: 264px;\n}\n#webamp #clutter-bar {\n    position: absolute;\n    top: 22px;\n    left: 10px;\n    height: 43px;\n    width: 8px;\n}\n\n#webamp #clutter-bar div {\n    position: absolute;\n    height: 7px;\n    width: 8px;\n    left: 0px;\n}\n\n#webamp #clutter-bar #button-o {\n    top: 3px;\n    height: 8px;\n}\n#webamp #clutter-bar #button-a {\n    top: 11px;\n}\n#webamp #clutter-bar #button-i {\n    top: 18px;\n}\n#webamp #clutter-bar #button-d {\n    top: 25px;\n    height: 8px;\n}\n#webamp #clutter-bar #button-v {\n    top: 33px;\n}\n\n#webamp #play-pause {\n    position: absolute;\n    top: 28px;\n    left: 26px;\n    height: 9px;\n    width: 9px;\n    background-repeat: no-repeat;\n}\n\n#webamp .play #work-indicator,\n#webamp #work-indicator.selected {\n    position: absolute;\n    top: 28px;\n    left: 24px;\n    height: 9px;\n    width: 3px;\n}\n#webamp .status #time {\n    position: absolute;\n    left: 39px;\n    top: 26px;\n    /* Just to make it clickable */\n    height: 13px;\n    width: 59px;\n}\n\n#webamp .stop .status #time {\n    display: none;\n}\n#webamp .pause .status #time {\n    animation: blink 2s step-start 1s infinite;\n    -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .status #time #minus-sign {\n    /* Note that this get's augmented by the skin CSS if NUM_EX.BMP is present */\n    position: absolute;\n    top: 6px;\n    left: -1px;\n    width: 5px;\n    height: 1px;\n}\n\n#webamp .status #time #minute-first-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 9px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #minute-second-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 21px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #second-first-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 39px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #second-second-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 51px;\n    height: 13px;\n    width: 9px;\n}\n\n#webamp #main-window #visualizer {\n    position: absolute;\n    top: 43px;\n    left: 24px;\n}\n\n#webamp #main-window.shade #visualizer {\n    top: 5px;\n    left: 79px;\n}\n\n#webamp #main-window.stop #visualizer {\n    display: none;\n}\n\n#webamp .text {\n    display: none;\n}\n\n#webamp #marquee {\n    position: absolute;\n    left: 111px;\n    top: 24px;\n    width: 155px;\n    height: 6px;\n    overflow: hidden;\n    display: block;\n    padding: 3px 0px; /* Ensure the target is correct for the cursor */\n}\n\n#webamp .media-info #kbps {\n    position: absolute;\n    left: 111px;\n    top: 43px;\n    width: 15px;\n    height: 6px;\n    overflow: hidden;\n}\n\n#webamp .stop .media-info #kbps {\n    display: none;\n}\n\n#webamp .media-info #khz {\n    position: absolute;\n    left: 156px;\n    top: 43px;\n    width: 10px;\n    height: 6px;\n    overflow: hidden;\n}\n\n#webamp .stop .media-info #khz {\n    display: none;\n}\n\n#webamp .media-info .mono-stereo {\n    position: absolute;\n    left: 212px;\n    top: 41px;\n    width: 57px;\n    height: 12px;\n}\n\n#webamp .media-info .mono-stereo div {\n    position: absolute;\n    height: 12px;\n}\n\n#webamp .media-info .mono-stereo #mono {\n    width: 27px;\n}\n\n#webamp .media-info .mono-stereo #stereo {\n    left: 27px;\n    width: 29px;\n}\n\n#webamp #volume {\n    position: absolute;\n    left: 107px;\n    top: 57px;\n    height: 13px;\n    width: 68px;\n    background-position: 0 0;\n}\n\n#webamp #volume input {\n    height: 13px;\n    /* The input itself, is actually 3px shorter than the background\n     * https://twitter.com/LuigiHann/status/959275940688867328\n     */\n    width: 65px;\n    display: block;\n}\n#webamp #volume input::-webkit-slider-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n#webamp #volume input::-moz-range-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n\n#webamp #balance {\n    position: absolute;\n    left: 177px;\n    top: 57px;\n    height: 13px;\n    width: 38px;\n    background-position: 0 0;\n}\n\n#webamp #balance::-webkit-slider-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n#webamp #balance::-moz-range-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n\n#webamp .windows {\n    position: absolute;\n    left: 219px;\n    top: 58px;\n    width: 46px;\n    height: 12px;\n}\n\n#webamp .windows div {\n    position: absolute;\n    width: 23px;\n    height: 12px;\n}\n\n#webamp .windows #equalizer-button {\n    left: 0;\n}\n\n#webamp .windows #playlist-button {\n    left: 23px;\n}\n\n#webamp #position {\n    position: absolute;\n    left: 16px;\n    top: 72px;\n    width: 248px;\n    height: 10px;\n}\n\n#webamp #position::-webkit-slider-thumb {\n    height: 10px;\n    width: 29px;\n    /*\n     * Fix the strange bug in Safair/mobile-chrome\n     * http://stackoverflow.com/questions/26727769/rendering-glitch-when-manipulating-range-input-value-via-javascript-in-webkit\n     */\n    -webkit-box-sizing: border-box;\n    position: relative;\n}\n\n#webamp #position::-moz-range-thumb {\n    height: 10px;\n    width: 29px;\n}\n\n/* For some reason, we can't use display: none here */\n#webamp .stop #position::-webkit-slider-thumb {\n    visibility: hidden;\n}\n#webamp .stop #position::-moz-range-thumb {\n    visibility: hidden;\n}\n\n/* For some reason this is needed for the position slider to show up now that\n * we are using React.\n */\n#webamp .play #position::-webkit-slider-thumb {\n    visibility: visible;\n}\n\n#webamp .actions div {\n    height: 18px;\n    width: 23px;\n    position: absolute;\n}\n\n#webamp .actions #previous {\n    top: 88px;\n    left: 16px;\n}\n#webamp .actions #play {\n    top: 88px;\n    left: 39px;\n}\n#webamp .actions #pause {\n    top: 88px;\n    left: 62px;\n}\n#webamp .actions #stop {\n    top: 88px;\n    left: 85px;\n}\n#webamp .actions #next {\n    top: 88px;\n    left: 108px;\n    width: 22px;\n}\n\n#webamp #eject {\n    position: absolute;\n    top: 89px;\n    left: 136px;\n    height: 16px;\n    width: 22px;\n}\n\n#webamp .shuffle-repeat {\n    position: absolute;\n    top: 89px;\n    left: 164px;\n    width: 74px;\n}\n\n#webamp .shuffle-repeat div {\n    position: absolute;\n    height: 15px;\n}\n\n#webamp .shuffle-repeat #shuffle {\n    width: 47px;\n}\n\n#webamp .shuffle-repeat #repeat {\n    left: 46px;\n    width: 28px;\n}\n\n#webamp #about {\n    position: absolute;\n    top: 91px;\n    left: 253px;\n    height: 15px;\n    width: 13px;\n}\n\n#webamp .digit {\n    position: absolute;\n    display: inline-block;\n    width: 9px;\n    height: 13px;\n    background-repeat: no-repeat;\n    text-indent: -9999px;\n}\n\n/* Shade View */\n#webamp #main-window.shade {\n    height: 14px;\n}\n\n#webamp .shade .media-info,\n#webamp .shade .windows,\n#webamp .shade #volume,\n#webamp .shade #balance,\n#webamp .shade .shuffle-repeat,\n#webamp .shade .status {\n    display: none;\n}\n#webamp .shade #title-bar {\n}\n\n#webamp .shade .actions div {\n    position: absolute;\n}\n#webamp .shade .actions #previous,\n#webamp .shade .actions #previous:active {\n    background: none;\n    height: 10px;\n    width: 7px;\n    top: 2px;\n    left: 169px;\n}\n#webamp .shade .actions #play,\n#webamp .shade .actions #play:active {\n    background: none;\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 176px;\n}\n#webamp .shade .actions #pause,\n#webamp .shade .actions #pause:active {\n    background: none;\n    height: 10px;\n    width: 9px;\n    top: 2px;\n    left: 186px;\n}\n#webamp .shade .actions #stop,\n#webamp .shade .actions #stop:active {\n    background: none;\n    height: 10px;\n    width: 9px;\n    top: 2px;\n    left: 195px;\n}\n#webamp .shade .actions #next,\n#webamp .shade .actions #next:active {\n    background: none;\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 204px;\n}\n#webamp .shade #eject,\n#webamp .shade #eject:active {\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 215px;\n    background: none;\n}\n\n#webamp .shade #position {\n    position: absolute;\n    left: 226px;\n    top: 4px;\n    width: 17px;\n    height: 7px;\n}\n\n#webamp .shade #position::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n    /* This make it appear. Not sure why */\n    background: none;\n}\n\n#webamp .shade #position::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n    /* This make it appear. Not sure why */\n    background: none;\n}\n\n#webamp #main-window .mini-time {\n    position: absolute;\n    top: 4px;\n    left: 127px;\n}\n", ""]);

// exports


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(4);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

var _utils = __webpack_require__(6);

var _DropTarget = __webpack_require__(71);

var _DropTarget2 = _interopRequireDefault(_DropTarget);

var _Visualizer = __webpack_require__(120);

var _Visualizer2 = _interopRequireDefault(_Visualizer);

var _PlaylistShade = __webpack_require__(299);

var _PlaylistShade2 = _interopRequireDefault(_PlaylistShade);

var _AddMenu = __webpack_require__(300);

var _AddMenu2 = _interopRequireDefault(_AddMenu);

var _RemoveMenu = __webpack_require__(301);

var _RemoveMenu2 = _interopRequireDefault(_RemoveMenu);

var _SelectionMenu = __webpack_require__(302);

var _SelectionMenu2 = _interopRequireDefault(_SelectionMenu);

var _MiscMenu = __webpack_require__(303);

var _MiscMenu2 = _interopRequireDefault(_MiscMenu);

var _ListMenu = __webpack_require__(304);

var _ListMenu2 = _interopRequireDefault(_ListMenu);

var _PlaylistResizeTarget = __webpack_require__(123);

var _PlaylistResizeTarget2 = _interopRequireDefault(_PlaylistResizeTarget);

var _PlaylistActionArea = __webpack_require__(305);

var _PlaylistActionArea2 = _interopRequireDefault(_PlaylistActionArea);

var _TrackList = __webpack_require__(307);

var _TrackList2 = _interopRequireDefault(_TrackList);

var _ScrollBar = __webpack_require__(310);

var _ScrollBar2 = _interopRequireDefault(_ScrollBar);

__webpack_require__(358);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlaylistWindow extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._handleDrop = (e, targetCoords) => {
      const top = e.clientY - targetCoords.y;
      const atIndex = (0, _utils.clamp)(this.props.offset + Math.round((top - 23) / _constants.TRACK_HEIGHT), 0, this.props.maxTrackIndex + 1);
      this.props.loadFilesFromReferences(e, atIndex);
    }, _temp;
  }

  render() {
    var _props = this.props;
    const skinPlaylistStyle = _props.skinPlaylistStyle,
          focusPlaylist = _props.focusPlaylist,
          focused = _props.focused,
          playlistSize = _props.playlistSize,
          playlistWindowPixelSize = _props.playlistWindowPixelSize,
          playlistShade = _props.playlistShade,
          close = _props.close,
          toggleShade = _props.toggleShade,
          analyser = _props.analyser;

    if (playlistShade) {
      return _react2.default.createElement(_PlaylistShade2.default, null);
    }

    const style = {
      color: skinPlaylistStyle.normal,
      backgroundColor: skinPlaylistStyle.normalbg,
      fontFamily: `${skinPlaylistStyle.font}, Arial, sans-serif`,
      height: `${playlistWindowPixelSize.height}px`,
      width: `${playlistWindowPixelSize.width}px`
    };

    const classes = (0, _classnames2.default)("window", "draggable", {
      selected: focused === _constants.WINDOWS.PLAYLIST,
      wide: playlistSize[0] > 2
    });

    const showSpacers = playlistSize[0] % 2 === 0;

    return _react2.default.createElement(
      _DropTarget2.default,
      {
        id: "playlist-window",
        className: classes,
        style: style,
        onMouseDown: focusPlaylist,
        handleDrop: this._handleDrop,
        onWheel: this.props.scrollVolume
      },
      _react2.default.createElement(
        "div",
        { className: "playlist-top draggable", onDoubleClick: toggleShade },
        _react2.default.createElement("div", { className: "playlist-top-left draggable" }),
        showSpacers && _react2.default.createElement("div", { className: "playlist-top-left-spacer draggable" }),
        _react2.default.createElement("div", { className: "playlist-top-left-fill draggable" }),
        _react2.default.createElement("div", { className: "playlist-top-title draggable" }),
        showSpacers && _react2.default.createElement("div", { className: "playlist-top-right-spacer draggable" }),
        _react2.default.createElement("div", { className: "playlist-top-right-fill draggable" }),
        _react2.default.createElement(
          "div",
          { className: "playlist-top-right draggable" },
          _react2.default.createElement("div", { id: "playlist-shade-button", onClick: toggleShade }),
          _react2.default.createElement("div", { id: "playlist-close-button", onClick: close })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "playlist-middle draggable" },
        _react2.default.createElement("div", { className: "playlist-middle-left draggable" }),
        _react2.default.createElement(
          "div",
          { className: "playlist-middle-center" },
          _react2.default.createElement(_TrackList2.default, null)
        ),
        _react2.default.createElement(
          "div",
          { className: "playlist-middle-right draggable" },
          _react2.default.createElement(_ScrollBar2.default, null)
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "playlist-bottom draggable" },
        _react2.default.createElement(
          "div",
          { className: "playlist-bottom-left draggable" },
          _react2.default.createElement(_AddMenu2.default, null),
          _react2.default.createElement(_RemoveMenu2.default, null),
          _react2.default.createElement(_SelectionMenu2.default, null),
          _react2.default.createElement(_MiscMenu2.default, null)
        ),
        _react2.default.createElement("div", { className: "playlist-bottom-center draggable" }),
        _react2.default.createElement(
          "div",
          { className: "playlist-bottom-right draggable" },
          _react2.default.createElement(
            "div",
            {
              className: "playlist-visualizer",
              onClick: this.props.toggleVisualizerStyle
            },
            /* TODO: Resize the visualizer so it fits */
            false && _react2.default.createElement(_Visualizer2.default, { analyser: analyser })
          ),
          _react2.default.createElement(_PlaylistActionArea2.default, null),
          _react2.default.createElement(_ListMenu2.default, null),
          _react2.default.createElement("div", {
            id: "playlist-scroll-up-button",
            onClick: this.props.scrollUpFourTracks
          }),
          _react2.default.createElement("div", {
            id: "playlist-scroll-down-button",
            onClick: this.props.scrollDownFourTracks
          }),
          _react2.default.createElement(_PlaylistResizeTarget2.default, null)
        )
      )
    );
  }
}

const mapDispatchToProps = {
  focusPlaylist: () => ({
    type: _actionTypes.SET_FOCUSED_WINDOW,
    window: _constants.WINDOWS.PLAYLIST
  }),
  close: () => (0, _actionCreators.closeWindow)("playlist"),
  toggleShade: _actionCreators.togglePlaylistShadeMode,
  toggleVisualizerStyle: _actionCreators.toggleVisualizerStyle,
  scrollUpFourTracks: _actionCreators.scrollUpFourTracks,
  scrollDownFourTracks: _actionCreators.scrollDownFourTracks,
  loadFilesFromReferences: (e, startIndex) => (0, _actionCreators.loadFilesFromReferences)(e.dataTransfer.files, null, startIndex),
  scrollVolume: _actionCreators.scrollVolume
};

const mapStateToProps = state => {
  const focused = state.windows.focused,
        duration = state.media.duration,
        trackOrder = state.playlist.trackOrder;


  return {
    offset: (0, _selectors.getScrollOffset)(state),
    maxTrackIndex: trackOrder.length - 1,
    playlistWindowPixelSize: (0, _selectors.getWindowPixelSize)(state, "playlist"),
    focused,
    skinPlaylistStyle: (0, _selectors.getSkinPlaylistStyle)(state),
    playlistSize: (0, _selectors.getWindowSize)(state, "playlist"),
    playlistShade: (0, _selectors.getWindowShade)(state, "playlist"),
    duration
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlaylistWindow);

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = __webpack_require__(5);

var _utils = __webpack_require__(6);

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(4);

var _actionCreators = __webpack_require__(2);

var _CharacterString = __webpack_require__(36);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

var _PlaylistResizeTarget = __webpack_require__(123);

var _PlaylistResizeTarget2 = _interopRequireDefault(_PlaylistResizeTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlaylistShade extends _react2.default.Component {
  _addedWidth() {
    return this.props.playlistSize[0] * _constants.WINDOW_RESIZE_SEGMENT_WIDTH;
  }

  _trimmedName() {
    const name = this.props.name;

    if (name == null) {
      return "[No file]";
    }

    const MIN_NAME_WIDTH = 205;

    const nameLength = (MIN_NAME_WIDTH + this._addedWidth()) / _constants.CHARACTER_WIDTH;
    return name.length > nameLength ? name.slice(0, nameLength - 1) + _constants.UTF8_ELLIPSIS : name;
  }

  _time() {
    var _props = this.props;
    const length = _props.length,
          name = _props.name;

    return name == null ? "" : (0, _utils.getTimeStr)(length);
  }

  render() {
    var _props2 = this.props;
    const toggleShade = _props2.toggleShade,
          close = _props2.close,
          focusPlaylist = _props2.focusPlaylist,
          focused = _props2.focused;


    const style = {
      width: `${_constants.WINDOW_WIDTH + this._addedWidth()}px`
    };

    const classes = (0, _classnames2.default)("window", "draggable", {
      selected: focused === _constants.WINDOWS.PLAYLIST
    });

    return _react2.default.createElement(
      "div",
      {
        id: "playlist-window-shade",
        className: classes,
        style: { width: style.width },
        onMouseDown: focusPlaylist,
        onDoubleClick: toggleShade
      },
      _react2.default.createElement(
        "div",
        { className: "left" },
        _react2.default.createElement(
          "div",
          { className: "right draggable" },
          _react2.default.createElement(
            "div",
            { id: "playlist-shade-track-title" },
            _react2.default.createElement(
              _CharacterString2.default,
              null,
              this._trimmedName()
            )
          ),
          _react2.default.createElement(
            "div",
            { id: "playlist-shade-time" },
            _react2.default.createElement(
              _CharacterString2.default,
              null,
              this._time()
            )
          ),
          _react2.default.createElement(_PlaylistResizeTarget2.default, { widthOnly: true }),
          _react2.default.createElement("div", { id: "playlist-shade-button", onClick: toggleShade }),
          _react2.default.createElement("div", { id: "playlist-close-button", onClick: close })
        )
      )
    );
  }
}

const mapDispatchToProps = {
  focusPlaylist: () => ({ type: _actionTypes.SET_FOCUSED_WINDOW, window: _constants.WINDOWS.PLAYLIST }),
  close: () => (0, _actionCreators.closeWindow)("playlist"),
  toggleShade: () => (0, _actionCreators.togglePlaylistShadeMode)()
};

const mapStateToProps = state => {
  const focused = state.windows.focused,
        length = state.media.length;

  return {
    focused,
    playlistSize: (0, _selectors.getWindowSize)(state, "playlist"),
    trackOrder: (0, _selectors.getOrderedTracks)(state),
    length,
    name: (0, _selectors.getMinimalMediaText)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlaylistShade);

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _selectors = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

var _fileUtils = __webpack_require__(70);

var _PlaylistMenu = __webpack_require__(37);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const el = document.createElement("input");
el.type = "file";
const DIR_SUPPORT = typeof el.webkitdirectory !== "undefined" || typeof el.mozdirectory !== "undefined" || typeof el.directory !== "undefined";

/* eslint-disable no-alert */

const AddMenu = ({ nextIndex, addFilesAtIndex, addDirAtIndex }) => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-add-menu" },
  _react2.default.createElement("div", { className: "add-url", onClick: () => alert("Not supported in Webamp") }),
  _react2.default.createElement("div", { className: "add-dir", onClick: () => addDirAtIndex(nextIndex) }),
  _react2.default.createElement("div", { className: "add-file", onClick: () => addFilesAtIndex(nextIndex) })
);

const mapStateToProps = state => ({
  nextIndex: (0, _selectors.getTrackCount)(state)
});

const mapDispatchToProps = dispatch => ({
  addFilesAtIndex: async nextIndex => {
    const fileReferences = await (0, _fileUtils.promptForFileReferences)();
    dispatch((0, _actionCreators.addTracksFromReferences)(fileReferences, null, nextIndex));
  },
  addDirAtIndex: async nextIndex => {
    if (!DIR_SUPPORT) {
      alert("Not supported in your browser");
      return;
    }
    const fileReferences = await (0, _fileUtils.promptForFileReferences)({ directory: true });
    dispatch((0, _actionCreators.addTracksFromReferences)(fileReferences, null, nextIndex));
  }
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddMenu);

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _PlaylistMenu = __webpack_require__(37);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */

const RemoveMenu = props => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-remove-menu" },
  _react2.default.createElement("div", {
    className: "remove-misc",
    onClick: () => alert("Not supported in Webamp")
  }),
  _react2.default.createElement("div", { className: "remove-all", onClick: props.removeAll }),
  _react2.default.createElement("div", { className: "crop", onClick: props.crop }),
  _react2.default.createElement("div", { className: "remove-selected", onClick: props.removeSelected })
);

const mapDispatchToProps = {
  removeSelected: _actionCreators.removeSelectedTracks,
  removeAll: _actionCreators.removeAllTracks,
  crop: _actionCreators.cropPlaylist
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(RemoveMenu);

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionTypes = __webpack_require__(3);

var _PlaylistMenu = __webpack_require__(37);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectionMenu = props => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-selection-menu" },
  _react2.default.createElement("div", { className: "invert-selection", onClick: props.invertSelection }),
  _react2.default.createElement("div", { className: "select-zero", onClick: props.selectZero }),
  _react2.default.createElement("div", { className: "select-all", onClick: props.selectAll })
);

const mapDispatchToProps = {
  invertSelection: () => ({ type: _actionTypes.INVERT_SELECTION }),
  selectAll: () => ({ type: _actionTypes.SELECT_ALL }),
  selectZero: () => ({ type: _actionTypes.SELECT_ZERO })
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SelectionMenu);

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(10);

var _ContextMenuTarget = __webpack_require__(72);

var _ContextMenuTarget2 = _interopRequireDefault(_ContextMenuTarget);

var _PlaylistMenu = __webpack_require__(37);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */
/* TODO: This should really be kitty-corner to the upper right hand corner of the MiscMenu */
const SortContextMenu = props => _react2.default.createElement(
  _ContextMenuTarget2.default,
  {
    style: { width: "100%", height: "100%" },
    top: true,
    handle: _react2.default.createElement("div", null)
  },
  _react2.default.createElement(_ContextMenu.Node, { label: "Sort list by title", onClick: props.sortListByTitle }),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_ContextMenu.Node, { label: "Reverse list", onClick: props.reverseList }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Randomize list", onClick: props.randomizeList })
);

const ConnectedSortContextMenu = (0, _reactRedux.connect)(null, {
  reverseList: _actionCreators.reverseList,
  randomizeList: _actionCreators.randomizeList,
  sortListByTitle: _actionCreators.sortListByTitle
})(SortContextMenu);

const MiscOptionsContextMenu = props => _react2.default.createElement(
  _ContextMenuTarget2.default,
  {
    style: { width: "100%", height: "100%" },
    top: true,
    handle: _react2.default.createElement("div", null)
  },
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.downloadHtmlPlaylist, label: "Generate HTML playlist" })
);

const ConnectedMiscOptionsContextMenu = (0, _reactRedux.connect)(null, { downloadHtmlPlaylist: _actionCreators.downloadHtmlPlaylist })(MiscOptionsContextMenu);

const MiscMenu = () => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-misc-menu" },
  _react2.default.createElement(
    "div",
    { className: "sort-list", onClick: e => e.stopPropagation() },
    _react2.default.createElement(ConnectedSortContextMenu, null)
  ),
  _react2.default.createElement("div", {
    className: "file-info",
    onClick: () => alert("Not supported in Webamp")
  }),
  _react2.default.createElement(
    "div",
    { className: "misc-options", onClick: e => e.stopPropagation() },
    _react2.default.createElement(ConnectedMiscOptionsContextMenu, null)
  )
);

exports.default = MiscMenu;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _PlaylistMenu = __webpack_require__(37);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */

const ListMenu = props => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-list-menu" },
  _react2.default.createElement("div", { className: "new-list", onClick: props.removeAllTracks }),
  _react2.default.createElement("div", {
    className: "save-list",
    onClick: () => alert("Not supported in Webamp")
  }),
  _react2.default.createElement("div", {
    className: "load-list",
    onClick: () => alert("Not supported in Webamp")
  })
);

const mapDispatchToProps = {
  removeAllTracks: _actionCreators.removeAllTracks
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ListMenu);

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _MiniTime = __webpack_require__(118);

var _MiniTime2 = _interopRequireDefault(_MiniTime);

var _RunningTimeDisplay = __webpack_require__(306);

var _RunningTimeDisplay2 = _interopRequireDefault(_RunningTimeDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlaylistWindow = props => _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement(_RunningTimeDisplay2.default, null),
  _react2.default.createElement(
    "div",
    { className: "playlist-action-buttons" },
    _react2.default.createElement("div", { className: "playlist-previous-button", onClick: props.previous }),
    _react2.default.createElement("div", { className: "playlist-play-button", onClick: props.play }),
    _react2.default.createElement("div", { className: "playlist-pause-button", onClick: props.pause }),
    _react2.default.createElement("div", { className: "playlist-stop-button", onClick: props.stop }),
    _react2.default.createElement("div", { className: "playlist-next-button", onClick: props.next }),
    _react2.default.createElement("div", {
      className: "playlist-eject-button",
      onClick: props.openMediaFileDialog
    })
  ),
  _react2.default.createElement(_MiniTime2.default, null)
);

const mapDispatchToProps = {
  play: _actionCreators.play,
  pause: _actionCreators.pause,
  stop: _actionCreators.stop,
  openMediaFileDialog: _actionCreators.openMediaFileDialog,
  next: _actionCreators.next,
  previous: _actionCreators.previous
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PlaylistWindow);

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _CharacterString = __webpack_require__(36);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

var _selectors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// While all the browsers I care about support String.prototype.padEnd,
// Not all node versions do, and I want tests to pass in Jest...
// Sigh.
function rightPad(str, len, fillChar) {
  while (str.length < len) {
    str += fillChar;
  }
  return str;
}

const RunningTimeDisplay = props => _react2.default.createElement(
  "div",
  { className: "playlist-running-time-display draggable" },
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _CharacterString2.default,
      null,
      rightPad(props.runningTimeMessage, 18, " ")
    )
  )
);

const mapStateToProps = state => ({
  runningTimeMessage: (0, _selectors.getRunningTimeMessage)(state)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(RunningTimeDisplay);

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(6);

var _selectors = __webpack_require__(5);

var _constants = __webpack_require__(4);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _TrackCell = __webpack_require__(308);

var _TrackCell2 = _interopRequireDefault(_TrackCell);

var _TrackTitle = __webpack_require__(309);

var _TrackTitle2 = _interopRequireDefault(_TrackTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNumberLength(number) {
  return number.toString().length;
}

class TrackList extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._handleMoveClick = e => {
      if (!this._node) {
        return;
      }

      var _node$getBoundingClie = this._node.getBoundingClientRect();

      const top = _node$getBoundingClie.top,
            bottom = _node$getBoundingClie.bottom,
            left = _node$getBoundingClie.left,
            right = _node$getBoundingClie.right;

      const mouseStart = e.clientY;
      let lastDiff = 0;
      const handleMouseMove = ee => {
        const y = ee.clientY,
              x = ee.clientX;

        if (y < top || y > bottom || x < left || x > right) {
          // Mouse is outside the track list
          return;
        }
        const proposedDiff = Math.floor((y - mouseStart) / _constants.TRACK_HEIGHT);
        if (proposedDiff !== lastDiff) {
          const diffDiff = proposedDiff - lastDiff;
          this.props.dragSelected(diffDiff);
          lastDiff = proposedDiff;
        }
      };

      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
      window.addEventListener("mousemove", handleMouseMove);
    }, _temp;
  }

  _renderTracks(format) {
    return this.props.trackIds.map((id, i) => _react2.default.createElement(
      _TrackCell2.default,
      {
        key: id,
        id: id,
        index: this.props.offset + i,
        handleMoveClick: this._handleMoveClick
      },
      format(id, i)
    ));
  }

  render() {
    var _props = this.props;
    const tracks = _props.tracks,
          offset = _props.offset;

    const maxTrackNumberLength = getNumberLength(this.props.numberOfTracks);
    const paddedTrackNumForIndex = i => (i + 1 + offset).toString().padStart(maxTrackNumberLength, "\u00A0");
    return _react2.default.createElement(
      "div",
      {
        ref: node => {
          this._node = node;
        },
        className: "playlist-tracks",
        style: { height: "100%" },
        onClick: this.props.selectZero,
        onWheel: this.props.scrollPlaylistByDelta
      },
      _react2.default.createElement(
        "div",
        { className: "playlist-track-titles" },
        this._renderTracks((id, i) => _react2.default.createElement(_TrackTitle2.default, { id: id, paddedTrackNumber: paddedTrackNumForIndex(i) }))
      ),
      _react2.default.createElement(
        "div",
        { className: "playlist-track-durations" },
        this._renderTracks(id => (0, _utils.getTimeStr)(tracks[id].duration))
      )
    );
  }
}

const mapDispatchToProps = {
  selectZero: () => ({ type: _actionTypes.SELECT_ZERO }),
  dragSelected: _actionCreators.dragSelected,
  scrollPlaylistByDelta: _actionCreators.scrollPlaylistByDelta
};

const mapStateToProps = state => ({
  offset: (0, _selectors.getScrollOffset)(state),
  trackIds: (0, _selectors.getVisibleTrackIds)(state),
  tracks: state.playlist.tracks,
  numberOfTracks: (0, _selectors.getNumberOfTracks)(state)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TrackList);

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionTypes = __webpack_require__(3);

var _selectors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TrackCell extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._onMouseDown = e => {
      if (e.shiftKey) {
        this.props.shiftClick(e);
        return;
      } else if (e.metaKey || e.ctrlKey) {
        this.props.ctrlClick(e);
        return;
      }

      if (!this.props.selected) {
        this.props.click(e);
      }

      this.props.handleMoveClick(e);
    }, _temp;
  }

  render() {
    var _props = this.props;
    const skinPlaylistStyle = _props.skinPlaylistStyle,
          selected = _props.selected,
          current = _props.current,
          children = _props.children,
          onDoubleClick = _props.onDoubleClick;

    const style = {
      backgroundColor: selected ? skinPlaylistStyle.selectedbg : null,
      color: current ? skinPlaylistStyle.current : null
    };
    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)("track-cell", { selected, current }),
        style: style,
        onClick: e => e.stopPropagation(),
        onMouseDown: this._onMouseDown,
        onContextMenu: e => e.preventDefault(),
        onDoubleClick: onDoubleClick
      },
      children
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const tracks = state.playlist.tracks;

  const current = (0, _selectors.getCurrentTrackId)(state) === ownProps.id;
  const track = tracks[ownProps.id];
  return {
    skinPlaylistStyle: (0, _selectors.getSkinPlaylistStyle)(state),
    selected: track.selected,
    current
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  shiftClick: e => {
    e.preventDefault();
    return dispatch({ type: _actionTypes.SHIFT_CLICKED_TRACK, index: ownProps.index });
  },
  ctrlClick: e => {
    e.preventDefault();
    return dispatch({ type: _actionTypes.CTRL_CLICKED_TRACK, index: ownProps.index });
  },
  click: () => dispatch({ type: _actionTypes.CLICKED_TRACK, index: ownProps.index }),
  onDoubleClick: () => dispatch({ type: _actionTypes.PLAY_TRACK, id: ownProps.id })
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TrackCell);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _selectors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TrackTitle = props => _react2.default.createElement(
  "span",
  null,
  props.paddedTrackNumber,
  ". ",
  props.title
);

const mapStateToProps = (state, ownProps) => ({
  title: (0, _selectors.getTrackDisplayName)(state, ownProps.id)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TrackTitle);

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Slider = __webpack_require__(124);

var _Slider2 = _interopRequireDefault(_Slider);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Handle = () => _react2.default.createElement("div", { className: "playlist-scrollbar-handle" });

const ScrollBar = props => _react2.default.createElement(_Slider2.default, {
  className: "playlist-scrollbar",
  type: "range",
  min: 0,
  max: 100,
  step: 1,
  value: props.playlistScrollPosition,
  onChange: props.setPlaylistScrollPosition,
  vertical: true,
  handle: Handle,
  disabled: props.allTracksAreVisible
});

const mapDispatchToProps = {
  setPlaylistScrollPosition: position => (0, _actionCreators.setPlaylistScrollPosition)(100 - position)
};

const mapStateToProps = state => ({
  playlistScrollPosition: (0, _selectors.getPlaylistScrollPosition)(state),
  allTracksAreVisible: (0, _selectors.getVisibleTrackIds)(state).length === state.playlist.length
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ScrollBar);

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(312), __esModule: true };

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(313);
module.exports = __webpack_require__(20).Object.assign;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(38);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(315) });


/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(53);
var gOPS = __webpack_require__(79);
var pIE = __webpack_require__(56);
var toObject = __webpack_require__(131);
var IObject = __webpack_require__(129);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(40)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(30);
var toLength = __webpack_require__(317);
var toAbsoluteIndex = __webpack_require__(318);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(75);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(75);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(320), __esModule: true };

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(321);
__webpack_require__(327);
module.exports = __webpack_require__(85).f('iterator');


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(322)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(133)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(75);
var defined = __webpack_require__(74);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(83);
var descriptor = __webpack_require__(52);
var setToStringTag = __webpack_require__(84);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(26)(IteratorPrototype, __webpack_require__(31)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27);
var anObject = __webpack_require__(39);
var getKeys = __webpack_require__(53);

module.exports = __webpack_require__(29) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(18).document;
module.exports = document && document.documentElement;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(131);
var IE_PROTO = __webpack_require__(76)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(328);
var global = __webpack_require__(18);
var hide = __webpack_require__(26);
var Iterators = __webpack_require__(82);
var TO_STRING_TAG = __webpack_require__(31)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(329);
var step = __webpack_require__(330);
var Iterators = __webpack_require__(82);
var toIObject = __webpack_require__(30);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(133)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(332), __esModule: true };

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(333);
__webpack_require__(338);
__webpack_require__(339);
__webpack_require__(340);
module.exports = __webpack_require__(20).Symbol;


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(18);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(29);
var $export = __webpack_require__(38);
var redefine = __webpack_require__(134);
var META = __webpack_require__(334).KEY;
var $fails = __webpack_require__(40);
var shared = __webpack_require__(77);
var setToStringTag = __webpack_require__(84);
var uid = __webpack_require__(55);
var wks = __webpack_require__(31);
var wksExt = __webpack_require__(85);
var wksDefine = __webpack_require__(86);
var enumKeys = __webpack_require__(335);
var isArray = __webpack_require__(336);
var anObject = __webpack_require__(39);
var isObject = __webpack_require__(28);
var toIObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(73);
var createDesc = __webpack_require__(52);
var _create = __webpack_require__(83);
var gOPNExt = __webpack_require__(337);
var $GOPD = __webpack_require__(136);
var $DP = __webpack_require__(27);
var $keys = __webpack_require__(53);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(135).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(56).f = $propertyIsEnumerable;
  __webpack_require__(79).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(54)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(26)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(55)('meta');
var isObject = __webpack_require__(28);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(27).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(40)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(53);
var gOPS = __webpack_require__(79);
var pIE = __webpack_require__(56);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(130);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(30);
var gOPN = __webpack_require__(135).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 338 */
/***/ (function(module, exports) {



/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86)('asyncIterator');


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86)('observable');


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(342), __esModule: true };

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(343);
module.exports = __webpack_require__(20).Object.setPrototypeOf;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(38);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(344).set });


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(28);
var anObject = __webpack_require__(39);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(125)(Function.call, __webpack_require__(136).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(346), __esModule: true };

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(347);
var $Object = __webpack_require__(20).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(38);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(83) });


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = (0, _extends3['default'])({}, style, positonStyle);
  return included ? _react2['default'].createElement('div', { className: className, style: elStyle }) : null;
}; /* eslint-disable react/prop-types */
exports['default'] = Track;
module.exports = exports['default'];

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(137);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(81);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(87);

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(350);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(88);

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(354);

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(355);

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(356);

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(138);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd(e);
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (false) {
        var step = props.step,
            max = props.max,
            min = props.min;

        (0, _warning2['default'])(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Component.prototype.componentWillUnmount) _Component.prototype.componentWillUnmount.call(this);
      this.removeDocumentEvents();
    };

    ComponentEnhancer.prototype.componentDidMount = function componentDidMount() {
      // Snapshot testing cannot handle refs, so be sure to null-check this.
      this.document = this.sliderRef && this.sliderRef.ownerDocument;
    };

    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = (0, _addEventListener2['default'])(this.document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = (0, _addEventListener2['default'])(this.document, 'touchend', this.onEnd);
    };

    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
      this.onMouseMoveListener = (0, _addEventListener2['default'])(this.document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = (0, _addEventListener2['default'])(this.document, 'mouseup', this.onEnd);
    };

    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    };

    ComponentEnhancer.prototype.focus = function focus() {
      if (!this.props.disabled) {
        this.handlesRefs[0].focus();
      }
    };

    ComponentEnhancer.prototype.blur = function blur() {
      if (!this.props.disabled) {
        this.handlesRefs[0].blur();
      }
    };

    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
      var slider = this.sliderRef;
      var rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    };

    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
      var slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      var coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    };

    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
      var _props = this.props,
          vertical = _props.vertical,
          min = _props.min,
          max = _props.max;

      var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    };

    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
      var pixelOffset = position - this.getSliderStart();
      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    };

    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;

      var ratio = (value - min) / (max - min);
      return ratio * 100;
    };

    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    };

    ComponentEnhancer.prototype.render = function render() {
      var _classNames;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          className = _props3.className,
          marks = _props3.marks,
          dots = _props3.dots,
          step = _props3.step,
          included = _props3.included,
          disabled = _props3.disabled,
          vertical = _props3.vertical,
          min = _props3.min,
          max = _props3.max,
          children = _props3.children,
          maximumTrackStyle = _props3.maximumTrackStyle,
          style = _props3.style,
          railStyle = _props3.railStyle,
          dotStyle = _props3.dotStyle,
          activeDotStyle = _props3.activeDotStyle;

      var _Component$prototype$ = _Component.prototype.render.call(this),
          tracks = _Component$prototype$.tracks,
          handles = _Component$prototype$.handles;

      var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, _classNames[prefixCls + '-with-marks'] = Object.keys(marks).length, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-vertical'] = vertical, _classNames[className] = className, _classNames));
      return _react2['default'].createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        },
        _react2['default'].createElement('div', {
          className: prefixCls + '-rail',
          style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
        }),
        tracks,
        _react2['default'].createElement(_Steps2['default'], {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }),
        handles,
        _react2['default'].createElement(_Marks2['default'], {
          className: prefixCls + '-mark',
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    };

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object,
    autoFocus: _propTypes2['default'].bool,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(351);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(352);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(353);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(67);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(88);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning2['default'])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends3['default'])({ bottom: offset }, dotStyle) : (0, _extends3['default'])({ left: offset }, dotStyle);
    if (isActived) {
      style = (0, _extends3['default'])({}, style, activeDotStyle);
    }

    var pointClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[prefixCls + '-dot'] = true, _classNames[prefixCls + '-dot-active'] = isActived, _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

exports['default'] = Steps;
module.exports = exports['default'];

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !_react2['default'].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[className + '-text'] = true, _classNames[className + '-text-active'] = isActive, _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _extends3['default'])({}, style, markPoint.style) : style;
    return _react2['default'].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

exports['default'] = Marks;
module.exports = exports['default'];

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(25);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(137);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(81);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(87);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    (0, _classCallCheck3['default'])(this, Handle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.focus = function focus() {
    this.handle.focus();
  };

  Handle.prototype.blur = function blur() {
    this.handle.blur();
  };

  Handle.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        style = _props.style,
        disabled = _props.disabled,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        tabIndex = _props.tabIndex,
        restProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);


    var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var elStyle = (0, _extends3['default'])({}, style, postionStyle);
    var ariaProps = {};
    if (value !== undefined) {
      ariaProps = (0, _extends3['default'])({}, ariaProps, {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      });
    }
    return _react2['default'].createElement('div', (0, _extends3['default'])({
      ref: function ref(node) {
        return _this2.handle = node;
      },
      role: 'slider',
      tabIndex: tabIndex || 0
    }, ariaProps, restProps, {
      className: className,
      style: elStyle
    }));
  };

  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  tabIndex: _propTypes2['default'].number
};
module.exports = exports['default'];

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;
module.exports = exports['default'];

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./playlist-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./playlist-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #playlist-window {\n    display: flex;\n    flex-direction: column;\n}\n\n#webamp .playlist-top {\n    width: 100%;\n    min-height: 20px;\n    max-height: 20px;\n    position: relative;\n    display: flex;\n}\n\n#webamp .playlist-top-left {\n    width: 25px;\n}\n\n#webamp .playlist-top-left-spacer {\n    width: 12px;\n}\n\n#webamp .playlist-top-left-fill {\n    flex-grow: 1;\n    background-position: right;\n}\n\n#webamp .playlist-top-right-spacer {\n    /* This goes to the right of the center */\n    width: 13px;\n}\n\n#webamp .playlist-top-right-fill {\n    flex-grow: 1;\n    background-position: right;\n}\n\n#webamp .playlist-top-title {\n    width: 100px;\n}\n\n#webamp .playlist-top-right {\n    width: 25px;\n}\n\n#webamp .playlist-middle {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    overflow: hidden;\n}\n\n#webamp .playlist-middle-left {\n    background-repeat: repeat-y;\n    width: 12px;\n    min-width: 12px;\n}\n\n#webamp .playlist-middle-center {\n    flex-grow: 1;\n    padding: 3px 0;\n    min-width: 0; /* Not sure why this is needed */\n}\n\n#webamp .playlist-tracks {\n    display: flex;\n    flex: 1 0 auto;\n}\n\n#webamp .playlist-tracks .track-cell {\n    height: 13px;\n    line-height: 13px;\n    font-size: 9px;\n    letter-spacing: 0.5px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n#webamp .playlist-track-durations > div {\n    padding-right: 3px;\n    text-align: right;\n}\n\n#webamp .playlist-track-titles {\n    flex: 1 1 auto;\n    overflow: hidden;\n}\n\n#webamp .playlist-track-titles > div {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n#webamp .playlist-middle-right {\n    background-repeat: repeat-y;\n    background-position: top right;\n    width: 20px;\n    min-width: 20px;\n    position: relative;\n    padding-bottom: 18px;\n}\n\n#webamp .playlist-scrollbar {\n    height: 100%;\n    width: 8px;\n    margin-left: 5px;\n}\n\n#webamp .playlist-scrollbar-handle {\n    width: 8x;\n    height: 18px;\n}\n\n#webamp .playlist-bottom {\n    width: 100%;\n    height: 38px;\n    min-height: 38px;\n    max-height: 38px;\n    position: relative;\n}\n\n#webamp .playlist-bottom-left {\n    width: 125px;\n    height: 100%;\n    position: absolute;\n}\n\n#webamp .playlist-menu li {\n    list-style: none;\n    display: none;\n    width: 22px;\n    height: 18px;\n    padding: 0;\n    margin: 0;\n}\n\n#webamp .playlist-menu li > div {\n    height: 100%;\n}\n\n#webamp .playlist-menu ul {\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    bottom: 0;\n}\n\n#webamp .playlist-menu.selected li {\n    display: block;\n}\n\n#webamp .playlist-menu .bar {\n    position: absolute;\n    bottom: 0;\n    left: -3px;\n    width: 3px;\n    height: 54px;\n}\n\n#webamp #playlist-add-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 14px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-remove-menu.playlist-menu .bar {\n    height: 72px;\n}\n\n#webamp #playlist-remove-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 43px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-selection-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 72px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-misc-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 101px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-list-menu {\n    position: absolute;\n    bottom: 12px;\n    right: 22px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp .playlist-bottom-right {\n    width: 150px;\n    height: 100%;\n    position: absolute;\n    right: 0;\n}\n\n#webamp .playlist-running-time-display {\n    position: absolute;\n    top: 10px;\n    left: 7px;\n    height: 10px;\n}\n\n#webamp .playlist-action-buttons {\n    position: absolute;\n    top: 22px;\n    left: 3px;\n    display: flex;\n}\n\n#webamp .playlist-action-buttons > div {\n    height: 10px;\n    width: 10px;\n}\n\n#webamp #playlist-window .playlist-visualizer {\n    width: 75px;\n    height: 100%;\n    position: absolute;\n    right: 150px;\n    display: none; /* Only show if the window is wide enough */\n}\n\n#webamp #playlist-window.wide .playlist-visualizer {\n    display: block;\n}\n\n#webamp #playlist-window .mini-time {\n    position: absolute;\n    top: 23px;\n    left: 66px;\n}\n\n#webamp #playlist-window #playlist-resize-target {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    height: 20px;\n    width: 20px;\n}\n\n#webamp #playlist-close-button {\n    position: absolute;\n    right: 2px;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #playlist-shade-button {\n    position: absolute;\n    right: 12px;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #playlist-window-shade {\n    height: 14px;\n}\n\n#webamp #playlist-window-shade .left {\n    height: 14px;\n    background-repeat: no-repeat;\n}\n\n#webamp #playlist-window-shade .right {\n    height: 14px;\n    background-repeat: no-repeat;\n    background-position-x: right;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button,\n#webamp #playlist-window #playlist-scroll-down-button {\n    position: absolute;\n    width: 8px;\n    height: 5px;\n    right: 7px;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button {\n    top: 2px;\n}\n#webamp #playlist-window #playlist-scroll-down-button {\n    top: 8px;\n}\n\n#webamp #playlist-window-shade #playlist-resize-target {\n    position: absolute;\n    right: 20px;\n    top: 3px;\n    height: 9px;\n    width: 9px;\n}\n\n#webamp #playlist-shade-track-title {\n    position: absolute;\n    top: 4px;\n    left: 5px;\n}\n\n#webamp #playlist-shade-time {\n    position: absolute;\n    top: 4px;\n    right: 30px;\n}\n\n#webamp #playlist-window #visualizer {\n    position: absolute;\n    /* TODO: These numbers are not quite right */\n    top: 10px;\n    left: 5px;\n}\n", ""]);

// exports


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(4);

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

var _selectors = __webpack_require__(5);

var _Band = __webpack_require__(361);

var _Band2 = _interopRequireDefault(_Band);

var _EqOn = __webpack_require__(362);

var _EqOn2 = _interopRequireDefault(_EqOn);

var _EqAuto = __webpack_require__(363);

var _EqAuto2 = _interopRequireDefault(_EqAuto);

var _EqGraph = __webpack_require__(364);

var _EqGraph2 = _interopRequireDefault(_EqGraph);

var _PresetsContextMenu = __webpack_require__(366);

var _PresetsContextMenu2 = _interopRequireDefault(_PresetsContextMenu);

var _EqualizerShade = __webpack_require__(367);

var _EqualizerShade2 = _interopRequireDefault(_EqualizerShade);

__webpack_require__(368);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bandClassName = band => `band-${band}`;

const EqualizerWindow = props => {
  const doubled = props.doubled,
        selected = props.selected,
        shade = props.shade;


  const className = (0, _classnames2.default)({
    selected,
    doubled,
    shade,
    window: true,
    draggable: true
  });
  return _react2.default.createElement(
    "div",
    {
      id: "equalizer-window",
      className: className,
      onMouseDown: props.focusWindow,
      onWheel: props.scrollVolume
    },
    props.shade ? _react2.default.createElement(_EqualizerShade2.default, null) : _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        {
          className: "equalizer-top title-bar draggable",
          onDoubleClick: props.toggleEqualizerShadeMode
        },
        _react2.default.createElement("div", {
          id: "equalizer-shade",
          onClick: props.toggleEqualizerShadeMode
        }),
        _react2.default.createElement("div", { id: "equalizer-close", onClick: props.closeEqualizerWindow })
      ),
      _react2.default.createElement(_EqOn2.default, null),
      _react2.default.createElement(_EqAuto2.default, null),
      _react2.default.createElement(_EqGraph2.default, null),
      _react2.default.createElement(_PresetsContextMenu2.default, null),
      _react2.default.createElement(_Band2.default, { id: "preamp", band: "preamp", onChange: props.setPreampValue }),
      _react2.default.createElement("div", { id: "plus12db", onClick: props.setEqToMax }),
      _react2.default.createElement("div", { id: "zerodb", onClick: props.setEqToMid }),
      _react2.default.createElement("div", { id: "minus12db", onClick: props.setEqToMin }),
      _constants.BANDS.map(hertz => _react2.default.createElement(_Band2.default, {
        key: hertz,
        id: bandClassName(hertz),
        band: hertz,
        onChange: props.setHertzValue(hertz)
      }))
    )
  );
};

EqualizerWindow.propTypes = {
  doubled: _propTypes2.default.bool.isRequired,
  selected: _propTypes2.default.bool.isRequired,
  shade: _propTypes2.default.bool.isRequired
};

// This does not use the shorthand object syntax becuase `setHertzValue` needs
// to return a function.
const mapDispatchToProps = dispatch => ({
  focusWindow: () => dispatch({ type: _actionTypes.SET_FOCUSED_WINDOW, window: _constants.WINDOWS.EQUALIZER }),
  setPreampValue: value => dispatch((0, _actionCreators.setPreamp)(value)),
  setEqToMin: () => dispatch((0, _actionCreators.setEqToMin)()),
  setEqToMid: () => dispatch((0, _actionCreators.setEqToMid)()),
  setEqToMax: () => dispatch((0, _actionCreators.setEqToMax)()),
  setHertzValue: hertz => value => dispatch((0, _actionCreators.setEqBand)(hertz, value)),
  closeEqualizerWindow: () => dispatch((0, _actionCreators.closeWindow)("equalizer")),
  toggleEqualizerShadeMode: () => dispatch((0, _actionCreators.toggleEqualizerShadeMode)()),
  scrollVolume: e => dispatch((0, _actionCreators.scrollVolume)(e))
});

const mapStateToProps = state => ({
  doubled: state.display.doubled,
  selected: state.windows.focused === _constants.WINDOWS.EQUALIZER,
  shade: (0, _selectors.getWindowShade)(state, "equalizer")
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EqualizerWindow);

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spriteOffsets = exports.spriteNumber = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Slider = __webpack_require__(124);

var _Slider2 = _interopRequireDefault(_Slider);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MAX_VALUE = 100;
// Given a value between 1-100, return the sprite number (0-27)
const spriteNumber = exports.spriteNumber = value => {
  const percent = value / 100;
  return Math.round(percent * 27);
};

// Given a sprite number, return the x,y
const spriteOffsets = exports.spriteOffsets = number => {
  const x = number % 14;
  const y = Math.floor(number / 14);
  return { x, y };
};

const Handle = () => _react2.default.createElement("div", { className: "rc-slider-handle" });

const Band = ({
  value,
  backgroundPosition,
  id,
  onChange,
  handleMouseDown,
  handleMouseUp
}) => _react2.default.createElement(
  "div",
  { id: id, className: "band", style: { backgroundPosition } },
  _react2.default.createElement(_Slider2.default, {
    type: "range",
    min: 0,
    max: MAX_VALUE,
    step: 1,
    value: MAX_VALUE - value,
    vertical: true,
    onChange: onChange,
    onBeforeChange: handleMouseDown,
    onAfterChange: handleMouseUp,
    handle: Handle
  })
);

const mapStateToProps = (state, ownProps) => {
  const value = state.equalizer.sliders[ownProps.band];

  var _spriteOffsets = spriteOffsets(spriteNumber(value));

  const x = _spriteOffsets.x,
        y = _spriteOffsets.y;

  const xOffset = x * 15; // Each sprite is 15px wide
  const yOffset = y * 65; // Each sprite is 15px tall
  const backgroundPosition = `-${xOffset}px -${yOffset}px`;
  return {
    id: ownProps.id,
    value,
    backgroundPosition
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleMouseDown: () => dispatch({ type: _actionTypes.SET_BAND_FOCUS, input: "eq", bandFocused: ownProps.band }),
  handleMouseUp: () => dispatch({ type: _actionTypes.UNSET_FOCUS })
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Band);

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqOn = props => {
  const className = (0, _classnames2.default)({
    selected: props.on
  });
  return _react2.default.createElement("div", { id: "on", className: className, onClick: props.toggleEq });
};

const mapStateToProps = state => ({ on: state.equalizer.on });

exports.default = (0, _reactRedux.connect)(mapStateToProps, { toggleEq: _actionCreators.toggleEq })(EqOn);

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqAuto = props => {
  const className = (0, _classnames2.default)({ selected: props.auto });
  return _react2.default.createElement("div", { id: "auto", className: className, onClick: props.toggleAuto });
};

const toggleAuto = () => dispatch => {
  // We don't support auto.
  dispatch({ type: _actionTypes.SET_EQ_AUTO, value: false });
};

const mapDispatchToProps = { toggleAuto };
exports.default = (0, _reactRedux.connect)(state => ({ auto: state.equalizer.auto }), mapDispatchToProps)(EqAuto);

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _cardinalSplineJs = __webpack_require__(365);

var _utils = __webpack_require__(6);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EqGraph extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;
    this.width = this.canvas.width * 1; // Cast to int
    this.height = this.canvas.height * 1; // Cast to int

    if (this.props.lineColorsImage) {
      this.createColorPattern(this.props.lineColorsImage);
    }
    if (this.props.preampLineUrl) {
      this.createPreampLineImage(this.props.preampLineUrl);
    }
  }

  componentDidUpdate() {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
    this.drawPreampLine();
    this.drawEqLine(); // This should paint on top of the preamp line
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lineColorsImage !== nextProps.lineColorsImage) {
      this.createColorPattern(nextProps.lineColorsImage);
    }
    if (this.props.preampLineUrl !== nextProps.preampLineUrl) {
      this.createPreampLineImage(nextProps.preampLineUrl);
    }
    return true;
  }

  createPreampLineImage(preampLineUrl) {
    const preampLineImg = new Image();
    preampLineImg.onload = () => {
      this.setState({ preampLineImg });
    };
    preampLineImg.src = preampLineUrl;
  }

  createColorPattern(lineColorsImage) {
    const bgImage = new Image();
    bgImage.onload = () => {
      const colorsCanvas = document.createElement("canvas");
      const colorsCtx = colorsCanvas.getContext("2d");
      colorsCanvas.width = bgImage.width * 2;
      colorsCanvas.height = bgImage.height * 2;
      colorsCtx.drawImage(bgImage, 0, 0, colorsCanvas.width, colorsCanvas.height);
      this.setState({
        colorPattern: this.canvasCtx.createPattern(colorsCanvas, "repeat-x")
      });
    };
    bgImage.src = lineColorsImage;
  }

  drawEqLine() {
    if (!this.state.colorPattern) {
      // The skin has not finished loading yet
      return;
    }
    const props = this.props;

    const amplitudes = _constants.BANDS.map(band => props[band]);

    this.canvasCtx.strokeStyle = this.state.colorPattern;
    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.beginPath();
    const paddingLeft = 4; // TODO: This should be 3

    const min = 1;
    const max = 31;

    const points = amplitudes.reduce((prev, value, i) => {
      const percent = (100 - value) / 100;
      const y = (0, _utils.percentToRange)(percent, min, max);
      return prev.concat(paddingLeft + i * 16, y);
    }, []);

    // Spline between points in order to create nice curves
    const tension = 0.5;
    const resolution = 4; // Points in each segment
    const smoothPoints = (0, _cardinalSplineJs.getCurvePoints)(points, tension, resolution);
    for (let i = 0; i < smoothPoints.length; i += 2) {
      // Splining can push peaks out of bounds. So we fudge them back in.
      const y = (0, _utils.clamp)(smoothPoints[i + 1], min, max);
      this.canvasCtx.lineTo(smoothPoints[i], y);
    }

    this.canvasCtx.stroke();
  }

  drawPreampLine() {
    const preampLineImg = this.state.preampLineImg;

    if (!preampLineImg) {
      // The skin has not finished loading yet
      return;
    }
    const preampValue = (0, _utils.percentToRange)(this.props.preamp / 100, 0, 30);
    this.canvasCtx.drawImage(this.state.preampLineImg, 0, preampValue, preampLineImg.width * 2, preampLineImg.height * 2);
  }

  render() {
    return _react2.default.createElement("canvas", {
      id: "eqGraph",
      ref: node => this.canvas = node,
      width: "152",
      height: "32"
    });
  }
}

exports.default = (0, _reactRedux.connect)(state => _extends({}, state.equalizer.sliders, {
  lineColorsImage: state.display.skinImages.EQ_GRAPH_LINE_COLORS,
  preampLineUrl: state.display.skinImages.EQ_PREAMP_LINE
}))(EqGraph);

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

/*	Curve calc function for canvas 2.3.8
 *	(c) Epistemex 2013-2018
 *	www.epistemex.com
 *	License: MIT
 */
function getCurvePoints(h,t,f,c){if(typeof h==="undefined"||h.length<2){return new Float32Array(0)}t=typeof t==="number"?t:0.5;f=typeof f==="number"?f:25;var j,d=1,e=h.length,n=0,m=(e-2)*f+2+(c?2*f:0),k=new Float32Array(m),a=new Float32Array((f+2)<<2),b=4;j=h.slice(0);if(c){j.unshift(h[e-1]);j.unshift(h[e-2]);j.push(h[0],h[1])}else{j.unshift(h[1]);j.unshift(h[0]);j.push(h[e-2],h[e-1])}a[0]=1;for(;d<f;d++){var o=d/f,p=o*o,r=p*o,q=r*2,s=p*3;a[b++]=q-s+1;a[b++]=s-q;a[b++]=r-2*p+o;a[b++]=r-p}a[++b]=1;g(j,a,e,t);if(c){j=[];j.push(h[e-4],h[e-3],h[e-2],h[e-1],h[0],h[1],h[2],h[3]);g(j,a,4,t)}function g(G,z,B,M){for(var A=2,H;A<B;A+=2){var C=G[A],D=G[A+1],E=G[A+2],F=G[A+3],I=(E-G[A-2])*M,J=(F-G[A-1])*M,K=(G[A+4]-C)*M,L=(G[A+5]-D)*M,u=0,v,w,x,y;for(H=0;H<f;H++){v=z[u++];w=z[u++];x=z[u++];y=z[u++];k[n++]=v*C+w*E+x*I+y*K;k[n++]=v*D+w*F+x*J+y*L}}}e=c?0:h.length-2;k[n++]=h[e++];k[n]=h[e];return k}if(true){exports.getCurvePoints=getCurvePoints};

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(10);

var _ContextMenuTarget = __webpack_require__(72);

var _ContextMenuTarget2 = _interopRequireDefault(_ContextMenuTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PresetsContextMenu = props => _react2.default.createElement(
  _ContextMenuTarget2.default,
  { top: true, id: "presets-context", handle: _react2.default.createElement("div", { id: "presets" }) },
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.openEqfFileDialog, label: "Load" }),
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.downloadPreset, label: "Save" })
);

const mapDispatchToProps = { openEqfFileDialog: _actionCreators.openEqfFileDialog, downloadPreset: _actionCreators.downloadPreset };

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PresetsContextMenu);

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Volume = __webpack_require__(122);

var _Volume2 = _interopRequireDefault(_Volume);

var _Balance = __webpack_require__(121);

var _Balance2 = _interopRequireDefault(_Balance);

var _utils = __webpack_require__(6);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqualizerShade = props => {
  const volume = props.volume,
        balance = props.balance;


  const classes = ["left", "center", "right"];
  const eqVolumeClassName = (0, _utils.segment)(0, 100, volume, classes);
  const eqBalanceClassName = (0, _utils.segment)(-100, 100, balance, classes);
  return _react2.default.createElement(
    "div",
    {
      className: "draggable",
      onDoubleClick: props.toggleEqualizerShadeMode,
      style: { width: "100%", height: "100%" }
    },
    _react2.default.createElement("div", { id: "equalizer-shade", onClick: props.toggleEqualizerShadeMode }),
    _react2.default.createElement("div", { id: "equalizer-close", onClick: props.closeWindow }),
    _react2.default.createElement(_Volume2.default, { id: "equalizer-volume", className: eqVolumeClassName }),
    _react2.default.createElement(_Balance2.default, { id: "equalizer-balance", className: eqBalanceClassName })
  );
};

const mapDispatchToProps = {
  closeWindow: () => (0, _actionCreators.closeWindow)("equalizer"),
  toggleEqualizerShadeMode: _actionCreators.toggleEqualizerShadeMode
};

const mapStateToProps = state => ({
  volume: state.media.volume,
  balance: state.media.balance
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EqualizerShade);

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(369);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./equalizer-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./equalizer-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #equalizer-window {\n    height: 116px;\n    width: 275px;\n}\n\n#webamp #equalizer-window.shade {\n    height: 14px;\n}\n\n#webamp #equalizer-volume {\n    position: absolute;\n    left: 61px;\n    top: 4px;\n    height: 6px;\n    width: 97px;\n    background-position: 0 0;\n}\n\n#webamp #equalizer-volume::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-volume::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-balance {\n    position: absolute;\n    left: 164px;\n    top: 4px;\n    height: 6px;\n    width: 43px;\n    background-position: 0 0;\n}\n\n#webamp #equalizer-balance::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-balance::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp .equalizer-top {\n    height: 14px;\n    width: 275px;\n    position: relative;\n}\n\n#webamp #equalizer-close {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    left: 264px;\n    top: 3px;\n}\n\n#webamp #equalizer-shade {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    left: 254px;\n    top: 3px;\n}\n\n#webamp #on {\n    position: absolute;\n    width: 26px;\n    height: 12px;\n    top: 18px;\n    left: 14px;\n}\n\n#webamp #auto {\n    position: absolute;\n    width: 32px;\n    height: 12px;\n    top: 18px;\n    left: 40px;\n}\n\n#webamp #presets-context {\n    position: absolute;\n    width: 44px;\n    height: 12px;\n    top: 18px;\n    left: 217px;\n}\n\n#webamp #presets {\n    width: 100%;\n    height: 100%;\n}\n\n#webamp #eqGraph {\n    position: absolute;\n    width: 113px;\n    height: 19px;\n    top: 17px;\n    left: 86px;\n}\n\n#webamp #preamp {\n    position: absolute;\n    left: 21px;\n    top: 38px;\n}\n\n#webamp #plus12db {\n    position: absolute;\n    left: 45px;\n    top: 36px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #zerodb {\n    position: absolute;\n    left: 45px;\n    top: 64px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #minus12db {\n    position: absolute;\n    left: 45px;\n    top: 95px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #band-60 {\n    position: absolute;\n    left: 78px;\n    top: 38px;\n}\n\n#webamp #band-170 {\n    position: absolute;\n    left: 96px;\n    top: 38px;\n}\n\n#webamp #band-310 {\n    position: absolute;\n    left: 114px;\n    top: 38px;\n}\n\n#webamp #band-600 {\n    position: absolute;\n    left: 132px;\n    top: 38px;\n}\n\n#webamp #band-1000 {\n    position: absolute;\n    left: 150px;\n    top: 38px;\n}\n\n#webamp #band-3000 {\n    position: absolute;\n    left: 168px;\n    top: 38px;\n}\n\n#webamp #band-6000 {\n    position: absolute;\n    left: 186px;\n    top: 38px;\n}\n\n#webamp #band-12000 {\n    position: absolute;\n    left: 204px;\n    top: 38px;\n}\n\n#webamp #band-14000 {\n    position: absolute;\n    left: 222px;\n    top: 38px;\n}\n\n#webamp #band-16000 {\n    position: absolute;\n    left: 240px;\n    top: 38px;\n}\n\n#webamp .band {\n    width: 14px;\n    height: 63px;\n}\n\n#webamp .band .rc-slider {\n    height: 51px;\n    width: 14px;\n    margin-top: 6px;\n}\n\n#webamp .band .rc-slider .rc-slider-handle {\n    width: 11px;\n    height: 11px;\n    margin: -6px 0 0 1px;\n    position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // Dynamically set the css background images for all the sprites


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(1);

var _constants = __webpack_require__(4);

var _skinSelectors = __webpack_require__(371);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CSS_PREFIX = "#webamp";

const mapRegionNamesToIds = {
  normal: "mainWindowClipPath",
  windowshade: "shadeMainWindowClipPath",
  equalizer: "equalizerWindowClipPath",
  equalizerws: "shadeEqualizerWindowClipPath"
};

const mapRegionNamesToMatcher = {
  normal: "#main-window:not(.shade)",
  windowshade: "#main-window.shade",
  equalizer: "#equalizer-window:not(.shade)",
  equalizerws: "#equalizer-window.shade"
};

const numExIsUsed = skinImages => !!skinImages.DIGIT_0_EX;

class Css extends _react2.default.Component {
  componentWillMount() {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "webamp-skin";
    document.head.appendChild(style);
    this.style = style;
  }

  componentWillUnmount() {
    this.style.remove();
    this.style = null;
  }

  render() {
    return (0, _reactDom.createPortal)(this.props.children, this.style);
  }
}

class ClipPaths extends _react2.default.Component {
  componentWillMount() {
    const paths = document.createElement("div");
    document.body.appendChild(paths);
    this.paths = paths;
  }

  componentWillUnmount() {
    this.paths.remove();
    this.paths = null;
  }

  render() {
    // this.props.children should be an object containing arrays of strings. The
    // keys are ids, and the arrays are arrays of polygon point strings
    const children = this.props.children;


    return (0, _reactDom.createPortal)(_react2.default.createElement(
      "svg",
      { height: 0, width: 0 },
      _react2.default.createElement(
        "defs",
        null,
        Object.keys(children).map(id => _react2.default.createElement(
          "clipPath",
          { id: id, key: id },
          children[id].map((points, i) => _react2.default.createElement("polygon", { points: points, key: i }))
        ))
      )
    ), this.paths);
  }
}

const FALLBACKS = {
  MAIN_BALANCE_BACKGROUND: "MAIN_VOLUME_BACKGROUND",
  MAIN_BALANCE_THUMB: "MAIN_VOLUME_THUMB",
  MAIN_BALANCE_THUMB_ACTIVE: "MAIN_VOLUME_THUMB_SELECTED"
};

const Skin = props => {
  const skinImages = props.skinImages,
        skinCursors = props.skinCursors,
        skinGenLetterWidths = props.skinGenLetterWidths;

  if (!skinImages || !skinCursors) {
    return null;
  }
  const cssRules = [];
  Object.keys(_skinSelectors.imageSelectors).forEach(imageName => {
    const imageUrl = skinImages[imageName] || skinImages[FALLBACKS[imageName]];
    if (imageUrl) {
      _skinSelectors.imageSelectors[imageName].forEach(selector => {
        cssRules.push(`${CSS_PREFIX} ${selector} {background-image: url(${imageUrl})}`);
      });
    }
  });

  if (skinGenLetterWidths != null) {
    _constants.LETTERS.forEach(letter => {
      const width = skinGenLetterWidths[`GEN_TEXT_${letter}`];
      const selectedWidth = skinGenLetterWidths[`GEN_TEXT_SELECTED_${letter}`];
      cssRules.push(`${CSS_PREFIX} .gen-text-${letter.toLowerCase()} {width: ${width}px;}`);
      cssRules.push(`${CSS_PREFIX} .selected .gen-text-${letter.toLowerCase()} {width: ${selectedWidth}px;}`);
    });
  }
  Object.keys(_skinSelectors.cursorSelectors).forEach(cursorName => {
    const cursorUrl = skinCursors[cursorName];
    if (cursorUrl) {
      _skinSelectors.cursorSelectors[cursorName].forEach(selector => {
        cssRules.push(`${
        // TODO: Fix this hack
        // Maybe our CSS name spacing should be based on some other class/id
        // than the one we use for defining the main div.
        // That way it could be shared by both the player and the context menu.
        selector.startsWith("#webamp-context-menu") ? "" : CSS_PREFIX} ${selector} {cursor: url(${cursorUrl}), auto}`);
      });
    }
  });

  if (numExIsUsed(skinImages)) {
    // This alternate number file requires that the minus sign be
    // formatted differently.
    cssRules.push(`${CSS_PREFIX} .status #time #minus-sign { top: 0px; left: -1px; width: 9px; height: 13px; }`);
  }

  const clipPaths = {};
  for (const _ref of Object.entries(props.skinRegion)) {
    var _ref2 = _slicedToArray(_ref, 2);

    const regionName = _ref2[0];
    const polygons = _ref2[1];

    if (polygons) {
      const matcher = mapRegionNamesToMatcher[regionName];
      const id = mapRegionNamesToIds[regionName];
      clipPaths[id] = polygons;
      cssRules.push(`${CSS_PREFIX} ${matcher} { clip-path: url(#${id}); }`);
    }
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      Css,
      null,
      cssRules.join("\n")
    ),
    _react2.default.createElement(
      ClipPaths,
      null,
      clipPaths
    )
  );
};

exports.default = (0, _reactRedux.connect)(state => ({
  skinImages: state.display.skinImages,
  skinCursors: state.display.skinCursors,
  skinRegion: state.display.skinRegion,
  skinGenLetterWidths: state.display.skinGenLetterWidths
}))(Skin);

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cursorSelectors = exports.imageSelectors = undefined;

var _constants = __webpack_require__(4);

var _skinSprites = __webpack_require__(114);

const imageSelectors = exports.imageSelectors = {
  MAIN_BALANCE_BACKGROUND: ["#balance"],
  MAIN_BALANCE_THUMB: ["#balance::-webkit-slider-thumb", "#balance::-moz-range-thumb"],
  MAIN_BALANCE_THUMB_ACTIVE: ["#balance::-webkit-slider-thumb:active", "#balance::-moz-range-thumb:active"],
  MAIN_PREVIOUS_BUTTON: [".actions #previous"],
  MAIN_PREVIOUS_BUTTON_ACTIVE: [".actions #previous:active"],
  MAIN_PLAY_BUTTON: [".actions #play"],
  MAIN_PLAY_BUTTON_ACTIVE: [".actions #play:active"],
  MAIN_PAUSE_BUTTON: [".actions #pause"],
  MAIN_PAUSE_BUTTON_ACTIVE: [".actions #pause:active"],
  MAIN_STOP_BUTTON: [".actions #stop"],
  MAIN_STOP_BUTTON_ACTIVE: [".actions #stop:active"],
  MAIN_NEXT_BUTTON: [".actions #next"],
  MAIN_NEXT_BUTTON_ACTIVE: [".actions #next:active"],
  MAIN_EJECT_BUTTON: ["#eject"],
  MAIN_EJECT_BUTTON_ACTIVE: ["#eject:active"],
  MAIN_WINDOW_BACKGROUND: ["#main-window"],
  MAIN_STEREO: [".media-info #stereo", ".stop .media-info #stereo.selected"],
  MAIN_STEREO_SELECTED: [".media-info #stereo.selected"],
  MAIN_MONO: [".media-info #mono", ".stop .media-info #mono.selected"],
  MAIN_MONO_SELECTED: [".media-info #mono.selected"],
  NO_MINUS_SIGN: ["#time #minus-sign"],
  MINUS_SIGN: ["#time.countdown #minus-sign"],
  DIGIT_0: [".digit-0"],
  DIGIT_1: [".digit-1"],
  DIGIT_2: [".digit-2"],
  DIGIT_3: [".digit-3"],
  DIGIT_4: [".digit-4"],
  DIGIT_5: [".digit-5"],
  DIGIT_6: [".digit-6"],
  DIGIT_7: [".digit-7"],
  DIGIT_8: [".digit-8"],
  DIGIT_9: [".digit-9"],
  NO_MINUS_SIGN_EX: ["#time #minus-sign"],
  MINUS_SIGN_EX: ["#time.countdown #minus-sign"],
  DIGIT_0_EX: [".digit-0"],
  DIGIT_1_EX: [".digit-1"],
  DIGIT_2_EX: [".digit-2"],
  DIGIT_3_EX: [".digit-3"],
  DIGIT_4_EX: [".digit-4"],
  DIGIT_5_EX: [".digit-5"],
  DIGIT_6_EX: [".digit-6"],
  DIGIT_7_EX: [".digit-7"],
  DIGIT_8_EX: [".digit-8"],
  DIGIT_9_EX: [".digit-9"],
  MAIN_PLAYING_INDICATOR: [".play #play-pause"],
  MAIN_PAUSED_INDICATOR: [".pause #play-pause"],
  MAIN_STOPPED_INDICATOR: [".stop #play-pause"],
  MAIN_NOT_WORKING_INDICATOR: ["#work-indicator"],
  MAIN_WORKING_INDICATOR: ["#work-indicator.selected"],
  PLAYLIST_TOP_TILE: [".playlist-top-left-fill", ".playlist-top-left-spacer", ".playlist-top-right-fill", ".playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_CORNER: [".playlist-top-left"],
  PLAYLIST_TITLE_BAR: [".playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER: [".playlist-top-right"],
  PLAYLIST_TOP_TILE_SELECTED: [".selected .playlist-top-left-fill", ".selected .playlist-top-left-spacer", ".selected .playlist-top-right-fill", ".selected .playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_SELECTED: [".selected .playlist-top-left"],
  PLAYLIST_TITLE_BAR_SELECTED: [".selected .playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER_SELECTED: [".selected .playlist-top-right"],
  PLAYLIST_LEFT_TILE: [".playlist-middle-left"],
  PLAYLIST_RIGHT_TILE: [".playlist-middle-right"],
  PLAYLIST_SCROLL_HANDLE: [".playlist-scrollbar-handle"],
  PLAYLIST_SCROLL_HANDLE_SELECTED: [".playlist-scrollbar-handle:active"],
  PLAYLIST_BOTTOM_TILE: [".playlist-bottom"],
  PLAYLIST_BOTTOM_LEFT_CORNER: [".playlist-bottom-left"],
  PLAYLIST_BOTTOM_RIGHT_CORNER: [".playlist-bottom-right"],
  PLAYLIST_VISUALIZER_BACKGROUND: [".playlist-visualizer"],
  PLAYLIST_SHADE_BACKGROUND: ["#playlist-window-shade"],
  PLAYLIST_SHADE_BACKGROUND_LEFT: ["#playlist-window-shade .left"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT: ["#playlist-window-shade .right"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED: ["#playlist-window-shade.selected .right"],

  PLAYLIST_ADD_MENU_BAR: ["#playlist-add-menu.selected .bar"],
  PLAYLIST_ADD_URL: ["#playlist-add-menu .add-url"],
  PLAYLIST_ADD_URL_SELECTED: ["#playlist-add-menu .hover .add-url"],
  PLAYLIST_ADD_DIR: ["#playlist-add-menu .add-dir"],
  PLAYLIST_ADD_DIR_SELECTED: ["#playlist-add-menu .hover .add-dir"],
  PLAYLIST_ADD_FILE: ["#playlist-add-menu .add-file"],
  PLAYLIST_ADD_FILE_SELECTED: ["#playlist-add-menu .hover .add-file"],

  PLAYLIST_REMOVE_MENU_BAR: ["#playlist-remove-menu.selected .bar"],
  PLAYLIST_REMOVE_ALL: ["#playlist-remove-menu .remove-all"],
  PLAYLIST_REMOVE_ALL_SELECTED: ["#playlist-remove-menu .hover .remove-all"],
  PLAYLIST_CROP: ["#playlist-remove-menu .crop"],
  PLAYLIST_CROP_SELECTED: ["#playlist-remove-menu .hover .crop"],
  PLAYLIST_REMOVE_SELECTED: ["#playlist-remove-menu .remove-selected"],
  PLAYLIST_REMOVE_SELECTED_SELECTED: ["#playlist-remove-menu .hover .remove-selected"],
  PLAYLIST_REMOVE_MISC: ["#playlist-remove-menu .remove-misc"],
  PLAYLIST_REMOVE_MISC_SELECTED: ["#playlist-remove-menu .hover .remove-misc"],

  PLAYLIST_SELECT_MENU_BAR: ["#playlist-selection-menu.selected .bar"],
  PLAYLIST_INVERT_SELECTION: ["#playlist-selection-menu .invert-selection"],
  PLAYLIST_INVERT_SELECTION_SELECTED: ["#playlist-selection-menu .hover .invert-selection"],
  PLAYLIST_SELECT_ZERO: ["#playlist-selection-menu .select-zero"],
  PLAYLIST_SELECT_ZERO_SELECTED: ["#playlist-selection-menu .hover .select-zero"],
  PLAYLIST_SELECT_ALL: ["#playlist-selection-menu .select-all"],
  PLAYLIST_SELECT_ALL_SELECTED: ["#playlist-selection-menu .hover .select-all"],
  PLAYLIST_CLOSE_SELECTED: ["#playlist-close-button:active"],
  PLAYLIST_COLLAPSE_SELECTED: ["#playlist-window #playlist-shade-button:active"],
  PLAYLIST_EXPAND_SELECTED: ["#playlist-window-shade #playlist-shade-button:active"],

  PLAYLIST_MISC_MENU_BAR: ["#playlist-misc-menu.selected .bar"],
  PLAYLIST_MISC_OPTIONS: ["#playlist-misc-menu .misc-options"],
  PLAYLIST_MISC_OPTIONS_SELECTED: ["#playlist-misc-menu .hover .misc-options"],
  PLAYLIST_FILE_INFO: ["#playlist-misc-menu .file-info"],
  PLAYLIST_FILE_INFO_SELECTED: ["#playlist-misc-menu .hover .file-info"],
  PLAYLIST_SORT_LIST: ["#playlist-misc-menu .sort-list"],
  PLAYLIST_SORT_LIST_SELECTED: ["#playlist-misc-menu .hover .sort-list"],

  PLAYLIST_LIST_BAR: ["#playlist-list-menu.selected .bar"],
  PLAYLIST_NEW_LIST: ["#playlist-list-menu .new-list"],
  PLAYLIST_NEW_LIST_SELECTED: ["#playlist-list-menu .hover .new-list"],
  PLAYLIST_LOAD_LIST: ["#playlist-list-menu .load-list"],
  PLAYLIST_LOAD_LIST_SELECTED: ["#playlist-list-menu .hover .load-list"],
  PLAYLIST_SAVE_LIST: ["#playlist-list-menu .save-list"],
  PLAYLIST_SAVE_LIST_SELECTED: ["#playlist-list-menu .hover .save-list"],

  EQ_WINDOW_BACKGROUND: ["#equalizer-window:not(.shade)"],
  EQ_TITLE_BAR: [".equalizer-top"],
  EQ_TITLE_BAR_SELECTED: [".selected .equalizer-top"],
  EQ_SLIDER_BACKGROUND: [".band"],
  EQ_SLIDER_THUMB: [".band .rc-slider-handle"],
  // But the "active" pseudo selector on the parent, since clicking
  // anywhere on the track moves the slider.
  EQ_SLIDER_THUMB_SELECTED: [".band .rc-slider:active .rc-slider-handle"],
  EQ_ON_BUTTON: ["#on"],
  EQ_ON_BUTTON_DEPRESSED: ["#on:active"],
  EQ_ON_BUTTON_SELECTED: ["#on.selected"],
  EQ_ON_BUTTON_SELECTED_DEPRESSED: ["#on.selected:active"],
  EQ_AUTO_BUTTON: ["#auto"],
  EQ_AUTO_BUTTON_DEPRESSED: ["#auto:active"],
  EQ_AUTO_BUTTON_SELECTED: ["#auto.selected"],
  EQ_AUTO_BUTTON_SELECTED_DEPRESSED: ["#auto.selected:active"],
  EQ_GRAPH_BACKGROUND: ["#eqGraph"],
  EQ_PRESETS_BUTTON: ["#presets"],
  EQ_PRESETS_BUTTON_SELECTED: ["#presets:active"],
  EQ_PREAMP_LINE: ["#preamp-line"],
  EQ_SHADE_BACKGROUND: ["#equalizer-window.shade"],
  EQ_SHADE_BACKGROUND_SELECTED: ["#equalizer-window.shade.selected"],
  EQ_SHADE_VOLUME_SLIDER_LEFT: ["#equalizer-volume.left::-webkit-slider-thumb", "#equalizer-volume.left::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_CENTER: ["#equalizer-volume.center::-webkit-slider-thumb", "#equalizer-volume.center::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_RIGHT: ["#equalizer-volume.right::-webkit-slider-thumb", "#equalizer-volume.right::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_LEFT: ["#equalizer-balance.left::-webkit-slider-thumb", "#equalizer-balance.left::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_CENTER: ["#equalizer-balance.center::-webkit-slider-thumb", "#equalizer-balance.center::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_RIGHT: ["#equalizer-balance.right::-webkit-slider-thumb", "#equalizer-balance.right::-moz-range-thumb"],
  EQ_MAXIMIZE_BUTTON_ACTIVE: ["#equalizer-shade:active"],
  EQ_MINIMIZE_BUTTON_ACTIVE: ["#equalizer-window.shade #equalizer-shade:active"],
  EQ_CLOSE_BUTTON: ["#equalizer-window.selected #equalizer-close"],
  EQ_CLOSE_BUTTON_ACTIVE: ["#equalizer-window #equalizer-close:active"],
  MAIN_POSITION_SLIDER_BACKGROUND: ["#position"],
  MAIN_POSITION_SLIDER_THUMB: ["#position::-webkit-slider-thumb", "#position::-moz-range-thumb"],
  MAIN_POSITION_SLIDER_THUMB_SELECTED: ["#position:active::-webkit-slider-thumb", "#position:active::-moz-range-thumb"],
  MAIN_SHUFFLE_BUTTON: ["#shuffle"],
  MAIN_SHUFFLE_BUTTON_DEPRESSED: ["#shuffle:active"],
  MAIN_SHUFFLE_BUTTON_SELECTED: ["#shuffle.selected"],
  MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED: ["#shuffle.selected:active"],
  MAIN_REPEAT_BUTTON: ["#repeat"],
  MAIN_REPEAT_BUTTON_DEPRESSED: ["#repeat:active"],
  MAIN_REPEAT_BUTTON_SELECTED: ["#repeat.selected"],
  MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED: ["#repeat.selected:active"],
  MAIN_EQ_BUTTON: ["#equalizer-button"],
  MAIN_EQ_BUTTON_SELECTED: ["#equalizer-button.selected"],
  MAIN_EQ_BUTTON_DEPRESSED: ["#equalizer-button:active"],
  MAIN_EQ_BUTTON_DEPRESSED_SELECTED: ["#equalizer-button.selected:active"],
  MAIN_PLAYLIST_BUTTON: ["#playlist-button"],
  MAIN_PLAYLIST_BUTTON_SELECTED: ["#playlist-button.selected"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED: ["#playlist-button:active"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED: ["#playlist-button.selected:active"],
  MAIN_TITLE_BAR: ["#title-bar"],
  MAIN_TITLE_BAR_SELECTED: [".selected #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR: [".llama #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR_SELECTED: [".llama.selected #title-bar"],
  MAIN_OPTIONS_BUTTON: [".selected #title-bar #option.clicked"],
  MAIN_OPTIONS_BUTTON_DEPRESSED: [".selected #title-bar #option:active", ".selected #title-bar #option.selected"],
  MAIN_MINIMIZE_BUTTON: [".selected #title-bar #minimize.clicked"],
  MAIN_MINIMIZE_BUTTON_DEPRESSED: [".selected #title-bar #minimize:active"],
  MAIN_SHADE_BUTTON: [".selected #title-bar #shade.clicked"],
  MAIN_SHADE_BUTTON_DEPRESSED: [".selected #title-bar #shade:active"],
  MAIN_CLOSE_BUTTON: [".selected #title-bar #close.clicked"],
  MAIN_CLOSE_BUTTON_DEPRESSED: [".selected #title-bar #close:active"],
  MAIN_CLUTTER_BAR_BACKGROUND: ["#clutter-bar"],
  MAIN_CLUTTER_BAR_BACKGROUND_DISABLED: ["#clutter-bar.disabled"],
  MAIN_CLUTTER_BAR_BUTTON_O_SELECTED: ["#button-o:active", "#button-0.selected"],
  MAIN_CLUTTER_BAR_BUTTON_A_SELECTED: ["#button-a:active", "#button-a.selected"],
  MAIN_CLUTTER_BAR_BUTTON_I_SELECTED: ["#button-i:active", "#button-i.selected"],
  MAIN_CLUTTER_BAR_BUTTON_D_SELECTED: ["#button-d:active", "#button-d.selected"],
  MAIN_CLUTTER_BAR_BUTTON_V_SELECTED: ["#button-v:active", "#button-v.selected"],
  MAIN_SHADE_BACKGROUND: [".shade #title-bar"],
  MAIN_SHADE_BACKGROUND_SELECTED: [".shade.selected #title-bar"],
  MAIN_SHADE_BUTTON_SELECTED: [".shade.selected #title-bar #shade"],
  MAIN_SHADE_BUTTON_SELECTED_DEPRESSED: [".shade #title-bar #shade:active"],
  MAIN_SHADE_POSITION_BACKGROUND: [".shade #position"],
  MAIN_SHADE_POSITION_THUMB: [".shade #position::-moz-range-thumb", ".shade #position::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_LEFT: [".shade #position.left::-moz-range-thumb", ".shade #position.left::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_RIGHT: [".shade #position.right::-moz-range-thumb", ".shade #position.right::-webkit-slider-thumb"],
  MAIN_VOLUME_BACKGROUND: ["#volume"],
  MAIN_VOLUME_THUMB: ["#volume input::-webkit-slider-thumb", "#volume input::-moz-range-thumb"],
  MAIN_VOLUME_THUMB_SELECTED: ["#volume input::-webkit-slider-thumb:active", "#volume input::-moz-range-thumb:active"],
  GEN_TOP_CENTER_FILL: [".gen-window .gen-top"],
  GEN_TOP_LEFT: [".gen-window .gen-top-left"],
  GEN_TOP_LEFT_END: [".gen-window .gen-top-left-end"],
  GEN_TOP_RIGHT: [".gen-window .gen-top-right"],
  GEN_TOP_RIGHT_END: [".gen-window .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL: [".gen-window .gen-top-left-fill", ".gen-window .gen-top-right-fill"],

  GEN_TOP_CENTER_FILL_SELECTED: [".gen-window.selected .gen-top"],
  GEN_TOP_LEFT_SELECTED: [".gen-window.selected .gen-top-left"],
  GEN_TOP_LEFT_END_SELECTED: [".gen-window.selected .gen-top-left-end"],
  GEN_TOP_RIGHT_SELECTED: [".gen-window.selected .gen-top-right"],
  GEN_TOP_RIGHT_END_SELECTED: [".gen-window.selected .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL_SELECTED: [".gen-window.selected .gen-top-left-fill", ".gen-window.selected .gen-top-right-fill"],
  GEN_BOTTOM_LEFT: [".gen-window .gen-bottom-left"],
  GEN_BOTTOM_RIGHT: [".gen-window .gen-bottom-right"],
  GEN_BOTTOM_FILL: [".gen-window .gen-bottom"],
  GEN_MIDDLE_LEFT: [".gen-window .gen-middle-left"],
  GEN_MIDDLE_LEFT_BOTTOM: [".gen-window .gen-middle-left-bottom"],
  GEN_MIDDLE_RIGHT: [".gen-window .gen-middle-right"],
  GEN_MIDDLE_RIGHT_BOTTOM: [".gen-window .gen-middle-right-bottom"],
  GEN_CLOSE_SELECTED: [".gen-window .gen-close:active"]
};

Object.keys(_skinSprites.FONT_LOOKUP).forEach(character => {
  const key = (0, _skinSprites.imageConstFromChar)(character);
  const code = character.charCodeAt(0);
  imageSelectors[key] = [`.character-${code}`];
});

_constants.LETTERS.forEach(character => {
  imageSelectors[`GEN_TEXT_${character}`] = [`.gen-text-${character.toLowerCase()}`];
  imageSelectors[`GEN_TEXT_SELECTED_${character}`] = [`.gen-window.selected .gen-text-${character.toLowerCase()}`];
});

const cursorSelectors = exports.cursorSelectors = {
  CLOSE: ["#title-bar #close"],
  // This is not quite right. There are some areas that show this cursor
  // but are not clickable.
  EQSLID: ["#equalizer-window .band rc-slider"],
  EQNORMAL: ["#equalizer-window"],
  EQCLOSE: ["#equalizer-window #equalizer-close"],
  EQTITLE: ["#equalizer-window .title-bar", "#equalizer-window.shade", "#equalizer-window.shade input"],
  MAINMENU: ["#main-window #option", "#webamp-context-menu .context-menu"],
  MIN: ["#main-window #minimize"],
  NORMAL: [
  // Use this as the default cursor.
  ".window", ".window input", // Otherwise
  "#main-window", "#main-window.shade #title-bar"],
  MMENU: ["#main-window.shade #option"],
  PNORMAL: ["#playlist-window"],
  // TODO: This is should really only apply to the top part of the top.
  // The chrome around the playlist window is larger than others. The
  // cursor only applies to the same height as the other window's chrome.
  PTBAR: ["#playlist-window .playlist-top"],
  PCLOSE: ["#playlist-window #playlist-close-button", "#playlist-window-shade #playlist-close-button"],
  PWINBUT: ["#playlist-window #playlist-shade-button", "#playlist-window-shade #playlist-shade-button"],
  POSBAR: ["#main-window #position"],
  PSIZE: ["#playlist-window #playlist-resize-target"],
  PWSSIZE: ["#playlist-window-shade #playlist-resize-target"],
  PWSNORM: ["#playlist-window-shade"],
  // TODO: The target for this is not quite right.
  PVSCROLL: ["#playlist-window .playlist-scrollbar"],
  SONGNAME: ["#main-window #marquee"],
  TITLEBAR: ["#main-window #title-bar"],
  VOLBAL: ["#volume", "#volume input", "#balance"],
  WINBUT: ["#main-window #shade"],
  WSNORMAL: ["#main-window.shade #title-bar"],
  WSPOSBAR: ["#main-window.shade #position"]
};

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(373);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./webamp.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./webamp.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Rules used by all windows */\n\n#webamp {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n/* Prevent accidental highlighting */\n#webamp canvas {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n#webamp * {\n    /* Some environments globably change the box-sizing */\n    box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n}\n\n#webamp *:focus {\n    outline: 0;\n}\n\n/* Range input css reset */\n#webamp input[type=\"range\"] {\n    -webkit-appearance: none;\n    margin: 0;\n    padding: 0;\n    background: none;\n    border: none;\n}\n#webamp input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: none;\n    border-radius: 0;\n    background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-thumb {\n    border: none;\n    border-radius: 0;\n    background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-track {\n    border: none;\n    background: none;\n}\n#webamp input[type=\"range\"]:focus {\n    outline: none;\n}\n#webamp input[type=\"range\"]::-moz-focus-outer {\n    border: 0;\n}\n\n#webamp a:focus {\n    outline: none;\n}\n\n/* Animation */\n@keyframes blink {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes blink {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n#webamp .character {\n    display: inline-block;\n    vertical-align: top;\n    width: 5px;\n    height: 6px;\n    /* background-image: TEXT.BMP via Javascript */\n    text-indent: -9999px;\n}\n\n#webamp .window {\n    position: absolute;\n    /* Ask the browser to scale showing large pixels if possible */\n    image-rendering: -moz-crisp-edges; /* Firefox */\n    image-rendering: -o-crisp-edges; /* Opera */\n    image-rendering: -webkit-optimize-contrast; /* Safari */\n    image-rendering: pixelated; /* Only in Chrome > 40 */\n    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp .window {\n    /* Work around rendering bug with clip-path */\n    -webkit-transform: translateZ(0);\n}\n#webamp .window.doubled {\n    -moz-transform: translateZ(0) scale(2);\n    -moz-transform-origin: top left;\n    -webkit-transform: translateZ(0) scale(2);\n    -webkit-transform-origin: top left;\n}\n", ""]);

// exports


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dispatch) {
  let keylog = [];
  const trigger = [78, // N
  85, // U
  76, // L
  76, // L
  83, // S
  79, // O
  70, // F
  84 // T
  ];
  document.addEventListener("keydown", e => {
    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 68:
          // CTRL+D
          dispatch((0, _actionCreators.toggleDoubleSizeMode)());
          e.preventDefault(); // Supress the "Bookmark" action on windows.
          break;
        case 76:
          // CTRL+L FIXME
          break;
        case 82:
          // CTRL+R
          dispatch((0, _actionCreators.reverseList)());
          break;
        case 84:
          // CTRL+T
          dispatch({ type: _actionTypes.TOGGLE_TIME_MODE });
          break;
      }
    } else if (e.altKey) {
      switch (e.keyCode) {
        case 87:
          // ALT+W
          dispatch((0, _actionCreators.toggleWindow)("main"));
          break;
        case 69:
          // ALT+E
          dispatch((0, _actionCreators.toggleWindow)("playlist"));
          break;
        case 71:
          // ALT+G
          dispatch((0, _actionCreators.toggleWindow)("equalizer"));
          break;
      }
    } else {
      switch (e.keyCode) {
        case 37:
          // left arrow
          dispatch((0, _actionCreators.seekBackward)(5));
          break;
        case 38:
          // up arrow
          dispatch((0, _actionCreators.adjustVolume)(1));
          break;
        case 39:
          // right arrow
          dispatch((0, _actionCreators.seekForward)(5));
          break;
        case 40:
          // down arrow
          dispatch((0, _actionCreators.adjustVolume)(-1));
          break;
        case 66:
          // B
          dispatch((0, _actionCreators.next)());
          break;
        case 67:
          // C
          dispatch((0, _actionCreators.pause)());
          break;
        case 76:
          // L
          dispatch((0, _actionCreators.openMediaFileDialog)());
          break;
        case 82:
          // R
          dispatch((0, _actionCreators.toggleRepeat)());
          break;
        case 83:
          // S
          dispatch((0, _actionCreators.toggleShuffle)());
          break;
        case 86:
          // V
          dispatch((0, _actionCreators.stop)());
          break;
        case 88:
          // X
          dispatch((0, _actionCreators.play)());
          break;
        case 90:
          // Z
          dispatch((0, _actionCreators.previous)());
          break;
        case 96:
          // numpad 0
          dispatch((0, _actionCreators.openMediaFileDialog)());
          break;
        case 97:
          // numpad 1
          dispatch((0, _actionCreators.nextN)(-10));
          break;
        case 98:
          // numpad 2
          dispatch((0, _actionCreators.adjustVolume)(-1));
          break;
        case 99:
          // numpad 3
          dispatch((0, _actionCreators.nextN)(10));
          break;
        case 100:
          // numpad 4
          dispatch((0, _actionCreators.previous)());
          break;
        case 101:
          // numpad 5
          dispatch((0, _actionCreators.play)());
          break;
        case 102:
          // numpad 6
          dispatch((0, _actionCreators.next)());
          break;
        case 103:
          // numpad 7
          dispatch((0, _actionCreators.seekBackward)(5));
          break;
        case 104:
          // numpad 8
          dispatch((0, _actionCreators.adjustVolume)(1));
          break;
        case 105:
          // numpad 9
          dispatch((0, _actionCreators.seekForward)(5));
          break;
      }
    }

    // Easter Egg

    // Ignore escape. Usually this gets swallowed by the browser, but not always.
    if (e.keyCode !== 27) {
      keylog.push(e.keyCode);
      keylog = keylog.slice(-8);
      if ((0, _utils.arraysAreEqual)(keylog, trigger)) {
        dispatch({ type: _actionTypes.TOGGLE_LLAMA_MODE });
      }
    }
  });
};

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

var _utils = __webpack_require__(6);

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _emitter = __webpack_require__(50);

var _emitter2 = _interopRequireDefault(_emitter);

var _elementSource = __webpack_require__(376);

var _elementSource2 = _interopRequireDefault(_elementSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import detectChannels from "./detectChannels";

class Media {
  constructor() {
    this._emitter = new _emitter2.default();
    this._context = new (window.AudioContext || window.webkitAudioContext)();
    // Fix for iOS and Chrome (Canary) which require that the context be created
    // or resumed by a user interaction.
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    // https://gist.github.com/laziel/7aefabe99ee57b16081c
    // Via: https://stackoverflow.com/a/43395068/1263117
    if (this._context.state === "suspended") {
      const resume = async () => {
        await this._context.resume();

        if (this._context.state === "running") {
          document.body.removeEventListener("touchend", resume, false);
          document.body.removeEventListener("click", resume, false);
          document.body.removeEventListener("keydown", resume, false);
        }
      };

      document.body.addEventListener("touchend", resume, false);
      document.body.addEventListener("click", resume, false);
      document.body.addEventListener("keydown", resume, false);
    }
    // We don't currently know how many channels
    this._channels = null;
    this._balance = 0;

    // The _source node has to be recreated each time it's stopped or
    // paused, so we don't create it here. Instead we create this dummy
    // node wich the real source will connect to.

    // TODO: Maybe we can get rid of this now that we are using AudioAbstraction?
    this._staticSource = this._context.createAnalyser(); // Just a noop node

    // Create the preamp node
    this._preamp = this._context.createGain();

    // Create the spliter node
    this._chanSplit = this._context.createChannelSplitter(2);

    // Create the gains for left and right
    this._leftGain = this._context.createGain();
    this._rightGain = this._context.createGain();

    // Create channel merge
    this._chanMerge = this._context.createChannelMerger(2);

    // Create the analyser node for the visualizer
    this._analyser = this._context.createAnalyser();
    this._analyser.fftSize = 2048;
    // don't smooth audio analysis
    this._analyser.smoothingTimeConstant = 0.0;

    // Create the gain node for the volume control
    this._gainNode = this._context.createGain();

    // Connect all the nodes in the correct way
    // (Note, source is created and connected later)
    //
    //                <source>
    //                    |
    //                    |_____________
    //                    |             \
    //                <preamp>          |
    //                    |             | <-- Optional bypass
    //           [...biquadFilters]     |
    //                    |_____________/
    //                    |
    //    (split using createChannelSplitter)
    //                    |
    //                   / \
    //                  /   \
    //          <leftGain><rightGain>
    //                  \   /
    //                   \ /
    //                    |
    //     (merge using createChannelMerger)
    //                    |
    //               <chanMerge>
    //                    |
    //                    |\
    //                    | <analyser>
    //                  <gain>
    //                    |
    //              <destination>

    this._source = new _elementSource2.default(this._context, this._staticSource);

    this._source.on("positionChange", () => {
      this._emitter.trigger("timeupdate");
    });
    this._source.on("ended", () => {
      this._emitter.trigger("ended");
    });
    this._source.on("statusChange", () => {
      switch (this._source.getStatus()) {
        case _constants.MEDIA_STATUS.PLAYING:
          this._emitter.trigger("playing");
          break;
      }
      this._emitter.trigger("timeupdate");
    });
    this._source.on("loaded", () => {
      this._emitter.trigger("fileLoaded");
    });

    this._staticSource.connect(this._preamp);

    let output = this._preamp;
    this.bands = {};

    _constants.BANDS.forEach((band, i) => {
      const filter = this._context.createBiquadFilter();

      this.bands[band] = filter;

      if (i === 0) {
        // The first filter, includes all lower frequencies
        filter.type = "lowshelf";
      } else if (i === band.length - 1) {
        // The last filter, includes all higher frequencies
        filter.type = "highshelf";
      } else {
        filter.type = "peaking";
      }
      filter.frequency.value = band;
      filter.gain.value = 0;

      output.connect(filter);
      output = filter;
    });

    output.connect(this._chanSplit);

    // Connect split channels to left / right gains
    this._chanSplit.connect(this._leftGain, 0);
    this._chanSplit.connect(this._rightGain, 1);

    // Reconnect the left / right gains to the merge node
    this._leftGain.connect(this._chanMerge, 0, 0);
    this._rightGain.connect(this._chanMerge, 0, 1);

    this._chanMerge.connect(this._gainNode);
    this._chanMerge.connect(this._analyser);

    this._gainNode.connect(this._context.destination);
    window.media = this;
  }

  _setChannels(num) {
    const assumedChannels = num == null ? 2 : num;
    this._chanSplit.disconnect();
    this._chanSplit.connect(this._leftGain, 0);
    // If we only have one channel, use it for both left and right.
    this._chanSplit.connect(this._rightGain, assumedChannels === 1 ? 0 : 1);
    this._channels = num;
    this._emitter.trigger("channelupdate");
  }

  getAnalyser() {
    return this._analyser;
  }

  /* Properties */
  duration() {
    return this._source.getDuration();
  }

  timeElapsed() {
    return this._source.getTimeElapsed();
  }

  timeRemaining() {
    return this.duration() - this.timeElapsed();
  }

  percentComplete() {
    return this.timeElapsed() / this.duration() * 100;
  }

  channels() {
    return this._channels == null ? 2 : this._channels;
  }

  sampleRate() {
    return this._source.getSampleRate();
  }

  /* Actions */
  async play() {
    await this._source.play();
    if (this._channels == null) {
      // Temporarily disabled https://github.com/captbaritone/webamp/issues/551
      /*
      detectChannels(this._staticSource)
        .then(channels => {
          this._setChannels(channels);
        })
        .catch(() => {
          this._setChannels(null);
        });
      */
    }
  }

  pause() {
    this._source.pause();
  }

  stop() {
    this._source.stop();
  }

  /* Actions with arguments */
  seekToPercentComplete(percent) {
    const seekTime = this.duration() * (percent / 100);
    this.seekToTime(seekTime);
  }

  // From 0-1
  setVolume(volume) {
    this._gainNode.gain.value = volume / 100;
  }

  // From 0-1
  setPreamp(value) {
    this._preamp.gain.value = value / 100;
  }

  // From -100 to 100
  setBalance(balance) {
    let changeVal = Math.abs(balance) / 100;

    // Hack for Firefox. Having either channel set to 0 seems to revert us
    // to equal balance.
    changeVal = changeVal - 0.00000001;

    if (balance > 0) {
      // Right
      this._leftGain.gain.value = 1 - changeVal;
      this._rightGain.gain.value = 1;
    } else if (balance < 0) {
      // Left
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1 - changeVal;
    } else {
      // Center
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1;
    }
    this._balance = balance;
  }

  setEqBand(band, value) {
    const db = value / 100 * 24 - 12;
    this.bands[band].gain.value = db;
  }

  disableEq() {
    this._staticSource.disconnect();
    this._staticSource.connect(this._chanSplit);
  }

  enableEq() {
    this._staticSource.disconnect();
    this._staticSource.connect(this._preamp);
  }

  /* Listeners */
  on(event, callback) {
    this._emitter.on(event, callback);
  }

  seekToTime(time) {
    this._source.seekToTime(time);
  }

  // Used only for the initial load, since it must have a CORS header
  async loadFromUrl(url, autoPlay) {
    this._emitter.trigger("waiting");
    await this._source.loadUrl(url);
    this._setChannels(null);
    this._emitter.trigger("stopWaiting");
    if (autoPlay) {
      this.play();
    }
  }
}
exports.default = Media; /* Emulate the native <audio> element with Web Audio API */

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emitter = __webpack_require__(50);

var _emitter2 = _interopRequireDefault(_emitter);

var _utils = __webpack_require__(6);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ElementSource {
  on(eventType, cb) {
    return this._emitter.on(eventType, cb);
  }

  constructor(context, destination) {
    this._emitter = new _emitter2.default();
    this._context = context;
    this._destination = destination;
    this._audio = document.createElement("audio");
    this._audio.crossOrigin = "anonymous";
    this._stalled = false;
    this._status = _constants.MEDIA_STATUS.STOPPED;

    this._audio.addEventListener("suspend", () => {
      this._setStalled(true);
    });

    this._audio.addEventListener("durationchange", () => {
      this._emitter.trigger("loaded");
      this._setStalled(false);
    });

    this._audio.addEventListener("ended", () => {
      this._emitter.trigger("ended");
      this._setStatus(_constants.MEDIA_STATUS.STOPPED);
    });

    // TODO: Throttle to 50 (if needed)
    this._audio.addEventListener("timeupdate", () => {
      this._emitter.trigger("positionChange");
    });

    this._audio.addEventListener("error", e => {
      switch (this._audio.error.code) {
        case 1:
          // The fetching of the associated resource was aborted by the user's request.
          console.error("MEDIA_ERR_ABORTED", e);
          break;
        case 2:
          console.error("MEDIA_ERR_NETWORK", e);
          // Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.
          break;
        case 3:
          // Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.

          // There is a bug in Chrome where improperly terminated mp3s can cuase this error.
          // https://bugs.chromium.org/p/chromium/issues/detail?id=794782
          // Related: Commit f44e826c83c74fef04c2c448af30cfb353b28312
          console.error("PIPELINE_ERROR_DECODE", e);
          break;
        case 4:
          console.error("MEDIA_ERR_SRC_NOT_SUPPORTED", e);
          // The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.
          break;
      }
      // Rather than just geting stuck in this error state, we can just pretend this is
      // the end of the track.

      this._emitter.trigger("ended");
      this._setStatus(_constants.MEDIA_STATUS.STOPPED);
    });

    this._source = this._context.createMediaElementSource(this._audio);
    this._source.connect(destination);
  }

  _setStalled(stalled) {
    this._stalled = stalled;
    this._emitter.trigger("stallChanged");
  }

  disconnect() {
    this._source.disconnect();
  }

  // Async for now, for compatibility with BufferAudioSource
  // TODO: This does not need to be async
  async loadUrl(url) {
    this._audio.src = url;
  }

  async play() {
    if (this._status !== _constants.MEDIA_STATUS.PAUSED) {
      this.seekToTime(0);
    }
    try {
      await this._audio.play();
    } catch (err) {
      //
    }
    this._setStatus(_constants.MEDIA_STATUS.PLAYING);
  }

  pause() {
    this._audio.pause();
    this._setStatus(_constants.MEDIA_STATUS.PAUSED);
  }

  stop() {
    this._audio.pause();
    this._audio.currentTime = 0;
    this._setStatus(_constants.MEDIA_STATUS.STOPPED);
  }

  seekToTime(time) {
    /* TODO: We could check if this is actually seekable:
    const { seekable } = this._audio;
    for (let i = 0; i < seekable.length; i++) {
      console.log("start", seekable.start(i), "end", seekable.end(i));
    }
    */
    this._audio.currentTime = (0, _utils.clamp)(time, 0, this.getDuration());
    this._emitter.trigger("positionChange");
  }

  getStalled() {
    return this._stalled;
  }

  getStatus() {
    return this._status;
  }

  getDuration() {
    const duration = this._audio.duration;
    // Safari on iOS currently has a strange behavior where it reports
    // the duration as infinity if an Accept-Ranges header is not returned.
    // For now, 0 is better even though it's still wrong.

    return isNaN(duration) || duration === Infinity ? 0 : duration;
  }

  getTimeElapsed() {
    return this._audio.currentTime;
  }

  getNumberOfChannels() {
    return this._source.channelCount;
  }

  getSampleRate() {
    // This is a lie. This is the sample rate of the context, not the
    // underlying source media.
    return this._context.sampleRate;
  }

  _setStatus(status) {
    this._status = status;
    this._emitter.trigger("statusChange");
  }
}
exports.default = ElementSource;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(378);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./base-skin.min.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./base-skin.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module

// exports


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.disableMarquee = exports.initialTracks = exports.skinUrl = undefined;

var _llama = __webpack_require__(380);

var _llama2 = _interopRequireDefault(_llama);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hash = window.location.hash;

let config = {};
if (hash) {
  try {
    config = JSON.parse(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.error("Failed to decode config from hash: ", hash);
  }
}

// Backwards compatibility with the old syntax
if (config.audioUrl && !config.initialTracks) {
  config.initialTracks = [{ url: config.audioUrl }];
}

const skinUrl = exports.skinUrl = config.skinUrl === undefined ? null : config.skinUrl;
const initialTracks = exports.initialTracks = config.initialTracks || [{
  metaData: { artist: "DJ Mike Llama", title: "Llama Whippin' Intro" },
  url: _llama2.default,
  duration: 5.322286
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Diablo_Swing_Orchestra_-_01_-_Heroines.mp3",
  duration: 322.612245,
  metaData: {
    title: "Heroines",
    artist: "Diablo Swing Orchestra"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Eclectek_-_02_-_We_Are_Going_To_Eclecfunk_Your_Ass.mp3",
  duration: 190.093061,
  metaData: {
    title: "We Are Going To Eclecfunk Your Ass",
    artist: "Eclectek"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Auto-Pilot_-_03_-_Seventeen.mp3",
  duration: 214.622041,
  metaData: {
    title: "Seventeen",
    artist: "Auto-Pilot"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Muha_-_04_-_Microphone.mp3",
  duration: 181.838367,
  metaData: {
    title: "Microphone",
    artist: "Muha"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Just_Plain_Ant_-_05_-_Stumble.mp3",
  duration: 86.047347,
  metaData: {
    title: "Stumble",
    artist: "Just Plain Ant"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Sleaze_-_06_-_God_Damn.mp3",
  duration: 226.795102,
  metaData: {
    title: "God Damn",
    artist: "Sleaze"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Juanitos_-_07_-_Hola_Hola_Bossa_Nova.mp3",
  duration: 207.072653,
  metaData: {
    title: "Hola Hola Bossa Nova",
    artist: "Juanitos"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Entertainment_for_the_Braindead_-_08_-_Resolutions_Chris_Summer_Remix.mp3",
  duration: 314.331429,
  metaData: {
    title: "Resolutions (Chris Summer Remix)",
    artist: "Entertainment for the Braindead"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Nobara_Hayakawa_-_09_-_Trail.mp3",
  duration: 204.042449,
  metaData: {
    title: "Trail",
    artist: "Nobara Hayakawa"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Paper_Navy_-_10_-_Tongue_Tied.mp3",
  duration: 201.116735,
  metaData: {
    title: "Tongue Tied",
    artist: "Paper Navy"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/60_Tigres_-_11_-_Garage.mp3",
  duration: 245.394286,
  metaData: {
    title: "Garage",
    artist: "60 Tigres"
  }
}, {
  url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/CM_aka_Creative_-_12_-_The_Cycle_Featuring_Mista_Mista.mp3",
  duration: 221.44,
  metaData: {
    title: "The Cycle (Featuring Mista Mista)",
    artist: "CM aka Creative"
  }
}];

const disableMarquee = exports.disableMarquee = config.disableMarquee || false;
const initialState = exports.initialState = config.initialState || undefined;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "mp3/llama-2.91.mp3";

/***/ })
/******/ ]);