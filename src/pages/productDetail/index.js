import '../../js/common2';
import './index.scss';

(function () {
    function init() {
        $('#user-card').addClass('active');
        $('#my-card-container').show();
        $('#my-code-container').hide();
        $('#my-card').addClass('active');
        $('#select-layer').hide();
    }

    $('#my-card').click(function () {
        $('#my-card').addClass('active');
        $('#my-code').removeClass('active');
        $('#my-card-container').show();
        $('#my-code-container').hide();
    });

    $('#my-code').click(function () {
        $('#my-card').removeClass('active');
        $('#my-code').addClass('active');
        $('#my-card-container').hide();
        $('#my-code-container').show();
    });

    $('#add-btn').click(function(){
        $('#select-layer').show();
    })

    $('#layer-ensure').click(function(){
        $('#select-layer').hide();
    })

    $('#layer-cancel').click(function(){
        $('#select-layer').hide();
    })

    init();

    $(".tab_item").click(function () {

        $(".tab_item").removeClass("current");
        $(this).addClass("current");

        var id = $(this).attr("target");
        $(this).parent().parent().find(".content").hide();
        var id = $(this).attr("target");
        $("#" + id).show();

    });


})();
