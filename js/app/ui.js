var App = App||{};
App.Ui = (function() {
    "use strict";

    var mostrarMaquinas = function(maquinas){

        var lista = $('<ul/>', {});

        for (var i = maquinas.length - 1; i >= 0; i--) {
            lista.append('<li data-id="' + maquinas[i].id + '"><img src="'+ maquinas[i].urlimagen +'"><span>Contenido:' + maquinas[i].contenido + '</li>');
        }

    };

    var mostrarDetalles = function(maquina){

    };

    return {
        mostrarMaquinas : mostrarMaquinas,
        mostrarDetalles : mostrarDetalles
    };




})();