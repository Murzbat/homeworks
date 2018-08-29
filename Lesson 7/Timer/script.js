function watch(){
	let timer = document.getElementById('clock'),
		time = new Date(),
		h = time.getHours(),
	 	m = time.getMinutes(),
	 	s = time.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	timer.innerHTML = h + ": "+ m + ":" + s;
 
	function checkTime(a) {
			if (a < 10)
		{
			a = "0" + a;
		}
			return a;
	}
	timerId = setTimeout(watch, 1000)
}
watch();