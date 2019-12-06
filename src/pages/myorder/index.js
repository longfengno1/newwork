import '../../js/common2';
import './index.scss';

(function () {
    function init() {
        $('#user-order').addClass('active');
        $('#modify-order-layer').hide();
        $('#sm-modify-order-layer').hide();
        $('#alert').hide();
    }
    
    init();

    $('#modify-order').click(function () {
        $('#modify-order-layer').show();
    })
    $('#modify-cancel').click(() => {
        setTimeout(() => {
            $('#modify-order-layer').hide();
        })
    });
    $('#modify-ensure').click(() => {
        setTimeout(() => {
            $('#modify-order-layer').hide();
        })
    })

    $('#sm-modify-order').click(()=> {
        $('#sm-modify-order-layer').show();
    })

    $('#mask').click(function () {
        setTimeout(() => {
            $('#sm-modify-order-layer').hide();
        })
    })

    $('#sm-modify-ensure').click(function () {
        setTimeout(() => {
            $('.modify-btns').hide();
            $('.layer').hide();
            $('#alert').show();
        })
    });
    $('#submit-succes').click(function () {
        setTimeout(() => {
            $('#alert').hide();
            $('#sm-modify-order-layer').hide();
        })
    })
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