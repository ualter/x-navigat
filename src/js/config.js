// Author Ualter Jr.

var config = {};

// Winston Logging
config.logger                 = {};
config.logger.console         = {};
config.logger.fileTrace       = {};
config.logger.console.level   = 'info';
config.logger.fileTrace.level = 'info';

// Airnav
config.airnav           = {};
config.airnav.pathFiles = "c:/X-Plane 11/Resources/default data/";
//config.airnav.pathFiles = "c:/Users/Ualter/Developer/x-navigat/x-navigat/airnav-samples/";


module.exports = config;