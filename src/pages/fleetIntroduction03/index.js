import "../../js/common2";
import "./index.scss";

(function () {
    $(".topbanner_plane .ship .btn-icon").click(function () {
        var isArtive = $(this).hasClass("artive");
        $(".topbanner_plane .ship .btn-icon").removeClass("artive");
        if (!isArtive) {
            $(this).addClass("artive");
        }
        return false;
    })
    $(".topbanner_plane").click(function () {
        $(".topbanner_plane .ship .btn-icon").removeClass("artive");
    })
})();

