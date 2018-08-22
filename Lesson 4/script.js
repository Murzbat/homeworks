let money,
	name,
	time,
	price,
	peopname;
let currentprice=price;

function start(){
	money = prompt("Ваш бюджет?", '');
	
	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет?", '');
	}
	
		name = prompt("Название вашего магазина?", '').toUpperCase();
	time = 19;

}

//start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){
		for (let i = 0; i < 5; i++) {

			let a = prompt("Какой тип товаров будем продавать?");
			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !='' && a.length < 50  ) {
			
				console.log('Все верно');
				mainList.shopGoods[i] = a;
			
			} else {
			
				i = i - 1;
			
			}

		}
	},
	workTime: function workTime(time){
		if (time < 0) {
			console.log('Такого не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24){
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
				}
	},
	dayBudget: function dayBudget(budget){
		return budget/30;
	},
	discountSystem: function discountSystem(){
		if (mainList.discount == true){
			price=price*0.8;
		} else {
			currentprice=price;
		}
	},
	employees: function employees(){ // hiring employees
		for (let i=1; i<5; i++){
			peopname=prompt('Имя сотрудника');
			console.log(i);
			if (peopname != "" && typeof(peopname) !== null && typeof(peopname) === "string"){
				mainList.employers[i]=peopname;
			}else {
				i--;
			}
		}
	},
	chooseShopItems: function chooseShopItems() { 
		let items = prompt("Перечислите через запятую ваши товары", "");
		
		if ( !isNaN(items) || items == "" || items == null ){
			while (!isNaN(items) || items == "" || items == null) {
			 	items = prompt("Повторите ввод. Пожалуйста, напишите через запятую ваши товары", "");
			}
			mainList.ShopItems = items.split(",");
			mainList.ShopItems.sort();
			items = prompt("Подождите, может еще товары?","");
			if ( !isNaN(items) || items == "" || items == null ){
				while (!isNaN(items) || items == "" || items == null) {
			 		items = prompt("Повторите ввод. Пожалуйста, напишите через запятую ваши товары", "");
				}
				
				mainList.ShopItems.push(items);
				mainList.ShopItems.sort();
			
			} else {
		
			mainList.ShopItems.push(items);
			mainList.ShopItems.sort();
		
			}
		} else {
		
			mainList.ShopItems = items.split(",");
			mainList.ShopItems.sort();
			items = prompt("Подождите, может еще товары?","");
			if ( !isNaN(items) || items == "" || items == null ){
				while (!isNaN(items) || items == "" || items == null) {
			 		items = prompt("Повторите ввод. Пожалуйста, напишите через запятую ваши товары", "");
				}
				
				mainList.ShopItems.push(items);
				mainList.ShopItems.sort();
			
			} else {
		
				mainList.ShopItems.push(items);;
				mainList.ShopItems.sort();
		
			}
		
		}
		alert(mainList.ShopItems);
		let lenShopItems=mainList.ShopItems.length
		for (let i = 1; i<(lenShopItems+3);i++){
			mainList.ShopItems[lenShopItems+2-i]=mainList.ShopItems[lenShopItems+1-i]
		}
		alert(mainList.ShopItems);
	

	}

};

console.log(mainList.chooseShopItems());
document.write("У нас в магазине вы можете приобрести:");
mainList.ShopItems.forEach(function(item,i,arr) {

	console.log(i+":" + item + "(массив: " + arr + ")")
	document.write(i+":" + item);	
	})

		



console.log(mainList);

