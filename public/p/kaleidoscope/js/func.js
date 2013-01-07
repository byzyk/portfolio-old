$(function( $ ){
	/*$.localScroll.defaults.axis = 'x';
	$.localScroll.hash({
		target: '#content',
		queue:true,
		duration:500
	});
	$('nav ul, .arrow').localScroll({
		target: '#content',
		queue:true,
		duration:500,
		hash:true
	});*/
	
	$(document).ready(function() {
		$(".fancybox").fancybox({
			loop: false
		});
	
		$('#synaesthesia-kaleidoscope header').hide();
		$('#levels header').hide();
	});
	
	$('.exesia-link').click( function() { 
		bodyBgScroll(0);
		logo('exesia');
		$('#content').scrollTo({ top: 0, left: 0 }, 500);	
	});
	$('.synaesthesia-kaleidoscope-link').click( function() { 
		bodyBgScroll(35);
		logo('synaesthesia-kaleidoscope');
		$('#content').scrollTo({ top: 0, left: "1290px" }, 500);	 
	});
	$('.levels-link').click( function() { 
		bodyBgScroll(70);
		logo('levels');	
		$('#content').scrollTo({ top: 0, left: "100%" }, 500);	 
	});
	
	function bodyBgScroll(position) {
		$('body').animate({
			backgroundPosition: position + "%"
		}, {
			duration:500
		});
	}
	
	function logo(show) {
		$('header').fadeOut('fast');
		setTimeout( function () {
			$('#' + show + ' header').fadeIn('fast')
		}, 700);		
	}
});