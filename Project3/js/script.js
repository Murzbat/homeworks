window.addEventListener('DOMContentLoaded', function(){

	
 // modal

	let header_btn = document.querySelector('.header_btn'),
		modalForm1 = document.querySelector('.popup_engineer'),
		popup_close = document.querySelectorAll('.popup_close'),

		phone = document.querySelectorAll('.phone_link'),
		modalForm2 = document.querySelector('.popup');

		
	
		// calling modal window
		
		header_btn.addEventListener('click', function() {

			modalForm1.style.display = 'block';
			document.body.style.overflow = 'hidden'; 

		});
		
		
		
		//closing the modal window by clicking on the overlay
		
		modalForm1.addEventListener('click', function(){
			if (event.target == modalForm1) {
				modalForm1.style.display = 'none';
			}
		});


		modalForm2.addEventListener('click', function(){
			
			if (event.target == modalForm2) {
				modalForm2.style.display = 'none';
			}
		
		});

		for (i = 0; i < phone.length; i++) {

			// calling modal window	
			
			phone[i].addEventListener('click', function(){
				
				event.preventDefault();
				modalForm2.style.display = 'block';
				document.body.style.overflow = 'hidden'; 

			});
			
			

		}	

// closing the modal window by clicking on the X
			
			popup_close[1].addEventListener('click', function(){
					modalForm1.style.display = 'none';
					document.body.style.overflow = '';
			});
				
			popup_close[0].addEventListener('click', function(){


					modalForm2.style.display = 'none';
					document.body.style.overflow = '';
			
			});


		//Modal Forms

		let message = new Object();
		message.loading = "Загрузка...";
		message.succes = "Спасибо! Скоро мы с вами свяжемся";
		message.failure = "Что-то пошло не так...";

			let form = document.getElementsByClassName('form'),
				input = [];
			statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
		
		for (let i = 0; i < form.length-1; i++){
			input[i] = [];
			for (let j = 0; j < 2; j++){	
				input[i] = form[i].getElementsByTagName('input');
			}	
		}



		//цикл для того,чтобы обращаться к каждому модальному окну
		for (let i = 0; i < form.length-1; i++){
			//запрет на ввод всего кроме цифр
			input[i][1].onkeyup = function (input){
      				  return this.value = this.value.replace(/[^\d]/g, '');
			};
		
			form[i].addEventListener('submit', function(event){
				event.preventDefault();
				form[i].appendChild(statusMessage);

				//Ajax
				
				let request = new XMLHttpRequest();
				
				request.open("POST",'server.php');

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				let formData = new FormData(form[i]);
				
				request.send(formData);

				request.onreadystatechange = function(){
					if (request.readyState < 4) {
						
						statusMessage.innerHTML = message.loading;
					
					} else if ( request.readyState === 4) {
					
						if (request.status === 200 && request.status < 300) {
							
							statusMessage.innerHTML = message.succes;
						
						} else {
						
							statusMessage.innerHtml = message.failure;
						
						}
					}
				};

			
				for (let j = 0; j < 2; j++) {
					
					input[i][j].value = '';
					//Очищаем поля ввода
				}

			});
		}
		
	//Timer

	let deadline = '2019-07-04';

	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60),
			minutes = Math.floor( ((t/1000)/60) % 60),
			hours = Math.floor( (t/(1000*60*60)) % 24 ),
			days = Math.floor( (t/(1000*60*60*24)) );
		
		seconds = checkTime(seconds);
		hours = checkTime(hours);
		minutes = checkTime(minutes);
		days = checkTime(days); 

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds

		};
	}	

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			days = timer.querySelector('.days'),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
		

			function updateClock(){
				let t = getTimeRemaining(endtime);
				days.innerHTML = t.days;
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}

			}

			updateClock();
			var timeInterval = setInterval(updateClock,1000);

	}

	setClock('timer',deadline);

	function checkTime(a) {
		if (a < 10 && a > 0) {
			a = "0" + a;
		} else if (a <= 0){
			a = '00';
		}
			
			return a;
	}

	// Tabs

	let glazing_block = document.getElementsByClassName('glazing_block'),
		glazing_content = [],
		tab = [],
		glazing_slider = document.getElementsByClassName('glazing_slider')[0];
	
	for (let i = 0; i < 5; i++){
		glazing_content[i] = document.getElementById('tab'+i);
		tab[i] = glazing_block[i].getElementsByTagName('a')[0];
	}


	function HideTabContent(a){
		for (let i = a; i < 5; i++){
			glazing_content[i].style.display = 'none';
		}
	}
    
    HideTabContent(1);
	
	function ShowTabContent(b){
		
		HideTabContent(0);
		glazing_content[b].style.display = 'block';

	}

	glazing_slider.addEventListener('click', function(event){
		var target = event.target;

		if (target.nodeName == 'A'){
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					ShowTabContent(i);
					for (let j = 0; j < glazing_block.length; j++){	
			
							tab[j].classList.remove('active');
		
					}
		
					tab[i].classList.add('active');
					break;
				}
			}
		}
	})
	


	/*for (let i = 0; i < glazing_block.length; i++){
		glazing_block[i].addEventListener('click', function(){
			ShowTabContent(i);
		for (let j = 0; j < glazing_block.length; j++){	
			
			tab[j].classList.remove('active');
		
		}
		
		tab[i].classList.add('active');
		
		});
	}*/

    
    //Second Tabs
    let tabsDecoration = document.getElementsByClassName('decoration_item'),
    	tabsItems = [],
    	tabContent = [];
    
    for (let i = 0; i < tabsDecoration.length; i++){
    	tabsItems[i] = tabsDecoration[i].getElementsByTagName('div')[0];
    }

    tabContent[0] = document.getElementsByClassName('internal')[0];
    tabContent[1] = document.getElementsByClassName('external')[0];
    tabContent[2] = document.getElementsByClassName('rising')[0];
    tabContent[3] = document.getElementsByClassName('roof')[0];
    console.log(tabsItems);
    function HideTabDecorContent(e){
		for (let i = e; i < tabContent.length; i++){
			tabContent[i].style.display = 'none';
		}
	}
    
    HideTabDecorContent(1);
	
	function ShowTabDecorContent(f){
		
		HideTabDecorContent(0);
		tabContent[f].style.display = 'block';

	}

	for (let i = 0; i < tabsDecoration.length; i++){
		tabsDecoration[i].addEventListener('click', function(){
			ShowTabDecorContent(i);
			for (let j = 0; j < tabsDecoration.length; j++){	
				
				tabsItems[j].classList.remove('after_click');
		
			}
		
			tabsItems[i].classList.add('after_click');
		
		});
	}



	//Calc

	let glazing_price = document.getElementsByClassName('glazing_price'),
		calc_btn = [],
		calc = document.getElementsByClassName('popup_calc')[0],
		calc_close = document.getElementsByClassName('popup_calc_close')[0],
		balcon_icons = document.getElementsByClassName('balcon_icons')[0],
		icons = balcon_icons.getElementsByTagName('a'),
		big_img = document.getElementsByClassName('big_img')[0],
		big_icons = big_img.getElementsByTagName('img'),
		input_calc1 = calc.getElementsByClassName('form-control')
		icons_img = [],
		next_btn = calc.getElementsByClassName('button')[0],


		calc_profile = document.getElementsByClassName('popup_calc_profile')[0],
		profile_calc_close = document.getElementsByClassName('popup_calc_profile_close')[0],
		checkbox_profile = calc_profile.getElementsByClassName('checkbox-custom'),
		checkbox_label = calc_profile.getElementsByTagName('label'),
		calc_profile_types = calc_profile.getElementsByTagName('options'),
		select_profile = calc_profile.getElementsByTagName('select')[0],
		next_btn_profile = calc_profile.getElementsByClassName('button')[0],
		calc_end = document.getElementsByClassName('popup_calc_end')[0],
		calc_options = {
			name,
			telephone: '',
			balconType: "type1",
			width,
			height,
			checkbox: " ",
			select_profile: "tree"
		};
	console.log(next_btn_profile);


	for (let i = 0; i < icons.length; i++){
		
		icons_img[i] = icons[i].getElementsByTagName('img')[0];
	
	}

	for (let i = 0; i < glazing_price.length; i++){
		
		calc_btn[i] = glazing_price[i].getElementsByTagName('button')[0];
	}
	

	for (let i = 0; i < glazing_price.length; i++) {
		calc_btn[i].addEventListener('click', function(){
			
			calc.style.display = 'block';

		});
	}

	calc_close.addEventListener('click', function(){
		
		calc.style.display = 'none';
		ShowBalconType(0);
		for (let j = 0; j < icons.length; j++){
			icons_img[j].style.width = '20' + '%';
		}
		icons_img[0].style.width = '30' + '%';
		select_profile.value = 'tree';
		calc_end.style.display = 'none';
		calc_options.name = '';
		calc_options.telephone = '';
		calc_options.balconType = "type1";
		calc_options.width = "";
		calc_options.height = "";
		calc_options.checkbox = "";
		calc_options.select_profile = "tree";
		input_calc_end[1].value = '';
		input_calc_end[0].value = '';
		input_calc1[1].value = '';
		input_calc1[0].value = '';





	
	});

	//types of balcons

	function HideBalconType(c){
		
		for (let i = c; i < icons.length; i++) {
			big_icons[i].style.display = 'none';
		}
	
	}

	HideBalconType(1);

	function ShowBalconType(d){
		
		HideBalconType(0);
		big_icons[d].style.display = 'inline-block';
	
	}



	for (let i = 0; i < icons.length; i++){
			
		icons[i].addEventListener('click', function(){
			event.preventDefault();
			ShowBalconType(i);
			for (let j = 0; j < icons.length; j++){
				icons_img[j].style.width = '20'+'%';
			}
			icons_img[i].style.width = '30'+'%';
			calc_options.balconType = icons[i].className;
		});
	}



	//first inputs

	for (let i = 0; i < input_calc1.length; i++){
		input_calc1[i].onkeyup = function (input){
      				  return this.value = this.value.replace(/[^\d]/g, '');
		};
		input_calc1[i].addEventListener('change', function(){
			if (i == 0) {
				calc_options.width = input_calc1[i].value;
			} else if (i == 1){
				calc_options.height = input_calc1[i].value;
			}
		})
	}
 	
	//Secondwindow
 	
 	next_btn.addEventListener('click', function(){	
 		
 		calc.style.display = 'none';
 		calc_profile.style.display = 'block';

 	})

 	calc_profile.addEventListener('change', function(){
 		
 		calc_options.select_profile = select_profile.value;
 	
 	})

 	for (let i = 0; i < checkbox_label.length; i++){
 		checkbox_label[i].addEventListener('click', function(){
 			
 			calc_options.checkbox = checkbox_profile[i].id;

 		})
 	}
 	
 	//closing second window

 	profile_calc_close.addEventListener('click', function(){
 		ShowBalconType(0);
		for (let j = 0; j < icons.length; j++){
			icons_img[j].style.width = '20' + '%';
		}
		icons_img[0].style.width = '30' + '%';
 		calc_profile.style.display = 'none';
 		select_profile.value = 'tree'
 		calc_options.name = '';
		calc_options.telephone = '';
		calc_options.balconType = "type1";
		calc_options.width = "";
		calc_options.height = "";
		calc_options.checkbox = "";
		calc_options.select_profile = "tree";
		input_calc_end[1].value = '';
		input_calc_end[0].value = '';
		input_calc1[1].value = '';
		input_calc1[0].value = '';

	})

	

	let form_calc_end = calc_end.getElementsByClassName('form')[0],
		input_calc_end = form_calc_end.getElementsByTagName('input'),
		cacl_end_close = calc_end.getElementsByClassName('popup_calc_end_close')[0];


	next_btn_profile.addEventListener('click', function(){
	
		calc_end.style.display = 'block';
		calc_profile.style.display = 'none'
	
	})

	//запрет на ввод всего кроме цифр
	input_calc_end[1].onkeyup = function (input){
        return this.value = this.value.replace(/[^\d]/g, '');
	};
	for (let i = 0; i < input_calc_end.length; i++){
		
		input_calc_end[i].addEventListener('change', function(){
			if (i == 0) {
				calc_options.name = input_calc_end[i].value;
			} else if (i == 1){
				calc_options.telephone = input_calc_end[i].value;
			}
		})
		
	
	}

	//closing thirdwindow
	cacl_end_close.addEventListener('click', function(){
		ShowBalconType(0);
		for (let j = 0; j < icons.length; j++){
			icons_img[j].style.width = '20' + '%';
		}
		icons_img[0].style.width = '30' + '%';;
		select_profile.value = 'tree'
		calc_end.style.display = 'none';
		calc_options.name = '';
		calc_options.telephone = '';
		calc_options.balconType = "type1";
		calc_options.width = "";
		calc_options.height = "";
		calc_options.checkbox = "";
		calc_options.select_profile = "tree";
		input_calc_end[1].value = '';
		input_calc_end[0].value = '';
		input_calc1[1].value = '';
		input_calc1[0].value = '';


		

	})
	

	form_calc_end.addEventListener('submit', function(event){
		event.preventDefault();
		form_calc_end.appendChild(statusMessage);
		//AJAX
			let request2 = new XMLHttpRequest();
			request2.open("POST", 'server.php');

			request2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(calc_options);

			request2.send(formData);

			request2.onreadystatechange = function() {
				if (request2.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request2.readyState === 4) {
					if (request2.status == 200 && request2.status < 300) {
						statusMessage.innerHTML = message.succes;
						//добавляем контент на страницу
					}
					else {
						statusMessage.innerHTML = message.failure;

					}
				}
			};
		for (let j = 0; j < icons.length; j++){
			icons_img[j].style.width = '20' + '%';
		}
		icons_img[0].style.width = '30' + '%';
		select_profile.value = 'tree'
		calc_options.name = '';
		calc_options.telephone = '';
		calc_options.balconType = "type1";
		calc_options.width = "";
		calc_options.height = "";
		calc_options.checkbox = "";
		calc_options.select_profile = "tree";
		input_calc_end[1].value = '';
		input_calc_end[0].value = '';
		input_calc1[1].value = '';
		input_calc1[0].value = '';
			
		let imagesGallery = document.getElementsByClassName('col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn'),
		imagesBig = document.getElementsByClassName('big_images'),
		imagesMain = document.getElementsByClassName('main_images'),
		imagesRow = document.getElementsByClassName('big_image_cover');


	for (let i = 0; i < imagesGallery.length; i++) {
		imagesRow[i].style.top = 'auto';
		imagesRow[i].style.left = 'auto';
	}

	function tabHide(elementNumber) {

		for(let i = elementNumber; i < imagesGallery.length; i++) {
			imagesBig[i].classList.remove('show');
			imagesBig[i].classList.add('hide');
			
		}
	}
	tabHide(0);

	function tabOpen(g) {
			if (imagesBig[g].classList.contains('hide')) {
				tabHide(0);
				imagesBig[g].classList.remove('hide');
				imagesBig[g].classList.add('show');
				imagesBig[g].classList.add('back_pop_item');
				imagesRow[g].style.display = "flex";

			}
	}

	for(let j = 0; j < imagesGallery.length; j++) {
		imagesMain[j].addEventListener('click', function() {
			let target = event.target;
			if(target.classList.contains('lupa') || target.classList.contains('main_images')) {
				for(let i = 0; i < imagesGallery.length; i++) {
					if (target == imagesGallery[i] || target == imagesMain[i]) {
						tabOpen(i);
						break;
					}
				}
			}
		});
	}
	for (let j = 0; j < imagesGallery.length; j++) {
		imagesRow[j].addEventListener('click', function(elem) {
			for (let i = 0; i < imagesGallery.length; i++) {
				if (!isDescendant(imagesRow[i], elem.target)){
				imagesRow[i].style.display = 'none';
				}
			}
		});
	}
	//проверка на родителя
	function isDescendant(parent, child) {
	     var node = child.parentNode;
	     while (node != null) {
	         if (node == parent) {
	             return true;
	         }
	         node = node.parentNode;
	     }
	     return false;
	}

	});
	
let imagesGallery = document.getElementsByClassName('col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn'),
		imagesBig = document.getElementsByClassName('big_images'),
		imagesMain = document.getElementsByClassName('main_images'),
		imagesRow = document.getElementsByClassName('big_image_cover');


	for (let i = 0; i < imagesGallery.length; i++) {
		imagesRow[i].style.top = 'auto';
		imagesRow[i].style.left = 'auto';
	}

	function tabHide(elementNumber) {

		for(let i = elementNumber; i < imagesGallery.length; i++) {
			imagesBig[i].classList.remove('show');
			imagesBig[i].classList.add('hide');
			
		}
	}
	tabHide(0);

	function tabOpen(g) {
			if (imagesBig[g].classList.contains('hide')) {
				tabHide(0);
				imagesBig[g].classList.remove('hide');
				imagesBig[g].classList.add('show');
				imagesBig[g].classList.add('back_pop_item');
				imagesRow[g].style.display = "flex";

			}
	}

	for(let j = 0; j < imagesGallery.length; j++) {
		imagesMain[j].addEventListener('click', function() {
			let target = event.target;
			if(target.classList.contains('lupa') || target.classList.contains('main_images')) {
				for(let i = 0; i < imagesGallery.length; i++) {
					if (target == imagesGallery[i] || target == imagesMain[i]) {
						tabOpen(i);
						break;
					}
				}
			}
		});
	}
	for (let j = 0; j < imagesGallery.length; j++) {
		imagesRow[j].addEventListener('click', function(elem) {
			for (let i = 0; i < imagesGallery.length; i++) {
				if (!isDescendant(imagesRow[i], elem.target)){
				imagesRow[i].style.display = 'none';
				}
			}
		});
	}
	
	function isDescendant(parent, child) {
	     var node = child.parentNode;
	     while (node != null) {
	         if (node == parent) {
	             return true;
	         }
	         node = node.parentNode;
	     }
	     return false;
	}
	console.log(calc_options);

});

