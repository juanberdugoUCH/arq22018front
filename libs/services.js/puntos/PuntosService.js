class PuntosService {
    
    constructor() {
        //this.serviceUrl = "/api/puntos";
        this.serviceUrl = "./libs/services.js/puntos/puntosMock.json";
    }

    getPuntos(){
        return $.getJSON(this.serviceUrl);   
    }
}
