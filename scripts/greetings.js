// default greetings
greeting = [
    "Sleep well", "Sleep well", "Good night", "Good night",
    "Good night", "Rise and shine", "Have a good breakfast", "Have a good day",
    "Have a good day", "Nice day", "Nice day", "Have a nice day",
    "Have a good lunch", "Nice day", "Good afternoon", "It's afternoon",
    "Good afternoon", "It's getting dark...", "Enjoy your dinner", "Good evening",
    "Take a break", "Good night", "Have a nice dream", "Sleep well"
];

// update
writeGreeting();
setInterval(writeGreeting, 1000 * 60 * 15)

// if present, load external greeting and overwrite
var request = new XMLHttpRequest();
loadGreetings('config/greetings.json');

function loadGreetings(json_path)
{
    let requestURL = json_path;
    request.open('GET', json_path);
    // request.responseType = 'json';
    request.send();
    request.onload = updateGreeting;
}

function updateGreeting()
{
    // parse JSON
    let out = JSON.parse(request.responseText);
    greeting = out["greetings"];    // overwriting default values

    // trigger an update
    writeGreeting();
}

function writeGreeting()
{
    getObject('#greeting').innerText = greeting[moment().hours()] + (name ? `, ${name}` : '');
}