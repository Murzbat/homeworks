function modal(){
		let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		discription_btn = document.querySelectorAll('.description-btn');
	//console.log(discription_btn);

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	description.onclick = function(event) {
		let target = event.target;
		while (target != description ){
			if (target.className == 'description-btn'){
				this.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
				return;
			} else if (target.className == 'popup-close'){
				overlay.style.display = 'none';
				more.classList.remove('more-splash');
				document.body.style.overflow = '';
			}
			target = target.parentNode;		
		}	
			
	};
		
	
}

module.exports = modal;