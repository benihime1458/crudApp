$(document).ready(function() {
	$('.submitForm').click(() => {
		let textFieldVal = $('.textField').val();
		$('.debug').text(textFieldVal);
	});
});