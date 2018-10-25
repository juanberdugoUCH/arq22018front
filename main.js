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
                fila="<tr>";
                fila += '<td class="align-middle">' + punto.nombre; 
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadDiscord;
                fila += '<img src="signoMas.png" width="10" height="10" class="sumarPuntos" id="sum_'+ punto.nombre + '_discord">';
                fila += '<img src="signoMenos.png" width="10" height="5" class="sumarPuntos" id="res_'+ punto.nombre + '_discord">';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpDiscord;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadCasaMaritima;
                fila += '<img src="signoMas.png" width="10" height="10" class="sumarPuntos" id="sum_'+ punto.nombre + '_casaMaritima">';
                fila += '<img src="signoMenos.png" width="10" height="5" class="sumarPuntos" id="res_'+ punto.nombre + '_casaMaritima">';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpCasaMaritima;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadMision;
                fila += '<img src="signoMas.png" width="10" height="10" class="sumarPuntos" id="sum_'+ punto.nombre + '_misiones">';
                fila += '<img src="signoMenos.png" width="10" height="5" class="sumarPuntos" id="res_'+ punto.nombre + '_misiones">';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpMision;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadRenovacionContrato;
                fila += '<img src="signoMas.png" width="10" height="10" class="sumarPuntos" id="sum_'+ punto.nombre + '_rc">';
                fila += '<img src="signoMenos.png" width="10" height="5" class="sumarPuntos" id="res_'+ punto.nombre + '_rc">';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpRenovacionContrato;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.cantidadAyudarMiembro;
                fila += '<img src="signoMas.png" width="10" height="10" class="sumarPuntos" id="sum_'+ punto.nombre + '_ayudar">';
                fila += '<img src="signoMenos.png" width="10" height="5" class="sumarPuntos" id="res_'+ punto.nombre + '_ayudar">';
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tpAyudarMiembro;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.tp;
                fila += '</td>';
                fila += '<td class="align-middle">' + punto.nivelBono;
                fila += '</td>';
                fila += "</tr>";
                
                $tablaPuntos.append(fila);  
            });
        });
    }

    $(document).on('click','.sumarPuntos', function(){
        var id = jQuery(this).attr("id");
        var idComponents = id.split("_");
        var puntosServices = new PuntosService();

        puntosServices.editarPuntos(idComponents[0],
                                    idComponents[1], 
                                    idComponents[2])
                                    .then(function(rta) {
            if(rta.error) alert("todo mal")
            else alert("todo OK");
        });
    });
      

});
