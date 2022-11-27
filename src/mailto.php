<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$to      = 'tatia.kom@yandex.ru';
$subject = 'Заявка с сайта InstaHelp';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Комментарий: '.$_POST['comment'].'</p>                        
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";

mail($to, $subject, $message, $headers);

?>