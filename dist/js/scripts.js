$('.js-province-list').on('change', function(){
    $province = $('.js-province-list').val()
    if ($province != '') {
        var jqxhr = $.get( "https://apis.datos.gob.ar/georef/api/municipios?max=900&provincia=" + $province, function() {
        
        })
            .done(function(data) {
            $list = $('.js-municpios-list')
            $.each(data.municipios, function() {
                $list.append($("<option />").val(this.id).text(this.nombre));
            });
            })
            .fail(function() {
            alert( "error" );
            });   
    }
});