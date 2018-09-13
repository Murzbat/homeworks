function calc() {
  //Calc
  let glazing_price = document.getElementsByClassName('glazing_price'),
      calc_btn = [],
      calc = document.getElementsByClassName('popup_calc')[0],
      calc_close = document.getElementsByClassName('popup_calc_close')[0],
      balcon_icons = document.getElementsByClassName('balcon_icons')[0],
      icons = balcon_icons.getElementsByTagName('a'),
      big_img = document.getElementsByClassName('big_img')[0],
      big_icons = big_img.getElementsByTagName('img'),
      input_calc1 = calc.getElementsByClassName('form-control'),
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

  for (let i = 0; i < icons.length; i++) {
    icons_img[i] = icons[i].getElementsByTagName('img')[0];
  }

  for (let i = 0; i < glazing_price.length; i++) {
    calc_btn[i] = glazing_price[i].getElementsByTagName('button')[0];
  }

  for (let i = 0; i < glazing_price.length; i++) {
    calc_btn[i].addEventListener('click', function () {
      calc.style.display = 'block';
    });
  }

  calc_close.addEventListener('click', function () {
    calc.style.display = 'none';
    ShowBalconType(0);

    for (let j = 0; j < icons.length; j++) {
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
  }); //types of balcons

  function HideBalconType(c) {
    for (let i = c; i < icons.length; i++) {
      big_icons[i].style.display = 'none';
    }
  }

  HideBalconType(1);

  function ShowBalconType(d) {
    HideBalconType(0);
    big_icons[d].style.display = 'inline-block';
  }

  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function () {
      event.preventDefault();
      ShowBalconType(i);

      for (let j = 0; j < icons.length; j++) {
        icons_img[j].style.width = '20' + '%';
      }

      icons_img[i].style.width = '30' + '%';
      calc_options.balconType = icons[i].className;
    });
  } //first inputs


  for (let i = 0; i < input_calc1.length; i++) {
    input_calc1[i].onkeyup = function (input) {
      return this.value = this.value.replace(/[^\d]/g, '');
    };

    input_calc1[i].addEventListener('change', function () {
      if (i == 0) {
        calc_options.width = input_calc1[i].value;
      } else if (i == 1) {
        calc_options.height = input_calc1[i].value;
      }
    });
  } //Secondwindow


  next_btn.addEventListener('click', function () {
    calc.style.display = 'none';
    calc_profile.style.display = 'block';
  });
  calc_profile.addEventListener('change', function () {
    calc_options.select_profile = select_profile.value;
  });

  for (let i = 0; i < checkbox_label.length; i++) {
    checkbox_label[i].addEventListener('click', function () {
      calc_options.checkbox = checkbox_profile[i].id;
    });
  } //closing second window


  profile_calc_close.addEventListener('click', function () {
    ShowBalconType(0);

    for (let j = 0; j < icons.length; j++) {
      icons_img[j].style.width = '20' + '%';
    }

    icons_img[0].style.width = '30' + '%';
    calc_profile.style.display = 'none';
    select_profile.value = 'tree';
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
  let form_calc_end = calc_end.getElementsByClassName('form')[0],
      input_calc_end = form_calc_end.getElementsByTagName('input'),
      cacl_end_close = calc_end.getElementsByClassName('popup_calc_end_close')[0];
  next_btn_profile.addEventListener('click', function () {
    calc_end.style.display = 'block';
    calc_profile.style.display = 'none';
  }); //запрет на ввод всего кроме цифр

  input_calc_end[1].onkeyup = function (input) {
    return this.value = this.value.replace(/[^\d]/g, '');
  };

  for (let i = 0; i < input_calc_end.length; i++) {
    input_calc_end[i].addEventListener('change', function () {
      if (i == 0) {
        calc_options.name = input_calc_end[i].value;
      } else if (i == 1) {
        calc_options.telephone = input_calc_end[i].value;
      }
    });
  } //closing thirdwindow


  cacl_end_close.addEventListener('click', function () {
    ShowBalconType(0);

    for (let j = 0; j < icons.length; j++) {
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
  form_calc_end.addEventListener('submit', function (event) {
    event.preventDefault();
    form_calc_end.appendChild(statusMessage); //AJAX

    let request2 = new XMLHttpRequest();
    request2.open("POST", 'server.php');
    request2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let formData = new FormData(calc_options);
    request2.send(formData);

    request2.onreadystatechange = function () {
      if (request2.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request2.readyState === 4) {
        if (request2.status == 200 && request2.status < 300) {
          statusMessage.innerHTML = message.succes; //добавляем контент на страницу
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };
  });

  for (let j = 0; j < icons.length; j++) {
    icons_img[j].style.width = '20' + '%';
  }

  icons_img[0].style.width = '30' + '%';
  select_profile.value = 'tree';
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
}

;
module.exports = calc;