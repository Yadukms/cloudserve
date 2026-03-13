$('.my-owl').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})


$('.my-owl-2').owlCarousel({
    center: true,
    items:2,
    loop:true,
    dots: false,
    nav: false,
    margin:40,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:false
        }
    }
});

$('.my-owl-3').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:40,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:false
        }
    }
});

