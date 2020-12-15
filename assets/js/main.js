(function ($) {
	"use strict";

	/*=============================================
		=    		 Preloader			      =
	=============================================*/
	function preloader() {
		$('#preloader').delay(0).fadeOut();
	};

	$(window).on('load', function () {
		preloader();
		mainSlider();
		aosAnimation();
		wowAnimation();
	});

	
	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("fixed-top");
			$('.scroll-to-target').removeClass('open');

		} else {
			$("#sticky-header").addClass("fixed-top");
			$('.scroll-to-target').addClass('open');
		}
	});


	/*=============================================
		=    		 Main Slider		      =
	=============================================*/
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: false,
			prevArrow:
				'<button type="button" class="slick-prev"> <i class="fal fa-arrow-left"></i></button>',
			nextArrow:
				'<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
			responsive: [
				{ breakpoint: 1000, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}

	
	/*=============================================
		=    		Slick Regular slider	     =
	=============================================*/
	$(".regular-slider").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		nextArrow: '<i class="fal fa-angle-right slick-arrow-right" aria-hidden="true"></i>',
		prevArrow: '<i class="fal fa-angle-left slick-arrow-left" aria-hidden="true"></i>',
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	
	/*=============================================
		=    		 Magnific Popup          =
	=============================================*/
	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});




	/*=============================================
		=    		 Aos Active  	         =
	=============================================*/
	function aosAnimation() {
		AOS.init({
			duration: 1000,
			mirror: true,
			once: true,
			disable: 'mobile',
		});
	}



	/*=============================================
		=    		 Wow Active  	         =
	=============================================*/
	function wowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}

	$('#view-input-password').on('click', function(e) {
		var passwordFeild = $("#passwordLabel");
        var passwordFeildType = passwordFeild.attr('type');
		if (passwordFeildType == 'password') {
			passwordFeild.attr('type', 'text');
		}
		else {
			passwordFeild.attr('type', 'password');
		}
	})


})(jQuery);