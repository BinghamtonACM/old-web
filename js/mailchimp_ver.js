/* ---------------------------------------
	Signup Form - Verification Functions
------------------------------------------*/

$("#mce-EMAIL").on("focusout", function() {
	var result = isValidEmailAddress(this.value, $("#mce-EMAIL").val().length);
    if(result) {
    	$('#email-hint').text("Valid email address!");
    	$("#mce-EMAIL ~ div").toggleClass("error-visible", false);
    	$("#mce-EMAIL").toggleClass("unverifiedEmail", false);
    	$("#mce-EMAIL").toggleClass("verifiedEmail", true);
    }
    else {
    	$('#email-hint').text("Error: Invalid email address");
    	$("#mce-EMAIL").toggleClass("error-visible", true);
    	$("#mce-EMAIL").toggleClass("verifiedEmail", false);
    	$("#mce-EMAIL").toggleClass("unverifiedEmail", true);
    }
});


function isValidEmailAddress(email, length) {
	if (length > 0) {
		var emailReg = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i);
		return emailReg.test(email);
	}
	return false;
}