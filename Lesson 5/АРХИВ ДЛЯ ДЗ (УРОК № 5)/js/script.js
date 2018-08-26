let adv = document.querySelector('.adv'),
	column = document.querySelectorAll('.column')[1],
	menu = document.querySelector('.menu'),
	item = document.querySelectorAll('.menu-item'),
	ul = document.getElementsByTagName('ul')[0],
	title = document.getElementById('title'),
	peoplesOpinion = document.getElementById('prompt');

//cganging items
menu.insertBefore(item[1], item[3]);

//delete adv
column.removeChild(adv);

// adding 5th item
let item5 = document.createElement('item5');
item5.classList.add('menu-item');
item5.textContent = 'Пятый пункт';
ul.appendChild(item5);

//changing the slogan
title.textContent = 'Мы продаем только подлинную технику Apple'

//changing the background
document.body.style.background = 'url(img/apple_true.jpg)';

//adding people's opinion
let opinion = prompt('Ваше отношение к технике Apple?','');
peoplesOpinion.textContent = 'Вы относитесь к технике Apple: ' + opinion;
