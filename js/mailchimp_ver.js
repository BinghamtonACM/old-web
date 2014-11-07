/* ---------------------------------------
	Signup Form - Verification Functions
------------------------------------------*/

var emailCheck, fNameCheck, lNameCheck = false;

$("#mce-EMAIL").on("focusout", function() {
    var email = this.value;
    emailCheck = isValidEmailAddress(email);

    if(email.length > 0 && emailCheck) {
        $('#email-fdbk').text();                                    // Clear feedback
        $("#mce-EMAIL ~ div").toggleClass("inputFeedback", false);  // Hide errors
        $("#mce-EMAIL").toggleClass("unverifiedInput", false);      // Hide unverified (red) input styling
        $("#mce-EMAIL").toggleClass("verifiedInput", true);         // Show verified (green) input styling
    }
    else {
        $('#email-fdbk').text("Invalid email address");      // Feedback
        $("#mce-EMAIL ~ div").toggleClass("inputFeedback", true);   // Show errors
        $("#mce-EMAIL").toggleClass("verifiedInput", false);        // Hide verified (green) input styling
        $("#mce-EMAIL").toggleClass("unverifiedInput", true);       // Show unverified (red) input styling
    }
});

$("#mce-FNAME").on("focusout", function() {
    fNameCheck = isValidName(this);
    if(!fNameCheck) {
        $('#fname-fdbk').text("First name required");        // Feedback
        $("#mce-FNAME ~ div").toggleClass("inputFeedback", true);   // Show errors
    }
    else {
        $('#fname-fdbk').text();                                    // Clear Feedback
        $("#mce-FNAME ~ div").toggleClass("inputFeedback", false);  // Hide errors
    }
});

$("#mce-LNAME").on("focusout", function() {
    lNameCheck = isValidName(this);
    if(!lNameCheck) {
        $('#lname-fdbk').text("Last name required");        // Feedback
        $("#mce-LNAME ~ div").toggleClass("inputFeedback", true);   // Show errors
    }
    else {
        $('#lname-fdbk').text();                                    // Clear Feedback
        $("#mce-LNAME ~ div").toggleClass("inputFeedback", false);  // Hide errors
    }
});

$("#signup-form").on("submit", function() {
    if(emailCheck && fNameCheck && lNameCheck) {
        return true;
    }
    $("input").focusout();
    return false;
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
