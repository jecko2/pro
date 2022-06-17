jQuery(document).ready(function () {
    jQuery('.dropdown').click(function () {
        jQuery(this).toggleClass('show');
        jQuery(this).find('.dropdown-menu').toggleClass('show');
    });
    jQuery('.navbar-toggler').click(function () {
        jQuery(this).toggleClass('show');
        jQuery(this).parents('.navbar-light').find('#navbarSupportedContent').toggleClass('show');
    });
    $(document).mouseup(function (e) {
        var div = $(".dropdown");
        if (!div.is(e.target)
                && div.has(e.target).length === 0) {
            div.removeClass('show');
            div.find('.dropdown-menu').removeClass('show');
        }
    });
    $("[data-hover-bg]").hover(function () {
        var activeLine = $(this).parent().index();
        var activeColumn = $(this).index();
        // all items
        var lineItem = $("[data-hover-bg]").closest("table").find("tr").find("[data-hover-bg]");
        lineItem.each(function () {
            var line = $(this).parent().index();
            var column = $(this).index();
            if (
                    (line == activeLine && column <= activeColumn) || (column == activeColumn && line <= activeLine)) {
                $(this).addClass("hover");
            }
        });
    }, function () {
        $("[data-hover-bg]").removeClass("hover");
    });
});