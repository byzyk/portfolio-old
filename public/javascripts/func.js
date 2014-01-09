$(function() {


    var Anim = {
        el: {
            loading: $('#loading'),
            timeline: new TimelineLite(),
            controller: $.superscrollorama(),
            h1: $('#block1 .header-name'),
            h2: $('#block1 .header-job'),
            slide: $('#block1 .header-slide'),
            menu: $('nav')
        },
        settings: {
            duration: 3500,
            delay: 0.2
        },
        slideDown: {
            start: function(){
                slideInt = setInterval(function(){
                    Anim.el.slide
                        .animate({opacity: 0.3}, 400)
                        .delay(100)
                        .animate({opacity: 0.8}, 400)
                }, 1000);

                window.onscroll = Anim.slideDown.stop;
            },
            stop: function(){
                clearInterval(slideInt);
                Anim.el.slide
                    .animate({opacity: 0}, 400)
            }
        },
        anim: function() {

            var slideInt;

            window.scrollTo(0,1);

            window.onload = function () {

                Anim.el.loading.fadeOut(200);

                setTimeout(function(){
                    Anim.el.h1
                        .animate({opacity: 1}, 500);
                    Anim.el.h2
                        .delay(200)
                        .animate({opacity: 1, marginTop: 58}, 400);
                    Anim.el.slide
                        .delay(500)
                        .animate({opacity: 0.8, bottom: 50}, 400, Anim.slideDown.start);
                    /*Anim.el.menu
                        .delay(500)
                        .animate({opacity: 1}, 400);*/
                }, 1200);
            }

            this.el.timeline
                .append([
                    TweenMax.to($('#block1'), 1, {
                            css:{top:'-25%'},
                            delay: this.settings.delay
                    }),
                    TweenMax.to($('#block2'), 1, {
                            css:{top:'0'},
                            delay: this.settings.delay
                    })
                ])
                .append([
                    TweenMax.to($('#block1'), 1, {
                            css:{top:'-100%'},
                            delay: this.settings.delay
                    }),
                    TweenMax.to($('#block2'), 1, {
                            css:{top:'-100%'},
                            delay: this.settings.delay
                    })
                ]);

            $(window).resize(function () {
                Anim.el.controller.triggerCheckAnim();
            });
        },
        init: function() {
            this.anim();
            this.el.controller.pin($('.blocks'), this.settings.duration, {
                anim: this.el.timeline,
                onPin: function() {
                    $('.blocks').css('height', '100%')
                }
            });
        }
    }


    var Portfolio = {
        el: {
            ctrlL: $('.portfolio-control.control-left'),
            ctrlR: $('.portfolio-control.control-right'),
            slide: $('.portfolio-slide-wrap')
        },
        speed: 400,
        slide: {
            left: function() {
                Portfolio.el.slide.scrollTo("-=700px", Portfolio.speed, {axis: 'x'});
                console.log('left')
            },
            right: function() {
                Portfolio.el.slide.scrollTo("+=700px", Portfolio.speed, {axis: 'x'});
                console.log('right')
            }
        },
        init: function() {
            this.el.ctrlL.on('click', this.slide.left);
            this.el.ctrlR.on('click', this.slide.right);
        }
    }



    Anim.init();
    Portfolio.init();

  
});
