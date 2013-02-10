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
	$(window).scroll(function(){
		var $t = $(this),
			sT = $t.scrollTop();
		if (sT > 511) {
			$("body").addClass("sidebars-fixed");
		} else {
			$("body").removeClass("sidebars-fixed");
		}
	});
	if (window.location.hash == "#order") {
		$("a.popup-opener").eq(0).trigger("click");
	}
});
}(jQuery, window);
