import '../../js/common2';
import './index.scss';

(function () {
    function init() {
        $('#user-card').addClass('active');
        $('#my-card-container').show();
        $('#my-code-container').hide();
        $('#my-card').addClass('active');
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


    init();
})();
