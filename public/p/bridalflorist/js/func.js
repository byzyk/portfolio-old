$(function() {
	//placeholder fix
	$('input[placeholder]').placeholder();
	
jQuery.preloadImages = function () {
    if (typeof arguments[arguments.length - 1] == 'function') {
        var callback = arguments[arguments.length - 1];
    } else {
        var callback = false;
    }
    if (typeof arguments[0] == 'object') {
        var images = arguments[0];
        var n = images.length;
    } else {
        var images = arguments;
        var n = images.length - 1;
    }
    var not_loaded = n;
    for (var i = 0; i < n; i++) {
        jQuery(new Image()).attr('src', images[i]).load(function() {
            if (--not_loaded < 1 && typeof callback == 'function') {
                callback();
            }
        });
    }
}
	
	function removeAddClass(remove, add){
		$('.main').fadeOut('slow');
		setTimeout(function() {
			$('.main').removeClass(remove);
			$('.main').addClass(add);
			$('.main').fadeIn('slow');
		}, 500);
	}
	
	function changeBackground() {
		var mainBackgroundClass = $('.main').attr('class');
		if(mainBackgroundClass.indexOf('bg0') !== -1) {
			removeAddClass('bg0','bg1');
		} else if(mainBackgroundClass.indexOf('bg1') !== -1) {			
			removeAddClass('bg1','bg2');
		} else if(mainBackgroundClass.indexOf('bg2') !== -1) {			
			removeAddClass('bg2','bg3');
		} else if(mainBackgroundClass.indexOf('bg3') !== -1) {			
			removeAddClass('bg3','bg4');
		} else if(mainBackgroundClass.indexOf('bg4') !== -1) {			
			removeAddClass('bg4','bg0');
		}
		return false;
	}
	
	$(document).ready(function() {		
		$.preloadImages(["images/bg/1.jpg", "images/bg/2.jpg", "images/bg/3.jpg", "images/bg/4.jpg", "images/bg/5.jpg"], function () {
			setInterval(changeBackground, 3000);
		});
	});
});