import '../../js/common2';
import './index.scss';
import "../../js/slick.min";

(function () {
  var expand = false;
  var showPlace = false;

  function init() {
    $('#travel_calendar').hide();
      $('#calendar-icon').addClass('icon-arrowdown');
      $('#calendar-icon').removeClass('icon-arrowup');
    $('#select-place-row').hide();
  }

  init();

  $('#show-calendar').click(function(){
    if (expand) {
      $('#travel_calendar').hide();
        $('#calendar-icon').addClass('icon-arrowdown');
        $('#calendar-icon').removeClass('icon-arrowup');
      expand = false;
    } else {
      $('#travel_calendar').show();
        $('#calendar-icon').removeClass('icon-arrowdown');
        $('#calendar-icon').addClass('icon-arrowup');
      expand = true;
    }
  })

    $(".a_available").mouseover(function () {
        $(".a_available").removeClass("hover");
        $(this).addClass("hover");
        $(this).parent().find(".t2_td_schedule_more").show();
    })
    $(".a_available").mouseleave(function () {
        $(this).removeClass("hover");
        $(this).parent().find(".t2_td_schedule_more").hide();

    })

    $(".t2_td_schedule_more").mouseover(function () {
        $(this).show();
    })
    $(".t2_td_schedule_more").mouseleave(function () {
        $(this).hide();

    })


  $('#select-place').click(function(){
    if (showPlace) {
      $('#select-place-row').hide();
    } else {
      $('#select-place-row').show();
    }
    showPlace = !showPlace;
  })
  $('.route-line-more').click(function(e){
    var $this= $(this);
    var $em = $this.find("em");
    $this.parent().toggleClass("showmore");
    if($em.text()=="更多"){
      $em.html("隐藏");
    }else{
      $em.html("更多");
    }
  })
  $('.route-line').each(function(i,v){
    var $this=$(v);

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
    var $this=$(v);
    if($this.height()>28){
      $this.removeClass('showmore');
    }else{
      $this.removeClass('showmore');
      $this.find(".date-list-item-more").hide();
    }
  })
    $(".tags .hot-tag").mouseover(function () {
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

    $(".city_item_txt").click(function () {
        $(".city_item_txt").removeClass("current");
        $(this).addClass("current");
    });

    $(".price-desc-txt").click(function () {
        $(".fullmark").show();
    });
    $(".price-desc-opener-close").click(function () {
        $(this).parent().parent().parent().hide();
    });
    $(".price-desc-panel-close").click(function () {
        $(this).parent().hide();
    });
    $(".bottom-btn-search").click(function () {
        $(".queryfitler").show();
        $(".price-desc").hide();
        $(".markop0").hide();
        $(this).parent().parent().hide();
    });
    $(".item").click(function () {
        //$(this).parent().find(".item").re
        if ($(this).parent().hasClass("inner-list")) {
            $(this).toggleClass("current");
        }
    });

    $(".sortitem").click(function () {
        $(".sortitem").removeClass("current");
        $(this).addClass("current");
    });

    $(".conti-close").click(function () {
        $(this).parent().hide();
    });

})();
