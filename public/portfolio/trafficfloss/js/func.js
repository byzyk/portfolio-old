$(function(){
	//Modal: sign in, sing up	
	var tab = $('#modal .tabs li'),
		modal = $('#modal .content'),
		modalFix = $('#modal .modal-fix'),
		menuSignUp = $('#menu-signUp'),
		menuSignIn = $('#menu-signIn'),
		modalClose = $('#modal .close'),
		modalTip = $('#modal .register-tip'),
		warningModal = $('#warning');
	
	$('.modal-wrap').hide();
	
	function closeModal() {
		$('.modal-wrap').fadeOut('fast', function() {
			tab.removeClass('selected');
			modal.removeClass('no-round');
		});
	}
	
	function openModal(form) {
		if (form == 'signIn') {
			modal.addClass('no-round');
			modalFix.css('left', '262px');
			modalTip.fadeIn('fast');
			$('#signup-form').fadeOut('fast', function() {
				$('#signin-form').fadeIn('fast');
			});
		} else if (form == 'signUp') {
			modal.removeClass('no-round');
			modalFix.css('left', '267px');
			modalTip.fadeOut('fast');
			$('#signin-form').fadeOut('fast', function() {
				$('#signup-form').fadeIn('fast');
			});
		}
		warn('hide');
	}
	
	function warn(show) {
		if (show == 'hide') {
			$('.modal-wrap').removeClass('warn');
			warningModal.hide();
		} else {
			$('.modal-wrap').addClass('warn');
			warningModal.slideDown(250);
			return false;
		}
	}
	
	//================================= WARNING DEMO!
		$('#signin-form').submit(warn);
	//=================================
	
	modalClose.click(closeModal);	
	
	menuSignUp.click(function() {
		tab.filter(':last-child').addClass('selected');
		openModal('signUp');
		$('.modal-wrap').fadeIn('fast');
	});
	
	menuSignIn.click(function() {
		tab.filter(':first-child').addClass('selected');
		openModal('signIn');
		$('.modal-wrap').fadeIn('fast');
	});
	
	tab.click(function() {
		tab.removeClass('selected');
		$(this).addClass('selected');
		if (tab.filter(":first-child").hasClass('selected') == true) {
			openModal('signIn');
		} else {
			openModal('signUp');
		}
	});
	
	//topBar
	$('#topBar .close').click(function() {
		$('#topBar').slideUp('slow');
	});
	
	//logo Goto
	$('#logo').click(function() {
		window.location.href = '/';
	});
	
	//FAQ strSplit
	var answer = $('.answer-simple > p'),
		maxLength = 316,
		showText;
		hideText = [];
		
	answer.each(function(index) {
		var answerText = $(this).html();
		index++;
		if ( answerText.length > maxLength ) {
			showText = answerText.slice(0, maxLength);
			hideText[index] = answerText.slice(maxLength);
			$(this).html(showText + "<span class='show-all'>Show all</span>");
		}
    });
	
	$('.answer-simple > p span.show-all').click(function() {
		var currentAnswer = $(this).parents('.answer-simple'),
			qID = currentAnswer.index() + 1;
		$(this).fadeOut('fast', function() {
			$(this).remove();
			var currentAnswerText = currentAnswer.find('p').html(),
				newAnswerText = currentAnswerText + hideText[qID];
			currentAnswer.find('p').html(newAnswerText);
		});
	});
});
