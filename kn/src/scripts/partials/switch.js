module.exports = function(){
	// caching dom
	const $clients_sec = $('#about-clients')
	const $client	   = $clients_sec.find('.about-clients');
	const $partner	   = $clients_sec.find('.about-partners');
	const $switch      = $('.switch-toggles');


	// adding class active to first switcher and first content
	$switch.find('.clients').addClass('active');
	// $clients_sec.find('.clients').addClass('active');
	$client.addClass('active');

	// Events
	$switch.find('.clients').on('click', function () {
		// removing add active class and remove it from it's siblings
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		$client.addClass('active');
		$partner.removeClass('active');
	});

	$switch.find('.partner').on('click', function () {
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		$partner.addClass('active');
		$client.removeClass('active');
	});
}