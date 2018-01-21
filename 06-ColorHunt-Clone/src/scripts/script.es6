const $ = require('jquery');

$(document).ready(()=> {

	$('.menu.float-left').on('click', ()=> {
		$('.secound-level1').slideToggle();
		$('.secound-level2').slideUp();
	});
	$('.menu.float-right').on('click', () => {
		$('.secound-level2').slideToggle();
		$('.secound-level1').slideUp();
	});

	// color span
	$('.card__plate--one>span').on('click', (e)=> {
		e.preventDefault();
	});

	// setting color plate values
	(function(){
		$('#colorOne').val('#dddddd');
		$('#colorTwo').val('#cccccc');
		$('#colorThree').val('#bbbbbb');
		$('#colorFour').val('#aaaaaa');
	})();

	// $('#colorOne, #colorTwo, #colorThree, #colorFour').change(function() {
	// 	let value = $(this).val();
	// 	let id = $(this).attr('id');
	// 	alert(`${id}: ${value}`);
	// });
	// $('.colorPlate').on('submit', function(e){
	// 	e.preventDefault();
	// 	let values = [
	// 		$('#colorOne').val(),
	// 		$('#colorTwo').val(),
	// 		$('#colorThree').val(),
	// 		$('#colorFour').val()
	// 	];
	// 	alert(values);		
	// });
	
});