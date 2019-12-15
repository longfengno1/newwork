import '../../js/common2';
import './index.scss';

(function () {
  let currnetStep = 4;
  let steps = ['selectDate', 'selectRoom', 'fillInfo', 'checkInfo', 'selectPay', 'orderSuccess'];

  function init() {
    for (let i = 1; i <= 6; i++) {
     
      $(`#step${i}`).click(function(){
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
    var TabBarBox2 = $(".right-container .main");
    var TBBWrap2 = $(".right-container ");

    $(window).bind("scroll", function () {
        var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        //alert(st);
        if (!TBBWrap2.offset()) return;
        if (st > TBBWrap2.offset().top
            && st < $(".right-container").offset().top + $(".right-container").height() - TabBarBox2.height()) {
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
