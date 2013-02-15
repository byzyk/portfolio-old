function iOSDevicesDetected(){
	return ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i)));
};

function fixRightPositionedBlocks(){
	//if (iOSDevicesDetected()) return;
	var columnWidth = 1022;
	if($(window).width()<columnWidth){
		$('#langMenu').css('left',columnWidth - 65 - 256);
		$('#topSearchForm').css('left',columnWidth - 156 - 80);
		$('#phone').css('left',columnWidth - 152 - 80);
	} else {
		$('#langMenu').css('left','auto');
		$('#topSearchForm').css('left','auto');
		$('#phone').css('left','auto');
	}
}

$(window).resize(function(){
	fixRightPositionedBlocks();
});


$(function(){
  fixRightPositionedBlocks();
});






!function($, w, undefined) {
$(function(){
	function getGets(name) {
		var gets = window.location.toString(),
			pairs = [],
			pair,
			i;
		if (gets.indexOf("#") > -1) {
			gets = gets.split("#")[0];
		}
		if (gets.indexOf("?") > -1) {
			gets = gets.split("?")[1];
		}

		if (gets.length > 1) {
			pairs = gets.split("&");

			for(i = 0; i < pairs.length; i++) {
				pair = pairs[i].split("=");
				if (pair[0] == name) {
					if (pair.length > 1) {
						return pair[1];
					} else {
						return "";
					}
				}
			}
		}
		return false;
	}

	var is_debug = getGets("debug"),
		iframe_url = "/order-form/?iframe=1" + (is_debug !== false ? "&debug" : "") + "&lang=" + ($("html").attr("lang") || "ru");

	$("a.popup-opener").click(function(e){
		$("iframe#popup-frame").attr("src", iframe_url);
		$("body").addClass("popup-frame");
	});

	$("body").bind("popup.closeiframe", function(){
		$("body").removeClass("popup-frame");
		window.location.hash = "";
	});
	/*$(window).scroll(function(){
		var $t = $(this),
			sT = $t.scrollTop();
		if (sT > 511) {
			$("body").addClass("sidebars-fixed");
		} else {
			$("body").removeClass("sidebars-fixed");
		}
	});*/
	if (window.location.hash == "#order") {
		$("a.popup-opener").eq(0).trigger("click");
	}
});
}(jQuery, window);
