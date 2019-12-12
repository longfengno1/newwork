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

})();
