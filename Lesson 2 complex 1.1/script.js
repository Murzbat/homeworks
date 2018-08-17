let ToDay= new Date();
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturay',
			 'Sunday'];
let test = 0;

for (let i = 0; i < 7; i++) {
	if (i == ToDay.getDay() - 1){
		document.write("<pre>"+week[i].italics()+ "<\/pre>");
		//console.log(i);
		test = 1;
	} else if (i == 6 && test == 0) {
		document.write("<pre>" + week[6].italics() + "<\/pre>");
		//console.log(i);
		} else {
		document.write("<pre>" + week[i].bold() + "<\/pre>");
		//console.log(i);
		}

}