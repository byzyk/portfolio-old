$(function() {  
  var video = $('#sec1 .video');
  var videoUrl = 'http://player.vimeo.com/video/59390089?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1';
  video.animate({top: 110}, 1800, function() {
    video.next()
      .delay(400)
      .animate({top: 0, opacity: 1}, 400);
    video.find('.play').on('click', function() {
      video
        .css('padding-top', '17px')
        .animate({height: 444}, 600)
        .html('<div id="vid"><iframe src="'+videoUrl+'" width="760" height="427" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>');
    })
  });  
  
  var log = $('#console'); 
  var timeline = $('.timeline .line2');
  var step, isUserScrollBar;
  timeline.slider({
    start: function (event, ui) {
      $('.ui-slider-handle').css('background-color', '#555');
      isUserScrollBar = true;
    },
    stop: function (event, ui) {
      $('.ui-slider-handle').css('background-color', '#817884');
      isUserScrollBar = false;
    },
    slide: function (event, ui) {
      step = pixelsToGo[4] + ui.value * 7;
      $(window).scrollTop(step);
    }
  });
  
  //log.html($(body).height()); //BODY HEIGHT HELPER
  
  var pixelsToGo = [213, 1539, 2875, 4216, 6560];
  var sideControls = $('.sidebar-controls');
  
  var controller = $.superscrollorama();
  var progress, historyProgress, sec1Pos, winOffset;
  var duration = 7500;
  var planTop = 1817 - $(window).height();
  var historyTween = TweenMax.to($('#sec5 .wrap'), .8, {css:{left: '-100%'},
      onComplete: function() {      
        $('#footer').animate({opacity: 1}, 400);
      }});
  var anim = new TimelineLite({
    onUpdate: function() {
      progress = Math.round(this.progress() * 100);
      historyProgress = (progress > 80)?Math.round(historyTween.progress()*100):0;
      (isUserScrollBar)?'':timeline.slider( 'value', historyProgress);
      winOffset = $(window).scrollTop();
      //log.html(winOffset); //loggin
      sec1Pos = (winOffset < pixelsToGo[1])?10:1;
      $('#sec1').css('z-index', sec1Pos);
      if (winOffset >= pixelsToGo[1]-400) $('#sec2 .text').fadeIn(800);
      if (winOffset >= pixelsToGo[4]) setActiveScreen('5');
      else if (winOffset >= pixelsToGo[3]) setActiveScreen('4');
      else if (winOffset >= pixelsToGo[2]) setActiveScreen('3');
      else if (winOffset >= pixelsToGo[1]) setActiveScreen('2');
      else if (winOffset >= pixelsToGo[0]) setActiveScreen('1');
    }
  });
  anim
    .append([
      TweenMax.to($('#sec2'), 1, {
        css:{top:0},
        onStart: function() {
          $('#sec3').hide();
        },
        onComplete: function() {
          $('#sec3').show();
        },
        delay: .2
      })
    ])
    .append([
      TweenMax.to($('#sec2'), 1, {
        css:{top:'-100%'},
        delay: .2
      }),
      TweenMax.to($('#sec3 .text'), 1, {
        css:{top:'50%'},
        delay: .2,
        onComplete: function() {
          $('#sec4').show();
        }
      })     
    ])
    .append([
      TweenMax.to($('#sec3'), 1, {
        css:{top:'-100%'},
        delay: .2
      }),
      TweenMax.to($('#sec3 .text'), 1, {
        css:{top:'50%'},
        delay: .2
      })
    ])
    .append(TweenMax.to($('#sec4'), 1, {
      css:{marginTop:'-'+planTop+'px'},
      onStart: planAnimation,
      onComplete: function() {
        $('#sec5').show();
      },
      delay: .1
    }).timeScale(0.7))
    .append(TweenMax.to($('#sec5'), 1, {
      css:{top:0},
      onStart: function() {
        var sec5Height = ($(window).height() <= 770)?'770px':'100%';
        $('.sections').css('height', sec5Height);
      }
    }))
    .append(historyTween);
  
  controller.pin($('.sections'), duration, {
    anim: anim, 
    onPin: function() {
      $('.sections').css('height','100%');
      $('.sections').css('paddingBottom', 0);
      $('#footer').animate({opacity: 0}, 200);
    }, 
    onUnpin: function() {
      $('.sections').css('height','770px');
    }
  });
  
  $('.sidebar-control > div, .read-button').on('click', switchScreen);
  
  function switchScreen(e) {
    e.preventDefault();
    var el = $(this);
    var pixelToGo;
    var screen = el.attr('data-screen');
    switch(screen) {
      case '1': pixelToGo = pixelsToGo[0];
        break;
      case '2': pixelToGo = pixelsToGo[1];
        break;
      case '3': pixelToGo = pixelsToGo[2];
        break;
      case '4': pixelToGo = pixelsToGo[3];
        break;
      case '5': pixelToGo = pixelsToGo[4];
        break;
    }    
    $(window).scrollTo( pixelToGo+'px', 2000, function() {      
      setActiveScreen(screen);   
    } )
  }
  
  function setActiveScreen(screen) {
    screen.toString();
    var el = $('.sidebar-control .control');
    el.removeClass('active');
    el.each(function() {
      if ($(this).attr('data-screen') === screen) {
        $(this).addClass('active');
        return;
      }
    });
  }
  
  function planAnimation () {
    var animation = $('.plan-anim');
    var speed = 5;
    var timeline = new TimelineLite({
      autoRemoveChildren: true
    });
    for (var i = 1; i < 17; i++) {
      timeline.append(TweenMax.to(animation.find('.p'+i), speed, {css:{opacity:1}}).timeScale(.3))
    }     
    controller.addTween(
      '.plan-anim',
      timeline,
      1500
    ); 
  }
});
