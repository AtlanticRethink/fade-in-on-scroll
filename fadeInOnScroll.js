(function($) {
    $.fn.visible = function(partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);

$(function() {
    $(window).scroll(function() {
        $('.fadeInBlock').each(function(i, el) {

            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            var el = $(el);

            //bottomOfWindow = bottomOfWindow + 200;

            if (bottomOfWindow > bottomOfObject && el.visible(true)) {
                $(this).animate({ opacity: '1' }, 1500);
            }
        });
    });
});
