$("#grupa").on('change', function () {
    let selected = $(" #grupa option:selected ").text();
    console.log(selected);

    $('<label for="Dato1">Dato1</label>').appendTo('.secondaryForm');

    $('<input/>').attr({
        type: 'text',
        id: 'Dato1',
        name: 'Dato1'
    }).appendTo('.secondaryForm');


    $('<label for="Dato2">Dato2</label>').appendTo('.secondaryForm');

    $('<input/>').attr({
        type: 'text',
        id: 'Dato2',
        name: 'Dato2'
    }).appendTo('.secondaryForm');


    $('<label for="Dato1">Dato3</label>').appendTo('.secondaryForm');

    $('<textarea/>').attr({
        rows: '2',
        cols: '20',
        id: 'Dato3',
        name: 'Dato3'
    }).appendTo('.secondaryForm');




})