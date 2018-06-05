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

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "html, body, #map-canvas {\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}\n\n#panel-fp {\n\tposition: absolute;\n\ttop: 60px;\n\tleft: 90px;\n\tz-index: 5;\n\tpadding: 5px;\n\tborder-radius: 5px;\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 2px solid #595959;\n\tbackground-color: #50000E;\n\tcolor: #fff;\n\twidth: 600px;\n\tdisplay: none;\n\ttext-align: center;\n\tfont-size: 15px;\n\tfont-weight: 400;\n}\n\n#errorBox {\n\tposition: absolute;\n\ttop: 90%;\n\tleft: 2%;\n\tz-index: 5;\n\tpadding: 5px;\n\tborder-radius: 5px;\n\tbox-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.75);\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 2px solid #595959;\n\tbackground-color: #50000E;\n\tcolor: #fff;\n\twidth: 20%;\n\tdisplay: none;\n\ttext-align: center;\n\tfont-size: 15px;\n\tfont-weight: 400;\n}\n\n#boxFlightPlan {\n\t text-transform: uppercase;\n\t font-family: Verdana, Arial, sans-serif;\n\t font-size: 14px;\n\t font-weight: bold;\n\t overflow: auto;\n\t resize: none;\n} \n#flightplan-help {\n\tz-index: 1000;\n\tposition: absolute;\n\ttop: 190px;\n\tleft: 90px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tborder: 1px solid #000;\n\tfont-size: 11px;\n\tfont-weight: 500;\n\tbackground-color: rgba(0, 0, 0, 0.55);\n\tcolor: #fff;\n\tborder-radius: 2px;\n\tpadding: 10px;\n\tdisplay: none;\n\twidth: 130px;\n}\n#flightplan-button {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 90px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tbackground-color: rgba(255,255,255,0.70);\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n}\n#plane-panel {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 190px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tborder-radius: 2px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n}\n#followThePlane-button {\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#flightplan-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n#flightplan-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#followThePlane-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#followThePlane-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n.labelsAirport {\n\tcolor: darkblue;\n\tbackground-color: white;\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\n\tfont-size: 12px;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 38px;\n\tborder: 2px solid black;\n\twhite-space: nowrap;\n}\n.labelsWaypoint {\n\tcolor: black;\n\tbackground-color: lightgray;\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\n\tfont-size: 11px;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 50px;\n\tborder: 2px solid black;\n\twhite-space: nowrap;\n}\n.labelsInfoRoute {\n\tcolor: black;\n\tbackground-color: white;\n\tfont-family: \"Lucida Grande\", \"Arial\", sans-serif;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\ttext-align: center;\n\tmin-width: 70px;\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px;\n\tborder: 2px solid blue;\n\twhite-space: nowrap;\n\tborder-radius: 23px;\n}\n.runwayTable {\n\tfont-family: \"Arial\", sans-serif;\n\tfont-size: 12px;\n}\n.runwayInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.vorTable {\n\tfont-family: \"Arial\", sans-serif;\n\tfont-size: 12px;\n}\n.vorInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.routeInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.planeDataInfo {\n\tcolor: blue;\n\tfont-weight: bold;\n}\n.planeDataInfoRed {\n\tcolor: red;\n\tfont-weight: bold;\n}\n.rotate {\n     -webkit-transform : rotate(66deg); \n    -moz-transform : rotate(66deg); \n    -ms-transform : rotate(66deg); \n    -o-transform : rotate(66deg); \n    transform : rotate(66deg); \n}\n#flightplan-info {\n    z-index: 9999;\n    position: absolute;\n    top: 190px;\n    left: 253px;\n    font-family: Verdana, Arial, sans-serif;\n    text-decoration: none;\n    box-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n    border: 1px solid #000;\n    font-size: 12px;\n    font-weight: 500;\n    background-color: rgba(0, 0, 0, 0.75);\n    color: yellow;\n    border-radius: 2px;\n    padding: 10px;\n    display: none;\n    width: 430px;\n}\n.flightPlan-info-label {\n    font-family: monospace;\n    font-size: 13px;\n    color: white;\n}\n#flightplan-loading {\n\tposition: absolute; \n\ttop: 73px; \n\tleft: 10px; \n\tz-index: 9999;\n\tcolor: #454545;\n\tfont-family: monospace;\n\tfont-size:15px;\n\tfont-weight: bold;\n}\n#labelRoute-button {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 300px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tbackground-color: rgba(0,0,0,0.70);\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tcolor: #fff;\n}\n#labelRoute-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n#labelRoute-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}\n#labelWaypoint-button {\n\tposition: absolute;\n\ttop: 28px;\n\tleft: 390px;\n\tfont-family: Verdana, Arial, sans-serif;\n\ttext-decoration: none;\n\tborder: 1px solid #999;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tbackground-color: rgba(0,0,0,0.70);\n\tborder-radius: 2px;\n\tpadding: 5px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tbox-shadow: 4px 4px 4px 0px rgba(50, 50, 50, 0.75);\n\tcolor: #fff;\n}\n#labelWaypoint-button.down {\n\tbackground-color: rgba(0,0,0,0.70);\n\tcolor: #fff;\n}\n#labelWaypoint-button.up {\n\tbackground-color: rgba(255,255,255,0.70);\n\tcolor: #000;\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTkzNGNjZjIzY2QzODUwNzZmYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWZyb250LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcz81ODdhIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFwLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0Esa0RBQW1ELGlCQUFpQixjQUFjLGVBQWUscUJBQXFCLEdBQUcsZUFBZSx1QkFBdUIsY0FBYyxlQUFlLGVBQWUsaUJBQWlCLHVCQUF1Qix1REFBdUQsNENBQTRDLDBCQUEwQiw4QkFBOEIsOEJBQThCLGdCQUFnQixpQkFBaUIsa0JBQWtCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsZUFBZSx1QkFBdUIsYUFBYSxhQUFhLGVBQWUsaUJBQWlCLHVCQUF1Qix1REFBdUQsNENBQTRDLDBCQUEwQiw4QkFBOEIsOEJBQThCLGdCQUFnQixlQUFlLGtCQUFrQix1QkFBdUIsb0JBQW9CLHFCQUFxQixHQUFHLG9CQUFvQiwrQkFBK0IsNkNBQTZDLHFCQUFxQix1QkFBdUIsb0JBQW9CLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsdUJBQXVCLGVBQWUsZUFBZSw0Q0FBNEMsMEJBQTBCLHVEQUF1RCwyQkFBMkIsb0JBQW9CLHFCQUFxQiwwQ0FBMEMsZ0JBQWdCLHVCQUF1QixrQkFBa0Isa0JBQWtCLGlCQUFpQixHQUFHLHNCQUFzQix1QkFBdUIsY0FBYyxlQUFlLDRDQUE0QywwQkFBMEIsMkJBQTJCLG9CQUFvQixxQkFBcUIsNkNBQTZDLHVCQUF1QixpQkFBaUIsb0JBQW9CLHVCQUF1Qix1REFBdUQsR0FBRyxnQkFBZ0IsdUJBQXVCLGNBQWMsZ0JBQWdCLDRDQUE0QywwQkFBMEIsb0JBQW9CLHFCQUFxQix1QkFBdUIsb0JBQW9CLHVCQUF1QixHQUFHLDBCQUEwQiw0Q0FBNEMsMEJBQTBCLDJCQUEyQixvQkFBb0IscUJBQXFCLHVCQUF1QixpQkFBaUIsb0JBQW9CLHVCQUF1Qix1REFBdUQsNkNBQTZDLGdCQUFnQixHQUFHLDJCQUEyQix1Q0FBdUMsZ0JBQWdCLEdBQUcseUJBQXlCLDZDQUE2QyxnQkFBZ0IsR0FBRyw2QkFBNkIsNkNBQTZDLGdCQUFnQixHQUFHLCtCQUErQix1Q0FBdUMsZ0JBQWdCLEdBQUcsa0JBQWtCLG9CQUFvQiw0QkFBNEIsMERBQTBELG9CQUFvQixzQkFBc0IsdUJBQXVCLGdCQUFnQiw0QkFBNEIsd0JBQXdCLEdBQUcsbUJBQW1CLGlCQUFpQixnQ0FBZ0MsMERBQTBELG9CQUFvQixzQkFBc0IsdUJBQXVCLGdCQUFnQiw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLGlCQUFpQiw0QkFBNEIsMERBQTBELG9CQUFvQixxQkFBcUIsdUJBQXVCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLHlCQUF5QiwyQkFBMkIsd0JBQXdCLHdCQUF3QixHQUFHLGdCQUFnQix1Q0FBdUMsb0JBQW9CLEdBQUcsZUFBZSxnQkFBZ0Isc0JBQXNCLEdBQUcsYUFBYSx1Q0FBdUMsb0JBQW9CLEdBQUcsWUFBWSxnQkFBZ0Isc0JBQXNCLEdBQUcsY0FBYyxnQkFBZ0Isc0JBQXNCLEdBQUcsa0JBQWtCLGdCQUFnQixzQkFBc0IsR0FBRyxxQkFBcUIsZUFBZSxzQkFBc0IsR0FBRyxXQUFXLHlDQUF5QyxzQ0FBc0MscUNBQXFDLG9DQUFvQyxpQ0FBaUMsSUFBSSxvQkFBb0Isb0JBQW9CLHlCQUF5QixpQkFBaUIsa0JBQWtCLDhDQUE4Qyw0QkFBNEIseURBQXlELDZCQUE2QixzQkFBc0IsdUJBQXVCLDRDQUE0QyxvQkFBb0IseUJBQXlCLG9CQUFvQixvQkFBb0IsbUJBQW1CLEdBQUcsMEJBQTBCLDZCQUE2QixzQkFBc0IsbUJBQW1CLEdBQUcsdUJBQXVCLHVCQUF1QixlQUFlLGdCQUFnQixtQkFBbUIsbUJBQW1CLDJCQUEyQixtQkFBbUIsc0JBQXNCLEdBQUcsc0JBQXNCLHVCQUF1QixjQUFjLGdCQUFnQiw0Q0FBNEMsMEJBQTBCLDJCQUEyQixvQkFBb0IscUJBQXFCLHVDQUF1Qyx1QkFBdUIsaUJBQWlCLG9CQUFvQix1QkFBdUIsdURBQXVELGdCQUFnQixHQUFHLDJCQUEyQix1Q0FBdUMsZ0JBQWdCLEdBQUcseUJBQXlCLDZDQUE2QyxnQkFBZ0IsR0FBRyx5QkFBeUIsdUJBQXVCLGNBQWMsZ0JBQWdCLDRDQUE0QywwQkFBMEIsMkJBQTJCLG9CQUFvQixxQkFBcUIsdUNBQXVDLHVCQUF1QixpQkFBaUIsb0JBQW9CLHVCQUF1Qix1REFBdUQsZ0JBQWdCLEdBQUcsOEJBQThCLHVDQUF1QyxnQkFBZ0IsR0FBRyw0QkFBNEIsNkNBQTZDLGdCQUFnQixHQUFHOztBQUV2dU07Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvQkFBb0Isd0NBQXdDO0FBQ3ZHO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esb0k7QUFDQTtBQUNBLGdEO0FBQ0E7QUFDQSxNQUFNO0FBQ04sRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EseUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNLE1BQU0sbUJBQW1CLE1BQU07QUFDNUQsa0JBQWtCLFFBQVE7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsTUFBTSxPQUFPLE1BQU07QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxNQUFNLE9BQU8sTUFBTTtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU0sTUFBTSxNQUFNLE1BQU07QUFDMUM7QUFDQSw2QkFBNkI7QUFDN0Isa0JBQWtCLE1BQU0sTUFBTSxNQUFNLE1BQU07QUFDMUM7QUFDQSxrQkFBa0IsTUFBTSxNQUFNLE1BQU0sTUFBTTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0sTUFBTTtBQUN4QztBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0M7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGNBQWM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4REFBOEQsaUJBQWlCO0FBQy9FLDhEQUE4RDtBQUM5RCw0STtBQUNBOztBQUVBO0FBQ0Esb0hBQW9ILFM7QUFDcEgsOEhBQThIO0FBQzlIOztBQUVBLDZEQUE2RDtBQUM3RCx1RkFBdUYsWUFBWSxNQUFNO0FBQ3pHLDZGQUE2RjtBQUM3Rjs7QUFFQTtBQUNBLHVJQUF1SSxVO0FBQ3ZJO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGdGQUFnRixTQUFTLE1BQU07QUFDL0Y7O0FBRUEsOERBQThEO0FBQzlELDJHQUEyRyxTO0FBQzNHLDJHQUEyRztBQUMzRzs7QUFFQSwyR0FBMkc7QUFDM0csMkdBQTJHO0FBQzNHOztBQUVBLDhEQUE4RDtBQUM5RDtBQUNBLG9IO0FBQ0E7O0FBRUEsZ0hBQWdIO0FBQ2hILGlJQUFpSTtBQUNqSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEJBQThCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEIiwiZmlsZSI6ImZyb250LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU5MzRjY2YyM2NkMzg1MDc2ZmI4IiwiaW1wb3J0ICcuL2Nzcy9tYXAuY3NzJztcbi8vaW1wb3J0ICcuL2pzL251bWVyYWwubWluLmpzJztcbi8vaW1wb3J0ICcuL2pzL21hcmtlcndpdGhsYWJlbC5qcyc7XG4vL2ltcG9ydCAnLi9qcy9qcXVlcnktYmxpbmsuanMnO1xuaW1wb3J0ICcuL2pzL21hcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtZnJvbnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9tYXAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksICNtYXAtY2FudmFzIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI3BhbmVsLWZwIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA2MHB4O1xcblxcdGxlZnQ6IDkwcHg7XFxuXFx0ei1pbmRleDogNTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgIzU5NTk1OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTAwMDBFO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdHdpZHRoOiA2MDBweDtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuI2Vycm9yQm94IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA5MCU7XFxuXFx0bGVmdDogMiU7XFxuXFx0ei1pbmRleDogNTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgIzU5NTk1OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTAwMDBFO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbiNib3hGbGlnaHRQbGFuIHtcXG5cXHQgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHQgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcdCBmb250LXNpemU6IDE0cHg7XFxuXFx0IGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdCBvdmVyZmxvdzogYXV0bztcXG5cXHQgcmVzaXplOiBub25lO1xcbn0gXFxuI2ZsaWdodHBsYW4taGVscCB7XFxuXFx0ei1pbmRleDogMTAwMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAxOTBweDtcXG5cXHRsZWZ0OiA5MHB4O1xcblxcdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcXG5cXHRmb250LXNpemU6IDExcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0d2lkdGg6IDEzMHB4O1xcbn1cXG4jZmxpZ2h0cGxhbi1idXR0b24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDI4cHg7XFxuXFx0bGVmdDogOTBweDtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcwKTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxufVxcbiNwbGFuZS1wYW5lbCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMjhweDtcXG5cXHRsZWZ0OiAxOTBweDtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jZm9sbG93VGhlUGxhbmUtYnV0dG9uIHtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxuXFx0Y29sb3I6ICMwMDA7XFxufVxcbiNmbGlnaHRwbGFuLWJ1dHRvbi5kb3duIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcblxcdGNvbG9yOiAjZmZmO1xcbn1cXG4jZmxpZ2h0cGxhbi1idXR0b24udXAge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxuXFx0Y29sb3I6ICMwMDA7XFxufVxcbiNmb2xsb3dUaGVQbGFuZS1idXR0b24udXAge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxuXFx0Y29sb3I6ICMwMDA7XFxufVxcbiNmb2xsb3dUaGVQbGFuZS1idXR0b24uZG93biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG59XFxuLmxhYmVsc0FpcnBvcnQge1xcblxcdGNvbG9yOiBkYXJrYmx1ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDM4cHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmxhYmVsc1dheXBvaW50IHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxMXB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNTBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubGFiZWxzSW5mb1JvdXRlIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWluLXdpZHRoOiA3MHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmx1ZTtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdGJvcmRlci1yYWRpdXM6IDIzcHg7XFxufVxcbi5ydW53YXlUYWJsZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcbn1cXG4ucnVud2F5SW5mbyB7XFxuXFx0Y29sb3I6IGJsdWU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi52b3JUYWJsZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcbn1cXG4udm9ySW5mbyB7XFxuXFx0Y29sb3I6IGJsdWU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5yb3V0ZUluZm8ge1xcblxcdGNvbG9yOiBibHVlO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucGxhbmVEYXRhSW5mbyB7XFxuXFx0Y29sb3I6IGJsdWU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5wbGFuZURhdGFJbmZvUmVkIHtcXG5cXHRjb2xvcjogcmVkO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucm90YXRlIHtcXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxuICAgIC1tb3otdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxuICAgIC1tcy10cmFuc2Zvcm0gOiByb3RhdGUoNjZkZWcpOyBcXG4gICAgLW8tdHJhbnNmb3JtIDogcm90YXRlKDY2ZGVnKTsgXFxuICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSg2NmRlZyk7IFxcbn1cXG4jZmxpZ2h0cGxhbi1pbmZvIHtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE5MHB4O1xcbiAgICBsZWZ0OiAyNTNweDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDQzMHB4O1xcbn1cXG4uZmxpZ2h0UGxhbi1pbmZvLWxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNmbGlnaHRwbGFuLWxvYWRpbmcge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuXFx0dG9wOiA3M3B4OyBcXG5cXHRsZWZ0OiAxMHB4OyBcXG5cXHR6LWluZGV4OiA5OTk5O1xcblxcdGNvbG9yOiAjNDU0NTQ1O1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0Zm9udC1zaXplOjE1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNsYWJlbFJvdXRlLWJ1dHRvbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMjhweDtcXG5cXHRsZWZ0OiAzMDBweDtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxuXFx0Y29sb3I6ICNmZmY7XFxufVxcbiNsYWJlbFJvdXRlLWJ1dHRvbi5kb3duIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcblxcdGNvbG9yOiAjZmZmO1xcbn1cXG4jbGFiZWxSb3V0ZS1idXR0b24udXAge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxuXFx0Y29sb3I6ICMwMDA7XFxufVxcbiNsYWJlbFdheXBvaW50LWJ1dHRvbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMjhweDtcXG5cXHRsZWZ0OiAzOTBweDtcXG5cXHRmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcwKTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCA0cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XFxuXFx0Y29sb3I6ICNmZmY7XFxufVxcbiNsYWJlbFdheXBvaW50LWJ1dHRvbi5kb3duIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzApO1xcblxcdGNvbG9yOiAjZmZmO1xcbn1cXG4jbGFiZWxXYXlwb2ludC1idXR0b24udXAge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43MCk7XFxuXFx0Y29sb3I6ICMwMDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvY3NzL21hcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHBlcmlvZCA9IDEwMDA7IC8vIHRpbWUgYmV0d2VlbiByZWZyZXNoZXMgaW4gbXNcblxudmFyIHBvc0NsaWVudCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDEuNTQ2MTk5LCAyLjEwODYyMylcbmlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgXHRwb3NDbGllbnQgPSB7XG4gICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcbiAgICAgIH07XG4gICAgfSk7XG59XG52YXIgbWFwT3B0aW9ucyA9IHtcblx0Y2VudGVyIDoge1xuXHRcdGxhdCA6IDAsXG5cdFx0bG5nIDogMFxuXHR9LFxuXHR6b29tIDogOSxcblx0bWFwVHlwZUlkIDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlRFUlJBSU4sXG5cdGNlbnRlciA6IHBvc0NsaWVudFxufTtcbnZhciBtYXA7XG52YXIgcG9seU9wdGlvbnMgPSB7XG5cdGdlb2Rlc2ljIDogdHJ1ZSxcblx0c3Ryb2tlQ29sb3IgOiAnIzAwMDAwMCcsXG5cdHN0cm9rZU9wYWNpdHkgOiAwLjgsXG5cdHN0cm9rZVdlaWdodCA6IDNcbn07XG52YXIgbWFya2VyT3B0aW9ucyA9IHtcblx0aWNvbiA6IHtcblx0XHRwYXRoIDogXCJNMzYyLjk4NSw0MzAuNzI0bC0xMC4yNDgsNTEuMjM0bDYyLjMzMiw1Ny45NjlsLTMuMjkzLDI2LjE0NSBsLTcxLjM0NS0yMy41OTlsLTIuMDAxLDEzLjA2OWwtMi4wNTctMTMuNTI5bC03MS4yNzgsXCJcblx0XHRcdFx0KyBcIjIyLjkyOGwtNS43NjItMjMuOTg0bDY0LjA5Ny01OS4yNzFsLTguOTEzLTUxLjM1OWwwLjg1OC0xMTQuNDMgbC0yMS45NDUtMTEuMzM4bC0xODkuMzU4LFwiXG5cdFx0XHRcdCsgXCJcIlxuXHRcdFx0XHQrIFwiODguNzZsLTEuMTgtMzIuMjYybDIxMy4zNDQtMTgwLjA4bDAuODc1LTEwNy40MzZsNy45NzMtMzIuMDA1bDcuNjQyLTEyLjA1NGw3LjM3Ny0zLjk1OGw5LjIzOCxcIlxuXHRcdFx0XHQrIFwiMy42NSBsNi4zNjcsMTQuOTI1bDcuMzY5LDMwLjM2M3YxMDYuMzc1bDIxMS41OTIsMTgyLjA4MmwtMS40OTYsMzIuMjQ3bC0xODguNDc5LTkwLjYxbC0yMS42MTYsMTAuMDg3bC0wLjA5NCwxMTUuNjg0XCIsXG5cdFx0c2NhbGUgOiAwLjA4LFxuXHRcdGZpbGxPcGFjaXR5IDogMSxcblx0XHRhbmNob3IgOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMzQwLCAzNDApLFxuXHRcdHN0cm9rZVdlaWdodCA6IDAuNVxuXHR9XG59O1xuXG52YXIgaWNvbkFpcnBvcnQgPSB7XG5cdC8vdXJsIDogJ2FpcnBvcnQucG5nJyxcblx0dXJsIDogJy4vaW1hZ2VzL2FpcnBvcnQucG5nJyxcblx0c2l6ZSA6IG5ldyBnb29nbGUubWFwcy5TaXplKDMwLCA1MCksXG5cdG9yaWdpbiA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcblx0YW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDE1LCA1MClcbn07XG5cbnZhciBpY29uV2F5cG9pbnQgPSB7XG5cdHBhdGggOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkNJUkNMRSxcblx0c2NhbGUgOiA2LFxuXHRzdHJva2VDb2xvciA6ICcjMDAwMEZGJyxcblx0c3Ryb2tlT3BhY2l0eSA6IDEsXG5cdHN0cm9rZVdlaWdodCA6IDMsXG5cdGZpbGxDb2xvciA6ICd3aGl0ZScsXG5cdGZpbGxPcGFjaXR5IDogMSxcbn07XG5cbnZhciBpY29uTGFiZWxSb3V0ZSA9IHtcblx0cGF0aCA6IFwibTk2LDQ0XCIsXG5cdHNjYWxlIDogMSxcblx0c3Ryb2tlQ29sb3IgOiAnI0ZGRkZGRicsXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxuXHRzdHJva2VXZWlnaHQgOiAxLFxuXHRmaWxsQ29sb3IgOiAnd2hpdGUnLFxuXHRmaWxsT3BhY2l0eSA6IDEwMCxcbn07XG5cbnZhciBpY29uVk9SID0ge1xuXHRwYXRoIDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5DSVJDTEUsXG5cdHNjYWxlIDogNyxcblx0c3Ryb2tlQ29sb3IgOiAnIzAwMDAwMCcsXG5cdHN0cm9rZU9wYWNpdHkgOiAxLFxuXHRzdHJva2VXZWlnaHQgOiAzLFxuXHRmaWxsQ29sb3IgOiAneWVsbG93Jyxcblx0ZmlsbE9wYWNpdHkgOiAxLFxufTtcblxudmFyIGljb25OREIgPSB7XG5cdHBhdGggOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkNJUkNMRSxcblx0c2NhbGUgOiA3LFxuXHRzdHJva2VDb2xvciA6ICcjMjYyNjI2Jyxcblx0c3Ryb2tlT3BhY2l0eSA6IDEsXG5cdHN0cm9rZVdlaWdodCA6IDMsXG5cdGZpbGxDb2xvciA6ICcjRkZEMDVDJyxcblx0ZmlsbE9wYWNpdHkgOiAxLFxufTtcblxudmFyIHBsYW5lTGlzdCA9IHt9O1xudmFyIHJlZnJlc2hDb250cm9sUGFuZWwgPSBmYWxzZTtcbnZhciBwbGFuZVRvRm9sbG93ID0gbnVsbDtcbnZhciBjb2xvcnMgPSBbIFwiYmx1ZVwiLFwiIzI2NzY0RVwiLCBcIiNGMDg1MjZcIiwgXCIjOUNGRjU0XCIsIFwiIzcyMUI0OVwiLCBcIiNBN0Q4RjhcIixcIiMyQUZEQkNcIiwgXCIjRkJFODcwXCIsIFwiIzcxMTMwMlwiLCBcIiMyNTcyQzJcIiwgXCIjMUMyNzFEXCIsIFwiIzYzMkU4NVwiLFxuXHRcdFwiIzFFNUY3QVwiLCBcIiNEOEIyRjVcIiwgXCIjRDMwN0EyXCIsIFwiI0YzOTFCNVwiLCBcIiNGMTgwRjVcIiwgXCIjM0ExRTJFXCIsXCIjQUU3NzA3XCIsIFwiIzNFM0QwRVwiLCBcIiM2QUIwNkVcIiBdO1xudmFyIGNvbG9yX2luZGV4ID0gMDtcbnZhciBuYXZNYXA7XG52YXIgZmxpZ2h0UGxhbiA9IHt9O1xudmFyIGZsaWdodFBhdGg7IC8vIGFuIG9iamVjdCBnb29nbGUubWFwcy5Qb2x5bGluZSAtIHJlcHJlc2VudGluZyB0aGUgRmxpZ2h0IFBsYW5cbnZhciBtYXJrZXJzID0gW107XG52YXIgcm91dGVMYWJlbHNPZmZTZXQgPSBbXTtcbnZhciBtYXJrZXJzTGFiZWxSb3V0ZSA9IFtdO1xudmFyIG1hcmtlcnNXYXlwb2ludCAgID0gW107XG52YXIgZWxJbmZvQm94UGxhbmU7XG52YXIgY2hhc2VBaXJwbGFuZSA9IGZhbHNlO1xuXG4kLmFqYXhTZXR1cCh7XG5cdGNhY2hlIDogZmFsc2Vcbn0pO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuXG5cdG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwgbWFwT3B0aW9ucyk7XG5cblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnZHJhZ3N0YXJ0JywgZnVuY3Rpb24oKSB7XG5cdFx0JCgnI25vZm9jdXMnKS5jbGljaygpO1xuXHR9KTtcblxuXHQkKCdib2R5Jykua2V5ZG93bihmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUua2V5Q29kZSA9PSAxOTIpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRvZ2dsZUZsaWdodFBhbmVsKCk7XG5cdFx0fVxuXHRcdGlmIChlLmtleUNvZGUgPT0gMTkpIHtcblx0XHRcdCQuZ2V0SlNPTihcInBhdXNlXCIpLmRvbmUoZnVuY3Rpb24oZGF0YSl7fSkuZXJyb3IoZnVuY3Rpb24oKSB7c2hvd0Vycm9yKCdOb3QgYWJsZSB0byBQYXVzZSBYLVBsYW5lLicpfSk7XG5cdFx0fVxuXHR9KTtcblx0XG5cdCBtYXAuYWRkTGlzdGVuZXIoJ3pvb21fY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xuXHQgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdCAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvdXRlTGFiZWxzT2ZmU2V0Lmxlbmd0aDsgaSsrKSB7XG5cdCAgICBcdCAgIHZhciBkaXN0TGFiZWxSb3V0ZSA9IDI0MDAwO1xuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTYgKSB7XG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSA1MDtcblx0ICAgIFx0ICAgfSBlbHNlXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxNSApIHtcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDUwMDtcblx0ICAgIFx0ICAgfSBlbHNlXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSAxMiApIHtcblx0ICAgIFx0XHQgICBkaXN0TGFiZWxSb3V0ZSA9IDUwMDA7XG5cdCAgICBcdCAgIH0gZWxzZVxuXHQgICAgXHQgICBpZiAoIG1hcC5nZXRab29tKCkgPj0gMTAgKSB7XG5cdCAgICBcdFx0ICAgZGlzdExhYmVsUm91dGUgPSAxMjAwMDtcblx0ICAgIFx0ICAgfSBlbHNlXG5cdCAgICBcdCAgIGlmICggbWFwLmdldFpvb20oKSA+PSA4ICkge1xuXHQgICAgXHRcdCAgIGRpc3RMYWJlbFJvdXRlID0gMTYwMDA7XG5cdCAgICBcdCAgIH1cblx0ICAgIFx0ICAgdmFyIGhkZ0xhYmVsID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKHJvdXRlTGFiZWxzT2ZmU2V0W2ldLmxhdGxuZywgcm91dGVMYWJlbHNPZmZTZXRbaV0ubmV4dExhdExuZyk7IFxuXHQgICAgXHQgICB2YXIgb2Zmc2V0ID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQocm91dGVMYWJlbHNPZmZTZXRbaV0ubGF0bG5nLCBkaXN0TGFiZWxSb3V0ZSwgaGRnTGFiZWwsIDYzNzEwMDApO1xuXHQgICAgXHQgICBtYXJrZXJzTGFiZWxSb3V0ZVtpXS5wb3NpdGlvbiA9IG9mZnNldDsgXG4gICAgXHQgICB9XG5cdCAgICB9LDEpO1xuXHR9KTtcblx0IFxuXHR1cGRhdGVQb3NpdGlvbigpO1xuXHRzZXRJbnRlcnZhbCh1cGRhdGVQb3NpdGlvbiwgcGVyaW9kKTtcblx0c2V0SW50ZXJ2YWwoY2hlY2tGbGlnaHRQbGFuQm94QW5kTG9hZCwgMjAwMCk7XG5cblx0Ly8gbmF2IGRhdGEgb3ZlcmxheXNcblx0LypuYXZNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuSW1hZ2VNYXBUeXBlKHtcblx0XHRnZXRUaWxlVXJsIDogZnVuY3Rpb24oY29vcmQsIHpvb20pIHtcblx0XHRcdHRpbGVTaXplID0gMjU2IC8gTWF0aC5wb3coMiwgem9vbSk7XG5cdFx0XHR3ZXN0ID0gY29vcmQueCAqIHRpbGVTaXplO1xuXHRcdFx0ZWFzdCA9IHdlc3QgKyB0aWxlU2l6ZTtcblx0XHRcdG5vcnRoID0gY29vcmQueSAqIHRpbGVTaXplO1xuXHRcdFx0c291dGggPSBub3J0aCArIHRpbGVTaXplO1xuXG5cdFx0XHRub3J0aEVhc3QgPSBtYXAuZ2V0UHJvamVjdGlvbigpLmZyb21Qb2ludFRvTGF0TG5nKFxuXHRcdFx0XHRcdG5ldyBnb29nbGUubWFwcy5Qb2ludChlYXN0LCBub3J0aCkpO1xuXHRcdFx0c291dGhXZXN0ID0gbWFwLmdldFByb2plY3Rpb24oKS5mcm9tUG9pbnRUb0xhdExuZyhcblx0XHRcdFx0XHRuZXcgZ29vZ2xlLm1hcHMuUG9pbnQod2VzdCwgc291dGgpKTtcblxuXHRcdFx0Ly8gaHR0cDovL3gtcGxhbmUtbWFwLmZvdWMubmV0L25hdi5waHA/bm9ydGg9LTI0LjUyNzElMjAmc291dGg9LTI1Ljc5OTklMjAmZWFzdD0tNDYuNDA2MyUyMCZ3ZXN0PS00Ny44MTI1XG5cdFx0XHQvLyBjb25zb2xlLmxvZygpO1xuXG5cdFx0XHRyZXR1cm4gWyAnaHR0cDovL3gtcGxhbmUtbWFwLmZvdWMubmV0L25hdi5waHA/bm9ydGg9Jyxcblx0XHRcdFx0XHRub3J0aEVhc3QubGF0KCkudG9GaXhlZCg0KSwgJyZzb3V0aD0nLFxuXHRcdFx0XHRcdHNvdXRoV2VzdC5sYXQoKS50b0ZpeGVkKDQpLCAnJmVhc3Q9Jyxcblx0XHRcdFx0XHRub3J0aEVhc3QubG5nKCkudG9GaXhlZCg0KSwgJyZ3ZXN0PScsXG5cdFx0XHRcdFx0c291dGhXZXN0LmxuZygpLnRvRml4ZWQoNCkgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiAsICcmdHlwZT1BUFQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXS5qb2luKCcnKTtcblx0XHR9LFxuXHRcdHRpbGVTaXplIDogbmV3IGdvb2dsZS5tYXBzLlNpemUoMjU2LCAyNTYpLFxuXHRcdG1pblpvb20gOiA2LFxuXHRcdG1heFpvb20gOiAxMlxuXHR9KTtcblxuXHRtYXAub3ZlcmxheU1hcFR5cGVzLnB1c2gobmF2TWFwKTtcblx0bmF2TWFwLnNldE9wYWNpdHkoMCk7Ki9cbn1cblxudmFyIGZsaWdodHBsYW5UZXh0ID0gJ25vbmUnO1xuZnVuY3Rpb24gY2hlY2tGbGlnaHRQbGFuQm94QW5kTG9hZCgpIHtcblx0aWYgKCQoJyNwYW5lbC1mcCcpLmlzKFwiOmhpZGRlblwiKSA9PSBmYWxzZSkge1xuXHRcdHZhciB0ZXh0ID0gJCgndGV4dGFyZWEjYm94RmxpZ2h0UGxhbicpLnZhbCgpO1xuXHRcdGlmICh0ZXh0ICE9IGZsaWdodHBsYW5UZXh0KSB7XG5cdFx0XHRmbGlnaHRwbGFuVGV4dCA9IHRleHQ7XG5cdFx0XHR2YXIgcGFyYW1zID0ge307XG5cdFx0XHRcblx0XHRcdGlmIChmbGlnaHRQYXRoICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRmbGlnaHRQYXRoLnNldE1hcChudWxsKTtcblx0XHRcdH1cblx0XHRcdGNsZWFyTWFya2VycygpO1xuXHRcdFx0XG5cdFx0XHRpZiAoIGZsaWdodHBsYW5UZXh0Lmxlbmd0aCA+IDggKSB7XG5cdFx0XHRcdHZhciBncm91cHMgPSBmbGlnaHRwbGFuVGV4dC50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0dmFyIHdheXBvaW50cyA9IFwiXCI7XG5cdFx0XHRcdGlmICggZ3JvdXBzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdCAgICBmb3IodmFyIGkgPSAxOyBpIDwgKGdyb3Vwcy5sZW5ndGgtMSk7IGkrKykge1xuXHRcdFx0XHRcdCAgIHdheXBvaW50cyArPSBncm91cHNbaV07XG5cdFx0XHRcdCAgICAgICBpZiAod2F5cG9pbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0ICAgICAgICBcdHdheXBvaW50cyArPSBcIitcIjtcblx0XHRcdFx0ICAgIFx0fVxuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtcyA9IHtcblx0XHRcdFx0ICAgIGRlcGFydHVyZSA6IGdyb3Vwc1swXSxcblx0XHRcdFx0ICAgIHdheXBvaW50cyA6IHdheXBvaW50cyxcblx0XHRcdFx0ICAgIGRlc3RpbmF0aW9uIDogZ3JvdXBzW2dyb3Vwcy5sZW5ndGggLSAxXVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKHRydWUpO1xuXHRcdFx0JC5nZXRKU09OKFwiZmxpZ2h0cGxhblwiLHBhcmFtc1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZGF0YSkpIHtcblx0XHRcdFx0XHRcdFx0c2hvd0Vycm9yKFwiRXJyb3IgbG9hZGluZyBGbGlnaHQgUGxhbi4gTm8gY29udGVudCB3YXMgcmV0dXJuZWQuXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZmxpZ2h0UGxhbiA9IGRhdGE7XG5cdFx0XHRcdFx0XHRsb2FkRmxpZ2h0UGxhbigpO1xuXHRcdFx0XHRcdFx0bG9hZGluZ0ZsaWdodFBsYW5TdGF0ZShmYWxzZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5lcnJvcihcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2hvd0Vycm9yKCdQbGVhc2UgY2hlY2sgdGhlIGNvbm5lY3Rpb24gd2l0aCBodHRwOi8vc2VydmVyOnBvcnQvZmxpZ2h0cGxhbiwgaXMgbm90IHdvcmtpbmcuJylcblx0XHRcdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsb2FkaW5nRmxpZ2h0UGxhblN0YXRlKGxvYWRpbmcpIHtcblx0aWYgKCBsb2FkaW5nICkge1xuXHRcdCQoXCIjZmxpZ2h0cGxhbi1sb2FkaW5nXCIpLnNob3coKTtcblx0XHQkKFwiI2JveEZsaWdodFBsYW5cIikuY3NzKCdjb2xvcicsICdsaWdodGdyYXknKTtcblx0fSBlbHNlIHtcblx0XHQkKFwiI2ZsaWdodHBsYW4tbG9hZGluZ1wiKS5oaWRlKCk7XG5cdFx0JChcIiNib3hGbGlnaHRQbGFuXCIpLmNzcygnY29sb3InLCAnYmxhY2snKTtcblx0fVxufVxuXG5mdW5jdGlvbiBsb2FkRmxpZ2h0UGxhbigpIHtcblx0Ly8gTG9hZGluZyBmbGlnaHRQbGFuQ29vcmRpbmF0ZXMgdmFyaWFibGVcblx0dmFyIGRlcGFydHVyZUxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmxpZ2h0UGxhbi5kZXBhcnR1cmUubGF0aXR1ZGUsIGZsaWdodFBsYW4uZGVwYXJ0dXJlLmxvbmdpdHVkZSk7XG5cdHZhciBkZXN0aW5hdGlvbkxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5sYXRpdHVkZSwgZmxpZ2h0UGxhbi5kZXN0aW5hdGlvbi5sb25naXR1ZGUpOyBcblx0dmFyIGFyckNvb3JkID0gbmV3IEFycmF5KCk7XG5cdGFyckNvb3JkWzBdID0gZGVwYXJ0dXJlTGF0TG5nO1xuXHR2YXIgdG90YWxXYXlwb2ludHMgPSAwO1xuXHR2YXIgdG90YWxEaXN0YW5jZSA9IDA7XG5cdHdoaWxlICh0b3RhbFdheXBvaW50cyA8IGZsaWdodFBsYW4ud2F5cG9pbnRzLmxlbmd0aCkge1xuXHRcdGFyckNvb3JkW3RvdGFsV2F5cG9pbnRzICsgMV0gPSBcblx0XHRcdG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG5cdFx0XHRcdFx0ZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxhdGl0dWRlLGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5sb25naXR1ZGVcblx0XHRcdCk7XG5cdFx0Ly8gTWFyayB0aGUgV2F5cG9pbnRcblx0XHR3YXlwb2ludCA9IHtcblx0XHRcdGlkIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmlkLFxuXHRcdFx0bGF0bG5nIDogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmbGlnaHRQbGFuLndheXBvaW50c1t0b3RhbFdheXBvaW50c10ubGF0aXR1ZGUsZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLmxvbmdpdHVkZSksXG5cdFx0XHR0eXBlIDogZmxpZ2h0UGxhbi53YXlwb2ludHNbdG90YWxXYXlwb2ludHNdLnR5cGUsXG5cdFx0XHRkZXNjciA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5uYW1lLFxuXHRcdFx0ZnJlcSA6IGZsaWdodFBsYW4ud2F5cG9pbnRzW3RvdGFsV2F5cG9pbnRzXS5mcmVxdWVuY3lcblx0XHR9XG5cdFx0bWFya1dheXBvaW50KHdheXBvaW50KTtcblxuXHRcdHRvdGFsV2F5cG9pbnRzKys7XG5cdH1cblx0YXJyQ29vcmRbdG90YWxXYXlwb2ludHMgKyAxXSA9IGRlc3RpbmF0aW9uTGF0TG5nO1xuXHR2YXIgZmxpZ2h0UGxhbkNvb3JkaW5hdGVzID0gYXJyQ29vcmQ7XG5cblx0Ly8gTG9hZGluZyBGbGlnaHQgUGxhbiBQb2x5bGluZSAtIERyYXcgdGhlIGxpbmVcblx0ZmxpZ2h0UGF0aCA9IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZSh7XG5cdFx0cGF0aCA6IGZsaWdodFBsYW5Db29yZGluYXRlcyxcblx0XHRnZW9kZXNpYyA6IGZhbHNlLFxuXHRcdHN0cm9rZUNvbG9yIDogJyMwMDAwRkYnLFxuXHRcdHN0cm9rZU9wYWNpdHkgOiAwLjUsXG5cdFx0c3Ryb2tlV2VpZ2h0IDogNlxuXHR9KTtcblx0ZmxpZ2h0UGF0aC5zZXRNYXAobWFwKTtcblxuXHQvLyBNYXJrIGZvciB0aGUgQWlycG9ydCBEZXBhcnR1cmVcblx0ZGVwYXJ0dXJlID0ge1xuXHRcdGlkIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUuaWNhb0lkLFxuXHRcdG5hbWUgOiBmbGlnaHRQbGFuLmRlcGFydHVyZS5uYW1lLFxuXHRcdGxhdGxuZyA6IGRlcGFydHVyZUxhdExuZyxcblx0XHRydW53YXlzIDogZmxpZ2h0UGxhbi5kZXBhcnR1cmUuYXJyYXlSdW53YXlzXG5cdH1cblx0bWFya0FpcnBvcnQoZGVwYXJ0dXJlLCdkZXBhcnR1cmUnKTtcblxuXHQvLyBNYXJrIGZvciB0aGUgQWlycG9ydCBEZXN0aW5hdGlvblxuXHRkZXN0aW5hdGlvbiA9IHtcblx0XHRpZCA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24uaWNhb0lkLFxuXHRcdG5hbWUgOiBmbGlnaHRQbGFuLmRlc3RpbmF0aW9uLm5hbWUsXG5cdFx0bGF0bG5nIDogZGVzdGluYXRpb25MYXRMbmcsXG5cdFx0cnVud2F5cyA6IGZsaWdodFBsYW4uZGVzdGluYXRpb24uYXJyYXlSdW53YXlzXG5cdH1cblx0bWFya0FpcnBvcnQoZGVzdGluYXRpb24sJ2Rlc3RpbmF0aW9uJyk7XG5cdFxuXHQvLyBQYW5lbCBJbmZvIEZsaWdodCBQbGFuXG5cdCQoXCIjZnBJbmZvLURlcGFydHVyZVwiKS50ZXh0KGRlcGFydHVyZS5pZCArICcgLSAnICsgZGVwYXJ0dXJlLm5hbWUgKyAnIEFpcnBvcnQnKTtcblx0JChcIiNmcEluZm8tRGVzdGluYXRpb25cIikudGV4dChkZXN0aW5hdGlvbi5pZCArICcgLSAnICsgZGVzdGluYXRpb24ubmFtZSArICcgQWlycG9ydCcpO1xuXHRcblx0Ly8gTWFyayBMYWJlbHMgQmVhcmluZy9EaXN0YW5jZVxuXHR2YXIgaW5kZXggPSAwO1xuXHR3aGlsZSAoaW5kZXggPCBmbGlnaHRQbGFuLmluZm9Sb3V0ZS5sZW5ndGgpIHtcblx0XHR0b3RhbERpc3RhbmNlICs9IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZU5NO1xuXHRcdGxhYmVsUm91dGUgPSB7XG5cdFx0XHRkaXN0YW5jZU5NIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmRpc3RhbmNlTk0sXG5cdFx0XHRkaXN0YW5jZSA6IGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5kaXN0YW5jZSxcblx0XHRcdGJlYXJpbmcgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uYmVhcmluZyxcblx0XHRcdGJlYXJpbmdEZWdyZWUgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0uYmVhcmluZ0RlZ3JlZSxcblx0XHRcdGxhdGxuZyA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG5cdFx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubGF0aXR1ZGUsXG5cdFx0XHRcdFx0XHRmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubG9uZ2l0dWRlKSxcblx0XHRcdG5leHRMYXRsbmcgOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFxuXHRcdFx0XHRcdGZsaWdodFBsYW4uaW5mb1JvdXRlW2luZGV4XS5uZXh0TGF0aXR1ZGUsXG5cdFx0XHRcdFx0ZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLm5leHRMb25naXR1ZGUpLFxuXHRcdFx0cm90YXRlIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmJlYXJpbmcsXG5cdFx0XHRuZXh0UG9pbnQgOiBmbGlnaHRQbGFuLmluZm9Sb3V0ZVtpbmRleF0ubmV4dFBvaW50LFxuXHRcdFx0Y3VycmVudFBvaW50IDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmN1cnJlbnRQb2ludCxcblx0XHRcdGNvbXBhc3NIZWFkaW5nIDogZmxpZ2h0UGxhbi5pbmZvUm91dGVbaW5kZXhdLmNvbXBhc3NIZWFkaW5nXG5cdFx0fVxuXHRcdG1hcmtMYWJlbFJvdXRlKGxhYmVsUm91dGUpO1xuXHRcdGluZGV4Kys7XG5cdH1cblxuXHQkKFwiI2ZwSW5mby1Sb3V0ZURpc3RhbmNlXCIpXG5cdFx0LnRleHQoXG5cdFx0XHRudW1lcmFsKHRvdGFsRGlzdGFuY2UpLmZvcm1hdCgnMCwwJykgKyAnbm0nICsgJyAvICcgK1xuXHRcdFx0bnVtZXJhbCgodG90YWxEaXN0YW5jZSAqIDEuODUyKSkuZm9ybWF0KCcwLDAnKSArICdrbSdcblx0ICAgICAgICApO1xuXHQgICAgICAgIFxuXHR2YXIgcGFuRmxpZ2h0UGxhbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoZGVwYXJ0dXJlTGF0TG5nLCBkZXN0aW5hdGlvbkxhdExuZyk7XG5cdG1hcC5maXRCb3VuZHMocGFuRmxpZ2h0UGxhbik7XG5cdC8vbWFwLnBhblRvQm91bmRzKHBhbkZsaWdodFBsYW4pO1xuXHQvL21hcC5zZXRab29tKDEwKTtcbn1cblxuZnVuY3Rpb24gc2F2ZU1hcmsobSkge1xuXHRtYXJrZXJzLnB1c2gobSk7XG59XG5mdW5jdGlvbiBjbGVhck1hcmtlcnMoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgIG1hcmtlcnNbaV0uc2V0TWFwKG51bGwpO1xuICB9XG4gIHJvdXRlTGFiZWxzT2ZmU2V0ID0gW107XG4gIG1hcmtlcnNMYWJlbFJvdXRlID0gW107XG4gIG1hcmtlcnNXYXlwb2ludCAgID0gW107XG59XG5cbmZ1bmN0aW9uIG1hcmtMYWJlbFJvdXRlKGxhYmVsUm91dGUpIHtcblx0Ly92YXIgZGlzdExhYmVsID0gbGFiZWxSb3V0ZS5kaXN0YW5jZU5NICogMS44NTI7IC8vIGNvbnZlcnQgbm0gdG8gbWV0ZXJzXG5cdC8vdmFyIGhkZ0xhYmVsID0gbGFiZWxSb3V0ZS5iZWFyaW5nRGVncmVlIC0gMjI7XG5cdC8vdmFyIGRpc3RMYWJlbCA9IDI0MDAwOyBcblx0cm91dGVMYWJlbHNPZmZTZXQucHVzaChcblx0XHR7XG5cdFx0XHRsYXRsbmcgOiBsYWJlbFJvdXRlLmxhdGxuZyxcblx0XHRcdG5leHRMYXRMbmcgOiBsYWJlbFJvdXRlLm5leHRMYXRsbmdcblx0XHR9XG5cdCk7XG5cdHZhciBkaXN0TGFiZWxSb3V0ZSA9IDEyMDAwO1xuXHR2YXIgaGRnTGFiZWwgPSBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcobGFiZWxSb3V0ZS5sYXRsbmcsIGxhYmVsUm91dGUubmV4dExhdGxuZyk7IFxuXHR2YXIgb2Zmc2V0ID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQobGFiZWxSb3V0ZS5sYXRsbmcsIGRpc3RMYWJlbFJvdXRlLCBoZGdMYWJlbCwgNjM3MTAwMCk7XG5cdHZhciBhbmdsZVJvdGF0ZSA9IGhkZ0xhYmVsIC0gOTA7XG5cdGlmICggYW5nbGVSb3RhdGUgPiAtMjcwICYmIGFuZ2xlUm90YXRlIDwgLTkwICkge1xuXHRcdCBhbmdsZVJvdGF0ZSA9IGFuZ2xlUm90YXRlIC0gMTgwO1xuXHR9XG5cdHZhciBsYWJlbCA9IGxhYmVsUm91dGUuYmVhcmluZyArIFwiJmRlZyBcIiArIG51bWVyYWwobGFiZWxSb3V0ZS5kaXN0YW5jZSkuZm9ybWF0KCcwLDAnKSArIFwibm1cIjtcblx0dmFyIHggPSAyMztcblx0dmFyIHkgPSAwO1xuXHR2YXIgYW5jaG9yID0gbmV3IGdvb2dsZS5tYXBzLlBvaW50KHgsIHkpO1xuXHR2YXIgbWFya2VyTGFiZWxSb3V0ZSA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xuXHRcdHBvc2l0aW9uIDogb2Zmc2V0LFxuXHRcdGFuaW1hdGlvbiA6IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuXHRcdGxhYmVsQ29udGVudCA6IGxhYmVsLFxuXHRcdGxhYmVsQW5jaG9yIDogYW5jaG9yLFxuXHRcdGxhYmVsQ2xhc3MgOiBcImxhYmVsc0luZm9Sb3V0ZVwiLFxuXHRcdGNsaWNrYWJsZSA6IHRydWUsXG5cdFx0aWNvbiA6IGljb25MYWJlbFJvdXRlLFxuXHRcdHJvdGF0ZSA6IGFuZ2xlUm90YXRlXG5cdH0pO1xuXHRcblx0dmFyIGluZm9Db250ZW50ID0gXCI8dGFibGUgd2lkdGg9JzEwMCUnIGJvcmRlcj0wIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPlwiO1xuXHRcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgIHdpZHRoPScxMDAlJyBib3JkZXI9MCBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgdmFsaWduPSdtaWRkbGUnIHdpZHRoPSczMHB4Jz48aW1nIHNyYz0nYXJyb3cucG5nJz48L3RkPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjx0ZCB2YWxpZ249J21pZGRsZScgd2lkdGg9JzE1MHB4Jz5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCImbmJzcDsmbmJzcDsmbmJzcDtSb3V0ZTo8YnI+PGI+Jm5ic3A7Jm5ic3A7XCIgKyBsYWJlbFJvdXRlLmN1cnJlbnRQb2ludCArIFxuXHRcdFx0XHQgICBcIjwvYj4mbmJzcDt0byZuYnNwOzxiPlwiICsgbGFiZWxSb3V0ZS5uZXh0UG9pbnQgKyBcIjwvYj48L3RkPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj48L3RhYmxlPlwiO1xuXHRcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RkPjwvdHI+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCBjb2xzcGFuPScyJz48aHI+PC90ZD48L3RyPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgd2lkdGg9JzYwcHgnPlwiO1xuXHRpbmZvQ29udGVudCArPSAgIFwiRGlzdGFuY2U6PC90ZD48dGQ+IDxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgXG5cdFx0XHRcdFx0XHRcdFx0bnVtZXJhbChsYWJlbFJvdXRlLmRpc3RhbmNlKS5mb3JtYXQoJzAsMCcpICsgXCJubTwvc3Bhbj4mbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7XCIgKyBcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcmFsKE1hdGguY2VpbChsYWJlbFJvdXRlLmRpc3RhbmNlTk0gLyAwLjUzOTk2KSkuZm9ybWF0KCcwLDAnKSArXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia208L3NwYW4+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQ+XCI7XG5cdGluZm9Db250ZW50ICs9ICAgXCJIZWFkaW5nOjwvdGQ+PHRkPiA8c3BhbiBjbGFzcz0ncm91dGVJbmZvJz5cIiArIGxhYmVsUm91dGUuYmVhcmluZyArIFwiJmRlZzwvc3Bhbj4mbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7XCIgKyBcbiAgICBcdFx0XHRcdCAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdyb3V0ZUluZm8nPlwiICsgbGFiZWxSb3V0ZS5jb21wYXNzSGVhZGluZyArIFwiPC9zcGFuPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjwvdGQ+PC90cj5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xuXHR2YXIgaW5mb0JveCA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcblx0XHRjb250ZW50OiAnPGRpdiBpZD1cIml3X2NvbnRlbnRcIj4nICsgaW5mb0NvbnRlbnQgKyAnPC9kaXY+Jyxcblx0XHRwaXhlbE9mZnNldDogbmV3IGdvb2dsZS5tYXBzLlNpemUoLTMwLC0yNSxcInB4XCIsXCJweFwiKVxuXHR9KTtcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyTGFiZWxSb3V0ZSwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmICggZWxJbmZvQm94UGxhbmUgPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aW5mb0JveC5vcGVuKG1hcCwgdGhpcyk7XG5cdFx0fVxuXHR9KTtcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyTGFiZWxSb3V0ZSwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRjaGFuZ2VDb2xvckluZm9Cb3goZWwsXCJyZ2IoMjU1LDI1NSwyNTUpXCIpO1xuXHRcdFx0aW5mb0JveC5jbG9zZSgpO1xuXHRcdH1cblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9Cb3gsICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblx0ICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XG5cdFx0Y2hhbmdlQ29sb3JJbmZvQm94KGVsLFwicmdiYSgxMjcsMjU1LDIxMiwwLjgyKVwiKTtcblx0fSk7XG5cdFxuXHRtYXJrZXJMYWJlbFJvdXRlLnNldE1hcChtYXApO1xuXHRzYXZlTWFyayhtYXJrZXJMYWJlbFJvdXRlKTtcblx0bWFya2Vyc0xhYmVsUm91dGUucHVzaChtYXJrZXJMYWJlbFJvdXRlKTtcbn1cblxuZnVuY3Rpb24gbWFya0FpcnBvcnQoYWlycG9ydCx0eXBlKSB7XG5cdHZhciBtYXJrZXJBaXJwb3J0ID0gbmV3IE1hcmtlcldpdGhMYWJlbCh7XG5cdFx0cG9zaXRpb24gOiBhaXJwb3J0LmxhdGxuZyxcblx0XHRhbmltYXRpb24gOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcblx0XHRpY29uIDogaWNvbkFpcnBvcnQsXG5cdFx0bGFiZWxDb250ZW50IDogYWlycG9ydC5pZCxcblx0XHRsYWJlbEFuY2hvciA6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgyMCwgNzApLFxuXHRcdGxhYmVsQ2xhc3MgOiBcImxhYmVsc0FpcnBvcnRcIlxuXHR9KTtcblxuXHR2YXIgaW1hZ2UgPSBcIjxpbWcgc3JjPSd0YWtlb2ZmLnBuZycvPlwiO1xuXHRpZiAoIHR5cGUgPT0gJ2Rlc3RpbmF0aW9uJyApIHtcblx0XHRpbWFnZSA9IFwiPGltZyBzcmM9J2xhbmRpbmcucG5nJy8+XCI7XG5cdH1cblx0dmFyIGluZm9Db250ZW50ID0gXCJcIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGFibGUgYm9yZGVyPTAgd2lkdGg9JzEwMCUnIGNsYXNzPSdydW53YXlUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPSc2MHB4JyBhbGlnbj0nbGVmdCc+XCIgKyBpbWFnZSArIFwiPC90ZD5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8dGQ+XCI7XG5cdGluZm9Db250ZW50ICs9IFwiPGI+XCIgKyBhaXJwb3J0LmlkICsgXCI8L2I+IC0gXCIgKyBhaXJwb3J0Lm5hbWU7XG5cdGluZm9Db250ZW50ICs9IFwiPC90ZD48L3RyPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nNCc+PGhyPjwvdGQ+PC90cj5cIjtcblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xuXHRpbmZvQ29udGVudCArPSBcIjx0YWJsZSB3aWR0aD0nMTAwJScgYm9yZGVyPTAgY2xhc3M9J3J1bndheVRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnPlwiO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFpcnBvcnQucnVud2F5cy5sZW5ndGg7IGkrKykge1xuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPlwiXG5cdFx0XHRcdCsgXCIgPHRkPlJ1bndheSA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0ubnVtYmVyXG5cdFx0XHRcdCsgXCI8L3NwYW4+PC90ZD5cIlxuXHRcdFx0XHQrIFwiIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtIZWFkaW5nOiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcblx0XHRcdFx0KyBhaXJwb3J0LnJ1bndheXNbaV0uaGVhZGluZ1xuXHRcdFx0XHQrIFwiPGZvbnQgc2l6ZT0nMnB4Jz4mZGVnOzwvZm9udD48L3NwYW4+PC90ZD5cIlxuXHRcdFx0XHQrIFwiIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtGcmVxdWVuY3k6IDxzcGFuIGNsYXNzPSdydW53YXlJbmZvJz5cIlxuXHRcdFx0XHQrIGFpcnBvcnQucnVud2F5c1tpXS5mcmVxdWVuY3kgKyBcIjwvc3Bhbj48YnIvPjwvdGQ+XCJcblx0XHRcdFx0KyBcIiA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7RWxldmF0aW9uOiA8c3BhbiBjbGFzcz0ncnVud2F5SW5mbyc+XCJcblx0XHRcdFx0KyBudW1lcmFsKGFpcnBvcnQucnVud2F5c1tpXS5lbGV2YXRpb24pLmZvcm1hdCgnMCwwJykgKyBcIiBmdDwvc3Bhbj48YnIvPjwvdGQ+XCIgKyBcIjwvdHI+XCI7XG5cdH1cblx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xuXG5cdHZhciBpbmZvTTEgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2Pidcblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckFpcnBvcnQsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpbmZvTTEub3BlbihtYXAsIHRoaXMpO1xuXHR9KTtcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyQWlycG9ydCwgXCJtb3VzZW91dFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJoaWRkZW5cIik7XG5cdFx0fVxuXHRcdGluZm9NMS5jbG9zZSgpO1xuXHR9KTtcblx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb00xLCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCBlbEluZm9Cb3hQbGFuZSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpd19jb250ZW50JykucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWwsXCJ2aXNpYmxlXCIpO1xuXHRcdH1cblx0fSk7XG5cdG1hcmtlckFpcnBvcnQuc2V0TWFwKG1hcCk7XG5cdHNhdmVNYXJrKG1hcmtlckFpcnBvcnQpO1xufVxuXG5mdW5jdGlvbiBtYXJrV2F5cG9pbnQod2F5cG9pbnQpIHtcblx0dmFyIGljb25XUFQgPSBpY29uV2F5cG9pbnQ7XG5cdHZhciBpbmZvQ29udGVudCA9IFwiXCI7XG5cdGlmICh3YXlwb2ludC50eXBlID09IDEpIHtcblx0XHRpY29uV1BUID0gaWNvblZPUjtcblx0fSBlbHNlIGlmICh3YXlwb2ludC50eXBlID09IDIpIHtcblx0XHRpY29uV1BUID0gaWNvbk5EQjtcblx0fVxuXG5cdHZhciBtYXJrZXJXYXlwb2ludCA9IG5ldyBNYXJrZXJXaXRoTGFiZWwoe1xuXHRcdHBvc2l0aW9uIDogd2F5cG9pbnQubGF0bG5nLFxuXHRcdGFuaW1hdGlvbiA6IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuXHRcdGljb24gOiBpY29uV1BULFxuXHRcdGxhYmVsQ29udGVudCA6IHdheXBvaW50LmlkLFxuXHRcdGxhYmVsQW5jaG9yIDogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDI4LCAtNiksXG5cdFx0bGFiZWxDbGFzcyA6IFwibGFiZWxzV2F5cG9pbnRcIlxuXHR9KTtcblx0aWYgKHdheXBvaW50LnR5cGUgPT0gJ1ZPUicgfHwgd2F5cG9pbnQudHlwZSA9PSAnTkRCJykge1xuXHRcdC8vIFZPUiBhbmQgTkRCXG5cdFx0aW5mb0NvbnRlbnQgPSBcIjx0YWJsZSBib3JkZXI9MCBjbGFzcz0ndm9yVGFibGUnIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzMzMHB4Jz5cIjtcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj5cIjtcblx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQgdmFsaWduPSdtaWRkbGUnIGNvbHNwYW49Mj5cIjtcblx0XHRpbmZvQ29udGVudCArPSBcIiAgPHRhYmxlIGJvcmRlcj0wIGNsYXNzPSd2b3JUYWJsZScgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScwJz48dHI+PHRkPlwiO1xuXHRcdGlmICh3YXlwb2ludC50eXBlID09ICdWT1InKSB7XG5cdFx0XHQvLyBWT1Jcblx0XHRcdGluZm9Db250ZW50ICs9IFwiIDxpbWcgc3JjPSdWT1IucG5nJy8+XCI7XG5cdFx0fSBlbHNlIGlmICh3YXlwb2ludC50eXBlID09ICdOREInKSB7XG5cdFx0XHQvLyBOQkRcblx0XHRcdGluZm9Db250ZW50ICs9IFwiIDxpbWcgc3JjPSdOREIucG5nJy8+XCI7XG5cdFx0fVxuXHRcdGluZm9Db250ZW50ICs9IFwiPC90ZD5cIjtcblx0XHRpbmZvQ29udGVudCArPSBcIjx0ZD4mbmJzcDsmbmJzcDsmbmJzcDs8Yj5cIiArIHdheXBvaW50LmlkICsgXCI8L2I+IC0gXCJcblx0XHRcdFx0KyB3YXlwb2ludC5kZXNjciArIFwiPC90ZD5cIiArIFwiPC90cj48L3RhYmxlPlwiXG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIGNvbHNwYW49JzInPjxoci8+PC90ZD48L3RyPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZCB3aWR0aD0nMjAlJz4gRnJlcXVlbmN5OiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHdheXBvaW50LmZyZXEgKyBcIjwvdGQ+XCIgKyBcIjwvdHI+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPScxJSc+IExhdGl0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxhdCgpKSArIFwiPC90ZD48L3RyPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD4gTG9uZ2l0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxuZygpKSArIFwiPGJyLz48L3RkPjwvdHI+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEZJWFxuXHRcdGluZm9Db250ZW50ID0gXCI8dGFibGUgYm9yZGVyPTAgY2xhc3M9J3ZvclRhYmxlJyBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMjBweCc+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dGQgY29sc3Bhbj0yPjxiPlwiICsgd2F5cG9pbnQuaWQgKyBcIjwvYj48L3RkPjwvdHI+XCJcblx0XHRpbmZvQ29udGVudCArPSBcIjx0cj48dGQgY29sc3Bhbj0nMic+PGhyLz48L3RkPjwvdHI+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkIHdpZHRoPScxJSc+IExhdGl0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxhdCgpKSArIFwiPC90ZD48L3RyPlwiO1xuXHRcdGluZm9Db250ZW50ICs9IFwiPHRyPjx0ZD4gTG9uZ2l0dWRlOiZuYnNwOzwvdGQ+PHRkPjxzcGFuIGNsYXNzPSd2b3JJbmZvJz5cIiArIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIod2F5cG9pbnQubGF0bG5nLmxuZygpKSArIFwiPGJyLz48L3RkPjwvdHI+XCI7XG5cdFx0aW5mb0NvbnRlbnQgKz0gXCI8L3RhYmxlPlwiO1xuXHR9XG5cdHZhciBpbmZvTTEgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG5cdFx0Y29udGVudDogJzxkaXYgaWQ9XCJpd19jb250ZW50XCI+JyArIGluZm9Db250ZW50ICsgJzwvZGl2Pidcblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcldheXBvaW50LCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aW5mb00xLm9wZW4obWFwLCB0aGlzKTtcblx0fSk7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcldheXBvaW50LCBcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcImhpZGRlblwiKTtcblx0XHR9XG5cdFx0aW5mb00xLmNsb3NlKCk7XG5cdH0pO1xuXHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvTTEsICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIGVsSW5mb0JveFBsYW5lID09IHVuZGVmaW5lZCApIHtcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l3X2NvbnRlbnQnKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0dmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxcInZpc2libGVcIik7XG5cdFx0fVxuXHR9KTtcblx0bWFya2VyV2F5cG9pbnQuc2V0TWFwKG1hcCk7XG5cdHNhdmVNYXJrKG1hcmtlcldheXBvaW50KTtcblx0bWFya2Vyc1dheXBvaW50LnB1c2gobWFya2VyV2F5cG9pbnQpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb2xvckluZm9Cb3goZWwsY29sb3IpIHtcblx0ZGl2Q29sb3IgPSBlbC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdGRpdkNvbG9yLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbn1cblxuZnVuY3Rpb24gdmlzaWJpbGl0eUFycm93SW5mb0JveChlbCxzdGF0dXNBcnJvdyxzdGF0dXNDbG9zZUJ1dHRvbikge1xuXHRkaXZFbCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgY2hpbGQxID0gZGl2RWwuZmlyc3RDaGlsZDtcbiAgICBjaGlsZDMgPSBjaGlsZDEubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoIGNoaWxkMyAhPSB1bmRlZmluZWQgKSB7XG4gICAgXHRjaGlsZDEuc3R5bGUudmlzaWJpbGl0eSA9IHN0YXR1c0Fycm93O1xuICAgIFx0Y2hpbGQzLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXNBcnJvdztcblx0ICAgIC8vIFJlbW92ZSBDbG9zZSBCdXR0b25cblx0ICAgIGRpdkNsb3NlQnV0dG9uID0gZGl2RWwucGFyZW50Tm9kZS5maXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdCAgICAvL2RpdkNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBzdGF0dXM7XG5cdCAgICBpZiAoIHN0YXR1c0Nsb3NlQnV0dG9uICE9IHVuZGVmaW5lZCApIHtcblx0ICAgIFx0ZGl2Q2xvc2VCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IHN0YXR1c0Nsb3NlQnV0dG9uO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0ZGl2Q2xvc2VCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cdCAgICB9XG5cdCAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZWNpc2lvbkRlY2ltYWxOdW1iZXIodmxyKSB7XG5cdHJldHVybiBwYXJzZUZsb2F0KE1hdGgucm91bmQodmxyICogMTAwMDAwKSAvIDEwMDAwMCkudG9GaXhlZCg1KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKSB7XG5cdCQuZ2V0SlNPTihcblx0XHRcdFwiZGF0YVwiLFxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGRhdGEpKSB7XG5cdFx0XHRcdFx0LypzaG93RXJyb3IoXCJMaXN0ZW5pbmcgYXQgWC1QbGFuZSdzIFVEUCB0cmFmZmljIHBvcnQgNDkwMDMuIFwiXG5cdFx0XHRcdFx0XHRcdCsgXCJQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGF0IHRoZSBYLVBsYW5lJ3MgTmV0IENvbm5lY3Rpb25zIG1lbnUuXCIpOyovXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gZGVsZXRlIGFsbCBhYnNlbnQgcGxhbmVzXG5cdFx0XHRcdGZvciAoIHZhciBpcCBpbiBwbGFuZUxpc3QpIHtcblx0XHRcdFx0XHRpZiAoIShpcCBpbiBkYXRhKSkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlUGxhbmUoaXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBmb3IgY3VycmVudCBhbmQgbmV3IHBsYW5lc1xuXHRcdFx0XHRmb3IgKCB2YXIgaXAgaW4gZGF0YSkge1xuXHRcdFx0XHRcdC8vIGlmIG5ldyBwbGFuZVxuXHRcdFx0XHRcdGlmICghKGlwIGluIHBsYW5lTGlzdCkpIHtcblx0XHRcdFx0XHRcdGNvbG9yID0gbmV4dENvbG9yKCk7XG5cdFx0XHRcdFx0XHRtYXJrZXJPcHRpb25zLmljb24uZmlsbENvbG9yID0gY29sb3I7XG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdID0ge1xuXHRcdFx0XHRcdFx0XHRuYW1lIDogaXAucmVwbGFjZSgvLS9nLCAnLicpLFxuXHRcdFx0XHRcdFx0XHRsb24gOiAwLFxuXHRcdFx0XHRcdFx0XHRsYXQgOiAwLFxuXHRcdFx0XHRcdFx0XHRhbHQgOiBkYXRhW2lwXS5hbHRNYXAsXG5cdFx0XHRcdFx0XHRcdG1hcmtlciA6IG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyT3B0aW9ucyksXG5cdFx0XHRcdFx0XHRcdHRyYWNlIDogbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHBvbHlPcHRpb25zKSxcblx0XHRcdFx0XHRcdFx0aW5mbyA6IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCksXG5cdFx0XHRcdFx0XHRcdGNvbG9yIDogY29sb3IsXG5cdFx0XHRcdFx0XHRcdHZTcGVlZCA6IGRhdGFbaXBdLnZTcGVlZCxcblx0XHRcdFx0XHRcdFx0YWlyU3BlZWQgOiBkYXRhW2lwXS5haXJTcGVlZCxcblx0XHRcdFx0XHRcdFx0Z1NwZWVkIDogZGF0YVtpcF0uZ3JvdW5kU3BlZWQsXG5cdFx0XHRcdFx0XHRcdGhlYWRpbmcgOiBkYXRhW2lwXS5iZWFyaW5nLFxuXHRcdFx0XHRcdFx0XHRkZXN0IDogZGF0YVtpcF0uZGVzdGluYXRpb24sXG5cdFx0XHRcdFx0XHRcdGdwc0Rpc3RObSA6IGRhdGFbaXBdLmdwc0Rpc3RhbmNlTm0sXG5cdFx0XHRcdFx0XHRcdGdwc0Rpc3RUaW1lIDogZGF0YVtpcF0uZ3BzRGlzdGFuY2VUaW1lLFxuXHRcdFx0XHRcdFx0XHRuYXYxIDogZGF0YVtpcF0ubmF2MUZyZXEsXG5cdFx0XHRcdFx0XHRcdG5hdjIgOiBkYXRhW2lwXS5uYXYyRnJlcSxcblx0XHRcdFx0XHRcdFx0YmFyb21ldGVyIDogZGF0YVtpcF0uYmFyb21ldGVyLFxuXHRcdFx0XHRcdFx0XHRmdWVsUXVhbnRpdHkgOiBkYXRhW2lwXS5mdWVsUXVhbnRpdHksXG5cdFx0XHRcdFx0XHRcdG91dHNpZGVUZW1wIDogZGF0YVtpcF0ub3V0c2lkZVRlbXBlcmF0dXJlLFxuXHRcdFx0XHRcdFx0XHRjb20xIDogZGF0YVtpcF0uY29tMUZyZXEsXG5cdFx0XHRcdFx0XHRcdGNvbTIgOiBkYXRhW2lwXS5jb20yRnJlcSxcblx0XHRcdFx0XHRcdFx0Y29tcGFzc0hlYWRpbmcgOiBkYXRhW2lwXS5jb21wYXNzSGVhZGluZ1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldE1hcChtYXApO1xuXHRcdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuaXAgPSBpcDsgXG5cdFx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmluZm9XaW5kb3dMaXN0ZW5lciA9IGdvb2dsZS5tYXBzLmV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0LmFkZExpc3RlbmVyKHBsYW5lTGlzdFtpcF0ubWFya2VyLCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGxhbmVMaXN0W3RoaXMuaXBdLmluZm8ub3BlbihtYXAscGxhbmVMaXN0W3RoaXMuaXBdLm1hcmtlcik7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm8sICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0ZWxJbmZvQm94UGxhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXdfY29udGVudCcpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWxJbmZvQm94UGxhbmUsXCJ2aXNpYmxlXCIsXCJ2aXNpYmxlXCIpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihwbGFuZUxpc3RbaXBdLmluZm8sJ2Nsb3NlY2xpY2snLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdHZpc2liaWxpdHlBcnJvd0luZm9Cb3goZWxJbmZvQm94UGxhbmUsXCJoaWRkZW5cIik7XG5cdFx0XHRcdFx0XHRcdGVsSW5mb0JveFBsYW5lID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udHJhY2Uuc2V0TWFwKG1hcCk7XG5cdFx0XHRcdFx0XHRwbGFuZVRvRm9sbG93ID0gaXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld0xhdCAgICAgICAgICAgICAgICAgICAgICAgPSBkYXRhW2lwXS5sYXRNYXA7XG5cdFx0XHRcdFx0bmV3TG9uICAgICAgICAgICAgICAgICAgICAgICA9IGRhdGFbaXBdLmxvbk1hcDtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmFsdCAgICAgICAgICAgID0gZGF0YVtpcF0uYWx0TWFwO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0udlNwZWVkICAgICAgICAgPSBkYXRhW2lwXS52U3BlZWQ7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5haXJTcGVlZCAgICAgICA9IGRhdGFbaXBdLmFpclNwZWVkO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaGVhZGluZyAgICAgICAgPSBkYXRhW2lwXS5iZWFyaW5nO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZGVzdCAgICAgICAgICAgPSBkYXRhW2lwXS5kZXN0aW5hdGlvbjtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmdwc0Rpc3RObSAgICAgID0gZGF0YVtpcF0uZ3BzRGlzdGFuY2VObTtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmdwc0Rpc3RUaW1lICAgID0gZGF0YVtpcF0uZ3BzRGlzdGFuY2VUaW1lO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uZ1NwZWVkICAgICAgICAgPSBkYXRhW2lwXS5ncm91bmRTcGVlZDtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm5hdjEgICAgICAgICAgID0gZGF0YVtpcF0ubmF2MUZyZXE7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5uYXYyICAgICAgICAgICA9IGRhdGFbaXBdLm5hdjJGcmVxO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uYmFyb21ldGVyICAgICAgPSBkYXRhW2lwXS5iYXJvbWV0ZXI7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5mdWVsUXVhbnRpdHkgICA9IGRhdGFbaXBdLmZ1ZWxRdWFudGl0eTtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLm91dHNpZGVUZW1wICAgID0gZGF0YVtpcF0ub3V0c2lkZVRlbXBlcmF0dXJlO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uY29tMSAgICAgICAgICAgPSBkYXRhW2lwXS5jb20xRnJlcTtcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLmNvbTIgICAgICAgICAgID0gZGF0YVtpcF0uY29tMkZyZXE7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5jb21wYXNzSGVhZGluZyA9IGRhdGFbaXBdLmNvbXBhc3NIZWFkaW5nO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBuZXdQb2ludCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobmV3TGF0LG5ld0xvbik7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0UG9zaXRpb24obmV3UG9pbnQpO1xuXHRcdFx0XHRcdHZhciBpY29uID0gcGxhbmVMaXN0W2lwXS5tYXJrZXIuZ2V0SWNvbigpO1xuXHRcdFx0XHRcdGljb24ucm90YXRpb24gPSBwbGFuZUxpc3RbaXBdLmhlYWRpbmc7XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5tYXJrZXIuc2V0SWNvbihpY29uKTtcblx0XHRcdFx0XHQvLyBhZGQgbmV3IHBvaW50IHRvIGxpbmVcblx0XHRcdFx0XHRwbGFuZUxpc3RbaXBdLnRyYWNlLmdldFBhdGgoKS5wdXNoKG5ld1BvaW50KTtcblx0XHRcdFx0XHR2YXIgYWlycGxhbmVMYWJlbCA9ICBwbGFuZUxpc3RbaXBdLm5hbWU7XG5cdFx0XHRcdFx0aWYgKCBhaXJwbGFuZUxhYmVsID09ICcxMjcuMC4wLjEnICkge1xuXHRcdFx0XHRcdFx0IGFpcnBsYW5lTGFiZWwgPSAnWU9VJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly92YXIgaGRnQWlycGxhbmUgPSBOdW1iZXIoTWF0aC5mbG9vcigoKHBsYW5lTGlzdFtpcF0uaGVhZGluZyArIDM2MCkgJSAzNjApKSkgKyAyMjtcblx0XHRcdFx0XHR2YXIgaGRnQWlycGxhbmUgPSBwbGFuZUxpc3RbaXBdLmNvbXBhc3NIZWFkaW5nO1xuXHRcdFx0XHRcdHZhciBpbmZvQ29udGVudCA9IFwiPGRpdiBpZD0naXdfY29udGVudCc+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8ZGl2IHN0eWxlPSdtYXJnaW46IDA7IHdpZHRoOiA1MDBweDsnPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiPHRhYmxlIGJvcmRlcj0wIGNlbGxzcGFjaW5nPScwJyBjZWxscGFkZGluZz0nMCcgd2lkdGg9JzEwMCUnPlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0cj48dGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgIDx0YWJsZSBib3JkZXI9MCBjZWxsc3BhY2luZz0nMCcgY2VsbHBhZGRpbmc9JzAnIHdpZHRoPScxMDAlJz5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDx0cj48dGQgc3R5bGU9J2hlaWdodDozMHB4Oyc+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8Yj5cIiArIGFpcnBsYW5lTGFiZWwgKyBcIjwvYj5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDwvdGQ+PC90cj5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiAgIDx0cj48dGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgICA8L3RkPjwvdHI+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgIDwvdGFibGU+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90ZD48L3RyPlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBiYWNrQ29sb3IgPSAnbGlnaHRncmF5Jztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dHI+PHRkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0YWJsZSBzdHlsZT0nYm9yZGVyOnNvbGlkIDFweCBkYXJrZ3JheTtmb250LXdlaWdodDpib2xkOycgY2VsbHNwYWNpbmc9JzAnIGNlbGxwYWRkaW5nPScyJyB3aWR0aD0nMTAwJSc+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyIHN0eWxlPSdiYWNrZ3JvdW5kOlwiICsgYmFja0NvbG9yICsgXCI7Jz5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQgd2lkdGg9JzgwcHgnPkRlc3RpbmF0aW9uOjwvdGQ+PHRkIGNvbHNwYW49JzUnPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uZGVzdCArIFwiPC9zcGFuPjwvdGQ+XCI7IFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdHI+XCI7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRyPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5EaXN0YW5jZTo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmdwc0Rpc3RObSArIFwiPC9zcGFuPiZuYnNwO25tPC90ZD5cIjsgXG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkIHdpZHRoPSc2MHB4Jz5FVEU6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5ncHNEaXN0VGltZSArIFwiPC9zcGFuPiZuYnNwOzwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj5cIjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+PHRkPiBBbHRpdHVkZTogPC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IG51bWVyYWwocGxhbmVMaXN0W2lwXS5hbHQudG9GaXhlZCgpKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7ZnQgTVNMJm5ic3A7Jm5ic3A7PC90ZD5cIlxuXHRcdFx0XHRcdCAgICAgICAgICAgICsgXCI8dGQ+SGVhZGluZzo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBoZGdBaXJwbGFuZSArIFwiJmRlZzs8L3NwYW4+PC90ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvdHI+XCI7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8dHI+PHRkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIEFpclNwZWVkOiA8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBudW1lcmFsKHBsYW5lTGlzdFtpcF0uYWlyU3BlZWQpLmZvcm1hdCgnMCwwJykgKyBcIjwvc3Bhbj4mbmJzcDtrdHM8L3RkPlwiOyBcblx0XHRcdFx0XHRpZiAoIHBsYW5lTGlzdFtpcF0udlNwZWVkID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+VlM6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+VlM6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm9SZWQnPlwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBudW1lcmFsKHBsYW5lTGlzdFtpcF0udlNwZWVkKS5mb3JtYXQoJzAsMCcpICsgXCI8L3NwYW4+Jm5ic3A7ZnBtJm5ic3A7Jm5ic3A7PC90ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk5hdjE6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5uYXYxICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiOyBcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+Q29tMTo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmNvbTEgKyBcIjwvc3Bhbj4mbmJzcDtoejwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPC90cj48dHI+XCI7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPk5hdjI6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5uYXYyICsgXCI8L3NwYW4+Jm5ic3A7aHo8L3RkPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ZD5Db20yOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0uY29tMiArIFwiPC9zcGFuPiZuYnNwO2h6PC90ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDx0ciBzdHlsZT0nYmFja2dyb3VuZDpcIiArIGJhY2tDb2xvciArIFwiOyc+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkJhcm9tZXRlcjo8L3RkPjx0ZD48c3BhbiBjbGFzcz0ncGxhbmVEYXRhSW5mbyc+XCIgKyBwbGFuZUxpc3RbaXBdLmJhcm9tZXRlciArIFwiPC9zcGFuPjwvdGQ+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCIgPHRkPkZ1ZWw6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGxhbmVMaXN0W2lwXS5mdWVsUXVhbnRpdHkgKyBcIjwvc3Bhbj48L3RkPlwiOyBcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPjx0cj5cIjtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+T0FUOjwvdGQ+PHRkPjxzcGFuIGNsYXNzPSdwbGFuZURhdGFJbmZvJz5cIiArIHBsYW5lTGlzdFtpcF0ub3V0c2lkZVRlbXAgKyBcIjwvc3Bhbj4mZGVnOyZuYnNwPC90ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8dGQ+R1M6PC90ZD48dGQ+PHNwYW4gY2xhc3M9J3BsYW5lRGF0YUluZm8nPlwiICsgcGFyc2VGbG9hdChwbGFuZUxpc3RbaXBdLmdTcGVlZCkudG9GaXhlZCgpICsgXCI8L3NwYW4+Jm5ic3A7a3RzPC90ZD5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RyPlwiO1xuXHRcdFx0XHRcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIiA8L3RhYmxlPlwiO1xuXHRcdFx0XHRcdGluZm9Db250ZW50ICs9IFwiIDwvdGQ+PC90cj5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvdGFibGU+XCI7XG5cdFx0XHRcdFx0aW5mb0NvbnRlbnQgKz0gXCI8L2Rpdj5cIjtcblx0XHRcdFx0XHRpbmZvQ29udGVudCArPSBcIjwvZGl2PlwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIHNldCBpbmZvIHdpbmRvdyBjb250ZW50XG5cdFx0XHRcdFx0cGxhbmVMaXN0W2lwXS5pbmZvLnNldENvbnRlbnQoaW5mb0NvbnRlbnQpO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubG9uID0gbmV3TG9uO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0ubGF0ID0gbmV3TGF0O1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uaGRnID0gcGxhbmVMaXN0W2lwXS5oZWFkaW5nO1xuXHRcdFx0XHRcdHBsYW5lTGlzdFtpcF0uc3BkID0gcGxhbmVMaXN0W2lwXS5nU3BlZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gbW92ZSBtYXAgaWYgY2hlY2tib3ggY2hlY2tlZFxuXHRcdFx0XHRpZiAoIGNoYXNlQWlycGxhbmUgKSB7XG5cdFx0XHRcdFx0aWYgKCBwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10gIT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0bWFwLnBhblRvKG5ldyBnb29nbGUubWFwcy5MYXRMbmcocGxhbmVMaXN0W3BsYW5lVG9Gb2xsb3ddLmxhdCxwbGFuZUxpc3RbcGxhbmVUb0ZvbGxvd10ubG9uKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHQuZXJyb3IoXG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0c2hvd0Vycm9yKCdPcHMhIE1heWRheSEgTWF5ZGF5ISBKYXZhIFNlcnZlciBpcyBkb3duISEhJylcblx0XHRcdH0pO1xuXG59XG5cbmZ1bmN0aW9uIGJlYXJpbmcobG9uMSwgbGF0MSwgbG9uMiwgbGF0Mikge1xuXHRsb24xID0gbG9uMSAqIE1hdGguUEkgLyAxODA7XG5cdGxvbjIgPSBsb24yICogTWF0aC5QSSAvIDE4MDtcblx0bGF0MSA9IGxhdDEgKiBNYXRoLlBJIC8gMTgwO1xuXHRsYXQyID0gbGF0MiAqIE1hdGguUEkgLyAxODA7XG5cdHZhciB5ID0gTWF0aC5zaW4obG9uMiAtIGxvbjEpICogTWF0aC5jb3MobGF0Mik7XG5cdHZhciB4ID0gTWF0aC5jb3MobGF0MSkgKiBNYXRoLnNpbihsYXQyKSAtIE1hdGguc2luKGxhdDEpICogTWF0aC5jb3MobGF0Milcblx0XHRcdCogTWF0aC5jb3MobG9uMiAtIGxvbjEpO1xuXHR2YXIgYnJuZyA9IE1hdGguYXRhbjIoeSwgeCk7XG5cdHJldHVybiBicm5nIC8gTWF0aC5QSSAqIDE4MDtcbn1cblxuZnVuY3Rpb24gZGlzdGFuY2UobG9uMSwgbGF0MSwgbG9uMiwgbGF0Mikge1xuXHRSID0gNjM3Mi44O1xuXHRsYXQxID0gbGF0MSAqIE1hdGguUEkgLyAxODA7XG5cdGxhdDIgPSBsYXQyICogTWF0aC5QSSAvIDE4MDtcblx0dmFyIGRlbHRhbGF0ID0gbGF0MiAtIGxhdDE7XG5cdHZhciBkZWx0YWxvbiA9IChsb24yIC0gbG9uMSkgKiBNYXRoLlBJIC8gMTgwO1xuXHR2YXIgYSA9IE1hdGguc2luKGRlbHRhbGF0IC8gMikgKiBNYXRoLnNpbihkZWx0YWxhdCAvIDIpICsgTWF0aC5jb3MobGF0MSlcblx0XHRcdCogTWF0aC5jb3MobGF0MikgKiBNYXRoLnNpbihkZWx0YWxvbiAvIDIpICogTWF0aC5zaW4oZGVsdGFsb24gLyAyKTtcblx0dmFyIGMgPSAyICogTWF0aC5hc2luKE1hdGguc3FydChhKSk7XG5cdHJldHVybiBSICogYztcbn1cblxuLy8gY2xlYW4gcGxhbmUgZGVsZXRpb25cbmZ1bmN0aW9uIGRlbGV0ZVBsYW5lKGlwKSB7XG5cdGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHBsYW5lTGlzdFtpcF0uaW5mb1dpbmRvd0xpc3RlbmVyKTtcblx0cGxhbmVMaXN0W2lwXS50cmFjZS5zZXRNYXAobnVsbCk7XG5cdHBsYW5lTGlzdFtpcF0ubWFya2VyLnNldE1hcChudWxsKTtcblx0ZGVsZXRlIHBsYW5lTGlzdFtpcF07XG59XG5cbi8vIGFsZXJ0KCkgZXF1aXZhbGVudFxuZnVuY3Rpb24gc2hvd0Vycm9yKHRleHQpIHtcblx0JCgnI2Vycm9yQm94JykudGV4dCh0ZXh0KTtcblx0JCgnI2Vycm9yQm94JykuZmFkZUluKCkuZGVsYXkoMzUwMCkuZmFkZU91dCgpO1xufVxuXG5mdW5jdGlvbiBuZXh0Q29sb3IoKSB7XG5cdGlmIChjb2xvcnNbY29sb3JfaW5kZXhdICE9IG51bGwpIHtcblx0XHR2YXIgY29sb3IgPSBjb2xvcnNbY29sb3JfaW5kZXhdO1xuXHRcdGNvbG9yX2luZGV4Kys7XG5cdFx0cmV0dXJuIGNvbG9yO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKFwiTm8gbW9yZSBjb2xvcnNcIik7XG5cdFx0cmV0dXJuIFwiI2FhYWFhYVwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNoYXNlQWlycGxhbmUoKSB7XG5cdGlmICggY2hhc2VBaXJwbGFuZSApIHtcblx0XHQkKCcjZm9sbG93VGhlUGxhbmUtYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJkb3duXCIpLmFkZENsYXNzKFwidXBcIik7XG5cdH0gZWxzZSB7XG5cdFx0JCgnI2ZvbGxvd1RoZVBsYW5lLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xuXHR9XG5cdGNoYXNlQWlycGxhbmUgPSAhY2hhc2VBaXJwbGFuZTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmxpZ2h0UGFuZWwoKSB7XG5cdGlmICgkKCcjcGFuZWwtZnAnKS5pcyhcIjpoaWRkZW5cIikpIHtcblx0XHRzaG93RmxpZ2h0UGFuZWwoKTtcblx0fSBlbHNlIHtcblx0XHRoaWRlRmxpZ2h0UGFuZWwoKTtcblx0fVxufVxuZnVuY3Rpb24gaGlkZUZsaWdodFBhbmVsKCkge1xuXHRkb2N1bWVudC5jb29raWU9JCgnI2JveEZsaWdodFBsYW4nKS52YWwoKTtcblx0Y29uc29sZS5sb2coXCIoc2F2aW5nKSBwbGFuU2F2ZWQ9XCIgKyBkb2N1bWVudC5jb29raWUpO1xuXHQkKCcjcGFuZWwtZnAnKS5oaWRlKDUwMCk7XG5cdCQoJyNmbGlnaHRwbGFuLWhlbHAnKS5oaWRlKDMwMCk7XG5cdCQoJyNmbGlnaHRwbGFuLWluZm8nKS5oaWRlKDMwMCk7XG5cdCQoJyNmbGlnaHRwbGFuLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93RmxpZ2h0UGFuZWwoKSB7XG5cdHZhciBwbGFuU2F2ZWQgPSBkb2N1bWVudC5jb29raWU7XG5cdGNvbnNvbGUubG9nKFwicGxhblNhdmVkPVwiICsgZG9jdW1lbnQuY29va2llKTtcblx0aWYgKCBwbGFuU2F2ZWQgIT0gXCJcIiApIHtcblx0XHQkKCcjYm94RmxpZ2h0UGxhbicpLnZhbChwbGFuU2F2ZWQpO1xuXHR9XG5cdCQoJyNwYW5lbC1mcCcpLnNob3coNTAwKTtcblx0JCgnI2ZsaWdodHBsYW4taGVscCcpLnNob3coMzAwKTtcblx0JCgnI2ZsaWdodHBsYW4taW5mbycpLnNob3coMzAwKTtcblx0JCgnI2ZsaWdodHBsYW4tYnV0dG9uJykucmVtb3ZlQ2xhc3MoXCJ1cFwiKS5hZGRDbGFzcyhcImRvd25cIik7XG5cdCQoJyNib3hGbGlnaHRQbGFuJykuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gaGlkZU5hdmFpZHMoKSB7XG5cdCQoJyNuYXZhaWRzLWJ1dHRvbicpLmh0bWwoJ1Nob3cgbmF2YWlkcyAoTiknKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soXG5cdFx0XHRzaG93TmF2YWlkcyk7XG5cdG5hdk1hcC5zZXRPcGFjaXR5KDApO1xufVxuXG5mdW5jdGlvbiBzaG93TmF2YWlkcygpIHtcblx0JCgnI25hdmFpZHMtYnV0dG9uJykuaHRtbCgnSGlkZSBuYXZhaWRzIChOKScpLnVuYmluZCgnY2xpY2snKS5jbGljayhcblx0XHRcdGhpZGVOYXZhaWRzKTtcblx0bmF2TWFwLnNldE9wYWNpdHkoMSk7XG59XG5cbnZhciB2aXNpYmxlTGFiZWxSb3V0ZSA9IHRydWU7XG5mdW5jdGlvbiB0b29nbGVMYWJlbFJvdXRlKCkge1xuXHR2aXNpYmxlTGFiZWxSb3V0ZSA9ICF2aXNpYmxlTGFiZWxSb3V0ZTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzTGFiZWxSb3V0ZS5sZW5ndGg7IGkrKykge1xuXHRcdCBtYXJrZXJzTGFiZWxSb3V0ZVtpXS5zZXRWaXNpYmxlKHZpc2libGVMYWJlbFJvdXRlKTtcblx0fVxuXHRpZiAoIHZpc2libGVMYWJlbFJvdXRlICkge1xuXHRcdCQoJyNsYWJlbFJvdXRlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJyNsYWJlbFJvdXRlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xuXHR9XG59XG5cbnZhciB2aXNpYmxlV2F5cG9pbnQgPSB0cnVlO1xuZnVuY3Rpb24gdG9vZ2xlTGFiZWxXYXlwb2ludCgpIHtcblx0dmlzaWJsZVdheXBvaW50ID0gIXZpc2libGVXYXlwb2ludDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJzV2F5cG9pbnQubGVuZ3RoOyBpKyspIHtcblx0XHRtYXJrZXJzV2F5cG9pbnRbaV0uc2V0VmlzaWJsZSh2aXNpYmxlV2F5cG9pbnQpO1xuXHR9XG5cdGlmICggdmlzaWJsZVdheXBvaW50ICkge1xuXHRcdCQoJyNsYWJlbFdheXBvaW50LWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwidXBcIikuYWRkQ2xhc3MoXCJkb3duXCIpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJyNsYWJlbFdheXBvaW50LWJ1dHRvbicpLnJlbW92ZUNsYXNzKFwiZG93blwiKS5hZGRDbGFzcyhcInVwXCIpO1xuXHR9XG59XG5cbi8vIHJlYWR5IHdoZW4geW91IGFyZSFcbmdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0aWFsaXplKTtcbi8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhvc2UgZnVuY3Rpb25zIHZpc2libGUgb3V0c2lkZSB0aGUgSlMgZmlsZSB3aGVuIHVzaW5nIHRoZSBXZWJQYWNrIGJ1bmRsZSB0b29sIHRvIHJ1biB0aGUgc29sdXRpb25cbndpbmRvdy5zaG93TmF2YWlkcyAgICAgICAgID0gc2hvd05hdmFpZHM7XG53aW5kb3cudG9nZ2xlRmxpZ2h0UGFuZWwgICA9IHRvZ2dsZUZsaWdodFBhbmVsO1xud2luZG93LnRvZ2dsZUNoYXNlQWlycGxhbmUgPSB0b2dnbGVDaGFzZUFpcnBsYW5lO1xud2luZG93LnRvb2dsZUxhYmVsUm91dGUgICAgPSB0b29nbGVMYWJlbFJvdXRlO1xud2luZG93LnRvb2dsZUxhYmVsV2F5cG9pbnQgPSB0b29nbGVMYWJlbFdheXBvaW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==