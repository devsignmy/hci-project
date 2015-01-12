$.fn.mxIsFixed = function () {
	var $element = $(this);
	var $checkElements = $element.add($element.parents());
	var isFixed = false;
	$checkElements.each(function(){
		if ($(this).css("position") === "fixed" || $(this).css("position") === "absolute") {
			isFixed = true;
			return false;
		}
	});
	return isFixed;
}
