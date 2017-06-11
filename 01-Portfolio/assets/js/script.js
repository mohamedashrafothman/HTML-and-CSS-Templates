$(document).ready(function(){


	$('#enterName').on('keydown', function(e){
		$value = $(this).val();
		$(this).animate({'font-size':'28px'},500);
		if(e.keyCode === 13){
			alert(`Welcome ${$value}`);
		}
	});
	$('#enterName').on('focusout', function(){
		$(this).animate({'font-size':'26px'}, 500).attr("placeholder", `${$value}`);;
	});

	/*
	========== Tool Tip ================
	*/
	 $('[data-toggle="tooltip"]').tooltip();


	/*
	========== Smoth Scroll =============
	*/

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		  &&
		  location.hostname == this.hostname
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
		    }, 1000, function() {
		      // Callback after animation
		      // Must change focus!
		      var $target = $(target);
		      $target.focus();
		      if ($target.is(":focus")) { // Checking if the target was focused
		        return false;
		      } else {
		        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		        $target.focus(); // Set focus again
		      };
		    });
		  }
		}
	});


	var slider = {
		init: function(auto){
			slider.renderHTML();
			slider.bindEvents();
			slider.ShowSlide(1);
			if(auto===true){
				slider.AutomaticSlide();
			}
		},
		renderHTML: function(){
			slider.$nextArrow 	= $('.next');
			slider.$prevArrow 	= $('.prev');
			slider.$slides 	= $('.mySlide');	// select first slide div
			slider.$slideIndex 	= slider.$slides.first().length;	// equal '1'
		},
		bindEvents: function(){
			// 'Next' and 'Previes' buttons events
			slider.$prevArrow.on('click', function(){
				slider.pauseAutomatic();
				slider.MoveSlide(-1);
			});

			slider.$nextArrow.on('click', function(){
				slider.pauseAutomatic();
				slider.MoveSlide(1);
			});



		},
		ShowSlide: function(n){
			var i;
			if(n>slider.$slides.length){slider.$slideIndex = 1;}
			if(n<1){slider.$slideIndex = slider.$slides.length;}


			slider.$slides.each(function(){
				slider.$slides.css({display:'none'});
			});


			slider.$slides.eq(slider.$slideIndex-1).css({display:'block'});
		},
		MoveSlide: function(n){
			slider.ShowSlide(slider.$slideIndex += n);
		},
		CurrentSlide: function(n){
			slider.ShowSlide(slider.$slideIndex = n);
		},
		AutomaticSlide: function(){
			slider.$slides.each(function(){
				slider.$slides.css({display:'none'});
			});


			slider.$slideIndex++;

			if(slider.$slideIndex>slider.$slides.length){slider.$slideIndex = 1;}
			slider.$slides.eq(slider.$slideIndex-1).css({display:'block'});

			slider.$timeOut = setTimeout(slider.AutomaticSlide, 5000);
		},
		pauseAutomatic: function(){
			clearTimeout(slider.$timeOut);
		}

	};
	slider.init(true); // set automatic by True to enable automatic slideshow
});
