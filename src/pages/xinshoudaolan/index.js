import "../../js/common2";
import "./index.scss";
$(document).ready(function () {
    $(".col-auto .filter_planeB").click(function (e) {

        $(".col-auto .filter_planeC").removeClass("filter_planeC");
        $(this).addClass("filter_planeC");

        var subview = $(this).attr("subview");

        $("#"+subview).addClass("showView");

        $("body").delay(1200).addClass("hiddenView");
        $(".views .icon-arrowleft").click(function(e){
            $("body").removeClass("hiddenView");
            $(".views").removeClass("showView");
        });

    })

});