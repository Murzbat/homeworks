let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],
	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');
console.log(goods_btn);

let money,
	price,
	peopname;
	check=0;
let currentprice=price;
console.log(goods_item);
console.log(goods_item.length);







open.addEventListener('click', () => { //opening the shop(user should input the name and the budget of the shop)
	money = prompt("Ваш бюджет?", '');
	
	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет?", '');
	}

	budget_value.textContent = money;
	
	name_value.textContent = prompt("Название вашего магазина?", '').toUpperCase();

});
console.log(goods_item);

for (let i = 0; i < goods_item.length; i++){// this part forbid to click on goods_btn if the user haven't input something in goods item 
	goods_item[i].addEventListener('change', () =>{
		if (mainList.open == false){	
			goods_btn.disabled = true;
		} else {
			goods_btn.disabled = false;

		} 
	
	});
}

for (let i = 0; i < hire_employers_item.length; i++){// this part forbid to click on hire_employers_btn if the user haven't input something in hire_employers_item
	hire_employers_item[i].addEventListener('change', () =>{
		if (mainList.open == false){	
			employers_btn.disabled = true;
		} else {
			employers_btn.disabled = false;

		} 
	
	});
}

goods_btn.addEventListener('click', () => { //adding some goods
	for (let i = 0; i < goods_item.length; i++) {

			let a = goods_item[i].value;
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50  ) {
			
				console.log('Все верно');
				mainList.shopGoods[i] = a;


				goods_value.textContent = mainList.shopGoods;
			
			} else {
			
				i = i - 1;
			
			}

		}
});

choose_item.addEventListener('change', () =>{


	let items = choose_item.value;
		
		if (isNaN(items) && items != "" ){
			mainList.shopItems = items.split(', ');
			mainList.shopItems.sort();
			items_value.textContent = mainList.shopItems;
		}
});


time_value.addEventListener('change',() => {  //checking timing condition of the shop
	mainList.open = false;
	if (mainList.open == false){	
		goods_btn.disabled = true;
		budget_btn.disabled = true;
		employers_btn.disabled = true;
	} else {
		//goods_btn.disabled = false;
		budget_btn.disabled = false;
		employers_btn.disabled = false;
	}

	let time = time_value.value;
	if (time < 0) {
		console.log('Такого не может быть');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if (time < 24){
				console.log('Уже слишком поздно!');
				mainList.open = false;
			} else {
				console.log('В сутках только 24 часа!');
				mainList.open = false;
			};
	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green'
	} else {
		isopen_value.style.backgroundColor = 'red'

	}
	if (mainList.open == false){	
		goods_btn.disabled = true;
		budget_btn.disabled = true;
		employers_btn.disabled = true;
	} else {
		//goods_btn.disabled = false;
		budget_btn.disabled = false;
		//employers_btn.disabled = false;
	}


});

count_budget_value.disabled = true;	//input of the day budget is forbiden
budget_btn.addEventListener('click', () => { //calculating day budget
	count_budget_value.value = money / 30;

});

employers_btn.addEventListener('click', () => { // hiring employers
	for (let i=0; i<hire_employers_item.length; i++){
			let name = hire_employers_item[i].value;
			mainList.employers[i] = name;
			employers_value.textContent += mainList.employers[i] + ', ';

		}
});

discount_value.addEventListener('click', () => { // checking discount system
		mainList.discount = true;
		if (mainList.discount == true){
		
			price=price*0.8;
			discount_value.style.backgroundColor = 'green';
			discount_value.textContent = 'Скидка 80%';
		
		} else {
			
			currentprice=price;
			discount_value.style.backgroundColor = 'red';
			discount_value.textContent = 'Скидочная система не активна';


		}

})

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []
	
};


//checking opening time
mainList.open = false;
if (mainList.open == false){	
	goods_btn.disabled = true;
	budget_btn.disabled = true;
	employers_btn.disabled = true;
} else {
	//goods_btn.disabled = false;
	budget_btn.disabled = false;
	//employers_btn.disabled = false;
}


//console.log(mainList.chooseShopItems());
/*document.write("У нас в магазине вы можете приобрести:");
mainList.ShopItems.forEach(function(item,i,arr) {

	console.log(i+":" + item + "(массив: " + arr + ")")
	document.write(i+1+":" + item);	
})
console.log("Наш магазин включает в себя:");
for(let key in mainList) {
	console.log(key+ "который имеет значение" + mainList[key]);

}

		



console.log(mainList);*/












