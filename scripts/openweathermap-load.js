var weather;

function loadWeather()
{
    var weather_request = new XMLHttpRequest();
    weather_request.open('GET', `https://api.openweathermap.org/data/2.5/forecast?id=${config["openweathermap_place"]}&APPID=${config["openweathermap_key"]}`);
    weather_request.onload = () => {
        weather = JSON.parse(weather_request.responseText);
    }
    weather_request.send();
}