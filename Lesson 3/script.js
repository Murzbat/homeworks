let money,
	name,
	time,
	price,
	peopname;
let currentprice=price;

function start(){
	money = prompt("Ваш бюджет?");
	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет?");
	}
	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}

start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};


function chooseGoods(){


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

	}
}

chooseGoods();

function workTime(time){
	if (time < 0) {
		console.log('Такого не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		} else if (time < 24){
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
			};
}
 
workTime(18);

function dayBudget(budget){
	return budget/30;
}
//
function discountSystem(discount){
	if (discount){
		currentprice=price*0.8;
	} else {
		currentprice=price;
	}
}
console.log(discountSystem());
//hiring employees function
function employees(){
	for (let i=1; i<5; i++){
		peopname=prompt('Имя сотрудника');
		console.log(i);
		if (peopname != "" || typeof(peopname) !== null || typeof(peopname) === "string"){
			mainList.employers[i]=peopname;
		}else {
			i--;
		}
	}
}

employees();
console.log(mainList);


alert(dayBudget(mainList.budget));