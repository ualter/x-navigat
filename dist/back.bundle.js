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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

exports.AirPlane   = __webpack_require__(4);
exports.PlanesList = __webpack_require__(17);
exports.Constants  = __webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const winston = __webpack_require__(18);
const moment  = __webpack_require__(19);
const S       = __webpack_require__(20);

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
      return S(lbl).padRight(22,'-') + '>';
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
        level: 'debug',
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils     = __webpack_require__(0);
const logger    = __webpack_require__(2)(module);
const model     = __webpack_require__(1);
const http      = __webpack_require__(21);
const express   = __webpack_require__(22);
const ip        = __webpack_require__(7);
const path      = __webpack_require__(23);
const appRoot   = __webpack_require__(24);
 
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils        = __webpack_require__(0);
const logger       = __webpack_require__(2)(module);
const model        = __webpack_require__(1);
const dgram        = __webpack_require__(25);
const EventEmitter = __webpack_require__(26);
const ip           = __webpack_require__(7);

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

		logger.info("Message received: %s", msgs);

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
			   
	   		   logger.debug("Message...: %s - %s",label,value);
		});
		   
		planesList.addAirPlane(airPlane.getIp(),airPlane);
		eventEmitter.emit('receivedMessage', planesList);

    } catch (err) {
		logger.error(new Error(err.toString()));
   		throw err;
    }
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_model_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_model_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_model_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_model_AirPlane_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_model_AirPlane_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_model_AirPlane_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_http_server_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_http_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__js_http_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__js_app_js__);









/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("string");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("app-root-path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils      = __webpack_require__(0);
const logger     = __webpack_require__(2)(module);
const model      = __webpack_require__(1);
const udpServer  = __webpack_require__(8);
const httpServer = __webpack_require__(6);

var planesList = new model.PlanesList();

logger.info('Start x-navigat...');

udpServer.eventEmitter.on('receivedMessage', (_planesList) => {
    planesList = _planesList;
    httpServer.receiveUpdate(planesList);

    logger.debug("_planesList...: %s",planesList);
});



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjNjYWNmNDNiYmVlMzg2MzhhNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0FpclBsYW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2h0dHAtc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VkcC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL1BsYW5lc0xpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3RvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwcC1yb290LXBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDbEJBO0FBQ0E7QUFDQSw0Qzs7Ozs7O0FDRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxlQUFlLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSSxhQUFhO0FBQzFFLENBQUM7O0FBRUQ7QUFDQSxZQUFZLGVBQWUsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLGFBQWE7QUFDMUUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7Ozs7Ozs7QUN2TEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkI7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3RUEsK0I7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLHdDQUF3QztBQUN4QztBQUNBLGM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7O0FDbkJBLG9DOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJiYWNrLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyM2NhY2Y0M2JiZWUzODYzOGE0NCIsInZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcclxuXHJcbmV4cG9ydHMuZmFib25hY2NpID0gZnVuY3Rpb24gKG51bTEsbnVtMikge1xyXG4gICAgcmV0dXJuIG51bTErbnVtMjtcclxufTtcclxuXHJcbmV4cG9ydHMuc2F5SGVsbG9JblNwYW5pc2ggPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gXCJIb2xhXCI7XHJcbn07XHJcblxyXG5leHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbihkZWdyZWVzKSB7XHJcbiAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xyXG4gIHJldHVybiByYWRpYW5zO1xyXG59O1xyXG5cclxuZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24ocmFkaWFucykge1xyXG4gIHZhciBkZWdyZWVzID0gcmFkaWFucyAqICgxODAgLyBNYXRoLlBJKTtcclxuICByZXR1cm4gZGVncmVlcztcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLkFpclBsYW5lICAgPSByZXF1aXJlKFwiLi9BaXJQbGFuZS5qc1wiKTtcclxuZXhwb3J0cy5QbGFuZXNMaXN0ID0gcmVxdWlyZShcIi4vUGxhbmVzTGlzdC5qc1wiKTtcclxuZXhwb3J0cy5Db25zdGFudHMgID0gcmVxdWlyZShcIi4vQ29uc3RhbnRzLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHdpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJyk7XHJcbmNvbnN0IG1vbWVudCAgPSByZXF1aXJlKCdtb21lbnQnKTtcclxuY29uc3QgUyAgICAgICA9IHJlcXVpcmUoJ3N0cmluZycpO1xyXG5cclxuY29uc3QgbXlDb25zb2xlRm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQucHJpbnRmKGluZm8gPT4ge1xyXG4gIHJldHVybiBgJHtpbmZvLnRpbWVzdGFtcH0gWyR7aW5mby5sYWJlbH1dICR7aW5mby5sZXZlbH06ICR7aW5mby5tZXNzYWdlfWA7XHJcbn0pO1xyXG5cclxuY29uc3QgbXlKc29uRm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQuanNvbihpbmZvID0+IHtcclxuICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9IFske2luZm8ubGFiZWx9XSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gO1xyXG59KTtcclxuXHJcbnZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcclxuICAgIGlmICggY2FsbGluZ01vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICB2YXIgcGFydHMgPSBjYWxsaW5nTW9kdWxlLmZpbGVuYW1lLnNwbGl0KCdcXFxcJyk7XHJcbiAgICAgIHZhciBsYmwgICA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdICsgJy8nICsgcGFydHMucG9wKCk7XHJcbiAgICAgIHJldHVybiBTKGxibCkucGFkUmlnaHQoMjIsJy0nKSArICc+JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnYnVuZGxlZCc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcclxuICBcclxuICB2YXIgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xyXG4gICAgdHJhbnNwb3J0czogW1xyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoeyBcclxuICAgICAgICBsZXZlbDogJ2Vycm9yJyxcclxuICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy9lcnJvci5sb2cnLCBcclxuICAgICAgICBtYXhzaXplOiA1MjQyODgwLCAvLzVNQlxyXG4gICAgICAgIG1heEZpbGVzOiA1LFxyXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQucHJldHR5UHJpbnQoKSxcclxuICAgICAgICAgICBteUpzb25Gb3JtYXRcclxuICAgICAgICApXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUgKHtcclxuICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy90cmFjZS5sb2cnLFxyXG4gICAgICAgIG1heHNpemU6IDUyNDI4ODAsIC8vNU1CXHJcbiAgICAgICAgbWF4RmlsZXM6IDUsIFxyXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQucHJldHR5UHJpbnQoKSxcclxuICAgICAgICAgICBteUpzb25Gb3JtYXRcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgfSk7XHJcblxyXG4gIGlmICggcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyApIHtcclxuICAgIGxvZ2dlci5hZGQoXHJcbiAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XHJcbiAgICAgICAgbGV2ZWw6ICdkZWJ1ZycsXHJcbiAgICAgICAganNvbjogZmFsc2UsXHJcbiAgICAgICAgY29sb3JpemU6IHRydWUsXHJcbiAgICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lIChcclxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcclxuICAgICAgICAgIG15Q29uc29sZUZvcm1hdFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9nZ2VyO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3V0aWxzL2xvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXV0aG9yIFVhbHRlciBKci5cclxuY29uc3QgdXRpbHMgICAgICAgID0gcmVxdWlyZSgnLi8uLi91dGlscy91dGlscy5qcycpO1xyXG5cclxuLy8gQ2xhc3MgQ29uc3RydWN0b3IgYW5kIEF0dHJpYnV0ZXNcclxuZnVuY3Rpb24gQWlyUGxhbmUoaXApIHtcclxuXHR0aGlzLmlwICAgICAgICAgICAgICAgICA9IGlwO1xyXG5cdHRoaXMubGF0TWFwXHRcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5sb25NYXBcdFx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLmxhdEFudGVyaW9yTWFwXHRcdD0gXCJcIjtcclxuXHR0aGlzLmxvbkFudGVyaW9yTWFwXHRcdD0gXCJcIjtcclxuXHR0aGlzLmFsdE1hcFx0XHRcdFx0PSAwIDtcclxuXHR0aGlzLmFpclNwZWVkXHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMudlNwZWVkXHRcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5ncm91bmRTcGVlZFx0XHQ9IDA7XHJcblx0dGhpcy5iZWFyaW5nXHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMuZGVzdGluYXRpb25cdFx0PSBcIlwiO1xyXG5cdHRoaXMuZ3BzRGlzdGFuY2VObVx0XHQ9IFwiXCI7XHJcblx0dGhpcy5ncHNEaXN0YW5jZVRpbWVcdD0gXCJcIjtcclxuXHR0aGlzLmJhcm9tZXRlclx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLmZ1ZWxRdWFudGl0eVx0XHQ9IFwiXCI7XHJcblx0dGhpcy5uYXYxRnJlcVx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLm5hdjJGcmVxXHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMucGF1c2VcdFx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLmNvbXBhc3NIZWFkaW5nXHRcdD0gXCJcIjtcclxuXHR0aGlzLm91dHNpZGVUZW1wZXJhdHVyZVx0PSBcIlwiO1xyXG5cdHRoaXMuY29tMUZyZXFcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5jb20yRnJlcVx0XHRcdD0gXCJcIjtcclxufTtcclxuXHJcbi8vIENsYXNzIEZ1bmN0aW9uc1xyXG5BaXJQbGFuZS5wcm90b3R5cGUgPSB7XHJcblx0Z2V0SXA6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5pcDtcclxuXHR9LFxyXG5cdGdldExhdE1hcDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYXRNYXA7XHJcblx0fSxcclxuXHRzZXRMYXRNYXA6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5sYXRNYXAgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRMb25NYXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9uTWFwO1xyXG5cdH0sXHJcblx0c2V0TG9uTWFwOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMubG9uTWFwID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TGF0QW50ZXJpb3JNYXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGF0QW50ZXJpb3JNYXA7XHJcblx0fSxcclxuXHRzZXRMYXRBbnRlcmlvck1hcDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmxhdEFudGVyaW9yTWFwID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TG9uQW50ZXJpb3JNYXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9uQW50ZXJpb3JNYXA7XHJcblx0fSxcclxuXHRzZXRMb25BbnRlcmlvck1hcDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmxvbkFudGVyaW9yTWFwID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QWx0TWFwOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmFsdE1hcDtcclxuXHR9LFxyXG5cdHNldEFsdE1hcDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmFsdE1hcCA9IHZscjtcclxuXHR9LFxyXG5cdGdldEFpclNwZWVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmFpclNwZWVkO1xyXG5cdH0sXHJcblx0c2V0QWlyU3BlZWQ6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5haXJTcGVlZCA9IHZscjtcclxuXHR9LFxyXG5cdGdldFZTcGVlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52U3BlZWQ7XHJcblx0fSxcclxuXHRzZXRWU3BlZWQ6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy52U3BlZWQgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRHcm91bmRTcGVlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ncm91bmRTcGVlZDtcclxuXHR9LFxyXG5cdHNldEdyb3VuZFNwZWVkOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuZ3JvdW5kU3BlZWQgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRCZWFyaW5nOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmJlYXJpbmc7XHJcblx0fSxcclxuXHRzZXRCZWFyaW5nOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuYmVhcmluZyA9IHZscjtcclxuXHR9LFxyXG5cdGdldERlc3RpbmF0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmRlc3RpbmF0aW9uO1xyXG5cdH0sXHJcblx0c2V0RGVzdGluYXRpb246IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5kZXN0aW5hdGlvbiA9IHZscjtcclxuXHR9LFxyXG5cdGdldEdwc0Rpc3RhbmNlTm06IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3BzRGlzdGFuY2VObTtcclxuXHR9LFxyXG5cdHNldEdwc0Rpc3RhbmNlTm06IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5ncHNEaXN0YW5jZU5tID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0R3BzRGlzdGFuY2VUaW1lOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmdwc0Rpc3RhbmNlVGltZTtcclxuXHR9LFxyXG5cdHNldEdwc0Rpc3RhbmNlVGltZTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEJhcm9tZXRlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iYXJvbWV0ZXI7XHJcblx0fSxcclxuXHRzZXRCYXJvbWV0ZXI6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5iYXJvbWV0ZXIgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRGdWVsUXVhbnRpdHk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVlbFF1YW50aXR5O1xyXG5cdH0sXHJcblx0c2V0RnVlbFF1YW50aXR5OiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuZnVlbFF1YW50aXR5ID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TmF2MUZyZXE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2MUZyZXE7XHJcblx0fSxcclxuXHRzZXROYXYxRnJlcTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLm5hdjFGcmVxID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TmF2MkZyZXE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2MkZyZXE7XHJcblx0fSxcclxuXHRzZXROYXYyRnJlcTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLm5hdjJGcmVxID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0UGF1c2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGF1c2U7XHJcblx0fSxcclxuXHRzZXRQYXVzZTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLnBhdXNlID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0Q29tcGFzc0hlYWRpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcGFzc0hlYWRpbmc7XHJcblx0fSxcclxuXHRzZXRDb21wYXNzSGVhZGluZzogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmNvbXBhc3NIZWFkaW5nID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0T3V0c2lkZVRlbXBlcmF0dXJlOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLm91dHNpZGVUZW1wZXJhdHVyZTtcclxuXHR9LFxyXG5cdHNldE91dHNpZGVUZW1wZXJhdHVyZTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLm91dHNpZGVUZW1wZXJhdHVyZSA9IHZscjtcclxuXHR9LFxyXG5cdGdldENvbTFGcmVxOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbTFGcmVxO1xyXG5cdH0sXHJcblx0c2V0Q29tMUZyZXE6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5jb20xRnJlcSA9IHZscjtcclxuXHR9LFxyXG5cdGdldENvbTJGcmVxOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbTJGcmVxO1xyXG5cdH0sXHJcblx0c2V0Q29tMkZyZXE6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5jb20yRnJlcSA9IHZscjtcclxuXHR9LFxyXG5cclxuXHRjYWxjdWxhdGVCZWFyaW5nOiBmdW5jdGlvbihsYXQyLCBsb24yKSB7XHJcblx0XHR2YXIgbG9uZ2l0dWRlMSA9IHBhcnNlRmxvYXQodGhpcy5sb25BbnRlcmlvck1hcCk7XHJcblx0XHR2YXIgbG9uZ2l0dWRlMiA9IGxvbjI7XHJcblxyXG5cdFx0dmFyIGxhdGl0dWRlMSAgPSB1dGlscy5kZWdyZWVzVG9SYWRpYW5zKHRoaXMubGF0QW50ZXJpb3JNYXApO1xyXG5cdFx0dmFyIGxhdGl0dWRlMiAgPSB1dGlscy5kZWdyZWVzVG9SYWRpYW5zKGxhdDIpO1xyXG5cclxuXHRcdHZhciBsb25nRGlmZiAgID0gdXRpbHMuZGVncmVlc1RvUmFkaWFucyhsb25naXR1ZGUyIC0gbG9uZ2l0dWRlMSk7XHJcblxyXG5cdFx0dmFyIHkgPSBNYXRoLnNpbihsb25nRGlmZikgKiBNYXRoLmNvcyhsYXRpdHVkZTIpO1xyXG5cdFx0dmFyIHggPSBNYXRoLmNvcyhsYXRpdHVkZTEpICogTWF0aC5zaW4obGF0aXR1ZGUyKSAtIE1hdGguc2luKGxhdGl0dWRlMSkgKiBNYXRoLmNvcyhsYXRpdHVkZTIpICogTWF0aC5jb3MobG9uZ0RpZmYpO1xyXG5cdFxyXG5cdFx0dmFyIHJlc3VsdCA9ICh1dGlscy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoeSwgeCkpICsgMzYwKSAlIDM2MDtcclxuXHRcdGlmICggcmVzdWx0ID4gMCApIHtcclxuXHRcdFx0dGhpcy5iZWFyaW5nID0gcGFyc2VGbG9hdChyZXN1bHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWlyUGxhbmU7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9BaXJQbGFuZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBdXRob3IgVWFsdGVyIEpyLlxyXG5cclxuZnVuY3Rpb24gQ29uc3RhbnRzKCkge1xyXG59O1xyXG5cclxuQ29uc3RhbnRzLnByb3RvdHlwZS5ERVNUSU5BVElPTlx0XHRcdFx0XHQ9IFwiZGVzdGluYXRpb25cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HQU1FX1BBVVNFRFx0XHRcdFx0XHQ9IFwiZ2FtZVBhdXNlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkJBUk9NRVRFUlx0XHRcdFx0XHQ9IFwiYmFyb21ldGVyXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NUEFTU19IRUFESU5HXHRcdFx0XHQ9IFwiY29tcGFzc0hlYWRpbmdcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0ZSRVFVRU5DWVx0XHRcdFx0PSBcIm5hdjFGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0ZSRVFVRU5DWVx0XHRcdFx0PSBcIm5hdjJGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BSVJTUEVFRFx0XHRcdFx0XHQ9IFwiYWlyc3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BTFRJVFVERVx0XHRcdFx0XHQ9IFwiYWx0aXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5GVUVMX1FVQU5USVRZXHRcdFx0XHQ9IFwiZnVlbHF1YW50aXR5XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVBVX1JVTk5JTkdcdFx0XHRcdFx0PSBcImFwdXJ1bm5pbmdcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00xX0ZSRVFVRU5DWVx0XHRcdFx0PSBcImNvbTFGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00yX0ZSRVFVRU5DWVx0XHRcdFx0PSBcImNvbTJGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00xX0ZSRVFVRU5DWV9TVERCWVx0XHQ9IFwiY29tMUZyZXFIelN0ZGJ5XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMl9GUkVRVUVOQ1lfU1REQllcdFx0PSBcImNvbTJGcmVxSHpTdGRieVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdQU19ESVNUQU5DRV9NRVRFUlNcdFx0XHQ9IFwiZ3BzRE1FRGlzdE1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HUFNfRElTVEFOQ0VfU0VDT05EU1x0XHQ9IFwiZ3BzRE1FVGltZVNlY3NcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0RJU1RBTkNFX05BVVRJQ0FMU1x0XHQ9IFwibmF2MURNRURpc3RObVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjFfRElTVEFOQ0VfTUlOVVRFU1x0XHQ9IFwibmF2MURNRURpc3RNaW5cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0RJU1RBTkNFX05BVVRJQ0FMU1x0XHQ9IFwibmF2MkRNRURpc3RObVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRElTVEFOQ0VfTUlOVVRFU1x0XHQ9IFwibmF2MkRNRURpc3RNaW5cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5PVVRTSURFX1RFTVBFUkFUVVJFX0NFTFNJVVNcdD0gXCJvdXRzaWRlVGVtcENcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5WRVJUSUNBTF9TUEVFRFx0XHRcdFx0PSBcInZzRnBtXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR1JPVU5EX1NQRUVEXHRcdFx0XHQ9IFwiZ3JvdW5kc3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5UUlVFX0FJUlNQRUVEXHRcdFx0XHQ9IFwidHJ1ZV9haXJzcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkxBVElUVURFXHRcdFx0XHRcdD0gXCJsYXRpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkxPTkdJVFVERVx0XHRcdFx0XHQ9IFwibG9uZ2l0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuV0VJR0hUX1RPVEFMX0ZVRUxcdFx0XHQ9IFwid2VpZ2h0VG90YWxGdWVsXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX01PREVcdFx0XHRcdD0gXCJhdXRvcGlsb3RNb2RlXCI7XHRcdC8vIChvZmY9MCxmbGlnaHQgZGlyZWN0b3I9MSwgb249MilcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfQUxUSVRVREVcdFx0XHQ9IFwiYXV0b3BpbG90QWx0aXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfVkVSVElDQUxfU1BFRURcdD0gXCJhdXRvcGlsb3RWU1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9BSVJQU1BFRURcdFx0XHQ9IFwiYXV0b3BpbG90QWlyU3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfSEVBRElOR1x0XHRcdD0gXCJhdXRvcGlsb3RIZWFkaW5nXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9Db25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdXRpbHMgICAgID0gcmVxdWlyZSgnLi91dGlscy91dGlscy5qcycpO1xyXG5jb25zdCBsb2dnZXIgICAgPSByZXF1aXJlKCcuL3V0aWxzL2xvZ2dlci5qcycpKG1vZHVsZSk7XHJcbmNvbnN0IG1vZGVsICAgICA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcclxuY29uc3QgaHR0cCAgICAgID0gcmVxdWlyZSgnaHR0cCcpO1xyXG5jb25zdCBleHByZXNzICAgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IGlwICAgICAgICA9IHJlcXVpcmUoXCJpcFwiKTtcclxuY29uc3QgcGF0aCAgICAgID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBhcHBSb290ICAgPSByZXF1aXJlKCdhcHAtcm9vdC1wYXRoJyk7XHJcbiBcclxuY29uc3QgUE9SVCAgICAgID0gODAwMDtcclxuY29uc3QgSE9TVCAgICAgID0gaXAuYWRkcmVzcygpOyAvLycxOTIuMTY4LjAuMjInO1xyXG5jb25zdCBwYXRoRmlsZXMgPSBhcHBSb290LnBhdGggKyBcIlxcXFxkaXN0XCI7XHJcbmNvbnN0IGFwcCAgICAgICA9IGV4cHJlc3MoKTtcclxuXHJcbnZhciBwbGFuZXNMaXN0ID0gbmV3IG1vZGVsLlBsYW5lc0xpc3QoKTtcclxuXHJcbi8vIFVwcyFcclxuYXBwLnVzZSggKGVyciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcclxuICBsb2dnZXIuZXJyb3IoZXJyKTtcclxuICByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKCdTb21ldGhpbmcgYnJva2UhJylcclxufSlcclxuXHJcbi8vIEZvciB0ZXN0cyBvbmx5XHJcbmFwcC5nZXQoXCIvaGVsbG9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5lbmQoJ0hlbGxvIScpO1xyXG59KVxyXG5cclxuLy8gVXNlciBJbnRlcmZhY2UgU3RhcnRcclxuYXBwLmdldChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxpbmRleC5odG1sXCIpO1xyXG59KVxyXG5cclxuLy8gU2NyaXB0c1xyXG5hcHAuZ2V0KFwiL2Zyb250LmJ1bmRsZS5qc1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGZyb250LmJ1bmRsZS5qc1wiKTtcclxufSlcclxuYXBwLmdldChcIi9udW1lcmFsLm1pbi5qc1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGxpYnNcXFxcbnVtZXJhbC5taW4uanNcIik7XHJcbn0pXHJcbmFwcC5nZXQoXCIvbWFya2Vyd2l0aGxhYmVsLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcbGlic1xcXFxtYXJrZXJ3aXRobGFiZWwuanNcIik7XHJcbn0pXHJcbmFwcC5nZXQoXCIvanF1ZXJ5LWJsaW5rLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcbGlic1xcXFxqcXVlcnktYmxpbmsuanNcIik7XHJcbn0pXHJcblxyXG4vLyBJbWFnZXNcclxuYXBwLmdldChcIi9sb2FkaW5nLmdpZlwiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGltYWdlc1xcXFxsb2FkaW5nLmdpZlwiKTtcclxufSlcclxuXHJcbi8vIERhdGEgZ2FtZVxyXG5hcHAuZ2V0KFwiL2RhdGFcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS50eXBlKCdqc29uJyk7XHJcbiAgICAvLyBOb24gUHJldHR5LVByaW50XHJcbiAgICAvL3Jlc3BvbnNlLnNlbmQoIGFpclBsYW5lICk7XHJcbiAgICAvLyBQcmV0dHktUHJpbnRcclxuICAgIHJlc3BvbnNlLnNlbmQoSlNPTi5zdHJpbmdpZnkocGxhbmVzTGlzdC5nZXRBbGxBaXJQbGFuZXMoKSwgbnVsbCwgNCkpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5hcHAubGlzdGVuKFBPUlQsIChlcnIpID0+IHtcclxuXHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkuc3RhY2spO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZXIuaW5mbygnSFRUUCBTZXJ2ZXIgbGlzdGVuaW5nIG9uICcgKyBIT1NUICsgXCI6XCIgKyBQT1JUKTtcclxufSlcclxuXHJcbnZhciByZWNlaXZlVXBkYXRlID0gZnVuY3Rpb24gKF9wbGFuZXNMaXN0KSB7XHJcbiAgICBwbGFuZXNMaXN0ID0gX3BsYW5lc0xpc3Q7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVjZWl2ZVVwZGF0ZTogcmVjZWl2ZVVwZGF0ZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2h0dHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXBcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XHJcbmNvbnN0IGxvZ2dlciAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xyXG5jb25zdCBkZ3JhbSAgICAgICAgPSByZXF1aXJlKCdkZ3JhbScpO1xyXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcclxuY29uc3QgaXAgICAgICAgICAgID0gcmVxdWlyZShcImlwXCIpO1xyXG5cclxuY29uc3QgUE9SVCAgID0gODg4MTtcclxuY29uc3QgSE9TVCAgID0gaXAuYWRkcmVzcygpO1xyXG4vLycxOTIuMTY4LjAuMjInO1xyXG5cclxuY29uc3Qgc2VydmVyID0gZGdyYW0uY3JlYXRlU29ja2V0KCd1ZHA0Jyk7XHJcblxyXG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIHN0YXJ0U2VydmVyKTtcclxuc2VydmVyLm9uKCdtZXNzYWdlJywgcmVjZWl2ZU1lc3NhZ2UpO1xyXG5zZXJ2ZXIuYmluZChQT1JULCBIT1NUKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xyXG5cdHZhciBhZGRyZXNzID0gc2VydmVyLmFkZHJlc3MoKTtcclxuXHRsb2dnZXIuaW5mbygnVURQICBTZXJ2ZXIgbGlzdGVuaW5nIG9uICcgKyBhZGRyZXNzLmFkZHJlc3MgKyBcIjpcIiArIGFkZHJlc3MucG9ydCk7XHJcbn1cclxuXHJcbmNsYXNzIE15RW1pdHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7fVxyXG5jb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgTXlFbWl0dGVyKCk7XHJcbmV4cG9ydHMuZXZlbnRFbWl0dGVyID0gZXZlbnRFbWl0dGVyO1xyXG5cclxuY29uc3QgQ29uc3RhbnRzID0gbmV3IG1vZGVsLkNvbnN0YW50cygpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxuZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UobWVzc2FnZSwgcmVtb3RlKSB7XHJcblx0dHJ5IHtcclxuXHRcdFxyXG5cdFx0dmFyIGlwICAgICAgICAgICAgICAgICAgPSByZW1vdGUuYWRkcmVzcztcclxuXHRcdHZhciBtc2dzICAgICAgICAgICAgICAgID0gbWVzc2FnZS50b1N0cmluZygndXRmOCcpO1xyXG5cdFx0dmFyIGFpclBsYW5lICAgICAgICAgICAgPSBuZXcgbW9kZWwuQWlyUGxhbmUoaXApO1xyXG5cclxuXHRcdGxvZ2dlci5pbmZvKFwiTWVzc2FnZSByZWNlaXZlZDogJXNcIiwgbXNncyk7XHJcblxyXG5cdCAgIFx0bXNncy5zcGxpdChcIjtcIikubWFwKCBtc2cgPT4ge1xyXG5cclxuXHQgICBcdFx0dmFyIGFyciAgID0gbXNnLnNwbGl0KFwiPVwiKTtcclxuXHQgICBcdFx0dmFyIGxhYmVsID0gYXJyWzBdO1xyXG5cdCAgIFx0XHR2YXIgdmFsdWUgPSBhcnJbMV07XHJcblxyXG5cdCAgIFx0XHRzd2l0Y2gobGFiZWwpIHtcclxuXHQgICBcdFx0XHQgY2FzZSBDb25zdGFudHMuREVTVElOQVRJT046IHtcclxuXHQgICBcdFx0XHRcdGFpclBsYW5lLnNldERlc3RpbmF0aW9uKHZhbHVlKVxyXG5cdCAgIFx0XHRcdFx0YnJlYWs7XHJcblx0ICAgXHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR0FNRV9QQVVTRUQ6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRQYXVzZSh2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQkFST01FVEVSOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0QmFyb21ldGVyKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT01QQVNTX0hFQURJTkc6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRDb21wYXNzSGVhZGluZyh2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9GUkVRVUVOQ1k6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXROYXYxRnJlcSh2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMl9GUkVRVUVOQ1k6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXROYXYyRnJlcSh2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQUlSU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRBaXJTcGVlZCh2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQUxUSVRVREU6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkZVRUxfUVVBTlRJVFk6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRGdWVsUXVhbnRpdHkodmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFQVV9SVU5OSU5HOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00xX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldENvbTFGcmVxKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00yX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldENvbTJGcmVxKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00xX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NMl9GUkVRVUVOQ1lfU1REQlk6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdQU19ESVNUQU5DRV9NRVRFUlM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdQU19ESVNUQU5DRV9TRUNPTkRTOiB7XHJcblx0XHRcdFx0IFx0LypcclxuXHRcdFx0XHQgXHRmbG9hdCBkaXN0YW5jZU1pbnV0ZXMgPSAwO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0ZGlzdGFuY2VNaW51dGVzID0gRmxvYXQucGFyc2VGbG9hdCh2YWx1ZSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChOdW1iZXJGb3JtYXRFeGNlcHRpb24gZSkge1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChkaXN0YW5jZU1pbnV0ZXMgPiAwKSB7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VNaW51dGVzID0gKGludCkgZGlzdGFuY2VNaW51dGVzO1xyXG5cdFx0XHRcdFx0XHRpbnQgaURpc3RhbmNlU2Vjb25kcyA9IChpbnQpICgoZGlzdGFuY2VNaW51dGVzIC0gaURpc3RhbmNlTWludXRlcykgKiA2MCk7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VIb3VycyA9IChpbnQpIChkaXN0YW5jZU1pbnV0ZXMgLyA2MCk7XHJcblx0XHRcdFx0XHRcdFN0cmluZyByZXN1bHQgPSBkZi5mb3JtYXQoaURpc3RhbmNlSG91cnMpICsgXCI6XCIgKyBkZi5mb3JtYXQoaURpc3RhbmNlTWludXRlcykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VTZWNvbmRzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5ncHNEaXN0YW5jZVRpbWUucHV0KGlwLnRvU3RyaW5nKCksIHJlc3VsdCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgXCIwXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCBcdCovXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRElTVEFOQ0VfTkFVVElDQUxTOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0RJU1RBTkNFX01JTlVURVM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTkFVVElDQUxTOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0RJU1RBTkNFX01JTlVURVM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk9VVFNJREVfVEVNUEVSQVRVUkVfQ0VMU0lVUzoge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldE91dHNpZGVUZW1wZXJhdHVyZSh2YWx1ZSk7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLlZFUlRJQ0FMX1NQRUVEOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0VlNwZWVkKHZhbHVlKTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1JPVU5EX1NQRUVEOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0R3JvdW5kU3BlZWQodmFsdWUpO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5UUlVFX0FJUlNQRUVEOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5MQVRJVFVERToge1xyXG5cdFx0XHRcdFx0IGlmICggaXAgaW4gcGxhbmVzTGlzdC5nZXRBbGxBaXJQbGFuZXMoKSApIHtcclxuXHRcdFx0XHRcdFx0IGFpclBsYW5lLnNldExhdEFudGVyaW9yTWFwKHBsYW5lc0xpc3QuZ2V0QWlyUGxhbmUoaXApLmdldExhdE1hcCgpKTtcclxuXHRcdFx0XHRcdCB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMYXRBbnRlcmlvck1hcCgwKTtcclxuXHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHQgYWlyUGxhbmUuc2V0TGF0TWFwKHZhbHVlKTtcclxuXHRcdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5MT05HSVRVREU6IHtcclxuXHRcdFx0XHRcdGlmICggaXAgaW4gcGxhbmVzTGlzdC5nZXRBbGxBaXJQbGFuZXMoKSApIHtcclxuXHRcdFx0XHRcdFx0YWlyUGxhbmUuc2V0TG9uQW50ZXJpb3JNYXAocGxhbmVzTGlzdC5nZXRBaXJQbGFuZShpcCkuZ2V0TG9uTWFwKCkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YWlyUGxhbmUuc2V0TG9uQW50ZXJpb3JNYXAoMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMb25NYXAodmFsdWUpO1xyXG5cdFx0XHRcdFx0YWlyUGxhbmUuY2FsY3VsYXRlQmVhcmluZyhwYXJzZUZsb2F0KGFpclBsYW5lLmdldExhdE1hcCgpKSwgcGFyc2VGbG9hdCh2YWx1ZSkpO1xyXG5cdFx0XHRcdCBcdGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLldFSUdIVF9UT1RBTF9GVUVMOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfTU9ERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX0FMVElUVURFOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfVkVSVElDQUxfU1BFRUQ6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9BSVJQU1BFRUQ6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9IRUFESU5HOiB7YnJlYWs7fVxyXG5cdCAgIFx0XHRcdCBkZWZhdWx0OlxyXG5cdCAgIFx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0ICAgfVxyXG5cdFx0XHQgICBcclxuXHQgICBcdFx0ICAgbG9nZ2VyLmRlYnVnKFwiTWVzc2FnZS4uLjogJXMgLSAlc1wiLGxhYmVsLHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cdFx0ICAgXHJcblx0XHRwbGFuZXNMaXN0LmFkZEFpclBsYW5lKGFpclBsYW5lLmdldElwKCksYWlyUGxhbmUpO1xyXG5cdFx0ZXZlbnRFbWl0dGVyLmVtaXQoJ3JlY2VpdmVkTWVzc2FnZScsIHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cdFx0bG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkpO1xyXG4gICBcdFx0dGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91ZHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9qcy91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgJy4vanMvbW9kZWwvQWlyUGxhbmUuanMnO1xyXG5pbXBvcnQgJy4vanMvdXRpbHMvbG9nZ2VyLmpzJztcclxuaW1wb3J0ICcuL2pzL2h0dHAtc2VydmVyLmpzJztcclxuaW1wb3J0ICcuL2pzL3VkcC1zZXJ2ZXIuanMnO1xyXG5pbXBvcnQgJy4vanMvYXBwLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC1iYWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuXHJcbmZ1bmN0aW9uIFBsYW5lc0xpc3QoKSB7XHJcblx0dGhpcy5haXJQbGFuZXMgPSB7fTtcclxufTtcclxuXHJcblBsYW5lc0xpc3QucHJvdG90eXBlID0ge1xyXG5cdGdldEFpclBsYW5lOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWlyUGxhbmVzW2lwXTtcclxuXHR9LFxyXG5cdGFkZEFpclBsYW5lOiBmdW5jdGlvbihpcCwgX2FpclBsYW5lKSB7XHJcblx0XHR0aGlzLmFpclBsYW5lc1tpcF0gPSBfYWlyUGxhbmU7XHJcblx0fSxcclxuXHRnZXRBbGxBaXJQbGFuZXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWlyUGxhbmVzO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYW5lc0xpc3Q7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9QbGFuZXNMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2luc3RvblwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwcC1yb290LXBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhcHAtcm9vdC1wYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRncmFtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGdyYW1cIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZlbnRzXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XHJcbmNvbnN0IGxvZ2dlciAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2xvZ2dlci5qcycpKG1vZHVsZSk7XHJcbmNvbnN0IG1vZGVsICAgICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XHJcbmNvbnN0IHVkcFNlcnZlciAgPSByZXF1aXJlKCcuL3VkcC1zZXJ2ZXIuanMnKTtcclxuY29uc3QgaHR0cFNlcnZlciA9IHJlcXVpcmUoJy4vaHR0cC1zZXJ2ZXIuanMnKTtcclxuXHJcbnZhciBwbGFuZXNMaXN0ID0gbmV3IG1vZGVsLlBsYW5lc0xpc3QoKTtcclxuXHJcbmxvZ2dlci5pbmZvKCdTdGFydCB4LW5hdmlnYXQuLi4nKTtcclxuXHJcbnVkcFNlcnZlci5ldmVudEVtaXR0ZXIub24oJ3JlY2VpdmVkTWVzc2FnZScsIChfcGxhbmVzTGlzdCkgPT4ge1xyXG4gICAgcGxhbmVzTGlzdCA9IF9wbGFuZXNMaXN0O1xyXG4gICAgaHR0cFNlcnZlci5yZWNlaXZlVXBkYXRlKHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIGxvZ2dlci5kZWJ1ZyhcIl9wbGFuZXNMaXN0Li4uOiAlc1wiLHBsYW5lc0xpc3QpO1xyXG59KTtcclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=