var us_name, us_surn, us_age, us_lic, us_mark, us_model, us_car_year;
//валідація форми
$('#post_form3').submit(function() {
    $.post('../template-parts/post3.php', $("#post_form3").serialize(), function(response) {
        res = $.parseJSON(response);
        //очистка форм від помилок
        clearForm2();
        //перевірка на помилку у формі
        if (res.err_c != 0) {
            $('.res_city').text(res.city);
            $('.res_city').css('color', '#dc3545');
            $('[name="city"]').addClass("is-invalid");
        } else if (res.err_p != 0) {
            $('[name="city"]').addClass("is-valid");
            $('.res_phone').text(res.phone);
            $('.res_phone').css('color', '#dc3545');
            $('[name="phone"]').addClass("is-invalid");
        } else if (res.err_m != 0) {
            $('[name="city"]').addClass("is-valid");
            $('[name="phone"]').addClass("is-valid");
            $('.res_mail').text(res.mail);
            $('.res_mail').css('color', '#dc3545');
            $('[name="mail"]').addClass("is-invalid");
        } else {
            formValid2();
            $('.task3').hide('slow');
            $('.success_text').text('Thank You for the message');
            $('#post_success').show('slow');
            printRes();
            console.log(res.city);
            console.log(res.phone);
            console.log(res.mail);
        }
    });
    return false;
});

function clearForm2() {
    //city
    $('.res_city').text('Please use only A-Z characters');
    $('.res_city').css('color', '#212529');
    $('[name="city"]').removeClass("is-invalid");
    //phone
    $('.res_phone').text('Please use only 0-9 characters.For example:380123456789');
    $('.res_phone').css('color', '#212529');
    $('[name="phone"]').removeClass("is-invalid");
    //mail
    $('.res_mail').text('For example: examle@gmail.com');
    $('.res_mail').css('color', '#212529');
    $('[name="mail"]').removeClass("is-invalid");
}

function formValid2() {
    $('[name="city"]').addClass("is-valid");
    $('[name="phone"]').addClass("is-valid");
    $('[name="mail"]').addClass("is-valid");
}


function task1Res(res1, res2, res3, res4) {
    us_name = res1; //result.name;
    us_surn = res2; //result.surname;
    us_age = res3; //result.age;
    us_lic = res4; //result.license;
}

function task2Res(res1, res2, res3) {
    us_mark = res1; //mark_res
    us_model = res2; //model_res
    us_car_year = res3; //year_res
}

function printRes() {
    console.log(us_name);
    console.log(us_surn);
    console.log(us_age);
    console.log(us_lic);
    console.log('=======');
    console.log(us_mark);
    console.log(us_model);
    console.log(us_car_year);
    console.log('=======');
}