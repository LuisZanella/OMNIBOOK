var IdUser;
function loadId() {
    IdUser = window.location.href;
    IdUser = IdUser.split('?')[1];
}
$(document).ready(function () {
    loadId();
    Notificaciones();
    ImagenPerfil();
    ImagenPortada();
    Nombre();
    Vocacion();
    Ubicacion();
    Estado();
    Seguidores();
    Siguiendo();
    NoTelefonico();
    TelefonoCasa();
    Biografia();
    Publicacion();
    Amigos();
});
function Notificaciones() {
    var Campos = ["Imagen_Perfil", "Nick", "Descripcion"];
    var spName = "sp_obtenerNotificacion";
    
    var Obj = {
        "spNombre": spName, "Campos": Campos, "id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarNotificaciones");
}
function CargarNotificaciones(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
            /*SPLISTO*/$("#notificaciones").append('<li class="list-group-item black lt box-shadow-z0 b"> <span class="pull-left m-r" ><img src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="..." class="w-40 img-circle"></span><span class="clear block">' + Response.d[i].Usuario.Nick+' : ' + '<a href="" class="text-primary" >'+ Response.d[i].Publicacion.Descripcion+'</a > </br> <small class="text-muted">hace 10 minutos</small> </span > </li >'); //imagen, nombre de usuario y titulo
    }
}
//Poner la imagen del usuario
function ImagenPerfil() {
    var Campos = ["Imagen_Perfil"];
    var spName = "sp_obtenerImagenPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarImagenPerfil");
}
function CargarImagenPerfil(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#imagenNBSD").append('<span class="avatar w-32"><img src="' + Response.d[i].Datos.ImagenPerfil + '" alt="..."><i class="on b-white bottom"></i></span>'); //imagen, nombre de usuario y titulo
        $("#imagenNBSI").append('<img class=" w-40 img-circle" src="' + Response.d[i].Datos.ImagenPerfil + '" alt="."/>');
        $("#imagenPrincipalPersona").append('<img src="' + Response.d[i].Datos.ImagenPerfil + '"> <i class="on b-white"></i>');
    }
}
//Poner imagen portada
function ImagenPortada() {
    var Campos = ["Imagen_Portada"];
    var spName = "sp_obtenerImagenPortadaPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarImagenPortada");
}
function CargarImagenPortada(Response) {
    console.warn(Response);
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
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarNombre");
}
function CargarNombre(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#nombreUsuario").append(Response.d[i].Usuario.Nombre);
    }
}
//Poner vocacion del usuario
function Vocacion() {
    var Campos = ["Vocacion"];
    var spName = "sp_obtenerVocacionPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarVocacion");
}
function CargarVocacion(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#vocacionUsuario").append(Response.d[i].Datos.Vocacion);
        $("#vocacion").append('<small class="text-muted" >' + Response.d[i].Datos.Vocacion + '</small>');
    }
}
//Poner ubicacion del usuario
function Ubicacion() {
    var Campos = ["Ciudad", "Pais"];
    var spName = "sp_obtenerUbicacionPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarUbicacion");
}
function CargarUbicacion(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#ubicacionUsuario").append(Response.d[i].Datos.Ciudad + ", " + Response.d[i].Datos.Pais);
    }
}
//Poner estado del usuario
function Estado() {
    var Campos = ["Estado"];
    var spName = "sp_obtenerEstadoPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarEstado");
}
function CargarEstado(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#estadoUsuario").append(Response.d[i].Datos.Estado);
    }
}
//Poner seguidores del usuario
function Seguidores() {
    var Campos = ["Seguidores"];
    var spName = "sp_obtenerSeguidoresPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarSeguidores");
}
function CargarSeguidores(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#seguidores").append(Response.d[i].Datos.Seguidores);
    }
}
//Poner siguiendo del usuario
function Siguiendo() {
    var Campos = ["Siguiendo"];
    var spName = "sp_obtenerSiguiendoPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarSiguiendo");
}
function CargarSiguiendo(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#siguiendo").append(Response.d[i].Datos.Siguiendo);
    }
}
//Poner numero telefonico del usuario
function NoTelefonico() {
    var Campos = ["Telefono"];
    var spName = "sp_obtenernoTelefonico";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarNoTelefonico");
}
function CargarNoTelefonico(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#noTelefonico").append('<div class="_500">' + Response.d[i].Datos.Telefono + '</div>');
    }
}
//Poner telefono casa del usuario
function TelefonoCasa() {
    var Campos = ["Telefono_Casa"];
    var spName = "sp_obtenernoTelefonicoCasa";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarTelefonoCasa");
}
function CargarTelefonoCasa(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#noCasa").append('<div class="_500">' + Response.d[i].Datos.Telefono_Casa + '</div>');
    }
}
//Poner biografia del usuario
function Biografia() {
    var Campos = ["Biografia"];
    var spName = "sp_obtenerBiografia";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarBiografia");
}
function CargarBiografia(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#biografia").append('<div>' + Response.d[i].Datos.Biografia + '</div >');
    }
}
//Poner biografia del usuario
function Publicacion() {
    var Campos = ["Tipo", "Titulo", "Imagen", "Descripcion", "Fuente", "Fecha_Publicacion", "Imagen_Perfil"];
    var spName = "sp_obtenerPublicaciones";
    
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarPublicaciones");
}
function CargarPublicaciones(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {

        //checar el tipo de la publicacion
        if (Response.d[i].Publicacion.Tipo == 1) {
            //Sin imagen
            $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle"> </div>  <div class="sl-left"></div> <div class="sl-content"> <div class="sl-date text-muted"> ' + Response.d[i].Publicacion.Fecha_Publicacion + ' </div> <blockquote> <p>' + Response.d[i].Publicacion.Descripcion + '</p> <small>Alguien famoso <cite title="Source Title">' + Response.d[i].Publicacion.Fuente + '</cite></small> </blockquote> </div> </div>');
        } else if (Response.d[i].Publicacion.Tipo == 2) {
            //Con imagen
            $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle"> </div>  <div class="sl-left"> <img src="' + Response.d[i].Publicacion.Imagen + '" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted"> ' + Response.d[i].Publicacion.Fecha_Publicacion + ' </div><blockquote> <p> ' + Response.d[i].Publicacion.Descripcion + '</p> <small>Alguien famoso <cite title="Source Title">' + Response.d[i].Publicacion.Fuente + '</cite></small> </blockquote> </div> </div>');
        } else if (Response.d[i].Publicacion.Tipo == 3) {
            //Con imagen y titulo
            $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle"> </div>  <div class="sl-left"> <img src="' + Response.d[i].Publicacion.Imagen + '" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted"> ' + Response.d[i].Publicacion.Fecha_Publicacion + ' </div> <p>' + Response.d[i].Publicacion.Titulo + '</p> <blockquote> <p> ' + Response.d[i].Publicacion.Descripcion + ' </p> <small>Alguien famoso <cite title="Source Title">' + Response.d[i].Publicacion.Fuente + '</cite></small> </blockquote> </div> </div>');
        }
        $("#biografia").append('<div>' + Response.d[i].Datos.Biografia + '</div >');
    }
}

//funcion para actualizar el estado
function ActualizarEstadoEnBD() {
    var Campos = $("#textAreaEditarEstado").val();

    //validar que no este vacio el texto para actualizar
    if (Campos == "") {
        alert("Necesitas escribir tu nuevo estado para poder actualizarlo.");
    } else {
        var spName = "sp_UpEstado";

        var Obj = {
            "spNombre": spName, "desNueva": Campos, "id": IdUser
        }
        var data = JSON.stringify(Obj);
        ajax("OmniService.asmx", "Actualizar", data, "CargarActualizarEstadoEnBD");
    }
}
function CargarActualizarEstadoEnBD(Response) {
    console.warn(Response);
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
    }
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarAmigos");
}
function CargarAmigos(Response) {
    console.warn(Response);
    for (var i = 0; i < Response.d.length; i++) {
        $("#friends").append('<div class="col-xs-6 col-lg-4"><div class="list-item box r m-b" ><a herf="" class="list-left"><span class="w-40 avatar"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="..."> <i class="on b-white bottom"></i> </span></a><div class="list-body"><div class="text-ellipsis"><a href="">' + Response.d[i].Usuario.Nick + '</a></div><small class="text-muted text-ellipsis">' + Response.d[i].Datos.Vocacion + '</small> </div></div></div >');
    }
}
/*SPLISTO*/ // imagen del amigo, vocacion, nick
//$("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="../recursos/img/logo.png" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted"> Sat, 5 Mar </div> <p>Preparar presentacion</p> <blockquote> <p> Los sentimientos son algo que simplemente no se pueden entender, y se cometen muchas errores por ellos. Pero es aquella la mente la que se encarga de aprender de estos errores </p> <small>Alguien famoso <cite title="Source Title">Fuente titulos</cite></small> </blockquote> </div> </div>');