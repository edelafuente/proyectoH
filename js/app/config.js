var App = App || {};
App.Config = (function() {
    "use strict";
<<<<<<< HEAD

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

=======
    // Database
>>>>>>> e1af16b743fa3855c85d07d50f5aeb4a731f1e01

})();