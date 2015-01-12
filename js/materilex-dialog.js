$.fn.mxDialog = function(args) {
    var Defaults = {
        selector : "",
    } 
    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $elementSelection = $(args.selector);
    var $glassNavigation = $('<div class="dialog-glass"></div>');


    $element.on("click", function(e) {
        $glassNavigation.appendTo("body");
        $elementSelection.addClass("show");
        window.setTimeout(function() {
            $elementSelection.addClass("active");
            e.preventDefault();
            $glassNavigation.addClass("active");
            $("body").bind("mousewheel", function(e) {

            })
            
            $glassNavigation.bind("click", function() {
                $elementSelection.removeClass("active");
                window.setTimeout(function() {
                    if (!$elementSelection.hasClass("active")) {
                        $glassNavigation.removeClass("active");
                        
                        $glassNavigation.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
                            $glassNavigation.remove();
                            $elementSelection.removeClass("show");
                            $("body").unbind("mousewheel touchmove");
                        });
                    } 
                },50)
            });
        }, 50);
        //        $elementSelection.addClass("active");
        //        e.preventDefault();
        //        window.setTimeout(function() {
        //            $glassNavigation.addClass("active");
        //        }, 50);
        //        //        e.stopPropagation();
        //        $("body").bind("mousewheel", function(e) {
        //
        //        })
                
    })
}