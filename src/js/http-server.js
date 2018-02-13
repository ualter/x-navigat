// Author Ualter Jr.

const utils     = require('./utils/utils.js');
const logger    = require('./utils/logger.js')(module);
const model     = require('./model');
const http      = require('http');
const express   = require('express');
const ip        = require("ip");
const path      = require('path');
const appRoot   = require('app-root-path');
 
const PORT      = 8000;
const HOST      = ip.address(); //'192.168.0.22';
const pathFiles = appRoot.path + "\\dist";
const app       = express();

var planesList = new model.PlanesList();

// Ups!
app.use( (err, request, response, next) => {
  logger.error(err);
  response.status(500).send('Something broke!')
})

// For tests only
app.get("/hello", (request, response) => {
    response.end('Hello!');
})

// User Interface Start
app.get("/", (request, response) => {
    response.sendFile(pathFiles + "\\index.html");
})

// Scripts
app.get("/front.bundle.js", (request, response) => {
    response.sendFile(pathFiles + "\\front.bundle.js");
})
app.get("/numeral.min.js", (request, response) => {
    response.sendFile(pathFiles + "\\libs\\numeral.min.js");
})
app.get("/markerwithlabel.js", (request, response) => {
    response.sendFile(pathFiles + "\\libs\\markerwithlabel.js");
})
app.get("/jquery-blink.js", (request, response) => {
    response.sendFile(pathFiles + "\\libs\\jquery-blink.js");
})

// Images
app.get("/loading.gif", (request, response) => {
    response.sendFile(pathFiles + "\\images\\loading.gif");
})

// Data game
app.get("/data", (request, response) => {
    response.type('json');
    // Non Pretty-Print
    //response.send( airPlane );
    // Pretty-Print
    response.send(JSON.stringify(planesList.getAllAirPlanes(), null, 4));
})

// Data game
app.get("/flightplan", (request, response) => {
    response.type('json');
    console.log(request.query.departure);
    // TODO: Load the FlightPlan coming in the Request and send it back in JSON
    // 1) Receive the parameters: /flightplan?departure=LEBL&waypoints=SLL1%2BMARIO1%2B&destination=LEMD&_=1518289907529
    // 2) Extract and interprets each one of them (departure, waypoitns, destination, etc.)
    // 3) Load them from the loaded database 
    // 4) 

    response.send(JSON.stringify(planesList.getAllAirPlanes(), null, 4));
})

app.listen(PORT, (err) => {

    if (err) {
        logger.error(new Error(err.toString()));
        throw err;
    }

    logger.info('HTTP Server listening on ' + HOST + ":" + PORT);
})

var receiveUpdate = function (_planesList) {
    planesList = _planesList;
}

module.exports = {
    receiveUpdate: receiveUpdate
}
