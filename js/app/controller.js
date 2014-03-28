var App = App || {};
App.Controller = (function() {
    "use strict";

    var mostrarMaquinas = function() {
        $('#inicio').html('<i class="fa fa-refresh fa-spin"></i>');
        App.Localizador.localizateWithGPS(App.Config.radio(), function(data) {
            var maquinas = App.Filtros.filtro(data, App.Config.filtros());
            App.Data.guardarMaquinas(maquinas, function(data2) {
                if (data2 === 'false') {
                    console.log('error, intentalo otra vez');
                } else {
                    console.log('se han guardado ' + data2.length + ' bytes');
                }
            });
            App.Ui.mostrarMaquinas(maquinas);

        });
    };

    var buscarMaquinas = function() {
        App.Localizador.localizateWithoutGPS(App.Config.radio(), App.Config.point(), function(data) {
            var maquinas = App.Filtros.filtro(data, App.Config.filtros());
            App.Data.guardarMaquinas(maquinas);
            App.Ui.mostrarMaquinas(maquinas);
        });
    };

    var mostrarDetalles = function(e) {
        var id = this.dataset.id;
        App.Data.conseguirMaquina(id, function(data) {
            var maquina = data;
            App.Ui.mostrarDetalles(maquina);
        });


    };

        var mostrarInicio = function(e) {

            App.Ui.mostrarInicio();
    };

    return {
        mostrarMaquinas: mostrarMaquinas,
        buscarMaquinas: buscarMaquinas,
        mostrarDetalles: mostrarDetalles,
        mostrarInicio: mostrarInicio
    };

})();