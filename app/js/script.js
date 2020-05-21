$(document).ready(function () {

	// nice select
	$('.select-beauty').niceSelect();
	// nice select === end


	// fix top-menu
	var shrinkHeader = 250;
	var head = $('.header');
	var heightHeader = head.height();
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		if (scroll >= shrinkHeader) {
			$('body').css('paddingTop', heightHeader);
			head.addClass('shrink');
		} else {
			$('body').css('paddingTop', 0);
			head.removeClass('shrink');
		}
	});

	$(window).resize(function () {
		heightHeader = head.height();
	});
	// fix top-menu === end


	// slide menu
	$('.js-slide-block-toggle').click(function (event) {
		$(".js-slide-block-toggle").not(this).removeClass('slide-block-toggle--open');
		var current = $(this).data("menu");
		$(".slide-block").each(function () {
			if ($(this).data("menu") === current) {
				$(this).toggleClass("slide-block--open")
			} else {
				$(this).removeClass("slide-block--open")
			}
		})
		$(this).toggleClass('slide-block-toggle--open');
		event.stopPropagation();
	});

	$('.slide-block').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
		$('.slide-block').removeClass('slide-block--open');
		$(".js-slide-block-toggle").removeClass('slide-block-toggle--open');
	});
	// slide menu === end


	// template scroll
	$(".scroll").niceScroll({
		autohidemode: false,
		cursorcolor: "#dcdcdc",
		scrollspeed: 160, // scrolling speed
		mousescrollstep: 10,
	});
	// template scroll === end

	//increment field
	$('.incr__minus').click(function (e) {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) - 1;
		if (!$(this).hasClass("incr--one")) { // add class incr--one for 1 always
			if (count < 1) {
				count = 0;
			}
		} else {
			if (count < 1) {
				$(this).closest('.add-ingr__el').removeClass('add-ingr__el--active');
				//ingr toggle === end
				$(this).closest('.product-footer').find('.product-add').show();
				$(this).closest('.product-footer').toggleClass('product-footer-numb');
				$(this).closest('.product-footer').find('.incr__val span').html(1);
				count = 1;
			}
		}
		$input.html(count);
		e.stopPropagation();
	});

	/*	$('.incr--one .incr__minus').click(function () {
			var $input = $(this).parent().find('.incr__val span');
			var count = parseInt($input.html()) - 1;
			count = count < 1 ? 1 : count;
			$input.html(count);
		});*/

	$('.incr__plus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) + 1;
		count = count > 100 ? 100 : count;
		$input.html(count);
	});

	//increment field end

	// main slider
	$('.slider').slick({
		slidesToShow: 1,
		speed: 500,
		dots: true,
		arrows: false,
		centerMode: true,
		centerPadding: '18%',
		row: 0,
		//autoplay: true,
		//fade: true
		//autoplaySpeed: 8000, time between
		customPaging: function (slider, i) {
			return '<span class="dot"></span>';
		}
	});
	$('.slider-control--right').click(function () {
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function () {
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	// main slider === end

	// toggle size items
	$('.size__el').click(function () {
		$(this).closest('.size').find('.size__el').removeClass('size__el--active');
		$(this).addClass('size__el--active');
	});
	// toggle size items === end

	//history accord
	$('.history-card__wrap').click(function () {
		var current = $(this).closest('.history-card');
		current.closest('.history-card').toggleClass('history-card--active');
		current.find('.history-info').slideToggle(600);
	});
	//history accord===end


	// switch
	$('.js-switch').click(function () {
		var typeItem = $(this).data("item");
		var groupItem = $(this).data("group");
		var size = 0;
		$('.js-switch').each(function () {
			if ($(this).data("item") === typeItem) {
				$(this).removeClass("active");
				 size = $(this).size();
			}
			return size;
		});
		$('.js-switch-cont').each(function () {
			if ($(this).data("group") === groupItem) {
				if ($(this).data("item") === typeItem) {
					if(size===1){
						$(this).toggleClass("hidden")
					}else{
						$(this).removeClass("hidden")
					}
				} else {
					$(this).addClass("hidden");
				}
			}
		});
		$(this).addClass("active");
	});
	// switch === end

	//range slider simple
  $(".range").ionRangeSlider({
 		//prefix: "Списать ",
 		//postfix: " баллов"
 	})

	//window.condition = {};
	//window.condition.info = info;
});
