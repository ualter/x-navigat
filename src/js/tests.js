// Author Ualter Jr.

const model   = require('./model');
const airnav  = require('./airnav');
const logger  = require('./utils/logger.js')(module);
const config  = require('./config');

var req = "/flightplan?departure=LEBL&waypoints=SLL1%2BMARIO1%2B&destination=LEMD&_=1518289907529";
req

/*
var airNav = new airnav.Airnav();
airNav
    .on('startLoad', (data) => {
        console.log(data);
    })
    .on('loadedAirport', (airport) => {
        console.log(`Loading Airport..: ${airport.icaoId}`);
    })
    .on('loadedDme', (data) => {
        //console.log(data);
    }).on('endLoad', (data) => {
        console.log(data);
        console.log(airNav.getListAirports['LEBL'].toString());
    });
airNav.load();
*/


//setTimeout(function(){ "Hello"; }, 10000);


/*

testJsonModel();

function testJsonModel() {
    var planesList = new model.PlanesList();

    var airPlane1 = new model.AirPlane();
    airPlane1.setLatMap(12);
    airPlane1.setAirSpeed(340);

    var airPlane2 = new model.AirPlane();
    airPlane2.setLatMap(20);
    airPlane2.setAirSpeed(450);

    planesList.addAirPlane("192.168.0.1",airPlane1);
    planesList.addAirPlane("200.245.20.3",airPlane2);

    console.log(JSON.stringify(planesList, null, 4));

    for(var ip in planesList.airPlanes) {
        console.log("----> " + ip);
        console.log(planesList.getAirPlane(ip).getLatMap());
        console.log(planesList.airPlanes[ip].latMap);
        console.log(planesList.airPlanes[ip].airSpeed);
    }
}
*/

