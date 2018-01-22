var config = {};

// Winston Logging
config.logger                 = {};
config.logger.console         = {};
config.logger.fileTrace       = {};
config.logger.console.level   = 'debug';
config.logger.fileTrace.level = 'info';

// Airnav
config.airnav           = {};
config.airnav.pathFiles = "c:/X-Plane 11/Resources/default data/";


module.exports = config;