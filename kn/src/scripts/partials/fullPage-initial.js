module.exports = function fullPage(){
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
		sectionsColor: ['#f2f2f2', '#00ADEE', '#e8e8e8', '#15323c', '#15323C', "#fff", '#16323B'],
		menu: '#menu',
		scrollingSpeed: 1000,
		navigation: true,
		keyboardScrolling: true,
		loopBottom: true,
		autoScrolling: false,
		navigationPosition: 'right',
		responsiveHeight: 500,
		responsiveSlides: true
		// fixedElements: '#main-sec'
		// navigationTooltips: ['First', 'Second', 'Third', '4th', '5th', '6th', 'footer']
	});


	(function ($) {
		$.fn.isBgColor = function (color) {
			var thisBgColor = this.eq(0).css('backgroundColor');
			var computedColor = $('<div/>').css({
				backgroundColor: color
			}).css('backgroundColor');
			return thisBgColor === computedColor;
		}
	})(jQuery);
	
	// change color of side navbar
	(function($){
		var $nav = $('#fp-nav');

		$(window).on('scroll', function(){
			$('#fullpage .section').each(function(){
				var scrollTop = $(window).scrollTop();
				var elementOffset = $(this).offset().top;
				var elementDistance = (elementOffset - scrollTop);
				if ($(this).isBgColor('#fff') || elementDistance >= 500 && elementDistance <= 1300 ) {
					$nav.css("border-color", '#00ADEE');
					$nav.find('a span').css('border-color', '#00ADEE');
					$nav.find('a.active span').css('background-color', 'transparent');
				} else {
					$nav.css("border-color", '#fff');
					$nav.find('a span').css('border-color', '#fff');
					$nav.find('a.active span').css('background-color', 'transparent');

				}
				
			});
		});
		



	})(jQuery);
};