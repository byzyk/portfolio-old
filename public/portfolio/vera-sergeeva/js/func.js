jQuery(function( $ ){
	$.localScroll.defaults.axis = 'x';
	$.localScroll.hash({
		target: '#content',
		queue:true,
		duration:1000
	});
	$('nav ul').localScroll({
		target: '#content',
		queue:true,
		duration:700,
		hash:true
	});
});

$(document).ready(function(){
    $('nav ul li').click(
        function() {
			$('nav ul li').find('.nav-active').removeClass('nav-active');
            $(this).find('a').addClass("nav-active");
			if($(this).find('a').attr('href') == '#works'){
			$('header').find('.logo').animate({
				backgroundPosition: '50%'
			});
			}
			if($(this).find('a').attr('href') == '#about'){
			$('header').find('.logo').animate({
				backgroundPosition: '70%'
			});
			}
			if($(this).find('a').attr('href') == '#contact'){
			$('header').find('.logo').animate({
				backgroundPosition: '90%'
			});
			}
        }
    );
	$("a.gallery").fancybox({
          	"imageScale" : true, 	 
			"frameWidth" : 1200,	 
			"frameHeight" : 800, 
			"overlayShow" : true, 
			"overlayOpacity" : 0.1,	
			"hideOnContentClick" :false,
			"centerOnScroll" : false				
			});
});