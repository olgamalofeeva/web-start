$(document).ready(function () { 
  
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      btnUp = $('.scroll-up');


  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  }); 

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).keypress(function (e) {
    if (e.keyCode == 27) {
      modal.toggleClass('modal--visible');
    }
});

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btnUp.toggleClass('scroll-up--show');
    } else {
      btnUp.removeClass('scroll-up--show');
    }
  });
  btnUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '500');
  });
});
