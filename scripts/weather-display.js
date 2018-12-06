function displayWeather()
{
    document.querySelector("#city").innerHTML = weather["city"]["name"];
    document.querySelector("#country").innerHTML = weather["country"]["name"];
}