import "../../js/common2";
import "./index.scss";

(function () {

    $(".signin-type-tab").click(function () {
        if (!$(this).hasClass("current")) {
            $(".signin-type-tab").removeClass("current");
            $(".signin-type-tab").find(".loginlogo").addClass("img-gray");

            $(this).addClass("current");
            $(this).find(".loginlogo").removeClass("img-gray");

            $("#signin-mobile").toggle();
            $("#signin-wx").toggle();
        }

    //$(this).parent().find(".signin-type-tab").toggleClass("current");
    //$(this).parent().find(".signin-type-tab").toggle();
})

})()