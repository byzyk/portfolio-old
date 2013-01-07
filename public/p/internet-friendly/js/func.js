Cufon.replace("header", {fontFamily: "ANDROGYNE"});	
Cufon.replace("h2, p.contact-us, .slide > p", { fontFamily: "Myriad Pro Cond" });
Cufon.replace("h3", { fontFamily: "Myriad Pro BoldSemiCn" })	
		
$(function(){
	$(document).ready(function(){
		$('.slider').cycle({			
			fx: 'blindX,blindY,cover,turnLeft,turnRight,curtainX,curtainY,fade,fadeZoom,growX,growY,zoom',
			speed: 700,
			timeout: 5000,
			pager: '.pager',
			before: changePager
		});
	});
	
	function changePager() {
		var slideID = $(this).attr('id')[5],
			currentControl = $("#control" + slideID);
		switch (slideID) {
			case "1":
				$('.pagerSlide').animate({
					left: 0
				});
				break;
			case "2":
				$('.pagerSlide').animate({
					left: 320
				});
				break;
			case "3": 
				$('.pagerSlide').animate({
					left: 640
				});
				break;
		}
	}
});