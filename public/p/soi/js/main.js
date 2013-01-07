$(document).ready(function(){
	$('.main .ico-1').hover(
		function() {
			$('.ico-bg').css('top', '22px').css('left', '146px');
			$('.main-1').fadeIn('slow');
		},
		function() {
			$('.ico-bg').css('top', '-1000px').css('left', '0px');
			$('.main-1').fadeOut('slow');
		}
	);
	$('.main .ico-2').hover(
		function() {
			$('.ico-bg').css('top', '22px').css('left', '226px');
			$('.main-2').fadeIn('slow');
		},
		function() {
			$('.ico-bg').css('top', '-1000px').css('left', '0px');
			$('.main-2').fadeOut('slow');
		}
	);
	$('.main .ico-3').hover(
		function() {
			$('.ico-bg').css('top', '100px').css('left', '66px');
			$('.main-3').fadeIn('slow');
		},
		function() {
			$('.ico-bg').css('top', '-1000px').css('left', '0px');
			$('.main-3').fadeOut('slow');
		}
	);
	$('.main .ico-4').hover(
		function() {
			$('.ico-bg').css('top', '100px').css('left', '146px');
			$('.main-4').fadeIn('slow');
		},
		function() {
			$('.ico-bg').css('top', '-1000px').css('left', '0px');
			$('.main-4').fadeOut('slow');
		}
	);
	$('.main .ico-5').hover(
		function() {
			$('.ico-bg').css('top', '180px').css('left', '66px');
			$('.main-5').fadeIn('slow');
		},
		function() {
			$('.ico-bg').css('top', '-1000px').css('left', '0px');
			$('.main-5').fadeOut('slow');
		}
	);
	$('.main .ico-6').hover(
		function() {
			$('.ico-bg').css('top', '180px').css('left', '146px');
			$('.main-6').fadeIn('slow');
		},
		function() {
			$('.ico-bg').css('top', '-1000px').css('left', '0px');
			$('.main-6').fadeOut('slow');
		}
	);
});