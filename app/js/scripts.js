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
function sendEmail() {
    Email.send({
        SecureToken : "6eb4e1b0-c2d5-46cc-8696-1cf0ce9fc5c9",
        To : 'matias.laino@gmail.com',
        From : "from@example.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
}


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
        yearData['otras_zonas'] = $('.subForm__' + year).find('[name=actuaGrupa]').val();
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
    event.preventDefault();
    data = submitForm(this);
    console.log(data)
    // sendEmail();
});