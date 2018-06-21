// const jQuery = require('jquery');

const overlayMenu      = require('./partials/overlay-menu');
const navSearchBar     = require('./partials/navSearchBar');
const fullPage         = require('./partials/fullPage-initial');
const owlCarouserlInit = require('./partials/owlCarousel-initial');
const switcher         = require('./partials/switch');
const customFileInput  = require('./partials/customFileInput');
const smothScroll      = require('./partials/smothScroll');
const easeScroll	   = require('./partials/easeScroll');

(function ($) {
	$(window).on('load', function () {
		$('.preloader').animate({opacity: 0}, 500, function(){$(this).removeClass('d-flex').addClass('d-none');});
	 });
	$(document).ready(function () {
		overlayMenu();
		navSearchBar();
		fullPage();
		owlCarouserlInit();
		switcher();
		customFileInput();
		smothScroll();
		easeScroll();
		new WOW().init();
	});
})(jQuery);