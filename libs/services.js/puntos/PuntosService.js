class PuntosService {
    
    constructor() {
        url = new URLHelpers;
        this.serviceUrl = url.api + "/getData";
        console.log (this.serviceUrl);
        //this.serviceUrl = "./libs/services.js/puntos/puntosMock.json";
        //this.editPointsUrl = url.api +"/api/editPoints";
        this.editPointsUrl = "./libs/services.js/puntos/actividadResult.json";
    }

    getPuntos(){
        return $.getJSON(this.serviceUrl);   
    }

    editarPuntos(operation, player, activity){
        return $.post(this.editPointsUrl, {"operation":operation,
                            "player": player,
                            "activity": activity
                         }
                        );
    }
}
