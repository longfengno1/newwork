import "../../js/common2";
import "./index.scss";

(function () {

    $(".btn-signup").click(function () {
        $(".layerout1").show();
    });
    $(".layer").click(function () {
        return false;
    });
    $(".layer .close").click(function () {
        $(".mark").hide();
    });
})()