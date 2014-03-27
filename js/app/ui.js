var App = App||{};
App.Ui = (function() {
    "use strict";

    var mostrarMaquinas = function(maquinas){

        var lista = $('<ul/>', {});

        for (var i = maquinas.length - 1; i >= 0; i--) {
            lista.append('<li data-id="' + maquinas[i].id + '"><img src="img/'+ maquinas[i].urlimagen +'" style="width:10%"><span>Contenido:' + maquinas[i].contenido + '</li>');
        }

    };

    var mostrarDetalles = function(maquina){

        var detalle = $('<p><img src="img/' + maquina.urlimagen + '"></p><p>' + maquina.contenido + '</p>');

    };

    return {
        mostrarMaquinas : mostrarMaquinas,
        mostrarDetalles : mostrarDetalles
    };


})();