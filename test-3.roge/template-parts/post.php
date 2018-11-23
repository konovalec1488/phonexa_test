<?php
//echo '<b class="t-green">Это ответ сервера</b>';

$name    = $_POST["name"];
$surname = $_POST["surname"];
$age     = $_POST["age"];
$dr_lic  = $_POST["license"];
$result  = array(
    'err_n' => 0,
    'err_s' => 0,
    'err_a' => 0,
    'err_l' => 0,
);

// Перевірка на порожні значення
if (!empty($name) && !empty($surname) && !empty($age) && !empty($dr_lic)) {

//name має бути без пробілів, цифр і спец символів
    if (!preg_match('/^[a-zA-Zа-яА-Я]+$/', $name)) {
        $result += array('name' => 'В имени запрещённые символы');
        $replacements = array('err_n' => 1);
        $result       = array_replace($result, $replacements);
    } else {
        $result += array('name' => $name);
    }

//surname має бути без пробілів, цифр і спец символів
    if (!preg_match('/^[a-zA-Zа-яА-Я]+$/', $surname)) {
        $result += array('surname' => 'В имени запрещённые символы');
        $replacements = array('err_s' => 1);
        $result       = array_replace($result, $replacements);
    } else {
        $result += array('surname' => $surname);
    }

//100>age>18, без пробілів і спец символів
    /*if (!preg_match("/^([0-9])+$/", $age)) {
        $result += array('age' => 'В возрасте запрещённые символы');
        $replacements = array('err_a' => 1);
        $result       = array_replace($result, $replacements);
    } else {
        if ($age <= 18 || $age >= 100) {
            $result += array('age' => 'Возраст должен бить от 18 до 100');
            $replacements = array('err_a' => 1);
            $result       = array_replace($result, $replacements);
        } else {
            $result += array('age' => $age);
        }
    }*/
    $result += array('age' => $age);

//license, без пробілів і спец символів
    if (!preg_match("/^([0-9-a-zA-Zа-яА-Я])+$/", $dr_lic)) {
        $result += array('license' => 'В лицензии запрещённые символы');
        $replacements = array('err_l' => 1);
        $result       = array_replace($result, $replacements);

    } else {
        $result += array('license' => $dr_lic);
    }

}
// Перенос массиву у JSON
echo json_encode($result);
