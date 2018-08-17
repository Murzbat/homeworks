let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");

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

console.log(mainList);