$.fn.hasAttr = function(name) {  
    return this.attr(name) !== undefined;
};

$("body").find("[data-welcome-screen]").each(function() {
    $(this).mxWelcomeScreen();
})

$.fn.mxInit = function() {
    $(this).find(".ripple, .flat-button, .floating-action, .raised-button").each(function() {
        var data = $(this).data("ripple");
        $(this).mxRipple(data);
    })	

    $(this).find("[data-icon]").each(function() {
        var data = $(this).data("icon");
        // console.log(data)
        if ($.isPlainObject(data)) {
            $(this).mxIcon(data);
        } else {
            $(this).mxIcon({
                iconName : data,
            })
        }
    });

    $(this).find("[data-fullscreen]").each(function() {
        $(this).mxFullscreen($(this).data("fullscreen"));
    });

    $(this).find("[data-floating-input]").each(function() {
        var data = $(this).data("floating-input");
        if ($.isPlainObject(data)) {
            $(this).mxFormInput(data);
        } else {
            $(this).mxFormInput({
                addClass : data,
            })
        }

    })

    $(this).find(".checkbox").each(function() {
        $(this).mxCheckbox();
    })

    $(this).find("[data-toolbar-fixed]").each(function() {
        $(this).mxToolbarFixed($(this).data("toolbar-fixed"));
    })

    $(this).find("[data-toolbar-search]").each(function() {
        var data = $(this).data("toolbar-search");
        // console.log(data)
        if ($.isPlainObject(data)) {
            $(this).mxToolbarSearch(data);
        } else {
            $(this).mxToolbarSearch({
                selector: data,
            })
        }
    });

    $(this).find("[data-toolbar-dropdown]").each(function() {
        var data = $(this).data("toolbar-dropdown");
        if ($.isPlainObject(data)) {
            $(this).mxToolbarDropdown(data);
        } else {
            $(this).mxToolbarDropdown({
                selector: data,
            })
        }
    });

    $(this).find("[data-navigation]").each(function() {
        var data = $(this).data("navigation");
        if ($.isPlainObject(data)) {
            $(this).mxNavigation(data);
        } else {
            $(this).mxNavigation({
                selector: data,
            })
        }
    });
    
    $(this).find("[data-dialog]").each(function() {
        var data = $(this).data("dialog");
        if ($.isPlainObject(data)) {
            $(this).mxDialog(data);
        } else {
            $(this).mxDialog({
                selector: data,
            })
        }
    });
    
    $(this).find("[data-tabs]").each(function() {
        var data = $(this).data("tabs");
        if ($.isPlainObject(data)) {
            $(this).mxTabs(data);
        } else {
            $(this).mxTabs({
                selector: data,
            })
        }
    });
}

$(document).ready(function() {
    $("body").mxInit();
})





