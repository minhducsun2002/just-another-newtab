var weather;
var received = false;
var coord = {
    "latitude" : "21.0278",
    "longitude" : "105.8342"
    // default to Hanoi, Vietnam
};

const API_KEY = ''

var update = fetch(`https://api.darksky.net/forecast/${API_KEY}/${coord["latitude"]},${coord["longitude"]}`).then((response) => {
    return response.json();
}).then((data) => {
    // renderWeatherData(data)
    console.log(data);
})