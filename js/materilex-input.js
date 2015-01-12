$.fn.mxFormInput = function(arg) {
	var Defaults = {
		addClass : "",
	} 
	arg = $.extend(true, {}, Defaults, arg);
	var element = $(this);

	var type = $(this).attr("type");


	var name = $(this).attr("name");
	var value = $(this).attr("value");
	var placeholder = $(this).attr("placeholder");
	var bottomLabel = $(this).data("label");
	var This = this;

	$(this).attr("placeholder", "");
	$(this).wrap('<div class="input-box '+arg.addClass+'"></div>');
	var inputBox = $(this).parents(".input-box");

	var placer = $('<div class="placeholder">'+ placeholder +'</div>');
	var labeler = $('<div class="bottom-label">'+ bottomLabel +'</div>');
	$(inputBox).append(placer);
	$(inputBox).append('<div class="focus-line"></div>');
	$(inputBox).append('<div class="highlight"></div>');

	if ($(this).hasAttr("data-label")) {
		$(inputBox).append(labeler);
	}
	$(inputBox ).after( '<div class="clearfix"></div>' );
	

	if ($(this).val() != "") {
		$(inputBox).children(".placeholder").addClass("focus");
	}

	$(this).on("focus",function() {
		$(this).parents(".input-box").addClass("active");
		$(this).parents(".input-box").children(".placeholder").addClass("focus");
		if ($(this).val() == "") {
			$(this).parents(".input-box").children(".highlight").addClass("active");
		}
	});

	$(this).bind("change",function() {
		$(this).parents(".input-box").addClass("active");
		$(this).parents(".input-box").children(".placeholder").addClass("focus");
		if ($(this).val() == "") {
			$(this).parents(".input-box").children(".highlight").addClass("active");
		}
	});

	$(this).blur(function() {
		$(inputBox).removeClass("active");
		$(inputBox).children(".highlight").removeClass("active");
		if ($(this).val() == "") {
			$(inputBox).children(".placeholder").removeClass("focus");
		}
	});

	$(inputBox).children(".placeholder").bind('click',function() {
		$(inputBox).children(This).focus();
	});


}

