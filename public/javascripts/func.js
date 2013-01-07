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
    var back = $('#folio-back').css('top');
    var text;
    
    if(detailTop === '0px') {
      detailTop = '-90px';
      back = '60px';
      text = "Show details";
    } else {
      detailTop = '0px';
      back = '30px';
      text = "Hide details";
    }
    
    el
      .stop(true, true)
      .animate({top: detailTop}, 400, function() {
        $(this)
          .find('.control')
          .text(text);
      });
    
    $('#folio-back')
      .stop(true, true)
      .animate({top: back}, 400);
  });
  
  
  $('#folio-view').on('load', iframeHeight);
  
  function iframeHeight() {
    $(this).height($(window).height() - 10);
    $('body').css('overflow', 'hidden')
  }
  
});
