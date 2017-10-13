const utils   = require('./utils/utils.js');
const logger  = require('./utils/logger.js')(module);
const model   = require('./model');
const http    = require('http');
const express = require('express');

const PORT     = 8000;
const HOST     = '192.168.0.22';
const app      = express();

var planesList = new model.PlanesList();

app.use( (err, request, response, next) => {
  logger.error(err);
  response.status(500).send('Something broke!')
})

app.get("/hello", (request, response) => {
    response.end('Hello!');
})

app.get("/", (request, response) => {
    //response.sendFile("index.html", {"root": __dirname});
    response.sendFile("c:/Users/Ualter/Developer/x-navigat/x-navigat/dist/index.html");
})

app.get("/data", (request, response) => {
    response.type('json');
    // Non Pretty-Print
    //response.send( planesList );
    // Pretty-Print
    response.send(JSON.stringify(planesList, null, 4));
    
})

app.listen(PORT, (err) => {

    if (err) {
        logger.error(new Error(err.toString()).stack);
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
