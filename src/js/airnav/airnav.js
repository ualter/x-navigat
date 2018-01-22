const config   = require('../config');
const logger   = require('../utils/logger.js')(module);
const readline = require('readline');
const fs       = require('fs');
const path     = require('path');


try {

    var fileName = config.airnav.pathFiles + '/earth_nav.dat';
    if ( fs.existsSync(fileName) ) {
        logger.debug("Reading file %s", fileName);

        var lineReader = readline.createInterface({
            input: fs.createReadStream(fileName)
        });
        lineReader.on('line', function (line) {
            console.log('Line from file:', line);
        });
    } else {
        var error = new Error("File '" + fileName + "' was not found!");
        throw error;
    }

} catch (err) {
    logger.error(new Error(err.toString()).stack);
    throw err;
}

