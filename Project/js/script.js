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
		
		for (let i = 0; i < form.length; i++){
			input[i] = [];
			for (let j = 0; j < 2; j++){	
				input[i] = form[i].getElementsByTagName('input');
			}	
		}



		//цикл для того,чтобы обращаться к каждому модальному окну
		for (let i = 0; i < form.length; i++){
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

	for (let i = 0; i < glazing_block.length; i++){
		glazing_block[i].addEventListener('click', function(){
			ShowTabContent(i);
		for (let j = 0; j < glazing_block.length; j++){	
			
			tab[j].classList.remove('active');
		
		}
		
		tab[i].classList.add('active');
		
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
		icons_img = [];

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
			icons_img[j].classList.remove('balcon_icons');
		}
		icons_img[0].classList.add('balcon_icons');


	
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
		big_icons[d].style.display = 'block';
	
	}



	for (let i = 0; i < icons.length; i++){
			
		icons[i].addEventListener('click', function(){
			event.preventDefault();
			ShowBalconType(i);
			for (let j = 0; j < icons.length; j++){
				icons_img[j].classList.remove('balcon_icons');
			}
			icons_img[i].classList.add('balcon_icons');
		});
	}








});

