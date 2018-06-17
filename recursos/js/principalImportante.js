function CargarComponentes() {
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
    NotificacionesPrincipales();
    Personas();
    PublicacionRecientes();
    CargarTopPersona();
    PersonaFamosa();
}
function RecargarComponentes() {
    $("#muroPrincipal").html("");
    $("#siguiendo").html("");
    $("#seguidores").html("");
    $("#notificacionesPrincipal").html("");
    $("#vocacionUsuario").html("");
    $("#vocacion").html("");
    $("#ubicacionUsuario").html("");
    $("#estadoUsuario").html("");
    $("#seguidores").html("");
    $("#siguiendo").html("");
    $("#noTelefonico").html("");
    $("#noCasa").html("");
    $("#biografia").html("");
    $("#lstBuscarAmigo").html("");
    $("#friends").html("");
    $("#estadoUsuario").html("");
    $("#nombreUsuario").html("");
    $("#imagenFondoPerfilPrincipal").html("");
    $("#imagenPrincipalPersona").html("");
    $("#imagenNBSI").html("");
    $("#imagenNBSD").html("");
    $("#numNotificaciones").html("");
    $("#notificaciones").html("");
    $("#famoso").html("");

    CargarComponentes();
}

//funcion obtener Top con más seguidores
function CargarTopPersona() {
    var Campos = ["IdBuscado", "Nick", "Imagen_Perfil", "Seguidores","NoPublicaciones"];
    var spName = "sp_obtenerFamoso";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "PersonaFamosa");
}
function PersonaFamosa(Response) {
    if ($.trim(Response) && Response.d[0].Usuario.Id_Usuario !== -1) {
        console.warn(Response);
        for (var i = 0; i < Response.d.length; i++) {
        
            if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
                $('#famoso').append('<div class="box-body"><a href="" class="pull-left m-r"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle w-40"></a><div class="clear"><a>' + Response.d[i].Usuario.Nick + '</a><small class="block text-muted">' + Response.d[i].Datos.Seguidores + ' seguidores / ' + Response.d[i].Publicacion.Id_Publicacion + ' publicaciones </small><a onclick="Seguir(' + Response.d[i].Datos.Usuario.Id_Usuario + ')" class="btn btn-sm btn-rounded btn-info m-t-xs"><i class="fa fa-twitter m-t-xs"></i> Follow </a></div></div>');
            }
        }
    }
}
// Cargar las útlimas noticias
function PublicacionRecientes() {
    var Campos = ["Tipo", "Titulo", "Imagen", "Descripcion", "Fuente", "Fecha_Publicacion", "Imagen_Perfil","IdBuscado","Nick"];
    var spName = "sp_obtenerPublicacionesTop";

    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarPublicacionesRecientes");
}
function CargarPublicacionesRecientes(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if ($.trim(Response.d[i].Datos)) {
            if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
                //checar el tipo de la publicacion
                if (Response.d[i].Publicacion.Tipo === 1) {
                    //Sin imagen
                    $("#noticias").append('<div class="box-body"><a href="" class="pull-left m-r"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle w-40"></a><div class="clear"><a>' + Response.d[i].Usuario.Nick + '</a><small class="block text-muted"> *' + Response.d[i].Publicacion.Descripcion + ' * ' + Response.d[i].Publicacion.Fuente + ' </small><a onclick="Seguir(' + Response.d[i].Datos.Usuario.Id_Usuario + ')" class="btn btn-sm btn-rounded btn-info m-t-xs"><i class="fa fa-twitter m-t-xs"></i> Follow </a></div></div>');
                } else if (Response.d[i].Publicacion.Tipo === 2) {
                    //Con imagen
                    $("#noticias").append('<div class="box-body"><a href="" class="pull-left m-r"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle w-40"></a><div class="clear"><a>' + Response.d[i].Usuario.Nick + '</a><small class="block text-muted"> *' + Response.d[i].Publicacion.Descripcion + ' * ' + Response.d[i].Publicacion.Fuente + ' </small><a onclick="Seguir(' + Response.d[i].Datos.Usuario.Id_Usuario + ')" class="btn btn-sm btn-rounded btn-info m-t-xs"><i class="fa fa-twitter m-t-xs"></i> Follow </a></div></div>');
                } else if (Response.d[i].Publicacion.Tipo === 3) {
                    //Con imagen y titulo
                    $("#noticias").append('<div class="box-body"><a href="" class="pull-left m-r"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle w-40"></a><div class="clear"><a>' + Response.d[i].Usuario.Nick + '</a><small class="block text-muted"> *' + Response.d[i].Publicacion.Descripcion + ' * ' + Response.d[i].Publicacion.Fuente + ' </small><a onclick="Seguir(' + Response.d[i].Datos.Usuario.Id_Usuario + ')" class="btn btn-sm btn-rounded btn-info m-t-xs"><i class="fa fa-twitter m-t-xs"></i> Follow </a></div></div>');
                } else if (Response.d[i].Publicacion.Tipo === 4) {
                    //no hay ninguna publicacion de los amigos (no hacer nada)
                }
            }
        }
    }
}
//funcion seguir
function Seguir(IdUsarioDos) {
    var spName = "sp_obtenerPublicacionesTop";
    var Obj = {
        "spNombre": "sp_Seguir", "IdUsuario": IdUser, "IdUsuarioDos": IdUsarioDos
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Seguir", data, "RespuestaSeguir");
}
function RespuestaSeguir(Response) {
    console.warn(Response);
    if (Response.d === "Registrado") {
        RecargarComponentes();
    }
    else {
        alert(Response.d);
    }
}

