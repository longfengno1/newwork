import '../../js/common2';
import './index.scss';

(function () {
    function init() {
        $('#user-order').addClass('active');
        $('#modify-order-layer').hide();
        $('#sm-modify-order-layer').hide();
        $('#alert').hide();
    }
    
    init();

    $('#modify-order').click(function () {
        $('#modify-order-layer').show();
    })
    $('#modify-cancel').click(() => {
        setTimeout(() => {
            $('#modify-order-layer').hide();
        })
    });
    $('#modify-ensure').click(() => {
        setTimeout(() => {
            $('#modify-order-layer').hide();
        })
    })

    $('#sm-modify-order').click(()=> {
        $('#sm-modify-order-layer').show();
    })

    $('#mask').click(function () {
        setTimeout(() => {
            $('#sm-modify-order-layer').hide();
        })
    })

    $('#sm-modify-ensure').click(function () {
        setTimeout(() => {
            $('.modify-btns').hide();
            $('.layer').hide();
            $('#alert').show();
        })
    });
    $('#submit-succes').click(function () {
        setTimeout(() => {
            $('#alert').hide();
            $('#sm-modify-order-layer').hide();
        })
    })
})();
