$(document).ready(function(){
    // initial wow lib
    // new WOW().init();

    // NAVBAR
    var link = $('ul.first-level').children('li');
    link.hover(function(e){
        e.preventDefault();
        var that = $(this);
        if(that.children('ul.second-level').html() !== undefined){
            if(e.type === 'mouseenter'){
                that.children('ul.second-level').slideDown(300);
            }else{
                that.children('ul.second-level').slideUp(300);

            }
        }
    });
    // mobile navigation
    $('.nav-icon, .ion-android-close').on('click', function(e){
        e.preventDefault();
        if($('.mobile-side-nav').hasClass('open')){
            $('.mobile-side-nav').removeClass('open');
        }else{
            $('.mobile-side-nav').addClass('open');
        }
    });
    $(window).on('scroll', function(){
        if($(this).scrollTop() < 20){
            $('#header').removeClass('header-active');
        }else{
            $('#header').addClass('header-active');
        }
    });


     /*
       ===================== portfolio section =====================
   */   
    var $container = $('.portfolio_container');
    if ($container.length){
        $container.isotope({
           filter: '*',
       });
       $('.portfolio_filter').children('li').on('click', function (e) {
           e.preventDefault();
           $(this).siblings().children('a').removeClass('active-portfolio');
           $(this).children('a').addClass('active-portfolio');
           var selector = $(this).children('a').attr('data-filter');
           $container.isotope({
               filter: selector,
               animationOptions: {
                   duration: 500,
                   animationEngine: "jquery"
               }
           });
           return false;
       });
   }


    /*
       ===================== Scroll Smothy =====================
   */
    // Select all links with hashes
    $('a[href*="#"]')
    .not('[href="#"]')
    .on('click' ,function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });

});