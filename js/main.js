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

  new WOW().init();

  //Валидвация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
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
  }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
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
    userEmail: {
      required: "Обязательно введите email",
      email: "Введите в формате name@domain.com"
    }
  }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
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
  }
  });

//маска для номера телефона

$('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

//создаем yandex карту

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.732692, 37.562344],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Наш офис',
          balloonContent: 'Вход со двора'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/location.png',
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
});
