var App = App||{};
App.Ui = (function() {
    "use strict";

    var mostrarMaquinas = function(maquinas){
<<<<<<< HEAD

        var lista = $('<ul/>', {});

        for (var i = maquinas.length - 1; i >= 0; i--) {
            lista.append('<li data-id="' + maquinas[i].id + '"><img src="'+ maquinas[i].urlimagen +'"><span>Contenido:' + maquinas[i].contenido + '</li>');
        }
=======
>>>>>>> 1facf2d2e2bfbc050d7805661658197ccf5ca953

    };

    var mostrarDetalles = function(maquina){

    };

    return {
        mostrarMaquinas : mostrarMaquinas,
        mostrarDetalles : mostrarDetalles
    };




})();