//= components/slick.min.js
//= components/jquery.mCustomScrollbar.js

//menu
$('.menu__burger').click((event) => {
    $('.menu__burger').toggleClass('burger__active'),
        $('body').toggleClass('stop'),
        $('.burger-link').toggleClass('burger-link-stop'),
        $('.header__wrapp-inner').toggleClass('header__wrapp-inner--active'),
        $('.logo').toggleClass('logo--active')
});



//slaider
$('.popup-slaider-2').slick({
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
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



$('.popup-slaider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-btn slick-prev"><img src="./assets/img/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./assets/img/arrow-right.svg" alt="next"></button>',
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




    // удаление добовление звездочки в input
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

    // scroll speed
    $(".scroll-link").click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 2500);
        return false;
    });

    // scroll speed fix
    let navListLink = document.querySelectorAll('.nav__list-link');
    navListLink.forEach((item) => {

        item.addEventListener('click', () => {
            document.querySelector('body').classList.remove('stop');
        });

    });

    // pop-up
    let popupBg = document.querySelector('.popup__bg');
    let fonNew = document.querySelector('.popup__new');
    let fonYoutube = document.querySelector('.popup__youtube');
    let fonWrite = document.querySelector('.fon__write');// Фон попап окна
    let popup = document.querySelector('.pop--up');
    let popNew = document.querySelector('.pop-new');
    let popWrite = document.querySelector('.pop--up__write');
    let popBell = document.querySelector('.pop--up__bell');
    let fonBell = document.querySelector('.fon__bell');
    let popYoutube = document.querySelector('.pop__youtube');// Само окно
    let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
    let openNews = document.querySelectorAll('.open-news');
    let openVidio = document.querySelectorAll('.open-vidio');
    let openWrite = document.querySelectorAll('.open-write');
    let openBell = document.querySelectorAll('.open-bell');
    let openRev = document.querySelectorAll('.rev__open');
    let closePopupButton = document.querySelectorAll('.close-popup');
    let fonRev = document.querySelector('.fon-rev');
    let popRev = document.querySelector('.pop-rev');
    let openChildr = document.querySelector('.open-child');
    let fonChildren = document.querySelector('.fon-children');
    let popChildren = document.querySelector('.pop-children');
    let openCours = document.querySelector('.open-cours');
    let fonCours = document.querySelector('.fon-cours');
    let popCours = document.querySelector('.pop-cours');



    // pop-up courses
    openCours.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        fonCours.classList.add('active'); // Добавляем класс 'active' для фона

        popCours.classList.add('active'); // И для самого окна

        document.querySelector('body').classList.add('stop');
    });

    // pop-up children
    openChildr.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        fonChildren.classList.add('active'); // Добавляем класс 'active' для фона

        popChildren.classList.add('active'); // И для самого окна

        document.querySelector('body').classList.add('stop');
    });

    // pop-up reviews
    openRev.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            fonRev.classList.add('active'); // Добавляем класс 'active' для фона

            popRev.classList.add('active'); // И для самого окна

            document.querySelector('body').classList.add('stop');
        })
    });

    // pop-up write
    openWrite.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            fonWrite.classList.add('active'); // Добавляем класс 'active' для фона

            popWrite.classList.add('active'); // И для самого окна

            document.querySelector('body').classList.add('stop');
            fonChildren.classList.remove('active');
            popChildren.classList.remove('active');
        })
    });

    // pop-up bell
    openBell.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            fonBell.classList.add('active'); // Добавляем класс 'active' для фона

            popBell.classList.add('active'); // И для самого окна
            document.querySelector('body').classList.add('stop');
        })
    });

    // pop-up vidio
    openVidio.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            fonYoutube.classList.add('active'); // Добавляем класс 'active' для фона
            popYoutube.classList.add('active'); // И для самого окна
            document.querySelector('body').classList.add('stop');
        })
    });
    // pop-up news
    openNews.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            fonNew.classList.add('active');
            // Добавляем класс 'active' для фона
            popNew.classList.add('active'); // И для самого окна
            document.querySelector('body').classList.add('stop');
        })
    });

    // pop-up close

    closePopupButton.forEach((item) => {
        item.addEventListener('click', () => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active');
            popNew.classList.remove('active');
            popYoutube.classList.remove('active');
            fonWrite.classList.remove('active');
            popBell.classList.remove('active');
            popWrite.classList.remove('active');
            fonNew.classList.remove('active');
            fonBell.classList.remove('active');
            fonYoutube.classList.remove('active'); // И с окна
            document.querySelector('body').classList.remove('stop');
            fonRev.classList.remove('active');
            popRev.classList.remove('active');
            fonChildren.classList.remove('active');
            popChildren.classList.remove('active');
            fonCours.classList.remove('active');
            popCours.classList.remove('active');
        });
    })

    // pop-up close
    openPopupButtons.forEach((item) => {
        item.addEventListener('click', () => { // Вешаем обработчик на крестик
            fonWrite.classList.remove('active');
            fonBell.classList.remove('active');
            popWrite.classList.remove('active');
            fonRev.classList.remove('active');
            popRev.classList.remove('active');

            document.querySelector('body').classList.remove('stop');
        });
    })



    // pop-up close
    document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
        if (e.target === popupBg) { // Если цель клика - фот, то:
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active');
            popNew.classList.remove('active');
            popYoutube.classList.remove('active');
            fonYoutube.classList.remove('active');
            fonWrite.classList.remove('active');
            popWrite.classList.remove('active');
            popBell.classList.remove('active');
            fonBell.classList.remove('active');
            popupNew.classList.remove('active'); // И с окна
            document.querySelector('body').classList.remove('stop');
            fonRev.classList.remove('active');
            popRev.classList.remove('active');
            fonChildren.classList.remove('active');
            popChildren.classList.remove('active');
            fonCours.classList.remove('active');
            popCours.classList.remove('active');
        }
    });

    // 
    openPopupButtons.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            popupBg.classList.add('active'); // Добавляем класс 'active' для фона
            popup.classList.add('active'); // И для самого окна
            document.querySelector('body').classList.add('stop');
        });
    });

});