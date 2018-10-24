class PuntosService {
    
    constructor() {
        //this.serviceUrl = "/api/puntos";
        this.serviceUrl = "./libs/services.js/puntos/puntosMock.json";
        this.editPointsUrl = "/api/editPoints";
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
