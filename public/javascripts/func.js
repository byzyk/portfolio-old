$(function() {
  
  $('.portfolio-item').hover(function() {
    $(this)
      .find('.text')
      .fadeIn(100);
  }, function() {
    $(this)
      .find('.text')
      .fadeOut(100);
  });
  
  
  $('#folio-detail .control').on('click', function() {
    var el = $(this).parent();
    var detailTop = el.css('top');
    var text;
    
    if(detailTop === '0px') {
      detailTop = '-90px';
      text = "Show details";
    } else {
      detailTop = '0px';
      text = "Hide details";
    }
    
    el
      .stop(true, true)
      .animate({top: detailTop}, 400, function() {
        $(this)
          .find('.control')
          .text(text);
      });
  });
  
});
