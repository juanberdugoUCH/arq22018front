class LoginService {
    
    constructor() {
        //this.serviceUrl = "/api/puntos";
        this.serviceUrl = "./libs/services.js/login/loginMock.json";
    }

    getUsuarios(){
        return $.getJSON(this.serviceUrl);   
    }
}