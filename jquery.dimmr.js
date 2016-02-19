// dimmr by Stephen Widom - stephenwidom.com
(function($){ // Dim the current page once the top of a specific element has crossed the halfway point of the viewport

	$.fn.dimmr = function(o)
	{

		var isDark = false,
			s = $.extend({
					animationSpeed: 600, // How long it takes (in milliseconds) to fade in/out
					opacity: 		0.8, // How opaque the background will be
					zIndex: 		1 	 // The z-index of the background
				}, o),
			$target = $(this);

		$('body:first').append('<span id="dimmr"></span>');

		$('#dimmr').css({
			'position': 	'fixed',
			'background': 	'#000000',
			'opacity': 		0,
			'left': 		0,
			'right': 		0,
			'top': 			0,
			'bottom': 		0,
			'z-index': 		s.zIndex
		});

		$(window).on("scroll", function(){

			var scrollTop 		= $(window).scrollTop(),
				elementOffset 	= $target.offset().top,
				distance 		= elementOffset - scrollTop,
				viewportHeight 	= Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

			if (distance > viewportHeight / 2){
				if (isDark){
					$('#dimmr').stop().animate({
						opacity: 0
					}, s.animationSpeed);
					isDark = false;
				}
			} else {
				if (!isDark){
					$('#dimmr').stop().animate({
						opacity: s.opacity
					}, s.animationSpeed);
					isDark = true;
				}
			}

		});

		return this;
	}
}(jQuery));