function nrCarousel($sel) {
    $sel.carousel({
        interval: 9000
    }).on('slide.bs.carousel', function() {
        var $this = $(this).find('.active .animated');
        $.each($this, function(index, value) {
            //console.log($(value).data('anim-out'));
            $(value).removeClass($(value).data('anim-out'));
        });
    }).on('slid.bs.carousel', function() {
        var $this = $(this).find('.active .animated');

        $.each($this, function(i, v) {
            $(v).addClass($(v).data('anim-in'));
            setTimeout(function() {
                $(v).removeClass($(v).data('anim-in')).addClass($(v).data('anim-out'));
            }, 5000);
        });
    });
}