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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_map_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_map_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_map_js__);

//import './js/numeral.min.js';
//import './js/markerwithlabel.js';
//import './js/jquery-blink.js';


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

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "html, body, #map-canvas {\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}\n\n#panel-fp {\n\tposition: absolute;\n\ttop: 60px;\n\tleft: 90px;\n\tz-index: 5;\n\tpadding: 5px;\n\tborder-radius: 5px;\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 2px solid #595959;\n\tbackground-color: #50000E;\n\tcolor: #fff;\n\twidth: 600px;\n\tdisplay: none;\n\ttext-align: center;\n\tfont-size: 15px;\n\tfont-weight: 400;\n}\n\n#errorBox {\n\tposition: absolute;\n\ttop: 90%;\n\tleft: 2%;\n\tz-index: 5;\n\tpadding: 5px;\n\tborder-radius: 5px;\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 2px solid #595959;\n\tbackground-color: #50000E;\n\tcolor: #fff;\n\twidth: 20%;\n\tdisplay: none;\n\ttext-align: center;\n\tfont-size: 15px;\n\tfont-weight: 400;\n}\n\n#boxFlightPlan {\n\t text-transform: uppercase;\n\t font-family: Verdana, Arial, sans-serif;\n\t font-size: 14px;\n\t font-weight: bold;\n\t overflow: auto;\n\t resize: none;\n} \n#flightplan-help {\n\tz-index: 1000;\n\tposition: absolute;\n\ttop: 190px;\n\tleft: 90px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tborder: 1px solid #000;\n\tfont-size: 11px;\n\tfont-weight: 500;\n\tbackground-color: rgba(0, 0, 0, 0.55);\n\tcolor: #fff;\n\tborder-radius: 2px;\n\tpadding: 10px;\n\tdisplay: none;\n\twidth: 130px;\n}\n#flightplan-button {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 90px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tbackground-color: rgba(255,255,255,0.70);\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n}\n#plane-panel {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 190px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tborder-radius: 2px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n}\n#followThePlane-button {\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#flightplan-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n#flightplan-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#followThePlane-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#followThePlane-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n.labelsAirport {\n\tcolor: darkblue;\n\tbackground-color: white;\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\n\tfont-size: 12px;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 38px;\n\tborder: 2px solid black;\n\twhite-space: nowrap;\n}\n.labelsWaypoint {\n\tcolor: black;\n\tbackground-color: lightgray;\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\n\tfont-size: 11px;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 50px;\n\tborder: 2px solid black;\n\twhite-space: nowrap;\n}\n.labelsInfoRoute {\n\tcolor: black;\n\tbackground-color: white;\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\ttext-align: center;\n\tmin-width: 70px;\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px;\n\tborder: 2px solid blue;\n\twhite-space: nowrap;\n\tborder-radius: 23px;\n}\n.runwayTable {\n\tfont-family: \"Arial\", sans-serif;\n\tfont-size: 12px;\n}\n.runwayInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.vorTable {\n\tfont-family: \"Arial\", sans-serif;\n\tfont-size: 12px;\n}\n.vorInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.routeInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.planeDataInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.planeDataInfoRed {\n\tcolor: red;\n\tfont-weight: bold;\n}\n.rotate {\n     -webkit-transform : rotate(66deg); \n    -moz-transform : rotate(66deg); \n    -ms-transform : rotate(66deg); \n    -o-transform : rotate(66deg); \n    transform : rotate(66deg); \n}\n#flightplan-info {\n    z-index: 9999;\n    position: absolute;\n    top: 190px;\n    left: 253px;\n    font-family: Verdana, Arial, sans-serif;\n    text-decoration: none;\n    box-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n    border: 1px solid #000;\n    font-size: 12px;\n    font-weight: 500;\n    background-color: rgba(0, 0, 0, 0.75);\n    color: yellow;\n    border-radius: 2px;\n    padding: 10px;\n    display: none;\n    width: 430px;\n}\n.flightPlan-info-label {\n    font-family: monospace;\n    font-size: 13px;\n    color: white;\n}\n#flightplan-loading {\n\tposition: absolute; \n\ttop: 73px; \n\tleft: 10px; \n\tz-index: 9999;\n\tcolor: #454545;\n\tfont-family: monospace;\n\tfont-size:15px;\n\tfont-weight: bold;\n}\n#labelRoute-button {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 300px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tbackground-color: rgba(0,0,0,0.70);\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tcolor: #fff;\n}\n#labelRoute-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n#labelRoute-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#labelWaypoint-button {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 390px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tbackground-color: rgba(0,0,0,0.70);\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tcolor: #fff;\n}\n#labelWaypoint-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n#labelWaypoint-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTc4OTUzOWVkOGMzNmMzYTllMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWZyb250LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcz81ODdhIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzVXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkEsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG9CQUFvQix3Q0FBd0M7QUFDdkc7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxvSTtBQUNBO0FBQ0EsZ0Q7QUFDQTtBQUNBLE1BQU07QUFDTixFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4QkFBOEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0QkFBNEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUQiLCJmaWxlIjoiZnJvbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTc4OTUzOWVkOGMzNmMzYTllMTIiLCJpbXBvcnQgJy4vY3NzL21hcC5jc3MnO1xuLy9pbXBvcnQgJy4vanMvbnVtZXJhbC5taW4uanMnO1xuLy9pbXBvcnQgJy4vanMvbWFya2Vyd2l0aGxhYmVsLmpzJztcbi8vaW1wb3J0ICcuL2pzL2pxdWVyeS1ibGluay5qcyc7XG5pbXBvcnQgJy4vanMvbWFwLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC1mcm9udC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXAuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL21hcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCAjbWFwLWNhbnZhcyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNwYW5lbC1mcCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNjBweDtcXG5cXHRsZWZ0OiA5MHB4O1xcblxcdHotaW5kZXg6IDU7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICM1OTU5NTk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUwMDAwRTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbiNlcnJvckJveCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogOTAlO1xcblxcdGxlZnQ6IDIlO1xcblxcdHotaW5kZXg6IDU7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICM1OTU5NTk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUwMDAwRTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHR3aWR0aDogMjAlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4jYm94RmxpZ2h0UGxhbiB7XFxuXFx0IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHQgZm9udC1zaXplOiAxNHB4O1xcblxcdCBmb250LXdlaWdodDogYm9sZDtcXG5cXHQgb3ZlcmZsb3c6IGF1dG87XFxuXFx0IHJlc2l6ZTogbm9uZTtcXG59IFxcbiNmbGlnaHRwbGFuLWhlbHAge1xcblxcdHotaW5kZXg6IDEwMDA7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMTkwcHg7XFxuXFx0bGVmdDogOTBweDtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHdpZHRoOiAxMzBweDtcXG59XFxuI2ZsaWdodHBsYW4tYnV0dG9uIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAyOHB4O1xcblxcdGxlZnQ6IDkwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcbn1cXG4jcGxhbmUtcGFuZWwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDI4cHg7XFxuXFx0bGVmdDogMTkwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cXG4jZmxpZ2h0cGxhbi1idXR0b24uZG93biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG59XFxuI2ZsaWdodHBsYW4tYnV0dG9uLnVwIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uLnVwIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uLmRvd24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxuXFx0Y29sb3I6ICNmZmY7XFxufVxcbi5sYWJlbHNBaXJwb3J0IHtcXG5cXHRjb2xvcjogZGFya2JsdWU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdpZHRoOiAzOHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5sYWJlbHNXYXlwb2ludCB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTFweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDUwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmxhYmVsc0luZm9Sb3V0ZSB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1pbi13aWR0aDogNzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHRib3JkZXItcmFkaXVzOiAyM3B4O1xcbn1cXG4ucnVud2F5VGFibGUge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnJ1bndheUluZm8ge1xcblxcdGNvbG9yOiBibHVlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udm9yVGFibGUge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnZvckluZm8ge1xcblxcdGNvbG9yOiBibHVlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucm91dGVJbmZvIHtcXG5cXHRjb2xvcjogYmx1ZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnBsYW5lRGF0YUluZm8ge1xcblxcdGNvbG9yOiBibHVlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucGxhbmVEYXRhSW5mb1JlZCB7XFxuXFx0Y29sb3I6IHJlZDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnJvdGF0ZSB7XFxuICAgICAtd2Via2l0LXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcbiAgICAtbW96LXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcbiAgICAtbXMtdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxuICAgIC1vLXRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcbiAgICB0cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXG59XFxuI2ZsaWdodHBsYW4taW5mbyB7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxOTBweDtcXG4gICAgbGVmdDogMjUzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSg1MCwgNTAsIDUwLCAwLjc1KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiA0MzBweDtcXG59XFxuLmZsaWdodFBsYW4taW5mby1sYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jZmxpZ2h0cGxhbi1sb2FkaW5nIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxcblxcdHRvcDogNzNweDsgXFxuXFx0bGVmdDogMTBweDsgXFxuXFx0ei1pbmRleDogOTk5OTtcXG5cXHRjb2xvcjogIzQ1NDU0NTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGZvbnQtc2l6ZToxNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbGFiZWxSb3V0ZS1idXR0b24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDI4cHg7XFxuXFx0bGVmdDogMzAwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcblxcdGNvbG9yOiAjZmZmO1xcbn1cXG4jbGFiZWxSb3V0ZS1idXR0b24uZG93biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG59XFxuI2xhYmVsUm91dGUtYnV0dG9uLnVwIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cXG4jbGFiZWxXYXlwb2ludC1idXR0b24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDI4cHg7XFxuXFx0bGVmdDogMzkwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcblxcdGNvbG9yOiAjZmZmO1xcbn1cXG4jbGFiZWxXYXlwb2ludC1idXR0b24uZG93biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG59XFxuI2xhYmVsV2F5cG9pbnQtYnV0dG9uLnVwIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzApO1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9tYXAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCBwZXJpb2QgPSAxMDAwOyAvLyB0aW1lIGJldHdlZW4gcmVmcmVzaGVzIGluIG1zXG5cbnZhciBwb3NDbGllbnQgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQxLjU0NjE5OSwgMi4xMDg2MjMpXG5pZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3NpdGlvbikge1xuICAgIFx0cG9zQ2xpZW50ID0ge1xuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXG4gICAgICB9O1xuICAgIH0pO1xufVxudmFyIG1hcE9wdGlvbnMgPSB7XG5cdGNlbnRlciA6IHtcblx0XHRsYXQgOiAwLFxuXHRcdGxuZyA6IDBcblx0fSxcblx0em9vbSA6IDksXG5cdG1hcFR5cGVJZCA6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5URVJSQUlOLFxuXHRjZW50ZXIgOiBwb3NDbGllbnRcbn07XG52YXIgbWFwO1xudmFyIHBvbHlPcHRpb25zID0ge1xuXHRnZW9kZXNpYyA6IHRydWUsXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwMDAnLFxuXHRzdHJva2VPcGFjaXR5IDogMC44LFxuXHRzdHJva2VXZWlnaHQgOiAzXG59O1xudmFyIG1hcmtlck9wdGlvbnMgPSB7XG5cdGljb24gOiB7XG5cdFx0cGF0aCA6IFwiTTM2Mi45ODUsNDMwLjcyNGwtMTAuMjQ4LDUxLjIzNGw2Mi4zMzIsNTcuOTY5bC0zLjI5MywyNi4xNDUgbC03MS4zNDUtMjMuNTk5bC0yLjAwMSwxMy4wNjlsLTIuMDU3LTEzLjUyOWwtNzEuMjc4LFwiXG5cdFx0XHRcdCsgXCIyMi45MjhsLTUuNzYyLTIzLjk4NGw2NC4wOTctNTkuMjcxbC04LjkxMy01MS4zNTlsMC44NTgtMTE0LjQzIGwtMjEuOTQ1LTExLjMzOGwtMTg5LjM1OCxcIlxuXHRcdFx0XHQrIFwiXCJcblx0XHRcdFx0KyBcIjg4Ljc2bC0xLjE4LTMyLjI2MmwyMTMuMzQ0LTE4MC4wOGwwLjg3NS0xMDcuNDM2bDcuOTczLTMyLjAwNWw3LjY0Mi0xMi4wNTRsNy4zNzctMy45NThsOS4yMzgsXCJcblx0XHRcdFx0KyBcIjMuNjUgbDYuMzY3LDE0LjkyNWw3LjM2OSwzMC4zNjN2MTA2LjM3NWwyMTEuNTkyLDE4Mi4wODJsLTEuNDk2LDMyLjI0N2wtMTg4LjQ3OS05MC42MWwtMjEuNjE2LDEwLjA4N2wtMC4wOTQsMTE1LjY4NFwiLFxuXHRcdHNjYWxlIDogMC4wOCxcblx0XHRmaWxsT3BhY2l0eSA6IDEsXG5cdFx0YW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDM0MCwgMzQwKSxcblx0XHRzdHJva2VXZWlnaHQgOiAwLjVcblx0fVxufTtcblxudmFyIGljb25BaXJwb3J0ID0ge1xuXHQvL3VybCA6ICdhaXJwb3J0LnBuZycsXG5cdHVybCA6ICcuL2ltYWdlcy9haXJwb3J0LnBuZycsXG5cdHNpemUgOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzMCwgNTApLFxuXHRvcmlnaW4gOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXG5cdGFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgxNSwgNTApXG59O1xuXG52YXIgaWNvbldheXBvaW50ID0ge1xuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXG5cdHNjYWxlIDogNixcblx0c3Ryb2tlQ29sb3IgOiAnIzAwMDBGRicsXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxuXHRzdHJva2VXZWlnaHQgOiAzLFxuXHRmaWxsQ29sb3IgOiAnd2hpdGUnLFxuXHRmaWxsT3BhY2l0eSA6IDEsXG59O1xuXG52YXIgaWNvbkxhYmVsUm91dGUgPSB7XG5cdHBhdGggOiBcIm05Niw0NFwiLFxuXHRzY2FsZSA6IDEsXG5cdHN0cm9rZUNvbG9yIDogJyNGRkZGRkYnLFxuXHRzdHJva2VPcGFjaXR5IDogMSxcblx0c3Ryb2tlV2VpZ2h0IDogMSxcblx0ZmlsbENvbG9yIDogJ3doaXRlJyxcblx0ZmlsbE9wYWNpdHkgOiAxMDAsXG59O1xuXG52YXIgaWNvblZPUiA9IHtcblx0cGF0aCA6IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLFxuXHRzY2FsZSA6IDcsXG5cdHN0cm9rZUNvbG9yIDogJyMwMDAwMDAnLFxuXHRzdHJva2VPcGFjaXR5IDogMSxcblx0c3Ryb2tlV2VpZ2h0IDogMyxcblx0ZmlsbENvbG9yIDogJ3llbGxvdycsXG5cdGZpbGxPcGFjaXR5IDogMSxcbn07XG5cbnZhciBpY29uTkRCID0ge1xuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXG5cdHNjYWxlIDogNyxcblx0c3Ryb2tlQ29sb3IgOiAnIzI2MjYyNicsXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxuXHRzdHJva2VXZWlnaHQgOiAzLFxuXHRmaWxsQ29sb3IgOiAnI0ZGRDA1QycsXG5cdGZpbGxPcGFjaXR5IDogMSxcbn07XG5cbnZhciBwbGFuZUxpc3QgPSB7fTtcbnZhciByZWZyZXNoQ29udHJvbFBhbmVsID0gZmFsc2U7XG52YXIgcGxhbmVUb0ZvbGxvdyA9IG51bGw7XG52YXIgY29sb3JzID0gWyBcImJsdWVcIixcIiMyNjc2NEVcIiwgXCIjRjA4NTI2XCIsIFwiIzlDRkY1NFwiLCBcIiM3MjFCNDlcIiwgXCIjQTdEOEY4XCIsXCIjMkFGREJDXCIsIFwiI0ZCRTg3MFwiLCBcIiM3MTEzMDJcIiwgXCIjMjU3MkMyXCIsIFwiIzFDMjcxRFwiLCBcIiM2MzJFODVcIixcblx0XHRcIiMxRTVGN0FcIiwgXCIjRDhCMkY1XCIsIFwiI0QzMDdBMlwiLCBcIiNGMzkxQjVcIiwgXCIjRjE4MEY1XCIsIFwiIzNBMUUyRVwiLFwiI0FFNzcwN1wiLCBcIiMzRTNEMEVcIiwgXCIjNkFCMDZFXCIgXTtcbnZhciBjb2xvcl9pbmRleCA9IDA7XG52YXIgbmF2TWFwO1xudmFyIGZsaWdodFBsYW4gPSB7fTtcbnZhciBmbGlnaHRQYXRoOyAvLyBhbiBvYmplY3QgZ29vZ2xlLm1hcHMuUG9seWxpbmUgLSByZXByZXNlbnRpbmcgdGhlIEZsaWdodCBQbGFuXG52YXIgbWFya2VycyA9IFtdO1xudmFyIHJvdXRlTGFiZWxzT2ZmU2V0ID0gW107XG52YXIgbWFya2Vyc0xhYmVsUm91dGUgPSBbXTtcbnZhciBtYXJrZXJzV2F5cG9pbnQgICA9IFtdO1xudmFyIGVsSW5mb0JveFBsYW5lO1xudmFyIGNoYXNlQWlycGxhbmUgPSBmYWxzZTtcblxuJC5hamF4U2V0dXAoe1xuXHRjYWNoZSA6IGZhbHNlXG59KTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcblxuXHRtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY2FudmFzJyksIG1hcE9wdGlvbnMpO1xuXG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2RyYWdzdGFydCcsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJyNub2ZvY3VzJykuY2xpY2soKTtcblx0fSk7XG5cblx0JCgnYm9keScpLmtleWRvd24oZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlLmtleUNvZGUgPT0gMTkyKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0b2dnbGVGbGlnaHRQYW5lbCgpO1xuXHRcdH1cblx0XHRpZiAoZS5rZXlDb2RlID09IDE5KSB7XG5cdFx0XHQkLmdldEpTT04oXCJwYXVzZVwiKS5kb25lKGZ1bmN0aW9uKGRhdGEpe30pLmVycm9yKGZ1bmN0aW9uKCkge3Nob3dFcnJvcignTm90IGFibGUgdG8gUGF1c2UgWC1QbGFuZS4nKX0pO1xuXHRcdH1cblx0fSk7XG5cdFxuXHQgbWFwLmFkZExpc3RlbmVyKCd6b29tX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcblx0ICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHQgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3V0ZUxhYmVsc09mZlNldC5sZW5ndGg7IGkrKykge1xuXHQgICAgXHQgICB2YXIgZGlzdExhYmVsUm91dGUgPSAyNDAwMDtcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDE2ICkge1xuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gNTA7XG5cdCAgICBcdCAgIH0gZWxzZVxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTUgKSB7XG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDA7XG5cdCAgICBcdCAgIH0gZWxzZVxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTIgKSB7XG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDAwO1xuXHQgICAgXHQgICB9IGVsc2Vcblx0ICAgIFx0ICAgaWYgKCBtYXAuZ2V0Wm9vbSgpID49IDEwICkge1xuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gMTIwMDA7XG5cdCAgICBcdCAgIH0gZWxzZVxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gOCApIHtcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDE2MDAwO1xuXHQgICAgXHQgICB9XG5cdCAgICBcdCAgIHZhciBoZGdMYWJlbCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhyb3V0ZUxhYmVsc09mZlNldFtpXS5sYXRsbmcsIHJvdXRlTGFiZWxzT2ZmU2V0W2ldLm5leHRMYXRMbmcpOyBcblx0ICAgIFx0ICAgdmFyIG9mZnNldCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KHJvdXRlTGFiZWxzT2ZmU2V0W2ldLmxhdGxuZywgZGlzdExhYmVsUm91dGUsIGhkZ0xhYmVsLCA2MzcxMDAwKTtcblx0ICAgIFx0ICAgbWFya2Vyc0xhYmVsUm91dGVbaV0ucG9zaXRpb24gPSBvZmZzZXQ7IFxuICAgIFx0ICAgfVxuXHQgICAgfSwxKTtcblx0fSk7XG5cdCBcblx0dXBkYXRlUG9zaXRpb24oKTtcblx0c2V0SW50ZXJ2YWwodXBkYXRlUG9zaXRpb24sIHBlcmlvZCk7XG5cdHNldEludGVydmFsKGNoZWNrRmxpZ2h0UGxhbkJveEFuZExvYWQsIDIwMDApO1xuXG5cdC8vIG5hdiBkYXRhIG92ZXJsYXlzXG5cdC8qbmF2TWFwID0gbmV3IGdvb2dsZS5tYXBzLkltYWdlTWFwVHlwZSh7XG5cdFx0Z2V0VGlsZVVybCA6IGZ1bmN0aW9uKGNvb3JkLCB6b29tKSB7XG5cdFx0XHR0aWxlU2l6ZSA9IDI1NiAvIE1hdGgucG93KDIsIHpvb20pO1xuXHRcdFx0d2VzdCA9IGNvb3JkLnggKiB0aWxlU2l6ZTtcblx0XHRcdGVhc3QgPSB3ZXN0ICsgdGlsZVNpemU7XG5cdFx0XHRub3J0aCA9IGNvb3JkLnkgKiB0aWxlU2l6ZTtcblx0XHRcdHNvdXRoID0gbm9ydGggKyB0aWxlU2l6ZTtcblxuXHRcdFx0bm9ydGhFYXN0ID0gbWFwLmdldFByb2plY3Rpb24oKS5mcm9tUG9pbnRUb0xhdExuZyhcblx0XHRcdFx0XHRuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoZWFzdCwgbm9ydGgpKTtcblx0XHRcdHNvdXRoV2VzdCA9IG1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbVBvaW50VG9MYXRMbmcoXG5cdFx0XHRcdFx0bmV3IGdvb2dsZS5tYXBzLlBvaW50KHdlc3QsIHNvdXRoKSk7XG5cblx0XHRcdC8vIGh0dHA6Ly94LXBsYW5lLW1hcC5mb3VjLm5ldC9uYXYucGhwP25vcnRoPS0yNC41MjcxJTIwJnNvdXRoPS0yNS43OTk5JTIwJmVhc3Q9LTQ2LjQwNjMlMjAmd2VzdD0tNDcuODEyNVxuXHRcdFx0Ly8gY29uc29sZS5sb2coKTtcblxuXHRcdFx0cmV0dXJuIFsgJ2h0dHA6Ly94LXBsYW5lLW1hcC5mb3VjLm5ldC9uYXYucGhwP25vcnRoPScsXG5cdFx0XHRcdFx0bm9ydGhFYXN0LmxhdCgpLnRvRml4ZWQoNCksICcmc291dGg9Jyxcblx0XHRcdFx0XHRzb3V0aFdlc3QubGF0KCkudG9GaXhlZCg0KSwgJyZlYXN0PScsXG5cdFx0XHRcdFx0bm9ydGhFYXN0LmxuZygpLnRvRml4ZWQoNCksICcmd2VzdD0nLFxuXHRcdFx0XHRcdHNvdXRoV2VzdC5sbmcoKS50b0ZpeGVkKDQpIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICogLCAnJnR5cGU9QVBUJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IF0uam9pbignJyk7XG5cdFx0fSxcblx0XHR0aWxlU2l6ZSA6IG5ldyBnb29nbGUubWFwcy5TaXplKDI1NiwgMjU2KSxcblx0XHRtaW5ab29tIDogNixcblx0XHRtYXhab29tIDogMTJcblx0fSk7XG5cblx0bWFwLm92ZXJsYXlNYXBUeXBlcy5wdXNoKG5hdk1hcCk7XG5cdG5hdk1hcC5zZXRPcGFjaXR5KDApOyovXG59XG5cbnZhciBmbGlnaHRwbGFuVGV4dCA9ICdub25lJztcbmZ1bmN0aW9uIGNoZWNrRmxpZ2h0UGxhbkJveEFuZExvYWQoKSB7XG5cdGlmICgkKCcjcGFuZWwtZnAnKS5pcyhcIjpoaWRkZW5cIikgPT0gZmFsc2UpIHtcblx0XHR2YXIgdGV4dCA9ICQoJ3RleHRhcmVhI2JveEZsaWdodFBsYW4nKS52YWwoKTtcblx0XHRpZiAodGV4dCAhPSBmbGlnaHRwbGFuVGV4dCkge1xuXHRcdFx0ZmxpZ2h0cGxhblRleHQgPSB0ZXh0O1xuXHRcdFx0dmFyIHBhcmFtcyA9IHt9O1xuXHRcdFx0XG5cdFx0XHRpZiAoZmxpZ2h0UGF0aCAhPSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZmxpZ2h0UGF0aC5zZXRNYXAobnVsbCk7XG5cdFx0XHR9XG5cdFx0XHRjbGVhck1hcmtlcnMoKTtcblx0XHRcdFxuXHRcdFx0aWYgKCBmbGlnaHRwbGFuVGV4dC5sZW5ndGggPiA4ICkge1xuXHRcdFx0XHR2YXIgZ3JvdXBzID0gZmxpZ2h0cGxhblRleHQudG9VcHBlckNhc2UoKS5zcGxpdChcIiBcIik7XG5cdFx0XHRcdHZhciB3YXlwb2ludHMgPSBcIlwiO1xuXHRcdFx0XHRpZiAoIGdyb3Vwcy5sZW5ndGggPiAxICkge1xuXHRcdFx0XHQgICAgZm9yKHZhciBpID0gMTsgaSA8IChncm91cHMubGVuZ3RoLTEpOyBpKyspIHtcblx0XHRcdFx0XHQgICB3YXlwb2ludHMgKz0gZ3JvdXBzW2ldO1xuXHRcdFx0XHQgICAgICAgaWYgKHdheXBvaW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdCAgICAgICAgXHR3YXlwb2ludHMgKz0gXCIrXCI7XG5cdFx0XHRcdCAgICBcdH1cblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMgPSB7XG5cdFx0XHRcdCAgICBkZXBhcnR1cmUgOiBncm91cHNbMF0sXG5cdFx0XHRcdCAgICB3YXlwb2ludHMgOiB3YXlwb2ludHMsXG5cdFx0XHRcdCAgICBkZXN0aW5hdGlvbiA6IGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZSh0cnVlKTtcblx0XHRcdCQuZ2V0SlNPTihcImZsaWdodHBsYW5cIixwYXJhbXNcblx0XHRcdFx0KVxuXHRcdFx0XHQuZG9uZShmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGRhdGEpKSB7XG5cdFx0XHRcdFx0XHRcdHNob3dFcnJvcihcIkVycm9yIGxvYWRpbmcgRmxpZ2h0IFBsYW4uIE5vIGNvbnRlbnQgd2FzIHJldHVybmVkLlwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZsaWdodFBsYW4gPSBkYXRhO1xuXHRcdFx0XHRcdFx0bG9hZEZsaWdodFBsYW4oKTtcblx0XHRcdFx0XHRcdGxvYWRpbmdGbGlnaHRQbGFuU3RhdGUoZmFsc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZXJyb3IoXG5cdFx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNob3dFcnJvcignUGxlYXNlIGNoZWNrIHRoZSBjb25uZWN0aW9uIHdpdGggaHR0cDovL3NlcnZlcjpwb3J0L2ZsaWdodHBsYW4sIGlzIG5vdCB3b3JraW5nLicpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShsb2FkaW5nKSB7XG5cdGlmICggbG9hZGluZyApIHtcblx0XHQkKFwiI2ZsaWdodHBsYW4tbG9hZGluZ1wiKS5zaG93KCk7XG5cdFx0JChcIiNib3hGbGlnaHRQbGFuXCIpLmNzcygnY29sb3InLCAnbGlnaHRncmF5Jyk7XG5cdH0gZWxzZSB7XG5cdFx0JChcIiNmbGlnaHRwbGFuLWxvYWRpbmdcIikuaGlkZSgpO1xuXHRcdCQoXCIjYm94RmxpZ2h0UGxhblwiKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbG9hZEZsaWdodFBsYW4oKSB7XG5cdC8vIExvYWRpbmcgZmxpZ2h0UGxhbkNvb3JkaW5hdGVzIHZhcmlhYmxlXG5cdHZhciBkZXBhcnR1cmVMYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4uZGVwYXJ0dXJlLmxhdGl0dWRlLCBmbGlnaHRQbGFuLmRlcGFydHVyZS5sb25naXR1ZGUpO1xuXHR2YXIgZGVzdGluYXRpb25MYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZsaWdodFBsYW4uZGVzdGluYXRpb24ubGF0aXR1ZGUsIGZsaWdodFBsYW4uZGVzdGluYXRpb24ubG9uZ2l0dWRlKTsgXG5cdHZhciBhcnJDb29yZCA9IG5ldyBBcnJheSgpO1xuXHRhcnJDb29yZFswXSA9IGRlcGFydHVyZUxhdExuZztcblx0dmFyIHRvdGFsV2F5cG9pbnRzID0gMDtcblx0dmFyIHRvdGFsRGlzdGFuY2UgPSAwO1xuXHR3aGlsZSAodG90YWxXYXlwb2ludHMgPCBmbGlnaHRQbGFuLndheXBvaW50cy5sZW5ndGgpIHtcblx0XHRhcnJDb29yZFt0b3RhbFdheXBvaW50cyArIDFdID0gXG5cdFx0XHRuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxuXHRcdFx0XHRcdGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sYXRpdHVkZSxmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubG9uZ2l0dWRlXG5cdFx0XHQpO1xuXHRcdC8vIE1hcmsgdGhlIFdheXBvaW50XG5cdFx0d2F5cG9pbnQgPSB7XG5cdFx0XHRpZCA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5pZCxcblx0XHRcdGxhdGxuZyA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxhdGl0dWRlLGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sb25naXR1ZGUpLFxuXHRcdFx0dHlwZSA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS50eXBlLFxuXHRcdFx0ZGVzY3IgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubmFtZSxcblx0XHRcdGZyZXEgOiBmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10uZnJlcXVlbmN5XG5cdFx0fVxuXHRcdG1hcmtXYXlwb2ludCh3YXlwb2ludCk7XG5cblx0XHR0b3RhbFdheXBvaW50cysrO1xuXHR9XG5cdGFyckNvb3JkW3RvdGFsV2F5cG9pbnRzICsgMV0gPSBkZXN0aW5hdGlvbkxhdExuZztcblx0dmFyIGZsaWdodFBsYW5Db29yZGluYXRlcyA9IGFyckNvb3JkO1xuXG5cdC8vIExvYWRpbmcgRmxpZ2h0IFBsYW4gUG9seWxpbmUgLSBEcmF3IHRoZSBsaW5lXG5cdGZsaWdodFBhdGggPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUoe1xuXHRcdHBhdGggOiBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMsXG5cdFx0Z2VvZGVzaWMgOiBmYWxzZSxcblx0XHRzdHJva2VDb2xvciA6ICcjMDAwMEZGJyxcblx0XHRzdHJva2VPcGFjaXR5IDogMC41LFxuXHRcdHN0cm9rZVdlaWdodCA6IDZcblx0fSk7XG5cdGZsaWdodFBhdGguc2V0TWFwKG1hcCk7XG5cblx0Ly8gTWFyayBmb3IgdGhlIEFpcnBvcnQgRGVwYXJ0dXJlXG5cdGRlcGFydHVyZSA9IHtcblx0XHRpZCA6IGZsaWdodFBsYW4uZGVwYXJ0dXJlLmljYW9JZCxcblx0XHRuYW1lIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUubmFtZSxcblx0XHRsYXRsbmcgOiBkZXBhcnR1cmVMYXRMbmcsXG5cdFx0cnVud2F5cyA6IGZsaWdodFBsYW4uZGVwYXJ0dXJlLmFycmF5UnVud2F5c1xuXHR9XG5cdG1hcmtBaXJwb3J0KGRlcGFydHVyZSwnZGVwYXJ0dXJlJyk7XG5cblx0Ly8gTWFyayBmb3IgdGhlIEFpcnBvcnQgRGVzdGluYXRpb25cblx0ZGVzdGluYXRpb24gPSB7XG5cdFx0aWQgOiBmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLmljYW9JZCxcblx0XHRuYW1lIDogZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5uYW1lLFxuXHRcdGxhdGxuZyA6IGRlc3RpbmF0aW9uTGF0TG5nLFxuXHRcdHJ1bndheXMgOiBmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLmFycmF5UnVud2F5c1xuXHR9XG5cdG1hcmtBaXJwb3J0KGRlc3RpbmF0aW9uLCdkZXN0aW5hdGlvbicpO1xuXHRcblx0Ly8gUGFuZWwgSW5mbyBGbGlnaHQgUGxhblxuXHQkKFwiI2ZwSW5mby1EZXBhcnR1cmVcIikudGV4dChkZXBhcnR1cmUuaWQgKyAnIC0gJyArIGRlcGFydHVyZS5uYW1lICsgJyBBaXJwb3J0Jyk7XG5cdCQoXCIjZnBJbmZvLURlc3RpbmF0aW9uXCIpLnRleHQoZGVzdGluYXRpb24uaWQgKyAnIC0gJyArIGRlc3RpbmF0aW9uLm5hbWUgKyAnIEFpcnBvcnQnKTtcblx0XG5cdC8vIE1hcmsgTGFiZWxzIEJlYXJpbmcvRGlzdGFuY2Vcblx0dmFyIGluZGV4ID0gMDtcblx0d2hpbGUgKGluZGV4IDwgZmxpZ2h0UGxhbi5pbmZvUm91dGUubGVuZ3RoKSB7XG5cdFx0dG90YWxEaXN0YW5jZSArPSBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2VOTTtcblx0XHRsYWJlbFJvdXRlID0ge1xuXHRcdFx0ZGlzdGFuY2VOTSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZU5NLFxuXHRcdFx0ZGlzdGFuY2UgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uZGlzdGFuY2UsXG5cdFx0XHRiZWFyaW5nIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmcsXG5cdFx0XHRiZWFyaW5nRGVncmVlIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmdEZWdyZWUsXG5cdFx0XHRsYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmxhdGl0dWRlLFxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmxvbmdpdHVkZSksXG5cdFx0XHRuZXh0TGF0bG5nIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcblx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubmV4dExhdGl0dWRlLFxuXHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0TG9uZ2l0dWRlKSxcblx0XHRcdHJvdGF0ZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5iZWFyaW5nLFxuXHRcdFx0bmV4dFBvaW50IDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLm5leHRQb2ludCxcblx0XHRcdGN1cnJlbnRQb2ludCA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5jdXJyZW50UG9pbnQsXG5cdFx0XHRjb21wYXNzSGVhZGluZyA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5jb21wYXNzSGVhZGluZ1xuXHRcdH1cblx0XHRtYXJrTGFiZWxSb3V0ZShsYWJlbFJvdXRlKTtcblx0XHRpbmRleCsrO1xuXHR9XG5cblx0JChcIiNmcEluZm8tUm91dGVEaXN0YW5jZVwiKVxuXHRcdC50ZXh0KFxuXHRcdFx0bnVtZXJhbCh0b3RhbERpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgJ25tJyArICcgLyAnICtcblx0XHRcdG51bWVyYWwoKHRvdGFsRGlzdGFuY2UgKiAxLjg1MikpLmZvcm1hdCgnMCwwJykgKyAna20nXG5cdCAgICAgICAgKTtcblx0ICAgICAgICBcblx0dmFyIHBhbkZsaWdodFBsYW4gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKGRlcGFydHVyZUxhdExuZywgZGVzdGluYXRpb25MYXRMbmcpO1xuXHRtYXAuZml0Qm91bmRzKHBhbkZsaWdodFBsYW4pO1xuXHQvL21hcC5wYW5Ub0JvdW5kcyhwYW5GbGlnaHRQbGFuKTtcblx0Ly9tYXAuc2V0Wm9vbSgxMCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVNYXJrKG0pIHtcblx0bWFya2Vycy5wdXNoKG0pO1xufVxuZnVuY3Rpb24gY2xlYXJNYXJrZXJzKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBtYXJrZXJzW2ldLnNldE1hcChudWxsKTtcbiAgfVxuICByb3V0ZUxhYmVsc09mZlNldCA9IFtdO1xuICBtYXJrZXJzTGFiZWxSb3V0ZSA9IFtdO1xuICBtYXJrZXJzV2F5cG9pbnQgICA9IFtdO1xufVxuXG5mdW5jdGlvbiBtYXJrTGFiZWxSb3V0ZShsYWJlbFJvdXRlKSB7XG5cdC8vdmFyIGRpc3RMYWJlbCA9IGxhYmVsUm91dGUuZGlzdGFuY2VOTSAqIDEuODUyOyAvLyBjb252ZXJ0IG5tIHRvIG1ldGVyc1xuXHQvL3ZhciBoZGdMYWJlbCA9IGxhYmVsUm91dGUuYmVhcmluZ0RlZ3JlZSAtIDIyO1xuXHQvL3ZhciBkaXN0TGFiZWwgPSAyNDAwMDsgXG5cdHJvdXRlTGFiZWxzT2ZmU2V0LnB1c2goXG5cdFx0e1xuXHRcdFx0bGF0bG5nIDogbGFiZWxSb3V0ZS5sYXRsbmcsXG5cdFx0XHRuZXh0TGF0TG5nIDogbGFiZWxSb3V0ZS5uZXh0TGF0bG5nXG5cdFx0fVxuXHQpO1xuXHR2YXIgZGlzdExhYmVsUm91dGUgPSAxMjAwMDtcblx0dmFyIGhkZ0xhYmVsID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKGxhYmVsUm91dGUubGF0bG5nLCBsYWJlbFJvdXRlLm5leHRMYXRsbmcpOyBcblx0dmFyIG9mZnNldCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGxhYmVsUm91dGUubGF0bG5nLCBkaXN0TGFiZWxSb3V0ZSwgaGRnTGFiZWwsIDYzNzEwMDApO1xuXHR2YXIgYW5nbGVSb3RhdGUgPSBoZGdMYWJlbCAtIDkwO1xuXHRpZiAoIGFuZ2xlUm90YXRlID4gLTI3MCAmJiBhbmdsZVJvdGF0ZSA8IC05MCApIHtcblx0XHQgYW5nbGVSb3RhdGUgPSBhbmdsZVJvdGF0ZSAtIDE4MDtcblx0fVxuXHR2YXIgbGFiZWwgPSBsYWJlbFJvdXRlLmJlYXJpbmcgKyBcIiZkZWcgXCIgKyBudW1lcmFsKGxhYmVsUm91dGUuZGlzdGFuY2UpLmZvcm1hdCgnMCwwJykgKyBcIm5tXCI7XG5cdHZhciB4ID0gMjM7XG5cdHZhciB5ID0gMDtcblx0dmFyIGFuY2hvciA9IG5ldyBnb29nbGUubWFwcy5Qb2ludCh4LCB5KTtcblx0dmFyIG1hcmtlckxhYmVsUm91dGUgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcblx0XHRwb3NpdGlvbiA6IG9mZnNldCxcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcblx0XHRsYWJlbENvbnRlbnQgOiBsYWJlbCxcblx0XHRsYWJlbEFuY2hvciA6IGFuY2hvcixcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNJbmZvUm91dGVcIixcblx0XHRjbGlja2FibGUgOiB0cnVlLFxuXHRcdGljb24gOiBpY29uTGFiZWxSb3V0ZSxcblx0XHRyb3RhdGUgOiBhbmdsZVJvdGF0ZVxuXHR9KTtcblx0XG5cdHZhciBpbmZvQ29udGVudCA9IFwiPHRhYmxlIHdpZHRoPScxMDAlJyBib3JkZXI9MCBjbGFzcz0ncnVud2F5VGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz5cIjtcblx0XG5cdGluZm9Db250ZW50ICs9IFwiPHRhYmxlICB3aWR0aD0nMTAwJScgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHZhbGlnbj0nbWlkZGxlJyB3aWR0aD0nMzBweCc+PGltZyBzcmM9J2Fycm93LnBuZyc+PC90ZD5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGQgdmFsaWduPSdtaWRkbGUnIHdpZHRoPScxNTBweCc+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiJm5ic3A7Jm5ic3A7Jm5ic3A7Um91dGU6PGJyPjxiPiZuYnNwOyZuYnNwO1wiICsgbGFiZWxSb3V0ZS5jdXJyZW50UG9pbnQgKyBcblx0XHRcdFx0ICAgXCI8L2I+Jm5ic3A7dG8mbmJzcDs8Yj5cIiArIGxhYmVsUm91dGUubmV4dFBvaW50ICsgXCI8L2I+PC90ZD5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+PC90YWJsZT5cIjtcblx0XG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nMic+PGhyPjwvdGQ+PC90cj5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPSc2MHB4Jz5cIjtcblx0aW5mb0NvbnRlbnQgKz0gICBcIkRpc3RhbmNlOjwvdGQ+PHRkPiA8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIFxuXHRcdFx0XHRcdFx0XHRcdG51bWVyYWwobGFiZWxSb3V0ZS5kaXN0YW5jZSkuZm9ybWF0KCcwLDAnKSArIFwibm08L3NwYW4+Jm5ic3A7Jm5ic3A7LyZuYnNwOyZuYnNwO1wiICsgXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJhbChNYXRoLmNlaWwobGFiZWxSb3V0ZS5kaXN0YW5jZU5NIC8gMC41Mzk5NikpLmZvcm1hdCgnMCwwJykgK1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICBcImttPC9zcGFuPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPlwiO1xuXHRpbmZvQ29udGVudCArPSAgIFwiSGVhZGluZzo8L3RkPjx0ZD4gPHNwYW4gY2xhc3M9J3JvdXRlSW5mbyc+XCIgKyBsYWJlbFJvdXRlLmJlYXJpbmcgKyBcIiZkZWc8L3NwYW4+Jm5ic3A7Jm5ic3A7LyZuYnNwOyZuYnNwO1wiICsgXG4gICAgXHRcdFx0XHQgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIGxhYmVsUm91dGUuY29tcGFzc0hlYWRpbmcgKyBcIjwvc3Bhbj5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcblx0dmFyIGluZm9Cb3ggPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2PicsXG5cdFx0cGl4ZWxPZmZzZXQ6IG5ldyBnb29nbGUubWFwcy5TaXplKC0zMCwtMjUsXCJweFwiLFwicHhcIilcblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckxhYmVsUm91dGUsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcblx0XHRcdGluZm9Cb3gub3BlbihtYXAsIHRoaXMpO1xuXHRcdH1cblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckxhYmVsUm91dGUsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0Y2hhbmdlQ29sb3JJbmZvQm94KGVsLFwicmdiKDI1NSwyNTUsMjU1KVwiKTtcblx0XHRcdGluZm9Cb3guY2xvc2UoKTtcblx0XHR9XG5cdH0pO1xuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvQm94LCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cdCAgICBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwiaGlkZGVuXCIpO1xuXHRcdGNoYW5nZUNvbG9ySW5mb0JveChlbCxcInJnYmEoMTI3LDI1NSwyMTIsMC44MilcIik7XG5cdH0pO1xuXHRcblx0bWFya2VyTGFiZWxSb3V0ZS5zZXRNYXAobWFwKTtcblx0c2F2ZU1hcmsobWFya2VyTGFiZWxSb3V0ZSk7XG5cdG1hcmtlcnNMYWJlbFJvdXRlLnB1c2gobWFya2VyTGFiZWxSb3V0ZSk7XG59XG5cbmZ1bmN0aW9uIG1hcmtBaXJwb3J0KGFpcnBvcnQsdHlwZSkge1xuXHR2YXIgbWFya2VyQWlycG9ydCA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xuXHRcdHBvc2l0aW9uIDogYWlycG9ydC5sYXRsbmcsXG5cdFx0YW5pbWF0aW9uIDogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG5cdFx0aWNvbiA6IGljb25BaXJwb3J0LFxuXHRcdGxhYmVsQ29udGVudCA6IGFpcnBvcnQuaWQsXG5cdFx0bGFiZWxBbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjAsIDcwKSxcblx0XHRsYWJlbENsYXNzIDogXCJsYWJlbHNBaXJwb3J0XCJcblx0fSk7XG5cblx0dmFyIGltYWdlID0gXCI8aW1nIHNyYz0ndGFrZW9mZi5wbmcnLz5cIjtcblx0aWYgKCB0eXBlID09ICdkZXN0aW5hdGlvbicgKSB7XG5cdFx0aW1hZ2UgPSBcIjxpbWcgc3JjPSdsYW5kaW5nLnBuZycvPlwiO1xuXHR9XG5cdHZhciBpbmZvQ29udGVudCA9IFwiXCI7XG5cdGluZm9Db250ZW50ICs9IFwiPHRhYmxlIGJvcmRlcj0wIHdpZHRoPScxMDAlJyBjbGFzcz0ncnVud2F5VGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nNjBweCcgYWxpZ249J2xlZnQnPlwiICsgaW1hZ2UgKyBcIjwvdGQ+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPHRkPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjxiPlwiICsgYWlycG9ydC5pZCArIFwiPC9iPiAtIFwiICsgYWlycG9ydC5uYW1lO1xuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzQnPjxocj48L3RkPjwvdHI+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgd2lkdGg9JzEwMCUnIGJvcmRlcj0wIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhaXJwb3J0LnJ1bndheXMubGVuZ3RoOyBpKyspIHtcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj5cIlxuXHRcdFx0XHQrIFwiIDx0ZD5SdW53YXkgPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXG5cdFx0XHRcdCsgYWlycG9ydC5ydW53YXlzW2ldLm51bWJlclxuXHRcdFx0XHQrIFwiPC9zcGFuPjwvdGQ+XCJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7SGVhZGluZzogPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXG5cdFx0XHRcdCsgYWlycG9ydC5ydW53YXlzW2ldLmhlYWRpbmdcblx0XHRcdFx0KyBcIjxmb250IHNpemU9JzJweCc+JmRlZzs8L2ZvbnQ+PC9zcGFuPjwvdGQ+XCJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RnJlcXVlbmN5OiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0uZnJlcXVlbmN5ICsgXCI8L3NwYW4+PGJyLz48L3RkPlwiXG5cdFx0XHRcdCsgXCIgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0VsZXZhdGlvbjogPHNwYW4gY2xhc3M9J3J1bndheUluZm8nPlwiXG5cdFx0XHRcdCsgbnVtZXJhbChhaXJwb3J0LnJ1bndheXNbaV0uZWxldmF0aW9uKS5mb3JtYXQoJzAsMCcpICsgXCIgZnQ8L3NwYW4+PGJyLz48L3RkPlwiICsgXCI8L3RyPlwiO1xuXHR9XG5cdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcblxuXHR2YXIgaW5mb00xID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuXHRcdGNvbnRlbnQ6ICc8ZGl2IGlkPVwiaXdfY29udGVudFwiPicgKyBpbmZvQ29udGVudCArICc8L2Rpdj4nXG5cdH0pO1xuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJBaXJwb3J0LCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aW5mb00xLm9wZW4obWFwLCB0aGlzKTtcblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckFpcnBvcnQsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwiaGlkZGVuXCIpO1xuXHRcdH1cblx0XHRpbmZvTTEuY2xvc2UoKTtcblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9NMSwgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsLFwidmlzaWJsZVwiKTtcblx0XHR9XG5cdH0pO1xuXHRtYXJrZXJBaXJwb3J0LnNldE1hcChtYXApO1xuXHRzYXZlTWFyayhtYXJrZXJBaXJwb3J0KTtcbn1cblxuZnVuY3Rpb24gbWFya1dheXBvaW50KHdheXBvaW50KSB7XG5cdHZhciBpY29uV1BUID0gaWNvbldheXBvaW50O1xuXHR2YXIgaW5mb0NvbnRlbnQgPSBcIlwiO1xuXHRpZiAod2F5cG9pbnQudHlwZSA9PSAxKSB7XG5cdFx0aWNvbldQVCA9IGljb25WT1I7XG5cdH0gZWxzZSBpZiAod2F5cG9pbnQudHlwZSA9PSAyKSB7XG5cdFx0aWNvbldQVCA9IGljb25OREI7XG5cdH1cblxuXHR2YXIgbWFya2VyV2F5cG9pbnQgPSBuZXcgTWFya2VyV2l0aExhYmVsKHtcblx0XHRwb3NpdGlvbiA6IHdheXBvaW50LmxhdGxuZyxcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcblx0XHRpY29uIDogaWNvbldQVCxcblx0XHRsYWJlbENvbnRlbnQgOiB3YXlwb2ludC5pZCxcblx0XHRsYWJlbEFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgyOCwgLTYpLFxuXHRcdGxhYmVsQ2xhc3MgOiBcImxhYmVsc1dheXBvaW50XCJcblx0fSk7XG5cdGlmICh3YXlwb2ludC50eXBlID09ICdWT1InIHx8IHdheXBvaW50LnR5cGUgPT0gJ05EQicpIHtcblx0XHQvLyBWT1IgYW5kIE5EQlxuXHRcdGluZm9Db250ZW50ID0gXCI8dGFibGUgYm9yZGVyPTAgY2xhc3M9J3ZvclRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPSczMzBweCc+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHZhbGlnbj0nbWlkZGxlJyBjb2xzcGFuPTI+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCIgIDx0YWJsZSBib3JkZXI9MCBjbGFzcz0ndm9yVGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCc+PHRyPjx0ZD5cIjtcblx0XHRpZiAod2F5cG9pbnQudHlwZSA9PSAnVk9SJykge1xuXHRcdFx0Ly8gVk9SXG5cdFx0XHRpbmZvQ29udGVudCArPSBcIiA8aW1nIHNyYz0nVk9SLnBuZycvPlwiO1xuXHRcdH0gZWxzZSBpZiAod2F5cG9pbnQudHlwZSA9PSAnTkRCJykge1xuXHRcdFx0Ly8gTkJEXG5cdFx0XHRpbmZvQ29udGVudCArPSBcIiA8aW1nIHNyYz0nTkRCLnBuZycvPlwiO1xuXHRcdH1cblx0XHRpbmZvQ29udGVudCArPSBcIjwvdGQ+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7PGI+XCIgKyB3YXlwb2ludC5pZCArIFwiPC9iPiAtIFwiXG5cdFx0XHRcdCsgd2F5cG9pbnQuZGVzY3IgKyBcIjwvdGQ+XCIgKyBcIjwvdHI+PC90YWJsZT5cIlxuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHIvPjwvdGQ+PC90cj5cIjtcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzIwJSc+IEZyZXF1ZW5jeTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyB3YXlwb2ludC5mcmVxICsgXCI8L3RkPlwiICsgXCI8L3RyPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMSUnPiBMYXRpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sYXQoKSkgKyBcIjwvdGQ+PC90cj5cIjtcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+IExvbmdpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sbmcoKSkgKyBcIjxici8+PC90ZD48L3RyPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcblx0fSBlbHNlIHtcblx0XHQvLyBGSVhcblx0XHRpbmZvQ29udGVudCA9IFwiPHRhYmxlIGJvcmRlcj0wIGNsYXNzPSd2b3JUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTIwcHgnPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPHRkIGNvbHNwYW49Mj48Yj5cIiArIHdheXBvaW50LmlkICsgXCI8L2I+PC90ZD48L3RyPlwiXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPjxoci8+PC90ZD48L3RyPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMSUnPiBMYXRpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sYXQoKSkgKyBcIjwvdGQ+PC90cj5cIjtcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+IExvbmdpdHVkZTombmJzcDs8L3RkPjx0ZD48c3BhbiBjbGFzcz0ndm9ySW5mbyc+XCIgKyBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHdheXBvaW50LmxhdGxuZy5sbmcoKSkgKyBcIjxici8+PC90ZD48L3RyPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPC90YWJsZT5cIjtcblx0fVxuXHR2YXIgaW5mb00xID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuXHRcdGNvbnRlbnQ6ICc8ZGl2IGlkPVwiaXdfY29udGVudFwiPicgKyBpbmZvQ29udGVudCArICc8L2Rpdj4nXG5cdH0pO1xuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJXYXlwb2ludCwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGluZm9NMS5vcGVuKG1hcCwgdGhpcyk7XG5cdH0pO1xuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJXYXlwb2ludCwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XG5cdFx0fVxuXHRcdGluZm9NMS5jbG9zZSgpO1xuXHR9KTtcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb00xLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJ2aXNpYmxlXCIpO1xuXHRcdH1cblx0fSk7XG5cdG1hcmtlcldheXBvaW50LnNldE1hcChtYXApO1xuXHRzYXZlTWFyayhtYXJrZXJXYXlwb2ludCk7XG5cdG1hcmtlcnNXYXlwb2ludC5wdXNoKG1hcmtlcldheXBvaW50KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ29sb3JJbmZvQm94KGVsLGNvbG9yKSB7XG5cdGRpdkNvbG9yID0gZWwuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRkaXZDb2xvci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG59XG5cbmZ1bmN0aW9uIHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsc3RhdHVzQXJyb3csc3RhdHVzQ2xvc2VCdXR0b24pIHtcblx0ZGl2RWwgPSBlbC5maXJzdENoaWxkO1xuICAgIGNoaWxkMSA9IGRpdkVsLmZpcnN0Q2hpbGQ7XG4gICAgY2hpbGQzID0gY2hpbGQxLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKCBjaGlsZDMgIT0gdW5kZWZpbmVkICkge1xuICAgIFx0Y2hpbGQxLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNBcnJvdztcbiAgICBcdGNoaWxkMy5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzQXJyb3c7XG5cdCAgICAvLyBSZW1vdmUgQ2xvc2UgQnV0dG9uXG5cdCAgICBkaXZDbG9zZUJ1dHRvbiA9IGRpdkVsLnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQgICAgLy9kaXZDbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gc3RhdHVzO1xuXHQgICAgaWYgKCBzdGF0dXNDbG9zZUJ1dHRvbiAhPSB1bmRlZmluZWQgKSB7XG5cdCAgICBcdGRpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNDbG9zZUJ1dHRvbjtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdGRpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXHQgICAgfVxuXHQgICAgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVjaXNpb25EZWNpbWFsTnVtYmVyKHZscikge1xuXHRyZXR1cm4gcGFyc2VGbG9hdChNYXRoLnJvdW5kKHZsciAqIDEwMDAwMCkgLyAxMDAwMDApLnRvRml4ZWQoNSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xuXHQkLmdldEpTT04oXG5cdFx0XHRcImRhdGFcIixcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0aWYgKCQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xuXHRcdFx0XHRcdC8qc2hvd0Vycm9yKFwiTGlzdGVuaW5nIGF0IFgtUGxhbmUncyBVRFAgdHJhZmZpYyBwb3J0IDQ5MDAzLiBcIlxuXHRcdFx0XHRcdFx0XHQrIFwiUGxlYXNlIGNoZWNrIHRoZSBzZXR0aW5ncyBhdCB0aGUgWC1QbGFuZSdzIE5ldCBDb25uZWN0aW9ucyBtZW51LlwiKTsqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGRlbGV0ZSBhbGwgYWJzZW50IHBsYW5lc1xuXHRcdFx0XHRmb3IgKCB2YXIgaXAgaW4gcGxhbmVMaXN0KSB7XG5cdFx0XHRcdFx0aWYgKCEoaXAgaW4gZGF0YSkpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZVBsYW5lKGlwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gZm9yIGN1cnJlbnQgYW5kIG5ldyBwbGFuZXNcblx0XHRcdFx0Zm9yICggdmFyIGlwIGluIGRhdGEpIHtcblx0XHRcdFx0XHQvLyBpZiBuZXcgcGxhbmVcblx0XHRcdFx0XHRpZiAoIShpcCBpbiBwbGFuZUxpc3QpKSB7XG5cdFx0XHRcdFx0XHRjb2xvciA9IG5leHRDb2xvcigpO1xuXHRcdFx0XHRcdFx0bWFya2VyT3B0aW9ucy5pY29uLmZpbGxDb2xvciA9IGNvbG9yO1xuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXSA9IHtcblx0XHRcdFx0XHRcdFx0bmFtZSA6IGlwLnJlcGxhY2UoLy0vZywgJy4nKSxcblx0XHRcdFx0XHRcdFx0bG9uIDogMCxcblx0XHRcdFx0XHRcdFx0bGF0IDogMCxcblx0XHRcdFx0XHRcdFx0YWx0IDogZGF0YVtpcF0uYWx0TWFwLFxuXHRcdFx0XHRcdFx0XHRtYXJrZXIgOiBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlck9wdGlvbnMpLFxuXHRcdFx0XHRcdFx0XHR0cmFjZSA6IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZShwb2x5T3B0aW9ucyksXG5cdFx0XHRcdFx0XHRcdGluZm8gOiBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdygpLFxuXHRcdFx0XHRcdFx0XHRjb2xvciA6IGNvbG9yLFxuXHRcdFx0XHRcdFx0XHR2U3BlZWQgOiBkYXRhW2lwXS52U3BlZWQsXG5cdFx0XHRcdFx0XHRcdGFpclNwZWVkIDogZGF0YVtpcF0uYWlyU3BlZWQsXG5cdFx0XHRcdFx0XHRcdGdTcGVlZCA6IGRhdGFbaXBdLmdyb3VuZFNwZWVkLFxuXHRcdFx0XHRcdFx0XHRoZWFkaW5nIDogZGF0YVtpcF0uYmVhcmluZyxcblx0XHRcdFx0XHRcdFx0ZGVzdCA6IGRhdGFbaXBdLmRlc3RpbmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRncHNEaXN0Tm0gOiBkYXRhW2lwXS5ncHNEaXN0YW5jZU5tLFxuXHRcdFx0XHRcdFx0XHRncHNEaXN0VGltZSA6IGRhdGFbaXBdLmdwc0Rpc3RhbmNlVGltZSxcblx0XHRcdFx0XHRcdFx0bmF2MSA6IGRhdGFbaXBdLm5hdjFGcmVxLFxuXHRcdFx0XHRcdFx0XHRuYXYyIDogZGF0YVtpcF0ubmF2MkZyZXEsXG5cdFx0XHRcdFx0XHRcdGJhcm9tZXRlciA6IGRhdGFbaXBdLmJhcm9tZXRlcixcblx0XHRcdFx0XHRcdFx0ZnVlbFF1YW50aXR5IDogZGF0YVtpcF0uZnVlbFF1YW50aXR5LFxuXHRcdFx0XHRcdFx0XHRvdXRzaWRlVGVtcCA6IGRhdGFbaXBdLm91dHNpZGVUZW1wZXJhdHVyZSxcblx0XHRcdFx0XHRcdFx0Y29tMSA6IGRhdGFbaXBdLmNvbTFGcmVxLFxuXHRcdFx0XHRcdFx0XHRjb20yIDogZGF0YVtpcF0uY29tMkZyZXEsXG5cdFx0XHRcdFx0XHRcdGNvbXBhc3NIZWFkaW5nIDogZGF0YVtpcF0uY29tcGFzc0hlYWRpbmdcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm1hcmtlci5zZXRNYXAobWFwKTtcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLmlwID0gaXA7IFxuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5pbmZvV2luZG93TGlzdGVuZXIgPSBnb29nbGUubWFwcy5ldmVudFxuXHRcdFx0XHRcdFx0XHRcdC5hZGRMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLm1hcmtlciwnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lTGlzdFt0aGlzLmlwXS5pbmZvLm9wZW4obWFwLHBsYW5lTGlzdFt0aGlzLmlwXS5tYXJrZXIpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5pbmZvLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdGVsSW5mb0JveFBsYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsSW5mb0JveFBsYW5lLFwidmlzaWJsZVwiLFwidmlzaWJsZVwiKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIocGxhbmVMaXN0W2lwXS5pbmZvLCdjbG9zZWNsaWNrJyxmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHR2aXNpYmlsaXR5QXJyb3dJbmZvQm94KGVsSW5mb0JveFBsYW5lLFwiaGlkZGVuXCIpO1xuXHRcdFx0XHRcdFx0XHRlbEluZm9Cb3hQbGFuZSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnRyYWNlLnNldE1hcChtYXApO1xuXHRcdFx0XHRcdFx0cGxhbmVUb0ZvbGxvdyA9IGlwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdMYXQgICAgICAgICAgICAgICAgICAgICAgID0gZGF0YVtpcF0ubGF0TWFwO1xuXHRcdFx0XHRcdG5ld0xvbiAgICAgICAgICAgICAgICAgICAgICAgPSBkYXRhW2lwXS5sb25NYXA7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5hbHQgICAgICAgICAgICA9IGRhdGFbaXBdLmFsdE1hcDtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnZTcGVlZCAgICAgICAgID0gZGF0YVtpcF0udlNwZWVkO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uYWlyU3BlZWQgICAgICAgPSBkYXRhW2lwXS5haXJTcGVlZDtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmhlYWRpbmcgICAgICAgID0gZGF0YVtpcF0uYmVhcmluZztcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmRlc3QgICAgICAgICAgID0gZGF0YVtpcF0uZGVzdGluYXRpb247XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5ncHNEaXN0Tm0gICAgICA9IGRhdGFbaXBdLmdwc0Rpc3RhbmNlTm07XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5ncHNEaXN0VGltZSAgICA9IGRhdGFbaXBdLmdwc0Rpc3RhbmNlVGltZTtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmdTcGVlZCAgICAgICAgID0gZGF0YVtpcF0uZ3JvdW5kU3BlZWQ7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5uYXYxICAgICAgICAgICA9IGRhdGFbaXBdLm5hdjFGcmVxO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubmF2MiAgICAgICAgICAgPSBkYXRhW2lwXS5uYXYyRnJlcTtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmJhcm9tZXRlciAgICAgID0gZGF0YVtpcF0uYmFyb21ldGVyO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZnVlbFF1YW50aXR5ICAgPSBkYXRhW2lwXS5mdWVsUXVhbnRpdHk7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5vdXRzaWRlVGVtcCAgICA9IGRhdGFbaXBdLm91dHNpZGVUZW1wZXJhdHVyZTtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmNvbTEgICAgICAgICAgID0gZGF0YVtpcF0uY29tMUZyZXE7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb20yICAgICAgICAgICA9IGRhdGFbaXBdLmNvbTJGcmVxO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tcGFzc0hlYWRpbmcgPSBkYXRhW2lwXS5jb21wYXNzSGVhZGluZztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgbmV3UG9pbnQgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5ld0xhdCxuZXdMb24pO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldFBvc2l0aW9uKG5ld1BvaW50KTtcblx0XHRcdFx0XHR2YXIgaWNvbiA9IHBsYW5lTGlzdFtpcF0ubWFya2VyLmdldEljb24oKTtcblx0XHRcdFx0XHRpY29uLnJvdGF0aW9uID0gcGxhbmVMaXN0W2lwXS5oZWFkaW5nO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldEljb24oaWNvbik7XG5cdFx0XHRcdFx0Ly8gYWRkIG5ldyBwb2ludCB0byBsaW5lXG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS50cmFjZS5nZXRQYXRoKCkucHVzaChuZXdQb2ludCk7XG5cdFx0XHRcdFx0dmFyIGFpcnBsYW5lTGFiZWwgPSAgcGxhbmVMaXN0W2lwXS5uYW1lO1xuXHRcdFx0XHRcdGlmICggYWlycGxhbmVMYWJlbCA9PSAnMTI3LjAuMC4xJyApIHtcblx0XHRcdFx0XHRcdCBhaXJwbGFuZUxhYmVsID0gJ1lPVSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vdmFyIGhkZ0FpcnBsYW5lID0gTnVtYmVyKE1hdGguZmxvb3IoKChwbGFuZUxpc3RbaXBdLmhlYWRpbmcgKyAzNjApICUgMzYwKSkpICsgMjI7XG5cdFx0XHRcdFx0dmFyIGhkZ0FpcnBsYW5lID0gcGxhbmVMaXN0W2lwXS5jb21wYXNzSGVhZGluZztcblx0XHRcdFx0XHR2YXIgaW5mb0NvbnRlbnQgPSBcIjxkaXYgaWQ9J2l3X2NvbnRlbnQnPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPGRpdiBzdHlsZT0nbWFyZ2luOiAwOyB3aWR0aDogNTAwcHg7Jz5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSBib3JkZXI9MCBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMDAlJz5cIjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHI+PHRkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICA8dGFibGUgYm9yZGVyPTAgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJyB3aWR0aD0nMTAwJSc+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8dHI+PHRkIHN0eWxlPSdoZWlnaHQ6MzBweDsnPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPGI+XCIgKyBhaXJwbGFuZUxhYmVsICsgXCI8L2I+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8L3RkPjwvdHI+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8dHI+PHRkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICAgPC90ZD48L3RyPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiICA8L3RhYmxlPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdGQ+PC90cj5cIjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR2YXIgYmFja0NvbG9yID0gJ2xpZ2h0Z3JheSc7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyPjx0ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGFibGUgc3R5bGU9J2JvcmRlcjpzb2xpZCAxcHggZGFya2dyYXk7Zm9udC13ZWlnaHQ6Ym9sZDsnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMicgd2lkdGg9JzEwMCUnPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHdpZHRoPSc4MHB4Jz5EZXN0aW5hdGlvbjo8L3RkPjx0ZCBjb2xzcGFuPSc1Jz48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmRlc3QgKyBcIjwvc3Bhbj48L3RkPlwiOyBcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0cj5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+RGlzdGFuY2U6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5ncHNEaXN0Tm0gKyBcIjwvc3Bhbj4mbmJzcDtubTwvdGQ+XCI7IFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZCB3aWR0aD0nNjBweCc+RVRFOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZ3BzRGlzdFRpbWUgKyBcIjwvc3Bhbj4mbmJzcDs8L3RkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPjx0ZD4gQWx0aXR1ZGU6IDwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBudW1lcmFsKHBsYW5lTGlzdFtpcF0uYWx0LnRvRml4ZWQoKSkuZm9ybWF0KCcwLDAnKSArIFwiPC9zcGFuPiZuYnNwO2Z0IE1TTCZuYnNwOyZuYnNwOzwvdGQ+XCJcblx0XHRcdFx0XHQgICAgICAgICAgICArIFwiPHRkPkhlYWRpbmc6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgaGRnQWlycGxhbmUgKyBcIiZkZWc7PC9zcGFuPjwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RyPlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiBBaXJTcGVlZDogPC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgbnVtZXJhbChwbGFuZUxpc3RbaXBdLmFpclNwZWVkKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7a3RzPC90ZD5cIjsgXG5cdFx0XHRcdFx0aWYgKCBwbGFuZUxpc3RbaXBdLnZTcGVlZCA+IC0xICkge1xuXHRcdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPlZTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPlZTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvUmVkJz5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gbnVtZXJhbChwbGFuZUxpc3RbaXBdLnZTcGVlZCkuZm9ybWF0KCcwLDAnKSArIFwiPC9zcGFuPiZuYnNwO2ZwbSZuYnNwOyZuYnNwOzwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5OYXYxOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0ubmF2MSArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjsgXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkNvbTE6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5jb20xICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+PHRyPlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5OYXYyOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0ubmF2MiArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+Q29tMjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmNvbTIgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHIgc3R5bGU9J2JhY2tncm91bmQ6XCIgKyBiYWNrQ29sb3IgKyBcIjsnPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5CYXJvbWV0ZXI6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5iYXJvbWV0ZXIgKyBcIjwvc3Bhbj48L3RkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5GdWVsOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZnVlbFF1YW50aXR5ICsgXCI8L3NwYW4+PC90ZD5cIjsgXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj48dHI+XCI7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk9BVDo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLm91dHNpZGVUZW1wICsgXCI8L3NwYW4+JmRlZzsmbmJzcDwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkdTOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBhcnNlRmxvYXQocGxhbmVMaXN0W2lwXS5nU3BlZWQpLnRvRml4ZWQoKSArIFwiPC9zcGFuPiZuYnNwO2t0czwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcblx0XHRcdFx0XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90YWJsZT5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RkPjwvdHI+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPC9kaXY+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L2Rpdj5cIjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBzZXQgaW5mbyB3aW5kb3cgY29udGVudFxuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaW5mby5zZXRDb250ZW50KGluZm9Db250ZW50KTtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmxvbiA9IG5ld0xvbjtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmxhdCA9IG5ld0xhdDtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmhkZyA9IHBsYW5lTGlzdFtpcF0uaGVhZGluZztcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnNwZCA9IHBsYW5lTGlzdFtpcF0uZ1NwZWVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG1vdmUgbWFwIGlmIGNoZWNrYm94IGNoZWNrZWRcblx0XHRcdFx0aWYgKCBjaGFzZUFpcnBsYW5lICkge1xuXHRcdFx0XHRcdGlmICggcGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddICE9IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdG1hcC5wYW5UbyhuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBsYW5lTGlzdFtwbGFuZVRvRm9sbG93XS5sYXQscGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddLmxvbikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0LmVycm9yKFxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNob3dFcnJvcignT3BzISBNYXlkYXkhIE1heWRheSEgSmF2YSBTZXJ2ZXIgaXMgZG93biEhIScpXG5cdFx0XHR9KTtcblxufVxuXG5mdW5jdGlvbiBiZWFyaW5nKGxvbjEsIGxhdDEsIGxvbjIsIGxhdDIpIHtcblx0bG9uMSA9IGxvbjEgKiBNYXRoLlBJIC8gMTgwO1xuXHRsb24yID0gbG9uMiAqIE1hdGguUEkgLyAxODA7XG5cdGxhdDEgPSBsYXQxICogTWF0aC5QSSAvIDE4MDtcblx0bGF0MiA9IGxhdDIgKiBNYXRoLlBJIC8gMTgwO1xuXHR2YXIgeSA9IE1hdGguc2luKGxvbjIgLSBsb24xKSAqIE1hdGguY29zKGxhdDIpO1xuXHR2YXIgeCA9IE1hdGguY29zKGxhdDEpICogTWF0aC5zaW4obGF0MikgLSBNYXRoLnNpbihsYXQxKSAqIE1hdGguY29zKGxhdDIpXG5cdFx0XHQqIE1hdGguY29zKGxvbjIgLSBsb24xKTtcblx0dmFyIGJybmcgPSBNYXRoLmF0YW4yKHksIHgpO1xuXHRyZXR1cm4gYnJuZyAvIE1hdGguUEkgKiAxODA7XG59XG5cbmZ1bmN0aW9uIGRpc3RhbmNlKGxvbjEsIGxhdDEsIGxvbjIsIGxhdDIpIHtcblx0UiA9IDYzNzIuODtcblx0bGF0MSA9IGxhdDEgKiBNYXRoLlBJIC8gMTgwO1xuXHRsYXQyID0gbGF0MiAqIE1hdGguUEkgLyAxODA7XG5cdHZhciBkZWx0YWxhdCA9IGxhdDIgLSBsYXQxO1xuXHR2YXIgZGVsdGFsb24gPSAobG9uMiAtIGxvbjEpICogTWF0aC5QSSAvIDE4MDtcblx0dmFyIGEgPSBNYXRoLnNpbihkZWx0YWxhdCAvIDIpICogTWF0aC5zaW4oZGVsdGFsYXQgLyAyKSArIE1hdGguY29zKGxhdDEpXG5cdFx0XHQqIE1hdGguY29zKGxhdDIpICogTWF0aC5zaW4oZGVsdGFsb24gLyAyKSAqIE1hdGguc2luKGRlbHRhbG9uIC8gMik7XG5cdHZhciBjID0gMiAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xuXHRyZXR1cm4gUiAqIGM7XG59XG5cbi8vIGNsZWFuIHBsYW5lIGRlbGV0aW9uXG5mdW5jdGlvbiBkZWxldGVQbGFuZShpcCkge1xuXHRnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm9XaW5kb3dMaXN0ZW5lcik7XG5cdHBsYW5lTGlzdFtpcF0udHJhY2Uuc2V0TWFwKG51bGwpO1xuXHRwbGFuZUxpc3RbaXBdLm1hcmtlci5zZXRNYXAobnVsbCk7XG5cdGRlbGV0ZSBwbGFuZUxpc3RbaXBdO1xufVxuXG4vLyBhbGVydCgpIGVxdWl2YWxlbnRcbmZ1bmN0aW9uIHNob3dFcnJvcih0ZXh0KSB7XG5cdCQoJyNlcnJvckJveCcpLnRleHQodGV4dCk7XG5cdCQoJyNlcnJvckJveCcpLmZhZGVJbigpLmRlbGF5KDM1MDApLmZhZGVPdXQoKTtcbn1cblxuZnVuY3Rpb24gbmV4dENvbG9yKCkge1xuXHRpZiAoY29sb3JzW2NvbG9yX2luZGV4XSAhPSBudWxsKSB7XG5cdFx0dmFyIGNvbG9yID0gY29sb3JzW2NvbG9yX2luZGV4XTtcblx0XHRjb2xvcl9pbmRleCsrO1xuXHRcdHJldHVybiBjb2xvcjtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhcIk5vIG1vcmUgY29sb3JzXCIpO1xuXHRcdHJldHVybiBcIiNhYWFhYWFcIjtcblx0fVxufVxuXG5mdW5jdGlvbiB0b2dnbGVDaGFzZUFpcnBsYW5lKCkge1xuXHRpZiAoIGNoYXNlQWlycGxhbmUgKSB7XG5cdFx0JCgnI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJyNmb2xsb3dUaGVQbGFuZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcblx0fVxuXHRjaGFzZUFpcnBsYW5lID0gIWNoYXNlQWlycGxhbmU7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZsaWdodFBhbmVsKCkge1xuXHRpZiAoJCgnI3BhbmVsLWZwJykuaXMoXCI6aGlkZGVuXCIpKSB7XG5cdFx0c2hvd0ZsaWdodFBhbmVsKCk7XG5cdH0gZWxzZSB7XG5cdFx0aGlkZUZsaWdodFBhbmVsKCk7XG5cdH1cbn1cbmZ1bmN0aW9uIGhpZGVGbGlnaHRQYW5lbCgpIHtcblx0ZG9jdW1lbnQuY29va2llPSQoJyNib3hGbGlnaHRQbGFuJykudmFsKCk7XG5cdGNvbnNvbGUubG9nKFwiKHNhdmluZykgcGxhblNhdmVkPVwiICsgZG9jdW1lbnQuY29va2llKTtcblx0JCgnI3BhbmVsLWZwJykuaGlkZSg1MDApO1xuXHQkKCcjZmxpZ2h0cGxhbi1oZWxwJykuaGlkZSgzMDApO1xuXHQkKCcjZmxpZ2h0cGxhbi1pbmZvJykuaGlkZSgzMDApO1xuXHQkKCcjZmxpZ2h0cGxhbi1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0ZsaWdodFBhbmVsKCkge1xuXHR2YXIgcGxhblNhdmVkID0gZG9jdW1lbnQuY29va2llO1xuXHRjb25zb2xlLmxvZyhcInBsYW5TYXZlZD1cIiArIGRvY3VtZW50LmNvb2tpZSk7XG5cdGlmICggcGxhblNhdmVkICE9IFwiXCIgKSB7XG5cdFx0JCgnI2JveEZsaWdodFBsYW4nKS52YWwocGxhblNhdmVkKTtcblx0fVxuXHQkKCcjcGFuZWwtZnAnKS5zaG93KDUwMCk7XG5cdCQoJyNmbGlnaHRwbGFuLWhlbHAnKS5zaG93KDMwMCk7XG5cdCQoJyNmbGlnaHRwbGFuLWluZm8nKS5zaG93KDMwMCk7XG5cdCQoJyNmbGlnaHRwbGFuLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xuXHQkKCcjYm94RmxpZ2h0UGxhbicpLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVOYXZhaWRzKCkge1xuXHQkKCcjbmF2YWlkcy1idXR0b24nKS5odG1sKCdTaG93IG5hdmFpZHMgKE4pJykudW5iaW5kKCdjbGljaycpLmNsaWNrKFxuXHRcdFx0c2hvd05hdmFpZHMpO1xuXHRuYXZNYXAuc2V0T3BhY2l0eSgwKTtcbn1cblxuZnVuY3Rpb24gc2hvd05hdmFpZHMoKSB7XG5cdCQoJyNuYXZhaWRzLWJ1dHRvbicpLmh0bWwoJ0hpZGUgbmF2YWlkcyAoTiknKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soXG5cdFx0XHRoaWRlTmF2YWlkcyk7XG5cdG5hdk1hcC5zZXRPcGFjaXR5KDEpO1xufVxuXG52YXIgdmlzaWJsZUxhYmVsUm91dGUgPSB0cnVlO1xuZnVuY3Rpb24gdG9vZ2xlTGFiZWxSb3V0ZSgpIHtcblx0dmlzaWJsZUxhYmVsUm91dGUgPSAhdmlzaWJsZUxhYmVsUm91dGU7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vyc0xhYmVsUm91dGUubGVuZ3RoOyBpKyspIHtcblx0XHQgbWFya2Vyc0xhYmVsUm91dGVbaV0uc2V0VmlzaWJsZSh2aXNpYmxlTGFiZWxSb3V0ZSk7XG5cdH1cblx0aWYgKCB2aXNpYmxlTGFiZWxSb3V0ZSApIHtcblx0XHQkKCcjbGFiZWxSb3V0ZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcblx0fSBlbHNlIHtcblx0XHQkKCcjbGFiZWxSb3V0ZS1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcblx0fVxufVxuXG52YXIgdmlzaWJsZVdheXBvaW50ID0gdHJ1ZTtcbmZ1bmN0aW9uIHRvb2dsZUxhYmVsV2F5cG9pbnQoKSB7XG5cdHZpc2libGVXYXlwb2ludCA9ICF2aXNpYmxlV2F5cG9pbnQ7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vyc1dheXBvaW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFya2Vyc1dheXBvaW50W2ldLnNldFZpc2libGUodmlzaWJsZVdheXBvaW50KTtcblx0fVxuXHRpZiAoIHZpc2libGVXYXlwb2ludCApIHtcblx0XHQkKCcjbGFiZWxXYXlwb2ludC1idXR0b24nKS5yZW1vdmVDbGFzcyhcInVwXCIpLmFkZENsYXNzKFwiZG93blwiKTtcblx0fSBlbHNlIHtcblx0XHQkKCcjbGFiZWxXYXlwb2ludC1idXR0b24nKS5yZW1vdmVDbGFzcyhcImRvd25cIikuYWRkQ2xhc3MoXCJ1cFwiKTtcblx0fVxufVxuXG4vLyByZWFkeSB3aGVuIHlvdSBhcmUhXG5nb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XG4vLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRob3NlIGZ1bmN0aW9ucyB2aXNpYmxlIG91dHNpZGUgdGhlIEpTIGZpbGUgd2hlbiB1c2luZyB0aGUgV2ViUGFjayBidW5kbGUgdG9vbCB0byBydW4gdGhlIHNvbHV0aW9uXG53aW5kb3cuc2hvd05hdmFpZHMgICAgICAgICA9IHNob3dOYXZhaWRzO1xud2luZG93LnRvZ2dsZUZsaWdodFBhbmVsICAgPSB0b2dnbGVGbGlnaHRQYW5lbDtcbndpbmRvdy50b2dnbGVDaGFzZUFpcnBsYW5lID0gdG9nZ2xlQ2hhc2VBaXJwbGFuZTtcbndpbmRvdy50b29nbGVMYWJlbFJvdXRlICAgID0gdG9vZ2xlTGFiZWxSb3V0ZTtcbndpbmRvdy50b29nbGVMYWJlbFdheXBvaW50ID0gdG9vZ2xlTGFiZWxXYXlwb2ludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=