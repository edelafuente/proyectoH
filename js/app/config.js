var App = App||{};
App.Config = (function() {
    "use strict";

    var radio = function(){

        $.ajax({
            url : '../../data/servidor/maquinas.json',
            type : 'POST',
            data : {},
            dataType : 'json',
            cache : false,  
            success : function(data){
                console.log(data);
                return(data);
            },
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

    };

    radio();

    return {
        radio : radio
        //filtros : filtros
        
    };


})();