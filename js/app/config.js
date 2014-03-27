var App = App||{};
App.Config = (function() {
    "use strict";

    var radio = function(){

        return JSON.parse(localStorage('radio'));

    };

    var filtros = function(){

        return JSON.parse(localStorage('filtros'));

    };

    return {
        radio : radio,
        filtros : filtros
        
    };


})();