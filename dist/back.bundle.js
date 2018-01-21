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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var exports = module.exports = {};

exports.fabonacci = function (num1,num2) {
    return num1+num2;
};

exports.sayHelloInSpanish = function() {
  return "Hola";
};

exports.degreesToRadians = function(degrees) {
  var radians = degrees * (Math.PI / 180);
  return radians;
};

exports.radiansToDegrees = function(radians) {
  var degrees = radians * (180 / Math.PI);
  return degrees;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports.AirPlane   = __webpack_require__(5);
exports.PlanesList = __webpack_require__(18);
exports.Constants  = __webpack_require__(6);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const winston = __webpack_require__(19);
const moment  = __webpack_require__(20);
const S       = __webpack_require__(21);
const config  = __webpack_require__(3);

const myConsoleFormat = winston.format.printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const myJsonFormat = winston.format.json(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

var getLabel = function(callingModule) {
    if ( callingModule.filename !== undefined ) {
      var parts = callingModule.filename.split('\\');
      var lbl   = parts[parts.length - 2] + '/' + parts.pop();
      return S(lbl).padRight(24,'-') + '>';
    } else {
      return 'bundled';
    }
};

module.exports = function(callingModule) {
  
  var logger = winston.createLogger({
    transports: [
      new winston.transports.File({ 
        level: 'error',
        filename: './logs/error.log', 
        maxsize: 5242880, //5MB
        maxFiles: 5,
        format: winston.format.combine (
           winston.format.timestamp(),
           winston.format.splat(),
           winston.format.label( { label: getLabel(callingModule) }),
           winston.format.prettyPrint(),
           myJsonFormat
        )
      }),
      new winston.transports.File ({
        level: config.logger.fileTrace.level,
        filename: './logs/trace.log',
        maxsize: 5242880, //5MB
        maxFiles: 5, 
        format: winston.format.combine (
           winston.format.timestamp(),
           winston.format.splat(),
           winston.format.label( { label: getLabel(callingModule) }),
           winston.format.prettyPrint(),
           myJsonFormat
        )
      })
    ]
  });

  if ( process.env.NODE_ENV !== 'production' ) {
    logger.add(
      new winston.transports.Console({
        level: config.logger.console.level,
        json: false,
        colorize: true,
        format: winston.format.combine (
          winston.format.splat(),
          winston.format.label( { label: getLabel(callingModule) }),
          winston.format.timestamp(),
          myConsoleFormat
        )
      })
    );
  }

    return logger;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var config = {};

config.logger           = {};
config.logger.console   = {};
config.logger.fileTrace = {};

config.logger.console.level   = 'info';
config.logger.fileTrace.level = 'info';

module.exports = config;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Author Ualter Jr.
const utils        = __webpack_require__(0);

// Class Constructor and Attributes
function AirPlane(ip) {
	this.ip                 = ip;
	this.latMap				= "";
	this.lonMap				= "";
	this.latAnteriorMap		= "";
	this.lonAnteriorMap		= "";
	this.altMap				= 0 ;
	this.airSpeed			= "";
	this.vSpeed				= "";
	this.groundSpeed		= 0;
	this.bearing			= "";
	this.destination		= "";
	this.gpsDistanceNm		= "";
	this.gpsDistanceTime	= "";
	this.barometer			= "";
	this.fuelQuantity		= "";
	this.nav1Freq			= "";
	this.nav2Freq			= "";
	this.pause				= "";
	this.compassHeading		= "";
	this.outsideTemperature	= "";
	this.com1Freq			= "";
	this.com2Freq			= "";
};

// Class Functions
AirPlane.prototype = {
	getIp: function(){
		return this.ip;
	},
	getLatMap: function() {
		return this.latMap;
	},
	setLatMap: function(vlr) {
		this.latMap = vlr;
	},
	getLonMap: function() {
		return this.lonMap;
	},
	setLonMap: function(vlr) {
		this.lonMap = vlr;
	},
	getLatAnteriorMap: function() {
		return this.latAnteriorMap;
	},
	setLatAnteriorMap: function(vlr) {
		this.latAnteriorMap = vlr;
	},
	getLonAnteriorMap: function() {
		return this.lonAnteriorMap;
	},
	setLonAnteriorMap: function(vlr) {
		this.lonAnteriorMap = vlr;
	},
	getAltMap: function() {
		return this.altMap;
	},
	setAltMap: function(vlr) {
		this.altMap = vlr;
	},
	getAirSpeed: function() {
		return this.airSpeed;
	},
	setAirSpeed: function(vlr) {
		this.airSpeed = vlr;
	},
	getVSpeed: function() {
		return this.vSpeed;
	},
	setVSpeed: function(vlr) {
		this.vSpeed = vlr;
	},
	getGroundSpeed: function() {
		return this.groundSpeed;
	},
	setGroundSpeed: function(vlr) {
		this.groundSpeed = vlr;
	},
	getBearing: function() {
		return this.bearing;
	},
	setBearing: function(vlr) {
		this.bearing = vlr;
	},
	getDestination: function() {
		return this.destination;
	},
	setDestination: function(vlr) {
		this.destination = vlr;
	},
	getGpsDistanceNm: function() {
		return this.gpsDistanceNm;
	},
	setGpsDistanceNm: function(vlr) {
		this.gpsDistanceNm = vlr;
	},
	getGpsDistanceTime: function() {
		return this.gpsDistanceTime;
	},
	setGpsDistanceTime: function(vlr) {
		this.gpsDistanceTime = vlr;
	},
	getBarometer: function() {
		return this.barometer;
	},
	setBarometer: function(vlr) {
		this.barometer = vlr;
	},
	getFuelQuantity: function() {
		return this.fuelQuantity;
	},
	setFuelQuantity: function(vlr) {
		this.fuelQuantity = vlr;
	},
	getNav1Freq: function() {
		return this.nav1Freq;
	},
	setNav1Freq: function(vlr) {
		this.nav1Freq = vlr;
	},
	getNav2Freq: function() {
		return this.nav2Freq;
	},
	setNav2Freq: function(vlr) {
		this.nav2Freq = vlr;
	},
	getPause: function() {
		return this.pause;
	},
	setPause: function(vlr) {
		this.pause = vlr;
	},
	getCompassHeading: function() {
		return this.compassHeading;
	},
	setCompassHeading: function(vlr) {
		this.compassHeading = vlr;
	},
	getOutsideTemperature: function() {
		return this.outsideTemperature;
	},
	setOutsideTemperature: function(vlr) {
		this.outsideTemperature = vlr;
	},
	getCom1Freq: function() {
		return this.com1Freq;
	},
	setCom1Freq: function(vlr) {
		this.com1Freq = vlr;
	},
	getCom2Freq: function() {
		return this.com2Freq;
	},
	setCom2Freq: function(vlr) {
		this.com2Freq = vlr;
	},

	calculateBearing: function(lat2, lon2) {
		var longitude1 = parseFloat(this.lonAnteriorMap);
		var longitude2 = lon2;

		var latitude1  = utils.degreesToRadians(this.latAnteriorMap);
		var latitude2  = utils.degreesToRadians(lat2);

		var longDiff   = utils.degreesToRadians(longitude2 - longitude1);

		var y = Math.sin(longDiff) * Math.cos(latitude2);
		var x = Math.cos(latitude1) * Math.sin(latitude2) - Math.sin(latitude1) * Math.cos(latitude2) * Math.cos(longDiff);
	
		var result = (utils.radiansToDegrees(Math.atan2(y, x)) + 360) % 360;
		if ( result > 0 ) {
			this.bearing = parseFloat(result);
		}
	}


};


module.exports = AirPlane;



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Author Ualter Jr.

function Constants() {
};

Constants.prototype.DESTINATION					= "destination";
Constants.prototype.GAME_PAUSED					= "gamePaused";
Constants.prototype.BAROMETER					= "barometer";
Constants.prototype.COMPASS_HEADING				= "compassHeading";
Constants.prototype.NAV1_FREQUENCY				= "nav1FreqHz";
Constants.prototype.NAV2_FREQUENCY				= "nav2FreqHz";
Constants.prototype.AIRSPEED					= "airspeed";
Constants.prototype.ALTITUDE					= "altitude";
Constants.prototype.FUEL_QUANTITY				= "fuelquantity";
Constants.prototype.APU_RUNNING					= "apurunning";
Constants.prototype.COM1_FREQUENCY				= "com1FreqHz";
Constants.prototype.COM2_FREQUENCY				= "com2FreqHz";
Constants.prototype.COM1_FREQUENCY_STDBY		= "com1FreqHzStdby";
Constants.prototype.COM2_FREQUENCY_STDBY		= "com2FreqHzStdby";
Constants.prototype.GPS_DISTANCE_METERS			= "gpsDMEDistM";
Constants.prototype.GPS_DISTANCE_SECONDS		= "gpsDMETimeSecs";
Constants.prototype.NAV1_DISTANCE_NAUTICALS		= "nav1DMEDistNm";
Constants.prototype.NAV1_DISTANCE_MINUTES		= "nav1DMEDistMin";
Constants.prototype.NAV2_DISTANCE_NAUTICALS		= "nav2DMEDistNm";
Constants.prototype.NAV2_DISTANCE_MINUTES		= "nav2DMEDistMin";
Constants.prototype.OUTSIDE_TEMPERATURE_CELSIUS	= "outsideTempC";
Constants.prototype.VERTICAL_SPEED				= "vsFpm";
Constants.prototype.GROUND_SPEED				= "groundspeed";
Constants.prototype.TRUE_AIRSPEED				= "true_airspeed";
Constants.prototype.LATITUDE					= "latitude";
Constants.prototype.LONGITUDE					= "longitude";
Constants.prototype.WEIGHT_TOTAL_FUEL			= "weightTotalFuel";
Constants.prototype.AUTOPILOT_MODE				= "autopilotMode";		// (off=0,flight director=1, on=2)
Constants.prototype.AUTOPILOT_ALTITUDE			= "autopilotAltitude";
Constants.prototype.AUTOPILOT_VERTICAL_SPEED	= "autopilotVS";
Constants.prototype.AUTOPILOT_AIRPSPEED			= "autopilotAirSpeed";
Constants.prototype.AUTOPILOT_HEADING			= "autopilotHeading";

module.exports = Constants;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils     = __webpack_require__(0);
const logger    = __webpack_require__(2)(module);
const model     = __webpack_require__(1);
const http      = __webpack_require__(22);
const express   = __webpack_require__(23);
const ip        = __webpack_require__(8);
const path      = __webpack_require__(24);
const appRoot   = __webpack_require__(25);
 
const PORT      = 8000;
const HOST      = ip.address(); //'192.168.0.22';
const pathFiles = appRoot.path + "\\dist";
const app       = express();

var planesList = new model.PlanesList();

// Ups!
app.use( (err, request, response, next) => {
  logger.error(err);
  response.status(500).send('Something broke!')
})

// For tests only
app.get("/hello", (request, response) => {
    response.end('Hello!');
})

// User Interface Start
app.get("/", (request, response) => {
    response.sendFile(pathFiles + "\\index.html");
})

// Scripts
app.get("/front.bundle.js", (request, response) => {
    response.sendFile(pathFiles + "\\front.bundle.js");
})
app.get("/numeral.min.js", (request, response) => {
    response.sendFile(pathFiles + "\\libs\\numeral.min.js");
})
app.get("/markerwithlabel.js", (request, response) => {
    response.sendFile(pathFiles + "\\libs\\markerwithlabel.js");
})
app.get("/jquery-blink.js", (request, response) => {
    response.sendFile(pathFiles + "\\libs\\jquery-blink.js");
})

// Images
app.get("/loading.gif", (request, response) => {
    response.sendFile(pathFiles + "\\images\\loading.gif");
})

// Data game
app.get("/data", (request, response) => {
    response.type('json');
    // Non Pretty-Print
    //response.send( airPlane );
    // Pretty-Print
    response.send(JSON.stringify(planesList.getAllAirPlanes(), null, 4));
    
})

app.listen(PORT, (err) => {

    if (err) {
        logger.error(new Error(err.toString()).stack);
        throw err;
    }

    logger.info('HTTP Server listening on ' + HOST + ":" + PORT);
})

var receiveUpdate = function (_planesList) {
    planesList = _planesList;
}

module.exports = {
    receiveUpdate: receiveUpdate
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils        = __webpack_require__(0);
const logger       = __webpack_require__(2)(module);
const model        = __webpack_require__(1);
const dgram        = __webpack_require__(26);
const EventEmitter = __webpack_require__(27);
const ip           = __webpack_require__(8);

const PORT   = 8881;
const HOST   = ip.address();
//'192.168.0.22';

const server = dgram.createSocket('udp4');

server.on('listening', startServer);
server.on('message', receiveMessage);
server.bind(PORT, HOST);

function startServer() {
	var address = server.address();
	logger.info('UDP  Server listening on ' + address.address + ":" + address.port);
}

class MyEmitter extends EventEmitter {}
const eventEmitter = new MyEmitter();
exports.eventEmitter = eventEmitter;

const Constants = new model.Constants();

var planesList = new model.PlanesList();

function receiveMessage(message, remote) {
	try {
		
		var ip                  = remote.address;
		var msgs                = message.toString('utf8');
		var airPlane            = new model.AirPlane(ip);

		logger.info("Receiving airplane message from %s", ip);
		logger.debug("UDP Message received from %s: %s", ip, msgs);

	   	msgs.split(";").map( msg => {

	   		var arr   = msg.split("=");
	   		var label = arr[0];
	   		var value = arr[1];

	   		switch(label) {
	   			 case Constants.DESTINATION: {
	   				airPlane.setDestination(value)
	   				break;
	   			 }
				 case Constants.GAME_PAUSED: {
				 	airPlane.setPause(value)
				    break;
				 }
				 case Constants.BAROMETER: {
				 	airPlane.setBarometer(value)
				    break;
				 }
				 case Constants.COMPASS_HEADING: {
				 	airPlane.setCompassHeading(value)
				    break;
				 }
				 case Constants.NAV1_FREQUENCY: {
				 	airPlane.setNav1Freq(value)
				    break;
				 }
				 case Constants.NAV2_FREQUENCY: {
				 	airPlane.setNav2Freq(value)
				    break;
				 }
				 case Constants.AIRSPEED: {
				 	airPlane.setAirSpeed(value)
				    break;
				 }
				 case Constants.ALTITUDE: {break;}
				 case Constants.FUEL_QUANTITY: {
				 	airPlane.setFuelQuantity(value)
				    break;
				 }
				 case Constants.APU_RUNNING: {break;}
				 case Constants.COM1_FREQUENCY: {
				 	airPlane.setCom1Freq(value)
				    break;
				 }
				 case Constants.COM2_FREQUENCY: {
				 	airPlane.setCom2Freq(value)
				    break;
				 }
				 case Constants.COM1_FREQUENCY_STDBY: {break;}
				 case Constants.COM2_FREQUENCY_STDBY: {break;}
				 case Constants.GPS_DISTANCE_METERS: {break;}
				 case Constants.GPS_DISTANCE_SECONDS: {
				 	/*
				 	float distanceMinutes = 0;
					try {
						distanceMinutes = Float.parseFloat(value);
					} catch (NumberFormatException e) {
					}

					if (distanceMinutes > 0) {
						int iDistanceMinutes = (int) distanceMinutes;
						int iDistanceSeconds = (int) ((distanceMinutes - iDistanceMinutes) * 60);
						int iDistanceHours = (int) (distanceMinutes / 60);
						String result = df.format(iDistanceHours) + ":" + df.format(iDistanceMinutes) + ":" + df.format(iDistanceSeconds);
						this.gpsDistanceTime.put(ip.toString(), result);
					} else {
						this.gpsDistanceTime.put(ip.toString(), "0");
					}
				 	*/
				    break;
				 }
				 case Constants.NAV1_DISTANCE_NAUTICALS: {break;}
				 case Constants.NAV1_DISTANCE_MINUTES: {break;}
				 case Constants.NAV2_DISTANCE_NAUTICALS: {break;}
				 case Constants.NAV2_DISTANCE_MINUTES: {break;}
				 case Constants.OUTSIDE_TEMPERATURE_CELSIUS: {
				 	airPlane.setOutsideTemperature(value);
				    break;
				 }
				 case Constants.VERTICAL_SPEED: {
				 	airPlane.setVSpeed(value);
				    break;
				 }
				 case Constants.GROUND_SPEED: {
				 	airPlane.setGroundSpeed(value);
				    break;
				 }
				 case Constants.TRUE_AIRSPEED: {break;}
				 case Constants.LATITUDE: {
					 if ( ip in planesList.getAllAirPlanes() ) {
						 airPlane.setLatAnteriorMap(planesList.getAirPlane(ip).getLatMap());
					 } else {
						airPlane.setLatAnteriorMap(0);
					 }
					 airPlane.setLatMap(value);
					 break;
				 }
				 case Constants.LONGITUDE: {
					if ( ip in planesList.getAllAirPlanes() ) {
						airPlane.setLonAnteriorMap(planesList.getAirPlane(ip).getLonMap());
					} else {
						airPlane.setLonAnteriorMap(0);
					}
					airPlane.setLonMap(value);
					airPlane.calculateBearing(parseFloat(airPlane.getLatMap()), parseFloat(value));
				 	break;
				 }
				 case Constants.WEIGHT_TOTAL_FUEL: {break;}
				 case Constants.AUTOPILOT_MODE: {break;}
				 case Constants.AUTOPILOT_ALTITUDE: {break;}
				 case Constants.AUTOPILOT_VERTICAL_SPEED: {break;}
				 case Constants.AUTOPILOT_AIRPSPEED: {break;}
				 case Constants.AUTOPILOT_HEADING: {break;}
	   			 default:
	   				break;	
			   }
			   
	   		   logger.debug("Message attribute parsed...: %s - %s", label, value);
		});
		   
		planesList.addAirPlane(airPlane.getIp(),airPlane);
		eventEmitter.emit('receivedMessage', planesList);

    } catch (err) {
		logger.error(new Error(err.toString()));
   		throw err;
    }
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_model_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_model_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_model_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_model_AirPlane_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_model_AirPlane_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_model_AirPlane_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__js_config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_http_server_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_http_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_http_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_udp_server_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_udp_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__js_udp_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_app_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__js_app_js__);










/***/ }),
/* 18 */
/***/ (function(module, exports) {



function PlanesList() {
	this.airPlanes = {};
};

PlanesList.prototype = {
	getAirPlane: function(ip) {
		return this.airPlanes[ip];
	},
	addAirPlane: function(ip, _airPlane) {
		this.airPlanes[ip] = _airPlane;
	},
	getAllAirPlanes: function() {
		return this.airPlanes;
	}
};


module.exports = PlanesList;



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("string");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("app-root-path");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const config     = __webpack_require__(3);
const utils      = __webpack_require__(0);
const logger     = __webpack_require__(2)(module);
const model      = __webpack_require__(1);
const udpServer  = __webpack_require__(9);
const httpServer = __webpack_require__(7);

var planesList = new model.PlanesList();

logger.info('Start x-navigat...');

udpServer.eventEmitter.on('receivedMessage', (_planesList) => {
    planesList = _planesList;
    httpServer.receiveUpdate(planesList);

    Object.keys(planesList.getAllAirPlanes()).forEach(ipAirPlane => {
        airPlane = planesList.getAirPlane(ipAirPlane);
        logger.info("Airplane '%s' at Longitude/Latitude: %s/%s, AirSpeed: %s", airPlane.getIp(),airPlane.getLatMap(), airPlane.getLonMap(), airPlane.getAirSpeed());
    });

    logger.debug("List of airplanes...: %s", JSON.stringify(planesList, null, 4));
});



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDMxN2U1NzBmYjViNTMwOWVlYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvQWlyUGxhbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXBcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdWRwLXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvUGxhbmVzTGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRncmFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNsQkE7QUFDQTtBQUNBLDRDOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZUFBZSxJQUFJLFdBQVcsSUFBSSxXQUFXLElBQUksYUFBYTtBQUMxRSxDQUFDOztBQUVEO0FBQ0EsWUFBWSxlQUFlLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSSxhQUFhO0FBQzFFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7O0FDekVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7Ozs7Ozs7O0FDdkxBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBLCtCOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLHdDQUF3QztBQUN4QztBQUNBLGM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7OztBQ25CQSxvQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDIiwiZmlsZSI6ImJhY2suYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQzMTdlNTcwZmI1YjUzMDllZWMyIiwidmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xyXG5cclxuZXhwb3J0cy5mYWJvbmFjY2kgPSBmdW5jdGlvbiAobnVtMSxudW0yKSB7XHJcbiAgICByZXR1cm4gbnVtMStudW0yO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zYXlIZWxsb0luU3BhbmlzaCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBcIkhvbGFcIjtcclxufTtcclxuXHJcbmV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uKGRlZ3JlZXMpIHtcclxuICB2YXIgcmFkaWFucyA9IGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XHJcbiAgcmV0dXJuIHJhZGlhbnM7XHJcbn07XHJcblxyXG5leHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbihyYWRpYW5zKSB7XHJcbiAgdmFyIGRlZ3JlZXMgPSByYWRpYW5zICogKDE4MCAvIE1hdGguUEkpO1xyXG4gIHJldHVybiBkZWdyZWVzO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuQWlyUGxhbmUgICA9IHJlcXVpcmUoXCIuL0FpclBsYW5lLmpzXCIpO1xyXG5leHBvcnRzLlBsYW5lc0xpc3QgPSByZXF1aXJlKFwiLi9QbGFuZXNMaXN0LmpzXCIpO1xyXG5leHBvcnRzLkNvbnN0YW50cyAgPSByZXF1aXJlKFwiLi9Db25zdGFudHMuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgd2luc3RvbiA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcclxuY29uc3QgbW9tZW50ICA9IHJlcXVpcmUoJ21vbWVudCcpO1xyXG5jb25zdCBTICAgICAgID0gcmVxdWlyZSgnc3RyaW5nJyk7XHJcbmNvbnN0IGNvbmZpZyAgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcclxuXHJcbmNvbnN0IG15Q29uc29sZUZvcm1hdCA9IHdpbnN0b24uZm9ybWF0LnByaW50ZihpbmZvID0+IHtcclxuICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9IFske2luZm8ubGFiZWx9XSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gO1xyXG59KTtcclxuXHJcbmNvbnN0IG15SnNvbkZvcm1hdCA9IHdpbnN0b24uZm9ybWF0Lmpzb24oaW5mbyA9PiB7XHJcbiAgcmV0dXJuIGAke2luZm8udGltZXN0YW1wfSBbJHtpbmZvLmxhYmVsfV0gJHtpbmZvLmxldmVsfTogJHtpbmZvLm1lc3NhZ2V9YDtcclxufSk7XHJcblxyXG52YXIgZ2V0TGFiZWwgPSBmdW5jdGlvbihjYWxsaW5nTW9kdWxlKSB7XHJcbiAgICBpZiAoIGNhbGxpbmdNb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgdmFyIHBhcnRzID0gY2FsbGluZ01vZHVsZS5maWxlbmFtZS5zcGxpdCgnXFxcXCcpO1xyXG4gICAgICB2YXIgbGJsICAgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSArICcvJyArIHBhcnRzLnBvcCgpO1xyXG4gICAgICByZXR1cm4gUyhsYmwpLnBhZFJpZ2h0KDI0LCctJykgKyAnPic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ2J1bmRsZWQnO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYWxsaW5nTW9kdWxlKSB7XHJcbiAgXHJcbiAgdmFyIGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcclxuICAgIHRyYW5zcG9ydHM6IFtcclxuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5GaWxlKHsgXHJcbiAgICAgICAgbGV2ZWw6ICdlcnJvcicsXHJcbiAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3MvZXJyb3IubG9nJywgXHJcbiAgICAgICAgbWF4c2l6ZTogNTI0Mjg4MCwgLy81TUJcclxuICAgICAgICBtYXhGaWxlczogNSxcclxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByZXR0eVByaW50KCksXHJcbiAgICAgICAgICAgbXlKc29uRm9ybWF0XHJcbiAgICAgICAgKVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5GaWxlICh7XHJcbiAgICAgICAgbGV2ZWw6IGNvbmZpZy5sb2dnZXIuZmlsZVRyYWNlLmxldmVsLFxyXG4gICAgICAgIGZpbGVuYW1lOiAnLi9sb2dzL3RyYWNlLmxvZycsXHJcbiAgICAgICAgbWF4c2l6ZTogNTI0Mjg4MCwgLy81TUJcclxuICAgICAgICBtYXhGaWxlczogNSwgXHJcbiAgICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lIChcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmxhYmVsKCB7IGxhYmVsOiBnZXRMYWJlbChjYWxsaW5nTW9kdWxlKSB9KSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5wcmV0dHlQcmludCgpLFxyXG4gICAgICAgICAgIG15SnNvbkZvcm1hdFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgIF1cclxuICB9KTtcclxuXHJcbiAgaWYgKCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICkge1xyXG4gICAgbG9nZ2VyLmFkZChcclxuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcclxuICAgICAgICBsZXZlbDogY29uZmlnLmxvZ2dlci5jb25zb2xlLmxldmVsLFxyXG4gICAgICAgIGpzb246IGZhbHNlLFxyXG4gICAgICAgIGNvbG9yaXplOiB0cnVlLFxyXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxyXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxyXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICBteUNvbnNvbGVGb3JtYXRcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gbG9nZ2VyO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3V0aWxzL2xvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29uZmlnID0ge307XHJcblxyXG5jb25maWcubG9nZ2VyICAgICAgICAgICA9IHt9O1xyXG5jb25maWcubG9nZ2VyLmNvbnNvbGUgICA9IHt9O1xyXG5jb25maWcubG9nZ2VyLmZpbGVUcmFjZSA9IHt9O1xyXG5cclxuY29uZmlnLmxvZ2dlci5jb25zb2xlLmxldmVsICAgPSAnaW5mbyc7XHJcbmNvbmZpZy5sb2dnZXIuZmlsZVRyYWNlLmxldmVsID0gJ2luZm8nO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb25maWc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBdXRob3IgVWFsdGVyIEpyLlxyXG5jb25zdCB1dGlscyAgICAgICAgPSByZXF1aXJlKCcuLy4uL3V0aWxzL3V0aWxzLmpzJyk7XHJcblxyXG4vLyBDbGFzcyBDb25zdHJ1Y3RvciBhbmQgQXR0cmlidXRlc1xyXG5mdW5jdGlvbiBBaXJQbGFuZShpcCkge1xyXG5cdHRoaXMuaXAgICAgICAgICAgICAgICAgID0gaXA7XHJcblx0dGhpcy5sYXRNYXBcdFx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLmxvbk1hcFx0XHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMubGF0QW50ZXJpb3JNYXBcdFx0PSBcIlwiO1xyXG5cdHRoaXMubG9uQW50ZXJpb3JNYXBcdFx0PSBcIlwiO1xyXG5cdHRoaXMuYWx0TWFwXHRcdFx0XHQ9IDAgO1xyXG5cdHRoaXMuYWlyU3BlZWRcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy52U3BlZWRcdFx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLmdyb3VuZFNwZWVkXHRcdD0gMDtcclxuXHR0aGlzLmJlYXJpbmdcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5kZXN0aW5hdGlvblx0XHQ9IFwiXCI7XHJcblx0dGhpcy5ncHNEaXN0YW5jZU5tXHRcdD0gXCJcIjtcclxuXHR0aGlzLmdwc0Rpc3RhbmNlVGltZVx0PSBcIlwiO1xyXG5cdHRoaXMuYmFyb21ldGVyXHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMuZnVlbFF1YW50aXR5XHRcdD0gXCJcIjtcclxuXHR0aGlzLm5hdjFGcmVxXHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMubmF2MkZyZXFcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5wYXVzZVx0XHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMuY29tcGFzc0hlYWRpbmdcdFx0PSBcIlwiO1xyXG5cdHRoaXMub3V0c2lkZVRlbXBlcmF0dXJlXHQ9IFwiXCI7XHJcblx0dGhpcy5jb20xRnJlcVx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLmNvbTJGcmVxXHRcdFx0PSBcIlwiO1xyXG59O1xyXG5cclxuLy8gQ2xhc3MgRnVuY3Rpb25zXHJcbkFpclBsYW5lLnByb3RvdHlwZSA9IHtcclxuXHRnZXRJcDogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmlwO1xyXG5cdH0sXHJcblx0Z2V0TGF0TWFwOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxhdE1hcDtcclxuXHR9LFxyXG5cdHNldExhdE1hcDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmxhdE1hcCA9IHZscjtcclxuXHR9LFxyXG5cdGdldExvbk1hcDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb25NYXA7XHJcblx0fSxcclxuXHRzZXRMb25NYXA6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5sb25NYXAgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRMYXRBbnRlcmlvck1hcDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYXRBbnRlcmlvck1hcDtcclxuXHR9LFxyXG5cdHNldExhdEFudGVyaW9yTWFwOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMubGF0QW50ZXJpb3JNYXAgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRMb25BbnRlcmlvck1hcDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb25BbnRlcmlvck1hcDtcclxuXHR9LFxyXG5cdHNldExvbkFudGVyaW9yTWFwOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMubG9uQW50ZXJpb3JNYXAgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRBbHRNYXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWx0TWFwO1xyXG5cdH0sXHJcblx0c2V0QWx0TWFwOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuYWx0TWFwID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QWlyU3BlZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWlyU3BlZWQ7XHJcblx0fSxcclxuXHRzZXRBaXJTcGVlZDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmFpclNwZWVkID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0VlNwZWVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnZTcGVlZDtcclxuXHR9LFxyXG5cdHNldFZTcGVlZDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLnZTcGVlZCA9IHZscjtcclxuXHR9LFxyXG5cdGdldEdyb3VuZFNwZWVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmdyb3VuZFNwZWVkO1xyXG5cdH0sXHJcblx0c2V0R3JvdW5kU3BlZWQ6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5ncm91bmRTcGVlZCA9IHZscjtcclxuXHR9LFxyXG5cdGdldEJlYXJpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmVhcmluZztcclxuXHR9LFxyXG5cdHNldEJlYXJpbmc6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5iZWFyaW5nID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0RGVzdGluYXRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGVzdGluYXRpb247XHJcblx0fSxcclxuXHRzZXREZXN0aW5hdGlvbjogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmRlc3RpbmF0aW9uID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0R3BzRGlzdGFuY2VObTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ncHNEaXN0YW5jZU5tO1xyXG5cdH0sXHJcblx0c2V0R3BzRGlzdGFuY2VObTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmdwc0Rpc3RhbmNlTm0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRHcHNEaXN0YW5jZVRpbWU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3BzRGlzdGFuY2VUaW1lO1xyXG5cdH0sXHJcblx0c2V0R3BzRGlzdGFuY2VUaW1lOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QmFyb21ldGVyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmJhcm9tZXRlcjtcclxuXHR9LFxyXG5cdHNldEJhcm9tZXRlcjogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmJhcm9tZXRlciA9IHZscjtcclxuXHR9LFxyXG5cdGdldEZ1ZWxRdWFudGl0eTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mdWVsUXVhbnRpdHk7XHJcblx0fSxcclxuXHRzZXRGdWVsUXVhbnRpdHk6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5mdWVsUXVhbnRpdHkgPSB2bHI7XHJcblx0fSxcclxuXHRnZXROYXYxRnJlcTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXYxRnJlcTtcclxuXHR9LFxyXG5cdHNldE5hdjFGcmVxOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMubmF2MUZyZXEgPSB2bHI7XHJcblx0fSxcclxuXHRnZXROYXYyRnJlcTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXYyRnJlcTtcclxuXHR9LFxyXG5cdHNldE5hdjJGcmVxOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMubmF2MkZyZXEgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRQYXVzZTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXVzZTtcclxuXHR9LFxyXG5cdHNldFBhdXNlOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMucGF1c2UgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRDb21wYXNzSGVhZGluZzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wYXNzSGVhZGluZztcclxuXHR9LFxyXG5cdHNldENvbXBhc3NIZWFkaW5nOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuY29tcGFzc0hlYWRpbmcgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRPdXRzaWRlVGVtcGVyYXR1cmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3V0c2lkZVRlbXBlcmF0dXJlO1xyXG5cdH0sXHJcblx0c2V0T3V0c2lkZVRlbXBlcmF0dXJlOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMub3V0c2lkZVRlbXBlcmF0dXJlID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0Q29tMUZyZXE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tMUZyZXE7XHJcblx0fSxcclxuXHRzZXRDb20xRnJlcTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmNvbTFGcmVxID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0Q29tMkZyZXE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tMkZyZXE7XHJcblx0fSxcclxuXHRzZXRDb20yRnJlcTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmNvbTJGcmVxID0gdmxyO1xyXG5cdH0sXHJcblxyXG5cdGNhbGN1bGF0ZUJlYXJpbmc6IGZ1bmN0aW9uKGxhdDIsIGxvbjIpIHtcclxuXHRcdHZhciBsb25naXR1ZGUxID0gcGFyc2VGbG9hdCh0aGlzLmxvbkFudGVyaW9yTWFwKTtcclxuXHRcdHZhciBsb25naXR1ZGUyID0gbG9uMjtcclxuXHJcblx0XHR2YXIgbGF0aXR1ZGUxICA9IHV0aWxzLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5sYXRBbnRlcmlvck1hcCk7XHJcblx0XHR2YXIgbGF0aXR1ZGUyICA9IHV0aWxzLmRlZ3JlZXNUb1JhZGlhbnMobGF0Mik7XHJcblxyXG5cdFx0dmFyIGxvbmdEaWZmICAgPSB1dGlscy5kZWdyZWVzVG9SYWRpYW5zKGxvbmdpdHVkZTIgLSBsb25naXR1ZGUxKTtcclxuXHJcblx0XHR2YXIgeSA9IE1hdGguc2luKGxvbmdEaWZmKSAqIE1hdGguY29zKGxhdGl0dWRlMik7XHJcblx0XHR2YXIgeCA9IE1hdGguY29zKGxhdGl0dWRlMSkgKiBNYXRoLnNpbihsYXRpdHVkZTIpIC0gTWF0aC5zaW4obGF0aXR1ZGUxKSAqIE1hdGguY29zKGxhdGl0dWRlMikgKiBNYXRoLmNvcyhsb25nRGlmZik7XHJcblx0XHJcblx0XHR2YXIgcmVzdWx0ID0gKHV0aWxzLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMih5LCB4KSkgKyAzNjApICUgMzYwO1xyXG5cdFx0aWYgKCByZXN1bHQgPiAwICkge1xyXG5cdFx0XHR0aGlzLmJlYXJpbmcgPSBwYXJzZUZsb2F0KHJlc3VsdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBaXJQbGFuZTtcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL0FpclBsYW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXHJcblxyXG5mdW5jdGlvbiBDb25zdGFudHMoKSB7XHJcbn07XHJcblxyXG5Db25zdGFudHMucHJvdG90eXBlLkRFU1RJTkFUSU9OXHRcdFx0XHRcdD0gXCJkZXN0aW5hdGlvblwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdBTUVfUEFVU0VEXHRcdFx0XHRcdD0gXCJnYW1lUGF1c2VkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQkFST01FVEVSXHRcdFx0XHRcdD0gXCJiYXJvbWV0ZXJcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT01QQVNTX0hFQURJTkdcdFx0XHRcdD0gXCJjb21wYXNzSGVhZGluZ1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjFfRlJFUVVFTkNZXHRcdFx0XHQ9IFwibmF2MUZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRlJFUVVFTkNZXHRcdFx0XHQ9IFwibmF2MkZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFJUlNQRUVEXHRcdFx0XHRcdD0gXCJhaXJzcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFMVElUVURFXHRcdFx0XHRcdD0gXCJhbHRpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkZVRUxfUVVBTlRJVFlcdFx0XHRcdD0gXCJmdWVscXVhbnRpdHlcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BUFVfUlVOTklOR1x0XHRcdFx0XHQ9IFwiYXB1cnVubmluZ1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTFfRlJFUVVFTkNZXHRcdFx0XHQ9IFwiY29tMUZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTJfRlJFUVVFTkNZXHRcdFx0XHQ9IFwiY29tMkZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTFfRlJFUVVFTkNZX1NUREJZXHRcdD0gXCJjb20xRnJlcUh6U3RkYnlcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00yX0ZSRVFVRU5DWV9TVERCWVx0XHQ9IFwiY29tMkZyZXFIelN0ZGJ5XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR1BTX0RJU1RBTkNFX01FVEVSU1x0XHRcdD0gXCJncHNETUVEaXN0TVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdQU19ESVNUQU5DRV9TRUNPTkRTXHRcdD0gXCJncHNETUVUaW1lU2Vjc1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjFfRElTVEFOQ0VfTkFVVElDQUxTXHRcdD0gXCJuYXYxRE1FRGlzdE5tXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9ESVNUQU5DRV9NSU5VVEVTXHRcdD0gXCJuYXYxRE1FRGlzdE1pblwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRElTVEFOQ0VfTkFVVElDQUxTXHRcdD0gXCJuYXYyRE1FRGlzdE5tXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMl9ESVNUQU5DRV9NSU5VVEVTXHRcdD0gXCJuYXYyRE1FRGlzdE1pblwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk9VVFNJREVfVEVNUEVSQVRVUkVfQ0VMU0lVU1x0PSBcIm91dHNpZGVUZW1wQ1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLlZFUlRJQ0FMX1NQRUVEXHRcdFx0XHQ9IFwidnNGcG1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HUk9VTkRfU1BFRURcdFx0XHRcdD0gXCJncm91bmRzcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLlRSVUVfQUlSU1BFRURcdFx0XHRcdD0gXCJ0cnVlX2FpcnNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTEFUSVRVREVcdFx0XHRcdFx0PSBcImxhdGl0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTE9OR0lUVURFXHRcdFx0XHRcdD0gXCJsb25naXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5XRUlHSFRfVE9UQUxfRlVFTFx0XHRcdD0gXCJ3ZWlnaHRUb3RhbEZ1ZWxcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfTU9ERVx0XHRcdFx0PSBcImF1dG9waWxvdE1vZGVcIjtcdFx0Ly8gKG9mZj0wLGZsaWdodCBkaXJlY3Rvcj0xLCBvbj0yKVxyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9BTFRJVFVERVx0XHRcdD0gXCJhdXRvcGlsb3RBbHRpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRFx0PSBcImF1dG9waWxvdFZTXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0FJUlBTUEVFRFx0XHRcdD0gXCJhdXRvcGlsb3RBaXJTcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9IRUFESU5HXHRcdFx0PSBcImF1dG9waWxvdEhlYWRpbmdcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uc3RhbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XHJcbmNvbnN0IGxvZ2dlciAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xyXG5jb25zdCBodHRwICAgICAgPSByZXF1aXJlKCdodHRwJyk7XHJcbmNvbnN0IGV4cHJlc3MgICA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgaXAgICAgICAgID0gcmVxdWlyZShcImlwXCIpO1xyXG5jb25zdCBwYXRoICAgICAgPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IGFwcFJvb3QgICA9IHJlcXVpcmUoJ2FwcC1yb290LXBhdGgnKTtcclxuIFxyXG5jb25zdCBQT1JUICAgICAgPSA4MDAwO1xyXG5jb25zdCBIT1NUICAgICAgPSBpcC5hZGRyZXNzKCk7IC8vJzE5Mi4xNjguMC4yMic7XHJcbmNvbnN0IHBhdGhGaWxlcyA9IGFwcFJvb3QucGF0aCArIFwiXFxcXGRpc3RcIjtcclxuY29uc3QgYXBwICAgICAgID0gZXhwcmVzcygpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxuLy8gVXBzIVxyXG5hcHAudXNlKCAoZXJyLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xyXG4gIGxvZ2dlci5lcnJvcihlcnIpO1xyXG4gIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoJ1NvbWV0aGluZyBicm9rZSEnKVxyXG59KVxyXG5cclxuLy8gRm9yIHRlc3RzIG9ubHlcclxuYXBwLmdldChcIi9oZWxsb1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLmVuZCgnSGVsbG8hJyk7XHJcbn0pXHJcblxyXG4vLyBVc2VyIEludGVyZmFjZSBTdGFydFxyXG5hcHAuZ2V0KFwiL1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGluZGV4Lmh0bWxcIik7XHJcbn0pXHJcblxyXG4vLyBTY3JpcHRzXHJcbmFwcC5nZXQoXCIvZnJvbnQuYnVuZGxlLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcZnJvbnQuYnVuZGxlLmpzXCIpO1xyXG59KVxyXG5hcHAuZ2V0KFwiL251bWVyYWwubWluLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcbGlic1xcXFxudW1lcmFsLm1pbi5qc1wiKTtcclxufSlcclxuYXBwLmdldChcIi9tYXJrZXJ3aXRobGFiZWwuanNcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxsaWJzXFxcXG1hcmtlcndpdGhsYWJlbC5qc1wiKTtcclxufSlcclxuYXBwLmdldChcIi9qcXVlcnktYmxpbmsuanNcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxsaWJzXFxcXGpxdWVyeS1ibGluay5qc1wiKTtcclxufSlcclxuXHJcbi8vIEltYWdlc1xyXG5hcHAuZ2V0KFwiL2xvYWRpbmcuZ2lmXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcaW1hZ2VzXFxcXGxvYWRpbmcuZ2lmXCIpO1xyXG59KVxyXG5cclxuLy8gRGF0YSBnYW1lXHJcbmFwcC5nZXQoXCIvZGF0YVwiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLnR5cGUoJ2pzb24nKTtcclxuICAgIC8vIE5vbiBQcmV0dHktUHJpbnRcclxuICAgIC8vcmVzcG9uc2Uuc2VuZCggYWlyUGxhbmUgKTtcclxuICAgIC8vIFByZXR0eS1QcmludFxyXG4gICAgcmVzcG9uc2Uuc2VuZChKU09OLnN0cmluZ2lmeShwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpLCBudWxsLCA0KSk7XHJcbiAgICBcclxufSlcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKGVycikgPT4ge1xyXG5cclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IobmV3IEVycm9yKGVyci50b1N0cmluZygpKS5zdGFjayk7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlci5pbmZvKCdIVFRQIFNlcnZlciBsaXN0ZW5pbmcgb24gJyArIEhPU1QgKyBcIjpcIiArIFBPUlQpO1xyXG59KVxyXG5cclxudmFyIHJlY2VpdmVVcGRhdGUgPSBmdW5jdGlvbiAoX3BsYW5lc0xpc3QpIHtcclxuICAgIHBsYW5lc0xpc3QgPSBfcGxhbmVzTGlzdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICByZWNlaXZlVXBkYXRlOiByZWNlaXZlVXBkYXRlXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpcFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9sb2dnZXIuanMnKShtb2R1bGUpO1xyXG5jb25zdCBtb2RlbCAgICAgICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XHJcbmNvbnN0IGRncmFtICAgICAgICA9IHJlcXVpcmUoJ2RncmFtJyk7XHJcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xyXG5jb25zdCBpcCAgICAgICAgICAgPSByZXF1aXJlKFwiaXBcIik7XHJcblxyXG5jb25zdCBQT1JUICAgPSA4ODgxO1xyXG5jb25zdCBIT1NUICAgPSBpcC5hZGRyZXNzKCk7XHJcbi8vJzE5Mi4xNjguMC4yMic7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBkZ3JhbS5jcmVhdGVTb2NrZXQoJ3VkcDQnKTtcclxuXHJcbnNlcnZlci5vbignbGlzdGVuaW5nJywgc3RhcnRTZXJ2ZXIpO1xyXG5zZXJ2ZXIub24oJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSk7XHJcbnNlcnZlci5iaW5kKFBPUlQsIEhPU1QpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoKSB7XHJcblx0dmFyIGFkZHJlc3MgPSBzZXJ2ZXIuYWRkcmVzcygpO1xyXG5cdGxvZ2dlci5pbmZvKCdVRFAgIFNlcnZlciBsaXN0ZW5pbmcgb24gJyArIGFkZHJlc3MuYWRkcmVzcyArIFwiOlwiICsgYWRkcmVzcy5wb3J0KTtcclxufVxyXG5cclxuY2xhc3MgTXlFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHt9XHJcbmNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBNeUVtaXR0ZXIoKTtcclxuZXhwb3J0cy5ldmVudEVtaXR0ZXIgPSBldmVudEVtaXR0ZXI7XHJcblxyXG5jb25zdCBDb25zdGFudHMgPSBuZXcgbW9kZWwuQ29uc3RhbnRzKCk7XHJcblxyXG52YXIgcGxhbmVzTGlzdCA9IG5ldyBtb2RlbC5QbGFuZXNMaXN0KCk7XHJcblxyXG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZShtZXNzYWdlLCByZW1vdGUpIHtcclxuXHR0cnkge1xyXG5cdFx0XHJcblx0XHR2YXIgaXAgICAgICAgICAgICAgICAgICA9IHJlbW90ZS5hZGRyZXNzO1xyXG5cdFx0dmFyIG1zZ3MgICAgICAgICAgICAgICAgPSBtZXNzYWdlLnRvU3RyaW5nKCd1dGY4Jyk7XHJcblx0XHR2YXIgYWlyUGxhbmUgICAgICAgICAgICA9IG5ldyBtb2RlbC5BaXJQbGFuZShpcCk7XHJcblxyXG5cdFx0bG9nZ2VyLmluZm8oXCJSZWNlaXZpbmcgYWlycGxhbmUgbWVzc2FnZSBmcm9tICVzXCIsIGlwKTtcclxuXHRcdGxvZ2dlci5kZWJ1ZyhcIlVEUCBNZXNzYWdlIHJlY2VpdmVkIGZyb20gJXM6ICVzXCIsIGlwLCBtc2dzKTtcclxuXHJcblx0ICAgXHRtc2dzLnNwbGl0KFwiO1wiKS5tYXAoIG1zZyA9PiB7XHJcblxyXG5cdCAgIFx0XHR2YXIgYXJyICAgPSBtc2cuc3BsaXQoXCI9XCIpO1xyXG5cdCAgIFx0XHR2YXIgbGFiZWwgPSBhcnJbMF07XHJcblx0ICAgXHRcdHZhciB2YWx1ZSA9IGFyclsxXTtcclxuXHJcblx0ICAgXHRcdHN3aXRjaChsYWJlbCkge1xyXG5cdCAgIFx0XHRcdCBjYXNlIENvbnN0YW50cy5ERVNUSU5BVElPTjoge1xyXG5cdCAgIFx0XHRcdFx0YWlyUGxhbmUuc2V0RGVzdGluYXRpb24odmFsdWUpXHJcblx0ICAgXHRcdFx0XHRicmVhaztcclxuXHQgICBcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HQU1FX1BBVVNFRDoge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldFBhdXNlKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5CQVJPTUVURVI6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRCYXJvbWV0ZXIodmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTVBBU1NfSEVBRElORzoge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldENvbXBhc3NIZWFkaW5nKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldE5hdjFGcmVxKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldE5hdjJGcmVxKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BSVJTUEVFRDoge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldEFpclNwZWVkKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BTFRJVFVERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuRlVFTF9RVUFOVElUWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldEZ1ZWxRdWFudGl0eSh2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVBVX1JVTk5JTkc6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTFfRlJFUVVFTkNZOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tMUZyZXEodmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTJfRlJFUVVFTkNZOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tMkZyZXEodmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTFfRlJFUVVFTkNZX1NUREJZOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00yX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX01FVEVSUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX1NFQ09ORFM6IHtcclxuXHRcdFx0XHQgXHQvKlxyXG5cdFx0XHRcdCBcdGZsb2F0IGRpc3RhbmNlTWludXRlcyA9IDA7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRkaXN0YW5jZU1pbnV0ZXMgPSBGbG9hdC5wYXJzZUZsb2F0KHZhbHVlKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKE51bWJlckZvcm1hdEV4Y2VwdGlvbiBlKSB7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlTWludXRlcyA+IDApIHtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZU1pbnV0ZXMgPSAoaW50KSBkaXN0YW5jZU1pbnV0ZXM7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VTZWNvbmRzID0gKGludCkgKChkaXN0YW5jZU1pbnV0ZXMgLSBpRGlzdGFuY2VNaW51dGVzKSAqIDYwKTtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZUhvdXJzID0gKGludCkgKGRpc3RhbmNlTWludXRlcyAvIDYwKTtcclxuXHRcdFx0XHRcdFx0U3RyaW5nIHJlc3VsdCA9IGRmLmZvcm1hdChpRGlzdGFuY2VIb3VycykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VNaW51dGVzKSArIFwiOlwiICsgZGYuZm9ybWF0KGlEaXN0YW5jZVNlY29uZHMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgcmVzdWx0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lLnB1dChpcC50b1N0cmluZygpLCBcIjBcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0IFx0Ki9cclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMl9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuT1VUU0lERV9URU1QRVJBVFVSRV9DRUxTSVVTOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0T3V0c2lkZVRlbXBlcmF0dXJlKHZhbHVlKTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuVkVSVElDQUxfU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRWU3BlZWQodmFsdWUpO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HUk9VTkRfU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRHcm91bmRTcGVlZCh2YWx1ZSk7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLlRSVUVfQUlSU1BFRUQ6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkxBVElUVURFOiB7XHJcblx0XHRcdFx0XHQgaWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xyXG5cdFx0XHRcdFx0XHQgYWlyUGxhbmUuc2V0TGF0QW50ZXJpb3JNYXAocGxhbmVzTGlzdC5nZXRBaXJQbGFuZShpcCkuZ2V0TGF0TWFwKCkpO1xyXG5cdFx0XHRcdFx0IH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFpclBsYW5lLnNldExhdEFudGVyaW9yTWFwKDApO1xyXG5cdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdCBhaXJQbGFuZS5zZXRMYXRNYXAodmFsdWUpO1xyXG5cdFx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkxPTkdJVFVERToge1xyXG5cdFx0XHRcdFx0aWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xyXG5cdFx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMb25BbnRlcmlvck1hcChwbGFuZXNMaXN0LmdldEFpclBsYW5lKGlwKS5nZXRMb25NYXAoKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMb25BbnRlcmlvck1hcCgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGFpclBsYW5lLnNldExvbk1hcCh2YWx1ZSk7XHJcblx0XHRcdFx0XHRhaXJQbGFuZS5jYWxjdWxhdGVCZWFyaW5nKHBhcnNlRmxvYXQoYWlyUGxhbmUuZ2V0TGF0TWFwKCkpLCBwYXJzZUZsb2F0KHZhbHVlKSk7XHJcblx0XHRcdFx0IFx0YnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuV0VJR0hUX1RPVEFMX0ZVRUw6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9NT0RFOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfQUxUSVRVREU6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX0FJUlBTUEVFRDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX0hFQURJTkc6IHticmVhazt9XHJcblx0ICAgXHRcdFx0IGRlZmF1bHQ6XHJcblx0ICAgXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHQgICB9XHJcblx0XHRcdCAgIFxyXG5cdCAgIFx0XHQgICBsb2dnZXIuZGVidWcoXCJNZXNzYWdlIGF0dHJpYnV0ZSBwYXJzZWQuLi46ICVzIC0gJXNcIiwgbGFiZWwsIHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cdFx0ICAgXHJcblx0XHRwbGFuZXNMaXN0LmFkZEFpclBsYW5lKGFpclBsYW5lLmdldElwKCksYWlyUGxhbmUpO1xyXG5cdFx0ZXZlbnRFbWl0dGVyLmVtaXQoJ3JlY2VpdmVkTWVzc2FnZScsIHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cdFx0bG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkpO1xyXG4gICBcdFx0dGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91ZHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9qcy91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgJy4vanMvbW9kZWwvQWlyUGxhbmUuanMnO1xyXG5pbXBvcnQgJy4vanMvdXRpbHMvbG9nZ2VyLmpzJztcclxuaW1wb3J0ICcuL2pzL2NvbmZpZy5qcyc7XHJcbmltcG9ydCAnLi9qcy9odHRwLXNlcnZlci5qcyc7XHJcbmltcG9ydCAnLi9qcy91ZHAtc2VydmVyLmpzJztcclxuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtYmFjay5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcblxyXG5mdW5jdGlvbiBQbGFuZXNMaXN0KCkge1xyXG5cdHRoaXMuYWlyUGxhbmVzID0ge307XHJcbn07XHJcblxyXG5QbGFuZXNMaXN0LnByb3RvdHlwZSA9IHtcclxuXHRnZXRBaXJQbGFuZTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmFpclBsYW5lc1tpcF07XHJcblx0fSxcclxuXHRhZGRBaXJQbGFuZTogZnVuY3Rpb24oaXAsIF9haXJQbGFuZSkge1xyXG5cdFx0dGhpcy5haXJQbGFuZXNbaXBdID0gX2FpclBsYW5lO1xyXG5cdH0sXHJcblx0Z2V0QWxsQWlyUGxhbmVzOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmFpclBsYW5lcztcclxuXHR9XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGFuZXNMaXN0O1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvUGxhbmVzTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcHAtcm9vdC1wYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZ3JhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRncmFtXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBjb25maWcgICAgID0gcmVxdWlyZSgnLi9jb25maWcnKTtcclxuY29uc3QgdXRpbHMgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgICA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcclxuY29uc3QgdWRwU2VydmVyICA9IHJlcXVpcmUoJy4vdWRwLXNlcnZlci5qcycpO1xyXG5jb25zdCBodHRwU2VydmVyID0gcmVxdWlyZSgnLi9odHRwLXNlcnZlci5qcycpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxubG9nZ2VyLmluZm8oJ1N0YXJ0IHgtbmF2aWdhdC4uLicpO1xyXG5cclxudWRwU2VydmVyLmV2ZW50RW1pdHRlci5vbigncmVjZWl2ZWRNZXNzYWdlJywgKF9wbGFuZXNMaXN0KSA9PiB7XHJcbiAgICBwbGFuZXNMaXN0ID0gX3BsYW5lc0xpc3Q7XHJcbiAgICBodHRwU2VydmVyLnJlY2VpdmVVcGRhdGUocGxhbmVzTGlzdCk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocGxhbmVzTGlzdC5nZXRBbGxBaXJQbGFuZXMoKSkuZm9yRWFjaChpcEFpclBsYW5lID0+IHtcclxuICAgICAgICBhaXJQbGFuZSA9IHBsYW5lc0xpc3QuZ2V0QWlyUGxhbmUoaXBBaXJQbGFuZSk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBaXJwbGFuZSAnJXMnIGF0IExvbmdpdHVkZS9MYXRpdHVkZTogJXMvJXMsIEFpclNwZWVkOiAlc1wiLCBhaXJQbGFuZS5nZXRJcCgpLGFpclBsYW5lLmdldExhdE1hcCgpLCBhaXJQbGFuZS5nZXRMb25NYXAoKSwgYWlyUGxhbmUuZ2V0QWlyU3BlZWQoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuZGVidWcoXCJMaXN0IG9mIGFpcnBsYW5lcy4uLjogJXNcIiwgSlNPTi5zdHJpbmdpZnkocGxhbmVzTGlzdCwgbnVsbCwgNCkpO1xyXG59KTtcclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=