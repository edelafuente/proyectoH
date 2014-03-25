var App = App || {};
App.localizador = (function (){
    'use strict';

    var localizate = function(e, Radio, GPS, success){
        $.ajax({
            url : '../../data/datos.json',
            type : 'POST',
            data: {radio : Radio},
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
        localizate : localizate
    };
})();