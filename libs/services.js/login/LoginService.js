class LoginService {
    
    constructor() {
        //this.serviceUrl = "/api/puntos";
        this.serviceUrl = "./libs/services.js/login/UsuariosMock.json";
    }

    getUsuarios(nickname,password){
        return $.getJSON(this.serviceUrl, {"nickname":nickname,"password": password});   
    }
}