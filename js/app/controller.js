var App = App||{};
App.Controller = (function() {
    "use strict";

    var mostrarMaquinas = function(){
        App.localizador.localizateWithGPS(App.config.radio, App.config.gps, function(data){
            var maquinas = App.Filtros.filtro(data, App.config.filtros);
            App.Data.guardarMaquinas(maquinas);
            App.Ui.mostrarMaquinas(maquinas);
        });
    };

    var buscarMaquinas = function(){
        App.localizador.localizateWithoutGPS(App.config.radio, function(data){
            var maquinas = App.Filtros.filtro(data, App.config.filtros);
            App.Data.guardarMaquinas(maquinas);
            App.Ui.mostrarMaquinas(maquinas);
        });
    };

    var mostrarDetalles = function(e){

            var maquina = App.Data.conseguirMaquina();
            //algo maquina = ...
            App.Ui.mostrarDetalles(maquinas);

    };

    return {
        mostrarMaquinas : mostrarMaquinas,
        buscarMaquinas : buscarMaquinas,
        mostrarDetalles : mostrarDetalles
    };

})();