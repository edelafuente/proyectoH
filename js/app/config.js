var App = App || {};
App.Config = (function() {
    "use strict";


    var loadDefaults = function() {

        var r = localStorage.getItem('radio');
        var f = localStorage.getItem('filtros');

        console.log(r);
        console.log(f);

        $.getJSON('data/BDL/radio.json', function(json2, textStatus) {
            /*optional stuff to do after success */
            localStorage.setItem('radio', r || JSON.stringify(json2));
        });


        $.getJSON('data/BDL/filtros.json', function(json, textStatus) {
            /*optional stuff to do after success */
            localStorage.setItem('filtros', f || JSON.stringify(json));
        });

    };




    var radio = function() {

        // $.ajax({
        //     url: 'data/BDL/radio.json',
        //     type: 'POST',
        //     data: {},
        //     dataType: 'json',
        //     cache: false,
        //     success: function(data, textStatus, jqXHR) {
        //         return (data);
        //     },
        //     error: function(jqXHR, textStatus, errorThrown) {
        //         console.log(errorThrown);
        //     }
        // });

        return JSON.parse(localStorage.getItem('radio'));
    }


    var filtros = function() {

        // $.ajax({
        //     url: 'data/BDL/filtros.json',
        //     type: 'POST',
        //     data: {},
        //     dataType: 'json',
        //     cache: false,
        //     success: function(data, textStatus, jqXHR) {
        //         return (data);
        //     },
        //     error: function(jqXHR, textStatus, errorThrown) {
        //         console.log(errorThrown);
        //     }
        // });

        return JSON.parse(localStorage.getItem('filtros'));

    };

    var point = function() {

        // BUSCAR Y DEVOLVER EL PUNTO QUE HA ELEGIDO EL USUARIO.

    }

    return {

        radio: radio,
        loadDefaults: loadDefaults,
        filtros: filtros




    };


})();