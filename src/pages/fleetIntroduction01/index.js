import '../../bootstrap/css/bootstrap.css';
import '../../css/global2.scss';
import "../../js/common";
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
})();
