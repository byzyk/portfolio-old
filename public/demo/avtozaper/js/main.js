$(function(){ 
  
  //DELETE THIS BEFORE DEPLOY!!!
  //$('.sections').css({left: '-100%'})
   
  
  formSubmitActivate();
  footerFix();
  
  $(window).on('resize', footerFix);
  
  
  $('.login .btn').on('click', {open: 'login'}, modalOpen);
  
  
  //SELECT STYLED
  var Select = {
    obj: {
      fastLink: $('.fast-links .select-option')
    },
    getStyled: function(callback) {
      $('select').each(function() {
        var select = $(this);
        select
          .wrap('<div class="select-wrap ' + select.attr('class') + '">')
          .hide();
        var wrap = select.parent('.select-wrap');
        var styledOptions = '';
        select.find('option').each(function() {
          styledOptions = styledOptions + '<div class="select-option" data-value="' + $(this).attr('value') + '"><span>' + $(this).text() + '</span></div>';
        });  
        var styledSelect = '<div class="select-active">' + select.attr('data-title') + '</div><div class="select-options">'+ styledOptions + '</div>';
        wrap.prepend(styledSelect);      
      }); 
      Select.obj.active = $('.select-wrap .select-active');
      Select.obj.control = $('.fast-links .select-options-control .control'); 
      Select.obj.option = $('.select-wrap .select-option');     
      if(callback) { callback(); }
    },
    openClose: function() {
      var currentSelect = $(this).next('.select-options');
      if (currentSelect.css('display') === 'none') {
        $('.select-options').hide();               
        currentSelect.show();   
      } else {              
        currentSelect.hide();          
      }
    },
    changeValue: function() {
      var select = $(this).parents('.select-wrap');
      if (typeof select.attr('class') === 'undefined') {
        select = $('.select-wrap.brand');
      }
      var text = $(this).text();
      var value = $(this).attr('data-value');
      var currentText = select.find('.select-active').text();
      if (text !== currentText) {
        select
          .removeClass('error')
          .find('.select-active').text(text)
          .end()
          .find('select option:selected')
          .removeAttr('selected')
          .end()
          .find('select option[value="' + value + '"]')
          .attr('selected', 'selected');
      }
      select.find('.select-options').hide();
    },
    switchGroup: function() {
      var groupID = $(this).attr('data-list');
      var list = $(this).parents('.fast-links').find('.select-option');
      list.hide();
      list.each(function() {
        var id = $(this).attr('data-list-item');
        if (id === groupID) {
          $(this).show();
        }
      })
    },
    init: function() {
      Select.getStyled(function() {      
        Select.obj.active.on('click', Select.openClose);
        Select.obj.control.on('click', Select.switchGroup); 
        Select.obj.option.add(Select.obj.fastLink).on('click', Select.changeValue); 
        $('div.brand').tip('Начните с выбора<br> марки и авто', 'selectTip');
        formSubmitActivate();    
      });
    }
  }
  
  Select.init();
  
  //Select changer fix
  $('.select-options').each(function() {
    if ( $(this).find('div').is('.select-options-control') ) {
      $(this).css({marginTop: 40});
    }
  });
  
  
  //cityChange
  var Cities = [
      "Москва",
      "Санкт-Петербург"
    ];
    
  $('p').on('click', '#cityChange', function() {
    $(this).replaceWith('<div class="input"><input value="' + $(this).text() + '" type="text" id="cityChange-input"></div>');
    $('#cityChange-input')
      .autocomplete({
        source: Cities,
        select: submitInput
      })
      .on('blur', submitInput);
    
    function submitInput(event, ui) {
      var selectedCity = typeof(ui) === 'undefined' ? $(this).val() : ui.item.value;
      $(this).parent('.input').replaceWith('<span id="cityChange">' +  selectedCity + '</span>');
      $('input[name="city"]').val($('#cityChange').text());
    }
  });
  
  
  //goBack
  $('#goBack').on('click', function() {
    switchScreen(0);
  });
    
  //add Detail
  $('#addDetail').on('click', addDetail);
  $('#addVIN').one('click', addDetail);
  
  //add Photo
  $('form').on('click', '.add-photo', function() {
    $(this).next().trigger('click');
  });
  
  //Insert selected city
  $('input[name="city"]')
    .val($('#cityChange').text())
    .autocomplete({ source: Cities });
  
});


function formSubmitActivate() {
  $('.submit').on('click', function() {
    var form = $(this).parents('form');
    if(!form.find('div').is('.select-wrap')) {
      form.find(':text, :password').each(function() {
        var value = $(this).val();
        if (value === '') {
          $(this).parent('.input').addClass('error');
        } else {
          $(this).parent('.input').removeClass('error');
        }
      });
    } else {
      form.find('select').each(function() {
        var select = $(this).parent('.select-wrap');
        if (select.find('.select-active').text() === $(this).attr('data-title')) {
          select.addClass('error');
        } else {
          select.removeClass('error');
        }
      });
    }
    if(form.find('div').is('.error')) {
      return false;
    } else {
      if (form.hasClass('select-form')) {
        switchScreen(1);
        $('.detail-input:first').tip('Наберите нужную<br> Вам запчасть', 'inputTip');
      } else if (form.hasClass('order-form')) {
        switchScreen(2);
      } 
    }
  });
}

function modalOpen(event) {
  if (event.data.open === 'login') {
    var close = true;
    var modal = $('#modal-wrap');    
    if (!$('div').is('#modal-wrap')) {
      var text = $('.login .form').html();
      $('body').prepend('<div id="modal-wrap"><div class="modal">' + text + '</div></div>');
      modal = $('#modal-wrap');
      var modalWin = $('#modal-wrap .modal');
      formSubmitActivate();
    }
    modal.fadeIn(200);
    modalWin.on('mouseover', function() { close = false; });
    modalWin.on('mouseout', function() { close = true;  });
    modal.on('click', function() {
      if (close === true) {
        modal.fadeOut(200);
      }
    });
  }
}

function addDetail() {
  var detailType = $(this).attr('id');
  var placeholder, addPhoto;
  if (detailType === 'addDetail') {
    placeholder = 'Название запчасти';
    addPhoto = '<span class="add-photo">прикрепить фото</span><input type="file">';
  } else if (detailType === 'addVIN') {
    placeholder = 'Номер VIN';
    addPhoto = '';    
  }
  var input = '<div class="input detail-input"><input type="text" placeholder="' + placeholder + '">' + addPhoto + '</div>';
  $('.detail-input:last').after(input);
}

function switchScreen(screen) {
  var Positions = [['0%', '-100%', '-200%'], ['70%', '50%', '30%']];
  var position = Positions[0][screen];
  var carPosition = Positions[1][screen];
  var speed = 600;
  $('.sections').animate({ left: position }, speed); 
  $('.car').animate({ left: carPosition }, speed); 
}

function footerFix() {
  var winHeight = $(window).height();
  if (winHeight <= 1018) {
    $('footer').addClass('not-fixed');
  } else {
    $('footer').removeClass('not-fixed');    
  }
}

$.fn.tip = function(text, addClass) {
  var tipSelector = '.' + addClass;
  if (!$(this).prev().hasClass(addClass)) {
    $(this)
      .before('<div class="tip ' + addClass + '">' + text + '</div>')
      .prev()
      .fadeIn()
      .end()
      .add(tipSelector)
      .wrapAll('<div style="position:relative;">');
    setTimeout(function() { $(tipSelector).fadeOut(); }, 5000);
  }
}
