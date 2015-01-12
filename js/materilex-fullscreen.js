$.fn.mxFullscreen = function(data) {
	var element = $(this);
	var elementParent = $(this).parents(".fullscreen");
	var childrenLength = $(elementParent).children(".fullscreen-item").length;
	var count = 2;
	if (data == "next") {
		var elementDone = $(elementParent).find('[data-fullscreen="done"]');
		elementDone.hide()
		$(element).click(function() {

			var activeItem = $(elementParent).children(".fullscreen-item.active");

			if (activeItem.length == 0) {
				activeItem = $(elementParent).children(".fullscreen-item");

			}
			var index = activeItem.index(".fullscreen-item");
			activeItem.css("transform", "translateX(-100%)");

			if (count < childrenLength) {
				$(activeItem).on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
					activeItem = $(elementParent).children(".fullscreen-item").eq(index + 1);
					activeItem.addClass("active");
					$(this).removeClass("active");
					count+=1;
				});

				
			} if (count == childrenLength) {
				$(element).hide();
				$(elementDone).show();
			}
			
		});
	}

	else if (data == "parent") {
		// var length = $(elementParent).children(".fullscreen-item");
		$(this).children(".fullscreen-item").each(function() {
			var index = $(this).index(".fullscreen-item");
			$(this).css("z-index", 100 - index);
		});
	}
}

