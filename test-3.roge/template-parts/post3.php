<?php

$city  = $_POST["city"];
$phone = $_POST["phone"];
$mail  = $_POST["mail"];
$res   = array(
    'err_c' => 0,
    'err_p' => 0,
    'err_m' => 0,
);

// Перевірка на порожні значення
if (!empty($city) && !empty($phone) && !empty($mail)) {

//city має бути без пробілів, цифр і спец символів
    if (!preg_match('/^[a-zA-Zа-яА-Я]+$/', $city)) {
        $res += array('city' => 'В имени запрещённые символы');
        $repl = array('err_c' => 1);
        $res  = array_replace($res, $repl);
    } else {
        $res += array('city' => $city);
    }

//phone має бути без пробілів і спец символів
    if (!preg_match('/^([0-9])+$/', $phone)) {
        $res += array('phone' => 'В имени запрещённые символы');
        $repl = array('err_p' => 1);
        $res  = array_replace($res, $repl);
    } else {
        $res += array('phone' => $phone);
    }

//mail проходить валідацію
    if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        $res += array('mail' => $mail);
    } else {
        $res += array('mail' => 'В имени запрещённые символы');
        $repl = array('err_m' => 1);
        $res  = array_replace($res, $repl);

    }

}
// Перенос массиву у JSON
echo json_encode($res);
