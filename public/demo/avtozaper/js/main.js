$(function(){
  
  //make submit button
  $('.submit').on('click', function() {
    $(this).parents('form').submit();
  });
  
  //input style fix
  
  
  $('.login .btn').on('click', {open: 'login'}, modalOpen);
  
});

function modalOpen(event) {
  if (event.data.open === 'login') {
    var close = true;
    var modal = $('#modal-wrap');
    if ($('div').is('#modal-wrap')) {
      modal.show();
    } else {
      var text = $('.login .form').html();
      $('body').prepend('<div id="modal-wrap"><div class="modal">' + text + '</div></div>');
      modal = $('#modal-wrap');
      var modalWin = $('#modal-wrap .modal');
    }
    modalWin.on('mouseover', function() { close = false; });
    modalWin.on('mouseout', function() { close = true;  });
    modal.on('click', function() {
      if (close === true) {
        modal.hide();
      }
    });
  }
}