var App = App||{};
App.Ui = (function() {
    "use strict";

    var mostrarMaquinas = function(maquinas){

        maquinas = [{
        "id": "1",
        "ubicacion": {
            "longitud": 43.27633,
            "latitud": -2.024574
        },
        "contenido": ["comidacaliente", "bebidacaliente", "comidafria", "bebidafria", "otros"],
        "urlimagen": "maq3.jpg"
    }, {
        "id": "2",
        "ubicacion": {
            "longitud": 43.309628,
            "latitud": -1.983204
        },
        "contenido": ["comidafria", "bebidafria"],
        "urlimagen": "maq4.jpg"
    }, {
        "id": "3",
        "ubicacion": {
            "longitud": 43.321119,
            "latitud": -1.982775
        },
        "contenido": ["comidacaliente", "bebidafria"],
        "urlimagen": "maq1.jpg"
    },{
        "id": "4",
        "ubicacion": {
            "longitud": 43.27633,
            "latitud": -2.024574
        },
        "contenido": ["comidacaliente", "bebidacaliente", "comidafria", "bebidafria", "otros"],
        "urlimagen": "maq3.jpg"
    }, {
        "id": "5",
        "ubicacion": {
            "longitud": 43.309628,
            "latitud": -1.983204
        },
        "contenido": ["comidafria", "bebidafria"],
        "urlimagen": "maq4.jpg"
    }, {
        "id": "6",
        "ubicacion": {
            "longitud": 43.321119,
            "latitud": -1.982775
        },
        "contenido": ["comidacaliente", "bebidafria"],
        "urlimagen": "maq1.jpg"
    }];

        var lista = $('<ul/>', {class : 'list-group'});

        for (var i = maquinas.length - 1; i >= 0; i--) {
            var contenido = maquinas[i].contenido.replace("","");
            lista.append('<li class="list-group-item" data-id="' + maquinas[i].id + '"><img src="img/'+ maquinas[i].urlimagen.replace(".jpg","_min.jpg") +'"><span>Contenido:' + maquinas[i].contenido + '</li>');
        }

        $(lista).appendTo('#inicio');

        return lista;

    };

    var mostrarDetalles = function(maquina){

        var detalle = $('<p class="detalle"><img src="img/' + maquina.urlimagen + '">' + maquina.contenido + '</p>');

        return detalle;

    };

    mostrarMaquinas();

    return {
        mostrarMaquinas : mostrarMaquinas,
        mostrarDetalles : mostrarDetalles
    };


})();