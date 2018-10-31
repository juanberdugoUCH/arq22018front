class PuntosService {
    
    constructor() {
        this.serviceUrl = "http://localhost:8080/getData";
        //this.serviceUrl = "./libs/services.js/puntos/puntosMock.json";
        //this.editPointsUrl = "/api/editPoints";
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
