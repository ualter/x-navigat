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
            var col8        = line.substring(57,66).trim();
            var col9        = line.substring(68,71).trim();
            var col10       = line.substring(72,76).trim();
            var col11       = line.substring(77,79).trim();
            var col12       = line.substring(80).trim();

            var airnav;
            var runway;
            var dmeIls;
            console.log("col6:" + col6 + ", col7:" + col7 + ", col8:" + col8 + ", col9:" + col9 + ", col10:" + col10 + ", col11:" + col11 );
            switch (id) {
                // NDB
                case 2:
                    // code, description, frequency, latitude, longitude, type
                    airnav = new model.Navaid(col8, col12, frequency, latitude, longitude, model.Navaid.NDB);        
                    logger.debug("Loaded...: " + airnav);
                    break;
                // VOR    
                case 3:
                    // code, description, frequency, latitude, longitude, type
                    airnav = new model.Navaid(col8, col12, frequency, latitude, longitude, model.Navaid.VOR);        
                    logger.debug("Loaded...: " + airnav);
                    break;
                // RUNWAY    
                case 8:
                    // number, frequency, latitude, longitude, heading, elevation, length
                    runway = new model.Runway(col12, frequency, latitude, longitude, parseInt(col8), 0, 0);
                    logger.debug("Loaded...: " + runway);
                    break;
                // DME-ILS    
                case 12:
                    // number, frequency, latitude, longitude, heading, elevation, length
                    //dmeIls = new model.DmeIls(col12, frequency, latitude, longitude, parseInt(col8), 0, 0);
                    logger.debug("Loaded...: " + runway);
                    break;        
                default:
                    break;
            }
            
            
            //logger.debug( id + ", " + latitude + "," + longitude + "," + col4 + "," + frequency + "," + col6 + "," + col7 + "," + col8 + "," + col9 + "," + col10 + "," + col11 + "," + col12);
        });

    } else {
        var error = new Error("File '" + fileName + "' was not found!");
        throw error;
    }

} catch (err) {
    logger.error(new Error(err.toString()).stack);
    throw err;
}


