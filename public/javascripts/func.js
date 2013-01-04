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
  
});
