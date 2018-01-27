// Author Ualter Jr.

const config       = require('../config');
const logger       = require('../utils/logger.js')(module);
const readline     = require('readline');
const fs           = require('fs');
const path         = require('path');
const model        = require('./../model/airnav');
const lineByLine   = require('n-readlines');
const inherits     = require('util').inherits;  
const EventEmitter = require('events').EventEmitter;

function Airnav() {
    this.loaded       = false;
    this.listAirports = {};
    this.listNavaids  = {};

    EventEmitter.call(this);
};

inherits(Airnav, EventEmitter);

Airnav.prototype.getListAirports = function() {
    if ( !this.loaded ) {
        throw new Error('Fist! You must load the data, call the method load()');
    }
    return this.listAirports;
}

Airnav.prototype.getListNavaids = function() {
    if ( !this.loaded ) {
        throw new Error('Fist! You must load the data, call the method load()');
    }
    return this.listNavaids;
}

Airnav.prototype.processLine = function(line) {
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
            Airnav.prototype.getListNavaids[col9] = airnav;
            logger.debug("Loaded...: " + airnav);
            this.emit('loadedAirnav', airnav);
            break;
        // VOR    
        case 3:
            // code, description, frequency, latitude, longitude, type
            var airnav = new model.Navaid(col9, col12, frequency, latitude, longitude, model.Navaid.VOR);        
            Airnav.prototype.getListNavaids[col9] = airnav;
            logger.debug("Loaded...: " + airnav);
            this.emit('loadedAirnav', airnav);
            break;
        // RUNWAY & AIRPORT    
        case 4:
        case 5:
            // Load the Aiport
            var icaoId = col10;
            var airport = this.loadAirport(icaoId,latitude,longitude);

            // number, frequency, latitude, longitude, heading, elevation, length
            var runway = new model.Runway(col12, frequency, latitude, longitude, parseInt(col8), 0, 0);
            airport.addRunway(col12,runway);
            logger.debug("Loaded...: " + runway);
            this.emit('loadedRunway', runway);
            break;
        // GLIDESLOPE & AIRPORT      
        case 6:
            // Load the Aiport
            var icaoId = col10;
            var airport = this.loadAirport(icaoId,latitude,longitude);

            // number, frequency, latitude, longitude, heading, elevation, length
            var glideSlope = new model.Glideslope(col12, frequency, latitude, longitude, parseInt(col8), 0, 0);
            airport.addGlideSlope(col12,glideSlope);
            logger.debug("Loaded...: " + glideSlope);
            this.emit('loadedGlideSlope', runway);
            break;    
        // DME    
        case 12:
            // frequency, description, latitude, longitude, icaoId
            dme = new model.Dme(frequency, col12, latitude, longitude, parseInt(col8), 0, 0);
            logger.debug("Loaded...: " + dme);
            this.emit('loadedDme', dme);
            break; 
        default:
            //logger.debug("Not processed: " + id);
            break;
    }
    //logger.debug( id + ", " + latitude + "," + longitude + "," + col4 + "," + frequency + "," + col6 + "," + col7 + "," + col8 + "," + col9 + "," + col10 + "," + col11 + "," + col12);
}

Airnav.prototype.load = function() {
    try {
        this.emit('startLoad', 'Start Loading Airnav Data...');
        var fileName = config.airnav.pathFiles + '/earth_nav.dat';
        if ( fs.existsSync(fileName) ) {

            logger.debug("Reading file %s", fileName);

            var liner = new lineByLine(fileName);
            var line;
            while ( line = liner.next() ) {
                this.processLine(line.toString('ascii'));
            }

            if ( config.logger.console.level == 'debug' ) {
                for (key in Airnav.prototype.listAirports) {
                    logger.debug( "Loaded...: " + Airnav.prototype.listAirports[key]);
                }

                for (key in Airnav.prototype.listNavaids) {
                    logger.debug( "Loaded...: " + Airnav.prototype.listNavaids[key]);
                }
            }

            this.loaded = true;
            this.emit('endLoad', 'End Loading Airnav Data...');

        } else {
            var error = new Error("File '" + fileName + "' was not found!");
            throw error;
        }
    } catch (err) {
        logger.error(new Error(err.toString()).stack);
        throw err;
    }
} 

Airnav.prototype.loadAirport = function(icaoId,latitude,longitude) {
    if ( !(icaoId in Airnav.prototype.getListAirports ) ) {
        var airport = new model.Airport(icaoId,icaoId,latitude,longitude);
        this.emit('loadedAirport', airport);
        Airnav.prototype.getListAirports[icaoId] = airport;
    }
    return Airnav.prototype.getListAirports[icaoId];
}

module.exports = Airnav;

