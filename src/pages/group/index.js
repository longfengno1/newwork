import "../../js/common2";
import "./index.scss";
import "../../js/slick.min";

(function () {
  var sliderbase = $('.sliderbase');

  sliderbase.slick({
    infinite: false
  });

  var sliderbaseB = $('.sliderbaseB');

  sliderbaseB.slick({
    arrows: false,
    infinite: true,
    dots: true
  });

})();