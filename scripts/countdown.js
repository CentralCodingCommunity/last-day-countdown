// Call the functions
countDownTimer('05/29/2015 2:00 PM', 'seniors');
countDownTimer('06/05/2015 2:00 PM', 'others');

// Define the countdown function
function countDownTimer(dt, id) {
	// Define the goal date
	var end = new Date(dt);

	// Define each in milliseconds
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	// Interval variable
	var timer;

	// Create another function to show the time remaining
	function showRemaining() {
		// Get the current date
		var now = new Date();
		// Get the difference
		var distance = end - now;
		// If the date has passed
		if(distance < 0) {
			// Clear the timer 
			clearInterval(timer);
			// Print some text
			if(id == 'seniors') {
				document.getElementById(id).innerHTML = 'GRADUATION!!!';
			} else {
				document.getElementById(id).innerHTML = 'SUMMER!!!';
			}
			// Don't continue with the rest of the function
			return;
		}

		// Obtain the number for each of the following
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		// Print the information on the page
		document.getElementById(id).innerHTML = days + ' days, ';
		document.getElementById(id).innerHTML += hours + ' hrs, ';
		document.getElementById(id).innerHTML += minutes + ' min, ';
		document.getElementById(id).innerHTML += seconds + ' sec';
	};
	// Refresh every second
	timer = setInterval(showRemaining, 1000);
};