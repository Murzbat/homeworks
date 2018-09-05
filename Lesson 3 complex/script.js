let str = "урок-3-был слишком легким",
	firstSymbol = str.charAt(0),
	str_except_1 = str.substring(1,str.length+1),
	firstpart,
	secondpart,
	easy,
	arr = [20,33,1,"Человек",2,3],
	sum = 0;
console.log(str);
firstSymbol = firstSymbol.toUpperCase();
str = firstSymbol + str_except_1;

for (let i = 0; i < str.length; i++){
	//console.log(str.charAt[i]);
	if (str.charAt(i) == "-"){
		console.log(i);
		firstpart = str.substring(0,i);
		secondpart = str.substring(i+1,str.length+1);
		str = firstpart + ' ' + secondpart;
	}
}
console.log(str);

easy = str.substring(19,25);
str = str.substring(0,18);

console.log(easy);
console.log(str);

easy = easy.substring(0,easy.length-2);
easy = easy + 'о';
console.log(easy);
document.write("<pre>" + str + "<\/pre>" + easy);

for (let i = 0; i < arr.length; i++){
	if (arr[i] != "Человек"){
		sum = sum + Math.pow(+arr[i],3);
		
	}

}

console.log(sum);
console.log(Math.pow(sum,0.5));

function complex(){
	let	len,
		start = 0,
		end = 0,
		str =prompt("Введите строку","");
	if (isNaN(str) == false){
		while (isNaN(str) == false){
			str = prompt("Вы ввели не строку. Введите строку повторно","");
		}
	}

	len = str.length;
	for (let i = 0; i < (len/2); i++){
		if (str.charAt(i) == ' '){
			start = start + 1;
		}
		if (str.charAt(str.length - 1 - i) == ' '){
			end = end + 1;
			

		}
	}
	if (start != 0) {
		str = str.substring(start,str.length);
	}
	if (end != 0 ) {
		str = str.substring(0,str.length-end);
	}
	if (str.length > 50) {
		str = str.substring(0,50);
		str = str + '...';
	}

	document.write("<pre>" + str + "<\/pre>");
}

complex();