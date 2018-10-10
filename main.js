$(function() {
    //hacemos todas las precargas, llamando a una única función
    loadMain();

    function loadMain(){
        cargarPuntos();    
    }

    /* 
    * precargamos los puntos
    * llamando al servicio js que a su vez llama al back end y trae los puntos
    */
       
    function cargarPuntos(){
        var puntosServices = new PuntosService();
        puntosServices.getPuntos().then(function(puntos) {
            console.log(puntos);
            //razas.forEach(function(raza) {
            //    $razaSelect.append($('<option>').val(raza.id_raza).text(raza.raza));
            //});
        });
    }

});