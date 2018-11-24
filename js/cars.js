$(document).ready(function() {
    load_json_data('mark');

    function load_json_data(id, parent_id) {
        var html_code = '';
        $.getJSON('../mark_model_year.json', function(data) {
            html_code += '<option value="">Select ' + id + '</option>';
            $.each(data, function(key, value) {
                if (id == 'mark') {
                    if (value.parent_id == '0') {
                        html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                } else {
                    if (value.parent_id == parent_id) {
                        html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                }
            });
            $('#' + id).html(html_code);
        });
    }
    $(document).on('change', '#mark', function() {
        var mark_id = $(this).val();
        if (mark_id != '') {
            load_json_data('model', mark_id);
        } else {
            $('#model').html('<option value="">Select model</option>');
            $('#year').html('<option value="">Select year</option>');
        }
    });
    $(document).on('change', '#model', function() {
        var model_id = $(this).val();
        if (model_id != '') {
            load_json_data('year', model_id);
        } else {
            $('#year').html('<option value="">Select year</option>');
        }
    });
    $('#btn2').click(function() {
        var check_form1 = $("#mark :selected").val();
        var check_form2 = $("#model :selected").val();
        var check_form3 = $("#year :selected").val();
        if (check_form1 == '') {
            $('#attention').text('Fill the field Mark');
        } else if (check_form2 == '') {
            $('#attention').text('Fill the field Model');
        } else if (check_form3 == '') {
            $('#attention').text('Fill the field Year');
        } else {
            var mark_res = $("#mark :selected").text();
            var model_res = $("#model :selected").text();
            var year_res = $("#year :selected").text();
            task2Res(mark_res, model_res, year_res);
            $('.task2').hide('slow');
            $('.task3').show('slow');
        }
    });
});