module.exports = function customFileInput(){
	function showPreview(objFileInput, targetLayer2) {
		if (objFileInput.files[0]) {
			var fileReader = new FileReader();
			fileReader.onload = function (e) {
				$(targetLayer2).html('<img src="' + e.target.result + '" width="100px" height="100px" class="upload-preview" />')
					.css('opacity', '0.7');
				$(".icon-choose-image").css('opacity', '0.5');
			}
			fileReader.readAsDataURL(objFileInput.files[0]);
		}
	}
};