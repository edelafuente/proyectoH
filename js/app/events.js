var App = App||{};
App.Events = (function() {
    "use strict";

    $(document).on('click', '#cdm', App.Controller.mostrarMaquinas);
    $(document).on('click', '#buscar', App.Controller.buscarMaquinas);
    $(document).on('click', '.maquina', App.Controller.mostrarDetalles);


})();