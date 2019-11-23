import '../../js/common2';
import './index.scss';

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
  $('.route-line-more').click((e)=>{
    var $this= $(this)
    console.log($this.parent());
    $this.parent().toggleClass("showmore");
  })
  $('.route-line').each((i,v)=>{
    var $this=$(v)

    if($this.height()>26){
      $this.removeClass('showmore');
    }else{
      $this.find(".route-line-more").hide();
    }
  })
})();
