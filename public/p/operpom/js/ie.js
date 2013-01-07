$( function() {	
	if (window.PIE) {
        $('.round').each(function() {
            PIE.attach(this);
        });
        $('.box-shadow').each(function() {
            PIE.attach(this);
        });
        $('.input, .form-button, .form-button *').each(function() {
            PIE.attach(this);
        });
    }
});