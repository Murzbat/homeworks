$(document).ready( function(){ 
	$('.main_btna, [href="#sheldure"], .main_btn ').on('click', function(){
		$('.overlay').animate({opacity: 'show'},300);
		$('.modal').slideDown(500);
	});

	$('.close').on('click',function(){
		$('.modal').slideUp(500);
		$('.overlay').animate({opacity: 'hide'},300);
	})
});