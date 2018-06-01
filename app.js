$(document).ready(function() {
	$('.setData').click(() => {
		let textFieldVal = $('.textField').val();
		$('.debug').text(textFieldVal);

		localStorage.setItem('myFormTextData', textFieldVal);
		$('.textField').val('');
	});

	$('.getData').click(() => {
		let retrievedData = localStorage.getItem('myFormTextData');
		$('.debug').text(retrievedData);
	});
});