var App = App||{};
App.Data = (function() {
    "use strict";
    var conseguirMaquina = function(id, success){
        $.ajax({
            url : 'data/BDL/maquinaslocales.json',
            type : 'GET',
            data: { id : id},
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
    var guardarMaquinas = function(maquinas, success){
        $.ajax({
            url : 'data/BDL/guardamaquina.php',
            type : 'POST',
            data: maquinas,
            dataType : 'json',
            cache : false,
            success: function(data){
                success(data);

            },
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

    };

    return {
        conseguirMaquina : conseguirMaquina,
        guardamaquina : guardamaquina,
    };

})();