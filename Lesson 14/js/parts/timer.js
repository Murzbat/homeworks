function timer(){
	let deadline = '2018-02-30';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60)) );
		seconds = checkTime(seconds);
		hours= checkTime(hours);
		minutes = checkTime(minutes);
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}; 
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <=0) {

				clearInterval(timeInterval);
				
			}
		}
		
		updateClock();
		var timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer',deadline);

	function checkTime(a) {
		if (a < 10 && a > 0) {
			a = "0" + a;
		} else if (a <= 0){
			a = '00';
		}
			
			return a;
	}
}

module.exports = timer;