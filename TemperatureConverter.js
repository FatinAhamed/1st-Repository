function getWeatherDescription(celsiusTemperature) {
    
    
    let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
    
    fahrenheitTemperature = fahrenheitTemperature.toFixed(1);
    
    let temperatureMessage = `Celsius: ${celsiusTemperature}C, Fahrenheit: ${fahrenheitTemperature}F`;
    
    let weatherDescription;

    if (fahrenheitTemperature > 80) {
        weatherDescription = "It's a hot day!";
    } 
    else if (fahrenheitTemperature >= 61) {
        weatherDescription = "It's a pleasant day.";
    } 
    else {
        weatherDescription = "It's a cool day.";
    }
    
    return `${temperatureMessage} - ${weatherDescription}`;
}

module.exports = getWeatherDescription;