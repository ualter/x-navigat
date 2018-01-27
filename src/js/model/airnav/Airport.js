// Author Ualter Jr.


// Class Constructor and Attributes
function Airport(icaoId, name, latitude, longitude) {
    this.icaoId       = icaoId;
	this.name         = name;
    this.latitude     = latitude;
    this.longitude    = longitude;
    this.runways      = {};
    this.glideSlopes  = {};
};

// Class Functions
Airport.prototype = {
    getIcaoId: function(){
        return this.icaoId;
    },
	getName: function() {
		return this.name;
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
    addGlideSlope(number, glideSlope) {
        this.glideSlopes[number] = glideSlope;
    },
    getGlideSlope(number) {
        return this.glideSlopes[number];
    },
    getAllGlideSlopes() {
        return this.glideSlopes;
    },
    toString: function() {
        var r    = "";
        for(number in this.runways) {
            r = r + number + ", "
        }
        var runs = "Runways: [" + r + "]";

        var g    = "";
        for(number in this.glideSlopes) {
            g = g + number + ", "
        }
        var glides = "GlideSlopes: [" + r + "]";

        return "Airport: [" + 
            this.icaoId + "," + 
            this.name + "," + 
            this.latitude + "," + 
            this.longitude + "," + 
            runs + "," +
            glides +
            "]";
    }
};

module.exports = Airport;
