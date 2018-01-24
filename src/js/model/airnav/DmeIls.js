// Author Ualter Jr.


// Class Constructor and Attributes
function DmeIls(frequency, description, latitude, longitude, icaoId) {
    this.frequency    = frequency;
	this.description  = description;
    this.latitude     = latitude;
    this.longitude    = longitude;
    this.icaoId       = icaoId;
};

// Class Functions
DmeIls.prototype = {
    getFrequency: function() {
        return this.frequency;
    },
    getDescription: function() {
		  return this.description;
    },
    getLatitude: function() {
		  return this.latitude;
    },
    getLongitude: function() {
		  return this.longitude;
    },
    getIcaoId: function(){
        return this.icaoId;
    },
    toString: function() {
        return "DmeIls: [ Frequency:" + this.frequency + ", description:" + this.description + ", latitude:" + this.latitude + ", longitude:" + this.longitude + ", IcaoID:" + this.icaoId +  " ]";
    }
};

module.exports = DmeIls;
