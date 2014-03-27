var App = App || {};
App.Localizador = (function($) {
    'use strict';



    var filtraPorRadio = function(data, radio, GPS) {

        if (typeof(Number.prototype.toRad) === "undefined") {
            Number.prototype.toRad = function() {
                return this * Math.PI / 180;
            };
        }

        var maq = [];
        jQuery.map(data, function(val, i) {

            var lat1 = GPS.lat;
            var lat2 = val.ubicacion.latitud;
            var lon1 = GPS.lng;
            var lon2 = val.ubicacion.longitud;

            var R = 6371 * 1000; // m
            var dLat = (lat2 - lat1).toRad();
            var dLon = (lon2 - lon1).toRad();
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;

            var e = radio[0].radio - d;
            if (e >= 0) {

                maq.push(val);
            }

            console.log("MAQ");
            console.log(maq);

        });
        return maq;
    };


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

                        'lat': latitude,
                        'lng': longitude

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
                console.log("MAQUINAS SIN FILTRO");
                console.log(data);

                if (App.DEBUGMODE === "ON") {
                    data = filtraPorRadio(data, radio, GPS);
                }
                console.log("MAQUINAS CON FILTRO");
                console.log(data);
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