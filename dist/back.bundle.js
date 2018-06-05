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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
exports.PlanesList = __webpack_require__(16);
exports.Constants  = __webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const winston = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"winston\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const moment  = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"moment\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const S       = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"string\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
const http      = __webpack_require__(17);
const express   = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"express\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const ip        = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const path      = __webpack_require__(18);
const appRoot   = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"app-root-path\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
 
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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils        = __webpack_require__(0);
const logger       = __webpack_require__(2)(module);
const model        = __webpack_require__(1);
const dgram        = __webpack_require__(19);
const EventEmitter = __webpack_require__(20);
const ip           = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__js_app_js__);









/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils      = __webpack_require__(0);
const logger     = __webpack_require__(2)(module);
const model      = __webpack_require__(1);
const udpServer  = __webpack_require__(7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTc4OTUzOWVkOGMzNmMzYTllMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0FpclBsYW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2h0dHAtc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91ZHAtc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC1iYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9QbGFuZXNMaXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2xCQTtBQUNBO0FBQ0EsNEM7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZUFBZSxJQUFJLFdBQVcsSUFBSSxXQUFXLElBQUksYUFBYTtBQUMxRSxDQUFDOztBQUVEO0FBQ0EsWUFBWSxlQUFlLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSSxhQUFhO0FBQzFFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFpQztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7Ozs7Ozs7O0FDdkxBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLHdDQUF3QztBQUN4QztBQUNBLGM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7O0FDbkJBLGlDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoiYmFjay5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTc4OTUzOWVkOGMzNmMzYTllMTIiLCJ2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbmV4cG9ydHMuZmFib25hY2NpID0gZnVuY3Rpb24gKG51bTEsbnVtMikge1xuICAgIHJldHVybiBudW0xK251bTI7XG59O1xuXG5leHBvcnRzLnNheUhlbGxvSW5TcGFuaXNoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBcIkhvbGFcIjtcbn07XG5cbmV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uKGRlZ3JlZXMpIHtcbiAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xuICByZXR1cm4gcmFkaWFucztcbn07XG5cbmV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uKHJhZGlhbnMpIHtcbiAgdmFyIGRlZ3JlZXMgPSByYWRpYW5zICogKDE4MCAvIE1hdGguUEkpO1xuICByZXR1cm4gZGVncmVlcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5BaXJQbGFuZSAgID0gcmVxdWlyZShcIi4vQWlyUGxhbmUuanNcIik7XG5leHBvcnRzLlBsYW5lc0xpc3QgPSByZXF1aXJlKFwiLi9QbGFuZXNMaXN0LmpzXCIpO1xuZXhwb3J0cy5Db25zdGFudHMgID0gcmVxdWlyZShcIi4vQ29uc3RhbnRzLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHdpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCBtb21lbnQgID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5jb25zdCBTICAgICAgID0gcmVxdWlyZSgnc3RyaW5nJyk7XG5cbmNvbnN0IG15Q29uc29sZUZvcm1hdCA9IHdpbnN0b24uZm9ybWF0LnByaW50ZihpbmZvID0+IHtcbiAgcmV0dXJuIGAke2luZm8udGltZXN0YW1wfSBbJHtpbmZvLmxhYmVsfV0gJHtpbmZvLmxldmVsfTogJHtpbmZvLm1lc3NhZ2V9YDtcbn0pO1xuXG5jb25zdCBteUpzb25Gb3JtYXQgPSB3aW5zdG9uLmZvcm1hdC5qc29uKGluZm8gPT4ge1xuICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9IFske2luZm8ubGFiZWx9XSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gO1xufSk7XG5cbnZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcbiAgICBpZiAoIGNhbGxpbmdNb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHZhciBwYXJ0cyA9IGNhbGxpbmdNb2R1bGUuZmlsZW5hbWUuc3BsaXQoJ1xcXFwnKTtcbiAgICAgIHZhciBsYmwgICA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdICsgJy8nICsgcGFydHMucG9wKCk7XG4gICAgICByZXR1cm4gUyhsYmwpLnBhZFJpZ2h0KDIyLCctJykgKyAnPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnYnVuZGxlZCc7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYWxsaW5nTW9kdWxlKSB7XG4gIFxuICB2YXIgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xuICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSh7IFxuICAgICAgICBsZXZlbDogJ2Vycm9yJyxcbiAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3MvZXJyb3IubG9nJywgXG4gICAgICAgIG1heHNpemU6IDUyNDI4ODAsIC8vNU1CXG4gICAgICAgIG1heEZpbGVzOiA1LFxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5wcmV0dHlQcmludCgpLFxuICAgICAgICAgICBteUpzb25Gb3JtYXRcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUgKHtcbiAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3MvdHJhY2UubG9nJyxcbiAgICAgICAgbWF4c2l6ZTogNTI0Mjg4MCwgLy81TUJcbiAgICAgICAgbWF4RmlsZXM6IDUsIFxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5wcmV0dHlQcmludCgpLFxuICAgICAgICAgICBteUpzb25Gb3JtYXRcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdXG4gIH0pO1xuXG4gIGlmICggcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyApIHtcbiAgICBsb2dnZXIuYWRkKFxuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgICAgbGV2ZWw6ICdkZWJ1ZycsXG4gICAgICAgIGpzb246IGZhbHNlLFxuICAgICAgICBjb2xvcml6ZTogdHJ1ZSxcbiAgICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lIChcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmxhYmVsKCB7IGxhYmVsOiBnZXRMYWJlbChjYWxsaW5nTW9kdWxlKSB9KSxcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcbiAgICAgICAgICBteUNvbnNvbGVGb3JtYXRcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBdXRob3IgVWFsdGVyIEpyLlxuY29uc3QgdXRpbHMgICAgICAgID0gcmVxdWlyZSgnLi8uLi91dGlscy91dGlscy5qcycpO1xuXG4vLyBDbGFzcyBDb25zdHJ1Y3RvciBhbmQgQXR0cmlidXRlc1xuZnVuY3Rpb24gQWlyUGxhbmUoaXApIHtcblx0dGhpcy5pcCAgICAgICAgICAgICAgICAgPSBpcDtcblx0dGhpcy5sYXRNYXBcdFx0XHRcdD0gXCJcIjtcblx0dGhpcy5sb25NYXBcdFx0XHRcdD0gXCJcIjtcblx0dGhpcy5sYXRBbnRlcmlvck1hcFx0XHQ9IFwiXCI7XG5cdHRoaXMubG9uQW50ZXJpb3JNYXBcdFx0PSBcIlwiO1xuXHR0aGlzLmFsdE1hcFx0XHRcdFx0PSAwIDtcblx0dGhpcy5haXJTcGVlZFx0XHRcdD0gXCJcIjtcblx0dGhpcy52U3BlZWRcdFx0XHRcdD0gXCJcIjtcblx0dGhpcy5ncm91bmRTcGVlZFx0XHQ9IDA7XG5cdHRoaXMuYmVhcmluZ1x0XHRcdD0gXCJcIjtcblx0dGhpcy5kZXN0aW5hdGlvblx0XHQ9IFwiXCI7XG5cdHRoaXMuZ3BzRGlzdGFuY2VObVx0XHQ9IFwiXCI7XG5cdHRoaXMuZ3BzRGlzdGFuY2VUaW1lXHQ9IFwiXCI7XG5cdHRoaXMuYmFyb21ldGVyXHRcdFx0PSBcIlwiO1xuXHR0aGlzLmZ1ZWxRdWFudGl0eVx0XHQ9IFwiXCI7XG5cdHRoaXMubmF2MUZyZXFcdFx0XHQ9IFwiXCI7XG5cdHRoaXMubmF2MkZyZXFcdFx0XHQ9IFwiXCI7XG5cdHRoaXMucGF1c2VcdFx0XHRcdD0gXCJcIjtcblx0dGhpcy5jb21wYXNzSGVhZGluZ1x0XHQ9IFwiXCI7XG5cdHRoaXMub3V0c2lkZVRlbXBlcmF0dXJlXHQ9IFwiXCI7XG5cdHRoaXMuY29tMUZyZXFcdFx0XHQ9IFwiXCI7XG5cdHRoaXMuY29tMkZyZXFcdFx0XHQ9IFwiXCI7XG59O1xuXG4vLyBDbGFzcyBGdW5jdGlvbnNcbkFpclBsYW5lLnByb3RvdHlwZSA9IHtcblx0Z2V0SXA6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuaXA7XG5cdH0sXG5cdGdldExhdE1hcDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubGF0TWFwO1xuXHR9LFxuXHRzZXRMYXRNYXA6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMubGF0TWFwID0gdmxyO1xuXHR9LFxuXHRnZXRMb25NYXA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmxvbk1hcDtcblx0fSxcblx0c2V0TG9uTWFwOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmxvbk1hcCA9IHZscjtcblx0fSxcblx0Z2V0TGF0QW50ZXJpb3JNYXA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmxhdEFudGVyaW9yTWFwO1xuXHR9LFxuXHRzZXRMYXRBbnRlcmlvck1hcDogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5sYXRBbnRlcmlvck1hcCA9IHZscjtcblx0fSxcblx0Z2V0TG9uQW50ZXJpb3JNYXA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmxvbkFudGVyaW9yTWFwO1xuXHR9LFxuXHRzZXRMb25BbnRlcmlvck1hcDogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5sb25BbnRlcmlvck1hcCA9IHZscjtcblx0fSxcblx0Z2V0QWx0TWFwOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hbHRNYXA7XG5cdH0sXG5cdHNldEFsdE1hcDogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5hbHRNYXAgPSB2bHI7XG5cdH0sXG5cdGdldEFpclNwZWVkOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5haXJTcGVlZDtcblx0fSxcblx0c2V0QWlyU3BlZWQ6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuYWlyU3BlZWQgPSB2bHI7XG5cdH0sXG5cdGdldFZTcGVlZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMudlNwZWVkO1xuXHR9LFxuXHRzZXRWU3BlZWQ6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMudlNwZWVkID0gdmxyO1xuXHR9LFxuXHRnZXRHcm91bmRTcGVlZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ3JvdW5kU3BlZWQ7XG5cdH0sXG5cdHNldEdyb3VuZFNwZWVkOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmdyb3VuZFNwZWVkID0gdmxyO1xuXHR9LFxuXHRnZXRCZWFyaW5nOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5iZWFyaW5nO1xuXHR9LFxuXHRzZXRCZWFyaW5nOiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmJlYXJpbmcgPSB2bHI7XG5cdH0sXG5cdGdldERlc3RpbmF0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kZXN0aW5hdGlvbjtcblx0fSxcblx0c2V0RGVzdGluYXRpb246IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuZGVzdGluYXRpb24gPSB2bHI7XG5cdH0sXG5cdGdldEdwc0Rpc3RhbmNlTm06IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmdwc0Rpc3RhbmNlTm07XG5cdH0sXG5cdHNldEdwc0Rpc3RhbmNlTm06IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuZ3BzRGlzdGFuY2VObSA9IHZscjtcblx0fSxcblx0Z2V0R3BzRGlzdGFuY2VUaW1lOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5ncHNEaXN0YW5jZVRpbWU7XG5cdH0sXG5cdHNldEdwc0Rpc3RhbmNlVGltZTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5ncHNEaXN0YW5jZVRpbWUgPSB2bHI7XG5cdH0sXG5cdGdldEJhcm9tZXRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYmFyb21ldGVyO1xuXHR9LFxuXHRzZXRCYXJvbWV0ZXI6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuYmFyb21ldGVyID0gdmxyO1xuXHR9LFxuXHRnZXRGdWVsUXVhbnRpdHk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmZ1ZWxRdWFudGl0eTtcblx0fSxcblx0c2V0RnVlbFF1YW50aXR5OiBmdW5jdGlvbih2bHIpIHtcblx0XHR0aGlzLmZ1ZWxRdWFudGl0eSA9IHZscjtcblx0fSxcblx0Z2V0TmF2MUZyZXE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm5hdjFGcmVxO1xuXHR9LFxuXHRzZXROYXYxRnJlcTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5uYXYxRnJlcSA9IHZscjtcblx0fSxcblx0Z2V0TmF2MkZyZXE6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm5hdjJGcmVxO1xuXHR9LFxuXHRzZXROYXYyRnJlcTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5uYXYyRnJlcSA9IHZscjtcblx0fSxcblx0Z2V0UGF1c2U6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnBhdXNlO1xuXHR9LFxuXHRzZXRQYXVzZTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5wYXVzZSA9IHZscjtcblx0fSxcblx0Z2V0Q29tcGFzc0hlYWRpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBhc3NIZWFkaW5nO1xuXHR9LFxuXHRzZXRDb21wYXNzSGVhZGluZzogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5jb21wYXNzSGVhZGluZyA9IHZscjtcblx0fSxcblx0Z2V0T3V0c2lkZVRlbXBlcmF0dXJlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5vdXRzaWRlVGVtcGVyYXR1cmU7XG5cdH0sXG5cdHNldE91dHNpZGVUZW1wZXJhdHVyZTogZnVuY3Rpb24odmxyKSB7XG5cdFx0dGhpcy5vdXRzaWRlVGVtcGVyYXR1cmUgPSB2bHI7XG5cdH0sXG5cdGdldENvbTFGcmVxOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5jb20xRnJlcTtcblx0fSxcblx0c2V0Q29tMUZyZXE6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuY29tMUZyZXEgPSB2bHI7XG5cdH0sXG5cdGdldENvbTJGcmVxOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5jb20yRnJlcTtcblx0fSxcblx0c2V0Q29tMkZyZXE6IGZ1bmN0aW9uKHZscikge1xuXHRcdHRoaXMuY29tMkZyZXEgPSB2bHI7XG5cdH0sXG5cblx0Y2FsY3VsYXRlQmVhcmluZzogZnVuY3Rpb24obGF0MiwgbG9uMikge1xuXHRcdHZhciBsb25naXR1ZGUxID0gcGFyc2VGbG9hdCh0aGlzLmxvbkFudGVyaW9yTWFwKTtcblx0XHR2YXIgbG9uZ2l0dWRlMiA9IGxvbjI7XG5cblx0XHR2YXIgbGF0aXR1ZGUxICA9IHV0aWxzLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5sYXRBbnRlcmlvck1hcCk7XG5cdFx0dmFyIGxhdGl0dWRlMiAgPSB1dGlscy5kZWdyZWVzVG9SYWRpYW5zKGxhdDIpO1xuXG5cdFx0dmFyIGxvbmdEaWZmICAgPSB1dGlscy5kZWdyZWVzVG9SYWRpYW5zKGxvbmdpdHVkZTIgLSBsb25naXR1ZGUxKTtcblxuXHRcdHZhciB5ID0gTWF0aC5zaW4obG9uZ0RpZmYpICogTWF0aC5jb3MobGF0aXR1ZGUyKTtcblx0XHR2YXIgeCA9IE1hdGguY29zKGxhdGl0dWRlMSkgKiBNYXRoLnNpbihsYXRpdHVkZTIpIC0gTWF0aC5zaW4obGF0aXR1ZGUxKSAqIE1hdGguY29zKGxhdGl0dWRlMikgKiBNYXRoLmNvcyhsb25nRGlmZik7XG5cdFxuXHRcdHZhciByZXN1bHQgPSAodXRpbHMucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKHksIHgpKSArIDM2MCkgJSAzNjA7XG5cdFx0aWYgKCByZXN1bHQgPiAwICkge1xuXHRcdFx0dGhpcy5iZWFyaW5nID0gcGFyc2VGbG9hdChyZXN1bHQpO1xuXHRcdH1cblx0fVxuXG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBBaXJQbGFuZTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvQWlyUGxhbmUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXV0aG9yIFVhbHRlciBKci5cblxuZnVuY3Rpb24gQ29uc3RhbnRzKCkge1xufTtcblxuQ29uc3RhbnRzLnByb3RvdHlwZS5ERVNUSU5BVElPTlx0XHRcdFx0XHQ9IFwiZGVzdGluYXRpb25cIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuR0FNRV9QQVVTRURcdFx0XHRcdFx0PSBcImdhbWVQYXVzZWRcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQkFST01FVEVSXHRcdFx0XHRcdD0gXCJiYXJvbWV0ZXJcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NUEFTU19IRUFESU5HXHRcdFx0XHQ9IFwiY29tcGFzc0hlYWRpbmdcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJuYXYxRnJlcUh6XCI7XG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRlJFUVVFTkNZXHRcdFx0XHQ9IFwibmF2MkZyZXFIelwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5BSVJTUEVFRFx0XHRcdFx0XHQ9IFwiYWlyc3BlZWRcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQUxUSVRVREVcdFx0XHRcdFx0PSBcImFsdGl0dWRlXCI7XG5Db25zdGFudHMucHJvdG90eXBlLkZVRUxfUVVBTlRJVFlcdFx0XHRcdD0gXCJmdWVscXVhbnRpdHlcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQVBVX1JVTk5JTkdcdFx0XHRcdFx0PSBcImFwdXJ1bm5pbmdcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMV9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJjb20xRnJlcUh6XCI7XG5Db25zdGFudHMucHJvdG90eXBlLkNPTTJfRlJFUVVFTkNZXHRcdFx0XHQ9IFwiY29tMkZyZXFIelwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00xX0ZSRVFVRU5DWV9TVERCWVx0XHQ9IFwiY29tMUZyZXFIelN0ZGJ5XCI7XG5Db25zdGFudHMucHJvdG90eXBlLkNPTTJfRlJFUVVFTkNZX1NUREJZXHRcdD0gXCJjb20yRnJlcUh6U3RkYnlcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuR1BTX0RJU1RBTkNFX01FVEVSU1x0XHRcdD0gXCJncHNETUVEaXN0TVwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5HUFNfRElTVEFOQ0VfU0VDT05EU1x0XHQ9IFwiZ3BzRE1FVGltZVNlY3NcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFNcdFx0PSBcIm5hdjFETUVEaXN0Tm1cIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9ESVNUQU5DRV9NSU5VVEVTXHRcdD0gXCJuYXYxRE1FRGlzdE1pblwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0RJU1RBTkNFX05BVVRJQ0FMU1x0XHQ9IFwibmF2MkRNRURpc3RObVwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0RJU1RBTkNFX01JTlVURVNcdFx0PSBcIm5hdjJETUVEaXN0TWluXCI7XG5Db25zdGFudHMucHJvdG90eXBlLk9VVFNJREVfVEVNUEVSQVRVUkVfQ0VMU0lVU1x0PSBcIm91dHNpZGVUZW1wQ1wiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5WRVJUSUNBTF9TUEVFRFx0XHRcdFx0PSBcInZzRnBtXCI7XG5Db25zdGFudHMucHJvdG90eXBlLkdST1VORF9TUEVFRFx0XHRcdFx0PSBcImdyb3VuZHNwZWVkXCI7XG5Db25zdGFudHMucHJvdG90eXBlLlRSVUVfQUlSU1BFRURcdFx0XHRcdD0gXCJ0cnVlX2FpcnNwZWVkXCI7XG5Db25zdGFudHMucHJvdG90eXBlLkxBVElUVURFXHRcdFx0XHRcdD0gXCJsYXRpdHVkZVwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5MT05HSVRVREVcdFx0XHRcdFx0PSBcImxvbmdpdHVkZVwiO1xuQ29uc3RhbnRzLnByb3RvdHlwZS5XRUlHSFRfVE9UQUxfRlVFTFx0XHRcdD0gXCJ3ZWlnaHRUb3RhbEZ1ZWxcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX01PREVcdFx0XHRcdD0gXCJhdXRvcGlsb3RNb2RlXCI7XHRcdC8vIChvZmY9MCxmbGlnaHQgZGlyZWN0b3I9MSwgb249MilcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0FMVElUVURFXHRcdFx0PSBcImF1dG9waWxvdEFsdGl0dWRlXCI7XG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRFx0PSBcImF1dG9waWxvdFZTXCI7XG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9BSVJQU1BFRURcdFx0XHQ9IFwiYXV0b3BpbG90QWlyU3BlZWRcIjtcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0hFQURJTkdcdFx0XHQ9IFwiYXV0b3BpbG90SGVhZGluZ1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9Db25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdXRpbHMgICAgID0gcmVxdWlyZSgnLi91dGlscy91dGlscy5qcycpO1xuY29uc3QgbG9nZ2VyICAgID0gcmVxdWlyZSgnLi91dGlscy9sb2dnZXIuanMnKShtb2R1bGUpO1xuY29uc3QgbW9kZWwgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xuY29uc3QgaHR0cCAgICAgID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgZXhwcmVzcyAgID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgaXAgICAgICAgID0gcmVxdWlyZShcImlwXCIpO1xuY29uc3QgcGF0aCAgICAgID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgYXBwUm9vdCAgID0gcmVxdWlyZSgnYXBwLXJvb3QtcGF0aCcpO1xuIFxuY29uc3QgUE9SVCAgICAgID0gODAwMDtcbmNvbnN0IEhPU1QgICAgICA9IGlwLmFkZHJlc3MoKTsgLy8nMTkyLjE2OC4wLjIyJztcbmNvbnN0IHBhdGhGaWxlcyA9IGFwcFJvb3QucGF0aCArIFwiXFxcXGRpc3RcIjtcbmNvbnN0IGFwcCAgICAgICA9IGV4cHJlc3MoKTtcblxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xuXG4vLyBVcHMhXG5hcHAudXNlKCAoZXJyLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZCgnU29tZXRoaW5nIGJyb2tlIScpXG59KVxuXG4vLyBGb3IgdGVzdHMgb25seVxuYXBwLmdldChcIi9oZWxsb1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICByZXNwb25zZS5lbmQoJ0hlbGxvIScpO1xufSlcblxuLy8gVXNlciBJbnRlcmZhY2UgU3RhcnRcbmFwcC5nZXQoXCIvXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGluZGV4Lmh0bWxcIik7XG59KVxuXG4vLyBTY3JpcHRzXG5hcHAuZ2V0KFwiL2Zyb250LmJ1bmRsZS5qc1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxmcm9udC5idW5kbGUuanNcIik7XG59KVxuYXBwLmdldChcIi9udW1lcmFsLm1pbi5qc1wiLCAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxsaWJzXFxcXG51bWVyYWwubWluLmpzXCIpO1xufSlcbmFwcC5nZXQoXCIvbWFya2Vyd2l0aGxhYmVsLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGxpYnNcXFxcbWFya2Vyd2l0aGxhYmVsLmpzXCIpO1xufSlcbmFwcC5nZXQoXCIvanF1ZXJ5LWJsaW5rLmpzXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGxpYnNcXFxcanF1ZXJ5LWJsaW5rLmpzXCIpO1xufSlcblxuLy8gSW1hZ2VzXG5hcHAuZ2V0KFwiL2xvYWRpbmcuZ2lmXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnNlbmRGaWxlKHBhdGhGaWxlcyArIFwiXFxcXGltYWdlc1xcXFxsb2FkaW5nLmdpZlwiKTtcbn0pXG5cbi8vIERhdGEgZ2FtZVxuYXBwLmdldChcIi9kYXRhXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLnR5cGUoJ2pzb24nKTtcbiAgICAvLyBOb24gUHJldHR5LVByaW50XG4gICAgLy9yZXNwb25zZS5zZW5kKCBhaXJQbGFuZSApO1xuICAgIC8vIFByZXR0eS1QcmludFxuICAgIHJlc3BvbnNlLnNlbmQoSlNPTi5zdHJpbmdpZnkocGxhbmVzTGlzdC5nZXRBbGxBaXJQbGFuZXMoKSwgbnVsbCwgNCkpO1xuICAgIFxufSlcblxuYXBwLmxpc3RlbihQT1JULCAoZXJyKSA9PiB7XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihuZXcgRXJyb3IoZXJyLnRvU3RyaW5nKCkpLnN0YWNrKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cblxuICAgIGxvZ2dlci5pbmZvKCdIVFRQIFNlcnZlciBsaXN0ZW5pbmcgb24gJyArIEhPU1QgKyBcIjpcIiArIFBPUlQpO1xufSlcblxudmFyIHJlY2VpdmVVcGRhdGUgPSBmdW5jdGlvbiAoX3BsYW5lc0xpc3QpIHtcbiAgICBwbGFuZXNMaXN0ID0gX3BsYW5lc0xpc3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlY2VpdmVVcGRhdGU6IHJlY2VpdmVVcGRhdGVcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2h0dHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcbmNvbnN0IGxvZ2dlciAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcbmNvbnN0IG1vZGVsICAgICAgICA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcbmNvbnN0IGRncmFtICAgICAgICA9IHJlcXVpcmUoJ2RncmFtJyk7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGlwICAgICAgICAgICA9IHJlcXVpcmUoXCJpcFwiKTtcblxuY29uc3QgUE9SVCAgID0gODg4MTtcbmNvbnN0IEhPU1QgICA9IGlwLmFkZHJlc3MoKTtcbi8vJzE5Mi4xNjguMC4yMic7XG5cbmNvbnN0IHNlcnZlciA9IGRncmFtLmNyZWF0ZVNvY2tldCgndWRwNCcpO1xuXG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIHN0YXJ0U2VydmVyKTtcbnNlcnZlci5vbignbWVzc2FnZScsIHJlY2VpdmVNZXNzYWdlKTtcbnNlcnZlci5iaW5kKFBPUlQsIEhPU1QpO1xuXG5mdW5jdGlvbiBzdGFydFNlcnZlcigpIHtcblx0dmFyIGFkZHJlc3MgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuXHRsb2dnZXIuaW5mbygnVURQICBTZXJ2ZXIgbGlzdGVuaW5nIG9uICcgKyBhZGRyZXNzLmFkZHJlc3MgKyBcIjpcIiArIGFkZHJlc3MucG9ydCk7XG59XG5cbmNsYXNzIE15RW1pdHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7fVxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IE15RW1pdHRlcigpO1xuZXhwb3J0cy5ldmVudEVtaXR0ZXIgPSBldmVudEVtaXR0ZXI7XG5cbmNvbnN0IENvbnN0YW50cyA9IG5ldyBtb2RlbC5Db25zdGFudHMoKTtcblxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xuXG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZShtZXNzYWdlLCByZW1vdGUpIHtcblx0dHJ5IHtcblx0XHRcblx0XHR2YXIgaXAgICAgICAgICAgICAgICAgICA9IHJlbW90ZS5hZGRyZXNzO1xuXHRcdHZhciBtc2dzICAgICAgICAgICAgICAgID0gbWVzc2FnZS50b1N0cmluZygndXRmOCcpO1xuXHRcdHZhciBhaXJQbGFuZSAgICAgICAgICAgID0gbmV3IG1vZGVsLkFpclBsYW5lKGlwKTtcblxuXHRcdGxvZ2dlci5pbmZvKFwiTWVzc2FnZSByZWNlaXZlZDogJXNcIiwgbXNncyk7XG5cblx0ICAgXHRtc2dzLnNwbGl0KFwiO1wiKS5tYXAoIG1zZyA9PiB7XG5cblx0ICAgXHRcdHZhciBhcnIgICA9IG1zZy5zcGxpdChcIj1cIik7XG5cdCAgIFx0XHR2YXIgbGFiZWwgPSBhcnJbMF07XG5cdCAgIFx0XHR2YXIgdmFsdWUgPSBhcnJbMV07XG5cblx0ICAgXHRcdHN3aXRjaChsYWJlbCkge1xuXHQgICBcdFx0XHQgY2FzZSBDb25zdGFudHMuREVTVElOQVRJT046IHtcblx0ICAgXHRcdFx0XHRhaXJQbGFuZS5zZXREZXN0aW5hdGlvbih2YWx1ZSlcblx0ICAgXHRcdFx0XHRicmVhaztcblx0ICAgXHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdBTUVfUEFVU0VEOiB7XG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldFBhdXNlKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5CQVJPTUVURVI6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0QmFyb21ldGVyKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT01QQVNTX0hFQURJTkc6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tcGFzc0hlYWRpbmcodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRlJFUVVFTkNZOiB7XG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldE5hdjFGcmVxKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0ZSRVFVRU5DWToge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXROYXYyRnJlcSh2YWx1ZSlcblx0XHRcdFx0ICAgIGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQUlSU1BFRUQ6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0QWlyU3BlZWQodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFMVElUVURFOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuRlVFTF9RVUFOVElUWToge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRGdWVsUXVhbnRpdHkodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFQVV9SVU5OSU5HOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NMV9GUkVRVUVOQ1k6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0Q29tMUZyZXEodmFsdWUpXG5cdFx0XHRcdCAgICBicmVhaztcblx0XHRcdFx0IH1cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTJfRlJFUVVFTkNZOiB7XG5cdFx0XHRcdCBcdGFpclBsYW5lLnNldENvbTJGcmVxKHZhbHVlKVxuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00xX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTJfRlJFUVVFTkNZX1NUREJZOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX01FVEVSUzoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdQU19ESVNUQU5DRV9TRUNPTkRTOiB7XG5cdFx0XHRcdCBcdC8qXG5cdFx0XHRcdCBcdGZsb2F0IGRpc3RhbmNlTWludXRlcyA9IDA7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGRpc3RhbmNlTWludXRlcyA9IEZsb2F0LnBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKE51bWJlckZvcm1hdEV4Y2VwdGlvbiBlKSB7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlTWludXRlcyA+IDApIHtcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VNaW51dGVzID0gKGludCkgZGlzdGFuY2VNaW51dGVzO1xuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZVNlY29uZHMgPSAoaW50KSAoKGRpc3RhbmNlTWludXRlcyAtIGlEaXN0YW5jZU1pbnV0ZXMpICogNjApO1xuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZUhvdXJzID0gKGludCkgKGRpc3RhbmNlTWludXRlcyAvIDYwKTtcblx0XHRcdFx0XHRcdFN0cmluZyByZXN1bHQgPSBkZi5mb3JtYXQoaURpc3RhbmNlSG91cnMpICsgXCI6XCIgKyBkZi5mb3JtYXQoaURpc3RhbmNlTWludXRlcykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VTZWNvbmRzKTtcblx0XHRcdFx0XHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lLnB1dChpcC50b1N0cmluZygpLCByZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgXCIwXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0IFx0Ki9cblx0XHRcdFx0ICAgIGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0RJU1RBTkNFX01JTlVURVM6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0RJU1RBTkNFX05BVVRJQ0FMUzoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk9VVFNJREVfVEVNUEVSQVRVUkVfQ0VMU0lVUzoge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRPdXRzaWRlVGVtcGVyYXR1cmUodmFsdWUpO1xuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5WRVJUSUNBTF9TUEVFRDoge1xuXHRcdFx0XHQgXHRhaXJQbGFuZS5zZXRWU3BlZWQodmFsdWUpO1xuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HUk9VTkRfU1BFRUQ6IHtcblx0XHRcdFx0IFx0YWlyUGxhbmUuc2V0R3JvdW5kU3BlZWQodmFsdWUpO1xuXHRcdFx0XHQgICAgYnJlYWs7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5UUlVFX0FJUlNQRUVEOiB7YnJlYWs7fVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTEFUSVRVREU6IHtcblx0XHRcdFx0XHQgaWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xuXHRcdFx0XHRcdFx0IGFpclBsYW5lLnNldExhdEFudGVyaW9yTWFwKHBsYW5lc0xpc3QuZ2V0QWlyUGxhbmUoaXApLmdldExhdE1hcCgpKTtcblx0XHRcdFx0XHQgfSBlbHNlIHtcblx0XHRcdFx0XHRcdGFpclBsYW5lLnNldExhdEFudGVyaW9yTWFwKDApO1xuXHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0IGFpclBsYW5lLnNldExhdE1hcCh2YWx1ZSk7XG5cdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTE9OR0lUVURFOiB7XG5cdFx0XHRcdFx0aWYgKCBpcCBpbiBwbGFuZXNMaXN0LmdldEFsbEFpclBsYW5lcygpICkge1xuXHRcdFx0XHRcdFx0YWlyUGxhbmUuc2V0TG9uQW50ZXJpb3JNYXAocGxhbmVzTGlzdC5nZXRBaXJQbGFuZShpcCkuZ2V0TG9uTWFwKCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhaXJQbGFuZS5zZXRMb25BbnRlcmlvck1hcCgwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWlyUGxhbmUuc2V0TG9uTWFwKHZhbHVlKTtcblx0XHRcdFx0XHRhaXJQbGFuZS5jYWxjdWxhdGVCZWFyaW5nKHBhcnNlRmxvYXQoYWlyUGxhbmUuZ2V0TGF0TWFwKCkpLCBwYXJzZUZsb2F0KHZhbHVlKSk7XG5cdFx0XHRcdCBcdGJyZWFrO1xuXHRcdFx0XHQgfVxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuV0VJR0hUX1RPVEFMX0ZVRUw6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfTU9ERToge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9BTFRJVFVERToge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRDoge2JyZWFrO31cblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9BSVJQU1BFRUQ6IHticmVhazt9XG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfSEVBRElORzoge2JyZWFrO31cblx0ICAgXHRcdFx0IGRlZmF1bHQ6XG5cdCAgIFx0XHRcdFx0YnJlYWs7XHRcblx0XHRcdCAgIH1cblx0XHRcdCAgIFxuXHQgICBcdFx0ICAgbG9nZ2VyLmRlYnVnKFwiTWVzc2FnZS4uLjogJXMgLSAlc1wiLGxhYmVsLHZhbHVlKTtcblx0XHR9KTtcblx0XHQgICBcblx0XHRwbGFuZXNMaXN0LmFkZEFpclBsYW5lKGFpclBsYW5lLmdldElwKCksYWlyUGxhbmUpO1xuXHRcdGV2ZW50RW1pdHRlci5lbWl0KCdyZWNlaXZlZE1lc3NhZ2UnLCBwbGFuZXNMaXN0KTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuXHRcdGxvZ2dlci5lcnJvcihuZXcgRXJyb3IoZXJyLnRvU3RyaW5nKCkpKTtcbiAgIFx0XHR0aHJvdyBlcnI7XG4gICAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91ZHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9qcy91dGlscy91dGlscy5qcyc7XG5pbXBvcnQgJy4vanMvbW9kZWwvaW5kZXguanMnO1xuaW1wb3J0ICcuL2pzL21vZGVsL0NvbnN0YW50cy5qcyc7XG5pbXBvcnQgJy4vanMvbW9kZWwvQWlyUGxhbmUuanMnO1xuaW1wb3J0ICcuL2pzL3V0aWxzL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vanMvaHR0cC1zZXJ2ZXIuanMnO1xuaW1wb3J0ICcuL2pzL3VkcC1zZXJ2ZXIuanMnO1xuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtYmFjay5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cbmZ1bmN0aW9uIFBsYW5lc0xpc3QoKSB7XG5cdHRoaXMuYWlyUGxhbmVzID0ge307XG59O1xuXG5QbGFuZXNMaXN0LnByb3RvdHlwZSA9IHtcblx0Z2V0QWlyUGxhbmU6IGZ1bmN0aW9uKGlwKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWlyUGxhbmVzW2lwXTtcblx0fSxcblx0YWRkQWlyUGxhbmU6IGZ1bmN0aW9uKGlwLCBfYWlyUGxhbmUpIHtcblx0XHR0aGlzLmFpclBsYW5lc1tpcF0gPSBfYWlyUGxhbmU7XG5cdH0sXG5cdGdldEFsbEFpclBsYW5lczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWlyUGxhbmVzO1xuXHR9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGxhbmVzTGlzdDtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvUGxhbmVzTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGdyYW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZ3JhbVwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdXRpbHMgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcbmNvbnN0IGxvZ2dlciAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2xvZ2dlci5qcycpKG1vZHVsZSk7XG5jb25zdCBtb2RlbCAgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xuY29uc3QgdWRwU2VydmVyICA9IHJlcXVpcmUoJy4vdWRwLXNlcnZlci5qcycpO1xuY29uc3QgaHR0cFNlcnZlciA9IHJlcXVpcmUoJy4vaHR0cC1zZXJ2ZXIuanMnKTtcblxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xuXG5sb2dnZXIuaW5mbygnU3RhcnQgeC1uYXZpZ2F0Li4uJyk7XG5cbnVkcFNlcnZlci5ldmVudEVtaXR0ZXIub24oJ3JlY2VpdmVkTWVzc2FnZScsIChfcGxhbmVzTGlzdCkgPT4ge1xuICAgIHBsYW5lc0xpc3QgPSBfcGxhbmVzTGlzdDtcbiAgICBodHRwU2VydmVyLnJlY2VpdmVVcGRhdGUocGxhbmVzTGlzdCk7XG5cbiAgICBsb2dnZXIuZGVidWcoXCJfcGxhbmVzTGlzdC4uLjogJXNcIixwbGFuZXNMaXN0KTtcbn0pO1xuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==