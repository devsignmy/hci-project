$.fn.mxCheckbox = function(args) {
	var element = this;
	var Defaults = {
		selector: ".dialog",
	}
	args = $.extend(true, {}, Defaults, args);

	var ripple = $(element).children(".ripple");
	var label = $(element).children("label");

	// var $check = $(this).children(".ripple").children(".svg-check");
	var checkbox = $(element).children('input[type="checkbox"]');

	if ($(checkbox).hasAttr('checked') ) {
		$(ripple).addClass("checked");
	}

	$(label).click(function() {
		// var checkbox = $(element).children('input[type="checkbox"]');
		$(ripple).toggleClass("checked");
		if ($(checkbox).is(':checked') ) {
			$(checkbox).prop("checked", false);
		} else {
			$(checkbox).prop("checked", true);
		}
	})

	$(ripple).click(function() {
		// var checkbox = $(element).children('input[type="checkbox"]');
		$(ripple).toggleClass("checked");
		if ($(checkbox).is(':checked') ) {
			$(checkbox).prop("checked", false);
		} else {
			$(checkbox).prop("checked", true);
		}
	});
}