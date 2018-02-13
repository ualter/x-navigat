// Author Ualter Jr.


// Class Constructor and Attributes
function Waypoint(id, latitude, longitude, type, frequency, name) {
    this.id        = id;
    this.latitude  = latitude;
    this.longitude = longitude;
    this.type      = type;
    this.frequency = frequency;
    this.name      = name;

};

Waypoint.prototype = {
    getId: function(){
        return this.id;
    },
    getLongitude: function(){
        return this.longitude;
    },
    getLatitude: function(){
        return this.latitude;
    },
    getType: function(){
        return this.type;
    },
    getFrequency: function(){
        return this.frequency;
    },
    getName: function(){
        return this.name;
    },
    toString: function() {
        return "Waypoint: [" + 
            this.id + "," + 
            this.name + "," + 
            this.latitude + "," + 
            this.longitude + "," + 
            this.type + "," + 
            this.frequency + "]";
    }
};

module.exports = Waypoint;