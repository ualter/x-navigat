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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_markerwithlabel_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_markerwithlabel_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_markerwithlabel_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_jquery_blink_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_jquery_blink_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_jquery_blink_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_numeral_min_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_numeral_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_numeral_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_map_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_map_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_map_js__);






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

/**
 * @name MarkerWithLabel for V3
 * @version 1.1.8 [February 26, 2013]
 * @author Gary Little (inspired by code from Marc Ridey of Google).
 * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]
 * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3
 *  <code>google.maps.Marker</code> class.
 *  <p>
 *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,
 *  if the marker is draggable, so too will be the label. In addition, a marker with a label
 *  responds to all mouse events in the same manner as a regular marker. It also fires mouse
 *  events and "property changed" events just as a regular marker would. Version 1.1 adds
 *  support for the raiseOnDrag feature introduced in API V3.3.
 *  <p>
 *  If you drag a marker by its label, you can cancel the drag and return the marker to its
 *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker
 *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.
 */

/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global document,google */

/**
 * This constructor creates a label and associates it with a marker.
 * It is for the private use of the MarkerWithLabel class.
 * @constructor
 * @param {Marker} marker The marker with which the label is to be associated.
 * @param {string} crossURL The URL of the cross image =.
 * @param {string} handCursor The URL of the hand cursor.
 * @private
 */
function MarkerLabel_(marker, crossURL, handCursorURL) {
  this.marker_ = marker;
  this.handCursorURL_ = marker.handCursorURL;

  this.labelDiv_ = document.createElement("div");
  this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;";

  // Set up the DIV for handling mouse events in the label. This DIV forms a transparent veil
  // in the "overlayMouseTarget" pane, a veil that covers just the label. This is done so that
  // events can be captured even if the label is in the shadow of a google.maps.InfoWindow.
  // Code is included here to ensure the veil is always exactly the same size as the label.
  this.eventDiv_ = document.createElement("div");
  this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;
  
  // This is needed for proper behavior on MSIE:
  this.eventDiv_.setAttribute("onselectstart", "return false;");
  this.eventDiv_.setAttribute("ondragstart", "return false;");

  // Get the DIV for the "X" to be displayed when the marker is raised.
  this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
}

// MarkerLabel_ inherits from OverlayView:
MarkerLabel_.prototype = new google.maps.OverlayView();

/**
 * Returns the DIV for the cross used when dragging a marker when the
 * raiseOnDrag parameter set to true. One cross is shared with all markers.
 * @param {string} crossURL The URL of the cross image =.
 * @private
 */
MarkerLabel_.getSharedCross = function (crossURL) {
  var div;
  if (typeof MarkerLabel_.getSharedCross.crossDiv === "undefined") {
    div = document.createElement("img");
    div.style.cssText = "position: absolute; z-index: 1000002; display: none;";
    // Hopefully Google never changes the standard "X" attributes:
    div.style.marginLeft = "-8px";
    div.style.marginTop = "-9px";
    div.src = crossURL;
    MarkerLabel_.getSharedCross.crossDiv = div;
  }
  return MarkerLabel_.getSharedCross.crossDiv;
};

/**
 * Adds the DIV representing the label to the DOM. This method is called
 * automatically when the marker's <code>setMap</code> method is called.
 * @private
 */
MarkerLabel_.prototype.onAdd = function () {
  var me = this;
  var cMouseIsDown = false;
  var cDraggingLabel = false;
  var cSavedZIndex;
  var cLatOffset, cLngOffset;
  var cIgnoreClick;
  var cRaiseEnabled;
  var cStartPosition;
  var cStartCenter;
  // Constants:
  var cRaiseOffset = 20;
  var cDraggingCursor = "url(" + this.handCursorURL_ + ")";

  // Stops all processing of an event.
  //
  var cAbortEvent = function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };

  var cStopBounce = function () {
    me.marker_.setAnimation(null);
  };

  this.getPanes().overlayImage.appendChild(this.labelDiv_);
  this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
  // One cross is shared with all markers, so only add it once:
  if (typeof MarkerLabel_.getSharedCross.processed === "undefined") {
    this.getPanes().overlayImage.appendChild(this.crossDiv_);
    MarkerLabel_.getSharedCross.processed = true;
  }

  this.listeners_ = [
    google.maps.event.addDomListener(this.eventDiv_, "mouseover", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        this.style.cursor = "pointer";
        google.maps.event.trigger(me.marker_, "mouseover", e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "mouseout", function (e) {
      if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
        this.style.cursor = me.marker_.getCursor();
        google.maps.event.trigger(me.marker_, "mouseout", e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "mousedown", function (e) {
      cDraggingLabel = false;
      if (me.marker_.getDraggable()) {
        cMouseIsDown = true;
        this.style.cursor = cDraggingCursor;
      }
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, "mousedown", e);
        cAbortEvent(e); // Prevent map pan when starting a drag on a label
      }
    }),
    google.maps.event.addDomListener(document, "mouseup", function (mEvent) {
      var position;
      if (cMouseIsDown) {
        cMouseIsDown = false;
        me.eventDiv_.style.cursor = "pointer";
        google.maps.event.trigger(me.marker_, "mouseup", mEvent);
      }
      if (cDraggingLabel) {
        if (cRaiseEnabled) { // Lower the marker & label
          position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
          position.y += cRaiseOffset;
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          // This is not the same bouncing style as when the marker portion is dragged,
          // but it will have to do:
          try { // Will fail if running Google Maps API earlier than V3.3
            me.marker_.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(cStopBounce, 1406);
          } catch (e) {}
        }
        me.crossDiv_.style.display = "none";
        me.marker_.setZIndex(cSavedZIndex);
        cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag
        cDraggingLabel = false;
        mEvent.latLng = me.marker_.getPosition();
        google.maps.event.trigger(me.marker_, "dragend", mEvent);
      }
    }),
    google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {
      var position;
      if (cMouseIsDown) {
        if (cDraggingLabel) {
          // Change the reported location from the mouse position to the marker position:
          mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
          position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
          if (cRaiseEnabled) {
            me.crossDiv_.style.left = position.x + "px";
            me.crossDiv_.style.top = position.y + "px";
            me.crossDiv_.style.display = "";
            position.y -= cRaiseOffset;
          }
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          if (cRaiseEnabled) { // Don't raise the veil; this hack needed to make MSIE act properly
            me.eventDiv_.style.top = (position.y + cRaiseOffset) + "px";
          }
          google.maps.event.trigger(me.marker_, "drag", mEvent);
        } else {
          // Calculate offsets from the click point to the marker position:
          cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
          cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
          cSavedZIndex = me.marker_.getZIndex();
          cStartPosition = me.marker_.getPosition();
          cStartCenter = me.marker_.getMap().getCenter();
          cRaiseEnabled = me.marker_.get("raiseOnDrag");
          cDraggingLabel = true;
          me.marker_.setZIndex(1000000); // Moves the marker & label to the foreground during a drag
          mEvent.latLng = me.marker_.getPosition();
          google.maps.event.trigger(me.marker_, "dragstart", mEvent);
        }
      }
    }),
    google.maps.event.addDomListener(document, "keydown", function (e) {
      if (cDraggingLabel) {
        if (e.keyCode === 27) { // Esc key
          cRaiseEnabled = false;
          me.marker_.setPosition(cStartPosition);
          me.marker_.getMap().setCenter(cStartCenter);
          google.maps.event.trigger(document, "mouseup", e);
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "click", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        if (cIgnoreClick) { // Ignore the click reported when a label drag ends
          cIgnoreClick = false;
        } else {
          google.maps.event.trigger(me.marker_, "click", e);
          cAbortEvent(e); // Prevent click from being passed on to map
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "dblclick", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, "dblclick", e);
        cAbortEvent(e); // Prevent map zoom when double-clicking on a label
      }
    }),
    google.maps.event.addListener(this.marker_, "dragstart", function (mEvent) {
      if (!cDraggingLabel) {
        cRaiseEnabled = this.get("raiseOnDrag");
      }
    }),
    google.maps.event.addListener(this.marker_, "drag", function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(cRaiseOffset);
          // During a drag, the marker's z-index is temporarily set to 1000000 to
          // ensure it appears above all other markers. Also set the label's z-index
          // to 1000000 (plus or minus 1 depending on whether the label is supposed
          // to be above or below the marker).
          me.labelDiv_.style.zIndex = 1000000 + (this.get("labelInBackground") ? -1 : +1);
        }
      }
    }),
    google.maps.event.addListener(this.marker_, "dragend", function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(0); // Also restores z-index of label
        }
      }
    }),
    google.maps.event.addListener(this.marker_, "position_changed", function () {
      me.setPosition();
    }),
    google.maps.event.addListener(this.marker_, "zindex_changed", function () {
      me.setZIndex();
    }),
    google.maps.event.addListener(this.marker_, "visible_changed", function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, "title_changed", function () {
      me.setTitle();
    }),
    google.maps.event.addListener(this.marker_, "labelcontent_changed", function () {
      me.setContent();
    }),
    google.maps.event.addListener(this.marker_, "labelanchor_changed", function () {
      me.setAnchor();
    }),
    google.maps.event.addListener(this.marker_, "labelclass_changed", function () {
      me.setStyles();
    }),
    google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {
      me.setStyles();
    })
  ];
};

/**
 * Removes the DIV for the label from the DOM. It also removes all event handlers.
 * This method is called automatically when the marker's <code>setMap(null)</code>
 * method is called.
 * @private
 */
MarkerLabel_.prototype.onRemove = function () {
  var i;
  this.labelDiv_.parentNode.removeChild(this.labelDiv_);
  this.eventDiv_.parentNode.removeChild(this.eventDiv_);

  // Remove event listeners:
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
};

/**
 * Draws the label on the map.
 * @private
 */
MarkerLabel_.prototype.draw = function () {
  this.setContent();
  this.setTitle();
  this.setStyles();
};

/**
 * Sets the content of the label.
 * The content can be plain text or an HTML DOM node.
 * @private
 */
MarkerLabel_.prototype.setContent = function () {
  var content = this.marker_.get("labelContent");
  if (typeof content.nodeType === "undefined") {
    this.labelDiv_.innerHTML = content;
    this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
  } else {
    this.labelDiv_.innerHTML = ""; // Remove current content
    this.labelDiv_.appendChild(content);
    content = content.cloneNode(true);
    this.eventDiv_.appendChild(content);
  }
};

/**
 * Sets the content of the tool tip for the label. It is
 * always set to be the same as for the marker itself.
 * @private
 */
MarkerLabel_.prototype.setTitle = function () {
  this.eventDiv_.title = this.marker_.getTitle() || "";
};

/**
 * Sets the style of the label by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
MarkerLabel_.prototype.setStyles = function () {
  var i, labelStyle;

  // Apply style values from the style sheet defined in the labelClass parameter:
  this.labelDiv_.className = this.marker_.get("labelClass");
  this.eventDiv_.className = this.labelDiv_.className;
  
  // Clear existing inline style values:
  this.labelDiv_.style.cssText = "";
  this.eventDiv_.style.cssText = "";
  // Apply style values defined in the labelStyle parameter:
  labelStyle = this.marker_.get("labelStyle");
  for (i in labelStyle) {
    if (labelStyle.hasOwnProperty(i)) {
      this.labelDiv_.style[i] = labelStyle[i];
      this.eventDiv_.style[i] = labelStyle[i];
    }
  }
  

    if (this.marker_.get("rotate") != undefined) {
		this.labelDiv_.style.webkitTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.labelDiv_.style.mozTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.labelDiv_.style.msTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.labelDiv_.style.oTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.labelDiv_.style.transform = "rotate(" + this.marker_.get("rotate") + "deg)";

		this.eventDiv_.style.webkitTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.eventDiv_.style.mozTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.eventDiv_.style.msTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.eventDiv_.style.oTransform = "rotate(" + this.marker_.get("rotate") + "deg)";
		this.eventDiv_.style.transform = "rotate(" + this.marker_.get("rotate") + "deg)";
	}
  
  this.setMandatoryStyles();
};

/**
 * Sets the mandatory styles to the DIV representing the label as well as to the
 * associated event DIV. This includes setting the DIV position, z-index, and visibility.
 * @private
 */
MarkerLabel_.prototype.setMandatoryStyles = function () {
  this.labelDiv_.style.position = "absolute";
  this.labelDiv_.style.overflow = "hidden";
  // Make sure the opacity setting causes the desired effect on MSIE:
  if (typeof this.labelDiv_.style.opacity !== "undefined" && this.labelDiv_.style.opacity !== "") {
    this.labelDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")\"";
    this.labelDiv_.style.filter = "alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")";
  }

  this.eventDiv_.style.position = this.labelDiv_.style.position;
  this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
  this.eventDiv_.style.opacity = 0.01; // Don't use 0; DIV won't be clickable on MSIE
  this.eventDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=1)\"";
  this.eventDiv_.style.filter = "alpha(opacity=1)"; // For MSIE
  
  this.setAnchor();
  this.setPosition(); // This also updates z-index, if necessary.
  this.setVisible();
};

/**
 * Sets the anchor point of the label.
 * @private
 */
MarkerLabel_.prototype.setAnchor = function () {
  var anchor = this.marker_.get("labelAnchor");
  this.labelDiv_.style.marginLeft = -anchor.x + "px";
  this.labelDiv_.style.marginTop = -anchor.y + "px";
  this.eventDiv_.style.marginLeft = -anchor.x + "px";
  this.eventDiv_.style.marginTop = -anchor.y + "px";
};

/**
 * Sets the position of the label. The z-index is also updated, if necessary.
 * @private
 */
MarkerLabel_.prototype.setPosition = function (yOffset) {
  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
  if (typeof yOffset === "undefined") {
    yOffset = 0;
  }
  this.labelDiv_.style.left = Math.round(position.x) + "px";
  this.labelDiv_.style.top = Math.round(position.y - yOffset) + "px";
  this.eventDiv_.style.left = this.labelDiv_.style.left;
  this.eventDiv_.style.top = this.labelDiv_.style.top;

  this.setZIndex();
};

/**
 * Sets the z-index of the label. If the marker's z-index property has not been defined, the z-index
 * of the label is set to the vertical coordinate of the label. This is in keeping with the default
 * stacking order for Google Maps: markers to the south are in front of markers to the north.
 * @private
 */
MarkerLabel_.prototype.setZIndex = function () {
  var zAdjust = (this.marker_.get("labelInBackground") ? -1 : +1);
  if (typeof this.marker_.getZIndex() === "undefined") {
    this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  } else {
    this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  }
};

/**
 * Sets the visibility of the label. The label is visible only if the marker itself is
 * visible (i.e., its visible property is true) and the labelVisible property is true.
 * @private
 */
MarkerLabel_.prototype.setVisible = function () {
  if (this.marker_.get("labelVisible")) {
    this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
  } else {
    this.labelDiv_.style.display = "none";
  }
  this.eventDiv_.style.display = this.labelDiv_.style.display;
};

/**
 * @name MarkerWithLabelOptions
 * @class This class represents the optional parameter passed to the {@link MarkerWithLabel} constructor.
 *  The properties available are the same as for <code>google.maps.Marker</code> with the addition
 *  of the properties listed below. To change any of these additional properties after the labeled
 *  marker has been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.
 *  <p>
 *  When any of these properties changes, a property changed event is fired. The names of these
 *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.
 *  For example, if the content of the label changes, a <code>labelcontent_changed</code> event
 *  is fired.
 *  <p>
 * @property {string|Node} [labelContent] The content of the label (plain text or an HTML DOM node).
 * @property {Point} [labelAnchor] By default, a label is drawn with its anchor point at (0,0) so
 *  that its top left corner is positioned at the anchor point of the associated marker. Use this
 *  property to change the anchor point of the label. For example, to center a 50px-wide label
 *  beneath a marker, specify a <code>labelAnchor</code> of <code>google.maps.Point(25, 0)</code>.
 *  (Note: x-values increase to the right and y-values increase to the top.)
 * @property {string} [labelClass] The name of the CSS class defining the styles for the label.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {Object} [labelStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the label. Style values defined here override those that may
 *  be defined in the <code>labelClass</code> style sheet. If this property is changed after the
 *  label has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the label before the new style values are applied.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {boolean} [labelInBackground] A flag indicating whether a label that overlaps its
 *  associated marker should appear in the background (i.e., in a plane below the marker).
 *  The default is <code>false</code>, which causes the label to appear in the foreground.
 * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.
 *  The default is <code>true</code>. Note that even if <code>labelVisible</code> is
 *  <code>true</code>, the label will <i>not</i> be visible unless the associated marker is also
 *  visible (i.e., unless the marker's <code>visible</code> property is <code>true</code>).
 * @property {boolean} [raiseOnDrag] A flag indicating whether the label and marker are to be
 *  raised when the marker is dragged. The default is <code>true</code>. If a draggable marker is
 *  being created and a version of Google Maps API earlier than V3.3 is being used, this property
 *  must be set to <code>false</code>.
 * @property {boolean} [optimized] A flag indicating whether rendering is to be optimized for the
 *  marker. <b>Important: The optimized rendering technique is not supported by MarkerWithLabel,
 *  so the value of this parameter is always forced to <code>false</code>.
 * @property {string} [crossImage="http://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"]
 *  The URL of the cross image to be displayed while dragging a marker.
 * @property {string} [handCursor="http://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"]
 *  The URL of the cursor to be displayed while dragging a marker.
 */
/**
 * Creates a MarkerWithLabel with the options specified in {@link MarkerWithLabelOptions}.
 * @constructor
 * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.
 */
function MarkerWithLabel(opt_options) {
  opt_options = opt_options || {};
  opt_options.labelContent = opt_options.labelContent || "";
  opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
  opt_options.labelClass = opt_options.labelClass || "markerLabels";
  opt_options.labelStyle = opt_options.labelStyle || {};
  opt_options.labelInBackground = opt_options.labelInBackground || false;
  opt_options.rotate = opt_options.rotate || undefined;
  
  if (typeof opt_options.labelVisible === "undefined") {
    opt_options.labelVisible = true;
  }
  if (typeof opt_options.raiseOnDrag === "undefined") {
    opt_options.raiseOnDrag = true;
  }
  if (typeof opt_options.clickable === "undefined") {
    opt_options.clickable = true;
  }
  if (typeof opt_options.draggable === "undefined") {
    opt_options.draggable = false;
  }
  if (typeof opt_options.optimized === "undefined") {
    opt_options.optimized = false;
  }
  opt_options.crossImage = opt_options.crossImage || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";
  opt_options.handCursor = opt_options.handCursor || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";
  opt_options.optimized = false; // Optimized rendering is not supported

  this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor); // Bind the label to the marker

  // Call the parent constructor. It calls Marker.setValues to initialize, so all
  // the new parameters are conveniently saved and can be accessed with get/set.
  // Marker.set triggers a property changed event (called "propertyname_changed")
  // that the marker label listens for in order to react to state changes.
  google.maps.Marker.apply(this, arguments);
}

// MarkerWithLabel inherits from <code>Marker</code>:
MarkerWithLabel.prototype = new google.maps.Marker();

/**
 * Overrides the standard Marker setMap function.
 * @param {Map} theMap The map to which the marker is to be added.
 * @private
 */
MarkerWithLabel.prototype.setMap = function (theMap) {

  // Call the inherited function...
  google.maps.Marker.prototype.setMap.apply(this, arguments);

  // ... then deal with the label:
  this.label.setMap(theMap);
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function($)
{
	$.fn.blink = function(options)
	{
		var defaults = { delay:500 };
		var options = $.extend(defaults, options);
		
		return this.each(function()
		{
			var obj = $(this);
			setInterval(function()
			{
				if($(obj).css("visibility") == "visible")
				{
					$(obj).css('visibility','hidden');
				}
				else
				{
					$(obj).css('visibility','visible');
				}
			}, options.delay);
		});
	}
}(jQuery))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(){function a(a){this._value=a}function b(a,b,c,d){var e,f,g=Math.pow(10,b);return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}function c(a,b,c){var d;return d=b.indexOf("$")>-1?e(a,b,c):b.indexOf("%")>-1?f(a,b,c):b.indexOf(":")>-1?g(a,b):i(a._value,b,c)}function d(a,b){var c,d,e,f,g,i=b,j=["KB","MB","GB","TB","PB","EB","ZB","YB"],k=!1;if(b.indexOf(":")>-1)a._value=h(b);else if(b===q)a._value=0;else{for("."!==o[p].delimiters.decimal&&(b=b.replace(/\./g,"").replace(o[p].delimiters.decimal,".")),c=new RegExp("[^a-zA-Z]"+o[p].abbreviations.thousand+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+o[p].abbreviations.million+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+o[p].abbreviations.billion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+o[p].abbreviations.trillion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),g=0;g<=j.length&&!(k=b.indexOf(j[g])>-1?Math.pow(1024,g+1):!1);g++);a._value=(k?k:1)*(i.match(c)?Math.pow(10,3):1)*(i.match(d)?Math.pow(10,6):1)*(i.match(e)?Math.pow(10,9):1)*(i.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),a._value=k?Math.ceil(a._value):a._value}return a._value}function e(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),j="";return b.indexOf(" $")>-1?(j=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(j=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=i(a._value,b,c),1>=f?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(g>f||h>f)&&(d=0),e.splice(d,0,o[p].currency.symbol+j),e=e.join("")):e=o[p].currency.symbol+j+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,j+o[p].currency.symbol),e=e.join("")):e=e+j+o[p].currency.symbol,e}function f(a,b,c){var d,e="",f=100*a._value;return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=i(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function g(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*b*60)/60),d=Math.round(a._value-60*b*60-60*c);return b+":"+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d)}function h(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function i(a,c,d){var e,f,g,h,i,j,k=!1,l=!1,m=!1,n="",r=!1,s=!1,t=!1,u=!1,v=!1,w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;if(0===a&&null!==q)return q;if(c.indexOf("(")>-1?(k=!0,c=c.slice(1,-1)):c.indexOf("+")>-1&&(l=!0,c=c.replace(/\+/g,"")),c.indexOf("a")>-1&&(r=c.indexOf("aK")>=0,s=c.indexOf("aM")>=0,t=c.indexOf("aB")>=0,u=c.indexOf("aT")>=0,v=r||s||t||u,c.indexOf(" a")>-1?(n=" ",c=c.replace(" a","")):c=c.replace("a",""),y>=Math.pow(10,12)&&!v||u?(n+=o[p].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||t?(n+=o[p].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||s?(n+=o[p].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||r)&&(n+=o[p].abbreviations.thousand,a/=Math.pow(10,3))),c.indexOf("b")>-1)for(c.indexOf(" b")>-1?(w=" ",c=c.replace(" b","")):c=c.replace("b",""),g=0;g<=z.length;g++)if(e=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=e&&f>a){w+=z[g],e>0&&(a/=e);break}return c.indexOf("o")>-1&&(c.indexOf(" o")>-1?(x=" ",c=c.replace(" o","")):c=c.replace("o",""),x+=o[p].ordinal(a)),c.indexOf("[.]")>-1&&(m=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],j=c.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=b(a,i[0].length+i[1].length,d,i[1].length)):A=b(a,i.length,d),h=A.split(".")[0],A=A.split(".")[1].length?o[p].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=b(a,null,d),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o[p].delimiters.thousands)),0===c.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x?x:"")+(n?n:"")+(w?w:"")+(k&&B?")":"")}function j(a,b){o[a]=b}function k(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}function l(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var c=k(a),d=k(b);return c>d?c:d},-1/0)}var m,n="1.5.3",o={},p="en",q=null,r="0,0",s="undefined"!=typeof module&&module.exports;m=function(b){return m.isNumeral(b)?b=b.value():0===b||"undefined"==typeof b?b=0:Number(b)||(b=m.fn.unformat(b)),new a(Number(b))},m.version=n,m.isNumeral=function(b){return b instanceof a},m.language=function(a,b){if(!a)return p;if(a&&!b){if(!o[a])throw new Error("Unknown language : "+a);p=a}return(b||!o[a])&&j(a,b),m},m.languageData=function(a){if(!a)return o[p];if(!o[a])throw new Error("Unknown language : "+a);return o[a]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(a){q="string"==typeof a?a:null},m.defaultFormat=function(a){r="string"==typeof a?a:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),m.fn=a.prototype={clone:function(){return m(this)},format:function(a,b){return c(this,a?a:r,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:d(this,a?a:r)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b){return a+c*b}var c=l.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b){return a-c*b}var c=l.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b){var c=l(a,b);return a*c*b*c/(c*c)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b){var c=l(a,b);return a*c/(b*c)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(m(this._value).subtract(a).value())}},s&&(module.exports=m),"undefined"==typeof ender&&(this.numeral=m),"function"=="function"&&__webpack_require__(18)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return m}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

const period = 1000; // time between refreshes in ms

var posClient = new google.maps.LatLng(-23.62611, -46.656387)
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
							alt : data[ip].alt,
							marker : new google.maps.Marker(markerOptions),
							trace : new google.maps.Polyline(polyOptions),
							info : new google.maps.InfoWindow(),
							color : color,
							vSpeed : data[ip].vSpeed,
							airSpeed : data[ip].airSpeed,
							gSpeed : data[ip].gSpeed,
							heading : data[ip].bearing,
							dest : data[ip].dest,
							gpsDistNm : data[ip].gpsDistNm,
							gpsDistTime : data[ip].gpsDistTime,
							nav1 : data[ip].nav1Freq,
							nav2 : data[ip].nav2Freq,
							barometer : data[ip].barometer,
							fuelQuantity : data[ip].fuelQuantity,
							fuelQuantity : data[ip].fuelQuantity,
							outsideTemp : data[ip].outsideTemp,
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
					newLat = data[ip].lat;
					newLon = data[ip].lon;
					planeList[ip].alt            = data[ip].alt;
					planeList[ip].vSpeed         = data[ip].vSpeed;
					planeList[ip].airSpeed       = data[ip].airSpeed;
					planeList[ip].heading        = data[ip].bearing;
					planeList[ip].dest           = data[ip].dest;
					planeList[ip].gpsDistNm      = data[ip].gpsDistNm;
					planeList[ip].gpsDistTime    = data[ip].gpsDistTime;
					planeList[ip].nav1           = data[ip].nav1Freq;
					planeList[ip].nav2           = data[ip].nav2Freq;
					planeList[ip].barometer      = data[ip].barometer;
					planeList[ip].fuelQuantity   = data[ip].fuelQuantity;
					planeList[ip].outsideTemp    = data[ip].outsideTemp;
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
					infoContent += " <td>GS:</td><td><span class='planeDataInfo'>" + planeList[ip].gSpeed.toFixed() + "</span>&nbsp;kts</td>";
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
/*window.showNavaids         = showNavaids;
window.toggleFlightPanel   = toggleFlightPanel;
window.toggleChaseAirplane = toggleChaseAirplane;
window.toogleLabelRoute    = toogleLabelRoute;
window.toogleLabelWaypoint = toogleLabelWaypoint;
*/


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTYwMTJhM2NhZTE5YTJhNjEyOGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWZyb250LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcz81ODdhIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcmtlcndpdGhsYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvanF1ZXJ5LWJsaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9udW1lcmFsLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRUFBc0Usc0JBQXNCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQixjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsNkJBQTZCO0FBQ3pGO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDLHNGQUFzRjs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7QUN6a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLENBQUMsUzs7Ozs7O0FDdkJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjLGNBQWMsb0JBQW9CLHlCQUF5QixtREFBbUQsUUFBUSx5QkFBeUIsa0JBQWtCLE1BQU0sd0dBQXdHLGdCQUFnQixtRUFBbUUsbUNBQW1DLHlCQUF5QixLQUFLLGtnQkFBa2dCLDJEQUEyRCxLQUFLLG9VQUFvVSxnQkFBZ0Isa0JBQWtCLGdFQUFnRSw0WkFBNFosa0JBQWtCLDBCQUEwQixzS0FBc0ssY0FBYyx5R0FBeUcsK0NBQStDLGNBQWMsdUJBQXVCLDRJQUE0SSxrQkFBa0IsK0lBQStJLDRCQUE0Qiw4dEJBQTh0QixZQUFZLDBEQUEwRCxvQkFBb0IsTUFBTSx1akJBQXVqQixFQUFFLGlLQUFpSyxnQkFBZ0IsT0FBTyxjQUFjLDhCQUE4Qiw2Q0FBNkMsYUFBYSw0Q0FBNEMsOEJBQThCLGtCQUFrQixlQUFlLE9BQU8sb0JBQW9CLG9FQUFvRSxjQUFjLG9IQUFvSCxxQ0FBcUMsc0JBQXNCLDBCQUEwQixlQUFlLFVBQVUsa0RBQWtELElBQUksMkJBQTJCLDRCQUE0QixrQkFBa0Isa0RBQWtELFlBQVksa0JBQWtCLFlBQVksMEJBQTBCLGdCQUFnQixrREFBa0QscUJBQXFCLFdBQVcsbUVBQW1FLFdBQVcsWUFBWSwyQkFBMkIsNEJBQTRCLDZCQUE2Qiw2QkFBNkIsa0ZBQWtGLGFBQWEsbUhBQW1ILG9FQUFvRSwrQkFBK0IsdUNBQXVDLElBQUksdUVBQXVFLHlFQUF5RSxTQUFTLG9CQUFvQixpQkFBaUIsZUFBZSxzQkFBc0IsNkNBQTZDLHNCQUFzQiw0RUFBNEUsa0JBQWtCLG1CQUFtQixvQkFBb0IsbUJBQW1CLGlCQUFpQixrQ0FBa0MsaUJBQWlCLGdCQUFnQixhQUFhLGlDQUFpQyxzREFBc0Qsc0JBQXNCLGdCQUFnQixhQUFhLGlDQUFpQyxzREFBc0Qsc0JBQXNCLGdCQUFnQixhQUFhLHFCQUFxQixvREFBb0Qsb0JBQW9CLGdCQUFnQixhQUFhLGlCQUFpQixrREFBa0Qsd0JBQXdCLHFEQUFxRCxvTUFBK0gsU0FBUztBQUFBLHFHQUFFLGE7Ozs7OztBQ1Avck47QUFDQTs7Ozs7Ozs7QUNEQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsb0JBQW9CLHdDQUF3QztBQUN2RztBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLG9JO0FBQ0E7QUFDQSxnRDtBQUNBO0FBQ0EsTUFBTTtBQUNOLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NjAxMmEzY2FlMTlhMmE2MTI4ZSIsImltcG9ydCAnLi9jc3MvbWFwLmNzcyc7XHJcbmltcG9ydCAnLi9qcy9tYXJrZXJ3aXRobGFiZWwuanMnO1xyXG5pbXBvcnQgJy4vanMvanF1ZXJ5LWJsaW5rLmpzJztcclxuaW1wb3J0ICcuL2pzL251bWVyYWwubWluLmpzJztcclxuaW1wb3J0ICcuL2pzL21hcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtZnJvbnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9tYXAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCAjbWFwLWNhbnZhcyB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNwYW5lbC1mcCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogNjBweDtcXHJcXG5cXHRsZWZ0OiA5MHB4O1xcclxcblxcdHotaW5kZXg6IDU7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkICM1OTU5NTk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUwMDAwRTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR3aWR0aDogNjAwcHg7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbiNlcnJvckJveCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogOTAlO1xcclxcblxcdGxlZnQ6IDIlO1xcclxcblxcdHotaW5kZXg6IDU7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkICM1OTU5NTk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUwMDAwRTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR3aWR0aDogMjAlO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYm94RmxpZ2h0UGxhbiB7XFxyXFxuXFx0IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHQgZm9udC1zaXplOiAxNHB4O1xcclxcblxcdCBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHQgb3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0IHJlc2l6ZTogbm9uZTtcXHJcXG59IFxcclxcbiNmbGlnaHRwbGFuLWhlbHAge1xcclxcblxcdHotaW5kZXg6IDEwMDA7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMTkwcHg7XFxyXFxuXFx0bGVmdDogOTBweDtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHdpZHRoOiAxMzBweDtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tYnV0dG9uIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAyOHB4O1xcclxcblxcdGxlZnQ6IDkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcbn1cXHJcXG4jcGxhbmUtcGFuZWwge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDI4cHg7XFxyXFxuXFx0bGVmdDogMTkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jZmxpZ2h0cGxhbi1idXR0b24uZG93biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4tYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uLmRvd24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5sYWJlbHNBaXJwb3J0IHtcXHJcXG5cXHRjb2xvcjogZGFya2JsdWU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiAzOHB4O1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi5sYWJlbHNXYXlwb2ludCB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTFweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDUwcHg7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuLmxhYmVsc0luZm9Sb3V0ZSB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1pbi13aWR0aDogNzBweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyM3B4O1xcclxcbn1cXHJcXG4ucnVud2F5VGFibGUge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuLnJ1bndheUluZm8ge1xcclxcblxcdGNvbG9yOiBibHVlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4udm9yVGFibGUge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuLnZvckluZm8ge1xcclxcblxcdGNvbG9yOiBibHVlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucm91dGVJbmZvIHtcXHJcXG5cXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBsYW5lRGF0YUluZm8ge1xcclxcblxcdGNvbG9yOiBibHVlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucGxhbmVEYXRhSW5mb1JlZCB7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnJvdGF0ZSB7XFxyXFxuICAgICAtd2Via2l0LXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICAtbW96LXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICAtbXMtdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxyXFxuICAgIC1vLXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbiAgICB0cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG59XFxyXFxuI2ZsaWdodHBsYW4taW5mbyB7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxOTBweDtcXHJcXG4gICAgbGVmdDogMjUzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA0MzBweDtcXHJcXG59XFxyXFxuLmZsaWdodFBsYW4taW5mby1sYWJlbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4jZmxpZ2h0cGxhbi1sb2FkaW5nIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxcclxcblxcdHRvcDogNzNweDsgXFxyXFxuXFx0bGVmdDogMTBweDsgXFxyXFxuXFx0ei1pbmRleDogOTk5OTtcXHJcXG5cXHRjb2xvcjogIzQ1NDU0NTtcXHJcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcblxcdGZvbnQtc2l6ZToxNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4jbGFiZWxSb3V0ZS1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDI4cHg7XFxyXFxuXFx0bGVmdDogMzAwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4jbGFiZWxSb3V0ZS1idXR0b24uZG93biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsUm91dGUtYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4jbGFiZWxXYXlwb2ludC1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDI4cHg7XFxyXFxuXFx0bGVmdDogMzkwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4jbGFiZWxXYXlwb2ludC1idXR0b24uZG93biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuI2xhYmVsV2F5cG9pbnQtYnV0dG9uLnVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9tYXAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIEBuYW1lIE1hcmtlcldpdGhMYWJlbCBmb3IgVjNcclxuICogQHZlcnNpb24gMS4xLjggW0ZlYnJ1YXJ5IDI2LCAyMDEzXVxyXG4gKiBAYXV0aG9yIEdhcnkgTGl0dGxlIChpbnNwaXJlZCBieSBjb2RlIGZyb20gTWFyYyBSaWRleSBvZiBHb29nbGUpLlxyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAyMDEyIEdhcnkgTGl0dGxlIFtnYXJ5IGF0IGx1eGNlbnRyYWwuY29tXVxyXG4gKiBAZmlsZW92ZXJ2aWV3IE1hcmtlcldpdGhMYWJlbCBleHRlbmRzIHRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBWM1xyXG4gKiAgPGNvZGU+Z29vZ2xlLm1hcHMuTWFya2VyPC9jb2RlPiBjbGFzcy5cclxuICogIDxwPlxyXG4gKiAgTWFya2VyV2l0aExhYmVsIGFsbG93cyB5b3UgdG8gZGVmaW5lIG1hcmtlcnMgd2l0aCBhc3NvY2lhdGVkIGxhYmVscy4gQXMgeW91IHdvdWxkIGV4cGVjdCxcclxuICogIGlmIHRoZSBtYXJrZXIgaXMgZHJhZ2dhYmxlLCBzbyB0b28gd2lsbCBiZSB0aGUgbGFiZWwuIEluIGFkZGl0aW9uLCBhIG1hcmtlciB3aXRoIGEgbGFiZWxcclxuICogIHJlc3BvbmRzIHRvIGFsbCBtb3VzZSBldmVudHMgaW4gdGhlIHNhbWUgbWFubmVyIGFzIGEgcmVndWxhciBtYXJrZXIuIEl0IGFsc28gZmlyZXMgbW91c2VcclxuICogIGV2ZW50cyBhbmQgXCJwcm9wZXJ0eSBjaGFuZ2VkXCIgZXZlbnRzIGp1c3QgYXMgYSByZWd1bGFyIG1hcmtlciB3b3VsZC4gVmVyc2lvbiAxLjEgYWRkc1xyXG4gKiAgc3VwcG9ydCBmb3IgdGhlIHJhaXNlT25EcmFnIGZlYXR1cmUgaW50cm9kdWNlZCBpbiBBUEkgVjMuMy5cclxuICogIDxwPlxyXG4gKiAgSWYgeW91IGRyYWcgYSBtYXJrZXIgYnkgaXRzIGxhYmVsLCB5b3UgY2FuIGNhbmNlbCB0aGUgZHJhZyBhbmQgcmV0dXJuIHRoZSBtYXJrZXIgdG8gaXRzXHJcbiAqICBvcmlnaW5hbCBwb3NpdGlvbiBieSBwcmVzc2luZyB0aGUgPGNvZGU+RXNjPC9jb2RlPiBrZXkuIFRoaXMgZG9lc24ndCB3b3JrIGlmIHlvdSBkcmFnIHRoZSBtYXJrZXJcclxuICogIGl0c2VsZiBiZWNhdXNlIHRoaXMgZmVhdHVyZSBpcyBub3QgKHlldCkgc3VwcG9ydGVkIGluIHRoZSA8Y29kZT5nb29nbGUubWFwcy5NYXJrZXI8L2NvZGU+IGNsYXNzLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qanNsaW50IGJyb3dzZXI6dHJ1ZSAqL1xyXG4vKmdsb2JhbCBkb2N1bWVudCxnb29nbGUgKi9cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbnN0cnVjdG9yIGNyZWF0ZXMgYSBsYWJlbCBhbmQgYXNzb2NpYXRlcyBpdCB3aXRoIGEgbWFya2VyLlxyXG4gKiBJdCBpcyBmb3IgdGhlIHByaXZhdGUgdXNlIG9mIHRoZSBNYXJrZXJXaXRoTGFiZWwgY2xhc3MuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge01hcmtlcn0gbWFya2VyIFRoZSBtYXJrZXIgd2l0aCB3aGljaCB0aGUgbGFiZWwgaXMgdG8gYmUgYXNzb2NpYXRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGNyb3NzVVJMIFRoZSBVUkwgb2YgdGhlIGNyb3NzIGltYWdlID0uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kQ3Vyc29yIFRoZSBVUkwgb2YgdGhlIGhhbmQgY3Vyc29yLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gTWFya2VyTGFiZWxfKG1hcmtlciwgY3Jvc3NVUkwsIGhhbmRDdXJzb3JVUkwpIHtcclxuICB0aGlzLm1hcmtlcl8gPSBtYXJrZXI7XHJcbiAgdGhpcy5oYW5kQ3Vyc29yVVJMXyA9IG1hcmtlci5oYW5kQ3Vyc29yVVJMO1xyXG5cclxuICB0aGlzLmxhYmVsRGl2XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyBvdmVyZmxvdzogaGlkZGVuO1wiO1xyXG5cclxuICAvLyBTZXQgdXAgdGhlIERJViBmb3IgaGFuZGxpbmcgbW91c2UgZXZlbnRzIGluIHRoZSBsYWJlbC4gVGhpcyBESVYgZm9ybXMgYSB0cmFuc3BhcmVudCB2ZWlsXHJcbiAgLy8gaW4gdGhlIFwib3ZlcmxheU1vdXNlVGFyZ2V0XCIgcGFuZSwgYSB2ZWlsIHRoYXQgY292ZXJzIGp1c3QgdGhlIGxhYmVsLiBUaGlzIGlzIGRvbmUgc28gdGhhdFxyXG4gIC8vIGV2ZW50cyBjYW4gYmUgY2FwdHVyZWQgZXZlbiBpZiB0aGUgbGFiZWwgaXMgaW4gdGhlIHNoYWRvdyBvZiBhIGdvb2dsZS5tYXBzLkluZm9XaW5kb3cuXHJcbiAgLy8gQ29kZSBpcyBpbmNsdWRlZCBoZXJlIHRvIGVuc3VyZSB0aGUgdmVpbCBpcyBhbHdheXMgZXhhY3RseSB0aGUgc2FtZSBzaXplIGFzIHRoZSBsYWJlbC5cclxuICB0aGlzLmV2ZW50RGl2XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUuY3NzVGV4dCA9IHRoaXMubGFiZWxEaXZfLnN0eWxlLmNzc1RleHQ7XHJcbiAgXHJcbiAgLy8gVGhpcyBpcyBuZWVkZWQgZm9yIHByb3BlciBiZWhhdmlvciBvbiBNU0lFOlxyXG4gIHRoaXMuZXZlbnREaXZfLnNldEF0dHJpYnV0ZShcIm9uc2VsZWN0c3RhcnRcIiwgXCJyZXR1cm4gZmFsc2U7XCIpO1xyXG4gIHRoaXMuZXZlbnREaXZfLnNldEF0dHJpYnV0ZShcIm9uZHJhZ3N0YXJ0XCIsIFwicmV0dXJuIGZhbHNlO1wiKTtcclxuXHJcbiAgLy8gR2V0IHRoZSBESVYgZm9yIHRoZSBcIlhcIiB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGUgbWFya2VyIGlzIHJhaXNlZC5cclxuICB0aGlzLmNyb3NzRGl2XyA9IE1hcmtlckxhYmVsXy5nZXRTaGFyZWRDcm9zcyhjcm9zc1VSTCk7XHJcbn1cclxuXHJcbi8vIE1hcmtlckxhYmVsXyBpbmhlcml0cyBmcm9tIE92ZXJsYXlWaWV3OlxyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlID0gbmV3IGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KCk7XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgRElWIGZvciB0aGUgY3Jvc3MgdXNlZCB3aGVuIGRyYWdnaW5nIGEgbWFya2VyIHdoZW4gdGhlXHJcbiAqIHJhaXNlT25EcmFnIHBhcmFtZXRlciBzZXQgdG8gdHJ1ZS4gT25lIGNyb3NzIGlzIHNoYXJlZCB3aXRoIGFsbCBtYXJrZXJzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY3Jvc3NVUkwgVGhlIFVSTCBvZiB0aGUgY3Jvc3MgaW1hZ2UgPS5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5nZXRTaGFyZWRDcm9zcyA9IGZ1bmN0aW9uIChjcm9zc1VSTCkge1xyXG4gIHZhciBkaXY7XHJcbiAgaWYgKHR5cGVvZiBNYXJrZXJMYWJlbF8uZ2V0U2hhcmVkQ3Jvc3MuY3Jvc3NEaXYgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAxMDAwMDAyOyBkaXNwbGF5OiBub25lO1wiO1xyXG4gICAgLy8gSG9wZWZ1bGx5IEdvb2dsZSBuZXZlciBjaGFuZ2VzIHRoZSBzdGFuZGFyZCBcIlhcIiBhdHRyaWJ1dGVzOlxyXG4gICAgZGl2LnN0eWxlLm1hcmdpbkxlZnQgPSBcIi04cHhcIjtcclxuICAgIGRpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIi05cHhcIjtcclxuICAgIGRpdi5zcmMgPSBjcm9zc1VSTDtcclxuICAgIE1hcmtlckxhYmVsXy5nZXRTaGFyZWRDcm9zcy5jcm9zc0RpdiA9IGRpdjtcclxuICB9XHJcbiAgcmV0dXJuIE1hcmtlckxhYmVsXy5nZXRTaGFyZWRDcm9zcy5jcm9zc0RpdjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBESVYgcmVwcmVzZW50aW5nIHRoZSBsYWJlbCB0byB0aGUgRE9NLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWRcclxuICogYXV0b21hdGljYWxseSB3aGVuIHRoZSBtYXJrZXIncyA8Y29kZT5zZXRNYXA8L2NvZGU+IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLm9uQWRkID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBtZSA9IHRoaXM7XHJcbiAgdmFyIGNNb3VzZUlzRG93biA9IGZhbHNlO1xyXG4gIHZhciBjRHJhZ2dpbmdMYWJlbCA9IGZhbHNlO1xyXG4gIHZhciBjU2F2ZWRaSW5kZXg7XHJcbiAgdmFyIGNMYXRPZmZzZXQsIGNMbmdPZmZzZXQ7XHJcbiAgdmFyIGNJZ25vcmVDbGljaztcclxuICB2YXIgY1JhaXNlRW5hYmxlZDtcclxuICB2YXIgY1N0YXJ0UG9zaXRpb247XHJcbiAgdmFyIGNTdGFydENlbnRlcjtcclxuICAvLyBDb25zdGFudHM6XHJcbiAgdmFyIGNSYWlzZU9mZnNldCA9IDIwO1xyXG4gIHZhciBjRHJhZ2dpbmdDdXJzb3IgPSBcInVybChcIiArIHRoaXMuaGFuZEN1cnNvclVSTF8gKyBcIilcIjtcclxuXHJcbiAgLy8gU3RvcHMgYWxsIHByb2Nlc3Npbmcgb2YgYW4gZXZlbnQuXHJcbiAgLy9cclxuICB2YXIgY0Fib3J0RXZlbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNTdG9wQm91bmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbWUubWFya2VyXy5zZXRBbmltYXRpb24obnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5nZXRQYW5lcygpLm92ZXJsYXlJbWFnZS5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsRGl2Xyk7XHJcbiAgdGhpcy5nZXRQYW5lcygpLm92ZXJsYXlNb3VzZVRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLmV2ZW50RGl2Xyk7XHJcbiAgLy8gT25lIGNyb3NzIGlzIHNoYXJlZCB3aXRoIGFsbCBtYXJrZXJzLCBzbyBvbmx5IGFkZCBpdCBvbmNlOlxyXG4gIGlmICh0eXBlb2YgTWFya2VyTGFiZWxfLmdldFNoYXJlZENyb3NzLnByb2Nlc3NlZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdGhpcy5nZXRQYW5lcygpLm92ZXJsYXlJbWFnZS5hcHBlbmRDaGlsZCh0aGlzLmNyb3NzRGl2Xyk7XHJcbiAgICBNYXJrZXJMYWJlbF8uZ2V0U2hhcmVkQ3Jvc3MucHJvY2Vzc2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRoaXMubGlzdGVuZXJzXyA9IFtcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHRoaXMuZXZlbnREaXZfLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAobWUubWFya2VyXy5nZXREcmFnZ2FibGUoKSB8fCBtZS5tYXJrZXJfLmdldENsaWNrYWJsZSgpKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1lLm1hcmtlcl8sIFwibW91c2VvdmVyXCIsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHRoaXMuZXZlbnREaXZfLCBcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmICgobWUubWFya2VyXy5nZXREcmFnZ2FibGUoKSB8fCBtZS5tYXJrZXJfLmdldENsaWNrYWJsZSgpKSAmJiAhY0RyYWdnaW5nTGFiZWwpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IG1lLm1hcmtlcl8uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtZS5tYXJrZXJfLCBcIm1vdXNlb3V0XCIsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHRoaXMuZXZlbnREaXZfLCBcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjRHJhZ2dpbmdMYWJlbCA9IGZhbHNlO1xyXG4gICAgICBpZiAobWUubWFya2VyXy5nZXREcmFnZ2FibGUoKSkge1xyXG4gICAgICAgIGNNb3VzZUlzRG93biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBjRHJhZ2dpbmdDdXJzb3I7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lLm1hcmtlcl8uZ2V0RHJhZ2dhYmxlKCkgfHwgbWUubWFya2VyXy5nZXRDbGlja2FibGUoKSkge1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWUubWFya2VyXywgXCJtb3VzZWRvd25cIiwgZSk7XHJcbiAgICAgICAgY0Fib3J0RXZlbnQoZSk7IC8vIFByZXZlbnQgbWFwIHBhbiB3aGVuIHN0YXJ0aW5nIGEgZHJhZyBvbiBhIGxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoZG9jdW1lbnQsIFwibW91c2V1cFwiLCBmdW5jdGlvbiAobUV2ZW50KSB7XHJcbiAgICAgIHZhciBwb3NpdGlvbjtcclxuICAgICAgaWYgKGNNb3VzZUlzRG93bikge1xyXG4gICAgICAgIGNNb3VzZUlzRG93biA9IGZhbHNlO1xyXG4gICAgICAgIG1lLmV2ZW50RGl2Xy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1lLm1hcmtlcl8sIFwibW91c2V1cFwiLCBtRXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjRHJhZ2dpbmdMYWJlbCkge1xyXG4gICAgICAgIGlmIChjUmFpc2VFbmFibGVkKSB7IC8vIExvd2VyIHRoZSBtYXJrZXIgJiBsYWJlbFxyXG4gICAgICAgICAgcG9zaXRpb24gPSBtZS5nZXRQcm9qZWN0aW9uKCkuZnJvbUxhdExuZ1RvRGl2UGl4ZWwobWUubWFya2VyXy5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgIHBvc2l0aW9uLnkgKz0gY1JhaXNlT2Zmc2V0O1xyXG4gICAgICAgICAgbWUubWFya2VyXy5zZXRQb3NpdGlvbihtZS5nZXRQcm9qZWN0aW9uKCkuZnJvbURpdlBpeGVsVG9MYXRMbmcocG9zaXRpb24pKTtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHRoZSBzYW1lIGJvdW5jaW5nIHN0eWxlIGFzIHdoZW4gdGhlIG1hcmtlciBwb3J0aW9uIGlzIGRyYWdnZWQsXHJcbiAgICAgICAgICAvLyBidXQgaXQgd2lsbCBoYXZlIHRvIGRvOlxyXG4gICAgICAgICAgdHJ5IHsgLy8gV2lsbCBmYWlsIGlmIHJ1bm5pbmcgR29vZ2xlIE1hcHMgQVBJIGVhcmxpZXIgdGhhbiBWMy4zXHJcbiAgICAgICAgICAgIG1lLm1hcmtlcl8uc2V0QW5pbWF0aW9uKGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0UpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNTdG9wQm91bmNlLCAxNDA2KTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lLmNyb3NzRGl2Xy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgbWUubWFya2VyXy5zZXRaSW5kZXgoY1NhdmVkWkluZGV4KTtcclxuICAgICAgICBjSWdub3JlQ2xpY2sgPSB0cnVlOyAvLyBTZXQgZmxhZyB0byBpZ25vcmUgdGhlIGNsaWNrIGV2ZW50IHJlcG9ydGVkIGFmdGVyIGEgbGFiZWwgZHJhZ1xyXG4gICAgICAgIGNEcmFnZ2luZ0xhYmVsID0gZmFsc2U7XHJcbiAgICAgICAgbUV2ZW50LmxhdExuZyA9IG1lLm1hcmtlcl8uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1lLm1hcmtlcl8sIFwiZHJhZ2VuZFwiLCBtRXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1lLm1hcmtlcl8uZ2V0TWFwKCksIFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChtRXZlbnQpIHtcclxuICAgICAgdmFyIHBvc2l0aW9uO1xyXG4gICAgICBpZiAoY01vdXNlSXNEb3duKSB7XHJcbiAgICAgICAgaWYgKGNEcmFnZ2luZ0xhYmVsKSB7XHJcbiAgICAgICAgICAvLyBDaGFuZ2UgdGhlIHJlcG9ydGVkIGxvY2F0aW9uIGZyb20gdGhlIG1vdXNlIHBvc2l0aW9uIHRvIHRoZSBtYXJrZXIgcG9zaXRpb246XHJcbiAgICAgICAgICBtRXZlbnQubGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhtRXZlbnQubGF0TG5nLmxhdCgpIC0gY0xhdE9mZnNldCwgbUV2ZW50LmxhdExuZy5sbmcoKSAtIGNMbmdPZmZzZXQpO1xyXG4gICAgICAgICAgcG9zaXRpb24gPSBtZS5nZXRQcm9qZWN0aW9uKCkuZnJvbUxhdExuZ1RvRGl2UGl4ZWwobUV2ZW50LmxhdExuZyk7XHJcbiAgICAgICAgICBpZiAoY1JhaXNlRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBtZS5jcm9zc0Rpdl8uc3R5bGUubGVmdCA9IHBvc2l0aW9uLnggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIG1lLmNyb3NzRGl2Xy5zdHlsZS50b3AgPSBwb3NpdGlvbi55ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBtZS5jcm9zc0Rpdl8uc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgLT0gY1JhaXNlT2Zmc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWUubWFya2VyXy5zZXRQb3NpdGlvbihtZS5nZXRQcm9qZWN0aW9uKCkuZnJvbURpdlBpeGVsVG9MYXRMbmcocG9zaXRpb24pKTtcclxuICAgICAgICAgIGlmIChjUmFpc2VFbmFibGVkKSB7IC8vIERvbid0IHJhaXNlIHRoZSB2ZWlsOyB0aGlzIGhhY2sgbmVlZGVkIHRvIG1ha2UgTVNJRSBhY3QgcHJvcGVybHlcclxuICAgICAgICAgICAgbWUuZXZlbnREaXZfLnN0eWxlLnRvcCA9IChwb3NpdGlvbi55ICsgY1JhaXNlT2Zmc2V0KSArIFwicHhcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWUubWFya2VyXywgXCJkcmFnXCIsIG1FdmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIENhbGN1bGF0ZSBvZmZzZXRzIGZyb20gdGhlIGNsaWNrIHBvaW50IHRvIHRoZSBtYXJrZXIgcG9zaXRpb246XHJcbiAgICAgICAgICBjTGF0T2Zmc2V0ID0gbUV2ZW50LmxhdExuZy5sYXQoKSAtIG1lLm1hcmtlcl8uZ2V0UG9zaXRpb24oKS5sYXQoKTtcclxuICAgICAgICAgIGNMbmdPZmZzZXQgPSBtRXZlbnQubGF0TG5nLmxuZygpIC0gbWUubWFya2VyXy5nZXRQb3NpdGlvbigpLmxuZygpO1xyXG4gICAgICAgICAgY1NhdmVkWkluZGV4ID0gbWUubWFya2VyXy5nZXRaSW5kZXgoKTtcclxuICAgICAgICAgIGNTdGFydFBvc2l0aW9uID0gbWUubWFya2VyXy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgY1N0YXJ0Q2VudGVyID0gbWUubWFya2VyXy5nZXRNYXAoKS5nZXRDZW50ZXIoKTtcclxuICAgICAgICAgIGNSYWlzZUVuYWJsZWQgPSBtZS5tYXJrZXJfLmdldChcInJhaXNlT25EcmFnXCIpO1xyXG4gICAgICAgICAgY0RyYWdnaW5nTGFiZWwgPSB0cnVlO1xyXG4gICAgICAgICAgbWUubWFya2VyXy5zZXRaSW5kZXgoMTAwMDAwMCk7IC8vIE1vdmVzIHRoZSBtYXJrZXIgJiBsYWJlbCB0byB0aGUgZm9yZWdyb3VuZCBkdXJpbmcgYSBkcmFnXHJcbiAgICAgICAgICBtRXZlbnQubGF0TG5nID0gbWUubWFya2VyXy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtZS5tYXJrZXJfLCBcImRyYWdzdGFydFwiLCBtRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihkb2N1bWVudCwgXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChjRHJhZ2dpbmdMYWJlbCkge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVzYyBrZXlcclxuICAgICAgICAgIGNSYWlzZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgIG1lLm1hcmtlcl8uc2V0UG9zaXRpb24oY1N0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgbWUubWFya2VyXy5nZXRNYXAoKS5zZXRDZW50ZXIoY1N0YXJ0Q2VudGVyKTtcclxuICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIoZG9jdW1lbnQsIFwibW91c2V1cFwiLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIodGhpcy5ldmVudERpdl8sIFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKG1lLm1hcmtlcl8uZ2V0RHJhZ2dhYmxlKCkgfHwgbWUubWFya2VyXy5nZXRDbGlja2FibGUoKSkge1xyXG4gICAgICAgIGlmIChjSWdub3JlQ2xpY2spIHsgLy8gSWdub3JlIHRoZSBjbGljayByZXBvcnRlZCB3aGVuIGEgbGFiZWwgZHJhZyBlbmRzXHJcbiAgICAgICAgICBjSWdub3JlQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtZS5tYXJrZXJfLCBcImNsaWNrXCIsIGUpO1xyXG4gICAgICAgICAgY0Fib3J0RXZlbnQoZSk7IC8vIFByZXZlbnQgY2xpY2sgZnJvbSBiZWluZyBwYXNzZWQgb24gdG8gbWFwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHRoaXMuZXZlbnREaXZfLCBcImRibGNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChtZS5tYXJrZXJfLmdldERyYWdnYWJsZSgpIHx8IG1lLm1hcmtlcl8uZ2V0Q2xpY2thYmxlKCkpIHtcclxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1lLm1hcmtlcl8sIFwiZGJsY2xpY2tcIiwgZSk7XHJcbiAgICAgICAgY0Fib3J0RXZlbnQoZSk7IC8vIFByZXZlbnQgbWFwIHpvb20gd2hlbiBkb3VibGUtY2xpY2tpbmcgb24gYSBsYWJlbFxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKG1FdmVudCkge1xyXG4gICAgICBpZiAoIWNEcmFnZ2luZ0xhYmVsKSB7XHJcbiAgICAgICAgY1JhaXNlRW5hYmxlZCA9IHRoaXMuZ2V0KFwicmFpc2VPbkRyYWdcIik7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXJfLCBcImRyYWdcIiwgZnVuY3Rpb24gKG1FdmVudCkge1xyXG4gICAgICBpZiAoIWNEcmFnZ2luZ0xhYmVsKSB7XHJcbiAgICAgICAgaWYgKGNSYWlzZUVuYWJsZWQpIHtcclxuICAgICAgICAgIG1lLnNldFBvc2l0aW9uKGNSYWlzZU9mZnNldCk7XHJcbiAgICAgICAgICAvLyBEdXJpbmcgYSBkcmFnLCB0aGUgbWFya2VyJ3Mgei1pbmRleCBpcyB0ZW1wb3JhcmlseSBzZXQgdG8gMTAwMDAwMCB0b1xyXG4gICAgICAgICAgLy8gZW5zdXJlIGl0IGFwcGVhcnMgYWJvdmUgYWxsIG90aGVyIG1hcmtlcnMuIEFsc28gc2V0IHRoZSBsYWJlbCdzIHotaW5kZXhcclxuICAgICAgICAgIC8vIHRvIDEwMDAwMDAgKHBsdXMgb3IgbWludXMgMSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbGFiZWwgaXMgc3VwcG9zZWRcclxuICAgICAgICAgIC8vIHRvIGJlIGFib3ZlIG9yIGJlbG93IHRoZSBtYXJrZXIpLlxyXG4gICAgICAgICAgbWUubGFiZWxEaXZfLnN0eWxlLnpJbmRleCA9IDEwMDAwMDAgKyAodGhpcy5nZXQoXCJsYWJlbEluQmFja2dyb3VuZFwiKSA/IC0xIDogKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwiZHJhZ2VuZFwiLCBmdW5jdGlvbiAobUV2ZW50KSB7XHJcbiAgICAgIGlmICghY0RyYWdnaW5nTGFiZWwpIHtcclxuICAgICAgICBpZiAoY1JhaXNlRW5hYmxlZCkge1xyXG4gICAgICAgICAgbWUuc2V0UG9zaXRpb24oMCk7IC8vIEFsc28gcmVzdG9yZXMgei1pbmRleCBvZiBsYWJlbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwicG9zaXRpb25fY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1lLnNldFBvc2l0aW9uKCk7XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJ6aW5kZXhfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1lLnNldFpJbmRleCgpO1xyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwidmlzaWJsZV9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWUuc2V0VmlzaWJsZSgpO1xyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwibGFiZWx2aXNpYmxlX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZS5zZXRWaXNpYmxlKCk7XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJ0aXRsZV9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWUuc2V0VGl0bGUoKTtcclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXJfLCBcImxhYmVsY29udGVudF9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWUuc2V0Q29udGVudCgpO1xyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwibGFiZWxhbmNob3JfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1lLnNldEFuY2hvcigpO1xyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwibGFiZWxjbGFzc19jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWUuc2V0U3R5bGVzKCk7XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJsYWJlbHN0eWxlX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZS5zZXRTdHlsZXMoKTtcclxuICAgIH0pXHJcbiAgXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBESVYgZm9yIHRoZSBsYWJlbCBmcm9tIHRoZSBET00uIEl0IGFsc28gcmVtb3ZlcyBhbGwgZXZlbnQgaGFuZGxlcnMuXHJcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIG1hcmtlcidzIDxjb2RlPnNldE1hcChudWxsKTwvY29kZT5cclxuICogbWV0aG9kIGlzIGNhbGxlZC5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGk7XHJcbiAgdGhpcy5sYWJlbERpdl8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmxhYmVsRGl2Xyk7XHJcbiAgdGhpcy5ldmVudERpdl8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmV2ZW50RGl2Xyk7XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnM6XHJcbiAgZm9yIChpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzXy5sZW5ndGg7IGkrKykge1xyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcnNfW2ldKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRHJhd3MgdGhlIGxhYmVsIG9uIHRoZSBtYXAuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5zZXRDb250ZW50KCk7XHJcbiAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gIHRoaXMuc2V0U3R5bGVzKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgbGFiZWwuXHJcbiAqIFRoZSBjb250ZW50IGNhbiBiZSBwbGFpbiB0ZXh0IG9yIGFuIEhUTUwgRE9NIG5vZGUuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSB0aGlzLm1hcmtlcl8uZ2V0KFwibGFiZWxDb250ZW50XCIpO1xyXG4gIGlmICh0eXBlb2YgY29udGVudC5ub2RlVHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdGhpcy5sYWJlbERpdl8uaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIHRoaXMuZXZlbnREaXZfLmlubmVySFRNTCA9IHRoaXMubGFiZWxEaXZfLmlubmVySFRNTDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5sYWJlbERpdl8uaW5uZXJIVE1MID0gXCJcIjsgLy8gUmVtb3ZlIGN1cnJlbnQgY29udGVudFxyXG4gICAgdGhpcy5sYWJlbERpdl8uYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBjb250ZW50ID0gY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICB0aGlzLmV2ZW50RGl2Xy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgdG9vbCB0aXAgZm9yIHRoZSBsYWJlbC4gSXQgaXNcclxuICogYWx3YXlzIHNldCB0byBiZSB0aGUgc2FtZSBhcyBmb3IgdGhlIG1hcmtlciBpdHNlbGYuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuZXZlbnREaXZfLnRpdGxlID0gdGhpcy5tYXJrZXJfLmdldFRpdGxlKCkgfHwgXCJcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBzdHlsZSBvZiB0aGUgbGFiZWwgYnkgc2V0dGluZyB0aGUgc3R5bGUgc2hlZXQgYW5kIGFwcGx5aW5nXHJcbiAqIG90aGVyIHNwZWNpZmljIHN0eWxlcyByZXF1ZXN0ZWQuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLnNldFN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgaSwgbGFiZWxTdHlsZTtcclxuXHJcbiAgLy8gQXBwbHkgc3R5bGUgdmFsdWVzIGZyb20gdGhlIHN0eWxlIHNoZWV0IGRlZmluZWQgaW4gdGhlIGxhYmVsQ2xhc3MgcGFyYW1ldGVyOlxyXG4gIHRoaXMubGFiZWxEaXZfLmNsYXNzTmFtZSA9IHRoaXMubWFya2VyXy5nZXQoXCJsYWJlbENsYXNzXCIpO1xyXG4gIHRoaXMuZXZlbnREaXZfLmNsYXNzTmFtZSA9IHRoaXMubGFiZWxEaXZfLmNsYXNzTmFtZTtcclxuICBcclxuICAvLyBDbGVhciBleGlzdGluZyBpbmxpbmUgc3R5bGUgdmFsdWVzOlxyXG4gIHRoaXMubGFiZWxEaXZfLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xyXG4gIHRoaXMuZXZlbnREaXZfLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xyXG4gIC8vIEFwcGx5IHN0eWxlIHZhbHVlcyBkZWZpbmVkIGluIHRoZSBsYWJlbFN0eWxlIHBhcmFtZXRlcjpcclxuICBsYWJlbFN0eWxlID0gdGhpcy5tYXJrZXJfLmdldChcImxhYmVsU3R5bGVcIik7XHJcbiAgZm9yIChpIGluIGxhYmVsU3R5bGUpIHtcclxuICAgIGlmIChsYWJlbFN0eWxlLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIHRoaXMubGFiZWxEaXZfLnN0eWxlW2ldID0gbGFiZWxTdHlsZVtpXTtcclxuICAgICAgdGhpcy5ldmVudERpdl8uc3R5bGVbaV0gPSBsYWJlbFN0eWxlW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgICBpZiAodGhpcy5tYXJrZXJfLmdldChcInJvdGF0ZVwiKSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdHRoaXMubGFiZWxEaXZfLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgdGhpcy5tYXJrZXJfLmdldChcInJvdGF0ZVwiKSArIFwiZGVnKVwiO1xyXG5cdFx0dGhpcy5sYWJlbERpdl8uc3R5bGUubW96VHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblx0XHR0aGlzLmxhYmVsRGl2Xy5zdHlsZS5tc1RyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgdGhpcy5tYXJrZXJfLmdldChcInJvdGF0ZVwiKSArIFwiZGVnKVwiO1xyXG5cdFx0dGhpcy5sYWJlbERpdl8uc3R5bGUub1RyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgdGhpcy5tYXJrZXJfLmdldChcInJvdGF0ZVwiKSArIFwiZGVnKVwiO1xyXG5cdFx0dGhpcy5sYWJlbERpdl8uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblxyXG5cdFx0dGhpcy5ldmVudERpdl8uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblx0XHR0aGlzLmV2ZW50RGl2Xy5zdHlsZS5tb3pUcmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHRoaXMubWFya2VyXy5nZXQoXCJyb3RhdGVcIikgKyBcImRlZylcIjtcclxuXHRcdHRoaXMuZXZlbnREaXZfLnN0eWxlLm1zVHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblx0XHR0aGlzLmV2ZW50RGl2Xy5zdHlsZS5vVHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblx0XHR0aGlzLmV2ZW50RGl2Xy5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHRoaXMubWFya2VyXy5nZXQoXCJyb3RhdGVcIikgKyBcImRlZylcIjtcclxuXHR9XHJcbiAgXHJcbiAgdGhpcy5zZXRNYW5kYXRvcnlTdHlsZXMoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBtYW5kYXRvcnkgc3R5bGVzIHRvIHRoZSBESVYgcmVwcmVzZW50aW5nIHRoZSBsYWJlbCBhcyB3ZWxsIGFzIHRvIHRoZVxyXG4gKiBhc3NvY2lhdGVkIGV2ZW50IERJVi4gVGhpcyBpbmNsdWRlcyBzZXR0aW5nIHRoZSBESVYgcG9zaXRpb24sIHotaW5kZXgsIGFuZCB2aXNpYmlsaXR5LlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTWFya2VyTGFiZWxfLnByb3RvdHlwZS5zZXRNYW5kYXRvcnlTdHlsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gIC8vIE1ha2Ugc3VyZSB0aGUgb3BhY2l0eSBzZXR0aW5nIGNhdXNlcyB0aGUgZGVzaXJlZCBlZmZlY3Qgb24gTVNJRTpcclxuICBpZiAodHlwZW9mIHRoaXMubGFiZWxEaXZfLnN0eWxlLm9wYWNpdHkgIT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5sYWJlbERpdl8uc3R5bGUub3BhY2l0eSAhPT0gXCJcIikge1xyXG4gICAgdGhpcy5sYWJlbERpdl8uc3R5bGUuTXNGaWx0ZXIgPSBcIlxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEob3BhY2l0eT1cIiArICh0aGlzLmxhYmVsRGl2Xy5zdHlsZS5vcGFjaXR5ICogMTAwKSArIFwiKVxcXCJcIjtcclxuICAgIHRoaXMubGFiZWxEaXZfLnN0eWxlLmZpbHRlciA9IFwiYWxwaGEob3BhY2l0eT1cIiArICh0aGlzLmxhYmVsRGl2Xy5zdHlsZS5vcGFjaXR5ICogMTAwKSArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUucG9zaXRpb24gPSB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5wb3NpdGlvbjtcclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5vdmVyZmxvdyA9IHRoaXMubGFiZWxEaXZfLnN0eWxlLm92ZXJmbG93O1xyXG4gIHRoaXMuZXZlbnREaXZfLnN0eWxlLm9wYWNpdHkgPSAwLjAxOyAvLyBEb24ndCB1c2UgMDsgRElWIHdvbid0IGJlIGNsaWNrYWJsZSBvbiBNU0lFXHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUuTXNGaWx0ZXIgPSBcIlxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEob3BhY2l0eT0xKVxcXCJcIjtcclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5maWx0ZXIgPSBcImFscGhhKG9wYWNpdHk9MSlcIjsgLy8gRm9yIE1TSUVcclxuICBcclxuICB0aGlzLnNldEFuY2hvcigpO1xyXG4gIHRoaXMuc2V0UG9zaXRpb24oKTsgLy8gVGhpcyBhbHNvIHVwZGF0ZXMgei1pbmRleCwgaWYgbmVjZXNzYXJ5LlxyXG4gIHRoaXMuc2V0VmlzaWJsZSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGFuY2hvciBwb2ludCBvZiB0aGUgbGFiZWwuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLnNldEFuY2hvciA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYW5jaG9yID0gdGhpcy5tYXJrZXJfLmdldChcImxhYmVsQW5jaG9yXCIpO1xyXG4gIHRoaXMubGFiZWxEaXZfLnN0eWxlLm1hcmdpbkxlZnQgPSAtYW5jaG9yLnggKyBcInB4XCI7XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUubWFyZ2luVG9wID0gLWFuY2hvci55ICsgXCJweFwiO1xyXG4gIHRoaXMuZXZlbnREaXZfLnN0eWxlLm1hcmdpbkxlZnQgPSAtYW5jaG9yLnggKyBcInB4XCI7XHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUubWFyZ2luVG9wID0gLWFuY2hvci55ICsgXCJweFwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBsYWJlbC4gVGhlIHotaW5kZXggaXMgYWxzbyB1cGRhdGVkLCBpZiBuZWNlc3NhcnkuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKHlPZmZzZXQpIHtcclxuICB2YXIgcG9zaXRpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9EaXZQaXhlbCh0aGlzLm1hcmtlcl8uZ2V0UG9zaXRpb24oKSk7XHJcbiAgaWYgKHR5cGVvZiB5T2Zmc2V0ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB5T2Zmc2V0ID0gMDtcclxuICB9XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUubGVmdCA9IE1hdGgucm91bmQocG9zaXRpb24ueCkgKyBcInB4XCI7XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUudG9wID0gTWF0aC5yb3VuZChwb3NpdGlvbi55IC0geU9mZnNldCkgKyBcInB4XCI7XHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUubGVmdCA9IHRoaXMubGFiZWxEaXZfLnN0eWxlLmxlZnQ7XHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUudG9wID0gdGhpcy5sYWJlbERpdl8uc3R5bGUudG9wO1xyXG5cclxuICB0aGlzLnNldFpJbmRleCgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIHotaW5kZXggb2YgdGhlIGxhYmVsLiBJZiB0aGUgbWFya2VyJ3Mgei1pbmRleCBwcm9wZXJ0eSBoYXMgbm90IGJlZW4gZGVmaW5lZCwgdGhlIHotaW5kZXhcclxuICogb2YgdGhlIGxhYmVsIGlzIHNldCB0byB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBvZiB0aGUgbGFiZWwuIFRoaXMgaXMgaW4ga2VlcGluZyB3aXRoIHRoZSBkZWZhdWx0XHJcbiAqIHN0YWNraW5nIG9yZGVyIGZvciBHb29nbGUgTWFwczogbWFya2VycyB0byB0aGUgc291dGggYXJlIGluIGZyb250IG9mIG1hcmtlcnMgdG8gdGhlIG5vcnRoLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTWFya2VyTGFiZWxfLnByb3RvdHlwZS5zZXRaSW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHpBZGp1c3QgPSAodGhpcy5tYXJrZXJfLmdldChcImxhYmVsSW5CYWNrZ3JvdW5kXCIpID8gLTEgOiArMSk7XHJcbiAgaWYgKHR5cGVvZiB0aGlzLm1hcmtlcl8uZ2V0WkluZGV4KCkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHRoaXMubGFiZWxEaXZfLnN0eWxlLnpJbmRleCA9IHBhcnNlSW50KHRoaXMubGFiZWxEaXZfLnN0eWxlLnRvcCwgMTApICsgekFkanVzdDtcclxuICAgIHRoaXMuZXZlbnREaXZfLnN0eWxlLnpJbmRleCA9IHRoaXMubGFiZWxEaXZfLnN0eWxlLnpJbmRleDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5sYWJlbERpdl8uc3R5bGUuekluZGV4ID0gdGhpcy5tYXJrZXJfLmdldFpJbmRleCgpICsgekFkanVzdDtcclxuICAgIHRoaXMuZXZlbnREaXZfLnN0eWxlLnpJbmRleCA9IHRoaXMubGFiZWxEaXZfLnN0eWxlLnpJbmRleDtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbGFiZWwuIFRoZSBsYWJlbCBpcyB2aXNpYmxlIG9ubHkgaWYgdGhlIG1hcmtlciBpdHNlbGYgaXNcclxuICogdmlzaWJsZSAoaS5lLiwgaXRzIHZpc2libGUgcHJvcGVydHkgaXMgdHJ1ZSkgYW5kIHRoZSBsYWJlbFZpc2libGUgcHJvcGVydHkgaXMgdHJ1ZS5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUuc2V0VmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5tYXJrZXJfLmdldChcImxhYmVsVmlzaWJsZVwiKSkge1xyXG4gICAgdGhpcy5sYWJlbERpdl8uc3R5bGUuZGlzcGxheSA9IHRoaXMubWFya2VyXy5nZXRWaXNpYmxlKCkgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5sYWJlbERpdl8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5sYWJlbERpdl8uc3R5bGUuZGlzcGxheTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBNYXJrZXJXaXRoTGFiZWxPcHRpb25zXHJcbiAqIEBjbGFzcyBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG9wdGlvbmFsIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIHtAbGluayBNYXJrZXJXaXRoTGFiZWx9IGNvbnN0cnVjdG9yLlxyXG4gKiAgVGhlIHByb3BlcnRpZXMgYXZhaWxhYmxlIGFyZSB0aGUgc2FtZSBhcyBmb3IgPGNvZGU+Z29vZ2xlLm1hcHMuTWFya2VyPC9jb2RlPiB3aXRoIHRoZSBhZGRpdGlvblxyXG4gKiAgb2YgdGhlIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LiBUbyBjaGFuZ2UgYW55IG9mIHRoZXNlIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhZnRlciB0aGUgbGFiZWxlZFxyXG4gKiAgbWFya2VyIGhhcyBiZWVuIGNyZWF0ZWQsIGNhbGwgPGNvZGU+Z29vZ2xlLm1hcHMuTWFya2VyLnNldChwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUpPC9jb2RlPi5cclxuICogIDxwPlxyXG4gKiAgV2hlbiBhbnkgb2YgdGhlc2UgcHJvcGVydGllcyBjaGFuZ2VzLCBhIHByb3BlcnR5IGNoYW5nZWQgZXZlbnQgaXMgZmlyZWQuIFRoZSBuYW1lcyBvZiB0aGVzZVxyXG4gKiAgZXZlbnRzIGFyZSBkZXJpdmVkIGZyb20gdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IGFuZCBhcmUgb2YgdGhlIGZvcm0gPGNvZGU+cHJvcGVydHluYW1lX2NoYW5nZWQ8L2NvZGU+LlxyXG4gKiAgRm9yIGV4YW1wbGUsIGlmIHRoZSBjb250ZW50IG9mIHRoZSBsYWJlbCBjaGFuZ2VzLCBhIDxjb2RlPmxhYmVsY29udGVudF9jaGFuZ2VkPC9jb2RlPiBldmVudFxyXG4gKiAgaXMgZmlyZWQuXHJcbiAqICA8cD5cclxuICogQHByb3BlcnR5IHtzdHJpbmd8Tm9kZX0gW2xhYmVsQ29udGVudF0gVGhlIGNvbnRlbnQgb2YgdGhlIGxhYmVsIChwbGFpbiB0ZXh0IG9yIGFuIEhUTUwgRE9NIG5vZGUpLlxyXG4gKiBAcHJvcGVydHkge1BvaW50fSBbbGFiZWxBbmNob3JdIEJ5IGRlZmF1bHQsIGEgbGFiZWwgaXMgZHJhd24gd2l0aCBpdHMgYW5jaG9yIHBvaW50IGF0ICgwLDApIHNvXHJcbiAqICB0aGF0IGl0cyB0b3AgbGVmdCBjb3JuZXIgaXMgcG9zaXRpb25lZCBhdCB0aGUgYW5jaG9yIHBvaW50IG9mIHRoZSBhc3NvY2lhdGVkIG1hcmtlci4gVXNlIHRoaXNcclxuICogIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgYW5jaG9yIHBvaW50IG9mIHRoZSBsYWJlbC4gRm9yIGV4YW1wbGUsIHRvIGNlbnRlciBhIDUwcHgtd2lkZSBsYWJlbFxyXG4gKiAgYmVuZWF0aCBhIG1hcmtlciwgc3BlY2lmeSBhIDxjb2RlPmxhYmVsQW5jaG9yPC9jb2RlPiBvZiA8Y29kZT5nb29nbGUubWFwcy5Qb2ludCgyNSwgMCk8L2NvZGU+LlxyXG4gKiAgKE5vdGU6IHgtdmFsdWVzIGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeS12YWx1ZXMgaW5jcmVhc2UgdG8gdGhlIHRvcC4pXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbGFiZWxDbGFzc10gVGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyBkZWZpbmluZyB0aGUgc3R5bGVzIGZvciB0aGUgbGFiZWwuXHJcbiAqICBOb3RlIHRoYXQgc3R5bGUgdmFsdWVzIGZvciA8Y29kZT5wb3NpdGlvbjwvY29kZT4sIDxjb2RlPm92ZXJmbG93PC9jb2RlPiwgPGNvZGU+dG9wPC9jb2RlPixcclxuICogIDxjb2RlPmxlZnQ8L2NvZGU+LCA8Y29kZT56SW5kZXg8L2NvZGU+LCA8Y29kZT5kaXNwbGF5PC9jb2RlPiwgPGNvZGU+bWFyZ2luTGVmdDwvY29kZT4sIGFuZFxyXG4gKiAgPGNvZGU+bWFyZ2luVG9wPC9jb2RlPiBhcmUgaWdub3JlZDsgdGhlc2Ugc3R5bGVzIGFyZSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBbbGFiZWxTdHlsZV0gQW4gb2JqZWN0IGxpdGVyYWwgd2hvc2UgcHJvcGVydGllcyBkZWZpbmUgc3BlY2lmaWMgQ1NTXHJcbiAqICBzdHlsZSB2YWx1ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgbGFiZWwuIFN0eWxlIHZhbHVlcyBkZWZpbmVkIGhlcmUgb3ZlcnJpZGUgdGhvc2UgdGhhdCBtYXlcclxuICogIGJlIGRlZmluZWQgaW4gdGhlIDxjb2RlPmxhYmVsQ2xhc3M8L2NvZGU+IHN0eWxlIHNoZWV0LiBJZiB0aGlzIHByb3BlcnR5IGlzIGNoYW5nZWQgYWZ0ZXIgdGhlXHJcbiAqICBsYWJlbCBoYXMgYmVlbiBjcmVhdGVkLCBhbGwgcHJldmlvdXNseSBzZXQgc3R5bGVzIChleGNlcHQgdGhvc2UgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2hlZXQpXHJcbiAqICBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBsYWJlbCBiZWZvcmUgdGhlIG5ldyBzdHlsZSB2YWx1ZXMgYXJlIGFwcGxpZWQuXHJcbiAqICBOb3RlIHRoYXQgc3R5bGUgdmFsdWVzIGZvciA8Y29kZT5wb3NpdGlvbjwvY29kZT4sIDxjb2RlPm92ZXJmbG93PC9jb2RlPiwgPGNvZGU+dG9wPC9jb2RlPixcclxuICogIDxjb2RlPmxlZnQ8L2NvZGU+LCA8Y29kZT56SW5kZXg8L2NvZGU+LCA8Y29kZT5kaXNwbGF5PC9jb2RlPiwgPGNvZGU+bWFyZ2luTGVmdDwvY29kZT4sIGFuZFxyXG4gKiAgPGNvZGU+bWFyZ2luVG9wPC9jb2RlPiBhcmUgaWdub3JlZDsgdGhlc2Ugc3R5bGVzIGFyZSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2xhYmVsSW5CYWNrZ3JvdW5kXSBBIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGEgbGFiZWwgdGhhdCBvdmVybGFwcyBpdHNcclxuICogIGFzc29jaWF0ZWQgbWFya2VyIHNob3VsZCBhcHBlYXIgaW4gdGhlIGJhY2tncm91bmQgKGkuZS4sIGluIGEgcGxhbmUgYmVsb3cgdGhlIG1hcmtlcikuXHJcbiAqICBUaGUgZGVmYXVsdCBpcyA8Y29kZT5mYWxzZTwvY29kZT4sIHdoaWNoIGNhdXNlcyB0aGUgbGFiZWwgdG8gYXBwZWFyIGluIHRoZSBmb3JlZ3JvdW5kLlxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtsYWJlbFZpc2libGVdIEEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxhYmVsIGlzIHRvIGJlIHZpc2libGUuXHJcbiAqICBUaGUgZGVmYXVsdCBpcyA8Y29kZT50cnVlPC9jb2RlPi4gTm90ZSB0aGF0IGV2ZW4gaWYgPGNvZGU+bGFiZWxWaXNpYmxlPC9jb2RlPiBpc1xyXG4gKiAgPGNvZGU+dHJ1ZTwvY29kZT4sIHRoZSBsYWJlbCB3aWxsIDxpPm5vdDwvaT4gYmUgdmlzaWJsZSB1bmxlc3MgdGhlIGFzc29jaWF0ZWQgbWFya2VyIGlzIGFsc29cclxuICogIHZpc2libGUgKGkuZS4sIHVubGVzcyB0aGUgbWFya2VyJ3MgPGNvZGU+dmlzaWJsZTwvY29kZT4gcHJvcGVydHkgaXMgPGNvZGU+dHJ1ZTwvY29kZT4pLlxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtyYWlzZU9uRHJhZ10gQSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGFiZWwgYW5kIG1hcmtlciBhcmUgdG8gYmVcclxuICogIHJhaXNlZCB3aGVuIHRoZSBtYXJrZXIgaXMgZHJhZ2dlZC4gVGhlIGRlZmF1bHQgaXMgPGNvZGU+dHJ1ZTwvY29kZT4uIElmIGEgZHJhZ2dhYmxlIG1hcmtlciBpc1xyXG4gKiAgYmVpbmcgY3JlYXRlZCBhbmQgYSB2ZXJzaW9uIG9mIEdvb2dsZSBNYXBzIEFQSSBlYXJsaWVyIHRoYW4gVjMuMyBpcyBiZWluZyB1c2VkLCB0aGlzIHByb3BlcnR5XHJcbiAqICBtdXN0IGJlIHNldCB0byA8Y29kZT5mYWxzZTwvY29kZT4uXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGltaXplZF0gQSBmbGFnIGluZGljYXRpbmcgd2hldGhlciByZW5kZXJpbmcgaXMgdG8gYmUgb3B0aW1pemVkIGZvciB0aGVcclxuICogIG1hcmtlci4gPGI+SW1wb3J0YW50OiBUaGUgb3B0aW1pemVkIHJlbmRlcmluZyB0ZWNobmlxdWUgaXMgbm90IHN1cHBvcnRlZCBieSBNYXJrZXJXaXRoTGFiZWwsXHJcbiAqICBzbyB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgYWx3YXlzIGZvcmNlZCB0byA8Y29kZT5mYWxzZTwvY29kZT4uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY3Jvc3NJbWFnZT1cImh0dHA6Ly9tYXBzLmdzdGF0aWMuY29tL2ludGwvZW5fdXMvbWFwZmlsZXMvZHJhZ19jcm9zc182N18xNi5wbmdcIl1cclxuICogIFRoZSBVUkwgb2YgdGhlIGNyb3NzIGltYWdlIHRvIGJlIGRpc3BsYXllZCB3aGlsZSBkcmFnZ2luZyBhIG1hcmtlci5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtoYW5kQ3Vyc29yPVwiaHR0cDovL21hcHMuZ3N0YXRpYy5jb20vaW50bC9lbl91cy9tYXBmaWxlcy9jbG9zZWRoYW5kXzhfOC5jdXJcIl1cclxuICogIFRoZSBVUkwgb2YgdGhlIGN1cnNvciB0byBiZSBkaXNwbGF5ZWQgd2hpbGUgZHJhZ2dpbmcgYSBtYXJrZXIuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlcyBhIE1hcmtlcldpdGhMYWJlbCB3aXRoIHRoZSBvcHRpb25zIHNwZWNpZmllZCBpbiB7QGxpbmsgTWFya2VyV2l0aExhYmVsT3B0aW9uc30uXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge01hcmtlcldpdGhMYWJlbE9wdGlvbnN9IFtvcHRfb3B0aW9uc10gVGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBNYXJrZXJXaXRoTGFiZWwob3B0X29wdGlvbnMpIHtcclxuICBvcHRfb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xyXG4gIG9wdF9vcHRpb25zLmxhYmVsQ29udGVudCA9IG9wdF9vcHRpb25zLmxhYmVsQ29udGVudCB8fCBcIlwiO1xyXG4gIG9wdF9vcHRpb25zLmxhYmVsQW5jaG9yID0gb3B0X29wdGlvbnMubGFiZWxBbmNob3IgfHwgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApO1xyXG4gIG9wdF9vcHRpb25zLmxhYmVsQ2xhc3MgPSBvcHRfb3B0aW9ucy5sYWJlbENsYXNzIHx8IFwibWFya2VyTGFiZWxzXCI7XHJcbiAgb3B0X29wdGlvbnMubGFiZWxTdHlsZSA9IG9wdF9vcHRpb25zLmxhYmVsU3R5bGUgfHwge307XHJcbiAgb3B0X29wdGlvbnMubGFiZWxJbkJhY2tncm91bmQgPSBvcHRfb3B0aW9ucy5sYWJlbEluQmFja2dyb3VuZCB8fCBmYWxzZTtcclxuICBvcHRfb3B0aW9ucy5yb3RhdGUgPSBvcHRfb3B0aW9ucy5yb3RhdGUgfHwgdW5kZWZpbmVkO1xyXG4gIFxyXG4gIGlmICh0eXBlb2Ygb3B0X29wdGlvbnMubGFiZWxWaXNpYmxlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvcHRfb3B0aW9ucy5sYWJlbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIG9wdF9vcHRpb25zLnJhaXNlT25EcmFnID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvcHRfb3B0aW9ucy5yYWlzZU9uRHJhZyA9IHRydWU7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygb3B0X29wdGlvbnMuY2xpY2thYmxlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvcHRfb3B0aW9ucy5jbGlja2FibGUgPSB0cnVlO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIG9wdF9vcHRpb25zLmRyYWdnYWJsZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgb3B0X29wdGlvbnMuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygb3B0X29wdGlvbnMub3B0aW1pemVkID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvcHRfb3B0aW9ucy5vcHRpbWl6ZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgb3B0X29wdGlvbnMuY3Jvc3NJbWFnZSA9IG9wdF9vcHRpb25zLmNyb3NzSW1hZ2UgfHwgXCJodHRwXCIgKyAoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBcInNcIiA6IFwiXCIpICsgXCI6Ly9tYXBzLmdzdGF0aWMuY29tL2ludGwvZW5fdXMvbWFwZmlsZXMvZHJhZ19jcm9zc182N18xNi5wbmdcIjtcclxuICBvcHRfb3B0aW9ucy5oYW5kQ3Vyc29yID0gb3B0X29wdGlvbnMuaGFuZEN1cnNvciB8fCBcImh0dHBcIiArIChkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwic1wiIDogXCJcIikgKyBcIjovL21hcHMuZ3N0YXRpYy5jb20vaW50bC9lbl91cy9tYXBmaWxlcy9jbG9zZWRoYW5kXzhfOC5jdXJcIjtcclxuICBvcHRfb3B0aW9ucy5vcHRpbWl6ZWQgPSBmYWxzZTsgLy8gT3B0aW1pemVkIHJlbmRlcmluZyBpcyBub3Qgc3VwcG9ydGVkXHJcblxyXG4gIHRoaXMubGFiZWwgPSBuZXcgTWFya2VyTGFiZWxfKHRoaXMsIG9wdF9vcHRpb25zLmNyb3NzSW1hZ2UsIG9wdF9vcHRpb25zLmhhbmRDdXJzb3IpOyAvLyBCaW5kIHRoZSBsYWJlbCB0byB0aGUgbWFya2VyXHJcblxyXG4gIC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3Rvci4gSXQgY2FsbHMgTWFya2VyLnNldFZhbHVlcyB0byBpbml0aWFsaXplLCBzbyBhbGxcclxuICAvLyB0aGUgbmV3IHBhcmFtZXRlcnMgYXJlIGNvbnZlbmllbnRseSBzYXZlZCBhbmQgY2FuIGJlIGFjY2Vzc2VkIHdpdGggZ2V0L3NldC5cclxuICAvLyBNYXJrZXIuc2V0IHRyaWdnZXJzIGEgcHJvcGVydHkgY2hhbmdlZCBldmVudCAoY2FsbGVkIFwicHJvcGVydHluYW1lX2NoYW5nZWRcIilcclxuICAvLyB0aGF0IHRoZSBtYXJrZXIgbGFiZWwgbGlzdGVucyBmb3IgaW4gb3JkZXIgdG8gcmVhY3QgdG8gc3RhdGUgY2hhbmdlcy5cclxuICBnb29nbGUubWFwcy5NYXJrZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuLy8gTWFya2VyV2l0aExhYmVsIGluaGVyaXRzIGZyb20gPGNvZGU+TWFya2VyPC9jb2RlPjpcclxuTWFya2VyV2l0aExhYmVsLnByb3RvdHlwZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBPdmVycmlkZXMgdGhlIHN0YW5kYXJkIE1hcmtlciBzZXRNYXAgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSB7TWFwfSB0aGVNYXAgVGhlIG1hcCB0byB3aGljaCB0aGUgbWFya2VyIGlzIHRvIGJlIGFkZGVkLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTWFya2VyV2l0aExhYmVsLnByb3RvdHlwZS5zZXRNYXAgPSBmdW5jdGlvbiAodGhlTWFwKSB7XHJcblxyXG4gIC8vIENhbGwgdGhlIGluaGVyaXRlZCBmdW5jdGlvbi4uLlxyXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5wcm90b3R5cGUuc2V0TWFwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblxyXG4gIC8vIC4uLiB0aGVuIGRlYWwgd2l0aCB0aGUgbGFiZWw6XHJcbiAgdGhpcy5sYWJlbC5zZXRNYXAodGhlTWFwKTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tYXJrZXJ3aXRobGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIihmdW5jdGlvbigkKVxyXG57XHJcblx0JC5mbi5ibGluayA9IGZ1bmN0aW9uKG9wdGlvbnMpXHJcblx0e1xyXG5cdFx0dmFyIGRlZmF1bHRzID0geyBkZWxheTo1MDAgfTtcclxuXHRcdHZhciBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0dmFyIG9iaiA9ICQodGhpcyk7XHJcblx0XHRcdHNldEludGVydmFsKGZ1bmN0aW9uKClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCQob2JqKS5jc3MoXCJ2aXNpYmlsaXR5XCIpID09IFwidmlzaWJsZVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCQob2JqKS5jc3MoJ3Zpc2liaWxpdHknLCdoaWRkZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCQob2JqKS5jc3MoJ3Zpc2liaWxpdHknLCd2aXNpYmxlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBvcHRpb25zLmRlbGF5KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufShqUXVlcnkpKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2pxdWVyeS1ibGluay5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXHJcbiAqIG51bWVyYWwuanNcclxuICogdmVyc2lvbiA6IDEuNS4zXHJcbiAqIGF1dGhvciA6IEFkYW0gRHJhcGVyXHJcbiAqIGxpY2Vuc2UgOiBNSVRcclxuICogaHR0cDovL2FkYW13ZHJhcGVyLmdpdGh1Yi5jb20vTnVtZXJhbC1qcy9cclxuICovXHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dGhpcy5fdmFsdWU9YX1mdW5jdGlvbiBiKGEsYixjLGQpe3ZhciBlLGYsZz1NYXRoLnBvdygxMCxiKTtyZXR1cm4gZj0oYyhhKmcpL2cpLnRvRml4ZWQoYiksZCYmKGU9bmV3IFJlZ0V4cChcIjB7MSxcIitkK1wifSRcIiksZj1mLnJlcGxhY2UoZSxcIlwiKSksZn1mdW5jdGlvbiBjKGEsYixjKXt2YXIgZDtyZXR1cm4gZD1iLmluZGV4T2YoXCIkXCIpPi0xP2UoYSxiLGMpOmIuaW5kZXhPZihcIiVcIik+LTE/ZihhLGIsYyk6Yi5pbmRleE9mKFwiOlwiKT4tMT9nKGEsYik6aShhLl92YWx1ZSxiLGMpfWZ1bmN0aW9uIGQoYSxiKXt2YXIgYyxkLGUsZixnLGk9YixqPVtcIktCXCIsXCJNQlwiLFwiR0JcIixcIlRCXCIsXCJQQlwiLFwiRUJcIixcIlpCXCIsXCJZQlwiXSxrPSExO2lmKGIuaW5kZXhPZihcIjpcIik+LTEpYS5fdmFsdWU9aChiKTtlbHNlIGlmKGI9PT1xKWEuX3ZhbHVlPTA7ZWxzZXtmb3IoXCIuXCIhPT1vW3BdLmRlbGltaXRlcnMuZGVjaW1hbCYmKGI9Yi5yZXBsYWNlKC9cXC4vZyxcIlwiKS5yZXBsYWNlKG9bcF0uZGVsaW1pdGVycy5kZWNpbWFsLFwiLlwiKSksYz1uZXcgUmVnRXhwKFwiW15hLXpBLVpdXCIrb1twXS5hYmJyZXZpYXRpb25zLnRob3VzYW5kK1wiKD86XFxcXCl8KFxcXFxcIitvW3BdLmN1cnJlbmN5LnN5bWJvbCtcIik/KD86XFxcXCkpPyk/JFwiKSxkPW5ldyBSZWdFeHAoXCJbXmEtekEtWl1cIitvW3BdLmFiYnJldmlhdGlvbnMubWlsbGlvbitcIig/OlxcXFwpfChcXFxcXCIrb1twXS5jdXJyZW5jeS5zeW1ib2wrXCIpPyg/OlxcXFwpKT8pPyRcIiksZT1uZXcgUmVnRXhwKFwiW15hLXpBLVpdXCIrb1twXS5hYmJyZXZpYXRpb25zLmJpbGxpb24rXCIoPzpcXFxcKXwoXFxcXFwiK29bcF0uY3VycmVuY3kuc3ltYm9sK1wiKT8oPzpcXFxcKSk/KT8kXCIpLGY9bmV3IFJlZ0V4cChcIlteYS16QS1aXVwiK29bcF0uYWJicmV2aWF0aW9ucy50cmlsbGlvbitcIig/OlxcXFwpfChcXFxcXCIrb1twXS5jdXJyZW5jeS5zeW1ib2wrXCIpPyg/OlxcXFwpKT8pPyRcIiksZz0wO2c8PWoubGVuZ3RoJiYhKGs9Yi5pbmRleE9mKGpbZ10pPi0xP01hdGgucG93KDEwMjQsZysxKTohMSk7ZysrKTthLl92YWx1ZT0oaz9rOjEpKihpLm1hdGNoKGMpP01hdGgucG93KDEwLDMpOjEpKihpLm1hdGNoKGQpP01hdGgucG93KDEwLDYpOjEpKihpLm1hdGNoKGUpP01hdGgucG93KDEwLDkpOjEpKihpLm1hdGNoKGYpP01hdGgucG93KDEwLDEyKToxKSooYi5pbmRleE9mKFwiJVwiKT4tMT8uMDE6MSkqKChiLnNwbGl0KFwiLVwiKS5sZW5ndGgrTWF0aC5taW4oYi5zcGxpdChcIihcIikubGVuZ3RoLTEsYi5zcGxpdChcIilcIikubGVuZ3RoLTEpKSUyPzE6LTEpKk51bWJlcihiLnJlcGxhY2UoL1teMC05XFwuXSsvZyxcIlwiKSksYS5fdmFsdWU9az9NYXRoLmNlaWwoYS5fdmFsdWUpOmEuX3ZhbHVlfXJldHVybiBhLl92YWx1ZX1mdW5jdGlvbiBlKGEsYixjKXt2YXIgZCxlLGY9Yi5pbmRleE9mKFwiJFwiKSxnPWIuaW5kZXhPZihcIihcIiksaD1iLmluZGV4T2YoXCItXCIpLGo9XCJcIjtyZXR1cm4gYi5pbmRleE9mKFwiICRcIik+LTE/KGo9XCIgXCIsYj1iLnJlcGxhY2UoXCIgJFwiLFwiXCIpKTpiLmluZGV4T2YoXCIkIFwiKT4tMT8oaj1cIiBcIixiPWIucmVwbGFjZShcIiQgXCIsXCJcIikpOmI9Yi5yZXBsYWNlKFwiJFwiLFwiXCIpLGU9aShhLl92YWx1ZSxiLGMpLDE+PWY/ZS5pbmRleE9mKFwiKFwiKT4tMXx8ZS5pbmRleE9mKFwiLVwiKT4tMT8oZT1lLnNwbGl0KFwiXCIpLGQ9MSwoZz5mfHxoPmYpJiYoZD0wKSxlLnNwbGljZShkLDAsb1twXS5jdXJyZW5jeS5zeW1ib2wraiksZT1lLmpvaW4oXCJcIikpOmU9b1twXS5jdXJyZW5jeS5zeW1ib2wraitlOmUuaW5kZXhPZihcIilcIik+LTE/KGU9ZS5zcGxpdChcIlwiKSxlLnNwbGljZSgtMSwwLGorb1twXS5jdXJyZW5jeS5zeW1ib2wpLGU9ZS5qb2luKFwiXCIpKTplPWUraitvW3BdLmN1cnJlbmN5LnN5bWJvbCxlfWZ1bmN0aW9uIGYoYSxiLGMpe3ZhciBkLGU9XCJcIixmPTEwMCphLl92YWx1ZTtyZXR1cm4gYi5pbmRleE9mKFwiICVcIik+LTE/KGU9XCIgXCIsYj1iLnJlcGxhY2UoXCIgJVwiLFwiXCIpKTpiPWIucmVwbGFjZShcIiVcIixcIlwiKSxkPWkoZixiLGMpLGQuaW5kZXhPZihcIilcIik+LTE/KGQ9ZC5zcGxpdChcIlwiKSxkLnNwbGljZSgtMSwwLGUrXCIlXCIpLGQ9ZC5qb2luKFwiXCIpKTpkPWQrZStcIiVcIixkfWZ1bmN0aW9uIGcoYSl7dmFyIGI9TWF0aC5mbG9vcihhLl92YWx1ZS82MC82MCksYz1NYXRoLmZsb29yKChhLl92YWx1ZS02MCpiKjYwKS82MCksZD1NYXRoLnJvdW5kKGEuX3ZhbHVlLTYwKmIqNjAtNjAqYyk7cmV0dXJuIGIrXCI6XCIrKDEwPmM/XCIwXCIrYzpjKStcIjpcIisoMTA+ZD9cIjBcIitkOmQpfWZ1bmN0aW9uIGgoYSl7dmFyIGI9YS5zcGxpdChcIjpcIiksYz0wO3JldHVybiAzPT09Yi5sZW5ndGg/KGMrPTYwKk51bWJlcihiWzBdKSo2MCxjKz02MCpOdW1iZXIoYlsxXSksYys9TnVtYmVyKGJbMl0pKToyPT09Yi5sZW5ndGgmJihjKz02MCpOdW1iZXIoYlswXSksYys9TnVtYmVyKGJbMV0pKSxOdW1iZXIoYyl9ZnVuY3Rpb24gaShhLGMsZCl7dmFyIGUsZixnLGgsaSxqLGs9ITEsbD0hMSxtPSExLG49XCJcIixyPSExLHM9ITEsdD0hMSx1PSExLHY9ITEsdz1cIlwiLHg9XCJcIix5PU1hdGguYWJzKGEpLHo9W1wiQlwiLFwiS0JcIixcIk1CXCIsXCJHQlwiLFwiVEJcIixcIlBCXCIsXCJFQlwiLFwiWkJcIixcIllCXCJdLEE9XCJcIixCPSExO2lmKDA9PT1hJiZudWxsIT09cSlyZXR1cm4gcTtpZihjLmluZGV4T2YoXCIoXCIpPi0xPyhrPSEwLGM9Yy5zbGljZSgxLC0xKSk6Yy5pbmRleE9mKFwiK1wiKT4tMSYmKGw9ITAsYz1jLnJlcGxhY2UoL1xcKy9nLFwiXCIpKSxjLmluZGV4T2YoXCJhXCIpPi0xJiYocj1jLmluZGV4T2YoXCJhS1wiKT49MCxzPWMuaW5kZXhPZihcImFNXCIpPj0wLHQ9Yy5pbmRleE9mKFwiYUJcIik+PTAsdT1jLmluZGV4T2YoXCJhVFwiKT49MCx2PXJ8fHN8fHR8fHUsYy5pbmRleE9mKFwiIGFcIik+LTE/KG49XCIgXCIsYz1jLnJlcGxhY2UoXCIgYVwiLFwiXCIpKTpjPWMucmVwbGFjZShcImFcIixcIlwiKSx5Pj1NYXRoLnBvdygxMCwxMikmJiF2fHx1PyhuKz1vW3BdLmFiYnJldmlhdGlvbnMudHJpbGxpb24sYS89TWF0aC5wb3coMTAsMTIpKTp5PE1hdGgucG93KDEwLDEyKSYmeT49TWF0aC5wb3coMTAsOSkmJiF2fHx0PyhuKz1vW3BdLmFiYnJldmlhdGlvbnMuYmlsbGlvbixhLz1NYXRoLnBvdygxMCw5KSk6eTxNYXRoLnBvdygxMCw5KSYmeT49TWF0aC5wb3coMTAsNikmJiF2fHxzPyhuKz1vW3BdLmFiYnJldmlhdGlvbnMubWlsbGlvbixhLz1NYXRoLnBvdygxMCw2KSk6KHk8TWF0aC5wb3coMTAsNikmJnk+PU1hdGgucG93KDEwLDMpJiYhdnx8cikmJihuKz1vW3BdLmFiYnJldmlhdGlvbnMudGhvdXNhbmQsYS89TWF0aC5wb3coMTAsMykpKSxjLmluZGV4T2YoXCJiXCIpPi0xKWZvcihjLmluZGV4T2YoXCIgYlwiKT4tMT8odz1cIiBcIixjPWMucmVwbGFjZShcIiBiXCIsXCJcIikpOmM9Yy5yZXBsYWNlKFwiYlwiLFwiXCIpLGc9MDtnPD16Lmxlbmd0aDtnKyspaWYoZT1NYXRoLnBvdygxMDI0LGcpLGY9TWF0aC5wb3coMTAyNCxnKzEpLGE+PWUmJmY+YSl7dys9eltnXSxlPjAmJihhLz1lKTticmVha31yZXR1cm4gYy5pbmRleE9mKFwib1wiKT4tMSYmKGMuaW5kZXhPZihcIiBvXCIpPi0xPyh4PVwiIFwiLGM9Yy5yZXBsYWNlKFwiIG9cIixcIlwiKSk6Yz1jLnJlcGxhY2UoXCJvXCIsXCJcIikseCs9b1twXS5vcmRpbmFsKGEpKSxjLmluZGV4T2YoXCJbLl1cIik+LTEmJihtPSEwLGM9Yy5yZXBsYWNlKFwiWy5dXCIsXCIuXCIpKSxoPWEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMF0saT1jLnNwbGl0KFwiLlwiKVsxXSxqPWMuaW5kZXhPZihcIixcIiksaT8oaS5pbmRleE9mKFwiW1wiKT4tMT8oaT1pLnJlcGxhY2UoXCJdXCIsXCJcIiksaT1pLnNwbGl0KFwiW1wiKSxBPWIoYSxpWzBdLmxlbmd0aCtpWzFdLmxlbmd0aCxkLGlbMV0ubGVuZ3RoKSk6QT1iKGEsaS5sZW5ndGgsZCksaD1BLnNwbGl0KFwiLlwiKVswXSxBPUEuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aD9vW3BdLmRlbGltaXRlcnMuZGVjaW1hbCtBLnNwbGl0KFwiLlwiKVsxXTpcIlwiLG0mJjA9PT1OdW1iZXIoQS5zbGljZSgxKSkmJihBPVwiXCIpKTpoPWIoYSxudWxsLGQpLGguaW5kZXhPZihcIi1cIik+LTEmJihoPWguc2xpY2UoMSksQj0hMCksaj4tMSYmKGg9aC50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZyxcIiQxXCIrb1twXS5kZWxpbWl0ZXJzLnRob3VzYW5kcykpLDA9PT1jLmluZGV4T2YoXCIuXCIpJiYoaD1cIlwiKSwoayYmQj9cIihcIjpcIlwiKSsoIWsmJkI/XCItXCI6XCJcIikrKCFCJiZsP1wiK1wiOlwiXCIpK2grQSsoeD94OlwiXCIpKyhuP246XCJcIikrKHc/dzpcIlwiKSsoayYmQj9cIilcIjpcIlwiKX1mdW5jdGlvbiBqKGEsYil7b1thXT1ifWZ1bmN0aW9uIGsoYSl7dmFyIGI9YS50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtyZXR1cm4gYi5sZW5ndGg8Mj8xOk1hdGgucG93KDEwLGJbMV0ubGVuZ3RoKX1mdW5jdGlvbiBsKCl7dmFyIGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtyZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXt2YXIgYz1rKGEpLGQ9ayhiKTtyZXR1cm4gYz5kP2M6ZH0sLTEvMCl9dmFyIG0sbj1cIjEuNS4zXCIsbz17fSxwPVwiZW5cIixxPW51bGwscj1cIjAsMFwiLHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM7bT1mdW5jdGlvbihiKXtyZXR1cm4gbS5pc051bWVyYWwoYik/Yj1iLnZhbHVlKCk6MD09PWJ8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9MDpOdW1iZXIoYil8fChiPW0uZm4udW5mb3JtYXQoYikpLG5ldyBhKE51bWJlcihiKSl9LG0udmVyc2lvbj1uLG0uaXNOdW1lcmFsPWZ1bmN0aW9uKGIpe3JldHVybiBiIGluc3RhbmNlb2YgYX0sbS5sYW5ndWFnZT1mdW5jdGlvbihhLGIpe2lmKCFhKXJldHVybiBwO2lmKGEmJiFiKXtpZighb1thXSl0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGxhbmd1YWdlIDogXCIrYSk7cD1hfXJldHVybihifHwhb1thXSkmJmooYSxiKSxtfSxtLmxhbmd1YWdlRGF0YT1mdW5jdGlvbihhKXtpZighYSlyZXR1cm4gb1twXTtpZighb1thXSl0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGxhbmd1YWdlIDogXCIrYSk7cmV0dXJuIG9bYV19LG0ubGFuZ3VhZ2UoXCJlblwiLHtkZWxpbWl0ZXJzOnt0aG91c2FuZHM6XCIsXCIsZGVjaW1hbDpcIi5cIn0sYWJicmV2aWF0aW9uczp7dGhvdXNhbmQ6XCJrXCIsbWlsbGlvbjpcIm1cIixiaWxsaW9uOlwiYlwiLHRyaWxsaW9uOlwidFwifSxvcmRpbmFsOmZ1bmN0aW9uKGEpe3ZhciBiPWElMTA7cmV0dXJuIDE9PT1+fihhJTEwMC8xMCk/XCJ0aFwiOjE9PT1iP1wic3RcIjoyPT09Yj9cIm5kXCI6Mz09PWI/XCJyZFwiOlwidGhcIn0sY3VycmVuY3k6e3N5bWJvbDpcIiRcIn19KSxtLnplcm9Gb3JtYXQ9ZnVuY3Rpb24oYSl7cT1cInN0cmluZ1wiPT10eXBlb2YgYT9hOm51bGx9LG0uZGVmYXVsdEZvcm1hdD1mdW5jdGlvbihhKXtyPVwic3RyaW5nXCI9PXR5cGVvZiBhP2E6XCIwLjBcIn0sXCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlLnJlZHVjZSYmKEFycmF5LnByb3RvdHlwZS5yZWR1Y2U9ZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtpZihudWxsPT09dGhpc3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5yZWR1Y2UgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkXCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEpdGhyb3cgbmV3IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO3ZhciBjLGQsZT10aGlzLmxlbmd0aD4+PjAsZj0hMTtmb3IoMTxhcmd1bWVudHMubGVuZ3RoJiYoZD1iLGY9ITApLGM9MDtlPmM7KytjKXRoaXMuaGFzT3duUHJvcGVydHkoYykmJihmP2Q9YShkLHRoaXNbY10sYyx0aGlzKTooZD10aGlzW2NdLGY9ITApKTtpZighZil0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKTtyZXR1cm4gZH0pLG0uZm49YS5wcm90b3R5cGU9e2Nsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIG0odGhpcyl9LGZvcm1hdDpmdW5jdGlvbihhLGIpe3JldHVybiBjKHRoaXMsYT9hOnIsdm9pZCAwIT09Yj9iOk1hdGgucm91bmQpfSx1bmZvcm1hdDpmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgTnVtYmVyXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpP2E6ZCh0aGlzLGE/YTpyKX0sdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdmFsdWV9LHZhbHVlT2Y6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdmFsdWV9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fdmFsdWU9TnVtYmVyKGEpLHRoaXN9LGFkZDpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7cmV0dXJuIGErYypifXZhciBjPWwuY2FsbChudWxsLHRoaXMuX3ZhbHVlLGEpO3JldHVybiB0aGlzLl92YWx1ZT1bdGhpcy5fdmFsdWUsYV0ucmVkdWNlKGIsMCkvYyx0aGlzfSxzdWJ0cmFjdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7cmV0dXJuIGEtYypifXZhciBjPWwuY2FsbChudWxsLHRoaXMuX3ZhbHVlLGEpO3JldHVybiB0aGlzLl92YWx1ZT1bYV0ucmVkdWNlKGIsdGhpcy5fdmFsdWUqYykvYyx0aGlzfSxtdWx0aXBseTpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7dmFyIGM9bChhLGIpO3JldHVybiBhKmMqYipjLyhjKmMpfXJldHVybiB0aGlzLl92YWx1ZT1bdGhpcy5fdmFsdWUsYV0ucmVkdWNlKGIsMSksdGhpc30sZGl2aWRlOmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXt2YXIgYz1sKGEsYik7cmV0dXJuIGEqYy8oYipjKX1yZXR1cm4gdGhpcy5fdmFsdWU9W3RoaXMuX3ZhbHVlLGFdLnJlZHVjZShiKSx0aGlzfSxkaWZmZXJlbmNlOmZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmFicyhtKHRoaXMuX3ZhbHVlKS5zdWJ0cmFjdChhKS52YWx1ZSgpKX19LHMmJihtb2R1bGUuZXhwb3J0cz1tKSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZW5kZXImJih0aGlzLm51bWVyYWw9bSksXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gbX0pfSkuY2FsbCh0aGlzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9udW1lcmFsLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgcGVyaW9kID0gMTAwMDsgLy8gdGltZSBiZXR3ZWVuIHJlZnJlc2hlcyBpbiBtc1xyXG5cclxudmFyIHBvc0NsaWVudCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoLTIzLjYyNjExLCAtNDYuNjU2Mzg3KVxyXG5pZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBcdHBvc0NsaWVudCA9IHtcclxuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcbnZhciBtYXBPcHRpb25zID0ge1xyXG5cdGNlbnRlciA6IHtcclxuXHRcdGxhdCA6IDAsXHJcblx0XHRsbmcgOiAwXHJcblx0fSxcclxuXHR6b29tIDogOSxcclxuXHRtYXBUeXBlSWQgOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuVEVSUkFJTixcclxuXHRjZW50ZXIgOiBwb3NDbGllbnRcclxufTtcclxudmFyIG1hcDtcclxudmFyIHBvbHlPcHRpb25zID0ge1xyXG5cdGdlb2Rlc2ljIDogdHJ1ZSxcclxuXHRzdHJva2VDb2xvciA6ICcjMDAwMDAwJyxcclxuXHRzdHJva2VPcGFjaXR5IDogMC44LFxyXG5cdHN0cm9rZVdlaWdodCA6IDNcclxufTtcclxudmFyIG1hcmtlck9wdGlvbnMgPSB7XHJcblx0aWNvbiA6IHtcclxuXHRcdHBhdGggOiBcIk0zNjIuOTg1LDQzMC43MjRsLTEwLjI0OCw1MS4yMzRsNjIuMzMyLDU3Ljk2OWwtMy4yOTMsMjYuMTQ1IGwtNzEuMzQ1LTIzLjU5OWwtMi4wMDEsMTMuMDY5bC0yLjA1Ny0xMy41MjlsLTcxLjI3OCxcIlxyXG5cdFx0XHRcdCsgXCIyMi45MjhsLTUuNzYyLTIzLjk4NGw2NC4wOTctNTkuMjcxbC04LjkxMy01MS4zNTlsMC44NTgtMTE0LjQzIGwtMjEuOTQ1LTExLjMzOGwtMTg5LjM1OCxcIlxyXG5cdFx0XHRcdCsgXCJcIlxyXG5cdFx0XHRcdCsgXCI4OC43NmwtMS4xOC0zMi4yNjJsMjEzLjM0NC0xODAuMDhsMC44NzUtMTA3LjQzNmw3Ljk3My0zMi4wMDVsNy42NDItMTIuMDU0bDcuMzc3LTMuOTU4bDkuMjM4LFwiXHJcblx0XHRcdFx0KyBcIjMuNjUgbDYuMzY3LDE0LjkyNWw3LjM2OSwzMC4zNjN2MTA2LjM3NWwyMTEuNTkyLDE4Mi4wODJsLTEuNDk2LDMyLjI0N2wtMTg4LjQ3OS05MC42MWwtMjEuNjE2LDEwLjA4N2wtMC4wOTQsMTE1LjY4NFwiLFxyXG5cdFx0c2NhbGUgOiAwLjA4LFxyXG5cdFx0ZmlsbE9wYWNpdHkgOiAxLFxyXG5cdFx0YW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDM0MCwgMzQwKSxcclxuXHRcdHN0cm9rZVdlaWdodCA6IDAuNVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBpY29uQWlycG9ydCA9IHtcclxuXHQvL3VybCA6ICdhaXJwb3J0LnBuZycsXHJcblx0dXJsIDogJy4vaW1hZ2VzL2FpcnBvcnQucG5nJyxcclxuXHRzaXplIDogbmV3IGdvb2dsZS5tYXBzLlNpemUoMzAsIDUwKSxcclxuXHRvcmlnaW4gOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcblx0YW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDE1LCA1MClcclxufTtcclxuXHJcbnZhciBpY29uV2F5cG9pbnQgPSB7XHJcblx0cGF0aCA6IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLFxyXG5cdHNjYWxlIDogNixcclxuXHRzdHJva2VDb2xvciA6ICcjMDAwMEZGJyxcclxuXHRzdHJva2VPcGFjaXR5IDogMSxcclxuXHRzdHJva2VXZWlnaHQgOiAzLFxyXG5cdGZpbGxDb2xvciA6ICd3aGl0ZScsXHJcblx0ZmlsbE9wYWNpdHkgOiAxLFxyXG59O1xyXG5cclxudmFyIGljb25MYWJlbFJvdXRlID0ge1xyXG5cdHBhdGggOiBcIm05Niw0NFwiLFxyXG5cdHNjYWxlIDogMSxcclxuXHRzdHJva2VDb2xvciA6ICcjRkZGRkZGJyxcclxuXHRzdHJva2VPcGFjaXR5IDogMSxcclxuXHRzdHJva2VXZWlnaHQgOiAxLFxyXG5cdGZpbGxDb2xvciA6ICd3aGl0ZScsXHJcblx0ZmlsbE9wYWNpdHkgOiAxMDAsXHJcbn07XHJcblxyXG52YXIgaWNvblZPUiA9IHtcclxuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXHJcblx0c2NhbGUgOiA3LFxyXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwMDAnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDMsXHJcblx0ZmlsbENvbG9yIDogJ3llbGxvdycsXHJcblx0ZmlsbE9wYWNpdHkgOiAxLFxyXG59O1xyXG5cclxudmFyIGljb25OREIgPSB7XHJcblx0cGF0aCA6IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLFxyXG5cdHNjYWxlIDogNyxcclxuXHRzdHJva2VDb2xvciA6ICcjMjYyNjI2JyxcclxuXHRzdHJva2VPcGFjaXR5IDogMSxcclxuXHRzdHJva2VXZWlnaHQgOiAzLFxyXG5cdGZpbGxDb2xvciA6ICcjRkZEMDVDJyxcclxuXHRmaWxsT3BhY2l0eSA6IDEsXHJcbn07XHJcblxyXG52YXIgcGxhbmVMaXN0ID0ge307XHJcbnZhciByZWZyZXNoQ29udHJvbFBhbmVsID0gZmFsc2U7XHJcbnZhciBwbGFuZVRvRm9sbG93ID0gbnVsbDtcclxudmFyIGNvbG9ycyA9IFsgXCJibHVlXCIsXCIjMjY3NjRFXCIsIFwiI0YwODUyNlwiLCBcIiM5Q0ZGNTRcIiwgXCIjNzIxQjQ5XCIsIFwiI0E3RDhGOFwiLFwiIzJBRkRCQ1wiLCBcIiNGQkU4NzBcIiwgXCIjNzExMzAyXCIsIFwiIzI1NzJDMlwiLCBcIiMxQzI3MURcIiwgXCIjNjMyRTg1XCIsXHJcblx0XHRcIiMxRTVGN0FcIiwgXCIjRDhCMkY1XCIsIFwiI0QzMDdBMlwiLCBcIiNGMzkxQjVcIiwgXCIjRjE4MEY1XCIsIFwiIzNBMUUyRVwiLFwiI0FFNzcwN1wiLCBcIiMzRTNEMEVcIiwgXCIjNkFCMDZFXCIgXTtcclxudmFyIGNvbG9yX2luZGV4ID0gMDtcclxudmFyIG5hdk1hcDtcclxudmFyIGZsaWdodFBsYW4gPSB7fTtcclxudmFyIGZsaWdodFBhdGg7IC8vIGFuIG9iamVjdCBnb29nbGUubWFwcy5Qb2x5bGluZSAtIHJlcHJlc2VudGluZyB0aGUgRmxpZ2h0IFBsYW5cclxudmFyIG1hcmtlcnMgPSBbXTtcclxudmFyIHJvdXRlTGFiZWxzT2ZmU2V0ID0gW107XHJcbnZhciBtYXJrZXJzTGFiZWxSb3V0ZSA9IFtdO1xyXG52YXIgbWFya2Vyc1dheXBvaW50ICAgPSBbXTtcclxudmFyIGVsSW5mb0JveFBsYW5lO1xyXG52YXIgY2hhc2VBaXJwbGFuZSA9IGZhbHNlO1xyXG5cclxuJC5hamF4U2V0dXAoe1xyXG5cdGNhY2hlIDogZmFsc2VcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cclxuXHRtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY2FudmFzJyksIG1hcE9wdGlvbnMpO1xyXG5cclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdkcmFnc3RhcnQnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyNub2ZvY3VzJykuY2xpY2soKTtcclxuXHR9KTtcclxuXHJcblx0JCgnYm9keScpLmtleWRvd24oZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGUua2V5Q29kZSA9PSAxOTIpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR0b2dnbGVGbGlnaHRQYW5lbCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGUua2V5Q29kZSA9PSAxOSkge1xyXG5cdFx0XHQkLmdldEpTT04oXCJwYXVzZVwiKS5kb25lKGZ1bmN0aW9uKGRhdGEpe30pLmVycm9yKGZ1bmN0aW9uKCkge3Nob3dFcnJvcignTm90IGFibGUgdG8gUGF1c2UgWC1QbGFuZS4nKX0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdCBtYXAuYWRkTGlzdGVuZXIoJ3pvb21fY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdCAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHQgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3V0ZUxhYmVsc09mZlNldC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICBcdCAgIHZhciBkaXN0TGFiZWxSb3V0ZSA9IDI0MDAwO1xyXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxNiApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gNTA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDE1ICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDEyICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDAwO1xyXG5cdCAgICBcdCAgIH0gZWxzZVxyXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxMCApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gMTIwMDA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDggKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDE2MDAwO1xyXG5cdCAgICBcdCAgIH1cclxuXHQgICAgXHQgICB2YXIgaGRnTGFiZWwgPSBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcocm91dGVMYWJlbHNPZmZTZXRbaV0ubGF0bG5nLCByb3V0ZUxhYmVsc09mZlNldFtpXS5uZXh0TGF0TG5nKTsgXHJcblx0ICAgIFx0ICAgdmFyIG9mZnNldCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KHJvdXRlTGFiZWxzT2ZmU2V0W2ldLmxhdGxuZywgZGlzdExhYmVsUm91dGUsIGhkZ0xhYmVsLCA2MzcxMDAwKTtcclxuXHQgICAgXHQgICBtYXJrZXJzTGFiZWxSb3V0ZVtpXS5wb3NpdGlvbiA9IG9mZnNldDsgXHJcbiAgICBcdCAgIH1cclxuXHQgICAgfSwxKTtcclxuXHR9KTtcclxuXHQgXHJcblx0dXBkYXRlUG9zaXRpb24oKTtcclxuXHRzZXRJbnRlcnZhbCh1cGRhdGVQb3NpdGlvbiwgcGVyaW9kKTtcclxuXHRzZXRJbnRlcnZhbChjaGVja0ZsaWdodFBsYW5Cb3hBbmRMb2FkLCAyMDAwKTtcclxuXHJcblx0Ly8gbmF2IGRhdGEgb3ZlcmxheXNcclxuXHQvKm5hdk1hcCA9IG5ldyBnb29nbGUubWFwcy5JbWFnZU1hcFR5cGUoe1xyXG5cdFx0Z2V0VGlsZVVybCA6IGZ1bmN0aW9uKGNvb3JkLCB6b29tKSB7XHJcblx0XHRcdHRpbGVTaXplID0gMjU2IC8gTWF0aC5wb3coMiwgem9vbSk7XHJcblx0XHRcdHdlc3QgPSBjb29yZC54ICogdGlsZVNpemU7XHJcblx0XHRcdGVhc3QgPSB3ZXN0ICsgdGlsZVNpemU7XHJcblx0XHRcdG5vcnRoID0gY29vcmQueSAqIHRpbGVTaXplO1xyXG5cdFx0XHRzb3V0aCA9IG5vcnRoICsgdGlsZVNpemU7XHJcblxyXG5cdFx0XHRub3J0aEVhc3QgPSBtYXAuZ2V0UHJvamVjdGlvbigpLmZyb21Qb2ludFRvTGF0TG5nKFxyXG5cdFx0XHRcdFx0bmV3IGdvb2dsZS5tYXBzLlBvaW50KGVhc3QsIG5vcnRoKSk7XHJcblx0XHRcdHNvdXRoV2VzdCA9IG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbVBvaW50VG9MYXRMbmcoXHJcblx0XHRcdFx0XHRuZXcgZ29vZ2xlLm1hcHMuUG9pbnQod2VzdCwgc291dGgpKTtcclxuXHJcblx0XHRcdC8vIGh0dHA6Ly94LXBsYW5lLW1hcC5mb3VjLm5ldC9uYXYucGhwP25vcnRoPS0yNC41MjcxJTIwJnNvdXRoPS0yNS43OTk5JTIwJmVhc3Q9LTQ2LjQwNjMlMjAmd2VzdD0tNDcuODEyNVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygpO1xyXG5cclxuXHRcdFx0cmV0dXJuIFsgJ2h0dHA6Ly94LXBsYW5lLW1hcC5mb3VjLm5ldC9uYXYucGhwP25vcnRoPScsXHJcblx0XHRcdFx0XHRub3J0aEVhc3QubGF0KCkudG9GaXhlZCg0KSwgJyZzb3V0aD0nLFxyXG5cdFx0XHRcdFx0c291dGhXZXN0LmxhdCgpLnRvRml4ZWQoNCksICcmZWFzdD0nLFxyXG5cdFx0XHRcdFx0bm9ydGhFYXN0LmxuZygpLnRvRml4ZWQoNCksICcmd2VzdD0nLFxyXG5cdFx0XHRcdFx0c291dGhXZXN0LmxuZygpLnRvRml4ZWQoNCkgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqICwgJyZ0eXBlPUFQVCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IF0uam9pbignJyk7XHJcblx0XHR9LFxyXG5cdFx0dGlsZVNpemUgOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTYsIDI1NiksXHJcblx0XHRtaW5ab29tIDogNixcclxuXHRcdG1heFpvb20gOiAxMlxyXG5cdH0pO1xyXG5cclxuXHRtYXAub3ZlcmxheU1hcFR5cGVzLnB1c2gobmF2TWFwKTtcclxuXHRuYXZNYXAuc2V0T3BhY2l0eSgwKTsqL1xyXG59XHJcblxyXG52YXIgZmxpZ2h0cGxhblRleHQgPSAnbm9uZSc7XHJcbmZ1bmN0aW9uIGNoZWNrRmxpZ2h0UGxhbkJveEFuZExvYWQoKSB7XHJcblx0aWYgKCQoJyNwYW5lbC1mcCcpLmlzKFwiOmhpZGRlblwiKSA9PSBmYWxzZSkge1xyXG5cdFx0dmFyIHRleHQgPSAkKCd0ZXh0YXJlYSNib3hGbGlnaHRQbGFuJykudmFsKCk7XHJcblx0XHRpZiAodGV4dCAhPSBmbGlnaHRwbGFuVGV4dCkge1xyXG5cdFx0XHRmbGlnaHRwbGFuVGV4dCA9IHRleHQ7XHJcblx0XHRcdHZhciBwYXJhbXMgPSB7fTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChmbGlnaHRQYXRoICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGZsaWdodFBhdGguc2V0TWFwKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNsZWFyTWFya2VycygpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCBmbGlnaHRwbGFuVGV4dC5sZW5ndGggPiA4ICkge1xyXG5cdFx0XHRcdHZhciBncm91cHMgPSBmbGlnaHRwbGFuVGV4dC50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcclxuXHRcdFx0XHR2YXIgd2F5cG9pbnRzID0gXCJcIjtcclxuXHRcdFx0XHRpZiAoIGdyb3Vwcy5sZW5ndGggPiAxICkge1xyXG5cdFx0XHRcdCAgICBmb3IodmFyIGkgPSAxOyBpIDwgKGdyb3Vwcy5sZW5ndGgtMSk7IGkrKykge1xyXG5cdFx0XHRcdFx0ICAgd2F5cG9pbnRzICs9IGdyb3Vwc1tpXTtcclxuXHRcdFx0XHQgICAgICAgaWYgKHdheXBvaW50cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0ICAgICAgICBcdHdheXBvaW50cyArPSBcIitcIjtcclxuXHRcdFx0XHQgICAgXHR9XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cGFyYW1zID0ge1xyXG5cdFx0XHRcdCAgICBkZXBhcnR1cmUgOiBncm91cHNbMF0sXHJcblx0XHRcdFx0ICAgIHdheXBvaW50cyA6IHdheXBvaW50cyxcclxuXHRcdFx0XHQgICAgZGVzdGluYXRpb24gOiBncm91cHNbZ3JvdXBzLmxlbmd0aCAtIDFdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZSh0cnVlKTtcclxuXHRcdFx0JC5nZXRKU09OKFwiZmxpZ2h0cGxhblwiLHBhcmFtc1xyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQuZG9uZShmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRzaG93RXJyb3IoXCJFcnJvciBsb2FkaW5nIEZsaWdodCBQbGFuLiBObyBjb250ZW50IHdhcyByZXR1cm5lZC5cIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbiA9IGRhdGE7XHJcblx0XHRcdFx0XHRcdGxvYWRGbGlnaHRQbGFuKCk7XHJcblx0XHRcdFx0XHRcdGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUoZmFsc2UpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmVycm9yKFxyXG5cdFx0XHRcdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRzaG93RXJyb3IoJ1BsZWFzZSBjaGVjayB0aGUgY29ubmVjdGlvbiB3aXRoIGh0dHA6Ly9zZXJ2ZXI6cG9ydC9mbGlnaHRwbGFuLCBpcyBub3Qgd29ya2luZy4nKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUobG9hZGluZykge1xyXG5cdGlmICggbG9hZGluZyApIHtcclxuXHRcdCQoXCIjZmxpZ2h0cGxhbi1sb2FkaW5nXCIpLnNob3coKTtcclxuXHRcdCQoXCIjYm94RmxpZ2h0UGxhblwiKS5jc3MoJ2NvbG9yJywgJ2xpZ2h0Z3JheScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKFwiI2ZsaWdodHBsYW4tbG9hZGluZ1wiKS5oaWRlKCk7XHJcblx0XHQkKFwiI2JveEZsaWdodFBsYW5cIikuY3NzKCdjb2xvcicsICdibGFjaycpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZsaWdodFBsYW4oKSB7XHJcblx0Ly8gTG9hZGluZyBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMgdmFyaWFibGVcclxuXHR2YXIgZGVwYXJ0dXJlTGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmbGlnaHRQbGFuLmRlcGFydHVyZS5sYXRpdHVkZSwgZmxpZ2h0UGxhbi5kZXBhcnR1cmUubG9uZ2l0dWRlKTtcclxuXHR2YXIgZGVzdGluYXRpb25MYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4uZGVzdGluYXRpb24ubGF0aXR1ZGUsIGZsaWdodFBsYW4uZGVzdGluYXRpb24ubG9uZ2l0dWRlKTsgXHJcblx0dmFyIGFyckNvb3JkID0gbmV3IEFycmF5KCk7XHJcblx0YXJyQ29vcmRbMF0gPSBkZXBhcnR1cmVMYXRMbmc7XHJcblx0dmFyIHRvdGFsV2F5cG9pbnRzID0gMDtcclxuXHR2YXIgdG90YWxEaXN0YW5jZSA9IDA7XHJcblx0d2hpbGUgKHRvdGFsV2F5cG9pbnRzIDwgZmxpZ2h0UGxhbi53YXlwb2ludHMubGVuZ3RoKSB7XHJcblx0XHRhcnJDb29yZFt0b3RhbFdheXBvaW50cyArIDFdID0gXHJcblx0XHRcdG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXHJcblx0XHRcdFx0XHRmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubGF0aXR1ZGUsZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxvbmdpdHVkZVxyXG5cdFx0XHQpO1xyXG5cdFx0Ly8gTWFyayB0aGUgV2F5cG9pbnRcclxuXHRcdHdheXBvaW50ID0ge1xyXG5cdFx0XHRpZCA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5pZCxcclxuXHRcdFx0bGF0bG5nIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubGF0aXR1ZGUsZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxvbmdpdHVkZSksXHJcblx0XHRcdHR5cGUgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10udHlwZSxcclxuXHRcdFx0ZGVzY3IgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubmFtZSxcclxuXHRcdFx0ZnJlcSA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5mcmVxdWVuY3lcclxuXHRcdH1cclxuXHRcdG1hcmtXYXlwb2ludCh3YXlwb2ludCk7XHJcblxyXG5cdFx0dG90YWxXYXlwb2ludHMrKztcclxuXHR9XHJcblx0YXJyQ29vcmRbdG90YWxXYXlwb2ludHMgKyAxXSA9IGRlc3RpbmF0aW9uTGF0TG5nO1xyXG5cdHZhciBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMgPSBhcnJDb29yZDtcclxuXHJcblx0Ly8gTG9hZGluZyBGbGlnaHQgUGxhbiBQb2x5bGluZSAtIERyYXcgdGhlIGxpbmVcclxuXHRmbGlnaHRQYXRoID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcclxuXHRcdHBhdGggOiBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMsXHJcblx0XHRnZW9kZXNpYyA6IGZhbHNlLFxyXG5cdFx0c3Ryb2tlQ29sb3IgOiAnIzAwMDBGRicsXHJcblx0XHRzdHJva2VPcGFjaXR5IDogMC41LFxyXG5cdFx0c3Ryb2tlV2VpZ2h0IDogNlxyXG5cdH0pO1xyXG5cdGZsaWdodFBhdGguc2V0TWFwKG1hcCk7XHJcblxyXG5cdC8vIE1hcmsgZm9yIHRoZSBBaXJwb3J0IERlcGFydHVyZVxyXG5cdGRlcGFydHVyZSA9IHtcclxuXHRcdGlkIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUuaWNhb0lkLFxyXG5cdFx0bmFtZSA6IGZsaWdodFBsYW4uZGVwYXJ0dXJlLm5hbWUsXHJcblx0XHRsYXRsbmcgOiBkZXBhcnR1cmVMYXRMbmcsXHJcblx0XHRydW53YXlzIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUuYXJyYXlSdW53YXlzXHJcblx0fVxyXG5cdG1hcmtBaXJwb3J0KGRlcGFydHVyZSwnZGVwYXJ0dXJlJyk7XHJcblxyXG5cdC8vIE1hcmsgZm9yIHRoZSBBaXJwb3J0IERlc3RpbmF0aW9uXHJcblx0ZGVzdGluYXRpb24gPSB7XHJcblx0XHRpZCA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24uaWNhb0lkLFxyXG5cdFx0bmFtZSA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24ubmFtZSxcclxuXHRcdGxhdGxuZyA6IGRlc3RpbmF0aW9uTGF0TG5nLFxyXG5cdFx0cnVud2F5cyA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24uYXJyYXlSdW53YXlzXHJcblx0fVxyXG5cdG1hcmtBaXJwb3J0KGRlc3RpbmF0aW9uLCdkZXN0aW5hdGlvbicpO1xyXG5cdFxyXG5cdC8vIFBhbmVsIEluZm8gRmxpZ2h0IFBsYW5cclxuXHQkKFwiI2ZwSW5mby1EZXBhcnR1cmVcIikudGV4dChkZXBhcnR1cmUuaWQgKyAnIC0gJyArIGRlcGFydHVyZS5uYW1lICsgJyBBaXJwb3J0Jyk7XHJcblx0JChcIiNmcEluZm8tRGVzdGluYXRpb25cIikudGV4dChkZXN0aW5hdGlvbi5pZCArICcgLSAnICsgZGVzdGluYXRpb24ubmFtZSArICcgQWlycG9ydCcpO1xyXG5cdFxyXG5cdC8vIE1hcmsgTGFiZWxzIEJlYXJpbmcvRGlzdGFuY2VcclxuXHR2YXIgaW5kZXggPSAwO1xyXG5cdHdoaWxlIChpbmRleCA8IGZsaWdodFBsYW4uaW5mb1JvdXRlLmxlbmd0aCkge1xyXG5cdFx0dG90YWxEaXN0YW5jZSArPSBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2VOTTtcclxuXHRcdGxhYmVsUm91dGUgPSB7XHJcblx0XHRcdGRpc3RhbmNlTk0gOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2VOTSxcclxuXHRcdFx0ZGlzdGFuY2UgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2UsXHJcblx0XHRcdGJlYXJpbmcgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uYmVhcmluZyxcclxuXHRcdFx0YmVhcmluZ0RlZ3JlZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5iZWFyaW5nRGVncmVlLFxyXG5cdFx0XHRsYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxyXG5cdFx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubGF0aXR1ZGUsXHJcblx0XHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5sb25naXR1ZGUpLFxyXG5cdFx0XHRuZXh0TGF0bG5nIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcclxuXHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0TGF0aXR1ZGUsXHJcblx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubmV4dExvbmdpdHVkZSksXHJcblx0XHRcdHJvdGF0ZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5iZWFyaW5nLFxyXG5cdFx0XHRuZXh0UG9pbnQgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubmV4dFBvaW50LFxyXG5cdFx0XHRjdXJyZW50UG9pbnQgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uY3VycmVudFBvaW50LFxyXG5cdFx0XHRjb21wYXNzSGVhZGluZyA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5jb21wYXNzSGVhZGluZ1xyXG5cdFx0fVxyXG5cdFx0bWFya0xhYmVsUm91dGUobGFiZWxSb3V0ZSk7XHJcblx0XHRpbmRleCsrO1xyXG5cdH1cclxuXHJcblx0JChcIiNmcEluZm8tUm91dGVEaXN0YW5jZVwiKVxyXG5cdFx0LnRleHQoXHJcblx0XHRcdG51bWVyYWwodG90YWxEaXN0YW5jZSkuZm9ybWF0KCcwLDAnKSArICdubScgKyAnIC8gJyArXHJcblx0XHRcdG51bWVyYWwoKHRvdGFsRGlzdGFuY2UgKiAxLjg1MikpLmZvcm1hdCgnMCwwJykgKyAna20nXHJcblx0ICAgICAgICApO1xyXG5cdCAgICAgICAgXHJcblx0dmFyIHBhbkZsaWdodFBsYW4gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKGRlcGFydHVyZUxhdExuZywgZGVzdGluYXRpb25MYXRMbmcpO1xyXG5cdG1hcC5maXRCb3VuZHMocGFuRmxpZ2h0UGxhbik7XHJcblx0Ly9tYXAucGFuVG9Cb3VuZHMocGFuRmxpZ2h0UGxhbik7XHJcblx0Ly9tYXAuc2V0Wm9vbSgxMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVNYXJrKG0pIHtcclxuXHRtYXJrZXJzLnB1c2gobSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJNYXJrZXJzKCkge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgbWFya2Vyc1tpXS5zZXRNYXAobnVsbCk7XHJcbiAgfVxyXG4gIHJvdXRlTGFiZWxzT2ZmU2V0ID0gW107XHJcbiAgbWFya2Vyc0xhYmVsUm91dGUgPSBbXTtcclxuICBtYXJrZXJzV2F5cG9pbnQgICA9IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrTGFiZWxSb3V0ZShsYWJlbFJvdXRlKSB7XHJcblx0Ly92YXIgZGlzdExhYmVsID0gbGFiZWxSb3V0ZS5kaXN0YW5jZU5NICogMS44NTI7IC8vIGNvbnZlcnQgbm0gdG8gbWV0ZXJzXHJcblx0Ly92YXIgaGRnTGFiZWwgPSBsYWJlbFJvdXRlLmJlYXJpbmdEZWdyZWUgLSAyMjtcclxuXHQvL3ZhciBkaXN0TGFiZWwgPSAyNDAwMDsgXHJcblx0cm91dGVMYWJlbHNPZmZTZXQucHVzaChcclxuXHRcdHtcclxuXHRcdFx0bGF0bG5nIDogbGFiZWxSb3V0ZS5sYXRsbmcsXHJcblx0XHRcdG5leHRMYXRMbmcgOiBsYWJlbFJvdXRlLm5leHRMYXRsbmdcclxuXHRcdH1cclxuXHQpO1xyXG5cdHZhciBkaXN0TGFiZWxSb3V0ZSA9IDEyMDAwO1xyXG5cdHZhciBoZGdMYWJlbCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhsYWJlbFJvdXRlLmxhdGxuZywgbGFiZWxSb3V0ZS5uZXh0TGF0bG5nKTsgXHJcblx0dmFyIG9mZnNldCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGxhYmVsUm91dGUubGF0bG5nLCBkaXN0TGFiZWxSb3V0ZSwgaGRnTGFiZWwsIDYzNzEwMDApO1xyXG5cdHZhciBhbmdsZVJvdGF0ZSA9IGhkZ0xhYmVsIC0gOTA7XHJcblx0aWYgKCBhbmdsZVJvdGF0ZSA+IC0yNzAgJiYgYW5nbGVSb3RhdGUgPCAtOTAgKSB7XHJcblx0XHQgYW5nbGVSb3RhdGUgPSBhbmdsZVJvdGF0ZSAtIDE4MDtcclxuXHR9XHJcblx0dmFyIGxhYmVsID0gbGFiZWxSb3V0ZS5iZWFyaW5nICsgXCImZGVnIFwiICsgbnVtZXJhbChsYWJlbFJvdXRlLmRpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgXCJubVwiO1xyXG5cdHZhciB4ID0gMjM7XHJcblx0dmFyIHkgPSAwO1xyXG5cdHZhciBhbmNob3IgPSBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoeCwgeSk7XHJcblx0dmFyIG1hcmtlckxhYmVsUm91dGUgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcclxuXHRcdHBvc2l0aW9uIDogb2Zmc2V0LFxyXG5cdFx0YW5pbWF0aW9uIDogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcblx0XHRsYWJlbENvbnRlbnQgOiBsYWJlbCxcclxuXHRcdGxhYmVsQW5jaG9yIDogYW5jaG9yLFxyXG5cdFx0bGFiZWxDbGFzcyA6IFwibGFiZWxzSW5mb1JvdXRlXCIsXHJcblx0XHRjbGlja2FibGUgOiB0cnVlLFxyXG5cdFx0aWNvbiA6IGljb25MYWJlbFJvdXRlLFxyXG5cdFx0cm90YXRlIDogYW5nbGVSb3RhdGVcclxuXHR9KTtcclxuXHRcclxuXHR2YXIgaW5mb0NvbnRlbnQgPSBcIjx0YWJsZSB3aWR0aD0nMTAwJScgYm9yZGVyPTAgY2xhc3M9J3J1bndheVRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz5cIjtcclxuXHRcclxuXHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSAgd2lkdGg9JzEwMCUnIGJvcmRlcj0wIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHZhbGlnbj0nbWlkZGxlJyB3aWR0aD0nMzBweCc+PGltZyBzcmM9J2Fycm93LnBuZyc+PC90ZD5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0ZCB2YWxpZ249J21pZGRsZScgd2lkdGg9JzE1MHB4Jz5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIiZuYnNwOyZuYnNwOyZuYnNwO1JvdXRlOjxicj48Yj4mbmJzcDsmbmJzcDtcIiArIGxhYmVsUm91dGUuY3VycmVudFBvaW50ICsgXHJcblx0XHRcdFx0ICAgXCI8L2I+Jm5ic3A7dG8mbmJzcDs8Yj5cIiArIGxhYmVsUm91dGUubmV4dFBvaW50ICsgXCI8L2I+PC90ZD5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj48L3RhYmxlPlwiO1xyXG5cdFxyXG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHI+PC90ZD48L3RyPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nNjBweCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gICBcIkRpc3RhbmNlOjwvdGQ+PHRkPiA8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIFxyXG5cdFx0XHRcdFx0XHRcdFx0bnVtZXJhbChsYWJlbFJvdXRlLmRpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgXCJubTwvc3Bhbj4mbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7XCIgKyBcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJhbChNYXRoLmNlaWwobGFiZWxSb3V0ZS5kaXN0YW5jZU5NIC8gMC41Mzk5NikpLmZvcm1hdCgnMCwwJykgK1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia208L3NwYW4+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9ICAgXCJIZWFkaW5nOjwvdGQ+PHRkPiA8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIGxhYmVsUm91dGUuYmVhcmluZyArIFwiJmRlZzwvc3Bhbj4mbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7XCIgKyBcclxuICAgIFx0XHRcdFx0ICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBsYWJlbFJvdXRlLmNvbXBhc3NIZWFkaW5nICsgXCI8L3NwYW4+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdHZhciBpbmZvQm94ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2PicsXHJcblx0XHRwaXhlbE9mZnNldDogbmV3IGdvb2dsZS5tYXBzLlNpemUoLTMwLC0yNSxcInB4XCIsXCJweFwiKVxyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckxhYmVsUm91dGUsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRpbmZvQm94Lm9wZW4obWFwLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJMYWJlbFJvdXRlLCBcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRjaGFuZ2VDb2xvckluZm9Cb3goZWwsXCJyZ2IoMjU1LDI1NSwyNTUpXCIpO1xyXG5cdFx0XHRpbmZvQm94LmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb0JveCwgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG5cdCAgICBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XHJcblx0XHRjaGFuZ2VDb2xvckluZm9Cb3goZWwsXCJyZ2JhKDEyNywyNTUsMjEyLDAuODIpXCIpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdG1hcmtlckxhYmVsUm91dGUuc2V0TWFwKG1hcCk7XHJcblx0c2F2ZU1hcmsobWFya2VyTGFiZWxSb3V0ZSk7XHJcblx0bWFya2Vyc0xhYmVsUm91dGUucHVzaChtYXJrZXJMYWJlbFJvdXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya0FpcnBvcnQoYWlycG9ydCx0eXBlKSB7XHJcblx0dmFyIG1hcmtlckFpcnBvcnQgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcclxuXHRcdHBvc2l0aW9uIDogYWlycG9ydC5sYXRsbmcsXHJcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuXHRcdGljb24gOiBpY29uQWlycG9ydCxcclxuXHRcdGxhYmVsQ29udGVudCA6IGFpcnBvcnQuaWQsXHJcblx0XHRsYWJlbEFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgyMCwgNzApLFxyXG5cdFx0bGFiZWxDbGFzcyA6IFwibGFiZWxzQWlycG9ydFwiXHJcblx0fSk7XHJcblxyXG5cdHZhciBpbWFnZSA9IFwiPGltZyBzcmM9J3Rha2VvZmYucG5nJy8+XCI7XHJcblx0aWYgKCB0eXBlID09ICdkZXN0aW5hdGlvbicgKSB7XHJcblx0XHRpbWFnZSA9IFwiPGltZyBzcmM9J2xhbmRpbmcucG5nJy8+XCI7XHJcblx0fVxyXG5cdHZhciBpbmZvQ29udGVudCA9IFwiXCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgYm9yZGVyPTAgd2lkdGg9JzEwMCUnIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzYwcHgnIGFsaWduPSdsZWZ0Jz5cIiArIGltYWdlICsgXCI8L3RkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPGI+XCIgKyBhaXJwb3J0LmlkICsgXCI8L2I+IC0gXCIgKyBhaXJwb3J0Lm5hbWU7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzQnPjxocj48L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRhYmxlIHdpZHRoPScxMDAlJyBib3JkZXI9MCBjbGFzcz0ncnVud2F5VGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhaXJwb3J0LnJ1bndheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+UnVud2F5IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxyXG5cdFx0XHRcdCsgYWlycG9ydC5ydW53YXlzW2ldLm51bWJlclxyXG5cdFx0XHRcdCsgXCI8L3NwYW4+PC90ZD5cIlxyXG5cdFx0XHRcdCsgXCIgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0hlYWRpbmc6IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxyXG5cdFx0XHRcdCsgYWlycG9ydC5ydW53YXlzW2ldLmhlYWRpbmdcclxuXHRcdFx0XHQrIFwiPGZvbnQgc2l6ZT0nMnB4Jz4mZGVnOzwvZm9udD48L3NwYW4+PC90ZD5cIlxyXG5cdFx0XHRcdCsgXCIgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0ZyZXF1ZW5jeTogPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXHJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0uZnJlcXVlbmN5ICsgXCI8L3NwYW4+PGJyLz48L3RkPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RWxldmF0aW9uOiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcclxuXHRcdFx0XHQrIG51bWVyYWwoYWlycG9ydC5ydW53YXlzW2ldLmVsZXZhdGlvbikuZm9ybWF0KCcwLDAnKSArIFwiIGZ0PC9zcGFuPjxici8+PC90ZD5cIiArIFwiPC90cj5cIjtcclxuXHR9XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cclxuXHR2YXIgaW5mb00xID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2PidcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJBaXJwb3J0LCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpbmZvTTEub3BlbihtYXAsIHRoaXMpO1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckFpcnBvcnQsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwiaGlkZGVuXCIpO1xyXG5cdFx0fVxyXG5cdFx0aW5mb00xLmNsb3NlKCk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb00xLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJ2aXNpYmxlXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG1hcmtlckFpcnBvcnQuc2V0TWFwKG1hcCk7XHJcblx0c2F2ZU1hcmsobWFya2VyQWlycG9ydCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtXYXlwb2ludCh3YXlwb2ludCkge1xyXG5cdHZhciBpY29uV1BUID0gaWNvbldheXBvaW50O1xyXG5cdHZhciBpbmZvQ29udGVudCA9IFwiXCI7XHJcblx0aWYgKHdheXBvaW50LnR5cGUgPT0gMSkge1xyXG5cdFx0aWNvbldQVCA9IGljb25WT1I7XHJcblx0fSBlbHNlIGlmICh3YXlwb2ludC50eXBlID09IDIpIHtcclxuXHRcdGljb25XUFQgPSBpY29uTkRCO1xyXG5cdH1cclxuXHJcblx0dmFyIG1hcmtlcldheXBvaW50ID0gbmV3IE1hcmtlcldpdGhMYWJlbCh7XHJcblx0XHRwb3NpdGlvbiA6IHdheXBvaW50LmxhdGxuZyxcclxuXHRcdGFuaW1hdGlvbiA6IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG5cdFx0aWNvbiA6IGljb25XUFQsXHJcblx0XHRsYWJlbENvbnRlbnQgOiB3YXlwb2ludC5pZCxcclxuXHRcdGxhYmVsQW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDI4LCAtNiksXHJcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNXYXlwb2ludFwiXHJcblx0fSk7XHJcblx0aWYgKHdheXBvaW50LnR5cGUgPT0gJ1ZPUicgfHwgd2F5cG9pbnQudHlwZSA9PSAnTkRCJykge1xyXG5cdFx0Ly8gVk9SIGFuZCBOREJcclxuXHRcdGluZm9Db250ZW50ID0gXCI8dGFibGUgYm9yZGVyPTAgY2xhc3M9J3ZvclRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPSczMzBweCc+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZCB2YWxpZ249J21pZGRsZScgY29sc3Bhbj0yPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCIgIDx0YWJsZSBib3JkZXI9MCBjbGFzcz0ndm9yVGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+PHRyPjx0ZD5cIjtcclxuXHRcdGlmICh3YXlwb2ludC50eXBlID09ICdWT1InKSB7XHJcblx0XHRcdC8vIFZPUlxyXG5cdFx0XHRpbmZvQ29udGVudCArPSBcIiA8aW1nIHNyYz0nVk9SLnBuZycvPlwiO1xyXG5cdFx0fSBlbHNlIGlmICh3YXlwb2ludC50eXBlID09ICdOREInKSB7XHJcblx0XHRcdC8vIE5CRFxyXG5cdFx0XHRpbmZvQ29udGVudCArPSBcIiA8aW1nIHNyYz0nTkRCLnBuZycvPlwiO1xyXG5cdFx0fVxyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7PGI+XCIgKyB3YXlwb2ludC5pZCArIFwiPC9iPiAtIFwiXHJcblx0XHRcdFx0KyB3YXlwb2ludC5kZXNjciArIFwiPC90ZD5cIiArIFwiPC90cj48L3RhYmxlPlwiXHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nMic+PGhyLz48L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzIwJSc+IEZyZXF1ZW5jeTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyB3YXlwb2ludC5mcmVxICsgXCI8L3RkPlwiICsgXCI8L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPScxJSc+IExhdGl0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxhdCgpKSArIFwiPC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPiBMb25naXR1ZGU6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgcHJlY2lzaW9uRGVjaW1hbE51bWJlcih3YXlwb2ludC5sYXRsbmcubG5nKCkpICsgXCI8YnIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gRklYXHJcblx0XHRpbmZvQ29udGVudCA9IFwiPHRhYmxlIGJvcmRlcj0wIGNsYXNzPSd2b3JUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTIwcHgnPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGQgY29sc3Bhbj0yPjxiPlwiICsgd2F5cG9pbnQuaWQgKyBcIjwvYj48L3RkPjwvdHI+XCJcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMSUnPiBMYXRpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sYXQoKSkgKyBcIjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD4gTG9uZ2l0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxuZygpKSArIFwiPGJyLz48L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0fVxyXG5cdHZhciBpbmZvTTEgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiAnPGRpdiBpZD1cIml3X2NvbnRlbnRcIj4nICsgaW5mb0NvbnRlbnQgKyAnPC9kaXY+J1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcldheXBvaW50LCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpbmZvTTEub3BlbihtYXAsIHRoaXMpO1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcldheXBvaW50LCBcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcImhpZGRlblwiKTtcclxuXHRcdH1cclxuXHRcdGluZm9NMS5jbG9zZSgpO1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9NMSwgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwidmlzaWJsZVwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRtYXJrZXJXYXlwb2ludC5zZXRNYXAobWFwKTtcclxuXHRzYXZlTWFyayhtYXJrZXJXYXlwb2ludCk7XHJcblx0bWFya2Vyc1dheXBvaW50LnB1c2gobWFya2VyV2F5cG9pbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvckluZm9Cb3goZWwsY29sb3IpIHtcclxuXHRkaXZDb2xvciA9IGVsLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuXHRkaXZDb2xvci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsc3RhdHVzQXJyb3csc3RhdHVzQ2xvc2VCdXR0b24pIHtcclxuXHRkaXZFbCA9IGVsLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGlsZDEgPSBkaXZFbC5maXJzdENoaWxkO1xyXG4gICAgY2hpbGQzID0gY2hpbGQxLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBpZiAoIGNoaWxkMyAhPSB1bmRlZmluZWQgKSB7XHJcbiAgICBcdGNoaWxkMS5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzQXJyb3c7XHJcbiAgICBcdGNoaWxkMy5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzQXJyb3c7XHJcblx0ICAgIC8vIFJlbW92ZSBDbG9zZSBCdXR0b25cclxuXHQgICAgZGl2Q2xvc2VCdXR0b24gPSBkaXZFbC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuXHQgICAgLy9kaXZDbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzO1xyXG5cdCAgICBpZiAoIHN0YXR1c0Nsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCApIHtcclxuXHQgICAgXHRkaXZDbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzQ2xvc2VCdXR0b247XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgIFx0ZGl2Q2xvc2VCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0ICAgIH1cclxuXHQgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIodmxyKSB7XHJcblx0cmV0dXJuIHBhcnNlRmxvYXQoTWF0aC5yb3VuZCh2bHIgKiAxMDAwMDApIC8gMTAwMDAwKS50b0ZpeGVkKDUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQb3NpdGlvbigpIHtcclxuXHQkLmdldEpTT04oXHJcblx0XHRcdFwiZGF0YVwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0aWYgKCQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0LypzaG93RXJyb3IoXCJMaXN0ZW5pbmcgYXQgWC1QbGFuZSdzIFVEUCB0cmFmZmljIHBvcnQgNDkwMDMuIFwiXHJcblx0XHRcdFx0XHRcdFx0KyBcIlBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgYXQgdGhlIFgtUGxhbmUncyBOZXQgQ29ubmVjdGlvbnMgbWVudS5cIik7Ki9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gZGVsZXRlIGFsbCBhYnNlbnQgcGxhbmVzXHJcblx0XHRcdFx0Zm9yICggdmFyIGlwIGluIHBsYW5lTGlzdCkge1xyXG5cdFx0XHRcdFx0aWYgKCEoaXAgaW4gZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlUGxhbmUoaXApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBmb3IgY3VycmVudCBhbmQgbmV3IHBsYW5lc1xyXG5cdFx0XHRcdGZvciAoIHZhciBpcCBpbiBkYXRhKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBuZXcgcGxhbmVcclxuXHRcdFx0XHRcdGlmICghKGlwIGluIHBsYW5lTGlzdCkpIHtcclxuXHRcdFx0XHRcdFx0Y29sb3IgPSBuZXh0Q29sb3IoKTtcclxuXHRcdFx0XHRcdFx0bWFya2VyT3B0aW9ucy5pY29uLmZpbGxDb2xvciA9IGNvbG9yO1xyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdID0ge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWUgOiBpcC5yZXBsYWNlKC8tL2csICcuJyksXHJcblx0XHRcdFx0XHRcdFx0bG9uIDogMCxcclxuXHRcdFx0XHRcdFx0XHRsYXQgOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGFsdCA6IGRhdGFbaXBdLmFsdCxcclxuXHRcdFx0XHRcdFx0XHRtYXJrZXIgOiBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlck9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0XHRcdHRyYWNlIDogbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHBvbHlPcHRpb25zKSxcclxuXHRcdFx0XHRcdFx0XHRpbmZvIDogbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coKSxcclxuXHRcdFx0XHRcdFx0XHRjb2xvciA6IGNvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdHZTcGVlZCA6IGRhdGFbaXBdLnZTcGVlZCxcclxuXHRcdFx0XHRcdFx0XHRhaXJTcGVlZCA6IGRhdGFbaXBdLmFpclNwZWVkLFxyXG5cdFx0XHRcdFx0XHRcdGdTcGVlZCA6IGRhdGFbaXBdLmdTcGVlZCxcclxuXHRcdFx0XHRcdFx0XHRoZWFkaW5nIDogZGF0YVtpcF0uYmVhcmluZyxcclxuXHRcdFx0XHRcdFx0XHRkZXN0IDogZGF0YVtpcF0uZGVzdCxcclxuXHRcdFx0XHRcdFx0XHRncHNEaXN0Tm0gOiBkYXRhW2lwXS5ncHNEaXN0Tm0sXHJcblx0XHRcdFx0XHRcdFx0Z3BzRGlzdFRpbWUgOiBkYXRhW2lwXS5ncHNEaXN0VGltZSxcclxuXHRcdFx0XHRcdFx0XHRuYXYxIDogZGF0YVtpcF0ubmF2MUZyZXEsXHJcblx0XHRcdFx0XHRcdFx0bmF2MiA6IGRhdGFbaXBdLm5hdjJGcmVxLFxyXG5cdFx0XHRcdFx0XHRcdGJhcm9tZXRlciA6IGRhdGFbaXBdLmJhcm9tZXRlcixcclxuXHRcdFx0XHRcdFx0XHRmdWVsUXVhbnRpdHkgOiBkYXRhW2lwXS5mdWVsUXVhbnRpdHksXHJcblx0XHRcdFx0XHRcdFx0ZnVlbFF1YW50aXR5IDogZGF0YVtpcF0uZnVlbFF1YW50aXR5LFxyXG5cdFx0XHRcdFx0XHRcdG91dHNpZGVUZW1wIDogZGF0YVtpcF0ub3V0c2lkZVRlbXAsXHJcblx0XHRcdFx0XHRcdFx0Y29tMSA6IGRhdGFbaXBdLmNvbTFGcmVxLFxyXG5cdFx0XHRcdFx0XHRcdGNvbTIgOiBkYXRhW2lwXS5jb20yRnJlcSxcclxuXHRcdFx0XHRcdFx0XHRjb21wYXNzSGVhZGluZyA6IGRhdGFbaXBdLmNvbXBhc3NIZWFkaW5nXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldE1hcChtYXApO1xyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm1hcmtlci5pcCA9IGlwOyBcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5pbmZvV2luZG93TGlzdGVuZXIgPSBnb29nbGUubWFwcy5ldmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZExpc3RlbmVyKHBsYW5lTGlzdFtpcF0ubWFya2VyLCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFuZUxpc3RbdGhpcy5pcF0uaW5mby5vcGVuKG1hcCxwbGFuZUxpc3RbdGhpcy5pcF0ubWFya2VyKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm8sICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRlbEluZm9Cb3hQbGFuZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRcdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsSW5mb0JveFBsYW5lLFwidmlzaWJsZVwiLFwidmlzaWJsZVwiKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHBsYW5lTGlzdFtpcF0uaW5mbywnY2xvc2VjbGljaycsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsSW5mb0JveFBsYW5lLFwiaGlkZGVuXCIpO1xyXG5cdFx0XHRcdFx0XHRcdGVsSW5mb0JveFBsYW5lID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udHJhY2Uuc2V0TWFwKG1hcCk7XHJcblx0XHRcdFx0XHRcdHBsYW5lVG9Gb2xsb3cgPSBpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG5ld0xhdCA9IGRhdGFbaXBdLmxhdDtcclxuXHRcdFx0XHRcdG5ld0xvbiA9IGRhdGFbaXBdLmxvbjtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uYWx0ICAgICAgICAgICAgPSBkYXRhW2lwXS5hbHQ7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnZTcGVlZCAgICAgICAgID0gZGF0YVtpcF0udlNwZWVkO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5haXJTcGVlZCAgICAgICA9IGRhdGFbaXBdLmFpclNwZWVkO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5oZWFkaW5nICAgICAgICA9IGRhdGFbaXBdLmJlYXJpbmc7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmRlc3QgICAgICAgICAgID0gZGF0YVtpcF0uZGVzdDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZ3BzRGlzdE5tICAgICAgPSBkYXRhW2lwXS5ncHNEaXN0Tm07XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmdwc0Rpc3RUaW1lICAgID0gZGF0YVtpcF0uZ3BzRGlzdFRpbWU7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm5hdjEgICAgICAgICAgID0gZGF0YVtpcF0ubmF2MUZyZXE7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm5hdjIgICAgICAgICAgID0gZGF0YVtpcF0ubmF2MkZyZXE7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmJhcm9tZXRlciAgICAgID0gZGF0YVtpcF0uYmFyb21ldGVyO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5mdWVsUXVhbnRpdHkgICA9IGRhdGFbaXBdLmZ1ZWxRdWFudGl0eTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ub3V0c2lkZVRlbXAgICAgPSBkYXRhW2lwXS5vdXRzaWRlVGVtcDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tMSAgICAgICAgICAgPSBkYXRhW2lwXS5jb20xRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tMiAgICAgICAgICAgPSBkYXRhW2lwXS5jb20yRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tcGFzc0hlYWRpbmcgPSBkYXRhW2lwXS5jb21wYXNzSGVhZGluZztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIG5ld1BvaW50ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhuZXdMYXQsbmV3TG9uKTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldFBvc2l0aW9uKG5ld1BvaW50KTtcclxuXHRcdFx0XHRcdHZhciBpY29uID0gcGxhbmVMaXN0W2lwXS5tYXJrZXIuZ2V0SWNvbigpO1xyXG5cdFx0XHRcdFx0aWNvbi5yb3RhdGlvbiA9IHBsYW5lTGlzdFtpcF0uaGVhZGluZztcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldEljb24oaWNvbik7XHJcblx0XHRcdFx0XHQvLyBhZGQgbmV3IHBvaW50IHRvIGxpbmVcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udHJhY2UuZ2V0UGF0aCgpLnB1c2gobmV3UG9pbnQpO1xyXG5cdFx0XHRcdFx0dmFyIGFpcnBsYW5lTGFiZWwgPSAgcGxhbmVMaXN0W2lwXS5uYW1lO1xyXG5cdFx0XHRcdFx0aWYgKCBhaXJwbGFuZUxhYmVsID09ICcxMjcuMC4wLjEnICkge1xyXG5cdFx0XHRcdFx0XHQgYWlycGxhbmVMYWJlbCA9ICdZT1UnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly92YXIgaGRnQWlycGxhbmUgPSBOdW1iZXIoTWF0aC5mbG9vcigoKHBsYW5lTGlzdFtpcF0uaGVhZGluZyArIDM2MCkgJSAzNjApKSkgKyAyMjtcclxuXHRcdFx0XHRcdHZhciBoZGdBaXJwbGFuZSA9IHBsYW5lTGlzdFtpcF0uY29tcGFzc0hlYWRpbmc7XHJcblx0XHRcdFx0XHR2YXIgaW5mb0NvbnRlbnQgPSBcIjxkaXYgaWQ9J2l3X2NvbnRlbnQnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8ZGl2IHN0eWxlPSdtYXJnaW46IDA7IHdpZHRoOiA1MDBweDsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTAwJSc+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgPHRhYmxlIGJvcmRlcj0wIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzEwMCUnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8dHI+PHRkIHN0eWxlPSdoZWlnaHQ6MzBweDsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8Yj5cIiArIGFpcnBsYW5lTGFiZWwgKyBcIjwvYj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPC90ZD48L3RyPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8dHI+PHRkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8L3RkPjwvdHI+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgPC90YWJsZT5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdGQ+PC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIGJhY2tDb2xvciA9ICdsaWdodGdyYXknO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHI+PHRkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRhYmxlIHN0eWxlPSdib3JkZXI6c29saWQgMXB4IGRhcmtncmF5O2ZvbnQtd2VpZ2h0OmJvbGQ7JyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzInIHdpZHRoPScxMDAlJz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQgd2lkdGg9JzgwcHgnPkRlc3RpbmF0aW9uOjwvdGQ+PHRkIGNvbHNwYW49JzUnPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZGVzdCArIFwiPC9zcGFuPjwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkRpc3RhbmNlOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZ3BzRGlzdE5tICsgXCI8L3NwYW4+Jm5ic3A7bm08L3RkPlwiOyBcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZCB3aWR0aD0nNjBweCc+RVRFOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZ3BzRGlzdFRpbWUgKyBcIjwvc3Bhbj4mbmJzcDs8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPjx0ZD4gQWx0aXR1ZGU6IDwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IG51bWVyYWwocGxhbmVMaXN0W2lwXS5hbHQudG9GaXhlZCgpKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7ZnQgTVNMJm5ic3A7Jm5ic3A7PC90ZD5cIlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgKyBcIjx0ZD5IZWFkaW5nOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIGhkZ0FpcnBsYW5lICsgXCImZGVnOzwvc3Bhbj48L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiBBaXJTcGVlZDogPC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgbnVtZXJhbChwbGFuZUxpc3RbaXBdLmFpclNwZWVkKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7a3RzPC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpZiAoIHBsYW5lTGlzdFtpcF0udlNwZWVkID4gLTEgKSB7XHJcblx0XHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5WUzo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCI7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+VlM6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm9SZWQnPlwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gbnVtZXJhbChwbGFuZUxpc3RbaXBdLnZTcGVlZCkuZm9ybWF0KCcwLDAnKSArIFwiPC9zcGFuPiZuYnNwO2ZwbSZuYnNwOyZuYnNwOzwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk5hdjE6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5uYXYxICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiOyBcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5Db20xOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uY29tMSArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+PHRyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+TmF2Mjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLm5hdjIgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+Q29tMjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmNvbTIgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkJhcm9tZXRlcjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmJhcm9tZXRlciArIFwiPC9zcGFuPjwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+RnVlbDo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmZ1ZWxRdWFudGl0eSArIFwiPC9zcGFuPjwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj48dHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5PQVQ6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5vdXRzaWRlVGVtcCArIFwiPC9zcGFuPiZkZWc7Jm5ic3A8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkdTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZ1NwZWVkLnRvRml4ZWQoKSArIFwiPC9zcGFuPiZuYnNwO2t0czwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90YWJsZT5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdGQ+PC90cj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC9kaXY+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvZGl2PlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyBzZXQgaW5mbyB3aW5kb3cgY29udGVudFxyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5pbmZvLnNldENvbnRlbnQoaW5mb0NvbnRlbnQpO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5sb24gPSBuZXdMb247XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmxhdCA9IG5ld0xhdDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaGRnID0gcGxhbmVMaXN0W2lwXS5oZWFkaW5nO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5zcGQgPSBwbGFuZUxpc3RbaXBdLmdTcGVlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gbW92ZSBtYXAgaWYgY2hlY2tib3ggY2hlY2tlZFxyXG5cdFx0XHRcdGlmICggY2hhc2VBaXJwbGFuZSApIHtcclxuXHRcdFx0XHRcdGlmICggcGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddICE9IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRcdFx0bWFwLnBhblRvKG5ldyBnb29nbGUubWFwcy5MYXRMbmcocGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddLmxhdCxwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10ubG9uKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdC5lcnJvcihcclxuXHRcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2hvd0Vycm9yKCdPcHMhIE1heWRheSEgTWF5ZGF5ISBKYXZhIFNlcnZlciBpcyBkb3duISEhJylcclxuXHRcdFx0fSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWFyaW5nKGxvbjEsIGxhdDEsIGxvbjIsIGxhdDIpIHtcclxuXHRsb24xID0gbG9uMSAqIE1hdGguUEkgLyAxODA7XHJcblx0bG9uMiA9IGxvbjIgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdGxhdDEgPSBsYXQxICogTWF0aC5QSSAvIDE4MDtcclxuXHRsYXQyID0gbGF0MiAqIE1hdGguUEkgLyAxODA7XHJcblx0dmFyIHkgPSBNYXRoLnNpbihsb24yIC0gbG9uMSkgKiBNYXRoLmNvcyhsYXQyKTtcclxuXHR2YXIgeCA9IE1hdGguY29zKGxhdDEpICogTWF0aC5zaW4obGF0MikgLSBNYXRoLnNpbihsYXQxKSAqIE1hdGguY29zKGxhdDIpXHJcblx0XHRcdCogTWF0aC5jb3MobG9uMiAtIGxvbjEpO1xyXG5cdHZhciBicm5nID0gTWF0aC5hdGFuMih5LCB4KTtcclxuXHRyZXR1cm4gYnJuZyAvIE1hdGguUEkgKiAxODA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3RhbmNlKGxvbjEsIGxhdDEsIGxvbjIsIGxhdDIpIHtcclxuXHRSID0gNjM3Mi44O1xyXG5cdGxhdDEgPSBsYXQxICogTWF0aC5QSSAvIDE4MDtcclxuXHRsYXQyID0gbGF0MiAqIE1hdGguUEkgLyAxODA7XHJcblx0dmFyIGRlbHRhbGF0ID0gbGF0MiAtIGxhdDE7XHJcblx0dmFyIGRlbHRhbG9uID0gKGxvbjIgLSBsb24xKSAqIE1hdGguUEkgLyAxODA7XHJcblx0dmFyIGEgPSBNYXRoLnNpbihkZWx0YWxhdCAvIDIpICogTWF0aC5zaW4oZGVsdGFsYXQgLyAyKSArIE1hdGguY29zKGxhdDEpXHJcblx0XHRcdCogTWF0aC5jb3MobGF0MikgKiBNYXRoLnNpbihkZWx0YWxvbiAvIDIpICogTWF0aC5zaW4oZGVsdGFsb24gLyAyKTtcclxuXHR2YXIgYyA9IDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KGEpKTtcclxuXHRyZXR1cm4gUiAqIGM7XHJcbn1cclxuXHJcbi8vIGNsZWFuIHBsYW5lIGRlbGV0aW9uXHJcbmZ1bmN0aW9uIGRlbGV0ZVBsYW5lKGlwKSB7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQucmVtb3ZlTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5pbmZvV2luZG93TGlzdGVuZXIpO1xyXG5cdHBsYW5lTGlzdFtpcF0udHJhY2Uuc2V0TWFwKG51bGwpO1xyXG5cdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldE1hcChudWxsKTtcclxuXHRkZWxldGUgcGxhbmVMaXN0W2lwXTtcclxufVxyXG5cclxuLy8gYWxlcnQoKSBlcXVpdmFsZW50XHJcbmZ1bmN0aW9uIHNob3dFcnJvcih0ZXh0KSB7XHJcblx0JCgnI2Vycm9yQm94JykudGV4dCh0ZXh0KTtcclxuXHQkKCcjZXJyb3JCb3gnKS5mYWRlSW4oKS5kZWxheSgzNTAwKS5mYWRlT3V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRDb2xvcigpIHtcclxuXHRpZiAoY29sb3JzW2NvbG9yX2luZGV4XSAhPSBudWxsKSB7XHJcblx0XHR2YXIgY29sb3IgPSBjb2xvcnNbY29sb3JfaW5kZXhdO1xyXG5cdFx0Y29sb3JfaW5kZXgrKztcclxuXHRcdHJldHVybiBjb2xvcjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJObyBtb3JlIGNvbG9yc1wiKTtcclxuXHRcdHJldHVybiBcIiNhYWFhYWFcIjtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNoYXNlQWlycGxhbmUoKSB7XHJcblx0aWYgKCBjaGFzZUFpcnBsYW5lICkge1xyXG5cdFx0JCgnI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcjZm9sbG93VGhlUGxhbmUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0fVxyXG5cdGNoYXNlQWlycGxhbmUgPSAhY2hhc2VBaXJwbGFuZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRmxpZ2h0UGFuZWwoKSB7XHJcblx0aWYgKCQoJyNwYW5lbC1mcCcpLmlzKFwiOmhpZGRlblwiKSkge1xyXG5cdFx0c2hvd0ZsaWdodFBhbmVsKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGhpZGVGbGlnaHRQYW5lbCgpO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBoaWRlRmxpZ2h0UGFuZWwoKSB7XHJcblx0ZG9jdW1lbnQuY29va2llPSQoJyNib3hGbGlnaHRQbGFuJykudmFsKCk7XHJcblx0Y29uc29sZS5sb2coXCIoc2F2aW5nKSBwbGFuU2F2ZWQ9XCIgKyBkb2N1bWVudC5jb29raWUpO1xyXG5cdCQoJyNwYW5lbC1mcCcpLmhpZGUoNTAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1oZWxwJykuaGlkZSgzMDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWluZm8nKS5oaWRlKDMwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4tYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGbGlnaHRQYW5lbCgpIHtcclxuXHR2YXIgcGxhblNhdmVkID0gZG9jdW1lbnQuY29va2llO1xyXG5cdGNvbnNvbGUubG9nKFwicGxhblNhdmVkPVwiICsgZG9jdW1lbnQuY29va2llKTtcclxuXHRpZiAoIHBsYW5TYXZlZCAhPSBcIlwiICkge1xyXG5cdFx0JCgnI2JveEZsaWdodFBsYW4nKS52YWwocGxhblNhdmVkKTtcclxuXHR9XHJcblx0JCgnI3BhbmVsLWZwJykuc2hvdyg1MDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWhlbHAnKS5zaG93KDMwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4taW5mbycpLnNob3coMzAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcclxuXHQkKCcjYm94RmxpZ2h0UGxhbicpLmZvY3VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVOYXZhaWRzKCkge1xyXG5cdCQoJyNuYXZhaWRzLWJ1dHRvbicpLmh0bWwoJ1Nob3cgbmF2YWlkcyAoTiknKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soXHJcblx0XHRcdHNob3dOYXZhaWRzKTtcclxuXHRuYXZNYXAuc2V0T3BhY2l0eSgwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd05hdmFpZHMoKSB7XHJcblx0JCgnI25hdmFpZHMtYnV0dG9uJykuaHRtbCgnSGlkZSBuYXZhaWRzIChOKScpLnVuYmluZCgnY2xpY2snKS5jbGljayhcclxuXHRcdFx0aGlkZU5hdmFpZHMpO1xyXG5cdG5hdk1hcC5zZXRPcGFjaXR5KDEpO1xyXG59XHJcblxyXG52YXIgdmlzaWJsZUxhYmVsUm91dGUgPSB0cnVlO1xyXG5mdW5jdGlvbiB0b29nbGVMYWJlbFJvdXRlKCkge1xyXG5cdHZpc2libGVMYWJlbFJvdXRlID0gIXZpc2libGVMYWJlbFJvdXRlO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vyc0xhYmVsUm91dGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdCBtYXJrZXJzTGFiZWxSb3V0ZVtpXS5zZXRWaXNpYmxlKHZpc2libGVMYWJlbFJvdXRlKTtcclxuXHR9XHJcblx0aWYgKCB2aXNpYmxlTGFiZWxSb3V0ZSApIHtcclxuXHRcdCQoJyNsYWJlbFJvdXRlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcjbGFiZWxSb3V0ZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciB2aXNpYmxlV2F5cG9pbnQgPSB0cnVlO1xyXG5mdW5jdGlvbiB0b29nbGVMYWJlbFdheXBvaW50KCkge1xyXG5cdHZpc2libGVXYXlwb2ludCA9ICF2aXNpYmxlV2F5cG9pbnQ7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzV2F5cG9pbnQubGVuZ3RoOyBpKyspIHtcclxuXHRcdG1hcmtlcnNXYXlwb2ludFtpXS5zZXRWaXNpYmxlKHZpc2libGVXYXlwb2ludCk7XHJcblx0fVxyXG5cdGlmICggdmlzaWJsZVdheXBvaW50ICkge1xyXG5cdFx0JCgnI2xhYmVsV2F5cG9pbnQtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNsYWJlbFdheXBvaW50LWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gcmVhZHkgd2hlbiB5b3UgYXJlIVxyXG5nb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XHJcbi8qd2luZG93LnNob3dOYXZhaWRzICAgICAgICAgPSBzaG93TmF2YWlkcztcclxud2luZG93LnRvZ2dsZUZsaWdodFBhbmVsICAgPSB0b2dnbGVGbGlnaHRQYW5lbDtcclxud2luZG93LnRvZ2dsZUNoYXNlQWlycGxhbmUgPSB0b2dnbGVDaGFzZUFpcnBsYW5lO1xyXG53aW5kb3cudG9vZ2xlTGFiZWxSb3V0ZSAgICA9IHRvb2dsZUxhYmVsUm91dGU7XHJcbndpbmRvdy50b29nbGVMYWJlbFdheXBvaW50ID0gdG9vZ2xlTGFiZWxXYXlwb2ludDtcclxuKi9cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9