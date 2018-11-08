ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [52.264312, 104.312261],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([52.270986, 104.286388], {
            hintContent: 'Весна - ул. Кожова, 10',
            balloonContent: 'Весна - ул. Кожова, 10'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/icons/mapMarket.png',
            // Размеры метки.
            iconImageSize: [77, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [-5, -38]
        }),

        myPlacemarkTwo = new ymaps.Placemark([52.265819, 104.231783], {
            hintContent: '',
            balloonContent: 'Форвард - ул. Сергеева, 3А'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/icons/mapMarket.png',
            // Размеры метки.
            iconImageSize: [77, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [-24, -24]
        }),

        myPlacemarkThree = new ymaps.Placemark([52.285252, 104.272220], {
            hintContent: '',
            balloonContent: 'Чемпион - ул. 5-ой Армии, 29'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/icons/mapMarket.png',
            // Размеры метки.
            iconImageSize: [77, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [-24, -24]
        }),

        myPlacemarkFour = new ymaps.Placemark([52.250333, 104.206585], {
            hintContent: '',
            balloonContent: 'Теплоцентральная улица, 1'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/icons/mapMarket.png',
            // Размеры метки.
            iconImageSize: [77, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [-24, -24]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkTwo)
        .add(myPlacemarkThree)
        .add(myPlacemarkFour);
});
