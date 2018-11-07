
$(document).ready(function () {

    var owlTwo = $('.owl-two');
    var owlThree = $('.owl-three');
    var owlFour = $('.owl-four');


    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplaySpeed: 300,
        items: 1,
    });

    owlTwo.owlCarousel({
        nav: false,
        loop: true,
        responsive: {
            1: {
                items: 1,
                margin: 0,
                center: true,
                mouseDrag: true
            },
            768: {
                items: 4,
                center: false,
                margin: 15
            }
        }
    });

    owlThree.owlCarousel({
        nav: false,
        responsive: {
            1: {
                items: 1,
                loop: true,
                margin: 20,
                center: true,
                mouseDrag: true
            },
            768: {
                items: 4,
                nav: false,
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                stagePadding: 10,
                autoWidth: true,
                center: true
            }
        }
    });

    owlFour.owlCarousel({
        nav: false,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        stagePadding: 0,
        center: false,
        responsive: {
            1: {
                items: 1,
                center: true,
                margin: 0,
                mouseDrag: true,
                nav: false
            },
            768: {
                items: 3,
                center: false,
                margin: 0,
                loop: false,
                mouseDrag: false
            }
        }
    });

    //Carousell - News

    $('.owl-two-nav-prev').click(function () {
        owlTwo.trigger('next.owl.carousel');
    })
    $('.owl-two-nav-next').click(function () {
        owlTwo.trigger('prev.owl.carousel');
    })

    //Carousell - Footer

    $('.owl-three-nav-prev').click(function () {
        owlThree.trigger('next.owl.carousel');
    })
    $('.owl-three-nav-next').click(function () {
        owlThree.trigger('prev.owl.carousel');
    })

    //Carousell - Contact

    $('.owl-four-nav-prev').click(function () {
        owlFour.trigger('next.owl.carousel');
    })
    $('.owl-four-nav-next').click(function () {
        owlFour.trigger('prev.owl.carousel');
    })

});






