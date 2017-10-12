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

