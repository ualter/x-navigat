

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

