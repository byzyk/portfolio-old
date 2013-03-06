var scrollAPI, tipStart = false;

$(function(){ 
  
  //DELETE THIS BEFORE DEPLOY!!!
  //$('.sections').css({left: '-100%'})   
  
  formSubmitActivate();
  //footerFix();
  
  //$(window).on('resize', footerFix);
  
  
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
      var selectID = select.index();
      if (select.hasClass('first')) { selectID = 0 }
      if (select.hasClass('year')) { selectID = 2 }
      if (typeof select.attr('class') === 'undefined') {
        select = $('.select-wrap.brand');
        selectID = 0;
        if($(this).attr('data-list-item') === '1') {
          $('.fast-links .control').eq(0).trigger('click');
        }
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
      checkFormFilled('1');  
      nextTip(selectID);
    },
    switchGroup: function() {
      var groupID = $(this).attr('data-list');
      groupID == '1' ? footerSlide(920) : footerSlide(800);
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
        setTimeout(tipsEnable, 5000);
        formSubmitActivate();
        checkFormFilled('1');  
      });
    }
  }
  
  Select.init();
    
  
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
  
  //scroll
  initScroll();  
  $('.scroll-pane').jScrollPane({
      verticalDragMinHeight: 58,
      verticalDragMaxHeight: 58,      
      animateScroll: true
    });
  scrollAPI = $('.scroll-pane').data('jsp');
  
  //checkForm
  $('.order-form').on('keydown', 'input:text', function() {    
    checkFormFilled('2', 'order');
  });
  $('.phone-form').on('keydown', 'input:text', function() {    
    checkFormFilled('2', 'phone');
  });
  
  //hide Tip
  $('.detail-input:first').on('change', function() {
    $(this)
      .prev()
      .fadeOut();
  })
    
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
      form.find('.submit').addClass('disabled');
      return false;
    } else {
      if (form.hasClass('select-form')) {
        switchScreen(1);
        setTimeout(function() { $('.detail-input:first').tip('Наберите нужную<br> Вам запчасть', 'inputTip') }, 5000);
      } else if (form.hasClass('order-form')) {
        switchScreen(2);
      } 
    }
  });
}

function checkFormFilled(f, ff) {
  var flag = true;
  var form, formItemsSelector, compare;
  if (f === '1') {
    form = $('.select-form');
    formItemsSelector = 'select';
    compare = function() {
      if ($(this).attr('data-title') === $(this).parent('.select-wrap').find('.select-active').text()) {
        flag = false;
      }        
    }   
  } else if (f === '2') {
    form = $('.' + ff + '-form');
    formItemsSelector = 'input:text';
    compare = function() {
      if ($(this).val() === '') {
        flag = false;
      }        
    }      
  }
  form.find(formItemsSelector).each(compare);  
  if (flag === false) {
    form.find('.submit').addClass('disabled');
  } else {
    form.find('.submit').removeClass('disabled');
  }
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
  $('.detail-input:last')
    .hide()
    .slideDown(150, scrollAPI.reinitialise);
}

function switchScreen(screen) {
  var Positions = [['0%', '-100%', '-200%'], ['70%', '50%', '30%']];
  var position = Positions[0][screen];
  var carPosition = Positions[1][screen];
  var speed = 600;
  $('.sections').animate({ left: position }, speed); 
  $('.car').animate({ left: carPosition }, speed); 
}

/*function footerFix() {
  var winHeight = $(window).height();
  if (winHeight <= 1018) {
    $('footer').addClass('not-fixed');
  } else {
    $('footer').removeClass('not-fixed');    
  }
}*/

function footerSlide(slide) {
  var footer = $('footer');
  if (slide) {
    footer
      .addClass('not-fixed')
      .animate({top: slide}, 400);
  }
}

$.fn.tip = function(text, addClass) {
  var tipSelector = '.' + addClass;
  if (addClass !== 'inputTip') { $(tipSelector).fadeOut(); }
  var el = $(this);
  if (!el.prev().hasClass(addClass)) {
    el
      .before('<div class="tip ' + addClass + '">' + text + '</div>')
      .prev()
      .fadeIn();
    var tipSel = el.prev();
    el
      .add(tipSel)
      .wrapAll('<div style="position:relative;">');
  }
}

function tipsEnable() {
  if (!tipStart) {
    $('div.brand').tip('Начните с выбора<br> марки и авто', 'selectTip');
    tipStart = true;
  }   
}

function nextTip(selectID) {
  tipStart = true; 
  switch (selectID) {
    case 0: $('.model').tip('Выберите<br> модель', 'selectTip');
      break;
    case 1: $('.year').tip('Выберите год<br> выпуска', 'selectTip');
      break;
    case 2: $('.mod').tip('Выберите<br> модификацию', 'selectTip');
      break;
  }
}

//scroll
function initScroll() {    
  $('.scroll-pane')
    .on('jsp-initialised', function(event, isScrollable) {
      vJspDrag = $(this).find('.jspDrag');
      vJspDrag.data('prevPositionY', 0);
      vJspDrag.before('<div class="jspBeforeDrag"></div>');
    })
    .on('jsp-scroll-y', function(event, scrollPositionY, isAtTop, isAtBottom) {
        vJspDrag = $(this).find('.jspDrag');
        new_h = vJspDrag.css('top');
  
        $(this).find('.jspBeforeDrag').css('height', new_h);
        vJspDrag.css('top', 0);
    })
    .jScrollPane({
      verticalDragMinHeight: 54,
      verticalDragMaxHeight: 54,      
      animateScroll: true
    });
}
