var PORT = 8881;
var HOST = '192.168.0.22';

var dgram = require('dgram');
//var message = new Buffer('My KungFu is Good!');

var message = new Buffer('destination=NTFND-NOT FOUND (Lat./Long.);gamePaused=0;barometer=29.92;compassHeading=149.267;nav1FreqHz=10910;nav2FreqHz=11645;altitude=2006.04;airspeed=-4.73966;fuelquantity=6539.77;apurunning=0;com1FreqHz=11822;com2FreqHz=12280;com1FreqHzStdby=13060;com2FreqHzStdby=11800;gpsDMEDistM=0;gpsDMETimeSecs=0;nav1DMEDistNm=0;nav1DMEDistMin=0;nav2DMEDistNm=0;nav2DMEDistMin=0;outsideTempC=11.026;vsFpm=0.0142204;groundspeed=0.000689309;true_airspeed=4.77556;latitude=40.4589;longitude=-3.55662;weightTotalFuel=20893.8;autopilotMode=1;autopilotAltitude=700;autopilotVS=0;autopilotAirSpeed=100;autopilotHeading=292.157;');

var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});