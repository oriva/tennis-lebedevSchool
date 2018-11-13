<?php
  $whois = $_GET['who'];
  switch ($whois) {
    case 'arkadiy':
      $name = 'Аркадий Георгиевич Лебедев';
      $description = '<p>Создатель и руководитель "Иркутского центра тенниса" с 1988 года. Президент Федерации тенниса Иркутской области с 1990 г. по 2010 г. Трёхкратный чемпион Иркутской области по теннису в парном разряде. Победитель и призер многих турниров. Тренерский стаж 33 года.</p>';
      $image = '../video/arkadiy-lebedev-mob.jpg';
      break;
    case 'dmitriy':
      $name = 'Дмитрий Аркадьевич Лебедев';
      $description = '<p>Тренерский стаж 14 лет.</p><p>Тренер и руководитель "Иркутского центра тенниса".</p><p>Чемпион Иркутской области по теннису:</p><p>- в одиночном разряде среди детей;</p><p>- в парном взрослом разряде;</p><p>- член сборной Иркутской области в международном командном первенстве, проходившем в КНР в 1998 году.</p><p>Победитель и призер многих других турниров.</p>';
      $image = '../video/dmitriy-lebedev-mob.jpg';
      break;
    case 'artem':
      $name = 'Артем Иринцеев';
      $description = '<p>Инструктор.</p><p>Играет в теннис 6 лет.</p><p>Неоднократный призёр областных турниров.</p><p>Воспитанник «Иркутского Центра Тенниса».</p>';
      $image = '../video/unknown_person-mob.jpg';
      break;
    case 'sergey':
      $name = 'Сергей Закарчевский';
      $description = '<p>Инструктор.</p><p>Играет в теннис 16 лет.</p><p>Неоднократный победитель и призёр турниров Иркутской области.</p><p>Неоднократный призер открытых первенств Узбекистана среди юниоров.</p><p>Воспитанник «Иркутского Центра Тенниса».</p>';
      $image = '../video/unknown_person1-mob.jpg';
      break;
    case 'slava':
      $name = 'Вячеслав Ушаков';
      $description = '<p>Инструктор.</p><p>Играет в теннис 12 лет.</p><p>Неоднократный победитель и призёр турниров Иркутской области.</p><p>Воспитанник и действующий чемпион «Иркутского Центра Тенниса».</p>';
      $image = '../video/unknown_person1-mob.jpg';
      break;
  }
    
?>
<!doctype html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="author" content="Oriva">
  <meta property="og:locale" content="ru_RU">
  <meta name=«title» content="Теннис">
  <meta name="description" content="">
  <title>Теннис</title>
  <!--  icon  -->
  <link rel="shortcut icon" href="/favicon.ico?">
  <link rel="apple-touch-icon-precomposed" href="/favicon.png?">
  <!--  css   -->
  <link rel="stylesheet" href="/css/bootstrap-grid.min.css">
  <link rel="stylesheet" href="/css/foundation.css">
  <link rel="stylesheet" href="/css/input.css">
  <link rel="stylesheet" href="/css/keyframes.css?v=1.3">
  <link rel="stylesheet" href="/css/index.css?v=1.3">
  <link rel="stylesheet" href="/css/media.css?v=1.3">
  <!-- Yandex.Metrika counter -->
  <script type="text/javascript">
    (function (d, w, c) {
      (w[c] = w[c] || []).push(function () {
        try {
          w.yaCounter51033320 = new Ya.Metrika2({
            id: 51033320
            , clickmap: true
            , trackLinks: true
            , accurateTrackBounce: true
            , webvisor: true
          });
        }
        catch (e) {}
      });
      var n = d.getElementsByTagName("script")[0]
        , s = d.createElement("script")
        , f = function () {
          n.parentNode.insertBefore(s, n);
        };
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://mc.yandex.ru/metrika/tag.js";
      if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
      }
      else {
        f();
      }
    })(document, window, "yandex_metrika_callbacks2");
  </script>
  <noscript>
    <div><img src="https://mc.yandex.ru/watch/51033320" style="position:absolute; left:-9999px;" alt="" /></div>
  </noscript>
  <!-- /Yandex.Metrika counter -->
</head>

<body>

<div class="modal-bg"></div>
  <div class="modal-callback">
    <div class="container align-self-center">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-8 col-11">
          <form action="" class="modal-callback__form">
            <div class="half-form__inform-first"> <img src="img/icons/ball.svg" alt="" class="half-form__half-ball"> <img src="img/icons/closed.svg" alt="" class="modal-callback__closed"> <span class="h2">заполните форму и мы свяжемся с вами в ближайшее время!</span> </div>
            <div class="half-form__inform-second">
              <div class="row justify-content-center">
                <div class="col-8">
                  <div class="group">
                    <input type="text" class="name" name="name" autocomplete="off" placeholder="Имя*" required> <span class="bar"></span>
                    <label>Имя*</label>
                  </div>
                </div>
                <div class="col-8">
                  <div class="group">
                    <input type="text" class="phone" name="phone" autocomplete="off" placeholder="Телефон*" required> <span class="bar"></span>
                    <label>Телефон*</label>
                  </div>
                </div>
                <div class="col-8">
                  <select name="occupation" class="select-cokes" title="Выберите тип занятий">
                    <option value="Не выбрал" hidden>Выберите тип занятий</option>
                    <option value="Групповой">Групповые</option>
                    <option value="Индивидуальный">Индивидуальные</option>
                  </select>
                </div>
                <div class="col-auto">
                  <div class="political">
                    <input type="checkbox" id="modal-callback__box" checked required>
                    <label for="modal-callback__box">Я принимаю <a href="/legal/">условия политики<br>конфиденциальности</a></label>
                  </div>
                </div>
                <div class="col-7">
                  <button class="button-form d-block mx-a">ХОЧУ В ТЕННИС</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-success">
      <div class="container align-self-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-8 col-11">
            <div class="modal-success__in-love">
              <div class="modal-success__circler"> <img src="img/icons/ball.svg" alt="" class="modal-success__ball"> <img src="img/icons/closed.svg" alt="" class="modal-success__closed"> <span class="h2">Спасибо!<br>Ваша заявка принята!</span> </div>
              <div class="modal-success__subcircler"> <span class="h2 remote-blue">Теннис уже близко ;)</span> </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="page-form">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-4 col-12">
          <div class="modal-star__block">
            <div class="modal-star__closed modal-star__closed_mob">
              <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.792893 1.70711L32.7929 33.7071L34.2071 32.2929L2.20711 0.292893L0.792893 1.70711ZM32.7929 0.292893L0.792893 32.2929L2.20711 33.7071L34.2071 1.70711L32.7929 0.292893Z" fill="#000"></path>
              </svg>
            </div> <img src="<?php echo $image ?>" alt="" class="modal-star__pic-trainer"> <span class="modal-star__name-trainer h2 remote-blue text-center"><?php echo $name ?></span> <span class="modal-star__name-parameters">Скорость</span>
            <div class="modal-star__stars"> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-grey.svg" alt=""> </div> <span class="modal-star__name-parameters">Выносливость</span>
            <div class="modal-star__stars"> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-grey.svg" alt=""> <img src="img/train-offer/star-grey.svg" alt=""> <img src="img/train-offer/star-grey.svg" alt=""> </div> <span class="modal-star__name-parameters">Чувство юмора</span>
            <div class="modal-star__stars"> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-yellow.svg" alt=""> <img src="img/train-offer/star-grey.svg" alt=""> <img src="img/train-offer/star-grey.svg" alt=""> </div>
            <button class="button-form show-call">ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ</button>
          </div>
        </div>
        <div class="col-12">
          <div class="modal-star__block">
            <div class="modal-star__closed modal-star__closed_desc">
              <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.792893 1.70711L32.7929 33.7071L34.2071 32.2929L2.20711 0.292893L0.792893 1.70711ZM32.7929 0.292893L0.792893 32.2929L2.20711 33.7071L34.2071 1.70711L32.7929 0.292893Z" fill="#000"></path>
              </svg>
            </div>
            <h3 class="h2 remote-blue">Обо мне</h3>
            <div class="modal-star__gogo-text">
              <?php echo $description ?>
            </div> 
<!--            <img src="img/train-offer/bg-modal.jpg" alt="" class="modal-star__image"> -->
            </div>
        </div>
      </div>
    </div>
  </div>
  <script src="../js/jquery-3.3.1.min.js"></script>
  <script src="js/index.js"></script>
  <script>
  $('.modal-star__closed_mob').on('click', function(){
    window.close();
  });

  </script>
</body>
</html>