window.addEventListener('DOMContentLoaded', function() {
    $('.features-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    prevArrow: '<button class="prev arrow"> </button>',
                    nextArrow: '<button class="next arrow"> </button>',
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    prevArrow: '<button class="prev arrow"> </button>',
                    nextArrow: '<button class="next arrow"> </button>',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});