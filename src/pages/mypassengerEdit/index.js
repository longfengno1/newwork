import '../../js/common2';
import './index.scss';

(function () {
    function init() {
        $('#user-common').addClass('active');
    }
    
    init();


})();
(function () {
    $(document).ready(function () {
        var TabBarBox = $("#userinfo-navbar");
        var TBBWrap = $(".left-container");
        $(window).bind("scroll", function () {
            var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
            if (!TBBWrap.offset()) return;
            if (st > TBBWrap.offset().top
                && st < $(".left-container").offset().top + $(".left-container").height() - TabBarBox.height()) {
                TabBarBox.addClass("boxfixed");
                TabBarBox.css("width", TBBWrap.width());
                TabBarBox.removeClass("boxbottom");
            } else if (st < TBBWrap.offset().top) {
                TabBarBox.removeClass("boxfixed");

                TabBarBox.removeClass("boxbottom");
            } else {
                $(".left-container").css("position", "relative")
                TabBarBox.removeClass("boxfixed");
                TabBarBox.addClass("boxbottom");
            }
        });
    })
        ;

    $(".checkbox").click(function () {
        //$(".tab_vip").removeClass("active");
        //$(this).addClass("active");

        //$(this).parent().parent().find(".content").hide();
        var id = $(this).attr("target");
        if ($(this).is(":checked")) {
            $("#" + id).show();
        }
        else {
            $("#" + id).hide();

        }
    });
})();