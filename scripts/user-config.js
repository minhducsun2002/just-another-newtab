var config;
var config_request = new XMLHttpRequest();
var name;

if (name) writeGreetings(name);
loadConfig('user-config.json');

function loadConfig(json_path)
{
    config_request.open('GET', json_path);
    config_request.onload = () => {
        config = Object.assign({}, config, JSON.parse(config_request.responseText))[0];
    }
    config_request.send();
}