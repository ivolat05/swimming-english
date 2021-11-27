//= components/slick.min.js
//= components/jquery.mCustomScrollbar.js
//= components/jquery.magnific-popup.js
$('.popup-content').magnificPopup({
    type: 'inline'
});

$('.menu__burger').click((event) => {
    $('.menu__burger').toggleClass('burger__active'),
        $('body').toggleClass('stop'),
        $('.burger-link').toggleClass('burger-link-stop'),
        $('.header__wrapp-inner').toggleClass('header__wrapp-inner--active'),
        $('.logo').toggleClass('logo--active')
});


function closePopup() {
    $.magnificPopup.close();
}

$('.popup-slider-2').magnificPopup({
    type: 'inline',
    alignTop: true,
    callbacks: {
        open: function () {
            $('.popup-slaider-2').slick({
                infinite: true,
                arrows: true,
                dots: false,
                prevArrow: '<button class="slick-btn slick-prev"><img src="../../assets/img/arrow-left.svg" alt="prev"></button>',
                nextArrow: '<button class="slick-btn slick-next"><img src="../../assets/img/arrow-right.svg" alt="next"></button>',
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 830,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                ]
            });
        }
    }
});

$('.popup-slider').magnificPopup({
    type: 'inline',
    alignTop: true,
    callbacks: {
        open: function () {
            $('.popup-slaider').slick({
                infinite: true,
                arrows: true,
                dots: false,
                prevArrow: '<button class="slick-btn slick-prev"><img src="../../assets/img/arrow-left.svg" alt="prev"></button>',
                nextArrow: '<button class="slick-btn slick-next"><img src="../../assets/img/arrow-right.svg" alt="next"></button>',
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1670,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1130,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 830,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

                ]
            });
        }
    }
});

$(function () {
    $('.news__slaider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.reviews__slaider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });





    const popupFormInput = document.querySelectorAll('.popup-form-input');
    popupFormInput.forEach((item) => {
        item.addEventListener('mouseout', function () {
            if (item.value != '') {
                item.classList.add('red-del');
            }
            if (item.value == '') {
                item.classList.remove('red-del');
            }
        });
    });

    //scroll
    $(window).on("load", function () {
        $(".popup-slaider-content").mCustomScrollbar();
    });


    let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
    let popup = document.querySelector('.pop--up'); // Само окно
    let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
    let closePopupButton = document.querySelectorAll('.close-popup');

    openPopupButtons.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            popupBg.classList.add('active'); // Добавляем класс 'active' для фона
            popup.classList.add('active'); // И для самого окна
            document.querySelector('body').classList.add('stop');
        })
    });
    closePopupButton.forEach((item) => {
        item.addEventListener('click', () => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
            document.querySelector('body').classList.remove('stop');
        });
    })
    document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
        if (e.target === popupBg) { // Если цель клика - фот, то:
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
            document.querySelector('body').classList.remove('stop');
        }
    });
});