$.fn.mxWelcomeScreen = function() {
    var $element = $(this);
    var $elementTitle =$(this).find("h1");
    var $elementSubTitle = $(this).find("h2");
    var $elementWelcomeEffect = $(this).find(".welcome-effect");
    
    $(window).load(function() {
        
        $element.addClass("hide");
        window.setTimeout(function() {
            $elementTitle.addClass("animate");
            $elementWelcomeEffect.addClass("animate");
            $elementSubTitle.addClass("animate");

            $elementSubTitle.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
                $element.addClass("opacity");
                window.setTimeout(function() {
                    $element.addClass("hide");
                }, 1300);
            });
        },1500)
        
        
    });
}