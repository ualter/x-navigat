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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

const winston = __webpack_require__(20);
const moment  = __webpack_require__(21);
const S       = __webpack_require__(22);

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
const http    = __webpack_require__(23);
const express = __webpack_require__(24);

const PORT     = 8000;
const HOST     = '192.168.0.22';
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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {const utils        = __webpack_require__(0);
const logger       = __webpack_require__(2)(module);
const model        = __webpack_require__(1);
const dgram        = __webpack_require__(25);
const EventEmitter = __webpack_require__(26);

const PORT   = 8881;
const HOST   = '192.168.0.22';

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
/* 8 */,
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
/* 19 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_udp_server_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_udp_server_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__js_app_js__);









/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("string");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express");

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
const udpServer  = __webpack_require__(7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWU5Yjc2MTUyZGM0NzFmODM2OTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL1BsYW5lc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaHR0cC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VkcC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LWJhY2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3RvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ1JBO0FBQ0EsNEM7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZUFBZSxJQUFJLFdBQVcsSUFBSSxXQUFXLElBQUksYUFBYTtBQUMxRSxDQUFDOztBQUVEO0FBQ0EsWUFBWSxlQUFlLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSSxhQUFhO0FBQzFFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFpQztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDN0pBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLHdDQUF3QztBQUN4QztBQUNBLGM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkEsb0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJiYWNrLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZTliNzYxNTJkYzQ3MWY4MzY5NCIsInZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcclxuXHJcbmV4cG9ydHMuZmFib25hY2NpID0gZnVuY3Rpb24gKG51bTEsbnVtMikge1xyXG4gICAgcmV0dXJuIG51bTErbnVtMjtcclxufTtcclxuXHJcbmV4cG9ydHMuc2F5SGVsbG9JblNwYW5pc2ggPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gXCJIb2xhXCI7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5QbGFuZXNMaXN0ID0gcmVxdWlyZShcIi4vUGxhbmVzTGlzdC5qc1wiKTtcclxuZXhwb3J0cy5Db25zdGFudHMgID0gcmVxdWlyZShcIi4vQ29uc3RhbnRzLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHdpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJyk7XHJcbmNvbnN0IG1vbWVudCAgPSByZXF1aXJlKCdtb21lbnQnKTtcclxuY29uc3QgUyAgICAgICA9IHJlcXVpcmUoJ3N0cmluZycpO1xyXG5cclxuY29uc3QgbXlDb25zb2xlRm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQucHJpbnRmKGluZm8gPT4ge1xyXG4gIHJldHVybiBgJHtpbmZvLnRpbWVzdGFtcH0gWyR7aW5mby5sYWJlbH1dICR7aW5mby5sZXZlbH06ICR7aW5mby5tZXNzYWdlfWA7XHJcbn0pO1xyXG5cclxuY29uc3QgbXlKc29uRm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQuanNvbihpbmZvID0+IHtcclxuICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9IFske2luZm8ubGFiZWx9XSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gO1xyXG59KTtcclxuXHJcbnZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcclxuICAgIGlmICggY2FsbGluZ01vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICB2YXIgcGFydHMgPSBjYWxsaW5nTW9kdWxlLmZpbGVuYW1lLnNwbGl0KCdcXFxcJyk7XHJcbiAgICAgIHZhciBsYmwgICA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdICsgJy8nICsgcGFydHMucG9wKCk7XHJcbiAgICAgIHJldHVybiBTKGxibCkucGFkUmlnaHQoMjIsJy0nKSArICc+JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnYnVuZGxlZCc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNhbGxpbmdNb2R1bGUpIHtcclxuICBcclxuICB2YXIgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xyXG4gICAgdHJhbnNwb3J0czogW1xyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoeyBcclxuICAgICAgICBsZXZlbDogJ2Vycm9yJyxcclxuICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy9lcnJvci5sb2cnLCBcclxuICAgICAgICBtYXhzaXplOiA1MjQyODgwLCAvLzVNQlxyXG4gICAgICAgIG1heEZpbGVzOiA1LFxyXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQucHJldHR5UHJpbnQoKSxcclxuICAgICAgICAgICBteUpzb25Gb3JtYXRcclxuICAgICAgICApXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUgKHtcclxuICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy90cmFjZS5sb2cnLFxyXG4gICAgICAgIG1heHNpemU6IDUyNDI4ODAsIC8vNU1CXHJcbiAgICAgICAgbWF4RmlsZXM6IDUsIFxyXG4gICAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZSAoXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcclxuICAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQucHJldHR5UHJpbnQoKSxcclxuICAgICAgICAgICBteUpzb25Gb3JtYXRcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgfSk7XHJcblxyXG4gIGlmICggcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyApIHtcclxuICAgIGxvZ2dlci5hZGQoXHJcbiAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XHJcbiAgICAgICAgbGV2ZWw6ICdkZWJ1ZycsXHJcbiAgICAgICAganNvbjogZmFsc2UsXHJcbiAgICAgICAgY29sb3JpemU6IHRydWUsXHJcbiAgICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lIChcclxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnNwbGF0KCksXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5sYWJlbCggeyBsYWJlbDogZ2V0TGFiZWwoY2FsbGluZ01vZHVsZSkgfSksXHJcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoKSxcclxuICAgICAgICAgIG15Q29uc29sZUZvcm1hdFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9nZ2VyO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3V0aWxzL2xvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXV0aG9yIFVhbHRlciBKci5cclxuXHJcbi8vIENsYXNzIENvbnN0cnVjdG9yIGFuZCBBdHRyaWJ1dGVzXHJcbmZ1bmN0aW9uIFBsYW5lc0xpc3QoKSB7XHJcblx0dGhpcy5sYXRNYXBcdFx0XHRcdD0ge307XHJcblx0dGhpcy5sb25NYXBcdFx0XHRcdD0ge307XHJcblx0dGhpcy5sYXRBbnRlcmlvck1hcFx0XHQ9IHt9O1xyXG5cdHRoaXMubG9uQW50ZXJpb3JNYXBcdFx0PSB7fTtcclxuXHR0aGlzLmFsdE1hcFx0XHRcdFx0PSB7fTtcclxuXHR0aGlzLmFpclNwZWVkXHRcdFx0PSB7fTtcclxuXHR0aGlzLnZTcGVlZFx0XHRcdFx0PSB7fTtcclxuXHR0aGlzLmdyb3VuZFNwZWVkXHRcdD0ge307XHJcblx0dGhpcy5iZWFyaW5nXHRcdFx0PSB7fTtcclxuXHR0aGlzLmRlc3RpbmF0aW9uXHRcdD0ge307XHJcblx0dGhpcy5ncHNEaXN0YW5jZU5tXHRcdD0ge307XHJcblx0dGhpcy5ncHNEaXN0YW5jZVRpbWVcdD0ge307XHJcblx0dGhpcy5iYXJvbWV0ZXJcdFx0XHQ9IHt9O1xyXG5cdHRoaXMuZnVlbFF1YW50aXR5XHRcdD0ge307XHJcblx0dGhpcy5uYXYxRnJlcVx0XHRcdD0ge307XHJcblx0dGhpcy5uYXYyRnJlcVx0XHRcdD0ge307XHJcblx0dGhpcy5wYXVzZVx0XHRcdFx0PSB7fTtcclxuXHR0aGlzLmNvbXBhc3NIZWFkaW5nXHRcdD0ge307XHJcblx0dGhpcy5vdXRzaWRlVGVtcGVyYXR1cmVcdD0ge307XHJcblx0dGhpcy5jb20xRnJlcVx0XHRcdD0ge307XHJcblx0dGhpcy5jb20yRnJlcVx0XHRcdD0ge307XHJcbn07XHJcblxyXG4vLyBDbGFzcyBGdW5jdGlvbnNcclxuUGxhbmVzTGlzdC5wcm90b3R5cGUgPSB7XHJcblx0Z2V0TGF0TWFwOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGF0TWFwW2lwXTtcclxuXHR9LFxyXG5cdHNldExhdE1hcDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5sYXRNYXBbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TG9uTWFwOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9uTWFwW2lwXTtcclxuXHR9LFxyXG5cdHNldExvbk1hcDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5sb25NYXBbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TGF0QW50ZXJpb3JNYXA6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYXRBbnRlcmlvck1hcFtpcF07XHJcblx0fSxcclxuXHRzZXRMYXRBbnRlcmlvck1hcDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5sYXRBbnRlcmlvck1hcFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRMb25BbnRlcmlvck1hcDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmxvbkFudGVyaW9yTWFwW2lwXTtcclxuXHR9LFxyXG5cdHNldExvbkFudGVyaW9yTWFwOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmxvbkFudGVyaW9yTWFwW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEFsdE1hcDogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmFsdE1hcFtpcF07XHJcblx0fSxcclxuXHRzZXRBbHRNYXA6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuYWx0TWFwW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldEFpclNwZWVkOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWlyU3BlZWRbaXBdO1xyXG5cdH0sXHJcblx0c2V0QWlyU3BlZWQ6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuYWlyU3BlZWRbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0VlNwZWVkOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudlNwZWVkW2lwXTtcclxuXHR9LFxyXG5cdHNldFZTcGVlZDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy52U3BlZWRbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0R3JvdW5kU3BlZWQ6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ncm91bmRTcGVlZFtpcF07XHJcblx0fSxcclxuXHRzZXRHcm91bmRTcGVlZDogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5ncm91bmRTcGVlZFtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRCZWFyaW5nOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmVhcmluZ1tpcF07XHJcblx0fSxcclxuXHRzZXRCZWFyaW5nOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmJlYXJpbmdbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0RGVzdGluYXRpb246IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kZXN0aW5hdGlvbltpcF07XHJcblx0fSxcclxuXHRzZXREZXN0aW5hdGlvbjogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5kZXN0aW5hdGlvbltpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRHcHNEaXN0YW5jZU5tOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3BzRGlzdGFuY2VObVtpcF07XHJcblx0fSxcclxuXHRzZXRHcHNEaXN0YW5jZU5tOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmdwc0Rpc3RhbmNlTm1baXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0R3BzRGlzdGFuY2VUaW1lOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ3BzRGlzdGFuY2VUaW1lW2lwXTtcclxuXHR9LFxyXG5cdHNldEdwc0Rpc3RhbmNlVGltZTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5ncHNEaXN0YW5jZVRpbWVbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0QmFyb21ldGVyOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmFyb21ldGVyW2lwXTtcclxuXHR9LFxyXG5cdHNldEJhcm9tZXRlcjogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5iYXJvbWV0ZXJbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0RnVlbFF1YW50aXR5OiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVlbFF1YW50aXR5W2lwXTtcclxuXHR9LFxyXG5cdHNldEZ1ZWxRdWFudGl0eTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5mdWVsUXVhbnRpdHlbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0TmF2MUZyZXE6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYXYxRnJlcVtpcF07XHJcblx0fSxcclxuXHRzZXROYXYxRnJlcTogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5uYXYxRnJlcVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXROYXYyRnJlcTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLm5hdjJGcmVxW2lwXTtcclxuXHR9LFxyXG5cdHNldE5hdjJGcmVxOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLm5hdjJGcmVxW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldFBhdXNlOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGF1c2VbaXBdO1xyXG5cdH0sXHJcblx0c2V0UGF1c2U6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMucGF1c2VbaXBdID0gdmxyO1xyXG5cdH0sXHJcblx0Z2V0Q29tcGFzc0hlYWRpbmc6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wYXNzSGVhZGluZ1tpcF07XHJcblx0fSxcclxuXHRzZXRDb21wYXNzSGVhZGluZzogZnVuY3Rpb24oaXAsIHZscikge1xyXG5cdFx0dGhpcy5jb21wYXNzSGVhZGluZ1tpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRPdXRzaWRlVGVtcGVyYXR1cmU6IGZ1bmN0aW9uKGlwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vdXRzaWRlVGVtcGVyYXR1cmVbaXBdO1xyXG5cdH0sXHJcblx0c2V0T3V0c2lkZVRlbXBlcmF0dXJlOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLm91dHNpZGVUZW1wZXJhdHVyZVtpcF0gPSB2bHI7XHJcblx0fSxcclxuXHRnZXRDb20xRnJlcTogZnVuY3Rpb24oaXApIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbTFGcmVxW2lwXTtcclxuXHR9LFxyXG5cdHNldENvbTFGcmVxOiBmdW5jdGlvbihpcCwgdmxyKSB7XHJcblx0XHR0aGlzLmNvbTFGcmVxW2lwXSA9IHZscjtcclxuXHR9LFxyXG5cdGdldENvbTJGcmVxOiBmdW5jdGlvbihpcCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tMkZyZXFbaXBdO1xyXG5cdH0sXHJcblx0c2V0Q29tMkZyZXE6IGZ1bmN0aW9uKGlwLCB2bHIpIHtcclxuXHRcdHRoaXMuY29tMkZyZXFbaXBdID0gdmxyO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhbmVzTGlzdDtcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZGVsL1BsYW5lc0xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXV0aG9yIFVhbHRlciBKci5cclxuXHJcbmZ1bmN0aW9uIENvbnN0YW50cygpIHtcclxufTtcclxuXHJcbkNvbnN0YW50cy5wcm90b3R5cGUuREVTVElOQVRJT05cdFx0XHRcdFx0PSBcImRlc3RpbmF0aW9uXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR0FNRV9QQVVTRURcdFx0XHRcdFx0PSBcImdhbWVQYXVzZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5CQVJPTUVURVJcdFx0XHRcdFx0PSBcImJhcm9tZXRlclwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTVBBU1NfSEVBRElOR1x0XHRcdFx0PSBcImNvbXBhc3NIZWFkaW5nXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJuYXYxRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMl9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJuYXYyRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQUlSU1BFRURcdFx0XHRcdFx0PSBcImFpcnNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQUxUSVRVREVcdFx0XHRcdFx0PSBcImFsdGl0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuRlVFTF9RVUFOVElUWVx0XHRcdFx0PSBcImZ1ZWxxdWFudGl0eVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFQVV9SVU5OSU5HXHRcdFx0XHRcdD0gXCJhcHVydW5uaW5nXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMV9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJjb20xRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMl9GUkVRVUVOQ1lcdFx0XHRcdD0gXCJjb20yRnJlcUh6XCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQ09NMV9GUkVRVUVOQ1lfU1REQllcdFx0PSBcImNvbTFGcmVxSHpTdGRieVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkNPTTJfRlJFUVVFTkNZX1NUREJZXHRcdD0gXCJjb20yRnJlcUh6U3RkYnlcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5HUFNfRElTVEFOQ0VfTUVURVJTXHRcdFx0PSBcImdwc0RNRURpc3RNXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuR1BTX0RJU1RBTkNFX1NFQ09ORFNcdFx0PSBcImdwc0RNRVRpbWVTZWNzXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFNcdFx0PSBcIm5hdjFETUVEaXN0Tm1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYxX0RJU1RBTkNFX01JTlVURVNcdFx0PSBcIm5hdjFETUVEaXN0TWluXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuTkFWMl9ESVNUQU5DRV9OQVVUSUNBTFNcdFx0PSBcIm5hdjJETUVEaXN0Tm1cIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5OQVYyX0RJU1RBTkNFX01JTlVURVNcdFx0PSBcIm5hdjJETUVEaXN0TWluXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuT1VUU0lERV9URU1QRVJBVFVSRV9DRUxTSVVTXHQ9IFwib3V0c2lkZVRlbXBDXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuVkVSVElDQUxfU1BFRURcdFx0XHRcdD0gXCJ2c0ZwbVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkdST1VORF9TUEVFRFx0XHRcdFx0PSBcImdyb3VuZHNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuVFJVRV9BSVJTUEVFRFx0XHRcdFx0PSBcInRydWVfYWlyc3BlZWRcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5MQVRJVFVERVx0XHRcdFx0XHQ9IFwibGF0aXR1ZGVcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5MT05HSVRVREVcdFx0XHRcdFx0PSBcImxvbmdpdHVkZVwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLldFSUdIVF9UT1RBTF9GVUVMXHRcdFx0PSBcIndlaWdodFRvdGFsRnVlbFwiO1xyXG5Db25zdGFudHMucHJvdG90eXBlLkFVVE9QSUxPVF9NT0RFXHRcdFx0XHQ9IFwiYXV0b3BpbG90TW9kZVwiO1x0XHQvLyAob2ZmPTAsZmxpZ2h0IGRpcmVjdG9yPTEsIG9uPTIpXHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0FMVElUVURFXHRcdFx0PSBcImF1dG9waWxvdEFsdGl0dWRlXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX1ZFUlRJQ0FMX1NQRUVEXHQ9IFwiYXV0b3BpbG90VlNcIjtcclxuQ29uc3RhbnRzLnByb3RvdHlwZS5BVVRPUElMT1RfQUlSUFNQRUVEXHRcdFx0PSBcImF1dG9waWxvdEFpclNwZWVkXCI7XHJcbkNvbnN0YW50cy5wcm90b3R5cGUuQVVUT1BJTE9UX0hFQURJTkdcdFx0XHQ9IFwiYXV0b3BpbG90SGVhZGluZ1wiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb25zdGFudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kZWwvQ29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyk7XHJcbmNvbnN0IGxvZ2dlciAgPSByZXF1aXJlKCcuL3V0aWxzL2xvZ2dlci5qcycpKG1vZHVsZSk7XHJcbmNvbnN0IG1vZGVsICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XHJcbmNvbnN0IGh0dHAgICAgPSByZXF1aXJlKCdodHRwJyk7XHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcblxyXG5jb25zdCBQT1JUICAgICA9IDgwMDA7XHJcbmNvbnN0IEhPU1QgICAgID0gJzE5Mi4xNjguMC4yMic7XHJcbmNvbnN0IGFwcCAgICAgID0gZXhwcmVzcygpO1xyXG5cclxudmFyIHBsYW5lc0xpc3QgPSBuZXcgbW9kZWwuUGxhbmVzTGlzdCgpO1xyXG5cclxuYXBwLnVzZSggKGVyciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcclxuICBsb2dnZXIuZXJyb3IoZXJyKTtcclxuICByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKCdTb21ldGhpbmcgYnJva2UhJylcclxufSlcclxuXHJcbmFwcC5nZXQoXCIvaGVsbG9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5lbmQoJ0hlbGxvIScpO1xyXG59KVxyXG5cclxuYXBwLmdldChcIi9cIiwgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAvL3Jlc3BvbnNlLnNlbmRGaWxlKFwiaW5kZXguaHRtbFwiLCB7XCJyb290XCI6IF9fZGlybmFtZX0pO1xyXG4gICAgcmVzcG9uc2Uuc2VuZEZpbGUoXCJjOi9Vc2Vycy9VYWx0ZXIvRGV2ZWxvcGVyL3gtbmF2aWdhdC94LW5hdmlnYXQvZGlzdC9pbmRleC5odG1sXCIpO1xyXG59KVxyXG5cclxuYXBwLmdldChcIi9kYXRhXCIsIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2UudHlwZSgnanNvbicpO1xyXG4gICAgLy8gTm9uIFByZXR0eS1QcmludFxyXG4gICAgLy9yZXNwb25zZS5zZW5kKCBwbGFuZXNMaXN0ICk7XHJcbiAgICAvLyBQcmV0dHktUHJpbnRcclxuICAgIHJlc3BvbnNlLnNlbmQoSlNPTi5zdHJpbmdpZnkocGxhbmVzTGlzdCwgbnVsbCwgNCkpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5hcHAubGlzdGVuKFBPUlQsIChlcnIpID0+IHtcclxuXHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkuc3RhY2spO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZXIuaW5mbygnSFRUUCBTZXJ2ZXIgbGlzdGVuaW5nIG9uICcgKyBIT1NUICsgXCI6XCIgKyBQT1JUKTtcclxufSlcclxuXHJcbnZhciByZWNlaXZlVXBkYXRlID0gZnVuY3Rpb24gKF9wbGFuZXNMaXN0KSB7XHJcbiAgICBwbGFuZXNMaXN0ID0gX3BsYW5lc0xpc3Q7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVjZWl2ZVVwZGF0ZTogcmVjZWl2ZVVwZGF0ZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2h0dHAtc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvdXRpbHMuanMnKTtcclxuY29uc3QgbG9nZ2VyICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9sb2dnZXIuanMnKShtb2R1bGUpO1xyXG5jb25zdCBtb2RlbCAgICAgICAgPSByZXF1aXJlKCcuL21vZGVsJyk7XHJcbmNvbnN0IGRncmFtICAgICAgICA9IHJlcXVpcmUoJ2RncmFtJyk7XHJcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xyXG5cclxuY29uc3QgUE9SVCAgID0gODg4MTtcclxuY29uc3QgSE9TVCAgID0gJzE5Mi4xNjguMC4yMic7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBkZ3JhbS5jcmVhdGVTb2NrZXQoJ3VkcDQnKTtcclxuXHJcbnNlcnZlci5vbignbGlzdGVuaW5nJywgc3RhcnRTZXJ2ZXIpO1xyXG5zZXJ2ZXIub24oJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSk7XHJcbnNlcnZlci5iaW5kKFBPUlQsIEhPU1QpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoKSB7XHJcblx0dmFyIGFkZHJlc3MgPSBzZXJ2ZXIuYWRkcmVzcygpO1xyXG5cdGxvZ2dlci5pbmZvKCdVRFAgU2VydmVyIGxpc3RlbmluZyBvbiAnICsgYWRkcmVzcy5hZGRyZXNzICsgXCI6XCIgKyBhZGRyZXNzLnBvcnQpO1xyXG59XHJcblxyXG5jbGFzcyBNeUVtaXR0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge31cclxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IE15RW1pdHRlcigpO1xyXG5leHBvcnRzLmV2ZW50RW1pdHRlciA9IGV2ZW50RW1pdHRlcjtcclxuXHJcbmNvbnN0IENvbnN0YW50cyA9IG5ldyBtb2RlbC5Db25zdGFudHMoKTtcclxuXHJcbmZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKG1lc3NhZ2UsIHJlbW90ZSkge1xyXG5cdHRyeSB7XHJcblx0XHRcclxuXHRcdHZhciBwbGFuZXNMaXN0ID0gbmV3IG1vZGVsLlBsYW5lc0xpc3QoKTtcclxuXHRcdHZhciBpcCAgICAgICAgID0gcmVtb3RlLmFkZHJlc3M7XHJcblx0XHR2YXIgbXNncyAgICAgICA9IG1lc3NhZ2UudG9TdHJpbmcoJ3V0ZjgnKTtcclxuXHJcblx0XHRsb2dnZXIuaW5mbyhcIk1lc3NhZ2UgcmVjZWl2ZWQ6ICVzXCIsbXNncyk7XHJcblxyXG5cdCAgIFx0bXNncy5zcGxpdChcIjtcIikubWFwKCBtc2cgPT4ge1xyXG5cclxuXHQgICBcdFx0dmFyIGFyciAgID0gbXNnLnNwbGl0KFwiPVwiKTtcclxuXHQgICBcdFx0dmFyIGxhYmVsID0gYXJyWzBdO1xyXG5cdCAgIFx0XHR2YXIgdmFsdWUgPSBhcnJbMV07XHJcblxyXG5cdCAgIFx0XHRzd2l0Y2gobGFiZWwpIHtcclxuXHQgICBcdFx0XHQgY2FzZSBDb25zdGFudHMuREVTVElOQVRJT046IHtcclxuXHQgICBcdFx0XHRcdHBsYW5lc0xpc3Quc2V0RGVzdGluYXRpb24oaXAsdmFsdWUpXHJcblx0ICAgXHRcdFx0XHRicmVhaztcclxuXHQgICBcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5HQU1FX1BBVVNFRDoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0UGF1c2UoaXAsdmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkJBUk9NRVRFUjoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0QmFyb21ldGVyKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT01QQVNTX0hFQURJTkc6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldENvbXBhc3NIZWFkaW5nKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5OQVYxX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0TmF2MUZyZXEoaXAsdmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRlJFUVVFTkNZOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXROYXYyRnJlcShpcCx2YWx1ZSlcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQUlSU1BFRUQ6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldEFpclNwZWVkKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BTFRJVFVERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuRlVFTF9RVUFOVElUWToge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0RnVlbFF1YW50aXR5KGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BUFVfUlVOTklORzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQ09NMV9GUkVRVUVOQ1k6IHtcclxuXHRcdFx0XHQgXHRwbGFuZXNMaXN0LnNldENvbTFGcmVxKGlwLHZhbHVlKVxyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00yX0ZSRVFVRU5DWToge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0Q29tMkZyZXEoaXAsdmFsdWUpXHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkNPTTFfRlJFUVVFTkNZX1NUREJZOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5DT00yX0ZSRVFVRU5DWV9TVERCWToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX01FVEVSUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1BTX0RJU1RBTkNFX1NFQ09ORFM6IHtcclxuXHRcdFx0XHQgXHQvKlxyXG5cdFx0XHRcdCBcdGZsb2F0IGRpc3RhbmNlTWludXRlcyA9IDA7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRkaXN0YW5jZU1pbnV0ZXMgPSBGbG9hdC5wYXJzZUZsb2F0KHZhbHVlKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKE51bWJlckZvcm1hdEV4Y2VwdGlvbiBlKSB7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlTWludXRlcyA+IDApIHtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZU1pbnV0ZXMgPSAoaW50KSBkaXN0YW5jZU1pbnV0ZXM7XHJcblx0XHRcdFx0XHRcdGludCBpRGlzdGFuY2VTZWNvbmRzID0gKGludCkgKChkaXN0YW5jZU1pbnV0ZXMgLSBpRGlzdGFuY2VNaW51dGVzKSAqIDYwKTtcclxuXHRcdFx0XHRcdFx0aW50IGlEaXN0YW5jZUhvdXJzID0gKGludCkgKGRpc3RhbmNlTWludXRlcyAvIDYwKTtcclxuXHRcdFx0XHRcdFx0U3RyaW5nIHJlc3VsdCA9IGRmLmZvcm1hdChpRGlzdGFuY2VIb3VycykgKyBcIjpcIiArIGRmLmZvcm1hdChpRGlzdGFuY2VNaW51dGVzKSArIFwiOlwiICsgZGYuZm9ybWF0KGlEaXN0YW5jZVNlY29uZHMpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdwc0Rpc3RhbmNlVGltZS5wdXQoaXAudG9TdHJpbmcoKSwgcmVzdWx0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ3BzRGlzdGFuY2VUaW1lLnB1dChpcC50b1N0cmluZygpLCBcIjBcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0IFx0Ki9cclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMV9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjFfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuTkFWMl9ESVNUQU5DRV9OQVVUSUNBTFM6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLk5BVjJfRElTVEFOQ0VfTUlOVVRFUzoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuT1VUU0lERV9URU1QRVJBVFVSRV9DRUxTSVVTOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXRPdXRzaWRlVGVtcGVyYXR1cmUoaXAsdmFsdWUpO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5WRVJUSUNBTF9TUEVFRDoge1xyXG5cdFx0XHRcdCBcdHBsYW5lc0xpc3Quc2V0VlNwZWVkKGlwLHZhbHVlKTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdFx0IH1cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuR1JPVU5EX1NQRUVEOiB7XHJcblx0XHRcdFx0IFx0cGxhbmVzTGlzdC5zZXRHcm91bmRTcGVlZChpcCx2YWx1ZSk7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLlRSVUVfQUlSU1BFRUQ6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkxBVElUVURFOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5MT05HSVRVREU6IHtcclxuXHRcdFx0XHQgXHQvKlxyXG5cdFx0XHRcdCBcdHRoaXMubGF0TWFwLnB1dChpcC50b1N0cmluZygpLCBuZXcgRmxvYXQobGF0aXR1ZGUpKTtcclxuXHRcdFx0XHRcdHRoaXMubG9uTWFwLnB1dChpcC50b1N0cmluZygpLCBuZXcgRmxvYXQobG9uZ2l0dWRlKSk7XHJcblxyXG5cdFx0XHRcdFx0ZmxvYXQgbGF0MSA9IHRoaXMuZ2V0TGF0QW50ZXJpb3JNYXAoKS5jb250YWluc0tleShpcC50b1N0cmluZygpKSA/IHRoaXMuZ2V0TGF0QW50ZXJpb3JNYXAoKS5nZXQoaXAudG9TdHJpbmcoKSkgOiAwO1xyXG5cdFx0XHRcdFx0ZmxvYXQgbG9uMSA9IHRoaXMuZ2V0TG9uQW50ZXJpb3JNYXAoKS5jb250YWluc0tleShpcC50b1N0cmluZygpKSA/IHRoaXMuZ2V0TG9uQW50ZXJpb3JNYXAoKS5nZXQoaXAudG9TdHJpbmcoKSkgOiAwO1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxjdWxhdGVCZWFyaW5nKGlwLCBsYXQxLCBsb24xLCBuZXcgRmxvYXQobGF0aXR1ZGUpLCBuZXcgRmxvYXQobG9uZ2l0dWRlKSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5sYXRBbnRlcmlvck1hcC5wdXQoaXAudG9TdHJpbmcoKSwgbmV3IEZsb2F0KGxhdGl0dWRlKSk7XHJcblx0XHRcdFx0XHR0aGlzLmxvbkFudGVyaW9yTWFwLnB1dChpcC50b1N0cmluZygpLCBuZXcgRmxvYXQobG9uZ2l0dWRlKSk7XHJcblx0XHRcdFx0IFx0Ki9cclxuXHRcdFx0XHQgXHRicmVhaztcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5XRUlHSFRfVE9UQUxfRlVFTDoge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX01PREU6IHticmVhazt9XHJcblx0XHRcdFx0IGNhc2UgQ29uc3RhbnRzLkFVVE9QSUxPVF9BTFRJVFVERToge2JyZWFrO31cclxuXHRcdFx0XHQgY2FzZSBDb25zdGFudHMuQVVUT1BJTE9UX1ZFUlRJQ0FMX1NQRUVEOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfQUlSUFNQRUVEOiB7YnJlYWs7fVxyXG5cdFx0XHRcdCBjYXNlIENvbnN0YW50cy5BVVRPUElMT1RfSEVBRElORzoge2JyZWFrO31cclxuXHQgICBcdFx0XHQgZGVmYXVsdDpcclxuXHQgICBcdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdCAgIH1cclxuXHRcdFx0ICAgXHJcblx0ICAgXHRcdCAgIGxvZ2dlci5kZWJ1ZyhcIk1lc3NhZ2UuLi46ICVzIC0gJXNcIixsYWJlbCx2YWx1ZSk7XHJcblx0XHR9KTtcclxuXHRcdCAgIFxyXG5cdFx0ZXZlbnRFbWl0dGVyLmVtaXQoJ3JlY2VpdmVkTWVzc2FnZScsIHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICBcdFx0bG9nZ2VyLmVycm9yKG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSkuc3RhY2spO1xyXG4gICBcdFx0dGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3VkcC1zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuL2pzL3V0aWxzL3V0aWxzLmpzJztcclxuaW1wb3J0ICcuL2pzL21vZGVsL2luZGV4LmpzJztcclxuaW1wb3J0ICcuL2pzL21vZGVsL0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCAnLi9qcy9tb2RlbC9QbGFuZXNMaXN0LmpzJztcclxuaW1wb3J0ICcuL2pzL3V0aWxzL2xvZ2dlci5qcyc7XHJcbmltcG9ydCAnLi9qcy9odHRwLXNlcnZlci5qcyc7XHJcbmltcG9ydCAnLi9qcy91ZHAtc2VydmVyLmpzJztcclxuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgtYmFjay5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZ3JhbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRncmFtXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2ZW50c1wiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB1dGlscyAgICAgID0gcmVxdWlyZSgnLi91dGlscy91dGlscy5qcycpO1xyXG5jb25zdCBsb2dnZXIgICAgID0gcmVxdWlyZSgnLi91dGlscy9sb2dnZXIuanMnKShtb2R1bGUpO1xyXG5jb25zdCBtb2RlbCAgICAgID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xyXG5jb25zdCB1ZHBTZXJ2ZXIgID0gcmVxdWlyZSgnLi91ZHAtc2VydmVyLmpzJyk7XHJcbmNvbnN0IGh0dHBTZXJ2ZXIgPSByZXF1aXJlKCcuL2h0dHAtc2VydmVyLmpzJyk7XHJcblxyXG52YXIgcGxhbmVzTGlzdCA9IG5ldyBtb2RlbC5QbGFuZXNMaXN0KCk7XHJcblxyXG5sb2dnZXIuaW5mbygnU3RhcnQgeC1uYXZpZ2F0Li4uJyk7XHJcblxyXG51ZHBTZXJ2ZXIuZXZlbnRFbWl0dGVyLm9uKCdyZWNlaXZlZE1lc3NhZ2UnLCAoX3BsYW5lc0xpc3QpID0+IHtcclxuICAgIHBsYW5lc0xpc3QgICAgICAgICAgICA9IF9wbGFuZXNMaXN0O1xyXG4gICAgaHR0cFNlcnZlci5yZWNlaXZlVXBkYXRlKHBsYW5lc0xpc3QpO1xyXG5cclxuICAgIGxvZ2dlci5kZWJ1ZyhcIl9wbGFuZXNMaXN0Li4uOiAlc1wiLF9wbGFuZXNMaXN0KTtcclxufSk7XHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9