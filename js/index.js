function lastHide(e) {
    $('.modal-bg').addClass('hide');
    e.addClass('hide');
    setTimeout(function(){
        $('.modal-bg').removeClass('hide').removeClass('show');
        e.removeClass('hide').removeClass('show');
    },500);
    $('html').removeClass('overfloff');
}
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
                lastHide($('.modal-success'));
            }, 2000);
        }
        , error: function () {
            console.log('Ошибка! Обратитесь к администратору');
        }});
});

$('.show-call').on('click', function() {
    if ($('.modal-star').hasClass('show')){
        $('.modal-star').addClass('hide');
        setTimeout(function(){
            $('.modal-star').removeClass('hide').removeClass('show');
        },500);
    } else {
        $('.modal-bg').addClass('show');
    }
    $('.modal-callback').addClass('show');
    $('html').addClass('overfloff');
});

$('.modal-callback__closed').on('click', function() {
    lastHide($('.modal-callback'));
});

$('.modal-success__closed').on('click', function () {
    lastHide($('.modal-success'));
});

$('.trainers__item').on('click', function () {
    $('.modal-bg').addClass('show');
    $('html').addClass('overfloff');
    $('.modal-star').addClass('show');
    //инфа заряжается
    let offer = '';
    let description = 'Ошибка! Пожалуйста обратитесь к администратору.';
    let starCount = [];
    $('.modal-star__name-trainer').html($(this).find('.trainers__text-name').html());
    switch ($('.modal-star__name-trainer').html()) {
        case 'Лебедев Аркадий Георгиевич':
            starCount = [5,3,4];
            offer = 'Создатель и руководитель "Иркутского центра тенниса" с 1988 года.';
            description = '<p>Создатель и руководитель "Иркутского центра тенниса" с 1988 года.</p>' +
                '<p>Президент Федерации тенниса Иркутской области с 1990 г. по 2010 г.</p>' +
                '<p>Трёхкратный чемпион Иркутской области по теннису в парном разряде.</p>' +
                '<p>Победитель и призер многих турниров.</p>';
            break;
        case 'Лебедев Дмитрий Аркадьевич':
            starCount = [2,3,4];
            offer = 'Тренер и руководитель "Иркутского центра тенниса".';
            description = '<p>Тренер и руководитель "Иркутского центра тенниса".</p>' +
                '<p>Чемпион Иркутской области по теннису:</p>' +
                '<p>- в одиночном разряде среди детей;</p>' +
                '<p>- в парном взрослом разряде;</p>' +
                '<p>- член сборной Иркутской области в международном командном первенстве, проходившем в КНР в 1998 году.</p>' +
                '<p>Победитель и призер многих других турниров.</p>';
            break;
        case 'Иринцеев Артем':
            starCount = [5,5,4];
            offer = 'Инструктор.';
            description = '<p>Инструктор.</p>' +
                '<p>Играет в теннис 6 лет.</p>' +
                '<p>Неоднократный призёр областных турниров.</p>' +
                '<p>Воспитанник «Иркутского Центра Тенниса».</p>';
            break;
        case 'Закарчевский Сергей':
            starCount = [3,5,4];
            offer = 'Инструктор.';
            description = '<p>Инструктор.</p>' +
                '<p>Играет в теннис 16 лет.</p>' +
                '<p>Неоднократный победитель и призёр турниров Иркутской области.</p>' +
                '<p>Неоднократный призер открытых первенств Узбекистана среди юниоров.</p>' +
                '<p>Воспитанник «Иркутского Центра Тенниса».</p>';
            break;
        case 'Ушаков Вячеслав':
            starCount = [5,3,4];
            offer = 'Инструктор.';
            description = '<p>Играет в теннис 12 лет.</p>' +
                '<p>Неоднократный победитель и призёр турниров Иркутской области.</p>' +
                '<p>Воспитанник и действующий чемпион «Иркутского Центра Тенниса».</p>';
            break;
    }
    $('.modal-star h3').html(offer);
    $('.modal-star__gogo-text').html(description);

    let allStars = $('.modal-star__stars');
    allStars.toArray().forEach(function(x, number){
        allStars.eq(number).find('img').toArray().forEach(function (value, index) {
            if(starCount[number]>index)
                allStars.eq(number).find('img').eq(index).prop('src', 'img/train-offer/star-yellow.svg');
            else
                allStars.eq(number).find('img').eq(index).prop('src', 'img/train-offer/star-grey.svg');
        });
    });

});
