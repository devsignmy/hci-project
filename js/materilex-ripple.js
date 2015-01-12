$.fn.mxRipple = function(arg) {
	var Defaults = {
		rippleColor : "doingNothing",
		boxShadow : "0",
	}
	arg = $.extend(true, {}, Defaults, arg);

	$(this).bind('mousedown', function (event) {
		var $div = $('<div/>'),
		btnOffset = $(this).offset(),
		xPos = event.pageX - btnOffset.left,
		yPos = event.pageY - btnOffset.top ; //- $("body").scrollTop()

		if (!$(this).mxIsFixed) {
			$(this).css('position', 'relative');
		}
		$div.addClass('ripple-effect');

		if ($(this).height() > $(this).width()) {
			$div.css("height", $(this).height()*2);
			$div.css("width", $(this).height()*2);

			$div.css({
				top: yPos - $(this).height(),
				left: xPos - $(this).height(),
				background: arg.rippleColor,
			});
		} else {
			$div.css("height", $(this).width()*2);
			$div.css("width", $(this).width()*2);

			$div.css({
				top: yPos - $(this).width(),
				left: xPos - $(this).width(),
				background: arg.rippleColor,
			});
		}

		$div.appendTo($(this));
		var This = this;
		$(this).addClass("active");
		window.setTimeout(function(){
			$div.css('display', 'none');
			$div.remove();
			$(This).removeClass("active");
		}, 2000);
	});
}