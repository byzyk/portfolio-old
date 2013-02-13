$(function() {
  function mobile() {
    var os = navigator.userAgent;
    return ((os.match(/Android/i)) || (os.match(/iPad/i)));
  }
  
  
  var video = $('#sec1 .video');
  var videoUrl = 'http://player.vimeo.com/video/59390089?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1';
  video.find('.play').on('click', function() {
    video
      .css('padding-top', '17px')
      .animate({height: 444}, 600)
      .find('.vid')
      .html('<div id="vid"><iframe src="'+videoUrl+'" width="760" height="427" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>');
  })
  
  
  if (!mobile()) { //Mobile devices check
     
    var sec1StartHeight = ($(window).height() - 150) / 2;
    video.animate({top: sec1StartHeight}, 1800, function() {
      video.find('.scroll')
        .delay(400)
        .animate({bottom: '-165px', opacity: 1}, 400);
    });   
   
    var timeline = $('.scroll-wrap .scroll-bar');
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
    
    var pixelsToGo = [213, 1539, 2875, 4216, 6800];
    var sideControls = $('.sidebar-controls');  
    var controller = $.superscrollorama();
    var progress, historyProgress, sec1Pos, winOffset, winHeight;
    var duration = 7500;
    var planTop = 1817 - $(window).height();
    var historyTween = TweenMax.to($('#sec5 .wrap'), .8, {css:{left: '-1100px'}});
    var anim = new TimelineLite({
      onUpdate: function() {
        progress = Math.round(this.progress() * 100);
        historyProgress = (progress > 80)?Math.round(historyTween.progress()*100):0;
        (isUserScrollBar)?'':timeline.slider( 'value', historyProgress);
        winOffset = $(window).scrollTop();
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
            winHeight = $(window).height();
            if (winHeight < 775) {
              $('#sec2 .text')
                .css('marginTop', 0)
                .css('top', '50px')
            }
          },
          onComplete: function() {
            $('#sec3').show();
            $('#sec2 .num.empl').fadeIn(200, function() {
              $('#sec2 .num.year').fadeIn(200, function() {
                $('#sec2 .num.cli').fadeIn(200, function() {
                  $('#sec2 .num.proj').fadeIn(200);
                });
              });
            });
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
        }),
        TweenMax.to($('#sec4 .text'), 1, {
          css:{top:0},
          delay: .2
        })
      ])
      .append(TweenMax.to($('#sec4'), 1, {
        css:{marginTop:'-'+planTop+'px'},
        onStart: planAnimation,
        onComplete: function() {
          $('#sec5').show();
          winHeight = $(window).height();
          if (winHeight < 775) {
            var history = $('#sec5 .wrap');
            history
              .css('top', '60px')
              .css('height', '530px')
              .find('.h-item h3')
                .css('margin', '5px 0')
                .end()
              .find('.text')
                .css('top', '-40px')
                .end()
              .find('.man4')
                .css('top', '260px')
                .end()
              .find('.guests350')
                .css('top', '265px')
                .end()
              .find('.car')
                .css('top', '240px')
                .end()
              .find('.star')
                .css('top', '-30px')
                .end();            
            $('.scroll-wrap').css('top', '60px');
            $('.footer-wrap').css('marginTop', '60px');
          }
        },
        delay: .1
      }).timeScale(0.7))
      .append(TweenMax.to($('#sec5'), 1, {
        css:{top:0}
      }))
      .append(historyTween);
    
    controller.pin($('.sections'), duration, {
      anim: anim, 
      onPin: function() {
        $('.sections').css('height','100%');
      }, 
      onUnpin: function() {
        var newHeight = (winOffset < 1000)?'1000px':'1030px';
        if (winHeight < 775) { newHeight = '850px' }
        $('.sections').css('height', newHeight);
      }
    });
    
    $('.sidebar-control > div, .read-button').on('click', switchScreen);
  
  } else {
    
    $('body').addClass('mobile');
    $(".read-button").replaceWith(function(){
      var screen = $(this).attr('data-screen');
      var color = (screen === '4')?'blue':'yellow';
      return '<a href="#sec' + screen + '" class="read-button ' + color + '">' + $(this).text() + '</a>'
    });
    
    var timeline = $('.scroll-wrap .scroll-bar');
    var step;
    timeline.slider({
      start: function (event, ui) {
        $('.ui-slider-handle').css('background-color', '#555');
      },
      stop: function (event, ui) {
        $('.ui-slider-handle').css('background-color', '#817884');
      },
      slide: function (event, ui) {
        step = -ui.value * 11;
        $('#sec5 .wrap').css('left', step);
      }
    });
  }
  
  
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
    var speed = .5;  
    
    var timeline = new TimelineLite({
      autoRemoveChildren: true,
      smoothChildTiming:false
    });
    
    timeline
      .append(TweenLite.to(animation.find('.p1'), speed, {css:{opacity:1}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p2'), speed, {css:{opacity:1, left: "-733px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p3'), speed, {css:{opacity:1, left: "275px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p4'), speed, {css:{opacity:1, left: "-199px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p5'), speed, {css:{opacity:1}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p6'), speed, {css:{opacity:1, top: "360px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p7'), speed, {css:{opacity:1, left: "-102px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p8'), speed, {css:{opacity:1, left: "202px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p9'), speed, {css:{opacity:1}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p10'), speed, {css:{opacity:1, left: "-516px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p11'), speed, {css:{opacity:1}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p12'), speed, {css:{opacity:1, left: "17px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p13'), speed, {css:{opacity:1, top: "838px"}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p14'), speed, {css:{opacity:1}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p15'), speed, {css:{opacity:1}}).timeScale(.3))
      .append(TweenLite.to(animation.find('.p16'), speed, {css:{opacity:1, top: "830px"}}).timeScale(.3))
       
    controller.addTween(
      '.p1',
      timeline,
      $(window).height()
    );
  }
  
});
