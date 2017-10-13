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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_map_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_map_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_map_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_markerwithlabel_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_markerwithlabel_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_markerwithlabel_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_jquery_blink_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_jquery_blink_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_jquery_blink_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_numeral_min_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_numeral_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_numeral_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_map_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_map_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_map_js__);






/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "html, body, #map-canvas {\r\n\theight: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n#panel-fp {\r\n\tposition: absolute;\r\n\ttop: 60px;\r\n\tleft: 90px;\r\n\tz-index: 5;\r\n\tpadding: 5px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 2px solid #595959;\r\n\tbackground-color: #50000E;\r\n\tcolor: #fff;\r\n\twidth: 600px;\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#errorBox {\r\n\tposition: absolute;\r\n\ttop: 90%;\r\n\tleft: 2%;\r\n\tz-index: 5;\r\n\tpadding: 5px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 2px solid #595959;\r\n\tbackground-color: #50000E;\r\n\tcolor: #fff;\r\n\twidth: 20%;\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#boxFlightPlan {\r\n\t text-transform: uppercase;\r\n\t font-family: Verdana, Arial, sans-serif;\r\n\t font-size: 14px;\r\n\t font-weight: bold;\r\n\t overflow: auto;\r\n\t resize: none;\r\n} \r\n#flightplan-help {\r\n\tz-index: 1000;\r\n\tposition: absolute;\r\n\ttop: 190px;\r\n\tleft: 90px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tborder: 1px solid #000;\r\n\tfont-size: 11px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0, 0, 0, 0.55);\r\n\tcolor: #fff;\r\n\tborder-radius: 2px;\r\n\tpadding: 10px;\r\n\tdisplay: none;\r\n\twidth: 130px;\r\n}\r\n#flightplan-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 90px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n}\r\n#plane-panel {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 190px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tborder-radius: 2px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n}\r\n#followThePlane-button {\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#flightplan-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#flightplan-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#followThePlane-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#followThePlane-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n.labelsAirport {\r\n\tcolor: darkblue;\r\n\tbackground-color: white;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 38px;\r\n\tborder: 2px solid black;\r\n\twhite-space: nowrap;\r\n}\r\n.labelsWaypoint {\r\n\tcolor: black;\r\n\tbackground-color: lightgray;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 11px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 50px;\r\n\tborder: 2px solid black;\r\n\twhite-space: nowrap;\r\n}\r\n.labelsInfoRoute {\r\n\tcolor: black;\r\n\tbackground-color: white;\r\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\ttext-align: center;\r\n\tmin-width: 70px;\r\n    display: inline-block;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\tborder: 2px solid blue;\r\n\twhite-space: nowrap;\r\n\tborder-radius: 23px;\r\n}\r\n.runwayTable {\r\n\tfont-family: \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n}\r\n.runwayInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.vorTable {\r\n\tfont-family: \"Arial\", sans-serif;\r\n\tfont-size: 12px;\r\n}\r\n.vorInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.routeInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.planeDataInfo {\r\n\tcolor: blue;\r\n\tfont-weight: bold;\r\n}\r\n.planeDataInfoRed {\r\n\tcolor: red;\r\n\tfont-weight: bold;\r\n}\r\n.rotate {\r\n     -webkit-transform : rotate(66deg); \r\n    -moz-transform : rotate(66deg); \r\n    -ms-transform : rotate(66deg); \r\n    -o-transform : rotate(66deg); \r\n    transform : rotate(66deg); \r\n}\r\n#flightplan-info {\r\n    z-index: 9999;\r\n    position: absolute;\r\n    top: 190px;\r\n    left: 253px;\r\n    font-family: Verdana, Arial, sans-serif;\r\n    text-decoration: none;\r\n    box-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n    border: 1px solid #000;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    color: yellow;\r\n    border-radius: 2px;\r\n    padding: 10px;\r\n    display: none;\r\n    width: 430px;\r\n}\r\n.flightPlan-info-label {\r\n    font-family: monospace;\r\n    font-size: 13px;\r\n    color: white;\r\n}\r\n#flightplan-loading {\r\n\tposition: absolute; \r\n\ttop: 73px; \r\n\tleft: 10px; \r\n\tz-index: 9999;\r\n\tcolor: #454545;\r\n\tfont-family: monospace;\r\n\tfont-size:15px;\r\n\tfont-weight: bold;\r\n}\r\n#labelRoute-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 300px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tcolor: #fff;\r\n}\r\n#labelRoute-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#labelRoute-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}\r\n#labelWaypoint-button {\r\n\tposition: absolute;\r\n\ttop: 28px;\r\n\tleft: 390px;\r\n\tfont-family: Verdana, Arial, sans-serif;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid #999;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tborder-radius: 2px;\r\n\tpadding: 5px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\r\n\tcolor: #fff;\r\n}\r\n#labelWaypoint-button.down {\r\n\tbackground-color: rgba(0,0,0,0.70);\r\n\tcolor: #fff;\r\n}\r\n#labelWaypoint-button.up {\r\n\tbackground-color: rgba(255,255,255,0.70);\r\n\tcolor: #000;\r\n}", ""]);

// exports


/***/ }),
/* 11 */
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
/* 12 */
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

var	fixUrls = __webpack_require__(13);

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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(){function a(a){this._value=a}function b(a,b,c,d){var e,f,g=Math.pow(10,b);return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}function c(a,b,c){var d;return d=b.indexOf("$")>-1?e(a,b,c):b.indexOf("%")>-1?f(a,b,c):b.indexOf(":")>-1?g(a,b):i(a._value,b,c)}function d(a,b){var c,d,e,f,g,i=b,j=["KB","MB","GB","TB","PB","EB","ZB","YB"],k=!1;if(b.indexOf(":")>-1)a._value=h(b);else if(b===q)a._value=0;else{for("."!==o[p].delimiters.decimal&&(b=b.replace(/\./g,"").replace(o[p].delimiters.decimal,".")),c=new RegExp("[^a-zA-Z]"+o[p].abbreviations.thousand+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+o[p].abbreviations.million+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+o[p].abbreviations.billion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+o[p].abbreviations.trillion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),g=0;g<=j.length&&!(k=b.indexOf(j[g])>-1?Math.pow(1024,g+1):!1);g++);a._value=(k?k:1)*(i.match(c)?Math.pow(10,3):1)*(i.match(d)?Math.pow(10,6):1)*(i.match(e)?Math.pow(10,9):1)*(i.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),a._value=k?Math.ceil(a._value):a._value}return a._value}function e(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),j="";return b.indexOf(" $")>-1?(j=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(j=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=i(a._value,b,c),1>=f?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(g>f||h>f)&&(d=0),e.splice(d,0,o[p].currency.symbol+j),e=e.join("")):e=o[p].currency.symbol+j+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,j+o[p].currency.symbol),e=e.join("")):e=e+j+o[p].currency.symbol,e}function f(a,b,c){var d,e="",f=100*a._value;return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=i(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function g(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*b*60)/60),d=Math.round(a._value-60*b*60-60*c);return b+":"+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d)}function h(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function i(a,c,d){var e,f,g,h,i,j,k=!1,l=!1,m=!1,n="",r=!1,s=!1,t=!1,u=!1,v=!1,w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;if(0===a&&null!==q)return q;if(c.indexOf("(")>-1?(k=!0,c=c.slice(1,-1)):c.indexOf("+")>-1&&(l=!0,c=c.replace(/\+/g,"")),c.indexOf("a")>-1&&(r=c.indexOf("aK")>=0,s=c.indexOf("aM")>=0,t=c.indexOf("aB")>=0,u=c.indexOf("aT")>=0,v=r||s||t||u,c.indexOf(" a")>-1?(n=" ",c=c.replace(" a","")):c=c.replace("a",""),y>=Math.pow(10,12)&&!v||u?(n+=o[p].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||t?(n+=o[p].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||s?(n+=o[p].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||r)&&(n+=o[p].abbreviations.thousand,a/=Math.pow(10,3))),c.indexOf("b")>-1)for(c.indexOf(" b")>-1?(w=" ",c=c.replace(" b","")):c=c.replace("b",""),g=0;g<=z.length;g++)if(e=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=e&&f>a){w+=z[g],e>0&&(a/=e);break}return c.indexOf("o")>-1&&(c.indexOf(" o")>-1?(x=" ",c=c.replace(" o","")):c=c.replace("o",""),x+=o[p].ordinal(a)),c.indexOf("[.]")>-1&&(m=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],j=c.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=b(a,i[0].length+i[1].length,d,i[1].length)):A=b(a,i.length,d),h=A.split(".")[0],A=A.split(".")[1].length?o[p].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=b(a,null,d),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o[p].delimiters.thousands)),0===c.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x?x:"")+(n?n:"")+(w?w:"")+(k&&B?")":"")}function j(a,b){o[a]=b}function k(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}function l(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var c=k(a),d=k(b);return c>d?c:d},-1/0)}var m,n="1.5.3",o={},p="en",q=null,r="0,0",s="undefined"!=typeof module&&module.exports;m=function(b){return m.isNumeral(b)?b=b.value():0===b||"undefined"==typeof b?b=0:Number(b)||(b=m.fn.unformat(b)),new a(Number(b))},m.version=n,m.isNumeral=function(b){return b instanceof a},m.language=function(a,b){if(!a)return p;if(a&&!b){if(!o[a])throw new Error("Unknown language : "+a);p=a}return(b||!o[a])&&j(a,b),m},m.languageData=function(a){if(!a)return o[p];if(!o[a])throw new Error("Unknown language : "+a);return o[a]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(a){q="string"==typeof a?a:null},m.defaultFormat=function(a){r="string"==typeof a?a:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),m.fn=a.prototype={clone:function(){return m(this)},format:function(a,b){return c(this,a?a:r,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:d(this,a?a:r)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b){return a+c*b}var c=l.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b){return a-c*b}var c=l.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b){var c=l(a,b);return a*c*b*c/(c*c)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b){var c=l(a,b);return a*c/(b*c)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(m(this._value).subtract(a).value())}},s&&(module.exports=m),"undefined"==typeof ender&&(this.numeral=m),"function"=="function"&&__webpack_require__(17)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return m}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 18 */
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
//window.showNavaids         = showNavaids;
window.toggleFlightPanel   = toggleFlightPanel;
window.toggleChaseAirplane = toggleChaseAirplane;
window.toogleLabelRoute    = toogleLabelRoute;
window.toogleLabelWaypoint = toogleLabelWaypoint;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWU5Yjc2MTUyZGM0NzFmODM2OTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWZyb250LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcz81ODdhIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcmtlcndpdGhsYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvanF1ZXJ5LWJsaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9udW1lcmFsLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdE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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNEJBQTRCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esb0k7QUFDQTtBQUNBLGdEO0FBQ0E7QUFDQSxNQUFNO0FBQ04sRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZTliNzYxNTJkYzQ3MWY4MzY5NCIsImltcG9ydCAnLi9jc3MvbWFwLmNzcyc7XHJcbmltcG9ydCAnLi9qcy9tYXJrZXJ3aXRobGFiZWwuanMnO1xyXG5pbXBvcnQgJy4vanMvanF1ZXJ5LWJsaW5rLmpzJztcclxuaW1wb3J0ICcuL2pzL251bWVyYWwubWluLmpzJztcclxuaW1wb3J0ICcuL2pzL21hcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtZnJvbnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9tYXAuY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksICNtYXAtY2FudmFzIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3BhbmVsLWZwIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiA2MHB4O1xcclxcblxcdGxlZnQ6IDkwcHg7XFxyXFxuXFx0ei1pbmRleDogNTtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgIzU5NTk1OTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTAwMDBFO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcblxcdHdpZHRoOiA2MDBweDtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yQm94IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiA5MCU7XFxyXFxuXFx0bGVmdDogMiU7XFxyXFxuXFx0ei1pbmRleDogNTtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgIzU5NTk1OTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTAwMDBFO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcblxcdHdpZHRoOiAyMCU7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbiNib3hGbGlnaHRQbGFuIHtcXHJcXG5cXHQgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG5cXHQgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcdCBmb250LXNpemU6IDE0cHg7XFxyXFxuXFx0IGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdCBvdmVyZmxvdzogYXV0bztcXHJcXG5cXHQgcmVzaXplOiBub25lO1xcclxcbn0gXFxyXFxuI2ZsaWdodHBsYW4taGVscCB7XFxyXFxuXFx0ei1pbmRleDogMTAwMDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAxOTBweDtcXHJcXG5cXHRsZWZ0OiA5MHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG5cXHRmb250LXNpemU6IDExcHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0d2lkdGg6IDEzMHB4O1xcclxcbn1cXHJcXG4jZmxpZ2h0cGxhbi1idXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDI4cHg7XFxyXFxuXFx0bGVmdDogOTBweDtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxufVxcclxcbiNwbGFuZS1wYW5lbCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMjhweDtcXHJcXG5cXHRsZWZ0OiAxOTBweDtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWJ1dHRvbi5kb3duIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4jZmxpZ2h0cGxhbi1idXR0b24udXAge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxufVxcclxcbiNmb2xsb3dUaGVQbGFuZS1idXR0b24udXAge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxufVxcclxcbiNmb2xsb3dUaGVQbGFuZS1idXR0b24uZG93biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLmxhYmVsc0FpcnBvcnQge1xcclxcblxcdGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDM4cHg7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuLmxhYmVsc1dheXBvaW50IHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogNTBweDtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG4ubGFiZWxzSW5mb1JvdXRlIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWluLXdpZHRoOiA3MHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmx1ZTtcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxyXFxufVxcclxcbi5ydW53YXlUYWJsZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG4ucnVud2F5SW5mbyB7XFxyXFxuXFx0Y29sb3I6IGJsdWU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi52b3JUYWJsZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG4udm9ySW5mbyB7XFxyXFxuXFx0Y29sb3I6IGJsdWU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5yb3V0ZUluZm8ge1xcclxcblxcdGNvbG9yOiBibHVlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucGxhbmVEYXRhSW5mbyB7XFxyXFxuXFx0Y29sb3I6IGJsdWU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5wbGFuZURhdGFJbmZvUmVkIHtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucm90YXRlIHtcXHJcXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxyXFxuICAgIC1tb3otdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxyXFxuICAgIC1tcy10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXHJcXG4gICAgLW8tdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxyXFxuICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcclxcbn1cXHJcXG4jZmxpZ2h0cGxhbi1pbmZvIHtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDE5MHB4O1xcclxcbiAgICBsZWZ0OiAyNTNweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDQzMHB4O1xcclxcbn1cXHJcXG4uZmxpZ2h0UGxhbi1pbmZvLWxhYmVsIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiNmbGlnaHRwbGFuLWxvYWRpbmcge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuXFx0dG9wOiA3M3B4OyBcXHJcXG5cXHRsZWZ0OiAxMHB4OyBcXHJcXG5cXHR6LWluZGV4OiA5OTk5O1xcclxcblxcdGNvbG9yOiAjNDU0NTQ1O1xcclxcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuXFx0Zm9udC1zaXplOjE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbiNsYWJlbFJvdXRlLWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMjhweDtcXHJcXG5cXHRsZWZ0OiAzMDBweDtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNsYWJlbFJvdXRlLWJ1dHRvbi5kb3duIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4jbGFiZWxSb3V0ZS1idXR0b24udXAge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxufVxcclxcbiNsYWJlbFdheXBvaW50LWJ1dHRvbiB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMjhweDtcXHJcXG5cXHRsZWZ0OiAzOTBweDtcXHJcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxufVxcclxcbiNsYWJlbFdheXBvaW50LWJ1dHRvbi5kb3duIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4jbGFiZWxXYXlwb2ludC1idXR0b24udXAge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvY3NzL21hcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQG5hbWUgTWFya2VyV2l0aExhYmVsIGZvciBWM1xyXG4gKiBAdmVyc2lvbiAxLjEuOCBbRmVicnVhcnkgMjYsIDIwMTNdXHJcbiAqIEBhdXRob3IgR2FyeSBMaXR0bGUgKGluc3BpcmVkIGJ5IGNvZGUgZnJvbSBNYXJjIFJpZGV5IG9mIEdvb2dsZSkuXHJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IDIwMTIgR2FyeSBMaXR0bGUgW2dhcnkgYXQgbHV4Y2VudHJhbC5jb21dXHJcbiAqIEBmaWxlb3ZlcnZpZXcgTWFya2VyV2l0aExhYmVsIGV4dGVuZHMgdGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIFYzXHJcbiAqICA8Y29kZT5nb29nbGUubWFwcy5NYXJrZXI8L2NvZGU+IGNsYXNzLlxyXG4gKiAgPHA+XHJcbiAqICBNYXJrZXJXaXRoTGFiZWwgYWxsb3dzIHlvdSB0byBkZWZpbmUgbWFya2VycyB3aXRoIGFzc29jaWF0ZWQgbGFiZWxzLiBBcyB5b3Ugd291bGQgZXhwZWN0LFxyXG4gKiAgaWYgdGhlIG1hcmtlciBpcyBkcmFnZ2FibGUsIHNvIHRvbyB3aWxsIGJlIHRoZSBsYWJlbC4gSW4gYWRkaXRpb24sIGEgbWFya2VyIHdpdGggYSBsYWJlbFxyXG4gKiAgcmVzcG9uZHMgdG8gYWxsIG1vdXNlIGV2ZW50cyBpbiB0aGUgc2FtZSBtYW5uZXIgYXMgYSByZWd1bGFyIG1hcmtlci4gSXQgYWxzbyBmaXJlcyBtb3VzZVxyXG4gKiAgZXZlbnRzIGFuZCBcInByb3BlcnR5IGNoYW5nZWRcIiBldmVudHMganVzdCBhcyBhIHJlZ3VsYXIgbWFya2VyIHdvdWxkLiBWZXJzaW9uIDEuMSBhZGRzXHJcbiAqICBzdXBwb3J0IGZvciB0aGUgcmFpc2VPbkRyYWcgZmVhdHVyZSBpbnRyb2R1Y2VkIGluIEFQSSBWMy4zLlxyXG4gKiAgPHA+XHJcbiAqICBJZiB5b3UgZHJhZyBhIG1hcmtlciBieSBpdHMgbGFiZWwsIHlvdSBjYW4gY2FuY2VsIHRoZSBkcmFnIGFuZCByZXR1cm4gdGhlIG1hcmtlciB0byBpdHNcclxuICogIG9yaWdpbmFsIHBvc2l0aW9uIGJ5IHByZXNzaW5nIHRoZSA8Y29kZT5Fc2M8L2NvZGU+IGtleS4gVGhpcyBkb2Vzbid0IHdvcmsgaWYgeW91IGRyYWcgdGhlIG1hcmtlclxyXG4gKiAgaXRzZWxmIGJlY2F1c2UgdGhpcyBmZWF0dXJlIGlzIG5vdCAoeWV0KSBzdXBwb3J0ZWQgaW4gdGhlIDxjb2RlPmdvb2dsZS5tYXBzLk1hcmtlcjwvY29kZT4gY2xhc3MuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLypqc2xpbnQgYnJvd3Nlcjp0cnVlICovXHJcbi8qZ2xvYmFsIGRvY3VtZW50LGdvb2dsZSAqL1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29uc3RydWN0b3IgY3JlYXRlcyBhIGxhYmVsIGFuZCBhc3NvY2lhdGVzIGl0IHdpdGggYSBtYXJrZXIuXHJcbiAqIEl0IGlzIGZvciB0aGUgcHJpdmF0ZSB1c2Ugb2YgdGhlIE1hcmtlcldpdGhMYWJlbCBjbGFzcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7TWFya2VyfSBtYXJrZXIgVGhlIG1hcmtlciB3aXRoIHdoaWNoIHRoZSBsYWJlbCBpcyB0byBiZSBhc3NvY2lhdGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY3Jvc3NVUkwgVGhlIFVSTCBvZiB0aGUgY3Jvc3MgaW1hZ2UgPS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGhhbmRDdXJzb3IgVGhlIFVSTCBvZiB0aGUgaGFuZCBjdXJzb3IuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBNYXJrZXJMYWJlbF8obWFya2VyLCBjcm9zc1VSTCwgaGFuZEN1cnNvclVSTCkge1xyXG4gIHRoaXMubWFya2VyXyA9IG1hcmtlcjtcclxuICB0aGlzLmhhbmRDdXJzb3JVUkxfID0gbWFya2VyLmhhbmRDdXJzb3JVUkw7XHJcblxyXG4gIHRoaXMubGFiZWxEaXZfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IG92ZXJmbG93OiBoaWRkZW47XCI7XHJcblxyXG4gIC8vIFNldCB1cCB0aGUgRElWIGZvciBoYW5kbGluZyBtb3VzZSBldmVudHMgaW4gdGhlIGxhYmVsLiBUaGlzIERJViBmb3JtcyBhIHRyYW5zcGFyZW50IHZlaWxcclxuICAvLyBpbiB0aGUgXCJvdmVybGF5TW91c2VUYXJnZXRcIiBwYW5lLCBhIHZlaWwgdGhhdCBjb3ZlcnMganVzdCB0aGUgbGFiZWwuIFRoaXMgaXMgZG9uZSBzbyB0aGF0XHJcbiAgLy8gZXZlbnRzIGNhbiBiZSBjYXB0dXJlZCBldmVuIGlmIHRoZSBsYWJlbCBpcyBpbiB0aGUgc2hhZG93IG9mIGEgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdy5cclxuICAvLyBDb2RlIGlzIGluY2x1ZGVkIGhlcmUgdG8gZW5zdXJlIHRoZSB2ZWlsIGlzIGFsd2F5cyBleGFjdGx5IHRoZSBzYW1lIHNpemUgYXMgdGhlIGxhYmVsLlxyXG4gIHRoaXMuZXZlbnREaXZfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5jc3NUZXh0ID0gdGhpcy5sYWJlbERpdl8uc3R5bGUuY3NzVGV4dDtcclxuICBcclxuICAvLyBUaGlzIGlzIG5lZWRlZCBmb3IgcHJvcGVyIGJlaGF2aW9yIG9uIE1TSUU6XHJcbiAgdGhpcy5ldmVudERpdl8uc2V0QXR0cmlidXRlKFwib25zZWxlY3RzdGFydFwiLCBcInJldHVybiBmYWxzZTtcIik7XHJcbiAgdGhpcy5ldmVudERpdl8uc2V0QXR0cmlidXRlKFwib25kcmFnc3RhcnRcIiwgXCJyZXR1cm4gZmFsc2U7XCIpO1xyXG5cclxuICAvLyBHZXQgdGhlIERJViBmb3IgdGhlIFwiWFwiIHRvIGJlIGRpc3BsYXllZCB3aGVuIHRoZSBtYXJrZXIgaXMgcmFpc2VkLlxyXG4gIHRoaXMuY3Jvc3NEaXZfID0gTWFya2VyTGFiZWxfLmdldFNoYXJlZENyb3NzKGNyb3NzVVJMKTtcclxufVxyXG5cclxuLy8gTWFya2VyTGFiZWxfIGluaGVyaXRzIGZyb20gT3ZlcmxheVZpZXc6XHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBESVYgZm9yIHRoZSBjcm9zcyB1c2VkIHdoZW4gZHJhZ2dpbmcgYSBtYXJrZXIgd2hlbiB0aGVcclxuICogcmFpc2VPbkRyYWcgcGFyYW1ldGVyIHNldCB0byB0cnVlLiBPbmUgY3Jvc3MgaXMgc2hhcmVkIHdpdGggYWxsIG1hcmtlcnMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjcm9zc1VSTCBUaGUgVVJMIG9mIHRoZSBjcm9zcyBpbWFnZSA9LlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTWFya2VyTGFiZWxfLmdldFNoYXJlZENyb3NzID0gZnVuY3Rpb24gKGNyb3NzVVJMKSB7XHJcbiAgdmFyIGRpdjtcclxuICBpZiAodHlwZW9mIE1hcmtlckxhYmVsXy5nZXRTaGFyZWRDcm9zcy5jcm9zc0RpdiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGRpdi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDEwMDAwMDI7IGRpc3BsYXk6IG5vbmU7XCI7XHJcbiAgICAvLyBIb3BlZnVsbHkgR29vZ2xlIG5ldmVyIGNoYW5nZXMgdGhlIHN0YW5kYXJkIFwiWFwiIGF0dHJpYnV0ZXM6XHJcbiAgICBkaXYuc3R5bGUubWFyZ2luTGVmdCA9IFwiLThweFwiO1xyXG4gICAgZGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiLTlweFwiO1xyXG4gICAgZGl2LnNyYyA9IGNyb3NzVVJMO1xyXG4gICAgTWFya2VyTGFiZWxfLmdldFNoYXJlZENyb3NzLmNyb3NzRGl2ID0gZGl2O1xyXG4gIH1cclxuICByZXR1cm4gTWFya2VyTGFiZWxfLmdldFNoYXJlZENyb3NzLmNyb3NzRGl2O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIERJViByZXByZXNlbnRpbmcgdGhlIGxhYmVsIHRvIHRoZSBET00uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZFxyXG4gKiBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIG1hcmtlcidzIDxjb2RlPnNldE1hcDwvY29kZT4gbWV0aG9kIGlzIGNhbGxlZC5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUub25BZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIG1lID0gdGhpcztcclxuICB2YXIgY01vdXNlSXNEb3duID0gZmFsc2U7XHJcbiAgdmFyIGNEcmFnZ2luZ0xhYmVsID0gZmFsc2U7XHJcbiAgdmFyIGNTYXZlZFpJbmRleDtcclxuICB2YXIgY0xhdE9mZnNldCwgY0xuZ09mZnNldDtcclxuICB2YXIgY0lnbm9yZUNsaWNrO1xyXG4gIHZhciBjUmFpc2VFbmFibGVkO1xyXG4gIHZhciBjU3RhcnRQb3NpdGlvbjtcclxuICB2YXIgY1N0YXJ0Q2VudGVyO1xyXG4gIC8vIENvbnN0YW50czpcclxuICB2YXIgY1JhaXNlT2Zmc2V0ID0gMjA7XHJcbiAgdmFyIGNEcmFnZ2luZ0N1cnNvciA9IFwidXJsKFwiICsgdGhpcy5oYW5kQ3Vyc29yVVJMXyArIFwiKVwiO1xyXG5cclxuICAvLyBTdG9wcyBhbGwgcHJvY2Vzc2luZyBvZiBhbiBldmVudC5cclxuICAvL1xyXG4gIHZhciBjQWJvcnRFdmVudCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgY1N0b3BCb3VuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBtZS5tYXJrZXJfLnNldEFuaW1hdGlvbihudWxsKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmdldFBhbmVzKCkub3ZlcmxheUltYWdlLmFwcGVuZENoaWxkKHRoaXMubGFiZWxEaXZfKTtcclxuICB0aGlzLmdldFBhbmVzKCkub3ZlcmxheU1vdXNlVGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuZXZlbnREaXZfKTtcclxuICAvLyBPbmUgY3Jvc3MgaXMgc2hhcmVkIHdpdGggYWxsIG1hcmtlcnMsIHNvIG9ubHkgYWRkIGl0IG9uY2U6XHJcbiAgaWYgKHR5cGVvZiBNYXJrZXJMYWJlbF8uZ2V0U2hhcmVkQ3Jvc3MucHJvY2Vzc2VkID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB0aGlzLmdldFBhbmVzKCkub3ZlcmxheUltYWdlLmFwcGVuZENoaWxkKHRoaXMuY3Jvc3NEaXZfKTtcclxuICAgIE1hcmtlckxhYmVsXy5nZXRTaGFyZWRDcm9zcy5wcm9jZXNzZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5saXN0ZW5lcnNfID0gW1xyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIodGhpcy5ldmVudERpdl8sIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChtZS5tYXJrZXJfLmdldERyYWdnYWJsZSgpIHx8IG1lLm1hcmtlcl8uZ2V0Q2xpY2thYmxlKCkpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWUubWFya2VyXywgXCJtb3VzZW92ZXJcIiwgZSk7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIodGhpcy5ldmVudERpdl8sIFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKChtZS5tYXJrZXJfLmdldERyYWdnYWJsZSgpIHx8IG1lLm1hcmtlcl8uZ2V0Q2xpY2thYmxlKCkpICYmICFjRHJhZ2dpbmdMYWJlbCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gbWUubWFya2VyXy5nZXRDdXJzb3IoKTtcclxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1lLm1hcmtlcl8sIFwibW91c2VvdXRcIiwgZSk7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIodGhpcy5ldmVudERpdl8sIFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNEcmFnZ2luZ0xhYmVsID0gZmFsc2U7XHJcbiAgICAgIGlmIChtZS5tYXJrZXJfLmdldERyYWdnYWJsZSgpKSB7XHJcbiAgICAgICAgY01vdXNlSXNEb3duID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IGNEcmFnZ2luZ0N1cnNvcjtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWUubWFya2VyXy5nZXREcmFnZ2FibGUoKSB8fCBtZS5tYXJrZXJfLmdldENsaWNrYWJsZSgpKSB7XHJcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtZS5tYXJrZXJfLCBcIm1vdXNlZG93blwiLCBlKTtcclxuICAgICAgICBjQWJvcnRFdmVudChlKTsgLy8gUHJldmVudCBtYXAgcGFuIHdoZW4gc3RhcnRpbmcgYSBkcmFnIG9uIGEgbGFiZWxcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihkb2N1bWVudCwgXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChtRXZlbnQpIHtcclxuICAgICAgdmFyIHBvc2l0aW9uO1xyXG4gICAgICBpZiAoY01vdXNlSXNEb3duKSB7XHJcbiAgICAgICAgY01vdXNlSXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgbWUuZXZlbnREaXZfLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWUubWFya2VyXywgXCJtb3VzZXVwXCIsIG1FdmVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNEcmFnZ2luZ0xhYmVsKSB7XHJcbiAgICAgICAgaWYgKGNSYWlzZUVuYWJsZWQpIHsgLy8gTG93ZXIgdGhlIG1hcmtlciAmIGxhYmVsXHJcbiAgICAgICAgICBwb3NpdGlvbiA9IG1lLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9EaXZQaXhlbChtZS5tYXJrZXJfLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgcG9zaXRpb24ueSArPSBjUmFpc2VPZmZzZXQ7XHJcbiAgICAgICAgICBtZS5tYXJrZXJfLnNldFBvc2l0aW9uKG1lLmdldFByb2plY3Rpb24oKS5mcm9tRGl2UGl4ZWxUb0xhdExuZyhwb3NpdGlvbikpO1xyXG4gICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIHNhbWUgYm91bmNpbmcgc3R5bGUgYXMgd2hlbiB0aGUgbWFya2VyIHBvcnRpb24gaXMgZHJhZ2dlZCxcclxuICAgICAgICAgIC8vIGJ1dCBpdCB3aWxsIGhhdmUgdG8gZG86XHJcbiAgICAgICAgICB0cnkgeyAvLyBXaWxsIGZhaWwgaWYgcnVubmluZyBHb29nbGUgTWFwcyBBUEkgZWFybGllciB0aGFuIFYzLjNcclxuICAgICAgICAgICAgbWUubWFya2VyXy5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY1N0b3BCb3VuY2UsIDE0MDYpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICB9XHJcbiAgICAgICAgbWUuY3Jvc3NEaXZfLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBtZS5tYXJrZXJfLnNldFpJbmRleChjU2F2ZWRaSW5kZXgpO1xyXG4gICAgICAgIGNJZ25vcmVDbGljayA9IHRydWU7IC8vIFNldCBmbGFnIHRvIGlnbm9yZSB0aGUgY2xpY2sgZXZlbnQgcmVwb3J0ZWQgYWZ0ZXIgYSBsYWJlbCBkcmFnXHJcbiAgICAgICAgY0RyYWdnaW5nTGFiZWwgPSBmYWxzZTtcclxuICAgICAgICBtRXZlbnQubGF0TG5nID0gbWUubWFya2VyXy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWUubWFya2VyXywgXCJkcmFnZW5kXCIsIG1FdmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWUubWFya2VyXy5nZXRNYXAoKSwgXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKG1FdmVudCkge1xyXG4gICAgICB2YXIgcG9zaXRpb247XHJcbiAgICAgIGlmIChjTW91c2VJc0Rvd24pIHtcclxuICAgICAgICBpZiAoY0RyYWdnaW5nTGFiZWwpIHtcclxuICAgICAgICAgIC8vIENoYW5nZSB0aGUgcmVwb3J0ZWQgbG9jYXRpb24gZnJvbSB0aGUgbW91c2UgcG9zaXRpb24gdG8gdGhlIG1hcmtlciBwb3NpdGlvbjpcclxuICAgICAgICAgIG1FdmVudC5sYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG1FdmVudC5sYXRMbmcubGF0KCkgLSBjTGF0T2Zmc2V0LCBtRXZlbnQubGF0TG5nLmxuZygpIC0gY0xuZ09mZnNldCk7XHJcbiAgICAgICAgICBwb3NpdGlvbiA9IG1lLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9EaXZQaXhlbChtRXZlbnQubGF0TG5nKTtcclxuICAgICAgICAgIGlmIChjUmFpc2VFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIG1lLmNyb3NzRGl2Xy5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ueCArIFwicHhcIjtcclxuICAgICAgICAgICAgbWUuY3Jvc3NEaXZfLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIG1lLmNyb3NzRGl2Xy5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb24ueSAtPSBjUmFpc2VPZmZzZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtZS5tYXJrZXJfLnNldFBvc2l0aW9uKG1lLmdldFByb2plY3Rpb24oKS5mcm9tRGl2UGl4ZWxUb0xhdExuZyhwb3NpdGlvbikpO1xyXG4gICAgICAgICAgaWYgKGNSYWlzZUVuYWJsZWQpIHsgLy8gRG9uJ3QgcmFpc2UgdGhlIHZlaWw7IHRoaXMgaGFjayBuZWVkZWQgdG8gbWFrZSBNU0lFIGFjdCBwcm9wZXJseVxyXG4gICAgICAgICAgICBtZS5ldmVudERpdl8uc3R5bGUudG9wID0gKHBvc2l0aW9uLnkgKyBjUmFpc2VPZmZzZXQpICsgXCJweFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtZS5tYXJrZXJfLCBcImRyYWdcIiwgbUV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIG9mZnNldHMgZnJvbSB0aGUgY2xpY2sgcG9pbnQgdG8gdGhlIG1hcmtlciBwb3NpdGlvbjpcclxuICAgICAgICAgIGNMYXRPZmZzZXQgPSBtRXZlbnQubGF0TG5nLmxhdCgpIC0gbWUubWFya2VyXy5nZXRQb3NpdGlvbigpLmxhdCgpO1xyXG4gICAgICAgICAgY0xuZ09mZnNldCA9IG1FdmVudC5sYXRMbmcubG5nKCkgLSBtZS5tYXJrZXJfLmdldFBvc2l0aW9uKCkubG5nKCk7XHJcbiAgICAgICAgICBjU2F2ZWRaSW5kZXggPSBtZS5tYXJrZXJfLmdldFpJbmRleCgpO1xyXG4gICAgICAgICAgY1N0YXJ0UG9zaXRpb24gPSBtZS5tYXJrZXJfLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICBjU3RhcnRDZW50ZXIgPSBtZS5tYXJrZXJfLmdldE1hcCgpLmdldENlbnRlcigpO1xyXG4gICAgICAgICAgY1JhaXNlRW5hYmxlZCA9IG1lLm1hcmtlcl8uZ2V0KFwicmFpc2VPbkRyYWdcIik7XHJcbiAgICAgICAgICBjRHJhZ2dpbmdMYWJlbCA9IHRydWU7XHJcbiAgICAgICAgICBtZS5tYXJrZXJfLnNldFpJbmRleCgxMDAwMDAwKTsgLy8gTW92ZXMgdGhlIG1hcmtlciAmIGxhYmVsIHRvIHRoZSBmb3JlZ3JvdW5kIGR1cmluZyBhIGRyYWdcclxuICAgICAgICAgIG1FdmVudC5sYXRMbmcgPSBtZS5tYXJrZXJfLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1lLm1hcmtlcl8sIFwiZHJhZ3N0YXJ0XCIsIG1FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKGRvY3VtZW50LCBcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGNEcmFnZ2luZ0xhYmVsKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRXNjIGtleVxyXG4gICAgICAgICAgY1JhaXNlRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgbWUubWFya2VyXy5zZXRQb3NpdGlvbihjU3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgICBtZS5tYXJrZXJfLmdldE1hcCgpLnNldENlbnRlcihjU3RhcnRDZW50ZXIpO1xyXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihkb2N1bWVudCwgXCJtb3VzZXVwXCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih0aGlzLmV2ZW50RGl2XywgXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAobWUubWFya2VyXy5nZXREcmFnZ2FibGUoKSB8fCBtZS5tYXJrZXJfLmdldENsaWNrYWJsZSgpKSB7XHJcbiAgICAgICAgaWYgKGNJZ25vcmVDbGljaykgeyAvLyBJZ25vcmUgdGhlIGNsaWNrIHJlcG9ydGVkIHdoZW4gYSBsYWJlbCBkcmFnIGVuZHNcclxuICAgICAgICAgIGNJZ25vcmVDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1lLm1hcmtlcl8sIFwiY2xpY2tcIiwgZSk7XHJcbiAgICAgICAgICBjQWJvcnRFdmVudChlKTsgLy8gUHJldmVudCBjbGljayBmcm9tIGJlaW5nIHBhc3NlZCBvbiB0byBtYXBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIodGhpcy5ldmVudERpdl8sIFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKG1lLm1hcmtlcl8uZ2V0RHJhZ2dhYmxlKCkgfHwgbWUubWFya2VyXy5nZXRDbGlja2FibGUoKSkge1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWUubWFya2VyXywgXCJkYmxjbGlja1wiLCBlKTtcclxuICAgICAgICBjQWJvcnRFdmVudChlKTsgLy8gUHJldmVudCBtYXAgem9vbSB3aGVuIGRvdWJsZS1jbGlja2luZyBvbiBhIGxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXJfLCBcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAobUV2ZW50KSB7XHJcbiAgICAgIGlmICghY0RyYWdnaW5nTGFiZWwpIHtcclxuICAgICAgICBjUmFpc2VFbmFibGVkID0gdGhpcy5nZXQoXCJyYWlzZU9uRHJhZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwiZHJhZ1wiLCBmdW5jdGlvbiAobUV2ZW50KSB7XHJcbiAgICAgIGlmICghY0RyYWdnaW5nTGFiZWwpIHtcclxuICAgICAgICBpZiAoY1JhaXNlRW5hYmxlZCkge1xyXG4gICAgICAgICAgbWUuc2V0UG9zaXRpb24oY1JhaXNlT2Zmc2V0KTtcclxuICAgICAgICAgIC8vIER1cmluZyBhIGRyYWcsIHRoZSBtYXJrZXIncyB6LWluZGV4IGlzIHRlbXBvcmFyaWx5IHNldCB0byAxMDAwMDAwIHRvXHJcbiAgICAgICAgICAvLyBlbnN1cmUgaXQgYXBwZWFycyBhYm92ZSBhbGwgb3RoZXIgbWFya2Vycy4gQWxzbyBzZXQgdGhlIGxhYmVsJ3Mgei1pbmRleFxyXG4gICAgICAgICAgLy8gdG8gMTAwMDAwMCAocGx1cyBvciBtaW51cyAxIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBsYWJlbCBpcyBzdXBwb3NlZFxyXG4gICAgICAgICAgLy8gdG8gYmUgYWJvdmUgb3IgYmVsb3cgdGhlIG1hcmtlcikuXHJcbiAgICAgICAgICBtZS5sYWJlbERpdl8uc3R5bGUuekluZGV4ID0gMTAwMDAwMCArICh0aGlzLmdldChcImxhYmVsSW5CYWNrZ3JvdW5kXCIpID8gLTEgOiArMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJkcmFnZW5kXCIsIGZ1bmN0aW9uIChtRXZlbnQpIHtcclxuICAgICAgaWYgKCFjRHJhZ2dpbmdMYWJlbCkge1xyXG4gICAgICAgIGlmIChjUmFpc2VFbmFibGVkKSB7XHJcbiAgICAgICAgICBtZS5zZXRQb3NpdGlvbigwKTsgLy8gQWxzbyByZXN0b3JlcyB6LWluZGV4IG9mIGxhYmVsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJwb3NpdGlvbl9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWUuc2V0UG9zaXRpb24oKTtcclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXJfLCBcInppbmRleF9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWUuc2V0WkluZGV4KCk7XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJ2aXNpYmxlX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZS5zZXRWaXNpYmxlKCk7XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJsYWJlbHZpc2libGVfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1lLnNldFZpc2libGUoKTtcclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXJfLCBcInRpdGxlX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZS5zZXRUaXRsZSgpO1xyXG4gICAgfSksXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlcl8sIFwibGFiZWxjb250ZW50X2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZS5zZXRDb250ZW50KCk7XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJsYWJlbGFuY2hvcl9jaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWUuc2V0QW5jaG9yKCk7XHJcbiAgICB9KSxcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFya2VyXywgXCJsYWJlbGNsYXNzX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZS5zZXRTdHlsZXMoKTtcclxuICAgIH0pLFxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXJfLCBcImxhYmVsc3R5bGVfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1lLnNldFN0eWxlcygpO1xyXG4gICAgfSlcclxuICBdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIERJViBmb3IgdGhlIGxhYmVsIGZyb20gdGhlIERPTS4gSXQgYWxzbyByZW1vdmVzIGFsbCBldmVudCBoYW5kbGVycy5cclxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgbWFya2VyJ3MgPGNvZGU+c2V0TWFwKG51bGwpPC9jb2RlPlxyXG4gKiBtZXRob2QgaXMgY2FsbGVkLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTWFya2VyTGFiZWxfLnByb3RvdHlwZS5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgaTtcclxuICB0aGlzLmxhYmVsRGl2Xy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubGFiZWxEaXZfKTtcclxuICB0aGlzLmV2ZW50RGl2Xy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZXZlbnREaXZfKTtcclxuXHJcbiAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyczpcclxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnNfLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc19baV0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBEcmF3cyB0aGUgbGFiZWwgb24gdGhlIG1hcC5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLnNldENvbnRlbnQoKTtcclxuICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgdGhpcy5zZXRTdHlsZXMoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBsYWJlbC5cclxuICogVGhlIGNvbnRlbnQgY2FuIGJlIHBsYWluIHRleHQgb3IgYW4gSFRNTCBET00gbm9kZS5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgY29udGVudCA9IHRoaXMubWFya2VyXy5nZXQoXCJsYWJlbENvbnRlbnRcIik7XHJcbiAgaWYgKHR5cGVvZiBjb250ZW50Lm5vZGVUeXBlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB0aGlzLmxhYmVsRGl2Xy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgdGhpcy5ldmVudERpdl8uaW5uZXJIVE1MID0gdGhpcy5sYWJlbERpdl8uaW5uZXJIVE1MO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmxhYmVsRGl2Xy5pbm5lckhUTUwgPSBcIlwiOyAvLyBSZW1vdmUgY3VycmVudCBjb250ZW50XHJcbiAgICB0aGlzLmxhYmVsRGl2Xy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMuZXZlbnREaXZfLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSB0b29sIHRpcCBmb3IgdGhlIGxhYmVsLiBJdCBpc1xyXG4gKiBhbHdheXMgc2V0IHRvIGJlIHRoZSBzYW1lIGFzIGZvciB0aGUgbWFya2VyIGl0c2VsZi5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5ldmVudERpdl8udGl0bGUgPSB0aGlzLm1hcmtlcl8uZ2V0VGl0bGUoKSB8fCBcIlwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIHN0eWxlIG9mIHRoZSBsYWJlbCBieSBzZXR0aW5nIHRoZSBzdHlsZSBzaGVldCBhbmQgYXBwbHlpbmdcclxuICogb3RoZXIgc3BlY2lmaWMgc3R5bGVzIHJlcXVlc3RlZC5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBpLCBsYWJlbFN0eWxlO1xyXG5cclxuICAvLyBBcHBseSBzdHlsZSB2YWx1ZXMgZnJvbSB0aGUgc3R5bGUgc2hlZXQgZGVmaW5lZCBpbiB0aGUgbGFiZWxDbGFzcyBwYXJhbWV0ZXI6XHJcbiAgdGhpcy5sYWJlbERpdl8uY2xhc3NOYW1lID0gdGhpcy5tYXJrZXJfLmdldChcImxhYmVsQ2xhc3NcIik7XHJcbiAgdGhpcy5ldmVudERpdl8uY2xhc3NOYW1lID0gdGhpcy5sYWJlbERpdl8uY2xhc3NOYW1lO1xyXG4gIFxyXG4gIC8vIENsZWFyIGV4aXN0aW5nIGlubGluZSBzdHlsZSB2YWx1ZXM6XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUuY3NzVGV4dCA9IFwiXCI7XHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUuY3NzVGV4dCA9IFwiXCI7XHJcbiAgLy8gQXBwbHkgc3R5bGUgdmFsdWVzIGRlZmluZWQgaW4gdGhlIGxhYmVsU3R5bGUgcGFyYW1ldGVyOlxyXG4gIGxhYmVsU3R5bGUgPSB0aGlzLm1hcmtlcl8uZ2V0KFwibGFiZWxTdHlsZVwiKTtcclxuICBmb3IgKGkgaW4gbGFiZWxTdHlsZSkge1xyXG4gICAgaWYgKGxhYmVsU3R5bGUuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgdGhpcy5sYWJlbERpdl8uc3R5bGVbaV0gPSBsYWJlbFN0eWxlW2ldO1xyXG4gICAgICB0aGlzLmV2ZW50RGl2Xy5zdHlsZVtpXSA9IGxhYmVsU3R5bGVbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAgIGlmICh0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5sYWJlbERpdl8uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblx0XHR0aGlzLmxhYmVsRGl2Xy5zdHlsZS5tb3pUcmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHRoaXMubWFya2VyXy5nZXQoXCJyb3RhdGVcIikgKyBcImRlZylcIjtcclxuXHRcdHRoaXMubGFiZWxEaXZfLnN0eWxlLm1zVHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblx0XHR0aGlzLmxhYmVsRGl2Xy5zdHlsZS5vVHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyB0aGlzLm1hcmtlcl8uZ2V0KFwicm90YXRlXCIpICsgXCJkZWcpXCI7XHJcblx0XHR0aGlzLmxhYmVsRGl2Xy5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHRoaXMubWFya2VyXy5nZXQoXCJyb3RhdGVcIikgKyBcImRlZylcIjtcclxuXHJcblx0XHR0aGlzLmV2ZW50RGl2Xy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHRoaXMubWFya2VyXy5nZXQoXCJyb3RhdGVcIikgKyBcImRlZylcIjtcclxuXHRcdHRoaXMuZXZlbnREaXZfLnN0eWxlLm1velRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgdGhpcy5tYXJrZXJfLmdldChcInJvdGF0ZVwiKSArIFwiZGVnKVwiO1xyXG5cdFx0dGhpcy5ldmVudERpdl8uc3R5bGUubXNUcmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHRoaXMubWFya2VyXy5nZXQoXCJyb3RhdGVcIikgKyBcImRlZylcIjtcclxuXHRcdHRoaXMuZXZlbnREaXZfLnN0eWxlLm9UcmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIHRoaXMubWFya2VyXy5nZXQoXCJyb3RhdGVcIikgKyBcImRlZylcIjtcclxuXHRcdHRoaXMuZXZlbnREaXZfLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgdGhpcy5tYXJrZXJfLmdldChcInJvdGF0ZVwiKSArIFwiZGVnKVwiO1xyXG5cdH1cclxuICBcclxuICB0aGlzLnNldE1hbmRhdG9yeVN0eWxlcygpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIG1hbmRhdG9yeSBzdHlsZXMgdG8gdGhlIERJViByZXByZXNlbnRpbmcgdGhlIGxhYmVsIGFzIHdlbGwgYXMgdG8gdGhlXHJcbiAqIGFzc29jaWF0ZWQgZXZlbnQgRElWLiBUaGlzIGluY2x1ZGVzIHNldHRpbmcgdGhlIERJViBwb3NpdGlvbiwgei1pbmRleCwgYW5kIHZpc2liaWxpdHkuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLnNldE1hbmRhdG9yeVN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgLy8gTWFrZSBzdXJlIHRoZSBvcGFjaXR5IHNldHRpbmcgY2F1c2VzIHRoZSBkZXNpcmVkIGVmZmVjdCBvbiBNU0lFOlxyXG4gIGlmICh0eXBlb2YgdGhpcy5sYWJlbERpdl8uc3R5bGUub3BhY2l0eSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5vcGFjaXR5ICE9PSBcIlwiKSB7XHJcbiAgICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5Nc0ZpbHRlciA9IFwiXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShvcGFjaXR5PVwiICsgKHRoaXMubGFiZWxEaXZfLnN0eWxlLm9wYWNpdHkgKiAxMDApICsgXCIpXFxcIlwiO1xyXG4gICAgdGhpcy5sYWJlbERpdl8uc3R5bGUuZmlsdGVyID0gXCJhbHBoYShvcGFjaXR5PVwiICsgKHRoaXMubGFiZWxEaXZfLnN0eWxlLm9wYWNpdHkgKiAxMDApICsgXCIpXCI7XHJcbiAgfVxyXG5cclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5wb3NpdGlvbiA9IHRoaXMubGFiZWxEaXZfLnN0eWxlLnBvc2l0aW9uO1xyXG4gIHRoaXMuZXZlbnREaXZfLnN0eWxlLm92ZXJmbG93ID0gdGhpcy5sYWJlbERpdl8uc3R5bGUub3ZlcmZsb3c7XHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUub3BhY2l0eSA9IDAuMDE7IC8vIERvbid0IHVzZSAwOyBESVYgd29uJ3QgYmUgY2xpY2thYmxlIG9uIE1TSUVcclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5Nc0ZpbHRlciA9IFwiXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShvcGFjaXR5PTEpXFxcIlwiO1xyXG4gIHRoaXMuZXZlbnREaXZfLnN0eWxlLmZpbHRlciA9IFwiYWxwaGEob3BhY2l0eT0xKVwiOyAvLyBGb3IgTVNJRVxyXG4gIFxyXG4gIHRoaXMuc2V0QW5jaG9yKCk7XHJcbiAgdGhpcy5zZXRQb3NpdGlvbigpOyAvLyBUaGlzIGFsc28gdXBkYXRlcyB6LWluZGV4LCBpZiBuZWNlc3NhcnkuXHJcbiAgdGhpcy5zZXRWaXNpYmxlKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgYW5jaG9yIHBvaW50IG9mIHRoZSBsYWJlbC5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUuc2V0QW5jaG9yID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBhbmNob3IgPSB0aGlzLm1hcmtlcl8uZ2V0KFwibGFiZWxBbmNob3JcIik7XHJcbiAgdGhpcy5sYWJlbERpdl8uc3R5bGUubWFyZ2luTGVmdCA9IC1hbmNob3IueCArIFwicHhcIjtcclxuICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5tYXJnaW5Ub3AgPSAtYW5jaG9yLnkgKyBcInB4XCI7XHJcbiAgdGhpcy5ldmVudERpdl8uc3R5bGUubWFyZ2luTGVmdCA9IC1hbmNob3IueCArIFwicHhcIjtcclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5tYXJnaW5Ub3AgPSAtYW5jaG9yLnkgKyBcInB4XCI7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGxhYmVsLiBUaGUgei1pbmRleCBpcyBhbHNvIHVwZGF0ZWQsIGlmIG5lY2Vzc2FyeS5cclxuICogQHByaXZhdGVcclxuICovXHJcbk1hcmtlckxhYmVsXy5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoeU9mZnNldCkge1xyXG4gIHZhciBwb3NpdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb0RpdlBpeGVsKHRoaXMubWFya2VyXy5nZXRQb3NpdGlvbigpKTtcclxuICBpZiAodHlwZW9mIHlPZmZzZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHlPZmZzZXQgPSAwO1xyXG4gIH1cclxuICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5sZWZ0ID0gTWF0aC5yb3VuZChwb3NpdGlvbi54KSArIFwicHhcIjtcclxuICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS50b3AgPSBNYXRoLnJvdW5kKHBvc2l0aW9uLnkgLSB5T2Zmc2V0KSArIFwicHhcIjtcclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS5sZWZ0ID0gdGhpcy5sYWJlbERpdl8uc3R5bGUubGVmdDtcclxuICB0aGlzLmV2ZW50RGl2Xy5zdHlsZS50b3AgPSB0aGlzLmxhYmVsRGl2Xy5zdHlsZS50b3A7XHJcblxyXG4gIHRoaXMuc2V0WkluZGV4KCk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgei1pbmRleCBvZiB0aGUgbGFiZWwuIElmIHRoZSBtYXJrZXIncyB6LWluZGV4IHByb3BlcnR5IGhhcyBub3QgYmVlbiBkZWZpbmVkLCB0aGUgei1pbmRleFxyXG4gKiBvZiB0aGUgbGFiZWwgaXMgc2V0IHRvIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIG9mIHRoZSBsYWJlbC4gVGhpcyBpcyBpbiBrZWVwaW5nIHdpdGggdGhlIGRlZmF1bHRcclxuICogc3RhY2tpbmcgb3JkZXIgZm9yIEdvb2dsZSBNYXBzOiBtYXJrZXJzIHRvIHRoZSBzb3V0aCBhcmUgaW4gZnJvbnQgb2YgbWFya2VycyB0byB0aGUgbm9ydGguXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJMYWJlbF8ucHJvdG90eXBlLnNldFpJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgekFkanVzdCA9ICh0aGlzLm1hcmtlcl8uZ2V0KFwibGFiZWxJbkJhY2tncm91bmRcIikgPyAtMSA6ICsxKTtcclxuICBpZiAodHlwZW9mIHRoaXMubWFya2VyXy5nZXRaSW5kZXgoKSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdGhpcy5sYWJlbERpdl8uc3R5bGUuekluZGV4ID0gcGFyc2VJbnQodGhpcy5sYWJlbERpdl8uc3R5bGUudG9wLCAxMCkgKyB6QWRqdXN0O1xyXG4gICAgdGhpcy5ldmVudERpdl8uc3R5bGUuekluZGV4ID0gdGhpcy5sYWJlbERpdl8uc3R5bGUuekluZGV4O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS56SW5kZXggPSB0aGlzLm1hcmtlcl8uZ2V0WkluZGV4KCkgKyB6QWRqdXN0O1xyXG4gICAgdGhpcy5ldmVudERpdl8uc3R5bGUuekluZGV4ID0gdGhpcy5sYWJlbERpdl8uc3R5bGUuekluZGV4O1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsYWJlbC4gVGhlIGxhYmVsIGlzIHZpc2libGUgb25seSBpZiB0aGUgbWFya2VyIGl0c2VsZiBpc1xyXG4gKiB2aXNpYmxlIChpLmUuLCBpdHMgdmlzaWJsZSBwcm9wZXJ0eSBpcyB0cnVlKSBhbmQgdGhlIGxhYmVsVmlzaWJsZSBwcm9wZXJ0eSBpcyB0cnVlLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTWFya2VyTGFiZWxfLnByb3RvdHlwZS5zZXRWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLm1hcmtlcl8uZ2V0KFwibGFiZWxWaXNpYmxlXCIpKSB7XHJcbiAgICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5tYXJrZXJfLmdldFZpc2libGUoKSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHRoaXMuZXZlbnREaXZfLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmxhYmVsRGl2Xy5zdHlsZS5kaXNwbGF5O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE1hcmtlcldpdGhMYWJlbE9wdGlvbnNcclxuICogQGNsYXNzIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgb3B0aW9uYWwgcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUge0BsaW5rIE1hcmtlcldpdGhMYWJlbH0gY29uc3RydWN0b3IuXHJcbiAqICBUaGUgcHJvcGVydGllcyBhdmFpbGFibGUgYXJlIHRoZSBzYW1lIGFzIGZvciA8Y29kZT5nb29nbGUubWFwcy5NYXJrZXI8L2NvZGU+IHdpdGggdGhlIGFkZGl0aW9uXHJcbiAqICBvZiB0aGUgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuIFRvIGNoYW5nZSBhbnkgb2YgdGhlc2UgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBsYWJlbGVkXHJcbiAqICBtYXJrZXIgaGFzIGJlZW4gY3JlYXRlZCwgY2FsbCA8Y29kZT5nb29nbGUubWFwcy5NYXJrZXIuc2V0KHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk8L2NvZGU+LlxyXG4gKiAgPHA+XHJcbiAqICBXaGVuIGFueSBvZiB0aGVzZSBwcm9wZXJ0aWVzIGNoYW5nZXMsIGEgcHJvcGVydHkgY2hhbmdlZCBldmVudCBpcyBmaXJlZC4gVGhlIG5hbWVzIG9mIHRoZXNlXHJcbiAqICBldmVudHMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgYW5kIGFyZSBvZiB0aGUgZm9ybSA8Y29kZT5wcm9wZXJ0eW5hbWVfY2hhbmdlZDwvY29kZT4uXHJcbiAqICBGb3IgZXhhbXBsZSwgaWYgdGhlIGNvbnRlbnQgb2YgdGhlIGxhYmVsIGNoYW5nZXMsIGEgPGNvZGU+bGFiZWxjb250ZW50X2NoYW5nZWQ8L2NvZGU+IGV2ZW50XHJcbiAqICBpcyBmaXJlZC5cclxuICogIDxwPlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ3xOb2RlfSBbbGFiZWxDb250ZW50XSBUaGUgY29udGVudCBvZiB0aGUgbGFiZWwgKHBsYWluIHRleHQgb3IgYW4gSFRNTCBET00gbm9kZSkuXHJcbiAqIEBwcm9wZXJ0eSB7UG9pbnR9IFtsYWJlbEFuY2hvcl0gQnkgZGVmYXVsdCwgYSBsYWJlbCBpcyBkcmF3biB3aXRoIGl0cyBhbmNob3IgcG9pbnQgYXQgKDAsMCkgc29cclxuICogIHRoYXQgaXRzIHRvcCBsZWZ0IGNvcm5lciBpcyBwb3NpdGlvbmVkIGF0IHRoZSBhbmNob3IgcG9pbnQgb2YgdGhlIGFzc29jaWF0ZWQgbWFya2VyLiBVc2UgdGhpc1xyXG4gKiAgcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBhbmNob3IgcG9pbnQgb2YgdGhlIGxhYmVsLiBGb3IgZXhhbXBsZSwgdG8gY2VudGVyIGEgNTBweC13aWRlIGxhYmVsXHJcbiAqICBiZW5lYXRoIGEgbWFya2VyLCBzcGVjaWZ5IGEgPGNvZGU+bGFiZWxBbmNob3I8L2NvZGU+IG9mIDxjb2RlPmdvb2dsZS5tYXBzLlBvaW50KDI1LCAwKTwvY29kZT4uXHJcbiAqICAoTm90ZTogeC12YWx1ZXMgaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5LXZhbHVlcyBpbmNyZWFzZSB0byB0aGUgdG9wLilcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtsYWJlbENsYXNzXSBUaGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGRlZmluaW5nIHRoZSBzdHlsZXMgZm9yIHRoZSBsYWJlbC5cclxuICogIE5vdGUgdGhhdCBzdHlsZSB2YWx1ZXMgZm9yIDxjb2RlPnBvc2l0aW9uPC9jb2RlPiwgPGNvZGU+b3ZlcmZsb3c8L2NvZGU+LCA8Y29kZT50b3A8L2NvZGU+LFxyXG4gKiAgPGNvZGU+bGVmdDwvY29kZT4sIDxjb2RlPnpJbmRleDwvY29kZT4sIDxjb2RlPmRpc3BsYXk8L2NvZGU+LCA8Y29kZT5tYXJnaW5MZWZ0PC9jb2RlPiwgYW5kXHJcbiAqICA8Y29kZT5tYXJnaW5Ub3A8L2NvZGU+IGFyZSBpZ25vcmVkOyB0aGVzZSBzdHlsZXMgYXJlIGZvciBpbnRlcm5hbCB1c2Ugb25seS5cclxuICogQHByb3BlcnR5IHtPYmplY3R9IFtsYWJlbFN0eWxlXSBBbiBvYmplY3QgbGl0ZXJhbCB3aG9zZSBwcm9wZXJ0aWVzIGRlZmluZSBzcGVjaWZpYyBDU1NcclxuICogIHN0eWxlIHZhbHVlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBsYWJlbC4gU3R5bGUgdmFsdWVzIGRlZmluZWQgaGVyZSBvdmVycmlkZSB0aG9zZSB0aGF0IG1heVxyXG4gKiAgYmUgZGVmaW5lZCBpbiB0aGUgPGNvZGU+bGFiZWxDbGFzczwvY29kZT4gc3R5bGUgc2hlZXQuIElmIHRoaXMgcHJvcGVydHkgaXMgY2hhbmdlZCBhZnRlciB0aGVcclxuICogIGxhYmVsIGhhcyBiZWVuIGNyZWF0ZWQsIGFsbCBwcmV2aW91c2x5IHNldCBzdHlsZXMgKGV4Y2VwdCB0aG9zZSBkZWZpbmVkIGluIHRoZSBzdHlsZSBzaGVldClcclxuICogIGFyZSByZW1vdmVkIGZyb20gdGhlIGxhYmVsIGJlZm9yZSB0aGUgbmV3IHN0eWxlIHZhbHVlcyBhcmUgYXBwbGllZC5cclxuICogIE5vdGUgdGhhdCBzdHlsZSB2YWx1ZXMgZm9yIDxjb2RlPnBvc2l0aW9uPC9jb2RlPiwgPGNvZGU+b3ZlcmZsb3c8L2NvZGU+LCA8Y29kZT50b3A8L2NvZGU+LFxyXG4gKiAgPGNvZGU+bGVmdDwvY29kZT4sIDxjb2RlPnpJbmRleDwvY29kZT4sIDxjb2RlPmRpc3BsYXk8L2NvZGU+LCA8Y29kZT5tYXJnaW5MZWZ0PC9jb2RlPiwgYW5kXHJcbiAqICA8Y29kZT5tYXJnaW5Ub3A8L2NvZGU+IGFyZSBpZ25vcmVkOyB0aGVzZSBzdHlsZXMgYXJlIGZvciBpbnRlcm5hbCB1c2Ugb25seS5cclxuICogQHByb3BlcnR5IHtib29sZWFufSBbbGFiZWxJbkJhY2tncm91bmRdIEEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYSBsYWJlbCB0aGF0IG92ZXJsYXBzIGl0c1xyXG4gKiAgYXNzb2NpYXRlZCBtYXJrZXIgc2hvdWxkIGFwcGVhciBpbiB0aGUgYmFja2dyb3VuZCAoaS5lLiwgaW4gYSBwbGFuZSBiZWxvdyB0aGUgbWFya2VyKS5cclxuICogIFRoZSBkZWZhdWx0IGlzIDxjb2RlPmZhbHNlPC9jb2RlPiwgd2hpY2ggY2F1c2VzIHRoZSBsYWJlbCB0byBhcHBlYXIgaW4gdGhlIGZvcmVncm91bmQuXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2xhYmVsVmlzaWJsZV0gQSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGFiZWwgaXMgdG8gYmUgdmlzaWJsZS5cclxuICogIFRoZSBkZWZhdWx0IGlzIDxjb2RlPnRydWU8L2NvZGU+LiBOb3RlIHRoYXQgZXZlbiBpZiA8Y29kZT5sYWJlbFZpc2libGU8L2NvZGU+IGlzXHJcbiAqICA8Y29kZT50cnVlPC9jb2RlPiwgdGhlIGxhYmVsIHdpbGwgPGk+bm90PC9pPiBiZSB2aXNpYmxlIHVubGVzcyB0aGUgYXNzb2NpYXRlZCBtYXJrZXIgaXMgYWxzb1xyXG4gKiAgdmlzaWJsZSAoaS5lLiwgdW5sZXNzIHRoZSBtYXJrZXIncyA8Y29kZT52aXNpYmxlPC9jb2RlPiBwcm9wZXJ0eSBpcyA8Y29kZT50cnVlPC9jb2RlPikuXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3JhaXNlT25EcmFnXSBBIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsYWJlbCBhbmQgbWFya2VyIGFyZSB0byBiZVxyXG4gKiAgcmFpc2VkIHdoZW4gdGhlIG1hcmtlciBpcyBkcmFnZ2VkLiBUaGUgZGVmYXVsdCBpcyA8Y29kZT50cnVlPC9jb2RlPi4gSWYgYSBkcmFnZ2FibGUgbWFya2VyIGlzXHJcbiAqICBiZWluZyBjcmVhdGVkIGFuZCBhIHZlcnNpb24gb2YgR29vZ2xlIE1hcHMgQVBJIGVhcmxpZXIgdGhhbiBWMy4zIGlzIGJlaW5nIHVzZWQsIHRoaXMgcHJvcGVydHlcclxuICogIG11c3QgYmUgc2V0IHRvIDxjb2RlPmZhbHNlPC9jb2RlPi5cclxuICogQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW1pemVkXSBBIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHJlbmRlcmluZyBpcyB0byBiZSBvcHRpbWl6ZWQgZm9yIHRoZVxyXG4gKiAgbWFya2VyLiA8Yj5JbXBvcnRhbnQ6IFRoZSBvcHRpbWl6ZWQgcmVuZGVyaW5nIHRlY2huaXF1ZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IE1hcmtlcldpdGhMYWJlbCxcclxuICogIHNvIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBhbHdheXMgZm9yY2VkIHRvIDxjb2RlPmZhbHNlPC9jb2RlPi5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtjcm9zc0ltYWdlPVwiaHR0cDovL21hcHMuZ3N0YXRpYy5jb20vaW50bC9lbl91cy9tYXBmaWxlcy9kcmFnX2Nyb3NzXzY3XzE2LnBuZ1wiXVxyXG4gKiAgVGhlIFVSTCBvZiB0aGUgY3Jvc3MgaW1hZ2UgdG8gYmUgZGlzcGxheWVkIHdoaWxlIGRyYWdnaW5nIGEgbWFya2VyLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2hhbmRDdXJzb3I9XCJodHRwOi8vbWFwcy5nc3RhdGljLmNvbS9pbnRsL2VuX3VzL21hcGZpbGVzL2Nsb3NlZGhhbmRfOF84LmN1clwiXVxyXG4gKiAgVGhlIFVSTCBvZiB0aGUgY3Vyc29yIHRvIGJlIGRpc3BsYXllZCB3aGlsZSBkcmFnZ2luZyBhIG1hcmtlci5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgTWFya2VyV2l0aExhYmVsIHdpdGggdGhlIG9wdGlvbnMgc3BlY2lmaWVkIGluIHtAbGluayBNYXJrZXJXaXRoTGFiZWxPcHRpb25zfS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7TWFya2VyV2l0aExhYmVsT3B0aW9uc30gW29wdF9vcHRpb25zXSBUaGUgb3B0aW9uYWwgcGFyYW1ldGVycy5cclxuICovXHJcbmZ1bmN0aW9uIE1hcmtlcldpdGhMYWJlbChvcHRfb3B0aW9ucykge1xyXG4gIG9wdF9vcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XHJcbiAgb3B0X29wdGlvbnMubGFiZWxDb250ZW50ID0gb3B0X29wdGlvbnMubGFiZWxDb250ZW50IHx8IFwiXCI7XHJcbiAgb3B0X29wdGlvbnMubGFiZWxBbmNob3IgPSBvcHRfb3B0aW9ucy5sYWJlbEFuY2hvciB8fCBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCk7XHJcbiAgb3B0X29wdGlvbnMubGFiZWxDbGFzcyA9IG9wdF9vcHRpb25zLmxhYmVsQ2xhc3MgfHwgXCJtYXJrZXJMYWJlbHNcIjtcclxuICBvcHRfb3B0aW9ucy5sYWJlbFN0eWxlID0gb3B0X29wdGlvbnMubGFiZWxTdHlsZSB8fCB7fTtcclxuICBvcHRfb3B0aW9ucy5sYWJlbEluQmFja2dyb3VuZCA9IG9wdF9vcHRpb25zLmxhYmVsSW5CYWNrZ3JvdW5kIHx8IGZhbHNlO1xyXG4gIG9wdF9vcHRpb25zLnJvdGF0ZSA9IG9wdF9vcHRpb25zLnJvdGF0ZSB8fCB1bmRlZmluZWQ7XHJcbiAgXHJcbiAgaWYgKHR5cGVvZiBvcHRfb3B0aW9ucy5sYWJlbFZpc2libGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9wdF9vcHRpb25zLmxhYmVsVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygb3B0X29wdGlvbnMucmFpc2VPbkRyYWcgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9wdF9vcHRpb25zLnJhaXNlT25EcmFnID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBvcHRfb3B0aW9ucy5jbGlja2FibGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9wdF9vcHRpb25zLmNsaWNrYWJsZSA9IHRydWU7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygb3B0X29wdGlvbnMuZHJhZ2dhYmxlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBvcHRfb3B0aW9ucy5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBvcHRfb3B0aW9ucy5vcHRpbWl6ZWQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG9wdF9vcHRpb25zLm9wdGltaXplZCA9IGZhbHNlO1xyXG4gIH1cclxuICBvcHRfb3B0aW9ucy5jcm9zc0ltYWdlID0gb3B0X29wdGlvbnMuY3Jvc3NJbWFnZSB8fCBcImh0dHBcIiArIChkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiA/IFwic1wiIDogXCJcIikgKyBcIjovL21hcHMuZ3N0YXRpYy5jb20vaW50bC9lbl91cy9tYXBmaWxlcy9kcmFnX2Nyb3NzXzY3XzE2LnBuZ1wiO1xyXG4gIG9wdF9vcHRpb25zLmhhbmRDdXJzb3IgPSBvcHRfb3B0aW9ucy5oYW5kQ3Vyc29yIHx8IFwiaHR0cFwiICsgKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiID8gXCJzXCIgOiBcIlwiKSArIFwiOi8vbWFwcy5nc3RhdGljLmNvbS9pbnRsL2VuX3VzL21hcGZpbGVzL2Nsb3NlZGhhbmRfOF84LmN1clwiO1xyXG4gIG9wdF9vcHRpb25zLm9wdGltaXplZCA9IGZhbHNlOyAvLyBPcHRpbWl6ZWQgcmVuZGVyaW5nIGlzIG5vdCBzdXBwb3J0ZWRcclxuXHJcbiAgdGhpcy5sYWJlbCA9IG5ldyBNYXJrZXJMYWJlbF8odGhpcywgb3B0X29wdGlvbnMuY3Jvc3NJbWFnZSwgb3B0X29wdGlvbnMuaGFuZEN1cnNvcik7IC8vIEJpbmQgdGhlIGxhYmVsIHRvIHRoZSBtYXJrZXJcclxuXHJcbiAgLy8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yLiBJdCBjYWxscyBNYXJrZXIuc2V0VmFsdWVzIHRvIGluaXRpYWxpemUsIHNvIGFsbFxyXG4gIC8vIHRoZSBuZXcgcGFyYW1ldGVycyBhcmUgY29udmVuaWVudGx5IHNhdmVkIGFuZCBjYW4gYmUgYWNjZXNzZWQgd2l0aCBnZXQvc2V0LlxyXG4gIC8vIE1hcmtlci5zZXQgdHJpZ2dlcnMgYSBwcm9wZXJ0eSBjaGFuZ2VkIGV2ZW50IChjYWxsZWQgXCJwcm9wZXJ0eW5hbWVfY2hhbmdlZFwiKVxyXG4gIC8vIHRoYXQgdGhlIG1hcmtlciBsYWJlbCBsaXN0ZW5zIGZvciBpbiBvcmRlciB0byByZWFjdCB0byBzdGF0ZSBjaGFuZ2VzLlxyXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG4vLyBNYXJrZXJXaXRoTGFiZWwgaW5oZXJpdHMgZnJvbSA8Y29kZT5NYXJrZXI8L2NvZGU+OlxyXG5NYXJrZXJXaXRoTGFiZWwucHJvdG90eXBlID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcigpO1xyXG5cclxuLyoqXHJcbiAqIE92ZXJyaWRlcyB0aGUgc3RhbmRhcmQgTWFya2VyIHNldE1hcCBmdW5jdGlvbi5cclxuICogQHBhcmFtIHtNYXB9IHRoZU1hcCBUaGUgbWFwIHRvIHdoaWNoIHRoZSBtYXJrZXIgaXMgdG8gYmUgYWRkZWQuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5NYXJrZXJXaXRoTGFiZWwucHJvdG90eXBlLnNldE1hcCA9IGZ1bmN0aW9uICh0aGVNYXApIHtcclxuXHJcbiAgLy8gQ2FsbCB0aGUgaW5oZXJpdGVkIGZ1bmN0aW9uLi4uXHJcbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5zZXRNYXAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgLy8gLi4uIHRoZW4gZGVhbCB3aXRoIHRoZSBsYWJlbDpcclxuICB0aGlzLmxhYmVsLnNldE1hcCh0aGVNYXApO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21hcmtlcndpdGhsYWJlbC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiKGZ1bmN0aW9uKCQpXHJcbntcclxuXHQkLmZuLmJsaW5rID0gZnVuY3Rpb24ob3B0aW9ucylcclxuXHR7XHJcblx0XHR2YXIgZGVmYXVsdHMgPSB7IGRlbGF5OjUwMCB9O1xyXG5cdFx0dmFyIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgb2JqID0gJCh0aGlzKTtcclxuXHRcdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoJChvYmopLmNzcyhcInZpc2liaWxpdHlcIikgPT0gXCJ2aXNpYmxlXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0JChvYmopLmNzcygndmlzaWJpbGl0eScsJ2hpZGRlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0JChvYmopLmNzcygndmlzaWJpbGl0eScsJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIG9wdGlvbnMuZGVsYXkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KGpRdWVyeSkpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvanF1ZXJ5LWJsaW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiFcclxuICogbnVtZXJhbC5qc1xyXG4gKiB2ZXJzaW9uIDogMS41LjNcclxuICogYXV0aG9yIDogQWRhbSBEcmFwZXJcclxuICogbGljZW5zZSA6IE1JVFxyXG4gKiBodHRwOi8vYWRhbXdkcmFwZXIuZ2l0aHViLmNvbS9OdW1lcmFsLWpzL1xyXG4gKi9cclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXt0aGlzLl92YWx1ZT1hfWZ1bmN0aW9uIGIoYSxiLGMsZCl7dmFyIGUsZixnPU1hdGgucG93KDEwLGIpO3JldHVybiBmPShjKGEqZykvZykudG9GaXhlZChiKSxkJiYoZT1uZXcgUmVnRXhwKFwiMHsxLFwiK2QrXCJ9JFwiKSxmPWYucmVwbGFjZShlLFwiXCIpKSxmfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkO3JldHVybiBkPWIuaW5kZXhPZihcIiRcIik+LTE/ZShhLGIsYyk6Yi5pbmRleE9mKFwiJVwiKT4tMT9mKGEsYixjKTpiLmluZGV4T2YoXCI6XCIpPi0xP2coYSxiKTppKGEuX3ZhbHVlLGIsYyl9ZnVuY3Rpb24gZChhLGIpe3ZhciBjLGQsZSxmLGcsaT1iLGo9W1wiS0JcIixcIk1CXCIsXCJHQlwiLFwiVEJcIixcIlBCXCIsXCJFQlwiLFwiWkJcIixcIllCXCJdLGs9ITE7aWYoYi5pbmRleE9mKFwiOlwiKT4tMSlhLl92YWx1ZT1oKGIpO2Vsc2UgaWYoYj09PXEpYS5fdmFsdWU9MDtlbHNle2ZvcihcIi5cIiE9PW9bcF0uZGVsaW1pdGVycy5kZWNpbWFsJiYoYj1iLnJlcGxhY2UoL1xcLi9nLFwiXCIpLnJlcGxhY2Uob1twXS5kZWxpbWl0ZXJzLmRlY2ltYWwsXCIuXCIpKSxjPW5ldyBSZWdFeHAoXCJbXmEtekEtWl1cIitvW3BdLmFiYnJldmlhdGlvbnMudGhvdXNhbmQrXCIoPzpcXFxcKXwoXFxcXFwiK29bcF0uY3VycmVuY3kuc3ltYm9sK1wiKT8oPzpcXFxcKSk/KT8kXCIpLGQ9bmV3IFJlZ0V4cChcIlteYS16QS1aXVwiK29bcF0uYWJicmV2aWF0aW9ucy5taWxsaW9uK1wiKD86XFxcXCl8KFxcXFxcIitvW3BdLmN1cnJlbmN5LnN5bWJvbCtcIik/KD86XFxcXCkpPyk/JFwiKSxlPW5ldyBSZWdFeHAoXCJbXmEtekEtWl1cIitvW3BdLmFiYnJldmlhdGlvbnMuYmlsbGlvbitcIig/OlxcXFwpfChcXFxcXCIrb1twXS5jdXJyZW5jeS5zeW1ib2wrXCIpPyg/OlxcXFwpKT8pPyRcIiksZj1uZXcgUmVnRXhwKFwiW15hLXpBLVpdXCIrb1twXS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uK1wiKD86XFxcXCl8KFxcXFxcIitvW3BdLmN1cnJlbmN5LnN5bWJvbCtcIik/KD86XFxcXCkpPyk/JFwiKSxnPTA7Zzw9ai5sZW5ndGgmJiEoaz1iLmluZGV4T2YoaltnXSk+LTE/TWF0aC5wb3coMTAyNCxnKzEpOiExKTtnKyspO2EuX3ZhbHVlPShrP2s6MSkqKGkubWF0Y2goYyk/TWF0aC5wb3coMTAsMyk6MSkqKGkubWF0Y2goZCk/TWF0aC5wb3coMTAsNik6MSkqKGkubWF0Y2goZSk/TWF0aC5wb3coMTAsOSk6MSkqKGkubWF0Y2goZik/TWF0aC5wb3coMTAsMTIpOjEpKihiLmluZGV4T2YoXCIlXCIpPi0xPy4wMToxKSooKGIuc3BsaXQoXCItXCIpLmxlbmd0aCtNYXRoLm1pbihiLnNwbGl0KFwiKFwiKS5sZW5ndGgtMSxiLnNwbGl0KFwiKVwiKS5sZW5ndGgtMSkpJTI/MTotMSkqTnVtYmVyKGIucmVwbGFjZSgvW14wLTlcXC5dKy9nLFwiXCIpKSxhLl92YWx1ZT1rP01hdGguY2VpbChhLl92YWx1ZSk6YS5fdmFsdWV9cmV0dXJuIGEuX3ZhbHVlfWZ1bmN0aW9uIGUoYSxiLGMpe3ZhciBkLGUsZj1iLmluZGV4T2YoXCIkXCIpLGc9Yi5pbmRleE9mKFwiKFwiKSxoPWIuaW5kZXhPZihcIi1cIiksaj1cIlwiO3JldHVybiBiLmluZGV4T2YoXCIgJFwiKT4tMT8oaj1cIiBcIixiPWIucmVwbGFjZShcIiAkXCIsXCJcIikpOmIuaW5kZXhPZihcIiQgXCIpPi0xPyhqPVwiIFwiLGI9Yi5yZXBsYWNlKFwiJCBcIixcIlwiKSk6Yj1iLnJlcGxhY2UoXCIkXCIsXCJcIiksZT1pKGEuX3ZhbHVlLGIsYyksMT49Zj9lLmluZGV4T2YoXCIoXCIpPi0xfHxlLmluZGV4T2YoXCItXCIpPi0xPyhlPWUuc3BsaXQoXCJcIiksZD0xLChnPmZ8fGg+ZikmJihkPTApLGUuc3BsaWNlKGQsMCxvW3BdLmN1cnJlbmN5LnN5bWJvbCtqKSxlPWUuam9pbihcIlwiKSk6ZT1vW3BdLmN1cnJlbmN5LnN5bWJvbCtqK2U6ZS5pbmRleE9mKFwiKVwiKT4tMT8oZT1lLnNwbGl0KFwiXCIpLGUuc3BsaWNlKC0xLDAsaitvW3BdLmN1cnJlbmN5LnN5bWJvbCksZT1lLmpvaW4oXCJcIikpOmU9ZStqK29bcF0uY3VycmVuY3kuc3ltYm9sLGV9ZnVuY3Rpb24gZihhLGIsYyl7dmFyIGQsZT1cIlwiLGY9MTAwKmEuX3ZhbHVlO3JldHVybiBiLmluZGV4T2YoXCIgJVwiKT4tMT8oZT1cIiBcIixiPWIucmVwbGFjZShcIiAlXCIsXCJcIikpOmI9Yi5yZXBsYWNlKFwiJVwiLFwiXCIpLGQ9aShmLGIsYyksZC5pbmRleE9mKFwiKVwiKT4tMT8oZD1kLnNwbGl0KFwiXCIpLGQuc3BsaWNlKC0xLDAsZStcIiVcIiksZD1kLmpvaW4oXCJcIikpOmQ9ZCtlK1wiJVwiLGR9ZnVuY3Rpb24gZyhhKXt2YXIgYj1NYXRoLmZsb29yKGEuX3ZhbHVlLzYwLzYwKSxjPU1hdGguZmxvb3IoKGEuX3ZhbHVlLTYwKmIqNjApLzYwKSxkPU1hdGgucm91bmQoYS5fdmFsdWUtNjAqYio2MC02MCpjKTtyZXR1cm4gYitcIjpcIisoMTA+Yz9cIjBcIitjOmMpK1wiOlwiKygxMD5kP1wiMFwiK2Q6ZCl9ZnVuY3Rpb24gaChhKXt2YXIgYj1hLnNwbGl0KFwiOlwiKSxjPTA7cmV0dXJuIDM9PT1iLmxlbmd0aD8oYys9NjAqTnVtYmVyKGJbMF0pKjYwLGMrPTYwKk51bWJlcihiWzFdKSxjKz1OdW1iZXIoYlsyXSkpOjI9PT1iLmxlbmd0aCYmKGMrPTYwKk51bWJlcihiWzBdKSxjKz1OdW1iZXIoYlsxXSkpLE51bWJlcihjKX1mdW5jdGlvbiBpKGEsYyxkKXt2YXIgZSxmLGcsaCxpLGosaz0hMSxsPSExLG09ITEsbj1cIlwiLHI9ITEscz0hMSx0PSExLHU9ITEsdj0hMSx3PVwiXCIseD1cIlwiLHk9TWF0aC5hYnMoYSksej1bXCJCXCIsXCJLQlwiLFwiTUJcIixcIkdCXCIsXCJUQlwiLFwiUEJcIixcIkVCXCIsXCJaQlwiLFwiWUJcIl0sQT1cIlwiLEI9ITE7aWYoMD09PWEmJm51bGwhPT1xKXJldHVybiBxO2lmKGMuaW5kZXhPZihcIihcIik+LTE/KGs9ITAsYz1jLnNsaWNlKDEsLTEpKTpjLmluZGV4T2YoXCIrXCIpPi0xJiYobD0hMCxjPWMucmVwbGFjZSgvXFwrL2csXCJcIikpLGMuaW5kZXhPZihcImFcIik+LTEmJihyPWMuaW5kZXhPZihcImFLXCIpPj0wLHM9Yy5pbmRleE9mKFwiYU1cIik+PTAsdD1jLmluZGV4T2YoXCJhQlwiKT49MCx1PWMuaW5kZXhPZihcImFUXCIpPj0wLHY9cnx8c3x8dHx8dSxjLmluZGV4T2YoXCIgYVwiKT4tMT8obj1cIiBcIixjPWMucmVwbGFjZShcIiBhXCIsXCJcIikpOmM9Yy5yZXBsYWNlKFwiYVwiLFwiXCIpLHk+PU1hdGgucG93KDEwLDEyKSYmIXZ8fHU/KG4rPW9bcF0uYWJicmV2aWF0aW9ucy50cmlsbGlvbixhLz1NYXRoLnBvdygxMCwxMikpOnk8TWF0aC5wb3coMTAsMTIpJiZ5Pj1NYXRoLnBvdygxMCw5KSYmIXZ8fHQ/KG4rPW9bcF0uYWJicmV2aWF0aW9ucy5iaWxsaW9uLGEvPU1hdGgucG93KDEwLDkpKTp5PE1hdGgucG93KDEwLDkpJiZ5Pj1NYXRoLnBvdygxMCw2KSYmIXZ8fHM/KG4rPW9bcF0uYWJicmV2aWF0aW9ucy5taWxsaW9uLGEvPU1hdGgucG93KDEwLDYpKTooeTxNYXRoLnBvdygxMCw2KSYmeT49TWF0aC5wb3coMTAsMykmJiF2fHxyKSYmKG4rPW9bcF0uYWJicmV2aWF0aW9ucy50aG91c2FuZCxhLz1NYXRoLnBvdygxMCwzKSkpLGMuaW5kZXhPZihcImJcIik+LTEpZm9yKGMuaW5kZXhPZihcIiBiXCIpPi0xPyh3PVwiIFwiLGM9Yy5yZXBsYWNlKFwiIGJcIixcIlwiKSk6Yz1jLnJlcGxhY2UoXCJiXCIsXCJcIiksZz0wO2c8PXoubGVuZ3RoO2crKylpZihlPU1hdGgucG93KDEwMjQsZyksZj1NYXRoLnBvdygxMDI0LGcrMSksYT49ZSYmZj5hKXt3Kz16W2ddLGU+MCYmKGEvPWUpO2JyZWFrfXJldHVybiBjLmluZGV4T2YoXCJvXCIpPi0xJiYoYy5pbmRleE9mKFwiIG9cIik+LTE/KHg9XCIgXCIsYz1jLnJlcGxhY2UoXCIgb1wiLFwiXCIpKTpjPWMucmVwbGFjZShcIm9cIixcIlwiKSx4Kz1vW3BdLm9yZGluYWwoYSkpLGMuaW5kZXhPZihcIlsuXVwiKT4tMSYmKG09ITAsYz1jLnJlcGxhY2UoXCJbLl1cIixcIi5cIikpLGg9YS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVswXSxpPWMuc3BsaXQoXCIuXCIpWzFdLGo9Yy5pbmRleE9mKFwiLFwiKSxpPyhpLmluZGV4T2YoXCJbXCIpPi0xPyhpPWkucmVwbGFjZShcIl1cIixcIlwiKSxpPWkuc3BsaXQoXCJbXCIpLEE9YihhLGlbMF0ubGVuZ3RoK2lbMV0ubGVuZ3RoLGQsaVsxXS5sZW5ndGgpKTpBPWIoYSxpLmxlbmd0aCxkKSxoPUEuc3BsaXQoXCIuXCIpWzBdLEE9QS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoP29bcF0uZGVsaW1pdGVycy5kZWNpbWFsK0Euc3BsaXQoXCIuXCIpWzFdOlwiXCIsbSYmMD09PU51bWJlcihBLnNsaWNlKDEpKSYmKEE9XCJcIikpOmg9YihhLG51bGwsZCksaC5pbmRleE9mKFwiLVwiKT4tMSYmKGg9aC5zbGljZSgxKSxCPSEwKSxqPi0xJiYoaD1oLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFwiJDFcIitvW3BdLmRlbGltaXRlcnMudGhvdXNhbmRzKSksMD09PWMuaW5kZXhPZihcIi5cIikmJihoPVwiXCIpLChrJiZCP1wiKFwiOlwiXCIpKyghayYmQj9cIi1cIjpcIlwiKSsoIUImJmw/XCIrXCI6XCJcIikraCtBKyh4P3g6XCJcIikrKG4/bjpcIlwiKSsodz93OlwiXCIpKyhrJiZCP1wiKVwiOlwiXCIpfWZ1bmN0aW9uIGooYSxiKXtvW2FdPWJ9ZnVuY3Rpb24gayhhKXt2YXIgYj1hLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO3JldHVybiBiLmxlbmd0aDwyPzE6TWF0aC5wb3coMTAsYlsxXS5sZW5ndGgpfWZ1bmN0aW9uIGwoKXt2YXIgYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO3JldHVybiBhLnJlZHVjZShmdW5jdGlvbihhLGIpe3ZhciBjPWsoYSksZD1rKGIpO3JldHVybiBjPmQ/YzpkfSwtMS8wKX12YXIgbSxuPVwiMS41LjNcIixvPXt9LHA9XCJlblwiLHE9bnVsbCxyPVwiMCwwXCIscz1cInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0czttPWZ1bmN0aW9uKGIpe3JldHVybiBtLmlzTnVtZXJhbChiKT9iPWIudmFsdWUoKTowPT09Ynx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj0wOk51bWJlcihiKXx8KGI9bS5mbi51bmZvcm1hdChiKSksbmV3IGEoTnVtYmVyKGIpKX0sbS52ZXJzaW9uPW4sbS5pc051bWVyYWw9ZnVuY3Rpb24oYil7cmV0dXJuIGIgaW5zdGFuY2VvZiBhfSxtLmxhbmd1YWdlPWZ1bmN0aW9uKGEsYil7aWYoIWEpcmV0dXJuIHA7aWYoYSYmIWIpe2lmKCFvW2FdKXRocm93IG5ldyBFcnJvcihcIlVua25vd24gbGFuZ3VhZ2UgOiBcIithKTtwPWF9cmV0dXJuKGJ8fCFvW2FdKSYmaihhLGIpLG19LG0ubGFuZ3VhZ2VEYXRhPWZ1bmN0aW9uKGEpe2lmKCFhKXJldHVybiBvW3BdO2lmKCFvW2FdKXRocm93IG5ldyBFcnJvcihcIlVua25vd24gbGFuZ3VhZ2UgOiBcIithKTtyZXR1cm4gb1thXX0sbS5sYW5ndWFnZShcImVuXCIse2RlbGltaXRlcnM6e3Rob3VzYW5kczpcIixcIixkZWNpbWFsOlwiLlwifSxhYmJyZXZpYXRpb25zOnt0aG91c2FuZDpcImtcIixtaWxsaW9uOlwibVwiLGJpbGxpb246XCJiXCIsdHJpbGxpb246XCJ0XCJ9LG9yZGluYWw6ZnVuY3Rpb24oYSl7dmFyIGI9YSUxMDtyZXR1cm4gMT09PX5+KGElMTAwLzEwKT9cInRoXCI6MT09PWI/XCJzdFwiOjI9PT1iP1wibmRcIjozPT09Yj9cInJkXCI6XCJ0aFwifSxjdXJyZW5jeTp7c3ltYm9sOlwiJFwifX0pLG0uemVyb0Zvcm1hdD1mdW5jdGlvbihhKXtxPVwic3RyaW5nXCI9PXR5cGVvZiBhP2E6bnVsbH0sbS5kZWZhdWx0Rm9ybWF0PWZ1bmN0aW9uKGEpe3I9XCJzdHJpbmdcIj09dHlwZW9mIGE/YTpcIjAuMFwifSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGUucmVkdWNlJiYoQXJyYXkucHJvdG90eXBlLnJlZHVjZT1mdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2lmKG51bGw9PT10aGlzfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLnJlZHVjZSBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWRcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYSl0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7dmFyIGMsZCxlPXRoaXMubGVuZ3RoPj4+MCxmPSExO2ZvcigxPGFyZ3VtZW50cy5sZW5ndGgmJihkPWIsZj0hMCksYz0wO2U+YzsrK2MpdGhpcy5oYXNPd25Qcm9wZXJ0eShjKSYmKGY/ZD1hKGQsdGhpc1tjXSxjLHRoaXMpOihkPXRoaXNbY10sZj0hMCkpO2lmKCFmKXRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCIpO3JldHVybiBkfSksbS5mbj1hLnByb3RvdHlwZT17Y2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gbSh0aGlzKX0sZm9ybWF0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGModGhpcyxhP2E6cix2b2lkIDAhPT1iP2I6TWF0aC5yb3VuZCl9LHVuZm9ybWF0OmZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBOdW1iZXJdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk/YTpkKHRoaXMsYT9hOnIpfSx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl92YWx1ZX0sdmFsdWVPZjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl92YWx1ZX0sc2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl92YWx1ZT1OdW1iZXIoYSksdGhpc30sYWRkOmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm4gYStjKmJ9dmFyIGM9bC5jYWxsKG51bGwsdGhpcy5fdmFsdWUsYSk7cmV0dXJuIHRoaXMuX3ZhbHVlPVt0aGlzLl92YWx1ZSxhXS5yZWR1Y2UoYiwwKS9jLHRoaXN9LHN1YnRyYWN0OmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm4gYS1jKmJ9dmFyIGM9bC5jYWxsKG51bGwsdGhpcy5fdmFsdWUsYSk7cmV0dXJuIHRoaXMuX3ZhbHVlPVthXS5yZWR1Y2UoYix0aGlzLl92YWx1ZSpjKS9jLHRoaXN9LG11bHRpcGx5OmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXt2YXIgYz1sKGEsYik7cmV0dXJuIGEqYypiKmMvKGMqYyl9cmV0dXJuIHRoaXMuX3ZhbHVlPVt0aGlzLl92YWx1ZSxhXS5yZWR1Y2UoYiwxKSx0aGlzfSxkaXZpZGU6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIpe3ZhciBjPWwoYSxiKTtyZXR1cm4gYSpjLyhiKmMpfXJldHVybiB0aGlzLl92YWx1ZT1bdGhpcy5fdmFsdWUsYV0ucmVkdWNlKGIpLHRoaXN9LGRpZmZlcmVuY2U6ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguYWJzKG0odGhpcy5fdmFsdWUpLnN1YnRyYWN0KGEpLnZhbHVlKCkpfX0scyYmKG1vZHVsZS5leHBvcnRzPW0pLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlbmRlciYmKHRoaXMubnVtZXJhbD1tKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShbXSxmdW5jdGlvbigpe3JldHVybiBtfSl9KS5jYWxsKHRoaXMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL251bWVyYWwubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCBwZXJpb2QgPSAxMDAwOyAvLyB0aW1lIGJldHdlZW4gcmVmcmVzaGVzIGluIG1zXHJcblxyXG52YXIgcG9zQ2xpZW50ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtMjMuNjI2MTEsIC00Ni42NTYzODcpXHJcbmlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pIHtcclxuICAgIFx0cG9zQ2xpZW50ID0ge1xyXG4gICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxudmFyIG1hcE9wdGlvbnMgPSB7XHJcblx0Y2VudGVyIDoge1xyXG5cdFx0bGF0IDogMCxcclxuXHRcdGxuZyA6IDBcclxuXHR9LFxyXG5cdHpvb20gOiA5LFxyXG5cdG1hcFR5cGVJZCA6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5URVJSQUlOLFxyXG5cdGNlbnRlciA6IHBvc0NsaWVudFxyXG59O1xyXG52YXIgbWFwO1xyXG52YXIgcG9seU9wdGlvbnMgPSB7XHJcblx0Z2VvZGVzaWMgOiB0cnVlLFxyXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwMDAnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAwLjgsXHJcblx0c3Ryb2tlV2VpZ2h0IDogM1xyXG59O1xyXG52YXIgbWFya2VyT3B0aW9ucyA9IHtcclxuXHRpY29uIDoge1xyXG5cdFx0cGF0aCA6IFwiTTM2Mi45ODUsNDMwLjcyNGwtMTAuMjQ4LDUxLjIzNGw2Mi4zMzIsNTcuOTY5bC0zLjI5MywyNi4xNDUgbC03MS4zNDUtMjMuNTk5bC0yLjAwMSwxMy4wNjlsLTIuMDU3LTEzLjUyOWwtNzEuMjc4LFwiXHJcblx0XHRcdFx0KyBcIjIyLjkyOGwtNS43NjItMjMuOTg0bDY0LjA5Ny01OS4yNzFsLTguOTEzLTUxLjM1OWwwLjg1OC0xMTQuNDMgbC0yMS45NDUtMTEuMzM4bC0xODkuMzU4LFwiXHJcblx0XHRcdFx0KyBcIlwiXHJcblx0XHRcdFx0KyBcIjg4Ljc2bC0xLjE4LTMyLjI2MmwyMTMuMzQ0LTE4MC4wOGwwLjg3NS0xMDcuNDM2bDcuOTczLTMyLjAwNWw3LjY0Mi0xMi4wNTRsNy4zNzctMy45NThsOS4yMzgsXCJcclxuXHRcdFx0XHQrIFwiMy42NSBsNi4zNjcsMTQuOTI1bDcuMzY5LDMwLjM2M3YxMDYuMzc1bDIxMS41OTIsMTgyLjA4MmwtMS40OTYsMzIuMjQ3bC0xODguNDc5LTkwLjYxbC0yMS42MTYsMTAuMDg3bC0wLjA5NCwxMTUuNjg0XCIsXHJcblx0XHRzY2FsZSA6IDAuMDgsXHJcblx0XHRmaWxsT3BhY2l0eSA6IDEsXHJcblx0XHRhbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzQwLCAzNDApLFxyXG5cdFx0c3Ryb2tlV2VpZ2h0IDogMC41XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGljb25BaXJwb3J0ID0ge1xyXG5cdC8vdXJsIDogJ2FpcnBvcnQucG5nJyxcclxuXHR1cmwgOiAnLi9pbWFnZXMvYWlycG9ydC5wbmcnLFxyXG5cdHNpemUgOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzMCwgNTApLFxyXG5cdG9yaWdpbiA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuXHRhbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMTUsIDUwKVxyXG59O1xyXG5cclxudmFyIGljb25XYXlwb2ludCA9IHtcclxuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXHJcblx0c2NhbGUgOiA2LFxyXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwRkYnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDMsXHJcblx0ZmlsbENvbG9yIDogJ3doaXRlJyxcclxuXHRmaWxsT3BhY2l0eSA6IDEsXHJcbn07XHJcblxyXG52YXIgaWNvbkxhYmVsUm91dGUgPSB7XHJcblx0cGF0aCA6IFwibTk2LDQ0XCIsXHJcblx0c2NhbGUgOiAxLFxyXG5cdHN0cm9rZUNvbG9yIDogJyNGRkZGRkYnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDEsXHJcblx0ZmlsbENvbG9yIDogJ3doaXRlJyxcclxuXHRmaWxsT3BhY2l0eSA6IDEwMCxcclxufTtcclxuXHJcbnZhciBpY29uVk9SID0ge1xyXG5cdHBhdGggOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkNJUkNMRSxcclxuXHRzY2FsZSA6IDcsXHJcblx0c3Ryb2tlQ29sb3IgOiAnIzAwMDAwMCcsXHJcblx0c3Ryb2tlT3BhY2l0eSA6IDEsXHJcblx0c3Ryb2tlV2VpZ2h0IDogMyxcclxuXHRmaWxsQ29sb3IgOiAneWVsbG93JyxcclxuXHRmaWxsT3BhY2l0eSA6IDEsXHJcbn07XHJcblxyXG52YXIgaWNvbk5EQiA9IHtcclxuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXHJcblx0c2NhbGUgOiA3LFxyXG5cdHN0cm9rZUNvbG9yIDogJyMyNjI2MjYnLFxyXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxyXG5cdHN0cm9rZVdlaWdodCA6IDMsXHJcblx0ZmlsbENvbG9yIDogJyNGRkQwNUMnLFxyXG5cdGZpbGxPcGFjaXR5IDogMSxcclxufTtcclxuXHJcbnZhciBwbGFuZUxpc3QgPSB7fTtcclxudmFyIHJlZnJlc2hDb250cm9sUGFuZWwgPSBmYWxzZTtcclxudmFyIHBsYW5lVG9Gb2xsb3cgPSBudWxsO1xyXG52YXIgY29sb3JzID0gWyBcImJsdWVcIixcIiMyNjc2NEVcIiwgXCIjRjA4NTI2XCIsIFwiIzlDRkY1NFwiLCBcIiM3MjFCNDlcIiwgXCIjQTdEOEY4XCIsXCIjMkFGREJDXCIsIFwiI0ZCRTg3MFwiLCBcIiM3MTEzMDJcIiwgXCIjMjU3MkMyXCIsIFwiIzFDMjcxRFwiLCBcIiM2MzJFODVcIixcclxuXHRcdFwiIzFFNUY3QVwiLCBcIiNEOEIyRjVcIiwgXCIjRDMwN0EyXCIsIFwiI0YzOTFCNVwiLCBcIiNGMTgwRjVcIiwgXCIjM0ExRTJFXCIsXCIjQUU3NzA3XCIsIFwiIzNFM0QwRVwiLCBcIiM2QUIwNkVcIiBdO1xyXG52YXIgY29sb3JfaW5kZXggPSAwO1xyXG52YXIgbmF2TWFwO1xyXG52YXIgZmxpZ2h0UGxhbiA9IHt9O1xyXG52YXIgZmxpZ2h0UGF0aDsgLy8gYW4gb2JqZWN0IGdvb2dsZS5tYXBzLlBvbHlsaW5lIC0gcmVwcmVzZW50aW5nIHRoZSBGbGlnaHQgUGxhblxyXG52YXIgbWFya2VycyA9IFtdO1xyXG52YXIgcm91dGVMYWJlbHNPZmZTZXQgPSBbXTtcclxudmFyIG1hcmtlcnNMYWJlbFJvdXRlID0gW107XHJcbnZhciBtYXJrZXJzV2F5cG9pbnQgICA9IFtdO1xyXG52YXIgZWxJbmZvQm94UGxhbmU7XHJcbnZhciBjaGFzZUFpcnBsYW5lID0gZmFsc2U7XHJcblxyXG4kLmFqYXhTZXR1cCh7XHJcblx0Y2FjaGUgOiBmYWxzZVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblxyXG5cdG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwgbWFwT3B0aW9ucyk7XHJcblxyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2RyYWdzdGFydCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnI25vZm9jdXMnKS5jbGljaygpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCdib2R5Jykua2V5ZG93bihmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoZS5rZXlDb2RlID09IDE5Mikge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRvZ2dsZUZsaWdodFBhbmVsKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoZS5rZXlDb2RlID09IDE5KSB7XHJcblx0XHRcdCQuZ2V0SlNPTihcInBhdXNlXCIpLmRvbmUoZnVuY3Rpb24oZGF0YSl7fSkuZXJyb3IoZnVuY3Rpb24oKSB7c2hvd0Vycm9yKCdOb3QgYWJsZSB0byBQYXVzZSBYLVBsYW5lLicpfSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0IG1hcC5hZGRMaXN0ZW5lcignem9vbV9jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XHJcblx0ICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvdXRlTGFiZWxzT2ZmU2V0Lmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgIFx0ICAgdmFyIGRpc3RMYWJlbFJvdXRlID0gMjQwMDA7XHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDE2ICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDtcclxuXHQgICAgXHQgICB9IGVsc2VcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTUgKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDUwMDtcclxuXHQgICAgXHQgICB9IGVsc2VcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTIgKSB7XHJcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDUwMDA7XHJcblx0ICAgIFx0ICAgfSBlbHNlXHJcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDEwICkge1xyXG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSAxMjAwMDtcclxuXHQgICAgXHQgICB9IGVsc2VcclxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gOCApIHtcclxuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gMTYwMDA7XHJcblx0ICAgIFx0ICAgfVxyXG5cdCAgICBcdCAgIHZhciBoZGdMYWJlbCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhyb3V0ZUxhYmVsc09mZlNldFtpXS5sYXRsbmcsIHJvdXRlTGFiZWxzT2ZmU2V0W2ldLm5leHRMYXRMbmcpOyBcclxuXHQgICAgXHQgICB2YXIgb2Zmc2V0ID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQocm91dGVMYWJlbHNPZmZTZXRbaV0ubGF0bG5nLCBkaXN0TGFiZWxSb3V0ZSwgaGRnTGFiZWwsIDYzNzEwMDApO1xyXG5cdCAgICBcdCAgIG1hcmtlcnNMYWJlbFJvdXRlW2ldLnBvc2l0aW9uID0gb2Zmc2V0OyBcclxuICAgIFx0ICAgfVxyXG5cdCAgICB9LDEpO1xyXG5cdH0pO1xyXG5cdCBcclxuXHR1cGRhdGVQb3NpdGlvbigpO1xyXG5cdHNldEludGVydmFsKHVwZGF0ZVBvc2l0aW9uLCBwZXJpb2QpO1xyXG5cdHNldEludGVydmFsKGNoZWNrRmxpZ2h0UGxhbkJveEFuZExvYWQsIDIwMDApO1xyXG5cclxuXHQvLyBuYXYgZGF0YSBvdmVybGF5c1xyXG5cdC8qbmF2TWFwID0gbmV3IGdvb2dsZS5tYXBzLkltYWdlTWFwVHlwZSh7XHJcblx0XHRnZXRUaWxlVXJsIDogZnVuY3Rpb24oY29vcmQsIHpvb20pIHtcclxuXHRcdFx0dGlsZVNpemUgPSAyNTYgLyBNYXRoLnBvdygyLCB6b29tKTtcclxuXHRcdFx0d2VzdCA9IGNvb3JkLnggKiB0aWxlU2l6ZTtcclxuXHRcdFx0ZWFzdCA9IHdlc3QgKyB0aWxlU2l6ZTtcclxuXHRcdFx0bm9ydGggPSBjb29yZC55ICogdGlsZVNpemU7XHJcblx0XHRcdHNvdXRoID0gbm9ydGggKyB0aWxlU2l6ZTtcclxuXHJcblx0XHRcdG5vcnRoRWFzdCA9IG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbVBvaW50VG9MYXRMbmcoXHJcblx0XHRcdFx0XHRuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoZWFzdCwgbm9ydGgpKTtcclxuXHRcdFx0c291dGhXZXN0ID0gbWFwLmdldFByb2plY3Rpb24oKS5mcm9tUG9pbnRUb0xhdExuZyhcclxuXHRcdFx0XHRcdG5ldyBnb29nbGUubWFwcy5Qb2ludCh3ZXN0LCBzb3V0aCkpO1xyXG5cclxuXHRcdFx0Ly8gaHR0cDovL3gtcGxhbmUtbWFwLmZvdWMubmV0L25hdi5waHA/bm9ydGg9LTI0LjUyNzElMjAmc291dGg9LTI1Ljc5OTklMjAmZWFzdD0tNDYuNDA2MyUyMCZ3ZXN0PS00Ny44MTI1XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gWyAnaHR0cDovL3gtcGxhbmUtbWFwLmZvdWMubmV0L25hdi5waHA/bm9ydGg9JyxcclxuXHRcdFx0XHRcdG5vcnRoRWFzdC5sYXQoKS50b0ZpeGVkKDQpLCAnJnNvdXRoPScsXHJcblx0XHRcdFx0XHRzb3V0aFdlc3QubGF0KCkudG9GaXhlZCg0KSwgJyZlYXN0PScsXHJcblx0XHRcdFx0XHRub3J0aEVhc3QubG5nKCkudG9GaXhlZCg0KSwgJyZ3ZXN0PScsXHJcblx0XHRcdFx0XHRzb3V0aFdlc3QubG5nKCkudG9GaXhlZCg0KSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICogLCAnJnR5cGU9QVBUJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXS5qb2luKCcnKTtcclxuXHRcdH0sXHJcblx0XHR0aWxlU2l6ZSA6IG5ldyBnb29nbGUubWFwcy5TaXplKDI1NiwgMjU2KSxcclxuXHRcdG1pblpvb20gOiA2LFxyXG5cdFx0bWF4Wm9vbSA6IDEyXHJcblx0fSk7XHJcblxyXG5cdG1hcC5vdmVybGF5TWFwVHlwZXMucHVzaChuYXZNYXApO1xyXG5cdG5hdk1hcC5zZXRPcGFjaXR5KDApOyovXHJcbn1cclxuXHJcbnZhciBmbGlnaHRwbGFuVGV4dCA9ICdub25lJztcclxuZnVuY3Rpb24gY2hlY2tGbGlnaHRQbGFuQm94QW5kTG9hZCgpIHtcclxuXHRpZiAoJCgnI3BhbmVsLWZwJykuaXMoXCI6aGlkZGVuXCIpID09IGZhbHNlKSB7XHJcblx0XHR2YXIgdGV4dCA9ICQoJ3RleHRhcmVhI2JveEZsaWdodFBsYW4nKS52YWwoKTtcclxuXHRcdGlmICh0ZXh0ICE9IGZsaWdodHBsYW5UZXh0KSB7XHJcblx0XHRcdGZsaWdodHBsYW5UZXh0ID0gdGV4dDtcclxuXHRcdFx0dmFyIHBhcmFtcyA9IHt9O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGZsaWdodFBhdGggIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0ZmxpZ2h0UGF0aC5zZXRNYXAobnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2xlYXJNYXJrZXJzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoIGZsaWdodHBsYW5UZXh0Lmxlbmd0aCA+IDggKSB7XHJcblx0XHRcdFx0dmFyIGdyb3VwcyA9IGZsaWdodHBsYW5UZXh0LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xyXG5cdFx0XHRcdHZhciB3YXlwb2ludHMgPSBcIlwiO1xyXG5cdFx0XHRcdGlmICggZ3JvdXBzLmxlbmd0aCA+IDEgKSB7XHJcblx0XHRcdFx0ICAgIGZvcih2YXIgaSA9IDE7IGkgPCAoZ3JvdXBzLmxlbmd0aC0xKTsgaSsrKSB7XHJcblx0XHRcdFx0XHQgICB3YXlwb2ludHMgKz0gZ3JvdXBzW2ldO1xyXG5cdFx0XHRcdCAgICAgICBpZiAod2F5cG9pbnRzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHQgICAgICAgIFx0d2F5cG9pbnRzICs9IFwiK1wiO1xyXG5cdFx0XHRcdCAgICBcdH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwYXJhbXMgPSB7XHJcblx0XHRcdFx0ICAgIGRlcGFydHVyZSA6IGdyb3Vwc1swXSxcclxuXHRcdFx0XHQgICAgd2F5cG9pbnRzIDogd2F5cG9pbnRzLFxyXG5cdFx0XHRcdCAgICBkZXN0aW5hdGlvbiA6IGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKHRydWUpO1xyXG5cdFx0XHQkLmdldEpTT04oXCJmbGlnaHRwbGFuXCIscGFyYW1zXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdHNob3dFcnJvcihcIkVycm9yIGxvYWRpbmcgRmxpZ2h0IFBsYW4uIE5vIGNvbnRlbnQgd2FzIHJldHVybmVkLlwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRmbGlnaHRQbGFuID0gZGF0YTtcclxuXHRcdFx0XHRcdFx0bG9hZEZsaWdodFBsYW4oKTtcclxuXHRcdFx0XHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShmYWxzZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZXJyb3IoXHJcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHNob3dFcnJvcignUGxlYXNlIGNoZWNrIHRoZSBjb25uZWN0aW9uIHdpdGggaHR0cDovL3NlcnZlcjpwb3J0L2ZsaWdodHBsYW4sIGlzIG5vdCB3b3JraW5nLicpXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShsb2FkaW5nKSB7XHJcblx0aWYgKCBsb2FkaW5nICkge1xyXG5cdFx0JChcIiNmbGlnaHRwbGFuLWxvYWRpbmdcIikuc2hvdygpO1xyXG5cdFx0JChcIiNib3hGbGlnaHRQbGFuXCIpLmNzcygnY29sb3InLCAnbGlnaHRncmF5Jyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoXCIjZmxpZ2h0cGxhbi1sb2FkaW5nXCIpLmhpZGUoKTtcclxuXHRcdCQoXCIjYm94RmxpZ2h0UGxhblwiKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRmxpZ2h0UGxhbigpIHtcclxuXHQvLyBMb2FkaW5nIGZsaWdodFBsYW5Db29yZGluYXRlcyB2YXJpYWJsZVxyXG5cdHZhciBkZXBhcnR1cmVMYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4uZGVwYXJ0dXJlLmxhdGl0dWRlLCBmbGlnaHRQbGFuLmRlcGFydHVyZS5sb25naXR1ZGUpO1xyXG5cdHZhciBkZXN0aW5hdGlvbkxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5sYXRpdHVkZSwgZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5sb25naXR1ZGUpOyBcclxuXHR2YXIgYXJyQ29vcmQgPSBuZXcgQXJyYXkoKTtcclxuXHRhcnJDb29yZFswXSA9IGRlcGFydHVyZUxhdExuZztcclxuXHR2YXIgdG90YWxXYXlwb2ludHMgPSAwO1xyXG5cdHZhciB0b3RhbERpc3RhbmNlID0gMDtcclxuXHR3aGlsZSAodG90YWxXYXlwb2ludHMgPCBmbGlnaHRQbGFuLndheXBvaW50cy5sZW5ndGgpIHtcclxuXHRcdGFyckNvb3JkW3RvdGFsV2F5cG9pbnRzICsgMV0gPSBcclxuXHRcdFx0bmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcclxuXHRcdFx0XHRcdGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sYXRpdHVkZSxmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubG9uZ2l0dWRlXHJcblx0XHRcdCk7XHJcblx0XHQvLyBNYXJrIHRoZSBXYXlwb2ludFxyXG5cdFx0d2F5cG9pbnQgPSB7XHJcblx0XHRcdGlkIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmlkLFxyXG5cdFx0XHRsYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sYXRpdHVkZSxmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubG9uZ2l0dWRlKSxcclxuXHRcdFx0dHlwZSA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS50eXBlLFxyXG5cdFx0XHRkZXNjciA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5uYW1lLFxyXG5cdFx0XHRmcmVxIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmZyZXF1ZW5jeVxyXG5cdFx0fVxyXG5cdFx0bWFya1dheXBvaW50KHdheXBvaW50KTtcclxuXHJcblx0XHR0b3RhbFdheXBvaW50cysrO1xyXG5cdH1cclxuXHRhcnJDb29yZFt0b3RhbFdheXBvaW50cyArIDFdID0gZGVzdGluYXRpb25MYXRMbmc7XHJcblx0dmFyIGZsaWdodFBsYW5Db29yZGluYXRlcyA9IGFyckNvb3JkO1xyXG5cclxuXHQvLyBMb2FkaW5nIEZsaWdodCBQbGFuIFBvbHlsaW5lIC0gRHJhdyB0aGUgbGluZVxyXG5cdGZsaWdodFBhdGggPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUoe1xyXG5cdFx0cGF0aCA6IGZsaWdodFBsYW5Db29yZGluYXRlcyxcclxuXHRcdGdlb2Rlc2ljIDogZmFsc2UsXHJcblx0XHRzdHJva2VDb2xvciA6ICcjMDAwMEZGJyxcclxuXHRcdHN0cm9rZU9wYWNpdHkgOiAwLjUsXHJcblx0XHRzdHJva2VXZWlnaHQgOiA2XHJcblx0fSk7XHJcblx0ZmxpZ2h0UGF0aC5zZXRNYXAobWFwKTtcclxuXHJcblx0Ly8gTWFyayBmb3IgdGhlIEFpcnBvcnQgRGVwYXJ0dXJlXHJcblx0ZGVwYXJ0dXJlID0ge1xyXG5cdFx0aWQgOiBmbGlnaHRQbGFuLmRlcGFydHVyZS5pY2FvSWQsXHJcblx0XHRuYW1lIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUubmFtZSxcclxuXHRcdGxhdGxuZyA6IGRlcGFydHVyZUxhdExuZyxcclxuXHRcdHJ1bndheXMgOiBmbGlnaHRQbGFuLmRlcGFydHVyZS5hcnJheVJ1bndheXNcclxuXHR9XHJcblx0bWFya0FpcnBvcnQoZGVwYXJ0dXJlLCdkZXBhcnR1cmUnKTtcclxuXHJcblx0Ly8gTWFyayBmb3IgdGhlIEFpcnBvcnQgRGVzdGluYXRpb25cclxuXHRkZXN0aW5hdGlvbiA9IHtcclxuXHRcdGlkIDogZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5pY2FvSWQsXHJcblx0XHRuYW1lIDogZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5uYW1lLFxyXG5cdFx0bGF0bG5nIDogZGVzdGluYXRpb25MYXRMbmcsXHJcblx0XHRydW53YXlzIDogZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5hcnJheVJ1bndheXNcclxuXHR9XHJcblx0bWFya0FpcnBvcnQoZGVzdGluYXRpb24sJ2Rlc3RpbmF0aW9uJyk7XHJcblx0XHJcblx0Ly8gUGFuZWwgSW5mbyBGbGlnaHQgUGxhblxyXG5cdCQoXCIjZnBJbmZvLURlcGFydHVyZVwiKS50ZXh0KGRlcGFydHVyZS5pZCArICcgLSAnICsgZGVwYXJ0dXJlLm5hbWUgKyAnIEFpcnBvcnQnKTtcclxuXHQkKFwiI2ZwSW5mby1EZXN0aW5hdGlvblwiKS50ZXh0KGRlc3RpbmF0aW9uLmlkICsgJyAtICcgKyBkZXN0aW5hdGlvbi5uYW1lICsgJyBBaXJwb3J0Jyk7XHJcblx0XHJcblx0Ly8gTWFyayBMYWJlbHMgQmVhcmluZy9EaXN0YW5jZVxyXG5cdHZhciBpbmRleCA9IDA7XHJcblx0d2hpbGUgKGluZGV4IDwgZmxpZ2h0UGxhbi5pbmZvUm91dGUubGVuZ3RoKSB7XHJcblx0XHR0b3RhbERpc3RhbmNlICs9IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZU5NO1xyXG5cdFx0bGFiZWxSb3V0ZSA9IHtcclxuXHRcdFx0ZGlzdGFuY2VOTSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZU5NLFxyXG5cdFx0XHRkaXN0YW5jZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZSxcclxuXHRcdFx0YmVhcmluZyA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5iZWFyaW5nLFxyXG5cdFx0XHRiZWFyaW5nRGVncmVlIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmdEZWdyZWUsXHJcblx0XHRcdGxhdGxuZyA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXHJcblx0XHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5sYXRpdHVkZSxcclxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmxvbmdpdHVkZSksXHJcblx0XHRcdG5leHRMYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxyXG5cdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLm5leHRMYXRpdHVkZSxcclxuXHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0TG9uZ2l0dWRlKSxcclxuXHRcdFx0cm90YXRlIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmcsXHJcblx0XHRcdG5leHRQb2ludCA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0UG9pbnQsXHJcblx0XHRcdGN1cnJlbnRQb2ludCA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5jdXJyZW50UG9pbnQsXHJcblx0XHRcdGNvbXBhc3NIZWFkaW5nIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmNvbXBhc3NIZWFkaW5nXHJcblx0XHR9XHJcblx0XHRtYXJrTGFiZWxSb3V0ZShsYWJlbFJvdXRlKTtcclxuXHRcdGluZGV4Kys7XHJcblx0fVxyXG5cclxuXHQkKFwiI2ZwSW5mby1Sb3V0ZURpc3RhbmNlXCIpXHJcblx0XHQudGV4dChcclxuXHRcdFx0bnVtZXJhbCh0b3RhbERpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgJ25tJyArICcgLyAnICtcclxuXHRcdFx0bnVtZXJhbCgodG90YWxEaXN0YW5jZSAqIDEuODUyKSkuZm9ybWF0KCcwLDAnKSArICdrbSdcclxuXHQgICAgICAgICk7XHJcblx0ICAgICAgICBcclxuXHR2YXIgcGFuRmxpZ2h0UGxhbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoZGVwYXJ0dXJlTGF0TG5nLCBkZXN0aW5hdGlvbkxhdExuZyk7XHJcblx0bWFwLmZpdEJvdW5kcyhwYW5GbGlnaHRQbGFuKTtcclxuXHQvL21hcC5wYW5Ub0JvdW5kcyhwYW5GbGlnaHRQbGFuKTtcclxuXHQvL21hcC5zZXRab29tKDEwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZU1hcmsobSkge1xyXG5cdG1hcmtlcnMucHVzaChtKTtcclxufVxyXG5mdW5jdGlvbiBjbGVhck1hcmtlcnMoKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBtYXJrZXJzW2ldLnNldE1hcChudWxsKTtcclxuICB9XHJcbiAgcm91dGVMYWJlbHNPZmZTZXQgPSBbXTtcclxuICBtYXJrZXJzTGFiZWxSb3V0ZSA9IFtdO1xyXG4gIG1hcmtlcnNXYXlwb2ludCAgID0gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtMYWJlbFJvdXRlKGxhYmVsUm91dGUpIHtcclxuXHQvL3ZhciBkaXN0TGFiZWwgPSBsYWJlbFJvdXRlLmRpc3RhbmNlTk0gKiAxLjg1MjsgLy8gY29udmVydCBubSB0byBtZXRlcnNcclxuXHQvL3ZhciBoZGdMYWJlbCA9IGxhYmVsUm91dGUuYmVhcmluZ0RlZ3JlZSAtIDIyO1xyXG5cdC8vdmFyIGRpc3RMYWJlbCA9IDI0MDAwOyBcclxuXHRyb3V0ZUxhYmVsc09mZlNldC5wdXNoKFxyXG5cdFx0e1xyXG5cdFx0XHRsYXRsbmcgOiBsYWJlbFJvdXRlLmxhdGxuZyxcclxuXHRcdFx0bmV4dExhdExuZyA6IGxhYmVsUm91dGUubmV4dExhdGxuZ1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0dmFyIGRpc3RMYWJlbFJvdXRlID0gMTIwMDA7XHJcblx0dmFyIGhkZ0xhYmVsID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKGxhYmVsUm91dGUubGF0bG5nLCBsYWJlbFJvdXRlLm5leHRMYXRsbmcpOyBcclxuXHR2YXIgb2Zmc2V0ID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQobGFiZWxSb3V0ZS5sYXRsbmcsIGRpc3RMYWJlbFJvdXRlLCBoZGdMYWJlbCwgNjM3MTAwMCk7XHJcblx0dmFyIGFuZ2xlUm90YXRlID0gaGRnTGFiZWwgLSA5MDtcclxuXHRpZiAoIGFuZ2xlUm90YXRlID4gLTI3MCAmJiBhbmdsZVJvdGF0ZSA8IC05MCApIHtcclxuXHRcdCBhbmdsZVJvdGF0ZSA9IGFuZ2xlUm90YXRlIC0gMTgwO1xyXG5cdH1cclxuXHR2YXIgbGFiZWwgPSBsYWJlbFJvdXRlLmJlYXJpbmcgKyBcIiZkZWcgXCIgKyBudW1lcmFsKGxhYmVsUm91dGUuZGlzdGFuY2UpLmZvcm1hdCgnMCwwJykgKyBcIm5tXCI7XHJcblx0dmFyIHggPSAyMztcclxuXHR2YXIgeSA9IDA7XHJcblx0dmFyIGFuY2hvciA9IG5ldyBnb29nbGUubWFwcy5Qb2ludCh4LCB5KTtcclxuXHR2YXIgbWFya2VyTGFiZWxSb3V0ZSA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xyXG5cdFx0cG9zaXRpb24gOiBvZmZzZXQsXHJcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuXHRcdGxhYmVsQ29udGVudCA6IGxhYmVsLFxyXG5cdFx0bGFiZWxBbmNob3IgOiBhbmNob3IsXHJcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNJbmZvUm91dGVcIixcclxuXHRcdGNsaWNrYWJsZSA6IHRydWUsXHJcblx0XHRpY29uIDogaWNvbkxhYmVsUm91dGUsXHJcblx0XHRyb3RhdGUgOiBhbmdsZVJvdGF0ZVxyXG5cdH0pO1xyXG5cdFxyXG5cdHZhciBpbmZvQ29udGVudCA9IFwiPHRhYmxlIHdpZHRoPScxMDAlJyBib3JkZXI9MCBjbGFzcz0ncnVud2F5VGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPlwiO1xyXG5cdFxyXG5cdGluZm9Db250ZW50ICs9IFwiPHRhYmxlICB3aWR0aD0nMTAwJScgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgdmFsaWduPSdtaWRkbGUnIHdpZHRoPSczMHB4Jz48aW1nIHNyYz0nYXJyb3cucG5nJz48L3RkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRkIHZhbGlnbj0nbWlkZGxlJyB3aWR0aD0nMTUwcHgnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiJm5ic3A7Jm5ic3A7Jm5ic3A7Um91dGU6PGJyPjxiPiZuYnNwOyZuYnNwO1wiICsgbGFiZWxSb3V0ZS5jdXJyZW50UG9pbnQgKyBcclxuXHRcdFx0XHQgICBcIjwvYj4mbmJzcDt0byZuYnNwOzxiPlwiICsgbGFiZWxSb3V0ZS5uZXh0UG9pbnQgKyBcIjwvYj48L3RkPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPjwvdGFibGU+XCI7XHJcblx0XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPjxocj48L3RkPjwvdHI+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPSc2MHB4Jz5cIjtcclxuXHRpbmZvQ29udGVudCArPSAgIFwiRGlzdGFuY2U6PC90ZD48dGQ+IDxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgXHJcblx0XHRcdFx0XHRcdFx0XHRudW1lcmFsKGxhYmVsUm91dGUuZGlzdGFuY2UpLmZvcm1hdCgnMCwwJykgKyBcIm5tPC9zcGFuPiZuYnNwOyZuYnNwOy8mbmJzcDsmbmJzcDtcIiArIFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcmFsKE1hdGguY2VpbChsYWJlbFJvdXRlLmRpc3RhbmNlTk0gLyAwLjUzOTk2KSkuZm9ybWF0KCcwLDAnKSArXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrbTwvc3Bhbj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gICBcIkhlYWRpbmc6PC90ZD48dGQ+IDxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgbGFiZWxSb3V0ZS5iZWFyaW5nICsgXCImZGVnPC9zcGFuPiZuYnNwOyZuYnNwOy8mbmJzcDsmbmJzcDtcIiArIFxyXG4gICAgXHRcdFx0XHQgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIGxhYmVsUm91dGUuY29tcGFzc0hlYWRpbmcgKyBcIjwvc3Bhbj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0dmFyIGluZm9Cb3ggPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiAnPGRpdiBpZD1cIml3X2NvbnRlbnRcIj4nICsgaW5mb0NvbnRlbnQgKyAnPC9kaXY+JyxcclxuXHRcdHBpeGVsT2Zmc2V0OiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgtMzAsLTI1LFwicHhcIixcInB4XCIpXHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyTGFiZWxSb3V0ZSwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGluZm9Cb3gub3BlbihtYXAsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckxhYmVsUm91dGUsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGNoYW5nZUNvbG9ySW5mb0JveChlbCxcInJnYigyNTUsMjU1LDI1NSlcIik7XHJcblx0XHRcdGluZm9Cb3guY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvQm94LCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcImhpZGRlblwiKTtcclxuXHRcdGNoYW5nZUNvbG9ySW5mb0JveChlbCxcInJnYmEoMTI3LDI1NSwyMTIsMC44MilcIik7XHJcblx0fSk7XHJcblx0XHJcblx0bWFya2VyTGFiZWxSb3V0ZS5zZXRNYXAobWFwKTtcclxuXHRzYXZlTWFyayhtYXJrZXJMYWJlbFJvdXRlKTtcclxuXHRtYXJrZXJzTGFiZWxSb3V0ZS5wdXNoKG1hcmtlckxhYmVsUm91dGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrQWlycG9ydChhaXJwb3J0LHR5cGUpIHtcclxuXHR2YXIgbWFya2VyQWlycG9ydCA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xyXG5cdFx0cG9zaXRpb24gOiBhaXJwb3J0LmxhdGxuZyxcclxuXHRcdGFuaW1hdGlvbiA6IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG5cdFx0aWNvbiA6IGljb25BaXJwb3J0LFxyXG5cdFx0bGFiZWxDb250ZW50IDogYWlycG9ydC5pZCxcclxuXHRcdGxhYmVsQW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDIwLCA3MCksXHJcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNBaXJwb3J0XCJcclxuXHR9KTtcclxuXHJcblx0dmFyIGltYWdlID0gXCI8aW1nIHNyYz0ndGFrZW9mZi5wbmcnLz5cIjtcclxuXHRpZiAoIHR5cGUgPT0gJ2Rlc3RpbmF0aW9uJyApIHtcclxuXHRcdGltYWdlID0gXCI8aW1nIHNyYz0nbGFuZGluZy5wbmcnLz5cIjtcclxuXHR9XHJcblx0dmFyIGluZm9Db250ZW50ID0gXCJcIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSBib3JkZXI9MCB3aWR0aD0nMTAwJScgY2xhc3M9J3J1bndheVRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xyXG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nNjBweCcgYWxpZ249J2xlZnQnPlwiICsgaW1hZ2UgKyBcIjwvdGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGQ+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8Yj5cIiArIGFpcnBvcnQuaWQgKyBcIjwvYj4gLSBcIiArIGFpcnBvcnQubmFtZTtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nNCc+PGhyPjwvdGQ+PC90cj5cIjtcclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgd2lkdGg9JzEwMCUnIGJvcmRlcj0wIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFpcnBvcnQucnVud2F5cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+XCJcclxuXHRcdFx0XHQrIFwiIDx0ZD5SdW53YXkgPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXHJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0ubnVtYmVyXHJcblx0XHRcdFx0KyBcIjwvc3Bhbj48L3RkPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7SGVhZGluZzogPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXHJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0uaGVhZGluZ1xyXG5cdFx0XHRcdCsgXCI8Zm9udCBzaXplPScycHgnPiZkZWc7PC9mb250Pjwvc3Bhbj48L3RkPlwiXHJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RnJlcXVlbmN5OiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcclxuXHRcdFx0XHQrIGFpcnBvcnQucnVud2F5c1tpXS5mcmVxdWVuY3kgKyBcIjwvc3Bhbj48YnIvPjwvdGQ+XCJcclxuXHRcdFx0XHQrIFwiIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtFbGV2YXRpb246IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxyXG5cdFx0XHRcdCsgbnVtZXJhbChhaXJwb3J0LnJ1bndheXNbaV0uZWxldmF0aW9uKS5mb3JtYXQoJzAsMCcpICsgXCIgZnQ8L3NwYW4+PGJyLz48L3RkPlwiICsgXCI8L3RyPlwiO1xyXG5cdH1cclxuXHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XHJcblxyXG5cdHZhciBpbmZvTTEgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiAnPGRpdiBpZD1cIml3X2NvbnRlbnRcIj4nICsgaW5mb0NvbnRlbnQgKyAnPC9kaXY+J1xyXG5cdH0pO1xyXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckFpcnBvcnQsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGluZm9NMS5vcGVuKG1hcCwgdGhpcyk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyQWlycG9ydCwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XHJcblx0XHR9XHJcblx0XHRpbmZvTTEuY2xvc2UoKTtcclxuXHR9KTtcclxuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvTTEsICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcInZpc2libGVcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0bWFya2VyQWlycG9ydC5zZXRNYXAobWFwKTtcclxuXHRzYXZlTWFyayhtYXJrZXJBaXJwb3J0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya1dheXBvaW50KHdheXBvaW50KSB7XHJcblx0dmFyIGljb25XUFQgPSBpY29uV2F5cG9pbnQ7XHJcblx0dmFyIGluZm9Db250ZW50ID0gXCJcIjtcclxuXHRpZiAod2F5cG9pbnQudHlwZSA9PSAxKSB7XHJcblx0XHRpY29uV1BUID0gaWNvblZPUjtcclxuXHR9IGVsc2UgaWYgKHdheXBvaW50LnR5cGUgPT0gMikge1xyXG5cdFx0aWNvbldQVCA9IGljb25OREI7XHJcblx0fVxyXG5cclxuXHR2YXIgbWFya2VyV2F5cG9pbnQgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcclxuXHRcdHBvc2l0aW9uIDogd2F5cG9pbnQubGF0bG5nLFxyXG5cdFx0YW5pbWF0aW9uIDogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcblx0XHRpY29uIDogaWNvbldQVCxcclxuXHRcdGxhYmVsQ29udGVudCA6IHdheXBvaW50LmlkLFxyXG5cdFx0bGFiZWxBbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjgsIC02KSxcclxuXHRcdGxhYmVsQ2xhc3MgOiBcImxhYmVsc1dheXBvaW50XCJcclxuXHR9KTtcclxuXHRpZiAod2F5cG9pbnQudHlwZSA9PSAnVk9SJyB8fCB3YXlwb2ludC50eXBlID09ICdOREInKSB7XHJcblx0XHQvLyBWT1IgYW5kIE5EQlxyXG5cdFx0aW5mb0NvbnRlbnQgPSBcIjx0YWJsZSBib3JkZXI9MCBjbGFzcz0ndm9yVGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzMzMHB4Jz5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHZhbGlnbj0nbWlkZGxlJyBjb2xzcGFuPTI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIiAgPHRhYmxlIGJvcmRlcj0wIGNsYXNzPSd2b3JUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz48dHI+PHRkPlwiO1xyXG5cdFx0aWYgKHdheXBvaW50LnR5cGUgPT0gJ1ZPUicpIHtcclxuXHRcdFx0Ly8gVk9SXHJcblx0XHRcdGluZm9Db250ZW50ICs9IFwiIDxpbWcgc3JjPSdWT1IucG5nJy8+XCI7XHJcblx0XHR9IGVsc2UgaWYgKHdheXBvaW50LnR5cGUgPT0gJ05EQicpIHtcclxuXHRcdFx0Ly8gTkJEXHJcblx0XHRcdGluZm9Db250ZW50ICs9IFwiIDxpbWcgc3JjPSdOREIucG5nJy8+XCI7XHJcblx0XHR9XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjwvdGQ+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0ZD4mbmJzcDsmbmJzcDsmbmJzcDs8Yj5cIiArIHdheXBvaW50LmlkICsgXCI8L2I+IC0gXCJcclxuXHRcdFx0XHQrIHdheXBvaW50LmRlc2NyICsgXCI8L3RkPlwiICsgXCI8L3RyPjwvdGFibGU+XCJcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMjAlJz4gRnJlcXVlbmN5OiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHdheXBvaW50LmZyZXEgKyBcIjwvdGQ+XCIgKyBcIjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzElJz4gTGF0aXR1ZGU6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgcHJlY2lzaW9uRGVjaW1hbE51bWJlcih3YXlwb2ludC5sYXRsbmcubGF0KCkpICsgXCI8L3RkPjwvdHI+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+IExvbmdpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sbmcoKSkgKyBcIjxici8+PC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBGSVhcclxuXHRcdGluZm9Db250ZW50ID0gXCI8dGFibGUgYm9yZGVyPTAgY2xhc3M9J3ZvclRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMjBweCc+XCI7XHJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0ZCBjb2xzcGFuPTI+PGI+XCIgKyB3YXlwb2ludC5pZCArIFwiPC9iPjwvdGQ+PC90cj5cIlxyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPjxoci8+PC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPScxJSc+IExhdGl0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxhdCgpKSArIFwiPC90ZD48L3RyPlwiO1xyXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPiBMb25naXR1ZGU6Jm5ic3A7PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3ZvckluZm8nPlwiICsgcHJlY2lzaW9uRGVjaW1hbE51bWJlcih3YXlwb2ludC5sYXRsbmcubG5nKCkpICsgXCI8YnIvPjwvdGQ+PC90cj5cIjtcclxuXHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcclxuXHR9XHJcblx0dmFyIGluZm9NMSA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6ICc8ZGl2IGlkPVwiaXdfY29udGVudFwiPicgKyBpbmZvQ29udGVudCArICc8L2Rpdj4nXHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyV2F5cG9pbnQsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGluZm9NMS5vcGVuKG1hcCwgdGhpcyk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyV2F5cG9pbnQsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwiaGlkZGVuXCIpO1xyXG5cdFx0fVxyXG5cdFx0aW5mb00xLmNsb3NlKCk7XHJcblx0fSk7XHJcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb00xLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJ2aXNpYmxlXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdG1hcmtlcldheXBvaW50LnNldE1hcChtYXApO1xyXG5cdHNhdmVNYXJrKG1hcmtlcldheXBvaW50KTtcclxuXHRtYXJrZXJzV2F5cG9pbnQucHVzaChtYXJrZXJXYXlwb2ludCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9ySW5mb0JveChlbCxjb2xvcikge1xyXG5cdGRpdkNvbG9yID0gZWwuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdGRpdkNvbG9yLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gdmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxzdGF0dXNBcnJvdyxzdGF0dXNDbG9zZUJ1dHRvbikge1xyXG5cdGRpdkVsID0gZWwuZmlyc3RDaGlsZDtcclxuICAgIGNoaWxkMSA9IGRpdkVsLmZpcnN0Q2hpbGQ7XHJcbiAgICBjaGlsZDMgPSBjaGlsZDEubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGlmICggY2hpbGQzICE9IHVuZGVmaW5lZCApIHtcclxuICAgIFx0Y2hpbGQxLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNBcnJvdztcclxuICAgIFx0Y2hpbGQzLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNBcnJvdztcclxuXHQgICAgLy8gUmVtb3ZlIENsb3NlIEJ1dHRvblxyXG5cdCAgICBkaXZDbG9zZUJ1dHRvbiA9IGRpdkVsLnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdCAgICAvL2RpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXM7XHJcblx0ICAgIGlmICggc3RhdHVzQ2xvc2VCdXR0b24gIT0gdW5kZWZpbmVkICkge1xyXG5cdCAgICBcdGRpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNDbG9zZUJ1dHRvbjtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgXHRkaXZDbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHQgICAgfVxyXG5cdCAgICBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJlY2lzaW9uRGVjaW1hbE51bWJlcih2bHIpIHtcclxuXHRyZXR1cm4gcGFyc2VGbG9hdChNYXRoLnJvdW5kKHZsciAqIDEwMDAwMCkgLyAxMDAwMDApLnRvRml4ZWQoNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG5cdCQuZ2V0SlNPTihcclxuXHRcdFx0XCJkYXRhXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHQvKnNob3dFcnJvcihcIkxpc3RlbmluZyBhdCBYLVBsYW5lJ3MgVURQIHRyYWZmaWMgcG9ydCA0OTAwMy4gXCJcclxuXHRcdFx0XHRcdFx0XHQrIFwiUGxlYXNlIGNoZWNrIHRoZSBzZXR0aW5ncyBhdCB0aGUgWC1QbGFuZSdzIE5ldCBDb25uZWN0aW9ucyBtZW51LlwiKTsqL1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBkZWxldGUgYWxsIGFic2VudCBwbGFuZXNcclxuXHRcdFx0XHRmb3IgKCB2YXIgaXAgaW4gcGxhbmVMaXN0KSB7XHJcblx0XHRcdFx0XHRpZiAoIShpcCBpbiBkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRkZWxldGVQbGFuZShpcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGZvciBjdXJyZW50IGFuZCBuZXcgcGxhbmVzXHJcblx0XHRcdFx0Zm9yICggdmFyIGlwIGluIGRhdGEpIHtcclxuXHRcdFx0XHRcdC8vIGlmIG5ldyBwbGFuZVxyXG5cdFx0XHRcdFx0aWYgKCEoaXAgaW4gcGxhbmVMaXN0KSkge1xyXG5cdFx0XHRcdFx0XHRjb2xvciA9IG5leHRDb2xvcigpO1xyXG5cdFx0XHRcdFx0XHRtYXJrZXJPcHRpb25zLmljb24uZmlsbENvbG9yID0gY29sb3I7XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0gPSB7XHJcblx0XHRcdFx0XHRcdFx0bmFtZSA6IGlwLnJlcGxhY2UoLy0vZywgJy4nKSxcclxuXHRcdFx0XHRcdFx0XHRsb24gOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGxhdCA6IDAsXHJcblx0XHRcdFx0XHRcdFx0YWx0IDogZGF0YVtpcF0uYWx0LFxyXG5cdFx0XHRcdFx0XHRcdG1hcmtlciA6IG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyT3B0aW9ucyksXHJcblx0XHRcdFx0XHRcdFx0dHJhY2UgOiBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUocG9seU9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0XHRcdGluZm8gOiBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdygpLFxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yIDogY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0dlNwZWVkIDogZGF0YVtpcF0udlNwZWVkLFxyXG5cdFx0XHRcdFx0XHRcdGFpclNwZWVkIDogZGF0YVtpcF0uYWlyU3BlZWQsXHJcblx0XHRcdFx0XHRcdFx0Z1NwZWVkIDogZGF0YVtpcF0uZ1NwZWVkLFxyXG5cdFx0XHRcdFx0XHRcdGhlYWRpbmcgOiBkYXRhW2lwXS5iZWFyaW5nLFxyXG5cdFx0XHRcdFx0XHRcdGRlc3QgOiBkYXRhW2lwXS5kZXN0LFxyXG5cdFx0XHRcdFx0XHRcdGdwc0Rpc3RObSA6IGRhdGFbaXBdLmdwc0Rpc3RObSxcclxuXHRcdFx0XHRcdFx0XHRncHNEaXN0VGltZSA6IGRhdGFbaXBdLmdwc0Rpc3RUaW1lLFxyXG5cdFx0XHRcdFx0XHRcdG5hdjEgOiBkYXRhW2lwXS5uYXYxRnJlcSxcclxuXHRcdFx0XHRcdFx0XHRuYXYyIDogZGF0YVtpcF0ubmF2MkZyZXEsXHJcblx0XHRcdFx0XHRcdFx0YmFyb21ldGVyIDogZGF0YVtpcF0uYmFyb21ldGVyLFxyXG5cdFx0XHRcdFx0XHRcdGZ1ZWxRdWFudGl0eSA6IGRhdGFbaXBdLmZ1ZWxRdWFudGl0eSxcclxuXHRcdFx0XHRcdFx0XHRmdWVsUXVhbnRpdHkgOiBkYXRhW2lwXS5mdWVsUXVhbnRpdHksXHJcblx0XHRcdFx0XHRcdFx0b3V0c2lkZVRlbXAgOiBkYXRhW2lwXS5vdXRzaWRlVGVtcCxcclxuXHRcdFx0XHRcdFx0XHRjb20xIDogZGF0YVtpcF0uY29tMUZyZXEsXHJcblx0XHRcdFx0XHRcdFx0Y29tMiA6IGRhdGFbaXBdLmNvbTJGcmVxLFxyXG5cdFx0XHRcdFx0XHRcdGNvbXBhc3NIZWFkaW5nIDogZGF0YVtpcF0uY29tcGFzc0hlYWRpbmdcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0TWFwKG1hcCk7XHJcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLmlwID0gaXA7IFxyXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmluZm9XaW5kb3dMaXN0ZW5lciA9IGdvb2dsZS5tYXBzLmV2ZW50XHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5tYXJrZXIsJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lTGlzdFt0aGlzLmlwXS5pbmZvLm9wZW4obWFwLHBsYW5lTGlzdFt0aGlzLmlwXS5tYXJrZXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHBsYW5lTGlzdFtpcF0uaW5mbywgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsSW5mb0JveFBsYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWxJbmZvQm94UGxhbmUsXCJ2aXNpYmxlXCIsXCJ2aXNpYmxlXCIpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5pbmZvLCdjbG9zZWNsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWxJbmZvQm94UGxhbmUsXCJoaWRkZW5cIik7XHJcblx0XHRcdFx0XHRcdFx0ZWxJbmZvQm94UGxhbmUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS50cmFjZS5zZXRNYXAobWFwKTtcclxuXHRcdFx0XHRcdFx0cGxhbmVUb0ZvbGxvdyA9IGlwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bmV3TGF0ID0gZGF0YVtpcF0ubGF0O1xyXG5cdFx0XHRcdFx0bmV3TG9uID0gZGF0YVtpcF0ubG9uO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5hbHQgICAgICAgICAgICA9IGRhdGFbaXBdLmFsdDtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udlNwZWVkICAgICAgICAgPSBkYXRhW2lwXS52U3BlZWQ7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmFpclNwZWVkICAgICAgID0gZGF0YVtpcF0uYWlyU3BlZWQ7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmhlYWRpbmcgICAgICAgID0gZGF0YVtpcF0uYmVhcmluZztcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZGVzdCAgICAgICAgICAgPSBkYXRhW2lwXS5kZXN0O1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5ncHNEaXN0Tm0gICAgICA9IGRhdGFbaXBdLmdwc0Rpc3RObTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZ3BzRGlzdFRpbWUgICAgPSBkYXRhW2lwXS5ncHNEaXN0VGltZTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubmF2MSAgICAgICAgICAgPSBkYXRhW2lwXS5uYXYxRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubmF2MiAgICAgICAgICAgPSBkYXRhW2lwXS5uYXYyRnJlcTtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uYmFyb21ldGVyICAgICAgPSBkYXRhW2lwXS5iYXJvbWV0ZXI7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmZ1ZWxRdWFudGl0eSAgID0gZGF0YVtpcF0uZnVlbFF1YW50aXR5O1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5vdXRzaWRlVGVtcCAgICA9IGRhdGFbaXBdLm91dHNpZGVUZW1wO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb20xICAgICAgICAgICA9IGRhdGFbaXBdLmNvbTFGcmVxO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb20yICAgICAgICAgICA9IGRhdGFbaXBdLmNvbTJGcmVxO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb21wYXNzSGVhZGluZyA9IGRhdGFbaXBdLmNvbXBhc3NIZWFkaW5nO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgbmV3UG9pbnQgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5ld0xhdCxuZXdMb24pO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0UG9zaXRpb24obmV3UG9pbnQpO1xyXG5cdFx0XHRcdFx0dmFyIGljb24gPSBwbGFuZUxpc3RbaXBdLm1hcmtlci5nZXRJY29uKCk7XHJcblx0XHRcdFx0XHRpY29uLnJvdGF0aW9uID0gcGxhbmVMaXN0W2lwXS5oZWFkaW5nO1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0SWNvbihpY29uKTtcclxuXHRcdFx0XHRcdC8vIGFkZCBuZXcgcG9pbnQgdG8gbGluZVxyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS50cmFjZS5nZXRQYXRoKCkucHVzaChuZXdQb2ludCk7XHJcblx0XHRcdFx0XHR2YXIgYWlycGxhbmVMYWJlbCA9ICBwbGFuZUxpc3RbaXBdLm5hbWU7XHJcblx0XHRcdFx0XHRpZiAoIGFpcnBsYW5lTGFiZWwgPT0gJzEyNy4wLjAuMScgKSB7XHJcblx0XHRcdFx0XHRcdCBhaXJwbGFuZUxhYmVsID0gJ1lPVSc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL3ZhciBoZGdBaXJwbGFuZSA9IE51bWJlcihNYXRoLmZsb29yKCgocGxhbmVMaXN0W2lwXS5oZWFkaW5nICsgMzYwKSAlIDM2MCkpKSArIDIyO1xyXG5cdFx0XHRcdFx0dmFyIGhkZ0FpcnBsYW5lID0gcGxhbmVMaXN0W2lwXS5jb21wYXNzSGVhZGluZztcclxuXHRcdFx0XHRcdHZhciBpbmZvQ29udGVudCA9IFwiPGRpdiBpZD0naXdfY29udGVudCc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjxkaXYgc3R5bGU9J21hcmdpbjogMDsgd2lkdGg6IDUwMHB4Oyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSBib3JkZXI9MCBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMDAlJz5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyPjx0ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICA8dGFibGUgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTAwJSc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDx0cj48dGQgc3R5bGU9J2hlaWdodDozMHB4Oyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDxiPlwiICsgYWlycGxhbmVMYWJlbCArIFwiPC9iPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8L3RkPjwvdHI+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDwvdGQ+PC90cj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICA8L3RhYmxlPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90ZD48L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgYmFja0NvbG9yID0gJ2xpZ2h0Z3JheSc7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0cj48dGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGFibGUgc3R5bGU9J2JvcmRlcjpzb2xpZCAxcHggZGFya2dyYXk7Zm9udC13ZWlnaHQ6Ym9sZDsnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMicgd2lkdGg9JzEwMCUnPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyIHN0eWxlPSdiYWNrZ3JvdW5kOlwiICsgYmFja0NvbG9yICsgXCI7Jz5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZCB3aWR0aD0nODBweCc+RGVzdGluYXRpb246PC90ZD48dGQgY29sc3Bhbj0nNSc+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5kZXN0ICsgXCI8L3NwYW4+PC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHI+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+RGlzdGFuY2U6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5ncHNEaXN0Tm0gKyBcIjwvc3Bhbj4mbmJzcDtubTwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHdpZHRoPSc2MHB4Jz5FVEU6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5ncHNEaXN0VGltZSArIFwiPC9zcGFuPiZuYnNwOzwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+PHRkPiBBbHRpdHVkZTogPC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gbnVtZXJhbChwbGFuZUxpc3RbaXBdLmFsdC50b0ZpeGVkKCkpLmZvcm1hdCgnMCwwJykgKyBcIjwvc3Bhbj4mbmJzcDtmdCBNU0wmbmJzcDsmbmJzcDs8L3RkPlwiXHJcblx0XHRcdFx0XHQgICAgICAgICAgICArIFwiPHRkPkhlYWRpbmc6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgaGRnQWlycGxhbmUgKyBcIiZkZWc7PC9zcGFuPjwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIEFpclNwZWVkOiA8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBudW1lcmFsKHBsYW5lTGlzdFtpcF0uYWlyU3BlZWQpLmZvcm1hdCgnMCwwJykgKyBcIjwvc3Bhbj4mbmJzcDtrdHM8L3RkPlwiOyBcclxuXHRcdFx0XHRcdGlmICggcGxhbmVMaXN0W2lwXS52U3BlZWQgPiAtMSApIHtcclxuXHRcdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPlZTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5WUzo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mb1JlZCc+XCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBudW1lcmFsKHBsYW5lTGlzdFtpcF0udlNwZWVkKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7ZnBtJm5ic3A7Jm5ic3A7PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+TmF2MTo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLm5hdjEgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7IFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkNvbTE6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5jb20xICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj48dHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5OYXYyOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0ubmF2MiArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5Db20yOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uY29tMiArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+QmFyb21ldGVyOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uYmFyb21ldGVyICsgXCI8L3NwYW4+PC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5GdWVsOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZnVlbFF1YW50aXR5ICsgXCI8L3NwYW4+PC90ZD5cIjsgXHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPjx0cj5cIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk9BVDo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLm91dHNpZGVUZW1wICsgXCI8L3NwYW4+JmRlZzsmbmJzcDwvdGQ+XCI7XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+R1M6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5nU3BlZWQudG9GaXhlZCgpICsgXCI8L3NwYW4+Jm5ic3A7a3RzPC90ZD5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RhYmxlPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90ZD48L3RyPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L2Rpdj5cIjtcclxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC9kaXY+XCI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIHNldCBpbmZvIHdpbmRvdyBjb250ZW50XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmluZm8uc2V0Q29udGVudChpbmZvQ29udGVudCk7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmxvbiA9IG5ld0xvbjtcclxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubGF0ID0gbmV3TGF0O1xyXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5oZGcgPSBwbGFuZUxpc3RbaXBdLmhlYWRpbmc7XHJcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnNwZCA9IHBsYW5lTGlzdFtpcF0uZ1NwZWVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBtb3ZlIG1hcCBpZiBjaGVja2JveCBjaGVja2VkXHJcblx0XHRcdFx0aWYgKCBjaGFzZUFpcnBsYW5lICkge1xyXG5cdFx0XHRcdFx0aWYgKCBwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10gIT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0XHRtYXAucGFuVG8obmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10ubGF0LHBsYW5lTGlzdFtwbGFuZVRvRm9sbG93XS5sb24pKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0LmVycm9yKFxyXG5cdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzaG93RXJyb3IoJ09wcyEgTWF5ZGF5ISBNYXlkYXkhIEphdmEgU2VydmVyIGlzIGRvd24hISEnKVxyXG5cdFx0XHR9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlYXJpbmcobG9uMSwgbGF0MSwgbG9uMiwgbGF0Mikge1xyXG5cdGxvbjEgPSBsb24xICogTWF0aC5QSSAvIDE4MDtcclxuXHRsb24yID0gbG9uMiAqIE1hdGguUEkgLyAxODA7XHJcblx0bGF0MSA9IGxhdDEgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdGxhdDIgPSBsYXQyICogTWF0aC5QSSAvIDE4MDtcclxuXHR2YXIgeSA9IE1hdGguc2luKGxvbjIgLSBsb24xKSAqIE1hdGguY29zKGxhdDIpO1xyXG5cdHZhciB4ID0gTWF0aC5jb3MobGF0MSkgKiBNYXRoLnNpbihsYXQyKSAtIE1hdGguc2luKGxhdDEpICogTWF0aC5jb3MobGF0MilcclxuXHRcdFx0KiBNYXRoLmNvcyhsb24yIC0gbG9uMSk7XHJcblx0dmFyIGJybmcgPSBNYXRoLmF0YW4yKHksIHgpO1xyXG5cdHJldHVybiBicm5nIC8gTWF0aC5QSSAqIDE4MDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzdGFuY2UobG9uMSwgbGF0MSwgbG9uMiwgbGF0Mikge1xyXG5cdFIgPSA2MzcyLjg7XHJcblx0bGF0MSA9IGxhdDEgKiBNYXRoLlBJIC8gMTgwO1xyXG5cdGxhdDIgPSBsYXQyICogTWF0aC5QSSAvIDE4MDtcclxuXHR2YXIgZGVsdGFsYXQgPSBsYXQyIC0gbGF0MTtcclxuXHR2YXIgZGVsdGFsb24gPSAobG9uMiAtIGxvbjEpICogTWF0aC5QSSAvIDE4MDtcclxuXHR2YXIgYSA9IE1hdGguc2luKGRlbHRhbGF0IC8gMikgKiBNYXRoLnNpbihkZWx0YWxhdCAvIDIpICsgTWF0aC5jb3MobGF0MSlcclxuXHRcdFx0KiBNYXRoLmNvcyhsYXQyKSAqIE1hdGguc2luKGRlbHRhbG9uIC8gMikgKiBNYXRoLnNpbihkZWx0YWxvbiAvIDIpO1xyXG5cdHZhciBjID0gMiAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xyXG5cdHJldHVybiBSICogYztcclxufVxyXG5cclxuLy8gY2xlYW4gcGxhbmUgZGVsZXRpb25cclxuZnVuY3Rpb24gZGVsZXRlUGxhbmUoaXApIHtcclxuXHRnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm9XaW5kb3dMaXN0ZW5lcik7XHJcblx0cGxhbmVMaXN0W2lwXS50cmFjZS5zZXRNYXAobnVsbCk7XHJcblx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0TWFwKG51bGwpO1xyXG5cdGRlbGV0ZSBwbGFuZUxpc3RbaXBdO1xyXG59XHJcblxyXG4vLyBhbGVydCgpIGVxdWl2YWxlbnRcclxuZnVuY3Rpb24gc2hvd0Vycm9yKHRleHQpIHtcclxuXHQkKCcjZXJyb3JCb3gnKS50ZXh0KHRleHQpO1xyXG5cdCQoJyNlcnJvckJveCcpLmZhZGVJbigpLmRlbGF5KDM1MDApLmZhZGVPdXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dENvbG9yKCkge1xyXG5cdGlmIChjb2xvcnNbY29sb3JfaW5kZXhdICE9IG51bGwpIHtcclxuXHRcdHZhciBjb2xvciA9IGNvbG9yc1tjb2xvcl9pbmRleF07XHJcblx0XHRjb2xvcl9pbmRleCsrO1xyXG5cdFx0cmV0dXJuIGNvbG9yO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIk5vIG1vcmUgY29sb3JzXCIpO1xyXG5cdFx0cmV0dXJuIFwiI2FhYWFhYVwiO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2hhc2VBaXJwbGFuZSgpIHtcclxuXHRpZiAoIGNoYXNlQWlycGxhbmUgKSB7XHJcblx0XHQkKCcjZm9sbG93VGhlUGxhbmUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNmb2xsb3dUaGVQbGFuZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcclxuXHR9XHJcblx0Y2hhc2VBaXJwbGFuZSA9ICFjaGFzZUFpcnBsYW5lO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVGbGlnaHRQYW5lbCgpIHtcclxuXHRpZiAoJCgnI3BhbmVsLWZwJykuaXMoXCI6aGlkZGVuXCIpKSB7XHJcblx0XHRzaG93RmxpZ2h0UGFuZWwoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0aGlkZUZsaWdodFBhbmVsKCk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGhpZGVGbGlnaHRQYW5lbCgpIHtcclxuXHRkb2N1bWVudC5jb29raWU9JCgnI2JveEZsaWdodFBsYW4nKS52YWwoKTtcclxuXHRjb25zb2xlLmxvZyhcIihzYXZpbmcpIHBsYW5TYXZlZD1cIiArIGRvY3VtZW50LmNvb2tpZSk7XHJcblx0JCgnI3BhbmVsLWZwJykuaGlkZSg1MDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWhlbHAnKS5oaWRlKDMwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4taW5mbycpLmhpZGUoMzAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0ZsaWdodFBhbmVsKCkge1xyXG5cdHZhciBwbGFuU2F2ZWQgPSBkb2N1bWVudC5jb29raWU7XHJcblx0Y29uc29sZS5sb2coXCJwbGFuU2F2ZWQ9XCIgKyBkb2N1bWVudC5jb29raWUpO1xyXG5cdGlmICggcGxhblNhdmVkICE9IFwiXCIgKSB7XHJcblx0XHQkKCcjYm94RmxpZ2h0UGxhbicpLnZhbChwbGFuU2F2ZWQpO1xyXG5cdH1cclxuXHQkKCcjcGFuZWwtZnAnKS5zaG93KDUwMCk7XHJcblx0JCgnI2ZsaWdodHBsYW4taGVscCcpLnNob3coMzAwKTtcclxuXHQkKCcjZmxpZ2h0cGxhbi1pbmZvJykuc2hvdygzMDApO1xyXG5cdCQoJyNmbGlnaHRwbGFuLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdCQoJyNib3hGbGlnaHRQbGFuJykuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU5hdmFpZHMoKSB7XHJcblx0JCgnI25hdmFpZHMtYnV0dG9uJykuaHRtbCgnU2hvdyBuYXZhaWRzIChOKScpLnVuYmluZCgnY2xpY2snKS5jbGljayhcclxuXHRcdFx0c2hvd05hdmFpZHMpO1xyXG5cdG5hdk1hcC5zZXRPcGFjaXR5KDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TmF2YWlkcygpIHtcclxuXHQkKCcjbmF2YWlkcy1idXR0b24nKS5odG1sKCdIaWRlIG5hdmFpZHMgKE4pJykudW5iaW5kKCdjbGljaycpLmNsaWNrKFxyXG5cdFx0XHRoaWRlTmF2YWlkcyk7XHJcblx0bmF2TWFwLnNldE9wYWNpdHkoMSk7XHJcbn1cclxuXHJcbnZhciB2aXNpYmxlTGFiZWxSb3V0ZSA9IHRydWU7XHJcbmZ1bmN0aW9uIHRvb2dsZUxhYmVsUm91dGUoKSB7XHJcblx0dmlzaWJsZUxhYmVsUm91dGUgPSAhdmlzaWJsZUxhYmVsUm91dGU7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzTGFiZWxSb3V0ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0IG1hcmtlcnNMYWJlbFJvdXRlW2ldLnNldFZpc2libGUodmlzaWJsZUxhYmVsUm91dGUpO1xyXG5cdH1cclxuXHRpZiAoIHZpc2libGVMYWJlbFJvdXRlICkge1xyXG5cdFx0JCgnI2xhYmVsUm91dGUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJyNsYWJlbFJvdXRlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdH1cclxufVxyXG5cclxudmFyIHZpc2libGVXYXlwb2ludCA9IHRydWU7XHJcbmZ1bmN0aW9uIHRvb2dsZUxhYmVsV2F5cG9pbnQoKSB7XHJcblx0dmlzaWJsZVdheXBvaW50ID0gIXZpc2libGVXYXlwb2ludDtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnNXYXlwb2ludC5sZW5ndGg7IGkrKykge1xyXG5cdFx0bWFya2Vyc1dheXBvaW50W2ldLnNldFZpc2libGUodmlzaWJsZVdheXBvaW50KTtcclxuXHR9XHJcblx0aWYgKCB2aXNpYmxlV2F5cG9pbnQgKSB7XHJcblx0XHQkKCcjbGFiZWxXYXlwb2ludC1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnI2xhYmVsV2F5cG9pbnQtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XHJcblx0fVxyXG59XHJcblxyXG4vLyByZWFkeSB3aGVuIHlvdSBhcmUhXHJcbmdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0aWFsaXplKTtcclxud2luZG93LnNob3dOYXZhaWRzICAgICAgICAgPSBzaG93TmF2YWlkcztcclxud2luZG93LnRvZ2dsZUZsaWdodFBhbmVsICAgPSB0b2dnbGVGbGlnaHRQYW5lbDtcclxud2luZG93LnRvZ2dsZUNoYXNlQWlycGxhbmUgPSB0b2dnbGVDaGFzZUFpcnBsYW5lO1xyXG53aW5kb3cudG9vZ2xlTGFiZWxSb3V0ZSAgICA9IHRvb2dsZUxhYmVsUm91dGU7XHJcbndpbmRvdy50b29nbGVMYWJlbFdheXBvaW50ID0gdG9vZ2xlTGFiZWxXYXlwb2ludDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9