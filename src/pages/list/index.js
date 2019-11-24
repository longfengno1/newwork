import '../../js/common2';
import './index.scss';
import "../../js/slick.min";

(function () {
  let expand = false;
  let showPlace = false;

  function init() {
    $('#travel_calendar').hide();
    $('#calendar-icon').addClass('icon-arrowup');
    $('#calendar-icon').removeClass('icon-arrowdown');
    $('#select-place-row').hide();
  }

  init();

  $('#show-calendar').click(() => {
    if (expand) {
      $('#travel_calendar').hide();
      $('#calendar-icon').addClass('icon-arrowup');
      $('#calendar-icon').removeClass('icon-arrowdown');
      expand = false;
    } else {
      $('#travel_calendar').show();
      $('#calendar-icon').removeClass('icon-arrowup');
      $('#calendar-icon').addClass('icon-arrowdown');
      expand = true
    }
  })

  $('#select-place').click(() => {
    if (showPlace) {
      $('#select-place-row').hide();
    } else {
      $('#select-place-row').show();
    }
    showPlace = !showPlace;
  })
  $('.route-line-more').click(function(e){
    var $this= $(this);
    var $em = $this.find("em")
    $this.parent().toggleClass("showmore");
    if($em.text()=="更多"){
      $em.html("隐藏")
    }else{
      $em.html("更多")
    }
  })
  $('.route-line').each(function(i,v){
    var $this=$(v)

    if($this.height()>26){
      $this.removeClass('showmore');
    }else{
      $this.removeClass('showmore');
      $this.find(".route-line-more").hide();
    }
  })
  $('.date-list-item-more').click(function(e){
    var $this= $(this);
    var $em = $this.find("em")
    $this.parent().toggleClass("showmore");
    if($em.text()=="更多"){
      $em.html("隐藏");
      $this.find(".icon-arrowdown").addClass("icon-arrowup")
    }else{
      $em.html("更多")
      $this.find(".icon-arrowdown").removeClass("icon-arrowup")
    }
  })
  $('.date-list').each(function(i,v){
    var $this=$(v)
    if($this.height()>28){
      $this.removeClass('showmore');
    }else{
      $this.removeClass('showmore');
      $this.find(".date-list-item-more").hide();
    }
  })
  $(".tags .hot-tag").click(function(){
    var $this=$(this);
    $this.parents(".boat-card").find(".description").show();

  });
  $(".intro").click(function(){
    var $this=$(this);
    $this.parents(".buttons").find(".opener").show();
    
  });
  $(".opener .opener-close").click(function(){
    $(".opener").hide();
  });

  var TabBarBox = $(".left-container");
  var TBBWrap = $(".right-container");
  
  $(window).bind("scroll", function () {
    var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    if (!TBBWrap.offset()) return;
    if (st > TBBWrap.offset().top
    && st < $(".right-container").offset().top+$(".right-container").height()-TabBarBox.height()) {
      TabBarBox.addClass("boxfixed");
      TabBarBox.removeClass("boxbottom");

    }else if(st < TBBWrap.offset().top){
      TabBarBox.removeClass("boxfixed");
      TabBarBox.removeClass("boxbottom");
    }else {
      TabBarBox.removeClass("boxfixed");
      TabBarBox.addClass("boxbottom");
    }

  });
  var slickobj;
  $(".filter-sm .filter-item").click(function(e){
    $(".markop0").show();
    var $this = $(this);
    $(".filter-sm .filter-item").removeClass("current");
    $this.addClass("current");
    $(".filter-sm-opener").hide();
    $(".filter-sm-opener").eq($this.index()).show();
    if($this.index()==1 && !slickobj){
      slickobj=$(".xslider").slick({
        infinite: false,
        arrows:false
    });
    }
  })
  $(".markop0").click(function(){
    $(".filter-sm-opener").hide();
    $(".markop0").hide();
  });
  
})();
