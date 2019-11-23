import '../../js/common2';
import './index.scss';

(function () {
  let currnetStep = 2;
  let steps = ['selectDate', 'selectRoom', 'fillInfo', 'checkInfo', 'selectPay', 'orderSuccess'];

  function init() {
    for (let i = 1; i <= 6; i++) {

      $(`#step${i}`).click(function () {
        selectCurrent(i);
      })
    }
    setStepStatus();
  }

  function selectCurrent(index) {
    currnetStep = index;
    setStepStatus();
  }

  function setStepStatus() {
    for (let i = 1; i <= 6; i++) {
      if (currnetStep > i) {
        $(`#step${i}`).removeClass('active');
        $(`#step${i}`).addClass('selected');
        $(`#${steps[i - 1]}`).hide();
      } else if (currnetStep === i) {
        $(`#step${i}`).removeClass('selected');
        $(`#step${i}`).addClass('active');
        $(`#${steps[i - 1]}`).show();
      } else {
        $(`#step${i}`).removeClass('selected');
        $(`#step${i}`).removeClass('active');
        $(`#${steps[i - 1]}`).hide();
      }
    }
  }

  init();

  var TabBarBox = $(".select-container");
  var TBBWrap = $(".rooms");
  
  var TabBarBox2 = $(".right-container .main");
  var TBBWrap2 = $(".right-container ");
  
  $(window).bind("scroll", function () {
    var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    if (!TBBWrap.offset()) return;
    if (st > TBBWrap.offset().top-TabBarBox.height()-20
    && st < $(".left-container").offset().top+$(".left-container").height()-TabBarBox.height()) {
      TabBarBox.addClass("boxfixed");
      TabBarBox.removeClass("boxbottom");

    }else if(st < TBBWrap.offset().top){
      TabBarBox.removeClass("boxfixed");
      TabBarBox.removeClass("boxbottom");
    }else {
      TabBarBox.removeClass("boxfixed");
      TabBarBox.addClass("boxbottom");
    }

    if (!TBBWrap2.offset()) return;
    if (st > TBBWrap2.offset().top 
    && st < $(".right-container").offset().top+$(".right-container").height()-TabBarBox2.height()) {
      TabBarBox2.addClass("boxfixed");
      TabBarBox2.removeClass("boxbottom");
    } else if(st < TBBWrap2.offset().top){
      TabBarBox2.removeClass("boxfixed");
      TabBarBox2.removeClass("boxbottom");
    }else {
      TabBarBox2.removeClass("boxfixed");
      TabBarBox2.addClass("boxbottom");

    }

  });
    $(".next").click(function () { $(".login").show(); });

  $(".detail").click(function(){
    $(".mark").show();
  });
    $(".mark").click(function () {
        $(".mark").hide();
    });
    $(".layer").click(function () {
        return false;
    });
    $(".layer .close").click(function () {
        $(".mark").hide();
    });
    $(".room-all").click(function () {
        $(".room-box-show").toggle();
        return false;
    });
  $(".room-row-item,.people-row-item").click(function () {
    $(".people-row-item").removeClass("active");        
    $(this).addClass("active");
  });
    $(".room-row-item").click(function () {
        $(".room-row-item").removeClass("active");
        $(this).addClass("active");
    });
})();