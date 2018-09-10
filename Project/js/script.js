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

		})
		
		
		
		//closing the modal window by clicking on the overlay
		
		modalForm1.addEventListener('click', function(){
			if (event.target == modalForm1) {
				modalForm1.style.display = 'none';
			}
		})


		modalForm2.addEventListener('click', function(){
			
			if (event.target == modalForm2) {
				modalForm2.style.display = 'none';
			}
		
		})

		for (i = 0; i < phone.length; i++) {

			// calling modal window	
			
			phone[i].addEventListener('click', function(){
			
				modalForm2.style.display = 'block';
				document.body.style.overflow = 'hidden'; 

			})
			
			

		}	

// closing the modal window by clicking on the X
			
			popup_close[1].addEventListener('click', function(){
					modalForm1.style.display = 'none';
					document.body.style.overflow = '';
			})
				
			popup_close[0].addEventListener('click', function(){


					modalForm2.style.display = 'none';
					document.body.style.overflow = '';
			
			})


		//Moda Forms

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
				}			

			
				for (let j = 0; j < 2; j++) {
					
					input[i][j].value = '';
					//Очищаем поля ввода
				}

			})
		}
		
})

