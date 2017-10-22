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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports.PlanesList = __webpack_require__(4);
exports.Constants  = __webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const winston = __webpack_require__(21);
const moment  = __webpack_require__(22);
const S       = __webpack_require__(23);

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
/***/ (function(module, exports) {

// Author Ualter Jr.

// Class Constructor and Attributes
function PlanesList() {
	this.latMap				= {};
	this.lonMap				= {};
	this.latAnteriorMap		= {};
	this.lonAnteriorMap		= {};
	this.altMap				= {};
	this.airSpeed			= {};
	this.vSpeed				= {};
	this.groundSpeed		= {};
	this.bearing			= {};
	this.destination		= {};
	this.gpsDistanceNm		= {};
	this.gpsDistanceTime	= {};
	this.barometer			= {};
	this.fuelQuantity		= {};
	this.nav1Freq			= {};
	this.nav2Freq			= {};
	this.pause				= {};
	this.compassHeading		= {};
	this.outsideTemperature	= {};
	this.com1Freq			= {};
	this.com2Freq			= {};
};

// Class Functions
PlanesList.prototype = {
	getLatMap: function(ip) {
		return this.latMap[ip];
	},
	setLatMap: function(ip, vlr) {
		this.latMap[ip] = vlr;
	},
	getLonMap: function(ip) {
		return this.lonMap[ip];
	},
	setLonMap: function(ip, vlr) {
		this.lonMap[ip] = vlr;
	},
	getLatAnteriorMap: function(ip) {
		return this.latAnteriorMap[ip];
	},
	setLatAnteriorMap: function(ip, vlr) {
		this.latAnteriorMap[ip] = vlr;
	},
	getLonAnteriorMap: function(ip) {
		return this.lonAnteriorMap[ip];
	},
	setLonAnteriorMap: function(ip, vlr) {
		this.lonAnteriorMap[ip] = vlr;
	},
	getAltMap: function(ip) {
		return this.altMap[ip];
	},
	setAltMap: function(ip, vlr) {
		this.altMap[ip] = vlr;
	},
	getAirSpeed: function(ip) {
		return this.airSpeed[ip];
	},
	setAirSpeed: function(ip, vlr) {
		this.airSpeed[ip] = vlr;
	},
	getVSpeed: function(ip) {
		return this.vSpeed[ip];
	},
	setVSpeed: function(ip, vlr) {
		this.vSpeed[ip] = vlr;
	},
	getGroundSpeed: function(ip) {
		return this.groundSpeed[ip];
	},
	setGroundSpeed: function(ip, vlr) {
		this.groundSpeed[ip] = vlr;
	},
	getBearing: function(ip) {
		return this.bearing[ip];
	},
	setBearing: function(ip, vlr) {
		this.bearing[ip] = vlr;
	},
	getDestination: function(ip) {
		return this.destination[ip];
	},
	setDestination: function(ip, vlr) {
		this.destination[ip] = vlr;
	},
	getGpsDistanceNm: function(ip) {
		return this.gpsDistanceNm[ip];
	},
	setGpsDistanceNm: function(ip, vlr) {
		this.gpsDistanceNm[ip] = vlr;
	},
	getGpsDistanceTime: function(ip) {
		return this.gpsDistanceTime[ip];
	},
	setGpsDistanceTime: function(ip, vlr) {
		this.gpsDistanceTime[ip] = vlr;
	},
	getBarometer: function(ip) {
		return this.barometer[ip];
	},
	setBarometer: function(ip, vlr) {
		this.barometer[ip] = vlr;
	},
	getFuelQuantity: function(ip) {
		return this.fuelQuantity[ip];
	},
	setFuelQuantity: function(ip, vlr) {
		this.fuelQuantity[ip] = vlr;
	},
	getNav1Freq: function(ip) {
		return this.nav1Freq[ip];
	},
	setNav1Freq: function(ip, vlr) {
		this.nav1Freq[ip] = vlr;
	},
	getNav2Freq: function(ip) {
		return this.nav2Freq[ip];
	},
	setNav2Freq: function(ip, vlr) {
		this.nav2Freq[ip] = vlr;
	},
	getPause: function(ip) {
		return this.pause[ip];
	},
	setPause: function(ip, vlr) {
		this.pause[ip] = vlr;
	},
	getCompassHeading: function(ip) {
		return this.compassHeading[ip];
	},
	setCompassHeading: function(ip, vlr) {
		this.compassHeading[ip] = vlr;
	},
	getOutsideTemperature: function(ip) {
		return this.outsideTemperature[ip];
	},
	setOutsideTemperature: function(ip, vlr) {
		this.outsideTemperature[ip] = vlr;
	},
	getCom1Freq: function(ip) {
		return this.com1Freq[ip];
	},
	setCom1Freq: function(ip, vlr) {
		this.com1Freq[ip] = vlr;
	},
	getCom2Freq: function(ip) {
		return this.com2Freq[ip];
	},
	setCom2Freq: function(ip, vlr) {
		this.com2Freq[ip] = vlr;
	}
};

module.exports = PlanesList;



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
const http      = __webpack_require__(24);
const express   = __webpack_require__(25);
const ip        = __webpack_require__(7);
const path      = __webpack_require__(26);
const appRoot   = __webpack_require__(27);
 
const PORT      = 8000;
const HOST      = ip.address(); //'192.168.0.22';
const pathFiles = appRoot.path + "\\dist";
const app       = express();

var planesList = new model.PlanesList();

app.use( (err, request, response, next) => {
  logger.error(err);
  response.status(500).send('Something broke!')
})

app.get("/hello", (request, response) => {
    response.end('Hello!');
})

app.get("/", (request, response) => {
    response.sendFile(pathFiles + "\\index.html");
})

app.get("/front.bundle.js", (request, response) => {
    response.sendFile(pathFiles + "\\front.bundle.js");
})

app.get("/data", (request, response) => {
    response.type('json');
    // Non Pretty-Print
    //response.send( planesList );
    // Pretty-Print
    response.send(JSON.stringify(planesList, null, 4));
    
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
const dgram        = __webpack_require__(28);
const EventEmitter = __webpack_require__(29);
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
	logger.info('UDP Server listening on ' + address.address + ":" + address.port);
}

class MyEmitter extends EventEmitter {}
const eventEmitter = new MyEmitter();
exports.eventEmitter = eventEmitter;

const Constants = new model.Constants();

function receiveMessage(message, remote) {
	try {
		
		var planesList = new model.PlanesList();
		var ip         = remote.address;
		var msgs       = message.toString('utf8');

		logger.info("Message received: %s",msgs);

	   	msgs.split(";").map( msg => {

	   		var arr   = msg.split("=");
	   		var label = arr[0];
	   		var value = arr[1];

	   		switch(label) {
	   			 case Constants.DESTINATION: {
	   				planesList.setDestination(ip,value)
	   				break;
	   			 }
				 case Constants.GAME_PAUSED: {
				 	planesList.setPause(ip,value)
				    break;
				 }
				 case Constants.BAROMETER: {
				 	planesList.setBarometer(ip,value)
				    break;
				 }
				 case Constants.COMPASS_HEADING: {
				 	planesList.setCompassHeading(ip,value)
				    break;
				 }
				 case Constants.NAV1_FREQUENCY: {
				 	planesList.setNav1Freq(ip,value)
				    break;
				 }
				 case Constants.NAV2_FREQUENCY: {
				 	planesList.setNav2Freq(ip,value)
				    break;
				 }
				 case Constants.AIRSPEED: {
				 	planesList.setAirSpeed(ip,value)
				    break;
				 }
				 case Constants.ALTITUDE: {break;}
				 case Constants.FUEL_QUANTITY: {
				 	planesList.setFuelQuantity(ip,value)
				    break;
				 }
				 case Constants.APU_RUNNING: {break;}
				 case Constants.COM1_FREQUENCY: {
				 	planesList.setCom1Freq(ip,value)
				    break;
				 }
				 case Constants.COM2_FREQUENCY: {
				 	planesList.setCom2Freq(ip,value)
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
				 	planesList.setOutsideTemperature(ip,value);
				    break;
				 }
				 case Constants.VERTICAL_SPEED: {
				 	planesList.setVSpeed(ip,value);
				    break;
				 }
				 case Constants.GROUND_SPEED: {
				 	planesList.setGroundSpeed(ip,value);
				    break;
				 }
				 case Constants.TRUE_AIRSPEED: {break;}
				 case Constants.LATITUDE: {break;}
				 case Constants.LONGITUDE: {
				 	/*
				 	this.latMap.put(ip.toString(), new Float(latitude));
					this.lonMap.put(ip.toString(), new Float(longitude));

					float lat1 = this.getLatAnteriorMap().containsKey(ip.toString()) ? this.getLatAnteriorMap().get(ip.toString()) : 0;
					float lon1 = this.getLonAnteriorMap().containsKey(ip.toString()) ? this.getLonAnteriorMap().get(ip.toString()) : 0;
					this.calculateBearing(ip, lat1, lon1, new Float(latitude), new Float(longitude));

					this.latAnteriorMap.put(ip.toString(), new Float(latitude));
					this.lonAnteriorMap.put(ip.toString(), new Float(longitude));
				 	*/
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
		   
		eventEmitter.emit('receivedMessage', planesList);

    } catch (err) {
   		logger.error(new Error(err.toString()).stack);
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_utils_utils_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_model_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_model_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_model_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_model_Constants_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_model_PlanesList_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_model_PlanesList_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_model_PlanesList_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_utils_logger_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_http_server_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_http_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__js_http_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__js_app_js__);









/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("string");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("app-root-path");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils      = __webpack_require__(0);
const logger     = __webpack_require__(2)(module);
const model      = __webpack_require__(1);
const udpServer  = __webpack_require__(8);
const httpServer = __webpack_require__(6);

var planesList = new model.PlanesList();

logger.info('Start x-navigat...');

udpServer.eventEmitter.on('receivedMessage', (_planesList) => {
    planesList            = _planesList;
    httpServer.receiveUpdate(planesList);

    logger.debug("_planesList...: %s",_planesList);
});



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWIxMTU2OTJmMGFiNjgwZGI2YzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL1BsYW5lc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXBcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdWRwLXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtYmFjay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRncmFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNSQTtBQUNBLDRDOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGVBQWUsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLGFBQWE7QUFDMUUsQ0FBQzs7QUFFRDtBQUNBLFlBQVksZUFBZSxJQUFJLFdBQVcsSUFBSSxXQUFXLElBQUksYUFBYTtBQUMxRSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzdKQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzFEQSwrQjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDLCtDQUErQztBQUMvQywwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDO0FBQ0EsYztBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQSxvQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoiYmFjay5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWIxMTU2OTJmMGFiNjgwZGI2YzQiLCJ2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge307XHJcblxyXG5leHBvcnRzLmZhYm9uYWNjaSA9IGZ1bmN0aW9uIChudW0xLG51bTIpIHtcclxuICAgIHJldHVybiBudW0xK251bTI7XHJcbn07XHJcblxyXG5leHBvcnRzLnNheUhlbGxvSW5TcGFuaXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIFwiSG9sYVwiO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuUGxhbmVzTGlzdCA9IHJlcXVpcmUoXCIuL1BsYW5lc0xpc3QuanNcIik7XHJcbmV4cG9ydHMuQ29uc3RhbnRzICA9IHJlcXVpcmUoXCIuL0NvbnN0YW50cy5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB3aW5zdG9uID0gcmVxdWlyZSgnd2luc3RvbicpO1xyXG5jb25zdCBtb21lbnQgID0gcmVxdWlyZSgnbW9tZW50Jyk7XHJcbmNvbnN0IFMgICAgICAgPSByZXF1aXJlKCdzdHJpbmcnKTtcclxuXHJcbmNvbnN0IG15Q29uc29sZUZvcm1hdCA9IHdpbnN0b24uZm9ybWF0LnByaW50ZihpbmZvID0+IHtcclxuICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9IFske2luZm8ubGFiZWx9XSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gO1xyXG59KTtcclxuXHJcbmNvbnN0IG15SnNvbkZvcm1hdCA9IHdpbnN0b24uZm9ybWF0Lmpzb24oaW5mbyA9PiB7XHJcbiAgcmV0dXJuIGAke2luZm8udGltZXN0YW1wfSBbJHtpbmZvLmxhYmVsfV0gJHtpbmZvLmxldmVsfTogJHtpbmZvLm1lc3NhZ2V9YDtcclxufSk7XHJcblxyXG52YXIgZ2V0TGFiZWwgPSBmdW5jdGlvbihjYWxsaW5nTW9kdWxlKSB7XHJcbiAgICBpZiAoIGNhbGxpbmdNb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgdmFyIHBhcnRzID0gY2FsbGluZ01vZHVsZS5maWxlbmFtZS5zcGxpdCgnXFxcXCcpO1xyXG4gICAgICB2YXIgbGJsICAgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSArICcvJyArIHBhcnRzLnBvcCgpO1xyXG4gICAgICByZXR1cm4gUyhsYmwpLnBhZFJpZ2h0KDIyLCctJykgKyAnPic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ2J1bmRsZWQnO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYWxsaW5nTW9kdWxlKSB7XHJcbiAgXHJcbiAgdmFyIGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcclxuICAgIHRyYW5zcG9ydHM6IFtcclxuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5GaWxlKHsgXHJcbiAgICAgICAgbGV2ZWw6ICdlcnJvcicsXHJcbiAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3MvZXJyb3IubG9nJywgXHJcbiAgICAgICAgbWF4c2l6ZTogNTI0Mjg4MCwgLy81TUJcclxuICAgICAgICBtYXhGaWxlczogNSxcclxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByZXR0eVByaW50KCksXHJcbiAgICAgICAgICAgbXlKc29uRm9ybWF0XHJcbiAgICAgICAgKVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5GaWxlICh7XHJcbiAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3MvdHJhY2UubG9nJyxcclxuICAgICAgICBtYXhzaXplOiA1MjQyODgwLCAvLzVNQlxyXG4gICAgICAgIG1heEZpbGVzOiA1LCBcclxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByZXR0eVByaW50KCksXHJcbiAgICAgICAgICAgbXlKc29uRm9ybWF0XHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgXVxyXG4gIH0pO1xyXG5cclxuICBpZiAoIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgKSB7XHJcbiAgICBsb2dnZXIuYWRkKFxyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xyXG4gICAgICAgIGxldmVsOiAnZGVidWcnLFxyXG4gICAgICAgIGpzb246IGZhbHNlLFxyXG4gICAgICAgIGNvbG9yaXplOiB0cnVlLFxyXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxyXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQubGFiZWwoIHsgbGFiZWw6IGdldExhYmVsKGNhbGxpbmdNb2R1bGUpIH0pLFxyXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICBteUNvbnNvbGVGb3JtYXRcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxvZ2dlcjtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy9sb2dnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXHJcblxyXG4vLyBDbGFzcyBDb25zdHJ1Y3RvciBhbmQgQXR0cmlidXRlc1xyXG5mdW5jdGlvbiBQbGFuZXNMaXN0KCkge1xyXG5cdHRoaXMubGF0TWFwXHRcdFx0XHQ9IHt9O1xyXG5cdHRoaXMubG9uTWFwXHRcdFx0XHQ9IHt9O1xyXG5cdHRoaXMubGF0QW50ZXJpb3JNYXBcdFx0PSB7fTtcclxuXHR0aGlzLmxvbkFudGVyaW9yTWFwXHRcdD0ge307XHJcblx0dGhpcy5hbHRNYXBcdFx0XHRcdD0ge307XHJcblx0dGhpcy5haXJTcGVlZFx0XHRcdD0ge307XHJcblx0dGhpcy52U3BlZWRcdFx0XHRcdD0ge307XHJcblx0dGhpcy5ncm91bmRTcGVlZFx0XHQ9IHt9O1xyXG5cdHRoaXMuYmVhcmluZ1x0XHRcdD0ge307XHJcblx0dGhpcy5kZXN0aW5hdGlvblx0XHQ9IHt9O1xyXG5cdHRoaXMuZ3BzRGlzdGFuY2VObVx0XHQ9IHt9O1xyXG5cdHRoaXMuZ3BzRGlzdGFuY2VUaW1lXHQ9IHt9O1xyXG5cdHRoaXMuYmFyb21ldGVyXHRcdFx0PSB7fTtcclxuXHR0aGlzLmZ1ZWxRdWFudGl0eVx0XHQ9IHt9O1xyXG5cdHRoaXMubmF2MUZyZXFcdFx0XHQ9IHt9O1xyXG5cdHRoaXMubmF2MkZyZXFcdFx0XHQ9IHt9O1xyXG5cdHRoaXMucGF1c2VcdFx0XHRcdD0ge307XHJcblx0dGhpcy5jb21wYXNzSGVhZGluZ1x0XHQ9IHt9O1xyXG5cdHRoaXMub3V0c2lkZVRlbXBlcmF0dXJlXHQ9IHt9O1xyXG5cdHRoaXMuY29tMUZyZXFcdFx0XHQ9IHt9O1xyXG5cdHRoaXMuY29tMkZyZXFcdFx0XHQ9IHt9O1xyXG59O1xyXG5cclxuLy8gQ2xhc3MgRnVuY3Rpb25zXHJcblBsYW5lc0xpc3QucHJvdG90eXBlID0ge1xyXG5cdGdldExhdE1hcDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmxhdE1hcFtpcF07XHJcblx0fSxcclxuXHRzZXRMYXRNYXA6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMubGF0TWFwW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldExvbk1hcDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmxvbk1hcFtpcF07XHJcblx0fSxcclxuXHRzZXRMb25NYXA6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMubG9uTWFwW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldExhdEFudGVyaW9yTWFwOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGF0QW50ZXJpb3JNYXBbaXBdO1xyXG5cdH0sXHJcblx0c2V0TGF0QW50ZXJpb3JNYXA6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMubGF0QW50ZXJpb3JNYXBbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TG9uQW50ZXJpb3JNYXA6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb25BbnRlcmlvck1hcFtpcF07XHJcblx0fSxcclxuXHRzZXRMb25BbnRlcmlvck1hcDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5sb25BbnRlcmlvck1hcFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRBbHRNYXA6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hbHRNYXBbaXBdO1xyXG5cdH0sXHJcblx0c2V0QWx0TWFwOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmFsdE1hcFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRBaXJTcGVlZDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmFpclNwZWVkW2lwXTtcclxuXHR9LFxyXG5cdHNldEFpclNwZWVkOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmFpclNwZWVkW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldFZTcGVlZDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLnZTcGVlZFtpcF07XHJcblx0fSxcclxuXHRzZXRWU3BlZWQ6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMudlNwZWVkW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEdyb3VuZFNwZWVkOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3JvdW5kU3BlZWRbaXBdO1xyXG5cdH0sXHJcblx0c2V0R3JvdW5kU3BlZWQ6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuZ3JvdW5kU3BlZWRbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QmVhcmluZzogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmJlYXJpbmdbaXBdO1xyXG5cdH0sXHJcblx0c2V0QmVhcmluZzogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5iZWFyaW5nW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldERlc3RpbmF0aW9uOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGVzdGluYXRpb25baXBdO1xyXG5cdH0sXHJcblx0c2V0RGVzdGluYXRpb246IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuZGVzdGluYXRpb25baXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0R3BzRGlzdGFuY2VObTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmdwc0Rpc3RhbmNlTm1baXBdO1xyXG5cdH0sXHJcblx0c2V0R3BzRGlzdGFuY2VObTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5ncHNEaXN0YW5jZU5tW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEdwc0Rpc3RhbmNlVGltZTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmdwc0Rpc3RhbmNlVGltZVtpcF07XHJcblx0fSxcclxuXHRzZXRHcHNEaXN0YW5jZVRpbWU6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEJhcm9tZXRlcjogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmJhcm9tZXRlcltpcF07XHJcblx0fSxcclxuXHRzZXRCYXJvbWV0ZXI6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuYmFyb21ldGVyW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEZ1ZWxRdWFudGl0eTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmZ1ZWxRdWFudGl0eVtpcF07XHJcblx0fSxcclxuXHRzZXRGdWVsUXVhbnRpdHk6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuZnVlbFF1YW50aXR5W2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldE5hdjFGcmVxOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2MUZyZXFbaXBdO1xyXG5cdH0sXHJcblx0c2V0TmF2MUZyZXE6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMubmF2MUZyZXFbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TmF2MkZyZXE6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXYyRnJlcVtpcF07XHJcblx0fSxcclxuXHRzZXROYXYyRnJlcTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5uYXYyRnJlcVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRQYXVzZTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLnBhdXNlW2lwXTtcclxuXHR9LFxyXG5cdHNldFBhdXNlOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLnBhdXNlW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldENvbXBhc3NIZWFkaW5nOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcGFzc0hlYWRpbmdbaXBdO1xyXG5cdH0sXHJcblx0c2V0Q29tcGFzc0hlYWRpbmc6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuY29tcGFzc0hlYWRpbmdbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0T3V0c2lkZVRlbXBlcmF0dXJlOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3V0c2lkZVRlbXBlcmF0dXJlW2lwXTtcclxuXHR9LFxyXG5cdHNldE91dHNpZGVUZW1wZXJhdHVyZTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5vdXRzaWRlVGVtcGVyYXR1cmVbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0Q29tMUZyZXE6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb20xRnJlcVtpcF07XHJcblx0fSxcclxuXHRzZXRDb20xRnJlcTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5jb20xRnJlcVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRDb20yRnJlcTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbTJGcmVxW2lwXTtcclxuXHR9LFxyXG5cdHNldENvbTJGcmVxOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmNvbTJGcmVxW2lwXSA9IHZscjtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYW5lc0xpc3Q7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9QbGFuZXNMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEF1dGhvciBVYWx0ZXIgSnIuXHJcblxyXG5mdW5jdGlvbiBDb25zdGFudHMoKSB7XHJcbn07XHJcblxyXG5Db25zdGFudHMucHJvdG90eXBlLkRFU1RJTkFUSU9OXHRcdFx0XHRcdD0gXCJkZXN0aW5hdGlvblwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdBTUVfUEFVU0VEXHRcdFx0XHRcdD0gXCJnYW1lUGF1c2VkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQkFST01FVEVSXHRcdFx0XHRcdD0gXCJiYXJvbWV0ZXJcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT01QQVNTX0hFQURJTkdcdFx0XHRcdD0gXCJjb21wYXNzSGVhZGluZ1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjFfRlJFUVVFTkNZXHRcdFx0XHQ9IFwibmF2MUZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRlJFUVVFTkNZXHRcdFx0XHQ9IFwibmF2MkZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFJUlNQRUVEXHRcdFx0XHRcdD0gXCJhaXJzcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFMVElUVURFXHRcdFx0XHRcdD0gXCJhbHRpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkZVRUxfUVVBTlRJVFlcdFx0XHRcdD0gXCJmdWVscXVhbnRpdHlcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BUFVfUlVOTklOR1x0XHRcdFx0XHQ9IFwiYXB1cnVubmluZ1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTFfRlJFUVVFTkNZXHRcdFx0XHQ9IFwiY29tMUZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTJfRlJFUVVFTkNZXHRcdFx0XHQ9IFwiY29tMkZyZXFIelwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTFfRlJFUVVFTkNZX1NUREJZXHRcdD0gXCJjb20xRnJlcUh6U3RkYnlcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00yX0ZSRVFVRU5DWV9TVERCWVx0XHQ9IFwiY29tMkZyZXFIelN0ZGJ5XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR1BTX0RJU1RBTkNFX01FVEVSU1x0XHRcdD0gXCJncHNETUVEaXN0TVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdQU19ESVNUQU5DRV9TRUNPTkRTXHRcdD0gXCJncHNETUVUaW1lU2Vjc1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjFfRElTVEFOQ0VfTkFVVElDQUxTXHRcdD0gXCJuYXYxRE1FRGlzdE5tXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9ESVNUQU5DRV9NSU5VVEVTXHRcdD0gXCJuYXYxRE1FRGlzdE1pblwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRElTVEFOQ0VfTkFVVElDQUxTXHRcdD0gXCJuYXYyRE1FRGlzdE5tXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMl9ESVNUQU5DRV9NSU5VVEVTXHRcdD0gXCJuYXYyRE1FRGlzdE1pblwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk9VVFNJREVfVEVNUEVSQVRVUkVfQ0VMU0lVU1x0PSBcIm91dHNpZGVUZW1wQ1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLlZFUlRJQ0FMX1NQRUVEXHRcdFx0XHQ9IFwidnNGcG1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HUk9VTkRfU1BFRURcdFx0XHRcdD0gXCJncm91bmRzcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLlRSVUVfQUlSU1BFRURcdFx0XHRcdD0gXCJ0cnVlX2FpcnNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTEFUSVRVREVcdFx0XHRcdFx0PSBcImxhdGl0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTE9OR0lUVURFXHRcdFx0XHRcdD0gXCJsb25naXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5XRUlHSFRfVE9UQUxfRlVFTFx0XHRcdD0gXCJ3ZWlnaHRUb3RhbEZ1ZWxcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfTU9ERVx0XHRcdFx0PSBcImF1dG9waWxvdE1vZGVcIjtcdFx0Ly8gKG9mZj0wLGZsaWdodCBkaXJlY3Rvcj0xLCBvbj0yKVxyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9BTFRJVFVERVx0XHRcdD0gXCJhdXRvcGlsb3RBbHRpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRFx0PSBcImF1dG9waWxvdFZTXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0FJUlBTUEVFRFx0XHRcdD0gXCJhdXRvcGlsb3RBaXJTcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9IRUFESU5HXHRcdFx0PSBcImF1dG9waWxvdEhlYWRpbmdcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uc3RhbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XHJcbmNvbnN0IGxvZ2dlciAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xyXG5jb25zdCBodHRwICAgICAgPSByZXF1aXJlKCdodHRwJyk7XHJcbmNvbnN0IGV4cHJlc3MgICA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgaXAgICAgICAgID0gcmVxdWlyZShcImlwXCIpO1xyXG5jb25zdCBwYXRoICAgICAgPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IGFwcFJvb3QgICA9IHJlcXVpcmUoJ2FwcC1yb290LXBhdGgnKTtcclxuIFxyXG5jb25zdCBQT1JUICAgICAgPSA4MDAwO1xyXG5jb25zdCBIT1NUICAgICAgPSBpcC5hZGRyZXNzKCk7IC8vJzE5Mi4xNjguMC4yMic7XHJcbmNvbnN0IHBhdGhGaWxlcyA9IGFwcFJvb3QucGF0aCArIFwiXFxcXGRpc3RcIjtcclxuY29uc3QgYXBwICAgICAgID0gZXhwcmVzcygpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxuYXBwLnVzZSggKGVyciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcclxuICBsb2dnZXIuZXJyb3IoZXJyKTtcclxuICByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKCdTb21ldGhpbmcgYnJva2UhJylcclxufSlcclxuXHJcbmFwcC5nZXQoXCIvaGVsbG9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5lbmQoJ0hlbGxvIScpO1xyXG59KVxyXG5cclxuYXBwLmdldChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxpbmRleC5odG1sXCIpO1xyXG59KVxyXG5cclxuYXBwLmdldChcIi9mcm9udC5idW5kbGUuanNcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5zZW5kRmlsZShwYXRoRmlsZXMgKyBcIlxcXFxmcm9udC5idW5kbGUuanNcIik7XHJcbn0pXHJcblxyXG5hcHAuZ2V0KFwiL2RhdGFcIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS50eXBlKCdqc29uJyk7XHJcbiAgICAvLyBOb24gUHJldHR5LVByaW50XHJcbiAgICAvL3Jlc3BvbnNlLnNlbmQoIHBsYW5lc0xpc3QgKTtcclxuICAgIC8vIFByZXR0eS1QcmludFxyXG4gICAgcmVzcG9uc2Uuc2VuZChKU09OLnN0cmluZ2lmeShwbGFuZXNMaXN0LCBudWxsLCA0KSk7XHJcbiAgICBcclxufSlcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKGVycikgPT4ge1xyXG5cclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3IobmV3IEVycm9yKGVyci50b1N0cmluZygpKS5zdGFjayk7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlci5pbmZvKCdIVFRQIFNlcnZlciBsaXN0ZW5pbmcgb24gJyArIEhPU1QgKyBcIjpcIiArIFBPUlQpO1xyXG59KVxyXG5cclxudmFyIHJlY2VpdmVVcGRhdGUgPSBmdW5jdGlvbiAoX3BsYW5lc0xpc3QpIHtcclxuICAgIHBsYW5lc0xpc3QgPSBfcGxhbmVzTGlzdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICByZWNlaXZlVXBkYXRlOiByZWNlaXZlVXBkYXRlXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpcFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9sb2dnZXIuanMnKShtb2R1bGUpO1xyXG5jb25zdCBtb2RlbCAgICAgICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XHJcbmNvbnN0IGRncmFtICAgICAgICA9IHJlcXVpcmUoJ2RncmFtJyk7XHJcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xyXG5jb25zdCBpcCAgICAgICAgICAgPSByZXF1aXJlKFwiaXBcIik7XHJcblxyXG5jb25zdCBQT1JUICAgPSA4ODgxO1xyXG5jb25zdCBIT1NUICAgPSBpcC5hZGRyZXNzKCk7XHJcbi8vJzE5Mi4xNjguMC4yMic7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBkZ3JhbS5jcmVhdGVTb2NrZXQoJ3VkcDQnKTtcclxuXHJcbnNlcnZlci5vbignbGlzdGVuaW5nJywgc3RhcnRTZXJ2ZXIpO1xyXG5zZXJ2ZXIub24oJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSk7XHJcbnNlcnZlci5iaW5kKFBPUlQsIEhPU1QpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoKSB7XHJcblx0dmFyIGFkZHJlc3MgPSBzZXJ2ZXIuYWRkcmVzcygpO1xyXG5cdGxvZ2dlci5pbmZvKCdVRFAgU2VydmVyIGxpc3RlbmluZyBvbiAnICsgYWRkcmVzcy5hZGRyZXNzICsgXCI6XCIgKyBhZGRyZXNzLnBvcnQpO1xyXG59XHJcblxyXG5jbGFzcyBNeUVtaXR0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge31cclxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IE15RW1pdHRlcigpO1xyXG5leHBvcnRzLmV2ZW50RW1pdHRlciA9IGV2ZW50RW1pdHRlcjtcclxuXHJcbmNvbnN0IENvbnN0YW50cyA9IG5ldyBtb2RlbC5Db25zdGFudHMoKTtcclxuXHJcbmZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKG1lc3NhZ2UsIHJlbW90ZSkge1xyXG5cdHRyeSB7XHJcblx0XHRcclxuXHRcdHZhciBwbGFuZXNMaXN0ID0gbmV3IG1vZGVsLlBsYW5lc0xpc3QoKTtcclxuXHRcdHZhciBpcCAgICAgICAgID0gcmVtb3RlLmFkZHJlc3M7XHJcblx0XHR2YXIgbXNncyAgICAgICA9IG1lc3NhZ2UudG9TdHJpbmcoJ3V0ZjgnKTtcclxuXHJcblx0XHRsb2dnZXIuaW5mbyhcIk1lc3NhZ2UgcmVjZWl2ZWQ6ICVzXCIsbXNncyk7XHJcblxyXG5cdCAgIFx0bXNncy5zcGxpdChcIjtcIikubWFwKCBtc2cgPT4ge1xyXG5cclxuXHQgICBcdFx0dmFyIGFyciAgID0gbXNnLnNwbGl0KFwiPVwiKTtcclxuXHQgICBcdFx0dmFyIGxhYmVsID0gYXJyWzBdO1xyXG5cdCAgIFx0XHR2YXIgdmFsdWUgPSBhcnJbMV07XHJcblxyXG5cdCAgIFx0XHRzd2l0Y2gobGFiZWwpIHtcclxuXHQgICBcdFx0XHQgY2FzZSBDb25zdGFudHMuREVTVElOQVRJT046IHtcclxuXHQgICBcdFx0XHRcdHBsYW5lc0xpc3Quc2V0RGVzdGluYXRpb24oaXAsdmFsdWUpXHJcblx0ICAgXHRcdFx0XHRicmVhaztcclxuXHQgICBcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HQU1FX1BBVVNFRDoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0UGF1c2UoaXAsdmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkJBUk9NRVRFUjoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0QmFyb21ldGVyKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT01QQVNTX0hFQURJTkc6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldENvbXBhc3NIZWFkaW5nKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0TmF2MUZyZXEoaXAsdmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRlJFUVVFTkNZOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXROYXYyRnJlcShpcCx2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQUlSU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldEFpclNwZWVkKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BTFRJVFVERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuRlVFTF9RVUFOVElUWToge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0RnVlbFF1YW50aXR5KGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BUFVfUlVOTklORzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NMV9GUkVRVUVOQ1k6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldENvbTFGcmVxKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00yX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0Q29tMkZyZXEoaXAsdmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTFfRlJFUVVFTkNZX1NUREJZOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00yX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX01FVEVSUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX1NFQ09ORFM6IHtcclxuXHRcdFx0XHQgXHQvKlxyXG5cdFx0XHRcdCBcdGZsb2F0IGRpc3RhbmNlTWludXRlcyA9IDA7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRkaXN0YW5jZU1pbnV0ZXMgPSBGbG9hdC5wYXJzZUZsb2F0KHZhbHVlKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKE51bWJlckZvcm1hdEV4Y2VwdGlvbiBlKSB7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlTWludXRlcyA+IDApIHtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZU1pbnV0ZXMgPSAoaW50KSBkaXN0YW5jZU1pbnV0ZXM7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VTZWNvbmRzID0gKGludCkgKChkaXN0YW5jZU1pbnV0ZXMgLSBpRGlzdGFuY2VNaW51dGVzKSAqIDYwKTtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZUhvdXJzID0gKGludCkgKGRpc3RhbmNlTWludXRlcyAvIDYwKTtcclxuXHRcdFx0XHRcdFx0U3RyaW5nIHJlc3VsdCA9IGRmLmZvcm1hdChpRGlzdGFuY2VIb3VycykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VNaW51dGVzKSArIFwiOlwiICsgZGYuZm9ybWF0KGlEaXN0YW5jZVNlY29uZHMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgcmVzdWx0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lLnB1dChpcC50b1N0cmluZygpLCBcIjBcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0IFx0Ki9cclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMl9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuT1VUU0lERV9URU1QRVJBVFVSRV9DRUxTSVVTOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXRPdXRzaWRlVGVtcGVyYXR1cmUoaXAsdmFsdWUpO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5WRVJUSUNBTF9TUEVFRDoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0VlNwZWVkKGlwLHZhbHVlKTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1JPVU5EX1NQRUVEOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXRHcm91bmRTcGVlZChpcCx2YWx1ZSk7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLlRSVUVfQUlSU1BFRUQ6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkxBVElUVURFOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5MT05HSVRVREU6IHtcclxuXHRcdFx0XHQgXHQvKlxyXG5cdFx0XHRcdCBcdHRoaXMubGF0TWFwLnB1dChpcC50b1N0cmluZygpLCBuZXcgRmxvYXQobGF0aXR1ZGUpKTtcclxuXHRcdFx0XHRcdHRoaXMubG9uTWFwLnB1dChpcC50b1N0cmluZygpLCBuZXcgRmxvYXQobG9uZ2l0dWRlKSk7XHJcblxyXG5cdFx0XHRcdFx0ZmxvYXQgbGF0MSA9IHRoaXMuZ2V0TGF0QW50ZXJpb3JNYXAoKS5jb250YWluc0tleShpcC50b1N0cmluZygpKSA/IHRoaXMuZ2V0TGF0QW50ZXJpb3JNYXAoKS5nZXQoaXAudG9TdHJpbmcoKSkgOiAwO1xyXG5cdFx0XHRcdFx0ZmxvYXQgbG9uMSA9IHRoaXMuZ2V0TG9uQW50ZXJpb3JNYXAoKS5jb250YWluc0tleShpcC50b1N0cmluZygpKSA/IHRoaXMuZ2V0TG9uQW50ZXJpb3JNYXAoKS5nZXQoaXAudG9TdHJpbmcoKSkgOiAwO1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxjdWxhdGVCZWFyaW5nKGlwLCBsYXQxLCBsb24xLCBuZXcgRmxvYXQobGF0aXR1ZGUpLCBuZXcgRmxvYXQobG9uZ2l0dWRlKSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5sYXRBbnRlcmlvck1hcC5wdXQoaXAudG9TdHJpbmcoKSwgbmV3IEZsb2F0KGxhdGl0dWRlKSk7XHJcblx0XHRcdFx0XHR0aGlzLmxvbkFudGVyaW9yTWFwLnB1dChpcC50b1N0cmluZygpLCBuZXcgRmxvYXQobG9uZ2l0dWRlKSk7XHJcblx0XHRcdFx0IFx0Ki9cclxuXHRcdFx0XHQgXHRicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5XRUlHSFRfVE9UQUxfRlVFTDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX01PREU6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9BTFRJVFVERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX1ZFUlRJQ0FMX1NQRUVEOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfQUlSUFNQRUVEOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfSEVBRElORzoge2JyZWFrO31cclxuXHQgICBcdFx0XHQgZGVmYXVsdDpcclxuXHQgICBcdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdCAgIH1cclxuXHRcdFx0ICAgXHJcblx0ICAgXHRcdCAgIGxvZ2dlci5kZWJ1ZyhcIk1lc3NhZ2UuLi46ICVzIC0gJXNcIixsYWJlbCx2YWx1ZSk7XHJcblx0XHR9KTtcclxuXHRcdCAgIFxyXG5cdFx0ZXZlbnRFbWl0dGVyLmVtaXQoJ3JlY2VpdmVkTWVzc2FnZScsIHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICBcdFx0bG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkuc3RhY2spO1xyXG4gICBcdFx0dGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3VkcC1zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuL2pzL3V0aWxzL3V0aWxzLmpzJztcclxuaW1wb3J0ICcuL2pzL21vZGVsL2luZGV4LmpzJztcclxuaW1wb3J0ICcuL2pzL21vZGVsL0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9QbGFuZXNMaXN0LmpzJztcclxuaW1wb3J0ICcuL2pzL3V0aWxzL2xvZ2dlci5qcyc7XHJcbmltcG9ydCAnLi9qcy9odHRwLXNlcnZlci5qcyc7XHJcbmltcG9ydCAnLi9qcy91ZHAtc2VydmVyLmpzJztcclxuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtYmFjay5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcHAtcm9vdC1wYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZ3JhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRncmFtXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgID0gcmVxdWlyZSgnLi91dGlscy91dGlscy5qcycpO1xyXG5jb25zdCBsb2dnZXIgICAgID0gcmVxdWlyZSgnLi91dGlscy9sb2dnZXIuanMnKShtb2R1bGUpO1xyXG5jb25zdCBtb2RlbCAgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xyXG5jb25zdCB1ZHBTZXJ2ZXIgID0gcmVxdWlyZSgnLi91ZHAtc2VydmVyLmpzJyk7XHJcbmNvbnN0IGh0dHBTZXJ2ZXIgPSByZXF1aXJlKCcuL2h0dHAtc2VydmVyLmpzJyk7XHJcblxyXG52YXIgcGxhbmVzTGlzdCA9IG5ldyBtb2RlbC5QbGFuZXNMaXN0KCk7XHJcblxyXG5sb2dnZXIuaW5mbygnU3RhcnQgeC1uYXZpZ2F0Li4uJyk7XHJcblxyXG51ZHBTZXJ2ZXIuZXZlbnRFbWl0dGVyLm9uKCdyZWNlaXZlZE1lc3NhZ2UnLCAoX3BsYW5lc0xpc3QpID0+IHtcclxuICAgIHBsYW5lc0xpc3QgICAgICAgICAgICA9IF9wbGFuZXNMaXN0O1xyXG4gICAgaHR0cFNlcnZlci5yZWNlaXZlVXBkYXRlKHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIGxvZ2dlci5kZWJ1ZyhcIl9wbGFuZXNMaXN0Li4uOiAlc1wiLF9wbGFuZXNMaXN0KTtcclxufSk7XHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9