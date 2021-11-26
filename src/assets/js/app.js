//= components/slick.min.js
//= components/jquery.mCustomScrollbar.js


$(function () {
    $('.news__slaider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1110,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 753,
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
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1110,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 753,
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
        prevArrow: '<button class="slick-btn slick-prev"><img src="../../assets/img/arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="../../assets/img/arrow-right.svg" alt="next"></button>',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1110,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 753,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.popup-slaider-2').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button class="slick-btn slick-prev"><img src="../../assets/img/arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="../../assets/img/arrow-right.svg" alt="next"></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1110,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 753,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
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


});