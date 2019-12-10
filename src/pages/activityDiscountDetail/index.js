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
})()

