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

  var sliderbaseC = $('.sliderbaseC');

  sliderbaseC.slick({
    arrows: false,
    infinite: false,
    dots: true
  });

  var TabBarBox = $(".col_leftA .inner");
  var TBBWrap = $(".col_rightA");

  var TabBarBox2 = $(".col_leftB .inner");
  var TBBWrap2 = $(".col_rightB");

  $(window).bind("scroll", function () {
    var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    if (!TBBWrap.offset()) return;
    if (st > TBBWrap.offset().top &&
    st < TBBWrap.offset().top + TBBWrap.height() - TabBarBox.height()) {
      TabBarBox.addClass("boxfixed");
      TabBarBox.removeClass("boxbottom");

    } else if (st < TBBWrap.offset().top) {
      TabBarBox.removeClass("boxfixed");
      TabBarBox.removeClass("boxbottom");
    } else {
      TabBarBox.removeClass("boxfixed");
      TabBarBox.addClass("boxbottom");
    }

    if (!TBBWrap2.offset()) return;
    if (st > TBBWrap2.offset().top &&
      st < TBBWrap2.offset().top + TBBWrap2.height() - TabBarBox2.height()) {
      TabBarBox2.addClass("boxfixed");
      TabBarBox2.removeClass("boxbottom");
    } else if (st < TBBWrap2.offset().top) {
      TabBarBox2.removeClass("boxfixed");
      TabBarBox2.removeClass("boxbottom");
    } else {
      TabBarBox2.removeClass("boxfixed");
      TabBarBox2.addClass("boxbottom");

    }

  });

})();