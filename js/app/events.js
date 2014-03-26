var App = App||{};
App.Events = (function() {
    "use strict";

    $(document).on('click', '#cdm', App.Controller.mostrarMaquinas);
    $(document).on('click', '#buscar', App.Controller.buscarMaquinas);

})();