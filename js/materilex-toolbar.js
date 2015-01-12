$.fn.mxToolbarFixed = function(arg) {
	var Defaults = {
		scrollHeight : 0,
	} 
	arg = $.extend(true, {}, Defaults, arg);
	var element = $(this);
	$(element).removeClass("beforeFixed");
	$(element).removeClass("fixed");

	toolbarScroll(element, arg);

	$(window).on("scroll", function(e) {
		toolbarScroll(element, arg);
	})
	
}

$.fn.mxToolbarSearch =function(arg) {
	var Defaults = {
		selector: null,
	} 
	arg = $.extend(true, {}, Defaults, arg);
	var $element = $(this);

	if (arg.selector != null) {
		var $selector = $(arg.selector);

		$element.on("click", function(e) {
			e.stopPropagation();
			$selector.addClass("active");
            $selector.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                if ($selector.hasClass("active")) {
                    $selector.find(".search-input").focus();
                } 
            });
			
			$('body').bind("click", function() {
				$selector.removeClass("active");
			});
		})
		
	}
}

function toolbarScroll(element, arg) {
	var scrollHeight = arg.scrollHeight;


	if ($(this).scrollTop() > scrollHeight + element.height()) {

		if (! $(element).hasClass("fixed")) {
			$(element).addClass("beforeFixed");
			window.setTimeout(function() {
			    $(element).addClass("fixed");
			    $(element).removeClass("beforeFixed");
			}, 100);
		}
    	
  	}

  	if ($(this).scrollTop() <= scrollHeight){
		$(element).removeClass("fixed");
	} 
  	
}


