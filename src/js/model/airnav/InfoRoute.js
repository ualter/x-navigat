// Author Ualter Jr.


// Class Constructor and Attributes
function InfoRoute(nextPoint,currentPoint,distance,distanceNM,bearing,bearingDegree,latitude,longitude,nextLatitude,nextLongitude,compassHeading) {
    this.nextPoint      = nextPoint;
    this.currentPoint   = currentPoint;
    this.distance       = distance;
    this.distanceNM     = distanceNM;
    this.bearing        = bearing;
    this.bearingDegree  = bearingDegree;
    this.latitude       = latitude;
    this.longitude      = longitude;
    this.nextLatitude   = nextLatitude;
    this.nextLongitude  = nextLongitude;
    this.compassHeading = compassHeading;
};

InfoRoute.prototype = {
    getNextPoint: function(){
        return this.nextPoint;
    },
    getCurrentPoin: function(){
        return this.currentPoint;
    },
    getDistance: function(){
        return this.distance;
    },
    getDistanceNM: function(){
        return this.distanceNM;
    },
    getBearing: function(){
        return this.bearing;
    },
    getBearingDegree: function(){
        return this.bearingDegree;
    },
    getLatitude: function(){
        return this.latitude;
    },
    getLongitude: function(){
        return this.longitude;
    },
    getNextLatitude: function(){
        return this.nextLatitude;
    },
    getNextLongitude: function(){
        return this.nextLongitude;
    },
    getCompassHeading: function(){
        return this.compassHeading;
    },
    toString: function() {
        return "InfoRoute: [" + 
            this.nextPoint + "," + 
            this.currentPoint + "," + 
            this.distance + "," + 
            this.distanceNM + "," + 
            this.bearing + "," + 
            this.bearingDegree + "," + 
            this.latitude + "," + 
            this.longitude + "," + 
            this.nextLatitude + "," + 
            this.nextLongitude + "," + 
            this.compassHeading + "]";
    }
};

module.exports = InfoRoute;