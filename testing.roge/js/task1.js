$(document).ready(function() {
    //валідація форми
    $('#post_form1').submit(function() {
        $.post('../template-parts/post.php', $("#post_form1").serialize(), function(response) {
            result = $.parseJSON(response);
            //очистка форм від помилок
            $('#res_name').text('');
            $('#res_surname').text('');
            $('#res_age').text('');
            $('#res_lic').text('');
            //перевірка на помилку у формі
            if (result.err_n != 0) {
                $('#res_name').html(result.name);
            } else if (result.err_s != 0) {
                $('#res_surname').html(result.surname);
            } else if (result.err_a != 0) {
                $('#res_age').html(result.age);
            } else if (result.err_l != 0) {
                $('#res_lic').html(result.license);
            } else {
                $('.task1').hide('slow');
                $('#post_success').text('OK');
                $('.task2').show('slow');
                setTimeout(function() {
                    $('#post_success').text('');
                }, 1500);
            }
        });
        return false;
    });
    
});

//завантаження моделей авто
