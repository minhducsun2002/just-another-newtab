var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month =
			['January', 'February', 'March', 'April',
			'May', 'June', 'July', 'August',
			'September', 'October', 'November', 'December']

launchClockUpdater();

function launchClockUpdater()
{
	setInterval(updateClock, 500);
	setInterval(updateDate, 500);
}

function updateClock()
{
	getObject('#clock-h').innerText = padClock(moment().hours());
	getObject('#clock-m').innerText = padClock(moment().minutes());
	getObject('#clock-s').innerText = padClock(moment().seconds());
}

function padClock(arg)
{
	return (arg < 10) ? "0" + arg : arg;
}

function updateDate()
{
	let date = document.getElementById('date');

	let now = new Date();
	date.innerHTML =	weekday[now.getDay()] + ' - ' +
						month[now.getMonth()] + ' ' + 
						now.getDate() + ', ' + now.getFullYear();
}