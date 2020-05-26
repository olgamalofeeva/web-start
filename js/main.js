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

  var thanks = $('.thanks'),
      closeThanksBtn = $('.thanks__close');

  closeThanksBtn.on('click', function () {
    thanks.toggleClass('thanks--visible');
  });
  $(document).keypress(function (e) {
    if (e.keyCode == 27) {
      thanks.toggleClass('thanks--visible');
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

  var mySwiper = new Swiper ('.projects-slider', {
    loop: true,
    
    pagination: {
      el: '.projects-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects-button-next',
      prevEl: '.projects-button-prev',
    }
  });

  var next = $('.projects-button-next'),
      prev = $('.projects-button-prev'),
      bullets = $('.projects-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10)

  var mySwiperActivity = new Swiper ('.activity-slider', {
    loop: true,
    
    pagination: {
      el: '.activity-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.activity-button-next',
      prevEl: '.activity-button-prev',
    }
  });

  var nextActivity = $('.activity-button-next'),
      prevActivity = $('.activity-button-prev'),
      bulletsActivity = $('.activity-pagination');

  nextActivity.css('left', prevActivity.width() + 10 + bulletsActivity.width() + 10);
  bulletsActivity.css('left', prevActivity.width() + 10)

  new WOW().init();

  //Валидация checkbox
  $('#policy-checkbox').on('change', function () {
    if ( $('#policy-checkbox').prop('checked') ) {
        $('.modal__button').attr('disabled', false);
    } else {
        $('.modal__button').attr('disabled', true);
    }
  });

  $('#policy-checkbox--footer').on('change', function () {
    if ( $('#policy-checkbox--footer').prop('checked') ) {
        $('.footer__button').attr('disabled', false);
    } else {
        $('.footer__button').attr('disabled', true);
    }
  });

  $('#policy-checkbox-control').on('change', function () {
    if ( $('#policy-checkbox-control').prop('checked') ) {
        $('.control__button').attr('disabled', false);
    } else {
        $('.control__button').attr('disabled', true);
    }
  });

//Валидвация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },// сообщения
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: "Заполните поле",
    userEmail: {
      required: "Обязательно введите email",
      email: "Введите в формате name@domain.com"
    }
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        thanks.toggleClass('thanks--visible');
      }
    });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      }
    },// сообщения
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: {
      required: "Заполните поле",
    }
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        thanks.toggleClass('thanks--visible');
      }
    });
    }
  });
  
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило объект (блок)
      userQuestion: {
        required: true,
        minlength: 2
      }
    },// сообщения
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: "Заполните поле",
    userQuestion: {
      required: "Заполните поле",
    }
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        thanks.toggleClass('thanks--visible');
      }
    });
    }
  });

//маска для номера телефона

$('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

//создаем yandex карту

var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '465',
    width: '100%',
    videoId: 'RHzzLqJWqHs',
    events: {
      'onReady': videoPlay,
    }
  });
})

  function videoPlay(event) {
    event.target.playVideo();
  }
});
