function modalForms() {
  //Modal Forms
  let message = new Object();
  message.loading = "Загрузка...";
  message.succes = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";
  let form = document.getElementsByClassName('form'),
      input = [];
  statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  for (let i = 0; i < form.length - 1; i++) {
    input[i] = [];

    for (let j = 0; j < 2; j++) {
      input[i] = form[i].getElementsByTagName('input');
    }
  } //цикл для того,чтобы обращаться к каждому модальному окну


  for (let i = 0; i < form.length - 1; i++) {
    //запрет на ввод всего кроме цифр
    input[i][1].onkeyup = function (input) {
      return this.value = this.value.replace(/[^\d]/g, '');
    };

    form[i].addEventListener('submit', function (event) {
      event.preventDefault();
      form[i].appendChild(statusMessage); //Ajax

      let request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      let formData = new FormData(form[i]);
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status === 200 && request.status < 300) {
            statusMessage.innerHTML = message.succes;
          } else {
            statusMessage.innerHtml = message.failure;
          }
        }
      };

      for (let j = 0; j < 2; j++) {
        input[i][j].value = ''; //Очищаем поля ввода
      }
    });
  }
}

module.exports = modalForms;