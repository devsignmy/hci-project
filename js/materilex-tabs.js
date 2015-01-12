$.fn.mxTabs = function(args) {
    var Defaults = {
        selector : "",
        children : ".tabs-item",
        selectorChildren : ".tabs-body-item",
        indicator : ".indicator",
    } 
    args = $.extend(true, {}, Defaults, args);
    var $element = $(this);
    var $elementSelection = $(args.selector);
    var $elementSelectionActive = $(args.children+ ".active");
    var $elementChildSelection = $(args.selectorChildren);
    var $elementChild = $element.find(args.children);
    var $elementIndicator = $element.find(args.indicator);
    var checkAjax = true;
    
    $(document).ajaxComplete(function() {
        if(checkAjax) {
            $elementIndicator.css({
                width: $elementSelectionActive.outerWidth(),
                left: $elementSelectionActive.position().left
            })
        }
    });
    
    var indexActive = $elementSelectionActive.index(args.children);
    $elementSelection.css({
        height: $elementChildSelection.eq(indexActive).outerHeight()
    })
    
    $elementChildSelection.each(function() {
        var index = $(this).index(args.selectorChildren);
        $(this).css("left", index*100 + "%");
    })
    
    $elementChildSelection.each(function(){
        $(this).css("transform", 'translateX(-'+ $elementSelectionActive.index(args.children) *100 +'%)')
    })
    
    
    
    $elementChild.each(function() {
        var elementIndex= $(this).index(args.children);
        $(this).on("click", function() {
            $elementChildSelection.each(function(){
                $(this).css("transform", 'translateX(-'+ elementIndex *100 +'%)')
            })
            checkAjax = false;
            
            $elementSelection.css({
                height: $elementChildSelection.eq(elementIndex).outerHeight()
            })
            $elementIndicator.css({
                width: $(this).outerWidth(),
                left: $(this).position().left
            })
        })
    })
}