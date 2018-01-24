// Author Ualter Jr.

var PORT = 8881;
var HOST = '192.168.0.22';

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var delayMs = 500;
const intervalObj = setInterval(sendMsg, delayMs);
setTimeout(turnOff,(delayMs * 18) + delayMs)

var latitude  = 40.4675843;
var longitude = -3.55888367;
var altitude  = 2000;
var airspeed  = 0;
var times     = 0;

function sendMsg() {
    var msg     = 'destination=NTFND-NOT FOUND (Lat./Long.);gamePaused=0;barometer=29.92;compassHeading=149.267;' +
                  'nav1FreqHz=10910;nav2FreqHz=11645;altitude=${altitude};airspeed=${airspeed};fuelquantity=6539.77;' + 
                  'apurunning=0;com1FreqHz=11822;com2FreqHz=12280;com1FreqHzStdby=13060;com2FreqHzStdby=11800;'+ 
                  'gpsDMEDistM=0;gpsDMETimeSecs=0;nav1DMEDistNm=0;nav1DMEDistMin=0;nav2DMEDistNm=0;nav2DMEDistMin=0;' + 
                  'outsideTempC=11.026;vsFpm=0.0142204;groundspeed=0.000689309;true_airspeed=4.77556;latitude=${latitude};' + 
                  'longitude=${longitude};weightTotalFuel=20893.8;autopilotMode=1;autopilotAltitude=700;autopilotVS=0;' + 
                  'autopilotAirSpeed=100;autopilotHeading=292.157;'
    
    msg = msg.replace( new RegExp("\\${latitude}"), latitude);
    msg = msg.replace( new RegExp("\\${longitude}"), longitude);
    msg = msg.replace( new RegExp("\\${altitude}"), altitude);
    msg = msg.replace( new RegExp("\\${airspeed}"), airspeed);
                  
    var message = new Buffer(msg);
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
        if (err) throw err;
        console.log(times + ' - UDP message sent to ' + HOST +':'+ PORT);
    });

    times++;
    switch (times) {
        case 1:
            latitude = 40.71187395;
            longitude = -3.75732422;
            break;
        case 2:
            latitude = 41.23238024;
            longitude = -4.15008545;
            altitude = 5000;
            airspeed = 200;
            break;
        case 3:
            latitude = 41.76311745;
            longitude = -3.12561035;
            altitude = 8000;
            airspeed = 250;
            break;   
        case 4:
            latitude = 41.56614196;
            longitude = -2.62573242;
            altitude = 10000;
            airspeed = 320;
            break;
        case 5:
            latitude = 41.10833;
            longitude = -2.27966309;
            altitude = 15000;
            airspeed = 320;
            break;
        case 6:
            latitude = 40.76390128;
            longitude = -1.49414062;
            altitude = 18000;
            airspeed = 350;
            break;
        case 7:
            latitude = 40.58892817;
            longitude = -0.96679687;
            altitude = 20000;
            airspeed = 360;
            break;
        case 7:
            latitude = 40.70562794;
            longitude = -0.32958984;
            altitude = 25000;
            airspeed = 360;
            break;
        case 8:
            latitude = 40.96330795;
            longitude = 0.41748047;
            altitude = 30000;
            airspeed = 360;
            break; 
        case 9:
            latitude = 41.19518983;
            longitude = 1.25244141;
            altitude = 30000;
            airspeed = 380;
            break;
        case 10:
            latitude = 41.07935115;
            longitude = 1.90063477;
            altitude = 30000;
            airspeed = 380;
            break;
        case 11:
            latitude = 41.14091592;
            longitude = 2.14645386;
            altitude = 30000;
            airspeed = 380;
            break;
        case 12:
            latitude = 41.19518983;
            longitude = 2.22129822;
            altitude = 25000;
            airspeed = 350;
            break;
        case 13:
            latitude = 41.26129149;
            longitude = 2.23709106;
            altitude = 18000;
            airspeed = 300;
            break;
        case 14:
            latitude = 41.30566601;
            longitude = 2.21511841;
            altitude = 12000;
            airspeed = 280;
            break;
        case 15:
            latitude = 41.308245;
            longitude = 2.14096069;
            altitude = 6000;
            airspeed = 220;
            break;
        case 15:
            latitude = 41.29638082;
            longitude = 2.08465576;
            altitude = 3000;
            airspeed = 160;
            break;
        case 16:
            latitude = 41.308245;
            longitude = 2.12945938;
            altitude = 2000;
            airspeed = 150;
            break;
        case 17:
            latitude = 41.308245;
            longitude = 2.10920334;
            altitude = 800;
            airspeed = 150;
            break;
        case 18:
            latitude = 41.30231318;
            longitude = 2.08791733;
            altitude = 100;
            airspeed = 120;
            break;                                                                        
        default:
            break;
    }

}



function turnOff() {
    clearInterval(intervalObj);
    client.close();
}