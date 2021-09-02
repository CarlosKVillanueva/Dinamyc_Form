/* -------------------------------------------- */
/*                     2012                     */
/* -------------------------------------------- */
$('#2012').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2012').show()
    } else {
        $('.subForm__2012').hide()
    }})
/* -------------------------------------------- */
/*                     2013                     */
/* -------------------------------------------- */
$('#2013').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2013').show()
    } else {
        $('.subForm__2013').hide()
    }})
/* -------------------------------------------- */
/*                     2014                     */
/* -------------------------------------------- */
$('#2014').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2014').show()
    } else {
        $('.subForm__2014').hide()
    }})
/* -------------------------------------------- */
/*                     2015                     */
/* -------------------------------------------- */
$('#2015').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2015').show()
    } else {
        $('.subForm__2015').hide()
    }})
/* -------------------------------------------- */
/*                     2016                     */
/* -------------------------------------------- */
$('#2016').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2016').show()
    } else {
        $('.subForm__2016').hide()
    }})
/* -------------------------------------------- */
/*                     2017                     */
/* -------------------------------------------- */
$('#2017').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2017').show()
    } else {
        $('.subForm__2017').hide()
    }})
/* -------------------------------------------- */
/*                     2018                     */
/* -------------------------------------------- */
$('#2018').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2018').show()
    } else {
        $('.subForm__2018').hide()
    }})
/* -------------------------------------------- */
/*                     2019                     */
/* -------------------------------------------- */
$('#2019').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2019').show()
    } else {
        $('.subForm__2019').hide()
    }})
/* -------------------------------------------- */
/*                     2020                     */
/* -------------------------------------------- */
$('#2020').on('change', function () {
    if ($(this).is(':checked')) {
        $('.subForm__2020').show()
    } else {
        $('.subForm__2020').hide()
    }})

$('#mudanzaGrupa').on('change', function (){
    $('.cuantasMudanza').toggle();
    $('.subForm__participa').toggle();
})
$('#participaGrupa').on('change', function () {
    $('.dondeGrupa').toggle();
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