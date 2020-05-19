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

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var next = $('.swiper-button-next'),
      prev = $('.swiper-button-prev'),
      bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10)
});
