$(function() {

    var Header = {
        settings: {
            animSpeed: 400,
            controlText: ['hide', 'show full information']
        },
        el: [
            $('header'),
            $('#headerFull'),
            $('#folioList')
        ],
        anim: function() {
            var height = Header.el[0].height();
            if (height === 100) {
                Header.el[0].animate({height: '100%'}, Header.settings.animSpeed);
                Header.el[2].animate({marginTop: -50}, Header.settings.animSpeed);
                Header.el[1]
                    .text(Header.settings.controlText[0])
                    .addClass('opened');
            } else {
                Header.el[0].animate({height: 100}, Header.settings.animSpeed);
                Header.el[2].animate({marginTop: 115}, Header.settings.animSpeed);
                Header.el[1]
                    .text(Header.settings.controlText[1])
                    .removeClass('opened');
            }
        },
        init: function() {
            Header.el[1].on('click', Header.anim);
        }
    }

    Header.init();




  
    $('#folio-detail .control').on('click', function() {
    var el = $(this).parent();
    var detailTop = el.css('top');
    var detailOpacity = el.css('opacity');
    var back = $('#folio-back').css('top');
    var text;

    if(detailTop === '0px') {
      detailTop = '-90px';
      detailOpacity = .4;
      back = '60px';
      text = "Show details";
    } else {
      detailTop = '0px';
      detailOpacity = 1;
      back = '30px';
      text = "Hide details";
    }

    el
      .stop(true, true)
      .animate({top: detailTop, opacity: detailOpacity}, 400, function() {
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
    $(this).height($(window).height());
    $('body').css('overflow', 'hidden')
  }
  
});
