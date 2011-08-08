$(document).ready( function() {
		
	// Grab the background image and add it to the body tag
	$('body').css('background-image', 'url("images/market.jpg")');
	
	// HTML5 aufocus with jQuery backup
	if (!("autofocus" in document.createElement("input"))) {
		$('#email-field').focus();
	}
	
	// Slide open/close the form
	var formState = $('#launch-form').css('display');
	$('#form-open').click( function () {
		if (formState == 'none') {
			$('#launch-form').slideDown();
			formState = 'block';
		} else {
			$('#email-field').css({
				'border': '2px red solid',
				'width' : '396px'
			})
		}
	
	})
	
	$('#form-submit').click( function() {
		
		var emailAddy = $("#email-field").val();
		var quickQ = $("input:radio").val();
		
		alert( 'email:' + emailAddy + 'question:' + quickQ ); 
		
		return validateForm(emailAddy);
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone;  
		
		$.ajax({  
			type: "POST",  
			url: "https://spreadsheets.google.com/spreadsheet/formResponse?formkey=dFo0TDV1b3JxZTFzU05UWGhxQ1dGTlE6MQ",  
			data: dataString,  
			success: function() {  
				$('#contact_form').html("<div id='message'></div>");  
				$('#message').html("<h2>Contact Form Submitted!</h2>")  
					.append("<p>We will be in touch soon.</p>")  
					.hide()  
					.fadeIn(1500, function() {  
						$('#message').append("<img id='checkmark' src='images/check.png' />");  
					});  
			}  
		});  
		return false;  
		
	});
	
});

function validateForm (emailaddressVal) {
	var hasError = false;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	if(emailaddressVal == '') {
		alert('Please enter your email address.');
		hasError = true;
	}

	else if(!emailReg.test(emailaddressVal)) {
		alert('Please enter a valid email address.');
		hasError = true;
	}

	if(hasError == true) { return false; }
}

