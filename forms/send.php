<?
    $to = 'weelman93@gmail.com';
    $subject = 'Заявка с сайта тенниса!';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body style="padding: 20px; border: 1px solid #000">
                        <img src="https://tennis-irkutsk.ru/img/logo.png" style="display: block; width: 50px; margin: 20px;">
                        <p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Тип заявки:</span> '.$_POST['about-form'].'</p>
                        <p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Имя:</span> '.$_POST['name'].'</p>
                        <p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Телефон:</span> '.$_POST['phone'].'</p>
                        <p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Вопрос:</span> '.$_POST['question'].'</p>
                        <p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Тип занятия:</span> '.$_POST['occupation'].'</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: http://tennis-irkutsk.ru/ <site@tennis-irkutsk.ru>\r\n";
    mail($to, $subject, $message, $headers);
?>