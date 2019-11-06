import '../../js/common';
import './index.scss';

(function () {
  let expand = false;
  function init() {
    $('#travel_calendar').hide();
  }

  init();

  $('#show-calendar').click(() => {
    if (expand) {
      $('#travel_calendar').hide();
      expand = false;
    } else {
      $('#travel_calendar').show();
      expand = true
    }
  })
})();
