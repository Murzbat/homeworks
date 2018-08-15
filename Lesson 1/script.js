var budget = +prompt("Ваш бюджет на месяц?");
//console.log(typeof(budget));


var name = prompt("Название вашего магазина?");

var mainList={
	ShopBudget: budget,
	ShopName: name,
	ShopGoods: [],
	emploeyers: {},
	open: true
}

for (var i=0; i<3; i++) {
	mainList.ShopGoods[i]=prompt("Какой тип товаров будем продавать?");
}

alert("Ваш бюджет на один день составляет "+budget/30);
//console.log(typeof(budget/30));
//console.log(mainList.ShopGoods);