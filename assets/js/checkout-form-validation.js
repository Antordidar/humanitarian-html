

$(".next").on('click', function(){
	current_fs = $(this).parents('fieldset');
	next_fs = current_fs.next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");


	// $("#header1").addClass('animated fadeOutUpBig');

	//show the next fieldset
	next_fs.show();
	// current_fs.addClass('animated flipInY')
	current_fs.animate({opacity:0},{

		step: function(now) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale('+scale+')',
				'position': 'absolute'
			});
			
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide(100);
		},
	});
});


$(".previous").on('click', function(){
	current_fs = $(this).parents('fieldset');	
	previous_fs = current_fs.prev();

	// de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

	// show the previous fieldset
	previous_fs.show(); 
	// current_fs.addClass('animated flipInY')
	current_fs.animate({opacity:0},{
		step: function(now) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity, 'position': 'relative'});
		},
		duration: 800,
		complete: function(){
			current_fs.hide(100);
		},
	});
});