const model = require('./src/js/model');

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

// console.log(planesList.getAirPlane("localhost").airSpeed);
// console.log(planesList.airPlane["localhost"].airSpeed);