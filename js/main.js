$(document).ready(function () { 
  
  new WOW().init();

  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      modalDialog = $('.modal__dialog'),
      btnUp = $('.scroll-up'),
      scrollDown = $('.hero__scroll-down');

  modalBtn.on('click', function () {
     modal.toggleClass('modal--visible');
  }); 

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  
  $(document).keypress(function (e) {
    if (e.keyCode === 27) {
      modal.toggleClass('modal--visible');
    }
});
  modal.on('click', function(e){
    if(!(modalDialog.contains(e.target))) {
      modal.toggleClass('modal--visible');
    }
  })

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
  scrollDown.on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:700}, '1500');
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

  next.css('left', prev.width() + 15 + bullets.width() + 15);
  bullets.css('left', prev.width() + 15)

  $('.modal__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true
      }
    },
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
    },
    policyCheckbox: {
      required: "Вам нужно согласиться с обработкой данных"
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
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckboxControl: {
        required: true
      }
    },
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: "Заполните поле",
    policyCheckboxControl: {
      required: "Вам нужно согласиться с обработкой данных"
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
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: {
        required: true,
        minlength: 2
      },
      policyCheckboxFooter: {
        required: true
      }
    },
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: "Заполните поле",
    userQuestion: {
      required: "Заполните поле",
    },
    policyCheckboxFooter: {
      required: "Вам нужно согласиться с обработкой данных"
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

$('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

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

$("#menu").on("click","a", function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
$("#footerMenu").on("click","a", function (event) {
event.preventDefault();
var id  = $(this).attr('href'),
top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 1500);
});

});
