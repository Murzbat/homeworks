let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");
let time = 19;
let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
};

for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50  ) {
	
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	
	} else {
	
		while (!((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50)){
			alert("Неверный тип введенных данных.");
			a = prompt("Какой тип товаров будем продавать?");
	
		}
	
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	
	}

//console.log(mainList);



}

if (time < 0) {
	console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
	} else if (time < 24){
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		};
alert(mainList.budget / 30);
console.log(mainList);

/*let i = 0; // While

while (i<5){
	
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50  ) {
		
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	
	} else {
		
		while (!((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50)){
			
			alert("Неверный тип введенных данных.");
			a = prompt("Какой тип товаров будем продавать?");
		
		}
		
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	
	}
	
	i++
}*/

/*let i = 0;  // While do

do {
	let a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50  ) {
		
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	
	} else {
		
		while (!((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50)){
			alert("Неверный тип введенных данных.");
			a = prompt("Какой тип товаров будем продавать?");
		
		}
		
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	
	}
	
	i++

}
while (i<5);*/
