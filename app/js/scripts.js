/* -------------------------------------------- */
/*                     2012                     */
/* -------------------------------------------- */
$('#2012').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2012').show()

        $('#mudanzaGrupa-2012').on('change', function (){
            $('.cuantasMudanza-2012').toggle();
            $('.subForm__participa-2012').toggle();
        })
        $('#participaGrupa-2012').on('change', function () {
            $('.dondeGrupa-2012').toggle();
        })
    } else {
        $('.subForm__2012').hide()
    }
})

/* -------------------------------------------- */
/*                     2013                     */
/* -------------------------------------------- */
$('#2013').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2013').show()

        $('#mudanzaGrupa-2013').on('change', function (){
            $('.cuantasMudanza-2013').toggle();
            $('.subForm__participa-2013').toggle();
        })
        $('#participaGrupa-2013').on('change', function () {
            $('.dondeGrupa-2013').toggle();
        })
    } else {
        $('.subForm__2013').hide()
    }
})
/* -------------------------------------------- */
/*                     2014                     */
/* -------------------------------------------- */
$('#2014').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2014').show()

        $('#mudanzaGrupa-2014').on('change', function (){
            $('.cuantasMudanza-2014').toggle();
            $('.subForm__participa-2014').toggle();
        })
        $('#participaGrupa-2014').on('change', function () {
            $('.dondeGrupa-2014').toggle();
        })
    } else {
        $('.subForm__2014').hide()
    }
})
/* -------------------------------------------- */
/*                     2015                     */
/* -------------------------------------------- */
$('#2015').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2015').show()

        $('#mudanzaGrupa-2015').on('change', function (){
            $('.cuantasMudanza-2015').toggle();
            $('.subForm__participa-2015').toggle();
        })
        $('#participaGrupa-2015').on('change', function () {
            $('.dondeGrupa-2015').toggle();
        })
    } else {
        $('.subForm__2015').hide()
    }
})
/* -------------------------------------------- */
/*                     2016                     */
/* -------------------------------------------- */
$('#2016').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2016').show()

        $('#mudanzaGrupa-2016').on('change', function (){
            $('.cuantasMudanza-2016').toggle();
            $('.subForm__participa-2016').toggle();
        })
        $('#participaGrupa-2016').on('change', function () {
            $('.dondeGrupa-2016').toggle();
        })
    } else {
        $('.subForm__2016').hide()
    }
})
/* -------------------------------------------- */
/*                     2017                     */
/* -------------------------------------------- */
$('#2017').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2017').show()

        $('#mudanzaGrupa-2017').on('change', function (){
            $('.cuantasMudanza-2017').toggle();
            $('.subForm__participa-2017').toggle();
        })
        $('#participaGrupa-2017').on('change', function () {
            $('.dondeGrupa-2017').toggle();
        })
    } else {
        $('.subForm__2013').hide()
    }
})
/* -------------------------------------------- */
/*                     2018                     */
/* -------------------------------------------- */
$('#2018').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2018').show()

        $('#mudanzaGrupa-2018').on('change', function (){
            $('.cuantasMudanza-2018').toggle();
            $('.subForm__participa-2018').toggle();
        })
        $('#participaGrupa-2018').on('change', function () {
            $('.dondeGrupa-2018').toggle();
        })
    } else {
        $('.subForm__2018').hide()
    }
})
/* -------------------------------------------- */
/*                     2019                     */
/* -------------------------------------------- */
$('#2019').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2019').show()

        $('#mudanzaGrupa-2019').on('change', function (){
            $('.cuantasMudanza-2019').toggle();
            $('.subForm__participa-2019').toggle();
        })
        $('#participaGrupa-2019').on('change', function () {
            $('.dondeGrupa-2019').toggle();
        })
    } else {
        $('.subForm__2019').hide()
    }
})
/* -------------------------------------------- */
/*                     2020                     */
/* -------------------------------------------- */
$('#2020').on('change', function () {

    if ($(this).is(':checked')) {
        $('.subForm__2020').show()

        $('#mudanzaGrupa-2020').on('change', function (){
            $('.cuantasMudanza-2020').toggle();
            $('.subForm__participa-2020').toggle();
        })
        $('#participaGrupa-2020').on('change', function () {
            $('.dondeGrupa-2020').toggle();
        })
    } else {
        $('.subForm__2020').hide()
    }
})





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