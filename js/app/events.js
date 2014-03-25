var App = App||{};
App.Events = (function() {
    "use strict";

    $(document).on('click', '#cdm', App.controller.mostrarMaquinas);
    $(document).on('click', '#buscar', App.controller.buscarMaquinas);

})();