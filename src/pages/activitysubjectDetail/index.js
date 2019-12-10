import "../../js/common2";
import "./index.scss";
(function () {
    $(".filter_planeC .countrylist li").click(function () {
        $(".filter_planeC .countrylist li").removeClass("current");
        $(this).addClass("current");
        return false;
    });
    $(".filter_planeC .citylist li").click(function () {
        $(".filter_planeC .citylist li").removeClass("current");
        $(this).addClass("current");
        return false;
    });

    $(".m_tab .citylist li").click(function () {
        $(".m_tab .citylist li").removeClass("current");
        $(this).addClass("current");
        return false;
    });


    //选项卡切换
    $('.tab-items ul li').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
    }) 
    //按钮箭头
    var catew = $('.tab-items').width() - 120;
    var cateLiw = 0;
    $('.tab-items ul li').each(function () {
        cateLiw += $(this).outerWidth();
    })
    //超出一屏幕，显示next
    if (cateLiw < 1000) {
        $('.next').hide();
    }
    var i = 0;
    $('.next').click(function () {
        $('.tab-items ul').animate({
            "margin-left": -catew + 'px'
        }, 500)
        i++;
        if ((catew + 120) * i + (catew + 120) >= cateLiw) {
            $('.prev').show();
            $('.next').hide();
        }
    })
    $('.prev').click(function () {
        $('.tab-items ul').animate({
            "margin-left": 0 + 'px'
        }, 500)
        $(this).hide(); $('.next').show();
    })


})()

