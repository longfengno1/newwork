import '../../js/common2';
import './index.scss';

(function () {
    function init() {
        $('#user-card').addClass('active');
        $('#my-card-container').show();
        $('#my-code-container').hide();
        $('#my-card').addClass('active');
    }

    $('#my-card').click(function () {
        $('#my-card').addClass('active');
        $('#my-code').removeClass('active');
        $('#my-card-container').show();
        $('#my-code-container').hide();
    });

    $('#my-code').click(function () {
        $('#my-card').removeClass('active');
        $('#my-code').addClass('active');
        $('#my-card-container').hide();
        $('#my-code-container').show();
    });


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
            && st < $(".left-container").offset().top+$(".left-container").height()-TabBarBox.height()) {
                TabBarBox.addClass("boxfixed");
                TabBarBox.css("width",TBBWrap.width());
                TabBarBox.removeClass("boxbottom");
            }else if(st < TBBWrap.offset().top){
                TabBarBox.removeClass("boxfixed");
                
                TabBarBox.removeClass("boxbottom");
            }else {
                $(".left-container").css("position","relative")
                TabBarBox.removeClass("boxfixed");
                TabBarBox.addClass("boxbottom");
            }
        });
    })
})();