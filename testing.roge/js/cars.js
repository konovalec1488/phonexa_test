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

   $('#btn2').click(function(){
         $('.task2').hide('slow');
         $('.task3').show('slow');
    });


});

