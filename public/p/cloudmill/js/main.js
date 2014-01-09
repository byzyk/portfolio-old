/* === by Bohdan Khodakovsky for CloudMill === */

Raphael.fn.pieChart = function (cx, cy, r) {
    var paper = this,
        rad = Math.PI / 180,
        chart = this.set(),
		values = [25,22,14,17,22],
		labels = ["Корпоративный сайт", "Социальные сети", "Сайт визитка", "Промо сайт", "Интернет-магазин"];
    function sector(cx, cy, r, startAngle, endAngle, params) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    var angle = 48,
        total = 0,
        start = 0,
        process = function (j) {
            var value = values[j],
                angleplus = 360 * value / total,
                popangle = angle + (angleplus / 2),
                ms = 500,
                delta = 30,
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: "#46b8d0", stroke: "#46b8d0", "stroke-width": 1}),
				txt = $('.round-text div:eq('+ j +')');
				txt.mouseover(function () {
					p.attr({cursor: "pointer"}).animate({transform: "s1.05 1.05 " + cx + " " + cy, fill: "#cccc00", stroke: "#cccc00"}, ms, "elastic");
				}).mouseout(function () {
					p.animate({transform: "", fill: "#46b8d0", stroke: "#46b8d0"}, ms, "elastic");
				});
            angle += angleplus;
            chart.push(p);
            start += .1;
        };
    for (var i = 0, ii = values.length; i < ii; i++) {
        total += values[i];
    }
    for (i = 0; i < ii; i++) {
        process(i);
    }
    return chart;
};



$(function() {
	//Count
	$.fn.countAnimate = function(callback) {
		var	el = $(this),
		totalValue = +el.text(),
		speed = +(totalValue / 100).toFixed(),
		ms = 15,
		currentValue,
		nextValue;
		(speed < 0) ? "1" : speed;
		el.text(0);
		el.animate({opacity: 1}, 400, function() {
			var intID = setInterval(function() {
				currentValue = +el.text();
				nextValue = currentValue + speed;
				if (currentValue < totalValue && nextValue < totalValue) {
					el.text(nextValue);
				} else {
					el.text(totalValue);
					clearInterval(intID);
					if (callback) {
						callback();
						return false;
					}
				}
			},ms);
		});
	}
	
	//lang switcher
	$('#lang > div').click(function() {
        $('#lang > div').removeClass('active');
		$(this).addClass('active');
    });
	
	//UNIX fix
	var os = navigator.userAgent;
	if (os.indexOf('Linux') !== -1 || os.indexOf('Mac') !== -1) {		
		$('#slider .bg > div').css('top', '+=1px');
		$('#slider .text a, #service_5, #thx .submit').each(function() {
			var el = $(this), lineHeight = +el.css('line-height').slice(0,2);
			el.css('line-height', lineHeight * 1.1 + 'px');
		});
		$(' #weStart_0 .text .number').each(function() {
			$(this).css('line-height', '50px').css('padding-top', '10px');            
        });
		$('#service_5').css('margin-top', '8px');
		if (os.indexOf('Linux') !== -1) {
			$('.dashed.four').css('margin-top', '-=2px');
			$('#social, footer').css('top', '+=3px');
		}
	}
	
	//IE 9 fix
	if (os.indexOf('MSIE') !== -1) {
		$('#service_5').css('margin-top', '6px');
		$('#tech .sub-headline').css('margin-bottom', '+=1px')
		$('#social').css('top', '+=2px')
	}	
	$('input[placeholder]').placeholder();
	
	//Opera fix
	if (os.indexOf('Opera') !== -1) {
		$('#social').css('top', '+=4px')
	}
	
	
	//Slider
	var Slider = {
		set: {
			ms: 600
		},
		showSlide: function () {
			var slide = $(this)
			if (slide.attr('class').indexOf('inkotek') !== -1) {
				slide.find('.bg0').animate({top: '-134px'}, Slider.set.ms)
				slide.find('.bg1').animate({top: '-134px'}, Slider.set.ms)
				setTimeout(function() {
					slide.find('.bg3').animate({left: '-790px'}, Slider.set.ms, "easeOutCubic")
					slide.find('.bg4').animate({left: '-790px'}, Slider.set.ms, "easeOutCubic")
				}, Slider.set.ms)
				setTimeout(function() {
					slide.find('.bg2').animate({opacity: 1}, Slider.set.ms)
				}, Slider.set.ms * 2)
			} else if (slide.attr('class').indexOf('fuggi') !== -1) {
				slide.find('.bg0').animate({opacity: 1}, Slider.set.ms)
				setTimeout(function() {
					slide.find('.bg1').animate({left: '-790px'}, Slider.set.ms*1.5, "easeInOutCubic")
				}, Slider.set.ms - 200)
				setTimeout(function() {
					slide.find('.bg2').animate({left: '-790px'}, Slider.set.ms*3, "easeInOutElastic")
				}, Slider.set.ms)				
			} else if (slide.attr('class').indexOf('lux') !== -1) {
				slide.find('.bg0').animate({opacity: 1}, Slider.set.ms)
				setTimeout(function() {
					slide.find('.bg1').animate({left: '-790px'}, Slider.set.ms*1.5, "easeInOutCubic")
				}, Slider.set.ms - 200)
				setTimeout(function() {
					slide.find('.bg2').animate({left: '-790px'}, Slider.set.ms*3, "easeInOutElastic")
				}, Slider.set.ms)		
			} else if (slide.attr('class').indexOf('amba') !== -1) {
				slide.find('.bg0').animate({top: '-134px'}, Slider.set.ms)
				slide.find('.bg1').animate({top: '-134px'}, Slider.set.ms)
				setTimeout(function() {
					slide.find('.bg3').animate({top: '-134px'}, Slider.set.ms, "easeInOutCubic")
				}, Slider.set.ms)
				setTimeout(function() {
					slide.find('.bg2').animate({left: '-790px'}, Slider.set.ms, "easeOutCubic")
					slide.find('.bg4').animate({top: '-134px'}, Slider.set.ms, "easeInOutCubic")
				}, Slider.set.ms * 2)
			}
			setTimeout(function() {
				slide.find('.text').animate({opacity: 1, top: "+=" + 20}).parents('#slider').css('z-index', 1000)
			}, 1800)
		},
		resetSlide: function () {
			var slide = $(this)
			if (slide.attr('class').indexOf('inkotek') !== -1) {
				slide.find('.bg0').css('top', '-600px')
				slide.find('.bg1').css('top', '332px')
				slide.find('.bg2').css('opacity', 0)
				slide.find('.bg3').css('left', '410px')
				slide.find('.bg4').css('left', '-1990px')
			} else if (slide.attr('class').indexOf('fuggi') !== -1) {
				slide.find('.bg0').css('opacity', 0)
				slide.find('.bg1').css('left', '-3990px')
				slide.find('.bg2').css('left', '410px')
			} else if (slide.attr('class').indexOf('lux') !== -1) {
				slide.find('.bg0').css('opacity', 0)
				slide.find('.bg1').css('left', '-3990px')
				slide.find('.bg2').css('left', '410px')
			} else if (slide.attr('class').indexOf('amba') !== -1) {
				slide.find('.bg0').css('top', '-600px')
				slide.find('.bg1').css('top', '332px')
				slide.find('.bg2').css('left', '410px')
				slide.find('.bg3').css('top', '-800px')
				slide.find('.bg4').css('top', '332px')
			}
			slide.find('.text').css({opacity: 0, top: "-=" + 20}).parents('#slider').css('z-index', 10)
		},
		init: function () {	
			$('#slider .slide').each(Slider.resetSlide)
			
			$('#slider .slider').cycle({	
				speed: 200,
				timeout: 0,
				next: '#slider .next',
				prev: '#slider .prev',
				before: Slider.resetSlide,
				after: Slider.showSlide
			})
		}
	}
	
	
	//Мы делаем хорошие сайты
	var WeDo = {
		paper: [],
		element: [],
		set: {		
			x:  	[180, 100, 100, 100, 100, 100, 100],
			y:  	[180, 100, 100, 100, 100, 100, 100],
			circR:	[122, 89,  79,  75,  70,  55, 60],
			l:  	[360, 275, 250, 270, 260, 220, 220],
			ra: 	[142, 90,  80,  76,  71,  56, 61],
			strW:	[47,  20,  17,  17,  16,  12, 12],
			rotate: [-45, -28, -55, 115, 35,  -50, 210],
			fill:	["5fc8d5", "34ca97", "cccc00", "6f5152", "368685", "cccc00", "6f5152"],
			stroke:	["46b8d0", "4cdeac", "dede50", "957677", "59abaa", "dede50", "957677"]
		},
		create_arc: function(arch) {
			arch.customAttributes.arc = function (xloc, yloc, alpha, R) {
				var	a = (90 - alpha) * Math.PI / 180,
				x = xloc + R * Math.cos(a),
				y = yloc - R * Math.sin(a),
				path;
				if (alpha == 360) {
					path = [["M", xloc, yloc - R], ["A", R, R, 0, 1, 1, xloc - .01, yloc - R]];
				} else {
					path = [["M", xloc, yloc - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
				}
				return {path: path};
			}
		},
		init: function() {
			//Создание сайтов
			WeDo.paper[0] = Raphael('weDo_0',WeDo.set.x[0] * 2,WeDo.set.y[0] * 2)
			WeDo.element[1] = WeDo.paper[0].pieChart(WeDo.set.x[0], WeDo.set.y[0], 165).attr({'opacity': 0})
			WeDo.element[0] = WeDo.paper[0].circle(WeDo.set.x[0],WeDo.set.y[0],0).attr({'stroke':'none','fill':'#' + WeDo.set.fill[0]})
			WeDo.element[14] = $('.round-text div')
			WeDo.create_arc(WeDo.paper[0])
			WeDo.element[15] = WeDo.paper[0].path().attr({"stroke": "#" + WeDo.set.stroke[0], "stroke-width": WeDo.set.strW[0],  arc: [WeDo.set.x[0], WeDo.set.y[0], 0, WeDo.set.ra[0]]})
			
			//Копирайтинг
			WeDo.paper[1] = Raphael('weDo_1',WeDo.set.x[1] * 2,WeDo.set.y[1] * 2)			
			WeDo.element[2] = WeDo.paper[1].circle(WeDo.set.x[1],WeDo.set.y[1],0).attr({'stroke':'none','fill':'#' + WeDo.set.fill[1]})			
			WeDo.create_arc(WeDo.paper[1])
			WeDo.element[3] = WeDo.paper[1].path().attr({"stroke": "#" + WeDo.set.stroke[1], "stroke-width": WeDo.set.strW[1],  arc: [WeDo.set.x[1], WeDo.set.y[1], 0, WeDo.set.ra[1]]})			
			$('#weDo_1 .content').hover(function() {
				WeDo.element[2].animate({"fill": "#" + WeDo.set.stroke[1]}, 600, "elastic")
				WeDo.element[3].animate({"stroke": "#" + WeDo.set.fill[1]}, 600, "elastic")
			}, function() {
				WeDo.element[2].animate({"fill": "#" + WeDo.set.fill[1]}, 600, "elastic")
				WeDo.element[3].animate({"stroke": "#" + WeDo.set.stroke[1]}, 600, "elastic")
			})
			
			//Сопровождение
			WeDo.paper[2] = Raphael('weDo_2',WeDo.set.x[2] * 2,WeDo.set.y[2] * 2)
			WeDo.element[4] = WeDo.paper[2].circle(WeDo.set.x[2],WeDo.set.y[2],0).attr({'stroke':'none','fill':'#' + WeDo.set.fill[2]})			
			WeDo.create_arc(WeDo.paper[2])
			WeDo.element[5] = WeDo.paper[2].path().attr({"stroke": "#" + WeDo.set.stroke[2], "stroke-width": WeDo.set.strW[2],  arc: [WeDo.set.x[2], WeDo.set.y[2], 0, WeDo.set.ra[2]]})
			
			//Безопасность
			WeDo.paper[3] = Raphael('weDo_3',WeDo.set.x[3] * 2,WeDo.set.y[3] * 2)
			WeDo.element[6] = WeDo.paper[3].circle(WeDo.set.x[3],WeDo.set.y[3],0).attr({'stroke':'none','fill':'#' + WeDo.set.fill[3]})			
			WeDo.create_arc(WeDo.paper[3])
			WeDo.element[7] = WeDo.paper[3].path().attr({"stroke": "#" + WeDo.set.stroke[3], "stroke-width": WeDo.set.strW[3],  arc: [WeDo.set.x[3], WeDo.set.y[3], 0, WeDo.set.ra[3]]})
			
			//SEO
			WeDo.paper[4] = Raphael('weDo_4',WeDo.set.x[4] * 2,WeDo.set.y[4] * 2)
			WeDo.element[8] = WeDo.paper[4].circle(WeDo.set.x[4],WeDo.set.y[4],0).attr({'stroke':'none','fill':'#' + WeDo.set.fill[4]})			
			WeDo.create_arc(WeDo.paper[4])
			WeDo.element[9] = WeDo.paper[4].path().attr({"stroke": "#" + WeDo.set.stroke[4], "stroke-width": WeDo.set.strW[4],  arc: [WeDo.set.x[4], WeDo.set.y[4], 0, WeDo.set.ra[4]]})
			
			//Сервер
			WeDo.paper[5] = Raphael('weDo_5',WeDo.set.x[5] * 2,WeDo.set.y[5] * 2)
			WeDo.element[10] = WeDo.paper[5].circle(WeDo.set.x[5],WeDo.set.y[5],0).attr({'stroke':'none','fill':'#' + WeDo.set.fill[5]})			
			WeDo.create_arc(WeDo.paper[5])
			WeDo.element[11] = WeDo.paper[5].path().attr({"stroke": "#" + WeDo.set.stroke[5], "stroke-width": WeDo.set.strW[5],  arc: [WeDo.set.x[5], WeDo.set.y[5], 0, WeDo.set.ra[5]]})
			
			//Usability
			WeDo.paper[6] = Raphael('weDo_6',WeDo.set.x[6] * 2,WeDo.set.y[6] * 2)
			WeDo.element[12] = WeDo.paper[6].circle(WeDo.set.x[6],WeDo.set.y[6],0).attr({'stroke':'none','fill':'#' + WeDo.set.fill[6]})			
			WeDo.create_arc(WeDo.paper[6])
			WeDo.element[13] = WeDo.paper[6].path().attr({"stroke": "#" + WeDo.set.stroke[6], "stroke-width": WeDo.set.strW[6],  arc: [WeDo.set.x[6], WeDo.set.y[6], 0, WeDo.set.ra[6]]})
		},
		anim: function() {
			WeDo.element[0].animate({r: WeDo.set.circR[0]}, 400, function() {
				$('#weDo_0 .content').not('.round-text div').animate({'opacity':1}, 400)
				WeDo.element[15].transform('r' + WeDo.set.rotate[0] + ',' + WeDo.set.x[0] + ',' + WeDo.set.y[0]).animate({arc: [WeDo.set.x[0], WeDo.set.y[0], WeDo.set.l[0], WeDo.set.ra[0]]}, 700, '<>').toBack()
				setTimeout(function() {
					WeDo.element[1].animate({'opacity':1}, 400)
				}, 700)
			})
			setTimeout(function() {
				WeDo.element[2].animate({r: WeDo.set.circR[1]}, 400, function() {
					WeDo.element[3].transform('r' + WeDo.set.rotate[1] + ',' + WeDo.set.x[1] + ',' + WeDo.set.y[1]).animate({arc: [WeDo.set.x[1], WeDo.set.y[1], WeDo.set.l[1], WeDo.set.ra[1]]}, 700, '<>')					
				$('#weDo_1 .content').animate({'opacity':1}, 400)
				})
			}, 800)
			setTimeout(function() {
				WeDo.element[4].animate({r: WeDo.set.circR[2]}, 400, function() {
					WeDo.element[5].transform('r' + WeDo.set.rotate[2] + ',' + WeDo.set.x[2] + ',' + WeDo.set.y[2]).animate({arc: [WeDo.set.x[2], WeDo.set.y[2], WeDo.set.l[2], WeDo.set.ra[2]]}, 700, '<>')					
				$('#weDo_2 .content').animate({'opacity':1}, 400)
				})
			}, 1200)
			setTimeout(function() {
				WeDo.element[6].animate({r: WeDo.set.circR[3]}, 400, function() {
					WeDo.element[7].transform('r' + WeDo.set.rotate[3] + ',' + WeDo.set.x[3] + ',' + WeDo.set.y[3]).animate({arc: [WeDo.set.x[3], WeDo.set.y[3], WeDo.set.l[3], WeDo.set.ra[3]]}, 700, '<>')					
				$('#weDo_3 .content').animate({'opacity':1}, 400)
				})
			}, 1600)
			setTimeout(function() {
				WeDo.element[8].animate({r: WeDo.set.circR[4]}, 400, function() {
					WeDo.element[9].transform('r' + WeDo.set.rotate[4] + ',' + WeDo.set.x[4] + ',' + WeDo.set.y[4]).animate({arc: [WeDo.set.x[4], WeDo.set.y[4], WeDo.set.l[4], WeDo.set.ra[4]]}, 700, '<>')					
				$('#weDo_4 .content').animate({'opacity':1}, 400)
				})
			}, 2000)
			setTimeout(function() {
				WeDo.element[10].animate({r: WeDo.set.circR[5]}, 400, function() {
					WeDo.element[11].transform('r' + WeDo.set.rotate[5] + ',' + WeDo.set.x[5] + ',' + WeDo.set.y[5]).animate({arc: [WeDo.set.x[5], WeDo.set.y[5], WeDo.set.l[5], WeDo.set.ra[5]]}, 700, '<>')					
				$('#weDo_5 .content').animate({'opacity':1}, 400)
				})
			}, 2400)
			setTimeout(function() {
				WeDo.element[12].animate({r: WeDo.set.circR[6]}, 400, function() {
					WeDo.element[13].transform('r' + WeDo.set.rotate[6] + ',' + WeDo.set.x[6] + ',' + WeDo.set.y[6]).animate({arc: [WeDo.set.x[6], WeDo.set.y[6], WeDo.set.l[6], WeDo.set.ra[6]]}, 700, '<>')					
				$('#weDo_6 .content').animate({'opacity':1}, 400)				
				$('.arrow-star').animate({'opacity':1}, 400)
				})
			}, 2800)
		}
	}
	
	
	//Мы беремся только тогда
	var WeStart = {
		paper: [],
		element: [],
		set: {
			x: 1000,
			y: 210,
			stroke: "3299c0",
			strW: 1.5,
			strS: "- ",
			startX: 180,
			delta: 166,
			alpha: 360,
			ms: 400,
			t: -90	,
			R: 100		
		},
		init: function() {
			WeStart.paper[0] = Raphael('weStart_0',WeStart.set.x,WeStart.set.y)			
			WeDo.create_arc(WeStart.paper[0])
			for (var i = 0; i < 5; i++) {
				WeStart.element[i] = WeStart.paper[0].path().attr({"stroke":"#" + WeStart.set.stroke, "stroke-width": WeStart.set.strW, "stroke-dasharray": WeStart.set.strS,  arc: [WeStart.set.startX + i * WeStart.set.delta, WeStart.set.y / 2, 0, WeStart.set.R]})
			}
		},
		anim: function() {
			var cont = $('#weStart_0 .text p'),
			marginStep = 25;
			cont.each(function(index) {
				index++;
				if (index%2) {
					$(this).css({
						"margin-left": "-=" + marginStep
					});
				}
			});
			cont.filter(":nth-child(1)").animate({
				opacity: 1,
				marginLeft: "+=" + marginStep
			}, WeStart.set.ms, function() {
				WeStart.element[0].transform("r" + WeStart.set.t + "," + WeStart.set.startX + "," + WeStart.set.y * 0.5).animate({arc: [WeStart.set.startX, WeStart.set.y / 2, 360, WeStart.set.R]}, WeStart.set.ms, '<>')
					cont.filter(":nth-child(2)").animate({opacity: 1}, WeStart.set.ms)
			})	
			setTimeout(function() {
				cont.filter(":nth-child(3)").animate({
					opacity: 1,
					marginLeft: "+=" + marginStep
				}, WeStart.set.ms, function() {
					WeStart.element[1].transform("r" + WeStart.set.t + "," + +(WeStart.set.startX + WeStart.set.delta) + "," + WeStart.set.y * 0.5).animate({arc: [WeStart.set.startX + WeStart.set.delta, WeStart.set.y / 2, 360, WeStart.set.R]}, WeStart.set.ms, '<>')
					cont.filter(":nth-child(4)").animate({opacity: 1}, WeStart.set.ms)
				});	
			}, WeStart.set.ms)
			setTimeout(function() {
				cont.filter(":nth-child(5)").animate({
					opacity: 1,
					marginLeft: "+=" + marginStep
				}, WeStart.set.ms, function() {
					WeStart.element[2].transform("r" + WeStart.set.t + "," + +(WeStart.set.startX + 2 * WeStart.set.delta) + "," + WeStart.set.y * 0.5).animate({arc: [WeStart.set.startX + 2 * WeStart.set.delta, WeStart.set.y / 2, 360, WeStart.set.R]}, WeStart.set.ms, '<>')
					cont.filter(":nth-child(6)").animate({opacity: 1}, WeStart.set.ms)
				});	
			}, 2*WeStart.set.ms)
			setTimeout(function() {
				cont.filter(":nth-child(7)").animate({
					opacity: 1,
					marginLeft: "+=" + marginStep
				}, WeStart.set.ms, function() {
					WeStart.element[3].transform("r" + WeStart.set.t + "," + +(WeStart.set.startX + 3 * WeStart.set.delta) + "," + WeStart.set.y * 0.5).animate({arc: [WeStart.set.startX + 3 * WeStart.set.delta, WeStart.set.y / 2, 360, WeStart.set.R]}, WeStart.set.ms, '<>')
					cont.filter(":nth-child(8)").animate({opacity: 1}, WeStart.set.ms)
				});	
			}, 3*WeStart.set.ms)
			setTimeout(function() {
				cont.filter(":nth-child(9)").animate({
					opacity: 1,
					marginLeft: "+=" + marginStep
				}, WeStart.set.ms, function() {
					WeStart.element[4].transform("r" + WeStart.set.t + "," + +(WeStart.set.startX + 4 * WeStart.set.delta) + "," + WeStart.set.y * 0.5).animate({arc: [WeStart.set.startX + 4 * WeStart.set.delta, WeStart.set.y / 2, 360, WeStart.set.R]}, WeStart.set.ms, '<>')
					cont.filter(":nth-child(10)").animate({opacity: 1}, WeStart.set.ms)
				});	
			}, 4*WeStart.set.ms)
			setTimeout(function() {
				cont.filter(":nth-child(11)").animate({
					opacity: 1,
					marginLeft: "+=" + marginStep
				});	
			}, 5*WeStart.set.ms)
		}
	}
	
	
	//Мы занимаемся
	var Service = {
		element: [],
		buttonMargin: 15,
		ms: 400,
		init: function() {
			$('#service > .service-simple').each(function(index) {
                Service.element[index] = $(this)
				$(this).css('opacity', 0)
            });
			Service.element[5] = $('#service_5')
			Service.element[5].css({
				opacity: 0,
				"margin-top": "-=" + Service.buttonMargin
			})
			Service.element[6] = $('.deco.cloud')
		},
		anim: function() {
			Service.element[0].animate({
				opacity: 1
			}, Service.ms)
			setTimeout(function() {
				Service.element[1].animate({
					opacity: 1
				}, Service.ms)
			}, Service.ms)
			setTimeout(function() {
				Service.element[2].animate({
					opacity: 1
				}, Service.ms)
			}, 2*Service.ms)
			setTimeout(function() {
				Service.element[3].animate({
					opacity: 1
				}, Service.ms)
			}, 3*Service.ms)
			setTimeout(function() {
				Service.element[4].animate({
					opacity: 1
				}, Service.ms)
			}, 4*Service.ms)
			setTimeout( function() {
				Service.element[5].animate({
					opacity: 1,
					marginTop: "+=" + Service.buttonMargin
				}, Service.ms)
				Service.element[6].animate({opacity: 1}, Service.ms)
			}, 5*Service.ms)
		}
	}
	
	
	//Как мы работаем
	var Team = {
		paper: [],
		element: [],
		set: {
			x: 1000,
			y: 210,
			stroke: "99c6c9",
			strW: 1.5,
			strS: "- ",
			startX: 128,
			delta: 248,
			alpha: 360,
			ms: 400,
			t: -90,
			R: 100,
			circR: 88,
			margin: 15			
		},
		init: function() {
			Team.paper[0] = Raphael('team_0',Team.set.x,Team.set.y)			
			WeDo.create_arc(Team.paper[0])
			for (var i = 0; i < 4; i++) {
				Team.element[i+4] = Team.paper[0].path().attr({"stroke":"#" + Team.set.stroke, "stroke-width": Team.set.strW, "stroke-dasharray": Team.set.strS,  arc: [Team.set.startX + i * Team.set.delta, Team.set.y / 2, 0, Team.set.R]})
			}
			for (i = 0; i < 4; i++) {
				Team.element[i] = Team.paper[0].circle(Team.set.startX + i * Team.set.delta, Team.set.y / 2,  0).attr({'stroke':'none','fill':'#fff'})
			}
			$('.count > p:nth-child(2)').css({"margin-top": "-=" + Team.set.margin})
			$('.count > p.pic').css({"margin-top": "+=" + Team.set.margin})
			
			$('#how-much form input[type="text"]').keydown(function(e) {
				var el = $(this),
					numbers = [8,13,17,20,35,36,37,39,45,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,110],
					currentVal = el.val(),
					charCode = e.which
				if (numbers.indexOf(charCode) === -1) {
					return false
				}
            });
			
			$('#how-much form').find('div').hide().end().submit(function() {
				var el = $(this),
					sum = el.find('input[type="text"]').val()
					el.find('div').fadeOut('fast')
				if (sum >= 55000) {
					el.find('.success').fadeIn('fast')
				} else {
					el.find('.error').fadeIn('fast')
				}
				return false;
			})
		},
		anim: function() {
			Team.element[4].animate({arc: [Team.set.startX + 0 * Team.set.delta, Team.set.y / 2, 360, Team.set.R]}, Team.set.ms)
			Team.element[0].animate({r: Team.set.circR}, Team.set.ms, function() {
				$('.count:eq(0) > .num span.countAnim:eq(0)').countAnimate()
				setTimeout(function() {
					$('.count:eq(0) > .num span:eq(1)').animate({opacity: 1}, 400, function() {
						$('.count:eq(0) > .num span.countAnim:eq(1)').countAnimate(function() {
							$('.count:eq(0) > p:nth-child(2)').animate({opacity: 1, marginTop: "+=" + Team.set.margin}, Team.set.ms)
							$('.count:eq(0) > p.pic').animate({opacity: 1, marginTop: "-=" + Team.set.margin}, Team.set.ms)
						})
					})
				}, 400)
			})
			setTimeout(function() {
				$('.plus:eq(0)').animate({opacity: 1}, Team.set.ms)
				Team.element[5].animate({arc: [Team.set.startX + 1 * Team.set.delta, Team.set.y / 2, 360, Team.set.R]}, Team.set.ms)
				Team.element[1].animate({r: Team.set.circR}, Team.set.ms, function() {
					$('.count:eq(1) > .num span.countAnim').countAnimate(function() {
						$('.count:eq(1) > p:nth-child(2)').animate({opacity: 1, marginTop: "+=" + Team.set.margin}, Team.set.ms)
						$('.count:eq(1) > p.pic').animate({opacity: 1, marginTop: "-=" + Team.set.margin}, Team.set.ms)						
					})
				})
			}, 1400)
			setTimeout(function() {
				$('.plus:eq(1)').animate({opacity: 1}, Team.set.ms)
				Team.element[6].animate({arc: [Team.set.startX + 2 * Team.set.delta, Team.set.y / 2, 360, Team.set.R]}, Team.set.ms)
				Team.element[2].animate({r: Team.set.circR}, Team.set.ms, function() {
					$('.count:eq(2) > .num span.countAnim').countAnimate(function() {
						$('.count:eq(2) > p:nth-child(2)').animate({opacity: 1, marginTop: "+=" + Team.set.margin}, Team.set.ms)
						$('.count:eq(2) > p.pic').animate({opacity: 1, marginTop: "-=" + Team.set.margin}, Team.set.ms)						
					})
				})
			}, 2400)
			setTimeout(function() {
				$('.plus:eq(2)').animate({opacity: 1}, Team.set.ms)
				Team.element[7].animate({arc: [Team.set.startX + 3 * Team.set.delta, Team.set.y / 2, 360, Team.set.R]}, Team.set.ms)
				Team.element[3].animate({r: Team.set.circR}, Team.set.ms, function() {
					$('.count:eq(3) > .num span.countAnim').countAnimate(function() {
						$('.count:eq(3) > p:nth-child(2)').animate({opacity: 1, marginTop: "+=" + Team.set.margin}, Team.set.ms)
						$('.count:eq(3) > p.pic').animate({opacity: 1, marginTop: "-=" + Team.set.margin}, Team.set.ms, function() {
							$('.count:eq(0) > .arrow').animate({opacity: 1}, Team.set.ms / 2)
							$('.count:eq(1) > .arrow').animate({opacity: 1}, Team.set.ms / 2)
							$('.count:eq(2) > .arrow').animate({opacity: 1}, Team.set.ms / 2)
							$('.count:eq(3) > .arrow').animate({opacity: 1}, Team.set.ms / 2, function() {
								$('#how-much').animate({opacity: 1, top: "+=68"}, Team.set.ms)
							})
						})
					})
				})
			}, 3400)
		}
	}
	
	
	//Наши технологии
	var Tech = {
		paper: [],
		element: [],
		set: {
			x: 1000,
			y: 233,
			ms: 400,
			color: ["34ca97", "368685", "cccc00", "6f5152"],
			startX: [0, 310, 470, 260, 135, 410, 690],
			startY: 16,
			width: [1000, 600],
			height: 31,
			margin: 15
		},
		init: function() {
			Tech.paper[0] = Raphael('tech_0',Tech.set.x,Tech.set.y)
			Tech.element[0] = Tech.paper[0].path("M" + Tech.set.startX[0] + "," + Tech.set.startY).attr({"stroke":"#" + Tech.set.color[3], "stroke-width": Tech.set.height})
			Tech.element[1] = Tech.paper[0].path("M" + Tech.set.width[0] + "," + (Tech.set.startY + Tech.set.height)).attr({"stroke":"#" + Tech.set.color[2], "stroke-width": Tech.set.height})
			Tech.element[2] = Tech.paper[0].path("M" + Tech.set.startX[2] + "," + (Tech.set.startY + 2*Tech.set.height)).attr({"stroke":"#" + Tech.set.color[1], "stroke-width": Tech.set.height})
			Tech.element[3] = Tech.paper[0].path("M" + Tech.set.width[0] + "," + (Tech.set.startY + 3*Tech.set.height)).attr({"stroke":"#" + Tech.set.color[0], "stroke-width": Tech.set.height})
			Tech.element[4] = Tech.paper[0].path("M" + Tech.set.startX[4] + "," + (Tech.set.startY + 4*Tech.set.height)).attr({"stroke":"#" + Tech.set.color[2], "stroke-width": Tech.set.height})
			Tech.element[5] = Tech.paper[0].path("M" + Tech.set.width[0] + "," + (Tech.set.startY + 5*Tech.set.height)).attr({"stroke":"#" + Tech.set.color[1], "stroke-width": Tech.set.height})
			Tech.element[6] = Tech.paper[0].path("M" + Tech.set.startX[6] + "," + (Tech.set.startY + 6*Tech.set.height)).attr({"stroke":"#" + Tech.set.color[0], "stroke-width": Tech.set.height})
			$('#tech_0 > p').each(function(index) {
                Tech.element[index + 7] = $(this)
				if (index%2 && index !== 0) {
					$(this).css('left', '+=' + Tech.set.margin)
				} else if (index !== 0) {
					$(this).css('left', '-=' + Tech.set.margin)
				}
            });
		},
		anim: function() {
			$('.timeline > p').each(function(index) {
				$(this).delay(index * Tech.set.ms / 2).animate({opacity: 1}, Tech.set.ms)
            });
			setTimeout(function() {
				Tech.element[13].animate({opacity:1, left: "+=" + Tech.set.margin}, Tech.set.ms, function() {
					Tech.element[6].animate({path: "M" + Tech.set.startX[6] + "," + (Tech.set.startY + 6*Tech.set.height) + "H" + Tech.set.width[0]}, Tech.set.ms * 1.5, "<")
				})
			}, 800)
			setTimeout(function() {
				Tech.element[5].animate({path: "M" + Tech.set.width[0] + "," + (Tech.set.startY + 5*Tech.set.height) + "H" + Tech.set.startX[5]}, Tech.set.ms * 1.5, "<", function() {
					Tech.element[12].animate({opacity:1, left: "-=" + Tech.set.margin}, Tech.set.ms)
				})
			}, 1500)
			setTimeout(function() {
				Tech.element[11].animate({opacity:1, left: "+=" + Tech.set.margin}, Tech.set.ms, function() {
					Tech.element[4].animate({path: "M" + Tech.set.startX[4] + "," + (Tech.set.startY + 4*Tech.set.height) + "H" + Tech.set.width[1]}, Tech.set.ms * 1.5, "<")
				})
			}, 2000)
			setTimeout(function() {
				Tech.element[3].animate({path: "M" + Tech.set.width[0] + "," + (Tech.set.startY + 3*Tech.set.height) + "H" + Tech.set.startX[3]}, Tech.set.ms * 1.5, "<", function() {
					Tech.element[10].animate({opacity:1, left: "-=" + Tech.set.margin}, Tech.set.ms)
				})
			}, 2500)
			setTimeout(function() {
				Tech.element[9].animate({opacity:1, left: "+=" + Tech.set.margin}, Tech.set.ms, function() {
					Tech.element[2].animate({path: "M" + Tech.set.startX[2] + "," + (Tech.set.startY + 2*Tech.set.height) + "H" + Tech.set.width[0]}, Tech.set.ms * 1.5, "<")
				})
			}, 3000)
			setTimeout(function() {
				Tech.element[1].animate({path: "M" + Tech.set.width[0] + "," + (Tech.set.startY + Tech.set.height) + "H" + Tech.set.startX[1]}, Tech.set.ms * 1.5, "<", function() {
					Tech.element[8].animate({opacity:1, left: "-=" + Tech.set.margin}, Tech.set.ms)
				})
			}, 3500)
			setTimeout(function() {
				Tech.element[0].animate({path: "M" + Tech.set.startX[0] + "," + Tech.set.startY + "H" + Tech.set.width[0]}, Tech.set.ms * 2.5, "<>", function() {
					Tech.element[7].animate({opacity:1}, Tech.set.ms)					
				})
			}, 3800)
		}
	}
	
	
	//Спасибо за внимание
	var Thx = {
		paper: [],
		element: [],
		set: {
			x:210,
			y:210,
			stroke: "88c3da",
			strW: 1.5,
			strS: "- ",
			R: 104,
			ms: 400,
			margin: 30
		},
		init: function() {
			Thx.paper[0] = Raphael('thx_0',Thx.set.x,Thx.set.y)			
			WeDo.create_arc(Thx.paper[0])
			Thx.element[2] = Thx.paper[0].path().attr({"stroke":"#" + Thx.set.stroke, "stroke-width": Thx.set.strW, "stroke-dasharray": Thx.set.strS,  arc: [Thx.set.x * 0.5, Thx.set.y * 0.5, 0, Thx.set.R]})
			Thx.element[0] = $('#thx_0 span:not(.countAnim)')
			Thx.element[1] = $('#thx_0 .countAnim')
			Thx.element[3] = $('#thx .submit')
			Thx.element[3].click(function() {
				$(this).parent('form').submit()
			})
			Thx.element[3].css('margin-top', '-=' + Thx.set.margin)
		},
		anim: function() {
			Thx.element[2].animate({arc: [Thx.set.x * 0.5, Thx.set.y * 0.5, 360, Thx.set.R]}, Thx.set.ms, function() {
				Thx.element[3].animate({opacity:1, marginTop: "+=" + Thx.set.margin}, Thx.set.ms)
				Thx.element[0].animate({opacity: 1}, Thx.set.ms, function() {
					Thx.element[1].countAnimate()
				})
			})
		}
	}
	
	
	//Social
	var Social = {
		element: [],
		set: {
			ms: 400,
			mountianMargin: 50,
			robotMargin: 30,
			robotAnim: 5,
			robotMs: 800,
			socialMargin: 40,
			socialOpacity: 0.7
		},
		socialAllow: function() {
			var socialMs = 150;
			$('.social').hover(function() {
				$(this).animate({opacity: 1}, socialMs)
			}, function() {
				$(this).animate({opacity: Social.set.socialOpacity}, socialMs)
			})
		},
		robotAnimation: function() {
			setInterval(function() {
					Social.element[3].stop(true, true).animate({top: "-=" + Social.set.robotAnim}, Social.set.robotMs, function() {
						setTimeout(function() {
							Social.element[3].animate({top: "+=" + Social.set.robotAnim}, Social.set.robotMs)
						}, 200)
					})
			}, Social.set.robotMs * 2 + 400)
		},
		init: function() {
			//webkit fix
			if ($.browser.webkit) {
				$('#social').css('top', '+=' + 4)
			}
			
			Social.element[0] = $('#social .mountian.left')
			Social.element[1] = $('#social .mountian.right')
			Social.element[2] = $('#social #social_0')
			Social.element[3] = $('#social #social_0 #robot')
			Social.element[4] = $('#social #social_0 .fb')
			Social.element[5] = $('#social #social_0 .tw')
			Social.element[6] = $('#social #social_0 .vk')
			
			$('.social').each(function() {
                $(this).css('top', '-=' + Social.set.socialMargin)
            })
			Social.element[0].css('left', '-=' + Social.set.mountianMargin)
			Social.element[1].css('right', '-=' + Social.set.mountianMargin)
			Social.element[3].css('top', '+=' + Social.set.robotMargin)
		},
		anim: function() {
			Social.element[0].animate({opacity: 1, left: "+=" + Social.set.mountianMargin}, Social.set.ms)
			Social.element[1].animate({opacity: 1, right: "+=" + Social.set.mountianMargin}, Social.set.ms)
			setTimeout(function() {
				Social.element[2].animate({opacity: 1}, Social.set.ms)
			}, Social.set.ms)
			setTimeout(function() {
				Social.element[3].animate({opacity: 1, top: "-=" + Social.set.robotMargin}, Social.set.ms)				
				Social.robotAnimation()
			}, 2*Social.set.ms)
			setTimeout(function() {
				$('.social').show()
				Social.element[4].animate({opacity: Social.set.socialOpacity, top: "+=" + Social.set.socialMargin}, Social.set.ms)		
			}, 3*Social.set.ms)
			setTimeout(function() {
				Social.element[5].animate({opacity: Social.set.socialOpacity, top: "+=" + Social.set.socialMargin}, Social.set.ms)
			}, 3.5*Social.set.ms)
			setTimeout(function() {
				Social.element[6].animate({opacity: Social.set.socialOpacity, top: "+=" + Social.set.socialMargin}, Social.set.ms, function() {
					Social.socialAllow()
				})	
			}, 4*Social.set.ms)
		}
	}
	
	
	//INITIALIZATION
	Slider.init();
	WeDo.init();
	WeStart.init();
	Service.init();
	Team.init();
	Tech.init();
	Thx.init();
	Social.init();
	
	
	//lazyload
	$('section').each(function() {
		var el = $(this),
		ID = el.attr('id'),
		topOffset = el.offset().top;
		$(window).scroll(function() {
			if  ( ($(window).scrollTop() + $(window).height()) > (topOffset + el.height()/1.5) &&
				( (topOffset + el.height()) > $(window).scrollTop() ) ) {
					switch (ID) {
						case 'weDo':
							if(!el.hasClass('opened') ){ el.addClass('opened'); WeDo.anim(); }
						break;
						case 'weStart':
							if(!el.hasClass('opened') ){ el.addClass('opened'); WeStart.anim(); }
						break;
						case 'service':
							if(!el.hasClass('opened') ){ el.addClass('opened'); Service.anim(); }
						break;
						case 'team':
							if(!el.hasClass('opened') ){ el.addClass('opened'); Team.anim(); }
						break;
						case 'tech':
							if(!el.hasClass('opened') ){ el.addClass('opened'); Tech.anim(); }
						break;
						case 'thx':
							if(!el.hasClass('opened') ){ el.addClass('opened'); Thx.anim(); }
						break;
						case 'social':
							if(!el.hasClass('opened') ){ el.addClass('opened'); Social.anim(); }
						break;
					}
				}
		});
	});		
});