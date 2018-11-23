$(document).ready(function() {
    //валідація форми
    $('#post_form3').submit(function() {
        $.post('../template-parts/post3.php', $("#post_form3").serialize(), function(response) {
            res = $.parseJSON(response);
            //очистка форм від помилок
            $('#res_city').text('');
            $('#res_phone').text('');
            $('#res_mail').text('');
            //перевірка на помилку у формі
            if (res.err_c != 0) {
                $('#res_city').html(res.city);
            } else if (res.err_p != 0) {
                $('#res_phone').html(res.phone);
            } else if (res.err_m != 0) {
                $('#res_mail').html(res.mail);
            } else {
                $('.task3').hide('slow');
                $('#post_success').text('SUPER');
            }
        });
        return false;
    });
    
});