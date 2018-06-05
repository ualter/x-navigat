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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTkzNGNjZjIzY2QzODUwNzZmYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0FpclBsYW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2h0dHAtc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VkcC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL1BsYW5lc0xpc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3RvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwcC1yb290LXBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDbEJBO0FBQ0E7QUFDQSw0Qzs7Ozs7O0FDRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxlQUFlLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSSxhQUFhO0FBQzFFLENBQUM7O0FBRUQ7QUFDQSxZQUFZLGVBQWUsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLGFBQWE7QUFDMUUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7Ozs7Ozs7QUN2TEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkI7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3RUEsK0I7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLHdDQUF3QztBQUN4QztBQUNBLGM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7O0FDbkJBLG9DOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJiYWNrLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOTM0Y2NmMjNjZDM4NTA3NmZiOCIsInZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuZXhwb3J0cy5mYWJvbmFjY2kgPSBmdW5jdGlvbiAobnVtMSxudW0yKSB7XG4gICAgcmV0dXJuIG51bTErbnVtMjtcbn07XG5cbmV4cG9ydHMuc2F5SGVsbG9JblNwYW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFwiSG9sYVwiO1xufTtcblxuZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24oZGVncmVlcykge1xuICB2YXIgcmFkaWFucyA9IGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XG4gIHJldHVybiByYWRpYW5zO1xufTtcblxuZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24ocmFkaWFucykge1xuICB2YXIgZGVncmVlcyA9IHJhZGlhbnMgKiAoMTgwIC8gTWF0aC5QSSk7XG4gIHJldHVybiBkZWdyZWVzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLkFpclBsYW5lICAgPSByZXF1aXJlKFwiLi9BaXJQbGFuZS5qc1wiKTtcbmV4cG9ydHMuUGxhbmVzTGlzdCA9IHJlcXVpcmUoXCIuL1BsYW5lc0xpc3QuanNcIik7XG5leHBvcnRzLkNvbnN0YW50cyAgPSByZXF1aXJlKFwiLi9Db25zdGFudHMuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgd2luc3RvbiA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcbmNvbnN0IG1vbWVudCAgPSByZXF1aXJlKCdtb21lbnQnKTtcbmNvbnN0IFMgICAgICAgPSByZXF1aXJlKCdzdHJpbmcnKTtcblxuY29uc3QgbXlDb25zb2xlRm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQucHJpbnRmKGluZm8gPT4ge1xuICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9IFske2luZm8ubGFiZWx9XSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gO1xufSk7XG5cbmNvbnN0IG15SnNvbkZvcm1hdCA9IHdpbnN0b24uZm9ybWF0Lmpzb24oaW5mbyA9PiB7XG4gIHJldHVybiBgJHtpbmZvLnRpbWVzdGFtcH0gWyR7aW5mby5sYWJlbH1dICR7aW5mby5sZXZlbH06ICR7aW5mby5tZXNzYWdlfWA7XG59KTtcblxudmFyIGdldExhYmVsID0gZnVuY3Rpb24oY2FsbGluZ01vZHVsZSkge1xuICAgIGlmICggY2FsbGluZ01vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgdmFyIHBhcnRzID0gY2FsbGluZ01vZHVsZS5maWxlbmFtZS5zcGxpdCgnXFxcXCcpO1xuICAgICAgdmFyIGxibCAgID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMl0gKyAnLycgKyBwYXJ0cy5wb3AoKTtcbiAgICAgIHJldHVybiBTKGxibCkucGFkUmlnaHQoMjIsJy0nKSArICc+JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdidW5kbGVkJztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcbiAgXG4gIHZhciBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gICAgdHJhbnNwb3J0czogW1xuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5GaWxlKHsgXG4gICAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy9lcnJvci5sb2cnLCBcbiAgICAgICAgbWF4c2l6ZTogNTI0Mjg4MCwgLy81TUJcbiAgICAgICAgbWF4RmlsZXM6IDUsXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByZXR0eVByaW50KCksXG4gICAgICAgICAgIG15SnNvbkZvcm1hdFxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSAoe1xuICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy90cmFjZS5sb2cnLFxuICAgICAgICBtYXhzaXplOiA1MjQyODgwLCAvLzVNQlxuICAgICAgICBtYXhGaWxlczogNSwgXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByZXR0eVByaW50KCksXG4gICAgICAgICAgIG15SnNvbkZvcm1hdFxuICAgICAgICApXG4gICAgICB9KVxuICAgIF1cbiAgfSk7XG5cbiAgaWYgKCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICkge1xuICAgIGxvZ2dlci5hZGQoXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgICBsZXZlbDogJ2RlYnVnJyxcbiAgICAgICAganNvbjogZmFsc2UsXG4gICAgICAgIGNvbG9yaXplOiB0cnVlLFxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxuICAgICAgICAgIG15Q29uc29sZUZvcm1hdFxuICAgICAgICApXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbG9nZ2VyO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy9sb2dnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXG5jb25zdCB1dGlscyAgICAgICAgPSByZXF1aXJlKCcuLy4uL3V0aWxzL3V0aWxzLmpzJyk7XG5cbi8vIENsYXNzIENvbnN0cnVjdG9yIGFuZCBBdHRyaWJ1dGVzXG5mdW5jdGlvbiBBaXJQbGFuZShpcCkge1xuXHR0aGlzLmlwICAgICAgICAgICAgICAgICA9IGlwO1xuXHR0aGlzLmxhdE1hcFx0XHRcdFx0PSBcIlwiO1xuXHR0aGlzLmxvbk1hcFx0XHRcdFx0PSBcIlwiO1xuXHR0aGlzLmxhdEFudGVyaW9yTWFwXHRcdD0gXCJcIjtcblx0dGhpcy5sb25BbnRlcmlvck1hcFx0XHQ9IFwiXCI7XG5cdHRoaXMuYWx0TWFwXHRcdFx0XHQ9IDAgO1xuXHR0aGlzLmFpclNwZWVkXHRcdFx0PSBcIlwiO1xuXHR0aGlzLnZTcGVlZFx0XHRcdFx0PSBcIlwiO1xuXHR0aGlzLmdyb3VuZFNwZWVkXHRcdD0gMDtcblx0dGhpcy5iZWFyaW5nXHRcdFx0PSBcIlwiO1xuXHR0aGlzLmRlc3RpbmF0aW9uXHRcdD0gXCJcIjtcblx0dGhpcy5ncHNEaXN0YW5jZU5tXHRcdD0gXCJcIjtcblx0dGhpcy5ncHNEaXN0YW5jZVRpbWVcdD0gXCJcIjtcblx0dGhpcy5iYXJvbWV0ZXJcdFx0XHQ9IFwiXCI7XG5cdHRoaXMuZnVlbFF1YW50aXR5XHRcdD0gXCJcIjtcblx0dGhpcy5uYXYxRnJlcVx0XHRcdD0gXCJcIjtcblx0dGhpcy5uYXYyRnJlcVx0XHRcdD0gXCJcIjtcblx0dGhpcy5wYXVzZVx0XHRcdFx0PSBcIlwiO1xuXHR0aGlzLmNvbXBhc3NIZWFkaW5nXHRcdD0gXCJcIjtcblx0dGhpcy5vdXRzaWRlVGVtcGVyYXR1cmVcdD0gXCJcIjtcblx0dGhpcy5jb20xRnJlcVx0XHRcdD0gXCJcIjtcblx0dGhpcy5jb20yRnJlcVx0XHRcdD0gXCJcIjtcbn07XG5cbi8vIENsYXNzIEZ1bmN0aW9uc1xuQWlyUGxhbmUucHJvdG90eXBlID0ge1xuXHRnZXRJcDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5pcDtcblx0fSxcblx0Z2V0TGF0TWFwOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5sYXRNYXA7XG5cdH0sXG5cdHNldExhdE1hcDogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5sYXRNYXAgPSB2bHI7XG5cdH0sXG5cdGdldExvbk1hcDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9uTWFwO1xuXHR9LFxuXHRzZXRMb25NYXA6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMubG9uTWFwID0gdmxyO1xuXHR9LFxuXHRnZXRMYXRBbnRlcmlvck1hcDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubGF0QW50ZXJpb3JNYXA7XG5cdH0sXG5cdHNldExhdEFudGVyaW9yTWFwOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmxhdEFudGVyaW9yTWFwID0gdmxyO1xuXHR9LFxuXHRnZXRMb25BbnRlcmlvck1hcDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9uQW50ZXJpb3JNYXA7XG5cdH0sXG5cdHNldExvbkFudGVyaW9yTWFwOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmxvbkFudGVyaW9yTWFwID0gdmxyO1xuXHR9LFxuXHRnZXRBbHRNYXA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmFsdE1hcDtcblx0fSxcblx0c2V0QWx0TWFwOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmFsdE1hcCA9IHZscjtcblx0fSxcblx0Z2V0QWlyU3BlZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmFpclNwZWVkO1xuXHR9LFxuXHRzZXRBaXJTcGVlZDogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5haXJTcGVlZCA9IHZscjtcblx0fSxcblx0Z2V0VlNwZWVkOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52U3BlZWQ7XG5cdH0sXG5cdHNldFZTcGVlZDogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy52U3BlZWQgPSB2bHI7XG5cdH0sXG5cdGdldEdyb3VuZFNwZWVkOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5ncm91bmRTcGVlZDtcblx0fSxcblx0c2V0R3JvdW5kU3BlZWQ6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuZ3JvdW5kU3BlZWQgPSB2bHI7XG5cdH0sXG5cdGdldEJlYXJpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmJlYXJpbmc7XG5cdH0sXG5cdHNldEJlYXJpbmc6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuYmVhcmluZyA9IHZscjtcblx0fSxcblx0Z2V0RGVzdGluYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmRlc3RpbmF0aW9uO1xuXHR9LFxuXHRzZXREZXN0aW5hdGlvbjogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5kZXN0aW5hdGlvbiA9IHZscjtcblx0fSxcblx0Z2V0R3BzRGlzdGFuY2VObTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ3BzRGlzdGFuY2VObTtcblx0fSxcblx0c2V0R3BzRGlzdGFuY2VObTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5ncHNEaXN0YW5jZU5tID0gdmxyO1xuXHR9LFxuXHRnZXRHcHNEaXN0YW5jZVRpbWU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmdwc0Rpc3RhbmNlVGltZTtcblx0fSxcblx0c2V0R3BzRGlzdGFuY2VUaW1lOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZSA9IHZscjtcblx0fSxcblx0Z2V0QmFyb21ldGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5iYXJvbWV0ZXI7XG5cdH0sXG5cdHNldEJhcm9tZXRlcjogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5iYXJvbWV0ZXIgPSB2bHI7XG5cdH0sXG5cdGdldEZ1ZWxRdWFudGl0eTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZnVlbFF1YW50aXR5O1xuXHR9LFxuXHRzZXRGdWVsUXVhbnRpdHk6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuZnVlbFF1YW50aXR5ID0gdmxyO1xuXHR9LFxuXHRnZXROYXYxRnJlcTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubmF2MUZyZXE7XG5cdH0sXG5cdHNldE5hdjFGcmVxOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLm5hdjFGcmVxID0gdmxyO1xuXHR9LFxuXHRnZXROYXYyRnJlcTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubmF2MkZyZXE7XG5cdH0sXG5cdHNldE5hdjJGcmVxOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLm5hdjJGcmVxID0gdmxyO1xuXHR9LFxuXHRnZXRQYXVzZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucGF1c2U7XG5cdH0sXG5cdHNldFBhdXNlOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLnBhdXNlID0gdmxyO1xuXHR9LFxuXHRnZXRDb21wYXNzSGVhZGluZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcGFzc0hlYWRpbmc7XG5cdH0sXG5cdHNldENvbXBhc3NIZWFkaW5nOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmNvbXBhc3NIZWFkaW5nID0gdmxyO1xuXHR9LFxuXHRnZXRPdXRzaWRlVGVtcGVyYXR1cmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm91dHNpZGVUZW1wZXJhdHVyZTtcblx0fSxcblx0c2V0T3V0c2lkZVRlbXBlcmF0dXJlOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLm91dHNpZGVUZW1wZXJhdHVyZSA9IHZscjtcblx0fSxcblx0Z2V0Q29tMUZyZXE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbTFGcmVxO1xuXHR9LFxuXHRzZXRDb20xRnJlcTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5jb20xRnJlcSA9IHZscjtcblx0fSxcblx0Z2V0Q29tMkZyZXE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbTJGcmVxO1xuXHR9LFxuXHRzZXRDb20yRnJlcTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5jb20yRnJlcSA9IHZscjtcblx0fSxcblxuXHRjYWxjdWxhdGVCZWFyaW5nOiBmdW5jdGlvbihsYXQyLCBsb24yKSB7XG5cdFx0dmFyIGxvbmdpdHVkZTEgPSBwYXJzZUZsb2F0KHRoaXMubG9uQW50ZXJpb3JNYXApO1xuXHRcdHZhciBsb25naXR1ZGUyID0gbG9uMjtcblxuXHRcdHZhciBsYXRpdHVkZTEgID0gdXRpbHMuZGVncmVlc1RvUmFkaWFucyh0aGlzLmxhdEFudGVyaW9yTWFwKTtcblx0XHR2YXIgbGF0aXR1ZGUyICA9IHV0aWxzLmRlZ3JlZXNUb1JhZGlhbnMobGF0Mik7XG5cblx0XHR2YXIgbG9uZ0RpZmYgICA9IHV0aWxzLmRlZ3JlZXNUb1JhZGlhbnMobG9uZ2l0dWRlMiAtIGxvbmdpdHVkZTEpO1xuXG5cdFx0dmFyIHkgPSBNYXRoLnNpbihsb25nRGlmZikgKiBNYXRoLmNvcyhsYXRpdHVkZTIpO1xuXHRcdHZhciB4ID0gTWF0aC5jb3MobGF0aXR1ZGUxKSAqIE1hdGguc2luKGxhdGl0dWRlMikgLSBNYXRoLnNpbihsYXRpdHVkZTEpICogTWF0aC5jb3MobGF0aXR1ZGUyKSAqIE1hdGguY29zKGxvbmdEaWZmKTtcblx0XG5cdFx0dmFyIHJlc3VsdCA9ICh1dGlscy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoeSwgeCkpICsgMzYwKSAlIDM2MDtcblx0XHRpZiAoIHJlc3VsdCA+IDAgKSB7XG5cdFx0XHR0aGlzLmJlYXJpbmcgPSBwYXJzZUZsb2F0KHJlc3VsdCk7XG5cdFx0fVxuXHR9XG5cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEFpclBsYW5lO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9BaXJQbGFuZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBdXRob3IgVWFsdGVyIEpyLlxuXG5mdW5jdGlvbiBDb25zdGFudHMoKSB7XG59O1xuXG5Db25zdGFudHMucHJvdG90eXBlLkRFU1RJTkFUSU9OXHRcdFx0XHRcdD0gXCJkZXN0aW5hdGlvblwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5HQU1FX1BBVVNFRFx0XHRcdFx0XHQ9IFwiZ2FtZVBhdXNlZFwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5CQVJPTUVURVJcdFx0XHRcdFx0PSBcImJhcm9tZXRlclwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5DT01QQVNTX0hFQURJTkdcdFx0XHRcdD0gXCJjb21wYXNzSGVhZGluZ1wiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0ZSRVFVRU5DWVx0XHRcdFx0PSBcIm5hdjFGcmVxSHpcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMl9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJuYXYyRnJlcUh6XCI7XG5Db25zdGFudHMucHJvdG90eXBlLkFJUlNQRUVEXHRcdFx0XHRcdD0gXCJhaXJzcGVlZFwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5BTFRJVFVERVx0XHRcdFx0XHQ9IFwiYWx0aXR1ZGVcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuRlVFTF9RVUFOVElUWVx0XHRcdFx0PSBcImZ1ZWxxdWFudGl0eVwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5BUFVfUlVOTklOR1x0XHRcdFx0XHQ9IFwiYXB1cnVubmluZ1wiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00xX0ZSRVFVRU5DWVx0XHRcdFx0PSBcImNvbTFGcmVxSHpcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMl9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJjb20yRnJlcUh6XCI7XG5Db25zdGFudHMucHJvdG90eXBlLkNPTTFfRlJFUVVFTkNZX1NUREJZXHRcdD0gXCJjb20xRnJlcUh6U3RkYnlcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMl9GUkVRVUVOQ1lfU1REQllcdFx0PSBcImNvbTJGcmVxSHpTdGRieVwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5HUFNfRElTVEFOQ0VfTUVURVJTXHRcdFx0PSBcImdwc0RNRURpc3RNXCI7XG5Db25zdGFudHMucHJvdG90eXBlLkdQU19ESVNUQU5DRV9TRUNPTkRTXHRcdD0gXCJncHNETUVUaW1lU2Vjc1wiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0RJU1RBTkNFX05BVVRJQ0FMU1x0XHQ9IFwibmF2MURNRURpc3RObVwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0RJU1RBTkNFX01JTlVURVNcdFx0PSBcIm5hdjFETUVEaXN0TWluXCI7XG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRElTVEFOQ0VfTkFVVElDQUxTXHRcdD0gXCJuYXYyRE1FRGlzdE5tXCI7XG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRElTVEFOQ0VfTUlOVVRFU1x0XHQ9IFwibmF2MkRNRURpc3RNaW5cIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuT1VUU0lERV9URU1QRVJBVFVSRV9DRUxTSVVTXHQ9IFwib3V0c2lkZVRlbXBDXCI7XG5Db25zdGFudHMucHJvdG90eXBlLlZFUlRJQ0FMX1NQRUVEXHRcdFx0XHQ9IFwidnNGcG1cIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuR1JPVU5EX1NQRUVEXHRcdFx0XHQ9IFwiZ3JvdW5kc3BlZWRcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuVFJVRV9BSVJTUEVFRFx0XHRcdFx0PSBcInRydWVfYWlyc3BlZWRcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuTEFUSVRVREVcdFx0XHRcdFx0PSBcImxhdGl0dWRlXCI7XG5Db25zdGFudHMucHJvdG90eXBlLkxPTkdJVFVERVx0XHRcdFx0XHQ9IFwibG9uZ2l0dWRlXCI7XG5Db25zdGFudHMucHJvdG90eXBlLldFSUdIVF9UT1RBTF9GVUVMXHRcdFx0PSBcIndlaWdodFRvdGFsRnVlbFwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfTU9ERVx0XHRcdFx0PSBcImF1dG9waWxvdE1vZGVcIjtcdFx0Ly8gKG9mZj0wLGZsaWdodCBkaXJlY3Rvcj0xLCBvbj0yKVxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfQUxUSVRVREVcdFx0XHQ9IFwiYXV0b3BpbG90QWx0aXR1ZGVcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX1ZFUlRJQ0FMX1NQRUVEXHQ9IFwiYXV0b3BpbG90VlNcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0FJUlBTUEVFRFx0XHRcdD0gXCJhdXRvcGlsb3RBaXJTcGVlZFwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfSEVBRElOR1x0XHRcdD0gXCJhdXRvcGlsb3RIZWFkaW5nXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3RhbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XG5jb25zdCBsb2dnZXIgICAgPSByZXF1aXJlKCcuL3V0aWxzL2xvZ2dlci5qcycpKG1vZHVsZSk7XG5jb25zdCBtb2RlbCAgICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XG5jb25zdCBodHRwICAgICAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCBleHByZXNzICAgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBpcCAgICAgICAgPSByZXF1aXJlKFwiaXBcIik7XG5jb25zdCBwYXRoICAgICAgPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBhcHBSb290ICAgPSByZXF1aXJlKCdhcHAtcm9vdC1wYXRoJyk7XG4gXG5jb25zdCBQT1JUICAgICAgPSA4MDAwO1xuY29uc3QgSE9TVCAgICAgID0gaXAuYWRkcmVzcygpOyAvLycxOTIuMTY4LjAuMjInO1xuY29uc3QgcGF0aEZpbGVzID0gYXBwUm9vdC5wYXRoICsgXCJcXFxcZGlzdFwiO1xuY29uc3QgYXBwICAgICAgID0gZXhwcmVzcygpO1xuXG52YXIgcGxhbmVzTGlzdCA9IG5ldyBtb2RlbC5QbGFuZXNMaXN0KCk7XG5cbi8vIFVwcyFcbmFwcC51c2UoIChlcnIsIHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gIGxvZ2dlci5lcnJvcihlcnIpO1xuICByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKCdTb21ldGhpbmcgYnJva2UhJylcbn0pXG5cbi8vIEZvciB0ZXN0cyBvbmx5XG5hcHAuZ2V0KFwiL2hlbGxvXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLmVuZCgnSGVsbG8hJyk7XG59KVxuXG4vLyBVc2VyIEludGVyZmFjZSBTdGFydFxuYXBwLmdldChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcaW5kZXguaHRtbFwiKTtcbn0pXG5cbi8vIFNjcmlwdHNcbmFwcC5nZXQoXCIvZnJvbnQuYnVuZGxlLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGZyb250LmJ1bmRsZS5qc1wiKTtcbn0pXG5hcHAuZ2V0KFwiL251bWVyYWwubWluLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGxpYnNcXFxcbnVtZXJhbC5taW4uanNcIik7XG59KVxuYXBwLmdldChcIi9tYXJrZXJ3aXRobGFiZWwuanNcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcbGlic1xcXFxtYXJrZXJ3aXRobGFiZWwuanNcIik7XG59KVxuYXBwLmdldChcIi9qcXVlcnktYmxpbmsuanNcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcbGlic1xcXFxqcXVlcnktYmxpbmsuanNcIik7XG59KVxuXG4vLyBJbWFnZXNcbmFwcC5nZXQoXCIvbG9hZGluZy5naWZcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcaW1hZ2VzXFxcXGxvYWRpbmcuZ2lmXCIpO1xufSlcblxuLy8gRGF0YSBnYW1lXG5hcHAuZ2V0KFwiL2RhdGFcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2UudHlwZSgnanNvbicpO1xuICAgIC8vIE5vbiBQcmV0dHktUHJpbnRcbiAgICAvL3Jlc3BvbnNlLnNlbmQoIGFpclBsYW5lICk7XG4gICAgLy8gUHJldHR5LVByaW50XG4gICAgcmVzcG9uc2Uuc2VuZChKU09OLnN0cmluZ2lmeShwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpLCBudWxsLCA0KSk7XG4gICAgXG59KVxuXG5hcHAubGlzdGVuKFBPUlQsIChlcnIpID0+IHtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkuc3RhY2spO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgbG9nZ2VyLmluZm8oJ0hUVFAgU2VydmVyIGxpc3RlbmluZyBvbiAnICsgSE9TVCArIFwiOlwiICsgUE9SVCk7XG59KVxuXG52YXIgcmVjZWl2ZVVwZGF0ZSA9IGZ1bmN0aW9uIChfcGxhbmVzTGlzdCkge1xuICAgIHBsYW5lc0xpc3QgPSBfcGxhbmVzTGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcmVjZWl2ZVVwZGF0ZTogcmVjZWl2ZVVwZGF0ZVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpcFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcbmNvbnN0IGxvZ2dlciAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcbmNvbnN0IG1vZGVsICAgICAgICA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcbmNvbnN0IGRncmFtICAgICAgICA9IHJlcXVpcmUoJ2RncmFtJyk7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGlwICAgICAgICAgICA9IHJlcXVpcmUoXCJpcFwiKTtcblxuY29uc3QgUE9SVCAgID0gODg4MTtcbmNvbnN0IEhPU1QgICA9IGlwLmFkZHJlc3MoKTtcbi8vJzE5Mi4xNjguMC4yMic7XG5cbmNvbnN0IHNlcnZlciA9IGRncmFtLmNyZWF0ZVNvY2tldCgndWRwNCcpO1xuXG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIHN0YXJ0U2VydmVyKTtcbnNlcnZlci5vbignbWVzc2FnZScsIHJlY2VpdmVNZXNzYWdlKTtcbnNlcnZlci5iaW5kKFBPUlQsIEhPU1QpO1xuXG5mdW5jdGlvbiBzdGFydFNlcnZlcigpIHtcblx0dmFyIGFkZHJlc3MgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuXHRsb2dnZXIuaW5mbygnVURQICBTZXJ2ZXIgbGlzdGVuaW5nIG9uICcgKyBhZGRyZXNzLmFkZHJlc3MgKyBcIjpcIiArIGFkZHJlc3MucG9ydCk7XG59XG5cbmNsYXNzIE15RW1pdHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7fVxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IE15RW1pdHRlcigpO1xuZXhwb3J0cy5ldmVudEVtaXR0ZXIgPSBldmVudEVtaXR0ZXI7XG5cbmNvbnN0IENvbnN0YW50cyA9IG5ldyBtb2RlbC5Db25zdGFudHMoKTtcblxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xuXG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZShtZXNzYWdlLCByZW1vdGUpIHtcblx0dHJ5IHtcblx0XHRcblx0XHR2YXIgaXAgICAgICAgICAgICAgICAgICA9IHJlbW90ZS5hZGRyZXNzO1xuXHRcdHZhciBtc2dzICAgICAgICAgICAgICAgID0gbWVzc2FnZS50b1N0cmluZygndXRmOCcpO1xuXHRcdHZhciBhaXJQbGFuZSAgICAgICAgICAgID0gbmV3IG1vZGVsLkFpclBsYW5lKGlwKTtcblxuXHRcdGxvZ2dlci5pbmZvKFwiTWVzc2FnZSByZWNlaXZlZDogJXNcIiwgbXNncyk7XG5cblx0ICAgXHRtc2dzLnNwbGl0KFwiO1wiKS5tYXAoIG1zZyA9PiB7XG5cblx0ICAgXHRcdHZhciBhcnIgICA9IG1zZy5zcGxpdChcIj1cIik7XG5cdCAgIFx0XHR2YXIgbGFiZWwgPSBhcnJbMF07XG5cdCAgIFx0XHR2YXIgdmFsdWUgPSBhcnJbMV07XG5cblx0ICAgXHRcdHN3aXRjaChsYWJlbCkge1xuXHQgICBcdFx0XHQgY2FzZSBDb25zdGFudHMuREVTVElOQVRJT046IHtcblx0ICAgXHRcdFx0XHRhaXJQbGFuZS5zZXREZXN0aW5hdGlvbih2YWx1ZSlcblx0ICAgXHRcdFx0XHRicmVhaztcblx0ICAgXHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdBTUVfUEFVU0VEOiB7XG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldFBhdXNlKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5CQVJPTUVURVI6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0QmFyb21ldGVyKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT01QQVNTX0hFQURJTkc6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tcGFzc0hlYWRpbmcodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRlJFUVVFTkNZOiB7XG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldE5hdjFGcmVxKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0ZSRVFVRU5DWToge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXROYXYyRnJlcSh2YWx1ZSlcblx0XHRcdFx0ICAgIGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQUlSU1BFRUQ6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0QWlyU3BlZWQodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFMVElUVURFOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuRlVFTF9RVUFOVElUWToge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRGdWVsUXVhbnRpdHkodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFQVV9SVU5OSU5HOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NMV9GUkVRVUVOQ1k6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tMUZyZXEodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTJfRlJFUVVFTkNZOiB7XG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldENvbTJGcmVxKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00xX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTJfRlJFUVVFTkNZX1NUREJZOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX01FVEVSUzoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdQU19ESVNUQU5DRV9TRUNPTkRTOiB7XG5cdFx0XHRcdCBcdC8qXG5cdFx0XHRcdCBcdGZsb2F0IGRpc3RhbmNlTWludXRlcyA9IDA7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGRpc3RhbmNlTWludXRlcyA9IEZsb2F0LnBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKE51bWJlckZvcm1hdEV4Y2VwdGlvbiBlKSB7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlTWludXRlcyA+IDApIHtcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VNaW51dGVzID0gKGludCkgZGlzdGFuY2VNaW51dGVzO1xuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZVNlY29uZHMgPSAoaW50KSAoKGRpc3RhbmNlTWludXRlcyAtIGlEaXN0YW5jZU1pbnV0ZXMpICogNjApO1xuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZUhvdXJzID0gKGludCkgKGRpc3RhbmNlTWludXRlcyAvIDYwKTtcblx0XHRcdFx0XHRcdFN0cmluZyByZXN1bHQgPSBkZi5mb3JtYXQoaURpc3RhbmNlSG91cnMpICsgXCI6XCIgKyBkZi5mb3JtYXQoaURpc3RhbmNlTWludXRlcykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VTZWNvbmRzKTtcblx0XHRcdFx0XHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lLnB1dChpcC50b1N0cmluZygpLCByZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgXCIwXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0IFx0Ki9cblx0XHRcdFx0ICAgIGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0RJU1RBTkNFX01JTlVURVM6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0RJU1RBTkNFX05BVVRJQ0FMUzoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk9VVFNJREVfVEVNUEVSQVRVUkVfQ0VMU0lVUzoge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRPdXRzaWRlVGVtcGVyYXR1cmUodmFsdWUpO1xuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5WRVJUSUNBTF9TUEVFRDoge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRWU3BlZWQodmFsdWUpO1xuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HUk9VTkRfU1BFRUQ6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0R3JvdW5kU3BlZWQodmFsdWUpO1xuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5UUlVFX0FJUlNQRUVEOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTEFUSVRVREU6IHtcblx0XHRcdFx0XHQgaWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xuXHRcdFx0XHRcdFx0IGFpclBsYW5lLnNldExhdEFudGVyaW9yTWFwKHBsYW5lc0xpc3QuZ2V0QWlyUGxhbmUoaXApLmdldExhdE1hcCgpKTtcblx0XHRcdFx0XHQgfSBlbHNlIHtcblx0XHRcdFx0XHRcdGFpclBsYW5lLnNldExhdEFudGVyaW9yTWFwKDApO1xuXHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0IGFpclBsYW5lLnNldExhdE1hcCh2YWx1ZSk7XG5cdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTE9OR0lUVURFOiB7XG5cdFx0XHRcdFx0aWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xuXHRcdFx0XHRcdFx0YWlyUGxhbmUuc2V0TG9uQW50ZXJpb3JNYXAocGxhbmVzTGlzdC5nZXRBaXJQbGFuZShpcCkuZ2V0TG9uTWFwKCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMb25BbnRlcmlvck1hcCgwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWlyUGxhbmUuc2V0TG9uTWFwKHZhbHVlKTtcblx0XHRcdFx0XHRhaXJQbGFuZS5jYWxjdWxhdGVCZWFyaW5nKHBhcnNlRmxvYXQoYWlyUGxhbmUuZ2V0TGF0TWFwKCkpLCBwYXJzZUZsb2F0KHZhbHVlKSk7XG5cdFx0XHRcdCBcdGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuV0VJR0hUX1RPVEFMX0ZVRUw6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfTU9ERToge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9BTFRJVFVERToge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRDoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9BSVJQU1BFRUQ6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfSEVBRElORzoge2JyZWFrO31cblx0ICAgXHRcdFx0IGRlZmF1bHQ6XG5cdCAgIFx0XHRcdFx0YnJlYWs7XHRcblx0XHRcdCAgIH1cblx0XHRcdCAgIFxuXHQgICBcdFx0ICAgbG9nZ2VyLmRlYnVnKFwiTWVzc2FnZS4uLjogJXMgLSAlc1wiLGxhYmVsLHZhbHVlKTtcblx0XHR9KTtcblx0XHQgICBcblx0XHRwbGFuZXNMaXN0LmFkZEFpclBsYW5lKGFpclBsYW5lLmdldElwKCksYWlyUGxhbmUpO1xuXHRcdGV2ZW50RW1pdHRlci5lbWl0KCdyZWNlaXZlZE1lc3NhZ2UnLCBwbGFuZXNMaXN0KTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuXHRcdGxvZ2dlci5lcnJvcihuZXcgRXJyb3IoZXJyLnRvU3RyaW5nKCkpKTtcbiAgIFx0XHR0aHJvdyBlcnI7XG4gICAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91ZHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9qcy91dGlscy91dGlscy5qcyc7XG5pbXBvcnQgJy4vanMvbW9kZWwvaW5kZXguanMnO1xuaW1wb3J0ICcuL2pzL21vZGVsL0NvbnN0YW50cy5qcyc7XG5pbXBvcnQgJy4vanMvbW9kZWwvQWlyUGxhbmUuanMnO1xuaW1wb3J0ICcuL2pzL3V0aWxzL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vanMvaHR0cC1zZXJ2ZXIuanMnO1xuaW1wb3J0ICcuL2pzL3VkcC1zZXJ2ZXIuanMnO1xuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtYmFjay5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cbmZ1bmN0aW9uIFBsYW5lc0xpc3QoKSB7XG5cdHRoaXMuYWlyUGxhbmVzID0ge307XG59O1xuXG5QbGFuZXNMaXN0LnByb3RvdHlwZSA9IHtcblx0Z2V0QWlyUGxhbmU6IGZ1bmN0aW9uKGlwKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWlyUGxhbmVzW2lwXTtcblx0fSxcblx0YWRkQWlyUGxhbmU6IGZ1bmN0aW9uKGlwLCBfYWlyUGxhbmUpIHtcblx0XHR0aGlzLmFpclBsYW5lc1tpcF0gPSBfYWlyUGxhbmU7XG5cdH0sXG5cdGdldEFsbEFpclBsYW5lczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWlyUGxhbmVzO1xuXHR9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGxhbmVzTGlzdDtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvUGxhbmVzTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcHAtcm9vdC1wYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZ3JhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRncmFtXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgID0gcmVxdWlyZSgnLi91dGlscy91dGlscy5qcycpO1xuY29uc3QgbG9nZ2VyICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcbmNvbnN0IG1vZGVsICAgICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XG5jb25zdCB1ZHBTZXJ2ZXIgID0gcmVxdWlyZSgnLi91ZHAtc2VydmVyLmpzJyk7XG5jb25zdCBodHRwU2VydmVyID0gcmVxdWlyZSgnLi9odHRwLXNlcnZlci5qcycpO1xuXG52YXIgcGxhbmVzTGlzdCA9IG5ldyBtb2RlbC5QbGFuZXNMaXN0KCk7XG5cbmxvZ2dlci5pbmZvKCdTdGFydCB4LW5hdmlnYXQuLi4nKTtcblxudWRwU2VydmVyLmV2ZW50RW1pdHRlci5vbigncmVjZWl2ZWRNZXNzYWdlJywgKF9wbGFuZXNMaXN0KSA9PiB7XG4gICAgcGxhbmVzTGlzdCA9IF9wbGFuZXNMaXN0O1xuICAgIGh0dHBTZXJ2ZXIucmVjZWl2ZVVwZGF0ZShwbGFuZXNMaXN0KTtcblxuICAgIGxvZ2dlci5kZWJ1ZyhcIl9wbGFuZXNMaXN0Li4uOiAlc1wiLHBsYW5lc0xpc3QpO1xufSk7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9