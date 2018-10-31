$(document).ready(function(){
   var nickname;
   var password;
    $("#log").click(function(){
        nickname=$("#nick").val();
        password=$("#pass").val();
        cargarUsuarios();  
    });

    function cargarUsuarios(){
        var UsuariosServices = new LoginService();
        UsuariosServices.getUsuarios(nickname,password).then(function(usuarios){
            console.log(usuarios);
            if(usuarios.error != "0"){
                alert("Usuario Desconocido");
            }else{
                window.location.replace("main.html"); 
            }
        });
    }
});
