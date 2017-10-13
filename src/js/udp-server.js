const utils        = require('./utils/utils.js');
const logger       = require('./utils/logger.js')(module);
const model        = require('./model');
const dgram        = require('dgram');
const EventEmitter = require('events');
const ip           = require("ip");

const PORT   = 8881;
const HOST   = ip.address();
//'192.168.0.22';

const server = dgram.createSocket('udp4');

server.on('listening', startServer);
server.on('message', receiveMessage);
server.bind(PORT, HOST);

function startServer() {
	var address = server.address();
	logger.info('UDP Server listening on ' + address.address + ":" + address.port);
}

class MyEmitter extends EventEmitter {}
const eventEmitter = new MyEmitter();
exports.eventEmitter = eventEmitter;

const Constants = new model.Constants();

function receiveMessage(message, remote) {
	try {
		
		var planesList = new model.PlanesList();
		var ip         = remote.address;
		var msgs       = message.toString('utf8');

		logger.info("Message received: %s",msgs);

	   	msgs.split(";").map( msg => {

	   		var arr   = msg.split("=");
	   		var label = arr[0];
	   		var value = arr[1];

	   		switch(label) {
	   			 case Constants.DESTINATION: {
	   				planesList.setDestination(ip,value)
	   				break;
	   			 }
				 case Constants.GAME_PAUSED: {
				 	planesList.setPause(ip,value)
				    break;
				 }
				 case Constants.BAROMETER: {
				 	planesList.setBarometer(ip,value)
				    break;
				 }
				 case Constants.COMPASS_HEADING: {
				 	planesList.setCompassHeading(ip,value)
				    break;
				 }
				 case Constants.NAV1_FREQUENCY: {
				 	planesList.setNav1Freq(ip,value)
				    break;
				 }
				 case Constants.NAV2_FREQUENCY: {
				 	planesList.setNav2Freq(ip,value)
				    break;
				 }
				 case Constants.AIRSPEED: {
				 	planesList.setAirSpeed(ip,value)
				    break;
				 }
				 case Constants.ALTITUDE: {break;}
				 case Constants.FUEL_QUANTITY: {
				 	planesList.setFuelQuantity(ip,value)
				    break;
				 }
				 case Constants.APU_RUNNING: {break;}
				 case Constants.COM1_FREQUENCY: {
				 	planesList.setCom1Freq(ip,value)
				    break;
				 }
				 case Constants.COM2_FREQUENCY: {
				 	planesList.setCom2Freq(ip,value)
				    break;
				 }
				 case Constants.COM1_FREQUENCY_STDBY: {break;}
				 case Constants.COM2_FREQUENCY_STDBY: {break;}
				 case Constants.GPS_DISTANCE_METERS: {break;}
				 case Constants.GPS_DISTANCE_SECONDS: {
				 	/*
				 	float distanceMinutes = 0;
					try {
						distanceMinutes = Float.parseFloat(value);
					} catch (NumberFormatException e) {
					}

					if (distanceMinutes > 0) {
						int iDistanceMinutes = (int) distanceMinutes;
						int iDistanceSeconds = (int) ((distanceMinutes - iDistanceMinutes) * 60);
						int iDistanceHours = (int) (distanceMinutes / 60);
						String result = df.format(iDistanceHours) + ":" + df.format(iDistanceMinutes) + ":" + df.format(iDistanceSeconds);
						this.gpsDistanceTime.put(ip.toString(), result);
					} else {
						this.gpsDistanceTime.put(ip.toString(), "0");
					}
				 	*/
				    break;
				 }
				 case Constants.NAV1_DISTANCE_NAUTICALS: {break;}
				 case Constants.NAV1_DISTANCE_MINUTES: {break;}
				 case Constants.NAV2_DISTANCE_NAUTICALS: {break;}
				 case Constants.NAV2_DISTANCE_MINUTES: {break;}
				 case Constants.OUTSIDE_TEMPERATURE_CELSIUS: {
				 	planesList.setOutsideTemperature(ip,value);
				    break;
				 }
				 case Constants.VERTICAL_SPEED: {
				 	planesList.setVSpeed(ip,value);
				    break;
				 }
				 case Constants.GROUND_SPEED: {
				 	planesList.setGroundSpeed(ip,value);
				    break;
				 }
				 case Constants.TRUE_AIRSPEED: {break;}
				 case Constants.LATITUDE: {break;}
				 case Constants.LONGITUDE: {
				 	/*
				 	this.latMap.put(ip.toString(), new Float(latitude));
					this.lonMap.put(ip.toString(), new Float(longitude));

					float lat1 = this.getLatAnteriorMap().containsKey(ip.toString()) ? this.getLatAnteriorMap().get(ip.toString()) : 0;
					float lon1 = this.getLonAnteriorMap().containsKey(ip.toString()) ? this.getLonAnteriorMap().get(ip.toString()) : 0;
					this.calculateBearing(ip, lat1, lon1, new Float(latitude), new Float(longitude));

					this.latAnteriorMap.put(ip.toString(), new Float(latitude));
					this.lonAnteriorMap.put(ip.toString(), new Float(longitude));
				 	*/
				 	break;
				 }
				 case Constants.WEIGHT_TOTAL_FUEL: {break;}
				 case Constants.AUTOPILOT_MODE: {break;}
				 case Constants.AUTOPILOT_ALTITUDE: {break;}
				 case Constants.AUTOPILOT_VERTICAL_SPEED: {break;}
				 case Constants.AUTOPILOT_AIRPSPEED: {break;}
				 case Constants.AUTOPILOT_HEADING: {break;}
	   			 default:
	   				break;	
			   }
			   
	   		   logger.debug("Message...: %s - %s",label,value);
		});
		   
		eventEmitter.emit('receivedMessage', planesList);

    } catch (err) {
   		logger.error(new Error(err.toString()).stack);
   		throw err;
    }
}
