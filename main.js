$(function() {
    //hacemos todas las precargas, llamando a una única función
    loadMain();

    function loadMain(){
        $tablaPuntos = $("#tbodyTablaPuntos");
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
            fila="";
            puntos.forEach(function(punto) {
                fila="<tr>";
                fila += "<td>" + punto.nombre + "</td>";
                fila += "<td>" + punto.cantidadDiscord + "</td>";
                fila += "<td>" + punto.tpDiscord + "</td>";
                fila += "<td>" + punto.cantidadCasaMaritima + "</td>";
                fila += "<td>" + punto.tpCasaMaritima + "</td>";
                fila += "<td>" + punto.cantidadMision + "</td>";
                fila += "<td>" + punto.tpMision + "</td>";
                fila += "<td>" + punto.cantidadRenovacionContrato + "</td>";
                fila += "<td>" + punto.tpRenovacionContrato + "</td>";
                fila += "<td>" + punto.cantidadAyudarMiembro + "</td>";
                fila += "<td>" + punto.tpAyudarMiembro + "</td>";
                fila += "<td>" + punto.tp + "</td>";
                fila += "<td>" + punto.nivelBono + "</td>";

                $tablaPuntos.append(fila);
            });
        });
    }

});