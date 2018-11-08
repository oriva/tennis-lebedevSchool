function lastHide(e) {
    $('.modal-bg').addClass('hide');
    e.addClass('hide');
    setTimeout(function(){
        $('.modal-bg').removeClass('hide show');
        e.removeClass('hide show');
    },500);
    $('html').removeClass('overfloff');
}
$( window ).on( "load", function () {
    $('.preloader').addClass('fast');
    setTimeout(function () {
        $('.preloader').addClass('hide').removeClass('fast');
    }, 1500);
    setTimeout(function () {
        $('.preloader').hide();
        $('html').removeClass('overfloff');
    }, 2100);
    let trainers = $('.trainers__item');
    for(var i=0; i<trainers.length; i++)
    {
        trainers.eq(i).find('video')[0].play();
        trainers.eq(i).find('video')[0].pause();
        trainers.eq(i).find('video')[0].currentTime = 0;
    }
});
$('form').on('submit', function (e) {
    e.preventDefault();
    var lolka = $(this);
    var form_data = $(this).serialize();
    setTimeout(function () {
        lolka.trigger('reset');
    }, 500, lolka);

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
                $('.modal-callback').removeClass('hide show');
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
            $('.modal-star').removeClass('hide show');
        },500);
    } else {
        $('.modal-bg').addClass('show');
    }
    $('.modal-callback').addClass('show');
    $('html').addClass('overfloff');
});

$('.modal-callback__closed').on('click', function() {
//    lastHide($('.modal-callback'));
    $('.modal-bg').addClass('hide');
    $('.modal-callback').addClass('hide');
    setTimeout(function(){
      $('.modal-callback').removeClass('hide show');
      $('.modal-bg').removeClass('hide show');
    },500);
    $('html').removeClass('overfloff');
});

$('.modal-success__closed').on('click', function () {
    lastHide($('.modal-success'));
});

$('.trainers__item').on({
    click:function () {
        $('.modal-bg').addClass('show');
        $('html').addClass('overfloff');
        $('.modal-star').addClass('show');
        //инфа заряжается
        let offer = '';
        let description = 'Ошибка! Пожалуйста обратитесь к администратору.';
        let starCount = [];
        $('.modal-star__name-trainer').html($(this).find('.trainers__text-name').html());
        switch ($('.modal-star__name-trainer').html()) {
            case 'Аркадий Георгиевич Лебедев':
                starCount = [5, 5, 4];
                description = '<p>Создатель и руководитель "Иркутского центра тенниса" с 1988 года. Президент Федерации тенниса Иркутской области с 1990 г. по 2010 г. Трёхкратный чемпион Иркутской области по теннису в парном разряде. Победитель и призер многих турниров. Тренерский стаж 33 года.</p>';
                break;
            case 'Дмитрий Аркадьевич Лебедев':
                starCount = [5, 4, 5];
                description = '<p>Тренерский стаж 14 лет.</p>' +
                    '<p>Тренер и руководитель "Иркутского центра тенниса".</p>' +
                    '<p>Чемпион Иркутской области по теннису:</p>' +
                    '<p>- в одиночном разряде среди детей;</p>' +
                    '<p>- в парном взрослом разряде;</p>' +
                    '<p>- член сборной Иркутской области в международном командном первенстве, проходившем в КНР в 1998 году.</p>' +
                    '<p>Победитель и призер многих других турниров.</p>';
                break;
            case 'Артем Иринцеев':
                starCount = [5, 4, 4];
                description = '<p>Инструктор.</p>' +
                    '<p>Играет в теннис 6 лет.</p>' +
                    '<p>Неоднократный призёр областных турниров.</p>' +
                    '<p>Воспитанник «Иркутского Центра Тенниса».</p>';
                break;
            case 'Сергей Закарчевский':
                starCount = [3, 5, 4];
                description = '<p>Инструктор.</p>' +
                    '<p>Играет в теннис 16 лет.</p>' +
                    '<p>Неоднократный победитель и призёр турниров Иркутской области.</p>' +
                    '<p>Неоднократный призер открытых первенств Узбекистана среди юниоров.</p>' +
                    '<p>Воспитанник «Иркутского Центра Тенниса».</p>';
                break;
            case 'Вячеслав Ушаков':
                starCount = [5, 3, 4];
                description = '<p>Инструктор.</p>' +
                    '<p>Играет в теннис 12 лет.</p>' +
                    '<p>Неоднократный победитель и призёр турниров Иркутской области.</p>' +
                    '<p>Воспитанник и действующий чемпион «Иркутского Центра Тенниса».</p>';
                break;
        }
        // $('.modal-star h3').html(offer);
        $('.modal-star__gogo-text').html(description);
        $('.modal-star__pic-trainer').attr('src', $(this).data('photo'));
        let allStars = $('.modal-star__stars');
        allStars.toArray().forEach(function (x, number) {
            allStars.eq(number).find('img').toArray().forEach(function (value, index) {
                if (starCount[number] > index)
                    allStars.eq(number).find('img').eq(index).prop('src', 'img/train-offer/star-yellow.svg');
                else
                    allStars.eq(number).find('img').eq(index).prop('src', 'img/train-offer/star-grey.svg');
            });
        });
    },
    mouseenter: function() {
        $(this).find('video')[0].play();
    }, mouseleave: function () {
        let vidosik = $(this).find('video')[0];
        vidosik.pause();
        vidosik.currentTime = 0;
    }
});
$('.head-offer__svgball').on('click', function (e) {
    e.preventDefault();
    var id = '#main'
        , top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 1000);
});
$('.modal-star__closed').on('click', function(){
    lastHide($('.modal-star'));
});

