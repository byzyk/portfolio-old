$(function(){
	//placeholder fix
	$('input[placeholder]').placeholder();
	
	$(document).ready(function(){
		$('.slider').cycle({			
			fx: 'scrollLeft',
			speed: 500,
			pager:'.pager',
			next:'#slider-next',
			prev:'#slider-prev'
		});
		
		//profile-edit tips
		$('#profile-edit .edit-block > .input').focus(function() {
			$('.tip').fadeOut('fast');
			var inputID = $(this).attr('id');
			inputID = inputID.split("-")[2];			
			$(this).after("<div class='tip'>" + showTip(inputID) + "</div>");
		});
		$('#profile-edit .edit-block > .input').blur(function() {	
			$('.tip').fadeOut('fast');
		});
		function showTip(inputID) {
			var tip = [
				"Подсказка номер 1",	//tip #1
				"Подсказка номер 2",	//tip #2
				"Подсказка номер 3",	//tip #3
				"Подсказка номер 4",	//tip #4
				"Подсказка номер 5",	//tip #5
				"Подсказка номер 6",	//tip #6
				"Подсказка номер 7",	//tip #7
				"Подсказка номер 8",	//tip #8
				"Подсказка номер 9",	//tip #9
				"Подсказка номер 10",	//tip #10
				"Подсказка номер 11",	//tip #11
				"Подсказка номер 12",	//tip #12
				"Подсказка номер 13"	//tip #13
			];
			
			return tip[inputID-1];
		}
	});
});
