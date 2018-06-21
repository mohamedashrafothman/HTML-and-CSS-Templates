module.exports = function navSearchBar(){
	// caching dom
	let $searchIcon = $('.navbar-search-icon');
	let $searchForm = $('.navbar-form');
	let $searchInput = $searchForm.find('.form-control');
	let $searchClose = $searchForm.find('.navbar-form-clear span');

	$searchIcon.on('click', function(){
		$searchForm.css({"display":"flex"}).animate({"opacity":1, "right":"0px"}, 250);
		$(this).hide();
	});
	$searchClose.on('click', function () {
		$searchForm.animate({"right":"-300px"}, 500, function(){$(this).css({"display":"none","opacity":0})});
		$searchIcon.fadeIn(500);
	});
};