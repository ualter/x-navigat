// Author Ualter Jr.

// Class Constructor and Attributes
function AirPlane() {
	this.latMap				= "";
	this.lonMap				= "";
	this.latAnteriorMap		= "";
	this.lonAnteriorMap		= "";
	this.altMap				= "";
	this.airSpeed			= "";
	this.vSpeed				= "";
	this.groundSpeed		= "";
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
	}
};

module.exports = AirPlane;

