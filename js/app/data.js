var App = App || {};
App.Data = (function() {
    "use strict";
    var conseguirMaquina = function(id, success) {

        var _maquina = JSON.parse(localStorage.getItem('maquinas'));
        _maquina = jQuery.map(_maquina, function(obj) {
            if (obj.id === id)
                success(obj); // or return obj.name, whatever.
        });

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