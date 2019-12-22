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
    $(".arrow").click(function () {

        var tar = $(this).attr("target");
        $(".mark." + tar).show();
    });

    $(".selectUser").click(function () {
        $("#select-user").toggle(); 
    });
    $(".selectRoom").click(function () {
        $("#select-room").toggle();
    });


    
})();