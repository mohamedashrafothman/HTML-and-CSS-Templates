module.exports = function navSearchBar(){
	let $searchIcon = $('.navbar-search-icon');
	let $searchForm = $('.navbar-form');
	let $searchInput = $searchForm.find('.form-control');
	let $searchClose = $searchForm.find('.navbar-form-clear span');
	

	// get direction of html
	let dir = $('html').attr('dir');
	let startAnimationName = dir === 'rtl' ? 'fadeInLeft' : 'fadeInRight';
	let endAnimationName = dir === 'rtl' ? 'fadeOutLeft' : 'fadeOutRight';
	console.log(startAnimationName);

	$searchIcon.on('click', function(){
		$(this).hide();
		$searchForm.addClass(`animated ${startAnimationName} d-flex`).one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function(){
			console.log('animation done');
		})
	})
	$searchClose.on('click', function(){
		if($searchForm.hasClass('animated')){
			$searchForm.removeClass(`${startAnimationName} animated`).addClass(`${endAnimationName} animated`).one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function(){
				$(this).removeClass(`d-flex animated ${endAnimationName}`);
				$searchIcon.fadeIn(250);
				console.log('animation done');
			})
		}
	});
};