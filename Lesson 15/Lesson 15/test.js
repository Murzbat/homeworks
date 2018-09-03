describe("Сумма",function(){
	it("Возвращает ли функция тип данных True?", function(){
		assert.equal(sum(5,6), true )
	});
});
describe("Num",function(){
	it("Переменная num равна 5?", function(){
		assert.equal(num,5)
	});
});
describe("each",function(){
	it("То что возвращает функция each массив?", function(){
		assert.typeOf(each(arr, myFunc),'array');
	});
	it("Равна ли длина того,что возвращает функция each 5?", function(){
		assert.equal(each(arr, myFunc).length,5)
	});
	
	it("Cоответствует ли ожидаемому результату?", function(){
		assert.equal(each(arr, myFunc),[ 8, 7, 6, 5, 4 ]);
	});
});