import "../../js/common2";
import "./index.scss";
(function () {
    $(".filter_planeC .countrylist li").click(function () {
        $(".filter_planeC .countrylist li").removeClass("current");
        $(this).addClass("current");
        return false;
    })

})()
