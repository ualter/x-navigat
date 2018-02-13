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

// Author Ualter Jr.

var config = {};

// Winston Logging
config.logger                 = {};
config.logger.console         = {};
config.logger.fileTrace       = {};
config.logger.console.level   = 'info';
config.logger.fileTrace.level = 'info';

// Airnav
config.airnav           = {};
config.airnav.pathFiles = "c:/X-Plane 11/Resources/default data/";
//config.airnav.pathFiles = "c:/Users/Ualter/Developer/x-navigat/x-navigat/airnav-samples/";


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

/* WEBPACK VAR INJECTION */(function(module) {// Author Ualter Jr.

const utils     = __webpack_require__(0);
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

// Data game
app.get("/flightplan", (request, response) => {
    response.type('json');
    // Non Pretty-Print
    //response.send( airPlane );
    // Pretty-Print
    response.send(JSON.stringify(planesList.getAllAirPlanes(), null, 4));
})

app.listen(PORT, (err) => {

    if (err) {
        logger.error(new Error(err.toString()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTJmNWIwYmZhYTAxOTMwYTJhMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvQWlyUGxhbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXBcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdWRwLXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvUGxhbmVzTGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRncmFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNsQkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGVBQWUsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLGFBQWE7QUFDMUUsQ0FBQzs7QUFFRDtBQUNBLFlBQVksZUFBZSxJQUFJLFdBQVcsSUFBSSxXQUFXLElBQUksYUFBYTtBQUMxRSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFpQztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7OztBQ3pFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHdCOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOzs7Ozs7OztBQ3ZMQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZGQSwrQjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUMsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHFDQUFxQztBQUNyQyx5Q0FBeUM7QUFDekMsK0NBQStDO0FBQy9DLDBDQUEwQztBQUMxQyx3Q0FBd0M7QUFDeEM7QUFDQSxjO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7QUNuQkEsb0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQyIsImZpbGUiOiJiYWNrLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MmY1YjBiZmFhMDE5MzBhMmEyZCIsInZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcclxuXHJcbmV4cG9ydHMuZmFib25hY2NpID0gZnVuY3Rpb24gKG51bTEsbnVtMikge1xyXG4gICAgcmV0dXJuIG51bTErbnVtMjtcclxufTtcclxuXHJcbmV4cG9ydHMuc2F5SGVsbG9JblNwYW5pc2ggPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gXCJIb2xhXCI7XHJcbn07XHJcblxyXG5leHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbihkZWdyZWVzKSB7XHJcbiAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xyXG4gIHJldHVybiByYWRpYW5zO1xyXG59O1xyXG5cclxuZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24ocmFkaWFucykge1xyXG4gIHZhciBkZWdyZWVzID0gcmFkaWFucyAqICgxODAgLyBNYXRoLlBJKTtcclxuICByZXR1cm4gZGVncmVlcztcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLkFpclBsYW5lICAgPSByZXF1aXJlKFwiLi9BaXJQbGFuZS5qc1wiKTtcclxuZXhwb3J0cy5QbGFuZXNMaXN0ID0gcmVxdWlyZShcIi4vUGxhbmVzTGlzdC5qc1wiKTtcclxuZXhwb3J0cy5Db25zdGFudHMgID0gcmVxdWlyZShcIi4vQ29uc3RhbnRzLmpzXCIpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB3aW5zdG9uID0gcmVxdWlyZSgnd2luc3RvbicpO1xyXG5jb25zdCBtb21lbnQgID0gcmVxdWlyZSgnbW9tZW50Jyk7XHJcbmNvbnN0IFMgICAgICAgPSByZXF1aXJlKCdzdHJpbmcnKTtcclxuY29uc3QgY29uZmlnICA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xyXG5cclxuY29uc3QgbXlDb25zb2xlRm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQucHJpbnRmKGluZm8gPT4ge1xyXG4gIHJldHVybiBgJHtpbmZvLnRpbWVzdGFtcH0gWyR7aW5mby5sYWJlbH1dICR7aW5mby5sZXZlbH06ICR7aW5mby5tZXNzYWdlfWA7XHJcbn0pO1xyXG5cclxuY29uc3QgbXlKc29uRm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQuanNvbihpbmZvID0+IHtcclxuICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9IFske2luZm8ubGFiZWx9XSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gO1xyXG59KTtcclxuXHJcbnZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcclxuICAgIGlmICggY2FsbGluZ01vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICB2YXIgcGFydHMgPSBjYWxsaW5nTW9kdWxlLmZpbGVuYW1lLnNwbGl0KCdcXFxcJyk7XHJcbiAgICAgIHZhciBsYmwgICA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdICsgJy8nICsgcGFydHMucG9wKCk7XHJcbiAgICAgIHJldHVybiBTKGxibCkucGFkUmlnaHQoMjQsJy0nKSArICc+JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnYnVuZGxlZCc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcclxuICBcclxuICB2YXIgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xyXG4gICAgdHJhbnNwb3J0czogW1xyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoeyBcclxuICAgICAgICBsZXZlbDogJ2Vycm9yJyxcclxuICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy9lcnJvci5sb2cnLCBcclxuICAgICAgICBtYXhzaXplOiA1MjQyODgwLCAvLzVNQlxyXG4gICAgICAgIG1heEZpbGVzOiA1LFxyXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQucHJldHR5UHJpbnQoKSxcclxuICAgICAgICAgICBteUpzb25Gb3JtYXRcclxuICAgICAgICApXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUgKHtcclxuICAgICAgICBsZXZlbDogY29uZmlnLmxvZ2dlci5maWxlVHJhY2UubGV2ZWwsXHJcbiAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3MvdHJhY2UubG9nJyxcclxuICAgICAgICBtYXhzaXplOiA1MjQyODgwLCAvLzVNQlxyXG4gICAgICAgIG1heEZpbGVzOiA1LCBcclxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByZXR0eVByaW50KCksXHJcbiAgICAgICAgICAgbXlKc29uRm9ybWF0XHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgXVxyXG4gIH0pO1xyXG5cclxuICBpZiAoIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgKSB7XHJcbiAgICBsb2dnZXIuYWRkKFxyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xyXG4gICAgICAgIGxldmVsOiBjb25maWcubG9nZ2VyLmNvbnNvbGUubGV2ZWwsXHJcbiAgICAgICAganNvbjogZmFsc2UsXHJcbiAgICAgICAgY29sb3JpemU6IHRydWUsXHJcbiAgICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lIChcclxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcclxuICAgICAgICAgIG15Q29uc29sZUZvcm1hdFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiBsb2dnZXI7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXHJcblxyXG52YXIgY29uZmlnID0ge307XHJcblxyXG4vLyBXaW5zdG9uIExvZ2dpbmdcclxuY29uZmlnLmxvZ2dlciAgICAgICAgICAgICAgICAgPSB7fTtcclxuY29uZmlnLmxvZ2dlci5jb25zb2xlICAgICAgICAgPSB7fTtcclxuY29uZmlnLmxvZ2dlci5maWxlVHJhY2UgICAgICAgPSB7fTtcclxuY29uZmlnLmxvZ2dlci5jb25zb2xlLmxldmVsICAgPSAnaW5mbyc7XHJcbmNvbmZpZy5sb2dnZXIuZmlsZVRyYWNlLmxldmVsID0gJ2luZm8nO1xyXG5cclxuLy8gQWlybmF2XHJcbmNvbmZpZy5haXJuYXYgICAgICAgICAgID0ge307XHJcbmNvbmZpZy5haXJuYXYucGF0aEZpbGVzID0gXCJjOi9YLVBsYW5lIDExL1Jlc291cmNlcy9kZWZhdWx0IGRhdGEvXCI7XHJcbi8vY29uZmlnLmFpcm5hdi5wYXRoRmlsZXMgPSBcImM6L1VzZXJzL1VhbHRlci9EZXZlbG9wZXIveC1uYXZpZ2F0L3gtbmF2aWdhdC9haXJuYXYtc2FtcGxlcy9cIjtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXHJcbmNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vLi4vdXRpbHMvdXRpbHMuanMnKTtcclxuXHJcbi8vIENsYXNzIENvbnN0cnVjdG9yIGFuZCBBdHRyaWJ1dGVzXHJcbmZ1bmN0aW9uIEFpclBsYW5lKGlwKSB7XHJcblx0dGhpcy5pcCAgICAgICAgICAgICAgICAgPSBpcDtcclxuXHR0aGlzLmxhdE1hcFx0XHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMubG9uTWFwXHRcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5sYXRBbnRlcmlvck1hcFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5sb25BbnRlcmlvck1hcFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5hbHRNYXBcdFx0XHRcdD0gMCA7XHJcblx0dGhpcy5haXJTcGVlZFx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLnZTcGVlZFx0XHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMuZ3JvdW5kU3BlZWRcdFx0PSAwO1xyXG5cdHRoaXMuYmVhcmluZ1x0XHRcdD0gXCJcIjtcclxuXHR0aGlzLmRlc3RpbmF0aW9uXHRcdD0gXCJcIjtcclxuXHR0aGlzLmdwc0Rpc3RhbmNlTm1cdFx0PSBcIlwiO1xyXG5cdHRoaXMuZ3BzRGlzdGFuY2VUaW1lXHQ9IFwiXCI7XHJcblx0dGhpcy5iYXJvbWV0ZXJcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5mdWVsUXVhbnRpdHlcdFx0PSBcIlwiO1xyXG5cdHRoaXMubmF2MUZyZXFcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5uYXYyRnJlcVx0XHRcdD0gXCJcIjtcclxuXHR0aGlzLnBhdXNlXHRcdFx0XHQ9IFwiXCI7XHJcblx0dGhpcy5jb21wYXNzSGVhZGluZ1x0XHQ9IFwiXCI7XHJcblx0dGhpcy5vdXRzaWRlVGVtcGVyYXR1cmVcdD0gXCJcIjtcclxuXHR0aGlzLmNvbTFGcmVxXHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMuY29tMkZyZXFcdFx0XHQ9IFwiXCI7XHJcbn07XHJcblxyXG4vLyBDbGFzcyBGdW5jdGlvbnNcclxuQWlyUGxhbmUucHJvdG90eXBlID0ge1xyXG5cdGdldElwOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuaXA7XHJcblx0fSxcclxuXHRnZXRMYXRNYXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGF0TWFwO1xyXG5cdH0sXHJcblx0c2V0TGF0TWFwOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMubGF0TWFwID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TG9uTWFwOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvbk1hcDtcclxuXHR9LFxyXG5cdHNldExvbk1hcDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmxvbk1hcCA9IHZscjtcclxuXHR9LFxyXG5cdGdldExhdEFudGVyaW9yTWFwOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxhdEFudGVyaW9yTWFwO1xyXG5cdH0sXHJcblx0c2V0TGF0QW50ZXJpb3JNYXA6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5sYXRBbnRlcmlvck1hcCA9IHZscjtcclxuXHR9LFxyXG5cdGdldExvbkFudGVyaW9yTWFwOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvbkFudGVyaW9yTWFwO1xyXG5cdH0sXHJcblx0c2V0TG9uQW50ZXJpb3JNYXA6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5sb25BbnRlcmlvck1hcCA9IHZscjtcclxuXHR9LFxyXG5cdGdldEFsdE1hcDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hbHRNYXA7XHJcblx0fSxcclxuXHRzZXRBbHRNYXA6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5hbHRNYXAgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRBaXJTcGVlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5haXJTcGVlZDtcclxuXHR9LFxyXG5cdHNldEFpclNwZWVkOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuYWlyU3BlZWQgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRWU3BlZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudlNwZWVkO1xyXG5cdH0sXHJcblx0c2V0VlNwZWVkOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMudlNwZWVkID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0R3JvdW5kU3BlZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JvdW5kU3BlZWQ7XHJcblx0fSxcclxuXHRzZXRHcm91bmRTcGVlZDogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmdyb3VuZFNwZWVkID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QmVhcmluZzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iZWFyaW5nO1xyXG5cdH0sXHJcblx0c2V0QmVhcmluZzogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmJlYXJpbmcgPSB2bHI7XHJcblx0fSxcclxuXHRnZXREZXN0aW5hdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kZXN0aW5hdGlvbjtcclxuXHR9LFxyXG5cdHNldERlc3RpbmF0aW9uOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuZGVzdGluYXRpb24gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRHcHNEaXN0YW5jZU5tOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmdwc0Rpc3RhbmNlTm07XHJcblx0fSxcclxuXHRzZXRHcHNEaXN0YW5jZU5tOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuZ3BzRGlzdGFuY2VObSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEdwc0Rpc3RhbmNlVGltZTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ncHNEaXN0YW5jZVRpbWU7XHJcblx0fSxcclxuXHRzZXRHcHNEaXN0YW5jZVRpbWU6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5ncHNEaXN0YW5jZVRpbWUgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRCYXJvbWV0ZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmFyb21ldGVyO1xyXG5cdH0sXHJcblx0c2V0QmFyb21ldGVyOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuYmFyb21ldGVyID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0RnVlbFF1YW50aXR5OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmZ1ZWxRdWFudGl0eTtcclxuXHR9LFxyXG5cdHNldEZ1ZWxRdWFudGl0eTogZnVuY3Rpb24odmxyKSB7XHJcblx0XHR0aGlzLmZ1ZWxRdWFudGl0eSA9IHZscjtcclxuXHR9LFxyXG5cdGdldE5hdjFGcmVxOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hdjFGcmVxO1xyXG5cdH0sXHJcblx0c2V0TmF2MUZyZXE6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5uYXYxRnJlcSA9IHZscjtcclxuXHR9LFxyXG5cdGdldE5hdjJGcmVxOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hdjJGcmVxO1xyXG5cdH0sXHJcblx0c2V0TmF2MkZyZXE6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5uYXYyRnJlcSA9IHZscjtcclxuXHR9LFxyXG5cdGdldFBhdXNlOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhdXNlO1xyXG5cdH0sXHJcblx0c2V0UGF1c2U6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5wYXVzZSA9IHZscjtcclxuXHR9LFxyXG5cdGdldENvbXBhc3NIZWFkaW5nOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBhc3NIZWFkaW5nO1xyXG5cdH0sXHJcblx0c2V0Q29tcGFzc0hlYWRpbmc6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5jb21wYXNzSGVhZGluZyA9IHZscjtcclxuXHR9LFxyXG5cdGdldE91dHNpZGVUZW1wZXJhdHVyZTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vdXRzaWRlVGVtcGVyYXR1cmU7XHJcblx0fSxcclxuXHRzZXRPdXRzaWRlVGVtcGVyYXR1cmU6IGZ1bmN0aW9uKHZscikge1xyXG5cdFx0dGhpcy5vdXRzaWRlVGVtcGVyYXR1cmUgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRDb20xRnJlcTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb20xRnJlcTtcclxuXHR9LFxyXG5cdHNldENvbTFGcmVxOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuY29tMUZyZXEgPSB2bHI7XHJcblx0fSxcclxuXHRnZXRDb20yRnJlcTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb20yRnJlcTtcclxuXHR9LFxyXG5cdHNldENvbTJGcmVxOiBmdW5jdGlvbih2bHIpIHtcclxuXHRcdHRoaXMuY29tMkZyZXEgPSB2bHI7XHJcblx0fSxcclxuXHJcblx0Y2FsY3VsYXRlQmVhcmluZzogZnVuY3Rpb24obGF0MiwgbG9uMikge1xyXG5cdFx0dmFyIGxvbmdpdHVkZTEgPSBwYXJzZUZsb2F0KHRoaXMubG9uQW50ZXJpb3JNYXApO1xyXG5cdFx0dmFyIGxvbmdpdHVkZTIgPSBsb24yO1xyXG5cclxuXHRcdHZhciBsYXRpdHVkZTEgID0gdXRpbHMuZGVncmVlc1RvUmFkaWFucyh0aGlzLmxhdEFudGVyaW9yTWFwKTtcclxuXHRcdHZhciBsYXRpdHVkZTIgID0gdXRpbHMuZGVncmVlc1RvUmFkaWFucyhsYXQyKTtcclxuXHJcblx0XHR2YXIgbG9uZ0RpZmYgICA9IHV0aWxzLmRlZ3JlZXNUb1JhZGlhbnMobG9uZ2l0dWRlMiAtIGxvbmdpdHVkZTEpO1xyXG5cclxuXHRcdHZhciB5ID0gTWF0aC5zaW4obG9uZ0RpZmYpICogTWF0aC5jb3MobGF0aXR1ZGUyKTtcclxuXHRcdHZhciB4ID0gTWF0aC5jb3MobGF0aXR1ZGUxKSAqIE1hdGguc2luKGxhdGl0dWRlMikgLSBNYXRoLnNpbihsYXRpdHVkZTEpICogTWF0aC5jb3MobGF0aXR1ZGUyKSAqIE1hdGguY29zKGxvbmdEaWZmKTtcclxuXHRcclxuXHRcdHZhciByZXN1bHQgPSAodXRpbHMucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKHksIHgpKSArIDM2MCkgJSAzNjA7XHJcblx0XHRpZiAoIHJlc3VsdCA+IDAgKSB7XHJcblx0XHRcdHRoaXMuYmVhcmluZyA9IHBhcnNlRmxvYXQocmVzdWx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFpclBsYW5lO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvQWlyUGxhbmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXV0aG9yIFVhbHRlciBKci5cclxuXHJcbmZ1bmN0aW9uIENvbnN0YW50cygpIHtcclxufTtcclxuXHJcbkNvbnN0YW50cy5wcm90b3R5cGUuREVTVElOQVRJT05cdFx0XHRcdFx0PSBcImRlc3RpbmF0aW9uXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR0FNRV9QQVVTRURcdFx0XHRcdFx0PSBcImdhbWVQYXVzZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5CQVJPTUVURVJcdFx0XHRcdFx0PSBcImJhcm9tZXRlclwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTVBBU1NfSEVBRElOR1x0XHRcdFx0PSBcImNvbXBhc3NIZWFkaW5nXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJuYXYxRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMl9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJuYXYyRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQUlSU1BFRURcdFx0XHRcdFx0PSBcImFpcnNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQUxUSVRVREVcdFx0XHRcdFx0PSBcImFsdGl0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuRlVFTF9RVUFOVElUWVx0XHRcdFx0PSBcImZ1ZWxxdWFudGl0eVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFQVV9SVU5OSU5HXHRcdFx0XHRcdD0gXCJhcHVydW5uaW5nXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMV9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJjb20xRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMl9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJjb20yRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMV9GUkVRVUVOQ1lfU1REQllcdFx0PSBcImNvbTFGcmVxSHpTdGRieVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTJfRlJFUVVFTkNZX1NUREJZXHRcdD0gXCJjb20yRnJlcUh6U3RkYnlcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HUFNfRElTVEFOQ0VfTUVURVJTXHRcdFx0PSBcImdwc0RNRURpc3RNXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR1BTX0RJU1RBTkNFX1NFQ09ORFNcdFx0PSBcImdwc0RNRVRpbWVTZWNzXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFNcdFx0PSBcIm5hdjFETUVEaXN0Tm1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0RJU1RBTkNFX01JTlVURVNcdFx0PSBcIm5hdjFETUVEaXN0TWluXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMl9ESVNUQU5DRV9OQVVUSUNBTFNcdFx0PSBcIm5hdjJETUVEaXN0Tm1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0RJU1RBTkNFX01JTlVURVNcdFx0PSBcIm5hdjJETUVEaXN0TWluXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuT1VUU0lERV9URU1QRVJBVFVSRV9DRUxTSVVTXHQ9IFwib3V0c2lkZVRlbXBDXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuVkVSVElDQUxfU1BFRURcdFx0XHRcdD0gXCJ2c0ZwbVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdST1VORF9TUEVFRFx0XHRcdFx0PSBcImdyb3VuZHNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuVFJVRV9BSVJTUEVFRFx0XHRcdFx0PSBcInRydWVfYWlyc3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5MQVRJVFVERVx0XHRcdFx0XHQ9IFwibGF0aXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5MT05HSVRVREVcdFx0XHRcdFx0PSBcImxvbmdpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLldFSUdIVF9UT1RBTF9GVUVMXHRcdFx0PSBcIndlaWdodFRvdGFsRnVlbFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9NT0RFXHRcdFx0XHQ9IFwiYXV0b3BpbG90TW9kZVwiO1x0XHQvLyAob2ZmPTAsZmxpZ2h0IGRpcmVjdG9yPTEsIG9uPTIpXHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0FMVElUVURFXHRcdFx0PSBcImF1dG9waWxvdEFsdGl0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX1ZFUlRJQ0FMX1NQRUVEXHQ9IFwiYXV0b3BpbG90VlNcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfQUlSUFNQRUVEXHRcdFx0PSBcImF1dG9waWxvdEFpclNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0hFQURJTkdcdFx0XHQ9IFwiYXV0b3BpbG90SGVhZGluZ1wiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb25zdGFudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvQ29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXHJcblxyXG5jb25zdCB1dGlscyAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XHJcbmNvbnN0IGxvZ2dlciAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xyXG5jb25zdCBodHRwICAgICAgPSByZXF1aXJlKCdodHRwJyk7XHJcbmNvbnN0IGV4cHJlc3MgICA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgaXAgICAgICAgID0gcmVxdWlyZShcImlwXCIpO1xyXG5jb25zdCBwYXRoICAgICAgPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IGFwcFJvb3QgICA9IHJlcXVpcmUoJ2FwcC1yb290LXBhdGgnKTtcclxuIFxyXG5jb25zdCBQT1JUICAgICAgPSA4MDAwO1xyXG5jb25zdCBIT1NUICAgICAgPSBpcC5hZGRyZXNzKCk7IC8vJzE5Mi4xNjguMC4yMic7XHJcbmNvbnN0IHBhdGhGaWxlcyA9IGFwcFJvb3QucGF0aCArIFwiXFxcXGRpc3RcIjtcclxuY29uc3QgYXBwICAgICAgID0gZXhwcmVzcygpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxuLy8gVXBzIVxyXG5hcHAudXNlKCAoZXJyLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xyXG4gIGxvZ2dlci5lcnJvcihlcnIpO1xyXG4gIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoJ1NvbWV0aGluZyBicm9rZSEnKVxyXG59KVxyXG5cclxuLy8gRm9yIHRlc3RzIG9ubHlcclxuYXBwLmdldChcIi9oZWxsb1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLmVuZCgnSGVsbG8hJyk7XHJcbn0pXHJcblxyXG4vLyBVc2VyIEludGVyZmFjZSBTdGFydFxyXG5hcHAuZ2V0KFwiL1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGluZGV4Lmh0bWxcIik7XHJcbn0pXHJcblxyXG4vLyBTY3JpcHRzXHJcbmFwcC5nZXQoXCIvZnJvbnQuYnVuZGxlLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcZnJvbnQuYnVuZGxlLmpzXCIpO1xyXG59KVxyXG5hcHAuZ2V0KFwiL251bWVyYWwubWluLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcbGlic1xcXFxudW1lcmFsLm1pbi5qc1wiKTtcclxufSlcclxuYXBwLmdldChcIi9tYXJrZXJ3aXRobGFiZWwuanNcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxsaWJzXFxcXG1hcmtlcndpdGhsYWJlbC5qc1wiKTtcclxufSlcclxuYXBwLmdldChcIi9qcXVlcnktYmxpbmsuanNcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxsaWJzXFxcXGpxdWVyeS1ibGluay5qc1wiKTtcclxufSlcclxuXHJcbi8vIEltYWdlc1xyXG5hcHAuZ2V0KFwiL2xvYWRpbmcuZ2lmXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUocGF0aEZpbGVzICsgXCJcXFxcaW1hZ2VzXFxcXGxvYWRpbmcuZ2lmXCIpO1xyXG59KVxyXG5cclxuLy8gRGF0YSBnYW1lXHJcbmFwcC5nZXQoXCIvZGF0YVwiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgIHJlc3BvbnNlLnR5cGUoJ2pzb24nKTtcclxuICAgIC8vIE5vbiBQcmV0dHktUHJpbnRcclxuICAgIC8vcmVzcG9uc2Uuc2VuZCggYWlyUGxhbmUgKTtcclxuICAgIC8vIFByZXR0eS1QcmludFxyXG4gICAgcmVzcG9uc2Uuc2VuZChKU09OLnN0cmluZ2lmeShwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpLCBudWxsLCA0KSk7XHJcbn0pXHJcblxyXG4vLyBEYXRhIGdhbWVcclxuYXBwLmdldChcIi9mbGlnaHRwbGFuXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2UudHlwZSgnanNvbicpO1xyXG4gICAgLy8gTm9uIFByZXR0eS1QcmludFxyXG4gICAgLy9yZXNwb25zZS5zZW5kKCBhaXJQbGFuZSApO1xyXG4gICAgLy8gUHJldHR5LVByaW50XHJcbiAgICByZXNwb25zZS5zZW5kKEpTT04uc3RyaW5naWZ5KHBsYW5lc0xpc3QuZ2V0QWxsQWlyUGxhbmVzKCksIG51bGwsIDQpKTtcclxufSlcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKGVycikgPT4ge1xyXG5cclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IobmV3IEVycm9yKGVyci50b1N0cmluZygpKSk7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlci5pbmZvKCdIVFRQIFNlcnZlciBsaXN0ZW5pbmcgb24gJyArIEhPU1QgKyBcIjpcIiArIFBPUlQpO1xyXG59KVxyXG5cclxudmFyIHJlY2VpdmVVcGRhdGUgPSBmdW5jdGlvbiAoX3BsYW5lc0xpc3QpIHtcclxuICAgIHBsYW5lc0xpc3QgPSBfcGxhbmVzTGlzdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICByZWNlaXZlVXBkYXRlOiByZWNlaXZlVXBkYXRlXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpcFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9sb2dnZXIuanMnKShtb2R1bGUpO1xyXG5jb25zdCBtb2RlbCAgICAgICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XHJcbmNvbnN0IGRncmFtICAgICAgICA9IHJlcXVpcmUoJ2RncmFtJyk7XHJcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xyXG5jb25zdCBpcCAgICAgICAgICAgPSByZXF1aXJlKFwiaXBcIik7XHJcblxyXG5jb25zdCBQT1JUICAgPSA4ODgxO1xyXG5jb25zdCBIT1NUICAgPSBpcC5hZGRyZXNzKCk7XHJcbi8vJzE5Mi4xNjguMC4yMic7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBkZ3JhbS5jcmVhdGVTb2NrZXQoJ3VkcDQnKTtcclxuXHJcbnNlcnZlci5vbignbGlzdGVuaW5nJywgc3RhcnRTZXJ2ZXIpO1xyXG5zZXJ2ZXIub24oJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSk7XHJcbnNlcnZlci5iaW5kKFBPUlQsIEhPU1QpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoKSB7XHJcblx0dmFyIGFkZHJlc3MgPSBzZXJ2ZXIuYWRkcmVzcygpO1xyXG5cdGxvZ2dlci5pbmZvKCdVRFAgIFNlcnZlciBsaXN0ZW5pbmcgb24gJyArIGFkZHJlc3MuYWRkcmVzcyArIFwiOlwiICsgYWRkcmVzcy5wb3J0KTtcclxufVxyXG5cclxuY2xhc3MgTXlFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHt9XHJcbmNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBNeUVtaXR0ZXIoKTtcclxuZXhwb3J0cy5ldmVudEVtaXR0ZXIgPSBldmVudEVtaXR0ZXI7XHJcblxyXG5jb25zdCBDb25zdGFudHMgPSBuZXcgbW9kZWwuQ29uc3RhbnRzKCk7XHJcblxyXG52YXIgcGxhbmVzTGlzdCA9IG5ldyBtb2RlbC5QbGFuZXNMaXN0KCk7XHJcblxyXG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZShtZXNzYWdlLCByZW1vdGUpIHtcclxuXHR0cnkge1xyXG5cdFx0XHJcblx0XHR2YXIgaXAgICAgICAgICAgICAgICAgICA9IHJlbW90ZS5hZGRyZXNzO1xyXG5cdFx0dmFyIG1zZ3MgICAgICAgICAgICAgICAgPSBtZXNzYWdlLnRvU3RyaW5nKCd1dGY4Jyk7XHJcblx0XHR2YXIgYWlyUGxhbmUgICAgICAgICAgICA9IG5ldyBtb2RlbC5BaXJQbGFuZShpcCk7XHJcblxyXG5cdFx0bG9nZ2VyLmluZm8oXCJSZWNlaXZpbmcgYWlycGxhbmUgbWVzc2FnZSBmcm9tICVzXCIsIGlwKTtcclxuXHRcdGxvZ2dlci5kZWJ1ZyhcIlVEUCBNZXNzYWdlIHJlY2VpdmVkIGZyb20gJXM6ICVzXCIsIGlwLCBtc2dzKTtcclxuXHJcblx0ICAgXHRtc2dzLnNwbGl0KFwiO1wiKS5tYXAoIG1zZyA9PiB7XHJcblxyXG5cdCAgIFx0XHR2YXIgYXJyICAgPSBtc2cuc3BsaXQoXCI9XCIpO1xyXG5cdCAgIFx0XHR2YXIgbGFiZWwgPSBhcnJbMF07XHJcblx0ICAgXHRcdHZhciB2YWx1ZSA9IGFyclsxXTtcclxuXHJcblx0ICAgXHRcdHN3aXRjaChsYWJlbCkge1xyXG5cdCAgIFx0XHRcdCBjYXNlIENvbnN0YW50cy5ERVNUSU5BVElPTjoge1xyXG5cdCAgIFx0XHRcdFx0YWlyUGxhbmUuc2V0RGVzdGluYXRpb24odmFsdWUpXHJcblx0ICAgXHRcdFx0XHRicmVhaztcclxuXHQgICBcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HQU1FX1BBVVNFRDoge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldFBhdXNlKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5CQVJPTUVURVI6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRCYXJvbWV0ZXIodmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTVBBU1NfSEVBRElORzoge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldENvbXBhc3NIZWFkaW5nKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldE5hdjFGcmVxKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldE5hdjJGcmVxKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BSVJTUEVFRDoge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldEFpclNwZWVkKHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BTFRJVFVERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuRlVFTF9RVUFOVElUWToge1xyXG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldEZ1ZWxRdWFudGl0eSh2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVBVX1JVTk5JTkc6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTFfRlJFUVVFTkNZOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tMUZyZXEodmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTJfRlJFUVVFTkNZOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tMkZyZXEodmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTFfRlJFUVVFTkNZX1NUREJZOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00yX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX01FVEVSUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX1NFQ09ORFM6IHtcclxuXHRcdFx0XHQgXHQvKlxyXG5cdFx0XHRcdCBcdGZsb2F0IGRpc3RhbmNlTWludXRlcyA9IDA7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRkaXN0YW5jZU1pbnV0ZXMgPSBGbG9hdC5wYXJzZUZsb2F0KHZhbHVlKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKE51bWJlckZvcm1hdEV4Y2VwdGlvbiBlKSB7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlTWludXRlcyA+IDApIHtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZU1pbnV0ZXMgPSAoaW50KSBkaXN0YW5jZU1pbnV0ZXM7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VTZWNvbmRzID0gKGludCkgKChkaXN0YW5jZU1pbnV0ZXMgLSBpRGlzdGFuY2VNaW51dGVzKSAqIDYwKTtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZUhvdXJzID0gKGludCkgKGRpc3RhbmNlTWludXRlcyAvIDYwKTtcclxuXHRcdFx0XHRcdFx0U3RyaW5nIHJlc3VsdCA9IGRmLmZvcm1hdChpRGlzdGFuY2VIb3VycykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VNaW51dGVzKSArIFwiOlwiICsgZGYuZm9ybWF0KGlEaXN0YW5jZVNlY29uZHMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgcmVzdWx0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lLnB1dChpcC50b1N0cmluZygpLCBcIjBcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0IFx0Ki9cclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMl9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuT1VUU0lERV9URU1QRVJBVFVSRV9DRUxTSVVTOiB7XHJcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0T3V0c2lkZVRlbXBlcmF0dXJlKHZhbHVlKTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuVkVSVElDQUxfU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRWU3BlZWQodmFsdWUpO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HUk9VTkRfU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRHcm91bmRTcGVlZCh2YWx1ZSk7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLlRSVUVfQUlSU1BFRUQ6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkxBVElUVURFOiB7XHJcblx0XHRcdFx0XHQgaWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xyXG5cdFx0XHRcdFx0XHQgYWlyUGxhbmUuc2V0TGF0QW50ZXJpb3JNYXAocGxhbmVzTGlzdC5nZXRBaXJQbGFuZShpcCkuZ2V0TGF0TWFwKCkpO1xyXG5cdFx0XHRcdFx0IH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFpclBsYW5lLnNldExhdEFudGVyaW9yTWFwKDApO1xyXG5cdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdCBhaXJQbGFuZS5zZXRMYXRNYXAodmFsdWUpO1xyXG5cdFx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkxPTkdJVFVERToge1xyXG5cdFx0XHRcdFx0aWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xyXG5cdFx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMb25BbnRlcmlvck1hcChwbGFuZXNMaXN0LmdldEFpclBsYW5lKGlwKS5nZXRMb25NYXAoKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMb25BbnRlcmlvck1hcCgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGFpclBsYW5lLnNldExvbk1hcCh2YWx1ZSk7XHJcblx0XHRcdFx0XHRhaXJQbGFuZS5jYWxjdWxhdGVCZWFyaW5nKHBhcnNlRmxvYXQoYWlyUGxhbmUuZ2V0TGF0TWFwKCkpLCBwYXJzZUZsb2F0KHZhbHVlKSk7XHJcblx0XHRcdFx0IFx0YnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuV0VJR0hUX1RPVEFMX0ZVRUw6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9NT0RFOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfQUxUSVRVREU6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX0FJUlBTUEVFRDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX0hFQURJTkc6IHticmVhazt9XHJcblx0ICAgXHRcdFx0IGRlZmF1bHQ6XHJcblx0ICAgXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHQgICB9XHJcblx0XHRcdCAgIFxyXG5cdCAgIFx0XHQgICBsb2dnZXIuZGVidWcoXCJNZXNzYWdlIGF0dHJpYnV0ZSBwYXJzZWQuLi46ICVzIC0gJXNcIiwgbGFiZWwsIHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cdFx0ICAgXHJcblx0XHRwbGFuZXNMaXN0LmFkZEFpclBsYW5lKGFpclBsYW5lLmdldElwKCksYWlyUGxhbmUpO1xyXG5cdFx0ZXZlbnRFbWl0dGVyLmVtaXQoJ3JlY2VpdmVkTWVzc2FnZScsIHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cdFx0bG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkpO1xyXG4gICBcdFx0dGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91ZHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9qcy91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgJy4vanMvbW9kZWwvQWlyUGxhbmUuanMnO1xyXG5pbXBvcnQgJy4vanMvdXRpbHMvbG9nZ2VyLmpzJztcclxuaW1wb3J0ICcuL2pzL2NvbmZpZy5qcyc7XHJcbmltcG9ydCAnLi9qcy9odHRwLXNlcnZlci5qcyc7XHJcbmltcG9ydCAnLi9qcy91ZHAtc2VydmVyLmpzJztcclxuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtYmFjay5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcblxyXG5mdW5jdGlvbiBQbGFuZXNMaXN0KCkge1xyXG5cdHRoaXMuYWlyUGxhbmVzID0ge307XHJcbn07XHJcblxyXG5QbGFuZXNMaXN0LnByb3RvdHlwZSA9IHtcclxuXHRnZXRBaXJQbGFuZTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmFpclBsYW5lc1tpcF07XHJcblx0fSxcclxuXHRhZGRBaXJQbGFuZTogZnVuY3Rpb24oaXAsIF9haXJQbGFuZSkge1xyXG5cdFx0dGhpcy5haXJQbGFuZXNbaXBdID0gX2FpclBsYW5lO1xyXG5cdH0sXHJcblx0Z2V0QWxsQWlyUGxhbmVzOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmFpclBsYW5lcztcclxuXHR9XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGFuZXNMaXN0O1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvUGxhbmVzTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcHAtcm9vdC1wYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZ3JhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRncmFtXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBjb25maWcgICAgID0gcmVxdWlyZSgnLi9jb25maWcnKTtcclxuY29uc3QgdXRpbHMgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgICA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcclxuY29uc3QgdWRwU2VydmVyICA9IHJlcXVpcmUoJy4vdWRwLXNlcnZlci5qcycpO1xyXG5jb25zdCBodHRwU2VydmVyID0gcmVxdWlyZSgnLi9odHRwLXNlcnZlci5qcycpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxubG9nZ2VyLmluZm8oJ1N0YXJ0IHgtbmF2aWdhdC4uLicpO1xyXG5cclxudWRwU2VydmVyLmV2ZW50RW1pdHRlci5vbigncmVjZWl2ZWRNZXNzYWdlJywgKF9wbGFuZXNMaXN0KSA9PiB7XHJcbiAgICBwbGFuZXNMaXN0ID0gX3BsYW5lc0xpc3Q7XHJcbiAgICBodHRwU2VydmVyLnJlY2VpdmVVcGRhdGUocGxhbmVzTGlzdCk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocGxhbmVzTGlzdC5nZXRBbGxBaXJQbGFuZXMoKSkuZm9yRWFjaChpcEFpclBsYW5lID0+IHtcclxuICAgICAgICBhaXJQbGFuZSA9IHBsYW5lc0xpc3QuZ2V0QWlyUGxhbmUoaXBBaXJQbGFuZSk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBaXJwbGFuZSAnJXMnIGF0IExvbmdpdHVkZS9MYXRpdHVkZTogJXMvJXMsIEFpclNwZWVkOiAlc1wiLCBhaXJQbGFuZS5nZXRJcCgpLGFpclBsYW5lLmdldExhdE1hcCgpLCBhaXJQbGFuZS5nZXRMb25NYXAoKSwgYWlyUGxhbmUuZ2V0QWlyU3BlZWQoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuZGVidWcoXCJMaXN0IG9mIGFpcnBsYW5lcy4uLjogJXNcIiwgSlNPTi5zdHJpbmdpZnkocGxhbmVzTGlzdCwgbnVsbCwgNCkpO1xyXG59KTtcclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=