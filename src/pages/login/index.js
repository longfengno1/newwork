import "../../js/common";
import "./index.scss";

(function () {
  function init() {
    $('#signin-tab-mobile').addClass('current');
    $('#signin-tab-wx').removeClass('current');
    $('#signin-mobile').show();
    $('#signin-wx').hide();
  }

  init();

  $('#signin-tab-mobile').click(() => {
    $('#signin-tab-mobile').addClass('current');
    $('#signin-tab-wx').removeClass('current');
    $('#signin-mobile').show();
    $('#signin-wx').hide();
  })
  $('#signin-tab-wx').click(() => {
    $('#signin-tab-wx').addClass('current');
    $('#signin-tab-mobile').removeClass('current');
    $('#signin-mobile').hide();
    $('#signin-wx').show();
  })
})()
