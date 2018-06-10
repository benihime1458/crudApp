$(document).ready(function() {

	// CodeMirror 
	let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        matchBrackets: true,
        continueComments: "Enter",
        extraKeys: {"Ctrl-Q": "toggleComment"},
        theme: "solarized dark"
      });

	let codeSnip = editor.getValue();
	let codeName = $('.codeName').val();
	let snipName = $('#snipName').text();

	// Click Handlers
	$('.saveSnip').click(() => {
		codeSnip = editor.getValue();
		codeName = $('.codeName').val();

		if (codeName.length > 1) {
			$('#snipName').text(codeName)
			localStorage.setItem(codeName, codeSnip);
		} else {
			alert("The heck is your snippet name?!");
		}
	});

	$('.getData').click(() => {
		codeName = $('.codeName').val();
		let retrievedData = localStorage.getItem(codeName);
		$('#snipName').text(codeName)
		editor.setValue(retrievedData);
	});

	$('.resetData').click(() => {
		$('#snipName').text('')
		editor.setValue('')
	});

	$('.listAll').click(() => {
		for (var key in localStorage) {
			let listItem = `<textarea id="${key}"></textarea>`;
			$('.container').append(`<h4>${key}</h4>`);
			$(`.container`).append(listItem);
			let newCode = CodeMirror.fromTextArea(document.getElementById(key), {
        lineNumbers: true,
        matchBrackets: true,
        continueComments: "Enter",
        readOnly: true,
        theme: "solarized dark",
        extraKeys: {"Ctrl-Q": "toggleComment"}
      });
      newCode.setValue(localStorage[key]);
		}
	});

});