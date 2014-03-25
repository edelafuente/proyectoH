var App = App || {};
App.localizador = (function ($){
    'use strict';

    var localizateWithGPS = function(Radio, GPS, success){
        localizate(Radio, GPS, success);
    };

    var localizateWithoutGPS = function(Radio, success){
        // Obtener posicion
        localizate(Radio, GPS, success);
    };

    var localizate = function(Radio, GPS, success){

        $.ajax({
            url : '../../data/datos.json',
            type : 'POST',
            data: {
                    radio : Radio,
                    lat : GPS.lat,
                    lng : GPS.lng
                },
            dataType : 'json',
            cache : false,  
            success : function(data){
                success(data);
            },
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

    };

    return {
        localizateWithGPS : localizateWithGPS,
        localizateWithoutGPS : localizateWithoutGPS
    };
})(jQuery);