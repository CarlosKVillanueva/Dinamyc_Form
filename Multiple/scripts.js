$("#grupa").on('change', function () {
    let selected = $(" #grupa").val();
    $('.secondaryForm').html('');
    $.each(selected, function(key, grupa_value){
        cloned_html = $('.js-sub-form-template').clone();
        $(cloned_html).toggle();
        $(cloned_html).removeClass('js-sub-form-template');
        $(cloned_html).addClass('js-' + grupa_value + '-input-group')
        input_array = $(cloned_html).find('.sub_form_input')
        $.each( input_array, function( key, value ) {
            value.name = grupa_value + "[" + value.id + "]"
            value.id = grupa_value + "_" + value.id;
        })
        $('.secondaryForm').append(cloned_html)
    });

})