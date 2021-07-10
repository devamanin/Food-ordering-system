
$(document).ready(function(){

    // aos (animate on scroll)
    AOS.init();

    // navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });

    // navbar background change in scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 80){
            $('.navbar').addClass('bg-navbar');
        } else {
            $('.navbar').removeClass('bg-navbar');
        }
    });

    // smooth scroll
    let links = $('.navbar-nav a.nav-link.ad');
    links.click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700);
    });


    // popup gallery 
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return '<small>by Backyard Bistro</small>';
                }
            }
        });
    });

    // slick slider 
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    document.getElementsByClassName('contact-btn')[0].addEventListener('click', function(){
        let fullName = document.getElementsByClassName('form-control')[0].value;
    let email = document.getElementsByClassName('form-control')[1].value;
    let subject = document.getElementsByClassName('form-control')[2].value;
    let message = document.getElementsByClassName('form-control')[3].value;
    let serverData = {'fullName':fullName, 'email':email, 'subject':subject, 'message':message};
    let request = $.ajax({
        type: 'POST',
        url: 'https://upper-eh-24269.herokuapp.com/contact/',
        data: JSON.stringify(serverData),
        contentType: "application/json"
    })
    request.done(function(data){
        document.getElementsByClassName('contact-us-response')[0].style.display = "flex";
    })

    })
    


});