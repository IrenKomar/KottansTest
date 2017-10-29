$(document).ready(function () {

    $('.js-pin-input').prop("disabled", true);

    $('.js-number').click(function () {
        $('.js-pin-input').val($('.js-pin-input').val() + $(this).val());

        if ($('.js-shake').prop('checked') == true){
            var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            var i = 8;
            $('.js-number').each(function () {
                var rand = randomInteger(0, i);
                $(this).val(arr[rand]);
                arr.splice(rand, 1);
                i--;
            });
        }
    });

    $('.js-clear').click(function () {
        $('.js-pin-input').val("");
    });

    $('.js-enter').click(function () {
        alert($('.js-pin-input').val());
    });

    $('.js-cancel').click(function () {
        var inputVal = $('.js-pin-input').val();
        $('.js-pin-input').val(inputVal.substr(0, inputVal.length - 1));
    });

    $('.js-show-hide').click(function ()     {
        var new_input = document.createElement('input');
        with(new_input) {
            className = $('.js-pin-input').attr('class');
            value = $('.js-pin-input').val();
            disabled = true;
            placeholder = 'Enter PIN-code';
        }
        if ($(this).prop('checked') != true){
            with(new_input) {
                type      = 'password';
            }
            $('.js-pin-input').replaceWith(new_input);
        }
        else {
            with(new_input) {
                type      = 'text';
            }
            $('.js-pin-input').replaceWith(new_input);
        }

    });
});

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
