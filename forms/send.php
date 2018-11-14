<?
$to = '1formarketing@gmail.com,';
$to. = 'lebedev16@list.ru';
$subject = 'Заявка с сайта тенниса!';
$name=''; $phone=''; $question=''; $occupation='';
if (!empty($_POST["name"])) {
    $name = '<p style = "font-size: 1.2em; color: #333" ><span style = "font-weight: 600" > Имя:</span > '.$_POST['name'].' </p>';
};
if(!empty($_POST["phone"])) {
    $phone = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Телефон:</span> ' . $_POST['phone'] . '</p>';
};
if(!empty($_POST["question"])) {
    $question = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Вопрос:</span> ' . $_POST['question'] . '</p>';
}
if(!empty($_POST["occupation"])) {
    $occupation = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Тип занятия:</span> ' . $_POST['occupation'] . '</p>';
}
$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body style="padding: 20px; border: 1px solid #000">
                        <img src="http://tennis-irkutsk.ru/img/logo.png" style="display: block; width: 50px; margin: 20px;">
                        <p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Тип заявки:</span> ' . $_POST['about-form'] . '</p>'
                        . $name . $phone . $question . $occupation .
                    '</body>
                </html>';
echo $message;
$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: https://tennis-irkutsk.ru/ <site@tennis-irkutsk.ru>\r\n";
mail($to, $subject, $message, $headers);
?>