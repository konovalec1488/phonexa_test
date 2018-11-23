<?php

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
        $result += array('name' => 'Numbers and special symbols are not allowed');
        $replacements = array('err_n' => 1);
        $result       = array_replace($result, $replacements);
    } else {
        $result += array('name' => $name);
    }

//surname має бути без пробілів, цифр і спец символів
    if (!preg_match('/^[a-zA-Zа-яА-Я]+$/', $surname)) {
        $result += array('surname' => 'Numbers and special symbols are not allowed');
        $replacements = array('err_s' => 1);
        $result       = array_replace($result, $replacements);
    } else {
        $result += array('surname' => $surname);
    }

    $result += array('age' => $age);

//license, без пробілів і спец символів
    if (!preg_match("/^([0-9-a-zA-Zа-яА-Я])+$/", $dr_lic)) {
        $result += array('license' => 'Special symbols are not allowed');
        $replacements = array('err_l' => 1);
        $result       = array_replace($result, $replacements);

    } else {
        $result += array('license' => $dr_lic);
    }

}

// Перенос массиву у JSON
    echo json_encode($result);