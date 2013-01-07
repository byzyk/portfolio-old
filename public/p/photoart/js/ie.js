$( function() {
	$('nav ul li:last-child a').addClass('last-nav');
	$('#main-slider .control > p.simple:first-child').css('margin-left', '0');
	$('#catalog .content > div.rubric:nth-child(3n-2)').css('margin-left', '0');
	$('#catalog-inner .rubric-nav > ul li:nth-child(5n-4)').addClass('inner-catalog-topmenu-fix');
	$('#catalog-inner .content > p.photo-item:nth-child(5n-4)').css('margin-left', '0');
	$('.sub-button a:first-child').addClass('fc-sub-button-fix');
	$('.sub-button a:last-child').addClass('lc-sub-button-fix');
	$('#catalog-baget .photo-item:nth-child(6n-5)').css('margin-left', '0px');
	
	if (window.PIE) {
        $('#services .content.count div.happy').each(function() {
            PIE.attach(this);
        });
        $('#services .content.po-foto p.photo-item').each(function() {
            PIE.attach(this);
        });
        $('.dynamic-control > p').each(function() {
            PIE.attach(this);
        });
        $('#catalog .content > div.rubric > p.sub').each(function() {
            PIE.attach(this);
        });
        $('input[type="text"]').each(function() {
            PIE.attach(this);
        });
        $('textarea').each(function() {
            PIE.attach(this);
        });
        $('.round').each(function() {
            PIE.attach(this);
        });
        $('.box').each(function() {
            PIE.attach(this);
        });
    }
});