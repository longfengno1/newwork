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
})()
