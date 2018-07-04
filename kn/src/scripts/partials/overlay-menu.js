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
	


	// swith between product and its content
	let $products = $('.overlay-menu-products-single');
	let $back = $products.find('.product-back');
	let $back_2 = $products.find('.product-back-2');


	let enteranceAnimation = ($('html').attr('dir') === 'rtl') ? 'fadeInLeft' : 'fadeInRight';
	let exitAnimation = ($('html').attr('dir') === 'rtl') ? 'fadeOutRight' : 'fadeOutLeft';
	let animationPrefix = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
	// adding d-none class to all of products childrens except product name
	$products.each(function(i, product){
		$(product).children().not(':first-child').addClass('d-none');
		let $products_name = $(product).find('.product-name');
		$products_name.each(function(i, product_name){
			$(product_name).on('click', function () {
				$(this).addClass(`${exitAnimation} animated`).one(animationPrefix, function () {
					$(product_name).addClass('d-none');
					$(this).removeClass(`${exitAnimation} animated`);
					$(product_name).next().removeClass('d-none').addClass(`${enteranceAnimation} animated`).on(animationPrefix, function(){
						$(this).removeClass(`${enteranceAnimation} animated`);
					});
					let $product_list_items = $(product).find('.product-content-list li');
					$product_list_items.each(function (i, product_list_item) {
						$(product_list_item).on('click', function () {
							let item = $(this);
							let target = $(item).data('target');
							$(item).parent().parent().addClass(`${exitAnimation} animated`).one(animationPrefix, function(){
								$(this).addClass('d-none').removeClass(`${exitAnimation} animated`);
								$(`#${target}`).removeClass('d-none').addClass(`${enteranceAnimation} animated`).on(animationPrefix, function(){
									$(this).removeClass(`${enteranceAnimation} animated`);
								});
							});
						});
					});
				});
			})
		});
	});
	// product_back_2 stands for back button of layer 2
	$back_2.each(function(i, product_back_2){
		$(product_back_2).on('click', function(){
			let $parent = $(this).parent();
			let $prev = $(this).parent().prev();
			console.log($prev)
			if(!$parent.hasClass('d-none') && $prev.hasClass('d-none')){
				$parent.addClass('fadeOutRight animated').one(animationPrefix, function () {
					$parent.addClass('d-none').removeClass('fadeOutRight animated');
					$prev.removeClass('d-none').addClass('fadeInLeft animated').one(animationPrefix, function(){
						$(this).removeClass('fadeInLeft animated');
					});
				});
			}
		});
	});
	// product_back stands for back button of layer 1
	$back.each(function (i, product_back) {
		$(product_back).on('click', function () {
			let $parent = $(this).parent();
			let $prev = $(this).parent().prev();
			console.log($prev)
			if (!$parent.hasClass('d-none') && $prev.hasClass('d-none')) {
				$parent.addClass('fadeOutRight animated').one(animationPrefix, function () {
					$parent.addClass('d-none').removeClass('fadeOutRight animated');
					$prev.removeClass('d-none').addClass('fadeInLeft animated').one(animationPrefix, function () {
						$(this).removeClass('fadeInLeft animated');
					});
				});
			}
		});
	});

};