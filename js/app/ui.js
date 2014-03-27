var App = App||{};
App.Ui = (function() {
    "use strict";

    var mostrarMaquinas = function(maquinas){

        var lista = $('<ul/>', {class : 'list-group'});

        for (var i = maquinas.length - 1; i >= 0; i--) {
            var contenido = maquinas[i].contenido;
            for (var k = contenido.length - 1; k >= 0; k--) {
                contenido[k] = contenido[k].replace("comidacaliente"," Comida caliente");
                contenido[k] = contenido[k].replace("comidafria"," Comida fría");
                contenido[k] = contenido[k].replace("bebidacaliente"," Bebida caliente");
                contenido[k] = contenido[k].replace("bebidafria"," Bebida fría");
                contenido[k] = contenido[k].replace("otros"," otros");
            }
            lista.append('<li class="list-group-item" data-id="' + maquinas[i].id + '"><img src="img/'+ maquinas[i].urlimagen.replace(".jpg","_min.png") +'"><span> Contenido:' + maquinas[i].contenido + '</li>');

        }

        return lista;

    };

    var mostrarDetalles = function(maquina){

        var detalle = $('<p class="detalle"><img src="img/' + maquina.urlimagen + '">' + maquina.contenido + '</p>');

        return detalle;

    };

    return {
        mostrarMaquinas : mostrarMaquinas,
        mostrarDetalles : mostrarDetalles
    };


})();