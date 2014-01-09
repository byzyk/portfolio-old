$( function() {
	//placeholder fix
	$('input[placeholder]').placeholder();
	

	$(document).ready( function() {	
		
		// .active fix
		$('.active').click(function() {
			return false;
		});
		
		//form-button
		$('.form-button').click(function() {
			$(this).parent('form').submit();
		});
		
		//main-slider
		var sliderButton = $('#main-slider').find('.simple');
		$('#content2').hide();
		$('#content3').hide();
		$('#content4').hide();
		
		sliderButton.click( function() {
				sliderButton.removeClass('active');
				$(this).addClass('active');
				
				var itemNumber = $(this).attr('id');
				$('#main-slider .slider-content').fadeOut(250, function(){
    				setTimeout( function() {$('#content'+itemNumber[4]).fadeIn(250)}, 250);
				});
				//setTimeout( function() {$('#content'+itemNumber[4]).fadeIn(250)}, 250);
		});	
		
		//catalog rubricator
		var rubric = $('#catalog .rubric');
		rubric.find('.sub').hide();
		rubric.hover(
			function() {
				$(this).find('.sub').fadeIn('fast');
			},
			function() {
				$(this).find('.sub').fadeOut('fast');
			}
		);
		
		//SERVICES dynamic
		var activeBlocks = ['example', 'extra'];
		for (var i = 0; i < 2; i++) {
			for (var j = 2; j < 6; j++){
				$('#'+activeBlocks[i]+j).hide();
			}
		}
			
		$('.dynamic-control > p').click(function() {
			var thisID = $(this).attr('class')[4],
				block = $(this).parent('.dynamic-control').parent('.dynamic-wrap'),
				blockID = block.attr('id');
			block.find('.dynamic-control > .active').removeClass('active');
			$(this).addClass('active');
			block.find('.dynamic-content').fadeOut(250);
			setTimeout( function() {block.find("#"+blockID+thisID).fadeIn(250)}, 250);
		});	
		
		//COUNTER
		var counterNumber = $('#counter2').html(),
			newStr,
			numbers = "",
			numClassName = "";
		
		for (var ii = 0; ii < counterNumber.length; ii++ ) {
			newStr = counterNumber.charAt(ii);
			switch (newStr) {
				case "1": numClassName = "one";
					break
				case "2": numClassName = "two";
					break
				case "3": numClassName = "three";
					break
				case "4": numClassName = "four";
					break
				case "5": numClassName = "five";
					break
				case "6": numClassName = "six";
					break
				case "7": numClassName = "seven";
					break
				case "8": numClassName = "eight";
					break
				case "9": numClassName = "nine";
					break
				case "0": numClassName = "zero";
					break
			}			
			
			if (ii == counterNumber.length-1) {
				numbers = numbers + "<span class='char " + numClassName + " last'></span>";
			} else {
				numbers = numbers + "<span class='char " + numClassName + "'></span>";
			}
		}
		
		$('#counter2').before('<span id="counter">' + numbers + '</span> ');
		$('#counter2').hide();
		
	});

});
//GOOGLE MAPS
(function() {
	window.onload = function(){
		var latlng = new google.maps.LatLng(55.75, 37.5);
		var options = {
		  zoom: 12,
		  center: latlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  disableDefaultUI: true
		}; 
		var map = new google.maps.Map(document.getElementById('map'), options);
	}
})();