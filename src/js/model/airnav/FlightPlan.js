// Author Ualter Jr.


// Class Constructor and Attributes
function FlightPlan(departure, destination) {
    this.departure   = departure;
    this.destination = destination;
    this.waypoint    = {};
    this.inforoute   = {};
};

FlightPlan.prototype = {
    getDeparture: function(){
        return this.departure;
    },
    getDestination: function(){
        return this.destination;
    },
    
};

module.exports = FlightPlan;