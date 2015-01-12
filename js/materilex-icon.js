$.fn.mxIcon = function(arg) {
	var Defaults = {
		iconName : "",
		morph : "",
		replace: false,
		parentAddClass : "icon"
	}
	arg = $.extend(true, {}, Defaults, arg);
	var element = $(this);

	$.ajax({
		url: '/../svg/' + arg.iconName + ".svg",
		dataType: "text",
		success: function (svg) {
			if (arg.replace == false) {
				$(element).html(svg);
				$(element).addClass(arg.parentAddClass);
			}
		}
	})

}