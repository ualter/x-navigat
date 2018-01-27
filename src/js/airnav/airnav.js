// Author Ualter Jr.

const config   = require('../config');
const logger   = require('../utils/logger.js')(module);
const readline = require('readline');
const fs       = require('fs');
const path     = require('path');
const model    = require('./../model/airnav');
const es       = require('event-stream');

var listAirports = {};

try {

    var fileName = config.airnav.pathFiles + '/earth_nav.dat';
    if ( fs.existsSync(fileName) ) {

        logger.debug("Reading file %s", fileName);

        var s = fs.createReadStream(fileName)
            .pipe(es.split())
            .pipe(es.mapSync(function(line) {
                s.pause();
                processLine(line);
                s.resume();
            }).on('error', function(err) {
                logger.error(new Error(err.toString()).stack);
                throw err;
            }).on('end', function() {
                for (key in listAirports) {
                    logger.debug( "Loaded...: " + listAirports[key]);
                }
            })
        );

    } else {
        var error = new Error("File '" + fileName + "' was not found!");
        throw error;
    }

} catch (err) {
    logger.error(new Error(err.toString()).stack);
    throw err;
}

function processLine(line) {
    var id          = parseInt(line.substring(0,2).trim());
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

    //console.log("col6:" + col6 + ", col7:" + col7 + ", col8:" + col8 + ", col9:" + col9 + ", col10:" + col10 + ", col11:" + col11 );
    switch (id) {
        // NDB
        case 2:
            // code, description, frequency, latitude, longitude, type
            var airnav = new model.Navaid(col9, col12, frequency, latitude, longitude, model.Navaid.NDB);        
            logger.debug("Loaded...: " + airnav);
            break;
        // VOR    
        case 3:
            // code, description, frequency, latitude, longitude, type
            var airnav = new model.Navaid(col9, col12, frequency, latitude, longitude, model.Navaid.VOR);        
            logger.debug("Loaded...: " + airnav);
            break;
        // RUNWAY & AIRPORT    
        case 4:
        case 5:
            // Load the Aiport
            var icaoId = col10;
            var airport = loadAirport(icaoId,latitude,longitude);

            // number, frequency, latitude, longitude, heading, elevation, length
            var runway = new model.Runway(col12, frequency, latitude, longitude, parseInt(col8), 0, 0);
            airport.addRunway(col12,runway);
            logger.debug("Loaded...: " + runway);
            break;
        // GLIDESLOPE & AIRPORT      
        case 6:
            // Load the Aiport
            var icaoId = col10;
            var airport = loadAirport(icaoId,latitude,longitude);

            // number, frequency, latitude, longitude, heading, elevation, length
            var glideSlope = new model.Glideslope(col12, frequency, latitude, longitude, parseInt(col8), 0, 0);
            airport.addGlideSlope(col12,glideSlope);
            logger.debug("Loaded...: " + glideSlope);
            break;    
        // DME    
        case 12:
            // frequency, description, latitude, longitude, icaoId
            dme = new model.Dme(frequency, col12, latitude, longitude, parseInt(col8), 0, 0);
            logger.debug("Loaded...: " + dme);
            break; 
        default:
            logger.debug("Not processed: " + id);
            break;
    }
    
    //logger.debug( id + ", " + latitude + "," + longitude + "," + col4 + "," + frequency + "," + col6 + "," + col7 + "," + col8 + "," + col9 + "," + col10 + "," + col11 + "," + col12);

}

function loadAirport(icaoId,latitude,longitude) {
    if ( !(icaoId in listAirports) ) {
        var airport = new model.Airport(icaoId,icaoId,latitude,longitude);
        listAirports[icaoId] = airport;
    }
    return listAirports[icaoId];
}
