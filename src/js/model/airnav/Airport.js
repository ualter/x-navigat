// Author Ualter Jr.


// Class Constructor and Attributes
function Airport(icaoId, name, frequency, latitude, longitude) {
    this.icaoId       = icaoId;
	this.name         = name;
    this.frequency    = frequency;
    this.latitude     = latitude;
    this.longitude    = longitude;
    this.runways      = {};
};

// Class Functions
Airport.prototype = {
    getIcaoId: function(){
        return this.icaoId;
    },
	getName: function() {
		return this.name;
    },
    getFrequency: function() {
		return this.frequency;
    },
    getLatitude: function() {
		return this.latitude;
    },
    getLongitude: function() {
		return this.longitude;
    },
    addRunway(number, runway) {
        this.runways[number] = runway;
    },
    getRunway(number) {
        return this.runways[number];
    },
    getAllRunways() {
        return this.runways;
    },
    toString: function() {
        var r    = "";
        for(number in this.runways) {
            r = r + number + ", "
        }
        runs = "Runways: [" + r + "]";

        return "[" + this.icaoId + "," + this.name + "," + this.frequency + "," + this.latitude + "," + this.longitude + "," + runs + "]";
    }
};

module.exports = Airport;
