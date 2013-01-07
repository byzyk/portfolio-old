$(function(){
	$.localScroll.defaults.axis = 'x';
	$.localScroll.hash({
		target: '#content',
		queue:true,
		duration:1000
	});
	$('nav ul').localScroll({
		target: '#content',
		queue:true,
		duration:1000,
		hash:true
	});
	$(document).ready(function() {
		$('.left').tinyscrollbar();
    });	
		
	$('nav ul li a').click(function() {
		if ($(this).attr('class') !== 'active') {
			$('nav ul li a').removeAttr('class');
			$(this).attr('class', 'active');
		}
	});
});