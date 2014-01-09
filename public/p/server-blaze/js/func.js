$(function(){
	$(document).ready(function(){
		if (settings.displaySlider == true) {
			$('.slider').cycle({			
				fx: 'scrollLeft',
				speed: 500,
				pager:'.pager'
			});
		}
		
		//MAIN MENU
		$('nav > ul > li').hover(
		function(){
			var isSubmenu = $(this).find('#submenu').val();
			
			$(this).addClass('li-hover');
			$(this).find('#submenu').stop(true, true);
			$(this).find('#submenu').fadeIn('fast');
			if (settings.isHome == false && isSubmenu != undefined){
				$('#inner-page').stop(true, true);
				$('#inner-page').animate({
					top: settings.innerPageAnimateTopPx
				}, settings.innerPageAnimateDuration);
			}
		},
		function(){			
			$(this).removeClass('li-hover');
			$(this).find('#submenu').fadeOut('fast');
			if (settings.isHome == false){
				$('#inner-page').animate({
					top: 0
				}, settings.innerPageAnimateDuration);
			}
		});
	});
});
