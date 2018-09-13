function tab() {
		// Tabs

	var glazing_block = document.getElementsByClassName('glazing_block'),
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
	console.log(glazing_content[2]);
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

    
    //Second Tabs
   var tabsDecoration = document.getElementsByClassName('decoration_item'),
    	tabsItems = [],
    	tabContent = [],
    	decoration_slider = document.getElementsByClassName('decoration_slider')[0],
    	tabs_butons_a = decoration_slider.getElementsByTagName('a');
    for (let i = 0; i < tabsDecoration.length; i++){
    	tabsItems[i] = tabsDecoration[i].getElementsByTagName('div')[0];
    }

    tabContent[0] = document.getElementsByClassName('internal')[0];
    tabContent[1] = document.getElementsByClassName('external')[0];
    tabContent[2] = document.getElementsByClassName('rising')[0];
    tabContent[3] = document.getElementsByClassName('roof')[0];

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
	console.log(tabsItems[1]);

	decoration_slider.addEventListener('click', function(event){
		 target = event.target;

		if (target.nodeName == 'A'){
			console.log(target.nodeName);
			for (var i = 0; i < tabsItems.length; i++) {
				if (target == tabs_butons_a[i]) {
					ShowTabDecorContent(i);
					for (let j = 0; j < tabsDecoration.length; j++){	
				
						tabsItems[j].classList.remove('after_click');
		
					}
		
					tabsItems[i].classList.add('after_click');
					break;
				}
			}
		}
	})


	/*for (let i = 0; i < tabsDecoration.length; i++){
		tabsDecoration[i].addEventListener('click', function(){
			ShowTabDecorContent(i);
			for (let j = 0; j < tabsDecoration.length; j++){	
				
				tabsItems[j].classList.remove('after_click');
		
			}
		
			tabsItems[i].classList.add('after_click');
		
		});
	}*/



};

module.exports = tab;