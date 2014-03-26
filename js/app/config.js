var App = App||{};
App.Config = (function() {
    "use strict";

    var radio = function(){

        $.ajax({
            url : '../../data/BDL/radio.json',
            type : 'POST',
            data : {},
            dataType : 'json',
            cache : false,  
            success : function(data, textStatus, jqXHR){
                return(data);
            },
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

    };

    var filtros = function(){

        $.ajax({
            url : '../../data/BDL/filtros.json',
            type : 'POST',
            data : {},
            dataType : 'json',
            cache : false,  
            success : function(data, textStatus, jqXHR){
                return(data);
            },
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

    };

    return {
        radio : radio
        //filtros : filtros
        
    };


})();