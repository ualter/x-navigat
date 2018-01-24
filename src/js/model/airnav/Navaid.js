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
        return this.type + ": [ code:" + this.code + ", description:" + this.description + ", frequency:" + this.frequency + ", latitude:" + this.latitude + ", longitude:" + this.longitude + ", type:" + this.type  + " ]";
    }
};

Navaid.VOR = "VOR";
Navaid.NDB = "NDB";

module.exports = Navaid;
