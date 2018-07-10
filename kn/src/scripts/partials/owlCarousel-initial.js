module.exports = function owlCarouserInit(){
	$('#main-sec-owl').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 2500,
		autoplayHoverPause: true,
		navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>'],
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 4
			},
			1000: {
				items: 5
			}
		}
	});

	$('#product-showcase-sec-carousel').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		URLhashListener: true,
		// autoplayHoverPause: true,
		center: true,
		// autoplay: true,
		// autoplayTimeout: 2500,
		startPosition: 'showcase-one',
		navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>'],
		items: 1
	});

	$('#industries-sec-carousel, #services-features-carousel, #single-news-more-carousel, #single-product-role-carousel').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		URLhashListener: true,
		center: true,
		// autoplay: true,
		// autoplayTimeout: 2500,
		// autoplayHoverPause: true,
		startPosition: 'industries-one',
		navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>'],
		items: 1
	});

	(function($){
		// cach dom
		let $sliderOne = $('#countries-sec-slider-one');
		let $sliderTwo = $('#countries-sec-slider-two');
		$sliderOne.owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>'],
			items: 1,
			center: true
		});
		$sliderTwo.owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>'],
			items: 1,
			center: true,
			// animateIn: 'fade-in',
			// animateOut: 'fade-out'
		});

		let $nextBtn = $sliderOne.find('.owl-nav .owl-next');
		let $prevBtn = $sliderOne.find('.owl-nav .owl-prev');
		
		$nextBtn.on('click', function(){
			$sliderOne.trigger('next.owl.carousel');
			$sliderTwo.trigger('next.owl.carousel', [750]);
			
		});
		$prevBtn.on('click', function () {
			$sliderOne.trigger('prev.owl.carousel', [300]);
			$sliderTwo.trigger('prev.owl.carousel', [750]);

		});


	})(jQuery);


	$('#product-users-owl').owlCarousel({
		loop: true,
		margin: 30,
		dots: true,
		nav: false,
		autoplay: true,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
		responsive: {
			0: {
				items: 4
			},
			600: {
				items: 4
			},
			1000: {
				items: 6
			}
		}
	});

	$('#single-product-features-carousel').owlCarousel({
		loop: true,
		margin: 30,
		dots: true,
		nav: false,
		autoplay: true,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});


	
	// adding active class to home page's industry carousel nav
	// caching dom
	var $carouselIndust = $('#industries-sec-carousel');
	var $carouselFeature = $('#services-features-carousel');
	var $carouselRole = $('#single-product-role-carousel');
	$carouselIndust.on('changed.owl.carousel', function(e) {
		var $Nav = $('#industries-sec-carouselNav').find('a');
		$Nav.eq(e.item.index-2).addClass('active').siblings().removeClass('active');
	});
	$carouselFeature.on('changed.owl.carousel', function (e) {
		var $Nav = $('#services-features-carouselNav').find('a');
		$Nav.eq(e.item.index - 2).addClass('active').siblings().removeClass('active');
	});
	$carouselRole.on('changed.owl.carousel', function (e) {
		var $Nav = $('#single-product-role-carouselNav').find('a');
		$Nav.eq(e.item.index - 2).addClass('active').siblings().removeClass('active');
	});
};