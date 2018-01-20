var exports = module.exports = {};

exports.fabonacci = function (num1,num2) {
    return num1+num2;
};

exports.sayHelloInSpanish = function() {
  return "Hola";
};

exports.degreesToRadians = function(degrees) {
  var radians = degrees * (Math.PI / 180);
  return radians;
};

exports.radiansToDegrees = function(radians) {
  var degrees = radians * (180 / Math.PI);
  return degrees;
};