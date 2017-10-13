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

/* WEBPACK VAR INJECTION */(function(module) {const utils   = __webpack_require__(0);
const logger  = __webpack_require__(2)(module);
const model   = __webpack_require__(1);
const http    = __webpack_require__(24);
const express = __webpack_require__(25);
const ip      = __webpack_require__(7);

const PORT     = 8000;
const HOST     = ip.address(); //'192.168.0.22';
const app      = express();

var planesList = new model.PlanesList();

app.use( (err, request, response, next) => {
  logger.error(err);
  response.status(500).send('Something broke!')
})

app.get("/hello", (request, response) => {
    response.end('Hello!');
})

app.get("/", (request, response) => {
    //response.sendFile("index.html", {"root": __dirname});
    response.sendFile("c:/Users/Ualter/Developer/x-navigat/x-navigat/dist/index.html");
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
const dgram        = __webpack_require__(26);
const EventEmitter = __webpack_require__(27);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js__ = __webpack_require__(28);
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

module.exports = require("dgram");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 28 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzg0ZGUyNGU3MTFiMWMxZWNkN2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL1BsYW5lc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXBcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdWRwLXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtYmFjay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDUkE7QUFDQSw0Qzs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxlQUFlLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSSxhQUFhO0FBQzFFLENBQUM7O0FBRUQ7QUFDQSxZQUFZLGVBQWUsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLGFBQWE7QUFDMUUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUM3SkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkI7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQSwrQjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDLCtDQUErQztBQUMvQywwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDO0FBQ0EsYztBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQSxvQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6ImJhY2suYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4NGRlMjRlNzExYjFjMWVjZDdjIiwidmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xyXG5cclxuZXhwb3J0cy5mYWJvbmFjY2kgPSBmdW5jdGlvbiAobnVtMSxudW0yKSB7XHJcbiAgICByZXR1cm4gbnVtMStudW0yO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zYXlIZWxsb0luU3BhbmlzaCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBcIkhvbGFcIjtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLlBsYW5lc0xpc3QgPSByZXF1aXJlKFwiLi9QbGFuZXNMaXN0LmpzXCIpO1xyXG5leHBvcnRzLkNvbnN0YW50cyAgPSByZXF1aXJlKFwiLi9Db25zdGFudHMuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgd2luc3RvbiA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcclxuY29uc3QgbW9tZW50ICA9IHJlcXVpcmUoJ21vbWVudCcpO1xyXG5jb25zdCBTICAgICAgID0gcmVxdWlyZSgnc3RyaW5nJyk7XHJcblxyXG5jb25zdCBteUNvbnNvbGVGb3JtYXQgPSB3aW5zdG9uLmZvcm1hdC5wcmludGYoaW5mbyA9PiB7XHJcbiAgcmV0dXJuIGAke2luZm8udGltZXN0YW1wfSBbJHtpbmZvLmxhYmVsfV0gJHtpbmZvLmxldmVsfTogJHtpbmZvLm1lc3NhZ2V9YDtcclxufSk7XHJcblxyXG5jb25zdCBteUpzb25Gb3JtYXQgPSB3aW5zdG9uLmZvcm1hdC5qc29uKGluZm8gPT4ge1xyXG4gIHJldHVybiBgJHtpbmZvLnRpbWVzdGFtcH0gWyR7aW5mby5sYWJlbH1dICR7aW5mby5sZXZlbH06ICR7aW5mby5tZXNzYWdlfWA7XHJcbn0pO1xyXG5cclxudmFyIGdldExhYmVsID0gZnVuY3Rpb24oY2FsbGluZ01vZHVsZSkge1xyXG4gICAgaWYgKCBjYWxsaW5nTW9kdWxlLmZpbGVuYW1lICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIHZhciBwYXJ0cyA9IGNhbGxpbmdNb2R1bGUuZmlsZW5hbWUuc3BsaXQoJ1xcXFwnKTtcclxuICAgICAgdmFyIGxibCAgID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMl0gKyAnLycgKyBwYXJ0cy5wb3AoKTtcclxuICAgICAgcmV0dXJuIFMobGJsKS5wYWRSaWdodCgyMiwnLScpICsgJz4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdidW5kbGVkJztcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2FsbGluZ01vZHVsZSkge1xyXG4gIFxyXG4gIHZhciBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XHJcbiAgICB0cmFuc3BvcnRzOiBbXHJcbiAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSh7IFxyXG4gICAgICAgIGxldmVsOiAnZXJyb3InLFxyXG4gICAgICAgIGZpbGVuYW1lOiAnLi9sb2dzL2Vycm9yLmxvZycsIFxyXG4gICAgICAgIG1heHNpemU6IDUyNDI4ODAsIC8vNU1CXHJcbiAgICAgICAgbWF4RmlsZXM6IDUsXHJcbiAgICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lIChcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmxhYmVsKCB7IGxhYmVsOiBnZXRMYWJlbChjYWxsaW5nTW9kdWxlKSB9KSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5wcmV0dHlQcmludCgpLFxyXG4gICAgICAgICAgIG15SnNvbkZvcm1hdFxyXG4gICAgICAgIClcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSAoe1xyXG4gICAgICAgIGZpbGVuYW1lOiAnLi9sb2dzL3RyYWNlLmxvZycsXHJcbiAgICAgICAgbWF4c2l6ZTogNTI0Mjg4MCwgLy81TUJcclxuICAgICAgICBtYXhGaWxlczogNSwgXHJcbiAgICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lIChcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5zcGxhdCgpLFxyXG4gICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmxhYmVsKCB7IGxhYmVsOiBnZXRMYWJlbChjYWxsaW5nTW9kdWxlKSB9KSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5wcmV0dHlQcmludCgpLFxyXG4gICAgICAgICAgIG15SnNvbkZvcm1hdFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgIF1cclxuICB9KTtcclxuXHJcbiAgaWYgKCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICkge1xyXG4gICAgbG9nZ2VyLmFkZChcclxuICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcclxuICAgICAgICBsZXZlbDogJ2RlYnVnJyxcclxuICAgICAgICBqc29uOiBmYWxzZSxcclxuICAgICAgICBjb2xvcml6ZTogdHJ1ZSxcclxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUgKFxyXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcclxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmxhYmVsKCB7IGxhYmVsOiBnZXRMYWJlbChjYWxsaW5nTW9kdWxlKSB9KSxcclxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgbXlDb25zb2xlRm9ybWF0XHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBsb2dnZXI7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBdXRob3IgVWFsdGVyIEpyLlxyXG5cclxuLy8gQ2xhc3MgQ29uc3RydWN0b3IgYW5kIEF0dHJpYnV0ZXNcclxuZnVuY3Rpb24gUGxhbmVzTGlzdCgpIHtcclxuXHR0aGlzLmxhdE1hcFx0XHRcdFx0PSB7fTtcclxuXHR0aGlzLmxvbk1hcFx0XHRcdFx0PSB7fTtcclxuXHR0aGlzLmxhdEFudGVyaW9yTWFwXHRcdD0ge307XHJcblx0dGhpcy5sb25BbnRlcmlvck1hcFx0XHQ9IHt9O1xyXG5cdHRoaXMuYWx0TWFwXHRcdFx0XHQ9IHt9O1xyXG5cdHRoaXMuYWlyU3BlZWRcdFx0XHQ9IHt9O1xyXG5cdHRoaXMudlNwZWVkXHRcdFx0XHQ9IHt9O1xyXG5cdHRoaXMuZ3JvdW5kU3BlZWRcdFx0PSB7fTtcclxuXHR0aGlzLmJlYXJpbmdcdFx0XHQ9IHt9O1xyXG5cdHRoaXMuZGVzdGluYXRpb25cdFx0PSB7fTtcclxuXHR0aGlzLmdwc0Rpc3RhbmNlTm1cdFx0PSB7fTtcclxuXHR0aGlzLmdwc0Rpc3RhbmNlVGltZVx0PSB7fTtcclxuXHR0aGlzLmJhcm9tZXRlclx0XHRcdD0ge307XHJcblx0dGhpcy5mdWVsUXVhbnRpdHlcdFx0PSB7fTtcclxuXHR0aGlzLm5hdjFGcmVxXHRcdFx0PSB7fTtcclxuXHR0aGlzLm5hdjJGcmVxXHRcdFx0PSB7fTtcclxuXHR0aGlzLnBhdXNlXHRcdFx0XHQ9IHt9O1xyXG5cdHRoaXMuY29tcGFzc0hlYWRpbmdcdFx0PSB7fTtcclxuXHR0aGlzLm91dHNpZGVUZW1wZXJhdHVyZVx0PSB7fTtcclxuXHR0aGlzLmNvbTFGcmVxXHRcdFx0PSB7fTtcclxuXHR0aGlzLmNvbTJGcmVxXHRcdFx0PSB7fTtcclxufTtcclxuXHJcbi8vIENsYXNzIEZ1bmN0aW9uc1xyXG5QbGFuZXNMaXN0LnByb3RvdHlwZSA9IHtcclxuXHRnZXRMYXRNYXA6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYXRNYXBbaXBdO1xyXG5cdH0sXHJcblx0c2V0TGF0TWFwOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmxhdE1hcFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRMb25NYXA6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb25NYXBbaXBdO1xyXG5cdH0sXHJcblx0c2V0TG9uTWFwOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmxvbk1hcFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRMYXRBbnRlcmlvck1hcDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmxhdEFudGVyaW9yTWFwW2lwXTtcclxuXHR9LFxyXG5cdHNldExhdEFudGVyaW9yTWFwOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmxhdEFudGVyaW9yTWFwW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldExvbkFudGVyaW9yTWFwOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9uQW50ZXJpb3JNYXBbaXBdO1xyXG5cdH0sXHJcblx0c2V0TG9uQW50ZXJpb3JNYXA6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMubG9uQW50ZXJpb3JNYXBbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QWx0TWFwOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWx0TWFwW2lwXTtcclxuXHR9LFxyXG5cdHNldEFsdE1hcDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5hbHRNYXBbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QWlyU3BlZWQ6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5haXJTcGVlZFtpcF07XHJcblx0fSxcclxuXHRzZXRBaXJTcGVlZDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5haXJTcGVlZFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRWU3BlZWQ6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52U3BlZWRbaXBdO1xyXG5cdH0sXHJcblx0c2V0VlNwZWVkOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLnZTcGVlZFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRHcm91bmRTcGVlZDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmdyb3VuZFNwZWVkW2lwXTtcclxuXHR9LFxyXG5cdHNldEdyb3VuZFNwZWVkOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmdyb3VuZFNwZWVkW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEJlYXJpbmc6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iZWFyaW5nW2lwXTtcclxuXHR9LFxyXG5cdHNldEJlYXJpbmc6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuYmVhcmluZ1tpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXREZXN0aW5hdGlvbjogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmRlc3RpbmF0aW9uW2lwXTtcclxuXHR9LFxyXG5cdHNldERlc3RpbmF0aW9uOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmRlc3RpbmF0aW9uW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEdwc0Rpc3RhbmNlTm06IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ncHNEaXN0YW5jZU5tW2lwXTtcclxuXHR9LFxyXG5cdHNldEdwc0Rpc3RhbmNlTm06IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuZ3BzRGlzdGFuY2VObVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRHcHNEaXN0YW5jZVRpbWU6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ncHNEaXN0YW5jZVRpbWVbaXBdO1xyXG5cdH0sXHJcblx0c2V0R3BzRGlzdGFuY2VUaW1lOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRCYXJvbWV0ZXI6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iYXJvbWV0ZXJbaXBdO1xyXG5cdH0sXHJcblx0c2V0QmFyb21ldGVyOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmJhcm9tZXRlcltpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRGdWVsUXVhbnRpdHk6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mdWVsUXVhbnRpdHlbaXBdO1xyXG5cdH0sXHJcblx0c2V0RnVlbFF1YW50aXR5OiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmZ1ZWxRdWFudGl0eVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXROYXYxRnJlcTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLm5hdjFGcmVxW2lwXTtcclxuXHR9LFxyXG5cdHNldE5hdjFGcmVxOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLm5hdjFGcmVxW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldE5hdjJGcmVxOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmF2MkZyZXFbaXBdO1xyXG5cdH0sXHJcblx0c2V0TmF2MkZyZXE6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMubmF2MkZyZXFbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0UGF1c2U6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXVzZVtpcF07XHJcblx0fSxcclxuXHRzZXRQYXVzZTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5wYXVzZVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRDb21wYXNzSGVhZGluZzogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBhc3NIZWFkaW5nW2lwXTtcclxuXHR9LFxyXG5cdHNldENvbXBhc3NIZWFkaW5nOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmNvbXBhc3NIZWFkaW5nW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldE91dHNpZGVUZW1wZXJhdHVyZTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLm91dHNpZGVUZW1wZXJhdHVyZVtpcF07XHJcblx0fSxcclxuXHRzZXRPdXRzaWRlVGVtcGVyYXR1cmU6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMub3V0c2lkZVRlbXBlcmF0dXJlW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldENvbTFGcmVxOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tMUZyZXFbaXBdO1xyXG5cdH0sXHJcblx0c2V0Q29tMUZyZXE6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuY29tMUZyZXFbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0Q29tMkZyZXE6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb20yRnJlcVtpcF07XHJcblx0fSxcclxuXHRzZXRDb20yRnJlcTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5jb20yRnJlcVtpcF0gPSB2bHI7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGFuZXNMaXN0O1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvUGxhbmVzTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBdXRob3IgVWFsdGVyIEpyLlxyXG5cclxuZnVuY3Rpb24gQ29uc3RhbnRzKCkge1xyXG59O1xyXG5cclxuQ29uc3RhbnRzLnByb3RvdHlwZS5ERVNUSU5BVElPTlx0XHRcdFx0XHQ9IFwiZGVzdGluYXRpb25cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HQU1FX1BBVVNFRFx0XHRcdFx0XHQ9IFwiZ2FtZVBhdXNlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkJBUk9NRVRFUlx0XHRcdFx0XHQ9IFwiYmFyb21ldGVyXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NUEFTU19IRUFESU5HXHRcdFx0XHQ9IFwiY29tcGFzc0hlYWRpbmdcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0ZSRVFVRU5DWVx0XHRcdFx0PSBcIm5hdjFGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0ZSRVFVRU5DWVx0XHRcdFx0PSBcIm5hdjJGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BSVJTUEVFRFx0XHRcdFx0XHQ9IFwiYWlyc3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BTFRJVFVERVx0XHRcdFx0XHQ9IFwiYWx0aXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5GVUVMX1FVQU5USVRZXHRcdFx0XHQ9IFwiZnVlbHF1YW50aXR5XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVBVX1JVTk5JTkdcdFx0XHRcdFx0PSBcImFwdXJ1bm5pbmdcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00xX0ZSRVFVRU5DWVx0XHRcdFx0PSBcImNvbTFGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00yX0ZSRVFVRU5DWVx0XHRcdFx0PSBcImNvbTJGcmVxSHpcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5DT00xX0ZSRVFVRU5DWV9TVERCWVx0XHQ9IFwiY29tMUZyZXFIelN0ZGJ5XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMl9GUkVRVUVOQ1lfU1REQllcdFx0PSBcImNvbTJGcmVxSHpTdGRieVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdQU19ESVNUQU5DRV9NRVRFUlNcdFx0XHQ9IFwiZ3BzRE1FRGlzdE1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HUFNfRElTVEFOQ0VfU0VDT05EU1x0XHQ9IFwiZ3BzRE1FVGltZVNlY3NcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0RJU1RBTkNFX05BVVRJQ0FMU1x0XHQ9IFwibmF2MURNRURpc3RObVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjFfRElTVEFOQ0VfTUlOVVRFU1x0XHQ9IFwibmF2MURNRURpc3RNaW5cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0RJU1RBTkNFX05BVVRJQ0FMU1x0XHQ9IFwibmF2MkRNRURpc3RObVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLk5BVjJfRElTVEFOQ0VfTUlOVVRFU1x0XHQ9IFwibmF2MkRNRURpc3RNaW5cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5PVVRTSURFX1RFTVBFUkFUVVJFX0NFTFNJVVNcdD0gXCJvdXRzaWRlVGVtcENcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5WRVJUSUNBTF9TUEVFRFx0XHRcdFx0PSBcInZzRnBtXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR1JPVU5EX1NQRUVEXHRcdFx0XHQ9IFwiZ3JvdW5kc3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5UUlVFX0FJUlNQRUVEXHRcdFx0XHQ9IFwidHJ1ZV9haXJzcGVlZFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkxBVElUVURFXHRcdFx0XHRcdD0gXCJsYXRpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkxPTkdJVFVERVx0XHRcdFx0XHQ9IFwibG9uZ2l0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuV0VJR0hUX1RPVEFMX0ZVRUxcdFx0XHQ9IFwid2VpZ2h0VG90YWxGdWVsXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX01PREVcdFx0XHRcdD0gXCJhdXRvcGlsb3RNb2RlXCI7XHRcdC8vIChvZmY9MCxmbGlnaHQgZGlyZWN0b3I9MSwgb249MilcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfQUxUSVRVREVcdFx0XHQ9IFwiYXV0b3BpbG90QWx0aXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfVkVSVElDQUxfU1BFRURcdD0gXCJhdXRvcGlsb3RWU1wiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9BSVJQU1BFRURcdFx0XHQ9IFwiYXV0b3BpbG90QWlyU3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfSEVBRElOR1x0XHRcdD0gXCJhdXRvcGlsb3RIZWFkaW5nXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RlbC9Db25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdXRpbHMgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcclxuY29uc3QgaHR0cCAgICA9IHJlcXVpcmUoJ2h0dHAnKTtcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgaXAgICAgICA9IHJlcXVpcmUoXCJpcFwiKTtcclxuXHJcbmNvbnN0IFBPUlQgICAgID0gODAwMDtcclxuY29uc3QgSE9TVCAgICAgPSBpcC5hZGRyZXNzKCk7IC8vJzE5Mi4xNjguMC4yMic7XHJcbmNvbnN0IGFwcCAgICAgID0gZXhwcmVzcygpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxuYXBwLnVzZSggKGVyciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcclxuICBsb2dnZXIuZXJyb3IoZXJyKTtcclxuICByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKCdTb21ldGhpbmcgYnJva2UhJylcclxufSlcclxuXHJcbmFwcC5nZXQoXCIvaGVsbG9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5lbmQoJ0hlbGxvIScpO1xyXG59KVxyXG5cclxuYXBwLmdldChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAvL3Jlc3BvbnNlLnNlbmRGaWxlKFwiaW5kZXguaHRtbFwiLCB7XCJyb290XCI6IF9fZGlybmFtZX0pO1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUoXCJjOi9Vc2Vycy9VYWx0ZXIvRGV2ZWxvcGVyL3gtbmF2aWdhdC94LW5hdmlnYXQvZGlzdC9pbmRleC5odG1sXCIpO1xyXG59KVxyXG5cclxuYXBwLmdldChcIi9kYXRhXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2UudHlwZSgnanNvbicpO1xyXG4gICAgLy8gTm9uIFByZXR0eS1QcmludFxyXG4gICAgLy9yZXNwb25zZS5zZW5kKCBwbGFuZXNMaXN0ICk7XHJcbiAgICAvLyBQcmV0dHktUHJpbnRcclxuICAgIHJlc3BvbnNlLnNlbmQoSlNPTi5zdHJpbmdpZnkocGxhbmVzTGlzdCwgbnVsbCwgNCkpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5hcHAubGlzdGVuKFBPUlQsIChlcnIpID0+IHtcclxuXHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkuc3RhY2spO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZXIuaW5mbygnSFRUUCBTZXJ2ZXIgbGlzdGVuaW5nIG9uICcgKyBIT1NUICsgXCI6XCIgKyBQT1JUKTtcclxufSlcclxuXHJcbnZhciByZWNlaXZlVXBkYXRlID0gZnVuY3Rpb24gKF9wbGFuZXNMaXN0KSB7XHJcbiAgICBwbGFuZXNMaXN0ID0gX3BsYW5lc0xpc3Q7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVjZWl2ZVVwZGF0ZTogcmVjZWl2ZVVwZGF0ZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2h0dHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXBcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XHJcbmNvbnN0IGxvZ2dlciAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xyXG5jb25zdCBkZ3JhbSAgICAgICAgPSByZXF1aXJlKCdkZ3JhbScpO1xyXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcclxuY29uc3QgaXAgICAgICAgICAgID0gcmVxdWlyZShcImlwXCIpO1xyXG5cclxuY29uc3QgUE9SVCAgID0gODg4MTtcclxuY29uc3QgSE9TVCAgID0gaXAuYWRkcmVzcygpO1xyXG4vLycxOTIuMTY4LjAuMjInO1xyXG5cclxuY29uc3Qgc2VydmVyID0gZGdyYW0uY3JlYXRlU29ja2V0KCd1ZHA0Jyk7XHJcblxyXG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIHN0YXJ0U2VydmVyKTtcclxuc2VydmVyLm9uKCdtZXNzYWdlJywgcmVjZWl2ZU1lc3NhZ2UpO1xyXG5zZXJ2ZXIuYmluZChQT1JULCBIT1NUKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xyXG5cdHZhciBhZGRyZXNzID0gc2VydmVyLmFkZHJlc3MoKTtcclxuXHRsb2dnZXIuaW5mbygnVURQIFNlcnZlciBsaXN0ZW5pbmcgb24gJyArIGFkZHJlc3MuYWRkcmVzcyArIFwiOlwiICsgYWRkcmVzcy5wb3J0KTtcclxufVxyXG5cclxuY2xhc3MgTXlFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHt9XHJcbmNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBNeUVtaXR0ZXIoKTtcclxuZXhwb3J0cy5ldmVudEVtaXR0ZXIgPSBldmVudEVtaXR0ZXI7XHJcblxyXG5jb25zdCBDb25zdGFudHMgPSBuZXcgbW9kZWwuQ29uc3RhbnRzKCk7XHJcblxyXG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZShtZXNzYWdlLCByZW1vdGUpIHtcclxuXHR0cnkge1xyXG5cdFx0XHJcblx0XHR2YXIgcGxhbmVzTGlzdCA9IG5ldyBtb2RlbC5QbGFuZXNMaXN0KCk7XHJcblx0XHR2YXIgaXAgICAgICAgICA9IHJlbW90ZS5hZGRyZXNzO1xyXG5cdFx0dmFyIG1zZ3MgICAgICAgPSBtZXNzYWdlLnRvU3RyaW5nKCd1dGY4Jyk7XHJcblxyXG5cdFx0bG9nZ2VyLmluZm8oXCJNZXNzYWdlIHJlY2VpdmVkOiAlc1wiLG1zZ3MpO1xyXG5cclxuXHQgICBcdG1zZ3Muc3BsaXQoXCI7XCIpLm1hcCggbXNnID0+IHtcclxuXHJcblx0ICAgXHRcdHZhciBhcnIgICA9IG1zZy5zcGxpdChcIj1cIik7XHJcblx0ICAgXHRcdHZhciBsYWJlbCA9IGFyclswXTtcclxuXHQgICBcdFx0dmFyIHZhbHVlID0gYXJyWzFdO1xyXG5cclxuXHQgICBcdFx0c3dpdGNoKGxhYmVsKSB7XHJcblx0ICAgXHRcdFx0IGNhc2UgQ29uc3RhbnRzLkRFU1RJTkFUSU9OOiB7XHJcblx0ICAgXHRcdFx0XHRwbGFuZXNMaXN0LnNldERlc3RpbmF0aW9uKGlwLHZhbHVlKVxyXG5cdCAgIFx0XHRcdFx0YnJlYWs7XHJcblx0ICAgXHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR0FNRV9QQVVTRUQ6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldFBhdXNlKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5CQVJPTUVURVI6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldEJhcm9tZXRlcihpcCx2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NUEFTU19IRUFESU5HOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXRDb21wYXNzSGVhZGluZyhpcCx2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9GUkVRVUVOQ1k6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldE5hdjFGcmVxKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0TmF2MkZyZXEoaXAsdmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFJUlNQRUVEOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXRBaXJTcGVlZChpcCx2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQUxUSVRVREU6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkZVRUxfUVVBTlRJVFk6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldEZ1ZWxRdWFudGl0eShpcCx2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVBVX1JVTk5JTkc6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTFfRlJFUVVFTkNZOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXRDb20xRnJlcShpcCx2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NMl9GUkVRVUVOQ1k6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldENvbTJGcmVxKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00xX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NMl9GUkVRVUVOQ1lfU1REQlk6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdQU19ESVNUQU5DRV9NRVRFUlM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdQU19ESVNUQU5DRV9TRUNPTkRTOiB7XHJcblx0XHRcdFx0IFx0LypcclxuXHRcdFx0XHQgXHRmbG9hdCBkaXN0YW5jZU1pbnV0ZXMgPSAwO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0ZGlzdGFuY2VNaW51dGVzID0gRmxvYXQucGFyc2VGbG9hdCh2YWx1ZSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChOdW1iZXJGb3JtYXRFeGNlcHRpb24gZSkge1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChkaXN0YW5jZU1pbnV0ZXMgPiAwKSB7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VNaW51dGVzID0gKGludCkgZGlzdGFuY2VNaW51dGVzO1xyXG5cdFx0XHRcdFx0XHRpbnQgaURpc3RhbmNlU2Vjb25kcyA9IChpbnQpICgoZGlzdGFuY2VNaW51dGVzIC0gaURpc3RhbmNlTWludXRlcykgKiA2MCk7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VIb3VycyA9IChpbnQpIChkaXN0YW5jZU1pbnV0ZXMgLyA2MCk7XHJcblx0XHRcdFx0XHRcdFN0cmluZyByZXN1bHQgPSBkZi5mb3JtYXQoaURpc3RhbmNlSG91cnMpICsgXCI6XCIgKyBkZi5mb3JtYXQoaURpc3RhbmNlTWludXRlcykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VTZWNvbmRzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5ncHNEaXN0YW5jZVRpbWUucHV0KGlwLnRvU3RyaW5nKCksIHJlc3VsdCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgXCIwXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCBcdCovXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRElTVEFOQ0VfTkFVVElDQUxTOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0RJU1RBTkNFX01JTlVURVM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTkFVVElDQUxTOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYyX0RJU1RBTkNFX01JTlVURVM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk9VVFNJREVfVEVNUEVSQVRVUkVfQ0VMU0lVUzoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0T3V0c2lkZVRlbXBlcmF0dXJlKGlwLHZhbHVlKTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuVkVSVElDQUxfU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldFZTcGVlZChpcCx2YWx1ZSk7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkdST1VORF9TUEVFRDoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0R3JvdW5kU3BlZWQoaXAsdmFsdWUpO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5UUlVFX0FJUlNQRUVEOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5MQVRJVFVERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTE9OR0lUVURFOiB7XHJcblx0XHRcdFx0IFx0LypcclxuXHRcdFx0XHQgXHR0aGlzLmxhdE1hcC5wdXQoaXAudG9TdHJpbmcoKSwgbmV3IEZsb2F0KGxhdGl0dWRlKSk7XHJcblx0XHRcdFx0XHR0aGlzLmxvbk1hcC5wdXQoaXAudG9TdHJpbmcoKSwgbmV3IEZsb2F0KGxvbmdpdHVkZSkpO1xyXG5cclxuXHRcdFx0XHRcdGZsb2F0IGxhdDEgPSB0aGlzLmdldExhdEFudGVyaW9yTWFwKCkuY29udGFpbnNLZXkoaXAudG9TdHJpbmcoKSkgPyB0aGlzLmdldExhdEFudGVyaW9yTWFwKCkuZ2V0KGlwLnRvU3RyaW5nKCkpIDogMDtcclxuXHRcdFx0XHRcdGZsb2F0IGxvbjEgPSB0aGlzLmdldExvbkFudGVyaW9yTWFwKCkuY29udGFpbnNLZXkoaXAudG9TdHJpbmcoKSkgPyB0aGlzLmdldExvbkFudGVyaW9yTWFwKCkuZ2V0KGlwLnRvU3RyaW5nKCkpIDogMDtcclxuXHRcdFx0XHRcdHRoaXMuY2FsY3VsYXRlQmVhcmluZyhpcCwgbGF0MSwgbG9uMSwgbmV3IEZsb2F0KGxhdGl0dWRlKSwgbmV3IEZsb2F0KGxvbmdpdHVkZSkpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMubGF0QW50ZXJpb3JNYXAucHV0KGlwLnRvU3RyaW5nKCksIG5ldyBGbG9hdChsYXRpdHVkZSkpO1xyXG5cdFx0XHRcdFx0dGhpcy5sb25BbnRlcmlvck1hcC5wdXQoaXAudG9TdHJpbmcoKSwgbmV3IEZsb2F0KGxvbmdpdHVkZSkpO1xyXG5cdFx0XHRcdCBcdCovXHJcblx0XHRcdFx0IFx0YnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuV0VJR0hUX1RPVEFMX0ZVRUw6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9NT0RFOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfQUxUSVRVREU6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9WRVJUSUNBTF9TUEVFRDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX0FJUlBTUEVFRDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX0hFQURJTkc6IHticmVhazt9XHJcblx0ICAgXHRcdFx0IGRlZmF1bHQ6XHJcblx0ICAgXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHQgICB9XHJcblx0XHRcdCAgIFxyXG5cdCAgIFx0XHQgICBsb2dnZXIuZGVidWcoXCJNZXNzYWdlLi4uOiAlcyAtICVzXCIsbGFiZWwsdmFsdWUpO1xyXG5cdFx0fSk7XHJcblx0XHQgICBcclxuXHRcdGV2ZW50RW1pdHRlci5lbWl0KCdyZWNlaXZlZE1lc3NhZ2UnLCBwbGFuZXNMaXN0KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgXHRcdGxvZ2dlci5lcnJvcihuZXcgRXJyb3IoZXJyLnRvU3RyaW5nKCkpLnN0YWNrKTtcclxuICAgXHRcdHRocm93IGVycjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91ZHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9qcy91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgJy4vanMvbW9kZWwvUGxhbmVzTGlzdC5qcyc7XHJcbmltcG9ydCAnLi9qcy91dGlscy9sb2dnZXIuanMnO1xyXG5pbXBvcnQgJy4vanMvaHR0cC1zZXJ2ZXIuanMnO1xyXG5pbXBvcnQgJy4vanMvdWRwLXNlcnZlci5qcyc7XHJcbmltcG9ydCAnLi9qcy9hcHAuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LWJhY2suanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndpbnN0b25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5zdG9uXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGdyYW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZ3JhbVwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmVudHNcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdXRpbHMgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nZ2VyLmpzJykobW9kdWxlKTtcclxuY29uc3QgbW9kZWwgICAgICA9IHJlcXVpcmUoJy4vbW9kZWwnKTtcclxuY29uc3QgdWRwU2VydmVyICA9IHJlcXVpcmUoJy4vdWRwLXNlcnZlci5qcycpO1xyXG5jb25zdCBodHRwU2VydmVyID0gcmVxdWlyZSgnLi9odHRwLXNlcnZlci5qcycpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxubG9nZ2VyLmluZm8oJ1N0YXJ0IHgtbmF2aWdhdC4uLicpO1xyXG5cclxudWRwU2VydmVyLmV2ZW50RW1pdHRlci5vbigncmVjZWl2ZWRNZXNzYWdlJywgKF9wbGFuZXNMaXN0KSA9PiB7XHJcbiAgICBwbGFuZXNMaXN0ICAgICAgICAgICAgPSBfcGxhbmVzTGlzdDtcclxuICAgIGh0dHBTZXJ2ZXIucmVjZWl2ZVVwZGF0ZShwbGFuZXNMaXN0KTtcclxuXHJcbiAgICBsb2dnZXIuZGVidWcoXCJfcGxhbmVzTGlzdC4uLjogJXNcIixfcGxhbmVzTGlzdCk7XHJcbn0pO1xyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==