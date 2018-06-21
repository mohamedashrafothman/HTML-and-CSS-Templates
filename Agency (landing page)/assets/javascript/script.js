$(document).ready(function(){

    /*
    	===================== NavBar Scroll Effect =====================
    */
    $(window).scroll(function() {
        if ($(this).scrollTop() < 20) {
            $('#navbar').removeClass('header-active');
        } else {
            $('#navbar').addClass('header-active');
        }
    });


    /*
    	===================== Scroll Smothy =====================
    */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .click(function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
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


    /*
    	===================== Footer Licence Year =====================
    */
    $('#license-year').html(new Date().getFullYear());


    /*
    	===================== Side Bar =====================
    */
	$('.sidebar-icon').on('click', function(e){
		e.preventDefault();
		$('.sidebar').addClass('open');
		if($('.sidebar').hasClass('open')){
			$('.navbar-close-icon, .sidebar-menu-items>ul>li').on('click', function(e){
				e.preventDefault();
				$('.sidebar').removeClass('open');
			});
		}
	});


    /*
    	===================== Activat Wow.js =====================
    */
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();
});
