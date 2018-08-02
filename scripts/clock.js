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
	let clock = document.getElementById('clock');
	let now = new Date(Date.now());
	let hour = ('0' + now.getHours()).slice(-2);
	let minute = ('0' + now.getMinutes()).slice(-2);
	let second = ('0' + now.getSeconds()).slice(-2);
	clock.innerHTML = hour + ':' + minute + ':' + second;
	clock.style.fontSize = "80px";
	clock.style.fontFamily = "Montserrat";
}

function updateDate()
{
	let date = document.getElementById('date');
	let now = new Date(Date.now());
	date.innerHTML =	weekday[now.getDay()] + ', ' +
						month[now.getMonth()] + ' ' + 
						now.getDate() + ' ' + now.getFullYear();
}