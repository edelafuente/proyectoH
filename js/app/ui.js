var App = App || {};
App.Ui = (function() {
    "use strict";

    var mostrarMaquinas = function(maquinas) {

        var lista = $('<ul/>', {
            class: 'list-group'
        });

        for (var i = maquinas.length - 1; i >= 0; i--) {

            var contenido = maquinas[i].contenido;
            for (var k = contenido.length - 1; k >= 0; k--) {
                contenido[k] = contenido[k].replace("comidacaliente", " Comida caliente");
                contenido[k] = contenido[k].replace("comidafria", " Comida fría");
                contenido[k] = contenido[k].replace("bebidacaliente", " Bebida caliente");
                contenido[k] = contenido[k].replace("bebidafria", " Bebida fría");
                contenido[k] = contenido[k].replace("otros", " otros");
            }
            lista.append('<li class="list-group-item" data-id="' + maquinas[i].id + '"><img src="img/' + maquinas[i].urlimagen.replace(".png", "_min.png") + '"><span> ' + maquinas[i].contenido + '</li>');

        }
        $('#footer').load('lista.html');
        $('#inicio').html(lista);

    };

    var mostrarDetalles = function(maquina) {

        var contenido = maquina.contenido;
            for (var k = contenido.length - 1; k >= 0; k--) {
                contenido[k] = contenido[k].replace("comidacaliente", " Comida caliente");
                contenido[k] = contenido[k].replace("comidafria", " Comida fría");
                contenido[k] = contenido[k].replace("bebidacaliente", " Bebida caliente");
                contenido[k] = contenido[k].replace("bebidafria", " Bebida fría");
                contenido[k] = contenido[k].replace("otros", " otros");
            }

            var detalle = $('<div class="detalle"><img src="img/' + maquina.urlimagen + '"><p>' + maquina.contenido + '</p></div>');

        $('#footer').load('detalles.html');
        $('#inicio').html(detalle);

    };

    var mostrarInicio = function(){
        $('#inicio').load('inicio.html');
        $('#footer').load(' ');

    };

    return {
        mostrarMaquinas: mostrarMaquinas,
        mostrarDetalles: mostrarDetalles,
        mostrarInicio: mostrarInicio
    };


})();