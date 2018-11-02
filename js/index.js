$('form').on('submit', function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    setTimeout(function () {
        $(this).trigger('reset');
    }, 500);
    $.ajax({
        type: "POST", //Метод отправки
        url: "/forms/send.php", //путь до php фаила отправителя
        data: form_data
        , success: function () {
            var modalCb = $('.modal-callback');
            if(modalCb.hasClass('show')) {
                modalCb.addClass('hide');
            } else {
                $('.modal-bg').addClass('show');
                $('html').addClass('overfloff');
            }
            $('.modal-success').addClass('show');
            setTimeout(function(){
                $('.modal-callback').removeClass('hide').removeClass('show');
            },500);
            setTimeout(function(){
                $('.modal-bg').addClass('hide');
                $('.modal-success').addClass('hide');
                setTimeout(function(){
                    $('.modal-bg').removeClass('hide').removeClass('show');
                    $('.modal-success').removeClass('hide').removeClass('show');
                },500);
                $('html').removeClass('overfloff');
            }, 2000);
        }
        , error: function () {
            console.log('Ошибка! Обратитесь к администратору');
        }});
});

$('.button-mod').on('click', function() {
    $('.modal-bg').addClass('show');
    $('.modal-callback').addClass('show');
    $('html').addClass('overfloff');
});

$('.modal-callback__closed').on('click', function() {
    $('.modal-bg').addClass('hide');
    $('.modal-callback').addClass('hide');
    setTimeout(function(){
        $('.modal-bg').removeClass('hide').removeClass('show');
        $('.modal-callback').removeClass('hide').removeClass('show');
    },500);
    $('html').removeClass('overfloff');
});

$('.modal-success__closed').on('click', function () {
    $('.modal-bg').addClass('hide');
    $('.modal-success').addClass('hide');
    setTimeout(function(){
        $('.modal-bg').removeClass('hide').removeClass('show');
        $('.modal-success').removeClass('hide').removeClass('show');
    },500);
    $('html').removeClass('overfloff');
});