import '../../js/common2';
import './index.scss';

(function () {
    function init() {
        $('#user-card').addClass('active');
        $('#my-card-container').show();
        $('#my-code-container').hide();
        $('#my-gift-container').hide();
        $('#my-goods-container').hide();
        $('#my-card').addClass('active');

        $('#my-card-container-sm').show();
        $('#my-code-container-sm').hide();
        $('#my-gift-container-sm').hide();
        $('#my-goods-container-sm').hide();
    }

    $('#my-card').click(function () {
        $('#my-card').addClass('active');
        $('#my-card-container').show();
        $('#my-gift-container').hide();
        $('#my-goods-container').hide();
        $('#my-code-container').hide();
    });
    $('#my-gift').click(function () {
        $('#my-gift').addClass('active');
        $('#my-card-container').hide();
        $('#my-gift-container').show();
        $('#my-goods-container').hide();
        $('#my-code-container').hide();
    });
    $('#my-goods').click(function () {
        $('#my-goods').addClass('active');
        $('#my-card-container').hide();
        $('#my-gift-container').hide();
        $('#my-goods-container').show();
        $('#my-code-container').hide();
    });
    $('#my-code').click(function () {
        $('#my-card').removeClass('active');
        $('#my-card-container').hide();
        $('#my-gift-container').hide();
        $('#my-goods-container').hide();
        $('#my-code-container').show();
    });

    $('#my-card-sm').click(function () {
        $('#my-card-sm').addClass('active');
        $('#my-card-container-sm').show();
        $('#my-gift-container-sm').hide();
        $('#my-goods-container-sm').hide();
        $('#my-code-container-sm').hide();
    });
    $('#my-gift-sm').click(function () {
        $('#my-gift-sm').addClass('active');
        $('#my-card-container-sm').hide();
        $('#my-gift-container-sm').show();
        $('#my-goods-container-sm').hide();
        $('#my-code-container-sm').hide();
    });
    $('#my-goods-sm').click(function () {
        $('#my-goods-sm').addClass('active');
        $('#my-card-container-sm').hide();
        $('#my-gift-container-sm').hide();
        $('#my-goods-container-sm').show();
        $('#my-code-container-sm').hide();
    });
    $('#my-code-sm').click(function () {
        $('#my-card-sm').removeClass('active');
        $('#my-card-container-sm').hide();
        $('#my-gift-container-sm').hide();
        $('#my-goods-container-sm').hide();
        $('#my-code-container-sm').show();
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