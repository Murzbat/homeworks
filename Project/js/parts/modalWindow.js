function modalWindow() {
  // modal
  let header_btn = document.querySelector('.header_btn'),
      modalForm1 = document.querySelector('.popup_engineer'),
      popup_close = document.querySelectorAll('.popup_close'),
      phone = document.querySelectorAll('.phone_link'),
      modalForm2 = document.querySelector('.popup'); // calling modal window

  header_btn.addEventListener('click', function () {
    modalForm1.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }); //closing the modal window by clicking on the overlay

  modalForm1.addEventListener('click', function () {
    if (event.target == modalForm1) {
      modalForm1.style.display = 'none';
    }
  });
  modalForm2.addEventListener('click', function () {
    if (event.target == modalForm2) {
      modalForm2.style.display = 'none';
    }
  });

  for (i = 0; i < phone.length; i++) {
    // calling modal window	
    phone[i].addEventListener('click', function () {
      event.preventDefault();
      modalForm2.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  } // closing the modal window by clicking on the X


  popup_close[1].addEventListener('click', function () {
    modalForm1.style.display = 'none';
    document.body.style.overflow = '';
  });
  popup_close[0].addEventListener('click', function () {
    modalForm2.style.display = 'none';
    document.body.style.overflow = '';
  });
}

module.exports = modalWindow;