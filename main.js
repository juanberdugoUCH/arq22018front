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
            fila="";
            puntos.forEach(function(punto) {
                console.log(punto);

                fila="<tr>";
                fila += '<td class="align-middle">' + punto.nombre; 
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadDiscord;
                fila += '<a href="#">  <img src="signoMas.png" width="10" height="10"></a>';
                fila += '<a href="#">  <img src="signoMenos.png" width="10" height="5"></a>';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpDiscord;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadCasaMaritima;
                fila += '<a href="#">  <img src="signoMas.png" width="10" height="10"></a>';
                fila += '<a href="#">  <img src="signoMenos.png" width="10" height="5"></a>';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpCasaMaritima;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadMision;
                fila += '<a href="#">  <img src="signoMas.png" width="10" height="10"></a>';
                fila += '<a href="#">  <img src="signoMenos.png" width="10" height="5"></a>';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpMision;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadRenovacionContrato;
                fila += '<a href="#">  <img src="signoMas.png" width="10" height="10"></a>';
                fila += '<a href="#">  <img src="signoMenos.png" width="10" height="5"></a>';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpRenovacionContrato;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadAyudarMiembro;
                fila += '<a href="#">  <img src="signoMas.png" width="10" height="10"></a>';
                fila += '<a href="#">  <img src="signoMenos.png" width="10" height="5"></a>';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpAyudarMiembro;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tp;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.nivelBono;
                fila += '</td>';
                fila += "</tr>";
                
                $tablaPuntos.append(fila);  
                console.log(fila);
            });
        });
    }

});
