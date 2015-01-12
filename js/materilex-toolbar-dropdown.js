$.fn.mxToolbarDropdown = function(args) {
    var Defaults = {
        selector : "",
    } 
    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $elementSelection = $(args.selector);

    $elementSelection.find(".dropdown-item").each(function() {
        $(this).bind("click", function() {
            var $activeChild = $elementSelection.find(".dropdown-item.active");
            $activeChild.removeClass("active");
            $(this).addClass("active");
        })
    });
    
    $element.on("click", function(e) {
        var documentWidth = $(document).width();
        var position = $element.position();
        var positionLeft = position.left;
        var balanceWidth = documentWidth - position.left;
        
        if (balanceWidth < 192) {
            $elementSelection.css({
                top: 0,
                right : balanceWidth - $element.outerWidth(),
                left: "auto",
            }).addClass("right").addClass("active");
        } else {
            $elementSelection.css({
                top: 0,
                left : position.left,
                right: "auto",
            }).toggleClass("active");
        }
        
        e.stopPropagation();
        $('body').bind("click", function() {
            $elementSelection.removeClass("active");
        });
        
        
    })
}