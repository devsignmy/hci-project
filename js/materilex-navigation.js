$.fn.mxNavigation = function(args) {
    var Defaults = {
        selector : "",
    } 
    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $elementSelection = $(args.selector);
    var $glassNavigation = $('<div class="navigation-glass"></div>');
    
    $elementSelection.find(".navigation-item").each(function() {
        $(this).on("click", function() {
            var $navigationItemActive = $elementSelection.find(".navigation-item.active");
            $navigationItemActive.removeClass("active");
            $(this).addClass("active");
        })    
    })
    
    $element.on("click", function(e) {
        $glassNavigation.appendTo("body");
        $elementSelection.addClass("active");
        e.preventDefault();
        window.setTimeout(function() {
            $glassNavigation.addClass("active");
        }, 50);
//        e.stopPropagation();
        $("body").bind("mousewheel", function(e) {

        })
        $glassNavigation.bind("click", function() {
            $elementSelection.removeClass("active");

            $elementSelection.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                if (!$elementSelection.hasClass("active")) {
                    $glassNavigation.removeClass("active");
                    $glassNavigation.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
                        $glassNavigation.remove();
                        $("body").unbind("mousewheel touchmove");
                    });
                } 
            });
        });
    })
}