$(document).ready(function () {
            $('.reviews__carousel').slick({
                speed: 800,
                centerMode: true,
                slidesTOshow: 3,
                adaptiveHeight: true,
                centerPadding: '60px',
                prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png"></button>',
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        arrows: false,
                        adaptiveWidth: true,
                        infinite: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});