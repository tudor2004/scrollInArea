/*!
 * jQuery Scroll In Area Plugin
 * Examples and documentation at: http://www.sites-webdesign.com
 * Copyright (c) 2013 Tudor Ravoiu
 * Version: 2.0 (21-AUG-2013)
 * Dual licensed under the GPL licenses.
 * http://www.sites-webdesign.com
 * Requires: jQuery v1.8.3 or later
 */

(function($){
	$.fn.scrollInArea = function(params){
		var params = $.extend( {wrapper: 'body'}, params);
		var el = this;
		$(el).css({
			height: $(el).height()
		});
		window.onload = sct;
		window.onscroll = sct; 

		function sct() {
			var element = $(el),
			    $wrapper = $(params.wrapper); // scrollTo element
			
			if($(element).length>0) { // only if the element exist;
				 
				if(!$(element).parent().hasClass('fixed-wrapp')) $(element).wrap('<div class="fixed-wrapp" style="height: '+($wrapper.height()-14)+'px" />'); // adding wrapper to element in view
					
			 	var currScroll = $(window).scrollTop(),  
			 	    elPos = $(element).parent().offset().top, 
			 	    elPosLeft = $(element).parent().offset().left, 
			 	    elPosMar = parseInt($(element).css('margin-top')),	
			 	    elWidth = $(element).width(),
			 	    elHeight = $(element).height(),
			 	    currBottScroll = currScroll + $(window).height(),
			 	    wrBott = $wrapper.offset().top + $wrapper.height();
				
				
				
				if(currScroll>(elPos) && currScroll < (wrBott - elHeight - elPosMar)) { // if scroll is between the two lines
					$(element).removeAttr('style').removeClass('fixed');
					$(element).css({
						'position': 'fixed',
						'top': 0,
						'width': elWidth,
						'left': elPosLeft 
					}).addClass('fixed');	
				} else { 
					if(currScroll > (wrBott - elHeight - elPosMar)) {
						$(element).removeAttr('style').removeClass('fixed'); 
						$(element).css({
							'position': 'absolute',
							'bottom': 0-elPosMar,
							'top': 'auto',
							'width': elWidth,
							left: 0
						}).removeClass('fixed'); 
					} else {
						$(element).removeAttr('style').removeClass('fixed');
					}
					
				}
				if($(element).hasClass('fixed')) $(element).css("left", elPosLeft-$(window).scrollLeft());
			}
		}
	}
})(jQuery);