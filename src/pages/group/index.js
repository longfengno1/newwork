import "../../js/common2";
import "./index.scss";
import "../../js/slick.min";

(function () {
  var sliderbase = $('.sliderbase');

  var sb=sliderbase.slick({
    infinite: false,
    dots: true
  });
  
  var sliderbaseB = $('.sliderbaseB');

  sliderbaseB.slick({
    arrows: false,
    infinite: true,
    dots: true
  });
  window["initsk"] = function(e){
    setTimeout(function(){
      var me = $(e);
      var sliderbase = $('.sliderbase'+me.attr("rel"));
      if(sliderbase.hasClass("slick-initialized")){
        return;
      }
      sliderbase.slick({
        infinite: false,
        dots: true
      },200);
    })
    
  }
})();