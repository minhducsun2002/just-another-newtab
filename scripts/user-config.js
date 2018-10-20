var name = '';
var request = new XMLHttpRequest();

loadName('user-config.json');

function loadName(json_path)
{
    let requestURL = json_path;
    request.open('GET', json_path);
    request.send();
    request.onload = () => {
        name = JSON.parse(request.responseText)["name"];
        writeGreeting();
    }
}