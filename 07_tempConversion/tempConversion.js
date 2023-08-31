const convertToCelsius = function(tempInFar) {

  tempToCelsius = (tempInFar-32) * (5/9);
  tempToCelsius = Math.round(tempToCelsius * 10) / 10;
  return tempToCelsius;
  
};  

const convertToFahrenheit = function(tempInCelsius) {
  
  tempToFar = (tempInCelsius * (9/5)) + 32;
  tempToFar = Math.round(tempToFar * 10) / 10;
  return tempToFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
