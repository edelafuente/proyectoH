var App = App||{};
App.Controller = (function() {
    "use strict";

    var mostrarMaquinas = function(){
        App.localizador.localizateWithGPS(App.config.radio, App.config.gps, function(data){
            var maquinas = App.Filtros.filtro(data);
            App.Ui.mostrarMaquinas(maquinas);
        });
    };

    var buscarMaquinas = function(){
        App.localizador.localizateWithoutGPS(App.config.radio, function(data){
            var maquinas = App.Filtros.filtro(data);
            App.Ui.buscarMaquinas(maquinas);
        });
    };

    return {
        mostrarMaquinas : mostrarMaquinas,
        buscarMaquinas : buscarMaquinas
    };

})();