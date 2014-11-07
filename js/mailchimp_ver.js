/* ---------------------------------------
	Signup Form - Verification Functions
------------------------------------------*/

// Criteria to successfully submit
var emailCheck, fNameCheck, lNameCheck = false;

$("#mce-EMAIL").on("focusout", function() {
    var email = this.value;
    emailCheck = isValidEmailAddress(email);

    if(email.length > 0 && emailCheck) {
        $('#email-fdbk').text("Valid email address!");              // Feedback
        $("#mce-EMAIL ~ div").toggleClass("inputFeedback", false);  // Hide errors
        $("#mce-EMAIL").toggleClass("unverifiedInput", false);      // Hide unverified (red) input styling
        $("#mce-EMAIL").toggleClass("verifiedInput", true);         // Show verified (green) input styling
    }
    else {
        $('#email-fdbk').text("Error: Invalid email address");      // Feedback
        $("#mce-EMAIL").toggleClass("inputFeedback", true);         // Show errors
        $("#mce-EMAIL").toggleClass("verifiedInput", false);        // Hide verified (green) input styling
        $("#mce-EMAIL").toggleClass("unverifiedInput", true);       // Show unverified (red) input styling
        emailCheck = false;
    }
    checkCriteria();
});

$("#mce-FNAME").on("focusout", function() {
    fNameCheck = isValidName(this);
    checkCriteria();
});

$("#mce-LNAME").on("focusout", function() {
    lNameCheck = isValidName(this);
    checkCriteria();
});

function isValidEmailAddress(email) {
	var emailReg = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i);
	return emailReg.test(email);
}

function isValidName(e) {
    if(e.value.length > 0) {
        $(e).toggleClass("unverifiedInput", false); // Hide unverified (red) input styling
        $(e).toggleClass("verifiedInput", true);    // Show verified (green) input styling
        return true;
    }
    else {
        $(e).toggleClass("verifiedInput", false);   // Hide verified (green) input styling
        $(e).toggleClass("unverifiedInput", true);  // Show unverified (red) input styling
        return false;
    }
}

function checkCriteria() {
    if(emailCheck && fNameCheck && lNameCheck) {
        $("#mc-embedded-subscribe").prop("disabled", false);
    }
    else {
        $("#mc-embedded-subscribe").prop("disabled", true);
    }
}