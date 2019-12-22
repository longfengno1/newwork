import "../../js/common2";
import "./index.scss";
import "../../js/slick.min";

(function () {
  var sliderbase = $('.sliderbase');

  sliderbase.slick({
    infinite: false
  });

  var sliderbaseA = $('.sliderbaseA');

  sliderbaseA.slick({
    arrows: true,
    infinite: false,
    dots: true
  });

})();