// Author Ualter Jr.


// Class Constructor and Attributes
function Navaid(code, description, frequency, latitude, longitude, type) {
    this.code         = code;
	  this.description  = description;
    this.frequency    = frequency;
    this.latitude     = latitude;
    this.longitude    = longitude;
    this.type         = type;
};

// Class Functions
Navaid.prototype = {
    getCode: function(){
      return this.code;
    },
	  getDescription: function() {
		  return this.description;
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
    getType: function() {
		  return this.type;
    },
    toString: function() {
        return "[" + this.code + "," + this.description + "," + this.frequency + "," + this.latitude + "," + this.longitude + "," + this.type  + "]";
    }
};

Navaid.VOR = "VOR";
Navaid.NDB = "NDB";

module.exports = Navaid;
