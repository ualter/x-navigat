const utils      = require('./utils/utils.js');
const logger     = require('./utils/logger.js')(module);
const model      = require('./model');
const udpServer  = require('./udp-server.js');
const httpServer = require('./http-server.js');

var planesList = new model.PlanesList();

logger.info('Start x-navigat...');

udpServer.eventEmitter.on('receivedMessage', (_planesList) => {
    planesList            = _planesList;
    httpServer.receiveUpdate(planesList);

    logger.debug("_planesList...: %s",_planesList);
});


