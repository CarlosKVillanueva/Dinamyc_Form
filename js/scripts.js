


$("#fechaGrupa").on('change', function () {
    let name = $(" #nameGrupa").val();
    let selected = $(" #fechaGrupa").val();
    
    console.log(name)
    console.log(selected)

    if(selected == "none") {
        $('.error').show()
    } else {
        $('.error').hide()
        $('.js-sub-form-template').show();
        $('.formYear').text(selected)
        
        $('.sub_form_input').attr("id", name+selected);

    }
    
})
