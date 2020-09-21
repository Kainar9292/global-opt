$(document).ready(function () {
    $('.reviews__carousel').slick({
        speed: 800,
        centerMode: true,
        slidesTOshow: 3,
        centerPadding: '100px',
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.svg"></button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: false,
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true
                }
            }
        ]
    });


    //Yandex Map

    //создаем переменную карта и переменную метка
    ymaps.ready(init);
    var myMap,
        myPlacemark,
        myPlacemarkWithContent;

    //Инициализируем нашу карту, задав ей координаты, устанавливаем масштаб карты
    function init() {
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.747956, 37.627202],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
        });

        //Создаём макет содержимого
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="map_address" style="">$[properties.iconContent]</div>'
            ),

            //Пишем свойства для нашей метки
            myPlacemark = new ymaps.Placemark([55.747956, 37.627202], {
                hintContent: 'Global Opt',
                balloonContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'icons/icon.png',
                // Размеры метки.
                iconImageSize: [62, 63],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-28, -60]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.747956, 37.627202], {
                iconContent: '<span class="map_city">г. Москва</span><br> ул.Садовническая, дом 5, офис 4-6<br> 700 от м.Новокузнецкая<br> Тел: +7(926) 423 01 00 <br><span class="map_email">info@glopt.ru<span>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                // iconImageHref: 'icons/address.png',
                // Размеры метки.
                // iconImageSize: [329, 158],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-150, 20],
                // iconContentOffset: [200, 0],
                iconContentLayout: MyIconContentLayout
            });

        //Добавляем метку на карту + убираем скролл мышкой
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemarkWithContent);
        myMap.behaviors.disable('scrollZoom');
    }


    //Smoth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1100) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


});

//Hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});



//скрол (появление значка стелка вверх)

$(window).scroll(function () {
    if ($(this).scrollTop() > 1100) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

// плавный скролл страницы
$("a[href^=#], a[href^=#tabs]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(_href).offset().top + "px"
    });
    return false;
});
