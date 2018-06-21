module.exports = function overlayMnu() {
	// caching dom
	let $nav = $('.navbar');
	let $navIcon = $nav.find('.navbar-icon');
	let $overlayMenu = $('.overlay');
	let $overlayClose = $overlayMenu.find('.overlay-menu-close');

	function hide(e) {
		e.preventDefault();
		if ($overlayMenu.hasClass('hidden')) {
			$overlayMenu.removeClass('hidden');
		} else {
			$overlayMenu.addClass('hidden');
		}
	}

	$navIcon.bind('click', hide);
	$overlayClose.bind('click', hide);
	

};