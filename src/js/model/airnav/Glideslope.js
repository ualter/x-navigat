// Author Ualter Jr.


// Class Constructor and Attributes
function Glideslope(number, frequency, latitude, longitude, heading, elevation, length) {
    this.number       = number;
    this.frequency    = frequency;
    this.latitude     = latitude;
    this.longitude    = longitude;
    this.heading      = heading;
    this.elevation    = elevation;
    this.length       = length
};

// Class Functions
Glideslope.prototype = {
    getNumber: function(){
      return this.number;
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
    getHeading: function() {
		  return this.heading;
    },
    getElevation: function() {
        return this.elevation;
    },
    getHeading: function() {
        return this.length;
    },
    toString: function() {
        return "Glideslope: [ number:" + this.number + ", frenquency:" + this.frequency + ", latitude:" + this.latitude + ", longitude:" + this.longitude + ", heading:" + this.heading  + ", elevation:" + this.elevation + ", length:" + this.length + " ]";
    }
};

module.exports = Glideslope;
