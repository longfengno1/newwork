import "../../js/common2";
import "./index.scss";

(function () {
  $(".topbanner_plane .ship .btn-icon").click(function () {
    $(".topbanner_plane .ship .btn-icon").removeClass("artive");
    $(this).addClass("artive");
    return false;
  })
  $(".topbanner_plane").click(function () {
    $(".topbanner_plane .ship .btn-icon").removeClass("artive");
  })
    $(".detail").click(function () {
       // $(".layerout1").show();
    });
    $(".layer").click(function () {
        return false;
    });
    $(".layer .close").click(function () {
        $(".mark").hide();
    });
})()
