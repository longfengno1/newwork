import "../../js/common2";
import "./index.scss";

(function () {

    $(".signin-type-tab").click(function () {
        if (!$(this).hasClass("current")) {
            $(".signin-type-tab").removeClass("current");
            $(this).addClass("current");
            $("#signin-mobile").toggle();
            $("#signin-wx").toggle();
        }

        //$(this).parent().find(".signin-type-tab").toggleClass("current");
        //$(this).parent().find(".signin-type-tab").toggle();
    });

    $(".btn-bind").click(function () {
        $(".popup-in-txt").toggle();
        $(".signup").toggle();
    })

})()