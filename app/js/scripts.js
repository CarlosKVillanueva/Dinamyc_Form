/* -------------------------------------------- */
/*           Checkbox logic                     */
/* -------------------------------------------- */
$('.js-year').on('change', function () {
    $year = $(this).val();
    if ($(this).is(':checked')) {
        $('.subForm__' + $year).show();

        // $('#mudanzaGrupa-' + year).off('change');
        $('#mudanzaGrupa-' + $year).on('change', function (){
            $(this).parents('.js-sub-form').find('.cuantasMudanza').toggle();
            $(this).parents('.js-sub-form').find('.subForm__participa').toggle();
            // $('.cuantasMudanza-' + $year).toggle();
            // $('.subForm__participa-' + $year).toggle();
        });
        // $('#participaGrupa-' + year).off('chage');
        $('#participaGrupa-' + $year).on('change', function () {
            $(this).parents('.js-sub-form').find('.dondeGrupa').toggle();
        });
    } else {
        $('.subForm__' + $year).hide();
    }
});

/* -------------------------------------------- */
/*           Province logic                     */
/* -------------------------------------------- */
$('.js-province-list').on('change', function(){
    $province = $('.js-province-list').val()
    if ($province != '') {
        var jqxhr = $.get( "https://apis.datos.gob.ar/georef/api/departamentos?max=900&provincia=" + $province, function() {
        
        })
            .done(function(data) {
                $list = $('.js-municpios-list')
                departamentos = []
                $.each(data.departamentos, function() {
                    departamentos.push({id: this.id, nombre: this.nombre})
                });

                departamentos.sort(function(a,b){
                    if(a.id > b.id){ return 1}
                     if(a.id < b.id){ return -1}
                       return 0;
                 });
                $list.empty();
                $.each(departamentos, function() {
                    $list.append($("<option />").val(this.nombre).text(this.nombre));
                })
            })
            .fail(function() {
            alert( "error" );
            });   
    }
});

/* -------------------------------------------- */
/*              Email Sending                   */
/* -------------------------------------------- */
function sendEmail( event ) {
    Email.send({
        SecureToken : "38e2ed4c-6985-43bc-916f-c5e05fc7ceae",
        To : 'carloskvillanueva@gmail.com',
        From : "carloskvillanueva@gmail.com",
        Subject : "Grupa Test",
        Body : "Body test"
        // Attachments : [
        //     {
        //         name : file.name,
        //         data : dataUri
        //     }]

    }).then(
      message => alert(message)
    );
}



//38e2ed4c-6985-43bc-916f-c5e05fc7ceae

/* -------------------------------------------- */
/*           Form Submit logic                  */
/* -------------------------------------------- */
function defaultJsonData(){
    return {
        integrantes: '', 
        usuarios_mudaron: '', 
        catidad_mudanza:'', 
        mudados_siguen_participando:'', 
        mudados_siguen_participando_donde: '', 
        base_grupa: '', 
        otras_zonas: ''
    };
}

function yearJson(year) {
    yearData = defaultJsonData();

    if ($("#" + year).prop('checked')) {
        yearData['integrantes'] = $('.subForm__' + year).find('[name=integrantesGrupa]').val();
        yearData['usuarios_mudaron'] = $('.subForm__' + year).find('[name=mudanzaGrupa]').val();
        yearData['catidad_mudanza'] = $('.subForm__' + year).find('[name=cuantasMudanza]').val();
        yearData['mudados_siguen_participando'] = $('.subForm__' + year).find('[name=sigue_participando]').val();
        yearData['mudados_siguen_participando_donde'] = $('.subForm__' + year).find('[name=dondeGrupa]').val();
        yearData['base_grupa'] = $('.subForm__' + year).find('[name=baseGrupa]').val();
        yearData['otras_zonas'] = $('.subForm__' + year).find('[name=actuoGrupa]').val();
    }
    return yearData;
}

function submitForm() {
    data = {};
    for (let i = 2012; i < 2021; i++){
        data[i] = yearJson(i);
    }
    return data;
}

$("form").on('submit', function( event ) {
    data = submitForm(this);
    console.log(data)
    sendEmail();
    event.preventDefault();
    
});