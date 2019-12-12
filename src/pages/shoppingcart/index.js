import '../../js/common2';
import './index.scss';

(function () {
    $(".mark").click(function(){
        $(this).hide();
        return false;
    })
    $(".mark .box").click(function(){
       
        return false;
    })
  $(".arrow").click(function(){
      $(".mark").show();
  })
})();