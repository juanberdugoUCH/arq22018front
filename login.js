$(document).ready(function(){
   var nickname;
   var passsword;
    $("#log").click(function(){
        cargarUsuarios();  
        nickname=$("#nick").val();
        passsword=$("#pass").val();

  
    });

    function cargarUsuarios(){
    console.log(nickname);
    console.log(passsword);
        var UsuariosServices = new LoginService();
        UsuariosServices.getUsuarios().then(function(usuarios){
            alert("entro");
            if(usuarios.nombre==nickname && usuarios.passsword==passsword)
            {
                alert("Usuario y contraseña correctos");
            }
            else 
            alert("Vuelva a ingresar los datos");
        });
        }
       
    
    
    
    });
