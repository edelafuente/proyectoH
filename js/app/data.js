var App = App || {};
App.Data = (function() {
    "use strict";
    var conseguirMaquina = function(id, success) {

        var _maquina = JSON.parse(localStorage.getItem('maquinas'));
        jQuery.map(maquinas, function(obj) {
            if (obj.id === id)
                return obj; // or return obj.name, whatever.
        });

        console.log(_maquina);

    };
    var guardarMaquinas = function(maquinas, success) {


        localStorage.setItem('maquinas', JSON.stringify(maquinas));
        success(JSON.stringify(maquinas).toString());
    };

    return {
        conseguirMaquina: conseguirMaquina,
        guardarMaquinas: guardarMaquinas,
    };

})();