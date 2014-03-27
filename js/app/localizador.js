var App = App || {};
App.Localizador = (function($) {
    'use strict';


    var errorHandler = function(err) {
        if (err.code == 1) {
            console.log("Error: Access is denied!");
        } else if (err.code == 2) {
            console.log("Error: Position is unavailable!");
        }
    };



    var localizateWithGPS = function(radio, success) {
        if (navigator.geolocation) {
            // timeout at 60000 milliseconds (60 seconds)
            var options = {
                timeout: 60000
            };

            navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    var GPS = {
                        'GPS': {
                            'lat': latitude,
                            'lng': longitude
                        }
                    };

                    localizate(radio, GPS, success);
                },
                errorHandler,
                options);

        }
        //getLocation(radio, success);

        // localizate(radio, navigator.getcurrentposition, success);
    };

    var localizateWithoutGPS = function(radio, point, success) {
        // Obtener posicion
        localizate(radio, point, success);
    };

    var localizate = function(radio, GPS, success) {

        console.log(GPS);

        $.ajax({
            url: 'data/servidor/maquinas.json',
            type: 'GET',
            data: {
                radio: radio,
                lat: GPS.lat,
                lng: GPS.lng
            },
            dataType: 'json',
            cache: false,
            success: function(data) {
                success(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

    };

    return {
        localizateWithGPS: localizateWithGPS,
        localizateWithoutGPS: localizateWithoutGPS
    };
})(jQuery);