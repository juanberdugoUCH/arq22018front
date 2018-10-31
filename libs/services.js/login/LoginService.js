class LoginService {
    
    constructor() {
        //this.serviceUrl = "/api/puntos";
        this.serviceUrl = "./libs/services.js/login/UsuariosMock.json";
    }

    getUsuarios(){
        return $.getJSON(this.serviceUrl);   
    }
}