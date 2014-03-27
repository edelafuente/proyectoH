var App = App || {};
App.Filtros = (function() {
    "use strict";

    var filtro = function(maquinas, filtros) {


        var $m_filtradas = [];

        for (var i = maquinas.length - 1; i >= 0; i--) {
            for (var j = maquinas[i].contenido.length - 1; j >= 0; j--) {
                if ($.inArray(maquinas[i].contenido[j], filtros) > -1) {
                    $m_filtradas.push(maquinas[i]);
                    break;
                }
            }
        }
        console.log("MAQUINAS FILTRADAS");
        console.log($m_filtradas);
        return $m_filtradas;


    };

    return {
        filtro: filtro
    };



})();