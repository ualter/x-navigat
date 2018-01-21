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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDMxN2U1NzBmYjViNTMwOWVlYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWZyb250LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcz81ODdhIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFF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QUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzVXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkEsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG9CQUFvQix3Q0FBd0M7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxvSTtBQUNBO0FBQ0EsZ0Q7QUFDQTtBQUNBLE1BQU07QUFDTixFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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ImZyb250LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkMzE3ZTU3MGZiNWI1MzA5ZWVjMiIsImltcG9ydCAnLi9jc3MvbWFwLmNzcyc7XHJcbi8vaW1wb3J0ICcuL2pzL251bWVyYWwubWluLmpzJztcclxuLy9pbXBvcnQgJy4vanMvbWFya2Vyd2l0aGxhYmVsLmpzJztcclxuLy9pbXBvcnQgJy4vanMvanF1ZXJ5LWJsaW5rLmpzJztcclxuaW1wb3J0ICcuL2pzL21hcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtZnJvbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hcC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvbWFwLmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgI21hcC1jYW52YXMge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFuZWwtZnAge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDYwcHg7XFxyXFxuXFx0bGVmdDogOTBweDtcXHJcXG5cXHR6LWluZGV4OiA1O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjNTk1OTU5O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1MDAwMEU7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0d2lkdGg6IDYwMHB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JCb3gge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDkwJTtcXHJcXG5cXHRsZWZ0OiAyJTtcXHJcXG5cXHR6LWluZGV4OiA1O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjNTk1OTU5O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM1MDAwMEU7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0d2lkdGg6IDIwJTtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2JveEZsaWdodFBsYW4ge1xcclxcblxcdCB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdCBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0IGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHQgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0IG92ZXJmbG93OiBhdXRvO1xcclxcblxcdCByZXNpemU6IG5vbmU7XFxyXFxufSBcXHJcXG4jZmxpZ2h0cGxhbi1oZWxwIHtcXHJcXG5cXHR6LWluZGV4OiAxMDAwO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDE5MHB4O1xcclxcblxcdGxlZnQ6IDkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTFweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMjhweDtcXHJcXG5cXHRsZWZ0OiA5MHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG59XFxyXFxuI3BsYW5lLXBhbmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDE5MHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbiNmb2xsb3dUaGVQbGFuZS1idXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbi5kb3duIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4ubGFiZWxzQWlycG9ydCB7XFxyXFxuXFx0Y29sb3I6IGRhcmtibHVlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMzhweDtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG4ubGFiZWxzV2F5cG9pbnQge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDExcHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiA1MHB4O1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi5sYWJlbHNJbmZvUm91dGUge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRtaW4td2lkdGg6IDcwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjNweDtcXHJcXG59XFxyXFxuLnJ1bndheVRhYmxlIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbi5ydW53YXlJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnZvclRhYmxlIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbi52b3JJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnJvdXRlSW5mbyB7XFxyXFxuXFx0Y29sb3I6IGJsdWU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wbGFuZURhdGFJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBsYW5lRGF0YUluZm9SZWQge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5yb3RhdGUge1xcclxcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG4gICAgLW1vei10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG4gICAgLW1zLXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICAtby10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG4gICAgdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWluZm8ge1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTkwcHg7XFxyXFxuICAgIGxlZnQ6IDI1M3B4O1xcclxcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB3aWR0aDogNDMwcHg7XFxyXFxufVxcclxcbi5mbGlnaHRQbGFuLWluZm8tbGFiZWwge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tbG9hZGluZyB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlOyBcXHJcXG5cXHR0b3A6IDczcHg7IFxcclxcblxcdGxlZnQ6IDEwcHg7IFxcclxcblxcdHotaW5kZXg6IDk5OTk7XFxyXFxuXFx0Y29sb3I6ICM0NTQ1NDU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG5cXHRmb250LXNpemU6MTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuI2xhYmVsUm91dGUtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDMwMHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsUm91dGUtYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNsYWJlbFJvdXRlLWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuI2xhYmVsV2F5cG9pbnQtYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDM5MHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsV2F5cG9pbnQtYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNsYWJlbFdheXBvaW50LWJ1dHRvbi51cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jc3MvbWFwLmNzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHBlcmlvZCA9IDEwMDA7IC8vIHRpbWUgYmV0d2VlbiByZWZyZXNoZXMgaW4gbXNcclxuXHJcbnZhciBwb3NDbGllbnQgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQxLjU0NjE5OSwgMi4xMDg2MjMpXHJcbmlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pIHtcclxuICAgIFx0cG9zQ2xpZW50ID0ge1xyXG4gICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxudmFyIG1hcE9wdGlvbnMgPSB7XHJcblx0Y2VudGVyIDoge1xyXG5cdFx0bGF0IDogMCxcclxuXHRcdGxuZyA6IDBcclxuXHR9LFxyXG5cdHpvb20gOiA5LFxyXG5cdG1hcFR5cGVJZCA6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5URVJSQUlOLFxyXG5cdGNlbnRlciA6IHBvc0NsaWVudFxyXG59O1xyXG52YXIgbWFwO1xyXG52YXIgcG9seU9wdGlvbnMgPSB7XHJcblx0Z2VvZGVzaWMgOiB0cnVlLFxyXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwMDAnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAwLjgsXHJcblx0c3Ryb2tlV2VpZ2h0IDogM1xyXG59O1xyXG52YXIgbWFya2VyT3B0aW9ucyA9IHtcclxuXHRpY29uIDoge1xyXG5cdFx0cGF0aCA6IFwiTTM2Mi45ODUsNDMwLjcyNGwtMTAuMjQ4LDUxLjIzNGw2Mi4zMzIsNTcuOTY5bC0zLjI5MywyNi4xNDUgbC03MS4zNDUtMjMuNTk5bC0yLjAwMSwxMy4wNjlsLTIuMDU3LTEzLjUyOWwtNzEuMjc4LFwiXHJcblx0XHRcdFx0KyBcIjIyLjkyOGwtNS43NjItMjMuOTg0bDY0LjA5Ny01OS4yNzFsLTguOTEzLTUxLjM1OWwwLjg1OC0xMTQuNDMgbC0yMS45NDUtMTEuMzM4bC0xODkuMzU4LFwiXHJcblx0XHRcdFx0KyBcIlwiXHJcblx0XHRcdFx0KyBcIjg4Ljc2bC0xLjE4LTMyLjI2MmwyMTMuMzQ0LTE4MC4wOGwwLjg3NS0xMDcuNDM2bDcuOTczLTMyLjAwNWw3LjY0Mi0xMi4wNTRsNy4zNzctMy45NThsOS4yMzgsXCJcclxuXHRcdFx0XHQrIFwiMy42NSBsNi4zNjcsMTQuOTI1bDcuMzY5LDMwLjM2M3YxMDYuMzc1bDIxMS41OTIsMTgyLjA4MmwtMS40OTYsMzIuMjQ3bC0xODguNDc5LTkwLjYxbC0yMS42MTYsMTAuMDg3bC0wLjA5NCwxMTUuNjg0XCIsXHJcblx0XHRzY2FsZSA6IDAuMDgsXHJcblx0XHRmaWxsT3BhY2l0eSA6IDEsXHJcblx0XHRhbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzQwLCAzNDApLFxyXG5cdFx0c3Ryb2tlV2VpZ2h0IDogMC41XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGljb25BaXJwb3J0ID0ge1xyXG5cdC8vdXJsIDogJ2FpcnBvcnQucG5nJyxcclxuXHR1cmwgOiAnLi9pbWFnZXMvYWlycG9ydC5wbmcnLFxyXG5cdHNpemUgOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzMCwgNTApLFxyXG5cdG9yaWdpbiA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuXHRhbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMTUsIDUwKVxyXG59O1xyXG5cclxudmFyIGljb25XYXlwb2ludCA9IHtcclxuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXHJcblx0c2NhbGUgOiA2LFxyXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwRkYnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDMsXHJcblx0ZmlsbENvbG9yIDogJ3doaXRlJyxcclxuXHRmaWxsT3BhY2l0eSA6IDEsXHJcbn07XHJcblxyXG52YXIgaWNvbkxhYmVsUm91dGUgPSB7XHJcblx0cGF0aCA6IFwibTk2LDQ0XCIsXHJcblx0c2NhbGUgOiAxLFxyXG5cdHN0cm9rZUNvbG9yIDogJyNGRkZGRkYnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDEsXHJcblx0ZmlsbENvbG9yIDogJ3doaXRlJyxcclxuXHRmaWxsT3BhY2l0eSA6IDEwMCxcclxufTtcclxuXHJcbnZhciBpY29uVk9SID0ge1xyXG5cdHBhdGggOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkNJUkNMRSxcclxuXHRzY2FsZSA6IDcsXHJcblx0c3Ryb2tlQ29sb3IgOiAnIzAwMDAwMCcsXHJcblx0c3Ryb2tlT3BhY2l0eSA6IDEsXHJcblx0c3Ryb2tlV2VpZ2h0IDogMyxcclxuXHRmaWxsQ29sb3IgOiAneWVsbG93JyxcclxuXHRmaWxsT3BhY2l0eSA6IDEsXHJcbn07XHJcblxyXG52YXIgaWNvbk5EQiA9IHtcclxuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXHJcblx0c2NhbGUgOiA3LFxyXG5cdHN0cm9rZUNvbG9yIDogJyMyNjI2MjYnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDMsXHJcblx0ZmlsbENvbG9yIDogJyNGRkQwNUMnLFxyXG5cdGZpbGxPcGFjaXR5IDogMSxcclxufTtcclxuXHJcbnZhciBwbGFuZUxpc3QgPSB7fTtcclxudmFyIHJlZnJlc2hDb250cm9sUGFuZWwgPSBmYWxzZTtcclxudmFyIHBsYW5lVG9Gb2xsb3cgPSBudWxsO1xyXG52YXIgY29sb3JzID0gWyBcImJsdWVcIixcIiMyNjc2NEVcIiwgXCIjRjA4NTI2XCIsIFwiIzlDRkY1NFwiLCBcIiM3MjFCNDlcIiwgXCIjQTdEOEY4XCIsXCIjMkFGREJDXCIsIFwiI0ZCRTg3MFwiLCBcIiM3MTEzMDJcIiwgXCIjMjU3MkMyXCIsIFwiIzFDMjcxRFwiLCBcIiM2MzJFODVcIixcclxuXHRcdFwiIzFFNUY3QVwiLCBcIiNEOEIyRjVcIiwgXCIjRDMwN0EyXCIsIFwiI0YzOTFCNVwiLCBcIiNGMTgwRjVcIiwgXCIjM0ExRTJFXCIsXCIjQUU3NzA3XCIsIFwiIzNFM0QwRVwiLCBcIiM2QUIwNkVcIiBdO1xyXG52YXIgY29sb3JfaW5kZXggPSAwO1xyXG52YXIgbmF2TWFwO1xyXG52YXIgZmxpZ2h0UGxhbiA9IHt9O1xyXG52YXIgZmxpZ2h0UGF0aDsgLy8gYW4gb2JqZWN0IGdvb2dsZS5tYXBzLlBvbHlsaW5lIC0gcmVwcmVzZW50aW5nIHRoZSBGbGlnaHQgUGxhblxyXG52YXIgbWFya2VycyA9IFtdO1xyXG52YXIgcm91dGVMYWJlbHNPZmZTZXQgPSBbXTtcclxudmFyIG1hcmtlcnNMYWJlbFJvdXRlID0gW107XHJcbnZhciBtYXJrZXJzV2F5cG9pbnQgICA9IFtdO1xyXG52YXIgZWxJbmZvQm94UGxhbmU7XHJcbnZhciBjaGFzZUFpcnBsYW5lID0gZmFsc2U7XHJcbnZhciBzaG93SGlkZUFpclBsYW5lUm91dGVzID0gZmFsc2U7XHJcblxyXG4kLmFqYXhTZXR1cCh7XHJcblx0Y2FjaGUgOiBmYWxzZVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblxyXG5cdG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwgbWFwT3B0aW9ucyk7XHJcblxyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2RyYWdzdGFydCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnI25vZm9jdXMnKS5jbGljaygpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCdib2R5Jykua2V5ZG93bihmdW5jdGlvbihlKSB7XHJcblx0XHQvLyBDaGFyYWN0ZXI6ICdcclxuXHRcdGlmIChlLmtleUNvZGUgPT0gMTkyKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dG9nZ2xlRmxpZ2h0UGFuZWwoKTtcclxuXHRcdH1cclxuXHRcdC8vIFBhdXNlIEtleVxyXG5cdFx0aWYgKGUua2V5Q29kZSA9PSAxOSkge1xyXG5cdFx0XHQkLmdldEpTT04oXCJwYXVzZVwiKS5kb25lKGZ1bmN0aW9uKGRhdGEpe30pLmVycm9yKGZ1bmN0aW9uKCkge3Nob3dFcnJvcignTm90IGFibGUgdG8gUGF1c2UgWC1QbGFuZS4nKX0pO1xyXG5cdFx0fVxyXG5cdFx0Ly8gQ2hhcmFjdGVyOiBDIFxyXG5cdFx0Ly8gUmVzdGFydCBBaXJQbGFuZSBSb3V0ZXNcclxuXHRcdGlmIChlLmtleUNvZGUgPT0gNjcpIHtcclxuXHRcdFx0Ly8gXHJcblx0XHRcdHZhciBuZXdUcmFjZVJvdXRlID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHBvbHlPcHRpb25zKTtcclxuXHRcdFx0bmV3VHJhY2VSb3V0ZS5zZXRNYXAobWFwKTtcclxuXHRcdFx0Zm9yIChpcFBsYW5lIGluIHBsYW5lTGlzdCkge1xyXG5cdFx0XHRcdHBsYW5lTGlzdFtpcFBsYW5lXS50cmFjZS5zZXRNYXAobnVsbCk7XHJcblx0XHRcdFx0cGxhbmVMaXN0W2lwUGxhbmVdLnRyYWNlID0gbmV3VHJhY2VSb3V0ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gQ2hhcmFjdGVyOiBIXHJcblx0XHQvLyBIaWRlL1Nob3cgQWlyUGxhbmUgUm91dGVzXHJcblx0XHRpZiAoZS5rZXlDb2RlID09IDcyKSB7XHJcblx0XHRcdGZvciAoaXBQbGFuZSBpbiBwbGFuZUxpc3QpIHtcclxuXHRcdFx0XHRpZiAoICFzaG93SGlkZUFpclBsYW5lUm91dGVzICkge1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwUGxhbmVdLnRyYWNlLnNldE1hcChudWxsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwUGxhbmVdLnRyYWNlLnNldE1hcChtYXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRzaG93SGlkZUFpclBsYW5lUm91dGVzID0gIXNob3dIaWRlQWlyUGxhbmVSb3V0ZXM7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0IG1hcC5hZGRMaXN0ZW5lcignem9vbV9jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XHJcblx0ICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvdXRlTGFiZWxzT2ZmU2V0Lmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgIFx0ICAgdmFyIGRpc3RMYWJlbFJvdXRlID0gMjQwMDA7XHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDE2ICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDtcclxuXHQgICAgXHQgICB9IGVsc2VcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTUgKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDUwMDtcclxuXHQgICAgXHQgICB9IGVsc2VcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTIgKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDUwMDA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDEwICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSAxMjAwMDtcclxuXHQgICAgXHQgICB9IGVsc2VcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gOCApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gMTYwMDA7XHJcblx0ICAgIFx0ICAgfVxyXG5cdCAgICBcdCAgIHZhciBoZGdMYWJlbCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhyb3V0ZUxhYmVsc09mZlNldFtpXS5sYXRsbmcsIHJvdXRlTGFiZWxzT2ZmU2V0W2ldLm5leHRMYXRMbmcpOyBcclxuXHQgICAgXHQgICB2YXIgb2Zmc2V0ID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQocm91dGVMYWJlbHNPZmZTZXRbaV0ubGF0bG5nLCBkaXN0TGFiZWxSb3V0ZSwgaGRnTGFiZWwsIDYzNzEwMDApO1xyXG5cdCAgICBcdCAgIG1hcmtlcnNMYWJlbFJvdXRlW2ldLnBvc2l0aW9uID0gb2Zmc2V0OyBcclxuICAgIFx0ICAgfVxyXG5cdCAgICB9LDEpO1xyXG5cdH0pO1xyXG5cdCBcclxuXHR1cGRhdGVQb3NpdGlvbigpO1xyXG5cdHNldEludGVydmFsKHVwZGF0ZVBvc2l0aW9uLCBwZXJpb2QpO1xyXG5cdHNldEludGVydmFsKGNoZWNrRmxpZ2h0UGxhbkJveEFuZExvYWQsIDIwMDApO1xyXG5cclxuXHQvLyBuYXYgZGF0YSBvdmVybGF5c1xyXG5cdC8qbmF2TWFwID0gbmV3IGdvb2dsZS5tYXBzLkltYWdlTWFwVHlwZSh7XHJcblx0XHRnZXRUaWxlVXJsIDogZnVuY3Rpb24oY29vcmQsIHpvb20pIHtcclxuXHRcdFx0dGlsZVNpemUgPSAyNTYgLyBNYXRoLnBvdygyLCB6b29tKTtcclxuXHRcdFx0d2VzdCA9IGNvb3JkLnggKiB0aWxlU2l6ZTtcclxuXHRcdFx0ZWFzdCA9IHdlc3QgKyB0aWxlU2l6ZTtcclxuXHRcdFx0bm9ydGggPSBjb29yZC55ICogdGlsZVNpemU7XHJcblx0XHRcdHNvdXRoID0gbm9ydGggKyB0aWxlU2l6ZTtcclxuXHJcblx0XHRcdG5vcnRoRWFzdCA9IG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbVBvaW50VG9MYXRMbmcoXHJcblx0XHRcdFx0XHRuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoZWFzdCwgbm9ydGgpKTtcclxuXHRcdFx0c291dGhXZXN0ID0gbWFwLmdldFByb2plY3Rpb24oKS5mcm9tUG9pbnRUb0xhdExuZyhcclxuXHRcdFx0XHRcdG5ldyBnb29nbGUubWFwcy5Qb2ludCh3ZXN0LCBzb3V0aCkpO1xyXG5cclxuXHRcdFx0Ly8gaHR0cDovL3gtcGxhbmUtbWFwLmZvdWMubmV0L25hdi5waHA/bm9ydGg9LTI0LjUyNzElMjAmc291dGg9LTI1Ljc5OTklMjAmZWFzdD0tNDYuNDA2MyUyMCZ3ZXN0PS00Ny44MTI1XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gWyAnaHR0cDovL3gtcGxhbmUtbWFwLmZvdWMubmV0L25hdi5waHA/bm9ydGg9JyxcclxuXHRcdFx0XHRcdG5vcnRoRWFzdC5sYXQoKS50b0ZpeGVkKDQpLCAnJnNvdXRoPScsXHJcblx0XHRcdFx0XHRzb3V0aFdlc3QubGF0KCkudG9GaXhlZCg0KSwgJyZlYXN0PScsXHJcblx0XHRcdFx0XHRub3J0aEVhc3QubG5nKCkudG9GaXhlZCg0KSwgJyZ3ZXN0PScsXHJcblx0XHRcdFx0XHRzb3V0aFdlc3QubG5nKCkudG9GaXhlZCg0KSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICogLCAnJnR5cGU9QVBUJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXS5qb2luKCcnKTtcclxuXHRcdH0sXHJcblx0XHR0aWxlU2l6ZSA6IG5ldyBnb29nbGUubWFwcy5TaXplKDI1NiwgMjU2KSxcclxuXHRcdG1pblpvb20gOiA2LFxyXG5cdFx0bWF4Wm9vbSA6IDEyXHJcblx0fSk7XHJcblxyXG5cdG1hcC5vdmVybGF5TWFwVHlwZXMucHVzaChuYXZNYXApO1xyXG5cdG5hdk1hcC5zZXRPcGFjaXR5KDApOyovXHJcbn1cclxuXHJcbnZhciBmbGlnaHRwbGFuVGV4dCA9ICdub25lJztcclxuZnVuY3Rpb24gY2hlY2tGbGlnaHRQbGFuQm94QW5kTG9hZCgpIHtcclxuXHRpZiAoJCgnI3BhbmVsLWZwJykuaXMoXCI6aGlkZGVuXCIpID09IGZhbHNlKSB7XHJcblx0XHR2YXIgdGV4dCA9ICQoJ3RleHRhcmVhI2JveEZsaWdodFBsYW4nKS52YWwoKTtcclxuXHRcdGlmICh0ZXh0ICE9IGZsaWdodHBsYW5UZXh0KSB7XHJcblx0XHRcdGZsaWdodHBsYW5UZXh0ID0gdGV4dDtcclxuXHRcdFx0dmFyIHBhcmFtcyA9IHt9O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGZsaWdodFBhdGggIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0ZmxpZ2h0UGF0aC5zZXRNYXAobnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2xlYXJNYXJrZXJzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoIGZsaWdodHBsYW5UZXh0Lmxlbmd0aCA+IDggKSB7XHJcblx0XHRcdFx0dmFyIGdyb3VwcyA9IGZsaWdodHBsYW5UZXh0LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xyXG5cdFx0XHRcdHZhciB3YXlwb2ludHMgPSBcIlwiO1xyXG5cdFx0XHRcdGlmICggZ3JvdXBzLmxlbmd0aCA+IDEgKSB7XHJcblx0XHRcdFx0ICAgIGZvcih2YXIgaSA9IDE7IGkgPCAoZ3JvdXBzLmxlbmd0aC0xKTsgaSsrKSB7XHJcblx0XHRcdFx0XHQgICB3YXlwb2ludHMgKz0gZ3JvdXBzW2ldO1xyXG5cdFx0XHRcdCAgICAgICBpZiAod2F5cG9pbnRzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHQgICAgICAgIFx0d2F5cG9pbnRzICs9IFwiK1wiO1xyXG5cdFx0XHRcdCAgICBcdH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwYXJhbXMgPSB7XHJcblx0XHRcdFx0ICAgIGRlcGFydHVyZSA6IGdyb3Vwc1swXSxcclxuXHRcdFx0XHQgICAgd2F5cG9pbnRzIDogd2F5cG9pbnRzLFxyXG5cdFx0XHRcdCAgICBkZXN0aW5hdGlvbiA6IGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKHRydWUpO1xyXG5cdFx0XHQkLmdldEpTT04oXCJmbGlnaHRwbGFuXCIscGFyYW1zXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdHNob3dFcnJvcihcIkVycm9yIGxvYWRpbmcgRmxpZ2h0IFBsYW4uIE5vIGNvbnRlbnQgd2FzIHJldHVybmVkLlwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRmbGlnaHRQbGFuID0gZGF0YTtcclxuXHRcdFx0XHRcdFx0bG9hZEZsaWdodFBsYW4oKTtcclxuXHRcdFx0XHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShmYWxzZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZXJyb3IoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRzaG93RXJyb3IoJ1BsZWFzZSBjaGVjayB0aGUgY29ubmVjdGlvbiB3aXRoIGh0dHA6Ly9zZXJ2ZXI6cG9ydC9mbGlnaHRwbGFuLCBpcyBub3Qgd29ya2luZy4nKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShsb2FkaW5nKSB7XHJcblx0aWYgKCBsb2FkaW5nICkge1xyXG5cdFx0JChcIiNmbGlnaHRwbGFuLWxvYWRpbmdcIikuc2hvdygpO1xyXG5cdFx0JChcIiNib3hGbGlnaHRQbGFuXCIpLmNzcygnY29sb3InLCAnbGlnaHRncmF5Jyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoXCIjZmxpZ2h0cGxhbi1sb2FkaW5nXCIpLmhpZGUoKTtcclxuXHRcdCQoXCIjYm94RmxpZ2h0UGxhblwiKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRmxpZ2h0UGxhbigpIHtcclxuXHQvLyBMb2FkaW5nIGZsaWdodFBsYW5Db29yZGluYXRlcyB2YXJpYWJsZVxyXG5cdHZhciBkZXBhcnR1cmVMYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4uZGVwYXJ0dXJlLmxhdGl0dWRlLCBmbGlnaHRQbGFuLmRlcGFydHVyZS5sb25naXR1ZGUpO1xyXG5cdHZhciBkZXN0aW5hdGlvbkxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5sYXRpdHVkZSwgZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5sb25naXR1ZGUpOyBcclxuXHR2YXIgYXJyQ29vcmQgPSBuZXcgQXJyYXkoKTtcclxuXHRhcnJDb29yZFswXSA9IGRlcGFydHVyZUxhdExuZztcclxuXHR2YXIgdG90YWxXYXlwb2ludHMgPSAwO1xyXG5cdHZhciB0b3RhbERpc3RhbmNlID0gMDtcclxuXHR3aGlsZSAodG90YWxXYXlwb2ludHMgPCBmbGlnaHRQbGFuLndheXBvaW50cy5sZW5ndGgpIHtcclxuXHRcdGFyckNvb3JkW3RvdGFsV2F5cG9pbnRzICsgMV0gPSBcclxuXHRcdFx0bmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcclxuXHRcdFx0XHRcdGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sYXRpdHVkZSxmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubG9uZ2l0dWRlXHJcblx0XHRcdCk7XHJcblx0XHQvLyBNYXJrIHRoZSBXYXlwb2ludFxyXG5cdFx0d2F5cG9pbnQgPSB7XHJcblx0XHRcdGlkIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmlkLFxyXG5cdFx0XHRsYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sYXRpdHVkZSxmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubG9uZ2l0dWRlKSxcclxuXHRcdFx0dHlwZSA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS50eXBlLFxyXG5cdFx0XHRkZXNjciA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5uYW1lLFxyXG5cdFx0XHRmcmVxIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmZyZXF1ZW5jeVxyXG5cdFx0fVxyXG5cdFx0bWFya1dheXBvaW50KHdheXBvaW50KTtcclxuXHJcblx0XHR0b3RhbFdheXBvaW50cysrO1xyXG5cdH1cclxuXHRhcnJDb29yZFt0b3RhbFdheXBvaW50cyArIDFdID0gZGVzdGluYXRpb25MYXRMbmc7XHJcblx0dmFyIGZsaWdodFBsYW5Db29yZGluYXRlcyA9IGFyckNvb3JkO1xyXG5cclxuXHQvLyBMb2FkaW5nIEZsaWdodCBQbGFuIFBvbHlsaW5lIC0gRHJhdyB0aGUgbGluZVxyXG5cdGZsaWdodFBhdGggPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUoe1xyXG5cdFx0cGF0aCA6IGZsaWdodFBsYW5Db29yZGluYXRlcyxcclxuXHRcdGdlb2Rlc2ljIDogZmFsc2UsXHJcblx0XHRzdHJva2VDb2xvciA6ICcjMDAwMEZGJyxcclxuXHRcdHN0cm9rZU9wYWNpdHkgOiAwLjUsXHJcblx0XHRzdHJva2VXZWlnaHQgOiA2XHJcblx0fSk7XHJcblx0ZmxpZ2h0UGF0aC5zZXRNYXAobWFwKTtcclxuXHJcblx0Ly8gTWFyayBmb3IgdGhlIEFpcnBvcnQgRGVwYXJ0dXJlXHJcblx0ZGVwYXJ0dXJlID0ge1xyXG5cdFx0aWQgOiBmbGlnaHRQbGFuLmRlcGFydHVyZS5pY2FvSWQsXHJcblx0XHRuYW1lIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUubmFtZSxcclxuXHRcdGxhdGxuZyA6IGRlcGFydHVyZUxhdExuZyxcclxuXHRcdHJ1bndheXMgOiBmbGlnaHRQbGFuLmRlcGFydHVyZS5hcnJheVJ1bndheXNcclxuXHR9XHJcblx0bWFya0FpcnBvcnQoZGVwYXJ0dXJlLCdkZXBhcnR1cmUnKTtcclxuXHJcblx0Ly8gTWFyayBmb3IgdGhlIEFpcnBvcnQgRGVzdGluYXRpb25cclxuXHRkZXN0aW5hdGlvbiA9IHtcclxuXHRcdGlkIDogZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5pY2FvSWQsXHJcblx0XHRuYW1lIDogZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5uYW1lLFxyXG5cdFx0bGF0bG5nIDogZGVzdGluYXRpb25MYXRMbmcsXHJcblx0XHRydW53YXlzIDogZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5hcnJheVJ1bndheXNcclxuXHR9XHJcblx0bWFya0FpcnBvcnQoZGVzdGluYXRpb24sJ2Rlc3RpbmF0aW9uJyk7XHJcblx0XHJcblx0Ly8gUGFuZWwgSW5mbyBGbGlnaHQgUGxhblxyXG5cdCQoXCIjZnBJbmZvLURlcGFydHVyZVwiKS50ZXh0KGRlcGFydHVyZS5pZCArICcgLSAnICsgZGVwYXJ0dXJlLm5hbWUgKyAnIEFpcnBvcnQnKTtcclxuXHQkKFwiI2ZwSW5mby1EZXN0aW5hdGlvblwiKS50ZXh0KGRlc3RpbmF0aW9uLmlkICsgJyAtICcgKyBkZXN0aW5hdGlvbi5uYW1lICsgJyBBaXJwb3J0Jyk7XHJcblx0XHJcblx0Ly8gTWFyayBMYWJlbHMgQmVhcmluZy9EaXN0YW5jZVxyXG5cdHZhciBpbmRleCA9IDA7XHJcblx0d2hpbGUgKGluZGV4IDwgZmxpZ2h0UGxhbi5pbmZvUm91dGUubGVuZ3RoKSB7XHJcblx0XHR0b3RhbERpc3RhbmNlICs9IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZU5NO1xyXG5cdFx0bGFiZWxSb3V0ZSA9IHtcclxuXHRcdFx0ZGlzdGFuY2VOTSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZU5NLFxyXG5cdFx0XHRkaXN0YW5jZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZSxcclxuXHRcdFx0YmVhcmluZyA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5iZWFyaW5nLFxyXG5cdFx0XHRiZWFyaW5nRGVncmVlIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmdEZWdyZWUsXHJcblx0XHRcdGxhdGxuZyA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXHJcblx0XHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5sYXRpdHVkZSxcclxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmxvbmdpdHVkZSksXHJcblx0XHRcdG5leHRMYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxyXG5cdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLm5leHRMYXRpdHVkZSxcclxuXHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0TG9uZ2l0dWRlKSxcclxuXHRcdFx0cm90YXRlIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmcsXHJcblx0XHRcdG5leHRQb2ludCA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0UG9pbnQsXHJcblx0XHRcdGN1cnJlbnRQb2ludCA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5jdXJyZW50UG9pbnQsXHJcblx0XHRcdGNvbXBhc3NIZWFkaW5nIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmNvbXBhc3NIZWFkaW5nXHJcblx0XHR9XHJcblx0XHRtYXJrTGFiZWxSb3V0ZShsYWJlbFJvdXRlKTtcclxuXHRcdGluZGV4Kys7XHJcblx0fVxyXG5cclxuXHQkKFwiI2ZwSW5mby1Sb3V0ZURpc3RhbmNlXCIpXHJcblx0XHQudGV4dChcclxuXHRcdFx0bnVtZXJhbCh0b3RhbERpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgJ25tJyArICcgLyAnICtcclxuXHRcdFx0bnVtZXJhbCgodG90YWxEaXN0YW5jZSAqIDEuODUyKSkuZm9ybWF0KCcwLDAnKSArICdrbSdcclxuXHQgICAgICAgICk7XHJcblx0ICAgICAgICBcclxuXHR2YXIgcGFuRmxpZ2h0UGxhbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoZGVwYXJ0dXJlTGF0TG5nLCBkZXN0aW5hdGlvbkxhdExuZyk7XHJcblx0bWFwLmZpdEJvdW5kcyhwYW5GbGlnaHRQbGFuKTtcclxuXHQvL21hcC5wYW5Ub0JvdW5kcyhwYW5GbGlnaHRQbGFuKTtcclxuXHQvL21hcC5zZXRab29tKDEwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZU1hcmsobSkge1xyXG5cdG1hcmtlcnMucHVzaChtKTtcclxufVxyXG5mdW5jdGlvbiBjbGVhck1hcmtlcnMoKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBtYXJrZXJzW2ldLnNldE1hcChudWxsKTtcclxuICB9XHJcbiAgcm91dGVMYWJlbHNPZmZTZXQgPSBbXTtcclxuICBtYXJrZXJzTGFiZWxSb3V0ZSA9IFtdO1xyXG4gIG1hcmtlcnNXYXlwb2ludCAgID0gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtMYWJlbFJvdXRlKGxhYmVsUm91dGUpIHtcclxuXHQvL3ZhciBkaXN0TGFiZWwgPSBsYWJlbFJvdXRlLmRpc3RhbmNlTk0gKiAxLjg1MjsgLy8gY29udmVydCBubSB0byBtZXRlcnNcclxuXHQvL3ZhciBoZGdMYWJlbCA9IGxhYmVsUm91dGUuYmVhcmluZ0RlZ3JlZSAtIDIyO1xyXG5cdC8vdmFyIGRpc3RMYWJlbCA9IDI0MDAwOyBcclxuXHRyb3V0ZUxhYmVsc09mZlNldC5wdXNoKFxyXG5cdFx0e1xyXG5cdFx0XHRsYXRsbmcgOiBsYWJlbFJvdXRlLmxhdGxuZyxcclxuXHRcdFx0bmV4dExhdExuZyA6IGxhYmVsUm91dGUubmV4dExhdGxuZ1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0dmFyIGRpc3RMYWJlbFJvdXRlID0gMTIwMDA7XHJcblx0dmFyIGhkZ0xhYmVsID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKGxhYmVsUm91dGUubGF0bG5nLCBsYWJlbFJvdXRlLm5leHRMYXRsbmcpOyBcclxuXHR2YXIgb2Zmc2V0ID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQobGFiZWxSb3V0ZS5sYXRsbmcsIGRpc3RMYWJlbFJvdXRlLCBoZGdMYWJlbCwgNjM3MTAwMCk7XHJcblx0dmFyIGFuZ2xlUm90YXRlID0gaGRnTGFiZWwgLSA5MDtcclxuXHRpZiAoIGFuZ2xlUm90YXRlID4gLTI3MCAmJiBhbmdsZVJvdGF0ZSA8IC05MCApIHtcclxuXHRcdCBhbmdsZVJvdGF0ZSA9IGFuZ2xlUm90YXRlIC0gMTgwO1xyXG5cdH1cclxuXHR2YXIgbGFiZWwgPSBsYWJlbFJvdXRlLmJlYXJpbmcgKyBcIiZkZWcgXCIgKyBudW1lcmFsKGxhYmVsUm91dGUuZGlzdGFuY2UpLmZvcm1hdCgnMCwwJykgKyBcIm5tXCI7XHJcblx0dmFyIHggPSAyMztcclxuXHR2YXIgeSA9IDA7XHJcblx0dmFyIGFuY2hvciA9IG5ldyBnb29nbGUubWFwcy5Qb2ludCh4LCB5KTtcclxuXHR2YXIgbWFya2VyTGFiZWxSb3V0ZSA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xyXG5cdFx0cG9zaXRpb24gOiBvZmZzZXQsXHJcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuXHRcdGxhYmVsQ29udGVudCA6IGxhYmVsLFxyXG5cdFx0bGFiZWxBbmNob3IgOiBhbmNob3IsXHJcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNJbmZvUm91dGVcIixcclxuXHRcdGNsaWNrYWJsZSA6IHRydWUsXHJcblx0XHRpY29uIDogaWNvbkxhYmVsUm91dGUsXHJcblx0XHRyb3RhdGUgOiBhbmdsZVJvdGF0ZVxyXG5cdH0pO1xyXG5cdFxyXG5cdHZhciBpbmZvQ29udGVudCA9IFwiPHRhYmxlIHdpZHRoPScxMDAlJyBib3JkZXI9MCBjbGFzcz0ncnVud2F5VGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPlwiO1xyXG5cdFxyXG5cdGluZm9Db250ZW50ICs9IFwiPHRhYmxlICB3aWR0aD0nMTAwJScgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgdmFsaWduPSdtaWRkbGUnIHdpZHRoPSczMHB4Jz48aW1nIHNyYz0nYXJyb3cucG5nJz48L3RkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRkIHZhbGlnbj0nbWlkZGxlJyB3aWR0aD0nMTUwcHgnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiJm5ic3A7Jm5ic3A7Jm5ic3A7Um91dGU6PGJyPjxiPiZuYnNwOyZuYnNwO1wiICsgbGFiZWxSb3V0ZS5jdXJyZW50UG9pbnQgKyBcclxuXHRcdFx0XHQgICBcIjwvYj4mbmJzcDt0byZuYnNwOzxiPlwiICsgbGFiZWxSb3V0ZS5uZXh0UG9pbnQgKyBcIjwvYj48L3RkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPjwvdGFibGU+XCI7XHJcblx0XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPjxocj48L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPSc2MHB4Jz5cIjtcclxuXHRpbmZvQ29udGVudCArPSAgIFwiRGlzdGFuY2U6PC90ZD48dGQ+IDxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgXHJcblx0XHRcdFx0XHRcdFx0XHRudW1lcmFsKGxhYmVsUm91dGUuZGlzdGFuY2UpLmZvcm1hdCgnMCwwJykgKyBcIm5tPC9zcGFuPiZuYnNwOyZuYnNwOy8mbmJzcDsmbmJzcDtcIiArIFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcmFsKE1hdGguY2VpbChsYWJlbFJvdXRlLmRpc3RhbmNlTk0gLyAwLjUzOTk2KSkuZm9ybWF0KCcwLDAnKSArXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrbTwvc3Bhbj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gICBcIkhlYWRpbmc6PC90ZD48dGQ+IDxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgbGFiZWxSb3V0ZS5iZWFyaW5nICsgXCImZGVnPC9zcGFuPiZuYnNwOyZuYnNwOy8mbmJzcDsmbmJzcDtcIiArIFxyXG4gICAgXHRcdFx0XHQgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIGxhYmVsUm91dGUuY29tcGFzc0hlYWRpbmcgKyBcIjwvc3Bhbj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0dmFyIGluZm9Cb3ggPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiAnPGRpdiBpZD1cIml3X2NvbnRlbnRcIj4nICsgaW5mb0NvbnRlbnQgKyAnPC9kaXY+JyxcclxuXHRcdHBpeGVsT2Zmc2V0OiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgtMzAsLTI1LFwicHhcIixcInB4XCIpXHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyTGFiZWxSb3V0ZSwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGluZm9Cb3gub3BlbihtYXAsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckxhYmVsUm91dGUsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGNoYW5nZUNvbG9ySW5mb0JveChlbCxcInJnYigyNTUsMjU1LDI1NSlcIik7XHJcblx0XHRcdGluZm9Cb3guY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvQm94LCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcImhpZGRlblwiKTtcclxuXHRcdGNoYW5nZUNvbG9ySW5mb0JveChlbCxcInJnYmEoMTI3LDI1NSwyMTIsMC44MilcIik7XHJcblx0fSk7XHJcblx0XHJcblx0bWFya2VyTGFiZWxSb3V0ZS5zZXRNYXAobWFwKTtcclxuXHRzYXZlTWFyayhtYXJrZXJMYWJlbFJvdXRlKTtcclxuXHRtYXJrZXJzTGFiZWxSb3V0ZS5wdXNoKG1hcmtlckxhYmVsUm91dGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrQWlycG9ydChhaXJwb3J0LHR5cGUpIHtcclxuXHR2YXIgbWFya2VyQWlycG9ydCA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xyXG5cdFx0cG9zaXRpb24gOiBhaXJwb3J0LmxhdGxuZyxcclxuXHRcdGFuaW1hdGlvbiA6IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG5cdFx0aWNvbiA6IGljb25BaXJwb3J0LFxyXG5cdFx0bGFiZWxDb250ZW50IDogYWlycG9ydC5pZCxcclxuXHRcdGxhYmVsQW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDIwLCA3MCksXHJcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNBaXJwb3J0XCJcclxuXHR9KTtcclxuXHJcblx0dmFyIGltYWdlID0gXCI8aW1nIHNyYz0ndGFrZW9mZi5wbmcnLz5cIjtcclxuXHRpZiAoIHR5cGUgPT0gJ2Rlc3RpbmF0aW9uJyApIHtcclxuXHRcdGltYWdlID0gXCI8aW1nIHNyYz0nbGFuZGluZy5wbmcnLz5cIjtcclxuXHR9XHJcblx0dmFyIGluZm9Db250ZW50ID0gXCJcIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSBib3JkZXI9MCB3aWR0aD0nMTAwJScgY2xhc3M9J3J1bndheVRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nNjBweCcgYWxpZ249J2xlZnQnPlwiICsgaW1hZ2UgKyBcIjwvdGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8Yj5cIiArIGFpcnBvcnQuaWQgKyBcIjwvYj4gLSBcIiArIGFpcnBvcnQubmFtZTtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nNCc+PGhyPjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgd2lkdGg9JzEwMCUnIGJvcmRlcj0wIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFpcnBvcnQucnVud2F5cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+XCJcclxuXHRcdFx0XHQrIFwiIDx0ZD5SdW53YXkgPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXHJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0ubnVtYmVyXHJcblx0XHRcdFx0KyBcIjwvc3Bhbj48L3RkPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7SGVhZGluZzogPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXHJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0uaGVhZGluZ1xyXG5cdFx0XHRcdCsgXCI8Zm9udCBzaXplPScycHgnPiZkZWc7PC9mb250Pjwvc3Bhbj48L3RkPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RnJlcXVlbmN5OiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcclxuXHRcdFx0XHQrIGFpcnBvcnQucnVud2F5c1tpXS5mcmVxdWVuY3kgKyBcIjwvc3Bhbj48YnIvPjwvdGQ+XCJcclxuXHRcdFx0XHQrIFwiIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtFbGV2YXRpb246IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxyXG5cdFx0XHRcdCsgbnVtZXJhbChhaXJwb3J0LnJ1bndheXNbaV0uZWxldmF0aW9uKS5mb3JtYXQoJzAsMCcpICsgXCIgZnQ8L3NwYW4+PGJyLz48L3RkPlwiICsgXCI8L3RyPlwiO1xyXG5cdH1cclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblxyXG5cdHZhciBpbmZvTTEgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiAnPGRpdiBpZD1cIml3X2NvbnRlbnRcIj4nICsgaW5mb0NvbnRlbnQgKyAnPC9kaXY+J1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckFpcnBvcnQsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGluZm9NMS5vcGVuKG1hcCwgdGhpcyk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyQWlycG9ydCwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XHJcblx0XHR9XHJcblx0XHRpbmZvTTEuY2xvc2UoKTtcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvTTEsICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcInZpc2libGVcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0bWFya2VyQWlycG9ydC5zZXRNYXAobWFwKTtcclxuXHRzYXZlTWFyayhtYXJrZXJBaXJwb3J0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya1dheXBvaW50KHdheXBvaW50KSB7XHJcblx0dmFyIGljb25XUFQgPSBpY29uV2F5cG9pbnQ7XHJcblx0dmFyIGluZm9Db250ZW50ID0gXCJcIjtcclxuXHRpZiAod2F5cG9pbnQudHlwZSA9PSAxKSB7XHJcblx0XHRpY29uV1BUID0gaWNvblZPUjtcclxuXHR9IGVsc2UgaWYgKHdheXBvaW50LnR5cGUgPT0gMikge1xyXG5cdFx0aWNvbldQVCA9IGljb25OREI7XHJcblx0fVxyXG5cclxuXHR2YXIgbWFya2VyV2F5cG9pbnQgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcclxuXHRcdHBvc2l0aW9uIDogd2F5cG9pbnQubGF0bG5nLFxyXG5cdFx0YW5pbWF0aW9uIDogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcblx0XHRpY29uIDogaWNvbldQVCxcclxuXHRcdGxhYmVsQ29udGVudCA6IHdheXBvaW50LmlkLFxyXG5cdFx0bGFiZWxBbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjgsIC02KSxcclxuXHRcdGxhYmVsQ2xhc3MgOiBcImxhYmVsc1dheXBvaW50XCJcclxuXHR9KTtcclxuXHRpZiAod2F5cG9pbnQudHlwZSA9PSAnVk9SJyB8fCB3YXlwb2ludC50eXBlID09ICdOREInKSB7XHJcblx0XHQvLyBWT1IgYW5kIE5EQlxyXG5cdFx0aW5mb0NvbnRlbnQgPSBcIjx0YWJsZSBib3JkZXI9MCBjbGFzcz0ndm9yVGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzMzMHB4Jz5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHZhbGlnbj0nbWlkZGxlJyBjb2xzcGFuPTI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIiAgPHRhYmxlIGJvcmRlcj0wIGNsYXNzPSd2b3JUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz48dHI+PHRkPlwiO1xyXG5cdFx0aWYgKHdheXBvaW50LnR5cGUgPT0gJ1ZPUicpIHtcclxuXHRcdFx0Ly8gVk9SXHJcblx0XHRcdGluZm9Db250ZW50ICs9IFwiIDxpbWcgc3JjPSdWT1IucG5nJy8+XCI7XHJcblx0XHR9IGVsc2UgaWYgKHdheXBvaW50LnR5cGUgPT0gJ05EQicpIHtcclxuXHRcdFx0Ly8gTkJEXHJcblx0XHRcdGluZm9Db250ZW50ICs9IFwiIDxpbWcgc3JjPSdOREIucG5nJy8+XCI7XHJcblx0XHR9XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjwvdGQ+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0ZD4mbmJzcDsmbmJzcDsmbmJzcDs8Yj5cIiArIHdheXBvaW50LmlkICsgXCI8L2I+IC0gXCJcclxuXHRcdFx0XHQrIHdheXBvaW50LmRlc2NyICsgXCI8L3RkPlwiICsgXCI8L3RyPjwvdGFibGU+XCJcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMjAlJz4gRnJlcXVlbmN5OiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHdheXBvaW50LmZyZXEgKyBcIjwvdGQ+XCIgKyBcIjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzElJz4gTGF0aXR1ZGU6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgcHJlY2lzaW9uRGVjaW1hbE51bWJlcih3YXlwb2ludC5sYXRsbmcubGF0KCkpICsgXCI8L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+IExvbmdpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sbmcoKSkgKyBcIjxici8+PC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBGSVhcclxuXHRcdGluZm9Db250ZW50ID0gXCI8dGFibGUgYm9yZGVyPTAgY2xhc3M9J3ZvclRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMjBweCc+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0ZCBjb2xzcGFuPTI+PGI+XCIgKyB3YXlwb2ludC5pZCArIFwiPC9iPjwvdGQ+PC90cj5cIlxyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPjxoci8+PC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPScxJSc+IExhdGl0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxhdCgpKSArIFwiPC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPiBMb25naXR1ZGU6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgcHJlY2lzaW9uRGVjaW1hbE51bWJlcih3YXlwb2ludC5sYXRsbmcubG5nKCkpICsgXCI8YnIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHR9XHJcblx0dmFyIGluZm9NMSA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6ICc8ZGl2IGlkPVwiaXdfY29udGVudFwiPicgKyBpbmZvQ29udGVudCArICc8L2Rpdj4nXHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyV2F5cG9pbnQsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGluZm9NMS5vcGVuKG1hcCwgdGhpcyk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyV2F5cG9pbnQsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwiaGlkZGVuXCIpO1xyXG5cdFx0fVxyXG5cdFx0aW5mb00xLmNsb3NlKCk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb00xLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJ2aXNpYmxlXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG1hcmtlcldheXBvaW50LnNldE1hcChtYXApO1xyXG5cdHNhdmVNYXJrKG1hcmtlcldheXBvaW50KTtcclxuXHRtYXJrZXJzV2F5cG9pbnQucHVzaChtYXJrZXJXYXlwb2ludCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9ySW5mb0JveChlbCxjb2xvcikge1xyXG5cdGRpdkNvbG9yID0gZWwuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdGRpdkNvbG9yLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gdmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxzdGF0dXNBcnJvdyxzdGF0dXNDbG9zZUJ1dHRvbikge1xyXG5cdGRpdkVsID0gZWwuZmlyc3RDaGlsZDtcclxuICAgIGNoaWxkMSA9IGRpdkVsLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGlsZDMgPSBjaGlsZDEubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGlmICggY2hpbGQzICE9IHVuZGVmaW5lZCApIHtcclxuICAgIFx0Y2hpbGQxLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNBcnJvdztcclxuICAgIFx0Y2hpbGQzLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNBcnJvdztcclxuXHQgICAgLy8gUmVtb3ZlIENsb3NlIEJ1dHRvblxyXG5cdCAgICBkaXZDbG9zZUJ1dHRvbiA9IGRpdkVsLnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdCAgICAvL2RpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXM7XHJcblx0ICAgIGlmICggc3RhdHVzQ2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICkge1xyXG5cdCAgICBcdGRpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNDbG9zZUJ1dHRvbjtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgXHRkaXZDbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHQgICAgfVxyXG5cdCAgICBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJlY2lzaW9uRGVjaW1hbE51bWJlcih2bHIpIHtcclxuXHRyZXR1cm4gcGFyc2VGbG9hdChNYXRoLnJvdW5kKHZsciAqIDEwMDAwMCkgLyAxMDAwMDApLnRvRml4ZWQoNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG5cdCQuZ2V0SlNPTihcclxuXHRcdFx0XCJkYXRhXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHQvKnNob3dFcnJvcihcIkxpc3RlbmluZyBhdCBYLVBsYW5lJ3MgVURQIHRyYWZmaWMgcG9ydCA0OTAwMy4gXCJcclxuXHRcdFx0XHRcdFx0XHQrIFwiUGxlYXNlIGNoZWNrIHRoZSBzZXR0aW5ncyBhdCB0aGUgWC1QbGFuZSdzIE5ldCBDb25uZWN0aW9ucyBtZW51LlwiKTsqL1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBkZWxldGUgYWxsIGFic2VudCBwbGFuZXNcclxuXHRcdFx0XHRmb3IgKCB2YXIgaXAgaW4gcGxhbmVMaXN0KSB7XHJcblx0XHRcdFx0XHRpZiAoIShpcCBpbiBkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRkZWxldGVQbGFuZShpcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGZvciBjdXJyZW50IGFuZCBuZXcgcGxhbmVzXHJcblx0XHRcdFx0Zm9yICggdmFyIGlwIGluIGRhdGEpIHtcclxuXHRcdFx0XHRcdC8vIGlmIG5ldyBwbGFuZVxyXG5cdFx0XHRcdFx0aWYgKCEoaXAgaW4gcGxhbmVMaXN0KSkge1xyXG5cdFx0XHRcdFx0XHRjb2xvciA9IG5leHRDb2xvcigpO1xyXG5cdFx0XHRcdFx0XHRtYXJrZXJPcHRpb25zLmljb24uZmlsbENvbG9yID0gY29sb3I7XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0gPSB7XHJcblx0XHRcdFx0XHRcdFx0bmFtZSA6IGlwLnJlcGxhY2UoLy0vZywgJy4nKSxcclxuXHRcdFx0XHRcdFx0XHRsb24gOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGxhdCA6IDAsXHJcblx0XHRcdFx0XHRcdFx0YWx0IDogZGF0YVtpcF0uYWx0TWFwLFxyXG5cdFx0XHRcdFx0XHRcdG1hcmtlciA6IG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyT3B0aW9ucyksXHJcblx0XHRcdFx0XHRcdFx0dHJhY2UgOiBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUocG9seU9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0XHRcdGluZm8gOiBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdygpLFxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yIDogY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0dlNwZWVkIDogZGF0YVtpcF0udlNwZWVkLFxyXG5cdFx0XHRcdFx0XHRcdGFpclNwZWVkIDogZGF0YVtpcF0uYWlyU3BlZWQsXHJcblx0XHRcdFx0XHRcdFx0Z1NwZWVkIDogZGF0YVtpcF0uZ3JvdW5kU3BlZWQsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGluZyA6IGRhdGFbaXBdLmJlYXJpbmcsXHJcblx0XHRcdFx0XHRcdFx0ZGVzdCA6IGRhdGFbaXBdLmRlc3RpbmF0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdGdwc0Rpc3RObSA6IGRhdGFbaXBdLmdwc0Rpc3RhbmNlTm0sXHJcblx0XHRcdFx0XHRcdFx0Z3BzRGlzdFRpbWUgOiBkYXRhW2lwXS5ncHNEaXN0YW5jZVRpbWUsXHJcblx0XHRcdFx0XHRcdFx0bmF2MSA6IGRhdGFbaXBdLm5hdjFGcmVxLFxyXG5cdFx0XHRcdFx0XHRcdG5hdjIgOiBkYXRhW2lwXS5uYXYyRnJlcSxcclxuXHRcdFx0XHRcdFx0XHRiYXJvbWV0ZXIgOiBkYXRhW2lwXS5iYXJvbWV0ZXIsXHJcblx0XHRcdFx0XHRcdFx0ZnVlbFF1YW50aXR5IDogZGF0YVtpcF0uZnVlbFF1YW50aXR5LFxyXG5cdFx0XHRcdFx0XHRcdG91dHNpZGVUZW1wIDogZGF0YVtpcF0ub3V0c2lkZVRlbXBlcmF0dXJlLFxyXG5cdFx0XHRcdFx0XHRcdGNvbTEgOiBkYXRhW2lwXS5jb20xRnJlcSxcclxuXHRcdFx0XHRcdFx0XHRjb20yIDogZGF0YVtpcF0uY29tMkZyZXEsXHJcblx0XHRcdFx0XHRcdFx0Y29tcGFzc0hlYWRpbmcgOiBkYXRhW2lwXS5jb21wYXNzSGVhZGluZ1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm1hcmtlci5zZXRNYXAobWFwKTtcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuaXAgPSBpcDsgXHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaW5mb1dpbmRvd0xpc3RlbmVyID0gZ29vZ2xlLm1hcHMuZXZlbnRcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLm1hcmtlciwnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhbmVMaXN0W3RoaXMuaXBdLmluZm8ub3BlbihtYXAscGxhbmVMaXN0W3RoaXMuaXBdLm1hcmtlcik7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5pbmZvLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxJbmZvQm94UGxhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdFx0XHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbEluZm9Cb3hQbGFuZSxcInZpc2libGVcIixcInZpc2libGVcIik7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm8sJ2Nsb3NlY2xpY2snLGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbEluZm9Cb3hQbGFuZSxcImhpZGRlblwiKTtcclxuXHRcdFx0XHRcdFx0XHRlbEluZm9Cb3hQbGFuZSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnRyYWNlLnNldE1hcChtYXApO1xyXG5cdFx0XHRcdFx0XHRwbGFuZVRvRm9sbG93ID0gaXA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuZXdMYXQgICAgICAgICAgICAgICAgICAgICAgID0gZGF0YVtpcF0ubGF0TWFwO1xyXG5cdFx0XHRcdFx0bmV3TG9uICAgICAgICAgICAgICAgICAgICAgICA9IGRhdGFbaXBdLmxvbk1hcDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uYWx0ICAgICAgICAgICAgPSBkYXRhW2lwXS5hbHRNYXA7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnZTcGVlZCAgICAgICAgID0gZGF0YVtpcF0udlNwZWVkO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5haXJTcGVlZCAgICAgICA9IGRhdGFbaXBdLmFpclNwZWVkO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5oZWFkaW5nICAgICAgICA9IGRhdGFbaXBdLmJlYXJpbmc7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmRlc3QgICAgICAgICAgID0gZGF0YVtpcF0uZGVzdGluYXRpb247XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmdwc0Rpc3RObSAgICAgID0gZGF0YVtpcF0uZ3BzRGlzdGFuY2VObTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZ3BzRGlzdFRpbWUgICAgPSBkYXRhW2lwXS5ncHNEaXN0YW5jZVRpbWU7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmdTcGVlZCAgICAgICAgID0gZGF0YVtpcF0uZ3JvdW5kU3BlZWQ7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm5hdjEgICAgICAgICAgID0gZGF0YVtpcF0ubmF2MUZyZXE7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm5hdjIgICAgICAgICAgID0gZGF0YVtpcF0ubmF2MkZyZXE7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmJhcm9tZXRlciAgICAgID0gZGF0YVtpcF0uYmFyb21ldGVyO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5mdWVsUXVhbnRpdHkgICA9IGRhdGFbaXBdLmZ1ZWxRdWFudGl0eTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ub3V0c2lkZVRlbXAgICAgPSBkYXRhW2lwXS5vdXRzaWRlVGVtcGVyYXR1cmU7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmNvbTEgICAgICAgICAgID0gZGF0YVtpcF0uY29tMUZyZXE7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmNvbTIgICAgICAgICAgID0gZGF0YVtpcF0uY29tMkZyZXE7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmNvbXBhc3NIZWFkaW5nID0gZGF0YVtpcF0uY29tcGFzc0hlYWRpbmc7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciBuZXdQb2ludCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmV3TGF0LG5ld0xvbik7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm1hcmtlci5zZXRQb3NpdGlvbihuZXdQb2ludCk7XHJcblx0XHRcdFx0XHR2YXIgaWNvbiA9IHBsYW5lTGlzdFtpcF0ubWFya2VyLmdldEljb24oKTtcclxuXHRcdFx0XHRcdGljb24ucm90YXRpb24gPSBwbGFuZUxpc3RbaXBdLmhlYWRpbmc7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm1hcmtlci5zZXRJY29uKGljb24pO1xyXG5cdFx0XHRcdFx0Ly8gYWRkIG5ldyBwb2ludCB0byBsaW5lXHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnRyYWNlLmdldFBhdGgoKS5wdXNoKG5ld1BvaW50KTtcclxuXHRcdFx0XHRcdHZhciBhaXJwbGFuZUxhYmVsID0gIHBsYW5lTGlzdFtpcF0ubmFtZTtcclxuXHRcdFx0XHRcdGlmICggYWlycGxhbmVMYWJlbCA9PSAnMTI3LjAuMC4xJyApIHtcclxuXHRcdFx0XHRcdFx0IGFpcnBsYW5lTGFiZWwgPSAnWU9VJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vdmFyIGhkZ0FpcnBsYW5lID0gTnVtYmVyKE1hdGguZmxvb3IoKChwbGFuZUxpc3RbaXBdLmhlYWRpbmcgKyAzNjApICUgMzYwKSkpICsgMjI7XHJcblx0XHRcdFx0XHR2YXIgaGRnQWlycGxhbmUgPSBwbGFuZUxpc3RbaXBdLmNvbXBhc3NIZWFkaW5nO1xyXG5cdFx0XHRcdFx0dmFyIGluZm9Db250ZW50ID0gXCI8ZGl2IGlkPSdpd19jb250ZW50Jz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPGRpdiBzdHlsZT0nbWFyZ2luOiAwOyB3aWR0aDogNTAwcHg7Jz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPHRhYmxlIGJvcmRlcj0wIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzEwMCUnPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHI+PHRkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgIDx0YWJsZSBib3JkZXI9MCBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMDAlJz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPHRyPjx0ZCBzdHlsZT0naGVpZ2h0OjMwcHg7Jz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPGI+XCIgKyBhaXJwbGFuZUxhYmVsICsgXCI8L2I+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDwvdGQ+PC90cj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPHRyPjx0ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPC90ZD48L3RyPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgIDwvdGFibGU+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RkPjwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciBiYWNrQ29sb3IgPSAnbGlnaHRncmF5JztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyPjx0ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0YWJsZSBzdHlsZT0nYm9yZGVyOnNvbGlkIDFweCBkYXJrZ3JheTtmb250LXdlaWdodDpib2xkOycgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScyJyB3aWR0aD0nMTAwJSc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHdpZHRoPSc4MHB4Jz5EZXN0aW5hdGlvbjo8L3RkPjx0ZCBjb2xzcGFuPSc1Jz48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmRlc3QgKyBcIjwvc3Bhbj48L3RkPlwiOyBcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0cj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5EaXN0YW5jZTo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmdwc0Rpc3RObSArIFwiPC9zcGFuPiZuYnNwO25tPC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQgd2lkdGg9JzYwcHgnPkVURTo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmdwc0Rpc3RUaW1lICsgXCI8L3NwYW4+Jm5ic3A7PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPHRyIHN0eWxlPSdiYWNrZ3JvdW5kOlwiICsgYmFja0NvbG9yICsgXCI7Jz48dGQ+IEFsdGl0dWRlOiA8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBudW1lcmFsKHBsYW5lTGlzdFtpcF0uYWx0LnRvRml4ZWQoKSkuZm9ybWF0KCcwLDAnKSArIFwiPC9zcGFuPiZuYnNwO2Z0IE1TTCZuYnNwOyZuYnNwOzwvdGQ+XCJcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICsgXCI8dGQ+SGVhZGluZzo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBoZGdBaXJwbGFuZSArIFwiJmRlZzs8L3NwYW4+PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgQWlyU3BlZWQ6IDwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIG51bWVyYWwocGxhbmVMaXN0W2lwXS5haXJTcGVlZCkuZm9ybWF0KCcwLDAnKSArIFwiPC9zcGFuPiZuYnNwO2t0czwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aWYgKCBwbGFuZUxpc3RbaXBdLnZTcGVlZCA+IC0xICkge1xyXG5cdFx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+VlM6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPlZTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvUmVkJz5cIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IG51bWVyYWwocGxhbmVMaXN0W2lwXS52U3BlZWQpLmZvcm1hdCgnMCwwJykgKyBcIjwvc3Bhbj4mbmJzcDtmcG0mbmJzcDsmbmJzcDs8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyIHN0eWxlPSdiYWNrZ3JvdW5kOlwiICsgYmFja0NvbG9yICsgXCI7Jz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5OYXYxOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0ubmF2MSArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+Q29tMTo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmNvbTEgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPjx0cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk5hdjI6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5uYXYyICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkNvbTI6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5jb20yICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyIHN0eWxlPSdiYWNrZ3JvdW5kOlwiICsgYmFja0NvbG9yICsgXCI7Jz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5CYXJvbWV0ZXI6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5iYXJvbWV0ZXIgKyBcIjwvc3Bhbj48L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkZ1ZWw6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5mdWVsUXVhbnRpdHkgKyBcIjwvc3Bhbj48L3RkPlwiOyBcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+PHRyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+T0FUOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0ub3V0c2lkZVRlbXAgKyBcIjwvc3Bhbj4mZGVnOyZuYnNwPC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5HUzo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwYXJzZUZsb2F0KHBsYW5lTGlzdFtpcF0uZ1NwZWVkKS50b0ZpeGVkKCkgKyBcIjwvc3Bhbj4mbmJzcDtrdHM8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdGFibGU+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RkPjwvdHI+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvZGl2PlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L2Rpdj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gc2V0IGluZm8gd2luZG93IGNvbnRlbnRcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaW5mby5zZXRDb250ZW50KGluZm9Db250ZW50KTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubG9uID0gbmV3TG9uO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5sYXQgPSBuZXdMYXQ7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmhkZyA9IHBsYW5lTGlzdFtpcF0uaGVhZGluZztcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uc3BkID0gcGxhbmVMaXN0W2lwXS5nU3BlZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIG1vdmUgbWFwIGlmIGNoZWNrYm94IGNoZWNrZWRcclxuXHRcdFx0XHRpZiAoIGNoYXNlQWlycGxhbmUgKSB7XHJcblx0XHRcdFx0XHRpZiAoIHBsYW5lTGlzdFtwbGFuZVRvRm9sbG93XSAhPSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRcdG1hcC5wYW5UbyhuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBsYW5lTGlzdFtwbGFuZVRvRm9sbG93XS5sYXQscGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddLmxvbikpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHQuZXJyb3IoXHJcblx0XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNob3dFcnJvcignT3BzISBNYXlkYXkhIE1heWRheSEgSmF2YSBTZXJ2ZXIgaXMgZG93biEhIScpXHJcblx0XHRcdH0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYmVhcmluZyhsb24xLCBsYXQxLCBsb24yLCBsYXQyKSB7XHJcblx0bG9uMSA9IGxvbjEgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdGxvbjIgPSBsb24yICogTWF0aC5QSSAvIDE4MDtcclxuXHRsYXQxID0gbGF0MSAqIE1hdGguUEkgLyAxODA7XHJcblx0bGF0MiA9IGxhdDIgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdHZhciB5ID0gTWF0aC5zaW4obG9uMiAtIGxvbjEpICogTWF0aC5jb3MobGF0Mik7XHJcblx0dmFyIHggPSBNYXRoLmNvcyhsYXQxKSAqIE1hdGguc2luKGxhdDIpIC0gTWF0aC5zaW4obGF0MSkgKiBNYXRoLmNvcyhsYXQyKVxyXG5cdFx0XHQqIE1hdGguY29zKGxvbjIgLSBsb24xKTtcclxuXHR2YXIgYnJuZyA9IE1hdGguYXRhbjIoeSwgeCk7XHJcblx0cmV0dXJuIGJybmcgLyBNYXRoLlBJICogMTgwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXN0YW5jZShsb24xLCBsYXQxLCBsb24yLCBsYXQyKSB7XHJcblx0UiA9IDYzNzIuODtcclxuXHRsYXQxID0gbGF0MSAqIE1hdGguUEkgLyAxODA7XHJcblx0bGF0MiA9IGxhdDIgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdHZhciBkZWx0YWxhdCA9IGxhdDIgLSBsYXQxO1xyXG5cdHZhciBkZWx0YWxvbiA9IChsb24yIC0gbG9uMSkgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdHZhciBhID0gTWF0aC5zaW4oZGVsdGFsYXQgLyAyKSAqIE1hdGguc2luKGRlbHRhbGF0IC8gMikgKyBNYXRoLmNvcyhsYXQxKVxyXG5cdFx0XHQqIE1hdGguY29zKGxhdDIpICogTWF0aC5zaW4oZGVsdGFsb24gLyAyKSAqIE1hdGguc2luKGRlbHRhbG9uIC8gMik7XHJcblx0dmFyIGMgPSAyICogTWF0aC5hc2luKE1hdGguc3FydChhKSk7XHJcblx0cmV0dXJuIFIgKiBjO1xyXG59XHJcblxyXG4vLyBjbGVhbiBwbGFuZSBkZWxldGlvblxyXG5mdW5jdGlvbiBkZWxldGVQbGFuZShpcCkge1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHBsYW5lTGlzdFtpcF0uaW5mb1dpbmRvd0xpc3RlbmVyKTtcclxuXHRwbGFuZUxpc3RbaXBdLnRyYWNlLnNldE1hcChudWxsKTtcclxuXHRwbGFuZUxpc3RbaXBdLm1hcmtlci5zZXRNYXAobnVsbCk7XHJcblx0ZGVsZXRlIHBsYW5lTGlzdFtpcF07XHJcbn1cclxuXHJcbi8vIGFsZXJ0KCkgZXF1aXZhbGVudFxyXG5mdW5jdGlvbiBzaG93RXJyb3IodGV4dCkge1xyXG5cdCQoJyNlcnJvckJveCcpLnRleHQodGV4dCk7XHJcblx0JCgnI2Vycm9yQm94JykuZmFkZUluKCkuZGVsYXkoMzUwMCkuZmFkZU91dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0Q29sb3IoKSB7XHJcblx0aWYgKGNvbG9yc1tjb2xvcl9pbmRleF0gIT0gbnVsbCkge1xyXG5cdFx0dmFyIGNvbG9yID0gY29sb3JzW2NvbG9yX2luZGV4XTtcclxuXHRcdGNvbG9yX2luZGV4Kys7XHJcblx0XHRyZXR1cm4gY29sb3I7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiTm8gbW9yZSBjb2xvcnNcIik7XHJcblx0XHRyZXR1cm4gXCIjYWFhYWFhXCI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDaGFzZUFpcnBsYW5lKCkge1xyXG5cdGlmICggY2hhc2VBaXJwbGFuZSApIHtcclxuXHRcdCQoJyNmb2xsb3dUaGVQbGFuZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdH1cclxuXHRjaGFzZUFpcnBsYW5lID0gIWNoYXNlQWlycGxhbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUZsaWdodFBhbmVsKCkge1xyXG5cdGlmICgkKCcjcGFuZWwtZnAnKS5pcyhcIjpoaWRkZW5cIikpIHtcclxuXHRcdHNob3dGbGlnaHRQYW5lbCgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRoaWRlRmxpZ2h0UGFuZWwoKTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gaGlkZUZsaWdodFBhbmVsKCkge1xyXG5cdGRvY3VtZW50LmNvb2tpZT0kKCcjYm94RmxpZ2h0UGxhbicpLnZhbCgpO1xyXG5cdGNvbnNvbGUubG9nKFwiKHNhdmluZykgcGxhblNhdmVkPVwiICsgZG9jdW1lbnQuY29va2llKTtcclxuXHQkKCcjcGFuZWwtZnAnKS5oaWRlKDUwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4taGVscCcpLmhpZGUoMzAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1pbmZvJykuaGlkZSgzMDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RmxpZ2h0UGFuZWwoKSB7XHJcblx0dmFyIHBsYW5TYXZlZCA9IGRvY3VtZW50LmNvb2tpZTtcclxuXHRjb25zb2xlLmxvZyhcInBsYW5TYXZlZD1cIiArIGRvY3VtZW50LmNvb2tpZSk7XHJcblx0aWYgKCBwbGFuU2F2ZWQgIT0gXCJcIiApIHtcclxuXHRcdCQoJyNib3hGbGlnaHRQbGFuJykudmFsKHBsYW5TYXZlZCk7XHJcblx0fVxyXG5cdCQoJyNwYW5lbC1mcCcpLnNob3coNTAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1oZWxwJykuc2hvdygzMDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWluZm8nKS5zaG93KDMwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4tYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0JCgnI2JveEZsaWdodFBsYW4nKS5mb2N1cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTmF2YWlkcygpIHtcclxuXHQkKCcjbmF2YWlkcy1idXR0b24nKS5odG1sKCdTaG93IG5hdmFpZHMgKE4pJykudW5iaW5kKCdjbGljaycpLmNsaWNrKFxyXG5cdFx0XHRzaG93TmF2YWlkcyk7XHJcblx0bmF2TWFwLnNldE9wYWNpdHkoMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dOYXZhaWRzKCkge1xyXG5cdCQoJyNuYXZhaWRzLWJ1dHRvbicpLmh0bWwoJ0hpZGUgbmF2YWlkcyAoTiknKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soXHJcblx0XHRcdGhpZGVOYXZhaWRzKTtcclxuXHRuYXZNYXAuc2V0T3BhY2l0eSgxKTtcclxufVxyXG5cclxudmFyIHZpc2libGVMYWJlbFJvdXRlID0gdHJ1ZTtcclxuZnVuY3Rpb24gdG9vZ2xlTGFiZWxSb3V0ZSgpIHtcclxuXHR2aXNpYmxlTGFiZWxSb3V0ZSA9ICF2aXNpYmxlTGFiZWxSb3V0ZTtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnNMYWJlbFJvdXRlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQgbWFya2Vyc0xhYmVsUm91dGVbaV0uc2V0VmlzaWJsZSh2aXNpYmxlTGFiZWxSb3V0ZSk7XHJcblx0fVxyXG5cdGlmICggdmlzaWJsZUxhYmVsUm91dGUgKSB7XHJcblx0XHQkKCcjbGFiZWxSb3V0ZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnI2xhYmVsUm91dGUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XHJcblx0fVxyXG59XHJcblxyXG52YXIgdmlzaWJsZVdheXBvaW50ID0gdHJ1ZTtcclxuZnVuY3Rpb24gdG9vZ2xlTGFiZWxXYXlwb2ludCgpIHtcclxuXHR2aXNpYmxlV2F5cG9pbnQgPSAhdmlzaWJsZVdheXBvaW50O1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vyc1dheXBvaW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRtYXJrZXJzV2F5cG9pbnRbaV0uc2V0VmlzaWJsZSh2aXNpYmxlV2F5cG9pbnQpO1xyXG5cdH1cclxuXHRpZiAoIHZpc2libGVXYXlwb2ludCApIHtcclxuXHRcdCQoJyNsYWJlbFdheXBvaW50LWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcjbGFiZWxXYXlwb2ludC1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIHJlYWR5IHdoZW4geW91IGFyZSFcclxuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXRpYWxpemUpO1xyXG4vLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRob3NlIGZ1bmN0aW9ucyB2aXNpYmxlIG91dHNpZGUgdGhlIEpTIGZpbGUgd2hlbiB1c2luZyB0aGUgV2ViUGFjayBidW5kbGUgdG9vbCB0byBydW4gdGhlIHNvbHV0aW9uXHJcbndpbmRvdy5zaG93TmF2YWlkcyAgICAgICAgID0gc2hvd05hdmFpZHM7XHJcbndpbmRvdy50b2dnbGVGbGlnaHRQYW5lbCAgID0gdG9nZ2xlRmxpZ2h0UGFuZWw7XHJcbndpbmRvdy50b2dnbGVDaGFzZUFpcnBsYW5lID0gdG9nZ2xlQ2hhc2VBaXJwbGFuZTtcclxud2luZG93LnRvb2dsZUxhYmVsUm91dGUgICAgPSB0b29nbGVMYWJlbFJvdXRlO1xyXG53aW5kb3cudG9vZ2xlTGFiZWxXYXlwb2ludCA9IHRvb2dsZUxhYmVsV2F5cG9pbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9