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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_map_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_map_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_map_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_map_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_map_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_map_js__);

//import './js/numeral.min.js';
//import './js/markerwithlabel.js';
//import './js/jquery-blink.js';


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "html, body, #map-canvas {\r\n\theight: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n#panel-fp {\r\n\tposition: absolute;\r\n\ttop: 60px;\r\n\tleft: 90px;\r\n\tz-index: 5;\r\n\tpadding: 5px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 2px solid #595959;\r\n\tbackground-color: #50000E;\r\n\tcolor: #fff;\r\n\twidth: 600px;\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#errorBox {\r\n\tposition: absolute;\r\n\ttop: 90%;\r\n\tleft: 2%;\r\n\tz-index: 5;\r\n\tpadding: 5px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 2px solid #595959;\r\n\tbackground-color: #50000E;\r\n\tcolor: #fff;\r\n\twidth: 20%;\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#boxFlightPlan {\r\n\t text-transform: uppercase;\r\n\t font-family: Verdana, Arial, sans-serif;\r\n\t font-size: 14px;\r\n\t font-weight: bold;\r\n\t overflow: auto;\r\n\t resize: none;\r\n} \r\n#flightplan-help {\r\n\tz-index: 1000;\r\n\tposition: absolute;\r\n\ttop: 190px;\r\n\tleft: 90px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tborder: 1px solid #000;\r\n\tfont-size: 11px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0, 0, 0, 0.55);\r\n\tcolor: #fff;\r\n\tborder-radius: 2px;\r\n\tpadding: 10px;\r\n\tdisplay: none;\r\n\twidth: 130px;\r\n}\r\n#flightplan-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 90px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n}\r\n#plane-panel {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 190px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tborder-radius: 2px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n}\r\n#followThePlane-button {\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#flightplan-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#flightplan-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#followThePlane-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#followThePlane-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n.labelsAirport {\r\n\tcolor: darkblue;\r\n\tbackground-color: white;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 38px;\r\n\tborder: 2px solid black;\r\n\twhite-space: nowrap;\r\n}\r\n.labelsWaypoint {\r\n\tcolor: black;\r\n\tbackground-color: lightgray;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 11px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 50px;\r\n\tborder: 2px solid black;\r\n\twhite-space: nowrap;\r\n}\r\n.labelsInfoRoute {\r\n\tcolor: black;\r\n\tbackground-color: white;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\ttext-align: center;\r\n\tmin-width: 70px;\r\n    display: inline-block;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\tborder: 2px solid blue;\r\n\twhite-space: nowrap;\r\n\tborder-radius: 23px;\r\n}\r\n.runwayTable {\r\n\tfont-family: \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n}\r\n.runwayInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.vorTable {\r\n\tfont-family: \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n}\r\n.vorInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.routeInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.planeDataInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.planeDataInfoRed {\r\n\tcolor: red;\r\n\tfont-weight: bold;\r\n}\r\n.rotate {\r\n     -webkit-transform : rotate(66deg); \r\n    -moz-transform : rotate(66deg); \r\n    -ms-transform : rotate(66deg); \r\n    -o-transform : rotate(66deg); \r\n    transform : rotate(66deg); \r\n}\r\n#flightplan-info {\r\n    z-index: 9999;\r\n    position: absolute;\r\n    top: 190px;\r\n    left: 253px;\r\n    font-family: Verdana, Arial, sans-serif;\r\n    text-decoration: none;\r\n    box-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n    border: 1px solid #000;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    color: yellow;\r\n    border-radius: 2px;\r\n    padding: 10px;\r\n    display: none;\r\n    width: 430px;\r\n}\r\n.flightPlan-info-label {\r\n    font-family: monospace;\r\n    font-size: 13px;\r\n    color: white;\r\n}\r\n#flightplan-loading {\r\n\tposition: absolute; \r\n\ttop: 73px; \r\n\tleft: 10px; \r\n\tz-index: 9999;\r\n\tcolor: #454545;\r\n\tfont-family: monospace;\r\n\tfont-size:15px;\r\n\tfont-weight: bold;\r\n}\r\n#labelRoute-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 300px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tcolor: #fff;\r\n}\r\n#labelRoute-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#labelRoute-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#labelWaypoint-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 390px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tcolor: #fff;\r\n}\r\n#labelWaypoint-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#labelWaypoint-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}", ""]);

// exports


/***/ }),
/* 13 */
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
/* 14 */
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

var	fixUrls = __webpack_require__(15);

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

// Author Ualter Jr.

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
var showHideAirPlaneRoutes = false;

$.ajaxSetup({
	cache : false
});

function initialize() {

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	google.maps.event.addListener(map, 'dragstart', function() {
		$('#nofocus').click();
	});

	$('body').keydown(function(e) {
		// Character: '
		if (e.keyCode == 192) {
			e.preventDefault();
			toggleFlightPanel();
		}
		// Pause Key
		if (e.keyCode == 19) {
			$.getJSON("pause").done(function(data){}).error(function() {showError('Not able to Pause X-Plane.')});
		}
		// Character: C 
		// Restart AirPlane Routes
		if (e.keyCode == 67) {
			// 
			var newTraceRoute = new google.maps.Polyline(polyOptions);
			newTraceRoute.setMap(map);
			for (ipPlane in planeList) {
				planeList[ipPlane].trace.setMap(null);
				planeList[ipPlane].trace = newTraceRoute;
			}
		}
		// Character: H
		// Hide/Show AirPlane Routes
		if (e.keyCode == 72) {
			for (ipPlane in planeList) {
				if ( !showHideAirPlaneRoutes ) {
					planeList[ipPlane].trace.setMap(null);
				} else {
					planeList[ipPlane].trace.setMap(map);
				}
			}
			showHideAirPlaneRoutes = !showHideAirPlaneRoutes;
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
				.error(function() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTJmNWIwYmZhYTAxOTMwYTJhMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWZyb250LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcz81ODdhIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFF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QUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzVXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkE7O0FBRUEsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG9CQUFvQix3Q0FBd0M7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxvSTtBQUNBO0FBQ0EsZ0Q7QUFDQTtBQUNBLE1BQU07QUFDTixFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNB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ZmlsZSI6ImZyb250LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MmY1YjBiZmFhMDE5MzBhMmEyZCIsImltcG9ydCAnLi9jc3MvbWFwLmNzcyc7XHJcbi8vaW1wb3J0ICcuL2pzL251bWVyYWwubWluLmpzJztcclxuLy9pbXBvcnQgJy4vanMvbWFya2Vyd2l0aGxhYmVsLmpzJztcclxuLy9pbXBvcnQgJy4vanMvanF1ZXJ5LWJsaW5rLmpzJztcclxuaW1wb3J0ICcuL2pzL21hcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtZnJvbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hcC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvbWFwLmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgI21hcC1jYW52YXMge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFuZWwtZnAge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDYwcHg7XFxyXFxuXFx0bGVmdDogOTBweDtcXHJcXG5cXHR6LWluZGV4OiA1O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjNTk1OTU5O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1MDAwMEU7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0d2lkdGg6IDYwMHB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JCb3gge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDkwJTtcXHJcXG5cXHRsZWZ0OiAyJTtcXHJcXG5cXHR6LWluZGV4OiA1O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjNTk1OTU5O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1MDAwMEU7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0d2lkdGg6IDIwJTtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2JveEZsaWdodFBsYW4ge1xcclxcblxcdCB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdCBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0IGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHQgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0IG92ZXJmbG93OiBhdXRvO1xcclxcblxcdCByZXNpemU6IG5vbmU7XFxyXFxufSBcXHJcXG4jZmxpZ2h0cGxhbi1oZWxwIHtcXHJcXG5cXHR6LWluZGV4OiAxMDAwO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDE5MHB4O1xcclxcblxcdGxlZnQ6IDkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTFweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMjhweDtcXHJcXG5cXHRsZWZ0OiA5MHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG59XFxyXFxuI3BsYW5lLXBhbmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDE5MHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbiNmb2xsb3dUaGVQbGFuZS1idXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbi5kb3duIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4ubGFiZWxzQWlycG9ydCB7XFxyXFxuXFx0Y29sb3I6IGRhcmtibHVlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMzhweDtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG4ubGFiZWxzV2F5cG9pbnQge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDExcHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiA1MHB4O1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi5sYWJlbHNJbmZvUm91dGUge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRtaW4td2lkdGg6IDcwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjNweDtcXHJcXG59XFxyXFxuLnJ1bndheVRhYmxlIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbi5ydW53YXlJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnZvclRhYmxlIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbi52b3JJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnJvdXRlSW5mbyB7XFxyXFxuXFx0Y29sb3I6IGJsdWU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wbGFuZURhdGFJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBsYW5lRGF0YUluZm9SZWQge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5yb3RhdGUge1xcclxcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG4gICAgLW1vei10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG4gICAgLW1zLXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICAtby10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG4gICAgdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWluZm8ge1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTkwcHg7XFxyXFxuICAgIGxlZnQ6IDI1M3B4O1xcclxcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB3aWR0aDogNDMwcHg7XFxyXFxufVxcclxcbi5mbGlnaHRQbGFuLWluZm8tbGFiZWwge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tbG9hZGluZyB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlOyBcXHJcXG5cXHR0b3A6IDczcHg7IFxcclxcblxcdGxlZnQ6IDEwcHg7IFxcclxcblxcdHotaW5kZXg6IDk5OTk7XFxyXFxuXFx0Y29sb3I6ICM0NTQ1NDU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG5cXHRmb250LXNpemU6MTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuI2xhYmVsUm91dGUtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDMwMHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsUm91dGUtYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNsYWJlbFJvdXRlLWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2xhYmVsV2F5cG9pbnQtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDM5MHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsV2F5cG9pbnQtYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNsYWJlbFdheXBvaW50LWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jc3MvbWFwLmNzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXHJcblxyXG5jb25zdCBwZXJpb2QgPSAxMDAwOyAvLyB0aW1lIGJldHdlZW4gcmVmcmVzaGVzIGluIG1zXHJcblxyXG52YXIgcG9zQ2xpZW50ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0MS41NDYxOTksIDIuMTA4NjIzKVxyXG5pZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBcdHBvc0NsaWVudCA9IHtcclxuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcbnZhciBtYXBPcHRpb25zID0ge1xyXG5cdGNlbnRlciA6IHtcclxuXHRcdGxhdCA6IDAsXHJcblx0XHRsbmcgOiAwXHJcblx0fSxcclxuXHR6b29tIDogOSxcclxuXHRtYXBUeXBlSWQgOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuVEVSUkFJTixcclxuXHRjZW50ZXIgOiBwb3NDbGllbnRcclxufTtcclxudmFyIG1hcDtcclxudmFyIHBvbHlPcHRpb25zID0ge1xyXG5cdGdlb2Rlc2ljIDogdHJ1ZSxcclxuXHRzdHJva2VDb2xvciA6ICcjMDAwMDAwJyxcclxuXHRzdHJva2VPcGFjaXR5IDogMC44LFxyXG5cdHN0cm9rZVdlaWdodCA6IDNcclxufTtcclxudmFyIG1hcmtlck9wdGlvbnMgPSB7XHJcblx0aWNvbiA6IHtcclxuXHRcdHBhdGggOiBcIk0zNjIuOTg1LDQzMC43MjRsLTEwLjI0OCw1MS4yMzRsNjIuMzMyLDU3Ljk2OWwtMy4yOTMsMjYuMTQ1IGwtNzEuMzQ1LTIzLjU5OWwtMi4wMDEsMTMuMDY5bC0yLjA1Ny0xMy41MjlsLTcxLjI3OCxcIlxyXG5cdFx0XHRcdCsgXCIyMi45MjhsLTUuNzYyLTIzLjk4NGw2NC4wOTctNTkuMjcxbC04LjkxMy01MS4zNTlsMC44NTgtMTE0LjQzIGwtMjEuOTQ1LTExLjMzOGwtMTg5LjM1OCxcIlxyXG5cdFx0XHRcdCsgXCJcIlxyXG5cdFx0XHRcdCsgXCI4OC43NmwtMS4xOC0zMi4yNjJsMjEzLjM0NC0xODAuMDhsMC44NzUtMTA3LjQzNmw3Ljk3My0zMi4wMDVsNy42NDItMTIuMDU0bDcuMzc3LTMuOTU4bDkuMjM4LFwiXHJcblx0XHRcdFx0KyBcIjMuNjUgbDYuMzY3LDE0LjkyNWw3LjM2OSwzMC4zNjN2MTA2LjM3NWwyMTEuNTkyLDE4Mi4wODJsLTEuNDk2LDMyLjI0N2wtMTg4LjQ3OS05MC42MWwtMjEuNjE2LDEwLjA4N2wtMC4wOTQsMTE1LjY4NFwiLFxyXG5cdFx0c2NhbGUgOiAwLjA4LFxyXG5cdFx0ZmlsbE9wYWNpdHkgOiAxLFxyXG5cdFx0YW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDM0MCwgMzQwKSxcclxuXHRcdHN0cm9rZVdlaWdodCA6IDAuNVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBpY29uQWlycG9ydCA9IHtcclxuXHQvL3VybCA6ICdhaXJwb3J0LnBuZycsXHJcblx0dXJsIDogJy4vaW1hZ2VzL2FpcnBvcnQucG5nJyxcclxuXHRzaXplIDogbmV3IGdvb2dsZS5tYXBzLlNpemUoMzAsIDUwKSxcclxuXHRvcmlnaW4gOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcblx0YW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDE1LCA1MClcclxufTtcclxuXHJcbnZhciBpY29uV2F5cG9pbnQgPSB7XHJcblx0cGF0aCA6IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLFxyXG5cdHNjYWxlIDogNixcclxuXHRzdHJva2VDb2xvciA6ICcjMDAwMEZGJyxcclxuXHRzdHJva2VPcGFjaXR5IDogMSxcclxuXHRzdHJva2VXZWlnaHQgOiAzLFxyXG5cdGZpbGxDb2xvciA6ICd3aGl0ZScsXHJcblx0ZmlsbE9wYWNpdHkgOiAxLFxyXG59O1xyXG5cclxudmFyIGljb25MYWJlbFJvdXRlID0ge1xyXG5cdHBhdGggOiBcIm05Niw0NFwiLFxyXG5cdHNjYWxlIDogMSxcclxuXHRzdHJva2VDb2xvciA6ICcjRkZGRkZGJyxcclxuXHRzdHJva2VPcGFjaXR5IDogMSxcclxuXHRzdHJva2VXZWlnaHQgOiAxLFxyXG5cdGZpbGxDb2xvciA6ICd3aGl0ZScsXHJcblx0ZmlsbE9wYWNpdHkgOiAxMDAsXHJcbn07XHJcblxyXG52YXIgaWNvblZPUiA9IHtcclxuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXHJcblx0c2NhbGUgOiA3LFxyXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwMDAnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDMsXHJcblx0ZmlsbENvbG9yIDogJ3llbGxvdycsXHJcblx0ZmlsbE9wYWNpdHkgOiAxLFxyXG59O1xyXG5cclxudmFyIGljb25OREIgPSB7XHJcblx0cGF0aCA6IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLFxyXG5cdHNjYWxlIDogNyxcclxuXHRzdHJva2VDb2xvciA6ICcjMjYyNjI2JyxcclxuXHRzdHJva2VPcGFjaXR5IDogMSxcclxuXHRzdHJva2VXZWlnaHQgOiAzLFxyXG5cdGZpbGxDb2xvciA6ICcjRkZEMDVDJyxcclxuXHRmaWxsT3BhY2l0eSA6IDEsXHJcbn07XHJcblxyXG52YXIgcGxhbmVMaXN0ID0ge307XHJcbnZhciByZWZyZXNoQ29udHJvbFBhbmVsID0gZmFsc2U7XHJcbnZhciBwbGFuZVRvRm9sbG93ID0gbnVsbDtcclxudmFyIGNvbG9ycyA9IFsgXCJibHVlXCIsXCIjMjY3NjRFXCIsIFwiI0YwODUyNlwiLCBcIiM5Q0ZGNTRcIiwgXCIjNzIxQjQ5XCIsIFwiI0E3RDhGOFwiLFwiIzJBRkRCQ1wiLCBcIiNGQkU4NzBcIiwgXCIjNzExMzAyXCIsIFwiIzI1NzJDMlwiLCBcIiMxQzI3MURcIiwgXCIjNjMyRTg1XCIsXHJcblx0XHRcIiMxRTVGN0FcIiwgXCIjRDhCMkY1XCIsIFwiI0QzMDdBMlwiLCBcIiNGMzkxQjVcIiwgXCIjRjE4MEY1XCIsIFwiIzNBMUUyRVwiLFwiI0FFNzcwN1wiLCBcIiMzRTNEMEVcIiwgXCIjNkFCMDZFXCIgXTtcclxudmFyIGNvbG9yX2luZGV4ID0gMDtcclxudmFyIG5hdk1hcDtcclxudmFyIGZsaWdodFBsYW4gPSB7fTtcclxudmFyIGZsaWdodFBhdGg7IC8vIGFuIG9iamVjdCBnb29nbGUubWFwcy5Qb2x5bGluZSAtIHJlcHJlc2VudGluZyB0aGUgRmxpZ2h0IFBsYW5cclxudmFyIG1hcmtlcnMgPSBbXTtcclxudmFyIHJvdXRlTGFiZWxzT2ZmU2V0ID0gW107XHJcbnZhciBtYXJrZXJzTGFiZWxSb3V0ZSA9IFtdO1xyXG52YXIgbWFya2Vyc1dheXBvaW50ICAgPSBbXTtcclxudmFyIGVsSW5mb0JveFBsYW5lO1xyXG52YXIgY2hhc2VBaXJwbGFuZSA9IGZhbHNlO1xyXG52YXIgc2hvd0hpZGVBaXJQbGFuZVJvdXRlcyA9IGZhbHNlO1xyXG5cclxuJC5hamF4U2V0dXAoe1xyXG5cdGNhY2hlIDogZmFsc2VcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cclxuXHRtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY2FudmFzJyksIG1hcE9wdGlvbnMpO1xyXG5cclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdkcmFnc3RhcnQnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyNub2ZvY3VzJykuY2xpY2soKTtcclxuXHR9KTtcclxuXHJcblx0JCgnYm9keScpLmtleWRvd24oZnVuY3Rpb24oZSkge1xyXG5cdFx0Ly8gQ2hhcmFjdGVyOiAnXHJcblx0XHRpZiAoZS5rZXlDb2RlID09IDE5Mikge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRvZ2dsZUZsaWdodFBhbmVsKCk7XHJcblx0XHR9XHJcblx0XHQvLyBQYXVzZSBLZXlcclxuXHRcdGlmIChlLmtleUNvZGUgPT0gMTkpIHtcclxuXHRcdFx0JC5nZXRKU09OKFwicGF1c2VcIikuZG9uZShmdW5jdGlvbihkYXRhKXt9KS5lcnJvcihmdW5jdGlvbigpIHtzaG93RXJyb3IoJ05vdCBhYmxlIHRvIFBhdXNlIFgtUGxhbmUuJyl9KTtcclxuXHRcdH1cclxuXHRcdC8vIENoYXJhY3RlcjogQyBcclxuXHRcdC8vIFJlc3RhcnQgQWlyUGxhbmUgUm91dGVzXHJcblx0XHRpZiAoZS5rZXlDb2RlID09IDY3KSB7XHJcblx0XHRcdC8vIFxyXG5cdFx0XHR2YXIgbmV3VHJhY2VSb3V0ZSA9IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZShwb2x5T3B0aW9ucyk7XHJcblx0XHRcdG5ld1RyYWNlUm91dGUuc2V0TWFwKG1hcCk7XHJcblx0XHRcdGZvciAoaXBQbGFuZSBpbiBwbGFuZUxpc3QpIHtcclxuXHRcdFx0XHRwbGFuZUxpc3RbaXBQbGFuZV0udHJhY2Uuc2V0TWFwKG51bGwpO1xyXG5cdFx0XHRcdHBsYW5lTGlzdFtpcFBsYW5lXS50cmFjZSA9IG5ld1RyYWNlUm91dGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIENoYXJhY3RlcjogSFxyXG5cdFx0Ly8gSGlkZS9TaG93IEFpclBsYW5lIFJvdXRlc1xyXG5cdFx0aWYgKGUua2V5Q29kZSA9PSA3Mikge1xyXG5cdFx0XHRmb3IgKGlwUGxhbmUgaW4gcGxhbmVMaXN0KSB7XHJcblx0XHRcdFx0aWYgKCAhc2hvd0hpZGVBaXJQbGFuZVJvdXRlcyApIHtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcFBsYW5lXS50cmFjZS5zZXRNYXAobnVsbCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcFBsYW5lXS50cmFjZS5zZXRNYXAobWFwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0c2hvd0hpZGVBaXJQbGFuZVJvdXRlcyA9ICFzaG93SGlkZUFpclBsYW5lUm91dGVzO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdCBtYXAuYWRkTGlzdGVuZXIoJ3pvb21fY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdCAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHQgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3V0ZUxhYmVsc09mZlNldC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICBcdCAgIHZhciBkaXN0TGFiZWxSb3V0ZSA9IDI0MDAwO1xyXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxNiApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gNTA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDE1ICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDEyICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDAwO1xyXG5cdCAgICBcdCAgIH0gZWxzZVxyXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxMCApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gMTIwMDA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDggKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDE2MDAwO1xyXG5cdCAgICBcdCAgIH1cclxuXHQgICAgXHQgICB2YXIgaGRnTGFiZWwgPSBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcocm91dGVMYWJlbHNPZmZTZXRbaV0ubGF0bG5nLCByb3V0ZUxhYmVsc09mZlNldFtpXS5uZXh0TGF0TG5nKTsgXHJcblx0ICAgIFx0ICAgdmFyIG9mZnNldCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KHJvdXRlTGFiZWxzT2ZmU2V0W2ldLmxhdGxuZywgZGlzdExhYmVsUm91dGUsIGhkZ0xhYmVsLCA2MzcxMDAwKTtcclxuXHQgICAgXHQgICBtYXJrZXJzTGFiZWxSb3V0ZVtpXS5wb3NpdGlvbiA9IG9mZnNldDsgXHJcbiAgICBcdCAgIH1cclxuXHQgICAgfSwxKTtcclxuXHR9KTtcclxuXHQgXHJcblx0dXBkYXRlUG9zaXRpb24oKTtcclxuXHRzZXRJbnRlcnZhbCh1cGRhdGVQb3NpdGlvbiwgcGVyaW9kKTtcclxuXHRzZXRJbnRlcnZhbChjaGVja0ZsaWdodFBsYW5Cb3hBbmRMb2FkLCAyMDAwKTtcclxuXHJcblx0Ly8gbmF2IGRhdGEgb3ZlcmxheXNcclxuXHQvKm5hdk1hcCA9IG5ldyBnb29nbGUubWFwcy5JbWFnZU1hcFR5cGUoe1xyXG5cdFx0Z2V0VGlsZVVybCA6IGZ1bmN0aW9uKGNvb3JkLCB6b29tKSB7XHJcblx0XHRcdHRpbGVTaXplID0gMjU2IC8gTWF0aC5wb3coMiwgem9vbSk7XHJcblx0XHRcdHdlc3QgPSBjb29yZC54ICogdGlsZVNpemU7XHJcblx0XHRcdGVhc3QgPSB3ZXN0ICsgdGlsZVNpemU7XHJcblx0XHRcdG5vcnRoID0gY29vcmQueSAqIHRpbGVTaXplO1xyXG5cdFx0XHRzb3V0aCA9IG5vcnRoICsgdGlsZVNpemU7XHJcblxyXG5cdFx0XHRub3J0aEVhc3QgPSBtYXAuZ2V0UHJvamVjdGlvbigpLmZyb21Qb2ludFRvTGF0TG5nKFxyXG5cdFx0XHRcdFx0bmV3IGdvb2dsZS5tYXBzLlBvaW50KGVhc3QsIG5vcnRoKSk7XHJcblx0XHRcdHNvdXRoV2VzdCA9IG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbVBvaW50VG9MYXRMbmcoXHJcblx0XHRcdFx0XHRuZXcgZ29vZ2xlLm1hcHMuUG9pbnQod2VzdCwgc291dGgpKTtcclxuXHJcblx0XHRcdC8vIGh0dHA6Ly94LXBsYW5lLW1hcC5mb3VjLm5ldC9uYXYucGhwP25vcnRoPS0yNC41MjcxJTIwJnNvdXRoPS0yNS43OTk5JTIwJmVhc3Q9LTQ2LjQwNjMlMjAmd2VzdD0tNDcuODEyNVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygpO1xyXG5cclxuXHRcdFx0cmV0dXJuIFsgJ2h0dHA6Ly94LXBsYW5lLW1hcC5mb3VjLm5ldC9uYXYucGhwP25vcnRoPScsXHJcblx0XHRcdFx0XHRub3J0aEVhc3QubGF0KCkudG9GaXhlZCg0KSwgJyZzb3V0aD0nLFxyXG5cdFx0XHRcdFx0c291dGhXZXN0LmxhdCgpLnRvRml4ZWQoNCksICcmZWFzdD0nLFxyXG5cdFx0XHRcdFx0bm9ydGhFYXN0LmxuZygpLnRvRml4ZWQoNCksICcmd2VzdD0nLFxyXG5cdFx0XHRcdFx0c291dGhXZXN0LmxuZygpLnRvRml4ZWQoNCkgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqICwgJyZ0eXBlPUFQVCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IF0uam9pbignJyk7XHJcblx0XHR9LFxyXG5cdFx0dGlsZVNpemUgOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTYsIDI1NiksXHJcblx0XHRtaW5ab29tIDogNixcclxuXHRcdG1heFpvb20gOiAxMlxyXG5cdH0pO1xyXG5cclxuXHRtYXAub3ZlcmxheU1hcFR5cGVzLnB1c2gobmF2TWFwKTtcclxuXHRuYXZNYXAuc2V0T3BhY2l0eSgwKTsqL1xyXG59XHJcblxyXG52YXIgZmxpZ2h0cGxhblRleHQgPSAnbm9uZSc7XHJcbmZ1bmN0aW9uIGNoZWNrRmxpZ2h0UGxhbkJveEFuZExvYWQoKSB7XHJcblx0aWYgKCQoJyNwYW5lbC1mcCcpLmlzKFwiOmhpZGRlblwiKSA9PSBmYWxzZSkge1xyXG5cdFx0dmFyIHRleHQgPSAkKCd0ZXh0YXJlYSNib3hGbGlnaHRQbGFuJykudmFsKCk7XHJcblx0XHRpZiAodGV4dCAhPSBmbGlnaHRwbGFuVGV4dCkge1xyXG5cdFx0XHRmbGlnaHRwbGFuVGV4dCA9IHRleHQ7XHJcblx0XHRcdHZhciBwYXJhbXMgPSB7fTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChmbGlnaHRQYXRoICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGZsaWdodFBhdGguc2V0TWFwKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNsZWFyTWFya2VycygpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCBmbGlnaHRwbGFuVGV4dC5sZW5ndGggPiA4ICkge1xyXG5cdFx0XHRcdHZhciBncm91cHMgPSBmbGlnaHRwbGFuVGV4dC50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcclxuXHRcdFx0XHR2YXIgd2F5cG9pbnRzID0gXCJcIjtcclxuXHRcdFx0XHRpZiAoIGdyb3Vwcy5sZW5ndGggPiAxICkge1xyXG5cdFx0XHRcdCAgICBmb3IodmFyIGkgPSAxOyBpIDwgKGdyb3Vwcy5sZW5ndGgtMSk7IGkrKykge1xyXG5cdFx0XHRcdFx0ICAgd2F5cG9pbnRzICs9IGdyb3Vwc1tpXTtcclxuXHRcdFx0XHQgICAgICAgaWYgKHdheXBvaW50cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0ICAgICAgICBcdHdheXBvaW50cyArPSBcIitcIjtcclxuXHRcdFx0XHQgICAgXHR9XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cGFyYW1zID0ge1xyXG5cdFx0XHRcdCAgICBkZXBhcnR1cmUgOiBncm91cHNbMF0sXHJcblx0XHRcdFx0ICAgIHdheXBvaW50cyA6IHdheXBvaW50cyxcclxuXHRcdFx0XHQgICAgZGVzdGluYXRpb24gOiBncm91cHNbZ3JvdXBzLmxlbmd0aCAtIDFdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZSh0cnVlKTtcclxuXHRcdFx0JC5nZXRKU09OKFwiZmxpZ2h0cGxhblwiLHBhcmFtc1xyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQuZG9uZShmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRzaG93RXJyb3IoXCJFcnJvciBsb2FkaW5nIEZsaWdodCBQbGFuLiBObyBjb250ZW50IHdhcyByZXR1cm5lZC5cIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbiA9IGRhdGE7XHJcblx0XHRcdFx0XHRcdGxvYWRGbGlnaHRQbGFuKCk7XHJcblx0XHRcdFx0XHRcdGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUoZmFsc2UpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmVycm9yKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0c2hvd0Vycm9yKCdQbGVhc2UgY2hlY2sgdGhlIGNvbm5lY3Rpb24gd2l0aCBodHRwOi8vc2VydmVyOnBvcnQvZmxpZ2h0cGxhbiwgaXMgbm90IHdvcmtpbmcuJylcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUobG9hZGluZykge1xyXG5cdGlmICggbG9hZGluZyApIHtcclxuXHRcdCQoXCIjZmxpZ2h0cGxhbi1sb2FkaW5nXCIpLnNob3coKTtcclxuXHRcdCQoXCIjYm94RmxpZ2h0UGxhblwiKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Z3JheScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKFwiI2ZsaWdodHBsYW4tbG9hZGluZ1wiKS5oaWRlKCk7XHJcblx0XHQkKFwiI2JveEZsaWdodFBsYW5cIikuY3NzKCdjb2xvcicsICdibGFjaycpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZsaWdodFBsYW4oKSB7XHJcblx0Ly8gTG9hZGluZyBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMgdmFyaWFibGVcclxuXHR2YXIgZGVwYXJ0dXJlTGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmbGlnaHRQbGFuLmRlcGFydHVyZS5sYXRpdHVkZSwgZmxpZ2h0UGxhbi5kZXBhcnR1cmUubG9uZ2l0dWRlKTtcclxuXHR2YXIgZGVzdGluYXRpb25MYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4uZGVzdGluYXRpb24ubGF0aXR1ZGUsIGZsaWdodFBsYW4uZGVzdGluYXRpb24ubG9uZ2l0dWRlKTsgXHJcblx0dmFyIGFyckNvb3JkID0gbmV3IEFycmF5KCk7XHJcblx0YXJyQ29vcmRbMF0gPSBkZXBhcnR1cmVMYXRMbmc7XHJcblx0dmFyIHRvdGFsV2F5cG9pbnRzID0gMDtcclxuXHR2YXIgdG90YWxEaXN0YW5jZSA9IDA7XHJcblx0d2hpbGUgKHRvdGFsV2F5cG9pbnRzIDwgZmxpZ2h0UGxhbi53YXlwb2ludHMubGVuZ3RoKSB7XHJcblx0XHRhcnJDb29yZFt0b3RhbFdheXBvaW50cyArIDFdID0gXHJcblx0XHRcdG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXHJcblx0XHRcdFx0XHRmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubGF0aXR1ZGUsZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxvbmdpdHVkZVxyXG5cdFx0XHQpO1xyXG5cdFx0Ly8gTWFyayB0aGUgV2F5cG9pbnRcclxuXHRcdHdheXBvaW50ID0ge1xyXG5cdFx0XHRpZCA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5pZCxcclxuXHRcdFx0bGF0bG5nIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubGF0aXR1ZGUsZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxvbmdpdHVkZSksXHJcblx0XHRcdHR5cGUgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10udHlwZSxcclxuXHRcdFx0ZGVzY3IgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubmFtZSxcclxuXHRcdFx0ZnJlcSA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5mcmVxdWVuY3lcclxuXHRcdH1cclxuXHRcdG1hcmtXYXlwb2ludCh3YXlwb2ludCk7XHJcblxyXG5cdFx0dG90YWxXYXlwb2ludHMrKztcclxuXHR9XHJcblx0YXJyQ29vcmRbdG90YWxXYXlwb2ludHMgKyAxXSA9IGRlc3RpbmF0aW9uTGF0TG5nO1xyXG5cdHZhciBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMgPSBhcnJDb29yZDtcclxuXHJcblx0Ly8gTG9hZGluZyBGbGlnaHQgUGxhbiBQb2x5bGluZSAtIERyYXcgdGhlIGxpbmVcclxuXHRmbGlnaHRQYXRoID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcclxuXHRcdHBhdGggOiBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMsXHJcblx0XHRnZW9kZXNpYyA6IGZhbHNlLFxyXG5cdFx0c3Ryb2tlQ29sb3IgOiAnIzAwMDBGRicsXHJcblx0XHRzdHJva2VPcGFjaXR5IDogMC41LFxyXG5cdFx0c3Ryb2tlV2VpZ2h0IDogNlxyXG5cdH0pO1xyXG5cdGZsaWdodFBhdGguc2V0TWFwKG1hcCk7XHJcblxyXG5cdC8vIE1hcmsgZm9yIHRoZSBBaXJwb3J0IERlcGFydHVyZVxyXG5cdGRlcGFydHVyZSA9IHtcclxuXHRcdGlkIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUuaWNhb0lkLFxyXG5cdFx0bmFtZSA6IGZsaWdodFBsYW4uZGVwYXJ0dXJlLm5hbWUsXHJcblx0XHRsYXRsbmcgOiBkZXBhcnR1cmVMYXRMbmcsXHJcblx0XHRydW53YXlzIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUuYXJyYXlSdW53YXlzXHJcblx0fVxyXG5cdG1hcmtBaXJwb3J0KGRlcGFydHVyZSwnZGVwYXJ0dXJlJyk7XHJcblxyXG5cdC8vIE1hcmsgZm9yIHRoZSBBaXJwb3J0IERlc3RpbmF0aW9uXHJcblx0ZGVzdGluYXRpb24gPSB7XHJcblx0XHRpZCA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24uaWNhb0lkLFxyXG5cdFx0bmFtZSA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24ubmFtZSxcclxuXHRcdGxhdGxuZyA6IGRlc3RpbmF0aW9uTGF0TG5nLFxyXG5cdFx0cnVud2F5cyA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24uYXJyYXlSdW53YXlzXHJcblx0fVxyXG5cdG1hcmtBaXJwb3J0KGRlc3RpbmF0aW9uLCdkZXN0aW5hdGlvbicpO1xyXG5cdFxyXG5cdC8vIFBhbmVsIEluZm8gRmxpZ2h0IFBsYW5cclxuXHQkKFwiI2ZwSW5mby1EZXBhcnR1cmVcIikudGV4dChkZXBhcnR1cmUuaWQgKyAnIC0gJyArIGRlcGFydHVyZS5uYW1lICsgJyBBaXJwb3J0Jyk7XHJcblx0JChcIiNmcEluZm8tRGVzdGluYXRpb25cIikudGV4dChkZXN0aW5hdGlvbi5pZCArICcgLSAnICsgZGVzdGluYXRpb24ubmFtZSArICcgQWlycG9ydCcpO1xyXG5cdFxyXG5cdC8vIE1hcmsgTGFiZWxzIEJlYXJpbmcvRGlzdGFuY2VcclxuXHR2YXIgaW5kZXggPSAwO1xyXG5cdHdoaWxlIChpbmRleCA8IGZsaWdodFBsYW4uaW5mb1JvdXRlLmxlbmd0aCkge1xyXG5cdFx0dG90YWxEaXN0YW5jZSArPSBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2VOTTtcclxuXHRcdGxhYmVsUm91dGUgPSB7XHJcblx0XHRcdGRpc3RhbmNlTk0gOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2VOTSxcclxuXHRcdFx0ZGlzdGFuY2UgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2UsXHJcblx0XHRcdGJlYXJpbmcgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uYmVhcmluZyxcclxuXHRcdFx0YmVhcmluZ0RlZ3JlZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5iZWFyaW5nRGVncmVlLFxyXG5cdFx0XHRsYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxyXG5cdFx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubGF0aXR1ZGUsXHJcblx0XHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5sb25naXR1ZGUpLFxyXG5cdFx0XHRuZXh0TGF0bG5nIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcclxuXHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0TGF0aXR1ZGUsXHJcblx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubmV4dExvbmdpdHVkZSksXHJcblx0XHRcdHJvdGF0ZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5iZWFyaW5nLFxyXG5cdFx0XHRuZXh0UG9pbnQgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubmV4dFBvaW50LFxyXG5cdFx0XHRjdXJyZW50UG9pbnQgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uY3VycmVudFBvaW50LFxyXG5cdFx0XHRjb21wYXNzSGVhZGluZyA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5jb21wYXNzSGVhZGluZ1xyXG5cdFx0fVxyXG5cdFx0bWFya0xhYmVsUm91dGUobGFiZWxSb3V0ZSk7XHJcblx0XHRpbmRleCsrO1xyXG5cdH1cclxuXHJcblx0JChcIiNmcEluZm8tUm91dGVEaXN0YW5jZVwiKVxyXG5cdFx0LnRleHQoXHJcblx0XHRcdG51bWVyYWwodG90YWxEaXN0YW5jZSkuZm9ybWF0KCcwLDAnKSArICdubScgKyAnIC8gJyArXHJcblx0XHRcdG51bWVyYWwoKHRvdGFsRGlzdGFuY2UgKiAxLjg1MikpLmZvcm1hdCgnMCwwJykgKyAna20nXHJcblx0ICAgICAgICApO1xyXG5cdCAgICAgICAgXHJcblx0dmFyIHBhbkZsaWdodFBsYW4gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKGRlcGFydHVyZUxhdExuZywgZGVzdGluYXRpb25MYXRMbmcpO1xyXG5cdG1hcC5maXRCb3VuZHMocGFuRmxpZ2h0UGxhbik7XHJcblx0Ly9tYXAucGFuVG9Cb3VuZHMocGFuRmxpZ2h0UGxhbik7XHJcblx0Ly9tYXAuc2V0Wm9vbSgxMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVNYXJrKG0pIHtcclxuXHRtYXJrZXJzLnB1c2gobSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJNYXJrZXJzKCkge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgbWFya2Vyc1tpXS5zZXRNYXAobnVsbCk7XHJcbiAgfVxyXG4gIHJvdXRlTGFiZWxzT2ZmU2V0ID0gW107XHJcbiAgbWFya2Vyc0xhYmVsUm91dGUgPSBbXTtcclxuICBtYXJrZXJzV2F5cG9pbnQgICA9IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrTGFiZWxSb3V0ZShsYWJlbFJvdXRlKSB7XHJcblx0Ly92YXIgZGlzdExhYmVsID0gbGFiZWxSb3V0ZS5kaXN0YW5jZU5NICogMS44NTI7IC8vIGNvbnZlcnQgbm0gdG8gbWV0ZXJzXHJcblx0Ly92YXIgaGRnTGFiZWwgPSBsYWJlbFJvdXRlLmJlYXJpbmdEZWdyZWUgLSAyMjtcclxuXHQvL3ZhciBkaXN0TGFiZWwgPSAyNDAwMDsgXHJcblx0cm91dGVMYWJlbHNPZmZTZXQucHVzaChcclxuXHRcdHtcclxuXHRcdFx0bGF0bG5nIDogbGFiZWxSb3V0ZS5sYXRsbmcsXHJcblx0XHRcdG5leHRMYXRMbmcgOiBsYWJlbFJvdXRlLm5leHRMYXRsbmdcclxuXHRcdH1cclxuXHQpO1xyXG5cdHZhciBkaXN0TGFiZWxSb3V0ZSA9IDEyMDAwO1xyXG5cdHZhciBoZGdMYWJlbCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhsYWJlbFJvdXRlLmxhdGxuZywgbGFiZWxSb3V0ZS5uZXh0TGF0bG5nKTsgXHJcblx0dmFyIG9mZnNldCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGxhYmVsUm91dGUubGF0bG5nLCBkaXN0TGFiZWxSb3V0ZSwgaGRnTGFiZWwsIDYzNzEwMDApO1xyXG5cdHZhciBhbmdsZVJvdGF0ZSA9IGhkZ0xhYmVsIC0gOTA7XHJcblx0aWYgKCBhbmdsZVJvdGF0ZSA+IC0yNzAgJiYgYW5nbGVSb3RhdGUgPCAtOTAgKSB7XHJcblx0XHQgYW5nbGVSb3RhdGUgPSBhbmdsZVJvdGF0ZSAtIDE4MDtcclxuXHR9XHJcblx0dmFyIGxhYmVsID0gbGFiZWxSb3V0ZS5iZWFyaW5nICsgXCImZGVnIFwiICsgbnVtZXJhbChsYWJlbFJvdXRlLmRpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgXCJubVwiO1xyXG5cdHZhciB4ID0gMjM7XHJcblx0dmFyIHkgPSAwO1xyXG5cdHZhciBhbmNob3IgPSBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoeCwgeSk7XHJcblx0dmFyIG1hcmtlckxhYmVsUm91dGUgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcclxuXHRcdHBvc2l0aW9uIDogb2Zmc2V0LFxyXG5cdFx0YW5pbWF0aW9uIDogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcblx0XHRsYWJlbENvbnRlbnQgOiBsYWJlbCxcclxuXHRcdGxhYmVsQW5jaG9yIDogYW5jaG9yLFxyXG5cdFx0bGFiZWxDbGFzcyA6IFwibGFiZWxzSW5mb1JvdXRlXCIsXHJcblx0XHRjbGlja2FibGUgOiB0cnVlLFxyXG5cdFx0aWNvbiA6IGljb25MYWJlbFJvdXRlLFxyXG5cdFx0cm90YXRlIDogYW5nbGVSb3RhdGVcclxuXHR9KTtcclxuXHRcclxuXHR2YXIgaW5mb0NvbnRlbnQgPSBcIjx0YWJsZSB3aWR0aD0nMTAwJScgYm9yZGVyPTAgY2xhc3M9J3J1bndheVRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz5cIjtcclxuXHRcclxuXHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSAgd2lkdGg9JzEwMCUnIGJvcmRlcj0wIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHZhbGlnbj0nbWlkZGxlJyB3aWR0aD0nMzBweCc+PGltZyBzcmM9J2Fycm93LnBuZyc+PC90ZD5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0ZCB2YWxpZ249J21pZGRsZScgd2lkdGg9JzE1MHB4Jz5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIiZuYnNwOyZuYnNwOyZuYnNwO1JvdXRlOjxicj48Yj4mbmJzcDsmbmJzcDtcIiArIGxhYmVsUm91dGUuY3VycmVudFBvaW50ICsgXHJcblx0XHRcdFx0ICAgXCI8L2I+Jm5ic3A7dG8mbmJzcDs8Yj5cIiArIGxhYmVsUm91dGUubmV4dFBvaW50ICsgXCI8L2I+PC90ZD5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj48L3RhYmxlPlwiO1xyXG5cdFxyXG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHI+PC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nNjBweCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gICBcIkRpc3RhbmNlOjwvdGQ+PHRkPiA8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIFxyXG5cdFx0XHRcdFx0XHRcdFx0bnVtZXJhbChsYWJlbFJvdXRlLmRpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgXCJubTwvc3Bhbj4mbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7XCIgKyBcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJhbChNYXRoLmNlaWwobGFiZWxSb3V0ZS5kaXN0YW5jZU5NIC8gMC41Mzk5NikpLmZvcm1hdCgnMCwwJykgK1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia208L3NwYW4+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9ICAgXCJIZWFkaW5nOjwvdGQ+PHRkPiA8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIGxhYmVsUm91dGUuYmVhcmluZyArIFwiJmRlZzwvc3Bhbj4mbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7XCIgKyBcclxuICAgIFx0XHRcdFx0ICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBsYWJlbFJvdXRlLmNvbXBhc3NIZWFkaW5nICsgXCI8L3NwYW4+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdHZhciBpbmZvQm94ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2PicsXHJcblx0XHRwaXhlbE9mZnNldDogbmV3IGdvb2dsZS5tYXBzLlNpemUoLTMwLC0yNSxcInB4XCIsXCJweFwiKVxyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckxhYmVsUm91dGUsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRpbmZvQm94Lm9wZW4obWFwLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJMYWJlbFJvdXRlLCBcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRjaGFuZ2VDb2xvckluZm9Cb3goZWwsXCJyZ2IoMjU1LDI1NSwyNTUpXCIpO1xyXG5cdFx0XHRpbmZvQm94LmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb0JveCwgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG5cdCAgICBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XHJcblx0XHRjaGFuZ2VDb2xvckluZm9Cb3goZWwsXCJyZ2JhKDEyNywyNTUsMjEyLDAuODIpXCIpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdG1hcmtlckxhYmVsUm91dGUuc2V0TWFwKG1hcCk7XHJcblx0c2F2ZU1hcmsobWFya2VyTGFiZWxSb3V0ZSk7XHJcblx0bWFya2Vyc0xhYmVsUm91dGUucHVzaChtYXJrZXJMYWJlbFJvdXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya0FpcnBvcnQoYWlycG9ydCx0eXBlKSB7XHJcblx0dmFyIG1hcmtlckFpcnBvcnQgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcclxuXHRcdHBvc2l0aW9uIDogYWlycG9ydC5sYXRsbmcsXHJcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuXHRcdGljb24gOiBpY29uQWlycG9ydCxcclxuXHRcdGxhYmVsQ29udGVudCA6IGFpcnBvcnQuaWQsXHJcblx0XHRsYWJlbEFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgyMCwgNzApLFxyXG5cdFx0bGFiZWxDbGFzcyA6IFwibGFiZWxzQWlycG9ydFwiXHJcblx0fSk7XHJcblxyXG5cdHZhciBpbWFnZSA9IFwiPGltZyBzcmM9J3Rha2VvZmYucG5nJy8+XCI7XHJcblx0aWYgKCB0eXBlID09ICdkZXN0aW5hdGlvbicgKSB7XHJcblx0XHRpbWFnZSA9IFwiPGltZyBzcmM9J2xhbmRpbmcucG5nJy8+XCI7XHJcblx0fVxyXG5cdHZhciBpbmZvQ29udGVudCA9IFwiXCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgYm9yZGVyPTAgd2lkdGg9JzEwMCUnIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzYwcHgnIGFsaWduPSdsZWZ0Jz5cIiArIGltYWdlICsgXCI8L3RkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPGI+XCIgKyBhaXJwb3J0LmlkICsgXCI8L2I+IC0gXCIgKyBhaXJwb3J0Lm5hbWU7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzQnPjxocj48L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRhYmxlIHdpZHRoPScxMDAlJyBib3JkZXI9MCBjbGFzcz0ncnVud2F5VGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhaXJwb3J0LnJ1bndheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+UnVud2F5IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxyXG5cdFx0XHRcdCsgYWlycG9ydC5ydW53YXlzW2ldLm51bWJlclxyXG5cdFx0XHRcdCsgXCI8L3NwYW4+PC90ZD5cIlxyXG5cdFx0XHRcdCsgXCIgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0hlYWRpbmc6IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxyXG5cdFx0XHRcdCsgYWlycG9ydC5ydW53YXlzW2ldLmhlYWRpbmdcclxuXHRcdFx0XHQrIFwiPGZvbnQgc2l6ZT0nMnB4Jz4mZGVnOzwvZm9udD48L3NwYW4+PC90ZD5cIlxyXG5cdFx0XHRcdCsgXCIgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0ZyZXF1ZW5jeTogPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXHJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0uZnJlcXVlbmN5ICsgXCI8L3NwYW4+PGJyLz48L3RkPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RWxldmF0aW9uOiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcclxuXHRcdFx0XHQrIG51bWVyYWwoYWlycG9ydC5ydW53YXlzW2ldLmVsZXZhdGlvbikuZm9ybWF0KCcwLDAnKSArIFwiIGZ0PC9zcGFuPjxici8+PC90ZD5cIiArIFwiPC90cj5cIjtcclxuXHR9XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cclxuXHR2YXIgaW5mb00xID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2PidcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJBaXJwb3J0LCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpbmZvTTEub3BlbihtYXAsIHRoaXMpO1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckFpcnBvcnQsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwiaGlkZGVuXCIpO1xyXG5cdFx0fVxyXG5cdFx0aW5mb00xLmNsb3NlKCk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb00xLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJ2aXNpYmxlXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG1hcmtlckFpcnBvcnQuc2V0TWFwKG1hcCk7XHJcblx0c2F2ZU1hcmsobWFya2VyQWlycG9ydCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtXYXlwb2ludCh3YXlwb2ludCkge1xyXG5cdHZhciBpY29uV1BUID0gaWNvbldheXBvaW50O1xyXG5cdHZhciBpbmZvQ29udGVudCA9IFwiXCI7XHJcblx0aWYgKHdheXBvaW50LnR5cGUgPT0gMSkge1xyXG5cdFx0aWNvbldQVCA9IGljb25WT1I7XHJcblx0fSBlbHNlIGlmICh3YXlwb2ludC50eXBlID09IDIpIHtcclxuXHRcdGljb25XUFQgPSBpY29uTkRCO1xyXG5cdH1cclxuXHJcblx0dmFyIG1hcmtlcldheXBvaW50ID0gbmV3IE1hcmtlcldpdGhMYWJlbCh7XHJcblx0XHRwb3NpdGlvbiA6IHdheXBvaW50LmxhdGxuZyxcclxuXHRcdGFuaW1hdGlvbiA6IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG5cdFx0aWNvbiA6IGljb25XUFQsXHJcblx0XHRsYWJlbENvbnRlbnQgOiB3YXlwb2ludC5pZCxcclxuXHRcdGxhYmVsQW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDI4LCAtNiksXHJcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNXYXlwb2ludFwiXHJcblx0fSk7XHJcblx0aWYgKHdheXBvaW50LnR5cGUgPT0gJ1ZPUicgfHwgd2F5cG9pbnQudHlwZSA9PSAnTkRCJykge1xyXG5cdFx0Ly8gVk9SIGFuZCBOREJcclxuXHRcdGluZm9Db250ZW50ID0gXCI8dGFibGUgYm9yZGVyPTAgY2xhc3M9J3ZvclRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPSczMzBweCc+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZCB2YWxpZ249J21pZGRsZScgY29sc3Bhbj0yPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCIgIDx0YWJsZSBib3JkZXI9MCBjbGFzcz0ndm9yVGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+PHRyPjx0ZD5cIjtcclxuXHRcdGlmICh3YXlwb2ludC50eXBlID09ICdWT1InKSB7XHJcblx0XHRcdC8vIFZPUlxyXG5cdFx0XHRpbmZvQ29udGVudCArPSBcIiA8aW1nIHNyYz0nVk9SLnBuZycvPlwiO1xyXG5cdFx0fSBlbHNlIGlmICh3YXlwb2ludC50eXBlID09ICdOREInKSB7XHJcblx0XHRcdC8vIE5CRFxyXG5cdFx0XHRpbmZvQ29udGVudCArPSBcIiA8aW1nIHNyYz0nTkRCLnBuZycvPlwiO1xyXG5cdFx0fVxyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7PGI+XCIgKyB3YXlwb2ludC5pZCArIFwiPC9iPiAtIFwiXHJcblx0XHRcdFx0KyB3YXlwb2ludC5kZXNjciArIFwiPC90ZD5cIiArIFwiPC90cj48L3RhYmxlPlwiXHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nMic+PGhyLz48L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzIwJSc+IEZyZXF1ZW5jeTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyB3YXlwb2ludC5mcmVxICsgXCI8L3RkPlwiICsgXCI8L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPScxJSc+IExhdGl0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxhdCgpKSArIFwiPC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPiBMb25naXR1ZGU6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgcHJlY2lzaW9uRGVjaW1hbE51bWJlcih3YXlwb2ludC5sYXRsbmcubG5nKCkpICsgXCI8YnIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gRklYXHJcblx0XHRpbmZvQ29udGVudCA9IFwiPHRhYmxlIGJvcmRlcj0wIGNsYXNzPSd2b3JUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTIwcHgnPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGQgY29sc3Bhbj0yPjxiPlwiICsgd2F5cG9pbnQuaWQgKyBcIjwvYj48L3RkPjwvdHI+XCJcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMSUnPiBMYXRpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sYXQoKSkgKyBcIjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD4gTG9uZ2l0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxuZygpKSArIFwiPGJyLz48L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0fVxyXG5cdHZhciBpbmZvTTEgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiAnPGRpdiBpZD1cIml3X2NvbnRlbnRcIj4nICsgaW5mb0NvbnRlbnQgKyAnPC9kaXY+J1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcldheXBvaW50LCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpbmZvTTEub3BlbihtYXAsIHRoaXMpO1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcldheXBvaW50LCBcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcImhpZGRlblwiKTtcclxuXHRcdH1cclxuXHRcdGluZm9NMS5jbG9zZSgpO1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9NMSwgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwidmlzaWJsZVwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRtYXJrZXJXYXlwb2ludC5zZXRNYXAobWFwKTtcclxuXHRzYXZlTWFyayhtYXJrZXJXYXlwb2ludCk7XHJcblx0bWFya2Vyc1dheXBvaW50LnB1c2gobWFya2VyV2F5cG9pbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvckluZm9Cb3goZWwsY29sb3IpIHtcclxuXHRkaXZDb2xvciA9IGVsLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuXHRkaXZDb2xvci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsc3RhdHVzQXJyb3csc3RhdHVzQ2xvc2VCdXR0b24pIHtcclxuXHRkaXZFbCA9IGVsLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGlsZDEgPSBkaXZFbC5maXJzdENoaWxkO1xyXG4gICAgY2hpbGQzID0gY2hpbGQxLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBpZiAoIGNoaWxkMyAhPSB1bmRlZmluZWQgKSB7XHJcbiAgICBcdGNoaWxkMS5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzQXJyb3c7XHJcbiAgICBcdGNoaWxkMy5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzQXJyb3c7XHJcblx0ICAgIC8vIFJlbW92ZSBDbG9zZSBCdXR0b25cclxuXHQgICAgZGl2Q2xvc2VCdXR0b24gPSBkaXZFbC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuXHQgICAgLy9kaXZDbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzO1xyXG5cdCAgICBpZiAoIHN0YXR1c0Nsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCApIHtcclxuXHQgICAgXHRkaXZDbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzQ2xvc2VCdXR0b247XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgIFx0ZGl2Q2xvc2VCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0ICAgIH1cclxuXHQgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIodmxyKSB7XHJcblx0cmV0dXJuIHBhcnNlRmxvYXQoTWF0aC5yb3VuZCh2bHIgKiAxMDAwMDApIC8gMTAwMDAwKS50b0ZpeGVkKDUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQb3NpdGlvbigpIHtcclxuXHQkLmdldEpTT04oXHJcblx0XHRcdFwiZGF0YVwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0aWYgKCQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0LypzaG93RXJyb3IoXCJMaXN0ZW5pbmcgYXQgWC1QbGFuZSdzIFVEUCB0cmFmZmljIHBvcnQgNDkwMDMuIFwiXHJcblx0XHRcdFx0XHRcdFx0KyBcIlBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgYXQgdGhlIFgtUGxhbmUncyBOZXQgQ29ubmVjdGlvbnMgbWVudS5cIik7Ki9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gZGVsZXRlIGFsbCBhYnNlbnQgcGxhbmVzXHJcblx0XHRcdFx0Zm9yICggdmFyIGlwIGluIHBsYW5lTGlzdCkge1xyXG5cdFx0XHRcdFx0aWYgKCEoaXAgaW4gZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlUGxhbmUoaXApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBmb3IgY3VycmVudCBhbmQgbmV3IHBsYW5lc1xyXG5cdFx0XHRcdGZvciAoIHZhciBpcCBpbiBkYXRhKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBuZXcgcGxhbmVcclxuXHRcdFx0XHRcdGlmICghKGlwIGluIHBsYW5lTGlzdCkpIHtcclxuXHRcdFx0XHRcdFx0Y29sb3IgPSBuZXh0Q29sb3IoKTtcclxuXHRcdFx0XHRcdFx0bWFya2VyT3B0aW9ucy5pY29uLmZpbGxDb2xvciA9IGNvbG9yO1xyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdID0ge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWUgOiBpcC5yZXBsYWNlKC8tL2csICcuJyksXHJcblx0XHRcdFx0XHRcdFx0bG9uIDogMCxcclxuXHRcdFx0XHRcdFx0XHRsYXQgOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGFsdCA6IGRhdGFbaXBdLmFsdE1hcCxcclxuXHRcdFx0XHRcdFx0XHRtYXJrZXIgOiBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlck9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0XHRcdHRyYWNlIDogbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHBvbHlPcHRpb25zKSxcclxuXHRcdFx0XHRcdFx0XHRpbmZvIDogbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coKSxcclxuXHRcdFx0XHRcdFx0XHRjb2xvciA6IGNvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdHZTcGVlZCA6IGRhdGFbaXBdLnZTcGVlZCxcclxuXHRcdFx0XHRcdFx0XHRhaXJTcGVlZCA6IGRhdGFbaXBdLmFpclNwZWVkLFxyXG5cdFx0XHRcdFx0XHRcdGdTcGVlZCA6IGRhdGFbaXBdLmdyb3VuZFNwZWVkLFxyXG5cdFx0XHRcdFx0XHRcdGhlYWRpbmcgOiBkYXRhW2lwXS5iZWFyaW5nLFxyXG5cdFx0XHRcdFx0XHRcdGRlc3QgOiBkYXRhW2lwXS5kZXN0aW5hdGlvbixcclxuXHRcdFx0XHRcdFx0XHRncHNEaXN0Tm0gOiBkYXRhW2lwXS5ncHNEaXN0YW5jZU5tLFxyXG5cdFx0XHRcdFx0XHRcdGdwc0Rpc3RUaW1lIDogZGF0YVtpcF0uZ3BzRGlzdGFuY2VUaW1lLFxyXG5cdFx0XHRcdFx0XHRcdG5hdjEgOiBkYXRhW2lwXS5uYXYxRnJlcSxcclxuXHRcdFx0XHRcdFx0XHRuYXYyIDogZGF0YVtpcF0ubmF2MkZyZXEsXHJcblx0XHRcdFx0XHRcdFx0YmFyb21ldGVyIDogZGF0YVtpcF0uYmFyb21ldGVyLFxyXG5cdFx0XHRcdFx0XHRcdGZ1ZWxRdWFudGl0eSA6IGRhdGFbaXBdLmZ1ZWxRdWFudGl0eSxcclxuXHRcdFx0XHRcdFx0XHRvdXRzaWRlVGVtcCA6IGRhdGFbaXBdLm91dHNpZGVUZW1wZXJhdHVyZSxcclxuXHRcdFx0XHRcdFx0XHRjb20xIDogZGF0YVtpcF0uY29tMUZyZXEsXHJcblx0XHRcdFx0XHRcdFx0Y29tMiA6IGRhdGFbaXBdLmNvbTJGcmVxLFxyXG5cdFx0XHRcdFx0XHRcdGNvbXBhc3NIZWFkaW5nIDogZGF0YVtpcF0uY29tcGFzc0hlYWRpbmdcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0TWFwKG1hcCk7XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLmlwID0gaXA7IFxyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmluZm9XaW5kb3dMaXN0ZW5lciA9IGdvb2dsZS5tYXBzLmV2ZW50XHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5tYXJrZXIsJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lTGlzdFt0aGlzLmlwXS5pbmZvLm9wZW4obWFwLHBsYW5lTGlzdFt0aGlzLmlwXS5tYXJrZXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHBsYW5lTGlzdFtpcF0uaW5mbywgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsSW5mb0JveFBsYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWxJbmZvQm94UGxhbmUsXCJ2aXNpYmxlXCIsXCJ2aXNpYmxlXCIpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5pbmZvLCdjbG9zZWNsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWxJbmZvQm94UGxhbmUsXCJoaWRkZW5cIik7XHJcblx0XHRcdFx0XHRcdFx0ZWxJbmZvQm94UGxhbmUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS50cmFjZS5zZXRNYXAobWFwKTtcclxuXHRcdFx0XHRcdFx0cGxhbmVUb0ZvbGxvdyA9IGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bmV3TGF0ICAgICAgICAgICAgICAgICAgICAgICA9IGRhdGFbaXBdLmxhdE1hcDtcclxuXHRcdFx0XHRcdG5ld0xvbiAgICAgICAgICAgICAgICAgICAgICAgPSBkYXRhW2lwXS5sb25NYXA7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmFsdCAgICAgICAgICAgID0gZGF0YVtpcF0uYWx0TWFwO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS52U3BlZWQgICAgICAgICA9IGRhdGFbaXBdLnZTcGVlZDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uYWlyU3BlZWQgICAgICAgPSBkYXRhW2lwXS5haXJTcGVlZDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaGVhZGluZyAgICAgICAgPSBkYXRhW2lwXS5iZWFyaW5nO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5kZXN0ICAgICAgICAgICA9IGRhdGFbaXBdLmRlc3RpbmF0aW9uO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5ncHNEaXN0Tm0gICAgICA9IGRhdGFbaXBdLmdwc0Rpc3RhbmNlTm07XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmdwc0Rpc3RUaW1lICAgID0gZGF0YVtpcF0uZ3BzRGlzdGFuY2VUaW1lO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5nU3BlZWQgICAgICAgICA9IGRhdGFbaXBdLmdyb3VuZFNwZWVkO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5uYXYxICAgICAgICAgICA9IGRhdGFbaXBdLm5hdjFGcmVxO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5uYXYyICAgICAgICAgICA9IGRhdGFbaXBdLm5hdjJGcmVxO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5iYXJvbWV0ZXIgICAgICA9IGRhdGFbaXBdLmJhcm9tZXRlcjtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZnVlbFF1YW50aXR5ICAgPSBkYXRhW2lwXS5mdWVsUXVhbnRpdHk7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm91dHNpZGVUZW1wICAgID0gZGF0YVtpcF0ub3V0c2lkZVRlbXBlcmF0dXJlO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb20xICAgICAgICAgICA9IGRhdGFbaXBdLmNvbTFGcmVxO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb20yICAgICAgICAgICA9IGRhdGFbaXBdLmNvbTJGcmVxO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb21wYXNzSGVhZGluZyA9IGRhdGFbaXBdLmNvbXBhc3NIZWFkaW5nO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgbmV3UG9pbnQgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5ld0xhdCxuZXdMb24pO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0UG9zaXRpb24obmV3UG9pbnQpO1xyXG5cdFx0XHRcdFx0dmFyIGljb24gPSBwbGFuZUxpc3RbaXBdLm1hcmtlci5nZXRJY29uKCk7XHJcblx0XHRcdFx0XHRpY29uLnJvdGF0aW9uID0gcGxhbmVMaXN0W2lwXS5oZWFkaW5nO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0SWNvbihpY29uKTtcclxuXHRcdFx0XHRcdC8vIGFkZCBuZXcgcG9pbnQgdG8gbGluZVxyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS50cmFjZS5nZXRQYXRoKCkucHVzaChuZXdQb2ludCk7XHJcblx0XHRcdFx0XHR2YXIgYWlycGxhbmVMYWJlbCA9ICBwbGFuZUxpc3RbaXBdLm5hbWU7XHJcblx0XHRcdFx0XHRpZiAoIGFpcnBsYW5lTGFiZWwgPT0gJzEyNy4wLjAuMScgKSB7XHJcblx0XHRcdFx0XHRcdCBhaXJwbGFuZUxhYmVsID0gJ1lPVSc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL3ZhciBoZGdBaXJwbGFuZSA9IE51bWJlcihNYXRoLmZsb29yKCgocGxhbmVMaXN0W2lwXS5oZWFkaW5nICsgMzYwKSAlIDM2MCkpKSArIDIyO1xyXG5cdFx0XHRcdFx0dmFyIGhkZ0FpcnBsYW5lID0gcGxhbmVMaXN0W2lwXS5jb21wYXNzSGVhZGluZztcclxuXHRcdFx0XHRcdHZhciBpbmZvQ29udGVudCA9IFwiPGRpdiBpZD0naXdfY29udGVudCc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjxkaXYgc3R5bGU9J21hcmdpbjogMDsgd2lkdGg6IDUwMHB4Oyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSBib3JkZXI9MCBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMDAlJz5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyPjx0ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICA8dGFibGUgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTAwJSc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDx0cj48dGQgc3R5bGU9J2hlaWdodDozMHB4Oyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDxiPlwiICsgYWlycGxhbmVMYWJlbCArIFwiPC9iPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8L3RkPjwvdHI+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDwvdGQ+PC90cj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICA8L3RhYmxlPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90ZD48L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgYmFja0NvbG9yID0gJ2xpZ2h0Z3JheSc7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGFibGUgc3R5bGU9J2JvcmRlcjpzb2xpZCAxcHggZGFya2dyYXk7Zm9udC13ZWlnaHQ6Ym9sZDsnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMicgd2lkdGg9JzEwMCUnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyIHN0eWxlPSdiYWNrZ3JvdW5kOlwiICsgYmFja0NvbG9yICsgXCI7Jz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZCB3aWR0aD0nODBweCc+RGVzdGluYXRpb246PC90ZD48dGQgY29sc3Bhbj0nNSc+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5kZXN0ICsgXCI8L3NwYW4+PC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHI+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+RGlzdGFuY2U6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5ncHNEaXN0Tm0gKyBcIjwvc3Bhbj4mbmJzcDtubTwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHdpZHRoPSc2MHB4Jz5FVEU6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5ncHNEaXN0VGltZSArIFwiPC9zcGFuPiZuYnNwOzwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+PHRkPiBBbHRpdHVkZTogPC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gbnVtZXJhbChwbGFuZUxpc3RbaXBdLmFsdC50b0ZpeGVkKCkpLmZvcm1hdCgnMCwwJykgKyBcIjwvc3Bhbj4mbmJzcDtmdCBNU0wmbmJzcDsmbmJzcDs8L3RkPlwiXHJcblx0XHRcdFx0XHQgICAgICAgICAgICArIFwiPHRkPkhlYWRpbmc6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgaGRnQWlycGxhbmUgKyBcIiZkZWc7PC9zcGFuPjwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIEFpclNwZWVkOiA8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBudW1lcmFsKHBsYW5lTGlzdFtpcF0uYWlyU3BlZWQpLmZvcm1hdCgnMCwwJykgKyBcIjwvc3Bhbj4mbmJzcDtrdHM8L3RkPlwiOyBcclxuXHRcdFx0XHRcdGlmICggcGxhbmVMaXN0W2lwXS52U3BlZWQgPiAtMSApIHtcclxuXHRcdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPlZTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5WUzo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mb1JlZCc+XCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBudW1lcmFsKHBsYW5lTGlzdFtpcF0udlNwZWVkKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7ZnBtJm5ic3A7Jm5ic3A7PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+TmF2MTo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLm5hdjEgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkNvbTE6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5jb20xICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj48dHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5OYXYyOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0ubmF2MiArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5Db20yOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uY29tMiArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+QmFyb21ldGVyOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uYmFyb21ldGVyICsgXCI8L3NwYW4+PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5GdWVsOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZnVlbFF1YW50aXR5ICsgXCI8L3NwYW4+PC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPjx0cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk9BVDo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLm91dHNpZGVUZW1wICsgXCI8L3NwYW4+JmRlZzsmbmJzcDwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+R1M6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGFyc2VGbG9hdChwbGFuZUxpc3RbaXBdLmdTcGVlZCkudG9GaXhlZCgpICsgXCI8L3NwYW4+Jm5ic3A7a3RzPC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RhYmxlPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90ZD48L3RyPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L2Rpdj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC9kaXY+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIHNldCBpbmZvIHdpbmRvdyBjb250ZW50XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmluZm8uc2V0Q29udGVudChpbmZvQ29udGVudCk7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmxvbiA9IG5ld0xvbjtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubGF0ID0gbmV3TGF0O1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5oZGcgPSBwbGFuZUxpc3RbaXBdLmhlYWRpbmc7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnNwZCA9IHBsYW5lTGlzdFtpcF0uZ1NwZWVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBtb3ZlIG1hcCBpZiBjaGVja2JveCBjaGVja2VkXHJcblx0XHRcdFx0aWYgKCBjaGFzZUFpcnBsYW5lICkge1xyXG5cdFx0XHRcdFx0aWYgKCBwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10gIT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRtYXAucGFuVG8obmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10ubGF0LHBsYW5lTGlzdFtwbGFuZVRvRm9sbG93XS5sb24pKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0LmVycm9yKFxyXG5cdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzaG93RXJyb3IoJ09wcyEgTWF5ZGF5ISBNYXlkYXkhIEphdmEgU2VydmVyIGlzIGRvd24hISEnKVxyXG5cdFx0XHR9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlYXJpbmcobG9uMSwgbGF0MSwgbG9uMiwgbGF0Mikge1xyXG5cdGxvbjEgPSBsb24xICogTWF0aC5QSSAvIDE4MDtcclxuXHRsb24yID0gbG9uMiAqIE1hdGguUEkgLyAxODA7XHJcblx0bGF0MSA9IGxhdDEgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdGxhdDIgPSBsYXQyICogTWF0aC5QSSAvIDE4MDtcclxuXHR2YXIgeSA9IE1hdGguc2luKGxvbjIgLSBsb24xKSAqIE1hdGguY29zKGxhdDIpO1xyXG5cdHZhciB4ID0gTWF0aC5jb3MobGF0MSkgKiBNYXRoLnNpbihsYXQyKSAtIE1hdGguc2luKGxhdDEpICogTWF0aC5jb3MobGF0MilcclxuXHRcdFx0KiBNYXRoLmNvcyhsb24yIC0gbG9uMSk7XHJcblx0dmFyIGJybmcgPSBNYXRoLmF0YW4yKHksIHgpO1xyXG5cdHJldHVybiBicm5nIC8gTWF0aC5QSSAqIDE4MDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzdGFuY2UobG9uMSwgbGF0MSwgbG9uMiwgbGF0Mikge1xyXG5cdFIgPSA2MzcyLjg7XHJcblx0bGF0MSA9IGxhdDEgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdGxhdDIgPSBsYXQyICogTWF0aC5QSSAvIDE4MDtcclxuXHR2YXIgZGVsdGFsYXQgPSBsYXQyIC0gbGF0MTtcclxuXHR2YXIgZGVsdGFsb24gPSAobG9uMiAtIGxvbjEpICogTWF0aC5QSSAvIDE4MDtcclxuXHR2YXIgYSA9IE1hdGguc2luKGRlbHRhbGF0IC8gMikgKiBNYXRoLnNpbihkZWx0YWxhdCAvIDIpICsgTWF0aC5jb3MobGF0MSlcclxuXHRcdFx0KiBNYXRoLmNvcyhsYXQyKSAqIE1hdGguc2luKGRlbHRhbG9uIC8gMikgKiBNYXRoLnNpbihkZWx0YWxvbiAvIDIpO1xyXG5cdHZhciBjID0gMiAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xyXG5cdHJldHVybiBSICogYztcclxufVxyXG5cclxuLy8gY2xlYW4gcGxhbmUgZGVsZXRpb25cclxuZnVuY3Rpb24gZGVsZXRlUGxhbmUoaXApIHtcclxuXHRnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm9XaW5kb3dMaXN0ZW5lcik7XHJcblx0cGxhbmVMaXN0W2lwXS50cmFjZS5zZXRNYXAobnVsbCk7XHJcblx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0TWFwKG51bGwpO1xyXG5cdGRlbGV0ZSBwbGFuZUxpc3RbaXBdO1xyXG59XHJcblxyXG4vLyBhbGVydCgpIGVxdWl2YWxlbnRcclxuZnVuY3Rpb24gc2hvd0Vycm9yKHRleHQpIHtcclxuXHQkKCcjZXJyb3JCb3gnKS50ZXh0KHRleHQpO1xyXG5cdCQoJyNlcnJvckJveCcpLmZhZGVJbigpLmRlbGF5KDM1MDApLmZhZGVPdXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dENvbG9yKCkge1xyXG5cdGlmIChjb2xvcnNbY29sb3JfaW5kZXhdICE9IG51bGwpIHtcclxuXHRcdHZhciBjb2xvciA9IGNvbG9yc1tjb2xvcl9pbmRleF07XHJcblx0XHRjb2xvcl9pbmRleCsrO1xyXG5cdFx0cmV0dXJuIGNvbG9yO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIk5vIG1vcmUgY29sb3JzXCIpO1xyXG5cdFx0cmV0dXJuIFwiI2FhYWFhYVwiO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2hhc2VBaXJwbGFuZSgpIHtcclxuXHRpZiAoIGNoYXNlQWlycGxhbmUgKSB7XHJcblx0XHQkKCcjZm9sbG93VGhlUGxhbmUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNmb2xsb3dUaGVQbGFuZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcclxuXHR9XHJcblx0Y2hhc2VBaXJwbGFuZSA9ICFjaGFzZUFpcnBsYW5lO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVGbGlnaHRQYW5lbCgpIHtcclxuXHRpZiAoJCgnI3BhbmVsLWZwJykuaXMoXCI6aGlkZGVuXCIpKSB7XHJcblx0XHRzaG93RmxpZ2h0UGFuZWwoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0aGlkZUZsaWdodFBhbmVsKCk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGhpZGVGbGlnaHRQYW5lbCgpIHtcclxuXHRkb2N1bWVudC5jb29raWU9JCgnI2JveEZsaWdodFBsYW4nKS52YWwoKTtcclxuXHRjb25zb2xlLmxvZyhcIihzYXZpbmcpIHBsYW5TYXZlZD1cIiArIGRvY3VtZW50LmNvb2tpZSk7XHJcblx0JCgnI3BhbmVsLWZwJykuaGlkZSg1MDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWhlbHAnKS5oaWRlKDMwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4taW5mbycpLmhpZGUoMzAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0ZsaWdodFBhbmVsKCkge1xyXG5cdHZhciBwbGFuU2F2ZWQgPSBkb2N1bWVudC5jb29raWU7XHJcblx0Y29uc29sZS5sb2coXCJwbGFuU2F2ZWQ9XCIgKyBkb2N1bWVudC5jb29raWUpO1xyXG5cdGlmICggcGxhblNhdmVkICE9IFwiXCIgKSB7XHJcblx0XHQkKCcjYm94RmxpZ2h0UGxhbicpLnZhbChwbGFuU2F2ZWQpO1xyXG5cdH1cclxuXHQkKCcjcGFuZWwtZnAnKS5zaG93KDUwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4taGVscCcpLnNob3coMzAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1pbmZvJykuc2hvdygzMDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdCQoJyNib3hGbGlnaHRQbGFuJykuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU5hdmFpZHMoKSB7XHJcblx0JCgnI25hdmFpZHMtYnV0dG9uJykuaHRtbCgnU2hvdyBuYXZhaWRzIChOKScpLnVuYmluZCgnY2xpY2snKS5jbGljayhcclxuXHRcdFx0c2hvd05hdmFpZHMpO1xyXG5cdG5hdk1hcC5zZXRPcGFjaXR5KDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TmF2YWlkcygpIHtcclxuXHQkKCcjbmF2YWlkcy1idXR0b24nKS5odG1sKCdIaWRlIG5hdmFpZHMgKE4pJykudW5iaW5kKCdjbGljaycpLmNsaWNrKFxyXG5cdFx0XHRoaWRlTmF2YWlkcyk7XHJcblx0bmF2TWFwLnNldE9wYWNpdHkoMSk7XHJcbn1cclxuXHJcbnZhciB2aXNpYmxlTGFiZWxSb3V0ZSA9IHRydWU7XHJcbmZ1bmN0aW9uIHRvb2dsZUxhYmVsUm91dGUoKSB7XHJcblx0dmlzaWJsZUxhYmVsUm91dGUgPSAhdmlzaWJsZUxhYmVsUm91dGU7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzTGFiZWxSb3V0ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0IG1hcmtlcnNMYWJlbFJvdXRlW2ldLnNldFZpc2libGUodmlzaWJsZUxhYmVsUm91dGUpO1xyXG5cdH1cclxuXHRpZiAoIHZpc2libGVMYWJlbFJvdXRlICkge1xyXG5cdFx0JCgnI2xhYmVsUm91dGUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNsYWJlbFJvdXRlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdH1cclxufVxyXG5cclxudmFyIHZpc2libGVXYXlwb2ludCA9IHRydWU7XHJcbmZ1bmN0aW9uIHRvb2dsZUxhYmVsV2F5cG9pbnQoKSB7XHJcblx0dmlzaWJsZVdheXBvaW50ID0gIXZpc2libGVXYXlwb2ludDtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnNXYXlwb2ludC5sZW5ndGg7IGkrKykge1xyXG5cdFx0bWFya2Vyc1dheXBvaW50W2ldLnNldFZpc2libGUodmlzaWJsZVdheXBvaW50KTtcclxuXHR9XHJcblx0aWYgKCB2aXNpYmxlV2F5cG9pbnQgKSB7XHJcblx0XHQkKCcjbGFiZWxXYXlwb2ludC1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnI2xhYmVsV2F5cG9pbnQtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XHJcblx0fVxyXG59XHJcblxyXG4vLyByZWFkeSB3aGVuIHlvdSBhcmUhXHJcbmdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0aWFsaXplKTtcclxuLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gbWFrZSB0aG9zZSBmdW5jdGlvbnMgdmlzaWJsZSBvdXRzaWRlIHRoZSBKUyBmaWxlIHdoZW4gdXNpbmcgdGhlIFdlYlBhY2sgYnVuZGxlIHRvb2wgdG8gcnVuIHRoZSBzb2x1dGlvblxyXG53aW5kb3cuc2hvd05hdmFpZHMgICAgICAgICA9IHNob3dOYXZhaWRzO1xyXG53aW5kb3cudG9nZ2xlRmxpZ2h0UGFuZWwgICA9IHRvZ2dsZUZsaWdodFBhbmVsO1xyXG53aW5kb3cudG9nZ2xlQ2hhc2VBaXJwbGFuZSA9IHRvZ2dsZUNoYXNlQWlycGxhbmU7XHJcbndpbmRvdy50b29nbGVMYWJlbFJvdXRlICAgID0gdG9vZ2xlTGFiZWxSb3V0ZTtcclxud2luZG93LnRvb2dsZUxhYmVsV2F5cG9pbnQgPSB0b29nbGVMYWJlbFdheXBvaW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==