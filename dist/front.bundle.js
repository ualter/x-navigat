/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_map_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_map_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_map_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_map_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_map_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_map_js__);

//import './js/numeral.min.js';
//import './js/markerwithlabel.js';
//import './js/jquery-blink.js';


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!./map.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./map.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, "html, body, #map-canvas {\r\n\theight: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n#panel-fp {\r\n\tposition: absolute;\r\n\ttop: 60px;\r\n\tleft: 90px;\r\n\tz-index: 5;\r\n\tpadding: 5px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 2px solid #595959;\r\n\tbackground-color: #50000E;\r\n\tcolor: #fff;\r\n\twidth: 600px;\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#errorBox {\r\n\tposition: absolute;\r\n\ttop: 90%;\r\n\tleft: 2%;\r\n\tz-index: 5;\r\n\tpadding: 5px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 2px solid #595959;\r\n\tbackground-color: #50000E;\r\n\tcolor: #fff;\r\n\twidth: 20%;\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#boxFlightPlan {\r\n\t text-transform: uppercase;\r\n\t font-family: Verdana, Arial, sans-serif;\r\n\t font-size: 14px;\r\n\t font-weight: bold;\r\n\t overflow: auto;\r\n\t resize: none;\r\n} \r\n#flightplan-help {\r\n\tz-index: 1000;\r\n\tposition: absolute;\r\n\ttop: 190px;\r\n\tleft: 90px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tborder: 1px solid #000;\r\n\tfont-size: 11px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0, 0, 0, 0.55);\r\n\tcolor: #fff;\r\n\tborder-radius: 2px;\r\n\tpadding: 10px;\r\n\tdisplay: none;\r\n\twidth: 130px;\r\n}\r\n#flightplan-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 90px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n}\r\n#plane-panel {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 190px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tborder-radius: 2px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n}\r\n#followThePlane-button {\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#flightplan-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#flightplan-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#followThePlane-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#followThePlane-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n.labelsAirport {\r\n\tcolor: darkblue;\r\n\tbackground-color: white;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 38px;\r\n\tborder: 2px solid black;\r\n\twhite-space: nowrap;\r\n}\r\n.labelsWaypoint {\r\n\tcolor: black;\r\n\tbackground-color: lightgray;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 11px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 50px;\r\n\tborder: 2px solid black;\r\n\twhite-space: nowrap;\r\n}\r\n.labelsInfoRoute {\r\n\tcolor: black;\r\n\tbackground-color: white;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\ttext-align: center;\r\n\tmin-width: 70px;\r\n    display: inline-block;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\tborder: 2px solid blue;\r\n\twhite-space: nowrap;\r\n\tborder-radius: 23px;\r\n}\r\n.runwayTable {\r\n\tfont-family: \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n}\r\n.runwayInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.vorTable {\r\n\tfont-family: \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n}\r\n.vorInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.routeInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.planeDataInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.planeDataInfoRed {\r\n\tcolor: red;\r\n\tfont-weight: bold;\r\n}\r\n.rotate {\r\n     -webkit-transform : rotate(66deg); \r\n    -moz-transform : rotate(66deg); \r\n    -ms-transform : rotate(66deg); \r\n    -o-transform : rotate(66deg); \r\n    transform : rotate(66deg); \r\n}\r\n#flightplan-info {\r\n    z-index: 9999;\r\n    position: absolute;\r\n    top: 190px;\r\n    left: 253px;\r\n    font-family: Verdana, Arial, sans-serif;\r\n    text-decoration: none;\r\n    box-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n    border: 1px solid #000;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    color: yellow;\r\n    border-radius: 2px;\r\n    padding: 10px;\r\n    display: none;\r\n    width: 430px;\r\n}\r\n.flightPlan-info-label {\r\n    font-family: monospace;\r\n    font-size: 13px;\r\n    color: white;\r\n}\r\n#flightplan-loading {\r\n\tposition: absolute; \r\n\ttop: 73px; \r\n\tleft: 10px; \r\n\tz-index: 9999;\r\n\tcolor: #454545;\r\n\tfont-family: monospace;\r\n\tfont-size:15px;\r\n\tfont-weight: bold;\r\n}\r\n#labelRoute-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 300px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tcolor: #fff;\r\n}\r\n#labelRoute-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#labelRoute-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#labelWaypoint-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 390px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tcolor: #fff;\r\n}\r\n#labelWaypoint-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#labelWaypoint-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}", ""]);

// exports


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

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
/* 15 */
/***/ (function(module, exports) {

const period = 1000; // time between refreshes in ms

var posClient = new google.maps.LatLng(41.546199, 2.108623)
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    	posClient = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
}
var mapOptions = {
	center : {
		lat : 0,
		lng : 0
	},
	zoom : 9,
	mapTypeId : google.maps.MapTypeId.TERRAIN,
	center : posClient
};
var map;
var polyOptions = {
	geodesic : true,
	strokeColor : '#000000',
	strokeOpacity : 0.8,
	strokeWeight : 3
};
var markerOptions = {
	icon : {
		path : "M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,"
				+ "22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,"
				+ ""
				+ "88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,"
				+ "3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684",
		scale : 0.08,
		fillOpacity : 1,
		anchor : new google.maps.Point(340, 340),
		strokeWeight : 0.5
	}
};

var iconAirport = {
	//url : 'airport.png',
	url : './images/airport.png',
	size : new google.maps.Size(30, 50),
	origin : new google.maps.Point(0, 0),
	anchor : new google.maps.Point(15, 50)
};

var iconWaypoint = {
	path : google.maps.SymbolPath.CIRCLE,
	scale : 6,
	strokeColor : '#0000FF',
	strokeOpacity : 1,
	strokeWeight : 3,
	fillColor : 'white',
	fillOpacity : 1,
};

var iconLabelRoute = {
	path : "m96,44",
	scale : 1,
	strokeColor : '#FFFFFF',
	strokeOpacity : 1,
	strokeWeight : 1,
	fillColor : 'white',
	fillOpacity : 100,
};

var iconVOR = {
	path : google.maps.SymbolPath.CIRCLE,
	scale : 7,
	strokeColor : '#000000',
	strokeOpacity : 1,
	strokeWeight : 3,
	fillColor : 'yellow',
	fillOpacity : 1,
};

var iconNDB = {
	path : google.maps.SymbolPath.CIRCLE,
	scale : 7,
	strokeColor : '#262626',
	strokeOpacity : 1,
	strokeWeight : 3,
	fillColor : '#FFD05C',
	fillOpacity : 1,
};

var planeList = {};
var refreshControlPanel = false;
var planeToFollow = null;
var colors = [ "blue","#26764E", "#F08526", "#9CFF54", "#721B49", "#A7D8F8","#2AFDBC", "#FBE870", "#711302", "#2572C2", "#1C271D", "#632E85",
		"#1E5F7A", "#D8B2F5", "#D307A2", "#F391B5", "#F180F5", "#3A1E2E","#AE7707", "#3E3D0E", "#6AB06E" ];
var color_index = 0;
var navMap;
var flightPlan = {};
var flightPath; // an object google.maps.Polyline - representing the Flight Plan
var markers = [];
var routeLabelsOffSet = [];
var markersLabelRoute = [];
var markersWaypoint   = [];
var elInfoBoxPlane;
var chaseAirplane = false;

$.ajaxSetup({
	cache : false
});

function initialize() {

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	google.maps.event.addListener(map, 'dragstart', function() {
		$('#nofocus').click();
	});

	$('body').keydown(function(e) {
		if (e.keyCode == 192) {
			e.preventDefault();
			toggleFlightPanel();
		}
		if (e.keyCode == 19) {
			$.getJSON("pause").done(function(data){}).error(function() {showError('Not able to Pause X-Plane.')});
		}
	});
	
	 map.addListener('zoom_changed', function() {
	    window.setTimeout(function() {
	       for (var i = 0; i < routeLabelsOffSet.length; i++) {
	    	   var distLabelRoute = 24000;
	    	   if ( map.getZoom() >= 16 ) {
	    		   distLabelRoute = 50;
	    	   } else
	    	   if ( map.getZoom() >= 15 ) {
	    		   distLabelRoute = 500;
	    	   } else
	    	   if ( map.getZoom() >= 12 ) {
	    		   distLabelRoute = 5000;
	    	   } else
	    	   if ( map.getZoom() >= 10 ) {
	    		   distLabelRoute = 12000;
	    	   } else
	    	   if ( map.getZoom() >= 8 ) {
	    		   distLabelRoute = 16000;
	    	   }
	    	   var hdgLabel = google.maps.geometry.spherical.computeHeading(routeLabelsOffSet[i].latlng, routeLabelsOffSet[i].nextLatLng); 
	    	   var offset = google.maps.geometry.spherical.computeOffset(routeLabelsOffSet[i].latlng, distLabelRoute, hdgLabel, 6371000);
	    	   markersLabelRoute[i].position = offset; 
    	   }
	    },1);
	});
	 
	updatePosition();
	setInterval(updatePosition, period);
	setInterval(checkFlightPlanBoxAndLoad, 2000);

	// nav data overlays
	/*navMap = new google.maps.ImageMapType({
		getTileUrl : function(coord, zoom) {
			tileSize = 256 / Math.pow(2, zoom);
			west = coord.x * tileSize;
			east = west + tileSize;
			north = coord.y * tileSize;
			south = north + tileSize;

			northEast = map.getProjection().fromPointToLatLng(
					new google.maps.Point(east, north));
			southWest = map.getProjection().fromPointToLatLng(
					new google.maps.Point(west, south));

			// http://x-plane-map.fouc.net/nav.php?north=-24.5271%20&south=-25.7999%20&east=-46.4063%20&west=-47.8125
			// console.log();

			return [ 'http://x-plane-map.fouc.net/nav.php?north=',
					northEast.lat().toFixed(4), '&south=',
					southWest.lat().toFixed(4), '&east=',
					northEast.lng().toFixed(4), '&west=',
					southWest.lng().toFixed(4) 
												 * , '&type=APT'
												 ].join('');
		},
		tileSize : new google.maps.Size(256, 256),
		minZoom : 6,
		maxZoom : 12
	});

	map.overlayMapTypes.push(navMap);
	navMap.setOpacity(0);*/
}

var flightplanText = 'none';
function checkFlightPlanBoxAndLoad() {
	if ($('#panel-fp').is(":hidden") == false) {
		var text = $('textarea#boxFlightPlan').val();
		if (text != flightplanText) {
			flightplanText = text;
			var params = {};
			
			if (flightPath != undefined) {
				flightPath.setMap(null);
			}
			clearMarkers();
			
			if ( flightplanText.length > 8 ) {
				var groups = flightplanText.toUpperCase().split(" ");
				var waypoints = "";
				if ( groups.length > 1 ) {
				    for(var i = 1; i < (groups.length-1); i++) {
					   waypoints += groups[i];
				       if (waypoints.length > 1) {
				        	waypoints += "+";
				    	}
				    }
				}
				params = {
				    departure : groups[0],
				    waypoints : waypoints,
				    destination : groups[groups.length - 1]
				};
			}
			
			loadingFlightPlanState(true);
			$.getJSON("flightplan",params
				)
				.done(function(data) {
						if ($.isEmptyObject(data)) {
							showError("Error loading Flight Plan. No content was returned.");
						}
						flightPlan = data;
						loadFlightPlan();
						loadingFlightPlanState(false);
				})
				.error(
						function() {
							loadingFlightPlanState(false);
							showError('Please check the connection with http://server:port/flightplan, is not working.')
						});
		}
	}
}

function loadingFlightPlanState(loading) {
	if ( loading ) {
		$("#flightplan-loading").show();
		$("#boxFlightPlan").css('color', 'lightgray');
	} else {
		$("#flightplan-loading").hide();
		$("#boxFlightPlan").css('color', 'black');
	}
}

function loadFlightPlan() {
	// Loading flightPlanCoordinates variable
	var departureLatLng = new google.maps.LatLng(flightPlan.departure.latitude, flightPlan.departure.longitude);
	var destinationLatLng = new google.maps.LatLng(flightPlan.destination.latitude, flightPlan.destination.longitude); 
	var arrCoord = new Array();
	arrCoord[0] = departureLatLng;
	var totalWaypoints = 0;
	var totalDistance = 0;
	while (totalWaypoints < flightPlan.waypoints.length) {
		arrCoord[totalWaypoints + 1] = 
			new google.maps.LatLng(
					flightPlan.waypoints[totalWaypoints].latitude,flightPlan.waypoints[totalWaypoints].longitude
			);
		// Mark the Waypoint
		waypoint = {
			id : flightPlan.waypoints[totalWaypoints].id,
			latlng : new google.maps.LatLng(flightPlan.waypoints[totalWaypoints].latitude,flightPlan.waypoints[totalWaypoints].longitude),
			type : flightPlan.waypoints[totalWaypoints].type,
			descr : flightPlan.waypoints[totalWaypoints].name,
			freq : flightPlan.waypoints[totalWaypoints].frequency
		}
		markWaypoint(waypoint);

		totalWaypoints++;
	}
	arrCoord[totalWaypoints + 1] = destinationLatLng;
	var flightPlanCoordinates = arrCoord;

	// Loading Flight Plan Polyline - Draw the line
	flightPath = new google.maps.Polyline({
		path : flightPlanCoordinates,
		geodesic : false,
		strokeColor : '#0000FF',
		strokeOpacity : 0.5,
		strokeWeight : 6
	});
	flightPath.setMap(map);

	// Mark for the Airport Departure
	departure = {
		id : flightPlan.departure.icaoId,
		name : flightPlan.departure.name,
		latlng : departureLatLng,
		runways : flightPlan.departure.arrayRunways
	}
	markAirport(departure,'departure');

	// Mark for the Airport Destination
	destination = {
		id : flightPlan.destination.icaoId,
		name : flightPlan.destination.name,
		latlng : destinationLatLng,
		runways : flightPlan.destination.arrayRunways
	}
	markAirport(destination,'destination');
	
	// Panel Info Flight Plan
	$("#fpInfo-Departure").text(departure.id + ' - ' + departure.name + ' Airport');
	$("#fpInfo-Destination").text(destination.id + ' - ' + destination.name + ' Airport');
	
	// Mark Labels Bearing/Distance
	var index = 0;
	while (index < flightPlan.infoRoute.length) {
		totalDistance += flightPlan.infoRoute[index].distanceNM;
		labelRoute = {
			distanceNM : flightPlan.infoRoute[index].distanceNM,
			distance : flightPlan.infoRoute[index].distance,
			bearing : flightPlan.infoRoute[index].bearing,
			bearingDegree : flightPlan.infoRoute[index].bearingDegree,
			latlng : new google.maps.LatLng(
						flightPlan.infoRoute[index].latitude,
						flightPlan.infoRoute[index].longitude),
			nextLatlng : new google.maps.LatLng(
					flightPlan.infoRoute[index].nextLatitude,
					flightPlan.infoRoute[index].nextLongitude),
			rotate : flightPlan.infoRoute[index].bearing,
			nextPoint : flightPlan.infoRoute[index].nextPoint,
			currentPoint : flightPlan.infoRoute[index].currentPoint,
			compassHeading : flightPlan.infoRoute[index].compassHeading
		}
		markLabelRoute(labelRoute);
		index++;
	}

	$("#fpInfo-RouteDistance")
		.text(
			numeral(totalDistance).format('0,0') + 'nm' + ' / ' +
			numeral((totalDistance * 1.852)).format('0,0') + 'km'
	        );
	        
	var panFlightPlan = new google.maps.LatLngBounds(departureLatLng, destinationLatLng);
	map.fitBounds(panFlightPlan);
	//map.panToBounds(panFlightPlan);
	//map.setZoom(10);
}

function saveMark(m) {
	markers.push(m);
}
function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  routeLabelsOffSet = [];
  markersLabelRoute = [];
  markersWaypoint   = [];
}

function markLabelRoute(labelRoute) {
	//var distLabel = labelRoute.distanceNM * 1.852; // convert nm to meters
	//var hdgLabel = labelRoute.bearingDegree - 22;
	//var distLabel = 24000; 
	routeLabelsOffSet.push(
		{
			latlng : labelRoute.latlng,
			nextLatLng : labelRoute.nextLatlng
		}
	);
	var distLabelRoute = 12000;
	var hdgLabel = google.maps.geometry.spherical.computeHeading(labelRoute.latlng, labelRoute.nextLatlng); 
	var offset = google.maps.geometry.spherical.computeOffset(labelRoute.latlng, distLabelRoute, hdgLabel, 6371000);
	var angleRotate = hdgLabel - 90;
	if ( angleRotate > -270 && angleRotate < -90 ) {
		 angleRotate = angleRotate - 180;
	}
	var label = labelRoute.bearing + "&deg " + numeral(labelRoute.distance).format('0,0') + "nm";
	var x = 23;
	var y = 0;
	var anchor = new google.maps.Point(x, y);
	var markerLabelRoute = new MarkerWithLabel({
		position : offset,
		animation : google.maps.Animation.DROP,
		labelContent : label,
		labelAnchor : anchor,
		labelClass : "labelsInfoRoute",
		clickable : true,
		icon : iconLabelRoute,
		rotate : angleRotate
	});
	
	var infoContent = "<table width='100%' border=0 class='runwayTable' cellspacing='0' cellpadding='0'>";
	infoContent += "<tr><td colspan='2'>";
	
	infoContent += "<table  width='100%' border=0 cellspacing='0' cellpadding='0'>";
	infoContent += "<tr><td valign='middle' width='30px'><img src='arrow.png'></td>";
	infoContent += "<td valign='middle' width='150px'>";
	infoContent += "&nbsp;&nbsp;&nbsp;Route:<br><b>&nbsp;&nbsp;" + labelRoute.currentPoint + 
				   "</b>&nbsp;to&nbsp;<b>" + labelRoute.nextPoint + "</b></td>";
	infoContent += "</td></tr></table>";
	
	infoContent += "</td></tr>";
	infoContent += "<tr><td colspan='2'><hr></td></tr>";
	infoContent += "<tr><td width='60px'>";
	infoContent +=   "Distance:</td><td> <span class='routeInfo'>" + 
								numeral(labelRoute.distance).format('0,0') + "nm</span>&nbsp;&nbsp;/&nbsp;&nbsp;" + 
	                           "<span class='routeInfo'>" + 
	                           numeral(Math.ceil(labelRoute.distanceNM / 0.53996)).format('0,0') +
	                           "km</span>";
	infoContent += "</td></tr>";
	infoContent += "<tr><td>";
	infoContent +=   "Heading:</td><td> <span class='routeInfo'>" + labelRoute.bearing + "&deg</span>&nbsp;&nbsp;/&nbsp;&nbsp;" + 
    				          "<span class='routeInfo'>" + labelRoute.compassHeading + "</span>";
	infoContent += "</td></tr>";
	infoContent += "</table>";
	var infoBox = new google.maps.InfoWindow({
		content: '<div id="iw_content">' + infoContent + '</div>',
		pixelOffset: new google.maps.Size(-30,-25,"px","px")
	});
	google.maps.event.addListener(markerLabelRoute, "mouseover", function(e) {
		if ( elInfoBoxPlane == undefined ) {
			infoBox.open(map, this);
		}
	});
	google.maps.event.addListener(markerLabelRoute, "mouseout", function(e) {
		if ( elInfoBoxPlane == undefined ) {
			changeColorInfoBox(el,"rgb(255,255,255)");
			infoBox.close();
		}
	});
	google.maps.event.addListener(infoBox, 'domready', function () {
	    el = document.getElementById('iw_content').parentNode.parentNode.parentNode.parentNode;
		visibilityArrowInfoBox(el,"hidden");
		changeColorInfoBox(el,"rgba(127,255,212,0.82)");
	});
	
	markerLabelRoute.setMap(map);
	saveMark(markerLabelRoute);
	markersLabelRoute.push(markerLabelRoute);
}

function markAirport(airport,type) {
	var markerAirport = new MarkerWithLabel({
		position : airport.latlng,
		animation : google.maps.Animation.DROP,
		icon : iconAirport,
		labelContent : airport.id,
		labelAnchor : new google.maps.Point(20, 70),
		labelClass : "labelsAirport"
	});

	var image = "<img src='takeoff.png'/>";
	if ( type == 'destination' ) {
		image = "<img src='landing.png'/>";
	}
	var infoContent = "";
	infoContent += "<table border=0 width='100%' class='runwayTable' cellspacing='0' cellpadding='0'>";
	infoContent += "<tr><td width='60px' align='left'>" + image + "</td>";
	infoContent += "<td>";
	infoContent += "<b>" + airport.id + "</b> - " + airport.name;
	infoContent += "</td></tr>";
	infoContent += "<tr><td colspan='4'><hr></td></tr>";
	infoContent += "</table>";
	infoContent += "<table width='100%' border=0 class='runwayTable' cellspacing='0' cellpadding='0'>";
	for (var i = 0; i < airport.runways.length; i++) {
		infoContent += "<tr>"
				+ " <td>Runway <span class='runwayInfo'>"
				+ airport.runways[i].number
				+ "</span></td>"
				+ " <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Heading: <span class='runwayInfo'>"
				+ airport.runways[i].heading
				+ "<font size='2px'>&deg;</font></span></td>"
				+ " <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frequency: <span class='runwayInfo'>"
				+ airport.runways[i].frequency + "</span><br/></td>"
				+ " <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Elevation: <span class='runwayInfo'>"
				+ numeral(airport.runways[i].elevation).format('0,0') + " ft</span><br/></td>" + "</tr>";
	}
	infoContent += "</table>";

	var infoM1 = new google.maps.InfoWindow({
		content: '<div id="iw_content">' + infoContent + '</div>'
	});
	google.maps.event.addListener(markerAirport, "mouseover", function(e) {
		infoM1.open(map, this);
	});
	google.maps.event.addListener(markerAirport, "mouseout", function(e) {
		if ( elInfoBoxPlane == undefined ) {
			el = document.getElementById('iw_content').parentNode.parentNode.parentNode.parentNode;
			visibilityArrowInfoBox(el,"hidden");
		}
		infoM1.close();
	});
	google.maps.event.addListener(infoM1, 'domready', function () {
		if ( elInfoBoxPlane == undefined ) {
			el = document.getElementById('iw_content').parentNode.parentNode.parentNode.parentNode;
			visibilityArrowInfoBox(el,"visible");
		}
	});
	markerAirport.setMap(map);
	saveMark(markerAirport);
}

function markWaypoint(waypoint) {
	var iconWPT = iconWaypoint;
	var infoContent = "";
	if (waypoint.type == 1) {
		iconWPT = iconVOR;
	} else if (waypoint.type == 2) {
		iconWPT = iconNDB;
	}

	var markerWaypoint = new MarkerWithLabel({
		position : waypoint.latlng,
		animation : google.maps.Animation.DROP,
		icon : iconWPT,
		labelContent : waypoint.id,
		labelAnchor : new google.maps.Point(28, -6),
		labelClass : "labelsWaypoint"
	});
	if (waypoint.type == 'VOR' || waypoint.type == 'NDB') {
		// VOR and NDB
		infoContent = "<table border=0 class='vorTable' cellspacing='0' cellpadding='0' width='330px'>";
		infoContent += "<tr>";
		infoContent += " <td valign='middle' colspan=2>";
		infoContent += "  <table border=0 class='vorTable' cellspacing='0' cellpadding='0'><tr><td>";
		if (waypoint.type == 'VOR') {
			// VOR
			infoContent += " <img src='VOR.png'/>";
		} else if (waypoint.type == 'NDB') {
			// NBD
			infoContent += " <img src='NDB.png'/>";
		}
		infoContent += "</td>";
		infoContent += "<td>&nbsp;&nbsp;&nbsp;<b>" + waypoint.id + "</b> - "
				+ waypoint.descr + "</td>" + "</tr></table>"
		infoContent += "<tr><td colspan='2'><hr/></td></tr>";
		infoContent += "<tr><td width='20%'> Frequency:&nbsp;</td><td><span class='vorInfo'>" + waypoint.freq + "</td>" + "</tr>";
		infoContent += "<tr><td width='1%'> Latitude:&nbsp;</td><td><span class='vorInfo'>" + precisionDecimalNumber(waypoint.latlng.lat()) + "</td></tr>";
		infoContent += "<tr><td> Longitude:&nbsp;</td><td><span class='vorInfo'>" + precisionDecimalNumber(waypoint.latlng.lng()) + "<br/></td></tr>";
		infoContent += "</table>";
	} else {
		// FIX
		infoContent = "<table border=0 class='vorTable' cellspacing='0' cellpadding='0' width='120px'>";
		infoContent += "<td colspan=2><b>" + waypoint.id + "</b></td></tr>"
		infoContent += "<tr><td colspan='2'><hr/></td></tr>";
		infoContent += "<tr><td width='1%'> Latitude:&nbsp;</td><td><span class='vorInfo'>" + precisionDecimalNumber(waypoint.latlng.lat()) + "</td></tr>";
		infoContent += "<tr><td> Longitude:&nbsp;</td><td><span class='vorInfo'>" + precisionDecimalNumber(waypoint.latlng.lng()) + "<br/></td></tr>";
		infoContent += "</table>";
	}
	var infoM1 = new google.maps.InfoWindow({
		content: '<div id="iw_content">' + infoContent + '</div>'
	});
	google.maps.event.addListener(markerWaypoint, "mouseover", function(e) {
		infoM1.open(map, this);
	});
	google.maps.event.addListener(markerWaypoint, "mouseout", function(e) {
		if ( elInfoBoxPlane == undefined ) {
			el = document.getElementById('iw_content').parentNode.parentNode.parentNode.parentNode;
			visibilityArrowInfoBox(el,"hidden");
		}
		infoM1.close();
	});
	google.maps.event.addListener(infoM1, 'domready', function () {
		if ( elInfoBoxPlane == undefined ) {
			el = document.getElementById('iw_content').parentNode.parentNode.parentNode.parentNode;
			visibilityArrowInfoBox(el,"visible");
		}
	});
	markerWaypoint.setMap(map);
	saveMark(markerWaypoint);
	markersWaypoint.push(markerWaypoint);
}

function changeColorInfoBox(el,color) {
	divColor = el.firstChild.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;
	divColor.style.background = color;
}

function visibilityArrowInfoBox(el,statusArrow,statusCloseButton) {
	divEl = el.firstChild;
    child1 = divEl.firstChild;
    child3 = child1.nextElementSibling.nextElementSibling;
    if ( child3 != undefined ) {
    	child1.style.visibility = statusArrow;
    	child3.style.visibility = statusArrow;
	    // Remove Close Button
	    divCloseButton = divEl.parentNode.firstChild.nextElementSibling.nextElementSibling;
	    //divCloseButton.style.visibility = status;
	    if ( statusCloseButton != undefined ) {
	    	divCloseButton.style.visibility = statusCloseButton;
	    } else {
	    	divCloseButton.style.visibility = "hidden";
	    }
	    
    }
}

function precisionDecimalNumber(vlr) {
	return parseFloat(Math.round(vlr * 100000) / 100000).toFixed(5);
}

function updatePosition() {
	$.getJSON(
			"data",
			function(data) {
				if ($.isEmptyObject(data)) {
					/*showError("Listening at X-Plane's UDP traffic port 49003. "
							+ "Please check the settings at the X-Plane's Net Connections menu.");*/
				}
				// delete all absent planes
				for ( var ip in planeList) {
					if (!(ip in data)) {
						deletePlane(ip);
					}
				}
				// for current and new planes
				for ( var ip in data) {
					// if new plane
					if (!(ip in planeList)) {
						color = nextColor();
						markerOptions.icon.fillColor = color;
						planeList[ip] = {
							name : ip.replace(/-/g, '.'),
							lon : 0,
							lat : 0,
							alt : data[ip].altMap,
							marker : new google.maps.Marker(markerOptions),
							trace : new google.maps.Polyline(polyOptions),
							info : new google.maps.InfoWindow(),
							color : color,
							vSpeed : data[ip].vSpeed,
							airSpeed : data[ip].airSpeed,
							gSpeed : data[ip].groundSpeed,
							heading : data[ip].bearing,
							dest : data[ip].destination,
							gpsDistNm : data[ip].gpsDistanceNm,
							gpsDistTime : data[ip].gpsDistanceTime,
							nav1 : data[ip].nav1Freq,
							nav2 : data[ip].nav2Freq,
							barometer : data[ip].barometer,
							fuelQuantity : data[ip].fuelQuantity,
							outsideTemp : data[ip].outsideTemperature,
							com1 : data[ip].com1Freq,
							com2 : data[ip].com2Freq,
							compassHeading : data[ip].compassHeading
						};
						planeList[ip].marker.setMap(map);
						planeList[ip].marker.ip = ip; 
						planeList[ip].infoWindowListener = google.maps.event
								.addListener(planeList[ip].marker,'click', function() {
									planeList[this.ip].info.open(map,planeList[this.ip].marker);
								});
						google.maps.event.addListener(planeList[ip].info, 'domready', function () {
							elInfoBoxPlane = document.getElementById('iw_content').parentNode.parentNode.parentNode.parentNode;
							visibilityArrowInfoBox(elInfoBoxPlane,"visible","visible");
						});
						google.maps.event.addListener(planeList[ip].info,'closeclick',function(){
							visibilityArrowInfoBox(elInfoBoxPlane,"hidden");
							elInfoBoxPlane = undefined;
						});
						
						planeList[ip].trace.setMap(map);
						planeToFollow = ip;
					}
					newLat                       = data[ip].latMap;
					newLon                       = data[ip].lonMap;
					planeList[ip].alt            = data[ip].altMap;
					planeList[ip].vSpeed         = data[ip].vSpeed;
					planeList[ip].airSpeed       = data[ip].airSpeed;
					planeList[ip].heading        = data[ip].bearing;
					planeList[ip].dest           = data[ip].destination;
					planeList[ip].gpsDistNm      = data[ip].gpsDistanceNm;
					planeList[ip].gpsDistTime    = data[ip].gpsDistanceTime;
					planeList[ip].gSpeed         = data[ip].groundSpeed;
					planeList[ip].nav1           = data[ip].nav1Freq;
					planeList[ip].nav2           = data[ip].nav2Freq;
					planeList[ip].barometer      = data[ip].barometer;
					planeList[ip].fuelQuantity   = data[ip].fuelQuantity;
					planeList[ip].outsideTemp    = data[ip].outsideTemperature;
					planeList[ip].com1           = data[ip].com1Freq;
					planeList[ip].com2           = data[ip].com2Freq;
					planeList[ip].compassHeading = data[ip].compassHeading;
					
					var newPoint = new google.maps.LatLng(newLat,newLon);
					planeList[ip].marker.setPosition(newPoint);
					var icon = planeList[ip].marker.getIcon();
					icon.rotation = planeList[ip].heading;
					planeList[ip].marker.setIcon(icon);
					// add new point to line
					planeList[ip].trace.getPath().push(newPoint);
					var airplaneLabel =  planeList[ip].name;
					if ( airplaneLabel == '127.0.0.1' ) {
						 airplaneLabel = 'YOU';
					}
					//var hdgAirplane = Number(Math.floor(((planeList[ip].heading + 360) % 360))) + 22;
					var hdgAirplane = planeList[ip].compassHeading;
					var infoContent = "<div id='iw_content'>";
					infoContent += "<div style='margin: 0; width: 500px;'>";
					infoContent += "<table border=0 cellspacing='0' cellpadding='0' width='100%'>";
					
					infoContent += " <tr><td>";
					infoContent += "  <table border=0 cellspacing='0' cellpadding='0' width='100%'>";
					infoContent += "   <tr><td style='height:30px;'>";
					infoContent += "   <b>" + airplaneLabel + "</b>";
					infoContent += "   </td></tr>";
					infoContent += "   <tr><td>";
					infoContent += "   </td></tr>";
					infoContent += "  </table>";
					infoContent += " </td></tr>";
					
					var backColor = 'lightgray';
					
					infoContent += " <tr><td>";
					infoContent += " <table style='border:solid 1px darkgray;font-weight:bold;' cellspacing='0' cellpadding='2' width='100%'>";
					infoContent += " <tr style='background:" + backColor + ";'>";
					infoContent += " <td width='80px'>Destination:</td><td colspan='5'><span class='planeDataInfo'>" + planeList[ip].dest + "</span></td>"; 
					infoContent += " </tr>";
					
					infoContent += " <tr>";
					infoContent += " <td>Distance:</td><td><span class='planeDataInfo'>" + planeList[ip].gpsDistNm + "</span>&nbsp;nm</td>"; 
					infoContent += " <td width='60px'>ETE:</td><td><span class='planeDataInfo'>" + planeList[ip].gpsDistTime + "</span>&nbsp;</td>";
					infoContent += " </tr>";
					
					infoContent += "<tr style='background:" + backColor + ";'><td> Altitude: </td><td><span class='planeDataInfo'>";
					infoContent += numeral(planeList[ip].alt.toFixed()).format('0,0') + "</span>&nbsp;ft MSL&nbsp;&nbsp;</td>"
					            + "<td>Heading:</td><td><span class='planeDataInfo'>" + hdgAirplane + "&deg;</span></td>";
					infoContent += "</tr>";
					
					infoContent += "<tr><td>";
					infoContent += " AirSpeed: </td><td><span class='planeDataInfo'>" + numeral(planeList[ip].airSpeed).format('0,0') + "</span>&nbsp;kts</td>"; 
					if ( planeList[ip].vSpeed > -1 ) {
						infoContent += " <td>VS:</td><td><span class='planeDataInfo'>";
					} else {
						infoContent += " <td>VS:</td><td><span class='planeDataInfoRed'>";
					}
					infoContent += numeral(planeList[ip].vSpeed).format('0,0') + "</span>&nbsp;fpm&nbsp;&nbsp;</td>";
					infoContent += " </tr>";
					
					infoContent += " <tr style='background:" + backColor + ";'>";
					infoContent += " <td>Nav1:</td><td><span class='planeDataInfo'>" + planeList[ip].nav1 + "</span>&nbsp;hz</td>"; 
					infoContent += " <td>Com1:</td><td><span class='planeDataInfo'>" + planeList[ip].com1 + "</span>&nbsp;hz</td>";
					infoContent += " </tr><tr>";
					
					infoContent += " <td>Nav2:</td><td><span class='planeDataInfo'>" + planeList[ip].nav2 + "</span>&nbsp;hz</td>";
					infoContent += " <td>Com2:</td><td><span class='planeDataInfo'>" + planeList[ip].com2 + "</span>&nbsp;hz</td>";
					infoContent += " </tr>";
					
					infoContent += " <tr style='background:" + backColor + ";'>";
					infoContent += " <td>Barometer:</td><td><span class='planeDataInfo'>" + planeList[ip].barometer + "</span></td>";
					infoContent += " <td>Fuel:</td><td><span class='planeDataInfo'>" + planeList[ip].fuelQuantity + "</span></td>"; 
					infoContent += " </tr><tr>";
					
					infoContent += " <td>OAT:</td><td><span class='planeDataInfo'>" + planeList[ip].outsideTemp + "</span>&deg;&nbsp</td>";
					infoContent += " <td>GS:</td><td><span class='planeDataInfo'>" + parseFloat(planeList[ip].gSpeed).toFixed() + "</span>&nbsp;kts</td>";
					infoContent += " </tr>";
				
					infoContent += " </table>";
					infoContent += " </td></tr>";
					infoContent += "</table>";
					infoContent += "</div>";
					infoContent += "</div>";
					
					// set info window content
					planeList[ip].info.setContent(infoContent);
					planeList[ip].lon = newLon;
					planeList[ip].lat = newLat;
					planeList[ip].hdg = planeList[ip].heading;
					planeList[ip].spd = planeList[ip].gSpeed;
				}
				// move map if checkbox checked
				if ( chaseAirplane ) {
					if ( planeList[planeToFollow] != undefined ) {
						map.panTo(new google.maps.LatLng(planeList[planeToFollow].lat,planeList[planeToFollow].lon));
					}
				}
			})
	.error(
			function() {
				showError('Ops! Mayday! Mayday! Java Server is down!!!')
			});

}

function bearing(lon1, lat1, lon2, lat2) {
	lon1 = lon1 * Math.PI / 180;
	lon2 = lon2 * Math.PI / 180;
	lat1 = lat1 * Math.PI / 180;
	lat2 = lat2 * Math.PI / 180;
	var y = Math.sin(lon2 - lon1) * Math.cos(lat2);
	var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2)
			* Math.cos(lon2 - lon1);
	var brng = Math.atan2(y, x);
	return brng / Math.PI * 180;
}

function distance(lon1, lat1, lon2, lat2) {
	R = 6372.8;
	lat1 = lat1 * Math.PI / 180;
	lat2 = lat2 * Math.PI / 180;
	var deltalat = lat2 - lat1;
	var deltalon = (lon2 - lon1) * Math.PI / 180;
	var a = Math.sin(deltalat / 2) * Math.sin(deltalat / 2) + Math.cos(lat1)
			* Math.cos(lat2) * Math.sin(deltalon / 2) * Math.sin(deltalon / 2);
	var c = 2 * Math.asin(Math.sqrt(a));
	return R * c;
}

// clean plane deletion
function deletePlane(ip) {
	google.maps.event.removeListener(planeList[ip].infoWindowListener);
	planeList[ip].trace.setMap(null);
	planeList[ip].marker.setMap(null);
	delete planeList[ip];
}

// alert() equivalent
function showError(text) {
	$('#errorBox').text(text);
	$('#errorBox').fadeIn().delay(3500).fadeOut();
}

function nextColor() {
	if (colors[color_index] != null) {
		var color = colors[color_index];
		color_index++;
		return color;
	} else {
		console.log("No more colors");
		return "#aaaaaa";
	}
}

function toggleChaseAirplane() {
	if ( chaseAirplane ) {
		$('#followThePlane-button').removeClass("down").addClass("up");
	} else {
		$('#followThePlane-button').removeClass("up").addClass("down");
	}
	chaseAirplane = !chaseAirplane;
}

function toggleFlightPanel() {
	if ($('#panel-fp').is(":hidden")) {
		showFlightPanel();
	} else {
		hideFlightPanel();
	}
}
function hideFlightPanel() {
	document.cookie=$('#boxFlightPlan').val();
	console.log("(saving) planSaved=" + document.cookie);
	$('#panel-fp').hide(500);
	$('#flightplan-help').hide(300);
	$('#flightplan-info').hide(300);
	$('#flightplan-button').removeClass("down").addClass("up");
}

function showFlightPanel() {
	var planSaved = document.cookie;
	console.log("planSaved=" + document.cookie);
	if ( planSaved != "" ) {
		$('#boxFlightPlan').val(planSaved);
	}
	$('#panel-fp').show(500);
	$('#flightplan-help').show(300);
	$('#flightplan-info').show(300);
	$('#flightplan-button').removeClass("up").addClass("down");
	$('#boxFlightPlan').focus();
}

function hideNavaids() {
	$('#navaids-button').html('Show navaids (N)').unbind('click').click(
			showNavaids);
	navMap.setOpacity(0);
}

function showNavaids() {
	$('#navaids-button').html('Hide navaids (N)').unbind('click').click(
			hideNavaids);
	navMap.setOpacity(1);
}

var visibleLabelRoute = true;
function toogleLabelRoute() {
	visibleLabelRoute = !visibleLabelRoute;
	for (var i = 0; i < markersLabelRoute.length; i++) {
		 markersLabelRoute[i].setVisible(visibleLabelRoute);
	}
	if ( visibleLabelRoute ) {
		$('#labelRoute-button').removeClass("up").addClass("down");
	} else {
		$('#labelRoute-button').removeClass("down").addClass("up");
	}
}

var visibleWaypoint = true;
function toogleLabelWaypoint() {
	visibleWaypoint = !visibleWaypoint;
	for (var i = 0; i < markersWaypoint.length; i++) {
		markersWaypoint[i].setVisible(visibleWaypoint);
	}
	if ( visibleWaypoint ) {
		$('#labelWaypoint-button').removeClass("up").addClass("down");
	} else {
		$('#labelWaypoint-button').removeClass("down").addClass("up");
	}
}

// ready when you are!
google.maps.event.addDomListener(window, 'load', initialize);
// This is necessary to make those functions visible outside the JS file when using the WebPack bundle tool to run the solution
window.showNavaids         = showNavaids;
window.toggleFlightPanel   = toggleFlightPanel;
window.toggleChaseAirplane = toggleChaseAirplane;
window.toogleLabelRoute    = toogleLabelRoute;
window.toogleLabelWaypoint = toogleLabelWaypoint;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjNjYWNmNDNiYmVlMzg2MzhhNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWZyb250LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcz81ODdhIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7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RUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7OztBQ3hGQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsb0JBQW9CLHdDQUF3QztBQUN2RztBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLG9JO0FBQ0E7QUFDQSxnRDtBQUNBO0FBQ0EsTUFBTTtBQUNOLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRCIsImZpbGUiOiJmcm9udC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyM2NhY2Y0M2JiZWUzODYzOGE0NCIsImltcG9ydCAnLi9jc3MvbWFwLmNzcyc7XHJcbi8vaW1wb3J0ICcuL2pzL251bWVyYWwubWluLmpzJztcclxuLy9pbXBvcnQgJy4vanMvbWFya2Vyd2l0aGxhYmVsLmpzJztcclxuLy9pbXBvcnQgJy4vanMvanF1ZXJ5LWJsaW5rLmpzJztcclxuaW1wb3J0ICcuL2pzL21hcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtZnJvbnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9tYXAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCAjbWFwLWNhbnZhcyB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNwYW5lbC1mcCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogNjBweDtcXHJcXG5cXHRsZWZ0OiA5MHB4O1xcclxcblxcdHotaW5kZXg6IDU7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkICM1OTU5NTk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUwMDAwRTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR3aWR0aDogNjAwcHg7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbiNlcnJvckJveCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogOTAlO1xcclxcblxcdGxlZnQ6IDIlO1xcclxcblxcdHotaW5kZXg6IDU7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkICM1OTU5NTk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUwMDAwRTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR3aWR0aDogMjAlO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYm94RmxpZ2h0UGxhbiB7XFxyXFxuXFx0IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHQgZm9udC1zaXplOiAxNHB4O1xcclxcblxcdCBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHQgb3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0IHJlc2l6ZTogbm9uZTtcXHJcXG59IFxcclxcbiNmbGlnaHRwbGFuLWhlbHAge1xcclxcblxcdHotaW5kZXg6IDEwMDA7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMTkwcHg7XFxyXFxuXFx0bGVmdDogOTBweDtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHdpZHRoOiAxMzBweDtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcbn1cXHJcXG4jcGxhbmUtcGFuZWwge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDI4cHg7XFxyXFxuXFx0bGVmdDogMTkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jZmxpZ2h0cGxhbi1idXR0b24uZG93biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5sYWJlbHNBaXJwb3J0IHtcXHJcXG5cXHRjb2xvcjogZGFya2JsdWU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiAzOHB4O1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi5sYWJlbHNXYXlwb2ludCB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTFweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDUwcHg7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuLmxhYmVsc0luZm9Sb3V0ZSB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1pbi13aWR0aDogNzBweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyM3B4O1xcclxcbn1cXHJcXG4ucnVud2F5VGFibGUge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuLnJ1bndheUluZm8ge1xcclxcblxcdGNvbG9yOiBibHVlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4udm9yVGFibGUge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuLnZvckluZm8ge1xcclxcblxcdGNvbG9yOiBibHVlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucm91dGVJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBsYW5lRGF0YUluZm8ge1xcclxcblxcdGNvbG9yOiBibHVlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucGxhbmVEYXRhSW5mb1JlZCB7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnJvdGF0ZSB7XFxyXFxuICAgICAtd2Via2l0LXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICAtbW96LXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICAtbXMtdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxyXFxuICAgIC1vLXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICB0cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4taW5mbyB7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxOTBweDtcXHJcXG4gICAgbGVmdDogMjUzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA0MzBweDtcXHJcXG59XFxyXFxuLmZsaWdodFBsYW4taW5mby1sYWJlbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4jZmxpZ2h0cGxhbi1sb2FkaW5nIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxcclxcblxcdHRvcDogNzNweDsgXFxyXFxuXFx0bGVmdDogMTBweDsgXFxyXFxuXFx0ei1pbmRleDogOTk5OTtcXHJcXG5cXHRjb2xvcjogIzQ1NDU0NTtcXHJcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcblxcdGZvbnQtc2l6ZToxNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4jbGFiZWxSb3V0ZS1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDI4cHg7XFxyXFxuXFx0bGVmdDogMzAwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4jbGFiZWxSb3V0ZS1idXR0b24uZG93biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsUm91dGUtYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jbGFiZWxXYXlwb2ludC1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDI4cHg7XFxyXFxuXFx0bGVmdDogMzkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4jbGFiZWxXYXlwb2ludC1idXR0b24uZG93biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsV2F5cG9pbnQtYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9tYXAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgcGVyaW9kID0gMTAwMDsgLy8gdGltZSBiZXR3ZWVuIHJlZnJlc2hlcyBpbiBtc1xyXG5cclxudmFyIHBvc0NsaWVudCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDEuNTQ2MTk5LCAyLjEwODYyMylcclxuaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3NpdGlvbikge1xyXG4gICAgXHRwb3NDbGllbnQgPSB7XHJcbiAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG52YXIgbWFwT3B0aW9ucyA9IHtcclxuXHRjZW50ZXIgOiB7XHJcblx0XHRsYXQgOiAwLFxyXG5cdFx0bG5nIDogMFxyXG5cdH0sXHJcblx0em9vbSA6IDksXHJcblx0bWFwVHlwZUlkIDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlRFUlJBSU4sXHJcblx0Y2VudGVyIDogcG9zQ2xpZW50XHJcbn07XHJcbnZhciBtYXA7XHJcbnZhciBwb2x5T3B0aW9ucyA9IHtcclxuXHRnZW9kZXNpYyA6IHRydWUsXHJcblx0c3Ryb2tlQ29sb3IgOiAnIzAwMDAwMCcsXHJcblx0c3Ryb2tlT3BhY2l0eSA6IDAuOCxcclxuXHRzdHJva2VXZWlnaHQgOiAzXHJcbn07XHJcbnZhciBtYXJrZXJPcHRpb25zID0ge1xyXG5cdGljb24gOiB7XHJcblx0XHRwYXRoIDogXCJNMzYyLjk4NSw0MzAuNzI0bC0xMC4yNDgsNTEuMjM0bDYyLjMzMiw1Ny45NjlsLTMuMjkzLDI2LjE0NSBsLTcxLjM0NS0yMy41OTlsLTIuMDAxLDEzLjA2OWwtMi4wNTctMTMuNTI5bC03MS4yNzgsXCJcclxuXHRcdFx0XHQrIFwiMjIuOTI4bC01Ljc2Mi0yMy45ODRsNjQuMDk3LTU5LjI3MWwtOC45MTMtNTEuMzU5bDAuODU4LTExNC40MyBsLTIxLjk0NS0xMS4zMzhsLTE4OS4zNTgsXCJcclxuXHRcdFx0XHQrIFwiXCJcclxuXHRcdFx0XHQrIFwiODguNzZsLTEuMTgtMzIuMjYybDIxMy4zNDQtMTgwLjA4bDAuODc1LTEwNy40MzZsNy45NzMtMzIuMDA1bDcuNjQyLTEyLjA1NGw3LjM3Ny0zLjk1OGw5LjIzOCxcIlxyXG5cdFx0XHRcdCsgXCIzLjY1IGw2LjM2NywxNC45MjVsNy4zNjksMzAuMzYzdjEwNi4zNzVsMjExLjU5MiwxODIuMDgybC0xLjQ5NiwzMi4yNDdsLTE4OC40NzktOTAuNjFsLTIxLjYxNiwxMC4wODdsLTAuMDk0LDExNS42ODRcIixcclxuXHRcdHNjYWxlIDogMC4wOCxcclxuXHRcdGZpbGxPcGFjaXR5IDogMSxcclxuXHRcdGFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzNDAsIDM0MCksXHJcblx0XHRzdHJva2VXZWlnaHQgOiAwLjVcclxuXHR9XHJcbn07XHJcblxyXG52YXIgaWNvbkFpcnBvcnQgPSB7XHJcblx0Ly91cmwgOiAnYWlycG9ydC5wbmcnLFxyXG5cdHVybCA6ICcuL2ltYWdlcy9haXJwb3J0LnBuZycsXHJcblx0c2l6ZSA6IG5ldyBnb29nbGUubWFwcy5TaXplKDMwLCA1MCksXHJcblx0b3JpZ2luIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG5cdGFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgxNSwgNTApXHJcbn07XHJcblxyXG52YXIgaWNvbldheXBvaW50ID0ge1xyXG5cdHBhdGggOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkNJUkNMRSxcclxuXHRzY2FsZSA6IDYsXHJcblx0c3Ryb2tlQ29sb3IgOiAnIzAwMDBGRicsXHJcblx0c3Ryb2tlT3BhY2l0eSA6IDEsXHJcblx0c3Ryb2tlV2VpZ2h0IDogMyxcclxuXHRmaWxsQ29sb3IgOiAnd2hpdGUnLFxyXG5cdGZpbGxPcGFjaXR5IDogMSxcclxufTtcclxuXHJcbnZhciBpY29uTGFiZWxSb3V0ZSA9IHtcclxuXHRwYXRoIDogXCJtOTYsNDRcIixcclxuXHRzY2FsZSA6IDEsXHJcblx0c3Ryb2tlQ29sb3IgOiAnI0ZGRkZGRicsXHJcblx0c3Ryb2tlT3BhY2l0eSA6IDEsXHJcblx0c3Ryb2tlV2VpZ2h0IDogMSxcclxuXHRmaWxsQ29sb3IgOiAnd2hpdGUnLFxyXG5cdGZpbGxPcGFjaXR5IDogMTAwLFxyXG59O1xyXG5cclxudmFyIGljb25WT1IgPSB7XHJcblx0cGF0aCA6IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLFxyXG5cdHNjYWxlIDogNyxcclxuXHRzdHJva2VDb2xvciA6ICcjMDAwMDAwJyxcclxuXHRzdHJva2VPcGFjaXR5IDogMSxcclxuXHRzdHJva2VXZWlnaHQgOiAzLFxyXG5cdGZpbGxDb2xvciA6ICd5ZWxsb3cnLFxyXG5cdGZpbGxPcGFjaXR5IDogMSxcclxufTtcclxuXHJcbnZhciBpY29uTkRCID0ge1xyXG5cdHBhdGggOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkNJUkNMRSxcclxuXHRzY2FsZSA6IDcsXHJcblx0c3Ryb2tlQ29sb3IgOiAnIzI2MjYyNicsXHJcblx0c3Ryb2tlT3BhY2l0eSA6IDEsXHJcblx0c3Ryb2tlV2VpZ2h0IDogMyxcclxuXHRmaWxsQ29sb3IgOiAnI0ZGRDA1QycsXHJcblx0ZmlsbE9wYWNpdHkgOiAxLFxyXG59O1xyXG5cclxudmFyIHBsYW5lTGlzdCA9IHt9O1xyXG52YXIgcmVmcmVzaENvbnRyb2xQYW5lbCA9IGZhbHNlO1xyXG52YXIgcGxhbmVUb0ZvbGxvdyA9IG51bGw7XHJcbnZhciBjb2xvcnMgPSBbIFwiYmx1ZVwiLFwiIzI2NzY0RVwiLCBcIiNGMDg1MjZcIiwgXCIjOUNGRjU0XCIsIFwiIzcyMUI0OVwiLCBcIiNBN0Q4RjhcIixcIiMyQUZEQkNcIiwgXCIjRkJFODcwXCIsIFwiIzcxMTMwMlwiLCBcIiMyNTcyQzJcIiwgXCIjMUMyNzFEXCIsIFwiIzYzMkU4NVwiLFxyXG5cdFx0XCIjMUU1RjdBXCIsIFwiI0Q4QjJGNVwiLCBcIiNEMzA3QTJcIiwgXCIjRjM5MUI1XCIsIFwiI0YxODBGNVwiLCBcIiMzQTFFMkVcIixcIiNBRTc3MDdcIiwgXCIjM0UzRDBFXCIsIFwiIzZBQjA2RVwiIF07XHJcbnZhciBjb2xvcl9pbmRleCA9IDA7XHJcbnZhciBuYXZNYXA7XHJcbnZhciBmbGlnaHRQbGFuID0ge307XHJcbnZhciBmbGlnaHRQYXRoOyAvLyBhbiBvYmplY3QgZ29vZ2xlLm1hcHMuUG9seWxpbmUgLSByZXByZXNlbnRpbmcgdGhlIEZsaWdodCBQbGFuXHJcbnZhciBtYXJrZXJzID0gW107XHJcbnZhciByb3V0ZUxhYmVsc09mZlNldCA9IFtdO1xyXG52YXIgbWFya2Vyc0xhYmVsUm91dGUgPSBbXTtcclxudmFyIG1hcmtlcnNXYXlwb2ludCAgID0gW107XHJcbnZhciBlbEluZm9Cb3hQbGFuZTtcclxudmFyIGNoYXNlQWlycGxhbmUgPSBmYWxzZTtcclxuXHJcbiQuYWpheFNldHVwKHtcclxuXHRjYWNoZSA6IGZhbHNlXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHJcblx0bWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNhbnZhcycpLCBtYXBPcHRpb25zKTtcclxuXHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnZHJhZ3N0YXJ0JywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbm9mb2N1cycpLmNsaWNrKCk7XHJcblx0fSk7XHJcblxyXG5cdCQoJ2JvZHknKS5rZXlkb3duKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChlLmtleUNvZGUgPT0gMTkyKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dG9nZ2xlRmxpZ2h0UGFuZWwoKTtcclxuXHRcdH1cclxuXHRcdGlmIChlLmtleUNvZGUgPT0gMTkpIHtcclxuXHRcdFx0JC5nZXRKU09OKFwicGF1c2VcIikuZG9uZShmdW5jdGlvbihkYXRhKXt9KS5lcnJvcihmdW5jdGlvbigpIHtzaG93RXJyb3IoJ05vdCBhYmxlIHRvIFBhdXNlIFgtUGxhbmUuJyl9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHQgbWFwLmFkZExpc3RlbmVyKCd6b29tX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcclxuXHQgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm91dGVMYWJlbHNPZmZTZXQubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgXHQgICB2YXIgZGlzdExhYmVsUm91dGUgPSAyNDAwMDtcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTYgKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDUwO1xyXG5cdCAgICBcdCAgIH0gZWxzZVxyXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxNSApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gNTAwO1xyXG5cdCAgICBcdCAgIH0gZWxzZVxyXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxMiApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gNTAwMDtcclxuXHQgICAgXHQgICB9IGVsc2VcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTAgKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDEyMDAwO1xyXG5cdCAgICBcdCAgIH0gZWxzZVxyXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSA4ICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSAxNjAwMDtcclxuXHQgICAgXHQgICB9XHJcblx0ICAgIFx0ICAgdmFyIGhkZ0xhYmVsID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKHJvdXRlTGFiZWxzT2ZmU2V0W2ldLmxhdGxuZywgcm91dGVMYWJlbHNPZmZTZXRbaV0ubmV4dExhdExuZyk7IFxyXG5cdCAgICBcdCAgIHZhciBvZmZzZXQgPSBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZU9mZnNldChyb3V0ZUxhYmVsc09mZlNldFtpXS5sYXRsbmcsIGRpc3RMYWJlbFJvdXRlLCBoZGdMYWJlbCwgNjM3MTAwMCk7XHJcblx0ICAgIFx0ICAgbWFya2Vyc0xhYmVsUm91dGVbaV0ucG9zaXRpb24gPSBvZmZzZXQ7IFxyXG4gICAgXHQgICB9XHJcblx0ICAgIH0sMSk7XHJcblx0fSk7XHJcblx0IFxyXG5cdHVwZGF0ZVBvc2l0aW9uKCk7XHJcblx0c2V0SW50ZXJ2YWwodXBkYXRlUG9zaXRpb24sIHBlcmlvZCk7XHJcblx0c2V0SW50ZXJ2YWwoY2hlY2tGbGlnaHRQbGFuQm94QW5kTG9hZCwgMjAwMCk7XHJcblxyXG5cdC8vIG5hdiBkYXRhIG92ZXJsYXlzXHJcblx0LypuYXZNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuSW1hZ2VNYXBUeXBlKHtcclxuXHRcdGdldFRpbGVVcmwgOiBmdW5jdGlvbihjb29yZCwgem9vbSkge1xyXG5cdFx0XHR0aWxlU2l6ZSA9IDI1NiAvIE1hdGgucG93KDIsIHpvb20pO1xyXG5cdFx0XHR3ZXN0ID0gY29vcmQueCAqIHRpbGVTaXplO1xyXG5cdFx0XHRlYXN0ID0gd2VzdCArIHRpbGVTaXplO1xyXG5cdFx0XHRub3J0aCA9IGNvb3JkLnkgKiB0aWxlU2l6ZTtcclxuXHRcdFx0c291dGggPSBub3J0aCArIHRpbGVTaXplO1xyXG5cclxuXHRcdFx0bm9ydGhFYXN0ID0gbWFwLmdldFByb2plY3Rpb24oKS5mcm9tUG9pbnRUb0xhdExuZyhcclxuXHRcdFx0XHRcdG5ldyBnb29nbGUubWFwcy5Qb2ludChlYXN0LCBub3J0aCkpO1xyXG5cdFx0XHRzb3V0aFdlc3QgPSBtYXAuZ2V0UHJvamVjdGlvbigpLmZyb21Qb2ludFRvTGF0TG5nKFxyXG5cdFx0XHRcdFx0bmV3IGdvb2dsZS5tYXBzLlBvaW50KHdlc3QsIHNvdXRoKSk7XHJcblxyXG5cdFx0XHQvLyBodHRwOi8veC1wbGFuZS1tYXAuZm91Yy5uZXQvbmF2LnBocD9ub3J0aD0tMjQuNTI3MSUyMCZzb3V0aD0tMjUuNzk5OSUyMCZlYXN0PS00Ni40MDYzJTIwJndlc3Q9LTQ3LjgxMjVcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coKTtcclxuXHJcblx0XHRcdHJldHVybiBbICdodHRwOi8veC1wbGFuZS1tYXAuZm91Yy5uZXQvbmF2LnBocD9ub3J0aD0nLFxyXG5cdFx0XHRcdFx0bm9ydGhFYXN0LmxhdCgpLnRvRml4ZWQoNCksICcmc291dGg9JyxcclxuXHRcdFx0XHRcdHNvdXRoV2VzdC5sYXQoKS50b0ZpeGVkKDQpLCAnJmVhc3Q9JyxcclxuXHRcdFx0XHRcdG5vcnRoRWFzdC5sbmcoKS50b0ZpeGVkKDQpLCAnJndlc3Q9JyxcclxuXHRcdFx0XHRcdHNvdXRoV2VzdC5sbmcoKS50b0ZpeGVkKDQpIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiAsICcmdHlwZT1BUFQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBdLmpvaW4oJycpO1xyXG5cdFx0fSxcclxuXHRcdHRpbGVTaXplIDogbmV3IGdvb2dsZS5tYXBzLlNpemUoMjU2LCAyNTYpLFxyXG5cdFx0bWluWm9vbSA6IDYsXHJcblx0XHRtYXhab29tIDogMTJcclxuXHR9KTtcclxuXHJcblx0bWFwLm92ZXJsYXlNYXBUeXBlcy5wdXNoKG5hdk1hcCk7XHJcblx0bmF2TWFwLnNldE9wYWNpdHkoMCk7Ki9cclxufVxyXG5cclxudmFyIGZsaWdodHBsYW5UZXh0ID0gJ25vbmUnO1xyXG5mdW5jdGlvbiBjaGVja0ZsaWdodFBsYW5Cb3hBbmRMb2FkKCkge1xyXG5cdGlmICgkKCcjcGFuZWwtZnAnKS5pcyhcIjpoaWRkZW5cIikgPT0gZmFsc2UpIHtcclxuXHRcdHZhciB0ZXh0ID0gJCgndGV4dGFyZWEjYm94RmxpZ2h0UGxhbicpLnZhbCgpO1xyXG5cdFx0aWYgKHRleHQgIT0gZmxpZ2h0cGxhblRleHQpIHtcclxuXHRcdFx0ZmxpZ2h0cGxhblRleHQgPSB0ZXh0O1xyXG5cdFx0XHR2YXIgcGFyYW1zID0ge307XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZmxpZ2h0UGF0aCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRmbGlnaHRQYXRoLnNldE1hcChudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjbGVhck1hcmtlcnMoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICggZmxpZ2h0cGxhblRleHQubGVuZ3RoID4gOCApIHtcclxuXHRcdFx0XHR2YXIgZ3JvdXBzID0gZmxpZ2h0cGxhblRleHQudG9VcHBlckNhc2UoKS5zcGxpdChcIiBcIik7XHJcblx0XHRcdFx0dmFyIHdheXBvaW50cyA9IFwiXCI7XHJcblx0XHRcdFx0aWYgKCBncm91cHMubGVuZ3RoID4gMSApIHtcclxuXHRcdFx0XHQgICAgZm9yKHZhciBpID0gMTsgaSA8IChncm91cHMubGVuZ3RoLTEpOyBpKyspIHtcclxuXHRcdFx0XHRcdCAgIHdheXBvaW50cyArPSBncm91cHNbaV07XHJcblx0XHRcdFx0ICAgICAgIGlmICh3YXlwb2ludHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdCAgICAgICAgXHR3YXlwb2ludHMgKz0gXCIrXCI7XHJcblx0XHRcdFx0ICAgIFx0fVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHBhcmFtcyA9IHtcclxuXHRcdFx0XHQgICAgZGVwYXJ0dXJlIDogZ3JvdXBzWzBdLFxyXG5cdFx0XHRcdCAgICB3YXlwb2ludHMgOiB3YXlwb2ludHMsXHJcblx0XHRcdFx0ICAgIGRlc3RpbmF0aW9uIDogZ3JvdXBzW2dyb3Vwcy5sZW5ndGggLSAxXVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUodHJ1ZSk7XHJcblx0XHRcdCQuZ2V0SlNPTihcImZsaWdodHBsYW5cIixwYXJhbXNcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0LmRvbmUoZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0c2hvd0Vycm9yKFwiRXJyb3IgbG9hZGluZyBGbGlnaHQgUGxhbi4gTm8gY29udGVudCB3YXMgcmV0dXJuZWQuXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGZsaWdodFBsYW4gPSBkYXRhO1xyXG5cdFx0XHRcdFx0XHRsb2FkRmxpZ2h0UGxhbigpO1xyXG5cdFx0XHRcdFx0XHRsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKGZhbHNlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5lcnJvcihcclxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0c2hvd0Vycm9yKCdQbGVhc2UgY2hlY2sgdGhlIGNvbm5lY3Rpb24gd2l0aCBodHRwOi8vc2VydmVyOnBvcnQvZmxpZ2h0cGxhbiwgaXMgbm90IHdvcmtpbmcuJylcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKGxvYWRpbmcpIHtcclxuXHRpZiAoIGxvYWRpbmcgKSB7XHJcblx0XHQkKFwiI2ZsaWdodHBsYW4tbG9hZGluZ1wiKS5zaG93KCk7XHJcblx0XHQkKFwiI2JveEZsaWdodFBsYW5cIikuY3NzKCdjb2xvcicsICdsaWdodGdyYXknKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JChcIiNmbGlnaHRwbGFuLWxvYWRpbmdcIikuaGlkZSgpO1xyXG5cdFx0JChcIiNib3hGbGlnaHRQbGFuXCIpLmNzcygnY29sb3InLCAnYmxhY2snKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGbGlnaHRQbGFuKCkge1xyXG5cdC8vIExvYWRpbmcgZmxpZ2h0UGxhbkNvb3JkaW5hdGVzIHZhcmlhYmxlXHJcblx0dmFyIGRlcGFydHVyZUxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmxpZ2h0UGxhbi5kZXBhcnR1cmUubGF0aXR1ZGUsIGZsaWdodFBsYW4uZGVwYXJ0dXJlLmxvbmdpdHVkZSk7XHJcblx0dmFyIGRlc3RpbmF0aW9uTGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLmxhdGl0dWRlLCBmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLmxvbmdpdHVkZSk7IFxyXG5cdHZhciBhcnJDb29yZCA9IG5ldyBBcnJheSgpO1xyXG5cdGFyckNvb3JkWzBdID0gZGVwYXJ0dXJlTGF0TG5nO1xyXG5cdHZhciB0b3RhbFdheXBvaW50cyA9IDA7XHJcblx0dmFyIHRvdGFsRGlzdGFuY2UgPSAwO1xyXG5cdHdoaWxlICh0b3RhbFdheXBvaW50cyA8IGZsaWdodFBsYW4ud2F5cG9pbnRzLmxlbmd0aCkge1xyXG5cdFx0YXJyQ29vcmRbdG90YWxXYXlwb2ludHMgKyAxXSA9IFxyXG5cdFx0XHRuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxyXG5cdFx0XHRcdFx0ZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxhdGl0dWRlLGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sb25naXR1ZGVcclxuXHRcdFx0KTtcclxuXHRcdC8vIE1hcmsgdGhlIFdheXBvaW50XHJcblx0XHR3YXlwb2ludCA9IHtcclxuXHRcdFx0aWQgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10uaWQsXHJcblx0XHRcdGxhdGxuZyA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxhdGl0dWRlLGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sb25naXR1ZGUpLFxyXG5cdFx0XHR0eXBlIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLnR5cGUsXHJcblx0XHRcdGRlc2NyIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLm5hbWUsXHJcblx0XHRcdGZyZXEgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10uZnJlcXVlbmN5XHJcblx0XHR9XHJcblx0XHRtYXJrV2F5cG9pbnQod2F5cG9pbnQpO1xyXG5cclxuXHRcdHRvdGFsV2F5cG9pbnRzKys7XHJcblx0fVxyXG5cdGFyckNvb3JkW3RvdGFsV2F5cG9pbnRzICsgMV0gPSBkZXN0aW5hdGlvbkxhdExuZztcclxuXHR2YXIgZmxpZ2h0UGxhbkNvb3JkaW5hdGVzID0gYXJyQ29vcmQ7XHJcblxyXG5cdC8vIExvYWRpbmcgRmxpZ2h0IFBsYW4gUG9seWxpbmUgLSBEcmF3IHRoZSBsaW5lXHJcblx0ZmxpZ2h0UGF0aCA9IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZSh7XHJcblx0XHRwYXRoIDogZmxpZ2h0UGxhbkNvb3JkaW5hdGVzLFxyXG5cdFx0Z2VvZGVzaWMgOiBmYWxzZSxcclxuXHRcdHN0cm9rZUNvbG9yIDogJyMwMDAwRkYnLFxyXG5cdFx0c3Ryb2tlT3BhY2l0eSA6IDAuNSxcclxuXHRcdHN0cm9rZVdlaWdodCA6IDZcclxuXHR9KTtcclxuXHRmbGlnaHRQYXRoLnNldE1hcChtYXApO1xyXG5cclxuXHQvLyBNYXJrIGZvciB0aGUgQWlycG9ydCBEZXBhcnR1cmVcclxuXHRkZXBhcnR1cmUgPSB7XHJcblx0XHRpZCA6IGZsaWdodFBsYW4uZGVwYXJ0dXJlLmljYW9JZCxcclxuXHRcdG5hbWUgOiBmbGlnaHRQbGFuLmRlcGFydHVyZS5uYW1lLFxyXG5cdFx0bGF0bG5nIDogZGVwYXJ0dXJlTGF0TG5nLFxyXG5cdFx0cnVud2F5cyA6IGZsaWdodFBsYW4uZGVwYXJ0dXJlLmFycmF5UnVud2F5c1xyXG5cdH1cclxuXHRtYXJrQWlycG9ydChkZXBhcnR1cmUsJ2RlcGFydHVyZScpO1xyXG5cclxuXHQvLyBNYXJrIGZvciB0aGUgQWlycG9ydCBEZXN0aW5hdGlvblxyXG5cdGRlc3RpbmF0aW9uID0ge1xyXG5cdFx0aWQgOiBmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLmljYW9JZCxcclxuXHRcdG5hbWUgOiBmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLm5hbWUsXHJcblx0XHRsYXRsbmcgOiBkZXN0aW5hdGlvbkxhdExuZyxcclxuXHRcdHJ1bndheXMgOiBmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLmFycmF5UnVud2F5c1xyXG5cdH1cclxuXHRtYXJrQWlycG9ydChkZXN0aW5hdGlvbiwnZGVzdGluYXRpb24nKTtcclxuXHRcclxuXHQvLyBQYW5lbCBJbmZvIEZsaWdodCBQbGFuXHJcblx0JChcIiNmcEluZm8tRGVwYXJ0dXJlXCIpLnRleHQoZGVwYXJ0dXJlLmlkICsgJyAtICcgKyBkZXBhcnR1cmUubmFtZSArICcgQWlycG9ydCcpO1xyXG5cdCQoXCIjZnBJbmZvLURlc3RpbmF0aW9uXCIpLnRleHQoZGVzdGluYXRpb24uaWQgKyAnIC0gJyArIGRlc3RpbmF0aW9uLm5hbWUgKyAnIEFpcnBvcnQnKTtcclxuXHRcclxuXHQvLyBNYXJrIExhYmVscyBCZWFyaW5nL0Rpc3RhbmNlXHJcblx0dmFyIGluZGV4ID0gMDtcclxuXHR3aGlsZSAoaW5kZXggPCBmbGlnaHRQbGFuLmluZm9Sb3V0ZS5sZW5ndGgpIHtcclxuXHRcdHRvdGFsRGlzdGFuY2UgKz0gZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmRpc3RhbmNlTk07XHJcblx0XHRsYWJlbFJvdXRlID0ge1xyXG5cdFx0XHRkaXN0YW5jZU5NIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmRpc3RhbmNlTk0sXHJcblx0XHRcdGRpc3RhbmNlIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmRpc3RhbmNlLFxyXG5cdFx0XHRiZWFyaW5nIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmcsXHJcblx0XHRcdGJlYXJpbmdEZWdyZWUgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uYmVhcmluZ0RlZ3JlZSxcclxuXHRcdFx0bGF0bG5nIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcclxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubG9uZ2l0dWRlKSxcclxuXHRcdFx0bmV4dExhdGxuZyA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXHJcblx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubmV4dExhdGl0dWRlLFxyXG5cdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLm5leHRMb25naXR1ZGUpLFxyXG5cdFx0XHRyb3RhdGUgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uYmVhcmluZyxcclxuXHRcdFx0bmV4dFBvaW50IDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLm5leHRQb2ludCxcclxuXHRcdFx0Y3VycmVudFBvaW50IDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmN1cnJlbnRQb2ludCxcclxuXHRcdFx0Y29tcGFzc0hlYWRpbmcgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uY29tcGFzc0hlYWRpbmdcclxuXHRcdH1cclxuXHRcdG1hcmtMYWJlbFJvdXRlKGxhYmVsUm91dGUpO1xyXG5cdFx0aW5kZXgrKztcclxuXHR9XHJcblxyXG5cdCQoXCIjZnBJbmZvLVJvdXRlRGlzdGFuY2VcIilcclxuXHRcdC50ZXh0KFxyXG5cdFx0XHRudW1lcmFsKHRvdGFsRGlzdGFuY2UpLmZvcm1hdCgnMCwwJykgKyAnbm0nICsgJyAvICcgK1xyXG5cdFx0XHRudW1lcmFsKCh0b3RhbERpc3RhbmNlICogMS44NTIpKS5mb3JtYXQoJzAsMCcpICsgJ2ttJ1xyXG5cdCAgICAgICAgKTtcclxuXHQgICAgICAgIFxyXG5cdHZhciBwYW5GbGlnaHRQbGFuID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyhkZXBhcnR1cmVMYXRMbmcsIGRlc3RpbmF0aW9uTGF0TG5nKTtcclxuXHRtYXAuZml0Qm91bmRzKHBhbkZsaWdodFBsYW4pO1xyXG5cdC8vbWFwLnBhblRvQm91bmRzKHBhbkZsaWdodFBsYW4pO1xyXG5cdC8vbWFwLnNldFpvb20oMTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlTWFyayhtKSB7XHJcblx0bWFya2Vycy5wdXNoKG0pO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyTWFya2VycygpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIG1hcmtlcnNbaV0uc2V0TWFwKG51bGwpO1xyXG4gIH1cclxuICByb3V0ZUxhYmVsc09mZlNldCA9IFtdO1xyXG4gIG1hcmtlcnNMYWJlbFJvdXRlID0gW107XHJcbiAgbWFya2Vyc1dheXBvaW50ICAgPSBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya0xhYmVsUm91dGUobGFiZWxSb3V0ZSkge1xyXG5cdC8vdmFyIGRpc3RMYWJlbCA9IGxhYmVsUm91dGUuZGlzdGFuY2VOTSAqIDEuODUyOyAvLyBjb252ZXJ0IG5tIHRvIG1ldGVyc1xyXG5cdC8vdmFyIGhkZ0xhYmVsID0gbGFiZWxSb3V0ZS5iZWFyaW5nRGVncmVlIC0gMjI7XHJcblx0Ly92YXIgZGlzdExhYmVsID0gMjQwMDA7IFxyXG5cdHJvdXRlTGFiZWxzT2ZmU2V0LnB1c2goXHJcblx0XHR7XHJcblx0XHRcdGxhdGxuZyA6IGxhYmVsUm91dGUubGF0bG5nLFxyXG5cdFx0XHRuZXh0TGF0TG5nIDogbGFiZWxSb3V0ZS5uZXh0TGF0bG5nXHJcblx0XHR9XHJcblx0KTtcclxuXHR2YXIgZGlzdExhYmVsUm91dGUgPSAxMjAwMDtcclxuXHR2YXIgaGRnTGFiZWwgPSBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcobGFiZWxSb3V0ZS5sYXRsbmcsIGxhYmVsUm91dGUubmV4dExhdGxuZyk7IFxyXG5cdHZhciBvZmZzZXQgPSBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZU9mZnNldChsYWJlbFJvdXRlLmxhdGxuZywgZGlzdExhYmVsUm91dGUsIGhkZ0xhYmVsLCA2MzcxMDAwKTtcclxuXHR2YXIgYW5nbGVSb3RhdGUgPSBoZGdMYWJlbCAtIDkwO1xyXG5cdGlmICggYW5nbGVSb3RhdGUgPiAtMjcwICYmIGFuZ2xlUm90YXRlIDwgLTkwICkge1xyXG5cdFx0IGFuZ2xlUm90YXRlID0gYW5nbGVSb3RhdGUgLSAxODA7XHJcblx0fVxyXG5cdHZhciBsYWJlbCA9IGxhYmVsUm91dGUuYmVhcmluZyArIFwiJmRlZyBcIiArIG51bWVyYWwobGFiZWxSb3V0ZS5kaXN0YW5jZSkuZm9ybWF0KCcwLDAnKSArIFwibm1cIjtcclxuXHR2YXIgeCA9IDIzO1xyXG5cdHZhciB5ID0gMDtcclxuXHR2YXIgYW5jaG9yID0gbmV3IGdvb2dsZS5tYXBzLlBvaW50KHgsIHkpO1xyXG5cdHZhciBtYXJrZXJMYWJlbFJvdXRlID0gbmV3IE1hcmtlcldpdGhMYWJlbCh7XHJcblx0XHRwb3NpdGlvbiA6IG9mZnNldCxcclxuXHRcdGFuaW1hdGlvbiA6IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG5cdFx0bGFiZWxDb250ZW50IDogbGFiZWwsXHJcblx0XHRsYWJlbEFuY2hvciA6IGFuY2hvcixcclxuXHRcdGxhYmVsQ2xhc3MgOiBcImxhYmVsc0luZm9Sb3V0ZVwiLFxyXG5cdFx0Y2xpY2thYmxlIDogdHJ1ZSxcclxuXHRcdGljb24gOiBpY29uTGFiZWxSb3V0ZSxcclxuXHRcdHJvdGF0ZSA6IGFuZ2xlUm90YXRlXHJcblx0fSk7XHJcblx0XHJcblx0dmFyIGluZm9Db250ZW50ID0gXCI8dGFibGUgd2lkdGg9JzEwMCUnIGJvcmRlcj0wIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nMic+XCI7XHJcblx0XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgIHdpZHRoPScxMDAlJyBib3JkZXI9MCBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB2YWxpZ249J21pZGRsZScgd2lkdGg9JzMwcHgnPjxpbWcgc3JjPSdhcnJvdy5wbmcnPjwvdGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGQgdmFsaWduPSdtaWRkbGUnIHdpZHRoPScxNTBweCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCImbmJzcDsmbmJzcDsmbmJzcDtSb3V0ZTo8YnI+PGI+Jm5ic3A7Jm5ic3A7XCIgKyBsYWJlbFJvdXRlLmN1cnJlbnRQb2ludCArIFxyXG5cdFx0XHRcdCAgIFwiPC9iPiZuYnNwO3RvJm5ic3A7PGI+XCIgKyBsYWJlbFJvdXRlLm5leHRQb2ludCArIFwiPC9iPjwvdGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+PC90YWJsZT5cIjtcclxuXHRcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nMic+PGhyPjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzYwcHgnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9ICAgXCJEaXN0YW5jZTo8L3RkPjx0ZD4gPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBcclxuXHRcdFx0XHRcdFx0XHRcdG51bWVyYWwobGFiZWxSb3V0ZS5kaXN0YW5jZSkuZm9ybWF0KCcwLDAnKSArIFwibm08L3NwYW4+Jm5ic3A7Jm5ic3A7LyZuYnNwOyZuYnNwO1wiICsgXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyYWwoTWF0aC5jZWlsKGxhYmVsUm91dGUuZGlzdGFuY2VOTSAvIDAuNTM5OTYpKS5mb3JtYXQoJzAsMCcpICtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICBcImttPC9zcGFuPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD5cIjtcclxuXHRpbmZvQ29udGVudCArPSAgIFwiSGVhZGluZzo8L3RkPjx0ZD4gPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBsYWJlbFJvdXRlLmJlYXJpbmcgKyBcIiZkZWc8L3NwYW4+Jm5ic3A7Jm5ic3A7LyZuYnNwOyZuYnNwO1wiICsgXHJcbiAgICBcdFx0XHRcdCAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgbGFiZWxSb3V0ZS5jb21wYXNzSGVhZGluZyArIFwiPC9zcGFuPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHR2YXIgaW5mb0JveCA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6ICc8ZGl2IGlkPVwiaXdfY29udGVudFwiPicgKyBpbmZvQ29udGVudCArICc8L2Rpdj4nLFxyXG5cdFx0cGl4ZWxPZmZzZXQ6IG5ldyBnb29nbGUubWFwcy5TaXplKC0zMCwtMjUsXCJweFwiLFwicHhcIilcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJMYWJlbFJvdXRlLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0aW5mb0JveC5vcGVuKG1hcCwgdGhpcyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyTGFiZWxSb3V0ZSwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0Y2hhbmdlQ29sb3JJbmZvQm94KGVsLFwicmdiKDI1NSwyNTUsMjU1KVwiKTtcclxuXHRcdFx0aW5mb0JveC5jbG9zZSgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9Cb3gsICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuXHQgICAgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwiaGlkZGVuXCIpO1xyXG5cdFx0Y2hhbmdlQ29sb3JJbmZvQm94KGVsLFwicmdiYSgxMjcsMjU1LDIxMiwwLjgyKVwiKTtcclxuXHR9KTtcclxuXHRcclxuXHRtYXJrZXJMYWJlbFJvdXRlLnNldE1hcChtYXApO1xyXG5cdHNhdmVNYXJrKG1hcmtlckxhYmVsUm91dGUpO1xyXG5cdG1hcmtlcnNMYWJlbFJvdXRlLnB1c2gobWFya2VyTGFiZWxSb3V0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtBaXJwb3J0KGFpcnBvcnQsdHlwZSkge1xyXG5cdHZhciBtYXJrZXJBaXJwb3J0ID0gbmV3IE1hcmtlcldpdGhMYWJlbCh7XHJcblx0XHRwb3NpdGlvbiA6IGFpcnBvcnQubGF0bG5nLFxyXG5cdFx0YW5pbWF0aW9uIDogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcblx0XHRpY29uIDogaWNvbkFpcnBvcnQsXHJcblx0XHRsYWJlbENvbnRlbnQgOiBhaXJwb3J0LmlkLFxyXG5cdFx0bGFiZWxBbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjAsIDcwKSxcclxuXHRcdGxhYmVsQ2xhc3MgOiBcImxhYmVsc0FpcnBvcnRcIlxyXG5cdH0pO1xyXG5cclxuXHR2YXIgaW1hZ2UgPSBcIjxpbWcgc3JjPSd0YWtlb2ZmLnBuZycvPlwiO1xyXG5cdGlmICggdHlwZSA9PSAnZGVzdGluYXRpb24nICkge1xyXG5cdFx0aW1hZ2UgPSBcIjxpbWcgc3JjPSdsYW5kaW5nLnBuZycvPlwiO1xyXG5cdH1cclxuXHR2YXIgaW5mb0NvbnRlbnQgPSBcIlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRhYmxlIGJvcmRlcj0wIHdpZHRoPScxMDAlJyBjbGFzcz0ncnVud2F5VGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPSc2MHB4JyBhbGlnbj0nbGVmdCc+XCIgKyBpbWFnZSArIFwiPC90ZD5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0ZD5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjxiPlwiICsgYWlycG9ydC5pZCArIFwiPC9iPiAtIFwiICsgYWlycG9ydC5uYW1lO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPSc0Jz48aHI+PC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSB3aWR0aD0nMTAwJScgYm9yZGVyPTAgY2xhc3M9J3J1bndheVRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYWlycG9ydC5ydW53YXlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj5cIlxyXG5cdFx0XHRcdCsgXCIgPHRkPlJ1bndheSA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcclxuXHRcdFx0XHQrIGFpcnBvcnQucnVud2F5c1tpXS5udW1iZXJcclxuXHRcdFx0XHQrIFwiPC9zcGFuPjwvdGQ+XCJcclxuXHRcdFx0XHQrIFwiIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtIZWFkaW5nOiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcclxuXHRcdFx0XHQrIGFpcnBvcnQucnVud2F5c1tpXS5oZWFkaW5nXHJcblx0XHRcdFx0KyBcIjxmb250IHNpemU9JzJweCc+JmRlZzs8L2ZvbnQ+PC9zcGFuPjwvdGQ+XCJcclxuXHRcdFx0XHQrIFwiIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtGcmVxdWVuY3k6IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxyXG5cdFx0XHRcdCsgYWlycG9ydC5ydW53YXlzW2ldLmZyZXF1ZW5jeSArIFwiPC9zcGFuPjxici8+PC90ZD5cIlxyXG5cdFx0XHRcdCsgXCIgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0VsZXZhdGlvbjogPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXHJcblx0XHRcdFx0KyBudW1lcmFsKGFpcnBvcnQucnVud2F5c1tpXS5lbGV2YXRpb24pLmZvcm1hdCgnMCwwJykgKyBcIiBmdDwvc3Bhbj48YnIvPjwvdGQ+XCIgKyBcIjwvdHI+XCI7XHJcblx0fVxyXG5cdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHJcblx0dmFyIGluZm9NMSA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6ICc8ZGl2IGlkPVwiaXdfY29udGVudFwiPicgKyBpbmZvQ29udGVudCArICc8L2Rpdj4nXHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyQWlycG9ydCwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aW5mb00xLm9wZW4obWFwLCB0aGlzKTtcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJBaXJwb3J0LCBcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcImhpZGRlblwiKTtcclxuXHRcdH1cclxuXHRcdGluZm9NMS5jbG9zZSgpO1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9NMSwgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwidmlzaWJsZVwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRtYXJrZXJBaXJwb3J0LnNldE1hcChtYXApO1xyXG5cdHNhdmVNYXJrKG1hcmtlckFpcnBvcnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrV2F5cG9pbnQod2F5cG9pbnQpIHtcclxuXHR2YXIgaWNvbldQVCA9IGljb25XYXlwb2ludDtcclxuXHR2YXIgaW5mb0NvbnRlbnQgPSBcIlwiO1xyXG5cdGlmICh3YXlwb2ludC50eXBlID09IDEpIHtcclxuXHRcdGljb25XUFQgPSBpY29uVk9SO1xyXG5cdH0gZWxzZSBpZiAod2F5cG9pbnQudHlwZSA9PSAyKSB7XHJcblx0XHRpY29uV1BUID0gaWNvbk5EQjtcclxuXHR9XHJcblxyXG5cdHZhciBtYXJrZXJXYXlwb2ludCA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xyXG5cdFx0cG9zaXRpb24gOiB3YXlwb2ludC5sYXRsbmcsXHJcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuXHRcdGljb24gOiBpY29uV1BULFxyXG5cdFx0bGFiZWxDb250ZW50IDogd2F5cG9pbnQuaWQsXHJcblx0XHRsYWJlbEFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgyOCwgLTYpLFxyXG5cdFx0bGFiZWxDbGFzcyA6IFwibGFiZWxzV2F5cG9pbnRcIlxyXG5cdH0pO1xyXG5cdGlmICh3YXlwb2ludC50eXBlID09ICdWT1InIHx8IHdheXBvaW50LnR5cGUgPT0gJ05EQicpIHtcclxuXHRcdC8vIFZPUiBhbmQgTkRCXHJcblx0XHRpbmZvQ29udGVudCA9IFwiPHRhYmxlIGJvcmRlcj0wIGNsYXNzPSd2b3JUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMzMwcHgnPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQgdmFsaWduPSdtaWRkbGUnIGNvbHNwYW49Mj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiICA8dGFibGUgYm9yZGVyPTAgY2xhc3M9J3ZvclRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPjx0cj48dGQ+XCI7XHJcblx0XHRpZiAod2F5cG9pbnQudHlwZSA9PSAnVk9SJykge1xyXG5cdFx0XHQvLyBWT1JcclxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPGltZyBzcmM9J1ZPUi5wbmcnLz5cIjtcclxuXHRcdH0gZWxzZSBpZiAod2F5cG9pbnQudHlwZSA9PSAnTkRCJykge1xyXG5cdFx0XHQvLyBOQkRcclxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPGltZyBzcmM9J05EQi5wbmcnLz5cIjtcclxuXHRcdH1cclxuXHRcdGluZm9Db250ZW50ICs9IFwiPC90ZD5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRkPiZuYnNwOyZuYnNwOyZuYnNwOzxiPlwiICsgd2F5cG9pbnQuaWQgKyBcIjwvYj4gLSBcIlxyXG5cdFx0XHRcdCsgd2F5cG9pbnQuZGVzY3IgKyBcIjwvdGQ+XCIgKyBcIjwvdHI+PC90YWJsZT5cIlxyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPjxoci8+PC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPScyMCUnPiBGcmVxdWVuY3k6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgd2F5cG9pbnQuZnJlcSArIFwiPC90ZD5cIiArIFwiPC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMSUnPiBMYXRpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sYXQoKSkgKyBcIjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD4gTG9uZ2l0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxuZygpKSArIFwiPGJyLz48L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEZJWFxyXG5cdFx0aW5mb0NvbnRlbnQgPSBcIjx0YWJsZSBib3JkZXI9MCBjbGFzcz0ndm9yVGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzEyMHB4Jz5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRkIGNvbHNwYW49Mj48Yj5cIiArIHdheXBvaW50LmlkICsgXCI8L2I+PC90ZD48L3RyPlwiXHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nMic+PGhyLz48L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzElJz4gTGF0aXR1ZGU6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgcHJlY2lzaW9uRGVjaW1hbE51bWJlcih3YXlwb2ludC5sYXRsbmcubGF0KCkpICsgXCI8L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+IExvbmdpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sbmcoKSkgKyBcIjxici8+PC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdH1cclxuXHR2YXIgaW5mb00xID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2PidcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJXYXlwb2ludCwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aW5mb00xLm9wZW4obWFwLCB0aGlzKTtcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJXYXlwb2ludCwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XHJcblx0XHR9XHJcblx0XHRpbmZvTTEuY2xvc2UoKTtcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvTTEsICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcInZpc2libGVcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0bWFya2VyV2F5cG9pbnQuc2V0TWFwKG1hcCk7XHJcblx0c2F2ZU1hcmsobWFya2VyV2F5cG9pbnQpO1xyXG5cdG1hcmtlcnNXYXlwb2ludC5wdXNoKG1hcmtlcldheXBvaW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3JJbmZvQm94KGVsLGNvbG9yKSB7XHJcblx0ZGl2Q29sb3IgPSBlbC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0ZGl2Q29sb3Iuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLHN0YXR1c0Fycm93LHN0YXR1c0Nsb3NlQnV0dG9uKSB7XHJcblx0ZGl2RWwgPSBlbC5maXJzdENoaWxkO1xyXG4gICAgY2hpbGQxID0gZGl2RWwuZmlyc3RDaGlsZDtcclxuICAgIGNoaWxkMyA9IGNoaWxkMS5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKCBjaGlsZDMgIT0gdW5kZWZpbmVkICkge1xyXG4gICAgXHRjaGlsZDEuc3R5bGUudmlzaWJpbGl0eSA9IHN0YXR1c0Fycm93O1xyXG4gICAgXHRjaGlsZDMuc3R5bGUudmlzaWJpbGl0eSA9IHN0YXR1c0Fycm93O1xyXG5cdCAgICAvLyBSZW1vdmUgQ2xvc2UgQnV0dG9uXHJcblx0ICAgIGRpdkNsb3NlQnV0dG9uID0gZGl2RWwucGFyZW50Tm9kZS5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0ICAgIC8vZGl2Q2xvc2VCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IHN0YXR1cztcclxuXHQgICAgaWYgKCBzdGF0dXNDbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgKSB7XHJcblx0ICAgIFx0ZGl2Q2xvc2VCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IHN0YXR1c0Nsb3NlQnV0dG9uO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdCAgICBcdGRpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdCAgICB9XHJcblx0ICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHZscikge1xyXG5cdHJldHVybiBwYXJzZUZsb2F0KE1hdGgucm91bmQodmxyICogMTAwMDAwKSAvIDEwMDAwMCkudG9GaXhlZCg1KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKSB7XHJcblx0JC5nZXRKU09OKFxyXG5cdFx0XHRcImRhdGFcIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdC8qc2hvd0Vycm9yKFwiTGlzdGVuaW5nIGF0IFgtUGxhbmUncyBVRFAgdHJhZmZpYyBwb3J0IDQ5MDAzLiBcIlxyXG5cdFx0XHRcdFx0XHRcdCsgXCJQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGF0IHRoZSBYLVBsYW5lJ3MgTmV0IENvbm5lY3Rpb25zIG1lbnUuXCIpOyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGRlbGV0ZSBhbGwgYWJzZW50IHBsYW5lc1xyXG5cdFx0XHRcdGZvciAoIHZhciBpcCBpbiBwbGFuZUxpc3QpIHtcclxuXHRcdFx0XHRcdGlmICghKGlwIGluIGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdGRlbGV0ZVBsYW5lKGlwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gZm9yIGN1cnJlbnQgYW5kIG5ldyBwbGFuZXNcclxuXHRcdFx0XHRmb3IgKCB2YXIgaXAgaW4gZGF0YSkge1xyXG5cdFx0XHRcdFx0Ly8gaWYgbmV3IHBsYW5lXHJcblx0XHRcdFx0XHRpZiAoIShpcCBpbiBwbGFuZUxpc3QpKSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yID0gbmV4dENvbG9yKCk7XHJcblx0XHRcdFx0XHRcdG1hcmtlck9wdGlvbnMuaWNvbi5maWxsQ29sb3IgPSBjb2xvcjtcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXSA9IHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lIDogaXAucmVwbGFjZSgvLS9nLCAnLicpLFxyXG5cdFx0XHRcdFx0XHRcdGxvbiA6IDAsXHJcblx0XHRcdFx0XHRcdFx0bGF0IDogMCxcclxuXHRcdFx0XHRcdFx0XHRhbHQgOiBkYXRhW2lwXS5hbHRNYXAsXHJcblx0XHRcdFx0XHRcdFx0bWFya2VyIDogbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihtYXJrZXJPcHRpb25zKSxcclxuXHRcdFx0XHRcdFx0XHR0cmFjZSA6IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZShwb2x5T3B0aW9ucyksXHJcblx0XHRcdFx0XHRcdFx0aW5mbyA6IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCksXHJcblx0XHRcdFx0XHRcdFx0Y29sb3IgOiBjb2xvcixcclxuXHRcdFx0XHRcdFx0XHR2U3BlZWQgOiBkYXRhW2lwXS52U3BlZWQsXHJcblx0XHRcdFx0XHRcdFx0YWlyU3BlZWQgOiBkYXRhW2lwXS5haXJTcGVlZCxcclxuXHRcdFx0XHRcdFx0XHRnU3BlZWQgOiBkYXRhW2lwXS5ncm91bmRTcGVlZCxcclxuXHRcdFx0XHRcdFx0XHRoZWFkaW5nIDogZGF0YVtpcF0uYmVhcmluZyxcclxuXHRcdFx0XHRcdFx0XHRkZXN0IDogZGF0YVtpcF0uZGVzdGluYXRpb24sXHJcblx0XHRcdFx0XHRcdFx0Z3BzRGlzdE5tIDogZGF0YVtpcF0uZ3BzRGlzdGFuY2VObSxcclxuXHRcdFx0XHRcdFx0XHRncHNEaXN0VGltZSA6IGRhdGFbaXBdLmdwc0Rpc3RhbmNlVGltZSxcclxuXHRcdFx0XHRcdFx0XHRuYXYxIDogZGF0YVtpcF0ubmF2MUZyZXEsXHJcblx0XHRcdFx0XHRcdFx0bmF2MiA6IGRhdGFbaXBdLm5hdjJGcmVxLFxyXG5cdFx0XHRcdFx0XHRcdGJhcm9tZXRlciA6IGRhdGFbaXBdLmJhcm9tZXRlcixcclxuXHRcdFx0XHRcdFx0XHRmdWVsUXVhbnRpdHkgOiBkYXRhW2lwXS5mdWVsUXVhbnRpdHksXHJcblx0XHRcdFx0XHRcdFx0b3V0c2lkZVRlbXAgOiBkYXRhW2lwXS5vdXRzaWRlVGVtcGVyYXR1cmUsXHJcblx0XHRcdFx0XHRcdFx0Y29tMSA6IGRhdGFbaXBdLmNvbTFGcmVxLFxyXG5cdFx0XHRcdFx0XHRcdGNvbTIgOiBkYXRhW2lwXS5jb20yRnJlcSxcclxuXHRcdFx0XHRcdFx0XHRjb21wYXNzSGVhZGluZyA6IGRhdGFbaXBdLmNvbXBhc3NIZWFkaW5nXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldE1hcChtYXApO1xyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm1hcmtlci5pcCA9IGlwOyBcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5pbmZvV2luZG93TGlzdGVuZXIgPSBnb29nbGUubWFwcy5ldmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZExpc3RlbmVyKHBsYW5lTGlzdFtpcF0ubWFya2VyLCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFuZUxpc3RbdGhpcy5pcF0uaW5mby5vcGVuKG1hcCxwbGFuZUxpc3RbdGhpcy5pcF0ubWFya2VyKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm8sICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRlbEluZm9Cb3hQbGFuZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRcdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsSW5mb0JveFBsYW5lLFwidmlzaWJsZVwiLFwidmlzaWJsZVwiKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHBsYW5lTGlzdFtpcF0uaW5mbywnY2xvc2VjbGljaycsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsSW5mb0JveFBsYW5lLFwiaGlkZGVuXCIpO1xyXG5cdFx0XHRcdFx0XHRcdGVsSW5mb0JveFBsYW5lID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udHJhY2Uuc2V0TWFwKG1hcCk7XHJcblx0XHRcdFx0XHRcdHBsYW5lVG9Gb2xsb3cgPSBpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG5ld0xhdCAgICAgICAgICAgICAgICAgICAgICAgPSBkYXRhW2lwXS5sYXRNYXA7XHJcblx0XHRcdFx0XHRuZXdMb24gICAgICAgICAgICAgICAgICAgICAgID0gZGF0YVtpcF0ubG9uTWFwO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5hbHQgICAgICAgICAgICA9IGRhdGFbaXBdLmFsdE1hcDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udlNwZWVkICAgICAgICAgPSBkYXRhW2lwXS52U3BlZWQ7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmFpclNwZWVkICAgICAgID0gZGF0YVtpcF0uYWlyU3BlZWQ7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmhlYWRpbmcgICAgICAgID0gZGF0YVtpcF0uYmVhcmluZztcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZGVzdCAgICAgICAgICAgPSBkYXRhW2lwXS5kZXN0aW5hdGlvbjtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZ3BzRGlzdE5tICAgICAgPSBkYXRhW2lwXS5ncHNEaXN0YW5jZU5tO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5ncHNEaXN0VGltZSAgICA9IGRhdGFbaXBdLmdwc0Rpc3RhbmNlVGltZTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZ1NwZWVkICAgICAgICAgPSBkYXRhW2lwXS5ncm91bmRTcGVlZDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubmF2MSAgICAgICAgICAgPSBkYXRhW2lwXS5uYXYxRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubmF2MiAgICAgICAgICAgPSBkYXRhW2lwXS5uYXYyRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uYmFyb21ldGVyICAgICAgPSBkYXRhW2lwXS5iYXJvbWV0ZXI7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmZ1ZWxRdWFudGl0eSAgID0gZGF0YVtpcF0uZnVlbFF1YW50aXR5O1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5vdXRzaWRlVGVtcCAgICA9IGRhdGFbaXBdLm91dHNpZGVUZW1wZXJhdHVyZTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tMSAgICAgICAgICAgPSBkYXRhW2lwXS5jb20xRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tMiAgICAgICAgICAgPSBkYXRhW2lwXS5jb20yRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tcGFzc0hlYWRpbmcgPSBkYXRhW2lwXS5jb21wYXNzSGVhZGluZztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIG5ld1BvaW50ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhuZXdMYXQsbmV3TG9uKTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldFBvc2l0aW9uKG5ld1BvaW50KTtcclxuXHRcdFx0XHRcdHZhciBpY29uID0gcGxhbmVMaXN0W2lwXS5tYXJrZXIuZ2V0SWNvbigpO1xyXG5cdFx0XHRcdFx0aWNvbi5yb3RhdGlvbiA9IHBsYW5lTGlzdFtpcF0uaGVhZGluZztcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldEljb24oaWNvbik7XHJcblx0XHRcdFx0XHQvLyBhZGQgbmV3IHBvaW50IHRvIGxpbmVcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udHJhY2UuZ2V0UGF0aCgpLnB1c2gobmV3UG9pbnQpO1xyXG5cdFx0XHRcdFx0dmFyIGFpcnBsYW5lTGFiZWwgPSAgcGxhbmVMaXN0W2lwXS5uYW1lO1xyXG5cdFx0XHRcdFx0aWYgKCBhaXJwbGFuZUxhYmVsID09ICcxMjcuMC4wLjEnICkge1xyXG5cdFx0XHRcdFx0XHQgYWlycGxhbmVMYWJlbCA9ICdZT1UnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly92YXIgaGRnQWlycGxhbmUgPSBOdW1iZXIoTWF0aC5mbG9vcigoKHBsYW5lTGlzdFtpcF0uaGVhZGluZyArIDM2MCkgJSAzNjApKSkgKyAyMjtcclxuXHRcdFx0XHRcdHZhciBoZGdBaXJwbGFuZSA9IHBsYW5lTGlzdFtpcF0uY29tcGFzc0hlYWRpbmc7XHJcblx0XHRcdFx0XHR2YXIgaW5mb0NvbnRlbnQgPSBcIjxkaXYgaWQ9J2l3X2NvbnRlbnQnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8ZGl2IHN0eWxlPSdtYXJnaW46IDA7IHdpZHRoOiA1MDBweDsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTAwJSc+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgPHRhYmxlIGJvcmRlcj0wIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzEwMCUnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8dHI+PHRkIHN0eWxlPSdoZWlnaHQ6MzBweDsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8Yj5cIiArIGFpcnBsYW5lTGFiZWwgKyBcIjwvYj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPC90ZD48L3RyPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8dHI+PHRkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8L3RkPjwvdHI+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgPC90YWJsZT5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdGQ+PC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIGJhY2tDb2xvciA9ICdsaWdodGdyYXknO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHI+PHRkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRhYmxlIHN0eWxlPSdib3JkZXI6c29saWQgMXB4IGRhcmtncmF5O2ZvbnQtd2VpZ2h0OmJvbGQ7JyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzInIHdpZHRoPScxMDAlJz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQgd2lkdGg9JzgwcHgnPkRlc3RpbmF0aW9uOjwvdGQ+PHRkIGNvbHNwYW49JzUnPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZGVzdCArIFwiPC9zcGFuPjwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkRpc3RhbmNlOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZ3BzRGlzdE5tICsgXCI8L3NwYW4+Jm5ic3A7bm08L3RkPlwiOyBcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZCB3aWR0aD0nNjBweCc+RVRFOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZ3BzRGlzdFRpbWUgKyBcIjwvc3Bhbj4mbmJzcDs8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPjx0ZD4gQWx0aXR1ZGU6IDwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IG51bWVyYWwocGxhbmVMaXN0W2lwXS5hbHQudG9GaXhlZCgpKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7ZnQgTVNMJm5ic3A7Jm5ic3A7PC90ZD5cIlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgKyBcIjx0ZD5IZWFkaW5nOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIGhkZ0FpcnBsYW5lICsgXCImZGVnOzwvc3Bhbj48L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiBBaXJTcGVlZDogPC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgbnVtZXJhbChwbGFuZUxpc3RbaXBdLmFpclNwZWVkKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7a3RzPC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpZiAoIHBsYW5lTGlzdFtpcF0udlNwZWVkID4gLTEgKSB7XHJcblx0XHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5WUzo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCI7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+VlM6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm9SZWQnPlwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gbnVtZXJhbChwbGFuZUxpc3RbaXBdLnZTcGVlZCkuZm9ybWF0KCcwLDAnKSArIFwiPC9zcGFuPiZuYnNwO2ZwbSZuYnNwOyZuYnNwOzwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk5hdjE6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5uYXYxICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiOyBcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5Db20xOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uY29tMSArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+PHRyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+TmF2Mjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLm5hdjIgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+Q29tMjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmNvbTIgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkJhcm9tZXRlcjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmJhcm9tZXRlciArIFwiPC9zcGFuPjwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+RnVlbDo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmZ1ZWxRdWFudGl0eSArIFwiPC9zcGFuPjwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj48dHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5PQVQ6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5vdXRzaWRlVGVtcCArIFwiPC9zcGFuPiZkZWc7Jm5ic3A8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkdTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBhcnNlRmxvYXQocGxhbmVMaXN0W2lwXS5nU3BlZWQpLnRvRml4ZWQoKSArIFwiPC9zcGFuPiZuYnNwO2t0czwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90YWJsZT5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdGQ+PC90cj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC9kaXY+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvZGl2PlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyBzZXQgaW5mbyB3aW5kb3cgY29udGVudFxyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5pbmZvLnNldENvbnRlbnQoaW5mb0NvbnRlbnQpO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5sb24gPSBuZXdMb247XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmxhdCA9IG5ld0xhdDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaGRnID0gcGxhbmVMaXN0W2lwXS5oZWFkaW5nO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5zcGQgPSBwbGFuZUxpc3RbaXBdLmdTcGVlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gbW92ZSBtYXAgaWYgY2hlY2tib3ggY2hlY2tlZFxyXG5cdFx0XHRcdGlmICggY2hhc2VBaXJwbGFuZSApIHtcclxuXHRcdFx0XHRcdGlmICggcGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddICE9IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRcdFx0bWFwLnBhblRvKG5ldyBnb29nbGUubWFwcy5MYXRMbmcocGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddLmxhdCxwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10ubG9uKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdC5lcnJvcihcclxuXHRcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2hvd0Vycm9yKCdPcHMhIE1heWRheSEgTWF5ZGF5ISBKYXZhIFNlcnZlciBpcyBkb3duISEhJylcclxuXHRcdFx0fSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWFyaW5nKGxvbjEsIGxhdDEsIGxvbjIsIGxhdDIpIHtcclxuXHRsb24xID0gbG9uMSAqIE1hdGguUEkgLyAxODA7XHJcblx0bG9uMiA9IGxvbjIgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdGxhdDEgPSBsYXQxICogTWF0aC5QSSAvIDE4MDtcclxuXHRsYXQyID0gbGF0MiAqIE1hdGguUEkgLyAxODA7XHJcblx0dmFyIHkgPSBNYXRoLnNpbihsb24yIC0gbG9uMSkgKiBNYXRoLmNvcyhsYXQyKTtcclxuXHR2YXIgeCA9IE1hdGguY29zKGxhdDEpICogTWF0aC5zaW4obGF0MikgLSBNYXRoLnNpbihsYXQxKSAqIE1hdGguY29zKGxhdDIpXHJcblx0XHRcdCogTWF0aC5jb3MobG9uMiAtIGxvbjEpO1xyXG5cdHZhciBicm5nID0gTWF0aC5hdGFuMih5LCB4KTtcclxuXHRyZXR1cm4gYnJuZyAvIE1hdGguUEkgKiAxODA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3RhbmNlKGxvbjEsIGxhdDEsIGxvbjIsIGxhdDIpIHtcclxuXHRSID0gNjM3Mi44O1xyXG5cdGxhdDEgPSBsYXQxICogTWF0aC5QSSAvIDE4MDtcclxuXHRsYXQyID0gbGF0MiAqIE1hdGguUEkgLyAxODA7XHJcblx0dmFyIGRlbHRhbGF0ID0gbGF0MiAtIGxhdDE7XHJcblx0dmFyIGRlbHRhbG9uID0gKGxvbjIgLSBsb24xKSAqIE1hdGguUEkgLyAxODA7XHJcblx0dmFyIGEgPSBNYXRoLnNpbihkZWx0YWxhdCAvIDIpICogTWF0aC5zaW4oZGVsdGFsYXQgLyAyKSArIE1hdGguY29zKGxhdDEpXHJcblx0XHRcdCogTWF0aC5jb3MobGF0MikgKiBNYXRoLnNpbihkZWx0YWxvbiAvIDIpICogTWF0aC5zaW4oZGVsdGFsb24gLyAyKTtcclxuXHR2YXIgYyA9IDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KGEpKTtcclxuXHRyZXR1cm4gUiAqIGM7XHJcbn1cclxuXHJcbi8vIGNsZWFuIHBsYW5lIGRlbGV0aW9uXHJcbmZ1bmN0aW9uIGRlbGV0ZVBsYW5lKGlwKSB7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQucmVtb3ZlTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5pbmZvV2luZG93TGlzdGVuZXIpO1xyXG5cdHBsYW5lTGlzdFtpcF0udHJhY2Uuc2V0TWFwKG51bGwpO1xyXG5cdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldE1hcChudWxsKTtcclxuXHRkZWxldGUgcGxhbmVMaXN0W2lwXTtcclxufVxyXG5cclxuLy8gYWxlcnQoKSBlcXVpdmFsZW50XHJcbmZ1bmN0aW9uIHNob3dFcnJvcih0ZXh0KSB7XHJcblx0JCgnI2Vycm9yQm94JykudGV4dCh0ZXh0KTtcclxuXHQkKCcjZXJyb3JCb3gnKS5mYWRlSW4oKS5kZWxheSgzNTAwKS5mYWRlT3V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRDb2xvcigpIHtcclxuXHRpZiAoY29sb3JzW2NvbG9yX2luZGV4XSAhPSBudWxsKSB7XHJcblx0XHR2YXIgY29sb3IgPSBjb2xvcnNbY29sb3JfaW5kZXhdO1xyXG5cdFx0Y29sb3JfaW5kZXgrKztcclxuXHRcdHJldHVybiBjb2xvcjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJObyBtb3JlIGNvbG9yc1wiKTtcclxuXHRcdHJldHVybiBcIiNhYWFhYWFcIjtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNoYXNlQWlycGxhbmUoKSB7XHJcblx0aWYgKCBjaGFzZUFpcnBsYW5lICkge1xyXG5cdFx0JCgnI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcjZm9sbG93VGhlUGxhbmUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0fVxyXG5cdGNoYXNlQWlycGxhbmUgPSAhY2hhc2VBaXJwbGFuZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRmxpZ2h0UGFuZWwoKSB7XHJcblx0aWYgKCQoJyNwYW5lbC1mcCcpLmlzKFwiOmhpZGRlblwiKSkge1xyXG5cdFx0c2hvd0ZsaWdodFBhbmVsKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGhpZGVGbGlnaHRQYW5lbCgpO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBoaWRlRmxpZ2h0UGFuZWwoKSB7XHJcblx0ZG9jdW1lbnQuY29va2llPSQoJyNib3hGbGlnaHRQbGFuJykudmFsKCk7XHJcblx0Y29uc29sZS5sb2coXCIoc2F2aW5nKSBwbGFuU2F2ZWQ9XCIgKyBkb2N1bWVudC5jb29raWUpO1xyXG5cdCQoJyNwYW5lbC1mcCcpLmhpZGUoNTAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1oZWxwJykuaGlkZSgzMDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWluZm8nKS5oaWRlKDMwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4tYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGbGlnaHRQYW5lbCgpIHtcclxuXHR2YXIgcGxhblNhdmVkID0gZG9jdW1lbnQuY29va2llO1xyXG5cdGNvbnNvbGUubG9nKFwicGxhblNhdmVkPVwiICsgZG9jdW1lbnQuY29va2llKTtcclxuXHRpZiAoIHBsYW5TYXZlZCAhPSBcIlwiICkge1xyXG5cdFx0JCgnI2JveEZsaWdodFBsYW4nKS52YWwocGxhblNhdmVkKTtcclxuXHR9XHJcblx0JCgnI3BhbmVsLWZwJykuc2hvdyg1MDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWhlbHAnKS5zaG93KDMwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4taW5mbycpLnNob3coMzAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcclxuXHQkKCcjYm94RmxpZ2h0UGxhbicpLmZvY3VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVOYXZhaWRzKCkge1xyXG5cdCQoJyNuYXZhaWRzLWJ1dHRvbicpLmh0bWwoJ1Nob3cgbmF2YWlkcyAoTiknKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soXHJcblx0XHRcdHNob3dOYXZhaWRzKTtcclxuXHRuYXZNYXAuc2V0T3BhY2l0eSgwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd05hdmFpZHMoKSB7XHJcblx0JCgnI25hdmFpZHMtYnV0dG9uJykuaHRtbCgnSGlkZSBuYXZhaWRzIChOKScpLnVuYmluZCgnY2xpY2snKS5jbGljayhcclxuXHRcdFx0aGlkZU5hdmFpZHMpO1xyXG5cdG5hdk1hcC5zZXRPcGFjaXR5KDEpO1xyXG59XHJcblxyXG52YXIgdmlzaWJsZUxhYmVsUm91dGUgPSB0cnVlO1xyXG5mdW5jdGlvbiB0b29nbGVMYWJlbFJvdXRlKCkge1xyXG5cdHZpc2libGVMYWJlbFJvdXRlID0gIXZpc2libGVMYWJlbFJvdXRlO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vyc0xhYmVsUm91dGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdCBtYXJrZXJzTGFiZWxSb3V0ZVtpXS5zZXRWaXNpYmxlKHZpc2libGVMYWJlbFJvdXRlKTtcclxuXHR9XHJcblx0aWYgKCB2aXNpYmxlTGFiZWxSb3V0ZSApIHtcclxuXHRcdCQoJyNsYWJlbFJvdXRlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcjbGFiZWxSb3V0ZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciB2aXNpYmxlV2F5cG9pbnQgPSB0cnVlO1xyXG5mdW5jdGlvbiB0b29nbGVMYWJlbFdheXBvaW50KCkge1xyXG5cdHZpc2libGVXYXlwb2ludCA9ICF2aXNpYmxlV2F5cG9pbnQ7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzV2F5cG9pbnQubGVuZ3RoOyBpKyspIHtcclxuXHRcdG1hcmtlcnNXYXlwb2ludFtpXS5zZXRWaXNpYmxlKHZpc2libGVXYXlwb2ludCk7XHJcblx0fVxyXG5cdGlmICggdmlzaWJsZVdheXBvaW50ICkge1xyXG5cdFx0JCgnI2xhYmVsV2F5cG9pbnQtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNsYWJlbFdheXBvaW50LWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gcmVhZHkgd2hlbiB5b3UgYXJlIVxyXG5nb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XHJcbi8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhvc2UgZnVuY3Rpb25zIHZpc2libGUgb3V0c2lkZSB0aGUgSlMgZmlsZSB3aGVuIHVzaW5nIHRoZSBXZWJQYWNrIGJ1bmRsZSB0b29sIHRvIHJ1biB0aGUgc29sdXRpb25cclxud2luZG93LnNob3dOYXZhaWRzICAgICAgICAgPSBzaG93TmF2YWlkcztcclxud2luZG93LnRvZ2dsZUZsaWdodFBhbmVsICAgPSB0b2dnbGVGbGlnaHRQYW5lbDtcclxud2luZG93LnRvZ2dsZUNoYXNlQWlycGxhbmUgPSB0b2dnbGVDaGFzZUFpcnBsYW5lO1xyXG53aW5kb3cudG9vZ2xlTGFiZWxSb3V0ZSAgICA9IHRvb2dsZUxhYmVsUm91dGU7XHJcbndpbmRvdy50b29nbGVMYWJlbFdheXBvaW50ID0gdG9vZ2xlTGFiZWxXYXlwb2ludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=