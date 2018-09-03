function calc(){
		let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function(){
				personsSum = +this.value;
				//console.log(this.value);

				total = (daysSum + personsSum)*4000;
				
				if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0)  {
  					  totalValue.innerHTML = '0';
				}else {
   					 totalValue.innerHTML = total;
				}

			});
			persons.onkeyup = function (input){
      				  return this.value = this.value.replace(/[^\d]/g, '');
				};

			restDays.addEventListener('change', function(){
				daysSum = +this.value;
				total = (daysSum + personsSum)*4000;
				if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0)  {
  					  totalValue.innerHTML = '0';
				}else {
   					 totalValue.innerHTML = total;
				}
			});
			restDays.onkeyup = function (input){
      				  return this.value = this.value.replace(/[^\d]/g, '');
				};

			place.addEventListener('change', function(){
				if (restDays.value == '' || persons.value =='' || ((+persons.value ^ 0)) !== +persons.value || ((+restDays.value ^ 0)) !== +restDays.value || daysSum == 0 || personsSum == 0){
					totalValue.innerHTML = 0;

				} else {
					let a = total;
					totalValue.innerHTML = a* this.options[this.selectedIndex].value;
				}
			});
}
module.exports = calc;