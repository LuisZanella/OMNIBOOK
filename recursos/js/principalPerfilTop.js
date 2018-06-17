var IdUser;
function loadId() {
    IdUser = window.location.href;
    IdUser = IdUser.split('?')[1];
}
$(document).ready(function () {
    CargarComponentes();
});
function Notificaciones() {
    var Campos = ["Imagen_Perfil", "Nick", "Descripcion"];
    var spName = "sp_obtenerNotificacion";
    
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarNotificaciones");
}
function CargarNotificaciones(Response) {
    var cuentaN = 0;
    for (var i = 0; i < Response.d.length; i++) {
                if (Response.d[i].Datos.Imagen_Perfil !== "NF") {
                    /*SPLISTO*/$("#notificaciones").append('<li class="list-group-item black lt box-shadow-z0 b"> <span class="pull-left m-r" ><img src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="..." class="w-40 img-circle"></span><span class="clear block">' + Response.d[i].Usuario.Nick + ' : ' + '<a href="" class="text-primary" >' + Response.d[i].Publicacion.Descripcion + '</a > </br> <small class="text-muted">hace 10 minutos</small> </span > </li >'); //imagen, nombre de usuario y titulo
                    cuentaN++;
                    //no hay notificaciones a mostrar, no mostrar nada
                }
    }
    //Poner el numero de notificaciones
    $("#numNotificaciones").append(cuentaN);
}
//Poner la imagen del usuario
function ImagenPerfil() {
    var Campos = ["Imagen_Perfil"];
    var spName = "sp_obtenerImagenPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarImagenPerfil");
}
function CargarImagenPerfil(Response) {
    for (var i = 0; i < Response.d.length; i++) {
            $("#imagenNBSD").append('<span class="avatar w-32"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="..."><i class="on b-white bottom"></i></span>'); //imagen, nombre de usuario y titulo
            $("#imagenNBSI").append('<img class=" w-40 img-circle" src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="."/>');
            $("#imagenPrincipalPersona").append('<img src="' + Response.d[i].Datos.Imagen_Perfil + '"> <i class="on b-white"></i>');
    }
}
//Poner imagen portada
function ImagenPortada() {
    var Campos = ["Imagen_Portada"];
    var spName = "sp_obtenerImagenPortadaPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarImagenPortada");
}
function CargarImagenPortada(Response) {
    for (var i = 0; i < Response.d.length; i++) {
            $("#imagenFondoPerfilPrincipal").append('<img src= "' + Response.d[i].Datos.Imagen_Portada + '" class="blur opacity-3"/>');
    }
}
//Poner nombre del usuario
function Nombre() {
    var Campos = ["Nombre"];
    var spName = "sp_obtenerNombrePerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarNombre");
}
function CargarNombre(Response) {
    for (var i = 0; i < Response.d.length; i++) {
            $("#nombreUsuario").append(Response.d[i].Usuario.Nombre);
    }
}


//funcion para actualizar el estado
function ActualizarEstadoEnBD() {
    var Campos = $("#textAreaEditarEstado").val();

    //validar que no este vacio el texto para actualizar
    if (Campos === "") {
        alert("Necesitas escribir tu nuevo estado para poder actualizarlo.");
    } else {
        var spName = "sp_UpEstado";

        var Obj = {
            "spNombre": spName, "desNueva": Campos, "id": IdUser
        };
        var data = JSON.stringify(Obj);
        ajax("OmniService.asmx", "Actualizar", data, "CargarActualizarEstadoEnBD");
    }
}
function CargarActualizarEstadoEnBD(Response) {
    $("#estadoUsuario").empty();
    Estado();
    //Hacer que se regrese el div 
    $("#btnEditar").click();
}
//Poner estado del usuario
function Amigos() {
    var Campos = ["Nick", "Imagen_Perfil", "Vocacion"];
    var spName = "sp_obtenerPerfilAmigos";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarAmigos");
}
function CargarAmigos(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if ($.trim(Response.d[i].Datos)) {
            $("#friends").append('<div class="col-xs-6 col-lg-4"><div class="list-item box r m-b" ><a herf="" class="list-left"><span class="w-40 avatar"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="..."> <i class="on b-white bottom"></i> </span></a><div class="list-body"><div class="text-ellipsis"><a href="">' + Response.d[i].Usuario.Nick + '</a></div><small class="text-muted text-ellipsis">' + Response.d[i].Datos.Vocacion + '</small> </div></div></div >');
        }
    }
}

// Busqueda de un conocido por nick
function BuscarAmigo() {

    var buscar = $('#txtBuscarAmigo').val();
    var Campos = ["Id", "Imagen_Perfil", "Nick", "Vocacion", "Seguidores"];
    var spName = "sp_buscarAmigo";

    var Obj = {
        "spNombre": spName, "Campos": Campos, "Buscar": buscar, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Buscar", data, "BuscandoAmigo");
}

function BuscandoAmigo(Response) {
    $("#lstBuscarAmigo").html("");
    for (var i = 0; i < Response.d.length; i++) {
            $("#lstBuscarAmigo").append('<div class="col-md-8 col-lg-7 col-sm-5 col-xl-7 col-xs-12"><div class="list-item box r m-b" ><a herf="" class="list-left"><span class="w-40 avatar"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="..."> <i class="on b-white bottom"></i> </span></a><div class="list-body"><div class="text-ellipsis">' + Response.d[i].Usuario.Nick + '        <a class="pull-right btn btn-info"href="" onclick="Seguir(' + Response.d[i].Usuario.Id_Usuario + ')" class="btn btn-sm btn-rounded btn-info m-t-xs"> <i class= "fa fa-twitter m-t-xs" ></i > Follow </a></div><small class="text-muted text-ellipsis">' + '<p> Vocacion: ' + Response.d[i].Datos.Vocacion + '  Seguidores: ' + Response.d[i].Datos.Seguidores + '</small> </div></div></div >');
    }

}