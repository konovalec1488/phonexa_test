$(document).ready(function() {
    //валідація форми
    $('#post_form1').submit(function() {
        $.post('../template-parts/post.php', $("#post_form1").serialize(), function(response) {
            result = $.parseJSON(response);
            //очистка форм від помилок
            cleanForms();
            //перевірка на помилку у формі
            if (result.err_n != 0) {
                $('.res_name').text(result.name);
                $('.res_name').css('color', '#dc3545');
                $('[name="name"]').addClass("is-invalid");
            } else if (result.err_s != 0) {
                $('[name="name"]').addClass("is-valid");
                $('.res_surname').text(result.surname);
                $('.res_surname').css('color', '#dc3545');
                $('[name="surname"]').addClass("is-invalid");
            } else if (result.err_a != 0) {
                $('[name="name"]').addClass("is-valid");
                $('[name="surname"]').addClass("is-valid");
                $('.res_age').text(result.age);
                $('.res_age').css('color', '#dc3545');
                $('[name="age"]').addClass("is-invalid");
            } else if (result.err_l != 0) {
                $('[name="name"]').addClass("is-valid");
                $('[name="surname"]').addClass("is-valid");
                $('[name="age"]').addClass("is-valid");
                $('.res_lic').text(result.license);
                $('.res_lic').css('color', '#dc3545');
                $('[name="license"]').addClass("is-invalid");
            } else {
                formValid();
                $('.task1').hide('slow');
                task1Res(result.name, result.surname, result.age, result.license);
                $('.task2').show('slow');
            }
        });
        return false;
    });
});

function cleanForms() {
    //name
    $('.res_name').text('Please use only A-Z characters');
    $('.res_name').css('color', '#212529');
    $('[name="name"]').removeClass("is-invalid");
    //surname
    $('.res_surname').text('Please use only A-Z characters');
    $('.res_surname').css('color', '#212529');
    $('[name="surname"]').removeClass("is-invalid");
    //age
    $('.res_age').text('Age from 18 to 100');
    $('.res_age').css('color', '#212529');
    $('[name="age"]').removeClass("is-invalid");
    //lic
    $('.res_lic').text('Please use only A-Z or 0-9 characters');
    $('.res_lic').css('color', '#212529');
    $('[name="license"]').removeClass("is-invalid");
}

function formValid() {
    $('[name="name"]').addClass("is-valid");
    $('[name="surname"]').addClass("is-valid");
    $('[name="age"]').addClass("is-valid");
    $('[name="license"]').addClass("is-valid");
}