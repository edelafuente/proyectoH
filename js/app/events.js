var App = App || {};
App.Events = (function() {
    "use strict";


    $(document).on('click', '#cdm', App.Controller.mostrarMaquinas);
    $(document).on('click', '#buscar', App.Controller.buscarMaquinas);
    $(document).on('click', '.list-group-item', App.Controller.mostrarDetalles);
    $(document).on('click', '#mibarra', App.Controller.mostrarInicio);





})();