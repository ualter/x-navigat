const config     = require('./config');
const utils      = require('./utils/utils.js');
const logger     = require('./utils/logger.js')(module);
const model      = require('./model');
const udpServer  = require('./udp-server.js');
const httpServer = require('./http-server.js');

var planesList = new model.PlanesList();

logger.info('Start x-navigat...');

udpServer.eventEmitter.on('receivedMessage', (_planesList) => {
    planesList = _planesList;
    httpServer.receiveUpdate(planesList);

    Object.keys(planesList.getAllAirPlanes()).forEach(ipAirPlane => {
        airPlane = planesList.getAirPlane(ipAirPlane);
        logger.info("Airplane '%s' at Longitude/Latitude: %s/%s, AirSpeed: %s", airPlane.getIp(),airPlane.getLatMap(), airPlane.getLonMap(), airPlane.getAirSpeed());
    });

    logger.debug("List of airplanes...: %s", JSON.stringify(planesList, null, 4));
});


