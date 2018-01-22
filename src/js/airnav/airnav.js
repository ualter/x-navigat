// Author Ualter Jr.

const config   = require('../config');
const logger   = require('../utils/logger.js')(module);
const readline = require('readline');
const fs       = require('fs');
const path     = require('path');
const model    = require('./../model/airnav');

try {

    var fileName = config.airnav.pathFiles + '/earth_nav.dat';
    if ( fs.existsSync(fileName) ) {
        logger.debug("Reading file %s", fileName);

        var lineReader = readline.createInterface({
            input: fs.createReadStream(fileName)
        });

        lineReader.on('line', function (line) {
            var id          = parseInt(line.substring(1,2).trim());
            var latitude    = line.substring(4,16).trim();
            var longitude   = line.substring(18,31).trim();
            var col4        = line.substring(33,40).trim();
            var frequency   = line.substring(42,49).trim();
            var col6        = line.substring(42,49).trim();
            var col7        = line.substring(51,55).trim();
            var code        = line.substring(57,66).trim();
            var col9        = line.substring(68,71).trim();
            var col10       = line.substring(72,76).trim();
            var col11       = line.substring(78,79).trim();
            var description = line.substring(81).trim();

            var airnav;
            switch (id) {
                case 3:
                    airnav = new model.Navaid(code, description, frequency, latitude, longitude, model.Navaid.VOR);        
                    logger.debug(airnav);
                    break;
                default:
                    break;
            }
            
            //logger.debug( id + ", " + latitude + "," + longitude + "," + col4 + "," + frequency + "," + col6 + "," + col7 + "," + code + "," + col9 + "," + col10 + "," + col11 + "," + description);
        });

    } else {
        var error = new Error("File '" + fileName + "' was not found!");
        throw error;
    }

} catch (err) {
    logger.error(new Error(err.toString()).stack);
    throw err;
}


