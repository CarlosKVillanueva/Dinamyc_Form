
$('#fechaGrupa').on('change', function () {
    // let checked = $('input:checked');
    let checked = new Array();


    $.each($("input[name=grupa]:checked"), function() {
        checked.push($(this).val()); 
    }); 

    $('.secondaryForm').html('');
    
    $.each(checked, function(key, grupa_value){
        cloned_html = $('.js-sub-form-template').clone();
        $(cloned_html).toggle();
        $(cloned_html).removeClass('js-sub-form-template');
        $(cloned_html).addClass('js-' + grupa_value + '-input-group')
        
        
        $('.secondaryForm').append('<h4>' + grupa_value + ' </h4>')

        //Busca cada elemento que tenga la clase .sub-form-input y lo asigna a input_array
        input_array = $(cloned_html).find('.sub_form_input')

        //Asigna el Nombre y el valor de la seleccion a cada campo dinamico
        $.each( input_array, function( key, value ) {
            value.name = grupa_value;
            value.id = grupa_value;
        })
        //Inserta en la clase .secondaryForm
        $('.secondaryForm').append(cloned_html)
        
    });


    // console.log(grupa_value);

   
})
