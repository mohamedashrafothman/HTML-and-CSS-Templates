$(document).ready(function(){

	// NavBar Scroll Effect
	$(window).scroll(function(){
		if($(this).scrollTop() > 20){
			$('#nav').addClass('active');
		} else {
			$('#nav').removeClass('active');
		}
	});


	// side Nav Bar
	$('#nav-icon').on('click', function(e){
		e.preventDefault();
		$('#side-menu').addClass('open');
		if($('#side-menu').hasClass('open')){
			$('#close-side-menu').on('click', function(e){
				e.preventDefault();
				$('#side-menu').removeClass('open');
			});
		}
	});

	// Wow Animations
	wow = new WOW(
		{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       0,          // default
			mobile:       true,       // default
			live:         true        // default
		}
	)
	wow.init();

	// Magnific Popup
	$(".lightbox").magnificPopup();

});
